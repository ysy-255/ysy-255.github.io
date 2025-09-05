(() => {
  "use strict";
  var e = {},
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) {
      if (void 0 !== o.error) throw o.error;
      return o.exports;
    }
    var i = (t[n] = { id: n, loaded: !1, exports: {} });
    try {
      e[n].call(i.exports, i, i.exports, r);
    } catch (e) {
      throw ((i.error = e), e);
    }
    return (i.loaded = !0), i.exports;
  }
  (r.m = e),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (n, o) {
        if (
          (1 & o && (n = this(n)),
          8 & o ||
            ("object" == typeof n &&
              n &&
              ((4 & o && n.__esModule) ||
                (16 & o && "function" == typeof n.then))))
        )
          return n;
        var i = Object.create(null);
        r.r(i);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & o && n;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => {
            a[e] = () => n[e];
          });
        return (a.default = () => n), r.d(i, a), i;
      };
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
    (r.miniCssF = (e) =>
      "css/" +
      {
        2954: "leaflet_override",
        4142: "ysfmap",
        7146: "leaflet",
      }[e] +
      ".css"),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (r.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "_N_E:";
      r.l = function (n, o, i, a) {
        if (e[n]) return void e[n].push(o);
        if (void 0 !== i)
          for (
            var l, u, d = document.getElementsByTagName("script"), c = 0;
            c < d.length;
            c++
          ) {
            var f = d[c];
            if (
              f.getAttribute("src") == n ||
              f.getAttribute("data-webpack") == t + i
            ) {
              l = f;
              break;
            }
          }
        l ||
          ((u = !0),
          ((l = document.createElement("script")).charset = "utf-8"),
          (l.timeout = 120),
          r.nc && l.setAttribute("nonce", r.nc),
          l.setAttribute("data-webpack", t + i),
          (l.src = r.tu(n))),
          (e[n] = [o]);
        var s = function (t, r) {
            (l.onerror = l.onload = null), clearTimeout(p);
            var o = e[n];
            if (
              (delete e[n],
              l.parentNode && l.parentNode.removeChild(l),
              o &&
                o.forEach(function (e) {
                  return e(r);
                }),
              t)
            )
              return t(r);
          },
          p = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: l }),
            12e4
          );
        (l.onerror = s.bind(null, l.onerror)),
          (l.onload = s.bind(null, l.onload)),
          u && document.head.appendChild(l);
      };
    })(),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      r.O = (t, n, o, i) => {
        if (n) {
          i = i || 0;
          for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
          e[a] = [n, o, i];
          return;
        }
        for (var l = 1 / 0, a = 0; a < e.length; a++) {
          for (var [n, o, i] = e[a], u = !0, d = 0; d < n.length; d++)
            (!1 & i || l >= i) && Object.keys(r.O).every((e) => r.O[e](n[d]))
              ? n.splice(d--, 1)
              : ((u = !1), i < l && (l = i));
          if (u) {
            e.splice(a--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      };
    })(),
    (r.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = function (e, t, n, o, i) {
            var a = document.createElement("link");
            (a.rel = "stylesheet"),
              (a.type = "text/css"),
              r.nc && (a.nonce = r.nc),
              (a.onerror = a.onload =
                function (r) {
                  if (((a.onerror = a.onload = null), "load" === r.type)) o();
                  else {
                    var n = r && ("load" === r.type ? "missing" : r.type),
                      l = (r && r.target && r.target.href) || t,
                      u = Error(
                        "Loading CSS chunk " + e + " failed.\\n(" + l + ")"
                      );
                    (u.code = "CSS_CHUNK_LOAD_FAILED"),
                      (u.type = n),
                      (u.request = l),
                      a.parentNode && a.parentNode.removeChild(a),
                      i(u);
                  }
                }),
              (a.href = t);
            if ("function" == typeof _N_E_STYLE_LOAD) {
              let { href: e, onload: t, onerror: r } = a;
              _N_E_STYLE_LOAD(
                0 === e.indexOf(window.location.origin)
                  ? new URL(e).pathname
                  : e
              ).then(
                () => (null == t ? void 0 : t.call(a, { type: "load" })),
                () => (null == r ? void 0 : r.call(a, {}))
              );
            } else document.head.appendChild(a);
            return a;
          },
          t = function (e, t) {
            for (
              var r = document.getElementsByTagName("link"), n = 0;
              n < r.length;
              n++
            ) {
              var o = r[n],
                i = o.getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (i === e || i === t)) return o;
            }
            for (
              var a = document.getElementsByTagName("style"), n = 0;
              n < a.length;
              n++
            ) {
              var o = a[n],
                i = o.getAttribute("data-href");
              if (i === e || i === t) return o;
            }
          },
          n = { 6194: 0 };
        r.f.miniCss = function (o, i) {
          if (n[o]) i.push(n[o]);
          else
            0 !== n[o] &&
              { 2954: 1, 4142: 1, 7146: 1 }[o] &&
              i.push(
                (n[o] = new Promise(function (n, i) {
                  var a = r.miniCssF(o),
                    l = r.p + a;
                  if (t(a, l)) return n();
                  e(o, l, null, n, i);
                }).then(
                  function () {
                    n[o] = 0;
                  },
                  function (e) {
                    throw (delete n[o], e);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var e = {
        1305: 0,
        1324: 0,
        1712: 0,
        1837: 0,
        2285: 0,
        2423: 0,
        352: 0,
        3635: 0,
        3730: 0,
        375: 0,
        3913: 0,
        4430: 0,
        566: 0,
        5794: 0,
        6194: 0,
        6865: 0,
        6901: 0,
        7138: 0,
        8113: 0,
        8371: 0,
        855: 0,
        8971: 0,
        9154: 0,
        9659: 0,
        9702: 0,
        9746: 0,
      };
      (r.f.j = function (t, n) {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (
            /^(4(405|51|854)|6(381|513|909|922)|88(|08)|7(179|616|764)|3(067|44|458|870)|1259|1856|2224|2942|5552|9454|999)$/.test(
              t
            )
          ) {
            var i = new Promise((r, n) => (o = e[t] = [r, n]));
            n.push((o[2] = i));
            var a = "js/ysfmap.js",
              l = Error();
            r.l(
              a,
              function (n) {
                if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    a = n && n.target && n.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = a),
                    o[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          } else e[t] = 0;
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var o,
            i,
            [a, l, u] = n,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in l) r.o(l, o) && (r.m[o] = l[o]);
            if (u) var c = u(r);
          }
          for (t && t(n); d < a.length; d++)
            (i = a[d]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return r.O(c);
        },
        n = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
})();
