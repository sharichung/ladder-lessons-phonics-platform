function pp(u, s) {
  for (var o = 0; o < s.length; o++) {
    const c = s[o];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const d in c)
        if (d !== "default" && !(d in u)) {
          const h = Object.getOwnPropertyDescriptor(c, d);
          h && Object.defineProperty(u, d, h.get ? h : {
            enumerable: !0,
            get: () => c[d]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, {
    value: "Module"
  }))
}(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver(d => {
    for (const h of d)
      if (h.type === "childList")
        for (const v of h.addedNodes) v.tagName === "LINK" && v.rel === "modulepreload" && c(v)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function o(d) {
    const h = {};
    return d.integrity && (h.integrity = d.integrity), d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? h.credentials = "include" : d.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h
  }

  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = o(d);
    fetch(d.href, h)
  }
})();

function yp(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u
}
var Ps = {
    exports: {}
  },
  Fn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Em;

function vp() {
  if (Em) return Fn;
  Em = 1;
  var u = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");

  function o(c, d, h) {
    var v = null;
    if (h !== void 0 && (v = "" + h), d.key !== void 0 && (v = "" + d.key), "key" in d) {
      h = {};
      for (var b in d) b !== "key" && (h[b] = d[b])
    } else h = d;
    return d = h.ref, {
      $$typeof: u,
      type: c,
      key: v,
      ref: d !== void 0 ? d : null,
      props: h
    }
  }
  return Fn.Fragment = s, Fn.jsx = o, Fn.jsxs = o, Fn
}
var Am;

function xp() {
  return Am || (Am = 1, Ps.exports = vp()), Ps.exports
}
var r = xp(),
  Fs = {
    exports: {}
  },
  ue = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;

function bp() {
  if (Tm) return ue;
  Tm = 1;
  var u = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    v = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    O = Symbol.iterator;

  function T(x) {
    return x === null || typeof x != "object" ? null : (x = O && x[O] || x["@@iterator"], typeof x == "function" ? x : null)
  }
  var C = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    M = Object.assign,
    k = {};

  function Y(x, B, Q) {
    this.props = x, this.context = B, this.refs = k, this.updater = Q || C
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function (x, B) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, B, "setState")
  }, Y.prototype.forceUpdate = function (x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate")
  };

  function G() {}
  G.prototype = Y.prototype;

  function X(x, B, Q) {
    this.props = x, this.context = B, this.refs = k, this.updater = Q || C
  }
  var F = X.prototype = new G;
  F.constructor = X, M(F, Y.prototype), F.isPureReactComponent = !0;
  var ne = Array.isArray,
    P = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    },
    ve = Object.prototype.hasOwnProperty;

  function Ne(x, B, Q, L, K, oe) {
    return Q = oe.ref, {
      $$typeof: u,
      type: x,
      key: B,
      ref: Q !== void 0 ? Q : null,
      props: oe
    }
  }

  function Z(x, B) {
    return Ne(x.type, B, void 0, void 0, void 0, x.props)
  }

  function me(x) {
    return typeof x == "object" && x !== null && x.$$typeof === u
  }

  function ie(x) {
    var B = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + x.replace(/[=:]/g, function (Q) {
      return B[Q]
    })
  }
  var Ce = /\/+/g;

  function he(x, B) {
    return typeof x == "object" && x !== null && x.key != null ? ie("" + x.key) : B.toString(36)
  }

  function et() {}

  function tt(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(et, et) : (x.status = "pending", x.then(function (B) {
          x.status === "pending" && (x.status = "fulfilled", x.value = B)
        }, function (B) {
          x.status === "pending" && (x.status = "rejected", x.reason = B)
        })), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason
        }
    }
    throw x
  }

  function be(x, B, Q, L, K) {
    var oe = typeof x;
    (oe === "undefined" || oe === "boolean") && (x = null);
    var ae = !1;
    if (x === null) ae = !0;
    else switch (oe) {
      case "bigint":
      case "string":
      case "number":
        ae = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case u:
          case s:
            ae = !0;
            break;
          case j:
            return ae = x._init, be(ae(x._payload), B, Q, L, K)
        }
    }
    if (ae) return K = K(x), ae = L === "" ? "." + he(x, 0) : L, ne(K) ? (Q = "", ae != null && (Q = ae.replace(Ce, "$&/") + "/"), be(K, B, Q, "", function (gt) {
      return gt
    })) : K != null && (me(K) && (K = Z(K, Q + (K.key == null || x && x.key === K.key ? "" : ("" + K.key).replace(Ce, "$&/") + "/") + ae)), B.push(K)), 1;
    ae = 0;
    var pe = L === "" ? "." : L + ":";
    if (ne(x))
      for (var Re = 0; Re < x.length; Re++) L = x[Re], oe = pe + he(L, Re), ae += be(L, B, Q, oe, K);
    else if (Re = T(x), typeof Re == "function")
      for (x = Re.call(x), Re = 0; !(L = x.next()).done;) L = L.value, oe = pe + he(L, Re++), ae += be(L, B, Q, oe, K);
    else if (oe === "object") {
      if (typeof x.then == "function") return be(tt(x), B, Q, L, K);
      throw B = String(x), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.")
    }
    return ae
  }

  function _(x, B, Q) {
    if (x == null) return x;
    var L = [],
      K = 0;
    return be(x, L, "", "", function (oe) {
      return B.call(Q, oe, K++)
    }), L
  }

  function V(x) {
    if (x._status === -1) {
      var B = x._result;
      B = B(), B.then(function (Q) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = Q)
      }, function (Q) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = Q)
      }), x._status === -1 && (x._status = 0, x._result = B)
    }
    if (x._status === 1) return x._result.default;
    throw x._result
  }
  var q = typeof reportError == "function" ? reportError : function (x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(B)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return
    }
    console.error(x)
  };

  function Se() {}
  return ue.Children = {
    map: _,
    forEach: function (x, B, Q) {
      _(x, function () {
        B.apply(this, arguments)
      }, Q)
    },
    count: function (x) {
      var B = 0;
      return _(x, function () {
        B++
      }), B
    },
    toArray: function (x) {
      return _(x, function (B) {
        return B
      }) || []
    },
    only: function (x) {
      if (!me(x)) throw Error("React.Children.only expected to receive a single React element child.");
      return x
    }
  }, ue.Component = Y, ue.Fragment = o, ue.Profiler = d, ue.PureComponent = X, ue.StrictMode = c, ue.Suspense = p, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (x) {
      return P.H.useMemoCache(x)
    }
  }, ue.cache = function (x) {
    return function () {
      return x.apply(null, arguments)
    }
  }, ue.cloneElement = function (x, B, Q) {
    if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
    var L = M({}, x.props),
      K = x.key,
      oe = void 0;
    if (B != null)
      for (ae in B.ref !== void 0 && (oe = void 0), B.key !== void 0 && (K = "" + B.key), B) !ve.call(B, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && B.ref === void 0 || (L[ae] = B[ae]);
    var ae = arguments.length - 2;
    if (ae === 1) L.children = Q;
    else if (1 < ae) {
      for (var pe = Array(ae), Re = 0; Re < ae; Re++) pe[Re] = arguments[Re + 2];
      L.children = pe
    }
    return Ne(x.type, K, void 0, void 0, oe, L)
  }, ue.createContext = function (x) {
    return x = {
      $$typeof: v,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: h,
      _context: x
    }, x
  }, ue.createElement = function (x, B, Q) {
    var L, K = {},
      oe = null;
    if (B != null)
      for (L in B.key !== void 0 && (oe = "" + B.key), B) ve.call(B, L) && L !== "key" && L !== "__self" && L !== "__source" && (K[L] = B[L]);
    var ae = arguments.length - 2;
    if (ae === 1) K.children = Q;
    else if (1 < ae) {
      for (var pe = Array(ae), Re = 0; Re < ae; Re++) pe[Re] = arguments[Re + 2];
      K.children = pe
    }
    if (x && x.defaultProps)
      for (L in ae = x.defaultProps, ae) K[L] === void 0 && (K[L] = ae[L]);
    return Ne(x, oe, void 0, void 0, null, K)
  }, ue.createRef = function () {
    return {
      current: null
    }
  }, ue.forwardRef = function (x) {
    return {
      $$typeof: b,
      render: x
    }
  }, ue.isValidElement = me, ue.lazy = function (x) {
    return {
      $$typeof: j,
      _payload: {
        _status: -1,
        _result: x
      },
      _init: V
    }
  }, ue.memo = function (x, B) {
    return {
      $$typeof: g,
      type: x,
      compare: B === void 0 ? null : B
    }
  }, ue.startTransition = function (x) {
    var B = P.T,
      Q = {};
    P.T = Q;
    try {
      var L = x(),
        K = P.S;
      K !== null && K(Q, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(Se, q)
    } catch (oe) {
      q(oe)
    } finally {
      P.T = B
    }
  }, ue.unstable_useCacheRefresh = function () {
    return P.H.useCacheRefresh()
  }, ue.use = function (x) {
    return P.H.use(x)
  }, ue.useActionState = function (x, B, Q) {
    return P.H.useActionState(x, B, Q)
  }, ue.useCallback = function (x, B) {
    return P.H.useCallback(x, B)
  }, ue.useContext = function (x) {
    return P.H.useContext(x)
  }, ue.useDebugValue = function () {}, ue.useDeferredValue = function (x, B) {
    return P.H.useDeferredValue(x, B)
  }, ue.useEffect = function (x, B, Q) {
    var L = P.H;
    if (typeof Q == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return L.useEffect(x, B)
  }, ue.useId = function () {
    return P.H.useId()
  }, ue.useImperativeHandle = function (x, B, Q) {
    return P.H.useImperativeHandle(x, B, Q)
  }, ue.useInsertionEffect = function (x, B) {
    return P.H.useInsertionEffect(x, B)
  }, ue.useLayoutEffect = function (x, B) {
    return P.H.useLayoutEffect(x, B)
  }, ue.useMemo = function (x, B) {
    return P.H.useMemo(x, B)
  }, ue.useOptimistic = function (x, B) {
    return P.H.useOptimistic(x, B)
  }, ue.useReducer = function (x, B, Q) {
    return P.H.useReducer(x, B, Q)
  }, ue.useRef = function (x) {
    return P.H.useRef(x)
  }, ue.useState = function (x) {
    return P.H.useState(x)
  }, ue.useSyncExternalStore = function (x, B, Q) {
    return P.H.useSyncExternalStore(x, B, Q)
  }, ue.useTransition = function () {
    return P.H.useTransition()
  }, ue.version = "19.1.0", ue
}
var Rm;

function yc() {
  return Rm || (Rm = 1, Fs.exports = bp()), Fs.exports
}
var w = yc();
const Sp = yp(w),
  Np = pp({
    __proto__: null,
    default: Sp
  }, [w]);
var Is = {
    exports: {}
  },
  In = {},
  ec = {
    exports: {}
  },
  tc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;

function jp() {
  return zm || (zm = 1, function (u) {
    function s(_, V) {
      var q = _.length;
      _.push(V);
      e: for (; 0 < q;) {
        var Se = q - 1 >>> 1,
          x = _[Se];
        if (0 < d(x, V)) _[Se] = V, _[q] = x, q = Se;
        else break e
      }
    }

    function o(_) {
      return _.length === 0 ? null : _[0]
    }

    function c(_) {
      if (_.length === 0) return null;
      var V = _[0],
        q = _.pop();
      if (q !== V) {
        _[0] = q;
        e: for (var Se = 0, x = _.length, B = x >>> 1; Se < B;) {
          var Q = 2 * (Se + 1) - 1,
            L = _[Q],
            K = Q + 1,
            oe = _[K];
          if (0 > d(L, q)) K < x && 0 > d(oe, L) ? (_[Se] = oe, _[K] = q, Se = K) : (_[Se] = L, _[Q] = q, Se = Q);
          else if (K < x && 0 > d(oe, q)) _[Se] = oe, _[K] = q, Se = K;
          else break e
        }
      }
      return V
    }

    function d(_, V) {
      var q = _.sortIndex - V.sortIndex;
      return q !== 0 ? q : _.id - V.id
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function () {
        return h.now()
      }
    } else {
      var v = Date,
        b = v.now();
      u.unstable_now = function () {
        return v.now() - b
      }
    }
    var p = [],
      g = [],
      j = 1,
      O = null,
      T = 3,
      C = !1,
      M = !1,
      k = !1,
      Y = !1,
      G = typeof setTimeout == "function" ? setTimeout : null,
      X = typeof clearTimeout == "function" ? clearTimeout : null,
      F = typeof setImmediate < "u" ? setImmediate : null;

    function ne(_) {
      for (var V = o(g); V !== null;) {
        if (V.callback === null) c(g);
        else if (V.startTime <= _) c(g), V.sortIndex = V.expirationTime, s(p, V);
        else break;
        V = o(g)
      }
    }

    function P(_) {
      if (k = !1, ne(_), !M)
        if (o(p) !== null) M = !0, ve || (ve = !0, he());
        else {
          var V = o(g);
          V !== null && be(P, V.startTime - _)
        }
    }
    var ve = !1,
      Ne = -1,
      Z = 5,
      me = -1;

    function ie() {
      return Y ? !0 : !(u.unstable_now() - me < Z)
    }

    function Ce() {
      if (Y = !1, ve) {
        var _ = u.unstable_now();
        me = _;
        var V = !0;
        try {
          e: {
            M = !1,
            k && (k = !1, X(Ne), Ne = -1),
            C = !0;
            var q = T;
            try {
              t: {
                for (ne(_), O = o(p); O !== null && !(O.expirationTime > _ && ie());) {
                  var Se = O.callback;
                  if (typeof Se == "function") {
                    O.callback = null, T = O.priorityLevel;
                    var x = Se(O.expirationTime <= _);
                    if (_ = u.unstable_now(), typeof x == "function") {
                      O.callback = x, ne(_), V = !0;
                      break t
                    }
                    O === o(p) && c(p), ne(_)
                  } else c(p);
                  O = o(p)
                }
                if (O !== null) V = !0;
                else {
                  var B = o(g);
                  B !== null && be(P, B.startTime - _), V = !1
                }
              }
              break e
            }
            finally {
              O = null, T = q, C = !1
            }
            V = void 0
          }
        }
        finally {
          V ? he() : ve = !1
        }
      }
    }
    var he;
    if (typeof F == "function") he = function () {
      F(Ce)
    };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel,
        tt = et.port2;
      et.port1.onmessage = Ce, he = function () {
        tt.postMessage(null)
      }
    } else he = function () {
      G(Ce, 0)
    };

    function be(_, V) {
      Ne = G(function () {
        _(u.unstable_now())
      }, V)
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function (_) {
      _.callback = null
    }, u.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < _ ? Math.floor(1e3 / _) : 5
    }, u.unstable_getCurrentPriorityLevel = function () {
      return T
    }, u.unstable_next = function (_) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = T
      }
      var q = T;
      T = V;
      try {
        return _()
      } finally {
        T = q
      }
    }, u.unstable_requestPaint = function () {
      Y = !0
    }, u.unstable_runWithPriority = function (_, V) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3
      }
      var q = T;
      T = _;
      try {
        return V()
      } finally {
        T = q
      }
    }, u.unstable_scheduleCallback = function (_, V, q) {
      var Se = u.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? Se + q : Se) : q = Se, _) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3
      }
      return x = q + x, _ = {
        id: j++,
        callback: V,
        priorityLevel: _,
        startTime: q,
        expirationTime: x,
        sortIndex: -1
      }, q > Se ? (_.sortIndex = q, s(g, _), o(p) === null && _ === o(g) && (k ? (X(Ne), Ne = -1) : k = !0, be(P, q - Se))) : (_.sortIndex = x, s(p, _), M || C || (M = !0, ve || (ve = !0, he()))), _
    }, u.unstable_shouldYield = ie, u.unstable_wrapCallback = function (_) {
      var V = T;
      return function () {
        var q = T;
        T = V;
        try {
          return _.apply(this, arguments)
        } finally {
          T = q
        }
      }
    }
  }(tc)), tc
}
var Mm;

function wp() {
  return Mm || (Mm = 1, ec.exports = jp()), ec.exports
}
var lc = {
    exports: {}
  },
  rt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _m;

function Ep() {
  if (_m) return rt;
  _m = 1;
  var u = yc();

  function s(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++) g += "&args[]=" + encodeURIComponent(arguments[j])
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function o() {}
  var c = {
      d: {
        f: o,
        r: function () {
          throw Error(s(522))
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o
      },
      p: 0,
      findDOMNode: null
    },
    d = Symbol.for("react.portal");

  function h(p, g, j) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: O == null ? null : "" + O,
      children: p,
      containerInfo: g,
      implementation: j
    }
  }
  var v = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function b(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : ""
  }
  return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, rt.createPortal = function (p, g) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(s(299));
    return h(p, g, null, j)
  }, rt.flushSync = function (p) {
    var g = v.T,
      j = c.p;
    try {
      if (v.T = null, c.p = 2, p) return p()
    } finally {
      v.T = g, c.p = j, c.d.f()
    }
  }, rt.preconnect = function (p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, c.d.C(p, g))
  }, rt.prefetchDNS = function (p) {
    typeof p == "string" && c.d.D(p)
  }, rt.preinit = function (p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var j = g.as,
        O = b(j, g.crossOrigin),
        T = typeof g.integrity == "string" ? g.integrity : void 0,
        C = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      j === "style" ? c.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
        crossOrigin: O,
        integrity: T,
        fetchPriority: C
      }) : j === "script" && c.d.X(p, {
        crossOrigin: O,
        integrity: T,
        fetchPriority: C,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      })
    }
  }, rt.preinitModule = function (p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var j = b(g.as, g.crossOrigin);
          c.d.M(p, {
            crossOrigin: j,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          })
        }
      } else g == null && c.d.M(p)
  }, rt.preload = function (p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var j = g.as,
        O = b(j, g.crossOrigin);
      c.d.L(p, j, {
        crossOrigin: O,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      })
    }
  }, rt.preloadModule = function (p, g) {
    if (typeof p == "string")
      if (g) {
        var j = b(g.as, g.crossOrigin);
        c.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: j,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        })
      } else c.d.m(p)
  }, rt.requestFormReset = function (p) {
    c.d.r(p)
  }, rt.unstable_batchedUpdates = function (p, g) {
    return p(g)
  }, rt.useFormState = function (p, g, j) {
    return v.H.useFormState(p, g, j)
  }, rt.useFormStatus = function () {
    return v.H.useHostTransitionStatus()
  }, rt.version = "19.1.0", rt
}
var Cm;

function Im() {
  if (Cm) return lc.exports;
  Cm = 1;

  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)
    } catch (s) {
      console.error(s)
    }
  }
  return u(), lc.exports = Ep(), lc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Om;

function Ap() {
  if (Om) return In;
  Om = 1;
  var u = wp(),
    s = yc(),
    o = Im();

  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function h(e) {
    var t = e,
      l = e;
    if (e.alternate)
      for (; t.return;) t = t.return;
    else {
      e = t;
      do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? l : null
  }

  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function b(e) {
    if (h(e) !== e) throw Error(c(188))
  }

  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
      return t !== e ? null : e
    }
    for (var l = e, a = t;;) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue
        }
        break
      }
      if (n.child === i.child) {
        for (i = n.child; i;) {
          if (i === l) return b(n), e;
          if (i === a) return b(n), t;
          i = i.sibling
        }
        throw Error(c(188))
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var f = !1, m = n.child; m;) {
          if (m === l) {
            f = !0, l = n, a = i;
            break
          }
          if (m === a) {
            f = !0, a = n, l = i;
            break
          }
          m = m.sibling
        }
        if (!f) {
          for (m = i.child; m;) {
            if (m === l) {
              f = !0, l = i, a = n;
              break
            }
            if (m === a) {
              f = !0, a = i, l = n;
              break
            }
            m = m.sibling
          }
          if (!f) throw Error(c(189))
        }
      }
      if (l.alternate !== a) throw Error(c(190))
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? e : t
  }

  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (t = g(e), t !== null) return t;
      e = e.sibling
    }
    return null
  }
  var j = Object.assign,
    O = Symbol.for("react.element"),
    T = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    G = Symbol.for("react.provider"),
    X = Symbol.for("react.consumer"),
    F = Symbol.for("react.context"),
    ne = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    ve = Symbol.for("react.suspense_list"),
    Ne = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    me = Symbol.for("react.activity"),
    ie = Symbol.for("react.memo_cache_sentinel"),
    Ce = Symbol.iterator;

  function he(e) {
    return e === null || typeof e != "object" ? null : (e = Ce && e[Ce] || e["@@iterator"], typeof e == "function" ? e : null)
  }
  var et = Symbol.for("react.client.reference");

  function tt(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === et ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case Y:
        return "Profiler";
      case k:
        return "StrictMode";
      case P:
        return "Suspense";
      case ve:
        return "SuspenseList";
      case me:
        return "Activity"
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case C:
        return "Portal";
      case F:
        return (e.displayName || "Context") + ".Provider";
      case X:
        return (e._context.displayName || "Context") + ".Consumer";
      case ne:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ne:
        return t = e.displayName || null, t !== null ? t : tt(e.type) || "Memo";
      case Z:
        t = e._payload, e = e._init;
        try {
          return tt(e(t))
        } catch {}
    }
    return null
  }
  var be = Array.isArray,
    _ = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    Se = [],
    x = -1;

  function B(e) {
    return {
      current: e
    }
  }

  function Q(e) {
    0 > x || (e.current = Se[x], Se[x] = null, x--)
  }

  function L(e, t) {
    x++, Se[x] = e.current, e.current = t
  }
  var K = B(null),
    oe = B(null),
    ae = B(null),
    pe = B(null);

  function Re(e, t) {
    switch (L(ae, t), L(oe, e), L(K, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Id(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Id(t), e = em(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0
        }
    }
    Q(K), L(K, e)
  }

  function gt() {
    Q(K), Q(oe), Q(ae)
  }

  function gl(e) {
    e.memoizedState !== null && L(pe, e);
    var t = K.current,
      l = em(t, e.type);
    t !== l && (L(oe, e), L(K, l))
  }

  function pl(e) {
    oe.current === e && (Q(K), Q(oe)), pe.current === e && (Q(pe), Kn._currentValue = q)
  }
  var yl = Object.prototype.hasOwnProperty,
    ku = u.unstable_scheduleCallback,
    Gu = u.unstable_cancelCallback,
    Jh = u.unstable_shouldYield,
    $h = u.unstable_requestPaint,
    kt = u.unstable_now,
    Wh = u.unstable_getCurrentPriorityLevel,
    _c = u.unstable_ImmediatePriority,
    Cc = u.unstable_UserBlockingPriority,
    fi = u.unstable_NormalPriority,
    Ph = u.unstable_LowPriority,
    Oc = u.unstable_IdlePriority,
    Fh = u.log,
    Ih = u.unstable_setDisableYieldValue,
    en = null,
    pt = null;

  function vl(e) {
    if (typeof Fh == "function" && Ih(e), pt && typeof pt.setStrictMode == "function") try {
      pt.setStrictMode(en, e)
    } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : lg,
    eg = Math.log,
    tg = Math.LN2;

  function lg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (eg(e) / tg | 0) | 0
  }
  var di = 256,
    mi = 4194304;

  function Vl(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e
    }
  }

  function hi(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~i, a !== 0 ? n = Vl(a) : (f &= m, f !== 0 ? n = Vl(f) : l || (l = m & ~e, l !== 0 && (n = Vl(l))))) : (m = a & ~i, m !== 0 ? n = Vl(m) : f !== 0 ? n = Vl(f) : l || (l = a & ~e, l !== 0 && (n = Vl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n
  }

  function tn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }

  function ag(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Uc() {
    var e = di;
    return di <<= 1, (di & 4194048) === 0 && (di = 256), e
  }

  function Dc() {
    var e = mi;
    return mi <<= 1, (mi & 62914560) === 0 && (mi = 4194304), e
  }

  function qu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t
  }

  function ln(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
  }

  function ng(e, t, l, a, n, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements,
      y = e.expirationTimes,
      A = e.hiddenUpdates;
    for (l = f & ~l; 0 < l;) {
      var U = 31 - yt(l),
        H = 1 << U;
      m[U] = 0, y[U] = -1;
      var R = A[U];
      if (R !== null)
        for (A[U] = null, U = 0; U < R.length; U++) {
          var z = R[U];
          z !== null && (z.lane &= -536870913)
        }
      l &= ~H
    }
    a !== 0 && Hc(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t))
  }

  function Hc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - yt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090
  }

  function Bc(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l;) {
      var a = 31 - yt(l),
        n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n
    }
  }

  function Lu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0
    }
    return e
  }

  function Yu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function kc() {
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : xm(e.type))
  }

  function ig(e, t) {
    var l = V.p;
    try {
      return V.p = e, t()
    } finally {
      V.p = l
    }
  }
  var xl = Math.random().toString(36).slice(2),
    it = "__reactFiber$" + xl,
    ot = "__reactProps$" + xl,
    ca = "__reactContainer$" + xl,
    Vu = "__reactEvents$" + xl,
    ug = "__reactListeners$" + xl,
    rg = "__reactHandles$" + xl,
    Gc = "__reactResources$" + xl,
    an = "__reactMarker$" + xl;

  function Xu(e) {
    delete e[it], delete e[ot], delete e[Vu], delete e[ug], delete e[rg]
  }

  function oa(e) {
    var t = e[it];
    if (t) return t;
    for (var l = e.parentNode; l;) {
      if (t = l[ca] || l[it]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = nm(e); e !== null;) {
            if (l = e[it]) return l;
            e = nm(e)
          }
        return t
      }
      e = l, l = e.parentNode
    }
    return null
  }

  function fa(e) {
    if (e = e[it] || e[ca]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }

  function nn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33))
  }

  function da(e) {
    var t = e[Gc];
    return t || (t = e[Gc] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), t
  }

  function $e(e) {
    e[an] = !0
  }
  var qc = new Set,
    Lc = {};

  function Xl(e, t) {
    ma(e, t), ma(e + "Capture", t)
  }

  function ma(e, t) {
    for (Lc[e] = t, e = 0; e < t.length; e++) qc.add(t[e])
  }
  var sg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Yc = {},
    Vc = {};

  function cg(e) {
    return yl.call(Vc, e) ? !0 : yl.call(Yc, e) ? !1 : sg.test(e) ? Vc[e] = !0 : (Yc[e] = !0, !1)
  }

  function gi(e, t, l) {
    if (cg(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return
            }
        }
        e.setAttribute(t, "" + l)
      }
  }

  function pi(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return
      }
      e.setAttribute(t, "" + l)
    }
  }

  function $t(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return
      }
      e.setAttributeNS(t, l, "" + a)
    }
  }
  var Qu, Xc;

  function ha(e) {
    if (Qu === void 0) try {
      throw Error()
    } catch (l) {
      var t = l.stack.trim().match(/\n( *(at )?)/);
      Qu = t && t[1] || "", Xc = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + Qu + e + Xc
  }
  var Zu = !1;

  function Ku(e, t) {
    if (!e || Zu) return "";
    Zu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var H = function () {
                throw Error()
              };
              if (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, [])
                } catch (z) {
                  var R = z
                }
                Reflect.construct(e, [], H)
              } else {
                try {
                  H.call()
                } catch (z) {
                  R = z
                }
                e.call(H.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (z) {
                R = z
              }(H = e()) && typeof H.catch == "function" && H.catch(function () {})
            }
          } catch (z) {
            if (z && R && typeof z.stack == "string") return [z.stack, R.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var i = a.DetermineComponentFrameRoot(),
        f = i[0],
        m = i[1];
      if (f && m) {
        var y = f.split(`
`),
          A = m.split(`
`);
        for (n = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot");) a++;
        for (; n < A.length && !A[n].includes("DetermineComponentFrameRoot");) n++;
        if (a === y.length || n === A.length)
          for (a = y.length - 1, n = A.length - 1; 1 <= a && 0 <= n && y[a] !== A[n];) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (y[a] !== A[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || y[a] !== A[n]) {
                  var U = `
` + y[a].replace(" at new ", " at ");
                  return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U
                } while (1 <= a && 0 <= n);
            break
          }
      }
    } finally {
      Zu = !1, Error.prepareStackTrace = l
    }
    return (l = e ? e.displayName || e.name : "") ? ha(l) : ""
  }

  function og(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ha(e.type);
      case 16:
        return ha("Lazy");
      case 13:
        return ha("Suspense");
      case 19:
        return ha("SuspenseList");
      case 0:
      case 15:
        return Ku(e.type, !1);
      case 11:
        return Ku(e.type.render, !1);
      case 1:
        return Ku(e.type, !0);
      case 31:
        return ha("Activity");
      default:
        return ""
    }
  }

  function Qc(e) {
    try {
      var t = "";
      do t += og(e), e = e.return; while (e);
      return t
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack
    }
  }

  function At(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return ""
    }
  }

  function Zc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function fg(e) {
    var t = Zc(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get,
        i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return n.call(this)
        },
        set: function (f) {
          a = "" + f, i.call(this, f)
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function () {
          return a
        },
        setValue: function (f) {
          a = "" + f
        },
        stopTracking: function () {
          e._valueTracker = null, delete e[t]
        }
      }
    }
  }

  function yi(e) {
    e._valueTracker || (e._valueTracker = fg(e))
  }

  function Kc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return e && (a = Zc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1
  }

  function vi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var dg = /[\n"\\]/g;

  function Tt(e) {
    return e.replace(dg, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }

  function Ju(e, t, l, a, n, i, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? $u(e, f, At(t)) : l != null ? $u(e, f, At(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + At(m) : e.removeAttribute("name")
  }

  function Jc(e, t, l, a, n, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) return;
      l = l != null ? "" + At(l) : "", t = t != null ? "" + At(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t
    }
    a = a ? ? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = m ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f)
  }

  function $u(e, t, l) {
    t === "number" && vi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
  }

  function ga(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0)
    } else {
      for (l = "" + At(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return
        }
        t !== null || e[n].disabled || (t = e[n])
      }
      t !== null && (t.selected = !0)
    }
  }

  function $c(e, t, l) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return
    }
    e.defaultValue = l != null ? "" + At(l) : ""
  }

  function Wc(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(c(92));
        if (be(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0]
        }
        l = a
      }
      l == null && (l = ""), t = l
    }
    l = At(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a)
  }

  function pa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return
      }
    }
    e.textContent = t
  }
  var mg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function Pc(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || mg.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
  }

  function Fc(e, t, l) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (e = e.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && Pc(e, n, a)
    } else
      for (var i in t) t.hasOwnProperty(i) && Pc(e, i, t[i])
  }

  function Wu(e) {
    if (e.indexOf("-") === -1) return !1;
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
        return !0
    }
  }
  var hg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    gg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function xi(e) {
    return gg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
  }
  var Pu = null;

  function Fu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var ya = null,
    va = null;

  function Ic(e) {
    var t = fa(e);
    if (t && (e = t.stateNode)) {
      var l = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ju(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + Tt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[ot] || null;
                if (!n) throw Error(c(90));
                Ju(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
              }
            }
            for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && Kc(a)
          }
          break e;
        case "textarea":
          $c(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && ga(e, !!l.multiple, t, !1)
      }
    }
  }
  var Iu = !1;

  function eo(e, t, l) {
    if (Iu) return e(t, l);
    Iu = !0;
    try {
      var a = e(t);
      return a
    } finally {
      if (Iu = !1, (ya !== null || va !== null) && (nu(), ya && (t = ya, e = va, va = ya = null, Ic(t), e)))
        for (t = 0; t < e.length; t++) Ic(e[t])
    }
  }

  function un(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[ot] || null;
    if (a === null) return null;
    l = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(c(231, t, typeof l));
    return l
  }
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    er = !1;
  if (Wt) try {
    var rn = {};
    Object.defineProperty(rn, "passive", {
      get: function () {
        er = !0
      }
    }), window.addEventListener("test", rn, rn), window.removeEventListener("test", rn, rn)
  } catch {
    er = !1
  }
  var bl = null,
    tr = null,
    bi = null;

  function to() {
    if (bi) return bi;
    var e, t = tr,
      l = t.length,
      a, n = "value" in bl ? bl.value : bl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === n[i - a]; a++);
    return bi = n.slice(e, 1 < a ? 1 - a : void 0)
  }

  function Si(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }

  function Ni() {
    return !0
  }

  function lo() {
    return !1
  }

  function ft(e) {
    function t(l, a, n, i, f) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ni : lo, this.isPropagationStopped = lo, this
    }
    return j(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ni)
      },
      stopPropagation: function () {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ni)
      },
      persist: function () {},
      isPersistent: Ni
    }), t
  }
  var Ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    ji = ft(Ql),
    sn = j({}, Ql, {
      view: 0,
      detail: 0
    }),
    pg = ft(sn),
    lr, ar, cn, wi = j({}, sn, {
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
      getModifierState: ir,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== cn && (cn && e.type === "mousemove" ? (lr = e.screenX - cn.screenX, ar = e.screenY - cn.screenY) : ar = lr = 0, cn = e), lr)
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ar
      }
    }),
    ao = ft(wi),
    yg = j({}, wi, {
      dataTransfer: 0
    }),
    vg = ft(yg),
    xg = j({}, sn, {
      relatedTarget: 0
    }),
    nr = ft(xg),
    bg = j({}, Ql, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Sg = ft(bg),
    Ng = j({}, Ql, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    jg = ft(Ng),
    wg = j({}, Ql, {
      data: 0
    }),
    no = ft(wg),
    Eg = {
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
      MozPrintableKey: "Unidentified"
    },
    Ag = {
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
      224: "Meta"
    },
    Tg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function Rg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Tg[e]) ? !!t[e] : !1
  }

  function ir() {
    return Rg
  }
  var zg = j({}, sn, {
      key: function (e) {
        if (e.key) {
          var t = Eg[e.key] || e.key;
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ag[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ir,
      charCode: function (e) {
        return e.type === "keypress" ? Si(e) : 0
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
    Mg = ft(zg),
    _g = j({}, wi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    io = ft(_g),
    Cg = j({}, sn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ir
    }),
    Og = ft(Cg),
    Ug = j({}, Ql, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Dg = ft(Ug),
    Hg = j({}, wi, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Bg = ft(Hg),
    kg = j({}, Ql, {
      newState: 0,
      oldState: 0
    }),
    Gg = ft(kg),
    qg = [9, 13, 27, 32],
    ur = Wt && "CompositionEvent" in window,
    on = null;
  Wt && "documentMode" in document && (on = document.documentMode);
  var Lg = Wt && "TextEvent" in window && !on,
    uo = Wt && (!ur || on && 8 < on && 11 >= on),
    ro = " ",
    so = !1;

  function co(e, t) {
    switch (e) {
      case "keyup":
        return qg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function oo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
  }
  var xa = !1;

  function Yg(e, t) {
    switch (e) {
      case "compositionend":
        return oo(t);
      case "keypress":
        return t.which !== 32 ? null : (so = !0, ro);
      case "textInput":
        return e = t.data, e === ro && so ? null : e;
      default:
        return null
    }
  }

  function Vg(e, t) {
    if (xa) return e === "compositionend" || !ur && co(e, t) ? (e = to(), bi = tr = bl = null, xa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
        }
        return null;
      case "compositionend":
        return uo && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var Xg = {
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
    week: !0
  };

  function fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xg[e.type] : t === "textarea"
  }

  function mo(e, t, l, a) {
    ya ? va ? va.push(a) : va = [a] : ya = a, t = ou(t, "onChange"), 0 < t.length && (l = new ji("onChange", "change", null, l, a), e.push({
      event: l,
      listeners: t
    }))
  }
  var fn = null,
    dn = null;

  function Qg(e) {
    Jd(e, 0)
  }

  function Ei(e) {
    var t = nn(e);
    if (Kc(t)) return e
  }

  function ho(e, t) {
    if (e === "change") return t
  }
  var go = !1;
  if (Wt) {
    var rr;
    if (Wt) {
      var sr = "oninput" in document;
      if (!sr) {
        var po = document.createElement("div");
        po.setAttribute("oninput", "return;"), sr = typeof po.oninput == "function"
      }
      rr = sr
    } else rr = !1;
    go = rr && (!document.documentMode || 9 < document.documentMode)
  }

  function yo() {
    fn && (fn.detachEvent("onpropertychange", vo), dn = fn = null)
  }

  function vo(e) {
    if (e.propertyName === "value" && Ei(dn)) {
      var t = [];
      mo(t, dn, e, Fu(e)), eo(Qg, t)
    }
  }

  function Zg(e, t, l) {
    e === "focusin" ? (yo(), fn = t, dn = l, fn.attachEvent("onpropertychange", vo)) : e === "focusout" && yo()
  }

  function Kg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ei(dn)
  }

  function Jg(e, t) {
    if (e === "click") return Ei(t)
  }

  function $g(e, t) {
    if (e === "input" || e === "change") return Ei(t)
  }

  function Wg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  var vt = typeof Object.is == "function" ? Object.is : Wg;

  function mn(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!yl.call(t, n) || !vt(e[n], t[n])) return !1
    }
    return !0
  }

  function xo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function bo(e, t) {
    var l = xo(e);
    e = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t) return {
          node: l,
          offset: t - e
        };
        e = a
      }
      e: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = xo(l)
    }
  }

  function So(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? So(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function No(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = vi(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof t.contentWindow.location.href == "string"
      } catch {
        l = !1
      }
      if (l) e = t.contentWindow;
      else break;
      t = vi(e.document)
    }
    return t
  }

  function cr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
  }
  var Pg = Wt && "documentMode" in document && 11 >= document.documentMode,
    ba = null,
    or = null,
    hn = null,
    fr = !1;

  function jo(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    fr || ba == null || ba !== vi(a) || (a = ba, "selectionStart" in a && cr(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), hn && mn(hn, a) || (hn = a, a = ou(or, "onSelect"), 0 < a.length && (t = new ji("onSelect", "select", null, t, l), e.push({
      event: t,
      listeners: a
    }), t.target = ba)))
  }

  function Zl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
  }
  var Sa = {
      animationend: Zl("Animation", "AnimationEnd"),
      animationiteration: Zl("Animation", "AnimationIteration"),
      animationstart: Zl("Animation", "AnimationStart"),
      transitionrun: Zl("Transition", "TransitionRun"),
      transitionstart: Zl("Transition", "TransitionStart"),
      transitioncancel: Zl("Transition", "TransitionCancel"),
      transitionend: Zl("Transition", "TransitionEnd")
    },
    dr = {},
    wo = {};
  Wt && (wo = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);

  function Kl(e) {
    if (dr[e]) return dr[e];
    if (!Sa[e]) return e;
    var t = Sa[e],
      l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in wo) return dr[e] = t[l];
    return e
  }
  var Eo = Kl("animationend"),
    Ao = Kl("animationiteration"),
    To = Kl("animationstart"),
    Fg = Kl("transitionrun"),
    Ig = Kl("transitionstart"),
    e0 = Kl("transitioncancel"),
    Ro = Kl("transitionend"),
    zo = new Map,
    mr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  mr.push("scrollEnd");

  function Dt(e, t) {
    zo.set(e, t), Xl(t, [e])
  }
  var Mo = new WeakMap;

  function Rt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Mo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Qc(t)
      }, Mo.set(e, t), t)
    }
    return {
      value: e,
      source: t,
      stack: Qc(t)
    }
  }
  var zt = [],
    Na = 0,
    hr = 0;

  function Ai() {
    for (var e = Na, t = hr = Na = 0; t < e;) {
      var l = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var n = zt[t];
      zt[t++] = null;
      var i = zt[t];
      if (zt[t++] = null, a !== null && n !== null) {
        var f = a.pending;
        f === null ? n.next = n : (n.next = f.next, f.next = n), a.pending = n
      }
      i !== 0 && _o(l, n, i)
    }
  }

  function Ti(e, t, l, a) {
    zt[Na++] = e, zt[Na++] = t, zt[Na++] = l, zt[Na++] = a, hr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
  }

  function gr(e, t, l, a) {
    return Ti(e, t, l, a), Ri(e)
  }

  function ja(e, t) {
    return Ti(e, null, null, t), Ri(e)
  }

  function _o(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null;) i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - yt(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null
  }

  function Ri(e) {
    if (50 < Gn) throw Gn = 0, Ss = null, Error(c(185));
    for (var t = e.return; t !== null;) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null
  }
  var wa = {};

  function t0(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function xt(e, t, l, a) {
    return new t0(e, t, l, a)
  }

  function pr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function Pt(e, t) {
    var l = e.alternate;
    return l === null ? (l = xt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
  }

  function Co(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e
  }

  function zi(e, t, l, a, n, i) {
    var f = 0;
    if (a = e, typeof e == "function") pr(e) && (f = 1);
    else if (typeof e == "string") f = ap(e, l, K.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case me:
        return e = xt(31, l, t, n), e.elementType = me, e.lanes = i, e;
      case M:
        return Jl(l.children, n, i, t);
      case k:
        f = 8, n |= 24;
        break;
      case Y:
        return e = xt(12, l, t, n | 2), e.elementType = Y, e.lanes = i, e;
      case P:
        return e = xt(13, l, t, n), e.elementType = P, e.lanes = i, e;
      case ve:
        return e = xt(19, l, t, n), e.elementType = ve, e.lanes = i, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case G:
          case F:
            f = 10;
            break e;
          case X:
            f = 9;
            break e;
          case ne:
            f = 11;
            break e;
          case Ne:
            f = 14;
            break e;
          case Z:
            f = 16, a = null;
            break e
        }
        f = 29, l = Error(c(130, e === null ? "null" : typeof e, "")), a = null
    }
    return t = xt(f, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t
  }

  function Jl(e, t, l, a) {
    return e = xt(7, e, a, t), e.lanes = l, e
  }

  function yr(e, t, l) {
    return e = xt(6, e, null, t), e.lanes = l, e
  }

  function vr(e, t, l) {
    return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
  }
  var Ea = [],
    Aa = 0,
    Mi = null,
    _i = 0,
    Mt = [],
    _t = 0,
    $l = null,
    Ft = 1,
    It = "";

  function Wl(e, t) {
    Ea[Aa++] = _i, Ea[Aa++] = Mi, Mi = e, _i = t
  }

  function Oo(e, t, l) {
    Mt[_t++] = Ft, Mt[_t++] = It, Mt[_t++] = $l, $l = e;
    var a = Ft;
    e = It;
    var n = 32 - yt(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - yt(t) + n;
    if (30 < i) {
      var f = n - n % 5;
      i = (a & (1 << f) - 1).toString(32), a >>= f, n -= f, Ft = 1 << 32 - yt(t) + n | l << n | a, It = i + e
    } else Ft = 1 << i | l << n | a, It = e
  }

  function xr(e) {
    e.return !== null && (Wl(e, 1), Oo(e, 1, 0))
  }

  function br(e) {
    for (; e === Mi;) Mi = Ea[--Aa], Ea[Aa] = null, _i = Ea[--Aa], Ea[Aa] = null;
    for (; e === $l;) $l = Mt[--_t], Mt[_t] = null, It = Mt[--_t], Mt[_t] = null, Ft = Mt[--_t], Mt[_t] = null
  }
  var st = null,
    ke = null,
    xe = !1,
    Pl = null,
    Gt = !1,
    Sr = Error(c(519));

  function Fl(e) {
    var t = Error(c(418, ""));
    throw yn(Rt(t, e)), Sr
  }

  function Uo(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (t[it] = e, t[ot] = a, l) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ln.length; l++) de(Ln[l], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Jc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), yi(t);
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Wc(t, a.value, a.defaultValue, a.children), yi(t)
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Fd(t.textContent, l) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = fu), t = !0) : t = !1, t || Fl(e)
  }

  function Do(e) {
    for (st = e.return; st;) switch (st.tag) {
      case 5:
      case 13:
        Gt = !1;
        return;
      case 27:
      case 3:
        Gt = !0;
        return;
      default:
        st = st.return
    }
  }

  function gn(e) {
    if (e !== st) return !1;
    if (!xe) return Do(e), xe = !0, !1;
    var t = e.tag,
      l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Bs(e.type, e.memoizedProps)), l = !l), l && ke && Fl(e), Do(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (t === 0) {
                ke = Bt(e.nextSibling);
                break e
              }
              t--
            } else l !== "$" && l !== "$!" && l !== "$?" || t++;
          e = e.nextSibling
        }
        ke = null
      }
    } else t === 27 ? (t = ke, Hl(e.type) ? (e = Ls, Ls = null, ke = e) : ke = t) : ke = st ? Bt(e.stateNode.nextSibling) : null;
    return !0
  }

  function pn() {
    ke = st = null, xe = !1
  }

  function Ho() {
    var e = Pl;
    return e !== null && (ht === null ? ht = e : ht.push.apply(ht, e), Pl = null), e
  }

  function yn(e) {
    Pl === null ? Pl = [e] : Pl.push(e)
  }
  var Nr = B(null),
    Il = null,
    el = null;

  function Sl(e, t, l) {
    L(Nr, t._currentValue), t._currentValue = l
  }

  function tl(e) {
    e._currentValue = Nr.current, Q(Nr)
  }

  function jr(e, t, l) {
    for (; e !== null;) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return
    }
  }

  function wr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null;) {
      var i = n.dependencies;
      if (i !== null) {
        var f = n.child;
        i = i.firstContext;
        e: for (; i !== null;) {
          var m = i;
          i = n;
          for (var y = 0; y < t.length; y++)
            if (m.context === t[y]) {
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), jr(i.return, l, e), a || (f = null);
              break e
            } i = m.next
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(c(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), jr(f, l, e), f = null
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null;) {
          if (f === e) {
            f = null;
            break
          }
          if (n = f.sibling, n !== null) {
            n.return = f.return, f = n;
            break
          }
          f = f.return
        }
      n = f
    }
  }

  function vn(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null;) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(c(387));
        if (f = f.memoizedProps, f !== null) {
          var m = n.type;
          vt(n.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m])
        }
      } else if (n === pe.current) {
        if (f = n.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Kn) : e = [Kn])
      }
      n = n.return
    }
    e !== null && wr(t, e, l, a), t.flags |= 262144
  }

  function Ci(e) {
    for (e = e.firstContext; e !== null;) {
      if (!vt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next
    }
    return !1
  }

  function ea(e) {
    Il = e, el = null, e = e.dependencies, e !== null && (e.firstContext = null)
  }

  function ut(e) {
    return Bo(Il, e)
  }

  function Oi(e, t) {
    return Il === null && ea(e), Bo(e, t)
  }

  function Bo(e, t) {
    var l = t._currentValue;
    if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, el === null) {
      if (e === null) throw Error(c(308));
      el = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288
    } else el = el.next = t;
    return l
  }
  var l0 = typeof AbortController < "u" ? AbortController : function () {
      var e = [],
        t = this.signal = {
          aborted: !1,
          addEventListener: function (l, a) {
            e.push(a)
          }
        };
      this.abort = function () {
        t.aborted = !0, e.forEach(function (l) {
          return l()
        })
      }
    },
    a0 = u.unstable_scheduleCallback,
    n0 = u.unstable_NormalPriority,
    Xe = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Er() {
    return {
      controller: new l0,
      data: new Map,
      refCount: 0
    }
  }

  function xn(e) {
    e.refCount--, e.refCount === 0 && a0(n0, function () {
      e.controller.abort()
    })
  }
  var bn = null,
    Ar = 0,
    Ta = 0,
    Ra = null;

  function i0(e, t) {
    if (bn === null) {
      var l = bn = [];
      Ar = 0, Ta = Rs(), Ra = {
        status: "pending",
        value: void 0,
        then: function (a) {
          l.push(a)
        }
      }
    }
    return Ar++, t.then(ko, ko), t
  }

  function ko() {
    if (--Ar === 0 && bn !== null) {
      Ra !== null && (Ra.status = "fulfilled");
      var e = bn;
      bn = null, Ta = 0, Ra = null;
      for (var t = 0; t < e.length; t++)(0, e[t])()
    }
  }

  function u0(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n)
        }
      };
    return e.then(function () {
      a.status = "fulfilled", a.value = t;
      for (var n = 0; n < l.length; n++)(0, l[n])(t)
    }, function (n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
    }), a
  }
  var Go = _.S;
  _.S = function (e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && i0(e, t), Go !== null && Go(e, t)
  };
  var ta = B(null);

  function Tr() {
    var e = ta.current;
    return e !== null ? e : Me.pooledCache
  }

  function Ui(e, t) {
    t === null ? L(ta, ta.current) : L(ta, t.pool)
  }

  function qo() {
    var e = Tr();
    return e === null ? null : {
      parent: Xe._currentValue,
      pool: e
    }
  }
  var Sn = Error(c(460)),
    Lo = Error(c(474)),
    Di = Error(c(542)),
    Rr = {
      then: function () {}
    };

  function Yo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected"
  }

  function Hi() {}

  function Vo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Hi, Hi), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Qo(e), e;
      default:
        if (typeof t.status == "string") t.then(Hi, Hi);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
          e = t, e.status = "pending", e.then(function (a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = a
            }
          }, function (a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = a
            }
          })
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Qo(e), e
        }
        throw Nn = t, Sn
    }
  }
  var Nn = null;

  function Xo() {
    if (Nn === null) throw Error(c(459));
    var e = Nn;
    return Nn = null, e
  }

  function Qo(e) {
    if (e === Sn || e === Di) throw Error(c(483))
  }
  var Nl = !1;

  function zr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function Mr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    })
  }

  function jl(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function wl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (je & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Ri(e), _o(e, null, l), t
    }
    return Ti(e, a, t, l), Ri(e)
  }

  function jn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Bc(e, l)
    }
  }

  function _r(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null,
        i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = f : i = i.next = f, l = l.next
        } while (l !== null);
        i === null ? n = i = t : i = i.next = t
      } else n = i = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
  }
  var Cr = !1;

  function wn() {
    if (Cr) {
      var e = Ra;
      if (e !== null) throw e
    }
  }

  function En(e, t, l, a) {
    Cr = !1;
    var n = e.updateQueue;
    Nl = !1;
    var i = n.firstBaseUpdate,
      f = n.lastBaseUpdate,
      m = n.shared.pending;
    if (m !== null) {
      n.shared.pending = null;
      var y = m,
        A = y.next;
      y.next = null, f === null ? i = A : f.next = A, f = y;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, m = U.lastBaseUpdate, m !== f && (m === null ? U.firstBaseUpdate = A : m.next = A, U.lastBaseUpdate = y))
    }
    if (i !== null) {
      var H = n.baseState;
      f = 0, U = A = y = null, m = i;
      do {
        var R = m.lane & -536870913,
          z = R !== m.lane;
        if (z ? (ge & R) === R : (a & R) === R) {
          R !== 0 && R === Ta && (Cr = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var le = e,
              ee = m;R = t;
            var Te = l;
            switch (ee.tag) {
              case 1:
                if (le = ee.payload, typeof le == "function") {
                  H = le.call(Te, H, R);
                  break e
                }
                H = le;
                break e;
              case 3:
                le.flags = le.flags & -65537 | 128;
              case 0:
                if (le = ee.payload, R = typeof le == "function" ? le.call(Te, H, R) : le, R == null) break e;
                H = j({}, H, R);
                break e;
              case 2:
                Nl = !0
            }
          }
          R = m.callback, R !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [R] : z.push(R))
        } else z = {
          lane: R,
          tag: m.tag,
          payload: m.payload,
          callback: m.callback,
          next: null
        }, U === null ? (A = U = z, y = H) : U = U.next = z, f |= R;
        if (m = m.next, m === null) {
          if (m = n.shared.pending, m === null) break;
          z = m, m = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null
        }
      } while (!0);
      U === null && (y = H), n.baseState = y, n.firstBaseUpdate = A, n.lastBaseUpdate = U, i === null && (n.shared.lanes = 0), Cl |= f, e.lanes = f, e.memoizedState = H
    }
  }

  function Zo(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t)
  }

  function Ko(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Zo(l[e], t)
  }
  var za = B(null),
    Bi = B(0);

  function Jo(e, t) {
    e = sl, L(Bi, e), L(za, t), sl = e | t.baseLanes
  }

  function Or() {
    L(Bi, sl), L(za, za.current)
  }

  function Ur() {
    sl = Bi.current, Q(za), Q(Bi)
  }
  var El = 0,
    re = null,
    Ee = null,
    Ye = null,
    ki = !1,
    Ma = !1,
    la = !1,
    Gi = 0,
    An = 0,
    _a = null,
    r0 = 0;

  function qe() {
    throw Error(c(321))
  }

  function Dr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0
  }

  function Hr(e, t, l, a, n, i) {
    return El = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = e === null || e.memoizedState === null ? Cf : Of, la = !1, i = l(a, n), la = !1, Ma && (i = Wo(t, l, a, n)), $o(e), i
  }

  function $o(e) {
    _.H = Qi;
    var t = Ee !== null && Ee.next !== null;
    if (El = 0, Ye = Ee = re = null, ki = !1, An = 0, _a = null, t) throw Error(c(300));
    e === null || We || (e = e.dependencies, e !== null && Ci(e) && (We = !0))
  }

  function Wo(e, t, l, a) {
    re = e;
    var n = 0;
    do {
      if (Ma && (_a = null), An = 0, Ma = !1, 25 <= n) throw Error(c(301));
      if (n += 1, Ye = Ee = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0)
      }
      _.H = h0, i = t(l, a)
    } while (Ma);
    return i
  }

  function s0() {
    var e = _.H,
      t = e.useState()[0];
    return t = typeof t.then == "function" ? Tn(t) : t, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (re.flags |= 1024), t
  }

  function Br() {
    var e = Gi !== 0;
    return Gi = 0, e
  }

  function kr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
  }

  function Gr(e) {
    if (ki) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next
      }
      ki = !1
    }
    El = 0, Ye = Ee = re = null, Ma = !1, An = Gi = 0, _a = null
  }

  function dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ye === null ? re.memoizedState = Ye = e : Ye = Ye.next = e, Ye
  }

  function Ve() {
    if (Ee === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null
    } else e = Ee.next;
    var t = Ye === null ? re.memoizedState : Ye.next;
    if (t !== null) Ye = t, Ee = e;
    else {
      if (e === null) throw re.alternate === null ? Error(c(467)) : Error(c(310));
      Ee = e, e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null
      }, Ye === null ? re.memoizedState = Ye = e : Ye = Ye.next = e
    }
    return Ye
  }

  function qr() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function Tn(e) {
    var t = An;
    return An += 1, _a === null && (_a = []), e = Vo(_a, e, t), t = re, (Ye === null ? t.memoizedState : Ye.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? Cf : Of), e
  }

  function qi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Tn(e);
      if (e.$$typeof === F) return ut(e)
    }
    throw Error(c(438, String(e)))
  }

  function Lr(e) {
    var t = null,
      l = re.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = re.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function (n) {
          return n.slice()
        }),
        index: 0
      })))
    }
    if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = qr(), re.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = ie;
    return t.index++, l
  }

  function ll(e, t) {
    return typeof t == "function" ? t(e) : t
  }

  function Li(e) {
    var t = Ve();
    return Yr(t, Ee, e)
  }

  function Yr(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var f = n.next;
        n.next = i.next, i.next = f
      }
      t.baseQueue = n = i, a.pending = null
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var m = f = null,
        y = null,
        A = t,
        U = !1;
      do {
        var H = A.lane & -536870913;
        if (H !== A.lane ? (ge & H) === H : (El & H) === H) {
          var R = A.revertLane;
          if (R === 0) y !== null && (y = y.next = {
            lane: 0,
            revertLane: 0,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }), H === Ta && (U = !0);
          else if ((El & R) === R) {
            A = A.next, R === Ta && (U = !0);
            continue
          } else H = {
            lane: 0,
            revertLane: A.revertLane,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, y === null ? (m = y = H, f = i) : y = y.next = H, re.lanes |= R, Cl |= R;
          H = A.action, la && l(i, H), i = A.hasEagerState ? A.eagerState : l(i, H)
        } else R = {
          lane: H,
          revertLane: A.revertLane,
          action: A.action,
          hasEagerState: A.hasEagerState,
          eagerState: A.eagerState,
          next: null
        }, y === null ? (m = y = R, f = i) : y = y.next = R, re.lanes |= H, Cl |= H;
        A = A.next
      } while (A !== null && A !== t);
      if (y === null ? f = i : y.next = m, !vt(i, e.memoizedState) && (We = !0, U && (l = Ra, l !== null))) throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = y, a.lastRenderedState = i
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
  }

  function Vr(e) {
    var t = Ve(),
      l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var f = n = n.next;
      do i = e(i, f.action), f = f.next; while (f !== n);
      vt(i, t.memoizedState) || (We = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i
    }
    return [i, a]
  }

  function Po(e, t, l) {
    var a = re,
      n = Ve(),
      i = xe;
    if (i) {
      if (l === void 0) throw Error(c(407));
      l = l()
    } else l = t();
    var f = !vt((Ee || n).memoizedState, l);
    f && (n.memoizedState = l, We = !0), n = n.queue;
    var m = ef.bind(null, a, n, e);
    if (Rn(2048, 8, m, [e]), n.getSnapshot !== t || f || Ye !== null && Ye.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ca(9, Yi(), Io.bind(null, a, n, l, t), null), Me === null) throw Error(c(349));
      i || (El & 124) !== 0 || Fo(a, t, l)
    }
    return l
  }

  function Fo(e, t, l) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: l
    }, t = re.updateQueue, t === null ? (t = qr(), re.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
  }

  function Io(e, t, l, a) {
    t.value = l, t.getSnapshot = a, tf(t) && lf(e)
  }

  function ef(e, t, l) {
    return l(function () {
      tf(t) && lf(e)
    })
  }

  function tf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l)
    } catch {
      return !0
    }
  }

  function lf(e) {
    var t = ja(e, 2);
    t !== null && wt(t, e, 2)
  }

  function Xr(e) {
    var t = dt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), la) {
        vl(!0);
        try {
          l()
        } finally {
          vl(!1)
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ll,
      lastRenderedState: e
    }, t
  }

  function af(e, t, l, a) {
    return e.baseState = l, Yr(e, Ee, typeof a == "function" ? a : ll)
  }

  function c0(e, t, l, a, n) {
    if (Xi(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          i.listeners.push(f)
        }
      };
      _.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, nf(t, i)) : (i.next = l.next, t.pending = l.next = i)
    }
  }

  function nf(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = _.T,
        f = {};
      _.T = f;
      try {
        var m = l(n, a),
          y = _.S;
        y !== null && y(f, m), uf(e, t, m)
      } catch (A) {
        Qr(e, t, A)
      } finally {
        _.T = i
      }
    } else try {
      i = l(n, a), uf(e, t, i)
    } catch (A) {
      Qr(e, t, A)
    }
  }

  function uf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function (a) {
      rf(e, t, a)
    }, function (a) {
      return Qr(e, t, a)
    }) : rf(e, t, l)
  }

  function rf(e, t, l) {
    t.status = "fulfilled", t.value = l, sf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, nf(e, l)))
  }

  function Qr(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do t.status = "rejected", t.reason = l, sf(t), t = t.next; while (t !== a)
    }
    e.action = null
  }

  function sf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++)(0, e[t])()
  }

  function cf(e, t) {
    return t
  }

  function of (e, t) {
    if (xe) {
      var l = Me.formState;
      if (l !== null) {
        e: {
          var a = re;
          if (xe) {
            if (ke) {
              t: {
                for (var n = ke, i = Gt; n.nodeType !== 8;) {
                  if (!i) {
                    n = null;
                    break t
                  }
                  if (n = Bt(n.nextSibling), n === null) {
                    n = null;
                    break t
                  }
                }
                i = n.data,
                n = i === "F!" || i === "F" ? n : null
              }
              if (n) {
                ke = Bt(n.nextSibling), a = n.data === "F!";
                break e
              }
            }
            Fl(a)
          }
          a = !1
        }
        a && (t = l[0])
      }
    }
    return l = dt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cf,
      lastRenderedState: t
    }, l.queue = a, l = zf.bind(null, re, a), a.dispatch = l, a = Xr(!1), i = Wr.bind(null, re, !1, a.queue), a = dt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = c0.bind(null, re, n, i, l), n.dispatch = l, a.memoizedState = e, [t, l, !1]
  }

  function ff(e) {
    var t = Ve();
    return df(t, Ee, e)
  }

  function df(e, t, l) {
    if (t = Yr(e, t, cf)[0], e = Li(ll)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = Tn(t)
    } catch (f) {
      throw f === Sn ? Di : f
    } else a = t;
    t = Ve();
    var n = t.queue,
      i = n.dispatch;
    return l !== t.memoizedState && (re.flags |= 2048, Ca(9, Yi(), o0.bind(null, n, l), null)), [a, i, e]
  }

  function o0(e, t) {
    e.action = t
  }

  function mf(e) {
    var t = Ve(),
      l = Ee;
    if (l !== null) return df(t, l, e);
    Ve(), t = t.memoizedState, l = Ve();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1]
  }

  function Ca(e, t, l, a) {
    return e = {
      tag: e,
      create: l,
      deps: a,
      inst: t,
      next: null
    }, t = re.updateQueue, t === null && (t = qr(), re.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e
  }

  function Yi() {
    return {
      destroy: void 0,
      resource: void 0
    }
  }

  function hf() {
    return Ve().memoizedState
  }

  function Vi(e, t, l, a) {
    var n = dt();
    a = a === void 0 ? null : a, re.flags |= e, n.memoizedState = Ca(1 | t, Yi(), l, a)
  }

  function Rn(e, t, l, a) {
    var n = Ve();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Ee !== null && a !== null && Dr(a, Ee.memoizedState.deps) ? n.memoizedState = Ca(t, i, l, a) : (re.flags |= e, n.memoizedState = Ca(1 | t, i, l, a))
  }

  function gf(e, t) {
    Vi(8390656, 8, e, t)
  }

  function pf(e, t) {
    Rn(2048, 8, e, t)
  }

  function yf(e, t) {
    return Rn(4, 2, e, t)
  }

  function vf(e, t) {
    return Rn(4, 4, e, t)
  }

  function xf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null)
      }
    }
    if (t != null) return e = e(), t.current = e,
      function () {
        t.current = null
      }
  }

  function bf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Rn(4, 4, xf.bind(null, t, e), l)
  }

  function Zr() {}

  function Sf(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Dr(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e)
  }

  function Nf(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Dr(t, a[1])) return a[0];
    if (a = e(), la) {
      vl(!0);
      try {
        e()
      } finally {
        vl(!1)
      }
    }
    return l.memoizedState = [a, t], a
  }

  function Kr(e, t, l) {
    return l === void 0 || (El & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ed(), re.lanes |= e, Cl |= e, l)
  }

  function jf(e, t, l, a) {
    return vt(l, t) ? l : za.current !== null ? (e = Kr(e, l, a), vt(e, t) || (We = !0), e) : (El & 42) === 0 ? (We = !0, e.memoizedState = l) : (e = Ed(), re.lanes |= e, Cl |= e, t)
  }

  function wf(e, t, l, a, n) {
    var i = V.p;
    V.p = i !== 0 && 8 > i ? i : 8;
    var f = _.T,
      m = {};
    _.T = m, Wr(e, !1, t, l);
    try {
      var y = n(),
        A = _.S;
      if (A !== null && A(m, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var U = u0(y, a);
        zn(e, t, U, jt(e))
      } else zn(e, t, a, jt(e))
    } catch (H) {
      zn(e, t, {
        then: function () {},
        status: "rejected",
        reason: H
      }, jt())
    } finally {
      V.p = i, _.T = f
    }
  }

  function f0() {}

  function Jr(e, t, l, a) {
    if (e.tag !== 5) throw Error(c(476));
    var n = Ef(e).queue;
    wf(e, n, t, q, l === null ? f0 : function () {
      return Af(e), l(a)
    })
  }

  function Ef(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: q
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
  }

  function Af(e) {
    var t = Ef(e).next.queue;
    zn(e, t, {}, jt())
  }

  function $r() {
    return ut(Kn)
  }

  function Tf() {
    return Ve().memoizedState
  }

  function Rf() {
    return Ve().memoizedState
  }

  function d0(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = jt();
          e = jl(l);
          var a = wl(t, e, l);
          a !== null && (wt(a, t, l), jn(a, t, l)), t = {
            cache: Er()
          }, e.payload = t;
          return
      }
      t = t.return
    }
  }

  function m0(e, t, l) {
    var a = jt();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xi(e) ? Mf(t, l) : (l = gr(e, t, l, a), l !== null && (wt(l, e, a), _f(l, t, a)))
  }

  function zf(e, t, l) {
    var a = jt();
    zn(e, t, l, a)
  }

  function zn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xi(e)) Mf(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var f = t.lastRenderedState,
          m = i(f, l);
        if (n.hasEagerState = !0, n.eagerState = m, vt(m, f)) return Ti(e, t, n, 0), Me === null && Ai(), !1
      } catch {} finally {}
      if (l = gr(e, t, n, a), l !== null) return wt(l, e, a), _f(l, t, a), !0
    }
    return !1
  }

  function Wr(e, t, l, a) {
    if (a = {
        lane: 2,
        revertLane: Rs(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Xi(e)) {
      if (t) throw Error(c(479))
    } else t = gr(e, l, a, 2), t !== null && wt(t, e, 2)
  }

  function Xi(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re
  }

  function Mf(e, t) {
    Ma = ki = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
  }

  function _f(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Bc(e, l)
    }
  }
  var Qi = {
      readContext: ut,
      use: qi,
      useCallback: qe,
      useContext: qe,
      useEffect: qe,
      useImperativeHandle: qe,
      useLayoutEffect: qe,
      useInsertionEffect: qe,
      useMemo: qe,
      useReducer: qe,
      useRef: qe,
      useState: qe,
      useDebugValue: qe,
      useDeferredValue: qe,
      useTransition: qe,
      useSyncExternalStore: qe,
      useId: qe,
      useHostTransitionStatus: qe,
      useFormState: qe,
      useActionState: qe,
      useOptimistic: qe,
      useMemoCache: qe,
      useCacheRefresh: qe
    },
    Cf = {
      readContext: ut,
      use: qi,
      useCallback: function (e, t) {
        return dt().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: ut,
      useEffect: gf,
      useImperativeHandle: function (e, t, l) {
        l = l != null ? l.concat([e]) : null, Vi(4194308, 4, xf.bind(null, t, e), l)
      },
      useLayoutEffect: function (e, t) {
        return Vi(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        Vi(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var l = dt();
        t = t === void 0 ? null : t;
        var a = e();
        if (la) {
          vl(!0);
          try {
            e()
          } finally {
            vl(!1)
          }
        }
        return l.memoizedState = [a, t], a
      },
      useReducer: function (e, t, l) {
        var a = dt();
        if (l !== void 0) {
          var n = l(t);
          if (la) {
            vl(!0);
            try {
              l(t)
            } finally {
              vl(!1)
            }
          }
        } else n = t;
        return a.memoizedState = a.baseState = n, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, a.queue = e, e = e.dispatch = m0.bind(null, re, e), [a.memoizedState, e]
      },
      useRef: function (e) {
        var t = dt();
        return e = {
          current: e
        }, t.memoizedState = e
      },
      useState: function (e) {
        e = Xr(e);
        var t = e.queue,
          l = zf.bind(null, re, t);
        return t.dispatch = l, [e.memoizedState, l]
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var l = dt();
        return Kr(l, e, t)
      },
      useTransition: function () {
        var e = Xr(!1);
        return e = wf.bind(null, re, e.queue, !0, !1), dt().memoizedState = e, [!1, e]
      },
      useSyncExternalStore: function (e, t, l) {
        var a = re,
          n = dt();
        if (xe) {
          if (l === void 0) throw Error(c(407));
          l = l()
        } else {
          if (l = t(), Me === null) throw Error(c(349));
          (ge & 124) !== 0 || Fo(a, t, l)
        }
        n.memoizedState = l;
        var i = {
          value: l,
          getSnapshot: t
        };
        return n.queue = i, gf(ef.bind(null, a, i, e), [e]), a.flags |= 2048, Ca(9, Yi(), Io.bind(null, a, i, l, t), null), l
      },
      useId: function () {
        var e = dt(),
          t = Me.identifierPrefix;
        if (xe) {
          var l = It,
            a = Ft;
          l = (a & ~(1 << 32 - yt(a) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Gi++, 0 < l && (t += "H" + l.toString(32)), t += "»"
        } else l = r0++, t = "«" + t + "r" + l.toString(32) + "»";
        return e.memoizedState = t
      },
      useHostTransitionStatus: $r,
      useFormState: of ,
      useActionState: of ,
      useOptimistic: function (e) {
        var t = dt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = Wr.bind(null, re, !0, l), l.dispatch = t, [e, t]
      },
      useMemoCache: Lr,
      useCacheRefresh: function () {
        return dt().memoizedState = d0.bind(null, re)
      }
    },
    Of = {
      readContext: ut,
      use: qi,
      useCallback: Sf,
      useContext: ut,
      useEffect: pf,
      useImperativeHandle: bf,
      useInsertionEffect: yf,
      useLayoutEffect: vf,
      useMemo: Nf,
      useReducer: Li,
      useRef: hf,
      useState: function () {
        return Li(ll)
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var l = Ve();
        return jf(l, Ee.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Li(ll)[0],
          t = Ve().memoizedState;
        return [typeof e == "boolean" ? e : Tn(e), t]
      },
      useSyncExternalStore: Po,
      useId: Tf,
      useHostTransitionStatus: $r,
      useFormState: ff,
      useActionState: ff,
      useOptimistic: function (e, t) {
        var l = Ve();
        return af(l, Ee, e, t)
      },
      useMemoCache: Lr,
      useCacheRefresh: Rf
    },
    h0 = {
      readContext: ut,
      use: qi,
      useCallback: Sf,
      useContext: ut,
      useEffect: pf,
      useImperativeHandle: bf,
      useInsertionEffect: yf,
      useLayoutEffect: vf,
      useMemo: Nf,
      useReducer: Vr,
      useRef: hf,
      useState: function () {
        return Vr(ll)
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var l = Ve();
        return Ee === null ? Kr(l, e, t) : jf(l, Ee.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Vr(ll)[0],
          t = Ve().memoizedState;
        return [typeof e == "boolean" ? e : Tn(e), t]
      },
      useSyncExternalStore: Po,
      useId: Tf,
      useHostTransitionStatus: $r,
      useFormState: mf,
      useActionState: mf,
      useOptimistic: function (e, t) {
        var l = Ve();
        return Ee !== null ? af(l, Ee, e, t) : (l.baseState = e, [e, l.queue.dispatch])
      },
      useMemoCache: Lr,
      useCacheRefresh: Rf
    },
    Oa = null,
    Mn = 0;

  function Zi(e) {
    var t = Mn;
    return Mn += 1, Oa === null && (Oa = []), Vo(Oa, e, t)
  }

  function _n(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null
  }

  function Ki(e, t) {
    throw t.$$typeof === O ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  }

  function Uf(e) {
    var t = e._init;
    return t(e._payload)
  }

  function Df(e) {
    function t(N, S) {
      if (e) {
        var E = N.deletions;
        E === null ? (N.deletions = [S], N.flags |= 16) : E.push(S)
      }
    }

    function l(N, S) {
      if (!e) return null;
      for (; S !== null;) t(N, S), S = S.sibling;
      return null
    }

    function a(N) {
      for (var S = new Map; N !== null;) N.key !== null ? S.set(N.key, N) : S.set(N.index, N), N = N.sibling;
      return S
    }

    function n(N, S) {
      return N = Pt(N, S), N.index = 0, N.sibling = null, N
    }

    function i(N, S, E) {
      return N.index = E, e ? (E = N.alternate, E !== null ? (E = E.index, E < S ? (N.flags |= 67108866, S) : E) : (N.flags |= 67108866, S)) : (N.flags |= 1048576, S)
    }

    function f(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N
    }

    function m(N, S, E, D) {
      return S === null || S.tag !== 6 ? (S = yr(E, N.mode, D), S.return = N, S) : (S = n(S, E), S.return = N, S)
    }

    function y(N, S, E, D) {
      var J = E.type;
      return J === M ? U(N, S, E.props.children, D, E.key) : S !== null && (S.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Z && Uf(J) === S.type) ? (S = n(S, E.props), _n(S, E), S.return = N, S) : (S = zi(E.type, E.key, E.props, null, N.mode, D), _n(S, E), S.return = N, S)
    }

    function A(N, S, E, D) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== E.containerInfo || S.stateNode.implementation !== E.implementation ? (S = vr(E, N.mode, D), S.return = N, S) : (S = n(S, E.children || []), S.return = N, S)
    }

    function U(N, S, E, D, J) {
      return S === null || S.tag !== 7 ? (S = Jl(E, N.mode, D, J), S.return = N, S) : (S = n(S, E), S.return = N, S)
    }

    function H(N, S, E) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return S = yr("" + S, N.mode, E), S.return = N, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case T:
            return E = zi(S.type, S.key, S.props, null, N.mode, E), _n(E, S), E.return = N, E;
          case C:
            return S = vr(S, N.mode, E), S.return = N, S;
          case Z:
            var D = S._init;
            return S = D(S._payload), H(N, S, E)
        }
        if (be(S) || he(S)) return S = Jl(S, N.mode, E, null), S.return = N, S;
        if (typeof S.then == "function") return H(N, Zi(S), E);
        if (S.$$typeof === F) return H(N, Oi(N, S), E);
        Ki(N, S)
      }
      return null
    }

    function R(N, S, E, D) {
      var J = S !== null ? S.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return J !== null ? null : m(N, S, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case T:
            return E.key === J ? y(N, S, E, D) : null;
          case C:
            return E.key === J ? A(N, S, E, D) : null;
          case Z:
            return J = E._init, E = J(E._payload), R(N, S, E, D)
        }
        if (be(E) || he(E)) return J !== null ? null : U(N, S, E, D, null);
        if (typeof E.then == "function") return R(N, S, Zi(E), D);
        if (E.$$typeof === F) return R(N, S, Oi(N, E), D);
        Ki(N, E)
      }
      return null
    }

    function z(N, S, E, D, J) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return N = N.get(E) || null, m(S, N, "" + D, J);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case T:
            return N = N.get(D.key === null ? E : D.key) || null, y(S, N, D, J);
          case C:
            return N = N.get(D.key === null ? E : D.key) || null, A(S, N, D, J);
          case Z:
            var ce = D._init;
            return D = ce(D._payload), z(N, S, E, D, J)
        }
        if (be(D) || he(D)) return N = N.get(E) || null, U(S, N, D, J, null);
        if (typeof D.then == "function") return z(N, S, E, Zi(D), J);
        if (D.$$typeof === F) return z(N, S, E, Oi(S, D), J);
        Ki(S, D)
      }
      return null
    }

    function le(N, S, E, D) {
      for (var J = null, ce = null, I = S, te = S = 0, Fe = null; I !== null && te < E.length; te++) {
        I.index > te ? (Fe = I, I = null) : Fe = I.sibling;
        var ye = R(N, I, E[te], D);
        if (ye === null) {
          I === null && (I = Fe);
          break
        }
        e && I && ye.alternate === null && t(N, I), S = i(ye, S, te), ce === null ? J = ye : ce.sibling = ye, ce = ye, I = Fe
      }
      if (te === E.length) return l(N, I), xe && Wl(N, te), J;
      if (I === null) {
        for (; te < E.length; te++) I = H(N, E[te], D), I !== null && (S = i(I, S, te), ce === null ? J = I : ce.sibling = I, ce = I);
        return xe && Wl(N, te), J
      }
      for (I = a(I); te < E.length; te++) Fe = z(I, N, te, E[te], D), Fe !== null && (e && Fe.alternate !== null && I.delete(Fe.key === null ? te : Fe.key), S = i(Fe, S, te), ce === null ? J = Fe : ce.sibling = Fe, ce = Fe);
      return e && I.forEach(function (Ll) {
        return t(N, Ll)
      }), xe && Wl(N, te), J
    }

    function ee(N, S, E, D) {
      if (E == null) throw Error(c(151));
      for (var J = null, ce = null, I = S, te = S = 0, Fe = null, ye = E.next(); I !== null && !ye.done; te++, ye = E.next()) {
        I.index > te ? (Fe = I, I = null) : Fe = I.sibling;
        var Ll = R(N, I, ye.value, D);
        if (Ll === null) {
          I === null && (I = Fe);
          break
        }
        e && I && Ll.alternate === null && t(N, I), S = i(Ll, S, te), ce === null ? J = Ll : ce.sibling = Ll, ce = Ll, I = Fe
      }
      if (ye.done) return l(N, I), xe && Wl(N, te), J;
      if (I === null) {
        for (; !ye.done; te++, ye = E.next()) ye = H(N, ye.value, D), ye !== null && (S = i(ye, S, te), ce === null ? J = ye : ce.sibling = ye, ce = ye);
        return xe && Wl(N, te), J
      }
      for (I = a(I); !ye.done; te++, ye = E.next()) ye = z(I, N, te, ye.value, D), ye !== null && (e && ye.alternate !== null && I.delete(ye.key === null ? te : ye.key), S = i(ye, S, te), ce === null ? J = ye : ce.sibling = ye, ce = ye);
      return e && I.forEach(function (gp) {
        return t(N, gp)
      }), xe && Wl(N, te), J
    }

    function Te(N, S, E, D) {
      if (typeof E == "object" && E !== null && E.type === M && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case T:
            e: {
              for (var J = E.key; S !== null;) {
                if (S.key === J) {
                  if (J = E.type, J === M) {
                    if (S.tag === 7) {
                      l(N, S.sibling), D = n(S, E.props.children), D.return = N, N = D;
                      break e
                    }
                  } else if (S.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Z && Uf(J) === S.type) {
                    l(N, S.sibling), D = n(S, E.props), _n(D, E), D.return = N, N = D;
                    break e
                  }
                  l(N, S);
                  break
                } else t(N, S);
                S = S.sibling
              }
              E.type === M ? (D = Jl(E.props.children, N.mode, D, E.key), D.return = N, N = D) : (D = zi(E.type, E.key, E.props, null, N.mode, D), _n(D, E), D.return = N, N = D)
            }
            return f(N);
          case C:
            e: {
              for (J = E.key; S !== null;) {
                if (S.key === J)
                  if (S.tag === 4 && S.stateNode.containerInfo === E.containerInfo && S.stateNode.implementation === E.implementation) {
                    l(N, S.sibling), D = n(S, E.children || []), D.return = N, N = D;
                    break e
                  } else {
                    l(N, S);
                    break
                  }
                else t(N, S);
                S = S.sibling
              }
              D = vr(E, N.mode, D),
              D.return = N,
              N = D
            }
            return f(N);
          case Z:
            return J = E._init, E = J(E._payload), Te(N, S, E, D)
        }
        if (be(E)) return le(N, S, E, D);
        if (he(E)) {
          if (J = he(E), typeof J != "function") throw Error(c(150));
          return E = J.call(E), ee(N, S, E, D)
        }
        if (typeof E.then == "function") return Te(N, S, Zi(E), D);
        if (E.$$typeof === F) return Te(N, S, Oi(N, E), D);
        Ki(N, E)
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, S !== null && S.tag === 6 ? (l(N, S.sibling), D = n(S, E), D.return = N, N = D) : (l(N, S), D = yr(E, N.mode, D), D.return = N, N = D), f(N)) : l(N, S)
    }
    return function (N, S, E, D) {
      try {
        Mn = 0;
        var J = Te(N, S, E, D);
        return Oa = null, J
      } catch (I) {
        if (I === Sn || I === Di) throw I;
        var ce = xt(29, I, null, N.mode);
        return ce.lanes = D, ce.return = N, ce
      } finally {}
    }
  }
  var Ua = Df(!0),
    Hf = Df(!1),
    Ct = B(null),
    qt = null;

  function Al(e) {
    var t = e.alternate;
    L(Qe, Qe.current & 1), L(Ct, e), qt === null && (t === null || za.current !== null || t.memoizedState !== null) && (qt = e)
  }

  function Bf(e) {
    if (e.tag === 22) {
      if (L(Qe, Qe.current), L(Ct, e), qt === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (qt = e)
      }
    } else Tl()
  }

  function Tl() {
    L(Qe, Qe.current), L(Ct, Ct.current)
  }

  function al(e) {
    Q(Ct), qt === e && (qt = null), Q(Qe)
  }
  var Qe = B(0);

  function Ji(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || qs(l))) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }

  function Pr(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : j({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
  }
  var Fr = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = jt(),
        n = jl(a);
      n.payload = t, l != null && (n.callback = l), t = wl(e, n, a), t !== null && (wt(t, e, a), jn(t, e, a))
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = jt(),
        n = jl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = wl(e, n, a), t !== null && (wt(t, e, a), jn(t, e, a))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = jt(),
        a = jl(l);
      a.tag = 2, t != null && (a.callback = t), t = wl(e, a, l), t !== null && (wt(t, e, l), jn(t, e, l))
    }
  };

  function kf(e, t, l, a, n, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, f) : t.prototype && t.prototype.isPureReactComponent ? !mn(l, a) || !mn(n, i) : !0
  }

  function Gf(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Fr.enqueueReplaceState(t, t.state, null)
  }

  function aa(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a])
    }
    if (e = e.defaultProps) {
      l === t && (l = j({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n])
    }
    return l
  }
  var $i = typeof reportError == "function" ? reportError : function (e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return
    }
    console.error(e)
  };

  function qf(e) {
    $i(e)
  }

  function Lf(e) {
    console.error(e)
  }

  function Yf(e) {
    $i(e)
  }

  function Wi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, {
        componentStack: t.stack
      })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }

  function Vf(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }

  function Ir(e, t, l) {
    return l = jl(l), l.tag = 3, l.payload = {
      element: null
    }, l.callback = function () {
      Wi(e, t)
    }, l
  }

  function Xf(e) {
    return e = jl(e), e.tag = 3, e
  }

  function Qf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function () {
        return n(i)
      }, e.callback = function () {
        Vf(t, l, a)
      }
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function () {
      Vf(t, l, a), typeof n != "function" && (Ol === null ? Ol = new Set([this]) : Ol.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      })
    })
  }

  function g0(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && vn(t, l, n, !0), l = Ct.current, l !== null) {
        switch (l.tag) {
          case 13:
            return qt === null ? js() : l.alternate === null && Ge === 0 && (Ge = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Rr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([a]) : t.add(a), Es(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Rr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([a]) : l.add(a)), Es(e, a, n)), !1
        }
        throw Error(c(435, l.tag))
      }
      return Es(e, a, n), js(), !1
    }
    if (xe) return t = Ct.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Sr && (e = Error(c(422), {
      cause: a
    }), yn(Rt(e, l)))) : (a !== Sr && (t = Error(c(423), {
      cause: a
    }), yn(Rt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Rt(a, l), n = Ir(e.stateNode, a, n), _r(e, n), Ge !== 4 && (Ge = 2)), !1;
    var i = Error(c(520), {
      cause: a
    });
    if (i = Rt(i, l), kn === null ? kn = [i] : kn.push(i), Ge !== 4 && (Ge = 2), t === null) return !0;
    a = Rt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Ir(l.stateNode, a, e), _r(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ol === null || !Ol.has(i)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = Xf(n), Qf(n, e, l, a), _r(l, n), !1
      }
      l = l.return
    } while (l !== null);
    return !1
  }
  var Zf = Error(c(461)),
    We = !1;

  function lt(e, t, l, a) {
    t.child = e === null ? Hf(t, null, l, a) : Ua(t, e.child, l, a)
  }

  function Kf(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a) m !== "ref" && (f[m] = a[m])
    } else f = a;
    return ea(t), a = Hr(e, t, l, f, i, n), m = Br(), e !== null && !We ? (kr(e, t, n), nl(e, t, n)) : (xe && m && xr(t), t.flags |= 1, lt(e, t, a, n), t.child)
  }

  function Jf(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !pr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, $f(e, t, i, a, n)) : (e = zi(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !rs(e, n)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : mn, l(f, a) && e.ref === t.ref) return nl(e, t, n)
    }
    return t.flags |= 1, e = Pt(i, a), e.ref = t.ref, e.return = t, t.child = e
  }

  function $f(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (mn(i, a) && e.ref === t.ref)
        if (We = !1, t.pendingProps = a = i, rs(e, n))(e.flags & 131072) !== 0 && (We = !0);
        else return t.lanes = e.lanes, nl(e, t, n)
    }
    return es(e, t, l, a, n)
  }

  function Wf(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = i !== null ? i.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, i = 0; n !== null;) i = i | n.lanes | n.childLanes, n = n.sibling;
          t.childLanes = i & ~a
        } else t.childLanes = 0, t.child = null;
        return Pf(e, t, a, l)
      }
      if ((l & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && Ui(t, i !== null ? i.cachePool : null), i !== null ? Jo(t, i) : Or(), Bf(t);
      else return t.lanes = t.childLanes = 536870912, Pf(e, t, i !== null ? i.baseLanes | l : l, l)
    } else i !== null ? (Ui(t, i.cachePool), Jo(t, i), Tl(), t.memoizedState = null) : (e !== null && Ui(t, null), Or(), Tl());
    return lt(e, t, n, l), t.child
  }

  function Pf(e, t, l, a) {
    var n = Tr();
    return n = n === null ? null : {
      parent: Xe._currentValue,
      pool: n
    }, t.memoizedState = {
      baseLanes: l,
      cachePool: n
    }, e !== null && Ui(t, null), Or(), Bf(t), e !== null && vn(e, t, a, !0), null
  }

  function Pi(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(c(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816)
    }
  }

  function es(e, t, l, a, n) {
    return ea(t), l = Hr(e, t, l, a, void 0, n), a = Br(), e !== null && !We ? (kr(e, t, n), nl(e, t, n)) : (xe && a && xr(t), t.flags |= 1, lt(e, t, l, n), t.child)
  }

  function Ff(e, t, l, a, n, i) {
    return ea(t), t.updateQueue = null, l = Wo(t, a, l, n), $o(e), a = Br(), e !== null && !We ? (kr(e, t, i), nl(e, t, i)) : (xe && a && xr(t), t.flags |= 1, lt(e, t, l, i), t.child)
  }

  function If(e, t, l, a, n) {
    if (ea(t), t.stateNode === null) {
      var i = wa,
        f = l.contextType;
      typeof f == "object" && f !== null && (i = ut(f)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Fr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, zr(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? ut(f) : wa, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Pr(t, l, f, a), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Fr.enqueueReplaceState(i, i.state, null), En(t, a, i, n), wn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps,
        y = aa(l, m);
      i.props = y;
      var A = i.context,
        U = l.contextType;
      f = wa, typeof U == "object" && U !== null && (f = ut(U));
      var H = l.getDerivedStateFromProps;
      U = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || A !== f) && Gf(t, i, a, f), Nl = !1;
      var R = t.memoizedState;
      i.state = R, En(t, a, i, n), wn(), A = t.memoizedState, m || R !== A || Nl ? (typeof H == "function" && (Pr(t, l, H, a), A = t.memoizedState), (y = Nl || kf(t, l, y, a, R, A, f)) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = A), i.props = a, i.state = A, i.context = f, a = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
    } else {
      i = t.stateNode, Mr(e, t), f = t.memoizedProps, U = aa(l, f), i.props = U, H = t.pendingProps, R = i.context, A = l.contextType, y = wa, typeof A == "object" && A !== null && (y = ut(A)), m = l.getDerivedStateFromProps, (A = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== H || R !== y) && Gf(t, i, a, y), Nl = !1, R = t.memoizedState, i.state = R, En(t, a, i, n), wn();
      var z = t.memoizedState;
      f !== H || R !== z || Nl || e !== null && e.dependencies !== null && Ci(e.dependencies) ? (typeof m == "function" && (Pr(t, l, m, a), z = t.memoizedState), (U = Nl || kf(t, l, U, a, R, z, y) || e !== null && e.dependencies !== null && Ci(e.dependencies)) ? (A || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, z, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, z, y)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), i.props = a, i.state = z, i.context = y, a = U) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), a = !1)
    }
    return i = a, Pi(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Ua(t, e.child, null, n), t.child = Ua(t, null, l, n)) : lt(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = nl(e, t, n), e
  }

  function ed(e, t, l, a) {
    return pn(), t.flags |= 256, lt(e, t, l, a), t.child
  }
  var ts = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function ls(e) {
    return {
      baseLanes: e,
      cachePool: qo()
    }
  }

  function as(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ot), e
  }

  function td(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), f && (n = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (xe) {
        if (n ? Al(t) : Tl(), xe) {
          var m = ke,
            y;
          if (y = m) {
            e: {
              for (y = m, m = Gt; y.nodeType !== 8;) {
                if (!m) {
                  m = null;
                  break e
                }
                if (y = Bt(y.nextSibling), y === null) {
                  m = null;
                  break e
                }
              }
              m = y
            }
            m !== null ? (t.memoizedState = {
              dehydrated: m,
              treeContext: $l !== null ? {
                id: Ft,
                overflow: It
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, y = xt(18, null, null, 0), y.stateNode = m, y.return = t, t.child = y, st = t, ke = null, y = !0) : y = !1
          }
          y || Fl(t)
        }
        if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return qs(m) ? t.lanes = 32 : t.lanes = 536870912, null;
        al(t)
      }
      return m = a.children, a = a.fallback, n ? (Tl(), n = t.mode, m = Fi({
        mode: "hidden",
        children: m
      }, n), a = Jl(a, n, l, null), m.return = t, a.return = t, m.sibling = a, t.child = m, n = t.child, n.memoizedState = ls(l), n.childLanes = as(e, f, l), t.memoizedState = ts, a) : (Al(t), ns(t, m))
    }
    if (y = e.memoizedState, y !== null && (m = y.dehydrated, m !== null)) {
      if (i) t.flags & 256 ? (Al(t), t.flags &= -257, t = is(e, t, l)) : t.memoizedState !== null ? (Tl(), t.child = e.child, t.flags |= 128, t = null) : (Tl(), n = a.fallback, m = t.mode, a = Fi({
        mode: "visible",
        children: a.children
      }, m), n = Jl(n, m, l, null), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, Ua(t, e.child, null, l), a = t.child, a.memoizedState = ls(l), a.childLanes = as(e, f, l), t.memoizedState = ts, t = n);
      else if (Al(t), qs(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var A = f.dgst;
        f = A, a = Error(c(419)), a.stack = "", a.digest = f, yn({
          value: a,
          source: null,
          stack: null
        }), t = is(e, t, l)
      } else if (We || vn(e, t, l, !1), f = (l & e.childLanes) !== 0, We || f) {
        if (f = Me, f !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : Lu(a), a = (a & (f.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== y.retryLane)) throw y.retryLane = a, ja(e, a), wt(f, e, a), Zf;
        m.data === "$?" || js(), t = is(e, t, l)
      } else m.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, ke = Bt(m.nextSibling), st = t, xe = !0, Pl = null, Gt = !1, e !== null && (Mt[_t++] = Ft, Mt[_t++] = It, Mt[_t++] = $l, Ft = e.id, It = e.overflow, $l = t), t = ns(t, a.children), t.flags |= 4096);
      return t
    }
    return n ? (Tl(), n = a.fallback, m = t.mode, y = e.child, A = y.sibling, a = Pt(y, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = y.subtreeFlags & 65011712, A !== null ? n = Pt(A, n) : (n = Jl(n, m, l, null), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, a = n, n = t.child, m = e.child.memoizedState, m === null ? m = ls(l) : (y = m.cachePool, y !== null ? (A = Xe._currentValue, y = y.parent !== A ? {
      parent: A,
      pool: A
    } : y) : y = qo(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: y
    }), n.memoizedState = m, n.childLanes = as(e, f, l), t.memoizedState = ts, a) : (Al(t), l = e.child, e = l.sibling, l = Pt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l)
  }

  function ns(e, t) {
    return t = Fi({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t
  }

  function Fi(e, t) {
    return e = xt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e
  }

  function is(e, t, l) {
    return Ua(t, e.child, null, l), e = ns(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
  }

  function ld(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), jr(e.return, t, l)
  }

  function us(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n)
  }

  function ad(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if (lt(e, t, a.children, l), a = Qe.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && ld(e, l, t);
        else if (e.tag === 19) ld(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
      a &= 1
    }
    switch (L(Qe, a), n) {
      case "forwards":
        for (l = t.child, n = null; l !== null;) e = l.alternate, e !== null && Ji(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), us(t, !1, n, l, i);
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null;) {
          if (e = n.alternate, e !== null && Ji(e) === null) {
            t.child = n;
            break
          }
          e = n.sibling, n.sibling = l, l = n, n = e
        }
        us(t, !0, l, null, i);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function nl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Cl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (vn(e, t, l, !1), (l & t.childLanes) === 0) return null
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, l = Pt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = Pt(e, e.pendingProps), l.return = t;
      l.sibling = null
    }
    return t.child
  }

  function rs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ci(e)))
  }

  function p0(e, t, l) {
    switch (t.tag) {
      case 3:
        Re(t, t.stateNode.containerInfo), Sl(t, Xe, e.memoizedState.cache), pn();
        break;
      case 27:
      case 5:
        gl(t);
        break;
      case 4:
        Re(t, t.stateNode.containerInfo);
        break;
      case 10:
        Sl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (Al(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? td(e, t, l) : (Al(t), e = nl(e, t, l), e !== null ? e.sibling : null);
        Al(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (vn(e, t, l, !1), a = (l & t.childLanes) !== 0), n) {
          if (a) return ad(e, t, l);
          t.flags |= 128
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), L(Qe, Qe.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Wf(e, t, l);
      case 24:
        Sl(t, Xe, e.memoizedState.cache)
    }
    return nl(e, t, l)
  }

  function nd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) We = !0;
      else {
        if (!rs(e, l) && (t.flags & 128) === 0) return We = !1, p0(e, t, l);
        We = (e.flags & 131072) !== 0
      }
    else We = !1, xe && (t.flags & 1048576) !== 0 && Oo(t, _i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (a = n(a._payload), t.type = a, typeof a == "function") pr(a) ? (e = aa(a, e), t.tag = 1, t = If(null, t, a, e, l)) : (t.tag = 0, t = es(null, t, a, e, l));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === ne) {
                t.tag = 11, t = Kf(null, t, a, e, l);
                break e
              } else if (n === Ne) {
                t.tag = 14, t = Jf(null, t, a, e, l);
                break e
              }
            }
            throw t = tt(a) || a, Error(c(306, t, ""))
          }
        }
        return t;
      case 0:
        return es(e, t, t.type, t.pendingProps, l);
      case 1:
        return a = t.type, n = aa(a, t.pendingProps), If(e, t, a, n, l);
      case 3:
        e: {
          if (Re(t, t.stateNode.containerInfo), e === null) throw Error(c(387));a = t.pendingProps;
          var i = t.memoizedState;n = i.element,
          Mr(e, t),
          En(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, Sl(t, Xe, a), a !== i.cache && wr(t, [Xe], l, !0), wn(), a = f.element, i.isDehydrated)
            if (i = {
                element: a,
                isDehydrated: !1,
                cache: f.cache
              }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = ed(e, t, a, l);
              break e
            } else if (a !== n) {
            n = Rt(Error(c(424)), t), yn(n), t = ed(e, t, a, l);
            break e
          } else {
            switch (e = t.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
            }
            for (ke = Bt(e.firstChild), st = t, xe = !0, Pl = null, Gt = !0, l = Hf(t, null, a, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling
          } else {
            if (pn(), a === n) {
              t = nl(e, t, l);
              break e
            }
            lt(e, t, a, l)
          }
          t = t.child
        }
        return t;
      case 26:
        return Pi(e, t), e === null ? (l = sm(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : xe || (l = t.type, e = t.pendingProps, a = du(ae.current).createElement(l), a[it] = t, a[ot] = e, nt(a, l, e), $e(a), t.stateNode = a) : t.memoizedState = sm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return gl(t), e === null && xe && (a = t.stateNode = im(t.type, t.pendingProps, ae.current), st = t, Gt = !0, n = ke, Hl(t.type) ? (Ls = n, ke = Bt(a.firstChild)) : ke = n), lt(e, t, t.pendingProps.children, l), Pi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && xe && ((n = a = ke) && (a = X0(a, t.type, t.pendingProps, Gt), a !== null ? (t.stateNode = a, st = t, ke = Bt(a.firstChild), Gt = !1, n = !0) : n = !1), n || Fl(t)), gl(t), n = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = i.children, Bs(n, i) ? a = null : f !== null && Bs(n, f) && (t.flags |= 32), t.memoizedState !== null && (n = Hr(e, t, s0, null, null, l), Kn._currentValue = n), Pi(e, t), lt(e, t, a, l), t.child;
      case 6:
        return e === null && xe && ((e = l = ke) && (l = Q0(l, t.pendingProps, Gt), l !== null ? (t.stateNode = l, st = t, ke = null, e = !0) : e = !1), e || Fl(t)), null;
      case 13:
        return td(e, t, l);
      case 4:
        return Re(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Ua(t, null, a, l) : lt(e, t, a, l), t.child;
      case 11:
        return Kf(e, t, t.type, t.pendingProps, l);
      case 7:
        return lt(e, t, t.pendingProps, l), t.child;
      case 8:
        return lt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return lt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return a = t.pendingProps, Sl(t, t.type, a.value), lt(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, ea(t), n = ut(n), a = a(n), t.flags |= 1, lt(e, t, a, l), t.child;
      case 14:
        return Jf(e, t, t.type, t.pendingProps, l);
      case 15:
        return $f(e, t, t.type, t.pendingProps, l);
      case 19:
        return ad(e, t, l);
      case 31:
        return a = t.pendingProps, l = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, e === null ? (l = Fi(a, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Pt(e.child, a), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return Wf(e, t, l);
      case 24:
        return ea(t), a = ut(Xe), e === null ? (n = Tr(), n === null && (n = Me, i = Er(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = {
          parent: a,
          cache: n
        }, zr(t), Sl(t, Xe, n)) : ((e.lanes & l) !== 0 && (Mr(e, t), En(t, null, null, l), wn()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Sl(t, Xe, a)) : (a = i.cache, Sl(t, Xe, a), a !== n.cache && wr(t, [Xe], l, !0))), lt(e, t, t.pendingProps.children, l), t.child;
      case 29:
        throw t.pendingProps
    }
    throw Error(c(156, t.tag))
  }

  function il(e) {
    e.flags |= 4
  }

  function id(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !mm(t)) {
      if (t = Ct.current, t !== null && ((ge & 4194048) === ge ? qt !== null : (ge & 62914560) !== ge && (ge & 536870912) === 0 || t !== qt)) throw Nn = Rr, Lo;
      e.flags |= 8192
    }
  }

  function Ii(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Dc() : 536870912, e.lanes |= t, ka |= t)
  }

  function Cn(e, t) {
    if (!xe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
        l === null ? e.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = e.tail;
        for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
    }
  }

  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t
  }

  function y0(e, t, l) {
    var a = t.pendingProps;
    switch (br(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), tl(Xe), gt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (gn(t) ? il(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ho())), Ue(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (il(t), l !== null ? (Ue(t), id(t, l)) : (Ue(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (il(t), Ue(t), id(t, l)) : (Ue(t), t.flags &= -16777217) : (e.memoizedProps !== a && il(t), Ue(t), t.flags &= -16777217), null;
      case 27:
        pl(t), l = ae.current;
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && il(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return Ue(t), null
          }
          e = K.current, gn(t) ? Uo(t) : (e = im(n, a, l), t.stateNode = e, il(t))
        }
        return Ue(t), null;
      case 5:
        if (pl(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && il(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return Ue(t), null
          }
          if (e = K.current, gn(t)) Uo(t);
          else {
            switch (n = du(ae.current), e) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof a.is == "string" ? n.createElement("select", {
                      is: a.is
                    }) : n.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                    break;
                  default:
                    e = typeof a.is == "string" ? n.createElement(l, {
                      is: a.is
                    }) : n.createElement(l)
                }
            }
            e[it] = t, e[ot] = a;
            e: for (n = t.child; n !== null;) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
              }
              if (n === t) break e;
              for (; n.sibling === null;) {
                if (n.return === null || n.return === t) break e;
                n = n.return
              }
              n.sibling.return = n.return, n = n.sibling
            }
            t.stateNode = e;
            e: switch (nt(e, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1
            }
            e && il(t)
          }
        }
        return Ue(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && il(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(c(166));
          if (e = ae.current, gn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = st, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps
            }
            e[it] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Fd(e.nodeValue, l)), e || Fl(t)
          } else e = du(e).createTextNode(a), e[it] = t, t.stateNode = e
        }
        return Ue(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = gn(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(c(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
              n[it] = t
            } else pn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), n = !1
          } else n = Ho(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n) return t.flags & 256 ? (al(t), t) : (al(t), null)
        }
        if (al(t), (t.flags & 128) !== 0) return t.lanes = l, t;
        if (l = a !== null, e = e !== null && e.memoizedState !== null, l) {
          a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)
        }
        return l !== e && l && (t.child.flags |= 8192), Ii(t, t.updateQueue), Ue(t), null;
      case 4:
        return gt(), e === null && Cs(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return tl(t.type), Ue(t), null;
      case 19:
        if (Q(Qe), n = t.memoizedState, n === null) return Ue(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Cn(n, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null;) {
                if (i = Ji(e), i !== null) {
                  for (t.flags |= 128, Cn(n, !1), e = i.updateQueue, t.updateQueue = e, Ii(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) Co(l, e), l = l.sibling;
                  return L(Qe, Qe.current & 1 | 2), t.child
                }
                e = e.sibling
              }
            n.tail !== null && kt() > lu && (t.flags |= 128, a = !0, Cn(n, !1), t.lanes = 4194304)
          }
        else {
          if (!a)
            if (e = Ji(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ii(t, e), Cn(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !xe) return Ue(t), null
            } else 2 * kt() - n.renderingStartTime > lu && l !== 536870912 && (t.flags |= 128, a = !0, Cn(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i)
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = kt(), t.sibling = null, e = Qe.current, L(Qe, a ? e & 1 | 2 : e & 1), t) : (Ue(t), null);
      case 22:
      case 23:
        return al(t), Ur(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), l = t.updateQueue, l !== null && Ii(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && Q(ta), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), tl(Xe), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(c(156, t.tag))
  }

  function v0(e, t) {
    switch (br(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tl(Xe), gt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pl(t), null;
      case 13:
        if (al(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(c(340));
          pn()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Q(Qe), null;
      case 4:
        return gt(), null;
      case 10:
        return tl(t.type), null;
      case 22:
      case 23:
        return al(t), Ur(), e !== null && Q(ta), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return tl(Xe), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function ud(e, t) {
    switch (br(t), t.tag) {
      case 3:
        tl(Xe), gt();
        break;
      case 26:
      case 27:
      case 5:
        pl(t);
        break;
      case 4:
        gt();
        break;
      case 13:
        al(t);
        break;
      case 19:
        Q(Qe);
        break;
      case 10:
        tl(t.type);
        break;
      case 22:
      case 23:
        al(t), Ur(), e !== null && Q(ta);
        break;
      case 24:
        tl(Xe)
    }
  }

  function On(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              f = l.inst;
            a = i(), f.destroy = a
          }
          l = l.next
        } while (l !== n)
      }
    } catch (m) {
      ze(t, t.return, m)
    }
  }

  function Rl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst,
              m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, n = t;
              var y = l,
                A = m;
              try {
                A()
              } catch (U) {
                ze(n, y, U)
              }
            }
          }
          a = a.next
        } while (a !== i)
      }
    } catch (U) {
      ze(t, t.return, U)
    }
  }

  function rd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Ko(t, l)
      } catch (a) {
        ze(e, e.return, a)
      }
    }
  }

  function sd(e, t, l) {
    l.props = aa(e.type, e.memoizedProps), l.state = e.memoizedState;
    try {
      l.componentWillUnmount()
    } catch (a) {
      ze(e, t, a)
    }
  }

  function Un(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a
      }
    } catch (n) {
      ze(e, t, n)
    }
  }

  function Lt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function") try {
        a()
      } catch (n) {
        ze(e, t, n)
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
      } else if (typeof l == "function") try {
        l(null)
      } catch (n) {
        ze(e, t, n)
      } else l.current = null
  }

  function cd(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
      }
    }
    catch (n) {
      ze(e, e.return, n)
    }
  }

  function ss(e, t, l) {
    try {
      var a = e.stateNode;
      G0(a, e.type, l, t), a[ot] = t
    } catch (n) {
      ze(e, e.return, n)
    }
  }

  function od(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hl(e.type) || e.tag === 4
  }

  function cs(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || od(e.return)) return null;
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && Hl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }

  function os(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = fu));
    else if (a !== 4 && (a === 27 && Hl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (os(e, t, l), e = e.sibling; e !== null;) os(e, t, l), e = e.sibling
  }

  function eu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Hl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (eu(e, t, l), e = e.sibling; e !== null;) eu(e, t, l), e = e.sibling
  }

  function fd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
      nt(t, a, l), t[it] = e, t[ot] = l
    } catch (i) {
      ze(e, e.return, i)
    }
  }
  var ul = !1,
    Le = !1,
    fs = !1,
    dd = typeof WeakSet == "function" ? WeakSet : Set,
    Pe = null;

  function x0(e, t) {
    if (e = e.containerInfo, Ds = vu, e = No(e), cr(e)) {
      if ("selectionStart" in e) var l = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        l = (l = e.ownerDocument) && l.defaultView || window;
        var a = l.getSelection && l.getSelection();
        if (a && a.rangeCount !== 0) {
          l = a.anchorNode;
          var n = a.anchorOffset,
            i = a.focusNode;
          a = a.focusOffset;
          try {
            l.nodeType, i.nodeType
          } catch {
            l = null;
            break e
          }
          var f = 0,
            m = -1,
            y = -1,
            A = 0,
            U = 0,
            H = e,
            R = null;
          t: for (;;) {
            for (var z; H !== l || n !== 0 && H.nodeType !== 3 || (m = f + n), H !== i || a !== 0 && H.nodeType !== 3 || (y = f + a), H.nodeType === 3 && (f += H.nodeValue.length), (z = H.firstChild) !== null;) R = H, H = z;
            for (;;) {
              if (H === e) break t;
              if (R === l && ++A === n && (m = f), R === i && ++U === a && (y = f), (z = H.nextSibling) !== null) break;
              H = R, R = H.parentNode
            }
            H = z
          }
          l = m === -1 || y === -1 ? null : {
            start: m,
            end: y
          }
        } else l = null
      }
      l = l || {
        start: 0,
        end: 0
      }
    } else l = null;
    for (Hs = {
        focusedElem: e,
        selectionRange: l
      }, vu = !1, Pe = t; Pe !== null;)
      if (t = Pe, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Pe = e;
      else
        for (; Pe !== null;) {
          switch (t = Pe, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var le = aa(l.type, n, l.elementType === l.type);
                  e = a.getSnapshotBeforeUpdate(le, i), a.__reactInternalSnapshotBeforeUpdate = e
                } catch (ee) {
                  ze(l, l.return, ee)
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Gs(e);
                else if (l === 1) switch (e.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    Gs(e);
                    break;
                  default:
                    e.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163))
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Pe = e;
            break
          }
          Pe = t.return
        }
  }

  function md(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        zl(e, l), a & 4 && On(5, l);
        break;
      case 1:
        if (zl(e, l), a & 4)
          if (e = l.stateNode, t === null) try {
            e.componentDidMount()
          } catch (f) {
            ze(l, l.return, f)
          } else {
            var n = aa(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (f) {
              ze(l, l.return, f)
            }
          }
        a & 64 && rd(l), a & 512 && Un(l, l.return);
        break;
      case 3:
        if (zl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              t = l.child.stateNode;
              break;
            case 1:
              t = l.child.stateNode
          }
          try {
            Ko(e, t)
          } catch (f) {
            ze(l, l.return, f)
          }
        }
        break;
      case 27:
        t === null && a & 4 && fd(l);
      case 26:
      case 5:
        zl(e, l), t === null && a & 4 && cd(l), a & 512 && Un(l, l.return);
        break;
      case 12:
        zl(e, l);
        break;
      case 13:
        zl(e, l), a & 4 && pd(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = R0.bind(null, l), Z0(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || ul, !a) {
          t = t !== null && t.memoizedState !== null || Le, n = ul;
          var i = Le;
          ul = a, (Le = t) && !i ? Ml(e, l, (l.subtreeFlags & 8772) !== 0) : zl(e, l), ul = n, Le = i
        }
        break;
      case 30:
        break;
      default:
        zl(e, l)
    }
  }

  function hd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Xu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }
  var Oe = null,
    mt = !1;

  function rl(e, t, l) {
    for (l = l.child; l !== null;) gd(e, t, l), l = l.sibling
  }

  function gd(e, t, l) {
    if (pt && typeof pt.onCommitFiberUnmount == "function") try {
      pt.onCommitFiberUnmount(en, l)
    } catch {}
    switch (l.tag) {
      case 26:
        Le || Lt(l, t), rl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Le || Lt(l, t);
        var a = Oe,
          n = mt;
        Hl(l.type) && (Oe = l.stateNode, mt = !1), rl(e, t, l), Vn(l.stateNode), Oe = a, mt = n;
        break;
      case 5:
        Le || Lt(l, t);
      case 6:
        if (a = Oe, n = mt, Oe = null, rl(e, t, l), Oe = a, mt = n, Oe !== null)
          if (mt) try {
            (Oe.nodeType === 9 ? Oe.body : Oe.nodeName === "HTML" ? Oe.ownerDocument.body : Oe).removeChild(l.stateNode)
          } catch (i) {
            ze(l, t, i)
          } else try {
            Oe.removeChild(l.stateNode)
          } catch (i) {
            ze(l, t, i)
          }
        break;
      case 18:
        Oe !== null && (mt ? (e = Oe, am(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Pn(e)) : am(Oe, l.stateNode));
        break;
      case 4:
        a = Oe, n = mt, Oe = l.stateNode.containerInfo, mt = !0, rl(e, t, l), Oe = a, mt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Le || Rl(2, l, t), Le || Rl(4, l, t), rl(e, t, l);
        break;
      case 1:
        Le || (Lt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && sd(l, t, a)), rl(e, t, l);
        break;
      case 21:
        rl(e, t, l);
        break;
      case 22:
        Le = (a = Le) || l.memoizedState !== null, rl(e, t, l), Le = a;
        break;
      default:
        rl(e, t, l)
    }
  }

  function pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Pn(e)
    } catch (l) {
      ze(t, t.return, l)
    }
  }

  function b0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new dd), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dd), t;
      default:
        throw Error(c(435, e.tag))
    }
  }

  function ds(e, t) {
    var l = b0(e);
    t.forEach(function (a) {
      var n = z0.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n))
    })
  }

  function bt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          f = t,
          m = f;
        e: for (; m !== null;) {
          switch (m.tag) {
            case 27:
              if (Hl(m.type)) {
                Oe = m.stateNode, mt = !1;
                break e
              }
              break;
            case 5:
              Oe = m.stateNode, mt = !1;
              break e;
            case 3:
            case 4:
              Oe = m.stateNode.containerInfo, mt = !0;
              break e
          }
          m = m.return
        }
        if (Oe === null) throw Error(c(160));
        gd(i, f, n), Oe = null, mt = !1, i = n.alternate, i !== null && (i.return = null), n.return = null
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null;) yd(t, e), t = t.sibling
  }
  var Ht = null;

  function yd(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        bt(t, e), St(e), a & 4 && (Rl(3, e, e.return), On(3, e), Rl(5, e, e.return));
        break;
      case 1:
        bt(t, e), St(e), a & 512 && (Le || l === null || Lt(l, l.return)), a & 64 && ul && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Ht;
        if (bt(t, e), St(e), a & 512 && (Le || l === null || Lt(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type,
                  l = e.memoizedProps,
                  n = n.ownerDocument || n;t: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[an] || i[it] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(i, n.querySelector("head > title"))), nt(i, a, l), i[it] = e, $e(i), a = i;
                      break e;
                    case "link":
                      var f = fm("link", "href", n).get(a + (l.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (i = f[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(m, 1);
                            break t
                          }
                      }
                      i = n.createElement(a), nt(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = fm("meta", "content", n).get(a + (l.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (i = f[m], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(m, 1);
                            break t
                          }
                      }
                      i = n.createElement(a), nt(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, a))
                  }
                  i[it] = e,
                  $e(i),
                  a = i
                }
                e.stateNode = a
              }
          else dm(n, e.type, e.stateNode);
          else e.stateNode = om(n, a, e.memoizedProps);
          else i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? dm(n, e.type, e.stateNode) : om(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && ss(e, e.memoizedProps, l.memoizedProps)
        }
        break;
      case 27:
        bt(t, e), St(e), a & 512 && (Le || l === null || Lt(l, l.return)), l !== null && a & 4 && ss(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (bt(t, e), St(e), a & 512 && (Le || l === null || Lt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            pa(n, "")
          } catch (z) {
            ze(e, e.return, z)
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, ss(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (fs = !0);
        break;
      case 6:
        if (bt(t, e), St(e), a & 4) {
          if (e.stateNode === null) throw Error(c(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a
          } catch (z) {
            ze(e, e.return, z)
          }
        }
        break;
      case 3:
        if (gu = null, n = Ht, Ht = mu(t.containerInfo), bt(t, e), Ht = n, St(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Pn(t.containerInfo)
        } catch (z) {
          ze(e, e.return, z)
        }
        fs && (fs = !1, vd(e));
        break;
      case 4:
        a = Ht, Ht = mu(e.stateNode.containerInfo), bt(t, e), St(e), Ht = a;
        break;
      case 12:
        bt(t, e), St(e);
        break;
      case 13:
        bt(t, e), St(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (vs = kt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ds(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var y = l !== null && l.memoizedState !== null,
          A = ul,
          U = Le;
        if (ul = A || n, Le = U || y, bt(t, e), Le = U, ul = A, St(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || y || ul || Le || na(e)), l = null, t = e;;) {
          if (t.tag === 5 || t.tag === 26) {
            if (l === null) {
              y = l = t;
              try {
                if (i = y.stateNode, n) f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                else {
                  m = y.stateNode;
                  var H = y.memoizedProps.style,
                    R = H != null && H.hasOwnProperty("display") ? H.display : null;
                  m.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim()
                }
              } catch (z) {
                ze(y, y.return, z)
              }
            }
          } else if (t.tag === 6) {
            if (l === null) {
              y = t;
              try {
                y.stateNode.nodeValue = n ? "" : y.memoizedProps
              } catch (z) {
                ze(y, y.return, z)
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === e) break e;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) break e;
            l === t && (l = null), t = t.return
          }
          l === t && (l = null), t.sibling.return = t.return, t = t.sibling
        }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, ds(e, l))));
        break;
      case 19:
        bt(t, e), St(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ds(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        bt(t, e), St(e)
    }
  }

  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null;) {
          if (od(a)) {
            l = a;
            break
          }
          a = a.return
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = cs(e);
            eu(e, i, n);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (pa(f, ""), l.flags &= -33);
            var m = cs(e);
            eu(e, m, f);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              A = cs(e);
            os(e, A, y);
            break;
          default:
            throw Error(c(161))
        }
      } catch (U) {
        ze(e, e.return, U)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }

  function vd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        vd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
      }
  }

  function zl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) md(e, t.alternate, t), t = t.sibling
  }

  function na(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rl(4, t, t.return), na(t);
          break;
        case 1:
          Lt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && sd(t, t.return, l), na(t);
          break;
        case 27:
          Vn(t.stateNode);
        case 26:
        case 5:
          Lt(t, t.return), na(t);
          break;
        case 22:
          t.memoizedState === null && na(t);
          break;
        case 30:
          na(t);
          break;
        default:
          na(t)
      }
      e = e.sibling
    }
  }

  function Ml(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate,
        n = e,
        i = t,
        f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ml(n, i, l), On(4, i);
          break;
        case 1:
          if (Ml(n, i, l), a = i, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount()
          } catch (A) {
            ze(a, a.return, A)
          }
          if (a = i, n = a.updateQueue, n !== null) {
            var m = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++) Zo(y[n], m)
            } catch (A) {
              ze(a, a.return, A)
            }
          }
          l && f & 64 && rd(i), Un(i, i.return);
          break;
        case 27:
          fd(i);
        case 26:
        case 5:
          Ml(n, i, l), l && a === null && f & 4 && cd(i), Un(i, i.return);
          break;
        case 12:
          Ml(n, i, l);
          break;
        case 13:
          Ml(n, i, l), l && f & 4 && pd(n, i);
          break;
        case 22:
          i.memoizedState === null && Ml(n, i, l), Un(i, i.return);
          break;
        case 30:
          break;
        default:
          Ml(n, i, l)
      }
      t = t.sibling
    }
  }

  function ms(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && xn(l))
  }

  function hs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xn(e))
  }

  function Yt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) xd(e, t, l, a), t = t.sibling
  }

  function xd(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yt(e, t, l, a), n & 2048 && On(9, t);
        break;
      case 1:
        Yt(e, t, l, a);
        break;
      case 3:
        Yt(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xn(e)));
        break;
      case 12:
        if (n & 2048) {
          Yt(e, t, l, a), e = t.stateNode;
          try {
            var i = t.memoizedProps,
              f = i.id,
              m = i.onPostCommit;
            typeof m == "function" && m(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
          } catch (y) {
            ze(t, t.return, y)
          }
        } else Yt(e, t, l, a);
        break;
      case 13:
        Yt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Yt(e, t, l, a) : Dn(e, t) : i._visibility & 2 ? Yt(e, t, l, a) : (i._visibility |= 2, Da(e, t, l, a, (t.subtreeFlags & 10256) !== 0)), n & 2048 && ms(f, t);
        break;
      case 24:
        Yt(e, t, l, a), n & 2048 && hs(t.alternate, t);
        break;
      default:
        Yt(e, t, l, a)
    }
  }

  function Da(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
      var i = e,
        f = t,
        m = l,
        y = a,
        A = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Da(i, f, m, y, n), On(8, f);
          break;
        case 23:
          break;
        case 22:
          var U = f.stateNode;
          f.memoizedState !== null ? U._visibility & 2 ? Da(i, f, m, y, n) : Dn(i, f) : (U._visibility |= 2, Da(i, f, m, y, n)), n && A & 2048 && ms(f.alternate, f);
          break;
        case 24:
          Da(i, f, m, y, n), n && A & 2048 && hs(f.alternate, f);
          break;
        default:
          Da(i, f, m, y, n)
      }
      t = t.sibling
    }
  }

  function Dn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            Dn(l, a), n & 2048 && ms(a.alternate, a);
            break;
          case 24:
            Dn(l, a), n & 2048 && hs(a.alternate, a);
            break;
          default:
            Dn(l, a)
        }
        t = t.sibling
      }
  }
  var Hn = 8192;

  function Ha(e) {
    if (e.subtreeFlags & Hn)
      for (e = e.child; e !== null;) bd(e), e = e.sibling
  }

  function bd(e) {
    switch (e.tag) {
      case 26:
        Ha(e), e.flags & Hn && e.memoizedState !== null && ip(Ht, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ha(e);
        break;
      case 3:
      case 4:
        var t = Ht;
        Ht = mu(e.stateNode.containerInfo), Ha(e), Ht = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Hn, Hn = 16777216, Ha(e), Hn = t) : Ha(e));
        break;
      default:
        Ha(e)
    }
  }

  function Sd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do t = e.sibling, e.sibling = null, e = t; while (e !== null)
    }
  }

  function Bn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Pe = a, jd(a, e)
        }
      Sd(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) Nd(e), e = e.sibling
  }

  function Nd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Bn(e), e.flags & 2048 && Rl(9, e, e.return);
        break;
      case 3:
        Bn(e);
        break;
      case 12:
        Bn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, tu(e)) : Bn(e);
        break;
      default:
        Bn(e)
    }
  }

  function tu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Pe = a, jd(a, e)
        }
      Sd(e)
    }
    for (e = e.child; e !== null;) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Rl(8, t, t.return), tu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, tu(t));
          break;
        default:
          tu(t)
      }
      e = e.sibling
    }
  }

  function jd(e, t) {
    for (; Pe !== null;) {
      var l = Pe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Rl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          xn(l.memoizedState.cache)
      }
      if (a = l.child, a !== null) a.return = l, Pe = a;
      else e: for (l = e; Pe !== null;) {
        a = Pe;
        var n = a.sibling,
          i = a.return;
        if (hd(a), a === l) {
          Pe = null;
          break e
        }
        if (n !== null) {
          n.return = i, Pe = n;
          break e
        }
        Pe = i
      }
    }
  }
  var S0 = {
      getCacheForType: function (e) {
        var t = ut(Xe),
          l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l
      }
    },
    N0 = typeof WeakMap == "function" ? WeakMap : Map,
    je = 0,
    Me = null,
    fe = null,
    ge = 0,
    we = 0,
    Nt = null,
    _l = !1,
    Ba = !1,
    gs = !1,
    sl = 0,
    Ge = 0,
    Cl = 0,
    ia = 0,
    ps = 0,
    Ot = 0,
    ka = 0,
    kn = null,
    ht = null,
    ys = !1,
    vs = 0,
    lu = 1 / 0,
    au = null,
    Ol = null,
    at = 0,
    Ul = null,
    Ga = null,
    qa = 0,
    xs = 0,
    bs = null,
    wd = null,
    Gn = 0,
    Ss = null;

  function jt() {
    if ((je & 2) !== 0 && ge !== 0) return ge & -ge;
    if (_.T !== null) {
      var e = Ta;
      return e !== 0 ? e : Rs()
    }
    return kc()
  }

  function Ed() {
    Ot === 0 && (Ot = (ge & 536870912) === 0 || xe ? Uc() : 536870912);
    var e = Ct.current;
    return e !== null && (e.flags |= 32), Ot
  }

  function wt(e, t, l) {
    (e === Me && (we === 2 || we === 9) || e.cancelPendingCommit !== null) && (La(e, 0), Dl(e, ge, Ot, !1)), ln(e, l), ((je & 2) === 0 || e !== Me) && (e === Me && ((je & 2) === 0 && (ia |= l), Ge === 4 && Dl(e, ge, Ot, !1)), Vt(e))
  }

  function Ad(e, t, l) {
    if ((je & 6) !== 0) throw Error(c(327));
    var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || tn(e, t),
      n = a ? E0(e, t) : ws(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        Ba && !a && Dl(e, t, 0, !1);
        break
      } else {
        if (l = e.current.alternate, i && !j0(l)) {
          n = ws(e, t, !1), i = !1;
          continue
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i) var f = 0;
          else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var m = e;n = kn;
              var y = m.current.memoizedState.isDehydrated;
              if (y && (La(m, f).flags |= 256), f = ws(m, f, !1), f !== 2) {
                if (gs && !y) {
                  m.errorRecoveryDisabledLanes |= i, ia |= i, n = 4;
                  break e
                }
                i = ht, ht = n, i !== null && (ht === null ? ht = i : ht.push.apply(ht, i))
              }
              n = f
            }
            if (i = !1, n !== 2) continue
          }
        }
        if (n === 1) {
          La(e, 0), Dl(e, t, 0, !0);
          break
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Dl(a, t, Ot, !_l);
              break e;
            case 2:
              ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329))
          }
          if ((t & 62914560) === t && (n = vs + 300 - kt(), 10 < n)) {
            if (Dl(a, t, Ot, !_l), hi(a, 0, !0) !== 0) break e;
            a.timeoutHandle = tm(Td.bind(null, a, l, ht, au, ys, t, Ot, ia, ka, _l, i, 2, -0, 0), n);
            break e
          }
          Td(a, l, ht, au, ys, t, Ot, ia, ka, _l, i, 0, -0, 0)
        }
      }
      break
    } while (!0);
    Vt(e)
  }

  function Td(e, t, l, a, n, i, f, m, y, A, U, H, R, z) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (Zn = {
        stylesheets: null,
        count: 0,
        unsuspend: np
      }, bd(t), H = up(), H !== null)) {
      e.cancelPendingCommit = H(Ud.bind(null, e, t, i, l, a, n, f, m, y, U, 1, R, z)), Dl(e, i, f, !A);
      return
    }
    Ud(e, t, i, l, a, n, f, m, y)
  }

  function j0(e) {
    for (var t = e;;) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!vt(i(), n)) return !1
          } catch {
            return !1
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return !0
  }

  function Dl(e, t, l, a) {
    t &= ~ps, t &= ~ia, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n;) {
      var i = 31 - yt(n),
        f = 1 << i;
      a[i] = -1, n &= ~f
    }
    l !== 0 && Hc(e, l, t)
  }

  function nu() {
    return (je & 6) === 0 ? (qn(0), !1) : !0
  }

  function Ns() {
    if (fe !== null) {
      if (we === 0) var e = fe.return;
      else e = fe, el = Il = null, Gr(e), Oa = null, Mn = 0, e = fe;
      for (; e !== null;) ud(e.alternate, e), e = e.return;
      fe = null
    }
  }

  function La(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, L0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ns(), Me = e, fe = l = Pt(e.current, null), ge = t, we = 0, Nt = null, _l = !1, Ba = tn(e, t), gs = !1, ka = Ot = ps = ia = Cl = Ge = 0, ht = kn = null, ys = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var n = 31 - yt(a),
          i = 1 << n;
        t |= e[n], a &= ~i
      }
    return sl = t, Ai(), l
  }

  function Rd(e, t) {
    re = null, _.H = Qi, t === Sn || t === Di ? (t = Xo(), we = 3) : t === Lo ? (t = Xo(), we = 4) : we = t === Zf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Nt = t, fe === null && (Ge = 1, Wi(e, Rt(t, e.current)))
  }

  function zd() {
    var e = _.H;
    return _.H = Qi, e === null ? Qi : e
  }

  function Md() {
    var e = _.A;
    return _.A = S0, e
  }

  function js() {
    Ge = 4, _l || (ge & 4194048) !== ge && Ct.current !== null || (Ba = !0), (Cl & 134217727) === 0 && (ia & 134217727) === 0 || Me === null || Dl(Me, ge, Ot, !1)
  }

  function ws(e, t, l) {
    var a = je;
    je |= 2;
    var n = zd(),
      i = Md();
    (Me !== e || ge !== t) && (au = null, La(e, t)), t = !1;
    var f = Ge;
    e: do try {
        if (we !== 0 && fe !== null) {
          var m = fe,
            y = Nt;
          switch (we) {
            case 8:
              Ns(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ct.current === null && (t = !0);
              var A = we;
              if (we = 0, Nt = null, Ya(e, m, y, A), l && Ba) {
                f = 0;
                break e
              }
              break;
            default:
              A = we, we = 0, Nt = null, Ya(e, m, y, A)
          }
        }
        w0(), f = Ge;
        break
      } catch (U) {
        Rd(e, U)
      }
      while (!0);
      return t && e.shellSuspendCounter++, el = Il = null, je = a, _.H = n, _.A = i, fe === null && (Me = null, ge = 0, Ai()), f
  }

  function w0() {
    for (; fe !== null;) _d(fe)
  }

  function E0(e, t) {
    var l = je;
    je |= 2;
    var a = zd(),
      n = Md();
    Me !== e || ge !== t ? (au = null, lu = kt() + 500, La(e, t)) : Ba = tn(e, t);
    e: do try {
        if (we !== 0 && fe !== null) {
          t = fe;
          var i = Nt;
          t: switch (we) {
            case 1:
              we = 0, Nt = null, Ya(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Yo(i)) {
                we = 0, Nt = null, Cd(t);
                break
              }
              t = function () {
                we !== 2 && we !== 9 || Me !== e || (we = 7), Vt(e)
              }, i.then(t, t);
              break e;
            case 3:
              we = 7;
              break e;
            case 4:
              we = 5;
              break e;
            case 7:
              Yo(i) ? (we = 0, Nt = null, Cd(t)) : (we = 0, Nt = null, Ya(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var m = fe;
                  if (!f || mm(f)) {
                    we = 0, Nt = null;
                    var y = m.sibling;
                    if (y !== null) fe = y;
                    else {
                      var A = m.return;
                      A !== null ? (fe = A, iu(A)) : fe = null
                    }
                    break t
                  }
              }
              we = 0, Nt = null, Ya(e, t, i, 5);
              break;
            case 6:
              we = 0, Nt = null, Ya(e, t, i, 6);
              break;
            case 8:
              Ns(), Ge = 6;
              break e;
            default:
              throw Error(c(462))
          }
        }
        A0();
        break
      } catch (U) {
        Rd(e, U)
      }
      while (!0);
      return el = Il = null, _.H = a, _.A = n, je = l, fe !== null ? 0 : (Me = null, ge = 0, Ai(), Ge)
  }

  function A0() {
    for (; fe !== null && !Jh();) _d(fe)
  }

  function _d(e) {
    var t = nd(e.alternate, e, sl);
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : fe = t
  }

  function Cd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ff(l, t, t.pendingProps, t.type, void 0, ge);
        break;
      case 11:
        t = Ff(l, t, t.pendingProps, t.type.render, t.ref, ge);
        break;
      case 5:
        Gr(t);
      default:
        ud(l, t), t = fe = Co(t, sl), t = nd(l, t, sl)
    }
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : fe = t
  }

  function Ya(e, t, l, a) {
    el = Il = null, Gr(t), Oa = null, Mn = 0;
    var n = t.return;
    try {
      if (g0(e, n, t, l, ge)) {
        Ge = 1, Wi(e, Rt(l, e.current)), fe = null;
        return
      }
    } catch (i) {
      if (n !== null) throw fe = n, i;
      Ge = 1, Wi(e, Rt(l, e.current)), fe = null;
      return
    }
    t.flags & 32768 ? (xe || a === 1 ? e = !0 : Ba || (ge & 536870912) !== 0 ? e = !1 : (_l = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ct.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Od(t, e)) : iu(t)
  }

  function iu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Od(t, _l);
        return
      }
      e = t.return;
      var l = y0(t.alternate, t, sl);
      if (l !== null) {
        fe = l;
        return
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return
      }
      fe = t = e
    } while (t !== null);
    Ge === 0 && (Ge = 5)
  }

  function Od(e, t) {
    do {
      var l = v0(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, fe = l;
        return
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return
      }
      fe = e = l
    } while (e !== null);
    Ge = 6, fe = null
  }

  function Ud(e, t, l, a, n, i, f, m, y) {
    e.cancelPendingCommit = null;
    do uu(); while (at !== 0);
    if ((je & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= hr, ng(e, l, i, f, m, y), e === Me && (fe = Me = null, ge = 0), Ga = t, Ul = e, qa = l, xs = i, bs = n, wd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, M0(fi, function () {
          return Gd(), null
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null, n = V.p, V.p = 2, f = je, je |= 4;
        try {
          x0(e, t, l)
        } finally {
          je = f, V.p = n, _.T = a
        }
      }
      at = 1, Dd(), Hd(), Bd()
    }
  }

  function Dd() {
    if (at === 1) {
      at = 0;
      var e = Ul,
        t = Ga,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var a = V.p;
        V.p = 2;
        var n = je;
        je |= 4;
        try {
          yd(t, e);
          var i = Hs,
            f = No(e.containerInfo),
            m = i.focusedElem,
            y = i.selectionRange;
          if (f !== m && m && m.ownerDocument && So(m.ownerDocument.documentElement, m)) {
            if (y !== null && cr(m)) {
              var A = y.start,
                U = y.end;
              if (U === void 0 && (U = A), "selectionStart" in m) m.selectionStart = A, m.selectionEnd = Math.min(U, m.value.length);
              else {
                var H = m.ownerDocument || document,
                  R = H && H.defaultView || window;
                if (R.getSelection) {
                  var z = R.getSelection(),
                    le = m.textContent.length,
                    ee = Math.min(y.start, le),
                    Te = y.end === void 0 ? ee : Math.min(y.end, le);
                  !z.extend && ee > Te && (f = Te, Te = ee, ee = f);
                  var N = bo(m, ee),
                    S = bo(m, Te);
                  if (N && S && (z.rangeCount !== 1 || z.anchorNode !== N.node || z.anchorOffset !== N.offset || z.focusNode !== S.node || z.focusOffset !== S.offset)) {
                    var E = H.createRange();
                    E.setStart(N.node, N.offset), z.removeAllRanges(), ee > Te ? (z.addRange(E), z.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), z.addRange(E))
                  }
                }
              }
            }
            for (H = [], z = m; z = z.parentNode;) z.nodeType === 1 && H.push({
              element: z,
              left: z.scrollLeft,
              top: z.scrollTop
            });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < H.length; m++) {
              var D = H[m];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top
            }
          }
          vu = !!Ds, Hs = Ds = null
        } finally {
          je = n, V.p = a, _.T = l
        }
      }
      e.current = t, at = 2
    }
  }

  function Hd() {
    if (at === 2) {
      at = 0;
      var e = Ul,
        t = Ga,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var a = V.p;
        V.p = 2;
        var n = je;
        je |= 4;
        try {
          md(e, t.alternate, t)
        } finally {
          je = n, V.p = a, _.T = l
        }
      }
      at = 3
    }
  }

  function Bd() {
    if (at === 4 || at === 3) {
      at = 0, $h();
      var e = Ul,
        t = Ga,
        l = qa,
        a = wd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, Ga = Ul = null, kd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ol = null), Yu(l), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function") try {
        pt.onCommitFiberRoot(en, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        t = _.T, n = V.p, V.p = 2, _.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            i(m.value, {
              componentStack: m.stack
            })
          }
        } finally {
          _.T = t, V.p = n
        }
      }(qa & 3) !== 0 && uu(), Vt(e), n = e.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? e === Ss ? Gn++ : (Gn = 0, Ss = e) : Gn = 0, qn(0)
    }
  }

  function kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, xn(t)))
  }

  function uu(e) {
    return Dd(), Hd(), Bd(), Gd()
  }

  function Gd() {
    if (at !== 5) return !1;
    var e = Ul,
      t = xs;
    xs = 0;
    var l = Yu(qa),
      a = _.T,
      n = V.p;
    try {
      V.p = 32 > l ? 32 : l, _.T = null, l = bs, bs = null;
      var i = Ul,
        f = qa;
      if (at = 0, Ga = Ul = null, qa = 0, (je & 6) !== 0) throw Error(c(331));
      var m = je;
      if (je |= 4, Nd(i.current), xd(i, i.current, f, l), je = m, qn(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function") try {
        pt.onPostCommitFiberRoot(en, i)
      } catch {}
      return !0
    } finally {
      V.p = n, _.T = a, kd(e, t)
    }
  }

  function qd(e, t, l) {
    t = Rt(l, t), t = Ir(e.stateNode, t, 2), e = wl(e, t, 2), e !== null && (ln(e, 2), Vt(e))
  }

  function ze(e, t, l) {
    if (e.tag === 3) qd(e, e, l);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          qd(t, e, l);
          break
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ol === null || !Ol.has(a))) {
            e = Rt(l, e), l = Xf(2), a = wl(t, l, 2), a !== null && (Qf(l, a, t, e), ln(a, 2), Vt(a));
            break
          }
        }
        t = t.return
      }
  }

  function Es(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new N0;
      var n = new Set;
      a.set(t, n)
    } else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
    n.has(l) || (gs = !0, n.add(l), e = T0.bind(null, e, t, l), t.then(e, e))
  }

  function T0(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Me === e && (ge & l) === l && (Ge === 4 || Ge === 3 && (ge & 62914560) === ge && 300 > kt() - vs ? (je & 2) === 0 && La(e, 0) : ps |= l, ka === ge && (ka = 0)), Vt(e)
  }

  function Ld(e, t) {
    t === 0 && (t = Dc()), e = ja(e, t), e !== null && (ln(e, t), Vt(e))
  }

  function R0(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Ld(e, l)
  }

  function z0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314))
    }
    a !== null && a.delete(t), Ld(e, l)
  }

  function M0(e, t) {
    return ku(e, t)
  }
  var ru = null,
    Va = null,
    As = !1,
    su = !1,
    Ts = !1,
    ua = 0;

  function Vt(e) {
    e !== Va && e.next === null && (Va === null ? ru = Va = e : Va = Va.next = e), su = !0, As || (As = !0, C0())
  }

  function qn(e, t) {
    if (!Ts && su) {
      Ts = !0;
      do
        for (var l = !1, a = ru; a !== null;) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var f = a.suspendedLanes,
                m = a.pingedLanes;
              i = (1 << 31 - yt(42 | e) + 1) - 1, i &= n & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
            }
            i !== 0 && (l = !0, Qd(a, i))
          } else i = ge, i = hi(a, a === Me ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || tn(a, i) || (l = !0, Qd(a, i));
          a = a.next
        }
      while (l);
      Ts = !1
    }
  }

  function _0() {
    Yd()
  }

  function Yd() {
    su = As = !1;
    var e = 0;
    ua !== 0 && (q0() && (e = ua), ua = 0);
    for (var t = kt(), l = null, a = ru; a !== null;) {
      var n = a.next,
        i = Vd(a, t);
      i === 0 ? (a.next = null, l === null ? ru = n : l.next = n, n === null && (Va = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (su = !0)), a = n
    }
    qn(e)
  }

  function Vd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) {
      var f = 31 - yt(i),
        m = 1 << f,
        y = n[f];
      y === -1 ? ((m & l) === 0 || (m & a) !== 0) && (n[f] = ag(m, t)) : y <= t && (e.expiredLanes |= m), i &= ~m
    }
    if (t = Me, l = ge, l = hi(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (we === 2 || we === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && Gu(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || tn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Gu(a), Yu(l)) {
        case 2:
        case 8:
          l = Cc;
          break;
        case 32:
          l = fi;
          break;
        case 268435456:
          l = Oc;
          break;
        default:
          l = fi
      }
      return a = Xd.bind(null, e), l = ku(l, a), e.callbackPriority = t, e.callbackNode = l, t
    }
    return a !== null && a !== null && Gu(a), e.callbackPriority = 2, e.callbackNode = null, 2
  }

  function Xd(e, t) {
    if (at !== 0 && at !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (uu() && e.callbackNode !== l) return null;
    var a = ge;
    return a = hi(e, e === Me ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Ad(e, a, t), Vd(e, kt()), e.callbackNode != null && e.callbackNode === l ? Xd.bind(null, e) : null)
  }

  function Qd(e, t) {
    if (uu()) return null;
    Ad(e, t, !0)
  }

  function C0() {
    Y0(function () {
      (je & 6) !== 0 ? ku(_c, _0) : Yd()
    })
  }

  function Rs() {
    return ua === 0 && (ua = Uc()), ua
  }

  function Zd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xi("" + e)
  }

  function Kd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
  }

  function O0(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Zd((n[ot] || null).action),
        f = a.submitter;
      f && (t = (t = f[ot] || null) ? Zd(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var m = new ji("action", "action", null, a, n);
      e.push({
        event: m,
        listeners: [{
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (ua !== 0) {
                var y = f ? Kd(n, f) : new FormData(n);
                Jr(l, {
                  pending: !0,
                  data: y,
                  method: n.method,
                  action: i
                }, null, y)
              }
            } else typeof i == "function" && (m.preventDefault(), y = f ? Kd(n, f) : new FormData(n), Jr(l, {
              pending: !0,
              data: y,
              method: n.method,
              action: i
            }, i, y))
          },
          currentTarget: n
        }]
      })
    }
  }
  for (var zs = 0; zs < mr.length; zs++) {
    var Ms = mr[zs],
      U0 = Ms.toLowerCase(),
      D0 = Ms[0].toUpperCase() + Ms.slice(1);
    Dt(U0, "on" + D0)
  }
  Dt(Eo, "onAnimationEnd"), Dt(Ao, "onAnimationIteration"), Dt(To, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Fg, "onTransitionRun"), Dt(Ig, "onTransitionStart"), Dt(e0, "onTransitionCancel"), Dt(Ro, "onTransitionEnd"), ma("onMouseEnter", ["mouseout", "mouseover"]), ma("onMouseLeave", ["mouseout", "mouseover"]), ma("onPointerEnter", ["pointerout", "pointerover"]), ma("onPointerLeave", ["pointerout", "pointerover"]), Xl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Xl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Xl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Xl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Xl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Xl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    H0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));

  function Jd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f],
              y = m.instance,
              A = m.currentTarget;
            if (m = m.listener, y !== i && n.isPropagationStopped()) break e;
            i = m, n.currentTarget = A;
            try {
              i(n)
            } catch (U) {
              $i(U)
            }
            n.currentTarget = null, i = y
          } else
            for (f = 0; f < a.length; f++) {
              if (m = a[f], y = m.instance, A = m.currentTarget, m = m.listener, y !== i && n.isPropagationStopped()) break e;
              i = m, n.currentTarget = A;
              try {
                i(n)
              } catch (U) {
                $i(U)
              }
              n.currentTarget = null, i = y
            }
      }
    }
  }

  function de(e, t) {
    var l = t[Vu];
    l === void 0 && (l = t[Vu] = new Set);
    var a = e + "__bubble";
    l.has(a) || ($d(t, e, 2, !1), l.add(a))
  }

  function _s(e, t, l) {
    var a = 0;
    t && (a |= 4), $d(l, e, a, t)
  }
  var cu = "_reactListening" + Math.random().toString(36).slice(2);

  function Cs(e) {
    if (!e[cu]) {
      e[cu] = !0, qc.forEach(function (l) {
        l !== "selectionchange" && (H0.has(l) || _s(l, !1, e), _s(l, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cu] || (t[cu] = !0, _s("selectionchange", !1, t))
    }
  }

  function $d(e, t, l, a) {
    switch (xm(t)) {
      case 2:
        var n = cp;
        break;
      case 8:
        n = op;
        break;
      default:
        n = Zs
    }
    l = n.bind(null, t, l, e), n = void 0, !er || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1)
  }

  function Os(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
      if (a === null) return;
      var f = a.tag;
      if (f === 3 || f === 4) {
        var m = a.stateNode.containerInfo;
        if (m === n) break;
        if (f === 4)
          for (f = a.return; f !== null;) {
            var y = f.tag;
            if ((y === 3 || y === 4) && f.stateNode.containerInfo === n) return;
            f = f.return
          }
        for (; m !== null;) {
          if (f = oa(m), f === null) return;
          if (y = f.tag, y === 5 || y === 6 || y === 26 || y === 27) {
            a = i = f;
            continue e
          }
          m = m.parentNode
        }
      }
      a = a.return
    }
    eo(function () {
      var A = i,
        U = Fu(l),
        H = [];
      e: {
        var R = zo.get(e);
        if (R !== void 0) {
          var z = ji,
            le = e;
          switch (e) {
            case "keypress":
              if (Si(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = Mg;
              break;
            case "focusin":
              le = "focus", z = nr;
              break;
            case "focusout":
              le = "blur", z = nr;
              break;
            case "beforeblur":
            case "afterblur":
              z = nr;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = ao;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = vg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Og;
              break;
            case Eo:
            case Ao:
            case To:
              z = Sg;
              break;
            case Ro:
              z = Dg;
              break;
            case "scroll":
            case "scrollend":
              z = pg;
              break;
            case "wheel":
              z = Bg;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = jg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = io;
              break;
            case "toggle":
            case "beforetoggle":
              z = Gg
          }
          var ee = (t & 4) !== 0,
            Te = !ee && (e === "scroll" || e === "scrollend"),
            N = ee ? R !== null ? R + "Capture" : null : R;
          ee = [];
          for (var S = A, E; S !== null;) {
            var D = S;
            if (E = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || E === null || N === null || (D = un(S, N), D != null && ee.push(Yn(S, D, E))), Te) break;
            S = S.return
          }
          0 < ee.length && (R = new z(R, le, null, l, U), H.push({
            event: R,
            listeners: ee
          }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", R && l !== Pu && (le = l.relatedTarget || l.fromElement) && (oa(le) || le[ca])) break e;
          if ((z || R) && (R = U.window === U ? U : (R = U.ownerDocument) ? R.defaultView || R.parentWindow : window, z ? (le = l.relatedTarget || l.toElement, z = A, le = le ? oa(le) : null, le !== null && (Te = h(le), ee = le.tag, le !== Te || ee !== 5 && ee !== 27 && ee !== 6) && (le = null)) : (z = null, le = A), z !== le)) {
            if (ee = ao, D = "onMouseLeave", N = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (ee = io, D = "onPointerLeave", N = "onPointerEnter", S = "pointer"), Te = z == null ? R : nn(z), E = le == null ? R : nn(le), R = new ee(D, S + "leave", z, l, U), R.target = Te, R.relatedTarget = E, D = null, oa(U) === A && (ee = new ee(N, S + "enter", le, l, U), ee.target = E, ee.relatedTarget = Te, D = ee), Te = D, z && le) t: {
              for (ee = z, N = le, S = 0, E = ee; E; E = Xa(E)) S++;
              for (E = 0, D = N; D; D = Xa(D)) E++;
              for (; 0 < S - E;) ee = Xa(ee),
              S--;
              for (; 0 < E - S;) N = Xa(N),
              E--;
              for (; S--;) {
                if (ee === N || N !== null && ee === N.alternate) break t;
                ee = Xa(ee), N = Xa(N)
              }
              ee = null
            }
            else ee = null;
            z !== null && Wd(H, R, z, ee, !1), le !== null && Te !== null && Wd(H, Te, le, ee, !0)
          }
        }
        e: {
          if (R = A ? nn(A) : window, z = R.nodeName && R.nodeName.toLowerCase(), z === "select" || z === "input" && R.type === "file") var J = ho;
          else if (fo(R))
            if (go) J = $g;
            else {
              J = Kg;
              var ce = Zg
            }
          else z = R.nodeName,
          !z || z.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? A && Wu(A.elementType) && (J = ho) : J = Jg;
          if (J && (J = J(e, A))) {
            mo(H, J, l, U);
            break e
          }
          ce && ce(e, R, A),
          e === "focusout" && A && R.type === "number" && A.memoizedProps.value != null && $u(R, "number", R.value)
        }
        switch (ce = A ? nn(A) : window, e) {
          case "focusin":
            (fo(ce) || ce.contentEditable === "true") && (ba = ce, or = A, hn = null);
            break;
          case "focusout":
            hn = or = ba = null;
            break;
          case "mousedown":
            fr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fr = !1, jo(H, l, U);
            break;
          case "selectionchange":
            if (Pg) break;
          case "keydown":
          case "keyup":
            jo(H, l, U)
        }
        var I;
        if (ur) e: {
          switch (e) {
            case "compositionstart":
              var te = "onCompositionStart";
              break e;
            case "compositionend":
              te = "onCompositionEnd";
              break e;
            case "compositionupdate":
              te = "onCompositionUpdate";
              break e
          }
          te = void 0
        }
        else xa ? co(e, l) && (te = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (te = "onCompositionStart");te && (uo && l.locale !== "ko" && (xa || te !== "onCompositionStart" ? te === "onCompositionEnd" && xa && (I = to()) : (bl = U, tr = "value" in bl ? bl.value : bl.textContent, xa = !0)), ce = ou(A, te), 0 < ce.length && (te = new no(te, e, null, l, U), H.push({
          event: te,
          listeners: ce
        }), I ? te.data = I : (I = oo(l), I !== null && (te.data = I)))),
        (I = Lg ? Yg(e, l) : Vg(e, l)) && (te = ou(A, "onBeforeInput"), 0 < te.length && (ce = new no("onBeforeInput", "beforeinput", null, l, U), H.push({
          event: ce,
          listeners: te
        }), ce.data = I)),
        O0(H, e, A, l, U)
      }
      Jd(H, t)
    })
  }

  function Yn(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    }
  }

  function ou(e, t) {
    for (var l = t + "Capture", a = []; e !== null;) {
      var n = e,
        i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = un(e, l), n != null && a.unshift(Yn(e, n, i)), n = un(e, t), n != null && a.push(Yn(e, n, i))), e.tag === 3) return a;
      e = e.return
    }
    return []
  }

  function Xa(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
    return e || null
  }

  function Wd(e, t, l, a, n) {
    for (var i = t._reactName, f = []; l !== null && l !== a;) {
      var m = l,
        y = m.alternate,
        A = m.stateNode;
      if (m = m.tag, y !== null && y === a) break;
      m !== 5 && m !== 26 && m !== 27 || A === null || (y = A, n ? (A = un(l, i), A != null && f.unshift(Yn(l, A, y))) : n || (A = un(l, i), A != null && f.push(Yn(l, A, y)))), l = l.return
    }
    f.length !== 0 && e.push({
      event: t,
      listeners: f
    })
  }
  var B0 = /\r\n?/g,
    k0 = /\u0000|\uFFFD/g;

  function Pd(e) {
    return (typeof e == "string" ? e : "" + e).replace(B0, `
`).replace(k0, "")
  }

  function Fd(e, t) {
    return t = Pd(t), Pd(e) === t
  }

  function fu() {}

  function Ae(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || pa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && pa(e, "" + a);
        break;
      case "className":
        pi(e, "class", a);
        break;
      case "tabIndex":
        pi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pi(e, l, a);
        break;
      case "style":
        Fc(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          pi(e, "data", a);
          break
        }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || l !== "href")) {
            e.removeAttribute(l);
            break
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(l);
            break
          }
          a = xi("" + a), e.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break
          } else typeof i == "function" && (l === "formAction" ? (t !== "input" && Ae(e, t, "name", n.name, n, null), Ae(e, t, "formEncType", n.formEncType, n, null), Ae(e, t, "formMethod", n.formMethod, n, null), Ae(e, t, "formTarget", n.formTarget, n, null)) : (Ae(e, t, "encType", n.encType, n, null), Ae(e, t, "method", n.method, n, null), Ae(e, t, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(l);
            break
          }
          a = xi("" + a), e.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (e.onclick = fu);
          break;
        case "onScroll":
          a != null && de("scroll", e);
          break;
        case "onScrollEnd":
          a != null && de("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(c(60));
              e.innerHTML = l
            }
          }
          break;
        case "multiple":
          e.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          e.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            e.removeAttribute("xlink:href");
            break
          }
          l = xi("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
          break;
        case "popover":
          de("beforetoggle", e), de("toggle", e), gi(e, "popover", a);
          break;
        case "xlinkActuate":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          $t(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          $t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          $t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          $t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          gi(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = hg.get(l) || l, gi(e, l, a))
    }
  }

  function Us(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        Fc(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(c(60));
            e.innerHTML = l
          }
        }
        break;
      case "children":
        typeof a == "string" ? pa(e, a) : (typeof a == "number" || typeof a == "bigint") && pa(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = fu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Lc.hasOwnProperty(l)) e: {
          if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
            break e
          }
          l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : gi(e, l, a)
        }
    }
  }

  function nt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        de("error", e), de("load", e);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null) switch (i) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                n = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ae(e, t, i, f, l, null)
            }
          } n && Ae(e, t, "srcSet", l.srcSet, l, null), a && Ae(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var m = i = f = n = null,
          y = null,
          A = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var U = l[a];
            if (U != null) switch (a) {
              case "name":
                n = U;
                break;
              case "type":
                f = U;
                break;
              case "checked":
                y = U;
                break;
              case "defaultChecked":
                A = U;
                break;
              case "value":
                i = U;
                break;
              case "defaultValue":
                m = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(c(137, t));
                break;
              default:
                Ae(e, t, a, U, l, null)
            }
          } Jc(e, i, m, y, A, f, n, !1), yi(e);
        return;
      case "select":
        de("invalid", e), a = f = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (m = l[n], m != null)) switch (n) {
            case "value":
              i = m;
              break;
            case "defaultValue":
              f = m;
              break;
            case "multiple":
              a = m;
            default:
              Ae(e, t, n, m, l, null)
          }
        t = i, l = f, e.multiple = !!a, t != null ? ga(e, !!a, t, !1) : l != null && ga(e, !!a, l, !0);
        return;
      case "textarea":
        de("invalid", e), i = n = a = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (m = l[f], m != null)) switch (f) {
            case "value":
              a = m;
              break;
            case "defaultValue":
              n = m;
              break;
            case "children":
              i = m;
              break;
            case "dangerouslySetInnerHTML":
              if (m != null) throw Error(c(91));
              break;
            default:
              Ae(e, t, f, m, l, null)
          }
        Wc(e, a, n, i), yi(e);
        return;
      case "option":
        for (y in l)
          if (l.hasOwnProperty(y) && (a = l[y], a != null)) switch (y) {
            case "selected":
              e.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              Ae(e, t, y, a, l, null)
          }
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ln.length; a++) de(Ln[a], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (A in l)
          if (l.hasOwnProperty(A) && (a = l[A], a != null)) switch (A) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, t));
            default:
              Ae(e, t, A, a, l, null)
          }
        return;
      default:
        if (Wu(t)) {
          for (U in l) l.hasOwnProperty(U) && (a = l[U], a !== void 0 && Us(e, t, U, a, l, void 0));
          return
        }
    }
    for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null && Ae(e, t, m, a, l, null))
  }

  function G0(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          f = null,
          m = null,
          y = null,
          A = null,
          U = null;
        for (z in l) {
          var H = l[z];
          if (l.hasOwnProperty(z) && H != null) switch (z) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              y = H;
            default:
              a.hasOwnProperty(z) || Ae(e, t, z, null, a, H)
          }
        }
        for (var R in a) {
          var z = a[R];
          if (H = l[R], a.hasOwnProperty(R) && (z != null || H != null)) switch (R) {
            case "type":
              i = z;
              break;
            case "name":
              n = z;
              break;
            case "checked":
              A = z;
              break;
            case "defaultChecked":
              U = z;
              break;
            case "value":
              f = z;
              break;
            case "defaultValue":
              m = z;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (z != null) throw Error(c(137, t));
              break;
            default:
              z !== H && Ae(e, t, R, z, a, H)
          }
        }
        Ju(e, f, m, y, A, U, i, n);
        return;
      case "select":
        z = f = m = R = null;
        for (i in l)
          if (y = l[i], l.hasOwnProperty(i) && y != null) switch (i) {
            case "value":
              break;
            case "multiple":
              z = y;
            default:
              a.hasOwnProperty(i) || Ae(e, t, i, null, a, y)
          }
        for (n in a)
          if (i = a[n], y = l[n], a.hasOwnProperty(n) && (i != null || y != null)) switch (n) {
            case "value":
              R = i;
              break;
            case "defaultValue":
              m = i;
              break;
            case "multiple":
              f = i;
            default:
              i !== y && Ae(e, t, n, i, a, y)
          }
        t = m, l = f, a = z, R != null ? ga(e, !!l, R, !1) : !!a != !!l && (t != null ? ga(e, !!l, t, !0) : ga(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = R = null;
        for (m in l)
          if (n = l[m], l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m)) switch (m) {
            case "value":
              break;
            case "children":
              break;
            default:
              Ae(e, t, m, null, a, n)
          }
        for (f in a)
          if (n = a[f], i = l[f], a.hasOwnProperty(f) && (n != null || i != null)) switch (f) {
            case "value":
              R = n;
              break;
            case "defaultValue":
              z = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(c(91));
              break;
            default:
              n !== i && Ae(e, t, f, n, a, i)
          }
        $c(e, R, z);
        return;
      case "option":
        for (var le in l)
          if (R = l[le], l.hasOwnProperty(le) && R != null && !a.hasOwnProperty(le)) switch (le) {
            case "selected":
              e.selected = !1;
              break;
            default:
              Ae(e, t, le, null, a, R)
          }
        for (y in a)
          if (R = a[y], z = l[y], a.hasOwnProperty(y) && R !== z && (R != null || z != null)) switch (y) {
            case "selected":
              e.selected = R && typeof R != "function" && typeof R != "symbol";
              break;
            default:
              Ae(e, t, y, R, a, z)
          }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ee in l) R = l[ee], l.hasOwnProperty(ee) && R != null && !a.hasOwnProperty(ee) && Ae(e, t, ee, null, a, R);
        for (A in a)
          if (R = a[A], z = l[A], a.hasOwnProperty(A) && R !== z && (R != null || z != null)) switch (A) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (R != null) throw Error(c(137, t));
              break;
            default:
              Ae(e, t, A, R, a, z)
          }
        return;
      default:
        if (Wu(t)) {
          for (var Te in l) R = l[Te], l.hasOwnProperty(Te) && R !== void 0 && !a.hasOwnProperty(Te) && Us(e, t, Te, void 0, a, R);
          for (U in a) R = a[U], z = l[U], !a.hasOwnProperty(U) || R === z || R === void 0 && z === void 0 || Us(e, t, U, R, a, z);
          return
        }
    }
    for (var N in l) R = l[N], l.hasOwnProperty(N) && R != null && !a.hasOwnProperty(N) && Ae(e, t, N, null, a, R);
    for (H in a) R = a[H], z = l[H], !a.hasOwnProperty(H) || R === z || R == null && z == null || Ae(e, t, H, R, a, z)
  }
  var Ds = null,
    Hs = null;

  function du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }

  function Id(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function em(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return e === 1 && t === "foreignObject" ? 0 : e
  }

  function Bs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var ks = null;

  function q0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ks ? !1 : (ks = e, !0) : (ks = null, !1)
  }
  var tm = typeof setTimeout == "function" ? setTimeout : void 0,
    L0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    lm = typeof Promise == "function" ? Promise : void 0,
    Y0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof lm < "u" ? function (e) {
      return lm.resolve(null).then(e).catch(V0)
    } : tm;

  function V0(e) {
    setTimeout(function () {
      throw e
    })
  }

  function Hl(e) {
    return e === "head"
  }

  function am(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var f = e.ownerDocument;
            if (l & 1 && Vn(f.documentElement), l & 2 && Vn(f.body), l & 4)
              for (l = f.head, Vn(l), f = l.firstChild; f;) {
                var m = f.nextSibling,
                  y = f.nodeName;
                f[an] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && f.rel.toLowerCase() === "stylesheet" || l.removeChild(f), f = m
              }
          }
          if (n === 0) {
            e.removeChild(i), Pn(t);
            return
          }
          n--
        } else l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = i
    } while (l);
    Pn(t)
  }

  function Gs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gs(l), Xu(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue
      }
      e.removeChild(l)
    }
  }

  function X0(e, t, l, a) {
    for (; e.nodeType === 1;) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
      } else if (a) {
        if (!e[an]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e
        }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e
      } else return e;
      if (e = Bt(e.nextSibling), e === null) break
    }
    return null
  }

  function Q0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e
  }

  function qs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
  }

  function Z0(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a)
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a
    }
  }

  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
        if (t === "/$") return null
      }
    }
    return e
  }
  var Ls = null;

  function nm(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--
        } else l === "/$" && t++
      }
      e = e.previousSibling
    }
    return null
  }

  function im(e, t, l) {
    switch (t = du(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451))
    }
  }

  function Vn(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    Xu(e)
  }
  var Ut = new Map,
    um = new Set;

  function mu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
  }
  var cl = V.d;
  V.d = {
    f: K0,
    r: J0,
    D: $0,
    C: W0,
    L: P0,
    m: F0,
    X: ep,
    S: I0,
    M: tp
  };

  function K0() {
    var e = cl.f(),
      t = nu();
    return e || t
  }

  function J0(e) {
    var t = fa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Af(t) : cl.r(e)
  }
  var Qa = typeof document > "u" ? null : document;

  function rm(e, t, l) {
    var a = Qa;
    if (a && typeof t == "string" && t) {
      var n = Tt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), um.has(n) || (um.add(n), e = {
        rel: e,
        crossOrigin: l,
        href: t
      }, a.querySelector(n) === null && (t = a.createElement("link"), nt(t, "link", e), $e(t), a.head.appendChild(t)))
    }
  }

  function $0(e) {
    cl.D(e), rm("dns-prefetch", e, null)
  }

  function W0(e, t) {
    cl.C(e, t), rm("preconnect", e, t)
  }

  function P0(e, t, l) {
    cl.L(e, t, l);
    var a = Qa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Tt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Tt(l.imageSizes) + '"]')) : n += '[href="' + Tt(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = Za(e);
          break;
        case "script":
          i = Ka(e)
      }
      Ut.has(i) || (e = j({
        rel: "preload",
        href: t === "image" && l && l.imageSrcSet ? void 0 : e,
        as: t
      }, l), Ut.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Xn(i)) || t === "script" && a.querySelector(Qn(i)) || (t = a.createElement("link"), nt(t, "link", e), $e(t), a.head.appendChild(t)))
    }
  }

  function F0(e, t) {
    cl.m(e, t);
    var l = Qa;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n = 'link[rel="modulepreload"][as="' + Tt(a) + '"][href="' + Tt(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ka(e)
      }
      if (!Ut.has(i) && (e = j({
          rel: "modulepreload",
          href: e
        }, t), Ut.set(i, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Qn(i))) return
        }
        a = l.createElement("link"), nt(a, "link", e), $e(a), l.head.appendChild(a)
      }
    }
  }

  function I0(e, t, l) {
    cl.S(e, t, l);
    var a = Qa;
    if (a && e) {
      var n = da(a).hoistableStyles,
        i = Za(e);
      t = t || "default";
      var f = n.get(i);
      if (!f) {
        var m = {
          loading: 0,
          preload: null
        };
        if (f = a.querySelector(Xn(i))) m.loading = 5;
        else {
          e = j({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, l), (l = Ut.get(i)) && Ys(e, l);
          var y = f = a.createElement("link");
          $e(y), nt(y, "link", e), y._p = new Promise(function (A, U) {
            y.onload = A, y.onerror = U
          }), y.addEventListener("load", function () {
            m.loading |= 1
          }), y.addEventListener("error", function () {
            m.loading |= 2
          }), m.loading |= 4, hu(f, t, a)
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, n.set(i, f)
      }
    }
  }

  function ep(e, t) {
    cl.X(e, t);
    var l = Qa;
    if (l && e) {
      var a = da(l).hoistableScripts,
        n = Ka(e),
        i = a.get(n);
      i || (i = l.querySelector(Qn(n)), i || (e = j({
        src: e,
        async: !0
      }, t), (t = Ut.get(n)) && Vs(e, t), i = l.createElement("script"), $e(i), nt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i))
    }
  }

  function tp(e, t) {
    cl.M(e, t);
    var l = Qa;
    if (l && e) {
      var a = da(l).hoistableScripts,
        n = Ka(e),
        i = a.get(n);
      i || (i = l.querySelector(Qn(n)), i || (e = j({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = Ut.get(n)) && Vs(e, t), i = l.createElement("script"), $e(i), nt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i))
    }
  }

  function sm(e, t, l, a) {
    var n = (n = ae.current) ? mu(n) : null;
    if (!n) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Za(l.href), l = da(n).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Za(l.href);
          var i = da(n).hoistableStyles,
            f = i.get(e);
          if (f || (n = n.ownerDocument || n, f = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, i.set(e, f), (i = n.querySelector(Xn(e))) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ut.set(e, l), i || lp(n, e, l, f.state))), t && a === null) throw Error(c(528, ""));
          return f
        }
        if (t && a !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ka(l), l = da(n).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(c(444, e))
    }
  }

  function Za(e) {
    return 'href="' + Tt(e) + '"'
  }

  function Xn(e) {
    return 'link[rel="stylesheet"][' + e + "]"
  }

  function cm(e) {
    return j({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    })
  }

  function lp(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function () {
      return a.loading |= 1
    }), t.addEventListener("error", function () {
      return a.loading |= 2
    }), nt(t, "link", l), $e(t), e.head.appendChild(t))
  }

  function Ka(e) {
    return '[src="' + Tt(e) + '"]'
  }

  function Qn(e) {
    return "script[async]" + e
  }

  function om(e, t, l) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + Tt(l.href) + '"]');
        if (a) return t.instance = a, $e(a), a;
        var n = j({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (e.ownerDocument || e).createElement("style"), $e(a), nt(a, "style", n), hu(a, l.precedence, e), t.instance = a;
      case "stylesheet":
        n = Za(l.href);
        var i = e.querySelector(Xn(n));
        if (i) return t.state.loading |= 4, t.instance = i, $e(i), i;
        a = cm(l), (n = Ut.get(n)) && Ys(a, n), i = (e.ownerDocument || e).createElement("link"), $e(i);
        var f = i;
        return f._p = new Promise(function (m, y) {
          f.onload = m, f.onerror = y
        }), nt(i, "link", a), t.state.loading |= 4, hu(i, l.precedence, e), t.instance = i;
      case "script":
        return i = Ka(l.src), (n = e.querySelector(Qn(i))) ? (t.instance = n, $e(n), n) : (a = l, (n = Ut.get(i)) && (a = j({}, l), Vs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), $e(n), nt(n, "link", a), e.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(c(443, t.type))
    } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, hu(a, l.precedence, e));
    return t.instance
  }

  function hu(e, t, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === t) i = m;
      else if (i !== n) break
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
  }

  function Ys(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
  }

  function Vs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
  }
  var gu = null;

  function fm(e, t, l) {
    if (gu === null) {
      var a = new Map,
        n = gu = new Map;
      n.set(l, a)
    } else n = gu, a = n.get(l), a || (a = new Map, n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[an] || i[it] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var m = a.get(f);
        m ? m.push(i) : a.set(f, [i])
      }
    }
    return a
  }

  function dm(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
  }

  function ap(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0
        }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
    }
    return !1
  }

  function mm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
  }
  var Zn = null;

  function np() {}

  function ip(e, t, l) {
    if (Zn === null) throw Error(c(475));
    var a = Zn;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = Za(l.href),
          i = e.querySelector(Xn(n));
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = pu.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = i, $e(i);
          return
        }
        i = e.ownerDocument || e, l = cm(l), (n = Ut.get(n)) && Ys(l, n), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function (m, y) {
          f.onload = m, f.onerror = y
        }), nt(i, "link", l), t.instance = i
      }
      a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = pu.bind(a), e.addEventListener("load", t), e.addEventListener("error", t))
    }
  }

  function up() {
    if (Zn === null) throw Error(c(475));
    var e = Zn;
    return e.stylesheets && e.count === 0 && Xs(e, e.stylesheets), 0 < e.count ? function (t) {
      var l = setTimeout(function () {
        if (e.stylesheets && Xs(e, e.stylesheets), e.unsuspend) {
          var a = e.unsuspend;
          e.unsuspend = null, a()
        }
      }, 6e4);
      return e.unsuspend = t,
        function () {
          e.unsuspend = null, clearTimeout(l)
        }
    } : null
  }

  function pu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Xs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e()
      }
    }
  }
  var yu = null;

  function Xs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yu = new Map, t.forEach(rp, e), yu = null, pu.call(e))
  }

  function rp(e, t) {
    if (!(t.state.loading & 4)) {
      var l = yu.get(e);
      if (l) var a = l.get(null);
      else {
        l = new Map, yu.set(e, l);
        for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
          var f = n[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f)
        }
        a && l.set(null, a)
      }
      n = t.instance, f = n.getAttribute("data-precedence"), i = l.get(f) || a, i === a && l.set(null, n), l.set(f, n), this.count++, a = pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4
    }
  }
  var Kn = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };

  function sp(e, t, l, a, n, i, f, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = qu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qu(0), this.hiddenUpdates = qu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
  }

  function hm(e, t, l, a, n, i, f, m, y, A, U, H) {
    return e = new sp(e, t, l, f, m, y, A, H), t = 1, i === !0 && (t |= 24), i = xt(3, null, null, t), e.current = i, i.stateNode = e, t = Er(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, zr(i), e
  }

  function gm(e) {
    return e ? (e = wa, e) : wa
  }

  function pm(e, t, l, a, n, i) {
    n = gm(n), a.context === null ? a.context = n : a.pendingContext = n, a = jl(t), a.payload = {
      element: l
    }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = wl(e, a, t), l !== null && (wt(l, e, t), jn(l, e, t))
  }

  function ym(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t
    }
  }

  function Qs(e, t) {
    ym(e, t), (e = e.alternate) && ym(e, t)
  }

  function vm(e) {
    if (e.tag === 13) {
      var t = ja(e, 67108864);
      t !== null && wt(t, e, 67108864), Qs(e, 67108864)
    }
  }
  var vu = !0;

  function cp(e, t, l, a) {
    var n = _.T;
    _.T = null;
    var i = V.p;
    try {
      V.p = 2, Zs(e, t, l, a)
    } finally {
      V.p = i, _.T = n
    }
  }

  function op(e, t, l, a) {
    var n = _.T;
    _.T = null;
    var i = V.p;
    try {
      V.p = 8, Zs(e, t, l, a)
    } finally {
      V.p = i, _.T = n
    }
  }

  function Zs(e, t, l, a) {
    if (vu) {
      var n = Ks(a);
      if (n === null) Os(e, t, a, xu, l), bm(e, a);
      else if (dp(n, e, t, l, a)) a.stopPropagation();
      else if (bm(e, a), t & 4 && -1 < fp.indexOf(e)) {
        for (; n !== null;) {
          var i = fa(n);
          if (i !== null) switch (i.tag) {
            case 3:
              if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                var f = Vl(i.pendingLanes);
                if (f !== 0) {
                  var m = i;
                  for (m.pendingLanes |= 2, m.entangledLanes |= 2; f;) {
                    var y = 1 << 31 - yt(f);
                    m.entanglements[1] |= y, f &= ~y
                  }
                  Vt(i), (je & 6) === 0 && (lu = kt() + 500, qn(0))
                }
              }
              break;
            case 13:
              m = ja(i, 2), m !== null && wt(m, i, 2), nu(), Qs(i, 2)
          }
          if (i = Ks(a), i === null && Os(e, t, a, xu, l), i === n) break;
          n = i
        }
        n !== null && a.stopPropagation()
      } else Os(e, t, a, null, l)
    }
  }

  function Ks(e) {
    return e = Fu(e), Js(e)
  }
  var xu = null;

  function Js(e) {
    if (xu = null, e = oa(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = v(t), e !== null) return e;
          e = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null)
      }
    }
    return xu = e, null
  }

  function xm(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Wh()) {
          case _c:
            return 2;
          case Cc:
            return 8;
          case fi:
          case Ph:
            return 32;
          case Oc:
            return 268435456;
          default:
            return 32
        }
        default:
          return 32
    }
  }
  var $s = !1,
    Bl = null,
    kl = null,
    Gl = null,
    Jn = new Map,
    $n = new Map,
    ql = [],
    fp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function bm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bl = null;
        break;
      case "dragenter":
      case "dragleave":
        kl = null;
        break;
      case "mouseover":
      case "mouseout":
        Gl = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(t.pointerId)
    }
  }

  function Wn(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = fa(t), t !== null && vm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e)
  }

  function dp(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Bl = Wn(Bl, e, t, l, a, n), !0;
      case "dragenter":
        return kl = Wn(kl, e, t, l, a, n), !0;
      case "mouseover":
        return Gl = Wn(Gl, e, t, l, a, n), !0;
      case "pointerover":
        var i = n.pointerId;
        return Jn.set(i, Wn(Jn.get(i) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return i = n.pointerId, $n.set(i, Wn($n.get(i) || null, e, t, l, a, n)), !0
    }
    return !1
  }

  function Sm(e) {
    var t = oa(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = v(l), t !== null) {
            e.blockedOn = t, ig(e.priority, function () {
              if (l.tag === 13) {
                var a = jt();
                a = Lu(a);
                var n = ja(l, a);
                n !== null && wt(n, l, a), Qs(l, a)
              }
            });
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return
        }
      }
    }
    e.blockedOn = null
  }

  function bu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var l = Ks(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        Pu = a, l.target.dispatchEvent(a), Pu = null
      } else return t = fa(l), t !== null && vm(t), e.blockedOn = l, !1;
      t.shift()
    }
    return !0
  }

  function Nm(e, t, l) {
    bu(e) && l.delete(t)
  }

  function mp() {
    $s = !1, Bl !== null && bu(Bl) && (Bl = null), kl !== null && bu(kl) && (kl = null), Gl !== null && bu(Gl) && (Gl = null), Jn.forEach(Nm), $n.forEach(Nm)
  }

  function Su(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $s || ($s = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, mp)))
  }
  var Nu = null;

  function jm(e) {
    Nu !== e && (Nu = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
      Nu === e && (Nu = null);
      for (var t = 0; t < e.length; t += 3) {
        var l = e[t],
          a = e[t + 1],
          n = e[t + 2];
        if (typeof a != "function") {
          if (Js(a || l) === null) continue;
          break
        }
        var i = fa(l);
        i !== null && (e.splice(t, 3), t -= 3, Jr(i, {
          pending: !0,
          data: n,
          method: l.method,
          action: a
        }, a, n))
      }
    }))
  }

  function Pn(e) {
    function t(y) {
      return Su(y, e)
    }
    Bl !== null && Su(Bl, e), kl !== null && Su(kl, e), Gl !== null && Su(Gl, e), Jn.forEach(t), $n.forEach(t);
    for (var l = 0; l < ql.length; l++) {
      var a = ql[l];
      a.blockedOn === e && (a.blockedOn = null)
    }
    for (; 0 < ql.length && (l = ql[0], l.blockedOn === null);) Sm(l), l.blockedOn === null && ql.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          f = n[ot] || null;
        if (typeof i == "function") f || jm(l);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, f = i[ot] || null) m = f.formAction;
            else if (Js(n) !== null) continue
          } else m = f.action;
          typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), jm(l)
        }
      }
  }

  function Ws(e) {
    this._internalRoot = e
  }
  ju.prototype.render = Ws.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var l = t.current,
      a = jt();
    pm(l, a, e, t, null, null)
  }, ju.prototype.unmount = Ws.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      pm(e.current, 2, null, e, null, null), nu(), t[ca] = null
    }
  };

  function ju(e) {
    this._internalRoot = e
  }
  ju.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = kc();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var l = 0; l < ql.length && t !== 0 && t < ql[l].priority; l++);
      ql.splice(l, 0, e), l === 0 && Sm(e)
    }
  };
  var wm = s.version;
  if (wm !== "19.1.0") throw Error(c(527, wm, "19.1.0"));
  V.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = p(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e
  };
  var hp = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wu.isDisabled && wu.supportsFiber) try {
      en = wu.inject(hp), pt = wu
    } catch {}
  }
  return In.createRoot = function (e, t) {
    if (!d(e)) throw Error(c(299));
    var l = !1,
      a = "",
      n = qf,
      i = Lf,
      f = Yf,
      m = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = hm(e, 1, !1, null, null, l, a, n, i, f, m, null), e[ca] = t.current, Cs(e), new Ws(t)
  }, In.hydrateRoot = function (e, t, l) {
    if (!d(e)) throw Error(c(299));
    var a = !1,
      n = "",
      i = qf,
      f = Lf,
      m = Yf,
      y = null,
      A = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (y = l.unstable_transitionCallbacks), l.formState !== void 0 && (A = l.formState)), t = hm(e, 1, !0, t, l ? ? null, a, n, i, f, m, y, A), t.context = gm(null), l = t.current, a = jt(), a = Lu(a), n = jl(a), n.callback = null, wl(l, n, a), l = a, t.current.lanes = l, ln(t, l), Vt(t), e[ca] = t.current, Cs(e), new ju(t)
  }, In.version = "19.1.0", In
}
var Um;

function Tp() {
  if (Um) return Is.exports;
  Um = 1;

  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)
    } catch (s) {
      console.error(s)
    }
  }
  return u(), Is.exports = Ap(), Is.exports
}
var Rp = Tp(),
  ei = {},
  Dm;

function zp() {
  if (Dm) return ei;
  Dm = 1, Object.defineProperty(ei, "__esModule", {
    value: !0
  }), ei.parse = v, ei.serialize = g;
  const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    h = (() => {
      const T = function () {};
      return T.prototype = Object.create(null), T
    })();

  function v(T, C) {
    const M = new h,
      k = T.length;
    if (k < 2) return M;
    const Y = (C == null ? void 0 : C.decode) || j;
    let G = 0;
    do {
      const X = T.indexOf("=", G);
      if (X === -1) break;
      const F = T.indexOf(";", G),
        ne = F === -1 ? k : F;
      if (X > ne) {
        G = T.lastIndexOf(";", X - 1) + 1;
        continue
      }
      const P = b(T, G, X),
        ve = p(T, X, P),
        Ne = T.slice(P, ve);
      if (M[Ne] === void 0) {
        let Z = b(T, X + 1, ne),
          me = p(T, ne, Z);
        const ie = Y(T.slice(Z, me));
        M[Ne] = ie
      }
      G = ne + 1
    } while (G < k);
    return M
  }

  function b(T, C, M) {
    do {
      const k = T.charCodeAt(C);
      if (k !== 32 && k !== 9) return C
    } while (++C < M);
    return M
  }

  function p(T, C, M) {
    for (; C > M;) {
      const k = T.charCodeAt(--C);
      if (k !== 32 && k !== 9) return C + 1
    }
    return M
  }

  function g(T, C, M) {
    const k = (M == null ? void 0 : M.encode) || encodeURIComponent;
    if (!u.test(T)) throw new TypeError(`argument name is invalid: ${T}`);
    const Y = k(C);
    if (!s.test(Y)) throw new TypeError(`argument val is invalid: ${C}`);
    let G = T + "=" + Y;
    if (!M) return G;
    if (M.maxAge !== void 0) {
      if (!Number.isInteger(M.maxAge)) throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
      G += "; Max-Age=" + M.maxAge
    }
    if (M.domain) {
      if (!o.test(M.domain)) throw new TypeError(`option domain is invalid: ${M.domain}`);
      G += "; Domain=" + M.domain
    }
    if (M.path) {
      if (!c.test(M.path)) throw new TypeError(`option path is invalid: ${M.path}`);
      G += "; Path=" + M.path
    }
    if (M.expires) {
      if (!O(M.expires) || !Number.isFinite(M.expires.valueOf())) throw new TypeError(`option expires is invalid: ${M.expires}`);
      G += "; Expires=" + M.expires.toUTCString()
    }
    if (M.httpOnly && (G += "; HttpOnly"), M.secure && (G += "; Secure"), M.partitioned && (G += "; Partitioned"), M.priority) switch (typeof M.priority == "string" ? M.priority.toLowerCase() : void 0) {
      case "low":
        G += "; Priority=Low";
        break;
      case "medium":
        G += "; Priority=Medium";
        break;
      case "high":
        G += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${M.priority}`)
    }
    if (M.sameSite) switch (typeof M.sameSite == "string" ? M.sameSite.toLowerCase() : M.sameSite) {
      case !0:
      case "strict":
        G += "; SameSite=Strict";
        break;
      case "lax":
        G += "; SameSite=Lax";
        break;
      case "none":
        G += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)
    }
    return G
  }

  function j(T) {
    if (T.indexOf("%") === -1) return T;
    try {
      return decodeURIComponent(T)
    } catch {
      return T
    }
  }

  function O(T) {
    return d.call(T) === "[object Date]"
  }
  return ei
}
zp();
var Hm = "popstate";

function Mp(u = {}) {
  function s(c, d) {
    let {
      pathname: h,
      search: v,
      hash: b
    } = c.location;
    return oc("", {
      pathname: h,
      search: v,
      hash: b
    }, d.state && d.state.usr || null, d.state && d.state.key || "default")
  }

  function o(c, d) {
    return typeof d == "string" ? d : ai(d)
  }
  return Cp(s, o, null, u)
}

function Be(u, s) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(s)
}

function Kt(u, s) {
  if (!u) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s)
    } catch {}
  }
}

function _p() {
  return Math.random().toString(36).substring(2, 10)
}

function Bm(u, s) {
  return {
    usr: u.state,
    key: u.key,
    idx: s
  }
}

function oc(u, s, o = null, c) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof s == "string" ? Wa(s) : s,
    state: o,
    key: s && s.key || c || _p()
  }
}

function ai({
  pathname: u = "/",
  search: s = "",
  hash: o = ""
}) {
  return s && s !== "?" && (u += s.charAt(0) === "?" ? s : "?" + s), o && o !== "#" && (u += o.charAt(0) === "#" ? o : "#" + o), u
}

function Wa(u) {
  let s = {};
  if (u) {
    let o = u.indexOf("#");
    o >= 0 && (s.hash = u.substring(o), u = u.substring(0, o));
    let c = u.indexOf("?");
    c >= 0 && (s.search = u.substring(c), u = u.substring(0, c)), u && (s.pathname = u)
  }
  return s
}

function Cp(u, s, o, c = {}) {
  let {
    window: d = document.defaultView,
    v5Compat: h = !1
  } = c, v = d.history, b = "POP", p = null, g = j();
  g == null && (g = 0, v.replaceState({
    ...v.state,
    idx: g
  }, ""));

  function j() {
    return (v.state || {
      idx: null
    }).idx
  }

  function O() {
    b = "POP";
    let Y = j(),
      G = Y == null ? null : Y - g;
    g = Y, p && p({
      action: b,
      location: k.location,
      delta: G
    })
  }

  function T(Y, G) {
    b = "PUSH";
    let X = oc(k.location, Y, G);
    g = j() + 1;
    let F = Bm(X, g),
      ne = k.createHref(X);
    try {
      v.pushState(F, "", ne)
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      d.location.assign(ne)
    }
    h && p && p({
      action: b,
      location: k.location,
      delta: 1
    })
  }

  function C(Y, G) {
    b = "REPLACE";
    let X = oc(k.location, Y, G);
    g = j();
    let F = Bm(X, g),
      ne = k.createHref(X);
    v.replaceState(F, "", ne), h && p && p({
      action: b,
      location: k.location,
      delta: 0
    })
  }

  function M(Y) {
    return Op(Y)
  }
  let k = {
    get action() {
      return b
    },
    get location() {
      return u(d, v)
    },
    listen(Y) {
      if (p) throw new Error("A history only accepts one active listener");
      return d.addEventListener(Hm, O), p = Y, () => {
        d.removeEventListener(Hm, O), p = null
      }
    },
    createHref(Y) {
      return s(d, Y)
    },
    createURL: M,
    encodeLocation(Y) {
      let G = M(Y);
      return {
        pathname: G.pathname,
        search: G.search,
        hash: G.hash
      }
    },
    push: T,
    replace: C,
    go(Y) {
      return v.go(Y)
    }
  };
  return k
}

function Op(u, s = !1) {
  let o = "http://localhost";
  typeof window < "u" && (o = window.location.origin !== "null" ? window.location.origin : window.location.href), Be(o, "No window.location.(origin|href) available to create URL");
  let c = typeof u == "string" ? u : ai(u);
  return c = c.replace(/ $/, "%20"), !s && c.startsWith("//") && (c = o + c), new URL(c, o)
}

function eh(u, s, o = "/") {
  return Up(u, s, o, !1)
}

function Up(u, s, o, c) {
  let d = typeof s == "string" ? Wa(s) : s,
    h = ml(d.pathname || "/", o);
  if (h == null) return null;
  let v = th(u);
  Dp(v);
  let b = null;
  for (let p = 0; b == null && p < v.length; ++p) {
    let g = Zp(h);
    b = Xp(v[p], g, c)
  }
  return b
}

function th(u, s = [], o = [], c = "") {
  let d = (h, v, b) => {
    let p = {
      relativePath: b === void 0 ? h.path || "" : b,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: v,
      route: h
    };
    p.relativePath.startsWith("/") && (Be(p.relativePath.startsWith(c), `Absolute route path "${p.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(c.length));
    let g = dl([c, p.relativePath]),
      j = o.concat(p);
    h.children && h.children.length > 0 && (Be(h.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`), th(h.children, s, j, g)), !(h.path == null && !h.index) && s.push({
      path: g,
      score: Yp(g, h.index),
      routesMeta: j
    })
  };
  return u.forEach((h, v) => {
    var b;
    if (h.path === "" || !((b = h.path) != null && b.includes("?"))) d(h, v);
    else
      for (let p of lh(h.path)) d(h, v, p)
  }), s
}

function lh(u) {
  let s = u.split("/");
  if (s.length === 0) return [];
  let [o, ...c] = s, d = o.endsWith("?"), h = o.replace(/\?$/, "");
  if (c.length === 0) return d ? [h, ""] : [h];
  let v = lh(c.join("/")),
    b = [];
  return b.push(...v.map(p => p === "" ? h : [h, p].join("/"))), d && b.push(...v), b.map(p => u.startsWith("/") && p === "" ? "/" : p)
}

function Dp(u) {
  u.sort((s, o) => s.score !== o.score ? o.score - s.score : Vp(s.routesMeta.map(c => c.childrenIndex), o.routesMeta.map(c => c.childrenIndex)))
}
var Hp = /^:[\w-]+$/,
  Bp = 3,
  kp = 2,
  Gp = 1,
  qp = 10,
  Lp = -2,
  km = u => u === "*";

function Yp(u, s) {
  let o = u.split("/"),
    c = o.length;
  return o.some(km) && (c += Lp), s && (c += kp), o.filter(d => !km(d)).reduce((d, h) => d + (Hp.test(h) ? Bp : h === "" ? Gp : qp), c)
}

function Vp(u, s) {
  return u.length === s.length && u.slice(0, -1).every((c, d) => c === s[d]) ? u[u.length - 1] - s[s.length - 1] : 0
}

function Xp(u, s, o = !1) {
  let {
    routesMeta: c
  } = u, d = {}, h = "/", v = [];
  for (let b = 0; b < c.length; ++b) {
    let p = c[b],
      g = b === c.length - 1,
      j = h === "/" ? s : s.slice(h.length) || "/",
      O = Mu({
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: g
      }, j),
      T = p.route;
    if (!O && g && o && !c[c.length - 1].route.index && (O = Mu({
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      }, j)), !O) return null;
    Object.assign(d, O.params), v.push({
      params: d,
      pathname: dl([h, O.pathname]),
      pathnameBase: Wp(dl([h, O.pathnameBase])),
      route: T
    }), O.pathnameBase !== "/" && (h = dl([h, O.pathnameBase]))
  }
  return v
}

function Mu(u, s) {
  typeof u == "string" && (u = {
    path: u,
    caseSensitive: !1,
    end: !0
  });
  let [o, c] = Qp(u.path, u.caseSensitive, u.end), d = s.match(o);
  if (!d) return null;
  let h = d[0],
    v = h.replace(/(.)\/+$/, "$1"),
    b = d.slice(1);
  return {
    params: c.reduce((g, {
      paramName: j,
      isOptional: O
    }, T) => {
      if (j === "*") {
        let M = b[T] || "";
        v = h.slice(0, h.length - M.length).replace(/(.)\/+$/, "$1")
      }
      const C = b[T];
      return O && !C ? g[j] = void 0 : g[j] = (C || "").replace(/%2F/g, "/"), g
    }, {}),
    pathname: h,
    pathnameBase: v,
    pattern: u
  }
}

function Qp(u, s = !1, o = !0) {
  Kt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);
  let c = [],
    d = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (v, b, p) => (c.push({
      paramName: b,
      isOptional: p != null
    }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return u.endsWith("*") ? (c.push({
    paramName: "*"
  }), d += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? d += "\\/*$" : u !== "" && u !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, s ? void 0 : "i"), c]
}

function Zp(u) {
  try {
    return u.split("/").map(s => decodeURIComponent(s).replace(/\//g, "%2F")).join("/")
  } catch (s) {
    return Kt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`), u
  }
}

function ml(u, s) {
  if (s === "/") return u;
  if (!u.toLowerCase().startsWith(s.toLowerCase())) return null;
  let o = s.endsWith("/") ? s.length - 1 : s.length,
    c = u.charAt(o);
  return c && c !== "/" ? null : u.slice(o) || "/"
}

function Kp(u, s = "/") {
  let {
    pathname: o,
    search: c = "",
    hash: d = ""
  } = typeof u == "string" ? Wa(u) : u;
  return {
    pathname: o ? o.startsWith("/") ? o : Jp(o, s) : s,
    search: Pp(c),
    hash: Fp(d)
  }
}

function Jp(u, s) {
  let o = s.replace(/\/+$/, "").split("/");
  return u.split("/").forEach(d => {
    d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d)
  }), o.length > 1 ? o.join("/") : "/"
}

function ac(u, s, o, c) {
  return `Cannot include a '${u}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function $p(u) {
  return u.filter((s, o) => o === 0 || s.route.path && s.route.path.length > 0)
}

function ah(u) {
  let s = $p(u);
  return s.map((o, c) => c === s.length - 1 ? o.pathname : o.pathnameBase)
}

function nh(u, s, o, c = !1) {
  let d;
  typeof u == "string" ? d = Wa(u) : (d = {
    ...u
  }, Be(!d.pathname || !d.pathname.includes("?"), ac("?", "pathname", "search", d)), Be(!d.pathname || !d.pathname.includes("#"), ac("#", "pathname", "hash", d)), Be(!d.search || !d.search.includes("#"), ac("#", "search", "hash", d)));
  let h = u === "" || d.pathname === "",
    v = h ? "/" : d.pathname,
    b;
  if (v == null) b = o;
  else {
    let O = s.length - 1;
    if (!c && v.startsWith("..")) {
      let T = v.split("/");
      for (; T[0] === "..";) T.shift(), O -= 1;
      d.pathname = T.join("/")
    }
    b = O >= 0 ? s[O] : "/"
  }
  let p = Kp(d, b),
    g = v && v !== "/" && v.endsWith("/"),
    j = (h || v === ".") && o.endsWith("/");
  return !p.pathname.endsWith("/") && (g || j) && (p.pathname += "/"), p
}
var dl = u => u.join("/").replace(/\/\/+/g, "/"),
  Wp = u => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Pp = u => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u,
  Fp = u => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;

function Ip(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u
}
var ih = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ih);
var ey = ["GET", ...ih];
new Set(ey);
var Pa = w.createContext(null);
Pa.displayName = "DataRouter";
var Ou = w.createContext(null);
Ou.displayName = "DataRouterState";
var uh = w.createContext({
  isTransitioning: !1
});
uh.displayName = "ViewTransition";
var ty = w.createContext(new Map);
ty.displayName = "Fetchers";
var ly = w.createContext(null);
ly.displayName = "Await";
var Jt = w.createContext(null);
Jt.displayName = "Navigation";
var ri = w.createContext(null);
ri.displayName = "Location";
var hl = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
hl.displayName = "Route";
var vc = w.createContext(null);
vc.displayName = "RouteError";

function ay(u, {
  relative: s
} = {}) {
  Be(si(), "useHref() may be used only in the context of a <Router> component.");
  let {
    basename: o,
    navigator: c
  } = w.useContext(Jt), {
    hash: d,
    pathname: h,
    search: v
  } = ci(u, {
    relative: s
  }), b = h;
  return o !== "/" && (b = h === "/" ? o : dl([o, h])), c.createHref({
    pathname: b,
    search: v,
    hash: d
  })
}

function si() {
  return w.useContext(ri) != null
}

function sa() {
  return Be(si(), "useLocation() may be used only in the context of a <Router> component."), w.useContext(ri).location
}
var rh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function sh(u) {
  w.useContext(Jt).static || w.useLayoutEffect(u)
}

function ny() {
  let {
    isDataRoute: u
  } = w.useContext(hl);
  return u ? yy() : iy()
}

function iy() {
  Be(si(), "useNavigate() may be used only in the context of a <Router> component.");
  let u = w.useContext(Pa),
    {
      basename: s,
      navigator: o
    } = w.useContext(Jt),
    {
      matches: c
    } = w.useContext(hl),
    {
      pathname: d
    } = sa(),
    h = JSON.stringify(ah(c)),
    v = w.useRef(!1);
  return sh(() => {
    v.current = !0
  }), w.useCallback((p, g = {}) => {
    if (Kt(v.current, rh), !v.current) return;
    if (typeof p == "number") {
      o.go(p);
      return
    }
    let j = nh(p, JSON.parse(h), d, g.relative === "path");
    u == null && s !== "/" && (j.pathname = j.pathname === "/" ? s : dl([s, j.pathname])), (g.replace ? o.replace : o.push)(j, g.state, g)
  }, [s, o, h, d, u])
}
w.createContext(null);

function ci(u, {
  relative: s
} = {}) {
  let {
    matches: o
  } = w.useContext(hl), {
    pathname: c
  } = sa(), d = JSON.stringify(ah(o));
  return w.useMemo(() => nh(u, JSON.parse(d), c, s === "path"), [u, d, c, s])
}

function uy(u, s) {
  return ch(u, s)
}

function ch(u, s, o, c) {
  var G;
  Be(si(), "useRoutes() may be used only in the context of a <Router> component.");
  let {
    navigator: d
  } = w.useContext(Jt), {
    matches: h
  } = w.useContext(hl), v = h[h.length - 1], b = v ? v.params : {}, p = v ? v.pathname : "/", g = v ? v.pathnameBase : "/", j = v && v.route; {
    let X = j && j.path || "";
    oh(p, !j || X.endsWith("*") || X.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)
  }
  let O = sa(),
    T;
  if (s) {
    let X = typeof s == "string" ? Wa(s) : s;
    Be(g === "/" || ((G = X.pathname) == null ? void 0 : G.startsWith(g)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`), T = X
  } else T = O;
  let C = T.pathname || "/",
    M = C;
  if (g !== "/") {
    let X = g.replace(/^\//, "").split("/");
    M = "/" + C.replace(/^\//, "").split("/").slice(X.length).join("/")
  }
  let k = eh(u, {
    pathname: M
  });
  Kt(j || k != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), Kt(k == null || k[k.length - 1].route.element !== void 0 || k[k.length - 1].route.Component !== void 0 || k[k.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let Y = fy(k && k.map(X => Object.assign({}, X, {
    params: Object.assign({}, b, X.params),
    pathname: dl([g, d.encodeLocation ? d.encodeLocation(X.pathname).pathname : X.pathname]),
    pathnameBase: X.pathnameBase === "/" ? g : dl([g, d.encodeLocation ? d.encodeLocation(X.pathnameBase).pathname : X.pathnameBase])
  })), h, o, c);
  return s && Y ? w.createElement(ri.Provider, {
    value: {
      location: {
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default",
        ...T
      },
      navigationType: "POP"
    }
  }, Y) : Y
}

function ry() {
  let u = py(),
    s = Ip(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u),
    o = u instanceof Error ? u.stack : null,
    c = "rgba(200,200,200, 0.5)",
    d = {
      padding: "0.5rem",
      backgroundColor: c
    },
    h = {
      padding: "2px 4px",
      backgroundColor: c
    },
    v = null;
  return console.error("Error handled by React Router default ErrorBoundary:", u), v = w.createElement(w.Fragment, null, w.createElement("p", null, "💿 Hey developer 👋"), w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", w.createElement("code", {
    style: h
  }, "ErrorBoundary"), " or", " ", w.createElement("code", {
    style: h
  }, "errorElement"), " prop on your route.")), w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, s), o ? w.createElement("pre", {
    style: d
  }, o) : null, v)
}
var sy = w.createElement(ry, null),
  cy = class extends w.Component {
    constructor(u) {
      super(u), this.state = {
        location: u.location,
        revalidation: u.revalidation,
        error: u.error
      }
    }
    static getDerivedStateFromError(u) {
      return {
        error: u
      }
    }
    static getDerivedStateFromProps(u, s) {
      return s.location !== u.location || s.revalidation !== "idle" && u.revalidation === "idle" ? {
        error: u.error,
        location: u.location,
        revalidation: u.revalidation
      } : {
        error: u.error !== void 0 ? u.error : s.error,
        location: s.location,
        revalidation: u.revalidation || s.revalidation
      }
    }
    componentDidCatch(u, s) {
      console.error("React Router caught the following error during render", u, s)
    }
    render() {
      return this.state.error !== void 0 ? w.createElement(hl.Provider, {
        value: this.props.routeContext
      }, w.createElement(vc.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children
    }
  };

function oy({
  routeContext: u,
  match: s,
  children: o
}) {
  let c = w.useContext(Pa);
  return c && c.static && c.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = s.route.id), w.createElement(hl.Provider, {
    value: u
  }, o)
}

function fy(u, s = [], o = null, c = null) {
  if (u == null) {
    if (!o) return null;
    if (o.errors) u = o.matches;
    else if (s.length === 0 && !o.initialized && o.matches.length > 0) u = o.matches;
    else return null
  }
  let d = u,
    h = o == null ? void 0 : o.errors;
  if (h != null) {
    let p = d.findIndex(g => g.route.id && (h == null ? void 0 : h[g.route.id]) !== void 0);
    Be(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), d = d.slice(0, Math.min(d.length, p + 1))
  }
  let v = !1,
    b = -1;
  if (o)
    for (let p = 0; p < d.length; p++) {
      let g = d[p];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (b = p), g.route.id) {
        let {
          loaderData: j,
          errors: O
        } = o, T = g.route.loader && !j.hasOwnProperty(g.route.id) && (!O || O[g.route.id] === void 0);
        if (g.route.lazy || T) {
          v = !0, b >= 0 ? d = d.slice(0, b + 1) : d = [d[0]];
          break
        }
      }
    }
  return d.reduceRight((p, g, j) => {
    let O, T = !1,
      C = null,
      M = null;
    o && (O = h && g.route.id ? h[g.route.id] : void 0, C = g.route.errorElement || sy, v && (b < 0 && j === 0 ? (oh("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), T = !0, M = null) : b === j && (T = !0, M = g.route.hydrateFallbackElement || null)));
    let k = s.concat(d.slice(0, j + 1)),
      Y = () => {
        let G;
        return O ? G = C : T ? G = M : g.route.Component ? G = w.createElement(g.route.Component, null) : g.route.element ? G = g.route.element : G = p, w.createElement(oy, {
          match: g,
          routeContext: {
            outlet: p,
            matches: k,
            isDataRoute: o != null
          },
          children: G
        })
      };
    return o && (g.route.ErrorBoundary || g.route.errorElement || j === 0) ? w.createElement(cy, {
      location: o.location,
      revalidation: o.revalidation,
      component: C,
      error: O,
      children: Y(),
      routeContext: {
        outlet: null,
        matches: k,
        isDataRoute: !0
      }
    }) : Y()
  }, null)
}

function xc(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function dy(u) {
  let s = w.useContext(Pa);
  return Be(s, xc(u)), s
}

function my(u) {
  let s = w.useContext(Ou);
  return Be(s, xc(u)), s
}

function hy(u) {
  let s = w.useContext(hl);
  return Be(s, xc(u)), s
}

function bc(u) {
  let s = hy(u),
    o = s.matches[s.matches.length - 1];
  return Be(o.route.id, `${u} can only be used on routes that contain a unique "id"`), o.route.id
}

function gy() {
  return bc("useRouteId")
}

function py() {
  var c;
  let u = w.useContext(vc),
    s = my("useRouteError"),
    o = bc("useRouteError");
  return u !== void 0 ? u : (c = s.errors) == null ? void 0 : c[o]
}

function yy() {
  let {
    router: u
  } = dy("useNavigate"), s = bc("useNavigate"), o = w.useRef(!1);
  return sh(() => {
    o.current = !0
  }), w.useCallback(async (d, h = {}) => {
    Kt(o.current, rh), o.current && (typeof d == "number" ? u.navigate(d) : await u.navigate(d, {
      fromRouteId: s,
      ...h
    }))
  }, [u, s])
}
var Gm = {};

function oh(u, s, o) {
  !s && !Gm[u] && (Gm[u] = !0, Kt(!1, o))
}
w.memo(vy);

function vy({
  routes: u,
  future: s,
  state: o
}) {
  return ch(u, void 0, o, s)
}

function fl(u) {
  Be(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function xy({
  basename: u = "/",
  children: s = null,
  location: o,
  navigationType: c = "POP",
  navigator: d,
  static: h = !1
}) {
  Be(!si(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let v = u.replace(/^\/*/, "/"),
    b = w.useMemo(() => ({
      basename: v,
      navigator: d,
      static: h,
      future: {}
    }), [v, d, h]);
  typeof o == "string" && (o = Wa(o));
  let {
    pathname: p = "/",
    search: g = "",
    hash: j = "",
    state: O = null,
    key: T = "default"
  } = o, C = w.useMemo(() => {
    let M = ml(p, v);
    return M == null ? null : {
      location: {
        pathname: M,
        search: g,
        hash: j,
        state: O,
        key: T
      },
      navigationType: c
    }
  }, [v, p, g, j, O, T, c]);
  return Kt(C != null, `<Router basename="${v}"> is not able to match the URL "${p}${g}${j}" because it does not start with the basename, so the <Router> won't render anything.`), C == null ? null : w.createElement(Jt.Provider, {
    value: b
  }, w.createElement(ri.Provider, {
    children: s,
    value: C
  }))
}

function by({
  children: u,
  location: s
}) {
  return uy(fc(u), s)
}

function fc(u, s = []) {
  let o = [];
  return w.Children.forEach(u, (c, d) => {
    if (!w.isValidElement(c)) return;
    let h = [...s, d];
    if (c.type === w.Fragment) {
      o.push.apply(o, fc(c.props.children, h));
      return
    }
    Be(c.type === fl, `[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Be(!c.props.index || !c.props.children, "An index route cannot have child routes.");
    let v = {
      id: c.props.id || h.join("-"),
      caseSensitive: c.props.caseSensitive,
      element: c.props.element,
      Component: c.props.Component,
      index: c.props.index,
      path: c.props.path,
      loader: c.props.loader,
      action: c.props.action,
      hydrateFallbackElement: c.props.hydrateFallbackElement,
      HydrateFallback: c.props.HydrateFallback,
      errorElement: c.props.errorElement,
      ErrorBoundary: c.props.ErrorBoundary,
      hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
      shouldRevalidate: c.props.shouldRevalidate,
      handle: c.props.handle,
      lazy: c.props.lazy
    };
    c.props.children && (v.children = fc(c.props.children, h)), o.push(v)
  }), o
}
var Ru = "get",
  zu = "application/x-www-form-urlencoded";

function Uu(u) {
  return u != null && typeof u.tagName == "string"
}

function Sy(u) {
  return Uu(u) && u.tagName.toLowerCase() === "button"
}

function Ny(u) {
  return Uu(u) && u.tagName.toLowerCase() === "form"
}

function jy(u) {
  return Uu(u) && u.tagName.toLowerCase() === "input"
}

function wy(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey)
}

function Ey(u, s) {
  return u.button === 0 && (!s || s === "_self") && !wy(u)
}
var Eu = null;

function Ay() {
  if (Eu === null) try {
    new FormData(document.createElement("form"), 0), Eu = !1
  } catch {
    Eu = !0
  }
  return Eu
}
var Ty = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function nc(u) {
  return u != null && !Ty.has(u) ? (Kt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zu}"`), null) : u
}

function Ry(u, s) {
  let o, c, d, h, v;
  if (Ny(u)) {
    let b = u.getAttribute("action");
    c = b ? ml(b, s) : null, o = u.getAttribute("method") || Ru, d = nc(u.getAttribute("enctype")) || zu, h = new FormData(u)
  } else if (Sy(u) || jy(u) && (u.type === "submit" || u.type === "image")) {
    let b = u.form;
    if (b == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p = u.getAttribute("formaction") || b.getAttribute("action");
    if (c = p ? ml(p, s) : null, o = u.getAttribute("formmethod") || b.getAttribute("method") || Ru, d = nc(u.getAttribute("formenctype")) || nc(b.getAttribute("enctype")) || zu, h = new FormData(b, u), !Ay()) {
      let {
        name: g,
        type: j,
        value: O
      } = u;
      if (j === "image") {
        let T = g ? `${g}.` : "";
        h.append(`${T}x`, "0"), h.append(`${T}y`, "0")
      } else g && h.append(g, O)
    }
  } else {
    if (Uu(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    o = Ru, c = null, d = zu, v = u
  }
  return h && d === "text/plain" && (v = h, h = void 0), {
    action: c,
    method: o.toLowerCase(),
    encType: d,
    formData: h,
    body: v
  }
}

function Sc(u, s) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(s)
}
async function zy(u, s) {
  if (u.id in s) return s[u.id];
  try {
    let o = await import(u.module);
    return s[u.id] = o, o
  } catch (o) {
    return console.error(`Error loading route module \`${u.module}\`, reloading page...`), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
  }
}

function My(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string"
}
async function _y(u, s, o) {
  let c = await Promise.all(u.map(async d => {
    let h = s.routes[d.route.id];
    if (h) {
      let v = await zy(h, o);
      return v.links ? v.links() : []
    }
    return []
  }));
  return Dy(c.flat(1).filter(My).filter(d => d.rel === "stylesheet" || d.rel === "preload").map(d => d.rel === "stylesheet" ? {
    ...d,
    rel: "prefetch",
    as: "style"
  } : {
    ...d,
    rel: "prefetch"
  }))
}

function qm(u, s, o, c, d, h) {
  let v = (p, g) => o[g] ? p.route.id !== o[g].route.id : !0,
    b = (p, g) => {
      var j;
      return o[g].pathname !== p.pathname || ((j = o[g].route.path) == null ? void 0 : j.endsWith("*")) && o[g].params["*"] !== p.params["*"]
    };
  return h === "assets" ? s.filter((p, g) => v(p, g) || b(p, g)) : h === "data" ? s.filter((p, g) => {
    var O;
    let j = c.routes[p.route.id];
    if (!j || !j.hasLoader) return !1;
    if (v(p, g) || b(p, g)) return !0;
    if (p.route.shouldRevalidate) {
      let T = p.route.shouldRevalidate({
        currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
        currentParams: ((O = o[0]) == null ? void 0 : O.params) || {},
        nextUrl: new URL(u, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean") return T
    }
    return !0
  }) : []
}

function Cy(u, s, {
  includeHydrateFallback: o
} = {}) {
  return Oy(u.map(c => {
    let d = s.routes[c.route.id];
    if (!d) return [];
    let h = [d.module];
    return d.clientActionModule && (h = h.concat(d.clientActionModule)), d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)), o && d.hydrateFallbackModule && (h = h.concat(d.hydrateFallbackModule)), d.imports && (h = h.concat(d.imports)), h
  }).flat(1))
}

function Oy(u) {
  return [...new Set(u)]
}

function Uy(u) {
  let s = {},
    o = Object.keys(u).sort();
  for (let c of o) s[c] = u[c];
  return s
}

function Dy(u, s) {
  let o = new Set;
  return new Set(s), u.reduce((c, d) => {
    let h = JSON.stringify(Uy(d));
    return o.has(h) || (o.add(h), c.push({
      key: h,
      link: d
    })), c
  }, [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Hy = new Set([100, 101, 204, 205]);

function By(u, s) {
  let o = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
  return o.pathname === "/" ? o.pathname = "_root.data" : s && ml(o.pathname, s) === "/" ? o.pathname = `${s.replace(/\/$/,"")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/,"")}.data`, o
}

function fh() {
  let u = w.useContext(Pa);
  return Sc(u, "You must render this element inside a <DataRouterContext.Provider> element"), u
}

function ky() {
  let u = w.useContext(Ou);
  return Sc(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u
}
var Nc = w.createContext(void 0);
Nc.displayName = "FrameworkContext";

function dh() {
  let u = w.useContext(Nc);
  return Sc(u, "You must render this element inside a <HydratedRouter> element"), u
}

function Gy(u, s) {
  let o = w.useContext(Nc),
    [c, d] = w.useState(!1),
    [h, v] = w.useState(!1),
    {
      onFocus: b,
      onBlur: p,
      onMouseEnter: g,
      onMouseLeave: j,
      onTouchStart: O
    } = s,
    T = w.useRef(null);
  w.useEffect(() => {
    if (u === "render" && v(!0), u === "viewport") {
      let k = G => {
          G.forEach(X => {
            v(X.isIntersecting)
          })
        },
        Y = new IntersectionObserver(k, {
          threshold: .5
        });
      return T.current && Y.observe(T.current), () => {
        Y.disconnect()
      }
    }
  }, [u]), w.useEffect(() => {
    if (c) {
      let k = setTimeout(() => {
        v(!0)
      }, 100);
      return () => {
        clearTimeout(k)
      }
    }
  }, [c]);
  let C = () => {
      d(!0)
    },
    M = () => {
      d(!1), v(!1)
    };
  return o ? u !== "intent" ? [h, T, {}] : [h, T, {
    onFocus: ti(b, C),
    onBlur: ti(p, M),
    onMouseEnter: ti(g, C),
    onMouseLeave: ti(j, M),
    onTouchStart: ti(O, C)
  }] : [!1, T, {}]
}

function ti(u, s) {
  return o => {
    u && u(o), o.defaultPrevented || s(o)
  }
}

function qy({
  page: u,
  ...s
}) {
  let {
    router: o
  } = fh(), c = w.useMemo(() => eh(o.routes, u, o.basename), [o.routes, u, o.basename]);
  return c ? w.createElement(Yy, {
    page: u,
    matches: c,
    ...s
  }) : null
}

function Ly(u) {
  let {
    manifest: s,
    routeModules: o
  } = dh(), [c, d] = w.useState([]);
  return w.useEffect(() => {
    let h = !1;
    return _y(u, s, o).then(v => {
      h || d(v)
    }), () => {
      h = !0
    }
  }, [u, s, o]), c
}

function Yy({
  page: u,
  matches: s,
  ...o
}) {
  let c = sa(),
    {
      manifest: d,
      routeModules: h
    } = dh(),
    {
      basename: v
    } = fh(),
    {
      loaderData: b,
      matches: p
    } = ky(),
    g = w.useMemo(() => qm(u, s, p, d, c, "data"), [u, s, p, d, c]),
    j = w.useMemo(() => qm(u, s, p, d, c, "assets"), [u, s, p, d, c]),
    O = w.useMemo(() => {
      if (u === c.pathname + c.search + c.hash) return [];
      let M = new Set,
        k = !1;
      if (s.forEach(G => {
          var F;
          let X = d.routes[G.route.id];
          !X || !X.hasLoader || (!g.some(ne => ne.route.id === G.route.id) && G.route.id in b && ((F = h[G.route.id]) != null && F.shouldRevalidate) || X.hasClientLoader ? k = !0 : M.add(G.route.id))
        }), M.size === 0) return [];
      let Y = By(u, v);
      return k && M.size > 0 && Y.searchParams.set("_routes", s.filter(G => M.has(G.route.id)).map(G => G.route.id).join(",")), [Y.pathname + Y.search]
    }, [v, b, c, d, g, s, u, h]),
    T = w.useMemo(() => Cy(j, d), [j, d]),
    C = Ly(j);
  return w.createElement(w.Fragment, null, O.map(M => w.createElement("link", {
    key: M,
    rel: "prefetch",
    as: "fetch",
    href: M,
    ...o
  })), T.map(M => w.createElement("link", {
    key: M,
    rel: "modulepreload",
    href: M,
    ...o
  })), C.map(({
    key: M,
    link: k
  }) => w.createElement("link", {
    key: M,
    ...k
  })))
}

function Vy(...u) {
  return s => {
    u.forEach(o => {
      typeof o == "function" ? o(s) : o != null && (o.current = s)
    })
  }
}
var mh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  mh && (window.__reactRouterVersion = "7.6.1")
} catch {}

function Xy({
  basename: u,
  children: s,
  window: o
}) {
  let c = w.useRef();
  c.current == null && (c.current = Mp({
    window: o,
    v5Compat: !0
  }));
  let d = c.current,
    [h, v] = w.useState({
      action: d.action,
      location: d.location
    }),
    b = w.useCallback(p => {
      w.startTransition(() => v(p))
    }, [v]);
  return w.useLayoutEffect(() => d.listen(b), [d, b]), w.createElement(xy, {
    basename: u,
    children: s,
    location: h.location,
    navigationType: h.action,
    navigator: d
  })
}
var hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ni = w.forwardRef(function ({
    onClick: s,
    discover: o = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: h,
    replace: v,
    state: b,
    target: p,
    to: g,
    preventScrollReset: j,
    viewTransition: O,
    ...T
  }, C) {
    let {
      basename: M
    } = w.useContext(Jt), k = typeof g == "string" && hh.test(g), Y, G = !1;
    if (typeof g == "string" && k && (Y = g, mh)) try {
      let me = new URL(window.location.href),
        ie = g.startsWith("//") ? new URL(me.protocol + g) : new URL(g),
        Ce = ml(ie.pathname, M);
      ie.origin === me.origin && Ce != null ? g = Ce + ie.search + ie.hash : G = !0
    } catch {
      Kt(!1, `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
    }
    let X = ay(g, {
        relative: d
      }),
      [F, ne, P] = Gy(c, T),
      ve = Jy(g, {
        replace: v,
        state: b,
        target: p,
        preventScrollReset: j,
        relative: d,
        viewTransition: O
      });

    function Ne(me) {
      s && s(me), me.defaultPrevented || ve(me)
    }
    let Z = w.createElement("a", {
      ...T,
      ...P,
      href: Y || X,
      onClick: G || h ? s : Ne,
      ref: Vy(C, ne),
      target: p,
      "data-discover": !k && o === "render" ? "true" : void 0
    });
    return F && !k ? w.createElement(w.Fragment, null, Z, w.createElement(qy, {
      page: X
    })) : Z
  });
ni.displayName = "Link";
var Qy = w.forwardRef(function ({
  "aria-current": s = "page",
  caseSensitive: o = !1,
  className: c = "",
  end: d = !1,
  style: h,
  to: v,
  viewTransition: b,
  children: p,
  ...g
}, j) {
  let O = ci(v, {
      relative: g.relative
    }),
    T = sa(),
    C = w.useContext(Ou),
    {
      navigator: M,
      basename: k
    } = w.useContext(Jt),
    Y = C != null && Iy(O) && b === !0,
    G = M.encodeLocation ? M.encodeLocation(O).pathname : O.pathname,
    X = T.pathname,
    F = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
  o || (X = X.toLowerCase(), F = F ? F.toLowerCase() : null, G = G.toLowerCase()), F && k && (F = ml(F, k) || F);
  const ne = G !== "/" && G.endsWith("/") ? G.length - 1 : G.length;
  let P = X === G || !d && X.startsWith(G) && X.charAt(ne) === "/",
    ve = F != null && (F === G || !d && F.startsWith(G) && F.charAt(G.length) === "/"),
    Ne = {
      isActive: P,
      isPending: ve,
      isTransitioning: Y
    },
    Z = P ? s : void 0,
    me;
  typeof c == "function" ? me = c(Ne) : me = [c, P ? "active" : null, ve ? "pending" : null, Y ? "transitioning" : null].filter(Boolean).join(" ");
  let ie = typeof h == "function" ? h(Ne) : h;
  return w.createElement(ni, {
    ...g,
    "aria-current": Z,
    className: me,
    ref: j,
    style: ie,
    to: v,
    viewTransition: b
  }, typeof p == "function" ? p(Ne) : p)
});
Qy.displayName = "NavLink";
var Zy = w.forwardRef(({
  discover: u = "render",
  fetcherKey: s,
  navigate: o,
  reloadDocument: c,
  replace: d,
  state: h,
  method: v = Ru,
  action: b,
  onSubmit: p,
  relative: g,
  preventScrollReset: j,
  viewTransition: O,
  ...T
}, C) => {
  let M = Py(),
    k = Fy(b, {
      relative: g
    }),
    Y = v.toLowerCase() === "get" ? "get" : "post",
    G = typeof b == "string" && hh.test(b),
    X = F => {
      if (p && p(F), F.defaultPrevented) return;
      F.preventDefault();
      let ne = F.nativeEvent.submitter,
        P = (ne == null ? void 0 : ne.getAttribute("formmethod")) || v;
      M(ne || F.currentTarget, {
        fetcherKey: s,
        method: P,
        navigate: o,
        replace: d,
        state: h,
        relative: g,
        preventScrollReset: j,
        viewTransition: O
      })
    };
  return w.createElement("form", {
    ref: C,
    method: Y,
    action: k,
    onSubmit: c ? p : X,
    ...T,
    "data-discover": !G && u === "render" ? "true" : void 0
  })
});
Zy.displayName = "Form";

function Ky(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function gh(u) {
  let s = w.useContext(Pa);
  return Be(s, Ky(u)), s
}

function Jy(u, {
  target: s,
  replace: o,
  state: c,
  preventScrollReset: d,
  relative: h,
  viewTransition: v
} = {}) {
  let b = ny(),
    p = sa(),
    g = ci(u, {
      relative: h
    });
  return w.useCallback(j => {
    if (Ey(j, s)) {
      j.preventDefault();
      let O = o !== void 0 ? o : ai(p) === ai(g);
      b(u, {
        replace: O,
        state: c,
        preventScrollReset: d,
        relative: h,
        viewTransition: v
      })
    }
  }, [p, b, g, o, c, s, u, d, h, v])
}
var $y = 0,
  Wy = () => `__${String(++$y)}__`;

function Py() {
  let {
    router: u
  } = gh("useSubmit"), {
    basename: s
  } = w.useContext(Jt), o = gy();
  return w.useCallback(async (c, d = {}) => {
    let {
      action: h,
      method: v,
      encType: b,
      formData: p,
      body: g
    } = Ry(c, s);
    if (d.navigate === !1) {
      let j = d.fetcherKey || Wy();
      await u.fetch(j, o, d.action || h, {
        preventScrollReset: d.preventScrollReset,
        formData: p,
        body: g,
        formMethod: d.method || v,
        formEncType: d.encType || b,
        flushSync: d.flushSync
      })
    } else await u.navigate(d.action || h, {
      preventScrollReset: d.preventScrollReset,
      formData: p,
      body: g,
      formMethod: d.method || v,
      formEncType: d.encType || b,
      replace: d.replace,
      state: d.state,
      fromRouteId: o,
      flushSync: d.flushSync,
      viewTransition: d.viewTransition
    })
  }, [u, s, o])
}

function Fy(u, {
  relative: s
} = {}) {
  let {
    basename: o
  } = w.useContext(Jt), c = w.useContext(hl);
  Be(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), h = {
    ...ci(u || ".", {
      relative: s
    })
  }, v = sa();
  if (u == null) {
    h.search = v.search;
    let b = new URLSearchParams(h.search),
      p = b.getAll("index");
    if (p.some(j => j === "")) {
      b.delete("index"), p.filter(O => O).forEach(O => b.append("index", O));
      let j = b.toString();
      h.search = j ? `?${j}` : ""
    }
  }
  return (!u || u === ".") && d.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (h.pathname = h.pathname === "/" ? o : dl([o, h.pathname])), ai(h)
}

function Iy(u, s = {}) {
  let o = w.useContext(uh);
  Be(o != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: c
  } = gh("useViewTransitionState"), d = ci(u, {
    relative: s.relative
  });
  if (!o.isTransitioning) return !1;
  let h = ml(o.currentLocation.pathname, c) || o.currentLocation.pathname,
    v = ml(o.nextLocation.pathname, c) || o.nextLocation.pathname;
  return Mu(d.pathname, v) != null || Mu(d.pathname, h) != null
} [...Hy];
Im();
const Qt = {
    free: {
      id: "free",
      name: "Free Forever",
      price: 0,
      interval: "forever",
      stripePriceId: null,
      features: ["Access to Group 1 (s, a, t)", "Basic matching game", "Phonics songs", "Audio pronunciation", "Teacher-led mode", "Zoom screen sharing optimized"],
      limitations: ["Limited to 1 phonics group", "Basic games only", "No progress tracking", "Community support only"],
      maxGroups: 1,
      hasProgressTracking: !1,
      hasAdvancedGames: !1,
      hasPremiumSupport: !1,
      hasLessonPlanning: !1,
      hasAssessmentTools: !1,
      color: "gray",
      popular: !1
    },
    basic: {
      id: "basic",
      name: "Basic Teacher",
      price: 9.99,
      interval: "month",
      stripePriceId: "price_basic_monthly",
      features: ["Access to 10 phonics groups", "All matching and spelling games", "Phonics songs and audio", "Basic progress tracking", "Teacher-led mode", "Email support", "Lesson planning templates"],
      limitations: ["Limited to 10 phonics groups", "Basic progress tracking", "Email support only"],
      maxGroups: 10,
      hasProgressTracking: !0,
      hasAdvancedGames: !0,
      hasPremiumSupport: !1,
      hasLessonPlanning: !0,
      hasAssessmentTools: !1,
      color: "blue",
      popular: !0
    },
    premium: {
      id: "premium",
      name: "Premium Teacher",
      price: 19.99,
      interval: "month",
      stripePriceId: "price_premium_monthly",
      features: ["Access to ALL phonics groups (20+)", "Advanced spelling and matching games", "Comprehensive progress tracking", "Student performance analytics", "Priority support (chat & phone)", "Advanced lesson planning tools", "Assessment and reporting tools", "New content monthly", "Early access to new features"],
      limitations: [],
      maxGroups: -1,
      hasProgressTracking: !0,
      hasAdvancedGames: !0,
      hasPremiumSupport: !0,
      hasLessonPlanning: !0,
      hasAssessmentTools: !0,
      color: "purple",
      popular: !1
    },
    annual: {
      id: "annual",
      name: "Premium Annual",
      price: 199.99,
      interval: "year",
      stripePriceId: "price_premium_annual",
      features: ["Everything in Premium", "2 months free (17% savings)", "Priority support", "Early access to new features", "Bonus assessment tools", "Dedicated account manager"],
      limitations: [],
      maxGroups: -1,
      hasProgressTracking: !0,
      hasAdvancedGames: !0,
      hasPremiumSupport: !0,
      hasLessonPlanning: !0,
      hasAssessmentTools: !0,
      color: "gold",
      popular: !1,
      savings: "17%"
    }
  },
  $a = u => Qt[u] || Qt.free,
  ev = (u, s) => {
    const o = $a(u);
    return o.maxGroups === -1 ? !0 : s <= o.maxGroups
  },
  tv = (u, s) => $a(u)[s] || !1,
  lv = u => {
    switch (u) {
      case "free":
        return "basic";
      case "basic":
        return "premium";
      default:
        return null
    }
  },
  ph = (u, s) => {
    if (u === 0) return "Free";
    const o = `$${u.toFixed(2)}`;
    return s === "month" ? `${o}/month` : s === "year" ? `${o}/year` : o
  },
  av = () => {
    const u = Qt.premium.price * 12,
      s = Qt.annual.price,
      o = u - s,
      c = Math.round(o / u * 100);
    return {
      savings: o,
      percentage: c
    }
  },
  nv = async (u, s) => (console.log(`Creating checkout session for plan: ${u}, user: ${s}`), {
    sessionId: "cs_test_" + Math.random().toString(36).substr(2, 9),
    url: `https://checkout.stripe.com/pay/cs_test_${Math.random().toString(36).substr(2,9)}`
  }), iv = async u => (console.log(`Creating customer portal session for: ${u}`), {
    url: `https://billing.stripe.com/p/session/${Math.random().toString(36).substr(2,9)}`
  }), uv = async u => (console.log(`Canceling subscription: ${u}`), {
    success: !0
  }), yh = w.createContext(), Du = () => {
    const u = w.useContext(yh);
    if (!u) throw new Error("useSubscription must be used within a SubscriptionProvider");
    return u
  }, rv = ({
    children: u
  }) => {
    const [s, o] = w.useState("free"), [c, d] = w.useState("active"), [h, v] = w.useState(null), [b, p] = w.useState(null), [g, j] = w.useState(null), [O, T] = w.useState(!1), [C, M] = w.useState(null);
    w.useEffect(() => {
      k()
    }, []);
    const k = async () => {
      try {
        T(!0);
        const ie = localStorage.getItem("userPlan") || "free",
          Ce = localStorage.getItem("subscriptionStatus") || "active",
          he = localStorage.getItem("customerId"),
          et = localStorage.getItem("subscriptionId"),
          tt = localStorage.getItem("billingCycleEnd");
        o(ie), d(Ce), v(he), p(et), j(tt ? new Date(tt) : null)
      } catch (ie) {
        M("Failed to load subscription data"), console.error("Subscription loading error:", ie)
      } finally {
        T(!1)
      }
    }, Y = (ie, Ce = "active", he = null, et = null) => {
      if (o(ie), d(Ce), he && p(he), et && v(et), ie !== "free") {
        const tt = $a(ie),
          be = new Date;
        tt.interval === "month" ? be.setMonth(be.getMonth() + 1) : tt.interval === "year" && be.setFullYear(be.getFullYear() + 1), j(be), localStorage.setItem("billingCycleEnd", be.toISOString())
      } else j(null), localStorage.removeItem("billingCycleEnd");
      localStorage.setItem("userPlan", ie), localStorage.setItem("subscriptionStatus", Ce), he && localStorage.setItem("subscriptionId", he), et && localStorage.setItem("customerId", et)
    }, G = async (ie, Ce) => {
      try {
        T(!0), M(null);
        const he = await nv(ie, Ce);
        return setTimeout(() => {
          Y(ie, "active", "sub_" + Math.random().toString(36).substr(2, 9), "cus_" + Math.random().toString(36).substr(2, 9)), T(!1), alert("Payment successful! Welcome to your new plan.")
        }, 2e3), he
      } catch (he) {
        throw M("Failed to start checkout process"), T(!1), he
      }
    }, X = async () => {
      try {
        if (!h) throw new Error("No customer ID found");
        const ie = await iv(h);
        return alert("This would open the Stripe Customer Portal for managing billing"), ie
      } catch (ie) {
        throw M("Failed to open customer portal"), ie
      }
    }, F = async () => {
      try {
        if (!b) throw new Error("No subscription ID found");
        T(!0), await uv(b), Y("free", "canceled"), T(!1), alert("Subscription canceled successfully. You will retain access until the end of your billing period.")
      } catch (ie) {
        throw M("Failed to cancel subscription"), T(!1), ie
      }
    }, ne = () => $a(s), P = ie => typeof ie == "string" ? tv(s, ie) : typeof ie == "number" ? ev(s, ie) : !1, me = {
      currentPlan: s,
      subscriptionStatus: c,
      customerId: h,
      subscriptionId: b,
      billingCycleEnd: g,
      loading: O,
      error: C,
      startCheckout: G,
      openCustomerPortal: X,
      cancelCurrentSubscription: F,
      updateSubscription: Y,
      loadSubscriptionData: k,
      getCurrentPlan: ne,
      canAccess: P,
      isSubscriptionActive: () => c === "active" || c === "trialing",
      needsUpgrade: ie => !P(ie) && s === "free",
      getDaysUntilRenewal: () => {
        if (!g) return null;
        const Ce = g - new Date,
          he = Math.ceil(Ce / (1e3 * 60 * 60 * 24));
        return he > 0 ? he : 0
      },
      clearError: () => M(null)
    };
    return r.jsx(yh.Provider, {
      value: me,
      children: u
    })
  }, jc = {
    "group-1": {
      id: "group-1",
      name: "Group 1",
      title: "s, a, t",
      description: "First sounds - the foundation of reading",
      difficulty: 1,
      letters: [{
        letter: "s",
        ipa: "/s/",
        sound: "sss",
        examples: ["sun", "snake", "sock"]
      }, {
        letter: "a",
        ipa: "/æ/",
        sound: "ah",
        examples: ["apple", "ant", "axe"]
      }, {
        letter: "t",
        ipa: "/t/",
        sound: "tuh",
        examples: ["tree", "top", "tent"]
      }],
      songs: [{
        id: "s-song",
        title: "S Song",
        letter: "s",
        duration: "1:30",
        audioUrl: "/audio/s-song.mp3"
      }, {
        id: "a-song",
        title: "A Song",
        letter: "a",
        duration: "1:25",
        audioUrl: "/audio/a-song.mp3"
      }, {
        id: "t-song",
        title: "T Song",
        letter: "t",
        duration: "1:35",
        audioUrl: "/audio/t-song.mp3"
      }],
      matchingPairs: [{
        letter: "s",
        image: "🌞",
        word: "sun",
        audioUrl: "/audio/sun.mp3"
      }, {
        letter: "a",
        image: "🍎",
        word: "apple",
        audioUrl: "/audio/apple.mp3"
      }, {
        letter: "t",
        image: "🌳",
        word: "tree",
        audioUrl: "/audio/tree.mp3"
      }],
      spellingWords: [{
        word: "sat",
        image: "🐱",
        letters: ["s", "a", "t"],
        audioUrl: "/audio/sat.mp3"
      }, {
        word: "at",
        image: "👉",
        letters: ["a", "t"],
        audioUrl: "/audio/at.mp3"
      }, {
        word: "as",
        image: "➡️",
        letters: ["a", "s"],
        audioUrl: "/audio/as.mp3"
      }],
      unlocked: !0,
      requiredPlan: "free"
    },
    "group-2": {
      id: "group-2",
      name: "Group 2",
      title: "i, p, n",
      description: "Building on the basics with new sounds",
      difficulty: 2,
      letters: [{
        letter: "i",
        ipa: "/ɪ/",
        sound: "ih",
        examples: ["igloo", "ink", "insect"]
      }, {
        letter: "p",
        ipa: "/p/",
        sound: "puh",
        examples: ["pig", "pen", "pot"]
      }, {
        letter: "n",
        ipa: "/n/",
        sound: "nuh",
        examples: ["net", "nose", "nut"]
      }],
      songs: [{
        id: "i-song",
        title: "I Song",
        letter: "i",
        duration: "1:28",
        audioUrl: "/audio/i-song.mp3"
      }, {
        id: "p-song",
        title: "P Song",
        letter: "p",
        duration: "1:32",
        audioUrl: "/audio/p-song.mp3"
      }, {
        id: "n-song",
        title: "N Song",
        letter: "n",
        duration: "1:27",
        audioUrl: "/audio/n-song.mp3"
      }],
      matchingPairs: [{
        letter: "i",
        image: "🧊",
        word: "ice",
        audioUrl: "/audio/ice.mp3"
      }, {
        letter: "p",
        image: "🐷",
        word: "pig",
        audioUrl: "/audio/pig.mp3"
      }, {
        letter: "n",
        image: "🥜",
        word: "nut",
        audioUrl: "/audio/nut.mp3"
      }],
      spellingWords: [{
        word: "pin",
        image: "📌",
        letters: ["p", "i", "n"],
        audioUrl: "/audio/pin.mp3"
      }, {
        word: "pit",
        image: "🕳️",
        letters: ["p", "i", "t"],
        audioUrl: "/audio/pit.mp3"
      }, {
        word: "nap",
        image: "😴",
        letters: ["n", "a", "p"],
        audioUrl: "/audio/nap.mp3"
      }, {
        word: "pan",
        image: "🍳",
        letters: ["p", "a", "n"],
        audioUrl: "/audio/pan.mp3"
      }],
      unlocked: !1,
      requiredPlan: "basic"
    },
    "group-3": {
      id: "group-3",
      name: "Group 3",
      title: "m, d, g",
      description: "Expanding vocabulary with more consonants",
      difficulty: 3,
      letters: [{
        letter: "m",
        ipa: "/m/",
        sound: "mmm",
        examples: ["mouse", "moon", "map"]
      }, {
        letter: "d",
        ipa: "/d/",
        sound: "duh",
        examples: ["dog", "door", "duck"]
      }, {
        letter: "g",
        ipa: "/g/",
        sound: "guh",
        examples: ["goat", "gate", "gift"]
      }],
      songs: [{
        id: "m-song",
        title: "M Song",
        letter: "m",
        duration: "1:31",
        audioUrl: "/audio/m-song.mp3"
      }, {
        id: "d-song",
        title: "D Song",
        letter: "d",
        duration: "1:29",
        audioUrl: "/audio/d-song.mp3"
      }, {
        id: "g-song",
        title: "G Song",
        letter: "g",
        duration: "1:33",
        audioUrl: "/audio/g-song.mp3"
      }],
      matchingPairs: [{
        letter: "m",
        image: "🐭",
        word: "mouse",
        audioUrl: "/audio/mouse.mp3"
      }, {
        letter: "d",
        image: "🐕",
        word: "dog",
        audioUrl: "/audio/dog.mp3"
      }, {
        letter: "g",
        image: "🐐",
        word: "goat",
        audioUrl: "/audio/goat.mp3"
      }],
      spellingWords: [{
        word: "mad",
        image: "😠",
        letters: ["m", "a", "d"],
        audioUrl: "/audio/mad.mp3"
      }, {
        word: "dig",
        image: "⛏️",
        letters: ["d", "i", "g"],
        audioUrl: "/audio/dig.mp3"
      }, {
        word: "gap",
        image: "🕳️",
        letters: ["g", "a", "p"],
        audioUrl: "/audio/gap.mp3"
      }, {
        word: "map",
        image: "🗺️",
        letters: ["m", "a", "p"],
        audioUrl: "/audio/map.mp3"
      }],
      unlocked: !1,
      requiredPlan: "basic"
    },
    "group-4": {
      id: "group-4",
      name: "Group 4",
      title: "o, c, k",
      description: "New vowel and consonant combinations",
      difficulty: 4,
      letters: [{
        letter: "o",
        ipa: "/ɒ/",
        sound: "oh",
        examples: ["octopus", "orange", "ox"]
      }, {
        letter: "c",
        ipa: "/k/",
        sound: "kuh",
        examples: ["cat", "cup", "car"]
      }, {
        letter: "k",
        ipa: "/k/",
        sound: "kuh",
        examples: ["kite", "key", "king"]
      }],
      songs: [{
        id: "o-song",
        title: "O Song",
        letter: "o",
        duration: "1:26",
        audioUrl: "/audio/o-song.mp3"
      }, {
        id: "c-song",
        title: "C Song",
        letter: "c",
        duration: "1:34",
        audioUrl: "/audio/c-song.mp3"
      }, {
        id: "k-song",
        title: "K Song",
        letter: "k",
        duration: "1:30",
        audioUrl: "/audio/k-song.mp3"
      }],
      matchingPairs: [{
        letter: "o",
        image: "🐙",
        word: "octopus",
        audioUrl: "/audio/octopus.mp3"
      }, {
        letter: "c",
        image: "🐱",
        word: "cat",
        audioUrl: "/audio/cat.mp3"
      }, {
        letter: "k",
        image: "🪁",
        word: "kite",
        audioUrl: "/audio/kite.mp3"
      }],
      spellingWords: [{
        word: "cot",
        image: "🛏️",
        letters: ["c", "o", "t"],
        audioUrl: "/audio/cot.mp3"
      }, {
        word: "dock",
        image: "⚓",
        letters: ["d", "o", "c", "k"],
        audioUrl: "/audio/dock.mp3"
      }, {
        word: "pick",
        image: "⛏️",
        letters: ["p", "i", "c", "k"],
        audioUrl: "/audio/pick.mp3"
      }, {
        word: "sock",
        image: "🧦",
        letters: ["s", "o", "c", "k"],
        audioUrl: "/audio/sock.mp3"
      }],
      unlocked: !1,
      requiredPlan: "basic"
    },
    "group-5": {
      id: "group-5",
      name: "Group 5",
      title: "e, u, r",
      description: "Completing the vowels and adding R",
      difficulty: 5,
      letters: [{
        letter: "e",
        ipa: "/e/",
        sound: "eh",
        examples: ["elephant", "egg", "end"]
      }, {
        letter: "u",
        ipa: "/ʌ/",
        sound: "uh",
        examples: ["umbrella", "up", "under"]
      }, {
        letter: "r",
        ipa: "/r/",
        sound: "rrr",
        examples: ["rabbit", "red", "run"]
      }],
      songs: [{
        id: "e-song",
        title: "E Song",
        letter: "e",
        duration: "1:28",
        audioUrl: "/audio/e-song.mp3"
      }, {
        id: "u-song",
        title: "U Song",
        letter: "u",
        duration: "1:31",
        audioUrl: "/audio/u-song.mp3"
      }, {
        id: "r-song",
        title: "R Song",
        letter: "r",
        duration: "1:29",
        audioUrl: "/audio/r-song.mp3"
      }],
      matchingPairs: [{
        letter: "e",
        image: "🐘",
        word: "elephant",
        audioUrl: "/audio/elephant.mp3"
      }, {
        letter: "u",
        image: "☂️",
        word: "umbrella",
        audioUrl: "/audio/umbrella.mp3"
      }, {
        letter: "r",
        image: "🐰",
        word: "rabbit",
        audioUrl: "/audio/rabbit.mp3"
      }],
      spellingWords: [{
        word: "red",
        image: "🔴",
        letters: ["r", "e", "d"],
        audioUrl: "/audio/red.mp3"
      }, {
        word: "run",
        image: "🏃",
        letters: ["r", "u", "n"],
        audioUrl: "/audio/run.mp3"
      }, {
        word: "pet",
        image: "🐕",
        letters: ["p", "e", "t"],
        audioUrl: "/audio/pet.mp3"
      }, {
        word: "cup",
        image: "☕",
        letters: ["c", "u", "p"],
        audioUrl: "/audio/cup.mp3"
      }],
      unlocked: !1,
      requiredPlan: "premium"
    }
  }, Hu = u => jc[u] || null, sv = () => Object.values(jc), wc = u => {
    const s = sv();
    switch (u) {
      case "free":
        return s.filter(o => o.requiredPlan === "free");
      case "basic":
        return s.filter(o => ["free", "basic"].includes(o.requiredPlan));
      case "premium":
      case "annual":
        return s;
      default:
        return s.filter(o => o.requiredPlan === "free")
    }
  }, vh = (u, s) => Hu(u) ? wc(s).some(d => d.id === u) : !1, Ec = u => {
    if (console.log(`Playing audio: ${u}`), window.speechSynthesis) {
      const s = new SpeechSynthesisUtterance("Audio playing");
      s.rate = .8, s.pitch = 1.2, window.speechSynthesis.speak(s)
    }
  }, cv = (u, s) => {
    if (window.speechSynthesis) {
      const o = new SpeechSynthesisUtterance(u);
      o.rate = .6, o.pitch = 1.1, window.speechSynthesis.speak(o)
    }
    console.log(`Speaking phoneme: ${u} (${s})`)
  }, ov = u => {
    const o = wc(u).length;
    return {
      groupsAccessed: Math.min(Math.floor(Math.random() * o) + 1, o),
      maxGroups: u === "premium" || u === "annual" ? -1 : o,
      gamesPlayed: Math.floor(Math.random() * 100) + 20,
      studentsTaught: Math.floor(Math.random() * 50) + 10,
      hoursUsed: Math.floor(Math.random() * 40) + 5,
      favoriteGame: Math.random() > .5 ? "Matching" : "Spelling"
    }
  }, fv = () => r.jsx("div", {
    className: "min-h-screen bg-blue-50 flex items-center justify-center",
    children: r.jsxs("div", {
      className: "text-center",
      children: [r.jsx("h1", {
        className: "text-4xl font-bold text-gray-900 mb-4",
        children: "Test Page"
      }), r.jsx("p", {
        className: "text-xl text-gray-600",
        children: "If you can see this, the app is working!"
      })]
    })
  });

function Lm(u, s) {
  if (typeof u == "function") return u(s);
  u != null && (u.current = s)
}

function dv(...u) {
  return s => {
    let o = !1;
    const c = u.map(d => {
      const h = Lm(d, s);
      return !o && typeof h == "function" && (o = !0), h
    });
    if (o) return () => {
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        typeof h == "function" ? h() : Lm(u[d], null)
      }
    }
  }
}

function Ac(...u) {
  return w.useCallback(dv(...u), u)
}

function xh(u) {
  const s = mv(u),
    o = w.forwardRef((c, d) => {
      const {
        children: h,
        ...v
      } = c, b = w.Children.toArray(h), p = b.find(gv);
      if (p) {
        const g = p.props.children,
          j = b.map(O => O === p ? w.Children.count(g) > 1 ? w.Children.only(null) : w.isValidElement(g) ? g.props.children : null : O);
        return r.jsx(s, {
          ...v,
          ref: d,
          children: w.isValidElement(g) ? w.cloneElement(g, void 0, j) : null
        })
      }
      return r.jsx(s, {
        ...v,
        ref: d,
        children: h
      })
    });
  return o.displayName = `${u}.Slot`, o
}
var bh = xh("Slot");

function mv(u) {
  const s = w.forwardRef((o, c) => {
    const {
      children: d,
      ...h
    } = o, v = w.isValidElement(d) ? yv(d) : void 0, b = Ac(v, c);
    if (w.isValidElement(d)) {
      const p = pv(h, d.props);
      return d.type !== w.Fragment && (p.ref = b), w.cloneElement(d, p)
    }
    return w.Children.count(d) > 1 ? w.Children.only(null) : null
  });
  return s.displayName = `${u}.SlotClone`, s
}
var hv = Symbol("radix.slottable");

function gv(u) {
  return w.isValidElement(u) && typeof u.type == "function" && "__radixId" in u.type && u.type.__radixId === hv
}

function pv(u, s) {
  const o = {
    ...s
  };
  for (const c in s) {
    const d = u[c],
      h = s[c];
    /^on[A-Z]/.test(c) ? d && h ? o[c] = (...b) => {
      const p = h(...b);
      return d(...b), p
    } : d && (o[c] = d) : c === "style" ? o[c] = {
      ...d,
      ...h
    } : c === "className" && (o[c] = [d, h].filter(Boolean).join(" "))
  }
  return {
    ...u,
    ...o
  }
}

function yv(u) {
  var c, d;
  let s = (c = Object.getOwnPropertyDescriptor(u.props, "ref")) == null ? void 0 : c.get,
    o = s && "isReactWarning" in s && s.isReactWarning;
  return o ? u.ref : (s = (d = Object.getOwnPropertyDescriptor(u, "ref")) == null ? void 0 : d.get, o = s && "isReactWarning" in s && s.isReactWarning, o ? u.props.ref : u.props.ref || u.ref)
}

function Sh(u) {
  var s, o, c = "";
  if (typeof u == "string" || typeof u == "number") c += u;
  else if (typeof u == "object")
    if (Array.isArray(u)) {
      var d = u.length;
      for (s = 0; s < d; s++) u[s] && (o = Sh(u[s])) && (c && (c += " "), c += o)
    } else
      for (o in u) u[o] && (c && (c += " "), c += o);
  return c
}

function Nh() {
  for (var u, s, o = 0, c = "", d = arguments.length; o < d; o++)(u = arguments[o]) && (s = Sh(u)) && (c && (c += " "), c += s);
  return c
}
const Ym = u => typeof u == "boolean" ? `${u}` : u === 0 ? "0" : u,
  Vm = Nh,
  Tc = (u, s) => o => {
    var c;
    if ((s == null ? void 0 : s.variants) == null) return Vm(u, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
    const {
      variants: d,
      defaultVariants: h
    } = s, v = Object.keys(d).map(g => {
      const j = o == null ? void 0 : o[g],
        O = h == null ? void 0 : h[g];
      if (j === null) return null;
      const T = Ym(j) || Ym(O);
      return d[g][T]
    }), b = o && Object.entries(o).reduce((g, j) => {
      let [O, T] = j;
      return T === void 0 || (g[O] = T), g
    }, {}), p = s == null || (c = s.compoundVariants) === null || c === void 0 ? void 0 : c.reduce((g, j) => {
      let {
        class: O,
        className: T,
        ...C
      } = j;
      return Object.entries(C).every(M => {
        let [k, Y] = M;
        return Array.isArray(Y) ? Y.includes({
          ...h,
          ...b
        } [k]) : {
          ...h,
          ...b
        } [k] === Y
      }) ? [...g, O, T] : g
    }, []);
    return Vm(u, v, p, o == null ? void 0 : o.class, o == null ? void 0 : o.className)
  },
  Rc = "-",
  vv = u => {
    const s = bv(u),
      {
        conflictingClassGroups: o,
        conflictingClassGroupModifiers: c
      } = u;
    return {
      getClassGroupId: v => {
        const b = v.split(Rc);
        return b[0] === "" && b.length !== 1 && b.shift(), jh(b, s) || xv(v)
      },
      getConflictingClassGroupIds: (v, b) => {
        const p = o[v] || [];
        return b && c[v] ? [...p, ...c[v]] : p
      }
    }
  },
  jh = (u, s) => {
    var v;
    if (u.length === 0) return s.classGroupId;
    const o = u[0],
      c = s.nextPart.get(o),
      d = c ? jh(u.slice(1), c) : void 0;
    if (d) return d;
    if (s.validators.length === 0) return;
    const h = u.join(Rc);
    return (v = s.validators.find(({
      validator: b
    }) => b(h))) == null ? void 0 : v.classGroupId
  },
  Xm = /^\[(.+)\]$/,
  xv = u => {
    if (Xm.test(u)) {
      const s = Xm.exec(u)[1],
        o = s == null ? void 0 : s.substring(0, s.indexOf(":"));
      if (o) return "arbitrary.." + o
    }
  },
  bv = u => {
    const {
      theme: s,
      classGroups: o
    } = u, c = {
      nextPart: new Map,
      validators: []
    };
    for (const d in o) dc(o[d], c, d, s);
    return c
  },
  dc = (u, s, o, c) => {
    u.forEach(d => {
      if (typeof d == "string") {
        const h = d === "" ? s : Qm(s, d);
        h.classGroupId = o;
        return
      }
      if (typeof d == "function") {
        if (Sv(d)) {
          dc(d(c), s, o, c);
          return
        }
        s.validators.push({
          validator: d,
          classGroupId: o
        });
        return
      }
      Object.entries(d).forEach(([h, v]) => {
        dc(v, Qm(s, h), o, c)
      })
    })
  },
  Qm = (u, s) => {
    let o = u;
    return s.split(Rc).forEach(c => {
      o.nextPart.has(c) || o.nextPart.set(c, {
        nextPart: new Map,
        validators: []
      }), o = o.nextPart.get(c)
    }), o
  },
  Sv = u => u.isThemeGetter,
  Nv = u => {
    if (u < 1) return {
      get: () => {},
      set: () => {}
    };
    let s = 0,
      o = new Map,
      c = new Map;
    const d = (h, v) => {
      o.set(h, v), s++, s > u && (s = 0, c = o, o = new Map)
    };
    return {
      get(h) {
        let v = o.get(h);
        if (v !== void 0) return v;
        if ((v = c.get(h)) !== void 0) return d(h, v), v
      },
      set(h, v) {
        o.has(h) ? o.set(h, v) : d(h, v)
      }
    }
  },
  mc = "!",
  hc = ":",
  jv = hc.length,
  wv = u => {
    const {
      prefix: s,
      experimentalParseClassName: o
    } = u;
    let c = d => {
      const h = [];
      let v = 0,
        b = 0,
        p = 0,
        g;
      for (let M = 0; M < d.length; M++) {
        let k = d[M];
        if (v === 0 && b === 0) {
          if (k === hc) {
            h.push(d.slice(p, M)), p = M + jv;
            continue
          }
          if (k === "/") {
            g = M;
            continue
          }
        }
        k === "[" ? v++ : k === "]" ? v-- : k === "(" ? b++ : k === ")" && b--
      }
      const j = h.length === 0 ? d : d.substring(p),
        O = Ev(j),
        T = O !== j,
        C = g && g > p ? g - p : void 0;
      return {
        modifiers: h,
        hasImportantModifier: T,
        baseClassName: O,
        maybePostfixModifierPosition: C
      }
    };
    if (s) {
      const d = s + hc,
        h = c;
      c = v => v.startsWith(d) ? h(v.substring(d.length)) : {
        isExternal: !0,
        modifiers: [],
        hasImportantModifier: !1,
        baseClassName: v,
        maybePostfixModifierPosition: void 0
      }
    }
    if (o) {
      const d = c;
      c = h => o({
        className: h,
        parseClassName: d
      })
    }
    return c
  },
  Ev = u => u.endsWith(mc) ? u.substring(0, u.length - 1) : u.startsWith(mc) ? u.substring(1) : u,
  Av = u => {
    const s = Object.fromEntries(u.orderSensitiveModifiers.map(c => [c, !0]));
    return c => {
      if (c.length <= 1) return c;
      const d = [];
      let h = [];
      return c.forEach(v => {
        v[0] === "[" || s[v] ? (d.push(...h.sort(), v), h = []) : h.push(v)
      }), d.push(...h.sort()), d
    }
  },
  Tv = u => ({
    cache: Nv(u.cacheSize),
    parseClassName: wv(u),
    sortModifiers: Av(u),
    ...vv(u)
  }),
  Rv = /\s+/,
  zv = (u, s) => {
    const {
      parseClassName: o,
      getClassGroupId: c,
      getConflictingClassGroupIds: d,
      sortModifiers: h
    } = s, v = [], b = u.trim().split(Rv);
    let p = "";
    for (let g = b.length - 1; g >= 0; g -= 1) {
      const j = b[g],
        {
          isExternal: O,
          modifiers: T,
          hasImportantModifier: C,
          baseClassName: M,
          maybePostfixModifierPosition: k
        } = o(j);
      if (O) {
        p = j + (p.length > 0 ? " " + p : p);
        continue
      }
      let Y = !!k,
        G = c(Y ? M.substring(0, k) : M);
      if (!G) {
        if (!Y) {
          p = j + (p.length > 0 ? " " + p : p);
          continue
        }
        if (G = c(M), !G) {
          p = j + (p.length > 0 ? " " + p : p);
          continue
        }
        Y = !1
      }
      const X = h(T).join(":"),
        F = C ? X + mc : X,
        ne = F + G;
      if (v.includes(ne)) continue;
      v.push(ne);
      const P = d(G, Y);
      for (let ve = 0; ve < P.length; ++ve) {
        const Ne = P[ve];
        v.push(F + Ne)
      }
      p = j + (p.length > 0 ? " " + p : p)
    }
    return p
  };

function Mv() {
  let u = 0,
    s, o, c = "";
  for (; u < arguments.length;)(s = arguments[u++]) && (o = wh(s)) && (c && (c += " "), c += o);
  return c
}
const wh = u => {
  if (typeof u == "string") return u;
  let s, o = "";
  for (let c = 0; c < u.length; c++) u[c] && (s = wh(u[c])) && (o && (o += " "), o += s);
  return o
};

function _v(u, ...s) {
  let o, c, d, h = v;

  function v(p) {
    const g = s.reduce((j, O) => O(j), u());
    return o = Tv(g), c = o.cache.get, d = o.cache.set, h = b, b(p)
  }

  function b(p) {
    const g = c(p);
    if (g) return g;
    const j = zv(p, o);
    return d(p, j), j
  }
  return function () {
    return h(Mv.apply(null, arguments))
  }
}
const Ze = u => {
    const s = o => o[u] || [];
    return s.isThemeGetter = !0, s
  },
  Eh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ah = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Cv = /^\d+\/\d+$/,
  Ov = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Uv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Dv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Hv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Bv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ja = u => Cv.test(u),
  se = u => !!u && !Number.isNaN(Number(u)),
  Yl = u => !!u && Number.isInteger(Number(u)),
  ic = u => u.endsWith("%") && se(u.slice(0, -1)),
  ol = u => Ov.test(u),
  kv = () => !0,
  Gv = u => Uv.test(u) && !Dv.test(u),
  Th = () => !1,
  qv = u => Hv.test(u),
  Lv = u => Bv.test(u),
  Yv = u => !$(u) && !W(u),
  Vv = u => Fa(u, Mh, Th),
  $ = u => Eh.test(u),
  ra = u => Fa(u, _h, Gv),
  uc = u => Fa(u, Jv, se),
  Zm = u => Fa(u, Rh, Th),
  Xv = u => Fa(u, zh, Lv),
  Au = u => Fa(u, Ch, qv),
  W = u => Ah.test(u),
  li = u => Ia(u, _h),
  Qv = u => Ia(u, $v),
  Km = u => Ia(u, Rh),
  Zv = u => Ia(u, Mh),
  Kv = u => Ia(u, zh),
  Tu = u => Ia(u, Ch, !0),
  Fa = (u, s, o) => {
    const c = Eh.exec(u);
    return c ? c[1] ? s(c[1]) : o(c[2]) : !1
  },
  Ia = (u, s, o = !1) => {
    const c = Ah.exec(u);
    return c ? c[1] ? s(c[1]) : o : !1
  },
  Rh = u => u === "position" || u === "percentage",
  zh = u => u === "image" || u === "url",
  Mh = u => u === "length" || u === "size" || u === "bg-size",
  _h = u => u === "length",
  Jv = u => u === "number",
  $v = u => u === "family-name",
  Ch = u => u === "shadow",
  Wv = () => {
    const u = Ze("color"),
      s = Ze("font"),
      o = Ze("text"),
      c = Ze("font-weight"),
      d = Ze("tracking"),
      h = Ze("leading"),
      v = Ze("breakpoint"),
      b = Ze("container"),
      p = Ze("spacing"),
      g = Ze("radius"),
      j = Ze("shadow"),
      O = Ze("inset-shadow"),
      T = Ze("text-shadow"),
      C = Ze("drop-shadow"),
      M = Ze("blur"),
      k = Ze("perspective"),
      Y = Ze("aspect"),
      G = Ze("ease"),
      X = Ze("animate"),
      F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      ne = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      P = () => [...ne(), W, $],
      ve = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Ne = () => ["auto", "contain", "none"],
      Z = () => [W, $, p],
      me = () => [Ja, "full", "auto", ...Z()],
      ie = () => [Yl, "none", "subgrid", W, $],
      Ce = () => ["auto", {
        span: ["full", Yl, W, $]
      }, Yl, W, $],
      he = () => [Yl, "auto", W, $],
      et = () => ["auto", "min", "max", "fr", W, $],
      tt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      be = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      _ = () => ["auto", ...Z()],
      V = () => [Ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()],
      q = () => [u, W, $],
      Se = () => [...ne(), Km, Zm, {
        position: [W, $]
      }],
      x = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      B = () => ["auto", "cover", "contain", Zv, Vv, {
        size: [W, $]
      }],
      Q = () => [ic, li, ra],
      L = () => ["", "none", "full", g, W, $],
      K = () => ["", se, li, ra],
      oe = () => ["solid", "dashed", "dotted", "double"],
      ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      pe = () => [se, ic, Km, Zm],
      Re = () => ["", "none", M, W, $],
      gt = () => ["none", se, W, $],
      gl = () => ["none", se, W, $],
      pl = () => [se, W, $],
      yl = () => [Ja, "full", ...Z()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [ol],
        breakpoint: [ol],
        color: [kv],
        container: [ol],
        "drop-shadow": [ol],
        ease: ["in", "out", "in-out"],
        font: [Yv],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [ol],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [ol],
        shadow: [ol],
        spacing: ["px", se],
        text: [ol],
        "text-shadow": [ol],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", Ja, $, W, Y]
        }],
        container: ["container"],
        columns: [{
          columns: [se, $, W, b]
        }],
        "break-after": [{
          "break-after": F()
        }],
        "break-before": [{
          "break-before": F()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: P()
        }],
        overflow: [{
          overflow: ve()
        }],
        "overflow-x": [{
          "overflow-x": ve()
        }],
        "overflow-y": [{
          "overflow-y": ve()
        }],
        overscroll: [{
          overscroll: Ne()
        }],
        "overscroll-x": [{
          "overscroll-x": Ne()
        }],
        "overscroll-y": [{
          "overscroll-y": Ne()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: me()
        }],
        "inset-x": [{
          "inset-x": me()
        }],
        "inset-y": [{
          "inset-y": me()
        }],
        start: [{
          start: me()
        }],
        end: [{
          end: me()
        }],
        top: [{
          top: me()
        }],
        right: [{
          right: me()
        }],
        bottom: [{
          bottom: me()
        }],
        left: [{
          left: me()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [Yl, "auto", W, $]
        }],
        basis: [{
          basis: [Ja, "full", "auto", b, ...Z()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [se, Ja, "auto", "initial", "none", $]
        }],
        grow: [{
          grow: ["", se, W, $]
        }],
        shrink: [{
          shrink: ["", se, W, $]
        }],
        order: [{
          order: [Yl, "first", "last", "none", W, $]
        }],
        "grid-cols": [{
          "grid-cols": ie()
        }],
        "col-start-end": [{
          col: Ce()
        }],
        "col-start": [{
          "col-start": he()
        }],
        "col-end": [{
          "col-end": he()
        }],
        "grid-rows": [{
          "grid-rows": ie()
        }],
        "row-start-end": [{
          row: Ce()
        }],
        "row-start": [{
          "row-start": he()
        }],
        "row-end": [{
          "row-end": he()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": et()
        }],
        "auto-rows": [{
          "auto-rows": et()
        }],
        gap: [{
          gap: Z()
        }],
        "gap-x": [{
          "gap-x": Z()
        }],
        "gap-y": [{
          "gap-y": Z()
        }],
        "justify-content": [{
          justify: [...tt(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...be(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...be()]
        }],
        "align-content": [{
          content: ["normal", ...tt()]
        }],
        "align-items": [{
          items: [...be(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...be(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": tt()
        }],
        "place-items": [{
          "place-items": [...be(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...be()]
        }],
        p: [{
          p: Z()
        }],
        px: [{
          px: Z()
        }],
        py: [{
          py: Z()
        }],
        ps: [{
          ps: Z()
        }],
        pe: [{
          pe: Z()
        }],
        pt: [{
          pt: Z()
        }],
        pr: [{
          pr: Z()
        }],
        pb: [{
          pb: Z()
        }],
        pl: [{
          pl: Z()
        }],
        m: [{
          m: _()
        }],
        mx: [{
          mx: _()
        }],
        my: [{
          my: _()
        }],
        ms: [{
          ms: _()
        }],
        me: [{
          me: _()
        }],
        mt: [{
          mt: _()
        }],
        mr: [{
          mr: _()
        }],
        mb: [{
          mb: _()
        }],
        ml: [{
          ml: _()
        }],
        "space-x": [{
          "space-x": Z()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": Z()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: V()
        }],
        w: [{
          w: [b, "screen", ...V()]
        }],
        "min-w": [{
          "min-w": [b, "screen", "none", ...V()]
        }],
        "max-w": [{
          "max-w": [b, "screen", "none", "prose", {
            screen: [v]
          }, ...V()]
        }],
        h: [{
          h: ["screen", "lh", ...V()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...V()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...V()]
        }],
        "font-size": [{
          text: ["base", o, li, ra]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [c, W, uc]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ic, $]
        }],
        "font-family": [{
          font: [Qv, $, s]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [d, W, $]
        }],
        "line-clamp": [{
          "line-clamp": [se, "none", W, uc]
        }],
        leading: [{
          leading: [h, ...Z()]
        }],
        "list-image": [{
          "list-image": ["none", W, $]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", W, $]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: q()
        }],
        "text-color": [{
          text: q()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...oe(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [se, "from-font", "auto", W, ra]
        }],
        "text-decoration-color": [{
          decoration: q()
        }],
        "underline-offset": [{
          "underline-offset": [se, "auto", W, $]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: Z()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, $]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", W, $]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: Se()
        }],
        "bg-repeat": [{
          bg: x()
        }],
        "bg-size": [{
          bg: B()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, Yl, W, $],
            radial: ["", W, $],
            conic: [Yl, W, $]
          }, Kv, Xv]
        }],
        "bg-color": [{
          bg: q()
        }],
        "gradient-from-pos": [{
          from: Q()
        }],
        "gradient-via-pos": [{
          via: Q()
        }],
        "gradient-to-pos": [{
          to: Q()
        }],
        "gradient-from": [{
          from: q()
        }],
        "gradient-via": [{
          via: q()
        }],
        "gradient-to": [{
          to: q()
        }],
        rounded: [{
          rounded: L()
        }],
        "rounded-s": [{
          "rounded-s": L()
        }],
        "rounded-e": [{
          "rounded-e": L()
        }],
        "rounded-t": [{
          "rounded-t": L()
        }],
        "rounded-r": [{
          "rounded-r": L()
        }],
        "rounded-b": [{
          "rounded-b": L()
        }],
        "rounded-l": [{
          "rounded-l": L()
        }],
        "rounded-ss": [{
          "rounded-ss": L()
        }],
        "rounded-se": [{
          "rounded-se": L()
        }],
        "rounded-ee": [{
          "rounded-ee": L()
        }],
        "rounded-es": [{
          "rounded-es": L()
        }],
        "rounded-tl": [{
          "rounded-tl": L()
        }],
        "rounded-tr": [{
          "rounded-tr": L()
        }],
        "rounded-br": [{
          "rounded-br": L()
        }],
        "rounded-bl": [{
          "rounded-bl": L()
        }],
        "border-w": [{
          border: K()
        }],
        "border-w-x": [{
          "border-x": K()
        }],
        "border-w-y": [{
          "border-y": K()
        }],
        "border-w-s": [{
          "border-s": K()
        }],
        "border-w-e": [{
          "border-e": K()
        }],
        "border-w-t": [{
          "border-t": K()
        }],
        "border-w-r": [{
          "border-r": K()
        }],
        "border-w-b": [{
          "border-b": K()
        }],
        "border-w-l": [{
          "border-l": K()
        }],
        "divide-x": [{
          "divide-x": K()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": K()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...oe(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...oe(), "hidden", "none"]
        }],
        "border-color": [{
          border: q()
        }],
        "border-color-x": [{
          "border-x": q()
        }],
        "border-color-y": [{
          "border-y": q()
        }],
        "border-color-s": [{
          "border-s": q()
        }],
        "border-color-e": [{
          "border-e": q()
        }],
        "border-color-t": [{
          "border-t": q()
        }],
        "border-color-r": [{
          "border-r": q()
        }],
        "border-color-b": [{
          "border-b": q()
        }],
        "border-color-l": [{
          "border-l": q()
        }],
        "divide-color": [{
          divide: q()
        }],
        "outline-style": [{
          outline: [...oe(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [se, W, $]
        }],
        "outline-w": [{
          outline: ["", se, li, ra]
        }],
        "outline-color": [{
          outline: q()
        }],
        shadow: [{
          shadow: ["", "none", j, Tu, Au]
        }],
        "shadow-color": [{
          shadow: q()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", O, Tu, Au]
        }],
        "inset-shadow-color": [{
          "inset-shadow": q()
        }],
        "ring-w": [{
          ring: K()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: q()
        }],
        "ring-offset-w": [{
          "ring-offset": [se, ra]
        }],
        "ring-offset-color": [{
          "ring-offset": q()
        }],
        "inset-ring-w": [{
          "inset-ring": K()
        }],
        "inset-ring-color": [{
          "inset-ring": q()
        }],
        "text-shadow": [{
          "text-shadow": ["none", T, Tu, Au]
        }],
        "text-shadow-color": [{
          "text-shadow": q()
        }],
        opacity: [{
          opacity: [se, W, $]
        }],
        "mix-blend": [{
          "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": ae()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [se]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": pe()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": pe()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": q()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": q()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": pe()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": pe()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": q()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": q()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": pe()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": pe()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": q()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": q()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": pe()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": pe()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": q()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": q()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": pe()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": pe()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": q()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": q()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": pe()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": pe()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": q()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": q()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": pe()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": pe()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": q()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": q()
        }],
        "mask-image-radial": [{
          "mask-radial": [W, $]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": pe()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": pe()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": q()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": q()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": ne()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [se]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": pe()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": pe()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": q()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": q()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: Se()
        }],
        "mask-repeat": [{
          mask: x()
        }],
        "mask-size": [{
          mask: B()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", W, $]
        }],
        filter: [{
          filter: ["", "none", W, $]
        }],
        blur: [{
          blur: Re()
        }],
        brightness: [{
          brightness: [se, W, $]
        }],
        contrast: [{
          contrast: [se, W, $]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", C, Tu, Au]
        }],
        "drop-shadow-color": [{
          "drop-shadow": q()
        }],
        grayscale: [{
          grayscale: ["", se, W, $]
        }],
        "hue-rotate": [{
          "hue-rotate": [se, W, $]
        }],
        invert: [{
          invert: ["", se, W, $]
        }],
        saturate: [{
          saturate: [se, W, $]
        }],
        sepia: [{
          sepia: ["", se, W, $]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", W, $]
        }],
        "backdrop-blur": [{
          "backdrop-blur": Re()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [se, W, $]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [se, W, $]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", se, W, $]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [se, W, $]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", se, W, $]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [se, W, $]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [se, W, $]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", se, W, $]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": Z()
        }],
        "border-spacing-x": [{
          "border-spacing-x": Z()
        }],
        "border-spacing-y": [{
          "border-spacing-y": Z()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, $]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [se, "initial", W, $]
        }],
        ease: [{
          ease: ["linear", "initial", G, W, $]
        }],
        delay: [{
          delay: [se, W, $]
        }],
        animate: [{
          animate: ["none", X, W, $]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [k, W, $]
        }],
        "perspective-origin": [{
          "perspective-origin": P()
        }],
        rotate: [{
          rotate: gt()
        }],
        "rotate-x": [{
          "rotate-x": gt()
        }],
        "rotate-y": [{
          "rotate-y": gt()
        }],
        "rotate-z": [{
          "rotate-z": gt()
        }],
        scale: [{
          scale: gl()
        }],
        "scale-x": [{
          "scale-x": gl()
        }],
        "scale-y": [{
          "scale-y": gl()
        }],
        "scale-z": [{
          "scale-z": gl()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: pl()
        }],
        "skew-x": [{
          "skew-x": pl()
        }],
        "skew-y": [{
          "skew-y": pl()
        }],
        transform: [{
          transform: [W, $, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: P()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: yl()
        }],
        "translate-x": [{
          "translate-x": yl()
        }],
        "translate-y": [{
          "translate-y": yl()
        }],
        "translate-z": [{
          "translate-z": yl()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: q()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: q()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, $]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": Z()
        }],
        "scroll-mx": [{
          "scroll-mx": Z()
        }],
        "scroll-my": [{
          "scroll-my": Z()
        }],
        "scroll-ms": [{
          "scroll-ms": Z()
        }],
        "scroll-me": [{
          "scroll-me": Z()
        }],
        "scroll-mt": [{
          "scroll-mt": Z()
        }],
        "scroll-mr": [{
          "scroll-mr": Z()
        }],
        "scroll-mb": [{
          "scroll-mb": Z()
        }],
        "scroll-ml": [{
          "scroll-ml": Z()
        }],
        "scroll-p": [{
          "scroll-p": Z()
        }],
        "scroll-px": [{
          "scroll-px": Z()
        }],
        "scroll-py": [{
          "scroll-py": Z()
        }],
        "scroll-ps": [{
          "scroll-ps": Z()
        }],
        "scroll-pe": [{
          "scroll-pe": Z()
        }],
        "scroll-pt": [{
          "scroll-pt": Z()
        }],
        "scroll-pr": [{
          "scroll-pr": Z()
        }],
        "scroll-pb": [{
          "scroll-pb": Z()
        }],
        "scroll-pl": [{
          "scroll-pl": Z()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", W, $]
        }],
        fill: [{
          fill: ["none", ...q()]
        }],
        "stroke-w": [{
          stroke: [se, li, ra, uc]
        }],
        stroke: [{
          stroke: ["none", ...q()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
  },
  Pv = _v(Wv);

function Et(...u) {
  return Pv(Nh(u))
}
const Fv = Tc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

function _e({
  className: u,
  variant: s,
  size: o,
  asChild: c = !1,
  ...d
}) {
  const h = c ? bh : "button";
  return r.jsx(h, {
    "data-slot": "button",
    className: Et(Fv({
      variant: s,
      size: o,
      className: u
    })),
    ...d
  })
}

function De({
  className: u,
  ...s
}) {
  return r.jsx("div", {
    "data-slot": "card",
    className: Et("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", u),
    ...s
  })
}

function Ke({
  className: u,
  ...s
}) {
  return r.jsx("div", {
    "data-slot": "card-header",
    className: Et("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", u),
    ...s
  })
}

function Je({
  className: u,
  ...s
}) {
  return r.jsx("div", {
    "data-slot": "card-title",
    className: Et("leading-none font-semibold", u),
    ...s
  })
}

function Zt({
  className: u,
  ...s
}) {
  return r.jsx("div", {
    "data-slot": "card-description",
    className: Et("text-muted-foreground text-sm", u),
    ...s
  })
}

function He({
  className: u,
  ...s
}) {
  return r.jsx("div", {
    "data-slot": "card-content",
    className: Et("px-6", u),
    ...s
  })
}
const Iv = Tc("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
      secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
      destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

function ct({
  className: u,
  variant: s,
  asChild: o = !1,
  ...c
}) {
  const d = o ? bh : "span";
  return r.jsx(d, {
    "data-slot": "badge",
    className: Et(Iv({
      variant: s
    }), u),
    ...c
  })
}

function ex(u, s, {
  checkForDefaultPrevented: o = !0
} = {}) {
  return function (d) {
    if (u == null || u(d), o === !1 || !d.defaultPrevented) return s == null ? void 0 : s(d)
  }
}

function Oh(u, s = []) {
  let o = [];

  function c(h, v) {
    const b = w.createContext(v),
      p = o.length;
    o = [...o, v];
    const g = O => {
      var G;
      const {
        scope: T,
        children: C,
        ...M
      } = O, k = ((G = T == null ? void 0 : T[u]) == null ? void 0 : G[p]) || b, Y = w.useMemo(() => M, Object.values(M));
      return r.jsx(k.Provider, {
        value: Y,
        children: C
      })
    };
    g.displayName = h + "Provider";

    function j(O, T) {
      var k;
      const C = ((k = T == null ? void 0 : T[u]) == null ? void 0 : k[p]) || b,
        M = w.useContext(C);
      if (M) return M;
      if (v !== void 0) return v;
      throw new Error(`\`${O}\` must be used within \`${h}\``)
    }
    return [g, j]
  }
  const d = () => {
    const h = o.map(v => w.createContext(v));
    return function (b) {
      const p = (b == null ? void 0 : b[u]) || h;
      return w.useMemo(() => ({
        [`__scope${u}`]: {
          ...b,
          [u]: p
        }
      }), [b, p])
    }
  };
  return d.scopeName = u, [c, tx(d, ...s)]
}

function tx(...u) {
  const s = u[0];
  if (u.length === 1) return s;
  const o = () => {
    const c = u.map(d => ({
      useScope: d(),
      scopeName: d.scopeName
    }));
    return function (h) {
      const v = c.reduce((b, {
        useScope: p,
        scopeName: g
      }) => {
        const O = p(h)[`__scope${g}`];
        return {
          ...b,
          ...O
        }
      }, {});
      return w.useMemo(() => ({
        [`__scope${s.scopeName}`]: v
      }), [v])
    }
  };
  return o.scopeName = s.scopeName, o
}
var Uh = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  lx = Np[" useInsertionEffect ".trim().toString()] || Uh;

function ax({
  prop: u,
  defaultProp: s,
  onChange: o = () => {},
  caller: c
}) {
  const [d, h, v] = nx({
    defaultProp: s,
    onChange: o
  }), b = u !== void 0, p = b ? u : d; {
    const j = w.useRef(u !== void 0);
    w.useEffect(() => {
      const O = j.current;
      O !== b && console.warn(`${c} is changing from ${O?"controlled":"uncontrolled"} to ${b?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), j.current = b
    }, [b, c])
  }
  const g = w.useCallback(j => {
    var O;
    if (b) {
      const T = ix(j) ? j(u) : j;
      T !== u && ((O = v.current) == null || O.call(v, T))
    } else h(j)
  }, [b, u, h, v]);
  return [p, g]
}

function nx({
  defaultProp: u,
  onChange: s
}) {
  const [o, c] = w.useState(u), d = w.useRef(o), h = w.useRef(s);
  return lx(() => {
    h.current = s
  }, [s]), w.useEffect(() => {
    var v;
    d.current !== o && ((v = h.current) == null || v.call(h, o), d.current = o)
  }, [o, d]), [o, c, h]
}

function ix(u) {
  return typeof u == "function"
}

function ux(u) {
  const s = w.useRef({
    value: u,
    previous: u
  });
  return w.useMemo(() => (s.current.value !== u && (s.current.previous = s.current.value, s.current.value = u), s.current.previous), [u])
}

function rx(u) {
  const [s, o] = w.useState(void 0);
  return Uh(() => {
    if (u) {
      o({
        width: u.offsetWidth,
        height: u.offsetHeight
      });
      const c = new ResizeObserver(d => {
        if (!Array.isArray(d) || !d.length) return;
        const h = d[0];
        let v, b;
        if ("borderBoxSize" in h) {
          const p = h.borderBoxSize,
            g = Array.isArray(p) ? p[0] : p;
          v = g.inlineSize, b = g.blockSize
        } else v = u.offsetWidth, b = u.offsetHeight;
        o({
          width: v,
          height: b
        })
      });
      return c.observe(u, {
        box: "border-box"
      }), () => c.unobserve(u)
    } else o(void 0)
  }, [u]), s
}
var sx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
  oi = sx.reduce((u, s) => {
    const o = xh(`Primitive.${s}`),
      c = w.forwardRef((d, h) => {
        const {
          asChild: v,
          ...b
        } = d, p = v ? o : s;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), r.jsx(p, {
          ...b,
          ref: h
        })
      });
    return c.displayName = `Primitive.${s}`, {
      ...u,
      [s]: c
    }
  }, {}),
  Bu = "Switch",
  [cx, mb] = Oh(Bu),
  [ox, fx] = cx(Bu),
  Dh = w.forwardRef((u, s) => {
    const {
      __scopeSwitch: o,
      name: c,
      checked: d,
      defaultChecked: h,
      required: v,
      disabled: b,
      value: p = "on",
      onCheckedChange: g,
      form: j,
      ...O
    } = u, [T, C] = w.useState(null), M = Ac(s, F => C(F)), k = w.useRef(!1), Y = T ? j || !!T.closest("form") : !0, [G, X] = ax({
      prop: d,
      defaultProp: h ? ? !1,
      onChange: g,
      caller: Bu
    });
    return r.jsxs(ox, {
      scope: o,
      checked: G,
      disabled: b,
      children: [r.jsx(oi.button, {
        type: "button",
        role: "switch",
        "aria-checked": G,
        "aria-required": v,
        "data-state": Gh(G),
        "data-disabled": b ? "" : void 0,
        disabled: b,
        value: p,
        ...O,
        ref: M,
        onClick: ex(u.onClick, F => {
          X(ne => !ne), Y && (k.current = F.isPropagationStopped(), k.current || F.stopPropagation())
        })
      }), Y && r.jsx(kh, {
        control: T,
        bubbles: !k.current,
        name: c,
        value: p,
        checked: G,
        required: v,
        disabled: b,
        form: j,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    })
  });
Dh.displayName = Bu;
var Hh = "SwitchThumb",
  Bh = w.forwardRef((u, s) => {
    const {
      __scopeSwitch: o,
      ...c
    } = u, d = fx(Hh, o);
    return r.jsx(oi.span, {
      "data-state": Gh(d.checked),
      "data-disabled": d.disabled ? "" : void 0,
      ...c,
      ref: s
    })
  });
Bh.displayName = Hh;
var dx = "SwitchBubbleInput",
  kh = w.forwardRef(({
    __scopeSwitch: u,
    control: s,
    checked: o,
    bubbles: c = !0,
    ...d
  }, h) => {
    const v = w.useRef(null),
      b = Ac(v, h),
      p = ux(o),
      g = rx(s);
    return w.useEffect(() => {
      const j = v.current;
      if (!j) return;
      const O = window.HTMLInputElement.prototype,
        C = Object.getOwnPropertyDescriptor(O, "checked").set;
      if (p !== o && C) {
        const M = new Event("click", {
          bubbles: c
        });
        C.call(j, o), j.dispatchEvent(M)
      }
    }, [p, o, c]), r.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o,
      ...d,
      tabIndex: -1,
      ref: b,
      style: {
        ...d.style,
        ...g,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    })
  });
kh.displayName = dx;

function Gh(u) {
  return u ? "checked" : "unchecked"
}
var mx = Dh,
  hx = Bh;

function gx({
  className: u,
  ...s
}) {
  return r.jsx(mx, {
    "data-slot": "switch",
    className: Et("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", u),
    ...s,
    children: r.jsx(hx, {
      "data-slot": "switch-thumb",
      className: Et("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
    })
  })
}
var px = "Label",
  qh = w.forwardRef((u, s) => r.jsx(oi.label, {
    ...u,
    ref: s,
    onMouseDown: o => {
      var d;
      o.target.closest("button, input, select, textarea") || ((d = u.onMouseDown) == null || d.call(u, o), !o.defaultPrevented && o.detail > 1 && o.preventDefault())
    }
  }));
qh.displayName = px;
var yx = qh;

function Jm({
  className: u,
  ...s
}) {
  return r.jsx(yx, {
    "data-slot": "label",
    className: Et("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", u),
    ...s
  })
}
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = u => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  xx = u => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, o, c) => c ? c.toUpperCase() : o.toLowerCase()),
  $m = u => {
    const s = xx(u);
    return s.charAt(0).toUpperCase() + s.slice(1)
  },
  Lh = (...u) => u.filter((s, o, c) => !!s && s.trim() !== "" && c.indexOf(s) === o).join(" ").trim(),
  bx = u => {
    for (const s in u)
      if (s.startsWith("aria-") || s === "role" || s === "title") return !0
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = w.forwardRef(({
  color: u = "currentColor",
  size: s = 24,
  strokeWidth: o = 2,
  absoluteStrokeWidth: c,
  className: d = "",
  children: h,
  iconNode: v,
  ...b
}, p) => w.createElement("svg", {
  ref: p,
  ...Sx,
  width: s,
  height: s,
  stroke: u,
  strokeWidth: c ? Number(o) * 24 / Number(s) : o,
  className: Lh("lucide", d),
  ...!h && !bx(b) && {
    "aria-hidden": "true"
  },
  ...b
}, [...v.map(([g, j]) => w.createElement(g, j)), ...Array.isArray(h) ? h : [h]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = (u, s) => {
  const o = w.forwardRef(({
    className: c,
    ...d
  }, h) => w.createElement(Nx, {
    ref: h,
    iconNode: s,
    className: Lh(`lucide-${vx($m(u))}`, `lucide-${u}`, c),
    ...d
  }));
  return o.displayName = $m(u), o
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = [
    ["path", {
      d: "m12 19-7-7 7-7",
      key: "1l729n"
    }],
    ["path", {
      d: "M19 12H5",
      key: "x3x0zl"
    }]
  ],
  Yh = Ie("arrow-left", jx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
    }]
  ],
  Ex = Ie("arrow-right", wx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = [
    ["path", {
      d: "M12 7v14",
      key: "1akyts"
    }],
    ["path", {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }]
  ],
  ii = Ie("book-open", Ax);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = [
    ["path", {
      d: "M8 2v4",
      key: "1cmpym"
    }],
    ["path", {
      d: "M16 2v4",
      key: "4m81vk"
    }],
    ["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      key: "1hopcy"
    }],
    ["path", {
      d: "M3 10h18",
      key: "8toen8"
    }]
  ],
  Rx = Ie("calendar", Tx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = [
    ["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]
  ],
  Mx = Ie("check", zx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [
    ["path", {
      d: "M21.801 10A10 10 0 1 1 17 3.335",
      key: "yps3ct"
    }],
    ["path", {
      d: "m9 11 3 3L22 4",
      key: "1pflzl"
    }]
  ],
  Xt = Ie("circle-check-big", _x);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = [
    ["rect", {
      width: "20",
      height: "14",
      x: "2",
      y: "5",
      rx: "2",
      key: "ynyp8z"
    }],
    ["line", {
      x1: "2",
      x2: "22",
      y1: "10",
      y2: "10",
      key: "1b3vmo"
    }]
  ],
  Ox = Ie("credit-card", Cx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = [
    ["path", {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }],
    ["path", {
      d: "M5 21h14",
      key: "11awu3"
    }]
  ],
  ui = Ie("crown", Ux);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = [
    ["path", {
      d: "M15 3h6v6",
      key: "1q9fwt"
    }],
    ["path", {
      d: "M10 14 21 3",
      key: "gplh6r"
    }],
    ["path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }]
  ],
  Hx = Ie("external-link", Dx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = [
    ["rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1"
    }],
    ["path", {
      d: "M7 11V7a5 5 0 0 1 9.9-1",
      key: "1mm8w8"
    }]
  ],
  kx = Ie("lock-open", Bx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gx = [
    ["rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1"
    }],
    ["path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4",
      key: "fwvmzm"
    }]
  ],
  gc = Ie("lock", Gx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = [
    ["polygon", {
      points: "6 3 20 12 6 21 6 3",
      key: "1oa8hb"
    }]
  ],
  Wm = Ie("play", qx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = [
    ["path", {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd"
    }]
  ],
  Yx = Ie("settings", Lx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = [
    ["path", {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }]
  ],
  pc = Ie("star", Vx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = [
    ["path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }],
    ["path", {
      d: "M12 9v4",
      key: "juzpu7"
    }],
    ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]
  ],
  rc = Ie("triangle-alert", Xx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = [
    ["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }],
    ["path", {
      d: "M16 3.128a4 4 0 0 1 0 7.744",
      key: "16gr8j"
    }],
    ["path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd"
    }],
    ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }]
  ],
  _u = Ie("users", Qx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zx = [
    ["path", {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }],
    ["path", {
      d: "M16 9a5 5 0 0 1 0 6",
      key: "1q6k2b"
    }],
    ["path", {
      d: "M19.364 18.364a9 9 0 0 0 0-12.728",
      key: "ijwkga"
    }]
  ],
  Vh = Ie("volume-2", Zx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kx = [
    ["path", {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }]
  ],
  Jx = Ie("zap", Kx),
  $x = () => {
    const {
      currentPlan: u,
      startCheckout: s,
      loading: o
    } = Du(), [c, d] = w.useState(!1), [h, v] = w.useState(null), b = async C => {
      if (C === "free") {
        alert("You are already on the free plan!");
        return
      }
      try {
        v(C), await s(C, "teacher@example.com")
      } catch (M) {
        console.error("Checkout error:", M), alert("Failed to start checkout. Please try again.")
      } finally {
        v(null)
      }
    }, p = () => c ? [Qt.free, Qt.basic, Qt.annual] : [Qt.free, Qt.basic, Qt.premium], g = C => {
      switch (C) {
        case "free":
          return r.jsx(ii, {
            className: "h-6 w-6"
          });
        case "basic":
          return r.jsx(_u, {
            className: "h-6 w-6"
          });
        case "premium":
          return r.jsx(ui, {
            className: "h-6 w-6"
          });
        case "annual":
          return r.jsx(pc, {
            className: "h-6 w-6"
          });
        default:
          return r.jsx(ii, {
            className: "h-6 w-6"
          })
      }
    }, j = C => {
      switch (C) {
        case "free":
          return "border-gray-200 bg-white";
        case "basic":
          return "border-blue-200 bg-blue-50";
        case "premium":
          return "border-purple-200 bg-purple-50";
        case "annual":
          return "border-yellow-200 bg-yellow-50";
        default:
          return "border-gray-200 bg-white"
      }
    }, O = C => {
      switch (C) {
        case "free":
          return "bg-gray-600 hover:bg-gray-700";
        case "basic":
          return "bg-blue-600 hover:bg-blue-700";
        case "premium":
          return "bg-purple-600 hover:bg-purple-700";
        case "annual":
          return "bg-yellow-600 hover:bg-yellow-700";
        default:
          return "bg-gray-600 hover:bg-gray-700"
      }
    }, T = av();
    return r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [r.jsxs("div", {
          className: "text-center mb-12",
          children: [r.jsxs(ni, {
            to: "/",
            className: "inline-flex items-center text-blue-600 hover:text-blue-800 mb-6",
            children: [r.jsx(Yh, {
              className: "h-4 w-4 mr-2"
            }), "Back to Home"]
          }), r.jsx("h1", {
            className: "text-5xl font-bold text-gray-900 mb-4",
            children: "Choose Your Teaching Plan"
          }), r.jsx("p", {
            className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto",
            children: "Unlock the full potential of phonics instruction with our teacher-friendly plans. Perfect for live Zoom classes and screen sharing."
          }), r.jsxs("div", {
            className: "flex items-center justify-center space-x-4 mb-8",
            children: [r.jsx(Jm, {
              htmlFor: "billing-toggle",
              className: "text-lg",
              children: "Monthly"
            }), r.jsx(gx, {
              id: "billing-toggle",
              checked: c,
              onCheckedChange: d
            }), r.jsx(Jm, {
              htmlFor: "billing-toggle",
              className: "text-lg",
              children: "Annual"
            }), c && r.jsxs(ct, {
              className: "bg-green-100 text-green-800 border-green-200",
              children: ["Save ", T.percentage, "%"]
            })]
          })]
        }), r.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
          children: p().map(C => r.jsxs(De, {
            className: `relative shadow-lg transition-all duration-200 hover:shadow-xl ${j(C.id)} ${C.popular?"ring-2 ring-blue-500 scale-105":""}`,
            children: [C.popular && r.jsx("div", {
              className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
              children: r.jsxs(ct, {
                className: "bg-blue-500 text-white px-4 py-1",
                children: [r.jsx(pc, {
                  className: "h-3 w-3 mr-1"
                }), "Most Popular"]
              })
            }), C.savings && r.jsx("div", {
              className: "absolute -top-4 right-4",
              children: r.jsxs(ct, {
                className: "bg-green-500 text-white px-3 py-1",
                children: ["Save ", C.savings]
              })
            }), r.jsxs(Ke, {
              className: "text-center pb-4",
              children: [r.jsx("div", {
                className: "flex justify-center mb-4",
                children: r.jsx("div", {
                  className: `p-3 rounded-full ${C.id==="free"?"bg-gray-100":C.id==="basic"?"bg-blue-100":C.id==="premium"?"bg-purple-100":"bg-yellow-100"}`,
                  children: g(C.id)
                })
              }), r.jsx(Je, {
                className: "text-2xl font-bold",
                children: C.name
              }), r.jsxs(Zt, {
                className: "text-lg",
                children: [r.jsx("span", {
                  className: "text-4xl font-bold text-gray-900",
                  children: ph(C.price, C.interval)
                }), C.price > 0 && r.jsxs("span", {
                  className: "text-gray-500 ml-2",
                  children: ["per ", C.interval]
                })]
              })]
            }), r.jsxs(He, {
              className: "space-y-6",
              children: [r.jsx("div", {
                className: "space-y-3",
                children: C.features.map((M, k) => r.jsxs("div", {
                  className: "flex items-start",
                  children: [r.jsx(Mx, {
                    className: "h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  }), r.jsx("span", {
                    className: "text-gray-700",
                    children: M
                  })]
                }, k))
              }), C.limitations.length > 0 && r.jsxs("div", {
                className: "border-t pt-4",
                children: [r.jsx("h4", {
                  className: "text-sm font-semibold text-gray-500 mb-2",
                  children: "Limitations:"
                }), r.jsx("div", {
                  className: "space-y-2",
                  children: C.limitations.map((M, k) => r.jsxs("div", {
                    className: "flex items-start",
                    children: [r.jsx("div", {
                      className: "w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"
                    }), r.jsx("span", {
                      className: "text-sm text-gray-600",
                      children: M
                    })]
                  }, k))
                })]
              }), r.jsx(_e, {
                onClick: () => b(C.id),
                disabled: o || h === C.id || u === C.id,
                className: `w-full py-3 text-lg font-semibold ${O(C.id)}`,
                children: h === C.id ? r.jsxs("div", {
                  className: "flex items-center",
                  children: [r.jsx("div", {
                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                  }), "Processing..."]
                }) : u === C.id ? "Current Plan" : C.id === "free" ? "Get Started Free" : `Upgrade to ${C.name}`
              }), C.id === "free" && r.jsx("p", {
                className: "text-xs text-center text-gray-500",
                children: "No credit card required"
              })]
            })]
          }, C.id))
        }), r.jsxs(De, {
          className: "shadow-lg",
          children: [r.jsxs(Ke, {
            children: [r.jsx(Je, {
              className: "text-2xl text-center",
              children: "Feature Comparison"
            }), r.jsx(Zt, {
              className: "text-center",
              children: "See what's included in each plan"
            })]
          }), r.jsx(He, {
            children: r.jsx("div", {
              className: "overflow-x-auto",
              children: r.jsxs("table", {
                className: "w-full",
                children: [r.jsx("thead", {
                  children: r.jsxs("tr", {
                    className: "border-b",
                    children: [r.jsx("th", {
                      className: "text-left py-4 px-4",
                      children: "Features"
                    }), r.jsx("th", {
                      className: "text-center py-4 px-4",
                      children: "Free"
                    }), r.jsx("th", {
                      className: "text-center py-4 px-4",
                      children: "Basic"
                    }), r.jsx("th", {
                      className: "text-center py-4 px-4",
                      children: "Premium"
                    })]
                  })
                }), r.jsxs("tbody", {
                  className: "space-y-2",
                  children: [r.jsxs("tr", {
                    className: "border-b",
                    children: [r.jsx("td", {
                      className: "py-4 px-4 font-medium",
                      children: "Phonics Groups"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "1 group"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "10 groups"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Unlimited"
                    })]
                  }), r.jsxs("tr", {
                    className: "border-b",
                    children: [r.jsx("td", {
                      className: "py-4 px-4 font-medium",
                      children: "Interactive Games"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Basic"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "All games"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Advanced games"
                    })]
                  }), r.jsxs("tr", {
                    className: "border-b",
                    children: [r.jsx("td", {
                      className: "py-4 px-4 font-medium",
                      children: "Progress Tracking"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "❌"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "✅"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "✅ Advanced"
                    })]
                  }), r.jsxs("tr", {
                    className: "border-b",
                    children: [r.jsx("td", {
                      className: "py-4 px-4 font-medium",
                      children: "Lesson Planning"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "❌"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Templates"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Advanced tools"
                    })]
                  }), r.jsxs("tr", {
                    className: "border-b",
                    children: [r.jsx("td", {
                      className: "py-4 px-4 font-medium",
                      children: "Support"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Community"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Email"
                    }), r.jsx("td", {
                      className: "text-center py-4 px-4",
                      children: "Priority"
                    })]
                  })]
                })]
              })
            })
          })]
        }), r.jsxs("div", {
          className: "mt-16 text-center",
          children: [r.jsx("h2", {
            className: "text-3xl font-bold text-gray-900 mb-8",
            children: "Frequently Asked Questions"
          }), r.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
            children: [r.jsxs("div", {
              className: "text-left",
              children: [r.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Can I change plans anytime?"
              }), r.jsx("p", {
                className: "text-gray-600",
                children: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              })]
            }), r.jsxs("div", {
              className: "text-left",
              children: [r.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Is there a free trial?"
              }), r.jsx("p", {
                className: "text-gray-600",
                children: "Our free plan gives you full access to Group 1 forever. Paid plans include a 14-day free trial."
              })]
            }), r.jsxs("div", {
              className: "text-left",
              children: [r.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Perfect for Zoom?"
              }), r.jsx("p", {
                className: "text-gray-600",
                children: "Absolutely! All our games are optimized for screen sharing during live Zoom classes."
              })]
            }), r.jsxs("div", {
              className: "text-left",
              children: [r.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Need help choosing?"
              }), r.jsx("p", {
                className: "text-gray-600",
                children: "Start with our free plan and upgrade when you need more phonics groups and features."
              })]
            })]
          })]
        })]
      })
    })
  },
  Wx = Tc("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });

function sc({
  className: u,
  variant: s,
  ...o
}) {
  return r.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: Et(Wx({
      variant: s
    }), u),
    ...o
  })
}

function cc({
  className: u,
  ...s
}) {
  return r.jsx("div", {
    "data-slot": "alert-description",
    className: Et("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", u),
    ...s
  })
}
const Px = () => {
  const {
    currentPlan: u,
    subscriptionStatus: s,
    billingCycleEnd: o,
    loading: c,
    error: d,
    openCustomerPortal: h,
    cancelCurrentSubscription: v,
    getDaysUntilRenewal: b,
    isSubscriptionActive: p,
    clearError: g
  } = Du(), [j, O] = w.useState(!1), [T, C] = w.useState(!1), M = $a(u), k = b(), Y = lv(u), G = async () => {
    try {
      C(!0), await h()
    } catch (P) {
      console.error("Portal error:", P)
    } finally {
      C(!1)
    }
  }, X = async () => {
    try {
      C(!0), await v(), O(!1)
    } catch (P) {
      console.error("Cancel error:", P)
    } finally {
      C(!1)
    }
  }, F = () => {
    switch (s) {
      case "active":
        return r.jsx(ct, {
          className: "bg-green-100 text-green-800",
          children: "Active"
        });
      case "trialing":
        return r.jsx(ct, {
          className: "bg-blue-100 text-blue-800",
          children: "Trial"
        });
      case "past_due":
        return r.jsx(ct, {
          className: "bg-yellow-100 text-yellow-800",
          children: "Past Due"
        });
      case "canceled":
        return r.jsx(ct, {
          className: "bg-red-100 text-red-800",
          children: "Canceled"
        });
      default:
        return r.jsx(ct, {
          className: "bg-gray-100 text-gray-800",
          children: s
        })
    }
  }, ne = () => {
    switch (u) {
      case "basic":
        return r.jsx(Ox, {
          className: "h-8 w-8 text-blue-500"
        });
      case "premium":
      case "annual":
        return r.jsx(ui, {
          className: "h-8 w-8 text-purple-500"
        });
      default:
        return r.jsx(Jx, {
          className: "h-8 w-8 text-gray-500"
        })
    }
  };
  return r.jsx("div", {
    className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
    children: r.jsxs("div", {
      className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [r.jsxs("div", {
        className: "mb-8",
        children: [r.jsxs(ni, {
          to: "/dashboard",
          className: "inline-flex items-center text-blue-600 hover:text-blue-800 mb-4",
          children: [r.jsx(Yh, {
            className: "h-4 w-4 mr-2"
          }), "Back to Dashboard"]
        }), r.jsx("h1", {
          className: "text-4xl font-bold text-gray-900 mb-2",
          children: "Subscription Management"
        }), r.jsx("p", {
          className: "text-xl text-gray-600",
          children: "Manage your Ladder Lessons subscription and billing"
        })]
      }), d && r.jsxs(sc, {
        className: "mb-6 border-red-200 bg-red-50",
        children: [r.jsx(rc, {
          className: "h-4 w-4 text-red-600"
        }), r.jsxs(cc, {
          className: "text-red-800",
          children: [d, r.jsx(_e, {
            variant: "link",
            className: "p-0 h-auto text-red-600 ml-2",
            onClick: g,
            children: "Dismiss"
          })]
        })]
      }), r.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        children: [r.jsxs("div", {
          className: "lg:col-span-2 space-y-6",
          children: [r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsxs(Je, {
                className: "flex items-center",
                children: [ne(), r.jsx("span", {
                  className: "ml-3",
                  children: "Current Plan"
                })]
              })
            }), r.jsxs(He, {
              className: "space-y-4",
              children: [r.jsxs("div", {
                className: "flex items-center justify-between",
                children: [r.jsxs("div", {
                  children: [r.jsx("h3", {
                    className: "text-2xl font-bold",
                    children: M.name
                  }), r.jsx("p", {
                    className: "text-gray-600",
                    children: M.price === 0 ? "Free forever" : ph(M.price, M.interval)
                  })]
                }), F()]
              }), r.jsxs("div", {
                className: "border-t pt-4",
                children: [r.jsx("h4", {
                  className: "font-semibold mb-3",
                  children: "What's included:"
                }), r.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                  children: M.features.slice(0, 6).map((P, ve) => r.jsxs("div", {
                    className: "flex items-center text-sm",
                    children: [r.jsx(Xt, {
                      className: "h-4 w-4 text-green-500 mr-2 flex-shrink-0"
                    }), r.jsx("span", {
                      className: "text-gray-700",
                      children: P
                    })]
                  }, ve))
                }), M.features.length > 6 && r.jsxs("p", {
                  className: "text-sm text-gray-500 mt-2",
                  children: ["+", M.features.length - 6, " more features"]
                })]
              }), u !== "free" && p() && r.jsx("div", {
                className: "border-t pt-4",
                children: r.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [r.jsxs("div", {
                    className: "flex items-center",
                    children: [r.jsx(Rx, {
                      className: "h-4 w-4 text-gray-500 mr-2"
                    }), r.jsx("span", {
                      className: "text-sm text-gray-600",
                      children: k !== null ? k > 0 ? `Renews in ${k} days` : "Renews today" : "Billing cycle information unavailable"
                    })]
                  }), o && r.jsx("span", {
                    className: "text-sm text-gray-500",
                    children: o.toLocaleDateString()
                  })]
                })
              })]
            })]
          }), u !== "free" && r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsxs(Ke, {
              children: [r.jsxs(Je, {
                className: "flex items-center",
                children: [r.jsx(Yx, {
                  className: "h-5 w-5 mr-2"
                }), "Billing Management"]
              }), r.jsx(Zt, {
                children: "Manage your payment methods and billing information"
              })]
            }), r.jsxs(He, {
              className: "space-y-4",
              children: [r.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-3",
                children: [r.jsxs(_e, {
                  onClick: G,
                  disabled: T,
                  className: "flex items-center",
                  children: [r.jsx(Hx, {
                    className: "h-4 w-4 mr-2"
                  }), "Manage Billing"]
                }), r.jsx(_e, {
                  variant: "outline",
                  onClick: () => O(!0),
                  disabled: T || s === "canceled",
                  className: "text-red-600 border-red-200 hover:bg-red-50",
                  children: "Cancel Subscription"
                })]
              }), s === "canceled" && r.jsxs(sc, {
                className: "border-yellow-200 bg-yellow-50",
                children: [r.jsx(rc, {
                  className: "h-4 w-4 text-yellow-600"
                }), r.jsxs(cc, {
                  className: "text-yellow-800",
                  children: ["Your subscription has been canceled. You'll retain access until ", o == null ? void 0 : o.toLocaleDateString(), "."]
                })]
              })]
            })]
          }), j && r.jsxs(De, {
            className: "shadow-lg border-red-200",
            children: [r.jsxs(Ke, {
              children: [r.jsx(Je, {
                className: "text-red-600",
                children: "Cancel Subscription"
              }), r.jsx(Zt, {
                children: "Are you sure you want to cancel your subscription?"
              })]
            }), r.jsxs(He, {
              className: "space-y-4",
              children: [r.jsxs(sc, {
                className: "border-red-200 bg-red-50",
                children: [r.jsx(rc, {
                  className: "h-4 w-4 text-red-600"
                }), r.jsx(cc, {
                  className: "text-red-800",
                  children: "You'll lose access to premium features at the end of your billing cycle. Your account will be downgraded to the free plan."
                })]
              }), r.jsxs("div", {
                className: "flex space-x-3",
                children: [r.jsx(_e, {
                  variant: "outline",
                  onClick: () => O(!1),
                  disabled: T,
                  children: "Keep Subscription"
                }), r.jsx(_e, {
                  onClick: X,
                  disabled: T,
                  className: "bg-red-600 hover:bg-red-700",
                  children: T ? "Canceling..." : "Yes, Cancel"
                })]
              })]
            })]
          })]
        }), r.jsxs("div", {
          className: "space-y-6",
          children: [Y && r.jsxs(De, {
            className: "shadow-lg border-blue-200 bg-blue-50",
            children: [r.jsx(Ke, {
              children: r.jsx(Je, {
                className: "text-blue-800",
                children: "Upgrade Available"
              })
            }), r.jsxs(He, {
              children: [r.jsxs("p", {
                className: "text-blue-700 mb-4",
                children: ["Unlock more phonics groups and advanced features with our ", $a(Y).name, " plan."]
              }), r.jsx(ni, {
                to: "/pricing",
                children: r.jsx(_e, {
                  className: "w-full bg-blue-600 hover:bg-blue-700",
                  children: "View Plans"
                })
              })]
            })]
          }), r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsx(Je, {
                children: "Usage This Month"
              })
            }), r.jsxs(He, {
              className: "space-y-4",
              children: [r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [r.jsx("span", {
                  className: "text-sm text-gray-600",
                  children: "Groups Accessed"
                }), r.jsxs("span", {
                  className: "font-semibold",
                  children: [u === "free" ? "1" : u === "basic" ? "8" : "15", " / ", M.maxGroups === -1 ? "∞" : M.maxGroups]
                })]
              }), r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [r.jsx("span", {
                  className: "text-sm text-gray-600",
                  children: "Games Played"
                }), r.jsx("span", {
                  className: "font-semibold",
                  children: "47"
                })]
              }), r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [r.jsx("span", {
                  className: "text-sm text-gray-600",
                  children: "Students Taught"
                }), r.jsx("span", {
                  className: "font-semibold",
                  children: "23"
                })]
              })]
            })]
          }), r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsx(Je, {
                children: "Need Help?"
              })
            }), r.jsxs(He, {
              className: "space-y-3",
              children: [r.jsx("p", {
                className: "text-sm text-gray-600",
                children: u === "free" ? "Get help from our community forum and documentation." : u === "basic" ? "Email support is available for Basic plan users." : "Priority support via chat, email, and phone for Premium users."
              }), r.jsxs("div", {
                className: "space-y-2",
                children: [r.jsx(_e, {
                  variant: "outline",
                  size: "sm",
                  className: "w-full",
                  children: "Help Center"
                }), u !== "free" && r.jsx(_e, {
                  variant: "outline",
                  size: "sm",
                  className: "w-full",
                  children: "Contact Support"
                })]
              })]
            })]
          })]
        })]
      })]
    })
  })
};
var zc = "Progress",
  Mc = 100,
  [Fx, hb] = Oh(zc),
  [Ix, eb] = Fx(zc),
  Xh = w.forwardRef((u, s) => {
    const {
      __scopeProgress: o,
      value: c = null,
      max: d,
      getValueLabel: h = tb,
      ...v
    } = u;
    (d || d === 0) && !Pm(d) && console.error(lb(`${d}`, "Progress"));
    const b = Pm(d) ? d : Mc;
    c !== null && !Fm(c, b) && console.error(ab(`${c}`, "Progress"));
    const p = Fm(c, b) ? c : null,
      g = Cu(p) ? h(p, b) : void 0;
    return r.jsx(Ix, {
      scope: o,
      value: p,
      max: b,
      children: r.jsx(oi.div, {
        "aria-valuemax": b,
        "aria-valuemin": 0,
        "aria-valuenow": Cu(p) ? p : void 0,
        "aria-valuetext": g,
        role: "progressbar",
        "data-state": Kh(p, b),
        "data-value": p ? ? void 0,
        "data-max": b,
        ...v,
        ref: s
      })
    })
  });
Xh.displayName = zc;
var Qh = "ProgressIndicator",
  Zh = w.forwardRef((u, s) => {
    const {
      __scopeProgress: o,
      ...c
    } = u, d = eb(Qh, o);
    return r.jsx(oi.div, {
      "data-state": Kh(d.value, d.max),
      "data-value": d.value ? ? void 0,
      "data-max": d.max,
      ...c,
      ref: s
    })
  });
Zh.displayName = Qh;

function tb(u, s) {
  return `${Math.round(u/s*100)}%`
}

function Kh(u, s) {
  return u == null ? "indeterminate" : u === s ? "complete" : "loading"
}

function Cu(u) {
  return typeof u == "number"
}

function Pm(u) {
  return Cu(u) && !isNaN(u) && u > 0
}

function Fm(u, s) {
  return Cu(u) && !isNaN(u) && u <= s && u >= 0
}

function lb(u, s) {
  return `Invalid prop \`max\` of value \`${u}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Mc}\`.`
}

function ab(u, s) {
  return `Invalid prop \`value\` of value \`${u}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Mc} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var nb = Xh,
  ib = Zh;

function ub({
  className: u,
  value: s,
  ...o
}) {
  return r.jsx(nb, {
    "data-slot": "progress",
    className: Et("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", u),
    ...o,
    children: r.jsx(ib, {
      "data-slot": "progress-indicator",
      className: "bg-primary h-full w-full flex-1 transition-all",
      style: {
        transform: `translateX(-${100-(s||0)}%)`
      }
    })
  })
}
const rb = () => r.jsx("div", {
    className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
    children: r.jsxs("div", {
      className: "max-w-4xl mx-auto px-4 text-center",
      children: [r.jsx("h1", {
        className: "text-5xl font-bold text-gray-900 mb-6",
        children: "Ladder Lessons"
      }), r.jsx("p", {
        className: "text-xl text-gray-600 mb-8",
        children: "Interactive Phonics for Teachers"
      }), r.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 mb-12",
        children: [r.jsx("h2", {
          className: "text-3xl font-bold mb-4",
          children: "Perfect for Zoom Classes"
        }), r.jsx("p", {
          className: "text-lg text-gray-600 mb-6",
          children: "Engage young learners with progressive phonics games designed for teacher-led instruction."
        }), r.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
          children: [r.jsxs("div", {
            className: "bg-blue-50 p-6 rounded-lg",
            children: [r.jsx(_u, {
              className: "h-8 w-8 text-blue-600 mx-auto mb-3"
            }), r.jsx("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Teacher-Led Games"
            }), r.jsx("p", {
              className: "text-gray-600",
              children: "Perfect for screen sharing during live classes"
            })]
          }), r.jsxs("div", {
            className: "bg-green-50 p-6 rounded-lg",
            children: [r.jsx(ii, {
              className: "h-8 w-8 text-green-600 mx-auto mb-3"
            }), r.jsx("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Progressive Learning"
            }), r.jsx("p", {
              className: "text-gray-600",
              children: "5+ phonics groups with systematic instruction"
            })]
          }), r.jsxs("div", {
            className: "bg-purple-50 p-6 rounded-lg",
            children: [r.jsx(ui, {
              className: "h-8 w-8 text-purple-600 mx-auto mb-3"
            }), r.jsx("h3", {
              className: "text-lg font-semibold mb-2",
              children: "Professional Tools"
            }), r.jsx("p", {
              className: "text-gray-600",
              children: "Progress tracking and lesson planning"
            })]
          })]
        }), r.jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [r.jsx("a", {
            href: "/pricing",
            children: r.jsxs(_e, {
              size: "lg",
              className: "bg-blue-600 hover:bg-blue-700",
              children: ["Start Free Trial", r.jsx(Ex, {
                className: "h-4 w-4 ml-2"
              })]
            })
          }), r.jsx("a", {
            href: "/dashboard",
            children: r.jsx(_e, {
              variant: "outline",
              size: "lg",
              children: "View Demo"
            })
          })]
        })]
      }), r.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
        children: [r.jsxs(De, {
          className: "border-gray-200",
          children: [r.jsxs(Ke, {
            className: "text-center",
            children: [r.jsx(ii, {
              className: "h-8 w-8 text-gray-500 mx-auto mb-2"
            }), r.jsx(Je, {
              children: "Free Forever"
            }), r.jsx(Zt, {
              className: "text-2xl font-bold",
              children: "$0"
            })]
          }), r.jsx(He, {
            children: r.jsxs("ul", {
              className: "space-y-2 text-sm",
              children: [r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "1 Phonics Group"]
              }), r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "Basic Games"]
              }), r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "Zoom Optimized"]
              })]
            })
          })]
        }), r.jsxs(De, {
          className: "border-blue-200 bg-blue-50 relative",
          children: [r.jsxs(ct, {
            className: "absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500",
            children: [r.jsx(pc, {
              className: "h-3 w-3 mr-1"
            }), "Popular"]
          }), r.jsxs(Ke, {
            className: "text-center",
            children: [r.jsx(_u, {
              className: "h-8 w-8 text-blue-500 mx-auto mb-2"
            }), r.jsx(Je, {
              children: "Basic Teacher"
            }), r.jsx(Zt, {
              className: "text-2xl font-bold",
              children: "$9.99/mo"
            })]
          }), r.jsx(He, {
            children: r.jsxs("ul", {
              className: "space-y-2 text-sm",
              children: [r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "4 Phonics Groups"]
              }), r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "All Games"]
              }), r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "Progress Tracking"]
              })]
            })
          })]
        }), r.jsxs(De, {
          className: "border-purple-200 bg-purple-50",
          children: [r.jsxs(Ke, {
            className: "text-center",
            children: [r.jsx(ui, {
              className: "h-8 w-8 text-purple-500 mx-auto mb-2"
            }), r.jsx(Je, {
              children: "Premium Teacher"
            }), r.jsx(Zt, {
              className: "text-2xl font-bold",
              children: "$19.99/mo"
            })]
          }), r.jsx(He, {
            children: r.jsxs("ul", {
              className: "space-y-2 text-sm",
              children: [r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "All 5+ Groups"]
              }), r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "Advanced Analytics"]
              }), r.jsxs("li", {
                className: "flex items-center",
                children: [r.jsx(Xt, {
                  className: "h-4 w-4 text-green-500 mr-2"
                }), "Priority Support"]
              })]
            })
          })]
        })]
      })]
    })
  }),
  sb = () => {
    const {
      currentPlan: u,
      getCurrentPlan: s
    } = Du(), o = s();
    wc(u);
    const c = Object.values(jc),
      d = ov(u);
    return r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [r.jsxs("div", {
          className: "flex justify-between items-center mb-8",
          children: [r.jsx("h1", {
            className: "text-4xl font-bold text-gray-900",
            children: "Teacher Dashboard"
          }), r.jsxs("div", {
            className: "flex space-x-3",
            children: [r.jsx("a", {
              href: "/subscription",
              children: r.jsx(_e, {
                variant: "outline",
                children: "Manage Subscription"
              })
            }), r.jsx("a", {
              href: "/pricing",
              children: r.jsx(_e, {
                children: "Upgrade Plan"
              })
            })]
          })]
        }), r.jsx(De, {
          className: "mb-8 border-blue-200 bg-blue-50",
          children: r.jsxs(He, {
            className: "p-6",
            children: [r.jsxs("div", {
              className: "flex items-center justify-between mb-4",
              children: [r.jsxs("div", {
                className: "flex items-center",
                children: [u === "free" ? r.jsx(ii, {
                  className: "h-6 w-6 text-blue-600 mr-3"
                }) : u === "basic" ? r.jsx(_u, {
                  className: "h-6 w-6 text-blue-600 mr-3"
                }) : r.jsx(ui, {
                  className: "h-6 w-6 text-purple-600 mr-3"
                }), r.jsxs("div", {
                  children: [r.jsx("h3", {
                    className: "font-semibold",
                    children: o.name
                  }), r.jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: ["Access to ", d.maxGroups === -1 ? "unlimited" : d.maxGroups, " phonics groups"]
                  })]
                })]
              }), r.jsx(ct, {
                className: "bg-green-100 text-green-800",
                children: "Active"
              })]
            }), r.jsxs("div", {
              className: "mb-4",
              children: [r.jsxs("div", {
                className: "flex justify-between text-sm text-gray-600 mb-2",
                children: [r.jsx("span", {
                  children: "Groups Accessed"
                }), r.jsxs("span", {
                  children: [d.groupsAccessed, " / ", d.maxGroups === -1 ? "∞" : d.maxGroups]
                })]
              }), r.jsx(ub, {
                value: d.maxGroups === -1 ? 100 : d.groupsAccessed / d.maxGroups * 100,
                className: "h-2"
              })]
            }), r.jsxs("div", {
              className: "grid grid-cols-3 gap-4 text-center",
              children: [r.jsxs("div", {
                children: [r.jsx("div", {
                  className: "text-2xl font-bold text-blue-600",
                  children: d.gamesPlayed
                }), r.jsx("div", {
                  className: "text-xs text-gray-600",
                  children: "Games Played"
                })]
              }), r.jsxs("div", {
                children: [r.jsx("div", {
                  className: "text-2xl font-bold text-green-600",
                  children: d.studentsTaught
                }), r.jsx("div", {
                  className: "text-xs text-gray-600",
                  children: "Students Taught"
                })]
              }), r.jsxs("div", {
                children: [r.jsxs("div", {
                  className: "text-2xl font-bold text-purple-600",
                  children: [d.hoursUsed, "h"]
                }), r.jsx("div", {
                  className: "text-xs text-gray-600",
                  children: "Hours Used"
                })]
              })]
            })]
          })
        }), r.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: c.map(h => {
            const v = vh(h.id, u);
            return r.jsxs(De, {
              className: `shadow-lg transition-all duration-200 hover:shadow-xl ${v?"border-green-200 bg-white":"border-gray-200 bg-gray-50 opacity-75"}`,
              children: [r.jsxs(Ke, {
                children: [r.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [r.jsxs("div", {
                    className: "flex items-center",
                    children: [v ? r.jsx(kx, {
                      className: "h-5 w-5 text-green-500 mr-2"
                    }) : r.jsx(gc, {
                      className: "h-5 w-5 text-gray-400 mr-2"
                    }), r.jsx(Je, {
                      className: "text-lg",
                      children: h.name
                    })]
                  }), r.jsxs(ct, {
                    variant: v ? "default" : "secondary",
                    children: ["Level ", h.difficulty]
                  })]
                }), r.jsxs(Zt, {
                  children: [r.jsx("div", {
                    className: "font-semibold text-lg",
                    children: h.title
                  }), r.jsx("div", {
                    className: "text-sm",
                    children: h.description
                  })]
                })]
              }), r.jsxs(He, {
                children: [r.jsx("div", {
                  className: "flex justify-center space-x-2 mb-4",
                  children: h.letters.map(b => r.jsx("div", {
                    className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",
                    children: r.jsx("span", {
                      className: "text-xl font-bold text-blue-600",
                      children: b.letter.toUpperCase()
                    })
                  }, b.letter))
                }), v ? r.jsx("a", {
                  href: `/group/${h.id}`,
                  children: r.jsx(_e, {
                    className: "w-full bg-blue-500 hover:bg-blue-600",
                    children: "Start Teaching"
                  })
                }) : r.jsx("a", {
                  href: "/pricing",
                  children: r.jsxs(_e, {
                    variant: "outline",
                    className: "w-full",
                    children: [r.jsx(gc, {
                      className: "h-4 w-4 mr-2"
                    }), "Upgrade to Access"]
                  })
                }), r.jsxs("div", {
                  className: "text-xs text-center text-gray-500 mt-2",
                  children: ["Requires: ", h.requiredPlan === "free" ? "Free Plan" : h.requiredPlan === "basic" ? "Basic Plan" : "Premium Plan"]
                })]
              })]
            }, h.id)
          })
        })]
      })
    })
  },
  cb = () => {
    const {
      currentPlan: u
    } = Du(), s = window.location.pathname.split("/")[2], o = Hu(s);
    return o ? vh(s, u) ? r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [r.jsxs("div", {
          className: "flex items-center justify-between mb-8",
          children: [r.jsxs("div", {
            children: [r.jsxs("h1", {
              className: "text-4xl font-bold text-gray-900",
              children: [o.name, ": ", o.title]
            }), r.jsx("p", {
              className: "text-xl text-gray-600",
              children: o.description
            })]
          }), r.jsxs(ct, {
            className: "bg-green-100 text-green-800",
            children: ["Level ", o.difficulty]
          })]
        }), r.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",
          children: [r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsxs(Je, {
                className: "flex items-center",
                children: [r.jsx(Wm, {
                  className: "h-5 w-5 mr-2"
                }), "Phonics Songs"]
              })
            }), r.jsx(He, {
              children: r.jsx("div", {
                className: "space-y-3",
                children: o.songs.map(d => r.jsxs("div", {
                  className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                  children: [r.jsxs("div", {
                    children: [r.jsx("span", {
                      className: "font-semibold",
                      children: d.title
                    }), r.jsx("div", {
                      className: "text-sm text-gray-600",
                      children: d.duration
                    })]
                  }), r.jsx(_e, {
                    size: "sm",
                    onClick: () => Ec(d.audioUrl),
                    className: "bg-blue-500 hover:bg-blue-600",
                    children: r.jsx(Wm, {
                      className: "h-4 w-4"
                    })
                  })]
                }, d.id))
              })
            })]
          }), r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsxs(Je, {
                className: "flex items-center",
                children: [r.jsx(Vh, {
                  className: "h-5 w-5 mr-2"
                }), "Sound Pronunciation"]
              })
            }), r.jsx(He, {
              children: r.jsx("div", {
                className: "grid grid-cols-3 gap-4",
                children: o.letters.map(d => r.jsxs(_e, {
                  variant: "outline",
                  className: "h-20 flex flex-col hover:bg-orange-50",
                  onClick: () => cv(d.letter, d.ipa),
                  children: [r.jsx("span", {
                    className: "text-2xl font-bold",
                    children: d.letter.toUpperCase()
                  }), r.jsx("span", {
                    className: "text-sm",
                    children: d.ipa
                  })]
                }, d.letter))
              })
            })]
          })]
        }), r.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsxs(Ke, {
              children: [r.jsx(Je, {
                children: "Matching Game"
              }), r.jsx(Zt, {
                children: "Connect letters with images"
              })]
            }), r.jsxs(He, {
              children: [r.jsxs("div", {
                className: "mb-4",
                children: [r.jsx("div", {
                  className: "text-sm text-gray-600 mb-2",
                  children: "Preview:"
                }), r.jsx("div", {
                  className: "flex space-x-2",
                  children: o.matchingPairs.slice(0, 3).map(d => r.jsxs("div", {
                    className: "text-center",
                    children: [r.jsx("div", {
                      className: "text-2xl",
                      children: d.image
                    }), r.jsx("div", {
                      className: "text-xs",
                      children: d.word
                    })]
                  }, d.letter))
                })]
              }), r.jsx("a", {
                href: `/group/${o.id}/matching`,
                children: r.jsx(_e, {
                  className: "w-full bg-blue-500 hover:bg-blue-600",
                  children: "Start Matching Game"
                })
              })]
            })]
          }), r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsxs(Ke, {
              children: [r.jsx(Je, {
                children: "Spelling Practice"
              }), r.jsx(Zt, {
                children: "Build words with letter tiles"
              })]
            }), r.jsxs(He, {
              children: [r.jsxs("div", {
                className: "mb-4",
                children: [r.jsx("div", {
                  className: "text-sm text-gray-600 mb-2",
                  children: "Sample words:"
                }), r.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: o.spellingWords.slice(0, 3).map(d => r.jsx(ct, {
                    variant: "outline",
                    children: d.word
                  }, d.word))
                })]
              }), r.jsx("a", {
                href: `/group/${o.id}/spelling`,
                children: r.jsx(_e, {
                  className: "w-full bg-orange-500 hover:bg-orange-600",
                  children: "Start Spelling Game"
                })
              })]
            })]
          })]
        })]
      })
    }) : r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-4xl mx-auto px-4 text-center",
        children: [r.jsx(gc, {
          className: "h-16 w-16 text-gray-400 mx-auto mb-4"
        }), r.jsx("h1", {
          className: "text-4xl font-bold text-gray-900 mb-4",
          children: "Upgrade Required"
        }), r.jsxs("p", {
          className: "text-xl text-gray-600 mb-8",
          children: ["This phonics group requires a ", o.requiredPlan, " plan or higher."]
        }), r.jsx("a", {
          href: "/pricing",
          children: r.jsx(_e, {
            size: "lg",
            children: "Upgrade Now"
          })
        })]
      })
    }) : r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-4xl mx-auto px-4 text-center",
        children: [r.jsx("h1", {
          className: "text-4xl font-bold text-gray-900 mb-4",
          children: "Group Not Found"
        }), r.jsx("p", {
          className: "text-xl text-gray-600 mb-8",
          children: "The requested phonics group could not be found."
        }), r.jsx("a", {
          href: "/dashboard",
          children: r.jsx(_e, {
            children: "Back to Dashboard"
          })
        })]
      })
    })
  },
  ob = () => {
    const u = window.location.pathname.split("/")[2],
      s = Hu(u);
    return s ? r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [r.jsxs("div", {
          className: "flex items-center justify-between mb-8",
          children: [r.jsx("h1", {
            className: "text-4xl font-bold text-gray-900",
            children: "Matching Game"
          }), r.jsxs(ct, {
            className: "bg-blue-100 text-blue-800",
            children: [s.name, ": ", s.title]
          })]
        }), r.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsx(Je, {
                children: "Letters"
              })
            }), r.jsx(He, {
              children: r.jsx("div", {
                className: "grid grid-cols-3 gap-4",
                children: s.letters.map(o => r.jsx(_e, {
                  variant: "outline",
                  className: "h-24 text-3xl font-bold hover:bg-blue-100",
                  children: o.letter.toUpperCase()
                }, o.letter))
              })
            })]
          }), r.jsxs(De, {
            className: "shadow-lg",
            children: [r.jsx(Ke, {
              children: r.jsx(Je, {
                children: "Images"
              })
            }), r.jsx(He, {
              children: r.jsx("div", {
                className: "grid grid-cols-3 gap-4",
                children: s.matchingPairs.map(o => r.jsxs(_e, {
                  variant: "outline",
                  className: "h-24 flex flex-col hover:bg-orange-100",
                  onClick: () => Ec(o.audioUrl),
                  children: [r.jsx("div", {
                    className: "text-2xl mb-1",
                    children: o.image
                  }), r.jsx("div", {
                    className: "text-sm font-semibold",
                    children: o.word
                  })]
                }, o.word))
              })
            })]
          })]
        }), r.jsx("div", {
          className: "mt-8 text-center",
          children: r.jsx(De, {
            className: "shadow-lg bg-yellow-50 border-yellow-200",
            children: r.jsxs(He, {
              className: "p-6",
              children: [r.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "How to Play"
              }), r.jsx("p", {
                className: "text-gray-600",
                children: "Click a letter, then click the matching image! Perfect for teacher-led instruction during Zoom classes."
              })]
            })
          })
        })]
      })
    }) : r.jsx("div", {
      children: "Group not found"
    })
  },
  fb = () => {
    const u = window.location.pathname.split("/")[2],
      s = Hu(u);
    if (!s) return r.jsx("div", {
      children: "Group not found"
    });
    const o = s.spellingWords[0];
    return r.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8",
      children: r.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [r.jsxs("div", {
          className: "flex items-center justify-between mb-8",
          children: [r.jsx("h1", {
            className: "text-4xl font-bold text-gray-900",
            children: "Spelling Practice"
          }), r.jsxs(ct, {
            className: "bg-orange-100 text-orange-800",
            children: [s.name, ": ", s.title]
          })]
        }), r.jsx(De, {
          className: "shadow-lg mb-8",
          children: r.jsxs(He, {
            className: "p-8",
            children: [r.jsxs("h3", {
              className: "text-xl font-bold mb-4 text-center",
              children: ["Spell this word: ", o.word.toUpperCase()]
            }), r.jsx("div", {
              className: "flex justify-center mb-6",
              children: r.jsx("div", {
                className: "bg-gray-200 w-32 h-32 rounded-lg flex items-center justify-center",
                children: r.jsx("span", {
                  className: "text-4xl",
                  children: o.image
                })
              })
            }), r.jsx("div", {
              className: "flex justify-center mb-6",
              children: r.jsx("div", {
                className: "flex space-x-2",
                children: o.letters.map((c, d) => r.jsx("div", {
                  className: "w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50",
                  children: r.jsx("span", {
                    className: "text-2xl font-bold text-orange-600",
                    children: "_"
                  })
                }, d))
              })
            }), r.jsx("div", {
              className: "text-center",
              children: r.jsxs(_e, {
                onClick: () => Ec(o.audioUrl),
                variant: "outline",
                className: "mb-4",
                children: [r.jsx(Vh, {
                  className: "h-4 w-4 mr-2"
                }), "Hear the Word"]
              })
            })]
          })
        }), r.jsxs(De, {
          className: "shadow-lg",
          children: [r.jsx(Ke, {
            children: r.jsx(Je, {
              children: "Available Letters"
            })
          }), r.jsx(He, {
            children: r.jsx("div", {
              className: "grid grid-cols-4 md:grid-cols-8 gap-3",
              children: [...s.letters.map(c => c.letter), "b", "f", "h", "j", "l"].map(c => r.jsx(_e, {
                variant: "outline",
                className: "h-16 text-xl font-bold hover:bg-gray-100",
                children: c.toUpperCase()
              }, c))
            })
          })]
        }), r.jsx("div", {
          className: "mt-8 text-center",
          children: r.jsx(De, {
            className: "shadow-lg bg-green-50 border-green-200",
            children: r.jsxs(He, {
              className: "p-6",
              children: [r.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Teacher Instructions"
              }), r.jsx("p", {
                className: "text-gray-600",
                children: "Click the letters in order to spell the word. Students watch and learn through your demonstration!"
              })]
            })
          })
        })]
      })
    })
  };

function db() {
  return r.jsx(rv, {
    children: r.jsx(Xy, {
      children: r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [r.jsx("nav", {
          className: "bg-white shadow-sm border-b border-gray-200",
          children: r.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 h-16 flex justify-between items-center",
            children: [r.jsx("a", {
              href: "/",
              className: "text-xl font-bold text-gray-900",
              children: "Ladder Lessons"
            }), r.jsxs("div", {
              className: "space-x-4",
              children: [r.jsx("a", {
                href: "/pricing",
                className: "text-gray-600 hover:text-gray-900",
                children: "Pricing"
              }), r.jsx("a", {
                href: "/dashboard",
                className: "text-gray-600 hover:text-gray-900",
                children: "Dashboard"
              }), r.jsx("a", {
                href: "/test",
                className: "text-gray-600 hover:text-gray-900",
                children: "Test"
              })]
            })]
          })
        }), r.jsxs(by, {
          children: [r.jsx(fl, {
            path: "/",
            element: r.jsx(rb, {})
          }), r.jsx(fl, {
            path: "/pricing",
            element: r.jsx($x, {})
          }), r.jsx(fl, {
            path: "/subscription",
            element: r.jsx(Px, {})
          }), r.jsx(fl, {
            path: "/dashboard",
            element: r.jsx(sb, {})
          }), r.jsx(fl, {
            path: "/group/:groupId",
            element: r.jsx(cb, {})
          }), r.jsx(fl, {
            path: "/group/:groupId/matching",
            element: r.jsx(ob, {})
          }), r.jsx(fl, {
            path: "/group/:groupId/spelling",
            element: r.jsx(fb, {})
          }), r.jsx(fl, {
            path: "/test",
            element: r.jsx(fv, {})
          })]
        })]
      })
    })
  })
}
Rp.createRoot(document.getElementById("root")).render(r.jsx(w.StrictMode, {
  children: r.jsx(db, {})
}));
