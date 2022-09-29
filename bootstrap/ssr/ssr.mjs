import { createServer } from "http";
import * as runtimeDom from "@vue/runtime-dom";
import { registerRuntimeCompiler, initCustomFormatter, warn, ref, computed, defineComponent, h, Fragment, onMounted, watch, onUnmounted, provide, inject, watchEffect, Teleport, reactive, unref, nextTick, cloneVNode, openBlock, createBlock, createCommentVNode, createElementBlock, normalizeStyle, KeepAlive, createVNode, renderList, onBeforeUnmount, renderSlot, withModifiers, createElementVNode, resolveComponent, withCtx, normalizeProps, mergeProps, createSSRApp } from "@vue/runtime-dom";
import { compile } from "@vue/compiler-dom";
import { isString, NOOP, extend, generateCodeFrame } from "@vue/shared";
import { renderToString } from "@vue/server-renderer";
import Yn from "axios";
function initDev() {
  {
    initCustomFormatter();
  }
}
if (process.env.NODE_ENV !== "production") {
  initDev();
}
const compileCache = /* @__PURE__ */ Object.create(null);
function compileToFunction(template, options) {
  if (!isString(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
      process.env.NODE_ENV !== "production" && warn(`invalid template option: `, template);
      return NOOP;
    }
  }
  const key = template;
  const cached = compileCache[key];
  if (cached) {
    return cached;
  }
  if (template[0] === "#") {
    const el2 = document.querySelector(template);
    if (process.env.NODE_ENV !== "production" && !el2) {
      warn(`Template element not found or is empty: ${template}`);
    }
    template = el2 ? el2.innerHTML : ``;
  }
  const opts = extend({
    hoistStatic: true,
    onError: process.env.NODE_ENV !== "production" ? onError : void 0,
    onWarn: process.env.NODE_ENV !== "production" ? (e) => onError(e, true) : NOOP
  }, options);
  if (!opts.isCustomElement && typeof customElements !== "undefined") {
    opts.isCustomElement = (tag) => !!customElements.get(tag);
  }
  const { code } = compile(template, opts);
  function onError(err, asWarning = false) {
    const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
    const codeFrame = err.loc && generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
    warn(codeFrame ? `${message}
${codeFrame}` : message);
  }
  const render = new Function("Vue", code)(runtimeDom);
  render._rc = true;
  return compileCache[key] = render;
}
registerRuntimeCompiler(compileToFunction);
function Ea(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
    ;
  return e;
}
function _a(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++i];
      if (r(a[l], l, a) === false)
        break;
    }
    return t;
  };
}
var xa = _a();
const Ta = xa;
function Aa(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Pa = typeof global == "object" && global && global.Object === Object && global;
const ti = Pa;
var Ia = typeof self == "object" && self && self.Object === Object && self, Ca = ti || Ia || Function("return this")();
const oe = Ca;
var Da = oe.Symbol;
const we = Da;
var ri = Object.prototype, ja = ri.hasOwnProperty, Ba = ri.toString, tt = we ? we.toStringTag : void 0;
function Fa(e) {
  var t = ja.call(e, tt), r = e[tt];
  try {
    e[tt] = void 0;
    var n = true;
  } catch {
  }
  var i = Ba.call(e);
  return n && (t ? e[tt] = r : delete e[tt]), i;
}
var qa = Object.prototype, Ra = qa.toString;
function La(e) {
  return Ra.call(e);
}
var ka = "[object Null]", Ma = "[object Undefined]", dn = we ? we.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? Ma : ka : dn && dn in Object(e) ? Fa(e) : La(e);
}
function Se(e) {
  return e != null && typeof e == "object";
}
var Na = "[object Arguments]";
function pn(e) {
  return Se(e) && _e(e) == Na;
}
var ni = Object.prototype, Va = ni.hasOwnProperty, Ha = ni.propertyIsEnumerable, Ua = pn(function() {
  return arguments;
}()) ? pn : function(e) {
  return Se(e) && Va.call(e, "callee") && !Ha.call(e, "callee");
};
const ii = Ua;
var Wa = Array.isArray;
const N = Wa;
function za() {
  return false;
}
var ai = typeof exports == "object" && exports && !exports.nodeType && exports, hn = ai && typeof module == "object" && module && !module.nodeType && module, Ga = hn && hn.exports === ai, vn = Ga ? oe.Buffer : void 0, Ka = vn ? vn.isBuffer : void 0, Xa = Ka || za;
const ur = Xa;
var Qa = 9007199254740991, Ya = /^(?:0|[1-9]\d*)$/;
function Pr(e, t) {
  var r = typeof e;
  return t = t == null ? Qa : t, !!t && (r == "number" || r != "symbol" && Ya.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ja = 9007199254740991;
function Ir(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ja;
}
var Za = "[object Arguments]", eo = "[object Array]", to = "[object Boolean]", ro = "[object Date]", no = "[object Error]", io = "[object Function]", ao = "[object Map]", oo = "[object Number]", so = "[object Object]", lo = "[object RegExp]", uo = "[object Set]", co = "[object String]", fo = "[object WeakMap]", po = "[object ArrayBuffer]", ho = "[object DataView]", vo = "[object Float32Array]", mo = "[object Float64Array]", go = "[object Int8Array]", yo = "[object Int16Array]", bo = "[object Int32Array]", wo = "[object Uint8Array]", So = "[object Uint8ClampedArray]", Oo = "[object Uint16Array]", $o = "[object Uint32Array]", D = {};
D[vo] = D[mo] = D[go] = D[yo] = D[bo] = D[wo] = D[So] = D[Oo] = D[$o] = true;
D[Za] = D[eo] = D[po] = D[to] = D[ho] = D[ro] = D[no] = D[io] = D[ao] = D[oo] = D[so] = D[lo] = D[uo] = D[co] = D[fo] = false;
function Eo(e) {
  return Se(e) && Ir(e.length) && !!D[_e(e)];
}
function _o(e) {
  return function(t) {
    return e(t);
  };
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, it = oi && typeof module == "object" && module && !module.nodeType && module, xo = it && it.exports === oi, er = xo && ti.process, To = function() {
  try {
    var e = it && it.require && it.require("util").types;
    return e || er && er.binding && er.binding("util");
  } catch {
  }
}();
const mn = To;
var gn = mn && mn.isTypedArray, Ao = gn ? _o(gn) : Eo;
const si = Ao;
var Po = Object.prototype, Io = Po.hasOwnProperty;
function Co(e, t) {
  var r = N(e), n = !r && ii(e), i = !r && !n && ur(e), a = !r && !n && !i && si(e), o = r || n || i || a, s = o ? Aa(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Io.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Pr(u, l))) && s.push(u);
  return s;
}
var Do = Object.prototype;
function jo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Do;
  return e === r;
}
function Bo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Fo = Bo(Object.keys, Object);
const qo = Fo;
var Ro = Object.prototype, Lo = Ro.hasOwnProperty;
function ko(e) {
  if (!jo(e))
    return qo(e);
  var t = [];
  for (var r in Object(e))
    Lo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ne(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mo = "[object AsyncFunction]", No = "[object Function]", Vo = "[object GeneratorFunction]", Ho = "[object Proxy]";
function li(e) {
  if (!ne(e))
    return false;
  var t = _e(e);
  return t == No || t == Vo || t == Mo || t == Ho;
}
function qt(e) {
  return e != null && Ir(e.length) && !li(e);
}
function Rt(e) {
  return qt(e) ? Co(e) : ko(e);
}
function Cr(e, t) {
  return e && Ta(e, t, Rt);
}
function Uo(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!qt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; )
      ;
    return r;
  };
}
var Wo = Uo(Cr);
const Dr = Wo;
function ui(e) {
  return e;
}
function ci(e) {
  return typeof e == "function" ? e : ui;
}
function zo(e, t) {
  var r = N(e) ? Ea : Dr;
  return r(e, ci(t));
}
var Go = Array.prototype, Ko = Go.reverse;
function Xo(e) {
  return e == null ? e : Ko.call(e);
}
var Qo = "[object Symbol]";
function Lt(e) {
  return typeof e == "symbol" || Se(e) && _e(e) == Qo;
}
function fi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Yo = 1 / 0, yn = we ? we.prototype : void 0, bn = yn ? yn.toString : void 0;
function kt(e) {
  if (typeof e == "string")
    return e;
  if (N(e))
    return fi(e, kt) + "";
  if (Lt(e))
    return bn ? bn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Yo ? "-0" : t;
}
var Jo = /\s/;
function Zo(e) {
  for (var t = e.length; t-- && Jo.test(e.charAt(t)); )
    ;
  return t;
}
var es = /^\s+/;
function ts(e) {
  return e && e.slice(0, Zo(e) + 1).replace(es, "");
}
var wn = 0 / 0, rs = /^[-+]0x[0-9a-f]+$/i, ns = /^0b[01]+$/i, is = /^0o[0-7]+$/i, as = parseInt;
function cr(e) {
  if (typeof e == "number")
    return e;
  if (Lt(e))
    return wn;
  if (ne(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ne(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ts(e);
  var r = ns.test(e);
  return r || is.test(e) ? as(e.slice(2), r ? 2 : 8) : rs.test(e) ? wn : +e;
}
var Sn = 1 / 0, os = 17976931348623157e292;
function ss(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = cr(e), e === Sn || e === -Sn) {
    var t = e < 0 ? -1 : 1;
    return t * os;
  }
  return e === e ? e : 0;
}
function jr(e) {
  var t = ss(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ls = oe["__core-js_shared__"];
const tr = ls;
var On = function() {
  var e = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function us(e) {
  return !!On && On in e;
}
var cs = Function.prototype, fs = cs.toString;
function Le(e) {
  if (e != null) {
    try {
      return fs.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ds = /[\\^$.*+?()[\]{}|]/g, ps = /^\[object .+?Constructor\]$/, hs = Function.prototype, vs = Object.prototype, ms = hs.toString, gs = vs.hasOwnProperty, ys = RegExp(
  "^" + ms.call(gs).replace(ds, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bs(e) {
  if (!ne(e) || us(e))
    return false;
  var t = li(e) ? ys : ps;
  return t.test(Le(e));
}
function ws(e, t) {
  return e == null ? void 0 : e[t];
}
function ke(e, t) {
  var r = ws(e, t);
  return bs(r) ? r : void 0;
}
var Ss = ke(oe, "WeakMap");
const fr = Ss;
var Os = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const $n = Os;
function $s(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
function di(e, t, r) {
  t == "__proto__" && $n ? $n(e, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e[t] = r;
}
function Br(e, t) {
  return e === t || e !== e && t !== t;
}
var Es = Object.prototype, _s = Es.hasOwnProperty;
function xs(e, t, r) {
  var n = e[t];
  (!(_s.call(e, t) && Br(n, r)) || r === void 0 && !(t in e)) && di(e, t, r);
}
var Ts = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, As = /^\w*$/;
function Fr(e, t) {
  if (N(e))
    return false;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Lt(e) ? true : As.test(e) || !Ts.test(e) || t != null && e in Object(t);
}
var Ps = ke(Object, "create");
const lt = Ps;
function Is() {
  this.__data__ = lt ? lt(null) : {}, this.size = 0;
}
function Cs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ds = "__lodash_hash_undefined__", js = Object.prototype, Bs = js.hasOwnProperty;
function Fs(e) {
  var t = this.__data__;
  if (lt) {
    var r = t[e];
    return r === Ds ? void 0 : r;
  }
  return Bs.call(t, e) ? t[e] : void 0;
}
var qs = Object.prototype, Rs = qs.hasOwnProperty;
function Ls(e) {
  var t = this.__data__;
  return lt ? t[e] !== void 0 : Rs.call(t, e);
}
var ks = "__lodash_hash_undefined__";
function Ms(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lt && t === void 0 ? ks : t, this;
}
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = Is;
Fe.prototype.delete = Cs;
Fe.prototype.get = Fs;
Fe.prototype.has = Ls;
Fe.prototype.set = Ms;
function Ns() {
  this.__data__ = [], this.size = 0;
}
function Mt(e, t) {
  for (var r = e.length; r--; )
    if (Br(e[r][0], t))
      return r;
  return -1;
}
var Vs = Array.prototype, Hs = Vs.splice;
function Us(e) {
  var t = this.__data__, r = Mt(t, e);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : Hs.call(t, r, 1), --this.size, true;
}
function Ws(e) {
  var t = this.__data__, r = Mt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function zs(e) {
  return Mt(this.__data__, e) > -1;
}
function Gs(e, t) {
  var r = this.__data__, n = Mt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function he(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
he.prototype.clear = Ns;
he.prototype.delete = Us;
he.prototype.get = Ws;
he.prototype.has = zs;
he.prototype.set = Gs;
var Ks = ke(oe, "Map");
const ut = Ks;
function Xs() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (ut || he)(),
    string: new Fe()
  };
}
function Qs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Nt(e, t) {
  var r = e.__data__;
  return Qs(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ys(e) {
  var t = Nt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Js(e) {
  return Nt(this, e).get(e);
}
function Zs(e) {
  return Nt(this, e).has(e);
}
function el(e, t) {
  var r = Nt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = Xs;
ve.prototype.delete = Ys;
ve.prototype.get = Js;
ve.prototype.has = Zs;
ve.prototype.set = el;
var tl = "Expected a function";
function qr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(tl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (qr.Cache || ve)(), r;
}
qr.Cache = ve;
var rl = 500;
function nl(e) {
  var t = qr(e, function(n) {
    return r.size === rl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var il = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, al = /\\(\\)?/g, ol = nl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(il, function(r, n, i, a) {
    t.push(i ? a.replace(al, "$1") : n || r);
  }), t;
});
const sl = ol;
function Rr(e) {
  return e == null ? "" : kt(e);
}
function Lr(e, t) {
  return N(e) ? e : Fr(e, t) ? [e] : sl(Rr(e));
}
var ll = 1 / 0;
function pt(e) {
  if (typeof e == "string" || Lt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ll ? "-0" : t;
}
function pi(e, t) {
  t = Lr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[pt(t[r++])];
  return r && r == n ? e : void 0;
}
function kr(e, t, r) {
  var n = e == null ? void 0 : pi(e, t);
  return n === void 0 ? r : n;
}
function ul(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function hi(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function cl() {
  this.__data__ = new he(), this.size = 0;
}
function fl(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function dl(e) {
  return this.__data__.get(e);
}
function pl(e) {
  return this.__data__.has(e);
}
var hl = 200;
function vl(e, t) {
  var r = this.__data__;
  if (r instanceof he) {
    var n = r.__data__;
    if (!ut || n.length < hl - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function le(e) {
  var t = this.__data__ = new he(e);
  this.size = t.size;
}
le.prototype.clear = cl;
le.prototype.delete = fl;
le.prototype.get = dl;
le.prototype.has = pl;
le.prototype.set = vl;
function vi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function ml() {
  return [];
}
var gl = Object.prototype, yl = gl.propertyIsEnumerable, En = Object.getOwnPropertySymbols, bl = En ? function(e) {
  return e == null ? [] : (e = Object(e), vi(En(e), function(t) {
    return yl.call(e, t);
  }));
} : ml;
const wl = bl;
function Sl(e, t, r) {
  var n = t(e);
  return N(e) ? n : ul(n, r(e));
}
function _n(e) {
  return Sl(e, Rt, wl);
}
var Ol = ke(oe, "DataView");
const dr = Ol;
var $l = ke(oe, "Promise");
const pr = $l;
var El = ke(oe, "Set");
const hr = El;
var xn = "[object Map]", _l = "[object Object]", Tn = "[object Promise]", An = "[object Set]", Pn = "[object WeakMap]", In = "[object DataView]", xl = Le(dr), Tl = Le(ut), Al = Le(pr), Pl = Le(hr), Il = Le(fr), De = _e;
(dr && De(new dr(new ArrayBuffer(1))) != In || ut && De(new ut()) != xn || pr && De(pr.resolve()) != Tn || hr && De(new hr()) != An || fr && De(new fr()) != Pn) && (De = function(e) {
  var t = _e(e), r = t == _l ? e.constructor : void 0, n = r ? Le(r) : "";
  if (n)
    switch (n) {
      case xl:
        return In;
      case Tl:
        return xn;
      case Al:
        return Tn;
      case Pl:
        return An;
      case Il:
        return Pn;
    }
  return t;
});
const Cn = De;
var Cl = oe.Uint8Array;
const Dn = Cl;
var Dl = "__lodash_hash_undefined__";
function jl(e) {
  return this.__data__.set(e, Dl), this;
}
function Bl(e) {
  return this.__data__.has(e);
}
function It(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
It.prototype.add = It.prototype.push = jl;
It.prototype.has = Bl;
function Fl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return true;
  return false;
}
function ql(e, t) {
  return e.has(t);
}
var Rl = 1, Ll = 2;
function mi(e, t, r, n, i, a) {
  var o = r & Rl, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return false;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = true, d = r & Ll ? new It() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var v = e[f], b = t[f];
    if (n)
      var w = o ? n(b, v, f, t, e, a) : n(v, b, f, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      p = false;
      break;
    }
    if (d) {
      if (!Fl(t, function(T, A) {
        if (!ql(d, A) && (v === T || i(v, T, r, n, a)))
          return d.push(A);
      })) {
        p = false;
        break;
      }
    } else if (!(v === b || i(v, b, r, n, a))) {
      p = false;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
function kl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Ml(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Nl = 1, Vl = 2, Hl = "[object Boolean]", Ul = "[object Date]", Wl = "[object Error]", zl = "[object Map]", Gl = "[object Number]", Kl = "[object RegExp]", Xl = "[object Set]", Ql = "[object String]", Yl = "[object Symbol]", Jl = "[object ArrayBuffer]", Zl = "[object DataView]", jn = we ? we.prototype : void 0, rr = jn ? jn.valueOf : void 0;
function eu(e, t, r, n, i, a, o) {
  switch (r) {
    case Zl:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
      e = e.buffer, t = t.buffer;
    case Jl:
      return !(e.byteLength != t.byteLength || !a(new Dn(e), new Dn(t)));
    case Hl:
    case Ul:
    case Gl:
      return Br(+e, +t);
    case Wl:
      return e.name == t.name && e.message == t.message;
    case Kl:
    case Ql:
      return e == t + "";
    case zl:
      var s = kl;
    case Xl:
      var l = n & Nl;
      if (s || (s = Ml), e.size != t.size && !l)
        return false;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Vl, o.set(e, t);
      var c = mi(s(e), s(t), n, i, a, o);
      return o.delete(e), c;
    case Yl:
      if (rr)
        return rr.call(e) == rr.call(t);
  }
  return false;
}
var tu = 1, ru = Object.prototype, nu = ru.hasOwnProperty;
function iu(e, t, r, n, i, a) {
  var o = r & tu, s = _n(e), l = s.length, u = _n(t), c = u.length;
  if (l != c && !o)
    return false;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(o ? p in t : nu.call(t, p)))
      return false;
  }
  var d = a.get(e), v = a.get(t);
  if (d && v)
    return d == t && v == e;
  var b = true;
  a.set(e, t), a.set(t, e);
  for (var w = o; ++f < l; ) {
    p = s[f];
    var T = e[p], A = t[p];
    if (n)
      var P = o ? n(A, T, p, t, e, a) : n(T, A, p, e, t, a);
    if (!(P === void 0 ? T === A || i(T, A, r, n, a) : P)) {
      b = false;
      break;
    }
    w || (w = p == "constructor");
  }
  if (b && !w) {
    var E = e.constructor, O = t.constructor;
    E != O && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof O == "function" && O instanceof O) && (b = false);
  }
  return a.delete(e), a.delete(t), b;
}
var au = 1, Bn = "[object Arguments]", Fn = "[object Array]", St = "[object Object]", ou = Object.prototype, qn = ou.hasOwnProperty;
function su(e, t, r, n, i, a) {
  var o = N(e), s = N(t), l = o ? Fn : Cn(e), u = s ? Fn : Cn(t);
  l = l == Bn ? St : l, u = u == Bn ? St : u;
  var c = l == St, f = u == St, p = l == u;
  if (p && ur(e)) {
    if (!ur(t))
      return false;
    o = true, c = false;
  }
  if (p && !c)
    return a || (a = new le()), o || si(e) ? mi(e, t, r, n, i, a) : eu(e, t, l, r, n, i, a);
  if (!(r & au)) {
    var d = c && qn.call(e, "__wrapped__"), v = f && qn.call(t, "__wrapped__");
    if (d || v) {
      var b = d ? e.value() : e, w = v ? t.value() : t;
      return a || (a = new le()), i(b, w, r, n, a);
    }
  }
  return p ? (a || (a = new le()), iu(e, t, r, n, i, a)) : false;
}
function Vt(e, t, r, n, i) {
  return e === t ? true : e == null || t == null || !Se(e) && !Se(t) ? e !== e && t !== t : su(e, t, r, n, Vt, i);
}
var lu = 1, uu = 2;
function cu(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return false;
  }
  for (; ++i < a; ) {
    s = r[i];
    var l = s[0], u = e[l], c = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(l in e))
        return false;
    } else {
      var f = new le();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Vt(c, u, lu | uu, n, f) : p))
        return false;
    }
  }
  return true;
}
function gi(e) {
  return e === e && !ne(e);
}
function fu(e) {
  for (var t = Rt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, gi(i)];
  }
  return t;
}
function yi(e, t) {
  return function(r) {
    return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function du(e) {
  var t = fu(e);
  return t.length == 1 && t[0][2] ? yi(t[0][0], t[0][1]) : function(r) {
    return r === e || cu(r, e, t);
  };
}
function pu(e, t) {
  return e != null && t in Object(e);
}
function bi(e, t, r) {
  t = Lr(t, e);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = pt(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Ir(i) && Pr(o, i) && (N(e) || ii(e)));
}
function hu(e, t) {
  return e != null && bi(e, t, pu);
}
var vu = 1, mu = 2;
function gu(e, t) {
  return Fr(e) && gi(t) ? yi(pt(e), t) : function(r) {
    var n = kr(r, e);
    return n === void 0 && n === t ? hu(r, e) : Vt(t, n, vu | mu);
  };
}
function yu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function bu(e) {
  return function(t) {
    return pi(t, e);
  };
}
function wu(e) {
  return Fr(e) ? yu(pt(e)) : bu(e);
}
function ht(e) {
  return typeof e == "function" ? e : e == null ? ui : typeof e == "object" ? N(e) ? gu(e[0], e[1]) : du(e) : wu(e);
}
var Su = function() {
  return oe.Date.now();
};
const nr = Su;
var Ou = "Expected a function", $u = Math.max, Eu = Math.min;
function _u(e, t, r) {
  var n, i, a, o, s, l, u = 0, c = false, f = false, p = true;
  if (typeof e != "function")
    throw new TypeError(Ou);
  t = cr(t) || 0, ne(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? $u(cr(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function d(h2) {
    var g = n, S = i;
    return n = i = void 0, u = h2, o = e.apply(S, g), o;
  }
  function v(h2) {
    return u = h2, s = setTimeout(T, t), c ? d(h2) : o;
  }
  function b(h2) {
    var g = h2 - l, S = h2 - u, _ = t - g;
    return f ? Eu(_, a - S) : _;
  }
  function w(h2) {
    var g = h2 - l, S = h2 - u;
    return l === void 0 || g >= t || g < 0 || f && S >= a;
  }
  function T() {
    var h2 = nr();
    if (w(h2))
      return A(h2);
    s = setTimeout(T, b(h2));
  }
  function A(h2) {
    return s = void 0, p && n ? d(h2) : (n = i = void 0, o);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? o : A(nr());
  }
  function O() {
    var h2 = nr(), g = w(h2);
    if (n = arguments, i = this, l = h2, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(T, t), d(l);
    }
    return s === void 0 && (s = setTimeout(T, t)), o;
  }
  return O.cancel = P, O.flush = E, O;
}
function xu(e, t, r) {
  e = Rr(e), t = kt(t);
  var n = e.length;
  r = r === void 0 ? n : hi(jr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Tu(e, t) {
  var r = [];
  return Dr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function Au(e, t) {
  var r = N(e) ? vi : Tu;
  return r(e, ht(t));
}
function Pu(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!qt(t)) {
      var a = ht(r);
      t = Rt(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var Iu = Math.max;
function Cu(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : jr(r);
  return i < 0 && (i = Iu(n + i, 0)), $s(e, ht(t), i);
}
var Du = Pu(Cu);
const ju = Du;
function wi(e) {
  return e && e.length ? e[0] : void 0;
}
function Bu(e, t) {
  var r = -1, n = qt(e) ? Array(e.length) : [];
  return Dr(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
function Fu(e, t) {
  var r = N(e) ? fi : Bu;
  return r(e, ht(t));
}
function je(e, t) {
  return e && Cr(e, ci(t));
}
var qu = Object.prototype, Ru = qu.hasOwnProperty;
function Lu(e, t) {
  return e != null && Ru.call(e, t);
}
function Q(e, t) {
  return e != null && bi(e, t, Lu);
}
var ku = "[object String]";
function Ot(e) {
  return typeof e == "string" || !N(e) && Se(e) && _e(e) == ku;
}
var Mu = "[object Boolean]";
function Si(e) {
  return e === true || e === false || Se(e) && _e(e) == Mu;
}
function Rn(e, t) {
  return Vt(e, t);
}
function Oi(e, t) {
  var r = {};
  return t = ht(t), Cr(e, function(n, i, a) {
    di(r, i, t(n, i, a));
  }), r;
}
function Nu(e, t, r, n) {
  if (!ne(e))
    return e;
  t = Lr(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var l = pt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ne(c) ? c : Pr(t[i + 1]) ? [] : {});
    }
    xs(s, l, u), s = s[l];
  }
  return e;
}
function $i(e, t, r) {
  return e == null ? e : Nu(e, t, r);
}
function $t(e, t, r) {
  return e = Rr(e), r = r == null ? 0 : hi(jr(r), 0, e.length), t = kt(t), e.slice(r, r + t.length) == t;
}
const Ct = ref(0), vr = ref(1), F = ref({}), ue = ref(0), Oe = typeof window > "u";
function Vu(e, t, r) {
  Oe || window.addEventListener("popstate", Hu.bind(this)), Object.keys(t).length > 0 && Ct.value++, Vr(r), Ht(r.head), Hr(e);
  const n = Oe ? "" : location.href, i = Mr(
    n,
    r.head,
    e,
    t,
    {},
    vr.value,
    Ct.value
  );
  Ei(i);
}
function Hu(e) {
  !e.state || (F.value = e.state, ue.value = 0, Ht(F.value.head), Hr(F.value.html, F.value.rememberedState.scrollY));
}
function Mr(e, t, r, n, i, a, o) {
  const s = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: a,
    dynamicVisitId: o
  };
  return F.value = s, s;
}
function Uu(e) {
  Oe || window.history.pushState(e, "", e.url);
}
function Wu(e) {
  const t = Mr(
    e,
    JSON.parse(JSON.stringify(F.value.head)),
    F.value.html,
    F.value.dynamics,
    { ...F.value.rememberedState },
    F.value.pageVisitId,
    F.value.dynamicVisitId
  );
  Oe || window.history.replaceState(t, "", t.url);
}
function Ei(e) {
  Oe || window.history.replaceState(e, "", e.url);
}
const ir = ref(0);
function zu(e, t) {
  ir.value++;
  const r = e.request.responseURL;
  if (e.data.splade.lazy)
    return;
  e.data.splade.modal && ue.value++, Vr(e.data.splade), Ht(e.data.splade.head);
  const n = r === F.value.url;
  if (n && (t = true), e.data.splade.modal)
    return rc(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  ue.value = 0;
  let i = e.data.html, a = e.data.dynamics;
  const o = Object.keys(F.value.dynamics).length > 0, s = Object.keys(a).length > 0;
  t ? (s && je(a, (u, c) => {
    a[c] += `<!-- ${ir.value} -->`;
  }), (!s || !o) && (i += `<!-- ${ir.value} -->`)) : (s && Ct.value++, (!s || !o) && vr.value++), Hr(i, 0);
  const l = Mr(
    r,
    e.data.splade.head,
    i,
    a,
    F.value.rememberedState ? { ...F.value.rememberedState } : {},
    vr.value,
    Ct.value
  );
  t ? Ei(l) : Uu(l);
}
function Gu() {
  ue.value--, Ht(Xu(ue.value));
}
const _i = ref({}), xi = (e) => _i.value[e], Ku = (e) => Object.keys(xi.value[e]).length > 0, Ti = ref({}), Xu = (e) => Ti.value[e], Ai = ref({}), Qu = (e) => Ai.value[e], Ue = ref([]);
function Yu(e) {
  Ue.value.push(e);
}
const Ju = computed(() => Xo(Ue.value));
function Zu(e) {
  Ue.value[e].dismissed = true, Ue.value[e].html = null;
}
const Nr = ref(null);
function ec(e, t, r, n) {
  let i, a;
  const o = new Promise((s, l) => {
    i = s, a = l;
  });
  return Nr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, o;
}
function tc() {
  Nr.value = null;
}
const Pi = ref({});
function Vr(e) {
  Pi.value = e.shared ? e.shared : {}, Ai.value[ue.value] = e.flash ? e.flash : {}, Ti.value[ue.value] = e.head ? e.head : {}, zo(e.toasts ? e.toasts : [], (t) => {
    Ue.value.push(t);
  }), _i.value[ue.value] = e.errors ? e.errors : {};
}
const Ii = ref(() => {
}), Ci = ref(() => {
}), Di = ref(() => {
}), ji = ref(() => {
});
function Ht(e) {
  Ii.value(e);
}
function Hr(e, t) {
  Ci.value(e, t);
}
function rc(e, t) {
  Di.value(e, t);
}
function nc(e) {
  ji.value(e);
}
const Bi = ref({});
function Fi(e, t, r) {
  Bi.value[e] = t, r && ic(e, t);
}
function ic(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function ac(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Bi.value[e];
}
function Et(e, t) {
  Oe || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Xe(e, t, r, n, i) {
  Oe || Fi("scrollY", window.scrollY), Et("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = Yn({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": true,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (o) => {
      r instanceof FormData && (o.percentage = Math.round(o.loaded / o.total * 100), Et("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: o }));
    }
  });
  return a.then((o) => {
    zu(o, i), Et("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
  }).catch((o) => {
    Et("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: o });
    const s = o.response.data.splade;
    s && (s.lazy || Vr(s)), o.response.status != 422 && nc(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function qi(e) {
  return Xe(e, "GET", {}, {}, true);
}
function oc(e) {
  return Xe(e, "GET", {}, {}, false);
}
function sc(e) {
  return Xe(e, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}
function lc(e) {
  return Xe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}
function uc(e, t) {
  return Xe(e, "GET", {}, { "X-Splade-Lazy": t }, false);
}
function cc() {
  return qi(F.value.url);
}
const m = {
  init: Vu,
  replace: qi,
  visit: oc,
  modal: sc,
  slideover: lc,
  refresh: cc,
  request: Xe,
  lazy: uc,
  replaceUrlOfCurrentPage: Wu,
  htmlForDynamicComponent(e) {
    return F.value.dynamics[e];
  },
  setOnHead(e) {
    Ii.value = e;
  },
  setOnHtml(e) {
    Ci.value = e;
  },
  setOnModal(e) {
    Di.value = e;
  },
  setOnServerError(e) {
    ji.value = e;
  },
  hasValidationErrors: Ku,
  validationErrors: xi,
  sharedData: Pi,
  flashData: Qu,
  toasts: Ue,
  toastsReversed: Ju,
  confirmModal: Nr,
  confirm: ec,
  clearConfirmModal: tc,
  pushToast: Yu,
  dismissToast: Zu,
  restore: ac,
  remember: Fi,
  popStack: Gu,
  currentStack: ue,
  pageVisitId: computed(() => F.value.pageVisitId),
  dynamicVisitId: computed(() => F.value.dynamicVisitId),
  isSsr: Oe
}, se = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = ref(null);
    function n() {
      r.value = h({
        template: t.html
      });
    }
    return watch(() => t.html, n, { immediate: true }), (i, a) => e.html ? (openBlock(), createBlock(unref(r), { key: 0 })) : createCommentVNode("", true);
  }
}, fc = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = ref(null);
    function i() {
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(s) {
      s.keyCode === 27 && o();
    }
    function o() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    return onMounted(() => i()), (s, l) => (openBlock(), createElementBlock("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: o
    }, [
      createElementVNode("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, dc = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: false,
      default: ""
    },
    components: {
      type: String,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    provide("stack", 0);
    const r = ref(), n = ref([]), i = ref(null), a = inject("$spladeOptions") || {}, o = computed(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function s() {
      i.value = null;
    }
    function l(f) {
      n[f] = null, m.popStack();
    }
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      je(f, (d, v) => {
        p[v] = d;
      });
    }
    return m.setOnHead((f) => {
      m.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), m.setOnHtml((f, p) => {
      n.value = [], r.value = f, nextTick(() => {
        m.isSsr || window.scrollTo(0, p), a.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(v) {
            v.preventDefault(), m.visit(d.href);
          }));
        });
      });
    }), m.setOnModal(function(f, p) {
      n.value[m.currentStack.value] = { html: f, type: p };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), (f, p) => (openBlock(), createElementBlock("div", null, [
      unref(m).isSsr ? (openBlock(), createBlock(se, {
        key: `visit.${unref(m).pageVisitId.value}`,
        style: normalizeStyle(unref(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (openBlock(), createBlock(KeepAlive, {
        key: 0,
        max: unref(a).max_keep_alive
      }, [
        (openBlock(), createBlock(se, {
          key: `visit.${unref(m).pageVisitId.value}`,
          style: normalizeStyle(unref(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      createVNode(se, { html: e.components }, null, 8, ["html"]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m).currentStack.value, (d) => (openBlock(), createBlock(se, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": unref(m).currentStack.value === d,
        onClose: (v) => l(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (openBlock(), createBlock(fc, {
        key: 2,
        html: i.value,
        onClose: s
      }, null, 8, ["html"])) : createCommentVNode("", true)
    ]));
  }
};
function Xd(e) {
  return () => h(dc, e);
}
function Y(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n;
}
var Dt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Dt || {}), be = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(be || {});
function z({ visible: e = true, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let o = pc(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return ar(s);
  if (t & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return Y(l, { [0]() {
      return null;
    }, [1]() {
      return ar({ ...i, props: { ...o, hidden: true, style: { display: "none" } } });
    } });
  }
  return ar(s);
}
function ar({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: o, ...s } = Li(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = false, f = [];
    for (let [p, d] of Object.entries(n))
      typeof d == "boolean" && (c = true), d === true && f.push(p);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (o === "template") {
    if (l = Ri(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!hc(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return cloneVNode(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return h(o, Object.assign({}, s, u), l);
}
function Ri(e) {
  return e.flatMap((t) => t.type === Fragment ? Ri(t.children) : [t]);
}
function pc(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...a) {
      let o = r[n];
      for (let s of o) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        s(i, ...a);
      }
    } });
  return t;
}
function Li(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function hc(e) {
  return e == null ? false : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let vc = 0;
function mc() {
  return ++vc;
}
function Me() {
  return mc();
}
var ki = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ki || {});
function pe(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Mi = Symbol("Context");
var qe = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qe || {});
function gc() {
  return Ur() !== null;
}
function Ur() {
  return inject(Mi, null);
}
function yc(e) {
  provide(Mi, e);
}
const Ut = typeof window > "u" || typeof document > "u";
function Qe(e) {
  if (Ut)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = pe(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let mr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ct || {}), Ni = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ni || {}), bc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(bc || {});
function wc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(mr));
}
var Vi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Vi || {});
function Sc(e, t = 0) {
  var r;
  return e === ((r = Qe(e)) == null ? void 0 : r.body) ? false : Y(t, { [0]() {
    return e.matches(mr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(mr))
        return true;
      n = n.parentElement;
    }
    return false;
  } });
}
function at(e) {
  e == null || e.focus({ preventScroll: true });
}
let Oc = ["textarea", "input"].join(",");
function $c(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Oc)) != null ? r : false;
}
function Ec(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function gr(e, t, r = true, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, o = Array.isArray(e) ? r ? Ec(e) : e : wc(e);
  n = n != null ? n : a.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: true } : {}, c = 0, f = o.length, p;
  do {
    if (c >= f || c + f <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + f) % f;
    else {
      if (d < 0)
        return 3;
      if (d >= f)
        return 1;
    }
    p = o[d], p == null || p.focus(u), c += s;
  } while (p !== a.activeElement);
  return t & 6 && $c(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function or(e, t, r) {
  Ut || watchEffect((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function _c(e, t, r = computed(() => true)) {
  function n(a, o) {
    if (!r.value || a.defaultPrevented)
      return;
    let s = o(a);
    if (s === null || !s.ownerDocument.documentElement.contains(s))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : pe(u);
      if (c != null && c.contains(s))
        return;
    }
    return !Sc(s, Vi.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s);
  }
  let i = ref(null);
  or("mousedown", (a) => {
    r.value && (i.value = a.target);
  }, true), or("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, true), or("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var jt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(jt || {});
let yr = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function xc(e, t, r) {
  Ut || watchEffect((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var br = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(br || {});
function Tc() {
  let e = ref(0);
  return xc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Hi(e, t, r, n) {
  Ut || watchEffect((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Ac(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Ui = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ui || {});
let rt = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ref(null);
  n({ el: i, $el: i });
  let a = computed(() => Qe(i));
  Pc({ ownerDocument: a }, computed(() => Boolean(e.features & 16)));
  let o = Ic({ ownerDocument: a, container: i, initialFocus: computed(() => e.initialFocus) }, computed(() => Boolean(e.features & 2)));
  Cc({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: o }, computed(() => Boolean(e.features & 8)));
  let s = Tc();
  function l() {
    let u = pe(i);
    !u || Y(s.value, { [br.Forwards]: () => gr(u, ct.First), [br.Backwards]: () => gr(u, ct.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return h(Fragment, [Boolean(f & 4) && h(yr, { as: "button", type: "button", onFocus: l, features: jt.Focusable }), z({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && h(yr, { as: "button", type: "button", onFocus: l, features: jt.Focusable })]);
  };
} }), { features: Ui });
function Pc({ ownerDocument: e }, t) {
  let r = ref(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (at(r.value), r.value = null);
  }
  onMounted(() => {
    watch(t, (a, o) => {
      a !== o && (a ? n() : i());
    }, { immediate: true });
  }), onUnmounted(i);
}
function Ic({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = ref(null), a = ref(false);
  return onMounted(() => a.value = true), onUnmounted(() => a.value = false), onMounted(() => {
    watch([t, r, n], (o, s) => {
      if (o.every((u, c) => (s == null ? void 0 : s[c]) === u) || !n.value)
        return;
      let l = pe(t);
      !l || Ac(() => {
        var u, c;
        if (!a.value)
          return;
        let f = pe(r), p = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === p) {
            i.value = p;
            return;
          }
        } else if (l.contains(p)) {
          i.value = p;
          return;
        }
        f ? at(f) : gr(l, ct.First | ct.NoScroll) === Ni.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), i;
}
function Cc({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  Hi((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Dc(s, u) ? (n.value = u, at(u)) : (o.preventDefault(), o.stopPropagation(), at(l)) : at(n.value);
  }, true);
}
function Dc(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return true;
  return false;
}
let Ln = "body > *", He = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
function kn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function Mn(e) {
  let t = ye.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function jc(e, t = ref(true)) {
  watchEffect((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Qe(n);
    if (i) {
      He.add(n);
      for (let a of ye.keys())
        a.contains(n) && (Mn(a), ye.delete(a));
      i.querySelectorAll(Ln).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let o of He)
            if (a.contains(o))
              return;
          He.size === 1 && (ye.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), kn(a));
        }
      }), r(() => {
        if (He.delete(n), He.size > 0)
          i.querySelectorAll(Ln).forEach((a) => {
            if (a instanceof HTMLElement && !ye.has(a)) {
              for (let o of He)
                if (a.contains(o))
                  return;
              ye.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), kn(a);
            }
          });
        else
          for (let a of ye.keys())
            Mn(a), ye.delete(a);
      });
    }
  });
}
let Wi = Symbol("ForcePortalRootContext");
function Bc() {
  return inject(Wi, false);
}
let wr = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(e, { slots: t, attrs: r }) {
  return provide(Wi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Fc(e) {
  let t = Qe(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let zi = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = ref(null), i = computed(() => Qe(n)), a = Bc(), o = inject(Gi, null), s = ref(a === true || o == null ? Fc(n.value) : o.resolveTarget());
  return watchEffect(() => {
    a || o != null && (s.value = o.resolveTarget());
  }), onUnmounted(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return h(Teleport, { to: s.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Gi = Symbol("PortalGroupContext"), qc = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = reactive({ resolveTarget() {
    return e.target;
  } });
  return provide(Gi, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ki = Symbol("StackContext");
var Sr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Sr || {});
function Rc() {
  return inject(Ki, () => {
  });
}
function Lc({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Rc();
  function a(...o) {
    n == null || n(...o), i(...o);
  }
  onMounted(() => {
    watch(t, (o, s) => {
      o ? a(0, e, r) : s === true && a(1, e, r);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    t.value && a(1, e, r);
  }), provide(Ki, a);
}
let Xi = Symbol("DescriptionContext");
function kc() {
  let e = inject(Xi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Mc({ slot: e = ref({}), name: t = "Description", props: r = {} } = {}) {
  let n = ref([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return provide(Xi, { register: i, slot: e, name: t, props: r }), computed(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = kc(), i = `headlessui-description-${Me()}`;
  return onMounted(() => onUnmounted(n.register(i))), () => {
    let { name: a = "Description", slot: o = ref({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: unref(p) }), {}), id: i };
    return z({ ourProps: u, theirProps: l, slot: o.value, attrs: t, slots: r, name: a });
  };
} });
function Wr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, a, o) {
    return n.addEventListener(i, a, o), r.add(() => n.removeEventListener(i, a, o));
  }, requestAnimationFrame(...n) {
    let i = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(i));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let i = setTimeout(...n);
    r.add(() => clearTimeout(i));
  }, add(n) {
    e.push(n);
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function Nc() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Vc = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vc || {});
let Or = Symbol("DialogContext");
function vt(e) {
  let t = inject(Or, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, vt), r;
  }
  return t;
}
let _t = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", zr = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: _t }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let o = ref(false);
  onMounted(() => {
    o.value = true;
  });
  let s = ref(0), l = Ur(), u = computed(() => e.open === _t && l !== null ? Y(l.value, { [qe.Open]: true, [qe.Closed]: false }) : e.open), c = ref(/* @__PURE__ */ new Set()), f = ref(null), p = ref(null), d = computed(() => Qe(f));
  if (i({ el: f, $el: f }), !(e.open !== _t || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === _t ? void 0 : e.open}`);
  let v = computed(() => o.value && u.value ? 0 : 1), b = computed(() => v.value === 0), w = computed(() => s.value > 1), T = inject(Or, null) !== null, A = computed(() => w.value ? "parent" : "leaf");
  jc(f, computed(() => w.value ? b.value : false)), Lc({ type: "Dialog", enabled: computed(() => v.value === 0), element: f, onUpdate: (g, S, _) => {
    if (S === "Dialog")
      return Y(g, { [Sr.Add]() {
        c.value.add(_), s.value += 1;
      }, [Sr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Mc({ name: "DialogDescription", slot: computed(() => ({ open: u.value })) }), E = `headlessui-dialog-${Me()}`, O = ref(null), h$1 = { titleId: O, panelRef: ref(null), dialogState: v, setTitleId(g) {
    O.value !== g && (O.value = g);
  }, close() {
    t("close", false);
  } };
  return provide(Or, h$1), _c(() => {
    var g, S, _;
    return [...Array.from((S = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(pe(p)) || h$1.panelRef.value && x.contains(h$1.panelRef.value))), (_ = h$1.panelRef.value) != null ? _ : f.value];
  }, (g, S) => {
    h$1.close(), nextTick(() => S == null ? void 0 : S.focus());
  }, computed(() => v.value === 0 && !w.value)), Hi((a = d.value) == null ? void 0 : a.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === ki.Escape && v.value === 0 && (w.value || (g.preventDefault(), g.stopPropagation(), h$1.close()));
  }), watchEffect((g) => {
    var S;
    if (v.value !== 0 || T)
      return;
    let _ = d.value;
    if (!_)
      return;
    let x = Wr();
    function $(q, V, L) {
      let k = q.style.getPropertyValue(V);
      return Object.assign(q.style, { [V]: L }), x.add(() => {
        Object.assign(q.style, { [V]: k });
      });
    }
    let C = _ == null ? void 0 : _.documentElement, B = ((S = _.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), B > 0) {
      let q = C.clientWidth - C.offsetWidth, V = B - q;
      $(C, "paddingRight", `${V}px`);
    }
    if (Nc()) {
      let q = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${q}px`), $(C, "width", "100%"), x.add(() => window.scrollTo(0, q));
    }
    g(x.dispose);
  }), watchEffect((g) => {
    if (v.value !== 0)
      return;
    let S = pe(f);
    if (!S)
      return;
    let _ = new IntersectionObserver((x) => {
      for (let $ of x)
        $.boundingClientRect.x === 0 && $.boundingClientRect.y === 0 && $.boundingClientRect.width === 0 && $.boundingClientRect.height === 0 && h$1.close();
    });
    _.observe(S), g(() => _.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? true : void 0, "aria-labelledby": O.value, "aria-describedby": P.value }, { open: S, initialFocus: _, ...x } = e, $ = { open: v.value === 0 };
    return h(wr, { force: true }, () => [h(zi, () => h(qc, { target: f.value }, () => h(wr, { force: false }, () => h(rt, { initialFocus: _, containers: c, features: b.value ? Y(A.value, { parent: rt.features.RestoreFocus, leaf: rt.features.All & ~rt.features.FocusLock }) : rt.features.None }, () => z({ ourProps: g, theirProps: x, slot: $, attrs: r, slots: n, visible: v.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), h(yr, { features: jt.Hidden, ref: p })]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = vt("DialogOverlay"), i = `headlessui-dialog-overlay-${Me()}`;
  function a(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), n.close());
  }
  return () => z({ ourProps: { id: i, "aria-hidden": true, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = vt("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Me()}`, o = ref(null);
  return n({ el: o, $el: o }), onMounted(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: a, ref: o, "aria-hidden": true };
    return h(wr, { force: true }, () => h(zi, () => z({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Gr = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = vt("DialogPanel"), a = `headlessui-dialog-panel-${Me()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function o(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: a, ref: i.panelRef, onClick: o };
    return z({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = vt("DialogTitle"), i = `headlessui-dialog-title-${Me()}`;
  return onMounted(() => {
    n.setTitleId(i), onUnmounted(() => n.setTitleId(null));
  }), () => z({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Hc(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function sr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function xt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var $r = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))($r || {});
function Uc(e, t) {
  let r = Wr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Nn(e, t, r, n, i, a) {
  let o = Wr(), s = a !== void 0 ? Hc(a) : () => {
  };
  return xt(e, ...i), sr(e, ...t, ...r), o.nextFrame(() => {
    xt(e, ...r), sr(e, ...n), o.add(Uc(e, (l) => (xt(e, ...n, ...t), sr(e, ...i), s(l))));
  }), o.add(() => xt(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function Ie(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Kr = Symbol("TransitionContext");
var Wc = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Wc || {});
function zc() {
  return inject(Kr, null) !== null;
}
function Gc() {
  let e = inject(Kr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Kc() {
  let e = inject(Xr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Xr = Symbol("NestingContext");
function Wt(e) {
  return "children" in e ? Wt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Qi(e) {
  let t = ref([]), r = ref(false);
  onMounted(() => r.value = true), onUnmounted(() => r.value = false);
  function n(a, o = be.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (Y(o, { [be.Unmount]() {
      t.value.splice(s, 1);
    }, [be.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Wt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, be.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Yi = Dt.RenderStrategy, Ye = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!zc() && gc())
    return () => h(Je, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = ref(null), o = ref("visible"), s = computed(() => e.unmount ? be.Unmount : be.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = Gc(), { register: c, unregister: f } = Kc(), p = { value: true }, d = Me(), v = { value: false }, b = Qi(() => {
    v.value || (o.value = "hidden", f(d), t("afterLeave"));
  });
  onMounted(() => {
    let S = c(d);
    onUnmounted(S);
  }), watchEffect(() => {
    if (s.value === be.Hidden && !!d) {
      if (l && o.value !== "visible") {
        o.value = "visible";
        return;
      }
      Y(o.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let w = Ie(e.enter), T = Ie(e.enterFrom), A = Ie(e.enterTo), P = Ie(e.entered), E = Ie(e.leave), O = Ie(e.leaveFrom), h$1 = Ie(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (o.value === "visible") {
        let S = pe(a);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(S) {
    let _ = p.value && !u.value, x = pe(a);
    !x || !(x instanceof HTMLElement) || _ || (v.value = true, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? Nn(x, w, T, A, P, ($) => {
      v.value = false, $ === $r.Finished && t("afterEnter");
    }) : Nn(x, E, O, h$1, P, ($) => {
      v.value = false, $ === $r.Finished && (Wt(b) || (o.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return onMounted(() => {
    watch([l], (S, _, x) => {
      g(x), p.value = false;
    }, { immediate: true });
  }), provide(Xr, b), yc(computed(() => Y(o.value, { visible: qe.Open, hidden: qe.Closed }))), () => {
    let { appear: S, show: _, enter: x, enterFrom: $, enterTo: C, entered: B, leave: q, leaveFrom: V, leaveTo: L, ...k } = e;
    return z({ theirProps: k, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Yi, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), Xc = Ye, Je = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Ur(), a = computed(() => e.show === null && i !== null ? Y(i.value, { [qe.Open]: true, [qe.Closed]: false }) : e.show);
  watchEffect(() => {
    if (![true, false].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = ref(a.value ? "visible" : "hidden"), s = Qi(() => {
    o.value = "hidden";
  }), l = ref(true), u = { show: a, appear: computed(() => e.appear || !l.value) };
  return onMounted(() => {
    watchEffect(() => {
      l.value = false, a.value ? o.value = "visible" : Wt(s) || (o.value = "hidden");
    });
  }), provide(Xr, s), provide(Kr, u), () => {
    let c = Li(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return z({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [h(Xc, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Yi, visible: o.value === "visible", name: "Transition" });
  };
} });
const Qc = {
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: ""
    },
    defaultText: {
      type: String,
      required: false,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: false,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    hasConfirmModal: () => !!m.confirmModal.value,
    title: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.title ? m.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.text ? m.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmButton ? m.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.cancelButton ? m.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = true);
    }
  },
  methods: {
    cancel() {
      m.confirmModal.value.rejectPromise(), this.setIsOpen(false);
    },
    confirm() {
      m.confirmModal.value.resolvePromise(), this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      m.clearConfirmModal();
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      Dialog: zr,
      DialogPanel: Gr,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Yc = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: false
    },
    remember: {
      type: String,
      default: null,
      required: false
    },
    localStorage: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: {}
    };
  },
  mounted() {
    if (this.remember) {
      let e = m.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && m.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return kr(e.values, r);
        },
        set(t, r, n) {
          $i(e.values, r, n);
        }
      })
    );
  }
}, Jc = {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    request: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: false
    };
  },
  mounted() {
    this.$nextTick(this.performRequest);
  },
  methods: {
    performRequest() {
      this.processing = true;
      const e = {
        url: this.url,
        method: this.method,
        headers: {
          Accept: this.acceptHeader
        }
      };
      Object.keys(this.request).length > 0 && (e.data = this.request), Yn(e).then((t) => {
        this.response = t.data, this.processing = false;
      }).catch(() => {
        this.processing = false;
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, Zc = {
  render() {
    return this.$slots.default({
      Dialog: zr,
      DialogPanel: Gr
    });
  }
}, Ji = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    closeOnEscape: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = ref(null), i = ref(null);
    return onMounted(() => {
      r.value = (a) => {
        a.target === n.value || n.value.contains(a.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (a) => {
        t.opened && a.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), onBeforeUnmount(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, o) => (openBlock(), createElementBlock("div", {
      ref_key: "root",
      ref: n
    }, [
      renderSlot(a.$slots, "default")
    ], 512));
  }
};
function X(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Re(e) {
  var t = X(e).Element;
  return e instanceof t || e instanceof Element;
}
function K(e) {
  var t = X(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qr(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = X(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Be = Math.max, Bt = Math.min, We = Math.round;
function Er() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Zi() {
  return !/^((?!chrome|android).)*safari/i.test(Er());
}
function ze(e, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && K(e) && (i = e.offsetWidth > 0 && We(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && We(n.height) / e.offsetHeight || 1);
  var o = Re(e) ? X(e) : window, s = o.visualViewport, l = !Zi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
  return {
    width: f,
    height: p,
    top: c,
    right: u + f,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Yr(e) {
  var t = X(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ef(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tf(e) {
  return e === X(e) || !K(e) ? Yr(e) : ef(e);
}
function ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xe(e) {
  return ((Re(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jr(e) {
  return ze(xe(e)).left + Yr(e).scrollLeft;
}
function ee(e) {
  return X(e).getComputedStyle(e);
}
function Zr(e) {
  var t = ee(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function rf(e) {
  var t = e.getBoundingClientRect(), r = We(t.width) / e.offsetWidth || 1, n = We(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function nf(e, t, r) {
  r === void 0 && (r = false);
  var n = K(t), i = K(t) && rf(t), a = xe(t), o = ze(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ie(t) !== "body" || Zr(a)) && (s = tf(t)), K(t) ? (l = ze(t, true), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Jr(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ea(e) {
  var t = ze(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function zt(e) {
  return ie(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qr(e) ? e.host : null) || xe(e);
}
function ta(e) {
  return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : K(e) && Zr(e) ? e : ta(zt(e));
}
function ot(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ta(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = X(n), o = i ? [a].concat(a.visualViewport || [], Zr(n) ? n : []) : n, s = t.concat(o);
  return i ? s : s.concat(ot(zt(o)));
}
function af(e) {
  return ["table", "td", "th"].indexOf(ie(e)) >= 0;
}
function Vn(e) {
  return !K(e) || ee(e).position === "fixed" ? null : e.offsetParent;
}
function of(e) {
  var t = /firefox/i.test(Er()), r = /Trident/i.test(Er());
  if (r && K(e)) {
    var n = ee(e);
    if (n.position === "fixed")
      return null;
  }
  var i = zt(e);
  for (Qr(i) && (i = i.host); K(i) && ["html", "body"].indexOf(ie(i)) < 0; ) {
    var a = ee(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Gt(e) {
  for (var t = X(e), r = Vn(e); r && af(r) && ee(r).position === "static"; )
    r = Vn(r);
  return r && (ie(r) === "html" || ie(r) === "body" && ee(r).position === "static") ? t : r || of(e) || t;
}
var J = "top", ae = "bottom", $e = "right", ce = "left", Kt = "auto", Xt = [J, ae, $e, ce], Ge = "start", ft = "end", sf = "clippingParents", ra = "viewport", nt = "popper", lf = "reference", Hn = /* @__PURE__ */ Xt.reduce(function(e, t) {
  return e.concat([t + "-" + Ge, t + "-" + ft]);
}, []), uf = /* @__PURE__ */ [].concat(Xt, [Kt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ge, t + "-" + ft]);
}, []), cf = "beforeRead", ff = "read", df = "afterRead", pf = "beforeMain", hf = "main", vf = "afterMain", mf = "beforeWrite", gf = "write", yf = "afterWrite", _r = [cf, ff, df, pf, hf, vf, mf, gf, yf];
function bf(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function wf(e) {
  var t = bf(e);
  return _r.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Sf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ge(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Ce = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Of = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Un = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $f(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Un).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ge(Ce, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ge(Ce, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          _r.indexOf(t.phase) < 0 && console.error(ge(Ce, t.name, '"phase"', "either " + _r.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ge(Ce, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ge(Ce, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ge(Ce, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ge(Ce, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Un.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ge(Of, String(t.name), n, n));
      });
    });
  });
}
function Ef(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), true;
  });
}
function fe(e) {
  return e.split("-")[0];
}
function _f(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function xf(e, t) {
  var r = X(e), n = xe(e), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = Zi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + Jr(e),
    y: l
  };
}
function Tf(e) {
  var t, r = xe(e), n = Yr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Be(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Be(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Jr(e), l = -n.scrollTop;
  return ee(i || r).direction === "rtl" && (s += Be(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Af(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (r && Qr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function xr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Pf(e, t) {
  var r = ze(e, false, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Wn(e, t, r) {
  return t === ra ? xr(xf(e, r)) : Re(t) ? Pf(t, r) : xr(Tf(xe(e)));
}
function If(e) {
  var t = ot(zt(e)), r = ["absolute", "fixed"].indexOf(ee(e).position) >= 0, n = r && K(e) ? Gt(e) : e;
  return Re(n) ? t.filter(function(i) {
    return Re(i) && Af(i, n) && ie(i) !== "body";
  }) : [];
}
function Cf(e, t, r, n) {
  var i = t === "clippingParents" ? If(e) : [].concat(t), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, u) {
    var c = Wn(e, u, n);
    return l.top = Be(c.top, l.top), l.right = Bt(c.right, l.right), l.bottom = Bt(c.bottom, l.bottom), l.left = Be(c.left, l.left), l;
  }, Wn(e, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ke(e) {
  return e.split("-")[1];
}
function na(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ia(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? fe(n) : null, a = n ? Ke(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case J:
      l = {
        x: o,
        y: t.y - r.height
      };
      break;
    case ae:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case $e:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ce:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? na(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ge:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ft:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function aa() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Df(e) {
  return Object.assign({}, aa(), e);
}
function jf(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function en(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, o = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? sf : s, u = r.rootBoundary, c = u === void 0 ? ra : u, f = r.elementContext, p = f === void 0 ? nt : f, d = r.altBoundary, v = d === void 0 ? false : d, b = r.padding, w = b === void 0 ? 0 : b, T = Df(typeof w != "number" ? w : jf(w, Xt)), A = p === nt ? lf : nt, P = e.rects.popper, E = e.elements[v ? A : p], O = Cf(Re(E) ? E : E.contextElement || xe(e.elements.popper), l, c, o), h2 = ze(e.elements.reference), g = ia({
    reference: h2,
    element: P,
    strategy: "absolute",
    placement: i
  }), S = xr(Object.assign({}, P, g)), _ = p === nt ? S : h2, x = {
    top: O.top - _.top + T.top,
    bottom: _.bottom - O.bottom + T.bottom,
    left: O.left - _.left + T.left,
    right: _.right - O.right + T.right
  }, $ = e.modifiersData.offset;
  if (p === nt && $) {
    var C = $[i];
    Object.keys(x).forEach(function(B) {
      var q = [$e, ae].indexOf(B) >= 0 ? 1 : -1, V = [J, ae].indexOf(B) >= 0 ? "y" : "x";
      x[B] += C[V] * q;
    });
  }
  return x;
}
var zn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Bf = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Gn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Kn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ff(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Gn : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gn, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = false, d = {
      state: c,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(c.options) : T;
        b(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: Re(s) ? ot(s) : s.contextElement ? ot(s.contextElement) : [],
          popper: ot(l)
        };
        var P = wf(_f([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Ef([].concat(P, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if ($f(E), fe(c.options.placement) === Kt) {
            var O = c.orderedModifiers.find(function($) {
              var C = $.name;
              return C === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h2 = ee(l), g = h2.marginTop, S = h2.marginRight, _ = h2.marginBottom, x = h2.marginLeft;
          [g, S, _, x].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var T = c.elements, A = T.reference, P = T.popper;
          if (!Kn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(zn);
            return;
          }
          c.rects = {
            reference: nf(A, Gt(P), c.options.strategy === "fixed"),
            popper: ea(P)
          }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Bf);
              break;
            }
            if (c.reset === true) {
              c.reset = false, O = -1;
              continue;
            }
            var h2 = c.orderedModifiers[O], g = h2.fn, S = h2.options, _ = S === void 0 ? {} : S, x = h2.name;
            typeof g == "function" && (c = g({
              state: c,
              options: _,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Sf(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        b(), p = true;
      }
    };
    if (!Kn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(zn), d;
    d.setOptions(u).then(function(w) {
      !p && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function v() {
      c.orderedModifiers.forEach(function(w) {
        var T = w.name, A = w.options, P = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var O = E({
            state: c,
            name: T,
            instance: d,
            options: P
          }), h2 = function() {
          };
          f.push(O || h2);
        }
      });
    }
    function b() {
      f.forEach(function(w) {
        return w();
      }), f = [];
    }
    return d;
  };
}
var Tt = {
  passive: true
};
function qf(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? true : i, o = n.resize, s = o === void 0 ? true : o, l = X(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Tt);
  }), s && l.addEventListener("resize", r.update, Tt), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Tt);
    }), s && l.removeEventListener("resize", r.update, Tt);
  };
}
const Rf = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: qf,
  data: {}
};
function Lf(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ia({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const kf = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Lf,
  data: {}
};
var Mf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Nf(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: We(t * i) / i || 0,
    y: We(r * i) / i || 0
  };
}
function Xn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = o.x, d = p === void 0 ? 0 : p, v = o.y, b = v === void 0 ? 0 : v, w = typeof c == "function" ? c({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = w.x, b = w.y;
  var T = o.hasOwnProperty("x"), A = o.hasOwnProperty("y"), P = ce, E = J, O = window;
  if (u) {
    var h2 = Gt(r), g = "clientHeight", S = "clientWidth";
    if (h2 === X(r) && (h2 = xe(r), ee(h2).position !== "static" && s === "absolute" && (g = "scrollHeight", S = "scrollWidth")), h2 = h2, i === J || (i === ce || i === $e) && a === ft) {
      E = ae;
      var _ = f && h2 === O && O.visualViewport ? O.visualViewport.height : h2[g];
      b -= _ - n.height, b *= l ? 1 : -1;
    }
    if (i === ce || (i === J || i === ae) && a === ft) {
      P = $e;
      var x = f && h2 === O && O.visualViewport ? O.visualViewport.width : h2[S];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: s
  }, u && Mf), C = c === true ? Nf({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  if (d = C.x, b = C.y, l) {
    var B;
    return Object.assign({}, $, (B = {}, B[E] = A ? "0" : "", B[P] = T ? "0" : "", B.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", B));
  }
  return Object.assign({}, $, (t = {}, t[E] = A ? b + "px" : "", t[P] = T ? d + "px" : "", t.transform = "", t));
}
function Vf(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, a = r.adaptive, o = a === void 0 ? true : a, s = r.roundOffsets, l = s === void 0 ? true : s;
  if (process.env.NODE_ENV !== "production") {
    var u = ee(t.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: fe(t.placement),
    variation: Ke(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Hf = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Vf,
  data: {}
};
function Uf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !K(a) || !ie(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === false ? a.removeAttribute(o) : a.setAttribute(o, s === true ? "" : s);
    }));
  });
}
function Wf(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], a = t.attributes[n] || {}, o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !K(i) || !ie(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const zf = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Uf,
  effect: Wf,
  requires: ["computeStyles"]
};
var Gf = [Rf, kf, Hf, zf], Kf = /* @__PURE__ */ Ff({
  defaultModifiers: Gf
});
function Xf(e) {
  return e === "x" ? "y" : "x";
}
function At(e, t, r) {
  return Be(e, Bt(t, r));
}
function Qf(e, t, r) {
  var n = At(e, t, r);
  return n > r ? r : n;
}
function Yf(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? true : i, o = r.altAxis, s = o === void 0 ? false : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? true : p, v = r.tetherOffset, b = v === void 0 ? 0 : v, w = en(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), T = fe(t.placement), A = Ke(t.placement), P = !A, E = na(T), O = Xf(E), h2 = t.modifiersData.popperOffsets, g = t.rects.reference, S = t.rects.popper, _ = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, x = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (!!h2) {
    if (a) {
      var B, q = E === "y" ? J : ce, V = E === "y" ? ae : $e, L = E === "y" ? "height" : "width", k = h2[E], mt = k + w[q], Te = k - w[V], gt = d ? -S[L] / 2 : 0, Qt = A === Ge ? g[L] : S[L], Ze = A === Ge ? -S[L] : -g[L], yt = t.elements.arrow, Ve = d && yt ? ea(yt) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : aa(), et = me[q], bt = me[V], Ae = At(0, g[L], Ve[L]), Yt = P ? g[L] / 2 - gt - Ae - et - x.mainAxis : Qt - Ae - et - x.mainAxis, ua = P ? -g[L] / 2 + gt + Ae + bt + x.mainAxis : Ze + Ae + bt + x.mainAxis, Jt = t.elements.arrow && Gt(t.elements.arrow), ca = Jt ? E === "y" ? Jt.clientTop || 0 : Jt.clientLeft || 0 : 0, tn = (B = $ == null ? void 0 : $[E]) != null ? B : 0, fa = k + Yt - tn - ca, da = k + ua - tn, rn = At(d ? Bt(mt, fa) : mt, k, d ? Be(Te, da) : Te);
      h2[E] = rn, C[E] = rn - k;
    }
    if (s) {
      var nn, pa = E === "x" ? J : ce, ha = E === "x" ? ae : $e, Pe = h2[O], wt = O === "y" ? "height" : "width", an = Pe + w[pa], on = Pe - w[ha], Zt = [J, ce].indexOf(T) !== -1, sn = (nn = $ == null ? void 0 : $[O]) != null ? nn : 0, ln = Zt ? an : Pe - g[wt] - S[wt] - sn + x.altAxis, un = Zt ? Pe + g[wt] + S[wt] - sn - x.altAxis : on, cn = d && Zt ? Qf(ln, Pe, un) : At(d ? ln : an, Pe, d ? un : on);
      h2[O] = cn, C[O] = cn - Pe;
    }
    t.modifiersData[n] = C;
  }
}
const Jf = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Yf,
  requiresIfExists: ["offset"]
};
var Zf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Zf[t];
  });
}
var ed = {
  start: "end",
  end: "start"
};
function Qn(e) {
  return e.replace(/start|end/g, function(t) {
    return ed[t];
  });
}
function td(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? uf : l, c = Ke(n), f = c ? s ? Hn : Hn.filter(function(v) {
    return Ke(v) === c;
  }) : Xt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, b) {
    return v[b] = en(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[fe(b)], v;
  }, {});
  return Object.keys(d).sort(function(v, b) {
    return d[v] - d[b];
  });
}
function rd(e) {
  if (fe(e) === Kt)
    return [];
  var t = Pt(e);
  return [Qn(e), t, Qn(t)];
}
function nd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? true : i, o = r.altAxis, s = o === void 0 ? true : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? true : d, b = r.allowedAutoPlacements, w = t.options.placement, T = fe(w), A = T === w, P = l || (A || !v ? [Pt(w)] : rd(w)), E = [w].concat(P).reduce(function(Ve, me) {
      return Ve.concat(fe(me) === Kt ? td(t, {
        placement: me,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : me);
    }, []), O = t.rects.reference, h2 = t.rects.popper, g = /* @__PURE__ */ new Map(), S = true, _ = E[0], x = 0; x < E.length; x++) {
      var $ = E[x], C = fe($), B = Ke($) === Ge, q = [J, ae].indexOf(C) >= 0, V = q ? "width" : "height", L = en(t, {
        placement: $,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), k = q ? B ? $e : ce : B ? ae : J;
      O[V] > h2[V] && (k = Pt(k));
      var mt = Pt(k), Te = [];
      if (a && Te.push(L[C] <= 0), s && Te.push(L[k] <= 0, L[mt] <= 0), Te.every(function(Ve) {
        return Ve;
      })) {
        _ = $, S = false;
        break;
      }
      g.set($, Te);
    }
    if (S)
      for (var gt = v ? 3 : 1, Qt = function(me) {
        var et = E.find(function(bt) {
          var Ae = g.get(bt);
          if (Ae)
            return Ae.slice(0, me).every(function(Yt) {
              return Yt;
            });
        });
        if (et)
          return _ = et, "break";
      }, Ze = gt; Ze > 0; Ze--) {
        var yt = Qt(Ze);
        if (yt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = true, t.placement = _, t.reset = true);
  }
}
const id = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: nd,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}, Ne = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ad = {
  components: {
    OnClickOutside: Ji
  },
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      opened: false,
      popper: null
    };
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted() {
    this.popper = Kf(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [id, Jf]
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  }
}, od = { ref: "button" }, sd = { ref: "tooltip" };
function ld(e, t, r, n, i, a) {
  const o = resolveComponent("OnClickOutside");
  return openBlock(), createBlock(o, {
    class: "relative",
    do: a.hide,
    opened: i.opened
  }, {
    default: withCtx(() => [
      createElementVNode("div", od, [
        renderSlot(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 512),
      createElementVNode("div", sd, [
        renderSlot(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["do", "opened"]);
}
const ud = /* @__PURE__ */ Ne(ad, [["render", ld]]), cd = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(e) {
    const t = inject("$splade") || {}, r = inject("$spladeOptions") || {};
    return (n, i) => unref(t).isSsr ? (openBlock(), createBlock(se, {
      key: e.keepAliveKey,
      html: unref(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (openBlock(), createBlock(KeepAlive, {
      key: 0,
      max: unref(r).max_keep_alive
    }, [
      (openBlock(), createBlock(se, {
        key: e.keepAliveKey,
        html: unref(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
}, fd = {
  inject: ["stack"],
  computed: {
    values() {
      return m.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return Q(e.values, t);
      },
      first(t) {
        return wi(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, dd = {
  props: {
    private: {
      type: Boolean,
      required: false,
      default: false
    },
    channel: {
      type: String,
      required: true
    },
    listeners: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      subscribed: false,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription.on("pusher:subscription_succeeded", () => {
      this.subscribed = true;
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        const n = "splade.redirect", i = "splade.refresh", a = "splade.toast";
        let o = null, s = false, l = [];
        je(r, (u) => {
          !ne(u) || (n in u && (o = u[n]), i in u && (s = u[i]), a in u && l.push(u));
        }), o ? m.visit(o) : s ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          m.pushToast(u);
        }), this.$root.$emit(`event.${e}`, r);
      });
      this.subscriptions.push(t);
    });
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
}, pd = {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      filenames: []
    };
  },
  methods: {
    handleFileInput(e) {
      const t = Object.values(e.target.files);
      this.form.$put(this.field, this.multiple ? t : t[0]), this.filenames = [], t.forEach((r) => {
        this.filenames.push(r.name);
      });
    }
  }
}, hd = { ref: "file" };
function vd(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", hd, [
    renderSlot(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const md = /* @__PURE__ */ Ne(pd, [["render", vd]]), gd = {
  inject: ["stack"],
  computed: {
    values() {
      return m.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return Q(e.values, t);
      },
      ...this.values
    });
  }
};
function oa(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && la(t, sa(r, n), e[n]);
  return t;
}
function sa(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function la(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => la(e, sa(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  oa(r, e, t);
}
const yd = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true,
      default: ""
    },
    action: {
      type: String,
      required: false,
      default() {
        return m.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: false,
      default: "POST"
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    stay: {
      type: Boolean,
      require: false,
      default: false
    },
    restoreOnSuccess: {
      type: Boolean,
      required: false,
      default: true
    },
    resetOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: false,
      wasSuccessful: false,
      recentlySuccessful: false,
      recentlySuccessfulTimeoutId: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return Oi(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.missingAttributes.forEach((t) => {
      let r = "";
      const n = e.querySelector(`[name="${t}"]`);
      n ? r = n.type === "checkbox" ? false : "" : e.querySelector(`[name="${t}[]"]`) ? r = [] : (e.querySelector(`[name^="${t}."]`) || e.querySelector(`[name^="${t}["]`)) && (r = {}), this.$put(t, r);
    }), this.missingAttributes = [];
  },
  methods: {
    hasError(e) {
      return e in this.errors;
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return $i(this.values, e, t);
    },
    submit(e) {
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        Si(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton
      ).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    async request() {
      await this.$nextTick(), this.processing = true, this.wasSuccessful = false, this.recentlySuccessful = false, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : oa(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = true), m.request(this.action, this.method.toUpperCase(), e, t).then((r) => {
        this.$emit("success", r), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = false, this.wasSuccessful = true, this.recentlySuccessful = true, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
      }).catch((r) => {
        this.processing = false, this.$emit("error", r);
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            return [
              "$all",
              "$attrs",
              "$put",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) ? e[r] : (Q(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), kr(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, bd = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsFlatpickrOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: false,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: true });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, wd = { ref: "input" };
function Sd(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", wd, [
    renderSlot(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Od = /* @__PURE__ */ Ne(bd, [["render", Sd]]), $d = {
  components: { Render: se },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return m.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, m.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html;
      });
    }
  }
};
function Ed(e, t, r, n, i, a) {
  const o = resolveComponent("Render");
  return i.html ? (openBlock(), createBlock(o, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? renderSlot(e.$slots, "default", { key: 1 }) : createCommentVNode("", true);
}
const _d = /* @__PURE__ */ Ne($d, [["render", Ed]]), xd = ["href", "onClick"], Td = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: true
    },
    replace: {
      type: Boolean,
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    slideover: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e;
    function r() {
      if (!t.confirm)
        return n();
      m.confirm(
        Si(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      t.replace ? m.replace(t.href) : m.visit(t.href);
    }
    return (i, a) => (openBlock(), createElementBlock("a", {
      href: e.href,
      onClick: withModifiers(r, ["prevent"])
    }, [
      renderSlot(i.$slots, "default")
    ], 8, xd));
  }
}, Ad = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: true
    },
    stack: {
      type: Number,
      required: true
    },
    onTopOfStack: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    }
  },
  emits: ["close"],
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    this.setIsOpen(true);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      Dialog: zr,
      DialogPanel: Gr,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Pd = {
  props: {
    choices: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsChoicesOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    placeholder: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.model) ? this.model.length > 0 : false : !(this.model === null || this.model === "");
    }
  },
  watch: {
    modelValue(e, t) {
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    }
  },
  mounted() {
    this.element = this.$refs.select.querySelector("select"), this.choices && this.initChoices(this.element);
  },
  beforeUnmount() {
    this.choices && this.choicesInstance && this.choicesInstance.destroy();
  },
  methods: {
    setValueOnChoices(e) {
      Array.isArray(e) && this.choicesInstance.removeActiveItems(), e === null && (e = ""), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return ju(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      const t = Array.from(
        e.querySelectorAll("option:not([placeholder])")
      ).length, r = this;
      import("choices.js").then((n) => {
        const i = Object.assign({}, this.choices, this.jsChoicesOptions);
        r.choicesInstance = new n.default(e, i), this.choicesInstance.containerInner.element.setAttribute(
          "data-select-name",
          e.name
        ), this.handlePlaceholderVisibility(), this.updateHasSelectionAttribute(), e.addEventListener("change", function() {
          if (r.$emit("update:modelValue", r.choicesInstance.getValue(true)), !r.multiple || t < 1)
            return;
          r.choicesInstance.getValue().length >= t && r.choicesInstance.hideDropdown();
        }), e.addEventListener("showDropdown", function() {
          if (r.multiple || !r.modelValue)
            return;
          const a = r.getItemOfCurrentModel(), o = r.choicesInstance.dropdown.element.querySelector(
            `.choices__item[data-id="${a.id}"]`
          );
          r.choicesInstance.choiceList.scrollToChildElement(o, 1), r.choicesInstance._highlightChoice(o);
        }), this.setValueOnChoices(this.modelValue);
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, Id = { ref: "select" };
function Cd(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", Id, [
    renderSlot(e.$slots, "default")
  ], 512);
}
const Dd = /* @__PURE__ */ Ne(Pd, [["render", Cd]]), jd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Oi(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return Q(t, i);
      },
      hasShared(i) {
        return Q(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
}, Bd = {
  props: {
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    columns: {
      type: Object,
      required: true
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visibleColumns: [],
      forcedVisibleSearchInputs: []
    };
  },
  computed: {
    columnsAreToggled() {
      return !Rn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    je(e, (r, n) => {
      if ($t(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, je(e, (t, r) => {
        $t(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, true);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Au(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : true);
      let n = Fu(r, (i) => i.key).sort();
      Rn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, false);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], nextTick(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    debounceUpdateQuery: _u(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, 350),
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!xu(i, "]")) {
          t[i] = n[1];
          return;
        }
        const a = i.split("["), o = a[1].substring(0, a[1].length - 1);
        parseInt(o) == o ? (i = a[0], N(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = true);
      let i = this.getCurrentQuery();
      i[e] = t, ($t(e, "perPage") || $t(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = true);
      let n = {};
      je(e, (o, s) => {
        if (!N(o)) {
          n[s] = o;
          return;
        }
        o.length !== 0 && o.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      je(n, (o, s) => {
        o === null || o === [] || (i && (i += "&"), i += `${s}=${o}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      m.replace(a).then(() => {
        typeof t < "u" && t && nextTick(() => {
          document.querySelector(`[name="${t.name}"]`).focus();
        });
      });
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: m.visit
    });
  }
}, Fd = {
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
function qd(e, t, r, n, i, a) {
  return i.isMounted ? (openBlock(), createBlock(Teleport, normalizeProps(mergeProps({ key: 0 }, e.$attrs)), [
    renderSlot(e.$slots, "default")
  ], 16)) : createCommentVNode("", true);
}
const Rd = /* @__PURE__ */ Ne(Fd, [["render", qd]]), Ld = {
  props: {
    autosize: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        nextTick(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, kd = { ref: "textarea" };
function Md(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", kd, [
    renderSlot(e.$slots, "default")
  ], 512);
}
const Nd = /* @__PURE__ */ Ne(Ld, [["render", Md]]), Vd = {
  props: {
    toastKey: {
      type: Number,
      required: true
    },
    autoDismiss: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(false);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Hd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Ud = {
  computed: {
    toasts: function() {
      return m.toastsReversed.value;
    },
    hasBackdrop: function() {
      return m.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      m.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Hd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: se,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Wd = {
  props: {
    default: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : false;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && wi(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, a) => {
              e.setToggle(i, a);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, zd = {
  render() {
    return this.$slots.default({
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Tr = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    Tr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Tr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, Yd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Q(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Q(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Q(t, "transform_anchors") ? t.transform_anchors : false, t.link_component = Q(t, "link_component") ? t.link_component : "Link", t.progress_bar = Q(t, "progress_bar") ? t.progress_bar : false;
    const r = t.prefix;
    if (e.component(`${r}Confirm`, Qc).component(`${r}Data`, Yc).component(`${r}Defer`, Jc).component(`${r}Dialog`, Zc).component(`${r}Dropdown`, ud).component(`${r}DynamicHtml`, cd).component(`${r}Errors`, fd).component(`${r}Event`, dd).component(`${r}File`, md).component(`${r}Flash`, gd).component(`${r}Form`, yd).component(`${r}Input`, Od).component(`${r}Lazy`, _d).component(`${r}Modal`, Ad).component(`${r}OnClickOutside`, Ji).component(`${r}Render`, se).component(`${r}Select`, Dd).component(`${r}State`, jd).component(`${r}Table`, Bd).component(`${r}Teleport`, Rd).component(`${r}Textarea`, Nd).component(`${r}Toast`, Vd).component(`${r}Toasts`, Ud).component(`${r}Toggle`, Wd).component(`${r}Transition`, zd).component(t.link_component, Td), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: true,
        spinner: false
      };
      ne(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        Q(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Tr.init(t.progress_bar);
    }
  }
};
function Jd(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((a) => {
    const o = a.replace(/^-+/, "").split("=");
    n[o[0]] = o.length === 2 ? o[1] : true;
  });
  const i = n.port || 9e3;
  e(async (a, o) => {
    if (a.method == "POST") {
      let s = "";
      a.on("data", (l) => s += l), a.on("end", async () => {
        const l = JSON.parse(s), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        o.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), o.write(JSON.stringify({ body: c })), o.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
Jd(createServer, renderToString, (props) => {
  return createSSRApp({
    render: Xd(props)
  }).use(Yd);
});
