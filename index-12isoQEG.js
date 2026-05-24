var Ec = (e) => {
  throw TypeError(e);
};
var xg = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var wl = (e, t, n) => t.has(e) || Ec("Cannot " + n);
var N = (e, t, n) => (
    wl(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ie = (e, t, n) =>
    t.has(e)
      ? Ec("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  X = (e, t, n, r) => (
    wl(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Ae = (e, t, n) => (wl(e, t, "access private method"), n);
var ki = (e, t, n, r) => ({
  set _(o) {
    X(e, t, o, n);
  },
  get _() {
    return N(e, t, r);
  },
});
var PE = xg((_E, wi) => {
  function Sg(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
          if (o !== "default" && !(o in e)) {
            const i = Object.getOwnPropertyDescriptor(r, o);
            i &&
              Object.defineProperty(
                e,
                o,
                i.get ? i : { enumerable: !0, get: () => r[o] },
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
    new MutationObserver((o) => {
      for (const i of o)
        if (i.type === "childList")
          for (const s of i.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const i = {};
      return (
        o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (i.credentials = "include")
          : o.crossOrigin === "anonymous"
            ? (i.credentials = "omit")
            : (i.credentials = "same-origin"),
        i
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  function kf(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var bf = { exports: {} },
    $s = {},
    Pf = { exports: {} },
    te = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var di = Symbol.for("react.element"),
    Eg = Symbol.for("react.portal"),
    Cg = Symbol.for("react.fragment"),
    kg = Symbol.for("react.strict_mode"),
    bg = Symbol.for("react.profiler"),
    Pg = Symbol.for("react.provider"),
    Tg = Symbol.for("react.context"),
    Ng = Symbol.for("react.forward_ref"),
    Rg = Symbol.for("react.suspense"),
    Mg = Symbol.for("react.memo"),
    jg = Symbol.for("react.lazy"),
    Cc = Symbol.iterator;
  function Og(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Cc && e[Cc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Tf = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Nf = Object.assign,
    Rf = {};
  function lo(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = Rf),
      (this.updater = n || Tf));
  }
  lo.prototype.isReactComponent = {};
  lo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  lo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Mf() {}
  Mf.prototype = lo.prototype;
  function au(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = Rf),
      (this.updater = n || Tf));
  }
  var uu = (au.prototype = new Mf());
  uu.constructor = au;
  Nf(uu, lo.prototype);
  uu.isPureReactComponent = !0;
  var kc = Array.isArray,
    jf = Object.prototype.hasOwnProperty,
    cu = { current: null },
    Of = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _f(e, t, n) {
    var r,
      o = {},
      i = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        jf.call(t, r) && !Of.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
      for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
      o.children = a;
    }
    if (e && e.defaultProps)
      for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
    return {
      $$typeof: di,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: cu.current,
    };
  }
  function _g(e, t) {
    return {
      $$typeof: di,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function du(e) {
    return typeof e == "object" && e !== null && e.$$typeof === di;
  }
  function Ag(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var bc = /\/+/g;
  function xl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Ag("" + e.key)
      : t.toString(36);
  }
  function Ki(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (i) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case di:
            case Eg:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (o = o(s)),
        (e = r === "" ? "." + xl(s, 0) : r),
        kc(o)
          ? ((n = ""),
            e != null && (n = e.replace(bc, "$&/") + "/"),
            Ki(o, t, n, "", function (u) {
              return u;
            }))
          : o != null &&
            (du(o) &&
              (o = _g(
                o,
                n +
                  (!o.key || (s && s.key === o.key)
                    ? ""
                    : ("" + o.key).replace(bc, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), kc(e)))
      for (var l = 0; l < e.length; l++) {
        i = e[l];
        var a = r + xl(i, l);
        s += Ki(i, t, n, a, o);
      }
    else if (((a = Og(e)), typeof a == "function"))
      for (e = a.call(e), l = 0; !(i = e.next()).done; )
        ((i = i.value), (a = r + xl(i, l++)), (s += Ki(i, t, n, a, o)));
    else if (i === "object")
      throw (
        (t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return s;
  }
  function bi(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      Ki(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function Lg(e) {
    if (e._status === -1) {
      var t = e._result;
      ((t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Ke = { current: null },
    Gi = { transition: null },
    Ig = {
      ReactCurrentDispatcher: Ke,
      ReactCurrentBatchConfig: Gi,
      ReactCurrentOwner: cu,
    };
  function Af() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  te.Children = {
    map: bi,
    forEach: function (e, t, n) {
      bi(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        bi(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        bi(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!du(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  te.Component = lo;
  te.Fragment = Cg;
  te.Profiler = bg;
  te.PureComponent = au;
  te.StrictMode = kg;
  te.Suspense = Rg;
  te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ig;
  te.act = Af;
  te.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var r = Nf({}, e.props),
      o = e.key,
      i = e.ref,
      s = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (s = cu.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var l = e.type.defaultProps;
      for (a in t)
        jf.call(t, a) &&
          !Of.hasOwnProperty(a) &&
          (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
      l = Array(a);
      for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
      r.children = l;
    }
    return { $$typeof: di, type: e.type, key: o, ref: i, props: r, _owner: s };
  };
  te.createContext = function (e) {
    return (
      (e = {
        $$typeof: Tg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Pg, _context: e }),
      (e.Consumer = e)
    );
  };
  te.createElement = _f;
  te.createFactory = function (e) {
    var t = _f.bind(null, e);
    return ((t.type = e), t);
  };
  te.createRef = function () {
    return { current: null };
  };
  te.forwardRef = function (e) {
    return { $$typeof: Ng, render: e };
  };
  te.isValidElement = du;
  te.lazy = function (e) {
    return { $$typeof: jg, _payload: { _status: -1, _result: e }, _init: Lg };
  };
  te.memo = function (e, t) {
    return { $$typeof: Mg, type: e, compare: t === void 0 ? null : t };
  };
  te.startTransition = function (e) {
    var t = Gi.transition;
    Gi.transition = {};
    try {
      e();
    } finally {
      Gi.transition = t;
    }
  };
  te.unstable_act = Af;
  te.useCallback = function (e, t) {
    return Ke.current.useCallback(e, t);
  };
  te.useContext = function (e) {
    return Ke.current.useContext(e);
  };
  te.useDebugValue = function () {};
  te.useDeferredValue = function (e) {
    return Ke.current.useDeferredValue(e);
  };
  te.useEffect = function (e, t) {
    return Ke.current.useEffect(e, t);
  };
  te.useId = function () {
    return Ke.current.useId();
  };
  te.useImperativeHandle = function (e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n);
  };
  te.useInsertionEffect = function (e, t) {
    return Ke.current.useInsertionEffect(e, t);
  };
  te.useLayoutEffect = function (e, t) {
    return Ke.current.useLayoutEffect(e, t);
  };
  te.useMemo = function (e, t) {
    return Ke.current.useMemo(e, t);
  };
  te.useReducer = function (e, t, n) {
    return Ke.current.useReducer(e, t, n);
  };
  te.useRef = function (e) {
    return Ke.current.useRef(e);
  };
  te.useState = function (e) {
    return Ke.current.useState(e);
  };
  te.useSyncExternalStore = function (e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n);
  };
  te.useTransition = function () {
    return Ke.current.useTransition();
  };
  te.version = "18.3.1";
  Pf.exports = te;
  var S = Pf.exports;
  const A = kf(S),
    Lf = Sg({ __proto__: null, default: A }, [S]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Dg = S,
    Fg = Symbol.for("react.element"),
    zg = Symbol.for("react.fragment"),
    $g = Object.prototype.hasOwnProperty,
    Bg =
      Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ug = { key: !0, ref: !0, __self: !0, __source: !0 };
  function If(e, t, n) {
    var r,
      o = {},
      i = null,
      s = null;
    (n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (s = t.ref));
    for (r in t) $g.call(t, r) && !Ug.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: Fg,
      type: e,
      key: i,
      ref: s,
      props: o,
      _owner: Bg.current,
    };
  }
  $s.Fragment = zg;
  $s.jsx = If;
  $s.jsxs = If;
  bf.exports = $s;
  var w = bf.exports,
    Df = { exports: {} },
    dt = {},
    Ff = { exports: {} },
    zf = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(R, M) {
      var C = R.length;
      R.push(M);
      e: for (; 0 < C; ) {
        var E = (C - 1) >>> 1,
          j = R[E];
        if (0 < o(j, M)) ((R[E] = M), (R[C] = j), (C = E));
        else break e;
      }
    }
    function n(R) {
      return R.length === 0 ? null : R[0];
    }
    function r(R) {
      if (R.length === 0) return null;
      var M = R[0],
        C = R.pop();
      if (C !== M) {
        R[0] = C;
        e: for (var E = 0, j = R.length, L = j >>> 1; E < L; ) {
          var z = 2 * (E + 1) - 1,
            V = R[z],
            W = z + 1,
            D = R[W];
          if (0 > o(V, C))
            W < j && 0 > o(D, V)
              ? ((R[E] = D), (R[W] = C), (E = W))
              : ((R[E] = V), (R[z] = C), (E = z));
          else if (W < j && 0 > o(D, C)) ((R[E] = D), (R[W] = C), (E = W));
          else break e;
        }
      }
      return M;
    }
    function o(R, M) {
      var C = R.sortIndex - M.sortIndex;
      return C !== 0 ? C : R.id - M.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var i = performance;
      e.unstable_now = function () {
        return i.now();
      };
    } else {
      var s = Date,
        l = s.now();
      e.unstable_now = function () {
        return s.now() - l;
      };
    }
    var a = [],
      u = [],
      d = 1,
      f = null,
      m = 3,
      c = !1,
      x = !1,
      g = !1,
      y = typeof setTimeout == "function" ? setTimeout : null,
      h = typeof clearTimeout == "function" ? clearTimeout : null,
      p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(R) {
      for (var M = n(u); M !== null; ) {
        if (M.callback === null) r(u);
        else if (M.startTime <= R)
          (r(u), (M.sortIndex = M.expirationTime), t(a, M));
        else break;
        M = n(u);
      }
    }
    function k(R) {
      if (((g = !1), v(R), !x))
        if (n(a) !== null) ((x = !0), Q(b));
        else {
          var M = n(u);
          M !== null && K(k, M.startTime - R);
        }
    }
    function b(R, M) {
      ((x = !1), g && ((g = !1), h(O), (O = -1)), (c = !0));
      var C = m;
      try {
        for (
          v(M), f = n(a);
          f !== null && (!(f.expirationTime > M) || (R && !H()));
        ) {
          var E = f.callback;
          if (typeof E == "function") {
            ((f.callback = null), (m = f.priorityLevel));
            var j = E(f.expirationTime <= M);
            ((M = e.unstable_now()),
              typeof j == "function" ? (f.callback = j) : f === n(a) && r(a),
              v(M));
          } else r(a);
          f = n(a);
        }
        if (f !== null) var L = !0;
        else {
          var z = n(u);
          (z !== null && K(k, z.startTime - M), (L = !1));
        }
        return L;
      } finally {
        ((f = null), (m = C), (c = !1));
      }
    }
    var P = !1,
      T = null,
      O = -1,
      F = 5,
      I = -1;
    function H() {
      return !(e.unstable_now() - I < F);
    }
    function B() {
      if (T !== null) {
        var R = e.unstable_now();
        I = R;
        var M = !0;
        try {
          M = T(!0, R);
        } finally {
          M ? Z() : ((P = !1), (T = null));
        }
      } else P = !1;
    }
    var Z;
    if (typeof p == "function")
      Z = function () {
        p(B);
      };
    else if (typeof MessageChannel < "u") {
      var $ = new MessageChannel(),
        J = $.port2;
      (($.port1.onmessage = B),
        (Z = function () {
          J.postMessage(null);
        }));
    } else
      Z = function () {
        y(B, 0);
      };
    function Q(R) {
      ((T = R), P || ((P = !0), Z()));
    }
    function K(R, M) {
      O = y(function () {
        R(e.unstable_now());
      }, M);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (R) {
        R.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        x || c || ((x = !0), Q(b));
      }),
      (e.unstable_forceFrameRate = function (R) {
        0 > R || 125 < R
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (F = 0 < R ? Math.floor(1e3 / R) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return m;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(a);
      }),
      (e.unstable_next = function (R) {
        switch (m) {
          case 1:
          case 2:
          case 3:
            var M = 3;
            break;
          default:
            M = m;
        }
        var C = m;
        m = M;
        try {
          return R();
        } finally {
          m = C;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (R, M) {
        switch (R) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            R = 3;
        }
        var C = m;
        m = R;
        try {
          return M();
        } finally {
          m = C;
        }
      }),
      (e.unstable_scheduleCallback = function (R, M, C) {
        var E = e.unstable_now();
        switch (
          (typeof C == "object" && C !== null
            ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? E + C : E))
            : (C = E),
          R)
        ) {
          case 1:
            var j = -1;
            break;
          case 2:
            j = 250;
            break;
          case 5:
            j = 1073741823;
            break;
          case 4:
            j = 1e4;
            break;
          default:
            j = 5e3;
        }
        return (
          (j = C + j),
          (R = {
            id: d++,
            callback: M,
            priorityLevel: R,
            startTime: C,
            expirationTime: j,
            sortIndex: -1,
          }),
          C > E
            ? ((R.sortIndex = C),
              t(u, R),
              n(a) === null &&
                R === n(u) &&
                (g ? (h(O), (O = -1)) : (g = !0), K(k, C - E)))
            : ((R.sortIndex = j), t(a, R), x || c || ((x = !0), Q(b))),
          R
        );
      }),
      (e.unstable_shouldYield = H),
      (e.unstable_wrapCallback = function (R) {
        var M = m;
        return function () {
          var C = m;
          m = M;
          try {
            return R.apply(this, arguments);
          } finally {
            m = C;
          }
        };
      }));
  })(zf);
  Ff.exports = zf;
  var Vg = Ff.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Wg = S,
    ct = Vg;
  function _(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
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
  var $f = new Set(),
    Uo = {};
  function yr(e, t) {
    (Zr(e, t), Zr(e + "Capture", t));
  }
  function Zr(e, t) {
    for (Uo[e] = t, e = 0; e < t.length; e++) $f.add(t[e]);
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Jl = Object.prototype.hasOwnProperty,
    Hg =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Pc = {},
    Tc = {};
  function Qg(e) {
    return Jl.call(Tc, e)
      ? !0
      : Jl.call(Pc, e)
        ? !1
        : Hg.test(e)
          ? (Tc[e] = !0)
          : ((Pc[e] = !0), !1);
  }
  function Kg(e, t, n, r) {
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
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Gg(e, t, n, r) {
    if (t === null || typeof t > "u" || Kg(e, t, n, r)) return !0;
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
  function Ge(e, t, n, r, o, i, s) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = s));
  }
  var Oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Oe[e] = new Ge(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    Oe[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Oe[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    Oe[e] = new Ge(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      Oe[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Oe[e] = new Ge(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    Oe[e] = new Ge(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    Oe[e] = new Ge(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    Oe[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var fu = /[\-:]([a-z])/g;
  function pu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(fu, pu);
      Oe[t] = new Ge(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(fu, pu);
      Oe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(fu, pu);
    Oe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    Oe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Oe.xlinkHref = new Ge(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    Oe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function hu(e, t, n, r) {
    var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Gg(t, n, o, r) && (n = null),
      r || o === null
        ? Qg(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var un = Wg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pi = Symbol.for("react.element"),
    Cr = Symbol.for("react.portal"),
    kr = Symbol.for("react.fragment"),
    mu = Symbol.for("react.strict_mode"),
    ea = Symbol.for("react.profiler"),
    Bf = Symbol.for("react.provider"),
    Uf = Symbol.for("react.context"),
    gu = Symbol.for("react.forward_ref"),
    ta = Symbol.for("react.suspense"),
    na = Symbol.for("react.suspense_list"),
    vu = Symbol.for("react.memo"),
    yn = Symbol.for("react.lazy"),
    Vf = Symbol.for("react.offscreen"),
    Nc = Symbol.iterator;
  function go(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Nc && e[Nc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var we = Object.assign,
    Sl;
  function No(e) {
    if (Sl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Sl = (t && t[1]) || "";
      }
    return (
      `
` +
      Sl +
      e
    );
  }
  var El = !1;
  function Cl(e, t) {
    if (!e || El) return "";
    El = !0;
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
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var o = u.stack.split(`
`),
            i = r.stack.split(`
`),
            s = o.length - 1,
            l = i.length - 1;
          1 <= s && 0 <= l && o[s] !== i[l];
        )
          l--;
        for (; 1 <= s && 0 <= l; s--, l--)
          if (o[s] !== i[l]) {
            if (s !== 1 || l !== 1)
              do
                if ((s--, l--, 0 > l || o[s] !== i[l])) {
                  var a =
                    `
` + o[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= s && 0 <= l);
            break;
          }
      }
    } finally {
      ((El = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? No(e) : "";
  }
  function Yg(e) {
    switch (e.tag) {
      case 5:
        return No(e.type);
      case 16:
        return No("Lazy");
      case 13:
        return No("Suspense");
      case 19:
        return No("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = Cl(e.type, !1)), e);
      case 11:
        return ((e = Cl(e.type.render, !1)), e);
      case 1:
        return ((e = Cl(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ra(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case kr:
        return "Fragment";
      case Cr:
        return "Portal";
      case ea:
        return "Profiler";
      case mu:
        return "StrictMode";
      case ta:
        return "Suspense";
      case na:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Uf:
          return (e.displayName || "Context") + ".Consumer";
        case Bf:
          return (e._context.displayName || "Context") + ".Provider";
        case gu:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case vu:
          return (
            (t = e.displayName || null),
            t !== null ? t : ra(e.type) || "Memo"
          );
        case yn:
          ((t = e._payload), (e = e._init));
          try {
            return ra(e(t));
          } catch {}
      }
    return null;
  }
  function Xg(e) {
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
        return ra(t);
      case 8:
        return t === mu ? "StrictMode" : "Mode";
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
  function Fn(e) {
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
  function Wf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function qg(e) {
    var t = Wf(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (s) {
            ((r = "" + s), i.call(this, s));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ti(e) {
    e._valueTracker || (e._valueTracker = qg(e));
  }
  function Hf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Wf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function as(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function oa(e, t) {
    var n = t.checked;
    return we({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Rc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Fn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Qf(e, t) {
    ((t = t.checked), t != null && hu(e, "checked", t, !1));
  }
  function ia(e, t) {
    Qf(e, t);
    var n = Fn(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? sa(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && sa(e, t.type, Fn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Mc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function sa(e, t, n) {
    (t !== "number" || as(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ro = Array.isArray;
  function Lr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        ((o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Fn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function la(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return we({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function jc(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(_(92));
        if (Ro(n)) {
          if (1 < n.length) throw Error(_(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Fn(n) };
  }
  function Kf(e, t) {
    var n = Fn(t.value),
      r = Fn(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Oc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Gf(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function aa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Gf(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ni,
    Yf = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ni = Ni || document.createElement("div"),
            Ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ni.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Vo(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Oo = {
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
    Zg = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Oo).forEach(function (e) {
    Zg.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Oo[t] = Oo[e]));
    });
  });
  function Xf(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Oo.hasOwnProperty(e) && Oo[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function qf(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Xf(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : (e[n] = o));
      }
  }
  var Jg = we(
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
    },
  );
  function ua(e, t) {
    if (t) {
      if (Jg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(_(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(_(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(_(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(_(62));
    }
  }
  function ca(e, t) {
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
  var da = null;
  function yu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fa = null,
    Ir = null,
    Dr = null;
  function _c(e) {
    if ((e = hi(e))) {
      if (typeof fa != "function") throw Error(_(280));
      var t = e.stateNode;
      t && ((t = Hs(t)), fa(e.stateNode, e.type, t));
    }
  }
  function Zf(e) {
    Ir ? (Dr ? Dr.push(e) : (Dr = [e])) : (Ir = e);
  }
  function Jf() {
    if (Ir) {
      var e = Ir,
        t = Dr;
      if (((Dr = Ir = null), _c(e), t)) for (e = 0; e < t.length; e++) _c(t[e]);
    }
  }
  function ep(e, t) {
    return e(t);
  }
  function tp() {}
  var kl = !1;
  function np(e, t, n) {
    if (kl) return e(t, n);
    kl = !0;
    try {
      return ep(e, t, n);
    } finally {
      ((kl = !1), (Ir !== null || Dr !== null) && (tp(), Jf()));
    }
  }
  function Wo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Hs(n);
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n;
  }
  var pa = !1;
  if (nn)
    try {
      var vo = {};
      (Object.defineProperty(vo, "passive", {
        get: function () {
          pa = !0;
        },
      }),
        window.addEventListener("test", vo, vo),
        window.removeEventListener("test", vo, vo));
    } catch {
      pa = !1;
    }
  function ev(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (d) {
      this.onError(d);
    }
  }
  var _o = !1,
    us = null,
    cs = !1,
    ha = null,
    tv = {
      onError: function (e) {
        ((_o = !0), (us = e));
      },
    };
  function nv(e, t, n, r, o, i, s, l, a) {
    ((_o = !1), (us = null), ev.apply(tv, arguments));
  }
  function rv(e, t, n, r, o, i, s, l, a) {
    if ((nv.apply(this, arguments), _o)) {
      if (_o) {
        var u = us;
        ((_o = !1), (us = null));
      } else throw Error(_(198));
      cs || ((cs = !0), (ha = u));
    }
  }
  function wr(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function rp(e) {
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
  function Ac(e) {
    if (wr(e) !== e) throw Error(_(188));
  }
  function ov(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = wr(e)), t === null)) throw Error(_(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return (Ac(o), e);
          if (i === r) return (Ac(o), t);
          i = i.sibling;
        }
        throw Error(_(188));
      }
      if (n.return !== r.return) ((n = o), (r = i));
      else {
        for (var s = !1, l = o.child; l; ) {
          if (l === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (l === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          l = l.sibling;
        }
        if (!s) {
          for (l = i.child; l; ) {
            if (l === n) {
              ((s = !0), (n = i), (r = o));
              break;
            }
            if (l === r) {
              ((s = !0), (r = i), (n = o));
              break;
            }
            l = l.sibling;
          }
          if (!s) throw Error(_(189));
        }
      }
      if (n.alternate !== r) throw Error(_(190));
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t;
  }
  function op(e) {
    return ((e = ov(e)), e !== null ? ip(e) : null);
  }
  function ip(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ip(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var sp = ct.unstable_scheduleCallback,
    Lc = ct.unstable_cancelCallback,
    iv = ct.unstable_shouldYield,
    sv = ct.unstable_requestPaint,
    Ee = ct.unstable_now,
    lv = ct.unstable_getCurrentPriorityLevel,
    wu = ct.unstable_ImmediatePriority,
    lp = ct.unstable_UserBlockingPriority,
    ds = ct.unstable_NormalPriority,
    av = ct.unstable_LowPriority,
    ap = ct.unstable_IdlePriority,
    Bs = null,
    Vt = null;
  function uv(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function")
      try {
        Vt.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var jt = Math.clz32 ? Math.clz32 : fv,
    cv = Math.log,
    dv = Math.LN2;
  function fv(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((cv(e) / dv) | 0)) | 0);
  }
  var Ri = 64,
    Mi = 4194304;
  function Mo(e) {
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
  function fs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var l = s & ~o;
      l !== 0 ? (r = Mo(l)) : ((i &= s), i !== 0 && (r = Mo(i)));
    } else ((s = n & ~o), s !== 0 ? (r = Mo(s)) : i !== 0 && (r = Mo(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - jt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
    return r;
  }
  function pv(e, t) {
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
  function hv(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var s = 31 - jt(i),
        l = 1 << s,
        a = o[s];
      (a === -1
        ? (!(l & n) || l & r) && (o[s] = pv(l, t))
        : a <= t && (e.expiredLanes |= l),
        (i &= ~l));
    }
  }
  function ma(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function up() {
    var e = Ri;
    return ((Ri <<= 1), !(Ri & 4194240) && (Ri = 64), e);
  }
  function bl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function fi(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - jt(t)),
      (e[t] = n));
  }
  function mv(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - jt(n),
        i = 1 << o;
      ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
    }
  }
  function xu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - jt(n),
        o = 1 << r;
      ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
  }
  var ae = 0;
  function cp(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var dp,
    Su,
    fp,
    pp,
    hp,
    ga = !1,
    ji = [],
    Mn = null,
    jn = null,
    On = null,
    Ho = new Map(),
    Qo = new Map(),
    xn = [],
    gv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ic(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mn = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        On = null;
        break;
      case "pointerover":
      case "pointerout":
        Ho.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qo.delete(t.pointerId);
    }
  }
  function yo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = hi(t)), t !== null && Su(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function vv(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return ((Mn = yo(Mn, e, t, n, r, o)), !0);
      case "dragenter":
        return ((jn = yo(jn, e, t, n, r, o)), !0);
      case "mouseover":
        return ((On = yo(On, e, t, n, r, o)), !0);
      case "pointerover":
        var i = o.pointerId;
        return (Ho.set(i, yo(Ho.get(i) || null, e, t, n, r, o)), !0);
      case "gotpointercapture":
        return (
          (i = o.pointerId),
          Qo.set(i, yo(Qo.get(i) || null, e, t, n, r, o)),
          !0
        );
    }
    return !1;
  }
  function mp(e) {
    var t = tr(e.target);
    if (t !== null) {
      var n = wr(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = rp(n)), t !== null)) {
            ((e.blockedOn = t),
              hp(e.priority, function () {
                fp(n);
              }));
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
  function Yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((da = r), n.target.dispatchEvent(r), (da = null));
      } else return ((t = hi(n)), t !== null && Su(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Dc(e, t, n) {
    Yi(e) && n.delete(t);
  }
  function yv() {
    ((ga = !1),
      Mn !== null && Yi(Mn) && (Mn = null),
      jn !== null && Yi(jn) && (jn = null),
      On !== null && Yi(On) && (On = null),
      Ho.forEach(Dc),
      Qo.forEach(Dc));
  }
  function wo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ga ||
        ((ga = !0),
        ct.unstable_scheduleCallback(ct.unstable_NormalPriority, yv)));
  }
  function Ko(e) {
    function t(o) {
      return wo(o, e);
    }
    if (0 < ji.length) {
      wo(ji[0], e);
      for (var n = 1; n < ji.length; n++) {
        var r = ji[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Mn !== null && wo(Mn, e),
        jn !== null && wo(jn, e),
        On !== null && wo(On, e),
        Ho.forEach(t),
        Qo.forEach(t),
        n = 0;
      n < xn.length;
      n++
    )
      ((r = xn[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < xn.length && ((n = xn[0]), n.blockedOn === null); )
      (mp(n), n.blockedOn === null && xn.shift());
  }
  var Fr = un.ReactCurrentBatchConfig,
    ps = !0;
  function wv(e, t, n, r) {
    var o = ae,
      i = Fr.transition;
    Fr.transition = null;
    try {
      ((ae = 1), Eu(e, t, n, r));
    } finally {
      ((ae = o), (Fr.transition = i));
    }
  }
  function xv(e, t, n, r) {
    var o = ae,
      i = Fr.transition;
    Fr.transition = null;
    try {
      ((ae = 4), Eu(e, t, n, r));
    } finally {
      ((ae = o), (Fr.transition = i));
    }
  }
  function Eu(e, t, n, r) {
    if (ps) {
      var o = va(e, t, n, r);
      if (o === null) (Ll(e, t, r, hs, n), Ic(e, r));
      else if (vv(o, e, t, n, r)) r.stopPropagation();
      else if ((Ic(e, r), t & 4 && -1 < gv.indexOf(e))) {
        for (; o !== null; ) {
          var i = hi(o);
          if (
            (i !== null && dp(i),
            (i = va(e, t, n, r)),
            i === null && Ll(e, t, r, hs, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else Ll(e, t, r, null, n);
    }
  }
  var hs = null;
  function va(e, t, n, r) {
    if (((hs = null), (e = yu(r)), (e = tr(e)), e !== null))
      if (((t = wr(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = rp(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((hs = e), null);
  }
  function gp(e) {
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
        switch (lv()) {
          case wu:
            return 1;
          case lp:
            return 4;
          case ds:
          case av:
            return 16;
          case ap:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Tn = null,
    Cu = null,
    Xi = null;
  function vp() {
    if (Xi) return Xi;
    var e,
      t = Cu,
      n = t.length,
      r,
      o = "value" in Tn ? Tn.value : Tn.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (Xi = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function qi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Oi() {
    return !0;
  }
  function Fc() {
    return !1;
  }
  function ft(e) {
    function t(n, r, o, i, s) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null));
      for (var l in e)
        e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Oi
          : Fc),
        (this.isPropagationStopped = Fc),
        this
      );
    }
    return (
      we(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Oi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Oi));
        },
        persist: function () {},
        isPersistent: Oi,
      }),
      t
    );
  }
  var ao = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ku = ft(ao),
    pi = we({}, ao, { view: 0, detail: 0 }),
    Sv = ft(pi),
    Pl,
    Tl,
    xo,
    Us = we({}, pi, {
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
      getModifierState: bu,
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
          : (e !== xo &&
              (xo && e.type === "mousemove"
                ? ((Pl = e.screenX - xo.screenX), (Tl = e.screenY - xo.screenY))
                : (Tl = Pl = 0),
              (xo = e)),
            Pl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Tl;
      },
    }),
    zc = ft(Us),
    Ev = we({}, Us, { dataTransfer: 0 }),
    Cv = ft(Ev),
    kv = we({}, pi, { relatedTarget: 0 }),
    Nl = ft(kv),
    bv = we({}, ao, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pv = ft(bv),
    Tv = we({}, ao, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Nv = ft(Tv),
    Rv = we({}, ao, { data: 0 }),
    $c = ft(Rv),
    Mv = {
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
    jv = {
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
    Ov = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function _v(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ov[e])
        ? !!t[e]
        : !1;
  }
  function bu() {
    return _v;
  }
  var Av = we({}, pi, {
      key: function (e) {
        if (e.key) {
          var t = Mv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? jv[e.keyCode] || "Unidentified"
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
      getModifierState: bu,
      charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Lv = ft(Av),
    Iv = we({}, Us, {
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
    Bc = ft(Iv),
    Dv = we({}, pi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bu,
    }),
    Fv = ft(Dv),
    zv = we({}, ao, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $v = ft(zv),
    Bv = we({}, Us, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    Uv = ft(Bv),
    Vv = [9, 13, 27, 32],
    Pu = nn && "CompositionEvent" in window,
    Ao = null;
  nn && "documentMode" in document && (Ao = document.documentMode);
  var Wv = nn && "TextEvent" in window && !Ao,
    yp = nn && (!Pu || (Ao && 8 < Ao && 11 >= Ao)),
    Uc = " ",
    Vc = !1;
  function wp(e, t) {
    switch (e) {
      case "keyup":
        return Vv.indexOf(t.keyCode) !== -1;
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
  function xp(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var br = !1;
  function Hv(e, t) {
    switch (e) {
      case "compositionend":
        return xp(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vc = !0), Uc);
      case "textInput":
        return ((e = t.data), e === Uc && Vc ? null : e);
      default:
        return null;
    }
  }
  function Qv(e, t) {
    if (br)
      return e === "compositionend" || (!Pu && wp(e, t))
        ? ((e = vp()), (Xi = Cu = Tn = null), (br = !1), e)
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
        return yp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kv = {
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
  function Wc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kv[e.type] : t === "textarea";
  }
  function Sp(e, t, n, r) {
    (Zf(r),
      (t = ms(t, "onChange")),
      0 < t.length &&
        ((n = new ku("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Lo = null,
    Go = null;
  function Gv(e) {
    Op(e, 0);
  }
  function Vs(e) {
    var t = Nr(e);
    if (Hf(t)) return e;
  }
  function Yv(e, t) {
    if (e === "change") return t;
  }
  var Ep = !1;
  if (nn) {
    var Rl;
    if (nn) {
      var Ml = "oninput" in document;
      if (!Ml) {
        var Hc = document.createElement("div");
        (Hc.setAttribute("oninput", "return;"),
          (Ml = typeof Hc.oninput == "function"));
      }
      Rl = Ml;
    } else Rl = !1;
    Ep = Rl && (!document.documentMode || 9 < document.documentMode);
  }
  function Qc() {
    Lo && (Lo.detachEvent("onpropertychange", Cp), (Go = Lo = null));
  }
  function Cp(e) {
    if (e.propertyName === "value" && Vs(Go)) {
      var t = [];
      (Sp(t, Go, e, yu(e)), np(Gv, t));
    }
  }
  function Xv(e, t, n) {
    e === "focusin"
      ? (Qc(), (Lo = t), (Go = n), Lo.attachEvent("onpropertychange", Cp))
      : e === "focusout" && Qc();
  }
  function qv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vs(Go);
  }
  function Zv(e, t) {
    if (e === "click") return Vs(t);
  }
  function Jv(e, t) {
    if (e === "input" || e === "change") return Vs(t);
  }
  function ey(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var _t = typeof Object.is == "function" ? Object.is : ey;
  function Yo(e, t) {
    if (_t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Jl.call(t, o) || !_t(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Kc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gc(e, t) {
    var n = Kc(e);
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
      n = Kc(n);
    }
  }
  function kp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? kp(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function bp() {
    for (var e = window, t = as(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = as(e.document);
    }
    return t;
  }
  function Tu(e) {
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
  function ty(e) {
    var t = bp(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      kp(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Tu(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          ((r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = Gc(n, i)));
          var s = Gc(n, r);
          o &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var ny = nn && "documentMode" in document && 11 >= document.documentMode,
    Pr = null,
    ya = null,
    Io = null,
    wa = !1;
  function Yc(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wa ||
      Pr == null ||
      Pr !== as(r) ||
      ((r = Pr),
      "selectionStart" in r && Tu(r)
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
      (Io && Yo(Io, r)) ||
        ((Io = r),
        (r = ms(ya, "onSelect")),
        0 < r.length &&
          ((t = new ku("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Pr))));
  }
  function _i(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Tr = {
      animationend: _i("Animation", "AnimationEnd"),
      animationiteration: _i("Animation", "AnimationIteration"),
      animationstart: _i("Animation", "AnimationStart"),
      transitionend: _i("Transition", "TransitionEnd"),
    },
    jl = {},
    Pp = {};
  nn &&
    ((Pp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Tr.animationend.animation,
      delete Tr.animationiteration.animation,
      delete Tr.animationstart.animation),
    "TransitionEvent" in window || delete Tr.transitionend.transition);
  function Ws(e) {
    if (jl[e]) return jl[e];
    if (!Tr[e]) return e;
    var t = Tr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Pp) return (jl[e] = t[n]);
    return e;
  }
  var Tp = Ws("animationend"),
    Np = Ws("animationiteration"),
    Rp = Ws("animationstart"),
    Mp = Ws("transitionend"),
    jp = new Map(),
    Xc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Qn(e, t) {
    (jp.set(e, t), yr(t, [e]));
  }
  for (var Ol = 0; Ol < Xc.length; Ol++) {
    var _l = Xc[Ol],
      ry = _l.toLowerCase(),
      oy = _l[0].toUpperCase() + _l.slice(1);
    Qn(ry, "on" + oy);
  }
  Qn(Tp, "onAnimationEnd");
  Qn(Np, "onAnimationIteration");
  Qn(Rp, "onAnimationStart");
  Qn("dblclick", "onDoubleClick");
  Qn("focusin", "onFocus");
  Qn("focusout", "onBlur");
  Qn(Mp, "onTransitionEnd");
  Zr("onMouseEnter", ["mouseout", "mouseover"]);
  Zr("onMouseLeave", ["mouseout", "mouseover"]);
  Zr("onPointerEnter", ["pointerout", "pointerover"]);
  Zr("onPointerLeave", ["pointerout", "pointerover"]);
  yr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  yr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  yr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  yr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  yr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var jo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    iy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(jo),
    );
  function qc(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), rv(r, t, void 0, e), (e.currentTarget = null));
  }
  function Op(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var l = r[s],
              a = l.instance,
              u = l.currentTarget;
            if (((l = l.listener), a !== i && o.isPropagationStopped()))
              break e;
            (qc(o, l, u), (i = a));
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((l = r[s]),
              (a = l.instance),
              (u = l.currentTarget),
              (l = l.listener),
              a !== i && o.isPropagationStopped())
            )
              break e;
            (qc(o, l, u), (i = a));
          }
      }
    }
    if (cs) throw ((e = ha), (cs = !1), (ha = null), e);
  }
  function pe(e, t) {
    var n = t[ka];
    n === void 0 && (n = t[ka] = new Set());
    var r = e + "__bubble";
    n.has(r) || (_p(t, e, 2, !1), n.add(r));
  }
  function Al(e, t, n) {
    var r = 0;
    (t && (r |= 4), _p(n, e, r, t));
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Xo(e) {
    if (!e[Ai]) {
      ((e[Ai] = !0),
        $f.forEach(function (n) {
          n !== "selectionchange" && (iy.has(n) || Al(n, !1, e), Al(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ai] || ((t[Ai] = !0), Al("selectionchange", !1, t));
    }
  }
  function _p(e, t, n, r) {
    switch (gp(t)) {
      case 1:
        var o = wv;
        break;
      case 4:
        o = xv;
        break;
      default:
        o = Eu;
    }
    ((n = o.bind(null, t, n, e)),
      (o = void 0),
      !pa ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1));
  }
  function Ll(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var l = r.stateNode.containerInfo;
          if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var a = s.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = s.stateNode.containerInfo),
                a === o || (a.nodeType === 8 && a.parentNode === o))
              )
                return;
              s = s.return;
            }
          for (; l !== null; ) {
            if (((s = tr(l)), s === null)) return;
            if (((a = s.tag), a === 5 || a === 6)) {
              r = i = s;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
    np(function () {
      var u = i,
        d = yu(n),
        f = [];
      e: {
        var m = jp.get(e);
        if (m !== void 0) {
          var c = ku,
            x = e;
          switch (e) {
            case "keypress":
              if (qi(n) === 0) break e;
            case "keydown":
            case "keyup":
              c = Lv;
              break;
            case "focusin":
              ((x = "focus"), (c = Nl));
              break;
            case "focusout":
              ((x = "blur"), (c = Nl));
              break;
            case "beforeblur":
            case "afterblur":
              c = Nl;
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
              c = zc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              c = Cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              c = Fv;
              break;
            case Tp:
            case Np:
            case Rp:
              c = Pv;
              break;
            case Mp:
              c = $v;
              break;
            case "scroll":
              c = Sv;
              break;
            case "wheel":
              c = Uv;
              break;
            case "copy":
            case "cut":
            case "paste":
              c = Nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              c = Bc;
          }
          var g = (t & 4) !== 0,
            y = !g && e === "scroll",
            h = g ? (m !== null ? m + "Capture" : null) : m;
          g = [];
          for (var p = u, v; p !== null; ) {
            v = p;
            var k = v.stateNode;
            if (
              (v.tag === 5 &&
                k !== null &&
                ((v = k),
                h !== null &&
                  ((k = Wo(p, h)), k != null && g.push(qo(p, k, v)))),
              y)
            )
              break;
            p = p.return;
          }
          0 < g.length &&
            ((m = new c(m, x, null, n, d)), f.push({ event: m, listeners: g }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((m = e === "mouseover" || e === "pointerover"),
            (c = e === "mouseout" || e === "pointerout"),
            m &&
              n !== da &&
              (x = n.relatedTarget || n.fromElement) &&
              (tr(x) || x[rn]))
          )
            break e;
          if (
            (c || m) &&
            ((m =
              d.window === d
                ? d
                : (m = d.ownerDocument)
                  ? m.defaultView || m.parentWindow
                  : window),
            c
              ? ((x = n.relatedTarget || n.toElement),
                (c = u),
                (x = x ? tr(x) : null),
                x !== null &&
                  ((y = wr(x)), x !== y || (x.tag !== 5 && x.tag !== 6)) &&
                  (x = null))
              : ((c = null), (x = u)),
            c !== x)
          ) {
            if (
              ((g = zc),
              (k = "onMouseLeave"),
              (h = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((g = Bc),
                (k = "onPointerLeave"),
                (h = "onPointerEnter"),
                (p = "pointer")),
              (y = c == null ? m : Nr(c)),
              (v = x == null ? m : Nr(x)),
              (m = new g(k, p + "leave", c, n, d)),
              (m.target = y),
              (m.relatedTarget = v),
              (k = null),
              tr(d) === u &&
                ((g = new g(h, p + "enter", x, n, d)),
                (g.target = v),
                (g.relatedTarget = y),
                (k = g)),
              (y = k),
              c && x)
            )
              t: {
                for (g = c, h = x, p = 0, v = g; v; v = Er(v)) p++;
                for (v = 0, k = h; k; k = Er(k)) v++;
                for (; 0 < p - v; ) ((g = Er(g)), p--);
                for (; 0 < v - p; ) ((h = Er(h)), v--);
                for (; p--; ) {
                  if (g === h || (h !== null && g === h.alternate)) break t;
                  ((g = Er(g)), (h = Er(h)));
                }
                g = null;
              }
            else g = null;
            (c !== null && Zc(f, m, c, g, !1),
              x !== null && y !== null && Zc(f, y, x, g, !0));
          }
        }
        e: {
          if (
            ((m = u ? Nr(u) : window),
            (c = m.nodeName && m.nodeName.toLowerCase()),
            c === "select" || (c === "input" && m.type === "file"))
          )
            var b = Yv;
          else if (Wc(m))
            if (Ep) b = Jv;
            else {
              b = qv;
              var P = Xv;
            }
          else
            (c = m.nodeName) &&
              c.toLowerCase() === "input" &&
              (m.type === "checkbox" || m.type === "radio") &&
              (b = Zv);
          if (b && (b = b(e, u))) {
            Sp(f, b, n, d);
            break e;
          }
          (P && P(e, m, u),
            e === "focusout" &&
              (P = m._wrapperState) &&
              P.controlled &&
              m.type === "number" &&
              sa(m, "number", m.value));
        }
        switch (((P = u ? Nr(u) : window), e)) {
          case "focusin":
            (Wc(P) || P.contentEditable === "true") &&
              ((Pr = P), (ya = u), (Io = null));
            break;
          case "focusout":
            Io = ya = Pr = null;
            break;
          case "mousedown":
            wa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((wa = !1), Yc(f, n, d));
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            Yc(f, n, d);
        }
        var T;
        if (Pu)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          br
            ? wp(e, n) && (O = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (O = "onCompositionStart");
        (O &&
          (yp &&
            n.locale !== "ko" &&
            (br || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && br && (T = vp())
              : ((Tn = d),
                (Cu = "value" in Tn ? Tn.value : Tn.textContent),
                (br = !0))),
          (P = ms(u, O)),
          0 < P.length &&
            ((O = new $c(O, e, null, n, d)),
            f.push({ event: O, listeners: P }),
            T ? (O.data = T) : ((T = xp(n)), T !== null && (O.data = T)))),
          (T = Wv ? Hv(e, n) : Qv(e, n)) &&
            ((u = ms(u, "onBeforeInput")),
            0 < u.length &&
              ((d = new $c("onBeforeInput", "beforeinput", null, n, d)),
              f.push({ event: d, listeners: u }),
              (d.data = T))));
      }
      Op(f, t);
    });
  }
  function qo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ms(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      (o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = Wo(e, n)),
        i != null && r.unshift(qo(e, i, o)),
        (i = Wo(e, t)),
        i != null && r.push(qo(e, i, o))),
        (e = e.return));
    }
    return r;
  }
  function Er(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var l = n,
        a = l.alternate,
        u = l.stateNode;
      if (a !== null && a === r) break;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        o
          ? ((a = Wo(n, i)), a != null && s.unshift(qo(n, a, l)))
          : o || ((a = Wo(n, i)), a != null && s.push(qo(n, a, l)))),
        (n = n.return));
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var sy = /\r\n?/g,
    ly = /\u0000|\uFFFD/g;
  function Jc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        sy,
        `
`,
      )
      .replace(ly, "");
  }
  function Li(e, t, n) {
    if (((t = Jc(t)), Jc(e) !== t && n)) throw Error(_(425));
  }
  function gs() {}
  var xa = null,
    Sa = null;
  function Ea(e, t) {
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
  var Ca = typeof setTimeout == "function" ? setTimeout : void 0,
    ay = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ed = typeof Promise == "function" ? Promise : void 0,
    uy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ed < "u"
          ? function (e) {
              return ed.resolve(null).then(e).catch(cy);
            }
          : Ca;
  function cy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Il(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(o), Ko(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    Ko(t);
  }
  function _n(e) {
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
  function td(e) {
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
  var uo = Math.random().toString(36).slice(2),
    Ut = "__reactFiber$" + uo,
    Zo = "__reactProps$" + uo,
    rn = "__reactContainer$" + uo,
    ka = "__reactEvents$" + uo,
    dy = "__reactListeners$" + uo,
    fy = "__reactHandles$" + uo;
  function tr(e) {
    var t = e[Ut];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[rn] || n[Ut])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = td(e); e !== null; ) {
            if ((n = e[Ut])) return n;
            e = td(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function hi(e) {
    return (
      (e = e[Ut] || e[rn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33));
  }
  function Hs(e) {
    return e[Zo] || null;
  }
  var ba = [],
    Rr = -1;
  function Kn(e) {
    return { current: e };
  }
  function he(e) {
    0 > Rr || ((e.current = ba[Rr]), (ba[Rr] = null), Rr--);
  }
  function de(e, t) {
    (Rr++, (ba[Rr] = e.current), (e.current = t));
  }
  var zn = {},
    ze = Kn(zn),
    Je = Kn(!1),
    fr = zn;
  function Jr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function et(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function vs() {
    (he(Je), he(ze));
  }
  function nd(e, t, n) {
    if (ze.current !== zn) throw Error(_(168));
    (de(ze, t), de(Je, n));
  }
  function Ap(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(_(108, Xg(e) || "Unknown", o));
    return we({}, n, r);
  }
  function ys(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        zn),
      (fr = ze.current),
      de(ze, e),
      de(Je, Je.current),
      !0
    );
  }
  function rd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    (n
      ? ((e = Ap(e, t, fr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        he(Je),
        he(ze),
        de(ze, e))
      : he(Je),
      de(Je, n));
  }
  var qt = null,
    Qs = !1,
    Dl = !1;
  function Lp(e) {
    qt === null ? (qt = [e]) : qt.push(e);
  }
  function py(e) {
    ((Qs = !0), Lp(e));
  }
  function Gn() {
    if (!Dl && qt !== null) {
      Dl = !0;
      var e = 0,
        t = ae;
      try {
        var n = qt;
        for (ae = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((qt = null), (Qs = !1));
      } catch (o) {
        throw (qt !== null && (qt = qt.slice(e + 1)), sp(wu, Gn), o);
      } finally {
        ((ae = t), (Dl = !1));
      }
    }
    return null;
  }
  var Mr = [],
    jr = 0,
    ws = null,
    xs = 0,
    ht = [],
    mt = 0,
    pr = null,
    Jt = 1,
    en = "";
  function Jn(e, t) {
    ((Mr[jr++] = xs), (Mr[jr++] = ws), (ws = e), (xs = t));
  }
  function Ip(e, t, n) {
    ((ht[mt++] = Jt), (ht[mt++] = en), (ht[mt++] = pr), (pr = e));
    var r = Jt;
    e = en;
    var o = 32 - jt(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var i = 32 - jt(t) + o;
    if (30 < i) {
      var s = o - (o % 5);
      ((i = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (o -= s),
        (Jt = (1 << (32 - jt(t) + o)) | (n << o) | r),
        (en = i + e));
    } else ((Jt = (1 << i) | (n << o) | r), (en = e));
  }
  function Nu(e) {
    e.return !== null && (Jn(e, 1), Ip(e, 1, 0));
  }
  function Ru(e) {
    for (; e === ws; )
      ((ws = Mr[--jr]), (Mr[jr] = null), (xs = Mr[--jr]), (Mr[jr] = null));
    for (; e === pr; )
      ((pr = ht[--mt]),
        (ht[mt] = null),
        (en = ht[--mt]),
        (ht[mt] = null),
        (Jt = ht[--mt]),
        (ht[mt] = null));
  }
  var at = null,
    lt = null,
    ge = !1,
    Mt = null;
  function Dp(e, t) {
    var n = gt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function od(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (at = e), (lt = _n(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (at = e), (lt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = pr !== null ? { id: Jt, overflow: en } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = gt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (at = e),
              (lt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Pa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ta(e) {
    if (ge) {
      var t = lt;
      if (t) {
        var n = t;
        if (!od(e, t)) {
          if (Pa(e)) throw Error(_(418));
          t = _n(n.nextSibling);
          var r = at;
          t && od(e, t)
            ? Dp(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (at = e));
        }
      } else {
        if (Pa(e)) throw Error(_(418));
        ((e.flags = (e.flags & -4097) | 2), (ge = !1), (at = e));
      }
    }
  }
  function id(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    at = e;
  }
  function Ii(e) {
    if (e !== at) return !1;
    if (!ge) return (id(e), (ge = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ea(e.type, e.memoizedProps))),
      t && (t = lt))
    ) {
      if (Pa(e)) throw (Fp(), Error(_(418)));
      for (; t; ) (Dp(e, t), (t = _n(t.nextSibling)));
    }
    if ((id(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(_(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                lt = _n(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else lt = at ? _n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fp() {
    for (var e = lt; e; ) e = _n(e.nextSibling);
  }
  function eo() {
    ((lt = at = null), (ge = !1));
  }
  function Mu(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  var hy = un.ReactCurrentBatchConfig;
  function So(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(_(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(_(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (s) {
              var l = o.refs;
              s === null ? delete l[i] : (l[i] = s);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(_(284));
      if (!n._owner) throw Error(_(290, e));
    }
    return e;
  }
  function Di(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        _(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function sd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function zp(e) {
    function t(h, p) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
      }
    }
    function n(h, p) {
      if (!e) return null;
      for (; p !== null; ) (t(h, p), (p = p.sibling));
      return null;
    }
    function r(h, p) {
      for (h = new Map(); p !== null; )
        (p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling));
      return h;
    }
    function o(h, p) {
      return ((h = Dn(h, p)), (h.index = 0), (h.sibling = null), h);
    }
    function i(h, p, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
              : ((h.flags |= 2), p))
          : ((h.flags |= 1048576), p)
      );
    }
    function s(h) {
      return (e && h.alternate === null && (h.flags |= 2), h);
    }
    function l(h, p, v, k) {
      return p === null || p.tag !== 6
        ? ((p = Wl(v, h.mode, k)), (p.return = h), p)
        : ((p = o(p, v)), (p.return = h), p);
    }
    function a(h, p, v, k) {
      var b = v.type;
      return b === kr
        ? d(h, p, v.props.children, k, v.key)
        : p !== null &&
            (p.elementType === b ||
              (typeof b == "object" &&
                b !== null &&
                b.$$typeof === yn &&
                sd(b) === p.type))
          ? ((k = o(p, v.props)), (k.ref = So(h, p, v)), (k.return = h), k)
          : ((k = os(v.type, v.key, v.props, null, h.mode, k)),
            (k.ref = So(h, p, v)),
            (k.return = h),
            k);
    }
    function u(h, p, v, k) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== v.containerInfo ||
        p.stateNode.implementation !== v.implementation
        ? ((p = Hl(v, h.mode, k)), (p.return = h), p)
        : ((p = o(p, v.children || [])), (p.return = h), p);
    }
    function d(h, p, v, k, b) {
      return p === null || p.tag !== 7
        ? ((p = dr(v, h.mode, k, b)), (p.return = h), p)
        : ((p = o(p, v)), (p.return = h), p);
    }
    function f(h, p, v) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return ((p = Wl("" + p, h.mode, v)), (p.return = h), p);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Pi:
            return (
              (v = os(p.type, p.key, p.props, null, h.mode, v)),
              (v.ref = So(h, null, p)),
              (v.return = h),
              v
            );
          case Cr:
            return ((p = Hl(p, h.mode, v)), (p.return = h), p);
          case yn:
            var k = p._init;
            return f(h, k(p._payload), v);
        }
        if (Ro(p) || go(p))
          return ((p = dr(p, h.mode, v, null)), (p.return = h), p);
        Di(h, p);
      }
      return null;
    }
    function m(h, p, v, k) {
      var b = p !== null ? p.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return b !== null ? null : l(h, p, "" + v, k);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Pi:
            return v.key === b ? a(h, p, v, k) : null;
          case Cr:
            return v.key === b ? u(h, p, v, k) : null;
          case yn:
            return ((b = v._init), m(h, p, b(v._payload), k));
        }
        if (Ro(v) || go(v)) return b !== null ? null : d(h, p, v, k, null);
        Di(h, v);
      }
      return null;
    }
    function c(h, p, v, k, b) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((h = h.get(v) || null), l(p, h, "" + k, b));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Pi:
            return (
              (h = h.get(k.key === null ? v : k.key) || null),
              a(p, h, k, b)
            );
          case Cr:
            return (
              (h = h.get(k.key === null ? v : k.key) || null),
              u(p, h, k, b)
            );
          case yn:
            var P = k._init;
            return c(h, p, v, P(k._payload), b);
        }
        if (Ro(k) || go(k))
          return ((h = h.get(v) || null), d(p, h, k, b, null));
        Di(p, k);
      }
      return null;
    }
    function x(h, p, v, k) {
      for (
        var b = null, P = null, T = p, O = (p = 0), F = null;
        T !== null && O < v.length;
        O++
      ) {
        T.index > O ? ((F = T), (T = null)) : (F = T.sibling);
        var I = m(h, T, v[O], k);
        if (I === null) {
          T === null && (T = F);
          break;
        }
        (e && T && I.alternate === null && t(h, T),
          (p = i(I, p, O)),
          P === null ? (b = I) : (P.sibling = I),
          (P = I),
          (T = F));
      }
      if (O === v.length) return (n(h, T), ge && Jn(h, O), b);
      if (T === null) {
        for (; O < v.length; O++)
          ((T = f(h, v[O], k)),
            T !== null &&
              ((p = i(T, p, O)),
              P === null ? (b = T) : (P.sibling = T),
              (P = T)));
        return (ge && Jn(h, O), b);
      }
      for (T = r(h, T); O < v.length; O++)
        ((F = c(T, h, O, v[O], k)),
          F !== null &&
            (e && F.alternate !== null && T.delete(F.key === null ? O : F.key),
            (p = i(F, p, O)),
            P === null ? (b = F) : (P.sibling = F),
            (P = F)));
      return (
        e &&
          T.forEach(function (H) {
            return t(h, H);
          }),
        ge && Jn(h, O),
        b
      );
    }
    function g(h, p, v, k) {
      var b = go(v);
      if (typeof b != "function") throw Error(_(150));
      if (((v = b.call(v)), v == null)) throw Error(_(151));
      for (
        var P = (b = null), T = p, O = (p = 0), F = null, I = v.next();
        T !== null && !I.done;
        O++, I = v.next()
      ) {
        T.index > O ? ((F = T), (T = null)) : (F = T.sibling);
        var H = m(h, T, I.value, k);
        if (H === null) {
          T === null && (T = F);
          break;
        }
        (e && T && H.alternate === null && t(h, T),
          (p = i(H, p, O)),
          P === null ? (b = H) : (P.sibling = H),
          (P = H),
          (T = F));
      }
      if (I.done) return (n(h, T), ge && Jn(h, O), b);
      if (T === null) {
        for (; !I.done; O++, I = v.next())
          ((I = f(h, I.value, k)),
            I !== null &&
              ((p = i(I, p, O)),
              P === null ? (b = I) : (P.sibling = I),
              (P = I)));
        return (ge && Jn(h, O), b);
      }
      for (T = r(h, T); !I.done; O++, I = v.next())
        ((I = c(T, h, O, I.value, k)),
          I !== null &&
            (e && I.alternate !== null && T.delete(I.key === null ? O : I.key),
            (p = i(I, p, O)),
            P === null ? (b = I) : (P.sibling = I),
            (P = I)));
      return (
        e &&
          T.forEach(function (B) {
            return t(h, B);
          }),
        ge && Jn(h, O),
        b
      );
    }
    function y(h, p, v, k) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === kr &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Pi:
            e: {
              for (var b = v.key, P = p; P !== null; ) {
                if (P.key === b) {
                  if (((b = v.type), b === kr)) {
                    if (P.tag === 7) {
                      (n(h, P.sibling),
                        (p = o(P, v.props.children)),
                        (p.return = h),
                        (h = p));
                      break e;
                    }
                  } else if (
                    P.elementType === b ||
                    (typeof b == "object" &&
                      b !== null &&
                      b.$$typeof === yn &&
                      sd(b) === P.type)
                  ) {
                    (n(h, P.sibling),
                      (p = o(P, v.props)),
                      (p.ref = So(h, P, v)),
                      (p.return = h),
                      (h = p));
                    break e;
                  }
                  n(h, P);
                  break;
                } else t(h, P);
                P = P.sibling;
              }
              v.type === kr
                ? ((p = dr(v.props.children, h.mode, k, v.key)),
                  (p.return = h),
                  (h = p))
                : ((k = os(v.type, v.key, v.props, null, h.mode, k)),
                  (k.ref = So(h, p, v)),
                  (k.return = h),
                  (h = k));
            }
            return s(h);
          case Cr:
            e: {
              for (P = v.key; p !== null; ) {
                if (p.key === P)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === v.containerInfo &&
                    p.stateNode.implementation === v.implementation
                  ) {
                    (n(h, p.sibling),
                      (p = o(p, v.children || [])),
                      (p.return = h),
                      (h = p));
                    break e;
                  } else {
                    n(h, p);
                    break;
                  }
                else t(h, p);
                p = p.sibling;
              }
              ((p = Hl(v, h.mode, k)), (p.return = h), (h = p));
            }
            return s(h);
          case yn:
            return ((P = v._init), y(h, p, P(v._payload), k));
        }
        if (Ro(v)) return x(h, p, v, k);
        if (go(v)) return g(h, p, v, k);
        Di(h, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          p !== null && p.tag === 6
            ? (n(h, p.sibling), (p = o(p, v)), (p.return = h), (h = p))
            : (n(h, p), (p = Wl(v, h.mode, k)), (p.return = h), (h = p)),
          s(h))
        : n(h, p);
    }
    return y;
  }
  var to = zp(!0),
    $p = zp(!1),
    Ss = Kn(null),
    Es = null,
    Or = null,
    ju = null;
  function Ou() {
    ju = Or = Es = null;
  }
  function _u(e) {
    var t = Ss.current;
    (he(Ss), (e._currentValue = t));
  }
  function Na(e, t, n) {
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
  function zr(e, t) {
    ((Es = e),
      (ju = Or = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ze = !0), (e.firstContext = null)));
  }
  function yt(e) {
    var t = e._currentValue;
    if (ju !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Or === null)) {
        if (Es === null) throw Error(_(308));
        ((Or = e), (Es.dependencies = { lanes: 0, firstContext: e }));
      } else Or = Or.next = e;
    return t;
  }
  var nr = null;
  function Au(e) {
    nr === null ? (nr = [e]) : nr.push(e);
  }
  function Bp(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), Au(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      on(e, r)
    );
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var wn = !1;
  function Lu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Up(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function tn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), oe & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        on(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Au(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      on(e, n)
    );
  }
  function Zi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n));
    }
  }
  function ld(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Cs(e, t, n, r) {
    var o = e.updateQueue;
    wn = !1;
    var i = o.firstBaseUpdate,
      s = o.lastBaseUpdate,
      l = o.shared.pending;
    if (l !== null) {
      o.shared.pending = null;
      var a = l,
        u = a.next;
      ((a.next = null), s === null ? (i = u) : (s.next = u), (s = a));
      var d = e.alternate;
      d !== null &&
        ((d = d.updateQueue),
        (l = d.lastBaseUpdate),
        l !== s &&
          (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
          (d.lastBaseUpdate = a)));
    }
    if (i !== null) {
      var f = o.baseState;
      ((s = 0), (d = u = a = null), (l = i));
      do {
        var m = l.lane,
          c = l.eventTime;
        if ((r & m) === m) {
          d !== null &&
            (d = d.next =
              {
                eventTime: c,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              });
          e: {
            var x = e,
              g = l;
            switch (((m = t), (c = n), g.tag)) {
              case 1:
                if (((x = g.payload), typeof x == "function")) {
                  f = x.call(c, f, m);
                  break e;
                }
                f = x;
                break e;
              case 3:
                x.flags = (x.flags & -65537) | 128;
              case 0:
                if (
                  ((x = g.payload),
                  (m = typeof x == "function" ? x.call(c, f, m) : x),
                  m == null)
                )
                  break e;
                f = we({}, f, m);
                break e;
              case 2:
                wn = !0;
            }
          }
          l.callback !== null &&
            l.lane !== 0 &&
            ((e.flags |= 64),
            (m = o.effects),
            m === null ? (o.effects = [l]) : m.push(l));
        } else
          ((c = {
            eventTime: c,
            lane: m,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          }),
            d === null ? ((u = d = c), (a = f)) : (d = d.next = c),
            (s |= m));
        if (((l = l.next), l === null)) {
          if (((l = o.shared.pending), l === null)) break;
          ((m = l),
            (l = m.next),
            (m.next = null),
            (o.lastBaseUpdate = m),
            (o.shared.pending = null));
        }
      } while (!0);
      if (
        (d === null && (a = f),
        (o.baseState = a),
        (o.firstBaseUpdate = u),
        (o.lastBaseUpdate = d),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do ((s |= o.lane), (o = o.next));
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      ((mr |= s), (e.lanes = s), (e.memoizedState = f));
    }
  }
  function ad(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(_(191, o));
          o.call(r);
        }
      }
  }
  var mi = {},
    Wt = Kn(mi),
    Jo = Kn(mi),
    ei = Kn(mi);
  function rr(e) {
    if (e === mi) throw Error(_(174));
    return e;
  }
  function Iu(e, t) {
    switch ((de(ei, t), de(Jo, e), de(Wt, mi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : aa(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = aa(t, e)));
    }
    (he(Wt), de(Wt, t));
  }
  function no() {
    (he(Wt), he(Jo), he(ei));
  }
  function Vp(e) {
    rr(ei.current);
    var t = rr(Wt.current),
      n = aa(t, e.type);
    t !== n && (de(Jo, e), de(Wt, n));
  }
  function Du(e) {
    Jo.current === e && (he(Wt), he(Jo));
  }
  var ve = Kn(0);
  function ks(e) {
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
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Fl = [];
  function Fu() {
    for (var e = 0; e < Fl.length; e++)
      Fl[e]._workInProgressVersionPrimary = null;
    Fl.length = 0;
  }
  var Ji = un.ReactCurrentDispatcher,
    zl = un.ReactCurrentBatchConfig,
    hr = 0,
    ye = null,
    ke = null,
    Ne = null,
    bs = !1,
    Do = !1,
    ti = 0,
    my = 0;
  function Le() {
    throw Error(_(321));
  }
  function zu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function $u(e, t, n, r, o, i) {
    if (
      ((hr = i),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ji.current = e === null || e.memoizedState === null ? wy : xy),
      (e = n(r, o)),
      Do)
    ) {
      i = 0;
      do {
        if (((Do = !1), (ti = 0), 25 <= i)) throw Error(_(301));
        ((i += 1),
          (Ne = ke = null),
          (t.updateQueue = null),
          (Ji.current = Sy),
          (e = n(r, o)));
      } while (Do);
    }
    if (
      ((Ji.current = Ps),
      (t = ke !== null && ke.next !== null),
      (hr = 0),
      (Ne = ke = ye = null),
      (bs = !1),
      t)
    )
      throw Error(_(300));
    return e;
  }
  function Bu() {
    var e = ti !== 0;
    return ((ti = 0), e);
  }
  function Ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne);
  }
  function wt() {
    if (ke === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = Ne === null ? ye.memoizedState : Ne.next;
    if (t !== null) ((Ne = t), (ke = e));
    else {
      if (e === null) throw Error(_(310));
      ((ke = e),
        (e = {
          memoizedState: ke.memoizedState,
          baseState: ke.baseState,
          baseQueue: ke.baseQueue,
          queue: ke.queue,
          next: null,
        }),
        Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e));
    }
    return Ne;
  }
  function ni(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $l(e) {
    var t = wt(),
      n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = ke,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var s = o.next;
        ((o.next = i.next), (i.next = s));
      }
      ((r.baseQueue = o = i), (n.pending = null));
    }
    if (o !== null) {
      ((i = o.next), (r = r.baseState));
      var l = (s = null),
        a = null,
        u = i;
      do {
        var d = u.lane;
        if ((hr & d) === d)
          (a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
        else {
          var f = {
            lane: d,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          (a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
            (ye.lanes |= d),
            (mr |= d));
        }
        u = u.next;
      } while (u !== null && u !== i);
      (a === null ? (s = r) : (a.next = l),
        _t(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = a),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do ((i = o.lane), (ye.lanes |= i), (mr |= i), (o = o.next));
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Bl(e) {
    var t = wt(),
      n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var s = (o = o.next);
      do ((i = e(i, s.action)), (s = s.next));
      while (s !== o);
      (_t(i, t.memoizedState) || (Ze = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function Wp() {}
  function Hp(e, t) {
    var n = ye,
      r = wt(),
      o = t(),
      i = !_t(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (Ze = !0)),
      (r = r.queue),
      Uu(Gp.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ri(9, Kp.bind(null, n, r, o, t), void 0, null),
        Re === null)
      )
        throw Error(_(349));
      hr & 30 || Qp(n, t, o);
    }
    return o;
  }
  function Qp(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Kp(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Yp(t) && Xp(e));
  }
  function Gp(e, t, n) {
    return n(function () {
      Yp(t) && Xp(e);
    });
  }
  function Yp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function Xp(e) {
    var t = on(e, 1);
    t !== null && Ot(t, e, 1, -1);
  }
  function ud(e) {
    var t = Ft();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ni,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yy.bind(null, ye, e)),
      [t.memoizedState, e]
    );
  }
  function ri(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function qp() {
    return wt().memoizedState;
  }
  function es(e, t, n, r) {
    var o = Ft();
    ((ye.flags |= e),
      (o.memoizedState = ri(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Ks(e, t, n, r) {
    var o = wt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ke !== null) {
      var s = ke.memoizedState;
      if (((i = s.destroy), r !== null && zu(r, s.deps))) {
        o.memoizedState = ri(t, n, i, r);
        return;
      }
    }
    ((ye.flags |= e), (o.memoizedState = ri(1 | t, n, i, r)));
  }
  function cd(e, t) {
    return es(8390656, 8, e, t);
  }
  function Uu(e, t) {
    return Ks(2048, 8, e, t);
  }
  function Zp(e, t) {
    return Ks(4, 2, e, t);
  }
  function Jp(e, t) {
    return Ks(4, 4, e, t);
  }
  function eh(e, t) {
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
  function th(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Ks(4, 4, eh.bind(null, t, e), n)
    );
  }
  function Vu() {}
  function nh(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zu(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function rh(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function oh(e, t, n) {
    return hr & 21
      ? (_t(n, t) ||
          ((n = up()), (ye.lanes |= n), (mr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
  }
  function gy(e, t) {
    var n = ae;
    ((ae = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = zl.transition;
    zl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ae = n), (zl.transition = r));
    }
  }
  function ih() {
    return wt().memoizedState;
  }
  function vy(e, t, n) {
    var r = In(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sh(e))
    )
      lh(t, n);
    else if (((n = Bp(e, t, n, r)), n !== null)) {
      var o = Qe();
      (Ot(n, e, r, o), ah(n, t, r));
    }
  }
  function yy(e, t, n) {
    var r = In(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (sh(e)) lh(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var s = t.lastRenderedState,
            l = i(s, n);
          if (((o.hasEagerState = !0), (o.eagerState = l), _t(l, s))) {
            var a = t.interleaved;
            (a === null
              ? ((o.next = o), Au(t))
              : ((o.next = a.next), (a.next = o)),
              (t.interleaved = o));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Bp(e, t, o, r)),
        n !== null && ((o = Qe()), Ot(n, e, r, o), ah(n, t, r)));
    }
  }
  function sh(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function lh(e, t) {
    Do = bs = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function ah(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n));
    }
  }
  var Ps = {
      readContext: yt,
      useCallback: Le,
      useContext: Le,
      useEffect: Le,
      useImperativeHandle: Le,
      useInsertionEffect: Le,
      useLayoutEffect: Le,
      useMemo: Le,
      useReducer: Le,
      useRef: Le,
      useState: Le,
      useDebugValue: Le,
      useDeferredValue: Le,
      useTransition: Le,
      useMutableSource: Le,
      useSyncExternalStore: Le,
      useId: Le,
      unstable_isNewReconciler: !1,
    },
    wy = {
      readContext: yt,
      useCallback: function (e, t) {
        return ((Ft().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: cd,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          es(4194308, 4, eh.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return es(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return es(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ft();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ft();
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
          (e = e.dispatch = vy.bind(null, ye, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ud,
      useDebugValue: Vu,
      useDeferredValue: function (e) {
        return (Ft().memoizedState = e);
      },
      useTransition: function () {
        var e = ud(!1),
          t = e[0];
        return ((e = gy.bind(null, e[1])), (Ft().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ye,
          o = Ft();
        if (ge) {
          if (n === void 0) throw Error(_(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(_(349));
          hr & 30 || Qp(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          cd(Gp.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          ri(9, Kp.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ft(),
          t = Re.identifierPrefix;
        if (ge) {
          var n = en,
            r = Jt;
          ((n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ti++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = my++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    xy = {
      readContext: yt,
      useCallback: nh,
      useContext: yt,
      useEffect: Uu,
      useImperativeHandle: th,
      useInsertionEffect: Zp,
      useLayoutEffect: Jp,
      useMemo: rh,
      useReducer: $l,
      useRef: qp,
      useState: function () {
        return $l(ni);
      },
      useDebugValue: Vu,
      useDeferredValue: function (e) {
        var t = wt();
        return oh(t, ke.memoizedState, e);
      },
      useTransition: function () {
        var e = $l(ni)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wp,
      useSyncExternalStore: Hp,
      useId: ih,
      unstable_isNewReconciler: !1,
    },
    Sy = {
      readContext: yt,
      useCallback: nh,
      useContext: yt,
      useEffect: Uu,
      useImperativeHandle: th,
      useInsertionEffect: Zp,
      useLayoutEffect: Jp,
      useMemo: rh,
      useReducer: Bl,
      useRef: qp,
      useState: function () {
        return Bl(ni);
      },
      useDebugValue: Vu,
      useDeferredValue: function (e) {
        var t = wt();
        return ke === null ? (t.memoizedState = e) : oh(t, ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Bl(ni)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wp,
      useSyncExternalStore: Hp,
      useId: ih,
      unstable_isNewReconciler: !1,
    };
  function bt(e, t) {
    if (e && e.defaultProps) {
      ((t = we({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ra(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : we({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Gs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? wr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Qe(),
        o = In(e),
        i = tn(r, o);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = An(e, i, o)),
        t !== null && (Ot(t, e, o, r), Zi(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Qe(),
        o = In(e),
        i = tn(r, o);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = An(e, i, o)),
        t !== null && (Ot(t, e, o, r), Zi(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Qe(),
        r = In(e),
        o = tn(n, r);
      ((o.tag = 2),
        t != null && (o.callback = t),
        (t = An(e, o, r)),
        t !== null && (Ot(t, e, r, n), Zi(t, e, r)));
    },
  };
  function dd(e, t, n, r, o, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, s)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yo(n, r) || !Yo(o, i)
          : !0
    );
  }
  function uh(e, t, n) {
    var r = !1,
      o = zn,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = yt(i))
        : ((o = et(t) ? fr : ze.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Jr(e, o) : zn)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Gs),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function fd(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Gs.enqueueReplaceState(t, t.state, null));
  }
  function Ma(e, t, n, r) {
    var o = e.stateNode;
    ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Lu(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (o.context = yt(i))
      : ((i = et(t) ? fr : ze.current), (o.context = Jr(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Ra(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Gs.enqueueReplaceState(o, o.state, null),
        Cs(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function ro(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += Yg(r)), (r = r.return));
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Ul(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ja(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ey = typeof WeakMap == "function" ? WeakMap : Map;
  function ch(e, t, n) {
    ((n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ns || ((Ns = !0), (Ba = r)), ja(e, t));
      }),
      n
    );
  }
  function dh(e, t, n) {
    ((n = tn(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      ((n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          ja(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (ja(e, t),
            typeof r != "function" &&
              (Ln === null ? (Ln = new Set([this])) : Ln.add(this)));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function pd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ey();
      var o = new Set();
      r.set(t, o);
    } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
    o.has(n) || (o.add(n), (e = Iy.bind(null, e, t, n)), t.then(e, e));
  }
  function hd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function md(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = tn(-1, 1)), (t.tag = 2), An(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Cy = un.ReactCurrentOwner,
    Ze = !1;
  function We(e, t, n, r) {
    t.child = e === null ? $p(t, null, n, r) : to(t, e.child, n, r);
  }
  function gd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      zr(t, o),
      (r = $u(e, t, n, r, i, o)),
      (n = Bu()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          sn(e, t, o))
        : (ge && n && Nu(t), (t.flags |= 1), We(e, t, r, o), t.child)
    );
  }
  function vd(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !qu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), fh(e, t, i, r, o))
        : ((e = os(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var s = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yo), n(s, r) && e.ref === t.ref)
      )
        return sn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = Dn(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function fh(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Yo(i, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (Ze = !0);
        else return ((t.lanes = e.lanes), sn(e, t, o));
    }
    return Oa(e, t, n, r, o);
  }
  function ph(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          de(Ar, it),
          (it |= n));
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            de(Ar, it),
            (it |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          de(Ar, it),
          (it |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(Ar, it),
        (it |= r));
    return (We(e, t, o, n), t.child);
  }
  function hh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Oa(e, t, n, r, o) {
    var i = et(n) ? fr : ze.current;
    return (
      (i = Jr(t, i)),
      zr(t, o),
      (n = $u(e, t, n, r, i, o)),
      (r = Bu()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          sn(e, t, o))
        : (ge && r && Nu(t), (t.flags |= 1), We(e, t, n, o), t.child)
    );
  }
  function yd(e, t, n, r, o) {
    if (et(n)) {
      var i = !0;
      ys(t);
    } else i = !1;
    if ((zr(t, o), t.stateNode === null))
      (ts(e, t), uh(t, n, r), Ma(t, n, r, o), (r = !0));
    else if (e === null) {
      var s = t.stateNode,
        l = t.memoizedProps;
      s.props = l;
      var a = s.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = yt(u))
        : ((u = et(n) ? fr : ze.current), (u = Jr(t, u)));
      var d = n.getDerivedStateFromProps,
        f =
          typeof d == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      (f ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((l !== r || a !== u) && fd(t, s, r, u)),
        (wn = !1));
      var m = t.memoizedState;
      ((s.state = m),
        Cs(t, r, s, o),
        (a = t.memoizedState),
        l !== r || m !== a || Je.current || wn
          ? (typeof d == "function" && (Ra(t, n, d, r), (a = t.memoizedState)),
            (l = wn || dd(t, n, l, r, m, a, u))
              ? (f ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (s.props = r),
            (s.state = a),
            (s.context = u),
            (r = l))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((s = t.stateNode),
        Up(e, t),
        (l = t.memoizedProps),
        (u = t.type === t.elementType ? l : bt(t.type, l)),
        (s.props = u),
        (f = t.pendingProps),
        (m = s.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = yt(a))
          : ((a = et(n) ? fr : ze.current), (a = Jr(t, a))));
      var c = n.getDerivedStateFromProps;
      ((d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((l !== f || m !== a) && fd(t, s, r, a)),
        (wn = !1),
        (m = t.memoizedState),
        (s.state = m),
        Cs(t, r, s, o));
      var x = t.memoizedState;
      l !== f || m !== x || Je.current || wn
        ? (typeof c == "function" && (Ra(t, n, c, r), (x = t.memoizedState)),
          (u = wn || dd(t, n, u, r, m, x, a) || !1)
            ? (d ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, x, a),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, x, a)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (l === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (l === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = x)),
          (s.props = r),
          (s.state = x),
          (s.context = a),
          (r = u))
        : (typeof s.componentDidUpdate != "function" ||
            (l === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (l === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return _a(e, t, n, r, i, o);
  }
  function _a(e, t, n, r, o, i) {
    hh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return (o && rd(t, n, !1), sn(e, t, i));
    ((r = t.stateNode), (Cy.current = t));
    var l =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = to(t, e.child, null, i)), (t.child = to(t, null, l, i)))
        : We(e, t, l, i),
      (t.memoizedState = r.state),
      o && rd(t, n, !0),
      t.child
    );
  }
  function mh(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? nd(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && nd(e, t.context, !1),
      Iu(e, t.containerInfo));
  }
  function wd(e, t, n, r, o) {
    return (eo(), Mu(o), (t.flags |= 256), We(e, t, n, r), t.child);
  }
  var Aa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function La(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function gh(e, t, n) {
    var r = t.pendingProps,
      o = ve.current,
      i = !1,
      s = (t.flags & 128) !== 0,
      l;
    if (
      ((l = s) ||
        (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      l
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      de(ve, o & 1),
      e === null)
    )
      return (
        Ta(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = s))
                  : (i = qs(s, r, 0, null)),
                (e = dr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = La(n)),
                (t.memoizedState = Aa),
                e)
              : Wu(t, s))
      );
    if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
      return ky(e, t, s, r, l, o, n);
    if (i) {
      ((i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling));
      var a = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = Dn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        l !== null ? (i = Dn(l, i)) : ((i = dr(i, s, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? La(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (i.memoizedState = s),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Aa),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Dn(i, { mode: "visible", children: r.children })),
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
  function Wu(e, t) {
    return (
      (t = qs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fi(e, t, n, r) {
    return (
      r !== null && Mu(r),
      to(t, e.child, null, n),
      (e = Wu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ky(e, t, n, r, o, i, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ul(Error(_(422)))), Fi(e, t, s, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (o = t.mode),
            (r = qs({ mode: "visible", children: r.children }, o, 0, null)),
            (i = dr(i, o, s, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            t.mode & 1 && to(t, e.child, null, s),
            (t.child.memoizedState = La(s)),
            (t.memoizedState = Aa),
            i);
    if (!(t.mode & 1)) return Fi(e, t, s, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
      return (
        (r = l),
        (i = Error(_(419))),
        (r = Ul(i, r, void 0)),
        Fi(e, t, s, r)
      );
    }
    if (((l = (s & e.childLanes) !== 0), Ze || l)) {
      if (((r = Re), r !== null)) {
        switch (s & -s) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        ((o = o & (r.suspendedLanes | s) ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), on(e, o), Ot(r, e, o, -1)));
      }
      return (Xu(), (r = Ul(Error(_(421)))), Fi(e, t, s, r));
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Dy.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (lt = _n(o.nextSibling)),
        (at = t),
        (ge = !0),
        (Mt = null),
        e !== null &&
          ((ht[mt++] = Jt),
          (ht[mt++] = en),
          (ht[mt++] = pr),
          (Jt = e.id),
          (en = e.overflow),
          (pr = t)),
        (t = Wu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function xd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Na(e.return, t, n));
  }
  function Vl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function vh(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((We(e, t, r.children, n), (r = ve.current), r & 2))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
          else if (e.tag === 19) xd(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((de(ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            ((e = n.alternate),
              e !== null && ks(e) === null && (o = n),
              (n = n.sibling));
          ((n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Vl(t, !1, o, n, i));
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && ks(e) === null)) {
              t.child = o;
              break;
            }
            ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
          }
          Vl(t, !0, n, null, i);
          break;
        case "together":
          Vl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ts(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function sn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (mr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Dn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Dn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function by(e, t, n) {
    switch (t.tag) {
      case 3:
        (mh(t), eo());
        break;
      case 5:
        Vp(t);
        break;
      case 1:
        et(t.type) && ys(t);
        break;
      case 4:
        Iu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        (de(Ss, r._currentValue), (r._currentValue = o));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(ve, ve.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? gh(e, t, n)
              : (de(ve, ve.current & 1),
                (e = sn(e, t, n)),
                e !== null ? e.sibling : null);
        de(ve, ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return vh(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          de(ve, ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), ph(e, t, n));
    }
    return sn(e, t, n);
  }
  var yh, Ia, wh, xh;
  yh = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  };
  Ia = function () {};
  wh = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      ((e = t.stateNode), rr(Wt.current));
      var i = null;
      switch (n) {
        case "input":
          ((o = oa(e, o)), (r = oa(e, r)), (i = []));
          break;
        case "select":
          ((o = we({}, o, { value: void 0 })),
            (r = we({}, r, { value: void 0 })),
            (i = []));
          break;
        case "textarea":
          ((o = la(e, o)), (r = la(e, r)), (i = []));
          break;
        default:
          typeof o.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = gs);
      }
      ua(n, r);
      var s;
      n = null;
      for (u in o)
        if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
          if (u === "style") {
            var l = o[u];
            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (Uo.hasOwnProperty(u)
                ? i || (i = [])
                : (i = i || []).push(u, null));
      for (u in r) {
        var a = r[u];
        if (
          ((l = o != null ? o[u] : void 0),
          r.hasOwnProperty(u) && a !== l && (a != null || l != null))
        )
          if (u === "style")
            if (l) {
              for (s in l)
                !l.hasOwnProperty(s) ||
                  (a && a.hasOwnProperty(s)) ||
                  (n || (n = {}), (n[s] = ""));
              for (s in a)
                a.hasOwnProperty(s) &&
                  l[s] !== a[s] &&
                  (n || (n = {}), (n[s] = a[s]));
            } else (n || (i || (i = []), i.push(u, n)), (n = a));
          else
            u === "dangerouslySetInnerHTML"
              ? ((a = a ? a.__html : void 0),
                (l = l ? l.__html : void 0),
                a != null && l !== a && (i = i || []).push(u, a))
              : u === "children"
                ? (typeof a != "string" && typeof a != "number") ||
                  (i = i || []).push(u, "" + a)
                : u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  (Uo.hasOwnProperty(u)
                    ? (a != null && u === "onScroll" && pe("scroll", e),
                      i || l === a || (i = []))
                    : (i = i || []).push(u, a));
      }
      n && (i = i || []).push("style", n);
      var u = i;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  xh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Eo(e, t) {
    if (!ge)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Py(e, t, n) {
    var r = t.pendingProps;
    switch ((Ru(t), t.tag)) {
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
        return (Ie(t), null);
      case 1:
        return (et(t.type) && vs(), Ie(t), null);
      case 3:
        return (
          (r = t.stateNode),
          no(),
          he(Je),
          he(ze),
          Fu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ii(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Mt !== null && (Wa(Mt), (Mt = null)))),
          Ia(e, t),
          Ie(t),
          null
        );
      case 5:
        Du(t);
        var o = rr(ei.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (wh(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(_(166));
            return (Ie(t), null);
          }
          if (((e = rr(Wt.current)), Ii(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[Ut] = t), (r[Zo] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (pe("cancel", r), pe("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < jo.length; o++) pe(jo[o], r);
                break;
              case "source":
                pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (pe("error", r), pe("load", r));
                break;
              case "details":
                pe("toggle", r);
                break;
              case "input":
                (Rc(r, i), pe("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  pe("invalid", r));
                break;
              case "textarea":
                (jc(r, i), pe("invalid", r));
            }
            (ua(n, i), (o = null));
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var l = i[s];
                s === "children"
                  ? typeof l == "string"
                    ? r.textContent !== l &&
                      (i.suppressHydrationWarning !== !0 &&
                        Li(r.textContent, l, e),
                      (o = ["children", l]))
                    : typeof l == "number" &&
                      r.textContent !== "" + l &&
                      (i.suppressHydrationWarning !== !0 &&
                        Li(r.textContent, l, e),
                      (o = ["children", "" + l]))
                  : Uo.hasOwnProperty(s) &&
                    l != null &&
                    s === "onScroll" &&
                    pe("scroll", r);
              }
            switch (n) {
              case "input":
                (Ti(r), Mc(r, i, !0));
                break;
              case "textarea":
                (Ti(r), Oc(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = gs);
            }
            ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((s = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Gf(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = s.createElement(n, { is: r.is }))
                    : ((e = s.createElement(n)),
                      n === "select" &&
                        ((s = e),
                        r.multiple
                          ? (s.multiple = !0)
                          : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Ut] = t),
              (e[Zo] = r),
              yh(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((s = ca(n, r)), n)) {
                case "dialog":
                  (pe("cancel", e), pe("close", e), (o = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (pe("load", e), (o = r));
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < jo.length; o++) pe(jo[o], e);
                  o = r;
                  break;
                case "source":
                  (pe("error", e), (o = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (pe("error", e), pe("load", e), (o = r));
                  break;
                case "details":
                  (pe("toggle", e), (o = r));
                  break;
                case "input":
                  (Rc(e, r), (o = oa(e, r)), pe("invalid", e));
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = we({}, r, { value: void 0 })),
                    pe("invalid", e));
                  break;
                case "textarea":
                  (jc(e, r), (o = la(e, r)), pe("invalid", e));
                  break;
                default:
                  o = r;
              }
              (ua(n, o), (l = o));
              for (i in l)
                if (l.hasOwnProperty(i)) {
                  var a = l[i];
                  i === "style"
                    ? qf(e, a)
                    : i === "dangerouslySetInnerHTML"
                      ? ((a = a ? a.__html : void 0), a != null && Yf(e, a))
                      : i === "children"
                        ? typeof a == "string"
                          ? (n !== "textarea" || a !== "") && Vo(e, a)
                          : typeof a == "number" && Vo(e, "" + a)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (Uo.hasOwnProperty(i)
                            ? a != null && i === "onScroll" && pe("scroll", e)
                            : a != null && hu(e, i, a, s));
                }
              switch (n) {
                case "input":
                  (Ti(e), Mc(e, r, !1));
                  break;
                case "textarea":
                  (Ti(e), Oc(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Fn(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Lr(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Lr(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = gs);
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
        return (Ie(t), null);
      case 6:
        if (e && t.stateNode != null) xh(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
          if (((n = rr(ei.current)), rr(Wt.current), Ii(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ut] = t),
              (i = r.nodeValue !== n) && ((e = at), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Li(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Li(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ut] = t),
              (t.stateNode = r));
        }
        return (Ie(t), null);
      case 13:
        if (
          (he(ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ge && lt !== null && t.mode & 1 && !(t.flags & 128))
            (Fp(), eo(), (t.flags |= 98560), (i = !1));
          else if (((i = Ii(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(_(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(_(317));
              i[Ut] = t;
            } else
              (eo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4));
            (Ie(t), (i = !1));
          } else (Mt !== null && (Wa(Mt), (Mt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ve.current & 1 ? Pe === 0 && (Pe = 3) : Xu())),
            t.updateQueue !== null && (t.flags |= 4),
            Ie(t),
            null);
      case 4:
        return (
          no(),
          Ia(e, t),
          e === null && Xo(t.stateNode.containerInfo),
          Ie(t),
          null
        );
      case 10:
        return (_u(t.type._context), Ie(t), null);
      case 17:
        return (et(t.type) && vs(), Ie(t), null);
      case 19:
        if ((he(ve), (i = t.memoizedState), i === null)) return (Ie(t), null);
        if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (r) Eo(i, !1);
          else {
            if (Pe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = ks(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Eo(i, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (s = i.alternate),
                      s === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = s.childLanes),
                          (i.lanes = s.lanes),
                          (i.child = s.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = s.memoizedProps),
                          (i.memoizedState = s.memoizedState),
                          (i.updateQueue = s.updateQueue),
                          (i.type = s.type),
                          (e = s.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (de(ve, (ve.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Ee() > oo &&
              ((t.flags |= 128), (r = !0), Eo(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ks(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Eo(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !s.alternate &&
                  !ge)
              )
                return (Ie(t), null);
            } else
              2 * Ee() - i.renderingStartTime > oo &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Eo(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = i.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ee()),
            (t.sibling = null),
            (n = ve.current),
            de(ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ie(t), null);
      case 22:
      case 23:
        return (
          Yu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? it & 1073741824 &&
              (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ie(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, t.tag));
  }
  function Ty(e, t) {
    switch ((Ru(t), t.tag)) {
      case 1:
        return (
          et(t.type) && vs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          no(),
          he(Je),
          he(ze),
          Fu(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Du(t), null);
      case 13:
        if (
          (he(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(_(340));
          eo();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (he(ve), null);
      case 4:
        return (no(), null);
      case 10:
        return (_u(t.type._context), null);
      case 22:
      case 23:
        return (Yu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zi = !1,
    Fe = !1,
    Ny = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function _r(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Se(e, t, r);
        }
      else n.current = null;
  }
  function Da(e, t, n) {
    try {
      n();
    } catch (r) {
      Se(e, t, r);
    }
  }
  var Sd = !1;
  function Ry(e, t) {
    if (((xa = ps), (e = bp()), Tu(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              l = -1,
              a = -1,
              u = 0,
              d = 0,
              f = e,
              m = null;
            t: for (;;) {
              for (
                var c;
                f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                  f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                  f.nodeType === 3 && (s += f.nodeValue.length),
                  (c = f.firstChild) !== null;
              )
                ((m = f), (f = c));
              for (;;) {
                if (f === e) break t;
                if (
                  (m === n && ++u === o && (l = s),
                  m === i && ++d === r && (a = s),
                  (c = f.nextSibling) !== null)
                )
                  break;
                ((f = m), (m = f.parentNode));
              }
              f = c;
            }
            n = l === -1 || a === -1 ? null : { start: l, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Sa = { focusedElem: e, selectionRange: n }, ps = !1, U = t;
      U !== null;
    )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (U = e));
      else
        for (; U !== null; ) {
          t = U;
          try {
            var x = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (x !== null) {
                    var g = x.memoizedProps,
                      y = x.memoizedState,
                      h = t.stateNode,
                      p = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? g : bt(t.type, g),
                        y,
                      );
                    h.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(_(163));
              }
          } catch (k) {
            Se(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return ((x = Sd), (Sd = !1), x);
  }
  function Fo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          ((o.destroy = void 0), i !== void 0 && Da(t, n, i));
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Ys(e, t) {
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
  function Fa(e) {
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
  function Sh(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Sh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ut],
          delete t[Zo],
          delete t[ka],
          delete t[dy],
          delete t[fy])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Eh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ed(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Eh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function za(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = gs)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (za(e, t, n), e = e.sibling; e !== null; )
        (za(e, t, n), (e = e.sibling));
  }
  function $a(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for ($a(e, t, n), e = e.sibling; e !== null; )
        ($a(e, t, n), (e = e.sibling));
  }
  var Me = null,
    Rt = !1;
  function hn(e, t, n) {
    for (n = n.child; n !== null; ) (Ch(e, t, n), (n = n.sibling));
  }
  function Ch(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
      try {
        Vt.onCommitFiberUnmount(Bs, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Fe || _r(n, t);
      case 6:
        var r = Me,
          o = Rt;
        ((Me = null),
          hn(e, t, n),
          (Me = r),
          (Rt = o),
          Me !== null &&
            (Rt
              ? ((e = Me),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Me.removeChild(n.stateNode)));
        break;
      case 18:
        Me !== null &&
          (Rt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8
                ? Il(e.parentNode, n)
                : e.nodeType === 1 && Il(e, n),
              Ko(e))
            : Il(Me, n.stateNode));
        break;
      case 4:
        ((r = Me),
          (o = Rt),
          (Me = n.stateNode.containerInfo),
          (Rt = !0),
          hn(e, t, n),
          (Me = r),
          (Rt = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Fe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              s = i.destroy;
            ((i = i.tag),
              s !== void 0 && (i & 2 || i & 4) && Da(n, t, s),
              (o = o.next));
          } while (o !== r);
        }
        hn(e, t, n);
        break;
      case 1:
        if (
          !Fe &&
          (_r(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (l) {
            Se(n, t, l);
          }
        hn(e, t, n);
        break;
      case 21:
        hn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Fe = (r = Fe) || n.memoizedState !== null), hn(e, t, n), (Fe = r))
          : hn(e, t, n);
        break;
      default:
        hn(e, t, n);
    }
  }
  function Cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Ny()),
        t.forEach(function (r) {
          var o = Fy.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        }));
    }
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            s = t,
            l = s;
          e: for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                ((Me = l.stateNode), (Rt = !1));
                break e;
              case 3:
                ((Me = l.stateNode.containerInfo), (Rt = !0));
                break e;
              case 4:
                ((Me = l.stateNode.containerInfo), (Rt = !0));
                break e;
            }
            l = l.return;
          }
          if (Me === null) throw Error(_(160));
          (Ch(i, s, o), (Me = null), (Rt = !1));
          var a = o.alternate;
          (a !== null && (a.return = null), (o.return = null));
        } catch (u) {
          Se(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (kh(t, e), (t = t.sibling));
  }
  function kh(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ct(t, e), Dt(e), r & 4)) {
          try {
            (Fo(3, e, e.return), Ys(3, e));
          } catch (g) {
            Se(e, e.return, g);
          }
          try {
            Fo(5, e, e.return);
          } catch (g) {
            Se(e, e.return, g);
          }
        }
        break;
      case 1:
        (Ct(t, e), Dt(e), r & 512 && n !== null && _r(n, n.return));
        break;
      case 5:
        if (
          (Ct(t, e),
          Dt(e),
          r & 512 && n !== null && _r(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Vo(o, "");
          } catch (g) {
            Se(e, e.return, g);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            s = n !== null ? n.memoizedProps : i,
            l = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              (l === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Qf(o, i),
                ca(l, s));
              var u = ca(l, i);
              for (s = 0; s < a.length; s += 2) {
                var d = a[s],
                  f = a[s + 1];
                d === "style"
                  ? qf(o, f)
                  : d === "dangerouslySetInnerHTML"
                    ? Yf(o, f)
                    : d === "children"
                      ? Vo(o, f)
                      : hu(o, d, f, u);
              }
              switch (l) {
                case "input":
                  ia(o, i);
                  break;
                case "textarea":
                  Kf(o, i);
                  break;
                case "select":
                  var m = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var c = i.value;
                  c != null
                    ? Lr(o, !!i.multiple, c, !1)
                    : m !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Lr(o, !!i.multiple, i.defaultValue, !0)
                        : Lr(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[Zo] = i;
            } catch (g) {
              Se(e, e.return, g);
            }
        }
        break;
      case 6:
        if ((Ct(t, e), Dt(e), r & 4)) {
          if (e.stateNode === null) throw Error(_(162));
          ((o = e.stateNode), (i = e.memoizedProps));
          try {
            o.nodeValue = i;
          } catch (g) {
            Se(e, e.return, g);
          }
        }
        break;
      case 3:
        if (
          (Ct(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ko(t.containerInfo);
          } catch (g) {
            Se(e, e.return, g);
          }
        break;
      case 4:
        (Ct(t, e), Dt(e));
        break;
      case 13:
        (Ct(t, e),
          Dt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Ku = Ee())),
          r & 4 && Cd(e));
        break;
      case 22:
        if (
          ((d = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Fe = (u = Fe) || d), Ct(t, e), (Fe = u)) : Ct(t, e),
          Dt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
          )
            for (U = e, d = e.child; d !== null; ) {
              for (f = U = d; U !== null; ) {
                switch (((m = U), (c = m.child), m.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Fo(4, m, m.return);
                    break;
                  case 1:
                    _r(m, m.return);
                    var x = m.stateNode;
                    if (typeof x.componentWillUnmount == "function") {
                      ((r = m), (n = m.return));
                      try {
                        ((t = r),
                          (x.props = t.memoizedProps),
                          (x.state = t.memoizedState),
                          x.componentWillUnmount());
                      } catch (g) {
                        Se(r, n, g);
                      }
                    }
                    break;
                  case 5:
                    _r(m, m.return);
                    break;
                  case 22:
                    if (m.memoizedState !== null) {
                      bd(f);
                      continue;
                    }
                }
                c !== null ? ((c.return = m), (U = c)) : bd(f);
              }
              d = d.sibling;
            }
          e: for (d = null, f = e; ; ) {
            if (f.tag === 5) {
              if (d === null) {
                d = f;
                try {
                  ((o = f.stateNode),
                    u
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((l = f.stateNode),
                        (a = f.memoizedProps.style),
                        (s =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (l.style.display = Xf("display", s))));
                } catch (g) {
                  Se(e, e.return, g);
                }
              }
            } else if (f.tag === 6) {
              if (d === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (g) {
                  Se(e, e.return, g);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              ((f.child.return = f), (f = f.child));
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              (d === f && (d = null), (f = f.return));
            }
            (d === f && (d = null),
              (f.sibling.return = f.return),
              (f = f.sibling));
          }
        }
        break;
      case 19:
        (Ct(t, e), Dt(e), r & 4 && Cd(e));
        break;
      case 21:
        break;
      default:
        (Ct(t, e), Dt(e));
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Eh(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(_(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Vo(o, ""), (r.flags &= -33));
            var i = Ed(e);
            $a(e, i, o);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              l = Ed(e);
            za(e, l, s);
            break;
          default:
            throw Error(_(161));
        }
      } catch (a) {
        Se(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function My(e, t, n) {
    ((U = e), bh(e));
  }
  function bh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var o = U,
        i = o.child;
      if (o.tag === 22 && r) {
        var s = o.memoizedState !== null || zi;
        if (!s) {
          var l = o.alternate,
            a = (l !== null && l.memoizedState !== null) || Fe;
          l = zi;
          var u = Fe;
          if (((zi = s), (Fe = a) && !u))
            for (U = o; U !== null; )
              ((s = U),
                (a = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Pd(o)
                  : a !== null
                    ? ((a.return = s), (U = a))
                    : Pd(o));
          for (; i !== null; ) ((U = i), bh(i), (i = i.sibling));
          ((U = o), (zi = l), (Fe = u));
        }
        kd(e);
      } else
        o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (U = i)) : kd(e);
    }
  }
  function kd(e) {
    for (; U !== null; ) {
      var t = U;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Fe || Ys(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Fe)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : bt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && ad(t, i, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ad(t, s, n);
                }
                break;
              case 5:
                var l = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = l;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
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
                  var u = t.alternate;
                  if (u !== null) {
                    var d = u.memoizedState;
                    if (d !== null) {
                      var f = d.dehydrated;
                      f !== null && Ko(f);
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
                throw Error(_(163));
            }
          Fe || (t.flags & 512 && Fa(t));
        } catch (m) {
          Se(t, t.return, m);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (U = n));
        break;
      }
      U = t.return;
    }
  }
  function bd(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (U = n));
        break;
      }
      U = t.return;
    }
  }
  function Pd(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ys(4, t);
            } catch (a) {
              Se(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Se(t, o, a);
              }
            }
            var i = t.return;
            try {
              Fa(t);
            } catch (a) {
              Se(t, i, a);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Fa(t);
            } catch (a) {
              Se(t, s, a);
            }
        }
      } catch (a) {
        Se(t, t.return, a);
      }
      if (t === e) {
        U = null;
        break;
      }
      var l = t.sibling;
      if (l !== null) {
        ((l.return = t.return), (U = l));
        break;
      }
      U = t.return;
    }
  }
  var jy = Math.ceil,
    Ts = un.ReactCurrentDispatcher,
    Hu = un.ReactCurrentOwner,
    vt = un.ReactCurrentBatchConfig,
    oe = 0,
    Re = null,
    Ce = null,
    je = 0,
    it = 0,
    Ar = Kn(0),
    Pe = 0,
    oi = null,
    mr = 0,
    Xs = 0,
    Qu = 0,
    zo = null,
    qe = null,
    Ku = 0,
    oo = 1 / 0,
    Xt = null,
    Ns = !1,
    Ba = null,
    Ln = null,
    $i = !1,
    Nn = null,
    Rs = 0,
    $o = 0,
    Ua = null,
    ns = -1,
    rs = 0;
  function Qe() {
    return oe & 6 ? Ee() : ns !== -1 ? ns : (ns = Ee());
  }
  function In(e) {
    return e.mode & 1
      ? oe & 2 && je !== 0
        ? je & -je
        : hy.transition !== null
          ? (rs === 0 && (rs = up()), rs)
          : ((e = ae),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : gp(e.type))),
            e)
      : 1;
  }
  function Ot(e, t, n, r) {
    if (50 < $o) throw (($o = 0), (Ua = null), Error(_(185)));
    (fi(e, n, r),
      (!(oe & 2) || e !== Re) &&
        (e === Re && (!(oe & 2) && (Xs |= n), Pe === 4 && Sn(e, je)),
        tt(e, r),
        n === 1 &&
          oe === 0 &&
          !(t.mode & 1) &&
          ((oo = Ee() + 500), Qs && Gn())));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    hv(e, t);
    var r = fs(e, e === Re ? je : 0);
    if (r === 0)
      (n !== null && Lc(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Lc(n), t === 1))
        (e.tag === 0 ? py(Td.bind(null, e)) : Lp(Td.bind(null, e)),
          uy(function () {
            !(oe & 6) && Gn();
          }),
          (n = null));
      else {
        switch (cp(r)) {
          case 1:
            n = wu;
            break;
          case 4:
            n = lp;
            break;
          case 16:
            n = ds;
            break;
          case 536870912:
            n = ap;
            break;
          default:
            n = ds;
        }
        n = _h(n, Ph.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Ph(e, t) {
    if (((ns = -1), (rs = 0), oe & 6)) throw Error(_(327));
    var n = e.callbackNode;
    if ($r() && e.callbackNode !== n) return null;
    var r = fs(e, e === Re ? je : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ms(e, r);
    else {
      t = r;
      var o = oe;
      oe |= 2;
      var i = Nh();
      (Re !== e || je !== t) && ((Xt = null), (oo = Ee() + 500), cr(e, t));
      do
        try {
          Ay();
          break;
        } catch (l) {
          Th(e, l);
        }
      while (!0);
      (Ou(),
        (Ts.current = i),
        (oe = o),
        Ce !== null ? (t = 0) : ((Re = null), (je = 0), (t = Pe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = ma(e)), o !== 0 && ((r = o), (t = Va(e, o)))),
        t === 1)
      )
        throw ((n = oi), cr(e, 0), Sn(e, r), tt(e, Ee()), n);
      if (t === 6) Sn(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !Oy(o) &&
            ((t = Ms(e, r)),
            t === 2 && ((i = ma(e)), i !== 0 && ((r = i), (t = Va(e, i)))),
            t === 1))
        )
          throw ((n = oi), cr(e, 0), Sn(e, r), tt(e, Ee()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            er(e, qe, Xt);
            break;
          case 3:
            if (
              (Sn(e, r),
              (r & 130023424) === r && ((t = Ku + 500 - Ee()), 10 < t))
            ) {
              if (fs(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                (Qe(), (e.pingedLanes |= e.suspendedLanes & o));
                break;
              }
              e.timeoutHandle = Ca(er.bind(null, e, qe, Xt), t);
              break;
            }
            er(e, qe, Xt);
            break;
          case 4:
            if ((Sn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var s = 31 - jt(r);
              ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
            }
            if (
              ((r = o),
              (r = Ee() - r),
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
                            : 1960 * jy(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ca(er.bind(null, e, qe, Xt), r);
              break;
            }
            er(e, qe, Xt);
            break;
          case 5:
            er(e, qe, Xt);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return (tt(e, Ee()), e.callbackNode === n ? Ph.bind(null, e) : null);
  }
  function Va(e, t) {
    var n = zo;
    return (
      e.current.memoizedState.isDehydrated && (cr(e, t).flags |= 256),
      (e = Ms(e, t)),
      e !== 2 && ((t = qe), (qe = n), t !== null && Wa(t)),
      e
    );
  }
  function Wa(e) {
    qe === null ? (qe = e) : qe.push.apply(qe, e);
  }
  function Oy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!_t(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Sn(e, t) {
    for (
      t &= ~Qu,
        t &= ~Xs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - jt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Td(e) {
    if (oe & 6) throw Error(_(327));
    $r();
    var t = fs(e, 0);
    if (!(t & 1)) return (tt(e, Ee()), null);
    var n = Ms(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ma(e);
      r !== 0 && ((t = r), (n = Va(e, r)));
    }
    if (n === 1) throw ((n = oi), cr(e, 0), Sn(e, t), tt(e, Ee()), n);
    if (n === 6) throw Error(_(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      er(e, qe, Xt),
      tt(e, Ee()),
      null
    );
  }
  function Gu(e, t) {
    var n = oe;
    oe |= 1;
    try {
      return e(t);
    } finally {
      ((oe = n), oe === 0 && ((oo = Ee() + 500), Qs && Gn()));
    }
  }
  function gr(e) {
    Nn !== null && Nn.tag === 0 && !(oe & 6) && $r();
    var t = oe;
    oe |= 1;
    var n = vt.transition,
      r = ae;
    try {
      if (((vt.transition = null), (ae = 1), e)) return e();
    } finally {
      ((ae = r), (vt.transition = n), (oe = t), !(oe & 6) && Gn());
    }
  }
  function Yu() {
    ((it = Ar.current), he(Ar));
  }
  function cr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ay(n)), Ce !== null))
      for (n = Ce.return; n !== null; ) {
        var r = n;
        switch ((Ru(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && vs());
            break;
          case 3:
            (no(), he(Je), he(ze), Fu());
            break;
          case 5:
            Du(r);
            break;
          case 4:
            no();
            break;
          case 13:
            he(ve);
            break;
          case 19:
            he(ve);
            break;
          case 10:
            _u(r.type._context);
            break;
          case 22:
          case 23:
            Yu();
        }
        n = n.return;
      }
    if (
      ((Re = e),
      (Ce = e = Dn(e.current, null)),
      (je = it = t),
      (Pe = 0),
      (oi = null),
      (Qu = Xs = mr = 0),
      (qe = zo = null),
      nr !== null)
    ) {
      for (t = 0; t < nr.length; t++)
        if (((n = nr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var s = i.next;
            ((i.next = o), (r.next = s));
          }
          n.pending = r;
        }
      nr = null;
    }
    return e;
  }
  function Th(e, t) {
    do {
      var n = Ce;
      try {
        if ((Ou(), (Ji.current = Ps), bs)) {
          for (var r = ye.memoizedState; r !== null; ) {
            var o = r.queue;
            (o !== null && (o.pending = null), (r = r.next));
          }
          bs = !1;
        }
        if (
          ((hr = 0),
          (Ne = ke = ye = null),
          (Do = !1),
          (ti = 0),
          (Hu.current = null),
          n === null || n.return === null)
        ) {
          ((Pe = 1), (oi = t), (Ce = null));
          break;
        }
        e: {
          var i = e,
            s = n.return,
            l = n,
            a = t;
          if (
            ((t = je),
            (l.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var u = a,
              d = l,
              f = d.tag;
            if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var m = d.alternate;
              m
                ? ((d.updateQueue = m.updateQueue),
                  (d.memoizedState = m.memoizedState),
                  (d.lanes = m.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var c = hd(s);
            if (c !== null) {
              ((c.flags &= -257),
                md(c, s, l, i, t),
                c.mode & 1 && pd(i, u, t),
                (t = c),
                (a = u));
              var x = t.updateQueue;
              if (x === null) {
                var g = new Set();
                (g.add(a), (t.updateQueue = g));
              } else x.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                (pd(i, u, t), Xu());
                break e;
              }
              a = Error(_(426));
            }
          } else if (ge && l.mode & 1) {
            var y = hd(s);
            if (y !== null) {
              (!(y.flags & 65536) && (y.flags |= 256),
                md(y, s, l, i, t),
                Mu(ro(a, l)));
              break e;
            }
          }
          ((i = a = ro(a, l)),
            Pe !== 4 && (Pe = 2),
            zo === null ? (zo = [i]) : zo.push(i),
            (i = s));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var h = ch(i, a, t);
                ld(i, h);
                break e;
              case 1:
                l = a;
                var p = i.type,
                  v = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (Ln === null || !Ln.has(v))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = dh(i, l, t);
                  ld(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Mh(n);
      } catch (b) {
        ((t = b), Ce === n && n !== null && (Ce = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Nh() {
    var e = Ts.current;
    return ((Ts.current = Ps), e === null ? Ps : e);
  }
  function Xu() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Re === null || (!(mr & 268435455) && !(Xs & 268435455)) || Sn(Re, je));
  }
  function Ms(e, t) {
    var n = oe;
    oe |= 2;
    var r = Nh();
    (Re !== e || je !== t) && ((Xt = null), cr(e, t));
    do
      try {
        _y();
        break;
      } catch (o) {
        Th(e, o);
      }
    while (!0);
    if ((Ou(), (oe = n), (Ts.current = r), Ce !== null)) throw Error(_(261));
    return ((Re = null), (je = 0), Pe);
  }
  function _y() {
    for (; Ce !== null; ) Rh(Ce);
  }
  function Ay() {
    for (; Ce !== null && !iv(); ) Rh(Ce);
  }
  function Rh(e) {
    var t = Oh(e.alternate, e, it);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Mh(e) : (Ce = t),
      (Hu.current = null));
  }
  function Mh(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Ty(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ce = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Pe = 6), (Ce = null));
          return;
        }
      } else if (((n = Py(n, t, it)), n !== null)) {
        Ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function er(e, t, n) {
    var r = ae,
      o = vt.transition;
    try {
      ((vt.transition = null), (ae = 1), Ly(e, t, n, r));
    } finally {
      ((vt.transition = o), (ae = r));
    }
    return null;
  }
  function Ly(e, t, n, r) {
    do $r();
    while (Nn !== null);
    if (oe & 6) throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(_(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (mv(e, i),
      e === Re && ((Ce = Re = null), (je = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        $i ||
        (($i = !0),
        _h(ds, function () {
          return ($r(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      ((i = vt.transition), (vt.transition = null));
      var s = ae;
      ae = 1;
      var l = oe;
      ((oe |= 4),
        (Hu.current = null),
        Ry(e, n),
        kh(n, e),
        ty(Sa),
        (ps = !!xa),
        (Sa = xa = null),
        (e.current = n),
        My(n),
        sv(),
        (oe = l),
        (ae = s),
        (vt.transition = i));
    } else e.current = n;
    if (
      ($i && (($i = !1), (Nn = e), (Rs = o)),
      (i = e.pendingLanes),
      i === 0 && (Ln = null),
      uv(n.stateNode),
      tt(e, Ee()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
    if (Ns) throw ((Ns = !1), (e = Ba), (Ba = null), e);
    return (
      Rs & 1 && e.tag !== 0 && $r(),
      (i = e.pendingLanes),
      i & 1 ? (e === Ua ? $o++ : (($o = 0), (Ua = e))) : ($o = 0),
      Gn(),
      null
    );
  }
  function $r() {
    if (Nn !== null) {
      var e = cp(Rs),
        t = vt.transition,
        n = ae;
      try {
        if (((vt.transition = null), (ae = 16 > e ? 16 : e), Nn === null))
          var r = !1;
        else {
          if (((e = Nn), (Nn = null), (Rs = 0), oe & 6)) throw Error(_(331));
          var o = oe;
          for (oe |= 4, U = e.current; U !== null; ) {
            var i = U,
              s = i.child;
            if (U.flags & 16) {
              var l = i.deletions;
              if (l !== null) {
                for (var a = 0; a < l.length; a++) {
                  var u = l[a];
                  for (U = u; U !== null; ) {
                    var d = U;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(8, d, i);
                    }
                    var f = d.child;
                    if (f !== null) ((f.return = d), (U = f));
                    else
                      for (; U !== null; ) {
                        d = U;
                        var m = d.sibling,
                          c = d.return;
                        if ((Sh(d), d === u)) {
                          U = null;
                          break;
                        }
                        if (m !== null) {
                          ((m.return = c), (U = m));
                          break;
                        }
                        U = c;
                      }
                  }
                }
                var x = i.alternate;
                if (x !== null) {
                  var g = x.child;
                  if (g !== null) {
                    x.child = null;
                    do {
                      var y = g.sibling;
                      ((g.sibling = null), (g = y));
                    } while (g !== null);
                  }
                }
                U = i;
              }
            }
            if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (U = s));
            else
              e: for (; U !== null; ) {
                if (((i = U), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  ((h.return = i.return), (U = h));
                  break e;
                }
                U = i.return;
              }
          }
          var p = e.current;
          for (U = p; U !== null; ) {
            s = U;
            var v = s.child;
            if (s.subtreeFlags & 2064 && v !== null) ((v.return = s), (U = v));
            else
              e: for (s = p; U !== null; ) {
                if (((l = U), l.flags & 2048))
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, l);
                    }
                  } catch (b) {
                    Se(l, l.return, b);
                  }
                if (l === s) {
                  U = null;
                  break e;
                }
                var k = l.sibling;
                if (k !== null) {
                  ((k.return = l.return), (U = k));
                  break e;
                }
                U = l.return;
              }
          }
          if (
            ((oe = o),
            Gn(),
            Vt && typeof Vt.onPostCommitFiberRoot == "function")
          )
            try {
              Vt.onPostCommitFiberRoot(Bs, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ae = n), (vt.transition = t));
      }
    }
    return !1;
  }
  function Nd(e, t, n) {
    ((t = ro(n, t)),
      (t = ch(e, t, 1)),
      (e = An(e, t, 1)),
      (t = Qe()),
      e !== null && (fi(e, 1, t), tt(e, t)));
  }
  function Se(e, t, n) {
    if (e.tag === 3) Nd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ln === null || !Ln.has(r)))
          ) {
            ((e = ro(n, e)),
              (e = dh(t, e, 1)),
              (t = An(t, e, 1)),
              (e = Qe()),
              t !== null && (fi(t, 1, e), tt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Iy(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Qe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (je & n) === n &&
        (Pe === 4 || (Pe === 3 && (je & 130023424) === je && 500 > Ee() - Ku)
          ? cr(e, 0)
          : (Qu |= n)),
      tt(e, t));
  }
  function jh(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Mi), (Mi <<= 1), !(Mi & 130023424) && (Mi = 4194304))
        : (t = 1));
    var n = Qe();
    ((e = on(e, t)), e !== null && (fi(e, t, n), tt(e, n)));
  }
  function Dy(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), jh(e, n));
  }
  function Fy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(_(314));
    }
    (r !== null && r.delete(t), jh(e, n));
  }
  var Oh;
  Oh = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return ((Ze = !1), by(e, t, n));
        Ze = !!(e.flags & 131072);
      }
    else ((Ze = !1), ge && t.flags & 1048576 && Ip(t, xs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (ts(e, t), (e = t.pendingProps));
        var o = Jr(t, ze.current);
        (zr(t, n), (o = $u(null, t, r, e, o, n)));
        var i = Bu();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(r) ? ((i = !0), ys(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Lu(t),
              (o.updater = Gs),
              (t.stateNode = o),
              (o._reactInternals = t),
              Ma(t, r, e, n),
              (t = _a(null, t, r, !0, i, n)))
            : ((t.tag = 0), ge && i && Nu(t), We(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ts(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = $y(r)),
            (e = bt(r, e)),
            o)
          ) {
            case 0:
              t = Oa(null, t, r, e, n);
              break e;
            case 1:
              t = yd(null, t, r, e, n);
              break e;
            case 11:
              t = gd(null, t, r, e, n);
              break e;
            case 14:
              t = vd(null, t, r, bt(r.type, e), n);
              break e;
          }
          throw Error(_(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : bt(r, o)),
          Oa(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : bt(r, o)),
          yd(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((mh(t), e === null)) throw Error(_(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            Up(e, t),
            Cs(t, r, null, n));
          var s = t.memoizedState;
          if (((r = s.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((o = ro(Error(_(423)), t)), (t = wd(e, t, r, n, o)));
              break e;
            } else if (r !== o) {
              ((o = ro(Error(_(424)), t)), (t = wd(e, t, r, n, o)));
              break e;
            } else
              for (
                lt = _n(t.stateNode.containerInfo.firstChild),
                  at = t,
                  ge = !0,
                  Mt = null,
                  n = $p(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((eo(), r === o)) {
              t = sn(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Vp(t),
          e === null && Ta(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (s = o.children),
          Ea(r, o) ? (s = null) : i !== null && Ea(r, i) && (t.flags |= 32),
          hh(e, t),
          We(e, t, s, n),
          t.child
        );
      case 6:
        return (e === null && Ta(t), null);
      case 13:
        return gh(e, t, n);
      case 4:
        return (
          Iu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = to(t, null, r, n)) : We(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : bt(r, o)),
          gd(e, t, r, o, n)
        );
      case 7:
        return (We(e, t, t.pendingProps, n), t.child);
      case 8:
        return (We(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (We(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (s = o.value),
            de(Ss, r._currentValue),
            (r._currentValue = s),
            i !== null)
          )
            if (_t(i.value, s)) {
              if (i.children === o.children && !Je.current) {
                t = sn(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var l = i.dependencies;
                if (l !== null) {
                  s = i.child;
                  for (var a = l.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        ((a = tn(-1, n & -n)), (a.tag = 2));
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var d = u.pending;
                          (d === null
                            ? (a.next = a)
                            : ((a.next = d.next), (d.next = a)),
                            (u.pending = a));
                        }
                      }
                      ((i.lanes |= n),
                        (a = i.alternate),
                        a !== null && (a.lanes |= n),
                        Na(i.return, n, t),
                        (l.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((s = i.return), s === null)) throw Error(_(341));
                  ((s.lanes |= n),
                    (l = s.alternate),
                    l !== null && (l.lanes |= n),
                    Na(s, n, t),
                    (s = i.sibling));
                } else s = i.child;
                if (s !== null) s.return = i;
                else
                  for (s = i; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((i = s.sibling), i !== null)) {
                      ((i.return = s.return), (s = i));
                      break;
                    }
                    s = s.return;
                  }
                i = s;
              }
          (We(e, t, o.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          zr(t, n),
          (o = yt(o)),
          (r = r(o)),
          (t.flags |= 1),
          We(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = bt(r, t.pendingProps)),
          (o = bt(r.type, o)),
          vd(e, t, r, o, n)
        );
      case 15:
        return fh(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : bt(r, o)),
          ts(e, t),
          (t.tag = 1),
          et(r) ? ((e = !0), ys(t)) : (e = !1),
          zr(t, n),
          uh(t, r, o),
          Ma(t, r, o, n),
          _a(null, t, r, !0, e, n)
        );
      case 19:
        return vh(e, t, n);
      case 22:
        return ph(e, t, n);
    }
    throw Error(_(156, t.tag));
  };
  function _h(e, t) {
    return sp(e, t);
  }
  function zy(e, t, n, r) {
    ((this.tag = e),
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
      (this.alternate = null));
  }
  function gt(e, t, n, r) {
    return new zy(e, t, n, r);
  }
  function qu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function $y(e) {
    if (typeof e == "function") return qu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === gu)) return 11;
      if (e === vu) return 14;
    }
    return 2;
  }
  function Dn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = gt(e.tag, t, e.key, e.mode)),
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
  function os(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) qu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case kr:
          return dr(n.children, o, i, t);
        case mu:
          ((s = 8), (o |= 8));
          break;
        case ea:
          return (
            (e = gt(12, n, t, o | 2)),
            (e.elementType = ea),
            (e.lanes = i),
            e
          );
        case ta:
          return (
            (e = gt(13, n, t, o)),
            (e.elementType = ta),
            (e.lanes = i),
            e
          );
        case na:
          return (
            (e = gt(19, n, t, o)),
            (e.elementType = na),
            (e.lanes = i),
            e
          );
        case Vf:
          return qs(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Bf:
                s = 10;
                break e;
              case Uf:
                s = 9;
                break e;
              case gu:
                s = 11;
                break e;
              case vu:
                s = 14;
                break e;
              case yn:
                ((s = 16), (r = null));
                break e;
            }
          throw Error(_(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = gt(s, n, t, o)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function dr(e, t, n, r) {
    return ((e = gt(7, e, r, t)), (e.lanes = n), e);
  }
  function qs(e, t, n, r) {
    return (
      (e = gt(22, e, r, t)),
      (e.elementType = Vf),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wl(e, t, n) {
    return ((e = gt(6, e, null, t)), (e.lanes = n), e);
  }
  function Hl(e, t, n) {
    return (
      (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function By(e, t, n, r, o) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = bl(0)),
      (this.expirationTimes = bl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Zu(e, t, n, r, o, i, s, l, a) {
    return (
      (e = new By(e, t, n, l, a)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = gt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Lu(i),
      e
    );
  }
  function Uy(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Cr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ah(e) {
    if (!e) return zn;
    e = e._reactInternals;
    e: {
      if (wr(e) !== e || e.tag !== 1) throw Error(_(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(_(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (et(n)) return Ap(e, n, t);
    }
    return t;
  }
  function Lh(e, t, n, r, o, i, s, l, a) {
    return (
      (e = Zu(n, r, !0, e, o, i, s, l, a)),
      (e.context = Ah(null)),
      (n = e.current),
      (r = Qe()),
      (o = In(n)),
      (i = tn(r, o)),
      (i.callback = t ?? null),
      An(n, i, o),
      (e.current.lanes = o),
      fi(e, o, r),
      tt(e, r),
      e
    );
  }
  function Zs(e, t, n, r) {
    var o = t.current,
      i = Qe(),
      s = In(o);
    return (
      (n = Ah(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = tn(i, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = An(o, t, s)),
      e !== null && (Ot(e, o, s, i), Zi(e, o, s)),
      s
    );
  }
  function js(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ju(e, t) {
    (Rd(e, t), (e = e.alternate) && Rd(e, t));
  }
  function Vy() {
    return null;
  }
  var Ih =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ec(e) {
    this._internalRoot = e;
  }
  Js.prototype.render = ec.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    Zs(e, t, null, null);
  };
  Js.prototype.unmount = ec.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      (gr(function () {
        Zs(null, e, null, null);
      }),
        (t[rn] = null));
    }
  };
  function Js(e) {
    this._internalRoot = e;
  }
  Js.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = pp();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++);
      (xn.splice(n, 0, e), n === 0 && mp(e));
    }
  };
  function tc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function el(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Md() {}
  function Wy(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = js(s);
          i.call(u);
        };
      }
      var s = Lh(t, r, e, 0, null, !1, !1, "", Md);
      return (
        (e._reactRootContainer = s),
        (e[rn] = s.current),
        Xo(e.nodeType === 8 ? e.parentNode : e),
        gr(),
        s
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = js(a);
        l.call(u);
      };
    }
    var a = Zu(e, 0, !1, null, null, !1, !1, "", Md);
    return (
      (e._reactRootContainer = a),
      (e[rn] = a.current),
      Xo(e.nodeType === 8 ? e.parentNode : e),
      gr(function () {
        Zs(t, a, n, r);
      }),
      a
    );
  }
  function tl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof o == "function") {
        var l = o;
        o = function () {
          var a = js(s);
          l.call(a);
        };
      }
      Zs(t, s, e, o);
    } else s = Wy(n, t, e, o, r);
    return js(s);
  }
  dp = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Mo(t.pendingLanes);
          n !== 0 &&
            (xu(t, n | 1), tt(t, Ee()), !(oe & 6) && ((oo = Ee() + 500), Gn()));
        }
        break;
      case 13:
        (gr(function () {
          var r = on(e, 1);
          if (r !== null) {
            var o = Qe();
            Ot(r, e, 1, o);
          }
        }),
          Ju(e, 1));
    }
  };
  Su = function (e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var n = Qe();
        Ot(t, e, 134217728, n);
      }
      Ju(e, 134217728);
    }
  };
  fp = function (e) {
    if (e.tag === 13) {
      var t = In(e),
        n = on(e, t);
      if (n !== null) {
        var r = Qe();
        Ot(n, e, t, r);
      }
      Ju(e, t);
    }
  };
  pp = function () {
    return ae;
  };
  hp = function (e, t) {
    var n = ae;
    try {
      return ((ae = e), t());
    } finally {
      ae = n;
    }
  };
  fa = function (e, t, n) {
    switch (t) {
      case "input":
        if ((ia(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Hs(r);
              if (!o) throw Error(_(90));
              (Hf(r), ia(r, o));
            }
          }
        }
        break;
      case "textarea":
        Kf(e, n);
        break;
      case "select":
        ((t = n.value), t != null && Lr(e, !!n.multiple, t, !1));
    }
  };
  ep = Gu;
  tp = gr;
  var Hy = { usingClientEntryPoint: !1, Events: [hi, Nr, Hs, Zf, Jf, Gu] },
    Co = {
      findFiberByHostInstance: tr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Qy = {
      bundleType: Co.bundleType,
      version: Co.version,
      rendererPackageName: Co.rendererPackageName,
      rendererConfig: Co.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: un.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = op(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Co.findFiberByHostInstance || Vy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bi.isDisabled && Bi.supportsFiber)
      try {
        ((Bs = Bi.inject(Qy)), (Vt = Bi));
      } catch {}
  }
  dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hy;
  dt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tc(t)) throw Error(_(200));
    return Uy(e, t, null, n);
  };
  dt.createRoot = function (e, t) {
    if (!tc(e)) throw Error(_(299));
    var n = !1,
      r = "",
      o = Ih;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = Zu(e, 1, !1, null, null, n, !1, r, o)),
      (e[rn] = t.current),
      Xo(e.nodeType === 8 ? e.parentNode : e),
      new ec(t)
    );
  };
  dt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(_(188))
        : ((e = Object.keys(e).join(",")), Error(_(268, e)));
    return ((e = op(t)), (e = e === null ? null : e.stateNode), e);
  };
  dt.flushSync = function (e) {
    return gr(e);
  };
  dt.hydrate = function (e, t, n) {
    if (!el(t)) throw Error(_(200));
    return tl(null, e, t, !0, n);
  };
  dt.hydrateRoot = function (e, t, n) {
    if (!tc(e)) throw Error(_(405));
    var r = (n != null && n.hydratedSources) || null,
      o = !1,
      i = "",
      s = Ih;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (t = Lh(t, null, e, 1, n ?? null, o, !1, i, s)),
      (e[rn] = t.current),
      Xo(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        ((n = r[e]),
          (o = n._getVersion),
          (o = o(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, o])
            : t.mutableSourceEagerHydrationData.push(n, o));
    return new Js(t);
  };
  dt.render = function (e, t, n) {
    if (!el(t)) throw Error(_(200));
    return tl(null, e, t, !1, n);
  };
  dt.unmountComponentAtNode = function (e) {
    if (!el(e)) throw Error(_(40));
    return e._reactRootContainer
      ? (gr(function () {
          tl(null, null, e, !1, function () {
            ((e._reactRootContainer = null), (e[rn] = null));
          });
        }),
        !0)
      : !1;
  };
  dt.unstable_batchedUpdates = Gu;
  dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!el(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return tl(e, t, n, !1, r);
  };
  dt.version = "18.3.1-next-f1338f8080-20240426";
  function Dh() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dh);
      } catch (e) {
        console.error(e);
      }
  }
  (Dh(), (Df.exports = dt));
  var gi = Df.exports;
  const Fh = kf(gi);
  var zh,
    jd = gi;
  ((zh = jd.createRoot), jd.hydrateRoot);
  var nl = class {
      constructor() {
        ((this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this)));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            (this.listeners.delete(e), this.onUnsubscribe());
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    },
    rl = typeof window > "u" || "Deno" in globalThis;
  function Pt() {}
  function Ky(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Gy(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function Yy(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function Ha(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xy(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Od(e, t) {
    const {
      type: n = "all",
      exact: r,
      fetchStatus: o,
      predicate: i,
      queryKey: s,
      stale: l,
    } = e;
    if (s) {
      if (r) {
        if (t.queryHash !== nc(s, t.options)) return !1;
      } else if (!si(t.queryKey, s)) return !1;
    }
    if (n !== "all") {
      const a = t.isActive();
      if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
    }
    return !(
      (typeof l == "boolean" && t.isStale() !== l) ||
      (o && o !== t.state.fetchStatus) ||
      (i && !i(t))
    );
  }
  function _d(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: i } = e;
    if (i) {
      if (!t.options.mutationKey) return !1;
      if (n) {
        if (ii(t.options.mutationKey) !== ii(i)) return !1;
      } else if (!si(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
  }
  function nc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ii)(e);
  }
  function ii(e) {
    return JSON.stringify(e, (t, n) =>
      Qa(n)
        ? Object.keys(n)
            .sort()
            .reduce((r, o) => ((r[o] = n[o]), r), {})
        : n,
    );
  }
  function si(e, t) {
    return e === t
      ? !0
      : typeof e != typeof t
        ? !1
        : e && t && typeof e == "object" && typeof t == "object"
          ? Object.keys(t).every((n) => si(e[n], t[n]))
          : !1;
  }
  function $h(e, t) {
    if (e === t) return e;
    const n = Ad(e) && Ad(t);
    if (n || (Qa(e) && Qa(t))) {
      const r = n ? e : Object.keys(e),
        o = r.length,
        i = n ? t : Object.keys(t),
        s = i.length,
        l = n ? [] : {},
        a = new Set(r);
      let u = 0;
      for (let d = 0; d < s; d++) {
        const f = n ? d : i[d];
        ((!n && a.has(f)) || n) && e[f] === void 0 && t[f] === void 0
          ? ((l[f] = void 0), u++)
          : ((l[f] = $h(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
      }
      return o === s && u === o ? e : l;
    }
    return t;
  }
  function Ad(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function Qa(e) {
    if (!Ld(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(
      !Ld(n) ||
      !n.hasOwnProperty("isPrototypeOf") ||
      Object.getPrototypeOf(e) !== Object.prototype
    );
  }
  function Ld(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function qy(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function Zy(e, t, n) {
    return typeof n.structuralSharing == "function"
      ? n.structuralSharing(e, t)
      : n.structuralSharing !== !1
        ? $h(e, t)
        : t;
  }
  function Jy(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
  }
  function e0(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
  }
  var rc = Symbol();
  function Bh(e, t) {
    return !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === rc
        ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
        : e.queryFn;
  }
  var or,
    En,
    Wr,
    gf,
    t0 =
      ((gf = class extends nl {
        constructor() {
          super();
          ie(this, or);
          ie(this, En);
          ie(this, Wr);
          X(this, Wr, (t) => {
            if (!rl && window.addEventListener) {
              const n = () => t();
              return (
                window.addEventListener("visibilitychange", n, !1),
                () => {
                  window.removeEventListener("visibilitychange", n);
                }
              );
            }
          });
        }
        onSubscribe() {
          N(this, En) || this.setEventListener(N(this, Wr));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = N(this, En)) == null || t.call(this), X(this, En, void 0));
        }
        setEventListener(t) {
          var n;
          (X(this, Wr, t),
            (n = N(this, En)) == null || n.call(this),
            X(
              this,
              En,
              t((r) => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
              }),
            ));
        }
        setFocused(t) {
          N(this, or) !== t && (X(this, or, t), this.onFocus());
        }
        onFocus() {
          const t = this.isFocused();
          this.listeners.forEach((n) => {
            n(t);
          });
        }
        isFocused() {
          var t;
          return typeof N(this, or) == "boolean"
            ? N(this, or)
            : ((t = globalThis.document) == null
                ? void 0
                : t.visibilityState) !== "hidden";
        }
      }),
      (or = new WeakMap()),
      (En = new WeakMap()),
      (Wr = new WeakMap()),
      gf),
    Uh = new t0(),
    Hr,
    Cn,
    Qr,
    vf,
    n0 =
      ((vf = class extends nl {
        constructor() {
          super();
          ie(this, Hr, !0);
          ie(this, Cn);
          ie(this, Qr);
          X(this, Qr, (t) => {
            if (!rl && window.addEventListener) {
              const n = () => t(!0),
                r = () => t(!1);
              return (
                window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                  (window.removeEventListener("online", n),
                    window.removeEventListener("offline", r));
                }
              );
            }
          });
        }
        onSubscribe() {
          N(this, Cn) || this.setEventListener(N(this, Qr));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = N(this, Cn)) == null || t.call(this), X(this, Cn, void 0));
        }
        setEventListener(t) {
          var n;
          (X(this, Qr, t),
            (n = N(this, Cn)) == null || n.call(this),
            X(this, Cn, t(this.setOnline.bind(this))));
        }
        setOnline(t) {
          N(this, Hr) !== t &&
            (X(this, Hr, t),
            this.listeners.forEach((r) => {
              r(t);
            }));
        }
        isOnline() {
          return N(this, Hr);
        }
      }),
      (Hr = new WeakMap()),
      (Cn = new WeakMap()),
      (Qr = new WeakMap()),
      vf),
    Os = new n0();
  function r0() {
    let e, t;
    const n = new Promise((o, i) => {
      ((e = o), (t = i));
    });
    ((n.status = "pending"), n.catch(() => {}));
    function r(o) {
      (Object.assign(n, o), delete n.resolve, delete n.reject);
    }
    return (
      (n.resolve = (o) => {
        (r({ status: "fulfilled", value: o }), e(o));
      }),
      (n.reject = (o) => {
        (r({ status: "rejected", reason: o }), t(o));
      }),
      n
    );
  }
  function o0(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function Vh(e) {
    return (e ?? "online") === "online" ? Os.isOnline() : !0;
  }
  var Wh = class extends Error {
    constructor(e) {
      (super("CancelledError"),
        (this.revert = e == null ? void 0 : e.revert),
        (this.silent = e == null ? void 0 : e.silent));
    }
  };
  function Ql(e) {
    return e instanceof Wh;
  }
  function Hh(e) {
    let t = !1,
      n = 0,
      r = !1,
      o;
    const i = r0(),
      s = (g) => {
        var y;
        r || (m(new Wh(g)), (y = e.abort) == null || y.call(e));
      },
      l = () => {
        t = !0;
      },
      a = () => {
        t = !1;
      },
      u = () =>
        Uh.isFocused() &&
        (e.networkMode === "always" || Os.isOnline()) &&
        e.canRun(),
      d = () => Vh(e.networkMode) && e.canRun(),
      f = (g) => {
        var y;
        r ||
          ((r = !0),
          (y = e.onSuccess) == null || y.call(e, g),
          o == null || o(),
          i.resolve(g));
      },
      m = (g) => {
        var y;
        r ||
          ((r = !0),
          (y = e.onError) == null || y.call(e, g),
          o == null || o(),
          i.reject(g));
      },
      c = () =>
        new Promise((g) => {
          var y;
          ((o = (h) => {
            (r || u()) && g(h);
          }),
            (y = e.onPause) == null || y.call(e));
        }).then(() => {
          var g;
          ((o = void 0), r || (g = e.onContinue) == null || g.call(e));
        }),
      x = () => {
        if (r) return;
        let g;
        const y = n === 0 ? e.initialPromise : void 0;
        try {
          g = y ?? e.fn();
        } catch (h) {
          g = Promise.reject(h);
        }
        Promise.resolve(g)
          .then(f)
          .catch((h) => {
            var P;
            if (r) return;
            const p = e.retry ?? (rl ? 0 : 3),
              v = e.retryDelay ?? o0,
              k = typeof v == "function" ? v(n, h) : v,
              b =
                p === !0 ||
                (typeof p == "number" && n < p) ||
                (typeof p == "function" && p(n, h));
            if (t || !b) {
              m(h);
              return;
            }
            (n++,
              (P = e.onFail) == null || P.call(e, n, h),
              qy(k)
                .then(() => (u() ? void 0 : c()))
                .then(() => {
                  t ? m(h) : x();
                }));
          });
      };
    return {
      promise: i,
      cancel: s,
      continue: () => (o == null || o(), i),
      cancelRetry: l,
      continueRetry: a,
      canStart: d,
      start: () => (d() ? x() : c().then(x), i),
    };
  }
  var i0 = (e) => setTimeout(e, 0);
  function s0() {
    let e = [],
      t = 0,
      n = (l) => {
        l();
      },
      r = (l) => {
        l();
      },
      o = i0;
    const i = (l) => {
        t
          ? e.push(l)
          : o(() => {
              n(l);
            });
      },
      s = () => {
        const l = e;
        ((e = []),
          l.length &&
            o(() => {
              r(() => {
                l.forEach((a) => {
                  n(a);
                });
              });
            }));
      };
    return {
      batch: (l) => {
        let a;
        t++;
        try {
          a = l();
        } finally {
          (t--, t || s());
        }
        return a;
      },
      batchCalls:
        (l) =>
        (...a) => {
          i(() => {
            l(...a);
          });
        },
      schedule: i,
      setNotifyFunction: (l) => {
        n = l;
      },
      setBatchNotifyFunction: (l) => {
        r = l;
      },
      setScheduler: (l) => {
        o = l;
      },
    };
  }
  var He = s0(),
    ir,
    yf,
    Qh =
      ((yf = class {
        constructor() {
          ie(this, ir);
        }
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          (this.clearGcTimeout(),
            Gy(this.gcTime) &&
              X(
                this,
                ir,
                setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime),
              ));
        }
        updateGcTime(e) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            e ?? (rl ? 1 / 0 : 5 * 60 * 1e3),
          );
        }
        clearGcTimeout() {
          N(this, ir) && (clearTimeout(N(this, ir)), X(this, ir, void 0));
        }
      }),
      (ir = new WeakMap()),
      yf),
    Kr,
    sr,
    pt,
    lr,
    De,
    ui,
    ar,
    Tt,
    Yt,
    wf,
    l0 =
      ((wf = class extends Qh {
        constructor(t) {
          super();
          ie(this, Tt);
          ie(this, Kr);
          ie(this, sr);
          ie(this, pt);
          ie(this, lr);
          ie(this, De);
          ie(this, ui);
          ie(this, ar);
          (X(this, ar, !1),
            X(this, ui, t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            X(this, lr, t.client),
            X(this, pt, N(this, lr).getQueryCache()),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            X(this, Kr, u0(this.options)),
            (this.state = t.state ?? N(this, Kr)),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          var t;
          return (t = N(this, De)) == null ? void 0 : t.promise;
        }
        setOptions(t) {
          ((this.options = { ...N(this, ui), ...t }),
            this.updateGcTime(this.options.gcTime));
        }
        optionalRemove() {
          !this.observers.length &&
            this.state.fetchStatus === "idle" &&
            N(this, pt).remove(this);
        }
        setData(t, n) {
          const r = Zy(this.state.data, t, this.options);
          return (
            Ae(this, Tt, Yt).call(this, {
              data: r,
              type: "success",
              dataUpdatedAt: n == null ? void 0 : n.updatedAt,
              manual: n == null ? void 0 : n.manual,
            }),
            r
          );
        }
        setState(t, n) {
          Ae(this, Tt, Yt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n,
          });
        }
        cancel(t) {
          var r, o;
          const n = (r = N(this, De)) == null ? void 0 : r.promise;
          return (
            (o = N(this, De)) == null || o.cancel(t),
            n ? n.then(Pt).catch(Pt) : Promise.resolve()
          );
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: !0 }));
        }
        reset() {
          (this.destroy(), this.setState(N(this, Kr)));
        }
        isActive() {
          return this.observers.some((t) => Xy(t.options.enabled, this) !== !1);
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === rc ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return this.getObserversCount() > 0
            ? this.observers.some(
                (t) => Ha(t.options.staleTime, this) === "static",
              )
            : !1;
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0 || this.state.isInvalidated;
        }
        isStaleByTime(t = 0) {
          return this.state.data === void 0
            ? !0
            : t === "static"
              ? !1
              : this.state.isInvalidated
                ? !0
                : !Yy(this.state.dataUpdatedAt, t);
        }
        onFocus() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
          (t == null || t.refetch({ cancelRefetch: !1 }),
            (n = N(this, De)) == null || n.continue());
        }
        onOnline() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnReconnect());
          (t == null || t.refetch({ cancelRefetch: !1 }),
            (n = N(this, De)) == null || n.continue());
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            N(this, pt).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((n) => n !== t)),
            this.observers.length ||
              (N(this, De) &&
                (N(this, ar)
                  ? N(this, De).cancel({ revert: !0 })
                  : N(this, De).cancelRetry()),
              this.scheduleGc()),
            N(this, pt).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated ||
            Ae(this, Tt, Yt).call(this, { type: "invalidate" });
        }
        fetch(t, n) {
          var u, d, f;
          if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && n != null && n.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (N(this, De))
              return (N(this, De).continueRetry(), N(this, De).promise);
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            const m = this.observers.find((c) => c.options.queryFn);
            m && this.setOptions(m.options);
          }
          const r = new AbortController(),
            o = (m) => {
              Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (X(this, ar, !0), r.signal),
              });
            },
            i = () => {
              const m = Bh(this.options, n),
                x = (() => {
                  const g = {
                    client: N(this, lr),
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return (o(g), g);
                })();
              return (
                X(this, ar, !1),
                this.options.persister
                  ? this.options.persister(m, x, this)
                  : m(x)
              );
            },
            l = (() => {
              const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, lr),
                state: this.state,
                fetchFn: i,
              };
              return (o(m), m);
            })();
          ((u = this.options.behavior) == null || u.onFetch(l, this),
            X(this, sr, this.state),
            (this.state.fetchStatus === "idle" ||
              this.state.fetchMeta !==
                ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
              Ae(this, Tt, Yt).call(this, {
                type: "fetch",
                meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
              }));
          const a = (m) => {
            var c, x, g, y;
            ((Ql(m) && m.silent) ||
              Ae(this, Tt, Yt).call(this, { type: "error", error: m }),
              Ql(m) ||
                ((x = (c = N(this, pt).config).onError) == null ||
                  x.call(c, m, this),
                (y = (g = N(this, pt).config).onSettled) == null ||
                  y.call(g, this.state.data, m, this)),
              this.scheduleGc());
          };
          return (
            X(
              this,
              De,
              Hh({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: l.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (m) => {
                  var c, x, g, y;
                  if (m === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(m);
                  } catch (h) {
                    a(h);
                    return;
                  }
                  ((x = (c = N(this, pt).config).onSuccess) == null ||
                    x.call(c, m, this),
                    (y = (g = N(this, pt).config).onSettled) == null ||
                      y.call(g, m, this.state.error, this),
                    this.scheduleGc());
                },
                onError: a,
                onFail: (m, c) => {
                  Ae(this, Tt, Yt).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: c,
                  });
                },
                onPause: () => {
                  Ae(this, Tt, Yt).call(this, { type: "pause" });
                },
                onContinue: () => {
                  Ae(this, Tt, Yt).call(this, { type: "continue" });
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode,
                canRun: () => !0,
              }),
            ),
            N(this, De).start()
          );
        }
      }),
      (Kr = new WeakMap()),
      (sr = new WeakMap()),
      (pt = new WeakMap()),
      (lr = new WeakMap()),
      (De = new WeakMap()),
      (ui = new WeakMap()),
      (ar = new WeakMap()),
      (Tt = new WeakSet()),
      (Yt = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...a0(r.data, this.options),
                fetchMeta: t.meta ?? null,
              };
            case "success":
              return (
                X(this, sr, void 0),
                {
                  ...r,
                  data: t.data,
                  dataUpdateCount: r.dataUpdateCount + 1,
                  dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                }
              );
            case "error":
              const o = t.error;
              return Ql(o) && o.revert && N(this, sr)
                ? { ...N(this, sr), fetchStatus: "idle" }
                : {
                    ...r,
                    error: o,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: o,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...r, isInvalidated: !0 };
            case "setState":
              return { ...r, ...t.state };
          }
        };
        ((this.state = n(this.state)),
          He.batch(() => {
            (this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              N(this, pt).notify({ query: this, type: "updated", action: t }));
          }));
      }),
      wf);
  function a0(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: Vh(t.networkMode) ? "fetching" : "paused",
      ...(e === void 0 && { error: null, status: "pending" }),
    };
  }
  function u0(e) {
    const t =
        typeof e.initialData == "function" ? e.initialData() : e.initialData,
      n = t !== void 0,
      r = n
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? (r ?? Date.now()) : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: n ? "success" : "pending",
      fetchStatus: "idle",
    };
  }
  var zt,
    xf,
    c0 =
      ((xf = class extends nl {
        constructor(t = {}) {
          super();
          ie(this, zt);
          ((this.config = t), X(this, zt, new Map()));
        }
        build(t, n, r) {
          const o = n.queryKey,
            i = n.queryHash ?? nc(o, n);
          let s = this.get(i);
          return (
            s ||
              ((s = new l0({
                client: t,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o),
              })),
              this.add(s)),
            s
          );
        }
        add(t) {
          N(this, zt).has(t.queryHash) ||
            (N(this, zt).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
        }
        remove(t) {
          const n = N(this, zt).get(t.queryHash);
          n &&
            (t.destroy(),
            n === t && N(this, zt).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          He.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return N(this, zt).get(t);
        }
        getAll() {
          return [...N(this, zt).values()];
        }
        find(t) {
          const n = { exact: !0, ...t };
          return this.getAll().find((r) => Od(n, r));
        }
        findAll(t = {}) {
          const n = this.getAll();
          return Object.keys(t).length > 0 ? n.filter((r) => Od(t, r)) : n;
        }
        notify(t) {
          He.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        onFocus() {
          He.batch(() => {
            this.getAll().forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          He.batch(() => {
            this.getAll().forEach((t) => {
              t.onOnline();
            });
          });
        }
      }),
      (zt = new WeakMap()),
      xf),
    $t,
    Ve,
    ur,
    Bt,
    vn,
    Sf,
    d0 =
      ((Sf = class extends Qh {
        constructor(t) {
          super();
          ie(this, Bt);
          ie(this, $t);
          ie(this, Ve);
          ie(this, ur);
          ((this.mutationId = t.mutationId),
            X(this, Ve, t.mutationCache),
            X(this, $t, []),
            (this.state = t.state || f0()),
            this.setOptions(t.options),
            this.scheduleGc());
        }
        setOptions(t) {
          ((this.options = t), this.updateGcTime(this.options.gcTime));
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(t) {
          N(this, $t).includes(t) ||
            (N(this, $t).push(t),
            this.clearGcTimeout(),
            N(this, Ve).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          (X(
            this,
            $t,
            N(this, $t).filter((n) => n !== t),
          ),
            this.scheduleGc(),
            N(this, Ve).notify({
              type: "observerRemoved",
              mutation: this,
              observer: t,
            }));
        }
        optionalRemove() {
          N(this, $t).length ||
            (this.state.status === "pending"
              ? this.scheduleGc()
              : N(this, Ve).remove(this));
        }
        continue() {
          var t;
          return (
            ((t = N(this, ur)) == null ? void 0 : t.continue()) ??
            this.execute(this.state.variables)
          );
        }
        async execute(t) {
          var i, s, l, a, u, d, f, m, c, x, g, y, h, p, v, k, b, P, T, O;
          const n = () => {
            Ae(this, Bt, vn).call(this, { type: "continue" });
          };
          X(
            this,
            ur,
            Hh({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (F, I) => {
                Ae(this, Bt, vn).call(this, {
                  type: "failed",
                  failureCount: F,
                  error: I,
                });
              },
              onPause: () => {
                Ae(this, Bt, vn).call(this, { type: "pause" });
              },
              onContinue: n,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => N(this, Ve).canRun(this),
            }),
          );
          const r = this.state.status === "pending",
            o = !N(this, ur).canStart();
          try {
            if (r) n();
            else {
              (Ae(this, Bt, vn).call(this, {
                type: "pending",
                variables: t,
                isPaused: o,
              }),
                await ((s = (i = N(this, Ve).config).onMutate) == null
                  ? void 0
                  : s.call(i, t, this)));
              const I = await ((a = (l = this.options).onMutate) == null
                ? void 0
                : a.call(l, t));
              I !== this.state.context &&
                Ae(this, Bt, vn).call(this, {
                  type: "pending",
                  context: I,
                  variables: t,
                  isPaused: o,
                });
            }
            const F = await N(this, ur).start();
            return (
              await ((d = (u = N(this, Ve).config).onSuccess) == null
                ? void 0
                : d.call(u, F, t, this.state.context, this)),
              await ((m = (f = this.options).onSuccess) == null
                ? void 0
                : m.call(f, F, t, this.state.context)),
              await ((x = (c = N(this, Ve).config).onSettled) == null
                ? void 0
                : x.call(
                    c,
                    F,
                    null,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((y = (g = this.options).onSettled) == null
                ? void 0
                : y.call(g, F, null, t, this.state.context)),
              Ae(this, Bt, vn).call(this, { type: "success", data: F }),
              F
            );
          } catch (F) {
            try {
              throw (
                await ((p = (h = N(this, Ve).config).onError) == null
                  ? void 0
                  : p.call(h, F, t, this.state.context, this)),
                await ((k = (v = this.options).onError) == null
                  ? void 0
                  : k.call(v, F, t, this.state.context)),
                await ((P = (b = N(this, Ve).config).onSettled) == null
                  ? void 0
                  : P.call(
                      b,
                      void 0,
                      F,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await ((O = (T = this.options).onSettled) == null
                  ? void 0
                  : O.call(T, void 0, F, t, this.state.context)),
                F
              );
            } finally {
              Ae(this, Bt, vn).call(this, { type: "error", error: F });
            }
          } finally {
            N(this, Ve).runNext(this);
          }
        }
      }),
      ($t = new WeakMap()),
      (Ve = new WeakMap()),
      (ur = new WeakMap()),
      (Bt = new WeakSet()),
      (vn = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...r, isPaused: !0 };
            case "continue":
              return { ...r, isPaused: !1 };
            case "pending":
              return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        ((this.state = n(this.state)),
          He.batch(() => {
            (N(this, $t).forEach((r) => {
              r.onMutationUpdate(t);
            }),
              N(this, Ve).notify({
                mutation: this,
                type: "updated",
                action: t,
              }));
          }));
      }),
      Sf);
  function f0() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0,
    };
  }
  var Zt,
    Nt,
    ci,
    Ef,
    p0 =
      ((Ef = class extends nl {
        constructor(t = {}) {
          super();
          ie(this, Zt);
          ie(this, Nt);
          ie(this, ci);
          ((this.config = t),
            X(this, Zt, new Set()),
            X(this, Nt, new Map()),
            X(this, ci, 0));
        }
        build(t, n, r) {
          const o = new d0({
            mutationCache: this,
            mutationId: ++ki(this, ci)._,
            options: t.defaultMutationOptions(n),
            state: r,
          });
          return (this.add(o), o);
        }
        add(t) {
          N(this, Zt).add(t);
          const n = Ui(t);
          if (typeof n == "string") {
            const r = N(this, Nt).get(n);
            r ? r.push(t) : N(this, Nt).set(n, [t]);
          }
          this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          if (N(this, Zt).delete(t)) {
            const n = Ui(t);
            if (typeof n == "string") {
              const r = N(this, Nt).get(n);
              if (r)
                if (r.length > 1) {
                  const o = r.indexOf(t);
                  o !== -1 && r.splice(o, 1);
                } else r[0] === t && N(this, Nt).delete(n);
            }
          }
          this.notify({ type: "removed", mutation: t });
        }
        canRun(t) {
          const n = Ui(t);
          if (typeof n == "string") {
            const r = N(this, Nt).get(n),
              o =
                r == null
                  ? void 0
                  : r.find((i) => i.state.status === "pending");
            return !o || o === t;
          } else return !0;
        }
        runNext(t) {
          var r;
          const n = Ui(t);
          if (typeof n == "string") {
            const o =
              (r = N(this, Nt).get(n)) == null
                ? void 0
                : r.find((i) => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
          } else return Promise.resolve();
        }
        clear() {
          He.batch(() => {
            (N(this, Zt).forEach((t) => {
              this.notify({ type: "removed", mutation: t });
            }),
              N(this, Zt).clear(),
              N(this, Nt).clear());
          });
        }
        getAll() {
          return Array.from(N(this, Zt));
        }
        find(t) {
          const n = { exact: !0, ...t };
          return this.getAll().find((r) => _d(n, r));
        }
        findAll(t = {}) {
          return this.getAll().filter((n) => _d(t, n));
        }
        notify(t) {
          He.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        resumePausedMutations() {
          const t = this.getAll().filter((n) => n.state.isPaused);
          return He.batch(() =>
            Promise.all(t.map((n) => n.continue().catch(Pt))),
          );
        }
      }),
      (Zt = new WeakMap()),
      (Nt = new WeakMap()),
      (ci = new WeakMap()),
      Ef);
  function Ui(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
  }
  function Id(e) {
    return {
      onFetch: (t, n) => {
        var d, f, m, c, x;
        const r = t.options,
          o =
            (m =
              (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
                ? void 0
                : f.fetchMore) == null
              ? void 0
              : m.direction,
          i = ((c = t.state.data) == null ? void 0 : c.pages) || [],
          s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
        let l = { pages: [], pageParams: [] },
          a = 0;
        const u = async () => {
          let g = !1;
          const y = (v) => {
              Object.defineProperty(v, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (g = !0)
                    : t.signal.addEventListener("abort", () => {
                        g = !0;
                      }),
                  t.signal
                ),
              });
            },
            h = Bh(t.options, t.fetchOptions),
            p = async (v, k, b) => {
              if (g) return Promise.reject();
              if (k == null && v.pages.length) return Promise.resolve(v);
              const T = (() => {
                  const H = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: k,
                    direction: b ? "backward" : "forward",
                    meta: t.options.meta,
                  };
                  return (y(H), H);
                })(),
                O = await h(T),
                { maxPages: F } = t.options,
                I = b ? e0 : Jy;
              return {
                pages: I(v.pages, O, F),
                pageParams: I(v.pageParams, k, F),
              };
            };
          if (o && i.length) {
            const v = o === "backward",
              k = v ? h0 : Dd,
              b = { pages: i, pageParams: s },
              P = k(r, b);
            l = await p(b, P, v);
          } else {
            const v = e ?? i.length;
            do {
              const k = a === 0 ? (s[0] ?? r.initialPageParam) : Dd(r, l);
              if (a > 0 && k == null) break;
              ((l = await p(l, k)), a++);
            } while (a < v);
          }
          return l;
        };
        t.options.persister
          ? (t.fetchFn = () => {
              var g, y;
              return (y = (g = t.options).persister) == null
                ? void 0
                : y.call(
                    g,
                    u,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n,
                  );
            })
          : (t.fetchFn = u);
      },
    };
  }
  function Dd(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
  }
  function h0(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0
      ? (r = e.getPreviousPageParam) == null
        ? void 0
        : r.call(e, t[0], t, n[0], n)
      : void 0;
  }
  var xe,
    kn,
    bn,
    Gr,
    Yr,
    Pn,
    Xr,
    qr,
    Cf,
    m0 =
      ((Cf = class {
        constructor(e = {}) {
          ie(this, xe);
          ie(this, kn);
          ie(this, bn);
          ie(this, Gr);
          ie(this, Yr);
          ie(this, Pn);
          ie(this, Xr);
          ie(this, qr);
          (X(this, xe, e.queryCache || new c0()),
            X(this, kn, e.mutationCache || new p0()),
            X(this, bn, e.defaultOptions || {}),
            X(this, Gr, new Map()),
            X(this, Yr, new Map()),
            X(this, Pn, 0));
        }
        mount() {
          (ki(this, Pn)._++,
            N(this, Pn) === 1 &&
              (X(
                this,
                Xr,
                Uh.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(), N(this, xe).onFocus());
                }),
              ),
              X(
                this,
                qr,
                Os.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(),
                    N(this, xe).onOnline());
                }),
              )));
        }
        unmount() {
          var e, t;
          (ki(this, Pn)._--,
            N(this, Pn) === 0 &&
              ((e = N(this, Xr)) == null || e.call(this),
              X(this, Xr, void 0),
              (t = N(this, qr)) == null || t.call(this),
              X(this, qr, void 0)));
        }
        isFetching(e) {
          return N(this, xe).findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return N(this, kn).findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = N(this, xe).get(t.queryHash)) == null
            ? void 0
            : n.state.data;
        }
        ensureQueryData(e) {
          const t = this.defaultQueryOptions(e),
            n = N(this, xe).build(this, t),
            r = n.state.data;
          return r === void 0
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                n.isStaleByTime(Ha(t.staleTime, n)) &&
                this.prefetchQuery(t),
              Promise.resolve(r));
        }
        getQueriesData(e) {
          return N(this, xe)
            .findAll(e)
            .map(({ queryKey: t, state: n }) => {
              const r = n.data;
              return [t, r];
            });
        }
        setQueryData(e, t, n) {
          const r = this.defaultQueryOptions({ queryKey: e }),
            o = N(this, xe).get(r.queryHash),
            i = o == null ? void 0 : o.state.data,
            s = Ky(t, i);
          if (s !== void 0)
            return N(this, xe)
              .build(this, r)
              .setData(s, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return He.batch(() =>
            N(this, xe)
              .findAll(e)
              .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
          );
        }
        getQueryState(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = N(this, xe).get(t.queryHash)) == null ? void 0 : n.state;
        }
        removeQueries(e) {
          const t = N(this, xe);
          He.batch(() => {
            t.findAll(e).forEach((n) => {
              t.remove(n);
            });
          });
        }
        resetQueries(e, t) {
          const n = N(this, xe);
          return He.batch(
            () => (
              n.findAll(e).forEach((r) => {
                r.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            ),
          );
        }
        cancelQueries(e, t = {}) {
          const n = { revert: !0, ...t },
            r = He.batch(() =>
              N(this, xe)
                .findAll(e)
                .map((o) => o.cancel(n)),
            );
          return Promise.all(r).then(Pt).catch(Pt);
        }
        invalidateQueries(e, t = {}) {
          return He.batch(
            () => (
              N(this, xe)
                .findAll(e)
                .forEach((n) => {
                  n.invalidate();
                }),
              (e == null ? void 0 : e.refetchType) === "none"
                ? Promise.resolve()
                : this.refetchQueries(
                    {
                      ...e,
                      type:
                        (e == null ? void 0 : e.refetchType) ??
                        (e == null ? void 0 : e.type) ??
                        "active",
                    },
                    t,
                  )
            ),
          );
        }
        refetchQueries(e, t = {}) {
          const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
            r = He.batch(() =>
              N(this, xe)
                .findAll(e)
                .filter((o) => !o.isDisabled() && !o.isStatic())
                .map((o) => {
                  let i = o.fetch(void 0, n);
                  return (
                    n.throwOnError || (i = i.catch(Pt)),
                    o.state.fetchStatus === "paused" ? Promise.resolve() : i
                  );
                }),
            );
          return Promise.all(r).then(Pt);
        }
        fetchQuery(e) {
          const t = this.defaultQueryOptions(e);
          t.retry === void 0 && (t.retry = !1);
          const n = N(this, xe).build(this, t);
          return n.isStaleByTime(Ha(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(Pt).catch(Pt);
        }
        fetchInfiniteQuery(e) {
          return ((e.behavior = Id(e.pages)), this.fetchQuery(e));
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(Pt).catch(Pt);
        }
        ensureInfiniteQueryData(e) {
          return ((e.behavior = Id(e.pages)), this.ensureQueryData(e));
        }
        resumePausedMutations() {
          return Os.isOnline()
            ? N(this, kn).resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return N(this, xe);
        }
        getMutationCache() {
          return N(this, kn);
        }
        getDefaultOptions() {
          return N(this, bn);
        }
        setDefaultOptions(e) {
          X(this, bn, e);
        }
        setQueryDefaults(e, t) {
          N(this, Gr).set(ii(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          const t = [...N(this, Gr).values()],
            n = {};
          return (
            t.forEach((r) => {
              si(e, r.queryKey) && Object.assign(n, r.defaultOptions);
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          N(this, Yr).set(ii(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          const t = [...N(this, Yr).values()],
            n = {};
          return (
            t.forEach((r) => {
              si(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          const t = {
            ...N(this, bn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = nc(t.queryKey, t)),
            t.refetchOnReconnect === void 0 &&
              (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === rc && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e != null && e._defaulted
            ? e
            : {
                ...N(this, bn).mutations,
                ...((e == null ? void 0 : e.mutationKey) &&
                  this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          (N(this, xe).clear(), N(this, kn).clear());
        }
      }),
      (xe = new WeakMap()),
      (kn = new WeakMap()),
      (bn = new WeakMap()),
      (Gr = new WeakMap()),
      (Yr = new WeakMap()),
      (Pn = new WeakMap()),
      (Xr = new WeakMap()),
      (qr = new WeakMap()),
      Cf),
    g0 = S.createContext(void 0),
    v0 = ({ client: e, children: t }) => (
      S.useEffect(
        () => (
          e.mount(),
          () => {
            e.unmount();
          }
        ),
        [e],
      ),
      w.jsx(g0.Provider, { value: e, children: t })
    );
  /**
   * @remix-run/router v1.23.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function _s() {
    return (
      (_s = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      _s.apply(this, arguments)
    );
  }
  var Rn;
  (function (e) {
    ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
  })(Rn || (Rn = {}));
  const Fd = "popstate";
  function y0(e) {
    e === void 0 && (e = {});
    function t(r, o) {
      let { pathname: i, search: s, hash: l } = r.location;
      return Ka(
        "",
        { pathname: i, search: s, hash: l },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      );
    }
    function n(r, o) {
      return typeof o == "string" ? o : Gh(o);
    }
    return x0(t, n, null, e);
  }
  function nt(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function Kh(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function w0() {
    return Math.random().toString(36).substr(2, 8);
  }
  function zd(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Ka(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      _s(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? ol(t) : t,
        { state: n, key: (t && t.key) || r || w0() },
      )
    );
  }
  function Gh(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function ol(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e));
    }
    return t;
  }
  function x0(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
      s = o.history,
      l = Rn.Pop,
      a = null,
      u = d();
    u == null && ((u = 0), s.replaceState(_s({}, s.state, { idx: u }), ""));
    function d() {
      return (s.state || { idx: null }).idx;
    }
    function f() {
      l = Rn.Pop;
      let y = d(),
        h = y == null ? null : y - u;
      ((u = y), a && a({ action: l, location: g.location, delta: h }));
    }
    function m(y, h) {
      l = Rn.Push;
      let p = Ka(g.location, y, h);
      u = d() + 1;
      let v = zd(p, u),
        k = g.createHref(p);
      try {
        s.pushState(v, "", k);
      } catch (b) {
        if (b instanceof DOMException && b.name === "DataCloneError") throw b;
        o.location.assign(k);
      }
      i && a && a({ action: l, location: g.location, delta: 1 });
    }
    function c(y, h) {
      l = Rn.Replace;
      let p = Ka(g.location, y, h);
      u = d();
      let v = zd(p, u),
        k = g.createHref(p);
      (s.replaceState(v, "", k),
        i && a && a({ action: l, location: g.location, delta: 0 }));
    }
    function x(y) {
      let h =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        p = typeof y == "string" ? y : Gh(y);
      return (
        (p = p.replace(/ $/, "%20")),
        nt(
          h,
          "No window.location.(origin|href) available to create URL for href: " +
            p,
        ),
        new URL(p, h)
      );
    }
    let g = {
      get action() {
        return l;
      },
      get location() {
        return e(o, s);
      },
      listen(y) {
        if (a) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(Fd, f),
          (a = y),
          () => {
            (o.removeEventListener(Fd, f), (a = null));
          }
        );
      },
      createHref(y) {
        return t(o, y);
      },
      createURL: x,
      encodeLocation(y) {
        let h = x(y);
        return { pathname: h.pathname, search: h.search, hash: h.hash };
      },
      push: m,
      replace: c,
      go(y) {
        return s.go(y);
      },
    };
    return g;
  }
  var $d;
  (function (e) {
    ((e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error"));
  })($d || ($d = {}));
  function S0(e, t, n) {
    return (n === void 0 && (n = "/"), E0(e, t, n, !1));
  }
  function E0(e, t, n, r) {
    let o = typeof t == "string" ? ol(t) : t,
      i = qh(o.pathname || "/", n);
    if (i == null) return null;
    let s = Yh(e);
    C0(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
      let u = A0(i);
      l = O0(s[a], u, r);
    }
    return l;
  }
  function Yh(e, t, n, r) {
    (t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = ""));
    let o = (i, s, l) => {
      let a = {
        relativePath: l === void 0 ? i.path || "" : l,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: s,
        route: i,
      };
      a.relativePath.startsWith("/") &&
        (nt(
          a.relativePath.startsWith(r),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (a.relativePath = a.relativePath.slice(r.length)));
      let u = Br([r, a.relativePath]),
        d = n.concat(a);
      (i.children &&
        i.children.length > 0 &&
        (nt(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".'),
        ),
        Yh(i.children, t, d, u)),
        !(i.path == null && !i.index) &&
          t.push({ path: u, score: M0(u, i.index), routesMeta: d }));
    };
    return (
      e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
          o(i, s);
        else for (let a of Xh(i.path)) o(i, s, a);
      }),
      t
    );
  }
  function Xh(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = Xh(r.join("/")),
      l = [];
    return (
      l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
      o && l.push(...s),
      l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
    );
  }
  function C0(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : j0(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex),
          ),
    );
  }
  const k0 = /^:[\w-]+$/,
    b0 = 3,
    P0 = 2,
    T0 = 1,
    N0 = 10,
    R0 = -2,
    Bd = (e) => e === "*";
  function M0(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(Bd) && (r += R0),
      t && (r += P0),
      n
        .filter((o) => !Bd(o))
        .reduce((o, i) => o + (k0.test(i) ? b0 : i === "" ? T0 : N0), r)
    );
  }
  function j0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function O0(e, t, n) {
    let { routesMeta: r } = e,
      o = {},
      i = "/",
      s = [];
    for (let l = 0; l < r.length; ++l) {
      let a = r[l],
        u = l === r.length - 1,
        d = i === "/" ? t : t.slice(i.length) || "/",
        f = Ud(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
          d,
        ),
        m = a.route;
      if (
        (!f &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (f = Ud(
            { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
            d,
          )),
        !f)
      )
        return null;
      (Object.assign(o, f.params),
        s.push({
          params: o,
          pathname: Br([i, f.pathname]),
          pathnameBase: L0(Br([i, f.pathnameBase])),
          route: m,
        }),
        f.pathnameBase !== "/" && (i = Br([i, f.pathnameBase])));
    }
    return s;
  }
  function Ud(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = _0(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let i = o[0],
      s = i.replace(/(.)\/+$/, "$1"),
      l = o.slice(1);
    return {
      params: r.reduce((u, d, f) => {
        let { paramName: m, isOptional: c } = d;
        if (m === "*") {
          let g = l[f] || "";
          s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
        }
        const x = l[f];
        return (
          c && !x ? (u[m] = void 0) : (u[m] = (x || "").replace(/%2F/g, "/")),
          u
        );
      }, {}),
      pathname: i,
      pathnameBase: s,
      pattern: e,
    };
  }
  function _0(e, t, n) {
    (t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      Kh(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
      ));
    let r = [],
      o =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (s, l, a) => (
              r.push({ paramName: l, isOptional: a != null }),
              a ? "/?([^\\/]+)?" : "/([^\\/]+)"
            ),
          );
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (o += "\\/*$")
          : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
      [new RegExp(o, t ? void 0 : "i"), r]
    );
  }
  function A0(e) {
    try {
      return e
        .split("/")
        .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        Kh(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ")."),
        ),
        e
      );
    }
  }
  function qh(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  const Br = (e) => e.join("/").replace(/\/\/+/g, "/"),
    L0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  function I0(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const Zh = ["post", "put", "patch", "delete"];
  new Set(Zh);
  const D0 = ["get", ...Zh];
  new Set(D0);
  /**
   * React Router v6.30.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function As() {
    return (
      (As = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      As.apply(this, arguments)
    );
  }
  const F0 = S.createContext(null),
    z0 = S.createContext(null),
    Jh = S.createContext(null),
    il = S.createContext(null),
    sl = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    em = S.createContext(null);
  function oc() {
    return S.useContext(il) != null;
  }
  function tm() {
    return (oc() || nt(!1), S.useContext(il).location);
  }
  function $0(e, t) {
    return B0(e, t);
  }
  function B0(e, t, n, r) {
    oc() || nt(!1);
    let { navigator: o } = S.useContext(Jh),
      { matches: i } = S.useContext(sl),
      s = i[i.length - 1],
      l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = tm(),
      d;
    if (t) {
      var f;
      let y = typeof t == "string" ? ol(t) : t;
      (a === "/" || ((f = y.pathname) != null && f.startsWith(a)) || nt(!1),
        (d = y));
    } else d = u;
    let m = d.pathname || "/",
      c = m;
    if (a !== "/") {
      let y = a.replace(/^\//, "").split("/");
      c = "/" + m.replace(/^\//, "").split("/").slice(y.length).join("/");
    }
    let x = S0(e, { pathname: c }),
      g = Q0(
        x &&
          x.map((y) =>
            Object.assign({}, y, {
              params: Object.assign({}, l, y.params),
              pathname: Br([
                a,
                o.encodeLocation
                  ? o.encodeLocation(y.pathname).pathname
                  : y.pathname,
              ]),
              pathnameBase:
                y.pathnameBase === "/"
                  ? a
                  : Br([
                      a,
                      o.encodeLocation
                        ? o.encodeLocation(y.pathnameBase).pathname
                        : y.pathnameBase,
                    ]),
            }),
          ),
        i,
        n,
        r,
      );
    return t && g
      ? S.createElement(
          il.Provider,
          {
            value: {
              location: As(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                d,
              ),
              navigationType: Rn.Pop,
            },
          },
          g,
        )
      : g;
  }
  function U0() {
    let e = X0(),
      t = I0(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? S.createElement("pre", { style: o }, n) : null,
      null,
    );
  }
  const V0 = S.createElement(U0, null);
  class W0 extends S.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
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
        n,
      );
    }
    render() {
      return this.state.error !== void 0
        ? S.createElement(
            sl.Provider,
            { value: this.props.routeContext },
            S.createElement(em.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function H0(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = S.useContext(F0);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      S.createElement(sl.Provider, { value: t }, r)
    );
  }
  function Q0(e, t, n, r) {
    var o;
    if (
      (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
    ) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (
        (i = r) != null &&
        i.v7_partialHydration &&
        t.length === 0 &&
        !n.initialized &&
        n.matches.length > 0
      )
        e = n.matches;
      else return null;
    }
    let s = e,
      l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
      let d = s.findIndex(
        (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
      );
      (d >= 0 || nt(!1), (s = s.slice(0, Math.min(s.length, d + 1))));
    }
    let a = !1,
      u = -1;
    if (n && r && r.v7_partialHydration)
      for (let d = 0; d < s.length; d++) {
        let f = s[d];
        if (
          ((f.route.HydrateFallback || f.route.hydrateFallbackElement) &&
            (u = d),
          f.route.id)
        ) {
          let { loaderData: m, errors: c } = n,
            x =
              f.route.loader &&
              m[f.route.id] === void 0 &&
              (!c || c[f.route.id] === void 0);
          if (f.route.lazy || x) {
            ((a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
            break;
          }
        }
      }
    return s.reduceRight((d, f, m) => {
      let c,
        x = !1,
        g = null,
        y = null;
      n &&
        ((c = l && f.route.id ? l[f.route.id] : void 0),
        (g = f.route.errorElement || V0),
        a &&
          (u < 0 && m === 0
            ? ((x = !0), (y = null))
            : u === m &&
              ((x = !0), (y = f.route.hydrateFallbackElement || null))));
      let h = t.concat(s.slice(0, m + 1)),
        p = () => {
          let v;
          return (
            c
              ? (v = g)
              : x
                ? (v = y)
                : f.route.Component
                  ? (v = S.createElement(f.route.Component, null))
                  : f.route.element
                    ? (v = f.route.element)
                    : (v = d),
            S.createElement(H0, {
              match: f,
              routeContext: { outlet: d, matches: h, isDataRoute: n != null },
              children: v,
            })
          );
        };
      return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
        ? S.createElement(W0, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: c,
            children: p(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          })
        : p();
    }, null);
  }
  var Ga = (function (e) {
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
  })(Ga || {});
  function K0(e) {
    let t = S.useContext(z0);
    return (t || nt(!1), t);
  }
  function G0(e) {
    let t = S.useContext(sl);
    return (t || nt(!1), t);
  }
  function Y0(e) {
    let t = G0(),
      n = t.matches[t.matches.length - 1];
    return (n.route.id || nt(!1), n.route.id);
  }
  function X0() {
    var e;
    let t = S.useContext(em),
      n = K0(Ga.UseRouteError),
      r = Y0(Ga.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function q0(e, t) {
    (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
  }
  function Ya(e) {
    nt(!1);
  }
  function Z0(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = Rn.Pop,
      navigator: i,
      static: s = !1,
      future: l,
    } = e;
    oc() && nt(!1);
    let a = t.replace(/^\/*/, "/"),
      u = S.useMemo(
        () => ({
          basename: a,
          navigator: i,
          static: s,
          future: As({ v7_relativeSplatPath: !1 }, l),
        }),
        [a, l, i, s],
      );
    typeof r == "string" && (r = ol(r));
    let {
        pathname: d = "/",
        search: f = "",
        hash: m = "",
        state: c = null,
        key: x = "default",
      } = r,
      g = S.useMemo(() => {
        let y = qh(d, a);
        return y == null
          ? null
          : {
              location: { pathname: y, search: f, hash: m, state: c, key: x },
              navigationType: o,
            };
      }, [a, d, f, m, c, x, o]);
    return g == null
      ? null
      : S.createElement(
          Jh.Provider,
          { value: u },
          S.createElement(il.Provider, { children: n, value: g }),
        );
  }
  function J0(e) {
    let { children: t, location: n } = e;
    return $0(Xa(t), n);
  }
  new Promise(() => {});
  function Xa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      S.Children.forEach(e, (r, o) => {
        if (!S.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === S.Fragment) {
          n.push.apply(n, Xa(r.props.children, i));
          return;
        }
        (r.type !== Ya && nt(!1),
          !r.props.index || !r.props.children || nt(!1));
        let s = {
          id: r.props.id || i.join("-"),
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
        (r.props.children && (s.children = Xa(r.props.children, i)), n.push(s));
      }),
      n
    );
  }
  /**
   * React Router DOM v6.30.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ const ew = "6";
  try {
    window.__reactRouterVersion = ew;
  } catch {}
  const tw = "startTransition",
    Vd = Lf[tw];
  function nw(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      i = S.useRef();
    i.current == null && (i.current = y0({ window: o, v5Compat: !0 }));
    let s = i.current,
      [l, a] = S.useState({ action: s.action, location: s.location }),
      { v7_startTransition: u } = r || {},
      d = S.useCallback(
        (f) => {
          u && Vd ? Vd(() => a(f)) : a(f);
        },
        [a, u],
      );
    return (
      S.useLayoutEffect(() => s.listen(d), [s, d]),
      S.useEffect(() => q0(r), [r]),
      S.createElement(Z0, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r,
      })
    );
  }
  var Wd;
  (function (e) {
    ((e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState"));
  })(Wd || (Wd = {}));
  var Hd;
  (function (e) {
    ((e.UseFetcher = "useFetcher"),
      (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration"));
  })(Hd || (Hd = {}));
  var Qd = ["light", "dark"],
    rw = "(prefers-color-scheme: dark)",
    ow = S.createContext(void 0),
    iw = { setTheme: (e) => {}, themes: [] },
    sw = () => {
      var e;
      return (e = S.useContext(ow)) != null ? e : iw;
    };
  S.memo(
    ({
      forcedTheme: e,
      storageKey: t,
      attribute: n,
      enableSystem: r,
      enableColorScheme: o,
      defaultTheme: i,
      value: s,
      attrs: l,
      nonce: a,
    }) => {
      let u = i === "system",
        d =
          n === "class"
            ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((x) => `'${x}'`).join(",")})`};`
            : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        f = o
          ? Qd.includes(i) && i
            ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
            : "if(e==='light'||e==='dark')d.style.colorScheme=e"
          : "",
        m = (x, g = !1, y = !0) => {
          let h = s ? s[x] : x,
            p = g ? x + "|| ''" : `'${h}'`,
            v = "";
          return (
            o &&
              y &&
              !g &&
              Qd.includes(x) &&
              (v += `d.style.colorScheme = '${x}';`),
            n === "class"
              ? g || h
                ? (v += `c.add(${p})`)
                : (v += "null")
              : h && (v += `d[s](n,${p})`),
            v
          );
        },
        c = e
          ? `!function(){${d}${m(e)}}()`
          : r
            ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${rw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(i, !1, !1) + "}"}${f}}catch(e){}}()`
            : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(i, !1, !1)};}${f}}catch(t){}}();`;
      return S.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: { __html: c },
      });
    },
  );
  var lw = (e) => {
      switch (e) {
        case "success":
          return cw;
        case "info":
          return fw;
        case "warning":
          return dw;
        case "error":
          return pw;
        default:
          return null;
      }
    },
    aw = Array(12).fill(0),
    uw = ({ visible: e, className: t }) =>
      A.createElement(
        "div",
        {
          className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
          "data-visible": e,
        },
        A.createElement(
          "div",
          { className: "sonner-spinner" },
          aw.map((n, r) =>
            A.createElement("div", {
              className: "sonner-loading-bar",
              key: `spinner-bar-${r}`,
            }),
          ),
        ),
      ),
    cw = A.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      A.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd",
      }),
    ),
    dw = A.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      A.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd",
      }),
    ),
    fw = A.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd",
      }),
    ),
    pw = A.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd",
      }),
    ),
    hw = A.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
    ),
    mw = () => {
      let [e, t] = A.useState(document.hidden);
      return (
        A.useEffect(() => {
          let n = () => {
            t(document.hidden);
          };
          return (
            document.addEventListener("visibilitychange", n),
            () => window.removeEventListener("visibilitychange", n)
          );
        }, []),
        e
      );
    },
    qa = 1,
    gw = class {
      constructor() {
        ((this.subscribe = (e) => (
          this.subscribers.push(e),
          () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1);
          }
        )),
          (this.publish = (e) => {
            this.subscribers.forEach((t) => t(e));
          }),
          (this.addToast = (e) => {
            (this.publish(e), (this.toasts = [...this.toasts, e]));
          }),
          (this.create = (e) => {
            var t;
            let { message: n, ...r } = e,
              o =
                typeof (e == null ? void 0 : e.id) == "number" ||
                ((t = e.id) == null ? void 0 : t.length) > 0
                  ? e.id
                  : qa++,
              i = this.toasts.find((l) => l.id === o),
              s = e.dismissible === void 0 ? !0 : e.dismissible;
            return (
              this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
              i
                ? (this.toasts = this.toasts.map((l) =>
                    l.id === o
                      ? (this.publish({ ...l, ...e, id: o, title: n }),
                        { ...l, ...e, id: o, dismissible: s, title: n })
                      : l,
                  ))
                : this.addToast({ title: n, ...r, dismissible: s, id: o }),
              o
            );
          }),
          (this.dismiss = (e) => (
            this.dismissedToasts.add(e),
            e ||
              this.toasts.forEach((t) => {
                this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
              }),
            this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
            e
          )),
          (this.message = (e, t) => this.create({ ...t, message: e })),
          (this.error = (e, t) =>
            this.create({ ...t, message: e, type: "error" })),
          (this.success = (e, t) =>
            this.create({ ...t, type: "success", message: e })),
          (this.info = (e, t) =>
            this.create({ ...t, type: "info", message: e })),
          (this.warning = (e, t) =>
            this.create({ ...t, type: "warning", message: e })),
          (this.loading = (e, t) =>
            this.create({ ...t, type: "loading", message: e })),
          (this.promise = (e, t) => {
            if (!t) return;
            let n;
            t.loading !== void 0 &&
              (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description:
                  typeof t.description != "function" ? t.description : void 0,
              }));
            let r = e instanceof Promise ? e : e(),
              o = n !== void 0,
              i,
              s = r
                .then(async (a) => {
                  if (((i = ["resolve", a]), A.isValidElement(a)))
                    ((o = !1),
                      this.create({ id: n, type: "default", message: a }));
                  else if (yw(a) && !a.ok) {
                    o = !1;
                    let u =
                        typeof t.error == "function"
                          ? await t.error(`HTTP error! status: ${a.status}`)
                          : t.error,
                      d =
                        typeof t.description == "function"
                          ? await t.description(
                              `HTTP error! status: ${a.status}`,
                            )
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: u,
                      description: d,
                    });
                  } else if (t.success !== void 0) {
                    o = !1;
                    let u =
                        typeof t.success == "function"
                          ? await t.success(a)
                          : t.success,
                      d =
                        typeof t.description == "function"
                          ? await t.description(a)
                          : t.description;
                    this.create({
                      id: n,
                      type: "success",
                      message: u,
                      description: d,
                    });
                  }
                })
                .catch(async (a) => {
                  if (((i = ["reject", a]), t.error !== void 0)) {
                    o = !1;
                    let u =
                        typeof t.error == "function"
                          ? await t.error(a)
                          : t.error,
                      d =
                        typeof t.description == "function"
                          ? await t.description(a)
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: u,
                      description: d,
                    });
                  }
                })
                .finally(() => {
                  var a;
                  (o && (this.dismiss(n), (n = void 0)),
                    (a = t.finally) == null || a.call(t));
                }),
              l = () =>
                new Promise((a, u) =>
                  s
                    .then(() => (i[0] === "reject" ? u(i[1]) : a(i[1])))
                    .catch(u),
                );
            return typeof n != "string" && typeof n != "number"
              ? { unwrap: l }
              : Object.assign(n, { unwrap: l });
          }),
          (this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || qa++;
            return (this.create({ jsx: e(n), id: n, ...t }), n);
          }),
          (this.getActiveToasts = () =>
            this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
          (this.subscribers = []),
          (this.toasts = []),
          (this.dismissedToasts = new Set()));
      }
    },
    Xe = new gw(),
    vw = (e, t) => {
      let n = (t == null ? void 0 : t.id) || qa++;
      return (Xe.addToast({ title: e, ...t, id: n }), n);
    },
    yw = (e) =>
      e &&
      typeof e == "object" &&
      "ok" in e &&
      typeof e.ok == "boolean" &&
      "status" in e &&
      typeof e.status == "number",
    ww = vw,
    xw = () => Xe.toasts,
    Sw = () => Xe.getActiveToasts();
  Object.assign(
    ww,
    {
      success: Xe.success,
      info: Xe.info,
      warning: Xe.warning,
      error: Xe.error,
      custom: Xe.custom,
      message: Xe.message,
      promise: Xe.promise,
      dismiss: Xe.dismiss,
      loading: Xe.loading,
    },
    { getHistory: xw, getToasts: Sw },
  );
  function Ew(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    ((r.type = "text/css"),
      t === "top" && n.firstChild
        ? n.insertBefore(r, n.firstChild)
        : n.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e)));
  }
  Ew(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function Vi(e) {
    return e.label !== void 0;
  }
  var Cw = 3,
    kw = "32px",
    bw = "16px",
    Kd = 4e3,
    Pw = 356,
    Tw = 14,
    Nw = 20,
    Rw = 200;
  function kt(...e) {
    return e.filter(Boolean).join(" ");
  }
  function Mw(e) {
    let [t, n] = e.split("-"),
      r = [];
    return (t && r.push(t), n && r.push(n), r);
  }
  var jw = (e) => {
    var t, n, r, o, i, s, l, a, u, d, f;
    let {
        invert: m,
        toast: c,
        unstyled: x,
        interacting: g,
        setHeights: y,
        visibleToasts: h,
        heights: p,
        index: v,
        toasts: k,
        expanded: b,
        removeToast: P,
        defaultRichColors: T,
        closeButton: O,
        style: F,
        cancelButtonStyle: I,
        actionButtonStyle: H,
        className: B = "",
        descriptionClassName: Z = "",
        duration: $,
        position: J,
        gap: Q,
        loadingIcon: K,
        expandByDefault: R,
        classNames: M,
        icons: C,
        closeButtonAriaLabel: E = "Close toast",
        pauseWhenPageIsHidden: j,
      } = e,
      [L, z] = A.useState(null),
      [V, W] = A.useState(null),
      [D, G] = A.useState(!1),
      [ne, se] = A.useState(!1),
      [re, le] = A.useState(!1),
      [ce, ee] = A.useState(!1),
      [Te, _e] = A.useState(!1),
      [$e, Be] = A.useState(0),
      [Ye, ot] = A.useState(0),
      Xn = A.useRef(c.duration || $ || Kd),
      xi = A.useRef(null),
      Kt = A.useRef(null),
      Si = v === 0,
      gl = v + 1 <= h,
      Ue = c.type,
      cn = c.dismissible !== !1,
      vl = c.className || "",
      Ei = c.descriptionClassName || "",
      qn = A.useMemo(
        () => p.findIndex((Y) => Y.toastId === c.id) || 0,
        [p, c.id],
      ),
      ho = A.useMemo(() => {
        var Y;
        return (Y = c.closeButton) != null ? Y : O;
      }, [c.closeButton, O]),
      Ci = A.useMemo(() => c.duration || $ || Kd, [c.duration, $]),
      mo = A.useRef(0),
      xr = A.useRef(0),
      wc = A.useRef(0),
      Sr = A.useRef(null),
      [gg, vg] = J.split("-"),
      xc = A.useMemo(
        () => p.reduce((Y, ue, me) => (me >= qn ? Y : Y + ue.height), 0),
        [p, qn],
      ),
      Sc = mw(),
      yg = c.invert || m,
      yl = Ue === "loading";
    ((xr.current = A.useMemo(() => qn * Q + xc, [qn, xc])),
      A.useEffect(() => {
        Xn.current = Ci;
      }, [Ci]),
      A.useEffect(() => {
        G(!0);
      }, []),
      A.useEffect(() => {
        let Y = Kt.current;
        if (Y) {
          let ue = Y.getBoundingClientRect().height;
          return (
            ot(ue),
            y((me) => [
              { toastId: c.id, height: ue, position: c.position },
              ...me,
            ]),
            () => y((me) => me.filter((xt) => xt.toastId !== c.id))
          );
        }
      }, [y, c.id]),
      A.useLayoutEffect(() => {
        if (!D) return;
        let Y = Kt.current,
          ue = Y.style.height;
        Y.style.height = "auto";
        let me = Y.getBoundingClientRect().height;
        ((Y.style.height = ue),
          ot(me),
          y((xt) =>
            xt.find((St) => St.toastId === c.id)
              ? xt.map((St) =>
                  St.toastId === c.id ? { ...St, height: me } : St,
                )
              : [{ toastId: c.id, height: me, position: c.position }, ...xt],
          ));
      }, [D, c.title, c.description, y, c.id]));
    let dn = A.useCallback(() => {
      (se(!0),
        Be(xr.current),
        y((Y) => Y.filter((ue) => ue.toastId !== c.id)),
        setTimeout(() => {
          P(c);
        }, Rw));
    }, [c, P, y, xr]);
    (A.useEffect(() => {
      if (
        (c.promise && Ue === "loading") ||
        c.duration === 1 / 0 ||
        c.type === "loading"
      )
        return;
      let Y;
      return (
        b || g || (j && Sc)
          ? (() => {
              if (wc.current < mo.current) {
                let ue = new Date().getTime() - mo.current;
                Xn.current = Xn.current - ue;
              }
              wc.current = new Date().getTime();
            })()
          : Xn.current !== 1 / 0 &&
            ((mo.current = new Date().getTime()),
            (Y = setTimeout(() => {
              var ue;
              ((ue = c.onAutoClose) == null || ue.call(c, c), dn());
            }, Xn.current))),
        () => clearTimeout(Y)
      );
    }, [b, g, c, Ue, j, Sc, dn]),
      A.useEffect(() => {
        c.delete && dn();
      }, [dn, c.delete]));
    function wg() {
      var Y, ue, me;
      return C != null && C.loading
        ? A.createElement(
            "div",
            {
              className: kt(
                M == null ? void 0 : M.loader,
                (Y = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : Y.loader,
                "sonner-loader",
              ),
              "data-visible": Ue === "loading",
            },
            C.loading,
          )
        : K
          ? A.createElement(
              "div",
              {
                className: kt(
                  M == null ? void 0 : M.loader,
                  (ue = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : ue.loader,
                  "sonner-loader",
                ),
                "data-visible": Ue === "loading",
              },
              K,
            )
          : A.createElement(uw, {
              className: kt(
                M == null ? void 0 : M.loader,
                (me = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : me.loader,
              ),
              visible: Ue === "loading",
            });
    }
    return A.createElement(
      "li",
      {
        tabIndex: 0,
        ref: Kt,
        className: kt(
          B,
          vl,
          M == null ? void 0 : M.toast,
          (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
          M == null ? void 0 : M.default,
          M == null ? void 0 : M[Ue],
          (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[Ue],
        ),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : T,
        "data-styled": !(c.jsx || c.unstyled || x),
        "data-mounted": D,
        "data-promise": !!c.promise,
        "data-swiped": Te,
        "data-removed": ne,
        "data-visible": gl,
        "data-y-position": gg,
        "data-x-position": vg,
        "data-index": v,
        "data-front": Si,
        "data-swiping": re,
        "data-dismissible": cn,
        "data-type": Ue,
        "data-invert": yg,
        "data-swipe-out": ce,
        "data-swipe-direction": V,
        "data-expanded": !!(b || (R && D)),
        style: {
          "--index": v,
          "--toasts-before": v,
          "--z-index": k.length - v,
          "--offset": `${ne ? $e : xr.current}px`,
          "--initial-height": R ? "auto" : `${Ye}px`,
          ...F,
          ...c.style,
        },
        onDragEnd: () => {
          (le(!1), z(null), (Sr.current = null));
        },
        onPointerDown: (Y) => {
          yl ||
            !cn ||
            ((xi.current = new Date()),
            Be(xr.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" &&
              (le(!0), (Sr.current = { x: Y.clientX, y: Y.clientY })));
        },
        onPointerUp: () => {
          var Y, ue, me, xt;
          if (ce || !cn) return;
          Sr.current = null;
          let St = Number(
              ((Y = Kt.current) == null
                ? void 0
                : Y.style
                    .getPropertyValue("--swipe-amount-x")
                    .replace("px", "")) || 0,
            ),
            fn = Number(
              ((ue = Kt.current) == null
                ? void 0
                : ue.style
                    .getPropertyValue("--swipe-amount-y")
                    .replace("px", "")) || 0,
            ),
            Zn =
              new Date().getTime() -
              ((me = xi.current) == null ? void 0 : me.getTime()),
            Et = L === "x" ? St : fn,
            pn = Math.abs(Et) / Zn;
          if (Math.abs(Et) >= Nw || pn > 0.11) {
            (Be(xr.current),
              (xt = c.onDismiss) == null || xt.call(c, c),
              W(
                L === "x"
                  ? St > 0
                    ? "right"
                    : "left"
                  : fn > 0
                    ? "down"
                    : "up",
              ),
              dn(),
              ee(!0),
              _e(!1));
            return;
          }
          (le(!1), z(null));
        },
        onPointerMove: (Y) => {
          var ue, me, xt, St;
          if (
            !Sr.current ||
            !cn ||
            ((ue = window.getSelection()) == null
              ? void 0
              : ue.toString().length) > 0
          )
            return;
          let fn = Y.clientY - Sr.current.y,
            Zn = Y.clientX - Sr.current.x,
            Et = (me = e.swipeDirections) != null ? me : Mw(J);
          !L &&
            (Math.abs(Zn) > 1 || Math.abs(fn) > 1) &&
            z(Math.abs(Zn) > Math.abs(fn) ? "x" : "y");
          let pn = { x: 0, y: 0 };
          (L === "y"
            ? (Et.includes("top") || Et.includes("bottom")) &&
              ((Et.includes("top") && fn < 0) ||
                (Et.includes("bottom") && fn > 0)) &&
              (pn.y = fn)
            : L === "x" &&
              (Et.includes("left") || Et.includes("right")) &&
              ((Et.includes("left") && Zn < 0) ||
                (Et.includes("right") && Zn > 0)) &&
              (pn.x = Zn),
            (Math.abs(pn.x) > 0 || Math.abs(pn.y) > 0) && _e(!0),
            (xt = Kt.current) == null ||
              xt.style.setProperty("--swipe-amount-x", `${pn.x}px`),
            (St = Kt.current) == null ||
              St.style.setProperty("--swipe-amount-y", `${pn.y}px`));
        },
      },
      ho && !c.jsx
        ? A.createElement(
            "button",
            {
              "aria-label": E,
              "data-disabled": yl,
              "data-close-button": !0,
              onClick:
                yl || !cn
                  ? () => {}
                  : () => {
                      var Y;
                      (dn(), (Y = c.onDismiss) == null || Y.call(c, c));
                    },
              className: kt(
                M == null ? void 0 : M.closeButton,
                (o = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : o.closeButton,
              ),
            },
            (i = C == null ? void 0 : C.close) != null ? i : hw,
          )
        : null,
      c.jsx || S.isValidElement(c.title)
        ? c.jsx
          ? c.jsx
          : typeof c.title == "function"
            ? c.title()
            : c.title
        : A.createElement(
            A.Fragment,
            null,
            Ue || c.icon || c.promise
              ? A.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: kt(
                      M == null ? void 0 : M.icon,
                      (s = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : s.icon,
                    ),
                  },
                  c.promise || (c.type === "loading" && !c.icon)
                    ? c.icon || wg()
                    : null,
                  c.type !== "loading"
                    ? c.icon || (C == null ? void 0 : C[Ue]) || lw(Ue)
                    : null,
                )
              : null,
            A.createElement(
              "div",
              {
                "data-content": "",
                className: kt(
                  M == null ? void 0 : M.content,
                  (l = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : l.content,
                ),
              },
              A.createElement(
                "div",
                {
                  "data-title": "",
                  className: kt(
                    M == null ? void 0 : M.title,
                    (a = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : a.title,
                  ),
                },
                typeof c.title == "function" ? c.title() : c.title,
              ),
              c.description
                ? A.createElement(
                    "div",
                    {
                      "data-description": "",
                      className: kt(
                        Z,
                        Ei,
                        M == null ? void 0 : M.description,
                        (u = c == null ? void 0 : c.classNames) == null
                          ? void 0
                          : u.description,
                      ),
                    },
                    typeof c.description == "function"
                      ? c.description()
                      : c.description,
                  )
                : null,
            ),
            S.isValidElement(c.cancel)
              ? c.cancel
              : c.cancel && Vi(c.cancel)
                ? A.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-cancel": !0,
                      style: c.cancelButtonStyle || I,
                      onClick: (Y) => {
                        var ue, me;
                        Vi(c.cancel) &&
                          cn &&
                          ((me = (ue = c.cancel).onClick) == null ||
                            me.call(ue, Y),
                          dn());
                      },
                      className: kt(
                        M == null ? void 0 : M.cancelButton,
                        (d = c == null ? void 0 : c.classNames) == null
                          ? void 0
                          : d.cancelButton,
                      ),
                    },
                    c.cancel.label,
                  )
                : null,
            S.isValidElement(c.action)
              ? c.action
              : c.action && Vi(c.action)
                ? A.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-action": !0,
                      style: c.actionButtonStyle || H,
                      onClick: (Y) => {
                        var ue, me;
                        Vi(c.action) &&
                          ((me = (ue = c.action).onClick) == null ||
                            me.call(ue, Y),
                          !Y.defaultPrevented && dn());
                      },
                      className: kt(
                        M == null ? void 0 : M.actionButton,
                        (f = c == null ? void 0 : c.classNames) == null
                          ? void 0
                          : f.actionButton,
                      ),
                    },
                    c.action.label,
                  )
                : null,
          ),
    );
  };
  function Gd() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e
      ? window.getComputedStyle(document.documentElement).direction
      : e;
  }
  function Ow(e, t) {
    let n = {};
    return (
      [e, t].forEach((r, o) => {
        let i = o === 1,
          s = i ? "--mobile-offset" : "--offset",
          l = i ? bw : kw;
        function a(u) {
          ["top", "right", "bottom", "left"].forEach((d) => {
            n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
          });
        }
        typeof r == "number" || typeof r == "string"
          ? a(r)
          : typeof r == "object"
            ? ["top", "right", "bottom", "left"].forEach((u) => {
                r[u] === void 0
                  ? (n[`${s}-${u}`] = l)
                  : (n[`${s}-${u}`] =
                      typeof r[u] == "number" ? `${r[u]}px` : r[u]);
              })
            : a(l);
      }),
      n
    );
  }
  var _w = S.forwardRef(function (e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: i,
        closeButton: s,
        className: l,
        offset: a,
        mobileOffset: u,
        theme: d = "light",
        richColors: f,
        duration: m,
        style: c,
        visibleToasts: x = Cw,
        toastOptions: g,
        dir: y = Gd(),
        gap: h = Tw,
        loadingIcon: p,
        icons: v,
        containerAriaLabel: k = "Notifications",
        pauseWhenPageIsHidden: b,
      } = e,
      [P, T] = A.useState([]),
      O = A.useMemo(
        () =>
          Array.from(
            new Set(
              [r].concat(P.filter((j) => j.position).map((j) => j.position)),
            ),
          ),
        [P, r],
      ),
      [F, I] = A.useState([]),
      [H, B] = A.useState(!1),
      [Z, $] = A.useState(!1),
      [J, Q] = A.useState(
        d !== "system"
          ? d
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      K = A.useRef(null),
      R = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      M = A.useRef(null),
      C = A.useRef(!1),
      E = A.useCallback((j) => {
        T((L) => {
          var z;
          return (
            ((z = L.find((V) => V.id === j.id)) != null && z.delete) ||
              Xe.dismiss(j.id),
            L.filter(({ id: V }) => V !== j.id)
          );
        });
      }, []);
    return (
      A.useEffect(
        () =>
          Xe.subscribe((j) => {
            if (j.dismiss) {
              T((L) =>
                L.map((z) => (z.id === j.id ? { ...z, delete: !0 } : z)),
              );
              return;
            }
            setTimeout(() => {
              Fh.flushSync(() => {
                T((L) => {
                  let z = L.findIndex((V) => V.id === j.id);
                  return z !== -1
                    ? [...L.slice(0, z), { ...L[z], ...j }, ...L.slice(z + 1)]
                    : [j, ...L];
                });
              });
            });
          }),
        [],
      ),
      A.useEffect(() => {
        if (d !== "system") {
          Q(d);
          return;
        }
        if (
          (d === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? Q("dark")
              : Q("light")),
          typeof window > "u")
        )
          return;
        let j = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          j.addEventListener("change", ({ matches: L }) => {
            Q(L ? "dark" : "light");
          });
        } catch {
          j.addListener(({ matches: z }) => {
            try {
              Q(z ? "dark" : "light");
            } catch (V) {
              console.error(V);
            }
          });
        }
      }, [d]),
      A.useEffect(() => {
        P.length <= 1 && B(!1);
      }, [P]),
      A.useEffect(() => {
        let j = (L) => {
          var z, V;
          (o.every((W) => L[W] || L.code === W) &&
            (B(!0), (z = K.current) == null || z.focus()),
            L.code === "Escape" &&
              (document.activeElement === K.current ||
                ((V = K.current) != null &&
                  V.contains(document.activeElement))) &&
              B(!1));
        };
        return (
          document.addEventListener("keydown", j),
          () => document.removeEventListener("keydown", j)
        );
      }, [o]),
      A.useEffect(() => {
        if (K.current)
          return () => {
            M.current &&
              (M.current.focus({ preventScroll: !0 }),
              (M.current = null),
              (C.current = !1));
          };
      }, [K.current]),
      A.createElement(
        "section",
        {
          ref: t,
          "aria-label": `${k} ${R}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        O.map((j, L) => {
          var z;
          let [V, W] = j.split("-");
          return P.length
            ? A.createElement(
                "ol",
                {
                  key: j,
                  dir: y === "auto" ? Gd() : y,
                  tabIndex: -1,
                  ref: K,
                  className: l,
                  "data-sonner-toaster": !0,
                  "data-theme": J,
                  "data-y-position": V,
                  "data-lifted": H && P.length > 1 && !i,
                  "data-x-position": W,
                  style: {
                    "--front-toast-height": `${((z = F[0]) == null ? void 0 : z.height) || 0}px`,
                    "--width": `${Pw}px`,
                    "--gap": `${h}px`,
                    ...c,
                    ...Ow(a, u),
                  },
                  onBlur: (D) => {
                    C.current &&
                      !D.currentTarget.contains(D.relatedTarget) &&
                      ((C.current = !1),
                      M.current &&
                        (M.current.focus({ preventScroll: !0 }),
                        (M.current = null)));
                  },
                  onFocus: (D) => {
                    (D.target instanceof HTMLElement &&
                      D.target.dataset.dismissible === "false") ||
                      C.current ||
                      ((C.current = !0), (M.current = D.relatedTarget));
                  },
                  onMouseEnter: () => B(!0),
                  onMouseMove: () => B(!0),
                  onMouseLeave: () => {
                    Z || B(!1);
                  },
                  onDragEnd: () => B(!1),
                  onPointerDown: (D) => {
                    (D.target instanceof HTMLElement &&
                      D.target.dataset.dismissible === "false") ||
                      $(!0);
                  },
                  onPointerUp: () => $(!1),
                },
                P.filter(
                  (D) => (!D.position && L === 0) || D.position === j,
                ).map((D, G) => {
                  var ne, se;
                  return A.createElement(jw, {
                    key: D.id,
                    icons: v,
                    index: G,
                    toast: D,
                    defaultRichColors: f,
                    duration:
                      (ne = g == null ? void 0 : g.duration) != null ? ne : m,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: x,
                    closeButton:
                      (se = g == null ? void 0 : g.closeButton) != null
                        ? se
                        : s,
                    interacting: Z,
                    position: j,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: E,
                    toasts: P.filter((re) => re.position == D.position),
                    heights: F.filter((re) => re.position == D.position),
                    setHeights: I,
                    expandByDefault: i,
                    gap: h,
                    loadingIcon: p,
                    expanded: H,
                    pauseWhenPageIsHidden: b,
                    swipeDirections: e.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  });
  const Aw = ({ ...e }) => {
      const { theme: t = "system" } = sw();
      return w.jsx(_w, {
        theme: t,
        className: "toaster group",
        toastOptions: {
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        },
        ...e,
      });
    },
    Lw = 1,
    Iw = 1e6;
  let Kl = 0;
  function Dw() {
    return ((Kl = (Kl + 1) % Number.MAX_SAFE_INTEGER), Kl.toString());
  }
  const Gl = new Map(),
    Yd = (e) => {
      if (Gl.has(e)) return;
      const t = setTimeout(() => {
        (Gl.delete(e), Bo({ type: "REMOVE_TOAST", toastId: e }));
      }, Iw);
      Gl.set(e, t);
    },
    Fw = (e, t) => {
      switch (t.type) {
        case "ADD_TOAST":
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Lw) };
        case "UPDATE_TOAST":
          return {
            ...e,
            toasts: e.toasts.map((n) =>
              n.id === t.toast.id ? { ...n, ...t.toast } : n,
            ),
          };
        case "DISMISS_TOAST": {
          const { toastId: n } = t;
          return (
            n
              ? Yd(n)
              : e.toasts.forEach((r) => {
                  Yd(r.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((r) =>
                r.id === n || n === void 0 ? { ...r, open: !1 } : r,
              ),
            }
          );
        }
        case "REMOVE_TOAST":
          return t.toastId === void 0
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
      }
    },
    is = [];
  let ss = { toasts: [] };
  function Bo(e) {
    ((ss = Fw(ss, e)),
      is.forEach((t) => {
        t(ss);
      }));
  }
  function zw({ ...e }) {
    const t = Dw(),
      n = (o) => Bo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
      r = () => Bo({ type: "DISMISS_TOAST", toastId: t });
    return (
      Bo({
        type: "ADD_TOAST",
        toast: {
          ...e,
          id: t,
          open: !0,
          onOpenChange: (o) => {
            o || r();
          },
        },
      }),
      { id: t, dismiss: r, update: n }
    );
  }
  function $w() {
    const [e, t] = S.useState(ss);
    return (
      S.useEffect(
        () => (
          is.push(t),
          () => {
            const n = is.indexOf(t);
            n > -1 && is.splice(n, 1);
          }
        ),
        [e],
      ),
      {
        ...e,
        toast: zw,
        dismiss: (n) => Bo({ type: "DISMISS_TOAST", toastId: n }),
      }
    );
  }
  function be(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
      if ((e == null || e(o), n === !1 || !o.defaultPrevented))
        return t == null ? void 0 : t(o);
    };
  }
  function Xd(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
  }
  function nm(...e) {
    return (t) => {
      let n = !1;
      const r = e.map((o) => {
        const i = Xd(o, t);
        return (!n && typeof i == "function" && (n = !0), i);
      });
      if (n)
        return () => {
          for (let o = 0; o < r.length; o++) {
            const i = r[o];
            typeof i == "function" ? i() : Xd(e[o], null);
          }
        };
    };
  }
  function At(...e) {
    return S.useCallback(nm(...e), e);
  }
  function ll(e, t = []) {
    let n = [];
    function r(i, s) {
      const l = S.createContext(s),
        a = n.length;
      n = [...n, s];
      const u = (f) => {
        var h;
        const { scope: m, children: c, ...x } = f,
          g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || l,
          y = S.useMemo(() => x, Object.values(x));
        return w.jsx(g.Provider, { value: y, children: c });
      };
      u.displayName = i + "Provider";
      function d(f, m) {
        var g;
        const c =
            ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[a]) || l,
          x = S.useContext(c);
        if (x) return x;
        if (s !== void 0) return s;
        throw new Error(`\`${f}\` must be used within \`${i}\``);
      }
      return [u, d];
    }
    const o = () => {
      const i = n.map((s) => S.createContext(s));
      return function (l) {
        const a = (l == null ? void 0 : l[e]) || i;
        return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
      };
    };
    return ((o.scopeName = e), [r, Bw(o, ...t)]);
  }
  function Bw(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
      return function (i) {
        const s = r.reduce((l, { useScope: a, scopeName: u }) => {
          const f = a(i)[`__scope${u}`];
          return { ...l, ...f };
        }, {});
        return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
      };
    };
    return ((n.scopeName = t.scopeName), n);
  }
  function Ls(e) {
    const t = Vw(e),
      n = S.forwardRef((r, o) => {
        const { children: i, ...s } = r,
          l = S.Children.toArray(i),
          a = l.find(Hw);
        if (a) {
          const u = a.props.children,
            d = l.map((f) =>
              f === a
                ? S.Children.count(u) > 1
                  ? S.Children.only(null)
                  : S.isValidElement(u)
                    ? u.props.children
                    : null
                : f,
            );
          return w.jsx(t, {
            ...s,
            ref: o,
            children: S.isValidElement(u) ? S.cloneElement(u, void 0, d) : null,
          });
        }
        return w.jsx(t, { ...s, ref: o, children: i });
      });
    return ((n.displayName = `${e}.Slot`), n);
  }
  var Uw = Ls("Slot");
  function Vw(e) {
    const t = S.forwardRef((n, r) => {
      const { children: o, ...i } = n;
      if (S.isValidElement(o)) {
        const s = Kw(o),
          l = Qw(i, o.props);
        return (
          o.type !== S.Fragment && (l.ref = r ? nm(r, s) : s),
          S.cloneElement(o, l)
        );
      }
      return S.Children.count(o) > 1 ? S.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
  }
  var rm = Symbol("radix.slottable");
  function Ww(e) {
    const t = ({ children: n }) => w.jsx(w.Fragment, { children: n });
    return ((t.displayName = `${e}.Slottable`), (t.__radixId = rm), t);
  }
  function Hw(e) {
    return (
      S.isValidElement(e) &&
      typeof e.type == "function" &&
      "__radixId" in e.type &&
      e.type.__radixId === rm
    );
  }
  function Qw(e, t) {
    const n = { ...t };
    for (const r in t) {
      const o = e[r],
        i = t[r];
      /^on[A-Z]/.test(r)
        ? o && i
          ? (n[r] = (...l) => {
              const a = i(...l);
              return (o(...l), a);
            })
          : o && (n[r] = o)
        : r === "style"
          ? (n[r] = { ...o, ...i })
          : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function Kw(e) {
    var r, o;
    let t =
        (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : o.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function Gw(e) {
    const t = e + "CollectionProvider",
      [n, r] = ll(t),
      [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      s = (g) => {
        const { scope: y, children: h } = g,
          p = A.useRef(null),
          v = A.useRef(new Map()).current;
        return w.jsx(o, {
          scope: y,
          itemMap: v,
          collectionRef: p,
          children: h,
        });
      };
    s.displayName = t;
    const l = e + "CollectionSlot",
      a = Ls(l),
      u = A.forwardRef((g, y) => {
        const { scope: h, children: p } = g,
          v = i(l, h),
          k = At(y, v.collectionRef);
        return w.jsx(a, { ref: k, children: p });
      });
    u.displayName = l;
    const d = e + "CollectionItemSlot",
      f = "data-radix-collection-item",
      m = Ls(d),
      c = A.forwardRef((g, y) => {
        const { scope: h, children: p, ...v } = g,
          k = A.useRef(null),
          b = At(y, k),
          P = i(d, h);
        return (
          A.useEffect(
            () => (
              P.itemMap.set(k, { ref: k, ...v }),
              () => void P.itemMap.delete(k)
            ),
          ),
          w.jsx(m, { [f]: "", ref: b, children: p })
        );
      });
    c.displayName = d;
    function x(g) {
      const y = i(e + "CollectionConsumer", g);
      return A.useCallback(() => {
        const p = y.collectionRef.current;
        if (!p) return [];
        const v = Array.from(p.querySelectorAll(`[${f}]`));
        return Array.from(y.itemMap.values()).sort(
          (P, T) => v.indexOf(P.ref.current) - v.indexOf(T.ref.current),
        );
      }, [y.collectionRef, y.itemMap]);
    }
    return [{ Provider: s, Slot: u, ItemSlot: c }, x, r];
  }
  var Yw = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "select",
      "span",
      "svg",
      "ul",
    ],
    rt = Yw.reduce((e, t) => {
      const n = Ls(`Primitive.${t}`),
        r = S.forwardRef((o, i) => {
          const { asChild: s, ...l } = o,
            a = s ? n : t;
          return (
            typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
            w.jsx(a, { ...l, ref: i })
          );
        });
      return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {});
  function om(e, t) {
    e && gi.flushSync(() => e.dispatchEvent(t));
  }
  function $n(e) {
    const t = S.useRef(e);
    return (
      S.useEffect(() => {
        t.current = e;
      }),
      S.useMemo(
        () =>
          (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n);
          },
        [],
      )
    );
  }
  function Xw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = $n(e);
    S.useEffect(() => {
      const r = (o) => {
        o.key === "Escape" && n(o);
      };
      return (
        t.addEventListener("keydown", r, { capture: !0 }),
        () => t.removeEventListener("keydown", r, { capture: !0 })
      );
    }, [n, t]);
  }
  var qw = "DismissableLayer",
    Za = "dismissableLayer.update",
    Zw = "dismissableLayer.pointerDownOutside",
    Jw = "dismissableLayer.focusOutside",
    qd,
    im = S.createContext({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    ic = S.forwardRef((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: r,
          onPointerDownOutside: o,
          onFocusOutside: i,
          onInteractOutside: s,
          onDismiss: l,
          ...a
        } = e,
        u = S.useContext(im),
        [d, f] = S.useState(null),
        m =
          (d == null ? void 0 : d.ownerDocument) ??
          (globalThis == null ? void 0 : globalThis.document),
        [, c] = S.useState({}),
        x = At(t, (T) => f(T)),
        g = Array.from(u.layers),
        [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        h = g.indexOf(y),
        p = d ? g.indexOf(d) : -1,
        v = u.layersWithOutsidePointerEventsDisabled.size > 0,
        k = p >= h,
        b = tx((T) => {
          const O = T.target,
            F = [...u.branches].some((I) => I.contains(O));
          !k ||
            F ||
            (o == null || o(T),
            s == null || s(T),
            T.defaultPrevented || l == null || l());
        }, m),
        P = nx((T) => {
          const O = T.target;
          [...u.branches].some((I) => I.contains(O)) ||
            (i == null || i(T),
            s == null || s(T),
            T.defaultPrevented || l == null || l());
        }, m);
      return (
        Xw((T) => {
          p === u.layers.size - 1 &&
            (r == null || r(T),
            !T.defaultPrevented && l && (T.preventDefault(), l()));
        }, m),
        S.useEffect(() => {
          if (d)
            return (
              n &&
                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((qd = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = "none")),
                u.layersWithOutsidePointerEventsDisabled.add(d)),
              u.layers.add(d),
              Zd(),
              () => {
                n &&
                  u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (m.body.style.pointerEvents = qd);
              }
            );
        }, [d, m, n, u]),
        S.useEffect(
          () => () => {
            d &&
              (u.layers.delete(d),
              u.layersWithOutsidePointerEventsDisabled.delete(d),
              Zd());
          },
          [d, u],
        ),
        S.useEffect(() => {
          const T = () => c({});
          return (
            document.addEventListener(Za, T),
            () => document.removeEventListener(Za, T)
          );
        }, []),
        w.jsx(rt.div, {
          ...a,
          ref: x,
          style: {
            pointerEvents: v ? (k ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: be(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: be(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: be(
            e.onPointerDownCapture,
            b.onPointerDownCapture,
          ),
        })
      );
    });
  ic.displayName = qw;
  var ex = "DismissableLayerBranch",
    sm = S.forwardRef((e, t) => {
      const n = S.useContext(im),
        r = S.useRef(null),
        o = At(t, r);
      return (
        S.useEffect(() => {
          const i = r.current;
          if (i)
            return (
              n.branches.add(i),
              () => {
                n.branches.delete(i);
              }
            );
        }, [n.branches]),
        w.jsx(rt.div, { ...e, ref: o })
      );
    });
  sm.displayName = ex;
  function tx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = $n(e),
      r = S.useRef(!1),
      o = S.useRef(() => {});
    return (
      S.useEffect(() => {
        const i = (l) => {
            if (l.target && !r.current) {
              let a = function () {
                lm(Zw, n, u, { discrete: !0 });
              };
              const u = { originalEvent: l };
              l.pointerType === "touch"
                ? (t.removeEventListener("click", o.current),
                  (o.current = a),
                  t.addEventListener("click", o.current, { once: !0 }))
                : a();
            } else t.removeEventListener("click", o.current);
            r.current = !1;
          },
          s = window.setTimeout(() => {
            t.addEventListener("pointerdown", i);
          }, 0);
        return () => {
          (window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current));
        };
      }, [t, n]),
      { onPointerDownCapture: () => (r.current = !0) }
    );
  }
  function nx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = $n(e),
      r = S.useRef(!1);
    return (
      S.useEffect(() => {
        const o = (i) => {
          i.target &&
            !r.current &&
            lm(Jw, n, { originalEvent: i }, { discrete: !1 });
        };
        return (
          t.addEventListener("focusin", o),
          () => t.removeEventListener("focusin", o)
        );
      }, [t, n]),
      {
        onFocusCapture: () => (r.current = !0),
        onBlurCapture: () => (r.current = !1),
      }
    );
  }
  function Zd() {
    const e = new CustomEvent(Za);
    document.dispatchEvent(e);
  }
  function lm(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
      i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    (t && o.addEventListener(e, t, { once: !0 }),
      r ? om(o, i) : o.dispatchEvent(i));
  }
  var rx = ic,
    ox = sm,
    Bn =
      globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
    ix = "Portal",
    am = S.forwardRef((e, t) => {
      var l;
      const { container: n, ...r } = e,
        [o, i] = S.useState(!1);
      Bn(() => i(!0), []);
      const s =
        n ||
        (o &&
          ((l = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : l.body));
      return s ? Fh.createPortal(w.jsx(rt.div, { ...r, ref: t }), s) : null;
    });
  am.displayName = ix;
  function sx(e, t) {
    return S.useReducer((n, r) => t[n][r] ?? n, e);
  }
  var sc = (e) => {
    const { present: t, children: n } = e,
      r = lx(t),
      o =
        typeof n == "function"
          ? n({ present: r.isPresent })
          : S.Children.only(n),
      i = At(r.ref, ax(o));
    return typeof n == "function" || r.isPresent
      ? S.cloneElement(o, { ref: i })
      : null;
  };
  sc.displayName = "Presence";
  function lx(e) {
    const [t, n] = S.useState(),
      r = S.useRef(null),
      o = S.useRef(e),
      i = S.useRef("none"),
      s = e ? "mounted" : "unmounted",
      [l, a] = sx(s, {
        mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
        unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
        unmounted: { MOUNT: "mounted" },
      });
    return (
      S.useEffect(() => {
        const u = Wi(r.current);
        i.current = l === "mounted" ? u : "none";
      }, [l]),
      Bn(() => {
        const u = r.current,
          d = o.current;
        if (d !== e) {
          const m = i.current,
            c = Wi(u);
          (e
            ? a("MOUNT")
            : c === "none" || (u == null ? void 0 : u.display) === "none"
              ? a("UNMOUNT")
              : a(d && m !== c ? "ANIMATION_OUT" : "UNMOUNT"),
            (o.current = e));
        }
      }, [e, a]),
      Bn(() => {
        if (t) {
          let u;
          const d = t.ownerDocument.defaultView ?? window,
            f = (c) => {
              const g = Wi(r.current).includes(c.animationName);
              if (c.target === t && g && (a("ANIMATION_END"), !o.current)) {
                const y = t.style.animationFillMode;
                ((t.style.animationFillMode = "forwards"),
                  (u = d.setTimeout(() => {
                    t.style.animationFillMode === "forwards" &&
                      (t.style.animationFillMode = y);
                  })));
              }
            },
            m = (c) => {
              c.target === t && (i.current = Wi(r.current));
            };
          return (
            t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
              (d.clearTimeout(u),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f));
            }
          );
        } else a("ANIMATION_END");
      }, [t, a]),
      {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: S.useCallback((u) => {
          ((r.current = u ? getComputedStyle(u) : null), n(u));
        }, []),
      }
    );
  }
  function Wi(e) {
    return (e == null ? void 0 : e.animationName) || "none";
  }
  function ax(e) {
    var r, o;
    let t =
        (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : o.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  var ux = Lf[" useInsertionEffect ".trim().toString()] || Bn;
  function cx({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, i, s] = dx({ defaultProp: t, onChange: n }),
      l = e !== void 0,
      a = l ? e : o;
    {
      const d = S.useRef(e !== void 0);
      S.useEffect(() => {
        const f = d.current;
        (f !== l &&
          console.warn(
            `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
          ),
          (d.current = l));
      }, [l, r]);
    }
    const u = S.useCallback(
      (d) => {
        var f;
        if (l) {
          const m = fx(d) ? d(e) : d;
          m !== e && ((f = s.current) == null || f.call(s, m));
        } else i(d);
      },
      [l, e, i, s],
    );
    return [a, u];
  }
  function dx({ defaultProp: e, onChange: t }) {
    const [n, r] = S.useState(e),
      o = S.useRef(n),
      i = S.useRef(t);
    return (
      ux(() => {
        i.current = t;
      }, [t]),
      S.useEffect(() => {
        var s;
        o.current !== n &&
          ((s = i.current) == null || s.call(i, n), (o.current = n));
      }, [n, o]),
      [n, r, i]
    );
  }
  function fx(e) {
    return typeof e == "function";
  }
  var px = Object.freeze({
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
    }),
    hx = "VisuallyHidden",
    al = S.forwardRef((e, t) =>
      w.jsx(rt.span, { ...e, ref: t, style: { ...px, ...e.style } }),
    );
  al.displayName = hx;
  var mx = al,
    lc = "ToastProvider",
    [ac, gx, vx] = Gw("Toast"),
    [um, NE] = ll("Toast", [vx]),
    [yx, ul] = um(lc),
    cm = (e) => {
      const {
          __scopeToast: t,
          label: n = "Notification",
          duration: r = 5e3,
          swipeDirection: o = "right",
          swipeThreshold: i = 50,
          children: s,
        } = e,
        [l, a] = S.useState(null),
        [u, d] = S.useState(0),
        f = S.useRef(!1),
        m = S.useRef(!1);
      return (
        n.trim() ||
          console.error(
            `Invalid prop \`label\` supplied to \`${lc}\`. Expected non-empty \`string\`.`,
          ),
        w.jsx(ac.Provider, {
          scope: t,
          children: w.jsx(yx, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: S.useCallback(() => d((c) => c + 1), []),
            onToastRemove: S.useCallback(() => d((c) => c - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: m,
            children: s,
          }),
        })
      );
    };
  cm.displayName = lc;
  var dm = "ToastViewport",
    wx = ["F8"],
    Ja = "toast.viewportPause",
    eu = "toast.viewportResume",
    fm = S.forwardRef((e, t) => {
      const {
          __scopeToast: n,
          hotkey: r = wx,
          label: o = "Notifications ({hotkey})",
          ...i
        } = e,
        s = ul(dm, n),
        l = gx(n),
        a = S.useRef(null),
        u = S.useRef(null),
        d = S.useRef(null),
        f = S.useRef(null),
        m = At(t, f, s.onViewportChange),
        c = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        x = s.toastCount > 0;
      (S.useEffect(() => {
        const y = (h) => {
          var v;
          r.length !== 0 &&
            r.every((k) => h[k] || h.code === k) &&
            ((v = f.current) == null || v.focus());
        };
        return (
          document.addEventListener("keydown", y),
          () => document.removeEventListener("keydown", y)
        );
      }, [r]),
        S.useEffect(() => {
          const y = a.current,
            h = f.current;
          if (x && y && h) {
            const p = () => {
                if (!s.isClosePausedRef.current) {
                  const P = new CustomEvent(Ja);
                  (h.dispatchEvent(P), (s.isClosePausedRef.current = !0));
                }
              },
              v = () => {
                if (s.isClosePausedRef.current) {
                  const P = new CustomEvent(eu);
                  (h.dispatchEvent(P), (s.isClosePausedRef.current = !1));
                }
              },
              k = (P) => {
                !y.contains(P.relatedTarget) && v();
              },
              b = () => {
                y.contains(document.activeElement) || v();
              };
            return (
              y.addEventListener("focusin", p),
              y.addEventListener("focusout", k),
              y.addEventListener("pointermove", p),
              y.addEventListener("pointerleave", b),
              window.addEventListener("blur", p),
              window.addEventListener("focus", v),
              () => {
                (y.removeEventListener("focusin", p),
                  y.removeEventListener("focusout", k),
                  y.removeEventListener("pointermove", p),
                  y.removeEventListener("pointerleave", b),
                  window.removeEventListener("blur", p),
                  window.removeEventListener("focus", v));
              }
            );
          }
        }, [x, s.isClosePausedRef]));
      const g = S.useCallback(
        ({ tabbingDirection: y }) => {
          const p = l().map((v) => {
            const k = v.ref.current,
              b = [k, ...Ox(k)];
            return y === "forwards" ? b : b.reverse();
          });
          return (y === "forwards" ? p.reverse() : p).flat();
        },
        [l],
      );
      return (
        S.useEffect(() => {
          const y = f.current;
          if (y) {
            const h = (p) => {
              var b, P, T;
              const v = p.altKey || p.ctrlKey || p.metaKey;
              if (p.key === "Tab" && !v) {
                const O = document.activeElement,
                  F = p.shiftKey;
                if (p.target === y && F) {
                  (b = u.current) == null || b.focus();
                  return;
                }
                const B = g({ tabbingDirection: F ? "backwards" : "forwards" }),
                  Z = B.findIndex(($) => $ === O);
                Yl(B.slice(Z + 1))
                  ? p.preventDefault()
                  : F
                    ? (P = u.current) == null || P.focus()
                    : (T = d.current) == null || T.focus();
              }
            };
            return (
              y.addEventListener("keydown", h),
              () => y.removeEventListener("keydown", h)
            );
          }
        }, [l, g]),
        w.jsxs(ox, {
          ref: a,
          role: "region",
          "aria-label": o.replace("{hotkey}", c),
          tabIndex: -1,
          style: { pointerEvents: x ? void 0 : "none" },
          children: [
            x &&
              w.jsx(tu, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                  const y = g({ tabbingDirection: "forwards" });
                  Yl(y);
                },
              }),
            w.jsx(ac.Slot, {
              scope: n,
              children: w.jsx(rt.ol, { tabIndex: -1, ...i, ref: m }),
            }),
            x &&
              w.jsx(tu, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                  const y = g({ tabbingDirection: "backwards" });
                  Yl(y);
                },
              }),
          ],
        })
      );
    });
  fm.displayName = dm;
  var pm = "ToastFocusProxy",
    tu = S.forwardRef((e, t) => {
      const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
        i = ul(pm, n);
      return w.jsx(al, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (s) => {
          var u;
          const l = s.relatedTarget;
          !((u = i.viewport) != null && u.contains(l)) && r();
        },
      });
    });
  tu.displayName = pm;
  var vi = "Toast",
    xx = "toast.swipeStart",
    Sx = "toast.swipeMove",
    Ex = "toast.swipeCancel",
    Cx = "toast.swipeEnd",
    hm = S.forwardRef((e, t) => {
      const {
          forceMount: n,
          open: r,
          defaultOpen: o,
          onOpenChange: i,
          ...s
        } = e,
        [l, a] = cx({ prop: r, defaultProp: o ?? !0, onChange: i, caller: vi });
      return w.jsx(sc, {
        present: n || l,
        children: w.jsx(Px, {
          open: l,
          ...s,
          ref: t,
          onClose: () => a(!1),
          onPause: $n(e.onPause),
          onResume: $n(e.onResume),
          onSwipeStart: be(e.onSwipeStart, (u) => {
            u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: be(e.onSwipeMove, (u) => {
            const { x: d, y: f } = u.detail.delta;
            (u.currentTarget.setAttribute("data-swipe", "move"),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${d}px`,
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${f}px`,
              ));
          }),
          onSwipeCancel: be(e.onSwipeCancel, (u) => {
            (u.currentTarget.setAttribute("data-swipe", "cancel"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-end-y",
              ));
          }),
          onSwipeEnd: be(e.onSwipeEnd, (u) => {
            const { x: d, y: f } = u.detail.delta;
            (u.currentTarget.setAttribute("data-swipe", "end"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${d}px`,
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${f}px`,
              ),
              a(!1));
          }),
        }),
      });
    });
  hm.displayName = vi;
  var [kx, bx] = um(vi, { onClose() {} }),
    Px = S.forwardRef((e, t) => {
      const {
          __scopeToast: n,
          type: r = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: l,
          onPause: a,
          onResume: u,
          onSwipeStart: d,
          onSwipeMove: f,
          onSwipeCancel: m,
          onSwipeEnd: c,
          ...x
        } = e,
        g = ul(vi, n),
        [y, h] = S.useState(null),
        p = At(t, ($) => h($)),
        v = S.useRef(null),
        k = S.useRef(null),
        b = o || g.duration,
        P = S.useRef(0),
        T = S.useRef(b),
        O = S.useRef(0),
        { onToastAdd: F, onToastRemove: I } = g,
        H = $n(() => {
          var J;
          ((y == null ? void 0 : y.contains(document.activeElement)) &&
            ((J = g.viewport) == null || J.focus()),
            s());
        }),
        B = S.useCallback(
          ($) => {
            !$ ||
              $ === 1 / 0 ||
              (window.clearTimeout(O.current),
              (P.current = new Date().getTime()),
              (O.current = window.setTimeout(H, $)));
          },
          [H],
        );
      (S.useEffect(() => {
        const $ = g.viewport;
        if ($) {
          const J = () => {
              (B(T.current), u == null || u());
            },
            Q = () => {
              const K = new Date().getTime() - P.current;
              ((T.current = T.current - K),
                window.clearTimeout(O.current),
                a == null || a());
            };
          return (
            $.addEventListener(Ja, Q),
            $.addEventListener(eu, J),
            () => {
              ($.removeEventListener(Ja, Q), $.removeEventListener(eu, J));
            }
          );
        }
      }, [g.viewport, b, a, u, B]),
        S.useEffect(() => {
          i && !g.isClosePausedRef.current && B(b);
        }, [i, b, g.isClosePausedRef, B]),
        S.useEffect(() => (F(), () => I()), [F, I]));
      const Z = S.useMemo(() => (y ? Sm(y) : null), [y]);
      return g.viewport
        ? w.jsxs(w.Fragment, {
            children: [
              Z &&
                w.jsx(Tx, {
                  __scopeToast: n,
                  role: "status",
                  "aria-live": r === "foreground" ? "assertive" : "polite",
                  "aria-atomic": !0,
                  children: Z,
                }),
              w.jsx(kx, {
                scope: n,
                onClose: H,
                children: gi.createPortal(
                  w.jsx(ac.ItemSlot, {
                    scope: n,
                    children: w.jsx(rx, {
                      asChild: !0,
                      onEscapeKeyDown: be(l, () => {
                        (g.isFocusedToastEscapeKeyDownRef.current || H(),
                          (g.isFocusedToastEscapeKeyDownRef.current = !1));
                      }),
                      children: w.jsx(rt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...x,
                        ref: p,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...e.style,
                        },
                        onKeyDown: be(e.onKeyDown, ($) => {
                          $.key === "Escape" &&
                            (l == null || l($.nativeEvent),
                            $.nativeEvent.defaultPrevented ||
                              ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                              H()));
                        }),
                        onPointerDown: be(e.onPointerDown, ($) => {
                          $.button === 0 &&
                            (v.current = { x: $.clientX, y: $.clientY });
                        }),
                        onPointerMove: be(e.onPointerMove, ($) => {
                          if (!v.current) return;
                          const J = $.clientX - v.current.x,
                            Q = $.clientY - v.current.y,
                            K = !!k.current,
                            R = ["left", "right"].includes(g.swipeDirection),
                            M = ["left", "up"].includes(g.swipeDirection)
                              ? Math.min
                              : Math.max,
                            C = R ? M(0, J) : 0,
                            E = R ? 0 : M(0, Q),
                            j = $.pointerType === "touch" ? 10 : 2,
                            L = { x: C, y: E },
                            z = { originalEvent: $, delta: L };
                          K
                            ? ((k.current = L), Hi(Sx, f, z, { discrete: !1 }))
                            : Jd(L, g.swipeDirection, j)
                              ? ((k.current = L),
                                Hi(xx, d, z, { discrete: !1 }),
                                $.target.setPointerCapture($.pointerId))
                              : (Math.abs(J) > j || Math.abs(Q) > j) &&
                                (v.current = null);
                        }),
                        onPointerUp: be(e.onPointerUp, ($) => {
                          const J = k.current,
                            Q = $.target;
                          if (
                            (Q.hasPointerCapture($.pointerId) &&
                              Q.releasePointerCapture($.pointerId),
                            (k.current = null),
                            (v.current = null),
                            J)
                          ) {
                            const K = $.currentTarget,
                              R = { originalEvent: $, delta: J };
                            (Jd(J, g.swipeDirection, g.swipeThreshold)
                              ? Hi(Cx, c, R, { discrete: !0 })
                              : Hi(Ex, m, R, { discrete: !0 }),
                              K.addEventListener(
                                "click",
                                (M) => M.preventDefault(),
                                { once: !0 },
                              ));
                          }
                        }),
                      }),
                    }),
                  }),
                  g.viewport,
                ),
              }),
            ],
          })
        : null;
    }),
    Tx = (e) => {
      const { __scopeToast: t, children: n, ...r } = e,
        o = ul(vi, t),
        [i, s] = S.useState(!1),
        [l, a] = S.useState(!1);
      return (
        Mx(() => s(!0)),
        S.useEffect(() => {
          const u = window.setTimeout(() => a(!0), 1e3);
          return () => window.clearTimeout(u);
        }, []),
        l
          ? null
          : w.jsx(am, {
              asChild: !0,
              children: w.jsx(al, {
                ...r,
                children:
                  i && w.jsxs(w.Fragment, { children: [o.label, " ", n] }),
              }),
            })
      );
    },
    Nx = "ToastTitle",
    mm = S.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e;
      return w.jsx(rt.div, { ...r, ref: t });
    });
  mm.displayName = Nx;
  var Rx = "ToastDescription",
    gm = S.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e;
      return w.jsx(rt.div, { ...r, ref: t });
    });
  gm.displayName = Rx;
  var vm = "ToastAction",
    ym = S.forwardRef((e, t) => {
      const { altText: n, ...r } = e;
      return n.trim()
        ? w.jsx(xm, {
            altText: n,
            asChild: !0,
            children: w.jsx(uc, { ...r, ref: t }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${vm}\`. Expected non-empty \`string\`.`,
          ),
          null);
    });
  ym.displayName = vm;
  var wm = "ToastClose",
    uc = S.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e,
        o = bx(wm, n);
      return w.jsx(xm, {
        asChild: !0,
        children: w.jsx(rt.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: be(e.onClick, o.onClose),
        }),
      });
    });
  uc.displayName = wm;
  var xm = S.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return w.jsx(rt.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t,
    });
  });
  function Sm(e) {
    const t = [];
    return (
      Array.from(e.childNodes).forEach((r) => {
        if (
          (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
          jx(r))
        ) {
          const o = r.ariaHidden || r.hidden || r.style.display === "none",
            i = r.dataset.radixToastAnnounceExclude === "";
          if (!o)
            if (i) {
              const s = r.dataset.radixToastAnnounceAlt;
              s && t.push(s);
            } else t.push(...Sm(r));
        }
      }),
      t
    );
  }
  function Hi(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
      i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    (t && o.addEventListener(e, t, { once: !0 }),
      r ? om(o, i) : o.dispatchEvent(i));
  }
  var Jd = (e, t, n = 0) => {
    const r = Math.abs(e.x),
      o = Math.abs(e.y),
      i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
  };
  function Mx(e = () => {}) {
    const t = $n(e);
    Bn(() => {
      let n = 0,
        r = 0;
      return (
        (n = window.requestAnimationFrame(
          () => (r = window.requestAnimationFrame(t)),
        )),
        () => {
          (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
        }
      );
    }, [t]);
  }
  function jx(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  function Ox(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (r) => {
          const o = r.tagName === "INPUT" && r.type === "hidden";
          return r.disabled || r.hidden || o
            ? NodeFilter.FILTER_SKIP
            : r.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function Yl(e) {
    const t = document.activeElement;
    return e.some((n) =>
      n === t ? !0 : (n.focus(), document.activeElement !== t),
    );
  }
  var _x = cm,
    Em = fm,
    Cm = hm,
    km = mm,
    bm = gm,
    Pm = ym,
    Tm = uc;
  function Nm(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = Nm(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function Rm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = Nm(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const ef = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    tf = Rm,
    Mm = (e, t) => (n) => {
      var r;
      if ((t == null ? void 0 : t.variants) == null)
        return tf(
          e,
          n == null ? void 0 : n.class,
          n == null ? void 0 : n.className,
        );
      const { variants: o, defaultVariants: i } = t,
        s = Object.keys(o).map((u) => {
          const d = n == null ? void 0 : n[u],
            f = i == null ? void 0 : i[u];
          if (d === null) return null;
          const m = ef(d) || ef(f);
          return o[u][m];
        }),
        l =
          n &&
          Object.entries(n).reduce((u, d) => {
            let [f, m] = d;
            return (m === void 0 || (u[f] = m), u);
          }, {}),
        a =
          t == null || (r = t.compoundVariants) === null || r === void 0
            ? void 0
            : r.reduce((u, d) => {
                let { class: f, className: m, ...c } = d;
                return Object.entries(c).every((x) => {
                  let [g, y] = x;
                  return Array.isArray(y)
                    ? y.includes({ ...i, ...l }[g])
                    : { ...i, ...l }[g] === y;
                })
                  ? [...u, f, m]
                  : u;
              }, []);
      return tf(
        e,
        s,
        a,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Ax = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    jm = (...e) =>
      e
        .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
        .join(" ")
        .trim();
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var Lx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Ix = S.forwardRef(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: o = "",
        children: i,
        iconNode: s,
        ...l
      },
      a,
    ) =>
      S.createElement(
        "svg",
        {
          ref: a,
          ...Lx,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: jm("lucide", o),
          ...l,
        },
        [
          ...s.map(([u, d]) => S.createElement(u, d)),
          ...(Array.isArray(i) ? i : [i]),
        ],
      ),
  );
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const cl = (e, t) => {
    const n = S.forwardRef(({ className: r, ...o }, i) =>
      S.createElement(Ix, {
        ref: i,
        iconNode: t,
        className: jm(`lucide-${Ax(e)}`, r),
        ...o,
      }),
    );
    return ((n.displayName = `${e}`), n);
  };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Dx = cl("Navigation", [
    ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Fx = cl("Volume2", [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const zx = cl("VolumeX", [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
    ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const $x = cl("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    cc = "-",
    Bx = (e) => {
      const t = Vx(e),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
      return {
        getClassGroupId: (s) => {
          const l = s.split(cc);
          return (
            l[0] === "" && l.length !== 1 && l.shift(),
            Om(l, t) || Ux(s)
          );
        },
        getConflictingClassGroupIds: (s, l) => {
          const a = n[s] || [];
          return l && r[s] ? [...a, ...r[s]] : a;
        },
      };
    },
    Om = (e, t) => {
      var s;
      if (e.length === 0) return t.classGroupId;
      const n = e[0],
        r = t.nextPart.get(n),
        o = r ? Om(e.slice(1), r) : void 0;
      if (o) return o;
      if (t.validators.length === 0) return;
      const i = e.join(cc);
      return (s = t.validators.find(({ validator: l }) => l(i))) == null
        ? void 0
        : s.classGroupId;
    },
    nf = /^\[(.+)\]$/,
    Ux = (e) => {
      if (nf.test(e)) {
        const t = nf.exec(e)[1],
          n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    Vx = (e) => {
      const { theme: t, prefix: n } = e,
        r = { nextPart: new Map(), validators: [] };
      return (
        Hx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
          nu(s, r, i, t);
        }),
        r
      );
    },
    nu = (e, t, n, r) => {
      e.forEach((o) => {
        if (typeof o == "string") {
          const i = o === "" ? t : rf(t, o);
          i.classGroupId = n;
          return;
        }
        if (typeof o == "function") {
          if (Wx(o)) {
            nu(o(r), t, n, r);
            return;
          }
          t.validators.push({ validator: o, classGroupId: n });
          return;
        }
        Object.entries(o).forEach(([i, s]) => {
          nu(s, rf(t, i), n, r);
        });
      });
    },
    rf = (e, t) => {
      let n = e;
      return (
        t.split(cc).forEach((r) => {
          (n.nextPart.has(r) ||
            n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(r)));
        }),
        n
      );
    },
    Wx = (e) => e.isThemeGetter,
    Hx = (e, t) =>
      t
        ? e.map(([n, r]) => {
            const o = r.map((i) =>
              typeof i == "string"
                ? t + i
                : typeof i == "object"
                  ? Object.fromEntries(
                      Object.entries(i).map(([s, l]) => [t + s, l]),
                    )
                  : i,
            );
            return [n, o];
          })
        : e,
    Qx = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let t = 0,
        n = new Map(),
        r = new Map();
      const o = (i, s) => {
        (n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
      };
      return {
        get(i) {
          let s = n.get(i);
          if (s !== void 0) return s;
          if ((s = r.get(i)) !== void 0) return (o(i, s), s);
        },
        set(i, s) {
          n.has(i) ? n.set(i, s) : o(i, s);
        },
      };
    },
    _m = "!",
    Kx = (e) => {
      const { separator: t, experimentalParseClassName: n } = e,
        r = t.length === 1,
        o = t[0],
        i = t.length,
        s = (l) => {
          const a = [];
          let u = 0,
            d = 0,
            f;
          for (let y = 0; y < l.length; y++) {
            let h = l[y];
            if (u === 0) {
              if (h === o && (r || l.slice(y, y + i) === t)) {
                (a.push(l.slice(d, y)), (d = y + i));
                continue;
              }
              if (h === "/") {
                f = y;
                continue;
              }
            }
            h === "[" ? u++ : h === "]" && u--;
          }
          const m = a.length === 0 ? l : l.substring(d),
            c = m.startsWith(_m),
            x = c ? m.substring(1) : m,
            g = f && f > d ? f - d : void 0;
          return {
            modifiers: a,
            hasImportantModifier: c,
            baseClassName: x,
            maybePostfixModifierPosition: g,
          };
        };
      return n ? (l) => n({ className: l, parseClassName: s }) : s;
    },
    Gx = (e) => {
      if (e.length <= 1) return e;
      const t = [];
      let n = [];
      return (
        e.forEach((r) => {
          r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
        }),
        t.push(...n.sort()),
        t
      );
    },
    Yx = (e) => ({ cache: Qx(e.cacheSize), parseClassName: Kx(e), ...Bx(e) }),
    Xx = /\s+/,
    qx = (e, t) => {
      const {
          parseClassName: n,
          getClassGroupId: r,
          getConflictingClassGroupIds: o,
        } = t,
        i = [],
        s = e.trim().split(Xx);
      let l = "";
      for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a],
          {
            modifiers: d,
            hasImportantModifier: f,
            baseClassName: m,
            maybePostfixModifierPosition: c,
          } = n(u);
        let x = !!c,
          g = r(x ? m.substring(0, c) : m);
        if (!g) {
          if (!x) {
            l = u + (l.length > 0 ? " " + l : l);
            continue;
          }
          if (((g = r(m)), !g)) {
            l = u + (l.length > 0 ? " " + l : l);
            continue;
          }
          x = !1;
        }
        const y = Gx(d).join(":"),
          h = f ? y + _m : y,
          p = h + g;
        if (i.includes(p)) continue;
        i.push(p);
        const v = o(g, x);
        for (let k = 0; k < v.length; ++k) {
          const b = v[k];
          i.push(h + b);
        }
        l = u + (l.length > 0 ? " " + l : l);
      }
      return l;
    };
  function Zx() {
    let e = 0,
      t,
      n,
      r = "";
    for (; e < arguments.length; )
      (t = arguments[e++]) && (n = Am(t)) && (r && (r += " "), (r += n));
    return r;
  }
  const Am = (e) => {
    if (typeof e == "string") return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Am(e[r])) && (n && (n += " "), (n += t));
    return n;
  };
  function Jx(e, ...t) {
    let n,
      r,
      o,
      i = s;
    function s(a) {
      const u = t.reduce((d, f) => f(d), e());
      return ((n = Yx(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a));
    }
    function l(a) {
      const u = r(a);
      if (u) return u;
      const d = qx(a, n);
      return (o(a, d), d);
    }
    return function () {
      return i(Zx.apply(null, arguments));
    };
  }
  const fe = (e) => {
      const t = (n) => n[e] || [];
      return ((t.isThemeGetter = !0), t);
    },
    Lm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    e1 = /^\d+\/\d+$/,
    t1 = new Set(["px", "full", "screen"]),
    n1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    r1 =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    o1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    i1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    s1 =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Gt = (e) => Ur(e) || t1.has(e) || e1.test(e),
    mn = (e) => co(e, "length", h1),
    Ur = (e) => !!e && !Number.isNaN(Number(e)),
    Xl = (e) => co(e, "number", Ur),
    ko = (e) => !!e && Number.isInteger(Number(e)),
    l1 = (e) => e.endsWith("%") && Ur(e.slice(0, -1)),
    q = (e) => Lm.test(e),
    gn = (e) => n1.test(e),
    a1 = new Set(["length", "size", "percentage"]),
    u1 = (e) => co(e, a1, Im),
    c1 = (e) => co(e, "position", Im),
    d1 = new Set(["image", "url"]),
    f1 = (e) => co(e, d1, g1),
    p1 = (e) => co(e, "", m1),
    bo = () => !0,
    co = (e, t, n) => {
      const r = Lm.exec(e);
      return r
        ? r[1]
          ? typeof t == "string"
            ? r[1] === t
            : t.has(r[1])
          : n(r[2])
        : !1;
    },
    h1 = (e) => r1.test(e) && !o1.test(e),
    Im = () => !1,
    m1 = (e) => i1.test(e),
    g1 = (e) => s1.test(e),
    v1 = () => {
      const e = fe("colors"),
        t = fe("spacing"),
        n = fe("blur"),
        r = fe("brightness"),
        o = fe("borderColor"),
        i = fe("borderRadius"),
        s = fe("borderSpacing"),
        l = fe("borderWidth"),
        a = fe("contrast"),
        u = fe("grayscale"),
        d = fe("hueRotate"),
        f = fe("invert"),
        m = fe("gap"),
        c = fe("gradientColorStops"),
        x = fe("gradientColorStopPositions"),
        g = fe("inset"),
        y = fe("margin"),
        h = fe("opacity"),
        p = fe("padding"),
        v = fe("saturate"),
        k = fe("scale"),
        b = fe("sepia"),
        P = fe("skew"),
        T = fe("space"),
        O = fe("translate"),
        F = () => ["auto", "contain", "none"],
        I = () => ["auto", "hidden", "clip", "visible", "scroll"],
        H = () => ["auto", q, t],
        B = () => [q, t],
        Z = () => ["", Gt, mn],
        $ = () => ["auto", Ur, q],
        J = () => [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ],
        Q = () => ["solid", "dashed", "dotted", "double", "none"],
        K = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        R = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ],
        M = () => ["", "0", q],
        C = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        E = () => [Ur, q];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [bo],
          spacing: [Gt, mn],
          blur: ["none", "", gn, q],
          brightness: E(),
          borderColor: [e],
          borderRadius: ["none", "", "full", gn, q],
          borderSpacing: B(),
          borderWidth: Z(),
          contrast: E(),
          grayscale: M(),
          hueRotate: E(),
          invert: M(),
          gap: B(),
          gradientColorStops: [e],
          gradientColorStopPositions: [l1, mn],
          inset: H(),
          margin: H(),
          opacity: E(),
          padding: B(),
          saturate: E(),
          scale: E(),
          sepia: M(),
          skew: E(),
          space: B(),
          translate: B(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", q] }],
          container: ["container"],
          columns: [{ columns: [gn] }],
          "break-after": [{ "break-after": C() }],
          "break-before": [{ "break-before": C() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: [...J(), q] }],
          overflow: [{ overflow: I() }],
          "overflow-x": [{ "overflow-x": I() }],
          "overflow-y": [{ "overflow-y": I() }],
          overscroll: [{ overscroll: F() }],
          "overscroll-x": [{ "overscroll-x": F() }],
          "overscroll-y": [{ "overscroll-y": F() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [g] }],
          "inset-x": [{ "inset-x": [g] }],
          "inset-y": [{ "inset-y": [g] }],
          start: [{ start: [g] }],
          end: [{ end: [g] }],
          top: [{ top: [g] }],
          right: [{ right: [g] }],
          bottom: [{ bottom: [g] }],
          left: [{ left: [g] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", ko, q] }],
          basis: [{ basis: H() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", q] }],
          grow: [{ grow: M() }],
          shrink: [{ shrink: M() }],
          order: [{ order: ["first", "last", "none", ko, q] }],
          "grid-cols": [{ "grid-cols": [bo] }],
          "col-start-end": [{ col: ["auto", { span: ["full", ko, q] }, q] }],
          "col-start": [{ "col-start": $() }],
          "col-end": [{ "col-end": $() }],
          "grid-rows": [{ "grid-rows": [bo] }],
          "row-start-end": [{ row: ["auto", { span: [ko, q] }, q] }],
          "row-start": [{ "row-start": $() }],
          "row-end": [{ "row-end": $() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", q] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", q] }],
          gap: [{ gap: [m] }],
          "gap-x": [{ "gap-x": [m] }],
          "gap-y": [{ "gap-y": [m] }],
          "justify-content": [{ justify: ["normal", ...R()] }],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [{ content: ["normal", ...R(), "baseline"] }],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [{ "place-content": [...R(), "baseline"] }],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [p] }],
          px: [{ px: [p] }],
          py: [{ py: [p] }],
          ps: [{ ps: [p] }],
          pe: [{ pe: [p] }],
          pt: [{ pt: [p] }],
          pr: [{ pr: [p] }],
          pb: [{ pb: [p] }],
          pl: [{ pl: [p] }],
          m: [{ m: [y] }],
          mx: [{ mx: [y] }],
          my: [{ my: [y] }],
          ms: [{ ms: [y] }],
          me: [{ me: [y] }],
          mt: [{ mt: [y] }],
          mr: [{ mr: [y] }],
          mb: [{ mb: [y] }],
          ml: [{ ml: [y] }],
          "space-x": [{ "space-x": [T] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [T] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t] }],
          "min-w": [{ "min-w": [q, t, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                q,
                t,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [gn] },
                gn,
              ],
            },
          ],
          h: [{ h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [q, t, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", gn, mn] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                Xl,
              ],
            },
          ],
          "font-family": [{ font: [bo] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                q,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", Ur, Xl] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                Gt,
                q,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", q] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", q] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [h] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [h] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...Q(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", Gt, mn] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", Gt, q] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: B() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                q,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", q] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [h] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [...J(), c1] }],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", u1] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                f1,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [x] }],
          "gradient-via-pos": [{ via: [x] }],
          "gradient-to-pos": [{ to: [x] }],
          "gradient-from": [{ from: [c] }],
          "gradient-via": [{ via: [c] }],
          "gradient-to": [{ to: [c] }],
          rounded: [{ rounded: [i] }],
          "rounded-s": [{ "rounded-s": [i] }],
          "rounded-e": [{ "rounded-e": [i] }],
          "rounded-t": [{ "rounded-t": [i] }],
          "rounded-r": [{ "rounded-r": [i] }],
          "rounded-b": [{ "rounded-b": [i] }],
          "rounded-l": [{ "rounded-l": [i] }],
          "rounded-ss": [{ "rounded-ss": [i] }],
          "rounded-se": [{ "rounded-se": [i] }],
          "rounded-ee": [{ "rounded-ee": [i] }],
          "rounded-es": [{ "rounded-es": [i] }],
          "rounded-tl": [{ "rounded-tl": [i] }],
          "rounded-tr": [{ "rounded-tr": [i] }],
          "rounded-br": [{ "rounded-br": [i] }],
          "rounded-bl": [{ "rounded-bl": [i] }],
          "border-w": [{ border: [l] }],
          "border-w-x": [{ "border-x": [l] }],
          "border-w-y": [{ "border-y": [l] }],
          "border-w-s": [{ "border-s": [l] }],
          "border-w-e": [{ "border-e": [l] }],
          "border-w-t": [{ "border-t": [l] }],
          "border-w-r": [{ "border-r": [l] }],
          "border-w-b": [{ "border-b": [l] }],
          "border-w-l": [{ "border-l": [l] }],
          "border-opacity": [{ "border-opacity": [h] }],
          "border-style": [{ border: [...Q(), "hidden"] }],
          "divide-x": [{ "divide-x": [l] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [l] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [h] }],
          "divide-style": [{ divide: Q() }],
          "border-color": [{ border: [o] }],
          "border-color-x": [{ "border-x": [o] }],
          "border-color-y": [{ "border-y": [o] }],
          "border-color-s": [{ "border-s": [o] }],
          "border-color-e": [{ "border-e": [o] }],
          "border-color-t": [{ "border-t": [o] }],
          "border-color-r": [{ "border-r": [o] }],
          "border-color-b": [{ "border-b": [o] }],
          "border-color-l": [{ "border-l": [o] }],
          "divide-color": [{ divide: [o] }],
          "outline-style": [{ outline: ["", ...Q()] }],
          "outline-offset": [{ "outline-offset": [Gt, q] }],
          "outline-w": [{ outline: [Gt, mn] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: Z() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [h] }],
          "ring-offset-w": [{ "ring-offset": [Gt, mn] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", gn, p1] }],
          "shadow-color": [{ shadow: [bo] }],
          opacity: [{ opacity: [h] }],
          "mix-blend": [
            { "mix-blend": [...K(), "plus-lighter", "plus-darker"] },
          ],
          "bg-blend": [{ "bg-blend": K() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [r] }],
          contrast: [{ contrast: [a] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", gn, q] }],
          grayscale: [{ grayscale: [u] }],
          "hue-rotate": [{ "hue-rotate": [d] }],
          invert: [{ invert: [f] }],
          saturate: [{ saturate: [v] }],
          sepia: [{ sepia: [b] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [r] }],
          "backdrop-contrast": [{ "backdrop-contrast": [a] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
          "backdrop-invert": [{ "backdrop-invert": [f] }],
          "backdrop-opacity": [{ "backdrop-opacity": [h] }],
          "backdrop-saturate": [{ "backdrop-saturate": [v] }],
          "backdrop-sepia": [{ "backdrop-sepia": [b] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [s] }],
          "border-spacing-x": [{ "border-spacing-x": [s] }],
          "border-spacing-y": [{ "border-spacing-y": [s] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                q,
              ],
            },
          ],
          duration: [{ duration: E() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", q] }],
          delay: [{ delay: E() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", q] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [k] }],
          "scale-x": [{ "scale-x": [k] }],
          "scale-y": [{ "scale-y": [k] }],
          rotate: [{ rotate: [ko, q] }],
          "translate-x": [{ "translate-x": [O] }],
          "translate-y": [{ "translate-y": [O] }],
          "skew-x": [{ "skew-x": [P] }],
          "skew-y": [{ "skew-y": [P] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                q,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                q,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": B() }],
          "scroll-mx": [{ "scroll-mx": B() }],
          "scroll-my": [{ "scroll-my": B() }],
          "scroll-ms": [{ "scroll-ms": B() }],
          "scroll-me": [{ "scroll-me": B() }],
          "scroll-mt": [{ "scroll-mt": B() }],
          "scroll-mr": [{ "scroll-mr": B() }],
          "scroll-mb": [{ "scroll-mb": B() }],
          "scroll-ml": [{ "scroll-ml": B() }],
          "scroll-p": [{ "scroll-p": B() }],
          "scroll-px": [{ "scroll-px": B() }],
          "scroll-py": [{ "scroll-py": B() }],
          "scroll-ps": [{ "scroll-ps": B() }],
          "scroll-pe": [{ "scroll-pe": B() }],
          "scroll-pt": [{ "scroll-pt": B() }],
          "scroll-pr": [{ "scroll-pr": B() }],
          "scroll-pb": [{ "scroll-pb": B() }],
          "scroll-pl": [{ "scroll-pl": B() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", q] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [Gt, mn, Xl] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
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
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-s",
            "border-color-e",
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    },
    y1 = Jx(v1);
  function Yn(...e) {
    return y1(Rm(e));
  }
  const w1 = _x,
    Dm = S.forwardRef(({ className: e, ...t }, n) =>
      w.jsx(Em, {
        ref: n,
        className: Yn(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
          e,
        ),
        ...t,
      }),
    );
  Dm.displayName = Em.displayName;
  const x1 = Mm(
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
      {
        variants: {
          variant: {
            default: "border bg-background text-foreground",
            destructive:
              "destructive group border-destructive bg-destructive text-destructive-foreground",
          },
        },
        defaultVariants: { variant: "default" },
      },
    ),
    Fm = S.forwardRef(({ className: e, variant: t, ...n }, r) =>
      w.jsx(Cm, { ref: r, className: Yn(x1({ variant: t }), e), ...n }),
    );
  Fm.displayName = Cm.displayName;
  const S1 = S.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(Pm, {
      ref: n,
      className: Yn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
        e,
      ),
      ...t,
    }),
  );
  S1.displayName = Pm.displayName;
  const zm = S.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(Tm, {
      ref: n,
      className: Yn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e,
      ),
      "toast-close": "",
      ...t,
      children: w.jsx($x, { className: "h-4 w-4" }),
    }),
  );
  zm.displayName = Tm.displayName;
  const $m = S.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(km, { ref: n, className: Yn("text-sm font-semibold", e), ...t }),
  );
  $m.displayName = km.displayName;
  const Bm = S.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(bm, { ref: n, className: Yn("text-sm opacity-90", e), ...t }),
  );
  Bm.displayName = bm.displayName;
  function E1() {
    const { toasts: e } = $w();
    return w.jsxs(w1, {
      children: [
        e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
          return w.jsxs(
            Fm,
            {
              ...i,
              children: [
                w.jsxs("div", {
                  className: "grid gap-1",
                  children: [
                    n && w.jsx($m, { children: n }),
                    r && w.jsx(Bm, { children: r }),
                  ],
                }),
                o,
                w.jsx(zm, {}),
              ],
            },
            t,
          );
        }),
        w.jsx(Dm, {}),
      ],
    });
  }
  const C1 = ["top", "right", "bottom", "left"],
    Un = Math.min,
    st = Math.max,
    Is = Math.round,
    Qi = Math.floor,
    Vn = (e) => ({ x: e, y: e }),
    k1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
    b1 = { start: "end", end: "start" };
  function ru(e, t, n) {
    return st(e, Un(t, n));
  }
  function ln(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function an(e) {
    return e.split("-")[0];
  }
  function fo(e) {
    return e.split("-")[1];
  }
  function dc(e) {
    return e === "x" ? "y" : "x";
  }
  function fc(e) {
    return e === "y" ? "height" : "width";
  }
  function Wn(e) {
    return ["top", "bottom"].includes(an(e)) ? "y" : "x";
  }
  function pc(e) {
    return dc(Wn(e));
  }
  function P1(e, t, n) {
    n === void 0 && (n = !1);
    const r = fo(e),
      o = pc(e),
      i = fc(o);
    let s =
      o === "x"
        ? r === (n ? "end" : "start")
          ? "right"
          : "left"
        : r === "start"
          ? "bottom"
          : "top";
    return (t.reference[i] > t.floating[i] && (s = Ds(s)), [s, Ds(s)]);
  }
  function T1(e) {
    const t = Ds(e);
    return [ou(e), t, ou(t)];
  }
  function ou(e) {
    return e.replace(/start|end/g, (t) => b1[t]);
  }
  function N1(e, t, n) {
    const r = ["left", "right"],
      o = ["right", "left"],
      i = ["top", "bottom"],
      s = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? o : r) : t ? r : o;
      case "left":
      case "right":
        return t ? i : s;
      default:
        return [];
    }
  }
  function R1(e, t, n, r) {
    const o = fo(e);
    let i = N1(an(e), n === "start", r);
    return (
      o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(ou)))),
      i
    );
  }
  function Ds(e) {
    return e.replace(/left|right|bottom|top/g, (t) => k1[t]);
  }
  function M1(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function Um(e) {
    return typeof e != "number"
      ? M1(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function Fs(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
      width: r,
      height: o,
      top: n,
      left: t,
      right: t + r,
      bottom: n + o,
      x: t,
      y: n,
    };
  }
  function of(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = Wn(t),
      s = pc(t),
      l = fc(s),
      a = an(t),
      u = i === "y",
      d = r.x + r.width / 2 - o.width / 2,
      f = r.y + r.height / 2 - o.height / 2,
      m = r[l] / 2 - o[l] / 2;
    let c;
    switch (a) {
      case "top":
        c = { x: d, y: r.y - o.height };
        break;
      case "bottom":
        c = { x: d, y: r.y + r.height };
        break;
      case "right":
        c = { x: r.x + r.width, y: f };
        break;
      case "left":
        c = { x: r.x - o.width, y: f };
        break;
      default:
        c = { x: r.x, y: r.y };
    }
    switch (fo(t)) {
      case "start":
        c[s] -= m * (n && u ? -1 : 1);
        break;
      case "end":
        c[s] += m * (n && u ? -1 : 1);
        break;
    }
    return c;
  }
  const j1 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s,
      } = n,
      l = i.filter(Boolean),
      a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: d, y: f } = of(u, r, a),
      m = r,
      c = {},
      x = 0;
    for (let g = 0; g < l.length; g++) {
      const { name: y, fn: h } = l[g],
        {
          x: p,
          y: v,
          data: k,
          reset: b,
        } = await h({
          x: d,
          y: f,
          initialPlacement: r,
          placement: m,
          strategy: o,
          middlewareData: c,
          rects: u,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((d = p ?? d),
        (f = v ?? f),
        (c = { ...c, [y]: { ...c[y], ...k } }),
        b &&
          x <= 50 &&
          (x++,
          typeof b == "object" &&
            (b.placement && (m = b.placement),
            b.rects &&
              (u =
                b.rects === !0
                  ? await s.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : b.rects),
            ({ x: d, y: f } = of(u, m, a))),
          (g = -1)));
    }
    return { x: d, y: f, placement: m, strategy: o, middlewareData: c };
  };
  async function li(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
      {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: f = "floating",
        altBoundary: m = !1,
        padding: c = 0,
      } = ln(t, e),
      x = Um(c),
      y = l[m ? (f === "floating" ? "reference" : "floating") : f],
      h = Fs(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(y))) ==
              null || n
              ? y
              : y.contextElement ||
                (await (i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(l.floating))),
          boundary: u,
          rootBoundary: d,
          strategy: a,
        }),
      ),
      p =
        f === "floating"
          ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
          : s.reference,
      v = await (i.getOffsetParent == null
        ? void 0
        : i.getOffsetParent(l.floating)),
      k = (await (i.isElement == null ? void 0 : i.isElement(v)))
        ? (await (i.getScale == null ? void 0 : i.getScale(v))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      b = Fs(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: l,
              rect: p,
              offsetParent: v,
              strategy: a,
            })
          : p,
      );
    return {
      top: (h.top - b.top + x.top) / k.y,
      bottom: (b.bottom - h.bottom + x.bottom) / k.y,
      left: (h.left - b.left + x.left) / k.x,
      right: (b.right - h.right + x.right) / k.x,
    };
  }
  const O1 = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: i,
            platform: s,
            elements: l,
            middlewareData: a,
          } = t,
          { element: u, padding: d = 0 } = ln(e, t) || {};
        if (u == null) return {};
        const f = Um(d),
          m = { x: n, y: r },
          c = pc(o),
          x = fc(c),
          g = await s.getDimensions(u),
          y = c === "y",
          h = y ? "top" : "left",
          p = y ? "bottom" : "right",
          v = y ? "clientHeight" : "clientWidth",
          k = i.reference[x] + i.reference[c] - m[c] - i.floating[x],
          b = m[c] - i.reference[c],
          P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let T = P ? P[v] : 0;
        (!T || !(await (s.isElement == null ? void 0 : s.isElement(P)))) &&
          (T = l.floating[v] || i.floating[x]);
        const O = k / 2 - b / 2,
          F = T / 2 - g[x] / 2 - 1,
          I = Un(f[h], F),
          H = Un(f[p], F),
          B = I,
          Z = T - g[x] - H,
          $ = T / 2 - g[x] / 2 + O,
          J = ru(B, $, Z),
          Q =
            !a.arrow &&
            fo(o) != null &&
            $ !== J &&
            i.reference[x] / 2 - ($ < B ? I : H) - g[x] / 2 < 0,
          K = Q ? ($ < B ? $ - B : $ - Z) : 0;
        return {
          [c]: m[c] + K,
          data: {
            [c]: J,
            centerOffset: $ - J - K,
            ...(Q && { alignmentOffset: K }),
          },
          reset: Q,
        };
      },
    }),
    _1 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, r;
            const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: l,
                platform: a,
                elements: u,
              } = t,
              {
                mainAxis: d = !0,
                crossAxis: f = !0,
                fallbackPlacements: m,
                fallbackStrategy: c = "bestFit",
                fallbackAxisSideDirection: x = "none",
                flipAlignment: g = !0,
                ...y
              } = ln(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const h = an(o),
              p = Wn(l),
              v = an(l) === l,
              k = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
              b = m || (v || !g ? [Ds(l)] : T1(l)),
              P = x !== "none";
            !m && P && b.push(...R1(l, g, x, k));
            const T = [l, ...b],
              O = await li(t, y),
              F = [];
            let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if ((d && F.push(O[h]), f)) {
              const $ = P1(o, s, k);
              F.push(O[$[0]], O[$[1]]);
            }
            if (
              ((I = [...I, { placement: o, overflows: F }]),
              !F.every(($) => $ <= 0))
            ) {
              var H, B;
              const $ = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1,
                J = T[$];
              if (J)
                return {
                  data: { index: $, overflows: I },
                  reset: { placement: J },
                };
              let Q =
                (B = I.filter((K) => K.overflows[0] <= 0).sort(
                  (K, R) => K.overflows[1] - R.overflows[1],
                )[0]) == null
                  ? void 0
                  : B.placement;
              if (!Q)
                switch (c) {
                  case "bestFit": {
                    var Z;
                    const K =
                      (Z = I.filter((R) => {
                        if (P) {
                          const M = Wn(R.placement);
                          return M === p || M === "y";
                        }
                        return !0;
                      })
                        .map((R) => [
                          R.placement,
                          R.overflows
                            .filter((M) => M > 0)
                            .reduce((M, C) => M + C, 0),
                        ])
                        .sort((R, M) => R[1] - M[1])[0]) == null
                        ? void 0
                        : Z[0];
                    K && (Q = K);
                    break;
                  }
                  case "initialPlacement":
                    Q = l;
                    break;
                }
              if (o !== Q) return { reset: { placement: Q } };
            }
            return {};
          },
        }
      );
    };
  function sf(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function lf(e) {
    return C1.some((t) => e[t] >= 0);
  }
  const A1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = ln(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await li(t, { ...o, elementContext: "reference" }),
                s = sf(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: lf(s) },
              };
            }
            case "escaped": {
              const i = await li(t, { ...o, altBoundary: !0 }),
                s = sf(i, n.floating);
              return { data: { escapedOffsets: s, escaped: lf(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function L1(e, t) {
    const { placement: n, platform: r, elements: o } = e,
      i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
      s = an(n),
      l = fo(n),
      a = Wn(n) === "y",
      u = ["left", "top"].includes(s) ? -1 : 1,
      d = i && a ? -1 : 1,
      f = ln(t, e);
    let {
      mainAxis: m,
      crossAxis: c,
      alignmentAxis: x,
    } = typeof f == "number"
      ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: f.mainAxis || 0,
          crossAxis: f.crossAxis || 0,
          alignmentAxis: f.alignmentAxis,
        };
    return (
      l && typeof x == "number" && (c = l === "end" ? x * -1 : x),
      a ? { x: c * d, y: m * u } : { x: m * u, y: c * d }
    );
  }
  const I1 = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            const { x: o, y: i, placement: s, middlewareData: l } = t,
              a = await L1(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) &&
              (r = l.arrow) != null &&
              r.alignmentOffset
              ? {}
              : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
          },
        }
      );
    },
    D1 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o } = t,
              {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: l = {
                  fn: (y) => {
                    let { x: h, y: p } = y;
                    return { x: h, y: p };
                  },
                },
                ...a
              } = ln(e, t),
              u = { x: n, y: r },
              d = await li(t, a),
              f = Wn(an(o)),
              m = dc(f);
            let c = u[m],
              x = u[f];
            if (i) {
              const y = m === "y" ? "top" : "left",
                h = m === "y" ? "bottom" : "right",
                p = c + d[y],
                v = c - d[h];
              c = ru(p, c, v);
            }
            if (s) {
              const y = f === "y" ? "top" : "left",
                h = f === "y" ? "bottom" : "right",
                p = x + d[y],
                v = x - d[h];
              x = ru(p, x, v);
            }
            const g = l.fn({ ...t, [m]: c, [f]: x });
            return {
              ...g,
              data: { x: g.x - n, y: g.y - r, enabled: { [m]: i, [f]: s } },
            };
          },
        }
      );
    },
    F1 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
              { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = ln(e, t),
              d = { x: n, y: r },
              f = Wn(o),
              m = dc(f);
            let c = d[m],
              x = d[f];
            const g = ln(l, t),
              y =
                typeof g == "number"
                  ? { mainAxis: g, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...g };
            if (a) {
              const v = m === "y" ? "height" : "width",
                k = i.reference[m] - i.floating[v] + y.mainAxis,
                b = i.reference[m] + i.reference[v] - y.mainAxis;
              c < k ? (c = k) : c > b && (c = b);
            }
            if (u) {
              var h, p;
              const v = m === "y" ? "width" : "height",
                k = ["top", "left"].includes(an(o)),
                b =
                  i.reference[f] -
                  i.floating[v] +
                  ((k && ((h = s.offset) == null ? void 0 : h[f])) || 0) +
                  (k ? 0 : y.crossAxis),
                P =
                  i.reference[f] +
                  i.reference[v] +
                  (k ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
                  (k ? y.crossAxis : 0);
              x < b ? (x = b) : x > P && (x = P);
            }
            return { [m]: c, [f]: x };
          },
        }
      );
    },
    z1 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, r;
            const { placement: o, rects: i, platform: s, elements: l } = t,
              { apply: a = () => {}, ...u } = ln(e, t),
              d = await li(t, u),
              f = an(o),
              m = fo(o),
              c = Wn(o) === "y",
              { width: x, height: g } = i.floating;
            let y, h;
            f === "top" || f === "bottom"
              ? ((y = f),
                (h =
                  m ===
                  ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((h = f), (y = m === "end" ? "top" : "bottom"));
            const p = g - d.top - d.bottom,
              v = x - d.left - d.right,
              k = Un(g - d[y], p),
              b = Un(x - d[h], v),
              P = !t.middlewareData.shift;
            let T = k,
              O = b;
            if (
              ((n = t.middlewareData.shift) != null && n.enabled.x && (O = v),
              (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
              P && !m)
            ) {
              const I = st(d.left, 0),
                H = st(d.right, 0),
                B = st(d.top, 0),
                Z = st(d.bottom, 0);
              c
                ? (O =
                    x - 2 * (I !== 0 || H !== 0 ? I + H : st(d.left, d.right)))
                : (T =
                    g - 2 * (B !== 0 || Z !== 0 ? B + Z : st(d.top, d.bottom)));
            }
            await a({ ...t, availableWidth: O, availableHeight: T });
            const F = await s.getDimensions(l.floating);
            return x !== F.width || g !== F.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    };
  function dl() {
    return typeof window < "u";
  }
  function po(e) {
    return Vm(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function ut(e) {
    var t;
    return (
      (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
      window
    );
  }
  function Qt(e) {
    var t;
    return (t = (Vm(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : t.documentElement;
  }
  function Vm(e) {
    return dl() ? e instanceof Node || e instanceof ut(e).Node : !1;
  }
  function Lt(e) {
    return dl() ? e instanceof Element || e instanceof ut(e).Element : !1;
  }
  function Ht(e) {
    return dl()
      ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement
      : !1;
  }
  function af(e) {
    return !dl() || typeof ShadowRoot > "u"
      ? !1
      : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
  }
  function yi(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = It(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
      !["inline", "contents"].includes(o)
    );
  }
  function $1(e) {
    return ["table", "td", "th"].includes(po(e));
  }
  function fl(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return !1;
      }
    });
  }
  function hc(e) {
    const t = mc(),
      n = Lt(e) ? It(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : !1) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
      (!t && (n.filter ? n.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((r) =>
        (n.willChange || "").includes(r),
      ) ||
      ["paint", "layout", "strict", "content"].some((r) =>
        (n.contain || "").includes(r),
      )
    );
  }
  function B1(e) {
    let t = Hn(e);
    for (; Ht(t) && !io(t); ) {
      if (hc(t)) return t;
      if (fl(t)) return null;
      t = Hn(t);
    }
    return null;
  }
  function mc() {
    return typeof CSS > "u" || !CSS.supports
      ? !1
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function io(e) {
    return ["html", "body", "#document"].includes(po(e));
  }
  function It(e) {
    return ut(e).getComputedStyle(e);
  }
  function pl(e) {
    return Lt(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function Hn(e) {
    if (po(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (af(e) && e.host) || Qt(e);
    return af(t) ? t.host : t;
  }
  function Wm(e) {
    const t = Hn(e);
    return io(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : Ht(t) && yi(t)
        ? t
        : Wm(t);
  }
  function ai(e, t, n) {
    var r;
    (t === void 0 && (t = []), n === void 0 && (n = !0));
    const o = Wm(e),
      i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
      s = ut(o);
    if (i) {
      const l = iu(s);
      return t.concat(
        s,
        s.visualViewport || [],
        yi(o) ? o : [],
        l && n ? ai(l) : [],
      );
    }
    return t.concat(o, ai(o, [], n));
  }
  function iu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function Hm(e) {
    const t = It(e);
    let n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0;
    const o = Ht(e),
      i = o ? e.offsetWidth : n,
      s = o ? e.offsetHeight : r,
      l = Is(n) !== i || Is(r) !== s;
    return (l && ((n = i), (r = s)), { width: n, height: r, $: l });
  }
  function gc(e) {
    return Lt(e) ? e : e.contextElement;
  }
  function Vr(e) {
    const t = gc(e);
    if (!Ht(t)) return Vn(1);
    const n = t.getBoundingClientRect(),
      { width: r, height: o, $: i } = Hm(t);
    let s = (i ? Is(n.width) : n.width) / r,
      l = (i ? Is(n.height) : n.height) / o;
    return (
      (!s || !Number.isFinite(s)) && (s = 1),
      (!l || !Number.isFinite(l)) && (l = 1),
      { x: s, y: l }
    );
  }
  const U1 = Vn(0);
  function Qm(e) {
    const t = ut(e);
    return !mc() || !t.visualViewport
      ? U1
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function V1(e, t, n) {
    return (t === void 0 && (t = !1), !n || (t && n !== ut(e)) ? !1 : t);
  }
  function vr(e, t, n, r) {
    (t === void 0 && (t = !1), n === void 0 && (n = !1));
    const o = e.getBoundingClientRect(),
      i = gc(e);
    let s = Vn(1);
    t && (r ? Lt(r) && (s = Vr(r)) : (s = Vr(e)));
    const l = V1(i, n, r) ? Qm(i) : Vn(0);
    let a = (o.left + l.x) / s.x,
      u = (o.top + l.y) / s.y,
      d = o.width / s.x,
      f = o.height / s.y;
    if (i) {
      const m = ut(i),
        c = r && Lt(r) ? ut(r) : r;
      let x = m,
        g = iu(x);
      for (; g && r && c !== x; ) {
        const y = Vr(g),
          h = g.getBoundingClientRect(),
          p = It(g),
          v = h.left + (g.clientLeft + parseFloat(p.paddingLeft)) * y.x,
          k = h.top + (g.clientTop + parseFloat(p.paddingTop)) * y.y;
        ((a *= y.x),
          (u *= y.y),
          (d *= y.x),
          (f *= y.y),
          (a += v),
          (u += k),
          (x = ut(g)),
          (g = iu(x)));
      }
    }
    return Fs({ width: d, height: f, x: a, y: u });
  }
  function W1(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed",
      s = Qt(r),
      l = t ? fl(t.floating) : !1;
    if (r === s || (l && i)) return n;
    let a = { scrollLeft: 0, scrollTop: 0 },
      u = Vn(1);
    const d = Vn(0),
      f = Ht(r);
    if (
      (f || (!f && !i)) &&
      ((po(r) !== "body" || yi(s)) && (a = pl(r)), Ht(r))
    ) {
      const m = vr(r);
      ((u = Vr(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop));
    }
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - a.scrollLeft * u.x + d.x,
      y: n.y * u.y - a.scrollTop * u.y + d.y,
    };
  }
  function H1(e) {
    return Array.from(e.getClientRects());
  }
  function su(e, t) {
    const n = pl(e).scrollLeft;
    return t ? t.left + n : vr(Qt(e)).left + n;
  }
  function Q1(e) {
    const t = Qt(e),
      n = pl(e),
      r = e.ownerDocument.body,
      o = st(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
      i = st(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + su(e);
    const l = -n.scrollTop;
    return (
      It(r).direction === "rtl" && (s += st(t.clientWidth, r.clientWidth) - o),
      { width: o, height: i, x: s, y: l }
    );
  }
  function K1(e, t) {
    const n = ut(e),
      r = Qt(e),
      o = n.visualViewport;
    let i = r.clientWidth,
      s = r.clientHeight,
      l = 0,
      a = 0;
    if (o) {
      ((i = o.width), (s = o.height));
      const u = mc();
      (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
    }
    return { width: i, height: s, x: l, y: a };
  }
  function G1(e, t) {
    const n = vr(e, !0, t === "fixed"),
      r = n.top + e.clientTop,
      o = n.left + e.clientLeft,
      i = Ht(e) ? Vr(e) : Vn(1),
      s = e.clientWidth * i.x,
      l = e.clientHeight * i.y,
      a = o * i.x,
      u = r * i.y;
    return { width: s, height: l, x: a, y: u };
  }
  function uf(e, t, n) {
    let r;
    if (t === "viewport") r = K1(e, n);
    else if (t === "document") r = Q1(Qt(e));
    else if (Lt(t)) r = G1(t, n);
    else {
      const o = Qm(e);
      r = { ...t, x: t.x - o.x, y: t.y - o.y };
    }
    return Fs(r);
  }
  function Km(e, t) {
    const n = Hn(e);
    return n === t || !Lt(n) || io(n)
      ? !1
      : It(n).position === "fixed" || Km(n, t);
  }
  function Y1(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = ai(e, [], !1).filter((l) => Lt(l) && po(l) !== "body"),
      o = null;
    const i = It(e).position === "fixed";
    let s = i ? Hn(e) : e;
    for (; Lt(s) && !io(s); ) {
      const l = It(s),
        a = hc(s);
      (!a && l.position === "fixed" && (o = null),
        (
          i
            ? !a && !o
            : (!a &&
                l.position === "static" &&
                !!o &&
                ["absolute", "fixed"].includes(o.position)) ||
              (yi(s) && !a && Km(e, s))
        )
          ? (r = r.filter((d) => d !== s))
          : (o = l),
        (s = Hn(s)));
    }
    return (t.set(e, r), r);
  }
  function X1(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [
        ...(n === "clippingAncestors"
          ? fl(t)
            ? []
            : Y1(t, this._c)
          : [].concat(n)),
        r,
      ],
      l = s[0],
      a = s.reduce(
        (u, d) => {
          const f = uf(t, d, o);
          return (
            (u.top = st(f.top, u.top)),
            (u.right = Un(f.right, u.right)),
            (u.bottom = Un(f.bottom, u.bottom)),
            (u.left = st(f.left, u.left)),
            u
          );
        },
        uf(t, l, o),
      );
    return {
      width: a.right - a.left,
      height: a.bottom - a.top,
      x: a.left,
      y: a.top,
    };
  }
  function q1(e) {
    const { width: t, height: n } = Hm(e);
    return { width: t, height: n };
  }
  function Z1(e, t, n) {
    const r = Ht(t),
      o = Qt(t),
      i = n === "fixed",
      s = vr(e, !0, i, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const a = Vn(0);
    if (r || (!r && !i))
      if (((po(t) !== "body" || yi(o)) && (l = pl(t)), r)) {
        const c = vr(t, !0, i, t);
        ((a.x = c.x + t.clientLeft), (a.y = c.y + t.clientTop));
      } else o && (a.x = su(o));
    let u = 0,
      d = 0;
    if (o && !r && !i) {
      const c = o.getBoundingClientRect();
      ((d = c.top + l.scrollTop), (u = c.left + l.scrollLeft - su(o, c)));
    }
    const f = s.left + l.scrollLeft - a.x - u,
      m = s.top + l.scrollTop - a.y - d;
    return { x: f, y: m, width: s.width, height: s.height };
  }
  function ql(e) {
    return It(e).position === "static";
  }
  function cf(e, t) {
    if (!Ht(e) || It(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (Qt(e) === n && (n = n.ownerDocument.body), n);
  }
  function Gm(e, t) {
    const n = ut(e);
    if (fl(e)) return n;
    if (!Ht(e)) {
      let o = Hn(e);
      for (; o && !io(o); ) {
        if (Lt(o) && !ql(o)) return o;
        o = Hn(o);
      }
      return n;
    }
    let r = cf(e, t);
    for (; r && $1(r) && ql(r); ) r = cf(r, t);
    return r && io(r) && ql(r) && !hc(r) ? n : r || B1(e) || n;
  }
  const J1 = async function (e) {
    const t = this.getOffsetParent || Gm,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: Z1(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  };
  function eS(e) {
    return It(e).direction === "rtl";
  }
  const tS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: W1,
    getDocumentElement: Qt,
    getClippingRect: X1,
    getOffsetParent: Gm,
    getElementRects: J1,
    getClientRects: H1,
    getDimensions: q1,
    getScale: Vr,
    isElement: Lt,
    isRTL: eS,
  };
  function nS(e, t) {
    let n = null,
      r;
    const o = Qt(e);
    function i() {
      var l;
      (clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
    }
    function s(l, a) {
      (l === void 0 && (l = !1), a === void 0 && (a = 1), i());
      const {
        left: u,
        top: d,
        width: f,
        height: m,
      } = e.getBoundingClientRect();
      if ((l || t(), !f || !m)) return;
      const c = Qi(d),
        x = Qi(o.clientWidth - (u + f)),
        g = Qi(o.clientHeight - (d + m)),
        y = Qi(u),
        p = {
          rootMargin: -c + "px " + -x + "px " + -g + "px " + -y + "px",
          threshold: st(0, Un(1, a)) || 1,
        };
      let v = !0;
      function k(b) {
        const P = b[0].intersectionRatio;
        if (P !== a) {
          if (!v) return s();
          P
            ? s(!1, P)
            : (r = setTimeout(() => {
                s(!1, 1e-7);
              }, 1e3));
        }
        v = !1;
      }
      try {
        n = new IntersectionObserver(k, { ...p, root: o.ownerDocument });
      } catch {
        n = new IntersectionObserver(k, p);
      }
      n.observe(e);
    }
    return (s(!0), i);
  }
  function rS(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: a = !1,
      } = r,
      u = gc(e),
      d = o || i ? [...(u ? ai(u) : []), ...ai(t)] : [];
    d.forEach((h) => {
      (o && h.addEventListener("scroll", n, { passive: !0 }),
        i && h.addEventListener("resize", n));
    });
    const f = u && l ? nS(u, n) : null;
    let m = -1,
      c = null;
    s &&
      ((c = new ResizeObserver((h) => {
        let [p] = h;
        (p &&
          p.target === u &&
          c &&
          (c.unobserve(t),
          cancelAnimationFrame(m),
          (m = requestAnimationFrame(() => {
            var v;
            (v = c) == null || v.observe(t);
          }))),
          n());
      })),
      u && !a && c.observe(u),
      c.observe(t));
    let x,
      g = a ? vr(e) : null;
    a && y();
    function y() {
      const h = vr(e);
      (g &&
        (h.x !== g.x ||
          h.y !== g.y ||
          h.width !== g.width ||
          h.height !== g.height) &&
        n(),
        (g = h),
        (x = requestAnimationFrame(y)));
    }
    return (
      n(),
      () => {
        var h;
        (d.forEach((p) => {
          (o && p.removeEventListener("scroll", n),
            i && p.removeEventListener("resize", n));
        }),
          f == null || f(),
          (h = c) == null || h.disconnect(),
          (c = null),
          a && cancelAnimationFrame(x));
      }
    );
  }
  const oS = I1,
    iS = D1,
    sS = _1,
    lS = z1,
    aS = A1,
    df = O1,
    uS = F1,
    cS = (e, t, n) => {
      const r = new Map(),
        o = { platform: tS, ...n },
        i = { ...o.platform, _c: r };
      return j1(e, t, { ...o, platform: i });
    };
  var ls = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
  function zs(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return !1;
        for (r = n; r-- !== 0; ) if (!zs(e[r], t[r])) return !1;
        return !0;
      }
      if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
        return !1;
      for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
      for (r = n; r-- !== 0; ) {
        const i = o[r];
        if (!(i === "_owner" && e.$$typeof) && !zs(e[i], t[i])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }
  function Ym(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function ff(e, t) {
    const n = Ym(e);
    return Math.round(t * n) / n;
  }
  function Zl(e) {
    const t = S.useRef(e);
    return (
      ls(() => {
        t.current = e;
      }),
      t
    );
  }
  function dS(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: { reference: i, floating: s } = {},
        transform: l = !0,
        whileElementsMounted: a,
        open: u,
      } = e,
      [d, f] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1,
      }),
      [m, c] = S.useState(r);
    zs(m, r) || c(r);
    const [x, g] = S.useState(null),
      [y, h] = S.useState(null),
      p = S.useCallback((R) => {
        R !== P.current && ((P.current = R), g(R));
      }, []),
      v = S.useCallback((R) => {
        R !== T.current && ((T.current = R), h(R));
      }, []),
      k = i || x,
      b = s || y,
      P = S.useRef(null),
      T = S.useRef(null),
      O = S.useRef(d),
      F = a != null,
      I = Zl(a),
      H = Zl(o),
      B = Zl(u),
      Z = S.useCallback(() => {
        if (!P.current || !T.current) return;
        const R = { placement: t, strategy: n, middleware: m };
        (H.current && (R.platform = H.current),
          cS(P.current, T.current, R).then((M) => {
            const C = { ...M, isPositioned: B.current !== !1 };
            $.current &&
              !zs(O.current, C) &&
              ((O.current = C),
              gi.flushSync(() => {
                f(C);
              }));
          }));
      }, [m, t, n, H, B]);
    ls(() => {
      u === !1 &&
        O.current.isPositioned &&
        ((O.current.isPositioned = !1), f((R) => ({ ...R, isPositioned: !1 })));
    }, [u]);
    const $ = S.useRef(!1);
    (ls(
      () => (
        ($.current = !0),
        () => {
          $.current = !1;
        }
      ),
      [],
    ),
      ls(() => {
        if ((k && (P.current = k), b && (T.current = b), k && b)) {
          if (I.current) return I.current(k, b, Z);
          Z();
        }
      }, [k, b, Z, I, F]));
    const J = S.useMemo(
        () => ({ reference: P, floating: T, setReference: p, setFloating: v }),
        [p, v],
      ),
      Q = S.useMemo(() => ({ reference: k, floating: b }), [k, b]),
      K = S.useMemo(() => {
        const R = { position: n, left: 0, top: 0 };
        if (!Q.floating) return R;
        const M = ff(Q.floating, d.x),
          C = ff(Q.floating, d.y);
        return l
          ? {
              ...R,
              transform: "translate(" + M + "px, " + C + "px)",
              ...(Ym(Q.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: M, top: C };
      }, [n, l, Q.floating, d.x, d.y]);
    return S.useMemo(
      () => ({ ...d, update: Z, refs: J, elements: Q, floatingStyles: K }),
      [d, Z, J, Q, K],
    );
  }
  const fS = (e) => {
      function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
          return r && t(r)
            ? r.current != null
              ? df({ element: r.current, padding: o }).fn(n)
              : {}
            : r
              ? df({ element: r, padding: o }).fn(n)
              : {};
        },
      };
    },
    pS = (e, t) => ({ ...oS(e), options: [e, t] }),
    hS = (e, t) => ({ ...iS(e), options: [e, t] }),
    mS = (e, t) => ({ ...uS(e), options: [e, t] }),
    gS = (e, t) => ({ ...sS(e), options: [e, t] }),
    vS = (e, t) => ({ ...lS(e), options: [e, t] }),
    yS = (e, t) => ({ ...aS(e), options: [e, t] }),
    wS = (e, t) => ({ ...fS(e), options: [e, t] });
  var xS = "Arrow",
    Xm = S.forwardRef((e, t) => {
      const { children: n, width: r = 10, height: o = 5, ...i } = e;
      return w.jsx(rt.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild
          ? n
          : w.jsx("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  Xm.displayName = xS;
  var SS = Xm;
  function ES(e) {
    const [t, n] = S.useState(void 0);
    return (
      Bn(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const r = new ResizeObserver((o) => {
            if (!Array.isArray(o) || !o.length) return;
            const i = o[0];
            let s, l;
            if ("borderBoxSize" in i) {
              const a = i.borderBoxSize,
                u = Array.isArray(a) ? a[0] : a;
              ((s = u.inlineSize), (l = u.blockSize));
            } else ((s = e.offsetWidth), (l = e.offsetHeight));
            n({ width: s, height: l });
          });
          return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
        } else n(void 0);
      }, [e]),
      t
    );
  }
  var qm = "Popper",
    [Zm, Jm] = ll(qm),
    [RE, eg] = Zm(qm),
    tg = "PopperAnchor",
    ng = S.forwardRef((e, t) => {
      const { __scopePopper: n, virtualRef: r, ...o } = e,
        i = eg(tg, n),
        s = S.useRef(null),
        l = At(t, s);
      return (
        S.useEffect(() => {
          i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
        }),
        r ? null : w.jsx(rt.div, { ...o, ref: l })
      );
    });
  ng.displayName = tg;
  var vc = "PopperContent",
    [CS, kS] = Zm(vc),
    rg = S.forwardRef((e, t) => {
      var D, G, ne, se, re, le;
      const {
          __scopePopper: n,
          side: r = "bottom",
          sideOffset: o = 0,
          align: i = "center",
          alignOffset: s = 0,
          arrowPadding: l = 0,
          avoidCollisions: a = !0,
          collisionBoundary: u = [],
          collisionPadding: d = 0,
          sticky: f = "partial",
          hideWhenDetached: m = !1,
          updatePositionStrategy: c = "optimized",
          onPlaced: x,
          ...g
        } = e,
        y = eg(vc, n),
        [h, p] = S.useState(null),
        v = At(t, (ce) => p(ce)),
        [k, b] = S.useState(null),
        P = ES(k),
        T = (P == null ? void 0 : P.width) ?? 0,
        O = (P == null ? void 0 : P.height) ?? 0,
        F = r + (i !== "center" ? "-" + i : ""),
        I =
          typeof d == "number"
            ? d
            : { top: 0, right: 0, bottom: 0, left: 0, ...d },
        H = Array.isArray(u) ? u : [u],
        B = H.length > 0,
        Z = { padding: I, boundary: H.filter(PS), altBoundary: B },
        {
          refs: $,
          floatingStyles: J,
          placement: Q,
          isPositioned: K,
          middlewareData: R,
        } = dS({
          strategy: "fixed",
          placement: F,
          whileElementsMounted: (...ce) =>
            rS(...ce, { animationFrame: c === "always" }),
          elements: { reference: y.anchor },
          middleware: [
            pS({ mainAxis: o + O, alignmentAxis: s }),
            a &&
              hS({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? mS() : void 0,
                ...Z,
              }),
            a && gS({ ...Z }),
            vS({
              ...Z,
              apply: ({
                elements: ce,
                rects: ee,
                availableWidth: Te,
                availableHeight: _e,
              }) => {
                const { width: $e, height: Be } = ee.reference,
                  Ye = ce.floating.style;
                (Ye.setProperty("--radix-popper-available-width", `${Te}px`),
                  Ye.setProperty("--radix-popper-available-height", `${_e}px`),
                  Ye.setProperty("--radix-popper-anchor-width", `${$e}px`),
                  Ye.setProperty("--radix-popper-anchor-height", `${Be}px`));
              },
            }),
            k && wS({ element: k, padding: l }),
            TS({ arrowWidth: T, arrowHeight: O }),
            m && yS({ strategy: "referenceHidden", ...Z }),
          ],
        }),
        [M, C] = sg(Q),
        E = $n(x);
      Bn(() => {
        K && (E == null || E());
      }, [K, E]);
      const j = (D = R.arrow) == null ? void 0 : D.x,
        L = (G = R.arrow) == null ? void 0 : G.y,
        z = ((ne = R.arrow) == null ? void 0 : ne.centerOffset) !== 0,
        [V, W] = S.useState();
      return (
        Bn(() => {
          h && W(window.getComputedStyle(h).zIndex);
        }, [h]),
        w.jsx("div", {
          ref: $.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...J,
            transform: K ? J.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: V,
            "--radix-popper-transform-origin": [
              (se = R.transformOrigin) == null ? void 0 : se.x,
              (re = R.transformOrigin) == null ? void 0 : re.y,
            ].join(" "),
            ...(((le = R.hide) == null ? void 0 : le.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: w.jsx(CS, {
            scope: n,
            placedSide: M,
            onArrowChange: b,
            arrowX: j,
            arrowY: L,
            shouldHideArrow: z,
            children: w.jsx(rt.div, {
              "data-side": M,
              "data-align": C,
              ...g,
              ref: v,
              style: { ...g.style, animation: K ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  rg.displayName = vc;
  var og = "PopperArrow",
    bS = { top: "bottom", right: "left", bottom: "top", left: "right" },
    ig = S.forwardRef(function (t, n) {
      const { __scopePopper: r, ...o } = t,
        i = kS(og, r),
        s = bS[i.placedSide];
      return w.jsx("span", {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0,
        },
        children: w.jsx(SS, {
          ...o,
          ref: n,
          style: { ...o.style, display: "block" },
        }),
      });
    });
  ig.displayName = og;
  function PS(e) {
    return e !== null;
  }
  var TS = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var y, h, p;
      const { placement: n, rects: r, middlewareData: o } = t,
        s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0,
        l = s ? 0 : e.arrowWidth,
        a = s ? 0 : e.arrowHeight,
        [u, d] = sg(n),
        f = { start: "0%", center: "50%", end: "100%" }[d],
        m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2,
        c = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
      let x = "",
        g = "";
      return (
        u === "bottom"
          ? ((x = s ? f : `${m}px`), (g = `${-a}px`))
          : u === "top"
            ? ((x = s ? f : `${m}px`), (g = `${r.floating.height + a}px`))
            : u === "right"
              ? ((x = `${-a}px`), (g = s ? f : `${c}px`))
              : u === "left" &&
                ((x = `${r.floating.width + a}px`), (g = s ? f : `${c}px`)),
        { data: { x, y: g } }
      );
    },
  });
  function sg(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var NS = ng,
    RS = rg,
    MS = ig,
    [hl, ME] = ll("Tooltip", [Jm]),
    yc = Jm(),
    lg = "TooltipProvider",
    jS = 700,
    pf = "tooltip.open",
    [OS, ag] = hl(lg),
    ug = (e) => {
      const {
          __scopeTooltip: t,
          delayDuration: n = jS,
          skipDelayDuration: r = 300,
          disableHoverableContent: o = !1,
          children: i,
        } = e,
        s = S.useRef(!0),
        l = S.useRef(!1),
        a = S.useRef(0);
      return (
        S.useEffect(() => {
          const u = a.current;
          return () => window.clearTimeout(u);
        }, []),
        w.jsx(OS, {
          scope: t,
          isOpenDelayedRef: s,
          delayDuration: n,
          onOpen: S.useCallback(() => {
            (window.clearTimeout(a.current), (s.current = !1));
          }, []),
          onClose: S.useCallback(() => {
            (window.clearTimeout(a.current),
              (a.current = window.setTimeout(() => (s.current = !0), r)));
          }, [r]),
          isPointerInTransitRef: l,
          onPointerInTransitChange: S.useCallback((u) => {
            l.current = u;
          }, []),
          disableHoverableContent: o,
          children: i,
        })
      );
    };
  ug.displayName = lg;
  var cg = "Tooltip",
    [jE, ml] = hl(cg),
    lu = "TooltipTrigger",
    _S = S.forwardRef((e, t) => {
      const { __scopeTooltip: n, ...r } = e,
        o = ml(lu, n),
        i = ag(lu, n),
        s = yc(n),
        l = S.useRef(null),
        a = At(t, l, o.onTriggerChange),
        u = S.useRef(!1),
        d = S.useRef(!1),
        f = S.useCallback(() => (u.current = !1), []);
      return (
        S.useEffect(
          () => () => document.removeEventListener("pointerup", f),
          [f],
        ),
        w.jsx(NS, {
          asChild: !0,
          ...s,
          children: w.jsx(rt.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: be(e.onPointerMove, (m) => {
              m.pointerType !== "touch" &&
                !d.current &&
                !i.isPointerInTransitRef.current &&
                (o.onTriggerEnter(), (d.current = !0));
            }),
            onPointerLeave: be(e.onPointerLeave, () => {
              (o.onTriggerLeave(), (d.current = !1));
            }),
            onPointerDown: be(e.onPointerDown, () => {
              (o.open && o.onClose(),
                (u.current = !0),
                document.addEventListener("pointerup", f, { once: !0 }));
            }),
            onFocus: be(e.onFocus, () => {
              u.current || o.onOpen();
            }),
            onBlur: be(e.onBlur, o.onClose),
            onClick: be(e.onClick, o.onClose),
          }),
        })
      );
    });
  _S.displayName = lu;
  var AS = "TooltipPortal",
    [OE, LS] = hl(AS, { forceMount: void 0 }),
    so = "TooltipContent",
    dg = S.forwardRef((e, t) => {
      const n = LS(so, e.__scopeTooltip),
        { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
        s = ml(so, e.__scopeTooltip);
      return w.jsx(sc, {
        present: r || s.open,
        children: s.disableHoverableContent
          ? w.jsx(fg, { side: o, ...i, ref: t })
          : w.jsx(IS, { side: o, ...i, ref: t }),
      });
    }),
    IS = S.forwardRef((e, t) => {
      const n = ml(so, e.__scopeTooltip),
        r = ag(so, e.__scopeTooltip),
        o = S.useRef(null),
        i = At(t, o),
        [s, l] = S.useState(null),
        { trigger: a, onClose: u } = n,
        d = o.current,
        { onPointerInTransitChange: f } = r,
        m = S.useCallback(() => {
          (l(null), f(!1));
        }, [f]),
        c = S.useCallback(
          (x, g) => {
            const y = x.currentTarget,
              h = { x: x.clientX, y: x.clientY },
              p = BS(h, y.getBoundingClientRect()),
              v = US(h, p),
              k = VS(g.getBoundingClientRect()),
              b = HS([...v, ...k]);
            (l(b), f(!0));
          },
          [f],
        );
      return (
        S.useEffect(() => () => m(), [m]),
        S.useEffect(() => {
          if (a && d) {
            const x = (y) => c(y, d),
              g = (y) => c(y, a);
            return (
              a.addEventListener("pointerleave", x),
              d.addEventListener("pointerleave", g),
              () => {
                (a.removeEventListener("pointerleave", x),
                  d.removeEventListener("pointerleave", g));
              }
            );
          }
        }, [a, d, c, m]),
        S.useEffect(() => {
          if (s) {
            const x = (g) => {
              const y = g.target,
                h = { x: g.clientX, y: g.clientY },
                p =
                  (a == null ? void 0 : a.contains(y)) ||
                  (d == null ? void 0 : d.contains(y)),
                v = !WS(h, s);
              p ? m() : v && (m(), u());
            };
            return (
              document.addEventListener("pointermove", x),
              () => document.removeEventListener("pointermove", x)
            );
          }
        }, [a, d, s, u, m]),
        w.jsx(fg, { ...e, ref: i })
      );
    }),
    [DS, FS] = hl(cg, { isInside: !1 }),
    zS = Ww("TooltipContent"),
    fg = S.forwardRef((e, t) => {
      const {
          __scopeTooltip: n,
          children: r,
          "aria-label": o,
          onEscapeKeyDown: i,
          onPointerDownOutside: s,
          ...l
        } = e,
        a = ml(so, n),
        u = yc(n),
        { onClose: d } = a;
      return (
        S.useEffect(
          () => (
            document.addEventListener(pf, d),
            () => document.removeEventListener(pf, d)
          ),
          [d],
        ),
        S.useEffect(() => {
          if (a.trigger) {
            const f = (m) => {
              const c = m.target;
              c != null && c.contains(a.trigger) && d();
            };
            return (
              window.addEventListener("scroll", f, { capture: !0 }),
              () => window.removeEventListener("scroll", f, { capture: !0 })
            );
          }
        }, [a.trigger, d]),
        w.jsx(ic, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: s,
          onFocusOutside: (f) => f.preventDefault(),
          onDismiss: d,
          children: w.jsxs(RS, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
            children: [
              w.jsx(zS, { children: r }),
              w.jsx(DS, {
                scope: n,
                isInside: !0,
                children: w.jsx(mx, {
                  id: a.contentId,
                  role: "tooltip",
                  children: o || r,
                }),
              }),
            ],
          }),
        })
      );
    });
  dg.displayName = so;
  var pg = "TooltipArrow",
    $S = S.forwardRef((e, t) => {
      const { __scopeTooltip: n, ...r } = e,
        o = yc(n);
      return FS(pg, n).isInside ? null : w.jsx(MS, { ...o, ...r, ref: t });
    });
  $S.displayName = pg;
  function BS(e, t) {
    const n = Math.abs(t.top - e.y),
      r = Math.abs(t.bottom - e.y),
      o = Math.abs(t.right - e.x),
      i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
      case i:
        return "left";
      case o:
        return "right";
      case n:
        return "top";
      case r:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function US(e, t, n = 5) {
    const r = [];
    switch (t) {
      case "top":
        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
        break;
      case "bottom":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
        break;
      case "left":
        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
        break;
      case "right":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
        break;
    }
    return r;
  }
  function VS(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
      { x: o, y: t },
      { x: n, y: t },
      { x: n, y: r },
      { x: o, y: r },
    ];
  }
  function WS(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
      const l = t[i],
        a = t[s],
        u = l.x,
        d = l.y,
        f = a.x,
        m = a.y;
      d > r != m > r && n < ((f - u) * (r - d)) / (m - d) + u && (o = !o);
    }
    return o;
  }
  function HS(e) {
    const t = e.slice();
    return (
      t.sort((n, r) =>
        n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
      ),
      QS(t)
    );
  }
  function QS(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      for (; t.length >= 2; ) {
        const i = t[t.length - 1],
          s = t[t.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
        else break;
      }
      t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const o = e[r];
      for (; n.length >= 2; ) {
        const i = n[n.length - 1],
          s = n[n.length - 2];
        if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
        else break;
      }
      n.push(o);
    }
    return (
      n.pop(),
      t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
        ? t
        : t.concat(n)
    );
  }
  var KS = ug,
    hg = dg;
  const GS = KS,
    YS = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
      w.jsx(hg, {
        ref: r,
        sideOffset: t,
        className: Yn(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e,
        ),
        ...n,
      }),
    );
  YS.displayName = hg.displayName;
  const XS = "./envelope-PE3Id_YU.svg",
    qS = ({ onOpen: e, opening: t }) =>
      w.jsxs("div", {
        className:
          "min-h-screen w-full flex flex-col items-center justify-center relative px-6",
        style: {
          background:
            "linear-gradient(135deg, hsl(95 30% 80%), hsl(95 22% 68%))",
        },
        children: [
          w.jsx("span", {
            className:
              "absolute top-6 left-6 text-3xl opacity-70 animate-drift",
            children: "🌸",
          }),
          w.jsx("span", {
            className:
              "absolute top-8 right-10 text-2xl opacity-60 animate-drift",
            style: { animationDelay: "1s" },
            children: "🌼",
          }),
          w.jsx("span", {
            className:
              "absolute bottom-8 left-10 text-3xl opacity-70 animate-drift",
            style: { animationDelay: "2s" },
            children: "🌿",
          }),
          w.jsx("span", {
            className:
              "absolute bottom-6 right-6 text-3xl opacity-70 animate-drift",
            style: { animationDelay: "0.5s" },
            children: "🌿",
          }),
          w.jsxs("button", {
            onClick: e,
            "aria-label": "Open invitation",
            className: `relative group transition-transform duration-500 hover:scale-105 ${t ? "animate-envelope-open" : ""}`,
            style: { perspective: "1000px" },
            children: [
              w.jsx("img", {
                src: XS,
                alt: "Wedding invitation envelope",
                className:
                  "w-[280px] sm:w-[360px] md:w-[420px] h-auto drop-shadow-2xl",
              }),
              w.jsx("span", {
                className: "absolute inset-0 flex items-center justify-center",
                children: w.jsx("span", {
                  className:
                    "w-20 h-20 sm:w-24 sm:h-24 rounded-full gradient-gold shadow-gold animate-shimmer flex items-center justify-center",
                  children: w.jsx("span", {
                    className: "font-cinzel text-xs text-white/90",
                    children: "R & S",
                  }),
                }),
              }),
            ],
          }),
          w.jsxs("div", {
            className: `mt-10 text-center animate-fade-up delay-300 ${t ? "opacity-0 transition-opacity duration-300" : ""}`,
            children: [
              w.jsx("h2", {
                className: "font-script text-4xl sm:text-5xl text-sage-deep",
                children: "You're Invited",
              }),
              w.jsx("p", {
                className: "mt-2 text-sage-deep/80 italic tracking-wide",
                children: "Tap the envelope to open your invitation",
              }),
            ],
          }),
        ],
      }),
    ZS = "./wedding-hero-BBfn2Y6k.jpg",
    JS = "./ganesh-idol-TubyYjSJ.png",
    eE = "./bg-sangeet-new-CNNXHaSd.jpg",
    tE = "./bg-haldi-new-BPoFOaPt.jpg",
    nE = "./bg-sapthapadi-new-DwAlBfyG.jpg",
    rE = "./bg-varmala-new-CDPQmalT.jpg",
    oE = "./bg-gavdev-groom-new-6jrcX2vp.jpg",
    iE = "./couple-haldi-CsWjfUdv.png",
    sE = "./couple-sapthapadi-Zvu2FEVx.png",
    lE = "./couple-gavdev-DxDeDDBt.png",
    aE = "./couple-varmala-DBCWuEXF.png",
    uE = "./couple-sangeet-D3VSf4cb.png",
    cE = new Date("2026-07-06T00:00:00+05:30").getTime(),
    hf = () => {
      const e = Math.max(0, cE - Date.now());
      return {
        days: Math.floor(e / 864e5),
        hours: Math.floor((e / 36e5) % 24),
        minutes: Math.floor((e / 6e4) % 60),
        seconds: Math.floor((e / 1e3) % 60),
      };
    },
    dE = () => {
      const [e, t] = S.useState(hf());
      S.useEffect(() => {
        const r = setInterval(() => t(hf()), 1e3);
        return () => clearInterval(r);
      }, []);
      const n = [
        { v: e.days, l: "Days" },
        { v: e.hours, l: "Hours" },
        { v: e.minutes, l: "Minutes" },
        { v: e.seconds, l: "Seconds" },
      ];
      return w.jsx("div", {
        className: "flex justify-center gap-3 sm:gap-6",
        children: n.map((r) =>
          w.jsxs(
            "div",
            {
              className:
                "flex flex-col items-center min-w-[68px] sm:min-w-[90px]",
              children: [
                w.jsx("div", {
                  className:
                    "w-full aspect-square rounded-2xl bg-cream border border-gold-soft shadow-soft flex items-center justify-center backdrop-blur-sm",
                  children: w.jsx("span", {
                    className:
                      "font-cinzel text-2xl sm:text-4xl text-rose-deep tabular-nums",
                    children: String(r.v).padStart(2, "0"),
                  }),
                }),
                w.jsx("span", {
                  className:
                    "mt-2 text-xs sm:text-sm tracking-widest uppercase text-sage-deep",
                  children: r.l,
                }),
              ],
            },
            r.l,
          ),
        ),
      });
    },
    fE = ({
      title: e,
      description: t,
      day: n,
      date: r,
      time: o,
      venue: i,
      bg: s,
      couple: l,
      tint: a = "bg-cream",
      dark: u = !1,
      imageSide: d = "left",
    }) => {
      const f = d === "left",
        m = u ? "text-cream" : "text-rose-deep",
        c = u ? "text-cream/80" : "text-muted-foreground",
        x = u ? "text-gold-soft" : "text-sage-deep",
        g = u ? "text-cream" : "text-foreground",
        y = u ? "bg-gold-soft/60" : "bg-gold-soft";
      return w.jsxs("article", {
        className: `relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group isolate border border-gold-soft ${s ? "" : a}`,
        children: [
          s &&
            w.jsxs(w.Fragment, {
              children: [
                w.jsx("img", {
                  src: s,
                  alt: "",
                  "aria-hidden": !0,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-cover",
                }),
                u &&
                  w.jsx("div", {
                    className: "absolute inset-0 bg-black/40",
                    "aria-hidden": !0,
                  }),
              ],
            }),
          w.jsx("div", {
            className: "relative",
            children: w.jsxs("div", {
              className: `grid gap-4 sm:gap-6 items-end p-6 sm:p-8 ${l ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`,
              children: [
                l &&
                  w.jsx("div", {
                    className: `flex justify-center items-end h-full order-2 ${f ? "sm:order-1" : "sm:order-2"}`,
                    children: w.jsx("img", {
                      src: l,
                      alt: `${e} couple illustration`,
                      loading: "lazy",
                      className:
                        "w-full max-w-[220px] h-auto object-contain drop-shadow-md",
                    }),
                  }),
                w.jsxs("div", {
                  className: `text-center order-1 text-slate-100 flex flex-col justify-center ${l ? (f ? "sm:order-2" : "sm:order-1") : ""}`,
                  children: [
                    w.jsx("h3", {
                      className: `font-script text-5xl ${m} text-slate-50`,
                      children: e,
                    }),
                    w.jsx("p", {
                      className: `mt-2 italic text-base ${c} text-slate-100`,
                      children: t,
                    }),
                    w.jsxs("div", {
                      className: "my-5 flex items-center gap-3 justify-center",
                      children: [
                        w.jsx("span", { className: `h-px w-10 ${y}` }),
                        w.jsx("span", {
                          className: "text-gold",
                          children: "❀",
                        }),
                        w.jsx("span", { className: `h-px w-10 ${y}` }),
                      ],
                    }),
                    w.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        w.jsxs("div", {
                          children: [
                            w.jsx("div", {
                              className: `font-cinzel text-sm ${x}`,
                              children: "Date",
                            }),
                            w.jsxs("div", {
                              className: `font-serif-display text-xl mt-1 ${g}`,
                              children: [n, " · ", r],
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          children: [
                            w.jsx("div", {
                              className: `font-cinzel text-sm ${x}`,
                              children: "Time",
                            }),
                            w.jsx("div", {
                              className: `font-serif-display text-xl mt-1 ${g}`,
                              children: o,
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          children: [
                            w.jsx("div", {
                              className: `font-cinzel text-sm ${x}`,
                              children: "Venue",
                            }),
                            w.jsx("div", {
                              className: `font-serif-display text-lg mt-1 ${g}`,
                              children: i,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    };
  var wi = {};
  (function e(t, n, r, o) {
    var i = !!(
        t.Worker &&
        t.Blob &&
        t.Promise &&
        t.OffscreenCanvas &&
        t.OffscreenCanvasRenderingContext2D &&
        t.HTMLCanvasElement &&
        t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        t.URL &&
        t.URL.createObjectURL
      ),
      s = typeof Path2D == "function" && typeof DOMMatrix == "function",
      l = (function () {
        if (!t.OffscreenCanvas) return !1;
        try {
          var C = new OffscreenCanvas(1, 1),
            E = C.getContext("2d");
          E.fillRect(0, 0, 1, 1);
          var j = C.transferToImageBitmap();
          E.createPattern(j, "no-repeat");
        } catch {
          return !1;
        }
        return !0;
      })();
    function a() {}
    function u(C) {
      var E = n.exports.Promise,
        j = E !== void 0 ? E : t.Promise;
      return typeof j == "function" ? new j(C) : (C(a, a), null);
    }
    var d = (function (C, E) {
        return {
          transform: function (j) {
            if (C) return j;
            if (E.has(j)) return E.get(j);
            var L = new OffscreenCanvas(j.width, j.height),
              z = L.getContext("2d");
            return (z.drawImage(j, 0, 0), E.set(j, L), L);
          },
          clear: function () {
            E.clear();
          },
        };
      })(l, new Map()),
      f = (function () {
        var C = Math.floor(16.666666666666668),
          E,
          j,
          L = {},
          z = 0;
        return (
          typeof requestAnimationFrame == "function" &&
          typeof cancelAnimationFrame == "function"
            ? ((E = function (V) {
                var W = Math.random();
                return (
                  (L[W] = requestAnimationFrame(function D(G) {
                    z === G || z + C - 1 < G
                      ? ((z = G), delete L[W], V())
                      : (L[W] = requestAnimationFrame(D));
                  })),
                  W
                );
              }),
              (j = function (V) {
                L[V] && cancelAnimationFrame(L[V]);
              }))
            : ((E = function (V) {
                return setTimeout(V, C);
              }),
              (j = function (V) {
                return clearTimeout(V);
              })),
          { frame: E, cancel: j }
        );
      })(),
      m = (function () {
        var C,
          E,
          j = {};
        function L(z) {
          function V(W, D) {
            z.postMessage({ options: W || {}, callback: D });
          }
          ((z.init = function (D) {
            var G = D.transferControlToOffscreen();
            z.postMessage({ canvas: G }, [G]);
          }),
            (z.fire = function (D, G, ne) {
              if (E) return (V(D, null), E);
              var se = Math.random().toString(36).slice(2);
              return (
                (E = u(function (re) {
                  function le(ce) {
                    ce.data.callback === se &&
                      (delete j[se],
                      z.removeEventListener("message", le),
                      (E = null),
                      d.clear(),
                      ne(),
                      re());
                  }
                  (z.addEventListener("message", le),
                    V(D, se),
                    (j[se] = le.bind(null, { data: { callback: se } })));
                })),
                E
              );
            }),
            (z.reset = function () {
              z.postMessage({ reset: !0 });
              for (var D in j) (j[D](), delete j[D]);
            }));
        }
        return function () {
          if (C) return C;
          if (!r && i) {
            var z = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + e.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}",
            ].join(`
`);
            try {
              C = new Worker(URL.createObjectURL(new Blob([z])));
            } catch (V) {
              return (
                typeof console < "u" &&
                  typeof console.warn == "function" &&
                  console.warn("🎊 Could not load worker", V),
                null
              );
            }
            L(C);
          }
          return C;
        };
      })(),
      c = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        disableForReducedMotion: !1,
        scalar: 1,
      };
    function x(C, E) {
      return E ? E(C) : C;
    }
    function g(C) {
      return C != null;
    }
    function y(C, E, j) {
      return x(C && g(C[E]) ? C[E] : c[E], j);
    }
    function h(C) {
      return C < 0 ? 0 : Math.floor(C);
    }
    function p(C, E) {
      return Math.floor(Math.random() * (E - C)) + C;
    }
    function v(C) {
      return parseInt(C, 16);
    }
    function k(C) {
      return C.map(b);
    }
    function b(C) {
      var E = String(C).replace(/[^0-9a-f]/gi, "");
      return (
        E.length < 6 && (E = E[0] + E[0] + E[1] + E[1] + E[2] + E[2]),
        {
          r: v(E.substring(0, 2)),
          g: v(E.substring(2, 4)),
          b: v(E.substring(4, 6)),
        }
      );
    }
    function P(C) {
      var E = y(C, "origin", Object);
      return ((E.x = y(E, "x", Number)), (E.y = y(E, "y", Number)), E);
    }
    function T(C) {
      ((C.width = document.documentElement.clientWidth),
        (C.height = document.documentElement.clientHeight));
    }
    function O(C) {
      var E = C.getBoundingClientRect();
      ((C.width = E.width), (C.height = E.height));
    }
    function F(C) {
      var E = document.createElement("canvas");
      return (
        (E.style.position = "fixed"),
        (E.style.top = "0px"),
        (E.style.left = "0px"),
        (E.style.pointerEvents = "none"),
        (E.style.zIndex = C),
        E
      );
    }
    function I(C, E, j, L, z, V, W, D, G) {
      (C.save(),
        C.translate(E, j),
        C.rotate(V),
        C.scale(L, z),
        C.arc(0, 0, 1, W, D, G),
        C.restore());
    }
    function H(C) {
      var E = C.angle * (Math.PI / 180),
        j = C.spread * (Math.PI / 180);
      return {
        x: C.x,
        y: C.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity: C.startVelocity * 0.5 + Math.random() * C.startVelocity,
        angle2D: -E + (0.5 * j - Math.random() * j),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: C.color,
        shape: C.shape,
        tick: 0,
        totalTicks: C.ticks,
        decay: C.decay,
        drift: C.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: C.gravity * 3,
        ovalScalar: 0.6,
        scalar: C.scalar,
        flat: C.flat,
      };
    }
    function B(C, E) {
      ((E.x += Math.cos(E.angle2D) * E.velocity + E.drift),
        (E.y += Math.sin(E.angle2D) * E.velocity + E.gravity),
        (E.velocity *= E.decay),
        E.flat
          ? ((E.wobble = 0),
            (E.wobbleX = E.x + 10 * E.scalar),
            (E.wobbleY = E.y + 10 * E.scalar),
            (E.tiltSin = 0),
            (E.tiltCos = 0),
            (E.random = 1))
          : ((E.wobble += E.wobbleSpeed),
            (E.wobbleX = E.x + 10 * E.scalar * Math.cos(E.wobble)),
            (E.wobbleY = E.y + 10 * E.scalar * Math.sin(E.wobble)),
            (E.tiltAngle += 0.1),
            (E.tiltSin = Math.sin(E.tiltAngle)),
            (E.tiltCos = Math.cos(E.tiltAngle)),
            (E.random = Math.random() + 2)));
      var j = E.tick++ / E.totalTicks,
        L = E.x + E.random * E.tiltCos,
        z = E.y + E.random * E.tiltSin,
        V = E.wobbleX + E.random * E.tiltCos,
        W = E.wobbleY + E.random * E.tiltSin;
      if (
        ((C.fillStyle =
          "rgba(" +
          E.color.r +
          ", " +
          E.color.g +
          ", " +
          E.color.b +
          ", " +
          (1 - j) +
          ")"),
        C.beginPath(),
        s &&
          E.shape.type === "path" &&
          typeof E.shape.path == "string" &&
          Array.isArray(E.shape.matrix))
      )
        C.fill(
          K(
            E.shape.path,
            E.shape.matrix,
            E.x,
            E.y,
            Math.abs(V - L) * 0.1,
            Math.abs(W - z) * 0.1,
            (Math.PI / 10) * E.wobble,
          ),
        );
      else if (E.shape.type === "bitmap") {
        var D = (Math.PI / 10) * E.wobble,
          G = Math.abs(V - L) * 0.1,
          ne = Math.abs(W - z) * 0.1,
          se = E.shape.bitmap.width * E.scalar,
          re = E.shape.bitmap.height * E.scalar,
          le = new DOMMatrix([
            Math.cos(D) * G,
            Math.sin(D) * G,
            -Math.sin(D) * ne,
            Math.cos(D) * ne,
            E.x,
            E.y,
          ]);
        le.multiplySelf(new DOMMatrix(E.shape.matrix));
        var ce = C.createPattern(d.transform(E.shape.bitmap), "no-repeat");
        (ce.setTransform(le),
          (C.globalAlpha = 1 - j),
          (C.fillStyle = ce),
          C.fillRect(E.x - se / 2, E.y - re / 2, se, re),
          (C.globalAlpha = 1));
      } else if (E.shape === "circle")
        C.ellipse
          ? C.ellipse(
              E.x,
              E.y,
              Math.abs(V - L) * E.ovalScalar,
              Math.abs(W - z) * E.ovalScalar,
              (Math.PI / 10) * E.wobble,
              0,
              2 * Math.PI,
            )
          : I(
              C,
              E.x,
              E.y,
              Math.abs(V - L) * E.ovalScalar,
              Math.abs(W - z) * E.ovalScalar,
              (Math.PI / 10) * E.wobble,
              0,
              2 * Math.PI,
            );
      else if (E.shape === "star")
        for (
          var ee = (Math.PI / 2) * 3,
            Te = 4 * E.scalar,
            _e = 8 * E.scalar,
            $e = E.x,
            Be = E.y,
            Ye = 5,
            ot = Math.PI / Ye;
          Ye--;
        )
          (($e = E.x + Math.cos(ee) * _e),
            (Be = E.y + Math.sin(ee) * _e),
            C.lineTo($e, Be),
            (ee += ot),
            ($e = E.x + Math.cos(ee) * Te),
            (Be = E.y + Math.sin(ee) * Te),
            C.lineTo($e, Be),
            (ee += ot));
      else
        (C.moveTo(Math.floor(E.x), Math.floor(E.y)),
          C.lineTo(Math.floor(E.wobbleX), Math.floor(z)),
          C.lineTo(Math.floor(V), Math.floor(W)),
          C.lineTo(Math.floor(L), Math.floor(E.wobbleY)));
      return (C.closePath(), C.fill(), E.tick < E.totalTicks);
    }
    function Z(C, E, j, L, z) {
      var V = E.slice(),
        W = C.getContext("2d"),
        D,
        G,
        ne = u(function (se) {
          function re() {
            ((D = G = null),
              W.clearRect(0, 0, L.width, L.height),
              d.clear(),
              z(),
              se());
          }
          function le() {
            (r &&
              !(L.width === o.width && L.height === o.height) &&
              ((L.width = C.width = o.width), (L.height = C.height = o.height)),
              !L.width &&
                !L.height &&
                (j(C), (L.width = C.width), (L.height = C.height)),
              W.clearRect(0, 0, L.width, L.height),
              (V = V.filter(function (ce) {
                return B(W, ce);
              })),
              V.length ? (D = f.frame(le)) : re());
          }
          ((D = f.frame(le)), (G = re));
        });
      return {
        addFettis: function (se) {
          return ((V = V.concat(se)), ne);
        },
        canvas: C,
        promise: ne,
        reset: function () {
          (D && f.cancel(D), G && G());
        },
      };
    }
    function $(C, E) {
      var j = !C,
        L = !!y(E || {}, "resize"),
        z = !1,
        V = y(E, "disableForReducedMotion", Boolean),
        W = i && !!y(E || {}, "useWorker"),
        D = W ? m() : null,
        G = j ? T : O,
        ne = C && D ? !!C.__confetti_initialized : !1,
        se =
          typeof matchMedia == "function" &&
          matchMedia("(prefers-reduced-motion)").matches,
        re;
      function le(ee, Te, _e) {
        for (
          var $e = y(ee, "particleCount", h),
            Be = y(ee, "angle", Number),
            Ye = y(ee, "spread", Number),
            ot = y(ee, "startVelocity", Number),
            Xn = y(ee, "decay", Number),
            xi = y(ee, "gravity", Number),
            Kt = y(ee, "drift", Number),
            Si = y(ee, "colors", k),
            gl = y(ee, "ticks", Number),
            Ue = y(ee, "shapes"),
            cn = y(ee, "scalar"),
            vl = !!y(ee, "flat"),
            Ei = P(ee),
            qn = $e,
            ho = [],
            Ci = C.width * Ei.x,
            mo = C.height * Ei.y;
          qn--;
        )
          ho.push(
            H({
              x: Ci,
              y: mo,
              angle: Be,
              spread: Ye,
              startVelocity: ot,
              color: Si[qn % Si.length],
              shape: Ue[p(0, Ue.length)],
              ticks: gl,
              decay: Xn,
              gravity: xi,
              drift: Kt,
              scalar: cn,
              flat: vl,
            }),
          );
        return re ? re.addFettis(ho) : ((re = Z(C, ho, G, Te, _e)), re.promise);
      }
      function ce(ee) {
        var Te = V || y(ee, "disableForReducedMotion", Boolean),
          _e = y(ee, "zIndex", Number);
        if (Te && se)
          return u(function (ot) {
            ot();
          });
        (j && re
          ? (C = re.canvas)
          : j && !C && ((C = F(_e)), document.body.appendChild(C)),
          L && !ne && G(C));
        var $e = { width: C.width, height: C.height };
        (D && !ne && D.init(C),
          (ne = !0),
          D && (C.__confetti_initialized = !0));
        function Be() {
          if (D) {
            var ot = {
              getBoundingClientRect: function () {
                if (!j) return C.getBoundingClientRect();
              },
            };
            (G(ot),
              D.postMessage({
                resize: { width: ot.width, height: ot.height },
              }));
            return;
          }
          $e.width = $e.height = null;
        }
        function Ye() {
          ((re = null),
            L && ((z = !1), t.removeEventListener("resize", Be)),
            j &&
              C &&
              (document.body.contains(C) && document.body.removeChild(C),
              (C = null),
              (ne = !1)));
        }
        return (
          L && !z && ((z = !0), t.addEventListener("resize", Be, !1)),
          D ? D.fire(ee, $e, Ye) : le(ee, $e, Ye)
        );
      }
      return (
        (ce.reset = function () {
          (D && D.reset(), re && re.reset());
        }),
        ce
      );
    }
    var J;
    function Q() {
      return (J || (J = $(null, { useWorker: !0, resize: !0 })), J);
    }
    function K(C, E, j, L, z, V, W) {
      var D = new Path2D(C),
        G = new Path2D();
      G.addPath(D, new DOMMatrix(E));
      var ne = new Path2D();
      return (
        ne.addPath(
          G,
          new DOMMatrix([
            Math.cos(W) * z,
            Math.sin(W) * z,
            -Math.sin(W) * V,
            Math.cos(W) * V,
            j,
            L,
          ]),
        ),
        ne
      );
    }
    function R(C) {
      if (!s)
        throw new Error("path confetti are not supported in this browser");
      var E, j;
      typeof C == "string" ? (E = C) : ((E = C.path), (j = C.matrix));
      var L = new Path2D(E),
        z = document.createElement("canvas"),
        V = z.getContext("2d");
      if (!j) {
        for (
          var W = 1e3, D = W, G = W, ne = 0, se = 0, re, le, ce = 0;
          ce < W;
          ce += 2
        )
          for (var ee = 0; ee < W; ee += 2)
            V.isPointInPath(L, ce, ee, "nonzero") &&
              ((D = Math.min(D, ce)),
              (G = Math.min(G, ee)),
              (ne = Math.max(ne, ce)),
              (se = Math.max(se, ee)));
        ((re = ne - D), (le = se - G));
        var Te = 10,
          _e = Math.min(Te / re, Te / le);
        j = [
          _e,
          0,
          0,
          _e,
          -Math.round(re / 2 + D) * _e,
          -Math.round(le / 2 + G) * _e,
        ];
      }
      return { type: "path", path: E, matrix: j };
    }
    function M(C) {
      var E,
        j = 1,
        L = "#000000",
        z =
          '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof C == "string"
        ? (E = C)
        : ((E = C.text),
          (j = "scalar" in C ? C.scalar : j),
          (z = "fontFamily" in C ? C.fontFamily : z),
          (L = "color" in C ? C.color : L));
      var V = 10 * j,
        W = "" + V + "px " + z,
        D = new OffscreenCanvas(V, V),
        G = D.getContext("2d");
      G.font = W;
      var ne = G.measureText(E),
        se = Math.ceil(ne.actualBoundingBoxRight + ne.actualBoundingBoxLeft),
        re = Math.ceil(
          ne.actualBoundingBoxAscent + ne.actualBoundingBoxDescent,
        ),
        le = 2,
        ce = ne.actualBoundingBoxLeft + le,
        ee = ne.actualBoundingBoxAscent + le;
      ((se += le + le),
        (re += le + le),
        (D = new OffscreenCanvas(se, re)),
        (G = D.getContext("2d")),
        (G.font = W),
        (G.fillStyle = L),
        G.fillText(E, ce, ee));
      var Te = 1 / j;
      return {
        type: "bitmap",
        bitmap: D.transferToImageBitmap(),
        matrix: [Te, 0, 0, Te, (-se * Te) / 2, (-re * Te) / 2],
      };
    }
    ((n.exports = function () {
      return Q().apply(this, arguments);
    }),
      (n.exports.reset = function () {
        Q().reset();
      }),
      (n.exports.create = $),
      (n.exports.shapeFromPath = R),
      (n.exports.shapeFromText = M));
  })(
    (function () {
      return typeof window < "u"
        ? window
        : typeof self < "u"
          ? self
          : this || {};
    })(),
    wi,
    !1,
  );
  const pE = wi.exports;
  wi.exports.create;
  const hE = ({ onRevealed: e, revealed: t }) => {
      const n = S.useRef(null),
        r = S.useRef(null),
        o = S.useRef(!1),
        [i, s] = S.useState(!1);
      S.useEffect(() => {
        const c = n.current,
          x = r.current;
        if (!c || !x) return;
        const g = window.devicePixelRatio || 1,
          y = () => {
            const h = x.getBoundingClientRect();
            ((c.width = h.width * g),
              (c.height = h.height * g),
              (c.style.width = `${h.width}px`),
              (c.style.height = `${h.height}px`));
            const p = c.getContext("2d");
            if (!p) return;
            p.scale(g, g);
            const v = p.createLinearGradient(0, 0, h.width, h.height);
            (v.addColorStop(0, "#d4a574"),
              v.addColorStop(0.5, "#f5d199"),
              v.addColorStop(1, "#b8853f"),
              (p.fillStyle = v),
              p.fillRect(0, 0, h.width, h.height),
              (p.fillStyle = "rgba(255,255,255,0.35)"),
              (p.font = '600 14px "Cinzel", serif'),
              (p.textAlign = "center"),
              (p.textBaseline = "middle"),
              p.fillText("✦  SCRATCH TO REVEAL  ✦", h.width / 2, h.height / 2));
          };
        return (
          y(),
          window.addEventListener("resize", y),
          () => window.removeEventListener("resize", y)
        );
      }, []);
      const l = () => {
          const c = (x) =>
            pE({
              particleCount: 120,
              spread: 90,
              startVelocity: 45,
              origin: x,
              colors: ["#d4a574", "#f5d199", "#c75a6b", "#7a8a6a", "#fff"],
              scalar: 1.1,
            });
          (c({ x: 0.2, y: 0.4 }),
            c({ x: 0.5, y: 0.3 }),
            c({ x: 0.8, y: 0.4 }),
            setTimeout(() => c({ x: 0.5, y: 0.5 }), 250));
        },
        a = () => {
          const c = n.current;
          if (!c || i) return;
          const x = c.getContext("2d");
          if (!x) return;
          const { width: g, height: y } = c,
            h = x.getImageData(0, 0, g, y).data;
          let p = 0;
          for (let k = 3; k < h.length; k += 160) h[k] < 60 && p++;
          const v = h.length / 160;
          p / v > 0.45 && (s(!0), x.clearRect(0, 0, g, y), l(), e());
        },
        u = (c, x) => {
          const g = n.current;
          if (!g) return;
          const y = g.getContext("2d");
          if (!y) return;
          const h = g.getBoundingClientRect();
          ((y.globalCompositeOperation = "destination-out"),
            y.beginPath(),
            y.arc(c - h.left, x - h.top, 28, 0, Math.PI * 2),
            y.fill());
        },
        d = () => {
          o.current = !0;
        },
        f = () => {
          ((o.current = !1), a());
        },
        m = (c) => {
          o.current && (c.preventDefault(), u(c.clientX, c.clientY));
        };
      return w.jsxs("div", {
        ref: r,
        className:
          "relative mx-auto w-full max-w-md h-32 rounded-2xl overflow-hidden border-2 border-gold-soft shadow-elegant select-none",
        children: [
          w.jsxs("div", {
            className:
              "absolute inset-0 flex flex-col items-center justify-center bg-cream",
            children: [
              w.jsx("p", {
                className:
                  "font-cinzel tracking-[0.35em] text-sage-deep text-base",
                children: "SAVE THE DATE",
              }),
              w.jsx("p", {
                className: "font-script text-4xl text-rose-deep mt-1",
                children: "6th July 2026",
              }),
            ],
          }),
          !t &&
            w.jsx("canvas", {
              ref: n,
              onPointerDown: (c) => {
                (c.target.setPointerCapture(c.pointerId),
                  d(),
                  u(c.clientX, c.clientY));
              },
              onPointerMove: m,
              onPointerUp: f,
              onPointerLeave: f,
              className:
                "absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none",
            }),
        ],
      });
    },
    mE = Mm(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    ),
    mg = S.forwardRef(
      ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
        const s = r ? Uw : "button";
        return w.jsx(s, {
          className: Yn(mE({ variant: t, size: n, className: e })),
          ref: i,
          ...o,
        });
      },
    );
  mg.displayName = "Button";
  const gE = [
      {
        title: "Ganesh Poojan",
        description: "Seeking blessings from the Lord Ganesha.",
        day: "SUN",
        date: "July 5, 2026",
        time: "09:00 AM onwards",
        venue: "Rajmahal Resort, Nagda Bypass Road, Ujjain",
        dressCode:
          "Traditional festive — vibrant colours and twinkling embroidery",
        icon: "🛕",
        bg: oE,
        dark: !0,
        couple: lE,
      },
      {
        title: "Haldi Carnival",
        description: "A joyful morning of haldi, blessings and laughter",
        day: "SUN",
        date: "July 5, 2026",
        time: "02:30 PM onwards",
        venue: "Rajmahal Resort, Nagda Bypass Road, Ujjain",
        dressCode: "Yellow florals — bright, breezy and traditional",
        icon: "🌼",
        bg: tE,
        dark: !0,
        couple: iE,
      },
      {
        title: "Sangeet",
        description: "A spirited night of song, dance and laughter",
        day: "SUN",
        date: "July 5, 2026",
        time: "08:00 PM onwards",
        venue: "Rajmahal Resort, Nagda Bypass Road, Ujjain",
        dressCode:
          "Traditional festive — vibrant colours and twinkling embroidery",
        icon: "🎶",
        bg: eE,
        dark: !0,
        couple: uE,
      },
      {
        title: "Shubh Lagna & Phere",
        description: "The sacred seven vows under the mandap",
        day: "MON",
        date: "July 6, 2026",
        time: "12:00 PM onwards",
        venue: "Rajmahal Resort, Nagda Bypass Road, Ujjain",
        dressCode: "Indian formal — silks, sherwanis and timeless elegance",
        icon: "💍",
        bg: nE,
        dark: !0,
        couple: sE,
      },
      {
        title: "Reception & Varmala",
        description: "The exchange of garlands and a joyous celebration",
        day: "MON",
        date: "July 6, 2026",
        time: "08:00 PM onwards",
        venue: "Rajmahal Resort, Nagda Bypass Road, Ujjain",
        dressCode: "Indian formal — elegant and festive",
        icon: "🌸",
        bg: rE,
        dark: !0,
        couple: aE,
      },
    ],
    vE = () => {
      const [e, t] = S.useState(!1);
      return w.jsxs("main", {
        className: "relative animate-fade-in",
        children: [
          w.jsxs("section", {
            className: "relative min-h-screen w-full overflow-hidden",
            children: [
              w.jsx("img", {
                src: ZS,
                alt: "Raj and Shivani wedding illustration",
                className: "absolute inset-0 w-full h-full object-cover",
                width: 1920,
                height: 1080,
              }),
              w.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream",
              }),
              w.jsxs("div", {
                className:
                  "relative z-10 min-h-screen flex flex-col items-center pt-12 sm:pt-20 px-6 text-center",
                children: [
                  w.jsxs("div", {
                    className: "text-rose-deep animate-fade-up",
                    children: [
                      w.jsx("img", {
                        src: JS,
                        alt: "Lord Ganesha",
                        width: 96,
                        height: 96,
                        loading: "lazy",
                        className:
                          "mx-auto h-24 w-24 object-contain drop-shadow-md",
                      }),
                      w.jsx("p", {
                        className:
                          "font-serif-display italic text-lg sm:text-xl mt-2",
                        children: "‖ Shree Ganeshaya Namah ‖",
                      }),
                    ],
                  }),
                  w.jsx("p", {
                    className:
                      "mt-8 max-w-md font-serif-display text-base sm:text-lg text-rose-deep animate-fade-up delay-200",
                    children:
                      "We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of",
                  }),
                  w.jsx("h1", {
                    className: "mt-6 animate-fade-up delay-300",
                    children: w.jsx("span", {
                      className:
                        "block font-script text-7xl sm:text-8xl md:text-9xl text-rose leading-none",
                      children: "Shivani",
                    }),
                  }),
                  w.jsxs("p", {
                    className:
                      "mt-3 font-serif-display text-base sm:text-lg text-foreground/80",
                    children: [
                      "D/o Mr. Sunil Datt Rawal",
                      w.jsx("br", {}),
                      "& Mrs. Vinita Rawal",
                    ],
                  }),
                  w.jsx("p", {
                    className:
                      "mt-5 font-script text-3xl sm:text-4xl text-rose-deep italic",
                    children: "with",
                  }),
                  w.jsx("h1", {
                    className: "mt-2",
                    children: w.jsx("span", {
                      className:
                        "block font-script text-7xl sm:text-8xl md:text-9xl text-rose leading-none",
                      children: "Raj",
                    }),
                  }),
                  w.jsxs("p", {
                    className:
                      "mt-3 font-serif-display text-base sm:text-lg text-foreground/80 pb-12",
                    children: [
                      "S/o Mr. Vijay Alwani",
                      w.jsx("br", {}),
                      "& Mrs. Pooja Alwani",
                    ],
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("section", {
            className: "relative py-20 px-6 bg-cream",
            children: [
              w.jsx(To, {}),
              w.jsxs("div", {
                className: "relative max-w-3xl mx-auto text-center",
                children: [
                  w.jsx(Po, {}),
                  w.jsx("div", {
                    className: "mb-10",
                    children: w.jsx(hE, {
                      revealed: e,
                      onRevealed: () => t(!0),
                    }),
                  }),
                  w.jsx("div", {
                    className: `transition-all duration-700 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"}`,
                    "aria-hidden": !e,
                    children: w.jsx(dE, {}),
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("section", {
            className: "relative py-20 px-6 bg-sage-soft bg-secondary",
            children: [
              w.jsx(To, {}),
              w.jsxs("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                  w.jsxs("div", {
                    className: "text-center mb-16",
                    children: [
                      w.jsx("h2", {
                        className:
                          "font-script text-5xl sm:text-6xl text-rose-deep mt-2",
                        children: "Events Schedule",
                      }),
                      w.jsx(Po, {}),
                    ],
                  }),
                  w.jsx("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: gE.map((n, r) =>
                      w.jsx(
                        fE,
                        {
                          ...n,
                          imageSide: ["right", "left", "left", "right", "left"][
                            r
                          ],
                        },
                        n.title,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("section", {
            className: "relative py-24 px-6 bg-cream text-center",
            children: [
              w.jsx(To, {}),
              w.jsxs("div", {
                className: "relative max-w-2xl mx-auto",
                children: [
                  w.jsx("h2", {
                    className:
                      "font-script text-5xl sm:text-6xl text-rose-deep",
                    children: "Awaiting Your Noble Presence",
                  }),
                  w.jsx(Po, {}),
                  w.jsx("p", {
                    className:
                      "font-serif-display italic text-xl text-foreground/80 leading-relaxed",
                    children:
                      "Because meeting two souls requires twice the fun — and you!",
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("section", {
            className: "relative py-20 px-6 bg-sage-soft bg-secondary",
            children: [
              w.jsx(To, {}),
              w.jsxs("div", {
                className: "relative max-w-5xl mx-auto text-center",
                children: [
                  w.jsx("p", {
                    className:
                      "font-cinzel text-xs text-sage-deep tracking-widest",
                    children: "WITH LOVE",
                  }),
                  w.jsx("h2", {
                    className:
                      "font-script text-5xl sm:text-6xl text-rose-deep mt-2",
                    children: "The Families",
                  }),
                  w.jsx(Po, {}),
                  w.jsx("div", {
                    className: "mt-10",
                    children: w.jsx(yE, {
                      title: "Awaiting your Gracious Presence",
                      names: ["Mr. Sunil Datt Rawal", "Mrs. Vinita Rawal"],
                    }),
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("section", {
            className: "relative py-20 px-6 bg-cream",
            children: [
              w.jsx(To, {}),
              w.jsxs("div", {
                className: "relative max-w-4xl mx-auto text-center",
                children: [
                  w.jsx("p", {
                    className:
                      "font-cinzel text-xs text-sage-deep tracking-widest",
                    children: "VENUE",
                  }),
                  w.jsx("h2", {
                    className:
                      "font-script text-5xl sm:text-6xl text-rose-deep mt-2",
                    children: "Where We Celebrate",
                  }),
                  w.jsx(Po, {}),
                  w.jsx("p", {
                    className:
                      "font-serif-display text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto",
                    children: "Rajmahal Resort, Nagda Bypass Road, Ujjain",
                  }),
                  w.jsx("div", {
                    className:
                      "mt-10 rounded-2xl overflow-hidden border border-gold-soft shadow-elegant",
                    children: w.jsx("iframe", {
                      title: "Venue map",
                      src: "./maps.html",
                      className: "w-full h-[360px]",
                      loading: "lazy",
                    }),
                  }),
                  w.jsx("a", {
                    href: "https://www.google.com/maps/dir/?api=1&destination=23.2068555,75.7483295",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary hover:bg-primary/90 h-11 gradient-gold text-white border-0 hover:opacity-90 rounded-full px-8 shadow-gold mt-8",
                    children: [
                      w.jsx(Dx, { className: "mr-2 h-4 w-4" }),
                      " Get Directions",
                    ],
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("footer", {
            className:
              "bg-foreground text-cream py-16 px-6 text-center text-primary-foreground",
            children: [
              w.jsx("p", {
                className:
                  "font-cinzel text-xs tracking-[0.4em] text-gold-soft",
                children: "WITH LOVE",
              }),
              w.jsx("h3", {
                className:
                  "font-script text-5xl sm:text-6xl text-cream mt-3 text-primary-foreground",
                children: "Shivani & Raj",
              }),
              w.jsxs("div", {
                className: "my-5 flex items-center justify-center gap-3",
                children: [
                  w.jsx("span", { className: "h-px w-12 bg-gold-soft/40" }),
                  w.jsx("span", { className: "text-2xl", children: "💐" }),
                  w.jsx("span", { className: "h-px w-12 bg-gold-soft/40" }),
                ],
              }),
              w.jsx("p", {
                className: "font-serif-display text-lg italic",
                children: "6th July 2026",
              }),
              w.jsx("p", {
                className:
                  "mt-3 font-cinzel text-xs tracking-widest text-cream/70",
                children: "#RAJSHIVANI",
              }),
            ],
          }),
        ],
      });
    },
    Po = () =>
      w.jsxs("div", {
        className:
          "my-6 flex items-center justify-center gap-3 text-primary-foreground",
        children: [
          w.jsx("span", { className: "h-px w-16 bg-gold-soft" }),
          w.jsx("span", { className: "text-gold text-lg", children: "❀" }),
          w.jsx("span", { className: "h-px w-16 bg-gold-soft" }),
        ],
      }),
    yE = ({ title: e, subtitle: t, names: n }) =>
      w.jsxs("div", {
        className:
          "bg-cream/80 backdrop-blur-sm border border-gold-soft rounded-2xl p-8 shadow-soft",
        children: [
          w.jsx("p", {
            className: "font-cinzel text-xs text-sage-deep tracking-widest",
            children: e.toUpperCase(),
          }),
          w.jsxs("div", {
            className: "my-4 flex items-center justify-center gap-2",
            children: [
              w.jsx("span", { className: "h-px w-8 bg-gold-soft" }),
              w.jsx("span", { className: "text-gold", children: "❀" }),
              w.jsx("span", { className: "h-px w-8 bg-gold-soft" }),
            ],
          }),
          t &&
            w.jsx("p", {
              className:
                "font-serif-display italic text-sm text-sage-deep mb-2",
              children: t,
            }),
          n.map((r) =>
            w.jsx(
              "p",
              {
                className: "font-serif-display text-xl text-foreground my-1",
                children: r,
              },
              r,
            ),
          ),
        ],
      }),
    To = () =>
      w.jsxs(w.Fragment, {
        children: [
          w.jsx("span", {
            className:
              "pointer-events-none absolute top-6 left-4 text-4xl opacity-20",
            children: "🌿",
          }),
          w.jsx("span", {
            className:
              "pointer-events-none absolute top-12 right-6 text-3xl opacity-20",
            children: "🌸",
          }),
          w.jsx("span", {
            className:
              "pointer-events-none absolute bottom-10 left-10 text-3xl opacity-20",
            children: "🌼",
          }),
          w.jsx("span", {
            className:
              "pointer-events-none absolute bottom-6 right-4 text-4xl opacity-20",
            children: "🌿",
          }),
        ],
      }),
    mf = ["🌸", "🌸", "🌿", "🌸", "🌼", "🌿", "🌸"],
    wE = ({ count: e = 18 }) =>
      w.jsx("div", {
        className: "pointer-events-none fixed inset-0 z-10 overflow-hidden",
        children: Array.from({ length: e }).map((t, n) => {
          const r = Math.random() * 100,
            o = 14 + Math.random() * 16,
            i = Math.random() * 12,
            s = 14 + Math.random() * 22,
            l = mf[n % mf.length];
          return w.jsx(
            "span",
            {
              className: "absolute animate-float-petal",
              style: {
                left: `${r}%`,
                top: "-10vh",
                fontSize: `${s}px`,
                animationDuration: `${o}s`,
                animationDelay: `${i}s`,
                filter: "drop-shadow(0 2px 4px hsl(var(--ink) / 0.1))",
              },
              children: l,
            },
            n,
          );
        }),
      }),
    xE = () =>
      w.jsxs(w.Fragment, {
        children: [
          w.jsx("style", {
            children: `
      @keyframes butterfly-fly {
        0%   { transform: translate(-10vw, 60vh) rotate(-8deg) scale(1); }
        20%  { transform: translate(20vw, 35vh) rotate(6deg)  scale(1.05); }
        40%  { transform: translate(45vw, 55vh) rotate(-4deg) scale(0.95); }
        60%  { transform: translate(65vw, 25vh) rotate(8deg)  scale(1.1); }
        80%  { transform: translate(85vw, 45vh) rotate(-6deg) scale(1); }
        100% { transform: translate(110vw, 30vh) rotate(4deg) scale(1); }
      }
      @keyframes butterfly-flap {
        0%, 100% { transform: scaleX(1); }
        50%      { transform: scaleX(0.55); }
      }
      .butterfly-path {
        position: fixed;
        top: 0; left: 0;
        z-index: 40;
        pointer-events: none;
        animation: butterfly-fly 18s linear infinite;
        will-change: transform;
      }
      .butterfly-wings {
        display: inline-block;
        animation: butterfly-flap 0.25s ease-in-out infinite;
        transform-origin: center;
      }
    `,
          }),
          w.jsx("div", {
            className: "butterfly-path",
            "aria-hidden": !0,
            children: w.jsx("span", {
              className: "butterfly-wings",
              children: w.jsx("svg", {
                width: "38",
                height: "32",
                viewBox: "0 0 64 52",
                xmlns: "http://www.w3.org/2000/svg",
                children: w.jsxs("g", {
                  children: [
                    w.jsx("ellipse", {
                      cx: "32",
                      cy: "26",
                      rx: "1.6",
                      ry: "11",
                      fill: "#1f2937",
                    }),
                    w.jsx("circle", {
                      cx: "32",
                      cy: "14",
                      r: "2.2",
                      fill: "#1f2937",
                    }),
                    w.jsx("path", {
                      d: "M32 13 C 29 8, 27 6, 25 5",
                      stroke: "#1f2937",
                      strokeWidth: "1",
                      fill: "none",
                      strokeLinecap: "round",
                    }),
                    w.jsx("path", {
                      d: "M32 13 C 35 8, 37 6, 39 5",
                      stroke: "#1f2937",
                      strokeWidth: "1",
                      fill: "none",
                      strokeLinecap: "round",
                    }),
                    w.jsx("path", {
                      d: "M30 22 C 10 10, 2 22, 6 32 C 10 42, 24 38, 30 30 Z",
                      fill: "#3b82f6",
                      opacity: "0.95",
                    }),
                    w.jsx("path", {
                      d: "M30 30 C 18 38, 10 44, 14 48 C 20 50, 28 42, 30 36 Z",
                      fill: "#60a5fa",
                      opacity: "0.95",
                    }),
                    w.jsx("path", {
                      d: "M34 22 C 54 10, 62 22, 58 32 C 54 42, 40 38, 34 30 Z",
                      fill: "#3b82f6",
                      opacity: "0.95",
                    }),
                    w.jsx("path", {
                      d: "M34 30 C 46 38, 54 44, 50 48 C 44 50, 36 42, 34 36 Z",
                      fill: "#60a5fa",
                      opacity: "0.95",
                    }),
                    w.jsx("circle", {
                      cx: "14",
                      cy: "26",
                      r: "1.6",
                      fill: "#fff",
                      opacity: "0.85",
                    }),
                    w.jsx("circle", {
                      cx: "50",
                      cy: "26",
                      r: "1.6",
                      fill: "#fff",
                      opacity: "0.85",
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    SE = ({ play: e, src: t = "./BGMusic.mp3" }) => {
      const n = S.useRef(null),
        [r, o] = S.useState(!1);
      return (
        S.useEffect(() => {
          const i = n.current;
          i &&
            ((i.volume = 0.45),
            (i.loop = !0),
            e && !r ? i.play().catch(() => {}) : i.pause());
        }, [e, r]),
        w.jsxs(w.Fragment, {
          children: [
            w.jsx("audio", { ref: n, src: t, preload: "auto" }),
            e &&
              w.jsx("button", {
                type: "button",
                "aria-label": r
                  ? "Unmute background music"
                  : "Mute background music",
                onClick: () => {
                  const i = n.current;
                  i && (r ? e && i.play().catch(() => {}) : i.pause());
                  o(!r);
                },
                className:
                  "fixed bottom-5 right-5 z-50 h-11 w-11 rounded-full bg-foreground/80 text-cream backdrop-blur shadow-elegant flex items-center justify-center hover:scale-105 transition",
                children: r
                  ? w.jsx(zx, { className: "h-5 w-5" })
                  : w.jsx(Fx, { className: "h-5 w-5" }),
              }),
          ],
        })
      );
    },
    EE = () => {
      const [e, t] = S.useState(!1),
        [n, r] = S.useState(!1);
      S.useEffect(() => {
        ((document.title = "Raj & Shivani — Wedding Invitation · 6 July 2026"),
          (
            document.querySelector('meta[name="description"]') ||
            (() => {
              const s = document.createElement("meta");
              return (
                s.setAttribute("name", "description"),
                document.head.appendChild(s),
                s
              );
            })()
          ).setAttribute(
            "content",
            "Join Raj & Shivani for their wedding celebration on 6 July 2026 at Rajmahal Resort, Nagda Bypass Road, Ujjain.",
          ));
      }, []);
      const o = () => {
        (r(!0), setTimeout(() => t(!0), 900));
      };
      return w.jsxs("div", {
        className: "relative",
        children: [
          w.jsx(wE, {}),
          e && w.jsx(xE, {}),
          w.jsx(SE, { play: n || e }),
          e ? w.jsx(vE, {}) : w.jsx(qS, { onOpen: o, opening: n }),
        ],
      });
    },
    CE = () => {
      const e = tm();
      return (
        S.useEffect(() => {
          console.error(
            "404 Error: User attempted to access non-existent route:",
            e.pathname,
          );
        }, [e.pathname]),
        w.jsx("div", {
          className: "flex min-h-screen items-center justify-center bg-muted",
          children: w.jsxs("div", {
            className: "text-center",
            children: [
              w.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404",
              }),
              w.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found",
              }),
              w.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home",
              }),
            ],
          }),
        })
      );
    },
    kE = new m0(),
    bE = () =>
      w.jsx(v0, {
        client: kE,
        children: w.jsxs(GS, {
          children: [
            w.jsx(E1, {}),
            w.jsx(Aw, {}),
            w.jsx(nw, {
              children: w.jsxs(J0, {
                children: [
                  w.jsx(Ya, { path: "/", element: w.jsx(EE, {}) }),
                  w.jsx(Ya, { path: "*", element: w.jsx(CE, {}) }),
                ],
              }),
            }),
          ],
        }),
      });
  zh(document.getElementById("root")).render(w.jsx(bE, {}));
});
export default PE();
