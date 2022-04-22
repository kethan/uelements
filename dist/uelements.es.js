var Lie = typeof Promise === "function" ? Promise : function(fn) {
  let queue = [], resolved = 0, value;
  fn(($2) => {
    value = $2;
    resolved = 1;
    queue.splice(0).forEach(then);
  });
  return { then };
  function then(fn2) {
    return resolved ? setTimeout(fn2, 0, value) : queue.push(fn2), this;
  }
};
const TRUE = true, FALSE = false;
const QSA$1 = "querySelectorAll";
function add(node) {
  this.observe(node, { subtree: TRUE, childList: TRUE });
}
const notify = (callback, root, MO) => {
  const loop = (nodes, added, removed, connected, pass) => {
    for (let i2 = 0, { length } = nodes; i2 < length; i2++) {
      const node = nodes[i2];
      if (pass || QSA$1 in node) {
        if (connected) {
          if (!added.has(node)) {
            added.add(node);
            removed.delete(node);
            callback(node, connected);
          }
        } else if (!removed.has(node)) {
          removed.add(node);
          added.delete(node);
          callback(node, connected);
        }
        if (!pass)
          loop(node[QSA$1]("*"), added, removed, connected, TRUE);
      }
    }
  };
  const observer = new (MO || MutationObserver)((records) => {
    for (let added = /* @__PURE__ */ new Set(), removed = /* @__PURE__ */ new Set(), i2 = 0, { length } = records; i2 < length; i2++) {
      const { addedNodes, removedNodes } = records[i2];
      loop(removedNodes, added, removed, FALSE, FALSE);
      loop(addedNodes, added, removed, TRUE, FALSE);
    }
  });
  observer.add = add;
  observer.add(root || document);
  return observer;
};
const QSA = "querySelectorAll";
const { document: document$1, Element, MutationObserver: MutationObserver$1, Set: Set$1, WeakMap: WeakMap$1 } = self;
const elements = (element) => QSA in element;
const { filter } = [];
var QSAO = (options) => {
  const live = new WeakMap$1();
  const drop2 = (elements2) => {
    for (let i2 = 0, { length } = elements2; i2 < length; i2++)
      live.delete(elements2[i2]);
  };
  const flush2 = () => {
    const records = observer.takeRecords();
    for (let i2 = 0, { length } = records; i2 < length; i2++) {
      parse2(filter.call(records[i2].removedNodes, elements), false);
      parse2(filter.call(records[i2].addedNodes, elements), true);
    }
  };
  const matches = (element) => element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  const notifier = (element, connected) => {
    let selectors;
    if (connected) {
      for (let q, m2 = matches(element), i2 = 0, { length } = query2; i2 < length; i2++) {
        if (m2.call(element, q = query2[i2])) {
          if (!live.has(element))
            live.set(element, new Set$1());
          selectors = live.get(element);
          if (!selectors.has(q)) {
            selectors.add(q);
            options.handle(element, connected, q);
          }
        }
      }
    } else if (live.has(element)) {
      selectors = live.get(element);
      live.delete(element);
      selectors.forEach((q) => {
        options.handle(element, connected, q);
      });
    }
  };
  const parse2 = (elements2, connected = true) => {
    for (let i2 = 0, { length } = elements2; i2 < length; i2++)
      notifier(elements2[i2], connected);
  };
  const { query: query2 } = options;
  const root = options.root || document$1;
  const observer = notify(notifier, root, MutationObserver$1);
  const { attachShadow } = Element.prototype;
  if (attachShadow)
    Element.prototype.attachShadow = function(init) {
      const shadowRoot = attachShadow.call(this, init);
      observer.add(shadowRoot);
      return shadowRoot;
    };
  if (query2.length)
    parse2(root[QSA](query2));
  return { drop: drop2, flush: flush2, observer, parse: parse2 };
};
const { create, keys } = Object;
const attributes = /* @__PURE__ */ new WeakMap();
const lazy = /* @__PURE__ */ new Set();
const query = [];
const config = {};
const defined = {};
const attributeChangedCallback = (records, o2) => {
  for (let h2 = attributes.get(o2), i2 = 0, { length } = records; i2 < length; i2++) {
    const { target, attributeName, oldValue } = records[i2];
    const newValue = target.getAttribute(attributeName);
    h2.attributeChanged(attributeName, oldValue, newValue);
  }
};
const set = (value, m2, l2, o2) => {
  const handler = create(o2, { element: { enumerable: true, value } });
  for (let i2 = 0, { length } = l2; i2 < length; i2++)
    value.addEventListener(l2[i2].t, handler, l2[i2].o);
  m2.set(value, handler);
  if (handler.init)
    handler.init();
  const { observedAttributes } = o2;
  if (observedAttributes) {
    const mo = new MutationObserver(attributeChangedCallback);
    mo.observe(value, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: observedAttributes.map((attributeName) => {
        if (value.hasAttribute(attributeName))
          handler.attributeChanged(attributeName, null, value.getAttribute(attributeName));
        return attributeName;
      })
    });
    attributes.set(mo, handler);
  }
  return handler;
};
const { drop, flush, parse } = QSAO({
  query,
  handle(element, connected, selector) {
    const { m: m2, l: l2, o: o2 } = config[selector];
    const handler = m2.get(element) || set(element, m2, l2, o2);
    const method = connected ? "connected" : "disconnected";
    if (method in handler)
      handler[method]();
  }
});
const define$1 = (selector, definition) => {
  if (-1 < query.indexOf(selector))
    throw new Error("duplicated: " + selector);
  flush();
  const listeners = [];
  const retype = create(null);
  for (let k2 = keys(definition), i2 = 0, { length } = k2; i2 < length; i2++) {
    const key = k2[i2];
    if (/^on/.test(key) && !/Options$/.test(key)) {
      const options = definition[key + "Options"] || false;
      const lower = key.toLowerCase();
      let type = lower.slice(2);
      listeners.push({ t: type, o: options });
      retype[type] = key;
      if (lower !== key) {
        type = key.slice(2, 3).toLowerCase() + key.slice(3);
        retype[type] = key;
        listeners.push({ t: type, o: options });
      }
    }
  }
  if (listeners.length) {
    definition.handleEvent = function(event) {
      this[retype[event.type]](event);
    };
  }
  query.push(selector);
  config[selector] = { m: /* @__PURE__ */ new WeakMap(), l: listeners, o: definition };
  parse(document.querySelectorAll(selector));
  whenDefined(selector);
  if (!lazy.has(selector))
    defined[selector]._();
};
const whenDefined = (selector) => {
  if (!(selector in defined)) {
    let _2, $2 = new Lie(($3) => {
      _2 = $3;
    });
    defined[selector] = { _: _2, $: $2 };
  }
  return defined[selector].$;
};
var n, l$1, u$1, t$1, o$1, r$1, f$1, e$1 = {}, c$1 = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v$1(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
  return y$1(l2, f2, t2, o2, null);
}
function y$1(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u$1 : r2 };
  return r2 == null && l$1.vnode != null && l$1.vnode(f2), f2;
}
function d$1(n2) {
  return n2.children;
}
function _$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function k$1(n2, l2) {
  if (l2 == null)
    return n2.__ ? k$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? k$1(n2) : null;
}
function b$1(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b$1(n2);
  }
}
function m$1(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !g$1.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(g$1);
}
function g$1() {
  for (var n2; g$1.__r = t$1.length; )
    n2 = t$1.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$1 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = a$1({}, t2)).__v = t2.__v + 1, j$1(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? k$1(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && b$1(t2)));
    });
}
function w$1(n2, l2, u2, i2, t2, o2, r2, f2, s2, a2) {
  var h2, v2, p2, _2, b2, m2, g2, w2 = i2 && i2.__k || c$1, A2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y$1(null, _2, null, null, _2) : Array.isArray(_2) ? y$1(d$1, { children: _2 }, null, null, null) : _2.__b > 0 ? y$1(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, (p2 = w2[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A2; v2++) {
          if ((p2 = w2[v2]) && _2.key == p2.key && _2.type === p2.type) {
            w2[v2] = void 0;
            break;
          }
          p2 = null;
        }
      j$1(n2, _2, p2 = p2 || e$1, t2, o2, r2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p2.ref != v2 && (g2 || (g2 = []), p2.ref && g2.push(p2.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s2 = x$1(_2, s2, n2) : s2 = P(n2, _2, p2, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k$1(p2));
    }
  for (u2.__e = m2, h2 = A2; h2--; )
    w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k$1(i2, h2 + 1)), N(w2[h2], w2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      M(g2[h2], g2[++h2], g2[++h2]);
}
function x$1(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? x$1(i2, l2, u2) : P(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function A$1(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    A$1(n3, l2);
  }) : l2.push(n2)), l2;
}
function P(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != o2 || t2.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t2.nextSibling;
}
function C(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || H(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
}
function $(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function j$1(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var s2, h2, v2, y2, p2, k2, b2, m2, g2, x2, A2, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (s2 = l$1.__b) && s2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _$1(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a$1({}, h2.__s)), a$1(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p2 = h2.state, v2)
          P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i2.__v) {
            h2.props = m2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p2, k2);
          });
        }
        h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l$1.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a$1(a$1({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), A2 = s2 != null && s2.type === d$1 && s2.key == null ? s2.props.children : s2, w$1(n2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (s2 = l$1.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
function z(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i2, t2, o2, r2, f2, c2) {
  var s2, a2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if (d2 === "svg" && (o2 = true), r2 != null) {
    for (; _2 < r2.length; _2++)
      if ((s2 = r2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, r2[_2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), a2 = (y2 = i2.props || e$1).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (r2 != null)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w$1(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, o2 && d2 !== "foreignObject", r2, f2, r2 ? r2[0] : i2.__k && k$1(i2, 0), c2), r2 != null)
      for (_2 = r2.length; _2--; )
        r2[_2] != null && h$1(r2[_2]);
    c2 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l2.value || d2 === "progress" && !_2 || d2 === "option" && _2 !== y2.value) && H(l2, "value", _2, y2.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i2) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, typeof n2.type != "function");
  i2 || n2.__e == null || h$1(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function S(u2, i2, t2) {
  var o2, r2, f2;
  l$1.__ && l$1.__(u2, i2), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, f2 = [], j$1(i2, u2 = (!o2 && t2 || i2).__k = v$1(d$1, null, [u2]), r2 || e$1, e$1, i2.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z(f2, u2);
}
function D(n2, l2) {
  var u2 = { __c: l2 = "__cC" + f$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(m$1);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = c$1.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && o2.getDerivedStateFromError != null && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), t2.componentDidCatch != null && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, _$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), typeof n2 == "function" && (n2 = n2(a$1({}, u2), this.props)), n2 && a$1(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m$1(this));
}, _$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$1(this));
}, _$1.prototype.render = d$1, t$1 = [], o$1 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0, f$1 = 0;
var t, u, r, o = 0, i = [], c = l$1.__b, f = l$1.__r, e = l$1.diffed, a = l$1.__c, v = l$1.unmount;
function l(t2, r2) {
  l$1.__h && l$1.__h(u, t2, o || r2), o = 0;
  var i2 = u.__H || (u.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
}
function m(n2) {
  return o = 1, p(w, n2);
}
function p(n2, r2, o2) {
  var i2 = l(t++, 2);
  return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : w(void 0, r2), function(n3) {
    var t2 = i2.t(i2.__[0], n3);
    i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
  }], i2.__c = u), i2.__;
}
function y(r2, o2) {
  var i2 = l(t++, 3);
  !l$1.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
}
function d(r2, o2) {
  var i2 = l(t++, 4);
  !l$1.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__h.push(i2));
}
function h(n2) {
  return o = 5, _(function() {
    return { current: n2 };
  }, []);
}
function _(n2, u2) {
  var r2 = l(t++, 7);
  return k(r2.__H, u2) && (r2.__ = n2(), r2.__H = u2, r2.__h = n2), r2.__;
}
function A(n2, t2) {
  return o = 8, _(function() {
    return n2;
  }, t2);
}
function F(n2) {
  var r2 = u.context[n2.__c], o2 = l(t++, 9);
  return o2.c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u)), r2.props.value) : n2.__;
}
function x() {
  for (var t2; t2 = i.shift(); )
    if (t2.__P)
      try {
        t2.__H.__h.forEach(g), t2.__H.__h.forEach(j), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], l$1.__e(u2, t2.__v);
      }
}
l$1.__b = function(n2) {
  u = null, c && c(n2);
}, l$1.__r = function(n2) {
  f && f(n2), t = 0;
  var r2 = (u = n2.__c).__H;
  r2 && (r2.__h.forEach(g), r2.__h.forEach(j), r2.__h = []);
}, l$1.diffed = function(t2) {
  e && e(t2);
  var o2 = t2.__c;
  o2 && o2.__H && o2.__H.__h.length && (i.push(o2) !== 1 && r === l$1.requestAnimationFrame || ((r = l$1.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), b && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    b && (t3 = requestAnimationFrame(u2));
  })(x)), u = null;
}, l$1.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(g), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || j(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], l$1.__e(r2, t3.__v);
    }
  }), a && a(t2, u2);
}, l$1.unmount = function(t2) {
  v && v(t2);
  var u2, r2 = t2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      g(n2);
    } catch (n3) {
      u2 = n3;
    }
  }), u2 && l$1.__e(u2, r2.__v));
};
var b = typeof requestAnimationFrame == "function";
function g(n2) {
  var t2 = u, r2 = n2.__c;
  typeof r2 == "function" && (n2.__c = void 0, r2()), u = t2;
}
function j(n2) {
  var t2 = u;
  n2.__c = n2.__(), u = t2;
}
function k(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function w(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
const define = (name, callback, attrs = [], cleanup) => {
  define$1(name, {
    init() {
      this.render();
    },
    observedAttributes: attrs,
    attributeChanged() {
      this.render();
    },
    disconnected() {
      cleanup && cleanup();
    },
    render() {
      let { element } = this;
      S(callback(element), element);
    }
  });
};
export { d$1 as Fragment, D as createContext, define, v$1 as h, S as render, A$1 as toChildArray, A as useCallback, F as useContext, y as useEffect, d as useLayoutEffect, _ as useMemo, p as useReducer, h as useRef, m as useState };
