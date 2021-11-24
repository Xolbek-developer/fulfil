(() => {
  "use strict";
  var t = { amdO: {} };
  t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })();
  const e = () => {
      try {
        (e = void 0),
          (n = function (e) {
            var n =
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof window
                ? window
                : void 0 !== t.g
                ? t.g
                : "undefined" != typeof self
                ? self
                : {};
            function r(t) {
              var e = { exports: {} };
              return t(e, e.exports), e.exports;
            }
            var u = function (t) {
                return t && t.Math == Math && t;
              },
              i =
                u("object" == typeof globalThis && globalThis) ||
                u("object" == typeof window && window) ||
                u("object" == typeof self && self) ||
                u("object" == typeof n && n) ||
                (function () {
                  return this;
                })() ||
                Function("return this")(),
              a = function (t) {
                try {
                  return !!t();
                } catch (t) {
                  return !0;
                }
              },
              s = !a(function () {
                return (
                  7 !=
                  Object.defineProperty({}, 1, {
                    get: function () {
                      return 7;
                    },
                  })[1]
                );
              }),
              o = {}.propertyIsEnumerable,
              l = Object.getOwnPropertyDescriptor,
              h = {
                f:
                  l && !o.call({ 1: 2 }, 1)
                    ? function (t) {
                        var e = l(this, t);
                        return !!e && e.enumerable;
                      }
                    : o,
              },
              c = function (t, e) {
                return {
                  enumerable: !(1 & t),
                  configurable: !(2 & t),
                  writable: !(4 & t),
                  value: e,
                };
              },
              f = {}.toString,
              p = "".split,
              d = a(function () {
                return !Object("z").propertyIsEnumerable(0);
              })
                ? function (t) {
                    return "String" ==
                      (function (t) {
                        return f.call(t).slice(8, -1);
                      })(t)
                      ? p.call(t, "")
                      : Object(t);
                  }
                : Object,
              v = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t;
              },
              g = function (t) {
                return d(v(t));
              },
              k = function (t) {
                return "object" == typeof t
                  ? null !== t
                  : "function" == typeof t;
              },
              y = function (t, e) {
                if (!k(t)) return t;
                var n, r;
                if (
                  e &&
                  "function" == typeof (n = t.toString) &&
                  !k((r = n.call(t)))
                )
                  return r;
                if ("function" == typeof (n = t.valueOf) && !k((r = n.call(t))))
                  return r;
                if (
                  !e &&
                  "function" == typeof (n = t.toString) &&
                  !k((r = n.call(t)))
                )
                  return r;
                throw TypeError("Can't convert object to primitive value");
              },
              m = {}.hasOwnProperty,
              _ = function (t, e) {
                return m.call(t, e);
              },
              b = i.document,
              A = k(b) && k(b.createElement),
              C =
                !s &&
                !a(function () {
                  return (
                    7 !=
                    Object.defineProperty(
                      ("div", A ? b.createElement("div") : {}),
                      "a",
                      {
                        get: function () {
                          return 7;
                        },
                      }
                    ).a
                  );
                }),
              E = Object.getOwnPropertyDescriptor,
              F = {
                f: s
                  ? E
                  : function (t, e) {
                      if (((t = g(t)), (e = y(e, !0)), C))
                        try {
                          return E(t, e);
                        } catch (t) {}
                      if (_(t, e)) return c(!h.f.call(t, e), t[e]);
                    },
              },
              S = function (t) {
                if (!k(t)) throw TypeError(String(t) + " is not an object");
                return t;
              },
              w = Object.defineProperty,
              D = {
                f: s
                  ? w
                  : function (t, e, n) {
                      if ((S(t), (e = y(e, !0)), S(n), C))
                        try {
                          return w(t, e, n);
                        } catch (t) {}
                      if ("get" in n || "set" in n)
                        throw TypeError("Accessors not supported");
                      return "value" in n && (t[e] = n.value), t;
                    },
              },
              B = s
                ? function (t, e, n) {
                    return D.f(t, e, c(1, n));
                  }
                : function (t, e, n) {
                    return (t[e] = n), t;
                  },
              M = function (t, e) {
                try {
                  B(i, t, e);
                } catch (n) {
                  i[t] = e;
                }
                return e;
              },
              P = "__core-js_shared__",
              x = i[P] || M(P, {}),
              O = Function.toString;
            "function" != typeof x.inspectSource &&
              (x.inspectSource = function (t) {
                return O.call(t);
              });
            var T,
              I,
              j,
              V,
              R = x.inspectSource,
              L = i.WeakMap,
              N = "function" == typeof L && /native code/.test(R(L)),
              U = r(function (t) {
                (t.exports = function (t, e) {
                  return x[t] || (x[t] = void 0 !== e ? e : {});
                })("versions", []).push({
                  version: "3.8.3",
                  mode: "global",
                  copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
                });
              }),
              z = 0,
              H = Math.random(),
              q = U("keys"),
              Y = {},
              Z = i.WeakMap;
            if (N) {
              var $ = x.state || (x.state = new Z()),
                K = $.get,
                G = $.has,
                W = $.set;
              (T = function (t, e) {
                return (e.facade = t), W.call($, t, e), e;
              }),
                (I = function (t) {
                  return K.call($, t) || {};
                }),
                (j = function (t) {
                  return G.call($, t);
                });
            } else {
              var J =
                q[(V = "state")] ||
                (q[V] = (function (t) {
                  return "Symbol(" + String(t) + ")_" + (++z + H).toString(36);
                })(V));
              (Y[J] = !0),
                (T = function (t, e) {
                  return (e.facade = t), B(t, J, e), e;
                }),
                (I = function (t) {
                  return _(t, J) ? t[J] : {};
                }),
                (j = function (t) {
                  return _(t, J);
                });
            }
            var X = {
                set: T,
                get: I,
                has: j,
                enforce: function (t) {
                  return j(t) ? I(t) : T(t, {});
                },
                getterFor: function (t) {
                  return function (e) {
                    var n;
                    if (!k(e) || (n = I(e)).type !== t)
                      throw TypeError(
                        "Incompatible receiver, " + t + " required"
                      );
                    return n;
                  };
                },
              },
              Q = r(function (t) {
                var e = X.get,
                  n = X.enforce,
                  r = String(String).split("String");
                (t.exports = function (t, e, u, a) {
                  var s,
                    o = !!a && !!a.unsafe,
                    l = !!a && !!a.enumerable,
                    h = !!a && !!a.noTargetGet;
                  "function" == typeof u &&
                    ("string" != typeof e || _(u, "name") || B(u, "name", e),
                    (s = n(u)).source ||
                      (s.source = r.join("string" == typeof e ? e : ""))),
                    t !== i
                      ? (o ? !h && t[e] && (l = !0) : delete t[e],
                        l ? (t[e] = u) : B(t, e, u))
                      : l
                      ? (t[e] = u)
                      : M(e, u);
                })(Function.prototype, "toString", function () {
                  return (
                    ("function" == typeof this && e(this).source) || R(this)
                  );
                });
              }),
              tt = i,
              et = function (t) {
                return "function" == typeof t ? t : void 0;
              },
              nt = function (t, e) {
                return arguments.length < 2
                  ? et(tt[t]) || et(i[t])
                  : (tt[t] && tt[t][e]) || (i[t] && i[t][e]);
              },
              rt = Math.ceil,
              ut = Math.floor,
              it = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? ut : rt)(t);
              },
              at = Math.min,
              st = function (t) {
                return t > 0 ? at(it(t), 9007199254740991) : 0;
              },
              ot = Math.max,
              lt = Math.min,
              ht = function (t) {
                return function (e, n, r) {
                  var u,
                    i = g(e),
                    a = st(i.length),
                    s = (function (t, e) {
                      var n = it(t);
                      return n < 0 ? ot(n + e, 0) : lt(n, e);
                    })(r, a);
                  if (t && n != n) {
                    for (; a > s; ) if ((u = i[s++]) != u) return !0;
                  } else
                    for (; a > s; s++)
                      if ((t || s in i) && i[s] === n) return t || s || 0;
                  return !t && -1;
                };
              },
              ct = (ht(!0), ht(!1)),
              ft = function (t, e) {
                var n,
                  r = g(t),
                  u = 0,
                  i = [];
                for (n in r) !_(Y, n) && _(r, n) && i.push(n);
                for (; e.length > u; )
                  _(r, (n = e[u++])) && (~ct(i, n) || i.push(n));
                return i;
              },
              pt = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
              ],
              dt = pt.concat("length", "prototype"),
              vt = {
                f:
                  Object.getOwnPropertyNames ||
                  function (t) {
                    return ft(t, dt);
                  },
              },
              gt = { f: Object.getOwnPropertySymbols },
              kt =
                nt("Reflect", "ownKeys") ||
                function (t) {
                  var e = vt.f(S(t)),
                    n = gt.f;
                  return n ? e.concat(n(t)) : e;
                },
              yt = function (t, e) {
                for (
                  var n = kt(e), r = D.f, u = F.f, i = 0;
                  i < n.length;
                  i++
                ) {
                  var a = n[i];
                  _(t, a) || r(t, a, u(e, a));
                }
              },
              mt = /#|\.prototype\./,
              _t = function (t, e) {
                var n = At[bt(t)];
                return (
                  n == Et || (n != Ct && ("function" == typeof e ? a(e) : !!e))
                );
              },
              bt = (_t.normalize = function (t) {
                return String(t).replace(mt, ".").toLowerCase();
              }),
              At = (_t.data = {}),
              Ct = (_t.NATIVE = "N"),
              Et = (_t.POLYFILL = "P"),
              Ft = _t,
              St = F.f,
              wt = function (t, e) {
                var n,
                  r,
                  u,
                  a,
                  s,
                  o = t.target,
                  l = t.global,
                  h = t.stat;
                if ((n = l ? i : h ? i[o] || M(o, {}) : (i[o] || {}).prototype))
                  for (r in e) {
                    if (
                      ((a = e[r]),
                      (u = t.noTargetGet ? (s = St(n, r)) && s.value : n[r]),
                      !Ft(l ? r : o + (h ? "." : "#") + r, t.forced) &&
                        void 0 !== u)
                    ) {
                      if (typeof a == typeof u) continue;
                      yt(a, u);
                    }
                    (t.sham || (u && u.sham)) && B(a, "sham", !0),
                      Q(n, r, a, t);
                  }
              },
              Dt =
                Object.keys ||
                function (t) {
                  return ft(t, pt);
                },
              Bt = function (t) {
                return Object(v(t));
              },
              Mt = Object.assign,
              Pt = Object.defineProperty,
              xt =
                !Mt ||
                a(function () {
                  if (
                    s &&
                    1 !==
                      Mt(
                        { b: 1 },
                        Mt(
                          Pt({}, "a", {
                            enumerable: !0,
                            get: function () {
                              Pt(this, "b", { value: 3, enumerable: !1 });
                            },
                          }),
                          { b: 2 }
                        )
                      ).b
                  )
                    return !0;
                  var t = {},
                    e = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                  return (
                    (t[n] = 7),
                    r.split("").forEach(function (t) {
                      e[t] = t;
                    }),
                    7 != Mt({}, t)[n] || Dt(Mt({}, e)).join("") != r
                  );
                })
                  ? function (t, e) {
                      for (
                        var n = Bt(t),
                          r = arguments.length,
                          u = 1,
                          i = gt.f,
                          a = h.f;
                        r > u;

                      )
                        for (
                          var o,
                            l = d(arguments[u++]),
                            c = i ? Dt(l).concat(i(l)) : Dt(l),
                            f = c.length,
                            p = 0;
                          f > p;

                        )
                          (o = c[p++]), (s && !a.call(l, o)) || (n[o] = l[o]);
                      return n;
                    }
                  : Mt;
            wt(
              { target: "Object", stat: !0, forced: Object.assign !== xt },
              { assign: xt }
            );
            var Ot =
                "".repeat ||
                function (t) {
                  var e = String(v(this)),
                    n = "",
                    r = it(t);
                  if (r < 0 || r == 1 / 0)
                    throw RangeError("Wrong number of repetitions");
                  for (; r > 0; (r >>>= 1) && (e += e)) 1 & r && (n += e);
                  return n;
                },
              Tt = Math.ceil,
              It = function (t) {
                return function (e, n, r) {
                  var u,
                    i,
                    a = String(v(e)),
                    s = a.length,
                    o = void 0 === r ? " " : String(r),
                    l = st(n);
                  return l <= s || "" == o
                    ? a
                    : ((u = l - s),
                      (i = Ot.call(o, Tt(u / o.length))).length > u &&
                        (i = i.slice(0, u)),
                      t ? a + i : i + a);
                };
              },
              jt = { start: It(!1), end: It(!0) },
              Vt = nt("navigator", "userAgent") || "",
              Rt = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Vt),
              Lt = jt.end;
            wt(
              { target: "String", proto: !0, forced: Rt },
              {
                padEnd: function (t) {
                  return Lt(
                    this,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            );
            var Nt = jt.start;
            function Ut(t) {
              return (
                (Ut =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      }),
                Ut(t)
              );
            }
            function zt(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            }
            function Ht(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            function qt(t, e, n) {
              return e && Ht(t.prototype, e), n && Ht(t, n), t;
            }
            function Yt(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && $t(t, e);
            }
            function Zt(t) {
              return (
                (Zt = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    }),
                Zt(t)
              );
            }
            function $t(t, e) {
              return (
                ($t =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
                $t(t, e)
              );
            }
            function Kt(t, e) {
              if (null == t) return {};
              var n,
                r,
                u = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    u = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (u[n] = t[n]);
                  return u;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    e.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(t, n) &&
                        (u[n] = t[n]));
              }
              return u;
            }
            function Gt(t, e) {
              return !e || ("object" != typeof e && "function" != typeof e)
                ? (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t)
                : e;
            }
            function Wt(t) {
              var e = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })();
              return function () {
                var n,
                  r = Zt(t);
                if (e) {
                  var u = Zt(this).constructor;
                  n = Reflect.construct(r, arguments, u);
                } else n = r.apply(this, arguments);
                return Gt(this, n);
              };
            }
            function Jt(t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = Zt(t));

              );
              return t;
            }
            function Xt(t, e, n) {
              return (
                (Xt =
                  "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                        var r = Jt(t, e);
                        if (r) {
                          var u = Object.getOwnPropertyDescriptor(r, e);
                          return u.get ? u.get.call(n) : u.value;
                        }
                      }),
                Xt(t, e, n || t)
              );
            }
            function Qt(t, e, n, r) {
              return (
                (Qt =
                  "undefined" != typeof Reflect && Reflect.set
                    ? Reflect.set
                    : function (t, e, n, r) {
                        var u,
                          i = Jt(t, e);
                        if (i) {
                          if ((u = Object.getOwnPropertyDescriptor(i, e)).set)
                            return u.set.call(r, n), !0;
                          if (!u.writable) return !1;
                        }
                        if ((u = Object.getOwnPropertyDescriptor(r, e))) {
                          if (!u.writable) return !1;
                          (u.value = n), Object.defineProperty(r, e, u);
                        } else
                          !(function (t, e, n) {
                            e in t
                              ? Object.defineProperty(t, e, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (t[e] = n);
                          })(r, e, n);
                        return !0;
                      }),
                Qt(t, e, n, r)
              );
            }
            function te(t, e, n, r, u) {
              if (!Qt(t, e, n, r || t) && u)
                throw new Error("failed to set property");
              return n;
            }
            function ee(t, e) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, e) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(t)
                  ) {
                    var n = [],
                      r = !0,
                      u = !1,
                      i = void 0;
                    try {
                      for (
                        var a, s = t[Symbol.iterator]();
                        !(r = (a = s.next()).done) &&
                        (n.push(a.value), !e || n.length !== e);
                        r = !0
                      );
                    } catch (t) {
                      (u = !0), (i = t);
                    } finally {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (u) throw i;
                      }
                    }
                    return n;
                  }
                })(t, e) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return ne(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? ne(t, e)
                        : void 0
                    );
                  }
                })(t, e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function ne(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
              return r;
            }
            function re(t) {
              return "string" == typeof t || t instanceof String;
            }
            wt(
              { target: "String", proto: !0, forced: Rt },
              {
                padStart: function (t) {
                  return Nt(
                    this,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            ),
              wt({ target: "String", proto: !0 }, { repeat: Ot }),
              wt({ global: !0 }, { globalThis: i });
            var ue = "NONE",
              ie = "LEFT",
              ae = "FORCE_LEFT",
              se = "RIGHT",
              oe = "FORCE_RIGHT";
            function le(t) {
              switch (t) {
                case ie:
                  return ae;
                case se:
                  return oe;
                default:
                  return t;
              }
            }
            function he(t) {
              return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
            }
            function ce(t, e) {
              if (e === t) return !0;
              var n,
                r = Array.isArray(e),
                u = Array.isArray(t);
              if (r && u) {
                if (e.length != t.length) return !1;
                for (n = 0; n < e.length; n++) if (!ce(e[n], t[n])) return !1;
                return !0;
              }
              if (r != u) return !1;
              if (e && t && "object" === Ut(e) && "object" === Ut(t)) {
                var i = e instanceof Date,
                  a = t instanceof Date;
                if (i && a) return e.getTime() == t.getTime();
                if (i != a) return !1;
                var s = e instanceof RegExp,
                  o = t instanceof RegExp;
                if (s && o) return e.toString() == t.toString();
                if (s != o) return !1;
                var l = Object.keys(e);
                for (n = 0; n < l.length; n++)
                  if (!Object.prototype.hasOwnProperty.call(t, l[n])) return !1;
                for (n = 0; n < l.length; n++)
                  if (!ce(t[l[n]], e[l[n]])) return !1;
                return !0;
              }
              return (
                !(
                  !e ||
                  !t ||
                  "function" != typeof e ||
                  "function" != typeof t
                ) && e.toString() === t.toString()
              );
            }
            var fe = (function () {
                function t(e, n, r, u) {
                  for (
                    zt(this, t),
                      this.value = e,
                      this.cursorPos = n,
                      this.oldValue = r,
                      this.oldSelection = u;
                    this.value.slice(0, this.startChangePos) !==
                    this.oldValue.slice(0, this.startChangePos);

                  )
                    --this.oldSelection.start;
                }
                return (
                  qt(t, [
                    {
                      key: "startChangePos",
                      get: function () {
                        return Math.min(
                          this.cursorPos,
                          this.oldSelection.start
                        );
                      },
                    },
                    {
                      key: "insertedCount",
                      get: function () {
                        return this.cursorPos - this.startChangePos;
                      },
                    },
                    {
                      key: "inserted",
                      get: function () {
                        return this.value.substr(
                          this.startChangePos,
                          this.insertedCount
                        );
                      },
                    },
                    {
                      key: "removedCount",
                      get: function () {
                        return Math.max(
                          this.oldSelection.end - this.startChangePos ||
                            this.oldValue.length - this.value.length,
                          0
                        );
                      },
                    },
                    {
                      key: "removed",
                      get: function () {
                        return this.oldValue.substr(
                          this.startChangePos,
                          this.removedCount
                        );
                      },
                    },
                    {
                      key: "head",
                      get: function () {
                        return this.value.substring(0, this.startChangePos);
                      },
                    },
                    {
                      key: "tail",
                      get: function () {
                        return this.value.substring(
                          this.startChangePos + this.insertedCount
                        );
                      },
                    },
                    {
                      key: "removeDirection",
                      get: function () {
                        return !this.removedCount || this.insertedCount
                          ? ue
                          : this.oldSelection.end === this.cursorPos ||
                            this.oldSelection.start === this.cursorPos
                          ? se
                          : ie;
                      },
                    },
                  ]),
                  t
                );
              })(),
              pe = (function () {
                function t(e) {
                  zt(this, t),
                    Object.assign(
                      this,
                      { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
                      e
                    );
                }
                return (
                  qt(t, [
                    {
                      key: "aggregate",
                      value: function (t) {
                        return (
                          (this.rawInserted += t.rawInserted),
                          (this.skip = this.skip || t.skip),
                          (this.inserted += t.inserted),
                          (this.tailShift += t.tailShift),
                          this
                        );
                      },
                    },
                    {
                      key: "offset",
                      get: function () {
                        return this.tailShift + this.inserted.length;
                      },
                    },
                  ]),
                  t
                );
              })(),
              de = (function () {
                function t() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                  zt(this, t),
                    (this.value = e),
                    (this.from = n),
                    (this.stop = r);
                }
                return (
                  qt(t, [
                    {
                      key: "toString",
                      value: function () {
                        return this.value;
                      },
                    },
                    {
                      key: "extend",
                      value: function (t) {
                        this.value += String(t);
                      },
                    },
                    {
                      key: "appendTo",
                      value: function (t) {
                        return t
                          .append(this.toString(), { tail: !0 })
                          .aggregate(t._appendPlaceholder());
                      },
                    },
                    {
                      key: "state",
                      get: function () {
                        return {
                          value: this.value,
                          from: this.from,
                          stop: this.stop,
                        };
                      },
                      set: function (t) {
                        Object.assign(this, t);
                      },
                    },
                    {
                      key: "shiftBefore",
                      value: function (t) {
                        if (this.from >= t || !this.value.length) return "";
                        var e = this.value[0];
                        return (this.value = this.value.slice(1)), e;
                      },
                    },
                  ]),
                  t
                );
              })();
            function ve(t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return new ve.InputMask(t, e);
            }
            var ge = (function () {
              function t(e) {
                zt(this, t),
                  (this._value = ""),
                  this._update(Object.assign({}, t.DEFAULTS, e)),
                  (this.isInitialized = !0);
              }
              return (
                qt(t, [
                  {
                    key: "updateOptions",
                    value: function (t) {
                      Object.keys(t).length &&
                        this.withValueRefresh(this._update.bind(this, t));
                    },
                  },
                  {
                    key: "_update",
                    value: function (t) {
                      Object.assign(this, t);
                    },
                  },
                  {
                    key: "state",
                    get: function () {
                      return { _value: this.value };
                    },
                    set: function (t) {
                      this._value = t._value;
                    },
                  },
                  {
                    key: "reset",
                    value: function () {
                      this._value = "";
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this._value;
                    },
                    set: function (t) {
                      this.resolve(t);
                    },
                  },
                  {
                    key: "resolve",
                    value: function (t) {
                      return (
                        this.reset(),
                        this.append(t, { input: !0 }, ""),
                        this.doCommit(),
                        this.value
                      );
                    },
                  },
                  {
                    key: "unmaskedValue",
                    get: function () {
                      return this.value;
                    },
                    set: function (t) {
                      this.reset(), this.append(t, {}, ""), this.doCommit();
                    },
                  },
                  {
                    key: "typedValue",
                    get: function () {
                      return this.doParse(this.value);
                    },
                    set: function (t) {
                      this.value = this.doFormat(t);
                    },
                  },
                  {
                    key: "rawInputValue",
                    get: function () {
                      return this.extractInput(0, this.value.length, {
                        raw: !0,
                      });
                    },
                    set: function (t) {
                      this.reset(),
                        this.append(t, { raw: !0 }, ""),
                        this.doCommit();
                    },
                  },
                  {
                    key: "isComplete",
                    get: function () {
                      return !0;
                    },
                  },
                  {
                    key: "nearestInputPos",
                    value: function (t, e) {
                      return t;
                    },
                  },
                  {
                    key: "extractInput",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length;
                      return this.value.slice(t, e);
                    },
                  },
                  {
                    key: "extractTail",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length;
                      return new de(this.extractInput(t, e), t);
                    },
                  },
                  {
                    key: "appendTail",
                    value: function (t) {
                      return re(t) && (t = new de(String(t))), t.appendTo(this);
                    },
                  },
                  {
                    key: "_appendCharRaw",
                    value: function (t) {
                      return t
                        ? ((this._value += t),
                          new pe({ inserted: t, rawInserted: t }))
                        : new pe();
                    },
                  },
                  {
                    key: "_appendChar",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = this.state,
                        u = this._appendCharRaw(this.doPrepare(t, e), e);
                      if (u.inserted) {
                        var i,
                          a = !1 !== this.doValidate(e);
                        if (a && null != n) {
                          var s = this.state;
                          this.overwrite &&
                            ((i = n.state), n.shiftBefore(this.value.length));
                          var o = this.appendTail(n);
                          (a = o.rawInserted === n.toString()) &&
                            o.inserted &&
                            (this.state = s);
                        }
                        a ||
                          ((u = new pe()),
                          (this.state = r),
                          n && i && (n.state = i));
                      }
                      return u;
                    },
                  },
                  {
                    key: "_appendPlaceholder",
                    value: function () {
                      return new pe();
                    },
                  },
                  {
                    key: "append",
                    value: function (t, e, n) {
                      if (!re(t)) throw new Error("value should be string");
                      var r = new pe(),
                        u = re(n) ? new de(String(n)) : n;
                      e && e.tail && (e._beforeTailState = this.state);
                      for (var i = 0; i < t.length; ++i)
                        r.aggregate(this._appendChar(t[i], e, u));
                      return (
                        null != u &&
                          (r.tailShift += this.appendTail(u).tailShift),
                        r
                      );
                    },
                  },
                  {
                    key: "remove",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length;
                      return (
                        (this._value =
                          this.value.slice(0, t) + this.value.slice(e)),
                        new pe()
                      );
                    },
                  },
                  {
                    key: "withValueRefresh",
                    value: function (t) {
                      if (this._refreshing || !this.isInitialized) return t();
                      this._refreshing = !0;
                      var e = this.rawInputValue,
                        n = this.value,
                        r = t();
                      return (
                        (this.rawInputValue = e),
                        this.value &&
                          this.value !== n &&
                          0 === n.indexOf(this.value) &&
                          this.append(n.slice(this.value.length), {}, ""),
                        delete this._refreshing,
                        r
                      );
                    },
                  },
                  {
                    key: "runIsolated",
                    value: function (t) {
                      if (this._isolated || !this.isInitialized) return t(this);
                      this._isolated = !0;
                      var e = this.state,
                        n = t(this);
                      return (this.state = e), delete this._isolated, n;
                    },
                  },
                  {
                    key: "doPrepare",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.prepare ? this.prepare(t, this, e) : t;
                    },
                  },
                  {
                    key: "doValidate",
                    value: function (t) {
                      return (
                        (!this.validate ||
                          this.validate(this.value, this, t)) &&
                        (!this.parent || this.parent.doValidate(t))
                      );
                    },
                  },
                  {
                    key: "doCommit",
                    value: function () {
                      this.commit && this.commit(this.value, this);
                    },
                  },
                  {
                    key: "doFormat",
                    value: function (t) {
                      return this.format ? this.format(t, this) : t;
                    },
                  },
                  {
                    key: "doParse",
                    value: function (t) {
                      return this.parse ? this.parse(t, this) : t;
                    },
                  },
                  {
                    key: "splice",
                    value: function (t, e, n, r) {
                      var u = t + e,
                        i = this.extractTail(u),
                        a = this.nearestInputPos(t, r);
                      return new pe({ tailShift: a - t })
                        .aggregate(this.remove(a))
                        .aggregate(this.append(n, { input: !0 }, i));
                    },
                  },
                ]),
                t
              );
            })();
            function ke(t) {
              if (null == t) throw new Error("mask property should be defined");
              return t instanceof RegExp
                ? ve.MaskedRegExp
                : re(t)
                ? ve.MaskedPattern
                : t instanceof Date || t === Date
                ? ve.MaskedDate
                : t instanceof Number || "number" == typeof t || t === Number
                ? ve.MaskedNumber
                : Array.isArray(t) || t === Array
                ? ve.MaskedDynamic
                : ve.Masked && t.prototype instanceof ve.Masked
                ? t
                : t instanceof Function
                ? ve.MaskedFunction
                : t instanceof ve.Masked
                ? t.constructor
                : (console.warn("Mask not found for mask", t), ve.Masked);
            }
            function ye(t) {
              if (ve.Masked && t instanceof ve.Masked) return t;
              var e = (t = Object.assign({}, t)).mask;
              if (ve.Masked && e instanceof ve.Masked) return e;
              var n = ke(e);
              if (!n)
                throw new Error(
                  "Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask."
                );
              return new n(t);
            }
            (ge.DEFAULTS = {
              format: function (t) {
                return t;
              },
              parse: function (t) {
                return t;
              },
            }),
              (ve.Masked = ge),
              (ve.createMask = ye);
            var me = {
                0: /\d/,
                a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                "*": /./,
              },
              _e = (function () {
                function t(e) {
                  zt(this, t);
                  var n = e.mask,
                    r = Kt(e, ["mask"]);
                  (this.masked = ye({ mask: n })), Object.assign(this, r);
                }
                return (
                  qt(t, [
                    {
                      key: "reset",
                      value: function () {
                        (this._isFilled = !1), this.masked.reset();
                      },
                    },
                    {
                      key: "remove",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : this.value.length;
                        return 0 === t && e >= 1
                          ? ((this._isFilled = !1), this.masked.remove(t, e))
                          : new pe();
                      },
                    },
                    {
                      key: "value",
                      get: function () {
                        return (
                          this.masked.value ||
                          (this._isFilled && !this.isOptional
                            ? this.placeholderChar
                            : "")
                        );
                      },
                    },
                    {
                      key: "unmaskedValue",
                      get: function () {
                        return this.masked.unmaskedValue;
                      },
                    },
                    {
                      key: "isComplete",
                      get: function () {
                        return Boolean(this.masked.value) || this.isOptional;
                      },
                    },
                    {
                      key: "_appendChar",
                      value: function (t) {
                        var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        if (this._isFilled) return new pe();
                        var n = this.masked.state,
                          r = this.masked._appendChar(t, e);
                        return (
                          r.inserted &&
                            !1 === this.doValidate(e) &&
                            ((r.inserted = r.rawInserted = ""),
                            (this.masked.state = n)),
                          r.inserted ||
                            this.isOptional ||
                            this.lazy ||
                            e.input ||
                            (r.inserted = this.placeholderChar),
                          (r.skip = !r.inserted && !this.isOptional),
                          (this._isFilled = Boolean(r.inserted)),
                          r
                        );
                      },
                    },
                    {
                      key: "append",
                      value: function () {
                        var t;
                        return (t = this.masked).append.apply(t, arguments);
                      },
                    },
                    {
                      key: "_appendPlaceholder",
                      value: function () {
                        var t = new pe();
                        return (
                          this._isFilled ||
                            this.isOptional ||
                            ((this._isFilled = !0),
                            (t.inserted = this.placeholderChar)),
                          t
                        );
                      },
                    },
                    {
                      key: "extractTail",
                      value: function () {
                        var t;
                        return (t = this.masked).extractTail.apply(
                          t,
                          arguments
                        );
                      },
                    },
                    {
                      key: "appendTail",
                      value: function () {
                        var t;
                        return (t = this.masked).appendTail.apply(t, arguments);
                      },
                    },
                    {
                      key: "extractInput",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : this.value.length,
                          n = arguments.length > 2 ? arguments[2] : void 0;
                        return this.masked.extractInput(t, e, n);
                      },
                    },
                    {
                      key: "nearestInputPos",
                      value: function (t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : ue,
                          n = 0,
                          r = this.value.length,
                          u = Math.min(Math.max(t, n), r);
                        switch (e) {
                          case ie:
                          case ae:
                            return this.isComplete ? u : n;
                          case se:
                          case oe:
                            return this.isComplete ? u : r;
                          default:
                            return u;
                        }
                      },
                    },
                    {
                      key: "doValidate",
                      value: function () {
                        var t, e;
                        return (
                          (t = this.masked).doValidate.apply(t, arguments) &&
                          (!this.parent ||
                            (e = this.parent).doValidate.apply(e, arguments))
                        );
                      },
                    },
                    {
                      key: "doCommit",
                      value: function () {
                        this.masked.doCommit();
                      },
                    },
                    {
                      key: "state",
                      get: function () {
                        return {
                          masked: this.masked.state,
                          _isFilled: this._isFilled,
                        };
                      },
                      set: function (t) {
                        (this.masked.state = t.masked),
                          (this._isFilled = t._isFilled);
                      },
                    },
                  ]),
                  t
                );
              })(),
              be = (function () {
                function t(e) {
                  zt(this, t), Object.assign(this, e), (this._value = "");
                }
                return (
                  qt(t, [
                    {
                      key: "value",
                      get: function () {
                        return this._value;
                      },
                    },
                    {
                      key: "unmaskedValue",
                      get: function () {
                        return this.isUnmasking ? this.value : "";
                      },
                    },
                    {
                      key: "reset",
                      value: function () {
                        (this._isRawInput = !1), (this._value = "");
                      },
                    },
                    {
                      key: "remove",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : this._value.length;
                        return (
                          (this._value =
                            this._value.slice(0, t) + this._value.slice(e)),
                          this._value || (this._isRawInput = !1),
                          new pe()
                        );
                      },
                    },
                    {
                      key: "nearestInputPos",
                      value: function (t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : ue,
                          n = 0,
                          r = this._value.length;
                        switch (e) {
                          case ie:
                          case ae:
                            return n;
                          default:
                            return r;
                        }
                      },
                    },
                    {
                      key: "extractInput",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : this._value.length,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        return (
                          (n.raw &&
                            this._isRawInput &&
                            this._value.slice(t, e)) ||
                          ""
                        );
                      },
                    },
                    {
                      key: "isComplete",
                      get: function () {
                        return !0;
                      },
                    },
                    {
                      key: "_appendChar",
                      value: function (t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = new pe();
                        if (this._value) return n;
                        var r = this.char === t[0],
                          u =
                            r &&
                            (this.isUnmasking || e.input || e.raw) &&
                            !e.tail;
                        return (
                          u && (n.rawInserted = this.char),
                          (this._value = n.inserted = this.char),
                          (this._isRawInput = u && (e.raw || e.input)),
                          n
                        );
                      },
                    },
                    {
                      key: "_appendPlaceholder",
                      value: function () {
                        var t = new pe();
                        return (
                          this._value || (this._value = t.inserted = this.char),
                          t
                        );
                      },
                    },
                    {
                      key: "extractTail",
                      value: function () {
                        return (
                          (arguments.length > 1 && void 0 !== arguments[1]) ||
                            this.value.length,
                          new de("")
                        );
                      },
                    },
                    {
                      key: "appendTail",
                      value: function (t) {
                        return (
                          re(t) && (t = new de(String(t))), t.appendTo(this)
                        );
                      },
                    },
                    {
                      key: "append",
                      value: function (t, e, n) {
                        var r = this._appendChar(t, e);
                        return (
                          null != n &&
                            (r.tailShift += this.appendTail(n).tailShift),
                          r
                        );
                      },
                    },
                    { key: "doCommit", value: function () {} },
                    {
                      key: "state",
                      get: function () {
                        return {
                          _value: this._value,
                          _isRawInput: this._isRawInput,
                        };
                      },
                      set: function (t) {
                        Object.assign(this, t);
                      },
                    },
                  ]),
                  t
                );
              })(),
              Ae = (function () {
                function t() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  zt(this, t), (this.chunks = e), (this.from = n);
                }
                return (
                  qt(t, [
                    {
                      key: "toString",
                      value: function () {
                        return this.chunks.map(String).join("");
                      },
                    },
                    {
                      key: "extend",
                      value: function (e) {
                        if (String(e)) {
                          re(e) && (e = new de(String(e)));
                          var n = this.chunks[this.chunks.length - 1],
                            r =
                              n &&
                              (n.stop === e.stop || null == e.stop) &&
                              e.from === n.from + n.toString().length;
                          if (e instanceof de)
                            r ? n.extend(e.toString()) : this.chunks.push(e);
                          else if (e instanceof t) {
                            if (null == e.stop)
                              for (
                                var u;
                                e.chunks.length && null == e.chunks[0].stop;

                              )
                                ((u = e.chunks.shift()).from += e.from),
                                  this.extend(u);
                            e.toString() &&
                              ((e.stop = e.blockIndex), this.chunks.push(e));
                          }
                        }
                      },
                    },
                    {
                      key: "appendTo",
                      value: function (e) {
                        if (!(e instanceof ve.MaskedPattern))
                          return new de(this.toString()).appendTo(e);
                        for (
                          var n = new pe(), r = 0;
                          r < this.chunks.length && !n.skip;
                          ++r
                        ) {
                          var u = this.chunks[r],
                            i = e._mapPosToBlock(e.value.length),
                            a = u.stop,
                            s = void 0;
                          if (
                            (null != a &&
                              (!i || i.index <= a) &&
                              ((u instanceof t || e._stops.indexOf(a) >= 0) &&
                                n.aggregate(e._appendPlaceholder(a)),
                              (s = u instanceof t && e._blocks[a])),
                            s)
                          ) {
                            var o = s.appendTail(u);
                            (o.skip = !1),
                              n.aggregate(o),
                              (e._value += o.inserted);
                            var l = u.toString().slice(o.rawInserted.length);
                            l && n.aggregate(e.append(l, { tail: !0 }));
                          } else
                            n.aggregate(e.append(u.toString(), { tail: !0 }));
                        }
                        return n;
                      },
                    },
                    {
                      key: "state",
                      get: function () {
                        return {
                          chunks: this.chunks.map(function (t) {
                            return t.state;
                          }),
                          from: this.from,
                          stop: this.stop,
                          blockIndex: this.blockIndex,
                        };
                      },
                      set: function (e) {
                        var n = e.chunks,
                          r = Kt(e, ["chunks"]);
                        Object.assign(this, r),
                          (this.chunks = n.map(function (e) {
                            var n = "chunks" in e ? new t() : new de();
                            return (n.state = e), n;
                          }));
                      },
                    },
                    {
                      key: "shiftBefore",
                      value: function (t) {
                        if (this.from >= t || !this.chunks.length) return "";
                        for (
                          var e = t - this.from, n = 0;
                          n < this.chunks.length;

                        ) {
                          var r = this.chunks[n],
                            u = r.shiftBefore(e);
                          if (r.toString()) {
                            if (!u) break;
                            ++n;
                          } else this.chunks.splice(n, 1);
                          if (u) return u;
                        }
                        return "";
                      },
                    },
                  ]),
                  t
                );
              })(),
              Ce = (function (t) {
                Yt(n, t);
                var e = Wt(n);
                function n() {
                  return zt(this, n), e.apply(this, arguments);
                }
                return (
                  qt(n, [
                    {
                      key: "_update",
                      value: function (t) {
                        t.mask &&
                          (t.validate = function (e) {
                            return e.search(t.mask) >= 0;
                          }),
                          Xt(Zt(n.prototype), "_update", this).call(this, t);
                      },
                    },
                  ]),
                  n
                );
              })(ge);
            ve.MaskedRegExp = Ce;
            var Ee = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  zt(this, n),
                  (t.definitions = Object.assign({}, me, t.definitions)),
                  e.call(this, Object.assign({}, n.DEFAULTS, t))
                );
              }
              return (
                qt(n, [
                  {
                    key: "_update",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      (t.definitions = Object.assign(
                        {},
                        this.definitions,
                        t.definitions
                      )),
                        Xt(Zt(n.prototype), "_update", this).call(this, t),
                        this._rebuildMask();
                    },
                  },
                  {
                    key: "_rebuildMask",
                    value: function () {
                      var t = this,
                        e = this.definitions;
                      (this._blocks = []),
                        (this._stops = []),
                        (this._maskedBlocks = {});
                      var r = this.mask;
                      if (r && e)
                        for (var u = !1, i = !1, a = 0; a < r.length; ++a)
                          if (
                            !this.blocks ||
                            "continue" !==
                              (function () {
                                var e = r.slice(a),
                                  n = Object.keys(t.blocks).filter(function (
                                    t
                                  ) {
                                    return 0 === e.indexOf(t);
                                  });
                                n.sort(function (t, e) {
                                  return e.length - t.length;
                                });
                                var u = n[0];
                                if (u) {
                                  var i = ye(
                                    Object.assign(
                                      {
                                        parent: t,
                                        lazy: t.lazy,
                                        placeholderChar: t.placeholderChar,
                                        overwrite: t.overwrite,
                                      },
                                      t.blocks[u]
                                    )
                                  );
                                  return (
                                    i &&
                                      (t._blocks.push(i),
                                      t._maskedBlocks[u] ||
                                        (t._maskedBlocks[u] = []),
                                      t._maskedBlocks[u].push(
                                        t._blocks.length - 1
                                      )),
                                    (a += u.length - 1),
                                    "continue"
                                  );
                                }
                              })()
                          ) {
                            var s = r[a],
                              o = s in e;
                            if (s !== n.STOP_CHAR)
                              if ("{" !== s && "}" !== s)
                                if ("[" !== s && "]" !== s) {
                                  if (s === n.ESCAPE_CHAR) {
                                    if ((++a, !(s = r[a]))) break;
                                    o = !1;
                                  }
                                  var l = o
                                    ? new _e({
                                        parent: this,
                                        lazy: this.lazy,
                                        placeholderChar: this.placeholderChar,
                                        mask: e[s],
                                        isOptional: i,
                                      })
                                    : new be({ char: s, isUnmasking: u });
                                  this._blocks.push(l);
                                } else i = !i;
                              else u = !u;
                            else this._stops.push(this._blocks.length);
                          }
                    },
                  },
                  {
                    key: "state",
                    get: function () {
                      return Object.assign(
                        {},
                        Xt(Zt(n.prototype), "state", this),
                        {
                          _blocks: this._blocks.map(function (t) {
                            return t.state;
                          }),
                        }
                      );
                    },
                    set: function (t) {
                      var e = t._blocks,
                        r = Kt(t, ["_blocks"]);
                      this._blocks.forEach(function (t, n) {
                        return (t.state = e[n]);
                      }),
                        te(Zt(n.prototype), "state", r, this, !0);
                    },
                  },
                  {
                    key: "reset",
                    value: function () {
                      Xt(Zt(n.prototype), "reset", this).call(this),
                        this._blocks.forEach(function (t) {
                          return t.reset();
                        });
                    },
                  },
                  {
                    key: "isComplete",
                    get: function () {
                      return this._blocks.every(function (t) {
                        return t.isComplete;
                      });
                    },
                  },
                  {
                    key: "doCommit",
                    value: function () {
                      this._blocks.forEach(function (t) {
                        return t.doCommit();
                      }),
                        Xt(Zt(n.prototype), "doCommit", this).call(this);
                    },
                  },
                  {
                    key: "unmaskedValue",
                    get: function () {
                      return this._blocks.reduce(function (t, e) {
                        return t + e.unmaskedValue;
                      }, "");
                    },
                    set: function (t) {
                      te(Zt(n.prototype), "unmaskedValue", t, this, !0);
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this._blocks.reduce(function (t, e) {
                        return t + e.value;
                      }, "");
                    },
                    set: function (t) {
                      te(Zt(n.prototype), "value", t, this, !0);
                    },
                  },
                  {
                    key: "appendTail",
                    value: function (t) {
                      return Xt(Zt(n.prototype), "appendTail", this)
                        .call(this, t)
                        .aggregate(this._appendPlaceholder());
                    },
                  },
                  {
                    key: "_appendCharRaw",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = this._mapPosToBlock(this.value.length),
                        r = new pe();
                      if (!n) return r;
                      for (var u = n.index; ; ++u) {
                        var i = this._blocks[u];
                        if (!i) break;
                        var a = i._appendChar(t, e),
                          s = a.skip;
                        if ((r.aggregate(a), s || a.rawInserted)) break;
                      }
                      return r;
                    },
                  },
                  {
                    key: "extractTail",
                    value: function () {
                      var t = this,
                        e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length,
                        r = new Ae();
                      return (
                        e === n ||
                          this._forEachBlocksInRange(
                            e,
                            n,
                            function (e, n, u, i) {
                              var a = e.extractTail(u, i);
                              (a.stop = t._findStopBefore(n)),
                                (a.from = t._blockStartPos(n)),
                                a instanceof Ae && (a.blockIndex = n),
                                r.extend(a);
                            }
                          ),
                        r
                      );
                    },
                  },
                  {
                    key: "extractInput",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                      if (t === e) return "";
                      var r = "";
                      return (
                        this._forEachBlocksInRange(t, e, function (t, e, u, i) {
                          r += t.extractInput(u, i, n);
                        }),
                        r
                      );
                    },
                  },
                  {
                    key: "_findStopBefore",
                    value: function (t) {
                      for (var e, n = 0; n < this._stops.length; ++n) {
                        var r = this._stops[n];
                        if (!(r <= t)) break;
                        e = r;
                      }
                      return e;
                    },
                  },
                  {
                    key: "_appendPlaceholder",
                    value: function (t) {
                      var e = this,
                        n = new pe();
                      if (this.lazy && null == t) return n;
                      var r = this._mapPosToBlock(this.value.length);
                      if (!r) return n;
                      var u = r.index,
                        i = null != t ? t : this._blocks.length;
                      return (
                        this._blocks.slice(u, i).forEach(function (r) {
                          if (!r.lazy || null != t) {
                            var u = null != r._blocks ? [r._blocks.length] : [],
                              i = r._appendPlaceholder.apply(r, u);
                            (e._value += i.inserted), n.aggregate(i);
                          }
                        }),
                        n
                      );
                    },
                  },
                  {
                    key: "_mapPosToBlock",
                    value: function (t) {
                      for (var e = "", n = 0; n < this._blocks.length; ++n) {
                        var r = this._blocks[n],
                          u = e.length;
                        if (t <= (e += r.value).length)
                          return { index: n, offset: t - u };
                      }
                    },
                  },
                  {
                    key: "_blockStartPos",
                    value: function (t) {
                      return this._blocks.slice(0, t).reduce(function (t, e) {
                        return t + e.value.length;
                      }, 0);
                    },
                  },
                  {
                    key: "_forEachBlocksInRange",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = this._mapPosToBlock(t);
                      if (r) {
                        var u = this._mapPosToBlock(e),
                          i = u && r.index === u.index,
                          a = r.offset,
                          s =
                            u && i
                              ? u.offset
                              : this._blocks[r.index].value.length;
                        if (
                          (n(this._blocks[r.index], r.index, a, s), u && !i)
                        ) {
                          for (var o = r.index + 1; o < u.index; ++o)
                            n(
                              this._blocks[o],
                              o,
                              0,
                              this._blocks[o].value.length
                            );
                          n(this._blocks[u.index], u.index, 0, u.offset);
                        }
                      }
                    },
                  },
                  {
                    key: "remove",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length,
                        r = Xt(Zt(n.prototype), "remove", this).call(
                          this,
                          t,
                          e
                        );
                      return (
                        this._forEachBlocksInRange(t, e, function (t, e, n, u) {
                          r.aggregate(t.remove(n, u));
                        }),
                        r
                      );
                    },
                  },
                  {
                    key: "nearestInputPos",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : ue,
                        n = this._mapPosToBlock(t) || { index: 0, offset: 0 },
                        r = n.offset,
                        u = n.index,
                        i = this._blocks[u];
                      if (!i) return t;
                      var a = r;
                      0 !== a &&
                        a < i.value.length &&
                        (a = i.nearestInputPos(r, le(e)));
                      var s = a === i.value.length,
                        o = 0 === a;
                      if (!o && !s) return this._blockStartPos(u) + a;
                      var l = s ? u + 1 : u;
                      if (e === ue) {
                        if (l > 0) {
                          var h = l - 1,
                            c = this._blocks[h],
                            f = c.nearestInputPos(0, ue);
                          if (!c.value.length || f !== c.value.length)
                            return this._blockStartPos(l);
                        }
                        for (var p = l, d = p; d < this._blocks.length; ++d) {
                          var v = this._blocks[d],
                            g = v.nearestInputPos(0, ue);
                          if (!v.value.length || g !== v.value.length)
                            return this._blockStartPos(d) + g;
                        }
                        for (var k = l - 1; k >= 0; --k) {
                          var y = this._blocks[k],
                            m = y.nearestInputPos(0, ue);
                          if (!y.value.length || m !== y.value.length)
                            return this._blockStartPos(k) + y.value.length;
                        }
                        return t;
                      }
                      if (e === ie || e === ae) {
                        for (var _, b = l; b < this._blocks.length; ++b)
                          if (this._blocks[b].value) {
                            _ = b;
                            break;
                          }
                        if (null != _) {
                          var A = this._blocks[_],
                            C = A.nearestInputPos(0, se);
                          if (0 === C && A.unmaskedValue.length)
                            return this._blockStartPos(_) + C;
                        }
                        for (var E, F = -1, S = l - 1; S >= 0; --S) {
                          var w = this._blocks[S],
                            D = w.nearestInputPos(w.value.length, ae);
                          if (((w.value && 0 === D) || (E = S), 0 !== D)) {
                            if (D !== w.value.length)
                              return this._blockStartPos(S) + D;
                            F = S;
                            break;
                          }
                        }
                        if (e === ie)
                          for (
                            var B = F + 1;
                            B <= Math.min(l, this._blocks.length - 1);
                            ++B
                          ) {
                            var M = this._blocks[B],
                              P = M.nearestInputPos(0, ue),
                              x = this._blockStartPos(B) + P;
                            if (x > t) break;
                            if (P !== M.value.length) return x;
                          }
                        if (F >= 0)
                          return (
                            this._blockStartPos(F) +
                            this._blocks[F].value.length
                          );
                        if (
                          e === ae ||
                          (this.lazy &&
                            !this.extractInput() &&
                            !Fe(this._blocks[l]))
                        )
                          return 0;
                        if (null != E) return this._blockStartPos(E);
                        for (var O = l; O < this._blocks.length; ++O) {
                          var T = this._blocks[O],
                            I = T.nearestInputPos(0, ue);
                          if (!T.value.length || I !== T.value.length)
                            return this._blockStartPos(O) + I;
                        }
                        return 0;
                      }
                      if (e === se || e === oe) {
                        for (var j, V, R = l; R < this._blocks.length; ++R) {
                          var L = this._blocks[R],
                            N = L.nearestInputPos(0, ue);
                          if (N !== L.value.length) {
                            (V = this._blockStartPos(R) + N), (j = R);
                            break;
                          }
                        }
                        if (null != j && null != V) {
                          for (var U = j; U < this._blocks.length; ++U) {
                            var z = this._blocks[U],
                              H = z.nearestInputPos(0, oe);
                            if (H !== z.value.length)
                              return this._blockStartPos(U) + H;
                          }
                          return e === oe ? this.value.length : V;
                        }
                        for (
                          var q = Math.min(l, this._blocks.length - 1);
                          q >= 0;
                          --q
                        ) {
                          var Y = this._blocks[q],
                            Z = Y.nearestInputPos(Y.value.length, ie);
                          if (0 !== Z) {
                            var $ = this._blockStartPos(q) + Z;
                            if ($ >= t) return $;
                            break;
                          }
                        }
                      }
                      return t;
                    },
                  },
                  {
                    key: "maskedBlock",
                    value: function (t) {
                      return this.maskedBlocks(t)[0];
                    },
                  },
                  {
                    key: "maskedBlocks",
                    value: function (t) {
                      var e = this,
                        n = this._maskedBlocks[t];
                      return n
                        ? n.map(function (t) {
                            return e._blocks[t];
                          })
                        : [];
                    },
                  },
                ]),
                n
              );
            })(ge);
            function Fe(t) {
              if (!t) return !1;
              var e = t.value;
              return !e || t.nearestInputPos(0, ue) !== e.length;
            }
            (Ee.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
              (Ee.STOP_CHAR = "`"),
              (Ee.ESCAPE_CHAR = "\\"),
              (Ee.InputDefinition = _e),
              (Ee.FixedDefinition = be),
              (ve.MaskedPattern = Ee);
            var Se = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n() {
                return zt(this, n), e.apply(this, arguments);
              }
              return (
                qt(n, [
                  {
                    key: "_matchFrom",
                    get: function () {
                      return this.maxLength - String(this.from).length;
                    },
                  },
                  {
                    key: "_update",
                    value: function (t) {
                      t = Object.assign(
                        { to: this.to || 0, from: this.from || 0 },
                        t
                      );
                      var e = String(t.to).length;
                      null != t.maxLength && (e = Math.max(e, t.maxLength)),
                        (t.maxLength = e);
                      for (
                        var r = String(t.from).padStart(e, "0"),
                          u = String(t.to).padStart(e, "0"),
                          i = 0;
                        i < u.length && u[i] === r[i];

                      )
                        ++i;
                      (t.mask =
                        u.slice(0, i).replace(/0/g, "\\0") + "0".repeat(e - i)),
                        Xt(Zt(n.prototype), "_update", this).call(this, t);
                    },
                  },
                  {
                    key: "isComplete",
                    get: function () {
                      return (
                        Xt(Zt(n.prototype), "isComplete", this) &&
                        Boolean(this.value)
                      );
                    },
                  },
                  {
                    key: "boundaries",
                    value: function (t) {
                      var e = "",
                        n = "",
                        r = ee(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
                        u = r[1],
                        i = r[2];
                      return (
                        i &&
                          ((e = "0".repeat(u.length) + i),
                          (n = "9".repeat(u.length) + i)),
                        [
                          (e = e.padEnd(this.maxLength, "0")),
                          (n = n.padEnd(this.maxLength, "9")),
                        ]
                      );
                    },
                  },
                  {
                    key: "doPrepare",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (
                        ((t = Xt(Zt(n.prototype), "doPrepare", this)
                          .call(this, t, e)
                          .replace(/\D/g, "")),
                        !this.autofix)
                      )
                        return t;
                      for (
                        var r = String(this.from).padStart(this.maxLength, "0"),
                          u = String(this.to).padStart(this.maxLength, "0"),
                          i = this.value,
                          a = "",
                          s = 0;
                        s < t.length;
                        ++s
                      ) {
                        var o = i + a + t[s],
                          l = this.boundaries(o),
                          h = ee(l, 2),
                          c = h[0],
                          f = h[1];
                        Number(f) < this.from
                          ? (a += r[o.length - 1])
                          : Number(c) > this.to
                          ? (a += u[o.length - 1])
                          : (a += t[s]);
                      }
                      return a;
                    },
                  },
                  {
                    key: "doValidate",
                    value: function () {
                      var t,
                        e = this.value,
                        r = e.search(/[^0]/);
                      if (-1 === r && e.length <= this._matchFrom) return !0;
                      for (
                        var u = this.boundaries(e),
                          i = ee(u, 2),
                          a = i[0],
                          s = i[1],
                          o = arguments.length,
                          l = new Array(o),
                          h = 0;
                        h < o;
                        h++
                      )
                        l[h] = arguments[h];
                      return (
                        this.from <= Number(s) &&
                        Number(a) <= this.to &&
                        (t = Xt(
                          Zt(n.prototype),
                          "doValidate",
                          this
                        )).call.apply(t, [this].concat(l))
                      );
                    },
                  },
                ]),
                n
              );
            })(Ee);
            ve.MaskedRange = Se;
            var we = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n(t) {
                return (
                  zt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t))
                );
              }
              return (
                qt(n, [
                  {
                    key: "_update",
                    value: function (t) {
                      t.mask === Date && delete t.mask,
                        t.pattern && (t.mask = t.pattern);
                      var e = t.blocks;
                      (t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS())),
                        t.min && (t.blocks.Y.from = t.min.getFullYear()),
                        t.max && (t.blocks.Y.to = t.max.getFullYear()),
                        t.min &&
                          t.max &&
                          t.blocks.Y.from === t.blocks.Y.to &&
                          ((t.blocks.m.from = t.min.getMonth() + 1),
                          (t.blocks.m.to = t.max.getMonth() + 1),
                          t.blocks.m.from === t.blocks.m.to &&
                            ((t.blocks.d.from = t.min.getDate()),
                            (t.blocks.d.to = t.max.getDate()))),
                        Object.assign(t.blocks, e),
                        Object.keys(t.blocks).forEach(function (e) {
                          var n = t.blocks[e];
                          "autofix" in n || (n.autofix = t.autofix);
                        }),
                        Xt(Zt(n.prototype), "_update", this).call(this, t);
                    },
                  },
                  {
                    key: "doValidate",
                    value: function () {
                      for (
                        var t,
                          e = this.date,
                          r = arguments.length,
                          u = new Array(r),
                          i = 0;
                        i < r;
                        i++
                      )
                        u[i] = arguments[i];
                      return (
                        (t = Xt(
                          Zt(n.prototype),
                          "doValidate",
                          this
                        )).call.apply(t, [this].concat(u)) &&
                        (!this.isComplete ||
                          (this.isDateExist(this.value) &&
                            null != e &&
                            (null == this.min || this.min <= e) &&
                            (null == this.max || e <= this.max)))
                      );
                    },
                  },
                  {
                    key: "isDateExist",
                    value: function (t) {
                      return (
                        this.format(this.parse(t, this), this).indexOf(t) >= 0
                      );
                    },
                  },
                  {
                    key: "date",
                    get: function () {
                      return this.typedValue;
                    },
                    set: function (t) {
                      this.typedValue = t;
                    },
                  },
                  {
                    key: "typedValue",
                    get: function () {
                      return this.isComplete
                        ? Xt(Zt(n.prototype), "typedValue", this)
                        : null;
                    },
                    set: function (t) {
                      te(Zt(n.prototype), "typedValue", t, this, !0);
                    },
                  },
                ]),
                n
              );
            })(Ee);
            (we.DEFAULTS = {
              pattern: "d{.}`m{.}`Y",
              format: function (t) {
                return [
                  String(t.getDate()).padStart(2, "0"),
                  String(t.getMonth() + 1).padStart(2, "0"),
                  t.getFullYear(),
                ].join(".");
              },
              parse: function (t) {
                var e = ee(t.split("."), 3),
                  n = e[0],
                  r = e[1],
                  u = e[2];
                return new Date(u, r - 1, n);
              },
            }),
              (we.GET_DEFAULT_BLOCKS = function () {
                return {
                  d: { mask: Se, from: 1, to: 31, maxLength: 2 },
                  m: { mask: Se, from: 1, to: 12, maxLength: 2 },
                  Y: { mask: Se, from: 1900, to: 9999 },
                };
              }),
              (ve.MaskedDate = we);
            var De = (function () {
              function t() {
                zt(this, t);
              }
              return (
                qt(t, [
                  {
                    key: "selectionStart",
                    get: function () {
                      var t;
                      try {
                        t = this._unsafeSelectionStart;
                      } catch (t) {}
                      return null != t ? t : this.value.length;
                    },
                  },
                  {
                    key: "selectionEnd",
                    get: function () {
                      var t;
                      try {
                        t = this._unsafeSelectionEnd;
                      } catch (t) {}
                      return null != t ? t : this.value.length;
                    },
                  },
                  {
                    key: "select",
                    value: function (t, e) {
                      if (
                        null != t &&
                        null != e &&
                        (t !== this.selectionStart || e !== this.selectionEnd)
                      )
                        try {
                          this._unsafeSelect(t, e);
                        } catch (t) {}
                    },
                  },
                  { key: "_unsafeSelect", value: function (t, e) {} },
                  {
                    key: "isActive",
                    get: function () {
                      return !1;
                    },
                  },
                  { key: "bindEvents", value: function (t) {} },
                  { key: "unbindEvents", value: function () {} },
                ]),
                t
              );
            })();
            ve.MaskElement = De;
            var Be = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n(t) {
                var r;
                return (
                  zt(this, n),
                  ((r = e.call(this)).input = t),
                  (r._handlers = {}),
                  r
                );
              }
              return (
                qt(n, [
                  {
                    key: "rootElement",
                    get: function () {
                      return this.input.getRootNode
                        ? this.input.getRootNode()
                        : document;
                    },
                  },
                  {
                    key: "isActive",
                    get: function () {
                      return this.input === this.rootElement.activeElement;
                    },
                  },
                  {
                    key: "_unsafeSelectionStart",
                    get: function () {
                      return this.input.selectionStart;
                    },
                  },
                  {
                    key: "_unsafeSelectionEnd",
                    get: function () {
                      return this.input.selectionEnd;
                    },
                  },
                  {
                    key: "_unsafeSelect",
                    value: function (t, e) {
                      this.input.setSelectionRange(t, e);
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this.input.value;
                    },
                    set: function (t) {
                      this.input.value = t;
                    },
                  },
                  {
                    key: "bindEvents",
                    value: function (t) {
                      var e = this;
                      Object.keys(t).forEach(function (r) {
                        return e._toggleEventHandler(n.EVENTS_MAP[r], t[r]);
                      });
                    },
                  },
                  {
                    key: "unbindEvents",
                    value: function () {
                      var t = this;
                      Object.keys(this._handlers).forEach(function (e) {
                        return t._toggleEventHandler(e);
                      });
                    },
                  },
                  {
                    key: "_toggleEventHandler",
                    value: function (t, e) {
                      this._handlers[t] &&
                        (this.input.removeEventListener(t, this._handlers[t]),
                        delete this._handlers[t]),
                        e &&
                          (this.input.addEventListener(t, e),
                          (this._handlers[t] = e));
                    },
                  },
                ]),
                n
              );
            })(De);
            (Be.EVENTS_MAP = {
              selectionChange: "keydown",
              input: "input",
              drop: "drop",
              click: "click",
              focus: "focus",
              commit: "blur",
            }),
              (ve.HTMLMaskElement = Be);
            var Me = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n() {
                return zt(this, n), e.apply(this, arguments);
              }
              return (
                qt(n, [
                  {
                    key: "_unsafeSelectionStart",
                    get: function () {
                      var t = this.rootElement,
                        e = t.getSelection && t.getSelection();
                      return e && e.anchorOffset;
                    },
                  },
                  {
                    key: "_unsafeSelectionEnd",
                    get: function () {
                      var t = this.rootElement,
                        e = t.getSelection && t.getSelection();
                      return e && this._unsafeSelectionStart + String(e).length;
                    },
                  },
                  {
                    key: "_unsafeSelect",
                    value: function (t, e) {
                      if (this.rootElement.createRange) {
                        var n = this.rootElement.createRange();
                        n.setStart(this.input.firstChild || this.input, t),
                          n.setEnd(this.input.lastChild || this.input, e);
                        var r = this.rootElement,
                          u = r.getSelection && r.getSelection();
                        u && (u.removeAllRanges(), u.addRange(n));
                      }
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this.input.textContent;
                    },
                    set: function (t) {
                      this.input.textContent = t;
                    },
                  },
                ]),
                n
              );
            })(Be);
            ve.HTMLContenteditableMaskElement = Me;
            var Pe = (function () {
              function t(e, n) {
                zt(this, t),
                  (this.el =
                    e instanceof De
                      ? e
                      : e.isContentEditable &&
                        "INPUT" !== e.tagName &&
                        "TEXTAREA" !== e.tagName
                      ? new Me(e)
                      : new Be(e)),
                  (this.masked = ye(n)),
                  (this._listeners = {}),
                  (this._value = ""),
                  (this._unmaskedValue = ""),
                  (this._saveSelection = this._saveSelection.bind(this)),
                  (this._onInput = this._onInput.bind(this)),
                  (this._onChange = this._onChange.bind(this)),
                  (this._onDrop = this._onDrop.bind(this)),
                  (this._onFocus = this._onFocus.bind(this)),
                  (this._onClick = this._onClick.bind(this)),
                  (this.alignCursor = this.alignCursor.bind(this)),
                  (this.alignCursorFriendly =
                    this.alignCursorFriendly.bind(this)),
                  this._bindEvents(),
                  this.updateValue(),
                  this._onChange();
              }
              return (
                qt(t, [
                  {
                    key: "mask",
                    get: function () {
                      return this.masked.mask;
                    },
                    set: function (t) {
                      if (!this.maskEquals(t))
                        if (
                          t instanceof ve.Masked ||
                          this.masked.constructor !== ke(t)
                        ) {
                          var e = ye({ mask: t });
                          (e.unmaskedValue = this.masked.unmaskedValue),
                            (this.masked = e);
                        } else this.masked.updateOptions({ mask: t });
                    },
                  },
                  {
                    key: "maskEquals",
                    value: function (t) {
                      return (
                        null == t ||
                        t === this.masked.mask ||
                        (t === Date && this.masked instanceof we)
                      );
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this._value;
                    },
                    set: function (t) {
                      (this.masked.value = t),
                        this.updateControl(),
                        this.alignCursor();
                    },
                  },
                  {
                    key: "unmaskedValue",
                    get: function () {
                      return this._unmaskedValue;
                    },
                    set: function (t) {
                      (this.masked.unmaskedValue = t),
                        this.updateControl(),
                        this.alignCursor();
                    },
                  },
                  {
                    key: "typedValue",
                    get: function () {
                      return this.masked.typedValue;
                    },
                    set: function (t) {
                      (this.masked.typedValue = t),
                        this.updateControl(),
                        this.alignCursor();
                    },
                  },
                  {
                    key: "_bindEvents",
                    value: function () {
                      this.el.bindEvents({
                        selectionChange: this._saveSelection,
                        input: this._onInput,
                        drop: this._onDrop,
                        click: this._onClick,
                        focus: this._onFocus,
                        commit: this._onChange,
                      });
                    },
                  },
                  {
                    key: "_unbindEvents",
                    value: function () {
                      this.el && this.el.unbindEvents();
                    },
                  },
                  {
                    key: "_fireEvent",
                    value: function (t) {
                      for (
                        var e = arguments.length,
                          n = new Array(e > 1 ? e - 1 : 0),
                          r = 1;
                        r < e;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      var u = this._listeners[t];
                      u &&
                        u.forEach(function (t) {
                          return t.apply(void 0, n);
                        });
                    },
                  },
                  {
                    key: "selectionStart",
                    get: function () {
                      return this._cursorChanging
                        ? this._changingCursorPos
                        : this.el.selectionStart;
                    },
                  },
                  {
                    key: "cursorPos",
                    get: function () {
                      return this._cursorChanging
                        ? this._changingCursorPos
                        : this.el.selectionEnd;
                    },
                    set: function (t) {
                      this.el &&
                        this.el.isActive &&
                        (this.el.select(t, t), this._saveSelection());
                    },
                  },
                  {
                    key: "_saveSelection",
                    value: function () {
                      this.value !== this.el.value &&
                        console.warn(
                          "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
                        ),
                        (this._selection = {
                          start: this.selectionStart,
                          end: this.cursorPos,
                        });
                    },
                  },
                  {
                    key: "updateValue",
                    value: function () {
                      (this.masked.value = this.el.value),
                        (this._value = this.masked.value);
                    },
                  },
                  {
                    key: "updateControl",
                    value: function () {
                      var t = this.masked.unmaskedValue,
                        e = this.masked.value,
                        n = this.unmaskedValue !== t || this.value !== e;
                      (this._unmaskedValue = t),
                        (this._value = e),
                        this.el.value !== e && (this.el.value = e),
                        n && this._fireChangeEvents();
                    },
                  },
                  {
                    key: "updateOptions",
                    value: function (t) {
                      var e = t.mask,
                        n = Kt(t, ["mask"]),
                        r = !this.maskEquals(e),
                        u = !ce(this.masked, n);
                      r && (this.mask = e),
                        u && this.masked.updateOptions(n),
                        (r || u) && this.updateControl();
                    },
                  },
                  {
                    key: "updateCursor",
                    value: function (t) {
                      null != t &&
                        ((this.cursorPos = t), this._delayUpdateCursor(t));
                    },
                  },
                  {
                    key: "_delayUpdateCursor",
                    value: function (t) {
                      var e = this;
                      this._abortUpdateCursor(),
                        (this._changingCursorPos = t),
                        (this._cursorChanging = setTimeout(function () {
                          e.el &&
                            ((e.cursorPos = e._changingCursorPos),
                            e._abortUpdateCursor());
                        }, 10));
                    },
                  },
                  {
                    key: "_fireChangeEvents",
                    value: function () {
                      this._fireEvent("accept", this._inputEvent),
                        this.masked.isComplete &&
                          this._fireEvent("complete", this._inputEvent);
                    },
                  },
                  {
                    key: "_abortUpdateCursor",
                    value: function () {
                      this._cursorChanging &&
                        (clearTimeout(this._cursorChanging),
                        delete this._cursorChanging);
                    },
                  },
                  {
                    key: "alignCursor",
                    value: function () {
                      this.cursorPos = this.masked.nearestInputPos(
                        this.cursorPos,
                        ie
                      );
                    },
                  },
                  {
                    key: "alignCursorFriendly",
                    value: function () {
                      this.selectionStart === this.cursorPos &&
                        this.alignCursor();
                    },
                  },
                  {
                    key: "on",
                    value: function (t, e) {
                      return (
                        this._listeners[t] || (this._listeners[t] = []),
                        this._listeners[t].push(e),
                        this
                      );
                    },
                  },
                  {
                    key: "off",
                    value: function (t, e) {
                      if (!this._listeners[t]) return this;
                      if (!e) return delete this._listeners[t], this;
                      var n = this._listeners[t].indexOf(e);
                      return n >= 0 && this._listeners[t].splice(n, 1), this;
                    },
                  },
                  {
                    key: "_onInput",
                    value: function (t) {
                      if (
                        ((this._inputEvent = t),
                        this._abortUpdateCursor(),
                        !this._selection)
                      )
                        return this.updateValue();
                      var e = new fe(
                          this.el.value,
                          this.cursorPos,
                          this.value,
                          this._selection
                        ),
                        n = this.masked.rawInputValue,
                        r = this.masked.splice(
                          e.startChangePos,
                          e.removed.length,
                          e.inserted,
                          e.removeDirection
                        ).offset,
                        u =
                          n === this.masked.rawInputValue
                            ? e.removeDirection
                            : ue,
                        i = this.masked.nearestInputPos(
                          e.startChangePos + r,
                          u
                        );
                      this.updateControl(),
                        this.updateCursor(i),
                        delete this._inputEvent;
                    },
                  },
                  {
                    key: "_onChange",
                    value: function () {
                      this.value !== this.el.value && this.updateValue(),
                        this.masked.doCommit(),
                        this.updateControl(),
                        this._saveSelection();
                    },
                  },
                  {
                    key: "_onDrop",
                    value: function (t) {
                      t.preventDefault(), t.stopPropagation();
                    },
                  },
                  {
                    key: "_onFocus",
                    value: function (t) {
                      this.alignCursorFriendly();
                    },
                  },
                  {
                    key: "_onClick",
                    value: function (t) {
                      this.alignCursorFriendly();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this._unbindEvents(),
                        (this._listeners.length = 0),
                        delete this.el;
                    },
                  },
                ]),
                t
              );
            })();
            ve.InputMask = Pe;
            var xe = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n() {
                return zt(this, n), e.apply(this, arguments);
              }
              return (
                qt(n, [
                  {
                    key: "_update",
                    value: function (t) {
                      t.enum && (t.mask = "*".repeat(t.enum[0].length)),
                        Xt(Zt(n.prototype), "_update", this).call(this, t);
                    },
                  },
                  {
                    key: "doValidate",
                    value: function () {
                      for (
                        var t,
                          e = this,
                          r = arguments.length,
                          u = new Array(r),
                          i = 0;
                        i < r;
                        i++
                      )
                        u[i] = arguments[i];
                      return (
                        this.enum.some(function (t) {
                          return t.indexOf(e.unmaskedValue) >= 0;
                        }) &&
                        (t = Xt(
                          Zt(n.prototype),
                          "doValidate",
                          this
                        )).call.apply(t, [this].concat(u))
                      );
                    },
                  },
                ]),
                n
              );
            })(Ee);
            ve.MaskedEnum = xe;
            var Oe = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n(t) {
                return (
                  zt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t))
                );
              }
              return (
                qt(n, [
                  {
                    key: "_update",
                    value: function (t) {
                      Xt(Zt(n.prototype), "_update", this).call(this, t),
                        this._updateRegExps();
                    },
                  },
                  {
                    key: "_updateRegExps",
                    value: function () {
                      var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                        e =
                          (this.scale
                            ? "(" +
                              he(this.radix) +
                              "\\d{0," +
                              this.scale +
                              "})?"
                            : "") + "$";
                      (this._numberRegExpInput = new RegExp(
                        t + "(0|([1-9]+\\d*))?" + e
                      )),
                        (this._numberRegExp = new RegExp(t + "\\d*" + e)),
                        (this._mapToRadixRegExp = new RegExp(
                          "[" + this.mapToRadix.map(he).join("") + "]",
                          "g"
                        )),
                        (this._thousandsSeparatorRegExp = new RegExp(
                          he(this.thousandsSeparator),
                          "g"
                        ));
                    },
                  },
                  {
                    key: "_removeThousandsSeparators",
                    value: function (t) {
                      return t.replace(this._thousandsSeparatorRegExp, "");
                    },
                  },
                  {
                    key: "_insertThousandsSeparators",
                    value: function (t) {
                      var e = t.split(this.radix);
                      return (
                        (e[0] = e[0].replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          this.thousandsSeparator
                        )),
                        e.join(this.radix)
                      );
                    },
                  },
                  {
                    key: "doPrepare",
                    value: function (t) {
                      for (
                        var e,
                          r = arguments.length,
                          u = new Array(r > 1 ? r - 1 : 0),
                          i = 1;
                        i < r;
                        i++
                      )
                        u[i - 1] = arguments[i];
                      return (e = Xt(
                        Zt(n.prototype),
                        "doPrepare",
                        this
                      )).call.apply(
                        e,
                        [
                          this,
                          this._removeThousandsSeparators(
                            t.replace(this._mapToRadixRegExp, this.radix)
                          ),
                        ].concat(u)
                      );
                    },
                  },
                  {
                    key: "_separatorsCount",
                    value: function (t) {
                      for (
                        var e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          n = 0,
                          r = 0;
                        r < t;
                        ++r
                      )
                        this._value.indexOf(this.thousandsSeparator, r) === r &&
                          (++n, e && (t += this.thousandsSeparator.length));
                      return n;
                    },
                  },
                  {
                    key: "_separatorsCountFromSlice",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : this._value;
                      return this._separatorsCount(
                        this._removeThousandsSeparators(t).length,
                        !0
                      );
                    },
                  },
                  {
                    key: "extractInput",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length,
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        u = this._adjustRangeWithSeparators(t, e),
                        i = ee(u, 2);
                      return (
                        (t = i[0]),
                        (e = i[1]),
                        this._removeThousandsSeparators(
                          Xt(Zt(n.prototype), "extractInput", this).call(
                            this,
                            t,
                            e,
                            r
                          )
                        )
                      );
                    },
                  },
                  {
                    key: "_appendCharRaw",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (!this.thousandsSeparator)
                        return Xt(Zt(n.prototype), "_appendCharRaw", this).call(
                          this,
                          t,
                          e
                        );
                      var r =
                          e.tail && e._beforeTailState
                            ? e._beforeTailState._value
                            : this._value,
                        u = this._separatorsCountFromSlice(r);
                      this._value = this._removeThousandsSeparators(this.value);
                      var i = Xt(Zt(n.prototype), "_appendCharRaw", this).call(
                        this,
                        t,
                        e
                      );
                      this._value = this._insertThousandsSeparators(
                        this._value
                      );
                      var a =
                          e.tail && e._beforeTailState
                            ? e._beforeTailState._value
                            : this._value,
                        s = this._separatorsCountFromSlice(a);
                      return (
                        (i.tailShift +=
                          (s - u) * this.thousandsSeparator.length),
                        (i.skip =
                          !i.rawInserted && t === this.thousandsSeparator),
                        i
                      );
                    },
                  },
                  {
                    key: "_findSeparatorAround",
                    value: function (t) {
                      if (this.thousandsSeparator) {
                        var e = t - this.thousandsSeparator.length + 1,
                          n = this.value.indexOf(this.thousandsSeparator, e);
                        if (n <= t) return n;
                      }
                      return -1;
                    },
                  },
                  {
                    key: "_adjustRangeWithSeparators",
                    value: function (t, e) {
                      var n = this._findSeparatorAround(t);
                      n >= 0 && (t = n);
                      var r = this._findSeparatorAround(e);
                      return (
                        r >= 0 && (e = r + this.thousandsSeparator.length),
                        [t, e]
                      );
                    },
                  },
                  {
                    key: "remove",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this.value.length,
                        n = this._adjustRangeWithSeparators(t, e),
                        r = ee(n, 2);
                      (t = r[0]), (e = r[1]);
                      var u = this.value.slice(0, t),
                        i = this.value.slice(e),
                        a = this._separatorsCount(u.length);
                      this._value = this._insertThousandsSeparators(
                        this._removeThousandsSeparators(u + i)
                      );
                      var s = this._separatorsCountFromSlice(u);
                      return new pe({
                        tailShift: (s - a) * this.thousandsSeparator.length,
                      });
                    },
                  },
                  {
                    key: "nearestInputPos",
                    value: function (t, e) {
                      if (!this.thousandsSeparator) return t;
                      switch (e) {
                        case ue:
                        case ie:
                        case ae:
                          var n = this._findSeparatorAround(t - 1);
                          if (n >= 0) {
                            var r = n + this.thousandsSeparator.length;
                            if (t < r || this.value.length <= r || e === ae)
                              return n;
                          }
                          break;
                        case se:
                        case oe:
                          var u = this._findSeparatorAround(t);
                          if (u >= 0) return u + this.thousandsSeparator.length;
                      }
                      return t;
                    },
                  },
                  {
                    key: "doValidate",
                    value: function (t) {
                      var e = (
                        t.input ? this._numberRegExpInput : this._numberRegExp
                      ).test(this._removeThousandsSeparators(this.value));
                      if (e) {
                        var r = this.number;
                        e =
                          e &&
                          !isNaN(r) &&
                          (null == this.min ||
                            this.min >= 0 ||
                            this.min <= this.number) &&
                          (null == this.max ||
                            this.max <= 0 ||
                            this.number <= this.max);
                      }
                      return (
                        e &&
                        Xt(Zt(n.prototype), "doValidate", this).call(this, t)
                      );
                    },
                  },
                  {
                    key: "doCommit",
                    value: function () {
                      if (this.value) {
                        var t = this.number,
                          e = t;
                        null != this.min && (e = Math.max(e, this.min)),
                          null != this.max && (e = Math.min(e, this.max)),
                          e !== t && (this.unmaskedValue = String(e));
                        var r = this.value;
                        this.normalizeZeros && (r = this._normalizeZeros(r)),
                          this.padFractionalZeros &&
                            (r = this._padFractionalZeros(r)),
                          (this._value = r);
                      }
                      Xt(Zt(n.prototype), "doCommit", this).call(this);
                    },
                  },
                  {
                    key: "_normalizeZeros",
                    value: function (t) {
                      var e = this._removeThousandsSeparators(t).split(
                        this.radix
                      );
                      return (
                        (e[0] = e[0].replace(
                          /^(\D*)(0*)(\d*)/,
                          function (t, e, n, r) {
                            return e + r;
                          }
                        )),
                        t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"),
                        e.length > 1 &&
                          ((e[1] = e[1].replace(/0*$/, "")),
                          e[1].length || (e.length = 1)),
                        this._insertThousandsSeparators(e.join(this.radix))
                      );
                    },
                  },
                  {
                    key: "_padFractionalZeros",
                    value: function (t) {
                      if (!t) return t;
                      var e = t.split(this.radix);
                      return (
                        e.length < 2 && e.push(""),
                        (e[1] = e[1].padEnd(this.scale, "0")),
                        e.join(this.radix)
                      );
                    },
                  },
                  {
                    key: "unmaskedValue",
                    get: function () {
                      return this._removeThousandsSeparators(
                        this._normalizeZeros(this.value)
                      ).replace(this.radix, ".");
                    },
                    set: function (t) {
                      te(
                        Zt(n.prototype),
                        "unmaskedValue",
                        t.replace(".", this.radix),
                        this,
                        !0
                      );
                    },
                  },
                  {
                    key: "typedValue",
                    get: function () {
                      return Number(this.unmaskedValue);
                    },
                    set: function (t) {
                      te(Zt(n.prototype), "unmaskedValue", String(t), this, !0);
                    },
                  },
                  {
                    key: "number",
                    get: function () {
                      return this.typedValue;
                    },
                    set: function (t) {
                      this.typedValue = t;
                    },
                  },
                  {
                    key: "allowNegative",
                    get: function () {
                      return (
                        this.signed ||
                        (null != this.min && this.min < 0) ||
                        (null != this.max && this.max < 0)
                      );
                    },
                  },
                ]),
                n
              );
            })(ge);
            (Oe.DEFAULTS = {
              radix: ",",
              thousandsSeparator: "",
              mapToRadix: ["."],
              scale: 2,
              signed: !1,
              normalizeZeros: !0,
              padFractionalZeros: !1,
            }),
              (ve.MaskedNumber = Oe);
            var Te = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n() {
                return zt(this, n), e.apply(this, arguments);
              }
              return (
                qt(n, [
                  {
                    key: "_update",
                    value: function (t) {
                      t.mask && (t.validate = t.mask),
                        Xt(Zt(n.prototype), "_update", this).call(this, t);
                    },
                  },
                ]),
                n
              );
            })(ge);
            ve.MaskedFunction = Te;
            var Ie = (function (t) {
              Yt(n, t);
              var e = Wt(n);
              function n(t) {
                var r;
                return (
                  zt(this, n),
                  ((r = e.call(
                    this,
                    Object.assign({}, n.DEFAULTS, t)
                  )).currentMask = null),
                  r
                );
              }
              return (
                qt(n, [
                  {
                    key: "_update",
                    value: function (t) {
                      Xt(Zt(n.prototype), "_update", this).call(this, t),
                        "mask" in t &&
                          (this.compiledMasks = Array.isArray(t.mask)
                            ? t.mask.map(function (t) {
                                return ye(t);
                              })
                            : []);
                    },
                  },
                  {
                    key: "_appendCharRaw",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = this._applyDispatch(t, e);
                      return (
                        this.currentMask &&
                          n.aggregate(this.currentMask._appendChar(t, e)),
                        n
                      );
                    },
                  },
                  {
                    key: "_applyDispatch",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "",
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n =
                          e.tail && null != e._beforeTailState
                            ? e._beforeTailState._value
                            : this.value,
                        r = this.rawInputValue,
                        u =
                          e.tail && null != e._beforeTailState
                            ? e._beforeTailState._rawInputValue
                            : r,
                        i = r.slice(u.length),
                        a = this.currentMask,
                        s = new pe(),
                        o = a && a.state;
                      if (
                        ((this.currentMask = this.doDispatch(
                          t,
                          Object.assign({}, e)
                        )),
                        this.currentMask)
                      )
                        if (this.currentMask !== a) {
                          if ((this.currentMask.reset(), u)) {
                            var l = this.currentMask.append(u, { raw: !0 });
                            s.tailShift = l.inserted.length - n.length;
                          }
                          i &&
                            (s.tailShift += this.currentMask.append(i, {
                              raw: !0,
                              tail: !0,
                            }).tailShift);
                        } else this.currentMask.state = o;
                      return s;
                    },
                  },
                  {
                    key: "_appendPlaceholder",
                    value: function () {
                      var t = this._applyDispatch.apply(this, arguments);
                      return (
                        this.currentMask &&
                          t.aggregate(this.currentMask._appendPlaceholder()),
                        t
                      );
                    },
                  },
                  {
                    key: "doDispatch",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.dispatch(t, this, e);
                    },
                  },
                  {
                    key: "doValidate",
                    value: function () {
                      for (
                        var t, e, r = arguments.length, u = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        u[i] = arguments[i];
                      return (
                        (t = Xt(
                          Zt(n.prototype),
                          "doValidate",
                          this
                        )).call.apply(t, [this].concat(u)) &&
                        (!this.currentMask ||
                          (e = this.currentMask).doValidate.apply(e, u))
                      );
                    },
                  },
                  {
                    key: "reset",
                    value: function () {
                      this.currentMask && this.currentMask.reset(),
                        this.compiledMasks.forEach(function (t) {
                          return t.reset();
                        });
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this.currentMask ? this.currentMask.value : "";
                    },
                    set: function (t) {
                      te(Zt(n.prototype), "value", t, this, !0);
                    },
                  },
                  {
                    key: "unmaskedValue",
                    get: function () {
                      return this.currentMask
                        ? this.currentMask.unmaskedValue
                        : "";
                    },
                    set: function (t) {
                      te(Zt(n.prototype), "unmaskedValue", t, this, !0);
                    },
                  },
                  {
                    key: "typedValue",
                    get: function () {
                      return this.currentMask
                        ? this.currentMask.typedValue
                        : "";
                    },
                    set: function (t) {
                      var e = String(t);
                      this.currentMask &&
                        ((this.currentMask.typedValue = t),
                        (e = this.currentMask.unmaskedValue)),
                        (this.unmaskedValue = e);
                    },
                  },
                  {
                    key: "isComplete",
                    get: function () {
                      return !!this.currentMask && this.currentMask.isComplete;
                    },
                  },
                  {
                    key: "remove",
                    value: function () {
                      var t,
                        e = new pe();
                      return (
                        this.currentMask &&
                          e
                            .aggregate(
                              (t = this.currentMask).remove.apply(t, arguments)
                            )
                            .aggregate(this._applyDispatch()),
                        e
                      );
                    },
                  },
                  {
                    key: "state",
                    get: function () {
                      return Object.assign(
                        {},
                        Xt(Zt(n.prototype), "state", this),
                        {
                          _rawInputValue: this.rawInputValue,
                          compiledMasks: this.compiledMasks.map(function (t) {
                            return t.state;
                          }),
                          currentMaskRef: this.currentMask,
                          currentMask:
                            this.currentMask && this.currentMask.state,
                        }
                      );
                    },
                    set: function (t) {
                      var e = t.compiledMasks,
                        r = t.currentMaskRef,
                        u = t.currentMask,
                        i = Kt(t, [
                          "compiledMasks",
                          "currentMaskRef",
                          "currentMask",
                        ]);
                      this.compiledMasks.forEach(function (t, n) {
                        return (t.state = e[n]);
                      }),
                        null != r &&
                          ((this.currentMask = r),
                          (this.currentMask.state = u)),
                        te(Zt(n.prototype), "state", i, this, !0);
                    },
                  },
                  {
                    key: "extractInput",
                    value: function () {
                      var t;
                      return this.currentMask
                        ? (t = this.currentMask).extractInput.apply(
                            t,
                            arguments
                          )
                        : "";
                    },
                  },
                  {
                    key: "extractTail",
                    value: function () {
                      for (
                        var t, e, r = arguments.length, u = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        u[i] = arguments[i];
                      return this.currentMask
                        ? (t = this.currentMask).extractTail.apply(t, u)
                        : (e = Xt(
                            Zt(n.prototype),
                            "extractTail",
                            this
                          )).call.apply(e, [this].concat(u));
                    },
                  },
                  {
                    key: "doCommit",
                    value: function () {
                      this.currentMask && this.currentMask.doCommit(),
                        Xt(Zt(n.prototype), "doCommit", this).call(this);
                    },
                  },
                  {
                    key: "nearestInputPos",
                    value: function () {
                      for (
                        var t, e, r = arguments.length, u = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        u[i] = arguments[i];
                      return this.currentMask
                        ? (t = this.currentMask).nearestInputPos.apply(t, u)
                        : (e = Xt(
                            Zt(n.prototype),
                            "nearestInputPos",
                            this
                          )).call.apply(e, [this].concat(u));
                    },
                  },
                  {
                    key: "overwrite",
                    get: function () {
                      return this.currentMask
                        ? this.currentMask.overwrite
                        : Xt(Zt(n.prototype), "overwrite", this);
                    },
                    set: function (t) {
                      console.warn(
                        '"overwrite" option is not available in dynamic mask, use this option in siblings'
                      );
                    },
                  },
                ]),
                n
              );
            })(ge);
            (Ie.DEFAULTS = {
              dispatch: function (t, e, n) {
                if (e.compiledMasks.length) {
                  var r = e.rawInputValue,
                    u = e.compiledMasks.map(function (e, u) {
                      return (
                        e.reset(),
                        e.append(r, { raw: !0 }),
                        e.append(t, n),
                        { weight: e.rawInputValue.length, index: u }
                      );
                    });
                  return (
                    u.sort(function (t, e) {
                      return e.weight - t.weight;
                    }),
                    e.compiledMasks[u[0].index]
                  );
                }
              },
            }),
              (ve.MaskedDynamic = Ie);
            var je = {
              MASKED: "value",
              UNMASKED: "unmaskedValue",
              TYPED: "typedValue",
            };
            function Ve(t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : je.MASKED,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : je.MASKED,
                r = ye(t);
              return function (t) {
                return r.runIsolated(function (r) {
                  return (r[e] = t), r[n];
                });
              };
            }
            function Re(t) {
              for (
                var e = arguments.length,
                  n = new Array(e > 1 ? e - 1 : 0),
                  r = 1;
                r < e;
                r++
              )
                n[r - 1] = arguments[r];
              return Ve.apply(void 0, n)(t);
            }
            (ve.PIPE_TYPE = je), (ve.createPipe = Ve), (ve.pipe = Re);
            try {
              globalThis.IMask = ve;
            } catch (t) {}
            (e.HTMLContenteditableMaskElement = Me),
              (e.HTMLMaskElement = Be),
              (e.InputMask = Pe),
              (e.MaskElement = De),
              (e.Masked = ge),
              (e.MaskedDate = we),
              (e.MaskedDynamic = Ie),
              (e.MaskedEnum = xe),
              (e.MaskedFunction = Te),
              (e.MaskedNumber = Oe),
              (e.MaskedPattern = Ee),
              (e.MaskedRange = Se),
              (e.MaskedRegExp = Ce),
              (e.PIPE_TYPE = je),
              (e.createMask = ye),
              (e.createPipe = Ve),
              (e.default = ve),
              (e.pipe = Re),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          "object" == typeof exports
            ? n(exports)
            : "function" == typeof define && t.amdO
            ? define(["exports"], n)
            : n(
                ((e =
                  "undefined" != typeof globalThis
                    ? globalThis
                    : e || self).IMask = {})
              );
        try {
          let t = document.getElementById("phone");
          IMask(t, { mask: "+{998}(00)000-00-00" });
        } catch (t) {}
        let r = document.getElementById("phone-enroll");
        IMask(r, { mask: "+{998}(00)000-00-00" });
      } catch (t) {}
      var e, n;
    },
    n = (t) => document.querySelector(t),
    r = (t) => document.querySelectorAll(t),
    u = () => {
      try {
        const t = n(".modals");
        (t.innerHTML = ""),
          (t.innerHTML +=
            '\n         <div class="success-modal">\n             <div class="success-modal__content">\n                 <svg class="success-modal__img" width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M113.5 227C176.184 227 227 176.184 227 113.5C227 50.8157 176.184 0 113.5 0C50.8157 0 0 50.8157 0 113.5C0 176.184 50.8157 227 113.5 227Z" fill="#6DAFA7"/>\n                     <path d="M164.962 165.151C193.425 136.688 193.425 90.54 164.962 62.0768C136.499 33.6136 90.3508 33.6136 61.8876 62.0768C33.4243 90.54 33.4243 136.688 61.8876 165.151C90.3508 193.614 136.499 193.614 164.962 165.151Z" fill="#FFD372"/>\n                     <path d="M81.5923 106.207L109.853 134.468L151.789 92.5321" stroke="#6DAFA7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>\n                 </svg>\n                 <p class="success-modal__text">So’rovingiz muvaffaqiyatli yuborildi!</p>\n                 <button class="button" data-close-modal>Orqaga qaytish</button>\n             </div>\n         </div>\n      '),
          (n("body").style.overflow = "hidden"),
          n("[data-close-modal]").addEventListener("click", (e) => {
            (t.innerHTML = ""), (n("body").style.overflow = "");
          });
      } catch (t) {}
    };
  document.addEventListener("DOMContentLoaded", () => {
    (() => {
      try {
        new Splide(".courses__slider", {
          type: "loop",
          speed: 400,
          autoplay: !0,
          arrows: !0,
          interval: 2e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          perPage: 3,
          perMove: 1,
          gap: "30px",
          pagination: !1,
          breakpoints: {
            1170: { perPage: 3, arrows: !1, gap: "20px" },
            850: { perPage: 2, gap: "10px", arrows: !1 },
            690: { perPage: 1, arrows: !1 },
          },
        }).mount();
      } catch (t) {}
      try {
        new Splide(".teachers__slider", {
          type: "loop",
          speed: 400,
          autoplay: !0,
          arrows: !0,
          interval: 2e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          perPage: 4,
          perMove: 1,
          gap: "30px",
          pagination: !1,
          breakpoints: {
            1170: { perPage: 3, gap: "20px", arrows: !1 },
            850: { perPage: 2, gap: "20px", arrows: !1 },
            690: { perPage: 1, gap: "20px", arrows: !1 },
            620: { perPage: 1, arrows: !1 },
          },
        }).mount();
      } catch (t) {}
      try {
        new Splide(".feedbacks__slider", {
          type: "loop",
          speed: 400,
          autoplay: !0,
          arrows: !0,
          interval: 2e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          perPage: 2,
          perMove: 1,
          gap: "30px",
          pagination: !1,
          breakpoints: {
            1170: { perPage: 2, gap: "20px", arrows: !1 },
            1e3: { perPage: 1, gap: "20px", arrows: !1 },
          },
        }).mount();
      } catch (t) {}
      try {
        new Splide(".partners__slider", {
          type: "loop",
          speed: 400,
          autoplay: !0,
          arrows: !0,
          interval: 2e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          perPage: 5,
          perMove: 1,
          gap: 0,
          pagination: !1,
          breakpoints: {
            1340: { perPage: 4, arrows: !1 },
            1e3: { perPage: 3, arrows: !1 },
            800: { perPage: 2, arrows: !1 },
            600: { perPage: 1, arrows: !1 },
          },
        }).mount();
      } catch (t) {}
    })(),
      e(),
      (() => {
        try {
          const t = n(".dark-layer"),
            e = n(".nav"),
            u = r(".nav__link");
          function i() {
            t.classList.add("d-none"),
              e.classList.add("nav-close"),
              (n("body").style.overflow = "");
          }
          n(".hamburger").addEventListener("click", (r) => {
            t.classList.remove("d-none"),
              e.classList.remove("nav-close"),
              (n("body").style.overflow = "hidden");
          }),
            t.addEventListener("click", (t) => {
              i();
            }),
            u.forEach((t) => {
              t.addEventListener("click", (t) => {
                i();
              });
            });
        } catch (t) {}
      })(),
      (() => {
        try {
          const t = r("[data-course-name]"),
            i = n(".modals");
          function a() {
            const t = n(".enroll-modal__form"),
              e = t.querySelector("#name-enroll"),
              r = t.querySelector("#phone-enroll"),
              i = t.querySelector("#course-enroll");
            t.addEventListener("submit", async (t) => {
              t.preventDefault(),
                localStorage.setItem("name", e.value),
                localStorage.setItem("phone", r.value);
              let n = await fetch("/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify({
                  name: e.value,
                  phone: r.value,
                  course: i.value,
                }),
              });
              (n = await n.json()), n.ok && u();
            });
          }
          t.forEach((t) => {
            t.addEventListener("click", (t) => {
              const r = t.currentTarget.getAttribute("data-course-name");
              (i.innerHTML = ""),
                (i.innerHTML += `\n               <div class="enroll-modal">\n                   <div class="enroll-modal__content">\n                       <div class="enroll-modal__close">\n                           <img src="/img/icons/close.svg" alt="close svg">\n                       </div>\n                       <h2 class="enroll-modal__heading">Kursga yozilish</h2>\n                       <form class="enroll-modal__form">\n                           <input class="input" id="name-enroll" value="${
                  localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : ""
                }" type="text" placeholder="Ism" required minlength="3">\n                           <input class="input" id="phone-enroll" value="${
                  localStorage.getItem("phone")
                    ? localStorage.getItem("phone")
                    : ""
                }" type="tel" placeholder="Telefon raqam" required>\n                           <input class="input" id="course-enroll" type="text" value=${r} readonly required>\n                          <button class="button" type="submit">Yuborish</button>\n                       </form>\n                   </div>\n               </div>\n            `),
                (n("body").style.overflow = "hidden"),
                n(".enroll-modal__close img").addEventListener("click", (t) => {
                  (i.innerHTML = ""), (n("body").style.overflow = "");
                }),
                e(),
                a();
            });
          });
        } catch (t) {}
      })(),
      (() => {
        try {
          n(".modals");
          const t = n(".contact__form"),
            e = t.querySelector("#name"),
            r = t.querySelector("#phone"),
            i = t.querySelector("#email"),
            c = t.querySelector("#csrf");
          t.addEventListener("submit", async (n) => {
            n.preventDefault();
            let a = await fetch("/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json; charset=utf-8" },
              body: JSON.stringify({
                name: e.value,
                phone: r.value,
                email: i.value,
              }),
            });
            (a = await a.json()), a.ok && (u(), t.reset());
          });
        } catch (t) {}
      })(),
      AOS.init();
  });
})();
//# sourceMappingURL=bundle.js.map
