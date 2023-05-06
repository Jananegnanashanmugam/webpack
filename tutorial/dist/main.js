(() => {
  "use strict";
  var e = {
      959: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(537),
          o = n.n(r),
          a = n(645),
          c = n.n(a)()(o());
        c.push([
          e.id,
          ".green-button{color:#ff0;background-color:red;outline:none;padding:7px 15px;font-size:20px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/Component/Examplebutton.scss"],
            names: [],
            mappings:
              "AAGA,cACE,UAHW,CAIX,oBALS,CAMT,YAAA,CACA,gBAAA,CACA,cAAA",
            sourcesContent: [
              "$bg-color: red;\n$text-color: yellow;\n\n.green-button {\n  color: $text-color;\n  background-color: $bg-color;\n  outline: none;\n  padding: 7px 15px;\n  font-size: 20px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const i = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (c[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && c[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              a = "/*# ".concat(o, " */");
            return [t].concat([a]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, c = [], i = 0; i < e.length; i++) {
            var s = e[i],
              u = r.base ? s[0] + r.base : s[0],
              l = a[u] || 0,
              p = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var f = n(p),
              d = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(d);
            else {
              var v = o(d, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: p, updater: v, references: 1 });
            }
            c.push(p);
          }
          return c;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var i = n(a[c]);
              t[i].references--;
            }
            for (var s = r(e, o), u = 0; u < a.length; u++) {
              var l = n(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.nc = void 0),
    (() => {
      const e = n.p + "7176d12a29433c42adf3a9453ef89aac.jpg";
      var t = n(379),
        r = n.n(t),
        o = n(795),
        a = n.n(o),
        c = n(569),
        i = n.n(c),
        s = n(565),
        u = n.n(s),
        l = n(216),
        p = n.n(l),
        f = n(589),
        d = n.n(f),
        v = n(959),
        m = {};
      function y(e) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          y(e)
        );
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== y(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" !== y(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(r.key)),
              "symbol" === y(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      (m.styleTagTransform = d()),
        (m.setAttributes = u()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = a()),
        (m.insertStyleElement = p()),
        r()(v.Z, m),
        v.Z && v.Z.locals && v.Z.locals;
      var g = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "render",
              value: function () {
                var e = document.createElement("button");
                (e.innerHTML = "Press Me"),
                  e.classList.add("green-button"),
                  document.querySelector("body").append(e);
              },
            },
          ]) && b(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      const h = g;
      var A, w;
      console.log("Hello world!"),
        ((A = document.createElement("img")).src = e),
        document.querySelector("body").append(A),
        new h().render(),
        (w = 1 * 2 * 3),
        console.log(
          "Multiplication of "
            .concat(1, " ,")
            .concat(2, " and ")
            .concat(3, " is ")
            .concat(w)
        );
    })();
})();
//# sourceMappingURL=main.js.map
