function Ac(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ms = { exports: {} },
  al = {},
  vs = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr = Symbol.for("react.element"),
  Wc = Symbol.for("react.portal"),
  Qc = Symbol.for("react.fragment"),
  Hc = Symbol.for("react.strict_mode"),
  qc = Symbol.for("react.profiler"),
  Kc = Symbol.for("react.provider"),
  Yc = Symbol.for("react.context"),
  Xc = Symbol.for("react.forward_ref"),
  Gc = Symbol.for("react.suspense"),
  Zc = Symbol.for("react.memo"),
  Jc = Symbol.for("react.lazy"),
  Gi = Symbol.iterator;
function bc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gi && e[Gi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ys = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gs = Object.assign,
  ws = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ws),
    (this.updater = n || ys);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ss() {}
Ss.prototype = sn.prototype;
function ei(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ws),
    (this.updater = n || ys);
}
var ti = (ei.prototype = new Ss());
ti.constructor = ei;
gs(ti, sn.prototype);
ti.isPureReactComponent = !0;
var Zi = Array.isArray,
  ks = Object.prototype.hasOwnProperty,
  ni = { current: null },
  Es = { key: !0, ref: !0, __self: !0, __source: !0 };
function xs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ks.call(t, r) && !Es.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: nr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ni.current,
  };
}
function ef(e, t) {
  return {
    $$typeof: nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ri(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function tf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ji = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? tf("" + e.key)
    : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nr:
          case Wc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Tl(i, 0) : r),
      Zi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ji, "$&/") + "/"),
          Pr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ri(l) &&
            (l = ef(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ji, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Zi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Tl(o, u);
      i += Pr(o, t, n, s, l);
    }
  else if (((s = bc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Tl(o, u++)), (i += Pr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function ar(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function nf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Nr = { transition: null },
  rf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: ni,
  };
function Cs() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: ar,
  forEach: function (e, t, n) {
    ar(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ar(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ar(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ri(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = sn;
T.Fragment = Qc;
T.Profiler = qc;
T.PureComponent = ei;
T.StrictMode = Hc;
T.Suspense = Gc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rf;
T.act = Cs;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ni.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ks.call(t, s) &&
        !Es.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = xs;
T.createFactory = function (e) {
  var t = xs.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Xc, render: e };
};
T.isValidElement = ri;
T.lazy = function (e) {
  return { $$typeof: Jc, _payload: { _status: -1, _result: e }, _init: nf };
};
T.memo = function (e, t) {
  return { $$typeof: Zc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
T.unstable_act = Cs;
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = "18.3.1";
vs.exports = T;
var _ = vs.exports;
const lf = Vc(_),
  of = Ac({ __proto__: null, default: lf }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf = _,
  sf = Symbol.for("react.element"),
  af = Symbol.for("react.fragment"),
  cf = Object.prototype.hasOwnProperty,
  ff = uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  df = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) cf.call(t, r) && !df.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: sf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ff.current,
  };
}
al.Fragment = af;
al.jsx = _s;
al.jsxs = _s;
ms.exports = al;
var j = ms.exports,
  Ps = { exports: {} },
  Se = {},
  Ns = { exports: {} },
  zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var R = C.length;
    C.push(L);
    e: for (; 0 < R; ) {
      var H = (R - 1) >>> 1,
        Z = C[H];
      if (0 < l(Z, L)) (C[H] = L), (C[R] = Z), (R = H);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      R = C.pop();
    if (R !== L) {
      C[0] = R;
      e: for (var H = 0, Z = C.length, ur = Z >>> 1; H < ur; ) {
        var gt = 2 * (H + 1) - 1,
          Rl = C[gt],
          wt = gt + 1,
          sr = C[wt];
        if (0 > l(Rl, R))
          wt < Z && 0 > l(sr, Rl)
            ? ((C[H] = sr), (C[wt] = R), (H = wt))
            : ((C[H] = Rl), (C[gt] = R), (H = gt));
        else if (wt < Z && 0 > l(sr, R)) (C[H] = sr), (C[wt] = R), (H = wt);
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var R = C.sortIndex - L.sortIndex;
    return R !== 0 ? R : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    v = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= C)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function y(C) {
    if (((w = !1), d(C), !v))
      if (n(s) !== null) (v = !0), zl(E);
      else {
        var L = n(a);
        L !== null && Ll(y, L.startTime - C);
      }
  }
  function E(C, L) {
    (v = !1), w && ((w = !1), f(z), (z = -1)), (g = !0);
    var R = m;
    try {
      for (
        d(L), p = n(s);
        p !== null && (!(p.expirationTime > L) || (C && !ze()));

      ) {
        var H = p.callback;
        if (typeof H == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Z = H(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(s) && r(s),
            d(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var ur = !0;
      else {
        var gt = n(a);
        gt !== null && Ll(y, gt.startTime - L), (ur = !1);
      }
      return ur;
    } finally {
      (p = null), (m = R), (g = !1);
    }
  }
  var P = !1,
    N = null,
    z = -1,
    Q = 5,
    O = -1;
  function ze() {
    return !(e.unstable_now() - O < Q);
  }
  function pn() {
    if (N !== null) {
      var C = e.unstable_now();
      O = C;
      var L = !0;
      try {
        L = N(!0, C);
      } finally {
        L ? hn() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var hn;
  if (typeof c == "function")
    hn = function () {
      c(pn);
    };
  else if (typeof MessageChannel < "u") {
    var Xi = new MessageChannel(),
      Bc = Xi.port2;
    (Xi.port1.onmessage = pn),
      (hn = function () {
        Bc.postMessage(null);
      });
  } else
    hn = function () {
      k(pn, 0);
    };
  function zl(C) {
    (N = C), P || ((P = !0), hn());
  }
  function Ll(C, L) {
    z = k(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), zl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var R = m;
      m = L;
      try {
        return C();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var R = m;
      m = C;
      try {
        return L();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, R) {
      var H = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? H + R : H))
          : (R = H),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = R + Z),
        (C = {
          id: h++,
          callback: L,
          priorityLevel: C,
          startTime: R,
          expirationTime: Z,
          sortIndex: -1,
        }),
        R > H
          ? ((C.sortIndex = R),
            t(a, C),
            n(s) === null &&
              C === n(a) &&
              (w ? (f(z), (z = -1)) : (w = !0), Ll(y, R - H)))
          : ((C.sortIndex = Z), t(s, C), v || g || ((v = !0), zl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (C) {
      var L = m;
      return function () {
        var R = m;
        m = L;
        try {
          return C.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(zs);
Ns.exports = zs;
var pf = Ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf = _,
  we = pf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ls = new Set(),
  Dn = {};
function jt(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) Ls.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  lo = Object.prototype.hasOwnProperty,
  mf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bi = {},
  eu = {};
function vf(e) {
  return lo.call(eu, e)
    ? !0
    : lo.call(bi, e)
    ? !1
    : mf.test(e)
    ? (eu[e] = !0)
    : ((bi[e] = !0), !1);
}
function yf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gf(e, t, n, r) {
  if (t === null || typeof t > "u" || yf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var li = /[\-:]([a-z])/g;
function oi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(li, oi);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(li, oi);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(li, oi);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ii(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gf(t, n, l, r) && (n = null),
    r || l === null
      ? vf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cr = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  ui = Symbol.for("react.strict_mode"),
  oo = Symbol.for("react.profiler"),
  Rs = Symbol.for("react.provider"),
  Ts = Symbol.for("react.context"),
  si = Symbol.for("react.forward_ref"),
  io = Symbol.for("react.suspense"),
  uo = Symbol.for("react.suspense_list"),
  ai = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  Os = Symbol.for("react.offscreen"),
  tu = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Ol;
function Cn(e) {
  if (Ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ol = (t && t[1]) || "";
    }
  return (
    `
` +
    Ol +
    e
  );
}
var jl = !1;
function Il(e, t) {
  if (!e || jl) return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function wf(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return "";
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Ft:
      return "Portal";
    case oo:
      return "Profiler";
    case ui:
      return "StrictMode";
    case io:
      return "Suspense";
    case uo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ts:
        return (e.displayName || "Context") + ".Consumer";
      case Rs:
        return (e._context.displayName || "Context") + ".Provider";
      case si:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ai:
        return (
          (t = e.displayName || null), t !== null ? t : so(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return so(e(t));
        } catch {}
    }
  return null;
}
function Sf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return so(t);
    case 8:
      return t === ui ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function js(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kf(e) {
  var t = js(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fr(e) {
  e._valueTracker || (e._valueTracker = kf(e));
}
function Is(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = js(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ur(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ao(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ms(e, t) {
  (t = t.checked), t != null && ii(e, "checked", t, !1);
}
function co(e, t) {
  Ms(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fo(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ru(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fo(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function Fs(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ho(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ds(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var dr,
  Us = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        dr = dr || document.createElement("div"),
          dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = dr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ef = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
  Ef.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function $s(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = $s(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var xf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mo(e, t) {
  if (t) {
    if (xf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function vo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yo = null;
function ci(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var go = null,
  Xt = null,
  Gt = null;
function iu(e) {
  if ((e = or(e))) {
    if (typeof go != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = hl(t)), go(e.stateNode, e.type, t));
  }
}
function As(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e);
}
function Vs() {
  if (Xt) {
    var e = Xt,
      t = Gt;
    if (((Gt = Xt = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function Ws(e, t) {
  return e(t);
}
function Qs() {}
var Ml = !1;
function Hs(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return Ws(e, t, n);
  } finally {
    (Ml = !1), (Xt !== null || Gt !== null) && (Qs(), Vs());
  }
}
function $n(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var wo = !1;
if (qe)
  try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
      get: function () {
        wo = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn);
  } catch {
    wo = !1;
  }
function Cf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Ln = !1,
  $r = null,
  Br = !1,
  So = null,
  _f = {
    onError: function (e) {
      (Ln = !0), ($r = e);
    },
  };
function Pf(e, t, n, r, l, o, i, u, s) {
  (Ln = !1), ($r = null), Cf.apply(_f, arguments);
}
function Nf(e, t, n, r, l, o, i, u, s) {
  if ((Pf.apply(this, arguments), Ln)) {
    if (Ln) {
      var a = $r;
      (Ln = !1), ($r = null);
    } else throw Error(S(198));
    Br || ((Br = !0), (So = a));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function uu(e) {
  if (It(e) !== e) throw Error(S(188));
}
function zf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return uu(l), e;
        if (o === r) return uu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Ks(e) {
  return (e = zf(e)), e !== null ? Ys(e) : null;
}
function Ys(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ys(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xs = we.unstable_scheduleCallback,
  su = we.unstable_cancelCallback,
  Lf = we.unstable_shouldYield,
  Rf = we.unstable_requestPaint,
  q = we.unstable_now,
  Tf = we.unstable_getCurrentPriorityLevel,
  fi = we.unstable_ImmediatePriority,
  Gs = we.unstable_UserBlockingPriority,
  Ar = we.unstable_NormalPriority,
  Of = we.unstable_LowPriority,
  Zs = we.unstable_IdlePriority,
  cl = null,
  $e = null;
function jf(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var je = Math.clz32 ? Math.clz32 : Ff,
  If = Math.log,
  Mf = Math.LN2;
function Ff(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((If(e) / Mf) | 0)) | 0;
}
var pr = 64,
  hr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Pn(u)) : ((o &= i), o !== 0 && (r = Pn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Pn(i)) : o !== 0 && (r = Pn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Df(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Uf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - je(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Df(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ko(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Js() {
  var e = pr;
  return (pr <<= 1), !(pr & 4194240) && (pr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - je(t)),
    (e[t] = n);
}
function $f(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function di(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function bs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ea,
  pi,
  ta,
  na,
  ra,
  Eo = !1,
  mr = [],
  ot = null,
  it = null,
  ut = null,
  Bn = new Map(),
  An = new Map(),
  et = [],
  Bf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && pi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Af(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = yn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = yn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = yn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, yn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), An.set(o, yn(An.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function la(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qs(n)), t !== null)) {
          (e.blockedOn = t),
            ra(e.priority, function () {
              ta(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yo = r), n.target.dispatchEvent(r), (yo = null);
    } else return (t = or(n)), t !== null && pi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cu(e, t, n) {
  zr(e) && n.delete(t);
}
function Vf() {
  (Eo = !1),
    ot !== null && zr(ot) && (ot = null),
    it !== null && zr(it) && (it = null),
    ut !== null && zr(ut) && (ut = null),
    Bn.forEach(cu),
    An.forEach(cu);
}
function gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Eo ||
      ((Eo = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Vf)));
}
function Vn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < mr.length) {
    gn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && gn(ot, e),
      it !== null && gn(it, e),
      ut !== null && gn(ut, e),
      Bn.forEach(t),
      An.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    la(n), n.blockedOn === null && et.shift();
}
var Zt = Ge.ReactCurrentBatchConfig,
  Wr = !0;
function Wf(e, t, n, r) {
  var l = M,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (M = 1), hi(e, t, n, r);
  } finally {
    (M = l), (Zt.transition = o);
  }
}
function Qf(e, t, n, r) {
  var l = M,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (M = 4), hi(e, t, n, r);
  } finally {
    (M = l), (Zt.transition = o);
  }
}
function hi(e, t, n, r) {
  if (Wr) {
    var l = xo(e, t, n, r);
    if (l === null) ql(e, t, r, Qr, n), au(e, r);
    else if (Af(l, e, t, n, r)) r.stopPropagation();
    else if ((au(e, r), t & 4 && -1 < Bf.indexOf(e))) {
      for (; l !== null; ) {
        var o = or(l);
        if (
          (o !== null && ea(o),
          (o = xo(e, t, n, r)),
          o === null && ql(e, t, r, Qr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var Qr = null;
function xo(e, t, n, r) {
  if (((Qr = null), (e = ci(r)), (e = Et(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qr = e), null;
}
function oa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tf()) {
        case fi:
          return 1;
        case Gs:
          return 4;
        case Ar:
        case Of:
          return 16;
        case Zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  mi = null,
  Lr = null;
function ia() {
  if (Lr) return Lr;
  var e,
    t = mi,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Lr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Rr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vr() {
  return !0;
}
function fu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vr
        : fu),
      (this.isPropagationStopped = fu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vr));
      },
      persist: function () {},
      isPersistent: vr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vi = ke(an),
  lr = V({}, an, { view: 0, detail: 0 }),
  Hf = ke(lr),
  Dl,
  Ul,
  wn,
  fl = V({}, lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wn &&
            (wn && e.type === "mousemove"
              ? ((Dl = e.screenX - wn.screenX), (Ul = e.screenY - wn.screenY))
              : (Ul = Dl = 0),
            (wn = e)),
          Dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ul;
    },
  }),
  du = ke(fl),
  qf = V({}, fl, { dataTransfer: 0 }),
  Kf = ke(qf),
  Yf = V({}, lr, { relatedTarget: 0 }),
  $l = ke(Yf),
  Xf = V({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gf = ke(Xf),
  Zf = V({}, an, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jf = ke(Zf),
  bf = V({}, an, { data: 0 }),
  pu = ke(bf),
  ed = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  td = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  nd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function rd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nd[e]) ? !!t[e] : !1;
}
function yi() {
  return rd;
}
var ld = V({}, lr, {
    key: function (e) {
      if (e.key) {
        var t = ed[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? td[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yi,
    charCode: function (e) {
      return e.type === "keypress" ? Rr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  od = ke(ld),
  id = V({}, fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hu = ke(id),
  ud = V({}, lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yi,
  }),
  sd = ke(ud),
  ad = V({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cd = ke(ad),
  fd = V({}, fl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  dd = ke(fd),
  pd = [9, 13, 27, 32],
  gi = qe && "CompositionEvent" in window,
  Rn = null;
qe && "documentMode" in document && (Rn = document.documentMode);
var hd = qe && "TextEvent" in window && !Rn,
  ua = qe && (!gi || (Rn && 8 < Rn && 11 >= Rn)),
  mu = " ",
  vu = !1;
function sa(e, t) {
  switch (e) {
    case "keyup":
      return pd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function aa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function md(e, t) {
  switch (e) {
    case "compositionend":
      return aa(t);
    case "keypress":
      return t.which !== 32 ? null : ((vu = !0), mu);
    case "textInput":
      return (e = t.data), e === mu && vu ? null : e;
    default:
      return null;
  }
}
function vd(e, t) {
  if (Ut)
    return e === "compositionend" || (!gi && sa(e, t))
      ? ((e = ia()), (Lr = mi = nt = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yd[e.type] : t === "textarea";
}
function ca(e, t, n, r) {
  As(r),
    (t = Hr(t, "onChange")),
    0 < t.length &&
      ((n = new vi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tn = null,
  Wn = null;
function gd(e) {
  ka(e, 0);
}
function dl(e) {
  var t = At(e);
  if (Is(t)) return e;
}
function wd(e, t) {
  if (e === "change") return t;
}
var fa = !1;
if (qe) {
  var Bl;
  if (qe) {
    var Al = "oninput" in document;
    if (!Al) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"),
        (Al = typeof gu.oninput == "function");
    }
    Bl = Al;
  } else Bl = !1;
  fa = Bl && (!document.documentMode || 9 < document.documentMode);
}
function wu() {
  Tn && (Tn.detachEvent("onpropertychange", da), (Wn = Tn = null));
}
function da(e) {
  if (e.propertyName === "value" && dl(Wn)) {
    var t = [];
    ca(t, Wn, e, ci(e)), Hs(gd, t);
  }
}
function Sd(e, t, n) {
  e === "focusin"
    ? (wu(), (Tn = t), (Wn = n), Tn.attachEvent("onpropertychange", da))
    : e === "focusout" && wu();
}
function kd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dl(Wn);
}
function Ed(e, t) {
  if (e === "click") return dl(t);
}
function xd(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function Cd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Cd;
function Qn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!lo.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = Su(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Su(n);
  }
}
function pa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ha() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function wi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _d(e) {
  var t = ha(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ku(n, o));
        var i = ku(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pd = qe && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  Co = null,
  On = null,
  _o = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    $t == null ||
    $t !== Ur(r) ||
    ((r = $t),
    "selectionStart" in r && wi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (On && Qn(On, r)) ||
      ((On = r),
      (r = Hr(Co, "onSelect")),
      0 < r.length &&
        ((t = new vi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function yr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: yr("Animation", "AnimationEnd"),
    animationiteration: yr("Animation", "AnimationIteration"),
    animationstart: yr("Animation", "AnimationStart"),
    transitionend: yr("Transition", "TransitionEnd"),
  },
  Vl = {},
  ma = {};
qe &&
  ((ma = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function pl(e) {
  if (Vl[e]) return Vl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ma) return (Vl[e] = t[n]);
  return e;
}
var va = pl("animationend"),
  ya = pl("animationiteration"),
  ga = pl("animationstart"),
  wa = pl("transitionend"),
  Sa = new Map(),
  xu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  Sa.set(e, t), jt(t, [e]);
}
for (var Wl = 0; Wl < xu.length; Wl++) {
  var Ql = xu[Wl],
    Nd = Ql.toLowerCase(),
    zd = Ql[0].toUpperCase() + Ql.slice(1);
  mt(Nd, "on" + zd);
}
mt(va, "onAnimationEnd");
mt(ya, "onAnimationIteration");
mt(ga, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(wa, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ld = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Nf(r, t, void 0, e), (e.currentTarget = null);
}
function ka(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Cu(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Cu(l, u, a), (o = s);
        }
    }
  }
  if (Br) throw ((e = So), (Br = !1), (So = null), e);
}
function D(e, t) {
  var n = t[Ro];
  n === void 0 && (n = t[Ro] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ea(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ea(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[gr]) {
    (e[gr] = !0),
      Ls.forEach(function (n) {
        n !== "selectionchange" && (Ld.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || ((t[gr] = !0), Hl("selectionchange", !1, t));
  }
}
function Ea(e, t, n, r) {
  switch (oa(t)) {
    case 1:
      var l = Wf;
      break;
    case 4:
      l = Qf;
      break;
    default:
      l = hi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !wo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Et(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Hs(function () {
    var a = o,
      h = ci(n),
      p = [];
    e: {
      var m = Sa.get(e);
      if (m !== void 0) {
        var g = vi,
          v = e;
        switch (e) {
          case "keypress":
            if (Rr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = od;
            break;
          case "focusin":
            (v = "focus"), (g = $l);
            break;
          case "focusout":
            (v = "blur"), (g = $l);
            break;
          case "beforeblur":
          case "afterblur":
            g = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = sd;
            break;
          case va:
          case ya:
          case ga:
            g = Gf;
            break;
          case wa:
            g = cd;
            break;
          case "scroll":
            g = Hf;
            break;
          case "wheel":
            g = dd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Jf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = hu;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = $n(c, f)), y != null && w.push(qn(c, y, d)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, v, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== yo &&
            (v = n.relatedTarget || n.fromElement) &&
            (Et(v) || v[Ke]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = a),
              (v = v ? Et(v) : null),
              v !== null &&
                ((k = It(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = a)),
          g !== v)
        ) {
          if (
            ((w = du),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = hu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (k = g == null ? m : At(g)),
            (d = v == null ? m : At(v)),
            (m = new w(y, c + "leave", g, n, h)),
            (m.target = k),
            (m.relatedTarget = d),
            (y = null),
            Et(h) === a &&
              ((w = new w(f, c + "enter", v, n, h)),
              (w.target = d),
              (w.relatedTarget = k),
              (y = w)),
            (k = y),
            g && v)
          )
            t: {
              for (w = g, f = v, c = 0, d = w; d; d = Mt(d)) c++;
              for (d = 0, y = f; y; y = Mt(y)) d++;
              for (; 0 < c - d; ) (w = Mt(w)), c--;
              for (; 0 < d - c; ) (f = Mt(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Mt(w)), (f = Mt(f));
              }
              w = null;
            }
          else w = null;
          g !== null && _u(p, m, g, w, !1),
            v !== null && k !== null && _u(p, k, v, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? At(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var E = wd;
        else if (yu(m))
          if (fa) E = xd;
          else {
            E = kd;
            var P = Sd;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Ed);
        if (E && (E = E(e, a))) {
          ca(p, E, n, h);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            fo(m, "number", m.value);
      }
      switch (((P = a ? At(a) : window), e)) {
        case "focusin":
          (yu(P) || P.contentEditable === "true") &&
            (($t = P), (Co = a), (On = null));
          break;
        case "focusout":
          On = Co = $t = null;
          break;
        case "mousedown":
          _o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_o = !1), Eu(p, n, h);
          break;
        case "selectionchange":
          if (Pd) break;
        case "keydown":
        case "keyup":
          Eu(p, n, h);
      }
      var N;
      if (gi)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Ut
          ? sa(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (ua &&
          n.locale !== "ko" &&
          (Ut || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && Ut && (N = ia())
            : ((nt = h),
              (mi = "value" in nt ? nt.value : nt.textContent),
              (Ut = !0))),
        (P = Hr(a, z)),
        0 < P.length &&
          ((z = new pu(z, e, null, n, h)),
          p.push({ event: z, listeners: P }),
          N ? (z.data = N) : ((N = aa(n)), N !== null && (z.data = N)))),
        (N = hd ? md(e, n) : vd(e, n)) &&
          ((a = Hr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new pu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = N)));
    }
    ka(p, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = $n(e, n)),
      o != null && r.unshift(qn(e, o, l)),
      (o = $n(e, t)),
      o != null && r.push(qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _u(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = $n(n, o)), s != null && i.unshift(qn(n, s, u)))
        : l || ((s = $n(n, o)), s != null && i.push(qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Rd = /\r\n?/g,
  Td = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rd,
      `
`
    )
    .replace(Td, "");
}
function wr(e, t, n) {
  if (((t = Pu(t)), Pu(e) !== t && n)) throw Error(S(425));
}
function qr() {}
var Po = null,
  No = null;
function zo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
  Od = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nu = typeof Promise == "function" ? Promise : void 0,
  jd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nu < "u"
      ? function (e) {
          return Nu.resolve(null).then(e).catch(Id);
        }
      : Lo;
function Id(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + cn,
  Kn = "__reactProps$" + cn,
  Ke = "__reactContainer$" + cn,
  Ro = "__reactEvents$" + cn,
  Md = "__reactListeners$" + cn,
  Fd = "__reactHandles$" + cn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function or(e) {
  return (
    (e = e[Ue] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function hl(e) {
  return e[Kn] || null;
}
var To = [],
  Vt = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > Vt || ((e.current = To[Vt]), (To[Vt] = null), Vt--);
}
function F(e, t) {
  Vt++, (To[Vt] = e.current), (e.current = t);
}
var ht = {},
  ie = vt(ht),
  pe = vt(!1),
  zt = ht;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Kr() {
  U(pe), U(ie);
}
function Lu(e, t, n) {
  if (ie.current !== ht) throw Error(S(168));
  F(ie, t), F(pe, n);
}
function xa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Sf(e) || "Unknown", l));
  return V({}, n, r);
}
function Yr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (zt = ie.current),
    F(ie, e),
    F(pe, pe.current),
    !0
  );
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = xa(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(ie),
      F(ie, e))
    : U(pe),
    F(pe, n);
}
var Ve = null,
  ml = !1,
  Yl = !1;
function Ca(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Dd(e) {
  (ml = !0), Ca(e);
}
function yt() {
  if (!Yl && Ve !== null) {
    Yl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (ml = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Xs(fi, yt), l);
    } finally {
      (M = t), (Yl = !1);
    }
  }
  return null;
}
var Wt = [],
  Qt = 0,
  Xr = null,
  Gr = 0,
  Ee = [],
  xe = 0,
  Lt = null,
  We = 1,
  Qe = "";
function St(e, t) {
  (Wt[Qt++] = Gr), (Wt[Qt++] = Xr), (Xr = e), (Gr = t);
}
function _a(e, t, n) {
  (Ee[xe++] = We), (Ee[xe++] = Qe), (Ee[xe++] = Lt), (Lt = e);
  var r = We;
  e = Qe;
  var l = 32 - je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - je(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - je(t) + l)) | (n << l) | r),
      (Qe = o + e);
  } else (We = (1 << o) | (n << l) | r), (Qe = e);
}
function Si(e) {
  e.return !== null && (St(e, 1), _a(e, 1, 0));
}
function ki(e) {
  for (; e === Xr; )
    (Xr = Wt[--Qt]), (Wt[Qt] = null), (Gr = Wt[--Qt]), (Wt[Qt] = null);
  for (; e === Lt; )
    (Lt = Ee[--xe]),
      (Ee[xe] = null),
      (Qe = Ee[--xe]),
      (Ee[xe] = null),
      (We = Ee[--xe]),
      (Ee[xe] = null);
}
var ge = null,
  ye = null,
  $ = !1,
  Oe = null;
function Pa(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jo(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Tu(e, t)) {
        if (Oo(e)) throw Error(S(418));
        t = st(n.nextSibling);
        var r = ge;
        t && Tu(e, t)
          ? Pa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e));
      }
    } else {
      if (Oo(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e);
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function Sr(e) {
  if (e !== ge) return !1;
  if (!$) return Ou(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Oo(e)) throw (Na(), Error(S(418)));
    for (; t; ) Pa(e, t), (t = st(t.nextSibling));
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Na() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function nn() {
  (ye = ge = null), ($ = !1);
}
function Ei(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Ud = Ge.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ju(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = to(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, y) {
    var E = d.type;
    return E === Dt
      ? h(f, c, d.props.children, y, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Je &&
            ju(E) === c.type))
      ? ((y = l(c, d.props)), (y.ref = Sn(f, c, d)), (y.return = f), y)
      : ((y = Dr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = Sn(f, c, d)),
        (y.return = f),
        y);
  }
  function a(f, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = no(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, y, E) {
    return c === null || c.tag !== 7
      ? ((c = Pt(d, f.mode, y, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = to("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case cr:
          return (
            (d = Dr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Sn(f, null, c)),
            (d.return = f),
            d
          );
        case Ft:
          return (c = no(c, f.mode, d)), (c.return = f), c;
        case Je:
          var y = c._init;
          return p(f, y(c._payload), d);
      }
      if (_n(c) || mn(c))
        return (c = Pt(c, f.mode, d, null)), (c.return = f), c;
      kr(f, c);
    }
    return null;
  }
  function m(f, c, d, y) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          return d.key === E ? s(f, c, d, y) : null;
        case Ft:
          return d.key === E ? a(f, c, d, y) : null;
        case Je:
          return (E = d._init), m(f, c, E(d._payload), y);
      }
      if (_n(d) || mn(d)) return E !== null ? null : h(f, c, d, y, null);
      kr(f, d);
    }
    return null;
  }
  function g(f, c, d, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(c, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case cr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(c, f, y, E);
        case Ft:
          return (f = f.get(y.key === null ? d : y.key) || null), a(c, f, y, E);
        case Je:
          var P = y._init;
          return g(f, c, d, P(y._payload), E);
      }
      if (_n(y) || mn(y)) return (f = f.get(d) || null), h(c, f, y, E, null);
      kr(c, y);
    }
    return null;
  }
  function v(f, c, d, y) {
    for (
      var E = null, P = null, N = c, z = (c = 0), Q = null;
      N !== null && z < d.length;
      z++
    ) {
      N.index > z ? ((Q = N), (N = null)) : (Q = N.sibling);
      var O = m(f, N, d[z], y);
      if (O === null) {
        N === null && (N = Q);
        break;
      }
      e && N && O.alternate === null && t(f, N),
        (c = o(O, c, z)),
        P === null ? (E = O) : (P.sibling = O),
        (P = O),
        (N = Q);
    }
    if (z === d.length) return n(f, N), $ && St(f, z), E;
    if (N === null) {
      for (; z < d.length; z++)
        (N = p(f, d[z], y)),
          N !== null &&
            ((c = o(N, c, z)), P === null ? (E = N) : (P.sibling = N), (P = N));
      return $ && St(f, z), E;
    }
    for (N = r(f, N); z < d.length; z++)
      (Q = g(N, f, z, d[z], y)),
        Q !== null &&
          (e && Q.alternate !== null && N.delete(Q.key === null ? z : Q.key),
          (c = o(Q, c, z)),
          P === null ? (E = Q) : (P.sibling = Q),
          (P = Q));
    return (
      e &&
        N.forEach(function (ze) {
          return t(f, ze);
        }),
      $ && St(f, z),
      E
    );
  }
  function w(f, c, d, y) {
    var E = mn(d);
    if (typeof E != "function") throw Error(S(150));
    if (((d = E.call(d)), d == null)) throw Error(S(151));
    for (
      var P = (E = null), N = c, z = (c = 0), Q = null, O = d.next();
      N !== null && !O.done;
      z++, O = d.next()
    ) {
      N.index > z ? ((Q = N), (N = null)) : (Q = N.sibling);
      var ze = m(f, N, O.value, y);
      if (ze === null) {
        N === null && (N = Q);
        break;
      }
      e && N && ze.alternate === null && t(f, N),
        (c = o(ze, c, z)),
        P === null ? (E = ze) : (P.sibling = ze),
        (P = ze),
        (N = Q);
    }
    if (O.done) return n(f, N), $ && St(f, z), E;
    if (N === null) {
      for (; !O.done; z++, O = d.next())
        (O = p(f, O.value, y)),
          O !== null &&
            ((c = o(O, c, z)), P === null ? (E = O) : (P.sibling = O), (P = O));
      return $ && St(f, z), E;
    }
    for (N = r(f, N); !O.done; z++, O = d.next())
      (O = g(N, f, z, O.value, y)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? z : O.key),
          (c = o(O, c, z)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        N.forEach(function (pn) {
          return t(f, pn);
        }),
      $ && St(f, z),
      E
    );
  }
  function k(f, c, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case cr:
          e: {
            for (var E = d.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = d.type), E === Dt)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Je &&
                    ju(E) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = Sn(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Dt
              ? ((c = Pt(d.props.children, f.mode, y, d.key)),
                (c.return = f),
                (f = c))
              : ((y = Dr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = Sn(f, c, d)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case Ft:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = no(d, f.mode, y)), (c.return = f), (f = c);
          }
          return i(f);
        case Je:
          return (P = d._init), k(f, c, P(d._payload), y);
      }
      if (_n(d)) return v(f, c, d, y);
      if (mn(d)) return w(f, c, d, y);
      kr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = to(d, f.mode, y)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return k;
}
var rn = za(!0),
  La = za(!1),
  Zr = vt(null),
  Jr = null,
  Ht = null,
  xi = null;
function Ci() {
  xi = Ht = Jr = null;
}
function _i(e) {
  var t = Zr.current;
  U(Zr), (e._currentValue = t);
}
function Io(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Jr = e),
    (xi = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (xi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Jr === null) throw Error(S(308));
      (Ht = e), (Jr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var xt = null;
function Pi(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Ra(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Pi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Ni(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ta(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Pi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Tr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), di(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function br(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                p = v.call(g, p, m);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (m = typeof v == "function" ? v.call(g, p, m) : v),
                m == null)
              )
                break e;
              p = V({}, p, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Mu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var ir = {},
  Be = vt(ir),
  Yn = vt(ir),
  Xn = vt(ir);
function Ct(e) {
  if (e === ir) throw Error(S(174));
  return e;
}
function zi(e, t) {
  switch ((F(Xn, t), F(Yn, e), F(Be, ir), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ho(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ho(t, e));
  }
  U(Be), F(Be, t);
}
function ln() {
  U(Be), U(Yn), U(Xn);
}
function Oa(e) {
  Ct(Xn.current);
  var t = Ct(Be.current),
    n = ho(t, e.type);
  t !== n && (F(Yn, e), F(Be, n));
}
function Li(e) {
  Yn.current === e && (U(Be), U(Yn));
}
var B = vt(0);
function el(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xl = [];
function Ri() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Or = Ge.ReactCurrentDispatcher,
  Gl = Ge.ReactCurrentBatchConfig,
  Rt = 0,
  A = null,
  Y = null,
  J = null,
  tl = !1,
  jn = !1,
  Gn = 0,
  $d = 0;
function re() {
  throw Error(S(321));
}
function Ti(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Oi(e, t, n, r, l, o) {
  if (
    ((Rt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Or.current = e === null || e.memoizedState === null ? Wd : Qd),
    (e = n(r, l)),
    jn)
  ) {
    o = 0;
    do {
      if (((jn = !1), (Gn = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Or.current = Hd),
        (e = n(r, l));
    } while (jn);
  }
  if (
    ((Or.current = nl),
    (t = Y !== null && Y.next !== null),
    (Rt = 0),
    (J = Y = A = null),
    (tl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ji() {
  var e = Gn !== 0;
  return (Gn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (A.memoizedState = J = e) : (J = J.next = e), J;
}
function Ne() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? A.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(S(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? (A.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((Rt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (A.lanes |= h),
          (Tt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Tt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (de = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ja() {}
function Ia(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Ii(Da.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jn(9, Fa.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    Rt & 30 || Ma(n, t, l);
  }
  return l;
}
function Ma(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Fa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ua(t) && $a(e);
}
function Da(e, t, n) {
  return n(function () {
    Ua(t) && $a(e);
  });
}
function Ua(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function $a(e) {
  var t = Ye(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Fu(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ba() {
  return Ne().memoizedState;
}
function jr(e, t, n, r) {
  var l = De();
  (A.flags |= e),
    (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r));
}
function vl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && Ti(r, i.deps))) {
      l.memoizedState = Jn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Jn(1 | t, n, o, r));
}
function Du(e, t) {
  return jr(8390656, 8, e, t);
}
function Ii(e, t) {
  return vl(2048, 8, e, t);
}
function Aa(e, t) {
  return vl(4, 2, e, t);
}
function Va(e, t) {
  return vl(4, 4, e, t);
}
function Wa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vl(4, 4, Wa.bind(null, t, e), n)
  );
}
function Mi() {}
function Ha(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ka(e, t, n) {
  return Rt & 21
    ? (Me(n, t) || ((n = Js()), (A.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Bd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Gl.transition = r);
  }
}
function Ya() {
  return Ne().memoizedState;
}
function Ad(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xa(e))
  )
    Ga(t, n);
  else if (((n = Ra(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), Za(n, t, r);
  }
}
function Vd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xa(e)) Ga(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Pi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ra(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), Za(n, t, r));
  }
}
function Xa(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function Ga(e, t) {
  jn = tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), di(e, n);
  }
}
var nl = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Wd = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jr(4194308, 4, Wa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ad.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Fu,
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Fu(!1),
        t = e[0];
      return (e = Bd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = De();
      if ($) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        Rt & 30 || Ma(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Du(Da.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Jn(9, Fa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = b.identifierPrefix;
      if ($) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $d++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qd = {
    readContext: Pe,
    useCallback: Ha,
    useContext: Pe,
    useEffect: Ii,
    useImperativeHandle: Qa,
    useInsertionEffect: Aa,
    useLayoutEffect: Va,
    useMemo: qa,
    useReducer: Zl,
    useRef: Ba,
    useState: function () {
      return Zl(Zn);
    },
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      var t = Ne();
      return Ka(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Zn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: ja,
    useSyncExternalStore: Ia,
    useId: Ya,
    unstable_isNewReconciler: !1,
  },
  Hd = {
    readContext: Pe,
    useCallback: Ha,
    useContext: Pe,
    useEffect: Ii,
    useImperativeHandle: Qa,
    useInsertionEffect: Aa,
    useLayoutEffect: Va,
    useMemo: qa,
    useReducer: Jl,
    useRef: Ba,
    useState: function () {
      return Jl(Zn);
    },
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      var t = Ne();
      return Y === null ? (t.memoizedState = e) : Ka(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(Zn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: ja,
    useSyncExternalStore: Ia,
    useId: Ya,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Tr(t, e, r));
  },
};
function Uu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qn(n, r) || !Qn(l, o)
      : !0
  );
}
function Ja(e, t, n) {
  var r = !1,
    l = ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Pe(o))
      : ((l = he(t) ? zt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? tn(e, l) : ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function $u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function Fo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ni(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Pe(o))
    : ((o = he(t) ? zt : ie.current), (l.context = tn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Mo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && yl.enqueueReplaceState(l, l.state, null),
      br(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function on(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Do(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qd = typeof WeakMap == "function" ? WeakMap : Map;
function ba(e, t, n) {
  (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ll || ((ll = !0), (Ko = r)), Do(e, t);
    }),
    n
  );
}
function ec(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Do(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Do(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ip.bind(null, e, t, n)), t.then(e, e));
}
function Au(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Kd = Ge.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? La(t, null, n, r) : rn(t, e.child, n, r);
}
function Wu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = Oi(e, t, n, r, o, l)),
    (n = ji()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && n && Si(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Qu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Wi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), tc(e, t, o, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qn), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qn(o, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Uo(e, t, n, r, l);
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Kt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Kt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(Kt, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Kt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function rc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uo(e, t, n, r, l) {
  var o = he(n) ? zt : ie.current;
  return (
    (o = tn(t, o)),
    Jt(t, l),
    (n = Oi(e, t, n, r, o, l)),
    (r = ji()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && r && Si(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Hu(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Yr(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Ir(e, t), Ja(t, n, r), Fo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Pe(a))
      : ((a = he(n) ? zt : ie.current), (a = tn(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && $u(t, i, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (i.state = m),
      br(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof h == "function" && (Mo(t, n, h, r), (s = t.memoizedState)),
          (u = be || Uu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ta(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Re(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? zt : ie.current), (s = tn(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && $u(t, i, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (i.state = m),
      br(t, r, i, l);
    var v = t.memoizedState;
    u !== p || m !== v || pe.current || be
      ? (typeof g == "function" && (Mo(t, n, g, r), (v = t.memoizedState)),
        (a = be || Uu(t, n, a, r, m, v, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $o(e, t, n, r, o, l);
}
function $o(e, t, n, r, l, o) {
  rc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ru(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (Kd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = rn(t, e.child, null, o)), (t.child = rn(t, null, u, o)))
      : ue(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ru(t, n, !0),
    t.child
  );
}
function lc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    zi(e, t.containerInfo);
}
function qu(e, t, n, r, l) {
  return nn(), Ei(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ao(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(B, l & 1),
    e === null)
  )
    return (
      jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Sl(i, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ao(n)),
              (t.memoizedState = Bo),
              e)
            : Fi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Yd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dt(u, o)) : ((o = Pt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ao(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fi(e, t) {
  return (
    (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Er(e, t, n, r) {
  return (
    r !== null && Ei(r),
    rn(t, e.child, null, n),
    (e = Fi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bl(Error(S(422)))), Er(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Pt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, i),
        (t.child.memoizedState = Ao(i)),
        (t.memoizedState = Bo),
        o);
  if (!(t.mode & 1)) return Er(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = bl(o, r, void 0)), Er(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Ie(r, e, l, -1));
    }
    return Vi(), (r = bl(Error(S(421)))), Er(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = up.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = st(l.nextSibling)),
      (ge = t),
      ($ = !0),
      (Oe = null),
      e !== null &&
        ((Ee[xe++] = We),
        (Ee[xe++] = Qe),
        (Ee[xe++] = Lt),
        (We = e.id),
        (Qe = e.overflow),
        (Lt = t)),
      (t = Fi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ku(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Io(e.return, t, n);
}
function eo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ku(e, n, t);
        else if (e.tag === 19) Ku(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && el(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          eo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && el(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        eo(t, !0, n, null, o);
        break;
      case "together":
        eo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xd(e, t, n) {
  switch (t.tag) {
    case 3:
      lc(t), nn();
      break;
    case 5:
      Oa(t);
      break;
    case 1:
      he(t.type) && Yr(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(Zr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? oc(e, t, n)
          : (F(B, B.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ic(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nc(e, t, n);
  }
  return Xe(e, t, n);
}
var uc, Vo, sc, ac;
uc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vo = function () {};
sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ao(e, l)), (r = ao(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = po(e, l)), (r = po(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qr);
    }
    mo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Dn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Dn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && D("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
ac = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gd(e, t, n) {
  var r = t.pendingProps;
  switch ((ki(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Kr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        U(pe),
        U(ie),
        Ri(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Sr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Go(Oe), (Oe = null)))),
        Vo(e, t),
        le(t),
        null
      );
    case 5:
      Li(t);
      var l = Ct(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = Ct(Be.current)), Sr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Kn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++) D(Nn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              nu(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              lu(r, o), D("invalid", r);
          }
          mo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Dn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              fr(r), ru(r, o, !0);
              break;
            case "textarea":
              fr(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = qr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ds(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Kn] = r),
            uc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = vo(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++) D(Nn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                nu(e, r), (l = ao(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                lu(e, r), (l = po(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            mo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Bs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Us(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Un(e, s)
                    : typeof s == "number" && Un(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Dn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && D("scroll", e)
                      : s != null && ii(e, o, s, i));
              }
            switch (n) {
              case "input":
                fr(e), ru(e, r, !1);
                break;
              case "textarea":
                fr(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Ct(Xn.current)), Ct(Be.current), Sr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          Na(), nn(), (t.flags |= 98560), (o = !1);
        else if (((o = Sr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Ue] = t;
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else Oe !== null && (Go(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? X === 0 && (X = 3) : Vi())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        ln(), Vo(e, t), e === null && Hn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return _i(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Kr(), le(t), null;
    case 19:
      if ((U(B), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) kn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = el(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    kn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            q() > un &&
            ((t.flags |= 128), (r = !0), kn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = el(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
            )
              return le(t), null;
          } else
            2 * q() - o.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = B.current),
          F(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Ai(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Zd(e, t) {
  switch ((ki(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Kr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        U(pe),
        U(ie),
        Ri(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Li(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return ln(), null;
    case 10:
      return _i(t.type._context), null;
    case 22:
    case 23:
      return Ai(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1,
  oe = !1,
  Jd = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Wo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Yu = !1;
function bd(e, t) {
  if (((Po = Wr), (e = ha()), wi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (No = { focusedElem: e, selectionRange: n }, Wr = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    k = v.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Re(t.type, w),
                      k
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (v = Yu), (Yu = !1), v;
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Wo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function gl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Kn], delete t[Ro], delete t[Md], delete t[Fd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), (e = e.sibling);
}
function qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qo(e, t, n), e = e.sibling; e !== null; ) qo(e, t, n), (e = e.sibling);
}
var ee = null,
  Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) dc(e, t, n), (n = n.sibling);
}
function dc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || qt(n, t);
    case 6:
      var r = ee,
        l = Te;
      (ee = null),
        Ze(e, t, n),
        (ee = r),
        (Te = l),
        ee !== null &&
          (Te
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Te
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Kl(e.parentNode, n)
              : e.nodeType === 1 && Kl(e, n),
            Vn(e))
          : Kl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Te),
        (ee = n.stateNode.containerInfo),
        (Te = !0),
        Ze(e, t, n),
        (ee = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Wo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), Ze(e, t, n), (oe = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Gu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jd()),
      t.forEach(function (r) {
        var l = sp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Te = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        dc(o, i, l), (ee = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pc(t, e), (t = t.sibling);
}
function pc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Fe(e), r & 4)) {
        try {
          In(3, e, e.return), gl(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          In(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), Fe(e), r & 512 && n !== null && qt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Fe(e),
        r & 512 && n !== null && qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ms(l, o),
              vo(u, i);
            var a = vo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === "style"
                ? Bs(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Us(l, p)
                : h === "children"
                ? Un(l, p)
                : ii(l, h, p, a);
            }
            switch (u) {
              case "input":
                co(l, o);
                break;
              case "textarea":
                Fs(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Yt(l, !!o.multiple, g, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yt(l, !!o.multiple, o.defaultValue, !0)
                      : Yt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Kn] = o;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      Le(t, e), Fe(e);
      break;
    case 13:
      Le(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            ($i = q())),
        r & 4 && Gu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (a = oe) || h), Le(t, e), (oe = a)) : Le(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (x = e, h = e.child; h !== null; ) {
            for (p = x = h; x !== null; ) {
              switch (((m = x), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, m, m.return);
                  break;
                case 1:
                  qt(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  qt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ju(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (x = g)) : Ju(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = $s("display", i)));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Fe(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), (r.flags &= -33));
          var o = Xu(e);
          qo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Xu(e);
          Ho(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ep(e, t, n) {
  (x = e), hc(e);
}
function hc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || oe;
        u = xr;
        var a = oe;
        if (((xr = i), (oe = s) && !a))
          for (x = l; x !== null; )
            (i = x),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bu(l)
                : s !== null
                ? ((s.return = i), (x = s))
                : bu(l);
        for (; o !== null; ) (x = o), hc(o), (o = o.sibling);
        (x = l), (xr = u), (oe = a);
      }
      Zu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (x = o)) : Zu(e);
  }
}
function Zu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Mu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Vn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        oe || (t.flags & 512 && Qo(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Ju(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function bu(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Qo(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Qo(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (x = u);
      break;
    }
    x = t.return;
  }
}
var tp = Math.ceil,
  rl = Ge.ReactCurrentDispatcher,
  Di = Ge.ReactCurrentOwner,
  _e = Ge.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  K = null,
  te = 0,
  ve = 0,
  Kt = vt(0),
  X = 0,
  bn = null,
  Tt = 0,
  wl = 0,
  Ui = 0,
  Mn = null,
  fe = null,
  $i = 0,
  un = 1 / 0,
  Ae = null,
  ll = !1,
  Ko = null,
  ct = null,
  Cr = !1,
  rt = null,
  ol = 0,
  Fn = 0,
  Yo = null,
  Mr = -1,
  Fr = 0;
function se() {
  return I & 6 ? q() : Mr !== -1 ? Mr : (Mr = q());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Ud.transition !== null
      ? (Fr === 0 && (Fr = Js()), Fr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oa(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Fn) throw ((Fn = 0), (Yo = null), Error(S(185)));
  rr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (wl |= n), X === 4 && tt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((un = q() + 500), ml && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Uf(e, t);
  var r = Vr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && su(n), t === 1))
      e.tag === 0 ? Dd(es.bind(null, e)) : Ca(es.bind(null, e)),
        jd(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (bs(r)) {
        case 1:
          n = fi;
          break;
        case 4:
          n = Gs;
          break;
        case 16:
          n = Ar;
          break;
        case 536870912:
          n = Zs;
          break;
        default:
          n = Ar;
      }
      n = Ec(n, mc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mc(e, t) {
  if (((Mr = -1), (Fr = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (bt() && e.callbackNode !== n) return null;
  var r = Vr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = yc();
    (b !== e || te !== t) && ((Ae = null), (un = q() + 500), _t(e, t));
    do
      try {
        lp();
        break;
      } catch (u) {
        vc(e, u);
      }
    while (!0);
    Ci(),
      (rl.current = o),
      (I = l),
      K !== null ? (t = 0) : ((b = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ko(e)), l !== 0 && ((r = l), (t = Xo(e, l)))), t === 1)
    )
      throw ((n = bn), _t(e, 0), tt(e, r), me(e, q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !np(l) &&
          ((t = il(e, r)),
          t === 2 && ((o = ko(e)), o !== 0 && ((r = o), (t = Xo(e, o)))),
          t === 1))
      )
        throw ((n = bn), _t(e, 0), tt(e, r), me(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          kt(e, fe, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = $i + 500 - q()), 10 < t))
          ) {
            if (Vr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Lo(kt.bind(null, e, fe, Ae), t);
            break;
          }
          kt(e, fe, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - je(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * tp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lo(kt.bind(null, e, fe, Ae), r);
            break;
          }
          kt(e, fe, Ae);
          break;
        case 5:
          kt(e, fe, Ae);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, q()), e.callbackNode === n ? mc.bind(null, e) : null;
}
function Xo(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && Go(t)),
    e
  );
}
function Go(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function np(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Ui,
      t &= ~wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function es(e) {
  if (I & 6) throw Error(S(327));
  bt();
  var t = Vr(e, 0);
  if (!(t & 1)) return me(e, q()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && ((t = r), (n = Xo(e, r)));
  }
  if (n === 1) throw ((n = bn), _t(e, 0), tt(e, t), me(e, q()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, Ae),
    me(e, q()),
    null
  );
}
function Bi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((un = q() + 500), ml && yt());
  }
}
function Ot(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && bt();
  var t = I;
  I |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (I = t), !(I & 6) && yt();
  }
}
function Ai() {
  (ve = Kt.current), U(Kt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Od(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((ki(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Kr();
          break;
        case 3:
          ln(), U(pe), U(ie), Ri();
          break;
        case 5:
          Li(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          _i(r.type._context);
          break;
        case 22:
        case 23:
          Ai();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (K = e = dt(e.current, null)),
    (te = ve = t),
    (X = 0),
    (bn = null),
    (Ui = wl = Tt = 0),
    (fe = Mn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function vc(e, t) {
  do {
    var n = K;
    try {
      if ((Ci(), (Or.current = nl), tl)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        tl = !1;
      }
      if (
        ((Rt = 0),
        (J = Y = A = null),
        (jn = !1),
        (Gn = 0),
        (Di.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (bn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Au(i);
          if (g !== null) {
            (g.flags &= -257),
              Vu(g, i, u, o, t),
              g.mode & 1 && Bu(o, a, t),
              (t = g),
              (s = a);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(o, a, t), Vi();
              break e;
            }
            s = Error(S(426));
          }
        } else if ($ && u.mode & 1) {
          var k = Au(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Vu(k, i, u, o, t),
              Ei(on(s, u));
            break e;
          }
        }
        (o = s = on(s, u)),
          X !== 4 && (X = 2),
          Mn === null ? (Mn = [o]) : Mn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = ba(o, s, t);
              Iu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = ec(o, u, t);
                Iu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wc(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function yc() {
  var e = rl.current;
  return (rl.current = nl), e === null ? nl : e;
}
function Vi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    b === null || (!(Tt & 268435455) && !(wl & 268435455)) || tt(b, te);
}
function il(e, t) {
  var n = I;
  I |= 2;
  var r = yc();
  (b !== e || te !== t) && ((Ae = null), _t(e, t));
  do
    try {
      rp();
      break;
    } catch (l) {
      vc(e, l);
    }
  while (!0);
  if ((Ci(), (I = n), (rl.current = r), K !== null)) throw Error(S(261));
  return (b = null), (te = 0), X;
}
function rp() {
  for (; K !== null; ) gc(K);
}
function lp() {
  for (; K !== null && !Lf(); ) gc(K);
}
function gc(e) {
  var t = kc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? wc(e) : (K = t),
    (Di.current = null);
}
function wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = Gd(n, t, ve)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function kt(e, t, n) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), op(e, t, n, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function op(e, t, n, r) {
  do bt();
  while (rt !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    ($f(e, o),
    e === b && ((K = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Cr ||
      ((Cr = !0),
      Ec(Ar, function () {
        return bt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Di.current = null),
      bd(e, n),
      pc(n, e),
      _d(No),
      (Wr = !!Po),
      (No = Po = null),
      (e.current = n),
      ep(n),
      Rf(),
      (I = u),
      (M = i),
      (_e.transition = o);
  } else e.current = n;
  if (
    (Cr && ((Cr = !1), (rt = e), (ol = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    jf(n.stateNode),
    me(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ll) throw ((ll = !1), (e = Ko), (Ko = null), e);
  return (
    ol & 1 && e.tag !== 0 && bt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Yo ? Fn++ : ((Fn = 0), (Yo = e))) : (Fn = 0),
    yt(),
    null
  );
}
function bt() {
  if (rt !== null) {
    var e = bs(ol),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (ol = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, x = e.current; x !== null; ) {
          var o = x,
            i = o.child;
          if (x.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (x = a; x !== null; ) {
                  var h = x;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (x = p);
                  else
                    for (; x !== null; ) {
                      h = x;
                      var m = h.sibling,
                        g = h.return;
                      if ((cc(h), h === a)) {
                        x = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (x = m);
                        break;
                      }
                      x = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (x = i);
          else
            e: for (; x !== null; ) {
              if (((o = x), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    In(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (x = f);
                break e;
              }
              x = o.return;
            }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          i = x;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (x = d);
          else
            e: for (i = c; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gl(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === i) {
                x = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (x = y);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((I = l), yt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function ts(e, t, n) {
  (t = on(n, t)),
    (t = ba(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (rr(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) ts(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ts(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = on(n, e)),
            (e = ec(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (rr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ip(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > q() - $i)
        ? _t(e, 0)
        : (Ui |= n)),
    me(e, t);
}
function Sc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hr), (hr <<= 1), !(hr & 130023424) && (hr = 4194304))
      : (t = 1));
  var n = se();
  (e = Ye(e, t)), e !== null && (rr(e, t, n), me(e, n));
}
function up(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sc(e, n);
}
function sp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Sc(e, n);
}
var kc;
kc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Xd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && _a(t, Gr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ir(e, t), (e = t.pendingProps);
      var l = tn(t, ie.current);
      Jt(t, n), (l = Oi(null, t, r, e, l, n));
      var o = ji();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((o = !0), Yr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ni(t),
            (l.updater = yl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Fo(t, r, e, n),
            (t = $o(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && Si(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ir(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = cp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Hu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Qu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Uo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Hu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((lc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ta(e, t),
          br(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = on(Error(S(423)), t)), (t = qu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = on(Error(S(424)), t)), (t = qu(e, t, r, n, l));
            break e;
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                ge = t,
                $ = !0,
                Oe = null,
                n = La(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nn(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Oa(t),
        e === null && jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        zo(r, l) ? (i = null) : o !== null && zo(r, o) && (t.flags |= 32),
        rc(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && jo(t), null;
    case 13:
      return oc(e, t, n);
    case 4:
      return (
        zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Wu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          F(Zr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Io(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Io(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Qu(e, t, r, l, n)
      );
    case 15:
      return tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ir(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Yr(t)) : (e = !1),
        Jt(t, n),
        Ja(t, r, l),
        Fo(t, r, l, n),
        $o(null, t, r, !0, e, n)
      );
    case 19:
      return ic(e, t, n);
    case 22:
      return nc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Ec(e, t) {
  return Xs(e, t);
}
function ap(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new ap(e, t, n, r);
}
function Wi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cp(e) {
  if (typeof e == "function") return Wi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === si)) return 11;
    if (e === ai) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Wi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dt:
        return Pt(n.children, l, o, t);
      case ui:
        (i = 8), (l |= 8);
        break;
      case oo:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = oo), (e.lanes = o), e
        );
      case io:
        return (e = Ce(13, n, t, l)), (e.elementType = io), (e.lanes = o), e;
      case uo:
        return (e = Ce(19, n, t, l)), (e.elementType = uo), (e.lanes = o), e;
      case Os:
        return Sl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rs:
              i = 10;
              break e;
            case Ts:
              i = 9;
              break e;
            case si:
              i = 11;
              break e;
            case ai:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Sl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Os),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function to(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function no(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function fp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Qi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new fp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ni(o),
    e
  );
}
function dp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return xa(e, n, t);
  }
  return t;
}
function Cc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Qi(n, r, !0, e, l, o, i, u, s)),
    (e.context = xc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    at(n, o, l),
    (e.current.lanes = l),
    rr(e, l, r),
    me(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = ft(l);
  return (
    (n = xc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, i)),
    e !== null && (Ie(e, l, i, o), Tr(e, l, i)),
    i
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ns(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hi(e, t) {
  ns(e, t), (e = e.alternate) && ns(e, t);
}
function pp() {
  return null;
}
var _c =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qi(e) {
  this._internalRoot = e;
}
El.prototype.render = qi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  kl(e, t, null, null);
};
El.prototype.unmount = qi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      kl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = na();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && la(e);
  }
};
function Ki(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rs() {}
function hp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = ul(i);
        o.call(a);
      };
    }
    var i = Cc(t, r, e, 0, null, !1, !1, "", rs);
    return (
      (e._reactRootContainer = i),
      (e[Ke] = i.current),
      Hn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = ul(s);
      u.call(a);
    };
  }
  var s = Qi(e, 0, !1, null, null, !1, !1, "", rs);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      kl(t, s, n, r);
    }),
    s
  );
}
function Cl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ul(i);
        u.call(s);
      };
    }
    kl(t, i, e, l);
  } else i = hp(n, t, e, l, r);
  return ul(i);
}
ea = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 &&
          (di(t, n | 1), me(t, q()), !(I & 6) && ((un = q() + 500), yt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        Hi(e, 1);
  }
};
pi = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Hi(e, 134217728);
  }
};
ta = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Hi(e, t);
  }
};
na = function () {
  return M;
};
ra = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
go = function (e, t, n) {
  switch (t) {
    case "input":
      if ((co(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = hl(r);
            if (!l) throw Error(S(90));
            Is(r), co(r, l);
          }
        }
      }
      break;
    case "textarea":
      Fs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Ws = Bi;
Qs = Ot;
var mp = { usingClientEntryPoint: !1, Events: [or, At, hl, As, Vs, Bi] },
  En = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  vp = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ks(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || pp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber)
    try {
      (cl = _r.inject(vp)), ($e = _r);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ki(t)) throw Error(S(200));
  return dp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Ki(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = _c;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Qi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new qi(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Ks(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Ot(e);
};
Se.hydrate = function (e, t, n) {
  if (!xl(t)) throw Error(S(200));
  return Cl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Ki(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = _c;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Cc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ke] = t.current),
    Hn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new El(t);
};
Se.render = function (e, t, n) {
  if (!xl(t)) throw Error(S(200));
  return Cl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!xl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Bi;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Cl(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function Pc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc);
    } catch (e) {
      console.error(e);
    }
}
Pc(), (Ps.exports = Se);
var yp = Ps.exports,
  Nc,
  ls = yp;
(Nc = ls.createRoot), ls.hydrateRoot;
const gp = "./3-B3RtUVwy.png",
  xn = [
    {
      question: "Сколько сторон у правильного шестиугольника?",
      options: ["4", "5", "6", "7"],
      answer: "6",
    },
    {
      question: "Как называется фигура с четырьмя равными сторонами и углами?",
      options: ["Прямоугольник", "Квадрат", "Трапеция", "Ромб"],
      answer: "Квадрат",
    },
    {
      question: "Какая компания выпускает модель Mustang?",
      options: ["Chevrolet", "Ford", "Dodge", "Toyota"],
      answer: "Ford",
    },
    {
      question: "Какой автомобиль первым преодолел скорость в 100 км/ч?",
      options: [
        "Bugatti Type 35",
        "Renault Voiturette",
        "La Jamais Contente",
        "Mercedes-Benz SSK",
      ],
      answer: "La Jamais Contente",
    },
    {
      question: "Какой цвет не используется в флаге Германии?",
      options: ["Черный", "Красный", "Зеленый", "Желтый"],
      answer: "Зеленый",
    },
    {
      question: "Сколько звезд на флаге США?",
      options: ["48", "49", "50", "52"],
      answer: "50",
    },
    {
      question: "Какой национальный напиток известен в Аргентине?",
      options: ["Эспрессо", "Мате", "Чай улун", "Фраппе"],
      answer: "Мате",
    },
    {
      question: "Какая страна является родиной пиццы?",
      options: ["Испания", "Франция", "Италия", "Греция"],
      answer: "Италия",
    },
    {
      question: "Чему равна сумма углов треугольника?",
      options: ["90°", "180°", "270°", "360°"],
      answer: "180°",
    },
    {
      question: "Какое число является следующим после 2³?",
      options: ["4", "6", "8", "9"],
      answer: "8",
    },
    {
      question: "Что измеряется в паскалях?",
      options: ["Скорость", "Температура", "Давление", "Масса"],
      answer: "Давление",
    },
    {
      question: "Кто открыл закон всемирного тяготения?",
      options: [
        "Альберт Эйнштейн",
        "Исаак Ньютон",
        "Никола Тесла",
        "Галилео Галилей",
      ],
      answer: "Исаак Ньютон",
    },
    {
      question: "Сколько будет 12 × 8?",
      options: ["84", "96", "104", "88"],
      answer: "96",
    },
    {
      question: "Какой остаток получится при делении 29 на 5?",
      options: ["1", "2", "3", "4"],
      answer: "4",
    },
    {
      question:
        "Сколько квадратов со стороной 1 см² поместится в квадрате со стороной 4 см?",
      options: ["4", "8", "12", "16"],
      answer: "16",
    },
    {
      question:
        "У Кати 15 яблок. Она отдала 3 другу и съела еще 2. Сколько яблок осталось у Кати?",
      options: ["8", "10", "11", "12"],
      answer: "10",
    },
    {
      question: "Чему равна площадь прямоугольника со сторонами 7 см и 5 см?",
      options: ["35 см²", "12 см²", "24 см²", "45 см²"],
      answer: "35 см²",
    },
    {
      question: "Какое число больше: (7 × 7) или (8 × 6)?",
      options: ["49", "48", "Одинаково", "Ни одно"],
      answer: "49",
    },
    {
      question:
        "В классе 24 ученика. Если половина класса уехала на экскурсию, сколько осталось в классе?",
      options: ["12", "24", "18", "14"],
      answer: "12",
    },
    {
      question:
        "В магазине было 120 тетрадей. После продажи 45 тетрадей, сколько осталось?",
      options: ["55", "65", "75", "85"],
      answer: "75",
    },
    {
      question:
        "У Ани было 18 конфет. Она разложила их в три коробки поровну. Сколько конфет в каждой коробке?",
      options: ["5", "6", "8", "9"],
      answer: "6",
    },
    {
      question: "Чему равен периметр квадрата со стороной 9 см?",
      options: ["18 см", "27 см", "36 см", "45 см"],
      answer: "36 см",
    },
    {
      question: "Решите задачу: 5x - 7 = 18. Чему равно x?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      question: "Сколько граней у прямоугольного параллелепипеда?",
      options: ["4", "6", "8", "12"],
      answer: "6",
    },
    {
      question: "Сколько чисел делится на 3 в диапазоне от 1 до 30?",
      options: ["9", "10", "11", "12"],
      answer: "10",
    },
    {
      question: "Чему равно значение выражения 2³?",
      options: ["6", "8", "9", "12"],
      answer: "8",
    },
    {
      question: "Какая столица Украины?",
      options: ["Харьков", "Одесса", "Киев", "Львов"],
      answer: "Киев",
    },
    {
      question: "Как называется река, которая протекает через Киев?",
      options: ["Днепр", "Дон", "Прут", "Днестр"],
      answer: "Днепр",
    },
    {
      question: "Какой украинский город называют 'городом львов'?",
      options: ["Львов", "Черкассы", "Одесса", "Черновцы"],
      answer: "Львов",
    },
    {
      question: "Сколько градусов в прямом угле?",
      options: ["45", "90", "180", "360"],
      answer: "90",
    },
    {
      question: "Какой элемент таблицы Менделеева обозначается символом 'H'?",
      options: ["Гелий", "Водород", "Гидроген", "Кислород"],
      answer: "Водород",
    },
    {
      question: "Сколько диагоналей можно провести в квадрате?",
      options: ["1", "2", "4", "0"],
      answer: "2",
    },
    {
      question:
        "Как называется трехмерная фигура с шестью равными квадратными гранями?",
      options: ["Параллелепипед", "Призма", "Куб", "Тетраэдр"],
      answer: "Куб",
    },
    {
      question: "Какая марка автомобиля выпускает модель 911?",
      options: ["Ferrari", "Lamborghini", "Porsche", "BMW"],
      answer: "Porsche",
    },
    {
      question: "Какой автомобиль известен как 'Жук'?",
      options: [
        "Volkswagen Beetle",
        "Mini Cooper",
        "Citroen 2CV",
        "Ford Model T",
      ],
      answer: "Volkswagen Beetle",
    },
    {
      question: "Какой из этих флагов имеет красный круг на белом фоне?",
      options: [
        "Флаг Японии",
        "Флаг Южной Кореи",
        "Флаг Швейцарии",
        "Флаг Индонезии",
      ],
      answer: "Флаг Японии",
    },
    {
      question:
        "Какой из этих флагов состоит из трех вертикальных полос: черной, желтой и красной?",
      options: ["Флаг Германии", "Флаг Бельгии", "Флаг Испании", "Флаг Италии"],
      answer: "Флаг Германии",
    },
    {
      question:
        "Какой фрукт известен как 'король фруктов' в Юго-Восточной Азии?",
      options: ["Манго", "Дуриан", "Ананас", "Папайя"],
      answer: "Дуриан",
    },
    {
      question: "Из какой страны произошла паста карбонара?",
      options: ["Франция", "Италия", "Испания", "Греция"],
      answer: "Италия",
    },
    {
      question:
        "Как называется число, которое делится только на себя и на единицу?",
      options: [
        "Простое число",
        "Четное число",
        "Нечетное число",
        "Составное число",
      ],
      answer: "Простое число",
    },
    {
      question: "Чему равна площадь круга с радиусом 3 см? (π ≈ 3.14)",
      options: ["28.26 см²", "18.84 см²", "9 см²", "12.56 см²"],
      answer: "28.26 см²",
    },
    {
      question: "Какой элемент таблицы Менделеева обозначается символом 'O'?",
      options: ["Олово", "Кислород", "Азот", "Неон"],
      answer: "Кислород",
    },
    {
      question: "Скорость света в вакууме примерно равна:",
      options: ["300 000 км/с", "150 000 км/с", "500 000 км/с", "250 000 км/с"],
      answer: "300 000 км/с",
    },
    {
      question: "Что получается при сложении 8 и 7?",
      options: ["13", "15", "16", "14"],
      answer: "15",
    },
    {
      question: "Как называется прибор для измерения температуры?",
      options: ["Барометр", "Анемометр", "Термометр", "Гигрометр"],
      answer: "Термометр",
    },
    {
      question: "Какой из этих городов был первой столицей Украины?",
      options: ["Львов", "Киев", "Харьков", "Одесса"],
      answer: "Харьков",
    },
    {
      question: "Как называется треугольник, у которого все стороны равны?",
      options: [
        "Равнобедренный",
        "Равносторонний",
        "Прямоугольный",
        "Тупоугольный",
      ],
      answer: "Равносторонний",
    },
    {
      question: "Как называется явление, при котором предметы падают на землю?",
      options: ["Магнетизм", "Гравитация", "Электричество", "Трение"],
      answer: "Гравитация",
    },
    {
      question: "Как называется прибор для измерения времени?",
      options: ["Термометр", "Секундомер", "Барометр", "Вольтметр"],
      answer: "Секундомер",
    },
    {
      question:
        "Что произойдет с льдом, если его оставить при комнатной температуре?",
      options: [
        "Он испарится",
        "Он расплавится",
        "Он замерзнет",
        "Он останется льдом",
      ],
      answer: "Он расплавится",
    },
    {
      question: "Какой газ необходим для дыхания живых существ?",
      options: ["Водород", "Углекислый газ", "Кислород", "Азот"],
      answer: "Кислород",
    },
    {
      question:
        "Как называется сила, с которой Земля притягивает к себе предметы?",
      options: [
        "Магнитная сила",
        "Центростремительная сила",
        "Сила тяжести",
        "Электрическая сила",
      ],
      answer: "Сила тяжести",
    },
    {
      question: "Что произойдет с объемом воды, если она замерзнет?",
      options: [
        "Объем уменьшится",
        "Объем увеличится",
        "Объем не изменится",
        "Вода испарится",
      ],
      answer: "Объем увеличится",
    },
    {
      question: "Какой прибор используется для измерения температуры?",
      options: ["Барометр", "Термометр", "Амперметр", "Гигрометр"],
      answer: "Термометр",
    },
    {
      question: "Какая планета ближе всего к Солнцу?",
      options: ["Венера", "Марс", "Меркурий", "Земля"],
      answer: "Меркурий",
    },
    {
      question: "Как называется изменение положения тела в пространстве?",
      options: ["Работа", "Движение", "Трение", "Ускорение"],
      answer: "Движение",
    },
    {
      question: "Что происходит с металлом, когда он нагревается?",
      options: [
        "Он расширяется",
        "Он сжимается",
        "Он исчезает",
        "Он остается таким же",
      ],
      answer: "Он расширяется",
    },
    {
      question: "Какой из этих материалов лучше проводит электричество?",
      options: ["Дерево", "Резина", "Медь", "Стекло"],
      answer: "Медь",
    },
    {
      question: "Что нужно сделать, чтобы получить тень?",
      options: [
        "Включить фонарик",
        "Выйти на свет",
        "Использовать зеркало",
        "Посмотреть в воду",
      ],
      answer: "Выйти на свет",
    },
    {
      question: "Какой цвет поглощает больше всего тепла?",
      options: ["Белый", "Желтый", "Черный", "Зеленый"],
      answer: "Черный",
    },
    {
      question: "Как называется энергия, полученная от Солнца?",
      options: [
        "Тепловая энергия",
        "Кинетическая энергия",
        "Солнечная энергия",
        "Электрическая энергия",
      ],
      answer: "Солнечная энергия",
    },
    {
      question: "Как называется процесс превращения воды в пар?",
      options: ["Конденсация", "Испарение", "Замерзание", "Плавление"],
      answer: "Испарение",
    },
    {
      question: "Кто открыл закон всемирного тяготения?",
      options: [
        "Альберт Эйнштейн",
        "Исаак Ньютон",
        "Галилео Галилей",
        "Никола Тесла",
      ],
      answer: "Исаак Ньютон",
    },
    {
      question: "Какой из этих видов энергии является возобновляемым?",
      options: ["Уголь", "Нефть", "Солнечная энергия", "Газ"],
      answer: "Солнечная энергия",
    },
    {
      question: "Как называется результат деления?",
      options: ["Сумма", "Частное", "Произведение", "Разность"],
      answer: "Частное",
    },
    {
      question: "Какая часть автомобиля отвечает за его движение?",
      options: ["Руль", "Тормоз", "Двигатель", "Фары"],
      answer: "Двигатель",
    },
    {
      question: "Как называется прибор, показывающий скорость автомобиля?",
      options: ["Тахометр", "Спидометр", "Оdomетр", "Барометр"],
      answer: "Спидометр",
    },
    {
      question: "Что нужно делать, чтобы автомобиль начал движение?",
      options: [
        "Нажать на тормоз",
        "Повернуть руль",
        "Нажать на педаль газа",
        "Включить фары",
      ],
      answer: "Нажать на педаль газа",
    },
    {
      question: "Какая жидкость используется для охлаждения двигателя?",
      options: [
        "Моторное масло",
        "Омывающая жидкость",
        "Антифриз",
        "Тормозная жидкость",
      ],
      answer: "Антифриз",
    },
    {
      question: "Какая марка автомобиля родом из Италии?",
      options: ["BMW", "Ferrari", "Toyota", "Ford"],
      answer: "Ferrari",
    },
    {
      question:
        "Как называется устройство, используемое для повышения безопасности детей в автомобиле?",
      options: [
        "Подушка безопасности",
        "Детское кресло",
        "Ремень безопасности",
        "Шлем",
      ],
      answer: "Детское кресло",
    },
    {
      question: "Что делает глушитель в автомобиле?",
      options: [
        "Повышает скорость",
        "Снижает шум двигателя",
        "Подает сигнал",
        "Проверяет уровень топлива",
      ],
      answer: "Снижает шум двигателя",
    },
    {
      question:
        "Какой тип топлива используется в большинстве легковых автомобилей?",
      options: ["Газ", "Бензин", "Дизель", "Водород"],
      answer: "Бензин",
    },
    {
      question: "Какой автомобиль известен своей моделью '911'?",
      options: ["BMW", "Audi", "Porsche", "Mercedes"],
      answer: "Porsche",
    },
    {
      question:
        "Как называется часть автомобиля, соединяющая колеса и помогающая управлять направлением?",
      options: ["Педаль", "Руль", "Двигатель", "Ремень"],
      answer: "Руль",
    },
    {
      question:
        "Какая система автомобиля помогает водителю избежать заноса на скользкой дороге?",
      options: [
        "ABS",
        "Гидроусилитель",
        "Система кондиционирования",
        "Сигнализация",
      ],
      answer: "ABS",
    },
    {
      question:
        "Какая из этих марок автомобилей выпускает модели с логотипом в виде четырех колец?",
      options: ["Audi", "BMW", "Volkswagen", "Toyota"],
      answer: "Audi",
    },
    {
      question: "Как называется часть автомобиля, где находятся пассажиры?",
      options: ["Кузов", "Моторный отсек", "Кабина", "Багажник"],
      answer: "Кабина",
    },
    {
      question: "Что необходимо для запуска двигателя автомобиля?",
      options: [
        "Ключ зажигания",
        "Тормозная педаль",
        "Зеркало заднего вида",
        "Подушка безопасности",
      ],
      answer: "Ключ зажигания",
    },
    {
      question: "Как называется передняя стеклянная часть автомобиля?",
      options: ["Капот", "Багажник", "Лобовое стекло", "Дверь"],
      answer: "Лобовое стекло",
    },
    {
      question:
        "Какой ученый известен своими экспериментами с электричеством и воздушным змеем?",
      options: [
        "Майкл Фарадей",
        "Бенджамин Франклин",
        "Никола Тесла",
        "Томас Эдисон",
      ],
      answer: "Бенджамин Франклин",
    },
    {
      question: "Как называется главный символ Украины?",
      options: ["Флаг", "Тризуб", "Герб", "Гимн"],
      answer: "Тризуб",
    },
    {
      question:
        "Какой математический знак используется для обозначения умножения?",
      options: ["+", "-", "*", "/"],
      answer: "*",
    },
    {
      question: "Что является жидкостью при комнатной температуре?",
      options: ["Азот", "Железо", "Меркурий", "Золото"],
      answer: "Меркурий",
    },
    {
      question: "Сколько граней у куба?",
      options: ["4", "6", "8", "12"],
      answer: "6",
    },
    {
      question: "Какой город называют 'жемчужиной у моря' в Украине?",
      options: ["Одесса", "Киев", "Харьков", "Львов"],
      answer: "Одесса",
    },
    {
      question: "Какой цвет в украинском флаге символизирует небо?",
      options: ["Желтый", "Красный", "Зеленый", "Синий"],
      answer: "Синий",
    },
  ];
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function er() {
  return (
    (er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    er.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const os = "popstate";
function wp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Zo(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Lc(l);
  }
  return kp(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sp() {
  return Math.random().toString(36).substr(2, 8);
}
function is(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Zo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    er(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? fn(t) : t,
      { state: n, key: (t && t.key) || r || Sp() }
    )
  );
}
function Lc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function fn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function kp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = lt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(er({}, i.state, { idx: a }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    u = lt.Pop;
    let k = h(),
      f = k == null ? null : k - a;
    (a = k), s && s({ action: u, location: w.location, delta: f });
  }
  function m(k, f) {
    u = lt.Push;
    let c = Zo(w.location, k, f);
    a = h() + 1;
    let d = is(c, a),
      y = w.createHref(c);
    try {
      i.pushState(d, "", y);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(y);
    }
    o && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(k, f) {
    u = lt.Replace;
    let c = Zo(w.location, k, f);
    a = h();
    let d = is(c, a),
      y = w.createHref(c);
    i.replaceState(d, "", y),
      o && s && s({ action: u, location: w.location, delta: 0 });
  }
  function v(k) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof k == "string" ? k : Lc(k);
    return (
      (c = c.replace(/ $/, "%20")),
      G(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(k) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(os, p),
        (s = k),
        () => {
          l.removeEventListener(os, p), (s = null);
        }
      );
    },
    createHref(k) {
      return t(l, k);
    },
    createURL: v,
    encodeLocation(k) {
      let f = v(k);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(k) {
      return i.go(k);
    },
  };
  return w;
}
var us;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(us || (us = {}));
function Ep(e, t, n) {
  return n === void 0 && (n = "/"), xp(e, t, n, !1);
}
function xp(e, t, n, r) {
  let l = typeof t == "string" ? fn(t) : t,
    o = Oc(l.pathname || "/", n);
  if (o == null) return null;
  let i = Rc(e);
  Cp(i);
  let u = null;
  for (let s = 0; u == null && s < i.length; ++s) {
    let a = Mp(o);
    u = jp(i[s], a, r);
  }
  return u;
}
function Rc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Nt([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Rc(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Tp(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Tc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Tc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Tc(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Cp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _p = /^:[\w-]+$/,
  Pp = 3,
  Np = 2,
  zp = 1,
  Lp = 10,
  Rp = -2,
  ss = (e) => e === "*";
function Tp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ss) && (r += Rp),
    t && (r += Np),
    n
      .filter((l) => !ss(l))
      .reduce((l, o) => l + (_p.test(o) ? Pp : o === "" ? zp : Lp), r)
  );
}
function Op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function jp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = o === "/" ? t : t.slice(o.length) || "/",
      p = as(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = as(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      i.push({
        params: l,
        pathname: Nt([o, p.pathname]),
        pathnameBase: Ap(Nt([o, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (o = Nt([o, p.pathnameBase]));
  }
  return i;
}
function as(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ip(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: g } = h;
      if (m === "*") {
        let w = u[p] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const v = u[p];
      return (
        g && !v ? (a[m] = void 0) : (a[m] = (v || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Ip(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Mp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Oc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Fp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? fn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Dp(n, t)) : t,
    search: Vp(r),
    hash: Wp(l),
  };
}
function Dp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ro(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Up(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function $p(e, t) {
  let n = Up(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Bp(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = fn(e))
    : ((l = er({}, e)),
      G(
        !l.pathname || !l.pathname.includes("?"),
        ro("?", "pathname", "search", l)
      ),
      G(
        !l.pathname || !l.pathname.includes("#"),
        ro("#", "pathname", "hash", l)
      ),
      G(!l.search || !l.search.includes("#"), ro("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = Fp(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const Nt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ap = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Wp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Qp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const jc = ["post", "put", "patch", "delete"];
new Set(jc);
const Hp = ["get", ...jc];
new Set(Hp);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tr.apply(this, arguments)
  );
}
const Yi = _.createContext(null),
  qp = _.createContext(null),
  _l = _.createContext(null),
  Pl = _.createContext(null),
  dn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ic = _.createContext(null);
function Nl() {
  return _.useContext(Pl) != null;
}
function Mc() {
  return Nl() || G(!1), _.useContext(Pl).location;
}
function Fc(e) {
  _.useContext(_l).static || _.useLayoutEffect(e);
}
function Dc() {
  let { isDataRoute: e } = _.useContext(dn);
  return e ? oh() : Kp();
}
function Kp() {
  Nl() || G(!1);
  let e = _.useContext(Yi),
    { basename: t, future: n, navigator: r } = _.useContext(_l),
    { matches: l } = _.useContext(dn),
    { pathname: o } = Mc(),
    i = JSON.stringify($p(l, n.v7_relativeSplatPath)),
    u = _.useRef(!1);
  return (
    Fc(() => {
      u.current = !0;
    }),
    _.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let p = Bp(a, JSON.parse(i), o, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Nt([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, i, o, e]
    )
  );
}
function Yp(e, t) {
  return Xp(e, t);
}
function Xp(e, t, n, r) {
  Nl() || G(!1);
  let { navigator: l } = _.useContext(_l),
    { matches: o } = _.useContext(dn),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = Mc(),
    h;
  if (t) {
    var p;
    let k = typeof t == "string" ? fn(t) : t;
    s === "/" || ((p = k.pathname) != null && p.startsWith(s)) || G(!1),
      (h = k);
  } else h = a;
  let m = h.pathname || "/",
    g = m;
  if (s !== "/") {
    let k = s.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let v = Ep(e, { pathname: g }),
    w = eh(
      v &&
        v.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, u, k.params),
            pathname: Nt([
              s,
              l.encodeLocation
                ? l.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? s
                : Nt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? _.createElement(
        Pl.Provider,
        {
          value: {
            location: tr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: lt.Pop,
          },
        },
        w
      )
    : w;
}
function Gp() {
  let e = lh(),
    t = Qp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Zp = _.createElement(Gp, null);
class Jp extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          dn.Provider,
          { value: this.props.routeContext },
          _.createElement(Ic.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bp(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(Yi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(dn.Provider, { value: t }, r)
  );
}
function eh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = i.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || G(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let p = i[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          v =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || v) {
          (s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((h, p, m) => {
    let g,
      v = !1,
      w = null,
      k = null;
    n &&
      ((g = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || Zp),
      s &&
        (a < 0 && m === 0
          ? ((v = !0), (k = null))
          : a === m &&
            ((v = !0), (k = p.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          g
            ? (d = w)
            : v
            ? (d = k)
            : p.route.Component
            ? (d = _.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          _.createElement(bp, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? _.createElement(Jp, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Uc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Uc || {}),
  sl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(sl || {});
function th(e) {
  let t = _.useContext(Yi);
  return t || G(!1), t;
}
function nh(e) {
  let t = _.useContext(qp);
  return t || G(!1), t;
}
function rh(e) {
  let t = _.useContext(dn);
  return t || G(!1), t;
}
function $c(e) {
  let t = rh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function lh() {
  var e;
  let t = _.useContext(Ic),
    n = nh(sl.UseRouteError),
    r = $c(sl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function oh() {
  let { router: e } = th(Uc.UseNavigateStable),
    t = $c(sl.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Fc(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, tr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const cs = {};
function ih(e, t) {
  cs[t] || ((cs[t] = !0), console.warn(t));
}
const fs = (e, t, n) =>
  ih(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function uh(e, t) {
  (e != null && e.v7_startTransition) ||
    fs(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      fs(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Jo(e) {
  G(!1);
}
function sh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  Nl() && G(!1);
  let s = t.replace(/^\/*/, "/"),
    a = _.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: tr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == "string" && (r = fn(r));
  let {
      pathname: h = "/",
      search: p = "",
      hash: m = "",
      state: g = null,
      key: v = "default",
    } = r,
    w = _.useMemo(() => {
      let k = Oc(h, s);
      return k == null
        ? null
        : {
            location: { pathname: k, search: p, hash: m, state: g, key: v },
            navigationType: l,
          };
    }, [s, h, p, m, g, v, l]);
  return w == null
    ? null
    : _.createElement(
        _l.Provider,
        { value: a },
        _.createElement(Pl.Provider, { children: n, value: w })
      );
}
function ah(e) {
  let { children: t, location: n } = e;
  return Yp(bo(t), n);
}
new Promise(() => {});
function bo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (r, l) => {
      if (!_.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === _.Fragment) {
        n.push.apply(n, bo(r.props.children, o));
        return;
      }
      r.type !== Jo && G(!1), !r.props.index || !r.props.children || G(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = bo(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ch = "6";
try {
  window.__reactRouterVersion = ch;
} catch {}
const fh = "startTransition",
  ds = of[fh];
function dh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = _.useRef();
  o.current == null && (o.current = wp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = _.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    h = _.useCallback(
      (p) => {
        a && ds ? ds(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    _.useLayoutEffect(() => i.listen(h), [i, h]),
    _.useEffect(() => uh(r), [r]),
    _.createElement(sh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
var ps;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ps || (ps = {}));
var hs;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(hs || (hs = {}));
const ph = "./4e-Y1tACsrj.png",
  hh = () => {
    const e = Dc(),
      [t, n] = _.useState(0),
      [r, l] = _.useState(localStorage.getItem("balance") ?? 0),
      [o, i] = _.useState(!1),
      [u, s] = _.useState(""),
      a = (v) => {
        i(!0),
          s(v),
          v === xn[t].answer &&
            l((w) => {
              const k = +w + 100;
              return localStorage.setItem("balance", k.toString()), k;
            });
      },
      h = () => {
        i(!1),
          s(""),
          t < xn.length - 1
            ? n(t + 1)
            : alert(`Игра завершена! Ваш счет: ${r}`);
      },
      { question: p, options: m } = xn[t],
      g = () => {
        e("/");
      };
    return j.jsxs("div", {
      style: {
        fontFamily: "Arial, sans-serif",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${gp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      children: [
        j.jsx("h1", {
          style: { fontFamily: "Arial, sans-serif", padding: "10px" },
          children: "Мишка хочет стать миллионером?",
        }),
        j.jsxs("div", {
          className: "flex-col self-start",
          children: [
            j.jsx("div", {
              className: "w-48 animate-bounce",
              children: j.jsx("img", { src: ph, alt: "euro" }),
            }),
            j.jsxs("h2", {
              className:
                "border border-l-amber-300 border-solid font-bold bg-red-600",
              children: ["Ваш счет: ", r, " Euro"],
            }),
            j.jsx("button", {
              className: "bg-slate-500 m-2",
              onClick: () => g(),
              children: "На главную страницу",
            }),
          ],
        }),
        j.jsxs("div", {
          style: { margin: "40px", alignSelf: "center" },
          children: [
            j.jsxs("div", {
              children: [
                j.jsxs("h2", {
                  className: "mb-2",
                  style: {
                    padding: "10px",
                    fontSize: "35px",
                    background: "white",
                    color: "blue",
                    borderRadius: "20px",
                  },
                  children: ["Вопрос ", t + 1, ": ", p],
                }),
                j.jsx("div", {
                  style: { marginBottom: "20px" },
                  children: m.map((v, w) =>
                    j.jsx(
                      "button",
                      {
                        onClick: () => a(v),
                        style: {
                          backgroundColor:
                            u === v
                              ? v === xn[t].answer
                                ? "green"
                                : "red"
                              : "#ddd",
                          color: "#000",
                          padding: "15px 50px",
                          margin: "0 10px",
                          cursor: "pointer",
                          border: "none",
                          fontFamily: "monospace",
                          fontSize: "25px",
                        },
                        disabled: o,
                        children: v,
                      },
                      w
                    )
                  ),
                }),
              ],
            }),
            o &&
              j.jsxs("div", {
                children: [
                  j.jsxs("p", {
                    style: {
                      padding: "15px 50px",
                      fontSize: "25px",
                      border: "2px solid white",
                    },
                    children: ["Правильный ответ: ", xn[t].answer],
                  }),
                  j.jsx("button", {
                    onClick: h,
                    style: {
                      padding: "20px 40px",
                      backgroundColor: "#007BFF",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "25px",
                    },
                    children: "Следующий вопрос",
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  mh = () => {
    const [e, t] = _.useState(""),
      [n, r] = _.useState(""),
      l = Dc(),
      o = () => {
        e === "mykhailo" && n === "admin"
          ? (localStorage.setItem("auth", "true"), l("/quizpage"))
          : alert("Неверные имя пользователя или пароль");
      };
    return j.jsxs("div", {
      className:
        "flex-col content-center justify-items-center w-[100vw] h-[100vh]",
      children: [
        j.jsxs("div", {
          className: "m-2 w-1/3",
          children: [
            j.jsx("h1", { children: "Login" }),
            j.jsx("h2", { children: "Введите свое имя и пароль" }),
          ],
        }),
        j.jsxs("div", {
          className: "flex flex-col content-between m-3 w-1/2",
          children: [
            j.jsx("input", {
              type: "text",
              placeholder: "Username",
              value: e,
              onChange: (i) => t(i.target.value),
            }),
            j.jsx("input", {
              type: "password",
              placeholder: "Password",
              value: n,
              onChange: (i) => r(i.target.value),
            }),
            j.jsx("button", { onClick: o, children: "Login" }),
          ],
        }),
      ],
    });
  },
  vh = () =>
    j.jsx(j.Fragment, {
      children: j.jsx(dh, {
        children: j.jsxs(ah, {
          children: [
            j.jsx(Jo, { path: "/", element: j.jsx(mh, {}) }),
            j.jsx(Jo, { path: "/quizpage", element: j.jsx(hh, {}) }),
          ],
        }),
      }),
    });
Nc(document.getElementById("root")).render(
  j.jsx(_.StrictMode, { children: j.jsx(vh, {}) })
);
