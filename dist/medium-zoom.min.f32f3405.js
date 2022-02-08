// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/medium-zoom.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).mediumZoom = t();
}(this, function () {
  "use strict";

  var e = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];

      for (var n in o) {
        Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
      }
    }

    return e;
  },
      t = function t(e) {
    return "IMG" === e.tagName;
  },
      o = function o(e) {
    return e && 1 === e.nodeType;
  },
      n = function n(e) {
    return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
  },
      i = function i(e) {
    try {
      return Array.isArray(e) ? e.filter(t) : function (e) {
        return NodeList.prototype.isPrototypeOf(e);
      }(e) ? [].slice.call(e).filter(t) : o(e) ? [e].filter(t) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(t) : [];
    } catch (e) {
      throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
    }
  },
      r = function r(e) {
    var t = document.createElement("div");
    return t.classList.add("medium-zoom-overlay"), t.style.background = e, t;
  },
      d = function d(e) {
    var t = e.getBoundingClientRect(),
        o = t.top,
        n = t.left,
        i = t.width,
        r = t.height,
        d = e.cloneNode(),
        m = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        a = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return d.removeAttribute("id"), d.style.position = "absolute", d.style.top = o + m + "px", d.style.left = n + a + "px", d.style.width = i + "px", d.style.height = r + "px", d.style.transform = "", d;
  },
      m = function m(t, o) {
    var n = e({
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    }, o);
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t, n);
    var i = document.createEvent("CustomEvent");
    return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i;
  };

  return function (e, t) {
    void 0 === t && (t = {});
    var o = t.insertAt;

    if (e && "undefined" != typeof document) {
      var n = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("style");
      i.type = "text/css", "top" === o && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
    }
  }(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"), function t(a) {
    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = window.Promise || function (e) {
      function t() {}

      e(t, t);
    },
        u = function u(e) {
      var t = e.target;
      t !== N ? -1 !== O.indexOf(t) && w({
        target: t
      }) : E();
    },
        s = function s() {
      if (!A && T.original) {
        var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        Math.abs(k - e) > S.scrollOffset && setTimeout(E, 150);
      }
    },
        f = function f(e) {
      var t = e.key || e.keyCode;
      "Escape" !== t && "Esc" !== t && 27 !== t || E();
    },
        p = function p() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t;

      if (t.background && (N.style.background = t.background), t.container && t.container instanceof Object && (n.container = e({}, S.container, t.container)), t.template) {
        var i = o(t.template) ? t.template : document.querySelector(t.template);
        n.template = i;
      }

      return S = e({}, S, n), O.forEach(function (e) {
        e.dispatchEvent(m("medium-zoom:update", {
          detail: {
            zoom: j
          }
        }));
      }), j;
    },
        g = function g() {
      var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t(e({}, S, o));
    },
        v = function v() {
      for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) {
        t[o] = arguments[o];
      }

      var n = t.reduce(function (e, t) {
        return [].concat(e, i(t));
      }, []);
      return n.filter(function (e) {
        return -1 === O.indexOf(e);
      }).forEach(function (e) {
        O.push(e), e.classList.add("medium-zoom-image");
      }), x.forEach(function (e) {
        var t = e.type,
            o = e.listener,
            i = e.options;
        n.forEach(function (e) {
          e.addEventListener(t, o, i);
        });
      }), j;
    },
        h = function h() {
      for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) {
        t[o] = arguments[o];
      }

      T.zoomed && E();
      var n = t.length > 0 ? t.reduce(function (e, t) {
        return [].concat(e, i(t));
      }, []) : O;
      return n.forEach(function (e) {
        e.classList.remove("medium-zoom-image"), e.dispatchEvent(m("medium-zoom:detach", {
          detail: {
            zoom: j
          }
        }));
      }), O = O.filter(function (e) {
        return -1 === n.indexOf(e);
      }), j;
    },
        z = function z(e, t) {
      var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return O.forEach(function (n) {
        n.addEventListener("medium-zoom:" + e, t, o);
      }), x.push({
        type: "medium-zoom:" + e,
        listener: t,
        options: o
      }), j;
    },
        y = function y(e, t) {
      var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return O.forEach(function (n) {
        n.removeEventListener("medium-zoom:" + e, t, o);
      }), x = x.filter(function (o) {
        return !(o.type === "medium-zoom:" + e && o.listener.toString() === t.toString());
      }), j;
    },
        b = function b() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = t.target,
          r = function r() {
        var t = {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
            i = void 0,
            r = void 0;
        if (S.container) if (S.container instanceof Object) i = (t = e({}, t, S.container)).width - t.left - t.right - 2 * S.margin, r = t.height - t.top - t.bottom - 2 * S.margin;else {
          var d = (o(S.container) ? S.container : document.querySelector(S.container)).getBoundingClientRect(),
              m = d.width,
              a = d.height,
              l = d.left,
              c = d.top;
          t = e({}, t, {
            width: m,
            height: a,
            left: l,
            top: c
          });
        }
        i = i || t.width - 2 * S.margin, r = r || t.height - 2 * S.margin;
        var u = T.zoomedHd || T.original,
            s = n(u) ? i : u.naturalWidth || i,
            f = n(u) ? r : u.naturalHeight || r,
            p = u.getBoundingClientRect(),
            g = p.top,
            v = p.left,
            h = p.width,
            z = p.height,
            y = Math.min(s, i) / h,
            b = Math.min(f, r) / z,
            E = Math.min(y, b),
            w = "scale(" + E + ") translate3d(" + ((i - h) / 2 - v + S.margin + t.left) / E + "px, " + ((r - z) / 2 - g + S.margin + t.top) / E + "px, 0)";
        T.zoomed.style.transform = w, T.zoomedHd && (T.zoomedHd.style.transform = w);
      };

      return new c(function (e) {
        if (i && -1 === O.indexOf(i)) e(j);else {
          if (T.zoomed) e(j);else {
            if (i) T.original = i;else {
              if (!(O.length > 0)) return void e(j);
              var t = O;
              T.original = t[0];
            }

            if (T.original.dispatchEvent(m("medium-zoom:open", {
              detail: {
                zoom: j
              }
            })), k = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, A = !0, T.zoomed = d(T.original), document.body.appendChild(N), S.template) {
              var n = o(S.template) ? S.template : document.querySelector(S.template);
              T.template = document.createElement("div"), T.template.appendChild(n.content.cloneNode(!0)), document.body.appendChild(T.template);
            }

            if (document.body.appendChild(T.zoomed), window.requestAnimationFrame(function () {
              document.body.classList.add("medium-zoom--opened");
            }), T.original.classList.add("medium-zoom-image--hidden"), T.zoomed.classList.add("medium-zoom-image--opened"), T.zoomed.addEventListener("click", E), T.zoomed.addEventListener("transitionend", function t() {
              A = !1, T.zoomed.removeEventListener("transitionend", t), T.original.dispatchEvent(m("medium-zoom:opened", {
                detail: {
                  zoom: j
                }
              })), e(j);
            }), T.original.getAttribute("data-zoom-src")) {
              T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("srcset"), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.src = T.zoomed.getAttribute("data-zoom-src"), T.zoomedHd.onerror = function () {
                clearInterval(a), console.warn("Unable to reach the zoom image target " + T.zoomedHd.src), T.zoomedHd = null, r();
              };
              var a = setInterval(function () {
                T.zoomedHd.complete && (clearInterval(a), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E), document.body.appendChild(T.zoomedHd), r());
              }, 10);
            } else if (T.original.hasAttribute("srcset")) {
              T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.removeAttribute("loading");
              var l = T.zoomedHd.addEventListener("load", function () {
                T.zoomedHd.removeEventListener("load", l), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E), document.body.appendChild(T.zoomedHd), r();
              });
            } else r();
          }
        }
      });
    },
        E = function E() {
      return new c(function (e) {
        if (!A && T.original) {
          A = !0, document.body.classList.remove("medium-zoom--opened"), T.zoomed.style.transform = "", T.zoomedHd && (T.zoomedHd.style.transform = ""), T.template && (T.template.style.transition = "opacity 150ms", T.template.style.opacity = 0), T.original.dispatchEvent(m("medium-zoom:close", {
            detail: {
              zoom: j
            }
          })), T.zoomed.addEventListener("transitionend", function t() {
            T.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(T.zoomed), T.zoomedHd && document.body.removeChild(T.zoomedHd), document.body.removeChild(N), T.zoomed.classList.remove("medium-zoom-image--opened"), T.template && document.body.removeChild(T.template), A = !1, T.zoomed.removeEventListener("transitionend", t), T.original.dispatchEvent(m("medium-zoom:closed", {
              detail: {
                zoom: j
              }
            })), T.original = null, T.zoomed = null, T.zoomedHd = null, T.template = null, e(j);
          });
        } else e(j);
      });
    },
        w = function w() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.target;
      return T.original ? E() : b({
        target: t
      });
    },
        L = function L() {
      return S;
    },
        H = function H() {
      return O;
    },
        C = function C() {
      return T.original;
    },
        O = [],
        x = [],
        A = !1,
        k = 0,
        S = l,
        T = {
      original: null,
      zoomed: null,
      zoomedHd: null,
      template: null
    };

    "[object Object]" === Object.prototype.toString.call(a) ? S = a : (a || "string" == typeof a) && v(a), S = e({
      margin: 0,
      background: "#fff",
      scrollOffset: 40,
      container: null,
      template: null
    }, S);
    var N = r(S.background);
    document.addEventListener("click", u), document.addEventListener("keyup", f), document.addEventListener("scroll", s), window.addEventListener("resize", E);
    var j = {
      open: b,
      close: E,
      toggle: w,
      update: p,
      clone: g,
      attach: v,
      detach: h,
      on: z,
      off: y,
      getOptions: L,
      getImages: H,
      getZoomedImage: C
    };
    return j;
  };
});
},{}],"../../../../../../../home/moe/.nvm/versions/node/v16.13.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64578" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../home/moe/.nvm/versions/node/v16.13.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/medium-zoom.min.js"], null)
//# sourceMappingURL=/medium-zoom.min.f32f3405.js.map