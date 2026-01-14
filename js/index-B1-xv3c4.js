var Ad = (e) => {
    throw TypeError(e);
};
var ol = (e, t, n) => t.has(e) || Ad("Cannot " + n);
var j = (e, t, n) => (ol(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Z = (e, t, n) =>
        t.has(e)
            ? Ad("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, n),
    U = (e, t, n, r) => (ol(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Ae = (e, t, n) => (ol(e, t, "access private method"), n);
var Ks = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n);
    },
    get _() {
        return j(e, t, r);
    },
});
function vy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : { enumerable: !0, get: () => r[o] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
        for (const s of o)
            if (s.type === "childList")
                for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const s = {};
        return (
            o.integrity && (s.integrity = o.integrity),
            o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (s.credentials = "include")
                : o.crossOrigin === "anonymous"
                  ? (s.credentials = "omit")
                  : (s.credentials = "same-origin"),
            s
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s);
    }
})();
function Ym(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qm = { exports: {} },
    xi = {},
    Xm = { exports: {} },
    Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _s = Symbol.for("react.element"),
    xy = Symbol.for("react.portal"),
    yy = Symbol.for("react.fragment"),
    wy = Symbol.for("react.strict_mode"),
    by = Symbol.for("react.profiler"),
    Ny = Symbol.for("react.provider"),
    Sy = Symbol.for("react.context"),
    Ey = Symbol.for("react.forward_ref"),
    Cy = Symbol.for("react.suspense"),
    jy = Symbol.for("react.memo"),
    ky = Symbol.for("react.lazy"),
    Od = Symbol.iterator;
function Py(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Od && e[Od]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Jm = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Zm = Object.assign,
    ep = {};
function Co(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = ep), (this.updater = n || Jm);
}
Co.prototype.isReactComponent = {};
Co.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Co.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tp() {}
tp.prototype = Co.prototype;
function nu(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = ep), (this.updater = n || Jm);
}
var ru = (nu.prototype = new tp());
ru.constructor = nu;
Zm(ru, Co.prototype);
ru.isPureReactComponent = !0;
var _d = Array.isArray,
    np = Object.prototype.hasOwnProperty,
    ou = { current: null },
    rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function op(e, t, n) {
    var r,
        o = {},
        s = null,
        a = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t))
            np.call(t, r) && !rp.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
        o.children = c;
    }
    if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
    return { $$typeof: _s, type: e, key: s, ref: a, props: o, _owner: ou.current };
}
function Ry(e, t) {
    return { $$typeof: _s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function su(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _s;
}
function Ty(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Md = /\/+/g;
function sl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ty("" + e.key) : t.toString(36);
}
function wa(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
        switch (s) {
            case "string":
            case "number":
                a = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case _s:
                    case xy:
                        a = !0;
                }
        }
    if (a)
        return (
            (a = e),
            (o = o(a)),
            (e = r === "" ? "." + sl(a, 0) : r),
            _d(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Md, "$&/") + "/"),
                  wa(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null &&
                  (su(o) &&
                      (o = Ry(
                          o,
                          n + (!o.key || (a && a.key === o.key) ? "" : ("" + o.key).replace(Md, "$&/") + "/") + e
                      )),
                  t.push(o)),
            1
        );
    if (((a = 0), (r = r === "" ? "." : r + ":"), _d(e)))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var c = r + sl(s, l);
            a += wa(s, t, n, c, o);
        }
    else if (((c = Py(e)), typeof c == "function"))
        for (e = c.call(e), l = 0; !(s = e.next()).done; )
            (s = s.value), (c = r + sl(s, l++)), (a += wa(s, t, n, c, o));
    else if (s === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return a;
}
function Gs(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        wa(e, r, "", "", function (s) {
            return t.call(n, s, o++);
        }),
        r
    );
}
function Ay(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ue = { current: null },
    ba = { transition: null },
    Oy = { ReactCurrentDispatcher: Ue, ReactCurrentBatchConfig: ba, ReactCurrentOwner: ou };
function sp() {
    throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
    map: Gs,
    forEach: function (e, t, n) {
        Gs(
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
            Gs(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Gs(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!su(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
Y.Component = Co;
Y.Fragment = yy;
Y.Profiler = by;
Y.PureComponent = nu;
Y.StrictMode = wy;
Y.Suspense = Cy;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
Y.act = sp;
Y.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Zm({}, e.props),
        o = e.key,
        s = e.ref,
        a = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((s = t.ref), (a = ou.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (c in t) np.call(t, c) && !rp.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (c === 1) r.children = n;
    else if (1 < c) {
        l = Array(c);
        for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
        r.children = l;
    }
    return { $$typeof: _s, type: e.type, key: o, ref: s, props: r, _owner: a };
};
Y.createContext = function (e) {
    return (
        (e = {
            $$typeof: Sy,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Ny, _context: e }),
        (e.Consumer = e)
    );
};
Y.createElement = op;
Y.createFactory = function (e) {
    var t = op.bind(null, e);
    return (t.type = e), t;
};
Y.createRef = function () {
    return { current: null };
};
Y.forwardRef = function (e) {
    return { $$typeof: Ey, render: e };
};
Y.isValidElement = su;
Y.lazy = function (e) {
    return { $$typeof: ky, _payload: { _status: -1, _result: e }, _init: Ay };
};
Y.memo = function (e, t) {
    return { $$typeof: jy, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
    var t = ba.transition;
    ba.transition = {};
    try {
        e();
    } finally {
        ba.transition = t;
    }
};
Y.unstable_act = sp;
Y.useCallback = function (e, t) {
    return Ue.current.useCallback(e, t);
};
Y.useContext = function (e) {
    return Ue.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
    return Ue.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
    return Ue.current.useEffect(e, t);
};
Y.useId = function () {
    return Ue.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
    return Ue.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
    return Ue.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
    return Ue.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
    return Ue.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
    return Ue.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
    return Ue.current.useRef(e);
};
Y.useState = function (e) {
    return Ue.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
    return Ue.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
    return Ue.current.useTransition();
};
Y.version = "18.3.1";
Xm.exports = Y;
var h = Xm.exports;
const A = Ym(h),
    au = vy({ __proto__: null, default: A }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _y = h,
    My = Symbol.for("react.element"),
    Iy = Symbol.for("react.fragment"),
    Ly = Object.prototype.hasOwnProperty,
    Dy = _y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Fy = { key: !0, ref: !0, __self: !0, __source: !0 };
function ap(e, t, n) {
    var r,
        o = {},
        s = null,
        a = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
    for (r in t) Ly.call(t, r) && !Fy.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: My, type: e, key: s, ref: a, props: o, _owner: Dy.current };
}
xi.Fragment = Iy;
xi.jsx = ap;
xi.jsxs = ap;
qm.exports = xi;
var i = qm.exports,
    ip = { exports: {} },
    nt = {},
    lp = { exports: {} },
    cp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(P, R) {
        var I = P.length;
        P.push(R);
        e: for (; 0 < I; ) {
            var W = (I - 1) >>> 1,
                z = P[W];
            if (0 < o(z, R)) (P[W] = R), (P[I] = z), (I = W);
            else break e;
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0];
    }
    function r(P) {
        if (P.length === 0) return null;
        var R = P[0],
            I = P.pop();
        if (I !== R) {
            P[0] = I;
            e: for (var W = 0, z = P.length, Q = z >>> 1; W < Q; ) {
                var q = 2 * (W + 1) - 1,
                    ye = P[q],
                    Te = q + 1,
                    ee = P[Te];
                if (0 > o(ye, I))
                    Te < z && 0 > o(ee, ye) ? ((P[W] = ee), (P[Te] = I), (W = Te)) : ((P[W] = ye), (P[q] = I), (W = q));
                else if (Te < z && 0 > o(ee, I)) (P[W] = ee), (P[Te] = I), (W = Te);
                else break e;
            }
        }
        return R;
    }
    function o(P, R) {
        var I = P.sortIndex - R.sortIndex;
        return I !== 0 ? I : P.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function () {
            return s.now();
        };
    } else {
        var a = Date,
            l = a.now();
        e.unstable_now = function () {
            return a.now() - l;
        };
    }
    var c = [],
        u = [],
        d = 1,
        f = null,
        v = 3,
        m = !1,
        b = !1,
        p = !1,
        y = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(P) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null) r(u);
            else if (R.startTime <= P) r(u), (R.sortIndex = R.expirationTime), t(c, R);
            else break;
            R = n(u);
        }
    }
    function N(P) {
        if (((p = !1), w(P), !b))
            if (n(c) !== null) (b = !0), F(S);
            else {
                var R = n(u);
                R !== null && V(N, R.startTime - P);
            }
    }
    function S(P, R) {
        (b = !1), p && ((p = !1), g(k), (k = -1)), (m = !0);
        var I = v;
        try {
            for (w(R), f = n(c); f !== null && (!(f.expirationTime > R) || (P && !$())); ) {
                var W = f.callback;
                if (typeof W == "function") {
                    (f.callback = null), (v = f.priorityLevel);
                    var z = W(f.expirationTime <= R);
                    (R = e.unstable_now()), typeof z == "function" ? (f.callback = z) : f === n(c) && r(c), w(R);
                } else r(c);
                f = n(c);
            }
            if (f !== null) var Q = !0;
            else {
                var q = n(u);
                q !== null && V(N, q.startTime - R), (Q = !1);
            }
            return Q;
        } finally {
            (f = null), (v = I), (m = !1);
        }
    }
    var E = !1,
        C = null,
        k = -1,
        _ = 5,
        O = -1;
    function $() {
        return !(e.unstable_now() - O < _);
    }
    function L() {
        if (C !== null) {
            var P = e.unstable_now();
            O = P;
            var R = !0;
            try {
                R = C(!0, P);
            } finally {
                R ? K() : ((E = !1), (C = null));
            }
        } else E = !1;
    }
    var K;
    if (typeof x == "function")
        K = function () {
            x(L);
        };
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel(),
            G = M.port2;
        (M.port1.onmessage = L),
            (K = function () {
                G.postMessage(null);
            });
    } else
        K = function () {
            y(L, 0);
        };
    function F(P) {
        (C = P), E || ((E = !0), K());
    }
    function V(P, R) {
        k = y(function () {
            P(e.unstable_now());
        }, R);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            b || m || ((b = !0), F(S));
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (_ = 0 < P ? Math.floor(1e3 / P) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return v;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(c);
        }),
        (e.unstable_next = function (P) {
            switch (v) {
                case 1:
                case 2:
                case 3:
                    var R = 3;
                    break;
                default:
                    R = v;
            }
            var I = v;
            v = R;
            try {
                return P();
            } finally {
                v = I;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, R) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var I = v;
            v = P;
            try {
                return R();
            } finally {
                v = I;
            }
        }),
        (e.unstable_scheduleCallback = function (P, R, I) {
            var W = e.unstable_now();
            switch (
                (typeof I == "object" && I !== null
                    ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? W + I : W))
                    : (I = W),
                P)
            ) {
                case 1:
                    var z = -1;
                    break;
                case 2:
                    z = 250;
                    break;
                case 5:
                    z = 1073741823;
                    break;
                case 4:
                    z = 1e4;
                    break;
                default:
                    z = 5e3;
            }
            return (
                (z = I + z),
                (P = { id: d++, callback: R, priorityLevel: P, startTime: I, expirationTime: z, sortIndex: -1 }),
                I > W
                    ? ((P.sortIndex = I),
                      t(u, P),
                      n(c) === null && P === n(u) && (p ? (g(k), (k = -1)) : (p = !0), V(N, I - W)))
                    : ((P.sortIndex = z), t(c, P), b || m || ((b = !0), F(S))),
                P
            );
        }),
        (e.unstable_shouldYield = $),
        (e.unstable_wrapCallback = function (P) {
            var R = v;
            return function () {
                var I = v;
                v = R;
                try {
                    return P.apply(this, arguments);
                } finally {
                    v = I;
                }
            };
        });
})(cp);
lp.exports = cp;
var zy = lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $y = h,
    tt = zy;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var up = new Set(),
    ss = {};
function Nr(e, t) {
    mo(e, t), mo(e + "Capture", t);
}
function mo(e, t) {
    for (ss[e] = t, e = 0; e < t.length; e++) up.add(t[e]);
}
var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Gl = Object.prototype.hasOwnProperty,
    By =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Id = {},
    Ld = {};
function Uy(e) {
    return Gl.call(Ld, e) ? !0 : Gl.call(Id, e) ? !1 : By.test(e) ? (Ld[e] = !0) : ((Id[e] = !0), !1);
}
function Vy(e, t, n, r) {
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
function Wy(e, t, n, r) {
    if (t === null || typeof t > "u" || Vy(e, t, n, r)) return !0;
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
function Ve(e, t, n, r, o, s, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = s),
        (this.removeEmptyString = a);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Re[e] = new Ve(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Re[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Re[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Re[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Re[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Re[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Re[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Re[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Re[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var iu = /[\-:]([a-z])/g;
function lu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(iu, lu);
        Re[t] = new Ve(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(iu, lu);
    Re[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(iu, lu);
    Re[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Re[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Re[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
    var o = Re.hasOwnProperty(t) ? Re[t] : null;
    (o !== null
        ? o.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (Wy(t, n, o, r) && (n = null),
        r || o === null
            ? Uy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var cn = $y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Qs = Symbol.for("react.element"),
    Dr = Symbol.for("react.portal"),
    Fr = Symbol.for("react.fragment"),
    uu = Symbol.for("react.strict_mode"),
    Ql = Symbol.for("react.profiler"),
    dp = Symbol.for("react.provider"),
    fp = Symbol.for("react.context"),
    du = Symbol.for("react.forward_ref"),
    Yl = Symbol.for("react.suspense"),
    ql = Symbol.for("react.suspense_list"),
    fu = Symbol.for("react.memo"),
    Nn = Symbol.for("react.lazy"),
    mp = Symbol.for("react.offscreen"),
    Dd = Symbol.iterator;
function Io(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Dd && e[Dd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var me = Object.assign,
    al;
function Ho(e) {
    if (al === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            al = (t && t[1]) || "";
        }
    return (
        `
` +
        al +
        e
    );
}
var il = !1;
function ll(e, t) {
    if (!e || il) return "";
    il = !0;
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
                    s = r.stack.split(`
`),
                    a = o.length - 1,
                    l = s.length - 1;
                1 <= a && 0 <= l && o[a] !== s[l];

            )
                l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== s[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if ((a--, l--, 0 > l || o[a] !== s[l])) {
                                var c =
                                    `
` + o[a].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        c.includes("<anonymous>") &&
                                        (c = c.replace("<anonymous>", e.displayName)),
                                    c
                                );
                            }
                        while (1 <= a && 0 <= l);
                    break;
                }
        }
    } finally {
        (il = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Ho(e) : "";
}
function Hy(e) {
    switch (e.tag) {
        case 5:
            return Ho(e.type);
        case 16:
            return Ho("Lazy");
        case 13:
            return Ho("Suspense");
        case 19:
            return Ho("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ll(e.type, !1)), e;
        case 11:
            return (e = ll(e.type.render, !1)), e;
        case 1:
            return (e = ll(e.type, !0)), e;
        default:
            return "";
    }
}
function Xl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fr:
            return "Fragment";
        case Dr:
            return "Portal";
        case Ql:
            return "Profiler";
        case uu:
            return "StrictMode";
        case Yl:
            return "Suspense";
        case ql:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case fp:
                return (e.displayName || "Context") + ".Consumer";
            case dp:
                return (e._context.displayName || "Context") + ".Provider";
            case du:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case fu:
                return (t = e.displayName || null), t !== null ? t : Xl(e.type) || "Memo";
            case Nn:
                (t = e._payload), (e = e._init);
                try {
                    return Xl(e(t));
                } catch {}
        }
    return null;
}
function Ky(e) {
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
            return Xl(t);
        case 8:
            return t === uu ? "StrictMode" : "Mode";
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
function Un(e) {
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
function pp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gy(e) {
    var t = pp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            s = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (a) {
                    (r = "" + a), s.call(this, a);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (a) {
                    r = "" + a;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Ys(e) {
    e._valueTracker || (e._valueTracker = Gy(e));
}
function hp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = pp(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Fa(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Jl(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Fd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Un(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function gp(e, t) {
    (t = t.checked), t != null && cu(e, "checked", t, !1);
}
function Zl(e, t) {
    gp(e, t);
    var n = Un(t.value),
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
        ? ec(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ec(e, t.type, Un(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function zd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function ec(e, t, n) {
    (t !== "number" || Fa(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ko = Array.isArray;
function Yr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function tc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $d(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(T(92));
            if (Ko(n)) {
                if (1 < n.length) throw Error(T(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Un(n) };
}
function vp(e, t) {
    var n = Un(t.value),
        r = Un(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Bd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function nc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? xp(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var qs,
    yp = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (
                qs = qs || document.createElement("div"),
                    qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = qs.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function as(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Yo = {
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
    Qy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yo).forEach(function (e) {
    Qy.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yo[t] = Yo[e]);
    });
});
function wp(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (Yo.hasOwnProperty(e) && Yo[e])
          ? ("" + t).trim()
          : t + "px";
}
function bp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = wp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var Yy = me(
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
function rc(e, t) {
    if (t) {
        if (Yy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(T(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62));
    }
}
function oc(e, t) {
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
var sc = null;
function mu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var ac = null,
    qr = null,
    Xr = null;
function Ud(e) {
    if ((e = Ls(e))) {
        if (typeof ac != "function") throw Error(T(280));
        var t = e.stateNode;
        t && ((t = Si(t)), ac(e.stateNode, e.type, t));
    }
}
function Np(e) {
    qr ? (Xr ? Xr.push(e) : (Xr = [e])) : (qr = e);
}
function Sp() {
    if (qr) {
        var e = qr,
            t = Xr;
        if (((Xr = qr = null), Ud(e), t)) for (e = 0; e < t.length; e++) Ud(t[e]);
    }
}
function Ep(e, t) {
    return e(t);
}
function Cp() {}
var cl = !1;
function jp(e, t, n) {
    if (cl) return e(t, n);
    cl = !0;
    try {
        return Ep(e, t, n);
    } finally {
        (cl = !1), (qr !== null || Xr !== null) && (Cp(), Sp());
    }
}
function is(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Si(n);
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
                ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(T(231, t, typeof n));
    return n;
}
var ic = !1;
if (tn)
    try {
        var Lo = {};
        Object.defineProperty(Lo, "passive", {
            get: function () {
                ic = !0;
            },
        }),
            window.addEventListener("test", Lo, Lo),
            window.removeEventListener("test", Lo, Lo);
    } catch {
        ic = !1;
    }
function qy(e, t, n, r, o, s, a, l, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var qo = !1,
    za = null,
    $a = !1,
    lc = null,
    Xy = {
        onError: function (e) {
            (qo = !0), (za = e);
        },
    };
function Jy(e, t, n, r, o, s, a, l, c) {
    (qo = !1), (za = null), qy.apply(Xy, arguments);
}
function Zy(e, t, n, r, o, s, a, l, c) {
    if ((Jy.apply(this, arguments), qo)) {
        if (qo) {
            var u = za;
            (qo = !1), (za = null);
        } else throw Error(T(198));
        $a || (($a = !0), (lc = u));
    }
}
function Sr(e) {
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
function kp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Vd(e) {
    if (Sr(e) !== e) throw Error(T(188));
}
function e0(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Sr(e)), t === null)) throw Error(T(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n) return Vd(o), e;
                if (s === r) return Vd(o), t;
                s = s.sibling;
            }
            throw Error(T(188));
        }
        if (n.return !== r.return) (n = o), (r = s);
        else {
            for (var a = !1, l = o.child; l; ) {
                if (l === n) {
                    (a = !0), (n = o), (r = s);
                    break;
                }
                if (l === r) {
                    (a = !0), (r = o), (n = s);
                    break;
                }
                l = l.sibling;
            }
            if (!a) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        (a = !0), (n = s), (r = o);
                        break;
                    }
                    if (l === r) {
                        (a = !0), (r = s), (n = o);
                        break;
                    }
                    l = l.sibling;
                }
                if (!a) throw Error(T(189));
            }
        }
        if (n.alternate !== r) throw Error(T(190));
    }
    if (n.tag !== 3) throw Error(T(188));
    return n.stateNode.current === n ? e : t;
}
function Pp(e) {
    return (e = e0(e)), e !== null ? Rp(e) : null;
}
function Rp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Rp(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Tp = tt.unstable_scheduleCallback,
    Wd = tt.unstable_cancelCallback,
    t0 = tt.unstable_shouldYield,
    n0 = tt.unstable_requestPaint,
    xe = tt.unstable_now,
    r0 = tt.unstable_getCurrentPriorityLevel,
    pu = tt.unstable_ImmediatePriority,
    Ap = tt.unstable_UserBlockingPriority,
    Ba = tt.unstable_NormalPriority,
    o0 = tt.unstable_LowPriority,
    Op = tt.unstable_IdlePriority,
    yi = null,
    Bt = null;
function s0(e) {
    if (Bt && typeof Bt.onCommitFiberRoot == "function")
        try {
            Bt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : l0,
    a0 = Math.log,
    i0 = Math.LN2;
function l0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((a0(e) / i0) | 0)) | 0;
}
var Xs = 64,
    Js = 4194304;
function Go(e) {
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
function Ua(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        a = n & 268435455;
    if (a !== 0) {
        var l = a & ~o;
        l !== 0 ? (r = Go(l)) : ((s &= a), s !== 0 && (r = Go(s)));
    } else (a = n & ~o), a !== 0 ? (r = Go(a)) : s !== 0 && (r = Go(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ct(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function c0(e, t) {
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
function u0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var a = 31 - Ct(s),
            l = 1 << a,
            c = o[a];
        c === -1 ? (!(l & n) || l & r) && (o[a] = c0(l, t)) : c <= t && (e.expiredLanes |= l), (s &= ~l);
    }
}
function cc(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function _p() {
    var e = Xs;
    return (Xs <<= 1), !(Xs & 4194240) && (Xs = 64), e;
}
function ul(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Ms(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ct(t)),
        (e[t] = n);
}
function d0(e, t) {
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
        var o = 31 - Ct(n),
            s = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
    }
}
function hu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ct(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var te = 0;
function Mp(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ip,
    gu,
    Lp,
    Dp,
    Fp,
    uc = !1,
    Zs = [],
    Mn = null,
    In = null,
    Ln = null,
    ls = new Map(),
    cs = new Map(),
    En = [],
    f0 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Hd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Mn = null;
            break;
        case "dragenter":
        case "dragleave":
            In = null;
            break;
        case "mouseover":
        case "mouseout":
            Ln = null;
            break;
        case "pointerover":
        case "pointerout":
            ls.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            cs.delete(t.pointerId);
    }
}
function Do(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }),
          t !== null && ((t = Ls(t)), t !== null && gu(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function m0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Mn = Do(Mn, e, t, n, r, o)), !0;
        case "dragenter":
            return (In = Do(In, e, t, n, r, o)), !0;
        case "mouseover":
            return (Ln = Do(Ln, e, t, n, r, o)), !0;
        case "pointerover":
            var s = o.pointerId;
            return ls.set(s, Do(ls.get(s) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (s = o.pointerId), cs.set(s, Do(cs.get(s) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function zp(e) {
    var t = nr(e.target);
    if (t !== null) {
        var n = Sr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = kp(n)), t !== null)) {
                    (e.blockedOn = t),
                        Fp(e.priority, function () {
                            Lp(n);
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
function Na(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (sc = r), n.target.dispatchEvent(r), (sc = null);
        } else return (t = Ls(n)), t !== null && gu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Kd(e, t, n) {
    Na(e) && n.delete(t);
}
function p0() {
    (uc = !1),
        Mn !== null && Na(Mn) && (Mn = null),
        In !== null && Na(In) && (In = null),
        Ln !== null && Na(Ln) && (Ln = null),
        ls.forEach(Kd),
        cs.forEach(Kd);
}
function Fo(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), uc || ((uc = !0), tt.unstable_scheduleCallback(tt.unstable_NormalPriority, p0)));
}
function us(e) {
    function t(o) {
        return Fo(o, e);
    }
    if (0 < Zs.length) {
        Fo(Zs[0], e);
        for (var n = 1; n < Zs.length; n++) {
            var r = Zs[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Mn !== null && Fo(Mn, e),
            In !== null && Fo(In, e),
            Ln !== null && Fo(Ln, e),
            ls.forEach(t),
            cs.forEach(t),
            n = 0;
        n < En.length;
        n++
    )
        (r = En[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < En.length && ((n = En[0]), n.blockedOn === null); ) zp(n), n.blockedOn === null && En.shift();
}
var Jr = cn.ReactCurrentBatchConfig,
    Va = !0;
function h0(e, t, n, r) {
    var o = te,
        s = Jr.transition;
    Jr.transition = null;
    try {
        (te = 1), vu(e, t, n, r);
    } finally {
        (te = o), (Jr.transition = s);
    }
}
function g0(e, t, n, r) {
    var o = te,
        s = Jr.transition;
    Jr.transition = null;
    try {
        (te = 4), vu(e, t, n, r);
    } finally {
        (te = o), (Jr.transition = s);
    }
}
function vu(e, t, n, r) {
    if (Va) {
        var o = dc(e, t, n, r);
        if (o === null) wl(e, t, r, Wa, n), Hd(e, r);
        else if (m0(o, e, t, n, r)) r.stopPropagation();
        else if ((Hd(e, r), t & 4 && -1 < f0.indexOf(e))) {
            for (; o !== null; ) {
                var s = Ls(o);
                if ((s !== null && Ip(s), (s = dc(e, t, n, r)), s === null && wl(e, t, r, Wa, n), s === o)) break;
                o = s;
            }
            o !== null && r.stopPropagation();
        } else wl(e, t, r, null, n);
    }
}
var Wa = null;
function dc(e, t, n, r) {
    if (((Wa = null), (e = mu(r)), (e = nr(e)), e !== null))
        if (((t = Sr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = kp(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Wa = e), null;
}
function $p(e) {
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
            switch (r0()) {
                case pu:
                    return 1;
                case Ap:
                    return 4;
                case Ba:
                case o0:
                    return 16;
                case Op:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var An = null,
    xu = null,
    Sa = null;
function Bp() {
    if (Sa) return Sa;
    var e,
        t = xu,
        n = t.length,
        r,
        o = "value" in An ? An.value : An.textContent,
        s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[s - r]; r++);
    return (Sa = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ea(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function ea() {
    return !0;
}
function Gd() {
    return !1;
}
function rt(e) {
    function t(n, r, o, s, a) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = s),
            (this.target = a),
            (this.currentTarget = null);
        for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
        return (
            (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1)
                ? ea
                : Gd),
            (this.isPropagationStopped = Gd),
            this
        );
    }
    return (
        me(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = ea));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = ea));
            },
            persist: function () {},
            isPersistent: ea,
        }),
        t
    );
}
var jo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    yu = rt(jo),
    Is = me({}, jo, { view: 0, detail: 0 }),
    v0 = rt(Is),
    dl,
    fl,
    zo,
    wi = me({}, Is, {
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
        getModifierState: wu,
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
                : (e !== zo &&
                      (zo && e.type === "mousemove"
                          ? ((dl = e.screenX - zo.screenX), (fl = e.screenY - zo.screenY))
                          : (fl = dl = 0),
                      (zo = e)),
                  dl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : fl;
        },
    }),
    Qd = rt(wi),
    x0 = me({}, wi, { dataTransfer: 0 }),
    y0 = rt(x0),
    w0 = me({}, Is, { relatedTarget: 0 }),
    ml = rt(w0),
    b0 = me({}, jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N0 = rt(b0),
    S0 = me({}, jo, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    E0 = rt(S0),
    C0 = me({}, jo, { data: 0 }),
    Yd = rt(C0),
    j0 = {
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
    k0 = {
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
    P0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function R0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = P0[e]) ? !!t[e] : !1;
}
function wu() {
    return R0;
}
var T0 = me({}, Is, {
        key: function (e) {
            if (e.key) {
                var t = j0[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Ea(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? k0[e.keyCode] || "Unidentified"
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
        getModifierState: wu,
        charCode: function (e) {
            return e.type === "keypress" ? Ea(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    A0 = rt(T0),
    O0 = me({}, wi, {
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
    qd = rt(O0),
    _0 = me({}, Is, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: wu,
    }),
    M0 = rt(_0),
    I0 = me({}, jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    L0 = rt(I0),
    D0 = me({}, wi, {
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
    F0 = rt(D0),
    z0 = [9, 13, 27, 32],
    bu = tn && "CompositionEvent" in window,
    Xo = null;
tn && "documentMode" in document && (Xo = document.documentMode);
var $0 = tn && "TextEvent" in window && !Xo,
    Up = tn && (!bu || (Xo && 8 < Xo && 11 >= Xo)),
    Xd = " ",
    Jd = !1;
function Vp(e, t) {
    switch (e) {
        case "keyup":
            return z0.indexOf(t.keyCode) !== -1;
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
function Wp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zr = !1;
function B0(e, t) {
    switch (e) {
        case "compositionend":
            return Wp(t);
        case "keypress":
            return t.which !== 32 ? null : ((Jd = !0), Xd);
        case "textInput":
            return (e = t.data), e === Xd && Jd ? null : e;
        default:
            return null;
    }
}
function U0(e, t) {
    if (zr)
        return e === "compositionend" || (!bu && Vp(e, t)) ? ((e = Bp()), (Sa = xu = An = null), (zr = !1), e) : null;
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
            return Up && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var V0 = {
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
function Zd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!V0[e.type] : t === "textarea";
}
function Hp(e, t, n, r) {
    Np(r),
        (t = Ha(t, "onChange")),
        0 < t.length && ((n = new yu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Jo = null,
    ds = null;
function W0(e) {
    nh(e, 0);
}
function bi(e) {
    var t = Ur(e);
    if (hp(t)) return e;
}
function H0(e, t) {
    if (e === "change") return t;
}
var Kp = !1;
if (tn) {
    var pl;
    if (tn) {
        var hl = "oninput" in document;
        if (!hl) {
            var ef = document.createElement("div");
            ef.setAttribute("oninput", "return;"), (hl = typeof ef.oninput == "function");
        }
        pl = hl;
    } else pl = !1;
    Kp = pl && (!document.documentMode || 9 < document.documentMode);
}
function tf() {
    Jo && (Jo.detachEvent("onpropertychange", Gp), (ds = Jo = null));
}
function Gp(e) {
    if (e.propertyName === "value" && bi(ds)) {
        var t = [];
        Hp(t, ds, e, mu(e)), jp(W0, t);
    }
}
function K0(e, t, n) {
    e === "focusin" ? (tf(), (Jo = t), (ds = n), Jo.attachEvent("onpropertychange", Gp)) : e === "focusout" && tf();
}
function G0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return bi(ds);
}
function Q0(e, t) {
    if (e === "click") return bi(t);
}
function Y0(e, t) {
    if (e === "input" || e === "change") return bi(t);
}
function q0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : q0;
function fs(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Gl.call(t, o) || !kt(e[o], t[o])) return !1;
    }
    return !0;
}
function nf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function rf(e, t) {
    var n = nf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
        n = nf(n);
    }
}
function Qp(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Qp(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function Yp() {
    for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Fa(e.document);
    }
    return t;
}
function Nu(e) {
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
function X0(e) {
    var t = Yp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Nu(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    s = Math.min(r.start, o);
                (r = r.end === void 0 ? s : Math.min(r.end, o)),
                    !e.extend && s > r && ((o = r), (r = s), (s = o)),
                    (o = rf(n, s));
                var a = rf(n, r);
                o &&
                    a &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== a.node ||
                        e.focusOffset !== a.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    s > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var J0 = tn && "documentMode" in document && 11 >= document.documentMode,
    $r = null,
    fc = null,
    Zo = null,
    mc = !1;
function of(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mc ||
        $r == null ||
        $r !== Fa(r) ||
        ((r = $r),
        "selectionStart" in r && Nu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Zo && fs(Zo, r)) ||
            ((Zo = r),
            (r = Ha(fc, "onSelect")),
            0 < r.length &&
                ((t = new yu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = $r))));
}
function ta(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Br = {
        animationend: ta("Animation", "AnimationEnd"),
        animationiteration: ta("Animation", "AnimationIteration"),
        animationstart: ta("Animation", "AnimationStart"),
        transitionend: ta("Transition", "TransitionEnd"),
    },
    gl = {},
    qp = {};
tn &&
    ((qp = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Br.animationend.animation, delete Br.animationiteration.animation, delete Br.animationstart.animation),
    "TransitionEvent" in window || delete Br.transitionend.transition);
function Ni(e) {
    if (gl[e]) return gl[e];
    if (!Br[e]) return e;
    var t = Br[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in qp) return (gl[e] = t[n]);
    return e;
}
var Xp = Ni("animationend"),
    Jp = Ni("animationiteration"),
    Zp = Ni("animationstart"),
    eh = Ni("transitionend"),
    th = new Map(),
    sf =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Gn(e, t) {
    th.set(e, t), Nr(t, [e]);
}
for (var vl = 0; vl < sf.length; vl++) {
    var xl = sf[vl],
        Z0 = xl.toLowerCase(),
        e1 = xl[0].toUpperCase() + xl.slice(1);
    Gn(Z0, "on" + e1);
}
Gn(Xp, "onAnimationEnd");
Gn(Jp, "onAnimationIteration");
Gn(Zp, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(eh, "onTransitionEnd");
mo("onMouseEnter", ["mouseout", "mouseover"]);
mo("onMouseLeave", ["mouseout", "mouseover"]);
mo("onPointerEnter", ["pointerout", "pointerover"]);
mo("onPointerLeave", ["pointerout", "pointerover"]);
Nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    t1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));
function af(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Zy(r, t, void 0, e), (e.currentTarget = null);
}
function nh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a],
                        c = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), c !== s && o.isPropagationStopped())) break e;
                    af(o, l, u), (s = c);
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (
                        ((l = r[a]),
                        (c = l.instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        c !== s && o.isPropagationStopped())
                    )
                        break e;
                    af(o, l, u), (s = c);
                }
        }
    }
    if ($a) throw ((e = lc), ($a = !1), (lc = null), e);
}
function ae(e, t) {
    var n = t[xc];
    n === void 0 && (n = t[xc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (rh(t, e, 2, !1), n.add(r));
}
function yl(e, t, n) {
    var r = 0;
    t && (r |= 4), rh(n, e, r, t);
}
var na = "_reactListening" + Math.random().toString(36).slice(2);
function ms(e) {
    if (!e[na]) {
        (e[na] = !0),
            up.forEach(function (n) {
                n !== "selectionchange" && (t1.has(n) || yl(n, !1, e), yl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[na] || ((t[na] = !0), yl("selectionchange", !1, t));
    }
}
function rh(e, t, n, r) {
    switch ($p(t)) {
        case 1:
            var o = h0;
            break;
        case 4:
            o = g0;
            break;
        default:
            o = vu;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !ic || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
}
function wl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var c = a.tag;
                        if (
                            (c === 3 || c === 4) &&
                            ((c = a.stateNode.containerInfo), c === o || (c.nodeType === 8 && c.parentNode === o))
                        )
                            return;
                        a = a.return;
                    }
                for (; l !== null; ) {
                    if (((a = nr(l)), a === null)) return;
                    if (((c = a.tag), c === 5 || c === 6)) {
                        r = s = a;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    jp(function () {
        var u = s,
            d = mu(n),
            f = [];
        e: {
            var v = th.get(e);
            if (v !== void 0) {
                var m = yu,
                    b = e;
                switch (e) {
                    case "keypress":
                        if (Ea(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = A0;
                        break;
                    case "focusin":
                        (b = "focus"), (m = ml);
                        break;
                    case "focusout":
                        (b = "blur"), (m = ml);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = ml;
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
                        m = Qd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = y0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = M0;
                        break;
                    case Xp:
                    case Jp:
                    case Zp:
                        m = N0;
                        break;
                    case eh:
                        m = L0;
                        break;
                    case "scroll":
                        m = v0;
                        break;
                    case "wheel":
                        m = F0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = E0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = qd;
                }
                var p = (t & 4) !== 0,
                    y = !p && e === "scroll",
                    g = p ? (v !== null ? v + "Capture" : null) : v;
                p = [];
                for (var x = u, w; x !== null; ) {
                    w = x;
                    var N = w.stateNode;
                    if (
                        (w.tag === 5 &&
                            N !== null &&
                            ((w = N), g !== null && ((N = is(x, g)), N != null && p.push(ps(x, N, w)))),
                        y)
                    )
                        break;
                    x = x.return;
                }
                0 < p.length && ((v = new m(v, b, null, n, d)), f.push({ event: v, listeners: p }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((v = e === "mouseover" || e === "pointerover"),
                    (m = e === "mouseout" || e === "pointerout"),
                    v && n !== sc && (b = n.relatedTarget || n.fromElement) && (nr(b) || b[nn]))
                )
                    break e;
                if (
                    (m || v) &&
                    ((v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window),
                    m
                        ? ((b = n.relatedTarget || n.toElement),
                          (m = u),
                          (b = b ? nr(b) : null),
                          b !== null && ((y = Sr(b)), b !== y || (b.tag !== 5 && b.tag !== 6)) && (b = null))
                        : ((m = null), (b = u)),
                    m !== b)
                ) {
                    if (
                        ((p = Qd),
                        (N = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (x = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((p = qd), (N = "onPointerLeave"), (g = "onPointerEnter"), (x = "pointer")),
                        (y = m == null ? v : Ur(m)),
                        (w = b == null ? v : Ur(b)),
                        (v = new p(N, x + "leave", m, n, d)),
                        (v.target = y),
                        (v.relatedTarget = w),
                        (N = null),
                        nr(d) === u &&
                            ((p = new p(g, x + "enter", b, n, d)), (p.target = w), (p.relatedTarget = y), (N = p)),
                        (y = N),
                        m && b)
                    )
                        t: {
                            for (p = m, g = b, x = 0, w = p; w; w = Ar(w)) x++;
                            for (w = 0, N = g; N; N = Ar(N)) w++;
                            for (; 0 < x - w; ) (p = Ar(p)), x--;
                            for (; 0 < w - x; ) (g = Ar(g)), w--;
                            for (; x--; ) {
                                if (p === g || (g !== null && p === g.alternate)) break t;
                                (p = Ar(p)), (g = Ar(g));
                            }
                            p = null;
                        }
                    else p = null;
                    m !== null && lf(f, v, m, p, !1), b !== null && y !== null && lf(f, y, b, p, !0);
                }
            }
            e: {
                if (
                    ((v = u ? Ur(u) : window),
                    (m = v.nodeName && v.nodeName.toLowerCase()),
                    m === "select" || (m === "input" && v.type === "file"))
                )
                    var S = H0;
                else if (Zd(v))
                    if (Kp) S = Y0;
                    else {
                        S = G0;
                        var E = K0;
                    }
                else
                    (m = v.nodeName) &&
                        m.toLowerCase() === "input" &&
                        (v.type === "checkbox" || v.type === "radio") &&
                        (S = Q0);
                if (S && (S = S(e, u))) {
                    Hp(f, S, n, d);
                    break e;
                }
                E && E(e, v, u),
                    e === "focusout" &&
                        (E = v._wrapperState) &&
                        E.controlled &&
                        v.type === "number" &&
                        ec(v, "number", v.value);
            }
            switch (((E = u ? Ur(u) : window), e)) {
                case "focusin":
                    (Zd(E) || E.contentEditable === "true") && (($r = E), (fc = u), (Zo = null));
                    break;
                case "focusout":
                    Zo = fc = $r = null;
                    break;
                case "mousedown":
                    mc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (mc = !1), of(f, n, d);
                    break;
                case "selectionchange":
                    if (J0) break;
                case "keydown":
                case "keyup":
                    of(f, n, d);
            }
            var C;
            if (bu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var k = "onCompositionStart";
                            break e;
                        case "compositionend":
                            k = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            k = "onCompositionUpdate";
                            break e;
                    }
                    k = void 0;
                }
            else
                zr
                    ? Vp(e, n) && (k = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k &&
                (Up &&
                    n.locale !== "ko" &&
                    (zr || k !== "onCompositionStart"
                        ? k === "onCompositionEnd" && zr && (C = Bp())
                        : ((An = d), (xu = "value" in An ? An.value : An.textContent), (zr = !0))),
                (E = Ha(u, k)),
                0 < E.length &&
                    ((k = new Yd(k, e, null, n, d)),
                    f.push({ event: k, listeners: E }),
                    C ? (k.data = C) : ((C = Wp(n)), C !== null && (k.data = C)))),
                (C = $0 ? B0(e, n) : U0(e, n)) &&
                    ((u = Ha(u, "onBeforeInput")),
                    0 < u.length &&
                        ((d = new Yd("onBeforeInput", "beforeinput", null, n, d)),
                        f.push({ event: d, listeners: u }),
                        (d.data = C)));
        }
        nh(f, t);
    });
}
function ps(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ha(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            s = o.stateNode;
        o.tag === 5 &&
            s !== null &&
            ((o = s),
            (s = is(e, n)),
            s != null && r.unshift(ps(e, s, o)),
            (s = is(e, t)),
            s != null && r.push(ps(e, s, o))),
            (e = e.return);
    }
    return r;
}
function Ar(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function lf(e, t, n, r, o) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
        var l = n,
            c = l.alternate,
            u = l.stateNode;
        if (c !== null && c === r) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
            o
                ? ((c = is(n, s)), c != null && a.unshift(ps(n, c, l)))
                : o || ((c = is(n, s)), c != null && a.push(ps(n, c, l)))),
            (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
}
var n1 = /\r\n?/g,
    r1 = /\u0000|\uFFFD/g;
function cf(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            n1,
            `
`
        )
        .replace(r1, "");
}
function ra(e, t, n) {
    if (((t = cf(t)), cf(e) !== t && n)) throw Error(T(425));
}
function Ka() {}
var pc = null,
    hc = null;
function gc(e, t) {
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
var vc = typeof setTimeout == "function" ? setTimeout : void 0,
    o1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    uf = typeof Promise == "function" ? Promise : void 0,
    s1 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof uf < "u"
              ? function (e) {
                    return uf.resolve(null).then(e).catch(a1);
                }
              : vc;
function a1(e) {
    setTimeout(function () {
        throw e;
    });
}
function bl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), us(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    us(t);
}
function Dn(e) {
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
function df(e) {
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
var ko = Math.random().toString(36).slice(2),
    Dt = "__reactFiber$" + ko,
    hs = "__reactProps$" + ko,
    nn = "__reactContainer$" + ko,
    xc = "__reactEvents$" + ko,
    i1 = "__reactListeners$" + ko,
    l1 = "__reactHandles$" + ko;
function nr(e) {
    var t = e[Dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[nn] || n[Dt])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = df(e); e !== null; ) {
                    if ((n = e[Dt])) return n;
                    e = df(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ls(e) {
    return (e = e[Dt] || e[nn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ur(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33));
}
function Si(e) {
    return e[hs] || null;
}
var yc = [],
    Vr = -1;
function Qn(e) {
    return { current: e };
}
function ie(e) {
    0 > Vr || ((e.current = yc[Vr]), (yc[Vr] = null), Vr--);
}
function oe(e, t) {
    Vr++, (yc[Vr] = e.current), (e.current = t);
}
var Vn = {},
    De = Qn(Vn),
    Ge = Qn(!1),
    pr = Vn;
function po(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        s;
    for (s in n) o[s] = t[s];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Qe(e) {
    return (e = e.childContextTypes), e != null;
}
function Ga() {
    ie(Ge), ie(De);
}
function ff(e, t, n) {
    if (De.current !== Vn) throw Error(T(168));
    oe(De, t), oe(Ge, n);
}
function oh(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(T(108, Ky(e) || "Unknown", o));
    return me({}, n, r);
}
function Qa(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vn),
        (pr = De.current),
        oe(De, e),
        oe(Ge, Ge.current),
        !0
    );
}
function mf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(T(169));
    n ? ((e = oh(e, t, pr)), (r.__reactInternalMemoizedMergedChildContext = e), ie(Ge), ie(De), oe(De, e)) : ie(Ge),
        oe(Ge, n);
}
var qt = null,
    Ei = !1,
    Nl = !1;
function sh(e) {
    qt === null ? (qt = [e]) : qt.push(e);
}
function c1(e) {
    (Ei = !0), sh(e);
}
function Yn() {
    if (!Nl && qt !== null) {
        Nl = !0;
        var e = 0,
            t = te;
        try {
            var n = qt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (qt = null), (Ei = !1);
        } catch (o) {
            throw (qt !== null && (qt = qt.slice(e + 1)), Tp(pu, Yn), o);
        } finally {
            (te = t), (Nl = !1);
        }
    }
    return null;
}
var Wr = [],
    Hr = 0,
    Ya = null,
    qa = 0,
    at = [],
    it = 0,
    hr = null,
    Jt = 1,
    Zt = "";
function Zn(e, t) {
    (Wr[Hr++] = qa), (Wr[Hr++] = Ya), (Ya = e), (qa = t);
}
function ah(e, t, n) {
    (at[it++] = Jt), (at[it++] = Zt), (at[it++] = hr), (hr = e);
    var r = Jt;
    e = Zt;
    var o = 32 - Ct(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var s = 32 - Ct(t) + o;
    if (30 < s) {
        var a = o - (o % 5);
        (s = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (o -= a),
            (Jt = (1 << (32 - Ct(t) + o)) | (n << o) | r),
            (Zt = s + e);
    } else (Jt = (1 << s) | (n << o) | r), (Zt = e);
}
function Su(e) {
    e.return !== null && (Zn(e, 1), ah(e, 1, 0));
}
function Eu(e) {
    for (; e === Ya; ) (Ya = Wr[--Hr]), (Wr[Hr] = null), (qa = Wr[--Hr]), (Wr[Hr] = null);
    for (; e === hr; )
        (hr = at[--it]), (at[it] = null), (Zt = at[--it]), (at[it] = null), (Jt = at[--it]), (at[it] = null);
}
var Ze = null,
    Je = null,
    ue = !1,
    Et = null;
function ih(e, t) {
    var n = ct(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (Ze = e), (Je = Dn(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = hr !== null ? { id: Jt, overflow: Zt } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = ct(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Ze = e),
                      (Je = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function wc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bc(e) {
    if (ue) {
        var t = Je;
        if (t) {
            var n = t;
            if (!pf(e, t)) {
                if (wc(e)) throw Error(T(418));
                t = Dn(n.nextSibling);
                var r = Ze;
                t && pf(e, t) ? ih(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Ze = e));
            }
        } else {
            if (wc(e)) throw Error(T(418));
            (e.flags = (e.flags & -4097) | 2), (ue = !1), (Ze = e);
        }
    }
}
function hf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ze = e;
}
function oa(e) {
    if (e !== Ze) return !1;
    if (!ue) return hf(e), (ue = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== "head" && t !== "body" && !gc(e.type, e.memoizedProps))),
        t && (t = Je))
    ) {
        if (wc(e)) throw (lh(), Error(T(418)));
        for (; t; ) ih(e, t), (t = Dn(t.nextSibling));
    }
    if ((hf(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(T(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Je = Dn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Je = null;
        }
    } else Je = Ze ? Dn(e.stateNode.nextSibling) : null;
    return !0;
}
function lh() {
    for (var e = Je; e; ) e = Dn(e.nextSibling);
}
function ho() {
    (Je = Ze = null), (ue = !1);
}
function Cu(e) {
    Et === null ? (Et = [e]) : Et.push(e);
}
var u1 = cn.ReactCurrentBatchConfig;
function $o(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(T(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(T(147, e));
            var o = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s
                ? t.ref
                : ((t = function (a) {
                      var l = o.refs;
                      a === null ? delete l[s] : (l[s] = a);
                  }),
                  (t._stringRef = s),
                  t);
        }
        if (typeof e != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, e));
    }
    return e;
}
function sa(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function gf(e) {
    var t = e._init;
    return t(e._payload);
}
function ch(e) {
    function t(g, x) {
        if (e) {
            var w = g.deletions;
            w === null ? ((g.deletions = [x]), (g.flags |= 16)) : w.push(x);
        }
    }
    function n(g, x) {
        if (!e) return null;
        for (; x !== null; ) t(g, x), (x = x.sibling);
        return null;
    }
    function r(g, x) {
        for (g = new Map(); x !== null; ) x.key !== null ? g.set(x.key, x) : g.set(x.index, x), (x = x.sibling);
        return g;
    }
    function o(g, x) {
        return (g = Bn(g, x)), (g.index = 0), (g.sibling = null), g;
    }
    function s(g, x, w) {
        return (
            (g.index = w),
            e
                ? ((w = g.alternate),
                  w !== null ? ((w = w.index), w < x ? ((g.flags |= 2), x) : w) : ((g.flags |= 2), x))
                : ((g.flags |= 1048576), x)
        );
    }
    function a(g) {
        return e && g.alternate === null && (g.flags |= 2), g;
    }
    function l(g, x, w, N) {
        return x === null || x.tag !== 6
            ? ((x = Rl(w, g.mode, N)), (x.return = g), x)
            : ((x = o(x, w)), (x.return = g), x);
    }
    function c(g, x, w, N) {
        var S = w.type;
        return S === Fr
            ? d(g, x, w.props.children, N, w.key)
            : x !== null &&
                (x.elementType === S || (typeof S == "object" && S !== null && S.$$typeof === Nn && gf(S) === x.type))
              ? ((N = o(x, w.props)), (N.ref = $o(g, x, w)), (N.return = g), N)
              : ((N = Aa(w.type, w.key, w.props, null, g.mode, N)), (N.ref = $o(g, x, w)), (N.return = g), N);
    }
    function u(g, x, w, N) {
        return x === null ||
            x.tag !== 4 ||
            x.stateNode.containerInfo !== w.containerInfo ||
            x.stateNode.implementation !== w.implementation
            ? ((x = Tl(w, g.mode, N)), (x.return = g), x)
            : ((x = o(x, w.children || [])), (x.return = g), x);
    }
    function d(g, x, w, N, S) {
        return x === null || x.tag !== 7
            ? ((x = fr(w, g.mode, N, S)), (x.return = g), x)
            : ((x = o(x, w)), (x.return = g), x);
    }
    function f(g, x, w) {
        if ((typeof x == "string" && x !== "") || typeof x == "number")
            return (x = Rl("" + x, g.mode, w)), (x.return = g), x;
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Qs:
                    return (
                        (w = Aa(x.type, x.key, x.props, null, g.mode, w)), (w.ref = $o(g, null, x)), (w.return = g), w
                    );
                case Dr:
                    return (x = Tl(x, g.mode, w)), (x.return = g), x;
                case Nn:
                    var N = x._init;
                    return f(g, N(x._payload), w);
            }
            if (Ko(x) || Io(x)) return (x = fr(x, g.mode, w, null)), (x.return = g), x;
            sa(g, x);
        }
        return null;
    }
    function v(g, x, w, N) {
        var S = x !== null ? x.key : null;
        if ((typeof w == "string" && w !== "") || typeof w == "number") return S !== null ? null : l(g, x, "" + w, N);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Qs:
                    return w.key === S ? c(g, x, w, N) : null;
                case Dr:
                    return w.key === S ? u(g, x, w, N) : null;
                case Nn:
                    return (S = w._init), v(g, x, S(w._payload), N);
            }
            if (Ko(w) || Io(w)) return S !== null ? null : d(g, x, w, N, null);
            sa(g, w);
        }
        return null;
    }
    function m(g, x, w, N, S) {
        if ((typeof N == "string" && N !== "") || typeof N == "number")
            return (g = g.get(w) || null), l(x, g, "" + N, S);
        if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
                case Qs:
                    return (g = g.get(N.key === null ? w : N.key) || null), c(x, g, N, S);
                case Dr:
                    return (g = g.get(N.key === null ? w : N.key) || null), u(x, g, N, S);
                case Nn:
                    var E = N._init;
                    return m(g, x, w, E(N._payload), S);
            }
            if (Ko(N) || Io(N)) return (g = g.get(w) || null), d(x, g, N, S, null);
            sa(x, N);
        }
        return null;
    }
    function b(g, x, w, N) {
        for (var S = null, E = null, C = x, k = (x = 0), _ = null; C !== null && k < w.length; k++) {
            C.index > k ? ((_ = C), (C = null)) : (_ = C.sibling);
            var O = v(g, C, w[k], N);
            if (O === null) {
                C === null && (C = _);
                break;
            }
            e && C && O.alternate === null && t(g, C),
                (x = s(O, x, k)),
                E === null ? (S = O) : (E.sibling = O),
                (E = O),
                (C = _);
        }
        if (k === w.length) return n(g, C), ue && Zn(g, k), S;
        if (C === null) {
            for (; k < w.length; k++)
                (C = f(g, w[k], N)), C !== null && ((x = s(C, x, k)), E === null ? (S = C) : (E.sibling = C), (E = C));
            return ue && Zn(g, k), S;
        }
        for (C = r(g, C); k < w.length; k++)
            (_ = m(C, g, k, w[k], N)),
                _ !== null &&
                    (e && _.alternate !== null && C.delete(_.key === null ? k : _.key),
                    (x = s(_, x, k)),
                    E === null ? (S = _) : (E.sibling = _),
                    (E = _));
        return (
            e &&
                C.forEach(function ($) {
                    return t(g, $);
                }),
            ue && Zn(g, k),
            S
        );
    }
    function p(g, x, w, N) {
        var S = Io(w);
        if (typeof S != "function") throw Error(T(150));
        if (((w = S.call(w)), w == null)) throw Error(T(151));
        for (var E = (S = null), C = x, k = (x = 0), _ = null, O = w.next(); C !== null && !O.done; k++, O = w.next()) {
            C.index > k ? ((_ = C), (C = null)) : (_ = C.sibling);
            var $ = v(g, C, O.value, N);
            if ($ === null) {
                C === null && (C = _);
                break;
            }
            e && C && $.alternate === null && t(g, C),
                (x = s($, x, k)),
                E === null ? (S = $) : (E.sibling = $),
                (E = $),
                (C = _);
        }
        if (O.done) return n(g, C), ue && Zn(g, k), S;
        if (C === null) {
            for (; !O.done; k++, O = w.next())
                (O = f(g, O.value, N)),
                    O !== null && ((x = s(O, x, k)), E === null ? (S = O) : (E.sibling = O), (E = O));
            return ue && Zn(g, k), S;
        }
        for (C = r(g, C); !O.done; k++, O = w.next())
            (O = m(C, g, k, O.value, N)),
                O !== null &&
                    (e && O.alternate !== null && C.delete(O.key === null ? k : O.key),
                    (x = s(O, x, k)),
                    E === null ? (S = O) : (E.sibling = O),
                    (E = O));
        return (
            e &&
                C.forEach(function (L) {
                    return t(g, L);
                }),
            ue && Zn(g, k),
            S
        );
    }
    function y(g, x, w, N) {
        if (
            (typeof w == "object" && w !== null && w.type === Fr && w.key === null && (w = w.props.children),
            typeof w == "object" && w !== null)
        ) {
            switch (w.$$typeof) {
                case Qs:
                    e: {
                        for (var S = w.key, E = x; E !== null; ) {
                            if (E.key === S) {
                                if (((S = w.type), S === Fr)) {
                                    if (E.tag === 7) {
                                        n(g, E.sibling), (x = o(E, w.props.children)), (x.return = g), (g = x);
                                        break e;
                                    }
                                } else if (
                                    E.elementType === S ||
                                    (typeof S == "object" && S !== null && S.$$typeof === Nn && gf(S) === E.type)
                                ) {
                                    n(g, E.sibling),
                                        (x = o(E, w.props)),
                                        (x.ref = $o(g, E, w)),
                                        (x.return = g),
                                        (g = x);
                                    break e;
                                }
                                n(g, E);
                                break;
                            } else t(g, E);
                            E = E.sibling;
                        }
                        w.type === Fr
                            ? ((x = fr(w.props.children, g.mode, N, w.key)), (x.return = g), (g = x))
                            : ((N = Aa(w.type, w.key, w.props, null, g.mode, N)),
                              (N.ref = $o(g, x, w)),
                              (N.return = g),
                              (g = N));
                    }
                    return a(g);
                case Dr:
                    e: {
                        for (E = w.key; x !== null; ) {
                            if (x.key === E)
                                if (
                                    x.tag === 4 &&
                                    x.stateNode.containerInfo === w.containerInfo &&
                                    x.stateNode.implementation === w.implementation
                                ) {
                                    n(g, x.sibling), (x = o(x, w.children || [])), (x.return = g), (g = x);
                                    break e;
                                } else {
                                    n(g, x);
                                    break;
                                }
                            else t(g, x);
                            x = x.sibling;
                        }
                        (x = Tl(w, g.mode, N)), (x.return = g), (g = x);
                    }
                    return a(g);
                case Nn:
                    return (E = w._init), y(g, x, E(w._payload), N);
            }
            if (Ko(w)) return b(g, x, w, N);
            if (Io(w)) return p(g, x, w, N);
            sa(g, w);
        }
        return (typeof w == "string" && w !== "") || typeof w == "number"
            ? ((w = "" + w),
              x !== null && x.tag === 6
                  ? (n(g, x.sibling), (x = o(x, w)), (x.return = g), (g = x))
                  : (n(g, x), (x = Rl(w, g.mode, N)), (x.return = g), (g = x)),
              a(g))
            : n(g, x);
    }
    return y;
}
var go = ch(!0),
    uh = ch(!1),
    Xa = Qn(null),
    Ja = null,
    Kr = null,
    ju = null;
function ku() {
    ju = Kr = Ja = null;
}
function Pu(e) {
    var t = Xa.current;
    ie(Xa), (e._currentValue = t);
}
function Nc(e, t, n) {
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
function Zr(e, t) {
    (Ja = e),
        (ju = Kr = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function dt(e) {
    var t = e._currentValue;
    if (ju !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
            if (Ja === null) throw Error(T(308));
            (Kr = e), (Ja.dependencies = { lanes: 0, firstContext: e });
        } else Kr = Kr.next = e;
    return t;
}
var rr = null;
function Ru(e) {
    rr === null ? (rr = [e]) : rr.push(e);
}
function dh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), Ru(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), rn(e, r);
}
function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function Tu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function fh(e, t) {
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
function en(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), J & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), rn(e, n);
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), Ru(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        rn(e, n)
    );
}
function Ca(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
    }
}
function vf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            s = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                s === null ? (o = s = a) : (s = s.next = a), (n = n.next);
            } while (n !== null);
            s === null ? (o = s = t) : (s = s.next = t);
        } else o = s = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Za(e, t, n, r) {
    var o = e.updateQueue;
    Sn = !1;
    var s = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var c = l,
            u = c.next;
        (c.next = null), a === null ? (s = u) : (a.next = u), (a = c);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (l = d.lastBaseUpdate),
            l !== a && (l === null ? (d.firstBaseUpdate = u) : (l.next = u), (d.lastBaseUpdate = c)));
    }
    if (s !== null) {
        var f = o.baseState;
        (a = 0), (d = u = c = null), (l = s);
        do {
            var v = l.lane,
                m = l.eventTime;
            if ((r & v) === v) {
                d !== null &&
                    (d = d.next =
                        { eventTime: m, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var b = e,
                        p = l;
                    switch (((v = t), (m = n), p.tag)) {
                        case 1:
                            if (((b = p.payload), typeof b == "function")) {
                                f = b.call(m, f, v);
                                break e;
                            }
                            f = b;
                            break e;
                        case 3:
                            b.flags = (b.flags & -65537) | 128;
                        case 0:
                            if (((b = p.payload), (v = typeof b == "function" ? b.call(m, f, v) : b), v == null))
                                break e;
                            f = me({}, f, v);
                            break e;
                        case 2:
                            Sn = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64), (v = o.effects), v === null ? (o.effects = [l]) : v.push(l));
            } else
                (m = { eventTime: m, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                    d === null ? ((u = d = m), (c = f)) : (d = d.next = m),
                    (a |= v);
            if (((l = l.next), l === null)) {
                if (((l = o.shared.pending), l === null)) break;
                (v = l), (l = v.next), (v.next = null), (o.lastBaseUpdate = v), (o.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (c = f),
            (o.baseState = c),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = d),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (a |= o.lane), (o = o.next);
            while (o !== t);
        } else s === null && (o.shared.lanes = 0);
        (vr |= a), (e.lanes = a), (e.memoizedState = f);
    }
}
function xf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(T(191, o));
                o.call(r);
            }
        }
}
var Ds = {},
    Ut = Qn(Ds),
    gs = Qn(Ds),
    vs = Qn(Ds);
function or(e) {
    if (e === Ds) throw Error(T(174));
    return e;
}
function Au(e, t) {
    switch ((oe(vs, t), oe(gs, e), oe(Ut, Ds), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : nc(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = nc(t, e));
    }
    ie(Ut), oe(Ut, t);
}
function vo() {
    ie(Ut), ie(gs), ie(vs);
}
function mh(e) {
    or(vs.current);
    var t = or(Ut.current),
        n = nc(t, e.type);
    t !== n && (oe(gs, e), oe(Ut, n));
}
function Ou(e) {
    gs.current === e && (ie(Ut), ie(gs));
}
var de = Qn(0);
function ei(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
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
var Sl = [];
function _u() {
    for (var e = 0; e < Sl.length; e++) Sl[e]._workInProgressVersionPrimary = null;
    Sl.length = 0;
}
var ja = cn.ReactCurrentDispatcher,
    El = cn.ReactCurrentBatchConfig,
    gr = 0,
    fe = null,
    be = null,
    Ce = null,
    ti = !1,
    es = !1,
    xs = 0,
    d1 = 0;
function Oe() {
    throw Error(T(321));
}
function Mu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
}
function Iu(e, t, n, r, o, s) {
    if (
        ((gr = s),
        (fe = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ja.current = e === null || e.memoizedState === null ? h1 : g1),
        (e = n(r, o)),
        es)
    ) {
        s = 0;
        do {
            if (((es = !1), (xs = 0), 25 <= s)) throw Error(T(301));
            (s += 1), (Ce = be = null), (t.updateQueue = null), (ja.current = v1), (e = n(r, o));
        } while (es);
    }
    if (((ja.current = ni), (t = be !== null && be.next !== null), (gr = 0), (Ce = be = fe = null), (ti = !1), t))
        throw Error(T(300));
    return e;
}
function Lu() {
    var e = xs !== 0;
    return (xs = 0), e;
}
function _t() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ce === null ? (fe.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function ft() {
    if (be === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = Ce === null ? fe.memoizedState : Ce.next;
    if (t !== null) (Ce = t), (be = e);
    else {
        if (e === null) throw Error(T(310));
        (be = e),
            (e = {
                memoizedState: be.memoizedState,
                baseState: be.baseState,
                baseQueue: be.baseQueue,
                queue: be.queue,
                next: null,
            }),
            Ce === null ? (fe.memoizedState = Ce = e) : (Ce = Ce.next = e);
    }
    return Ce;
}
function ys(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
    var t = ft(),
        n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = be,
        o = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var a = o.next;
            (o.next = s.next), (s.next = a);
        }
        (r.baseQueue = o = s), (n.pending = null);
    }
    if (o !== null) {
        (s = o.next), (r = r.baseState);
        var l = (a = null),
            c = null,
            u = s;
        do {
            var d = u.lane;
            if ((gr & d) === d)
                c !== null &&
                    (c = c.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                c === null ? ((l = c = f), (a = r)) : (c = c.next = f), (fe.lanes |= d), (vr |= d);
            }
            u = u.next;
        } while (u !== null && u !== s);
        c === null ? (a = r) : (c.next = l),
            kt(r, t.memoizedState) || (Ke = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = c),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (s = o.lane), (fe.lanes |= s), (vr |= s), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function jl(e) {
    var t = ft(),
        n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = (o = o.next);
        do (s = e(s, a.action)), (a = a.next);
        while (a !== o);
        kt(s, t.memoizedState) || (Ke = !0),
            (t.memoizedState = s),
            t.baseQueue === null && (t.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, r];
}
function ph() {}
function hh(e, t) {
    var n = fe,
        r = ft(),
        o = t(),
        s = !kt(r.memoizedState, o);
    if (
        (s && ((r.memoizedState = o), (Ke = !0)),
        (r = r.queue),
        Du(xh.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || s || (Ce !== null && Ce.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), ws(9, vh.bind(null, n, r, o, t), void 0, null), je === null)) throw Error(T(349));
        gr & 30 || gh(n, t, o);
    }
    return o;
}
function gh(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = fe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vh(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), yh(t) && wh(e);
}
function xh(e, t, n) {
    return n(function () {
        yh(t) && wh(e);
    });
}
function yh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kt(e, n);
    } catch {
        return !0;
    }
}
function wh(e) {
    var t = rn(e, 1);
    t !== null && jt(t, e, 1, -1);
}
function yf(e) {
    var t = _t();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ys,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = p1.bind(null, fe, e)),
        [t.memoizedState, e]
    );
}
function ws(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = fe.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function bh() {
    return ft().memoizedState;
}
function ka(e, t, n, r) {
    var o = _t();
    (fe.flags |= e), (o.memoizedState = ws(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ci(e, t, n, r) {
    var o = ft();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (be !== null) {
        var a = be.memoizedState;
        if (((s = a.destroy), r !== null && Mu(r, a.deps))) {
            o.memoizedState = ws(t, n, s, r);
            return;
        }
    }
    (fe.flags |= e), (o.memoizedState = ws(1 | t, n, s, r));
}
function wf(e, t) {
    return ka(8390656, 8, e, t);
}
function Du(e, t) {
    return Ci(2048, 8, e, t);
}
function Nh(e, t) {
    return Ci(4, 2, e, t);
}
function Sh(e, t) {
    return Ci(4, 4, e, t);
}
function Eh(e, t) {
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
function Ch(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Ci(4, 4, Eh.bind(null, t, e), n);
}
function Fu() {}
function jh(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function kh(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ph(e, t, n) {
    return gr & 21
        ? (kt(n, t) || ((n = _p()), (fe.lanes |= n), (vr |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function f1(e, t) {
    var n = te;
    (te = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = El.transition;
    El.transition = {};
    try {
        e(!1), t();
    } finally {
        (te = n), (El.transition = r);
    }
}
function Rh() {
    return ft().memoizedState;
}
function m1(e, t, n) {
    var r = $n(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Th(e))) Ah(t, n);
    else if (((n = dh(e, t, n, r)), n !== null)) {
        var o = Be();
        jt(n, e, r, o), Oh(n, t, r);
    }
}
function p1(e, t, n) {
    var r = $n(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Th(e)) Ah(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
            try {
                var a = t.lastRenderedState,
                    l = s(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), kt(l, a))) {
                    var c = t.interleaved;
                    c === null ? ((o.next = o), Ru(t)) : ((o.next = c.next), (c.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = dh(e, t, o, r)), n !== null && ((o = Be()), jt(n, e, r, o), Oh(n, t, r));
    }
}
function Th(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
}
function Ah(e, t) {
    es = ti = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Oh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
    }
}
var ni = {
        readContext: dt,
        useCallback: Oe,
        useContext: Oe,
        useEffect: Oe,
        useImperativeHandle: Oe,
        useInsertionEffect: Oe,
        useLayoutEffect: Oe,
        useMemo: Oe,
        useReducer: Oe,
        useRef: Oe,
        useState: Oe,
        useDebugValue: Oe,
        useDeferredValue: Oe,
        useTransition: Oe,
        useMutableSource: Oe,
        useSyncExternalStore: Oe,
        useId: Oe,
        unstable_isNewReconciler: !1,
    },
    h1 = {
        readContext: dt,
        useCallback: function (e, t) {
            return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: dt,
        useEffect: wf,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), ka(4194308, 4, Eh.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return ka(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ka(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = _t();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = _t();
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
                (e = e.dispatch = m1.bind(null, fe, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = _t();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: yf,
        useDebugValue: Fu,
        useDeferredValue: function (e) {
            return (_t().memoizedState = e);
        },
        useTransition: function () {
            var e = yf(!1),
                t = e[0];
            return (e = f1.bind(null, e[1])), (_t().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = fe,
                o = _t();
            if (ue) {
                if (n === void 0) throw Error(T(407));
                n = n();
            } else {
                if (((n = t()), je === null)) throw Error(T(349));
                gr & 30 || gh(r, t, n);
            }
            o.memoizedState = n;
            var s = { value: n, getSnapshot: t };
            return (
                (o.queue = s),
                wf(xh.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                ws(9, vh.bind(null, r, s, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = _t(),
                t = je.identifierPrefix;
            if (ue) {
                var n = Zt,
                    r = Jt;
                (n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = xs++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = d1++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    g1 = {
        readContext: dt,
        useCallback: jh,
        useContext: dt,
        useEffect: Du,
        useImperativeHandle: Ch,
        useInsertionEffect: Nh,
        useLayoutEffect: Sh,
        useMemo: kh,
        useReducer: Cl,
        useRef: bh,
        useState: function () {
            return Cl(ys);
        },
        useDebugValue: Fu,
        useDeferredValue: function (e) {
            var t = ft();
            return Ph(t, be.memoizedState, e);
        },
        useTransition: function () {
            var e = Cl(ys)[0],
                t = ft().memoizedState;
            return [e, t];
        },
        useMutableSource: ph,
        useSyncExternalStore: hh,
        useId: Rh,
        unstable_isNewReconciler: !1,
    },
    v1 = {
        readContext: dt,
        useCallback: jh,
        useContext: dt,
        useEffect: Du,
        useImperativeHandle: Ch,
        useInsertionEffect: Nh,
        useLayoutEffect: Sh,
        useMemo: kh,
        useReducer: jl,
        useRef: bh,
        useState: function () {
            return jl(ys);
        },
        useDebugValue: Fu,
        useDeferredValue: function (e) {
            var t = ft();
            return be === null ? (t.memoizedState = e) : Ph(t, be.memoizedState, e);
        },
        useTransition: function () {
            var e = jl(ys)[0],
                t = ft().memoizedState;
            return [e, t];
        },
        useMutableSource: ph,
        useSyncExternalStore: hh,
        useId: Rh,
        unstable_isNewReconciler: !1,
    };
function xt(e, t) {
    if (e && e.defaultProps) {
        (t = me({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Sc(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : me({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ji = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Sr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Be(),
            o = $n(e),
            s = en(r, o);
        (s.payload = t), n != null && (s.callback = n), (t = Fn(e, s, o)), t !== null && (jt(t, e, o, r), Ca(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Be(),
            o = $n(e),
            s = en(r, o);
        (s.tag = 1),
            (s.payload = t),
            n != null && (s.callback = n),
            (t = Fn(e, s, o)),
            t !== null && (jt(t, e, o, r), Ca(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Be(),
            r = $n(e),
            o = en(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Fn(e, o, r)), t !== null && (jt(t, e, r, n), Ca(t, e, r));
    },
};
function bf(e, t, n, r, o, s, a) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, s, a)
            : t.prototype && t.prototype.isPureReactComponent
              ? !fs(n, r) || !fs(o, s)
              : !0
    );
}
function _h(e, t, n) {
    var r = !1,
        o = Vn,
        s = t.contextType;
    return (
        typeof s == "object" && s !== null
            ? (s = dt(s))
            : ((o = Qe(t) ? pr : De.current), (r = t.contextTypes), (s = (r = r != null) ? po(e, o) : Vn)),
        (t = new t(n, s)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ji),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = s)),
        t
    );
}
function Nf(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ji.enqueueReplaceState(t, t.state, null);
}
function Ec(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Tu(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? (o.context = dt(s)) : ((s = Qe(t) ? pr : De.current), (o.context = po(e, s))),
        (o.state = e.memoizedState),
        (s = t.getDerivedStateFromProps),
        typeof s == "function" && (Sc(e, t, s, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && ji.enqueueReplaceState(o, o.state, null),
            Za(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function xo(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Hy(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (s) {
        o =
            `
Error generating stack: ` +
            s.message +
            `
` +
            s.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function kl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var x1 = typeof WeakMap == "function" ? WeakMap : Map;
function Mh(e, t, n) {
    (n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            oi || ((oi = !0), (Ic = r)), Cc(e, t);
        }),
        n
    );
}
function Ih(e, t, n) {
    (n = en(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                Cc(e, t);
            });
    }
    var s = e.stateNode;
    return (
        s !== null &&
            typeof s.componentDidCatch == "function" &&
            (n.callback = function () {
                Cc(e, t), typeof r != "function" && (zn === null ? (zn = new Set([this])) : zn.add(this));
                var a = t.stack;
                this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
            }),
        n
    );
}
function Sf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new x1();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = O1.bind(null, e, t, n)), t.then(e, e));
}
function Ef(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Cf(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = en(-1, 1)), (t.tag = 2), Fn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var y1 = cn.ReactCurrentOwner,
    Ke = !1;
function ze(e, t, n, r) {
    t.child = e === null ? uh(t, null, n, r) : go(t, e.child, n, r);
}
function jf(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return (
        Zr(t, o),
        (r = Iu(e, t, n, r, s, o)),
        (n = Lu()),
        e !== null && !Ke
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), on(e, t, o))
            : (ue && n && Su(t), (t.flags |= 1), ze(e, t, r, o), t.child)
    );
}
function kf(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" &&
            !Ku(s) &&
            s.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = s), Lh(e, t, s, r, o))
            : ((e = Aa(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((s = e.child), !(e.lanes & o))) {
        var a = s.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : fs), n(a, r) && e.ref === t.ref)) return on(e, t, o);
    }
    return (t.flags |= 1), (e = Bn(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Lh(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (fs(s, r) && e.ref === t.ref)
            if (((Ke = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0)) e.flags & 131072 && (Ke = !0);
            else return (t.lanes = e.lanes), on(e, t, o);
    }
    return jc(e, t, n, r, o);
}
function Dh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), oe(Qr, qe), (qe |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = s !== null ? s.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    oe(Qr, qe),
                    (qe |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = s !== null ? s.baseLanes : n),
                oe(Qr, qe),
                (qe |= r);
        }
    else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), oe(Qr, qe), (qe |= r);
    return ze(e, t, o, n), t.child;
}
function Fh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function jc(e, t, n, r, o) {
    var s = Qe(n) ? pr : De.current;
    return (
        (s = po(t, s)),
        Zr(t, o),
        (n = Iu(e, t, n, r, s, o)),
        (r = Lu()),
        e !== null && !Ke
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), on(e, t, o))
            : (ue && r && Su(t), (t.flags |= 1), ze(e, t, n, o), t.child)
    );
}
function Pf(e, t, n, r, o) {
    if (Qe(n)) {
        var s = !0;
        Qa(t);
    } else s = !1;
    if ((Zr(t, o), t.stateNode === null)) Pa(e, t), _h(t, n, r), Ec(t, n, r, o), (r = !0);
    else if (e === null) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var c = a.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = dt(u)) : ((u = Qe(n) ? pr : De.current), (u = po(t, u)));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
                typeof a.componentWillReceiveProps != "function") ||
            ((l !== r || c !== u) && Nf(t, a, r, u)),
            (Sn = !1);
        var v = t.memoizedState;
        (a.state = v),
            Za(t, r, a, o),
            (c = t.memoizedState),
            l !== r || v !== c || Ge.current || Sn
                ? (typeof d == "function" && (Sc(t, n, d, r), (c = t.memoizedState)),
                  (l = Sn || bf(t, n, l, r, v, c, u))
                      ? (f ||
                            (typeof a.UNSAFE_componentWillMount != "function" &&
                                typeof a.componentWillMount != "function") ||
                            (typeof a.componentWillMount == "function" && a.componentWillMount(),
                            typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
                        typeof a.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = c)),
                  (a.props = r),
                  (a.state = c),
                  (a.context = u),
                  (r = l))
                : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (a = t.stateNode),
            fh(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : xt(t.type, l)),
            (a.props = u),
            (f = t.pendingProps),
            (v = a.context),
            (c = n.contextType),
            typeof c == "object" && c !== null ? (c = dt(c)) : ((c = Qe(n) ? pr : De.current), (c = po(t, c)));
        var m = n.getDerivedStateFromProps;
        (d = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") ||
            (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
                typeof a.componentWillReceiveProps != "function") ||
            ((l !== f || v !== c) && Nf(t, a, r, c)),
            (Sn = !1),
            (v = t.memoizedState),
            (a.state = v),
            Za(t, r, a, o);
        var b = t.memoizedState;
        l !== f || v !== b || Ge.current || Sn
            ? (typeof m == "function" && (Sc(t, n, m, r), (b = t.memoizedState)),
              (u = Sn || bf(t, n, u, r, v, b, c) || !1)
                  ? (d ||
                        (typeof a.UNSAFE_componentWillUpdate != "function" &&
                            typeof a.componentWillUpdate != "function") ||
                        (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, c),
                        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, c)),
                    typeof a.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof a.componentDidUpdate != "function" ||
                        (l === e.memoizedProps && v === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate != "function" ||
                        (l === e.memoizedProps && v === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = b)),
              (a.props = r),
              (a.state = b),
              (a.context = c),
              (r = u))
            : (typeof a.componentDidUpdate != "function" ||
                  (l === e.memoizedProps && v === e.memoizedState) ||
                  (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                  (l === e.memoizedProps && v === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return kc(e, t, n, r, s, o);
}
function kc(e, t, n, r, o, s) {
    Fh(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && mf(t, n, !1), on(e, t, s);
    (r = t.stateNode), (y1.current = t);
    var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && a ? ((t.child = go(t, e.child, null, s)), (t.child = go(t, null, l, s))) : ze(e, t, l, s),
        (t.memoizedState = r.state),
        o && mf(t, n, !0),
        t.child
    );
}
function zh(e) {
    var t = e.stateNode;
    t.pendingContext ? ff(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ff(e, t.context, !1),
        Au(e, t.containerInfo);
}
function Rf(e, t, n, r, o) {
    return ho(), Cu(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Rc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function $h(e, t, n) {
    var r = t.pendingProps,
        o = de.current,
        s = !1,
        a = (t.flags & 128) !== 0,
        l;
    if (
        ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        l ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
        oe(de, o & 1),
        e === null)
    )
        return (
            bc(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((a = r.children),
                  (e = r.fallback),
                  s
                      ? ((r = t.mode),
                        (s = t.child),
                        (a = { mode: "hidden", children: a }),
                        !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = a)) : (s = Ri(a, r, 0, null)),
                        (e = fr(e, r, n, null)),
                        (s.return = t),
                        (e.return = t),
                        (s.sibling = e),
                        (t.child = s),
                        (t.child.memoizedState = Rc(n)),
                        (t.memoizedState = Pc),
                        e)
                      : zu(t, a))
        );
    if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return w1(e, t, a, r, l, o, n);
    if (s) {
        (s = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
        var c = { mode: "hidden", children: r.children };
        return (
            !(a & 1) && t.child !== o
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = c), (t.deletions = null))
                : ((r = Bn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
            l !== null ? (s = Bn(l, s)) : ((s = fr(s, a, n, null)), (s.flags |= 2)),
            (s.return = t),
            (r.return = t),
            (r.sibling = s),
            (t.child = r),
            (r = s),
            (s = t.child),
            (a = e.child.memoizedState),
            (a = a === null ? Rc(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
            (s.memoizedState = a),
            (s.childLanes = e.childLanes & ~n),
            (t.memoizedState = Pc),
            r
        );
    }
    return (
        (s = e.child),
        (e = s.sibling),
        (r = Bn(s, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function zu(e, t) {
    return (t = Ri({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function aa(e, t, n, r) {
    return (
        r !== null && Cu(r),
        go(t, e.child, null, n),
        (e = zu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function w1(e, t, n, r, o, s, a) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = kl(Error(T(422)))), aa(e, t, a, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((s = r.fallback),
                (o = t.mode),
                (r = Ri({ mode: "visible", children: r.children }, o, 0, null)),
                (s = fr(s, o, a, null)),
                (s.flags |= 2),
                (r.return = t),
                (s.return = t),
                (r.sibling = s),
                (t.child = r),
                t.mode & 1 && go(t, e.child, null, a),
                (t.child.memoizedState = Rc(a)),
                (t.memoizedState = Pc),
                s);
    if (!(t.mode & 1)) return aa(e, t, a, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (r = l), (s = Error(T(419))), (r = kl(s, r, void 0)), aa(e, t, a, r);
    }
    if (((l = (a & e.childLanes) !== 0), Ke || l)) {
        if (((r = je), r !== null)) {
            switch (a & -a) {
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
            (o = o & (r.suspendedLanes | a) ? 0 : o),
                o !== 0 && o !== s.retryLane && ((s.retryLane = o), rn(e, o), jt(r, e, o, -1));
        }
        return Hu(), (r = kl(Error(T(421)))), aa(e, t, a, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = _1.bind(null, e)), (o._reactRetry = t), null)
        : ((e = s.treeContext),
          (Je = Dn(o.nextSibling)),
          (Ze = t),
          (ue = !0),
          (Et = null),
          e !== null && ((at[it++] = Jt), (at[it++] = Zt), (at[it++] = hr), (Jt = e.id), (Zt = e.overflow), (hr = t)),
          (t = zu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Tf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Nc(e.return, t, n);
}
function Pl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((s.isBackwards = t),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = r),
          (s.tail = n),
          (s.tailMode = o));
}
function Bh(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        s = r.tail;
    if ((ze(e, t, r.children, n), (r = de.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Tf(e, n, t);
                else if (e.tag === 19) Tf(e, n, t);
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
    if ((oe(de, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate), e !== null && ei(e) === null && (o = n), (n = n.sibling);
                (n = o),
                    n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    Pl(t, !1, o, n, s);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && ei(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Pl(t, !0, n, null, s);
                break;
            case "together":
                Pl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Pa(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (vr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = Bn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function b1(e, t, n) {
    switch (t.tag) {
        case 3:
            zh(t), ho();
            break;
        case 5:
            mh(t);
            break;
        case 1:
            Qe(t.type) && Qa(t);
            break;
        case 4:
            Au(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            oe(Xa, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (oe(de, de.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? $h(e, t, n)
                      : (oe(de, de.current & 1), (e = on(e, t, n)), e !== null ? e.sibling : null);
            oe(de, de.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Bh(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                oe(de, de.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Dh(e, t, n);
    }
    return on(e, t, n);
}
var Uh, Tc, Vh, Wh;
Uh = function (e, t) {
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
Tc = function () {};
Vh = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), or(Ut.current);
        var s = null;
        switch (n) {
            case "input":
                (o = Jl(e, o)), (r = Jl(e, r)), (s = []);
                break;
            case "select":
                (o = me({}, o, { value: void 0 })), (r = me({}, r, { value: void 0 })), (s = []);
                break;
            case "textarea":
                (o = tc(e, o)), (r = tc(e, r)), (s = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ka);
        }
        rc(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (ss.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && c !== l && (c != null || l != null)))
                if (u === "style")
                    if (l) {
                        for (a in l) !l.hasOwnProperty(a) || (c && c.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
                        for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}), (n[a] = c[a]));
                    } else n || (s || (s = []), s.push(u, n)), (n = c);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((c = c ? c.__html : void 0),
                          (l = l ? l.__html : void 0),
                          c != null && l !== c && (s = s || []).push(u, c))
                        : u === "children"
                          ? (typeof c != "string" && typeof c != "number") || (s = s || []).push(u, "" + c)
                          : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (ss.hasOwnProperty(u)
                                ? (c != null && u === "onScroll" && ae("scroll", e), s || l === c || (s = []))
                                : (s = s || []).push(u, c));
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Wh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Bo(e, t) {
    if (!ue)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function N1(e, t, n) {
    var r = t.pendingProps;
    switch ((Eu(t), t.tag)) {
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
            return _e(t), null;
        case 1:
            return Qe(t.type) && Ga(), _e(t), null;
        case 3:
            return (
                (r = t.stateNode),
                vo(),
                ie(Ge),
                ie(De),
                _u(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (oa(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), Et !== null && (Fc(Et), (Et = null)))),
                Tc(e, t),
                _e(t),
                null
            );
        case 5:
            Ou(t);
            var o = or(vs.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Vh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(T(166));
                    return _e(t), null;
                }
                if (((e = or(Ut.current)), oa(t))) {
                    (r = t.stateNode), (n = t.type);
                    var s = t.memoizedProps;
                    switch (((r[Dt] = t), (r[hs] = s), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            ae("cancel", r), ae("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ae("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Qo.length; o++) ae(Qo[o], r);
                            break;
                        case "source":
                            ae("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ae("error", r), ae("load", r);
                            break;
                        case "details":
                            ae("toggle", r);
                            break;
                        case "input":
                            Fd(r, s), ae("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!s.multiple }), ae("invalid", r);
                            break;
                        case "textarea":
                            $d(r, s), ae("invalid", r);
                    }
                    rc(n, s), (o = null);
                    for (var a in s)
                        if (s.hasOwnProperty(a)) {
                            var l = s[a];
                            a === "children"
                                ? typeof l == "string"
                                    ? r.textContent !== l &&
                                      (s.suppressHydrationWarning !== !0 && ra(r.textContent, l, e),
                                      (o = ["children", l]))
                                    : typeof l == "number" &&
                                      r.textContent !== "" + l &&
                                      (s.suppressHydrationWarning !== !0 && ra(r.textContent, l, e),
                                      (o = ["children", "" + l]))
                                : ss.hasOwnProperty(a) && l != null && a === "onScroll" && ae("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Ys(r), zd(r, s, !0);
                            break;
                        case "textarea":
                            Ys(r), Bd(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = Ka);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (a = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = xp(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = a.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = a.createElement(n, { is: r.is }))
                                  : ((e = a.createElement(n)),
                                    n === "select" &&
                                        ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
                            : (e = a.createElementNS(e, n)),
                        (e[Dt] = t),
                        (e[hs] = r),
                        Uh(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((a = oc(n, r)), n)) {
                            case "dialog":
                                ae("cancel", e), ae("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ae("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Qo.length; o++) ae(Qo[o], e);
                                o = r;
                                break;
                            case "source":
                                ae("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ae("error", e), ae("load", e), (o = r);
                                break;
                            case "details":
                                ae("toggle", e), (o = r);
                                break;
                            case "input":
                                Fd(e, r), (o = Jl(e, r)), ae("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = me({}, r, { value: void 0 })),
                                    ae("invalid", e);
                                break;
                            case "textarea":
                                $d(e, r), (o = tc(e, r)), ae("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        rc(n, o), (l = o);
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var c = l[s];
                                s === "style"
                                    ? bp(e, c)
                                    : s === "dangerouslySetInnerHTML"
                                      ? ((c = c ? c.__html : void 0), c != null && yp(e, c))
                                      : s === "children"
                                        ? typeof c == "string"
                                            ? (n !== "textarea" || c !== "") && as(e, c)
                                            : typeof c == "number" && as(e, "" + c)
                                        : s !== "suppressContentEditableWarning" &&
                                          s !== "suppressHydrationWarning" &&
                                          s !== "autoFocus" &&
                                          (ss.hasOwnProperty(s)
                                              ? c != null && s === "onScroll" && ae("scroll", e)
                                              : c != null && cu(e, s, c, a));
                            }
                        switch (n) {
                            case "input":
                                Ys(e), zd(e, r, !1);
                                break;
                            case "textarea":
                                Ys(e), Bd(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Un(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (s = r.value),
                                    s != null
                                        ? Yr(e, !!r.multiple, s, !1)
                                        : r.defaultValue != null && Yr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Ka);
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
            return _e(t), null;
        case 6:
            if (e && t.stateNode != null) Wh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                if (((n = or(vs.current)), or(Ut.current), oa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Dt] = t),
                        (s = r.nodeValue !== n) && ((e = Ze), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                ra(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    ra(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    s && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Dt] = t), (t.stateNode = r);
            }
            return _e(t), null;
        case 13:
            if (
                (ie(de),
                (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (ue && Je !== null && t.mode & 1 && !(t.flags & 128)) lh(), ho(), (t.flags |= 98560), (s = !1);
                else if (((s = oa(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!s) throw Error(T(318));
                        if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(T(317));
                        s[Dt] = t;
                    } else ho(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    _e(t), (s = !1);
                } else Et !== null && (Fc(Et), (Et = null)), (s = !0);
                if (!s) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 && (e === null || de.current & 1 ? Ne === 0 && (Ne = 3) : Hu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  _e(t),
                  null);
        case 4:
            return vo(), Tc(e, t), e === null && ms(t.stateNode.containerInfo), _e(t), null;
        case 10:
            return Pu(t.type._context), _e(t), null;
        case 17:
            return Qe(t.type) && Ga(), _e(t), null;
        case 19:
            if ((ie(de), (s = t.memoizedState), s === null)) return _e(t), null;
            if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
                if (r) Bo(s, !1);
                else {
                    if (Ne !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((a = ei(e)), a !== null)) {
                                for (
                                    t.flags |= 128,
                                        Bo(s, !1),
                                        r = a.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (s = n),
                                        (e = r),
                                        (s.flags &= 14680066),
                                        (a = s.alternate),
                                        a === null
                                            ? ((s.childLanes = 0),
                                              (s.lanes = e),
                                              (s.child = null),
                                              (s.subtreeFlags = 0),
                                              (s.memoizedProps = null),
                                              (s.memoizedState = null),
                                              (s.updateQueue = null),
                                              (s.dependencies = null),
                                              (s.stateNode = null))
                                            : ((s.childLanes = a.childLanes),
                                              (s.lanes = a.lanes),
                                              (s.child = a.child),
                                              (s.subtreeFlags = 0),
                                              (s.deletions = null),
                                              (s.memoizedProps = a.memoizedProps),
                                              (s.memoizedState = a.memoizedState),
                                              (s.updateQueue = a.updateQueue),
                                              (s.type = a.type),
                                              (e = a.dependencies),
                                              (s.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return oe(de, (de.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    s.tail !== null && xe() > yo && ((t.flags |= 128), (r = !0), Bo(s, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ei(a)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Bo(s, !0),
                            s.tail === null && s.tailMode === "hidden" && !a.alternate && !ue)
                        )
                            return _e(t), null;
                    } else
                        2 * xe() - s.renderingStartTime > yo &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), Bo(s, !1), (t.lanes = 4194304));
                s.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : ((n = s.last), n !== null ? (n.sibling = a) : (t.child = a), (s.last = a));
            }
            return s.tail !== null
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = xe()),
                  (t.sibling = null),
                  (n = de.current),
                  oe(de, r ? (n & 1) | 2 : n & 1),
                  t)
                : (_e(t), null);
        case 22:
        case 23:
            return (
                Wu(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? qe & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(T(156, t.tag));
}
function S1(e, t) {
    switch ((Eu(t), t.tag)) {
        case 1:
            return Qe(t.type) && Ga(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                vo(),
                ie(Ge),
                ie(De),
                _u(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return Ou(t), null;
        case 13:
            if ((ie(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(T(340));
                ho();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return ie(de), null;
        case 4:
            return vo(), null;
        case 10:
            return Pu(t.type._context), null;
        case 22:
        case 23:
            return Wu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ia = !1,
    Ie = !1,
    E1 = typeof WeakSet == "function" ? WeakSet : Set,
    D = null;
function Gr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ge(e, t, r);
            }
        else n.current = null;
}
function Ac(e, t, n) {
    try {
        n();
    } catch (r) {
        ge(e, t, r);
    }
}
var Af = !1;
function C1(e, t) {
    if (((pc = Va), (e = Yp()), Nu(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, s.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var a = 0,
                        l = -1,
                        c = -1,
                        u = 0,
                        d = 0,
                        f = e,
                        v = null;
                    t: for (;;) {
                        for (
                            var m;
                            f !== n || (o !== 0 && f.nodeType !== 3) || (l = a + o),
                                f !== s || (r !== 0 && f.nodeType !== 3) || (c = a + r),
                                f.nodeType === 3 && (a += f.nodeValue.length),
                                (m = f.firstChild) !== null;

                        )
                            (v = f), (f = m);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (v === n && ++u === o && (l = a),
                                v === s && ++d === r && (c = a),
                                (m = f.nextSibling) !== null)
                            )
                                break;
                            (f = v), (v = f.parentNode);
                        }
                        f = m;
                    }
                    n = l === -1 || c === -1 ? null : { start: l, end: c };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (hc = { focusedElem: e, selectionRange: n }, Va = !1, D = t; D !== null; )
        if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (D = e);
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (b !== null) {
                                    var p = b.memoizedProps,
                                        y = b.memoizedState,
                                        g = t.stateNode,
                                        x = g.getSnapshotBeforeUpdate(t.elementType === t.type ? p : xt(t.type, p), y);
                                    g.__reactInternalSnapshotBeforeUpdate = x;
                                }
                                break;
                            case 3:
                                var w = t.stateNode.containerInfo;
                                w.nodeType === 1
                                    ? (w.textContent = "")
                                    : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(T(163));
                        }
                } catch (N) {
                    ge(t, t.return, N);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (D = e);
                    break;
                }
                D = t.return;
            }
    return (b = Af), (Af = !1), b;
}
function ts(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                (o.destroy = void 0), s !== void 0 && Ac(t, n, s);
            }
            o = o.next;
        } while (o !== r);
    }
}
function ki(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function Oc(e) {
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
function Hh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Hh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode), t !== null && (delete t[Dt], delete t[hs], delete t[xc], delete t[i1], delete t[l1])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Kh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Of(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Kh(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function _c(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Ka));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (_c(e, t, n), e = e.sibling; e !== null; ) _c(e, t, n), (e = e.sibling);
}
function Mc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Mc(e, t, n), e = e.sibling; e !== null; ) Mc(e, t, n), (e = e.sibling);
}
var ke = null,
    Nt = !1;
function vn(e, t, n) {
    for (n = n.child; n !== null; ) Gh(e, t, n), (n = n.sibling);
}
function Gh(e, t, n) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function")
        try {
            Bt.onCommitFiberUnmount(yi, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Ie || Gr(n, t);
        case 6:
            var r = ke,
                o = Nt;
            (ke = null),
                vn(e, t, n),
                (ke = r),
                (Nt = o),
                ke !== null &&
                    (Nt
                        ? ((e = ke),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ke.removeChild(n.stateNode));
            break;
        case 18:
            ke !== null &&
                (Nt
                    ? ((e = ke),
                      (n = n.stateNode),
                      e.nodeType === 8 ? bl(e.parentNode, n) : e.nodeType === 1 && bl(e, n),
                      us(e))
                    : bl(ke, n.stateNode));
            break;
        case 4:
            (r = ke), (o = Nt), (ke = n.stateNode.containerInfo), (Nt = !0), vn(e, t, n), (ke = r), (Nt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ie && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var s = o,
                        a = s.destroy;
                    (s = s.tag), a !== void 0 && (s & 2 || s & 4) && Ac(n, t, a), (o = o.next);
                } while (o !== r);
            }
            vn(e, t, n);
            break;
        case 1:
            if (!Ie && (Gr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (l) {
                    ge(n, t, l);
                }
            vn(e, t, n);
            break;
        case 21:
            vn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Ie = (r = Ie) || n.memoizedState !== null), vn(e, t, n), (Ie = r)) : vn(e, t, n);
            break;
        default:
            vn(e, t, n);
    }
}
function _f(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new E1()),
            t.forEach(function (r) {
                var o = M1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function gt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e,
                    a = t,
                    l = a;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (ke = l.stateNode), (Nt = !1);
                            break e;
                        case 3:
                            (ke = l.stateNode.containerInfo), (Nt = !0);
                            break e;
                        case 4:
                            (ke = l.stateNode.containerInfo), (Nt = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (ke === null) throw Error(T(160));
                Gh(s, a, o), (ke = null), (Nt = !1);
                var c = o.alternate;
                c !== null && (c.return = null), (o.return = null);
            } catch (u) {
                ge(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qh(t, e), (t = t.sibling);
}
function Qh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((gt(t, e), Ot(e), r & 4)) {
                try {
                    ts(3, e, e.return), ki(3, e);
                } catch (p) {
                    ge(e, e.return, p);
                }
                try {
                    ts(5, e, e.return);
                } catch (p) {
                    ge(e, e.return, p);
                }
            }
            break;
        case 1:
            gt(t, e), Ot(e), r & 512 && n !== null && Gr(n, n.return);
            break;
        case 5:
            if ((gt(t, e), Ot(e), r & 512 && n !== null && Gr(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    as(o, "");
                } catch (p) {
                    ge(e, e.return, p);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var s = e.memoizedProps,
                    a = n !== null ? n.memoizedProps : s,
                    l = e.type,
                    c = e.updateQueue;
                if (((e.updateQueue = null), c !== null))
                    try {
                        l === "input" && s.type === "radio" && s.name != null && gp(o, s), oc(l, a);
                        var u = oc(l, s);
                        for (a = 0; a < c.length; a += 2) {
                            var d = c[a],
                                f = c[a + 1];
                            d === "style"
                                ? bp(o, f)
                                : d === "dangerouslySetInnerHTML"
                                  ? yp(o, f)
                                  : d === "children"
                                    ? as(o, f)
                                    : cu(o, d, f, u);
                        }
                        switch (l) {
                            case "input":
                                Zl(o, s);
                                break;
                            case "textarea":
                                vp(o, s);
                                break;
                            case "select":
                                var v = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!s.multiple;
                                var m = s.value;
                                m != null
                                    ? Yr(o, !!s.multiple, m, !1)
                                    : v !== !!s.multiple &&
                                      (s.defaultValue != null
                                          ? Yr(o, !!s.multiple, s.defaultValue, !0)
                                          : Yr(o, !!s.multiple, s.multiple ? [] : "", !1));
                        }
                        o[hs] = s;
                    } catch (p) {
                        ge(e, e.return, p);
                    }
            }
            break;
        case 6:
            if ((gt(t, e), Ot(e), r & 4)) {
                if (e.stateNode === null) throw Error(T(162));
                (o = e.stateNode), (s = e.memoizedProps);
                try {
                    o.nodeValue = s;
                } catch (p) {
                    ge(e, e.return, p);
                }
            }
            break;
        case 3:
            if ((gt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    us(t.containerInfo);
                } catch (p) {
                    ge(e, e.return, p);
                }
            break;
        case 4:
            gt(t, e), Ot(e);
            break;
        case 13:
            gt(t, e),
                Ot(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((s = o.memoizedState !== null),
                    (o.stateNode.isHidden = s),
                    !s || (o.alternate !== null && o.alternate.memoizedState !== null) || (Uu = xe())),
                r & 4 && _f(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((Ie = (u = Ie) || d), gt(t, e), (Ie = u)) : gt(t, e),
                Ot(e),
                r & 8192)
            ) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
                    for (D = e, d = e.child; d !== null; ) {
                        for (f = D = d; D !== null; ) {
                            switch (((v = D), (m = v.child), v.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ts(4, v, v.return);
                                    break;
                                case 1:
                                    Gr(v, v.return);
                                    var b = v.stateNode;
                                    if (typeof b.componentWillUnmount == "function") {
                                        (r = v), (n = v.return);
                                        try {
                                            (t = r),
                                                (b.props = t.memoizedProps),
                                                (b.state = t.memoizedState),
                                                b.componentWillUnmount();
                                        } catch (p) {
                                            ge(r, n, p);
                                        }
                                    }
                                    break;
                                case 5:
                                    Gr(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        If(f);
                                        continue;
                                    }
                            }
                            m !== null ? ((m.return = v), (D = m)) : If(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (o = f.stateNode),
                                    u
                                        ? ((s = o.style),
                                          typeof s.setProperty == "function"
                                              ? s.setProperty("display", "none", "important")
                                              : (s.display = "none"))
                                        : ((l = f.stateNode),
                                          (c = f.memoizedProps.style),
                                          (a = c != null && c.hasOwnProperty("display") ? c.display : null),
                                          (l.style.display = wp("display", a)));
                            } catch (p) {
                                ge(e, e.return, p);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (p) {
                                ge(e, e.return, p);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            gt(t, e), Ot(e), r & 4 && _f(e);
            break;
        case 21:
            break;
        default:
            gt(t, e), Ot(e);
    }
}
function Ot(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Kh(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(T(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (as(o, ""), (r.flags &= -33));
                    var s = Of(e);
                    Mc(e, s, o);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo,
                        l = Of(e);
                    _c(e, l, a);
                    break;
                default:
                    throw Error(T(161));
            }
        } catch (c) {
            ge(e, e.return, c);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function j1(e, t, n) {
    (D = e), Yh(e);
}
function Yh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var o = D,
            s = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || ia;
            if (!a) {
                var l = o.alternate,
                    c = (l !== null && l.memoizedState !== null) || Ie;
                l = ia;
                var u = Ie;
                if (((ia = a), (Ie = c) && !u))
                    for (D = o; D !== null; )
                        (a = D),
                            (c = a.child),
                            a.tag === 22 && a.memoizedState !== null
                                ? Lf(o)
                                : c !== null
                                  ? ((c.return = a), (D = c))
                                  : Lf(o);
                for (; s !== null; ) (D = s), Yh(s), (s = s.sibling);
                (D = o), (ia = l), (Ie = u);
            }
            Mf(e);
        } else o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (D = s)) : Mf(e);
    }
}
function Mf(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ie || ki(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ie)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var s = t.updateQueue;
                            s !== null && xf(t, s, r);
                            break;
                        case 3:
                            var a = t.updateQueue;
                            if (a !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                xf(t, a, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var c = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        c.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        c.src && (n.src = c.src);
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
                                        f !== null && us(f);
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
                            throw Error(T(163));
                    }
                Ie || (t.flags & 512 && Oc(t));
            } catch (v) {
                ge(t, t.return, v);
            }
        }
        if (t === e) {
            D = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (D = n);
            break;
        }
        D = t.return;
    }
}
function If(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (D = n);
            break;
        }
        D = t.return;
    }
}
function Lf(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ki(4, t);
                    } catch (c) {
                        ge(t, n, c);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (c) {
                            ge(t, o, c);
                        }
                    }
                    var s = t.return;
                    try {
                        Oc(t);
                    } catch (c) {
                        ge(t, s, c);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Oc(t);
                    } catch (c) {
                        ge(t, a, c);
                    }
            }
        } catch (c) {
            ge(t, t.return, c);
        }
        if (t === e) {
            D = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (D = l);
            break;
        }
        D = t.return;
    }
}
var k1 = Math.ceil,
    ri = cn.ReactCurrentDispatcher,
    $u = cn.ReactCurrentOwner,
    ut = cn.ReactCurrentBatchConfig,
    J = 0,
    je = null,
    we = null,
    Pe = 0,
    qe = 0,
    Qr = Qn(0),
    Ne = 0,
    bs = null,
    vr = 0,
    Pi = 0,
    Bu = 0,
    ns = null,
    He = null,
    Uu = 0,
    yo = 1 / 0,
    Qt = null,
    oi = !1,
    Ic = null,
    zn = null,
    la = !1,
    On = null,
    si = 0,
    rs = 0,
    Lc = null,
    Ra = -1,
    Ta = 0;
function Be() {
    return J & 6 ? xe() : Ra !== -1 ? Ra : (Ra = xe());
}
function $n(e) {
    return e.mode & 1
        ? J & 2 && Pe !== 0
            ? Pe & -Pe
            : u1.transition !== null
              ? (Ta === 0 && (Ta = _p()), Ta)
              : ((e = te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $p(e.type))), e)
        : 1;
}
function jt(e, t, n, r) {
    if (50 < rs) throw ((rs = 0), (Lc = null), Error(T(185)));
    Ms(e, n, r),
        (!(J & 2) || e !== je) &&
            (e === je && (!(J & 2) && (Pi |= n), Ne === 4 && Cn(e, Pe)),
            Ye(e, r),
            n === 1 && J === 0 && !(t.mode & 1) && ((yo = xe() + 500), Ei && Yn()));
}
function Ye(e, t) {
    var n = e.callbackNode;
    u0(e, t);
    var r = Ua(e, e === je ? Pe : 0);
    if (r === 0) n !== null && Wd(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Wd(n), t === 1))
            e.tag === 0 ? c1(Df.bind(null, e)) : sh(Df.bind(null, e)),
                s1(function () {
                    !(J & 6) && Yn();
                }),
                (n = null);
        else {
            switch (Mp(r)) {
                case 1:
                    n = pu;
                    break;
                case 4:
                    n = Ap;
                    break;
                case 16:
                    n = Ba;
                    break;
                case 536870912:
                    n = Op;
                    break;
                default:
                    n = Ba;
            }
            n = rg(n, qh.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function qh(e, t) {
    if (((Ra = -1), (Ta = 0), J & 6)) throw Error(T(327));
    var n = e.callbackNode;
    if (eo() && e.callbackNode !== n) return null;
    var r = Ua(e, e === je ? Pe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ai(e, r);
    else {
        t = r;
        var o = J;
        J |= 2;
        var s = Jh();
        (je !== e || Pe !== t) && ((Qt = null), (yo = xe() + 500), dr(e, t));
        do
            try {
                T1();
                break;
            } catch (l) {
                Xh(e, l);
            }
        while (!0);
        ku(), (ri.current = s), (J = o), we !== null ? (t = 0) : ((je = null), (Pe = 0), (t = Ne));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = cc(e)), o !== 0 && ((r = o), (t = Dc(e, o)))), t === 1))
            throw ((n = bs), dr(e, 0), Cn(e, r), Ye(e, xe()), n);
        if (t === 6) Cn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !P1(o) &&
                    ((t = ai(e, r)), t === 2 && ((s = cc(e)), s !== 0 && ((r = s), (t = Dc(e, s)))), t === 1))
            )
                throw ((n = bs), dr(e, 0), Cn(e, r), Ye(e, xe()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    er(e, He, Qt);
                    break;
                case 3:
                    if ((Cn(e, r), (r & 130023424) === r && ((t = Uu + 500 - xe()), 10 < t))) {
                        if (Ua(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Be(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = vc(er.bind(null, e, He, Qt), t);
                        break;
                    }
                    er(e, He, Qt);
                    break;
                case 4:
                    if ((Cn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var a = 31 - Ct(r);
                        (s = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~s);
                    }
                    if (
                        ((r = o),
                        (r = xe() - r),
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
                                          : 1960 * k1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = vc(er.bind(null, e, He, Qt), r);
                        break;
                    }
                    er(e, He, Qt);
                    break;
                case 5:
                    er(e, He, Qt);
                    break;
                default:
                    throw Error(T(329));
            }
        }
    }
    return Ye(e, xe()), e.callbackNode === n ? qh.bind(null, e) : null;
}
function Dc(e, t) {
    var n = ns;
    return (
        e.current.memoizedState.isDehydrated && (dr(e, t).flags |= 256),
        (e = ai(e, t)),
        e !== 2 && ((t = He), (He = n), t !== null && Fc(t)),
        e
    );
}
function Fc(e) {
    He === null ? (He = e) : He.push.apply(He, e);
}
function P1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!kt(s(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
function Cn(e, t) {
    for (t &= ~Bu, t &= ~Pi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ct(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Df(e) {
    if (J & 6) throw Error(T(327));
    eo();
    var t = Ua(e, 0);
    if (!(t & 1)) return Ye(e, xe()), null;
    var n = ai(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = cc(e);
        r !== 0 && ((t = r), (n = Dc(e, r)));
    }
    if (n === 1) throw ((n = bs), dr(e, 0), Cn(e, t), Ye(e, xe()), n);
    if (n === 6) throw Error(T(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), er(e, He, Qt), Ye(e, xe()), null;
}
function Vu(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t);
    } finally {
        (J = n), J === 0 && ((yo = xe() + 500), Ei && Yn());
    }
}
function xr(e) {
    On !== null && On.tag === 0 && !(J & 6) && eo();
    var t = J;
    J |= 1;
    var n = ut.transition,
        r = te;
    try {
        if (((ut.transition = null), (te = 1), e)) return e();
    } finally {
        (te = r), (ut.transition = n), (J = t), !(J & 6) && Yn();
    }
}
function Wu() {
    (qe = Qr.current), ie(Qr);
}
function dr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), o1(n)), we !== null))
        for (n = we.return; n !== null; ) {
            var r = n;
            switch ((Eu(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ga();
                    break;
                case 3:
                    vo(), ie(Ge), ie(De), _u();
                    break;
                case 5:
                    Ou(r);
                    break;
                case 4:
                    vo();
                    break;
                case 13:
                    ie(de);
                    break;
                case 19:
                    ie(de);
                    break;
                case 10:
                    Pu(r.type._context);
                    break;
                case 22:
                case 23:
                    Wu();
            }
            n = n.return;
        }
    if (
        ((je = e),
        (we = e = Bn(e.current, null)),
        (Pe = qe = t),
        (Ne = 0),
        (bs = null),
        (Bu = Pi = vr = 0),
        (He = ns = null),
        rr !== null)
    ) {
        for (t = 0; t < rr.length; t++)
            if (((n = rr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    s = n.pending;
                if (s !== null) {
                    var a = s.next;
                    (s.next = o), (r.next = a);
                }
                n.pending = r;
            }
        rr = null;
    }
    return e;
}
function Xh(e, t) {
    do {
        var n = we;
        try {
            if ((ku(), (ja.current = ni), ti)) {
                for (var r = fe.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                ti = !1;
            }
            if (
                ((gr = 0),
                (Ce = be = fe = null),
                (es = !1),
                (xs = 0),
                ($u.current = null),
                n === null || n.return === null)
            ) {
                (Ne = 1), (bs = t), (we = null);
                break;
            }
            e: {
                var s = e,
                    a = n.return,
                    l = n,
                    c = t;
                if (((t = Pe), (l.flags |= 32768), c !== null && typeof c == "object" && typeof c.then == "function")) {
                    var u = c,
                        d = l,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var v = d.alternate;
                        v
                            ? ((d.updateQueue = v.updateQueue),
                              (d.memoizedState = v.memoizedState),
                              (d.lanes = v.lanes))
                            : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var m = Ef(a);
                    if (m !== null) {
                        (m.flags &= -257), Cf(m, a, l, s, t), m.mode & 1 && Sf(s, u, t), (t = m), (c = u);
                        var b = t.updateQueue;
                        if (b === null) {
                            var p = new Set();
                            p.add(c), (t.updateQueue = p);
                        } else b.add(c);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Sf(s, u, t), Hu();
                            break e;
                        }
                        c = Error(T(426));
                    }
                } else if (ue && l.mode & 1) {
                    var y = Ef(a);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256), Cf(y, a, l, s, t), Cu(xo(c, l));
                        break e;
                    }
                }
                (s = c = xo(c, l)), Ne !== 4 && (Ne = 2), ns === null ? (ns = [s]) : ns.push(s), (s = a);
                do {
                    switch (s.tag) {
                        case 3:
                            (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                            var g = Mh(s, c, t);
                            vf(s, g);
                            break e;
                        case 1:
                            l = c;
                            var x = s.type,
                                w = s.stateNode;
                            if (
                                !(s.flags & 128) &&
                                (typeof x.getDerivedStateFromError == "function" ||
                                    (w !== null &&
                                        typeof w.componentDidCatch == "function" &&
                                        (zn === null || !zn.has(w))))
                            ) {
                                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                                var N = Ih(s, l, t);
                                vf(s, N);
                                break e;
                            }
                    }
                    s = s.return;
                } while (s !== null);
            }
            eg(n);
        } catch (S) {
            (t = S), we === n && n !== null && (we = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Jh() {
    var e = ri.current;
    return (ri.current = ni), e === null ? ni : e;
}
function Hu() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
        je === null || (!(vr & 268435455) && !(Pi & 268435455)) || Cn(je, Pe);
}
function ai(e, t) {
    var n = J;
    J |= 2;
    var r = Jh();
    (je !== e || Pe !== t) && ((Qt = null), dr(e, t));
    do
        try {
            R1();
            break;
        } catch (o) {
            Xh(e, o);
        }
    while (!0);
    if ((ku(), (J = n), (ri.current = r), we !== null)) throw Error(T(261));
    return (je = null), (Pe = 0), Ne;
}
function R1() {
    for (; we !== null; ) Zh(we);
}
function T1() {
    for (; we !== null && !t0(); ) Zh(we);
}
function Zh(e) {
    var t = ng(e.alternate, e, qe);
    (e.memoizedProps = e.pendingProps), t === null ? eg(e) : (we = t), ($u.current = null);
}
function eg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = S1(n, t)), n !== null)) {
                (n.flags &= 32767), (we = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Ne = 6), (we = null);
                return;
            }
        } else if (((n = N1(n, t, qe)), n !== null)) {
            we = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            we = t;
            return;
        }
        we = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
}
function er(e, t, n) {
    var r = te,
        o = ut.transition;
    try {
        (ut.transition = null), (te = 1), A1(e, t, n, r);
    } finally {
        (ut.transition = o), (te = r);
    }
    return null;
}
function A1(e, t, n, r) {
    do eo();
    while (On !== null);
    if (J & 6) throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
        (d0(e, s),
        e === je && ((we = je = null), (Pe = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            la ||
            ((la = !0),
            rg(Ba, function () {
                return eo(), null;
            })),
        (s = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || s)
    ) {
        (s = ut.transition), (ut.transition = null);
        var a = te;
        te = 1;
        var l = J;
        (J |= 4),
            ($u.current = null),
            C1(e, n),
            Qh(n, e),
            X0(hc),
            (Va = !!pc),
            (hc = pc = null),
            (e.current = n),
            j1(n),
            n0(),
            (J = l),
            (te = a),
            (ut.transition = s);
    } else e.current = n;
    if (
        (la && ((la = !1), (On = e), (si = o)),
        (s = e.pendingLanes),
        s === 0 && (zn = null),
        s0(n.stateNode),
        Ye(e, xe()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (oi) throw ((oi = !1), (e = Ic), (Ic = null), e);
    return (
        si & 1 && e.tag !== 0 && eo(),
        (s = e.pendingLanes),
        s & 1 ? (e === Lc ? rs++ : ((rs = 0), (Lc = e))) : (rs = 0),
        Yn(),
        null
    );
}
function eo() {
    if (On !== null) {
        var e = Mp(si),
            t = ut.transition,
            n = te;
        try {
            if (((ut.transition = null), (te = 16 > e ? 16 : e), On === null)) var r = !1;
            else {
                if (((e = On), (On = null), (si = 0), J & 6)) throw Error(T(331));
                var o = J;
                for (J |= 4, D = e.current; D !== null; ) {
                    var s = D,
                        a = s.child;
                    if (D.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                for (D = u; D !== null; ) {
                                    var d = D;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ts(8, d, s);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (D = f);
                                    else
                                        for (; D !== null; ) {
                                            d = D;
                                            var v = d.sibling,
                                                m = d.return;
                                            if ((Hh(d), d === u)) {
                                                D = null;
                                                break;
                                            }
                                            if (v !== null) {
                                                (v.return = m), (D = v);
                                                break;
                                            }
                                            D = m;
                                        }
                                }
                            }
                            var b = s.alternate;
                            if (b !== null) {
                                var p = b.child;
                                if (p !== null) {
                                    b.child = null;
                                    do {
                                        var y = p.sibling;
                                        (p.sibling = null), (p = y);
                                    } while (p !== null);
                                }
                            }
                            D = s;
                        }
                    }
                    if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (D = a);
                    else
                        e: for (; D !== null; ) {
                            if (((s = D), s.flags & 2048))
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ts(9, s, s.return);
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                (g.return = s.return), (D = g);
                                break e;
                            }
                            D = s.return;
                        }
                }
                var x = e.current;
                for (D = x; D !== null; ) {
                    a = D;
                    var w = a.child;
                    if (a.subtreeFlags & 2064 && w !== null) (w.return = a), (D = w);
                    else
                        e: for (a = x; D !== null; ) {
                            if (((l = D), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ki(9, l);
                                    }
                                } catch (S) {
                                    ge(l, l.return, S);
                                }
                            if (l === a) {
                                D = null;
                                break e;
                            }
                            var N = l.sibling;
                            if (N !== null) {
                                (N.return = l.return), (D = N);
                                break e;
                            }
                            D = l.return;
                        }
                }
                if (((J = o), Yn(), Bt && typeof Bt.onPostCommitFiberRoot == "function"))
                    try {
                        Bt.onPostCommitFiberRoot(yi, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (te = n), (ut.transition = t);
        }
    }
    return !1;
}
function Ff(e, t, n) {
    (t = xo(n, t)), (t = Mh(e, t, 1)), (e = Fn(e, t, 1)), (t = Be()), e !== null && (Ms(e, 1, t), Ye(e, t));
}
function ge(e, t, n) {
    if (e.tag === 3) Ff(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ff(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r)))
                ) {
                    (e = xo(n, e)),
                        (e = Ih(t, e, 1)),
                        (t = Fn(t, e, 1)),
                        (e = Be()),
                        t !== null && (Ms(t, 1, e), Ye(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function O1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Be()),
        (e.pingedLanes |= e.suspendedLanes & n),
        je === e &&
            (Pe & n) === n &&
            (Ne === 4 || (Ne === 3 && (Pe & 130023424) === Pe && 500 > xe() - Uu) ? dr(e, 0) : (Bu |= n)),
        Ye(e, t);
}
function tg(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Js), (Js <<= 1), !(Js & 130023424) && (Js = 4194304)) : (t = 1));
    var n = Be();
    (e = rn(e, t)), e !== null && (Ms(e, t, n), Ye(e, n));
}
function _1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), tg(e, n);
}
function M1(e, t) {
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
            throw Error(T(314));
    }
    r !== null && r.delete(t), tg(e, n);
}
var ng;
ng = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ge.current) Ke = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), b1(e, t, n);
            Ke = !!(e.flags & 131072);
        }
    else (Ke = !1), ue && t.flags & 1048576 && ah(t, qa, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Pa(e, t), (e = t.pendingProps);
            var o = po(t, De.current);
            Zr(t, n), (o = Iu(null, t, r, e, o, n));
            var s = Lu();
            return (
                (t.flags |= 1),
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Qe(r) ? ((s = !0), Qa(t)) : (s = !1),
                      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                      Tu(t),
                      (o.updater = ji),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      Ec(t, r, e, n),
                      (t = kc(null, t, r, !0, s, n)))
                    : ((t.tag = 0), ue && s && Su(t), ze(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Pa(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = L1(r)),
                    (e = xt(r, e)),
                    o)
                ) {
                    case 0:
                        t = jc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Pf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = jf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = kf(null, t, r, xt(r.type, e), n);
                        break e;
                }
                throw Error(T(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), jc(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), Pf(e, t, r, o, n);
        case 3:
            e: {
                if ((zh(t), e === null)) throw Error(T(387));
                (r = t.pendingProps), (s = t.memoizedState), (o = s.element), fh(e, t), Za(t, r, null, n);
                var a = t.memoizedState;
                if (((r = a.element), s.isDehydrated))
                    if (
                        ((s = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions,
                        }),
                        (t.updateQueue.baseState = s),
                        (t.memoizedState = s),
                        t.flags & 256)
                    ) {
                        (o = xo(Error(T(423)), t)), (t = Rf(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = xo(Error(T(424)), t)), (t = Rf(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            Je = Dn(t.stateNode.containerInfo.firstChild),
                                Ze = t,
                                ue = !0,
                                Et = null,
                                n = uh(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ho(), r === o)) {
                        t = on(e, t, n);
                        break e;
                    }
                    ze(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                mh(t),
                e === null && bc(t),
                (r = t.type),
                (o = t.pendingProps),
                (s = e !== null ? e.memoizedProps : null),
                (a = o.children),
                gc(r, o) ? (a = null) : s !== null && gc(r, s) && (t.flags |= 32),
                Fh(e, t),
                ze(e, t, a, n),
                t.child
            );
        case 6:
            return e === null && bc(t), null;
        case 13:
            return $h(e, t, n);
        case 4:
            return (
                Au(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = go(t, null, r, n)) : ze(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : xt(r, o)), jf(e, t, r, o, n);
        case 7:
            return ze(e, t, t.pendingProps, n), t.child;
        case 8:
            return ze(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ze(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (s = t.memoizedProps),
                    (a = o.value),
                    oe(Xa, r._currentValue),
                    (r._currentValue = a),
                    s !== null)
                )
                    if (kt(s.value, a)) {
                        if (s.children === o.children && !Ge.current) {
                            t = on(e, t, n);
                            break e;
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                            var l = s.dependencies;
                            if (l !== null) {
                                a = s.child;
                                for (var c = l.firstContext; c !== null; ) {
                                    if (c.context === r) {
                                        if (s.tag === 1) {
                                            (c = en(-1, n & -n)), (c.tag = 2);
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? (c.next = c) : ((c.next = d.next), (d.next = c)),
                                                    (u.pending = c);
                                            }
                                        }
                                        (s.lanes |= n),
                                            (c = s.alternate),
                                            c !== null && (c.lanes |= n),
                                            Nc(s.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    c = c.next;
                                }
                            } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (((a = s.return), a === null)) throw Error(T(341));
                                (a.lanes |= n),
                                    (l = a.alternate),
                                    l !== null && (l.lanes |= n),
                                    Nc(a, n, t),
                                    (a = s.sibling);
                            } else a = s.child;
                            if (a !== null) a.return = s;
                            else
                                for (a = s; a !== null; ) {
                                    if (a === t) {
                                        a = null;
                                        break;
                                    }
                                    if (((s = a.sibling), s !== null)) {
                                        (s.return = a.return), (a = s);
                                        break;
                                    }
                                    a = a.return;
                                }
                            s = a;
                        }
                ze(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Zr(t, n),
                (o = dt(o)),
                (r = r(o)),
                (t.flags |= 1),
                ze(e, t, r, n),
                t.child
            );
        case 14:
            return (r = t.type), (o = xt(r, t.pendingProps)), (o = xt(r.type, o)), kf(e, t, r, o, n);
        case 15:
            return Lh(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : xt(r, o)),
                Pa(e, t),
                (t.tag = 1),
                Qe(r) ? ((e = !0), Qa(t)) : (e = !1),
                Zr(t, n),
                _h(t, r, o),
                Ec(t, r, o, n),
                kc(null, t, r, !0, e, n)
            );
        case 19:
            return Bh(e, t, n);
        case 22:
            return Dh(e, t, n);
    }
    throw Error(T(156, t.tag));
};
function rg(e, t) {
    return Tp(e, t);
}
function I1(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function ct(e, t, n, r) {
    return new I1(e, t, n, r);
}
function Ku(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function L1(e) {
    if (typeof e == "function") return Ku(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === du)) return 11;
        if (e === fu) return 14;
    }
    return 2;
}
function Bn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = ct(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Aa(e, t, n, r, o, s) {
    var a = 2;
    if (((r = e), typeof e == "function")) Ku(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
        e: switch (e) {
            case Fr:
                return fr(n.children, o, s, t);
            case uu:
                (a = 8), (o |= 8);
                break;
            case Ql:
                return (e = ct(12, n, t, o | 2)), (e.elementType = Ql), (e.lanes = s), e;
            case Yl:
                return (e = ct(13, n, t, o)), (e.elementType = Yl), (e.lanes = s), e;
            case ql:
                return (e = ct(19, n, t, o)), (e.elementType = ql), (e.lanes = s), e;
            case mp:
                return Ri(n, o, s, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case dp:
                            a = 10;
                            break e;
                        case fp:
                            a = 9;
                            break e;
                        case du:
                            a = 11;
                            break e;
                        case fu:
                            a = 14;
                            break e;
                        case Nn:
                            (a = 16), (r = null);
                            break e;
                    }
                throw Error(T(130, e == null ? e : typeof e, ""));
        }
    return (t = ct(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function fr(e, t, n, r) {
    return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function Ri(e, t, n, r) {
    return (e = ct(22, e, r, t)), (e.elementType = mp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Rl(e, t, n) {
    return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function Tl(e, t, n) {
    return (
        (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function D1(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ul(0)),
        (this.expirationTimes = ul(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = ul(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, o, s, a, l, c) {
    return (
        (e = new D1(e, t, n, l, c)),
        t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
        (s = ct(3, null, null, t)),
        (e.current = s),
        (s.stateNode = e),
        (s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Tu(s),
        e
    );
}
function F1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Dr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function og(e) {
    if (!e) return Vn;
    e = e._reactInternals;
    e: {
        if (Sr(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Qe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(T(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Qe(n)) return oh(e, n, t);
    }
    return t;
}
function sg(e, t, n, r, o, s, a, l, c) {
    return (
        (e = Gu(n, r, !0, e, o, s, a, l, c)),
        (e.context = og(null)),
        (n = e.current),
        (r = Be()),
        (o = $n(n)),
        (s = en(r, o)),
        (s.callback = t ?? null),
        Fn(n, s, o),
        (e.current.lanes = o),
        Ms(e, o, r),
        Ye(e, r),
        e
    );
}
function Ti(e, t, n, r) {
    var o = t.current,
        s = Be(),
        a = $n(o);
    return (
        (n = og(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = en(s, a)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Fn(o, t, a)),
        e !== null && (jt(e, o, a, s), Ca(e, o, a)),
        a
    );
}
function ii(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function zf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Qu(e, t) {
    zf(e, t), (e = e.alternate) && zf(e, t);
}
function z1() {
    return null;
}
var ag =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Yu(e) {
    this._internalRoot = e;
}
Ai.prototype.render = Yu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Ti(e, t, null, null);
};
Ai.prototype.unmount = Yu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xr(function () {
            Ti(null, e, null, null);
        }),
            (t[nn] = null);
    }
};
function Ai(e) {
    this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Dp();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++);
        En.splice(n, 0, e), n === 0 && zp(e);
    }
};
function qu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oi(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function $f() {}
function $1(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var u = ii(a);
                s.call(u);
            };
        }
        var a = sg(t, r, e, 0, null, !1, !1, "", $f);
        return (e._reactRootContainer = a), (e[nn] = a.current), ms(e.nodeType === 8 ? e.parentNode : e), xr(), a;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = ii(c);
            l.call(u);
        };
    }
    var c = Gu(e, 0, !1, null, null, !1, !1, "", $f);
    return (
        (e._reactRootContainer = c),
        (e[nn] = c.current),
        ms(e.nodeType === 8 ? e.parentNode : e),
        xr(function () {
            Ti(t, c, n, r);
        }),
        c
    );
}
function _i(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var a = s;
        if (typeof o == "function") {
            var l = o;
            o = function () {
                var c = ii(a);
                l.call(c);
            };
        }
        Ti(t, a, e, o);
    } else a = $1(n, t, e, o, r);
    return ii(a);
}
Ip = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Go(t.pendingLanes);
                n !== 0 && (hu(t, n | 1), Ye(t, xe()), !(J & 6) && ((yo = xe() + 500), Yn()));
            }
            break;
        case 13:
            xr(function () {
                var r = rn(e, 1);
                if (r !== null) {
                    var o = Be();
                    jt(r, e, 1, o);
                }
            }),
                Qu(e, 1);
    }
};
gu = function (e) {
    if (e.tag === 13) {
        var t = rn(e, 134217728);
        if (t !== null) {
            var n = Be();
            jt(t, e, 134217728, n);
        }
        Qu(e, 134217728);
    }
};
Lp = function (e) {
    if (e.tag === 13) {
        var t = $n(e),
            n = rn(e, t);
        if (n !== null) {
            var r = Be();
            jt(n, e, t, r);
        }
        Qu(e, t);
    }
};
Dp = function () {
    return te;
};
Fp = function (e, t) {
    var n = te;
    try {
        return (te = e), t();
    } finally {
        te = n;
    }
};
ac = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Si(r);
                        if (!o) throw Error(T(90));
                        hp(r), Zl(r, o);
                    }
                }
            }
            break;
        case "textarea":
            vp(e, n);
            break;
        case "select":
            (t = n.value), t != null && Yr(e, !!n.multiple, t, !1);
    }
};
Ep = Vu;
Cp = xr;
var B1 = { usingClientEntryPoint: !1, Events: [Ls, Ur, Si, Np, Sp, Vu] },
    Uo = { findFiberByHostInstance: nr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    U1 = {
        bundleType: Uo.bundleType,
        version: Uo.version,
        rendererPackageName: Uo.rendererPackageName,
        rendererConfig: Uo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: cn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Pp(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Uo.findFiberByHostInstance || z1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ca.isDisabled && ca.supportsFiber)
        try {
            (yi = ca.inject(U1)), (Bt = ca);
        } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B1;
nt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qu(t)) throw Error(T(200));
    return F1(e, t, null, n);
};
nt.createRoot = function (e, t) {
    if (!qu(e)) throw Error(T(299));
    var n = !1,
        r = "",
        o = ag;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Gu(e, 1, !1, null, null, n, !1, r, o)),
        (e[nn] = t.current),
        ms(e.nodeType === 8 ? e.parentNode : e),
        new Yu(t)
    );
};
nt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : ((e = Object.keys(e).join(",")), Error(T(268, e)));
    return (e = Pp(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
    return xr(e);
};
nt.hydrate = function (e, t, n) {
    if (!Oi(t)) throw Error(T(200));
    return _i(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
    if (!qu(e)) throw Error(T(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        s = "",
        a = ag;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = sg(t, null, e, 1, n ?? null, o, !1, s, a)),
        (e[nn] = t.current),
        ms(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ai(t);
};
nt.render = function (e, t, n) {
    if (!Oi(t)) throw Error(T(200));
    return _i(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
    if (!Oi(e)) throw Error(T(40));
    return e._reactRootContainer
        ? (xr(function () {
              _i(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[nn] = null);
              });
          }),
          !0)
        : !1;
};
nt.unstable_batchedUpdates = Vu;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Oi(n)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return _i(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function ig() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig);
        } catch (e) {
            console.error(e);
        }
}
ig(), (ip.exports = nt);
var Fs = ip.exports;
const lg = Ym(Fs);
var cg,
    Bf = Fs;
(cg = Bf.createRoot), Bf.hydrateRoot;
const V1 = 1,
    W1 = 1e6;
let Al = 0;
function H1() {
    return (Al = (Al + 1) % Number.MAX_SAFE_INTEGER), Al.toString();
}
const Ol = new Map(),
    Uf = (e) => {
        if (Ol.has(e)) return;
        const t = setTimeout(() => {
            Ol.delete(e), os({ type: "REMOVE_TOAST", toastId: e });
        }, W1);
        Ol.set(e, t);
    },
    K1 = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, V1) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? Uf(n)
                        : e.toasts.forEach((r) => {
                              Uf(r.id);
                          }),
                    { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    Oa = [];
let _a = { toasts: [] };
function os(e) {
    (_a = K1(_a, e)),
        Oa.forEach((t) => {
            t(_a);
        });
}
function G1({ ...e }) {
    const t = H1(),
        n = (o) => os({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => os({ type: "DISMISS_TOAST", toastId: t });
    return (
        os({
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
function Q1() {
    const [e, t] = h.useState(_a);
    return (
        h.useEffect(
            () => (
                Oa.push(t),
                () => {
                    const n = Oa.indexOf(t);
                    n > -1 && Oa.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: G1, dismiss: (n) => os({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function Vf(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function ug(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const s = Vf(o, t);
            return !n && typeof s == "function" && (n = !0), s;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Vf(e[o], null);
                }
            };
    };
}
function Ee(...e) {
    return h.useCallback(ug(...e), e);
}
function Y1(e, t) {
    const n = h.createContext(t),
        r = (s) => {
            const { children: a, ...l } = s,
                c = h.useMemo(() => l, Object.values(l));
            return i.jsx(n.Provider, { value: c, children: a });
        };
    r.displayName = e + "Provider";
    function o(s) {
        const a = h.useContext(n);
        if (a) return a;
        if (t !== void 0) return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``);
    }
    return [r, o];
}
function un(e, t = []) {
    let n = [];
    function r(s, a) {
        const l = h.createContext(a),
            c = n.length;
        n = [...n, a];
        const u = (f) => {
            var g;
            const { scope: v, children: m, ...b } = f,
                p = ((g = v == null ? void 0 : v[e]) == null ? void 0 : g[c]) || l,
                y = h.useMemo(() => b, Object.values(b));
            return i.jsx(p.Provider, { value: y, children: m });
        };
        u.displayName = s + "Provider";
        function d(f, v) {
            var p;
            const m = ((p = v == null ? void 0 : v[e]) == null ? void 0 : p[c]) || l,
                b = h.useContext(m);
            if (b) return b;
            if (a !== void 0) return a;
            throw new Error(`\`${f}\` must be used within \`${s}\``);
        }
        return [u, d];
    }
    const o = () => {
        const s = n.map((a) => h.createContext(a));
        return function (l) {
            const c = (l == null ? void 0 : l[e]) || s;
            return h.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
        };
    };
    return (o.scopeName = e), [r, q1(o, ...t)];
}
function q1(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (s) {
            const a = r.reduce((l, { useScope: c, scopeName: u }) => {
                const f = c(s)[`__scope${u}`];
                return { ...l, ...f };
            }, {});
            return h.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function Ns(e) {
    const t = J1(e),
        n = h.forwardRef((r, o) => {
            const { children: s, ...a } = r,
                l = h.Children.toArray(s),
                c = l.find(ew);
            if (c) {
                const u = c.props.children,
                    d = l.map((f) =>
                        f === c
                            ? h.Children.count(u) > 1
                                ? h.Children.only(null)
                                : h.isValidElement(u)
                                  ? u.props.children
                                  : null
                            : f
                    );
                return i.jsx(t, { ...a, ref: o, children: h.isValidElement(u) ? h.cloneElement(u, void 0, d) : null });
            }
            return i.jsx(t, { ...a, ref: o, children: s });
        });
    return (n.displayName = `${e}.Slot`), n;
}
var X1 = Ns("Slot");
function J1(e) {
    const t = h.forwardRef((n, r) => {
        const { children: o, ...s } = n;
        if (h.isValidElement(o)) {
            const a = nw(o),
                l = tw(s, o.props);
            return o.type !== h.Fragment && (l.ref = r ? ug(r, a) : a), h.cloneElement(o, l);
        }
        return h.Children.count(o) > 1 ? h.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var dg = Symbol("radix.slottable");
function Z1(e) {
    const t = ({ children: n }) => i.jsx(i.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = dg), t;
}
function ew(e) {
    return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === dg;
}
function tw(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r)
            ? o && s
                ? (n[r] = (...l) => {
                      const c = s(...l);
                      return o(...l), c;
                  })
                : o && (n[r] = o)
            : r === "style"
              ? (n[r] = { ...o, ...s })
              : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function nw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function fg(e) {
    const t = e + "CollectionProvider",
        [n, r] = un(t),
        [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        a = (p) => {
            const { scope: y, children: g } = p,
                x = A.useRef(null),
                w = A.useRef(new Map()).current;
            return i.jsx(o, { scope: y, itemMap: w, collectionRef: x, children: g });
        };
    a.displayName = t;
    const l = e + "CollectionSlot",
        c = Ns(l),
        u = A.forwardRef((p, y) => {
            const { scope: g, children: x } = p,
                w = s(l, g),
                N = Ee(y, w.collectionRef);
            return i.jsx(c, { ref: N, children: x });
        });
    u.displayName = l;
    const d = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        v = Ns(d),
        m = A.forwardRef((p, y) => {
            const { scope: g, children: x, ...w } = p,
                N = A.useRef(null),
                S = Ee(y, N),
                E = s(d, g);
            return (
                A.useEffect(() => (E.itemMap.set(N, { ref: N, ...w }), () => void E.itemMap.delete(N))),
                i.jsx(v, { [f]: "", ref: S, children: x })
            );
        });
    m.displayName = d;
    function b(p) {
        const y = s(e + "CollectionConsumer", p);
        return A.useCallback(() => {
            const x = y.collectionRef.current;
            if (!x) return [];
            const w = Array.from(x.querySelectorAll(`[${f}]`));
            return Array.from(y.itemMap.values()).sort((E, C) => w.indexOf(E.ref.current) - w.indexOf(C.ref.current));
        }, [y.collectionRef, y.itemMap]);
    }
    return [{ Provider: a, Slot: u, ItemSlot: m }, b, r];
}
var rw = [
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
    ne = rw.reduce((e, t) => {
        const n = Ns(`Primitive.${t}`),
            r = h.forwardRef((o, s) => {
                const { asChild: a, ...l } = o,
                    c = a ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), i.jsx(c, { ...l, ref: s });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function mg(e, t) {
    e && Fs.flushSync(() => e.dispatchEvent(t));
}
function Pt(e) {
    const t = h.useRef(e);
    return (
        h.useEffect(() => {
            t.current = e;
        }),
        h.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function ow(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Pt(e);
    h.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
            () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var sw = "DismissableLayer",
    zc = "dismissableLayer.update",
    aw = "dismissableLayer.pointerDownOutside",
    iw = "dismissableLayer.focusOutside",
    Wf,
    pg = h.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    Mi = h.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: s,
                onInteractOutside: a,
                onDismiss: l,
                ...c
            } = e,
            u = h.useContext(pg),
            [d, f] = h.useState(null),
            v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, m] = h.useState({}),
            b = Ee(t, (C) => f(C)),
            p = Array.from(u.layers),
            [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            g = p.indexOf(y),
            x = d ? p.indexOf(d) : -1,
            w = u.layersWithOutsidePointerEventsDisabled.size > 0,
            N = x >= g,
            S = cw((C) => {
                const k = C.target,
                    _ = [...u.branches].some((O) => O.contains(k));
                !N || _ || (o == null || o(C), a == null || a(C), C.defaultPrevented || l == null || l());
            }, v),
            E = uw((C) => {
                const k = C.target;
                [...u.branches].some((O) => O.contains(k)) ||
                    (s == null || s(C), a == null || a(C), C.defaultPrevented || l == null || l());
            }, v);
        return (
            ow((C) => {
                x === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && l && (C.preventDefault(), l()));
            }, v),
            h.useEffect(() => {
                if (d)
                    return (
                        n &&
                            (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((Wf = v.body.style.pointerEvents), (v.body.style.pointerEvents = "none")),
                            u.layersWithOutsidePointerEventsDisabled.add(d)),
                        u.layers.add(d),
                        Hf(),
                        () => {
                            n &&
                                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (v.body.style.pointerEvents = Wf);
                        }
                    );
            }, [d, v, n, u]),
            h.useEffect(
                () => () => {
                    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Hf());
                },
                [d, u]
            ),
            h.useEffect(() => {
                const C = () => m({});
                return document.addEventListener(zc, C), () => document.removeEventListener(zc, C);
            }, []),
            i.jsx(ne.div, {
                ...c,
                ref: b,
                style: { pointerEvents: w ? (N ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
                onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
                onPointerDownCapture: X(e.onPointerDownCapture, S.onPointerDownCapture),
            })
        );
    });
Mi.displayName = sw;
var lw = "DismissableLayerBranch",
    hg = h.forwardRef((e, t) => {
        const n = h.useContext(pg),
            r = h.useRef(null),
            o = Ee(t, r);
        return (
            h.useEffect(() => {
                const s = r.current;
                if (s)
                    return (
                        n.branches.add(s),
                        () => {
                            n.branches.delete(s);
                        }
                    );
            }, [n.branches]),
            i.jsx(ne.div, { ...e, ref: o })
        );
    });
hg.displayName = lw;
function cw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Pt(e),
        r = h.useRef(!1),
        o = h.useRef(() => {});
    return (
        h.useEffect(() => {
            const s = (l) => {
                    if (l.target && !r.current) {
                        let c = function () {
                            gg(aw, n, u, { discrete: !0 });
                        };
                        const u = { originalEvent: l };
                        l.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                              (o.current = c),
                              t.addEventListener("click", o.current, { once: !0 }))
                            : c();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                a = window.setTimeout(() => {
                    t.addEventListener("pointerdown", s);
                }, 0);
            return () => {
                window.clearTimeout(a),
                    t.removeEventListener("pointerdown", s),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function uw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Pt(e),
        r = h.useRef(!1);
    return (
        h.useEffect(() => {
            const o = (s) => {
                s.target && !r.current && gg(iw, n, { originalEvent: s }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function Hf() {
    const e = new CustomEvent(zc);
    document.dispatchEvent(e);
}
function gg(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? mg(o, s) : o.dispatchEvent(s);
}
var dw = Mi,
    fw = hg,
    sn = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
    mw = "Portal",
    Xu = h.forwardRef((e, t) => {
        var l;
        const { container: n, ...r } = e,
            [o, s] = h.useState(!1);
        sn(() => s(!0), []);
        const a = n || (o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body));
        return a ? lg.createPortal(i.jsx(ne.div, { ...r, ref: t }), a) : null;
    });
Xu.displayName = mw;
function pw(e, t) {
    return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Er = (e) => {
    const { present: t, children: n } = e,
        r = hw(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n),
        s = Ee(r.ref, gw(o));
    return typeof n == "function" || r.isPresent ? h.cloneElement(o, { ref: s }) : null;
};
Er.displayName = "Presence";
function hw(e) {
    const [t, n] = h.useState(),
        r = h.useRef(null),
        o = h.useRef(e),
        s = h.useRef("none"),
        a = e ? "mounted" : "unmounted",
        [l, c] = pw(a, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        h.useEffect(() => {
            const u = ua(r.current);
            s.current = l === "mounted" ? u : "none";
        }, [l]),
        sn(() => {
            const u = r.current,
                d = o.current;
            if (d !== e) {
                const v = s.current,
                    m = ua(u);
                e
                    ? c("MOUNT")
                    : m === "none" || (u == null ? void 0 : u.display) === "none"
                      ? c("UNMOUNT")
                      : c(d && v !== m ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = e);
            }
        }, [e, c]),
        sn(() => {
            if (t) {
                let u;
                const d = t.ownerDocument.defaultView ?? window,
                    f = (m) => {
                        const p = ua(r.current).includes(m.animationName);
                        if (m.target === t && p && (c("ANIMATION_END"), !o.current)) {
                            const y = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (u = d.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
                                }));
                        }
                    },
                    v = (m) => {
                        m.target === t && (s.current = ua(r.current));
                    };
                return (
                    t.addEventListener("animationstart", v),
                    t.addEventListener("animationcancel", f),
                    t.addEventListener("animationend", f),
                    () => {
                        d.clearTimeout(u),
                            t.removeEventListener("animationstart", v),
                            t.removeEventListener("animationcancel", f),
                            t.removeEventListener("animationend", f);
                    }
                );
            } else c("ANIMATION_END");
        }, [t, c]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: h.useCallback((u) => {
                (r.current = u ? getComputedStyle(u) : null), n(u);
            }, []),
        }
    );
}
function ua(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function gw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var vw = au[" useInsertionEffect ".trim().toString()] || sn;
function Ii({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, s, a] = xw({ defaultProp: t, onChange: n }),
        l = e !== void 0,
        c = l ? e : o;
    {
        const d = h.useRef(e !== void 0);
        h.useEffect(() => {
            const f = d.current;
            f !== l &&
                console.warn(
                    `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (d.current = l);
        }, [l, r]);
    }
    const u = h.useCallback(
        (d) => {
            var f;
            if (l) {
                const v = yw(d) ? d(e) : d;
                v !== e && ((f = a.current) == null || f.call(a, v));
            } else s(d);
        },
        [l, e, s, a]
    );
    return [c, u];
}
function xw({ defaultProp: e, onChange: t }) {
    const [n, r] = h.useState(e),
        o = h.useRef(n),
        s = h.useRef(t);
    return (
        vw(() => {
            s.current = t;
        }, [t]),
        h.useEffect(() => {
            var a;
            o.current !== n && ((a = s.current) == null || a.call(s, n), (o.current = n));
        }, [n, o]),
        [n, r, s]
    );
}
function yw(e) {
    return typeof e == "function";
}
var ww = Object.freeze({
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
    bw = "VisuallyHidden",
    Li = h.forwardRef((e, t) => i.jsx(ne.span, { ...e, ref: t, style: { ...ww, ...e.style } }));
Li.displayName = bw;
var Nw = Li,
    Ju = "ToastProvider",
    [Zu, Sw, Ew] = fg("Toast"),
    [vg, Qj] = un("Toast", [Ew]),
    [Cw, Di] = vg(Ju),
    xg = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: s = 50,
                children: a,
            } = e,
            [l, c] = h.useState(null),
            [u, d] = h.useState(0),
            f = h.useRef(!1),
            v = h.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ju}\`. Expected non-empty \`string\`.`),
            i.jsx(Zu.Provider, {
                scope: t,
                children: i.jsx(Cw, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: s,
                    toastCount: u,
                    viewport: l,
                    onViewportChange: c,
                    onToastAdd: h.useCallback(() => d((m) => m + 1), []),
                    onToastRemove: h.useCallback(() => d((m) => m - 1), []),
                    isFocusedToastEscapeKeyDownRef: f,
                    isClosePausedRef: v,
                    children: a,
                }),
            })
        );
    };
xg.displayName = Ju;
var yg = "ToastViewport",
    jw = ["F8"],
    $c = "toast.viewportPause",
    Bc = "toast.viewportResume",
    wg = h.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = jw, label: o = "Notifications ({hotkey})", ...s } = e,
            a = Di(yg, n),
            l = Sw(n),
            c = h.useRef(null),
            u = h.useRef(null),
            d = h.useRef(null),
            f = h.useRef(null),
            v = Ee(t, f, a.onViewportChange),
            m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            b = a.toastCount > 0;
        h.useEffect(() => {
            const y = (g) => {
                var w;
                r.length !== 0 && r.every((N) => g[N] || g.code === N) && ((w = f.current) == null || w.focus());
            };
            return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
        }, [r]),
            h.useEffect(() => {
                const y = c.current,
                    g = f.current;
                if (b && y && g) {
                    const x = () => {
                            if (!a.isClosePausedRef.current) {
                                const E = new CustomEvent($c);
                                g.dispatchEvent(E), (a.isClosePausedRef.current = !0);
                            }
                        },
                        w = () => {
                            if (a.isClosePausedRef.current) {
                                const E = new CustomEvent(Bc);
                                g.dispatchEvent(E), (a.isClosePausedRef.current = !1);
                            }
                        },
                        N = (E) => {
                            !y.contains(E.relatedTarget) && w();
                        },
                        S = () => {
                            y.contains(document.activeElement) || w();
                        };
                    return (
                        y.addEventListener("focusin", x),
                        y.addEventListener("focusout", N),
                        y.addEventListener("pointermove", x),
                        y.addEventListener("pointerleave", S),
                        window.addEventListener("blur", x),
                        window.addEventListener("focus", w),
                        () => {
                            y.removeEventListener("focusin", x),
                                y.removeEventListener("focusout", N),
                                y.removeEventListener("pointermove", x),
                                y.removeEventListener("pointerleave", S),
                                window.removeEventListener("blur", x),
                                window.removeEventListener("focus", w);
                        }
                    );
                }
            }, [b, a.isClosePausedRef]);
        const p = h.useCallback(
            ({ tabbingDirection: y }) => {
                const x = l().map((w) => {
                    const N = w.ref.current,
                        S = [N, ...zw(N)];
                    return y === "forwards" ? S : S.reverse();
                });
                return (y === "forwards" ? x.reverse() : x).flat();
            },
            [l]
        );
        return (
            h.useEffect(() => {
                const y = f.current;
                if (y) {
                    const g = (x) => {
                        var S, E, C;
                        const w = x.altKey || x.ctrlKey || x.metaKey;
                        if (x.key === "Tab" && !w) {
                            const k = document.activeElement,
                                _ = x.shiftKey;
                            if (x.target === y && _) {
                                (S = u.current) == null || S.focus();
                                return;
                            }
                            const L = p({ tabbingDirection: _ ? "backwards" : "forwards" }),
                                K = L.findIndex((M) => M === k);
                            _l(L.slice(K + 1))
                                ? x.preventDefault()
                                : _
                                  ? (E = u.current) == null || E.focus()
                                  : (C = d.current) == null || C.focus();
                        }
                    };
                    return y.addEventListener("keydown", g), () => y.removeEventListener("keydown", g);
                }
            }, [l, p]),
            i.jsxs(fw, {
                ref: c,
                role: "region",
                "aria-label": o.replace("{hotkey}", m),
                tabIndex: -1,
                style: { pointerEvents: b ? void 0 : "none" },
                children: [
                    b &&
                        i.jsx(Uc, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const y = p({ tabbingDirection: "forwards" });
                                _l(y);
                            },
                        }),
                    i.jsx(Zu.Slot, { scope: n, children: i.jsx(ne.ol, { tabIndex: -1, ...s, ref: v }) }),
                    b &&
                        i.jsx(Uc, {
                            ref: d,
                            onFocusFromOutsideViewport: () => {
                                const y = p({ tabbingDirection: "backwards" });
                                _l(y);
                            },
                        }),
                ],
            })
        );
    });
wg.displayName = yg;
var bg = "ToastFocusProxy",
    Uc = h.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            s = Di(bg, n);
        return i.jsx(Li, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (a) => {
                var u;
                const l = a.relatedTarget;
                !((u = s.viewport) != null && u.contains(l)) && r();
            },
        });
    });
Uc.displayName = bg;
var zs = "Toast",
    kw = "toast.swipeStart",
    Pw = "toast.swipeMove",
    Rw = "toast.swipeCancel",
    Tw = "toast.swipeEnd",
    Ng = h.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e,
            [l, c] = Ii({ prop: r, defaultProp: o ?? !0, onChange: s, caller: zs });
        return i.jsx(Er, {
            present: n || l,
            children: i.jsx(_w, {
                open: l,
                ...a,
                ref: t,
                onClose: () => c(!1),
                onPause: Pt(e.onPause),
                onResume: Pt(e.onResume),
                onSwipeStart: X(e.onSwipeStart, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: X(e.onSwipeMove, (u) => {
                    const { x: d, y: f } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
                }),
                onSwipeCancel: X(e.onSwipeCancel, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: X(e.onSwipeEnd, (u) => {
                    const { x: d, y: f } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                        c(!1);
                }),
            }),
        });
    });
Ng.displayName = zs;
var [Aw, Ow] = vg(zs, { onClose() {} }),
    _w = h.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: s,
                onClose: a,
                onEscapeKeyDown: l,
                onPause: c,
                onResume: u,
                onSwipeStart: d,
                onSwipeMove: f,
                onSwipeCancel: v,
                onSwipeEnd: m,
                ...b
            } = e,
            p = Di(zs, n),
            [y, g] = h.useState(null),
            x = Ee(t, (M) => g(M)),
            w = h.useRef(null),
            N = h.useRef(null),
            S = o || p.duration,
            E = h.useRef(0),
            C = h.useRef(S),
            k = h.useRef(0),
            { onToastAdd: _, onToastRemove: O } = p,
            $ = Pt(() => {
                var G;
                (y == null ? void 0 : y.contains(document.activeElement)) && ((G = p.viewport) == null || G.focus()),
                    a();
            }),
            L = h.useCallback(
                (M) => {
                    !M ||
                        M === 1 / 0 ||
                        (window.clearTimeout(k.current),
                        (E.current = new Date().getTime()),
                        (k.current = window.setTimeout($, M)));
                },
                [$]
            );
        h.useEffect(() => {
            const M = p.viewport;
            if (M) {
                const G = () => {
                        L(C.current), u == null || u();
                    },
                    F = () => {
                        const V = new Date().getTime() - E.current;
                        (C.current = C.current - V), window.clearTimeout(k.current), c == null || c();
                    };
                return (
                    M.addEventListener($c, F),
                    M.addEventListener(Bc, G),
                    () => {
                        M.removeEventListener($c, F), M.removeEventListener(Bc, G);
                    }
                );
            }
        }, [p.viewport, S, c, u, L]),
            h.useEffect(() => {
                s && !p.isClosePausedRef.current && L(S);
            }, [s, S, p.isClosePausedRef, L]),
            h.useEffect(() => (_(), () => O()), [_, O]);
        const K = h.useMemo(() => (y ? Rg(y) : null), [y]);
        return p.viewport
            ? i.jsxs(i.Fragment, {
                  children: [
                      K &&
                          i.jsx(Mw, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live": r === "foreground" ? "assertive" : "polite",
                              "aria-atomic": !0,
                              children: K,
                          }),
                      i.jsx(Aw, {
                          scope: n,
                          onClose: $,
                          children: Fs.createPortal(
                              i.jsx(Zu.ItemSlot, {
                                  scope: n,
                                  children: i.jsx(dw, {
                                      asChild: !0,
                                      onEscapeKeyDown: X(l, () => {
                                          p.isFocusedToastEscapeKeyDownRef.current || $(),
                                              (p.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: i.jsx(ne.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": s ? "open" : "closed",
                                          "data-swipe-direction": p.swipeDirection,
                                          ...b,
                                          ref: x,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: X(e.onKeyDown, (M) => {
                                              M.key === "Escape" &&
                                                  (l == null || l(M.nativeEvent),
                                                  M.nativeEvent.defaultPrevented ||
                                                      ((p.isFocusedToastEscapeKeyDownRef.current = !0), $()));
                                          }),
                                          onPointerDown: X(e.onPointerDown, (M) => {
                                              M.button === 0 && (w.current = { x: M.clientX, y: M.clientY });
                                          }),
                                          onPointerMove: X(e.onPointerMove, (M) => {
                                              if (!w.current) return;
                                              const G = M.clientX - w.current.x,
                                                  F = M.clientY - w.current.y,
                                                  V = !!N.current,
                                                  P = ["left", "right"].includes(p.swipeDirection),
                                                  R = ["left", "up"].includes(p.swipeDirection) ? Math.min : Math.max,
                                                  I = P ? R(0, G) : 0,
                                                  W = P ? 0 : R(0, F),
                                                  z = M.pointerType === "touch" ? 10 : 2,
                                                  Q = { x: I, y: W },
                                                  q = { originalEvent: M, delta: Q };
                                              V
                                                  ? ((N.current = Q), da(Pw, f, q, { discrete: !1 }))
                                                  : Kf(Q, p.swipeDirection, z)
                                                    ? ((N.current = Q),
                                                      da(kw, d, q, { discrete: !1 }),
                                                      M.target.setPointerCapture(M.pointerId))
                                                    : (Math.abs(G) > z || Math.abs(F) > z) && (w.current = null);
                                          }),
                                          onPointerUp: X(e.onPointerUp, (M) => {
                                              const G = N.current,
                                                  F = M.target;
                                              if (
                                                  (F.hasPointerCapture(M.pointerId) &&
                                                      F.releasePointerCapture(M.pointerId),
                                                  (N.current = null),
                                                  (w.current = null),
                                                  G)
                                              ) {
                                                  const V = M.currentTarget,
                                                      P = { originalEvent: M, delta: G };
                                                  Kf(G, p.swipeDirection, p.swipeThreshold)
                                                      ? da(Tw, m, P, { discrete: !0 })
                                                      : da(Rw, v, P, { discrete: !0 }),
                                                      V.addEventListener("click", (R) => R.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              p.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    Mw = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = Di(zs, t),
            [s, a] = h.useState(!1),
            [l, c] = h.useState(!1);
        return (
            Dw(() => a(!0)),
            h.useEffect(() => {
                const u = window.setTimeout(() => c(!0), 1e3);
                return () => window.clearTimeout(u);
            }, []),
            l
                ? null
                : i.jsx(Xu, {
                      asChild: !0,
                      children: i.jsx(Li, { ...r, children: s && i.jsxs(i.Fragment, { children: [o.label, " ", n] }) }),
                  })
        );
    },
    Iw = "ToastTitle",
    Sg = h.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return i.jsx(ne.div, { ...r, ref: t });
    });
Sg.displayName = Iw;
var Lw = "ToastDescription",
    Eg = h.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return i.jsx(ne.div, { ...r, ref: t });
    });
Eg.displayName = Lw;
var Cg = "ToastAction",
    jg = h.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? i.jsx(Pg, { altText: n, asChild: !0, children: i.jsx(ed, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Cg}\`. Expected non-empty \`string\`.`), null);
    });
jg.displayName = Cg;
var kg = "ToastClose",
    ed = h.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = Ow(kg, n);
        return i.jsx(Pg, {
            asChild: !0,
            children: i.jsx(ne.button, { type: "button", ...r, ref: t, onClick: X(e.onClick, o.onClose) }),
        });
    });
ed.displayName = kg;
var Pg = h.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return i.jsx(ne.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function Rg(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Fw(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    s = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (s) {
                        const a = r.dataset.radixToastAnnounceAlt;
                        a && t.push(a);
                    } else t.push(...Rg(r));
            }
        }),
        t
    );
}
function da(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? mg(o, s) : o.dispatchEvent(s);
}
var Kf = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function Dw(e = () => {}) {
    const t = Pt(e);
    sn(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function Fw(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function zw(e) {
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
function _l(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var $w = xg,
    Tg = wg,
    Ag = Ng,
    Og = Sg,
    _g = Eg,
    Mg = jg,
    Ig = ed;
function Lg(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Lg(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function Dg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Lg(e)) && (r && (r += " "), (r += t));
    return r;
}
const Gf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Qf = Dg,
    Fi = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Qf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: s } = t,
            a = Object.keys(o).map((u) => {
                const d = n == null ? void 0 : n[u],
                    f = s == null ? void 0 : s[u];
                if (d === null) return null;
                const v = Gf(d) || Gf(f);
                return o[u][v];
            }),
            l =
                n &&
                Object.entries(n).reduce((u, d) => {
                    let [f, v] = d;
                    return v === void 0 || (u[f] = v), u;
                }, {}),
            c =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((u, d) => {
                          let { class: f, className: v, ...m } = d;
                          return Object.entries(m).every((b) => {
                              let [p, y] = b;
                              return Array.isArray(y) ? y.includes({ ...s, ...l }[p]) : { ...s, ...l }[p] === y;
                          })
                              ? [...u, f, v]
                              : u;
                      }, []);
        return Qf(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Fg = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Uw = {
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
 */ const Vw = h.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: s,
            iconNode: a,
            ...l
        },
        c
    ) =>
        h.createElement(
            "svg",
            {
                ref: c,
                ...Uw,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: Fg("lucide", o),
                ...l,
            },
            [...a.map(([u, d]) => h.createElement(u, d)), ...(Array.isArray(s) ? s : [s])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pe = (e, t) => {
    const n = h.forwardRef(({ className: r, ...o }, s) =>
        h.createElement(Vw, { ref: s, iconNode: t, className: Fg(`lucide-${Bw(e)}`, r), ...o })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zg = pe("ChartPie", [
    [
        "path",
        {
            d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
            key: "pzmjnu",
        },
    ],
    ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ft = pe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = pe("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ww = pe("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hw = pe("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kw = pe("Crown", [
    [
        "path",
        {
            d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
            key: "1vdc57",
        },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wo = pe("Flag", [
    ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
    ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wn = pe("Gift", [
    ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
    ["path", { d: "M12 8v13", key: "1c76mn" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
    ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5", key: "1ihvrl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bo = pe("Heart", [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gw = pe("Info", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qw = pe("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yw = pe("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qw = pe("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
        },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $g = pe("Package", [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw",
        },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xw = pe("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const li = pe("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ss = pe("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx",
        },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Es = pe("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = pe("ThumbsUp", [
    ["path", { d: "M7 10v12", key: "1qc93n" }],
    [
        "path",
        {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
            key: "emmmcr",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = pe("TrendingUp", [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
    ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $s = pe("Truck", [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", key: "lysw3i" }],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zi = pe("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $i = pe("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    td = "-",
    Jw = (e) => {
        const t = eb(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (a) => {
                const l = a.split(td);
                return l[0] === "" && l.length !== 1 && l.shift(), Vg(l, t) || Zw(a);
            },
            getConflictingClassGroupIds: (a, l) => {
                const c = n[a] || [];
                return l && r[a] ? [...c, ...r[a]] : c;
            },
        };
    },
    Vg = (e, t) => {
        var a;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? Vg(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const s = e.join(td);
        return (a = t.validators.find(({ validator: l }) => l(s))) == null ? void 0 : a.classGroupId;
    },
    qf = /^\[(.+)\]$/,
    Zw = (e) => {
        if (qf.test(e)) {
            const t = qf.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    eb = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            nb(Object.entries(e.classGroups), n).forEach(([s, a]) => {
                Vc(a, r, s, t);
            }),
            r
        );
    },
    Vc = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const s = o === "" ? t : Xf(t, o);
                s.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (tb(o)) {
                    Vc(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([s, a]) => {
                Vc(a, Xf(t, s), n, r);
            });
        });
    },
    Xf = (e, t) => {
        let n = e;
        return (
            t.split(td).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    tb = (e) => e.isThemeGetter,
    nb = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((s) =>
                      typeof s == "string"
                          ? t + s
                          : typeof s == "object"
                            ? Object.fromEntries(Object.entries(s).map(([a, l]) => [t + a, l]))
                            : s
                  );
                  return [n, o];
              })
            : e,
    rb = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (s, a) => {
            n.set(s, a), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(s) {
                let a = n.get(s);
                if (a !== void 0) return a;
                if ((a = r.get(s)) !== void 0) return o(s, a), a;
            },
            set(s, a) {
                n.has(s) ? n.set(s, a) : o(s, a);
            },
        };
    },
    Wg = "!",
    ob = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            s = t.length,
            a = (l) => {
                const c = [];
                let u = 0,
                    d = 0,
                    f;
                for (let y = 0; y < l.length; y++) {
                    let g = l[y];
                    if (u === 0) {
                        if (g === o && (r || l.slice(y, y + s) === t)) {
                            c.push(l.slice(d, y)), (d = y + s);
                            continue;
                        }
                        if (g === "/") {
                            f = y;
                            continue;
                        }
                    }
                    g === "[" ? u++ : g === "]" && u--;
                }
                const v = c.length === 0 ? l : l.substring(d),
                    m = v.startsWith(Wg),
                    b = m ? v.substring(1) : v,
                    p = f && f > d ? f - d : void 0;
                return { modifiers: c, hasImportantModifier: m, baseClassName: b, maybePostfixModifierPosition: p };
            };
        return n ? (l) => n({ className: l, parseClassName: a }) : a;
    },
    sb = (e) => {
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
    ab = (e) => ({ cache: rb(e.cacheSize), parseClassName: ob(e), ...Jw(e) }),
    ib = /\s+/,
    lb = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            s = [],
            a = e.trim().split(ib);
        let l = "";
        for (let c = a.length - 1; c >= 0; c -= 1) {
            const u = a[c],
                { modifiers: d, hasImportantModifier: f, baseClassName: v, maybePostfixModifierPosition: m } = n(u);
            let b = !!m,
                p = r(b ? v.substring(0, m) : v);
            if (!p) {
                if (!b) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue;
                }
                if (((p = r(v)), !p)) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue;
                }
                b = !1;
            }
            const y = sb(d).join(":"),
                g = f ? y + Wg : y,
                x = g + p;
            if (s.includes(x)) continue;
            s.push(x);
            const w = o(p, b);
            for (let N = 0; N < w.length; ++N) {
                const S = w[N];
                s.push(g + S);
            }
            l = u + (l.length > 0 ? " " + l : l);
        }
        return l;
    };
function cb() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = Hg(t)) && (r && (r += " "), (r += n));
    return r;
}
const Hg = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Hg(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function ub(e, ...t) {
    let n,
        r,
        o,
        s = a;
    function a(c) {
        const u = t.reduce((d, f) => f(d), e());
        return (n = ab(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(c);
    }
    function l(c) {
        const u = r(c);
        if (u) return u;
        const d = lb(c, n);
        return o(c, d), d;
    }
    return function () {
        return s(cb.apply(null, arguments));
    };
}
const se = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    Kg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    db = /^\d+\/\d+$/,
    fb = new Set(["px", "full", "screen"]),
    mb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    pb =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    hb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    gb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    vb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Kt = (e) => to(e) || fb.has(e) || db.test(e),
    xn = (e) => Po(e, "length", Cb),
    to = (e) => !!e && !Number.isNaN(Number(e)),
    Ml = (e) => Po(e, "number", to),
    Vo = (e) => !!e && Number.isInteger(Number(e)),
    xb = (e) => e.endsWith("%") && to(e.slice(0, -1)),
    H = (e) => Kg.test(e),
    yn = (e) => mb.test(e),
    yb = new Set(["length", "size", "percentage"]),
    wb = (e) => Po(e, yb, Gg),
    bb = (e) => Po(e, "position", Gg),
    Nb = new Set(["image", "url"]),
    Sb = (e) => Po(e, Nb, kb),
    Eb = (e) => Po(e, "", jb),
    Wo = () => !0,
    Po = (e, t, n) => {
        const r = Kg.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    Cb = (e) => pb.test(e) && !hb.test(e),
    Gg = () => !1,
    jb = (e) => gb.test(e),
    kb = (e) => vb.test(e),
    Pb = () => {
        const e = se("colors"),
            t = se("spacing"),
            n = se("blur"),
            r = se("brightness"),
            o = se("borderColor"),
            s = se("borderRadius"),
            a = se("borderSpacing"),
            l = se("borderWidth"),
            c = se("contrast"),
            u = se("grayscale"),
            d = se("hueRotate"),
            f = se("invert"),
            v = se("gap"),
            m = se("gradientColorStops"),
            b = se("gradientColorStopPositions"),
            p = se("inset"),
            y = se("margin"),
            g = se("opacity"),
            x = se("padding"),
            w = se("saturate"),
            N = se("scale"),
            S = se("sepia"),
            E = se("skew"),
            C = se("space"),
            k = se("translate"),
            _ = () => ["auto", "contain", "none"],
            O = () => ["auto", "hidden", "clip", "visible", "scroll"],
            $ = () => ["auto", H, t],
            L = () => [H, t],
            K = () => ["", Kt, xn],
            M = () => ["auto", to, H],
            G = () => [
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
            F = () => ["solid", "dashed", "dotted", "double", "none"],
            V = () => [
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
            P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            R = () => ["", "0", H],
            I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            W = () => [to, H];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Wo],
                spacing: [Kt, xn],
                blur: ["none", "", yn, H],
                brightness: W(),
                borderColor: [e],
                borderRadius: ["none", "", "full", yn, H],
                borderSpacing: L(),
                borderWidth: K(),
                contrast: W(),
                grayscale: R(),
                hueRotate: W(),
                invert: R(),
                gap: L(),
                gradientColorStops: [e],
                gradientColorStopPositions: [xb, xn],
                inset: $(),
                margin: $(),
                opacity: W(),
                padding: L(),
                saturate: W(),
                scale: W(),
                sepia: R(),
                skew: W(),
                space: L(),
                translate: L(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", H] }],
                container: ["container"],
                columns: [{ columns: [yn] }],
                "break-after": [{ "break-after": I() }],
                "break-before": [{ "break-before": I() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
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
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...G(), H] }],
                overflow: [{ overflow: O() }],
                "overflow-x": [{ "overflow-x": O() }],
                "overflow-y": [{ "overflow-y": O() }],
                overscroll: [{ overscroll: _() }],
                "overscroll-x": [{ "overscroll-x": _() }],
                "overscroll-y": [{ "overscroll-y": _() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [p] }],
                "inset-x": [{ "inset-x": [p] }],
                "inset-y": [{ "inset-y": [p] }],
                start: [{ start: [p] }],
                end: [{ end: [p] }],
                top: [{ top: [p] }],
                right: [{ right: [p] }],
                bottom: [{ bottom: [p] }],
                left: [{ left: [p] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", Vo, H] }],
                basis: [{ basis: $() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", H] }],
                grow: [{ grow: R() }],
                shrink: [{ shrink: R() }],
                order: [{ order: ["first", "last", "none", Vo, H] }],
                "grid-cols": [{ "grid-cols": [Wo] }],
                "col-start-end": [{ col: ["auto", { span: ["full", Vo, H] }, H] }],
                "col-start": [{ "col-start": M() }],
                "col-end": [{ "col-end": M() }],
                "grid-rows": [{ "grid-rows": [Wo] }],
                "row-start-end": [{ row: ["auto", { span: [Vo, H] }, H] }],
                "row-start": [{ "row-start": M() }],
                "row-end": [{ "row-end": M() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
                gap: [{ gap: [v] }],
                "gap-x": [{ "gap-x": [v] }],
                "gap-y": [{ "gap-y": [v] }],
                "justify-content": [{ justify: ["normal", ...P()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...P(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...P(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [x] }],
                px: [{ px: [x] }],
                py: [{ py: [x] }],
                ps: [{ ps: [x] }],
                pe: [{ pe: [x] }],
                pt: [{ pt: [x] }],
                pr: [{ pr: [x] }],
                pb: [{ pb: [x] }],
                pl: [{ pl: [x] }],
                m: [{ m: [y] }],
                mx: [{ mx: [y] }],
                my: [{ my: [y] }],
                ms: [{ ms: [y] }],
                me: [{ me: [y] }],
                mt: [{ mt: [y] }],
                mr: [{ mr: [y] }],
                mb: [{ mb: [y] }],
                ml: [{ ml: [y] }],
                "space-x": [{ "space-x": [C] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [C] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
                "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", { screen: [yn] }, yn] }],
                h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", yn, xn] }],
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
                            Ml,
                        ],
                    },
                ],
                "font-family": [{ font: [Wo] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H] }],
                "line-clamp": [{ "line-clamp": ["none", to, Ml] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Kt, H] }],
                "list-image": [{ "list-image": ["none", H] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [g] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [g] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", Kt, xn] }],
                "underline-offset": [{ "underline-offset": ["auto", Kt, H] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: L() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", H] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [g] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...G(), bb] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", wb] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Sb] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [b] }],
                "gradient-via-pos": [{ via: [b] }],
                "gradient-to-pos": [{ to: [b] }],
                "gradient-from": [{ from: [m] }],
                "gradient-via": [{ via: [m] }],
                "gradient-to": [{ to: [m] }],
                rounded: [{ rounded: [s] }],
                "rounded-s": [{ "rounded-s": [s] }],
                "rounded-e": [{ "rounded-e": [s] }],
                "rounded-t": [{ "rounded-t": [s] }],
                "rounded-r": [{ "rounded-r": [s] }],
                "rounded-b": [{ "rounded-b": [s] }],
                "rounded-l": [{ "rounded-l": [s] }],
                "rounded-ss": [{ "rounded-ss": [s] }],
                "rounded-se": [{ "rounded-se": [s] }],
                "rounded-ee": [{ "rounded-ee": [s] }],
                "rounded-es": [{ "rounded-es": [s] }],
                "rounded-tl": [{ "rounded-tl": [s] }],
                "rounded-tr": [{ "rounded-tr": [s] }],
                "rounded-br": [{ "rounded-br": [s] }],
                "rounded-bl": [{ "rounded-bl": [s] }],
                "border-w": [{ border: [l] }],
                "border-w-x": [{ "border-x": [l] }],
                "border-w-y": [{ "border-y": [l] }],
                "border-w-s": [{ "border-s": [l] }],
                "border-w-e": [{ "border-e": [l] }],
                "border-w-t": [{ "border-t": [l] }],
                "border-w-r": [{ "border-r": [l] }],
                "border-w-b": [{ "border-b": [l] }],
                "border-w-l": [{ "border-l": [l] }],
                "border-opacity": [{ "border-opacity": [g] }],
                "border-style": [{ border: [...F(), "hidden"] }],
                "divide-x": [{ "divide-x": [l] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [l] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [g] }],
                "divide-style": [{ divide: F() }],
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
                "outline-style": [{ outline: ["", ...F()] }],
                "outline-offset": [{ "outline-offset": [Kt, H] }],
                "outline-w": [{ outline: [Kt, xn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: K() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [g] }],
                "ring-offset-w": [{ "ring-offset": [Kt, xn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", yn, Eb] }],
                "shadow-color": [{ shadow: [Wo] }],
                opacity: [{ opacity: [g] }],
                "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": V() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [c] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", yn, H] }],
                grayscale: [{ grayscale: [u] }],
                "hue-rotate": [{ "hue-rotate": [d] }],
                invert: [{ invert: [f] }],
                saturate: [{ saturate: [w] }],
                sepia: [{ sepia: [S] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [c] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
                "backdrop-invert": [{ "backdrop-invert": [f] }],
                "backdrop-opacity": [{ "backdrop-opacity": [g] }],
                "backdrop-saturate": [{ "backdrop-saturate": [w] }],
                "backdrop-sepia": [{ "backdrop-sepia": [S] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [a] }],
                "border-spacing-x": [{ "border-spacing-x": [a] }],
                "border-spacing-y": [{ "border-spacing-y": [a] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H] }],
                duration: [{ duration: W() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
                delay: [{ delay: W() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [N] }],
                "scale-x": [{ "scale-x": [N] }],
                "scale-y": [{ "scale-y": [N] }],
                rotate: [{ rotate: [Vo, H] }],
                "translate-x": [{ "translate-x": [k] }],
                "translate-y": [{ "translate-y": [k] }],
                "skew-x": [{ "skew-x": [E] }],
                "skew-y": [{ "skew-y": [E] }],
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
                            H,
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
                            H,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": L() }],
                "scroll-mx": [{ "scroll-mx": L() }],
                "scroll-my": [{ "scroll-my": L() }],
                "scroll-ms": [{ "scroll-ms": L() }],
                "scroll-me": [{ "scroll-me": L() }],
                "scroll-mt": [{ "scroll-mt": L() }],
                "scroll-mr": [{ "scroll-mr": L() }],
                "scroll-mb": [{ "scroll-mb": L() }],
                "scroll-ml": [{ "scroll-ml": L() }],
                "scroll-p": [{ "scroll-p": L() }],
                "scroll-px": [{ "scroll-px": L() }],
                "scroll-py": [{ "scroll-py": L() }],
                "scroll-ps": [{ "scroll-ps": L() }],
                "scroll-pe": [{ "scroll-pe": L() }],
                "scroll-pt": [{ "scroll-pt": L() }],
                "scroll-pr": [{ "scroll-pr": L() }],
                "scroll-pb": [{ "scroll-pb": L() }],
                "scroll-pl": [{ "scroll-pl": L() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", H] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [Kt, xn, Ml] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
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
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
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
    Rb = ub(Pb);
function le(...e) {
    return Rb(Dg(e));
}
function lt(e, t) {
    const n = window.location.search,
        r = new URL(e, window.location.origin);
    new URLSearchParams(n).forEach((s, a) => {
        r.searchParams.set(a, s);
    }),
        t &&
            Object.entries(t).forEach(([s, a]) => {
                a != null &&
                    (Array.isArray(a) ? r.searchParams.set(s, JSON.stringify(a)) : r.searchParams.set(s, String(a)));
            }),
        (window.location.href = r.toString());
}
function nd() {
    const e = new URLSearchParams(window.location.search),
        t = {};
    return (
        e.forEach((n, r) => {
            try {
                const o = JSON.parse(n);
                if (Array.isArray(o)) {
                    t[r] = o;
                    return;
                }
            } catch {}
            !isNaN(Number(n)) && n !== ""
                ? (t[r] = Number(n))
                : n === "true"
                  ? (t[r] = !0)
                  : n === "false"
                    ? (t[r] = !1)
                    : (t[r] = n);
        }),
        t
    );
}
const Tb = $w,
    Qg = h.forwardRef(({ className: e, ...t }, n) =>
        i.jsx(Tg, {
            ref: n,
            className: le(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
Qg.displayName = Tg.displayName;
const Ab = Fi(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    Yg = h.forwardRef(({ className: e, variant: t, ...n }, r) =>
        i.jsx(Ag, { ref: r, className: le(Ab({ variant: t }), e), ...n })
    );
Yg.displayName = Ag.displayName;
const Ob = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(Mg, {
        ref: n,
        className: le(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
            e
        ),
        ...t,
    })
);
Ob.displayName = Mg.displayName;
const qg = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(Ig, {
        ref: n,
        className: le(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: i.jsx($i, { className: "h-4 w-4" }),
    })
);
qg.displayName = Ig.displayName;
const Xg = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(Og, { ref: n, className: le("text-sm font-semibold", e), ...t })
);
Xg.displayName = Og.displayName;
const Jg = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(_g, { ref: n, className: le("text-sm opacity-90", e), ...t })
);
Jg.displayName = _g.displayName;
function _b() {
    const { toasts: e } = Q1();
    return i.jsxs(Tb, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
                return i.jsxs(
                    Yg,
                    {
                        ...s,
                        children: [
                            i.jsxs("div", {
                                className: "grid gap-1",
                                children: [n && i.jsx(Xg, { children: n }), r && i.jsx(Jg, { children: r })],
                            }),
                            o,
                            i.jsx(qg, {}),
                        ],
                    },
                    t
                );
            }),
            i.jsx(Qg, {}),
        ],
    });
}
var Jf = ["light", "dark"],
    Mb = "(prefers-color-scheme: dark)",
    Ib = h.createContext(void 0),
    Lb = { setTheme: (e) => {}, themes: [] },
    Db = () => {
        var e;
        return (e = h.useContext(Ib)) != null ? e : Lb;
    };
h.memo(
    ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: o,
        defaultTheme: s,
        value: a,
        attrs: l,
        nonce: c,
    }) => {
        let u = s === "system",
            d =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((b) => `'${b}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            f = o
                ? Jf.includes(s) && s
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            v = (b, p = !1, y = !0) => {
                let g = a ? a[b] : b,
                    x = p ? b + "|| ''" : `'${g}'`,
                    w = "";
                return (
                    o && y && !p && Jf.includes(b) && (w += `d.style.colorScheme = '${b}';`),
                    n === "class" ? (p || g ? (w += `c.add(${x})`) : (w += "null")) : g && (w += `d[s](n,${x})`),
                    w
                );
            },
            m = e
                ? `!function(){${d}${v(e)}}()`
                : r
                  ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Mb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${v(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + v(s, !1, !1) + "}"}${f}}catch(e){}}()`
                  : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${v(a ? "x[e]" : "e", !0)}}else{${v(s, !1, !1)};}${f}}catch(t){}}();`;
        return h.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: m } });
    }
);
var Fb = (e) => {
        switch (e) {
            case "success":
                return Bb;
            case "info":
                return Vb;
            case "warning":
                return Ub;
            case "error":
                return Wb;
            default:
                return null;
        }
    },
    zb = Array(12).fill(0),
    $b = ({ visible: e, className: t }) =>
        A.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            A.createElement(
                "div",
                { className: "sonner-spinner" },
                zb.map((n, r) => A.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    Bb = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    Ub = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    Vb = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    Wb = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    Hb = A.createElement(
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
        A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    Kb = () => {
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
    Wc = 1,
    Gb = class {
        constructor() {
            (this.subscribe = (e) => (
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
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        o =
                            typeof (e == null ? void 0 : e.id) == "number" ||
                            ((t = e.id) == null ? void 0 : t.length) > 0
                                ? e.id
                                : Wc++,
                        s = this.toasts.find((l) => l.id === o),
                        a = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                        s
                            ? (this.toasts = this.toasts.map((l) =>
                                  l.id === o
                                      ? (this.publish({ ...l, ...e, id: o, title: n }),
                                        { ...l, ...e, id: o, dismissible: a, title: n })
                                      : l
                              ))
                            : this.addToast({ title: n, ...r, dismissible: a, id: o }),
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
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                        (n = this.create({
                            ...t,
                            promise: e,
                            type: "loading",
                            message: t.loading,
                            description: typeof t.description != "function" ? t.description : void 0,
                        }));
                    let r = e instanceof Promise ? e : e(),
                        o = n !== void 0,
                        s,
                        a = r
                            .then(async (c) => {
                                if (((s = ["resolve", c]), A.isValidElement(c)))
                                    (o = !1), this.create({ id: n, type: "default", message: c });
                                else if (Yb(c) && !c.ok) {
                                    o = !1;
                                    let u =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${c.status}`)
                                                : t.error,
                                        d =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${c.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: u, description: d });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let u = typeof t.success == "function" ? await t.success(c) : t.success,
                                        d = typeof t.description == "function" ? await t.description(c) : t.description;
                                    this.create({ id: n, type: "success", message: u, description: d });
                                }
                            })
                            .catch(async (c) => {
                                if (((s = ["reject", c]), t.error !== void 0)) {
                                    o = !1;
                                    let u = typeof t.error == "function" ? await t.error(c) : t.error,
                                        d = typeof t.description == "function" ? await t.description(c) : t.description;
                                    this.create({ id: n, type: "error", message: u, description: d });
                                }
                            })
                            .finally(() => {
                                var c;
                                o && (this.dismiss(n), (n = void 0)), (c = t.finally) == null || c.call(t);
                            }),
                        l = () => new Promise((c, u) => a.then(() => (s[0] === "reject" ? u(s[1]) : c(s[1]))).catch(u));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: l }
                        : Object.assign(n, { unwrap: l });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || Wc++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    We = new Gb(),
    Qb = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Wc++;
        return We.addToast({ title: e, ...t, id: n }), n;
    },
    Yb = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    qb = Qb,
    Xb = () => We.toasts,
    Jb = () => We.getActiveToasts(),
    Lr = Object.assign(
        qb,
        {
            success: We.success,
            info: We.info,
            warning: We.warning,
            error: We.error,
            custom: We.custom,
            message: We.message,
            promise: We.promise,
            dismiss: We.dismiss,
            loading: We.loading,
        },
        { getHistory: Xb, getToasts: Jb }
    );
function Zb(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
Zb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function fa(e) {
    return e.label !== void 0;
}
var eN = 3,
    tN = "32px",
    nN = "16px",
    Zf = 4e3,
    rN = 356,
    oN = 14,
    sN = 20,
    aN = 200;
function vt(...e) {
    return e.filter(Boolean).join(" ");
}
function iN(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var lN = (e) => {
    var t, n, r, o, s, a, l, c, u, d, f;
    let {
            invert: v,
            toast: m,
            unstyled: b,
            interacting: p,
            setHeights: y,
            visibleToasts: g,
            heights: x,
            index: w,
            toasts: N,
            expanded: S,
            removeToast: E,
            defaultRichColors: C,
            closeButton: k,
            style: _,
            cancelButtonStyle: O,
            actionButtonStyle: $,
            className: L = "",
            descriptionClassName: K = "",
            duration: M,
            position: G,
            gap: F,
            loadingIcon: V,
            expandByDefault: P,
            classNames: R,
            icons: I,
            closeButtonAriaLabel: W = "Close toast",
            pauseWhenPageIsHidden: z,
        } = e,
        [Q, q] = A.useState(null),
        [ye, Te] = A.useState(null),
        [ee, Cr] = A.useState(!1),
        [dn, qn] = A.useState(!1),
        [fn, jr] = A.useState(!1),
        [mn, Vs] = A.useState(!1),
        [el, Ws] = A.useState(!1),
        [tl, _o] = A.useState(0),
        [kr, Cd] = A.useState(0),
        Mo = A.useRef(m.duration || M || Zf),
        jd = A.useRef(null),
        Xn = A.useRef(null),
        ly = w === 0,
        cy = w + 1 <= g,
        ot = m.type,
        Pr = m.dismissible !== !1,
        uy = m.className || "",
        dy = m.descriptionClassName || "",
        Hs = A.useMemo(() => x.findIndex((B) => B.toastId === m.id) || 0, [x, m.id]),
        fy = A.useMemo(() => {
            var B;
            return (B = m.closeButton) != null ? B : k;
        }, [m.closeButton, k]),
        kd = A.useMemo(() => m.duration || M || Zf, [m.duration, M]),
        nl = A.useRef(0),
        Rr = A.useRef(0),
        Pd = A.useRef(0),
        Tr = A.useRef(null),
        [my, py] = G.split("-"),
        Rd = A.useMemo(() => x.reduce((B, re, ce) => (ce >= Hs ? B : B + re.height), 0), [x, Hs]),
        Td = Kb(),
        hy = m.invert || v,
        rl = ot === "loading";
    (Rr.current = A.useMemo(() => Hs * F + Rd, [Hs, Rd])),
        A.useEffect(() => {
            Mo.current = kd;
        }, [kd]),
        A.useEffect(() => {
            Cr(!0);
        }, []),
        A.useEffect(() => {
            let B = Xn.current;
            if (B) {
                let re = B.getBoundingClientRect().height;
                return (
                    Cd(re),
                    y((ce) => [{ toastId: m.id, height: re, position: m.position }, ...ce]),
                    () => y((ce) => ce.filter((mt) => mt.toastId !== m.id))
                );
            }
        }, [y, m.id]),
        A.useLayoutEffect(() => {
            if (!ee) return;
            let B = Xn.current,
                re = B.style.height;
            B.style.height = "auto";
            let ce = B.getBoundingClientRect().height;
            (B.style.height = re),
                Cd(ce),
                y((mt) =>
                    mt.find((pt) => pt.toastId === m.id)
                        ? mt.map((pt) => (pt.toastId === m.id ? { ...pt, height: ce } : pt))
                        : [{ toastId: m.id, height: ce, position: m.position }, ...mt]
                );
        }, [ee, m.title, m.description, y, m.id]);
    let pn = A.useCallback(() => {
        qn(!0),
            _o(Rr.current),
            y((B) => B.filter((re) => re.toastId !== m.id)),
            setTimeout(() => {
                E(m);
            }, aN);
    }, [m, E, y, Rr]);
    A.useEffect(() => {
        if ((m.promise && ot === "loading") || m.duration === 1 / 0 || m.type === "loading") return;
        let B;
        return (
            S || p || (z && Td)
                ? (() => {
                      if (Pd.current < nl.current) {
                          let re = new Date().getTime() - nl.current;
                          Mo.current = Mo.current - re;
                      }
                      Pd.current = new Date().getTime();
                  })()
                : Mo.current !== 1 / 0 &&
                  ((nl.current = new Date().getTime()),
                  (B = setTimeout(() => {
                      var re;
                      (re = m.onAutoClose) == null || re.call(m, m), pn();
                  }, Mo.current))),
            () => clearTimeout(B)
        );
    }, [S, p, m, ot, z, Td, pn]),
        A.useEffect(() => {
            m.delete && pn();
        }, [pn, m.delete]);
    function gy() {
        var B, re, ce;
        return I != null && I.loading
            ? A.createElement(
                  "div",
                  {
                      className: vt(
                          R == null ? void 0 : R.loader,
                          (B = m == null ? void 0 : m.classNames) == null ? void 0 : B.loader,
                          "sonner-loader"
                      ),
                      "data-visible": ot === "loading",
                  },
                  I.loading
              )
            : V
              ? A.createElement(
                    "div",
                    {
                        className: vt(
                            R == null ? void 0 : R.loader,
                            (re = m == null ? void 0 : m.classNames) == null ? void 0 : re.loader,
                            "sonner-loader"
                        ),
                        "data-visible": ot === "loading",
                    },
                    V
                )
              : A.createElement($b, {
                    className: vt(
                        R == null ? void 0 : R.loader,
                        (ce = m == null ? void 0 : m.classNames) == null ? void 0 : ce.loader
                    ),
                    visible: ot === "loading",
                });
    }
    return A.createElement(
        "li",
        {
            tabIndex: 0,
            ref: Xn,
            className: vt(
                L,
                uy,
                R == null ? void 0 : R.toast,
                (t = m == null ? void 0 : m.classNames) == null ? void 0 : t.toast,
                R == null ? void 0 : R.default,
                R == null ? void 0 : R[ot],
                (n = m == null ? void 0 : m.classNames) == null ? void 0 : n[ot]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = m.richColors) != null ? r : C,
            "data-styled": !(m.jsx || m.unstyled || b),
            "data-mounted": ee,
            "data-promise": !!m.promise,
            "data-swiped": el,
            "data-removed": dn,
            "data-visible": cy,
            "data-y-position": my,
            "data-x-position": py,
            "data-index": w,
            "data-front": ly,
            "data-swiping": fn,
            "data-dismissible": Pr,
            "data-type": ot,
            "data-invert": hy,
            "data-swipe-out": mn,
            "data-swipe-direction": ye,
            "data-expanded": !!(S || (P && ee)),
            style: {
                "--index": w,
                "--toasts-before": w,
                "--z-index": N.length - w,
                "--offset": `${dn ? tl : Rr.current}px`,
                "--initial-height": P ? "auto" : `${kr}px`,
                ..._,
                ...m.style,
            },
            onDragEnd: () => {
                jr(!1), q(null), (Tr.current = null);
            },
            onPointerDown: (B) => {
                rl ||
                    !Pr ||
                    ((jd.current = new Date()),
                    _o(Rr.current),
                    B.target.setPointerCapture(B.pointerId),
                    B.target.tagName !== "BUTTON" && (jr(!0), (Tr.current = { x: B.clientX, y: B.clientY })));
            },
            onPointerUp: () => {
                var B, re, ce, mt;
                if (mn || !Pr) return;
                Tr.current = null;
                let pt = Number(
                        ((B = Xn.current) == null
                            ? void 0
                            : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    hn = Number(
                        ((re = Xn.current) == null
                            ? void 0
                            : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    Jn = new Date().getTime() - ((ce = jd.current) == null ? void 0 : ce.getTime()),
                    ht = Q === "x" ? pt : hn,
                    gn = Math.abs(ht) / Jn;
                if (Math.abs(ht) >= sN || gn > 0.11) {
                    _o(Rr.current),
                        (mt = m.onDismiss) == null || mt.call(m, m),
                        Te(Q === "x" ? (pt > 0 ? "right" : "left") : hn > 0 ? "down" : "up"),
                        pn(),
                        Vs(!0),
                        Ws(!1);
                    return;
                }
                jr(!1), q(null);
            },
            onPointerMove: (B) => {
                var re, ce, mt, pt;
                if (!Tr.current || !Pr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                    return;
                let hn = B.clientY - Tr.current.y,
                    Jn = B.clientX - Tr.current.x,
                    ht = (ce = e.swipeDirections) != null ? ce : iN(G);
                !Q && (Math.abs(Jn) > 1 || Math.abs(hn) > 1) && q(Math.abs(Jn) > Math.abs(hn) ? "x" : "y");
                let gn = { x: 0, y: 0 };
                Q === "y"
                    ? (ht.includes("top") || ht.includes("bottom")) &&
                      ((ht.includes("top") && hn < 0) || (ht.includes("bottom") && hn > 0)) &&
                      (gn.y = hn)
                    : Q === "x" &&
                      (ht.includes("left") || ht.includes("right")) &&
                      ((ht.includes("left") && Jn < 0) || (ht.includes("right") && Jn > 0)) &&
                      (gn.x = Jn),
                    (Math.abs(gn.x) > 0 || Math.abs(gn.y) > 0) && Ws(!0),
                    (mt = Xn.current) == null || mt.style.setProperty("--swipe-amount-x", `${gn.x}px`),
                    (pt = Xn.current) == null || pt.style.setProperty("--swipe-amount-y", `${gn.y}px`);
            },
        },
        fy && !m.jsx
            ? A.createElement(
                  "button",
                  {
                      "aria-label": W,
                      "data-disabled": rl,
                      "data-close-button": !0,
                      onClick:
                          rl || !Pr
                              ? () => {}
                              : () => {
                                    var B;
                                    pn(), (B = m.onDismiss) == null || B.call(m, m);
                                },
                      className: vt(
                          R == null ? void 0 : R.closeButton,
                          (o = m == null ? void 0 : m.classNames) == null ? void 0 : o.closeButton
                      ),
                  },
                  (s = I == null ? void 0 : I.close) != null ? s : Hb
              )
            : null,
        m.jsx || h.isValidElement(m.title)
            ? m.jsx
                ? m.jsx
                : typeof m.title == "function"
                  ? m.title()
                  : m.title
            : A.createElement(
                  A.Fragment,
                  null,
                  ot || m.icon || m.promise
                      ? A.createElement(
                            "div",
                            {
                                "data-icon": "",
                                className: vt(
                                    R == null ? void 0 : R.icon,
                                    (a = m == null ? void 0 : m.classNames) == null ? void 0 : a.icon
                                ),
                            },
                            m.promise || (m.type === "loading" && !m.icon) ? m.icon || gy() : null,
                            m.type !== "loading" ? m.icon || (I == null ? void 0 : I[ot]) || Fb(ot) : null
                        )
                      : null,
                  A.createElement(
                      "div",
                      {
                          "data-content": "",
                          className: vt(
                              R == null ? void 0 : R.content,
                              (l = m == null ? void 0 : m.classNames) == null ? void 0 : l.content
                          ),
                      },
                      A.createElement(
                          "div",
                          {
                              "data-title": "",
                              className: vt(
                                  R == null ? void 0 : R.title,
                                  (c = m == null ? void 0 : m.classNames) == null ? void 0 : c.title
                              ),
                          },
                          typeof m.title == "function" ? m.title() : m.title
                      ),
                      m.description
                          ? A.createElement(
                                "div",
                                {
                                    "data-description": "",
                                    className: vt(
                                        K,
                                        dy,
                                        R == null ? void 0 : R.description,
                                        (u = m == null ? void 0 : m.classNames) == null ? void 0 : u.description
                                    ),
                                },
                                typeof m.description == "function" ? m.description() : m.description
                            )
                          : null
                  ),
                  h.isValidElement(m.cancel)
                      ? m.cancel
                      : m.cancel && fa(m.cancel)
                        ? A.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-cancel": !0,
                                  style: m.cancelButtonStyle || O,
                                  onClick: (B) => {
                                      var re, ce;
                                      fa(m.cancel) &&
                                          Pr &&
                                          ((ce = (re = m.cancel).onClick) == null || ce.call(re, B), pn());
                                  },
                                  className: vt(
                                      R == null ? void 0 : R.cancelButton,
                                      (d = m == null ? void 0 : m.classNames) == null ? void 0 : d.cancelButton
                                  ),
                              },
                              m.cancel.label
                          )
                        : null,
                  h.isValidElement(m.action)
                      ? m.action
                      : m.action && fa(m.action)
                        ? A.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-action": !0,
                                  style: m.actionButtonStyle || $,
                                  onClick: (B) => {
                                      var re, ce;
                                      fa(m.action) &&
                                          ((ce = (re = m.action).onClick) == null || ce.call(re, B),
                                          !B.defaultPrevented && pn());
                                  },
                                  className: vt(
                                      R == null ? void 0 : R.actionButton,
                                      (f = m == null ? void 0 : m.classNames) == null ? void 0 : f.actionButton
                                  ),
                              },
                              m.action.label
                          )
                        : null
              )
    );
};
function em() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function cN(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, o) => {
            let s = o === 1,
                a = s ? "--mobile-offset" : "--offset",
                l = s ? nN : tN;
            function c(u) {
                ["top", "right", "bottom", "left"].forEach((d) => {
                    n[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? c(r)
                : typeof r == "object"
                  ? ["top", "right", "bottom", "left"].forEach((u) => {
                        r[u] === void 0
                            ? (n[`${a}-${u}`] = l)
                            : (n[`${a}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
                    })
                  : c(l);
        }),
        n
    );
}
var uN = h.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: s,
            closeButton: a,
            className: l,
            offset: c,
            mobileOffset: u,
            theme: d = "light",
            richColors: f,
            duration: v,
            style: m,
            visibleToasts: b = eN,
            toastOptions: p,
            dir: y = em(),
            gap: g = oN,
            loadingIcon: x,
            icons: w,
            containerAriaLabel: N = "Notifications",
            pauseWhenPageIsHidden: S,
        } = e,
        [E, C] = A.useState([]),
        k = A.useMemo(
            () => Array.from(new Set([r].concat(E.filter((z) => z.position).map((z) => z.position)))),
            [E, r]
        ),
        [_, O] = A.useState([]),
        [$, L] = A.useState(!1),
        [K, M] = A.useState(!1),
        [G, F] = A.useState(
            d !== "system"
                ? d
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
        ),
        V = A.useRef(null),
        P = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        R = A.useRef(null),
        I = A.useRef(!1),
        W = A.useCallback((z) => {
            C((Q) => {
                var q;
                return (
                    ((q = Q.find((ye) => ye.id === z.id)) != null && q.delete) || We.dismiss(z.id),
                    Q.filter(({ id: ye }) => ye !== z.id)
                );
            });
        }, []);
    return (
        A.useEffect(
            () =>
                We.subscribe((z) => {
                    if (z.dismiss) {
                        C((Q) => Q.map((q) => (q.id === z.id ? { ...q, delete: !0 } : q)));
                        return;
                    }
                    setTimeout(() => {
                        lg.flushSync(() => {
                            C((Q) => {
                                let q = Q.findIndex((ye) => ye.id === z.id);
                                return q !== -1 ? [...Q.slice(0, q), { ...Q[q], ...z }, ...Q.slice(q + 1)] : [z, ...Q];
                            });
                        });
                    });
                }),
            []
        ),
        A.useEffect(() => {
            if (d !== "system") {
                F(d);
                return;
            }
            if (
                (d === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? F("dark")
                        : F("light")),
                typeof window > "u")
            )
                return;
            let z = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                z.addEventListener("change", ({ matches: Q }) => {
                    F(Q ? "dark" : "light");
                });
            } catch {
                z.addListener(({ matches: q }) => {
                    try {
                        F(q ? "dark" : "light");
                    } catch (ye) {
                        console.error(ye);
                    }
                });
            }
        }, [d]),
        A.useEffect(() => {
            E.length <= 1 && L(!1);
        }, [E]),
        A.useEffect(() => {
            let z = (Q) => {
                var q, ye;
                o.every((Te) => Q[Te] || Q.code === Te) && (L(!0), (q = V.current) == null || q.focus()),
                    Q.code === "Escape" &&
                        (document.activeElement === V.current ||
                            ((ye = V.current) != null && ye.contains(document.activeElement))) &&
                        L(!1);
            };
            return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
        }, [o]),
        A.useEffect(() => {
            if (V.current)
                return () => {
                    R.current && (R.current.focus({ preventScroll: !0 }), (R.current = null), (I.current = !1));
                };
        }, [V.current]),
        A.createElement(
            "section",
            {
                ref: t,
                "aria-label": `${N} ${P}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
            },
            k.map((z, Q) => {
                var q;
                let [ye, Te] = z.split("-");
                return E.length
                    ? A.createElement(
                          "ol",
                          {
                              key: z,
                              dir: y === "auto" ? em() : y,
                              tabIndex: -1,
                              ref: V,
                              className: l,
                              "data-sonner-toaster": !0,
                              "data-theme": G,
                              "data-y-position": ye,
                              "data-lifted": $ && E.length > 1 && !s,
                              "data-x-position": Te,
                              style: {
                                  "--front-toast-height": `${((q = _[0]) == null ? void 0 : q.height) || 0}px`,
                                  "--width": `${rN}px`,
                                  "--gap": `${g}px`,
                                  ...m,
                                  ...cN(c, u),
                              },
                              onBlur: (ee) => {
                                  I.current &&
                                      !ee.currentTarget.contains(ee.relatedTarget) &&
                                      ((I.current = !1),
                                      R.current && (R.current.focus({ preventScroll: !0 }), (R.current = null)));
                              },
                              onFocus: (ee) => {
                                  (ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false") ||
                                      I.current ||
                                      ((I.current = !0), (R.current = ee.relatedTarget));
                              },
                              onMouseEnter: () => L(!0),
                              onMouseMove: () => L(!0),
                              onMouseLeave: () => {
                                  K || L(!1);
                              },
                              onDragEnd: () => L(!1),
                              onPointerDown: (ee) => {
                                  (ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false") ||
                                      M(!0);
                              },
                              onPointerUp: () => M(!1),
                          },
                          E.filter((ee) => (!ee.position && Q === 0) || ee.position === z).map((ee, Cr) => {
                              var dn, qn;
                              return A.createElement(lN, {
                                  key: ee.id,
                                  icons: w,
                                  index: Cr,
                                  toast: ee,
                                  defaultRichColors: f,
                                  duration: (dn = p == null ? void 0 : p.duration) != null ? dn : v,
                                  className: p == null ? void 0 : p.className,
                                  descriptionClassName: p == null ? void 0 : p.descriptionClassName,
                                  invert: n,
                                  visibleToasts: b,
                                  closeButton: (qn = p == null ? void 0 : p.closeButton) != null ? qn : a,
                                  interacting: K,
                                  position: z,
                                  style: p == null ? void 0 : p.style,
                                  unstyled: p == null ? void 0 : p.unstyled,
                                  classNames: p == null ? void 0 : p.classNames,
                                  cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                                  actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                                  removeToast: W,
                                  toasts: E.filter((fn) => fn.position == ee.position),
                                  heights: _.filter((fn) => fn.position == ee.position),
                                  setHeights: O,
                                  expandByDefault: s,
                                  gap: g,
                                  loadingIcon: x,
                                  expanded: $,
                                  pauseWhenPageIsHidden: S,
                                  swipeDirections: e.swipeDirections,
                              });
                          })
                      )
                    : null;
            })
        )
    );
});
const dN = ({ ...e }) => {
    const { theme: t = "system" } = Db();
    return i.jsx(uN, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
        },
        ...e,
    });
};
var fN = au[" useId ".trim().toString()] || (() => {}),
    mN = 0;
function Ma(e) {
    const [t, n] = h.useState(fN());
    return (
        sn(() => {
            n((r) => r ?? String(mN++));
        }, [e]),
        t ? `radix-${t}` : ""
    );
}
const pN = ["top", "right", "bottom", "left"],
    Hn = Math.min,
    Xe = Math.max,
    ci = Math.round,
    ma = Math.floor,
    Vt = (e) => ({ x: e, y: e }),
    hN = { left: "right", right: "left", bottom: "top", top: "bottom" },
    gN = { start: "end", end: "start" };
function Hc(e, t, n) {
    return Xe(e, Hn(t, n));
}
function an(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function ln(e) {
    return e.split("-")[0];
}
function Ro(e) {
    return e.split("-")[1];
}
function rd(e) {
    return e === "x" ? "y" : "x";
}
function od(e) {
    return e === "y" ? "height" : "width";
}
const vN = new Set(["top", "bottom"]);
function $t(e) {
    return vN.has(ln(e)) ? "y" : "x";
}
function sd(e) {
    return rd($t(e));
}
function xN(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ro(e),
        o = sd(e),
        s = od(o);
    let a = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = ui(a)), [a, ui(a)];
}
function yN(e) {
    const t = ui(e);
    return [Kc(e), t, Kc(t)];
}
function Kc(e) {
    return e.replace(/start|end/g, (t) => gN[t]);
}
const tm = ["left", "right"],
    nm = ["right", "left"],
    wN = ["top", "bottom"],
    bN = ["bottom", "top"];
function NN(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? nm : tm) : t ? tm : nm;
        case "left":
        case "right":
            return t ? wN : bN;
        default:
            return [];
    }
}
function SN(e, t, n, r) {
    const o = Ro(e);
    let s = NN(ln(e), n === "start", r);
    return o && ((s = s.map((a) => a + "-" + o)), t && (s = s.concat(s.map(Kc)))), s;
}
function ui(e) {
    return e.replace(/left|right|bottom|top/g, (t) => hN[t]);
}
function EN(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Zg(e) {
    return typeof e != "number" ? EN(e) : { top: e, right: e, bottom: e, left: e };
}
function di(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function rm(e, t, n) {
    let { reference: r, floating: o } = e;
    const s = $t(t),
        a = sd(t),
        l = od(a),
        c = ln(t),
        u = s === "y",
        d = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        v = r[l] / 2 - o[l] / 2;
    let m;
    switch (c) {
        case "top":
            m = { x: d, y: r.y - o.height };
            break;
        case "bottom":
            m = { x: d, y: r.y + r.height };
            break;
        case "right":
            m = { x: r.x + r.width, y: f };
            break;
        case "left":
            m = { x: r.x - o.width, y: f };
            break;
        default:
            m = { x: r.x, y: r.y };
    }
    switch (Ro(t)) {
        case "start":
            m[a] -= v * (n && u ? -1 : 1);
            break;
        case "end":
            m[a] += v * (n && u ? -1 : 1);
            break;
    }
    return m;
}
const CN = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: a } = n,
        l = s.filter(Boolean),
        c = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: d, y: f } = rm(u, r, c),
        v = r,
        m = {},
        b = 0;
    for (let p = 0; p < l.length; p++) {
        const { name: y, fn: g } = l[p],
            {
                x,
                y: w,
                data: N,
                reset: S,
            } = await g({
                x: d,
                y: f,
                initialPlacement: r,
                placement: v,
                strategy: o,
                middlewareData: m,
                rects: u,
                platform: a,
                elements: { reference: e, floating: t },
            });
        (d = x ?? d),
            (f = w ?? f),
            (m = { ...m, [y]: { ...m[y], ...N } }),
            S &&
                b <= 50 &&
                (b++,
                typeof S == "object" &&
                    (S.placement && (v = S.placement),
                    S.rects &&
                        (u =
                            S.rects === !0
                                ? await a.getElementRects({ reference: e, floating: t, strategy: o })
                                : S.rects),
                    ({ x: d, y: f } = rm(u, v, c))),
                (p = -1));
    }
    return { x: d, y: f, placement: v, strategy: o, middlewareData: m };
};
async function Cs(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: s, rects: a, elements: l, strategy: c } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: v = !1,
            padding: m = 0,
        } = an(t, e),
        b = Zg(m),
        y = l[v ? (f === "floating" ? "reference" : "floating") : f],
        g = di(
            await s.getClippingRect({
                element:
                    (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n
                        ? y
                        : y.contextElement ||
                          (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating))),
                boundary: u,
                rootBoundary: d,
                strategy: c,
            })
        ),
        x = f === "floating" ? { x: r, y: o, width: a.floating.width, height: a.floating.height } : a.reference,
        w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)),
        N = (await (s.isElement == null ? void 0 : s.isElement(w)))
            ? (await (s.getScale == null ? void 0 : s.getScale(w))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        S = di(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: l,
                      rect: x,
                      offsetParent: w,
                      strategy: c,
                  })
                : x
        );
    return {
        top: (g.top - S.top + b.top) / N.y,
        bottom: (S.bottom - g.bottom + b.bottom) / N.y,
        left: (g.left - S.left + b.left) / N.x,
        right: (S.right - g.right + b.right) / N.x,
    };
}
const jN = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: s, platform: a, elements: l, middlewareData: c } = t,
                { element: u, padding: d = 0 } = an(e, t) || {};
            if (u == null) return {};
            const f = Zg(d),
                v = { x: n, y: r },
                m = sd(o),
                b = od(m),
                p = await a.getDimensions(u),
                y = m === "y",
                g = y ? "top" : "left",
                x = y ? "bottom" : "right",
                w = y ? "clientHeight" : "clientWidth",
                N = s.reference[b] + s.reference[m] - v[m] - s.floating[b],
                S = v[m] - s.reference[m],
                E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
            let C = E ? E[w] : 0;
            (!C || !(await (a.isElement == null ? void 0 : a.isElement(E)))) && (C = l.floating[w] || s.floating[b]);
            const k = N / 2 - S / 2,
                _ = C / 2 - p[b] / 2 - 1,
                O = Hn(f[g], _),
                $ = Hn(f[x], _),
                L = O,
                K = C - p[b] - $,
                M = C / 2 - p[b] / 2 + k,
                G = Hc(L, M, K),
                F = !c.arrow && Ro(o) != null && M !== G && s.reference[b] / 2 - (M < L ? O : $) - p[b] / 2 < 0,
                V = F ? (M < L ? M - L : M - K) : 0;
            return {
                [m]: v[m] + V,
                data: { [m]: G, centerOffset: M - G - V, ...(F && { alignmentOffset: V }) },
                reset: F,
            };
        },
    }),
    kN = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: s,
                            rects: a,
                            initialPlacement: l,
                            platform: c,
                            elements: u,
                        } = t,
                        {
                            mainAxis: d = !0,
                            crossAxis: f = !0,
                            fallbackPlacements: v,
                            fallbackStrategy: m = "bestFit",
                            fallbackAxisSideDirection: b = "none",
                            flipAlignment: p = !0,
                            ...y
                        } = an(e, t);
                    if ((n = s.arrow) != null && n.alignmentOffset) return {};
                    const g = ln(o),
                        x = $t(l),
                        w = ln(l) === l,
                        N = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
                        S = v || (w || !p ? [ui(l)] : yN(l)),
                        E = b !== "none";
                    !v && E && S.push(...SN(l, p, b, N));
                    const C = [l, ...S],
                        k = await Cs(t, y),
                        _ = [];
                    let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                    if ((d && _.push(k[g]), f)) {
                        const M = xN(o, a, N);
                        _.push(k[M[0]], k[M[1]]);
                    }
                    if (((O = [...O, { placement: o, overflows: _ }]), !_.every((M) => M <= 0))) {
                        var $, L;
                        const M = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1,
                            G = C[M];
                        if (
                            G &&
                            (!(f === "alignment" ? x !== $t(G) : !1) ||
                                O.every((P) => P.overflows[0] > 0 && $t(P.placement) === x))
                        )
                            return { data: { index: M, overflows: O }, reset: { placement: G } };
                        let F =
                            (L = O.filter((V) => V.overflows[0] <= 0).sort(
                                (V, P) => V.overflows[1] - P.overflows[1]
                            )[0]) == null
                                ? void 0
                                : L.placement;
                        if (!F)
                            switch (m) {
                                case "bestFit": {
                                    var K;
                                    const V =
                                        (K = O.filter((P) => {
                                            if (E) {
                                                const R = $t(P.placement);
                                                return R === x || R === "y";
                                            }
                                            return !0;
                                        })
                                            .map((P) => [
                                                P.placement,
                                                P.overflows.filter((R) => R > 0).reduce((R, I) => R + I, 0),
                                            ])
                                            .sort((P, R) => P[1] - R[1])[0]) == null
                                            ? void 0
                                            : K[0];
                                    V && (F = V);
                                    break;
                                }
                                case "initialPlacement":
                                    F = l;
                                    break;
                            }
                        if (o !== F) return { reset: { placement: F } };
                    }
                    return {};
                },
            }
        );
    };
function om(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function sm(e) {
    return pN.some((t) => e[t] >= 0);
}
const PN = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n } = t,
                        { strategy: r = "referenceHidden", ...o } = an(e, t);
                    switch (r) {
                        case "referenceHidden": {
                            const s = await Cs(t, { ...o, elementContext: "reference" }),
                                a = om(s, n.reference);
                            return { data: { referenceHiddenOffsets: a, referenceHidden: sm(a) } };
                        }
                        case "escaped": {
                            const s = await Cs(t, { ...o, altBoundary: !0 }),
                                a = om(s, n.floating);
                            return { data: { escapedOffsets: a, escaped: sm(a) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    ev = new Set(["left", "top"]);
async function RN(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        a = ln(n),
        l = Ro(n),
        c = $t(n) === "y",
        u = ev.has(a) ? -1 : 1,
        d = s && c ? -1 : 1,
        f = an(t, e);
    let {
        mainAxis: v,
        crossAxis: m,
        alignmentAxis: b,
    } = typeof f == "number"
        ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
    return (
        l && typeof b == "number" && (m = l === "end" ? b * -1 : b), c ? { x: m * d, y: v * u } : { x: v * u, y: m * d }
    );
}
const TN = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: s, placement: a, middlewareData: l } = t,
                        c = await RN(t, e);
                    return a === ((n = l.offset) == null ? void 0 : n.placement) &&
                        (r = l.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + c.x, y: s + c.y, data: { ...c, placement: a } };
                },
            }
        );
    },
    AN = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: s = !0,
                            crossAxis: a = !1,
                            limiter: l = {
                                fn: (y) => {
                                    let { x: g, y: x } = y;
                                    return { x: g, y: x };
                                },
                            },
                            ...c
                        } = an(e, t),
                        u = { x: n, y: r },
                        d = await Cs(t, c),
                        f = $t(ln(o)),
                        v = rd(f);
                    let m = u[v],
                        b = u[f];
                    if (s) {
                        const y = v === "y" ? "top" : "left",
                            g = v === "y" ? "bottom" : "right",
                            x = m + d[y],
                            w = m - d[g];
                        m = Hc(x, m, w);
                    }
                    if (a) {
                        const y = f === "y" ? "top" : "left",
                            g = f === "y" ? "bottom" : "right",
                            x = b + d[y],
                            w = b - d[g];
                        b = Hc(x, b, w);
                    }
                    const p = l.fn({ ...t, [v]: m, [f]: b });
                    return { ...p, data: { x: p.x - n, y: p.y - r, enabled: { [v]: s, [f]: a } } };
                },
            }
        );
    },
    ON = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: o, rects: s, middlewareData: a } = t,
                        { offset: l = 0, mainAxis: c = !0, crossAxis: u = !0 } = an(e, t),
                        d = { x: n, y: r },
                        f = $t(o),
                        v = rd(f);
                    let m = d[v],
                        b = d[f];
                    const p = an(l, t),
                        y = typeof p == "number" ? { mainAxis: p, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...p };
                    if (c) {
                        const w = v === "y" ? "height" : "width",
                            N = s.reference[v] - s.floating[w] + y.mainAxis,
                            S = s.reference[v] + s.reference[w] - y.mainAxis;
                        m < N ? (m = N) : m > S && (m = S);
                    }
                    if (u) {
                        var g, x;
                        const w = v === "y" ? "width" : "height",
                            N = ev.has(ln(o)),
                            S =
                                s.reference[f] -
                                s.floating[w] +
                                ((N && ((g = a.offset) == null ? void 0 : g[f])) || 0) +
                                (N ? 0 : y.crossAxis),
                            E =
                                s.reference[f] +
                                s.reference[w] +
                                (N ? 0 : ((x = a.offset) == null ? void 0 : x[f]) || 0) -
                                (N ? y.crossAxis : 0);
                        b < S ? (b = S) : b > E && (b = E);
                    }
                    return { [v]: m, [f]: b };
                },
            }
        );
    },
    _N = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, rects: s, platform: a, elements: l } = t,
                        { apply: c = () => {}, ...u } = an(e, t),
                        d = await Cs(t, u),
                        f = ln(o),
                        v = Ro(o),
                        m = $t(o) === "y",
                        { width: b, height: p } = s.floating;
                    let y, g;
                    f === "top" || f === "bottom"
                        ? ((y = f),
                          (g =
                              v === ((await (a.isRTL == null ? void 0 : a.isRTL(l.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((g = f), (y = v === "end" ? "top" : "bottom"));
                    const x = p - d.top - d.bottom,
                        w = b - d.left - d.right,
                        N = Hn(p - d[y], x),
                        S = Hn(b - d[g], w),
                        E = !t.middlewareData.shift;
                    let C = N,
                        k = S;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (k = w),
                        (r = t.middlewareData.shift) != null && r.enabled.y && (C = x),
                        E && !v)
                    ) {
                        const O = Xe(d.left, 0),
                            $ = Xe(d.right, 0),
                            L = Xe(d.top, 0),
                            K = Xe(d.bottom, 0);
                        m
                            ? (k = b - 2 * (O !== 0 || $ !== 0 ? O + $ : Xe(d.left, d.right)))
                            : (C = p - 2 * (L !== 0 || K !== 0 ? L + K : Xe(d.top, d.bottom)));
                    }
                    await c({ ...t, availableWidth: k, availableHeight: C });
                    const _ = await a.getDimensions(l.floating);
                    return b !== _.width || p !== _.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function Bi() {
    return typeof window < "u";
}
function To(e) {
    return tv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ht(e) {
    var t;
    return (t = (tv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function tv(e) {
    return Bi() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function Rt(e) {
    return Bi() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function Wt(e) {
    return Bi() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function am(e) {
    return !Bi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
const MN = new Set(["inline", "contents"]);
function Bs(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Tt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !MN.has(o);
}
const IN = new Set(["table", "td", "th"]);
function LN(e) {
    return IN.has(To(e));
}
const DN = [":popover-open", ":modal"];
function Ui(e) {
    return DN.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
const FN = ["transform", "translate", "scale", "rotate", "perspective"],
    zN = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    $N = ["paint", "layout", "strict", "content"];
function ad(e) {
    const t = id(),
        n = Rt(e) ? Tt(e) : e;
    return (
        FN.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        zN.some((r) => (n.willChange || "").includes(r)) ||
        $N.some((r) => (n.contain || "").includes(r))
    );
}
function BN(e) {
    let t = Kn(e);
    for (; Wt(t) && !No(t); ) {
        if (ad(t)) return t;
        if (Ui(t)) return null;
        t = Kn(t);
    }
    return null;
}
function id() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const UN = new Set(["html", "body", "#document"]);
function No(e) {
    return UN.has(To(e));
}
function Tt(e) {
    return et(e).getComputedStyle(e);
}
function Vi(e) {
    return Rt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Kn(e) {
    if (To(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (am(e) && e.host) || Ht(e);
    return am(t) ? t.host : t;
}
function nv(e) {
    const t = Kn(e);
    return No(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Wt(t) && Bs(t) ? t : nv(t);
}
function js(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = nv(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        a = et(o);
    if (s) {
        const l = Gc(a);
        return t.concat(a, a.visualViewport || [], Bs(o) ? o : [], l && n ? js(l) : []);
    }
    return t.concat(o, js(o, [], n));
}
function Gc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rv(e) {
    const t = Tt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Wt(e),
        s = o ? e.offsetWidth : n,
        a = o ? e.offsetHeight : r,
        l = ci(n) !== s || ci(r) !== a;
    return l && ((n = s), (r = a)), { width: n, height: r, $: l };
}
function ld(e) {
    return Rt(e) ? e : e.contextElement;
}
function no(e) {
    const t = ld(e);
    if (!Wt(t)) return Vt(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: s } = rv(t);
    let a = (s ? ci(n.width) : n.width) / r,
        l = (s ? ci(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: a, y: l };
}
const VN = Vt(0);
function ov(e) {
    const t = et(e);
    return !id() || !t.visualViewport ? VN : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function WN(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== et(e)) ? !1 : t;
}
function yr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = ld(e);
    let a = Vt(1);
    t && (r ? Rt(r) && (a = no(r)) : (a = no(e)));
    const l = WN(s, n, r) ? ov(s) : Vt(0);
    let c = (o.left + l.x) / a.x,
        u = (o.top + l.y) / a.y,
        d = o.width / a.x,
        f = o.height / a.y;
    if (s) {
        const v = et(s),
            m = r && Rt(r) ? et(r) : r;
        let b = v,
            p = Gc(b);
        for (; p && r && m !== b; ) {
            const y = no(p),
                g = p.getBoundingClientRect(),
                x = Tt(p),
                w = g.left + (p.clientLeft + parseFloat(x.paddingLeft)) * y.x,
                N = g.top + (p.clientTop + parseFloat(x.paddingTop)) * y.y;
            (c *= y.x), (u *= y.y), (d *= y.x), (f *= y.y), (c += w), (u += N), (b = et(p)), (p = Gc(b));
        }
    }
    return di({ width: d, height: f, x: c, y: u });
}
function cd(e, t) {
    const n = Vi(e).scrollLeft;
    return t ? t.left + n : yr(Ht(e)).left + n;
}
function sv(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : cd(e, r)),
        s = r.top + t.scrollTop;
    return { x: o, y: s };
}
function HN(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const s = o === "fixed",
        a = Ht(r),
        l = t ? Ui(t.floating) : !1;
    if (r === a || (l && s)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
        u = Vt(1);
    const d = Vt(0),
        f = Wt(r);
    if ((f || (!f && !s)) && ((To(r) !== "body" || Bs(a)) && (c = Vi(r)), Wt(r))) {
        const m = yr(r);
        (u = no(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop);
    }
    const v = a && !f && !s ? sv(a, c, !0) : Vt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + d.x + v.x,
        y: n.y * u.y - c.scrollTop * u.y + d.y + v.y,
    };
}
function KN(e) {
    return Array.from(e.getClientRects());
}
function GN(e) {
    const t = Ht(e),
        n = Vi(e),
        r = e.ownerDocument.body,
        o = Xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = Xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + cd(e);
    const l = -n.scrollTop;
    return (
        Tt(r).direction === "rtl" && (a += Xe(t.clientWidth, r.clientWidth) - o), { width: o, height: s, x: a, y: l }
    );
}
function QN(e, t) {
    const n = et(e),
        r = Ht(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        a = r.clientHeight,
        l = 0,
        c = 0;
    if (o) {
        (s = o.width), (a = o.height);
        const u = id();
        (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (c = o.offsetTop));
    }
    return { width: s, height: a, x: l, y: c };
}
const YN = new Set(["absolute", "fixed"]);
function qN(e, t) {
    const n = yr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = Wt(e) ? no(e) : Vt(1),
        a = e.clientWidth * s.x,
        l = e.clientHeight * s.y,
        c = o * s.x,
        u = r * s.y;
    return { width: a, height: l, x: c, y: u };
}
function im(e, t, n) {
    let r;
    if (t === "viewport") r = QN(e, n);
    else if (t === "document") r = GN(Ht(e));
    else if (Rt(t)) r = qN(t, n);
    else {
        const o = ov(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return di(r);
}
function av(e, t) {
    const n = Kn(e);
    return n === t || !Rt(n) || No(n) ? !1 : Tt(n).position === "fixed" || av(n, t);
}
function XN(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = js(e, [], !1).filter((l) => Rt(l) && To(l) !== "body"),
        o = null;
    const s = Tt(e).position === "fixed";
    let a = s ? Kn(e) : e;
    for (; Rt(a) && !No(a); ) {
        const l = Tt(a),
            c = ad(a);
        !c && l.position === "fixed" && (o = null),
            (s ? !c && !o : (!c && l.position === "static" && !!o && YN.has(o.position)) || (Bs(a) && !c && av(e, a)))
                ? (r = r.filter((d) => d !== a))
                : (o = l),
            (a = Kn(a));
    }
    return t.set(e, r), r;
}
function JN(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const a = [...(n === "clippingAncestors" ? (Ui(t) ? [] : XN(t, this._c)) : [].concat(n)), r],
        l = a[0],
        c = a.reduce(
            (u, d) => {
                const f = im(t, d, o);
                return (
                    (u.top = Xe(f.top, u.top)),
                    (u.right = Hn(f.right, u.right)),
                    (u.bottom = Hn(f.bottom, u.bottom)),
                    (u.left = Xe(f.left, u.left)),
                    u
                );
            },
            im(t, l, o)
        );
    return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function ZN(e) {
    const { width: t, height: n } = rv(e);
    return { width: t, height: n };
}
function e2(e, t, n) {
    const r = Wt(t),
        o = Ht(t),
        s = n === "fixed",
        a = yr(e, !0, s, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const c = Vt(0);
    function u() {
        c.x = cd(o);
    }
    if (r || (!r && !s))
        if (((To(t) !== "body" || Bs(o)) && (l = Vi(t)), r)) {
            const m = yr(t, !0, s, t);
            (c.x = m.x + t.clientLeft), (c.y = m.y + t.clientTop);
        } else o && u();
    s && !r && o && u();
    const d = o && !r && !s ? sv(o, l) : Vt(0),
        f = a.left + l.scrollLeft - c.x - d.x,
        v = a.top + l.scrollTop - c.y - d.y;
    return { x: f, y: v, width: a.width, height: a.height };
}
function Il(e) {
    return Tt(e).position === "static";
}
function lm(e, t) {
    if (!Wt(e) || Tt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Ht(e) === n && (n = n.ownerDocument.body), n;
}
function iv(e, t) {
    const n = et(e);
    if (Ui(e)) return n;
    if (!Wt(e)) {
        let o = Kn(e);
        for (; o && !No(o); ) {
            if (Rt(o) && !Il(o)) return o;
            o = Kn(o);
        }
        return n;
    }
    let r = lm(e, t);
    for (; r && LN(r) && Il(r); ) r = lm(r, t);
    return r && No(r) && Il(r) && !ad(r) ? n : r || BN(e) || n;
}
const t2 = async function (e) {
    const t = this.getOffsetParent || iv,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: e2(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function n2(e) {
    return Tt(e).direction === "rtl";
}
const r2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: HN,
    getDocumentElement: Ht,
    getClippingRect: JN,
    getOffsetParent: iv,
    getElementRects: t2,
    getClientRects: KN,
    getDimensions: ZN,
    getScale: no,
    isElement: Rt,
    isRTL: n2,
};
function lv(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function o2(e, t) {
    let n = null,
        r;
    const o = Ht(e);
    function s() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
    }
    function a(l, c) {
        l === void 0 && (l = !1), c === void 0 && (c = 1), s();
        const u = e.getBoundingClientRect(),
            { left: d, top: f, width: v, height: m } = u;
        if ((l || t(), !v || !m)) return;
        const b = ma(f),
            p = ma(o.clientWidth - (d + v)),
            y = ma(o.clientHeight - (f + m)),
            g = ma(d),
            w = { rootMargin: -b + "px " + -p + "px " + -y + "px " + -g + "px", threshold: Xe(0, Hn(1, c)) || 1 };
        let N = !0;
        function S(E) {
            const C = E[0].intersectionRatio;
            if (C !== c) {
                if (!N) return a();
                C
                    ? a(!1, C)
                    : (r = setTimeout(() => {
                          a(!1, 1e-7);
                      }, 1e3));
            }
            C === 1 && !lv(u, e.getBoundingClientRect()) && a(), (N = !1);
        }
        try {
            n = new IntersectionObserver(S, { ...w, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(S, w);
        }
        n.observe(e);
    }
    return a(!0), s;
}
function s2(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: s = !0,
            elementResize: a = typeof ResizeObserver == "function",
            layoutShift: l = typeof IntersectionObserver == "function",
            animationFrame: c = !1,
        } = r,
        u = ld(e),
        d = o || s ? [...(u ? js(u) : []), ...js(t)] : [];
    d.forEach((g) => {
        o && g.addEventListener("scroll", n, { passive: !0 }), s && g.addEventListener("resize", n);
    });
    const f = u && l ? o2(u, n) : null;
    let v = -1,
        m = null;
    a &&
        ((m = new ResizeObserver((g) => {
            let [x] = g;
            x &&
                x.target === u &&
                m &&
                (m.unobserve(t),
                cancelAnimationFrame(v),
                (v = requestAnimationFrame(() => {
                    var w;
                    (w = m) == null || w.observe(t);
                }))),
                n();
        })),
        u && !c && m.observe(u),
        m.observe(t));
    let b,
        p = c ? yr(e) : null;
    c && y();
    function y() {
        const g = yr(e);
        p && !lv(p, g) && n(), (p = g), (b = requestAnimationFrame(y));
    }
    return (
        n(),
        () => {
            var g;
            d.forEach((x) => {
                o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
            }),
                f == null || f(),
                (g = m) == null || g.disconnect(),
                (m = null),
                c && cancelAnimationFrame(b);
        }
    );
}
const a2 = TN,
    i2 = AN,
    l2 = kN,
    c2 = _N,
    u2 = PN,
    cm = jN,
    d2 = ON,
    f2 = (e, t, n) => {
        const r = new Map(),
            o = { platform: r2, ...n },
            s = { ...o.platform, _c: r };
        return CN(e, t, { ...o, platform: s });
    };
var m2 = typeof document < "u",
    p2 = function () {},
    Ia = m2 ? h.useLayoutEffect : p2;
function fi(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!fi(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !fi(e[s], t[s])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function cv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function um(e, t) {
    const n = cv(e);
    return Math.round(t * n) / n;
}
function Ll(e) {
    const t = h.useRef(e);
    return (
        Ia(() => {
            t.current = e;
        }),
        t
    );
}
function h2(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: s, floating: a } = {},
            transform: l = !0,
            whileElementsMounted: c,
            open: u,
        } = e,
        [d, f] = h.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [v, m] = h.useState(r);
    fi(v, r) || m(r);
    const [b, p] = h.useState(null),
        [y, g] = h.useState(null),
        x = h.useCallback((P) => {
            P !== E.current && ((E.current = P), p(P));
        }, []),
        w = h.useCallback((P) => {
            P !== C.current && ((C.current = P), g(P));
        }, []),
        N = s || b,
        S = a || y,
        E = h.useRef(null),
        C = h.useRef(null),
        k = h.useRef(d),
        _ = c != null,
        O = Ll(c),
        $ = Ll(o),
        L = Ll(u),
        K = h.useCallback(() => {
            if (!E.current || !C.current) return;
            const P = { placement: t, strategy: n, middleware: v };
            $.current && (P.platform = $.current),
                f2(E.current, C.current, P).then((R) => {
                    const I = { ...R, isPositioned: L.current !== !1 };
                    M.current &&
                        !fi(k.current, I) &&
                        ((k.current = I),
                        Fs.flushSync(() => {
                            f(I);
                        }));
                });
        }, [v, t, n, $, L]);
    Ia(() => {
        u === !1 && k.current.isPositioned && ((k.current.isPositioned = !1), f((P) => ({ ...P, isPositioned: !1 })));
    }, [u]);
    const M = h.useRef(!1);
    Ia(
        () => (
            (M.current = !0),
            () => {
                M.current = !1;
            }
        ),
        []
    ),
        Ia(() => {
            if ((N && (E.current = N), S && (C.current = S), N && S)) {
                if (O.current) return O.current(N, S, K);
                K();
            }
        }, [N, S, K, O, _]);
    const G = h.useMemo(() => ({ reference: E, floating: C, setReference: x, setFloating: w }), [x, w]),
        F = h.useMemo(() => ({ reference: N, floating: S }), [N, S]),
        V = h.useMemo(() => {
            const P = { position: n, left: 0, top: 0 };
            if (!F.floating) return P;
            const R = um(F.floating, d.x),
                I = um(F.floating, d.y);
            return l
                ? {
                      ...P,
                      transform: "translate(" + R + "px, " + I + "px)",
                      ...(cv(F.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: R, top: I };
        }, [n, l, F.floating, d.x, d.y]);
    return h.useMemo(() => ({ ...d, update: K, refs: G, elements: F, floatingStyles: V }), [d, K, G, F, V]);
}
const g2 = (e) => {
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
                        ? cm({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                      ? cm({ element: r, padding: o }).fn(n)
                      : {};
            },
        };
    },
    v2 = (e, t) => ({ ...a2(e), options: [e, t] }),
    x2 = (e, t) => ({ ...i2(e), options: [e, t] }),
    y2 = (e, t) => ({ ...d2(e), options: [e, t] }),
    w2 = (e, t) => ({ ...l2(e), options: [e, t] }),
    b2 = (e, t) => ({ ...c2(e), options: [e, t] }),
    N2 = (e, t) => ({ ...u2(e), options: [e, t] }),
    S2 = (e, t) => ({ ...g2(e), options: [e, t] });
var E2 = "Arrow",
    uv = h.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...s } = e;
        return i.jsx(ne.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : i.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
uv.displayName = E2;
var C2 = uv;
function dv(e) {
    const [t, n] = h.useState(void 0);
    return (
        sn(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const s = o[0];
                    let a, l;
                    if ("borderBoxSize" in s) {
                        const c = s.borderBoxSize,
                            u = Array.isArray(c) ? c[0] : c;
                        (a = u.inlineSize), (l = u.blockSize);
                    } else (a = e.offsetWidth), (l = e.offsetHeight);
                    n({ width: a, height: l });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var fv = "Popper",
    [mv, pv] = un(fv),
    [Yj, hv] = mv(fv),
    gv = "PopperAnchor",
    vv = h.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            s = hv(gv, n),
            a = h.useRef(null),
            l = Ee(t, a);
        return (
            h.useEffect(() => {
                s.onAnchorChange((r == null ? void 0 : r.current) || a.current);
            }),
            r ? null : i.jsx(ne.div, { ...o, ref: l })
        );
    });
vv.displayName = gv;
var ud = "PopperContent",
    [j2, k2] = mv(ud),
    xv = h.forwardRef((e, t) => {
        var ee, Cr, dn, qn, fn, jr;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: s = "center",
                alignOffset: a = 0,
                arrowPadding: l = 0,
                avoidCollisions: c = !0,
                collisionBoundary: u = [],
                collisionPadding: d = 0,
                sticky: f = "partial",
                hideWhenDetached: v = !1,
                updatePositionStrategy: m = "optimized",
                onPlaced: b,
                ...p
            } = e,
            y = hv(ud, n),
            [g, x] = h.useState(null),
            w = Ee(t, (mn) => x(mn)),
            [N, S] = h.useState(null),
            E = dv(N),
            C = (E == null ? void 0 : E.width) ?? 0,
            k = (E == null ? void 0 : E.height) ?? 0,
            _ = r + (s !== "center" ? "-" + s : ""),
            O = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
            $ = Array.isArray(u) ? u : [u],
            L = $.length > 0,
            K = { padding: O, boundary: $.filter(R2), altBoundary: L },
            {
                refs: M,
                floatingStyles: G,
                placement: F,
                isPositioned: V,
                middlewareData: P,
            } = h2({
                strategy: "fixed",
                placement: _,
                whileElementsMounted: (...mn) => s2(...mn, { animationFrame: m === "always" }),
                elements: { reference: y.anchor },
                middleware: [
                    v2({ mainAxis: o + k, alignmentAxis: a }),
                    c && x2({ mainAxis: !0, crossAxis: !1, limiter: f === "partial" ? y2() : void 0, ...K }),
                    c && w2({ ...K }),
                    b2({
                        ...K,
                        apply: ({ elements: mn, rects: Vs, availableWidth: el, availableHeight: Ws }) => {
                            const { width: tl, height: _o } = Vs.reference,
                                kr = mn.floating.style;
                            kr.setProperty("--radix-popper-available-width", `${el}px`),
                                kr.setProperty("--radix-popper-available-height", `${Ws}px`),
                                kr.setProperty("--radix-popper-anchor-width", `${tl}px`),
                                kr.setProperty("--radix-popper-anchor-height", `${_o}px`);
                        },
                    }),
                    N && S2({ element: N, padding: l }),
                    T2({ arrowWidth: C, arrowHeight: k }),
                    v && N2({ strategy: "referenceHidden", ...K }),
                ],
            }),
            [R, I] = bv(F),
            W = Pt(b);
        sn(() => {
            V && (W == null || W());
        }, [V, W]);
        const z = (ee = P.arrow) == null ? void 0 : ee.x,
            Q = (Cr = P.arrow) == null ? void 0 : Cr.y,
            q = ((dn = P.arrow) == null ? void 0 : dn.centerOffset) !== 0,
            [ye, Te] = h.useState();
        return (
            sn(() => {
                g && Te(window.getComputedStyle(g).zIndex);
            }, [g]),
            i.jsx("div", {
                ref: M.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...G,
                    transform: V ? G.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: ye,
                    "--radix-popper-transform-origin": [
                        (qn = P.transformOrigin) == null ? void 0 : qn.x,
                        (fn = P.transformOrigin) == null ? void 0 : fn.y,
                    ].join(" "),
                    ...(((jr = P.hide) == null ? void 0 : jr.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: i.jsx(j2, {
                    scope: n,
                    placedSide: R,
                    onArrowChange: S,
                    arrowX: z,
                    arrowY: Q,
                    shouldHideArrow: q,
                    children: i.jsx(ne.div, {
                        "data-side": R,
                        "data-align": I,
                        ...p,
                        ref: w,
                        style: { ...p.style, animation: V ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
xv.displayName = ud;
var yv = "PopperArrow",
    P2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
    wv = h.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            s = k2(yv, r),
            a = P2[s.placedSide];
        return i.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [a]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0,
            },
            children: i.jsx(C2, { ...o, ref: n, style: { ...o.style, display: "block" } }),
        });
    });
wv.displayName = yv;
function R2(e) {
    return e !== null;
}
var T2 = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var y, g, x;
        const { placement: n, rects: r, middlewareData: o } = t,
            a = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0,
            l = a ? 0 : e.arrowWidth,
            c = a ? 0 : e.arrowHeight,
            [u, d] = bv(n),
            f = { start: "0%", center: "50%", end: "100%" }[d],
            v = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2,
            m = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
        let b = "",
            p = "";
        return (
            u === "bottom"
                ? ((b = a ? f : `${v}px`), (p = `${-c}px`))
                : u === "top"
                  ? ((b = a ? f : `${v}px`), (p = `${r.floating.height + c}px`))
                  : u === "right"
                    ? ((b = `${-c}px`), (p = a ? f : `${m}px`))
                    : u === "left" && ((b = `${r.floating.width + c}px`), (p = a ? f : `${m}px`)),
            { data: { x: b, y: p } }
        );
    },
});
function bv(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var A2 = vv,
    O2 = xv,
    _2 = wv,
    [Wi, qj] = un("Tooltip", [pv]),
    dd = pv(),
    Nv = "TooltipProvider",
    M2 = 700,
    dm = "tooltip.open",
    [I2, Sv] = Wi(Nv),
    Ev = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = M2,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: s,
            } = e,
            a = h.useRef(!0),
            l = h.useRef(!1),
            c = h.useRef(0);
        return (
            h.useEffect(() => {
                const u = c.current;
                return () => window.clearTimeout(u);
            }, []),
            i.jsx(I2, {
                scope: t,
                isOpenDelayedRef: a,
                delayDuration: n,
                onOpen: h.useCallback(() => {
                    window.clearTimeout(c.current), (a.current = !1);
                }, []),
                onClose: h.useCallback(() => {
                    window.clearTimeout(c.current), (c.current = window.setTimeout(() => (a.current = !0), r));
                }, [r]),
                isPointerInTransitRef: l,
                onPointerInTransitChange: h.useCallback((u) => {
                    l.current = u;
                }, []),
                disableHoverableContent: o,
                children: s,
            })
        );
    };
Ev.displayName = Nv;
var Cv = "Tooltip",
    [Xj, Hi] = Wi(Cv),
    Qc = "TooltipTrigger",
    L2 = h.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Hi(Qc, n),
            s = Sv(Qc, n),
            a = dd(n),
            l = h.useRef(null),
            c = Ee(t, l, o.onTriggerChange),
            u = h.useRef(!1),
            d = h.useRef(!1),
            f = h.useCallback(() => (u.current = !1), []);
        return (
            h.useEffect(() => () => document.removeEventListener("pointerup", f), [f]),
            i.jsx(A2, {
                asChild: !0,
                ...a,
                children: i.jsx(ne.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: c,
                    onPointerMove: X(e.onPointerMove, (v) => {
                        v.pointerType !== "touch" &&
                            !d.current &&
                            !s.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (d.current = !0));
                    }),
                    onPointerLeave: X(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (d.current = !1);
                    }),
                    onPointerDown: X(e.onPointerDown, () => {
                        o.open && o.onClose(),
                            (u.current = !0),
                            document.addEventListener("pointerup", f, { once: !0 });
                    }),
                    onFocus: X(e.onFocus, () => {
                        u.current || o.onOpen();
                    }),
                    onBlur: X(e.onBlur, o.onClose),
                    onClick: X(e.onClick, o.onClose),
                }),
            })
        );
    });
L2.displayName = Qc;
var D2 = "TooltipPortal",
    [Jj, F2] = Wi(D2, { forceMount: void 0 }),
    So = "TooltipContent",
    jv = h.forwardRef((e, t) => {
        const n = F2(So, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
            a = Hi(So, e.__scopeTooltip);
        return i.jsx(Er, {
            present: r || a.open,
            children: a.disableHoverableContent
                ? i.jsx(kv, { side: o, ...s, ref: t })
                : i.jsx(z2, { side: o, ...s, ref: t }),
        });
    }),
    z2 = h.forwardRef((e, t) => {
        const n = Hi(So, e.__scopeTooltip),
            r = Sv(So, e.__scopeTooltip),
            o = h.useRef(null),
            s = Ee(t, o),
            [a, l] = h.useState(null),
            { trigger: c, onClose: u } = n,
            d = o.current,
            { onPointerInTransitChange: f } = r,
            v = h.useCallback(() => {
                l(null), f(!1);
            }, [f]),
            m = h.useCallback(
                (b, p) => {
                    const y = b.currentTarget,
                        g = { x: b.clientX, y: b.clientY },
                        x = W2(g, y.getBoundingClientRect()),
                        w = H2(g, x),
                        N = K2(p.getBoundingClientRect()),
                        S = Q2([...w, ...N]);
                    l(S), f(!0);
                },
                [f]
            );
        return (
            h.useEffect(() => () => v(), [v]),
            h.useEffect(() => {
                if (c && d) {
                    const b = (y) => m(y, d),
                        p = (y) => m(y, c);
                    return (
                        c.addEventListener("pointerleave", b),
                        d.addEventListener("pointerleave", p),
                        () => {
                            c.removeEventListener("pointerleave", b), d.removeEventListener("pointerleave", p);
                        }
                    );
                }
            }, [c, d, m, v]),
            h.useEffect(() => {
                if (a) {
                    const b = (p) => {
                        const y = p.target,
                            g = { x: p.clientX, y: p.clientY },
                            x = (c == null ? void 0 : c.contains(y)) || (d == null ? void 0 : d.contains(y)),
                            w = !G2(g, a);
                        x ? v() : w && (v(), u());
                    };
                    return (
                        document.addEventListener("pointermove", b),
                        () => document.removeEventListener("pointermove", b)
                    );
                }
            }, [c, d, a, u, v]),
            i.jsx(kv, { ...e, ref: s })
        );
    }),
    [$2, B2] = Wi(Cv, { isInside: !1 }),
    U2 = Z1("TooltipContent"),
    kv = h.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                ...l
            } = e,
            c = Hi(So, n),
            u = dd(n),
            { onClose: d } = c;
        return (
            h.useEffect(() => (document.addEventListener(dm, d), () => document.removeEventListener(dm, d)), [d]),
            h.useEffect(() => {
                if (c.trigger) {
                    const f = (v) => {
                        const m = v.target;
                        m != null && m.contains(c.trigger) && d();
                    };
                    return (
                        window.addEventListener("scroll", f, { capture: !0 }),
                        () => window.removeEventListener("scroll", f, { capture: !0 })
                    );
                }
            }, [c.trigger, d]),
            i.jsx(Mi, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (f) => f.preventDefault(),
                onDismiss: d,
                children: i.jsxs(O2, {
                    "data-state": c.stateAttribute,
                    ...u,
                    ...l,
                    ref: t,
                    style: {
                        ...l.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        i.jsx(U2, { children: r }),
                        i.jsx($2, {
                            scope: n,
                            isInside: !0,
                            children: i.jsx(Nw, { id: c.contentId, role: "tooltip", children: o || r }),
                        }),
                    ],
                }),
            })
        );
    });
jv.displayName = So;
var Pv = "TooltipArrow",
    V2 = h.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = dd(n);
        return B2(Pv, n).isInside ? null : i.jsx(_2, { ...o, ...r, ref: t });
    });
V2.displayName = Pv;
function W2(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
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
function H2(e, t, n = 5) {
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
function K2(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function G2(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const l = t[s],
            c = t[a],
            u = l.x,
            d = l.y,
            f = c.x,
            v = c.y;
        d > r != v > r && n < ((f - u) * (r - d)) / (v - d) + u && (o = !o);
    }
    return o;
}
function Q2(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), Y2(t);
}
function Y2(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1],
                a = t[t.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1],
                a = n[n.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var q2 = Ev,
    Rv = jv;
const X2 = q2,
    J2 = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        i.jsx(Rv, {
            ref: r,
            sideOffset: t,
            className: le(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n,
        })
    );
J2.displayName = Rv.displayName;
var Ki = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Gi = typeof window > "u" || "Deno" in globalThis;
function yt() {}
function Z2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function eS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function tS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function Yc(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function nS(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function fm(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: s, queryKey: a, stale: l } = e;
    if (a) {
        if (r) {
            if (t.queryHash !== fd(a, t.options)) return !1;
        } else if (!Ps(t.queryKey, a)) return !1;
    }
    if (n !== "all") {
        const c = t.isActive();
        if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
    }
    return !((typeof l == "boolean" && t.isStale() !== l) || (o && o !== t.state.fetchStatus) || (s && !s(t)));
}
function mm(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: s } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (ks(t.options.mutationKey) !== ks(s)) return !1;
        } else if (!Ps(t.options.mutationKey, s)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function fd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ks)(e);
}
function ks(e) {
    return JSON.stringify(e, (t, n) =>
        qc(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function Ps(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => Ps(e[n], t[n]))
            : !1;
}
function Tv(e, t) {
    if (e === t) return e;
    const n = pm(e) && pm(t);
    if (n || (qc(e) && qc(t))) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            s = n ? t : Object.keys(t),
            a = s.length,
            l = n ? [] : {},
            c = new Set(r);
        let u = 0;
        for (let d = 0; d < a; d++) {
            const f = n ? d : s[d];
            ((!n && c.has(f)) || n) && e[f] === void 0 && t[f] === void 0
                ? ((l[f] = void 0), u++)
                : ((l[f] = Tv(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
        }
        return o === a && u === o ? e : l;
    }
    return t;
}
function pm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function qc(e) {
    if (!hm(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!hm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function hm(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function rS(e) {
    return new Promise((t) => {
        setTimeout(t, e);
    });
}
function oS(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? Tv(e, t)
          : t;
}
function sS(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function aS(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var md = Symbol();
function Av(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === md
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
}
var sr,
    jn,
    oo,
    Bm,
    iS =
        ((Bm = class extends Ki {
            constructor() {
                super();
                Z(this, sr);
                Z(this, jn);
                Z(this, oo);
                U(this, oo, (t) => {
                    if (!Gi && window.addEventListener) {
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
                j(this, jn) || this.setEventListener(j(this, oo));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = j(this, jn)) == null || t.call(this), U(this, jn, void 0));
            }
            setEventListener(t) {
                var n;
                U(this, oo, t),
                    (n = j(this, jn)) == null || n.call(this),
                    U(
                        this,
                        jn,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                j(this, sr) !== t && (U(this, sr, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof j(this, sr) == "boolean"
                    ? j(this, sr)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (sr = new WeakMap()),
        (jn = new WeakMap()),
        (oo = new WeakMap()),
        Bm),
    Ov = new iS(),
    so,
    kn,
    ao,
    Um,
    lS =
        ((Um = class extends Ki {
            constructor() {
                super();
                Z(this, so, !0);
                Z(this, kn);
                Z(this, ao);
                U(this, ao, (t) => {
                    if (!Gi && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                            window.addEventListener("offline", r, !1),
                            () => {
                                window.removeEventListener("online", n), window.removeEventListener("offline", r);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                j(this, kn) || this.setEventListener(j(this, ao));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = j(this, kn)) == null || t.call(this), U(this, kn, void 0));
            }
            setEventListener(t) {
                var n;
                U(this, ao, t), (n = j(this, kn)) == null || n.call(this), U(this, kn, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                j(this, so) !== t &&
                    (U(this, so, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return j(this, so);
            }
        }),
        (so = new WeakMap()),
        (kn = new WeakMap()),
        (ao = new WeakMap()),
        Um),
    mi = new lS();
function cS() {
    let e, t;
    const n = new Promise((o, s) => {
        (e = o), (t = s);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (o) => {
            r({ status: "fulfilled", value: o }), e(o);
        }),
        (n.reject = (o) => {
            r({ status: "rejected", reason: o }), t(o);
        }),
        n
    );
}
function uS(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function _v(e) {
    return (e ?? "online") === "online" ? mi.isOnline() : !0;
}
var Mv = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function Dl(e) {
    return e instanceof Mv;
}
function Iv(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const s = cS(),
        a = (p) => {
            var y;
            r || (v(new Mv(p)), (y = e.abort) == null || y.call(e));
        },
        l = () => {
            t = !0;
        },
        c = () => {
            t = !1;
        },
        u = () => Ov.isFocused() && (e.networkMode === "always" || mi.isOnline()) && e.canRun(),
        d = () => _v(e.networkMode) && e.canRun(),
        f = (p) => {
            var y;
            r || ((r = !0), (y = e.onSuccess) == null || y.call(e, p), o == null || o(), s.resolve(p));
        },
        v = (p) => {
            var y;
            r || ((r = !0), (y = e.onError) == null || y.call(e, p), o == null || o(), s.reject(p));
        },
        m = () =>
            new Promise((p) => {
                var y;
                (o = (g) => {
                    (r || u()) && p(g);
                }),
                    (y = e.onPause) == null || y.call(e);
            }).then(() => {
                var p;
                (o = void 0), r || (p = e.onContinue) == null || p.call(e);
            }),
        b = () => {
            if (r) return;
            let p;
            const y = n === 0 ? e.initialPromise : void 0;
            try {
                p = y ?? e.fn();
            } catch (g) {
                p = Promise.reject(g);
            }
            Promise.resolve(p)
                .then(f)
                .catch((g) => {
                    var E;
                    if (r) return;
                    const x = e.retry ?? (Gi ? 0 : 3),
                        w = e.retryDelay ?? uS,
                        N = typeof w == "function" ? w(n, g) : w,
                        S = x === !0 || (typeof x == "number" && n < x) || (typeof x == "function" && x(n, g));
                    if (t || !S) {
                        v(g);
                        return;
                    }
                    n++,
                        (E = e.onFail) == null || E.call(e, n, g),
                        rS(N)
                            .then(() => (u() ? void 0 : m()))
                            .then(() => {
                                t ? v(g) : b();
                            });
                });
        };
    return {
        promise: s,
        cancel: a,
        continue: () => (o == null || o(), s),
        cancelRetry: l,
        continueRetry: c,
        canStart: d,
        start: () => (d() ? b() : m().then(b), s),
    };
}
var dS = (e) => setTimeout(e, 0);
function fS() {
    let e = [],
        t = 0,
        n = (l) => {
            l();
        },
        r = (l) => {
            l();
        },
        o = dS;
    const s = (l) => {
            t
                ? e.push(l)
                : o(() => {
                      n(l);
                  });
        },
        a = () => {
            const l = e;
            (e = []),
                l.length &&
                    o(() => {
                        r(() => {
                            l.forEach((c) => {
                                n(c);
                            });
                        });
                    });
        };
    return {
        batch: (l) => {
            let c;
            t++;
            try {
                c = l();
            } finally {
                t--, t || a();
            }
            return c;
        },
        batchCalls:
            (l) =>
            (...c) => {
                s(() => {
                    l(...c);
                });
            },
        schedule: s,
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
var $e = fS(),
    ar,
    Vm,
    Lv =
        ((Vm = class {
            constructor() {
                Z(this, ar);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    eS(this.gcTime) &&
                        U(
                            this,
                            ar,
                            setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Gi ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                j(this, ar) && (clearTimeout(j(this, ar)), U(this, ar, void 0));
            }
        }),
        (ar = new WeakMap()),
        Vm),
    io,
    ir,
    st,
    lr,
    Me,
    As,
    cr,
    wt,
    Gt,
    Wm,
    mS =
        ((Wm = class extends Lv {
            constructor(t) {
                super();
                Z(this, wt);
                Z(this, io);
                Z(this, ir);
                Z(this, st);
                Z(this, lr);
                Z(this, Me);
                Z(this, As);
                Z(this, cr);
                U(this, cr, !1),
                    U(this, As, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    U(this, lr, t.client),
                    U(this, st, j(this, lr).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    U(this, io, hS(this.options)),
                    (this.state = t.state ?? j(this, io)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = j(this, Me)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                (this.options = { ...j(this, As), ...t }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && j(this, st).remove(this);
            }
            setData(t, n) {
                const r = oS(this.state.data, t, this.options);
                return (
                    Ae(this, wt, Gt).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                    r
                );
            }
            setState(t, n) {
                Ae(this, wt, Gt).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = j(this, Me)) == null ? void 0 : r.promise;
                return (o = j(this, Me)) == null || o.cancel(t), n ? n.then(yt).catch(yt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(j(this, io));
            }
            isActive() {
                return this.observers.some((t) => nS(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === md || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => Yc(t.options.staleTime, this) === "static")
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
                        : !tS(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = j(this, Me)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = j(this, Me)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                    (this.observers.push(t),
                    this.clearGcTimeout(),
                    j(this, st).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length ||
                        (j(this, Me) && (j(this, cr) ? j(this, Me).cancel({ revert: !0 }) : j(this, Me).cancelRetry()),
                        this.scheduleGc()),
                    j(this, st).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || Ae(this, wt, Gt).call(this, { type: "invalidate" });
            }
            fetch(t, n) {
                var u, d, f;
                if (this.state.fetchStatus !== "idle") {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (j(this, Me)) return j(this, Me).continueRetry(), j(this, Me).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const v = this.observers.find((m) => m.options.queryFn);
                    v && this.setOptions(v.options);
                }
                const r = new AbortController(),
                    o = (v) => {
                        Object.defineProperty(v, "signal", { enumerable: !0, get: () => (U(this, cr, !0), r.signal) });
                    },
                    s = () => {
                        const v = Av(this.options, n),
                            b = (() => {
                                const p = { client: j(this, lr), queryKey: this.queryKey, meta: this.meta };
                                return o(p), p;
                            })();
                        return U(this, cr, !1), this.options.persister ? this.options.persister(v, b, this) : v(b);
                    },
                    l = (() => {
                        const v = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: j(this, lr),
                            state: this.state,
                            fetchFn: s,
                        };
                        return o(v), v;
                    })();
                (u = this.options.behavior) == null || u.onFetch(l, this),
                    U(this, ir, this.state),
                    (this.state.fetchStatus === "idle" ||
                        this.state.fetchMeta !== ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
                        Ae(this, wt, Gt).call(this, {
                            type: "fetch",
                            meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
                        });
                const c = (v) => {
                    var m, b, p, y;
                    (Dl(v) && v.silent) || Ae(this, wt, Gt).call(this, { type: "error", error: v }),
                        Dl(v) ||
                            ((b = (m = j(this, st).config).onError) == null || b.call(m, v, this),
                            (y = (p = j(this, st).config).onSettled) == null || y.call(p, this.state.data, v, this)),
                        this.scheduleGc();
                };
                return (
                    U(
                        this,
                        Me,
                        Iv({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: l.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: (v) => {
                                var m, b, p, y;
                                if (v === void 0) {
                                    c(new Error(`${this.queryHash} data is undefined`));
                                    return;
                                }
                                try {
                                    this.setData(v);
                                } catch (g) {
                                    c(g);
                                    return;
                                }
                                (b = (m = j(this, st).config).onSuccess) == null || b.call(m, v, this),
                                    (y = (p = j(this, st).config).onSettled) == null ||
                                        y.call(p, v, this.state.error, this),
                                    this.scheduleGc();
                            },
                            onError: c,
                            onFail: (v, m) => {
                                Ae(this, wt, Gt).call(this, { type: "failed", failureCount: v, error: m });
                            },
                            onPause: () => {
                                Ae(this, wt, Gt).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                Ae(this, wt, Gt).call(this, { type: "continue" });
                            },
                            retry: l.options.retry,
                            retryDelay: l.options.retryDelay,
                            networkMode: l.options.networkMode,
                            canRun: () => !0,
                        })
                    ),
                    j(this, Me).start()
                );
            }
        }),
        (io = new WeakMap()),
        (ir = new WeakMap()),
        (st = new WeakMap()),
        (lr = new WeakMap()),
        (Me = new WeakMap()),
        (As = new WeakMap()),
        (cr = new WeakMap()),
        (wt = new WeakSet()),
        (Gt = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...pS(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        return (
                            U(this, ir, void 0),
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
                        return Dl(o) && o.revert && j(this, ir)
                            ? { ...j(this, ir), fetchStatus: "idle" }
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
            (this.state = n(this.state)),
                $e.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        j(this, st).notify({ query: this, type: "updated", action: t });
                });
        }),
        Wm);
function pS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: _v(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function hS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
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
var Mt,
    Hm,
    gS =
        ((Hm = class extends Ki {
            constructor(t = {}) {
                super();
                Z(this, Mt);
                (this.config = t), U(this, Mt, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    s = n.queryHash ?? fd(o, n);
                let a = this.get(s);
                return (
                    a ||
                        ((a = new mS({
                            client: t,
                            queryKey: o,
                            queryHash: s,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(o),
                        })),
                        this.add(a)),
                    a
                );
            }
            add(t) {
                j(this, Mt).has(t.queryHash) ||
                    (j(this, Mt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = j(this, Mt).get(t.queryHash);
                n &&
                    (t.destroy(),
                    n === t && j(this, Mt).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                $e.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return j(this, Mt).get(t);
            }
            getAll() {
                return [...j(this, Mt).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => fm(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => fm(t, r)) : n;
            }
            notify(t) {
                $e.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                $e.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                $e.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        (Mt = new WeakMap()),
        Hm),
    It,
    Fe,
    ur,
    Lt,
    wn,
    Km,
    vS =
        ((Km = class extends Lv {
            constructor(t) {
                super();
                Z(this, Lt);
                Z(this, It);
                Z(this, Fe);
                Z(this, ur);
                (this.mutationId = t.mutationId),
                    U(this, Fe, t.mutationCache),
                    U(this, It, []),
                    (this.state = t.state || xS()),
                    this.setOptions(t.options),
                    this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                j(this, It).includes(t) ||
                    (j(this, It).push(t),
                    this.clearGcTimeout(),
                    j(this, Fe).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                U(
                    this,
                    It,
                    j(this, It).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    j(this, Fe).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                j(this, It).length || (this.state.status === "pending" ? this.scheduleGc() : j(this, Fe).remove(this));
            }
            continue() {
                var t;
                return ((t = j(this, ur)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var s, a, l, c, u, d, f, v, m, b, p, y, g, x, w, N, S, E, C, k;
                const n = () => {
                    Ae(this, Lt, wn).call(this, { type: "continue" });
                };
                U(
                    this,
                    ur,
                    Iv({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (_, O) => {
                            Ae(this, Lt, wn).call(this, { type: "failed", failureCount: _, error: O });
                        },
                        onPause: () => {
                            Ae(this, Lt, wn).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => j(this, Fe).canRun(this),
                    })
                );
                const r = this.state.status === "pending",
                    o = !j(this, ur).canStart();
                try {
                    if (r) n();
                    else {
                        Ae(this, Lt, wn).call(this, { type: "pending", variables: t, isPaused: o }),
                            await ((a = (s = j(this, Fe).config).onMutate) == null ? void 0 : a.call(s, t, this));
                        const O = await ((c = (l = this.options).onMutate) == null ? void 0 : c.call(l, t));
                        O !== this.state.context &&
                            Ae(this, Lt, wn).call(this, { type: "pending", context: O, variables: t, isPaused: o });
                    }
                    const _ = await j(this, ur).start();
                    return (
                        await ((d = (u = j(this, Fe).config).onSuccess) == null
                            ? void 0
                            : d.call(u, _, t, this.state.context, this)),
                        await ((v = (f = this.options).onSuccess) == null
                            ? void 0
                            : v.call(f, _, t, this.state.context)),
                        await ((b = (m = j(this, Fe).config).onSettled) == null
                            ? void 0
                            : b.call(m, _, null, this.state.variables, this.state.context, this)),
                        await ((y = (p = this.options).onSettled) == null
                            ? void 0
                            : y.call(p, _, null, t, this.state.context)),
                        Ae(this, Lt, wn).call(this, { type: "success", data: _ }),
                        _
                    );
                } catch (_) {
                    try {
                        throw (
                            (await ((x = (g = j(this, Fe).config).onError) == null
                                ? void 0
                                : x.call(g, _, t, this.state.context, this)),
                            await ((N = (w = this.options).onError) == null
                                ? void 0
                                : N.call(w, _, t, this.state.context)),
                            await ((E = (S = j(this, Fe).config).onSettled) == null
                                ? void 0
                                : E.call(S, void 0, _, this.state.variables, this.state.context, this)),
                            await ((k = (C = this.options).onSettled) == null
                                ? void 0
                                : k.call(C, void 0, _, t, this.state.context)),
                            _)
                        );
                    } finally {
                        Ae(this, Lt, wn).call(this, { type: "error", error: _ });
                    }
                } finally {
                    j(this, Fe).runNext(this);
                }
            }
        }),
        (It = new WeakMap()),
        (Fe = new WeakMap()),
        (ur = new WeakMap()),
        (Lt = new WeakSet()),
        (wn = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, failureCount: t.failureCount, failureReason: t.error };
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
            (this.state = n(this.state)),
                $e.batch(() => {
                    j(this, It).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        j(this, Fe).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        Km);
function xS() {
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
var Xt,
    bt,
    Os,
    Gm,
    yS =
        ((Gm = class extends Ki {
            constructor(t = {}) {
                super();
                Z(this, Xt);
                Z(this, bt);
                Z(this, Os);
                (this.config = t), U(this, Xt, new Set()), U(this, bt, new Map()), U(this, Os, 0);
            }
            build(t, n, r) {
                const o = new vS({
                    mutationCache: this,
                    mutationId: ++Ks(this, Os)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(o), o;
            }
            add(t) {
                j(this, Xt).add(t);
                const n = pa(t);
                if (typeof n == "string") {
                    const r = j(this, bt).get(n);
                    r ? r.push(t) : j(this, bt).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (j(this, Xt).delete(t)) {
                    const n = pa(t);
                    if (typeof n == "string") {
                        const r = j(this, bt).get(n);
                        if (r)
                            if (r.length > 1) {
                                const o = r.indexOf(t);
                                o !== -1 && r.splice(o, 1);
                            } else r[0] === t && j(this, bt).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = pa(t);
                if (typeof n == "string") {
                    const r = j(this, bt).get(n),
                        o = r == null ? void 0 : r.find((s) => s.state.status === "pending");
                    return !o || o === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = pa(t);
                if (typeof n == "string") {
                    const o = (r = j(this, bt).get(n)) == null ? void 0 : r.find((s) => s !== t && s.state.isPaused);
                    return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                $e.batch(() => {
                    j(this, Xt).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        j(this, Xt).clear(),
                        j(this, bt).clear();
                });
            }
            getAll() {
                return Array.from(j(this, Xt));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => mm(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => mm(t, n));
            }
            notify(t) {
                $e.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return $e.batch(() => Promise.all(t.map((n) => n.continue().catch(yt))));
            }
        }),
        (Xt = new WeakMap()),
        (bt = new WeakMap()),
        (Os = new WeakMap()),
        Gm);
function pa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
function gm(e) {
    return {
        onFetch: (t, n) => {
            var d, f, v, m, b;
            const r = t.options,
                o =
                    (v = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null
                        ? void 0
                        : v.direction,
                s = ((m = t.state.data) == null ? void 0 : m.pages) || [],
                a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let l = { pages: [], pageParams: [] },
                c = 0;
            const u = async () => {
                let p = !1;
                const y = (w) => {
                        Object.defineProperty(w, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (p = !0)
                                    : t.signal.addEventListener("abort", () => {
                                          p = !0;
                                      }),
                                t.signal
                            ),
                        });
                    },
                    g = Av(t.options, t.fetchOptions),
                    x = async (w, N, S) => {
                        if (p) return Promise.reject();
                        if (N == null && w.pages.length) return Promise.resolve(w);
                        const C = (() => {
                                const $ = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: N,
                                    direction: S ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return y($), $;
                            })(),
                            k = await g(C),
                            { maxPages: _ } = t.options,
                            O = S ? aS : sS;
                        return { pages: O(w.pages, k, _), pageParams: O(w.pageParams, N, _) };
                    };
                if (o && s.length) {
                    const w = o === "backward",
                        N = w ? wS : vm,
                        S = { pages: s, pageParams: a },
                        E = N(r, S);
                    l = await x(S, E, w);
                } else {
                    const w = e ?? s.length;
                    do {
                        const N = c === 0 ? (a[0] ?? r.initialPageParam) : vm(r, l);
                        if (c > 0 && N == null) break;
                        (l = await x(l, N)), c++;
                    } while (c < w);
                }
                return l;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var p, y;
                      return (y = (p = t.options).persister) == null
                          ? void 0
                          : y.call(
                                p,
                                u,
                                { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                                n
                            );
                  })
                : (t.fetchFn = u);
        },
    };
}
function vm(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function wS(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var he,
    Pn,
    Rn,
    lo,
    co,
    Tn,
    uo,
    fo,
    Qm,
    bS =
        ((Qm = class {
            constructor(e = {}) {
                Z(this, he);
                Z(this, Pn);
                Z(this, Rn);
                Z(this, lo);
                Z(this, co);
                Z(this, Tn);
                Z(this, uo);
                Z(this, fo);
                U(this, he, e.queryCache || new gS()),
                    U(this, Pn, e.mutationCache || new yS()),
                    U(this, Rn, e.defaultOptions || {}),
                    U(this, lo, new Map()),
                    U(this, co, new Map()),
                    U(this, Tn, 0);
            }
            mount() {
                Ks(this, Tn)._++,
                    j(this, Tn) === 1 &&
                        (U(
                            this,
                            uo,
                            Ov.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), j(this, he).onFocus());
                            })
                        ),
                        U(
                            this,
                            fo,
                            mi.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), j(this, he).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                Ks(this, Tn)._--,
                    j(this, Tn) === 0 &&
                        ((e = j(this, uo)) == null || e.call(this),
                        U(this, uo, void 0),
                        (t = j(this, fo)) == null || t.call(this),
                        U(this, fo, void 0));
            }
            isFetching(e) {
                return j(this, he).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return j(this, Pn).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = j(this, he).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = j(this, he).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(Yc(t.staleTime, n)) && this.prefetchQuery(t),
                      Promise.resolve(r));
            }
            getQueriesData(e) {
                return j(this, he)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = j(this, he).get(r.queryHash),
                    s = o == null ? void 0 : o.state.data,
                    a = Z2(t, s);
                if (a !== void 0)
                    return j(this, he)
                        .build(this, r)
                        .setData(a, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return $e.batch(() =>
                    j(this, he)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = j(this, he).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = j(this, he);
                $e.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = j(this, he);
                return $e.batch(
                    () => (
                        n.findAll(e).forEach((r) => {
                            r.reset();
                        }),
                        this.refetchQueries({ type: "active", ...e }, t)
                    )
                );
            }
            cancelQueries(e, t = {}) {
                const n = { revert: !0, ...t },
                    r = $e.batch(() =>
                        j(this, he)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(yt).catch(yt);
            }
            invalidateQueries(e, t = {}) {
                return $e.batch(
                    () => (
                        j(this, he)
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
                                  t
                              )
                    )
                );
            }
            refetchQueries(e, t = {}) {
                const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
                    r = $e.batch(() =>
                        j(this, he)
                            .findAll(e)
                            .filter((o) => !o.isDisabled() && !o.isStatic())
                            .map((o) => {
                                let s = o.fetch(void 0, n);
                                return (
                                    n.throwOnError || (s = s.catch(yt)),
                                    o.state.fetchStatus === "paused" ? Promise.resolve() : s
                                );
                            })
                    );
                return Promise.all(r).then(yt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = j(this, he).build(this, t);
                return n.isStaleByTime(Yc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(yt).catch(yt);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = gm(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(yt).catch(yt);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = gm(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return mi.isOnline() ? j(this, Pn).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return j(this, he);
            }
            getMutationCache() {
                return j(this, Pn);
            }
            getDefaultOptions() {
                return j(this, Rn);
            }
            setDefaultOptions(e) {
                U(this, Rn, e);
            }
            setQueryDefaults(e, t) {
                j(this, lo).set(ks(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...j(this, lo).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ps(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                j(this, co).set(ks(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...j(this, co).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ps(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...j(this, Rn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = fd(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === md && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                          ...j(this, Rn).mutations,
                          ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                          ...e,
                          _defaulted: !0,
                      };
            }
            clear() {
                j(this, he).clear(), j(this, Pn).clear();
            }
        }),
        (he = new WeakMap()),
        (Pn = new WeakMap()),
        (Rn = new WeakMap()),
        (lo = new WeakMap()),
        (co = new WeakMap()),
        (Tn = new WeakMap()),
        (uo = new WeakMap()),
        (fo = new WeakMap()),
        Qm),
    NS = h.createContext(void 0),
    SS = ({ client: e, children: t }) => (
        h.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        i.jsx(NS.Provider, { value: e, children: t })
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
 */ function Rs() {
    return (
        (Rs = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Rs.apply(this, arguments)
    );
}
var _n;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_n || (_n = {}));
const xm = "popstate";
function ES(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: s, search: a, hash: l } = r.location;
        return Xc(
            "",
            { pathname: s, search: a, hash: l },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : Fv(o);
    }
    return jS(t, n, null, e);
}
function Se(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Dv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function CS() {
    return Math.random().toString(36).substr(2, 8);
}
function ym(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function Xc(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Rs(
            { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? Ao(t) : t,
            { state: n, key: (t && t.key) || r || CS() }
        )
    );
}
function Fv(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Ao(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function jS(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: s = !1 } = r,
        a = o.history,
        l = _n.Pop,
        c = null,
        u = d();
    u == null && ((u = 0), a.replaceState(Rs({}, a.state, { idx: u }), ""));
    function d() {
        return (a.state || { idx: null }).idx;
    }
    function f() {
        l = _n.Pop;
        let y = d(),
            g = y == null ? null : y - u;
        (u = y), c && c({ action: l, location: p.location, delta: g });
    }
    function v(y, g) {
        l = _n.Push;
        let x = Xc(p.location, y, g);
        u = d() + 1;
        let w = ym(x, u),
            N = p.createHref(x);
        try {
            a.pushState(w, "", N);
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError") throw S;
            o.location.assign(N);
        }
        s && c && c({ action: l, location: p.location, delta: 1 });
    }
    function m(y, g) {
        l = _n.Replace;
        let x = Xc(p.location, y, g);
        u = d();
        let w = ym(x, u),
            N = p.createHref(x);
        a.replaceState(w, "", N), s && c && c({ action: l, location: p.location, delta: 0 });
    }
    function b(y) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
            x = typeof y == "string" ? y : Fv(y);
        return (
            (x = x.replace(/ $/, "%20")),
            Se(g, "No window.location.(origin|href) available to create URL for href: " + x),
            new URL(x, g)
        );
    }
    let p = {
        get action() {
            return l;
        },
        get location() {
            return e(o, a);
        },
        listen(y) {
            if (c) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(xm, f),
                (c = y),
                () => {
                    o.removeEventListener(xm, f), (c = null);
                }
            );
        },
        createHref(y) {
            return t(o, y);
        },
        createURL: b,
        encodeLocation(y) {
            let g = b(y);
            return { pathname: g.pathname, search: g.search, hash: g.hash };
        },
        push: v,
        replace: m,
        go(y) {
            return a.go(y);
        },
    };
    return p;
}
var wm;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(wm || (wm = {}));
function kS(e, t, n) {
    return n === void 0 && (n = "/"), PS(e, t, n, !1);
}
function PS(e, t, n, r) {
    let o = typeof t == "string" ? Ao(t) : t,
        s = Bv(o.pathname || "/", n);
    if (s == null) return null;
    let a = zv(e);
    RS(a);
    let l = null;
    for (let c = 0; l == null && c < a.length; ++c) {
        let u = $S(s);
        l = FS(a[c], u, r);
    }
    return l;
}
function zv(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (s, a, l) => {
        let c = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s,
        };
        c.relativePath.startsWith("/") &&
            (Se(
                c.relativePath.startsWith(r),
                'Absolute route path "' +
                    c.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (c.relativePath = c.relativePath.slice(r.length)));
        let u = mr([r, c.relativePath]),
            d = n.concat(c);
        s.children &&
            s.children.length > 0 &&
            (Se(
                s.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            zv(s.children, t, d, u)),
            !(s.path == null && !s.index) && t.push({ path: u, score: LS(u, s.index), routesMeta: d });
    };
    return (
        e.forEach((s, a) => {
            var l;
            if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, a);
            else for (let c of $v(s.path)) o(s, a, c);
        }),
        t
    );
}
function $v(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let a = $v(r.join("/")),
        l = [];
    return (
        l.push(...a.map((c) => (c === "" ? s : [s, c].join("/")))),
        o && l.push(...a),
        l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
    );
}
function RS(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : DS(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const TS = /^:[\w-]+$/,
    AS = 3,
    OS = 2,
    _S = 1,
    MS = 10,
    IS = -2,
    bm = (e) => e === "*";
function LS(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(bm) && (r += IS),
        t && (r += OS),
        n.filter((o) => !bm(o)).reduce((o, s) => o + (TS.test(s) ? AS : s === "" ? _S : MS), r)
    );
}
function DS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function FS(e, t, n) {
    let { routesMeta: r } = e,
        o = {},
        s = "/",
        a = [];
    for (let l = 0; l < r.length; ++l) {
        let c = r[l],
            u = l === r.length - 1,
            d = s === "/" ? t : t.slice(s.length) || "/",
            f = Nm({ path: c.relativePath, caseSensitive: c.caseSensitive, end: u }, d),
            v = c.route;
        if (
            (!f &&
                u &&
                n &&
                !r[r.length - 1].route.index &&
                (f = Nm({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, d)),
            !f)
        )
            return null;
        Object.assign(o, f.params),
            a.push({ params: o, pathname: mr([s, f.pathname]), pathnameBase: KS(mr([s, f.pathnameBase])), route: v }),
            f.pathnameBase !== "/" && (s = mr([s, f.pathnameBase]));
    }
    return a;
}
function Nm(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = zS(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let s = o[0],
        a = s.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            let { paramName: v, isOptional: m } = d;
            if (v === "*") {
                let p = l[f] || "";
                a = s.slice(0, s.length - p.length).replace(/(.)\/+$/, "$1");
            }
            const b = l[f];
            return m && !b ? (u[v] = void 0) : (u[v] = (b || "").replace(/%2F/g, "/")), u;
        }, {}),
        pathname: s,
        pathnameBase: a,
        pattern: e,
    };
}
function zS(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Dv(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (a, l, c) => (r.push({ paramName: l, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (o += "\\/*$")
              : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function $S(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            Dv(
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
function Bv(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function BS(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Ao(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : US(n, t)) : t, search: GS(r), hash: QS(o) };
}
function US(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function Fl(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function VS(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function WS(e, t) {
    let n = VS(e);
    return t ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function HS(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
        ? (o = Ao(e))
        : ((o = Rs({}, e)),
          Se(!o.pathname || !o.pathname.includes("?"), Fl("?", "pathname", "search", o)),
          Se(!o.pathname || !o.pathname.includes("#"), Fl("#", "pathname", "hash", o)),
          Se(!o.search || !o.search.includes("#"), Fl("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "",
        a = s ? "/" : o.pathname,
        l;
    if (a == null) l = n;
    else {
        let f = t.length - 1;
        if (!r && a.startsWith("..")) {
            let v = a.split("/");
            for (; v[0] === ".."; ) v.shift(), (f -= 1);
            o.pathname = v.join("/");
        }
        l = f >= 0 ? t[f] : "/";
    }
    let c = BS(o, l),
        u = a && a !== "/" && a.endsWith("/"),
        d = (s || a === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const mr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    KS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    GS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    QS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function YS(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const Uv = ["post", "put", "patch", "delete"];
new Set(Uv);
const qS = ["get", ...Uv];
new Set(qS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ts() {
    return (
        (Ts = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ts.apply(this, arguments)
    );
}
const pd = h.createContext(null),
    XS = h.createContext(null),
    Qi = h.createContext(null),
    Yi = h.createContext(null),
    Oo = h.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Vv = h.createContext(null);
function qi() {
    return h.useContext(Yi) != null;
}
function hd() {
    return qi() || Se(!1), h.useContext(Yi).location;
}
function Wv(e) {
    h.useContext(Qi).static || h.useLayoutEffect(e);
}
function JS() {
    let { isDataRoute: e } = h.useContext(Oo);
    return e ? dE() : ZS();
}
function ZS() {
    qi() || Se(!1);
    let e = h.useContext(pd),
        { basename: t, future: n, navigator: r } = h.useContext(Qi),
        { matches: o } = h.useContext(Oo),
        { pathname: s } = hd(),
        a = JSON.stringify(WS(o, n.v7_relativeSplatPath)),
        l = h.useRef(!1);
    return (
        Wv(() => {
            l.current = !0;
        }),
        h.useCallback(
            function (u, d) {
                if ((d === void 0 && (d = {}), !l.current)) return;
                if (typeof u == "number") {
                    r.go(u);
                    return;
                }
                let f = HS(u, JSON.parse(a), s, d.relative === "path");
                e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : mr([t, f.pathname])),
                    (d.replace ? r.replace : r.push)(f, d.state, d);
            },
            [t, r, a, s, e]
        )
    );
}
function eE(e, t) {
    return tE(e, t);
}
function tE(e, t, n, r) {
    qi() || Se(!1);
    let { navigator: o } = h.useContext(Qi),
        { matches: s } = h.useContext(Oo),
        a = s[s.length - 1],
        l = a ? a.params : {};
    a && a.pathname;
    let c = a ? a.pathnameBase : "/";
    a && a.route;
    let u = hd(),
        d;
    if (t) {
        var f;
        let y = typeof t == "string" ? Ao(t) : t;
        c === "/" || ((f = y.pathname) != null && f.startsWith(c)) || Se(!1), (d = y);
    } else d = u;
    let v = d.pathname || "/",
        m = v;
    if (c !== "/") {
        let y = c.replace(/^\//, "").split("/");
        m = "/" + v.replace(/^\//, "").split("/").slice(y.length).join("/");
    }
    let b = kS(e, { pathname: m }),
        p = aE(
            b &&
                b.map((y) =>
                    Object.assign({}, y, {
                        params: Object.assign({}, l, y.params),
                        pathname: mr([c, o.encodeLocation ? o.encodeLocation(y.pathname).pathname : y.pathname]),
                        pathnameBase:
                            y.pathnameBase === "/"
                                ? c
                                : mr([
                                      c,
                                      o.encodeLocation ? o.encodeLocation(y.pathnameBase).pathname : y.pathnameBase,
                                  ]),
                    })
                ),
            s,
            n,
            r
        );
    return t && p
        ? h.createElement(
              Yi.Provider,
              {
                  value: {
                      location: Ts({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d),
                      navigationType: _n.Pop,
                  },
              },
              p
          )
        : p;
}
function nE() {
    let e = uE(),
        t = YS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return h.createElement(
        h.Fragment,
        null,
        h.createElement("h2", null, "Unexpected Application Error!"),
        h.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? h.createElement("pre", { style: o }, n) : null,
        null
    );
}
const rE = h.createElement(nE, null);
class oE extends h.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0
            ? h.createElement(
                  Oo.Provider,
                  { value: this.props.routeContext },
                  h.createElement(Vv.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function sE(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = h.useContext(pd);
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        h.createElement(Oo.Provider, { value: t }, r)
    );
}
function aE(e, t, n, r) {
    var o;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else return null;
    }
    let a = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = a.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || Se(!1), (a = a.slice(0, Math.min(a.length, d + 1)));
    }
    let c = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let f = a[d];
            if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id)) {
                let { loaderData: v, errors: m } = n,
                    b = f.route.loader && v[f.route.id] === void 0 && (!m || m[f.route.id] === void 0);
                if (f.route.lazy || b) {
                    (c = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
                    break;
                }
            }
        }
    return a.reduceRight((d, f, v) => {
        let m,
            b = !1,
            p = null,
            y = null;
        n &&
            ((m = l && f.route.id ? l[f.route.id] : void 0),
            (p = f.route.errorElement || rE),
            c &&
                (u < 0 && v === 0
                    ? ((b = !0), (y = null))
                    : u === v && ((b = !0), (y = f.route.hydrateFallbackElement || null))));
        let g = t.concat(a.slice(0, v + 1)),
            x = () => {
                let w;
                return (
                    m
                        ? (w = p)
                        : b
                          ? (w = y)
                          : f.route.Component
                            ? (w = h.createElement(f.route.Component, null))
                            : f.route.element
                              ? (w = f.route.element)
                              : (w = d),
                    h.createElement(sE, {
                        match: f,
                        routeContext: { outlet: d, matches: g, isDataRoute: n != null },
                        children: w,
                    })
                );
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || v === 0)
            ? h.createElement(oE, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: p,
                  error: m,
                  children: x(),
                  routeContext: { outlet: null, matches: g, isDataRoute: !0 },
              })
            : x();
    }, null);
}
var Hv = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(Hv || {}),
    pi = (function (e) {
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
    })(pi || {});
function iE(e) {
    let t = h.useContext(pd);
    return t || Se(!1), t;
}
function lE(e) {
    let t = h.useContext(XS);
    return t || Se(!1), t;
}
function cE(e) {
    let t = h.useContext(Oo);
    return t || Se(!1), t;
}
function Kv(e) {
    let t = cE(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Se(!1), n.route.id;
}
function uE() {
    var e;
    let t = h.useContext(Vv),
        n = lE(pi.UseRouteError),
        r = Kv(pi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function dE() {
    let { router: e } = iE(Hv.UseNavigateStable),
        t = Kv(pi.UseNavigateStable),
        n = h.useRef(!1);
    return (
        Wv(() => {
            n.current = !0;
        }),
        h.useCallback(
            function (o, s) {
                s === void 0 && (s = {}),
                    n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ts({ fromRouteId: t }, s)));
            },
            [e, t]
        )
    );
}
function fE(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function tr(e) {
    Se(!1);
}
function mE(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = _n.Pop,
        navigator: s,
        static: a = !1,
        future: l,
    } = e;
    qi() && Se(!1);
    let c = t.replace(/^\/*/, "/"),
        u = h.useMemo(
            () => ({ basename: c, navigator: s, static: a, future: Ts({ v7_relativeSplatPath: !1 }, l) }),
            [c, l, s, a]
        );
    typeof r == "string" && (r = Ao(r));
    let { pathname: d = "/", search: f = "", hash: v = "", state: m = null, key: b = "default" } = r,
        p = h.useMemo(() => {
            let y = Bv(d, c);
            return y == null
                ? null
                : { location: { pathname: y, search: f, hash: v, state: m, key: b }, navigationType: o };
        }, [c, d, f, v, m, b, o]);
    return p == null
        ? null
        : h.createElement(Qi.Provider, { value: u }, h.createElement(Yi.Provider, { children: n, value: p }));
}
function pE(e) {
    let { children: t, location: n } = e;
    return eE(Jc(t), n);
}
new Promise(() => {});
function Jc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        h.Children.forEach(e, (r, o) => {
            if (!h.isValidElement(r)) return;
            let s = [...t, o];
            if (r.type === h.Fragment) {
                n.push.apply(n, Jc(r.props.children, s));
                return;
            }
            r.type !== tr && Se(!1), !r.props.index || !r.props.children || Se(!1);
            let a = {
                id: r.props.id || s.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (a.children = Jc(r.props.children, s)), n.push(a);
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
 */ const hE = "6";
try {
    window.__reactRouterVersion = hE;
} catch {}
const gE = "startTransition",
    Sm = au[gE];
function vE(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        s = h.useRef();
    s.current == null && (s.current = ES({ window: o, v5Compat: !0 }));
    let a = s.current,
        [l, c] = h.useState({ action: a.action, location: a.location }),
        { v7_startTransition: u } = r || {},
        d = h.useCallback(
            (f) => {
                u && Sm ? Sm(() => c(f)) : c(f);
            },
            [c, u]
        );
    return (
        h.useLayoutEffect(() => a.listen(d), [a, d]),
        h.useEffect(() => fE(r), [r]),
        h.createElement(mE, {
            basename: t,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: a,
            future: r,
        })
    );
}
var Em;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(Em || (Em = {}));
var Cm;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(Cm || (Cm = {}));
const xE = Fi(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
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
        }
    ),
    Le = h.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
        const a = r ? X1 : "button";
        return i.jsx(a, { className: le(xE({ variant: t, size: n, className: e })), ref: s, ...o });
    });
Le.displayName = "Button";
const Eo = "/assets/logo-brasil-Bp99DZkj.png",
    Gv = () => {
        const e = (t) => {
            const n = document.getElementById(t);
            n == null || n.scrollIntoView({ behavior: "smooth" });
        };
        return i.jsx("header", {
            className:
                "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            children: i.jsxs("div", {
                className: "container flex h-14 md:h-16 items-center justify-between px-4",
                children: [
                    i.jsxs("div", {
                        className: "flex items-center gap-2 md:gap-3",
                        children: [
                            i.jsx("img", { src: Eo, alt: "Juntos pelo Brasil", className: "h-8 w-8 md:h-10 md:w-10" }),
                            i.jsx("span", {
                                className:
                                    "text-base md:text-xl font-bold bg-gradient-brasil bg-clip-text text-transparent",
                                children: "Juntos pelo Brasil",
                            }),
                        ],
                    }),
                    i.jsxs("nav", {
                        className: "hidden md:flex items-center gap-6",
                        children: [
                            i.jsx("button", {
                                onClick: () => e("produto"),
                                className:
                                    "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
                                children: "Produto",
                            }),
                            i.jsx("button", {
                                onClick: () => e("impacto"),
                                className:
                                    "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
                                children: "Impacto",
                            }),
                            i.jsxs(Le, {
                                onClick: () => e("doacao"),
                                className: "bg-gradient-brasil hover:opacity-90",
                                children: [i.jsx(wo, { className: "w-4 h-4 mr-2" }), "Doar Agora"],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    yE = Fi(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
            variants: {
                variant: {
                    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    destructive:
                        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                    outline: "text-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    );
function ve({ className: e, variant: t, ...n }) {
    return i.jsx("div", { className: le(yE({ variant: t }), e), ...n });
}
const wE = () => {
        const [e, t] = h.useState({ hours: 7, minutes: 23, seconds: 47 }),
            [n] = h.useState(847),
            [r] = h.useState(153);
        return (
            h.useEffect(() => {
                const o = setInterval(() => {
                    t((s) =>
                        s.seconds > 0
                            ? { ...s, seconds: s.seconds - 1 }
                            : s.minutes > 0
                              ? { hours: s.hours, minutes: s.minutes - 1, seconds: 59 }
                              : s.hours > 0
                                ? { hours: s.hours - 1, minutes: 59, seconds: 59 }
                                : s
                    );
                }, 1e3);
                return () => clearInterval(o);
            }, []),
            i.jsx("div", {
                className: "bg-accent text-accent-foreground py-2 md:py-3 px-4 animate-fade-in overflow-x-hidden",
                children: i.jsx("div", {
                    className: "container max-w-6xl mx-auto",
                    children: i.jsxs("div", {
                        className:
                            "flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 text-xs md:text-sm",
                        children: [
                            i.jsxs("div", {
                                className: "flex items-center gap-2 flex-shrink-0",
                                children: [
                                    i.jsx(Hw, { className: "w-4 h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" }),
                                    i.jsx("span", { className: "font-semibold", children: "Campanha termina em:" }),
                                    i.jsxs("div", {
                                        className: "flex gap-1 md:gap-2 font-bold text-sm md:text-lg",
                                        children: [
                                            i.jsxs("span", { children: [String(e.hours).padStart(2, "0"), "h"] }),
                                            i.jsx("span", { children: ":" }),
                                            i.jsxs("span", { children: [String(e.minutes).padStart(2, "0"), "m"] }),
                                            i.jsx("span", { children: ":" }),
                                            i.jsxs("span", { children: [String(e.seconds).padStart(2, "0"), "s"] }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className:
                                    "flex flex-col sm:flex-row items-center gap-2 md:gap-4 text-[11px] md:text-sm",
                                children: [
                                    i.jsxs("div", {
                                        className: "flex items-center gap-1 md:gap-2",
                                        children: [
                                            i.jsx(Ug, { className: "w-4 h-4 md:w-5 md:h-5 flex-shrink-0" }),
                                            i.jsxs("span", {
                                                children: [
                                                    i.jsx("span", { className: "font-bold", children: n }),
                                                    " doações nas últimas 24h",
                                                ],
                                            }),
                                        ],
                                    }),
                                    i.jsxs(ve, {
                                        variant: "secondary",
                                        className:
                                            "bg-destructive text-destructive-foreground animate-pulse text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1",
                                        children: [
                                            i.jsx(zi, { className: "w-3 h-3 md:w-4 md:h-4 mr-1" }),
                                            "Apenas ",
                                            r,
                                            " kits restantes",
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    bE = () =>
        i.jsxs("div", {
            className:
                "relative overflow-hidden bg-gradient-brasil rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-brasil animate-fade-in-up",
            children: [
                i.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse",
                }),
                i.jsxs("div", {
                    className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4",
                    children: [
                        i.jsxs("div", {
                            className: "flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full md:w-auto",
                            children: [
                                i.jsx("div", {
                                    className:
                                        "w-12 h-12 md:w-16 md:h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0",
                                    children: i.jsx(Wn, { className: "w-6 h-6 md:w-8 md:h-8 text-primary-foreground" }),
                                }),
                                i.jsxs("div", {
                                    className: "text-primary-foreground text-center sm:text-left",
                                    children: [
                                        i.jsxs("div", {
                                            className:
                                                "flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 mb-1",
                                            children: [
                                                i.jsx("h3", {
                                                    className: "text-lg md:text-2xl lg:text-3xl font-bold",
                                                    children: "KIT PATRIOTA GRÁTIS",
                                                }),
                                                i.jsx(Ss, { className: "w-4 h-4 md:w-6 md:h-6 animate-pulse" }),
                                            ],
                                        }),
                                        i.jsxs("p", {
                                            className: "text-sm md:text-base lg:text-lg opacity-90",
                                            children: [
                                                "Em doações acima de ",
                                                i.jsx("span", {
                                                    className: "font-bold text-base md:text-xl",
                                                    children: "R$30",
                                                }),
                                                " + Frete Grátis",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsx(ve, {
                            variant: "secondary",
                            className:
                                "bg-primary-foreground text-primary text-sm md:text-base lg:text-lg px-4 py-1.5 md:px-6 md:py-2 animate-glow whitespace-nowrap",
                            children: "OFERTA LIMITADA",
                        }),
                    ],
                }),
            ],
        });
var zl = "focusScope.autoFocusOnMount",
    $l = "focusScope.autoFocusOnUnmount",
    jm = { bubbles: !1, cancelable: !0 },
    NE = "FocusScope",
    Qv = h.forwardRef((e, t) => {
        const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...a } = e,
            [l, c] = h.useState(null),
            u = Pt(o),
            d = Pt(s),
            f = h.useRef(null),
            v = Ee(t, (p) => c(p)),
            m = h.useRef({
                paused: !1,
                pause() {
                    this.paused = !0;
                },
                resume() {
                    this.paused = !1;
                },
            }).current;
        h.useEffect(() => {
            if (r) {
                let p = function (w) {
                        if (m.paused || !l) return;
                        const N = w.target;
                        l.contains(N) ? (f.current = N) : bn(f.current, { select: !0 });
                    },
                    y = function (w) {
                        if (m.paused || !l) return;
                        const N = w.relatedTarget;
                        N !== null && (l.contains(N) || bn(f.current, { select: !0 }));
                    },
                    g = function (w) {
                        if (document.activeElement === document.body)
                            for (const S of w) S.removedNodes.length > 0 && bn(l);
                    };
                document.addEventListener("focusin", p), document.addEventListener("focusout", y);
                const x = new MutationObserver(g);
                return (
                    l && x.observe(l, { childList: !0, subtree: !0 }),
                    () => {
                        document.removeEventListener("focusin", p),
                            document.removeEventListener("focusout", y),
                            x.disconnect();
                    }
                );
            }
        }, [r, l, m.paused]),
            h.useEffect(() => {
                if (l) {
                    Pm.add(m);
                    const p = document.activeElement;
                    if (!l.contains(p)) {
                        const g = new CustomEvent(zl, jm);
                        l.addEventListener(zl, u),
                            l.dispatchEvent(g),
                            g.defaultPrevented ||
                                (SE(PE(Yv(l)), { select: !0 }), document.activeElement === p && bn(l));
                    }
                    return () => {
                        l.removeEventListener(zl, u),
                            setTimeout(() => {
                                const g = new CustomEvent($l, jm);
                                l.addEventListener($l, d),
                                    l.dispatchEvent(g),
                                    g.defaultPrevented || bn(p ?? document.body, { select: !0 }),
                                    l.removeEventListener($l, d),
                                    Pm.remove(m);
                            }, 0);
                    };
                }
            }, [l, u, d, m]);
        const b = h.useCallback(
            (p) => {
                if ((!n && !r) || m.paused) return;
                const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
                    g = document.activeElement;
                if (y && g) {
                    const x = p.currentTarget,
                        [w, N] = EE(x);
                    w && N
                        ? !p.shiftKey && g === N
                            ? (p.preventDefault(), n && bn(w, { select: !0 }))
                            : p.shiftKey && g === w && (p.preventDefault(), n && bn(N, { select: !0 }))
                        : g === x && p.preventDefault();
                }
            },
            [n, r, m.paused]
        );
        return i.jsx(ne.div, { tabIndex: -1, ...a, ref: v, onKeyDown: b });
    });
Qv.displayName = NE;
function SE(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const r of e) if ((bn(r, { select: t }), document.activeElement !== n)) return;
}
function EE(e) {
    const t = Yv(e),
        n = km(t, e),
        r = km(t.reverse(), e);
    return [n, r];
}
function Yv(e) {
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
function km(e, t) {
    for (const n of e) if (!CE(n, { upTo: t })) return n;
}
function CE(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement;
    }
    return !1;
}
function jE(e) {
    return e instanceof HTMLInputElement && "select" in e;
}
function bn(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({ preventScroll: !0 }), e !== n && jE(e) && t && e.select();
    }
}
var Pm = kE();
function kE() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), (e = Rm(e, t)), e.unshift(t);
        },
        remove(t) {
            var n;
            (e = Rm(e, t)), (n = e[0]) == null || n.resume();
        },
    };
}
function Rm(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n;
}
function PE(e) {
    return e.filter((t) => t.tagName !== "A");
}
var Bl = 0;
function RE() {
    h.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return (
            document.body.insertAdjacentElement("afterbegin", e[0] ?? Tm()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? Tm()),
            Bl++,
            () => {
                Bl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Bl--;
            }
        );
    }, []);
}
function Tm() {
    const e = document.createElement("span");
    return (
        e.setAttribute("data-radix-focus-guard", ""),
        (e.tabIndex = 0),
        (e.style.outline = "none"),
        (e.style.opacity = "0"),
        (e.style.position = "fixed"),
        (e.style.pointerEvents = "none"),
        e
    );
}
var zt = function () {
    return (
        (zt =
            Object.assign ||
            function (t) {
                for (var n, r = 1, o = arguments.length; r < o; r++) {
                    n = arguments[r];
                    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
                }
                return t;
            }),
        zt.apply(this, arguments)
    );
};
function qv(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
}
function TE(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
    return e.concat(s || Array.prototype.slice.call(t));
}
var La = "right-scroll-bar-position",
    Da = "width-before-scroll-bar",
    AE = "with-scroll-bars-hidden",
    OE = "--removed-body-scroll-bar-size";
function Ul(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function _E(e, t) {
    var n = h.useState(function () {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value;
                },
                set current(r) {
                    var o = n.value;
                    o !== r && ((n.value = r), n.callback(r, o));
                },
            },
        };
    })[0];
    return (n.callback = t), n.facade;
}
var ME = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
    Am = new WeakMap();
function IE(e, t) {
    var n = _E(null, function (r) {
        return e.forEach(function (o) {
            return Ul(o, r);
        });
    });
    return (
        ME(
            function () {
                var r = Am.get(n);
                if (r) {
                    var o = new Set(r),
                        s = new Set(e),
                        a = n.current;
                    o.forEach(function (l) {
                        s.has(l) || Ul(l, null);
                    }),
                        s.forEach(function (l) {
                            o.has(l) || Ul(l, a);
                        });
                }
                Am.set(n, e);
            },
            [e]
        ),
        n
    );
}
function LE(e) {
    return e;
}
function DE(e, t) {
    t === void 0 && (t = LE);
    var n = [],
        r = !1,
        o = {
            read: function () {
                if (r)
                    throw new Error(
                        "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                return n.length ? n[n.length - 1] : e;
            },
            useMedium: function (s) {
                var a = t(s, r);
                return (
                    n.push(a),
                    function () {
                        n = n.filter(function (l) {
                            return l !== a;
                        });
                    }
                );
            },
            assignSyncMedium: function (s) {
                for (r = !0; n.length; ) {
                    var a = n;
                    (n = []), a.forEach(s);
                }
                n = {
                    push: function (l) {
                        return s(l);
                    },
                    filter: function () {
                        return n;
                    },
                };
            },
            assignMedium: function (s) {
                r = !0;
                var a = [];
                if (n.length) {
                    var l = n;
                    (n = []), l.forEach(s), (a = n);
                }
                var c = function () {
                        var d = a;
                        (a = []), d.forEach(s);
                    },
                    u = function () {
                        return Promise.resolve().then(c);
                    };
                u(),
                    (n = {
                        push: function (d) {
                            a.push(d), u();
                        },
                        filter: function (d) {
                            return (a = a.filter(d)), n;
                        },
                    });
            },
        };
    return o;
}
function FE(e) {
    e === void 0 && (e = {});
    var t = DE(null);
    return (t.options = zt({ async: !0, ssr: !1 }, e)), t;
}
var Xv = function (e) {
    var t = e.sideCar,
        n = qv(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return h.createElement(r, zt({}, n));
};
Xv.isSideCarExport = !0;
function zE(e, t) {
    return e.useMedium(t), Xv;
}
var Jv = FE(),
    Vl = function () {},
    Xi = h.forwardRef(function (e, t) {
        var n = h.useRef(null),
            r = h.useState({ onScrollCapture: Vl, onWheelCapture: Vl, onTouchMoveCapture: Vl }),
            o = r[0],
            s = r[1],
            a = e.forwardProps,
            l = e.children,
            c = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            v = e.sideCar,
            m = e.noRelative,
            b = e.noIsolation,
            p = e.inert,
            y = e.allowPinchZoom,
            g = e.as,
            x = g === void 0 ? "div" : g,
            w = e.gapMode,
            N = qv(e, [
                "forwardProps",
                "children",
                "className",
                "removeScrollBar",
                "enabled",
                "shards",
                "sideCar",
                "noRelative",
                "noIsolation",
                "inert",
                "allowPinchZoom",
                "as",
                "gapMode",
            ]),
            S = v,
            E = IE([n, t]),
            C = zt(zt({}, N), o);
        return h.createElement(
            h.Fragment,
            null,
            d &&
                h.createElement(S, {
                    sideCar: Jv,
                    removeScrollBar: u,
                    shards: f,
                    noRelative: m,
                    noIsolation: b,
                    inert: p,
                    setCallbacks: s,
                    allowPinchZoom: !!y,
                    lockRef: n,
                    gapMode: w,
                }),
            a
                ? h.cloneElement(h.Children.only(l), zt(zt({}, C), { ref: E }))
                : h.createElement(x, zt({}, C, { className: c, ref: E }), l)
        );
    });
Xi.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Xi.classNames = { fullWidth: Da, zeroRight: La };
var $E = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function BE() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = $E();
    return t && e.setAttribute("nonce", t), e;
}
function UE(e, t) {
    e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function VE(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
}
var WE = function () {
        var e = 0,
            t = null;
        return {
            add: function (n) {
                e == 0 && (t = BE()) && (UE(t, n), VE(t)), e++;
            },
            remove: function () {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
        };
    },
    HE = function () {
        var e = WE();
        return function (t, n) {
            h.useEffect(
                function () {
                    return (
                        e.add(t),
                        function () {
                            e.remove();
                        }
                    );
                },
                [t && n]
            );
        };
    },
    Zv = function () {
        var e = HE(),
            t = function (n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null;
            };
        return t;
    },
    KE = { left: 0, top: 0, right: 0, gap: 0 },
    Wl = function (e) {
        return parseInt(e || "", 10) || 0;
    },
    GE = function (e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Wl(n), Wl(r), Wl(o)];
    },
    QE = function (e) {
        if ((e === void 0 && (e = "margin"), typeof window > "u")) return KE;
        var t = GE(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
    },
    YE = Zv(),
    ro = "data-scroll-locked",
    qE = function (e, t, n, r) {
        var o = e.left,
            s = e.top,
            a = e.right,
            l = e.gap;
        return (
            n === void 0 && (n = "margin"),
            `
  .`
                .concat(
                    AE,
                    ` {
   overflow: hidden `
                )
                .concat(
                    r,
                    `;
   padding-right: `
                )
                .concat(l, "px ")
                .concat(
                    r,
                    `;
  }
  body[`
                )
                .concat(
                    ro,
                    `] {
    overflow: hidden `
                )
                .concat(
                    r,
                    `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                    [
                        t && "position: relative ".concat(r, ";"),
                        n === "margin" &&
                            `
    padding-left: `
                                .concat(
                                    o,
                                    `px;
    padding-top: `
                                )
                                .concat(
                                    s,
                                    `px;
    padding-right: `
                                )
                                .concat(
                                    a,
                                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                                )
                                .concat(l, "px ")
                                .concat(
                                    r,
                                    `;
    `
                                ),
                        n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";"),
                    ]
                        .filter(Boolean)
                        .join(""),
                    `
  }
  
  .`
                )
                .concat(
                    La,
                    ` {
    right: `
                )
                .concat(l, "px ")
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(
                    Da,
                    ` {
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(La, " .")
                .concat(
                    La,
                    ` {
    right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(Da, " .")
                .concat(
                    Da,
                    ` {
    margin-right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  body[`
                )
                .concat(
                    ro,
                    `] {
    `
                )
                .concat(OE, ": ")
                .concat(
                    l,
                    `px;
  }
`
                )
        );
    },
    Om = function () {
        var e = parseInt(document.body.getAttribute(ro) || "0", 10);
        return isFinite(e) ? e : 0;
    },
    XE = function () {
        h.useEffect(function () {
            return (
                document.body.setAttribute(ro, (Om() + 1).toString()),
                function () {
                    var e = Om() - 1;
                    e <= 0 ? document.body.removeAttribute(ro) : document.body.setAttribute(ro, e.toString());
                }
            );
        }, []);
    },
    JE = function (e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        XE();
        var s = h.useMemo(
            function () {
                return QE(o);
            },
            [o]
        );
        return h.createElement(YE, { styles: qE(s, !t, o, n ? "" : "!important") });
    },
    Zc = !1;
if (typeof window < "u")
    try {
        var ha = Object.defineProperty({}, "passive", {
            get: function () {
                return (Zc = !0), !0;
            },
        });
        window.addEventListener("test", ha, ha), window.removeEventListener("test", ha, ha);
    } catch {
        Zc = !1;
    }
var Or = Zc ? { passive: !1 } : !1,
    ZE = function (e) {
        return e.tagName === "TEXTAREA";
    },
    ex = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ZE(e) && n[t] === "visible");
    },
    eC = function (e) {
        return ex(e, "overflowY");
    },
    tC = function (e) {
        return ex(e, "overflowX");
    },
    _m = function (e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = tx(e, r);
            if (o) {
                var s = nx(e, r),
                    a = s[1],
                    l = s[2];
                if (a > l) return !0;
            }
            r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
    },
    nC = function (e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r];
    },
    rC = function (e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r];
    },
    tx = function (e, t) {
        return e === "v" ? eC(t) : tC(t);
    },
    nx = function (e, t) {
        return e === "v" ? nC(t) : rC(t);
    },
    oC = function (e, t) {
        return e === "h" && t === "rtl" ? -1 : 1;
    },
    sC = function (e, t, n, r, o) {
        var s = oC(e, window.getComputedStyle(t).direction),
            a = s * r,
            l = n.target,
            c = t.contains(l),
            u = !1,
            d = a > 0,
            f = 0,
            v = 0;
        do {
            if (!l) break;
            var m = nx(e, l),
                b = m[0],
                p = m[1],
                y = m[2],
                g = p - y - s * b;
            (b || g) && tx(e, l) && ((f += g), (v += b));
            var x = l.parentNode;
            l = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
        } while ((!c && l !== document.body) || (c && (t.contains(l) || t === l)));
        return ((d && (Math.abs(f) < 1 || !o)) || (!d && (Math.abs(v) < 1 || !o))) && (u = !0), u;
    },
    ga = function (e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
    },
    Mm = function (e) {
        return [e.deltaX, e.deltaY];
    },
    Im = function (e) {
        return e && "current" in e ? e.current : e;
    },
    aC = function (e, t) {
        return e[0] === t[0] && e[1] === t[1];
    },
    iC = function (e) {
        return `
  .block-interactivity-`
            .concat(
                e,
                ` {pointer-events: none;}
  .allow-interactivity-`
            )
            .concat(
                e,
                ` {pointer-events: all;}
`
            );
    },
    lC = 0,
    _r = [];
function cC(e) {
    var t = h.useRef([]),
        n = h.useRef([0, 0]),
        r = h.useRef(),
        o = h.useState(lC++)[0],
        s = h.useState(Zv)[0],
        a = h.useRef(e);
    h.useEffect(
        function () {
            a.current = e;
        },
        [e]
    ),
        h.useEffect(
            function () {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var p = TE([e.lockRef.current], (e.shards || []).map(Im), !0).filter(Boolean);
                    return (
                        p.forEach(function (y) {
                            return y.classList.add("allow-interactivity-".concat(o));
                        }),
                        function () {
                            document.body.classList.remove("block-interactivity-".concat(o)),
                                p.forEach(function (y) {
                                    return y.classList.remove("allow-interactivity-".concat(o));
                                });
                        }
                    );
                }
            },
            [e.inert, e.lockRef.current, e.shards]
        );
    var l = h.useCallback(function (p, y) {
            if (("touches" in p && p.touches.length === 2) || (p.type === "wheel" && p.ctrlKey))
                return !a.current.allowPinchZoom;
            var g = ga(p),
                x = n.current,
                w = "deltaX" in p ? p.deltaX : x[0] - g[0],
                N = "deltaY" in p ? p.deltaY : x[1] - g[1],
                S,
                E = p.target,
                C = Math.abs(w) > Math.abs(N) ? "h" : "v";
            if ("touches" in p && C === "h" && E.type === "range") return !1;
            var k = _m(C, E);
            if (!k) return !0;
            if ((k ? (S = C) : ((S = C === "v" ? "h" : "v"), (k = _m(C, E))), !k)) return !1;
            if ((!r.current && "changedTouches" in p && (w || N) && (r.current = S), !S)) return !0;
            var _ = r.current || S;
            return sC(_, y, p, _ === "h" ? w : N, !0);
        }, []),
        c = h.useCallback(function (p) {
            var y = p;
            if (!(!_r.length || _r[_r.length - 1] !== s)) {
                var g = "deltaY" in y ? Mm(y) : ga(y),
                    x = t.current.filter(function (S) {
                        return (
                            S.name === y.type &&
                            (S.target === y.target || y.target === S.shadowParent) &&
                            aC(S.delta, g)
                        );
                    })[0];
                if (x && x.should) {
                    y.cancelable && y.preventDefault();
                    return;
                }
                if (!x) {
                    var w = (a.current.shards || [])
                            .map(Im)
                            .filter(Boolean)
                            .filter(function (S) {
                                return S.contains(y.target);
                            }),
                        N = w.length > 0 ? l(y, w[0]) : !a.current.noIsolation;
                    N && y.cancelable && y.preventDefault();
                }
            }
        }, []),
        u = h.useCallback(function (p, y, g, x) {
            var w = { name: p, delta: y, target: g, should: x, shadowParent: uC(g) };
            t.current.push(w),
                setTimeout(function () {
                    t.current = t.current.filter(function (N) {
                        return N !== w;
                    });
                }, 1);
        }, []),
        d = h.useCallback(function (p) {
            (n.current = ga(p)), (r.current = void 0);
        }, []),
        f = h.useCallback(function (p) {
            u(p.type, Mm(p), p.target, l(p, e.lockRef.current));
        }, []),
        v = h.useCallback(function (p) {
            u(p.type, ga(p), p.target, l(p, e.lockRef.current));
        }, []);
    h.useEffect(function () {
        return (
            _r.push(s),
            e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: v }),
            document.addEventListener("wheel", c, Or),
            document.addEventListener("touchmove", c, Or),
            document.addEventListener("touchstart", d, Or),
            function () {
                (_r = _r.filter(function (p) {
                    return p !== s;
                })),
                    document.removeEventListener("wheel", c, Or),
                    document.removeEventListener("touchmove", c, Or),
                    document.removeEventListener("touchstart", d, Or);
            }
        );
    }, []);
    var m = e.removeScrollBar,
        b = e.inert;
    return h.createElement(
        h.Fragment,
        null,
        b ? h.createElement(s, { styles: iC(o) }) : null,
        m ? h.createElement(JE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
    );
}
function uC(e) {
    for (var t = null; e !== null; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
    return t;
}
const dC = zE(Jv, cC);
var rx = h.forwardRef(function (e, t) {
    return h.createElement(Xi, zt({}, e, { ref: t, sideCar: dC }));
});
rx.classNames = Xi.classNames;
var fC = function (e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body;
    },
    Mr = new WeakMap(),
    va = new WeakMap(),
    xa = {},
    Hl = 0,
    ox = function (e) {
        return e && (e.host || ox(e.parentNode));
    },
    mC = function (e, t) {
        return t
            .map(function (n) {
                if (e.contains(n)) return n;
                var r = ox(n);
                return r && e.contains(r)
                    ? r
                    : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
            })
            .filter(function (n) {
                return !!n;
            });
    },
    pC = function (e, t, n, r) {
        var o = mC(t, Array.isArray(e) ? e : [e]);
        xa[n] || (xa[n] = new WeakMap());
        var s = xa[n],
            a = [],
            l = new Set(),
            c = new Set(o),
            u = function (f) {
                !f || l.has(f) || (l.add(f), u(f.parentNode));
            };
        o.forEach(u);
        var d = function (f) {
            !f ||
                c.has(f) ||
                Array.prototype.forEach.call(f.children, function (v) {
                    if (l.has(v)) d(v);
                    else
                        try {
                            var m = v.getAttribute(r),
                                b = m !== null && m !== "false",
                                p = (Mr.get(v) || 0) + 1,
                                y = (s.get(v) || 0) + 1;
                            Mr.set(v, p),
                                s.set(v, y),
                                a.push(v),
                                p === 1 && b && va.set(v, !0),
                                y === 1 && v.setAttribute(n, "true"),
                                b || v.setAttribute(r, "true");
                        } catch (g) {
                            console.error("aria-hidden: cannot operate on ", v, g);
                        }
                });
        };
        return (
            d(t),
            l.clear(),
            Hl++,
            function () {
                a.forEach(function (f) {
                    var v = Mr.get(f) - 1,
                        m = s.get(f) - 1;
                    Mr.set(f, v),
                        s.set(f, m),
                        v || (va.has(f) || f.removeAttribute(r), va.delete(f)),
                        m || f.removeAttribute(n);
                }),
                    Hl--,
                    Hl || ((Mr = new WeakMap()), (Mr = new WeakMap()), (va = new WeakMap()), (xa = {}));
            }
        );
    },
    hC = function (e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = fC(e);
        return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), pC(r, o, n, "aria-hidden"))
            : function () {
                  return null;
              };
    },
    Ji = "Dialog",
    [sx, Zj] = un(Ji),
    [gC, At] = sx(Ji),
    ax = (e) => {
        const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: a = !0 } = e,
            l = h.useRef(null),
            c = h.useRef(null),
            [u, d] = Ii({ prop: r, defaultProp: o ?? !1, onChange: s, caller: Ji });
        return i.jsx(gC, {
            scope: t,
            triggerRef: l,
            contentRef: c,
            contentId: Ma(),
            titleId: Ma(),
            descriptionId: Ma(),
            open: u,
            onOpenChange: d,
            onOpenToggle: h.useCallback(() => d((f) => !f), [d]),
            modal: a,
            children: n,
        });
    };
ax.displayName = Ji;
var ix = "DialogTrigger",
    vC = h.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e,
            o = At(ix, n),
            s = Ee(t, o.triggerRef);
        return i.jsx(ne.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": xd(o.open),
            ...r,
            ref: s,
            onClick: X(e.onClick, o.onOpenToggle),
        });
    });
vC.displayName = ix;
var gd = "DialogPortal",
    [xC, lx] = sx(gd, { forceMount: void 0 }),
    cx = (e) => {
        const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
            s = At(gd, t);
        return i.jsx(xC, {
            scope: t,
            forceMount: n,
            children: h.Children.map(r, (a) =>
                i.jsx(Er, { present: n || s.open, children: i.jsx(Xu, { asChild: !0, container: o, children: a }) })
            ),
        });
    };
cx.displayName = gd;
var hi = "DialogOverlay",
    ux = h.forwardRef((e, t) => {
        const n = lx(hi, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            s = At(hi, e.__scopeDialog);
        return s.modal ? i.jsx(Er, { present: r || s.open, children: i.jsx(wC, { ...o, ref: t }) }) : null;
    });
ux.displayName = hi;
var yC = Ns("DialogOverlay.RemoveScroll"),
    wC = h.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e,
            o = At(hi, n);
        return i.jsx(rx, {
            as: yC,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: i.jsx(ne.div, {
                "data-state": xd(o.open),
                ...r,
                ref: t,
                style: { pointerEvents: "auto", ...r.style },
            }),
        });
    }),
    wr = "DialogContent",
    dx = h.forwardRef((e, t) => {
        const n = lx(wr, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            s = At(wr, e.__scopeDialog);
        return i.jsx(Er, {
            present: r || s.open,
            children: s.modal ? i.jsx(bC, { ...o, ref: t }) : i.jsx(NC, { ...o, ref: t }),
        });
    });
dx.displayName = wr;
var bC = h.forwardRef((e, t) => {
        const n = At(wr, e.__scopeDialog),
            r = h.useRef(null),
            o = Ee(t, n.contentRef, r);
        return (
            h.useEffect(() => {
                const s = r.current;
                if (s) return hC(s);
            }, []),
            i.jsx(fx, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
                    var a;
                    s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
                }),
                onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
                    const a = s.detail.originalEvent,
                        l = a.button === 0 && a.ctrlKey === !0;
                    (a.button === 2 || l) && s.preventDefault();
                }),
                onFocusOutside: X(e.onFocusOutside, (s) => s.preventDefault()),
            })
        );
    }),
    NC = h.forwardRef((e, t) => {
        const n = At(wr, e.__scopeDialog),
            r = h.useRef(!1),
            o = h.useRef(!1);
        return i.jsx(fx, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (s) => {
                var a, l;
                (a = e.onCloseAutoFocus) == null || a.call(e, s),
                    s.defaultPrevented ||
                        (r.current || (l = n.triggerRef.current) == null || l.focus(), s.preventDefault()),
                    (r.current = !1),
                    (o.current = !1);
            },
            onInteractOutside: (s) => {
                var c, u;
                (c = e.onInteractOutside) == null || c.call(e, s),
                    s.defaultPrevented ||
                        ((r.current = !0), s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const a = s.target;
                ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(),
                    s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
            },
        });
    }),
    fx = h.forwardRef((e, t) => {
        const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e,
            l = At(wr, n),
            c = h.useRef(null),
            u = Ee(t, c);
        return (
            RE(),
            i.jsxs(i.Fragment, {
                children: [
                    i.jsx(Qv, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: s,
                        children: i.jsx(Mi, {
                            role: "dialog",
                            id: l.contentId,
                            "aria-describedby": l.descriptionId,
                            "aria-labelledby": l.titleId,
                            "data-state": xd(l.open),
                            ...a,
                            ref: u,
                            onDismiss: () => l.onOpenChange(!1),
                        }),
                    }),
                    i.jsxs(i.Fragment, {
                        children: [
                            i.jsx(SC, { titleId: l.titleId }),
                            i.jsx(CC, { contentRef: c, descriptionId: l.descriptionId }),
                        ],
                    }),
                ],
            })
        );
    }),
    vd = "DialogTitle",
    mx = h.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e,
            o = At(vd, n);
        return i.jsx(ne.h2, { id: o.titleId, ...r, ref: t });
    });
mx.displayName = vd;
var px = "DialogDescription",
    hx = h.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e,
            o = At(px, n);
        return i.jsx(ne.p, { id: o.descriptionId, ...r, ref: t });
    });
hx.displayName = px;
var gx = "DialogClose",
    vx = h.forwardRef((e, t) => {
        const { __scopeDialog: n, ...r } = e,
            o = At(gx, n);
        return i.jsx(ne.button, { type: "button", ...r, ref: t, onClick: X(e.onClick, () => o.onOpenChange(!1)) });
    });
vx.displayName = gx;
function xd(e) {
    return e ? "open" : "closed";
}
var xx = "DialogTitleWarning",
    [ek, yx] = Y1(xx, { contentName: wr, titleName: vd, docsSlug: "dialog" }),
    SC = ({ titleId: e }) => {
        const t = yx(xx),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return (
            h.useEffect(() => {
                e && (document.getElementById(e) || console.error(n));
            }, [n, e]),
            null
        );
    },
    EC = "DialogDescriptionWarning",
    CC = ({ contentRef: e, descriptionId: t }) => {
        const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${yx(EC).contentName}}.`;
        return (
            h.useEffect(() => {
                var s;
                const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
                t && o && (document.getElementById(t) || console.warn(r));
            }, [r, e, t]),
            null
        );
    },
    jC = ax,
    kC = cx,
    wx = ux,
    bx = dx,
    Nx = mx,
    Sx = hx,
    PC = vx;
const eu = jC,
    RC = kC,
    Ex = h.forwardRef(({ className: e, ...t }, n) =>
        i.jsx(wx, {
            ref: n,
            className: le(
                "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                e
            ),
            ...t,
        })
    );
Ex.displayName = wx.displayName;
const gi = h.forwardRef(({ className: e, children: t, ...n }, r) =>
    i.jsxs(RC, {
        children: [
            i.jsx(Ex, {}),
            i.jsxs(bx, {
                ref: r,
                className: le(
                    "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                    e
                ),
                ...n,
                children: [
                    t,
                    i.jsxs(PC, {
                        className:
                            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            i.jsx($i, { className: "h-4 w-4" }),
                            i.jsx("span", { className: "sr-only", children: "Close" }),
                        ],
                    }),
                ],
            }),
        ],
    })
);
gi.displayName = bx.displayName;
const yd = ({ className: e, ...t }) =>
    i.jsx("div", { className: le("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
yd.displayName = "DialogHeader";
const wd = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(Nx, { ref: n, className: le("text-lg font-semibold leading-none tracking-tight", e), ...t })
);
wd.displayName = Nx.displayName;
const bd = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(Sx, { ref: n, className: le("text-sm text-muted-foreground", e), ...t })
);
bd.displayName = Sx.displayName;
const TC = [
        { label: "Produção e Distribuição dos Kits", percentage: 40, color: "bg-primary" },
        { label: "Campanhas e Comunicação", percentage: 30, color: "bg-brasil-yellow" },
        { label: "Mobilização e Eventos", percentage: 20, color: "bg-accent" },
        { label: "Operação e Transparência", percentage: 10, color: "bg-muted-foreground" },
    ],
    AC = [
        { icon: zi, value: "15.000+", label: "Apoiadores" },
        { icon: Ug, value: "R$ 850K", label: "Arrecadado" },
        { icon: li, value: "100%", label: "Transparente" },
        { icon: zg, value: "12K+", label: "Kits Entregues" },
    ],
    OC = ({ open: e, onClose: t }) =>
        i.jsx(eu, {
            open: e,
            onOpenChange: t,
            children: i.jsxs(gi, {
                className: "max-w-3xl max-h-[90vh] overflow-y-auto",
                children: [
                    i.jsxs(yd, {
                        children: [
                            i.jsxs(wd, {
                                className: "flex items-center gap-2 text-2xl",
                                children: [i.jsx(li, { className: "w-6 h-6 text-primary" }), "Transparência Total"],
                            }),
                            i.jsx(bd, {
                                children: "Veja como cada real da sua doação é utilizado para defender o Brasil",
                            }),
                        ],
                    }),
                    i.jsxs("div", {
                        className: "space-y-6 py-4",
                        children: [
                            i.jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                children: AC.map((n) =>
                                    i.jsxs(
                                        "div",
                                        {
                                            className: "text-center p-4 bg-muted/50 rounded-lg",
                                            children: [
                                                i.jsx("div", {
                                                    className: "flex justify-center mb-2",
                                                    children: i.jsx("div", {
                                                        className:
                                                            "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                                                        children: i.jsx(n.icon, { className: "w-5 h-5 text-primary" }),
                                                    }),
                                                }),
                                                i.jsx("div", {
                                                    className: "text-2xl font-bold text-foreground",
                                                    children: n.value,
                                                }),
                                                i.jsx("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: n.label,
                                                }),
                                            ],
                                        },
                                        n.label
                                    )
                                ),
                            }),
                            i.jsxs("div", {
                                children: [
                                    i.jsxs("h3", {
                                        className: "text-lg font-semibold mb-4 text-foreground flex items-center gap-2",
                                        children: [
                                            i.jsx(zg, { className: "w-5 h-5 text-primary" }),
                                            "Como Utilizamos Seus Recursos",
                                        ],
                                    }),
                                    i.jsx("div", {
                                        className: "space-y-3",
                                        children: TC.map((n) =>
                                            i.jsxs(
                                                "div",
                                                {
                                                    children: [
                                                        i.jsxs("div", {
                                                            className: "flex justify-between mb-2",
                                                            children: [
                                                                i.jsx("span", {
                                                                    className: "text-sm text-foreground font-medium",
                                                                    children: n.label,
                                                                }),
                                                                i.jsxs("span", {
                                                                    className: "text-sm font-bold text-foreground",
                                                                    children: [n.percentage, "%"],
                                                                }),
                                                            ],
                                                        }),
                                                        i.jsx("div", {
                                                            className: "h-3 bg-muted rounded-full overflow-hidden",
                                                            children: i.jsx("div", {
                                                                className: `h-full ${n.color} transition-all duration-1000 ease-out`,
                                                                style: { width: `${n.percentage}%` },
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                n.label
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "bg-primary/5 p-6 rounded-lg border border-primary/20",
                                children: [
                                    i.jsx("h4", {
                                        className: "font-semibold text-foreground mb-3",
                                        children: "Detalhamento dos Investimentos:",
                                    }),
                                    i.jsxs("div", {
                                        className: "space-y-3 text-sm",
                                        children: [
                                            i.jsxs("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    i.jsx(ve, {
                                                        variant: "secondary",
                                                        className: "bg-primary text-primary-foreground shrink-0",
                                                        children: "40%",
                                                    }),
                                                    i.jsxs("div", {
                                                        children: [
                                                            i.jsx("p", {
                                                                className: "font-medium text-foreground",
                                                                children: "Produção e Distribuição",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-muted-foreground text-xs",
                                                                children:
                                                                    "Fabricação dos kits, controle de qualidade, embalagem, logística e frete grátis para todo Brasil",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    i.jsx(ve, {
                                                        variant: "secondary",
                                                        className: "bg-brasil-yellow text-foreground shrink-0",
                                                        children: "30%",
                                                    }),
                                                    i.jsxs("div", {
                                                        children: [
                                                            i.jsx("p", {
                                                                className: "font-medium text-foreground",
                                                                children: "Campanhas e Comunicação",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-muted-foreground text-xs",
                                                                children:
                                                                    "Produção de conteúdo, mídia digital, redes sociais e divulgação da causa",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    i.jsx(ve, {
                                                        variant: "secondary",
                                                        className: "bg-accent text-accent-foreground shrink-0",
                                                        children: "20%",
                                                    }),
                                                    i.jsxs("div", {
                                                        children: [
                                                            i.jsx("p", {
                                                                className: "font-medium text-foreground",
                                                                children: "Mobilização e Eventos",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-muted-foreground text-xs",
                                                                children:
                                                                    "Organização de atos, manifestações, eventos regionais e mobilização de apoiadores",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    i.jsx(ve, {
                                                        variant: "secondary",
                                                        className:
                                                            "bg-muted-foreground text-primary-foreground shrink-0",
                                                        children: "10%",
                                                    }),
                                                    i.jsxs("div", {
                                                        children: [
                                                            i.jsx("p", {
                                                                className: "font-medium text-foreground",
                                                                children: "Operação e Transparência",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-muted-foreground text-xs",
                                                                children:
                                                                    "Infraestrutura, atendimento, plataforma, prestação de contas e auditoria",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsx("div", {
                                className: "bg-muted/30 p-4 rounded-lg text-center",
                                children: i.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        i.jsx("strong", {
                                            className: "text-foreground",
                                            children: "Compromisso com a Transparência:",
                                        }),
                                        " Publicamos relatórios mensais detalhados sobre nossas atividades e utilização de recursos. Sua confiança é nossa maior responsabilidade.",
                                    ],
                                }),
                            }),
                            i.jsx(Le, {
                                onClick: t,
                                className: "w-full bg-gradient-brasil",
                                children: "Entendi, Quero Contribuir",
                            }),
                        ],
                    }),
                ],
            }),
        }),
    _C = () => {
        const [e, t] = h.useState(!1);
        return i.jsxs(i.Fragment, {
            children: [
                i.jsxs(Le, {
                    variant: "outline",
                    onClick: () => t(!0),
                    className: "border-primary/30 hover:bg-primary/10 hover:border-primary group",
                    children: [
                        i.jsx(Gw, { className: "w-4 h-4 mr-2 group-hover:text-primary" }),
                        "Ver Transparência dos Recursos",
                    ],
                }),
                i.jsx(OC, { open: e, onClose: () => t(!1) }),
            ],
        });
    },
    MC = "/assets/kit-completo-he2SVIes.png",
    Cx = "/assets/pulseira--ATNCqDO.png",
    jx = "/assets/adesivos-CI5kTFOS.png",
    IC = [
        { name: "Pulseira Patriota", description: "Pulseira de silicone premium com as cores do Brasil", image: Cx },
        { name: "Kit de Adesivos", description: "Cartela exclusiva com 5 adesivos patrióticos", image: jx },
    ],
    kx = ({ open: e, onOpenChange: t, currentValue: n, nextValue: r }) => {
        const o = n === 20,
            s = n === 25 && r === void 0,
            a = () => {
                t(!1),
                    o
                        ? lt("/endereco", { selectedValue: 27.9, numberOfKits: 0, hasMiniKit: !0 })
                        : s
                          ? lt("/personalizar", { selectedValue: 32.9, numberOfKits: 1 })
                          : lt("/personalizar", { selectedValue: r, numberOfKits: 2 });
            },
            l = () => {
                t(!1),
                    n === 25
                        ? lt("/endereco", { selectedValue: n, numberOfKits: 0, hasMiniKit: !1 })
                        : lt("/personalizar", { selectedValue: n, numberOfKits: 1 });
            };
        if (o) {
            const u = n + 7.9;
            return i.jsx(eu, {
                open: e,
                onOpenChange: t,
                children: i.jsx(gi, {
                    className: "max-w-3xl max-h-[90vh] overflow-y-auto p-0",
                    children: i.jsxs("div", {
                        className: "bg-gradient-to-br from-background via-background to-brasil-yellow/5 p-6 md:p-8",
                        children: [
                            i.jsxs("div", {
                                className: "flex items-center justify-center gap-3 mb-6",
                                children: [
                                    i.jsx("img", { src: Eo, alt: "Brasil", className: "w-12 h-12 md:w-16 md:h-16" }),
                                    i.jsx("h1", {
                                        className: "text-2xl md:text-3xl font-bold text-foreground",
                                        children: "Oferta Especial",
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "text-center mb-6",
                                children: [
                                    i.jsxs(ve, {
                                        className:
                                            "bg-gradient-patriota text-white px-4 py-1 text-sm mb-4 animate-pulse",
                                        children: [
                                            i.jsx(Ss, { className: "w-4 h-4 mr-2" }),
                                            "ÚLTIMA CHANCE! Apenas hoje",
                                        ],
                                    }),
                                    i.jsxs("h2", {
                                        className: "text-xl md:text-2xl font-bold text-foreground mb-3",
                                        children: [
                                            "Adicione o Mini Kit por apenas ",
                                            i.jsx("span", { className: "text-primary", children: "R$ 7,90" }),
                                        ],
                                    }),
                                    i.jsxs("div", {
                                        className: "flex items-center justify-center gap-4 text-muted-foreground mb-4",
                                        children: [
                                            i.jsxs("div", {
                                                className: "text-center",
                                                children: [
                                                    i.jsx("p", { className: "text-sm", children: "Seu valor atual" }),
                                                    i.jsxs("p", {
                                                        className: "text-2xl font-bold text-foreground line-through",
                                                        children: ["R$ ", n.toFixed(2)],
                                                    }),
                                                ],
                                            }),
                                            i.jsx("div", { className: "text-3xl", children: "→" }),
                                            i.jsxs("div", {
                                                className: "text-center",
                                                children: [
                                                    i.jsx("p", { className: "text-sm", children: "Novo valor" }),
                                                    i.jsxs("p", {
                                                        className: "text-3xl font-bold text-primary",
                                                        children: ["R$ ", u.toFixed(2)],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "bg-card rounded-xl p-6 shadow-lg border border-border mb-6",
                                children: [
                                    i.jsxs("h3", {
                                        className: "text-lg font-bold text-foreground mb-4 flex items-center gap-2",
                                        children: [
                                            i.jsx(Wn, { className: "w-5 h-5 text-primary" }),
                                            "Você vai receber:",
                                        ],
                                    }),
                                    i.jsx("div", {
                                        className: "grid gap-4",
                                        children: IC.map((d, f) =>
                                            i.jsxs(
                                                "div",
                                                {
                                                    className: "flex items-center gap-4 p-3 bg-background rounded-lg",
                                                    children: [
                                                        i.jsx("img", {
                                                            src: d.image,
                                                            alt: d.name,
                                                            className: "w-16 h-16 object-contain",
                                                        }),
                                                        i.jsxs("div", {
                                                            className: "text-left flex-1",
                                                            children: [
                                                                i.jsx("p", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: d.name,
                                                                }),
                                                                i.jsx("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: d.description,
                                                                }),
                                                            ],
                                                        }),
                                                        i.jsx(Ft, { className: "w-6 h-6 text-primary flex-shrink-0" }),
                                                    ],
                                                },
                                                f
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    i.jsxs(Le, {
                                        onClick: a,
                                        size: "lg",
                                        className:
                                            "w-full bg-gradient-brasil hover:opacity-90 text-base md:text-lg h-12 md:h-14 shadow-lg",
                                        children: [i.jsx(bo, { className: "w-5 h-5 mr-2" }), "SIM! Adicionar Mini Kit"],
                                    }),
                                    i.jsxs(Le, {
                                        onClick: l,
                                        variant: "ghost",
                                        size: "lg",
                                        className: "w-full text-muted-foreground hover:text-foreground",
                                        children: ["Não, seguir com R$ ", n.toFixed(2)],
                                    }),
                                ],
                            }),
                            i.jsx("div", {
                                className: "text-center mt-4",
                                children: i.jsx(ve, {
                                    variant: "outline",
                                    className: "text-xs",
                                    children: "⚡ Oferta válida apenas neste momento",
                                }),
                            }),
                        ],
                    }),
                }),
            });
        }
        return i.jsx(eu, {
            open: e,
            onOpenChange: t,
            children: i.jsxs(gi, {
                className: "max-w-2xl max-h-[90vh] overflow-y-auto",
                children: [
                    i.jsxs(yd, {
                        children: [
                            i.jsxs("div", {
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    i.jsx("img", { src: Eo, alt: "Brasil", className: "w-12 h-12" }),
                                    i.jsx(wd, { className: "text-2xl md:text-3xl", children: "Oferta Especial" }),
                                ],
                            }),
                            i.jsx(bd, {
                                className: "text-center",
                                children: i.jsxs(ve, {
                                    className: "bg-gradient-patriota text-white px-4 py-1 mb-4 animate-pulse",
                                    children: [i.jsx(Ss, { className: "w-4 h-4 mr-2 inline" }), "OFERTA LIMITADA"],
                                }),
                            }),
                        ],
                    }),
                    i.jsxs("div", {
                        className: "space-y-6",
                        children: [
                            i.jsx("div", {
                                className: "flex justify-center",
                                children: i.jsx("img", {
                                    src: MC,
                                    alt: "Kit Completo",
                                    className: "w-48 h-48 object-contain",
                                }),
                            }),
                            i.jsxs("div", {
                                className: "text-center space-y-3",
                                children: [
                                    i.jsx("h3", {
                                        className: "text-xl md:text-2xl lg:text-3xl font-bold text-foreground",
                                        children: s
                                            ? "Você está a um passo de fortalecer ainda mais o Brasil! 🇧🇷"
                                            : "Você está a um passo de multiplicar sua ajuda ao Brasil! 🇧🇷",
                                    }),
                                    i.jsx("p", {
                                        className: "text-base md:text-lg text-muted-foreground",
                                        children: s
                                            ? i.jsxs(i.Fragment, {
                                                  children: [
                                                      "Com apenas ",
                                                      i.jsx("span", {
                                                          className: "text-primary font-bold",
                                                          children: "R$ 7,90 a mais",
                                                      }),
                                                      " (de",
                                                      " ",
                                                      i.jsx("span", { className: "line-through", children: "R$ 25" }),
                                                      " para",
                                                      " ",
                                                      i.jsx("span", {
                                                          className: "text-primary font-bold",
                                                          children: "R$ 32,90",
                                                      }),
                                                      "), você ajuda mais uma família e recebe ",
                                                      i.jsx("span", {
                                                          className: "text-primary font-semibold",
                                                          children: "+1 Kit",
                                                      }),
                                                      " para presentear.",
                                                  ],
                                              })
                                            : i.jsxs(i.Fragment, {
                                                  children: [
                                                      "Com apenas ",
                                                      i.jsxs("span", {
                                                          className: "text-primary font-bold",
                                                          children: [
                                                              "R$ ",
                                                              (r - n).toFixed(2).replace(".", ","),
                                                              " a mais",
                                                          ],
                                                      }),
                                                      " (de",
                                                      " ",
                                                      i.jsxs("span", {
                                                          className: "line-through",
                                                          children: ["R$ ", n.toFixed(2).replace(".", ",")],
                                                      }),
                                                      " para",
                                                      " ",
                                                      i.jsxs("span", {
                                                          className: "text-primary font-bold",
                                                          children: [
                                                              "R$ ",
                                                              r == null ? void 0 : r.toFixed(2).replace(".", ","),
                                                          ],
                                                      }),
                                                      "), você ajuda mais uma família e recebe ",
                                                      i.jsx("span", {
                                                          className: "text-primary font-semibold",
                                                          children: "+1 Kit",
                                                      }),
                                                      " para presentear.",
                                                  ],
                                              }),
                                    }),
                                    i.jsx("p", {
                                        className: "text-sm md:text-base text-muted-foreground italic",
                                        children: "Um pequeno gesto que muda o Brasil 💚💛",
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "bg-card rounded-xl p-6 border border-border",
                                children: [
                                    i.jsxs("h4", {
                                        className: "font-semibold text-foreground mb-4 flex items-center gap-2",
                                        children: [
                                            i.jsx(Wn, { className: "w-5 h-5 text-primary" }),
                                            s ? "Você vai receber:" : "Benefícios do upgrade:",
                                        ],
                                    }),
                                    i.jsx("div", {
                                        className: "space-y-3",
                                        children: i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsxs("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        i.jsx(Ft, { className: "w-5 h-5 text-primary flex-shrink-0" }),
                                                        i.jsxs("span", {
                                                            children: [
                                                                s ? "1 Kit Patriota completo" : "2 Kits completos",
                                                                " (camiseta, boné, acessórios)",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                i.jsxs("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        i.jsx(Ft, { className: "w-5 h-5 text-primary flex-shrink-0" }),
                                                        i.jsx("span", { children: "Frete grátis para todo Brasil" }),
                                                    ],
                                                }),
                                                i.jsxs("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        i.jsx(Ft, { className: "w-5 h-5 text-primary flex-shrink-0" }),
                                                        i.jsxs("span", {
                                                            children: [
                                                                "Impacto ",
                                                                s ? "maior" : "2x maior",
                                                                " na causa",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                !s &&
                                                    i.jsxs("div", {
                                                        className: "flex items-center gap-2 text-sm",
                                                        children: [
                                                            i.jsx(Ft, {
                                                                className: "w-5 h-5 text-primary flex-shrink-0",
                                                            }),
                                                            i.jsx("span", {
                                                                children: "Presenteie alguém especial com fé e devoção",
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    i.jsxs(Le, {
                                        onClick: a,
                                        size: "lg",
                                        className:
                                            "w-full bg-gradient-brasil hover:opacity-90 text-base md:text-lg h-12 md:h-14",
                                        children: [
                                            i.jsx(bo, { className: "w-5 h-5 mr-2" }),
                                            s
                                                ? "✨ Sim, quero continuar por R$ 32,90"
                                                : `✨ Sim, quero continuar por R$ ${r == null ? void 0 : r.toFixed(2).replace(".", ",")}`,
                                        ],
                                    }),
                                    i.jsxs(Le, {
                                        onClick: l,
                                        variant: "ghost",
                                        size: "lg",
                                        className: "w-full text-muted-foreground hover:text-foreground",
                                        children: ["Seguir com R$ ", n.toFixed(2).replace(".", ",")],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ya = [20, 25, 30, 40, 60, 100, 150, 250, 500],
    LC = 30,
    Ir = 30,
    DC = () => {
        const e = JS(),
            [t, n] = h.useState(null),
            [r, o] = h.useState(!1),
            [s, a] = h.useState(0),
            [l, c] = h.useState(void 0);
        h.useEffect(() => {
            const d = document.getElementById("paradisePlayer_1764320678677"),
                f = document.getElementById("paradisePlayer_1764320678677MuteOverlay"),
                v = document.getElementById("paradisePlayer_1764320678677FakeProgressBar");
            if (!d) {
                console.error("Paradise Player: Video element not found.");
                return;
            }
            const m = () => {
                d.paused ? d.play() : d.pause();
            };
            d.addEventListener("click", m), (d.playbackRate = 1), (d.muted = !0);
            const b = d.play();
            b !== void 0 && b.catch(() => {});
            const p = () => {
                (d.muted = !1),
                    (d.currentTime = 0),
                    d.play(),
                    f &&
                        ((f.style.opacity = "0"),
                        setTimeout(() => {
                            f.style.display = "none";
                        }, 300));
            };
            f && (f.addEventListener("click", p, { once: !0 }), f.addEventListener("touchend", p, { once: !0 }));
            const y = () => {
                if (!d.duration || !v) return;
                const g = d.currentTime / d.duration;
                v.style.width = `${Math.min(g, 1) * 100}%`;
            };
            return (
                d.addEventListener("timeupdate", y),
                () => {
                    d.removeEventListener("click", m), d.removeEventListener("timeupdate", y);
                }
            );
        }, []);
        const u = () => {
            if (!t) {
                Lr.error("Por favor, selecione um valor de doação");
                return;
            }
            const d = ya.indexOf(t);
            t === 20
                ? (a(t), c(void 0), o(!0))
                : t === 25
                  ? (a(25), c(void 0), o(!0))
                  : d !== -1 && d < ya.length - 1
                    ? (a(t), c(ya[d + 1]), o(!0))
                    : e("/personalizar", { state: { selectedValue: t, numberOfKits: 1 } });
        };
        return i.jsxs("section", {
            id: "doacao",
            className: "py-8 md:py-16 px-4 bg-gradient-to-b from-background to-muted/20",
            children: [
                i.jsxs("div", {
                    className: "container max-w-6xl mx-auto",
                    children: [
                        i.jsxs("div", {
                            className: "text-center space-y-4 md:space-y-6 mb-8 md:mb-12 animate-fade-in-up",
                            children: [
                                i.jsx(ve, {
                                    variant: "secondary",
                                    className:
                                        "mb-2 bg-brasil-yellow text-foreground text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2",
                                    children: "✨ Doe agora e receba seu Kit Patriota completo em casa! 🇧🇷",
                                }),
                                i.jsx("h1", {
                                    className:
                                        "text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-brasil bg-clip-text text-transparent leading-tight px-2",
                                    children: "Defenda o Brasil com Sua Contribuição",
                                }),
                                i.jsxs("p", {
                                    className:
                                        "text-base md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto font-medium px-4",
                                    children: [
                                        "Junte-se a ",
                                        i.jsx("span", {
                                            className: "text-primary font-bold",
                                            children: "mais de 15 mil patriotas",
                                        }),
                                        " que estão fazendo a diferença na defesa da liberdade",
                                    ],
                                }),
                                i.jsxs("div", {
                                    className: "flex items-center justify-center gap-2 text-muted-foreground",
                                    children: [
                                        i.jsx(li, { className: "w-4 h-4 md:w-5 md:h-5 text-primary" }),
                                        i.jsx("span", {
                                            className: "text-xs md:text-sm",
                                            children: "Doação 100% segura e transparente",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsxs("div", {
                            className: "mb-8 md:mb-12 w-full overflow-hidden",
                            children: [
                                i.jsx("div", {
                                    id: "paradisePlayer_1764320678677Container",
                                    className: "paradise-player-container",
                                    style: {
                                        position: "relative",
                                        width: "100%",
                                        maxWidth: "800px",
                                        margin: "20px auto",
                                    },
                                    children: i.jsxs("div", {
                                        id: "paradisePlayer_1764320678677Wrapper",
                                        style: {
                                            position: "relative",
                                            width: "100%",
                                            paddingBottom: "177.78%",
                                            background: "#000",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                        },
                                        children: [
                                            i.jsxs("video", {
                                                id: "paradisePlayer_1764320678677",
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    cursor: "pointer",
                                                },
                                                playsInline: !0,
                                                preload: "auto",
                                                onContextMenu: (d) => d.preventDefault(),
                                                children: [
                                                    i.jsx("source", { src: "/vsl.mp4", type: "video/mp4" }),
                                                    "Seu navegador não suporta vídeos HTML5.",
                                                ],
                                            }),
                                            i.jsx("div", {
                                                id: "paradisePlayer_1764320678677MuteOverlay",
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    background: "#00000080",
                                                    cursor: "pointer",
                                                    zIndex: 20,
                                                    backdropFilter: "blur(2px)",
                                                },
                                                children: i.jsxs("div", {
                                                    id: "paradisePlayer_1764320678677MuteButton",
                                                    className: "paradise-mute-bounce",
                                                    style: {
                                                        background: "#00c27a",
                                                        padding: "clamp(1.2rem, 5vw, 2rem) clamp(1.5rem, 7vw, 3rem)",
                                                        borderRadius: "12px",
                                                        textAlign: "center",
                                                        color: "white",
                                                        transition: "transform 0.3s ease",
                                                        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                                                        maxWidth: "90vw",
                                                        boxSizing: "border-box",
                                                    },
                                                    children: [
                                                        i.jsx("div", {
                                                            style: {
                                                                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                                                                fontWeight: 700,
                                                                marginBottom: "0.5rem",
                                                            },
                                                            children: "Seu vídeo já começou!",
                                                        }),
                                                        i.jsx("div", {
                                                            style: { marginBottom: "0.6rem" },
                                                            children: i.jsx("img", {
                                                                src: "https://i.postimg.cc/2j9d2jbv/R.png",
                                                                alt: "Unmute",
                                                                style: {
                                                                    width: "clamp(2.5rem, 8vw, 3.5rem)",
                                                                    height: "clamp(2.5rem, 8vw, 3.5rem)",
                                                                    filter: "brightness(0) invert(1)",
                                                                    display: "inline-block",
                                                                },
                                                            }),
                                                        }),
                                                        i.jsx("div", {
                                                            style: {
                                                                fontSize: "clamp(0.8rem, 2.2vw, 1rem)",
                                                                fontWeight: 500,
                                                                opacity: 0.95,
                                                            },
                                                            children: "Clique para ativar o som",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            i.jsx("div", {
                                                id: "paradisePlayer_1764320678677FakeProgressContainer",
                                                style: {
                                                    position: "absolute",
                                                    bottom: "5px",
                                                    left: "10px",
                                                    right: "10px",
                                                    height: "4px",
                                                    background: "rgba(255,255,255,0.2)",
                                                    borderRadius: "2px",
                                                    zIndex: 20,
                                                    pointerEvents: "none",
                                                    transition: "bottom 0.3s ease",
                                                },
                                                children: i.jsx("div", {
                                                    id: "paradisePlayer_1764320678677FakeProgressBar",
                                                    style: {
                                                        height: "100%",
                                                        background: "linear-gradient(90deg, #00c27a, #21bfeb)",
                                                        borderRadius: "2px",
                                                        width: "0%",
                                                        boxShadow: "0 0 8px #00c27a80",
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                i.jsx("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: `
            #paradisePlayer_1764320678677::-webkit-media-controls, 
            #paradisePlayer_1764320678677::-webkit-media-controls-enclosure { 
              display: none !important; 
            }
            @keyframes paradise-fadeInUp { 
              from { opacity: 0; transform: translateY(20px); } 
              to { opacity: 1; transform: translateY(0); } 
            }
            @keyframes paradise-pulse { 
              0%, 100% { transform: scale(1); } 
              50% { transform: scale(1.05); } 
            }
            @keyframes paradise-glow { 
              0%, 100% { box-shadow: 0 0 10px #8b5cf650; } 
              50% { box-shadow: 0 0 20px #8b5cf680, 0 0 30px #8b5cf660; } 
            }
            @keyframes paradise-shake { 
              0%, 100% { transform: translateX(0); } 
              25% { transform: translateX(-3px); } 
              75% { transform: translateX(3px); } 
            }
            @keyframes paradise-bounce { 
              0%, 100% { transform: translateY(0); } 
              50% { transform: translateY(-8px); } 
            }
            @keyframes paradise-mute-bounce { 
              0%, 100% { transform: translateY(0); } 
              50% { transform: translateY(calc(-10px * var(--animation-intensity))); } 
            }
            @keyframes paradise-mute-pulse { 
              0%, 100% { transform: scale(1); } 
              50% { transform: scale(calc(1 + 0.05 * var(--animation-intensity))); } 
            }
            @keyframes paradise-mute-shake { 
              0%, 100% { transform: translateX(0); } 
              25% { transform: translateX(calc(-5px * var(--animation-intensity))); } 
              75% { transform: translateX(calc(5px * var(--animation-intensity))); } 
            }
            @keyframes paradise-mute-glow { 
              0%, 100% { box-shadow: 0 0 calc(10px * var(--animation-intensity)) #00c27a50; } 
              50% { box-shadow: 0 0 calc(20px * var(--animation-intensity)) #00c27a80, 0 0 calc(30px * var(--animation-intensity)) #00c27a60; } 
            }
            @keyframes paradise-mute-scale { 
              0%, 100% { transform: scale(1); } 
              50% { transform: scale(calc(1 + 0.1 * var(--animation-intensity))); } 
            }
            @keyframes paradise-mute-rotate { 
              0% { transform: rotate(0deg); } 
              100% { transform: rotate(360deg); } 
            }
            .paradise-player-container * { 
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
            }
            .paradise-mute-bounce { 
              animation: paradise-mute-bounce 2s ease-in-out infinite; 
            }
          `,
                                    },
                                }),
                            ],
                        }),
                        i.jsxs("div", {
                            className: "space-y-6 md:space-y-10",
                            children: [
                                i.jsxs("div", {
                                    children: [
                                        i.jsx("h3", {
                                            className:
                                                "text-center text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground px-4",
                                            children: "Escolha Seu Valor de Apoio",
                                        }),
                                        i.jsxs("p", {
                                            className:
                                                "text-center text-sm md:text-base text-muted-foreground mb-6 md:mb-8 px-4",
                                            children: [
                                                "A partir de ",
                                                i.jsx("span", {
                                                    className: "text-primary font-bold text-base md:text-lg",
                                                    children: "R$30",
                                                }),
                                                " você recebe o Kit Patriota completo + Frete Grátis",
                                            ],
                                        }),
                                        i.jsx("div", {
                                            className: "grid grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto px-2",
                                            children: ya.map((d) => {
                                                const f = t === d,
                                                    v = d === LC,
                                                    m = d >= Ir;
                                                return i.jsxs(
                                                    "div",
                                                    {
                                                        className: "relative pt-6 md:pt-8",
                                                        children: [
                                                            v &&
                                                                i.jsx(ve, {
                                                                    variant: "secondary",
                                                                    className:
                                                                        "absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 z-10 bg-brasil-yellow text-foreground animate-pulse font-bold text-[10px] md:text-xs px-2 py-0.5 whitespace-nowrap",
                                                                    children: "⭐ MELHOR",
                                                                }),
                                                            i.jsxs(Le, {
                                                                onClick: () => n(d),
                                                                variant: f ? "default" : "outline",
                                                                className: `w-full h-16 md:h-20 flex flex-col items-center justify-center gap-0.5 md:gap-1 text-base md:text-lg font-bold transition-all relative overflow-hidden ${f ? "bg-gradient-brasil text-primary-foreground shadow-xl shadow-primary/50 scale-105 md:scale-110 animate-glow border-2 border-primary" : v ? "border-2 border-brasil-yellow hover:border-brasil-yellow hover:bg-brasil-yellow/10 hover:scale-105" : "hover:border-primary hover:text-primary hover:scale-105"}`,
                                                                children: [
                                                                    i.jsxs("span", {
                                                                        className: "text-lg md:text-2xl font-black",
                                                                        children: ["R$ ", d],
                                                                    }),
                                                                    m &&
                                                                        i.jsxs("span", {
                                                                            className: `text-[9px] md:text-xs font-semibold flex items-center gap-0.5 md:gap-1 ${f ? "text-primary-foreground/90" : "text-primary"}`,
                                                                            children: [
                                                                                i.jsx(bo, {
                                                                                    className:
                                                                                        "w-2.5 h-2.5 md:w-3 md:h-3 fill-current",
                                                                                }),
                                                                                "KIT GRÁTIS",
                                                                            ],
                                                                        }),
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    d
                                                );
                                            }),
                                        }),
                                        t &&
                                            t >= Ir &&
                                            i.jsx("div", {
                                                className:
                                                    "mt-4 md:mt-6 p-3 md:p-4 bg-primary/10 rounded-lg border-2 border-primary/30 animate-fade-in mx-2",
                                                children: i.jsxs("div", {
                                                    className:
                                                        "flex items-center justify-center gap-2 text-primary font-semibold text-sm md:text-base text-center",
                                                    children: [
                                                        i.jsx(Wn, { className: "w-4 h-4 md:w-5 md:h-5 flex-shrink-0" }),
                                                        i.jsx("span", {
                                                            children:
                                                                "Você receberá o Kit Patriota completo + Frete Grátis!",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        t &&
                                            t < Ir &&
                                            i.jsx("div", {
                                                className:
                                                    "mt-4 md:mt-6 p-3 md:p-4 bg-muted/50 rounded-lg border border-border animate-fade-in mx-2",
                                                children: i.jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        i.jsxs("p", {
                                                            className: "text-muted-foreground mb-2",
                                                            children: [
                                                                "Faltam apenas ",
                                                                i.jsxs("span", {
                                                                    className: "font-bold text-primary",
                                                                    children: ["R$ ", Ir - t],
                                                                }),
                                                                " para você ganhar o Kit Patriota completo!",
                                                            ],
                                                        }),
                                                        i.jsxs(Le, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: () => n(Ir),
                                                            className:
                                                                "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                                                            children: ["Aumentar para R$ ", Ir],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                    ],
                                }),
                                i.jsxs("div", {
                                    className: "text-center space-y-4",
                                    children: [
                                        i.jsxs(Le, {
                                            onClick: u,
                                            size: "lg",
                                            className: `h-16 md:h-20 px-4 md:px-16 text-base md:text-xl font-bold shadow-2xl transition-all w-full max-w-full ${t ? "bg-gradient-brasil hover:opacity-90 hover:scale-105 shadow-primary/50" : "bg-gradient-brasil animate-pulse-gentle"}`,
                                            children: [
                                                i.jsx(wo, {
                                                    className: "w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0",
                                                }),
                                                i.jsx("span", {
                                                    className: "truncate",
                                                    children: t ? `DOAR R$ ${t} AGORA` : "SELECIONE UM VALOR",
                                                }),
                                            ],
                                        }),
                                        t &&
                                            i.jsx("p", {
                                                className: "text-sm text-muted-foreground animate-fade-in",
                                                children:
                                                    "✓ Pagamento 100% seguro • ✓ Receba em casa • ✓ Certificado digital incluso",
                                            }),
                                        i.jsx("div", { className: "pt-2", children: i.jsx(_C, {}) }),
                                    ],
                                }),
                                i.jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8",
                                    children: [
                                        i.jsxs("div", {
                                            className: "flex items-center gap-3 text-sm text-muted-foreground",
                                            children: [
                                                i.jsx("div", {
                                                    className:
                                                        "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: i.jsx($s, { className: "w-4 h-4 text-primary" }),
                                                }),
                                                i.jsx("span", { children: "Entrega grátis em todo o Brasil" }),
                                            ],
                                        }),
                                        i.jsxs("div", {
                                            className: "flex items-center gap-3 text-sm text-muted-foreground",
                                            children: [
                                                i.jsx("div", {
                                                    className:
                                                        "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: i.jsx(bo, { className: "w-4 h-4 text-primary" }),
                                                }),
                                                i.jsx("span", { children: "Apoie a defesa da liberdade" }),
                                            ],
                                        }),
                                        i.jsxs("div", {
                                            className: "flex items-center gap-3 text-sm text-muted-foreground",
                                            children: [
                                                i.jsx("div", {
                                                    className:
                                                        "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: i.jsx(li, { className: "w-4 h-4 text-primary" }),
                                                }),
                                                i.jsx("span", { children: "Sua doação faz a diferença" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                i.jsx(kx, { open: r, onOpenChange: o, currentValue: s, nextValue: l }),
            ],
        });
    },
    br = h.forwardRef(({ className: e, ...t }, n) =>
        i.jsx("div", { ref: n, className: le("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t })
    );
br.displayName = "Card";
const FC = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx("div", { ref: n, className: le("flex flex-col space-y-1.5 p-6", e), ...t })
);
FC.displayName = "CardHeader";
const zC = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx("h3", { ref: n, className: le("text-2xl font-semibold leading-none tracking-tight", e), ...t })
);
zC.displayName = "CardTitle";
const $C = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx("p", { ref: n, className: le("text-sm text-muted-foreground", e), ...t })
);
$C.displayName = "CardDescription";
const BC = h.forwardRef(({ className: e, ...t }, n) => i.jsx("div", { ref: n, className: le("p-6 pt-0", e), ...t }));
BC.displayName = "CardContent";
const UC = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx("div", { ref: n, className: le("flex items-center p-6 pt-0", e), ...t })
);
UC.displayName = "CardFooter";
const VC = [
        {
            value: 20,
            label: "Apoiador",
            benefits: [
                { text: "Certificado digital", included: !0 },
                { text: "Kit Patriota completo", included: !1 },
                { text: "Frete grátis", included: !1 },
                { text: "Adesivos patrióticos", included: !1 },
            ],
            badge: null,
            highlight: !1,
        },
        {
            value: 25,
            label: "Patriota",
            benefits: [
                { text: "Certificado digital", included: !0 },
                { text: "Adesivos patrióticos", included: !0 },
                { text: "Kit Patriota completo", included: !1 },
                { text: "Frete grátis", included: !1 },
            ],
            badge: null,
            highlight: !1,
        },
        {
            value: 30,
            label: "Defensor",
            benefits: [
                { text: "Certificado digital", included: !0 },
                { text: "Kit Patriota completo", included: !0, highlight: !0 },
                { text: "Frete grátis", included: !0, highlight: !0 },
                { text: "Adesivos patrióticos", included: !0 },
            ],
            badge: "MAIS VANTAJOSO",
            highlight: !0,
            popularText: "Escolha de 67% dos apoiadores",
        },
        {
            value: 40,
            label: "Guardião",
            benefits: [
                { text: "Certificado digital", included: !0 },
                { text: "Kit Patriota completo", included: !0 },
                { text: "Garrafa térmica Brasil", included: !0, highlight: !0 },
                { text: "Frete grátis + Adesivos", included: !0 },
            ],
            badge: null,
            highlight: !1,
        },
    ],
    WC = () => {
        const [e, t] = h.useState(30),
            [n, r] = h.useState(!1),
            [o, s] = h.useState(0),
            [a, l] = h.useState(void 0),
            c = (u) => {
                t(u);
                const d = [20, 25, 30, 40, 60, 100, 150, 250, 500].indexOf(u);
                u === 20
                    ? (s(u), l(void 0), r(!0))
                    : u === 25
                      ? (s(25), l(void 0), r(!0))
                      : d !== -1 && d < 8
                        ? (s(u), l([20, 25, 30, 40, 60, 100, 150, 250, 500][d + 1]), r(!0))
                        : lt("/personalizar", { selectedValue: u, numberOfKits: 1 });
            };
        return i.jsxs("section", {
            id: "comparacao",
            className: "py-8 md:py-16 px-4 bg-muted/20 overflow-x-hidden",
            children: [
                i.jsxs("div", {
                    className: "container max-w-7xl mx-auto",
                    children: [
                        i.jsxs("div", {
                            className: "text-center space-y-3 md:space-y-4 mb-8 md:mb-12 animate-fade-in-up",
                            children: [
                                i.jsx(ve, {
                                    variant: "secondary",
                                    className: "bg-brasil-yellow text-foreground text-sm md:text-base px-4 py-1.5",
                                    children: "ESCOLHA SEU NÍVEL DE APOIO",
                                }),
                                i.jsx("h2", {
                                    className: "text-2xl md:text-3xl lg:text-5xl font-bold text-foreground px-4",
                                    children: "Compare os Benefícios",
                                }),
                                i.jsx("p", {
                                    className:
                                        "text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4",
                                    children:
                                        "Cada contribuição faz a diferença. Escolha o valor que mais se adequa ao seu apoio.",
                                }),
                            ],
                        }),
                        i.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8",
                            children: VC.map((u, d) =>
                                i.jsxs(
                                    br,
                                    {
                                        className: `relative p-4 md:p-6 transition-all hover:scale-105 animate-fade-in-up ${u.highlight ? "border-2 border-brasil-yellow shadow-patriota scale-[1.02] md:scale-105 bg-gradient-to-br from-card to-brasil-yellow/5" : "hover:shadow-brasil"}`,
                                        style: { animationDelay: `${d * 100}ms` },
                                        children: [
                                            u.badge &&
                                                i.jsxs(ve, {
                                                    variant: "secondary",
                                                    className:
                                                        "absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-brasil-yellow text-foreground animate-pulse whitespace-nowrap z-10 shadow-lg text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1",
                                                    children: [
                                                        i.jsx(Kw, {
                                                            className: "w-2.5 h-2.5 md:w-3 md:h-3 mr-0.5 md:mr-1",
                                                        }),
                                                        u.badge,
                                                    ],
                                                }),
                                            i.jsxs("div", {
                                                className: "text-center mb-4 md:mb-6 mt-1 md:mt-2",
                                                children: [
                                                    i.jsx("h3", {
                                                        className:
                                                            "text-base md:text-lg font-semibold text-muted-foreground mb-1 md:mb-2",
                                                        children: u.label,
                                                    }),
                                                    i.jsx("div", {
                                                        className: "flex items-baseline justify-center gap-1",
                                                        children: i.jsxs("span", {
                                                            className: "text-2xl md:text-4xl font-bold text-foreground",
                                                            children: ["R$ ", u.value],
                                                        }),
                                                    }),
                                                    u.popularText &&
                                                        i.jsxs("p", {
                                                            className:
                                                                "text-xs md:text-sm text-primary font-medium mt-1 md:mt-2 flex items-center justify-center gap-0.5 md:gap-1",
                                                            children: [
                                                                i.jsx(Es, {
                                                                    className:
                                                                        "w-3 h-3 md:w-4 md:h-4 fill-primary flex-shrink-0",
                                                                }),
                                                                u.popularText,
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            i.jsx("div", {
                                                className: "space-y-2 md:space-y-3 mb-4 md:mb-6",
                                                children: u.benefits.map((f, v) =>
                                                    i.jsxs(
                                                        "div",
                                                        {
                                                            className: `flex items-start gap-1.5 md:gap-2 text-xs md:text-sm ${f.highlight ? "bg-primary/10 -mx-2 px-2 py-1 rounded" : ""}`,
                                                            children: [
                                                                f.included
                                                                    ? i.jsx(Ft, {
                                                                          className: `w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${(f.highlight, "text-primary")}`,
                                                                      })
                                                                    : i.jsx($i, {
                                                                          className:
                                                                              "w-4 h-4 md:w-5 md:h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5",
                                                                      }),
                                                                i.jsx("span", {
                                                                    className: `${f.included ? "text-foreground" : "text-muted-foreground/60"} ${f.highlight ? "font-semibold" : ""}`,
                                                                    children: f.text,
                                                                }),
                                                                f.highlight &&
                                                                    i.jsx(Wn, {
                                                                        className:
                                                                            "w-3 h-3 md:w-4 md:h-4 text-primary ml-auto flex-shrink-0",
                                                                    }),
                                                            ],
                                                        },
                                                        v
                                                    )
                                                ),
                                            }),
                                            i.jsx(Le, {
                                                onClick: () => c(u.value),
                                                variant: u.highlight ? "default" : "outline",
                                                className: `w-full h-10 md:h-11 text-sm md:text-base ${u.highlight ? "bg-gradient-brasil hover:opacity-90 shadow-lg" : "hover:border-primary hover:text-primary"}`,
                                                children: u.highlight
                                                    ? i.jsxs(i.Fragment, {
                                                          children: [
                                                              i.jsx($s, { className: "w-4 h-4 mr-2" }),
                                                              "ESCOLHER ESTE",
                                                          ],
                                                      })
                                                    : "SELECIONAR",
                                            }),
                                        ],
                                    },
                                    u.value
                                )
                            ),
                        }),
                        i.jsxs("div", {
                            className: "text-center",
                            children: [
                                i.jsx("p", {
                                    className: "text-sm text-muted-foreground mb-4",
                                    children: "Ou escolha outro valor de contribuição:",
                                }),
                                i.jsx("div", {
                                    className: "flex flex-wrap justify-center gap-3",
                                    children: [60, 100, 150, 250, 500].map((u) =>
                                        i.jsxs(
                                            Le,
                                            {
                                                onClick: () => c(u),
                                                variant: "outline",
                                                size: "lg",
                                                className:
                                                    "hover:border-primary hover:text-primary hover:scale-105 transition-all",
                                                children: ["R$ ", u],
                                            },
                                            u
                                        )
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                i.jsx(kx, { open: n, onOpenChange: r, currentValue: o, nextValue: a }),
            ],
        });
    },
    Px = "/assets/camiseta-produto-xM10BeYb.png",
    Rx = "/assets/bone-DbrZwzph.png",
    HC = "/assets/garrafa-D-KQDavr.png",
    KC = [
        {
            name: "Camiseta Patriota",
            description: "Camiseta verde de alta qualidade com estampa 'Brasil Acima de Tudo'",
            image: Px,
        },
        { name: "Boné Patriota", description: "Boné com bordado da bandeira do Brasil", image: Rx },
        { name: "Garrafa Brasil", description: "Garrafa térmica com bandeira do Brasil", image: HC },
        { name: "Pulseira", description: "Pulseira de silicone amarela com texto 'BRASIL' em verde", image: Cx },
        { name: "Adesivos", description: "Cartela com adesivos patrióticos e mensagens motivacionais", image: jx },
    ],
    GC = () =>
        i.jsx("section", {
            id: "produto",
            className: "py-8 md:py-16 px-4 bg-background",
            children: i.jsxs("div", {
                className: "container max-w-6xl mx-auto",
                children: [
                    i.jsxs("div", {
                        className: "text-center space-y-3 md:space-y-4 mb-8 md:mb-12 animate-fade-in-up",
                        children: [
                            i.jsx(ve, {
                                variant: "secondary",
                                className: "bg-brasil-yellow text-foreground text-sm md:text-base px-4 py-1.5",
                                children: "O QUE ESTÁ INCLUSO",
                            }),
                            i.jsx("h2", {
                                className: "text-2xl md:text-3xl lg:text-5xl font-bold text-foreground px-4",
                                children: "Kit Completo Juntos pelo Brasil",
                            }),
                            i.jsx("p", {
                                className:
                                    "text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4",
                                children:
                                    "Itens de qualidade premium para você demonstrar seu patriotismo e apoio à causa",
                            }),
                        ],
                    }),
                    i.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
                        children: KC.map((e, t) =>
                            i.jsxs(
                                "div",
                                {
                                    className:
                                        "group bg-card rounded-lg border p-4 md:p-6 hover:shadow-brasil transition-all hover:scale-105 animate-fade-in-up",
                                    style: { animationDelay: `${t * 150}ms` },
                                    children: [
                                        i.jsx("div", {
                                            className: "aspect-square mb-3 md:mb-4 overflow-hidden rounded-lg bg-muted",
                                            children: i.jsx("img", {
                                                src: e.image,
                                                alt: e.name,
                                                className:
                                                    "w-full h-full object-cover group-hover:scale-110 transition-transform",
                                            }),
                                        }),
                                        i.jsx("h3", {
                                            className: "text-base md:text-xl font-bold mb-1 md:mb-2 text-foreground",
                                            children: e.name,
                                        }),
                                        i.jsx("p", {
                                            className: "text-xs md:text-sm text-muted-foreground",
                                            children: e.description,
                                        }),
                                    ],
                                },
                                e.name
                            )
                        ),
                    }),
                ],
            }),
        }),
    QC = "/assets/depoimento-mariana-B0DBjAns.jpeg",
    YC = "/assets/depoimento-roberto-QPhodija.jpeg",
    qC = "/assets/depoimento-carlos-Scbwywf2.jpeg",
    XC = [
        { icon: $g, value: "3.247", label: "Kits Entregues", color: "text-primary" },
        { icon: Es, value: "4.7/5.0", label: "Avaliação Média", color: "text-brasil-yellow" },
        { icon: Bg, value: "94%", label: "Satisfação", color: "text-primary" },
        { icon: zi, value: "4.800+", label: "Apoiadores Ativos", color: "text-accent" },
    ],
    JC = [
        {
            name: "Mariana Santos",
            rating: 5,
            verified: !0,
            comment:
                "Ameiiiii, comprei o kit e ainda presenteei minha familia, mas com principal objetivo ajudar nosso MITO Bolsonaro, ele que fez tanto pela gente e sou eternamente grata. A camiseta ficou linda e o boné é top demais! 💚💛",
            highlight: "Compra Verificada",
            image: QC,
        },
        {
            name: "Roberto Silva",
            rating: 5,
            verified: !0,
            comment:
                "Cara, que kit massa! Chegou rapidinho, veio tudo certinho e a qualidade tá show. Já tô usando a camiseta no churrasco e todo mundo quer saber onde comprou kkkk. Vale demais apoiar a causa e ainda receber esse presente!",
            highlight: "Entrega Rápida",
            image: YC,
        },
        {
            name: "Carlos Mendes",
            rating: 5,
            verified: !0,
            comment:
                "Comprei 2 kits, um pra mim e outro pro meu sogro. A gente usa sempre e já virou nosso uniforme dos domingos kkk. Boné é confortável, camiseta não encolhe e os adesivos já tão colados no carro. Valeu cada centavo!",
            highlight: "Perfeito pra Presentear",
            image: qC,
        },
    ],
    ZC = () =>
        i.jsx("section", {
            id: "avaliacoes",
            className: "py-16 px-4 bg-background",
            children: i.jsxs("div", {
                className: "container max-w-6xl mx-auto",
                children: [
                    i.jsxs("div", {
                        className: "text-center space-y-4 mb-12 animate-fade-in-up",
                        children: [
                            i.jsx(ve, {
                                variant: "secondary",
                                className: "bg-brasil-yellow text-foreground",
                                children: "DEPOIMENTOS REAIS",
                            }),
                            i.jsx("h2", {
                                className: "text-3xl md:text-5xl font-bold text-foreground",
                                children: "O Que Nossos Apoiadores Dizem",
                            }),
                            i.jsx("p", {
                                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                                children: "Veja o que nossos apoiadores estão dizendo sobre o Kit Patriota",
                            }),
                        ],
                    }),
                    i.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
                        children: XC.map((e, t) =>
                            i.jsxs(
                                br,
                                {
                                    className:
                                        "p-6 text-center hover:shadow-brasil transition-all animate-fade-in-up hover:scale-105",
                                    style: { animationDelay: `${t * 100}ms` },
                                    children: [
                                        i.jsx("div", {
                                            className: "flex justify-center mb-3",
                                            children: i.jsx("div", {
                                                className:
                                                    "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                                                children: i.jsx(e.icon, { className: `w-6 h-6 ${e.color}` }),
                                            }),
                                        }),
                                        i.jsx("div", {
                                            className: "text-3xl font-bold text-foreground mb-1",
                                            children: e.value,
                                        }),
                                        i.jsx("div", { className: "text-sm text-muted-foreground", children: e.label }),
                                    ],
                                },
                                e.label
                            )
                        ),
                    }),
                    i.jsx("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: JC.map((e, t) =>
                            i.jsxs(
                                br,
                                {
                                    className: "p-6 animate-fade-in-up hover:shadow-brasil transition-all",
                                    style: { animationDelay: `${t * 150}ms` },
                                    children: [
                                        i.jsxs("div", {
                                            className: "flex items-start gap-4 mb-4",
                                            children: [
                                                i.jsx("img", {
                                                    src: e.image,
                                                    alt: e.name,
                                                    className: "w-14 h-14 rounded-full object-cover",
                                                }),
                                                i.jsxs("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        i.jsxs("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                i.jsx("h4", {
                                                                    className: "font-bold text-foreground",
                                                                    children: e.name,
                                                                }),
                                                                e.verified &&
                                                                    i.jsx(ve, {
                                                                        variant: "secondary",
                                                                        className: "text-xs bg-primary/10 text-primary",
                                                                        children: "✓ Compra Verificada",
                                                                    }),
                                                            ],
                                                        }),
                                                        i.jsxs("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                i.jsx("div", {
                                                                    className: "flex gap-0.5",
                                                                    children: [...Array(e.rating)].map((n, r) =>
                                                                        i.jsx(
                                                                            Es,
                                                                            {
                                                                                className:
                                                                                    "w-4 h-4 fill-brasil-yellow text-brasil-yellow",
                                                                            },
                                                                            r
                                                                        )
                                                                    ),
                                                                }),
                                                                i.jsx(ve, {
                                                                    variant: "outline",
                                                                    className: "text-xs border-primary/30 text-primary",
                                                                    children: e.highlight,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        i.jsxs("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed",
                                            children: ['"', e.comment, '"'],
                                        }),
                                    ],
                                },
                                e.name
                            )
                        ),
                    }),
                    i.jsxs("div", {
                        className: "mt-12 flex flex-wrap justify-center gap-6 items-center",
                        children: [
                            i.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                    i.jsx("div", {
                                        className:
                                            "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                                        children: i.jsx($g, { className: "w-4 h-4 text-primary" }),
                                    }),
                                    i.jsx("span", { children: "Entrega Garantida" }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                    i.jsx("div", {
                                        className:
                                            "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                                        children: i.jsx(Bg, { className: "w-4 h-4 text-primary" }),
                                    }),
                                    i.jsx("span", { children: "Qualidade Certificada" }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                    i.jsx("div", {
                                        className:
                                            "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                                        children: i.jsx(Es, { className: "w-4 h-4 text-primary" }),
                                    }),
                                    i.jsx("span", { children: "94% Recomendam" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
var Nd = "Progress",
    Sd = 100,
    [ej, tk] = un(Nd),
    [tj, nj] = ej(Nd),
    Tx = h.forwardRef((e, t) => {
        const { __scopeProgress: n, value: r = null, max: o, getValueLabel: s = rj, ...a } = e;
        (o || o === 0) && !Lm(o) && console.error(oj(`${o}`, "Progress"));
        const l = Lm(o) ? o : Sd;
        r !== null && !Dm(r, l) && console.error(sj(`${r}`, "Progress"));
        const c = Dm(r, l) ? r : null,
            u = vi(c) ? s(c, l) : void 0;
        return i.jsx(tj, {
            scope: n,
            value: c,
            max: l,
            children: i.jsx(ne.div, {
                "aria-valuemax": l,
                "aria-valuemin": 0,
                "aria-valuenow": vi(c) ? c : void 0,
                "aria-valuetext": u,
                role: "progressbar",
                "data-state": _x(c, l),
                "data-value": c ?? void 0,
                "data-max": l,
                ...a,
                ref: t,
            }),
        });
    });
Tx.displayName = Nd;
var Ax = "ProgressIndicator",
    Ox = h.forwardRef((e, t) => {
        const { __scopeProgress: n, ...r } = e,
            o = nj(Ax, n);
        return i.jsx(ne.div, {
            "data-state": _x(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...r,
            ref: t,
        });
    });
Ox.displayName = Ax;
function rj(e, t) {
    return `${Math.round((e / t) * 100)}%`;
}
function _x(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function vi(e) {
    return typeof e == "number";
}
function Lm(e) {
    return vi(e) && !isNaN(e) && e > 0;
}
function Dm(e, t) {
    return vi(e) && !isNaN(e) && e <= t && e >= 0;
}
function oj(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Sd}\`.`;
}
function sj(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Sd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Mx = Tx,
    aj = Ox;
const Ix = h.forwardRef(({ className: e, value: t, ...n }, r) =>
    i.jsx(Mx, {
        ref: r,
        className: le("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
        ...n,
        children: i.jsx(aj, {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: { transform: `translateX(-${100 - (t || 0)}%)` },
        }),
    })
);
Ix.displayName = Mx.displayName;
const ij = [
        { icon: Wn, label: "Kits Distribuídos", value: "3.247", color: "text-accent" },
        { icon: bo, label: "Doações Arrecadadas", value: "R$ 97K", color: "text-primary" },
        { icon: wo, label: "Estados Atendidos", value: "18", color: "text-secondary" },
        { icon: zi, label: "Apoiadores", value: "4.800", color: "text-accent" },
    ],
    lj = [
        { label: "Ações de Mobilização Política", percentage: 60, color: "bg-accent" },
        { label: "Campanhas e Material de Divulgação", percentage: 25, color: "bg-primary" },
        { label: "Administração e Logística", percentage: 15, color: "bg-secondary" },
    ],
    cj = () =>
        i.jsx("section", {
            id: "impacto",
            className: "py-16 px-4 bg-background",
            children: i.jsxs("div", {
                className: "container max-w-6xl mx-auto",
                children: [
                    i.jsxs("div", {
                        className: "text-center space-y-4 mb-12 animate-fade-in-up",
                        children: [
                            i.jsx(ve, {
                                variant: "secondary",
                                className: "bg-brasil-yellow text-foreground",
                                children: "NOSSO IMPACTO",
                            }),
                            i.jsx("h2", {
                                className: "text-3xl md:text-5xl font-bold text-foreground",
                                children: "Juntos, Fazemos a Diferença",
                            }),
                        ],
                    }),
                    i.jsx("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                        children: ij.map((e, t) => {
                            const n = e.icon;
                            return i.jsxs(
                                br,
                                {
                                    className: "p-6 text-center animate-fade-in-up hover:shadow-brasil transition-all",
                                    style: { animationDelay: `${t * 100}ms` },
                                    children: [
                                        i.jsx("div", {
                                            className: `w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center ${e.color}`,
                                            children: i.jsx(n, { className: "w-6 h-6" }),
                                        }),
                                        i.jsx("div", {
                                            className: "text-3xl font-bold mb-1 text-foreground",
                                            children: e.value,
                                        }),
                                        i.jsx("div", { className: "text-sm text-muted-foreground", children: e.label }),
                                    ],
                                },
                                e.label
                            );
                        }),
                    }),
                    i.jsxs(br, {
                        className: "p-8 animate-fade-in-up",
                        children: [
                            i.jsx("h3", {
                                className: "text-2xl font-bold mb-6 text-center text-foreground",
                                children: "Transparência dos Recursos",
                            }),
                            i.jsx("div", {
                                className: "space-y-6",
                                children: lj.map((e, t) =>
                                    i.jsxs(
                                        "div",
                                        {
                                            style: { animationDelay: `${t * 200}ms` },
                                            children: [
                                                i.jsxs("div", {
                                                    className: "flex justify-between mb-2",
                                                    children: [
                                                        i.jsx("span", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: e.label,
                                                        }),
                                                        i.jsxs("span", {
                                                            className: "text-sm font-bold text-primary",
                                                            children: [e.percentage, "%"],
                                                        }),
                                                    ],
                                                }),
                                                i.jsx(Ix, { value: e.percentage, className: "h-2" }),
                                            ],
                                        },
                                        e.label
                                    )
                                ),
                            }),
                        ],
                    }),
                    i.jsxs("div", {
                        className: "mt-12 text-center space-y-4 animate-fade-in-up",
                        children: [
                            i.jsx("div", {
                                className: "flex items-center justify-center gap-3",
                                children: i.jsx("div", {
                                    className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center",
                                    children: i.jsx(wo, { className: "w-8 h-8 text-primary" }),
                                }),
                            }),
                            i.jsx("blockquote", {
                                className: "text-lg italic text-muted-foreground max-w-2xl mx-auto",
                                children:
                                    '"Cada kit distribuído representa mais força para nosso movimento. Unidos, levamos esperança e determinação para quem acredita num Brasil melhor!"',
                            }),
                            i.jsx("p", {
                                className: "text-sm font-medium text-foreground",
                                children: "— Coordenadores da Campanha Juntos pelo Brasil",
                            }),
                        ],
                    }),
                ],
            }),
        }),
    Lx = () =>
        i.jsx("footer", {
            className: "bg-muted/30 border-t",
            children: i.jsxs("div", {
                className: "container py-12 px-4",
                children: [
                    i.jsxs("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",
                        children: [
                            i.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                    i.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            i.jsx("img", {
                                                src: Eo,
                                                alt: "Juntos pelo Brasil",
                                                className: "h-10 w-10",
                                            }),
                                            i.jsx("span", {
                                                className:
                                                    "font-bold text-lg bg-gradient-brasil bg-clip-text text-transparent",
                                                children: "Juntos pelo Brasil",
                                            }),
                                        ],
                                    }),
                                    i.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children:
                                            "Espalhando patriotismo, determinação e apoio aos valores que acreditamos. Unidos pela liberdade e por um Brasil melhor.",
                                    }),
                                    i.jsx("p", {
                                        className: "text-sm text-foreground font-medium",
                                        children: "💚💛 Feito com amor e patriotismo",
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                children: [
                                    i.jsx("h4", {
                                        className: "font-bold mb-4 text-foreground",
                                        children: "Nossa Missão",
                                    }),
                                    i.jsxs("ul", {
                                        className: "space-y-2 text-sm text-muted-foreground",
                                        children: [
                                            i.jsx("li", { children: "Kit Juntos pelo Brasil" }),
                                            i.jsx("li", { children: "Impacto Político" }),
                                            i.jsx("li", { children: "Transparência" }),
                                            i.jsx("li", { children: "Movimento Nacional" }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                children: [
                                    i.jsx("h4", { className: "font-bold mb-4 text-foreground", children: "Contato" }),
                                    i.jsxs("ul", {
                                        className: "space-y-2 text-sm text-muted-foreground",
                                        children: [
                                            i.jsxs("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    i.jsx(Yw, { className: "w-4 h-4" }),
                                                    "contato@juntospelobrasil.com.br",
                                                ],
                                            }),
                                            i.jsxs("li", {
                                                className: "flex items-center gap-2",
                                                children: [i.jsx(Xw, { className: "w-4 h-4" }), "(11) 99832-4598"],
                                            }),
                                            i.jsxs("li", {
                                                className: "flex items-center gap-2",
                                                children: [i.jsx(qw, { className: "w-4 h-4" }), "São Paulo, SP"],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                children: [
                                    i.jsx("h4", { className: "font-bold mb-4 text-foreground", children: "Sobre" }),
                                    i.jsxs("div", {
                                        className: "space-y-2 text-sm text-muted-foreground",
                                        children: [
                                            i.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    i.jsx($s, { className: "w-4 h-4 text-primary" }),
                                                    i.jsx("span", { children: "Entrega em todo Brasil" }),
                                                ],
                                            }),
                                            i.jsx("p", {
                                                className: "mt-4",
                                                children:
                                                    "Suas doações fortalecem nosso movimento político e ajudam a defender os valores de liberdade e justiça que acreditamos.",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i.jsx("div", {
                        className: "border-t pt-8 text-center text-sm text-muted-foreground",
                        children: i.jsxs("p", {
                            children: [
                                "© 2024 Juntos pelo Brasil. Todos os direitos reservados.",
                                i.jsx("span", {
                                    className: "block mt-1 text-foreground",
                                    children: "Que o Brasil continue forte e livre! 🇧🇷",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    uj = [
        "João P.",
        "Carlos M.",
        "Pedro S.",
        "André L.",
        "Lucas R.",
        "Rafael C.",
        "Bruno H.",
        "Diego F.",
        "Felipe T.",
        "Gabriel N.",
        "Henrique D.",
        "Igor V.",
    ],
    dj = [
        "Maria S.",
        "Ana C.",
        "Juliana M.",
        "Patricia R.",
        "Fernanda L.",
        "Carla P.",
        "Beatriz H.",
        "Camila F.",
        "Daniela T.",
        "Gabriela N.",
        "Helena D.",
        "Isabela V.",
    ],
    Fm = [15, 20, 25, 30, 40, 50, 75, 100, 150, 200],
    zm = ["agora mesmo", "1 min atrás", "2 min atrás", "há poucos minutos"],
    fj = () => {
        const [e, t] = h.useState(!1),
            [n, r] = h.useState({ name: "", value: 0, time: "" });
        return (
            h.useEffect(() => {
                const o = () => {
                        const l = [...uj, ...dj],
                            c = l[Math.floor(Math.random() * l.length)],
                            u = Fm[Math.floor(Math.random() * Fm.length)],
                            d = zm[Math.floor(Math.random() * zm.length)];
                        r({ name: c, value: u, time: d }),
                            t(!0),
                            setTimeout(() => {
                                t(!1);
                            }, 4e3);
                    },
                    s = setTimeout(o, 2e3),
                    a = setInterval(() => {
                        const l = Math.floor(Math.random() * 1e4) + 15e3;
                        setTimeout(o, l);
                    }, 25e3);
                return () => {
                    clearTimeout(s), clearInterval(a);
                };
            }, []),
            e
                ? i.jsx(br, {
                      className: "fixed bottom-4 left-4 z-50 p-4 w-80 shadow-lg animate-fade-in-up bg-card border",
                      children: i.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                              i.jsx("div", {
                                  className:
                                      "w-10 h-10 rounded-full bg-gradient-brasil flex items-center justify-center flex-shrink-0",
                                  children: i.jsx("span", { className: "text-lg", children: "🇧🇷" }),
                              }),
                              i.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                      i.jsxs("p", {
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                              i.jsx("strong", { children: n.name }),
                                              " acaba de doar ",
                                              i.jsxs("strong", { children: ["R$ ", n.value] }),
                                              "! 🇧🇷",
                                          ],
                                      }),
                                      i.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: n.time }),
                                  ],
                              }),
                              i.jsx("button", {
                                  onClick: () => t(!1),
                                  className: "text-muted-foreground hover:text-foreground flex-shrink-0",
                                  children: i.jsx($i, { className: "w-4 h-4" }),
                              }),
                          ],
                      }),
                  })
                : null
        );
    },
    $m = () => (
        h.useEffect(() => {
            window.location.pathname === "/" && lt("/contribua");
        }, []),
        i.jsxs("div", {
            className: "min-h-screen",
            children: [
                i.jsx(wE, {}),
                i.jsx(Gv, {}),
                i.jsxs("main", {
                    children: [
                        i.jsx(DC, {}),
                        i.jsx("div", {
                            className: "container max-w-6xl mx-auto px-4 -mt-8 mb-8",
                            children: i.jsx(bE, {}),
                        }),
                        i.jsx(WC, {}),
                        i.jsx(GC, {}),
                        i.jsx(ZC, {}),
                        i.jsx(cj, {}),
                    ],
                }),
                i.jsx(Lx, {}),
                i.jsx(fj, {}),
            ],
        })
    ),
    Yt = h.forwardRef(({ className: e, type: t, ...n }, r) =>
        i.jsx("input", {
            type: t,
            className: le(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                e
            ),
            ref: r,
            ...n,
        })
    );
Yt.displayName = "Input";
var mj = "Label",
    Dx = h.forwardRef((e, t) =>
        i.jsx(ne.label, {
            ...e,
            ref: t,
            onMouseDown: (n) => {
                var o;
                n.target.closest("button, input, select, textarea") ||
                    ((o = e.onMouseDown) == null || o.call(e, n),
                    !n.defaultPrevented && n.detail > 1 && n.preventDefault());
            },
        })
    );
Dx.displayName = mj;
var Fx = Dx;
const pj = Fi("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    St = h.forwardRef(({ className: e, ...t }, n) => i.jsx(Fx, { ref: n, className: le(pj(), e), ...t }));
St.displayName = Fx.displayName;
var hj = h.createContext(void 0);
function zx(e) {
    const t = h.useContext(hj);
    return e || t || "ltr";
}
var Kl = "rovingFocusGroup.onEntryFocus",
    gj = { bubbles: !1, cancelable: !0 },
    Us = "RovingFocusGroup",
    [tu, $x, vj] = fg(Us),
    [xj, Bx] = un(Us, [vj]),
    [yj, wj] = xj(Us),
    Ux = h.forwardRef((e, t) =>
        i.jsx(tu.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: i.jsx(tu.Slot, { scope: e.__scopeRovingFocusGroup, children: i.jsx(bj, { ...e, ref: t }) }),
        })
    );
Ux.displayName = Us;
var bj = h.forwardRef((e, t) => {
        const {
                __scopeRovingFocusGroup: n,
                orientation: r,
                loop: o = !1,
                dir: s,
                currentTabStopId: a,
                defaultCurrentTabStopId: l,
                onCurrentTabStopIdChange: c,
                onEntryFocus: u,
                preventScrollOnEntryFocus: d = !1,
                ...f
            } = e,
            v = h.useRef(null),
            m = Ee(t, v),
            b = zx(s),
            [p, y] = Ii({ prop: a, defaultProp: l ?? null, onChange: c, caller: Us }),
            [g, x] = h.useState(!1),
            w = Pt(u),
            N = $x(n),
            S = h.useRef(!1),
            [E, C] = h.useState(0);
        return (
            h.useEffect(() => {
                const k = v.current;
                if (k) return k.addEventListener(Kl, w), () => k.removeEventListener(Kl, w);
            }, [w]),
            i.jsx(yj, {
                scope: n,
                orientation: r,
                dir: b,
                loop: o,
                currentTabStopId: p,
                onItemFocus: h.useCallback((k) => y(k), [y]),
                onItemShiftTab: h.useCallback(() => x(!0), []),
                onFocusableItemAdd: h.useCallback(() => C((k) => k + 1), []),
                onFocusableItemRemove: h.useCallback(() => C((k) => k - 1), []),
                children: i.jsx(ne.div, {
                    tabIndex: g || E === 0 ? -1 : 0,
                    "data-orientation": r,
                    ...f,
                    ref: m,
                    style: { outline: "none", ...e.style },
                    onMouseDown: X(e.onMouseDown, () => {
                        S.current = !0;
                    }),
                    onFocus: X(e.onFocus, (k) => {
                        const _ = !S.current;
                        if (k.target === k.currentTarget && _ && !g) {
                            const O = new CustomEvent(Kl, gj);
                            if ((k.currentTarget.dispatchEvent(O), !O.defaultPrevented)) {
                                const $ = N().filter((F) => F.focusable),
                                    L = $.find((F) => F.active),
                                    K = $.find((F) => F.id === p),
                                    G = [L, K, ...$].filter(Boolean).map((F) => F.ref.current);
                                Hx(G, d);
                            }
                        }
                        S.current = !1;
                    }),
                    onBlur: X(e.onBlur, () => x(!1)),
                }),
            })
        );
    }),
    Vx = "RovingFocusGroupItem",
    Wx = h.forwardRef((e, t) => {
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: s, children: a, ...l } = e,
            c = Ma(),
            u = s || c,
            d = wj(Vx, n),
            f = d.currentTabStopId === u,
            v = $x(n),
            { onFocusableItemAdd: m, onFocusableItemRemove: b, currentTabStopId: p } = d;
        return (
            h.useEffect(() => {
                if (r) return m(), () => b();
            }, [r, m, b]),
            i.jsx(tu.ItemSlot, {
                scope: n,
                id: u,
                focusable: r,
                active: o,
                children: i.jsx(ne.span, {
                    tabIndex: f ? 0 : -1,
                    "data-orientation": d.orientation,
                    ...l,
                    ref: t,
                    onMouseDown: X(e.onMouseDown, (y) => {
                        r ? d.onItemFocus(u) : y.preventDefault();
                    }),
                    onFocus: X(e.onFocus, () => d.onItemFocus(u)),
                    onKeyDown: X(e.onKeyDown, (y) => {
                        if (y.key === "Tab" && y.shiftKey) {
                            d.onItemShiftTab();
                            return;
                        }
                        if (y.target !== y.currentTarget) return;
                        const g = Ej(y, d.orientation, d.dir);
                        if (g !== void 0) {
                            if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                            y.preventDefault();
                            let w = v()
                                .filter((N) => N.focusable)
                                .map((N) => N.ref.current);
                            if (g === "last") w.reverse();
                            else if (g === "prev" || g === "next") {
                                g === "prev" && w.reverse();
                                const N = w.indexOf(y.currentTarget);
                                w = d.loop ? Cj(w, N + 1) : w.slice(N + 1);
                            }
                            setTimeout(() => Hx(w));
                        }
                    }),
                    children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: p != null }) : a,
                }),
            })
        );
    });
Wx.displayName = Vx;
var Nj = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
};
function Sj(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ej(e, t, n) {
    const r = Sj(e.key, n);
    if (
        !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
        !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
    )
        return Nj[r];
}
function Hx(e, t = !1) {
    const n = document.activeElement;
    for (const r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Cj(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var jj = Ux,
    kj = Wx;
function Pj(e) {
    const t = h.useRef({ value: e, previous: e });
    return h.useMemo(
        () => (
            t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous
        ),
        [e]
    );
}
var Ed = "Radio",
    [Rj, Kx] = un(Ed),
    [Tj, Aj] = Rj(Ed),
    Gx = h.forwardRef((e, t) => {
        const {
                __scopeRadio: n,
                name: r,
                checked: o = !1,
                required: s,
                disabled: a,
                value: l = "on",
                onCheck: c,
                form: u,
                ...d
            } = e,
            [f, v] = h.useState(null),
            m = Ee(t, (y) => v(y)),
            b = h.useRef(!1),
            p = f ? u || !!f.closest("form") : !0;
        return i.jsxs(Tj, {
            scope: n,
            checked: o,
            disabled: a,
            children: [
                i.jsx(ne.button, {
                    type: "button",
                    role: "radio",
                    "aria-checked": o,
                    "data-state": Xx(o),
                    "data-disabled": a ? "" : void 0,
                    disabled: a,
                    value: l,
                    ...d,
                    ref: m,
                    onClick: X(e.onClick, (y) => {
                        o || c == null || c(),
                            p && ((b.current = y.isPropagationStopped()), b.current || y.stopPropagation());
                    }),
                }),
                p &&
                    i.jsx(qx, {
                        control: f,
                        bubbles: !b.current,
                        name: r,
                        value: l,
                        checked: o,
                        required: s,
                        disabled: a,
                        form: u,
                        style: { transform: "translateX(-100%)" },
                    }),
            ],
        });
    });
Gx.displayName = Ed;
var Qx = "RadioIndicator",
    Yx = h.forwardRef((e, t) => {
        const { __scopeRadio: n, forceMount: r, ...o } = e,
            s = Aj(Qx, n);
        return i.jsx(Er, {
            present: r || s.checked,
            children: i.jsx(ne.span, {
                "data-state": Xx(s.checked),
                "data-disabled": s.disabled ? "" : void 0,
                ...o,
                ref: t,
            }),
        });
    });
Yx.displayName = Qx;
var Oj = "RadioBubbleInput",
    qx = h.forwardRef(({ __scopeRadio: e, control: t, checked: n, bubbles: r = !0, ...o }, s) => {
        const a = h.useRef(null),
            l = Ee(a, s),
            c = Pj(n),
            u = dv(t);
        return (
            h.useEffect(() => {
                const d = a.current;
                if (!d) return;
                const f = window.HTMLInputElement.prototype,
                    m = Object.getOwnPropertyDescriptor(f, "checked").set;
                if (c !== n && m) {
                    const b = new Event("click", { bubbles: r });
                    m.call(d, n), d.dispatchEvent(b);
                }
            }, [c, n, r]),
            i.jsx(ne.input, {
                type: "radio",
                "aria-hidden": !0,
                defaultChecked: n,
                ...o,
                tabIndex: -1,
                ref: l,
                style: { ...o.style, ...u, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 },
            })
        );
    });
qx.displayName = Oj;
function Xx(e) {
    return e ? "checked" : "unchecked";
}
var _j = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    Zi = "RadioGroup",
    [Mj, nk] = un(Zi, [Bx, Kx]),
    Jx = Bx(),
    Zx = Kx(),
    [Ij, Lj] = Mj(Zi),
    ey = h.forwardRef((e, t) => {
        const {
                __scopeRadioGroup: n,
                name: r,
                defaultValue: o,
                value: s,
                required: a = !1,
                disabled: l = !1,
                orientation: c,
                dir: u,
                loop: d = !0,
                onValueChange: f,
                ...v
            } = e,
            m = Jx(n),
            b = zx(u),
            [p, y] = Ii({ prop: s, defaultProp: o ?? null, onChange: f, caller: Zi });
        return i.jsx(Ij, {
            scope: n,
            name: r,
            required: a,
            disabled: l,
            value: p,
            onValueChange: y,
            children: i.jsx(jj, {
                asChild: !0,
                ...m,
                orientation: c,
                dir: b,
                loop: d,
                children: i.jsx(ne.div, {
                    role: "radiogroup",
                    "aria-required": a,
                    "aria-orientation": c,
                    "data-disabled": l ? "" : void 0,
                    dir: b,
                    ...v,
                    ref: t,
                }),
            }),
        });
    });
ey.displayName = Zi;
var ty = "RadioGroupItem",
    ny = h.forwardRef((e, t) => {
        const { __scopeRadioGroup: n, disabled: r, ...o } = e,
            s = Lj(ty, n),
            a = s.disabled || r,
            l = Jx(n),
            c = Zx(n),
            u = h.useRef(null),
            d = Ee(t, u),
            f = s.value === o.value,
            v = h.useRef(!1);
        return (
            h.useEffect(() => {
                const m = (p) => {
                        _j.includes(p.key) && (v.current = !0);
                    },
                    b = () => (v.current = !1);
                return (
                    document.addEventListener("keydown", m),
                    document.addEventListener("keyup", b),
                    () => {
                        document.removeEventListener("keydown", m), document.removeEventListener("keyup", b);
                    }
                );
            }, []),
            i.jsx(kj, {
                asChild: !0,
                ...l,
                focusable: !a,
                active: f,
                children: i.jsx(Gx, {
                    disabled: a,
                    required: s.required,
                    checked: f,
                    ...c,
                    ...o,
                    name: s.name,
                    ref: d,
                    onCheck: () => s.onValueChange(o.value),
                    onKeyDown: X((m) => {
                        m.key === "Enter" && m.preventDefault();
                    }),
                    onFocus: X(o.onFocus, () => {
                        var m;
                        v.current && ((m = u.current) == null || m.click());
                    }),
                }),
            })
        );
    });
ny.displayName = ty;
var Dj = "RadioGroupIndicator",
    ry = h.forwardRef((e, t) => {
        const { __scopeRadioGroup: n, ...r } = e,
            o = Zx(n);
        return i.jsx(Yx, { ...o, ...r, ref: t });
    });
ry.displayName = Dj;
var oy = ey,
    sy = ny,
    Fj = ry;
const ay = h.forwardRef(({ className: e, ...t }, n) => i.jsx(oy, { className: le("grid gap-2", e), ...t, ref: n }));
ay.displayName = oy.displayName;
const iy = h.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(sy, {
        ref: n,
        className: le(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            e
        ),
        ...t,
        children: i.jsx(Fj, {
            className: "flex items-center justify-center",
            children: i.jsx(Ww, { className: "h-2.5 w-2.5 fill-current text-current" }),
        }),
    })
);
iy.displayName = sy.displayName;
const zj = () => {
        const e = nd(),
            { selectedValue: t, numberOfKits: n, hasMiniKit: r } = e,
            [o, s] = h.useState(Array(n || 1).fill("")),
            [a, l] = h.useState(Array(n || 1).fill("")),
            [c, u] = h.useState(Array(n || 1).fill(0)),
            d = t >= 30 && !r;
        h.useEffect(() => {
            if (!t) {
                lt("/");
                return;
            }
            d || lt("/endereco", { selectedValue: t, numberOfKits: n, hasMiniKit: r, shirtSizes: [], capNames: [] });
        }, [t, d, n, r]);
        const f = () => {
                o.every((y) => y !== "") &&
                    lt("/endereco", {
                        selectedValue: t,
                        numberOfKits: n,
                        hasMiniKit: r,
                        shirtSizes: o,
                        capNames: a.map((y) => y.trim()),
                    });
            },
            v = (p, y) => {
                if (y.length <= 30) {
                    const g = [...a];
                    (g[p] = y), l(g);
                    const x = [...c];
                    (x[p] = y.length), u(x);
                }
            },
            m = (p, y) => {
                const g = [...o];
                (g[p] = y), s(g);
            },
            b = ["P", "M", "G", "GG", "XG"];
        return i.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                i.jsx("header", {
                    className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur",
                    children: i.jsx("div", {
                        className: "container flex h-16 items-center justify-center px-4",
                        children: i.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                i.jsx("img", { src: Eo, alt: "Juntos pelo Brasil", className: "h-8 w-8" }),
                                i.jsx("span", {
                                    className: "text-lg font-bold bg-gradient-brasil bg-clip-text text-transparent",
                                    children: "Juntos pelo Brasil",
                                }),
                            ],
                        }),
                    }),
                }),
                i.jsx("div", {
                    className: "border-b bg-background",
                    children: i.jsx("div", {
                        className: "container max-w-3xl mx-auto px-4 py-6",
                        children: i.jsx("div", {
                            className: "flex items-center justify-between",
                            children: [
                                { step: 1, label: "Valor", completed: !0 },
                                { step: 2, label: "Oferta", completed: !0 },
                                { step: 3, label: "Camiseta", completed: !1, current: !0 },
                                { step: 4, label: "Endereço", completed: !1 },
                            ].map((p, y) =>
                                i.jsxs(
                                    "div",
                                    {
                                        className: "flex items-center flex-1",
                                        children: [
                                            i.jsxs("div", {
                                                className: "flex flex-col items-center flex-1",
                                                children: [
                                                    i.jsx("div", {
                                                        className: `w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm md:text-base transition-all ${p.completed ? "bg-primary text-primary-foreground" : p.current ? "bg-primary/20 text-primary ring-2 ring-primary animate-pulse" : "bg-muted text-muted-foreground"}`,
                                                        children: p.completed
                                                            ? i.jsx(Ft, { className: "w-4 h-4 md:w-5 md:h-5" })
                                                            : p.step,
                                                    }),
                                                    i.jsx("span", {
                                                        className: "text-[10px] md:text-xs mt-1 text-muted-foreground",
                                                        children: p.label,
                                                    }),
                                                ],
                                            }),
                                            y < 3 &&
                                                i.jsx("div", {
                                                    className: `h-0.5 flex-1 mx-1 md:mx-2 ${p.completed ? "bg-primary" : "bg-muted"}`,
                                                }),
                                        ],
                                    },
                                    p.step
                                )
                            ),
                        }),
                    }),
                }),
                i.jsx("div", {
                    className: "container max-w-3xl mx-auto px-4 py-8",
                    children: i.jsxs("div", {
                        className: "bg-card rounded-xl border p-6 md:p-8 space-y-8",
                        children: [
                            i.jsxs("div", {
                                className: "flex justify-center gap-4",
                                children: [
                                    i.jsx("div", {
                                        className: "w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden bg-muted",
                                        children: i.jsx("img", {
                                            src: Rx,
                                            alt: "Boné Patriota",
                                            className: "w-full h-full object-cover",
                                        }),
                                    }),
                                    i.jsx("div", {
                                        className: "w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden bg-muted",
                                        children: i.jsx("img", {
                                            src: Px,
                                            alt: "Camiseta Patriota",
                                            className: "w-full h-full object-cover",
                                        }),
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "text-center space-y-2",
                                children: [
                                    i.jsx("h1", {
                                        className: "text-2xl md:text-3xl font-bold text-foreground",
                                        children: "Personalize seu Kit 💚",
                                    }),
                                    i.jsx("p", {
                                        className: "text-sm md:text-base text-muted-foreground",
                                        children: "Escolha o tamanho da camiseta e personalize seu boné",
                                    }),
                                ],
                            }),
                            d &&
                                i.jsx(i.Fragment, {
                                    children: Array.from({ length: n || 1 }).map((p, y) =>
                                        i.jsxs(
                                            "div",
                                            {
                                                className: "space-y-6",
                                                children: [
                                                    n > 1 &&
                                                        i.jsxs("h2", {
                                                            className:
                                                                "text-xl md:text-2xl font-bold text-center text-foreground",
                                                            children: ["Kit ", y + 1],
                                                        }),
                                                    i.jsxs("div", {
                                                        className:
                                                            "space-y-3 bg-brasil-green/10 p-4 md:p-6 rounded-xl border-2 border-brasil-green",
                                                        children: [
                                                            i.jsxs(St, {
                                                                htmlFor: `capName-${y}`,
                                                                className:
                                                                    "text-base md:text-lg font-semibold text-foreground flex items-center gap-2",
                                                                children: [
                                                                    i.jsx("span", {
                                                                        className: "text-2xl",
                                                                        children: "🧢",
                                                                    }),
                                                                    "Nome no boné ",
                                                                    n > 1 ? `${y + 1}` : "",
                                                                ],
                                                            }),
                                                            i.jsx(Yt, {
                                                                id: `capName-${y}`,
                                                                placeholder: "Digite o nome para o boné",
                                                                value: a[y],
                                                                onChange: (g) => v(y, g.target.value),
                                                                className:
                                                                    "text-base md:text-lg h-12 md:h-14 bg-background",
                                                                maxLength: 30,
                                                            }),
                                                            i.jsxs("p", {
                                                                className: "text-xs md:text-sm text-muted-foreground",
                                                                children: ["Máximo 30 caracteres (", c[y], "/30)"],
                                                            }),
                                                        ],
                                                    }),
                                                    i.jsxs("div", {
                                                        className:
                                                            "space-y-3 bg-brasil-green/10 p-4 md:p-6 rounded-xl border-2 border-brasil-green",
                                                        children: [
                                                            i.jsxs(St, {
                                                                className:
                                                                    "text-base md:text-lg font-semibold flex items-center gap-2",
                                                                children: [
                                                                    i.jsx("span", {
                                                                        className: "text-2xl",
                                                                        children: "👕",
                                                                    }),
                                                                    "Tamanho da camiseta ",
                                                                    n > 1 ? `${y + 1}` : "",
                                                                ],
                                                            }),
                                                            i.jsx(ay, {
                                                                value: o[y],
                                                                onValueChange: (g) => m(y, g),
                                                                children: i.jsx("div", {
                                                                    className: "grid grid-cols-5 gap-2 md:gap-3",
                                                                    children: b.map((g) =>
                                                                        i.jsxs(
                                                                            "div",
                                                                            {
                                                                                className: "relative",
                                                                                children: [
                                                                                    i.jsx(iy, {
                                                                                        value: g,
                                                                                        id: `${g}-${y}`,
                                                                                        className: "peer sr-only",
                                                                                    }),
                                                                                    i.jsx(St, {
                                                                                        htmlFor: `${g}-${y}`,
                                                                                        className:
                                                                                            "flex items-center justify-center h-12 md:h-14 rounded-lg border-2 cursor-pointer transition-all peer-data-[state=checked]:border-brasil-green peer-data-[state=checked]:bg-brasil-green/20 peer-data-[state=checked]:font-bold hover:border-brasil-green/50 bg-background",
                                                                                        children: g,
                                                                                    }),
                                                                                ],
                                                                            },
                                                                            g
                                                                        )
                                                                    ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            y
                                        )
                                    ),
                                }),
                            i.jsx(Le, {
                                onClick: f,
                                disabled: d && o.some((p) => !p),
                                size: "lg",
                                className:
                                    "w-full h-12 md:h-14 text-base md:text-lg font-bold bg-gradient-brasil hover:opacity-90",
                                children: "Continuar para Endereço →",
                            }),
                            i.jsx("p", {
                                className: "text-xs md:text-sm text-center text-muted-foreground",
                                children: "✨ O nome será gravado com todo carinho no seu boné patriota",
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    $j = () => {
        const e = nd(),
            { selectedValue: t, numberOfKits: n, hasMiniKit: r } = e,
            o = {
                20:  window.location.origin + "/checkout" + window.location.search,
                25: window.location.origin + "/checkout" + window.location.search,
                27.9: window.location.origin + "/checkout" + window.location.search,
                30: window.location.origin + "/checkout" + window.location.search,
                32.9: window.location.origin + "/checkout" + window.location.search,
                40: window.location.origin + "/checkout" + window.location.search,
                60: window.location.origin + "/checkout" + window.location.search,
                100: window.location.origin + "/checkout" + window.location.search,
                150: window.location.origin + "/checkout" + window.location.search,
                250: window.location.origin + "/checkout" + window.location.search,
                500: window.location.origin + "/checkout" + window.location.search,
            },
            [s, a] = h.useState(!1),
            [l, c] = h.useState({
                cep: "",
                street: "",
                neighborhood: "",
                city: "",
                state: "",
                number: "",
                complement: "",
            });
        h.useEffect(() => {
            t || lt("/");
        }, [t]);
        const u = (b) => {
                const p = b.replace(/\D/g, "");
                return p.length <= 5 ? p : `${p.slice(0, 5)}-${p.slice(5, 8)}`;
            },
            d = async (b) => {
                const p = b.replace(/\D/g, "");
                if (p.length === 8) {
                    a(!0);
                    try {
                        const g = await (await fetch(`https://viacep.com.br/ws/${p}/json/`)).json();
                        if (g.erro) {
                            Lr.error("CEP não encontrado");
                            return;
                        }
                        c((x) => ({
                            ...x,
                            street: g.logradouro || "",
                            neighborhood: g.bairro || "",
                            city: g.localidade || "",
                            state: g.uf || "",
                        })),
                            Lr.success("Endereço encontrado!");
                    } catch {
                        Lr.error("Erro ao buscar CEP");
                    } finally {
                        a(!1);
                    }
                }
            },
            f = (b) => {
                const p = u(b.target.value);
                c((y) => ({ ...y, cep: p })), p.replace(/\D/g, "").length === 8 && d(p);
            },
            v = () => {
                if (!l.cep || !l.street || !l.number || !l.neighborhood || !l.city || !l.state) {
                    Lr.error("Por favor, preencha todos os campos obrigatórios");
                    return;
                }
                const b = t == null ? void 0 : t.toString(),
                    p = o[b];
                if (p) {
                    const y = window.location.search,
                        g = new URL(p);
                    new URLSearchParams(y).forEach((w, N) => {
                        (N.startsWith("utm_") || N === "fbclid" || N === "gclid") && g.searchParams.set(N, w);
                    }),
                        (window.location.href = g.toString());
                } else Lr.error("Erro ao processar pagamento");
            },
            m = t >= 30 || r;
        return i.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                i.jsx("header", {
                    className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur",
                    children: i.jsx("div", {
                        className: "container flex h-16 items-center justify-center px-4",
                        children: i.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                i.jsx("img", { src: Eo, alt: "Juntos pelo Brasil", className: "h-8 w-8" }),
                                i.jsx("span", {
                                    className: "text-lg font-bold bg-gradient-brasil bg-clip-text text-transparent",
                                    children: "Juntos pelo Brasil",
                                }),
                            ],
                        }),
                    }),
                }),
                i.jsx("div", {
                    className: "border-b bg-background",
                    children: i.jsx("div", {
                        className: "container max-w-3xl mx-auto px-4 py-6",
                        children: i.jsx("div", {
                            className: "flex items-center justify-between",
                            children: [
                                { step: 1, label: "Valor", completed: !0 },
                                { step: 2, label: "Oferta", completed: !0 },
                                { step: 3, label: "Camiseta", completed: !0 },
                                { step: 4, label: "Endereço", completed: !1, current: !0 },
                            ].map((b, p) =>
                                i.jsxs(
                                    "div",
                                    {
                                        className: "flex items-center flex-1",
                                        children: [
                                            i.jsxs("div", {
                                                className: "flex flex-col items-center flex-1",
                                                children: [
                                                    i.jsx("div", {
                                                        className: `w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm md:text-base transition-all ${b.completed ? "bg-primary text-primary-foreground" : b.current ? "bg-primary/20 text-primary ring-2 ring-primary animate-pulse" : "bg-muted text-muted-foreground"}`,
                                                        children: b.completed
                                                            ? i.jsx(Ft, { className: "w-4 h-4 md:w-5 md:h-5" })
                                                            : b.step,
                                                    }),
                                                    i.jsx("span", {
                                                        className: "text-[10px] md:text-xs mt-1 text-muted-foreground",
                                                        children: b.label,
                                                    }),
                                                ],
                                            }),
                                            p < 3 &&
                                                i.jsx("div", {
                                                    className: `h-0.5 flex-1 mx-1 md:mx-2 ${b.completed ? "bg-primary" : "bg-muted"}`,
                                                }),
                                        ],
                                    },
                                    b.step
                                )
                            ),
                        }),
                    }),
                }),
                i.jsx("div", {
                    className: "container max-w-2xl mx-auto px-4 py-8",
                    children: i.jsxs("div", {
                        className: "bg-card rounded-xl border p-6 md:p-8 space-y-6",
                        children: [
                            i.jsxs("div", {
                                className: "text-center space-y-2",
                                children: [
                                    i.jsx("h1", {
                                        className: "text-2xl md:text-3xl font-bold text-foreground",
                                        children: "Dados de Entrega 📦",
                                    }),
                                    i.jsx("p", {
                                        className: "text-sm md:text-base text-muted-foreground",
                                        children: "Preencha seu endereço para receber o Kit de Juntos pelo Brasil",
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    i.jsx(St, {
                                        htmlFor: "cep",
                                        className: "text-sm md:text-base font-semibold",
                                        children: "CEP",
                                    }),
                                    i.jsxs("div", {
                                        className: "relative",
                                        children: [
                                            i.jsx(Yt, {
                                                id: "cep",
                                                placeholder: "00000-000",
                                                value: l.cep,
                                                onChange: f,
                                                className: "h-12 md:h-14 text-base",
                                                maxLength: 9,
                                            }),
                                            s &&
                                                i.jsx(Qw, {
                                                    className:
                                                        "absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-primary",
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    i.jsx(St, {
                                        htmlFor: "street",
                                        className: "text-sm md:text-base font-semibold",
                                        children: "Rua",
                                    }),
                                    i.jsx(Yt, {
                                        id: "street",
                                        placeholder: "Nome da rua",
                                        value: l.street,
                                        onChange: (b) => c((p) => ({ ...p, street: b.target.value })),
                                        className: "h-12 md:h-14 text-base",
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    i.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            i.jsx(St, {
                                                htmlFor: "number",
                                                className: "text-sm md:text-base font-semibold",
                                                children: "Número",
                                            }),
                                            i.jsx(Yt, {
                                                id: "number",
                                                placeholder: "123",
                                                value: l.number,
                                                onChange: (b) => c((p) => ({ ...p, number: b.target.value })),
                                                className: "h-12 md:h-14 text-base",
                                            }),
                                        ],
                                    }),
                                    i.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            i.jsx(St, {
                                                htmlFor: "complement",
                                                className: "text-sm md:text-base font-semibold",
                                                children: "Complemento",
                                            }),
                                            i.jsx(Yt, {
                                                id: "complement",
                                                placeholder: "Apto 101",
                                                value: l.complement,
                                                onChange: (b) => c((p) => ({ ...p, complement: b.target.value })),
                                                className: "h-12 md:h-14 text-base",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    i.jsx(St, {
                                        htmlFor: "neighborhood",
                                        className: "text-sm md:text-base font-semibold",
                                        children: "Bairro",
                                    }),
                                    i.jsx(Yt, {
                                        id: "neighborhood",
                                        placeholder: "Nome do bairro",
                                        value: l.neighborhood,
                                        onChange: (b) => c((p) => ({ ...p, neighborhood: b.target.value })),
                                        className: "h-12 md:h-14 text-base",
                                    }),
                                ],
                            }),
                            i.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    i.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            i.jsx(St, {
                                                htmlFor: "city",
                                                className: "text-sm md:text-base font-semibold",
                                                children: "Cidade",
                                            }),
                                            i.jsx(Yt, {
                                                id: "city",
                                                placeholder: "Cidade",
                                                value: l.city,
                                                onChange: (b) => c((p) => ({ ...p, city: b.target.value })),
                                                className: "h-12 md:h-14 text-base",
                                            }),
                                        ],
                                    }),
                                    i.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            i.jsx(St, {
                                                htmlFor: "state",
                                                className: "text-sm md:text-base font-semibold",
                                                children: "Estado",
                                            }),
                                            i.jsx(Yt, {
                                                id: "state",
                                                placeholder: "UF",
                                                value: l.state,
                                                onChange: (b) =>
                                                    c((p) => ({ ...p, state: b.target.value.toUpperCase() })),
                                                className: "h-12 md:h-14 text-base uppercase",
                                                maxLength: 2,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            m &&
                                i.jsx("div", {
                                    className: "bg-primary/10 border-2 border-primary/30 rounded-lg p-4",
                                    children: i.jsxs("div", {
                                        className: "flex items-start gap-3 text-sm md:text-base",
                                        children: [
                                            i.jsx($s, {
                                                className: "w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5",
                                            }),
                                            i.jsxs("div", {
                                                children: [
                                                    i.jsx("p", {
                                                        className: "font-semibold text-primary mb-1",
                                                        children: "Prazo de entrega estimado",
                                                    }),
                                                    i.jsx("p", {
                                                        className: "text-muted-foreground",
                                                        children: "7 a 10 dias úteis após a confirmação do pagamento",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            i.jsxs(Le, {
                                onClick: v,
                                size: "lg",
                                className:
                                    "w-full h-12 md:h-14 text-base md:text-lg font-bold bg-gradient-brasil hover:opacity-90",
                                children: [
                                    "Finalizar Doação - R$ ",
                                    t == null ? void 0 : t.toFixed(2).replace(".", ","),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    Bj = [
        {
            id: "camisa",
            name: "Camiseta Patriota Exclusiva",
            description:
                "Camiseta 100% algodão premium com estampa patriótica exclusiva. Vai no tamanho pré-selecionado no seu kit.",
            price: 39.9,
            originalPrice: 79.9,
            image: "https://i.imgur.com/HKNFrY9.jpeg",
            badge: "MAIS VENDIDO",
            note: "Enviada no mesmo tamanho escolhido anteriormente",
            offerHash: "upsell_7a188e8f36bfeca4",
            buttonText: "Sim, eu quero a camiseta!",
        },
        {
            id: "bandeira",
            name: "Bandeira do Brasil Premium",
            description:
                "Bandeira oficial 90x60cm em tecido de alta qualidade. Perfeita para sua casa, carro ou manifestações patrióticas.",
            price: 24.97,
            originalPrice: 59.9,
            image: "https://i.imgur.com/zsQ6fZA.jpeg",
            badge: "EXCLUSIVO",
            offerHash: "upsell_d5c7648196616f04",
            buttonText: "Sim, eu quero a bandeira!",
        },
        {
            id: "adesivos",
            name: "Kit Adesivos Patrióticos",
            description:
                "Cartela premium com 10 adesivos patrióticos para carro, notebook, garrafa e onde mais você quiser mostrar seu amor pelo Brasil.",
            price: 8.97,
            originalPrice: 29.9,
            image: "https://i.imgur.com/JfUSx8i.jpeg",
            badge: "OFERTA ESPECIAL",
            offerHash: "upsell_8c1c222545475988",
            buttonText: "Sim, eu quero os adesivos!",
        },
    ],
    Uj = () => {
        const t = nd().numberOfKits || 1;
        return i.jsxs("div", {
            className: "w-full max-w-4xl mx-auto space-y-6",
            children: [
                i.jsxs("div", {
                    className: "text-center space-y-3",
                    children: [
                        i.jsxs("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                i.jsx(Ss, { className: "w-5 h-5 text-brasil-yellow animate-pulse" }),
                                i.jsx(ve, {
                                    variant: "secondary",
                                    className: "bg-gradient-brasil text-white text-sm px-4 py-1",
                                    children: "CONDIÇÕES ESPECIAIS LIBERADAS",
                                }),
                                i.jsx(Ss, { className: "w-5 h-5 text-brasil-yellow animate-pulse" }),
                            ],
                        }),
                        i.jsx("h2", {
                            className: "text-2xl md:text-3xl font-bold text-foreground",
                            children: "Você Também Pode Gostar",
                        }),
                        i.jsxs("p", {
                            className: "text-muted-foreground max-w-xl mx-auto",
                            children: [
                                "Sua generosidade desbloqueou ",
                                i.jsx("span", {
                                    className: "font-semibold text-primary",
                                    children: "ofertas exclusivas",
                                }),
                                " com até 50% de desconto. Aproveite agora e fortaleça ainda mais seu patriotismo!",
                            ],
                        }),
                    ],
                }),
                i.jsx("div", {
                    className: "grid gap-4 md:gap-6",
                    children: Bj.map((n) =>
                        i.jsx(
                            "div",
                            {
                                className:
                                    "bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow",
                                children: i.jsxs("div", {
                                    className: "flex flex-col md:flex-row",
                                    children: [
                                        i.jsxs("div", {
                                            className: "relative md:w-1/3 aspect-square md:aspect-auto",
                                            children: [
                                                i.jsx("img", {
                                                    src: n.image,
                                                    alt: n.name,
                                                    className: "w-full h-full object-cover",
                                                }),
                                                n.badge &&
                                                    i.jsx(ve, {
                                                        className:
                                                            "absolute top-3 left-3 bg-destructive text-destructive-foreground animate-pulse",
                                                        children: n.badge,
                                                    }),
                                            ],
                                        }),
                                        i.jsxs("div", {
                                            className: "flex-1 p-4 md:p-6 flex flex-col justify-between",
                                            children: [
                                                i.jsxs("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        i.jsx("h3", {
                                                            className: "text-xl md:text-2xl font-bold text-foreground",
                                                            children: n.name,
                                                        }),
                                                        i.jsx("p", {
                                                            className: "text-muted-foreground text-sm md:text-base",
                                                            children: n.description,
                                                        }),
                                                        n.id === "camisa" &&
                                                            t > 1 &&
                                                            i.jsxs("div", {
                                                                className:
                                                                    "flex items-start gap-2 bg-primary/10 p-3 rounded-lg",
                                                                children: [
                                                                    i.jsx(Wn, {
                                                                        className:
                                                                            "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                                                                    }),
                                                                    i.jsxs("p", {
                                                                        className: "text-sm text-primary font-medium",
                                                                        children: [
                                                                            "Como você adquiriu ",
                                                                            t,
                                                                            " kits, receberá ",
                                                                            t,
                                                                            " camisetas no mesmo tamanho escolhido!",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        n.note &&
                                                            t === 1 &&
                                                            i.jsxs("div", {
                                                                className:
                                                                    "flex items-start gap-2 bg-muted/50 p-3 rounded-lg",
                                                                children: [
                                                                    i.jsx(Ft, {
                                                                        className:
                                                                            "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                                                                    }),
                                                                    i.jsx("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: n.note,
                                                                    }),
                                                                ],
                                                            }),
                                                        i.jsxs("div", {
                                                            className: "flex flex-wrap gap-2 pt-2",
                                                            children: [
                                                                i.jsxs("div", {
                                                                    className:
                                                                        "flex items-center gap-1.5 text-xs text-muted-foreground",
                                                                    children: [
                                                                        i.jsx($s, { className: "w-3.5 h-3.5" }),
                                                                        i.jsx("span", { children: "Frete Grátis" }),
                                                                    ],
                                                                }),
                                                                i.jsxs("div", {
                                                                    className:
                                                                        "flex items-center gap-1.5 text-xs text-muted-foreground",
                                                                    children: [
                                                                        i.jsx(Ft, {
                                                                            className: "w-3.5 h-3.5 text-primary",
                                                                        }),
                                                                        i.jsx("span", {
                                                                            children: "Enviado junto com seu kit",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                i.jsxs("div", {
                                                    className:
                                                        "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 mt-4 border-t border-border",
                                                    children: [
                                                        i.jsxs("div", {
                                                            className: "flex items-baseline gap-2",
                                                            children: [
                                                                i.jsxs("span", {
                                                                    className:
                                                                        "text-sm text-muted-foreground line-through",
                                                                    children: [
                                                                        "R$ ",
                                                                        n.originalPrice.toFixed(2).replace(".", ","),
                                                                    ],
                                                                }),
                                                                i.jsxs("span", {
                                                                    className:
                                                                        "text-2xl md:text-3xl font-bold text-primary",
                                                                    children: [
                                                                        "R$ ",
                                                                        n.price.toFixed(2).replace(".", ","),
                                                                    ],
                                                                }),
                                                                i.jsxs(ve, {
                                                                    variant: "secondary",
                                                                    className:
                                                                        "bg-brasil-yellow/20 text-foreground text-xs",
                                                                    children: [
                                                                        "-",
                                                                        Math.round(
                                                                            (1 - n.price / n.originalPrice) * 100
                                                                        ),
                                                                        "%",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        i.jsxs("button", {
                                                            className:
                                                                "paradise-upsell-btn w-full sm:w-auto bg-gradient-brasil hover:opacity-90 text-white font-bold px-6 py-3 rounded-md flex items-center justify-center gap-2",
                                                            "data-offer-hash": n.offerHash,
                                                            "data-modal-title":
                                                                "Finalize com PIX para garantir essa condição!",
                                                            "data-copy-button-text": "Copiar Código PIX",
                                                            "data-modal-bg": "#ffffff",
                                                            "data-modal-title-color": "#1f2937",
                                                            "data-modal-btn-color": "#28a745",
                                                            "data-modal-btn-text-color": "#ffffff",
                                                            children: [
                                                                i.jsx(Wn, { className: "w-4 h-4" }),
                                                                n.buttonText,
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            },
                            n.id
                        )
                    ),
                }),
                i.jsx("div", {
                    className: "text-center",
                    children: i.jsx(ve, {
                        variant: "outline",
                        className: "border-destructive/30 text-destructive animate-pulse px-4 py-2",
                        children: "⏰ Ofertas válidas apenas por tempo limitado após sua doação",
                    }),
                }),
            ],
        });
    },
    Vj = () => (
        h.useEffect(() => {
            window.scrollTo(0, 0);
        }, []),
        i.jsxs("div", {
            className: "min-h-screen flex flex-col",
            children: [
                i.jsx(Gv, {}),
                i.jsx("main", {
                    className: "flex-1 flex items-center justify-center py-12 px-4",
                    children: i.jsxs("div", {
                        className: "max-w-3xl w-full text-center space-y-8 animate-fade-in",
                        children: [
                            i.jsx("div", {
                                className: "flex justify-center",
                                children: i.jsxs("div", {
                                    className: "relative",
                                    children: [
                                        i.jsx("div", {
                                            className:
                                                "absolute inset-0 bg-gradient-brasil rounded-full blur-2xl opacity-30 animate-pulse",
                                        }),
                                        i.jsx("div", {
                                            className: "relative bg-gradient-brasil p-6 rounded-full",
                                            children: i.jsx(Yf, { className: "w-16 h-16 text-white" }),
                                        }),
                                    ],
                                }),
                            }),
                            i.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                    i.jsx("h1", {
                                        className:
                                            "text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-brasil bg-clip-text text-transparent",
                                        children: "Obrigado pela sua Contribuição!",
                                    }),
                                    i.jsx("p", {
                                        className: "text-xl md:text-2xl text-foreground/80 font-medium",
                                        children: "Deus te abençoe! 🙏",
                                    }),
                                ],
                            }),
                            i.jsx("div", {
                                className:
                                    "bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-border shadow-lg",
                                children: i.jsxs("p", {
                                    className: "text-lg md:text-xl text-foreground leading-relaxed",
                                    children: [
                                        "Você acaba de fazer o ",
                                        i.jsx("span", {
                                            className: "font-bold text-primary",
                                            children: "bem para o Brasil",
                                        }),
                                        ". Sua generosidade vai transformar vidas e fortalecer nossa nação.",
                                    ],
                                }),
                            }),
                            i.jsxs("div", {
                                className: "flex justify-center gap-6 py-4",
                                children: [
                                    i.jsxs("div", {
                                        className: "flex flex-col items-center gap-2 text-primary",
                                        children: [
                                            i.jsx(bo, { className: "w-10 h-10 fill-primary animate-pulse" }),
                                            i.jsx("span", { className: "text-sm font-medium", children: "Amor" }),
                                        ],
                                    }),
                                    i.jsxs("div", {
                                        className: "flex flex-col items-center gap-2 text-secondary",
                                        children: [
                                            i.jsx(Es, { className: "w-10 h-10 fill-secondary" }),
                                            i.jsx("span", { className: "text-sm font-medium", children: "Esperança" }),
                                        ],
                                    }),
                                    i.jsxs("div", {
                                        className: "flex flex-col items-center gap-2 text-accent",
                                        children: [
                                            i.jsx(wo, { className: "w-10 h-10" }),
                                            i.jsx("span", {
                                                className: "text-sm font-medium",
                                                children: "Patriotismo",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsx("div", { className: "pt-8", children: i.jsx(Uj, {}) }),
                            i.jsxs("div", {
                                className: "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg",
                                children: [
                                    i.jsx("h2", {
                                        className: "text-xl md:text-2xl font-bold text-foreground mb-6",
                                        children: "Acompanhe seu Pedido",
                                    }),
                                    i.jsxs("div", {
                                        className: "space-y-4",
                                        children: [
                                            i.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    i.jsx("div", {
                                                        className:
                                                            "flex-shrink-0 w-10 h-10 rounded-full bg-gradient-brasil flex items-center justify-center",
                                                        children: i.jsx(Yf, { className: "w-6 h-6 text-white" }),
                                                    }),
                                                    i.jsxs("div", {
                                                        className: "flex-1 text-left",
                                                        children: [
                                                            i.jsx("h3", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Pagamento Recebido",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Sua contribuição foi confirmada com sucesso",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    i.jsx("div", {
                                                        className:
                                                            "flex-shrink-0 w-10 h-10 rounded-full bg-gradient-patriota flex items-center justify-center animate-pulse",
                                                        children: i.jsx("div", {
                                                            className: "w-3 h-3 bg-white rounded-full",
                                                        }),
                                                    }),
                                                    i.jsxs("div", {
                                                        className: "flex-1 text-left",
                                                        children: [
                                                            i.jsx("h3", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Separando o Kit",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children:
                                                                    "Estamos preparando seus itens personalizados",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-4 opacity-50",
                                                children: [
                                                    i.jsx("div", {
                                                        className:
                                                            "flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center",
                                                        children: i.jsx("div", {
                                                            className: "w-3 h-3 bg-muted rounded-full",
                                                        }),
                                                    }),
                                                    i.jsxs("div", {
                                                        className: "flex-1 text-left",
                                                        children: [
                                                            i.jsx("h3", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Personalização",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Adicionando seu nome aos itens",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-4 opacity-50",
                                                children: [
                                                    i.jsx("div", {
                                                        className:
                                                            "flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center",
                                                        children: i.jsx("div", {
                                                            className: "w-3 h-3 bg-muted rounded-full",
                                                        }),
                                                    }),
                                                    i.jsxs("div", {
                                                        className: "flex-1 text-left",
                                                        children: [
                                                            i.jsx("h3", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Em Trânsito",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Seu kit será enviado em breve",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            i.jsxs("div", {
                                                className: "flex items-start gap-4 opacity-50",
                                                children: [
                                                    i.jsx("div", {
                                                        className:
                                                            "flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center",
                                                        children: i.jsx("div", {
                                                            className: "w-3 h-3 bg-muted rounded-full",
                                                        }),
                                                    }),
                                                    i.jsxs("div", {
                                                        className: "flex-1 text-left",
                                                        children: [
                                                            i.jsx("h3", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Entregue",
                                                            }),
                                                            i.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Aguardando chegada no destino",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsx("p", {
                                className: "text-sm text-muted-foreground italic pt-8",
                                children: '"Juntos somos mais fortes. Juntos pelo Brasil!" 🇧🇷',
                            }),
                            i.jsx("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
                                children: i.jsxs(Le, {
                                    onClick: () => lt("/contribua"),
                                    className: "bg-gradient-brasil hover:opacity-90 text-white",
                                    size: "lg",
                                    children: [i.jsx(wo, { className: "w-4 h-4 mr-2" }), "Fazer Outra Doação"],
                                }),
                            }),
                        ],
                    }),
                }),
                i.jsx(Lx, {}),
            ],
        })
    ),
    Wj = () => {
        const e = hd();
        return (
            h.useEffect(() => {
                console.error("404 Error: User attempted to access non-existent route:", e.pathname);
            }, [e.pathname]),
            i.jsx("div", {
                className: "flex min-h-screen items-center justify-center bg-muted",
                children: i.jsxs("div", {
                    className: "text-center",
                    children: [
                        i.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
                        i.jsx("p", {
                            className: "mb-4 text-xl text-muted-foreground",
                            children: "Oops! Page not found",
                        }),
                        i.jsx("a", {
                            href: "/",
                            className: "text-primary underline hover:text-primary/90",
                            children: "Return to Home",
                        }),
                    ],
                }),
            })
        );
    },
    Hj = new bS(),
    Kj = () =>
        i.jsx(SS, {
            client: Hj,
            children: i.jsxs(X2, {
                children: [
                    i.jsx(_b, {}),
                    i.jsx(dN, {}),
                    i.jsx(vE, {
                        children: i.jsxs(pE, {
                            children: [
                                i.jsx(tr, { path: "/", element: i.jsx($m, {}) }),
                                i.jsx(tr, { path: "/contribua", element: i.jsx($m, {}) }),
                                i.jsx(tr, { path: "/personalizar", element: i.jsx(zj, {}) }),
                                i.jsx(tr, { path: "/endereco", element: i.jsx($j, {}) }),
                                i.jsx(tr, { path: "/obrigado", element: i.jsx(Vj, {}) }),
                                i.jsx(tr, { path: "*", element: i.jsx(Wj, {}) }),
                            ],
                        }),
                    }),
                ],
            }),
        });
cg(document.getElementById("root")).render(i.jsx(Kj, {}));
