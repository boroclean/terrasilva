var TheNewHeader;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 256
(module) {

typeof window === "undefined" && (window = { ctrl: {}, lib: {} });
!window.ctrl && (window.ctrl = {});
!window.lib && (window.lib = {});
!(function(a, b) {
  function c(a2, b2) {
    u[a2] || (u[a2] = true, console.log(b2));
  }
  function d() {
    var a2 = {}, b2 = new s(function(b3, c2) {
      a2.resolve = b3, a2.reject = c2;
    });
    return a2.promise = b2, a2;
  }
  function e(a2, b2) {
    for (var c2 in b2) void 0 === a2[c2] && (a2[c2] = b2[c2]);
    return a2;
  }
  function f(a2) {
    var b2 = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
    b2.appendChild(a2);
  }
  function g() {
    if (window.etSign) window.__etReady = true;
    else {
      window.etReady = function() {
        window.__etReady = true;
      };
      var a2 = document.createElement("script");
      a2.src = "//g.alicdn.com/sd/baxia-entry/index.js", f(a2);
    }
  }
  function h(a2) {
    var b2 = [];
    for (var c2 in a2) a2[c2] && b2.push(c2 + "=" + encodeURIComponent(a2[c2]));
    return b2.join("&");
  }
  function i(a2) {
    try {
      return ".com" !== a2.substring(a2.lastIndexOf(".")) ? (a2.split(".") || []).length <= 3 ? a2 : a2.split(".").slice(1).join(".") : a2.substring(a2.lastIndexOf(".", a2.lastIndexOf(".") - 1) + 1);
    } catch (b2) {
      return a2.substring(a2.lastIndexOf(".", a2.lastIndexOf(".") - 1) + 1);
    }
  }
  function j(a2) {
    function b2(a3, b3) {
      return a3 << b3 | a3 >>> 32 - b3;
    }
    function c2(a3, b3) {
      var c3, d3, e3, f3, g3;
      return e3 = 2147483648 & a3, f3 = 2147483648 & b3, c3 = 1073741824 & a3, d3 = 1073741824 & b3, g3 = (1073741823 & a3) + (1073741823 & b3), c3 & d3 ? 2147483648 ^ g3 ^ e3 ^ f3 : c3 | d3 ? 1073741824 & g3 ? 3221225472 ^ g3 ^ e3 ^ f3 : 1073741824 ^ g3 ^ e3 ^ f3 : g3 ^ e3 ^ f3;
    }
    function d2(a3, b3, c3) {
      return a3 & b3 | ~a3 & c3;
    }
    function e2(a3, b3, c3) {
      return a3 & c3 | b3 & ~c3;
    }
    function f2(a3, b3, c3) {
      return a3 ^ b3 ^ c3;
    }
    function g2(a3, b3, c3) {
      return b3 ^ (a3 | ~c3);
    }
    function h2(a3, e3, f3, g3, h3, i3, j3) {
      return a3 = c2(a3, c2(c2(d2(e3, f3, g3), h3), j3)), c2(b2(a3, i3), e3);
    }
    function i2(a3, d3, f3, g3, h3, i3, j3) {
      return a3 = c2(a3, c2(c2(e2(d3, f3, g3), h3), j3)), c2(b2(a3, i3), d3);
    }
    function j2(a3, d3, e3, g3, h3, i3, j3) {
      return a3 = c2(a3, c2(c2(f2(d3, e3, g3), h3), j3)), c2(b2(a3, i3), d3);
    }
    function k2(a3, d3, e3, f3, h3, i3, j3) {
      return a3 = c2(a3, c2(c2(g2(d3, e3, f3), h3), j3)), c2(b2(a3, i3), d3);
    }
    function l2(a3) {
      for (var b3, c3 = a3.length, d3 = c3 + 8, e3 = (d3 - d3 % 64) / 64, f3 = 16 * (e3 + 1), g3 = new Array(f3 - 1), h3 = 0, i3 = 0; c3 > i3; ) b3 = (i3 - i3 % 4) / 4, h3 = i3 % 4 * 8, g3[b3] = g3[b3] | a3.charCodeAt(i3) << h3, i3++;
      return b3 = (i3 - i3 % 4) / 4, h3 = i3 % 4 * 8, g3[b3] = g3[b3] | 128 << h3, g3[f3 - 2] = c3 << 3, g3[f3 - 1] = c3 >>> 29, g3;
    }
    function m2(a3) {
      var b3, c3, d3 = "", e3 = "";
      for (c3 = 0; 3 >= c3; c3++) b3 = a3 >>> 8 * c3 & 255, e3 = "0" + b3.toString(16), d3 += e3.substr(e3.length - 2, 2);
      return d3;
    }
    function n2(a3) {
      a3 = a3.replace(/\r\n/g, "\n");
      for (var b3 = "", c3 = 0; c3 < a3.length; c3++) {
        var d3 = a3.charCodeAt(c3);
        128 > d3 ? b3 += String.fromCharCode(d3) : d3 > 127 && 2048 > d3 ? (b3 += String.fromCharCode(d3 >> 6 | 192), b3 += String.fromCharCode(63 & d3 | 128)) : (b3 += String.fromCharCode(d3 >> 12 | 224), b3 += String.fromCharCode(d3 >> 6 & 63 | 128), b3 += String.fromCharCode(63 & d3 | 128));
      }
      return b3;
    }
    var o2, p2, q2, r2, s2, t2, u2, v2, w2, x2 = [], y2 = 7, z2 = 12, A2 = 17, B2 = 22, C2 = 5, D2 = 9, E2 = 14, F2 = 20, G2 = 4, H2 = 11, I2 = 16, J2 = 23, K = 6, L = 10, M = 15, N = 21;
    for (a2 = n2(a2), x2 = l2(a2), t2 = 1732584193, u2 = 4023233417, v2 = 2562383102, w2 = 271733878, o2 = 0; o2 < x2.length; o2 += 16) p2 = t2, q2 = u2, r2 = v2, s2 = w2, t2 = h2(t2, u2, v2, w2, x2[o2 + 0], y2, 3614090360), w2 = h2(w2, t2, u2, v2, x2[o2 + 1], z2, 3905402710), v2 = h2(v2, w2, t2, u2, x2[o2 + 2], A2, 606105819), u2 = h2(u2, v2, w2, t2, x2[o2 + 3], B2, 3250441966), t2 = h2(t2, u2, v2, w2, x2[o2 + 4], y2, 4118548399), w2 = h2(w2, t2, u2, v2, x2[o2 + 5], z2, 1200080426), v2 = h2(v2, w2, t2, u2, x2[o2 + 6], A2, 2821735955), u2 = h2(u2, v2, w2, t2, x2[o2 + 7], B2, 4249261313), t2 = h2(t2, u2, v2, w2, x2[o2 + 8], y2, 1770035416), w2 = h2(w2, t2, u2, v2, x2[o2 + 9], z2, 2336552879), v2 = h2(v2, w2, t2, u2, x2[o2 + 10], A2, 4294925233), u2 = h2(u2, v2, w2, t2, x2[o2 + 11], B2, 2304563134), t2 = h2(t2, u2, v2, w2, x2[o2 + 12], y2, 1804603682), w2 = h2(w2, t2, u2, v2, x2[o2 + 13], z2, 4254626195), v2 = h2(v2, w2, t2, u2, x2[o2 + 14], A2, 2792965006), u2 = h2(u2, v2, w2, t2, x2[o2 + 15], B2, 1236535329), t2 = i2(t2, u2, v2, w2, x2[o2 + 1], C2, 4129170786), w2 = i2(w2, t2, u2, v2, x2[o2 + 6], D2, 3225465664), v2 = i2(v2, w2, t2, u2, x2[o2 + 11], E2, 643717713), u2 = i2(u2, v2, w2, t2, x2[o2 + 0], F2, 3921069994), t2 = i2(t2, u2, v2, w2, x2[o2 + 5], C2, 3593408605), w2 = i2(w2, t2, u2, v2, x2[o2 + 10], D2, 38016083), v2 = i2(v2, w2, t2, u2, x2[o2 + 15], E2, 3634488961), u2 = i2(u2, v2, w2, t2, x2[o2 + 4], F2, 3889429448), t2 = i2(t2, u2, v2, w2, x2[o2 + 9], C2, 568446438), w2 = i2(w2, t2, u2, v2, x2[o2 + 14], D2, 3275163606), v2 = i2(v2, w2, t2, u2, x2[o2 + 3], E2, 4107603335), u2 = i2(u2, v2, w2, t2, x2[o2 + 8], F2, 1163531501), t2 = i2(t2, u2, v2, w2, x2[o2 + 13], C2, 2850285829), w2 = i2(w2, t2, u2, v2, x2[o2 + 2], D2, 4243563512), v2 = i2(v2, w2, t2, u2, x2[o2 + 7], E2, 1735328473), u2 = i2(u2, v2, w2, t2, x2[o2 + 12], F2, 2368359562), t2 = j2(t2, u2, v2, w2, x2[o2 + 5], G2, 4294588738), w2 = j2(w2, t2, u2, v2, x2[o2 + 8], H2, 2272392833), v2 = j2(v2, w2, t2, u2, x2[o2 + 11], I2, 1839030562), u2 = j2(u2, v2, w2, t2, x2[o2 + 14], J2, 4259657740), t2 = j2(t2, u2, v2, w2, x2[o2 + 1], G2, 2763975236), w2 = j2(w2, t2, u2, v2, x2[o2 + 4], H2, 1272893353), v2 = j2(v2, w2, t2, u2, x2[o2 + 7], I2, 4139469664), u2 = j2(u2, v2, w2, t2, x2[o2 + 10], J2, 3200236656), t2 = j2(t2, u2, v2, w2, x2[o2 + 13], G2, 681279174), w2 = j2(w2, t2, u2, v2, x2[o2 + 0], H2, 3936430074), v2 = j2(v2, w2, t2, u2, x2[o2 + 3], I2, 3572445317), u2 = j2(u2, v2, w2, t2, x2[o2 + 6], J2, 76029189), t2 = j2(t2, u2, v2, w2, x2[o2 + 9], G2, 3654602809), w2 = j2(w2, t2, u2, v2, x2[o2 + 12], H2, 3873151461), v2 = j2(v2, w2, t2, u2, x2[o2 + 15], I2, 530742520), u2 = j2(u2, v2, w2, t2, x2[o2 + 2], J2, 3299628645), t2 = k2(t2, u2, v2, w2, x2[o2 + 0], K, 4096336452), w2 = k2(w2, t2, u2, v2, x2[o2 + 7], L, 1126891415), v2 = k2(v2, w2, t2, u2, x2[o2 + 14], M, 2878612391), u2 = k2(u2, v2, w2, t2, x2[o2 + 5], N, 4237533241), t2 = k2(t2, u2, v2, w2, x2[o2 + 12], K, 1700485571), w2 = k2(w2, t2, u2, v2, x2[o2 + 3], L, 2399980690), v2 = k2(v2, w2, t2, u2, x2[o2 + 10], M, 4293915773), u2 = k2(u2, v2, w2, t2, x2[o2 + 1], N, 2240044497), t2 = k2(t2, u2, v2, w2, x2[o2 + 8], K, 1873313359), w2 = k2(w2, t2, u2, v2, x2[o2 + 15], L, 4264355552), v2 = k2(v2, w2, t2, u2, x2[o2 + 6], M, 2734768916), u2 = k2(u2, v2, w2, t2, x2[o2 + 13], N, 1309151649), t2 = k2(t2, u2, v2, w2, x2[o2 + 4], K, 4149444226), w2 = k2(w2, t2, u2, v2, x2[o2 + 11], L, 3174756917), v2 = k2(v2, w2, t2, u2, x2[o2 + 2], M, 718787259), u2 = k2(u2, v2, w2, t2, x2[o2 + 9], N, 3951481745), t2 = c2(t2, p2), u2 = c2(u2, q2), v2 = c2(v2, r2), w2 = c2(w2, s2);
    var O = m2(t2) + m2(u2) + m2(v2) + m2(w2);
    return O.toLowerCase();
  }
  function k(a2) {
    return "[object Object]" == {}.toString.call(a2);
  }
  function l(a2, b2, c2) {
    var d2 = c2 || {};
    document.cookie = a2.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b2.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) + (d2.domain ? ";domain=" + d2.domain : "") + (d2.path ? ";path=" + d2.path : "") + (d2.secure ? ";secure" : "") + (d2.httponly ? ";HttpOnly" : "") + (d2.sameSite ? ";Samesite=" + d2.sameSite : "");
  }
  function m(a2) {
    var b2 = new RegExp("(?:^|;\\s*)" + a2 + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
    return b2 ? b2[1] : void 0;
  }
  function n(a2, b2, c2) {
    var d2 = /* @__PURE__ */ new Date();
    d2.setTime(d2.getTime() - 864e5);
    var e2 = "/";
    document.cookie = a2 + "=;path=" + e2 + ";domain=." + b2 + ";expires=" + d2.toGMTString(), document.cookie = a2 + "=;path=" + e2 + ";domain=." + c2 + "." + b2 + ";expires=" + d2.toGMTString();
  }
  function o(a2, b2) {
    for (var c2 = a2.split("."), d2 = b2.split("."), e2 = 3, f2 = 0; e2 > f2; f2++) {
      var g2 = Number(c2[f2]), h2 = Number(d2[f2]);
      if (g2 > h2) return 1;
      if (h2 > g2) return -1;
      if (!isNaN(g2) && isNaN(h2)) return 1;
      if (isNaN(g2) && !isNaN(h2)) return -1;
    }
    return 0;
  }
  function p() {
    var b2 = a.location.hostname;
    if (!b2) {
      var c2 = a.parent.location.hostname;
      c2 && ~c2.indexOf("zebra.alibaba-inc.com") && (b2 = c2);
    }
    var d2 = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"], e2 = new RegExp("([^.]*?)\\.?((?:" + d2.join(")|(?:").replace(/\./g, "\\.") + "))", "i"), f2 = b2.match(e2) || [], g2 = f2[2] || "taobao.com", h2 = f2[1] || "m";
    "taobao.net" !== g2 || "x" !== h2 && "waptest" !== h2 && "daily" !== h2 ? "taobao.net" === g2 && "demo" === h2 ? h2 = "demo" : "alibaba-inc.com" === g2 && "zebra" === h2 ? h2 = "zebra" : "waptest" !== h2 && "wapa" !== h2 && "m" !== h2 && (h2 = "m") : h2 = "waptest";
    var i2 = "h5api";
    "taobao.net" === g2 && "waptest" === h2 && (i2 = "acs"), w.mainDomain = g2, w.subDomain = h2, w.prefix = i2;
  }
  function q() {
    var b2 = a.navigator.userAgent, c2 = b2.match(/WindVane[\/\s]([\d\.\_]+)/);
    c2 && (w.WindVaneVersion = c2[1]);
    var d2 = b2.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
    d2 && (w.AliAppName = d2[1], w.AliAppVersion = d2[2]);
    var e2 = b2.match(/AMapClient\/([\d\.\_]+)/i);
    e2 && (w.AliAppName = "AMAP", w.AliAppVersion = e2[1]);
  }
  function r(a2) {
    this.id = "" + (/* @__PURE__ */ new Date()).getTime() + ++C, this.params = e(a2 || {}, { v: "*", data: {}, type: "get", dataType: "jsonp" }), this.params.type = this.params.type.toLowerCase(), "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = x.slice(0);
  }
  var s = a.Promise, t = (s || { resolve: function() {
    return void 0;
  } }).resolve(), u = {}, v = { DOWNGRADE_BY_WINDVANE: "DOWNGRADE_BY_WINDVANE", DOWNGRADE_BY_IFRAME: "DOWNGRADE_BY_IFRAME" };
  String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  });
  var w = { useJsonpResultType: false, safariGoLogin: true, useAlipayJSBridge: false }, x = [], y = { ERROR: -1, SUCCESS: 0, TOKEN_EXPIRED: 1, SESSION_EXPIRED: 2 };
  p(), q();
  var z = /[Android|Adr]/.test(a.navigator.userAgent), A = "AP" === w.AliAppName, B = A && o(w.AliAppVersion, "10.1.2") >= 0 || "KB" === w.AliAppName && o(w.AliAppVersion, "7.1.62") >= 0 || z && "AMAP" === w.AliAppName && o(w.AliAppVersion, "1.0.1") >= 0, C = 0, D = "2.7.5";
  r.prototype.use = function(a2) {
    if (!a2) throw new Error("middleware is undefined");
    return this.middlewares.push(a2), this;
  }, r.prototype.__processRequestMethod = function(a2) {
    var b2 = this.params, c2 = this.options;
    "get" === b2.type && "jsonp" === b2.dataType ? c2.getJSONP = true : "get" === b2.type && "originaljsonp" === b2.dataType ? c2.getOriginalJSONP = true : "get" === b2.type && "json" === b2.dataType ? c2.getJSON = true : "post" === b2.type && (c2.postJSON = true), a2();
  }, r.prototype.__processRequestType = function(d2) {
    var e2 = this, f2 = this.params, g2 = this.options;
    if (w.H5Request === true && (g2.H5Request = true), w.WindVaneRequest === true && (g2.WindVaneRequest = true), g2.H5Request === false && g2.WindVaneRequest === true) {
      if (!B && (!b.windvane || parseFloat(g2.WindVaneVersion) < 5.4)) throw new Error("WINDVANE_NOT_FOUND::\u7F3A\u5C11WindVane\u73AF\u5883");
      if (B && !a.AlipayJSBridge) throw new Error("ALIPAY_NOT_READY::\u652F\u4ED8\u5B9D\u901A\u9053\u672A\u51C6\u5907\u597D\uFF0C\u652F\u4ED8\u5B9D\u8BF7\u89C1 https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z");
    } else if (g2.H5Request === true) g2.WindVaneRequest = false;
    else if ("undefined" == typeof g2.WindVaneRequest && "undefined" == typeof g2.H5Request) {
      if (b.windvane && parseFloat(g2.WindVaneVersion) >= 5.4 ? g2.WindVaneRequest = true : (c(v.DOWNGRADE_BY_WINDVANE, "[@ali/lib-mtop] The current page does not have the lib.windvane variable, automatically downgraded to H5 request"), g2.H5Request = true), B) {
        if (g2.WindVaneRequest = g2.H5Request = void 0, a.AlipayJSBridge) if (k(f2.data)) g2.WindVaneRequest = true;
        else try {
          k(JSON.parse(f2.data)) ? g2.WindVaneRequest = true : g2.H5Request = true;
        } catch (h2) {
          g2.H5Request = true;
        }
        else g2.H5Request = true;
        "AMAP" !== w.AliAppName || f2.useNebulaJSbridgeWithAMAP || (g2.WindVaneRequest = g2.H5Request = void 0, g2.H5Request = true);
      }
      window.self !== window.top && (c(v.DOWNGRADE_BY_IFRAME, "[@ali/lib-mtop] The current page is embedded in an iframe, cannot use WindVane request, automatically downgraded to H5 request"), g2.H5Request = true);
    }
    var i2 = a.navigator.userAgent.toLowerCase();
    return i2.indexOf("youku") > -1 && g2.mainDomain.indexOf("youku.com") < 0 && (g2.WindVaneRequest = false, g2.H5Request = true), g2.mainDomain.indexOf("youku.com") > -1 && i2.indexOf("youku") < 0 && (g2.WindVaneRequest = false, g2.H5Request = true), d2 ? d2().then(function() {
      var a2 = g2.retJson.ret;
      if (a2 instanceof Array && (a2 = a2.join(",")), g2.WindVaneRequest === true && B && g2.retJson.error || !a2 || a2.indexOf("PARAM_PARSE_ERROR") > -1 || a2.indexOf("HY_FAILED") > -1 || a2.indexOf("HY_NO_HANDLER") > -1 || a2.indexOf("HY_CLOSED") > -1 || a2.indexOf("HY_EXCEPTION") > -1 || a2.indexOf("HY_NO_PERMISSION") > -1) {
        if (!B || !isNaN(g2.retJson.error) || -1 !== g2.retJson.error.indexOf("FAIL_SYS_ACCESS_DENIED")) return B && k(f2.data) && (f2.data = JSON.stringify(f2.data)), w.H5Request = true, e2.__sequence([e2.__processRequestType, e2.__processToken, e2.__processRequestUrl, e2.middlewares, e2.__processRequest]);
        "undefined" == typeof g2.retJson.api && "undefined" == typeof g2.retJson.v && (g2.retJson.api = f2.api, g2.retJson.v = f2.v, g2.retJson.ret = [g2.retJson.error + "::" + g2.retJson.errorMessage], g2.retJson.data = {});
      }
    }) : void 0;
  };
  var E = "_m_h5_c", F = "_m_h5_tk", G = "_m_h5_tk_enc";
  r.prototype.__getTokenFromAlipay = function() {
    var b2 = d(), c2 = this.options, e2 = (a.navigator.userAgent, !!location.protocol.match(/^https?\:$/));
    return c2.useAlipayJSBridge === true && !e2 && B && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function(a2) {
      a2 && a2.token && (c2.token = a2.token), b2.resolve();
    }, function() {
      b2.resolve();
    }) : b2.resolve(), b2.promise;
  }, r.prototype.__getTokenFromCookie = function() {
    var a2 = this.options;
    return a2.CDR && m(E) ? a2.token = m(E).split(";")[0] : a2.token = a2.token || m(F), a2.token && (a2.token = a2.token.split("_")[0]), s.resolve();
  }, r.prototype.__waitWKWebViewCookie = function(b2) {
    var c2 = this.options;
    c2.waitWKWebViewCookieFn && c2.H5Request && a.webkit && a.webkit.messageHandlers ? c2.waitWKWebViewCookieFn(b2) : b2();
  }, r.prototype.__processToken = function(a2) {
    var b2 = this, c2 = this.options;
    this.params;
    return c2.token && delete c2.token, c2.WindVaneRequest !== true ? t.then(function() {
      return b2.__getTokenFromAlipay();
    }).then(function() {
      return b2.__getTokenFromCookie();
    }).then(a2).then(function() {
      var a3 = c2.retJson, d2 = a3.ret;
      if (d2 instanceof Array && (d2 = d2.join(",")), d2.indexOf("TOKEN_EMPTY") > -1 || (c2.CDR === true || c2.syncCookieMode === true) && d2.indexOf("ILLEGAL_ACCESS") > -1 || d2.indexOf("TOKEN_EXOIRED") > -1) {
        if (c2.maxRetryTimes = c2.maxRetryTimes || 5, c2.failTimes = c2.failTimes || 0, c2.H5Request && ++c2.failTimes < c2.maxRetryTimes) {
          var e2 = [b2.__waitWKWebViewCookie, b2.__processToken, b2.__processRequestUrl, b2.middlewares, b2.__processRequest];
          if (c2.syncCookieMode === true && b2.constructor.__cookieProcessorId !== b2.id) if (b2.constructor.__cookieProcessor) {
            var f2 = function(a4) {
              var c3 = function() {
                b2.constructor.__cookieProcessor = null, b2.constructor.__cookieProcessorId = null, a4();
              };
              b2.constructor.__cookieProcessor ? b2.constructor.__cookieProcessor.then(c3)["catch"](c3) : a4();
            };
            e2 = [f2, b2.__waitWKWebViewCookie, b2.__processToken, b2.__processRequestUrl, b2.middlewares, b2.__processRequest];
          } else b2.constructor.__cookieProcessor = b2.__requestProcessor, b2.constructor.__cookieProcessorId = b2.id;
          return b2.__sequence(e2);
        }
        c2.maxRetryTimes > 0 && (n(E, c2.pageDomain, "*"), n(F, c2.mainDomain, c2.subDomain), n(G, c2.mainDomain, c2.subDomain)), a3.retType = y.TOKEN_EXPIRED;
      }
    }) : void a2();
  }, r.prototype.__processRequestUrl = function(b2) {
    var c2 = this.params, d2 = this.options;
    if (d2.hostSetting && d2.hostSetting[a.location.hostname]) {
      var e2 = d2.hostSetting[a.location.hostname];
      e2.prefix && (d2.prefix = e2.prefix), e2.subDomain && (d2.subDomain = e2.subDomain), e2.mainDomain && (d2.mainDomain = e2.mainDomain);
    }
    if (d2.H5Request === true) {
      var f2 = "//" + (d2.prefix ? d2.prefix + "." : "") + (d2.subDomain ? d2.subDomain + "." : "") + d2.mainDomain + "/h5/" + c2.api.toLowerCase() + "/" + c2.v.toLowerCase() + "/", h2 = c2.appKey || ("waptest" === d2.subDomain ? "4272" : "12574478"), i2 = (/* @__PURE__ */ new Date()).getTime(), k2 = j(d2.token + "&" + i2 + "&" + h2 + "&" + c2.data), l2 = { jsv: D, appKey: h2, t: i2, sign: k2 };
      d2.bxOption && Object.keys(d2.bxOption).forEach(function(a2) {
        l2["_" + a2] = d2.bxOption[a2];
      });
      var m2 = { data: c2.data, ua: c2.ua };
      Object.keys(c2).forEach(function(a2) {
        "undefined" == typeof l2[a2] && "undefined" == typeof m2[a2] && "headers" !== a2 && "ext_headers" !== a2 && "ext_querys" !== a2 && (l2[a2] = c2[a2]);
      }), c2.ext_querys && Object.keys(c2.ext_querys).forEach(function(a2) {
        l2[a2] = c2.ext_querys[a2];
      }), d2.getJSONP ? l2.type = "jsonp" : d2.getOriginalJSONP ? l2.type = "originaljsonp" : (d2.getJSON || d2.postJSON) && (l2.type = "originaljson"), "undefined" != typeof c2.valueType && ("original" === c2.valueType ? d2.getJSONP || d2.getOriginalJSONP ? l2.type = "originaljsonp" : (d2.getJSON || d2.postJSON) && (l2.type = "originaljson") : "string" === c2.valueType && (d2.getJSONP || d2.getOriginalJSONP ? l2.type = "jsonp" : (d2.getJSON || d2.postJSON) && (l2.type = "json"))), d2.useJsonpResultType === true && "originaljson" === l2.type && delete l2.type, d2.dangerouslySetProtocol && (f2 = d2.dangerouslySetProtocol + ":" + f2), "5.0" === c2.SV && (f2 += "5.0/", g()), d2.querystring = l2, d2.postdata = m2, d2.path = f2;
    }
    b2();
  }, r.prototype.__processUnitPrefix = function(a2) {
    a2();
  };
  var H = 0;
  r.prototype.__requestJSONP = function(a2) {
    function b2(a3) {
      if (k2 && clearTimeout(k2), l2.parentNode && l2.parentNode.removeChild(l2), "TIMEOUT" === a3) window[j2] = function() {
        window[j2] = void 0;
        try {
          delete window[j2];
        } catch (a4) {
        }
      };
      else {
        window[j2] = void 0;
        try {
          delete window[j2];
        } catch (b3) {
        }
      }
    }
    var c2 = d(), e2 = this.params, g2 = this.options, i2 = e2.timeout || 2e4, j2 = "mtopjsonp" + (e2.jsonpIncPrefix || "") + ++H, k2 = setTimeout(function() {
      a2(g2.timeoutErrMsg || "TIMEOUT::\u63A5\u53E3\u8D85\u65F6"), b2("TIMEOUT");
    }, i2);
    g2.querystring.callback = j2;
    var l2 = document.createElement("script"), m2 = g2.path + "?" + h(g2.querystring) + "&" + h(g2.postdata);
    return "5.0" === e2.SV && window.etSign && (m2 += "&bx_et=" + window.etSign(m2)), l2.src = m2, l2.async = true, l2.onerror = function() {
      b2("ABORT"), a2(g2.abortErrMsg || "ABORT::\u63A5\u53E3\u5F02\u5E38\u9000\u51FA");
    }, window[j2] = function() {
      g2.results = Array.prototype.slice.call(arguments), b2(), c2.resolve();
    }, f(l2), c2.promise;
  }, r.prototype.__requestJSON = function(b2) {
    function c2(a2) {
      k2 && clearTimeout(k2), "TIMEOUT" === a2 && i2.abort();
    }
    var e2 = d(), f2 = this.params, g2 = this.options, i2 = new a.XMLHttpRequest(), j2 = f2.timeout || 2e4, k2 = setTimeout(function() {
      b2(g2.timeoutErrMsg || "TIMEOUT::\u63A5\u53E3\u8D85\u65F6"), c2("TIMEOUT");
    }, j2);
    g2.CDR && m(E) && (g2.querystring.c = decodeURIComponent(m(E))), i2.onreadystatechange = function() {
      if (4 == i2.readyState) {
        var a2, d2, f3 = i2.status;
        if (f3 >= 200 && 300 > f3 || 304 == f3) {
          c2(), a2 = i2.responseText, d2 = i2.getAllResponseHeaders() || "";
          try {
            a2 = /^\s*$/.test(a2) ? {} : JSON.parse(a2), a2.responseHeaders = d2, g2.results = [a2], e2.resolve();
          } catch (h2) {
            b2("PARSE_JSON_ERROR::\u89E3\u6790JSON\u5931\u8D25");
          }
        } else c2("ABORT"), b2(g2.abortErrMsg || "ABORT::\u63A5\u53E3\u5F02\u5E38\u9000\u51FA");
      }
    };
    var l2, n2, o2 = g2.path + "?" + h(g2.querystring);
    g2.getJSON ? (l2 = "GET", o2 += "&" + h(g2.postdata)) : g2.postJSON && (l2 = "POST", n2 = h(g2.postdata)), "5.0" === f2.SV && window.etSign && (o2 += "&bx_et=" + window.etSign(o2)), i2.open(l2, o2, true), i2.withCredentials = true, i2.setRequestHeader("Accept", "application/json"), i2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var p2 = f2.ext_headers || f2.headers;
    if (p2) for (var q2 in p2) i2.setRequestHeader(q2, p2[q2]);
    return i2.send(n2), e2.promise;
  }, r.prototype.__requestWindVane = function(a2) {
    function c2(a3) {
      if (g2.results = [a3], a3 && a3.stat && a3.stat.falcoId) {
        var c3 = function() {
        }, d2 = { mtopStart: u2, mtopEnd: Date.now(), falcoId: a3.stat.falcoId };
        b.windvane.call(w2, "falcoExtend", d2, c3, c3);
      }
      e2.resolve();
    }
    var e2 = d(), f2 = this.params, g2 = this.options, h2 = f2.data, i2 = f2.api, j2 = f2.v, k2 = g2.postJSON ? 1 : 0, l2 = g2.getJSON || g2.postJSON || g2.getOriginalJSONP ? "originaljson" : "";
    "undefined" != typeof f2.valueType && ("original" === f2.valueType ? l2 = "originaljson" : "string" === f2.valueType && (l2 = "")), g2.useJsonpResultType === true && (l2 = "");
    var m2, n2, o2 = "https" === location.protocol ? 1 : 0, p2 = f2.isSec || 0, q2 = f2.sessionOption || "AutoLoginOnly", r2 = f2.ecode || 0, s2 = f2.ext_headers || {}, t2 = f2.ext_querys || {};
    n2 = "undefined" != typeof f2.timer ? parseInt(f2.timer) : "undefined" != typeof f2.timeout ? parseInt(f2.timeout) : 2e4, m2 = 2 * n2;
    var u2 = Date.now();
    f2.needLogin === true && "undefined" == typeof f2.sessionOption && (q2 = "AutoLoginAndManualLogin"), "undefined" != typeof f2.secType && "undefined" == typeof f2.isSec && (p2 = f2.secType);
    var v2 = { api: i2, v: j2, post: String(k2), type: l2, isHttps: String(o2), ecode: String(r2), isSec: String(p2), param: JSON.parse(h2), timer: n2, needLogin: !!f2.needLogin, sessionOption: q2, ext_headers: s2, ext_querys: t2 };
    f2.ttid && g2.dangerouslySetWVTtid === true && (v2.ttid = f2.ttid), Object.assign && f2.dangerouslySetWindvaneParams && Object.assign(v2, f2.dangerouslySetWindvaneParams);
    var w2 = "MtopWVPlugin";
    return "string" == typeof f2.customWindVaneClassName && (w2 = f2.customWindVaneClassName), b.windvane.call(w2, "send", v2, c2, c2, m2), e2.promise;
  }, r.prototype.__requestAlipay = function(b2) {
    function c2(a2) {
      g2.results = [a2], e2.resolve();
    }
    var e2 = d(), f2 = this.params, g2 = this.options, h2 = { apiName: f2.api, apiVersion: f2.v, needEcodeSign: "1" === String(f2.ecode), headers: f2.ext_headers || {}, usePost: !!g2.postJSON };
    k(f2.data) || (f2.data = JSON.parse(f2.data)), h2.data = f2.data, f2.ttid && g2.dangerouslySetWVTtid === true && (h2.ttid = f2.ttid), (g2.getJSON || g2.postJSON || g2.getOriginalJSONP) && (h2.type = "originaljson"), "undefined" != typeof f2.valueType && ("original" === f2.valueType ? h2.type = "originaljson" : "string" === f2.valueType && delete h2.type), g2.useJsonpResultType === true && delete h2.type, Object.assign && f2.dangerouslySetAlipayParams && Object.assign(h2, f2.dangerouslySetAlipayParams);
    var i2 = "mtop";
    return "string" == typeof f2.customAlipayJSBridgeApi && (i2 = f2.customAlipayJSBridgeApi), a.AlipayJSBridge.call(i2, h2, c2), e2.promise;
  }, r.prototype.__processRequest = function(a2, b2) {
    var c2 = this;
    return t.then(function() {
      var a3 = c2.options;
      if (a3.H5Request && (a3.getJSONP || a3.getOriginalJSONP)) return c2.__requestJSONP(b2);
      if (a3.H5Request && (a3.getJSON || a3.postJSON)) return c2.__requestJSON(b2);
      if (a3.WindVaneRequest) return B ? c2.__requestAlipay(b2) : c2.__requestWindVane(b2);
      throw new Error("UNEXCEPT_REQUEST::\u9519\u8BEF\u7684\u8BF7\u6C42\u7C7B\u578B");
    }).then(a2).then(function() {
      var a3 = c2.options, b3 = (c2.params, a3.results[0]), d2 = b3 && b3.ret || [];
      b3.ret = d2, d2 instanceof Array && (d2 = d2.join(","));
      var e2 = b3.c;
      a3.CDR && e2 && l(E, e2, { domain: a3.pageDomain, path: "/", secure: a3.secure, sameSite: a3.sameSite }), d2.indexOf("SUCCESS") > -1 ? b3.retType = y.SUCCESS : b3.retType = y.ERROR, a3.retJson = b3;
    });
  }, r.prototype.__sequence = function(a2) {
    function b2(a3) {
      if (a3 instanceof Array) a3.forEach(b2);
      else {
        var g3, h3 = d(), i2 = d();
        e2.push(function() {
          return h3 = d(), g3 = a3.call(c2, function(a4) {
            return h3.resolve(a4), i2.promise;
          }, function(a4) {
            return h3.reject(a4), i2.promise;
          }), g3 && (g3 = g3["catch"](function(a4) {
            h3.reject(a4);
          })), h3.promise;
        }), f2.push(function(a4) {
          return i2.resolve(a4), g3;
        });
      }
    }
    var c2 = this, e2 = [], f2 = [];
    a2.forEach(b2);
    for (var g2, h2 = t; g2 = e2.shift(); ) h2 = h2.then(g2);
    for (; g2 = f2.pop(); ) h2 = h2.then(g2);
    return h2;
  };
  var I = function(a2) {
    if (!w.EtRequest) return void a2();
    if (window.etSign) return window.__etReady = true, void a2();
    if (window.__etReady) a2();
    else {
      g();
      var b2, c2, d2 = Number(w.EtLoadTimeout) || 5e3, e2 = false;
      window.etReady = function() {
        window.__etReady = true, e2 || (e2 = true, a2());
      };
      var f2 = function() {
        b2 && clearInterval(b2), c2 && clearTimeout(c2), e2 || (e2 = true, a2());
      };
      b2 = setInterval(function() {
        try {
          window.etSign && (window.__etReady = true, f2()), window.etReady && !window.__etReady && (window.etReady = function() {
            window.__etReady = true, f2();
          });
        } catch (a3) {
          f2();
        }
      }, 100), c2 = setTimeout(function() {
        f2();
      }, d2);
    }
  }, J = function(a2) {
    a2();
  };
  r.prototype.request = function(c2) {
    var d2 = this;
    if (this.options = e(c2 || {}, w), !s) {
      var f2 = "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Promise\uFF0C\u8BF7\u5728windows\u5BF9\u8C61\u4E0A\u6302\u8F7DPromise\u5BF9\u8C61";
      throw b.mtop = { ERROR: f2 }, new Error(f2);
    }
    var g2 = s.resolve([I, J]).then(function(a2) {
      var b2 = a2[0], c3 = a2[1];
      return d2.__sequence([b2, d2.__processRequestMethod, d2.__processRequestType, d2.__processToken, d2.__processRequestUrl, d2.middlewares, d2.__processRequest, c3]);
    }).then(function() {
      var a2 = d2.options.retJson;
      return a2.retType !== y.SUCCESS ? s.reject(a2) : d2.options.successCallback ? void d2.options.successCallback(a2) : s.resolve(a2);
    })["catch"](function(a2) {
      var c3;
      return a2 instanceof Error ? (console.error(a2.stack), c3 = { ret: [a2.message], stack: [a2.stack], retJson: y.ERROR }) : c3 = "string" == typeof a2 ? { ret: [a2], retJson: y.ERROR } : void 0 !== a2 ? a2 : d2.options.retJson, b.mtop.errorListener && b.mtop.errorListener({ api: d2.params.api, data: d2.params.data, v: d2.params.v, retJson: c3 }), d2.options.failureCallback ? void d2.options.failureCallback(c3) : s.reject(c3);
    });
    return this.__processRequestType(), d2.options.H5Request && (d2.constructor.__firstProcessor || (d2.constructor.__firstProcessor = g2), I = function(a2) {
      d2.constructor.__firstProcessor.then(a2)["catch"](a2);
    }), ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (c2.pageDomain = c2.pageDomain || i(a.location.hostname), c2.mainDomain !== c2.pageDomain && (c2.maxRetryTimes = 4, c2.CDR = true)), this.__requestProcessor = g2, g2;
  }, b.mtop = function(a2) {
    return new r(a2);
  }, b.mtop.request = function(a2, b2, c2) {
    var d2 = { H5Request: a2.H5Request, WindVaneRequest: a2.WindVaneRequest, LoginRequest: a2.LoginRequest, AntiCreep: a2.AntiCreep, AntiFlood: a2.AntiFlood, successCallback: b2, failureCallback: c2 || b2 };
    return new r(a2).request(d2);
  }, b.mtop.H5Request = function(a2, b2, c2) {
    var d2 = { H5Request: true, successCallback: b2, failureCallback: c2 || b2 };
    return new r(a2).request(d2);
  }, b.mtop.middlewares = x, b.mtop.config = w, b.mtop.RESPONSE_TYPE = y, b.mtop.CLASS = r;
})(window, window.lib || (window.lib = {})), (function(a, b) {
  function c(a2) {
    return a2.preventDefault(), false;
  }
  function d(a2) {
    var b2 = new RegExp("(?:^|;\\s*)" + a2 + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
    return b2 ? b2[1] : void 0;
  }
  function e(b2, d2, e2) {
    var f2 = navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone).*/i), g2 = f2 && d2.h5url ? d2.h5url : d2.url, h2 = d2.dialogSize;
    e2 = e2 || d2.attributes;
    var i2 = this, j2 = a.dpr || 1, k2 = document.createElement("div"), l2 = document.documentElement.getBoundingClientRect(), m = Math.max(l2.width, window.innerWidth) / j2, n = window.innerHeight / j2;
    k2.style.cssText = ["-webkit-transform:scale(" + j2 + ") translateZ(0)", "-ms-transform:scale(" + j2 + ") translateZ(0)", "transform:scale(" + j2 + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + m + "px", "height:" + n + "px", "z-index:2147483647", "position: fixed", "left:0", "top:0px", "background:" + (m > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");
    var o = document.createElement("div");
    o.style.cssText = ["width:100%", "height:52px", "background:transparent", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), o.innerText = b2;
    var p = document.createElement("img");
    p.style.cssText = ["display:block", "position:absolute", "margin-top:15px", "right:0", "top:0", "height:15px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), p.src = "https://gw.alicdn.com/tfs/TB1QZN.CYj1gK0jSZFuXXcrHpXa-200-200.png";
    var q = document.createElement("iframe");
    if (q.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), f2) o.appendChild(p), k2.appendChild(o);
    else {
      var r = h2 && h2.width || "420px", s = h2 && h2.height || "320px", t = 50, u = 50, v = 24, w = -39;
      s.indexOf("px") > -1 ? v -= Number(s.replace("px", "")) / 2 : s.indexOf("%") > -1 && (t -= Number(s.replace("%", "")) / 2), r.indexOf("px") > -1 ? w += Number(r.replace("px", "")) / 2 : r.indexOf("%") > -1 && (u += Number(r.replace("%", "")) / 2), p.style.cssText = ["position:absolute", "width:15px", "height:15px", "top:" + t + "%", "left:" + u + "%", "cursor: pointer", "border:0", "z-index:1", "overflow:hidden", "margin-top:" + v + "px", "margin-left:" + w + "px"].join(";"), k2.appendChild(p), q.style.cssText = ["position:absolute", "top:0px", "left:0px", "bottom:0px", "right:0px", "margin:auto", "width:" + r, "height:" + s, "border:0", "background:#FFF", "overflow:hidden", "border-radius:18px"].join(";"), e2 && e2.style && (q.style.cssText += e2.style, delete e2.style);
    }
    if (e2) try {
      e2.style && delete e2.style, Object.keys(e2).forEach(function(a2) {
        q.setAttribute(a2, e2[a2]);
      });
    } catch (x) {
    }
    k2.appendChild(q), k2.className = "J_MIDDLEWARE_FRAME_WIDGET", document.body.appendChild(k2), q.src = g2, p.addEventListener("click", function() {
      i2.hide();
      var a2 = document.createEvent("HTMLEvents");
      a2.initEvent("close", false, false), k2.dispatchEvent(a2);
    }, false), this.addEventListener = function() {
      k2.addEventListener.apply(k2, arguments);
    }, this.removeEventListener = function() {
      k2.removeEventListener.apply(k2, arguments);
    }, this.show = function() {
      document.addEventListener("touchmove", c, false), k2.style.display = "block", window.scrollTo(0, 0);
    }, this.hide = function() {
      document.removeEventListener("touchmove", c), window.scrollTo(0, -l2.top), k2.parentNode && k2.parentNode.removeChild(k2);
    };
  }
  function f(a2) {
    var c2 = this, d2 = this.options, e2 = this.params;
    return a2().then(function() {
      var a3 = d2.retJson, f2 = a3.ret, g2 = navigator.userAgent.toLowerCase(), h2 = g2.indexOf("safari") > -1 && g2.indexOf("chrome") < 0 && g2.indexOf("qqbrowser") < 0;
      if (f2 instanceof Array && (f2 = f2.join(",")), (f2.indexOf("SESSION_EXPIRED") > -1 || f2.indexOf("SID_INVALID") > -1 || f2.indexOf("AUTH_REJECT") > -1 || f2.indexOf("NEED_LOGIN") > -1) && (a3.retType = l.SESSION_EXPIRED, !d2.WindVaneRequest && (k.LoginRequest === true || d2.LoginRequest === true || e2.needLogin === true))) {
        if (!b.login) throw new Error("LOGIN_NOT_FOUND::\u7F3A\u5C11lib.login");
        var i2 = { apiReferer: e2.api + ":" + e2.v };
        if (d2.safariGoLogin !== true || !h2 || "taobao.com" === d2.pageDomain) return b.login.goLoginAsync(i2).then(function(a4) {
          return c2.__sequence([c2.__processToken, c2.__processRequestUrl, c2.__processUnitPrefix, c2.middlewares, c2.__processRequest]);
        })["catch"](function(a4) {
          throw "CANCEL" === a4 ? new Error("LOGIN_CANCEL::\u7528\u6237\u53D6\u6D88\u767B\u5F55") : new Error("LOGIN_FAILURE::\u7528\u6237\u767B\u5F55\u5931\u8D25");
        });
        b.login.goLogin(i2);
      }
    });
  }
  function g(a2) {
    var b2 = this.options;
    this.params;
    return b2.H5Request !== true || k.AntiFlood !== true && b2.AntiFlood !== true ? void a2() : a2().then(function() {
      var a3 = b2.retJson, c2 = a3.ret;
      c2 instanceof Array && (c2 = c2.join(",")), c2.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && a3.data.url && (b2.AntiFloodReferer ? location.href = a3.data.url.replace(/(http_referer=).+/, "$1" + b2.AntiFloodReferer) : location.href = a3.data.url);
    });
  }
  function h(b2) {
    var c2 = this, f2 = this.options, g2 = this.params;
    return f2.AntiCreep !== false && (f2.AntiCreep = true), g2.forceAntiCreep !== true && f2.H5Request !== true || k.AntiCreep !== true && f2.AntiCreep !== true ? void b2() : b2().then(function() {
      var b3 = f2.retJson, h2 = b3.ret;
      if (h2 instanceof Array && (h2 = h2.join(",")), h2.indexOf("CHECKJS_FLAG") > -1 && b3.uuid && b3.serid) {
        try {
          var j2 = !!window.document._sufei_data2, k2 = new Image(), l2 = "https://fourier.taobao.com/ts?ext=200&uuid=" + b3.uuid + "&serid=" + b3.serid + "&sufei=" + j2;
          window.location && location.href && (l2 += "&href==" + location.href.substr(0, 128)), window.__fyModule && (l2 += "&fyModuleLoad=" + window.__fyModule.load + "&fyModuleInit=" + window.__fyModule.init), window.__umModule && (l2 += "&umModuleLoad=" + window.__umModule.load + "&umModuleInit=" + window.__umModule.init), window.__uabModule && (l2 += "&uabModuleLoad=" + window.__uabModule.load + "&uabModuleInit=" + window.__uabModule.init), window.__ncModule && (l2 += "&ncModuleLoad=" + window.__ncModule.load + "&ncModuleInit=" + window.__ncModule.init), window.__nsModule && (l2 += "&nsModuleLoad=" + window.__nsModule.load + "&nsModuleInit=" + window.__nsModule.init), window.__etModule && (l2 += "&etModuleLoad=" + window.__etModule.load + "&etModuleInit=" + window.__etModule.init), k2.src = l2, document.body.appendChild(k2);
        } catch (m) {
          console.log(m, "\u4E0A\u62A5\u5F02\u5E38");
        }
        return c2.__sequence([c2.__processToken, c2.__processRequestUrl, c2.__processUnitPrefix, c2.middlewares, c2.__processRequest]);
      }
      if (h2.indexOf("RGV587_RUN_SCRIPT::SM") > -1) return new i(function(a2, d2) {
        try {
          var e2 = c2;
          e2.resend = function() {
            c2.__sequence([c2.__processToken, c2.__processRequestUrl, c2.__processUnitPrefix, c2.middlewares, c2.__processRequest]).then(a2);
          }, e2.resolve = a2, e2.reject = d2, e2.timer = setTimeout(function() {
            clearTimeout(e2.timer), e2.timer = null, e2.resend();
          }, 2e3);
          var f3 = document.createElement("script");
          f3.src = b3.data.url, f3.crossOrigin = true, f3.async = true, f3.onerror = function() {
            e2.resend();
          };
          var g3 = false;
          f3.onload = f3.onreadystatechange = function() {
            g3 || f3.readyState && !/loaded|complete/.test(f3.readyState) || (f3.onload = f3.onreadystatechange = null, g3 = true, window._bxPunishFun && "function" == typeof window._bxPunishFun && window._bxPunishFun(e2), b3.data.async || (clearTimeout(e2.timer), e2.timer = null, e2.resend()));
          };
          var h3 = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
          h3.appendChild(f3);
        } catch (i2) {
          d2("SCRIPT_RUN_ERROR::\u6267\u884C\u5931\u8D25");
        }
      });
      if ((h2.indexOf("RGV587_ERROR::SM") > -1 || h2.indexOf("ASSIST_FLAG") > -1) && b3.data.url) {
        if ("object" == typeof f2.bxOption && "new" === f2.bxOption["bx-" + b3.action]) {
          var n = b3.data.url + "&x5referer=" + encodeURIComponent(location.href);
          return location.href = n, new i(function() {
          });
        }
        var o = "_m_h5_smt", p = d(o), q = false;
        if (f2.saveAntiCreepToken === true && p) {
          p = JSON.parse(p);
          for (var r in p) g2[r] && (q = true);
        }
        if (f2.saveAntiCreepToken === true && p && !q) {
          for (var r in p) g2[r] = p[r];
          return c2.__sequence([c2.__processToken, c2.__processRequestUrl, c2.__processUnitPrefix, c2.middlewares, c2.__processRequest]);
        }
        return new i(function(d2, h3) {
          function i2() {
            k3.removeEventListener("close", i2), a.removeEventListener("message", j3), h3("USER_INPUT_CANCEL::\u7528\u6237\u53D6\u6D88\u8F93\u5165");
          }
          function j3(b4) {
            var e2;
            try {
              e2 = JSON.parse(b4.data) || {};
            } catch (l3) {
            }
            if (e2 && "child" === e2.type) {
              k3.removeEventListener("close", i2), a.removeEventListener("message", j3), k3.hide();
              var m;
              try {
                m = JSON.parse(decodeURIComponent(e2.content)), "string" == typeof m && (m = JSON.parse(m));
                for (var n2 in m) g2[n2] = m[n2];
                f2.saveAntiCreepToken === true ? (document.cookie = o + "=" + JSON.stringify(m) + ";", a.location.reload()) : c2.__sequence([c2.__processToken, c2.__processRequestUrl, c2.__processUnitPrefix, c2.middlewares, c2.__processRequest]).then(d2);
              } catch (l3) {
                h3("USER_INPUT_FAILURE::\u7528\u6237\u8F93\u5165\u5931\u8D25");
              }
            }
          }
          var k3 = new e("", b3.data, b3.attributes);
          k3.addEventListener("close", i2, false), a.addEventListener("message", j3, false), b3.data.dialogHide || k3.show();
        });
      }
    });
  }
  if (!b || !b.mtop || b.mtop.ERROR) throw new Error("Mtop \u521D\u59CB\u5316\u5931\u8D25\uFF01");
  var i = a.Promise, j = b.mtop.CLASS, k = b.mtop.config, l = b.mtop.RESPONSE_TYPE;
  b.mtop.middlewares.push(f), b.mtop.loginRequest = function(a2, b2, c2) {
    var d2 = { LoginRequest: true, H5Request: true, successCallback: b2, failureCallback: c2 || b2 };
    return new j(a2).request(d2);
  }, b.mtop.antiFloodRequest = function(a2, b2, c2) {
    var d2 = { AntiFlood: true, successCallback: b2, failureCallback: c2 || b2 };
    return new j(a2).request(d2);
  }, b.mtop.middlewares.push(g), b.mtop.antiCreepRequest = function(a2, b2, c2) {
    var d2 = { AntiCreep: true, successCallback: b2, failureCallback: c2 || b2 };
    return new j(a2).request(d2);
  }, b.mtop.middlewares.push(h);
})(window, window.lib || (window.lib = {}));
;
module.exports = window.lib["mtop"];


/***/ },

/***/ 92
(module) {

!(function(e, t) {
   true ? module.exports = t() : 0;
})(this, (function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = { i: r, l: false, exports: {} };
      return e[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
    }
    return n.m = e, n.c = t, n.d = function(e2, t2, r) {
      n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
    }, n.r = function(e2) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    }, n.t = function(e2, t2) {
      if (1 & t2 && (e2 = n(e2)), 8 & t2) return e2;
      if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule) return e2;
      var r = /* @__PURE__ */ Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2) for (var o in e2) n.d(r, o, function(t3) {
        return e2[t3];
      }.bind(null, o));
      return r;
    }, n.n = function(e2) {
      var t2 = e2 && e2.__esModule ? function() {
        return e2.default;
      } : function() {
        return e2;
      };
      return n.d(t2, "a", t2), t2;
    }, n.o = function(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }, n.p = "", n(n.s = 3);
  })([function(e, t) {
    e.exports = { sdk: { BID: "wpkreporter", CID: "jssdk", WID_KEY: "__wpkreporterwid_", WID_KEY2: "__itrace_wid" }, env: { BROWSER: "browser", NODEJS: "nodejs", WEEX: "weex" }, px: { signKey: "Uvn#08uefVdwe&c4", addr: { cn: "http://px.effirst.com/api/v1/jssdk/upload", cn_https: "https://px.effirst.com/api/v1/jssdk/upload", quark: "http://px.wpk.quark.cn/api/v1/jssdk/upload", quark_https: "https://px.wpk.quark.cn/api/v1/jssdk/upload", intl: "http://px-intl.ucweb.com/api/v1/jssdk/upload", intl_https: "https://px-intl.ucweb.com/api/v1/jssdk/upload", qg: "http://px-itrace.xuexi.cn/api/v1/jssdk/upload", qg_https: "https://px-itrace.xuexi.cn/api/v1/jssdk/upload" }, confAddr: { cn: "http://px.effirst.com/api/v1/jconfig", cn_https: "https://px.effirst.com/api/v1/jconfig", intl: "http://px-intl.ucweb.com/api/v1/jconfig", intl_https: "https://px-intl.ucweb.com/api/v1/jconfig", qg: "http://px-itrace.xuexi.cn/api/v1/jconfig", qg_https: "https://px-itrace.xuexi.cn/api/v1/jconfig", quark: "http://px.wpk.quark.cn/api/v1/jconfig", quark_https: "https://px.wpk.quark.cn/api/v1/jconfig" } }, http: { methods: { GET: "GET", PUT: "PUT", POST: "POST", HEAD: "HEAD", DELETE: "DELETE", OPTIONS: "OPTIONS", CONNECT: "OPTIONS", TRACE: "OPTIONS", PATCH: "OPTIONS" }, protocols: { HTTP: "http:", HTTPS: "https:" } }, category: { JSERR: 1, API: 2, JSFSPERF: 3, RESLOADFAIL: 4, FLOW: 5, BKPG: 6, HARLOG: 7, PERFNEXT: 1e3, MAINDOC: 1e5, RESTIMING: 100001 }, navConn: { types: { BLUETOOTH: "bluetooth", CELLULAR: "cellular", ETHERNET: "ethernet", MIXED: "mixed", NONE: "none", OTHER: "other", UNKNOWN: "unknown", WIFI: "wifi", WIMAX: "wimax" }, effectiveTypes: { "2G": "2g", "3G": "3g", "4G": "4g", SLOW2G: "slow-2g" } } };
  }, function(e, t, n) {
    var r = n(6), o = n(0), i = o.px, a = o.category;
    function s(e2) {
      if (!(this instanceof s)) return new s(e2);
      e2 = e2 || {}, this._init = false, this.toolKit = r(e2), this.logger = this.toolKit.logger, this.debug = e2.debug || false, true === e2.debug && this.logger.warn("[wpk] now in debug mode, you can see log details"), this._plugins = e2.plugins || [], this.bid = e2.bid, this.utdid = e2.utdid, this.cid = e2.cid, this.uid = e2.uid, this.rel = e2.rel, this.spa = e2.spa || false, this.delay = false !== e2.delay, this.sampleRate = e2.sampleRate, this.ignoreScriptError = false !== e2.ignoreScriptError, this.onlyCustom = e2.onlyCustomInUCCore || e2.onlyCustom || false, this.ignoreU4HA = true === e2.ignoreU4HA, this.beforeSend = e2.beforeSend || null, this.checkHidden = false !== e2.checkHidden, this.enableMtop = e2.enableMtop || false, this.prerender = true === e2.prerender, this.disableCookie = true === e2.disableCookie, this.supportBeaconBody = false !== e2.supportBeaconBody, this.blockAlipayMiniAppWebview = e2.blockAlipayMiniAppWebview || false, this.maxSessDuration = e2.maxSessDuration || 288e5, this._waitingQueue = [], this.useNativeCH = false !== e2.useNativeCH, !e2.cluster && this.toolKit.isQuark() ? this.cluster = "quark" : this.cluster = e2.cluster || "cn";
    }
    function c(e2) {
      if (e2.toolKit.inAlipayMiniAppWebview() && true === e2.blockAlipayMiniAppWebview) e2.logger.warn("current runtime is alipay miniapp webview, this request will be blocked.");
      else {
        var t2 = i.confAddr[e2.cluster + (e2.isHttps ? "_https" : "")], n2 = i.signKey;
        e2._startTime = Date.now(), e2._dying = true, e2.toolKit.dynamicConf(e2.bid, e2.VERSION, t2, n2, (function(t3) {
          e2._dying = false, e2._dyConf = t3, e2.logger.warn("jconfig come back");
        }));
      }
    }
    s.prototype = { VERSION: "1.2.9", initialize: function(e2) {
      this.env = e2.env, e2.root.location && -1 !== e2.root.location.search.indexOf("wpkReporterDebug=true") && (this.debug = true), this.send = e2.send, this.getWid = e2.getWid, this.isHttps = e2.isHttps, e2.bindUnloadEvent(this);
    }, ready: function() {
      return this._init;
    }, setConfig: function(e2) {
      return this.toolKit.isObject(e2) && this.toolKit.extend(this, e2), this;
    }, report: function(e2) {
      "string" == typeof e2 && (e2 = { category: a.JSERR, msg: e2 });
      var t2 = e2.sampleRate || this.sampleRate;
      if (t2 || 0 === t2 || (t2 = 1), this.toolKit.canReport(t2)) {
        if (this._cleanData(e2), this.ready()) {
          var n2;
          if ("function" == typeof this.beforeSend) {
            try {
              n2 = this.beforeSend(e2);
            } catch (e3) {
              this.logger.error("exec beforeSend failed for:", e3);
            }
            if (false === n2) return void this.logger.warn("beforeSend func return false");
            "object" == typeof n2 && (e2 = n2);
          }
          var r2 = this.toolKit.getMetas(), o2 = e2.bid || this.bid || r2.wpkBid, s2 = e2.cid || this.cid || r2.wpkCid, u = e2.rel || this.rel || r2.wpkRel;
          this.toolKit.isFunction(u) && (u = u());
          var l = e2.uid || this.uid;
          if (this.toolKit.isFunction(l) && (l = l()), l || (l = this.getWid()), Date.now() - this._begin >= this.maxSessDuration && (this._begin = Date.now(), this._sid = this.toolKit.getSessionId()), this.toolKit.extend(e2, { w_bid: o2, w_cid: s2, w_rel: u, w_spa: this.spa, w_tm: this.toolKit.timestamp(), w_cnt: 1, uid: l, utdid: this.utdid, type: this.toolKit.categoryToType(e2.category), sdk_ver: this.VERSION, log_src: "jssdk", uc_param: this.uc_param || "", wid: this.wid }), this._dyConf && Date.now() < this._dyConf.expireAt) {
            var p = void 0 !== this._dyConf[e2.type + "@" + e2.category] ? this._dyConf[e2.type + "@" + e2.category] : this._dyConf[e2.type];
            if (void 0 !== (p = void 0 !== p ? p : this._dyConf.all) && !this.toolKit.canReport(p)) return void this.logger.warn("\u7531\u4E8E\u300C\u52A8\u6001\u914D\u7F6E\u300D\u91C7\u6837\u7387\u63A7\u5236\uFF0C\u672C\u6761\u65E5\u5FD7\u6700\u7EC8\u672A\u4E0A\u62A5\uFF0C\u7C7B\u578B: ", e2.type, e2.category, " \u91C7\u6837\u7387: ", p);
          } else !this._dying && Date.now() - this._startTime >= 18e5 && (this.logger.warn("syncing dynamic config"), c(this));
          var d = { app: o2, cp: "none", de: 4, seq: this.toolKit.generateSeq(), tm: this.toolKit.timestamp(true), ud: encodeURIComponent(e2.uid), ver: e2.w_rel, type: e2.type, sver: e2.sdk_ver, sign: "9bf8a190ef82c5049df7b199c599c45b" }, f = i.addr[this.cluster + (this.isHttps ? "_https" : "")], g = this.toolKit.objToQueryString(d);
          this.toolKit.cutStr(e2, ["c1", "c2", "c3", "c4", "c5"], 128), this.send(f, g, e2);
        } else this._waitingQueue.push(e2), this.logger.warn("sdk\u672A\u5B8C\u6210\u521D\u59CB\u5316\uFF0C\u6570\u636E\u5DF2\u7F13\u5B58");
        return this;
      }
      this.logger.warn("\u7531\u4E8E\u91C7\u6837\u7387\u63A7\u5236\uFF0C\u672C\u6761\u65E5\u5FD7\u6700\u7EC8\u672A\u4E0A\u62A5\uFF0C\u91C7\u6837\u7387: ", t2);
    }, _cleanData: function(e2) {
      for (var t2, n2 = 1; n2 <= 10; n2++) t2 = "bl" + n2, e2.hasOwnProperty(t2) && (e2["w_" + t2] = e2[t2], delete e2[t2]);
      t2 = null;
    }, reportFlow: function(e2) {
      return e2 = e2 || {}, this.report(this.toolKit.extend(e2 || {}, { category: a.FLOW, sampleRate: 1 })), this;
    }, reportError: function(e2, t2) {
      return this.toolKit.isError(e2) ? ((t2 = t2 || {}).category = a.JSERR, t2.w_msg = e2.toString(), t2.stack = this.toolKit.parseErrorStack(e2), t2.w_file = e2.filename || "", t2.w_line = e2.lineno || "", t2.w_col = e2.colno || "", this.report(t2), this) : this.report(e2, t2);
    }, reportApi: function(e2, t2) {
      this.reportApiError(e2, t2);
    }, reportApiError: function(e2, t2) {
      return e2 && (this.toolKit.isObject(e2.queryString) && (e2.queryString = this.toolKit.objToQueryString(e2.queryString)), this.report(this.toolKit.extend(t2 || {}, { msg: e2.msg || "", w_res: e2.url, w_method: e2.method, w_param: e2.queryString, w_body: JSON.stringify(e2.body), w_resp: e2.response, w_rc: e2.status, w_rt: e2.spent || 0, c1: e2.c1, c2: e2.c2, c3: e2.c3, c4: e2.c4, c5: e2.c5 }, { category: a.API, w_type: 16 }))), this;
    }, reportBlankPage: function(e2) {
      return (e2 = e2 || {}).hasOwnProperty("w_fp") || this.toolKit.extend(e2, { w_fp: 999 }), this.report(this.toolKit.extend(e2 || {}, { category: a.BKPG })), this;
    }, diagnose: function() {
      this.ready() ? this.bid ? (this.sampleRate || this.logger.warn("\u6CA1\u6709\u8BBE\u7F6E\u91C7\u6837\u7387\u53C2\u6570sampleRate\uFF0C\u5C06\u4F7F\u7528\u9ED8\u8BA4\u91C7\u6837\u7387"), this.report({ _diagnose: true })) : this.logger.warn("\u7F3A\u5C11bid\u53C2\u6570,\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u6B63\u786E\u8BBE\u7F6E") : this.logger.warn("wpkReporter\u5C1A\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u786E\u4FDD\u5DF2\u8C03\u7528 install \u65B9\u6CD5");
    }, addPlugin: function(e2, t2) {
      return this._plugins.push([e2, t2]), "function" == typeof e2 && this._init && e2.apply(this, [this, t2]), this;
    }, install: function() {
      var e2;
      c(this), this.toolKit.isCompassPrerender() && ((e2 = this).toolKit.onListen(document, "prerendercommit", (function() {
        e2.prerenderCommit();
      }), true), e2.toolKit.onListen(document, "touchstart", (function() {
        e2.prerenderCommit();
      }), true), this.prerender = true);
      for (var t2 = n(2), r2 = this._plugins.length, o2 = false, i2 = 0; i2 < r2; i2++) {
        var a2 = this._plugins[i2], s2 = a2[0], u = a2[1];
        s2.prototype.pluginId === t2.prototype.pluginId && (o2 = true), s2.apply(this, [this, u]);
      }
      return this.wid = this.getWid(), this._begin = Date.now(), this._sid = this.toolKit.getSessionId(), this._init = true, 0 !== r2 && o2 || (this.toolKit.logger.info("\u6CA1\u6709\u8BBE\u7F6EFlow\uFF0C\u5185\u7F6E\u5F00\u542F"), this.addPlugin(t2)), this.prerender && this.toolKit.logger.warn("\u9884\u6E32\u67D3\u73AF\u5883, \u767D\u5C4F\u3001\u6027\u80FD\u5C06\u5728\u4E0A\u5C4F\u540E\u5F00\u59CB\u68C0\u6D4B"), this;
    }, installAll: function() {
      var e2 = [[n(8), { resErr: true }], [n(9)], [n(10)], [n(2)], [n(11), { params: "prveosfrnwutsv" }]], t2 = this._plugins.length;
      if (0 === t2) this._plugins = e2;
      else {
        for (var r2 = [], o2 = e2.length, i2 = 0; i2 < o2; i2++) {
          for (var a2 = e2[i2], s2 = 0; s2 < t2; s2++) if (a2[0].prototype.pluginId === this._plugins[s2][0].prototype.pluginId) {
            a2 = this._plugins[s2];
            break;
          }
          r2.push(a2);
        }
        this._plugins = r2;
      }
      return this.install();
    }, uninstall: function() {
      return this._plugins = [], this._init = false, this;
    }, prerenderCommit: function() {
      if (this.__isPrerenderCommited) this.logger.warn("prerenderCommit can only call once.");
      else {
        this.__isPrerenderCommited = true, this.logger.info("prerender commit event");
        var e2 = new Event("wpkpageforeground");
        window.dispatchEvent(e2);
      }
    } }, e.exports = s;
  }, function(e, t, n) {
    var r = n(0).env, o = function(e2) {
      var t2;
      return (e2 ? (t2 = e2.replace(/^#\/?/, "")) && "string" == typeof t2 ? t2.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "" : "") || "[index]";
    }, i = function(e2, t2) {
      if (t2 = t2 || {}, e2.env === r.BROWSER && window) if (e2.toolKit.extend({ enable: true }, t2).enable) {
        e2.logger.info("wpkflowPlugin\u5DF2\u5F00\u542F");
        var i2, a, s = function() {
          e2.reportFlow();
        };
        e2.toolKit.isPageReady(e2.prerender) ? setTimeout(s, 0) : e2.toolKit.onPageReady(s, true, e2.prerender), e2.spa && (n(7)(), i2 = function(t3) {
          o(location.hash) && (e2._begin = Date.now(), e2._sid = e2.toolKit.getSessionId(), e2.reportFlow());
        }, a = function(t3) {
          o(t3.detail) && (e2._begin = Date.now(), e2._sid = e2.toolKit.getSessionId(), e2.reportFlow());
        }, e2.toolKit.onListen(window, "hashchange", i2), e2.toolKit.onListen(window, "historystatechange", a)), e2.toolKit.onListen(window, "beforeunload", (function() {
          e2.toolKit.offListen(window, "load"), e2.toolKit.offListen(window, "hashchange"), e2.toolKit.offListen(window, "historystatechange"), s = i2 = a = null;
        }));
      } else e2.logger.info("wpkflowPlugin\u5DF2\u5173\u95ED");
    };
    i.prototype.pluginId = "flow", e.exports = i;
  }, function(e, t, n) {
    (function(t2) {
      var r = "object" == typeof t2 && t2 + "" == "[object process]", o = "function" == typeof callNative || "function" == typeof nativeLog;
      e.exports = n(o ? 5 : r ? 13 : 16);
    }).call(this, n(4));
  }, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e2) {
      if (n === setTimeout) return setTimeout(e2, 0);
      if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e2, 0);
      try {
        return n(e2, 0);
      } catch (t2) {
        try {
          return n.call(null, e2, 0);
        } catch (t3) {
          return n.call(this, e2, 0);
        }
      }
    }
    !(function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e2) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e2) {
        r = a;
      }
    })();
    var c, u = [], l = false, p = -1;
    function d() {
      l && c && (l = false, c.length ? u = c.concat(u) : p = -1, u.length && f());
    }
    function f() {
      if (!l) {
        var e2 = s(d);
        l = true;
        for (var t2 = u.length; t2; ) {
          for (c = u, u = []; ++p < t2; ) c && c[p].run();
          p = -1, t2 = u.length;
        }
        c = null, l = false, (function(e3) {
          if (r === clearTimeout) return clearTimeout(e3);
          if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e3);
          try {
            r(e3);
          } catch (t3) {
            try {
              return r.call(null, e3);
            } catch (t4) {
              return r.call(this, e3);
            }
          }
        })(e2);
      }
    }
    function g(e2, t2) {
      this.fun = e2, this.array = t2;
    }
    function w() {
    }
    o.nextTick = function(e2) {
      var t2 = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
      u.push(new g(e2, t2)), 1 !== u.length || l || s(f);
    }, g.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = w, o.addListener = w, o.once = w, o.off = w, o.removeListener = w, o.removeAllListeners = w, o.emit = w, o.prependListener = w, o.prependOnceListener = w, o.listeners = function(e2) {
      return [];
    }, o.binding = function(e2) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function() {
      return "/";
    }, o.chdir = function(e2) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function() {
      return 0;
    };
  }, function(e, t, n) {
    var r = n(1), o = n(12);
    e.exports = function(e2) {
      var t2 = new r(e2);
      return t2.initialize(o), t2;
    };
  }, function(e, t) {
    var n = function(e2) {
      return e2 || "";
    }, r = function(e2) {
      var t2 = Date.now();
      "undefined" != typeof window && window.performance && "function" == typeof window.performance.now && (t2 += performance.now());
      var n2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e3) {
        var n3 = (t2 + 16 * Math.random()) % 16 | 0;
        return t2 = Math.floor(t2 / 16), ("x" === e3 ? n3 : 11 & n3).toString(16);
      }));
      return false === e2 ? n2.replace(/-/g, "") : n2;
    }, o = function(e2) {
      return "object" == typeof e2;
    }, i = function(e2) {
      var t2 = {}.toString.call(e2);
      return o(e2) && ("[object Error]" === t2 || "[object Exception]" === t2 || t2 instanceof Error);
    }, a = function(e2) {
      return "[object Array]" === {}.toString.call(e2);
    }, s = function(e2) {
      return "function" == typeof e2;
    }, c = function(e2) {
      return "string" == typeof e2;
    }, u = function(e2) {
      var t2 = +/* @__PURE__ */ new Date();
      return true === e2 && (t2 = Math.floor(t2 / 1e3)), t2;
    }, l = function(e2) {
      if (e2.stack) {
        var t2 = e2.stack.split("\n");
        return t2.shift(), t2.join("\n");
      }
      return "";
    }, p = function(e2) {
      var t2;
      switch (e2) {
        case 1:
          t2 = "jserr";
          break;
        case 2:
          t2 = "api";
          break;
        case 3:
          t2 = "jsfsperf";
          break;
        case 4:
          t2 = "resloadfail";
          break;
        case 5:
          t2 = "flow";
          break;
        case 6:
          t2 = "bkpg";
          break;
        case 7:
          t2 = "harlog";
          break;
        default:
          t2 = "jssdkidx";
      }
      return t2;
    }, d = function() {
      return Math.floor(+/* @__PURE__ */ new Date() / 1e3) + "" + Math.floor(1e4 * Math.random());
    }, f = function(e2) {
      var t2 = [];
      for (var n2 in e2) t2.push(n2 + "=" + e2[n2]);
      return t2.join("&");
    }, g = function(e2) {
      return JSON ? JSON.stringify(e2) : e2.toString();
    }, w = function() {
      if ("undefined" != typeof document && document.getElementsByTagName) for (var e2, t2, n2, r2, o2 = document.getElementsByTagName("meta"), i2 = o2.length, a2 = 0; a2 < i2; a2++) "wpk-bid" === (r2 = o2[a2]).name ? e2 = r2.content : "wpk-cid" === r2.name ? t2 = r2.content : "wpk-rel" === r2.name && (n2 = r2.content);
      return { wpkBid: e2 || null, wpkCid: t2 || null, wpkRel: n2 || null };
    }, h = function(e2) {
      return e2 && H() ? o(window) && window.prerenderCommitEvent && o(window.prerenderCommitEvent) && "prerendercommit" === window.prerenderCommitEvent.type : "complete" === document.readyState;
    }, v = function(e2, t2, n2) {
      m(window, n2 ? "wpkpageforeground" : "load", (function(r2) {
        n2 && "complete" !== document.readyState ? m(window, "load", e2, t2) : e2.call(this, r2);
      }), t2);
    }, m = function(e2, t2, n2, r2) {
      return e2.addEventListener ? e2.addEventListener(t2, (function o2(i2) {
        r2 && e2.removeEventListener(t2, o2, false), n2.call(this, i2);
      }), false) : e2.attachEvent && e2.attachEvent("on" + t2, (function o2(i2) {
        r2 && e2.detachEvent("on" + t2, o2), n2.call(this, i2);
      })), this;
    }, y = function(e2, t2, n2) {
      return n2 ? (e2.removeEventListener ? e2.removeEventListener(t2, n2) : e2.detachEvent && e2.detachEvent(t2, n2), this) : this;
    }, _ = function(e2) {
      return !!e2 && (0 !== e2 && (e2 >= 1 || "100%" === e2 || (/^\d+(\.\d+)?%$/.test(e2) ? Math.random() < parseFloat(e2) / 100 : e2 > 0 && e2 < 1 && Math.random() < e2)));
    }, b = "wpk-reporter", x = function(e2, t2) {
      var n2 = [].slice.call(t2);
      e2.apply(this, [b].concat(n2));
    }, E = function(e2) {
      var t2 = "";
      switch (e2.category) {
        case 1:
          t2 = [e2.category, e2.uid, e2.w_url, e2.w_ref, e2.w_msg || "", e2.w_line || "", e2.w_col || ""].join("");
          break;
        case 2:
          t2 = [e2.category, e2.uid, e2.w_res, e2.w_method, e2.w_rc].join("");
          break;
        case 4:
          t2 = [e2.category, e2.uid, e2.w_url, e2.w_ref, e2.w_res, e2.w_type].join("");
      }
      return t2;
    }, S = function(e2, t2) {
      e2 = e2 || false;
      try {
        if ("undefined" != typeof window && window.ucweb && window.ucweb.window || t2) {
          for (var n2 = (t2 || navigator.userAgent).split(" "), r2 = n2.length, o2 = false, i2 = false, a2 = 0; a2 < r2; a2++) if (-1 !== n2[a2].indexOf("UWS/")) {
            var s2 = n2[a2].split("/");
            i2 = k(s2[1], "2.13.2.37");
          } else -1 !== n2[a2].indexOf("AliApp(DingTalk/") && (o2 = true);
          return o2 ? i2 : e2;
        }
      } catch (e3) {
      }
      return false;
    }, k = function(e2, t2) {
      try {
        for (var n2, r2, o2 = e2.split("."), i2 = t2.split("."), a2 = o2.length, s2 = 0; s2 < a2; s2++) if ((n2 = parseInt(o2[s2])) !== (r2 = parseInt(i2[s2]))) return n2 > r2;
        return true;
      } catch (e3) {
      }
      return false;
    }, R = function(e2) {
      try {
        const t2 = "__wpktestingls__";
        return e2().setItem(t2, t2), e2().removeItem(t2), true;
      } catch (e3) {
        return false;
      }
    };
    function T() {
      return localStorage;
    }
    var O = { get: function(e2) {
      if (R(T)) {
        var t2 = T().getItem(e2);
        if (t2) {
          if (t2 = JSON.parse(t2), Date.now() < t2.expireAt) return t2;
          this.rm(e2);
        }
      }
      return null;
    }, set: function(e2, t2) {
      R(T) && e2 && t2 && (t2.expireAt = Date.now() + 18e5, T().setItem(e2, JSON.stringify(t2)));
    }, rm: function(e2) {
      R(T) && T().removeItem(e2);
    } };
    function C() {
      return sessionStorage;
    }
    var K = function() {
      var e2 = r();
      return R(C) && C().setItem("wpkreporter:frmid", e2), e2;
    }, I = function(e2, t2) {
      if (t2) {
        if (1 === t2.length) return e2 === t2[0];
        if (2 === t2.length) {
          var n2 = t2[0], r2 = t2[1];
          return n2 && !r2 ? o2(e2, n2) : n2 && r2 ? o2(e2, n2) && o2(r2, e2) : o2(r2, e2);
        }
        return false;
      }
      return true;
      function o2(e3, t3) {
        var n3 = e3.split("."), r3 = t3.split(".");
        return !(parseInt(n3[0]) < parseInt(r3[0])) && (parseInt(n3[0]) > parseInt(r3[0]) || !(parseInt(n3[1]) < parseInt(r3[1])) && (parseInt(n3[1]) > parseInt(r3[1]) || parseInt(n3[2]) >= parseInt(r3[2])));
      }
    }, j = function(e2, t2, n2, o2, i2) {
      var a2 = "wpkreporter:dynamicConf:" + e2, c2 = O.get(a2);
      if (c2) s(i2) && i2(c2);
      else {
        var l2 = { app: e2, tm: u(true), ud: r(), sver: t2, sign: "c41e43c828c16c16a6eb1c9c1e68e8ce" }, p2 = f(l2);
        !(function(e3, t3) {
          if ("undefined" == typeof XMLHttpRequest) t3();
          else {
            var n3 = new XMLHttpRequest();
            n3.onreadystatechange = function() {
              if (4 === n3.readyState) {
                var e4;
                if (200 === n3.status && n3.response) try {
                  var r2 = JSON.parse(n3.response);
                  0 === r2.code && (e4 = r2.config || []);
                } catch (e5) {
                }
                t3(e4);
              }
            };
            try {
              n3.open("GET", e3, true), n3.timeout = 3e3, n3.send();
            } catch (e4) {
            }
          }
        })(n2 + "?wpk-header=" + encodeURIComponent(p2), (function(e3) {
          if (c2 = {}, void 0 !== e3) {
            for (var n3 = e3.length, r2 = 0; r2 < n3; r2++) {
              var o3 = e3[r2], u2 = o3.sdkver;
              if (I(t2, u2)) {
                if (o3.common && void 0 !== o3.common.sampleRate && (c2.all = o3.common.sampleRate), o3.config) {
                  for (var l3, p3 = o3.config.length, d2 = 0; d2 < p3; d2++) if ((l3 = o3.config[d2]).type) {
                    if (l3.category_rate) for (var f2 in l3.category_rate) c2[l3.type + "@" + f2] = l3.category_rate[f2];
                    l3.sampleRate && (c2[l3.type] = l3.sampleRate);
                  }
                }
                break;
              }
            }
            O.set(a2, c2);
          }
          s(i2) && i2(c2);
        }));
      }
    }, A = function(e2, t2, n2) {
      for (var r2, o2 = t2.length, i2 = 0; i2 < o2; i2++) "string" == typeof (r2 = e2[t2[i2]]) ? e2[t2[i2]] = r2.substring(0, n2) : "object" == typeof r2 && (e2[t2[i2]] = String(r2));
    }, L = "undefined" != typeof navigator ? (navigator.userAgent || "").toLowerCase() : "", P = function() {
      return L.indexOf("ucbrowser/") > -1;
    }, q = function() {
      return L.indexOf("quark/") > -1;
    }, N = function() {
      var e2 = false;
      try {
        if ("undefined" != typeof navigator) {
          var t2 = -1 !== navigator.userAgent.indexOf("Alipay"), n2 = -1 !== navigator.userAgent.indexOf("MiniProgram"), r2 = -1 !== navigator.userAgent.indexOf("APXWebView");
          e2 = t2 && (n2 || r2);
        }
      } catch (e3) {
      }
      return e2;
    }, H = function() {
      if ("undefined" != typeof window && null !== window) {
        if (window.ucweb && window.ucweb.window && window.ucweb.window.performance && 3 === window.ucweb.window.performance.pt) return true;
        if (window.compass && window.compass.env && o(window.compass.env)) return window.compass.env.isPrerender;
      }
      return false;
    }, D = function(e2) {
      if (!e2) return 0;
      try {
        return "function" == typeof TextEncoder ? new TextEncoder().encode(e2).length : (function(e3) {
          for (var t2 = 0, n2 = 0, r2 = e3.length; n2 < r2; n2++) {
            const r3 = e3.charCodeAt(n2);
            t2 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 55296 ? 3 : r3 < 56320 ? 4 : 3;
          }
          return t2;
        })(e2);
      } catch (t2) {
        return e2.length;
      }
    };
    e.exports = function(e2) {
      return { noop: n, uuid: r, isError: i, isArray: a, isObject: o, isFunction: s, isString: c, cacheStore: O, getSessionId: K, logger: "undefined" != typeof console && o(console) && e2.debug ? { trace: function() {
        x(console.trace, arguments);
      }, debug: function() {
        x(console.debug, arguments);
      }, log: function() {
        x(console.log, arguments);
      }, info: function() {
        x(console.info, arguments);
      }, warn: function() {
        x(console.warn, arguments);
      }, error: function() {
        x(console.error, arguments);
      } } : { trace: n, debug: n, log: n, info: n, warn: n, error: n }, extend: function(e3) {
        for (var t2 = 1, n2 = arguments.length; t2 < n2; t2++) {
          var r2 = arguments[t2];
          for (var o2 in r2) Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
        }
        return e3;
      }, some: function(e3, t2) {
        if (!this.isArray(e3) || !this.isFunction(t2)) return false;
        for (var n2, r2 = e3.length, o2 = 0; o2 < r2; o2++) if (n2 = e3[o2], t2.call(this, n2)) return true;
        return false;
      }, filter: function(e3, t2) {
        var n2 = [];
        try {
          for (var r2 = 0, o2 = e3.length; r2 < o2; r2++) t2.call(this, e3[r2], r2, e3) && n2.push(e3[r2]);
          return n2;
        } catch (e4) {
        }
        return e3;
      }, forEach: function(e3, t2) {
        if (this.isArray(e3) && this.isFunction(t2)) for (var n2, r2 = e3.length, o2 = 0; o2 < r2; o2++) n2 = e3[o2], t2.call(this, n2, o2, e3);
      }, trim: function(e3) {
        if (this.isString(e3)) return e3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }, canReport: _, onListen: m, offListen: y, getMetas: w, timestamp: u, generateSeq: d, categoryToType: p, parseErrorStack: l, objToJsonString: g, objToQueryString: f, genContentHash: E, isU4HA: S, isUC: P, isQuark: q, cutStr: A, dynamicConf: j, inAlipayMiniAppWebview: N, isCompassPrerender: H, isPageReady: h, onPageReady: v, byteLength: D };
    };
  }, function(e, t) {
    var n = window.history || {}, r = window.document, o = function(e2, t2) {
      var n2;
      window.CustomEvent ? n2 = new CustomEvent(e2, { detail: t2 }) : ((n2 = r.createEvent("HTMLEvents")).initEvent(e2, false, true), n2.detail = t2), window.dispatchEvent(n2);
    }, i = function(e2) {
      return e2 && "string" == typeof e2 ? e2.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
    }, a = function(e2) {
      var t2 = n[e2];
      "function" == typeof t2 && (n[e2] = function(e3, r2, a2) {
        var s = location.href, c = t2.call(n, e3, r2, a2);
        if (!a2 || "string" != typeof a2) return c;
        if (a2 === s) return c;
        try {
          var u = s.split("#"), l = a2.split("#"), p = i(u[0]), d = i(l[0]), f = u[1] && u[1].replace(/^\/?(.*)/, "$1"), g = l[1] && l[1].replace(/^\/?(.*)/, "$1");
          p !== d ? o("historystatechange", d) : f !== g && o("historystatechange", g);
        } catch (e4) {
        }
        return c;
      }, n[e2].toString = e2 + "() { [native code] }");
    };
    e.exports = function() {
      a("pushState"), a("replaceState");
    };
  }, function(e, t, n) {
    var r, o, i = n(0), a = i.env, s = i.category, c = function(e2) {
      return "function" == typeof e2;
    }, u = {}, l = function(e2, t2, n2, r2) {
      e2.addEventListener ? e2.addEventListener(t2, n2, r2 || false) : (u["on" + t2] = function() {
        return n2.call(e2, window.event);
      }, e2.attachEvent("on" + t2, u["on" + t2]));
    }, p = function(e2, t2) {
      var n2 = e2.id ? "#" + e2.id : "", r2 = "";
      e2.className && "string" == typeof e2.className && (r2 = "." + e2.className.split(" ").join("."));
      var o2 = e2.tagName.toLowerCase();
      return e2.parentNode && e2.parentNode.tagName && t2 - 1 != 0 ? p(e2.parentNode, t2 - 1) + " > " + o2.toLowerCase() + n2 + r2 : o2 + n2 + r2;
    }, d = function(e2, t2, n2, i2, a2, u2) {
      if (r) try {
        r.call(this, t2, n2, i2, a2, u2);
      } catch (u3) {
      }
      if ("script error." === (t2 || "").toLowerCase()) {
        if (e2.ignoreScriptError || o.ignoreScriptError) return void e2.logger.warn("\u914D\u7F6E\u4E86ignoreScriptError\uFF0C\u672C\u6B21\u5F02\u5E38\u5C06\u4E0D\u4E0A\u62A5");
        t2 = "Script error", u2 = u2 || {};
      }
      if (!c(o.jsErrFilter) || o.jsErrFilter.call(this, event)) {
        if (null != u2) {
          var l2 = (u2.stack || "").split("\n");
          l2.shift();
          var p2 = { w_msg: t2, w_file: n2 || "", w_line: i2 || "", w_col: a2 || "", stack: l2.join("\n"), category: s.JSERR, sampleRate: o.jsErrSampleRate };
          e2.report(p2);
        }
      } else e2.logger.warn("jserrFilter \u8FD4\u56DEfalse\uFF0C\u672C\u6B21\u65E5\u5FD7\u5C06\u4E0D\u4E0A\u62A5, event: ", event);
    }, f = function(e2, t2) {
      var n2 = window;
      n2 && e2.env === a.BROWSER ? (e2.logger.info("wpkglobalerrorPlugin\u5DF2\u5F00\u542F"), false !== (o = e2.toolKit.extend({ jsErrSampleRate: 1, resErrSampleRate: 1 }, t2)).jsErr ? (r = n2.onerror, n2.onerror = function(t3, n3, r2, o2, i2) {
        d(e2, t3, n3, r2, o2, i2);
      }, l(n2, "unhandledrejection", (function(t3) {
        var n3 = t3.type;
        "string" == typeof t3.reason ? n3 = t3.reason : t3.reason && "object" == typeof t3.reason && t3.reason.message && (n3 = t3.reason.message), d(e2, n3, null, null, null, t3.reason || t3.type);
      }))) : e2.logger.warn("js\u5F02\u5E38\u76D1\u63A7\u5DF2\u5173\u95ED"), o.resErr ? l(n2, "error", (function(t3) {
        !(function(e3, t4) {
          if (!t4.target.tagName || t4.message || t4.filename || t4.lineno || t4.colno) e3.logger.warn("\u975E\u8D44\u6E90\u83B7\u53D6\u95EE\u9898\uFF0C\u8DF3\u51FA\u5904\u7406, event: ", t4);
          else if (!c(o.resErrFilter) || o.resErrFilter.call(this, t4)) {
            var n3 = t4.target.src || t4.target.href;
            n3 === window.location.href && (n3 = "EMPTY_SRC");
            var r2, i2 = (function(e4) {
              var t5 = -1;
              switch (e4.tagName.toLowerCase()) {
                case "img":
                  t5 = 1;
                  break;
                case "link":
                  e4.rel && "stylesheet" === e4.rel.toLowerCase() && (t5 = 2);
                  break;
                case "script":
                  t5 = 3;
                  break;
                case "video":
                  t5 = 11;
              }
              return t5;
            })(t4.target);
            11 === i2 && t4.target.error && (r2 = t4.target.error.code), e3.report({ category: s.RESLOADFAIL, sampleRate: o.resErrSampleRate, msg: n3 + " \u52A0\u8F7D\u5931\u8D25", w_res: n3, w_type: i2, w_err: r2, w_xpath: p(t4.target, 5) });
          } else e3.logger.warn("reserrFilter \u8FD4\u56DEfalse\uFF0C\u672C\u6B21\u65E5\u5FD7\u5C06\u4E0D\u4E0A\u62A5, event: ", t4);
        })(e2, t3);
      }), true) : e2.logger.warn("\u8D44\u6E90\u52A0\u8F7D\u5F02\u5E38\u76D1\u63A7\u5DF2\u5173\u95ED")) : e2.logger.warn("\u5168\u5C40\u9519\u8BEF\u76D1\u63A7\u63D2\u4EF6\u4E0D\u652F\u6301\u975E\u6D4F\u89C8\u5668\u73AF\u5883");
    };
    f.prototype.pluginId = "gerror", e.exports = f;
  }, function(e, t, n) {
    var r = n(0), o = r.sdk, i = r.http.methods, a = r.category, s = function(e2) {
      return e2 >= 200 && e2 <= 299;
    }, c = function(e2) {
      return -1 === e2.indexOf("//arms-retcode") && -1 === e2.indexOf("//retcode.taobao.com") && -1 === e2.indexOf("aliyuncs.com/r.png") && -1 === e2.indexOf("//mdap.alipay.com/loggw") && -1 === e2.indexOf("//wpk-gateway") && -1 === e2.indexOf("//px.wpk.quark.cn") && -1 === e2.indexOf("//px.ucweb.com") && -1 === e2.indexOf("//px.effirst.com") && -1 === e2.indexOf("//px-intl.ucweb.com") && -1 === e2.indexOf("//gm.mmstat.com/arms.1.1") && -1 === e2.indexOf("//gm.mmstat.com/arms.1.2") && -1 === e2.indexOf("//g.alicdn.com/alilog") && -1 === e2.indexOf("//log.m.sm.cn/0.gif");
    }, u = function(e2, t2) {
      if (e2.hasOwnProperty(t2)) return e2[t2];
    }, l = function(e2, t2, n2) {
      e2.toolKit.isObject(n2) && e2.toolKit.extend(t2, { c1: u(n2, "c1"), c2: u(n2, "c2"), c3: u(n2, "c3"), c4: u(n2, "c4"), c5: u(n2, "c5"), bl1: u(n2, "bl1"), bl2: u(n2, "bl2"), bl3: u(n2, "bl3"), bl4: u(n2, "bl4"), bl5: u(n2, "bl5") }), e2.report(t2);
    }, p = location.origin, d = function(e2) {
      return !e2 || (0 === e2.indexOf(p) || !/^(\/\/|http:|https:).*/.test(e2));
    };
    function f(e2, t2) {
      var n2 = null;
      try {
        var r2, o2, i2, a2 = e2.toolKit.trim(t2 || "").split(/[\r\n]+/);
        if (a2.length > 0) n2 = {}, e2.toolKit.forEach(a2, (function(e3) {
          r2 = e3.split(": "), o2 = r2.shift(), i2 = r2.join(": "), n2[o2] = i2;
        }));
      } catch (e3) {
      }
      return n2;
    }
    function g(e2) {
      try {
        if (!e2) return {};
        var t2 = {};
        return e2.forEach((function(e3, n2) {
          t2[n2] = e3;
        })), t2;
      } catch (e3) {
        return {};
      }
    }
    var w = function(e2, t2) {
      if (e2.env === r.env.BROWSER && window) {
        var n2 = { enable: true, sampleRate: 1, enableTrace: false, enableCorsTrace: function(e3) {
          return false;
        }, requestHeaders: { "x-wpk-reqid": function() {
          return e2.toolKit.uuid(false);
        }, "x-wpk-bid": function() {
          return e2.bid;
        } }, responseHeaders: ["x-eagleeye-id", "x-wpk-serverid"] }, u2 = e2.toolKit.extend(n2, t2);
        u2.enable ? (e2.logger.info("wpkinterfacePlugin\u5DF2\u5F00\u542F"), "XMLHttpRequest" in window && (function(e3, t3) {
          var n3 = window.XMLHttpRequest.prototype, r2 = n3.open;
          n3.open = function(n4, o2) {
            this.__reqCtx__ = { method: n4, url: o2 || "", start: Date.now() };
            var i2 = [].slice.call(arguments);
            r2.apply(this, i2);
            var a2 = this;
            t3.enableTrace && (d(o2) || t3.enableCorsTrace(o2)) && e3.toolKit.forEach(Object.getOwnPropertyNames(t3.requestHeaders), (function(e4) {
              var n5 = t3.requestHeaders[e4]();
              a2.setRequestHeader(e4, n5);
            }));
          };
          var u3 = n3.setRequestHeader;
          n3.setRequestHeader = function(e4, t4) {
            var n4 = [].slice.call(arguments);
            u3.apply(this, n4), this.__reqCtx__ && (this.__reqCtx__.headers || (this.__reqCtx__.headers = {}), this.__reqCtx__.headers[e4] = t4);
          };
          var p2 = n3.send;
          n3.send = function(n4) {
            var r3 = this;
            function u4() {
              if (r3.__reqCtx__ && 4 === r3.readyState) try {
                var u5 = Date.now(), p3 = (r3.responseURL || r3.__reqCtx__.url).split("?"), d3 = p3[0], g3 = p3[1] || "", w2 = "", h = r3.__reqCtx__.headers || {};
                r3.__reqCtx__.method.toUpperCase() !== i.GET && n4 && (w2 = JSON.stringify(n4));
                var v = f(e3, r3.getAllResponseHeaders()), m = String(r3.response), y = true, _ = {};
                "function" == typeof t3.errorFilter && (y = !!(_ = t3.errorFilter.call(this, { url: d3, status: r3.status, response: m, body: w2, queryString: g3, reqHeaders: h, resHeaders: v })), e3.logger.warn("api errorFilter\u6267\u884C\u7ED3\u679C\uFF1A", _)), m.length > 2048 && (m = "[response content too large]");
                var b = u5 - r3.__reqCtx__.start;
                if (y && b < 121e3 && c(d3)) {
                  var x = _.bizCode || r3.status, E = _.reqHeaders || h, S = _.resHeaders || v, k = { category: a.API, sampleRate: t3.sampleRate, w_res: d3, w_param: g3, w_body: s(x) || !t3.withBody ? "" : w2, w_method: r3.__reqCtx__.method, w_rc: x, w_rt: b, w_resp: s(x) || !t3.withResp ? "" : _.resp || m, w_hd: JSON.stringify(E), w_trace_reqid: E && E["x-wpk-reqid"] || void 0, w_rshd: JSON.stringify(S), w_trace_serverid: S && S["x-wpk-serverid"] || void 0, msg: _.msg || "", w_type: 16 };
                  l(e3, k, _);
                }
              } catch (t4) {
                e3.reportError(t4, { bid: o.BID, cid: o.CID, category: a.JSERR, sampleRate: 1 });
              }
            }
            if ("onreadystatechange" in r3 && "function" == typeof r3.onreadystatechange) {
              var d2 = r3.onreadystatechange;
              r3.onreadystatechange = function() {
                var e4 = [].slice.call(arguments);
                u4.apply(this, e4), d2.apply(this, e4);
              };
            } else r3.onreadystatechange = u4;
            var g2 = [].slice.call(arguments);
            return p2.apply(this, g2);
          };
        })(e2, u2), "fetch" in window && (function(e3, t3) {
          var n3 = function(e4) {
            var t4 = (e4 || "").split("?");
            return { apiAddr: t4[0], queryString: t4.length > 1 && t4[1] || "" };
          }, r2 = function(n4, r3, o2, i2, c2, u4, l2, p3, d2, f2, g2) {
            var w2 = e3.toolKit.isObject(p3) ? p3 : {}, h = w2.reqHeaders || u4, v = w2.resHeaders || l2;
            return { w_res: n4, w_param: r3, w_method: o2, w_rc: c2, w_rt: i2, w_hd: JSON.stringify(h), w_trace_reqid: h && h["x-wpk-reqid"] || void 0, w_rshd: JSON.stringify(v), w_trace_serverid: v && v["x-wpk-serverid"] || void 0, msg: w2.msg || d2 || "", w_body: s(c2) || !t3.withBody ? "" : f2, w_resp: s(c2) || !t3.withResp ? "" : w2.resp || g2 || "", category: a.API, sampleRate: t3.sampleRate, w_type: 17 };
          }, u3 = function(n4, r3, o2, i2, a2, s2, c2) {
            var u4 = {};
            return "function" == typeof t3.errorFilter && (u4 = t3.errorFilter.call(this, { url: n4, queryString: r3, status: o2, body: i2, response: a2, reqHeaders: s2, resHeaders: c2 }), e3.logger.warn("api errorFilter\u6267\u884C\u7ED3\u679C\uFF1A", u4)), u4;
          }, p2 = window.fetch;
          window.fetch = function() {
            var s2 = [].slice.call(arguments), f2 = i.GET;
            s2[1] && s2[1].method && (f2 = s2[1].method.toUpperCase());
            var w2, h = s2[0];
            w2 = "string" == typeof h ? h : h instanceof URL ? h.toString() : h.url || "", t3.enableTrace && (d(w2) || t3.enableCorsTrace(w2)) && (s2[1] ? void 0 === s2[1].headers && (s2[1].headers = {}) : s2[1] = { headers: {} }, e3.toolKit.forEach(Object.getOwnPropertyNames(t3.requestHeaders), (function(e4) {
              s2[1].headers[e4] = t3.requestHeaders[e4]();
            })));
            var v = Date.now(), m = "", y = null;
            return s2[1] && (y = s2[1].headers), f2 !== i.GET && s2[1] && s2[1].body && (m = JSON.stringify(s2[1].body)), p2.apply(this, s2).then((function(t4) {
              try {
                var i2 = Date.now(), p3 = n3(t4.url || s2[0]), d2 = p3.apiAddr, w3 = p3.queryString, h2 = t4.clone(), _ = g(h2.headers);
                h2.text().then((function(n4) {
                  n4 = n4 || "";
                  var o2 = u3.call(this, d2, w3, t4.status, m, n4, y, _), a2 = !!o2;
                  n4 = n4.length > 2048 ? "[response content too large]" : n4;
                  var s3 = i2 - v;
                  if (a2 && s3 < 121e3 && c(d2)) {
                    var p4 = o2.bizCode || t4.status, g2 = r2(d2, w3, f2, s3, p4, y, _, o2, void 0, m, n4);
                    l(e3, g2, o2);
                  }
                }));
              } catch (t5) {
                e3.reportError(t5, { bid: o.BID, cid: o.CID, category: a.JSERR, sampleRate: 1 });
              }
              return t4;
            })).catch((function(t4) {
              var o2 = n3(s2[0]), i2 = o2.apiAddr, a2 = o2.queryString, p3 = u3.call(this, i2, a2, -1, m, "", y, {}), d2 = !!p3, g2 = Date.now() - v;
              if (d2 && g2 < 121e3 && c(i2)) {
                var w3 = p3.bizCode || -1, h2 = r2(i2, a2, f2, g2, w3, y, {}, p3, t4.message, m, void 0);
                l(e3, h2, p3);
              }
              throw t4;
            }));
          };
        })(e2, u2), (e2.enableMtop || u2.enableMtop) && (e2.logger.info("use mtop"), (function(e3, t3) {
          window && window.lib.mtop && window.lib.mtop.middlewares && window.lib.mtop.middlewares.push((function(n3) {
            var r2 = this.params, i2 = this.options, u3 = Date.now();
            return n3().then((function() {
              try {
                if (i2.H5Request && (i2.getJSON || i2.postJSON)) return void e3.logger.debug("\u8BC6\u522B\u5230\u8BF7\u6C42\u4E3Axhr, api\u76D1\u63A7\u4EA4\u7531xhr\u7684\u65B9\u5F0F\u5904\u7406");
                var n4, p2 = i2.retJson || {}, d2 = Date.now() - u3, f2 = p2.code || 200, g2 = r2.type, w2 = r2.api, h = e3.toolKit.objToQueryString(i2.querystring), v = i2.postdata && i2.postdata.data ? e3.toolKit.objToJsonString(i2.postdata.data) : null, m = e3.toolKit.objToJsonString(p2.data || {}), y = p2.ret;
                y instanceof Array && (y = y.join(",")), -1 === y.indexOf("SUCCESS") && (n4 = y);
                var _ = true, b = {};
                if ("function" == typeof t3.errorFilter && (_ = !!(b = t3.errorFilter.call(this, { url: w2, status: f2, response: m, body: v, queryString: h, msg: n4 })), e3.logger.warn("api errorFilter\u6267\u884C\u7ED3\u679C\uFF1A", b)), _ && d2 < 121e3 && c(w2)) {
                  var x = b.bizCode || f2, E = { category: a.API, sampleRate: t3.sampleRate, w_res: w2, w_param: h, w_body: s(x) || !t3.withBody ? "" : v, w_method: g2, w_rc: x, w_rt: d2, w_resp: s(x) || !t3.withResp ? "" : b.resp || m, msg: b.msg || n4 || "", w_type: 100 };
                  l(e3, E, b);
                }
              } catch (t4) {
                e3.reportError(t4, { bid: o.BID, cid: o.CID, category: a.JSERR, sampleRate: 1 });
              }
            }));
          }));
        })(e2, u2))) : e2.logger.info("wpkinterfacePlugin\u5DF2\u5173\u95ED");
      }
    };
    w.prototype.pluginId = "api", e.exports = w;
  }, function(e, t, n) {
    var r, o = n(0).env, i = n(0).category, a = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint"], s = ["navigate", "reload", "back_forward"], c = function(e2) {
      var t2, n2;
      if (r && r.getEntriesByType) try {
        for (var o2 = r.getEntriesByType("paint"), i2 = 0; i2 < o2.length; i2++) {
          var s2 = o2[i2];
          "first-paint" === s2.name ? t2 = parseFloat(s2.startTime.toFixed(2)) : "first-contentful-paint" === s2.name && (n2 = parseFloat(s2.startTime.toFixed(2)));
        }
      } catch (e3) {
        console.error(e3);
      }
      var c2 = e2[a[13]] - e2[a[5]];
      return { w_n_rve: c2 ? parseFloat(c2.toFixed(2)) : c2, fpt: t2, fcp: n2 };
    }, u = function(e2, t2) {
      var n2, r2, o2, i2 = {}, s2 = e2._ver || 1;
      for (var c2 in t2) {
        o2 = 0, n2 = e2[a[t2[c2][0]]], r2 = e2[a[t2[c2][1]]], (2 === s2 ? n2 >= 0 : n2 > 0) && r2 > 0 && (o2 = parseFloat((r2 - n2).toFixed(2))), i2[c2] = o2;
      }
      return i2;
    }, l = function(e2, t2) {
      var n2 = window;
      if (r = n2.performance || n2.webkitPerformance || n2.msPerformance || n2.mozPerformance, e2.env === o.BROWSER && r && r.timing) {
        t2 = t2 || {};
        var a2 = e2.toolKit.extend({ enable: true, sampleRate: 1, collectResTiming: false, minLoadTiming: 3e3, maxLoadTiming: 8e3, minLoadSpr: 0.05, maxLoadSpr: 1 }, t2);
        if (a2.enable) {
          e2.logger.info("wpkperformancePlugin\u5DF2\u5F00\u542F");
          var l2 = r.timing || {}, p = 1;
          if ("function" == typeof n2.PerformanceNavigationTiming) try {
            var d = r.getEntriesByType("navigation")[0];
            d && (l2 = d, p = 2);
          } catch (e3) {
          }
          l2._ver = p;
          var f = function() {
            /loaded|complete/.test(document.readyState) && setTimeout((function() {
              var t3 = e2.toolKit.extend((function(e3) {
                return u(e3, { w_unload: [1, 2], w_redirect: [3, 4], w_appcache: [5, 6], w_dns: [6, 7], w_tcp: [8, 10], w_ssl: [9, 10], w_ttfb: [11, 12], w_contentdownload: [12, 13], w_domparsing: [13, 15], w_res: [17, 19] });
              })(l2), (function(e3) {
                var t4 = u(e3, { w_firstbyte: [5, 12], w_tti: [5, 15], w_domready: [5, 17], w_load: [5, 19], w_total: [5, 20] }), n4 = c(e3);
                return t4.w_n_rve = n4.w_n_rve, t4.wl_fcp = n4.fcp, t4.wl_fp = n4.fpt, t4;
              })(l2));
              for (var n3 in t3) if (t3[n3] < 0 || t3[n3] > 6e4) return void e2.logger.warn("\u6027\u80FD\u6570\u636E\u5F02\u5E38\uFF1A", n3, t3[n3]);
              var o2 = e2.toolKit.extend(t3, (function(e3) {
                var t4, n4 = r.navigation || {}, o3 = -1, i2 = -1, a3 = -1;
                return 1 === e3._ver ? t4 = s[n4.type] || "other" : 2 === e3._ver && (o3 = e3.encodedBodySize, i2 = e3.decodedBodySize, a3 = e3.transferSize, t4 = e3.type), { w_enbdsize: o3, w_debdsize: i2, w_transize: a3, w_navtype: t4 };
              })(l2), a2, { category: i.JSFSPERF });
              if (e2.report(o2), (a2.collectResTiming || e2.toolKit.isQuark() || e2.toolKit.isUC()) && !e2._hasCollectResTiming) {
                e2.logger.info("\u5DF2\u5F00\u542F\u6162\u6027\u80FDresource\u91C7\u96C6\u80FD\u529B");
                var p2 = 0;
                t3.w_load >= a2.minLoadTiming && t3.w_load <= a2.maxLoadTiming ? p2 = a2.minLoadSpr : t3.w_load > a2.maxLoadTiming && (p2 = a2.maxLoadSpr), p2 && r && "function" == typeof r.getEntriesByType && (e2.report({ category: i.RESTIMING, sampleRate: p2, bl1: JSON.stringify(r.getEntriesByType("resource")), bl2: r.timeOrigin || r.timing.fetchStart, _forcePost: true }), e2._hasCollectResTiming = true);
              }
            }));
          };
          e2.toolKit.isPageReady(e2.prerender) ? f() : e2.toolKit.onPageReady(f, true, e2.prerender);
        } else e2.logger.info("wpkperformancePlugin\u5DF2\u5173\u95ED");
      } else e2.logger.warn("\u57FA\u7840\u6027\u80FD\u63D2\u4EF6\u4EC5\u652F\u6301\u6D4F\u89C8\u5668\u73AF\u5883");
    };
    l.prototype.pluginId = "perf", e.exports = l;
  }, function(e, t, n) {
    var r = n(0).env, o = function(e2, t2) {
      if (t2 = t2 || {}, -1 !== [r.BROWSER, r.WEEX].indexOf(e2.env) && t2.params && "string" == typeof t2.params) {
        e2.logger.info("wpkucparamPlugin\u5DF2\u5F00\u542F");
        for (var n2 = t2.params, o2 = ["pr", "ve", "os", "fr", "nw", "ut", "sv"], i = 0; i < 5; i++) {
          var a = o2[i];
          -1 === n2.indexOf(a) && (n2 += a);
        }
        try {
          "undefined" != typeof ucapi && "function" == typeof ucapi.invoke && (e2.uc_param_str = n2, ucapi.invoke("biz.ucparams", { params: n2, success: function(t3) {
            e2.uc_param = t3 || "", e2.uc_param_str = "";
          }, fail: function(t3) {
            e2.logger.error("get uc_param_str error: ", t3);
          } }));
        } catch (t3) {
          e2.logger.error("get uc_param_str error: ", t3), e2.uc_param_str = n2;
        }
      }
    };
    o.prototype.pluginId = "ucparam", e.exports = o;
  }, function(e, t, n) {
    var r = n(0), o = "undefined" != typeof weex ? weex : {}, i = function() {
      var e2 = { wx_pf: WXEnvironment.platform, wx_ver: WXEnvironment.weexVersion, wx_app: WXEnvironment.appName, wx_app_ver: WXEnvironment.appVersion, wx_os: WXEnvironment.osName, wx_os_ver: WXEnvironment.osVersion, wx_dev_md: WXEnvironment.deviceModel, dsp_w: WXEnvironment.deviceWidth, dsp_h: WXEnvironment.deviceHeight };
      if (void 0 !== weex.config.uc) try {
        var t2 = JSON.parse(weex.config.uc.ucParams);
        e2.net = t2.nw, e2.wx_app = t2.pr, e2.wx_app_ver = t2.ve;
      } catch (e3) {
      }
      return "undefined" != typeof weex && weex.config && weex.config.bundleType && "Vue" !== weex.config.bundleType && "vue" !== weex.config.bundleType ? ("undefined" != typeof location ? e2.wx_bdl_url = location.href : e2.wx_bdl_url = "undefined" != typeof weex && weex.config ? weex.config.bundleUrl : "unknow", e2.wx_bdl_type = "Rax") : (e2.wx_bdl_url = weex.config.bundleUrl, e2.wx_bdl_type = "Vue"), e2.wx_bdl_name = (function(e3) {
        try {
          var t3 = e3.substring(e3.lastIndexOf("/") + 1);
          return -1 === t3.lastIndexOf(".") ? t3 : t3.substring(0, t3.lastIndexOf("."));
        } catch (e4) {
          return "";
        }
      })(e2.wx_bdl_url), e2;
    };
    e.exports = { env: r.env.WEEX, root: o, isHttps: false, send: function(e2, t2, n2) {
      var r2 = this.toolKit.extend(i(), n2, { w_frmid: this._sid });
      r2.fr = r2.wx_os, r2.rom = r2.wx_os_ver, r2.brand = r2.wx_dev_md, r2.model = r2.wx_dev_md, r2.browser = r2.wx_app, r2.bver = r2.wx_app_ver, r2.w_url = r2.wx_bdl_name, r2.w_send_mode = "weexfetch";
      var o2 = encodeURIComponent(t2), a = encodeURIComponent(this.toolKit.objToJsonString(r2));
      weex.requireModule("stream").fetch({ url: e2, method: "POST", headers: { "wpk-header": o2 }, body: a }, (function(e3, t3) {
      }));
    }, getWid: function() {
      return this.toolKit.uuid();
    }, bindUnloadEvent: function() {
    } };
  }, function(e, t, n) {
    var r = n(1), o = n(14);
    e.exports = function(e2) {
      var t2 = new r(e2);
      return t2.initialize(o), t2;
    };
  }, function(e, t, n) {
    (function(t2) {
      var r = n(0), o = t2;
      e.exports = { env: r.env.NODEJS, root: o, send: function(e2, t3, n2) {
      } };
    }).call(this, n(15));
  }, function(e, t) {
    var n;
    n = /* @__PURE__ */ (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e2) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  }, function(e, t, n) {
    var r = n(1), o = n(17);
    e.exports = function(e2) {
      var t2 = new r(e2);
      return t2.initialize(o), t2;
    };
  }, function(e, t, n) {
    var r, o = n(0), i = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, a = i.document, s = i.navigator, c = i.location, u = void 0 !== i.devicePixelRatio ? i.devicePixelRatio : 1, l = {}, p = null, d = null, f = function(e2, t2, n2, r2, o2) {
      if (void 0 === t2) {
        var i2, s2;
        if (!l[e2]) {
          i2 = new RegExp(e2 + "=([^;]+)");
          try {
            s2 = i2.exec(a.cookie);
          } catch (e3) {
            return null;
          }
          s2 && (l[e2] = s2[1]);
        }
        return l[e2];
      }
      var c2 = e2 + "=" + t2;
      r2 && (c2 += "; domain=" + r2), o2 && (c2 += "; path=" + o2), n2 && (c2 += "; max-age=" + n2);
      try {
        return a.cookie = c2, !!a.cookie;
      } catch (e3) {
        return false;
      }
    }, g = function(e2, t2) {
      !(function(e3, t3, n2, r2) {
        void 0 !== window.ucapi && "function" == typeof window.ucapi.invoke ? (t3 && (t3.success = n2, t3.fail = r2), window.ucapi.invoke(e3, t3)) : r2 && r2("ucapi is not exist");
      })("webMonitor.reportWpkLog", e2, (function(e3) {
        t2.logger.warn("log reported success by jsapi", e3);
      }), (function(e3) {
        t2.logger.warn("log report failed by jsapi", e3);
      }));
    }, w = function(e2) {
      var t2 = window, n2 = "wpkimgreporter_" + +/* @__PURE__ */ new Date() + ".r" + Math.floor(1e3 * Math.random()), r2 = t2[n2] = new Image();
      r2.onload = r2.onerror = function() {
        t2[n2] = null;
      }, r2.src = e2;
    }, h = function(e2, t2, n2) {
      if ("function" == typeof XMLHttpRequest) {
        var r2 = new XMLHttpRequest();
        r2.open("POST", e2, true), r2.setRequestHeader("Content-Type", "text/plain"), r2.timeout = 5e3, r2.send(t2);
      } else n2.logger.info("xhr is not supported");
    }, v = function(e2, t2, n2) {
      s.sendBeacon(e2, t2) || (n2.logger.info("beacon send fail, retry by xhr"), h(e2, t2, n2));
    }, m = function(e2) {
      var t2, n2 = e2._waitingQueue;
      if (e2.checkHidden && a && a.hidden) return e2.logger.warn("\u5F53\u524D\u9875\u9762\u4E0D\u53EF\u89C1\uFF0C\u65E5\u5FD7\u6570\u636E\u5C06\u4E22\u5F03: ", n2), void (e2._waitingQueue = []);
      null === p && (t2 = (navigator ? navigator.userAgent : "").toLowerCase(), p = t2.indexOf("windvane") > -1 && /(iphone|ipad|ipod|ios)/i.test(t2)), null === d && (d = e2.useNativeCH && (function(e3) {
        try {
          return "undefined" != typeof window && void 0 !== window.nativeWpkReport && 1 === (window.nativeWpkReport || {})[e3];
        } catch (e4) {
          return false;
        }
      })("enablePerformanceReport"));
      var r2 = s && s.sendBeacon && i.Blob, o2 = e2.supportBeaconBody && !p;
      if (d) {
        for (var c2 = 0; c2 < n2.length; c2++) try {
          var u2 = n2[c2];
          u2.w_send_mode = "jsapi", u2._servAddr = void 0, u2._hash = void 0, g({ type: u2.type, immediate: "jsfsperf" === u2.type ? 0 : 1, args: u2 }, e2);
        } catch (e3) {
        }
        e2._waitingQueue = [];
      } else if (r2 && o2) {
        var l2, f2, m2 = (function(e3) {
          for (var t3, n3, r3 = [], o3 = [], i2 = e3.length, a2 = 0; a2 < i2; a2++) n3 = e3[a2].category, -1 === o3.indexOf(n3) && o3.push(n3);
          t3 = o3.length;
          for (var s2 = 0; s2 < t3; s2++) {
            n3 = o3[s2];
            for (var c3 = [], u3 = 0; u3 < i2; u3++) {
              var l3 = e3[u3];
              l3.category === n3 && c3.push(l3);
            }
            r3[s2] = c3;
          }
          return r3;
        })(n2), y2 = m2.length;
        try {
          for (var _2, b2 = 0; b2 < y2; b2++) {
            f2 = (l2 = m2[b2]).length;
            for (var x = 0, E = [], S = 0; S < f2; S++) {
              _2 = l2[S]._servAddr, l2[S].w_send_mode = "sendbeacon", l2[S]._servAddr = void 0, l2[S]._hash = void 0, l2[S] = e2.toolKit.objToJsonString(l2[S]);
              var k = encodeURIComponent(l2[S]), R = e2.toolKit.byteLength(k);
              R > 6e4 ? (e2.logger.info("single log oversize 60k, send by xhr"), h(_2, k, e2)) : ((x += R) > 6e4 && (e2.logger.info("group log length is " + x + " oversize 60k, send now"), v(_2, encodeURIComponent(E.join("\n")), e2), E.splice(0, E.length), x = R), E.push(l2[S]));
            }
            E.length > 0 && v(_2, encodeURIComponent(E.join("\n")), e2);
          }
          e2._waitingQueue = [];
        } catch (e3) {
        }
      } else {
        for (var T, O, C, K = 0; K < n2.length; K++) {
          O = (T = n2[K])._servAddr, C = T._forcePost, T.w_send_mode = C ? "fetch" : r2 ? "sendbeacon" : "imgsrc", T._servAddr = void 0, T._hash = void 0, T._forcePost = void 0, T = encodeURIComponent(e2.toolKit.objToJsonString(T));
          var I = e2.toolKit.byteLength(T);
          I > 7500 && (C = true, e2.logger.info("log len " + I + " oversize 7.5k, force post"));
          try {
            true === C ? (e2.logger.info("force post, send by xhr"), h(O, T, e2)) : r2 ? s.sendBeacon(O + "&data=" + T) : w(O + "&data=" + T);
          } catch (e3) {
          }
        }
        e2._waitingQueue = [];
      }
    }, y = null, _ = function(e2) {
      clearTimeout(y), y = null, m(e2);
    }, b = function(e2) {
      _(e2);
    };
    e.exports = { env: o.env.BROWSER, root: i, isHttps: c.protocol === o.http.protocols.HTTPS, send: function(e2, t2, n2) {
      var r2 = this;
      if (!r2.ignoreU4HA && r2.toolKit.isU4HA(r2.onlyCustom) && n2.category < 100 && (2 !== n2.category || 100 !== n2.w_type)) r2.logger.warn("\u5728u4\u5185\u6838\u73AF\u5883\uFF0C\u5C4F\u853D\u975E\u81EA\u5B9A\u4E49\u7684\u6240\u6709\u81EA\u52A8\u6253\u70B9");
      else if (r2.toolKit.inAlipayMiniAppWebview() && true === r2.blockAlipayMiniAppWebview) r2.logger.warn("current runtime is alipay miniapp webview, this request will be blocked.");
      else {
        var l2 = r2.toolKit.extend((function(e3) {
          if (!a) return {};
          var t3, n3 = a.referrer;
          return n3 && -1 !== n3.indexOf('"') && (n3 = encodeURIComponent(a.referrer)), { w_url: c.origin + c.pathname, w_query: c.search, w_ref: c.hash.substring(1), w_title: a.title, ua: s.userAgent, referrer: n3, dsp_dpi: u || 1, dsp_w: i.screen.width, dsp_h: i.screen.height, net: (t3 = s.connection, t3 && t3.type ? t3.type === o.navConn.types.NONE ? "disconnected" : t3.type === o.navConn.types.CELLULAR ? t3.effectiveType === o.navConn.effectiveTypes.SLOW2G ? "2g" : t3.effectiveType : t3.type : "") };
        })(r2.spa), n2, { w_frmid: r2._sid });
        if (r2.logger.warn("logData to send: ", e2, l2), e2 += "?wpk-header=" + encodeURIComponent(t2), r2.uc_param_str && (e2 += "&uc_param_str=" + r2.uc_param_str), true === n2._diagnose) return l2 = encodeURIComponent(r2.toolKit.objToJsonString(l2)), void window.open(e2 + "&data=" + l2);
        l2._servAddr = e2, l2._hash = r2.toolKit.genContentHash(l2);
        var p2, d2, f2 = r2.delay && -1 !== [1, 2, 4].indexOf(l2.category);
        if ((function(e3, t3) {
          var n3 = e3._waitingQueue, r3 = n3.length, o2 = t3.reduplication || e3.reduplication || true, i2 = true;
          if (1 === t3.category && o2 && 0 !== r3) {
            for (var a2, s2 = 0; s2 < r3; s2++) if ((a2 = n3[s2])._hash === t3._hash) {
              a2.w_cnt++, i2 = false;
              break;
            }
            i2 && n3.push(t3);
          } else n3.push(t3);
          return i2;
        })(r2, l2) || !f2) p2 = function() {
          _(r2);
        }, y = -1 === (d2 = f2 ? 3e3 : -1) ? (p2(), null) : setTimeout(p2, d2 || 0);
        else r2.logger.warn("logData\u88AB\u5408\u5E76: ", l2);
      }
    }, getWid: function() {
      var e2;
      return this.disableCookie ? (f(o.sdk.WID_KEY) && f(o.sdk.WID_KEY, "", -1), f(o.sdk.WID_KEY2) && f(o.sdk.WID_KEY2, "", -1), e2 = r) : e2 = f(o.sdk.WID_KEY), e2 || (e2 = this.toolKit.uuid(), this.disableCookie ? r = e2 : f(o.sdk.WID_KEY, e2, 15552e3)), e2;
    }, bindUnloadEvent: function(e2) {
      window && (window.addEventListener ? window.addEventListener("beforeunload", (function(t2) {
        b(e2);
      }), false) : window.attachEvent && window.attachEvent("onbeforeunload", (function(t2) {
        b(e2);
      })));
    } };
  }]);
}));


/***/ },

/***/ 624
(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;var bigInt = (function(undefined) {
  "use strict";
  var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
  var supportsNativeBigInt = typeof BigInt === "function";
  function Integer(v, radix, alphabet, caseSensitive) {
    if (typeof v === "undefined") return Integer[0];
    if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
    return parseValue(v);
  }
  function BigInteger(value, sign) {
    this.value = value;
    this.sign = sign;
    this.isSmall = false;
  }
  BigInteger.prototype = Object.create(Integer.prototype);
  function SmallInteger(value) {
    this.value = value;
    this.sign = value < 0;
    this.isSmall = true;
  }
  SmallInteger.prototype = Object.create(Integer.prototype);
  function NativeBigInt(value) {
    this.value = value;
  }
  NativeBigInt.prototype = Object.create(Integer.prototype);
  function isPrecise(n) {
    return -MAX_INT < n && n < MAX_INT;
  }
  function smallToArray(n) {
    if (n < 1e7)
      return [n];
    if (n < 1e14)
      return [n % 1e7, Math.floor(n / 1e7)];
    return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
  }
  function arrayToSmall(arr) {
    trim(arr);
    var length = arr.length;
    if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
      switch (length) {
        case 0:
          return 0;
        case 1:
          return arr[0];
        case 2:
          return arr[0] + arr[1] * BASE;
        default:
          return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
      }
    }
    return arr;
  }
  function trim(v) {
    var i2 = v.length;
    while (v[--i2] === 0) ;
    v.length = i2 + 1;
  }
  function createArray(length) {
    var x = new Array(length);
    var i2 = -1;
    while (++i2 < length) {
      x[i2] = 0;
    }
    return x;
  }
  function truncate(n) {
    if (n > 0) return Math.floor(n);
    return Math.ceil(n);
  }
  function add(a, b) {
    var l_a = a.length, l_b = b.length, r = new Array(l_a), carry = 0, base = BASE, sum, i2;
    for (i2 = 0; i2 < l_b; i2++) {
      sum = a[i2] + b[i2] + carry;
      carry = sum >= base ? 1 : 0;
      r[i2] = sum - carry * base;
    }
    while (i2 < l_a) {
      sum = a[i2] + carry;
      carry = sum === base ? 1 : 0;
      r[i2++] = sum - carry * base;
    }
    if (carry > 0) r.push(carry);
    return r;
  }
  function addAny(a, b) {
    if (a.length >= b.length) return add(a, b);
    return add(b, a);
  }
  function addSmall(a, carry) {
    var l = a.length, r = new Array(l), base = BASE, sum, i2;
    for (i2 = 0; i2 < l; i2++) {
      sum = a[i2] - base + carry;
      carry = Math.floor(sum / base);
      r[i2] = sum - carry * base;
      carry += 1;
    }
    while (carry > 0) {
      r[i2++] = carry % base;
      carry = Math.floor(carry / base);
    }
    return r;
  }
  BigInteger.prototype.add = function(v) {
    var n = parseValue(v);
    if (this.sign !== n.sign) {
      return this.subtract(n.negate());
    }
    var a = this.value, b = n.value;
    if (n.isSmall) {
      return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
    }
    return new BigInteger(addAny(a, b), this.sign);
  };
  BigInteger.prototype.plus = BigInteger.prototype.add;
  SmallInteger.prototype.add = function(v) {
    var n = parseValue(v);
    var a = this.value;
    if (a < 0 !== n.sign) {
      return this.subtract(n.negate());
    }
    var b = n.value;
    if (n.isSmall) {
      if (isPrecise(a + b)) return new SmallInteger(a + b);
      b = smallToArray(Math.abs(b));
    }
    return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
  };
  SmallInteger.prototype.plus = SmallInteger.prototype.add;
  NativeBigInt.prototype.add = function(v) {
    return new NativeBigInt(this.value + parseValue(v).value);
  };
  NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
  function subtract(a, b) {
    var a_l = a.length, b_l = b.length, r = new Array(a_l), borrow = 0, base = BASE, i2, difference;
    for (i2 = 0; i2 < b_l; i2++) {
      difference = a[i2] - borrow - b[i2];
      if (difference < 0) {
        difference += base;
        borrow = 1;
      } else borrow = 0;
      r[i2] = difference;
    }
    for (i2 = b_l; i2 < a_l; i2++) {
      difference = a[i2] - borrow;
      if (difference < 0) difference += base;
      else {
        r[i2++] = difference;
        break;
      }
      r[i2] = difference;
    }
    for (; i2 < a_l; i2++) {
      r[i2] = a[i2];
    }
    trim(r);
    return r;
  }
  function subtractAny(a, b, sign) {
    var value;
    if (compareAbs(a, b) >= 0) {
      value = subtract(a, b);
    } else {
      value = subtract(b, a);
      sign = !sign;
    }
    value = arrayToSmall(value);
    if (typeof value === "number") {
      if (sign) value = -value;
      return new SmallInteger(value);
    }
    return new BigInteger(value, sign);
  }
  function subtractSmall(a, b, sign) {
    var l = a.length, r = new Array(l), carry = -b, base = BASE, i2, difference;
    for (i2 = 0; i2 < l; i2++) {
      difference = a[i2] + carry;
      carry = Math.floor(difference / base);
      difference %= base;
      r[i2] = difference < 0 ? difference + base : difference;
    }
    r = arrayToSmall(r);
    if (typeof r === "number") {
      if (sign) r = -r;
      return new SmallInteger(r);
    }
    return new BigInteger(r, sign);
  }
  BigInteger.prototype.subtract = function(v) {
    var n = parseValue(v);
    if (this.sign !== n.sign) {
      return this.add(n.negate());
    }
    var a = this.value, b = n.value;
    if (n.isSmall)
      return subtractSmall(a, Math.abs(b), this.sign);
    return subtractAny(a, b, this.sign);
  };
  BigInteger.prototype.minus = BigInteger.prototype.subtract;
  SmallInteger.prototype.subtract = function(v) {
    var n = parseValue(v);
    var a = this.value;
    if (a < 0 !== n.sign) {
      return this.add(n.negate());
    }
    var b = n.value;
    if (n.isSmall) {
      return new SmallInteger(a - b);
    }
    return subtractSmall(b, Math.abs(a), a >= 0);
  };
  SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
  NativeBigInt.prototype.subtract = function(v) {
    return new NativeBigInt(this.value - parseValue(v).value);
  };
  NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
  BigInteger.prototype.negate = function() {
    return new BigInteger(this.value, !this.sign);
  };
  SmallInteger.prototype.negate = function() {
    var sign = this.sign;
    var small = new SmallInteger(-this.value);
    small.sign = !sign;
    return small;
  };
  NativeBigInt.prototype.negate = function() {
    return new NativeBigInt(-this.value);
  };
  BigInteger.prototype.abs = function() {
    return new BigInteger(this.value, false);
  };
  SmallInteger.prototype.abs = function() {
    return new SmallInteger(Math.abs(this.value));
  };
  NativeBigInt.prototype.abs = function() {
    return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
  };
  function multiplyLong(a, b) {
    var a_l = a.length, b_l = b.length, l = a_l + b_l, r = createArray(l), base = BASE, product, carry, i2, a_i, b_j;
    for (i2 = 0; i2 < a_l; ++i2) {
      a_i = a[i2];
      for (var j = 0; j < b_l; ++j) {
        b_j = b[j];
        product = a_i * b_j + r[i2 + j];
        carry = Math.floor(product / base);
        r[i2 + j] = product - carry * base;
        r[i2 + j + 1] += carry;
      }
    }
    trim(r);
    return r;
  }
  function multiplySmall(a, b) {
    var l = a.length, r = new Array(l), base = BASE, carry = 0, product, i2;
    for (i2 = 0; i2 < l; i2++) {
      product = a[i2] * b + carry;
      carry = Math.floor(product / base);
      r[i2] = product - carry * base;
    }
    while (carry > 0) {
      r[i2++] = carry % base;
      carry = Math.floor(carry / base);
    }
    return r;
  }
  function shiftLeft(x, n) {
    var r = [];
    while (n-- > 0) r.push(0);
    return r.concat(x);
  }
  function multiplyKaratsuba(x, y) {
    var n = Math.max(x.length, y.length);
    if (n <= 30) return multiplyLong(x, y);
    n = Math.ceil(n / 2);
    var b = x.slice(n), a = x.slice(0, n), d = y.slice(n), c = y.slice(0, n);
    var ac = multiplyKaratsuba(a, c), bd = multiplyKaratsuba(b, d), abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
    var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
    trim(product);
    return product;
  }
  function useKaratsuba(l1, l2) {
    return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
  }
  BigInteger.prototype.multiply = function(v) {
    var n = parseValue(v), a = this.value, b = n.value, sign = this.sign !== n.sign, abs;
    if (n.isSmall) {
      if (b === 0) return Integer[0];
      if (b === 1) return this;
      if (b === -1) return this.negate();
      abs = Math.abs(b);
      if (abs < BASE) {
        return new BigInteger(multiplySmall(a, abs), sign);
      }
      b = smallToArray(abs);
    }
    if (useKaratsuba(a.length, b.length))
      return new BigInteger(multiplyKaratsuba(a, b), sign);
    return new BigInteger(multiplyLong(a, b), sign);
  };
  BigInteger.prototype.times = BigInteger.prototype.multiply;
  function multiplySmallAndArray(a, b, sign) {
    if (a < BASE) {
      return new BigInteger(multiplySmall(b, a), sign);
    }
    return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
  }
  SmallInteger.prototype._multiplyBySmall = function(a) {
    if (isPrecise(a.value * this.value)) {
      return new SmallInteger(a.value * this.value);
    }
    return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
  };
  BigInteger.prototype._multiplyBySmall = function(a) {
    if (a.value === 0) return Integer[0];
    if (a.value === 1) return this;
    if (a.value === -1) return this.negate();
    return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
  };
  SmallInteger.prototype.multiply = function(v) {
    return parseValue(v)._multiplyBySmall(this);
  };
  SmallInteger.prototype.times = SmallInteger.prototype.multiply;
  NativeBigInt.prototype.multiply = function(v) {
    return new NativeBigInt(this.value * parseValue(v).value);
  };
  NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
  function square(a) {
    var l = a.length, r = createArray(l + l), base = BASE, product, carry, i2, a_i, a_j;
    for (i2 = 0; i2 < l; i2++) {
      a_i = a[i2];
      carry = 0 - a_i * a_i;
      for (var j = i2; j < l; j++) {
        a_j = a[j];
        product = 2 * (a_i * a_j) + r[i2 + j] + carry;
        carry = Math.floor(product / base);
        r[i2 + j] = product - carry * base;
      }
      r[i2 + l] = carry;
    }
    trim(r);
    return r;
  }
  BigInteger.prototype.square = function() {
    return new BigInteger(square(this.value), false);
  };
  SmallInteger.prototype.square = function() {
    var value = this.value * this.value;
    if (isPrecise(value)) return new SmallInteger(value);
    return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
  };
  NativeBigInt.prototype.square = function(v) {
    return new NativeBigInt(this.value * this.value);
  };
  function divMod1(a, b) {
    var a_l = a.length, b_l = b.length, base = BASE, result = createArray(b.length), divisorMostSignificantDigit = b[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a, lambda), divisor = multiplySmall(b, lambda), quotientDigit, shift, carry, borrow, i2, l, q;
    if (remainder.length <= a_l) remainder.push(0);
    divisor.push(0);
    divisorMostSignificantDigit = divisor[b_l - 1];
    for (shift = a_l - b_l; shift >= 0; shift--) {
      quotientDigit = base - 1;
      if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
        quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
      }
      carry = 0;
      borrow = 0;
      l = divisor.length;
      for (i2 = 0; i2 < l; i2++) {
        carry += quotientDigit * divisor[i2];
        q = Math.floor(carry / base);
        borrow += remainder[shift + i2] - (carry - q * base);
        carry = q;
        if (borrow < 0) {
          remainder[shift + i2] = borrow + base;
          borrow = -1;
        } else {
          remainder[shift + i2] = borrow;
          borrow = 0;
        }
      }
      while (borrow !== 0) {
        quotientDigit -= 1;
        carry = 0;
        for (i2 = 0; i2 < l; i2++) {
          carry += remainder[shift + i2] - base + divisor[i2];
          if (carry < 0) {
            remainder[shift + i2] = carry + base;
            carry = 0;
          } else {
            remainder[shift + i2] = carry;
            carry = 1;
          }
        }
        borrow += carry;
      }
      result[shift] = quotientDigit;
    }
    remainder = divModSmall(remainder, lambda)[0];
    return [arrayToSmall(result), arrayToSmall(remainder)];
  }
  function divMod2(a, b) {
    var a_l = a.length, b_l = b.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
    while (a_l) {
      part.unshift(a[--a_l]);
      trim(part);
      if (compareAbs(part, b) < 0) {
        result.push(0);
        continue;
      }
      xlen = part.length;
      highx = part[xlen - 1] * base + part[xlen - 2];
      highy = b[b_l - 1] * base + b[b_l - 2];
      if (xlen > b_l) {
        highx = (highx + 1) * base;
      }
      guess = Math.ceil(highx / highy);
      do {
        check = multiplySmall(b, guess);
        if (compareAbs(check, part) <= 0) break;
        guess--;
      } while (guess);
      result.push(guess);
      part = subtract(part, check);
    }
    result.reverse();
    return [arrayToSmall(result), arrayToSmall(part)];
  }
  function divModSmall(value, lambda) {
    var length = value.length, quotient = createArray(length), base = BASE, i2, q, remainder, divisor;
    remainder = 0;
    for (i2 = length - 1; i2 >= 0; --i2) {
      divisor = remainder * base + value[i2];
      q = truncate(divisor / lambda);
      remainder = divisor - q * lambda;
      quotient[i2] = q | 0;
    }
    return [quotient, remainder | 0];
  }
  function divModAny(self, v) {
    var value, n = parseValue(v);
    if (supportsNativeBigInt) {
      return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
    }
    var a = self.value, b = n.value;
    var quotient;
    if (b === 0) throw new Error("Cannot divide by zero");
    if (self.isSmall) {
      if (n.isSmall) {
        return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
      }
      return [Integer[0], self];
    }
    if (n.isSmall) {
      if (b === 1) return [self, Integer[0]];
      if (b == -1) return [self.negate(), Integer[0]];
      var abs = Math.abs(b);
      if (abs < BASE) {
        value = divModSmall(a, abs);
        quotient = arrayToSmall(value[0]);
        var remainder = value[1];
        if (self.sign) remainder = -remainder;
        if (typeof quotient === "number") {
          if (self.sign !== n.sign) quotient = -quotient;
          return [new SmallInteger(quotient), new SmallInteger(remainder)];
        }
        return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
      }
      b = smallToArray(abs);
    }
    var comparison = compareAbs(a, b);
    if (comparison === -1) return [Integer[0], self];
    if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];
    if (a.length + b.length <= 200)
      value = divMod1(a, b);
    else value = divMod2(a, b);
    quotient = value[0];
    var qSign = self.sign !== n.sign, mod = value[1], mSign = self.sign;
    if (typeof quotient === "number") {
      if (qSign) quotient = -quotient;
      quotient = new SmallInteger(quotient);
    } else quotient = new BigInteger(quotient, qSign);
    if (typeof mod === "number") {
      if (mSign) mod = -mod;
      mod = new SmallInteger(mod);
    } else mod = new BigInteger(mod, mSign);
    return [quotient, mod];
  }
  BigInteger.prototype.divmod = function(v) {
    var result = divModAny(this, v);
    return {
      quotient: result[0],
      remainder: result[1]
    };
  };
  NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
  BigInteger.prototype.divide = function(v) {
    return divModAny(this, v)[0];
  };
  NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v) {
    return new NativeBigInt(this.value / parseValue(v).value);
  };
  SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
  BigInteger.prototype.mod = function(v) {
    return divModAny(this, v)[1];
  };
  NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v) {
    return new NativeBigInt(this.value % parseValue(v).value);
  };
  SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
  BigInteger.prototype.pow = function(v) {
    var n = parseValue(v), a = this.value, b = n.value, value, x, y;
    if (b === 0) return Integer[1];
    if (a === 0) return Integer[0];
    if (a === 1) return Integer[1];
    if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
    if (n.sign) {
      return Integer[0];
    }
    if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
    if (this.isSmall) {
      if (isPrecise(value = Math.pow(a, b)))
        return new SmallInteger(truncate(value));
    }
    x = this;
    y = Integer[1];
    while (true) {
      if (b & true) {
        y = y.times(x);
        --b;
      }
      if (b === 0) break;
      b /= 2;
      x = x.square();
    }
    return y;
  };
  SmallInteger.prototype.pow = BigInteger.prototype.pow;
  NativeBigInt.prototype.pow = function(v) {
    var n = parseValue(v);
    var a = this.value, b = n.value;
    var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
    if (b === _0) return Integer[1];
    if (a === _0) return Integer[0];
    if (a === _1) return Integer[1];
    if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
    if (n.isNegative()) return new NativeBigInt(_0);
    var x = this;
    var y = Integer[1];
    while (true) {
      if ((b & _1) === _1) {
        y = y.times(x);
        --b;
      }
      if (b === _0) break;
      b /= _2;
      x = x.square();
    }
    return y;
  };
  BigInteger.prototype.modPow = function(exp, mod) {
    exp = parseValue(exp);
    mod = parseValue(mod);
    if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
    var r = Integer[1], base = this.mod(mod);
    if (exp.isNegative()) {
      exp = exp.multiply(Integer[-1]);
      base = base.modInv(mod);
    }
    while (exp.isPositive()) {
      if (base.isZero()) return Integer[0];
      if (exp.isOdd()) r = r.multiply(base).mod(mod);
      exp = exp.divide(2);
      base = base.square().mod(mod);
    }
    return r;
  };
  NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
  function compareAbs(a, b) {
    if (a.length !== b.length) {
      return a.length > b.length ? 1 : -1;
    }
    for (var i2 = a.length - 1; i2 >= 0; i2--) {
      if (a[i2] !== b[i2]) return a[i2] > b[i2] ? 1 : -1;
    }
    return 0;
  }
  BigInteger.prototype.compareAbs = function(v) {
    var n = parseValue(v), a = this.value, b = n.value;
    if (n.isSmall) return 1;
    return compareAbs(a, b);
  };
  SmallInteger.prototype.compareAbs = function(v) {
    var n = parseValue(v), a = Math.abs(this.value), b = n.value;
    if (n.isSmall) {
      b = Math.abs(b);
      return a === b ? 0 : a > b ? 1 : -1;
    }
    return -1;
  };
  NativeBigInt.prototype.compareAbs = function(v) {
    var a = this.value;
    var b = parseValue(v).value;
    a = a >= 0 ? a : -a;
    b = b >= 0 ? b : -b;
    return a === b ? 0 : a > b ? 1 : -1;
  };
  BigInteger.prototype.compare = function(v) {
    if (v === Infinity) {
      return -1;
    }
    if (v === -Infinity) {
      return 1;
    }
    var n = parseValue(v), a = this.value, b = n.value;
    if (this.sign !== n.sign) {
      return n.sign ? 1 : -1;
    }
    if (n.isSmall) {
      return this.sign ? -1 : 1;
    }
    return compareAbs(a, b) * (this.sign ? -1 : 1);
  };
  BigInteger.prototype.compareTo = BigInteger.prototype.compare;
  SmallInteger.prototype.compare = function(v) {
    if (v === Infinity) {
      return -1;
    }
    if (v === -Infinity) {
      return 1;
    }
    var n = parseValue(v), a = this.value, b = n.value;
    if (n.isSmall) {
      return a == b ? 0 : a > b ? 1 : -1;
    }
    if (a < 0 !== n.sign) {
      return a < 0 ? -1 : 1;
    }
    return a < 0 ? 1 : -1;
  };
  SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
  NativeBigInt.prototype.compare = function(v) {
    if (v === Infinity) {
      return -1;
    }
    if (v === -Infinity) {
      return 1;
    }
    var a = this.value;
    var b = parseValue(v).value;
    return a === b ? 0 : a > b ? 1 : -1;
  };
  NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
  BigInteger.prototype.equals = function(v) {
    return this.compare(v) === 0;
  };
  NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
  BigInteger.prototype.notEquals = function(v) {
    return this.compare(v) !== 0;
  };
  NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
  BigInteger.prototype.greater = function(v) {
    return this.compare(v) > 0;
  };
  NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
  BigInteger.prototype.lesser = function(v) {
    return this.compare(v) < 0;
  };
  NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
  BigInteger.prototype.greaterOrEquals = function(v) {
    return this.compare(v) >= 0;
  };
  NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
  BigInteger.prototype.lesserOrEquals = function(v) {
    return this.compare(v) <= 0;
  };
  NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
  BigInteger.prototype.isEven = function() {
    return (this.value[0] & 1) === 0;
  };
  SmallInteger.prototype.isEven = function() {
    return (this.value & 1) === 0;
  };
  NativeBigInt.prototype.isEven = function() {
    return (this.value & BigInt(1)) === BigInt(0);
  };
  BigInteger.prototype.isOdd = function() {
    return (this.value[0] & 1) === 1;
  };
  SmallInteger.prototype.isOdd = function() {
    return (this.value & 1) === 1;
  };
  NativeBigInt.prototype.isOdd = function() {
    return (this.value & BigInt(1)) === BigInt(1);
  };
  BigInteger.prototype.isPositive = function() {
    return !this.sign;
  };
  SmallInteger.prototype.isPositive = function() {
    return this.value > 0;
  };
  NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
  BigInteger.prototype.isNegative = function() {
    return this.sign;
  };
  SmallInteger.prototype.isNegative = function() {
    return this.value < 0;
  };
  NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
  BigInteger.prototype.isUnit = function() {
    return false;
  };
  SmallInteger.prototype.isUnit = function() {
    return Math.abs(this.value) === 1;
  };
  NativeBigInt.prototype.isUnit = function() {
    return this.abs().value === BigInt(1);
  };
  BigInteger.prototype.isZero = function() {
    return false;
  };
  SmallInteger.prototype.isZero = function() {
    return this.value === 0;
  };
  NativeBigInt.prototype.isZero = function() {
    return this.value === BigInt(0);
  };
  BigInteger.prototype.isDivisibleBy = function(v) {
    var n = parseValue(v);
    if (n.isZero()) return false;
    if (n.isUnit()) return true;
    if (n.compareAbs(2) === 0) return this.isEven();
    return this.mod(n).isZero();
  };
  NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
  function isBasicPrime(v) {
    var n = v.abs();
    if (n.isUnit()) return false;
    if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
    if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
    if (n.lesser(49)) return true;
  }
  function millerRabinTest(n, a) {
    var nPrev = n.prev(), b = nPrev, r = 0, d, t, i2, x;
    while (b.isEven()) b = b.divide(2), r++;
    next: for (i2 = 0; i2 < a.length; i2++) {
      if (n.lesser(a[i2])) continue;
      x = bigInt(a[i2]).modPow(b, n);
      if (x.isUnit() || x.equals(nPrev)) continue;
      for (d = r - 1; d != 0; d--) {
        x = x.square().mod(n);
        if (x.isUnit()) return false;
        if (x.equals(nPrev)) continue next;
      }
      return false;
    }
    return true;
  }
  BigInteger.prototype.isPrime = function(strict) {
    var isPrime = isBasicPrime(this);
    if (isPrime !== undefined) return isPrime;
    var n = this.abs();
    var bits = n.bitLength();
    if (bits <= 64)
      return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    var logN = Math.log(2) * bits.toJSNumber();
    var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
    for (var a = [], i2 = 0; i2 < t; i2++) {
      a.push(bigInt(i2 + 2));
    }
    return millerRabinTest(n, a);
  };
  NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
  BigInteger.prototype.isProbablePrime = function(iterations, rng) {
    var isPrime = isBasicPrime(this);
    if (isPrime !== undefined) return isPrime;
    var n = this.abs();
    var t = iterations === undefined ? 5 : iterations;
    for (var a = [], i2 = 0; i2 < t; i2++) {
      a.push(bigInt.randBetween(2, n.minus(2), rng));
    }
    return millerRabinTest(n, a);
  };
  NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
  BigInteger.prototype.modInv = function(n) {
    var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
    while (!newR.isZero()) {
      q = r.divide(newR);
      lastT = t;
      lastR = r;
      t = newT;
      r = newR;
      newT = lastT.subtract(q.multiply(newT));
      newR = lastR.subtract(q.multiply(newR));
    }
    if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
    if (t.compare(0) === -1) {
      t = t.add(n);
    }
    if (this.isNegative()) {
      return t.negate();
    }
    return t;
  };
  NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
  BigInteger.prototype.next = function() {
    var value = this.value;
    if (this.sign) {
      return subtractSmall(value, 1, this.sign);
    }
    return new BigInteger(addSmall(value, 1), this.sign);
  };
  SmallInteger.prototype.next = function() {
    var value = this.value;
    if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
    return new BigInteger(MAX_INT_ARR, false);
  };
  NativeBigInt.prototype.next = function() {
    return new NativeBigInt(this.value + BigInt(1));
  };
  BigInteger.prototype.prev = function() {
    var value = this.value;
    if (this.sign) {
      return new BigInteger(addSmall(value, 1), true);
    }
    return subtractSmall(value, 1, this.sign);
  };
  SmallInteger.prototype.prev = function() {
    var value = this.value;
    if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
    return new BigInteger(MAX_INT_ARR, true);
  };
  NativeBigInt.prototype.prev = function() {
    return new NativeBigInt(this.value - BigInt(1));
  };
  var powersOfTwo = [1];
  while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
  var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
  function shift_isSmall(n) {
    return Math.abs(n) <= BASE;
  }
  BigInteger.prototype.shiftLeft = function(v) {
    var n = parseValue(v).toJSNumber();
    if (!shift_isSmall(n)) {
      throw new Error(String(n) + " is too large for shifting.");
    }
    if (n < 0) return this.shiftRight(-n);
    var result = this;
    if (result.isZero()) return result;
    while (n >= powers2Length) {
      result = result.multiply(highestPower2);
      n -= powers2Length - 1;
    }
    return result.multiply(powersOfTwo[n]);
  };
  NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
  BigInteger.prototype.shiftRight = function(v) {
    var remQuo;
    var n = parseValue(v).toJSNumber();
    if (!shift_isSmall(n)) {
      throw new Error(String(n) + " is too large for shifting.");
    }
    if (n < 0) return this.shiftLeft(-n);
    var result = this;
    while (n >= powers2Length) {
      if (result.isZero() || result.isNegative() && result.isUnit()) return result;
      remQuo = divModAny(result, highestPower2);
      result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      n -= powers2Length - 1;
    }
    remQuo = divModAny(result, powersOfTwo[n]);
    return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
  };
  NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
  function bitwise(x, y, fn) {
    y = parseValue(y);
    var xSign = x.isNegative(), ySign = y.isNegative();
    var xRem = xSign ? x.not() : x, yRem = ySign ? y.not() : y;
    var xDigit = 0, yDigit = 0;
    var xDivMod = null, yDivMod = null;
    var result = [];
    while (!xRem.isZero() || !yRem.isZero()) {
      xDivMod = divModAny(xRem, highestPower2);
      xDigit = xDivMod[1].toJSNumber();
      if (xSign) {
        xDigit = highestPower2 - 1 - xDigit;
      }
      yDivMod = divModAny(yRem, highestPower2);
      yDigit = yDivMod[1].toJSNumber();
      if (ySign) {
        yDigit = highestPower2 - 1 - yDigit;
      }
      xRem = xDivMod[0];
      yRem = yDivMod[0];
      result.push(fn(xDigit, yDigit));
    }
    var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
    for (var i2 = result.length - 1; i2 >= 0; i2 -= 1) {
      sum = sum.multiply(highestPower2).add(bigInt(result[i2]));
    }
    return sum;
  }
  BigInteger.prototype.not = function() {
    return this.negate().prev();
  };
  NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
  BigInteger.prototype.and = function(n) {
    return bitwise(this, n, function(a, b) {
      return a & b;
    });
  };
  NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
  BigInteger.prototype.or = function(n) {
    return bitwise(this, n, function(a, b) {
      return a | b;
    });
  };
  NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
  BigInteger.prototype.xor = function(n) {
    return bitwise(this, n, function(a, b) {
      return a ^ b;
    });
  };
  NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
  var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
  function roughLOB(n) {
    var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
    return x & -x;
  }
  function integerLogarithm(value, base) {
    if (base.compareTo(value) <= 0) {
      var tmp = integerLogarithm(value, base.square(base));
      var p = tmp.p;
      var e = tmp.e;
      var t = p.multiply(base);
      return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p, e: e * 2 };
    }
    return { p: bigInt(1), e: 0 };
  }
  BigInteger.prototype.bitLength = function() {
    var n = this;
    if (n.compareTo(bigInt(0)) < 0) {
      n = n.negate().subtract(bigInt(1));
    }
    if (n.compareTo(bigInt(0)) === 0) {
      return bigInt(0);
    }
    return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
  };
  NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
  function max(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    return a.greater(b) ? a : b;
  }
  function min(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    return a.lesser(b) ? a : b;
  }
  function gcd(a, b) {
    a = parseValue(a).abs();
    b = parseValue(b).abs();
    if (a.equals(b)) return a;
    if (a.isZero()) return b;
    if (b.isZero()) return a;
    var c = Integer[1], d, t;
    while (a.isEven() && b.isEven()) {
      d = min(roughLOB(a), roughLOB(b));
      a = a.divide(d);
      b = b.divide(d);
      c = c.multiply(d);
    }
    while (a.isEven()) {
      a = a.divide(roughLOB(a));
    }
    do {
      while (b.isEven()) {
        b = b.divide(roughLOB(b));
      }
      if (a.greater(b)) {
        t = b;
        b = a;
        a = t;
      }
      b = b.subtract(a);
    } while (!b.isZero());
    return c.isUnit() ? a : a.multiply(c);
  }
  function lcm(a, b) {
    a = parseValue(a).abs();
    b = parseValue(b).abs();
    return a.divide(gcd(a, b)).multiply(b);
  }
  function randBetween(a, b, rng) {
    a = parseValue(a);
    b = parseValue(b);
    var usedRNG = rng || Math.random;
    var low = min(a, b), high = max(a, b);
    var range = high.subtract(low).add(1);
    if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
    var digits = toBase(range, BASE).value;
    var result = [], restricted = true;
    for (var i2 = 0; i2 < digits.length; i2++) {
      var top = restricted ? digits[i2] + (i2 + 1 < digits.length ? digits[i2 + 1] / BASE : 0) : BASE;
      var digit = truncate(usedRNG() * top);
      result.push(digit);
      if (digit < digits[i2]) restricted = false;
    }
    return low.add(Integer.fromArray(result, BASE, false));
  }
  var parseBase = function(text, base, alphabet, caseSensitive) {
    alphabet = alphabet || DEFAULT_ALPHABET;
    text = String(text);
    if (!caseSensitive) {
      text = text.toLowerCase();
      alphabet = alphabet.toLowerCase();
    }
    var length = text.length;
    var i2;
    var absBase = Math.abs(base);
    var alphabetValues = {};
    for (i2 = 0; i2 < alphabet.length; i2++) {
      alphabetValues[alphabet[i2]] = i2;
    }
    for (i2 = 0; i2 < length; i2++) {
      var c = text[i2];
      if (c === "-") continue;
      if (c in alphabetValues) {
        if (alphabetValues[c] >= absBase) {
          if (c === "1" && absBase === 1) continue;
          throw new Error(c + " is not a valid digit in base " + base + ".");
        }
      }
    }
    base = parseValue(base);
    var digits = [];
    var isNegative = text[0] === "-";
    for (i2 = isNegative ? 1 : 0; i2 < text.length; i2++) {
      var c = text[i2];
      if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));
      else if (c === "<") {
        var start = i2;
        do {
          i2++;
        } while (text[i2] !== ">" && i2 < text.length);
        digits.push(parseValue(text.slice(start + 1, i2)));
      } else throw new Error(c + " is not a valid character");
    }
    return parseBaseFromArray(digits, base, isNegative);
  };
  function parseBaseFromArray(digits, base, isNegative) {
    var val = Integer[0], pow = Integer[1], i2;
    for (i2 = digits.length - 1; i2 >= 0; i2--) {
      val = val.add(digits[i2].times(pow));
      pow = pow.times(base);
    }
    return isNegative ? val.negate() : val;
  }
  function stringify(digit, alphabet) {
    alphabet = alphabet || DEFAULT_ALPHABET;
    if (digit < alphabet.length) {
      return alphabet[digit];
    }
    return "<" + digit + ">";
  }
  function toBase(n, base) {
    base = bigInt(base);
    if (base.isZero()) {
      if (n.isZero()) return { value: [0], isNegative: false };
      throw new Error("Cannot convert nonzero numbers to base 0.");
    }
    if (base.equals(-1)) {
      if (n.isZero()) return { value: [0], isNegative: false };
      if (n.isNegative())
        return {
          value: [].concat.apply(
            [],
            Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
          ),
          isNegative: false
        };
      var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      arr.unshift([1]);
      return {
        value: [].concat.apply([], arr),
        isNegative: false
      };
    }
    var neg = false;
    if (n.isNegative() && base.isPositive()) {
      neg = true;
      n = n.abs();
    }
    if (base.isUnit()) {
      if (n.isZero()) return { value: [0], isNegative: false };
      return {
        value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
        isNegative: neg
      };
    }
    var out = [];
    var left = n, divmod;
    while (left.isNegative() || left.compareAbs(base) >= 0) {
      divmod = left.divmod(base);
      left = divmod.quotient;
      var digit = divmod.remainder;
      if (digit.isNegative()) {
        digit = base.minus(digit).abs();
        left = left.next();
      }
      out.push(digit.toJSNumber());
    }
    out.push(left.toJSNumber());
    return { value: out.reverse(), isNegative: neg };
  }
  function toBaseString(n, base, alphabet) {
    var arr = toBase(n, base);
    return (arr.isNegative ? "-" : "") + arr.value.map(function(x) {
      return stringify(x, alphabet);
    }).join("");
  }
  BigInteger.prototype.toArray = function(radix) {
    return toBase(this, radix);
  };
  SmallInteger.prototype.toArray = function(radix) {
    return toBase(this, radix);
  };
  NativeBigInt.prototype.toArray = function(radix) {
    return toBase(this, radix);
  };
  BigInteger.prototype.toString = function(radix, alphabet) {
    if (radix === undefined) radix = 10;
    if (radix !== 10 || alphabet) return toBaseString(this, radix, alphabet);
    var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
    while (--l >= 0) {
      digit = String(v[l]);
      str += zeros.slice(digit.length) + digit;
    }
    var sign = this.sign ? "-" : "";
    return sign + str;
  };
  SmallInteger.prototype.toString = function(radix, alphabet) {
    if (radix === undefined) radix = 10;
    if (radix != 10 || alphabet) return toBaseString(this, radix, alphabet);
    return String(this.value);
  };
  NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
  NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
    return this.toString();
  };
  BigInteger.prototype.valueOf = function() {
    return parseInt(this.toString(), 10);
  };
  BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
  SmallInteger.prototype.valueOf = function() {
    return this.value;
  };
  SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
  NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
    return parseInt(this.toString(), 10);
  };
  function parseStringValue(v) {
    if (isPrecise(+v)) {
      var x = +v;
      if (x === truncate(x))
        return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
      throw new Error("Invalid integer: " + v);
    }
    var sign = v[0] === "-";
    if (sign) v = v.slice(1);
    var split = v.split(/e/i);
    if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
    if (split.length === 2) {
      var exp = split[1];
      if (exp[0] === "+") exp = exp.slice(1);
      exp = +exp;
      if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
      var text = split[0];
      var decimalPlace = text.indexOf(".");
      if (decimalPlace >= 0) {
        exp -= text.length - decimalPlace - 1;
        text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
      }
      if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
      text += new Array(exp + 1).join("0");
      v = text;
    }
    var isValid = /^([0-9][0-9]*)$/.test(v);
    if (!isValid) throw new Error("Invalid integer: " + v);
    if (supportsNativeBigInt) {
      return new NativeBigInt(BigInt(sign ? "-" + v : v));
    }
    var r = [], max2 = v.length, l = LOG_BASE, min2 = max2 - l;
    while (max2 > 0) {
      r.push(+v.slice(min2, max2));
      min2 -= l;
      if (min2 < 0) min2 = 0;
      max2 -= l;
    }
    trim(r);
    return new BigInteger(r, sign);
  }
  function parseNumberValue(v) {
    if (supportsNativeBigInt) {
      return new NativeBigInt(BigInt(v));
    }
    if (isPrecise(v)) {
      if (v !== truncate(v)) throw new Error(v + " is not an integer.");
      return new SmallInteger(v);
    }
    return parseStringValue(v.toString());
  }
  function parseValue(v) {
    if (typeof v === "number") {
      return parseNumberValue(v);
    }
    if (typeof v === "string") {
      return parseStringValue(v);
    }
    if (typeof v === "bigint") {
      return new NativeBigInt(v);
    }
    return v;
  }
  for (var i = 0; i < 1e3; i++) {
    Integer[i] = parseValue(i);
    if (i > 0) Integer[-i] = parseValue(-i);
  }
  Integer.one = Integer[1];
  Integer.zero = Integer[0];
  Integer.minusOne = Integer[-1];
  Integer.max = max;
  Integer.min = min;
  Integer.gcd = gcd;
  Integer.lcm = lcm;
  Integer.isInstance = function(x) {
    return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt;
  };
  Integer.randBetween = randBetween;
  Integer.fromArray = function(digits, base, isNegative) {
    return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
  };
  return Integer;
})();
if ( true && module.hasOwnProperty("exports")) {
  module.exports = bigInt;
}
if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return bigInt;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ },

/***/ 15
(module) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },
    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 255);
      return bytes;
    },
    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join("");
    }
  }
};
module.exports = charenc;


/***/ },

/***/ 251
(module) {

(function() {
  var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return n << b | n >>> 32 - b;
    },
    // Bit-wise rotation right
    rotr: function(n, b) {
      return n << 32 - b | n >>> b;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
      }
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << 24 - b % 32;
      return words;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
      return bytes;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 15).toString(16));
      }
      return hex.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
          else
            base64.push("=");
      }
      return base64.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
      }
      return bytes;
    }
  };
  module.exports = crypt;
})();


/***/ },

/***/ 548
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{ var mod; }
})(this, function(exports2, module2) {
  "use strict";
  var defaultOptions = {
    timeout: 5e3,
    jsonpCallback: "callback",
    jsonpCallbackFunction: null
  };
  function generateCallbackFunction() {
    return "jsonp_" + Date.now() + "_" + Math.ceil(Math.random() * 1e5);
  }
  function clearFunction(functionName) {
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = void 0;
    }
  }
  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    if (script) {
      document.getElementsByTagName("head")[0].removeChild(script);
    }
  }
  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
    var timeoutId = void 0;
    return new Promise(function(resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + "_" + callbackFunction;
      window[callbackFunction] = function(response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });
        if (timeoutId) clearTimeout(timeoutId);
        removeScript(scriptId);
        clearFunction(callbackFunction);
      };
      url += url.indexOf("?") === -1 ? "?" : "&";
      var jsonpScript = document.createElement("script");
      jsonpScript.setAttribute("src", "" + url + jsonpCallback + "=" + callbackFunction);
      if (options.charset) {
        jsonpScript.setAttribute("charset", options.charset);
      }
      if (options.nonce) {
        jsonpScript.setAttribute("nonce", options.nonce);
      }
      if (options.referrerPolicy) {
        jsonpScript.setAttribute("referrerPolicy", options.referrerPolicy);
      }
      if (options.crossorigin) {
        jsonpScript.setAttribute("crossorigin", typeof options.crossorigin === "string" ? options.crossorigin : "anonymous");
      }
      var fp = options.fetchPriority;
      if (fp === "high" || fp === "low" || fp === "auto") {
        jsonpScript.setAttribute("fetchPriority", fp);
      }
      jsonpScript.id = scriptId;
      document.getElementsByTagName("head")[0].appendChild(jsonpScript);
      timeoutId = setTimeout(function() {
        reject(new Error("JSONP request to " + _url + " timed out"));
        clearFunction(callbackFunction);
        removeScript(scriptId);
        window[callbackFunction] = function() {
          clearFunction(callbackFunction);
        };
      }, timeout);
      jsonpScript.onerror = function() {
        reject(new Error("JSONP request to " + _url + " failed"));
        clearFunction(callbackFunction);
        removeScript(scriptId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    });
  }
  module2.exports = fetchJsonp;
});


/***/ },

/***/ 926
(module) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function(obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
}


/***/ },

/***/ 488
(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(352);
module.exports = self.fetch.bind(self);


/***/ },

/***/ 336
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(this, function() {
  var devnull = function() {
  }, bundleIdCache = {}, bundleResultCache = {}, bundleCallbackQueue = {};
  function subscribe(bundleIds, callbackFn) {
    bundleIds = bundleIds.push ? bundleIds : [bundleIds];
    var depsNotFound = [], i = bundleIds.length, numWaiting = i, fn, bundleId, r, q;
    fn = function(bundleId2, pathsNotFound) {
      if (pathsNotFound.length) depsNotFound.push(bundleId2);
      numWaiting--;
      if (!numWaiting) callbackFn(depsNotFound);
    };
    while (i--) {
      bundleId = bundleIds[i];
      r = bundleResultCache[bundleId];
      if (r) {
        fn(bundleId, r);
        continue;
      }
      q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
      q.push(fn);
    }
  }
  function publish(bundleId, pathsNotFound) {
    if (!bundleId) return;
    var q = bundleCallbackQueue[bundleId];
    bundleResultCache[bundleId] = pathsNotFound;
    if (!q) return;
    while (q.length) {
      q[0](bundleId, pathsNotFound);
      q.splice(0, 1);
    }
  }
  function executeCallbacks(args, depsNotFound) {
    if (args.call) args = { success: args };
    if (depsNotFound.length) (args.error || devnull)(depsNotFound);
    else (args.success || devnull)(args);
  }
  function loadFile(path, callbackFn, args, numTries) {
    var doc = document, async = args.async, maxTries = (args.numRetries || 0) + 1, beforeCallbackFn = args.before || devnull, pathname = path.replace(/[\?|#].*$/, ""), pathStripped = path.replace(/^(css|img|module|nomodule)!/, ""), isLegacyIECss, hasModuleSupport, e;
    numTries = numTries || 0;
    if (/(^css!|\.css$)/.test(pathname)) {
      e = doc.createElement("link");
      e.rel = "stylesheet";
      e.href = pathStripped;
      isLegacyIECss = "hideFocus" in e;
      if (isLegacyIECss && e.relList) {
        isLegacyIECss = 0;
        e.rel = "preload";
        e.as = "style";
      }
    } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
      e = doc.createElement("img");
      e.src = pathStripped;
    } else {
      e = doc.createElement("script");
      e.src = pathStripped;
      e.async = async === void 0 ? true : async;
      hasModuleSupport = "noModule" in e;
      if (/^module!/.test(pathname)) {
        if (!hasModuleSupport) return callbackFn(path, "l");
        e.type = "module";
      } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, "l");
    }
    e.onload = e.onerror = e.onbeforeload = function(ev) {
      var result = ev.type[0];
      if (isLegacyIECss) {
        try {
          if (!e.sheet.cssText.length) result = "e";
        } catch (x) {
          if (x.code != 18) result = "e";
        }
      }
      if (result == "e") {
        numTries += 1;
        if (numTries < maxTries) {
          return loadFile(path, callbackFn, args, numTries);
        }
      } else if (e.rel == "preload" && e.as == "style") {
        return e.rel = "stylesheet";
      }
      callbackFn(path, result, ev.defaultPrevented);
    };
    if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
  }
  function loadFiles(paths, callbackFn, args) {
    paths = paths.push ? paths : [paths];
    var numWaiting = paths.length, x = numWaiting, pathsNotFound = [], fn, i;
    fn = function(path, result, defaultPrevented) {
      if (result == "e") pathsNotFound.push(path);
      if (result == "b") {
        if (defaultPrevented) pathsNotFound.push(path);
        else return;
      }
      numWaiting--;
      if (!numWaiting) callbackFn(pathsNotFound);
    };
    for (i = 0; i < x; i++) loadFile(paths[i], fn, args);
  }
  function loadjs(paths, arg1, arg2) {
    var bundleId, args;
    if (arg1 && arg1.trim) bundleId = arg1;
    args = (bundleId ? arg2 : arg1) || {};
    if (bundleId) {
      if (bundleId in bundleIdCache) {
        throw "LoadJS";
      } else {
        bundleIdCache[bundleId] = true;
      }
    }
    function loadFn(resolve, reject) {
      loadFiles(paths, function(pathsNotFound) {
        executeCallbacks(args, pathsNotFound);
        if (resolve) {
          executeCallbacks({ success: resolve, error: reject }, pathsNotFound);
        }
        publish(bundleId, pathsNotFound);
      }, args);
    }
    if (args.returnPromise) return new Promise(loadFn);
    else loadFn();
  }
  loadjs.ready = function ready(deps, args) {
    subscribe(deps, function(depsNotFound) {
      executeCallbacks(args, depsNotFound);
    });
    return loadjs;
  };
  loadjs.done = function done(bundleId) {
    publish(bundleId, []);
  };
  loadjs.reset = function reset() {
    bundleIdCache = {};
    bundleResultCache = {};
    bundleCallbackQueue = {};
  };
  loadjs.isDefined = function isDefined(bundleId) {
    return bundleId in bundleIdCache;
  };
  return loadjs;
});


/***/ },

/***/ 319
(module, __unused_webpack_exports, __webpack_require__) {

(function() {
  var crypt = __webpack_require__(251), utf8 = (__webpack_require__(15).utf8), isBuffer = __webpack_require__(926), bin = (__webpack_require__(15).bin), md5 = function(message, options) {
    if (message.constructor == String)
      if (options && options.encoding === "binary")
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
    }
    m[l >>> 5] |= 128 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;
    var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
    for (var i = 0; i < m.length; i += 16) {
      var aa = a, bb = b, cc = c, dd = d;
      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);
      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);
      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }
    return crypt.endian([a, b, c, d]);
  };
  md5._ff = function(a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._gg = function(a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._hh = function(a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._ii = function(a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._blocksize = 16;
  md5._digestsize = 16;
  module.exports = function(message, options) {
    if (message === void 0 || message === null)
      throw new Error("Illegal argument " + message);
    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
  };
})();


/***/ },

/***/ 19
(module, __unused_webpack_exports, __webpack_require__) {

var murmur3 = __webpack_require__(563);
var murmur2 = __webpack_require__(414);
module.exports = murmur3;
module.exports.murmur3 = murmur3;
module.exports.murmur2 = murmur2;


/***/ },

/***/ 414
(module) {

function murmurhash2_32_gc(str, seed) {
  var l = str.length, h = seed ^ l, i = 0, k;
  while (l >= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    k ^= k >>> 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}
if ("object" !== void 0) {
  module.exports = murmurhash2_32_gc;
}


/***/ },

/***/ 563
(module) {

function murmurhash3_32_gc(key, seed) {
  var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
  remainder = key.length & 3;
  bytes = key.length - remainder;
  h1 = seed;
  c1 = 3432918353;
  c2 = 461845907;
  i = 0;
  while (i < bytes) {
    k1 = key.charCodeAt(i) & 255 | (key.charCodeAt(++i) & 255) << 8 | (key.charCodeAt(++i) & 255) << 16 | (key.charCodeAt(++i) & 255) << 24;
    ++i;
    k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
    h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
  }
  k1 = 0;
  switch (remainder) {
    case 3:
      k1 ^= (key.charCodeAt(i + 2) & 255) << 16;
    case 2:
      k1 ^= (key.charCodeAt(i + 1) & 255) << 8;
    case 1:
      k1 ^= key.charCodeAt(i) & 255;
      k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
      k1 = k1 << 15 | k1 >>> 17;
      k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
      h1 ^= k1;
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
}
if (true) {
  module.exports = murmurhash3_32_gc;
}


/***/ },

/***/ 783
(__unused_webpack_module, exports) {

"use strict";

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for, c = b ? /* @__PURE__ */ Symbol.for("react.element") : 60103, d = b ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, e = b ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = b ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, g = b ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, h = b ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, k = b ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = b ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, m = b ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, n = b ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = b ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, q = b ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, r = b ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, t = b ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = b ? /* @__PURE__ */ Symbol.for("react.block") : 60121, w = b ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = b ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, y = b ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function(a) {
  return z(a) === k;
};
exports.isContextProvider = function(a) {
  return z(a) === h;
};
exports.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function(a) {
  return z(a) === n;
};
exports.isFragment = function(a) {
  return z(a) === e;
};
exports.isLazy = function(a) {
  return z(a) === t;
};
exports.isMemo = function(a) {
  return z(a) === r;
};
exports.isPortal = function(a) {
  return z(a) === d;
};
exports.isProfiler = function(a) {
  return z(a) === g;
};
exports.isStrictMode = function(a) {
  return z(a) === f;
};
exports.isSuspense = function(a) {
  return z(a) === p;
};
exports.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;


/***/ },

/***/ 539
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

if (true) {
  module.exports = __webpack_require__(783);
} else // removed by dead control flow
{}


/***/ },

/***/ 352
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports Headers, Request, Response, DOMException, fetch */
var g = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
typeof __webpack_require__.g !== "undefined" && __webpack_require__.g || {};
var support = {
  searchParams: "URLSearchParams" in g,
  iterable: "Symbol" in g && "iterator" in Symbol,
  blob: "FileReader" in g && "Blob" in g && (function() {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  })(),
  formData: "FormData" in g,
  arrayBuffer: "ArrayBuffer" in g
};
function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
  var viewClasses = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ];
  var isArrayBufferView = ArrayBuffer.isView || function(obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}
function normalizeName(name) {
  if (typeof name !== "string") {
    name = String(name);
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
    throw new TypeError('Invalid character in header field name: "' + name + '"');
  }
  return name.toLowerCase();
}
function normalizeValue(value) {
  if (typeof value !== "string") {
    value = String(value);
  }
  return value;
}
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift();
      return { done: value === void 0, value };
    }
  };
  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator;
    };
  }
  return iterator;
}
function Headers(headers) {
  this.map = {};
  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      if (header.length != 2) {
        throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
      }
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name]);
    }, this);
  }
}
Headers.prototype.append = function(name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers.prototype["delete"] = function(name) {
  delete this.map[normalizeName(name)];
};
Headers.prototype.get = function(name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};
Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name));
};
Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};
Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};
Headers.prototype.keys = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};
Headers.prototype.values = function() {
  var items = [];
  this.forEach(function(value) {
    items.push(value);
  });
  return iteratorFor(items);
};
Headers.prototype.entries = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};
if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}
function consumed(body) {
  if (body._noBody) return;
  if (body.bodyUsed) {
    return Promise.reject(new TypeError("Already read"));
  }
  body.bodyUsed = true;
}
function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
  });
}
function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}
function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
  var encoding = match ? match[1] : "utf-8";
  reader.readAsText(blob, encoding);
  return promise;
}
function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);
  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }
  return chars.join("");
}
function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}
function Body() {
  this.bodyUsed = false;
  this._initBody = function(body) {
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;
    if (!body) {
      this._noBody = true;
      this._bodyText = "";
    } else if (typeof body === "string") {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer);
      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }
    if (!this.headers.get("content-type")) {
      if (typeof body === "string") {
        this.headers.set("content-type", "text/plain;charset=UTF-8");
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set("content-type", this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      }
    }
  };
  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }
      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error("could not read FormData body as blob");
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };
  }
  this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var isConsumed = consumed(this);
      if (isConsumed) {
        return isConsumed;
      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
        return Promise.resolve(
          this._bodyArrayBuffer.buffer.slice(
            this._bodyArrayBuffer.byteOffset,
            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
          )
        );
      } else {
        return Promise.resolve(this._bodyArrayBuffer);
      }
    } else if (support.blob) {
      return this.blob().then(readBlobAsArrayBuffer);
    } else {
      throw new Error("could not read as ArrayBuffer");
    }
  };
  this.text = function() {
    var rejected = consumed(this);
    if (rejected) {
      return rejected;
    }
    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error("could not read FormData body as text");
    } else {
      return Promise.resolve(this._bodyText);
    }
  };
  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode);
    };
  }
  this.json = function() {
    return this.text().then(JSON.parse);
  };
  return this;
}
var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  options = options || {};
  var body = options.body;
  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError("Already read");
    }
    this.url = input.url;
    this.credentials = input.credentials;
    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }
    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;
    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }
  this.credentials = options.credentials || this.credentials || "same-origin";
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }
  this.method = normalizeMethod(options.method || this.method || "GET");
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal || (function() {
    if ("AbortController" in g) {
      var ctrl = new AbortController();
      return ctrl.signal;
    }
  })();
  this.referrer = null;
  if ((this.method === "GET" || this.method === "HEAD") && body) {
    throw new TypeError("Body not allowed for GET or HEAD requests");
  }
  this._initBody(body);
  if (this.method === "GET" || this.method === "HEAD") {
    if (options.cache === "no-store" || options.cache === "no-cache") {
      var reParamSearch = /([?&])_=[^&]*/;
      if (reParamSearch.test(this.url)) {
        this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
      } else {
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
      }
    }
  }
}
Request.prototype.clone = function() {
  return new Request(this, { body: this._bodyInit });
};
function decode(body) {
  var form = new FormData();
  body.trim().split("&").forEach(function(bytes) {
    if (bytes) {
      var split = bytes.split("=");
      var name = split.shift().replace(/\+/g, " ");
      var value = split.join("=").replace(/\+/g, " ");
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}
function parseHeaders(rawHeaders) {
  var headers = new Headers();
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  preProcessedHeaders.split("\r").map(function(header) {
    return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
  }).forEach(function(line) {
    var parts = line.split(":");
    var key = parts.shift().trim();
    if (key) {
      var value = parts.join(":").trim();
      try {
        headers.append(key, value);
      } catch (error) {
        console.warn("Response " + error.message);
      }
    }
  });
  return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  if (!options) {
    options = {};
  }
  this.type = "default";
  this.status = options.status === void 0 ? 200 : options.status;
  if (this.status < 200 || this.status > 599) {
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  }
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
  this.headers = new Headers(options.headers);
  this.url = options.url || "";
  this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};
Response.error = function() {
  var response = new Response(null, { status: 200, statusText: "" });
  response.ok = false;
  response.status = 0;
  response.type = "error";
  return response;
};
var redirectStatuses = [301, 302, 303, 307, 308];
Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError("Invalid status code");
  }
  return new Response(null, { status, headers: { location: url } });
};
var DOMException = g.DOMException;
try {
  new DOMException();
} catch (err) {
  DOMException = function(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };
  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}
function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init);
    if (request.signal && request.signal.aborted) {
      return reject(new DOMException("Aborted", "AbortError"));
    }
    var xhr = new XMLHttpRequest();
    function abortXhr() {
      xhr.abort();
    }
    xhr.onload = function() {
      var options = {
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
      };
      if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
        options.status = 200;
      } else {
        options.status = xhr.status;
      }
      options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
      var body = "response" in xhr ? xhr.response : xhr.responseText;
      setTimeout(function() {
        resolve(new Response(body, options));
      }, 0);
    };
    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError("Network request failed"));
      }, 0);
    };
    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError("Network request timed out"));
      }, 0);
    };
    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException("Aborted", "AbortError"));
      }, 0);
    };
    function fixUrl(url) {
      try {
        return url === "" && g.location.href ? g.location.href : url;
      } catch (e) {
        return url;
      }
    }
    xhr.open(request.method, fixUrl(request.url), true);
    if (request.credentials === "include") {
      xhr.withCredentials = true;
    } else if (request.credentials === "omit") {
      xhr.withCredentials = false;
    }
    if ("responseType" in xhr) {
      if (support.blob) {
        xhr.responseType = "blob";
      } else if (support.arrayBuffer) {
        xhr.responseType = "arraybuffer";
      }
    }
    if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g.Headers && init.headers instanceof g.Headers)) {
      var names = [];
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        names.push(normalizeName(name));
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
      });
      request.headers.forEach(function(value, name) {
        if (names.indexOf(name) === -1) {
          xhr.setRequestHeader(name, value);
        }
      });
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });
    }
    if (request.signal) {
      request.signal.addEventListener("abort", abortXhr);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          request.signal.removeEventListener("abort", abortXhr);
        }
      };
    }
    xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
  });
}
fetch.polyfill = true;
if (!g.fetch) {
  g.fetch = fetch;
  g.Headers = Headers;
  g.Request = Request;
  g.Response = Response;
}


/***/ },

/***/ 572
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function() {
  "use strict";
  var hasOwn = {}.hasOwnProperty;
  function classNames() {
    var classes = "";
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg) {
        classes = appendClass(classes, parseValue(arg));
      }
    }
    return classes;
  }
  function parseValue(arg) {
    if (typeof arg === "string" || typeof arg === "number") {
      return arg;
    }
    if (typeof arg !== "object") {
      return "";
    }
    if (Array.isArray(arg)) {
      return classNames.apply(null, arg);
    }
    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
      return arg.toString();
    }
    var classes = "";
    for (var key in arg) {
      if (hasOwn.call(arg, key) && arg[key]) {
        classes = appendClass(classes, key);
      }
    }
    return classes;
  }
  function appendClass(value, newClass) {
    if (!newClass) {
      return value;
    }
    if (value) {
      return value + " " + newClass;
    }
    return value + newClass;
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})();


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/concatenation wrap */
/******/ 	// wrap a concatenated module body as a lazy, memoized accessor; mod is
/******/ 	// set before the body runs so re-entrant calls (require cycles) observe
/******/ 	// the partial exports like Node.js
/******/ 	__webpack_require__.cw = (body) => {
/******/ 		var mod;
/******/ 		return () => {
/******/ 			if (body) {
/******/ 				var fn = body;
/******/ 				body = 0;
/******/ 				mod = { exports: {} };
/******/ 				fn.call(mod.exports, mod, mod.exports);
/******/ 			}
/******/ 			return mod.exports;
/******/ 		};
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	__webpack_require__.nmd = (module) => {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// MODULE: ./node_modules/@ali/icbu-domain-transfer/lib/index.js
var lib_namespaceFn = /*#__PURE__*/__webpack_require__.cw(function(module, exports) {
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.Q = void 0;
function transferDomain(domain, customHost) {
  const host = customHost || location && location.hostname;
  if (host) {
    const suffixList = host.match(/alibaba\.(.*)/);
    if (suffixList && suffixList.length > 0) {
      return domain.replace("com", suffixList[1]);
    }
  }
  return domain;
}
exports.Q = transferDomain;

});

// MODULE: ./node_modules/cookie/index.js
var cookie_namespaceFn = /*#__PURE__*/__webpack_require__.cw(function(module, exports) {
var __webpack_unused_export__;

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
exports.q = parse;
__webpack_unused_export__ = serialize;
var decode = decodeURIComponent;
var encode = encodeURIComponent;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var pairs = str.split(";");
  var dec = opt.decode || decode;
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf("=");
    if (index < 0) {
      continue;
    }
    var key = pair.substring(0, index).trim();
    if (void 0 == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim();
      if (val[0] === '"') {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}

});

// MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs_namespaceFn = /*#__PURE__*/__webpack_require__.cw(function(module, exports) {

var reactIs = (react_is_namespaceFn());
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

});

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is_namespaceFn = () => {
	return __webpack_require__(539);
};

// NAMESPACE OBJECT (decoupled): ./node_modules/@ali/dataphant-core/es/controller/Hasher.js
var Hasher_namespaceObject = {};
__webpack_require__.r(Hasher_namespaceObject);
__webpack_require__.d(Hasher_namespaceObject, {
  MD5: () => (MD5),
  hashCode: () => (hashCode),
  murmurhash3: () => (murmurhash3)
});

;// external "React"
const external_React_namespaceObject = React;
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// external "ReactDOM"
const external_ReactDOM_namespaceObject = ReactDOM;
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_namespaceObject);
;// ./node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs
// src/index.ts
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time = raf.now() + ms;
  const cancel = () => {
    const i = timeouts.findIndex((t) => t.cancel == cancel);
    if (~i)
      timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };
  const timeout = { time, handler, cancel };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn(
      "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
    );
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t) => t.handler());
    pendingCount -= count;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each) {
  values.forEach((value) => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}
var __raf = (/* unused pure expression or super */ null && ({
  /** The number of pending tasks */
  count() {
    return pendingCount;
  },
  /** Whether there's a raf update loop running */
  isRunning() {
    return ts >= 0;
  },
  /** Clear internal state. Never call from update loop! */
  clear() {
    ts = -1;
    timeouts = [];
    onStartQueue = makeQueue();
    updateQueue = makeQueue();
    onFrameQueue = makeQueue();
    writeQueue = makeQueue();
    onFinishQueue = makeQueue();
    pendingCount = 0;
  }
}));

//# sourceMappingURL=react-spring_rafz.modern.mjs.map
;// ./node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs
/* unused harmony import specifier */ var raf3;
/* unused harmony import specifier */ var useRef;
/* unused harmony import specifier */ var useState3;
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/globals.ts
var globals_exports = {};
__export(globals_exports, {
  assign: () => react_spring_shared_modern_assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});


// src/helpers.ts
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
var react_spring_shared_modern_is = {
  arr: Array.isArray,
  obj: (a) => !!a && a.constructor.name === "Object",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0
};
function isEqual(a, b) {
  if (react_spring_shared_modern_is.arr(a)) {
    if (!react_spring_shared_modern_is.arr(b) || a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  return a === b;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (react_spring_shared_modern_is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
var toArray = (a) => react_spring_shared_modern_is.und(a) ? [] : react_spring_shared_modern_is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

// src/globals.ts
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var react_spring_shared_modern_assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};

// src/FrameLoop.ts

var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  );
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

// src/clamp.ts
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// src/colors.ts
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};

// src/colorMatchers.ts
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp(
  "hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
);
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

// src/normalizeColor.ts
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color] !== void 0) {
    return colors[color];
  }
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}

// src/colorToRgba.ts
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r = (int32Color & 4278190080) >>> 24;
  const g = (int32Color & 16711680) >>> 16;
  const b = (int32Color & 65280) >>> 8;
  const a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// src/createInterpolator.ts
var createInterpolator = (range, output, extrapolate) => {
  if (react_spring_shared_modern_is.fun(range)) {
    return range;
  }
  if (react_spring_shared_modern_is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (react_spring_shared_modern_is.str(range.output[0])) {
    return createStringInterpolator(range);
  }
  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || "extend";
  const extrapolateRight = config.extrapolateRight || config.extrapolate || "extend";
  const easing = config.easing || ((t) => t);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range2],
      inputRange[range2 + 1],
      outputRange[range2],
      outputRange[range2 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config.map
    );
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input)
      break;
  return i - 1;
}

// src/easings.ts
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};
var easings = {
  linear: (x) => x,
  easeInQuad: (x) => x * x,
  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
  easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: (x) => x * x * x,
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: (x) => x * x * x * x,
  easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: (x) => x * x * x * x * x,
  easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: (x) => Math.sin(x * Math.PI / 2),
  easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: (x) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: (x) => c3 * x * x * x - c1 * x * x,
  easeOutBack: (x) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: (x) => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: (x) => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x) => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2,
  steps
};

// src/fluids.ts
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
$get, $observers;
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

// src/regexs.ts
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

// src/variableToRgba.ts
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

// src/stringInterpolation.ts
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator2 = (config) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? (
      // match color names, ignore partial matches
      new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g")
    ) : (
      // never match
      /^\b$/
    );
  const output = config.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map(
    (_, i) => keyframes.map((values) => {
      if (!(i in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i];
    })
  );
  const interpolators = outputRanges.map(
    (output2) => createInterpolator({ ...config, output: output2 })
  );
  return (input) => {
    const missingUnit = !unitRegex.test(output[0]) && output.find((value) => unitRegex.test(value))?.replace(numberRegex, "");
    let i = 0;
    return output[0].replace(
      numberRegex,
      () => `${interpolators[i++](input)}${missingUnit || ""}`
    ).replace(rgbaRegex, rgbaRound);
  };
};

// src/deprecations.ts
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(
    `${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}

// src/isAnimatedString.ts
function isAnimatedString(value) {
  return react_spring_shared_modern_is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}

// src/dom-events/scroll/index.ts
;

// src/dom-events/resize/resizeElement.ts
var observer;
var resizeHandlers = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
var handleObservation = (entries) => entries.forEach(({ target, contentRect }) => {
  return resizeHandlers.get(target)?.forEach((handler) => handler(contentRect));
});
function resizeElement(handler, target) {
  if (!observer) {
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(handleObservation);
    }
  }
  let elementHandlers = resizeHandlers.get(target);
  if (!elementHandlers) {
    elementHandlers = /* @__PURE__ */ new Set();
    resizeHandlers.set(target, elementHandlers);
  }
  elementHandlers.add(handler);
  if (observer) {
    observer.observe(target);
  }
  return () => {
    const elementHandlers2 = resizeHandlers.get(target);
    if (!elementHandlers2)
      return;
    elementHandlers2.delete(handler);
    if (!elementHandlers2.size && observer) {
      observer.unobserve(target);
    }
  };
}

// src/dom-events/resize/resizeWindow.ts
var listeners = /* @__PURE__ */ (/* unused pure expression or super */ null && (new Set()));
var cleanupWindowResizeHandler;
var createResizeHandler = () => {
  const handleResize = () => {
    listeners.forEach(
      (callback) => callback({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
var resizeWindow = (callback) => {
  listeners.add(callback);
  if (!cleanupWindowResizeHandler) {
    cleanupWindowResizeHandler = createResizeHandler();
  }
  return () => {
    listeners.delete(callback);
    if (!listeners.size && cleanupWindowResizeHandler) {
      cleanupWindowResizeHandler();
      cleanupWindowResizeHandler = void 0;
    }
  };
};

// src/dom-events/resize/index.ts
var onResize = (callback, { container = document.documentElement } = {}) => {
  if (container === document.documentElement) {
    return resizeWindow(callback);
  } else {
    return resizeElement(callback, container);
  }
};

// src/progress.ts
var progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

// src/dom-events/scroll/ScrollHandler.ts
var SCROLL_KEYS = (/* unused pure expression or super */ null && ({
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}));
var ScrollHandler = class {
  constructor(callback, container) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    });
    this.updateAxis = (axisName) => {
      const axis = this.info[axisName];
      const { length, position } = SCROLL_KEYS[axisName];
      axis.current = this.container[`scroll${position}`];
      axis.scrollLength = this.container[`scroll${length}`] - this.container[`client${length}`];
      axis.progress = progress(0, axis.scrollLength, axis.current);
    };
    this.update = () => {
      this.updateAxis("x");
      this.updateAxis("y");
    };
    this.sendEvent = () => {
      this.callback(this.info);
    };
    this.advance = () => {
      this.update();
      this.sendEvent();
    };
    this.callback = callback;
    this.container = container;
    this.info = {
      time: 0,
      x: this.createAxis(),
      y: this.createAxis()
    };
  }
};

// src/dom-events/scroll/index.ts
var scrollListeners = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
var resizeListeners = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
var onScrollHandlers = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
var getTarget = (container) => container === document.documentElement ? window : container;
var onScroll = (callback, { container = document.documentElement } = {}) => {
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const containerHandler = new ScrollHandler(callback, container);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const listener = () => {
      containerHandlers?.forEach((handler) => handler.advance());
      return true;
    };
    scrollListeners.set(container, listener);
    const target = getTarget(container);
    window.addEventListener("resize", listener, { passive: true });
    if (container !== document.documentElement) {
      resizeListeners.set(container, onResize(listener, { container }));
    }
    target.addEventListener("scroll", listener, { passive: true });
  }
  const animateScroll = scrollListeners.get(container);
  raf3(animateScroll);
  return () => {
    raf3.cancel(animateScroll);
    const containerHandlers2 = onScrollHandlers.get(container);
    if (!containerHandlers2)
      return;
    containerHandlers2.delete(containerHandler);
    if (containerHandlers2.size)
      return;
    const listener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (listener) {
      getTarget(container).removeEventListener("scroll", listener);
      window.removeEventListener("resize", listener);
      resizeListeners.get(container)?.();
    }
  };
};

// src/hooks/useConstant.ts

function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// src/hooks/useForceUpdate.ts
;

// src/hooks/useIsMounted.ts


// src/hooks/useIsomorphicLayoutEffect.ts

var useIsomorphicLayoutEffect = isSSR() ? external_React_namespaceObject.useEffect : external_React_namespaceObject.useLayoutEffect;

// src/hooks/useIsMounted.ts
var useIsMounted = () => {
  const isMounted = (0,external_React_namespaceObject.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

// src/hooks/useForceUpdate.ts
function useForceUpdate() {
  const update = (0,external_React_namespaceObject.useState)()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update(Math.random());
    }
  };
}

// src/hooks/useMemoOne.ts
;
function useMemoOne(getResult, inputs) {
  const [initial] = (0,external_React_namespaceObject.useState)(
    () => ({
      inputs,
      result: getResult()
    })
  );
  const committed = (0,external_React_namespaceObject.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    );
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  ;(0,external_React_namespaceObject.useEffect)(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }
  return true;
}

// src/hooks/useOnce.ts
;
var useOnce = (effect) => (0,external_React_namespaceObject.useEffect)(effect, emptyDeps);
var emptyDeps = [];

// src/hooks/usePrev.ts

function usePrev(value) {
  const prevRef = (0,external_React_namespaceObject.useRef)();
  (0,external_React_namespaceObject.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

// src/hooks/useReducedMotion.ts
;
var useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState3(null);
  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion)");
    const handleMediaChange = (e) => {
      setReducedMotion(e.matches);
      react_spring_shared_modern_assign({
        skipAnimation: e.matches
      });
    };
    handleMediaChange(mql);
    if (mql.addEventListener) {
      mql.addEventListener("change", handleMediaChange);
    } else {
      mql.addListener(handleMediaChange);
    }
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleMediaChange);
      } else {
        mql.removeListener(handleMediaChange);
      }
    };
  }, []);
  return reducedMotion;
};

// src/index.ts


//# sourceMappingURL=react-spring_shared.modern.mjs.map
;// ./node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs
// src/Animated.ts

var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
};

// src/AnimatedValue.ts

var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (react_spring_shared_modern_is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (react_spring_shared_modern_is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const { done } = this;
    this.done = false;
    if (react_spring_shared_modern_is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};

// src/AnimatedString.ts

var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (react_spring_shared_modern_is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};

// src/AnimatedArray.ts


// src/AnimatedObject.ts


// src/context.ts
var TreeContext = { dependencies: null };

// src/AnimatedObject.ts
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};

// src/AnimatedArray.ts
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

// src/getAnimatedType.ts
;
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : react_spring_shared_modern_is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}

// src/createHost.ts
;

// src/withAnimated.tsx



var withAnimated = (Component, host) => {
  const hasInstance = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !react_spring_shared_modern_is.fun(Component) || Component.prototype && Component.prototype.isReactComponent
  );
  return (0,external_React_namespaceObject.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0,external_React_namespaceObject.useRef)(null);
    const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,external_React_namespaceObject.useCallback)(
      (value) => {
        instanceRef.current = updateRef(givenRef, value);
      },
      [givenRef]
    );
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = (0,external_React_namespaceObject.useRef)();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(
            observerRef.current.deps,
            (dep) => removeFluidObserver(dep, observerRef.current)
          );
          raf.cancel(observerRef.current.update);
        }
      };
    });
    (0,external_React_namespaceObject.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return /* @__PURE__ */ external_React_namespaceObject.createElement(Component, { ...usedProps, ref });
  });
};
var PropsObserver = class {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (react_spring_shared_modern_is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}

// src/createHost.ts
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues,
    createAnimatedStyle,
    getComponentProps
  };
  const animated = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (react_spring_shared_modern_is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (react_spring_shared_modern_is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated[key] = animated(Component);
  });
  return {
    animated
  };
};
var getDisplayName = (arg) => react_spring_shared_modern_is.str(arg) ? arg : arg && react_spring_shared_modern_is.str(arg.displayName) ? arg.displayName : react_spring_shared_modern_is.fun(arg) && arg.name || null;

//# sourceMappingURL=react-spring_animated.modern.mjs.map
;// ./node_modules/@react-spring/types/dist/react-spring_types.modern.mjs
// src/utils.ts
var Any = class {
};

//# sourceMappingURL=react-spring_types.modern.mjs.map
;// ./node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
/* unused harmony import specifier */ var react_spring_core_modern_useIsomorphicLayoutEffect;
/* unused harmony import specifier */ var react_spring_core_modern_each;
/* unused harmony import specifier */ var useState;
/* unused harmony import specifier */ var react_spring_core_modern_useConstant;
/* unused harmony import specifier */ var useOnce2;
/* unused harmony import specifier */ var is10;
/* unused harmony import specifier */ var useIsomorphicLayoutEffect3;
/* unused harmony import specifier */ var each6;
/* unused harmony import specifier */ var React2;
/* unused harmony import specifier */ var useMemo2;
/* unused harmony import specifier */ var useRef2;
/* unused harmony import specifier */ var useContext3;
/* unused harmony import specifier */ var is11;
/* unused harmony import specifier */ var toArray4;
/* unused harmony import specifier */ var useIsomorphicLayoutEffect4;
/* unused harmony import specifier */ var useOnce3;
/* unused harmony import specifier */ var each7;
/* unused harmony import specifier */ var useForceUpdate2;
/* unused harmony import specifier */ var usePrev2;
/* unused harmony import specifier */ var useIsomorphicLayoutEffect5;
/* unused harmony import specifier */ var react_spring_core_modern_onScroll;
/* unused harmony import specifier */ var each8;
/* unused harmony import specifier */ var useIsomorphicLayoutEffect6;
/* unused harmony import specifier */ var react_spring_core_modern_onResize;
/* unused harmony import specifier */ var each9;
/* unused harmony import specifier */ var useState2;
/* unused harmony import specifier */ var useRef3;
/* unused harmony import specifier */ var is12;
/* unused harmony import specifier */ var useIsomorphicLayoutEffect7;
/* unused harmony import specifier */ var is13;
/* unused harmony import specifier */ var deprecateInterpolate2;
// src/hooks/useChain.ts


// src/helpers.ts

function callProp(value, ...args) {
  return react_spring_shared_modern_is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (react_spring_shared_modern_is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => react_spring_shared_modern_is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var react_spring_core_modern_getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!react_spring_shared_modern_is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to2 = getForwardProps(props);
  if (to2) {
    const out = { to: to2 };
    eachProp(props, (val, key) => key in to2 || (out[key] = val));
    return out;
  }
  return { ...props };
}
function computeGoal(value) {
  value = getFluidValue(value);
  return react_spring_shared_modern_is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals_exports.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return react_spring_shared_modern_is.fun(to2) || react_spring_shared_modern_is.arr(to2) && react_spring_shared_modern_is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  ctrl.ref?.delete(ctrl);
  ref?.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    ctrl.ref?.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

// src/hooks/useChain.ts
function useChain(refs, timeSteps, timeFrame = 1e3) {
  react_spring_core_modern_useIsomorphicLayoutEffect(() => {
    if (timeSteps) {
      let prevDelay = 0;
      react_spring_core_modern_each(refs, (ref, i) => {
        const controllers = ref.current;
        if (controllers.length) {
          let delay = timeFrame * timeSteps[i];
          if (isNaN(delay))
            delay = prevDelay;
          else
            prevDelay = delay;
          react_spring_core_modern_each(controllers, (ctrl) => {
            react_spring_core_modern_each(ctrl.queue, (props) => {
              const memoizedDelayProp = props.delay;
              props.delay = (key) => delay + callProp(memoizedDelayProp || 0, key);
            });
          });
          ref.start();
        }
      });
    } else {
      let p = Promise.resolve();
      react_spring_core_modern_each(refs, (ref) => {
        const controllers = ref.current;
        if (controllers.length) {
          const queues = controllers.map((ctrl) => {
            const q = ctrl.queue;
            ctrl.queue = [];
            return q;
          });
          p = p.then(() => {
            react_spring_core_modern_each(
              controllers,
              (ctrl, i) => react_spring_core_modern_each(queues[i] || [], (update2) => ctrl.queue.push(update2))
            );
            return Promise.all(ref.start());
          });
        }
      });
    }
  });
}

// src/hooks/useSpring.ts
;

// src/hooks/useSprings.ts



// src/SpringValue.ts



// src/AnimationConfig.ts


// src/constants.ts
var config = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
};

// src/AnimationConfig.ts
var defaults = {
  ...config.default,
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
};
var AnimationConfig = class {
  constructor() {
    /**
     * The initial velocity of one or more values.
     *
     * @default 0
     */
    this.velocity = 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = { ...defaultConfig };
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = { ...defaultConfig, ...newConfig };
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let { frequency, damping } = config2;
  const { mass } = config2;
  if (!react_spring_shared_modern_is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!react_spring_shared_modern_is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !react_spring_shared_modern_is.und(props.tension) || !react_spring_shared_modern_is.und(props.friction);
    if (isTensionConfig || !react_spring_shared_modern_is.und(props.frequency) || !react_spring_shared_modern_is.und(props.damping) || !react_spring_shared_modern_is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}

// src/Animation.ts
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};

// src/scheduleProps.ts

function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
  return new Promise((resolve, reject) => {
    let delay;
    let timeout;
    let cancel = matchProp(props.cancel ?? defaultProps?.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!react_spring_shared_modern_is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps?.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals_exports.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start({ ...props, callId, cancel }, resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

// src/runAsync.ts
;

// src/AnimationResult.ts
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(
  target.get(),
  results.every((result) => result.finished)
);
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});

// src/runAsync.ts
function runAsync(to2, props, state, target) {
  const { callId, parentId, onRest } = props;
  const { asyncTo: prevTo, promise: prevPromise } = state;
  if (!parentId && to2 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to2;
    const defaultProps = react_spring_core_modern_getDefaultProps(
      props,
      (value, key) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        key === "onRest" ? void 0 : value
      )
    );
    let preventBail;
    let bail;
    const bailPromise = new Promise(
      (resolve, reject) => (preventBail = resolve, bail = reject)
    );
    const bailIfEnded = (bailSignal) => {
      const bailResult = (
        // The `cancel` prop or `stop` method was used.
        callId <= (state.cancelId || 0) && getCancelledResult(target) || // The async `to` prop was replaced.
        callId !== state.asyncId && getFinishedResult(target, false)
      );
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals_exports.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = react_spring_shared_modern_is.obj(arg1) ? { ...arg1 } : { ...arg2, to: arg1 };
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (react_spring_shared_modern_is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals_exports.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (react_spring_shared_modern_is.arr(to2)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to2);
      } else {
        animating = Promise.resolve(to2(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (react_spring_shared_modern_is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t) => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
};

// src/FrameValue.ts


var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;
      this._onPriorityChange(priority);
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority
    });
  }
};

// src/SpringPhase.ts
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

// src/SpringValue.ts
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    /** The animation state */
    this.animation = new Animation();
    /** Some props have customizable default values */
    this.defaultProps = {};
    /** The state for `runAsync` calls */
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    /** The promise resolvers of pending `start` calls */
    this._pendingCalls = /* @__PURE__ */ new Set();
    /** The counter for tracking `scheduleProps` calls */
    this._lastCallId = 0;
    /** The last `scheduleProps` call that changed the `to` prop */
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!react_spring_shared_modern_is.und(arg1) || !react_spring_shared_modern_is.und(arg2)) {
      const props = react_spring_shared_modern_is.obj(arg1) ? { ...arg1 } : { ...arg2, from: arg1 };
      if (react_spring_shared_modern_is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return hasAnimated(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return isAnimating(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return isPaused(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let { toValues } = anim;
    const { config: config2 } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i) => {
      if (node2.done)
        return;
      const to2 = (
        // Animated strings always go from 0 to 1.
        node2.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i]
      );
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = react_spring_shared_modern_is.arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
        let velocity;
        const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
        if (!react_spring_shared_modern_is.und(config2.duration)) {
          let p = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node2.durationProgress = p;
          }
          position = from + config2.easing(p) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !react_spring_shared_modern_is.und(bounceFactor);
          const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to2 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to2 || position > to2 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to2;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to2);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  /** Set the current value, while stopping the current animation */
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: true });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: false });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (isAnimating(this)) {
      const { to: to2, config: config2 } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to2, false);
        }
        this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to2, arg2) {
    let queue;
    if (!react_spring_shared_modern_is.und(to2)) {
      queue = [react_spring_shared_modern_is.obj(to2) ? to2 : { ...arg2, to: to2 }];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(
      queue.map((props) => {
        const up = this._update(props);
        return up;
      })
    ).then((results) => getCombinedResult(this, results));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(cancel) {
    const { to: to2 } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to2, cancel));
    return this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: true });
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(props) {
    const key = this.key || "";
    let { to: to2, from } = props;
    to2 = react_spring_shared_modern_is.obj(to2) ? to2[key] : to2;
    if (to2 == null || isAsyncTo(to2)) {
      to2 = void 0;
    }
    from = react_spring_shared_modern_is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = { to: to2, from };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to2, from] = [from, to2];
      from = getFluidValue(from);
      if (!react_spring_shared_modern_is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to2);
      }
    }
    return range;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...props }, isLoop) {
    const { key, defaultProps } = this;
    if (props.default)
      Object.assign(
        defaultProps,
        react_spring_core_modern_getDefaultProps(
          props,
          (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value
        )
      );
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(
              this,
              "onPause",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(
              this,
              "onResume",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  /** Merge props into the current animation */
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !react_spring_shared_modern_is.und(range.to);
    const hasFromProp = !react_spring_shared_modern_is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const { key, defaultProps, animation: anim } = this;
    const { to: prevTo, from: prevFrom } = anim;
    let { to: to2 = prevTo, from = prevFrom } = range;
    if (hasFromProp && !hasToProp && (!props.default || react_spring_shared_modern_is.und(to2))) {
      to2 = from;
    }
    if (props.reverse)
      [to2, from] = [from, to2];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to2, prevTo);
    if (hasToChanged) {
      this._focus(to2);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const { config: config2 } = anim;
    const { decay, velocity } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(
        config2,
        callProp(props.config, key),
        // Avoid calling the same "config" prop twice.
        props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0
      );
    }
    let node = getAnimated(this);
    if (!node || react_spring_shared_modern_is.und(to2)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      react_spring_shared_modern_is.und(props.reset) ? hasFromProp && !props.default : !react_spring_shared_modern_is.und(from) && matchProp(props.reset, key)
    );
    const value = reset ? from : this.get();
    const goal = computeGoal(to2);
    const isAnimatable = react_spring_shared_modern_is.num(goal) || react_spring_shared_modern_is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to2);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(
            `Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`
          );
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to2);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const { onRest } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest?.(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart?.(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority = 0;
    const { to: to2 } = this.animation;
    if (hasFluidValue(to2)) {
      addFluidObserver(to2, this);
      if (isFrameValue(to2)) {
        priority = to2.priority + 1;
      }
    }
    this.priority = priority;
  }
  _detach() {
    const { to: to2 } = this.animation;
    if (hasFluidValue(to2)) {
      removeFluidObserver(to2, this);
    }
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!react_spring_shared_modern_is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(
        this,
        "onStart",
        getFinishedResult(this, checkFinished(this, anim.to)),
        this
      );
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals_exports.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to2) {
  const goal = computeGoal(to2);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop = props.loop, to2 = props.to) {
  const loopRet = callProp(loop);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate({
      ...props,
      loop,
      // Avoid updating default props when looping.
      default: false,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !reverse || isAsyncTo(to2) ? to2 : void 0,
      // Ignore the "from" prop except on reset.
      from: reset ? props.from : void 0,
      reset,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...overrides
    });
  }
}
function createUpdate(props) {
  const { to: to2, from } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (react_spring_shared_modern_is.obj(to2))
    findDefined(to2, keys);
  if (react_spring_shared_modern_is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update2 = createUpdate(props);
  if (react_spring_shared_modern_is.und(update2.default)) {
    update2.default = react_spring_core_modern_getDefaultProps(update2);
  }
  return update2;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  target.animation[type]?.(...args);
  target.defaultProps[type]?.(...args);
}

// src/Controller.ts
;
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId2 = 1;
var Controller = class {
  constructor(props, flush3) {
    this.id = nextId2++;
    /** The animated values */
    this.springs = {};
    /** The queue of props passed to the `update` method. */
    this.queue = [];
    /** The counter for tracking `scheduleProps` calls */
    this._lastAsyncId = 0;
    /** The values currently being animated */
    this._active = /* @__PURE__ */ new Set();
    /** The values that changed recently */
    this._changed = /* @__PURE__ */ new Set();
    /** Equals false when `onStart` listeners can be called */
    this._started = false;
    /** State used by the `runAsync` function */
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    /** The event queues that are flushed once per frame maximum */
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush3) {
      this._flush = flush3;
    }
    if (props) {
      this.start({ default: true, ...props });
    }
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  /** Get the current values of our springs */
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  /** Set the current values without animating. */
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!react_spring_shared_modern_is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  /** Push an update onto the queue of each value. */
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(props) {
    let { queue } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  /** @internal */
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  /** Freeze the active animation in time */
  pause(keys) {
    if (react_spring_shared_modern_is.und(keys)) {
      this.start({ pause: true });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(keys) {
    if (react_spring_shared_modern_is.und(keys)) {
      this.start({ pause: false });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart, onChange, onRest } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then(
    (results) => getCombinedResult(ctrl, results)
  );
}
async function flushUpdate(ctrl, props, isLoop) {
  const { keys, to: to2, from, loop, onRest, onResolve } = props;
  const defaults2 = react_spring_shared_modern_is.obj(props.default) && props.default;
  if (loop) {
    props.loop = false;
  }
  if (to2 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = react_spring_shared_modern_is.arr(to2) || react_spring_shared_modern_is.fun(to2) ? to2 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (react_spring_shared_modern_is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({ finished, cancelled }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map(
    (key) => ctrl.springs[key].start(props)
  );
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(
      scheduleProps(++ctrl["_lastAsyncId"], {
        props,
        state,
        actions: {
          pause: noop,
          resume: noop,
          start(props2, resolve) {
            if (cancel) {
              stopAsync(state, ctrl["_lastAsyncId"]);
              resolve(getCancelledResult(ctrl));
            } else {
              props2.onRest = onRest;
              resolve(
                runAsync(
                  asyncTo,
                  props2,
                  state,
                  ctrl
                )
              );
            }
          }
        }
      })
    );
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to2);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = { ...ctrl.springs };
  if (props) {
    each(toArray(props), (props2) => {
      if (react_spring_shared_modern_is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!react_spring_shared_modern_is.obj(props2.to)) {
        props2 = { ...props2, to: void 0 };
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}

// src/SpringContext.tsx
;


var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = (0,external_React_namespaceObject.useContext)(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
  const { Provider } = ctx;
  return /* @__PURE__ */ external_React_namespaceObject.createElement(Provider, { value: props }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, external_React_namespaceObject.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

// src/SpringRef.ts
;
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (react_spring_shared_modern_is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = _getProps(props, ctrl, i);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i = current.indexOf(ctrl);
    if (~i)
      current.splice(i, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl, i) => {
      const update2 = react_spring_shared_modern_is.fun(values) ? values(i, ctrl) : values;
      if (update2) {
        ctrl.set(update2);
      }
    });
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i) => {
      if (react_spring_shared_modern_is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = this._getProps(props, ctrl, i);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };
  const _getProps = function(arg, ctrl, index) {
    return react_spring_shared_modern_is.fun(arg) ? arg(index, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};

// src/hooks/useSprings.ts
function useSprings(length, props, deps) {
  const propsFn = react_spring_shared_modern_is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = (0,external_React_namespaceObject.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const layoutId = (0,external_React_namespaceObject.useRef)(0);
  const forceUpdate = useForceUpdate();
  const state = (0,external_React_namespaceObject.useMemo)(
    () => ({
      ctrls: [],
      queue: [],
      flush(ctrl, updates2) {
        const springs2 = getSprings(ctrl, updates2);
        const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
        return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
          setSprings(ctrl, springs2);
          state.queue.push(() => {
            resolve(flushUpdateQueue(ctrl, updates2));
          });
          forceUpdate();
        });
      }
    }),
    []
  );
  const ctrls = (0,external_React_namespaceObject.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  (0,external_React_namespaceObject.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0,external_React_namespaceObject.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update2 = propsFn ? propsFn(i, ctrl) : props[i];
      if (update2) {
        updates[i] = declareUpdate(update2);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = (0,external_React_namespaceObject.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const { queue } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i) => {
      ref?.add(ctrl);
      if (hasContext) {
        ctrl.start({ default: context });
      }
      const update2 = updates[i];
      if (update2) {
        replaceRef(ctrl, update2.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update2);
        } else {
          ctrl.start(update2);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x) => ({ ...x }));
  return ref ? [values, ref] : values;
}

// src/hooks/useSpring.ts
function useSpring(props, deps) {
  const isFn = react_spring_shared_modern_is.fun(props);
  const [[values], ref] = useSprings(
    1,
    isFn ? props : [props],
    isFn ? deps || [] : deps
  );
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

// src/hooks/useSpringRef.ts
;
var initSpringRef = () => SpringRef();
var useSpringRef = () => useState(initSpringRef)[0];

// src/hooks/useSpringValue.ts

var useSpringValue = (initial, props) => {
  const springValue = react_spring_core_modern_useConstant(() => new SpringValue(initial, props));
  useOnce2(() => () => {
    springValue.stop();
  });
  return springValue;
};

// src/hooks/useTrail.ts

function useTrail(length, propsArg, deps) {
  const propsFn = is10.fun(propsArg) && propsArg;
  if (propsFn && !deps)
    deps = [];
  let reverse = true;
  let passedRef = void 0;
  const result = useSprings(
    length,
    (i, ctrl) => {
      const props = propsFn ? propsFn(i, ctrl) : propsArg;
      passedRef = props.ref;
      reverse = reverse && props.reverse;
      return props;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    deps || [{}]
  );
  useIsomorphicLayoutEffect3(() => {
    each6(result[1].current, (ctrl, i) => {
      const parent = result[1].current[i + (reverse ? 1 : -1)];
      replaceRef(ctrl, passedRef);
      if (ctrl.ref) {
        if (parent) {
          ctrl.update({ to: parent.springs });
        }
        return;
      }
      if (parent) {
        ctrl.start({ to: parent.springs });
      } else {
        ctrl.start();
      }
    });
  }, deps);
  if (propsFn || arguments.length == 3) {
    const ref = passedRef ?? result[1];
    ref["_getProps"] = (propsArg2, ctrl, i) => {
      const props = is10.fun(propsArg2) ? propsArg2(i, ctrl) : propsArg2;
      if (props) {
        const parent = ref.current[i + (props.reverse ? 1 : -1)];
        if (parent)
          props.to = parent.springs;
        return props;
      }
    };
    return result;
  }
  return result[0];
}

// src/hooks/useTransition.tsx
;


function useTransition(data, props, deps) {
  const propsFn = is11.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = useMemo2(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const items = toArray4(data);
  const transitions = [];
  const usedTransitions = useRef2(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useIsomorphicLayoutEffect4(() => {
    usedTransitions.current = transitions;
  });
  useOnce3(() => {
    each7(transitions, (t) => {
      ref?.add(t.ctrl);
      t.ctrl.ref = ref;
    });
    return () => {
      each7(usedTransitions.current, (t) => {
        if (t.expired) {
          clearTimeout(t.expirationId);
        }
        detachRefs(t.ctrl, ref);
        t.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useIsomorphicLayoutEffect4(
    () => each7(expired, ({ ctrl, item, key }) => {
      detachRefs(ctrl, ref);
      callProp(onDestroyed, item, key);
    })
  );
  const reused = [];
  if (prevTransitions)
    each7(prevTransitions, (t, i) => {
      if (t.expired) {
        clearTimeout(t.expirationId);
        expired.push(t);
      } else {
        i = reused[i] = keys.indexOf(t.key);
        if (~i)
          transitions[i] = t;
      }
    });
  each7(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: "mount" /* MOUNT */,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i = -1;
    const { leave } = propsFn ? propsFn() : props;
    each7(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];
      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = { ...t, item: items[keyIndex] };
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }
  if (is11.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate2();
  const defaultProps = react_spring_core_modern_getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = useRef2(/* @__PURE__ */ new Map());
  const forceChange = useRef2(false);
  each7(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to2;
    let phase;
    const propsDelay = callProp(p.delay || 0, key);
    if (prevPhase == "mount" /* MOUNT */) {
      to2 = p.enter;
      phase = "enter" /* ENTER */;
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != "leave" /* LEAVE */) {
        if (isLeave) {
          to2 = p.leave;
          phase = "leave" /* LEAVE */;
        } else if (to2 = p.update) {
          phase = "update" /* UPDATE */;
        } else
          return;
      } else if (!isLeave) {
        to2 = p.enter;
        phase = "enter" /* ENTER */;
      } else
        return;
    }
    to2 = callProp(to2, t.item, i);
    to2 = is11.obj(to2) ? inferTo(to2) : { to: to2 };
    if (!to2.config) {
      const config2 = propsConfig || defaultProps.config;
      to2.config = callProp(config2, t.item, i, phase);
    }
    delay += trail;
    const payload = {
      ...defaultProps,
      // we need to add our props.delay value you here.
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      // This prevents implied resets.
      reset: false,
      // Merge any phase-specific props.
      ...to2
    };
    if (phase == "enter" /* ENTER */ && is11.und(payload.from)) {
      const p2 = propsFn ? propsFn() : props;
      const from = is11.und(p2.initial) || prevTransitions ? p2.from : p2.initial;
      payload.from = callProp(from, t.item, i);
    }
    const { onResolve } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t2 = transitions2.find((t3) => t3.key === key);
      if (!t2)
        return;
      if (result.cancelled && t2.phase != "update" /* UPDATE */) {
        return;
      }
      if (t2.ctrl.idle) {
        const idle = transitions2.every((t3) => t3.ctrl.idle);
        if (t2.phase == "leave" /* LEAVE */) {
          const expiry = callProp(expires, t2.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t2.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t2.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t3) => t3.expired)) {
          exitingTransitions.current.delete(t2);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t.ctrl, payload);
    if (phase === "leave" /* LEAVE */ && exitBeforeEnter) {
      exitingTransitions.current.set(t, { phase, springs, payload });
    } else {
      changes.set(t, { phase, springs, payload });
    }
  });
  const context = useContext3(SpringContext);
  const prevContext = usePrev2(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect4(() => {
    if (hasContext) {
      each7(transitions, (t) => {
        t.ctrl.start({ default: context });
      });
    }
  }, [context]);
  each7(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  useIsomorphicLayoutEffect4(
    () => {
      each7(
        exitingTransitions.current.size ? exitingTransitions.current : changes,
        ({ phase, payload }, t) => {
          const { ctrl } = t;
          t.phase = phase;
          ref?.add(ctrl);
          if (hasContext && phase == "enter" /* ENTER */) {
            ctrl.start({ default: context });
          }
          if (payload) {
            replaceRef(ctrl, payload.ref);
            if ((ctrl.ref || ref) && !forceChange.current) {
              ctrl.update(payload);
            } else {
              ctrl.start(payload);
              if (forceChange.current) {
                forceChange.current = false;
              }
            }
          }
        }
      );
    },
    reset ? void 0 : deps
  );
  const renderTransitions = (render) => /* @__PURE__ */ React2.createElement(React2.Fragment, null, transitions.map((t, i) => {
    const { springs } = changes.get(t) || t.ctrl;
    const elem = render({ ...springs }, t.item, t, i);
    return elem && elem.type ? /* @__PURE__ */ React2.createElement(
      elem.type,
      {
        ...elem.props,
        key: is11.str(t.key) || is11.num(t.key) ? t.key : t.ctrl.id,
        ref: elem.ref
      }
    ) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t = prevTransitions && prevTransitions.find(
        (t2) => t2.item === item && t2.phase !== "leave" /* LEAVE */ && !reused.has(t2)
      );
      if (t) {
        reused.add(t);
        return t.key;
      }
      return nextKey++;
    });
  }
  return is11.und(keys) ? items : is11.fun(keys) ? items.map(keys) : toArray4(keys);
}

// src/hooks/useScroll.ts
;
var useScroll = ({
  container,
  ...springOptions
} = {}) => {
  const [scrollValues, api] = useSpring(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...springOptions
    }),
    []
  );
  useIsomorphicLayoutEffect5(() => {
    const cleanupScroll = react_spring_core_modern_onScroll(
      ({ x, y }) => {
        api.start({
          scrollX: x.current,
          scrollXProgress: x.progress,
          scrollY: y.current,
          scrollYProgress: y.progress
        });
      },
      { container: container?.current || void 0 }
    );
    return () => {
      each8(Object.values(scrollValues), (value) => value.stop());
      cleanupScroll();
    };
  }, []);
  return scrollValues;
};

// src/hooks/useResize.ts

var useResize = ({
  container,
  ...springOptions
}) => {
  const [sizeValues, api] = useSpring(
    () => ({
      width: 0,
      height: 0,
      ...springOptions
    }),
    []
  );
  useIsomorphicLayoutEffect6(() => {
    const cleanupScroll = react_spring_core_modern_onResize(
      ({ width, height }) => {
        api.start({
          width,
          height,
          immediate: sizeValues.width.get() === 0 || sizeValues.height.get() === 0
        });
      },
      { container: container?.current || void 0 }
    );
    return () => {
      each9(Object.values(sizeValues), (value) => value.stop());
      cleanupScroll();
    };
  }, []);
  return sizeValues;
};

// src/hooks/useInView.ts


var defaultThresholdOptions = (/* unused pure expression or super */ null && ({
  any: 0,
  all: 1
}));
function useInView(props, args) {
  const [isInView, setIsInView] = useState2(false);
  const ref = useRef3();
  const propsFn = is12.fun(props) && props;
  const springsProps = propsFn ? propsFn() : {};
  const { to: to2 = {}, from = {}, ...restSpringProps } = springsProps;
  const intersectionArguments = propsFn ? args : props;
  const [springs, api] = useSpring(() => ({ from, ...restSpringProps }), []);
  useIsomorphicLayoutEffect7(() => {
    const element = ref.current;
    const {
      root,
      once,
      amount = "any",
      ...restArgs
    } = intersectionArguments ?? {};
    if (!element || once && isInView || typeof IntersectionObserver === "undefined")
      return;
    const activeIntersections = /* @__PURE__ */ new WeakMap();
    const onEnter = () => {
      if (to2) {
        api.start(to2);
      }
      setIsInView(true);
      const cleanup = () => {
        if (from) {
          api.start(from);
        }
        setIsInView(false);
      };
      return once ? void 0 : cleanup;
    };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const onLeave = activeIntersections.get(entry.target);
        if (entry.isIntersecting === Boolean(onLeave)) {
          return;
        }
        if (entry.isIntersecting) {
          const newOnLeave = onEnter();
          if (is12.fun(newOnLeave)) {
            activeIntersections.set(entry.target, newOnLeave);
          } else {
            observer.unobserve(entry.target);
          }
        } else if (onLeave) {
          onLeave();
          activeIntersections.delete(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: root && root.current || void 0,
      threshold: typeof amount === "number" || Array.isArray(amount) ? amount : defaultThresholdOptions[amount],
      ...restArgs
    });
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [intersectionArguments]);
  if (propsFn) {
    return [ref, springs];
  }
  return [ref, isInView];
}

// src/components/Spring.tsx
function Spring({ children, ...props }) {
  return children(useSpring(props));
}

// src/components/Trail.tsx
;
function Trail({
  items,
  children,
  ...props
}) {
  const trails = useTrail(items.length, props);
  return items.map((item, index) => {
    const result = children(item, index);
    return is13.fun(result) ? result(trails[index]) : result;
  });
}

// src/components/Transition.tsx
function Transition({
  items,
  children,
  ...props
}) {
  return useTransition(items, props)(children);
}

// src/interpolate.ts
;

// src/Interpolation.ts


var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    /** Equals false when in the frameloop */
    this.idle = true;
    /** The inputs which are currently animating */
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = react_spring_shared_modern_is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;
    this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce(
        (highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      );
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}

// src/interpolate.ts
var react_spring_core_modern_to = (source, ...args) => new Interpolation(source, args);
var react_spring_core_modern_interpolate = (source, ...args) => (deprecateInterpolate2(), new Interpolation(source, args));

// src/globals.ts

globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});
var react_spring_core_modern_update = frameLoop.advance;

// src/index.ts



//# sourceMappingURL=react-spring_core.modern.mjs.map
;// ./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
// src/index.ts





// src/applyAnimatedValues.ts
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const {
    className,
    style,
    children,
    scrollTop,
    scrollLeft,
    viewBox,
    ...attributes
  } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(
    (name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (n) => "-" + n.toLowerCase()
    ))
  );
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });
  if (className !== void 0) {
    instance.className = className;
  }
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix) => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

// src/AnimatedStyle.ts


var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => react_spring_shared_modern_is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id) => react_spring_shared_modern_is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : react_spring_shared_modern_is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x, y, z, ...style }) {
    const inputs = [];
    const transforms = [];
    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`,
        // prettier-ignore
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (react_spring_shared_modern_is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(
          key === "rotate3d" ? ([x2, y2, z2, deg]) => [
            `rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`,
            isValueIdentity(deg, 0)
          ] : (input) => [
            `${key}(${input.map((v) => addUnit(v, unit)).join(",")})`,
            isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity = true;
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](
        react_spring_shared_modern_is.arr(arg1) ? arg1 : input.map(getFluidValue)
      );
      transform += " " + t;
      identity = identity && id;
    });
    return identity ? "none" : transform;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count) {
    if (count == 1)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count) {
    if (count == 0)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      );
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};

// src/primitives.ts
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];

// src/index.ts

globals_exports.assign({
  batchedUpdates: external_ReactDOM_namespaceObject.unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var react_spring_web_modern_host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
var animated = react_spring_web_modern_host.animated;

//# sourceMappingURL=react-spring_web.modern.mjs.map
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(572);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/fetch-jsonp/build/fetch-jsonp.js
var fetch_jsonp = __webpack_require__(548);
var fetch_jsonp_default = /*#__PURE__*/__webpack_require__.n(fetch_jsonp);
;// ./package.json
const package_namespaceObject = {"rE":"5.22.0"};
;// ./src/header/context/HeaderContext.tsx


const headerContext = (0,external_React_namespaceObject.createContext)(null);

;// ./src/header/context/useHeaderData.ts



const useHeaderData = () => {
  return (0,external_React_namespaceObject.useContext)(headerContext);
};

;// ./src/features/sub-header/config/defaultSubHeaderConfig.ts

const defaultSubHeaderConfig = {
  tradeAssurance: {
    tradeLogo: "https://s.alicdn.com/@img/imgextra/i2/O1CN01d18R1Z1H1GuiHHzpS_!!6000000000697-55-tps-212-32.svg",
    tradeDesc: "sctnh.search_ta_supplier_filter_description",
    tradeUrl: "https://tradeassurance.alibaba.com/?tracelog=PC_header_landingpage",
    tradeLearnMoreText: "sctnh.header_signin_37",
    cardList: [
      {
        key: "Safe & easy payments",
        i18nKey: "sctnh.header_signin_33",
        link: "https://tradeassurance.alibaba.com/ta/Payment.htm?tracelog=PC_header_payment",
        icon: "https://s.alicdn.com/@img/imgextra/i4/O1CN010KADAP2638vcOIcv4_!!6000000007605-55-tps-70-70.svg",
        tnhKey: "Safe & easy payments"
      },
      {
        key: "Money-back policy",
        i18nKey: "sctnh.header_signin_34",
        link: "https://tradeassurance.alibaba.com/ta/MoneyBackPolicy.htm?tracelog=PC_header_mb",
        icon: "https://s.alicdn.com/@img/imgextra/i3/O1CN01viHX2926YHrS5jYvf_!!6000000007673-55-tps-70-70.svg",
        tnhKey: "Money-back policy"
      },
      {
        key: "Shipping & logistics services",
        i18nKey: "sctnh.header_signin_35",
        link: "https://tradeassurance.alibaba.com/ta/ShippingAndLogistics.htm?tracelog=PC_header_shipping",
        icon: "https://s.alicdn.com/@img/imgextra/i2/O1CN01Zsnn5f28yyAQPbYyz_!!6000000008002-55-tps-70-70.svg",
        tnhKey: "Shipping & logistics services"
      },
      {
        key: "After-sales protections",
        i18nKey: "sctnh.header_signin_36",
        link: "https://tradeassurance.alibaba.com/ta/AfterSales.htm?tracelog=PC_header_Aftersales",
        icon: "https://s.alicdn.com/@img/imgextra/i4/O1CN01hoxDoj1HV2eSjAU58_!!6000000000762-55-tps-70-70.svg",
        tnhKey: "After-sales protections"
      }
    ]
  },
  whyAlibaba: {
    cardList: [
      {
        key: "About Alibaba.com",
        i18nKey: "sctnh.header_whychooseali",
        descI18nKey: "sctnh.header_learnsolutions",
        link: "https://about.alibaba.com/?spm=a2700.product_home_fy25.home_header.49.2ce267afZy6CW5",
        image: "https://img.alicdn.com/imgextra/i3/O1CN01J3VgOw1tPVYoe3bAU_!!6000000005894-0-tps-1518-360.jpg"
      },
      {
        key: "CoCreate Pitch",
        i18nKey: "sctnh.header_cocreate",
        descI18nKey: "sctnh.header_Takepool",
        link: "https://about.alibaba.com/cocreatepitch?spm=a2700.product_home_fy25.home_header.51.2ce267afZy6CW5",
        image: "https://img.alicdn.com/imgextra/i1/O1CN01ByGrWI1G1RjnWEc7W_!!6000000000562-0-tps-1518-360.jpg"
      }
    ]
  },
  getApp: {
    title: "sctnh.header_signin_69",
    content: "sctnh.header_signin_70",
    appStore: {
      url: "https://itunes.apple.com/us/app/alibaba-for-iphone/id503451073",
      icon: "https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png"
    },
    googleStore: {
      url: "https://play.google.com/store/apps/details?id=com.alibaba.intl.android.apps.poseidon&referrer=pcmaindownload",
      icon: "https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png"
    },
    installQrIcon: "https://s.alicdn.com/@img/tfs/TB1vMlnX21TBuNjy0FjXXajyXXa-280-280.png"
  },
  helpCenter: [
    {
      key: "Buyer Center",
      i18nKey: "sctnh.header_signin_62",
      text: "For buyers",
      url: "https://helpcenter.alibaba.com/s/buyer"
    },
    {
      key: "Report IPR infringement",
      i18nKey: "sctnh.header_signin_65",
      url: "https://ipp.aidcgroup.net/#/ippHome"
    },
    {
      key: "Refunds",
      i18nKey: "sctnh.header_refunds",
      text: "Refunds",
      url: "https://biz.alibaba.com/order/list.htm?role=buyer&tradelog=from_orderlist_menu&menuCode=order_management_all_order_leaf_buyer"
    },
    {
      key: "Open a dispute",
      i18nKey: "sctnh.header_signin_64",
      url: "https://rule.alibaba.com/complaint/center/index.htm"
    },
    {
      key: "Live chat",
      i18nKey: "sctnh.header_helpcenter_live_chat",
      url: "https://buyer.alimebot.alibaba.com/intl/index.htm?from=qB7A60vABX&_lang=en_US"
    },
    {
      key: "Report abuse",
      i18nKey: "sctnh.header_signin_66",
      url: "https://my-health.alibaba.com/helpCenter/mainTab.htm"
    }
  ],
  becomeSupplier: [
    {
      key: "For suppliers based outside of Mainland China",
      i18nKey: "sctnh.header_signin_59",
      icon: "icon-global-trade",
      url: "https://register.alibaba.com/redirect.htm?entrance=buyerHome"
    },
    {
      key: "For suppliers based in Mainland China",
      i18nKey: "sctnh.header_signin_60",
      icon: "icon-business-icon-gold-supplier",
      url: "https://supplier.alibaba.com"
    },
    {
      key: "Partner Program",
      i18nKey: "sctnh.header_signin_61",
      icon: "icon-trust",
      url: "https://partner.alibaba.com"
    }
  ],
  subMenu: [
    {
      key: "Become a supplier",
      i18nKey: "sctnh.header_signin_58",
      text: "Sell on Alibaba.com",
      url: "https://seller.alibaba.com?registPop=show&tracelog=header_become_seller"
    }
  ]
};

;// ./node_modules/js-cookie/dist/js.cookie.mjs
/*! js-cookie v3.0.8 | MIT */
function js_cookie_assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (key === '__proto__') continue
      target[key] = source[key];
    }
  }
  return target
}

var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};

function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = js_cookie_assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get(name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        if (!(found in jar)) jar[found] = converter.read(value, found);
        if (name === found) {
          break
        }
      } catch (_e) {
        // Do nothing...
      }
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set: set,
      get: get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          js_cookie_assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, js_cookie_assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(js_cookie_assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });



;// ./src/shared/browser/utils.ts


const getCookieByName = function(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = typeof document !== "undefined" && document.cookie?.match(reg);
  if (arr) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};
const getLatestCookieData = function() {
  const cookieName = "sc_g_cfg_f";
  const cfg = {};
  (getCookieByName(cookieName) || "").split("&").forEach((str) => {
    const pair = str.split("=");
    cfg[pair[0]] = pair[1];
  });
  return {
    countryCode: cfg.sc_b_site || "US",
    currencyCode: cfg.sc_b_currency || "USD",
    language: cfg.sc_b_locale || "en_US"
  };
};
const getLocal = () => {
  const cookieName = "sc_g_cfg_f";
  const cfg = {};
  (getCookieByName(cookieName) || "").split("&").forEach((str) => {
    const pair = str.split("=");
    cfg[pair[0]] = pair[1];
  });
  return cfg.sc_b_locale || "en_US";
};
const isHeaderDebugMode = (headerData) => {
  if (headerData?.debugConfig?.enabled) return true;
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("tnhdebug") === "true";
};
const search2Json = (searchStr) => {
  const arrayReg = /\[((\d+)(,\d+)*)?\]/;
  if (!searchStr) {
    return;
  }
  const paramItems = searchStr.split("&");
  const params = [];
  params.push("{");
  for (let i = 0, { length } = paramItems; i < length; i++) {
    const map = paramItems[i].split("=");
    params.push('"');
    params.push(map[0]);
    params.push('"');
    params.push(":");
    if (!isNaN(map[1])) {
      params.push(Number(map[1]));
    } else if (arrayReg.test(map[1])) {
      params.push(map[1]);
    } else {
      params.push('"');
      params.push(map[1]);
      params.push('"');
    }
    if (i !== length - 1) {
      params.push(",");
    }
  }
  params.push("}");
  return JSON.parse(params.join(""));
};
const getCtoken = () => {
  let json = {};
  try {
    json = search2Json(api.get("xman_us_t") || "") || {};
  } catch (error) {
  }
  return json.ctoken || api.get("ctoken");
};
const hasLogged = () => {
  const isLoginCookie = api.get("xman_us_t");
  return isLoginCookie && isLoginCookie.indexOf("sign=y") !== -1;
};
const needAutoLogin = () => {
  const logged = hasLogged();
  const hasHavana = api.get("havana_lgc2_4");
  return !logged && hasHavana;
};
const getUserInfo = () => {
  let userCookie = api.get("xman_us_f");
  const userReg = /x_user=([^&"]+)/;
  const userInfo = {
    country: "",
    firstName: "",
    lastName: "",
    serviceType: "",
    memberSeq: ""
  };
  if (userCookie && userReg.test(userCookie)) {
    userCookie.match(userReg);
    userCookie = RegExp.$1;
    const userCookieArr = userCookie.split("|");
    if (userCookie.length >= 5) {
      userInfo.country = userCookieArr[0];
      userInfo.firstName = userCookieArr[1].replace(/</g, "&lt;").replace(/>/g, "&gt;");
      userInfo.lastName = userCookieArr[2].replace(/</g, "&lt;").replace(/>/g, "&gt;");
      userInfo.serviceType = userCookieArr[3];
      userInfo.memberSeq = userCookieArr[4];
    }
  }
  return userInfo;
};
const isRTL = () => {
  if (typeof document !== "undefined" && document.documentElement) {
    return document.documentElement.dir === "rtl";
  }
  return false;
};

;// ./src/shared/observability/PageSpm.ts

const PageSpm = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window && window.goldlog && window.goldlog.spm_ab) {
    return window.goldlog.spm_ab.join(".");
  } else if (window && window.g_SPM && window.g_SPM.getParam()) {
    const spm = window.g_SPM.getParam(document.body);
    if (spm) {
      return `${spm.a}.${spm.b}`;
    }
  } else {
    const dataSpmMeta = document.getElementsByName("data-spm");
    if (!dataSpmMeta) return;
    const body = document.body || document.getElementsByTagName("body")[0];
    const spmA = dataSpmMeta[0] && dataSpmMeta[0].content;
    const spmB = body && body.dataset && body.dataset.spm;
    if (spmB && spmB) return `${spmA}.${spmB}`;
  }
};

;// ./src/shared/observability/log.ts


const log = (action, params, type = "CLK") => {
  try {
    const { goldlog } = window;
    if (goldlog && goldlog.record) {
      const querys = Object.keys(params || {}).map((k) => {
        return `${k}=${params?.[k]}`;
      });
      const { scenes } = window?.TheNewHeaderProps || {};
      querys.push(
        `action=${action}&st_page_id=${window.dmtrack_pageid || ""}&scenes=${scenes}&version=${package_namespaceObject.rE}`
      );
      goldlog.record("/sc.header.autoclk", type, querys.join("&"));
    }
  } catch (e) {
  }
};
const logError = (action, msg, module = "", type = "CLK") => {
  try {
    const { goldlog } = window;
    if (goldlog && goldlog.record) {
      const { scenes } = window?.TheNewHeaderProps || {};
      const query = `action=${action}&msg=${msg}st_page_id=${window.dmtrack_pageid || ""}&scenes=${scenes}&version=${package_namespaceObject.rE}&module=${module}`;
      goldlog.record("/sc.header.commonError", type, query);
    }
  } catch (e) {
    console.error(e);
  }
};
const autoEXP = () => {
  const q = window.goldlog_queue || (window.goldlog_queue = []);
  q.push({
    action: "goldlog.appendMetaInfo",
    arguments: [
      "aplus-auto-exp",
      [
        {
          logkey: "/sc.header.autoexp",
          cssSelector: "[data-tnh-auto-exp]",
          pkgSize: 1,
          props: ["data-tnh-auto-exp"]
        }
      ]
    ]
  });
};

;// ./src/header/runtime/utils.ts

var utils_defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? utils_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);





const isPlainObject = (value) => {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
};
const hasValidOptionalStringFields = (value, fields) => {
  return fields.every((field) => value[field] === void 0 || typeof value[field] === "string");
};
const isConfigItem = (value) => {
  return isPlainObject(value) && typeof value.key === "string" && hasValidOptionalStringFields(value, [
    "name",
    "i18nKey",
    "text",
    "url",
    "link",
    "icon",
    "descI18nKey",
    "desc",
    "image"
  ]);
};
const isConfigItemArray = (value) => {
  return Array.isArray(value) && value.every(isConfigItem);
};
const isValidWhyAlibabaConfig = (value) => {
  if (value === void 0) return true;
  return isPlainObject(value) && (value.cardList === void 0 || isConfigItemArray(value.cardList));
};
const isValidGetAppConfig = (value) => {
  if (value === void 0) return true;
  return isPlainObject(value) && hasValidOptionalStringFields(value, ["title", "content", "installQrIcon"]) && (value.appStore === void 0 || isPlainObject(value.appStore) && hasValidOptionalStringFields(value.appStore, ["url", "icon"])) && (value.googleStore === void 0 || isPlainObject(value.googleStore) && hasValidOptionalStringFields(value.googleStore, ["url", "icon"]));
};
const isValidTradeAssuranceConfig = (value) => {
  if (value === void 0) return true;
  return isPlainObject(value) && hasValidOptionalStringFields(value, [
    "tradeLogo",
    "tradeDesc",
    "tradeUrl",
    "tradeLearnMoreText"
  ]) && (value.cardList === void 0 || isConfigItemArray(value.cardList));
};
const isValidSubHeaderConfig = (config) => {
  return isPlainObject(config) && (config.subMenu === void 0 || isConfigItemArray(config.subMenu)) && (config.becomeSupplier === void 0 || isConfigItemArray(config.becomeSupplier)) && (config.helpCenter === void 0 || isConfigItemArray(config.helpCenter)) && isValidWhyAlibabaConfig(config.whyAlibaba) && isValidGetAppConfig(config.getApp) && isValidTradeAssuranceConfig(config.tradeAssurance);
};
const normalizeTaxHeaderEntranceShow = (show) => {
  return show === true;
};
const defaultAssetsList = {
  chunks: [
    {
      name: "categories",
      desc: "subheader\u4E2D\u7C7B\u76EE\u7EC4\u4EF6",
      employ: {
        name: "\u715C\u6708",
        empId: "076008"
      },
      jsUrl: "https://s.alicdn.com/@g/code/npm/@alife/fy24-header-categories/0.0.7/index.js",
      cssUrl: "https://s.alicdn.com/@g/code/npm/@alife/fy24-header-categories/0.0.7/index.css"
    },
    {
      name: "searchBar",
      desc: "subheader\u4E2DsearchBar\u7EC4\u4EF6",
      employ: {
        name: "\u715C\u6708",
        empId: "076008"
      },
      jsUrl: "https://s.alicdn.com/@g/code/npm/@alife/fy23-icbu-searchbar/1.0.3/Fy23ICBUSearchBar.js",
      cssUrl: "https://s.alicdn.com/@g/code/npm/@alife/fy23-icbu-searchbar/1.0.3/Fy23ICBUSearchBar.css"
    },
    {
      name: "shipTo",
      desc: "shipTo\u7EC4\u4EF6\uFF0C\u9009\u62E9shipTo\u56FD\u5BB6\u548C\u90AE\u7F16",
      employ: {
        name: "\u9B3C\u9F20",
        empId: "108513"
      },
      jsUrl: "https://s.alicdn.com/@g/code/npm/@alife/ship-to/1.11.0/index.js",
      cssUrl: "https://s.alicdn.com/@g/code/npm/@alife/ship-to/1.11.0/index.css"
    },
    {
      name: "HeaderShoppingCart",
      desc: "header\u8D2D\u7269\u8F66\u7EC4\u4EF6\uFF0C\u5C55\u793A\u8D2D\u7269\u8F66\u7684\u57FA\u672C\u5185\u5BB9",
      employ: {
        name: "\u73C8\u6D69",
        empId: "378771"
      },
      jsUrl: "https://s.alicdn.com/@g/code/npm/@alife/header-shopping-cart/1.0.0/index.js",
      cssUrl: "https://s.alicdn.com/@g/code/npm/@alife/header-shopping-cart/1.0.0/index.css"
    },
    {
      name: "HeaderFavorite",
      desc: "header\u6536\u85CF\u5939\u7EC4\u4EF6\uFF0C\u5C55\u793A\u6700\u8FD1\u6536\u85CF\u7684\u5546\u54C1\u548C\u5546\u5BB6",
      employ: {
        name: "\u8BC0\u5FAE",
        empId: "71202"
      },
      jsUrl: "https://dev.g.alicdn.com/code/npm/@alife/header-favorite/1.0.0/index.js",
      cssUrl: "https://dev.g.alicdn.com/code/npm/@alife/header-favorite/1.0.0/index.css"
    }
  ],
  defer: [
    {
      name: "smartAssistant",
      desc: "AI\u91C7\u8D2D\u52A9\u624Bjs",
      employ: {
        name: "\u5F52\u6E21",
        empId: "250088"
      },
      jsUrl: "https://s.alicdn.com/@g/code/npm/@alife/smart-assistant-buyer/0.0.2/loader.js"
    },
    {
      name: "commonStyle",
      desc: "\u5168\u7AD9\u901A\u7528css\uFF0C\u96C6\u6210\u4E86tailwind css\uFF0C\u5305\u542Bweb\u5B57\u4F53\u4EE5\u53CA\u5404\u79CD\u57FA\u7840\u6837\u5F0F",
      employ: {
        name: "\u7075\u97E7",
        empId: "328252"
      },
      cssUrl: "https://s.alicdn.com/@g/code/npm/@alife/sc-common-style/1.0.3/index.css"
    }
  ]
  // async: [{ name: 'test', desc: 'test', url: '', type: 'js/css' }],
};
function sanitizeHeaderAssetsList(assetsList) {
  return {
    ...assetsList,
    chunks: (assetsList.chunks || []).filter((item) => item.name !== "AccioWork")
  };
}
const utils_findFactoryData = {
  cardData: {
    sourceData: {
      tiitleImage: "https://img.alicdn.com/imgextra/i1/O1CN01c48fIx1OAcZDgzF3a_!!6000000001665-2-tps-174-42.png",
      title: "header_Manufacturers_03",
      infoList: [
        { data: "sctnh.header_Manufacturers_15", Instructions: "sctnh.header_Manufacturers_04" },
        { data: "sctnh.header_Manufacturers_16", Instructions: "sctnh.header_Manufacturers_05" },
        { data: "sctnh.header_Manufacturers_17", Instructions: "sctnh.header_Manufacturers_06" }
      ],
      buttonData: {
        key: "Source now",
        text: "header_Manufacturers_07",
        url: "https://www.alibaba.com/factory/index.html?spm=a2700.product_home_fy25.0.0.2ce26e581WZKXg"
      }
    },
    sourceCardIcon: "https://img.alicdn.com/imgextra/i1/O1CN01FzM0Ag1h5YtKBSj0P_!!6000000004226-2-tps-30-30.png",
    sourcCardList: [
      {
        imgUrl: "https://img.alicdn.com/imgextra/i2/O1CN01A22f2J1a0nSalqPOn_!!6000000003268-0-tps-494-598.jpg",
        linkUrl: "https://www.alibaba.com/factory/index.html?spm=a2700.product_home_fy25.0.0.2ce26e581WZKXg",
        key: "Smart factory search ",
        info: "header_Manufacturers_08"
      },
      {
        imgUrl: "https://img.alicdn.com/imgextra/i2/O1CN01f9oDpK1Ie2JG3gF6B_!!6000000000917-0-tps-494-598.jpg",
        linkUrl: "https://www.alibaba.com/factory/index.html?spm=a2700.product_home_fy25.0.0.2ce26e581WZKXg",
        key: "Top manufacturer rankings",
        info: "header_Manufacturers_10"
      },
      {
        imgUrl: "https://img.alicdn.com/imgextra/i1/O1CN01QMuWFQ1hL8MEV8sPv_!!6000000004260-0-tps-494-598.jpg",
        linkUrl: "https://www.alibaba.com/factory/index.html?spm=a2700.product_home_fy25.0.0.2ce26e581WZKXg",
        key: "Factory-direct samples",
        info: "header_Manufacturers_09"
      }
    ]
  },
  panelData: {
    title: "sctnh.header_Manufacturers_11",
    infoList: [
      {
        i18nKey: "mcms_3twd4p__",
        key: "Sample Center",
        url: "https://sale.alibaba.com/p/23daily/1tab_searoom_productlist/index.html?wx_navbar_transparent=true&path=/p/d5sjt7sce/index.html&ncms_spm=a27aq.27818784&prefetchKey=met&wx_xpage=true"
      },
      {
        i18nKey: "mcms_9xpo1d__",
        key: "Fast customization",
        url: "https://sale.alibaba.com/p/fast_customization?spm=a2700.product_home_fy25.fast_custom.title&wx_navbar_transparent=true&path=/p/fast_customization&topOfferIds=&productTabId="
      },
      {
        i18nKey: "header_signin_28",
        key: "Trade shows",
        url: "https://sale.alibaba.com/p/d5a9xh4v5/index.html?wx_navbar_transparent=true&path=/p/d5a9xh4v5/index.html"
      }
    ]
  }
};
function loadJs(src, defer, reportError = true) {
  return new Promise((resolve, reject) => {
    const elScript = document.createElement("script");
    elScript.src = src;
    if (defer) {
      elScript.defer = true;
    } else {
      elScript.async = true;
    }
    elScript.onload = () => {
      resolve();
    };
    elScript.onerror = () => {
      if (reportError) logError("load_js_error", `url: ${src}`);
      reject(new Error(`loadJsError:${src}`));
    };
    document.head.appendChild(elScript);
  });
}
const getUrlParams = ({
  name,
  url,
  needDeCode = false
}) => {
  const reg = new RegExp(`(\\?|&)${name}=([^&]*)(&|$)`, "i");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const r = (url || currentUrl).match(reg);
  if (r != null) return needDeCode ? decodeURIComponent(r[2]) : r[2];
  return "";
};
const searchScene2Site = {
  korea: "korea",
  de: "germany",
  vietnam: "vietnam",
  spain: "spain",
  turkey: "turkey"
};
const host2Site = {
  "turkiye.alibaba.com": "turkey",
  "korea.alibaba.com": "korea",
  "vn.alibaba.com": "vietnam",
  "spain.alibaba.com": "spain",
  "de.alibaba.com": "germany"
};
const site2Categories = {
  korea: "korea",
  germany: "germany",
  vietnam: "vietnam",
  spain: "spain",
  turkey: "turkey"
};
const site2SubTitle = {
  turkey: "sctnh.turkey_pavilion_header"
};
const siteType = (site) => {
  const host = typeof window !== "undefined" && window.location.host || "";
  const SearchScene = getUrlParams({ name: "SearchScene" });
  const topLevelDomain = getTopLevelDomain();
  const germany = host === "germany.alibaba.com";
  const globalRegex = new RegExp("search[a-zA-Z]+list$");
  const isSearchScene = host === "www.alibaba.com" && SearchScene && globalRegex.test(PageSpm());
  const isMainSite = topLevelDomain === "com" && !host2Site[host] && !isSearchScene && !germany;
  if (isMainSite) return "main";
  if (host2Site[host] || isSearchScene || site && site2Categories[site]) return "supply";
  return "buyer";
};
function utils_getDefaultProps(props) {
  const result = {
    scenes: props.scenes
  };
  const host = typeof window !== "undefined" && window.location.host || "";
  const topLevelDomain = getTopLevelDomain();
  if (host.indexOf("localhost") > -1) return result;
  const siteUrl = topLevelDomain === "com" ? host : `www.alibaba.${topLevelDomain}`;
  const searchScene = getUrlParams({ name: "SearchScene" });
  const site = host2Site[host] || searchScene2Site[searchScene];
  if (siteType() === "buyer") {
    result.config = {
      subTitle: {
        title: "",
        i18n: "",
        url: `https://${siteUrl}`
      },
      mainLogoUrl: `https://${siteUrl}`,
      // 土耳其国家站地址
      disable: ["Partner Program", "For suppliers based in Mainland China"]
    };
    result.categoriesProps = {
      bizScene: "ggs",
      firstCategoryTarget: "searchPage"
    };
    result.searchbarProps = {
      tabOptions: false,
      // 关闭 - 赛道搜索
      showImgUpload: false,
      // 关闭 - 图搜
      showShadeTextRecommend: false,
      // 关闭 - 底纹词推荐
      showAd: false,
      // 关闭广告
      isCountrySite: true,
      afterSearch: (searchUrl) => {
        if (searchUrl.indexOf("SearchScene=") > -1 || !searchScene) return searchUrl;
        return `${searchUrl}&SearchScene=${searchScene}`;
      },
      ...props.searchbarProps
    };
  } else if (siteType() === "supply") {
    result.config = {
      subTitle: {
        title: "",
        i18n: site2SubTitle[site] || "",
        url: `https://${siteUrl}`,
        ...props?.config?.subTitle || {}
      },
      mainLogoUrl: `https://${siteUrl}`,
      disable: [
        "Trade Assurance",
        "Trade Assurance Link",
        "Partner Program",
        "For suppliers based in Mainland China"
      ]
    };
    const bizScene = site2Categories[site] || "ggs";
    result.categoriesProps = {
      bizScene,
      firstCategoryTarget: "searchPage"
    };
    const hostname = topLevelDomain === "com" && siteUrl !== "turkiye.alibaba.com" ? `www.alibaba.com` : `${siteUrl}`;
    result.searchbarProps = {
      tabOptions: false,
      // 关闭 - 赛道搜索
      showImgUpload: false,
      // 关闭 - 图搜
      showAd: false,
      // 关闭广告
      hostname,
      isCountrySite: true,
      afterSearch: (searchUrl) => {
        if (searchUrl.indexOf("SearchScene=") > -1 || !searchScene) return searchUrl;
        return `${searchUrl}&SearchScene=${searchScene}`;
      },
      ...props.searchbarProps
    };
  } else if (host === "chinese.alibaba.com") {
    result.config = {
      mainLogoUrl: `https://${siteUrl}`,
      disable: ["Trade Assurance", "Become a supplier", "order", "Help Center"],
      subTitle: {
        title: "",
        url: `https://${siteUrl}`,
        i18n: "sctnh.china_pavilion_header"
      }
    };
    result.categoriesProps = {
      bizScene: "ggs",
      firstCategoryTarget: "searchPage"
    };
    result.searchbarProps = {
      ...props.searchbarProps,
      tabOptions: false,
      // 关闭 - 赛道搜索
      showImgUpload: false,
      // 关闭 - 图搜
      isCountrySite: true,
      afterSearch: (searchUrl) => {
        return `${searchUrl}&SearchScene=countrySiteCN`;
      }
    };
  }
  return { ...props, ...result };
}
function getTopLevelDomain() {
  const host = typeof location !== "undefined" ? location.host : "";
  const hostTemps = host.match(/(.*?).alibaba\.(.*?)$/);
  if (hostTemps && hostTemps.length >= 3) {
    return hostTemps[2];
  } else {
    return "com";
  }
}
function loadExternalCSS(url, reportError = true) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.onload = () => resolve(link);
    link.onerror = () => {
      if (reportError) logError("load_css_error", `url: ${url}`);
      link.remove();
      reject();
    };
    document.head.appendChild(link);
  });
}
function getSubHeaderConfig() {
  return fetch("https://s.alicdn.com/@xconfig/header/subHeaderConfig").then((res) => {
    return res.json();
  }).then((res) => {
    if (!isValidSubHeaderConfig(res)) return defaultSubHeaderConfig;
    return res;
  }).catch(() => {
    return defaultSubHeaderConfig;
  });
}
function getTaxHeaderEntrance() {
  const url = new URL("https://biz.alibaba.com/contract/ajax/ajaxTaxHeaderEntrance.json");
  url.searchParams.set("_tb_token_", getCookieByName("_tb_token_") || "");
  return fetch(url.toString(), {
    method: "GET",
    credentials: "include"
  }).then((res) => res.json()).then((res) => {
    const data = res?.show !== void 0 ? res : res?.data?.data ?? res?.data;
    return {
      show: normalizeTaxHeaderEntranceShow(data?.show),
      countryCode: data?.countryCode,
      taxCollectionDecision: data?.taxCollectionDecision
    };
  }).catch(() => ({
    show: false
  }));
}
const FAVORITE_ENTRANCE_URL = "https://insights.alibaba.com/openservice/gatewayService?modelId=12717";
function getFavoriteEntrance() {
  return fetch(FAVORITE_ENTRANCE_URL, {
    method: "GET",
    credentials: "include"
  }).then((res) => res.json()).then((res) => res?.data?.showFavoriteComponent === true).catch(() => false);
}
function getFindFactoryData() {
  return Promise.resolve(utils_findFactoryData);
}
function getHeaderAssetsList() {
  return fetch("https://s.alicdn.com/@xconfig/header/deferAssetsConfig").then((res) => {
    return res.json();
  }).then((res) => {
    if (!res.chunks) return defaultAssetsList;
    const remoteChunkNames = new Set(res.chunks.map((c) => c.name));
    const missingChunks = (defaultAssetsList.chunks || []).filter(
      (c) => !remoteChunkNames.has(c.name)
    );
    if (missingChunks.length > 0) {
      res = { ...res, chunks: [...res.chunks, ...missingChunks] };
    }
    return sanitizeHeaderAssetsList(res);
  }).catch(() => {
    return defaultAssetsList;
  });
}
function getHeaderVersion() {
  const defaultHeaderVersion = "4.0.0";
  return fetch("https://s.alicdn.com/@xconfig/header/renderHeaderVersion").then((res) => {
    return res.json();
  }).then(({ headerVersion = defaultHeaderVersion }) => {
    return headerVersion;
  }).catch(() => {
    return defaultHeaderVersion;
  });
}
function getScenes() {
  return fetch("https://s.alicdn.com/@xconfig/header/registeredScene").then((res) => {
    return res.json();
  });
}
class HeaderGuidePopClass {
  constructor() {
    __publicField(this, "visiblePopArray");
    this.visiblePopArray = [];
  }
  setVisible(name, visible) {
    if (visible) {
      this.visiblePopArray.push(name);
    } else {
      this.visiblePopArray = this.visiblePopArray.filter((item) => item !== name);
    }
  }
}
function initTipsQueue() {
  if (typeof window !== "undefined") {
    window.HeaderGuidePop = new HeaderGuidePopClass();
  }
}
function preConnect(domain) {
  if (!document.querySelector(`link[href="${domain}"]`)) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = domain;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}
const getSpmAB = () => {
  return window?.goldlog?.spm_ab?.join("_") ?? "";
};

;// ./src/shared/i18n/defaultI18n.ts

const DefaultI18n = {
  "sctnh.header_shipto_zipcode_invalid_US": 'Examples: "10011" or "10011-0043"',
  source_in_europe_7: "945,000",
  source_in_europe_8: "products",
  source_in_europe_9: "111",
  source_in_europe_3: "Leading B2B marketplace in Germany, Austria, and Switzerland",
  source_in_europe_4: "Source now",
  "sctnh.header_shipto_zipcode_placeholder_MY": "Postcode 50050",
  source_in_europe_5: "650,000",
  "sctnh.header_shipto_zipcode_placeholder_MX": "Postal code 07720",
  source_in_europe_6: "suppliers",
  source_in_europe_10: "industries",
  source_in_europe_11: "1 million",
  "sctnh.china_search_shading": "Search for global supplies here",
  source_in_europe_1: "Source in Europe",
  source_in_europe_2: "Connect with local suppliers worldwide",
  source_in_europe_14: "Leading B2B marketplace in Europe",
  source_in_europe_15: "Source now",
  source_in_europe_12: "product videos & photos",
  source_in_europe_13: "Connect with suppliers worldwide",
  source_in_europe_18: "2.6 million",
  source_in_europe_19: "buyers monthly",
  source_in_europe_16: "3 million",
  "sctnh.header_shipto_zipcode_invalid_DE": 'Example: "10178"',
  source_in_europe_17: "suppliers",
  "sctnh.header_shipto_zipcode_placeholder": "Please input the right zip/postal code.",
  header_cart_titleWithoutAmount: "Shopping cart",
  "sctnh.fr_search_shading": "Search for products from France",
  "sctnh.header_shipto_zipcode_invalid_VN": 'Example: "701000"',
  "sctnh.header_shipto_country_empty": "Please select a country",
  "sctnh.header_shipto_zipcode_invalid_ES": 'Example: "28013"',
  "sctnh.uk_search_shading": "Search for products from the UK",
  "sctnh.germany_search_shading": "Search for products from Germany",
  header_cart_productInvalid: "Item no longer available",
  "sctnh.header_shipto_zipcode_invalid_GB": 'Examples: "B1 1AA", "CR2 6XH", or "DN55 1PT"',
  "sctnh.header_shipto_zipcode_placeholder_PH": "ZIP code 1000",
  "sctnh.header_shipto_address_invalid_MX": 'Invalid ZIP code. Example of the correct format: "07720".',
  "sctnh.header_shipto_address_invalid_MY": 'Please enter a valid Postcode below. Examples of the correct format: "50050". ',
  "sctnh.mcms_y5wmwg__": "All for free",
  "sctnh.header_shipto_zipcode_invalid_FR": 'Example: "75001"',
  "sctnh.header_shipto_address_invalid_NL": 'The postal code is incorrect. Examples of the correct format: "1012 JS". ',
  "Connect.your.store": "Connect your store",
  "sctnh.mcms_m616im__": "Extended 90-day order protection",
  "sctnh.header_shipto_address_invalid_NZ": 'Please enter a valid Postcode below. Examples of the correct format: "6011". ',
  "sctnh.header_shipto_or": "Or",
  "sctnh.header_shipto_zipcode_placeholder_NZ": "Postcode 6011",
  "sctnh.mcms_o0dlts201f4__": "Logistics discounts every quarter",
  "sctnh.header_signin_11": "Join Alibaba.com Membership",
  "sctnh.header_signin_10": "Account",
  "sctnh.header_shipto_zipcode_placeholder_AU": "Postcode 2000",
  "sctnh.header_signin_15": "Buyers Club",
  "sctnh.header_signin_14": "Submit RFQ",
  "sctnh.header_shipto_address_invalid_KR": 'Please enter a valid Postal code below. Examples of the correct format: "02878". ',
  "sctnh.header_signin_13": "New connections",
  "sctnh.header_signin_12": "Sign out",
  "sctnh.header_signin_08": "RFQs",
  "sctnh.header_signin_benefits": "Benefit",
  "sctnh.header_dropshipping": "Dropshipping",
  "sctnh.header_signin_07": "Messages",
  "sctnh.header_signin_06": "Orders",
  "sctnh.header_signin_05": "My Alibaba",
  "sctnh.header_signin_09": "Favorites",
  "sctnh.app.check": "success",
  "sctnh.header_shipto_zipcode_invalid": "Zip code/postal code is not correct.",
  "sctnh.search_ta_supplier_filter_description": "Enjoy protection from payment to delivery.",
  "sctnh.mcms_axre26__": "Member prices: Up to 50% off",
  header_cart_empty: "Your cart is empty",
  "sctnh.header_shipto_zipcode_invalid_AU": 'Example: "2000"',
  "sctnh.header_signin_04": 'By signing in via social media, I agree to <a target="_blank" href="//rulechannel.alibaba.com/icbu?type=detail&ruleId=2042&cId=1303#/rule/detail?cId=1303&ruleId=2042" rel="noreferrer" >the Alibaba.com Free Membership Agreement</a> and <a target="_blank" href="//rulechannel.alibaba.com/icbu?type=detail&ruleId=2034&cId=1306#/rule/detail?cId=1306&ruleId=2034" rel="noreferrer">Privacy Policy</a>, and to receive emails about the platform\u2019s products and services. ',
  "sctnh.header_signin_03": "Or, continue with:",
  "sctnh.header_signin_02": "Welcome to Alibaba.com!",
  "sctnh.header_signin_01": "Sign in",
  "sctnh.it_search_shading": "Search for products from Italy",
  "sctnh.th_search_shading": "Search for products from Thailand",
  "sctnh.header_shipto_tips_title": "Please confirm your delivery information",
  "Click.and.connect": "Click and connect your Mercardo Libre store",
  "sctnh.header_shipto_zipcode_invalid_CA": 'Example: "M4B 1B3"',
  "sctnh.mcms_tflr3i__": "Six US $500 coupons",
  "sctnh.header_signin_33": "Safe & easy payments",
  "sctnh.header_signin_32": "Order protections",
  "sctnh.header_shipto_address_invalid_IT": 'Please enter a valid Postal code below. Examples of the correct format: "00118". ',
  "sctnh.header_shipto_zipcode_placeholder_TH": "Postcode 10110",
  "sctnh.header_signin_31": "Global suppliers",
  "sctnh.header_signin_30": "LIVE",
  "sctnh.header_signin_37": "Learn more",
  "sctnh.header_signin_36": "After-sales protections",
  "sctnh.header_signin_35": "Shipping & logistics services",
  "sctnh.header_signin_34": "Money-back policy",
  "sctnh.header_shipto_address_invalid": "ZIP or postal code is incorrect.",
  "sctnh.header_shipto_address_invalid_JP": 'Please enter a valid Postal code below. Examples of the correct format: "B1 1AA", "CR2 6XH" or "DN55 1PT".',
  "sctnh.header_signin_29": "Tips",
  "sctnh.header_signin_28": "Online Trade Show",
  "sctnh.header_signin_27": "Fast dispatch within 7 days",
  header_cart_titleWithAmount: "Shopping cart ({0} total)",
  "sctnh.header_shipto_zipcode_placeholder_CA": "Postal code M4B 1B3",
  header_cart_skuInvalid: "Variation no longer available",
  "sctnh.header_signin_22": "Savings spotlight",
  "sctnh.header_signin_21": "New arrivals",
  "sctnh.header_signin_20": "Top ranking",
  "sctnh.header_shipto_zipcode_invalid_TH": 'Example: "10110"',
  "sctnh.header_signin_26": "Customize with MOQs under 50",
  "sctnh.header_signin_25": "Sample Center",
  "sctnh.header_signin_24": "Popular RTS items",
  "sctnh.header_signin_23": "Customers like you also choose",
  "sctnh.header_ship_01": "Ship to:",
  "sctnh.header_signin_19": "Featured selections",
  "sctnh.header_ship_02": "Specify your location",
  "sctnh.header_signin_18": "All categories",
  "sctnh.header_signin_17": "Sign up",
  "sctnh.mcms_ye9u85__": "Tailored discounts, tools, and services for every stage of business",
  "sctnh.header_signin_16": "Cart",
  "sctnh.header_ship_05": "Set language and currency",
  "sctnh.header_signin_101": "Manage orders as a supplier",
  "sctnh.header_ship_06": "Select your preferred language and currency. You can update the settings at any time.",
  "sctnh.header_signin_100": "All orders",
  "sctnh.header_ship_03": "Shipping options and fees vary based on your location",
  header_cart_goToCart: "Go to cart",
  header_cart_add_success_with_count: "Added {0} items to cart!",
  header_cart_add_success_go_to_cart: "Go to cart",
  "sctnh.header_ship_04": "Sign in to add address",
  "sctnh.header_signin_105": "New user? Please {{join in}} and start your business!",
  "sctnh.header_signin_104": "Dont miss messages",
  "sctnh.header_signin_103": "Dont miss inquiry messages",
  "sctnh.header_signin_102": "Waiting for dispatch",
  "sctnh.header_signin_109": "Hi, {0}",
  "sctnh.header_signin_108": "Order with Trade Assurance",
  "sctnh.header_signin_107": "Unread message reminder",
  "sctnh.header_signin_106": "We will remind you here when there is new message. Please sign in to view.",
  "sctnh.header_signin_51": "Industry reports",
  "sctnh.header_signin_50": "Success stories",
  "sctnh.header_shipto_zipcode_placeholder_VN": "Postal code 701000",
  "sctnh.header_signin_55": "Meet the peers",
  "sctnh.header_signin_54": "Overview",
  "sctnh.header_signin_53": "Webinars",
  "sctnh.header_signin_52": "Help Center",
  "sctnh.header_shipto_zipcode_placeholder_ES": "Postal code 28013",
  "sctnh.header_signin_59": "For suppliers based outside of Mainland China",
  "sctnh.header_signin_58": "Sell on Alibaba.com",
  "sctnh.sub_title_membership_pay": "Membership programs",
  "sctnh.header_signin_57": "How to source on Alibaba.com",
  "sctnh.header_signin_56": "Ecommerce Academy",
  "sctnh.header_signin_49": "Blogs",
  "sctnh.turkey_pavilion_header": "T\xFCrkiye pavilion",
  "sctnh.header_shipto_zipcode_placeholder_US": 'ZIP code  "10011" or "10011-0043"',
  "sctnh.header_shipto_zipcode_invalid_NL": 'Example: "1012 JS"',
  "sctnh.header_shipto_zipcode_placeholder_UK": 'Postcode B1 1AA", "CR2 6XH", "DN55 1PT',
  "sctnh.header_signin_40": "What is Alibaba.com",
  "sctnh.header_signin_44": "Trade services\n",
  "sctnh.header_signin_43": "Membership program",
  "sctnh.china_pavilion_header": "Global suppliers",
  "sctnh.header_signin_42": "How sourcing works",
  "sctnh.header_signin_41": "Why Alibaba.com",
  "sctnh.header_alibaba.com": "About Alibaba.com",
  "sctnh.header_Manufacturers_01": "Verified manufacturers",
  "sctnh.header_Manufacturers_02": "Factory express",
  "sctnh.header_Manufacturers_03": "Your shortcut to {verified-icon} factories",
  "sctnh.header_Manufacturers_04": "Verified manufacturers",
  "sctnh.header_Manufacturers_05": "Industries covered",
  "sctnh.header_Manufacturers_06": "Dedicated services",
  "sctnh.header_whychooseali": "Why choose Alibaba.com",
  "sctnh.header_learnsolutions": "50M+ buyers already source from verified suppliers here, on a B2B marketplace powered by AI sourcing assistants",
  "sctnh.header_cocreate": "CoCreate Pitch",
  "sctnh.header_Takepool": "Pitch your startup to elite judges on a global stage, with a $1,000,000 total prize pool",
  "sctnh.header_signin_48": "Resources",
  "sctnh.header_signin_47": "Production monitoring & inspection services",
  "sctnh.header_signin_46": "Letter of Credit",
  "sctnh.header_alibaba_com_business_edge_credit_card": "Alibaba.com Business Edge Credit Card",
  "sctnh.header_signin_45": "Logistics Services",
  "sctnh.header_signin_39": "Get started",
  "sctnh.header_signin_38": "Buyer Central",
  "sctnh.header_shipto_zipcode_invalid_MY": 'Example: "50050"',
  "sctnh.header_shipto_zipcode_invalid_MX": 'Invalid ZIP code. Example of the correct format: "07720".',
  "sctnh.header_shipto_zipcode_placeholder_DE": "Postal code 10178",
  "sctnh.header_shipto_address_invalid_ID": 'Please enter a valid Postal code below. Examples of the correct format: "10110". ',
  "sctnh.header_shipto_deliverto": "Deliver to:",
  "sctnh.mcms_37qpmo__": "Logistics concierge services",
  "sctnh.header_signin_73": "Specify your location",
  "sctnh.header_signin_72": "Google Play",
  "sctnh.header_signin_71": "App Store",
  "sctnh.header_signin_70": "Find products, communicate with suppliers, and manage and pay for your orders with the Alibaba.com app anytime, anywhere.",
  "sctnh.header_signin_77": "Save",
  "sctnh.header_shipto_address_invalid_ES": 'Please enter a valid Postal code below. Examples of the correct format: "28013". ',
  "sctnh.header_signin_76": "Add address",
  "sctnh.header_signin_75": "View more",
  "sctnh.header_signin_74": "Shipping options and fees vary based on your location",
  "sctnh.header_signin_79": "All countries/regions",
  "sctnh.header_signin_78": "Suggested",
  "Get.personalized.sourcing.journey": "Get personalized sourcing journey for your Mercado Libre store",
  "sctnh.es_search_shading": "Search for products from Spain",
  "sctnh.header_shipto_zipcode_invalid_NZ": 'Example: "6011"',
  "sctnh.mcms_lapeue__": "Alibaba.com Membership",
  "sctnh.header_shipto_address_invalid_VN": 'Please enter a valid Postal code below. Examples of the correct format: "701000". ',
  "See.Top.ranking.products": "See Top ranking products",
  "sctnh.header_shipto_zipcode_placeholder_GB": 'Postcode B1 1AA", "CR2 6XH", "DN55 1PT',
  "sctnh.header_signin_62": "For buyers",
  "sctnh.header_signin_61": "Partner Program",
  "sctnh.header_signin_60": "For suppliers based in Mainland China",
  "sctnh.header_signin_66": "Report abuse",
  "sctnh.mcms_y6z2ua__": "Free benefits for every stage of business",
  "sctnh.header_signin_65": "Report IPR infringement",
  "sctnh.header_signin_64": "Open a dispute",
  "sctnh.header_shipto_address_invalid_FR": 'Please enter a valid Postal code below. Examples of the correct format: "75001". ',
  "sctnh.header_signin_63": "For suppliers",
  "sctnh.header_helpcenter": "Help Center",
  "sctnh.header_helpcenter_live_chat": "Live chat",
  "sctnh.header_Manufacturers_07": "Explore now",
  "sctnh.header_Manufacturers_08": "Smart factory search",
  "sctnh.header_Manufacturers_09": "Factory-direct samples",
  "sctnh.header_Manufacturers_10": "Top manufacturer rankings",
  "sctnh.header_Manufacturers_11": "Other featured selections",
  "sctnh.header_signin_69": "Get the Alibaba.com app",
  "sctnh.header_accio_work": "Accio Work",
  "sctnh.header_accio_work_brand_prefix": "Alibaba.com",
  "sctnh.header_accio_work_brand": "Accio Work",
  "sctnh.header_accio_work_title_prefix": "Your business",
  "sctnh.header_accio_work_title_highlight": "agent team",
  "sctnh.header_accio_work_title_suffix": "on desktop",
  "sctnh.header_accio_work_description": "Manage Shopify, Amazon, and Gmail for you. No code, no risk.",
  "sctnh.header_accio_work_download_default": "Download Accio Work",
  "sctnh.header_accio_work_download_mac": "Download for Mac",
  "sctnh.header_accio_work_download_windows": "Download for Windows",
  "sctnh.header_accio_title": "Accio Work, {{Your Al business team}} 7/24",
  "sctnh.header_accio_subtitle": "From design to sourcing, let Accio Work handle the heavy lifting. Boost your ROI today!",
  "sctnh.header_accio_download": "Download Accio Work",
  "sctnh.header_signin_68": "App Store",
  "sctnh.header_signin_67": "Get the app",
  "sctnh.header_shipto_zipcode_placeholder_FR": "Postal code 75001",
  "sctnh.mcms_t8eye6__": "US $240 off shipping",
  "sctnh.header_shipto_address_invalid_GB": 'Please enter a valid Postcode below. Examples of the correct format:"B1 1AA", "CR2 6XH", "DN55 1PT".. ',
  "sctnh.mcms_seabed953__": "Learn more",
  "Source.by.your.top.products": "Source by your top products",
  "sctnh.header_signin_91": "{0} new messages",
  "sctnh.header_signin_90": "No new messages",
  "sctnh.header_shipto_address_invalid_TH": 'Example: "10110"',
  "sctnh.header_signin_95": "No new inquiries",
  "sctnh.header_shipto_zipcode_invalid_ID": 'Example: "10110"',
  "sctnh.header_signin_94": "View details",
  "sctnh.header_signin_93": "{0} new inquiries",
  "sctnh.header_signin_92": "Sign in to view message details",
  "sctnh.header_signin_99": "Waiting for confirmation",
  "sctnh.header_signin_98": "Waiting for payment",
  "sctnh.header_signin_97": "Manage orders as a buyer",
  "sctnh.mcms_xln34p__": "Buy and get 1.5% back",
  "sctnh.header_signin_96": "Sign in to view inquiry details",
  "sctnh.mcms_bjxcrh__": "Extended 60-day order protection",
  "sctnh.header_shipto_zipcode_placeholder_IT": "Postal code 00118",
  "sctnh.header_shipto_address_invalid_DE": 'Please enter a valid Postal code below. Examples of the correct format: "10178". ',
  "sctnh.header_signin_80": "Enter a Zip/Postal code",
  "sctnh.header_shipto_zipcode_placeholder_ID": "Postal code 10110",
  "sctnh.header_signin_84": "Suggested",
  "sctnh.header_signin_83": "Currency",
  "sctnh.header_signin_82": "Language",
  "sctnh.header_signin_81": "Sign in to add address",
  "sctnh.header_signin_87": "Enter",
  "sctnh.header_signin_86": "Add address",
  "sctnh.header_signin_85": "All currencies",
  "sctnh.header_signin_89": "Sign back in to continue",
  "Explore.product.inspirations": "Explore product inspirations",
  "sctnh.header_shipto_zipcode_invalid_IT": 'Example: "00118"',
  "sctnh.header_shipto_address_invalid_US": "Zip code/postal code is not correct.",
  "sctnh.header_shipto_tips_desc": "Confirm your delivery information for more accurate shipping options and details",
  "sctnh.header_shipto_address_invalid_AU": 'Please enter a valid Postcode below. Examples of the correct format: "2000". ',
  "Millions.of.offerings": "Millions of offerings",
  "My.Connections": "My Connections",
  "sctnh.header_shipto_zipcode_placeholder_KR": "Postal code 02878",
  "sctnh.header_shipto_zipcode_invalid_JP": 'Examples: "B1 1AA", "CR2 6XH", or "DN55 1PT"',
  "sctnh.mcms_rsvbxw__": "Supercharge your business for only US $199 per year",
  header_cart_noSku: "No variation",
  "sctnh.turkey_search_shading": "Search for products from {countryName} ",
  "sctnh.header_shipto_zipcode_placeholder_JP": "Postal code 100-0001",
  source_in_europe_21: "languages",
  source_in_europe_22: "3,000+",
  source_in_europe_20: "15",
  "sctnh.header_shipto_select_empty": "Select a country",
  "sctnh.header_shipto_address_invalid_CA": 'Please enter a valid Postal code below. Examples of the correct format:"M4B 1B3". ',
  "sctnh.header_shipto_zipcode_invalid_KR": 'Example: "02878"',
  source_in_europe_23: "new suppliers monthly",
  "sctnh.header_signin_110": "Discover Alibaba Lens",
  "sctnh.header_signin_111": "Use this image search extension to find and compare similar products with wholesale prices and customization options anywhere online.",
  "sctnh.header_signin_112": "Install from chrome",
  "sctnh.header_signin_113": "App & extension",
  "sctnh.header_taxexemption": "Tax exemption",
  "sctnh.header_applynow": "Apply now",
  "sctnh.header_learnmore": "Learn more",
  header_tax_exemption_tab: "Tax exemption",
  header_tax_exemption_badge: "US Tax Exemption Program",
  header_tax_exemption_title: "Alibaba.com Tax Exemption Program",
  header_tax_exemption_description: "Streamline your B2B purchasing with our comprehensive tax exemption solution for qualified US buyers.",
  header_tax_exemption_benefit_enrollment_title: "Easy enrollment",
  header_tax_exemption_benefit_enrollment_desc: "Upload documents or complete a short application in minutes",
  header_tax_exemption_benefit_purchase_title: "Tax-exempt purchases",
  header_tax_exemption_benefit_purchase_desc: "Eligible taxes are automatically removed at checkout",
  header_tax_exemption_benefit_refund_title: "Streamlined tax refund",
  header_tax_exemption_benefit_refund_desc: "Get eligible taxes refunded easily once verified",
  header_tax_exemption_region_us: "US sales tax",
  header_tax_exemption_region_eu: "EU-VAT",
  header_tax_exemption_region_no: "NO-VAT",
  header_tax_exemption_region_uk: "UK-VAT",
  header_tax_exemption_region_au: "AU-ABN",
  header_tax_exemption_region_nz: "NZ-NZBN",
  header_tax_exemption_region_sg: "SG-GST",
  header_tax_exemption_region_ca: "CA-PST",
  // AI Mode, 这里必须写空字符串，否则会被过滤
  "sctnh.header_subtab_1": " ",
  "sctnh.header_subtab_2": " ",
  "sctnh.header_subtab_3": " ",
  "sctnh.header_subtab_4": " "
};
/* harmony default export */ const defaultI18n = (DefaultI18n);

;// ./src/shared/i18n/i18n.ts




let i18nLocal = defaultI18n;
const mergeI18nSources = (...sources) => {
  let merged = {};
  for (const source of sources) {
    if (!source) continue;
    merged = {
      ...merged,
      ...source
    };
  }
  return merged;
};
const getI18n = (key, headerData) => {
  if (typeof key !== "string" || !key) {
    console.warn(
      "[Header getI18n] invalid key:",
      key,
      "headerData:",
      headerData,
      "stack:",
      new Error().stack
    );
    return "";
  }
  const { i18nData } = headerData || {};
  let i18n = i18nData || {};
  if (typeof i18nData === "string") {
    i18n = JSON.parse(i18nData);
  }
  const normalizedKey = key.trim();
  const fallbackKey = normalizedKey.startsWith("sctnh.") ? normalizedKey.slice("sctnh.".length) : `sctnh.${normalizedKey}`;
  try {
    const remoteValue = i18n[normalizedKey] || i18n[fallbackKey];
    const localValue = i18nLocal[normalizedKey] || i18nLocal[fallbackKey];
    return remoteValue || localValue || normalizedKey;
  } catch (e) {
    console.error(`Header getI18n error`, e);
  }
  return normalizedKey;
};
const initI18n = () => {
  const cookieLocal = getLocal();
  let lang = cookieLocal.replace("_", "-").toLowerCase();
  if (lang === "iw-he") lang = "iw-il";
  else if (lang === "zh-tw") lang = "zh-cn";
  else if (lang === "fil-ph") lang = "tl-ph";
  return loadJs(`https://s.alicdn.com/@mcms/combine?name=ICBU-header_ssr&language=${lang}`).then(
    () => {
      if (window[`ICBU-header_ssr_${lang}`]) {
        i18nLocal = mergeI18nSources(defaultI18n, window[`ICBU-header_ssr_${lang}`]);
      }
      return i18nLocal;
    }
  );
};

;// ./src/shared/ui/Icon/index.tsx


const Icon = (props) => {
  const { type, className } = props;
  const iconClassName = `tnh-icon ${className || ""}`.trim();
  return /* @__PURE__ */ external_React_namespaceObject.createElement("svg", { className: iconClassName, "aria-hidden": "true" }, /* @__PURE__ */ external_React_namespaceObject.createElement("use", { xlinkHref: `#${type}` }));
};
/* harmony default export */ const ui_Icon = (Icon);

;// ./src/features/become-supplier/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/become-supplier/index.tsx







const BecomeSupplier = ({ config, defaultConfig }) => {
  const headerData = useHeaderData();
  const becomeSupplierConfig = config ?? defaultConfig ?? [];
  return /* @__PURE__ */ external_React_default().createElement("div", { className: "become-supplier-content" }, becomeSupplierConfig.map((item) => {
    if (headerData?.headerConfig?.disable?.includes(item.key)) {
      return null;
    }
    const itemText = item.i18nKey ? getI18n(item.i18nKey, headerData) : item.text || item.key;
    return /* @__PURE__ */ external_React_default().createElement(
      "a",
      {
        key: item.key,
        "data-tnhkey": item.key,
        className: "bsc-item rounded",
        href: item.url,
        target: "_blank",
        onClick: () => {
          log(item.key);
        }
      },
      /* @__PURE__ */ external_React_default().createElement(ui_Icon, { type: item.icon }),
      /* @__PURE__ */ external_React_default().createElement("div", { className: "become-supplier-content-desc" }, itemText)
    );
  }));
};
/* harmony default export */ const become_supplier = (BecomeSupplier);

;// ./src/features/help-center/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/help-center/index.tsx








const DEFAULT_HELP_CENTER_CONFIG = defaultSubHeaderConfig.helpCenter;
const getHeaderI18nData = (headerData) => {
  const { i18nData } = headerData || {};
  if (typeof i18nData === "string") {
    try {
      return JSON.parse(i18nData);
    } catch (e) {
      return {};
    }
  }
  return i18nData || {};
};
const hasRemoteI18nValue = (key, headerData) => {
  const i18nData = getHeaderI18nData(headerData);
  const normalizedKey = key.trim();
  const fallbackKey = normalizedKey.startsWith("sctnh.") ? normalizedKey.slice("sctnh.".length) : `sctnh.${normalizedKey}`;
  return Boolean(i18nData[normalizedKey] || i18nData[fallbackKey]);
};
const HelpCenter = ({ config, defaultConfig }) => {
  const headerData = useHeaderData();
  const resolvedConfig = config ?? defaultConfig ?? DEFAULT_HELP_CENTER_CONFIG;
  const getText = (item) => {
    if (item.i18nKey && (!item.text || hasRemoteI18nValue(item.i18nKey, headerData))) {
      return getI18n(item.i18nKey, headerData);
    }
    return item.text || item.key;
  };
  const visibleLinkItems = resolvedConfig.filter(
    (item) => !headerData?.headerConfig?.disable?.includes(item.key)
  );
  return /* @__PURE__ */ external_React_default().createElement("div", { className: "help-center-content" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "help-center-content__links" }, visibleLinkItems.map((item) => /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      key: item.key,
      "data-tnhkey": item.key,
      className: "help-center-content__link",
      href: item.url || item.link,
      target: "_blank",
      rel: "noreferrer",
      onClick: () => {
        log(item.key);
      }
    },
    /* @__PURE__ */ external_React_default().createElement("span", { className: "help-center-content__link-text" }, getText(item)),
    /* @__PURE__ */ external_React_default().createElement(ui_Icon, { type: "icon-right-arrow" })
  ))));
};
/* harmony default export */ const help_center = (HelpCenter);

;// ./node_modules/reactjs-popup/dist/reactjs-popup.esm.js


function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var useOnEscape = function useOnEscape2(handler, active) {
  if (active === void 0) {
    active = true;
  }
  ;(0,external_React_namespaceObject.useEffect)(function() {
    if (!active) return;
    var listener = function listener2(event) {
      if (event.key === "Escape") handler(event);
    };
    document.addEventListener("keyup", listener);
    return function() {
      if (!active) return;
      document.removeEventListener("keyup", listener);
    };
  }, [handler, active]);
};
var useRepositionOnResize = function useRepositionOnResize2(handler, active) {
  if (active === void 0) {
    active = true;
  }
  ;(0,external_React_namespaceObject.useEffect)(function() {
    if (!active) return;
    var listener = function listener2() {
      handler();
    };
    window.addEventListener("resize", listener);
    return function() {
      if (!active) return;
      window.removeEventListener("resize", listener);
    };
  }, [handler, active]);
};
var useOnClickOutside = function useOnClickOutside2(ref, handler, active) {
  if (active === void 0) {
    active = true;
  }
  ;(0,external_React_namespaceObject.useEffect)(function() {
    if (!active) return;
    var listener = function listener2(event) {
      var refs = Array.isArray(ref) ? ref : [ref];
      var contains = false;
      refs.forEach(function(r) {
        if (!r.current || r.current.contains(event.target)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return function() {
      if (!active) return;
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, active]);
};
var useTabbing = function useTabbing2(contentRef, active) {
  if (active === void 0) {
    active = true;
  }
  ;(0,external_React_namespaceObject.useEffect)(function() {
    if (!active) return;
    var listener = function listener2(event) {
      if (event.keyCode === 9) {
        var _contentRef$current;
        var els = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
        var focusableEls = Array.prototype.slice.call(els);
        if (focusableEls.length === 1) {
          event.preventDefault();
          return;
        }
        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        if (event.shiftKey && document.activeElement === firstFocusableEl) {
          event.preventDefault();
          lastFocusableEl.focus();
        } else if (document.activeElement === lastFocusableEl) {
          event.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };
    document.addEventListener("keydown", listener);
    return function() {
      if (!active) return;
      document.removeEventListener("keydown", listener);
    };
  }, [contentRef, active]);
};
var reactjs_popup_esm_useIsomorphicLayoutEffect = typeof window !== "undefined" ? external_React_namespaceObject.useLayoutEffect : external_React_namespaceObject.useEffect;
var Style = {
  popupContent: {
    tooltip: {
      position: "absolute",
      zIndex: 999
    },
    modal: {
      position: "relative",
      margin: "auto"
    }
  },
  popupArrow: {
    height: "8px",
    width: "16px",
    position: "absolute",
    background: "transparent",
    color: "#FFF",
    zIndex: -1
  },
  overlay: {
    tooltip: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      zIndex: 999
    },
    modal: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      display: "flex",
      zIndex: 999
    }
  }
};
var POSITION_TYPES = ["top left", "top center", "top right", "right top", "right center", "right bottom", "bottom left", "bottom center", "bottom right", "left top", "left center", "left bottom"];
var getCoordinatesForPosition = function getCoordinatesForPosition2(triggerBounding, ContentBounding, position, arrow, _ref) {
  var offsetX = _ref.offsetX, offsetY = _ref.offsetY;
  var margin = arrow ? 8 : 0;
  var args = position.split(" ");
  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height, width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = "";
  var arrowTop = "0%";
  var arrowLeft = "0%";
  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(180deg)  translateX(50%)";
      arrowTop = "100%";
      arrowLeft = "50%";
      break;
    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(0deg) translateY(-100%) translateX(-50%)";
      arrowLeft = "50%";
      break;
    case "left":
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " rotate(90deg)  translateY(50%) translateX(-25%)";
      arrowLeft = "100%";
      arrowTop = "50%";
      break;
    case "right":
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "rotate(-90deg)  translateY(-150%) translateX(25%)";
      arrowTop = "50%";
      break;
  }
  switch (args[1]) {
    case "top":
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;
    case "bottom":
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;
    case "left":
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;
    case "right":
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }
  top = args[0] === "top" ? top - offsetY : top + offsetY;
  left = args[0] === "left" ? left - offsetX : left + offsetX;
  return {
    top,
    left,
    transform,
    arrowLeft,
    arrowTop
  };
};
var getTooltipBoundary = function getTooltipBoundary2(keepTooltipInside) {
  var boundingBox = {
    top: 0,
    left: 0,
    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,
    /* eslint-disable-next-line no-undef */
    height: window.innerHeight
  };
  if (typeof keepTooltipInside === "string") {
    var selector = document.querySelector(keepTooltipInside);
    if (false) // removed by dead control flow
{}
    if (selector !== null) boundingBox = selector.getBoundingClientRect();
  }
  return boundingBox;
};
var calculatePosition = function calculatePosition2(triggerBounding, ContentBounding, position, arrow, _ref2, keepTooltipInside) {
  var offsetX = _ref2.offsetX, offsetY = _ref2.offsetY;
  var bestCoords = {
    arrowLeft: "0%",
    arrowTop: "0%",
    left: 0,
    top: 0,
    transform: "rotate(135deg)"
  };
  var i = 0;
  var wrapperBox = getTooltipBoundary(keepTooltipInside);
  var positions = Array.isArray(position) ? position : [position];
  if (keepTooltipInside || Array.isArray(position)) positions = [].concat(positions, POSITION_TYPES);
  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
      offsetX,
      offsetY
    });
    var contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height
    };
    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
      i++;
    } else {
      break;
    }
  }
  return bestCoords;
};
var popupIdCounter = 0;
var getRootPopup = function getRootPopup2() {
  var PopupRoot = document.getElementById("popup-root");
  if (PopupRoot === null) {
    PopupRoot = document.createElement("div");
    PopupRoot.setAttribute("id", "popup-root");
    document.body.appendChild(PopupRoot);
  }
  return PopupRoot;
};
var Popup = /* @__PURE__ */ (0,external_React_namespaceObject.forwardRef)(function(_ref, ref) {
  var _ref$trigger = _ref.trigger, trigger = _ref$trigger === void 0 ? null : _ref$trigger, _ref$onOpen = _ref.onOpen, onOpen = _ref$onOpen === void 0 ? function() {
  } : _ref$onOpen, _ref$onClose = _ref.onClose, onClose = _ref$onClose === void 0 ? function() {
  } : _ref$onClose, _ref$defaultOpen = _ref.defaultOpen, defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen, _ref$open = _ref.open, open = _ref$open === void 0 ? void 0 : _ref$open, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, _ref$nested = _ref.nested, nested = _ref$nested === void 0 ? false : _ref$nested, _ref$closeOnDocumentC = _ref.closeOnDocumentClick, closeOnDocumentClick = _ref$closeOnDocumentC === void 0 ? true : _ref$closeOnDocumentC, _ref$repositionOnResi = _ref.repositionOnResize, repositionOnResize = _ref$repositionOnResi === void 0 ? true : _ref$repositionOnResi, _ref$closeOnEscape = _ref.closeOnEscape, closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape, _ref$on = _ref.on, on = _ref$on === void 0 ? ["click"] : _ref$on, _ref$contentStyle = _ref.contentStyle, contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle, _ref$arrowStyle = _ref.arrowStyle, arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle, _ref$overlayStyle = _ref.overlayStyle, overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$position = _ref.position, position = _ref$position === void 0 ? "bottom center" : _ref$position, _ref$modal = _ref.modal, modal = _ref$modal === void 0 ? false : _ref$modal, _ref$lockScroll = _ref.lockScroll, lockScroll = _ref$lockScroll === void 0 ? false : _ref$lockScroll, _ref$arrow = _ref.arrow, arrow = _ref$arrow === void 0 ? true : _ref$arrow, _ref$offsetX = _ref.offsetX, offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX, _ref$offsetY = _ref.offsetY, offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY, _ref$mouseEnterDelay = _ref.mouseEnterDelay, mouseEnterDelay = _ref$mouseEnterDelay === void 0 ? 100 : _ref$mouseEnterDelay, _ref$mouseLeaveDelay = _ref.mouseLeaveDelay, mouseLeaveDelay = _ref$mouseLeaveDelay === void 0 ? 100 : _ref$mouseLeaveDelay, _ref$keepTooltipInsid = _ref.keepTooltipInside, keepTooltipInside = _ref$keepTooltipInsid === void 0 ? false : _ref$keepTooltipInsid, children = _ref.children;
  var _useState = (0,external_React_namespaceObject.useState)(open || defaultOpen), isOpen = _useState[0], setIsOpen = _useState[1];
  var triggerRef = (0,external_React_namespaceObject.useRef)(null);
  var contentRef = (0,external_React_namespaceObject.useRef)(null);
  var arrowRef = (0,external_React_namespaceObject.useRef)(null);
  var focusedElBeforeOpen = (0,external_React_namespaceObject.useRef)(null);
  var popupId = (0,external_React_namespaceObject.useRef)("popup-" + ++popupIdCounter);
  var isModal = modal ? true : !trigger;
  var timeOut = (0,external_React_namespaceObject.useRef)(0);
  reactjs_popup_esm_useIsomorphicLayoutEffect(function() {
    if (isOpen) {
      focusedElBeforeOpen.current = document.activeElement;
      setPosition();
      focusContentOnOpen();
      lockScrolll();
    } else {
      resetScroll();
    }
    return function() {
      clearTimeout(timeOut.current);
    };
  }, [isOpen]);
  (0,external_React_namespaceObject.useEffect)(function() {
    if (typeof open === "boolean") {
      if (open) openPopup();
      else closePopup();
    }
  }, [open, disabled]);
  var openPopup = function openPopup2(event) {
    if (isOpen || disabled) return;
    setIsOpen(true);
    setTimeout(function() {
      return onOpen(event);
    }, 0);
  };
  var closePopup = function closePopup2(event) {
    var _focusedElBeforeOpen$;
    if (!isOpen || disabled) return;
    setIsOpen(false);
    if (isModal) (_focusedElBeforeOpen$ = focusedElBeforeOpen.current) === null || _focusedElBeforeOpen$ === void 0 ? void 0 : _focusedElBeforeOpen$.focus();
    setTimeout(function() {
      return onClose(event);
    }, 0);
  };
  var togglePopup = function togglePopup2(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (!isOpen) openPopup(event);
    else closePopup(event);
  };
  var onMouseEnter = function onMouseEnter2(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function() {
      return openPopup(event);
    }, mouseEnterDelay);
  };
  var onContextMenu = function onContextMenu2(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    togglePopup();
  };
  var onMouseLeave = function onMouseLeave2(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function() {
      return closePopup(event);
    }, mouseLeaveDelay);
  };
  var lockScrolll = function lockScrolll2() {
    if (isModal && lockScroll) document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };
  var resetScroll = function resetScroll2() {
    if (isModal && lockScroll) document.getElementsByTagName("body")[0].style.overflow = "auto";
  };
  var focusContentOnOpen = function focusContentOnOpen2() {
    var _contentRef$current;
    var focusableEls = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    var firstEl = Array.prototype.slice.call(focusableEls)[0];
    firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
  };
  (0,external_React_namespaceObject.useImperativeHandle)(ref, function() {
    return {
      open: function open2() {
        openPopup();
      },
      close: function close() {
        closePopup();
      },
      toggle: function toggle() {
        togglePopup();
      }
    };
  });
  var setPosition = function setPosition2() {
    if (isModal || !isOpen) return;
    if (!(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) return;
    var trigger2 = triggerRef.current.getBoundingClientRect();
    var content2 = contentRef.current.getBoundingClientRect();
    var cords = calculatePosition(trigger2, content2, position, arrow, {
      offsetX,
      offsetY
    }, keepTooltipInside);
    contentRef.current.style.top = cords.top + window.scrollY + "px";
    contentRef.current.style.left = cords.left + window.scrollX + "px";
    if (arrow && !!arrowRef.current) {
      var _arrowStyle$top, _arrowStyle$left;
      arrowRef.current.style.transform = cords.transform;
      arrowRef.current.style.setProperty("-ms-transform", cords.transform);
      arrowRef.current.style.setProperty("-webkit-transform", cords.transform);
      arrowRef.current.style.top = ((_arrowStyle$top = arrowStyle.top) === null || _arrowStyle$top === void 0 ? void 0 : _arrowStyle$top.toString()) || cords.arrowTop;
      arrowRef.current.style.left = ((_arrowStyle$left = arrowStyle.left) === null || _arrowStyle$left === void 0 ? void 0 : _arrowStyle$left.toString()) || cords.arrowLeft;
    }
  };
  useOnEscape(closePopup, closeOnEscape);
  useTabbing(contentRef, isOpen && isModal);
  useRepositionOnResize(setPosition, repositionOnResize);
  useOnClickOutside(!!trigger ? [contentRef, triggerRef] : [contentRef], closePopup, closeOnDocumentClick && !nested);
  var renderTrigger = function renderTrigger2() {
    var triggerProps = {
      key: "T",
      ref: triggerRef,
      "aria-describedby": popupId.current
    };
    var onAsArray = Array.isArray(on) ? on : [on];
    for (var i = 0, len = onAsArray.length; i < len; i++) {
      switch (onAsArray[i]) {
        case "click":
          triggerProps.onClick = togglePopup;
          break;
        case "right-click":
          triggerProps.onContextMenu = onContextMenu;
          break;
        case "hover":
          triggerProps.onMouseEnter = onMouseEnter;
          triggerProps.onMouseLeave = onMouseLeave;
          break;
        case "focus":
          triggerProps.onFocus = onMouseEnter;
          triggerProps.onBlur = onMouseLeave;
          break;
      }
    }
    if (typeof trigger === "function") {
      var comp = trigger(isOpen);
      return !!trigger && external_React_default().cloneElement(comp, triggerProps);
    }
    return !!trigger && external_React_default().cloneElement(trigger, triggerProps);
  };
  var addWarperAction = function addWarperAction2() {
    var popupContentStyle = isModal ? Style.popupContent.modal : Style.popupContent.tooltip;
    var childrenElementProps = {
      className: "popup-content " + (className !== "" ? className.split(" ").map(function(c) {
        return c + "-content";
      }).join(" ") : ""),
      style: _extends({}, popupContentStyle, contentStyle, {
        pointerEvents: "auto"
      }),
      ref: contentRef,
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    };
    if (!modal && on.indexOf("hover") >= 0) {
      childrenElementProps.onMouseEnter = onMouseEnter;
      childrenElementProps.onMouseLeave = onMouseLeave;
    }
    return childrenElementProps;
  };
  var renderContent = function renderContent2() {
    return external_React_default().createElement("div", Object.assign({}, addWarperAction(), {
      key: "C",
      role: isModal ? "dialog" : "tooltip",
      id: popupId.current
    }), arrow && !isModal && external_React_default().createElement("div", {
      ref: arrowRef,
      style: Style.popupArrow
    }, external_React_default().createElement("svg", {
      "data-testid": "arrow",
      className: "popup-arrow " + (className !== "" ? className.split(" ").map(function(c) {
        return c + "-arrow";
      }).join(" ") : ""),
      viewBox: "0 0 32 16",
      style: _extends({
        position: "absolute"
      }, arrowStyle)
    }, external_React_default().createElement("path", {
      d: "M16 0l16 16H0z",
      fill: "currentcolor"
    }))), children && typeof children === "function" ? children(closePopup, isOpen) : children);
  };
  var overlay = !(on.indexOf("hover") >= 0);
  var ovStyle = isModal ? Style.overlay.modal : Style.overlay.tooltip;
  var content = [overlay && external_React_default().createElement("div", {
    key: "O",
    "data-testid": "overlay",
    "data-popup": isModal ? "modal" : "tooltip",
    className: "popup-overlay " + (className !== "" ? className.split(" ").map(function(c) {
      return c + "-overlay";
    }).join(" ") : ""),
    style: _extends({}, ovStyle, overlayStyle, {
      pointerEvents: closeOnDocumentClick && nested || isModal ? "auto" : "none"
    }),
    onClick: closeOnDocumentClick && nested ? closePopup : void 0,
    tabIndex: -1
  }, isModal && renderContent()), !isModal && renderContent()];
  return external_React_default().createElement((external_React_default()).Fragment, null, renderTrigger(), isOpen && external_ReactDOM_default().createPortal(content, getRootPopup()));
});
/* harmony default export */ const reactjs_popup_esm = (Popup);


;// ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}


;// ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


;// ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}


;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}


;// ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function objectSpread2_objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}


;// ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


;// ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


;// ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


;// ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}


;// ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


;// ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}


;// ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


;// ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


;// ./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js




var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref.inputValue, propsMenuIsOpen = _ref.menuIsOpen, propsOnChange = _ref.onChange, propsOnInputChange = _ref.onInputChange, propsOnMenuClose = _ref.onMenuClose, propsOnMenuOpen = _ref.onMenuOpen, propsValue = _ref.value, restSelectProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,external_React_namespaceObject.useState)(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = (0,external_React_namespaceObject.useState)(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = (0,external_React_namespaceObject.useState)(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange = (0,external_React_namespaceObject.useCallback)(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = (0,external_React_namespaceObject.useCallback)(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = (0,external_React_namespaceObject.useCallback)(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = (0,external_React_namespaceObject.useCallback)(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}


;// ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  return extends_extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, extends_extends.apply(null, arguments);
}


;// ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


;// ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}


;// ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}


;// ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}


;// ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}


;// ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}


;// ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


;// ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}


;// ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}


;// ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}


;// ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


;// ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


;// ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}


;// ./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ (function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
})();


;// ./node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var PAGE = "@page";
var MEDIA = "@media";
var IMPORT = "@import";
var CHARSET = "@charset";
var VIEWPORT = "@viewport";
var SUPPORTS = "@supports";
var DOCUMENT = "@document";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var FONT_FACE = "@font-face";
var COUNTER_STYLE = "@counter-style";
var FONT_FEATURE_VALUES = "@font-feature-values";
var LAYER = "@layer";

;// ./node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var Utility_assign = Object.assign;
function hash(value, length) {
  return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

;// ./node_modules/stylis/src/Tokenizer.js
/* unused harmony import specifier */ var Tokenizer_append;
/* unused harmony import specifier */ var Tokenizer_from;

var line = 1;
var column = 1;
var Tokenizer_length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return Utility_assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function Tokenizer_char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < Tokenizer_length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, Tokenizer_length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
  return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function tokenizer(children) {
  while (next())
    switch (token(character)) {
      case 0:
        Tokenizer_append(identifier(position - 1), children);
        break;
      case 2:
        Tokenizer_append(delimit(character), children);
        break;
      default:
        Tokenizer_append(Tokenizer_from(character), children);
    }
  return children;
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

;// ./node_modules/stylis/src/Parser.js



function compile(value) {
  return dealloc(Parser_parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function Parser_parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning)
    switch (previous = character, character = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters, length - 1) == 58) {
          if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters += delimit(character);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters += whitespace(previous);
        break;
      // \
      case 92:
        characters += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters = replace(characters, /\f/g, "");
            if (property > 0 && strlen(characters) - length)
              append(property > 32 ? declaration(characters + ";", rule, parent, length - 1) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2), declarations);
            break;
          // @ ;
          case 59:
            characters += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
            if (character === 123)
              if (offset === 0)
                Parser_parse(characters, root, reference, reference, props, rulesets, length, points, children);
              else
                switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Parser_parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                    break;
                  default:
                    Parser_parse(characters, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
        break;
      // :
      case 58:
        length = 1 + strlen(characters), property = previous;
      default:
        if (variable < 1) {
          if (character == 123)
            --variable;
          else if (character == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters += from(character), character * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters += delimit(next());
            atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(Tokenizer_char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}

;// ./node_modules/stylis/src/Prefixer.js
/* unused harmony import specifier */ var Prefixer_WEBKIT;
/* unused harmony import specifier */ var Prefixer_MOZ;
/* unused harmony import specifier */ var Prefixer_MS;
/* unused harmony import specifier */ var Prefixer_hash;
/* unused harmony import specifier */ var Prefixer_charat;
/* unused harmony import specifier */ var Prefixer_replace;
/* unused harmony import specifier */ var Prefixer_match;
/* unused harmony import specifier */ var Prefixer_substr;
/* unused harmony import specifier */ var Prefixer_indexof;
/* unused harmony import specifier */ var Prefixer_strlen;


function Prefixer_prefix(value, length, children) {
  switch (Prefixer_hash(value, length)) {
    // color-adjust
    case 5103:
      return Prefixer_WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Prefixer_WEBKIT + value + value;
    // tab-size
    case 4789:
      return Prefixer_MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Prefixer_WEBKIT + value + Prefixer_MOZ + value + Prefixer_MS + value + value;
    // writing-mode
    case 5936:
      switch (Prefixer_charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return Prefixer_WEBKIT + value + Prefixer_MS + Prefixer_replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return Prefixer_WEBKIT + value + Prefixer_MS + Prefixer_replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return Prefixer_WEBKIT + value + Prefixer_MS + Prefixer_replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Prefixer_WEBKIT + value + Prefixer_MS + value + value;
    // order
    case 6165:
      return Prefixer_WEBKIT + value + Prefixer_MS + "flex-" + value + value;
    // align-items
    case 5187:
      return Prefixer_WEBKIT + value + Prefixer_replace(value, /(\w+).+(:[^]+)/, Prefixer_WEBKIT + "box-$1$2" + Prefixer_MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return Prefixer_WEBKIT + value + Prefixer_MS + "flex-item-" + Prefixer_replace(value, /flex-|-self/g, "") + (!Prefixer_match(value, /flex-|baseline/) ? Prefixer_MS + "grid-row-" + Prefixer_replace(value, /flex-|-self/g, "") : "") + value;
    // align-content
    case 4675:
      return Prefixer_WEBKIT + value + Prefixer_MS + "flex-line-pack" + Prefixer_replace(value, /align-content|flex-|-self/g, "") + value;
    // flex-shrink
    case 5548:
      return Prefixer_WEBKIT + value + Prefixer_MS + Prefixer_replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return Prefixer_WEBKIT + value + Prefixer_MS + Prefixer_replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return Prefixer_WEBKIT + "box-" + Prefixer_replace(value, "-grow", "") + Prefixer_WEBKIT + value + Prefixer_MS + Prefixer_replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return Prefixer_WEBKIT + Prefixer_replace(value, /([^-])(transform)/g, "$1" + Prefixer_WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return Prefixer_replace(Prefixer_replace(Prefixer_replace(value, /(zoom-|grab)/, Prefixer_WEBKIT + "$1"), /(image-set)/, Prefixer_WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return Prefixer_replace(value, /(image-set\([^]*)/, Prefixer_WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return Prefixer_replace(Prefixer_replace(value, /(.+:)(flex-)?(.*)/, Prefixer_WEBKIT + "box-pack:$3" + Prefixer_MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Prefixer_WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!Prefixer_match(value, /flex-|baseline/)) return Prefixer_MS + "grid-column-align" + Prefixer_substr(value, length) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Prefixer_MS + Prefixer_replace(value, "template-", "") + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length = index, Prefixer_match(element.props, /grid-\w+-end/);
      })) {
        return ~Prefixer_indexof(value + (children = children[length].value), "span") ? value : Prefixer_MS + Prefixer_replace(value, "-start", "") + value + Prefixer_MS + "grid-row-span:" + (~Prefixer_indexof(children, "span") ? Prefixer_match(children, /\d+/) : +Prefixer_match(children, /\d+/) - +Prefixer_match(value, /\d+/)) + ";";
      }
      return Prefixer_MS + Prefixer_replace(value, "-start", "") + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return Prefixer_match(element.props, /grid-\w+-start/);
      }) ? value : Prefixer_MS + Prefixer_replace(Prefixer_replace(value, "-end", "-span"), "span ", "") + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Prefixer_replace(value, /(.+)-inline(.+)/, Prefixer_WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Prefixer_strlen(value) - 1 - length > 6)
        switch (Prefixer_charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Prefixer_charat(value, length + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Prefixer_replace(value, /(.+:)(.+)-([^]+)/, "$1" + Prefixer_WEBKIT + "$2-$3$1" + Prefixer_MOZ + (Prefixer_charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~Prefixer_indexof(value, "stretch") ? Prefixer_prefix(Prefixer_replace(value, "stretch", "fill-available"), length, children) + value : value;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Prefixer_replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
        return Prefixer_MS + a + ":" + b + f + (c ? Prefixer_MS + a + "-span:" + (d ? e : +e - +b) + f : "") + value;
      });
    // position: sticky
    case 4949:
      if (Prefixer_charat(value, length + 6) === 121)
        return Prefixer_replace(value, ":", ":" + Prefixer_WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Prefixer_charat(value, Prefixer_charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Prefixer_replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Prefixer_WEBKIT + (Prefixer_charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + Prefixer_WEBKIT + "$2$3$1" + Prefixer_MS + "$2box$3") + value;
        // (inline-)?gri(d)
        case 100:
          return Prefixer_replace(value, ":", ":" + Prefixer_MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Prefixer_replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}

;// ./node_modules/stylis/src/Serializer.js


function Serializer_serialize(children, callback) {
  var output = "";
  var length = sizeof(children);
  for (var i = 0; i < length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + Serializer_serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = Serializer_serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

;// ./node_modules/stylis/src/Middleware.js
/* unused harmony import specifier */ var Middleware_DECLARATION;
/* unused harmony import specifier */ var Middleware_KEYFRAMES;
/* unused harmony import specifier */ var Middleware_WEBKIT;
/* unused harmony import specifier */ var Middleware_RULESET;
/* unused harmony import specifier */ var Middleware_MOZ;
/* unused harmony import specifier */ var Middleware_MS;
/* unused harmony import specifier */ var Middleware_replace;
/* unused harmony import specifier */ var Middleware_combine;
/* unused harmony import specifier */ var Middleware_match;
/* unused harmony import specifier */ var Middleware_charat;
/* unused harmony import specifier */ var Middleware_substr;
/* unused harmony import specifier */ var Middleware_strlen;
/* unused harmony import specifier */ var Middleware_sizeof;
/* unused harmony import specifier */ var Middleware_copy;
/* unused harmony import specifier */ var Middleware_tokenize;
/* unused harmony import specifier */ var Middleware_serialize;
/* unused harmony import specifier */ var Middleware_prefix;





function middleware(collection) {
  var length = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case Middleware_DECLARATION:
          element.return = Middleware_prefix(element.value, element.length, children);
          return;
        case Middleware_KEYFRAMES:
          return Middleware_serialize([Middleware_copy(element, { value: Middleware_replace(element.value, "@", "@" + Middleware_WEBKIT) })], callback);
        case Middleware_RULESET:
          if (element.length)
            return Middleware_combine(element.props, function(value) {
              switch (Middleware_match(value, /(::plac\w+|:read-\w+)/)) {
                // :read-(only|write)
                case ":read-only":
                case ":read-write":
                  return Middleware_serialize([Middleware_copy(element, { props: [Middleware_replace(value, /:(read-\w+)/, ":" + Middleware_MOZ + "$1")] })], callback);
                // :placeholder
                case "::placeholder":
                  return Middleware_serialize([
                    Middleware_copy(element, { props: [Middleware_replace(value, /:(plac\w+)/, ":" + Middleware_WEBKIT + "input-$1")] }),
                    Middleware_copy(element, { props: [Middleware_replace(value, /:(plac\w+)/, ":" + Middleware_MOZ + "$1")] }),
                    Middleware_copy(element, { props: [Middleware_replace(value, /:(plac\w+)/, Middleware_MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}
function namespace(element) {
  switch (element.type) {
    case Middleware_RULESET:
      element.props = element.props.map(function(value) {
        return Middleware_combine(Middleware_tokenize(value), function(value2, index, children) {
          switch (Middleware_charat(value2, 0)) {
            // \f
            case 12:
              return Middleware_substr(value2, 1, Middleware_strlen(value2));
            // \0 ( + > ~
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return value2;
            // :
            case 58:
              if (children[++index] === "global")
                children[index] = "", children[++index] = "\f" + Middleware_substr(children[index], index = 1, -1);
            // \s
            case 32:
              return index === 1 ? "" : value2;
            default:
              switch (index) {
                case 0:
                  element = value2;
                  return Middleware_sizeof(children) > 1 ? "" : value2;
                case (index = Middleware_sizeof(children) - 1):
                case 2:
                  return index === 2 ? value2 + element + element : value2 + element;
                default:
                  return value2;
              }
          }
        });
      });
  }
}

;// ./node_modules/stylis/index.js








;// ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};


;// ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}


;// ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js




var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = peek();
    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (token(character)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (token(character)) {
      case 0:
        if (character === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      // fallthrough
      default:
        parsed[index] += from(character);
    }
  } while (character = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function emotion_cache_browser_esm_prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
        // (s)tretch
        case 115:
          return ~indexof(value, "stretch") ? emotion_cache_browser_esm_prefix(replace(value, "stretch", "fill-available"), length) + value : value;
      }
      break;
    // position: sticky
    case 4949:
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        // (inline-)?fl(e)x
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    // writing-mode
    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var emotion_cache_browser_esm_prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = emotion_cache_browser_esm_prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return Serializer_serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ":read-only":
            case ":read-write":
              return Serializer_serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            // :placeholder
            case "::placeholder":
              return Serializer_serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var defaultStylisPlugins = [emotion_cache_browser_esm_prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      var dataEmotionAttribute = node.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node) {
        var attrib = node.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return Serializer_serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};


;// ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
hoist_non_react_statics_cjs_namespaceFn();

;// ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
/* unused harmony import specifier */ var hoistNonReactStatics$1;

var emotion_react_isolated_hnrs_browser_esm_hoistNonReactStatics = (function(targetComponent, sourceComponent) {
  return hoistNonReactStatics$1(targetComponent, sourceComponent);
});


;// ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};


;// ./node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}


;// ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};


;// ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js



var emotion_serialize_esm_isDevelopment = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes = interpolation;
      if (keyframes.anim === 1) {
        cursor = {
          name: keyframes.name,
          styles: keyframes.styles,
          next: cursor
        };
        return keyframes.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next = serializedStyles.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && emotion_serialize_esm_isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
}


;// ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js

var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = external_React_namespaceObject.useInsertionEffect ? external_React_namespaceObject.useInsertionEffect : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || external_React_namespaceObject.useLayoutEffect;


;// ./node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
/* unused harmony import specifier */ var emotion_element_f0de968e_browser_esm_React;
/* unused harmony import specifier */ var useContext;
/* unused harmony import specifier */ var emotion_element_f0de968e_browser_esm_extends;
/* unused harmony import specifier */ var emotion_element_f0de968e_browser_esm_weakMemoize;
/* unused harmony import specifier */ var emotion_element_f0de968e_browser_esm_hoistNonReactStatics;









var emotion_element_f0de968e_browser_esm_isDevelopment = false;
var EmotionCacheContext = /* @__PURE__ */ external_React_namespaceObject.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ (0,external_React_namespaceObject.forwardRef)(function(props, ref) {
    var cache = (0,external_React_namespaceObject.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ external_React_namespaceObject.createContext({});
var useTheme = function useTheme2() {
  return emotion_element_f0de968e_browser_esm_React.useContext(ThemeContext);
};
var getTheme = function getTheme2(outerTheme, theme) {
  if (typeof theme === "function") {
    var mergedTheme = theme(outerTheme);
    return mergedTheme;
  }
  return emotion_element_f0de968e_browser_esm_extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* @__PURE__ */ (/* unused pure expression or super */ null && (emotion_element_f0de968e_browser_esm_weakMemoize(function(outerTheme) {
  return emotion_element_f0de968e_browser_esm_weakMemoize(function(theme) {
    return getTheme(outerTheme, theme);
  });
})));
var ThemeProvider = function ThemeProvider2(props) {
  var theme = emotion_element_f0de968e_browser_esm_React.useContext(ThemeContext);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /* @__PURE__ */ emotion_element_f0de968e_browser_esm_React.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || "Component";
  var WithTheme = /* @__PURE__ */ emotion_element_f0de968e_browser_esm_React.forwardRef(function render(props, ref) {
    var theme = emotion_element_f0de968e_browser_esm_React.useContext(ThemeContext);
    return /* @__PURE__ */ emotion_element_f0de968e_browser_esm_React.createElement(Component, emotion_element_f0de968e_browser_esm_extends({
      theme,
      ref
    }, props));
  });
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return emotion_element_f0de968e_browser_esm_hoistNonReactStatics(WithTheme, Component);
}
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, external_React_namespaceObject.useContext(ThemeContext));
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && !emotion_element_f0de968e_browser_esm_isDevelopment) {
      newProps[_key2] = props[_key2];
    }
  }
  newProps.className = className;
  if (ref) {
    newProps.ref = ref;
  }
  return /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, /* @__PURE__ */ external_React_namespaceObject.createElement(Insertion, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ external_React_namespaceObject.createElement(WrappedComponent, newProps));
});
var Emotion$1 = Emotion;


;// ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
/* unused harmony import specifier */ var emotion_react_browser_esm_withEmotionCache;
/* unused harmony import specifier */ var emotion_react_browser_esm_ThemeContext;
/* unused harmony import specifier */ var emotion_react_browser_esm_isDevelopment;
/* unused harmony import specifier */ var emotion_react_browser_esm_React;
/* unused harmony import specifier */ var emotion_react_browser_esm_insertStyles;
/* unused harmony import specifier */ var emotion_react_browser_esm_getRegisteredStyles;
/* unused harmony import specifier */ var emotion_react_browser_esm_registerStyles;
/* unused harmony import specifier */ var emotion_react_browser_esm_useInsertionEffectWithLayoutFallback;
/* unused harmony import specifier */ var emotion_react_browser_esm_useInsertionEffectAlwaysWithSyncFallback;
/* unused harmony import specifier */ var emotion_react_browser_esm_serializeStyles;











var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return external_React_namespaceObject.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return external_React_namespaceObject.createElement.apply(null, createElementArgArray);
};
(function(_jsx) {
  var JSX;
  /* @__PURE__ */ (function(_JSX) {
  })(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
var Global = /* @__PURE__ */ (/* unused pure expression or super */ null && (emotion_react_browser_esm_withEmotionCache(function(props, cache) {
  var styles = props.styles;
  var serialized = emotion_react_browser_esm_serializeStyles([styles], void 0, emotion_react_browser_esm_React.useContext(emotion_react_browser_esm_ThemeContext));
  var sheetRef = emotion_react_browser_esm_React.useRef();
  emotion_react_browser_esm_useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true;
      node.setAttribute("data-emotion", key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  emotion_react_browser_esm_useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      emotion_react_browser_esm_insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
})));
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var emotion_react_browser_esm_classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = emotion_react_browser_esm_getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var emotion_react_browser_esm_Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serializedArr = _ref.serializedArr;
  emotion_react_browser_esm_useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      emotion_react_browser_esm_insertStyles(cache, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = /* @__PURE__ */ (/* unused pure expression or super */ null && (emotion_react_browser_esm_withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css2 = function css3() {
    if (hasRendered && emotion_react_browser_esm_isDevelopment) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = emotion_react_browser_esm_serializeStyles(args, cache.registered);
    serializedArr.push(serialized);
    emotion_react_browser_esm_registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && emotion_react_browser_esm_isDevelopment) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css2, emotion_react_browser_esm_classnames(args));
  };
  var content = {
    css: css2,
    cx,
    theme: emotion_react_browser_esm_React.useContext(emotion_react_browser_esm_ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /* @__PURE__ */ emotion_react_browser_esm_React.createElement(emotion_react_browser_esm_React.Fragment, null, /* @__PURE__ */ emotion_react_browser_esm_React.createElement(emotion_react_browser_esm_Insertion, {
    cache,
    serializedArr
  }), ele);
})));


;// ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}


;// ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = (/* unused pure expression or super */ null && (['top', 'right', 'bottom', 'left']));
const alignments = (/* unused pure expression or super */ null && (['start', 'end']));
const placements = /*#__PURE__*/(/* unused pure expression or super */ null && (sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), [])));
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = (/* unused pure expression or super */ null && ({
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
}));
function floating_ui_utils_clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === 't' || firstChar === 'b' ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes('start') ? placement.replace('start', 'end') : placement.replace('end', 'start');
}
const lrPlacement = (/* unused pure expression or super */ null && (['left', 'right']));
const rlPlacement = (/* unused pure expression or super */ null && (['right', 'left']));
const tbPlacement = (/* unused pure expression or super */ null && (['top', 'bottom']));
const btPlacement = (/* unused pure expression or super */ null && (['bottom', 'top']));
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}



;// ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs
/* unused harmony import specifier */ var floating_ui_core_getSideAxis;
/* unused harmony import specifier */ var floating_ui_core_getAlignmentAxis;
/* unused harmony import specifier */ var floating_ui_core_getAxisLength;
/* unused harmony import specifier */ var floating_ui_core_getSide;
/* unused harmony import specifier */ var floating_ui_core_getAlignment;
/* unused harmony import specifier */ var floating_ui_core_evaluate;
/* unused harmony import specifier */ var floating_ui_core_getPaddingObject;
/* unused harmony import specifier */ var floating_ui_core_rectToClientRect;
/* unused harmony import specifier */ var floating_ui_core_min;
/* unused harmony import specifier */ var floating_ui_core_clamp;
/* unused harmony import specifier */ var floating_ui_core_getOppositeAlignmentPlacement;
/* unused harmony import specifier */ var floating_ui_core_placements;
/* unused harmony import specifier */ var floating_ui_core_getAlignmentSides;
/* unused harmony import specifier */ var floating_ui_core_getOppositePlacement;
/* unused harmony import specifier */ var floating_ui_core_getExpandedPlacements;
/* unused harmony import specifier */ var floating_ui_core_getOppositeAxisPlacements;
/* unused harmony import specifier */ var floating_ui_core_sides;
/* unused harmony import specifier */ var floating_ui_core_max;
/* unused harmony import specifier */ var floating_ui_core_getOppositeAxis;



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = floating_ui_core_getSideAxis(placement);
  const alignmentAxis = floating_ui_core_getAlignmentAxis(placement);
  const alignLength = floating_ui_core_getAxisLength(alignmentAxis);
  const side = floating_ui_core_getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (floating_ui_core_getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = floating_ui_core_evaluate(options, state);
  const paddingObject = floating_ui_core_getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = floating_ui_core_rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = floating_ui_core_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

// Maximum number of resets that can occur before bailing to avoid infinite reset loops.
const MAX_RESET_COUNT = 50;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const platformWithDetectOverflow = platform.detectOverflow ? platform : {
    ...platform,
    detectOverflow
  };
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = floating_ui_core_evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = floating_ui_core_getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = floating_ui_core_getAlignmentAxis(placement);
    const length = floating_ui_core_getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = floating_ui_core_min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = floating_ui_core_min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = floating_ui_core_clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && floating_ui_core_getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => floating_ui_core_getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => floating_ui_core_getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => floating_ui_core_getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return floating_ui_core_getAlignment(placement) === alignment || (autoAlignment ? floating_ui_core_getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = floating_ui_core_placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_core_evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === floating_ui_core_placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = floating_ui_core_getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[floating_ui_core_getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = floating_ui_core_getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      floating_ui_core_getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_core_evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = floating_ui_core_getSide(placement);
      const initialSideAxis = floating_ui_core_getSideAxis(initialPlacement);
      const isBasePlacement = floating_ui_core_getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [floating_ui_core_getOppositePlacement(initialPlacement)] : floating_ui_core_getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...floating_ui_core_getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = floating_ui_core_getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== floating_ui_core_getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => floating_ui_core_getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = floating_ui_core_getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return floating_ui_core_sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects,
        platform
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = floating_ui_core_evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await platform.detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await platform.detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = floating_ui_core_min(...rects.map(rect => rect.left));
  const minY = floating_ui_core_min(...rects.map(rect => rect.top));
  const maxX = floating_ui_core_max(...rects.map(rect => rect.right));
  const maxY = floating_ui_core_max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => floating_ui_core_rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = floating_ui_core_evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = floating_ui_core_rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = floating_ui_core_getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (floating_ui_core_getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = floating_ui_core_getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = floating_ui_core_getSide(placement) === 'left';
          const maxRight = floating_ui_core_max(...clientRects.map(rect => rect.right));
          const minLeft = floating_ui_core_min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/(/* unused pure expression or super */ null && (new Set(['left', 'top'])));

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = floating_ui_core_getSide(placement);
  const alignment = floating_ui_core_getAlignment(placement);
  const isVertical = floating_ui_core_getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = floating_ui_core_evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = floating_ui_core_evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const crossAxis = floating_ui_core_getSideAxis(floating_ui_core_getSide(placement));
      const mainAxis = floating_ui_core_getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = floating_ui_core_clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = floating_ui_core_clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = floating_ui_core_evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = floating_ui_core_getSideAxis(placement);
      const mainAxis = floating_ui_core_getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = floating_ui_core_evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = originSides.has(floating_ui_core_getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = floating_ui_core_evaluate(options, state);
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const side = floating_ui_core_getSide(placement);
      const alignment = floating_ui_core_getAlignment(placement);
      const isYAxis = floating_ui_core_getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = floating_ui_core_min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = floating_ui_core_min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = floating_ui_core_max(overflow.left, 0);
        const xMax = floating_ui_core_max(overflow.right, 0);
        const yMin = floating_ui_core_max(overflow.top, 0);
        const yMax = floating_ui_core_max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : floating_ui_core_max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : floating_ui_core_max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};



;// ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = floating_ui_utils_dom_getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== 'inline' && display !== 'contents';
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(':popover-open')) {
      return true;
    }
  } catch (_e) {
    // no-op
  }
  try {
    return element.matches(':modal');
  } catch (_e) {
    return false;
  }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = value => !!value && value !== 'none';
let isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? floating_ui_utils_dom_getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || '') || containRe.test(css.contain || '');
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function floating_ui_utils_dom_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}



;// ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
/* unused harmony import specifier */ var floating_ui_dom_rectToClientRect;
/* unused harmony import specifier */ var detectOverflow$1;
/* unused harmony import specifier */ var offset$1;
/* unused harmony import specifier */ var autoPlacement$1;
/* unused harmony import specifier */ var shift$1;
/* unused harmony import specifier */ var flip$1;
/* unused harmony import specifier */ var size$1;
/* unused harmony import specifier */ var hide$1;
/* unused harmony import specifier */ var arrow$1;
/* unused harmony import specifier */ var inline$1;
/* unused harmony import specifier */ var limitShift$1;
/* unused harmony import specifier */ var computePosition$1;
/* unused harmony import specifier */ var floating_ui_dom_createCoords;
/* unused harmony import specifier */ var floating_ui_dom_max;
/* unused harmony import specifier */ var floating_ui_dom_min;
/* unused harmony import specifier */ var floating_ui_dom_getNodeScroll;
/* unused harmony import specifier */ var floating_ui_dom_getDocumentElement;
/* unused harmony import specifier */ var floating_ui_dom_isTopLayer;
/* unused harmony import specifier */ var floating_ui_dom_isHTMLElement;
/* unused harmony import specifier */ var floating_ui_dom_getNodeName;
/* unused harmony import specifier */ var floating_ui_dom_isOverflowElement;
/* unused harmony import specifier */ var getComputedStyle$1;
/* unused harmony import specifier */ var floating_ui_dom_getWindow;
/* unused harmony import specifier */ var floating_ui_dom_isWebKit;
/* unused harmony import specifier */ var floating_ui_dom_isElement;
/* unused harmony import specifier */ var floating_ui_dom_getParentNode;
/* unused harmony import specifier */ var floating_ui_dom_isLastTraversableNode;
/* unused harmony import specifier */ var floating_ui_dom_getOverflowAncestors;
/* unused harmony import specifier */ var floating_ui_dom_isContainingBlock;
/* unused harmony import specifier */ var floating_ui_dom_isTableElement;
/* unused harmony import specifier */ var floating_ui_dom_getContainingBlock;





function getCssDimensions(element) {
  const css = floating_ui_utils_dom_getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = floating_ui_utils_dom_getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = floating_ui_dom_getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(floating_ui_dom_getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = floating_ui_dom_getDocumentElement(offsetParent);
  const topLayer = elements ? floating_ui_dom_isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = floating_ui_dom_createCoords(1);
  const offsets = floating_ui_dom_createCoords(0);
  const isOffsetParentAnElement = floating_ui_dom_isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (floating_ui_dom_getNodeName(offsetParent) !== 'body' || floating_ui_dom_isOverflowElement(documentElement)) {
      scroll = floating_ui_dom_getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : floating_ui_dom_createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = floating_ui_dom_getDocumentElement(element);
  const scroll = floating_ui_dom_getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = floating_ui_dom_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = floating_ui_dom_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += floating_ui_dom_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = floating_ui_dom_getWindow(element);
  const html = floating_ui_dom_getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = floating_ui_dom_isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
  // visual width of the <html> but this is not considered in the size
  // of `html.clientWidth`.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = floating_ui_dom_isHTMLElement(element) ? getScale(element) : floating_ui_dom_createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(floating_ui_dom_getDocumentElement(element));
  } else if (floating_ui_dom_isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return floating_ui_dom_rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = floating_ui_dom_getParentNode(element);
  if (parentNode === stopNode || !floating_ui_dom_isElement(parentNode) || floating_ui_dom_isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = floating_ui_dom_getOverflowAncestors(element, [], false).filter(el => floating_ui_dom_isElement(el) && floating_ui_dom_getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? floating_ui_dom_getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (floating_ui_dom_isElement(currentNode) && !floating_ui_dom_isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = floating_ui_dom_isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === 'absolute' || currentContainingBlockComputedStyle.position === 'fixed') || floating_ui_dom_isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = floating_ui_dom_getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? floating_ui_dom_isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = floating_ui_dom_max(rect.top, top);
    right = floating_ui_dom_min(rect.right, right);
    bottom = floating_ui_dom_min(rect.bottom, bottom);
    left = floating_ui_dom_max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = floating_ui_dom_isHTMLElement(offsetParent);
  const documentElement = floating_ui_dom_getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = floating_ui_dom_createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (floating_ui_dom_getNodeName(offsetParent) !== 'body' || floating_ui_dom_isOverflowElement(documentElement)) {
      scroll = floating_ui_dom_getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : floating_ui_dom_createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!floating_ui_dom_isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (floating_ui_dom_getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = floating_ui_dom_getWindow(element);
  if (floating_ui_dom_isTopLayer(element)) {
    return win;
  }
  if (!floating_ui_dom_isHTMLElement(element)) {
    let svgOffsetParent = floating_ui_dom_getParentNode(element);
    while (svgOffsetParent && !floating_ui_dom_isLastTraversableNode(svgOffsetParent)) {
      if (floating_ui_dom_isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = floating_ui_dom_getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && floating_ui_dom_isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && floating_ui_dom_isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !floating_ui_dom_isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || floating_ui_dom_getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function floating_ui_dom_isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = (/* unused pure expression or super */ null && ({
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: floating_ui_dom_getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: floating_ui_dom_isElement,
  isRTL: floating_ui_dom_isRTL
}));

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...(floating ? getOverflowAncestors(floating) : [])] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const floating_ui_dom_detectOverflow = (/* unused pure expression or super */ null && (detectOverflow$1));

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const floating_ui_dom_offset = (/* unused pure expression or super */ null && (offset$1));

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const floating_ui_dom_autoPlacement = (/* unused pure expression or super */ null && (autoPlacement$1));

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const floating_ui_dom_shift = (/* unused pure expression or super */ null && (shift$1));

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const floating_ui_dom_flip = (/* unused pure expression or super */ null && (flip$1));

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const floating_ui_dom_size = (/* unused pure expression or super */ null && (size$1));

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const floating_ui_dom_hide = (/* unused pure expression or super */ null && (hide$1));

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const floating_ui_dom_arrow = (/* unused pure expression or super */ null && (arrow$1));

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const floating_ui_dom_inline = (/* unused pure expression or super */ null && (inline$1));

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const floating_ui_dom_limitShift = (/* unused pure expression or super */ null && (limitShift$1));

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const floating_ui_dom_computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};



;// ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js

var use_isomorphic_layout_effect_browser_esm_index = external_React_namespaceObject.useLayoutEffect;


;// ./node_modules/react-select/dist/index-641ee5b8.esm.js












var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var index_641ee5b8_esm_noop = function noop2() {
};
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === "-") {
    return prefix + name;
  } else {
    return prefix + "__" + name;
  }
}
function classNames(prefix, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null) return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$4);
  return objectSpread2_objectSpread2({}, innerProps);
};
var getStyleProps = function getStyleProps2(props, name, classNamesState) {
  var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};
function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);
    if (typeof _newValue === "string") return _newValue;
  }
  return inputValue;
}
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed") return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : index_641ee5b8_esm_noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
var passiveOptionAccessed = false;
var index_641ee5b8_esm_options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", index_641ee5b8_esm_noop, index_641ee5b8_esm_options);
  w.removeEventListener("p", index_641ee5b8_esm_noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref) {
    var _ref22 = _slicedToArray(_ref, 1), key = _ref22[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
var _excluded$3 = ["children", "innerProps"], _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref) {
  var preferredMaxHeight = _ref.maxHeight, menuEl = _ref.menuEl, minHeight = _ref.minHeight, preferredPlacement = _ref.placement, shouldScroll = _ref.shouldScroll, isFixedPosition = _ref.isFixedPosition, controlHeight = _ref.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight: preferredMaxHeight
  };
  if (!menuEl || !menuEl.offsetParent) return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (preferredPlacement === "auto" || isFixedPosition) {
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (preferredPlacement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p) {
  return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS2(_ref22, unstyled) {
  var _objectSpread2;
  var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius = _ref2$theme.borderRadius, spacing = _ref2$theme.spacing, colors = _ref2$theme.colors;
  return objectSpread2_objectSpread2((_objectSpread2 = {
    label: "menu"
  }, _defineProperty(_objectSpread2, alignToControl(placement), "100%"), _defineProperty(_objectSpread2, "position", "absolute"), _defineProperty(_objectSpread2, "width", "100%"), _defineProperty(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
    backgroundColor: colors.neutral0,
    borderRadius,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: spacing.menuGutter,
    marginTop: spacing.menuGutter
  });
};
var PortalPlacementContext = /* @__PURE__ */ (0,external_React_namespaceObject.createContext)(null);
var MenuPlacer = function MenuPlacer2(props) {
  var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
  var _ref3 = (0,external_React_namespaceObject.useContext)(PortalPlacementContext) || {}, setPortalPlacement = _ref3.setPortalPlacement;
  var ref = (0,external_React_namespaceObject.useRef)(null);
  var _useState = (0,external_React_namespaceObject.useState)(maxMenuHeight), _useState2 = _slicedToArray(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
  var _useState3 = (0,external_React_namespaceObject.useState)(null), _useState4 = _slicedToArray(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
  var controlHeight = theme.spacing.controlHeight;
  use_isomorphic_layout_effect_browser_esm_index(function() {
    var menuEl = ref.current;
    if (!menuEl) return;
    var isFixedPosition = menuPosition === "fixed";
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
      controlHeight
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
  return children({
    ref,
    placerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight
    })
  });
};
var Menu = function Menu2(props) {
  var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "menu", {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = Menu;
var menuListCSS = function menuListCSS2(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight, baseUnit = _ref4.theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    maxHeight,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, unstyled ? {} : {
    paddingBottom: baseUnit,
    paddingTop: baseUnit
  });
};
var MenuList = function MenuList2(props) {
  var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", extends_extends({}, getStyleProps(props, "menuList", {
    "menu-list": true,
    "menu-list--is-multi": isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme, baseUnit = _ref5$theme.spacing.baseUnit, colors = _ref5$theme.colors;
  return objectSpread2_objectSpread2({
    textAlign: "center"
  }, unstyled ? {} : {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(_ref6) {
  var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps, restProps = _objectWithoutProperties(_ref6, _excluded$3);
  return jsx("div", extends_extends({}, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "noOptionsMessage", {
    "menu-notice": true,
    "menu-notice--no-options": true
  }), innerProps), children);
};
var LoadingMessage = function LoadingMessage2(_ref7) {
  var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps, restProps = _objectWithoutProperties(_ref7, _excluded2$1);
  return jsx("div", extends_extends({}, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "loadingMessage", {
    "menu-notice": true,
    "menu-notice--loading": true
  }), innerProps), children);
};
var menuPortalCSS = function menuPortalCSS2(_ref8) {
  var rect = _ref8.rect, offset = _ref8.offset, position = _ref8.position;
  return {
    left: rect.left,
    position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal2(props) {
  var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
  var menuPortalRef = (0,external_React_namespaceObject.useRef)(null);
  var cleanupRef = (0,external_React_namespaceObject.useRef)(null);
  var _useState5 = (0,external_React_namespaceObject.useState)(coercePlacement(menuPlacement)), _useState6 = _slicedToArray(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
  var portalPlacementContext = (0,external_React_namespaceObject.useMemo)(function() {
    return {
      setPortalPlacement
    };
  }, []);
  var _useState7 = (0,external_React_namespaceObject.useState)(null), _useState8 = _slicedToArray(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
  var updateComputedPosition = (0,external_React_namespaceObject.useCallback)(function() {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset,
        rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  use_isomorphic_layout_effect_browser_esm_index(function() {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = (0,external_React_namespaceObject.useCallback)(function() {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: "ResizeObserver" in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  use_isomorphic_layout_effect_browser_esm_index(function() {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = (0,external_React_namespaceObject.useCallback)(function(menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);
  if (!appendTo && menuPosition !== "fixed" || !computedPosition) return null;
  var menuWrapper = jsx("div", extends_extends({
    ref: setMenuPortalElement
  }, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), "menuPortal", {
    "menu-portal": true
  }), innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /* @__PURE__ */ (0,external_ReactDOM_namespaceObject.createPortal)(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS2(_ref) {
  var isDisabled = _ref.isDisabled, isRtl = _ref.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", extends_extends({}, getStyleProps(props, "container", {
    "--is-disabled": isDisabled,
    "--is-rtl": isRtl
  }), innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref22, unstyled) {
  var spacing = _ref22.theme.spacing, isMulti = _ref22.isMulti, hasValue = _ref22.hasValue, controlShouldRenderValue = _ref22.selectProps.controlShouldRenderValue;
  return objectSpread2_objectSpread2({
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, unstyled ? {} : {
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
  return jsx("div", extends_extends({}, getStyleProps(props, "valueContainer", {
    "value-container": true,
    "value-container--is-multi": isMulti,
    "value-container--has-value": hasValue
  }), innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "indicatorsContainer", {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"], _excluded2 = ["innerProps", "isRtl", "size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 =  true ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : 0;
var Svg = function Svg2(_ref) {
  var size = _ref.size, props = _objectWithoutProperties(_ref, _excluded$2);
  return jsx("svg", extends_extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, extends_extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, extends_extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3, unstyled) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit = _ref3$theme.spacing.baseUnit, colors = _ref3$theme.colors;
  return objectSpread2_objectSpread2({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2,
    ":hover": {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "dropdownIndicator", {
    indicator: true,
    "dropdown-indicator": true
  }), innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "clearIndicator", {
    indicator: true,
    "clear-indicator": true
  }), innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit = _ref4$theme.spacing.baseUnit, colors = _ref4$theme.colors;
  return objectSpread2_objectSpread2({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var innerProps = props.innerProps;
  return jsx("span", extends_extends({}, innerProps, getStyleProps(props, "indicatorSeparator", {
    "indicator-separator": true
  })));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5, unstyled) {
  var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors = _ref5$theme.colors, baseUnit = _ref5$theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2
  });
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    },  true ? "" : 0,  true ? "" : 0)
  });
};
var LoadingIndicator = function LoadingIndicator2(_ref7) {
  var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? 4 : _ref7$size, restProps = _objectWithoutProperties(_ref7, _excluded2);
  return jsx("div", extends_extends({}, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restProps), {}, {
    innerProps,
    isRtl,
    size
  }), "loadingIndicator", {
    indicator: true,
    "loading-indicator": true
  }), innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
var css$1 = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, _ref$theme = _ref.theme, colors = _ref$theme.colors, borderRadius = _ref$theme.borderRadius, spacing = _ref$theme.spacing;
  return objectSpread2_objectSpread2({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : void 0,
    "&:hover": {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  });
};
var Control = function Control2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", extends_extends({
    ref: innerRef
  }, getStyleProps(props, "control", {
    control: true,
    "control--is-disabled": isDisabled,
    "control--is-focused": isFocused,
    "control--menu-is-open": menuIsOpen
  }), innerProps, {
    "aria-disabled": isDisabled || void 0
  }), children);
};
var Control$1 = Control;
var _excluded$1 = ["data"];
var groupCSS = function groupCSS2(_ref, unstyled) {
  var spacing = _ref.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "group", {
    group: true
  }), innerProps), jsx(Heading, extends_extends({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    getClassNames,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref22, unstyled) {
  var _ref2$theme = _ref22.theme, colors = _ref2$theme.colors, spacing = _ref2$theme.spacing;
  return objectSpread2_objectSpread2({
    label: "group",
    cursor: "default",
    display: "block"
  }, unstyled ? {} : {
    color: colors.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: "uppercase"
  });
};
var GroupHeading = function GroupHeading2(props) {
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", extends_extends({}, getStyleProps(props, "groupHeading", {
    "group-heading": true
  }), innerProps));
};
var Group$1 = Group;
var index_641ee5b8_esm_excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref, unstyled) {
  var isDisabled = _ref.isDisabled, value = _ref.value, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({
    visibility: isDisabled ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? "translateZ(0)" : ""
  }, containerStyle), unstyled ? {} : {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    color: colors.neutral80
  });
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": objectSpread2_objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return objectSpread2_objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input2(props) {
  var cx = props.cx, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, index_641ee5b8_esm_excluded);
  return jsx("div", extends_extends({}, getStyleProps(props, "input", {
    "input-container": true
  }), {
    "data-value": value || ""
  }), jsx("input", extends_extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1 = Input;
var multiValueCSS = function multiValueCSS2(_ref, unstyled) {
  var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, borderRadius = _ref$theme.borderRadius, colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    margin: spacing.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref22, unstyled) {
  var _ref2$theme = _ref22.theme, borderRadius = _ref2$theme.borderRadius, colors = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
  return objectSpread2_objectSpread2({
    overflow: "hidden",
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme, spacing = _ref3$theme.spacing, borderRadius = _ref3$theme.borderRadius, colors = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return objectSpread2_objectSpread2({
    alignItems: "center",
    display: "flex"
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : void 0,
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ":hover": {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", extends_extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, components2 = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(Container, {
    data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, "multiValue", {
      "multi-value": true,
      "multi-value--is-disabled": isDisabled
    })), innerProps),
    selectProps
  }, jsx(Label, {
    data,
    innerProps: objectSpread2_objectSpread2({}, getStyleProps(props, "multiValueLabel", {
      "multi-value__label": true
    })),
    selectProps
  }, children), jsx(Remove, {
    data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, "multiValueRemove", {
      "multi-value__remove": true
    })), {}, {
      "aria-label": "Remove ".concat(children || "option")
    }, removeProps3),
    selectProps
  }));
};
var MultiValue$1 = MultiValue;
var optionCSS = function optionCSS2(_ref, unstyled) {
  var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, isSelected = _ref.isSelected, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : "transparent",
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : "inherit",
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : void 0
    }
  });
};
var Option = function Option2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "option", {
    option: true,
    "option--is-disabled": isDisabled,
    "option--is-focused": isFocused,
    "option--is-selected": isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = Option;
var placeholderCSS = function placeholderCSS2(_ref, unstyled) {
  var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, unstyled ? {} : {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "placeholder", {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = Placeholder;
var css2 = function css3(_ref, unstyled) {
  var isDisabled = _ref.isDisabled, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", extends_extends({}, getStyleProps(props, "singleValue", {
    "single-value": true,
    "single-value--is-disabled": isDisabled
  }), innerProps), children);
};
var SingleValue$1 = SingleValue;
var components = {
  ClearIndicator,
  Control: Control$1,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group: Group$1,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator,
  Menu: Menu$1,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, components), props.components);
};


;// ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function memoize_one_esm_isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function memoize_one_esm_areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!memoize_one_esm_isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = memoize_one_esm_areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}


;// ./node_modules/react-select/dist/Select-ef7c0426.esm.js
/* unused harmony import specifier */ var _objectSpread;













function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref =  true ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : 0;
var A11yText = function A11yText2(props) {
  return jsx("span", extends_extends({
    css: _ref
  }, props));
};
var A11yText$1 = A11yText;
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, tabSelectsValue = props.tabSelectsValue, context = props.context, isInitialFocus = props.isInitialFocus;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return isInitialFocus ? "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected, isAppleDevice2 = props.isAppleDevice;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu" && isAppleDevice2) {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? " selected" : "").concat(disabled);
      return "".concat(label).concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id, isAppleDevice2 = props.isAppleDevice;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue, isLoading = selectProps.isLoading;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = (0,external_React_namespaceObject.useMemo)(function() {
    return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = (0,external_React_namespaceObject.useMemo)(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = objectSpread2_objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = (0,external_React_namespaceObject.useMemo)(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? "menu" : "value",
        selectValue,
        isAppleDevice: isAppleDevice2
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, focusableOptions, selectValue, isAppleDevice2]);
  var ariaResults = (0,external_React_namespaceObject.useMemo)(function() {
    var resultsMsg = "";
    if (menuIsOpen && options.length && !isLoading && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus2, isLoading]);
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  var ariaGuidance = (0,external_React_namespaceObject.useMemo)(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue,
        isInitialFocus
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
  var ScreenReaderText = jsx(external_React_namespaceObject.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-focused"
  }, ariaFocused), jsx("span", {
    id: "aria-results"
  }, ariaResults), jsx("span", {
    id: "aria-guidance"
  }, ariaGuidance));
  return jsx(external_React_namespaceObject.Fragment, null, jsx(A11yText$1, {
    id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = LiveRegion;
var diacritics = [{
  base: "A",
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: "AA",
  letters: "\uA732"
}, {
  base: "AE",
  letters: "\xC6\u01FC\u01E2"
}, {
  base: "AO",
  letters: "\uA734"
}, {
  base: "AU",
  letters: "\uA736"
}, {
  base: "AV",
  letters: "\uA738\uA73A"
}, {
  base: "AY",
  letters: "\uA73C"
}, {
  base: "B",
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: "C",
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: "D",
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: "DZ",
  letters: "\u01F1\u01C4"
}, {
  base: "Dz",
  letters: "\u01F2\u01C5"
}, {
  base: "E",
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: "F",
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: "G",
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: "H",
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: "I",
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: "J",
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: "K",
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: "L",
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: "LJ",
  letters: "\u01C7"
}, {
  base: "Lj",
  letters: "\u01C8"
}, {
  base: "M",
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: "N",
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: "NJ",
  letters: "\u01CA"
}, {
  base: "Nj",
  letters: "\u01CB"
}, {
  base: "O",
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: "OI",
  letters: "\u01A2"
}, {
  base: "OO",
  letters: "\uA74E"
}, {
  base: "OU",
  letters: "\u0222"
}, {
  base: "P",
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: "Q",
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: "R",
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: "S",
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: "T",
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: "TZ",
  letters: "\uA728"
}, {
  base: "U",
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: "V",
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: "VY",
  letters: "\uA760"
}, {
  base: "W",
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: "X",
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: "Y",
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: "Z",
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: "a",
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: "aa",
  letters: "\uA733"
}, {
  base: "ae",
  letters: "\xE6\u01FD\u01E3"
}, {
  base: "ao",
  letters: "\uA735"
}, {
  base: "au",
  letters: "\uA737"
}, {
  base: "av",
  letters: "\uA739\uA73B"
}, {
  base: "ay",
  letters: "\uA73D"
}, {
  base: "b",
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: "c",
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: "d",
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: "dz",
  letters: "\u01F3\u01C6"
}, {
  base: "e",
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: "f",
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: "g",
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: "h",
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: "hv",
  letters: "\u0195"
}, {
  base: "i",
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: "j",
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: "k",
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: "l",
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: "lj",
  letters: "\u01C9"
}, {
  base: "m",
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: "n",
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: "nj",
  letters: "\u01CC"
}, {
  base: "o",
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: "oi",
  letters: "\u01A3"
}, {
  base: "ou",
  letters: "\u0223"
}, {
  base: "oo",
  letters: "\uA74F"
}, {
  base: "p",
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: "q",
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: "r",
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: "s",
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: "t",
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: "tz",
  letters: "\uA729"
}, {
  base: "u",
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: "v",
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: "vy",
  letters: "\uA761"
}, {
  base: "w",
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: "x",
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: "y",
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: "z",
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
  return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var Select_ef7c0426_esm_i = 0; Select_ef7c0426_esm_i < diacritics.length; Select_ef7c0426_esm_i++) {
  var diacritic = diacritics[Select_ef7c0426_esm_i];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match) {
    return diacriticToBase[match];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = objectSpread2_objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify = _ignoreCase$ignoreAcc.stringify, trim = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var Select_ef7c0426_esm_excluded = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, Select_ef7c0426_esm_excluded);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", extends_extends({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */ css({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    },  true ? "" : 0,  true ? "" : 0)
  }));
}
var cancelScroll = function cancelScroll2(event) {
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = (0,external_React_namespaceObject.useRef)(false);
  var isTop = (0,external_React_namespaceObject.useRef)(false);
  var touchStart = (0,external_React_namespaceObject.useRef)(0);
  var scrollTarget = (0,external_React_namespaceObject.useRef)(null);
  var handleEventDelta = (0,external_React_namespaceObject.useCallback)(function(event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = (0,external_React_namespaceObject.useCallback)(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = (0,external_React_namespaceObject.useCallback)(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = (0,external_React_namespaceObject.useCallback)(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = (0,external_React_namespaceObject.useCallback)(function(el) {
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = (0,external_React_namespaceObject.useCallback)(function(el) {
    if (!el) return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  (0,external_React_namespaceObject.useEffect)(function() {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e) {
  if (e.cancelable) e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = (0,external_React_namespaceObject.useRef)({});
  var scrollTarget = (0,external_React_namespaceObject.useRef)(null);
  var addScrollLock = (0,external_React_namespaceObject.useCallback)(function(touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = (0,external_React_namespaceObject.useCallback)(function(touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  (0,external_React_namespaceObject.useEffect)(function() {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput2(event) {
  var element = event.target;
  return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 =  true ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : 0;
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(external_React_namespaceObject.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function Select_ef7c0426_esm_EMOTION_STRINGIFIED_CSS_ERROR_() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Select_ef7c0426_esm_ref2 =  true ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : 0;
var RequiredInput = function RequiredInput2(_ref3) {
  var name = _ref3.name, onFocus2 = _ref3.onFocus;
  return jsx("input", {
    required: true,
    name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus2,
    css: Select_ef7c0426_esm_ref2,
    value: "",
    onChange: function onChange2() {
    }
  });
};
var RequiredInput$1 = RequiredInput;
function testPlatform(re) {
  var _window$navigator$use;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window$navigator$use = window.navigator["userAgentData"]) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css2,
  valueContainer: valueContainerCSS
};
function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var styles = _objectSpread({}, source);
  Object.keys(target).forEach(function(keyAsString) {
    var key = keyAsString;
    if (source[key]) {
      styles[key] = function(rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}
var Select_ef7c0426_esm_colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors: Select_ef7c0426_esm_colors,
  spacing
};
var Select_ef7c0426_esm_defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return {
          data: option.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
        };
      })));
    } else {
      optionsAccumulator.push({
        data: categorizedOption.data,
        id: "".concat(optionId, "-").concat(categorizedOption.index)
      });
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var getFocusedOptionId = function getFocusedOptionId2(focusableOptionsWithIds, focusedOption) {
  var _focusableOptionsWith;
  var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function(option) {
    return option.data === focusedOption;
  })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
  return focusedOptionId || null;
};
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i2) {
    return getOptionValue2(props, i2) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = /* @__PURE__ */ (function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: "",
      isAppleDevice: false
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i2) {
          return _this.getOptionValue(i2) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i2) {
        return _this.getOptionValue(i2) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      if (lastSelectedValue) {
        _this.onChange(newValue, {
          action: "pop-value",
          removedValue: lastSelectedValue
        });
      }
    };
    _this.getFocusedOptionId = function(focusedOption) {
      return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
    };
    _this.getFocusableOptionsWithIds = function() {
      return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId("option"));
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function(key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function(element) {
      return "".concat(_this.state.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: objectSpread2_objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref22) {
      var touches = _ref22.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      var options = _this.getFocusableOptions();
      var focusedOptionIndex = options.indexOf(focusedOption);
      _this.setState({
        focusedOption,
        focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function(e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue) return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue) return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen) return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen) return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen) return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen) return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.state.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
      _this.state.focusedOption = focusableOptions[optionIndex];
      _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
    }
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
      if (isAppleDevice()) {
        this.setState({
          isAppleDevice: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen
      ) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        this.setState({
          isFocused: true
        });
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex],
        focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0;
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === "last") {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null,
        focusedOptionId: this.getFocusedOptionId(options[nextFocus])
      });
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function getTheme() {
        if (!this.props.theme) {
          return defaultTheme;
        }
        if (typeof this.props.theme === "function") {
          return this.props.theme(defaultTheme);
        }
        return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultTheme), this.props.theme);
      }
    )
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getClassNames,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0) return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener("compositionstart", this.onCompositionStart, false);
          document.addEventListener("compositionend", this.onCompositionEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener("touchstart", this.onTouchStart, false);
          document.addEventListener("touchmove", this.onTouchMove, false);
          document.addEventListener("touchend", this.onTouchEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
        var _this$getComponents = this.getComponents(), Input = _this$getComponents.Input;
        var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId("input");
        var ariaAttributes = objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({
          "aria-autocomplete": "list",
          "aria-expanded": menuIsOpen,
          "aria-haspopup": true,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": required,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, menuIsOpen && {
          "aria-controls": this.getElementId("listbox")
        }), !isSearchable && {
          "aria-readonly": true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        if (!isSearchable) {
          return /* @__PURE__ */ external_React_namespaceObject.createElement(DummyInput, extends_extends({
            id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: index_641ee5b8_esm_noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex,
            inputMode: "none",
            form,
            value: ""
          }, ariaAttributes));
        }
        return /* @__PURE__ */ external_React_namespaceObject.createElement(Input, extends_extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id,
          innerRef: this.getInputRef,
          isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex,
          form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue = _this$getComponents2.MultiValue, MultiValueContainer = _this$getComponents2.MultiValueContainer, MultiValueLabel = _this$getComponents2.MultiValueLabel, MultiValueRemove = _this$getComponents2.MultiValueRemove, SingleValue = _this$getComponents2.SingleValue, Placeholder = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ external_React_namespaceObject.createElement(Placeholder, extends_extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ external_React_namespaceObject.createElement(MultiValue, extends_extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ external_React_namespaceObject.createElement(SingleValue, extends_extends({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ external_React_namespaceObject.createElement(ClearIndicator, extends_extends({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ external_React_namespaceObject.createElement(LoadingIndicator, extends_extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator = _this$getComponents5.DropdownIndicator, IndicatorSeparator = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ external_React_namespaceObject.createElement(IndicatorSeparator, extends_extends({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ external_React_namespaceObject.createElement(DropdownIndicator, extends_extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group = _this$getComponents7.Group, GroupHeading = _this$getComponents7.GroupHeading, Menu = _this$getComponents7.Menu, MenuList = _this$getComponents7.MenuList, MenuPortal = _this$getComponents7.MenuPortal, LoadingMessage = _this$getComponents7.LoadingMessage, NoOptionsMessage = _this$getComponents7.NoOptionsMessage, Option = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;
      var render = function render2(props, id) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1,
          role: "option",
          "aria-selected": _this4.state.isAppleDevice ? void 0 : isSelected
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ external_React_namespaceObject.createElement(Option, extends_extends({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ external_React_namespaceObject.createElement(Group, extends_extends({}, commonProps, {
              key: groupId,
              data: _data,
              options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null) return null;
        menuUI = /* @__PURE__ */ external_React_namespaceObject.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null) return null;
        menuUI = /* @__PURE__ */ external_React_namespaceObject.createElement(NoOptionsMessage, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ external_React_namespaceObject.createElement(MenuPlacer, extends_extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ external_React_namespaceObject.createElement(Menu, extends_extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading,
          placement
        }), /* @__PURE__ */ external_React_namespaceObject.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ external_React_namespaceObject.createElement(MenuList, extends_extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": commonProps.isMulti,
              id: _this4.getElementId("listbox")
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ external_React_namespaceObject.createElement(MenuPortal, extends_extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return /* @__PURE__ */ external_React_namespaceObject.createElement(RequiredInput$1, {
          name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled) return;
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /* @__PURE__ */ external_React_namespaceObject.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i2) {
            return /* @__PURE__ */ external_React_namespaceObject.createElement("input", {
              key: "i-".concat(i2),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ external_React_namespaceObject.createElement("input", {
            name,
            type: "hidden",
            value: ""
          });
          return /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ external_React_namespaceObject.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ external_React_namespaceObject.createElement(LiveRegion$1, extends_extends({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control = _this$getComponents8.Control, IndicatorsContainer = _this$getComponents8.IndicatorsContainer, SelectContainer = _this$getComponents8.SelectContainer, ValueContainer = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ external_React_namespaceObject.createElement(SelectContainer, extends_extends({}, commonProps, {
        className,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ external_React_namespaceObject.createElement(Control, extends_extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ external_React_namespaceObject.createElement(ValueContainer, extends_extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ external_React_namespaceObject.createElement(IndicatorsContainer, extends_extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused, instancePrefix = state.instancePrefix;
      var options = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedOptionId,
          focusableOptionsWithIds,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
})(external_React_namespaceObject.Component);
Select.defaultProps = Select_ef7c0426_esm_defaultProps;


;// ./node_modules/react-select/dist/react-select.esm.js
/* unused harmony import specifier */ var react_select_esm_React;
/* unused harmony import specifier */ var useMemo;
/* unused harmony import specifier */ var react_select_esm_CacheProvider;
/* unused harmony import specifier */ var react_select_esm_createCache;

























var StateManagedSelect = /* @__PURE__ */ (0,external_React_namespaceObject.forwardRef)(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ external_React_namespaceObject.createElement(Select, extends_extends({
    ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;
var NonceProvider = (function(_ref) {
  var nonce = _ref.nonce, children = _ref.children, cacheKey = _ref.cacheKey;
  var emotionCache = useMemo(function() {
    return react_select_esm_createCache({
      key: cacheKey,
      nonce
    });
  }, [cacheKey, nonce]);
  return /* @__PURE__ */ react_select_esm_React.createElement(react_select_esm_CacheProvider, {
    value: emotionCache
  }, children);
});


;// ./src/features/language/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/language/LanguageAndCurrencySettings.tsx






const { useState: LanguageAndCurrencySettings_useState, useEffect } = external_React_namespaceObject;
const LanguageAndCurrencySettings = (props) => {
  const {
    languageSelectOptions,
    currencySelectOptions,
    defaultData,
    languageMap,
    saveData,
    setCurrentLanguage,
    currentCurrency,
    setCurrentCurrency,
    onMenuStateChange
  } = props;
  const headerData = useHeaderData();
  const [languageMenuOpen, setLanguageMenuOpen] = LanguageAndCurrencySettings_useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = LanguageAndCurrencySettings_useState(false);
  useEffect(() => {
    if (onMenuStateChange) {
      onMenuStateChange(languageMenuOpen || currencyMenuOpen);
    }
  }, [languageMenuOpen, currencyMenuOpen, onMenuStateChange]);
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-languages-overlay" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-l-o-title" }, getI18n("sctnh.header_ship_05", headerData)), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { style: { marginBottom: 16 } }, getI18n("sctnh.header_ship_06", headerData)), /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, getI18n("sctnh.header_signin_82", headerData)), /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, /* @__PURE__ */ external_React_namespaceObject.createElement(
    StateManagedSelect$1,
    {
      className: "tnh-l-o-select",
      theme: (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#F4F4F4",
          primary: "#FF6600"
        }
      }),
      isSearchable: true,
      onChange: (lang) => setCurrentLanguage(lang),
      defaultValue: {
        value: defaultData?.language,
        label: languageMap[defaultData?.language]
      },
      options: languageSelectOptions,
      onMenuOpen: () => setLanguageMenuOpen(true),
      onMenuClose: () => setLanguageMenuOpen(false)
    }
  )), /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, getI18n("sctnh.header_signin_83", headerData)), /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, /* @__PURE__ */ external_React_namespaceObject.createElement(
    StateManagedSelect$1,
    {
      className: "tnh-l-o-select",
      theme: (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#F4F4F4",
          primary: "#FF6600"
        }
      }),
      isSearchable: true,
      onChange: (data) => setCurrentCurrency(data),
      defaultValue: currentCurrency,
      options: currencySelectOptions,
      onMenuOpen: () => setCurrencyMenuOpen(true),
      onMenuClose: () => setCurrencyMenuOpen(false)
    }
  )), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-l-o-control" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      onClick: () => {
        saveData();
      },
      className: "tnh-button"
    },
    getI18n("sctnh.header_signin_77", headerData)
  )));
};
/* harmony default export */ const language_LanguageAndCurrencySettings = (LanguageAndCurrencySettings);

;// ./src/features/language/SwitchToPopover.less
// extracted by mini-css-extract-plugin

;// ./src/features/language/SwitchToPopover.tsx





const SwitchToPopover = (props) => {
  const {
    children,
    showSwitchToPopover,
    setShowSwitchToPopover,
    setOpenLangugeAndCurrencyPopup,
    languageMap,
    saveData,
    onMouseEnter,
    onMouseLeave
  } = props;
  const closeIcon = /* @__PURE__ */ external_React_namespaceObject.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    "path",
    {
      d: "M13.9727 0.972656L7.95899 6.98633L13.9727 13L13 13.9727L6.98633 7.95899L0.972656 13.9727L0 13L6.01367 6.98633L0 0.972656L0.972656 0L6.98633 6.01367L13 0L13.9727 0.972656Z",
      fill: "white"
    }
  ));
  const deviceLanguage = navigator.language.substring(0, 2);
  const toLanguageKey = Object.keys(languageMap).find(
    (item) => item.substring(0, 2) === deviceLanguage
  );
  const headerData = useHeaderData();
  const title = getI18n("language_switch_guidence_title", headerData).replace(
    "{0}",
    `<b>${languageMap[toLanguageKey || ""]}</b>`
  );
  const switchButtonText = getI18n("language_switch_guidence_switch_button", headerData);
  const chooseAnotherButtonText = getI18n(
    "language_switch_guidence_choose_another_button",
    headerData
  );
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "switch-to-popover-trigger" }, children, showSwitchToPopover && /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      className: "switch-to-popover-content",
      onMouseEnter,
      onMouseLeave
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "down-arrow" }),
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "content-container" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "content" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "title" }, /* @__PURE__ */ external_React_namespaceObject.createElement("span", { dangerouslySetInnerHTML: { __html: title } })), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "actions" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
      "div",
      {
        className: "switch-button",
        onClick: () => {
          saveData({
            value: toLanguageKey,
            label: languageMap[toLanguageKey || ""]
          });
        }
      },
      switchButtonText
    ), /* @__PURE__ */ external_React_namespaceObject.createElement(
      "div",
      {
        className: "choose-another-button",
        onClick: () => setOpenLangugeAndCurrencyPopup(true)
      },
      chooseAnotherButtonText
    ))), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "close-button", onClick: () => setShowSwitchToPopover(false) }, closeIcon))
  ));
};
/* harmony default export */ const language_SwitchToPopover = (SwitchToPopover);

;// ./src/features/language/config.ts

const languageMap = {
  en_US: "English",
  zh_CN: "\u7B80\u4F53\u4E2D\u6587",
  de_DE: "Deutsch",
  pt_PT: "Portugu\xEAs",
  es_ES: "Espa\xF1ol",
  fr_FR: "Fran\xE7ais",
  it_IT: "Italiano",
  hi_IN: "\u0939\u093F\u0902\u0926\u0940",
  ru_RU: "P\u0443\u0441\u0441\u043A\u0438\u0439",
  ko_KR: "\uD55C\uAD6D\uC5B4",
  ja_JP: "\u65E5\u672C\u8A9E",
  th_TH: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
  tr_TR: "T\xFCrk\xE7e",
  vi_VN: "Ti\u1EBFng Vi\u1EC7t",
  nl_NL: "Nederlands",
  in_ID: "Bahasa Indonesia",
  ar_SA: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  pl_PL: "Polski",
  fil_PH: "Filipino"
};
const getLanguageMap = (site) => {
  if (site && site !== "cn") {
    return {
      en_US: "English",
      de_DE: "Deutsch",
      pt_PT: "Portugu\xEAs",
      es_ES: "Espa\xF1ol",
      fr_FR: "Fran\xE7ais",
      it_IT: "Italiano",
      hi_IN: "\u0939\u093F\u0902\u0926\u0940",
      ru_RU: "P\u0443\u0441\u0441\u043A\u0438\u0439",
      ko_KR: "\uD55C\uAD6D\uC5B4",
      ja_JP: "\u65E5\u672C\u8A9E",
      th_TH: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
      tr_TR: "T\xFCrk\xE7e",
      vi_VN: "Ti\u1EBFng Vi\u1EC7t",
      nl_NL: "Nederlands",
      in_ID: "Bahasa Indonesia",
      ar_SA: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
      pl_PL: "Polski",
      fil_PH: "Filipino"
    };
  }
  return languageMap;
};
const GET_URL = "api/ship/read";
const SAVE_URL = "api/ship/write";
const btsVersionStr = "magellan_local_currency:new_version";

;// ./src/features/language/index.tsx














const { useEffect: language_useEffect, useState: language_useState } = external_React_namespaceObject;
const Fetch_Domain = `//ug.alibaba.${getTopLevelDomain()}/`;
const Language = (props) => {
  const { onLangChange } = props;
  const headerData = useHeaderData();
  const {
    zIndex,
    headerConfig,
    smartAssistantProps,
    setCountry,
    site,
    shipReadData,
    getShipReadData
  } = headerData;
  const [open, setOpen] = language_useState(false);
  const [showSwitchToPopover, setShowSwitchToPopover] = language_useState(false);
  const [isMouseEnter, setIsMouseEnter] = language_useState(false);
  const [isSelectMenuOpen, setIsSelectMenuOpen] = language_useState(false);
  const [defaultData, setDefaultData] = language_useState({
    country: "",
    language: "",
    currency: ""
  });
  const [currentLanguage, setCurrentLanguage] = language_useState();
  const [currentCurrency, setCurrentCurrency] = language_useState({});
  const [languageSelectOptions, setLanguageSelectOptions] = language_useState();
  const [currencySelectOptions, setCurrencySelectOptions] = language_useState();
  const debugMode = isHeaderDebugMode(headerData);
  const languageMap = getLanguageMap(site);
  const cookieData = getLatestCookieData();
  const initData = (currencyData) => {
    setLanguageSelectOptions(
      Object.keys(languageMap).map((item) => {
        const label = languageMap[item];
        return {
          value: item,
          label
        };
      })
    );
    setCurrencySelectOptions([
      {
        label: getI18n("sctnh.header_signin_84", headerData),
        options: currencyData.popularCurrency.map((item) => {
          return {
            value: item.currencyDisplayName,
            label: item.currencyDisplayName
          };
        })
      },
      {
        label: getI18n("sctnh.header_signin_85", headerData),
        options: currencyData.allCurrency.map((item) => {
          return {
            value: item.currencyDisplayName,
            label: item.currencyDisplayName
          };
        })
      }
    ]);
    const defaultCurrencyData = currencyData.allCurrency.filter((item) => {
      return item.currencyDisplayName.split(" - ")[0] === cookieData.currencyCode;
    });
    defaultCurrencyData[0] && setCurrentCurrency({
      value: defaultCurrencyData[0].currencyDisplayName,
      label: defaultCurrencyData[0].currencyDisplayName
    });
  };
  language_useEffect(() => {
    if (!shipReadData?.currentlySelectedLocalLanguage) {
      return;
    }
    const isHomePage = window.location.hostname === "www.alibaba.com";
    if (!isHomePage) {
      return;
    }
    const deviceLanguage = navigator.language.substring(0, 2);
    if (deviceLanguage == shipReadData?.currentlySelectedLocalLanguage.substring(0, 2)) {
      return;
    }
    const toLanguageKey = Object.keys(languageMap).find(
      (item) => item.substring(0, 2) === deviceLanguage
    );
    if (!languageMap[toLanguageKey || ""]) {
      return;
    }
    const totalOpenCount = Number(localStorage.getItem("sc-header-language-total-open-count")) || 0;
    if (totalOpenCount >= 3) {
      return;
    }
    const lastOpenTime = Number(localStorage.getItem("sc-header-language-last-open-time")) || 0;
    const interval = 1e3 * 60 * 60 * 24 * 30;
    if (Date.now() - lastOpenTime < interval) {
      return;
    }
    localStorage.setItem("sc-header-language-total-open-count", (totalOpenCount + 1).toString());
    localStorage.setItem("sc-header-language-last-open-time", Date.now().toString());
    setShowSwitchToPopover(true);
  }, [shipReadData?.currentlySelectedLocalLanguage]);
  language_useEffect(() => {
    let timer = null;
    if (!isMouseEnter && shipReadData?.currentlySelectedLocalLanguage) {
      timer = setTimeout(() => {
        setShowSwitchToPopover(false);
      }, 6e4);
    } else {
      timer && clearTimeout(timer);
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, [isMouseEnter, shipReadData?.currentlySelectedLocalLanguage]);
  language_useEffect(() => {
    if (shipReadData) {
      const {
        currentlySelectedLocalCountry: country,
        currentlySelectedLocalLanguage: language,
        currentlySelectedLocalCurrency: currency,
        currencyModule
      } = shipReadData;
      setCountry(country);
      setDefaultData({
        country,
        language: cookieData.language || language,
        currency
      });
      initData(currencyModule);
    }
  }, [shipReadData]);
  const saveData = (language) => {
    const selectedLanguage = language || currentLanguage;
    const params = new URLSearchParams();
    selectedLanguage && params.append("language", selectedLanguage.value.split("_")[0]);
    currentCurrency && params.append("localCurrency", currentCurrency?.value.split(" - ")[0]);
    const url = `${Fetch_Domain + SAVE_URL}?${params.toString()}`;
    fetch_jsonp_default()(url).then((response) => response.json()).then((data) => {
      if (data.data && data.code === 200) {
        if (onLangChange) {
          onLangChange(selectedLanguage?.value);
        } else {
          window.location.reload();
        }
      }
    });
  };
  if (headerConfig?.disable?.includes("Language")) {
    return null;
  }
  const hideLanguageText = smartAssistantProps?.show || headerConfig?.disable?.includes("Language-Text");
  const triggerComponent = /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "current" }, /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-global" }), !hideLanguageText && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "hide-item", "data-tnhkey": "Language-Text" }, languageMap[defaultData.language] && `${languageMap[defaultData.language]}-${defaultData.currency}`));
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-languages", "data-tnhkey": "Language", "data-tnh-auto-exp": "languages" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    language_SwitchToPopover,
    {
      showSwitchToPopover,
      setShowSwitchToPopover,
      setOpenLangugeAndCurrencyPopup: setOpen,
      languageMap,
      currentLanguage,
      setCurrentLanguage,
      saveData,
      onMouseEnter: () => setIsMouseEnter(true),
      onMouseLeave: () => setIsMouseEnter(false)
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement(
      reactjs_popup_esm,
      {
        on: debugMode ? "click" : "hover",
        offsetY: 20,
        position: "bottom center",
        contentStyle: {
          zIndex: zIndex + 1
        },
        open,
        onOpen: () => {
          log("language");
          getShipReadData();
          setShowSwitchToPopover(false);
          setOpen(true);
        },
        onClose: () => {
          setOpen(false);
        },
        closeOnDocumentClick: false,
        mouseLeaveDelay: isSelectMenuOpen ? 2e3 : 100,
        className: "functional language",
        trigger: triggerComponent
      },
      /* @__PURE__ */ external_React_namespaceObject.createElement(
        language_LanguageAndCurrencySettings,
        {
          languageSelectOptions,
          currencySelectOptions,
          defaultData,
          languageMap,
          saveData,
          setCurrentLanguage,
          currentCurrency,
          setCurrentCurrency,
          onMenuStateChange: setIsSelectMenuOpen
        }
      )
    )
  ));
};
/* harmony default export */ const language = (Language);

;// ./src/features/sub-header/Context.tsx


const subHeaderContext = (0,external_React_namespaceObject.createContext)(null);

;// ./src/features/sub-header/config.tsx

const OrderOfMenus = [
  "All categories",
  "Manufacturers",
  "Dropshipping",
  "Source in Europe",
  "Why Alibaba.com",
  "Tax exemption",
  "Help Center",
  "AccioWork",
  "Become a supplier"
];

;// ./src/shared/error/ErrorBoundary/index.tsx

var ErrorBoundary_defProp = Object.defineProperty;
var ErrorBoundary_defNormalProp = (obj, key, value) => key in obj ? ErrorBoundary_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ErrorBoundary_publicField = (obj, key, value) => ErrorBoundary_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);


class ErrorBoundary extends external_React_namespaceObject.Component {
  constructor(props) {
    super(props);
    ErrorBoundary_publicField(this, "didCatch", false);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.didCatch = true;
    this.setState({
      hasError: true
    });
    console.error(`Error caught by Error Boundary:  module=${this.props.module}`, error, info);
    if (this.props.reportError !== false) {
      logError(
        "render_error",
        `msg: ${error.message}, info: ${JSON.stringify(info)}`,
        this.props.module
      );
    }
    this.props.onError?.(error, info);
  }
  componentDidMount() {
    if (!this.didCatch) this.props.onSuccess?.();
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ? /* @__PURE__ */ external_React_default().createElement((external_React_default()).Fragment, null, this.props.fallback) : null;
    }
    return this.props.children;
  }
}

;// ./src/header/runtime/chunks/chunkStore.ts

const chunkComponents = /* @__PURE__ */ new Map();
const chunkLifecycles = /* @__PURE__ */ new Map();
const chunkListeners = /* @__PURE__ */ new Map();
const DEFAULT_HEADER_INSTANCE_ID = "header-0";
const getChunkKey = (headerInstanceId, chunkName) => `${headerInstanceId}:${chunkName}`;
const setChunkComponents = (chunkName, components, lifecycle = {}, headerInstanceId = DEFAULT_HEADER_INSTANCE_ID) => {
  const chunkKey = getChunkKey(headerInstanceId, chunkName);
  chunkComponents.set(chunkKey, components);
  chunkLifecycles.set(chunkKey, lifecycle);
  chunkListeners.get(chunkKey)?.forEach((listener) => listener());
};
const getChunkComponent = (chunkName, chunkComName, headerInstanceId = DEFAULT_HEADER_INSTANCE_ID) => {
  const components = chunkComponents.get(getChunkKey(headerInstanceId, chunkName));
  if (!components) return null;
  if (chunkComName) {
    return components[chunkComName] || null;
  }
  return components;
};
const getChunkLifecycle = (chunkName, headerInstanceId = DEFAULT_HEADER_INSTANCE_ID) => chunkLifecycles.get(getChunkKey(headerInstanceId, chunkName));
const hasChunkComponents = (chunkName, headerInstanceId = DEFAULT_HEADER_INSTANCE_ID) => chunkComponents.has(getChunkKey(headerInstanceId, chunkName));
const subscribeChunk = (chunkName, listener, headerInstanceId = DEFAULT_HEADER_INSTANCE_ID) => {
  const chunkKey = getChunkKey(headerInstanceId, chunkName);
  const listeners = chunkListeners.get(chunkKey) || /* @__PURE__ */ new Set();
  listeners.add(listener);
  chunkListeners.set(chunkKey, listeners);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) chunkListeners.delete(chunkKey);
  };
};

;// ./src/header/runtime/chunks/chunkComponent.tsx





const ChunkComponent = ({
  loadCom,
  chunkProps,
  chunkName,
  chunkComName,
  onRenderError
}) => {
  const [, setRevision] = (0,external_React_namespaceObject.useState)(0);
  const { chunkRuntimeInstanceId = "header-0" } = (0,external_React_namespaceObject.useContext)(headerContext) || {};
  (0,external_React_namespaceObject.useEffect)(() => {
    return subscribeChunk(
      chunkName,
      () => setRevision((revision) => revision + 1),
      chunkRuntimeInstanceId
    );
  }, [chunkName, chunkRuntimeInstanceId]);
  const DynamicComponent = getChunkComponent(chunkName, chunkComName, chunkRuntimeInstanceId);
  const lifecycle = getChunkLifecycle(chunkName, chunkRuntimeInstanceId);
  const slotName = chunkComName || "default";
  (0,external_React_namespaceObject.useEffect)(() => {
    if (chunkComName && hasChunkComponents(chunkName, chunkRuntimeInstanceId) && !DynamicComponent) {
      lifecycle?.onMissingExport?.(chunkComName);
    }
  }, [chunkComName, chunkName, chunkRuntimeInstanceId, DynamicComponent, lifecycle]);
  if (!DynamicComponent) {
    return loadCom;
  }
  return /* @__PURE__ */ external_React_default().createElement(
    ErrorBoundary,
    {
      fallback: loadCom,
      module: chunkComName ? `${chunkName}_${chunkComName}` : chunkName,
      onError: (error) => {
        onRenderError?.(error);
        lifecycle?.onRenderError?.(slotName, error);
      },
      onSuccess: () => lifecycle?.onRenderSuccess?.(slotName),
      reportError: false
    },
    /* @__PURE__ */ external_React_default().createElement(DynamicComponent, { ...chunkProps })
  );
};
/* harmony default export */ const chunkComponent = (ChunkComponent);

;// ./src/features/accio-work/download.ts

const ACCIO_WORK_MAC_ARM_URL = "https://www.accio.com/work/fixed/download?platform=macAppleDownloadUrl&src=f_alibaba_pc_header";
const ACCIO_WORK_MAC_X64_URL = "https://www.accio.com/work/fixed/download?platform=macIntelDownloadUrl&src=f_alibaba_pc_header";
const ACCIO_WORK_WINDOWS_URL = "https://www.accio.com/work/fixed/download?platform=windowsDownloadUrl&src=f_alibaba_pc_header";
const ACCIO_WORK_FALLBACK_URL = "https://www.accio.com/work?src=f_alibaba_pc_header";
const isMacPlatform = (value) => /mac/i.test(value);
const isWindowsPlatform = (value) => /win/i.test(value);
const isArmArchitecture = (value) => /arm|aarch64/i.test(value);
const isX64Architecture = (value) => /x64|x86|intel|amd64/i.test(value);
async function detectAccioWorkDeviceType(navigatorLike) {
  const platform = `${navigatorLike.userAgentData?.platform || navigatorLike.platform || ""}`.trim();
  const userAgent = `${navigatorLike.userAgent || ""}`.trim();
  if (navigatorLike.userAgentData?.getHighEntropyValues) {
    try {
      const { architecture = "", bitness = "" } = await navigatorLike.userAgentData.getHighEntropyValues(["architecture", "bitness"]);
      if (isWindowsPlatform(platform) || isWindowsPlatform(userAgent)) {
        return "windows";
      }
      if (isMacPlatform(platform) || isMacPlatform(userAgent)) {
        if (isArmArchitecture(architecture)) {
          return "mac-arm64";
        }
        if (isX64Architecture(architecture) || bitness === "64") {
          return "mac-x64";
        }
      }
    } catch (error) {
    }
  }
  if (isWindowsPlatform(platform) || isWindowsPlatform(userAgent)) {
    return "windows";
  }
  if (isMacPlatform(platform) || isMacPlatform(userAgent)) {
    return "fallback";
  }
  return "fallback";
}
function getAccioWorkUrlByType(type) {
  switch (type) {
    case "mac-arm64":
      return ACCIO_WORK_MAC_ARM_URL;
    case "mac-x64":
      return ACCIO_WORK_MAC_X64_URL;
    case "windows":
      return ACCIO_WORK_WINDOWS_URL;
    default:
      return ACCIO_WORK_FALLBACK_URL;
  }
}
async function getAccioWorkDownloadTarget(navigatorLike) {
  const currentType = await detectAccioWorkDeviceType(navigatorLike);
  const platform = `${navigatorLike.userAgentData?.platform || navigatorLike.platform || navigatorLike.userAgent || ""}`.trim();
  if (currentType === "windows") {
    return {
      labelKey: "header_accio_work_download_windows",
      url: ACCIO_WORK_WINDOWS_URL,
      type: currentType
    };
  }
  if (currentType === "mac-arm64" || currentType === "mac-x64" || isMacPlatform(platform)) {
    return {
      labelKey: "header_accio_work_download_mac",
      url: getAccioWorkUrlByType(currentType),
      type: currentType
    };
  }
  return {
    labelKey: "header_accio_work_download_default",
    url: ACCIO_WORK_FALLBACK_URL,
    type: "fallback"
  };
}

;// ./src/features/accio-work/index.tsx






const ACCIO_WORK_LOGO_URL = "https://s.alicdn.com/@img/imgextra/i2/O1CN01X4wY1e1fla0jf9cHB_!!6000000004047-2-tps-564-96.png";
const ACCIO_WORK_PREVIEW_URL = "https://s.alicdn.com/@img/imgextra/i4/O1CN01r8qNwZ1MDi1LhpbJA_!!6000000001401-0-tps-1440-900.jpg";
function parseHighlightTemplate(text) {
  if (!text) return [];
  const match = text.match(/\{\{(.+?)\}\}/);
  if (!match) return [{ text, highlight: false }];
  const parts = [];
  const before = text.slice(0, match.index);
  if (before) parts.push({ text: before, highlight: false });
  parts.push({ text: match[1], highlight: true });
  const after = text.slice(match.index + match[0].length);
  if (after) parts.push({ text: after, highlight: false });
  return parts;
}
const AccioWork = () => {
  const headerData = useHeaderData();
  const [downloadTarget, setDownloadTarget] = external_React_default().useState({
    url: ACCIO_WORK_FALLBACK_URL,
    type: "fallback"
  });
  external_React_default().useEffect(() => {
    getAccioWorkDownloadTarget(window.navigator).then(({ url, type }) => {
      setDownloadTarget({ url, type });
    });
  }, []);
  const handleDownloadClick = (type, url) => {
    log("Accio Work", {
      behavior: "click",
      url,
      tag: `click-accio-work-${type}`
    });
  };
  const titleText = getI18n("sctnh.header_accio_title", headerData);
  const titleParts = parseHighlightTemplate(titleText);
  return /* @__PURE__ */ external_React_default().createElement("div", { className: "accio-work-panel" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "accio-work-panel__content" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "accio-work-panel__txt" }, /* @__PURE__ */ external_React_default().createElement(
    "img",
    {
      className: "accio-work-panel__logo",
      src: ACCIO_WORK_LOGO_URL,
      alt: "Accio Work",
      loading: "lazy"
    }
  ), /* @__PURE__ */ external_React_default().createElement("h3", { className: "accio-work-panel__title" }, titleParts.map(
    (part, index) => part.highlight ? /* @__PURE__ */ external_React_default().createElement("span", { key: index, className: "accio-work-panel__title-highlight" }, part.text) : /* @__PURE__ */ external_React_default().createElement("span", { key: index }, part.text)
  )), /* @__PURE__ */ external_React_default().createElement("p", { className: "accio-work-panel__subtitle" }, getI18n("sctnh.header_accio_subtitle", headerData))), /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      className: "accio-work-panel__button",
      href: downloadTarget.url,
      target: "_blank",
      rel: "noreferrer",
      onClick: () => handleDownloadClick(downloadTarget.type, downloadTarget.url)
    },
    /* @__PURE__ */ external_React_default().createElement("span", null, getI18n("sctnh.header_accio_download", headerData)),
    /* @__PURE__ */ external_React_default().createElement(
      "svg",
      {
        className: "accio-work-panel__button-arrow",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ external_React_default().createElement(
        "path",
        {
          d: "M3.333 8h9.334M8.667 4l4 4-4 4",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    )
  )), /* @__PURE__ */ external_React_default().createElement("div", { className: "accio-work-panel__visual" }, /* @__PURE__ */ external_React_default().createElement(
    "img",
    {
      className: "accio-work-panel__image",
      src: ACCIO_WORK_PREVIEW_URL,
      alt: "",
      loading: "lazy"
    }
  )));
};
/* harmony default export */ const accio_work = (AccioWork);

;// ./src/features/dropshipping/myConnection.ts

const MY_CONNECTION_HEADER_URL = "https://myconnections.alibaba.com/ecology/ajax/user/header";

;// ./src/features/dropshipping/index.tsx






const Dropshipping = () => {
  const [dropshippingEntryProps, setDropshippingEntryProps] = external_React_namespaceObject.useState(null);
  external_React_namespaceObject.useEffect(() => {
    let isMounted = true;
    fetch(MY_CONNECTION_HEADER_URL, {
      credentials: "include"
    }).then((res) => res.json()).then(({ data }) => {
      if (isMounted && data?.dropshippingEntry) {
        setDropshippingEntryProps({
          ...data,
          ...data.dropshippingEntry
        });
      }
    }).catch((err) => {
      logError("dropshipping_entry_fetch_error", String(err), "DropshippingEntry");
    });
    return () => {
      isMounted = false;
    };
  }, []);
  if (!dropshippingEntryProps) return null;
  return /* @__PURE__ */ external_React_namespaceObject.createElement(ErrorBoundary, { fallback: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null), module: "DropshippingEntry" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    chunkComponent,
    {
      chunkName: "DropshippingEntry",
      chunkProps: dropshippingEntryProps,
      loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null)
    }
  ));
};
/* harmony default export */ const dropshipping = (Dropshipping);

;// ./src/features/find-factory/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/find-factory/index.tsx








window.getI18n = getI18n;
const getFindFactoryText = (value, headerData) => {
  if (typeof value === "string") {
    return getI18n(value, headerData);
  }
  if (!value || typeof value !== "object") {
    return "";
  }
  const i18nKey = [value.i18nKey, value.key].find((item) => typeof item === "string" && item);
  if (typeof i18nKey === "string") {
    return getI18n(i18nKey, headerData);
  }
  const text = [value.text, value.value, value.content, value.defaultText, value.title].find(
    (item) => typeof item === "string"
  );
  return typeof text === "string" ? text : "";
};
const getFindFactoryItemKey = (item) => {
  const key = [
    item?.key,
    item?.data?.i18nKey,
    item?.data?.key,
    item?.data?.text,
    item?.data,
    item?.Instructions?.i18nKey,
    item?.Instructions?.key,
    item?.Instructions?.text,
    item?.Instructions
  ].find((value) => typeof value === "string" || typeof value === "number");
  return key ? String(key) : "find-factory-info-item";
};
const FindFactory = () => {
  const headerData = useHeaderData();
  window.headerData = headerData;
  const [findFactoryData, setFindFactoryData] = (0,external_React_namespaceObject.useState)(null);
  (0,external_React_namespaceObject.useEffect)(() => {
    getFindFactoryData().then((res) => {
      setFindFactoryData(res);
    }).catch(() => {
      setFindFactoryData(utils_findFactoryData);
    });
  }, []);
  const renderImgCard = () => {
    return findFactoryData?.cardData?.sourcCardList?.map((item) => {
      return /* @__PURE__ */ external_React_default().createElement(
        "div",
        {
          className: "find-factory-content-left-source-card",
          onClick: () => {
            log(item.key);
            window.open(item.linkUrl, "_blank");
          },
          key: item.key,
          style: {
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }
        },
        /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-card-content" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-card-info" }, getFindFactoryText(item.info, headerData)), /* @__PURE__ */ external_React_default().createElement(
          "div",
          {
            style: { transform: isRTL() ? "scaleX(-1)" : "none" },
            className: "find-factory-content-left-source-card-icon"
          },
          /* @__PURE__ */ external_React_default().createElement(
            "img",
            {
              src: findFactoryData?.cardData.sourceCardIcon,
              alt: "sourceCardIcon",
              loading: "lazy"
            }
          )
        ))
      );
    });
  };
  const renderSourceCardTitle = () => {
    if (!findFactoryData?.cardData.sourceData.title) return null;
    const innerHtml = `<span>${getFindFactoryText(
      findFactoryData?.cardData.sourceData.title,
      headerData
    ).replace(
      "{verified-icon}",
      `<img src="${findFactoryData?.cardData.sourceData.tiitleImage}" loading="lazy" alt="titleImage" />`
    )}</span>`;
    return /* @__PURE__ */ external_React_default().createElement(
      "div",
      {
        className: "find-factory-content-left-source-data-top-title",
        dangerouslySetInnerHTML: { __html: innerHtml }
      }
    );
  };
  const renderInfoList = () => {
    return findFactoryData?.cardData.sourceData.infoList.map((item) => {
      return /* @__PURE__ */ external_React_default().createElement(
        "div",
        {
          className: "find-factory-content-left-source-data-top-info-item",
          key: getFindFactoryItemKey(item)
        },
        /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-data-top-info-item-data" }, getFindFactoryText(item.data, headerData)),
        /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-data-top-info-item-instructions" }, getFindFactoryText(item.Instructions, headerData))
      );
    });
  };
  return /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-data" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-data-top" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-data-top-title" }, renderSourceCardTitle()), /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-data-top-info" }, renderInfoList())), /* @__PURE__ */ external_React_default().createElement(
    "div",
    {
      className: "find-factory-content-left-source-data-bottom",
      onClick: () => {
        log(findFactoryData?.cardData.sourceData.buttonData.key);
        window.open(findFactoryData?.cardData.sourceData.buttonData.url, "_blank");
      }
    },
    getFindFactoryText(findFactoryData?.cardData.sourceData.buttonData.text, headerData)
  )), /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-left-source-card-list" }, renderImgCard())), /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-right" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "find-factory-content-right-title" }, getFindFactoryText(findFactoryData?.panelData.title, headerData)), findFactoryData?.panelData.infoList.map((item) => {
    return /* @__PURE__ */ external_React_default().createElement(
      "div",
      {
        key: item.key,
        className: "find-factory-content-right-info",
        onClick: () => {
          log(item.key);
          window.open(item.url, "_blank");
        }
      },
      getFindFactoryText(item.i18nKey, headerData)
    );
  })));
};
/* harmony default export */ const find_factory = (FindFactory);

;// ./src/shared/browser/getShipTo.ts


function getShipTo() {
  const cookieData = api.get("buyer_ship_to_info");
  if (!cookieData) return "";
  const regex = /local_country=([^&]*)/;
  const match = cookieData.match(regex);
  return match?.[1] || "";
}

;// ./src/features/source-in-europe/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/source-in-europe/log.ts

const log_autoEXP = () => {
  const q = window.goldlog_queue || (window.goldlog_queue = []);
  q.push({
    action: "goldlog.appendMetaInfo",
    arguments: [
      "aplus-auto-exp",
      [
        {
          logkey: "/sc.europe.exp",
          cssSelector: "[data-europe-auto-exp]",
          pkgSize: 9,
          props: ["data-europe-auto"]
        }
      ]
    ]
  });
};
const autoCLK = () => {
  const q = window.goldlog_queue || (window.goldlog_queue = []);
  q.push({
    action: "goldlog.appendMetaInfo",
    arguments: [
      "aplus-auto-clk",
      [
        {
          logkey: "/sc.europe.clk",
          cssSelector: "[data-europe-auto-clk]",
          pkgSize: 9,
          props: ["data-europe-auto"]
        }
      ]
    ]
  });
};

;// ./src/features/source-in-europe/index.tsx











const WLW_PAGES_CONFIGS = {
  btn: "source_in_europe_4",
  logo: "https://s.alicdn.com/@img/imgextra/i3/O1CN01rsar9d23h2iAsiBUY_!!6000000007286-55-tps-294-47.svg"
};
const EURO_PAGES_CONFIGS = {
  btn: "source_in_europe_15",
  logo: "https://s.alicdn.com/@img/imgextra/i4/O1CN01LOIg9A27vTemIbhik_!!6000000007859-55-tps-397-39.svg"
};
const EuroPage = ({ type }) => {
  const PAGES_CONFIGS = type === "wlw" ? WLW_PAGES_CONFIGS : EURO_PAGES_CONFIGS;
  const headerData = useHeaderData();
  const [contentData, setContentData] = (0,external_React_namespaceObject.useState)(null);
  const serviceType = type === "europages" ? "ep" : "wlw";
  (0,external_React_namespaceObject.useEffect)(() => {
    fetch_jsonp_default()(`//open-s.alibaba.com/openservice/pcHeader4VService?type=${serviceType}`, {
      timeout: 1e4
    }).then((response) => response.json()).then((data) => {
      setContentData(data?.data);
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = "//media.visable.com";
      document.head.appendChild(link);
    });
    log_autoEXP();
    autoCLK();
  }, []);
  const { title = "", description = "", sellList = [], cardList = [] } = contentData || {};
  const actionClick = (scenes) => {
    log(`Source in Europe ${scenes}`);
    window.open(
      `https://affiliate.visable.com/link.htm?partner=Alibaba&deliverTo=${getShipTo()}&lang=${getLocal()}`
    );
  };
  return /* @__PURE__ */ external_React_default().createElement(
    "div",
    {
      className: classnames_default()({
        "source-in-europe": true,
        "source-in-europe-europages": type === "europages",
        "source-in-europe-wlw": type === "wlw"
      }),
      "data-spm": `source-in-europe-${type}`
    },
    /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_info" }, /* @__PURE__ */ external_React_default().createElement("img", { alt: "logo", src: PAGES_CONFIGS.logo, className: "sie_info-logo", loading: "lazy" }), /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_info-title" }, title), /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_info-description" }, description), /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_info-sell-list" }, sellList.map((sell) => {
      return /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_info-sell-list-item" }, /* @__PURE__ */ external_React_default().createElement("img", { src: sell.logo, loading: "lazy", alt: "sellerLogo" }), /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_info-sell-list-item-content" }, sell.title));
    })), /* @__PURE__ */ external_React_default().createElement(
      "div",
      {
        className: "sie_info-btn",
        "data-europe-auto-clk": true,
        "data-europe-auto-exp": true,
        onClick: () => actionClick("button"),
        "data-europe-auto": `type=${type}&area=button`
      },
      getI18n(PAGES_CONFIGS.btn, headerData)
    )),
    /* @__PURE__ */ external_React_default().createElement("div", { className: "divider" }),
    /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_cards" }, /* @__PURE__ */ external_React_default().createElement("div", { className: classnames_default()("sie_cards-product-list", { "lt-14": cardList?.length < 14 }) }, cardList?.map(
      (card) => {
        return /* @__PURE__ */ external_React_default().createElement(
          "a",
          {
            href: card.url,
            key: card.id,
            target: "_blank",
            className: "sie_cards-product",
            "data-europe-auto-clk": true,
            "data-europe-auto-exp": true,
            "data-europe-auto": `type=${type}&area=card&title=${encodeURIComponent(
              card.title
            )}`
          },
          /* @__PURE__ */ external_React_default().createElement("div", { className: "img" }, /* @__PURE__ */ external_React_default().createElement("img", { src: card.image, loading: "lazy", alt: "cardImage" })),
          /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_cards-product-title text" }, card.title),
          /* @__PURE__ */ external_React_default().createElement("div", { className: "sie_cards-product-sell text" }, card.sell),
          /* @__PURE__ */ external_React_default().createElement(
            "div",
            {
              className: classnames_default()({
                "sie_cards-product-country-list": true,
                text: true,
                "one-country": card?.countryList?.length === 1
              })
            },
            card?.countryList?.map((country, index) => {
              return /* @__PURE__ */ external_React_default().createElement((external_React_default()).Fragment, null, /* @__PURE__ */ external_React_default().createElement(
                "img",
                {
                  src: `https://s.alicdn.com/@icon/flag/assets/${country?.code?.toLowerCase()}.png`,
                  loading: "lazy"
                }
              ), card?.countryList?.length === 1 && index === 0 && /* @__PURE__ */ external_React_default().createElement("span", null, country?.name));
            })
          )
        );
      }
    )))
  );
};
/* harmony default export */ const source_in_europe = (EuroPage);

;// ./src/features/tax-exemption/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/tax-exemption/index.tsx






const TAX_EXEMPTION_TARGET_URL = "https://profile.alibaba.com/vat/vat_info.htm?from=header";
const TAX_EXEMPTION_LEARN_MORE_URL = "https://sale.alibaba.com/p/ddhcqxncs?spm=a2700.product_home_fy25.0.0.2ce267afZy6CW5&wx_navbar_transparent=true&path=/p/ddhcqxncs&ncms_spm=a27aq.28348692&prefetchKey=met&wx_xpage=true";
const heroImage = "https://s.alicdn.com/@img/imgextra/i4/O1CN0143Oo3B252rLPC8iTU_!!6000000007469-0-tps-1620-1014.jpg";
const featureList = [
  {
    iconUrl: "https://img.alicdn.com/imgextra/i3/O1CN012EdxAX1a35SEwpQFe_!!6000000003273-2-tps-60-60.png",
    titleKey: "header_tax_exemption_benefit_enrollment_title",
    descKey: "header_tax_exemption_benefit_enrollment_desc"
  },
  {
    iconUrl: "https://img.alicdn.com/imgextra/i3/O1CN01rGxnIX1nQ4KkPP9TA_!!6000000005083-2-tps-60-60.png",
    titleKey: "header_tax_exemption_benefit_purchase_title",
    descKey: "header_tax_exemption_benefit_purchase_desc"
  },
  {
    iconUrl: "https://img.alicdn.com/imgextra/i4/O1CN01aFMoQX1vRurD2CvYw_!!6000000006170-2-tps-60-60.png",
    titleKey: "header_tax_exemption_benefit_refund_title",
    descKey: "header_tax_exemption_benefit_refund_desc"
  }
];
const logTaxExemptionClick = () => {
  log("Tax exemption", {
    behavior: "click",
    tag: "click-tax-exemption-popover"
  });
};
const isTaxMarketingAtmosphereVisible = (decision) => {
  return !!decision && decision.code === "SUCCESS" && typeof decision.marketingBenefitAmountLocalized === "string" && decision.marketingBenefitAmountLocalized.trim() !== "";
};
const TaxExemption = ({ taxCollectionDecision }) => {
  const headerData = useHeaderData();
  const descriptionHtml = isTaxMarketingAtmosphereVisible(taxCollectionDecision) ? getI18n("sctnh.header_taxexemption_Europe", headerData).replace(
    "{0}",
    taxCollectionDecision.marketingBenefitAmountLocalized
  ) : getI18n("header_tax_exemption_description", headerData);
  return /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__copy" }, /* @__PURE__ */ external_React_default().createElement("h3", { className: "tax-exemption-panel__title" }, getI18n("header_tax_exemption_title", headerData)), /* @__PURE__ */ external_React_default().createElement(
    "p",
    {
      className: "tax-exemption-panel__desc",
      dangerouslySetInnerHTML: { __html: descriptionHtml }
    }
  ), /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__features" }, featureList.map((feature) => /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__feature", key: feature.titleKey }, /* @__PURE__ */ external_React_default().createElement("span", { className: "tax-exemption-panel__feature-icon", "aria-hidden": "true" }, /* @__PURE__ */ external_React_default().createElement(
    "img",
    {
      className: "tax-exemption-panel__feature-icon-image",
      src: feature.iconUrl,
      alt: "",
      loading: "lazy"
    }
  )), /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__feature-copy" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__feature-title" }, getI18n(feature.titleKey, headerData)), /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__feature-desc" }, getI18n(feature.descKey, headerData)))))), /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__actions" }, /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      className: "tax-exemption-panel__cta",
      href: TAX_EXEMPTION_TARGET_URL,
      target: "_blank",
      rel: "noreferrer",
      onClick: logTaxExemptionClick
    },
    /* @__PURE__ */ external_React_default().createElement("span", null, getI18n("sctnh.header_applynow", headerData)),
    /* @__PURE__ */ external_React_default().createElement("span", { className: "tax-exemption-panel__cta-arrow", "aria-hidden": "true" })
  ), /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      className: "tax-exemption-panel__cta tax-exemption-panel__cta--secondary",
      href: TAX_EXEMPTION_LEARN_MORE_URL,
      target: "_blank",
      rel: "noreferrer",
      onClick: logTaxExemptionClick
    },
    getI18n("sctnh.header_learnmore", headerData)
  ))), /* @__PURE__ */ external_React_default().createElement("div", { className: "tax-exemption-panel__visual", "aria-hidden": "true" }, /* @__PURE__ */ external_React_default().createElement("img", { src: heroImage, alt: "", loading: "lazy" })));
};
/* harmony default export */ const tax_exemption = (TaxExemption);

;// ./src/features/why-alibaba/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/why-alibaba/index.tsx







const getText = (key = "", headerData) => {
  if (!key) return "";
  return getI18n(key, headerData);
};
const getConfigText = (item, headerData) => {
  if (item.i18nKey) {
    return getText(item.i18nKey, headerData);
  }
  return item.text || item.key;
};
const WhyAlibaba = ({ config, getAppConfig, defaultConfig }) => {
  const headerData = useHeaderData();
  const resolvedConfig = config ?? defaultConfig ?? defaultSubHeaderConfig.whyAlibaba;
  const appConfig = getAppConfig ?? defaultSubHeaderConfig.getApp;
  if (!resolvedConfig?.cardList?.length) return /* @__PURE__ */ external_React_default().createElement((external_React_default()).Fragment, null);
  return /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__cards" }, resolvedConfig.cardList.map((card) => /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      className: "why-alibaba-content__card",
      href: card.link,
      target: "_blank",
      rel: "noreferrer",
      key: card.key,
      "data-tnhkey": card.key,
      onClick: () => {
        log(card.key);
      }
    },
    /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__card-image" }, /* @__PURE__ */ external_React_default().createElement("img", { src: card.image, alt: "", loading: "lazy" })),
    /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__card-title" }, getConfigText(card, headerData)),
    /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__card-desc" }, card.descI18nKey ? getText(card.descI18nKey, headerData) : card.desc)
  ))), appConfig?.title && /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__app", "data-tnhkey": "Why Alibaba.com app" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__app-title" }, getText(appConfig.title, headerData)), /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__app-desc" }, getText(appConfig.content, headerData)), /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__app-download" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__app-qr" }, /* @__PURE__ */ external_React_default().createElement("img", { src: appConfig.installQrIcon, alt: "", loading: "lazy" })), /* @__PURE__ */ external_React_default().createElement("div", { className: "why-alibaba-content__app-store" }, /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      href: appConfig.googleStore?.url,
      target: "_blank",
      rel: "noreferrer",
      onClick: () => {
        log("whyAlibabaGooglePlay");
      }
    },
    /* @__PURE__ */ external_React_default().createElement("img", { src: appConfig.googleStore?.icon, alt: "", loading: "lazy" })
  ), /* @__PURE__ */ external_React_default().createElement(
    "a",
    {
      href: appConfig.appStore?.url,
      target: "_blank",
      rel: "noreferrer",
      onClick: () => {
        log("whyAlibabaAppStore");
      }
    },
    /* @__PURE__ */ external_React_default().createElement("img", { src: appConfig.appStore?.icon, alt: "", loading: "lazy" })
  )))));
};
/* harmony default export */ const why_alibaba = (WhyAlibaba);

;// ./src/features/sub-header/utils/resolveSourceInEuropeType.ts

const SUPPORTED_SCENES = ["pc-home", "search-list-undefined", "search-products"];
const EUROPAGES_COUNTRIES = [
  "AL",
  "AD",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "LV",
  "LI",
  "LT",
  "LU",
  "MK",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "UA",
  "GB",
  "VA"
];
const WLW_COUNTRIES = ["DE", "AT", "CH"];
const WLW_LOCALES = ["en_US", "de_DE"];
const resolveSourceInEuropeType = (scenes, shipTo, locale) => {
  if (!scenes || !SUPPORTED_SCENES.includes(scenes) || !shipTo) return null;
  if (WLW_COUNTRIES.includes(shipTo)) {
    return locale && WLW_LOCALES.includes(locale) ? "wlw" : "europages";
  }
  return EUROPAGES_COUNTRIES.includes(shipTo) ? "europages" : null;
};

;// ./src/features/sub-header/hook/useResolvedSubHeaderMenu.tsx

















const { useContext: useResolvedSubHeaderMenu_useContext } = external_React_namespaceObject;
const SOURCE_IN_EUROPE_KEY = "Source in Europe";
const TAX_EXEMPTION_KEY = "Tax exemption";
const KNOWN_MENU_KEYS = /* @__PURE__ */ new Set([
  "All categories",
  "Manufacturers",
  "Dropshipping",
  SOURCE_IN_EUROPE_KEY,
  "Why Alibaba.com",
  TAX_EXEMPTION_KEY,
  "Help Center",
  "AccioWork",
  "Become a supplier"
]);
const useResolvedSubHeaderMenu_isPlainObject = (value) => {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
};
const mergeContent = (localValue, remoteValue) => {
  if (remoteValue === void 0) return localValue;
  if (Array.isArray(remoteValue)) return remoteValue;
  if (!useResolvedSubHeaderMenu_isPlainObject(localValue) || !useResolvedSubHeaderMenu_isPlainObject(remoteValue)) return remoteValue;
  const result = { ...localValue };
  Object.keys(remoteValue).forEach((key) => {
    result[key] = mergeContent(localValue[key], remoteValue[key]);
  });
  return result;
};
const createDisplayOverrides = (subMenu) => {
  const overrides = /* @__PURE__ */ new Map();
  if (!Array.isArray(subMenu)) return overrides;
  subMenu.forEach((item) => {
    if (!useResolvedSubHeaderMenu_isPlainObject(item) || typeof item.key !== "string") return;
    if (!KNOWN_MENU_KEYS.has(item.key)) {
      logError("unknown_sub_header_menu_key", `key:${item.key}`, "SubHeader");
      return;
    }
    const displayOverride = {};
    if (Object.prototype.hasOwnProperty.call(item, "name")) {
      displayOverride.name = item.name;
    }
    if (Object.prototype.hasOwnProperty.call(item, "i18nKey")) {
      displayOverride.i18nKey = item.i18nKey;
    }
    if (Object.prototype.hasOwnProperty.call(item, "text")) {
      displayOverride.text = item.text;
    }
    if (Object.prototype.hasOwnProperty.call(item, "url")) {
      displayOverride.url = item.url;
    }
    overrides.set(item.key, displayOverride);
  });
  return overrides;
};
const mergeMenuDisplay = (item, overrides) => {
  return {
    ...item,
    ...overrides.get(item.key)
  };
};
const Categories = () => {
  const { categoriesProps } = useResolvedSubHeaderMenu_useContext(subHeaderContext);
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    chunkComponent,
    {
      chunkName: "categories",
      chunkProps: categoriesProps,
      loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement("div", { style: { height: 641 } })
    }
  );
};
const codeOwnedMainMenu = [
  {
    name: "All categories",
    key: "All categories",
    i18nKey: "sctnh.header_signin_18",
    icon: /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-category" }),
    children: /* @__PURE__ */ external_React_namespaceObject.createElement(Categories, null),
    type: "hover"
  },
  {
    name: "Verified manufacturers",
    key: "Manufacturers",
    i18nKey: "sctnh.header_Manufacturers_01",
    children: /* @__PURE__ */ external_React_namespaceObject.createElement(find_factory, null),
    type: "hover"
  },
  {
    name: "Dropshipping",
    key: "Dropshipping",
    i18nKey: "sctnh.header_dropshipping",
    children: /* @__PURE__ */ external_React_namespaceObject.createElement(dropshipping, null),
    type: "hover"
  }
];
const useResolvedSubHeaderMenu = (environment) => {
  const { scenes, shipReadData, country, language, debugConfig } = environment;
  const forceShowOptionalSubMenu = Boolean(debugConfig?.forceSubHeaderSubTabs);
  const [resolvedContent, setResolvedContent] = external_React_namespaceObject.useState(defaultSubHeaderConfig);
  external_React_namespaceObject.useEffect(() => {
    let cancelled = false;
    getSubHeaderConfig().then((remoteContent) => {
      if (!cancelled) {
        setResolvedContent(mergeContent(defaultSubHeaderConfig, remoteContent));
      }
    }).catch(() => void 0);
    return () => {
      cancelled = true;
    };
  }, []);
  const displayOverrides = external_React_namespaceObject.useMemo(
    () => createDisplayOverrides(resolvedContent.subMenu),
    [resolvedContent.subMenu]
  );
  const [showTaxExemption, setShowTaxExemption] = external_React_namespaceObject.useState(false);
  const [taxHeaderEntrance, setTaxHeaderEntrance] = external_React_namespaceObject.useState({
    show: false
  });
  const fixedSubMenu = external_React_namespaceObject.useMemo(
    () => [
      {
        name: "Help Center",
        key: "Help Center",
        i18nKey: "sctnh.header_helpcenter",
        children: /* @__PURE__ */ external_React_namespaceObject.createElement(help_center, { config: resolvedContent.helpCenter }),
        type: "hover"
      },
      {
        name: "AccioWork",
        key: "AccioWork",
        i18nKey: "sctnh.header_accio_work",
        children: /* @__PURE__ */ external_React_namespaceObject.createElement(accio_work, null),
        type: "hover"
      },
      {
        name: "Sell on Alibaba.com",
        key: "Become a supplier",
        i18nKey: "sctnh.header_signin_58",
        url: "https://register.alibaba.com/reg/form.htm?entrance=buyerHome",
        children: /* @__PURE__ */ external_React_namespaceObject.createElement(become_supplier, { config: resolvedContent.becomeSupplier }),
        type: "hover"
      }
    ].map((item) => mergeMenuDisplay(item, displayOverrides)),
    [displayOverrides, resolvedContent.becomeSupplier, resolvedContent.helpCenter]
  );
  const whyAlibabaItem = external_React_namespaceObject.useMemo(
    () => mergeMenuDisplay(
      {
        name: "Why Alibaba.com",
        key: "Why Alibaba.com",
        i18nKey: "sctnh.header_alibaba.com",
        children: /* @__PURE__ */ external_React_namespaceObject.createElement(why_alibaba, { config: resolvedContent.whyAlibaba, getAppConfig: resolvedContent.getApp }),
        type: "hover"
      },
      displayOverrides
    ),
    [displayOverrides, resolvedContent.getApp, resolvedContent.whyAlibaba]
  );
  const taxExemptionItem = external_React_namespaceObject.useMemo(
    () => mergeMenuDisplay(
      {
        name: "Tax exemption",
        key: TAX_EXEMPTION_KEY,
        i18nKey: "sctnh.header_taxexemption",
        children: /* @__PURE__ */ external_React_namespaceObject.createElement(tax_exemption, { taxCollectionDecision: taxHeaderEntrance.taxCollectionDecision }),
        type: "hover"
      },
      displayOverrides
    ),
    [displayOverrides, taxHeaderEntrance.taxCollectionDecision]
  );
  const sourceInEuropeType = resolveSourceInEuropeType(
    scenes,
    country ?? shipReadData?.currentlySelectedLocalCountry,
    language ?? shipReadData?.currentlySelectedLocalLanguage
  );
  external_React_namespaceObject.useEffect(() => {
    if (sourceInEuropeType) log("Source in Europe inlet");
  }, [sourceInEuropeType]);
  external_React_namespaceObject.useEffect(() => {
    let cancelled = false;
    getTaxHeaderEntrance().then((res) => {
      if (!cancelled) {
        setShowTaxExemption(res.show === true);
        setTaxHeaderEntrance(res);
      }
    }).catch(() => {
      if (!cancelled) {
        setShowTaxExemption(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);
  const sourceInEuropeDisplayType = sourceInEuropeType || (forceShowOptionalSubMenu ? "europages" : null);
  const mainMenu = external_React_namespaceObject.useMemo(() => {
    const sourceInEuropeItem = sourceInEuropeDisplayType ? mergeMenuDisplay(
      {
        name: "Source in Europe",
        key: SOURCE_IN_EUROPE_KEY,
        i18nKey: "source_in_europe_1",
        children: /* @__PURE__ */ external_React_namespaceObject.createElement(source_in_europe, { type: sourceInEuropeDisplayType }),
        type: "hover"
      },
      displayOverrides
    ) : null;
    return [
      mergeMenuDisplay(codeOwnedMainMenu[0], displayOverrides),
      mergeMenuDisplay(codeOwnedMainMenu[1], displayOverrides),
      mergeMenuDisplay(codeOwnedMainMenu[2], displayOverrides),
      ...sourceInEuropeItem ? [sourceInEuropeItem] : []
    ];
  }, [displayOverrides, sourceInEuropeDisplayType]);
  const subMenu = external_React_namespaceObject.useMemo(
    () => [
      whyAlibabaItem,
      ...showTaxExemption || forceShowOptionalSubMenu ? [taxExemptionItem] : [],
      ...fixedSubMenu
    ],
    [fixedSubMenu, forceShowOptionalSubMenu, showTaxExemption, taxExemptionItem, whyAlibabaItem]
  );
  return external_React_namespaceObject.useMemo(() => ({ main: mainMenu, sub: subMenu }), [mainMenu, subMenu]);
};

;// ./src/features/sub-header/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/sub-header/index.tsx













const { useState: sub_header_useState, useRef: sub_header_useRef, useCallback, useLayoutEffect, useImperativeHandle, forwardRef, useMemo: sub_header_useMemo } = external_React_namespaceObject;
const SUB_HEADER_PANEL_HEIGHTS = {
  "All categories": 641,
  Manufacturers: 380,
  Dropshipping: 340,
  "Source in Europe": 310,
  "Why Alibaba.com": 278,
  "Tax exemption": 380,
  "Help Center": 196,
  "Become a supplier": 224,
  AccioWork: 380
};
const heightArr = { ...SUB_HEADER_PANEL_HEIGHTS };
const isFullPanelSubHeaderItem = (key) => key === "Tax exemption" || key === "AccioWork";
const SubHeader = forwardRef((props, ref) => {
  const {
    fixed,
    setShowOverLay,
    subConfig,
    categoriesProps,
    showSub,
    setBgTransparentState,
    bgTransparent
  } = props;
  const headerData = useHeaderData();
  const { headerConfig, country, site, scenes, shipReadData, language, debugConfig } = headerData || {};
  const [currentItem, setCurrentItem] = sub_header_useState("");
  const [currentList, setCurrentList] = sub_header_useState([]);
  const [isHoverDom, setIsHoverDom] = sub_header_useState(false);
  const debugMode = isHeaderDebugMode(headerData);
  const subHeaderList = useResolvedSubHeaderMenu({
    site,
    scenes,
    shipReadData,
    country,
    language,
    headerConfig,
    debugConfig
  });
  const timeoutRef = sub_header_useRef(null);
  useImperativeHandle(
    ref,
    () => ({
      isHoverDom
    }),
    [isHoverDom]
  );
  const refList = sub_header_useRef([]);
  const defaultSubRef = sub_header_useRef();
  const propsSubRef = sub_header_useRef();
  useLayoutEffect(() => {
    refList.current.forEach((item) => {
      const name = item?.getAttribute("data-name");
      if (item?.clientHeight !== 80) heightArr[name] = item?.clientHeight;
    });
  }, []);
  const displaySubHeaderList = sub_header_useMemo(() => {
    if (!country || country === "CN" || !subHeaderList?.sub) {
      return subHeaderList;
    }
    const becomeSupplierTab = subHeaderList.sub.find((item) => item.key === "Become a supplier");
    const supplierUrl = becomeSupplierTab?.url;
    return {
      ...subHeaderList,
      sub: subHeaderList.sub.map((item) => {
        if (item.key !== "Become a supplier") return item;
        return {
          ...item,
          type: "click",
          click: () => {
            log(item.key, { url: supplierUrl, tag: `click-${item.key}` });
            window.open(supplierUrl);
          }
        };
      })
    };
  }, [country, subHeaderList]);
  const [contentStyle] = useSpring(() => {
    const prevItem = currentList[currentList.length - 2];
    const fromHeight = () => {
      if (prevItem === currentItem) {
        return 0;
      } else {
        return currentList.length > 1 ? heightArr[prevItem] : 0;
      }
    };
    const currentIndex = refList.current.findIndex(
      (item) => item?.getAttribute("data-name") === currentItem
    );
    const currentHeight = refList.current[currentIndex]?.clientHeight;
    heightArr[currentItem] = !currentHeight || currentHeight < heightArr[currentItem] ? heightArr[currentItem] : currentHeight;
    const toHeight = heightArr[currentItem];
    return {
      from: { height: fromHeight() },
      to: { height: toHeight },
      config: {
        duration: 300,
        easing: easings.easeInOutCubic
      },
      reset: true
    };
  }, [currentItem]);
  const [childrenStyle] = useSpring(() => {
    if (currentItem !== "") {
      const prevItem = currentList[currentList.length - 2];
      const goLeft = prevItem ? OrderOfMenus.indexOf(prevItem) - OrderOfMenus.indexOf(currentItem) >= 0 : true;
      return {
        from: { x: goLeft ? 10 : -10, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: {
          duration: 300,
          easing: easings.easeInOutCubic
        },
        reset: true
      };
    } else {
      return {};
    }
  }, [currentItem]);
  const [defaultSubStyle] = useSpring(() => {
    if (!subConfig?.usePropsSub) {
      return {
        from: { height: 40, opacity: 1 },
        to: { height: 40, opacity: 1 }
      };
    }
    return {
      from: { height: 38, opacity: 1 },
      to: { height: 0, opacity: 0 },
      config: {
        duration: 450,
        easing: easings.easeInOutCubic
      },
      reset: true,
      immediate: !defaultSubRef.current
    };
  }, [subConfig]);
  const [propsSubStyle] = useSpring(() => {
    return {
      from: { height: 0, opacity: 0, zIndex: -1 },
      to: { height: 38, opacity: 1, zIndex: 1 },
      config: {
        duration: 400,
        easing: easings.easeInOutCubic
      },
      reset: true,
      immediate: !propsSubRef.current
    };
  }, [subConfig]);
  const domIn = useCallback(
    (current, isHover) => {
      setIsHoverDom(true);
      setCurrentItem(current);
      setCurrentList((prevList) => [...prevList, current]);
      setShowOverLay(isHover);
      if (isHover) {
        setBgTransparentState(false);
      }
    },
    [setBgTransparentState, setShowOverLay]
  );
  const domOut = useCallback(() => {
    setIsHoverDom(false);
    if (debugMode) return;
    setCurrentItem("");
    if (bgTransparent && !fixed) {
      setBgTransparentState(true);
    }
    setShowOverLay(false);
  }, [bgTransparent, debugMode, fixed, setBgTransparentState, setShowOverLay]);
  const runDomOut = useCallback(() => {
    timeoutRef.current = setTimeout(domOut, 200);
  }, [domOut]);
  const cancelDomOut = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  const renderItem = useCallback(
    (item) => {
      const isHover = item.type === "hover";
      const isTips = item.type === "tips";
      const isFullPanelItem = isFullPanelSubHeaderItem(item.key);
      if (headerConfig?.disable?.includes(item.key)) {
        return null;
      }
      return /* @__PURE__ */ external_React_namespaceObject.createElement(
        "div",
        {
          key: item.key,
          "data-tnhkey": item.key,
          "data-tnh-auto-exp": item.key,
          "data-tnh-auto-clk": item.key,
          onMouseEnter: () => {
            setTimeout(() => {
              cancelDomOut();
              isHover && log(item.key, { behavior: item.type });
              domIn(item.key, isHover);
              if (item.key === "Trade Assurance") preConnect("https://tradeassurance.alibaba.com");
            }, 10);
          },
          onMouseLeave: runDomOut,
          className: classnames_default()({ "sh-current-item": currentItem === item.key })
        },
        /* @__PURE__ */ external_React_namespaceObject.createElement(
          "div",
          {
            className: classnames_default()("tab-title", { "tab-title-click": !isHover }),
            onClick: () => {
              setTimeout(() => {
                if (isHover) return;
                log(item.key, { behavior: item.type });
                item?.click && item.click();
              }, 10);
            }
          },
          item.icon,
          item.i18nKey ? getI18n(item.i18nKey, headerData) : item.text
        ),
        isHover && /* @__PURE__ */ external_React_namespaceObject.createElement(animated.div, { className: "animated-tab-content", style: contentStyle }, /* @__PURE__ */ external_React_namespaceObject.createElement(
          "div",
          {
            "data-name": item.key,
            className: classnames_default()("tab-content", {
              "tab-content--full-panel": isFullPanelItem
            }),
            ref: (dom) => {
              if (!dom) return;
              const currentIndex = refList.current.findIndex(
                (cur) => cur?.getAttribute("data-name") === item.key
              );
              if (currentIndex > -1) {
                refList.current[currentIndex] = dom;
              } else {
                refList.current?.push(dom);
              }
            }
          },
          /* @__PURE__ */ external_React_namespaceObject.createElement(
            animated.div,
            {
              className: classnames_default()("animated-tab-content-children", {
                "animated-tab-content-children--full-panel": isFullPanelItem
              }),
              style: childrenStyle,
              "data-tnh-auto-exp": `${item.key}-children`
            },
            item.children
          )
        )),
        isTips && /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, item.children)
      );
    },
    [
      cancelDomOut,
      childrenStyle,
      contentStyle,
      currentItem,
      domIn,
      headerConfig?.disable,
      headerData,
      runDomOut
    ]
  );
  const subHeaderContextValue = sub_header_useMemo(() => ({ categoriesProps }), [categoriesProps]);
  if (!showSub) {
    return null;
  }
  if (subConfig?.children && subConfig?.isReplace) {
    return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "sub-header" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "sub-header-props" }, subConfig.children));
  }
  return /* @__PURE__ */ external_React_namespaceObject.createElement(subHeaderContext.Provider, { value: subHeaderContextValue }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "sub-header" }, /* @__PURE__ */ external_React_namespaceObject.createElement(animated.div, { ref: defaultSubRef, style: defaultSubStyle, className: "sub-header-default" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      className: "sub-header-main",
      onMouseLeave: domOut
    },
    displaySubHeaderList.main.map((item) => renderItem(item))
  ), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "sub-header-sub", onMouseLeave: domOut }, displaySubHeaderList.sub.map((item) => renderItem(item)))), subConfig?.children && /* @__PURE__ */ external_React_namespaceObject.createElement(animated.div, { ref: propsSubRef, style: propsSubStyle, className: "sub-header-props-hide" }, subConfig?.children)));
});
SubHeader.displayName = "SubHeader";
/* harmony default export */ const sub_header = (SubHeader);

;// ./src/shared/ui/Button/index.less
// extracted by mini-css-extract-plugin

;// ./src/shared/ui/Button/index.tsx



const Button = (props) => {
  const { onClick, children, style, className, type = "button", href } = props;
  if (type === "aButton") {
    return /* @__PURE__ */ external_React_namespaceObject.createElement(
      "a",
      {
        style,
        target: "_blank",
        href,
        className: `tnh-button ${className}`,
        onClick
      },
      children
    );
  }
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { style, className: `tnh-button ${className}`, onClick }, children);
};
/* harmony default export */ const ui_Button = (Button);

;// ./src/features/trade-assurance/card.less
// extracted by mini-css-extract-plugin

;// ./src/features/trade-assurance/card.tsx








const Card = (props) => {
  const { icon, link, i18nKey = "", tnhKey } = props;
  const headerData = useHeaderData();
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    "a",
    {
      href: link,
      target: "_blank",
      className: "ta-card",
      "data-tnhkey": tnhKey,
      onClick: () => {
        log(tnhKey);
      }
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement("img", { src: icon, className: "img", alt: "Trade Assurance Icon", loading: "lazy" }),
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "text" }, /* @__PURE__ */ external_React_namespaceObject.createElement("h3", null, getI18n(i18nKey, headerData)), /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-right-arrow", className: isRTL() ? "rtl" : "" }))
  );
};
/* harmony default export */ const card = (Card);

;// ./src/features/trade-assurance/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/trade-assurance/index.tsx
/* unused harmony import specifier */ var trade_assurance_React;
/* unused harmony import specifier */ var trade_assurance_useHeaderData;
/* unused harmony import specifier */ var trade_assurance_defaultSubHeaderConfig;
/* unused harmony import specifier */ var trade_assurance_getI18n;
/* unused harmony import specifier */ var trade_assurance_log;
/* unused harmony import specifier */ var trade_assurance_Button;
/* unused harmony import specifier */ var trade_assurance_Card;









const TradeAssurance = ({ config, defaultConfig }) => {
  const headerData = trade_assurance_useHeaderData();
  const { headerConfig } = headerData || {};
  const resolvedConfig = config ?? defaultConfig ?? trade_assurance_defaultSubHeaderConfig.tradeAssurance;
  if (!resolvedConfig?.tradeLogo) return /* @__PURE__ */ trade_assurance_React.createElement(trade_assurance_React.Fragment, null);
  return /* @__PURE__ */ trade_assurance_React.createElement("div", { className: "ta-content" }, /* @__PURE__ */ trade_assurance_React.createElement("div", { className: "info" }, /* @__PURE__ */ trade_assurance_React.createElement("div", { className: "img" }, /* @__PURE__ */ trade_assurance_React.createElement("img", { src: resolvedConfig.tradeLogo, alt: "Trade Assurance Logo", loading: "lazy" })), /* @__PURE__ */ trade_assurance_React.createElement("h3", null, trade_assurance_getI18n(resolvedConfig.tradeDesc, headerData)), /* @__PURE__ */ trade_assurance_React.createElement(
    trade_assurance_Button,
    {
      type: "aButton",
      href: resolvedConfig.tradeUrl,
      onClick: () => {
        trade_assurance_log("learn more");
      }
    },
    trade_assurance_getI18n(resolvedConfig.tradeLearnMoreText, headerData)
  )), /* @__PURE__ */ trade_assurance_React.createElement("div", { className: "cards" }, resolvedConfig.cardList.map((item) => {
    item.tnhKey = item.key;
    if (headerConfig?.disable?.includes(item.key)) {
      return null;
    }
    return /* @__PURE__ */ trade_assurance_React.createElement(trade_assurance_Card, { key: item.key, ...item });
  })));
};
/* harmony default export */ const trade_assurance = ((/* unused pure expression or super */ null && (TradeAssurance)));

// EXTERNAL MODULE: ./node_modules/loadjs/dist/loadjs.umd.js
var loadjs_umd = __webpack_require__(336);
var loadjs_umd_default = /*#__PURE__*/__webpack_require__.n(loadjs_umd);
;// ./node_modules/@ali/icbu-domain-transfer/lib/index.js
lib_namespaceFn();

;// ./src/features/login/loginLinksConfig.ts


const LoginLinks = [
  {
    key: "My Alibaba",
    link: `https://i.alibaba.${getTopLevelDomain()}/index.htm`,
    i18nKey: "sctnh.header_signin_05",
    needLogged: false
  },
  {
    key: "Orders",
    link: `https://biz.alibaba.${getTopLevelDomain()}/ta/list/scene/mainList.htm`,
    i18nKey: "sctnh.header_signin_06",
    needLogged: false
  },
  {
    key: "Messages",
    link: `https://message.alibaba.${getTopLevelDomain()}/message/messenger.htm#`,
    i18nKey: "sctnh.header_signin_07",
    needLogged: false
  },
  {
    key: "RFQ",
    link: `https://message.alibaba.${getTopLevelDomain()}/message/buyingLeads.htm?activeTab=rfq`,
    i18nKey: "sctnh.header_signin_08",
    needLogged: false
  },
  {
    key: "Favourites",
    link: `https://us-favorite.alibaba.${getTopLevelDomain()}/favorite2/favorite_home.htm?spm=a2700.product_home_l3.scGlobalHomeHeader.407.47a267afyJTqeE&tracelog=header_favorite_home#/favList?_k=eardg2`,
    i18nKey: "sctnh.header_signin_09",
    needLogged: false
  },
  {
    key: "Account",
    link: `https://i.alibaba.com/accounts/account_settings.htm`,
    i18nKey: "sctnh.header_signin_10",
    needLogged: false
  }
];
const DropshippingLoginLink = {
  key: "Dropshipping Center",
  link: "https://i.alibaba.com/buyer/dropshipping/products?tracelog=lpmyalibaba",
  i18nKey: "sctnh.header_dropshipping",
  needLogged: false
};

;// ./src/features/login/MA/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/login/MA/MALogged.tsx









const userInfo = getUserInfo();
const MALogged = (props) => {
  const { account } = props.data || {};
  const { logoutReturnUrl, loginLinks = LoginLinks } = props;
  const headerData = useHeaderData();
  const getItemUrl = (item) => {
    if (item.key === "Messages") {
      return headerData?.messageUrl;
    }
    return item.link;
  };
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ma-content", "data-tnh-auto-exp": "ma_logged", "data-tnh-auto-clk": "ma_logged" }, /* @__PURE__ */ external_React_namespaceObject.createElement("input", { style: { display: "none" } }), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ma-content-title" }, /* @__PURE__ */ external_React_namespaceObject.createElement("h3", { title: userInfo.firstName }, getI18n("sctnh.header_signin_109", headerData).replace("{0}", userInfo.firstName)), account?.levelLogo && /* @__PURE__ */ external_React_namespaceObject.createElement("img", { src: account.levelLogo, alt: account.name, loading: "lazy" })), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "login-links" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, /* @__PURE__ */ external_React_namespaceObject.createElement("ul", null, loginLinks.map((item) => {
    if (headerData?.headerConfig?.disable?.includes(item.key)) {
      return null;
    }
    return /* @__PURE__ */ external_React_namespaceObject.createElement("li", { "data-tnhkey": item.key, key: item.key }, /* @__PURE__ */ external_React_namespaceObject.createElement(
      "a",
      {
        target: "_blank",
        href: getItemUrl(item),
        onClick: () => {
          log(item.key);
        }
      },
      getI18n(item.i18nKey, headerData)
    ));
  }))), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { style: { paddingTop: 8 } }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    "a",
    {
      rel: "nofollow",
      href: `//login.alibaba.${getTopLevelDomain()}/xman/sign_out.htm?tracelog=hd_signout&return_url=${encodeURIComponent(
        logoutReturnUrl || window.location.href
      )}`
    },
    getI18n("sctnh.header_signin_12", headerData)
  ))));
};
/* harmony default export */ const MA_MALogged = (MALogged);

;// ./src/features/login/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/login/MA/MANotLogged.tsx









const { useEffect: MANotLogged_useEffect } = external_React_namespaceObject;
const MANotLogged = (props) => {
  const { showLoginPopUp, previouslyUser, loginLinks = LoginLinks } = props;
  const headerData = useHeaderData();
  MANotLogged_useEffect(() => {
    if (!showLoginPopUp || !window.ThirdPartLogin) return;
    window.thirdLoginOpt = {
      targetId: "thirdpart-login",
      isMobile: false,
      lang: "en_US",
      returnUrl: "",
      returnUrlEncoded: true,
      appName: "icbu",
      appEntrance: "icbu",
      iframeUrl: `https://login.alibaba.${getTopLevelDomain()}/sns_auth.htm`,
      iconType: "icon",
      iconSize: 40,
      iconMargin: 0,
      windowWidth: 800,
      windowHeight: 600,
      loginType: [
        { name: "facebook", responseAction: "window", text: "sign in with facebook" },
        { name: "google", responseAction: "window", text: "sign in with google" },
        { name: "linkedin", responseAction: "window", text: "sign in with linkedin" }
      ]
    };
    if (headerData.site) {
      window.thirdLoginOpt.loginType.pop();
    }
    const thirdLogin = new window.ThirdPartLogin();
    thirdLogin.init(window.thirdLoginOpt);
    thirdLogin.addEvent("onMessage", (args) => {
      if (/^hasLoginResult|loginResult$/.test(args?.action)) {
        if (args?.resultCode == 100 && args?.st) {
          typeof window !== "undefined" && window.location.reload();
        }
      }
    });
  }, [showLoginPopUp]);
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      className: "sign-in-content",
      "data-tnh-auto-exp": "ma_not_logged",
      "data-tnh-auto-clk": "ma_not_logged"
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement("h3", { className: "sign-in-content-title" }, previouslyUser ? getI18n("sctnh.header_signin_89", headerData) : getI18n("sctnh.header_signin_02", headerData)),
    /* @__PURE__ */ external_React_namespaceObject.createElement(
      ui_Button,
      {
        type: "aButton",
        onClick: () => {
          props.xman?.show();
          log("sign_in", { module: "ma-sign-in" });
        },
        className: "sign-in-content-button"
      },
      getI18n("sctnh.header_signin_01", headerData)
    ),
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "login-with" }, getI18n("sctnh.header_signin_03", headerData)),
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "thirdpart-login", id: "thirdpart-login" }),
    /* @__PURE__ */ external_React_namespaceObject.createElement(
      "div",
      {
        className: "login-tips",
        dangerouslySetInnerHTML: { __html: getI18n("sctnh.header_signin_04", headerData) }
      }
    ),
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "login-links" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", null, /* @__PURE__ */ external_React_namespaceObject.createElement("ul", null, loginLinks.map((item) => {
      if (headerData?.headerConfig?.disable?.includes(item.key)) {
        return null;
      }
      return /* @__PURE__ */ external_React_namespaceObject.createElement("li", { key: item.key, "data-tnhkey": item.key }, /* @__PURE__ */ external_React_namespaceObject.createElement(
        "a",
        {
          target: "_blank",
          href: item.link,
          onClick: () => {
            log(item?.key);
          }
        },
        getI18n(item.i18nKey, headerData)
      ));
    }))), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { style: { paddingTop: 8 } }, /* @__PURE__ */ external_React_namespaceObject.createElement(
      "a",
      {
        href: `https://sale.alibaba.com/p/dd4pt71ef/index.html?wx_navbar_transparent=true&path=/p/dd4pt71ef/index.html&ncms_spm=a27aq.25843503&prefetchKey=met#/`,
        target: "_blank"
      },
      getI18n("sctnh.header_signin_43", headerData)
    )))
  );
};
/* harmony default export */ const MA_MANotLogged = (MANotLogged);

;// ./src/features/login/MA/index.tsx













const { useEffect: MA_useEffect, useState: MA_useState, useRef: MA_useRef } = external_React_namespaceObject;
const DROPSHIPPING_CHECK_URL = "https://www.alibaba.com/dropshipping/ajax/crowd/check";
const BENEFIT_CENTER_OVERVIEW_URL = "https://accounts.alibaba.com/benefits/external/getDetailedBenefitsOverview?entry=globalHeader";
const isSafeBenefitCenterUrl = (value) => {
  if (typeof value !== "string" || !value) return false;
  try {
    const { protocol } = new URL(value);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
};
const MA = (props) => {
  const { previouslyUser, xman, logged, logoutReturnUrl } = props;
  const headerData = useHeaderData();
  const { zIndex, setMemberData } = headerData;
  const [showLoginPopUp, setshowLoginPopUp] = MA_useState(false);
  const [portrait, setPortrait] = MA_useState(null);
  const [MALoggedData, setMALoggedData] = MA_useState(null);
  const [showDropshippingLink, setShowDropshippingLink] = MA_useState(false);
  const [benefitCenterUrl, setBenefitCenterUrl] = MA_useState("");
  const debugMode = isHeaderDebugMode(headerData);
  const hasPreconnectMA = MA_useRef(false);
  MA_useEffect(() => {
    let cancelled = false;
    logged && getUserPortrait();
    getMAData();
    fetch(DROPSHIPPING_CHECK_URL, { credentials: "include" }).then((response) => response.json()).then((payload) => {
      if (!cancelled) {
        setShowDropshippingLink(payload?.data === true);
      }
    }).catch(() => void 0);
    if (logged) {
      fetch(BENEFIT_CENTER_OVERVIEW_URL, { credentials: "include" }).then((response) => response.json()).then((payload) => {
        const url = payload?.data?.benefitCenterUrl;
        if (!cancelled && isSafeBenefitCenterUrl(url)) {
          setBenefitCenterUrl(url);
        }
      }).catch(() => void 0);
    }
    return () => {
      cancelled = true;
    };
  }, []);
  const loginLinks = external_React_namespaceObject.useMemo(() => {
    const optionalLinks = [];
    if (benefitCenterUrl) {
      optionalLinks.push({
        key: "Benefit",
        link: benefitCenterUrl,
        i18nKey: "sctnh.header_signin_benefits",
        needLogged: false
      });
    }
    if (showDropshippingLink) {
      optionalLinks.push(DropshippingLoginLink);
    }
    if (!optionalLinks.length) return LoginLinks;
    const rfqIndex = LoginLinks.findIndex((item) => item.key === "RFQ");
    return [
      ...LoginLinks.slice(0, rfqIndex + 1),
      ...optionalLinks,
      ...LoginLinks.slice(rfqIndex + 1)
    ];
  }, [benefitCenterUrl, showDropshippingLink]);
  const getUserPortrait = () => {
    const url = `//i.alibaba.${getTopLevelDomain()}/ajax/user_portrait.htm?ctoken=${getCtoken()}&_tb_token_=${getCookieByName(
      "_tb_token_"
    )}&_=${(/* @__PURE__ */ new Date()).getTime()}`;
    fetch_jsonp_default()(url).then((response) => response.json()).then((data) => {
      if (data.result === "success") {
        setPortrait(data.portraitUrl);
      }
    });
  };
  const getMAData = () => {
    const url = `//ug.alibaba.${getTopLevelDomain()}/api/common/header.json?scene=home&ctoken=${getCtoken()}&_tb_token_=${getCookieByName(
      "_tb_token_"
    )}&_=${(/* @__PURE__ */ new Date()).getTime()}`;
    fetch_jsonp_default()(url).then((response) => response.json()).then((data) => {
      if (data.code === 200) {
        setMALoggedData(data.data);
        setMemberData(data.data?.account || {});
      }
    });
  };
  const preconnectMA = () => {
    if (hasPreconnectMA.current) return;
    console.debug("[preconnect] ma");
    hasPreconnectMA.current = true;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = `https://i.alibaba.${getTopLevelDomain()}`;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  };
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ma" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    reactjs_popup_esm,
    {
      on: debugMode ? "click" : "hover",
      offsetY: 20,
      position: isRTL() ? "bottom left" : "bottom right",
      contentStyle: {
        zIndex: zIndex + 1
      },
      className: "functional ma",
      onOpen: () => {
        log("ma");
        setshowLoginPopUp(true);
      },
      onClose: () => {
        setshowLoginPopUp(false);
      },
      trigger: /* @__PURE__ */ external_React_namespaceObject.createElement(
        "div",
        {
          onClick: () => {
            xman?.show();
            log("sign_in", { module: "outer-sign-in" });
          },
          "data-tnh-auto-exp": "ma",
          "data-tnh-auto-clk": "ma"
        },
        portrait ? /* @__PURE__ */ external_React_namespaceObject.createElement(
          "a",
          {
            target: "_blank",
            href: `https://i.alibaba.${getTopLevelDomain()}/index.htm`,
            onMouseEnter: preconnectMA
          },
          /* @__PURE__ */ external_React_namespaceObject.createElement("img", { className: "user-portrait", src: portrait, loading: "lazy", alt: "user-portrait" })
        ) : (
          // <div className="ma-portrait-waiting">
          /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-customer" }), " ", previouslyUser && getI18n("sctnh.header_signin_01", headerData))
        )
      )
    },
    previouslyUser ? /* @__PURE__ */ external_React_namespaceObject.createElement(
      MA_MANotLogged,
      {
        showLoginPopUp,
        previouslyUser,
        xman,
        loginLinks
      }
    ) : /* @__PURE__ */ external_React_namespaceObject.createElement(MA_MALogged, { data: MALoggedData, logoutReturnUrl, loginLinks })
  ));
};
/* harmony default export */ const login_MA = (MA);

;// ./src/shared/ui/Badge/index.less
// extracted by mini-css-extract-plugin

;// ./src/shared/ui/Badge/index.tsx



const Badge = (props) => {
  const { count, children, nonFloating = false } = props;
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: nonFloating ? "tnh-badge-nf" : "tnh-badge" }, children, Number(count) > 0 && /* @__PURE__ */ external_React_namespaceObject.createElement("i", null, Number(count) > 99 ? "99+" : count));
};
/* harmony default export */ const ui_Badge = (Badge);

;// ./src/features/login/Order/OrderPaymentTip.tsx





const ORDER_PAYMENT_TIP_AUTO_HIDE_DELAY = 2e4;
const ORDER_PAYMENT_TIP_MAX_DAILY_EXPOSURE_COUNT = 1;
const ORDER_PAYMENT_TIP_FATIGUE_STORAGE_KEY = "tnh-order-payment-tip-fatigue";
const HIGH_PRIORITY_HEADER_POPUP_SELECTORS = [
  ".tnh-ship-to-tips",
  ".tnh-ship-to-content",
  ".switch-to-popover-content",
  ".tnh-languages-overlay"
];
const isNonEmptyString = (value) => typeof value === "string" && value.length > 0;
const isValidOrderPaymentTipData = (data) => {
  return Boolean(
    isNonEmptyString(data?.title) && isNonEmptyString(data?.actionText) && isNonEmptyString(data?.actionUrl)
  );
};
const getTodayKey = () => {
  const now = /* @__PURE__ */ new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const date = `${now.getDate()}`.padStart(2, "0");
  return `${now.getFullYear()}-${month}-${date}`;
};
const getStorage = () => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
};
const createTodayFatigueState = () => ({
  date: getTodayKey(),
  exposureCount: 0
});
const readOrderPaymentTipFatigueState = () => {
  const storage = getStorage();
  if (!storage) return null;
  const today = getTodayKey();
  try {
    const rawState = storage.getItem(ORDER_PAYMENT_TIP_FATIGUE_STORAGE_KEY);
    if (!rawState) return createTodayFatigueState();
    const parsedState = JSON.parse(rawState);
    if (parsedState.date !== today) return createTodayFatigueState();
    return {
      date: today,
      exposureCount: typeof parsedState.exposureCount === "number" ? parsedState.exposureCount : 0,
      dismissed: parsedState.dismissed === true
    };
  } catch (error) {
    return createTodayFatigueState();
  }
};
const writeOrderPaymentTipFatigueState = (state) => {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(ORDER_PAYMENT_TIP_FATIGUE_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
  }
};
const canShowByFatigue = () => {
  const state = readOrderPaymentTipFatigueState();
  if (!state) return true;
  return !state.dismissed && state.exposureCount < ORDER_PAYMENT_TIP_MAX_DAILY_EXPOSURE_COUNT;
};
const isHigherPriorityHeaderPopupVisible = () => {
  if (typeof window === "undefined") return false;
  if (window.HeaderGuidePop?.visiblePopArray?.length > 0) {
    return true;
  }
  if (typeof document === "undefined") return false;
  return HIGH_PRIORITY_HEADER_POPUP_SELECTORS.some(
    (selector) => Boolean(document.querySelector(selector))
  );
};
const canShowOrderPaymentTip = (data, priorityBlocked) => {
  if (!isValidOrderPaymentTipData(data)) return false;
  const blocked = priorityBlocked ?? isHigherPriorityHeaderPopupVisible();
  return canShowByFatigue() && !blocked;
};
const getOrderPaymentTipDataKey = (data) => {
  if (!isValidOrderPaymentTipData(data)) return "";
  return [
    data.title,
    isNonEmptyString(data.amount) ? data.amount : "",
    isNonEmptyString(data.description) ? data.description : "",
    data.actionText,
    data.actionUrl,
    isNonEmptyString(data.iconUrl) ? data.iconUrl : ""
  ].join("|");
};
const recordOrderPaymentTipExposure = () => {
  const state = readOrderPaymentTipFatigueState();
  if (!state) return true;
  if (state.dismissed || state.exposureCount >= ORDER_PAYMENT_TIP_MAX_DAILY_EXPOSURE_COUNT) {
    return false;
  }
  writeOrderPaymentTipFatigueState({
    ...state,
    exposureCount: state.exposureCount + 1
  });
  return true;
};
const dismissOrderPaymentTipForToday = () => {
  const state = readOrderPaymentTipFatigueState();
  if (!state) return;
  writeOrderPaymentTipFatigueState({
    ...state,
    dismissed: true
  });
};
const OrderPaymentTip = (props) => {
  const { data, hidden = false } = props;
  const dataKey = getOrderPaymentTipDataKey(data);
  const [skippedByPriority, setSkippedByPriority] = external_React_namespaceObject.useState(
    () => Boolean(dataKey && isHigherPriorityHeaderPopupVisible())
  );
  const [visible, setVisible] = external_React_namespaceObject.useState(() => canShowOrderPaymentTip(data));
  const recordedDataKeyRef = external_React_namespaceObject.useRef("");
  external_React_namespaceObject.useEffect(() => {
    const blocked = Boolean(dataKey && isHigherPriorityHeaderPopupVisible());
    setSkippedByPriority(blocked);
    setVisible(canShowOrderPaymentTip(data, blocked));
  }, [dataKey]);
  external_React_namespaceObject.useEffect(() => {
    if (hidden || skippedByPriority || !visible || !dataKey) return;
    if (recordedDataKeyRef.current !== dataKey) {
      const canRecordExposure = recordOrderPaymentTipExposure();
      recordedDataKeyRef.current = dataKey;
      if (!canRecordExposure) {
        setVisible(false);
        return;
      }
      log("order-payment-tip-expose", void 0, "EXP");
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, ORDER_PAYMENT_TIP_AUTO_HIDE_DELAY);
    return () => {
      window.clearTimeout(timer);
    };
  }, [dataKey, hidden, skippedByPriority, visible]);
  if (hidden || skippedByPriority || !visible || !isValidOrderPaymentTipData(data)) return null;
  const description = isNonEmptyString(data.description) ? data.description : "";
  const amount = isNonEmptyString(data.amount) ? data.amount : "";
  const iconUrl = isNonEmptyString(data.iconUrl) ? data.iconUrl : "";
  const hideForToday = () => {
    dismissOrderPaymentTipForToday();
    setVisible(false);
  };
  const handleActionClick = () => {
    log("order-payment-tip-make-payment");
    hideForToday();
  };
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip", role: "status", "aria-live": "polite" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-arrow" }), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-context" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-content" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-title-row" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-icon" }, iconUrl ? /* @__PURE__ */ external_React_namespaceObject.createElement("img", { src: iconUrl, alt: "", loading: "lazy" }) : /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-order" })), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-title", title: data.title }, data.title)), amount && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-amount", title: amount }, amount), description && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-desc", title: description }, description), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-payment-tip-action-row" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    "a",
    {
      className: "tnh-order-payment-tip-action",
      href: (0,lib_namespaceFn().Q)(data.actionUrl),
      target: "_blank",
      rel: "noreferrer",
      onClick: handleActionClick
    },
    data.actionText
  ))), /* @__PURE__ */ external_React_namespaceObject.createElement(
    "button",
    {
      type: "button",
      className: "tnh-order-payment-tip-close",
      "aria-label": "Close payment reminder",
      onClick: hideForToday
    }
  )));
};
/* harmony default export */ const Order_OrderPaymentTip = (OrderPaymentTip);

;// ./src/features/login/Order/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/login/Order/noOrder.tsx







const { tradeAssurance: taConfig } = defaultSubHeaderConfig;
const NoOrder = () => {
  const headerData = useHeaderData();
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-nodata" }, /* @__PURE__ */ external_React_namespaceObject.createElement("h3", null, getI18n("sctnh.header_signin_06", headerData)), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "ta-info" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "ta-logo" }, /* @__PURE__ */ external_React_namespaceObject.createElement("img", { src: taConfig.tradeLogo, alt: "", loading: "lazy" })), /* @__PURE__ */ external_React_namespaceObject.createElement("h3", null, getI18n(taConfig.tradeDesc, headerData))), taConfig.cardList.map((item) => {
    return /* @__PURE__ */ external_React_namespaceObject.createElement(card, { key: item.key, ...item });
  }), /* @__PURE__ */ external_React_namespaceObject.createElement(
    "a",
    {
      target: "_blank",
      className: "tnh-more",
      href: "https://tradeassurance.alibaba.com?tracelog=PC_header_order_learnmore"
    },
    getI18n(taConfig.tradeLearnMoreText, headerData)
  ));
};
/* harmony default export */ const noOrder = (NoOrder);

;// ./src/features/login/Order/index.tsx
















const { useState: Order_useState, useEffect: Order_useEffect } = external_React_namespaceObject;
const Order = () => {
  const headerData = useHeaderData();
  const { zIndex } = headerData;
  const [unreadNum, setUnreadNum] = Order_useState(0);
  const [buyerData, setBuyerData] = Order_useState([]);
  const [sellerData, setSellerData] = Order_useState([]);
  const [orderPaymentTipData, setOrderPaymentTipData] = Order_useState(null);
  const [showOrderPopup, setShowOrderPopup] = Order_useState(false);
  const debugMode = isHeaderDebugMode(headerData);
  Order_useEffect(() => {
    getOrders();
  }, []);
  const getOrders = () => {
    const url = `https://biz.alibaba.${getTopLevelDomain()}/order/ajax/AjaxOrderStatistic.do?_=${(/* @__PURE__ */ new Date()).getTime()}`;
    fetch_jsonp_default()(url).then((response) => response.json()).then((data) => {
      if (data.result === "success") {
        if (Object.prototype.hasOwnProperty.call(data, "orderPaymentTipData")) {
          setOrderPaymentTipData(data.orderPaymentTipData || null);
        }
        const { buyer, seller } = data.statisticInfoMap;
        const totalNum = (buyer?.todoDetail?.PendingPayment?.totalNum || 0) + (buyer?.todoDetail?.PendingConfirmation?.totalNum || 0) + (seller?.todoDetail?.PendingConfirmation?.totalNum || 0) + (seller?.todoDetail?.MA_PENDING_LOGISTICS?.totalNum || 0);
        setUnreadNum(totalNum);
        if (buyer) {
          setBuyerData([
            {
              i18nKey: "sctnh.header_signin_98",
              name: "Pending payment",
              num: buyer?.todoDetail?.PendingPayment?.totalNum || 0,
              url: buyer?.todoDetail?.PendingPayment?.url,
              needNum: true
            },
            {
              i18nKey: "sctnh.header_signin_99",
              name: "Pending confirmation",
              num: buyer?.todoDetail?.PendingConfirmation?.totalNum || 0,
              url: buyer?.todoDetail?.PendingConfirmation?.url,
              needNum: true
            },
            {
              i18nKey: "sctnh.header_signin_100",
              name: "Pending actions",
              num: buyer?.todoDetail?.MA_PENDING_ALL?.totalNum || 0,
              url: buyer?.todoDetail?.MA_PENDING_ALL?.url,
              needNum: false
            }
          ]);
        }
        if (seller) {
          setSellerData([
            {
              i18nKey: "sctnh.header_signin_102",
              name: "Pending shipping",
              num: seller?.todoDetail?.PendingConfirmation?.totalNum || 0,
              url: seller?.todoDetail?.PendingConfirmation?.url,
              needNum: true
            },
            {
              i18nKey: "sctnh.header_signin_99",
              name: "Pending confirmation",
              num: seller?.todoDetail?.MA_PENDING_LOGISTICS?.totalNum || 0,
              url: seller?.todoDetail?.MA_PENDING_LOGISTICS?.url,
              needNum: true
            },
            {
              i18nKey: "sctnh.header_signin_100",
              name: "Pending actions",
              num: seller?.todoDetail?.MA_PENDING_ALL?.totalNum || 0,
              url: seller?.todoDetail?.MA_PENDING_ALL?.url,
              needNum: false
            }
          ]);
        }
      }
    });
  };
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order", "data-tnhkey": "order" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    reactjs_popup_esm,
    {
      on: debugMode ? "click" : "hover",
      offsetY: 20,
      position: "bottom center",
      contentStyle: {
        zIndex: zIndex + 1
      },
      className: "functional login",
      onOpen: () => {
        setShowOrderPopup(true);
        log("order");
        preConnect("https://tradeassurance.alibaba.com");
      },
      onClose: () => {
        setShowOrderPopup(false);
      },
      trigger: /* @__PURE__ */ external_React_namespaceObject.createElement("div", { "data-tnh-auto-exp": "order", "data-tnh-auto-clk": "order" }, /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Badge, { count: unreadNum }, /* @__PURE__ */ external_React_namespaceObject.createElement(
        "a",
        {
          href: `https://biz.alibaba.${getTopLevelDomain()}/order/list.htm`,
          target: "_blank",
          "aria-label": "icon-order"
        },
        /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-order" })
      )))
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-content" }, unreadNum > 0 ? /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, buyerData && buyerData.length > 0 && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-buyer" }, /* @__PURE__ */ external_React_namespaceObject.createElement("h3", null, getI18n("sctnh.header_signin_97", headerData)), buyerData.map((item) => {
      return /* @__PURE__ */ external_React_namespaceObject.createElement("a", { href: (0,lib_namespaceFn().Q)(item.url), target: "_blank", key: item.name }, /* @__PURE__ */ external_React_namespaceObject.createElement("span", null, getI18n(item.i18nKey, headerData)), item.needNum && /* @__PURE__ */ external_React_namespaceObject.createElement("span", null, "(", item.num, ")"), " ");
    })), sellerData && sellerData.length > 0 && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-seller" }, /* @__PURE__ */ external_React_namespaceObject.createElement("h3", null, getI18n("sctnh.header_signin_101", headerData)), sellerData.map((item) => {
      return /* @__PURE__ */ external_React_namespaceObject.createElement("a", { href: (0,lib_namespaceFn().Q)(item.url), target: "_blank", key: item.name }, /* @__PURE__ */ external_React_namespaceObject.createElement("span", null, getI18n(item.i18nKey, headerData)), item.needNum && /* @__PURE__ */ external_React_namespaceObject.createElement("span", null, "(", item.num, ")"));
    })), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-order-ta" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "img" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
      "img",
      {
        src: defaultSubHeaderConfig.tradeAssurance.tradeLogo,
        alt: "",
        loading: "lazy"
      }
    )), /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "ta-info" }, getI18n(defaultSubHeaderConfig.tradeAssurance.tradeDesc, headerData), /* @__PURE__ */ external_React_namespaceObject.createElement(
      "a",
      {
        target: "_blank",
        href: "https://tradeassurance.alibaba.com?tracelog=PC_header_order_learnmore"
      },
      getI18n(defaultSubHeaderConfig.tradeAssurance.tradeLearnMoreText, headerData)
    )))) : /* @__PURE__ */ external_React_namespaceObject.createElement(noOrder, null))
  ), /* @__PURE__ */ external_React_namespaceObject.createElement(ErrorBoundary, { fallback: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null), module: "OrderPaymentTip" }, /* @__PURE__ */ external_React_namespaceObject.createElement(Order_OrderPaymentTip, { data: orderPaymentTipData, hidden: showOrderPopup })));
};
/* harmony default export */ const login_Order = (Order);

;// ./src/features/login/Logged.tsx











const Logged = (props) => {
  const headerData = useHeaderData();
  const { setMessageUrl } = headerData;
  external_React_namespaceObject.useEffect(() => {
    getMessageData();
  }, []);
  const getMessageData = () => {
    const url = `https://onetalk.alibaba.${getTopLevelDomain()}/message/manager/unread.htm?ctoken=${getCtoken()}&dmtrack_pageid=${window.dmtrack_pageid || ""}&params=${encodeURIComponent(
      JSON.stringify({
        secAccountId: localStorage.getItem("sc-header-message-account-id") || "",
        needList: true
      })
    )}`;
    fetch(url, {
      method: "GET",
      credentials: "include"
    }).then((response) => response.json()).then((data) => {
      if (data.code === "200") {
        const { secAccountId, listUrl } = data.data;
        localStorage.setItem("sc-header-message-account-id", secAccountId);
        listUrl && setMessageUrl((0,lib_namespaceFn().Q)(listUrl));
      }
    });
  };
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-loggedin" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    chunkComponent,
    {
      chunkName: "ImHeaderNotification",
      chunkProps: {},
      loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-message-comments" })
    }
  ), !headerData?.headerConfig?.disable?.includes("order") && /* @__PURE__ */ external_React_namespaceObject.createElement(login_Order, { ...props }), /* @__PURE__ */ external_React_namespaceObject.createElement(login_MA, { ...props, xman: props.xman }));
};
/* harmony default export */ const login_Logged = (Logged);

;// ./src/features/login/NotLogged.tsx











const { useState: NotLogged_useState } = external_React_namespaceObject;
const arrowStyle = {};
const NotLogged = (props) => {
  const [showLoginPopUp, setshowLoginPopUp] = NotLogged_useState(false);
  const headerData = useHeaderData();
  const { zIndex } = headerData;
  const debugMode = isHeaderDebugMode(headerData);
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-login", "data-tnhkey": "Login" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    reactjs_popup_esm,
    {
      on: debugMode ? "click" : "hover",
      offsetY: 20,
      position: "bottom center",
      contentStyle: {
        zIndex: zIndex + 1
      },
      arrowStyle,
      className: "functional login",
      onOpen: () => {
        setshowLoginPopUp(true);
      },
      onClose: () => {
        setshowLoginPopUp(false);
      },
      trigger: /* @__PURE__ */ external_React_namespaceObject.createElement(
        "div",
        {
          onClick: () => {
            setTimeout(() => {
              props.xman?.show();
              log("sign_in");
            }, 10);
          },
          className: "tnh-sign-in",
          "data-tnh-auto-exp": "sign_in",
          "data-tnh-auto-clk": "sign_in"
        },
        /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-customer" }),
        /* @__PURE__ */ external_React_namespaceObject.createElement("span", { className: "hide-item" }, getI18n("sctnh.header_signin_01", headerData))
      )
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement(MA_MANotLogged, { showLoginPopUp, xman: props.xman })
  ), /* @__PURE__ */ external_React_namespaceObject.createElement(
    ui_Button,
    {
      onClick: () => {
        log("sign_up");
        props.xman?.show("signUp");
      },
      className: "tnh-sign-up",
      "data-tnh-auto-exp": "sign_up",
      "data-tnh-auto-clk": "sign_up"
    },
    getI18n("sctnh.header_signin_17", headerData)
  ));
};
/* harmony default export */ const login_NotLogged = (NotLogged);

;// ./src/features/login/index.tsx








const { useEffect: login_useEffect, useState: login_useState, useRef: login_useRef } = external_React_namespaceObject;
const Login = (props) => {
  const { hasLoggedUser, haveLoggedInUser, orderPaymentTipData, reloadComponent, logoutReturnUrl } = props;
  const [logged, setLogged] = login_useState(hasLoggedUser);
  const [previouslyUser, setPreviouslyUser] = login_useState(haveLoggedInUser);
  const { headerConfig } = useHeaderData();
  const receiveMessage = (event) => {
    if (event?.data?.message === "SynchronousLoginState") {
      reloadComponent();
    }
  };
  login_useEffect(() => {
    window.addEventListener("message", receiveMessage);
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);
  const xmanRef = login_useRef({
    show: (active) => {
      if (!window.loadXman) {
        xmanRef.current.calledShow = true;
      }
      return loadXman(active).show();
    },
    hide: () => {
      if (window.loadXman) {
        return loadXman().hide();
      }
    },
    calledShow: false
  });
  login_useEffect(() => {
    loadjs_umd_default()("https://s.alicdn.com/@g/vip/havana-login/0.4.8/js/thirdpart-login-min.js");
    loadjs_umd_default()(
      "https://s.alicdn.com/@g/code/npm/@ali/icbu-xman-inlet/1.0.4/loadXman.umd.es5.production.js",
      () => {
        if (xmanRef.current.calledShow) {
          xmanRef.current.show();
        }
      }
    );
    const userLogged = hasLogged();
    setLogged(!!userLogged);
    const cookieUserInfo = getUserInfo();
    if (!userLogged && cookieUserInfo?.firstName) {
      setPreviouslyUser(true);
    } else {
      setPreviouslyUser(false);
    }
    if (needAutoLogin()) {
      autoLogin();
    }
  }, []);
  const loadXman = (active = "signIn") => {
    return window.loadXman({
      supplierIntel: true,
      scenes: "the-new-header",
      defaultActive: active,
      allSuccess: () => {
        typeof window !== "undefined" && window.location.reload();
      }
    });
  };
  const autoLogin = () => {
    fetch(`//login.alibaba.com/long_token_auto_login`, {
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    }).then((response) => response?.json()).then((result) => {
      const { data } = result || {};
      return data?.trust_login_url;
    }).then((url) => {
      if (!url) return;
      return fetch(url, {
        credentials: "include",
        headers: {
          Accept: "application/json"
        }
      });
    });
  };
  if (headerConfig?.disable?.includes("Login")) {
    return null;
  }
  if (logged === void 0) return /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null);
  if (logged) {
    return /* @__PURE__ */ external_React_namespaceObject.createElement(
      login_Logged,
      {
        logged,
        orderPaymentTipData,
        logoutReturnUrl
      }
    );
  } else {
    return previouslyUser ? /* @__PURE__ */ external_React_namespaceObject.createElement(
      login_Logged,
      {
        previouslyUser,
        orderPaymentTipData,
        xman: xmanRef.current,
        logoutReturnUrl
      }
    ) : /* @__PURE__ */ external_React_namespaceObject.createElement(login_NotLogged, { xman: xmanRef.current });
  }
};
/* harmony default export */ const login = (Login);

;// ./src/features/login/Cart/i18n.ts

const CartI18nKeys = {
  TitleWithAmount: "header_cart_titleWithAmount",
  TitleWithoutAmount: "header_cart_titleWithoutAmount",
  Empty: "header_cart_empty",
  GoToCart: "header_cart_goToCart",
  SkuInvalid: "header_cart_skuInvalid",
  ProductInvalid: "header_cart_productInvalid",
  NoSku: "header_cart_noSku",
  AddCartSuccess: "header_cart_addcartsuccess",
  SubtotalExclTax: "header_cart_subtotal_excl_tax",
  Savings: "header_cart_savings"
};

;// ./src/features/login/Cart/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/login/Cart/index.tsx














const { useState: Cart_useState, useEffect: Cart_useEffect } = external_React_namespaceObject;
let closeCartTimeout;
let closeAddCartTipTimeout;
const handleLogin = () => {
  const xman = window.loadXman?.({
    signInSuccess: () => {
    }
  });
  if (xman) {
    xman.show?.();
  } else {
    window.open("https://login.alibaba.com?tracelog=purchase_cart");
  }
};
const shouldHideCartOnCurrentPage = () => {
  if (typeof window === "undefined") return false;
  const pathname = window.location?.pathname || "";
  return window.location?.hostname?.includes("carp.alibaba") && pathname.replace(/\/+$/, "") !== "/shareList";
};
const getDomainSuffix = () => {
  const hostTemps = window.location.host.match(/(.*?).alibaba\.(.*?)$/);
  if (hostTemps && hostTemps.length >= 3) {
    return hostTemps[2];
  } else {
    return "com";
  }
};
const CartContent = ({ type }) => {
  const headerData = useHeaderData();
  const { zIndex, i18nData } = headerData;
  const [cartNum, setCartNum] = Cart_useState(0);
  const [cartShowNum, setCartShowNum] = Cart_useState(0);
  const [showPopup, setShowPopup] = Cart_useState(false);
  const [popupTiitle, setPopupTitle] = Cart_useState("normal");
  const [addCartQuantity, setAddCartQuantity] = Cart_useState(0);
  const [showAddCartTip, setShowAddCartTip] = Cart_useState(false);
  const getCartNumber = (0,external_React_namespaceObject.useCallback)(() => {
    const url = `//carp.alibaba.${getDomainSuffix()}/purchaseListStatistics.jsonp?_tb_token_=${getCookieByName(
      "_tb_token_"
    )}&needCheckedStatistics=true`;
    fetch_jsonp_default()(url, {
      timeout: 3e4
    }).then((response) => response.json()).then((data) => {
      const { code, response } = data || {};
      const {
        purchaseItemCount = 0,
        checkedPurchaseItemCount = 0,
        numberABResult,
        validPurchaseItemQuantity,
        checkedPurchaseItemQuantity,
        totalPurchaseItemQuantity
      } = response || {};
      if (code === "200") {
        setCartNum(purchaseItemCount || 0);
        if (numberABResult === "exp1") {
          setCartShowNum(validPurchaseItemQuantity);
        } else if (numberABResult === "exp2") {
          setCartShowNum(checkedPurchaseItemQuantity);
        } else if (numberABResult === "exp3") {
          setCartShowNum(totalPurchaseItemQuantity);
        } else {
          setCartShowNum(checkedPurchaseItemCount || purchaseItemCount || 0);
        }
      }
    });
  }, []);
  Cart_useEffect(() => {
    getCartNumber();
    try {
      window.addEventListener(
        "message",
        (event) => {
          const { data } = event || {};
          if (data && data.isOpenCartPopup) {
            getCartNumber();
            window.cartDataCache = null;
            let localStorageKey = "sc-header-cart-can-show-popup";
            const dataSpm = document?.body?.getAttribute("data-spm");
            if (dataSpm) {
              localStorageKey = `sc-header-cart-can-show-popup-${dataSpm}`;
            }
            const canShowPopup = localStorage.getItem(localStorageKey) !== "false";
            const isProductDetail = dataSpm === "details";
            const addCartQuantityValue = Number(data.addCartQuantity);
            const normalizedAddCartQuantity = Number.isFinite(addCartQuantityValue) && addCartQuantityValue > 0 ? Math.floor(addCartQuantityValue) : 0;
            const isShareListAddCart = data.source === "shareList" && normalizedAddCartQuantity > 0;
            if (data.code === "707" || data.code === "708") {
              handleLogin();
            } else if (isShareListAddCart) {
              if (closeAddCartTipTimeout) {
                clearTimeout(closeAddCartTipTimeout);
                closeAddCartTipTimeout = void 0;
              }
              setAddCartQuantity(normalizedAddCartQuantity);
              setShowAddCartTip(normalizedAddCartQuantity > 0);
              log("call-show-cart-tip");
              closeAddCartTipTimeout = setTimeout(() => {
                setShowAddCartTip(false);
                setAddCartQuantity(0);
              }, 3e3);
            } else if ((canShowPopup || isProductDetail) && (data.code === "200" || !data.code)) {
              localStorage.setItem(localStorageKey, "false");
              setShowPopup(true);
              setPopupTitle("addCartSuccess");
              log("call-show-cart");
              closeCartTimeout = setTimeout(
                () => {
                  setShowPopup(false);
                  setPopupTitle("normal");
                },
                isProductDetail ? 1e4 : 3e3
              );
            }
          }
        },
        false
      );
    } catch (error) {
      log("init-cart-error");
    }
  }, [getCartNumber]);
  const cartI18n = (0,external_React_namespaceObject.useMemo)(() => {
    const i18n = {};
    try {
      Object.keys(CartI18nKeys).forEach((key) => {
        const i18nKey = CartI18nKeys[key] || "";
        if (getI18n(i18nKey, headerData)) {
          i18n[key] = getI18n(i18nKey, headerData);
        }
      });
    } catch (error) {
      log("cart-i18n-error");
    }
    return { ...i18n, ...i18nData };
  }, [headerData, i18nData]);
  const successQuantityText = getI18n("header_cart_add_success_with_count", headerData)?.replace(
    "{0}",
    `${addCartQuantity}`
  );
  const goToCartText = getI18n("header_cart_add_success_go_to_cart", headerData);
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      className: "tnh-cart",
      "data-tnhkey": "cart",
      onMouseEnter: () => {
        log("hover-on-cart");
      }
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement(
      reactjs_popup_esm,
      {
        on: ["hover", "click"],
        open: showPopup,
        offsetY: 20,
        offsetX: type === "NotLogged" ? 0 : isRTL() ? -20 : 20,
        position: type === "NotLogged" ? "bottom center" : isRTL() ? "bottom left" : "bottom right",
        contentStyle: {
          zIndex: zIndex + 1
        },
        className: type === "NotLogged" ? "functional login cart-popup" : "functional login cart-popup cart-logged-popup",
        onOpen: () => {
          log("cart");
          setShowPopup(true);
        },
        onClose: () => {
          setShowPopup(false);
          setPopupTitle("normal");
        },
        trigger: /* @__PURE__ */ external_React_namespaceObject.createElement("div", { "data-tnh-auto-exp": "cart", "data-tnh-auto-clk": "cart" }, /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Badge, { count: cartShowNum }, /* @__PURE__ */ external_React_namespaceObject.createElement(
          "a",
          {
            "data-tnhkey": "cart",
            "data-tnh-auto-clk": "cart",
            target: "_blank",
            href: `https://carp.alibaba.${getDomainSuffix()}/purchaseList`,
            "aria-label": "cart",
            onClick: () => {
              log("go-to-cart");
            }
          },
          /* @__PURE__ */ external_React_namespaceObject.createElement(ui_Icon, { type: "icon-cart-empty" })
        )))
      },
      /* @__PURE__ */ external_React_namespaceObject.createElement(
        "div",
        {
          onMouseEnter: () => {
            if (closeCartTimeout) {
              clearTimeout(closeCartTimeout);
              closeCartTimeout = void 0;
            }
          }
        },
        /* @__PURE__ */ external_React_namespaceObject.createElement(
          chunkComponent,
          {
            chunkName: "HeaderShoppingCart",
            chunkProps: {
              i18n: cartI18n,
              cartNum,
              popupTiitle
            },
            loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null)
          }
        )
      )
    ),
    showAddCartTip && addCartQuantity > 0 ? /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-cart-add-success", style: { zIndex: zIndex + 1 } }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-cart-add-success-title" }, successQuantityText), /* @__PURE__ */ external_React_namespaceObject.createElement(
      "a",
      {
        className: "tnh-cart-add-success-btn",
        href: `https://carp.alibaba.${getDomainSuffix()}/purchaseList`,
        target: "_blank",
        onClick: () => {
          log("go-to-cart");
        }
      },
      goToCartText
    )) : null
  );
};
const Cart = ({ type }) => {
  if (shouldHideCartOnCurrentPage()) {
    return null;
  }
  return /* @__PURE__ */ external_React_namespaceObject.createElement(CartContent, { type });
};
/* harmony default export */ const login_Cart = (Cart);

;// ./src/features/login/Favorite/i18n.ts

const FavoriteI18nKeys = {
  Title: "header_favorite_title",
  Products: "header_favorite_products",
  ProductsWithCount: "header_favorite_products_with_count",
  Suppliers: "header_favorite_suppliers",
  SuppliersWithCount: "header_favorite_suppliers_with_count",
  ViewAll: "header_favorite_view_all",
  SignInTip: "header_favorite_signin_tip",
  SignIn: "header_favorite_signin",
  EmptyTitle: "header_favorite_empty_title",
  EmptyDesc: "header_favorite_empty_desc",
  EmptyProduct: "header_favorite_empty_product",
  EmptySupplier: "header_favorite_empty_supplier"
};

;// ./src/features/login/Favorite/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/login/Favorite/index.tsx












const getFavoriteDebugFlag = () => {
  if (typeof window === "undefined") return void 0;
  try {
    const debugFlag = localStorage.getItem("tnh-favorite-debug");
    if (debugFlag === "true") return true;
    if (debugFlag === "false") return false;
  } catch {
  }
  return void 0;
};
const useFavoriteEntryEnabled = (shouldRequest) => {
  const [debugFlag] = (0,external_React_namespaceObject.useState)(getFavoriteDebugFlag);
  const [remoteEnabled, setRemoteEnabled] = (0,external_React_namespaceObject.useState)(void 0);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (typeof debugFlag === "boolean" || !shouldRequest) return void 0;
    let cancelled = false;
    getFavoriteEntrance().then((show) => {
      if (!cancelled) setRemoteEnabled(show);
    }).catch(() => {
      if (!cancelled) setRemoteEnabled(false);
    });
    return () => {
      cancelled = true;
    };
  }, [debugFlag, shouldRequest]);
  return typeof debugFlag === "boolean" ? debugFlag : remoteEnabled;
};
const isFavoriteEntrySuppressed = () => {
  if (typeof window === "undefined") return true;
  return /-favorite\.alibaba\./.test(window.location.host);
};
const getFavoriteHomeUrl = () => {
  const host = typeof window !== "undefined" && window.location.host || "";
  const isCN = /\.cn$|chinese\.alibaba\./.test(host);
  return `https://${isCN ? "hz-favorite.alibaba.com" : "us-favorite.alibaba.com"}/favorite2/favorite_home.htm`;
};
const Favorite_handleLogin = () => {
  const xman = window.loadXman?.({
    signInSuccess: () => {
      window.location.href = getFavoriteHomeUrl();
    }
  });
  if (xman) {
    xman.show?.();
  } else {
    window.open("https://login.alibaba.com?tracelog=header_favorite");
  }
};
const FAVORITE_LOGKEY = "/sc.trade-assurance.trade-favorite";
const FAVORITE_PAGE_NAME = "header-favorite";
const getLoginId = () => {
  if (typeof document === "undefined") return "";
  const matched = document.cookie.match(/(?:^|;\s*)login_id=([^;]+)/);
  return matched ? decodeURIComponent(matched[1]) : "";
};
const serializeFavoriteParams = (params) => {
  return Object.keys(params).filter((key) => params[key] !== void 0 && params[key] !== null && params[key] !== "").map((key) => {
    const value = params[key];
    return typeof value === "object" ? `${key}=${JSON.stringify(value)}` : `${key}=${value}`;
  }).join("&");
};
const reportFavorite = (actionName, ext, type = "CLK") => {
  if (typeof window === "undefined" || !actionName) return;
  try {
    const goldlog = window.goldlog;
    if (!goldlog?.record) return;
    const common = {
      pageName: FAVORITE_PAGE_NAME,
      channel: "pc",
      loginId: getLoginId(),
      pageUrl: window.location.href
    };
    const extParams = serializeFavoriteParams({ ...common, ...ext });
    const gokey = extParams ? `actionName=${actionName}&${extParams}` : `actionName=${actionName}`;
    goldlog.record(FAVORITE_LOGKEY, type, gokey);
  } catch {
  }
};
const FavoriteContent = () => {
  const headerData = useHeaderData();
  const { zIndex, i18nData } = headerData;
  const isLogged = !!hasLogged();
  const favoriteI18n = (0,external_React_namespaceObject.useMemo)(() => {
    const i18n = {};
    try {
      Object.keys(FavoriteI18nKeys).forEach((key) => {
        const i18nKey = FavoriteI18nKeys[key] || "";
        const value = getI18n(i18nKey, headerData);
        if (value && value !== i18nKey) {
          i18n[key] = value;
        }
      });
    } catch (error) {
      log("favorite-i18n-error");
    }
    return { ...i18n, ...i18nData };
  }, [headerData, i18nData]);
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      className: "tnh-favorite",
      "data-tnhkey": "favorite",
      onMouseEnter: () => {
        log("hover-on-favorite");
        reportFavorite("header_favorite_icon_hover");
      }
    },
    /* @__PURE__ */ external_React_namespaceObject.createElement(
      reactjs_popup_esm,
      {
        on: ["hover", "click"],
        offsetY: 20,
        offsetX: 0,
        position: "bottom center",
        arrow: false,
        keepTooltipInside: true,
        contentStyle: { zIndex: zIndex + 1 },
        className: "functional login favorite-popup",
        onOpen: () => {
          log("favorite");
        },
        onClose: () => {
        },
        trigger: /* @__PURE__ */ external_React_namespaceObject.createElement("div", { "data-tnh-auto-exp": "favorite", "data-tnh-auto-clk": "favorite" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
          "a",
          {
            className: "tnh-favorite-icon",
            "data-tnhkey": "favorite",
            "data-tnh-auto-clk": "favorite",
            target: "_blank",
            href: isLogged ? getFavoriteHomeUrl() : void 0,
            "aria-label": "favorites",
            onClick: (e) => {
              log("go-to-favorite");
              reportFavorite("header_favorite_icon_click");
              if (!isLogged) {
                e.preventDefault();
                Favorite_handleLogin();
              }
            }
          },
          /* @__PURE__ */ external_React_namespaceObject.createElement(
            "svg",
            {
              className: "tnh-icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true"
            },
            /* @__PURE__ */ external_React_namespaceObject.createElement(
              "path",
              {
                d: "M480.304762 237.738667l7.582476 7.68c6.826667 6.826667 14.872381 14.677333 24.112762 23.576381l10.50819-10.191238c8.289524-8.045714 15.36-15.067429 21.211429-21.065143a220.891429 220.891429 0 0 1 317.074286 0c86.747429 88.600381 87.576381 231.765333 2.438095 321.365333L512 902.095238 160.768 559.128381c-85.113905-89.624381-84.309333-232.789333 2.438095-321.389714a220.891429 220.891429 0 0 1 317.074286 0z m335.043048 265.313523c52.882286-61.44 50.492952-155.599238-6.826667-214.137904a147.748571 147.748571 0 0 0-212.553143 0l-17.286095 17.261714a1928.289524 1928.289524 0 0 1-5.022476 4.924952L512 370.492952l-56.32-54.223238-15.11619-14.774857-12.53181-12.580571a147.748571 147.748571 0 0 0-212.577524 0c-58.806857 60.074667-59.782095 157.671619-2.511238 218.940952L512 799.865905l299.056762-292.035048 4.291048-4.778667z",
                fill: "currentColor"
              }
            )
          )
        ))
      },
      /* @__PURE__ */ external_React_namespaceObject.createElement(
        chunkComponent,
        {
          chunkName: "HeaderFavorite",
          chunkProps: {
            i18n: favoriteI18n,
            // 不传 login：组件自己的 cookie 判据（sign=y 且 ctoken 非空）与服务端 @Verify 对齐，
            // 比 header 的 hasLogged（仅判 sign=y）更严，能避开一次注定 402 的无效请求
            // 三角指向爱心 icon；给选择器即可，组件在弹层挂载时求值
            arrowAnchor: ".tnh-favorite-icon"
          },
          loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null),
          onRenderError: (error) => {
            reportFavorite("header_favorite_error", { type: "componentError", msg: error.message });
          }
        }
      )
    )
  );
};
const Favorite = () => {
  const suppressed = isFavoriteEntrySuppressed();
  const enabled = useFavoriteEntryEnabled(!suppressed);
  if (suppressed || !enabled) return null;
  return /* @__PURE__ */ external_React_namespaceObject.createElement(FavoriteContent, null);
};
/* harmony default export */ const login_Favorite = (Favorite);

;// ./src/features/login/useLoginType.ts



const useLoginType = (hasLoggedUser, haveLoggedInUser) => {
  const [logged, setLogged] = (0,external_React_namespaceObject.useState)(hasLoggedUser);
  const [previouslyUser, setPreviouslyUser] = (0,external_React_namespaceObject.useState)(haveLoggedInUser);
  (0,external_React_namespaceObject.useEffect)(() => {
    const userLogged = hasLogged();
    setLogged(!!userLogged);
    const cookieUserInfo = getUserInfo();
    setPreviouslyUser(!userLogged && !!cookieUserInfo?.firstName);
  }, []);
  if (logged === void 0) return void 0;
  return logged || previouslyUser ? "Logged" : "NotLogged";
};

;// ./src/features/ship-to/i18n.ts

const ShipToI18nKeys = {
  Title: "sctnh.header_signin_73",
  Desc: "sctnh.header_signin_74",
  SeeAll: "sctnh.header_signin_75",
  Add: "sctnh.header_signin_76",
  Save: "sctnh.header_signin_77",
  PopularCountry: "sctnh.header_signin_78",
  AllCountries: "sctnh.header_signin_79",
  ZipPlaceholder: "sctnh.header_signin_80",
  ShipToTitle: "sctnh.header_ship_01",
  SignInTips: "sctnh.header_signin_81"
};

;// ./src/features/ship-to/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/ship-to/index.tsx












const { useEffect: ship_to_useEffect, useState: ship_to_useState, useMemo: ship_to_useMemo } = external_React_namespaceObject;
const FETCH_DOMAIN = `ug.alibaba.${getTopLevelDomain()}`;
let hasShowTips = false;
const Shipto = () => {
  const headerData = useHeaderData();
  const { zIndex, headerConfig, i18nData, shipToConfig, shipReadData } = headerData;
  const [isSelectMenuOpen, setIsSelectMenuOpen] = ship_to_useState(false);
  const [defaultData, setDefaultData] = ship_to_useState({
    country: "",
    zipCode: ""
  });
  const [recommendedShipToAddress, setRecommendedShipToAddress] = ship_to_useState({
    countryName: "",
    countryCode: ""
  });
  const [showTips, setShowTips] = ship_to_useState(false);
  const [showTipType, setShowTipType] = ship_to_useState("ship-to-tips");
  const debugMode = isHeaderDebugMode(headerData);
  const handleShowTips = () => {
    fetch_jsonp_default()(`//${FETCH_DOMAIN}/api/ship/checkShipToBubbleFatigue`).then((res) => res.json()).then(({ data }) => {
      if (data) {
        if (window?.HeaderGuidePop?.visiblePopArray?.length === 0) {
          window.HeaderGuidePop.setVisible("ship-to-tips", true);
          setShowTips(true);
          setShowTipType("ship-to-tips");
        }
        const timer = setTimeout(() => {
          setShowTips(false);
          setShowTipType("");
          window.HeaderGuidePop && window.HeaderGuidePop.setVisible("ship-to-tips", false);
          clearTimeout(timer);
        }, 5e3);
      }
    });
  };
  const handleCheckShipTo = () => {
    if (!hasShowTips)
      fetch(
        `https://biz.alibaba.${getTopLevelDomain()}/lt-address/shipto/recommendShipTo?json=${encodeURIComponent(
          JSON.stringify({
            scene: "pc_header",
            exposureMethod: "BUBBLE"
          })
        )}`,
        { method: "GET", credentials: "include" }
      ).then((res) => res.json()).then(({ data }) => {
        if (data?.hasRecommend) {
          hasShowTips = true;
          window.HeaderGuidePop.setVisible("ship-to-recommend", true);
          setShowTips(true);
          setShowTipType("ship-to-recommend");
          setRecommendedShipToAddress(data?.recommendedShipToAddress);
          log("ship-to-recommend-open");
        }
      });
  };
  const handleCloseShipToTip = () => {
    setShowTips(false);
    window.HeaderGuidePop && window.HeaderGuidePop.setVisible(showTipType, false);
    setShowTipType("");
    if (showTipType === "ship-to-recommend") {
      fetch(
        `https://biz.alibaba.${getTopLevelDomain()}/lt-address/shipto/closeRecommendedShipTo?json=${encodeURIComponent(
          JSON.stringify({ scene: "pc_header" })
        )}`,
        { method: "GET", credentials: "include" }
      );
    }
  };
  const handleUpdateShipTo = () => {
    fetch_jsonp_default()(
      `//${FETCH_DOMAIN}/api/ship/write?localCountry=${recommendedShipToAddress?.countryCode}`
    ).then((res) => res.json()).then((res) => {
      if (res.data && res.code === 200) {
        location.reload();
      }
    });
  };
  ship_to_useEffect(() => {
    if (shipReadData) {
      const { currentlySelectedLocalCountry: country, currentlySelectedLocalZipCode } = shipReadData;
      setDefaultData({
        country,
        zipCode: currentlySelectedLocalZipCode
      });
      if (shipToConfig?.showWriteTips) {
        handleShowTips();
      }
      handleCheckShipTo();
    }
  }, [shipReadData]);
  const shipToI18n = ship_to_useMemo(() => {
    const i18n = {};
    Object.keys(ShipToI18nKeys).forEach((key) => {
      const i18nKey = ShipToI18nKeys[key] || "";
      i18n[key] = getI18n(i18nKey, headerData);
    });
    return { ...i18n, ...i18nData };
  }, [headerData]);
  if (headerConfig?.disable?.includes("Ship to")) {
    return null;
  }
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      className: "tnh-ship-to",
      "data-tnhkey": "Ship to",
      "data-tnh-auto-exp": "ship_to",
      "data-tnh-auto-clk": "ship_to"
    },
    showTips && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ship-to-tips" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ship-to-tips-container" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ship-to-tips-title-container" }, /* @__PURE__ */ external_React_namespaceObject.createElement("span", { className: "tnh-ship-to-tips-title" }, showTipType === "ship-to-tips" ? getI18n("sctnh.header_shipto_tips_title", headerData) : null, showTipType === "ship-to-recommend" ? getI18n("sctnh.header_shipto_recommend_title", headerData).replace(
      "{ipCountryName}",
      recommendedShipToAddress?.countryName
    ) : null), /* @__PURE__ */ external_React_namespaceObject.createElement(
      "img",
      {
        onClick: () => {
          log("ship-to-recommend-close");
          handleCloseShipToTip();
        },
        src: "https://s.alicdn.com/@img/i3/O1CN014aHEwY1gT5am7mzPk_!!6000000004142-55-tps-24-24.svg",
        alt: "",
        loading: "lazy"
      }
    )), /* @__PURE__ */ external_React_namespaceObject.createElement("span", { className: "tnh-ship-to-tips-desc" }, showTipType === "ship-to-tips" ? getI18n("sctnh.header_shipto_tips_desc", headerData) : null, showTipType === "ship-to-recommend" ? getI18n("sctnh.header_shipto_recommend_desc", headerData).replace("{ipCountryName}", recommendedShipToAddress?.countryName).replace(
      "{oldCountryName}",
      `${defaultData.zipCode && !shipToConfig?.hideZipCode ? `${defaultData.zipCode}, ` : ""}${defaultData.country}`
    ) : null), showTipType === "ship-to-recommend" && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-ship-to-tips-actions" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
      "div",
      {
        className: "tnh-ship-to-action primary",
        onClick: () => {
          log("ship-to-recommend-update");
          handleUpdateShipTo();
        }
      },
      getI18n("sctnh.header_shipto_recommend_update", headerData)
    ), /* @__PURE__ */ external_React_namespaceObject.createElement(
      "div",
      {
        className: "tnh-ship-to-action secondary",
        onClick: () => {
          log("ship-to-recommend-keep");
          handleCloseShipToTip();
        }
      },
      getI18n("sctnh.header_shipto_recommend_keep", headerData)
    )))),
    /* @__PURE__ */ external_React_namespaceObject.createElement(
      reactjs_popup_esm,
      {
        on: debugMode ? "click" : "hover",
        offsetY: 20,
        position: "bottom center",
        contentStyle: {
          zIndex: zIndex + 1
        },
        className: "functional tnh-ship-to",
        keepTooltipInside: true,
        onOpen: () => {
          log("ship_to");
          setShowTips(false);
          window.HeaderGuidePop && window.HeaderGuidePop.setVisible("ship-to-tips", false);
        },
        closeOnDocumentClick: false,
        mouseLeaveDelay: isSelectMenuOpen ? 2e3 : 100,
        trigger: defaultData.country ? /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-current-country" }, /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "deliver-span" }, getI18n("sctnh.header_shipto_deliverto", headerData)), defaultData.country && /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-country-flag" }, /* @__PURE__ */ external_React_namespaceObject.createElement(
          "img",
          {
            src: `https://s.alicdn.com/@icon/flag/assets/${defaultData.country.toLowerCase()}.png`,
            loading: "lazy",
            alt: "country flag"
          }
        ), /* @__PURE__ */ external_React_namespaceObject.createElement("span", null, ` ${defaultData.zipCode && !shipToConfig?.hideZipCode ? `${defaultData.zipCode}, ` : ""}${defaultData.country}`))) : /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null)
      },
      /* @__PURE__ */ external_React_namespaceObject.createElement(
        chunkComponent,
        {
          chunkName: "shipTo",
          chunkProps: {
            visible: true,
            i18n: shipToI18n,
            localData: shipReadData,
            onMenuStateChange: setIsSelectMenuOpen
          },
          loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null)
        }
      )
    )
  );
};
/* harmony default export */ const ship_to = (Shipto);

;// ./src/features/smart-assistant/index.less
// extracted by mini-css-extract-plugin

;// ./src/features/smart-assistant/index.tsx





const NoSelectedIcon = "https://s.alicdn.com/@img/imgextra/i1/O1CN01ZRwFsb1X6naaOvDIC_!!6000000002875-2-tps-144-144.png";
function SmartAssistant({ smartAssistantProps }) {
  const headerData = useHeaderData();
  const { assetsList } = headerData;
  (0,external_React_namespaceObject.useEffect)(() => {
    if (window.SA_Config) return;
    const { defer = [] } = assetsList;
    const smartAssistantIndex = defer.findIndex((item) => item.name === "smartAssistant");
    const smartAssistantJsUrl = defer[smartAssistantIndex]?.jsUrl;
    if (!smartAssistantProps?.show || !smartAssistantJsUrl) return;
    window.SA_Config = smartAssistantProps;
    loadJs(smartAssistantJsUrl);
  }, [assetsList?.defer, smartAssistantProps]);
  if (!smartAssistantProps?.show) return null;
  return /* @__PURE__ */ external_React_default().createElement(
    "div",
    {
      "data-role": "smart-assistant",
      id: "tnh-smart-assistant-entrance",
      className: "tnh-smart-assistant"
    },
    /* @__PURE__ */ external_React_default().createElement("img", { src: NoSelectedIcon, alt: "smart-assistant-no-selected", loading: "lazy" })
  );
}
/* harmony default export */ const smart_assistant = (SmartAssistant);

;// ./src/header/components/Functional/index.less
// extracted by mini-css-extract-plugin

;// ./src/header/components/Functional/index.tsx










const Functional = (props) => {
  const {
    hasLoggedUser,
    haveLoggedInUser,
    onLangChange,
    smartAssistantProps,
    orderPaymentTipData,
    reloadComponent,
    logoutReturnUrl
  } = props;
  const loginType = useLoginType(hasLoggedUser, haveLoggedInUser);
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "functional" }, /* @__PURE__ */ external_React_namespaceObject.createElement(ship_to, null), /* @__PURE__ */ external_React_namespaceObject.createElement(language, { onLangChange }), loginType && /* @__PURE__ */ external_React_namespaceObject.createElement(login_Cart, { type: loginType }), loginType && /* @__PURE__ */ external_React_namespaceObject.createElement(login_Favorite, null), /* @__PURE__ */ external_React_namespaceObject.createElement(
    login,
    {
      hasLoggedUser,
      logoutReturnUrl,
      haveLoggedInUser,
      orderPaymentTipData,
      reloadComponent
    }
  ), /* @__PURE__ */ external_React_namespaceObject.createElement(smart_assistant, { smartAssistantProps }));
};
/* harmony default export */ const components_Functional = (Functional);

;// ./src/shared/browser/versionContrast.ts

const UPDATE_LOGO_VERSION = "4.21.3";
const versionContrast = (version1, version2) => {
  const v1Parts = version1.split(".").map(Number);
  const v2Parts = version2.split(".").map(Number);
  const length = Math.max(v1Parts.length, v2Parts.length);
  for (let i = 0; i < length; i++) {
    const v1 = v1Parts[i] || 0;
    const v2 = v2Parts[i] || 0;
    if (v1 === v2) continue;
    return v1 > v2;
  }
  return true;
};

;// ./src/header/components/Logo/index.less
// extracted by mini-css-extract-plugin

;// ./src/header/components/Logo/index.tsx





const Logo = (props) => {
  const { mainLogoUrl, ssrVersion } = props;
  const ssrVersionUpdate = external_React_namespaceObject.useMemo(() => {
    return versionContrast(ssrVersion || "0.0.0", (/* inlined export .UPDATE_LOGO_VERSION */"4.21.3"));
  }, []);
  const classLogo = classnames_default()({
    "tnh-logo": true,
    "tnh-new-logo": ssrVersionUpdate
  });
  return /* @__PURE__ */ external_React_namespaceObject.createElement(
    "div",
    {
      onClick: () => {
        setTimeout(() => {
          typeof window !== "undefined" && (window.location.href = mainLogoUrl || "//www.alibaba.com");
        }, 10);
      },
      className: classLogo
    }
  );
};
/* harmony default export */ const components_Logo = (Logo);

;// ./src/header/components/SearchBar/index.tsx



const SearchBar = (props) => {
  const { displayNoneSearchBar, searchbarProps, setFullScreenSearchBar } = props;
  const chunkName = searchbarProps?.searchBarType === "SearchBarAi" ? "searchBarAi" : "searchBar";
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: `tnh-searchbar ${displayNoneSearchBar ? "tnh-hide" : ""}` }, /* @__PURE__ */ external_React_namespaceObject.createElement(
    chunkComponent,
    {
      chunkName,
      chunkProps: {
        ...searchbarProps,
        hide: displayNoneSearchBar,
        sceneInfo: {
          name: "the-new-header",
          ...searchbarProps?.sceneInfo || {}
        },
        onFullScreenChange: (type) => {
          setFullScreenSearchBar(type);
        }
      },
      loadCom: /* @__PURE__ */ external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null)
    }
  ));
};
/* harmony default export */ const components_SearchBar = (SearchBar);

;// ./node_modules/@ali/dataphant-core/es/utils/version-compare.js
var VersionIs = /* @__PURE__ */ (function(VersionIs2) {
  VersionIs2[VersionIs2["LessThan"] = -1] = "LessThan";
  VersionIs2[VersionIs2["EqualTo"] = 0] = "EqualTo";
  VersionIs2[VersionIs2["GreaterThan"] = 1] = "GreaterThan";
  return VersionIs2;
})({});
function versionCompare(current, other) {
  var cp = String(current).split(".");
  var op = String(other).split(".");
  for (var depth = 0; depth < Math.min(cp.length, op.length); depth++) {
    var cn = Number(cp[depth]);
    var on = Number(op[depth]);
    if (cn > on) return VersionIs.GreaterThan;
    if (on > cn) return VersionIs.LessThan;
    if (!isNaN(cn) && isNaN(on)) return VersionIs.GreaterThan;
    if (isNaN(cn) && !isNaN(on)) return VersionIs.LessThan;
  }
  return VersionIs.EqualTo;
}

// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(319);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
// EXTERNAL MODULE: ./node_modules/big-integer/BigInteger.js
var BigInteger = __webpack_require__(624);
var BigInteger_default = /*#__PURE__*/__webpack_require__.n(BigInteger);
// EXTERNAL MODULE: ./node_modules/murmurhash-js/index.js
var murmurhash_js = __webpack_require__(19);
;// ./node_modules/@ali/dataphant-core/es/controller/Hasher.js



var PART_NUM = 1e3;
function MD5(str) {
  var hex = md5_default()(str);
  var bigint = BigInteger_default()(hex, 16);
  return bigint.abs().mod(PART_NUM);
}
function murmurhash3(str, seed) {
  var hash = (0,murmurhash_js.murmur3)(str, seed);
  return BigInteger_default()(hash).abs().mod(PART_NUM);
}
function hashCode(str) {
  str = "" + str;
  var hash = 0, i;
  for (i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i) & 4294967295;
  }
  return BigInteger_default()(hash).abs().mod(PART_NUM);
}

;// ./node_modules/@ali/dataphant-core/es/config/index.js
/* harmony default export */ const es_config = ({
  cdnPath: "https://s.alicdn.com/@xconfig/dataphant",
  // 实验配置信息cdn地址
  mockPath: "https://rap2api.alibaba-inc.com/app/mock/5661/exp/config/test.json",
  //rap2 mock地址
  algorithm: "MD5",
  //分流算法: MD5/murmurhash3/hashCode; 参考 /controller/Hasher.ts
  controlGroupName: ""
  // 默认流量分组名称，此处不再设置默认名
});

;// ./node_modules/@ali/dataphant-core/es/controller/Allocator.js
function Allocator_extends() {
  Allocator_extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return Allocator_extends.apply(this, arguments);
}
;


function getSegment(expConfig, userInfo) {
  var segments = expConfig.segments;
  var DiversionCondition = userInfo.DiversionCondition, diversionKey = userInfo.diversionKey;
  var filters = Allocator_extends({}, DiversionCondition, {
    whitelist: diversionKey
  });
  return segments.find(function(seg) {
    return seg.filterConditions.every(function(v) {
      var fieldName = v.fieldName, type = v.type, fieldValues = v.fieldValues;
      if (!filters.hasOwnProperty(fieldName)) return false;
      var current = filters[fieldName];
      switch (type) {
        case "$in":
          return fieldValues.includes(current);
        case "$re":
          return new RegExp("^" + fieldValues[0]).test(current);
        case "$eq":
          return current === fieldValues[0];
        case "$gt":
          return versionCompare(current, fieldValues[0]) > 0;
        case "$gte":
          return versionCompare(current, fieldValues[0]) >= 0;
        case "$lt":
          return versionCompare(current, fieldValues[0]) < 0;
        case "$lte":
          return versionCompare(current, fieldValues[0]) <= 0;
        case "$nin":
          return !fieldValues.includes(current);
        case "$neq":
          return current !== fieldValues[0];
      }
      return false;
    });
  });
}
function getRemainder(expConfig, userInfo) {
  var hashId = expConfig.hashId;
  var diversionKey = userInfo.diversionKey;
  var hashKey = getHashKey(diversionKey, hashId);
  return Hasher_namespaceObject[es_config.algorithm](hashKey);
}
function getGatingKeyRemainder(gatingKey, userInfo) {
  var hashId = gatingKey.hashId, id = gatingKey.id;
  var diversionKey = userInfo.diversionKey;
  var hashKey = getHashKey(diversionKey, hashId || id);
  return Hasher_namespaceObject[es_config.algorithm](hashKey);
}
function getBucket(groups, remainder) {
  return groups.find(function(item) {
    var ratioRanges = item.ratioRanges, ratioRangesWithVersion = item.ratioRangesWithVersion;
    if (ratioRangesWithVersion) {
      return ratioRangesWithVersion.some(function(v) {
        return remainder >= v.low && remainder <= v.high;
      });
    }
    return ratioRanges.some(function(v) {
      var min = Math.min.apply(null, v);
      var max = Math.max.apply(null, v);
      return remainder >= min && remainder <= max;
    });
  });
}
function getRange(ranges, remainder) {
  return ranges.find(function(item) {
    return remainder >= item.low && remainder <= item.high;
  });
}
function getHashKey(key, salt) {
  return key + "_" + salt;
}

;// ./node_modules/@ali/dataphant-core/es/index.js
function es_extends() {
  es_extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return es_extends.apply(this, arguments);
}
;

var bucketInfoDefault = {
  segmentID: null,
  remainder: null,
  treatment: es_config.controlGroupName,
  // 默认control分桶名称,
  treatmentID: null,
  variantId: null,
  params: {},
  message: ""
};
function Allocate(appExpConfig, userInfo, testKey) {
  var experiments = appExpConfig.experiments, _appExpConfig$traffic = appExpConfig.trafficSourceExperiments, trafficSourceExperiments = _appExpConfig$traffic === void 0 ? [] : _appExpConfig$traffic, whiteList = appExpConfig.whiteList, launchConfig = appExpConfig.launchConfig;
  var expConfig = experiments.find(function(v) {
    return v.testKey === testKey;
  });
  if (!expConfig) {
    return getNoExperimentDiverResult(testKey, launchConfig);
  }
  return AllocateUnit({
    expConfig,
    trafficSourceExperiments,
    whiteList,
    launchConfig,
    userInfo
  });
}
function getNoExperimentDiverResult(testKey, launchConfig) {
  var _launchExperiment$lau;
  var result = es_extends({}, bucketInfoDefault);
  var _launchConfig$launchE = launchConfig.launchExperiments, launchExperiments = _launchConfig$launchE === void 0 ? {} : _launchConfig$launchE, _launchConfig$launchP = launchConfig.launchParams, launchParams = _launchConfig$launchP === void 0 ? [] : _launchConfig$launchP;
  var launchExperiment = launchExperiments[testKey];
  if (!launchExperiment) {
    result.message = "Experiment: " + this.testKey + " not found. Please confirm the experiment is launched.";
    return result;
  }
  result.treatment = (_launchExperiment$lau = launchExperiment.launchGroupName) != null ? _launchExperiment$lau : "";
  var launchParam = launchParams.find(function(v) {
    return v.gatingKeyId === launchExperiment.gatingKeyId;
  });
  if (launchParam) {
    result.params = launchParam.params || {};
  }
  result.message = "experiment: " + testKey + " has been full pushed";
  return result;
}
function getExpConfigURL(_ref) {
  var appName = _ref.appName;
  return appName ? es_config.cdnPath + "/" + appName : "";
}
function getWhiteListURL(_ref2) {
  var appName = _ref2.appName;
  return appName ? es_config.cdnPath + "/whitelist/" + appName : "";
}
function getLaunchConfigURL(_ref3) {
  var appName = _ref3.appName;
  return appName ? es_config.cdnPath + "/launch/" + appName : "";
}
function AllocateUnit(_ref4) {
  var expConfig = _ref4.expConfig, trafficSourceExperiments = _ref4.trafficSourceExperiments, whiteList = _ref4.whiteList, launchConfig = _ref4.launchConfig, userInfo = _ref4.userInfo, _ref4$loopCount = _ref4.loopCount, loopCount = _ref4$loopCount === void 0 ? 0 : _ref4$loopCount;
  var result = es_extends({}, bucketInfoDefault);
  if (loopCount > 10) {
    result.message = "experiment config invalid, there is a loop call";
    return result;
  }
  var diversionKey = userInfo.diversionKey;
  var gatingKey = expConfig.gatingKey, _expConfig$variants = expConfig.variants, variants = _expConfig$variants === void 0 ? [] : _expConfig$variants;
  if (whiteList) {
    var _whiteList$gatingKeyW = whiteList.gatingKeyWhitelist, gatingKeyWhitelist = _whiteList$gatingKeyW === void 0 ? {} : _whiteList$gatingKeyW;
    var _ref5 = gatingKeyWhitelist[gatingKey.id] || {}, members = _ref5.members;
    if (members) {
      var variantId = members[diversionKey];
      if (variantId) {
        var variant = variants.find(function(v) {
          return v.id === variantId;
        });
        if (variant && variant.name) {
          result.treatment = variant.name;
          result.variantId = variant.id;
          result.params = variant.params || {};
          result.message = "current user hit whiteList config";
          return result;
        } else {
          result.message = "hit exclusive experiment whitelist";
          return result;
        }
      }
    }
  }
  var trafficSourceExpTestKey = gatingKey.trafficSourceExpTestKey, trafficSourceVariantId = gatingKey.trafficSourceVariantId;
  if (trafficSourceExpTestKey) {
    var parentExpConfig = trafficSourceExperiments.find(function(v) {
      return v.testKey === trafficSourceExpTestKey;
    });
    if (!parentExpConfig) {
      result.message = "can not found parent experiment:" + trafficSourceExpTestKey + " config";
      return result;
    }
    var _AllocateUnit = AllocateUnit({
      expConfig: parentExpConfig,
      trafficSourceExperiments,
      userInfo,
      whiteList,
      launchConfig,
      loopCount: loopCount++
    }), _variantId = _AllocateUnit.variantId, segmentID = _AllocateUnit.segmentID;
    if (trafficSourceVariantId !== _variantId) {
      if (!segmentID) {
        result.message = "can not hit parent experiment:" + trafficSourceExpTestKey + " segment";
        return result;
      }
      result.message = "can not hit parent experiment:" + trafficSourceExpTestKey + " variant";
      return result;
    }
  }
  if (gatingKey) {
    var gatingKeyRemainder = getGatingKeyRemainder(gatingKey, userInfo);
    var ratioRanges = gatingKey.ratioRanges;
    var inRanges = ratioRanges.some(function(v) {
      var min = Math.min.apply(null, v);
      var max = Math.max.apply(null, v);
      return gatingKeyRemainder >= min && gatingKeyRemainder <= max;
    });
    if (!inRanges) {
      result.message = "can not hit experiment gatingKey";
      return result;
    }
  }
  var segment = getSegment(expConfig, userInfo);
  if (segment) {
    var id = segment.id, groups = segment.groups;
    result.segmentID = id;
    var remainder = parseInt(getRemainder(expConfig, userInfo));
    result.remainder = remainder;
    var group = getBucket(groups, remainder);
    if (group && group.name) {
      result.treatment = group.name;
      result.treatmentID = group.id;
      var ranges = group.ratioRangesWithVersion;
      if (ranges) {
        result.rangeInfo = getRange(ranges, remainder);
      }
      var _variant = variants.find(function(v) {
        return v.name === group.name;
      });
      if (_variant) {
        result.variantId = _variant.id;
        result.params = _variant.params || {};
      }
      result.message = "experiment group allocate succeed";
      return result;
    }
    result.message = "can not hit experiment group";
    return result;
  }
  result.message = "can not hit experiment segment";
  return result;
}

;// ./node_modules/@ali/dataphant-universal/es/utils/querystring.js
function querystring_stringify(json) {
  if (json === void 0) {
    json = {};
  }
  return Object.keys(json).map(function(key) {
    return key + "=" + json[key];
  }).join("&");
}
function querystring_parse(str, decode) {
  if (str === void 0) {
    str = "";
  }
  if (decode === void 0) {
    decode = false;
  }
  var params = {};
  str.replace(/([^?&]+)=([^?&]+)/g, function(s, k, v) {
    if (decode) {
      params[decodeURIComponent(k)] = decodeURIComponent(v);
    } else {
      params[k] = v;
    }
    return v + "=" + k;
  });
  return params;
}

;// ./node_modules/@ali/dataphant-universal/es/config/index.js
var EXP_CACHE = {
  expire: 3e5,
  // 5分钟
  storagePrefix: "dp_abtest_config_"
  // 本地缓存前缀
};
var EXP_LOG = {
  key: "/sc.dataphant.abtest.track",
  //黄金令箭串
  action: {
    sdkInvoked: "exp_invoked",
    resultSucceed: "exp_treatment",
    resultFailed: "exp_failed"
  }
};
var EXP_RESULT = {
  globalKey: "__DP_ABTEST__",
  // 存储在window对象上的key
  aplusKey: "dp_abtest_params"
  // 注入到aplus脚本统一打点的key
};

;// ./node_modules/@ali/dataphant-universal/es/utils/goldlog.js


function goldlog(action, params) {
  if (action === void 0) {
    action = "";
  }
  if (params === void 0) {
    params = null;
  }
  if (action) {
    var _goldlog$record, _window, _window$goldlog;
    if (params) {
      action += "&" + querystring_stringify(params);
    }
    var ext = "ext=" + encodeURIComponent(action);
    var record = (_goldlog$record = (_window = window) == null ? void 0 : (_window$goldlog = _window.goldlog) == null ? void 0 : _window$goldlog.record) != null ? _goldlog$record : null;
    if (record) {
      record(EXP_LOG.key, "EXP", ext, "GET");
    } else {
      var queue = window["goldlog_queue"] || (window["goldlog_queue"] = []);
      queue.push({
        action: "goldlog.record",
        arguments: [EXP_LOG.key, "CLK", ext, "GET"]
      });
    }
  }
}

;// ./node_modules/@ali/dataphant-universal/es/utils/index.js

/* harmony default export */ const utils = ({
  /**
   * 当前是否为debug状态
   */
  isDebug: function isDebug() {
    var _window$location$sear, _window, _window$location;
    return !!querystring_parse((_window$location$sear = (_window = window) == null ? void 0 : (_window$location = _window.location) == null ? void 0 : _window$location.search) != null ? _window$location$sear : "", true).debug;
  }
});

;// ./node_modules/@ali/dataphant-universal/es/plugins/Storage.js
/* harmony default export */ const Storage = ({
  getItem: function getItem(key) {
    return localStorage.getItem(key);
  },
  setItem: function setItem(key, val) {
    return localStorage.setItem(key, val);
  }
});

// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-browserify.js
var fetch_npm_browserify = __webpack_require__(488);
var fetch_npm_browserify_default = /*#__PURE__*/__webpack_require__.n(fetch_npm_browserify);
;// ./node_modules/@ali/dataphant-universal/es/plugins/Request.js

function Request(url, params) {
  if (params === void 0) {
    params = {};
  }
  return fetch_npm_browserify_default()(url, params);
}

;// ./node_modules/@ali/dataphant-universal/es/plugins/Aplus.js
function Aplus_extends() {
  Aplus_extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return Aplus_extends.apply(this, arguments);
}
function getAplusCna(country) {
  if (country === void 0) {
    country = "US";
  }
  var regionUrl = {
    "CN": "https://log.mmstat.com/eg.js",
    "US": "https://gj.mmstat.com/eg.js",
    "RU": "https://ru.mmstat.com/eg.js",
    "SG": "https://sg.mmstat.com/eg.js"
  };
  country = country || "US";
  return new Promise(function(resolve) {
    var cna = "";
    var src = regionUrl[country] + "?t=" + +/* @__PURE__ */ new Date();
    createScript(src, {
      onload: function onload() {
        var _window$goldlog$Etag, _window$goldlog;
        cna = (_window$goldlog$Etag = (_window$goldlog = window["goldlog"]) == null ? void 0 : _window$goldlog.Etag) != null ? _window$goldlog$Etag : "";
        resolve(cna);
      },
      error: function error() {
        resolve(cna);
      }
    });
  });
}
function getCna() {
  return new Promise(function(resolve) {
    var queue = window["goldlog_queue"] || (window["goldlog_queue"] = []);
    queue.push({
      action: "goldlog.aplus_pubsub.subscribe",
      arguments: ["CNA", function(_ref) {
        var value = _ref.value;
        resolve(value || "");
      }]
    });
  });
}
function injectIntoGoldlog(exdata) {
  var queue = window["goldlog_queue"] || (window["goldlog_queue"] = []);
  queue.push({
    action: "goldlog.appendMetaInfo",
    arguments: ["aplus-exdata", Aplus_extends({}, exdata)]
  });
}
function createScript(src, _ref2) {
  var onload = _ref2.onload, error = _ref2.error;
  var body = document.body || document.getElementsByTagName("body")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.async = true;
  script.onload = onload;
  script.onerror = error;
  body && body.appendChild(script);
}

;// ./node_modules/cookie/index.js
cookie_namespaceFn();

// EXTERNAL MODULE: ./node_modules/@ali/lib-mtop/build/mtop.common.js
var mtop_common = __webpack_require__(256);
;// ./node_modules/@ali/dataphant-universal/es/plugins/UserInfo.js



function getFromCookie() {
  var loginId = "";
  var accountId = "";
  var aliId = "";
  var language = "";
  var country = "";
  var locale = "";
  var localCookie = document.cookie;
  var _cookie = (cookie_namespaceFn().q)(localCookie);
  var cna = _cookie.cna, sc_g_cfg_f = _cookie.sc_g_cfg_f, intl_locale = _cookie.intl_locale, xman_us_f = _cookie.xman_us_f, xman_us_t = _cookie.xman_us_t, xman_i = _cookie.xman_i, ali_apache_track = _cookie.ali_apache_track;
  if (ali_apache_track) {
    var _querystring$parse = querystring_parse(ali_apache_track.replace(/\|/g, "&")), _querystring$parse$mi = _querystring$parse.mid, mid = _querystring$parse$mi === void 0 ? "" : _querystring$parse$mi;
    loginId = mid;
  } else if (xman_us_t) {
    var _querystring$parse2 = querystring_parse(xman_us_t), _querystring$parse2$x = _querystring$parse2.x_lid, x_lid = _querystring$parse2$x === void 0 ? "" : _querystring$parse2$x;
    loginId = x_lid;
  }
  if (xman_i) {
    var _querystring$parse3 = querystring_parse(xman_i), _querystring$parse3$a = _querystring$parse3.aid, aid = _querystring$parse3$a === void 0 ? "" : _querystring$parse3$a;
    aliId = aid;
  }
  if (sc_g_cfg_f) {
    var _querystring$parse4 = querystring_parse(sc_g_cfg_f), _querystring$parse4$s = _querystring$parse4.sc_b_locale, sc_b_locale = _querystring$parse4$s === void 0 ? "" : _querystring$parse4$s;
    locale = sc_b_locale;
  } else if (intl_locale) {
    locale = intl_locale;
  }
  if (xman_us_f) {
    var _querystring$parse5 = querystring_parse(xman_us_f), _querystring$parse5$x = _querystring$parse5.x_user, x_user = _querystring$parse5$x === void 0 ? "" : _querystring$parse5$x, _querystring$parse5$x2 = _querystring$parse5.x_locale, x_locale = _querystring$parse5$x2 === void 0 ? "" : _querystring$parse5$x2;
    if (x_user) {
      var userItems = x_user.split("|");
      accountId = userItems[userItems.length - 1] || "";
      country = userItems[0] || "";
    }
    if (!locale) {
      locale = x_locale;
    }
  }
  if (locale) {
    var localeItems = locale.split("_");
    language = localeItems[0] || "";
    if (/^zh/.test(locale)) {
      language = "zh-Hans";
      if (/(hk|tw)$/gi.test(locale)) {
        language = "zh-Hant";
      }
    }
    if (/^iw/.test(locale)) {
      language = "he";
    }
  }
  return {
    cna,
    // cna字段，浏览器端唯一标识
    loginId,
    accountId,
    aliId,
    language,
    // 语种
    country,
    // 国家
    platform: "web",
    // 端型
    channel: "",
    // 渠道
    version: ""
    // 应用版本，web侧无需传递
  };
}
function getAliId(aliId) {
  return new Promise(function(resolve) {
    if (!aliId) return resolve(aliId);
    return mtop_common.request({
      api: "mtop.alibaba.uicservice.queryIdMsg",
      v: "1.0",
      appKey: "24889839",
      // h5端
      data: {
        hid: aliId
      },
      dataType: "json"
    }).then(function(res) {
      var _ref = res.data || {}, aliMemberHid = _ref.aliMemberHid;
      resolve(aliMemberHid || aliId);
    }, function() {
      resolve(aliId);
    });
  });
}

;// ./node_modules/@ali/dataphant-universal/es/config/resultCode.js
/* harmony default export */ const resultCode = ({
  // 接口执行成功
  SUCCESS: {
    code: 0,
    message: "success"
  },
  // 接口参数不合法
  ILLEGAL_ARGUMENT: {
    code: 1,
    message: "illegal argument"
  },
  // 实验配置的JSON数据格式不满足实验的定义要求
  JSON_FORMAT_NOT_MEET_REQUIREMENTS: {
    code: 2,
    message: "json format does not meet the requirements"
  },
  // client执行过程中发生一些系统级的异常
  XS_SDK_ERROR: {
    code: 3,
    message: "xs client internal error"
  }
});

;// ./node_modules/@ali/dataphant-universal/es/plugins/ValidationError.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  ValidationError_setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, ValidationError_getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return ValidationError_setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct() {
  if (ValidationError_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) ValidationError_setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function ValidationError_isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function ValidationError_setPrototypeOf(o, p) {
  ValidationError_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return ValidationError_setPrototypeOf(o, p);
}
function ValidationError_getPrototypeOf(o) {
  ValidationError_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return ValidationError_getPrototypeOf(o);
}
;
var ValidateError = /* @__PURE__ */ (function(_Error) {
  _inheritsLoose(ValidateError2, _Error);
  function ValidateError2(message, code) {
    var _this = _Error.call(this, message) || this;
    _this.code = void 0;
    _this.code = code || resultCode.ILLEGAL_ARGUMENT.code;
    return _this;
  }
  return ValidateError2;
})(/* @__PURE__ */ _wrapNativeSuper(Error));


// EXTERNAL MODULE: ./node_modules/@ali/wpk-reporter/dist/wpkReporter.js
var wpkReporter = __webpack_require__(92);
var wpkReporter_default = /*#__PURE__*/__webpack_require__.n(wpkReporter);
;// ./node_modules/@ali/dataphant-universal/package.json
const dataphant_universal_package_namespaceObject = {"rE":"4.0.1"};
;// ./node_modules/@ali/dataphant-universal/es/plugins/Reporter.js



var __wpk;
/* harmony default export */ const Reporter = ({
  /**
   * 初始化sdk
   */
  install: function install() {
    var cookieInfo = getFromCookie();
    var cna = cookieInfo.cna;
    __wpk = new (wpkReporter_default())({
      bid: "dataphant-js-sdk",
      // 新建应用时确定
      uid: cna,
      rel: dataphant_universal_package_namespaceObject.rE,
      plugins: []
    });
    __wpk.install();
  },
  /**
   * 日志上报
   * @param data 
   * @param instance 
   */
  report: function report(data) {
    var cookieInfo = getFromCookie();
    var loginId = cookieInfo.loginId, aliId = cookieInfo.aliId, cna = cookieInfo.cna;
    var _ref = data, category = _ref.category, msg = _ref.msg, w_succ = _ref.w_succ, resInfo = _ref.resInfo, userInfo = _ref.userInfo;
    var _ref2 = resInfo, appName = _ref2.appName, testKey = _ref2.testKey, expVer = _ref2.expVer, segmentID = _ref2.segmentID, bucketName = _ref2.bucketName, sdkVer = _ref2.sdkVer;
    var params = {
      category: category || 100,
      // 系统自动生成，请勿修改
      msg,
      // 将根据msg字段聚合展示在平台的top上报内容中
      w_succ,
      // 可选，用于计算率的标识,可选为1和0
      c1: testKey,
      // 自定义字段c1 对应 实验名称
      c2: sdkVer,
      // 自定义字段c2 对应 SDK版本
      c3: loginId,
      // 自定义字段c3 对应 loginId
      c4: aliId,
      // 自定义字段c4 对应 aliId
      c5: cna,
      // 自定义字段c5 对应 cookie_id
      c6: appName,
      // 自定义字段c6 对应 应用名称
      c7: expVer,
      // 自定义字段c7 对应 迭代版本
      c8: segmentID,
      // 自定义字段c8 对应 Segment_ID
      c9: bucketName,
      // 自定义字段c9 对应 实验分桶名称
      bl1: JSON.stringify(resInfo),
      // 自定义长文本bl1 对应 详细分流结果
      bl2: JSON.stringify(userInfo),
      // 自定义长文本bl1 对应 实验分流用户信息
      bl3: JSON.stringify(cookieInfo)
      // 自定义长文本bl1 对应 用户cookie信息
    };
    __wpk && __wpk.report(params);
  }
});

;// ./node_modules/@ali/dataphant-universal/es/config/constants.js
var KEY_TYPE = /* @__PURE__ */ (function(KEY_TYPE2) {
  KEY_TYPE2["BUYER_ID"] = "buyerId";
  KEY_TYPE2["SELLER_ID"] = "sellerId";
  KEY_TYPE2["BUYER_ALI_ID"] = "buyerAliId";
  KEY_TYPE2["SELLER_ALI_ID"] = "sellerAliId";
  KEY_TYPE2["DEVICE_ID"] = "deviceId";
  KEY_TYPE2["COOKIE_ID"] = "cookieId";
  KEY_TYPE2["SALE_ID"] = "saleId";
  KEY_TYPE2["REQUEST_ID"] = "requestId";
  KEY_TYPE2["USER_ID"] = "userId";
  return KEY_TYPE2;
})({});
var SAMPLE_TYPE = /* @__PURE__ */ (function(SAMPLE_TYPE2) {
  SAMPLE_TYPE2["ACCOUNT_ID"] = "accountId";
  SAMPLE_TYPE2["ALI_ID"] = "aliId";
  SAMPLE_TYPE2["DEVICE_ID"] = "deviceId";
  SAMPLE_TYPE2["COOKIE_ID"] = "cookieId";
  SAMPLE_TYPE2["REQUEST_ID"] = "eachRequest";
  return SAMPLE_TYPE2;
})({});
var EXP_STATUS = /* @__PURE__ */ (/* unused pure expression or super */ null && ((function(EXP_STATUS2) {
  EXP_STATUS2["EDITING"] = "\u7F16\u8F91\u4E2D";
  EXP_STATUS2["AUDITING"] = "\u5BA1\u6838\u4E2D";
  EXP_STATUS2["RUNNING"] = "\u8FD0\u884C\u4E2D";
  EXP_STATUS2["OFFLINE"] = "\u5DF2\u4E0B\u7EBF";
  return EXP_STATUS2;
})({})));
var CLIENT_TYPE = (/* unused pure expression or super */ null && (["web", "ios", "android", "windows"]));
var LANGUAGE_VALUES = (/* unused pure expression or super */ null && (["en", "zh-Hans", "zh-Hant", "es", "ru", "tr", "pt", "it", "fr", "de", "nl", "th", "ja", "vi", "ko", "id", "ar", "he", "hi"]));
var COUNTRY_VALUES = (/* unused pure expression or super */ null && (["US", "CN", "GB", "IN", "TR", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CK", "CR", "CI", "HR", "CW", "CY", "CZ", "CD", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "KR", "MD", "MK", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "PS", "SR", "SJ", "SZ", "SE", "CH", "TW", "TJ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "TZ", "UM", "US", "VI", "UY", "UZ", "VU", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]));

;// ./node_modules/@ali/dataphant-universal/es/index.js
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return exports;
  };
  var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
    obj[key] = desc.value;
  }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define2(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
          invoke("next", value2, resolve, reject);
        }, function(err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", { value: function value(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function(method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return { value: record.arg, done: context.done };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (void 0 === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next2() {
          for (; ++i < iterable.length; ) if (hasOwn.call(iterable, i)) return next2.value = iterable[i], next2.done = false, next2;
          return next2.value = void 0, next2.done = true, next2;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  function doneResult() {
    return { value: void 0, done: true };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function(genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function(arg) {
    return { __await: arg };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
    return this;
  }), define(Gp, "toString", function() {
    return "[object Generator]";
  }), exports.keys = function(val) {
    var object = Object(val), keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length; ) {
        var key2 = keys.pop();
        if (key2 in object) return next.value = key2, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
  }, stop: function stop() {
    this.done = true;
    var rootRecord = this.tryEntries[0].completion;
    if ("throw" === rootRecord.type) throw rootRecord.arg;
    return this.rval;
  }, dispatchException: function dispatchException(exception) {
    if (this.done) throw exception;
    var context = this;
    function handle(loc, caught) {
      return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
    }
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i], record = entry.completion;
      if ("root" === entry.tryLoc) return handle("end");
      if (entry.tryLoc <= this.prev) {
        var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
        if (hasCatch && hasFinally) {
          if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
          if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
        } else if (hasCatch) {
          if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
        } else {
          if (!hasFinally) throw new Error("try statement without catch or finally");
          if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
        }
      }
    }
  }, abrupt: function abrupt(type, arg) {
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];
      if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
        var finallyEntry = entry;
        break;
      }
    }
    finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
    var record = finallyEntry ? finallyEntry.completion : {};
    return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
  }, complete: function complete(record, afterLoc) {
    if ("throw" === record.type) throw record.arg;
    return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
  }, finish: function finish(finallyLoc) {
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];
      if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
    }
  }, catch: function _catch(tryLoc) {
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];
      if (entry.tryLoc === tryLoc) {
        var record = entry.completion;
        if ("throw" === record.type) {
          var thrown = record.arg;
          resetTryEntry(entry);
        }
        return thrown;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function delegateYield(iterable, resultName, nextLoc) {
    return this.delegate = { iterator: values(iterable), resultName, nextLoc }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
  } }, exports;
}
function dataphant_universal_es_extends() {
  dataphant_universal_es_extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return dataphant_universal_es_extends.apply(this, arguments);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
;













var ABTest = /* @__PURE__ */ (function() {
  function ABTest2(params) {
    this.appName = void 0;
    this.testKey = void 0;
    this.diversionKey = void 0;
    this.DiversionCondition = void 0;
    this.appExpConfig = void 0;
    this.expConfig = void 0;
    this.userInfo = void 0;
    this.expResult = void 0;
    this.Storage = void 0;
    this.Request = void 0;
    this.appName = params.appName;
    this.testKey = params.testKey;
    this.diversionKey = params.diversion || "";
    this.DiversionCondition = params.filters || {};
    this.Storage = Storage;
    this.Request = Request;
    Reporter.install();
  }
  var _proto = ABTest2.prototype;
  _proto.getTreatment = /* @__PURE__ */ (function() {
    var _getTreatment = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
      var expResult, allocateInfo, taskInfo, _allocateInfo, treatment, _allocateInfo$message, message, errCode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            expResult = {};
            allocateInfo = {};
            _context.prev = 2;
            this.validateRequest();
            this.recordExpInvoked();
            _context.next = 7;
            return Promise.all([
              this.getAppExpConfig(),
              // 获取cdn实验配置
              this.getWhiteList(),
              // 获取白名单配置
              this.getLaunchConfig()
              //获取应用的推全配置
            ]);
          case 7:
            taskInfo = _context.sent;
            this.appExpConfig = dataphant_universal_es_extends({}, taskInfo[0], {
              whiteList: taskInfo[1],
              launchConfig: taskInfo[2]
            });
            this.validateExpConfig();
            _context.next = 12;
            return this.getUserInfo();
          case 12:
            this.userInfo = _context.sent;
            allocateInfo = Allocate(this.appExpConfig, this.userInfo, this.testKey);
            _allocateInfo = allocateInfo, treatment = _allocateInfo.treatment, _allocateInfo$message = _allocateInfo.message, message = _allocateInfo$message === void 0 ? "" : _allocateInfo$message;
            if (treatment) {
              expResult = this.setExpSucceedResult(allocateInfo);
              this.recordExpResultSucceed(expResult);
            } else {
              expResult = this.setExpFailedResult(resultCode.SUCCESS.code, message);
              this.recordExpFailed(expResult);
            }
            this.saveGlobalExpResult(expResult);
            _context.next = 24;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            errCode = _context.t0 instanceof ValidateError ? _context.t0.code : resultCode.XS_SDK_ERROR.code;
            expResult = this.setExpFailedResult(errCode, _context.t0.message);
            this.recordExpFailed(expResult);
          case 24:
            this.expResult = expResult;
            this.afterAllocate();
            return _context.abrupt("return", expResult);
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[2, 19]]);
    }));
    function getTreatment2() {
      return _getTreatment.apply(this, arguments);
    }
    return getTreatment2;
  })();
  _proto.validateRequest = function validateRequest() {
    if (!this.appName) {
      throw new ValidateError("Missing required parameter: appName");
    }
    if (!this.testKey) {
      throw new ValidateError("Missing required parameter: testKey");
    }
  };
  _proto.validateExpConfig = function validateExpConfig() {
    var _this = this;
    var _this$appExpConfig = this.appExpConfig, experiments = _this$appExpConfig.experiments, _this$appExpConfig$la = _this$appExpConfig.launchConfig, launchConfig = _this$appExpConfig$la === void 0 ? {} : _this$appExpConfig$la;
    if (!experiments) {
      throw new ValidateError("appName: " + this.appName + " not found.");
    }
    this.expConfig = experiments.find(function(v) {
      return v.testKey === _this.testKey;
    });
    var _launchConfig$launchE = launchConfig.launchExperiments, launchExperiments = _launchConfig$launchE === void 0 ? {} : _launchConfig$launchE;
    var launchExperiment = launchExperiments[this.testKey];
    if (!this.expConfig && !launchExperiment) {
      throw new ValidateError("Experiment: " + this.testKey + " not found. Please check if the experiment exists or launched.");
    }
  };
  _proto.getAppExpConfig = /* @__PURE__ */ (function() {
    var _getAppExpConfig = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
      var config, expire, cache, EXP_LOCAL_KEY;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            config = {};
            expire = EXP_CACHE.expire;
            cache = this.getExpConfigFromCache();
            if (!(cache && Date.now() - cache.updateAt < expire)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", cache);
          case 5:
            _context2.next = 7;
            return this.getExpConfigFromRemote();
          case 7:
            config = _context2.sent;
            config.updateAt = Date.now();
            EXP_LOCAL_KEY = this.getExpLocalKey();
            this.Storage.setItem(EXP_LOCAL_KEY, JSON.stringify(config));
            return _context2.abrupt("return", config);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function getAppExpConfig() {
      return _getAppExpConfig.apply(this, arguments);
    }
    return getAppExpConfig;
  })();
  _proto.getExpConfigFromCache = function getExpConfigFromCache() {
    var EXP_LOCAL_KEY = this.getExpLocalKey();
    var storage = this.Storage.getItem(EXP_LOCAL_KEY);
    return storage ? JSON.parse(storage) : null;
  };
  _proto.getExpLocalKey = function getExpLocalKey() {
    return "" + EXP_CACHE.storagePrefix + this.appName;
  };
  _proto.getExpConfigFromRemote = /* @__PURE__ */ (function() {
    var _getExpConfigFromRemote = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
      var _this2 = this;
      var url;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            url = getExpConfigURL({
              appName: this.appName
              // 根据应用名拉取实验配置
            });
            if (url) {
              _context3.next = 3;
              break;
            }
            throw new ValidateError("Failed to get experiment remote url", resultCode.XS_SDK_ERROR.code);
          case 3:
            _context3.next = 5;
            return Request(url).then(function(response) {
              if (response) {
                if (response.status === 200) {
                  return response.json();
                } else {
                  throw new ValidateError("Failed to get experiment:" + _this2.testKey + " configuration from remote", response.status);
                }
              }
            }, function() {
              throw new ValidateError("Failed to get experiment:" + _this2.testKey + " configuration from remote", resultCode.XS_SDK_ERROR.code);
            });
          case 5:
            return _context3.abrupt("return", _context3.sent);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function getExpConfigFromRemote() {
      return _getExpConfigFromRemote.apply(this, arguments);
    }
    return getExpConfigFromRemote;
  })();
  _proto.getWhiteList = /* @__PURE__ */ (function() {
    var _getWhiteList = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4() {
      var url, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            url = getWhiteListURL({
              appName: this.appName
              // 根据应用名获取白名单配置
            });
            _context4.next = 4;
            return Request(url);
          case 4:
            response = _context4.sent;
            if (!response) {
              _context4.next = 8;
              break;
            }
            if (!(response.status === 200)) {
              _context4.next = 8;
              break;
            }
            return _context4.abrupt("return", response.json());
          case 8:
            _context4.next = 12;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
          case 12:
            return _context4.abrupt("return", {});
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this, [[0, 10]]);
    }));
    function getWhiteList() {
      return _getWhiteList.apply(this, arguments);
    }
    return getWhiteList;
  })();
  _proto.getLaunchConfig = /* @__PURE__ */ (function() {
    var _getLaunchConfig = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5() {
      var url, response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            url = getLaunchConfigURL({
              appName: this.appName
            });
            _context5.next = 4;
            return Request(url);
          case 4:
            response = _context5.sent;
            if (!response) {
              _context5.next = 8;
              break;
            }
            if (!(response.status === 200)) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", response.json());
          case 8:
            _context5.next = 12;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
          case 12:
            return _context5.abrupt("return", {});
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this, [[0, 10]]);
    }));
    function getLaunchConfig() {
      return _getLaunchConfig.apply(this, arguments);
    }
    return getLaunchConfig;
  })();
  _proto.getUserInfo = /* @__PURE__ */ (function() {
    var _getUserInfo = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
      var cookieInfo, platform, country, channel, language, version, loginId, aliId, cna, diversionKey, _this$expConfig, keyType, sampleType, defaultCondition;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (this.expConfig) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return", {});
          case 2:
            cookieInfo = getFromCookie();
            platform = cookieInfo.platform, country = cookieInfo.country, channel = cookieInfo.channel, language = cookieInfo.language, version = cookieInfo.version, loginId = cookieInfo.loginId, aliId = cookieInfo.aliId, cna = cookieInfo.cna;
            diversionKey = null;
            _this$expConfig = this.expConfig, keyType = _this$expConfig.keyType, sampleType = _this$expConfig.sampleType;
            if (!this.diversionKey) {
              _context6.next = 10;
              break;
            }
            diversionKey = "" + this.diversionKey;
            _context6.next = 33;
            break;
          case 10:
            _context6.t0 = sampleType;
            _context6.next = _context6.t0 === SAMPLE_TYPE.ACCOUNT_ID ? 13 : _context6.t0 === SAMPLE_TYPE.ALI_ID ? 15 : _context6.t0 === SAMPLE_TYPE.DEVICE_ID ? 23 : _context6.t0 === SAMPLE_TYPE.COOKIE_ID ? 23 : _context6.t0 === SAMPLE_TYPE.REQUEST_ID ? 29 : 29;
            break;
          case 13:
            diversionKey = loginId;
            return _context6.abrupt("break", 31);
          case 15:
            if (!(keyType === KEY_TYPE.SELLER_ALI_ID)) {
              _context6.next = 21;
              break;
            }
            _context6.next = 18;
            return getAliId(aliId);
          case 18:
            diversionKey = _context6.sent;
            _context6.next = 22;
            break;
          case 21:
            diversionKey = aliId;
          case 22:
            return _context6.abrupt("break", 31);
          case 23:
            diversionKey = cna;
            if (diversionKey) {
              _context6.next = 28;
              break;
            }
            _context6.next = 27;
            return getCna();
          case 27:
            diversionKey = _context6.sent;
          case 28:
            return _context6.abrupt("break", 31);
          case 29:
            diversionKey = null;
            return _context6.abrupt("break", 31);
          case 31:
            if (diversionKey) {
              _context6.next = 33;
              break;
            }
            throw new ValidateError("Missing keyType: [" + keyType + "] required parameter: [diversion]");
          case 33:
            defaultCondition = {
              platform,
              country,
              channel,
              language,
              version
            };
            return _context6.abrupt("return", {
              diversionKey,
              DiversionCondition: dataphant_universal_es_extends({}, defaultCondition, this.DiversionCondition)
            });
          case 35:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
    function getUserInfo() {
      return _getUserInfo.apply(this, arguments);
    }
    return getUserInfo;
  })();
  _proto.saveGlobalExpResult = function saveGlobalExpResult(expResult) {
    var globalKey = EXP_RESULT.globalKey, aplusKey = EXP_RESULT.aplusKey;
    var global_res = window[globalKey] || {};
    var treatment = expResult.treatment;
    if (treatment) {
      var _extends2, _Aplus$injectIntoGold;
      window[globalKey] = dataphant_universal_es_extends({}, global_res, (_extends2 = {}, _extends2[this.testKey] = treatment, _extends2));
      injectIntoGoldlog((_Aplus$injectIntoGold = {}, _Aplus$injectIntoGold[aplusKey] = encodeURIComponent(querystring_stringify(window[globalKey])), _Aplus$injectIntoGold));
    }
  };
  _proto.setExpSucceedResult = function setExpSucceedResult(allocateInfo) {
    return dataphant_universal_es_extends({
      success: true,
      code: resultCode.SUCCESS.code,
      message: resultCode.SUCCESS.message
    }, allocateInfo);
  };
  _proto.setExpFailedResult = function setExpFailedResult(code, message) {
    return {
      success: false,
      code,
      message
    };
  };
  _proto.afterAllocate = function afterAllocate() {
    if (utils.isDebug()) {
      console.group("%c\u5B9E\u9A8C\u540D\u79F0" + this.testKey, "color: #CC3300");
      console.log("%c\u5B9E\u9A8C\u914D\u7F6E%c" + JSON.stringify(this.expConfig), "color: #339966", "");
      console.log("%c\u7528\u6237\u4FE1\u606F%c" + JSON.stringify(this.userInfo), "color: #3366CC", "");
      console.log("%c\u5206\u6D41\u7ED3\u679C%c" + JSON.stringify(this.expResult), "color: #990099", "");
      console.groupEnd();
    }
  };
  _proto.recordExpInvoked = function recordExpInvoked() {
    var resInfo = {
      appName: this.appName,
      testKey: this.testKey,
      sdkVer: dataphant_universal_package_namespaceObject.rE
    };
    goldlog(EXP_LOG.action.sdkInvoked, resInfo);
  };
  _proto.recordExpResultSucceed = function recordExpResultSucceed(expResult) {
    if (!this.expConfig) return;
    var _expResult$segmentID = expResult.segmentID, segmentID = _expResult$segmentID === void 0 ? null : _expResult$segmentID, _expResult$treatmentI = expResult.treatmentID, treatmentID = _expResult$treatmentI === void 0 ? null : _expResult$treatmentI, _expResult$treatment = expResult.treatment, treatment = _expResult$treatment === void 0 ? "" : _expResult$treatment, rangeInfo = expResult.rangeInfo;
    var _this$appExpConfig$en = this.appExpConfig.envType, envType = _this$appExpConfig$en === void 0 ? "" : _this$appExpConfig$en;
    var _this$expConfig2 = this.expConfig, id = _this$expConfig2.id, releaseId = _this$expConfig2.releaseId, keyType = _this$expConfig2.keyType;
    var diversionKey = this.userInfo.diversionKey;
    var expVer = rangeInfo ? rangeInfo.releaseId : releaseId;
    var releaseVer = rangeInfo ? rangeInfo.version : "";
    var resInfo = {
      expID: id,
      expVer,
      segmentID,
      bucketID: treatmentID,
      diverKey: diversionKey,
      keyType,
      expTime: +/* @__PURE__ */ new Date(),
      sdkVer: dataphant_universal_package_namespaceObject.rE,
      appName: this.appName,
      testKey: this.testKey,
      bucketName: treatment,
      releaseVer,
      envType
    };
    if (segmentID !== null && treatmentID !== null) {
      goldlog(EXP_LOG.action.resultSucceed, resInfo);
    }
    Reporter.report({
      category: 100,
      msg: "experiment allocated succeed",
      w_succ: 1,
      resInfo,
      userInfo: this.userInfo || {}
    });
  };
  _proto.recordExpFailed = function recordExpFailed(_ref) {
    var _this$expConfig$id, _this$expConfig3, _this$expConfig$relea, _this$expConfig4;
    var _ref$code = _ref.code, code = _ref$code === void 0 ? -1 : _ref$code, _ref$message = _ref.message, message = _ref$message === void 0 ? "" : _ref$message;
    if (!this.expConfig) return;
    var resInfo = {
      code,
      message,
      appName: this.appName,
      testKey: this.testKey,
      expID: (_this$expConfig$id = (_this$expConfig3 = this.expConfig) == null ? void 0 : _this$expConfig3.id) != null ? _this$expConfig$id : "",
      expVer: (_this$expConfig$relea = (_this$expConfig4 = this.expConfig) == null ? void 0 : _this$expConfig4.releaseId) != null ? _this$expConfig$relea : "",
      sdkVer: dataphant_universal_package_namespaceObject.rE
    };
    goldlog(EXP_LOG.action.resultFailed, resInfo);
    Reporter.report({
      category: 100,
      msg: message,
      w_succ: 0,
      resInfo,
      userInfo: this.userInfo || {}
    });
  };
  return ABTest2;
})();
/* harmony default export */ const es = ((/* unused pure expression or super */ null && (ABTest)));
function getTreatment(params) {
  var instance = new ABTest(params);
  return instance.getTreatment();
}
window["Dataphant"] = {
  getTreatment
};

;// ./src/header/components/SubTab/index.less
// extracted by mini-css-extract-plugin

;// ./src/header/components/SubTab/index.tsx






const SubTab = (props) => {
  const headerData = useHeaderData();
  const { tabConfigs, handleSearchTabClick } = props;
  const imageSearchExperiment = external_React_namespaceObject.useRef(false);
  const textSearchExperiment = external_React_namespaceObject.useRef(false);
  external_React_namespaceObject.useEffect(() => {
    getTreatment({
      appName: "alibaba-header-test",
      testKey: "pc_image_search_result_ai_mode_tab"
    }).then((res) => {
      console.log(res, "imageSearchExperimentres");
      if (res.treatment === "test") {
        imageSearchExperiment.current = true;
      }
    });
  }, []);
  external_React_namespaceObject.useEffect(() => {
    getTreatment({
      appName: "alibaba-header-test",
      testKey: "pc_search_result_ai_mode_tab"
    }).then((res) => {
      console.log(res, "textSearchExperimentres");
      if (res.treatment === "test") {
        textSearchExperiment.current = true;
      }
    });
  }, []);
  return /* @__PURE__ */ external_React_namespaceObject.createElement("div", { className: "tnh-sub-tab" }, tabConfigs.map((item) => /* @__PURE__ */ external_React_namespaceObject.createElement(
    "a",
    {
      className: `tnh-sub-tab-item ${item.active ? "tnh-sub-tab-item-active" : ""}`,
      key: item.title,
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (handleSearchTabClick && (imageSearchExperiment.current || textSearchExperiment.current)) {
          handleSearchTabClick(item.url, item.type || "");
        } else {
          window.location.href = item.url || "#";
        }
      }
    },
    getI18n(item.title, headerData)
  )));
};
/* harmony default export */ const components_SubTab = (SubTab);

;// ./src/header/components/SubTitle/index.less
// extracted by mini-css-extract-plugin

;// ./src/header/components/SubTitle/index.tsx





const SubTitle = (props) => {
  const { title, url, i18n } = props;
  const headerData = useHeaderData();
  return /* @__PURE__ */ external_React_namespaceObject.createElement("a", { className: "tnh-sub-title", href: url || "#" }, i18n ? getI18n(i18n, headerData) : title);
};
/* harmony default export */ const components_SubTitle = (SubTitle);

;// ./src/header/runtime/chunks/loadChunks.tsx






const chunkNameMap = {
  categories: "Fy24HeaderCategories",
  searchBar: "Fy23ICBUSearchBar",
  shipTo: "ShipTo",
  HeaderShoppingCart: "HeaderShoppingCart",
  HeaderFavorite: "HeaderFavorite",
  // 添加 AiSearchBar 组件
  searchBarAi: "searchBarAi",
  DropshippingEntry: "DropshippingEntry",
  ImHeaderNotification: "ImHeaderNotification"
};
const hostReact = (external_React_default());
const hostReactDOM = (external_ReactDOM_default());
const preloadedJsUrls = /* @__PURE__ */ new Set();
const cssLoads = /* @__PURE__ */ new Map();
const jsLoads = /* @__PURE__ */ new Map();
const failedChunks = /* @__PURE__ */ new Map();
const requiredChunkExports = /* @__PURE__ */ new Map();
const chunkCssReferences = /* @__PURE__ */ new Map();
const successfulChunkSlots = /* @__PURE__ */ new Map();
const reportedFailures = /* @__PURE__ */ new Set();
const CHUNK_SOFT_TIMEOUT = 1e4;
let loadRound = 0;
let headerInstanceSequence = 0;
const createChunkRuntimeInstanceId = () => {
  headerInstanceSequence += 1;
  return `header-${headerInstanceSequence}`;
};
const alignReactRuntime = () => {
  try {
    window.React = hostReact;
  } catch (e) {
    console.warn("align window.React failed", e);
  }
  try {
    window.ReactDOM = hostReactDOM;
  } catch (e) {
    console.warn("align window.ReactDOM failed", e);
  }
};
const preloadJs = (src) => {
  if (preloadedJsUrls.has(src)) return;
  preloadedJsUrls.add(src);
  const link = document.createElement("link");
  link.rel = "preload";
  link.setAttribute("as", "script");
  link.href = src;
  document.head.appendChild(link);
};
const acquireCss = (url) => {
  const cachedLoad = cssLoads.get(url);
  if (cachedLoad) {
    cachedLoad.references += 1;
    return cachedLoad.promise;
  }
  const load = loadExternalCSS(url, false).catch((error) => {
    cssLoads.delete(url);
    throw error;
  });
  cssLoads.set(url, {
    promise: load,
    references: 1
  });
  return load;
};
const releaseCss = (url, element) => {
  const load = cssLoads.get(url);
  if (!load) {
    element.remove();
    return;
  }
  load.references -= 1;
  if (load.references <= 0) {
    element.remove();
    cssLoads.delete(url);
  }
};
const loadJsOnce = (url) => {
  const cachedLoad = jsLoads.get(url);
  if (cachedLoad) return cachedLoad;
  alignReactRuntime();
  const load = loadJs(url, false, false).catch((error) => {
    jsLoads.delete(url);
    throw error;
  });
  jsLoads.set(url, load);
  return load;
};
const loadChunks = async (chunks, round = loadRound, headerInstanceId = "header-0") => {
  if (!window.theNewHeaderChunkList) window.theNewHeaderChunkList = chunks;
  const loadChunk = async (item, index) => {
    let loadedCss;
    let slowTimer;
    let failureStage = item.cssUrl ? "css" : item.jsUrl ? "js" : "export";
    let cssReferenceReleased = false;
    const chunkKey = `${headerInstanceId}:${item.name}`;
    const slotOutcomes = /* @__PURE__ */ new Map();
    const getSuccessfulSlots = () => {
      const successfulSlots = successfulChunkSlots.get(chunkKey) || /* @__PURE__ */ new Set();
      successfulChunkSlots.set(chunkKey, successfulSlots);
      return successfulSlots;
    };
    const hasSuccessfulSlot = () => getSuccessfulSlots().size > 0;
    const releaseLoadedCss = () => {
      if (!loadedCss || !item.cssUrl || cssReferenceReleased) return;
      cssReferenceReleased = true;
      releaseCss(item.cssUrl, loadedCss);
      const activeReference = chunkCssReferences.get(chunkKey);
      if (activeReference?.element === loadedCss) chunkCssReferences.delete(chunkKey);
    };
    const reportFailure = (stage, url, error) => {
      const reportKey = `${headerInstanceId}:${round}:${item.name}:${url}:${stage}`;
      if (reportedFailures.has(reportKey)) return;
      reportedFailures.add(reportKey);
      logError(
        "load_chunk_error",
        `stage: ${stage}; chunk: ${item.name}; url: ${url}; error: ${error}`,
        item.name
      );
    };
    const scheduleFailedSlotCleanup = () => {
      Promise.resolve().then(() => {
        const outcomes = Array.from(slotOutcomes.values());
        if (outcomes.includes("success") || !outcomes.includes("failed")) return;
        releaseLoadedCss();
      });
    };
    const lifecycle = {
      onMissingExport: (exportName) => {
        const requiredExports = requiredChunkExports.get(chunkKey) || /* @__PURE__ */ new Set();
        requiredExports.add(exportName);
        requiredChunkExports.set(chunkKey, requiredExports);
        window.theNewHeaderChunkList[index].isLoaded = false;
        failedChunks.set(chunkKey, { item, headerInstanceId });
        getSuccessfulSlots().delete(exportName);
        slotOutcomes.set(exportName, "failed");
        reportFailure("export", item.jsUrl || "", `Missing chunk export: ${exportName}`);
        scheduleFailedSlotCleanup();
      },
      onRenderError: (slotName, error) => {
        getSuccessfulSlots().delete(slotName);
        slotOutcomes.set(slotName, "failed");
        reportFailure("render", item.jsUrl || item.cssUrl || "", error);
        scheduleFailedSlotCleanup();
      },
      onRenderSuccess: (slotName) => {
        getSuccessfulSlots().add(slotName);
        slotOutcomes.set(slotName, "success");
      }
    };
    try {
      if (item.isLoaded) return;
      slowTimer = setTimeout(() => {
        const assetUrl = item.jsUrl || item.cssUrl || "";
        const reportKey = `${headerInstanceId}:${round}:${item.name}:${assetUrl}:slow`;
        if (reportedFailures.has(reportKey)) return;
        reportedFailures.add(reportKey);
        logError("load_chunk_slow", `chunk: ${item.name}; url: ${assetUrl}`, item.name);
      }, CHUNK_SOFT_TIMEOUT);
      item.jsUrl && preloadJs(item.jsUrl);
      if (item.cssUrl) {
        const activeReference = chunkCssReferences.get(chunkKey);
        if (activeReference?.url === item.cssUrl && activeReference.element.isConnected) {
          loadedCss = activeReference.element;
        } else {
          loadedCss = await acquireCss(item.cssUrl);
          chunkCssReferences.set(chunkKey, { element: loadedCss, url: item.cssUrl });
        }
      }
      failureStage = item.jsUrl ? "js" : "export";
      if (item.jsUrl) {
        await loadJsOnce(item.jsUrl);
      }
      failureStage = "export";
      const componentKey = chunkNameMap[item.name];
      if (item.exportMulti) {
        const exportedComponents = window[componentKey];
        if (!exportedComponents || Object.keys(exportedComponents).length === 0) {
          throw new Error(`Missing chunk exports: ${item.name}`);
        }
        const missingRequiredExport = Array.from(requiredChunkExports.get(chunkKey) || []).find(
          (exportName) => !exportedComponents[exportName]
        );
        if (missingRequiredExport) {
          throw new Error(`Missing chunk export: ${item.name}.${missingRequiredExport}`);
        }
        const components = {};
        Object.keys(exportedComponents).forEach((key) => {
          components[key] = exportedComponents[key];
        });
        window.theNewHeaderChunkList[index].components = components;
        window.theNewHeaderChunkList[index].isLoaded = true;
        failedChunks.delete(chunkKey);
        setChunkComponents(item.name, components, lifecycle, headerInstanceId);
        return;
      }
      let Com;
      switch (componentKey) {
        case "ImHeaderNotification":
          Com = window[componentKey];
          break;
        default:
          Com = window[componentKey]?.[item.name === "DropshippingEntry" ? "default" : item.name === "searchBar" || item.name === "searchBarAi" ? "HeaderSearch" : componentKey];
          break;
      }
      if (!Com) throw new Error(`Missing chunk export: ${item.name}`);
      window.theNewHeaderChunkList[index].components = Com;
      window.theNewHeaderChunkList[index].isLoaded = true;
      failedChunks.delete(chunkKey);
      setChunkComponents(item.name, Com, lifecycle, headerInstanceId);
    } catch (e) {
      if (!hasSuccessfulSlot()) releaseLoadedCss();
      failedChunks.set(chunkKey, { item, headerInstanceId });
      const failureUrl = failureStage === "css" ? item.cssUrl || "" : item.jsUrl || "";
      reportFailure(failureStage, failureUrl, e);
      console.error("loadChunk Error", e);
    } finally {
      if (slowTimer) clearTimeout(slowTimer);
    }
  };
  await Promise.all(
    chunks.map((item) => {
      let chunkIndex = window.theNewHeaderChunkList.findIndex((chunk) => chunk.name === item.name);
      if (chunkIndex === -1) {
        window.theNewHeaderChunkList.push(item);
        chunkIndex = window.theNewHeaderChunkList.length - 1;
      }
      return loadChunk(item, chunkIndex);
    })
  );
};
const retryFailedChunks = () => {
  loadRound += 1;
  const failedChunkRecords = Array.from(failedChunks.values());
  return Promise.all(
    failedChunkRecords.map(
      ({ item, headerInstanceId }) => loadChunks([item], loadRound, headerInstanceId)
    )
  );
};

;// ./src/header/styles/index.less
// extracted by mini-css-extract-plugin

;// ./src/header/TheNewHeader.tsx

























const DEFAULT_Z_INDEX = 9006;
TheNewHeader.defaultProps = {
  bgTransparent: false,
  hasSearchBar: true,
  hasSub: true,
  isDark: false,
  fixed: false,
  tempHideSearchBar: false,
  useCommonStyle: true,
  zIndex: DEFAULT_Z_INDEX
};
initTipsQueue();
function TheNewHeader(headerProps) {
  const {
    config,
    scenes,
    hasSearchBar = true,
    hasSub = true,
    isDark = false,
    fixed = false,
    bgTransparent = false,
    showBorder = true,
    searchbarProps,
    tempHideSearchBar = false,
    hasLoggedUser,
    haveLoggedInUser,
    subConfig,
    i18n,
    local,
    onLangChange,
    categoriesProps,
    zIndex = DEFAULT_Z_INDEX,
    smartAssistantProps,
    orderPaymentTipData,
    site,
    useCommonStyle = true,
    shipToConfig,
    rootDomId,
    ssrVersion = "0.0.0",
    logoutReturnUrl,
    debugConfig
  } = utils_getDefaultProps(headerProps);
  const [headerConfig] = (0,external_React_namespaceObject.useState)(config);
  const [chunkRuntimeInstanceId] = (0,external_React_namespaceObject.useState)(createChunkRuntimeInstanceId);
  const [key, setKey] = (0,external_React_namespaceObject.useState)((/* @__PURE__ */ new Date()).getTime().toString());
  const [remoteI18nData, setRemoteI18nData] = (0,external_React_namespaceObject.useState)();
  const [i18nData, setI18nData] = (0,external_React_namespaceObject.useState)(() => mergeI18nSources(i18n));
  const [language, setLanguage] = (0,external_React_namespaceObject.useState)(local);
  const [showSearchBar, setShowSearchBar] = (0,external_React_namespaceObject.useState)(hasSearchBar);
  const [displayNoneSearchBar, setDisplayNoneSearchBar] = (0,external_React_namespaceObject.useState)(tempHideSearchBar);
  const [showSub, setShowSub] = (0,external_React_namespaceObject.useState)(hasSub);
  const subHeaderRef = (0,external_React_namespaceObject.useRef)(null);
  const [bgTransparentState, setBgTransparentState] = (0,external_React_namespaceObject.useState)(fixed && bgTransparent);
  const [hasBg, setHasBg] = (0,external_React_namespaceObject.useState)(fixed ? false : isDark);
  const [showOverLay, setShowOverLay] = (0,external_React_namespaceObject.useState)(false);
  const [fullScreenSearchBar, setFullScreenSearchBar] = (0,external_React_namespaceObject.useState)(false);
  const cookieLocal = getLocal();
  const [assetsList, setAssetsList] = (0,external_React_namespaceObject.useState)({});
  const [country, setCountry] = (0,external_React_namespaceObject.useState)();
  const [messageUrl, setMessageUrl] = (0,external_React_namespaceObject.useState)();
  const [memberData, setMemberData] = (0,external_React_namespaceObject.useState)("");
  const [shipReadData, setShipReadData] = (0,external_React_namespaceObject.useState)();
  const getShipReadData = () => {
    const params = new URLSearchParams();
    params.append("_", `${(/* @__PURE__ */ new Date()).getTime()}`);
    const url = `${Fetch_Domain + GET_URL}?${params.toString()}`;
    fetch_jsonp_default()(url, {
      timeout: 1e4
    }).then((response) => response.json()).then((result) => {
      if (result?.data) {
        setShipReadData(result?.data);
      }
    }).catch((e) => {
      logError("fetch_read", `url: ${url}; err: ${e.toString()}`);
    });
  };
  (0,external_React_namespaceObject.useEffect)(() => {
    getShipReadData();
  }, []);
  (0,external_React_namespaceObject.useEffect)(() => {
    getHeaderAssetsList().then((result) => {
      setAssetsList(result);
      const { chunks = [], defer = [] } = result;
      loadChunks(chunks, 0, chunkRuntimeInstanceId);
      defer.forEach(({ name, cssUrl, jsUrl }) => {
        if (name === "commonStyle") {
          if (useCommonStyle && cssUrl) {
            loadExternalCSS(cssUrl).catch((error) => {
              logError("load_defer_error", `stage: css; url: ${cssUrl}; error: ${error}`, name);
            });
          }
        } else if (name !== "smartAssistant") {
          try {
            if (jsUrl) {
              loadJs(jsUrl, true).catch((error) => {
                logError("load_defer_error", `stage: js; url: ${jsUrl}; error: ${error}`, name);
              });
            }
            if (cssUrl) {
              loadExternalCSS(cssUrl).catch((error) => {
                logError("load_defer_error", `stage: css; url: ${cssUrl}; error: ${error}`, name);
              });
            }
          } catch (e) {
            console.error("getHeaderAssetsList loadAssets error", e);
          }
        }
      });
    });
  }, []);
  (0,external_React_namespaceObject.useEffect)(() => {
    window.TheNewHeaderGlobalConfig = {
      config,
      scenes,
      hasSearchBar,
      hasSub,
      bgTransparent,
      isDark,
      fixed,
      searchbarProps,
      tempHideSearchBar,
      hasLoggedUser,
      haveLoggedInUser,
      subConfig,
      i18n,
      local,
      onLangChange,
      categoriesProps,
      zIndex,
      smartAssistantProps,
      orderPaymentTipData,
      site,
      shipToConfig,
      rootDomId,
      debugConfig
    };
    loadJs("//s.alicdn.com/@at/t/a/font_4151258_mx8e5ah5np.js");
    autoEXP();
    log("init");
  }, []);
  (0,external_React_namespaceObject.useEffect)(() => {
    initI18n().then((i18nLocal) => {
      setRemoteI18nData(i18nLocal);
    });
  }, []);
  (0,external_React_namespaceObject.useEffect)(() => {
    setI18nData(mergeI18nSources(remoteI18nData, i18n));
  }, [i18n, remoteI18nData]);
  (0,external_React_namespaceObject.useEffect)(() => {
    setLanguage(local ?? cookieLocal);
  }, [cookieLocal, local]);
  (0,external_React_namespaceObject.useEffect)(() => {
    setShowSearchBar(hasSearchBar);
    setShowSub(hasSub);
    setHasBg(fixed ? false : isDark);
    setBgTransparentState(!fixed && bgTransparent && !subHeaderRef.current?.isHoverDom);
    setDisplayNoneSearchBar(tempHideSearchBar);
    if (hasSearchBar && !displayNoneSearchBar && fullScreenSearchBar && showOverLay) {
    } else if ((!hasSearchBar || displayNoneSearchBar) && fullScreenSearchBar && showOverLay) {
      setFullScreenSearchBar(false);
    } else if (!hasSub) {
      setShowOverLay(false);
    }
  }, [hasSearchBar, hasSub, isDark, fixed, tempHideSearchBar, bgTransparent]);
  (0,external_React_namespaceObject.useEffect)(() => {
    setShowOverLay(fullScreenSearchBar);
  }, [fullScreenSearchBar]);
  const [overlayStyle] = useSpring(() => {
    return {
      from: { background: "transparent", zIndex: zIndex - 1 },
      to: { background: "rgba(0, 0, 0, 0.6)", zIndex: zIndex - 1 },
      config: {
        duration: 200,
        easing: easings.easeInOutCubic
      },
      reset: true
    };
  }, [showOverLay]);
  const reloadComponent = () => {
    setKey((/* @__PURE__ */ new Date()).getTime().toString());
  };
  const headerClass = classnames_default()({
    "the-new-header": true,
    "tnh-dark": hasBg,
    "tnh-white": !hasBg,
    "tnh-white-overlay": showOverLay,
    "tnh-fixed": fixed || fullScreenSearchBar,
    "tnh-no-border": !showBorder,
    "tnh-transparent": bgTransparentState
  });
  const getSearchBarHolder = () => {
    if (!site) return searchbarProps?.placeholder;
    if (site === "turkey") {
      return getI18n("sctnh.turkey_search_shading", { i18nData }).replace(
        "{countryName}",
        getI18n("sctnh.turkey_pavilion_header", { i18nData })
      );
    } else {
      const siteI18nKeyMap = {
        uk: "sctnh.uk_search_shading",
        de: "sctnh.germany_search_shading",
        cn: "sctnh.china_search_shading"
      };
      return getI18n(
        siteI18nKeyMap[site] || `sctnh.${site}_search_shading`,
        {
          i18nData
        }
      );
    }
  };
  return /* @__PURE__ */ external_React_default().createElement(ErrorBoundary, { module: "the-new-header" }, /* @__PURE__ */ external_React_default().createElement(
    headerContext.Provider,
    {
      value: {
        shipReadData,
        i18nData,
        language,
        zIndex,
        scenes,
        headerConfig,
        chunkRuntimeInstanceId,
        smartAssistantProps,
        assetsList,
        country,
        setCountry,
        site,
        memberData,
        getShipReadData,
        setMemberData,
        shipToConfig,
        messageUrl,
        setMessageUrl,
        debugConfig
      }
    },
    showOverLay && /* @__PURE__ */ external_React_default().createElement(
      animated.div,
      {
        style: overlayStyle,
        className: "tnh-overlay",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Full screen overlay",
        onClick: () => setFullScreenSearchBar(false)
      }
    ),
    /* @__PURE__ */ external_React_default().createElement(
      "div",
      {
        id: "the-new-header",
        role: "banner",
        "aria-label": "Main navigation",
        "data-version": package_namespaceObject.rE,
        "data-tnh-auto-exp": "tnh-expose",
        "data-scenes": scenes,
        className: headerClass,
        style: { zIndex: fullScreenSearchBar ? "10000" : zIndex }
      },
      !scenes && /* @__PURE__ */ external_React_default().createElement("div", { className: "tnh-no-scenes", role: "alert", "aria-live": "assertive" }, "\u8BF7\u5728", /* @__PURE__ */ external_React_default().createElement(
        "a",
        {
          href: "https://header.pre-fc.alibaba-inc.com/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "\u63A5\u5165\u5E73\u53F0"
      ), "\u6CE8\u518C\u573A\u666F\uFF0C\u5B9A\u5236header\u914D\u7F6E"),
      /* @__PURE__ */ external_React_default().createElement("div", { className: "header-content" }, /* @__PURE__ */ external_React_default().createElement("div", { id: "popup-root", className: "tnh-popup-root", role: "complementary" }), /* @__PURE__ */ external_React_default().createElement("div", { className: "tnh-main" }, /* @__PURE__ */ external_React_default().createElement("div", { className: "tnh-logo-content" }, /* @__PURE__ */ external_React_default().createElement(components_Logo, { mainLogoUrl: config?.mainLogoUrl, ssrVersion }), (config?.subTitle?.title || config?.subTitle?.i18n) && /* @__PURE__ */ external_React_default().createElement(components_SubTitle, { ...config.subTitle }), config?.subTab && config?.subTab?.length > 0 && /* @__PURE__ */ external_React_default().createElement(
        components_SubTab,
        {
          tabConfigs: config.subTab,
          handleSearchTabClick: config.handleSearchTabClick
        }
      )), showSearchBar && /* @__PURE__ */ external_React_default().createElement(
        components_SearchBar,
        {
          searchbarProps: {
            ...searchbarProps,
            placeholder: getSearchBarHolder(),
            defaultFullScreen: fullScreenSearchBar
          },
          displayNoneSearchBar,
          setFullScreenSearchBar
        }
      ), /* @__PURE__ */ external_React_default().createElement(
        components_Functional,
        {
          onLangChange,
          hasLoggedUser,
          haveLoggedInUser,
          smartAssistantProps,
          orderPaymentTipData,
          key,
          reloadComponent,
          logoutReturnUrl
        }
      ))),
      /* @__PURE__ */ external_React_default().createElement(
        sub_header,
        {
          ref: subHeaderRef,
          fixed,
          setShowOverLay,
          setBgTransparentState,
          bgTransparent,
          subConfig,
          categoriesProps,
          showSub
        }
      )
    )
  ));
}

/* harmony default export */ const header_TheNewHeader = ((/* unused pure expression or super */ null && (TheNewHeader)));

;// ./src/header/config/default.ts

const DEFAULT_DOM_ID = "icbu-the-new-header-container";

;// ./src/pages/renderHeader/index.tsx







const isReact18 = (external_ReactDOM_default()).createRoot;
let rootContainer = null;
let domId = null;
let $root = null;
function initHeader(props) {
  const newProps = { ...window.TheNewHeaderProps, ...props };
  domId = newProps?.rootDomId || DEFAULT_DOM_ID;
  $root = document.getElementById(domId);
  if ($root) {
    if (isReact18 && !rootContainer) {
      if (`${newProps?.fixedSpace}` === "true") $root.classList.add("the-new-header-wrapper");
      rootContainer = external_ReactDOM_default().createRoot($root);
    }
    const headerElement = /* @__PURE__ */ external_React_default().createElement(TheNewHeader, { ...newProps });
    if (isReact18) {
      rootContainer.render(headerElement);
    } else {
      external_ReactDOM_default().render(headerElement, $root);
    }
  }
}
function renderHeader(props) {
  const newProps = { ...window.TheNewHeaderProps, ...props };
  if ($root || rootContainer) {
    const headerElement = /* @__PURE__ */ external_React_default().createElement(TheNewHeader, { ...newProps });
    if (rootContainer) {
      rootContainer.render(headerElement);
    } else {
      external_ReactDOM_default().render(headerElement, $root);
    }
  } else {
    initHeader(newProps);
  }
  retryFailedChunks();
}
window.reloadHeader = renderHeader;
initHeader(window.TheNewHeaderProps);

})();

TheNewHeader = __webpack_exports__;
/******/ })()
;