import { t as e } from "./chunk-DmhlhrBa.js";
import { $t as t, A as n, B as r, C as i, Ct as a, D as o, Dt as s, Et as c, Gt as l, Ht as u, It as d, J as f, Jt as p, Lt as m, M as h, O as g, Ot as _, Qt as v, R as y, S as b, T as x, Tt as S, V as C, _ as w, _t as T, a as E, an as D, c as O, cn as k, d as A, dn as j, en as M, f as N, fn as ee, g as P, gt as F, h as I, hn as te, ht as L, in as R, it as z, j as ne, kt as B, ln as V, m as H, mn as re, mt as U, n as W, nn as ie, on as ae, p as oe, pn as G, pt as K, q as se, rn as q, s as ce, sn as J, tn as le, u as ue, un as Y, vt as de, w as fe, y as pe, z as X } from "./line-metrics-BdCACYlq.js";
import { _ as me, a as he, b as ge, c as _e, f as ve, g as ye, h as be, i as xe, l as Se, m as Ce, o as we, p as Te, s as Ee, t as De, u as Oe, v as ke, x as Ae, y as je } from "./canvas-viewer-mechanics-CwVSOYke.js";
import { a as Me, i as Ne, t as Pe } from "./bounded-raw-part-cache-C6ro6Ezf.js";
import { i as Fe } from "./resource-measurement-E_S_iau4.js";
import { t as Ie } from "./mathjax-CMjda8Ip.js";
import { n as Le, r as Re, t as ze } from "./visible-index-CgyJLAS_.js";
import { a as Be, c as Ve, d as He, i as Ue, l as We, n as Ge, o as Ke, s as qe, t as Je, u as Ye } from "./worksheet-pull-client-YzjJMOns.js";
//#region packages/core/src/sparkline/renderer.ts
function Xe(e, t, n) {
	let { values: r } = n;
	if (r.length === 0 || t.w <= 0 || t.h <= 0) return;
	let i = n.colorSeries ?? "#5B9BD5", a = Math.min(2, t.w * .08), o = Math.max(2, t.h * .2), s = t.x + a, c = t.y + o, l = Math.max(1, t.w - a * 2), u = Math.max(1, t.h - o * 2), d = r.filter((e) => typeof e == "number");
	if (d.length === 0) return;
	let f = Math.min(...d), p = Math.max(...d), m = n.min ?? f, h = n.max ?? p;
	m === h && (h = m + 1, --m);
	let g = h - m, _ = (e) => c + u - (e - m) / g * u;
	if (n.kind === "stem") {
		$e(e, n, s, c, l, u);
		return;
	}
	if (n.kind === "column") {
		Qe(e, n, r, s, c, l, u, m, h);
		return;
	}
	if (n.displayXAxis && m < 0 && h > 0) {
		e.save(), e.strokeStyle = n.colorAxis ?? "#000000", e.lineWidth = 1, e.beginPath();
		let t = _(0);
		e.moveTo(s, t), e.lineTo(s + l, t), e.stroke(), e.restore();
	}
	let v = r.length, y = (e) => v === 1 ? s + l / 2 : s + e / (v - 1) * l;
	e.save(), e.strokeStyle = i, e.lineCap = "round", e.lineJoin = "round", e.lineWidth = (n.lineWeight ?? .75) * D, e.beginPath();
	let b = !1, x = n.displayEmptyCellsAs ?? "gap";
	for (let t = 0; t < v; t++) {
		let n = r[t];
		if (n == null) {
			if (x === "zero") {
				let n = y(t), r = _(0);
				b ? e.lineTo(n, r) : (e.moveTo(n, r), b = !0);
			} else x === "gap" && (b = !1);
			continue;
		}
		let i = y(t), a = _(n);
		b ? e.lineTo(i, a) : (e.moveTo(i, a), b = !0);
	}
	e.stroke(), e.restore();
	let S = Math.max(1, Math.min(2.5, u * .12)), C = Ze(r, n);
	for (let t = 0; t < v; t++) {
		let a = r[t];
		if (a == null) continue;
		let o = C[t];
		(n.markers || o != null) && (e.save(), e.fillStyle = o ?? n.colorMarkers ?? i, e.beginPath(), e.arc(y(t), _(a), S, 0, Math.PI * 2), e.fill(), e.restore());
	}
}
function Ze(e, t) {
	let n = e.map(() => null), r = e.map((e) => typeof e == "number" ? e : null), i = r.findIndex((e) => e != null), a = -1;
	for (let e = r.length - 1; e >= 0; e--) if (r[e] != null) {
		a = e;
		break;
	}
	let o = r.filter((e) => e != null), s = NaN, c = NaN;
	if (o.length > 0 && (s = Math.max(...o), c = Math.min(...o)), t.negative && t.colorNegative) for (let e = 0; e < r.length; e++) {
		let i = r[e];
		i != null && i < 0 && (n[e] = t.colorNegative);
	}
	if (t.first && t.colorFirst && i >= 0 && (n[i] = t.colorFirst), t.last && t.colorLast && a >= 0 && (n[a] = t.colorLast), t.high && t.colorHigh && !Number.isNaN(s)) for (let e = 0; e < r.length; e++) r[e] === s && (n[e] = t.colorHigh);
	if (t.low && t.colorLow && !Number.isNaN(c)) for (let e = 0; e < r.length; e++) r[e] === c && (n[e] = t.colorLow);
	return n;
}
function Qe(e, t, n, r, i, a, o, s, c) {
	let l = n.length;
	if (l === 0) return;
	let u = s < 0 && c > 0 ? 0 : s, d = c - s, f = (e) => i + o - (e - s) / d * o, p = f(u), m = a / l, h = Math.min(1.5, m * .15), g = Ze(n, t);
	for (let i = 0; i < l; i++) {
		let a = n[i];
		if (a == null) continue;
		let o = g[i] ?? (a < 0 && t.colorNegative ? t.colorNegative : t.colorSeries ?? "#5B9BD5"), s = f(a), c = r + m * i + h / 2, l = Math.max(1, m - h);
		e.save(), e.fillStyle = o, e.fillRect(c, Math.min(p, s), l, Math.abs(p - s)), e.restore();
	}
}
function $e(e, t, n, r, i, a) {
	let o = t.values.length;
	if (o === 0) return;
	let s = r + a / 2, c = a / 2, l = i / o, u = Math.min(1.5, l * .15), d = Ze(t.values, t);
	for (let r = 0; r < o; r++) {
		let i = t.values[r];
		if (i == null || i === 0) continue;
		let a = i < 0, o = d[r] ?? (a && t.colorNegative ? t.colorNegative : t.colorSeries ?? "#5B9BD5"), f = n + l * r + u / 2, p = Math.max(1, l - u);
		e.save(), e.fillStyle = o, a ? e.fillRect(f, s, p, c) : e.fillRect(f, s - c, p, c), e.restore();
	}
}
//#endregion
//#region packages/core/src/text/bidi/segments.ts
function et(e, t) {
	return e === !0 ? "rtl" : e === !1 ? "ltr" : h().computeLevels(t, "auto").paragraphLevel === 1 ? "rtl" : "ltr";
}
//#endregion
//#region packages/xlsx/src/worker.ts?worker&inline
var tt = "var e=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,n.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_xlsxarchive_free(e,0)}acknowledge_sheet_cursor_terminal(){let e=_.xlsxarchive_acknowledge_sheet_cursor_terminal(this.__wbg_ptr);if(e[1])throw f(e[0])}assert_healthy(){let e=_.xlsxarchive_assert_healthy(this.__wbg_ptr);if(e[1])throw f(e[0])}cancel_sheet_cursor(){_.xlsxarchive_cancel_sheet_cursor(this.__wbg_ptr)}close_sheet_cursor(){_.xlsxarchive_close_sheet_cursor(this.__wbg_ptr)}extract_image(e){let t=d(e,_.__wbindgen_malloc,_.__wbindgen_realloc),n=g,i=_.xlsxarchive_extract_image(this.__wbg_ptr,t,n);if(i[3])throw f(i[2]);var a=r(i[0],i[1]).slice();return _.__wbindgen_free(i[0],i[1]*1,1),a}constructor(e,t,r,i){let a=u(e,_.__wbindgen_malloc),o=g,s=_.xlsxarchive_new(a,o,!l(t),l(t)?BigInt(0):t,!l(r),l(r)?BigInt(0):r,!l(i),l(i)?BigInt(0):i);if(s[2])throw f(s[1]);return this.__wbg_ptr=s[0]>>>0,n.register(this,this.__wbg_ptr,this),this}open_sheet_cursor(e,t){let n=d(t,_.__wbindgen_malloc,_.__wbindgen_realloc),r=g,i=_.xlsxarchive_open_sheet_cursor(this.__wbg_ptr,e,n,r);if(i[1])throw f(i[0])}parse(){let e=_.xlsxarchive_parse(this.__wbg_ptr);if(e[3])throw f(e[2]);var t=r(e[0],e[1]).slice();return _.__wbindgen_free(e[0],e[1]*1,1),t}pull_sheet_cursor(e){let t=_.xlsxarchive_pull_sheet_cursor(this.__wbg_ptr,e);if(t[3])throw f(t[2]);var n=r(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*1,1),n}resource_usage(){let e=_.xlsxarchive_resource_usage(this.__wbg_ptr);if(e[3])throw f(e[2]);var t=r(e[0],e[1]).slice();return _.__wbindgen_free(e[0],e[1]*1,1),t}sheet_cursor_pull_finished(){return _.xlsxarchive_sheet_cursor_pull_finished(this.__wbg_ptr)!==0}sheet_cursor_resource_usage(){let e=_.xlsxarchive_sheet_cursor_resource_usage(this.__wbg_ptr);if(e[3])throw f(e[2]);var t=r(e[0],e[1]).slice();return _.__wbindgen_free(e[0],e[1]*1,1),t}to_markdown(){let e,t;try{let i=_.xlsxarchive_to_markdown(this.__wbg_ptr);var n=i[0],r=i[1];if(i[3])throw n=0,r=0,f(i[2]);return e=n,t=r,o(n,r)}finally{_.__wbindgen_free(e,t,1)}}};Symbol.dispose&&(e.prototype[Symbol.dispose]=e.prototype.free);function t(){return{__proto__:null,\"./xlsx_parser_bg.js\":{__proto__:null,__wbg___wbindgen_throw_6b64449b9b9ed33c:function(e,t){throw Error(o(e,t))},__wbg_error_a6fa202b58aa1cd3:function(e,t){let n,r;try{n=e,r=t,console.error(o(e,t))}finally{_.__wbindgen_free(n,r,1)}},__wbg_new_227d7c05414eb861:function(){return Error()},__wbg_stack_3b0d974bbf31e44f:function(e,t){let n=t.stack,r=d(n,_.__wbindgen_malloc,_.__wbindgen_realloc),i=g;a().setInt32(e+4,i,!0),a().setInt32(e+0,r,!0)},__wbindgen_cast_0000000000000001:function(e,t){return o(e,t)},__wbindgen_init_externref_table:function(){let e=_.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const n=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>_.__wbg_xlsxarchive_free(e>>>0,1));function r(e,t){return e>>>=0,c().subarray(e/1,e/1+t)}let i=null;function a(){return(i===null||i.buffer.detached===!0||i.buffer.detached===void 0&&i.buffer!==_.memory.buffer)&&(i=new DataView(_.memory.buffer)),i}function o(e,t){return e>>>=0,ee(e,t)}let s=null;function c(){return(s===null||s.byteLength===0)&&(s=new Uint8Array(_.memory.buffer)),s}function l(e){return e==null}function u(e,t){let n=t(e.length*1,1)>>>0;return c().set(e,n/1),g=e.length,n}function d(e,t,n){if(n===void 0){let n=h.encode(e),r=t(n.length,1)>>>0;return c().subarray(r,r+n.length).set(n),g=n.length,r}let r=e.length,i=t(r,1)>>>0,a=c(),o=0;for(;o<r;o++){let t=e.charCodeAt(o);if(t>127)break;a[i+o]=t}if(o!==r){o!==0&&(e=e.slice(o)),i=n(i,r,r=o+e.length*3,1)>>>0;let t=c().subarray(i+o,i+r),a=h.encodeInto(e,t);o+=a.written,i=n(i,r,o,1)>>>0}return g=o,i}function f(e){let t=_.__wbindgen_externrefs.get(e);return _.__externref_table_dealloc(e),t}let p=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0});p.decode();let m=0;function ee(e,t){return m+=t,m>=2146435072&&(p=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0}),p.decode(),m=t),p.decode(c().subarray(e,e+t))}const h=new TextEncoder;`encodeInto`in h||(h.encodeInto=function(e,t){let n=h.encode(e);return t.set(n),{read:e.length,written:n.length}});let g=0,_;function v(e,t){return _=e.exports,i=null,s=null,_.__wbindgen_start(),_}async function te(e,t){if(typeof Response==`function`&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming==`function`)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if(e.ok&&n(e.type)&&e.headers.get(`Content-Type`)!==`application/wasm`)console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\",t);else throw t}let r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{let n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}function n(e){switch(e){case`basic`:case`cors`:case`default`:return!0}return!1}}async function y(e){if(_!==void 0)return _;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn(`using deprecated parameters for the initialization function; pass a single object instead`));let n=t();(typeof e==`string`||typeof Request==`function`&&e instanceof Request||typeof URL==`function`&&e instanceof URL)&&(e=fetch(e));let{instance:r,module:i}=await te(await e,n);return v(r,i)}async function ne(e){return _=void 0,i=null,s=null,y(e)}var b=class e extends Error{code;constructor(t,n){super(n),this.name=`OoxmlError`,this.code=t,Object.setPrototypeOf(this,e.prototype)}},x=class e extends Error{code=`ooxml-resource-limit`;details;constructor(t,n){super(t),this.name=`OoxmlResourceLimitError`;let r=n.violation,i=Object.freeze({format:r.format,operation:r.operation,resource:r.resource,metric:r.metric,...r.part===void 0?{}:{part:r.part},limit:r.limit,observed:r.observed,configurable:r.configurable,usage:Object.freeze({archiveEntryCount:r.usage.archiveEntryCount,declaredInflatedBytes:r.usage.declaredInflatedBytes,...r.usage.largestInflatedEntryBytes===void 0?{}:{largestInflatedEntryBytes:r.usage.largestInflatedEntryBytes},distinctInflatedBytes:r.usage.distinctInflatedBytes,operationInflatedBytes:r.usage.operationInflatedBytes})});this.details=Object.freeze({stage:n.stage,violation:i}),Object.setPrototypeOf(this,e.prototype)}},re=class e extends RangeError{code=`ooxml-decoded-image-limit`;constructor(t,n,r){super(`OOXML decoded image limit exceeded: ${t} ${r} > ${n}`),this.metric=t,this.limit=n,this.observed=r,this.name=`OoxmlDecodedImageLimitError`,Object.setPrototypeOf(this,e.prototype)}};function ie(e){if(!e.startsWith(`data:`))return null;let t=e.indexOf(`,`);if(t===-1)return null;let n=atob(e.slice(t+1)),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var ae=class{state=`uninitialized`;generationValue=0;readiness;poisonListeners=new Set;constructor(e,t,n){this.initialize=e,this.reinitialize=t,this.normalizeFailure=n}get generation(){return this.generationValue}get poisoned(){return this.state===`poisoned`}onPoison(e){return this.poisonListeners.add(e),()=>this.poisonListeners.delete(e)}async ensureReady(){if(this.state!==`ready`){if(!this.readiness){let e=this.state===`uninitialized`?this.initialize:this.reinitialize;this.readiness=Promise.resolve().then(e).then(()=>{this.generationValue+=1,this.state=`ready`,this.readiness=void 0},e=>{throw this.readiness=void 0,e})}await this.readiness}}run(e){try{return e()}catch(e){let t=this.normalizeFailure(e);throw t?(this.poison(t),t):e}}tryRunReady(e){if(this.state!==`ready`)return{current:!1};let t=this.generationValue,n=this.run(e);return this.state!==`ready`||t!==this.generationValue?{current:!1}:{current:!0,generation:t,value:n}}poison(e){this.state=`poisoned`,this.readiness=void 0;for(let t of this.poisonListeners)t(e)}assertCurrent(e){if(this.state!==`ready`||e!==this.generationValue)throw Error(`WASM archive session belongs to a discarded runtime generation`)}},S=class e extends Error{code=`parser-crashed`;constructor(t){super(t),this.name=`WasmTrapError`,Object.setPrototypeOf(this,e.prototype)}};function oe(e){let t=globalThis.WebAssembly?.RuntimeError;return t&&e instanceof t||e instanceof RangeError?!0:e instanceof Error?e.name===`RuntimeError`||e.name===`CompileError`||e.name===`LinkError`||e.name===`InternalError`||e.name===`OOMError`:!1}function se(e){try{if((typeof e!=`object`||!e)&&typeof e!=`function`)return;let t=Reflect.get(e,`__destroy_into_raw`);typeof t==`function`&&Reflect.apply(t,e,[])}catch{}}function C(e,t){return e({module_or_path:t})}var ce=class{runtime;wasmInput=null;currentArchive=null;constructor(e,t={}){this.init=e,this.options=t,this.runtime=new ae(()=>this.invokeConfigured(this.init),()=>this.invokeConfigured(this.options.reinit??this.init),le),this.runtime.onPoison(()=>this.dropPoisonedArchive())}setWasmInput(e){this.wasmInput=e,this.runtime.ensureReady().catch(()=>void 0)}setWasmUrl(e){this.setWasmInput(e)}get archive(){return this.currentArchive}setArchive(e){this.freeArchive(),this.currentArchive=e}disposeArchive(){this.freeArchive()}get poisoned(){return this.runtime.poisoned}async ensureReady(){await this.runtime.ensureReady()}run(e){return this.runtime.run(e)}poison(){this.runtime.poison(new S(`WASM parser was recycled`))}invokeConfigured(e){return this.wasmInput===null?Promise.reject(Error(`WasmParserHost: setWasmInput was never called`)):C(e,this.wasmInput)}freeArchive(){this.currentArchive!==null&&this.options.freeArchive&&this.options.freeArchive(this.currentArchive),this.currentArchive=null}dropPoisonedArchive(){let e=this.currentArchive;this.currentArchive=null,se(e)}};function le(e){return oe(e)?new S(`WASM parser trapped and was recycled: ${e instanceof Error?e.message:String(e)}`):null}function w(e){return typeof e==`number`&&Number.isSafeInteger(e)&&e>0}function ue(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return w(t.requiredBytes)&&w(t.offeredBytes)&&t.requiredBytes>t.offeredBytes}var T=class e extends RangeError{code=`ooxml-insufficient-credit`;requiredBytes;offeredBytes;constructor(t){super(`Pull unit requires ${t.requiredBytes} bytes but credit is ${t.offeredBytes}`),this.name=`PullSessionInsufficientCreditError`,this.requiredBytes=t.requiredBytes,this.offeredBytes=t.offeredBytes,Object.setPrototypeOf(this,e.prototype)}};function de(e){if(e instanceof T)return e;let t=e instanceof Error?e.message:String(e);if(!t.startsWith(`OOXML_INSUFFICIENT_CREDIT:`))return;let n;try{n=JSON.parse(t.slice(26))}catch{return}if(!n||typeof n!=`object`||Array.isArray(n))return;let r=n;if(!(r.code!==`ooxml-insufficient-credit`||!ue(r)))return new T(r)}const E=`OOXML_RESOURCE_LIMIT:`;function D(e){return typeof e==`number`&&Number.isSafeInteger(e)&&e>=0}function O(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return D(t.archiveEntryCount)&&D(t.declaredInflatedBytes)&&(t.largestInflatedEntryBytes===void 0||D(t.largestInflatedEntryBytes))&&D(t.distinctInflatedBytes)&&D(t.operationInflatedBytes)}function k(e){let t;try{t=JSON.parse(new TextDecoder().decode(e))}catch{throw TypeError(`OOXML resource usage checkpoint is not valid JSON`)}if(!O(t))throw TypeError(`OOXML resource usage checkpoint is invalid`);return t}function fe(e){return e===`docx`||e===`xlsx`||e===`pptx`}function pe(e){return e===`container`||e===`decompression`||e===`parsing`||e===`serialization`||e===`layout`||e===`rendering`||e===`worker`}function A(e,t){return typeof e==`string`&&e.length>0&&e.length<=t&&!/[\\u0000-\\u001f\\u007f]/u.test(e)}function j(e){return A(e,128)&&/^[a-z0-9][a-z0-9-]*$/u.test(e)}function me(e){return!A(e,4096)||e.startsWith(`/`)||e.startsWith(`\\\\`)||e.includes(`\\\\`)||e.includes(`?`)||e.includes(`#`)||e.includes(`://`)||/^[a-z]:/iu.test(e)?!1:e.split(`/`).every(e=>e!==``&&e!==`.`&&e!==`..`)}const M=new Map([[`archive-entry:declared-inflated-bytes`,{stage:`container`,part:`required`}],[`archive-entry:actual-inflated-bytes`,{stage:`decompression`,part:`required`}],[`archive:entry-count`,{stage:`container`,part:`forbidden`}],[`archive:central-directory-bytes`,{stage:`container`,part:`forbidden`,configurable:!1}],[`archive:distinct-inflated-bytes`,{stage:`decompression`,part:`required`}],[`xml-event:bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`xml-context:bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`xml-tree:depth`,{stage:`parsing`,part:`optional`,configurable:!1}],[`worksheet-row:projected-bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`worksheet-shell:projected-bytes`,{stage:`parsing`,part:`optional`,configurable:!1}]]),he=new Set([...M.keys()].map(e=>e.slice(0,e.indexOf(`:`)))),ge=new Set([...M.keys()].map(e=>e.slice(e.indexOf(`:`)+1)));function _e(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return!fe(t.format)||!A(t.operation,256)||!j(t.resource)||!j(t.metric)||!D(t.limit)||!D(t.observed)||typeof t.configurable!=`boolean`||!O(t.usage)?!1:!(`part`in t)||me(t.part)}function N(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;if(!pe(t.stage)||!_e(t.violation))return!1;let n=t.violation,r=M.get(`${n.resource}:${n.metric}`);return r?t.stage!==r.stage||r.configurable===!1&&n.configurable!==!1?!1:r.part===`required`?n.part!==void 0:r.part===`forbidden`?n.part===void 0:!0:!(he.has(n.resource)&&ge.has(n.metric))}function P(e){return{archiveEntryCount:e.archiveEntryCount,declaredInflatedBytes:e.declaredInflatedBytes,...e.largestInflatedEntryBytes===void 0?{}:{largestInflatedEntryBytes:e.largestInflatedEntryBytes},distinctInflatedBytes:e.distinctInflatedBytes,operationInflatedBytes:e.operationInflatedBytes}}function F(e){if(!N(e))return;let t=e.violation,n={stage:e.stage,violation:{format:t.format,operation:t.operation,resource:t.resource,metric:t.metric,...t.part===void 0?{}:{part:t.part},limit:t.limit,observed:t.observed,configurable:t.configurable,usage:P(t.usage)}};return N(n)?n:void 0}function I(e){let t=e.violation;return`OOXML resource limit exceeded${t.part?` for ${t.part}`:``}: ${t.metric} ${t.observed} > ${t.limit}`}function ve(e){let t=e instanceof Error?e.message:String(e);if(!t.startsWith(E))return;let n;try{n=JSON.parse(t.slice(21))}catch{return}if(!n||typeof n!=`object`)return;let r=n;if(!(r.code!==`ooxml-resource-limit`||!N(r.details)))return new x(I(r.details),r.details)}function ye(e){if(e instanceof re)return{message:e.message,errorName:e.name,code:e.code,decodedImage:{metric:e.metric,limit:e.limit,observed:e.observed}};let t=de(e);if(t)return{message:t.message,errorName:t.name,code:t.code,insufficientCredit:{requiredBytes:t.requiredBytes,offeredBytes:t.offeredBytes}};let n=e instanceof b||e instanceof x?e:ve(e);if(n instanceof x){let e=F(n.details);return e?{message:typeof n.message==`string`?n.message:I(e),errorName:`OoxmlResourceLimitError`,code:`ooxml-resource-limit`,resourceLimit:e}:{message:`Invalid OOXML resource-limit error payload`,errorName:`Error`}}if(n instanceof b)return{message:typeof n.message==`string`?n.message:String(n.message),errorName:A(n.name,128)?n.name:`OoxmlError`,...j(n.code)?{code:n.code}:{}};let r=e instanceof Error?e.message:String(e);if(typeof r==`string`&&r.startsWith(E))return{message:`Invalid OOXML resource-limit payload`,errorName:`Error`};let i=e instanceof Error?e:Error(r),a=i;return{message:typeof i.message==`string`?i.message:String(i.message),errorName:A(i.name,128)?i.name:`Error`,...typeof a.code==`string`?{code:a.code}:{}}}function L(e){try{return ye(e)}catch{return{message:`Worker operation failed with an unreadable error`,errorName:`Error`}}}function be(e){return e.byteOffset===0&&e.byteLength===e.buffer.byteLength&&e.buffer instanceof ArrayBuffer?e.buffer:e.slice().buffer}Object.freeze({maxArchiveEntryBytes:134217728,maxTotalInflatedBytes:268435456,maxArchiveEntries:4096});function xe(e){return[e.maxArchiveEntryBytes===null?0n:BigInt(e.maxArchiveEntryBytes),e.maxTotalInflatedBytes===null?0n:BigInt(e.maxTotalInflatedBytes),e.maxArchiveEntries===null?0n:BigInt(e.maxArchiveEntries)]}const R=`ooxml-pull-v1`;function z(e,t){if(!Number.isSafeInteger(e)||e<=0)throw RangeError(`${t} must be a positive safe integer`)}function Se(e){if(!(typeof e==`string`&&e.length>0||typeof e==`number`&&Number.isSafeInteger(e)&&e>0))throw RangeError(`session id must be a non-empty string or positive safe integer`)}var Ce=class{owner;queue=Promise.resolve();leases=new Map;retainedBytes=0;retainedCount=0;maxRetainedBytes;maxRetainedCount;cleanups=new Set;pendingFatalCleanups=[];poisonRunning=!1;fatal;constructor(e){this.maxRetainedBytes=e?.maxRetainedBytes??64*1024*1024,this.maxRetainedCount=e?.maxRetainedCount??256,z(this.maxRetainedBytes,`max retained lease bytes`),z(this.maxRetainedCount,`max retained lease count`)}enqueue(e){let t=this.queue.then(e,e);return this.queue=t.then(()=>void 0,()=>void 0),t}acquire(e){return this.owner===void 0?(this.owner=e,!0):this.owner===e}release(e){this.owner===e&&(this.owner=void 0)}retainLease(e,t,n){if(!Number.isSafeInteger(n)||n<0)throw RangeError(`retained lease bytes are invalid`);let r=this.leases.get(e)??new Map;if(r.has(t))throw Error(`driver returned a duplicate lease id`);if(this.retainedCount+1>this.maxRetainedCount)throw RangeError(`retained lease count exceeds limit`);if(this.retainedBytes+n>this.maxRetainedBytes)throw RangeError(`retained lease bytes exceed limit`);r.set(t,n),this.leases.set(e,r),this.retainedCount++,this.retainedBytes+=n}releaseLease(e,t){let n=this.leases.get(e),r=n?.get(t);r!==void 0&&(n?.delete(t),n?.size===0&&this.leases.delete(e),this.retainedCount--,this.retainedBytes-=r)}registerCleanup(e){return this.fatal?(this.poisonRunning?this.pendingFatalCleanups.push(e):this.enqueue(e).catch(()=>void 0),()=>void 0):(this.cleanups.add(e),()=>this.cleanups.delete(e))}get fatalError(){return this.fatal}get registeredHostCount(){return this.cleanups.size}async poison(e){if(this.fatal??=e,this.poisonRunning)return this.fatal;this.poisonRunning=!0,this.pendingFatalCleanups.push(...this.cleanups);try{let e;for(;(e=this.pendingFatalCleanups.shift())!==void 0;)await e().catch(()=>void 0)}finally{this.poisonRunning=!1}return this.fatal}},we=class{options;coordinator;coordinatorOwner=Symbol(`pull-session-host`);unregisterCleanup;sequence=0;unacked;leases=new Map;activeDriverLeases=new Set;nextWireLeaseId;cancelRequested=!1;cancelComplete=!1;closeRequested=!1;closeComplete=!1;driverCancelComplete=!1;driverCloseComplete=!1;completed=!1;constructor(e){Se(e.sessionId),z(e.operationId,`operation id`),z(e.generation,`generation`),z(e.maxByteCredit,`max byte credit`),e.wireLeaseIdStart!==void 0&&z(e.wireLeaseIdStart,`wire lease id start`),this.options=e,this.coordinator=e.coordinator,this.nextWireLeaseId=e.wireLeaseIdStart??1,this.unregisterCleanup=this.coordinator.registerCleanup(()=>this.forceFatalCleanup())}dispatch(e,t){return this.coordinator.enqueue(async()=>{let n=await this.execute(e);try{t(n.response,n.transfer)}catch(e){throw await this.rollbackFailedPost(n),e}})}async rollbackFailedPost(e){let t=e.response;if(t.kind===`chunk`){let n=t.leaseId===void 0?void 0:this.leases.get(t.leaseId);try{await this.options.driver.disposeInvalidChunk?.({payload:t.payload,byteLength:t.byteLength,done:t.done,leaseId:n?.driverLeaseId,retainedBytes:n?.retainedBytes,transfer:e.transfer})}catch{}}this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);for(let[e,t]of[...this.leases])try{await this.options.driver.releaseLease?.(t.driverLeaseId)}catch{}finally{this.leases.delete(e),this.activeDriverLeases.delete(t.driverLeaseId),this.coordinator.releaseLease(this.coordinatorOwner,e)}if(this.cancelRequested=!0,!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch{}this.unregisterCleanup()}async execute(e){try{if(this.isStaleLifecycle(e)){let t=e.kind===`cancel`?`cancel`:`close`;return this.sameOperationIdentity(e)?{response:this.accepted(e,t,!0)}:{response:this.errorResponse(e,{message:`stale lifecycle targets another session or operation`,errorName:`PullSessionProtocolError`,code:`ooxml-stale-lifecycle`})}}this.validateCommandIdentity(e);let t=this.coordinator.fatalError;if(t)return e.kind===`pull`?{response:this.errorResponse(e,t)}:(e.kind===`cancel`?await this.cancel():e.kind===`close`?await this.close():e.kind===`release`&&await this.release(e.leaseId),{response:this.accepted(e,e.kind)});switch(e.kind){case`pull`:return await this.pull(e);case`ack`:return await this.ack(e.sequence),{response:this.accepted(e,`ack`)};case`release`:return await this.release(e.leaseId),{response:this.accepted(e,`release`)};case`cancel`:return await this.cancel(),{response:this.accepted(e,`cancel`)};case`close`:return await this.close(),{response:this.accepted(e,`close`)}}}catch(t){let n=L(t);return n.code===`ooxml-resource-limit`&&(n=await this.coordinator.poison(n)),{response:this.errorResponse(e,n)}}}async pull(e){if(this.closeRequested||this.cancelRequested||this.completed)throw Error(`pull session is closed`);if(this.unacked)throw Error(`previous chunk is not acknowledged`);if(!Number.isSafeInteger(e.sequence)||e.sequence<0||e.sequence!==this.sequence)throw Error(`pull command sequence mismatch`);if(this.validateHostCredit(e.byteCredit),!this.coordinator.acquire(this.coordinatorOwner))throw Error(`another operation has an unacknowledged package chunk`);let t;try{t=await this.options.driver.pull(e.byteCredit)}catch(e){throw this.coordinator.release(this.coordinatorOwner),e}let n=!1,r=!1,i,a;try{let o=this.options.driver.measureChunk(t),s=this.arrayBufferTransferBytes(t.transfer);if(o<s)throw RangeError(`measured chunk bytes are below ArrayBuffer transfer bytes`);if(a=Math.max(o,s),t.leaseId!==void 0){if(z(t.leaseId,`lease id`),t.retainedBytes===void 0)throw Error(`retained lease bytes are required`);if(this.activeDriverLeases.has(t.leaseId))throw r=!0,Error(`driver returned an active duplicate lease id`);i=this.allocateWireLeaseId(),this.coordinator.retainLease(this.coordinatorOwner,i,t.retainedBytes),this.leases.set(i,{driverLeaseId:t.leaseId,retainedBytes:t.retainedBytes}),this.activeDriverLeases.add(t.leaseId),n=!0}else if(t.retainedBytes!==void 0)throw Error(`retained lease bytes require a lease id`);if(!Number.isSafeInteger(a)||a<0)throw RangeError(`host chunk byte length must be a non-negative safe integer`);if(a>e.byteCredit)throw RangeError(`host chunk exceeds byte credit`)}catch(e){let a;try{await this.options.driver.disposeInvalidChunk?.(t)}catch(e){a=e}if(n&&i!==void 0)try{await this.release(i)}catch(e){a??=e}else if(t.leaseId!==void 0&&!r)try{await this.options.driver.releaseLease?.(t.leaseId)}catch(e){a??=e}if(r)try{await this.cancel()}catch(e){a??=e}throw this.coordinator.release(this.coordinatorOwner),a||e}return this.unacked={sequence:this.sequence,done:t.done},{response:{kind:`chunk`,protocol:R,...this.identity(),requestId:e.requestId,sequence:this.sequence,byteLength:a,done:t.done,payload:t.payload,leaseId:i,usage:this.resourceUsage()},transfer:t.transfer}}async ack(e){if(!Number.isSafeInteger(e)||e<0)throw RangeError(`invalid ack sequence`);if(e<this.sequence)return;if(!this.unacked||e!==this.sequence)throw Error(`ack sequence mismatch`);let t=this.unacked.done;await this.options.driver.acknowledge?.(e),this.unacked=void 0,this.coordinator.release(this.coordinatorOwner),this.sequence++,t&&(this.completed=!0,this.maybeUnregisterCompleted())}async release(e){z(e,`wire lease id`);let t=this.leases.get(e);t&&(await this.options.driver.releaseLease?.(t.driverLeaseId),this.leases.delete(e),this.activeDriverLeases.delete(t.driverLeaseId),this.coordinator.releaseLease(this.coordinatorOwner,e),this.maybeUnregisterCompleted())}async cancel(){if(this.cancelComplete)return;this.cancelRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;try{await this.releaseAllLeases()}catch(t){e=t}if(!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch(t){e??=t}if(e)throw e;this.cancelComplete=!0,this.unregisterCleanup()}async close(){if(this.closeComplete)return;this.closeRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;try{await this.releaseAllLeases()}catch(t){e=t}if(!this.driverCloseComplete)try{await this.options.driver.close?.(),this.driverCloseComplete=!0}catch(t){e??=t}if(e)throw e;this.closeComplete=!0,this.unregisterCleanup()}async releaseAllLeases(){let e;for(let t of[...this.leases.keys()])try{await this.release(t)}catch(t){e??=t}if(e)throw e}validateCommandIdentity(e){if(e.protocol!==`ooxml-pull-v1`||e.sessionId!==this.options.sessionId||e.operationId!==this.options.operationId||e.generation!==this.options.generation||!Number.isSafeInteger(e.requestId)||e.requestId<=0)throw Error(`stale or mismatched pull session command`)}validateHostCredit(e){if(z(e,`byte credit`),e>this.options.maxByteCredit)throw RangeError(`byte credit exceeds host maximum`)}accepted(e,t,n=!1){return{kind:`accepted`,protocol:R,...n?{sessionId:e.sessionId,operationId:e.operationId,generation:e.generation}:this.identity(),requestId:e.requestId,command:t,usage:this.resourceUsage()}}identity(){return{sessionId:this.options.sessionId,operationId:this.options.operationId,generation:this.options.generation}}isStaleLifecycle(e){return(e.kind===`cancel`||e.kind===`close`)&&e.protocol===`ooxml-pull-v1`&&Number.isSafeInteger(e.requestId)&&e.requestId>0&&Number.isSafeInteger(e.generation)&&e.generation>0&&e.generation<this.options.generation}sameOperationIdentity(e){return e.sessionId===this.options.sessionId&&e.operationId===this.options.operationId}errorResponse(e,t){return{kind:`error`,protocol:R,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:t,usage:this.errorResourceUsage()}}async forceFatalCleanup(){this.cancelRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;for(let t of[...this.leases.keys()])try{await this.release(t)}catch(t){e??=t}if(!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch(t){e??=t}if(e)throw e;this.unregisterCleanup()}allocateWireLeaseId(){if(!Number.isSafeInteger(this.nextWireLeaseId)||this.nextWireLeaseId<=0)throw RangeError(`wire lease id space exhausted`);return this.nextWireLeaseId++}arrayBufferTransferBytes(e){let t=0;for(let n of e??[])if(n instanceof ArrayBuffer&&(t+=n.byteLength,!Number.isSafeInteger(t)))throw RangeError(`ArrayBuffer transfer bytes overflow`);return t}maybeUnregisterCompleted(){this.completed&&this.leases.size===0&&this.unregisterCleanup()}resourceUsage(){return this.options.driver.resourceUsage?.()}errorResourceUsage(){try{return this.resourceUsage()}catch{return}}};function Te(e,t){for(let n of e)for(let e of n.cells){let n=e.value;if(n.type===`shared`){let r=t[n.si];if(r){let t={type:`text`,text:r.text};r.runs!==void 0&&(t.runs=r.runs),r.phoneticRuns!==void 0&&(t.phoneticRuns=r.phoneticRuns),r.phoneticPr!==void 0&&(t.phoneticPr=r.phoneticPr),e.value=t}else e.value={type:`text`,text:``}}}return e}function Ee(e,t,n,r){let i=e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength),a=JSON.parse(new TextDecoder().decode(i));if(!a||typeof a!=`object`||!(`kind`in a))throw Error(`worksheet cursor returned an invalid unit`);let o=a;if(t!==(o.kind===`finished`))throw Error(`worksheet cursor terminal marker mismatch`);if(o.kind===`rows`){if(!Array.isArray(o.rows))throw Error(`worksheet row unit is missing rows`);return n&&Te(o.rows,n),r?.(o.rows),{kind:`rows`,rows:o.rows}}if(o.kind===`finished`){if(!o.worksheet||typeof o.worksheet!=`object`)throw Error(`worksheet terminal unit is missing its worksheet`);return o.worksheet.rows=[],{kind:`finished`,worksheet:o.worksheet}}throw Error(`worksheet cursor returned an unknown unit kind`)}function B(e,t){if(!Number.isSafeInteger(e)||e<0)throw Error(`${t} must be a non-negative safe integer`)}function V(e,t,n){return B(e,`resource measurement`),B(t,`resource measurement`),B(n,`resource measurement limit`),e>n||t>n||t>n-e?n===2**53-1?n:n+1:e+t}function H(e,t=2**53-1){B(t,`resource measurement limit`);let n=0;for(let r=0;r<e.length;r+=1){let i=e.charCodeAt(r),a;if(i<=127)a=1;else if(i<=2047)a=2;else if(i>=55296&&i<=56319&&r+1<e.length){let t=e.charCodeAt(r+1);t>=56320&&t<=57343?(a=4,r+=1):a=3}else a=3;if(n=V(n,a,t),n>t)return n}return n}function U(e,t=2**53-1){B(t,`resource measurement limit`);let n=V(0,2,t);if(n>t)return n;for(let r=0;r<e.length;r+=1){let i=e.charCodeAt(r),a;if(i===34||i===92||i===8||i===9||i===10||i===12||i===13)a=2;else if(i<=31)a=6;else if(i<=127)a=1;else if(i<=2047)a=2;else if(i>=55296&&i<=56319&&r+1<e.length){let t=e.charCodeAt(r+1);t>=56320&&t<=57343?(a=4,r+=1):a=6}else a=i>=55296&&i<=57343?6:3;if(n=V(n,a,t),n>t)return n}return n}function W(e,t){return V(0,e,t)}function G(e,t=2**53-1,n=!1){if(B(t,`resource measurement limit`),e===null)return{jsonBytes:W(4,t),stringValueUtf8Bytes:0};if(typeof e==`string`)return{jsonBytes:U(e,t),stringValueUtf8Bytes:H(e,t)};if(typeof e==`boolean`)return{jsonBytes:W(e?4:5,t),stringValueUtf8Bytes:0};if(typeof e==`number`)return{jsonBytes:W((Number.isFinite(e)?String(Object.is(e,-0)?0:e):`null`).length,t),stringValueUtf8Bytes:0};if(typeof e==`bigint`)throw TypeError(`BigInt values cannot be serialized to JSON`);if(Array.isArray(e)){let n=W(2,t),r=0;for(let i=0;i<e.length;i+=1){i!==0&&(n=V(n,1,t));let a=G(e[i],t,!0);n=V(n,a.jsonBytes,t),r=V(r,a.stringValueUtf8Bytes,t)}return{jsonBytes:n,stringValueUtf8Bytes:r}}if(typeof e==`object`){let n=W(2,t),r=0,i=0;for(let[a,o]of Object.entries(e)){if(o===void 0||typeof o==`function`||typeof o==`symbol`)continue;i++!==0&&(n=V(n,1,t)),n=V(n,U(a,t),t),n=V(n,1,t);let e=G(o,t);n=V(n,e.jsonBytes,t),r=V(r,e.stringValueUtf8Bytes,t)}return{jsonBytes:n,stringValueUtf8Bytes:r}}return{jsonBytes:n?W(4,t):0,stringValueUtf8Bytes:0}}const K=1e5,q=25e4,J=33554432,Y=67108864,De=Object.freeze({archiveEntryCount:0,declaredInflatedBytes:0,distinctInflatedBytes:0,operationInflatedBytes:0});function Oe(e){let t=e.reduce((e,t)=>V(e,t.cells.length,q),0);return{rows:e.length,cells:t,ownedUtf8Bytes:e.reduce((e,t)=>t.cells.reduce((e,t)=>{let n=G(t.value,J).stringValueUtf8Bytes;return V(e,V(n,t.formula===void 0?0:H(t.formula,J),J),J)},e),0)}}function ke(e,t){let n=G(e,67108864);return{...t,jsonBytes:n.jsonBytes}}function Ae(e,t){return{rows:V(e.rows,t.rows,K),cells:V(e.cells,t.cells,q),ownedUtf8Bytes:V(e.ownedUtf8Bytes,t.ownedUtf8Bytes,J)}}function X(e,t,n,r,i,a,o){let s=n===`worksheet-json`?`serialization`:`parsing`;return new x(`OOXML resource limit exceeded${t?` for ${t}`:``}: ${r} ${a} > ${i}`,{stage:s,violation:{format:`xlsx`,operation:e,resource:n,metric:r,...t===void 0?{}:{part:t},limit:i,observed:Math.min(a,i+1),configurable:!1,usage:o??De}})}function Z(e,t,n,r){let i=[[`rows`,e.rows,K],[`cells`,e.cells,q],[`owned-utf8-bytes`,e.ownedUtf8Bytes,J]];for(let[e,a,o]of i)if(a>o)throw X(t,n,e===`owned-utf8-bytes`?`worksheet-cell-content`:`worksheet-model`,e,o,a,r)}function je(e,t,n,r){if(e>Y)throw X(t,n,`worksheet-json`,`bytes`,Y,e,r)}var Me=class{coordinator=new Ce;sessions=new Map;operationTail=Promise.resolve();pendingOpens=new Map;resourceFailure;constructor(e,t,n=e=>e(this.requireArchive()),r){this.archive=e,this.acceptWorksheet=t,this.executeArchive=n,this.prepareRows=r}reserveOpen(e){this.pendingOpens.set(e.sessionId,{identity:e,canceled:!1})}abandonOpen(e){this.pendingOpens.delete(e)}get pendingOpenCount(){return this.pendingOpens.size}async open(e,t,n){if(this.resourceFailure)throw this.resourceFailure;let r=this.pendingOpens.get(n.sessionId);if(!r||r.identity.operationId!==n.operationId||r.identity.generation!==n.generation)throw Error(`worksheet pull session open reservation is stale or missing`);let i,a=new Promise(e=>{i=e}),o=this.operationTail.then(()=>this.coordinator.enqueue(async()=>{if(r.canceled)throw Error(`worksheet pull session open was canceled`);this.executeArchive(n=>n.open_sheet_cursor(e,t));let a=[],o={rows:0,cells:0,ownedUtf8Bytes:0},s,c=!1,l=new we({...n,maxByteCredit:67108864,coordinator:this.coordinator,driver:{pull:()=>{let e=this.executeArchive(e=>e.pull_sheet_cursor(128)),t=this.executeArchive(e=>e.sheet_cursor_pull_finished());if(this.acceptWorksheet){let n=Ee(e,t,void 0,this.prepareRows);try{if(n.kind===`rows`){let e=Ae(o,Oe(n.rows));Z(e,`get-worksheet-worker`,void 0,this.readResourceUsage()),a.push(...n.rows),o=e}else s=n.worksheet}catch(e){throw e instanceof x&&(this.resourceFailure??=e),e}}c=t;let n=be(e);return{payload:n,byteLength:n.byteLength,done:t,transfer:[n]}},measureChunk:({payload:e})=>e.byteLength,acknowledge:()=>{if(!c)return;let t,r;try{if(this.acceptWorksheet){if(!s)throw Error(`worksheet terminal payload is missing`);s.rows=s.parseError?[]:a;let n=s.parseError?{rows:0,cells:0,ownedUtf8Bytes:0}:o,i=ke(s,n),c=this.readResourceUsage();Z(i,`get-worksheet-worker`,void 0,c),je(i.jsonBytes,`get-worksheet-worker`,void 0,c);let l=this.acceptWorksheet(e,s,i,c);typeof l==`function`?t=l:l&&({rollback:t,commit:r}=l)}this.executeArchive(e=>e.acknowledge_sheet_cursor_terminal()),r?.()}catch(e){throw t?.(),e instanceof x&&(this.resourceFailure??=e),e}c=!1,this.sessions.delete(n.sessionId),i()},cancel:()=>{try{this.archive()&&this.executeArchive(e=>e.cancel_sheet_cursor())}finally{this.sessions.delete(n.sessionId),i()}},close:()=>{try{this.archive()&&this.executeArchive(e=>e.close_sheet_cursor())}finally{this.sessions.delete(n.sessionId),i()}},resourceUsage:()=>this.readResourceUsage()}});this.sessions.set(n.sessionId,{host:l,identity:n}),this.pendingOpens.delete(n.sessionId)}));this.operationTail=o.then(()=>a,()=>void 0);try{await o}catch(e){throw this.pendingOpens.delete(n.sessionId),i(),e}}async postOpenedSafely(e,t,n){try{t()}catch(t){await this.closeIdentity(e);try{n(t)}catch{}}}dispatch(e,t){let n=this.sessions.get(e.sessionId);if(n)return n.host.dispatch(e,t);let r=this.pendingOpens.get(e.sessionId);if(r&&(e.kind===`cancel`||e.kind===`close`)){let n=r.identity.operationId===e.operationId&&r.identity.generation===e.generation;return n&&(r.canceled=!0),t(n?{protocol:R,kind:`accepted`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,command:e.kind}:{protocol:R,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:{message:`stale lifecycle targets another pending worksheet operation`,errorName:`PullSessionProtocolError`,code:`ooxml-stale-lifecycle`}}),Promise.resolve()}return e.kind===`cancel`||e.kind===`close`?(t({protocol:R,kind:`accepted`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,command:e.kind}),Promise.resolve()):(t({protocol:R,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:L(Error(`worksheet pull session is not open`))}),Promise.resolve())}async dispatchSafely(e,t){try{await this.dispatch(e,t)}catch(n){try{t({protocol:R,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:L(n)})}catch{}}}run(e){let t=this.operationTail.then(()=>this.coordinator.enqueue(async()=>{if(this.resourceFailure)throw this.resourceFailure;return e()})).catch(e=>{throw e instanceof x&&(this.resourceFailure??=e),e});return this.operationTail=t.then(()=>void 0,()=>void 0),t}async reset(){for(let e of this.pendingOpens.values())e.canceled=!0;let e=1;for(let{host:t,identity:n}of[...this.sessions.values()])await t.dispatch({protocol:R,kind:`close`,...n,requestId:e++},()=>void 0);this.sessions.clear(),await this.operationTail,this.pendingOpens.clear(),this.resourceFailure=void 0}requireArchive(){let e=this.archive();if(!e)throw Error(`Workbook not loaded`);return e}async closeIdentity(e){let t=this.sessions.get(e.sessionId);if(t){await t.host.dispatch({protocol:R,kind:`close`,...e,requestId:1},()=>void 0);return}let n=this.pendingOpens.get(e.sessionId);n&&n.identity.operationId===e.operationId&&n.identity.generation===e.generation&&(n.canceled=!0)}readResourceUsage(){try{return k(this.executeArchive(e=>e.sheet_cursor_resource_usage()))}catch(e){if(String(e).includes(`worksheet cursor usage is unavailable`))return;throw e}}};function Ne(e){return!!e&&typeof e==`object`&&e.protocol===`ooxml-pull-v1`}const Q=new ce(y,{freeArchive:e=>e.free(),reinit:ne}),$=new Me(()=>Q.archive,void 0,e=>{let t=Q.archive;if(!t)throw Error(`Workbook not loaded`);return Q.run(()=>e(t))});self.onmessage=async t=>{let n=t.data;if(Ne(n)){await $.dispatchSafely(n,(e,t)=>self.postMessage(e,t));return}if(n.type===`init`){Q.setWasmInput(ie(n.wasmUrl)??n.wasmUrl);return}let r=n.id;n.type===`openSheetSession`&&$.reserveOpen(n);try{if(n.type===`openSheetSession`){await Q.ensureReady(),Q.archive&&Q.run(()=>Q.archive?.assert_healthy()),await $.open(n.sheetIndex,n.sheetName,n),await $.postOpenedSafely(n,()=>self.postMessage({type:`sheetSessionOpened`,id:r,sessionId:n.sessionId,operationId:n.operationId,generation:n.generation}),e=>self.postMessage({type:`error`,id:r,...L(e)}));return}n.type===`parse`&&await $.reset(),await $.run(async()=>{if(await Q.ensureReady(),n.type!==`parse`&&Q.archive){let e=Q.archive;Q.run(()=>e.assert_healthy())}if(n.type===`parse`){let[t,i,a]=xe(n.resourcePolicy),o=new Uint8Array(n.data),s=Q.run(()=>{let n=new e(o,t,i,a);return Q.setArchive(n),n.parse()}).buffer,c={type:`parsed`,id:r,workbookJson:s,usage:Q.run(()=>k(Q.archive.resource_usage()))};self.postMessage(c,[s]);return}let t=Q.archive;if(n.type===`extractImage`){if(!t)throw Error(`No xlsx loaded`);let e=Q.run(()=>t.extract_image(n.path).buffer),i={type:`imageExtracted`,id:r,bytes:e};self.postMessage(i,[e]);return}if(n.type===`resourceUsage`){if(!t)throw Error(`No xlsx loaded`);let e=Q.run(()=>k(t.resource_usage()));self.postMessage({type:`resourceUsage`,id:r,usage:e});return}if(n.type===`toMarkdown`){if(!t)throw Error(`No xlsx loaded`);let e={type:`markdownRendered`,id:r,markdown:Q.run(()=>t.to_markdown())};self.postMessage(e);return}})}catch(e){n.type===`openSheetSession`&&$.abandonOpen(n.sessionId);let t={type:`error`,id:r,...L(e)};try{self.postMessage(t)}catch{}}};", nt = typeof self < "u" && self.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", tt], { type: "text/javascript;charset=utf-8" });
function rt(e) {
	let t;
	try {
		if (t = nt && (self.URL || self.webkitURL).createObjectURL(nt), !t) throw "";
		let n = new Worker(t, {
			type: "module",
			name: e?.name
		});
		return n.addEventListener("error", () => {
			(self.URL || self.webkitURL).revokeObjectURL(t);
		}), n;
	} catch {
		return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(tt), {
			type: "module",
			name: e?.name
		});
	}
}
//#endregion
//#region packages/xlsx/src/wasm/xlsx_parser_bg.wasm?url
var it = new URL("xlsx_parser_bg.wasm", import.meta.url).href;
//#endregion
//#region packages/xlsx/src/sheet-visibility.ts
function at(e, t) {
	return !Number.isInteger(t) || t < 0 || t >= e.length ? "visible" : e[t].visibility ?? "visible";
}
//#endregion
//#region packages/xlsx/src/phonetic.ts
function ot(e) {
	return Array.from(e);
}
function st(e, t, n, r, i) {
	let a = ot(t), o = a.length, s = [];
	for (let t of e) {
		let e = t.sb, c = t.eb;
		if (!(e < c) || e >= o) continue;
		let l = Math.min(c, o), u = n + i(a.slice(0, e).join("")), d = i(a.slice(e, l).join("")), f = r === "center" ? "center" : r === "distributed" ? "distribute" : "start";
		s.push({
			text: t.text,
			x: u,
			width: d,
			spread: f
		});
	}
	return s;
}
//#endregion
//#region packages/xlsx/src/formula.ts
function Z(e) {
	return Array.isArray(e) ? e : [e];
}
function ct(e) {
	return Array.isArray(e) ? e[0] ?? 0 : e;
}
var lt = 8;
function ut(e, t) {
	try {
		return dt(_t(e, t));
	} catch {
		return !1;
	}
}
function dt(e) {
	let t = ct(e);
	return typeof t == "boolean" ? t : typeof t == "number" ? t !== 0 : typeof t == "string" ? t.length > 0 && t.toUpperCase() !== "FALSE" : !1;
}
function Q(e) {
	let t = ct(e);
	if (typeof t == "number") return t;
	if (typeof t == "boolean") return +!!t;
	if (t == null) return 0;
	let n = parseFloat(String(t));
	return isNaN(n) ? 0 : n;
}
function $(e) {
	let t = ct(e);
	return t == null ? "" : typeof t == "boolean" ? t ? "TRUE" : "FALSE" : String(t);
}
var ft = new Set([
	"<",
	">",
	"=",
	"+",
	"-",
	"*",
	"/",
	"&",
	"^",
	"%"
]);
function pt(e) {
	let t = [], n = 0, r = e;
	for (; n < r.length;) {
		let e = r[n];
		if (e === " " || e === "	" || e === "\n" || e === "\r") {
			n++;
			continue;
		}
		if (e === "(") {
			t.push({
				kind: "lparen",
				text: e
			}), n++;
			continue;
		}
		if (e === ")") {
			t.push({
				kind: "rparen",
				text: e
			}), n++;
			continue;
		}
		if (e === ",") {
			t.push({
				kind: "comma",
				text: e
			}), n++;
			continue;
		}
		if (e === ":") {
			t.push({
				kind: "colon",
				text: e
			}), n++;
			continue;
		}
		if (e === "\"") {
			let e = n + 1, i = "";
			for (; e < r.length;) {
				if (r[e] === "\"" && r[e + 1] === "\"") {
					i += "\"", e += 2;
					continue;
				}
				if (r[e] === "\"") break;
				i += r[e], e++;
			}
			t.push({
				kind: "str",
				text: i
			}), n = e + 1;
			continue;
		}
		if (e >= "0" && e <= "9") {
			let e = n;
			for (; e < r.length && (r[e] >= "0" && r[e] <= "9" || r[e] === ".");) e++;
			t.push({
				kind: "num",
				text: r.slice(n, e)
			}), n = e;
			continue;
		}
		if (ft.has(e)) {
			(e === "<" || e === ">") && (r[n + 1] === "=" || e === "<" && r[n + 1] === ">") ? (t.push({
				kind: "op",
				text: r.slice(n, n + 2)
			}), n += 2) : (t.push({
				kind: "op",
				text: e
			}), n++);
			continue;
		}
		if (e === "$" || mt(e)) {
			let e = n;
			for (; e < r.length && (r[e] === "$" || ht(r[e]));) e++;
			let i = r.slice(n, e);
			n = e;
			let a = gt(i);
			if (a) t.push({
				kind: "ref",
				text: i,
				ref: a
			});
			else {
				let e = i.toUpperCase();
				e === "TRUE" || e === "FALSE" ? t.push({
					kind: "bool",
					text: e
				}) : t.push({
					kind: "name",
					text: i
				});
			}
			continue;
		}
		n++;
	}
	return t;
}
function mt(e) {
	return e >= "A" && e <= "Z" || e >= "a" && e <= "z" || e === "_";
}
function ht(e) {
	return mt(e) || e >= "0" && e <= "9" || e === ".";
}
function gt(e) {
	let t = 0, n = !1, r = !1;
	e[t] === "$" && (n = !0, t++);
	let i = t;
	for (; t < e.length && e[t] >= "A" && e[t].toUpperCase() <= "Z" && !(!(e[t] >= "A" && e[t] <= "Z") && !(e[t] >= "a" && e[t] <= "z"));) t++;
	if (t === i) return null;
	let a = e.slice(i, t).toUpperCase();
	e[t] === "$" && (r = !0, t++);
	let o = t;
	for (; t < e.length && e[t] >= "0" && e[t] <= "9";) t++;
	if (t === o || t !== e.length) return null;
	let s = parseInt(e.slice(o, t), 10), c = 0;
	for (let e = 0; e < a.length; e++) c = c * 26 + (a.charCodeAt(e) - 64);
	return {
		colAbs: n,
		col: c,
		rowAbs: r,
		row: s
	};
}
function _t(e, t) {
	return bt({
		toks: pt(e),
		pos: 0
	}, t);
}
function vt(e) {
	return e.toks[e.pos];
}
function yt(e) {
	return e.toks[e.pos++];
}
function bt(e, t) {
	return xt(e, t);
}
function xt(e, t) {
	let n = St(e, t), r = vt(e);
	if (r && r.kind === "op" && (r.text === "<" || r.text === ">" || r.text === "<=" || r.text === ">=" || r.text === "=" || r.text === "<>")) {
		yt(e);
		let i = St(e, t);
		return Ct(r.text, n, i);
	}
	return n;
}
function St(e, t) {
	let n = wt(e, t);
	for (;;) {
		let r = vt(e);
		if (!r || r.kind !== "op" || r.text !== "&") break;
		yt(e);
		let i = wt(e, t);
		n = $(n) + $(i);
	}
	return n;
}
function Ct(e, t, n) {
	let r = typeof t == "string" && isNaN(parseFloat(t)) ? null : Q(t), i = typeof n == "string" && isNaN(parseFloat(n)) ? null : Q(n);
	if (r !== null && i !== null) switch (e) {
		case "<": return r < i;
		case ">": return r > i;
		case "<=": return r <= i;
		case ">=": return r >= i;
		case "=": return r === i;
		case "<>": return r !== i;
	}
	let a = String(t ?? ""), o = String(n ?? "");
	switch (e) {
		case "<": return a < o;
		case ">": return a > o;
		case "<=": return a <= o;
		case ">=": return a >= o;
		case "=": return a === o;
		case "<>": return a !== o;
	}
	return !1;
}
function wt(e, t) {
	let n = Tt(e, t);
	for (;;) {
		let r = vt(e);
		if (!r || r.kind !== "op" || r.text !== "+" && r.text !== "-") break;
		yt(e);
		let i = Tt(e, t);
		n = r.text === "+" ? Q(n) + Q(i) : Q(n) - Q(i);
	}
	return n;
}
function Tt(e, t) {
	let n = Et(e, t);
	for (;;) {
		let r = vt(e);
		if (!r || r.kind !== "op" || r.text !== "*" && r.text !== "/") break;
		yt(e);
		let i = Et(e, t);
		if (r.text === "*") n = Q(n) * Q(i);
		else {
			let e = Q(i);
			n = e === 0 ? 0 : Q(n) / e;
		}
	}
	return n;
}
function Et(e, t) {
	let n = vt(e);
	return n && n.kind === "op" && n.text === "-" ? (yt(e), -Q(Et(e, t))) : n && n.kind === "op" && n.text === "+" ? (yt(e), Q(Et(e, t))) : Dt(e, t);
}
function Dt(e, t) {
	let n = yt(e);
	if (!n) return 0;
	if (n.kind === "num") return parseFloat(n.text);
	if (n.kind === "str") return n.text;
	if (n.kind === "bool") return n.text === "TRUE";
	if (n.kind === "lparen") {
		let n = bt(e, t), r = yt(e);
		if (!r || r.kind !== "rparen") throw Error("missing )");
		return n;
	}
	if (n.kind === "ref") {
		if (vt(e)?.kind === "colon") {
			yt(e);
			let r = yt(e);
			if (r?.kind !== "ref" || !r.ref) throw Error("range: expected ref after :");
			return At(n.ref, r.ref, t);
		}
		return kt(n.ref, t);
	}
	if (n.kind === "name") {
		if (vt(e)?.kind === "lparen") {
			yt(e);
			let r = [];
			if (vt(e)?.kind !== "rparen") for (r.push(bt(e, t)); vt(e)?.kind === "comma";) yt(e), r.push(bt(e, t));
			let i = yt(e);
			if (!i || i.kind !== "rparen") throw Error("missing )");
			return Mt(n.text, r, t);
		}
		let r = t.definedNames.get(n.text);
		return r && t.depth < lt ? _t(Ot(r.formula), {
			...t,
			anchorRow: 1,
			anchorCol: 1,
			depth: t.depth + 1
		}) : 0;
	}
	return 0;
}
function Ot(e) {
	let t = e.match(/^(?:'[^']*'|[A-Za-z_][A-Za-z0-9_.]*)!(.*)$/);
	return t ? t[1] : e;
}
function kt(e, t) {
	let n = e.colAbs ? e.col : e.col + (t.col - t.anchorCol), r = e.rowAbs ? e.row : e.row + (t.row - t.anchorRow);
	return jt(t.cellIndex.get(`${r}:${n}`));
}
function At(e, t, n) {
	let r = e.colAbs ? e.col : e.col + (n.col - n.anchorCol), i = e.rowAbs ? e.row : e.row + (n.row - n.anchorRow), a = t.colAbs ? t.col : t.col + (n.col - n.anchorCol), o = t.rowAbs ? t.row : t.row + (n.row - n.anchorRow), s = Math.min(r, a), c = Math.max(r, a), l = Math.min(i, o), u = Math.max(i, o), d = [], f = 4096;
	for (let e = l; e <= u && d.length < f; e++) for (let t = s; t <= c && d.length < f; t++) d.push(jt(n.cellIndex.get(`${e}:${t}`)));
	return d;
}
function jt(e) {
	if (!e) return null;
	switch (e.value.type) {
		case "number": return e.value.number;
		case "bool": return e.value.bool;
		case "text": return e.value.text;
		case "error": return null;
		default: return null;
	}
}
function Mt(e, t, n) {
	switch (e.toUpperCase()) {
		case "AND": return t.flatMap(Z).every((e) => dt(e));
		case "OR": return t.flatMap(Z).some((e) => dt(e));
		case "NOT": return !dt(t[0]);
		case "IF": return dt(t[0]) ? t[1] ?? !0 : t[2] ?? !1;
		case "IFERROR": return t[0] == null ? t[1] ?? 0 : t[0];
		case "IFS":
			for (let e = 0; e + 1 < t.length; e += 2) if (dt(t[e])) return t[e + 1];
			return null;
		case "TRUE": return !0;
		case "FALSE": return !1;
		case "ISBLANK": {
			let e = ct(t[0]);
			return e == null || e === "";
		}
		case "ISNUMBER": return typeof ct(t[0]) == "number";
		case "ISTEXT": return typeof ct(t[0]) == "string";
		case "ISNONTEXT": return typeof ct(t[0]) != "string";
		case "ISERROR":
		case "ISERR":
		case "ISNA": return ct(t[0]) == null;
		case "ISLOGICAL": return typeof ct(t[0]) == "boolean";
		case "ROUNDDOWN": {
			let e = Q(t[0]), n = 10 ** Q(t[1]);
			return (e >= 0 ? Math.floor(e * n) : Math.ceil(e * n)) / n;
		}
		case "ROUNDUP": {
			let e = Q(t[0]), n = 10 ** Q(t[1]);
			return (e >= 0 ? Math.ceil(e * n) : Math.floor(e * n)) / n;
		}
		case "ROUND": {
			let e = Q(t[0]), n = 10 ** Q(t[1]);
			return Math.round(e * n) / n;
		}
		case "INT": return Math.floor(Q(t[0]));
		case "TRUNC": {
			let e = Q(t[0]), n = 10 ** Q(t[1] ?? 0);
			return (e >= 0 ? Math.floor(e * n) : Math.ceil(e * n)) / n;
		}
		case "CEILING": {
			let e = Q(t[0]), n = Q(t[1] ?? 1);
			return n === 0 ? 0 : Math.ceil(e / n) * n;
		}
		case "FLOOR": {
			let e = Q(t[0]), n = Q(t[1] ?? 1);
			return n === 0 ? 0 : Math.floor(e / n) * n;
		}
		case "MOD": {
			let e = Q(t[0]), n = Q(t[1]);
			return n === 0 ? null : e - Math.floor(e / n) * n;
		}
		case "POWER": return Q(t[0]) ** +Q(t[1]);
		case "SQRT": {
			let e = Q(t[0]);
			return e < 0 ? null : Math.sqrt(e);
		}
		case "ABS": return Math.abs(Q(t[0]));
		case "SIGN": {
			let e = Q(t[0]);
			return e > 0 ? 1 : e < 0 ? -1 : 0;
		}
		case "EXP": return Math.exp(Q(t[0]));
		case "LN": {
			let e = Q(t[0]);
			return e <= 0 ? null : Math.log(e);
		}
		case "LOG10": {
			let e = Q(t[0]);
			return e <= 0 ? null : Math.log10(e);
		}
		case "MIN": {
			let e = t.flatMap(Z).filter((e) => typeof e == "number");
			return e.length ? Math.min(...e) : 0;
		}
		case "MAX": {
			let e = t.flatMap(Z).filter((e) => typeof e == "number");
			return e.length ? Math.max(...e) : 0;
		}
		case "SUM": return t.flatMap(Z).reduce((e, t) => e + (typeof t == "number" ? t : 0), 0);
		case "AVERAGE": {
			let e = t.flatMap(Z).filter((e) => typeof e == "number");
			return e.length ? e.reduce((e, t) => e + t, 0) / e.length : null;
		}
		case "COUNT": return t.flatMap(Z).filter((e) => typeof e == "number").length;
		case "COUNTA": return t.flatMap(Z).filter((e) => e != null && e !== "").length;
		case "COUNTBLANK": return t.flatMap(Z).filter((e) => e == null || e === "").length;
		case "COUNTIF": return Nt(Z(t[0]), t[1]);
		case "SUMIF": return Pt(Z(t[0]), t[1], t[2] === void 0 ? null : Z(t[2]));
		case "AVERAGEIF": {
			let e = Z(t[0]), n = Pt(e, t[1], t[2] === void 0 ? null : Z(t[2])), r = Nt(e, t[1]);
			return r === 0 ? null : Q(n) / r;
		}
		case "LEN": return $(t[0]).length;
		case "LEFT": return $(t[0]).slice(0, Math.max(0, Q(t[1] ?? 1)));
		case "RIGHT": {
			let e = $(t[0]), n = Math.max(0, Q(t[1] ?? 1));
			return n >= e.length ? e : e.slice(e.length - n);
		}
		case "MID": {
			let e = $(t[0]), n = Math.max(1, Q(t[1])) - 1, r = Math.max(0, Q(t[2]));
			return e.slice(n, n + r);
		}
		case "UPPER": return $(t[0]).toUpperCase();
		case "LOWER": return $(t[0]).toLowerCase();
		case "TRIM": return $(t[0]).replace(/\s+/g, " ").trim();
		case "EXACT": return $(t[0]) === $(t[1]);
		case "FIND": {
			let e = $(t[0]), n = $(t[1]), r = Math.max(1, Q(t[2] ?? 1)) - 1, i = n.indexOf(e, r);
			return i < 0 ? null : i + 1;
		}
		case "SEARCH": {
			let e = $(t[0]).toLowerCase(), n = $(t[1]).toLowerCase(), r = Math.max(1, Q(t[2] ?? 1)) - 1, i = n.indexOf(e, r);
			return i < 0 ? null : i + 1;
		}
		case "CONCATENATE":
		case "CONCAT": return t.flatMap(Z).map((e) => e == null ? "" : typeof e == "boolean" ? e ? "TRUE" : "FALSE" : String(e)).join("");
		case "T": {
			let e = ct(t[0]);
			return typeof e == "string" ? e : "";
		}
		case "N": {
			let e = ct(t[0]);
			return typeof e == "number" ? e : typeof e == "boolean" ? +!!e : 0;
		}
		case "VALUE": return Q(t[0]);
		case "ROW": return n.row;
		case "COLUMN": return n.col;
		case "TODAY": return It();
		case "NOW": return Lt();
		case "DATE": return Rt(Q(t[0]), Q(t[1]), Q(t[2]));
		case "YEAR": return Bt(Q(t[0])).y;
		case "MONTH": return Bt(Q(t[0])).m;
		case "DAY": return Bt(Q(t[0])).d;
		case "WEEKDAY": {
			let e = zt(Q(t[0])).getUTCDay(), n = Q(t[1] ?? 1);
			return n === 2 ? e === 0 ? 7 : e : n === 3 ? e === 0 ? 6 : e - 1 : e + 1;
		}
		default: return 0;
	}
}
function Nt(e, t) {
	let n = Ft(t), r = 0;
	for (let t of e) n(t) && r++;
	return r;
}
function Pt(e, t, n) {
	let r = Ft(t), i = n ?? e, a = 0;
	for (let t = 0; t < e.length; t++) if (r(e[t])) {
		let e = i[t];
		typeof e == "number" && (a += e);
	}
	return a;
}
function Ft(e) {
	let t = ct(e);
	if (typeof t != "string") {
		let e = typeof t == "number" ? t : null;
		return (n) => e !== null && typeof n == "number" ? n === e : n === t;
	}
	let n = t.match(/^(<=|>=|<>|<|>|=)(.*)$/), r = n ? n[1] : "=", i = n ? n[2] : t, a = i.trim() === "" ? NaN : parseFloat(i), o = !isNaN(a) && /^-?\d+(\.\d+)?$/.test(i.trim());
	return (e) => {
		if (o && typeof e == "number") switch (r) {
			case "<": return e < a;
			case ">": return e > a;
			case "<=": return e <= a;
			case ">=": return e >= a;
			case "<>": return e !== a;
			default: return e === a;
		}
		let t = e == null ? "" : typeof e == "boolean" ? e ? "TRUE" : "FALSE" : String(e);
		switch (r) {
			case "<>": return t !== i;
			case "<": return t < i;
			case ">": return t > i;
			case "<=": return t <= i;
			case ">=": return t >= i;
			default: return t === i;
		}
	};
}
function It() {
	let e = /* @__PURE__ */ new Date();
	return ie(new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), !1);
}
function Lt() {
	return ie(new Date(Date.now()), !1);
}
function Rt(e, t, n) {
	return Math.floor(ie(new Date(Date.UTC(e, t - 1, n)), !1));
}
function zt(e) {
	return le(Math.floor(e), !1);
}
function Bt(e) {
	let t = zt(e);
	return {
		y: t.getUTCFullYear(),
		m: t.getUTCMonth() + 1,
		d: t.getUTCDate()
	};
}
//#endregion
//#region packages/xlsx/src/number-format.ts
var Vt = /* @__PURE__ */ new Map();
function Ht(e) {
	let t = e ?? "", n = Vt.get(t);
	if (n) return n;
	let r = new Intl.DateTimeFormat(e, {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		timeZone: "UTC"
	});
	return Vt.set(t, r), r;
}
function Ut(e) {
	switch (e.type) {
		case "empty": return "";
		case "text": return e.text;
		case "number": return String(e.number);
		case "bool": return e.bool ? "TRUE" : "FALSE";
		case "error": return e.error;
		case "shared": return "";
	}
}
function Wt(e, t, n, r = !1) {
	return Gt(e, t, n, r).text;
}
function Gt(e, t, n, r = !1) {
	let i = t.cellXfs[e.styleIndex ?? 0]?.numFmtId ?? 0, a = t.numFmts?.find((e) => e.numFmtId === i)?.formatCode ?? null, o = n?.numFmtId ?? i, s = n?.formatCode ?? a;
	if (e.value.type !== "number") {
		let t = Ut(e.value);
		return { text: s ? Kt(t, s) : t };
	}
	let c = qt(e.formula);
	return un(c ?? e.value.number, o, s, c === null ? r : !1);
}
function Kt(e, t) {
	let n = pn(t), r;
	if (n.length >= 4) r = n[3];
	else {
		let t = n[n.length - 1];
		if (!t.includes("@")) return e;
		r = t;
	}
	if (r === "") return "";
	let i = "", a = 0;
	for (; a < r.length;) {
		let t = r[a];
		if (t === "\"") {
			for (a++; a < r.length && r[a] !== "\"";) i += r[a++];
			a < r.length && a++;
		} else if (t === "\\") a + 1 < r.length && (i += r[a + 1]), a += 2;
		else if (t === "[") {
			for (; a < r.length && r[a] !== "]";) a++;
			a < r.length && a++;
		} else t === "@" ? (i += e, a++) : t === "_" || t === "*" ? a += 2 : (i += t, a++);
	}
	return i;
}
function qt(e) {
	if (!e) return null;
	let t = e.trim().replace(/^=/, "").toUpperCase().replace(/\s+/g, "");
	return t === "TODAY()" ? It() : t === "NOW()" ? Lt() : null;
}
var Jt = {
	15: "d-mmm-yy",
	16: "d-mmm",
	17: "mmm-yy",
	18: "h:mm AM/PM",
	19: "h:mm:ss AM/PM",
	20: "h:mm",
	21: "h:mm:ss",
	22: "m/d/yyyy h:mm",
	27: "[$-411]ge.m.d",
	28: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	29: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	30: "m/d/yy",
	31: "yyyy\"年\"m\"月\"d\"日\"",
	50: "[$-411]ge.m.d",
	51: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	52: "yyyy\"年\"m\"月\"",
	53: "m\"月\"d\"日\"",
	54: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	55: "yyyy\"年\"m\"月\"",
	56: "m\"月\"d\"日\"",
	57: "[$-411]ge.m.d",
	58: "[$-411]ggge\"年\"m\"月\"d\"日\""
}, Yt = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
], Xt = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
], Zt = [
	"日",
	"月",
	"火",
	"水",
	"木",
	"金",
	"土"
], Qt = [
	"日曜日",
	"月曜日",
	"火曜日",
	"水曜日",
	"木曜日",
	"金曜日",
	"土曜日"
], $t = [
	{
		start: new Date(Date.UTC(2019, 4, 1)),
		abbr: "R",
		short: "令",
		long: "令和"
	},
	{
		start: new Date(Date.UTC(1989, 0, 8)),
		abbr: "H",
		short: "平",
		long: "平成"
	},
	{
		start: new Date(Date.UTC(1926, 11, 25)),
		abbr: "S",
		short: "昭",
		long: "昭和"
	},
	{
		start: new Date(Date.UTC(1912, 6, 30)),
		abbr: "T",
		short: "大",
		long: "大正"
	},
	{
		start: new Date(Date.UTC(1868, 0, 25)),
		abbr: "M",
		short: "明",
		long: "明治"
	}
];
function en(e) {
	for (let t of $t) if (e.getTime() >= t.start.getTime()) return {
		abbr: t.abbr,
		short: t.short,
		long: t.long,
		year: e.getUTCFullYear() - t.start.getUTCFullYear() + 1
	};
	let t = $t[$t.length - 1];
	return {
		abbr: t.abbr,
		short: t.short,
		long: t.long,
		year: e.getUTCFullYear()
	};
}
function tn(e, t, n = !1) {
	let r = le(e, n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCDay(), c = r.getUTCHours(), l = r.getUTCMinutes(), u = r.getUTCSeconds(), d = t.split(";")[0], f = /am\/pm|a\/p/i.test(d), p = null, m = () => p ??= en(r), h = "", g = 0, _ = !1;
	for (; g < d.length;) {
		let t = d[g];
		if (t === "\"") {
			for (g++; g < d.length && d[g] !== "\"";) h += d[g++];
			g < d.length && g++, _ = !1;
		} else if (t === "[") {
			let t = d.indexOf("]", g), n = t > g ? d.slice(g + 1, t) : "", r = n.match(/^([hms])\1*$/i);
			if (r) {
				let i = r[1].toLowerCase(), a = e < 0 ? "-" : "", o = Math.floor(Math.abs(e) * 86400), s;
				s = i === "h" ? Math.floor(o / 3600) : i === "m" ? Math.floor(o / 60) : o;
				let c = n.length >= 2 ? String(s).padStart(n.length, "0") : String(s);
				h += a + c, g = t + 1, _ = i === "h";
			} else {
				for (; g < d.length && d[g] !== "]";) g++;
				g < d.length && g++;
			}
		} else if (t === "_") g += 2;
		else if (t === "*") g += 2;
		else if (t === "\\") g + 1 < d.length && (h += d[g + 1]), g += 2, _ = !1;
		else if (t === "y" || t === "Y") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "y";) e++, g++;
			h += e <= 2 ? String(i).slice(-2) : String(i).padStart(4, "0"), _ = !1;
		} else if (t === "m" || t === "M") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "m";) e++, g++;
			let t = d.slice(g).replace(/\[[^\]]*\]/g, "");
			_ || /^:s/i.test(t) ? h += e >= 2 ? String(l).padStart(2, "0") : String(l) : e === 1 ? h += String(a) : e === 2 ? h += String(a).padStart(2, "0") : e === 3 ? h += Yt[a - 1].slice(0, 3) : e === 4 ? h += Yt[a - 1] : h += Yt[a - 1][0], _ = !1;
		} else if (t === "d" || t === "D") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "d";) e++, g++;
			e === 1 ? h += String(o) : e === 2 ? h += String(o).padStart(2, "0") : e === 3 ? h += Xt[s].slice(0, 3) : h += Xt[s], _ = !1;
		} else if (t === "h" || t === "H") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "h";) e++, g++;
			let t = f ? c % 12 || 12 : c;
			h += e >= 2 ? String(t).padStart(2, "0") : String(t), _ = !0;
		} else if (t === "s" || t === "S") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "s";) e++, g++;
			h += e >= 2 ? String(u).padStart(2, "0") : String(u), _ = !1;
		} else if (t === "g" || t === "G") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "g";) e++, g++;
			let t = m();
			e === 1 ? h += t.abbr : e === 2 ? h += t.short : h += t.long, _ = !1;
		} else if (t === "e" || t === "E") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "e";) e++, g++;
			let t = m().year;
			h += e >= 2 ? String(t).padStart(2, "0") : String(t), _ = !1;
		} else if (t === "r" || t === "R") {
			let e = 0;
			for (; g < d.length && d[g].toLowerCase() === "r";) e++, g++;
			let t = m().year;
			h += e >= 2 ? String(t).padStart(2, "0") : String(t), _ = !1;
		} else if (t === "A" || t === "a") {
			let e = d.slice(g).toUpperCase();
			e.startsWith("AAAA") ? (h += Qt[s], g += 4) : e.startsWith("AAA") ? (h += Zt[s], g += 3) : e.startsWith("AM/PM") ? (h += c < 12 ? "AM" : "PM", g += 5) : e.startsWith("A/P") ? (h += c < 12 ? "A" : "P", g += 3) : (h += t, g++), _ = !1;
		} else h += t, g++, t !== ":" && t !== "/" && t !== "-" && t !== "." && t !== " " && (_ = !1);
	}
	return h;
}
function nn(e) {
	if (/\[[hms]+\]/i.test(e)) return !0;
	let t = e.replace(/"[^"]*"/g, "").replace(/\[[^\]]*\]/g, "");
	return /[yd]/i.test(t) || /a{3,}/i.test(t);
}
var rn = 11, an = 6;
function on(e) {
	return e.includes(".") ? e.replace(/0+$/, "").replace(/\.$/, "") : e;
}
function sn(e) {
	return `${e >= 0 ? "+" : "-"}${Math.abs(e).toString().padStart(2, "0")}`;
}
function cn(e) {
	let [t, n] = e.toExponential(an - 1).split("e");
	return `${on(t)}E${sn(Number(n))}`;
}
function ln(e) {
	if (!Number.isFinite(e)) return String(e);
	if (e === 0) return "0";
	let t = e < 0, n = Math.abs(e), r = Number(n.toExponential(rn - 1).split("e")[1]), i = r >= rn || r < -5 ? cn(n) : on(n.toPrecision(rn));
	return t ? `-${i}` : i;
}
function un(e, t, n, r = !1) {
	if (t === 14 && !n) {
		let t = typeof navigator > "u" ? void 0 : navigator.language, n = le(e, r);
		return { text: Ht(t).format(n) };
	}
	let i = Jt[t];
	if (i) return { text: tn(e, i, r) };
	if (n && n.trim().toLowerCase() === "general") return { text: ln(e) };
	if (n) return nn(n) ? { text: tn(e, n, r) } : Cn(e, n);
	switch (t) {
		case 0: return { text: ln(e) };
		case 1: return Cn(e, "0");
		case 2: return Cn(e, "0.00");
		case 3: return Cn(e, "#,##0");
		case 4: return Cn(e, "#,##0.00");
		case 9: return Cn(e, "0%");
		case 10: return Cn(e, "0.00%");
		case 11: return Cn(e, "0.00E+00");
		case 37: return Cn(e, "#,##0 ;(#,##0)");
		case 38: return Cn(e, "#,##0 ;[Red](#,##0)");
		case 39: return Cn(e, "#,##0.00;(#,##0.00)");
		case 40: return Cn(e, "#,##0.00;[Red](#,##0.00)");
		case 48: return Cn(e, "##0.0E+0");
		case 49: return { text: String(e) };
		default: return { text: ln(e) };
	}
}
var dn = {
	black: "#000000",
	blue: "#0000FF",
	cyan: "#00FFFF",
	green: "#008000",
	magenta: "#FF00FF",
	red: "#FF0000",
	white: "#FFFFFF",
	yellow: "#FFFF00"
}, fn = /* @__PURE__ */ "#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#800000.#008000.#000080.#808000.#800080.#008080.#C0C0C0.#808080.#9999FF.#993366.#FFFFCC.#CCFFFF.#660066.#FF8080.#0066CC.#CCCCFF.#000080.#FF00FF.#FFFF00.#00FFFF.#800080.#800000.#008080.#0000FF.#00CCFF.#CCFFFF.#CCFFCC.#FFFF99.#99CCFF.#FF99CC.#CC99FF.#FFCC99.#3366FF.#33CCCC.#99CC00.#FFCC00.#FF9900.#FF6600.#666699.#969696.#003366.#339966.#003300.#333300.#993300.#993366.#333399.#333333".split(".");
function pn(e) {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		if (i === "\"") {
			for (n += i, r++; r < e.length && e[r] !== "\"";) n += e[r++];
			r < e.length && (n += e[r++]);
		} else if (i === "\\") n += i, r + 1 < e.length && (n += e[r + 1]), r += 2;
		else if (i === "[") {
			for (n += i, r++; r < e.length && e[r] !== "]";) n += e[r++];
			r < e.length && (n += e[r++]);
		} else i === ";" ? (t.push(n), n = "", r++) : (n += i, r++);
	}
	return t.push(n), t;
}
function mn(e) {
	let t = "", n, r, i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a === "\"") {
			for (t += a, i++; i < e.length && e[i] !== "\"";) t += e[i++];
			i < e.length && (t += e[i++]);
		} else if (a === "\\") t += a, i + 1 < e.length && (t += e[i + 1]), i += 2;
		else if (a === "[") {
			let o = e.indexOf("]", i);
			if (o < 0) {
				t += a, i++;
				continue;
			}
			let s = e.slice(i + 1, o), c = s.toLowerCase(), l = c.match(/^color(\d{1,2})$/), u = s.match(/^(<=|>=|<>|<|>|=)\s*(-?[0-9.]+(?:[eE][-+]?\d+)?)$/);
			if (c in dn) n = dn[c];
			else if (l) {
				let e = parseInt(l[1], 10);
				e >= 1 && e <= 56 && (n = fn[e + 7] ?? n);
			} else u ? r = {
				op: u[1],
				value: Number(u[2])
			} : t += e.slice(i, o + 1);
			i = o + 1;
		} else t += a, i++;
	}
	return {
		body: t,
		color: n,
		condition: r
	};
}
function hn(e, t) {
	switch (e.op) {
		case "<": return t < e.value;
		case "<=": return t <= e.value;
		case ">": return t > e.value;
		case ">=": return t >= e.value;
		case "=": return t === e.value;
		case "<>": return t !== e.value;
	}
}
function gn(e) {
	let t = [], n = "", r = "", i = !1, a = !1, o, s = !1, c = 0, l = 0, u = (e) => {
		if (!e) return;
		!a && !s && (c = n.replace(/,/g, "").length);
		let r = t[t.length - 1];
		r && r.kind === "lit" ? r.text += e : t.push({
			kind: "lit",
			text: e
		});
	}, d = 0;
	for (; d < e.length;) {
		let c = e[d];
		if (c === "\"") {
			d++;
			let t = "";
			for (; d < e.length && e[d] !== "\"";) t += e[d++];
			d < e.length && d++, u(t);
		} else if (c === "\\") d + 1 < e.length && u(e[d + 1]), d += 2;
		else if (c === "[") {
			let t = e.indexOf("]", d), n = t > d ? e.slice(d + 1, t) : "";
			if (n.startsWith("$")) {
				let e = n.slice(1), t = e.indexOf("-");
				u(t >= 0 ? e.slice(0, t) : e);
			}
			d = t < 0 ? e.length : t + 1;
		} else if (c === "_") u(" "), d += 2;
		else if (c === "*") u(e[d + 1] ?? ""), d += 2;
		else if (c === "#" || c === "0" || c === "?") a ? (r += c, t.push({
			kind: "fracph",
			ph: c
		})) : (n += c, t.push({
			kind: "intph",
			ph: c
		})), l = 0, d++;
		else if (c === ".") a = !0, t.push({ kind: "dot" }), d++;
		else if (c === ",") a || (n += ","), l++, d++;
		else if (c === "/" && n.replace(/,/g, "").length > 0) {
			s = !0, t.push({ kind: "fraction" }), d++;
			let n = "";
			for (; d < e.length && /[0-9#?]/.test(e[d]);) n += e[d++];
			t[t.length - 1].den = n;
		} else if (c === "%") i = !0, t.push({ kind: "percent" }), d++;
		else if ((c === "E" || c === "e") && (e[d + 1] === "+" || e[d + 1] === "-")) {
			let n = e[d + 1] === "+";
			d += 2;
			let r = 0;
			for (; d < e.length && (e[d] === "0" || e[d] === "#" || e[d] === "?");) r++, d++;
			o = {
				plus: n,
				width: Math.max(r, 1)
			}, t.push({ kind: "exp" });
		} else u(c), d++;
	}
	let f = l, p = /,(?=[#0?])/.test(n), m = n.replace(/,/g, ""), h;
	if (s) {
		let e = t.find((e) => e.kind === "fraction")?.den ?? "?", n = e.match(/[0-9]+/);
		h = {
			wholeSpec: m.slice(0, c),
			numSpec: m.slice(c) || "?",
			denSpec: e.replace(/[^0#?]/g, ""),
			fixedDen: n ? parseInt(n[0], 10) : null
		};
	}
	return {
		parts: t,
		intSpec: m,
		fracSpec: r,
		hasPercent: i,
		commaScale: f,
		grouping: p,
		exp: o,
		fraction: h
	};
}
function _n(e) {
	return e.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function vn(e, t, n) {
	let r = t.split(""), i = e.split(""), a = [], o = i.length - 1, s = [];
	for (let e = r.length - 1; e >= 0; e--) o >= 0 ? (a.unshift(i[o]), s.unshift(i[o]), o--) : r[e] === "0" ? (a.unshift("0"), s.unshift("0")) : r[e] === "?" && a.unshift(" ");
	for (; o >= 0;) a.unshift(i[o]), s.unshift(i[o]), o--;
	if (n) {
		let e = _n(s.join(""));
		return (a.length - s.length > 0 ? a.slice(0, a.length - s.length).join("") : "") + e;
	}
	return a.join("");
}
function yn(e, t) {
	let n = t.length;
	if (n === 0) return "";
	let r = e.padEnd(n, "0").slice(0, n).split("");
	for (let e = n - 1; e >= 0; e--) {
		let n = t[e] ?? "#";
		if (r[e] === "0" && n === "#") r[e] = "";
		else if (r[e] === "0" && n === "?") r[e] = " ";
		else break;
	}
	return r.join("");
}
function bn(e, t, n) {
	if (n !== null) return [Math.round(e * n), n];
	let r = 10 ** Math.max(t, 1) - 1, i = 0, a = 1, o = Math.abs(e), s = [0, 1], c = [1, 1];
	for (let t = 0; t < 100; t++) {
		let t = s[0] + c[0], n = s[1] + c[1];
		if (n > r) break;
		let l = t / n, u = Math.abs(l - e);
		if (u < o && (o = u, i = t, a = n), l < e) s = [t, n];
		else if (l > e) c = [t, n];
		else break;
	}
	return [i, a];
}
function xn(e, t, n) {
	let r = gn(t), i = n ? Math.abs(e) : e;
	r.hasPercent && (i *= 100), r.commaScale > 0 && (i /= 1e3 ** r.commaScale);
	let a = i < 0 ? "-" : "", o = Math.abs(i);
	if (r.fraction) {
		let e = Math.floor(o), t = o - e, { wholeSpec: n, numSpec: i, denSpec: s, fixedDen: c } = r.fraction, l = n.length > 0, [u, d] = bn(t, s.length, c), f = (e, t) => {
			let n = String(e), r = t.includes("0") ? "0" : " ";
			for (; n.length < t.length;) n = r + n;
			return n;
		}, p = (e, t) => {
			let n = String(e), r = t.includes("0") ? "0" : " ";
			for (; n.length < t.length;) n += r;
			return n;
		}, m = a;
		if (l) {
			let t = e > 0 ? String(e) : n.includes("0") ? "0" : "";
			if (u === 0) {
				let e = c === null ? s.length || 1 : String(c).length;
				m += t + " ".repeat(1 + i.length + 1 + e);
			} else {
				let e = c === null ? p(d, s) : String(c);
				m += t + " " + f(u, i) + "/" + e;
			}
		} else {
			let t = u + e * d, n = c === null ? p(d, s) : String(c);
			m += f(t, i) + "/" + n;
		}
		return m;
	}
	if (r.exp) {
		let e = Math.max(r.intSpec.length, 1), t = r.fracSpec.length, n = 0, i = 0;
		o !== 0 && (i = Math.floor(Math.log10(o)), i = Math.floor(i / e) * e, n = o / 10 ** i, parseFloat(M(n, t)) >= 10 ** e && (i += e, n = o / 10 ** i));
		let [s, c = ""] = M(n, t).split(".");
		return a + Sn(r, vn(s, r.intSpec, !1), yn(c, r.fracSpec), "E" + (i < 0 ? "-" : r.exp.plus ? "+" : "") + String(Math.abs(i)).padStart(r.exp.width, "0"));
	}
	let s = r.fracSpec.length, [c, l = ""] = M(o, s).split("."), u = c.replace(/^0+/, ""), d = /[0]/.test(r.intSpec) || r.intSpec === "" && !1;
	return u === "" && d && (u = "0"), a + Sn(r, vn(u, r.intSpec, r.grouping), yn(l, r.fracSpec), "");
}
function Sn(e, t, n, r) {
	let i = t.split(""), a = [];
	e.parts.forEach((e, t) => {
		e.kind === "intph" && a.push(t);
	});
	let o = n.split(""), s = [];
	e.parts.forEach((e, t) => {
		e.kind === "fracph" && s.push(t);
	});
	let c = /* @__PURE__ */ new Map(), l = i.length - 1;
	for (let e = a.length - 1; e >= 0; e--) if (e === 0) {
		let t = "";
		for (; l >= 0;) t = i[l--] + t;
		c.set(a[e], t);
	} else l >= 0 ? c.set(a[e], i[l--]) : c.set(a[e], "");
	let u = /* @__PURE__ */ new Map();
	for (let e = 0; e < s.length; e++) u.set(s[e], o[e] ?? "");
	let d = e.fracSpec.length > 0 && (n.length > 0 || /[0?]/.test(e.fracSpec)), f = "";
	for (let t = 0; t < e.parts.length; t++) {
		let n = e.parts[t];
		n.kind === "lit" ? f += n.text : n.kind === "intph" ? f += c.get(t) ?? "" : n.kind === "fracph" ? f += u.get(t) ?? "" : n.kind === "dot" ? f += d ? "." : "" : n.kind === "percent" ? f += "%" : n.kind === "exp" && (f += r);
	}
	return f;
}
function Cn(e, t) {
	let n = pn(t).map(mn), r = n.some((e) => e.condition), i, a = !1;
	if (r) {
		let t = !1;
		for (let r of n) if (r.condition) {
			if (hn(r.condition, e)) {
				i = r, t = !0;
				break;
			}
		} else if (i ??= r, i === r) break;
		if (!i) return { text: "#" };
		a = t && e < 0;
	} else e > 0 ? i = n[0] : e < 0 ? n.length > 1 ? (i = n[1], a = !0) : i = n[0] : i = n.length > 2 ? n[2] : n[0];
	let o = xn(e, i.body, a);
	return i.color ? {
		text: o,
		color: i.color
	} : { text: o };
}
//#endregion
//#region packages/xlsx/src/renderer-coordinate-index.ts
var wn = f;
function Tn(e, t) {
	let n = wn;
	return new te(`XLSX renderer ${e.resource} exceeded its hard limit of ${n} entries`, {
		stage: "rendering",
		violation: {
			format: "xlsx",
			operation: e.operation,
			resource: e.resource,
			metric: "entry-count",
			limit: n,
			observed: t,
			configurable: !1,
			usage: {
				archiveEntryCount: 0,
				declaredInflatedBytes: 0,
				distinctInflatedBytes: 0,
				operationInflatedBytes: 0
			}
		}
	});
}
function En(e, t, n = 0) {
	let { top: r, bottom: i, left: a, right: o } = e;
	if (i < r || o < a) return 0;
	if (![
		r,
		i,
		a,
		o
	].every(Number.isSafeInteger) || !Number.isSafeInteger(n) || n < 0) throw Tn(t, wn + 1);
	let s = i - r + 1, c = o - a + 1, l = wn + n;
	if (!Number.isSafeInteger(s) || !Number.isSafeInteger(c) || s > l || c > Math.floor(l / s)) throw Tn(t, wn + 1);
	let u = s * c - n;
	if (u > wn) throw Tn(t, u);
	return u;
}
function Dn(e, t, n, r) {
	if (!e.has(t) && e.size >= wn) throw Tn(r, e.size + 1);
	e.set(t, n);
}
function On(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of r.cells) Dn(n, `${e.row}:${e.col}`, e, t);
	return n;
}
function kn(e, t, n) {
	if (!e.has(t) && e.size >= wn) throw Tn(n, e.size + 1);
	e.add(t);
}
//#endregion
//#region packages/xlsx/src/conditional-format.ts
function An(e, t, n) {
	for (let r of e) if (t >= r.top && t <= r.bottom && n >= r.left && n <= r.right) return !0;
	return !1;
}
function jn(e) {
	return e && e.value.type === "number" ? e.value.number : null;
}
function Mn(e) {
	return e && e.value.type === "text" ? e.value.text : null;
}
function Nn(e, t) {
	let n = [];
	for (let r of e.rows) for (let e of r.cells) e.value.type === "number" && An(t, e.row, e.col) && n.push(e.value.number);
	return n;
}
function Pn(e, t) {
	let n = t.length ? Math.min(...t) : 0, r = t.length ? Math.max(...t) : 0, i = e.value == null ? NaN : parseFloat(e.value);
	switch (e.kind) {
		case "min": return n;
		case "max": return r;
		case "num": return isNaN(i) ? 0 : i;
		case "percent": {
			let e = isNaN(i) ? 50 : i;
			return n + (r - n) * (e / 100);
		}
		case "percentile": {
			if (!t.length) return 0;
			let e = [...t].sort((e, t) => e - t), n = (isNaN(i) ? 50 : i) / 100;
			return e[Math.max(0, Math.min(e.length - 1, Math.round(n * (e.length - 1))))];
		}
		default: return isNaN(i) ? 0 : i;
	}
}
function Fn(e, t = In(e)) {
	let n = [], r = /* @__PURE__ */ new Map();
	for (let t of e.definedNames ?? []) r.set(t.name, t);
	for (let t of e.conditionalFormats ?? []) {
		let r = Nn(e, t.sqref);
		for (let e of t.rules) {
			let i = {
				rule: e,
				sqref: t.sqref
			};
			if (e.type === "colorScale") i.scaleStops = e.stops.map((e) => Pn(e, r));
			else if (e.type === "dataBar") i.barMin = Pn(e.min, r), i.barMax = Pn(e.max, r);
			else if (e.type === "top10") {
				let t = [...r].sort((e, t) => e - t), n = t.length;
				if (n > 0) {
					let r = Math.min(e.rank, n);
					if (e.percent) {
						let a = e.top ? 1 - r / 100 : r / 100;
						i.top10Threshold = t[Math.max(0, Math.min(n - 1, Math.round(a * (n - 1))))];
					} else i.top10Threshold = e.top ? t[Math.max(0, n - r)] : t[Math.min(n - 1, r - 1)];
					i.top10IsTop = e.top;
				}
			} else if (e.type === "aboveAverage") {
				if (r.length > 0) {
					let t = r.reduce((e, t) => e + t, 0) / r.length;
					if (i.avgValue = t, i.avgIsAbove = e.aboveAverage, e.stdDev && e.stdDev > 0) {
						let e = r.reduce((e, n) => e + (n - t) * (n - t), 0) / r.length;
						i.avgStdDev = Math.sqrt(e);
					}
				}
			} else e.type === "iconSet" && (i.iconThresholds = e.cfvos.map((e) => Pn(e, r)));
			n.push(i);
		}
	}
	return n.sort((e, t) => (e.rule.priority ?? 0) - (t.rule.priority ?? 0)), {
		compiled: n,
		worksheet: e,
		cellIndex: t,
		definedNames: r
	};
}
function In(e) {
	return On(e.rows, {
		resource: "worksheet-cell-index",
		operation: "index-worksheet-cells"
	});
}
function Ln(e, t, n) {
	switch (t) {
		case "greaterThan": return e > (n[0] ?? 0);
		case "greaterThanOrEqual": return e >= (n[0] ?? 0);
		case "lessThan": return e < (n[0] ?? 0);
		case "lessThanOrEqual": return e <= (n[0] ?? 0);
		case "equal": return e === (n[0] ?? 0);
		case "notEqual": return e !== (n[0] ?? 0);
		case "between": return e >= (n[0] ?? 0) && e <= (n[1] ?? 0);
		case "notBetween": return e < (n[0] ?? 0) || e > (n[1] ?? 0);
		default: return !1;
	}
}
function Rn(e) {
	let t = e.trim();
	if (t.length >= 2 && t.startsWith("\"") && t.endsWith("\"")) return { text: t.slice(1, -1).replace(/""/g, "\"") };
	let n = parseFloat(t);
	return isNaN(n) ? { text: t } : { num: n };
}
function zn(e, t, n) {
	let r = n[0] ?? "", i = n[1] ?? "", a = (e) => e.toLowerCase();
	switch (t) {
		case "equal": return a(e) === a(r);
		case "notEqual": return a(e) !== a(r);
		case "containsText": return a(e).includes(a(r));
		case "notContains": return !a(e).includes(a(r));
		case "beginsWith": return a(e).startsWith(a(r));
		case "endsWith": return a(e).endsWith(a(r));
		case "between": return a(e) >= a(r) && a(e) <= a(i);
		case "notBetween": return a(e) < a(r) || a(e) > a(i);
		default: return !1;
	}
}
function Bn(e, t, n) {
	let r = e.replace("#", ""), i = t.replace("#", ""), a = parseInt(r.slice(0, 2), 16), o = parseInt(r.slice(2, 4), 16), s = parseInt(r.slice(4, 6), 16), c = parseInt(i.slice(0, 2), 16), l = parseInt(i.slice(2, 4), 16), u = parseInt(i.slice(4, 6), 16), d = Math.round(a + (c - a) * n), f = Math.round(o + (l - o) * n), p = Math.round(s + (u - s) * n);
	return `#${d.toString(16).padStart(2, "0").toUpperCase()}${f.toString(16).padStart(2, "0").toUpperCase()}${p.toString(16).padStart(2, "0").toUpperCase()}`;
}
function Vn(e, t, n) {
	if (!t.length) return "#FFFFFF";
	if (e <= n[0]) return t[0].color;
	if (e >= n[n.length - 1]) return t[t.length - 1].color;
	for (let r = 1; r < n.length; r++) if (e <= n[r]) {
		let i = n[r - 1], a = n[r], o = a === i ? 0 : (e - i) / (a - i);
		return Bn(t[r - 1].color, t[r].color, o);
	}
	return t[t.length - 1].color;
}
function Hn(e, t) {
	if (t && (t.fill && !e.fill && (e.fill = t.fill), t.font?.color && e.fontColor == null && (e.fontColor = t.font.color), t.font?.bold && e.fontBold == null && (e.fontBold = !0), t.font?.italic && e.fontItalic == null && (e.fontItalic = !0), t.font?.underline && e.fontUnderline == null && (e.fontUnderline = !0), t.font?.strike && e.fontStrike == null && (e.fontStrike = !0), t.numFmt && e.numFmt == null && (e.numFmt = {
		numFmtId: t.numFmt.numFmtId,
		formatCode: t.numFmt.formatCode || null
	}), t.border)) {
		let n = e.border ?? {};
		e.border = {
			left: n.left ?? t.border.left,
			right: n.right ?? t.border.right,
			top: n.top ?? t.border.top,
			bottom: n.bottom ?? t.border.bottom,
			diagonalUp: n.diagonalUp ?? t.border.diagonalUp,
			diagonalDown: n.diagonalDown ?? t.border.diagonalDown
		};
	}
}
function Un(e, t, n, r, i) {
	let a = {};
	if (!r.compiled.length) return a;
	for (let o of r.compiled) {
		if (!An(o.sqref, t, n)) continue;
		let s = o.rule, c = jn(e);
		if (s.type === "expression") {
			let e = o.sqref[0];
			if (!e) continue;
			if (ut(s.formula, {
				row: t,
				col: n,
				anchorRow: e.top,
				anchorCol: e.left,
				cellIndex: r.cellIndex,
				definedNames: r.definedNames,
				depth: 0
			}) && (Hn(a, s.dxfId == null ? null : i[s.dxfId]), s.stopIfTrue)) break;
			continue;
		}
		if (s.type === "cellIs") {
			let t = s.formulas.map(Rn), n = Mn(e), r = !1;
			c != null && t.every((e) => e.num != null) ? r = Ln(c, s.operator, t.map((e) => e.num)) : n != null && t.every((e) => e.text != null) && (r = zn(n, s.operator, t.map((e) => e.text))), r && Hn(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "top10") {
			if (c == null || o.top10Threshold == null) continue;
			(o.top10IsTop ? c >= o.top10Threshold : c <= o.top10Threshold) && Hn(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "aboveAverage") {
			if (c == null || o.avgValue == null) continue;
			let e = o.avgStdDev == null ? 0 : o.avgStdDev * (s.stdDev ?? 1), t = o.avgIsAbove ? o.avgValue + e : o.avgValue - e, n = s.equalAverage === !0;
			(o.avgIsAbove ? n ? c >= t : c > t : n ? c <= t : c < t) && Hn(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "iconSet") {
			if (c == null || !o.iconThresholds?.length) continue;
			let e = o.iconThresholds, t = e.length, n = 0;
			for (let r = 1; r < t; r++) c >= e[r] && (n = r);
			if (s.reverse && (n = t - 1 - n), s.customIcons && s.customIcons[n]) {
				let e = s.customIcons[n];
				e.iconSet !== "NoIcons" && (a.iconSet = {
					name: e.iconSet,
					index: e.iconId
				});
			} else a.iconSet = {
				name: s.iconSet,
				index: n
			};
		} else if (s.type === "colorScale") {
			if (c == null || !o.scaleStops || a.fill) continue;
			let e = Vn(c, s.stops, o.scaleStops);
			a.fill = {
				patternType: "solid",
				fgColor: e,
				bgColor: e
			};
		} else if (s.type === "dataBar") {
			if (c == null || o.barMin == null || o.barMax == null || a.dataBar) continue;
			let e = o.barMax - o.barMin, t = e === 0 ? 0 : Math.max(0, Math.min(1, (c - o.barMin) / e));
			a.dataBar = {
				color: s.color,
				ratio: t,
				gradient: s.gradient
			};
		}
	}
	return a;
}
//#endregion
//#region packages/xlsx/src/bidi-line.ts
function Wn(e, t) {
	return e === 2 ? !0 : e === 1 ? !1 : et(void 0, t) === "rtl";
}
var Gn = (e) => {
	let t = e.text;
	return typeof t == "string" ? t : void 0;
};
function Kn(e, t) {
	let n = e === 2 || ne(t);
	return {
		needBidi: n,
		baseRtl: n && Wn(e, t)
	};
}
function qn(e, t) {
	let r = e.length;
	if (r === 0) return {
		order: [],
		rtl: []
	};
	let i = "", a = Array(r);
	for (let t = 0; t < r; t++) {
		a[t] = i.length;
		let n = Gn(e[t]) ?? "";
		i += n.length > 0 ? n : "￼";
	}
	let { levels: o, paragraphLevel: s } = h().computeLevels(i, t ? "rtl" : "ltr"), { order: c, segLevels: l } = n(o, s, a), u = Array(r);
	for (let e = 0; e < r; e++) u[e] = (l[e] & 1) == 1;
	return {
		order: c,
		rtl: u
	};
}
//#endregion
//#region packages/xlsx/src/a1.ts
function Jn(e) {
	let t = /^\$?([A-Z]+)\$?(\d+)$/.exec(e.trim());
	if (!t) return null;
	let n = t[1], r = 0;
	for (let e = 0; e < n.length; e++) r = r * 26 + (n.charCodeAt(e) - 64);
	return {
		row: parseInt(t[2], 10),
		col: r
	};
}
function parseKoreA1Range(e) {
	let t = e.split(":");
	if (t.length > 2) return null;
	let n = Jn(t[0]), r = t.length === 2 ? Jn(t[1]) : n;
	return n && r ? {
		anchor: n,
		active: r
	} : null;
}
function Yn(e, t) {
	let n = "", r = t;
	for (; r > 0;) {
		let e = (r - 1) % 26;
		n = String.fromCharCode(65 + e) + n, r = Math.floor((r - 1) / 26);
	}
	return `${n}${e}`;
}
//#endregion
//#region packages/xlsx/src/vertical-text.ts
function Xn(e, t, n, r, i, a = !1) {
	let o = t.codePointAt(0) ?? 0, s = N(o);
	if (a && oe(o)) {
		e.save(), e.translate(n, r + i / 2), e.textAlign = "center", e.textBaseline = "middle", O(e, () => e.fillText(t, 0, 0)), e.restore();
		return;
	}
	if (s === "Tr") {
		let a = ue(o);
		if (a !== null) {
			e.fillText(String.fromCodePoint(a), n, r);
			return;
		}
		if (H(o)) {
			e.fillText(t, n, r);
			return;
		}
		e.save(), e.translate(n, r + i / 2), e.rotate(Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", e.fillText(t, 0, 0), e.restore();
		return;
	}
	let c = s === "Tu" ? A(o) : null;
	e.fillText(c === null ? t : String.fromCodePoint(c), n, r);
}
function Zn(e, t = 8) {
	return Math.trunc((256 * e + Math.trunc(128 / t)) / 256 * t);
}
function Qn(e, t = 8) {
	return e / t;
}
function $n(e) {
	return Math.round(e * D);
}
function er(e) {
	return e / D;
}
//#endregion
//#region packages/xlsx/src/internal/grid-axis-geometry.ts
var tr = class e {
	indices;
	cumulativeDelta;
	customPx;
	defaultPx;
	constructor(e, t, n, r, i) {
		this.maxIndex = r, this.defaultPx = Number.isFinite(t) && t >= 0 ? t : 0, this.indices = i ? i.map((e) => e.index) : Object.keys(e).map(Number).filter((e) => e >= 1 && e <= r).sort((e, t) => e - t), this.cumulativeDelta = Array(this.indices.length), this.customPx = Array(this.indices.length);
		let a = 0;
		for (let t = 0; t < this.indices.length; t++) {
			let r = i?.[t]?.px ?? n(e[this.indices[t]]), o = Number.isFinite(r) && r >= 0 ? r : this.defaultPx;
			this.customPx[t] = o, a += o - this.defaultPx, this.cumulativeDelta[t] = a;
		}
	}
	deltaBefore(e) {
		let t = 0, n = this.indices.length;
		for (; t < n;) {
			let r = t + n >> 1;
			this.indices[r] < e ? t = r + 1 : n = r;
		}
		return t === 0 ? 0 : this.cumulativeDelta[t - 1];
	}
	offsetOf(e) {
		return (e - 1) * this.defaultPx + this.deltaBefore(e);
	}
	indexAt(e) {
		if (e < 0) return {
			index: 1,
			partial: 0
		};
		let t = 1, n = this.maxIndex;
		for (; t < n;) {
			let r = t + n + 1 >> 1;
			this.offsetOf(r) <= e ? t = r : n = r - 1;
		}
		return {
			index: t,
			partial: e - this.offsetOf(t)
		};
	}
	scrollableIndexAt(e, t) {
		let n = e + this.offsetOf(t);
		return n >= this.offsetOf(this.maxIndex) + this.sizeOf(this.maxIndex) ? null : this.indexAt(n).index;
	}
	sizeOf(e) {
		return this.offsetOf(e + 1) - this.offsetOf(e);
	}
	scaled(t) {
		return new e({}, Math.round(this.defaultPx * t), (e) => e, this.maxIndex, this.indices.map((e, n) => ({
			index: e,
			px: Math.round(this.customPx[n] * t)
		})));
	}
	countToCover(e, t) {
		if (e > this.maxIndex || t <= 0) return 0;
		let n = this.offsetOf(e) + t;
		if (n >= this.offsetOf(this.maxIndex) + this.sizeOf(this.maxIndex)) return this.maxIndex - e + 1;
		let r = this.indexAt(n);
		return r.index - e + +(r.partial > 0);
	}
	bandsToCover(e, t, n = Infinity) {
		let r = Math.max(1, e), i = Math.min(this.maxIndex, t);
		if (r > i || n <= 0) return [];
		let a = [], o = 0, s = Math.max(r, this.indexAt(this.offsetOf(r)).index);
		for (; s <= i && o < n;) {
			let e = this.sizeOf(s);
			if (Number.isFinite(e) && e > 0 && (a.push({
				index: s,
				size: e
			}), o += e), s >= i) break;
			let t = this.offsetOf(s + 1), n = this.indexAt(t).index;
			s = Math.max(s + 1, n);
		}
		return a;
	}
}, nr = 1048576, rr = 16384, ir = class e {
	static cache = /* @__PURE__ */ new WeakMap();
	static forWorksheet(t, n) {
		let r = this.cache.get(t);
		if (r && Object.is(r.mdw, n)) return r.geometry;
		let i = new e(t, n);
		return this.cache.set(t, {
			mdw: n,
			geometry: i
		}), i;
	}
	static forWorksheetMeasured(e, t) {
		let n = this.cache.get(e);
		return n ? n.geometry : this.forWorksheet(e, t());
	}
	static invalidate(e) {
		this.cache.delete(e);
	}
	col;
	row;
	maximumDigitWidth;
	freezeRows;
	freezeCols;
	scaledCache = null;
	constructor(e, t) {
		this.maximumDigitWidth = t, this.freezeRows = Math.min(nr, Math.max(0, e.freezeRows ?? 0)), this.freezeCols = Math.min(rr, Math.max(0, e.freezeCols ?? 0)), this.col = new tr(e.colWidths, Zn(e.defaultColWidth, t), (e) => Zn(e, t), rr), this.row = new tr(e.rowHeights, $n(e.defaultRowHeight), $n, nr);
	}
	logicalFrozenExtent() {
		return {
			width: this.col.offsetOf(this.freezeCols + 1),
			height: this.row.offsetOf(this.freezeRows + 1)
		};
	}
	roundedFrozenExtent(e) {
		let t = this.axesAtScale(e);
		return {
			width: t.col.offsetOf(this.freezeCols + 1),
			height: t.row.offsetOf(this.freezeRows + 1)
		};
	}
	effectiveFrozenBands(e) {
		let t = this.axesAtScale(e.scale), n = t.row.bandsToCover(1, Math.max(0, e.rows), Math.max(0, e.height - Math.round(e.headerHeight * e.scale))), r = t.col.bandsToCover(1, Math.max(0, e.cols), Math.max(0, e.width - Math.round(e.headerWidth * e.scale)));
		return {
			rows: n.at(-1)?.index ?? 0,
			cols: r.at(-1)?.index ?? 0
		};
	}
	logicalContentExtent(e, t, n, r) {
		return {
			width: n + this.col.offsetOf(Math.min(rr, t) + 1),
			height: r + this.row.offsetOf(Math.min(nr, e) + 1)
		};
	}
	roundedContentExtent(e, t, n, r, i) {
		let a = this.axesAtScale(n);
		return {
			width: Math.round(r * n) + a.col.offsetOf(Math.min(rr, t) + 1),
			height: Math.round(i * n) + a.row.offsetOf(Math.min(nr, e) + 1)
		};
	}
	cellAt(e, t, n) {
		if (e < 0 || t < 0) return null;
		let r = this.rowAt(t, n.scrollY, n.scale);
		if (r === null) return null;
		let i = this.colAt(e, n.scrollX, n.scale);
		return i === null ? null : {
			row: r,
			col: i
		};
	}
	rowAt(e, t, n = 1) {
		if (e < 0) return null;
		let r = this.axesAtScale(n).row, i = r.offsetOf(this.freezeRows + 1);
		return e < i ? this.indexWithinFrozen(r, e, this.freezeRows) : r.scrollableIndexAt(e - i + t, this.freezeRows + 1);
	}
	colAt(e, t, n = 1) {
		if (e < 0) return null;
		let r = this.axesAtScale(n).col, i = r.offsetOf(this.freezeCols + 1);
		return e < i ? this.indexWithinFrozen(r, e, this.freezeCols) : r.scrollableIndexAt(e - i + t, this.freezeCols + 1);
	}
	cellRect(e, t, n) {
		if (e < 1 || e > 1048576 || t < 1 || t > 16384) return null;
		let r = this.axesAtScale(n.scale), i = Math.round(n.headerWidth * n.scale), a = Math.round(n.headerHeight * n.scale), o = this.roundedFrozenExtent(n.scale);
		return {
			x: t <= this.freezeCols ? i + r.col.offsetOf(t) : this.scrollableCellPosition(r.col, t, this.freezeCols, n.scrollX, i + o.width),
			y: e <= this.freezeRows ? a + r.row.offsetOf(e) : this.scrollableCellPosition(r.row, e, this.freezeRows, n.scrollY, a + o.height),
			w: r.col.sizeOf(t),
			h: r.row.sizeOf(e)
		};
	}
	visibleRange(e) {
		let t = this.axesAtScale(e.scale), n = this.roundedFrozenExtent(e.scale), r = t.col.indexAt(e.scrollX + t.col.offsetOf(this.freezeCols + 1)), i = t.row.indexAt(e.scrollY + t.row.offsetOf(this.freezeRows + 1)), a = e.width - Math.round(e.headerWidth * e.scale) - n.width, o = e.height - Math.round(e.headerHeight * e.scale) - n.height, s = e.buffer ?? 0;
		return {
			range: {
				row: i.index,
				col: r.index,
				rows: t.row.countToCover(i.index, o + i.partial * 2) + s,
				cols: t.col.countToCover(r.index, a + r.partial * 2) + s
			},
			offsetX: r.partial / e.scale,
			offsetY: i.partial / e.scale,
			frozenWidth: n.width / e.scale,
			frozenHeight: n.height / e.scale
		};
	}
	scrollOffsetForCell(e, t, n) {
		let r = this.roundedFrozenExtent(n.scale), i = Math.round(n.headerHeight * n.scale) + r.height, a = Math.round(n.headerWidth * n.scale) + r.width, o = n.currentY, s = this.axesAtScale(n.scale);
		if (e > this.freezeRows && e <= 1048576) {
			let t = s.row.offsetOf(e) - s.row.offsetOf(this.freezeRows + 1), r = s.row.sizeOf(e);
			o = this.alignedOffset(t, r, n.currentY, i, n.viewportHeight, n.align);
		}
		let c = n.currentX;
		if (t > this.freezeCols && t <= 16384) {
			let e = s.col.offsetOf(t) - s.col.offsetOf(this.freezeCols + 1), r = s.col.sizeOf(t);
			c = this.alignedOffset(e, r, n.currentX, a, n.viewportWidth, n.align);
		}
		return {
			x: Math.max(0, c),
			y: Math.max(0, o)
		};
	}
	axesAtScale(e) {
		if (this.scaledCache?.scale === e) return this.scaledCache;
		let t = {
			scale: e,
			row: this.row.scaled(e),
			col: this.col.scaled(e)
		};
		return this.scaledCache = t, t;
	}
	indexWithinFrozen(e, t, n) {
		if (n === 0) return null;
		let r = e.indexAt(t).index;
		return r <= n ? r : null;
	}
	scrollableCellPosition(e, t, n, r, i) {
		let a = e.indexAt(r + e.offsetOf(n + 1));
		return i - a.partial + e.offsetOf(t) - e.offsetOf(a.index);
	}
	alignedOffset(e, t, n, r, i, a) {
		let o = r + e - n;
		return a === "start" ? e : a === "center" ? e - (i - r - t) / 2 : a === "end" ? e - (i - r - t) : o < r ? e : o + t > i ? e - (i - r - t) : n;
	}
};
//#endregion
//#region packages/xlsx/src/internal/cell-anchor-geometry.ts
function ar(e) {
	return e.editAs === "oneCell" && (e.nativeExtCx ?? 0) > 0 && (e.nativeExtCy ?? 0) > 0;
}
//#endregion
//#region packages/xlsx/src/renderer.ts
function or(e, t) {
	return t ? `${e}|duo:${t.clr1}:${t.clr2}` : e;
}
var sr = ae.map((e) => `"${e}"`).join(", "), cr = J.map((e) => `"${e}"`).join(", "), lr = `"Calibri", "Carlito", "Cambria", "Caladea", Arial, "Noto Naskh Arabic", "Noto Sans Arabic", ${sr}, sans-serif`, ur = `"Cambria", "Caladea", "Times New Roman", "Liberation Serif", "Noto Naskh Arabic", "Noto Sans Arabic", ${cr}, serif`, dr = "\"Courier New\", \"Liberation Mono\", monospace";
function fr(e) {
	let t = e ? Y(e) : null, n = j(e);
	if (!t) return n === "serif" ? ur : n === "mono" ? dr : lr;
	let r = n === "serif";
	return `${V(t, r ? "serif" : "sans").map((e) => `"${e}"`).join(", ")}, "Calibri", "Carlito", "Cambria", "Caladea", Arial, "Noto Naskh Arabic", "Noto Sans Arabic", ${r ? cr : sr}, ${r ? "serif" : "sans-serif"}`;
}
function pr(e) {
	return e ? `"${e}", ${fr(e)}` : lr;
}
var mr = 11;
function hr(e, t, n) {
	return n - e - t;
}
function gr(e, t, n, r) {
	return r ? hr(e, t, n) : e;
}
var _r = "#7a7a7a";
function vr(e, t) {
	let n = t * D, r = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
	if (!r) return 8;
	let i = r.getContext("2d");
	if (!i) return 8;
	i.font = `${n}px ${pr(e)}`;
	let a = 0;
	for (let e of "0123456789") {
		let t = i.measureText(e).width;
		t > a && (a = t);
	}
	return Math.round(a) || 8;
}
function yr(e) {
	return !e.defaultFontFamily || !e.defaultFontSize ? 8 : vr(e.defaultFontFamily, e.defaultFontSize);
}
function br(e) {
	return ir.forWorksheetMeasured(e, () => yr(e));
}
function xr(e, t, n, r, i, a, o) {
	if (!(i <= 0 || a <= 0)) {
		if (o) {
			let a = e.createLinearGradient(n, r, n + i, r);
			a.addColorStop(0, p(t, .85)), a.addColorStop(1, p(t, .15)), e.fillStyle = a;
		} else e.fillStyle = p(t);
		e.fillRect(n, r, i, a);
	}
}
function Sr(e) {
	switch (e) {
		case "solid": return 1;
		case "darkGray": return .75;
		case "mediumGray": return .5;
		case "lightGray": return .25;
		case "gray125": return .125;
		case "gray0625": return .0625;
		case "darkHorizontal":
		case "darkVertical":
		case "darkDown":
		case "darkUp":
		case "darkGrid":
		case "darkTrellis": return .5;
		case "lightHorizontal":
		case "lightVertical":
		case "lightDown":
		case "lightUp":
		case "lightGrid":
		case "lightTrellis": return .25;
		default: return 1;
	}
}
var Cr = /* @__PURE__ */ new Map(), wr = {
	gray0625: [
		128,
		0,
		8,
		0,
		128,
		0,
		8,
		0
	],
	gray125: [
		136,
		0,
		34,
		0,
		136,
		0,
		34,
		0
	],
	lightGray: [
		170,
		0,
		85,
		0,
		170,
		0,
		85,
		0
	],
	mediumGray: [
		170,
		85,
		170,
		85,
		170,
		85,
		170,
		85
	],
	darkGray: [
		119,
		221,
		119,
		221,
		119,
		221,
		119,
		221
	],
	darkHorizontal: [
		4095,
		4095,
		0,
		4095,
		4095,
		0,
		4095,
		4095,
		0,
		4095,
		4095,
		0
	],
	lightHorizontal: [
		4095,
		0,
		0,
		4095,
		0,
		0,
		4095,
		0,
		0,
		4095,
		0,
		0
	],
	darkVertical: Array(12).fill(3510),
	lightVertical: Array(12).fill(2340),
	darkGrid: [
		204,
		204,
		51,
		51,
		204,
		204,
		51,
		51
	],
	lightGrid: [
		255,
		136,
		136,
		136,
		255,
		136,
		136,
		136
	],
	darkDown: [
		204,
		102,
		51,
		153,
		204,
		102,
		51,
		153
	],
	lightDown: [
		136,
		68,
		34,
		17,
		136,
		68,
		34,
		17
	],
	darkUp: [
		51,
		102,
		204,
		153,
		51,
		102,
		204,
		153
	],
	lightUp: [
		17,
		34,
		68,
		136,
		17,
		34,
		68,
		136
	],
	darkTrellis: [
		255,
		102,
		255,
		153,
		255,
		102,
		255,
		153
	],
	lightTrellis: [
		153,
		102,
		102,
		153,
		153,
		102,
		102,
		153
	]
};
function Tr(e, n, r, i) {
	let a = e.getTransform(), o = Math.max(1, Math.round(Math.hypot(a.a, a.b))), s = Math.max(1, Math.round(Math.hypot(a.c, a.d))), c = `${n}|${r}|${i}|${o}|${s}`;
	if (Cr.has(c)) return Cr.get(c);
	let l = wr[n];
	if (!l) return Cr.set(c, null), null;
	let u = l.length, d = t(u, u);
	if (!d) return Cr.set(c, null), null;
	let f = d.getContext("2d");
	if (!f) return Cr.set(c, null), null;
	f.fillStyle = p(i), f.fillRect(0, 0, u, u), f.fillStyle = p(r);
	for (let e = 0; e < u; e++) {
		let t = l[e];
		for (let n = 0; n < u; n++) t & 1 << u - 1 - n && f.fillRect(n, e, 1, 1);
	}
	let m = e.createPattern(d, "repeat");
	if (m && typeof DOMMatrix < "u" && (o >= 2 || s >= 2)) {
		let e = new DOMMatrix();
		e.scaleSelf(1 / o, 1 / s), m.setTransform(e);
	}
	return Cr.set(c, m), m;
}
function Er(e, t, n, r, i, a) {
	if (t.gradient && t.gradient.stops.length > 0) return e.fillStyle = Dr(e, t.gradient, n, r, i, a), e.fillRect(n, r, i, a), !0;
	let o = t.patternType;
	if (!o || o === "none") return !1;
	let s = t.fgColor ?? "000000", c = t.bgColor ?? "FFFFFF";
	if (o === "solid") return e.fillStyle = p(s), e.fillRect(n, r, i, a), !0;
	let l = Tr(e, o, s, c);
	if (l) e.fillStyle = l;
	else {
		let t = Sr(o);
		e.fillStyle = t >= 1 ? p(s) : Ar(s, c, t);
	}
	return e.fillRect(n, r, i, a), !0;
}
function Dr(e, t, n, r, i, a) {
	let o;
	if (t.gradientType === "path") {
		let s = n + i * (t.left + (1 - t.right - t.left) / 2), c = r + a * (t.top + (1 - t.bottom - t.top) / 2), l = Math.hypot(Math.max(s - n, n + i - s), Math.max(c - r, r + a - c));
		o = e.createRadialGradient(s, c, 0, s, c, l);
	} else {
		let s = t.degree * Math.PI / 180, c = n + i / 2, l = r + a / 2, u = (Math.abs(Math.cos(s)) * i + Math.abs(Math.sin(s)) * a) / 2;
		o = e.createLinearGradient(c - Math.cos(s) * u, l - Math.sin(s) * u, c + Math.cos(s) * u, l + Math.sin(s) * u);
	}
	for (let e of t.stops) {
		let t = Math.min(1, Math.max(0, e.position));
		o.addColorStop(t, p(e.color));
	}
	return o;
}
var Or = Jn;
function kr(e, t, n, r, i) {
	let a = Math.max(4, Math.min(8, Math.min(r, i) * .18));
	e.save(), e.fillStyle = "#D40000", e.beginPath(), e.moveTo(t + r - a, n), e.lineTo(t + r, n), e.lineTo(t + r, n + a), e.closePath(), e.fill(), e.restore();
}
function Ar(e, t, n) {
	let r = e.replace("#", ""), i = t.replace("#", ""), a = parseInt(r.slice(0, 2), 16), o = parseInt(r.slice(2, 4), 16), s = parseInt(r.slice(4, 6), 16), c = parseInt(i.slice(0, 2), 16), l = parseInt(i.slice(2, 4), 16), u = parseInt(i.slice(4, 6), 16), d = Math.min(1, Math.max(0, n));
	return `rgb(${Math.round(a * d + c * (1 - d))},${Math.round(o * d + l * (1 - d))},${Math.round(s * d + u * (1 - d))})`;
}
function jr(e, t, n = 1, r) {
	let i = Math.round(e * D * n * t);
	return r ? Math.max(i, Math.round(W(r, e * D * t))) : i;
}
function Mr(e, t = 1) {
	return `${e.italic ? "italic " : ""}${e.bold ? "bold " : ""}${Math.max(1, Math.round(e.size * D * t))}px ${pr(e.name)}`;
}
function Nr(e, t, n, r, i, a, o, s, c, l) {
	if (t.length === 0) return;
	let u = n?.fontId ?? 0, d = a.fonts[u] ?? a.fonts[0];
	if (!d) return;
	let f = n?.alignment ?? "left";
	e.save(), e.font = Mr(d, c), e.textBaseline = "top", e.textAlign = "left", e.fillStyle = l;
	let p = s + Math.round(2 * c);
	if (f === "noControl") {
		let n = o;
		for (let r of t) e.fillText(r.text, n, p), n += e.measureText(r.text).width;
		e.restore();
		return;
	}
	let m = st(t, r, o, f, (t) => Pr(e, t, i));
	for (let t of m) {
		let n = e.measureText(t.text).width, r = [...t.text];
		if (t.spread === "distribute" && r.length > 1 && n < t.width) {
			let i = (t.width - n) / (r.length - 1);
			try {
				e.letterSpacing = `${i}px`;
			} catch {}
			e.fillText(t.text, t.x, p);
			try {
				e.letterSpacing = "0px";
			} catch {}
		} else t.spread === "center" ? e.fillText(t.text, t.x + (t.width - n) / 2, p) : e.fillText(t.text, t.x, p);
	}
	e.restore();
}
function Pr(e, t, n) {
	let r = e.font;
	e.font = n;
	let i = e.measureText(t).width;
	return e.font = r, i;
}
function Fr(e, t, n, r, i, a, o = 1) {
	if (e.save(), e.strokeStyle = i, e.lineWidth = .5, e.beginPath(), a) {
		let i = r - 1, a = r + 1, s = i + U(i, .5, o), c = a + U(a, .5, o);
		e.moveTo(t, s), e.lineTo(n, s), e.moveTo(t, c), e.lineTo(n, c);
	} else {
		let i = r + U(r, .5, o);
		e.moveTo(t, i), e.lineTo(n, i);
	}
	e.stroke(), e.restore();
}
function Ir(e, t) {
	let n = t.font;
	return n ? {
		bold: n.bold,
		italic: n.italic,
		underline: n.underline,
		underlineStyle: n.underlineStyle,
		strike: n.strike,
		size: n.size ?? e.size,
		color: n.color ?? e.color,
		name: n.name ?? e.name,
		vertAlign: n.vertAlign
	} : e;
}
function Lr(e, t) {
	let n = e.cellXfs[t] ?? e.cellXfs[0] ?? {
		fontId: 0,
		fillId: 0,
		borderId: 0,
		numFmtId: 0,
		alignH: null,
		alignV: null,
		wrapText: !1
	};
	return {
		font: e.fonts[n.fontId] ?? {
			bold: !1,
			italic: !1,
			underline: !1,
			strike: !1,
			size: mr,
			color: null,
			name: null
		},
		fill: e.fills[n.fillId] ?? {
			patternType: "none",
			fgColor: null,
			bgColor: null
		},
		border: e.borders[n.borderId] ?? {
			left: null,
			right: null,
			top: null,
			bottom: null
		},
		xf: n
	};
}
function Rr(e, t, n) {
	let r = [];
	for (let i of t.split("\n")) r.push(...Hr(e, i, n));
	return r;
}
function zr(e, t) {
	if (e.length === 0 || t.length === 0) return 0;
	let n = [...e, ...t], r = e.length;
	return r - o(n, r, g, 1);
}
function Br(e, t) {
	let n = t;
	for (; n < e.length;) {
		let t = e[e.length - n - 1], r = e[e.length - n], i = t?.codePointAt(0), a = r?.codePointAt(0);
		if (i !== void 0 && a !== void 0 && x(i) && x(a)) n++;
		else break;
	}
	return n >= e.length ? t : n;
}
function Vr(e, t) {
	if (e.length === 0 || t.length === 0) return 0;
	let n = t[0].codePointAt(0), r = e.length - 1, a = e[r].codePointAt(0);
	if (a === void 0 || n === void 0 || a === 8203 || n === 8203 || !i(a, n)) return 0;
	for (; r > 0;) {
		let t = e[r - 1].codePointAt(0), n = e[r].codePointAt(0);
		if (t === void 0 || n === void 0 || !i(t, n)) break;
		r--;
	}
	return r === 0 ? 0 : e.length - r;
}
function Hr(e, t, n) {
	let r = [], i = [], a = 0;
	for (; a < t.length;) {
		let e = t[a], n = e.codePointAt(0) ?? 0;
		if (fe(n)) i.push(e), a += n > 65535 ? 2 : 1;
		else if (e === " ") {
			let e = a;
			for (; e < t.length && t[e] === " ";) e++;
			i.push(t.slice(a, e)), a = e;
		} else {
			let e = a;
			for (; e < t.length;) {
				let n = t[e], r = n.codePointAt(0) ?? 0;
				if (n === " " || fe(r)) break;
				e += r > 65535 ? 2 : 1;
			}
			let n = t.slice(a, e), r = I(n) ? b(n) : null;
			if (r && r.length > 0) {
				let e = 0;
				for (let t of r) i.push(n.slice(e, t)), e = t;
				i.push(n.slice(e));
			} else i.push(n);
			a = e;
		}
	}
	let o = "";
	for (let t of i) {
		if (o === "") {
			o = t;
			continue;
		}
		let i = o + t;
		if (e.measureText(i).width <= n) o = i;
		else {
			let e = t.replace(/^ +/, "");
			e === "" && (e = t);
			let n = [...o], i = zr(n, [...e]);
			if (i > 0) {
				let t = n.length - i;
				r.push(n.slice(0, t).join("")), o = n.slice(t).join("") + e;
			} else r.push(o), o = e;
		}
	}
	return r.push(o), r;
}
function Ur(e, t, n, r, i) {
	let a = [], o = [], s = 0, c = 0, l = null, u = n.size, d = n.name, f = 0, p = () => {
		o.length !== 0 && (a.push({
			segments: o,
			maxFontSize: c,
			maxFontFamily: l,
			para: f
		}), o = [], s = 0, c = 0, l = null);
	}, m = () => {
		if (o.length === 0) {
			a.push({
				segments: [],
				maxFontSize: u || mr,
				maxFontFamily: d,
				para: f
			});
			return;
		}
		p();
	}, h = (t, n) => {
		if (!t) return;
		u = n.size, d = n.name, e.font = Mr(Kr(n), r);
		let a = e.measureText(t).width;
		if (o.length > 0 && s + a > i) {
			let i = o.flatMap((e) => [...e.text]), a = zr(i, [...t]);
			a > 0 ? a = Br(i, a) : !I(t) && !I(o[o.length - 1]?.text ?? "") && !/^\s/u.test(t) && !/\s$/u.test(i.at(-1) ?? "") && (a = Vr(i, [...t]));
			let u = o[o.length - 1], d = [...u.text];
			a > d.length && (a = d.length);
			let f = null;
			if (a > 0) {
				let t = d.slice(0, d.length - a), n = d.slice(d.length - a);
				if (e.font = Mr(Kr(u.font), r), t.length === 0) o.pop();
				else {
					let n = t.join("");
					u.text = n, u.width = e.measureText(n).width;
				}
				let i = n.join("");
				f = {
					text: i,
					font: u.font,
					width: e.measureText(i).width
				};
			}
			p(), f && (o.push(f), s += f.width, f.font.size > c && (c = f.font.size, l = f.font.name)), e.font = Mr(Kr(n), r);
		}
		o.push({
			text: t,
			font: n,
			width: a
		}), s += a, n.size > c && (c = n.size, l = n.name);
	}, g = (t, n) => {
		let a = b(t);
		if (a.length === 0) {
			h(t, n);
			return;
		}
		e.font = Mr(Kr(n), r);
		let o = (t) => e.measureText(t).width, c = pe(t), l = t.length, u = 0;
		for (; u < l;) {
			let e = i - s, r = P(t, a, u, e, o, c);
			if (r <= u) {
				if (s > 0) {
					p();
					continue;
				}
				let n = a.find((e) => e > u) ?? l, i = t.slice(u, n), d = w(i), f = P(i, d, 0, e, o, c);
				f <= 0 && (f = d.length > 0 ? d[0] : i.length), r = u + f;
			}
			h(t.slice(u, r), n), u = r, u < l && p();
		}
	};
	for (let e of t) {
		let t = Ir(n, e), r = [], i = 0;
		for (; i < e.text.length;) {
			let t = e.text[i], n = t.codePointAt(0) ?? 0;
			if (n === 10) r.push("\n"), i += 1;
			else if (fe(n)) r.push(t), i += n > 65535 ? 2 : 1;
			else if (t === " ") {
				let t = i;
				for (; t < e.text.length && e.text[t] === " ";) t++;
				r.push(e.text.slice(i, t)), i = t;
			} else {
				let t = i;
				for (; t < e.text.length;) {
					let n = e.text[t], r = n.codePointAt(0) ?? 0;
					if (n === " " || n === "\n" || fe(r)) break;
					t += r > 65535 ? 2 : 1;
				}
				r.push(e.text.slice(i, t)), i = t;
			}
		}
		for (let e of r) e === "\n" ? (m(), f++) : I(e) ? g(e, t) : h(e, t);
	}
	return (o.length > 0 || a.length > 0) && m(), a;
}
function Wr(e, t, n) {
	return e === "middle" ? {
		underline: t + Math.round(n * .55),
		strike: t
	} : e === "bottom" ? {
		underline: t + 1,
		strike: t - Math.round(n * .35)
	} : {
		underline: t + n + 1,
		strike: t + Math.round(n * .5)
	};
}
function Gr(e) {
	let { alignV: t, cy: n, cellH: r, paddingY: i } = e;
	return t === "top" ? {
		baseline: "top",
		textY: n + i
	} : t === "center" ? {
		baseline: "middle",
		textY: n + r / 2
	} : {
		baseline: "bottom",
		textY: n + r - i
	};
}
function Kr(e) {
	return e.vertAlign === "superscript" || e.vertAlign === "subscript" ? {
		...e,
		size: e.size * .65
	} : e;
}
function qr(e, t, n, r, i, a, o, s) {
	e.textAlign = "left", e.textBaseline = i;
	let c = s.needBidi ? qn(t, s.baseRtl ?? !1) : null, l = e, u = n;
	for (let n = 0; n < t.length; n++) {
		let d = c ? c.order[n] : n;
		if (c) try {
			l.direction = c.rtl[d] ? "rtl" : "ltr";
		} catch {}
		let f = t[d], m = Kr(f.font);
		e.font = Mr(m, a);
		let h = s.fontColor ?? f.font.color;
		e.fillStyle = h ? p(h) : "#000000";
		let g = jr(f.font.size, a), _ = 0;
		f.font.vertAlign === "superscript" ? _ = -Math.round(g * .35) : f.font.vertAlign === "subscript" && (_ = Math.round(g * .1)), e.fillText(f.text, u, r + _);
		let v = jr(m.size, a);
		if (f.font.underline || f.font.strike) {
			let t = Wr(i, r, v);
			if (f.font.underline) {
				let n = h ? p(h) : "#000000", r = f.font.underlineStyle === "double" || f.font.underlineStyle === "doubleAccounting";
				Fr(e, u, u + f.width, t.underline + _, n, r, o);
			}
			if (f.font.strike) {
				let n = t.strike + _, r = n + U(n, .5, o);
				e.save(), e.strokeStyle = h ? p(h) : "#000000", e.lineWidth = .5, e.beginPath(), e.moveTo(u, r), e.lineTo(u + f.width, r), e.stroke(), e.restore();
			}
		}
		u += f.width;
	}
	if (c) try {
		l.direction = "ltr";
	} catch {}
}
function Jr(e, t, n, r, i, a, o, s) {
	let { alignH: c, cx: l, cellW: u, leftPad: d, paddingX: f } = n, p = t.reduce((e, t) => e + t.width, 0), m;
	m = c === "right" ? l + u - f - p : c === "center" ? l + u / 2 - p / 2 : l + d;
	let { needBidi: h, baseRtl: g } = Kn(a.readingOrder, t.map((e) => e.text).join(""));
	qr(e, t, m, o, s, r, i, {
		fontColor: a.fontColor,
		needBidi: h,
		baseRtl: g
	});
}
function Yr(e, t, n, r, i, a, o, s, c) {
	Jr(e, t.map((t) => {
		let r = Ir(n, t);
		return e.font = Mr(Kr(r), i), {
			text: t.text,
			font: r,
			width: e.measureText(t.text).width
		};
	}), r, i, a, o, s, c);
}
function Xr(e, t, n, r, i, a, o = {}) {
	let { baseline: s, textY: c } = Gr(r);
	Yr(e, t, n, r, i, a, o, c, s);
}
function Zr(e, t, n, r, i, a, o = {}) {
	let { alignV: s, cy: c, cellH: l, paddingY: u } = r, d = [[]];
	for (let e of t) {
		let t = e.text.split("\n");
		for (let n = 0; n < t.length; n++) n > 0 && d.push([]), t[n] !== "" && d[d.length - 1].push({
			...e,
			text: t[n]
		});
	}
	let f = n.size, p = n.name, m = d.map((e) => {
		if (e.length === 0) return {
			pt: f || mr,
			family: p
		};
		let t = 0, r = null;
		for (let i of e) {
			let e = Ir(n, i);
			e.size > t && (t = e.size, r = e.name), f = e.size, p = e.name;
		}
		return {
			pt: t,
			family: r
		};
	}).map((e) => jr(e.pt, i, 1.2, e.family ?? void 0)), h = m.reduce((e, t) => e + t, 0), g;
	g = s === "top" ? c + u : s === "center" ? c + (l - h) / 2 : c + l - h - u;
	for (let t = 0; t < d.length; t++) {
		let s = d[t];
		s.length > 0 && Yr(e, s, n, r, i, a, o, g, "top"), g += m[t];
	}
}
function Qr(e, t, n, r, i, a, o = {}) {
	t.some((e) => e.text.includes("\n")) ? Zr(e, t, n, r, i, a, o) : Xr(e, t, n, r, i, a, o);
}
function $r(e, t, n, r, i, a) {
	let { alignV: o, cy: s, cellH: c, leftPad: l, paddingX: u, paddingY: d } = i, f = Rr(e, t, i.cellW - l - u);
	if (f.length === 1) {
		let { baseline: t, textY: r } = Gr(i);
		e.textBaseline = t, e.fillText(f[0], n, r);
		return;
	}
	let p = jr(r.size, a, 1.2, r.name ?? void 0), m = f.length * p, h;
	h = o === "top" ? s + d : o === "center" ? s + (c - m) / 2 : s + c - m - d, e.textBaseline = "top";
	for (let t = 0; t < f.length; t++) e.fillText(f[t], n, h + t * p);
}
function ei(e, t, n, r, i, a, o = {}) {
	let { alignH: s, alignV: c, cx: l, cy: u, cellW: d, cellH: f, leftPad: p, paddingX: m, paddingY: h } = r, g = Ur(e, t, n, i, d - p - m);
	if (g.length === 1) {
		let { baseline: t, textY: n } = Gr(r);
		Jr(e, g[0].segments, r, i, a, o, n, t);
		return;
	}
	let _ = g.reduce((e, t) => e + jr(t.maxFontSize, i, 1.2, t.maxFontFamily ?? void 0), 0), v;
	v = c === "top" ? u + h : c === "center" ? u + (f - _) / 2 : u + f - _ - h;
	let y = t.map((e) => e.text).join("").split("\n").map((e) => Kn(o.readingOrder, e));
	for (let t of g) {
		let n = t.segments.reduce((e, t) => e + t.width, 0), r;
		r = s === "right" ? l + d - m - n : s === "center" ? l + d / 2 - n / 2 : l + p;
		let { needBidi: c, baseRtl: u } = y[t.para];
		qr(e, t.segments, r, v, "top", i, a, {
			fontColor: o.fontColor,
			needBidi: c,
			baseRtl: u
		}), v += jr(t.maxFontSize, i, 1.2, t.maxFontFamily ?? void 0);
	}
}
function ti(e) {
	let t = "";
	for (; e > 0;) {
		let n = (e - 1) % 26;
		t = String.fromCharCode(65 + n) + t, e = Math.floor((e - 1) / 26);
	}
	return t;
}
var ni = [
	"#FF0000",
	"#FFFF00",
	"#00B050"
], ri = [
	"#FF0000",
	"#FF6600",
	"#FFFF00",
	"#00B050"
], ii = [
	"#FF0000",
	"#FF6600",
	"#FFFF00",
	"#92D050",
	"#00B050"
];
function ai(e, t, n, r, i, a) {
	if (t === "NoIcons") return;
	let o = t || "3TrafficLights1", s = parseInt(o[0]) || 3, c = s === 5 ? ii : s === 4 ? ri : ni, l = c[Math.max(0, Math.min(n, c.length - 1))];
	if (e.save(), e.fillStyle = l, o.includes("Arrow")) {
		let t = a / 2;
		e.beginPath(), n === s - 1 ? (e.moveTo(r + t, i), e.lineTo(r + a, i + a), e.lineTo(r, i + a)) : n === 0 ? (e.moveTo(r, i), e.lineTo(r + a, i), e.lineTo(r + t, i + a)) : (e.moveTo(r, i + a * .3), e.lineTo(r + a, i + t), e.lineTo(r, i + a * .7)), e.closePath(), e.fill();
	} else o.includes("Flag") ? (e.beginPath(), e.moveTo(r, i), e.lineTo(r + a, i), e.lineTo(r, i + a), e.closePath(), e.fill()) : (e.beginPath(), e.arc(r + a / 2, i + a / 2, a / 2, 0, Math.PI * 2), e.fill());
	e.restore();
}
function oi(e, t, n, r, i) {
	let a = Math.max(6, Math.round(Math.min(r, i) * .45)), o = t + r - a - 1, s = n + i - a - 1;
	e.save(), e.fillStyle = "#D0D0D0", e.fillRect(o, s, a, a), e.fillStyle = "#444444";
	let c = a * .55, l = o + (a - c) / 2, u = s + (a - c * .5) / 2;
	e.beginPath(), e.moveTo(l, u), e.lineTo(l + c, u), e.lineTo(l + c / 2, u + c * .5), e.closePath(), e.fill(), e.restore();
}
function si(e) {
	let t = /* @__PURE__ */ new Map(), n = pi("worksheet-table-style-index", "expand-styled-table-coordinates");
	for (let r of e.tables ?? []) {
		if (!r.styleName) continue;
		let { top: e, bottom: i, left: a, right: o } = r.range;
		En(r.range, n);
		let s = r.accentColor || "#808080", c = !!r.isCustom, l = Math.max(0, r.headerRowCount ?? 1), u = Math.max(0, r.totalsRowCount ?? 0), d = e + l - 1, f = i - u + 1;
		for (let p = e; p <= i; p++) {
			let m = l > 0 && p <= d, h = u > 0 && p >= f, g = !m && !h ? p - d - 1 : -1, _ = r.showRowStripes && g >= 0 ? g % 2 == 1 ? r.band1HorizontalDxf : r.band2HorizontalDxf : void 0;
			for (let l = a; l <= o; l++) Dn(t, `${p}:${l}`, {
				accent: s,
				isCustom: c,
				isHeader: m,
				isTotals: h,
				isBanded: r.showRowStripes && g >= 0 && g % 2 == 1,
				isFirstCol: r.showFirstColumn && l === a,
				isLastCol: r.showLastColumn && l === o,
				isTopEdge: p === e,
				isBottomEdge: p === i,
				wholeTableDxf: r.wholeTableDxf,
				headerRowDxf: r.headerRowDxf,
				totalRowDxf: r.totalRowDxf,
				firstColumnDxf: r.firstColumnDxf,
				lastColumnDxf: r.lastColumnDxf,
				stripeDxf: _
			}, n);
		}
	}
	return t;
}
function ci(e, t, n, r) {
	let i = t?.border?.horizontal, a = t?.border?.top, o = t?.border?.bottom, s = t?.border?.left, c = t?.border?.right, l = n?.border?.bottom, u = n?.border?.top;
	if (i || a || o || s || c || l || u) {
		let t = {
			left: null,
			right: null,
			top: null,
			bottom: null
		};
		return e.isTopEdge ? t.top = a ?? null : i && (t.top = i), e.isHeader && l ? t.bottom = l : e.isBottomEdge ? t.bottom = o ?? null : i && (t.bottom = i), (e.isFirstCol || r === 0) && (t.left = s ?? null), e.isLastCol && (t.right = c ?? null), {
			kind: "dxf",
			border: t
		};
	}
	return e.isCustom ? { kind: "none" } : {
		kind: "accent",
		color: e.accent,
		lineWidth: e.isHeader ? 1.5 : 1,
		topEdge: e.isTopEdge
	};
}
function li(e) {
	let t = /* @__PURE__ */ new Map(), n = pi("worksheet-sparkline-index", "index-sparkline-coordinates");
	for (let r of e.sparklineGroups ?? []) {
		let e = Infinity, i = -Infinity;
		if (r.minAxisType === "group" || r.maxAxisType === "group") {
			for (let t of r.sparklines) for (let n of t.values) typeof n == "number" && (n < e && (e = n), n > i && (i = n));
			(!isFinite(e) || !isFinite(i)) && (e = 0, i = 1);
		}
		for (let a of r.sparklines) {
			let o = a.values.filter((e) => typeof e == "number"), s = o.length ? Math.min(...o) : 0, c = o.length ? Math.max(...o) : 1, l = r.minAxisType === "custom" && typeof r.manualMin == "number" ? r.manualMin : r.minAxisType === "group" ? e : s, u = r.maxAxisType === "custom" && typeof r.manualMax == "number" ? r.manualMax : r.maxAxisType === "group" ? i : c;
			Dn(t, `${a.row}:${a.col}`, {
				kind: r.kind,
				values: a.values,
				min: l,
				max: u,
				displayEmptyCellsAs: r.displayEmptyCellsAs === "zero" || r.displayEmptyCellsAs === "span" ? r.displayEmptyCellsAs : "gap",
				displayXAxis: r.displayXAxis,
				lineWeight: r.lineWeight,
				markers: r.markers,
				high: r.high,
				low: r.low,
				first: r.first,
				last: r.last,
				negative: r.negative,
				colorSeries: r.colorSeries,
				colorNegative: r.colorNegative,
				colorAxis: r.colorAxis,
				colorMarkers: r.colorMarkers,
				colorFirst: r.colorFirst,
				colorLast: r.colorLast,
				colorHigh: r.colorHigh,
				colorLow: r.colorLow
			}, n);
		}
	}
	return t;
}
function ui(e) {
	let t = e.replace("#", "");
	if (t.length < 6) return "#F2F2F2";
	let n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16), a = (e) => Math.round(e * .2 + 255 * .8), o = (e) => e.toString(16).padStart(2, "0").toUpperCase();
	return `#${o(a(n))}${o(a(r))}${o(a(i))}`;
}
function di(e, t, n, r, i, a, o, s, c, l, u, d, f, m, h, g) {
	if (h <= 0 || g <= 0) return;
	let { styles: _, cellMap: v, mergeAnchorMap: y, mergeSkipSet: b, cfContext: x, cs: S, dpr: C } = t, w = i.length, T = a.length, E = new Set(s), D = new Set(o), O = (e, n) => t.rtl ? hr(e, n, t.canvasW) : e, k = [], A = -c;
	for (let e = 0; e < w; e++) k.push(A), A += i[e];
	let j = [], M = -l;
	for (let e = 0; e < T; e++) j.push(M), M += a[e];
	e.save(), e.beginPath(), e.rect(O(f, h), m, h, g), e.clip();
	let N = [], ee = [], P = [];
	for (let i of t.worksheet.mergeCells ?? []) {
		let a = i.top, f = i.left;
		if (E.has(a) && D.has(f) || !s.some((e) => e >= i.top && e <= i.bottom) || !o.some((e) => e >= i.left && e <= i.right)) continue;
		let m = t.mergeAnchorMap.get(`${a}:${f}`);
		if (!m) continue;
		let h = u - c + t.colAxis.offsetOf(f) - t.colAxis.offsetOf(r), g = d - l + t.rowAxis.offsetOf(a) - t.rowAxis.offsetOf(n), v = m.totalW, y = m.totalH;
		h = O(h, v);
		let b = `${a}:${f}`, w = t.cellMap.get(b), { font: T, fill: k, border: A, xf: j } = Lr(_, w?.styleIndex ?? 0), M = Un(w, a, f, x, _.dxfs ?? []);
		if (Er(e, M.fill ?? k, h, g, v, y), M.dataBar && M.dataBar.ratio > 0) {
			let t = Math.max(0, (v - 4) * M.dataBar.ratio);
			xr(e, M.dataBar.color, h + 2, g + 2, t, y - 4, M.dataBar.gradient);
		}
		let N = Pi(Ni(A, a, f, m.right, m.bottom, t.cellMap, _), M.border);
		if (ee.push(() => Fi(e, N, h, g, v, y, C)), !w) continue;
		let P = Gt(w, _, M.numFmt, t.worksheet.date1904), F = P.text;
		if (!F || F === "0" && t.worksheet.showZeros === !1) continue;
		let I = T.bold || !!M.fontBold, te = T.italic || !!M.fontItalic, L = T.underline || !!M.fontUnderline, R = T.strike || !!M.fontStrike, z = I !== T.bold || te !== T.italic || L !== T.underline || R !== T.strike ? {
			...T,
			bold: I,
			italic: te,
			underline: L,
			strike: R
		} : T;
		e.font = Mr(z, S);
		let ne = t.hyperlinkMap.get(b) ? "#0563C1" : M.fontColor ?? P.color ?? T.color;
		e.fillStyle = ne ? p(ne) : "#000000";
		let B = w.value.type === "number", V = j.alignH ?? (B ? "right" : "left"), H = j.alignV ?? "bottom", re = j.indent ? Math.round(j.indent * 3 * t.mdw) : 0, U = 3 + (V === "left" || !j.alignH ? re : 0);
		e.save(), e.beginPath(), e.rect(h, g, v, y), e.clip();
		let W;
		V === "right" ? (W = h + v - 3, e.textAlign = "right") : V === "center" ? (W = h + v / 2, e.textAlign = "center") : (W = h + U, e.textAlign = "left");
		let ie = w.value.type === "text" ? w.value.runs : void 0, ae = ie && ie.length > 0;
		if (j.wrapText && ae) ei(e, ie, z, {
			alignH: V,
			alignV: H,
			cx: h,
			cy: g,
			cellW: v,
			cellH: y,
			leftPad: U,
			paddingX: 3,
			paddingY: 2
		}, S, C, {
			fontColor: M.fontColor,
			readingOrder: j.readingOrder
		});
		else if (j.wrapText) $r(e, F, W, z, {
			alignH: V,
			alignV: H,
			cx: h,
			cy: g,
			cellW: v,
			cellH: y,
			leftPad: U,
			paddingX: 3,
			paddingY: 2
		}, S);
		else if (ae) Qr(e, ie, z, {
			alignH: V,
			alignV: H,
			cx: h,
			cy: g,
			cellW: v,
			cellH: y,
			leftPad: U,
			paddingX: 3,
			paddingY: 2
		}, S, C, {
			fontColor: M.fontColor,
			readingOrder: j.readingOrder
		});
		else {
			let { baseline: t, textY: n } = Gr({
				alignH: V,
				alignV: H,
				cx: h,
				cy: g,
				cellW: v,
				cellH: y,
				leftPad: U,
				paddingX: 3,
				paddingY: 2
			});
			e.textBaseline = t, e.fillText(F, W, n);
		}
		e.restore();
	}
	for (let n = 0; n < T; n++) {
		let r = s[n], c = d + j[n], l = a[n];
		if (c + l <= m || c >= m + g) continue;
		let T = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), D = -1, A = (e) => {
			if (D >= 0 && e - D >= 2) {
				for (let t = D; t < e - 1; t++) T.add(t);
				for (let t = D + 1; t < e; t++) E.add(t);
			}
			D = -1;
		};
		for (let e = 0; e <= w; e++) {
			let t = !1, n = !1;
			if (e < w) {
				let i = `${r}:${o[e]}`;
				if (!b.has(i) && !y.has(i)) {
					let e = v.get(i);
					t = Lr(_, e?.styleIndex ?? 0).xf.alignH === "centerContinuous", n = !!(e && e.value && e.value.type !== "empty");
				}
			}
			t ? n && D >= 0 && e > D ? (A(e), D = e) : D < 0 && (D = e) : A(e);
		}
		for (let a = 0; a < w; a++) {
			let s = o[a], d = u + k[a], m = i[a];
			if (d + m <= f || d >= f + h) continue;
			let g = `${r}:${s}`;
			if (b.has(g)) continue;
			let D = y.get(g), A = D ? D.totalW : m, j = D ? D.totalH : l, M = O(d, A), F = v.get(g), { font: I, fill: te, border: L, xf: R } = Lr(_, F?.styleIndex ?? 0), z = Un(F, r, s, x, _.dxfs ?? []), ne = z.fill ?? te, B = t.tableStyleMap.get(g), V = _.dxfs ?? [], H = (e) => e == null ? void 0 : V[e], re = H(B?.wholeTableDxf), W = H(B?.headerRowDxf), ie = H(B?.totalRowDxf), ae = H(B?.firstColumnDxf), G = H(B?.lastColumnDxf), K = H(B?.stripeDxf), se = B?.isHeader && W?.fill?.fgColor ? W : B?.isTotals && ie?.fill?.fgColor ? ie : B?.isLastCol && G?.fill?.fgColor ? G : B?.isFirstCol && ae?.fill?.fgColor ? ae : K?.fill?.fgColor ? K : !B?.isHeader && !B?.isTotals && re?.fill?.fgColor ? re : void 0;
			if (Er(e, ne, M, c, A, j) || (B && se?.fill?.fgColor ? (e.fillStyle = p(se.fill.fgColor), e.fillRect(M, c, A, j)) : B && !B.isCustom && B.isBanded && (e.fillStyle = ui(B.accent), e.fillRect(M, c, A, j))), t.commentCells.has(g) && kr(e, M, c, A, j), z.dataBar && z.dataBar.ratio > 0) {
				let t = Math.max(0, (A - 4) * z.dataBar.ratio);
				xr(e, z.dataBar.color, M + 2, c + 2, t, j - 4, z.dataBar.gradient);
			}
			let q = t.sparklineMap.get(g);
			if (q && Xe(e, {
				x: M,
				y: c,
				w: A,
				h: j
			}, q), t.worksheet.showGridlines !== !1) {
				if (e.strokeStyle = "#d0d0d0", e.lineWidth = .5, e.beginPath(), !T.has(a)) {
					let t = M + A + U(M + A, .5, C);
					e.moveTo(t, c), e.lineTo(t, c + j);
				}
				let t = c + j + U(c + j, .5, C);
				if (e.moveTo(M, t), e.lineTo(M + A, t), n === 0) {
					let t = c + U(c, .5, C);
					e.moveTo(M, t), e.lineTo(M + A, t);
				}
				if (a === 0) {
					let t = M + U(M, .5, C);
					e.moveTo(t, c), e.lineTo(t, c + j);
				}
				e.stroke();
			}
			let J = Pi(D ? Ni(L, r, s, D.right, D.bottom, v, _) : L, z.border);
			(T.has(a) || E.has(a)) && (J = {
				...J,
				left: E.has(a) ? null : J.left,
				right: T.has(a) ? null : J.right
			});
			let le = v.get(`${r - 1}:${s}`), ue = le ? Lr(_, le.styleIndex ?? 0).border.bottom : null;
			if (ue?.style && (n === 0 || J.top?.style) && (J = {
				...J,
				top: zi(J.top, ue)
			}), !E.has(a)) {
				let e = v.get(`${r}:${s - 1}`), t = e ? Lr(_, e.styleIndex ?? 0).border.right : null;
				t?.style && (a === 0 || J.left?.style) && (J = {
					...J,
					left: zi(J.left, t)
				});
			}
			let Y = B ? ci(B, re, W, s) : null, de = t.autoFilterCells.has(g), fe = () => {
				if (Y) {
					if (Y.kind === "dxf") Fi(e, Y.border, M, c, A, j, C);
					else if (Y.kind === "accent") {
						let t = .5 / C;
						if (e.strokeStyle = Y.color, e.lineWidth = Y.lineWidth, e.beginPath(), e.moveTo(M, c + j - t), e.lineTo(M + A, c + j - t), Y.topEdge) {
							let t = c + U(c, Y.lineWidth, C);
							e.moveTo(M, t), e.lineTo(M + A, t);
						}
						e.stroke();
					}
				}
				de && oi(e, M, c, m, j);
			};
			if (D) {
				let t = J;
				ee.push(() => Fi(e, t, M, c, A, j, C)), fe();
			} else {
				let t = J;
				P.push(() => {
					Fi(e, t, M, c, A, j, C), fe();
				});
			}
			if (!F) continue;
			let pe = Gt(F, _, z.numFmt, t.worksheet.date1904), X = pe.text;
			!X || X === "0" && t.worksheet.showZeros === !1 || N.push(() => {
				let n = B?.isHeader ? W : B?.isTotals ? ie : B?.isLastCol && G ? G : B?.isFirstCol && ae ? ae : K || (B ? re : void 0), l = B ? B.isCustom ? !!n?.font?.bold : B.isHeader || B.isTotals : !1, u = I.bold || !!z.fontBold || l, d = I.italic || !!z.fontItalic, f = I.underline || !!z.fontUnderline, m = I.strike || !!z.fontStrike, h = u !== I.bold || d !== I.italic || f !== I.underline || m !== I.strike ? {
					...I,
					bold: u,
					italic: d,
					underline: f,
					strike: m
				} : I;
				e.font = Mr(h, S);
				let x = t.hyperlinkMap.get(g), T = n?.font?.color ?? null, E = x ? "#0563C1" : z.fontColor ?? pe.color ?? T ?? I.color;
				e.fillStyle = E ? p(E) : "#000000";
				let O = F.value.type === "number", k = R.alignH ?? (O ? "right" : "left"), N = R.alignV ?? "bottom", ee = R.indent ? Math.round(R.indent * 3 * t.mdw) : 0, P = z.iconSet ? Math.max(8, Math.round(Math.min(A, j) * .55)) : 0, te = P > 0 ? P + 4 : 0, L = 3 + (k === "left" || !R.alignH ? ee : 0) + te, ne = A, V = a;
				if (k === "centerContinuous" && !D) for (let e = a + 1; e < w; e++) {
					let t = `${r}:${o[e]}`;
					if (b.has(t) || y.has(t)) break;
					let n = v.get(t);
					if (n && n.value.type !== "empty" || Lr(_, n?.styleIndex ?? 0).xf.alignH !== "centerContinuous") break;
					ne += i[e], V = e;
				}
				let H = t.rtl ? M - (ne - A) : M, se = k === "centerContinuous" ? H : M, q = k === "centerContinuous" ? ne : A, J = X.includes("\n");
				if (!D && !R.wrapText && !R.textRotation && !O && !J) {
					let n = e.measureText(X).width, s = k === "centerContinuous", c = s ? n + 6 : n + L + 3, l = s ? ne : A;
					if (c > l) {
						let e = c - l, n = 0, u = 0;
						k === "right" ? u = e : k === "center" || s ? (u = e / 2, n = e / 2) : n = e;
						let d = t.rtl ? -1 : 1, f = t.rtl ? a - 1 : V + 1, p = t.rtl ? 1 : -1, m = t.rtl ? V + 1 : a - 1;
						if (n > 0) {
							let e = n;
							for (let t = f; t >= 0 && t < w && e > 0; t += d) {
								let n = `${r}:${o[t]}`;
								if (b.has(n) || y.has(n)) break;
								let a = v.get(n);
								if (a && a.value.type !== "empty") break;
								q += i[t], e -= i[t];
							}
						}
						if (u > 0) {
							let e = u;
							for (let t = m; t >= 0 && t < w && e > 0; t += p) {
								let n = `${r}:${o[t]}`;
								if (b.has(n) || y.has(n)) break;
								let a = v.get(n);
								if (a && a.value.type !== "empty") break;
								se -= i[t], q += i[t], e -= i[t];
							}
						}
					}
				}
				let le = X, ue = 0;
				if (k === "fill" && !O && X.length > 0) {
					let t = Math.max(1, A - 6), n = e.measureText(X).width;
					if (n > 0 && n < t) {
						let e = Math.max(1, Math.floor(t / n));
						le = X.repeat(e);
					}
				}
				if (k === "distributed" || k === "justify" && !R.wrapText && !J) {
					let t = Math.max(1, A - 6), n = e.measureText(le).width, r = Math.max(1, [...le].length - 1);
					n < t && (ue = Math.max(0, (t - n) / r));
				}
				let Y, de;
				k === "right" ? (Y = M + A - 3, de = "right") : k === "center" ? (Y = M + A / 2, de = "center") : k === "centerContinuous" ? (Y = H + ne / 2, de = "center") : k === "distributed" || k === "justify" && !R.wrapText && !J ? (Y = M + 3, de = "left") : (Y = M + L, de = "left");
				let fe = R.textRotation ?? 0, me = fe === 255, he = fe > 0 && fe !== 255;
				if (z.iconSet && P > 0 && (e.save(), e.beginPath(), e.rect(M, c, A, j), e.clip(), ai(e, z.iconSet.name, z.iconSet.index, M + 2, c + (j - P) / 2, P), e.restore()), e.save(), e.beginPath(), e.rect(se, c, q, j), e.clip(), me) {
					let t = jr(I.size, S, 1.1), n = [...X].length * t, r = N === "top" ? c + 2 : N === "center" ? c + (j - n) / 2 : c + j - n - 2;
					e.textAlign = "center", e.textBaseline = "top";
					for (let n of X) {
						let i = n.codePointAt(0) ?? 0, a = oe(i) && ce(e, i);
						Xn(e, n, M + A / 2, r, t, a), r += t;
					}
					e.restore();
					return;
				}
				if (he) {
					let t = fe <= 90 ? -(fe * Math.PI / 180) : (fe - 90) * Math.PI / 180;
					e.translate(M + A / 2, c + j / 2), e.rotate(t), e.textAlign = "center", e.textBaseline = "middle", e.fillText(X, 0, 0), e.restore();
					return;
				}
				if (R.shrinkToFit) {
					let t = e.measureText(X).width, n = A - L - 3;
					if (t > n && t > 0) {
						let r = n / t, i = k === "right" ? M + A - 3 : k === "center" ? M + A / 2 : M + L;
						e.transform(r, 0, 0, 1, i * (1 - r), 0);
					}
				}
				if (e.textAlign = de, ue > 0) try {
					e.letterSpacing = `${ue}px`;
				} catch {}
				try {
					e.direction = Wn(R.readingOrder, X) ? "rtl" : "ltr";
				} catch {}
				let ge = F.value.type === "text" ? F.value.runs : void 0, _e = ge && ge.length > 0;
				if (R.wrapText && _e) ei(e, ge, h, {
					alignH: k,
					alignV: N,
					cx: M,
					cy: c,
					cellW: A,
					cellH: j,
					leftPad: L,
					paddingX: 3,
					paddingY: 2
				}, S, C, {
					fontColor: z.fontColor,
					readingOrder: R.readingOrder
				});
				else if (R.wrapText) $r(e, X, Y, h, {
					alignH: k,
					alignV: N,
					cx: M,
					cy: c,
					cellW: A,
					cellH: j,
					leftPad: L,
					paddingX: 3,
					paddingY: 2
				}, S);
				else if (_e) Qr(e, ge, h, {
					alignH: k,
					alignV: N,
					cx: M,
					cy: c,
					cellW: A,
					cellH: j,
					leftPad: L,
					paddingX: 3,
					paddingY: 2
				}, S, C, {
					fontColor: z.fontColor,
					readingOrder: R.readingOrder
				});
				else {
					let t = h.vertAlign, n = jr(I.size, S), r = 0;
					t === "superscript" ? r = -Math.round(n * .35) : t === "subscript" && (r = Math.round(n * .1));
					let i = t ? {
						...h,
						size: h.size * .65
					} : h;
					t && (e.font = Mr(i, S));
					let a = null, o = () => a ??= e.measureText(X), s = () => {
						let e = Math.min(o().width, q - L - 3);
						return {
							x: k === "right" ? M + A - 3 - e : k === "center" ? M + A / 2 - e / 2 : M + L,
							width: e
						};
					}, l = jr(i.size, S);
					if (h.underline || x) {
						let { x: t, width: n } = s(), i = (N === "top" ? c + 2 + l + 1 : N === "center" ? c + j / 2 + Math.round(l * .55) : c + j - 2 + 1) + r, a = x ? "#0563C1" : E ? p(E) : "#000000", o = h.underlineStyle === "double" || h.underlineStyle === "doubleAccounting";
						Fr(e, t, t + n, i, a, o, C);
					}
					if (h.strike) {
						let { x: t, width: n } = s(), i = (N === "top" ? c + 2 + Math.round(l * .5) : N === "center" ? c + j / 2 : c + j - 2 - Math.round(l * .35)) + r, a = i + U(i, .5, C);
						e.save(), e.strokeStyle = E ? p(E) : "#000000", e.lineWidth = .5, e.beginPath(), e.moveTo(t, a), e.lineTo(t + n, a), e.stroke(), e.restore();
					}
					if (X.includes("\n")) {
						let t = X.split("\n"), n = jr(I.size, S, 1.2, I.name ?? void 0), i = t.length * n, a;
						N === "top" ? (a = c + 2, e.textBaseline = "top") : N === "center" ? (a = c + (j - i) / 2, e.textBaseline = "top") : (a = c + j - i - 2, e.textBaseline = "top");
						for (let i = 0; i < t.length; i++) e.fillText(t[i], Y, a + i * n + r);
					} else {
						let { baseline: t, textY: n } = Gr({
							alignH: k,
							alignV: N,
							cx: M,
							cy: c,
							cellW: A,
							cellH: j,
							leftPad: L,
							paddingX: 3,
							paddingY: 2
						});
						e.textBaseline = t, e.fillText(le, Y, n + r);
					}
				}
				let ve = F.value.type === "text" ? F.value.phoneticRuns : void 0;
				if (F.showPhonetic && ve && ve.length > 0 && !X.includes("\n")) {
					let t = Mr(h, S), n = Pr(e, X, t), r;
					r = k === "right" ? M + A - 3 - n : k === "center" ? M + A / 2 - n / 2 : M + L;
					let i = E ? p(E) : "#000000";
					Nr(e, ve, F.value.type === "text" ? F.value.phoneticPr : void 0, X, t, _, r, c, S, i);
				}
				e.restore(), X && t.onTextRun && t.onTextRun({
					sheetName: t.worksheet.name,
					cellRef: Yn(r, s),
					text: X,
					x: M,
					y: c,
					width: A,
					height: j,
					row: r,
					col: s
				});
			});
		}
	}
	for (let e of P) e();
	for (let e of ee) e();
	for (let e of N) e();
	e.restore();
}
var fi = /* @__PURE__ */ new WeakMap();
function pi(e, t) {
	return {
		resource: e,
		operation: t
	};
}
function mi(e) {
	let t = fi.get(e);
	if (t) return t;
	let n = pi("worksheet-cell-index", "index-worksheet-cells"), r = On(e.rows, n), i = /* @__PURE__ */ new Set(), a = pi("worksheet-merge-skip-index", "expand-merged-cell-coordinates");
	for (let t of e.mergeCells ?? []) {
		En(t, a, 1);
		for (let e = t.top; e <= t.bottom; e++) for (let n = t.left; n <= t.right; n++) e === t.top && n === t.left || kn(i, `${e}:${n}`, a);
	}
	let o = /* @__PURE__ */ new Set();
	if (e.autoFilter) {
		let t = e.autoFilter, n = pi("worksheet-auto-filter-index", "expand-auto-filter-coordinates");
		En({
			top: t.top,
			bottom: t.top,
			left: t.left,
			right: t.right
		}, n);
		for (let e = t.left; e <= t.right; e++) kn(o, `${t.top}:${e}`, n);
	}
	let s = /* @__PURE__ */ new Map(), c = pi("worksheet-hyperlink-index", "index-hyperlink-coordinates");
	for (let t of e.hyperlinks ?? []) t.url && Dn(s, `${t.row}:${t.col}`, t.url, c);
	let l = /* @__PURE__ */ new Set(), u = pi("worksheet-comment-index", "index-comment-coordinates");
	for (let t of e.commentRefs ?? []) {
		let e = Or(t);
		e && kn(l, `${e.row}:${e.col}`, u);
	}
	let d = {
		cellMap: r,
		cfContext: Fn(e, r),
		mergeSkipSet: i,
		autoFilterCells: o,
		hyperlinkMap: s,
		commentCells: l,
		tableStyleMap: si(e),
		sparklineMap: li(e)
	};
	return fi.set(e, d), d;
}
function hi(e, t) {
	fi.set(t, mi(e));
}
function gi(e, t, n, r, i = {}) {
	let a = i.dpr ?? 1, o = i.cellScale ?? 1, s = br(t), c = s.maximumDigitWidth, l = e.canvas.width / a, u = e.canvas.height / a;
	e.clearRect(0, 0, l, u), e.fillStyle = "#ffffff", e.fillRect(0, 0, l, u);
	let d = (e) => Math.round(e * o), f = d(50), p = d(22), { row: m, col: h, rows: g, cols: _ } = r, v = (i.scrollOffsetX ?? 0) * o, y = (i.scrollOffsetY ?? 0) * o, { col: b, row: x } = s.axesAtScale(o), S = b.bandsToCover(1, i.freezeCols ?? 0, Math.max(0, l - f)), C = x.bandsToCover(1, i.freezeRows ?? 0, Math.max(0, u - p)), w = C.at(-1)?.index ?? 0, T = S.at(-1)?.index ?? 0, E = S.map(({ index: e }) => e), D = C.map(({ index: e }) => e), O = S.map(({ size: e }) => e), k = C.map(({ size: e }) => e), A = O.reduce((e, t) => e + t, 0), j = k.reduce((e, t) => e + t, 0), M = b.bandsToCover(h, Math.min(16384, h + _ - 1)), N = x.bandsToCover(m, Math.min(1048576, m + g - 1)), ee = M.map(({ index: e }) => e), P = N.map(({ index: e }) => e), F = M.map(({ size: e }) => e), I = N.map(({ size: e }) => e), { cellMap: te, cfContext: L, mergeSkipSet: R, autoFilterCells: z, hyperlinkMap: ne, commentCells: B, tableStyleMap: V, sparklineMap: H } = mi(t), re = /* @__PURE__ */ new Map(), W = pi("worksheet-merge-anchor-index", "index-merge-anchor-coordinates");
	for (let e of t.mergeCells ?? []) {
		let t = b.offsetOf(e.right + 1) - b.offsetOf(e.left), n = x.offsetOf(e.bottom + 1) - x.offsetOf(e.top);
		Dn(re, `${e.top}:${e.left}`, {
			totalW: t,
			totalH: n,
			right: e.right,
			bottom: e.bottom
		}, W);
	}
	let ie = {
		worksheet: t,
		styles: n,
		cellMap: te,
		mergeAnchorMap: re,
		mergeSkipSet: R,
		cfContext: L,
		colWidths: F,
		rowHeights: I,
		colAxis: b,
		rowAxis: x,
		frozenColWidths: O,
		frozenRowHeights: k,
		frozenW: A,
		frozenH: j,
		startRow: m,
		startCol: h,
		cs: o,
		dpr: a,
		autoFilterCells: z,
		hyperlinkMap: ne,
		commentCells: B,
		tableStyleMap: V,
		sparklineMap: H,
		mdw: c,
		onTextRun: i.onTextRun,
		rtl: t.rightToLeft === !0,
		canvasW: l
	}, ae = f, oe = p, G = ae + A, K = oe + j, se = Math.max(0, l - G), q = Math.max(0, u - K);
	w > 0 && T > 0 && di(e, ie, 1, 1, O, k, E, D, 0, 0, ae, oe, ae, oe, A, j), w > 0 && di(e, ie, 1, h, F, k, ee, D, v, 0, G, oe, G, oe, se, j), T > 0 && di(e, ie, m, 1, O, I, E, P, 0, y, ae, K, ae, K, A, q), di(e, ie, m, h, F, I, ee, P, v, y, G, K, G, K, se, q), t.images && t.images.length > 0 && i.loadedImages && bi(e, t, b, x, i.loadedImages, o, m, h, v, y, G, K, se, q, t.rightToLeft === !0, l), t.shapeGroups && t.shapeGroups.length > 0 && xi(e, t, b, x, o, m, h, v, y, G, K, se, q, i.loadedImages, t.rightToLeft === !0, l), t.charts && t.charts.length > 0 && Bi(e, t, b, x, o, m, h, v, y, G, K, se, q, t.rightToLeft === !0, l), t.slicers && t.slicers.length > 0 && $i(e, t, b, x, o, m, h, v, y, G, K, se, q, t.rightToLeft === !0, l), _i(e, l, u, m, h, g, _, F, I, ee, P, v, y, O, k, E, D, A, j, f, p, o, a, i.selectedRowRange ?? null, i.selectedColRange ?? null, t.rightToLeft === !0);
	let ce = t.rightToLeft === !0;
	if (w > 0) {
		e.save(), e.strokeStyle = _r, e.lineWidth = .5, e.beginPath();
		let t = K + U(K, .5, a);
		ce ? (e.moveTo(0, t), e.lineTo(l - f, t)) : (e.moveTo(f, t), e.lineTo(l, t)), e.stroke(), e.restore();
	}
	if (T > 0) {
		e.save(), e.strokeStyle = _r, e.lineWidth = .5, e.beginPath();
		let t = ce ? l - G : G, n = t + U(t, .5, a);
		e.moveTo(n, p), e.lineTo(n, u), e.stroke(), e.restore();
	}
}
function _i(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T) {
	let E = "#f8f9fa", D = "#e8eaed", O = "#caddf6", k = "#c8ccd0", A = "#5b9bd5", j = "#444", M = (e) => !w || e < w.start || e > w.end ? E : w.strong ? O : D, N = (e) => !w || e < w.start || e > w.end ? k : w.strong ? A : k, ee = (e) => !C || e < C.start || e > C.end ? E : C.strong ? O : D, P = (e) => !C || e < C.start || e > C.end ? k : C.strong ? A : k, F = `${Math.max(1, Math.round(11 * x))}px ${lr}`, I = y + _, te = b + v, L = .5 / S, R = (e, n) => T ? hr(e, n, t) : e, z = T ? t - y : 0;
	e.fillStyle = E, e.fillRect(z, 0, y, b), e.strokeStyle = k, e.lineWidth = .5, e.beginPath();
	let ne = T ? z + U(z, .5, S) : z + y - L;
	e.moveTo(ne, 0), e.lineTo(ne, b), e.moveTo(z, b - L), e.lineTo(z + y, b - L), e.stroke(), e.font = F, e.fillStyle = j;
	let B = (t, n, r) => {
		let i = R(n, r);
		e.fillStyle = M(t), e.fillRect(i, 0, r, b), e.strokeStyle = N(t), e.lineWidth = .5, e.beginPath();
		let a = i + U(i, .5, S);
		e.moveTo(a, 0), e.lineTo(a, b), e.moveTo(i, b - L), e.lineTo(i + r, b - L), e.stroke(), e.fillStyle = j, e.textAlign = "center", e.textBaseline = "middle", e.fillText(ti(t), i + r / 2, b / 2);
	}, V = (t, n, r) => {
		let i = z;
		e.fillStyle = ee(t), e.fillRect(i, n, y, r), e.strokeStyle = P(t), e.lineWidth = .5, e.beginPath();
		let a = n + U(n, .5, S), o = T ? i + U(i, .5, S) : i + y - L;
		e.moveTo(o, n), e.lineTo(o, n + r), e.moveTo(i, a), e.lineTo(i + y, a), e.stroke(), e.fillStyle = j, e.textBaseline = "middle";
		let s = Math.max(2, Math.round(4 * x));
		T ? (e.textAlign = "left", e.fillText(String(t), i + s, n + r / 2)) : (e.textAlign = "right", e.fillText(String(t), i + y - s, n + r / 2));
	};
	if (p.length > 0) {
		e.save(), e.beginPath(), e.rect(R(y, _), 0, _, b), e.clip();
		let t = y;
		for (let e = 0; e < p.length; e++) B(h[e], t, p[e]), t += p[e];
		e.restore();
	}
	e.save(), e.beginPath(), e.rect(R(I, t - I), 0, t - I, b), e.clip();
	let H = I - d;
	for (let e = 0; e < s.length; e++) {
		let n = s[e];
		H + n > I && H < t && B(l[e], H, n), H += n;
	}
	if (e.restore(), m.length > 0) {
		e.save(), e.beginPath(), e.rect(z, b, y, v), e.clip();
		let t = b;
		for (let e = 0; e < m.length; e++) V(g[e], t, m[e]), t += m[e];
		e.restore();
	}
	e.save(), e.beginPath(), e.rect(z, te, y, n - te), e.clip();
	let re = te - f;
	for (let e = 0; e < c.length; e++) {
		let t = c[e];
		re + t > te && re < n && V(u[e], re, t), re += t;
	}
	e.restore();
}
function vi(e, t) {
	return e.offsetOf(t);
}
function yi(e, t) {
	return e.offsetOf(t);
}
function bi(e, t, n, r, i, o, s, c, l, u, d, f, p, m, h, g) {
	if (p <= 0 || m <= 0) return;
	let _ = vi(n, c), v = yi(r, s);
	e.save(), e.beginPath();
	let y = gr(d, p, g, h);
	e.rect(y, f, p, m), e.clip();
	for (let s of t.images) {
		let t = i.get(or(s.imagePath, s.duotone));
		if (!t) continue;
		let c = s.fromCol + 1, b = s.fromRow + 1, x = vi(n, c) + s.fromColOff * o / R, S = yi(r, b) + s.fromRowOff * o / R, C, w;
		if (ar(s)) C = s.nativeExtCx * o / R, w = s.nativeExtCy * o / R;
		else {
			let e = s.toCol + 1, t = s.toRow + 1, i = vi(n, e) + s.toColOff * o / R, a = yi(r, t) + s.toRowOff * o / R;
			C = i - x, w = a - S;
		}
		if (C <= 0 || w <= 0) continue;
		let T = gr(d + (x - _) - l, C, g, h), E = f + (S - v) - u;
		T + C < y || T > y + p || E + w < f || E > f + m || (s.alpha != null && s.alpha < 1 ? (e.save(), e.globalAlpha = s.alpha, a(e, t, s.srcRect, T, E, C, w), e.restore()) : a(e, t, s.srcRect, T, E, C, w));
	}
	e.restore();
}
function xi(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
	if (d <= 0 || f <= 0) return;
	let g = t.shapeGroups;
	if (!g || g.length === 0) return;
	let _ = vi(n, o), v = yi(r, a);
	e.save(), e.beginPath();
	let y = gr(l, d, h, m);
	e.rect(y, u, d, f), e.clip();
	for (let t of g) {
		let a = t.fromCol + 1, o = t.fromRow + 1, g = vi(n, a) + t.fromColOff * i / R, b = yi(r, o) + t.fromRowOff * i / R, x, S;
		if (ar(t)) x = t.nativeExtCx * i / R, S = t.nativeExtCy * i / R;
		else {
			let e = t.toCol + 1, a = t.toRow + 1, o = vi(n, e) + t.toColOff * i / R, s = yi(r, a) + t.toRowOff * i / R;
			x = o - g, S = s - b;
		}
		if (x <= 0 || S <= 0) continue;
		let C = gr(l + (g - _) - s, x, h, m), w = u + (b - v) - c;
		if (!(C + x < y || C > y + d) && !(w + S < u || w > u + f)) for (let n of t.shapes) {
			let t = C + n.x * x, r = w + n.y * S, a = n.w * x, o = n.h * S;
			a <= 0 || o <= 0 || Si(e, n, t, r, a, o, i, p);
		}
	}
	e.restore();
}
function Si(e, t, n, r, i, o, s, c) {
	if (e.save(), t.rot !== 0 || t.flipH || t.flipV ? (e.translate(n + i / 2, r + o / 2), e.rotate(t.rot * Math.PI / 180), e.scale(t.flipH ? -1 : 1, t.flipV ? -1 : 1), e.translate(-i / 2, -o / 2)) : e.translate(n, r), t.geom.type === "custom") for (let n of t.geom.paths) {
		if (n.w <= 0 || n.h <= 0) continue;
		let r = i / n.w, a = o / n.h;
		e.beginPath();
		let s = 0, c = 0, l = 0, u = 0;
		for (let t of n.commands) switch (t.op) {
			case "moveTo": {
				let n = t.x * r, i = t.y * a;
				e.moveTo(n, i), s = l = n, c = u = i;
				break;
			}
			case "lineTo": {
				let n = t.x * r, i = t.y * a;
				e.lineTo(n, i), s = n, c = i;
				break;
			}
			case "cubicBezTo": {
				let n = t.x3 * r, i = t.y3 * a;
				e.bezierCurveTo(t.x1 * r, t.y1 * a, t.x2 * r, t.y2 * a, n, i), s = n, c = i;
				break;
			}
			case "quadBezTo": {
				let n = t.x2 * r, i = t.y2 * a;
				e.quadraticCurveTo(t.x1 * r, t.y1 * a, n, i), s = n, c = i;
				break;
			}
			case "arcTo": {
				let n = t.wr * r, i = t.hr * a;
				if (n <= 0 || i <= 0) break;
				let o = t.stAng / 6e4 * (Math.PI / 180), l = t.swAng / 6e4 * (Math.PI / 180), u = s - Math.cos(o) * n, d = c - Math.sin(o) * i, f = o + l;
				e.ellipse(u, d, n, i, 0, o, f, l < 0), s = u + Math.cos(f) * n, c = d + Math.sin(f) * i;
				break;
			}
			case "close":
				e.closePath(), s = l, c = u;
				break;
		}
		Mi(e, t);
	}
	else if (t.geom.type === "preset") {
		let n = t.fillColor ?? null, r = t.strokeColor && t.strokeWidth > 0 ? () => {
			e.strokeStyle = t.strokeColor, e.lineWidth = Math.max(.5, t.strokeWidth / R), e.stroke();
		} : null;
		u(e, t.geom.name, 0, 0, i, o, t.geom.adj ?? [], n, r, () => {}) || (e.beginPath(), e.rect(0, 0, i, o), Mi(e, t));
	} else if (t.geom.type === "image") {
		let n = c?.get(or(t.geom.imagePath, t.geom.duotone));
		if (n) {
			let r = t.geom.alpha;
			r != null && r < 1 ? (e.save(), e.globalAlpha = r, a(e, n, t.geom.srcRect, 0, 0, i, o), e.restore()) : a(e, n, t.geom.srcRect, 0, 0, i, o);
		}
	}
	t.text && ji(e, t.text, i, o, s), e.restore();
}
var Ci = /* @__PURE__ */ new WeakMap();
function wi(e, t) {
	let n = e.tinted.get(t);
	if (n) return n;
	let r = e.img.naturalWidth || 1, i = e.img.naturalHeight || 1, a = document.createElement("canvas");
	a.width = r, a.height = i;
	let o = a.getContext("2d");
	return o ? (o.drawImage(e.img, 0, 0, r, i), o.globalCompositeOperation = "source-in", o.fillStyle = t, o.fillRect(0, 0, r, i), e.tinted.set(t, a), a) : e.img;
}
function Ti(e) {
	let t = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, n = new Image();
	return new Promise((e, r) => {
		n.onload = () => e(n), n.onerror = r, n.src = t;
	});
}
var Ei = 256;
function Di(e, t, n) {
	let r = Math.max(1, Math.round(t * Ei)), i = Math.max(1, Math.round(n * Ei));
	return e.replace(/<svg([^>]*?)>/, (e, t) => `<svg${t.replace(/\s(?:width|height)="[^"]*"/g, "")} width="${r}" height="${i}">`);
}
function Oi(e) {
	let t = [];
	for (let n of e.shapeGroups ?? []) for (let e of n.shapes) for (let n of e.text?.paragraphs ?? []) for (let e of n.runs) e.type === "math" && t.push({
		nodes: e.nodes,
		display: e.display
	});
	return t;
}
function ki(e) {
	for (let t of e.shapeGroups ?? []) for (let e of t.shapes) for (let t of e.text?.paragraphs ?? []) for (let e of t.runs) if (e.type === "math" && !Ci.has(e.nodes)) return !0;
	return !1;
}
async function Ai(e, t) {
	let n = Oi(e).filter((e) => !Ci.has(e.nodes));
	if (n.length !== 0) {
		await t.loadMathJax();
		for (let e of n) if (!Ci.has(e.nodes)) try {
			let n = await t.mathMLToSvg(T(e.nodes, e.display)), r = await Ti(Di(Ie(n.svg, "#000000"), n.widthEm, n.ascentEm + n.descentEm));
			Ci.set(e.nodes, {
				img: r,
				widthEm: n.widthEm,
				ascentEm: n.ascentEm,
				descentEm: n.descentEm,
				tinted: /* @__PURE__ */ new Map()
			});
		} catch {}
	}
}
function ji(e, t, n, r, i) {
	if (n <= 0 || r <= 0 || t.paragraphs.length === 0) return;
	let a = t.lIns / R * i, o = t.rIns / R * i, s = t.tIns / R * i, c = t.bIns / R * i, l = Math.max(0, n - a - o), u = Math.max(0, r - s - c);
	if (l <= 0 || u <= 0) return;
	let d = (e) => {
		let t = (e.size > 0 ? e.size : mr) * D * i, n = pr(e.fontFace);
		return {
			font: `${e.italic ? "italic " : ""}${e.bold ? "bold " : ""}${t}px ${n}`,
			px: t
		};
	}, f = (t, n) => {
		let r = e.font;
		e.font = t;
		let i = e.measureText("M").actualBoundingBoxAscent;
		return e.font = r, i > 0 ? i : n * .85;
	}, p = t.wrap !== "none", m = [];
	for (let n of t.paragraphs) {
		let r = n.align || "l", a = (n.marL ?? 0) / R * i, o = (n.marR ?? 0) / R * i, s = (n.indent ?? 0) / R * i, c = Math.max(0, s), u = Math.max(0, l - a - o), h = !1, g = () => h ? a : a + c, _ = () => h ? u : u - c, v = [], y = 0, b = 0, x = 0, S = !1, C = n.spaceLine?.type === "pct", w = (e) => {
			let r = e;
			return n.spaceLine && (n.spaceLine.type === "pct" ? r *= n.spaceLine.val / 1e5 : r = n.spaceLine.val * D * i), t.autoFit === "norm" && t.lnSpcReduction != null && n.spaceLine?.type !== "pts" && (r *= 1 - t.lnSpcReduction), r;
		}, T = () => {
			if (b === 0) {
				let e = (E || mr) * D * i, t = Math.max(W(O, e), W(k, e)), n = e * 1.2;
				b = C ? n : Math.max(n, t), x = f(`${e}px ${pr(O)}`, e);
			}
			b = w(b), m.push({
				segs: v,
				align: r,
				height: b,
				ascent: x,
				hasMath: S,
				leftInset: g(),
				availW: _()
			}), h = !0, v = [], y = 0, b = 0, x = 0, S = !1;
		}, E = 0, O, k;
		for (let t of n.runs) {
			if (t.type === "break") {
				T();
				continue;
			}
			if (t.type === "math") {
				let e = Ci.get(t.nodes);
				if (!e) continue;
				let n = (t.fontSize ?? (E || mr)) * D * i, o = e.widthEm * n, s = e.ascentEm * n, c = e.descentEm * n, l = t.color ?? "#000000";
				if (t.display) {
					T(), m.push({
						segs: [{
							kind: "math",
							render: e,
							color: l,
							w: o,
							ascent: s,
							descent: c
						}],
						align: r,
						height: w(s + c),
						ascent: s,
						hasMath: !0,
						leftInset: a,
						availW: u
					}), h = !0;
					continue;
				}
				p && y + o > _() && v.length > 0 && T(), v.push({
					kind: "math",
					render: e,
					color: l,
					w: o,
					ascent: s,
					descent: c
				}), y += o, b = Math.max(b, s + c), x = Math.max(x, s), S = !0;
				continue;
			}
			E = t.size > 0 ? t.size : mr, O = t.fontFace, k = t.fontFaceEa;
			let { font: n, px: o } = d(t), s = t.color ?? "#000000", c = Math.max(W(t.fontFace, o), W(t.fontFaceEa, o)), l = o * 1.2, g = C ? l : Math.max(l, c);
			b = Math.max(b, g), x = Math.max(x, f(n, o)), e.font = n;
			let A = t.text.split("\n");
			for (let t = 0; t < A.length; t++) {
				t > 0 && T();
				let r = A[t];
				if (!r) continue;
				if (!p) {
					let t = e.measureText(r).width;
					v.push({
						kind: "text",
						text: r,
						font: n,
						color: s,
						w: t
					}), y += t;
					continue;
				}
				let i = "";
				for (let t of r) {
					let r = i + t, a = e.measureText(r).width;
					if (y + a > _() && (i.length > 0 || v.length > 0)) {
						if (i) {
							let t = e.measureText(i).width;
							v.push({
								kind: "text",
								text: i,
								font: n,
								color: s,
								w: t
							}), y += t;
						}
						T(), i = t, e.font = n, b = Math.max(b, g), x = Math.max(x, f(n, o));
					} else i = r;
				}
				if (i) {
					let t = e.measureText(i).width;
					v.push({
						kind: "text",
						text: i,
						font: n,
						color: s,
						w: t
					}), y += t;
				}
			}
		}
		T();
	}
	let h = m.reduce((e, t) => e + t.height, 0), g = s;
	t.anchor === "ctr" ? g = s + (u - h) / 2 : t.anchor === "b" && (g = s + Math.max(0, u - h));
	let _ = g;
	for (let t of m) {
		let n = t.segs.reduce((e, t) => e + t.w, 0), r = a + t.leftInset, i = r;
		if (t.align === "ctr" ? i = r + Math.max(0, (t.availW - n) / 2) : t.align === "r" && (i = r + Math.max(0, t.availW - n)), t.hasMath) {
			e.textBaseline = "alphabetic";
			let n = _ + t.ascent;
			for (let r of t.segs) {
				if (r.kind === "text") e.font = r.font, e.fillStyle = r.color, e.fillText(r.text, i, n);
				else {
					let t = wi(r.render, r.color);
					e.drawImage(t, i, n - r.ascent, r.w, r.ascent + r.descent);
				}
				i += r.w;
			}
		} else {
			e.textBaseline = "middle";
			let n = _ + t.height / 2;
			for (let r of t.segs) r.kind === "text" && (e.font = r.font, e.fillStyle = r.color, e.fillText(r.text, i, n)), i += r.w;
		}
		_ += t.height;
	}
}
function Mi(e, t) {
	t.fillColor && (e.fillStyle = t.fillColor, e.fill()), t.strokeColor && t.strokeWidth > 0 && (e.strokeStyle = t.strokeColor, e.lineWidth = Math.max(.5, t.strokeWidth / R), e.stroke());
}
function Ni(e, t, n, r, i, a, o) {
	if (r === n && i === t) return e;
	let s = (e, r) => {
		if (e === t && r === n) return null;
		let i = a.get(`${e}:${r}`);
		return i ? Lr(o, i.styleIndex ?? 0).border : null;
	}, c = s(t, r), l = s(i, n), u = s(i, r), d = (e, ...t) => {
		if (e?.style) return e;
		for (let e of t) if (e?.style) return e;
		return e ?? null;
	};
	return {
		left: e.left,
		top: e.top,
		right: d(c?.right, u?.right, e.right),
		bottom: d(l?.bottom, u?.bottom, e.bottom),
		diagonalUp: e.diagonalUp ?? null,
		diagonalDown: e.diagonalDown ?? null
	};
}
function Pi(e, t) {
	if (!t) return e;
	let n = (e, t) => t && t.style ? t : e ?? null;
	return {
		left: n(e.left, t.left),
		right: n(e.right, t.right),
		top: n(e.top, t.top),
		bottom: n(e.bottom, t.bottom),
		diagonalUp: n(e.diagonalUp, t.diagonalUp),
		diagonalDown: n(e.diagonalDown, t.diagonalDown)
	};
}
function Fi(e, t, n, r, i, a, o = 1) {
	let s = [
		{
			edge: t.top,
			x1: n,
			y1: r,
			x2: n + i,
			y2: r,
			kind: "h"
		},
		{
			edge: t.bottom,
			x1: n,
			y1: r + a,
			x2: n + i,
			y2: r + a,
			kind: "h"
		},
		{
			edge: t.left,
			x1: n,
			y1: r,
			x2: n,
			y2: r + a,
			kind: "v"
		},
		{
			edge: t.right,
			x1: n + i,
			y1: r,
			x2: n + i,
			y2: r + a,
			kind: "v"
		},
		{
			edge: t.diagonalUp,
			x1: n,
			y1: r + a,
			x2: n + i,
			y2: r,
			kind: "d"
		},
		{
			edge: t.diagonalDown,
			x1: n,
			y1: r,
			x2: n + i,
			y2: r + a,
			kind: "d"
		}
	];
	for (let { edge: t, x1: c, y1: l, x2: u, y2: d, kind: f } of s) {
		if (!t || !t.style || t.style === "none") continue;
		let s = t.color ? p(t.color) : "#000000";
		if (t.style === "double" && f === "d") {
			e.strokeStyle = s, e.lineWidth = 1, e.setLineDash([]);
			let t = u - c, n = d - l, r = Math.hypot(t, n), i = -n / r * 1, a = t / r * 1;
			e.beginPath(), e.moveTo(c + i, l + a), e.lineTo(u + i, d + a), e.moveTo(c - i, l - a), e.lineTo(u - i, d - a), e.stroke();
			continue;
		}
		if (t.style === "double" && f !== "d") {
			if (e.strokeStyle = s, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), f === "h") {
				let t = l === r, o = t ? r - 1 : r + a + 1, s = t ? r + 1 : r + a - 1;
				e.moveTo(n - 1, o), e.lineTo(n + i + 1, o), e.moveTo(n + 1, s), e.lineTo(n + i - 1, s);
			} else {
				let t = c === n, o = t ? n - 1 : n + i + 1, s = t ? n + 1 : n + i - 1;
				e.moveTo(o, r - 1), e.lineTo(o, r + a + 1), e.moveTo(s, r + 1), e.lineTo(s, r + a - 1);
			}
			e.stroke();
			continue;
		}
		e.beginPath(), e.strokeStyle = s;
		let m = Ii(t.style);
		e.lineWidth = m;
		let h = Li(t.style);
		e.setLineDash(h);
		let g = f === "v" ? U(c, m, o) : 0, _ = f === "h" ? U(l, m, o) : 0;
		e.moveTo(c + g, l + _), e.lineTo(u + g, d + _), e.stroke(), e.setLineDash([]);
	}
}
function Ii(e) {
	switch (e) {
		case "thick": return 3;
		case "medium":
		case "mediumDashed":
		case "mediumDashDot":
		case "mediumDashDotDot":
		case "slantDashDot": return 2;
		case "hair": return .5;
		default: return 1;
	}
}
function Li(e) {
	return v(e);
}
function Ri(e) {
	switch (e) {
		case "double": return 13;
		case "thick": return 12;
		case "medium": return 11;
		case "mediumDashed": return 10;
		case "mediumDashDot": return 9;
		case "slantDashDot": return 8;
		case "mediumDashDotDot": return 7;
		case "thin": return 6;
		case "dashed": return 5;
		case "dashDot": return 4;
		case "dashDotDot": return 3;
		case "dotted": return 2;
		case "hair": return 1;
		default: return 0;
	}
}
function zi(e, t) {
	let n = Ri(e?.style), r = Ri(t?.style);
	return n === 0 && r === 0 ? null : n >= r ? e ?? null : t ?? null;
}
function Bi(e, t, n, r, i, a, o, s, c, u, d, f, p, m, h) {
	if (f <= 0 || p <= 0) return;
	let g = vi(n, o), _ = yi(r, a), v = gr(u, f, h, m);
	for (let a of t.charts) {
		let t = a.fromCol + 1, o = a.fromRow + 1, y = a.toCol + 1, b = a.toRow + 1, x = vi(n, t) + a.fromColOff * i / R, S = yi(r, o) + a.fromRowOff * i / R, C = vi(n, y) + a.toColOff * i / R, w = yi(r, b) + a.toRowOff * i / R, T = C - x, E = w - S;
		if (T <= 0 || E <= 0) continue;
		let O = gr(u + (x - g) - s, T, h, m), k = d + (S - _) - c;
		if (O + T < v || O > v + f || k + E < d || k > d + p) continue;
		e.save(), e.beginPath(), e.rect(v, d, f, p), e.clip();
		let A = D * i;
		l(e, a.chart, {
			x: O,
			y: k,
			w: T,
			h: E
		}, A), e.restore();
	}
}
var Vi = "600 12px \"Meiryo UI\", \"Segoe UI\", sans-serif", Hi = "11px \"Meiryo UI\", \"Segoe UI\", sans-serif", Ui = "#FFFFFF", Wi = "#BFBFBF", Gi = "#F2F2F2", Ki = "#404040", qi = "#FFFFFF", Ji = "#000000", Yi = "#A5A5A5", Xi = "#E7E6E6", Zi = "#A6A6A6", Qi = "#C6C6C6";
function $i(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
	if (d <= 0 || f <= 0) return;
	let h = t.slicers;
	if (!h) return;
	let g = vi(n, o), _ = yi(r, a), v = gr(l, d, m, p);
	for (let t of h) {
		let a = t.fromCol + 1, o = t.fromRow + 1, h = t.toCol + 1, y = t.toRow + 1, b = vi(n, a) + t.fromColOff * i / R, x = yi(r, o) + t.fromRowOff * i / R, S = vi(n, h) + t.toColOff * i / R, C = yi(r, y) + t.toRowOff * i / R, w = S - b, T = C - x;
		if (w <= 0 || T <= 0) continue;
		let E = gr(l + (b - g) - s, w, m, p), D = u + (x - _) - c;
		E + w < v || E > v + d || D + T < u || D > u + f || (e.save(), e.beginPath(), e.rect(v, u, d, f), e.clip(), ea(e, t.caption, t.items, E, D, w, T, i, t.style), e.restore());
	}
}
function ea(e, t, n, r, i, a, o, s, c) {
	let l = c != null;
	e.fillStyle = c?.whole?.fillColor ?? Ui, e.fillRect(r, i, a, o);
	let u = l ? c.whole?.borderColor : Wi;
	u && (e.strokeStyle = u, e.lineWidth = 1, e.strokeRect(r + .5, i + .5, a - 1, o - 1));
	let d = Math.max(20 * s, 14), f = l ? c.header?.fillColor : Gi;
	f && (e.fillStyle = f, e.fillRect(r + 1, i + 1, a - 2, d)), e.fillStyle = c?.header?.fontColor ?? Ki, e.font = na(c?.header, Vi, s), e.textBaseline = "middle", e.textAlign = "left";
	let p = 6 * s;
	if (ia(e, t, r + p, i + d / 2 + 1, a - 2 * p), n.length === 0) return;
	let m = Math.max(1, Math.round(2 * s)), h = 4 * s, g = r + h, _ = i + d + h, v = a - 2 * h, y = o - d - 2 * h;
	if (v <= 0 || y <= 0) return;
	let b = Math.max(18 * s, 16), x = Math.max(1, Math.floor((y + m) / (b + m))), S = Math.min(n.length, x), C = Math.min(b, (y - m * (S - 1)) / S);
	if (C <= 0) return;
	e.font = ra(Hi, s);
	let w = 8 * s;
	for (let t = 0; t < S; t++) {
		let r = n[t], i = _ + t * (C + m), a = r.selected, o = a ? c?.selectedItemWithData : c?.unselectedItemWithData, u = o?.fillColor ?? (a ? qi : Xi), d = l ? o?.borderColor : a ? Yi : Qi;
		e.fillStyle = u, l ? (ta(e, g, i, v, C, Math.min(4 * s, C / 4)), e.fill(), d && (e.strokeStyle = d, e.lineWidth = 1, e.stroke())) : (e.fillRect(g, i, v, C), d && (e.strokeStyle = d, e.lineWidth = 1, e.strokeRect(g + .5, i + .5, v - 1, C - 1))), e.font = na(o, Hi, s), e.fillStyle = o?.fontColor ?? (a ? Ji : Zi), ia(e, r.name, g + w, i + C / 2 + 1, v - 2 * w);
	}
}
function ta(e, t, n, r, i, a) {
	let o = Math.max(0, Math.min(a, r / 2, i / 2));
	e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.quadraticCurveTo(t + r, n, t + r, n + o), e.lineTo(t + r, n + i - o), e.quadraticCurveTo(t + r, n + i, t + r - o, n + i), e.lineTo(t + o, n + i), e.quadraticCurveTo(t, n + i, t, n + i - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath();
}
function na(e, t, n) {
	if (!e) return ra(t, n);
	let r = Math.round((e.fontSize ?? 11) * n);
	return `${e.fontBold ? "bold " : ""}${r}px ${e.fontFamily ? `"${e.fontFamily}", "Segoe UI", sans-serif` : "\"Meiryo UI\", \"Segoe UI\", sans-serif"}`;
}
function ra(e, t) {
	return e.replace(/(\d+(?:\.\d+)?)px/, (e, n) => `${Math.round(Number(n) * t)}px`);
}
function ia(e, t, n, r, i) {
	if (i <= 0) return;
	let a = t;
	if (e.measureText(a).width > i) {
		for (; a.length > 0 && e.measureText(a + "…").width > i;) a = a.slice(0, -1);
		a = a.length > 0 ? a + "…" : "";
	}
	e.fillText(a, n, r);
}
//#endregion
//#region packages/xlsx/src/render-orchestrator.ts
var aa = Symbol("xlsx-render-commit-guard");
function oa(e, t) {
	return {
		...e,
		[aa]: t
	};
}
function sa(e, t, n, r, i) {
	if (!n) return !0;
	let a = r ?? br(t), o = i?.scale ?? 1, { col: s, row: c } = a.axesAtScale(o), l = (e, t, n) => e.offsetOf(t + 1) + n * o / R, u = l(s, e.fromCol, e.fromColOff), d = l(c, e.fromRow, e.fromRowOff), f = ar(e), p = f ? u + e.nativeExtCx * o / R : l(s, e.toCol, e.toColOff), m = f ? d + e.nativeExtCy * o / R : l(c, e.toRow, e.toRowOff);
	if (p <= u || m <= d) return !1;
	let h = i ? a.effectiveFrozenBands({
		scale: o,
		width: i.width,
		height: i.height,
		headerWidth: 50,
		headerHeight: 22,
		rows: i.freezeRows,
		cols: i.freezeCols
	}) : {
		rows: t.freezeRows ?? 0,
		cols: t.freezeCols ?? 0
	}, g = (e, t, n, r, i) => {
		let a = Math.min(e, t), o = Math.max(e, t);
		return a < n && o > 0 || a < i && o > r;
	};
	return g(u, p, s.offsetOf(h.cols + 1), s.offsetOf(n.col), s.offsetOf(n.col + n.cols)) && g(d, m, c.offsetOf(h.rows + 1), c.offsetOf(n.row), c.offsetOf(n.row + n.rows));
}
async function ca(e, t, n, r, i = 0, a = 0, o = null, c = null, l) {
	let u = t === "image/svg+xml", d = S(t, o, i, a), f = () => Fe(e, t, c, r, {
		widthPt: d.widthPt,
		heightPt: d.heightPt,
		offscreenFactory: l
	}), p = {
		svgImagePath: n,
		srcRect: o
	};
	if (de(p)) try {
		return await s(p.svgImagePath, r);
	} catch {
		return u ? s(e, r) : f();
	}
	return u ? s(e, r) : f();
}
async function la(e, t, n, r) {
	if (t.clear(), !n) return;
	let i = n, a = /* @__PURE__ */ new Map(), o = r?.viewport ? br(e) : void 0, s = r?.viewport && r.width !== void 0 && r.height !== void 0 ? {
		width: r.width,
		height: r.height,
		scale: r.cellScale ?? 1,
		freezeRows: r.freezeRows ?? e.freezeRows ?? 0,
		freezeCols: r.freezeCols ?? e.freezeCols ?? 0
	} : void 0;
	if (e.images) for (let t of e.images) sa(t, e, r?.viewport, o, s) && a.set(or(t.imagePath, t.duotone), {
		imagePath: t.imagePath,
		mimeType: t.mimeType,
		svgImagePath: t.svgImagePath,
		widthPt: t.nativeExtCx > 0 ? t.nativeExtCx / q : 0,
		heightPt: t.nativeExtCy > 0 ? t.nativeExtCy / q : 0,
		srcRect: t.srcRect ?? null,
		duotone: t.duotone ?? null
	});
	if (e.shapeGroups) {
		for (let t of e.shapeGroups) if (sa(t, e, r?.viewport, o, s)) for (let e of t.shapes) e.geom.type === "image" && a.set(or(e.geom.imagePath, e.geom.duotone), {
			imagePath: e.geom.imagePath,
			mimeType: e.geom.mimeType,
			svgImagePath: e.geom.svgImagePath,
			widthPt: t.nativeExtCx > 0 ? t.nativeExtCx * e.w / q : 0,
			heightPt: t.nativeExtCy > 0 ? t.nativeExtCy * e.h / q : 0,
			srcRect: e.geom.srcRect ?? null,
			duotone: e.geom.duotone ?? null
		});
	}
	a.size !== 0 && await Promise.all([...a.entries()].map(async ([e, n]) => {
		try {
			let a = await ca(n.imagePath, n.mimeType, n.svgImagePath, i, n.widthPt, n.heightPt, n.srcRect, n.duotone, r?.offscreenFactory);
			t.set(e, a);
		} catch (n) {
			if (m(n)) throw n;
			t.delete(e);
		}
	}));
}
async function ua(e, t, n, r = {}) {
	let i = r.fetchImage ? _(r.fetchImage) : void 0;
	try {
		await da(e, t, n, r);
	} finally {
		i?.();
	}
}
async function da(e, t, n, r = {}) {
	let { ws: i, styles: a } = e, o = F(t) ? t.clientWidth || 800 : t.width, s = F(t) ? t.clientHeight || 600 : t.height, c = r.width ?? o, l = r.height ?? s, u = /* @__PURE__ */ new Map();
	if (await la(i, u, r.fetchImage, {
		viewport: n,
		width: c,
		height: l,
		cellScale: r.cellScale,
		freezeRows: r.freezeRows,
		freezeCols: r.freezeCols
	}), e.math && ki(i) && await Ai(i, e.math), r[aa]?.() === !1) return;
	let d = r.dpr ?? L(), f = K(c * d, l * d), p = f.clamped ? d * f.scale : d, m = f.width, h = f.height;
	if (t.width !== m && (t.width = m), t.height !== h && (t.height = h), F(t)) {
		let e = `${c}px`, n = `${l}px`;
		t.style.width !== e && (t.style.width = e), t.style.height !== n && (t.style.height = n);
	}
	let g = t.getContext("2d");
	if (g.setTransform(p, 0, 0, p, 0, 0), i.parseError) {
		fa(g, c, l, i.name, i.parseError);
		return;
	}
	gi(g, i, a, n, {
		...r,
		dpr: p,
		loadedImages: u
	});
}
function fa(e, t, n, r, i) {
	e.save(), e.fillStyle = "#f7f7f8", e.fillRect(0, 0, t, n);
	let a = t / 2, o = Math.min(t, n), s = Math.max(20, o * .1);
	e.fillStyle = "#b23b3b", e.textAlign = "center", e.textBaseline = "middle", e.font = `${s}px sans-serif`, e.fillText("⚠", a, n * .32);
	let c = Math.max(13, o * .035);
	e.fillStyle = "#333333", e.font = `600 ${c}px sans-serif`, e.fillText(`Sheet "${r}" could not be displayed`, a, n * .46);
	let l = Math.max(10, o * .022);
	e.fillStyle = "#666666", e.font = `${l}px sans-serif`;
	let u = Math.min(t * .8, 640), d = i.split(/\s+/), f = [], p = "";
	for (let t of d) {
		let n = p ? `${p} ${t}` : t;
		if (e.measureText(n).width > u && p ? (f.push(p), p = t) : p = n, f.length >= 4) break;
	}
	p && f.length < 4 && f.push(p);
	let m = l * 1.4, h = n * .52 + m;
	for (let t of f.slice(0, 4)) e.fillText(t, a, h), h += m;
	e.restore();
}
//#endregion
//#region packages/xlsx/src/google-fonts.ts
var pa = {
	...G,
	...k
};
function* ma(e) {
	for (let t of e?.sharedStrings ?? []) if (t.runs && t.runs.length > 0) for (let e of t.runs) yield e.text;
	else yield t.text;
}
function ha(e) {
	let t = /* @__PURE__ */ new Set(), n = null;
	for (let r of e?.styles?.fonts ?? []) r.name && (t.add(r.name), n ??= Y(r.name));
	for (let r of ee(ma(e), n)) t.add(r);
	return t;
}
function ga(e) {
	let t = (e ?? "").trim();
	if (!t) return {
		kind: "unresolved",
		formula: ""
	};
	if (t.length >= 2 && t.startsWith("\"") && t.endsWith("\"")) return {
		kind: "inline",
		values: t.slice(1, -1).split(",").map((e) => e.trim()).filter((e) => e.length > 0)
	};
	let n, r = t, i = t.indexOf("!");
	if (i >= 0) {
		let e = t.slice(0, i);
		e.startsWith("'") && e.endsWith("'") && e.length >= 2 && (e = e.slice(1, -1).replace(/''/g, "'")), n = e, r = t.slice(i + 1);
	}
	let [a, o] = r.split(":"), s = Jn(a ?? "");
	if (s) {
		let e = o ? Jn(o) : s;
		if (e) {
			let t = {
				row: Math.min(s.row, e.row),
				col: Math.min(s.col, e.col)
			}, r = {
				row: Math.max(s.row, e.row),
				col: Math.max(s.col, e.col)
			};
			return {
				kind: "range",
				sheet: n,
				start: t,
				end: r
			};
		}
	}
	return {
		kind: "unresolved",
		formula: t
	};
}
function _a(e, t) {
	if (e.kind === "inline") return {
		kind: "values",
		values: e.values
	};
	if (e.kind === "unresolved") return {
		kind: "formula",
		formula: e.formula
	};
	let n = [];
	for (let r = e.start.row; r <= e.end.row; r++) for (let i = e.start.col; i <= e.end.col; i++) {
		let e = t(r, i);
		e != null && e !== "" && n.push(e);
	}
	return {
		kind: "values",
		values: n
	};
}
function va(e) {
	let { cell: t, panel: n, viewport: r, rtl: i } = e, a = t.y + t.h + 2, o = t.y - 2 - n.h, s;
	s = a + n.h <= r.h ? a : o >= 0 ? o : a, s = Math.max(0, Math.min(s, r.h - n.h));
	let c = i ? t.x + t.w - n.w : t.x;
	return c = Math.max(0, Math.min(c, r.w - n.w)), {
		left: c,
		top: s
	};
}
//#endregion
//#region packages/xlsx/src/worker-protocol.ts
function ya(e, t) {
	if (!t) return;
	let n = !1;
	if (t.rows) for (let [r, i] of Object.entries(t.rows)) {
		let t = Number(r);
		i === null ? Object.hasOwn(e.rowHeights, t) && (delete e.rowHeights[t], n = !0) : e.rowHeights[t] !== i && (e.rowHeights[t] = i, n = !0);
	}
	if (t.cols) for (let [r, i] of Object.entries(t.cols)) {
		let t = Number(r);
		i === null ? Object.hasOwn(e.colWidths, t) && (delete e.colWidths[t], n = !0) : e.colWidths[t] !== i && (e.colWidths[t] = i, n = !0);
	}
	n && ir.invalidate(e);
}
function ba(e, t) {
	if (!t) return e;
	let n = {
		...e,
		rowHeights: { ...e.rowHeights },
		colWidths: { ...e.colWidths }
	};
	return ya(n, t), n;
}
var xa = Symbol("xlsx-viewer-render-context");
function Sa(e, t, n) {
	if (!Number.isFinite(t) || t <= 0) throw Error("XLSX maximum digit width must be a finite positive number");
	return {
		...e,
		[xa]: {
			maximumDigitWidth: t,
			worksheet: n?.worksheet,
			projection: n?.projection
		}
	};
}
function Ca(e) {
	let t = e[xa], n = { ...e };
	return delete n[xa], t ? {
		opts: n,
		layoutMetrics: { maximumDigitWidth: t.maximumDigitWidth },
		worksheet: t.worksheet,
		projection: t.projection
	} : { opts: n };
}
//#endregion
//#region packages/xlsx/src/workbook.ts
var wa = Symbol("retain-xlsx-viewer-fonts"), Ta = Symbol("release-xlsx-viewer-projection"), Ea = class e {
	metrics = null;
	worker;
	bridge;
	parsedWorkbook = null;
	sheetCache = /* @__PURE__ */ new Map();
	sheetLoads = /* @__PURE__ */ new Map();
	rawParts = new Pe({
		maxEntries: 64,
		maxBytes: se
	});
	queuedImageLoads = /* @__PURE__ */ new Map();
	_fetchImage = (e, t) => this.getImageWithinArchiveOperation(e, t);
	resourcePolicy = null;
	math;
	googleFontNames = [];
	retainedFontSets = /* @__PURE__ */ new Map();
	fontsDestroyed = !1;
	_mode = "main";
	generation = 0;
	archiveOperationTail = Promise.resolve();
	worksheetPullClient = null;
	workerTimeoutMs;
	retainedSheetUsage = {
		rows: 0,
		cells: 0,
		ownedUtf8Bytes: 0,
		jsonBytes: 0
	};
	resourceFailure = null;
	constructor(e, t, n) {
		this.worker = e, this._mode = t, this.bridge = new ke(this.worker, {
			correlate: (e) => "protocol" in e && e.protocol === "ooxml-pull-v1" ? e.requestId : "id" in e ? e.id : void 0,
			toError: (e) => "type" in e && e.type === "error" ? z(e) : void 0
		});
		let r = new URL(n ?? it, location.href).href;
		this.bridge.post({
			type: "init",
			wasmUrl: r
		});
	}
	get mode() {
		return this._mode;
	}
	static async load(t, n = {}) {
		let i = r(n), a = n.mode ?? "main", o = new y({
			enabled: !0,
			format: "xlsx",
			mode: a,
			policy: i.policy,
			onMetrics: i.onResourceMetrics,
			emitToConsole: i.debug
		});
		try {
			if (a === "worker" && (typeof Worker > "u" || typeof OffscreenCanvas > "u")) throw Error("mode: 'worker' requires Worker and OffscreenCanvas support");
			let r = typeof t == "string" ? void 0 : t, s;
			if (typeof t == "string") {
				let e = await fetch(t);
				if (!e.ok) throw Error(`Failed to fetch: ${e.status} ${e.statusText}`);
				s = await e.arrayBuffer();
			} else s = t;
			s = Ae(await ge(s, n.password));
			let c = s === r;
			o.setSourceBytes(s.byteLength), o.checkpoint("container ready");
			let l = a === "worker" ? (await import("./render-worker-host-Bkf1jUcW.js")).createRenderWorker() : new rt(), u;
			try {
				return u = new e(l, a, n.wasmUrl), u.metrics = o, await u._load(s, n, i.policy, (e) => o.observeUsage(e), c), o.checkpoint("workbook index ready"), o.succeed({ sheets: u.sheetCount }), u;
			} catch (e) {
				let t = u;
				throw me(l, t ? () => t.destroy() : void 0), e;
			}
		} catch (e) {
			throw o.fail(e), e;
		}
	}
	async _load(e, t = {}, n = C(t), r, i = !1) {
		this.resourceFailure = null, this.retainedSheetUsage = {
			rows: 0,
			cells: 0,
			ownedUtf8Bytes: 0,
			jsonBytes: 0
		}, this.sheetCache.clear(), await this.worksheetPullClient?.cancelAll("closed"), this.worksheetPullClient = null, this.generation = (this.generation ?? 0) + 1, this.resourcePolicy = n, this.workerTimeoutMs = t.workerTimeoutMs, this.math = t.math, t.math && this._mode === "worker" && console.warn("[ooxml] the math engine is unavailable in mode: 'worker'; equations will be skipped. Use mode: 'main' for workbooks with equations.");
		let a = i ? e.slice(0) : e, o = await this.bridge.request((e) => this._mode === "worker" ? {
			type: "parse",
			id: e,
			data: a,
			resourcePolicy: n,
			useGoogleFonts: !!t.useGoogleFonts
		} : {
			type: "parse",
			id: e,
			data: a,
			resourcePolicy: n
		}, [a], { timeoutMs: t.workerTimeoutMs });
		if (this._mode === "worker") {
			let e = o;
			this.parsedWorkbook = e.workbook, e.usage && r?.(e.usage);
		} else {
			let { workbookJson: e, usage: t } = o;
			t && r?.(t), this.parsedWorkbook = JSON.parse(new TextDecoder().decode(new Uint8Array(e)));
		}
		this.ensureWorksheetPullClient();
		let s = this.parsedWorkbook?.workbook.parseError;
		s && console.warn(`[ooxml] xlsx opened with a degraded part: ${s}`), t.useGoogleFonts && (this.googleFontNames = [...ha(this.parsedWorkbook)], typeof document < "u" && document.fonts && await this.retainFontsInSet(document.fonts));
	}
	async retainFontsInSet(e) {
		if (this.googleFontNames.length === 0 || this.fontsDestroyed) return () => void 0;
		let t = this.retainedFontSets.get(e);
		if (t) t.refs++;
		else {
			let n = Ne(this.googleFontNames, pa, e);
			t = {
				refs: 1,
				faces: null,
				loading: n
			}, this.retainedFontSets.set(e, t), n.then((e) => {
				t.faces = e, this.fontsDestroyed && Me(e);
			});
		}
		await t.loading;
		let n = !1;
		return () => {
			if (n) return;
			n = !0;
			let r = this.retainedFontSets.get(e);
			r === t && (r.refs--, !(r.refs > 0) && (this.retainedFontSets.delete(e), r.faces ? Me(r.faces) : r.loading.then(Me)));
		};
	}
	async [wa](e) {
		return await this.retainFontsInSet(e.fonts);
	}
	get sheetNames() {
		return this.parsedWorkbook?.workbook.sheets.map((e) => e.name) ?? [];
	}
	get sheetCount() {
		return this.parsedWorkbook?.workbook.sheets.length ?? 0;
	}
	get tabColors() {
		return this.parsedWorkbook?.workbook.sheets.map((e) => e.tabColor ?? null) ?? [];
	}
	sheetVisibility(e) {
		return at(this.parsedWorkbook?.workbook.sheets ?? [], e);
	}
	isHidden(e) {
		return this.sheetVisibility(e) !== "visible";
	}
	async getWorksheet(e) {
		this.assertResourceHealthy();
		let t = this.sheetCache.get(e);
		if (t) return t;
		let n = this.sheetLoads.get(e);
		if (n) return n;
		let r = this.loadWorksheet(e);
		this.sheetLoads.set(e, r);
		try {
			return await r;
		} finally {
			this.sheetLoads.get(e) === r && this.sheetLoads.delete(e);
		}
	}
	async getResourceMetrics() {
		let e = this.metrics;
		if (!e) throw Error("Workbook not loaded");
		return X(e, async (e) => (await this.bridge.request((e) => ({
			type: "resourceUsage",
			id: e
		}), void 0, { timeoutMs: e })).usage);
	}
	async loadWorksheet(e) {
		if (!this.parsedWorkbook) throw Error("Workbook not loaded");
		let t = this.parsedWorkbook.workbook.sheets[e];
		if (!t) throw Error(`Sheet index ${e} out of range`);
		return this.runArchiveOperation(() => this.loadWorksheetStream(e, t.name));
	}
	async loadWorksheetStream(e, t) {
		let n = this.ensureWorksheetPullClient(), r = [], i = {
			rows: 0,
			cells: 0,
			ownedUtf8Bytes: 0
		}, a, o;
		try {
			for await (let s of n.stream(e, t)) {
				if (s.kind === "rows") {
					let e = Ke(i, He(s.rows));
					We(e, "get-worksheet", void 0, s.usage), r.push(...s.rows), i = e;
					continue;
				}
				let e = s.worksheet;
				e.rows = e.parseError ? [] : r;
				let t = Ye(e, e.parseError ? {
					rows: 0,
					cells: 0,
					ownedUtf8Bytes: 0
				} : i);
				We(t, "get-worksheet", void 0, s.usage), Ve(t.jsonBytes, "get-worksheet", void 0, s.usage);
				let n = Be(this.retainedSheetUsage ?? {
					rows: 0,
					cells: 0,
					ownedUtf8Bytes: 0,
					jsonBytes: 0
				}, t);
				qe(n, "get-worksheet", void 0, s.usage), a = e, o = n;
			}
			if (!a || !o) throw Error(`XLSX worksheet ${e} did not produce a terminal model`);
			return this.retainedSheetUsage = o, this.sheetCache.set(e, a), a;
		} catch (e) {
			throw e instanceof te && (this.resourceFailure ??= e), e;
		}
	}
	ensureWorksheetPullClient() {
		if (this.worksheetPullClient) return this.worksheetPullClient;
		if (!this.parsedWorkbook) throw Error("Workbook not loaded");
		return this.worksheetPullClient = new Je({
			generation: this.generation || 1,
			transport: this.bridge.transport(Ge),
			sharedStrings: this.parsedWorkbook.sharedStrings,
			timeoutMs: this.workerTimeoutMs,
			open: async (e, t, n, r) => {
				await this.bridge.request((r) => ({
					type: "openSheetSession",
					id: r,
					sheetIndex: e,
					sheetName: t,
					...n
				}), void 0, { timeoutMs: r });
			}
		}), this.worksheetPullClient;
	}
	runArchiveOperation(e) {
		let t = async () => {
			this.assertResourceHealthy();
			try {
				return await e();
			} catch (e) {
				throw e instanceof te && (this.resourceFailure ??= e), e;
			}
		}, n = (this.archiveOperationTail ?? Promise.resolve()).then(t, t);
		return this.archiveOperationTail = n.then(() => void 0, () => void 0), n;
	}
	async getImage(e, t) {
		this.assertResourceHealthy();
		let n = this.queuedImageLoads?.get(e);
		if (n) return n;
		let r = this.runArchiveOperation(() => this.getImageWithinArchiveOperation(e, t));
		return this.queuedImageLoads ??= /* @__PURE__ */ new Map(), this.queuedImageLoads.set(e, r), r.finally(() => {
			this.queuedImageLoads.get(e) === r && this.queuedImageLoads.delete(e);
		}).catch(() => void 0), r;
	}
	getImageWithinArchiveOperation(e, t) {
		return this.rawParts.get(e, t, () => this.requestImage(e, t));
	}
	requestImage(e, t) {
		return this.bridge.request((t) => ({
			type: "extractImage",
			id: t,
			path: e
		})).then((e) => {
			let n = e.bytes;
			return new Blob([n], { type: t });
		});
	}
	async toMarkdown() {
		return this.assertResourceHealthy(), (await this.runArchiveOperation(() => this.bridge.request((e) => ({
			type: "toMarkdown",
			id: e
		})))).markdown;
	}
	async resolveValidationList(e, t) {
		if (this.assertResourceHealthy(), !this.parsedWorkbook) throw Error("Workbook not loaded");
		let n = ga(t);
		if (n.kind !== "range") return _a(n, () => null);
		let r = e;
		if (n.sheet) {
			let e = this.sheetNames.findIndex((e) => e.toLowerCase() === n.sheet?.toLowerCase());
			if (e < 0) return {
				kind: "formula",
				formula: t ?? ""
			};
			r = e;
		}
		let i = await this.getWorksheet(r), a = this.parsedWorkbook.styles, o = /* @__PURE__ */ new Map();
		for (let e of i.rows) for (let t of e.cells) o.set(`${t.row}:${t.col}`, t);
		return _a(n, (e, t) => {
			let n = o.get(`${e}:${t}`);
			return n ? Wt(n, a, null, i.date1904) : null;
		});
	}
	cellText(e, t) {
		return this.parsedWorkbook ? Wt(t, this.parsedWorkbook.styles, null, e.date1904) : "";
	}
	async renderViewport(e, t, n, r = {}) {
		if (this.assertResourceHealthy(), this._mode === "worker") throw Error("renderViewport(canvas) is unavailable in mode: 'worker'; use renderViewportToBitmap() and paint it via an ImageBitmapRenderingContext");
		if (!this.parsedWorkbook) throw Error("Workbook not loaded");
		let i = this.parsedWorkbook.styles, a = Ca(r), { sizeOverrides: o, ...s } = a.opts;
		return this.withWorksheetArchiveOperation(t, (t) => {
			let r = a.worksheet ?? ba(t, o);
			return r !== t && hi(t, r), a.layoutMetrics && ir.forWorksheet(r, a.layoutMetrics.maximumDigitWidth), ua({
				ws: r,
				styles: i,
				math: this.math
			}, e, n, {
				...s,
				fetchImage: this._fetchImage
			});
		});
	}
	async renderViewportToBitmap(e, t, n) {
		this.assertResourceHealthy();
		let r = Ca(n), i = {
			...r.opts,
			dpr: n.dpr ?? L()
		};
		if (this._mode === "worker") {
			if (!Number.isInteger(e) || e < 0 || e >= this.sheetCount) throw Error(`Sheet index ${e} out of range (count: ${this.sheetCount})`);
			return (await this.withWorksheetArchiveOperation(e, () => this.bridge.request((n) => ({
				type: "renderViewport",
				id: n,
				sheetIndex: e,
				viewport: t,
				opts: i,
				layoutMetrics: r.layoutMetrics,
				viewProjection: r.projection
			})))).bitmap;
		}
		let a = new OffscreenCanvas(1, 1);
		return await this.renderViewport(a, e, t, i), a.transferToImageBitmap();
	}
	[Ta](e) {
		this._mode === "worker" && this.bridge.post({
			type: "releaseViewProjection",
			projectionId: e
		});
	}
	withWorksheetArchiveOperation(e, t) {
		let n = this.sheetCache.get(e);
		if (n) return this.runArchiveOperation(() => t(n));
		let r = this.sheetLoads.get(e);
		if (r) return this.runArchiveOperation(async () => t(await r));
		if (!this.parsedWorkbook) return Promise.reject(/* @__PURE__ */ Error("Workbook not loaded"));
		let i = this.parsedWorkbook.workbook.sheets[e];
		if (!i) return Promise.reject(/* @__PURE__ */ Error(`Sheet index ${e} out of range`));
		let a, o, s = new Promise((e, t) => {
			a = e, o = t;
		});
		return s.catch(() => void 0), this.sheetLoads.set(e, s), this.runArchiveOperation(async () => {
			try {
				let n = await this.loadWorksheetStream(e, i.name);
				return a(n), await t(n);
			} catch (e) {
				throw o(e), e;
			} finally {
				this.sheetLoads.get(e) === s && this.sheetLoads.delete(e);
			}
		});
	}
	destroy() {
		this.generation = (this.generation ?? 1) + 1, this.worksheetPullClient?.cancelAll("closed").catch(() => void 0), this.worksheetPullClient = null, this.bridge.terminate(), this.parsedWorkbook = null, this.sheetCache.clear(), this.sheetLoads.clear(), this.fontsDestroyed = !0;
		for (let e of this.retainedFontSets.values()) e.faces && Me(e.faces);
		this.retainedFontSets.clear(), this.googleFontNames = [], B(this._fetchImage), c(this._fetchImage), this.rawParts.clear(), this.queuedImageLoads?.clear();
	}
	assertResourceHealthy() {
		if (this.resourceFailure) throw this.resourceFailure;
	}
};
//#endregion
//#region packages/xlsx/src/data-validation.ts
function Da(e, t, n) {
	if (!e) return !1;
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let [e, i] = r.split(":"), a = Jn(e);
		if (!a) continue;
		if (!i) {
			if (a.row === t && a.col === n) return !0;
			continue;
		}
		let o = Jn(i);
		if (!o) continue;
		let s = Math.min(a.row, o.row), c = Math.max(a.row, o.row), l = Math.min(a.col, o.col), u = Math.max(a.col, o.col);
		if (t >= s && t <= c && n >= l && n <= u) return !0;
	}
	return !1;
}
function Oa(e, t, n) {
	if (!e) return null;
	for (let r of e) if (r.validationType === "list" && Da(r.sqref, t, n)) return r;
	return null;
}
//#endregion
//#region packages/xlsx/src/find.ts
var ka = class {
	_matches = [];
	_active = -1;
	_generation = 0;
	constructor(e, t, n) {
		this._sheetCount = e, this._sheetName = t, this._collectSheetCells = n;
	}
	invalidate() {
		this._generation++, this._matches = [], this._active = -1;
	}
	sheetHighlights(e) {
		let t = [];
		for (let n = 0; n < this._matches.length; n++) {
			let r = this._matches[n];
			r.sheet === e && t.push({
				row: r.row,
				col: r.col,
				active: n === this._active
			});
		}
		return t;
	}
	activeLocation() {
		return this._locationAt(this._active);
	}
	_locationAt(e) {
		let t = this._matches[e];
		return t ? {
			sheet: t.sheet,
			sheetName: t.sheetName,
			ref: Yn(t.row, t.col),
			row: t.row,
			col: t.col
		} : null;
	}
	matches() {
		return this._matches.map((e, t) => {
			let n = this._locationAt(t);
			return {
				matchIndex: t,
				text: e.text,
				location: n
			};
		});
	}
	async find(e, t = {}) {
		let n = ++this._generation;
		if (e.length === 0) return this._matches = [], this._active = -1, [];
		let r = this._sheetCount(), i = [];
		for (let a = 0; a < r; a++) {
			let r;
			try {
				r = await this._collectSheetCells(a);
			} catch (e) {
				if (n !== this._generation) return [];
				throw e;
			}
			if (n !== this._generation) return [];
			let o = this._sheetName(a);
			for (let n of r) {
				let r = Oe(Se([{ text: n.text }]), e, t);
				for (let e of r) {
					let t = e.slices[0], r = n.text.slice(t.start, t.end);
					i.push({
						sheet: a,
						sheetName: o,
						row: n.row,
						col: n.col,
						text: r
					});
				}
			}
		}
		return n === this._generation ? (this._matches = i, this._active = -1, this.matches()) : [];
	}
	next() {
		return this._active = Ee(this._active, this._matches.length), this._activePublic();
	}
	prev() {
		return this._active = _e(this._active, this._matches.length), this._activePublic();
	}
	_activePublic() {
		let e = this._locationAt(this._active);
		return e ? {
			matchIndex: this._active,
			text: this._matches[this._active].text,
			location: e
		} : null;
	}
};
function Aa(e) {
	let { cell: t, popup: n, viewport: r, rtl: i } = e, a = t.x + t.w + 8, o = t.x - 8 - n.w, s = a + n.w <= r.w, c = o >= 0, l;
	l = i ? c ? o : s ? a : o : s ? a : c ? o : a, l = Math.max(0, Math.min(l, r.w - n.w));
	let u = t.y;
	return u = Math.max(0, Math.min(u, r.h - n.h)), {
		left: l,
		top: u
	};
}
function ja(e) {
	return e > 0 ? (e + 1) * 19 : 0;
}
function Ma(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = 0, a = 0;
	for (let t of e) t.level > 0 && n.set(t.index, t.level), t.collapsed && r.set(t.index, !0), t.index > i && (i = t.index), t.level > a && (a = t.level);
	let o = i, s = [];
	if (a === 0) return {
		maxLevel: 0,
		groups: s
	};
	let c = (e) => n.get(e) ?? 0;
	for (let e = 1; e <= a; e++) {
		let n = null;
		for (let i = 1; i <= o + 1; i++) c(i) >= e ? n ? n.end = i : n = {
			start: i,
			end: i
		} : n &&= (s.push(Na(e, n, t, r, c)), null);
		n && s.push(Na(e, n, t, r, c));
	}
	return {
		maxLevel: a,
		groups: s
	};
}
function Na(e, t, n, r, i) {
	let a = null;
	if (n) {
		let n = t.end + 1;
		n >= 1 && i(n) < e && (a = n);
	} else {
		let n = t.start - 1;
		n >= 1 && i(n) < e && (a = n);
	}
	let o = a != null && (r.get(a) ?? !1);
	return {
		level: e,
		start: t.start,
		end: t.end,
		summary: a,
		collapsed: o
	};
}
function Pa(e, t) {
	let n = !e.collapsed, r = /* @__PURE__ */ new Map();
	for (let e of t) r.set(e.index, e);
	let i = [], a = [];
	if (n) for (let t = e.start; t <= e.end; t++) i.push(t);
	else {
		let n = /* @__PURE__ */ new Set();
		for (let r of t) r.index >= e.start && r.index <= e.end && r.collapsed && n.add(r.index);
		for (let t = e.start; t <= e.end; t++) Fa(t, e, r, n) || a.push(t);
	}
	return {
		hide: i,
		show: a,
		nowCollapsed: n
	};
}
function Fa(e, t, n, r) {
	let i = n.get(e)?.level ?? 0;
	if (i <= t.level) return !1;
	for (let e of r) {
		let r = n.get(e)?.level ?? 0;
		if (!(r >= i) && !(r < t.level)) return !0;
	}
	return !1;
}
function Ia(e, t) {
	let n = [], r = [];
	for (let i of e) i.level >= t ? n.push(i.index) : r.push(i.index);
	return {
		hide: n,
		show: r
	};
}
function La(e) {
	let t = [];
	for (let n of e.rows) {
		let e = n.outlineLevel ?? 0, r = n.collapsed ?? !1;
		e === 0 && !r || t.push({
			index: n.index,
			level: e,
			collapsed: r,
			hidden: n.hidden ?? !1
		});
	}
	return t;
}
function Ra(e) {
	let t = e.colOutlineLevels ?? {}, n = e.colCollapsed ?? {}, r = e.colHidden ?? {}, i = /* @__PURE__ */ new Set();
	for (let e of Object.keys(t)) i.add(Number(e));
	for (let e of Object.keys(n)) i.add(Number(e));
	let a = [];
	for (let e of [...i].sort((e, t) => e - t)) a.push({
		index: e,
		level: t[e] ?? 0,
		collapsed: n[e] ?? !1,
		hidden: r[e] ?? !1
	});
	return a;
}
function za(e, t) {
	let n = e.outlinePr;
	return n ? t === "row" ? n.summaryBelow : n.summaryRight : !0;
}
//#endregion
//#region packages/xlsx/src/internal/sheet-viewer-runtime.ts
var Ba = class {
	owner = new he("SheetAcquisition");
	get current() {
		return this.owner.current;
	}
	async replace(e, t) {
		return await this.owner.replace(e, t);
	}
	install(e, t = !0) {
		this.owner.install(e, t);
	}
	destroy() {
		this.owner.close();
	}
};
function Va(e) {
	return {
		...e,
		rows: e.rows.map((e) => ({ ...e })),
		rowHeights: { ...e.rowHeights },
		colWidths: { ...e.colWidths },
		colCollapsed: e.colCollapsed ? { ...e.colCollapsed } : void 0
	};
}
var Ha = class {
	offsetX = 0;
	offsetY = 0;
	contentWidth = 0;
	contentHeight = 0;
	viewportWidth = 0;
	viewportHeight = 0;
	constructor(e) {
		this.scaleValue = e;
	}
	get x() {
		return this.offsetX;
	}
	get y() {
		return this.offsetY;
	}
	get scale() {
		return this.scaleValue;
	}
	get maxX() {
		return Math.max(0, this.contentWidth - this.viewportWidth);
	}
	get maxY() {
		return Math.max(0, this.contentHeight - this.viewportHeight);
	}
	setScale(e) {
		this.scaleValue = e;
	}
	setExtent(e, t) {
		this.contentWidth = Math.max(0, e), this.contentHeight = Math.max(0, t), this.setOffset(this.offsetX, this.offsetY);
	}
	ensureExtent(e, t) {
		this.contentWidth = Math.max(this.contentWidth, Math.max(0, e)), this.contentHeight = Math.max(this.contentHeight, Math.max(0, t));
	}
	setViewportSize(e, t) {
		this.viewportWidth = Math.max(0, e), this.viewportHeight = Math.max(0, t), this.setOffset(this.offsetX, this.offsetY);
	}
	setOffset(e, t) {
		this.offsetX = Math.min(this.maxX, Math.max(0, e)), this.offsetY = Math.min(this.maxY, Math.max(0, t));
	}
	adoptNativeOffset(e, t) {
		this.offsetX = Math.max(0, e), this.offsetY = Math.max(0, t);
	}
	reset() {
		this.offsetX = 0, this.offsetY = 0;
	}
}, Ua = class {
	animationFrame = null;
	activeRender = !1;
	pendingRender = null;
	staticDispatcher;
	frameScheduler;
	generation = 0;
	destroyed = !1;
	constructor(e, t = !1, n) {
		let r = n ?? globalThis;
		this.frameScheduler = typeof r.requestAnimationFrame == "function" && typeof r.cancelAnimationFrame == "function" ? {
			requestAnimationFrame: (e) => r.requestAnimationFrame(e),
			cancelAnimationFrame: (e) => r.cancelAnimationFrame(e)
		} : null, this.staticDispatcher = e ? new xe(e, t) : null;
	}
	begin() {
		return this.staticDispatcher ? this.staticDispatcher.begin() : ++this.generation;
	}
	isCurrent(e) {
		return this.staticDispatcher ? this.staticDispatcher.isCurrent(e) : !this.destroyed && e === this.generation;
	}
	commitBitmap(e, t, n, r) {
		if (!this.isCurrent(e)) return t.close(), !1;
		if (!this.staticDispatcher) throw t.close(), Error("SheetRenderDispatcher is not configured for worker bitmap rendering");
		return this.staticDispatcher.commitBitmap(e, t, {
			cssWidth: n,
			cssHeight: r
		});
	}
	schedule(e) {
		if (!this.destroyed) {
			if (this.pendingRender = e, this.activeRender) {
				this.begin();
				return;
			}
			this.animationFrame === null && this.queuePendingRender();
		}
	}
	queuePendingRender() {
		if (!this.frameScheduler) {
			this.startPendingRender();
			return;
		}
		this.animationFrame = this.frameScheduler.requestAnimationFrame(() => {
			this.animationFrame = null, this.startPendingRender();
		});
	}
	startPendingRender() {
		if (this.destroyed || this.activeRender) return;
		let e = this.pendingRender;
		if (this.pendingRender = null, !e) return;
		this.activeRender = !0;
		let t;
		try {
			t = e();
		} catch {
			t = void 0;
		}
		Promise.resolve(t).catch(() => void 0).finally(() => {
			this.activeRender = !1, !this.destroyed && this.pendingRender && this.queuePendingRender();
		});
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.pendingRender = null, this.animationFrame !== null && this.frameScheduler && (this.frameScheduler.cancelAnimationFrame(this.animationFrame), this.animationFrame = null), this.staticDispatcher?.destroy(), this.generation++);
	}
}, Wa = class {
	anchorCell = null;
	activeCell = null;
	selectionMode = "cells";
	dragActive = !1;
	get anchor() {
		return this.anchorCell ? { ...this.anchorCell } : null;
	}
	get active() {
		return this.activeCell ? { ...this.activeCell } : null;
	}
	get mode() {
		return this.selectionMode;
	}
	get dragging() {
		return this.dragActive;
	}
	setAnchor(e) {
		this.anchorCell = e ? { ...e } : null;
	}
	setActive(e) {
		this.activeCell = e ? { ...e } : null;
	}
	setMode(e) {
		this.selectionMode = e;
	}
	setDragging(e) {
		this.dragActive = e;
	}
	reset() {
		this.anchorCell = null, this.activeCell = null, this.selectionMode = "cells", this.dragActive = !1;
	}
	select(e, t = "cells") {
		this.anchorCell = { ...e }, this.activeCell = { ...e }, this.selectionMode = t;
	}
	extend(e) {
		this.anchorCell ||= { ...e }, this.activeCell = { ...e };
	}
	snapshot() {
		return !this.anchorCell || !this.activeCell ? null : {
			anchor: { ...this.anchorCell },
			active: { ...this.activeCell },
			mode: this.selectionMode
		};
	}
	headerHighlight() {
		if (!this.anchorCell || !this.activeCell) return {
			selectedRowRange: null,
			selectedColRange: null
		};
		let e = Math.min(this.anchorCell.row, this.activeCell.row), t = Math.max(this.anchorCell.row, this.activeCell.row), n = Math.min(this.anchorCell.col, this.activeCell.col), r = Math.max(this.anchorCell.col, this.activeCell.col), i = 2 ** 53 - 1;
		switch (this.selectionMode) {
			case "cells": return {
				selectedRowRange: {
					start: e,
					end: t,
					strong: !1
				},
				selectedColRange: {
					start: n,
					end: r,
					strong: !1
				}
			};
			case "rows": return {
				selectedRowRange: {
					start: e,
					end: t,
					strong: !0
				},
				selectedColRange: {
					start: 1,
					end: i,
					strong: !1
				}
			};
			case "cols": return {
				selectedRowRange: {
					start: 1,
					end: i,
					strong: !1
				},
				selectedColRange: {
					start: n,
					end: r,
					strong: !0
				}
			};
			case "all": return {
				selectedRowRange: {
					start: 1,
					end: i,
					strong: !0
				},
				selectedColRange: {
					start: 1,
					end: i,
					strong: !0
				}
			};
		}
	}
}, Ga = class {
	cleanups = [];
	ownerDocument;
	ownerWindow;
	constructor(e, t, n) {
		this.canvas = e, this.area = t, this.input = n, this.ownerDocument = n.ownerDocument ?? document, this.ownerWindow = this.ownerDocument.defaultView;
	}
	on(e, t, n) {
		this.input.addEventListener(e, t, n);
		let r = () => this.input.removeEventListener(e, t, n);
		return this.cleanups.push(r), r;
	}
	get viewportSize() {
		return {
			width: this.input.clientWidth,
			height: this.input.clientHeight
		};
	}
	get dpr() {
		return this.ownerWindow?.devicePixelRatio ?? 1;
	}
	localPoint(e, t) {
		let n = this.area.getBoundingClientRect();
		return {
			x: e - n.left,
			y: t - n.top
		};
	}
	onDocumentKeydown(e) {
		this.ownerDocument.addEventListener("keydown", e);
		let t = () => this.ownerDocument.removeEventListener("keydown", e);
		return this.cleanups.push(t), t;
	}
	sizeCanvas(e, t, n) {
		let r = this.dpr;
		return e.width = Math.round(t * r), e.height = Math.round(n * r), e.style.width = `${t}px`, e.style.height = `${n}px`, r;
	}
	destroy() {
		for (let e of this.cleanups.splice(0)) e();
	}
}, Ka = class {
	selection;
	find;
	comment;
	validation;
	constructor(e, t, n, r) {
		let i = e.ownerDocument ?? document;
		this.selection = i.createElement("div"), this.selection.style.cssText = "position:absolute;top:0;left:0;z-index:1;pointer-events:none;overflow:hidden;width:100%;height:100%;", this.find = i.createElement("div"), this.find.style.cssText = "position:absolute;top:0;left:0;z-index:1;pointer-events:none;overflow:hidden;width:100%;height:100%;", this.comment = i.createElement("div"), this.comment.style.cssText = `position:absolute;z-index:3;pointer-events:none;display:none;max-width:${r.commentMaxWidth}px;max-height:${r.commentMaxHeight}px;overflow:hidden;box-sizing:border-box;padding:6px 8px;background:#fffbcc;border:1px solid #b8b8a0;box-shadow:1px 2px 5px rgba(0,0,0,0.25);font:12px/1.4 sans-serif;color:#222;white-space:pre-wrap;word-break:break-word;`, this.validation = i.createElement("div"), this.validation.setAttribute("data-xlsx-validation-panel", ""), this.validation.style.cssText = `position:absolute;z-index:4;pointer-events:auto;display:none;min-width:80px;max-width:${r.validationMaxWidth}px;max-height:${r.validationMaxHeight}px;overflow-y:auto;box-sizing:border-box;background:#fff;border:1px solid #7f7f7f;box-shadow:1px 2px 5px rgba(0,0,0,0.25);font:12px/1.4 sans-serif;color:#222;`, this.validation.addEventListener("wheel", (e) => e.stopPropagation()), e.appendChild(t), e.appendChild(this.selection), e.appendChild(this.find), e.appendChild(n), e.appendChild(this.comment), e.appendChild(this.validation);
	}
	clearSelection() {
		this.selection.textContent = "";
	}
	appendSelection(e) {
		this.selection.appendChild(e);
	}
	clearFind() {
		this.find.textContent = "";
	}
	appendFind(e) {
		this.find.appendChild(e);
	}
	hideComment() {
		this.comment.style.display = "none";
	}
	showComment(e, t) {
		this.comment.style.left = `${e}px`, this.comment.style.top = `${t}px`, this.comment.style.display = "block";
	}
	hideValidation() {
		this.validation.style.display = "none";
	}
	showValidation(e, t) {
		this.validation.style.left = `${e}px`, this.validation.style.top = `${t}px`, this.validation.style.display = "block";
	}
}, qa = Symbol("XlsxViewer.borrowedWorkbook"), Ja = 150, Ya = 280, Xa = 200, Za = 240, Qa = 200, $a = 30, eo = 50, to = 1, no = 1, ro = .45, io = "data-xlsx-viewer-styles", ao = ".xlsx-tab-strip::-webkit-scrollbar{display:none}.xlsx-tab-nav{background:transparent;transition:background 0.1s;}.xlsx-tab-nav:hover{background:rgba(0,0,0,0.08);}.xlsx-zoom-slider{-webkit-appearance:none;appearance:none;background:transparent;height:15px;margin:0;}.xlsx-zoom-slider::-webkit-slider-runnable-track{height:4px;background:#c4c4c4;border-radius:2px;}.xlsx-zoom-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:12px;height:12px;margin-top:-4px;border-radius:50%;background:#808080;cursor:pointer;}.xlsx-zoom-slider:hover::-webkit-slider-thumb{background:#5f5f5f;}.xlsx-zoom-slider::-moz-range-track{height:4px;background:#c4c4c4;border-radius:2px;}.xlsx-zoom-slider::-moz-range-thumb{width:12px;height:12px;border:none;border-radius:50%;background:#808080;cursor:pointer;}";
function oo(e) {
	if (!e.head || e.head.querySelector(`style[${io}]`)) return;
	let t = e.createElement("style");
	t.setAttribute(io, ""), t.textContent = ao, e.head.appendChild(t);
}
var so = "#1a73e8", co = 4, lo = 5;
function uo(e, t, n, r) {
	for (let { index: i, edge: a } of t) if (!(a <= r) && Math.abs(e - a) <= n) return i;
	return null;
}
function fo(e) {
	return {
		border: `2px solid ${e}`,
		background: `color-mix(in srgb, ${e} 8%, transparent)`
	};
}
var po = "color-mix(in srgb, #ffb300 8%, transparent)", mo = "color-mix(in srgb, #fb8c00 8%, transparent)";
function ho(e, t = {}) {
	let n = e ? "#fb8c00" : "#ffb300", r = e ? t.active : t.match, i = r ?? (e ? mo : po);
	return {
		border: `2px solid ${r ?? n}`,
		background: i
	};
}
var go = class {
	hostDocument;
	hostWindow;
	acquisition = new Ba();
	viewport;
	renderDispatcher;
	wrapper;
	canvas;
	gridRegion;
	rowGutter;
	colGutter;
	cornerGutter;
	gutter = {
		w: 0,
		h: 0
	};
	rowOutline = null;
	colOutline = null;
	rowOutlineBands = [];
	colOutlineBands = [];
	stashedRowHeights = /* @__PURE__ */ new Map();
	stashedColWidths = /* @__PURE__ */ new Map();
	sizeOverrideStore = /* @__PURE__ */ new Map();
	projectionId = no++;
	canvasArea;
	scrollHost;
	spacer;
	surface;
	overlayHost;
	tabBar;
	tabStrip;
	tabList;
	navPrev;
	navNext;
	tabs = [];
	tabColors = [];
	zoomSlider = null;
	zoomLabel = null;
	currentSheet = 0;
	sheetRequestGeneration = 0;
	fontBindingGeneration = 0;
	fontBinding = null;
	_hiddenSheetMode;
	currentWorksheet = null;
	sheetViews = /* @__PURE__ */ new Map();
	opts;
	_mountKind;
	_mode;
	_borrowed = !1;
	preparedWorkbook = null;
	_destroyed = !1;
	resizeObserver = null;
	_lastViewportNotification = null;
	get anchorCell() {
		return this.selectionController.anchor;
	}
	set anchorCell(e) {
		this.selectionController.setAnchor(e);
	}
	get activeCell() {
		return this.selectionController.active;
	}
	set activeCell(e) {
		this.selectionController.setActive(e);
	}
	get selectionMode() {
		return this.selectionController.mode;
	}
	set selectionMode(e) {
		this.selectionController.setMode(e);
	}
	get isSelecting() {
		return this.selectionController.dragging;
	}
	set isSelecting(e) {
		this.selectionController.setDragging(e);
	}
	_pendingZoomAnchor = null;
	selectionController = new Wa();
	selectionOverlay;
	findOverlay;
	_find;
	keydownHandler = null;
	pendingTap = null;
	pendingClick = null;
	resizeDrag = null;
	commentPopup;
	commentMap = /* @__PURE__ */ new Map();
	hyperlinkMap = /* @__PURE__ */ new Map();
	commentPopupKey = null;
	commentPopupTimer = null;
	validationPanel;
	validationPanelKey = null;
	validationRequestGeneration = 0;
	validationArrowRect = null;
	validationOutsideHandler = null;
	constructor(e, t = {}, n) {
		this.hostDocument = (n.kind === "sheet" ? n.canvas.ownerDocument : e.ownerDocument) ?? document;
		let r = this.hostDocument.defaultView;
		if (!r) throw Error("XlsxViewer requires a document with an active Window");
		this.hostWindow = r, this.opts = t, this._mountKind = n.kind;
		let i = t[qa];
		this._borrowed = i !== void 0, this._mode = n.kind === "sheet" ? n.mode : we("XlsxViewer", t.mode, i), this._hiddenSheetMode = t.hiddenSheetMode ?? "show", this.viewport = new Ha(t.cellScale ?? 1), this.wrapper = this.hostDocument.createElement("div"), this.wrapper.style.cssText = `position:relative;width:100%;height:100%;background:${n.kind === "composite" ? "#fff" : "transparent"};box-sizing:border-box;font-family:sans-serif;display:flex;flex-direction:column;`, this.gridRegion = this.hostDocument.createElement("div"), this.gridRegion.style.cssText = "position:relative;flex:1;min-height:0;overflow:hidden;";
		let a = "position:absolute;top:0;left:0;z-index:3;display:none;background:#f5f5f5;";
		if (this.cornerGutter = this.hostDocument.createElement("canvas"), this.cornerGutter.style.cssText = a, this.cornerGutter.setAttribute("data-xlsx-outline", "corner"), this.colGutter = this.hostDocument.createElement("canvas"), this.colGutter.style.cssText = a, this.colGutter.setAttribute("data-xlsx-outline", "col"), this.rowGutter = this.hostDocument.createElement("canvas"), this.rowGutter.style.cssText = a, this.rowGutter.setAttribute("data-xlsx-outline", "row"), this.canvasArea = this.hostDocument.createElement("div"), this.canvasArea.style.cssText = "position:absolute;inset:0;overflow:hidden;", this.canvas = n.kind === "sheet" ? n.canvas : this.hostDocument.createElement("canvas"), this.canvas.style.cssText = "position:absolute;top:0;left:0;z-index:0;display:block;", this.renderDispatcher = new Ua(this.canvas, this._mode === "worker", this.hostWindow), this.scrollHost = this.hostDocument.createElement("div"), this.scrollHost.setAttribute("data-xlsx-viewport-input", n.kind), this.scrollHost.style.cssText = `position:absolute;inset:0;overflow:${n.kind === "composite" ? "auto" : "clip"};z-index:2;background:transparent;`, this.spacer = this.hostDocument.createElement("div"), this.spacer.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;", n.kind === "composite" && this.scrollHost.appendChild(this.spacer), this.surface = new Ga(this.canvas, this.canvasArea, this.scrollHost), this.overlayHost = new Ka(this.canvasArea, this.canvas, this.scrollHost, {
			commentMaxWidth: Ya,
			commentMaxHeight: Xa,
			validationMaxWidth: Za,
			validationMaxHeight: Qa
		}), this.selectionOverlay = this.overlayHost.selection, this.findOverlay = this.overlayHost.find, this.commentPopup = this.overlayHost.comment, this.validationPanel = this.overlayHost.validation, oo(this.hostDocument), n.kind === "composite") {
			this.tabBar = this.hostDocument.createElement("div"), this.tabBar.style.cssText = `display:flex;align-items:flex-end;height:${$a}px;flex-shrink:0;background:#f0f0f0;border-top:1px solid #c8ccd0;`, this.navPrev = this.makeNavButton("◀", "Scroll tabs left", () => this.scrollTabs(-1)), this.navNext = this.makeNavButton("▶", "Scroll tabs right", () => this.scrollTabs(1)), this.navPrev.dataset.xlsxTabNav = "prev", this.navNext.dataset.xlsxTabNav = "next";
			let e = this.hostDocument.createElement("div");
			e.style.cssText = `display:flex;flex-shrink:0;width:${eo}px;height:100%;`, e.appendChild(this.navPrev), e.appendChild(this.navNext), this.tabStrip = this.hostDocument.createElement("div"), this.tabStrip.style.cssText = `position:relative;display:block;flex:1;min-width:0;height:100%;margin-left:${to}px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;`, this.tabStrip.classList.add("xlsx-tab-strip"), this.tabStrip.addEventListener("scroll", () => this.updateNavButtons()), this.tabList = this.hostDocument.createElement("div"), this.tabList.style.cssText = `display:flex;align-items:flex-end;height:100%;gap:${to}px;box-sizing:border-box;`, this.tabList.style.width = "max-content", this.tabList.style.minWidth = "100%", this.tabStrip.appendChild(this.tabList), this.tabBar.appendChild(e), this.tabBar.appendChild(this.tabStrip), this.opts.showZoomSlider !== !1 && this.tabBar.appendChild(this.buildZoomControl());
		}
		this.gridRegion.appendChild(this.canvasArea), this.wrapper.appendChild(this.gridRegion), n.kind === "composite" && this.wrapper.appendChild(this.tabBar), e.appendChild(this.wrapper), this.rowGutter.addEventListener("pointerdown", (e) => this.onGutterPointerDown(e, "row")), this.colGutter.addEventListener("pointerdown", (e) => this.onGutterPointerDown(e, "col")), n.kind === "composite" && this.surface.on("scroll", () => {
			if (this.pendingTap = null, this.hideCommentPopup(), this.hideValidationPanel(), this.scrollHost.clientWidth > 0) {
				let e = this.scrollHost.scrollLeft, t = this.isRtl ? this.maxScrollLeft - e : e;
				this.viewport.setViewportSize(this.scrollHost.clientWidth, this.scrollHost.clientHeight), this.viewport.setOffset(t, this.scrollHost.scrollTop);
			}
			this.emitViewportChange(), this.scheduleRender(), this.updateSelectionOverlay(), this.updateFindOverlay();
		});
		let o = new this.hostWindow.ResizeObserver(() => {
			let e = {
				x: this.viewport.x,
				y: this.viewport.y
			};
			this.viewport.setViewportSize(this.scrollHost.clientWidth, this.scrollHost.clientHeight), this.setViewportLeft(e.x), this.viewportTop = e.y, this.reanchorHorizontalScroll(), this.layoutGutters(), this.scheduleRender(), this.updateSelectionOverlay(), this.updateFindOverlay(), this.updateNavButtons();
		});
		o.observe(this.gridRegion), this.resizeObserver = o, this.setupSelectionEvents(), this._find = new ka(() => this.sheetCount, (e) => this.wb?.sheetNames[e] ?? "", (e) => this._collectSheetCells(e)), i && (this.acquisition.install(i, !1), this._mountKind === "composite" && this.activateWorkbook(i).catch((e) => this._reportRenderError(e)));
	}
	async _collectSheetCells(e) {
		let t = this.wb;
		if (!t) return [];
		let n = await t.getWorksheet(e), r = [];
		for (let e of n.rows) for (let i of e.cells) {
			let e = t.cellText(n, i);
			e !== "" && r.push({
				row: i.row,
				col: i.col,
				text: e
			});
		}
		return r;
	}
	async load(e) {
		if (this.assertOpen(), this._borrowed) throw Error(`${this._mountKind === "sheet" ? "XlsxSheetViewer" : "XlsxViewer"}.load() is unsupported on a Viewer created by fromWorkbook(); the borrowed workbook is already loaded.`);
		try {
			let t = await this.acquisition.replace(() => Ea.load(e, {
				useGoogleFonts: this.opts.useGoogleFonts,
				maxZipEntryBytes: this.opts.maxZipEntryBytes,
				resourceLimits: this.opts.resourceLimits,
				debug: this.opts.debug,
				onResourceMetrics: this.opts.onResourceMetrics,
				workerTimeoutMs: this.opts.workerTimeoutMs,
				wasmUrl: this.opts.wasmUrl,
				math: this.opts.math,
				mode: this._mode
			}), () => {
				this.sheetRequestGeneration++, this.renderDispatcher.begin(), this._find.invalidate(), this.hideValidationPanel(), this.releaseHostFonts();
			});
			if (!t) return;
			if (this._destroyed) throw this.destroyedError();
			await this.activateWorkbook(t);
		} catch (e) {
			if (this._destroyed) throw this.destroyedError();
			let t = e instanceof Error ? e : Error(String(e));
			if (this.opts.onError) {
				this.opts.onError(t);
				return;
			}
			throw t;
		}
	}
	async activateWorkbook(e, t) {
		this.prepareWorkbook(e) && await this.showSheet(t ?? this._initialSheet());
	}
	async ensureHostFonts(e) {
		if (this.fontBinding?.workbook === e) return !0;
		let t = e[wa];
		if (typeof t != "function") return !0;
		let n = ++this.fontBindingGeneration, r = await t.call(e, this.hostDocument);
		return this._destroyed || n !== this.fontBindingGeneration || this.wb !== e ? (r(), !1) : (this.fontBinding?.release(), this.fontBinding = {
			workbook: e,
			release: r
		}, !0);
	}
	releaseHostFonts() {
		this.fontBindingGeneration++, this.fontBinding?.release(), this.fontBinding = null;
	}
	prepareWorkbook(e) {
		return this._destroyed || this.wb !== e ? !1 : this.preparedWorkbook === e ? !0 : (this._find.invalidate(), this.sizeOverrideStore.clear(), this.sheetViews.clear(), this.buildTabs(), this.preparedWorkbook = e, this.opts.onReady?.(e.sheetNames), !0);
	}
	get workbook() {
		let e = this.acquisition.current;
		if (!e) throw Error("Workbook not loaded");
		return e;
	}
	get wb() {
		return this.acquisition.current;
	}
	set wb(e) {
		e ? this.acquisition.install(e) : this.acquisition.destroy();
	}
	async showSheet(e) {
		let t = ++this.sheetRequestGeneration, n = this.workbook, r;
		try {
			if (!await this.ensureHostFonts(n)) return;
			let t = await n.getWorksheet(e);
			r = this.sheetViews.get(e) ?? Va(t), this.sheetViews.set(e, r);
		} catch (e) {
			if (!this.isCurrentSheetRequest(t, n)) return;
			throw e;
		}
		this.isCurrentSheetRequest(t, n) && (this.currentSheet = e, this.currentWorksheet = r, this.updateFooterDirection(), this.viewportTop = 0, this.selectionController.reset(), this.hideCommentPopup(), this.hideValidationPanel(), this.updateSelectionOverlay(), this.updateTabActive(e), this.buildCommentMap(this.currentWorksheet), this.buildHyperlinkMap(this.currentWorksheet), this.buildOutline(this.currentWorksheet), this.layoutGutters(), this.updateSpacerSize(this.currentWorksheet), this.resetHorizontalScroll(), await this.renderCurrentSheet(), this.isCurrentSheetRequest(t, n) && (this.updateFindOverlay(), this.emitViewportChange(), this.opts.onSheetChange?.(e, this.workbook.sheetNames.length)));
	}
	isCurrentSheetRequest(e, t) {
		return !this._destroyed && e === this.sheetRequestGeneration && this.wb === t;
	}
	buildOutline(e) {
		this.stashedRowHeights.clear(), this.stashedColWidths.clear(), this.rowOutlineBands = La(e), this.colOutlineBands = Ra(e);
		let t = Ma(this.rowOutlineBands, za(e, "row")), n = Ma(this.colOutlineBands, za(e, "col"));
		this.rowOutline = t.maxLevel > 0 ? t : null, this.colOutline = n.maxLevel > 0 ? n : null;
	}
	layoutGutters() {
		let e = this.viewport.scale, t = this.rowOutline ? Math.round(ja(this.rowOutline.maxLevel) * e) : 0, n = this.colOutline ? Math.round(ja(this.colOutline.maxLevel) * e) : 0;
		this.gutter = {
			w: t,
			h: n
		}, t > 0 || n > 0 ? this.colGutter.parentElement || (this.gridRegion.appendChild(this.colGutter), this.gridRegion.appendChild(this.rowGutter), this.gridRegion.appendChild(this.cornerGutter)) : (this.colGutter.remove(), this.rowGutter.remove(), this.cornerGutter.remove()), this.canvasArea.style.left = `${t}px`, this.canvasArea.style.top = `${n}px`;
		let r = (e, t, n, r, i) => {
			if (r <= 0 || i <= 0) {
				e.style.display = "none";
				return;
			}
			e.style.display = "block", e.style.left = `${t}px`, e.style.top = `${n}px`, e.style.width = `${r}px`, e.style.height = `${i}px`;
		}, i = this.gridRegion.clientWidth, a = this.gridRegion.clientHeight;
		r(this.cornerGutter, 0, 0, t, n), r(this.colGutter, t, 0, Math.max(0, i - t), n), r(this.rowGutter, 0, n, t, Math.max(0, a - n));
	}
	renderGutters() {
		this.currentWorksheet && (this.gutter.h > 0 && this.colOutline && this.paintAxisGutter("col"), this.gutter.w > 0 && this.rowOutline && this.paintAxisGutter("row"), (this.gutter.w > 0 || this.gutter.h > 0) && this.paintCornerGutter());
	}
	paintAxisGutter(e) {
		if (!this.currentWorksheet) return;
		let t = this.viewport.scale, n = e === "row", r = n ? this.rowGutter : this.colGutter, i = n ? this.rowOutline : this.colOutline;
		if (!i) return;
		let a = parseFloat(r.style.width) || 0, o = parseFloat(r.style.height) || 0;
		if (a <= 0 || o <= 0) return;
		let s = this.surface.sizeCanvas(r, a, o), c = r.getContext("2d");
		if (!c) return;
		c.setTransform(s, 0, 0, s, 0, 0), c.clearRect(0, 0, a, o), c.fillStyle = "#f5f5f5", c.fillRect(0, 0, a, o);
		let l = 19 * t;
		c.strokeStyle = "#808080", c.lineWidth = 1, c.fillStyle = "#404040";
		for (let e of i.groups) {
			let r = (e.level - 1 + .5) * l, i = n ? this.getCellRect(e.start, 1) : this.getCellRect(1, e.start), a = n ? this.getCellRect(e.end, 1) : this.getCellRect(1, e.end);
			if (!i || !a) continue;
			let o = n ? i.y : this.screenX(i.x, i.w), s = n ? a.y + a.h : this.screenX(a.x, a.w) + a.w, u = Math.min(o, s), d = Math.max(o, s);
			if (!e.collapsed && d - u > 1) {
				if (c.beginPath(), n) {
					c.moveTo(r, u), c.lineTo(r, d);
					let t = e.summary != null && e.summary > e.end ? d : u;
					c.lineTo(r + l / 2, t);
				} else {
					c.moveTo(u, r), c.lineTo(d, r);
					let t = e.summary != null && e.summary > e.end ? d : u;
					c.lineTo(t, r + l / 2);
				}
				c.stroke();
			}
			if (e.summary != null) {
				let i = n ? this.getCellRect(e.summary, 1) : this.getCellRect(1, e.summary);
				if (i) {
					let a = n ? i.y + i.h / 2 : this.screenX(i.x, i.w) + i.w / 2;
					this.drawToggleBox(c, n ? r : a, n ? a : r, e.collapsed, t);
				}
			}
		}
		let u = n ? 22 * t / 2 : 50 * t / 2;
		for (let e = 1; e <= i.maxLevel + 1; e++) {
			let r = (e - .5) * l;
			if (r + l / 2 > (n ? a : o) + .5) break;
			this.drawLevelButton(c, n ? r : u, n ? u : r, String(e), t);
		}
	}
	drawToggleBox(e, t, n, r, i) {
		let a = Math.round(9 * i), o = Math.round(t - a / 2), s = Math.round(n - a / 2);
		e.save(), e.fillStyle = "#ffffff", e.strokeStyle = "#808080", e.lineWidth = 1, e.fillRect(o + .5, s + .5, a, a), e.strokeRect(o + .5, s + .5, a, a), e.strokeStyle = "#404040", e.beginPath(), e.moveTo(o + 2.5, s + a / 2 + .5), e.lineTo(o + a - 1.5, s + a / 2 + .5), r && (e.moveTo(o + a / 2 + .5, s + 2.5), e.lineTo(o + a / 2 + .5, s + a - 1.5)), e.stroke(), e.restore();
	}
	drawLevelButton(e, t, n, r, i) {
		let a = Math.round(11 * i), o = Math.round(t - a / 2), s = Math.round(n - a / 2);
		e.save(), e.font = `${Math.round(9 * i)}px sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#ffffff", e.strokeStyle = "#808080", e.lineWidth = 1, e.fillRect(o + .5, s + .5, a, a), e.strokeRect(o + .5, s + .5, a, a), e.fillStyle = "#404040", e.fillText(r, t, n + .5), e.restore();
	}
	paintCornerGutter() {
		let e = this.cornerGutter, t = parseFloat(e.style.width) || 0, n = parseFloat(e.style.height) || 0;
		if (t <= 0 || n <= 0) return;
		let r = this.surface.sizeCanvas(e, t, n), i = e.getContext("2d");
		i && (i.setTransform(r, 0, 0, r, 0, 0), i.clearRect(0, 0, t, n), i.fillStyle = "#f5f5f5", i.fillRect(0, 0, t, n));
	}
	onGutterPointerDown(e, t) {
		if (!this.currentWorksheet) return;
		let n = t === "row", r = n ? this.rowOutline : this.colOutline;
		if (!r) return;
		let i = (n ? this.rowGutter : this.colGutter).getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = this.viewport.scale, c = 19 * s, l = 7 * s, u = n ? 22 * s / 2 : 50 * s / 2;
		if ((n ? o : a) <= (n ? 22 : 50) * s) {
			for (let i = 1; i <= r.maxLevel + 1; i++) {
				let r = (i - .5) * c, s = n ? r : u, d = n ? u : r;
				if (Math.abs(a - s) <= l && Math.abs(o - d) <= l) {
					e.preventDefault(), this.applyLevelButton(i, t);
					return;
				}
			}
			return;
		}
		for (let i of r.groups) {
			if (i.summary == null) continue;
			let r = (i.level - 1 + .5) * c, s = n ? this.getCellRect(i.summary, 1) : this.getCellRect(1, i.summary);
			if (!s) continue;
			let u = n ? s.y + s.h / 2 : this.screenX(s.x, s.w) + s.w / 2, d = n ? r : u, f = n ? u : r;
			if (Math.abs(a - d) <= l && Math.abs(o - f) <= l) {
				e.preventDefault(), this.applyGroupToggle(i, t);
				return;
			}
		}
	}
	applyGroupToggle(e, t) {
		let n = this.currentWorksheet;
		if (!n) return;
		let { hide: r, show: i, nowCollapsed: a } = Pa(e, t === "row" ? this.rowOutlineBands : this.colOutlineBands);
		for (let e of r) this.setBandHidden(t, e, !0);
		for (let e of i) this.setBandHidden(t, e, !1);
		e.summary != null && this.setBandCollapsed(t, e.summary, a), this.afterOutlineMutation(n);
	}
	applyLevelButton(e, t) {
		let n = this.currentWorksheet;
		if (!n) return;
		let { hide: r, show: i } = Ia(t === "row" ? this.rowOutlineBands : this.colOutlineBands, e);
		for (let e of r) this.setBandHidden(t, e, !0);
		for (let e of i) this.setBandHidden(t, e, !1);
		let a = t === "row" ? this.rowOutline : this.colOutline;
		if (a) for (let n of a.groups) n.summary != null && this.setBandCollapsed(t, n.summary, n.level >= e);
		this.afterOutlineMutation(n);
	}
	setBandHidden(e, t, n) {
		let r = this.currentWorksheet;
		if (r) {
			if (e === "row") if (n) this.stashedRowHeights.has(t) || this.stashedRowHeights.set(t, r.rowHeights[t]), r.rowHeights[t] = 0;
			else if (this.stashedRowHeights.has(t)) {
				let e = this.stashedRowHeights.get(t);
				e === void 0 ? delete r.rowHeights[t] : r.rowHeights[t] = e, this.stashedRowHeights.delete(t);
			} else r.rowHeights[t] === 0 && delete r.rowHeights[t];
			else if (n) this.stashedColWidths.has(t) || this.stashedColWidths.set(t, r.colWidths[t]), r.colWidths[t] = 0;
			else if (this.stashedColWidths.has(t)) {
				let e = this.stashedColWidths.get(t);
				e === void 0 ? delete r.colWidths[t] : r.colWidths[t] = e, this.stashedColWidths.delete(t);
			} else r.colWidths[t] === 0 && delete r.colWidths[t];
			this.recordSizeOverride(e, t);
		}
	}
	recordSizeOverride(e, t) {
		let n = this.currentWorksheet;
		if (!n) return;
		let r = this.sizeOverrideStore.get(this.currentSheet);
		r || (r = {
			rows: /* @__PURE__ */ new Map(),
			cols: /* @__PURE__ */ new Map(),
			revision: 0
		}, this.sizeOverrideStore.set(this.currentSheet, r));
		let i = e === "row" ? r.rows : r.cols, a = e === "row" ? n.rowHeights[t] ?? null : n.colWidths[t] ?? null;
		i.get(t) === a && i.has(t) || (i.set(t, a), r.revision++, r.wire = void 0);
	}
	wireSizeOverrides() {
		let e = this.sizeOverrideStore.get(this.currentSheet);
		if (!(!e || e.rows.size === 0 && e.cols.size === 0)) {
			if (!e.wire) {
				let t = {};
				e.rows.size > 0 && (t.rows = Object.fromEntries(e.rows)), e.cols.size > 0 && (t.cols = Object.fromEntries(e.cols)), e.wire = t;
			}
			return {
				overrides: e.wire,
				revision: e.revision
			};
		}
	}
	setBandCollapsed(e, t, n) {
		let r = this.currentWorksheet;
		if (r) if (e === "row") {
			let e = r.rows.find((e) => e.index === t);
			e && (e.collapsed = n);
		} else r.colCollapsed = r.colCollapsed ?? {}, n ? r.colCollapsed[t] = !0 : delete r.colCollapsed[t];
	}
	afterOutlineMutation(e) {
		ir.invalidate(e), this.buildOutlineLayoutOnly(e), this.updateSpacerSize(e), this.updateSelectionOverlay(), this.scheduleRender();
	}
	buildOutlineLayoutOnly(e) {
		this.rowOutlineBands = La(e), this.colOutlineBands = Ra(e);
		let t = Ma(this.rowOutlineBands, za(e, "row")), n = Ma(this.colOutlineBands, za(e, "col"));
		this.rowOutline = t.maxLevel > 0 ? t : null, this.colOutline = n.maxLevel > 0 ? n : null;
	}
	get isRtl() {
		return this.currentWorksheet?.rightToLeft === !0;
	}
	updateFooterDirection() {
		this._mountKind === "composite" && (this.tabBar.style.flexDirection = this.isRtl ? "row-reverse" : "row", this.tabStrip.style.marginLeft = this.isRtl ? "0" : `${to}px`, this.tabStrip.style.marginRight = this.isRtl ? `${to}px` : "0", this.tabList.style.flexDirection = this.isRtl ? "row-reverse" : "row");
	}
	get maxScrollLeft() {
		return this.syncNativeViewportExtent(), this.viewport.maxX;
	}
	get maxScrollTop() {
		return this.syncNativeViewportExtent(), this.viewport.maxY;
	}
	syncNativeViewportExtent() {
		this._mountKind === "composite" && (this.viewport.setViewportSize(this.scrollHost.clientWidth, this.scrollHost.clientHeight), this.viewport.ensureExtent(this.scrollHost.scrollWidth, this.scrollHost.scrollHeight));
	}
	get viewportTop() {
		return this._mountKind === "composite" && (this.syncNativeViewportExtent(), this.viewport.adoptNativeOffset(this.viewport.x, this.scrollHost.scrollTop)), this.viewport.y;
	}
	set viewportTop(e) {
		this.viewport.setOffset(this.viewport.x, e), this._mountKind === "composite" && (this.scrollHost.scrollTop = this.viewport.y);
	}
	get effectiveScrollLeft() {
		if (this._mountKind === "composite") {
			this.syncNativeViewportExtent();
			let e = this.scrollHost.scrollLeft;
			this.viewport.adoptNativeOffset(this.isRtl ? this.maxScrollLeft - e : e, this.viewport.y);
		}
		return this.viewport.x;
	}
	setViewportLeft(e) {
		this.viewport.setOffset(e, this.viewport.y), this._mountKind === "composite" && (this.scrollHost.scrollLeft = this.isRtl ? Math.max(0, this.maxScrollLeft - this.viewport.x) : this.viewport.x);
	}
	screenX(e, t) {
		return this.isRtl ? hr(e, t, this.canvasArea.clientWidth) : e;
	}
	resetHorizontalScroll() {
		this.viewport.setOffset(0, this.viewport.y), this._mountKind === "composite" && (this.scrollHost.scrollLeft = this.isRtl ? this.maxScrollLeft : 0);
	}
	reanchorHorizontalScroll() {
		if (this._mountKind === "sheet" || !this.isRtl || this.scrollHost.clientWidth === 0) return;
		let e = Math.max(0, this.maxScrollLeft - this.viewport.x);
		Math.abs(this.scrollHost.scrollLeft - e) > 1 && (this.scrollHost.scrollLeft = e);
	}
	get sheetIndex() {
		return this.currentSheet;
	}
	get sheetCount() {
		return this.wb?.sheetCount ?? 0;
	}
	async goToSheet(e) {
		if (this.sheetCount === 0) return;
		let t = this.workbook;
		this.prepareWorkbook(t) && await this.showSheet(Math.max(0, Math.min(e, this.sheetCount - 1)));
	}
	async nextSheet() {
		await this.goToSheet(this._stepSheet(1));
	}
	async prevSheet() {
		await this.goToSheet(this._stepSheet(-1));
	}
	getViewportOffset() {
		return {
			x: Math.max(0, this.effectiveScrollLeft),
			y: Math.max(0, this.viewportTop)
		};
	}
	emitViewportChange() {
		let e = this.opts.onViewportChange;
		if (!e) return;
		let t = this.getViewportOffset(), n = this._lastViewportNotification;
		n && n.x === t.x && n.y === t.y || (this._lastViewportNotification = t, e(t));
	}
	async setViewportOffset(e) {
		if (!Number.isFinite(e.x) || !Number.isFinite(e.y)) throw TypeError("XLSX viewport offsets must be finite numbers");
		let t = Math.min(this.maxScrollLeft, Math.max(0, e.x)), n = Math.min(this.maxScrollTop, Math.max(0, e.y));
		this.setViewportLeft(t), this.viewportTop = n, await this.renderCurrentSheet(), this.updateSelectionOverlay(), this.updateFindOverlay(), this.emitViewportChange();
	}
	async relayout() {
		this.reanchorHorizontalScroll(), this.layoutGutters(), this.currentWorksheet && this.updateSpacerSize(this.currentWorksheet), await this.renderCurrentSheet(), this.updateSelectionOverlay(), this.updateFindOverlay();
	}
	async scrollToCell(e, t = {}) {
		let n = Jn(e);
		!n || !this.currentWorksheet || (this._scrollCellIntoView(n.row, n.col, t.align ?? "nearest"), await this.renderCurrentSheet(), this.updateSelectionOverlay(), this.updateFindOverlay(), this.emitViewportChange());
	}
	_stepSheet(e) {
		return this._hiddenSheetMode === "skip" && this.wb ? Le(this.currentSheet, e, (e) => this.wb.isHidden(e), this.sheetCount) : this.currentSheet + e;
	}
	_initialSheet() {
		return this._hiddenSheetMode === "skip" && this.wb ? Re(0, (e) => this.wb.isHidden(e), this.sheetCount) : 0;
	}
	getCellAt(e, t) {
		if (this._destroyed) return null;
		let n = this.currentWorksheet;
		if (!n) return null;
		let r = this.viewport.scale, i = this.canvasArea.getBoundingClientRect(), a = this.screenX(e - i.left, 0), o = t - i.top, s = Math.round(50 * r), c = Math.round(22 * r);
		if (a < s || o < c) return null;
		let l = a - s, u = o - c;
		return br(n).cellAt(l, u, {
			scrollX: this.effectiveScrollLeft,
			scrollY: this.viewportTop,
			scale: r
		});
	}
	getCellRect(e, t) {
		let n = this.currentWorksheet;
		if (!n) return null;
		let r = this.viewport.scale;
		return br(n).cellRect(e, t, {
			scale: r,
			scrollX: this.effectiveScrollLeft,
			scrollY: this.viewportTop,
			headerWidth: 50,
			headerHeight: 22
		});
	}
	get selection() {
		return this.selectionController.snapshot();
	}
	select(e) {
		let t = parseKoreA1Range(e);
		t && (this.hideValidationPanel(), this.selectionController.select(t.anchor), this.selectionController.extend(t.active), this.updateSelectionOverlay(), this.wb && this.renderCurrentSheet().catch((e) => this._reportRenderError(e)), this.opts.onSelectionChange?.(this.selection));
	}
	getHeaderHit(e, t) {
		let n = this.currentWorksheet;
		if (!n) return null;
		let r = this.viewport.scale, i = this.canvasArea.getBoundingClientRect(), a = this.screenX(e - i.left, 0), o = t - i.top, s = Math.round(50 * r), c = Math.round(22 * r), l = a < s, u = o < c;
		if (!l && !u) return null;
		if (l && u) return { kind: "corner" };
		let d = br(n);
		if (l) {
			let e = o - c;
			if (e < 0) return { kind: "corner" };
			let t = d.rowAt(e, this.viewportTop, r);
			return t === null ? null : {
				kind: "row",
				row: t
			};
		}
		let f = a - s;
		if (f < 0) return { kind: "corner" };
		let p = d.colAt(f, this.effectiveScrollLeft, r);
		return p === null ? null : {
			kind: "col",
			col: p
		};
	}
	getResizeTarget(e, t) {
		let n = this.currentWorksheet;
		if (!n) return null;
		let r = this.viewport.scale, i = this.canvasArea.getBoundingClientRect(), a = this.screenX(e - i.left, 0), o = t - i.top, s = Math.round(50 * r), c = Math.round(22 * r), l = br(n).maximumDigitWidth;
		if (o <= c && a > s) {
			let n = this.getHeaderHit(e, t);
			if (n?.kind !== "col") return null;
			let r = /* @__PURE__ */ new Map(), i = [];
			for (let e of [n.col - 1, n.col]) {
				if (e < 1) continue;
				let t = this.getCellRect(1, e);
				t && (r.set(e, t.x), i.push({
					index: e,
					edge: t.x + t.w
				}));
			}
			let o = uo(a, i, co, s);
			return o === null ? null : {
				kind: "col",
				index: o,
				originScaled: r.get(o),
				mdw: l
			};
		}
		if (a <= s && o > c) {
			let n = this.getHeaderHit(e, t);
			if (n?.kind !== "row") return null;
			let r = /* @__PURE__ */ new Map(), i = [];
			for (let e of [n.row - 1, n.row]) {
				if (e < 1) continue;
				let t = this.getCellRect(e, 1);
				t && (r.set(e, t.y), i.push({
					index: e,
					edge: t.y + t.h
				}));
			}
			let a = uo(o, i, co, c);
			return a === null ? null : {
				kind: "row",
				index: a,
				originScaled: r.get(a),
				mdw: l
			};
		}
		return null;
	}
	applyResize(e, t) {
		let n = this.resizeDrag, r = this.currentWorksheet;
		if (!n || !r) return;
		let i = this.viewport.scale, a = this.canvasArea.getBoundingClientRect();
		if (n.kind === "col") {
			let t = this.screenX(e - a.left, 0), o = Math.max(lo, Math.round((t - n.originScaled) / i));
			r.colWidths[n.index] = Qn(o, n.mdw), this.recordSizeOverride("col", n.index);
		} else {
			let e = t - a.top, o = Math.max(lo, Math.round((e - n.originScaled) / i));
			r.rowHeights[n.index] = er(o), this.recordSizeOverride("row", n.index);
		}
		ir.invalidate(r), this.updateSpacerSize(r), this.updateSelectionOverlay(), this.scheduleRender();
	}
	setSelectionColor(e) {
		this.opts.selectionColor = e, this.updateSelectionOverlay();
	}
	async setHiddenSheetMode(e) {
		this._hiddenSheetMode = e, this.buildTabs(), e === "skip" && this.wb && this.wb.isHidden(this.currentSheet) ? await this.showSheet(Re(this.currentSheet, (e) => this.wb.isHidden(e), this.sheetCount)) : this.updateTabActive(this.currentSheet);
	}
	get hiddenSheetMode() {
		return this._hiddenSheetMode;
	}
	get visibleSheetCount() {
		if (!this.wb) return 0;
		let e = this.wb;
		return ze((t) => e.isHidden(t), this.sheetCount);
	}
	copySelection() {
		let e = this.currentWorksheet;
		if (!e || !this.anchorCell || !this.activeCell) return;
		let t = 1, n = 1;
		for (let r of e.rows) {
			r.index > t && (t = r.index);
			for (let e of r.cells) e.col > n && (n = e.col);
		}
		let r, i, a, o;
		this.selectionMode === "all" ? (r = 1, i = t, a = 1, o = n) : this.selectionMode === "rows" ? (r = Math.min(this.anchorCell.row, this.activeCell.row), i = Math.max(this.anchorCell.row, this.activeCell.row), a = 1, o = n) : this.selectionMode === "cols" ? (a = Math.min(this.anchorCell.col, this.activeCell.col), o = Math.max(this.anchorCell.col, this.activeCell.col), r = 1, i = t) : (r = Math.min(this.anchorCell.row, this.activeCell.row), i = Math.max(this.anchorCell.row, this.activeCell.row), a = Math.min(this.anchorCell.col, this.activeCell.col), o = Math.max(this.anchorCell.col, this.activeCell.col));
		let s = /* @__PURE__ */ new Map();
		for (let t of e.rows) if (!(t.index < r || t.index > i)) for (let e of t.cells) {
			if (e.col < a || e.col > o) continue;
			let n = e.value, r = "";
			n.type === "text" ? r = n.runs ? n.runs.map((e) => e.text).join("") : n.text : n.type === "number" ? r = String(n.number) : n.type === "bool" ? r = n.bool ? "TRUE" : "FALSE" : n.type === "error" && (r = n.error), r && s.set(`${t.index}:${e.col}`, r);
		}
		let c = [];
		for (let e = r; e <= i; e++) {
			let t = [];
			for (let n = a; n <= o; n++) t.push(s.get(`${e}:${n}`) ?? "");
			c.push(t.join("	"));
		}
		this.hostWindow.navigator.clipboard?.writeText(c.join("\n")).catch(() => void 0);
	}
	updateSelectionOverlay() {
		if (this.overlayHost.clearSelection(), !this.anchorCell || !this.activeCell) return;
		let e = this.viewport.scale, t = this.currentWorksheet, n = t?.freezeRows ?? 0, r = t?.freezeCols ?? 0, i = (t) => Math.round(t * e), a = i(50), o = i(22), s = t ? br(t).roundedFrozenExtent(e) : {
			width: 0,
			height: 0
		}, c, l, u, d, f = 1, p = 1;
		if (this.selectionMode === "all") c = a, l = o, u = this.canvasArea.clientWidth - a, d = this.canvasArea.clientHeight - o;
		else if (this.selectionMode === "rows") {
			f = Math.min(this.anchorCell.row, this.activeCell.row);
			let e = Math.max(this.anchorCell.row, this.activeCell.row), t = this.getCellRect(f, 1), n = this.getCellRect(e, 1);
			if (!t || !n) return;
			c = a, l = t.y, u = this.canvasArea.clientWidth - a, d = n.y + n.h - t.y;
		} else if (this.selectionMode === "cols") {
			p = Math.min(this.anchorCell.col, this.activeCell.col);
			let e = Math.max(this.anchorCell.col, this.activeCell.col), t = this.getCellRect(1, p), n = this.getCellRect(1, e);
			if (!t || !n) return;
			c = t.x, l = o, u = n.x + n.w - t.x, d = this.canvasArea.clientHeight - o;
		} else {
			f = Math.min(this.anchorCell.row, this.activeCell.row);
			let e = Math.max(this.anchorCell.row, this.activeCell.row);
			p = Math.min(this.anchorCell.col, this.activeCell.col);
			let t = Math.max(this.anchorCell.col, this.activeCell.col), n = this.getCellRect(f, p), r = this.getCellRect(e, t);
			if (!n || !r) return;
			c = n.x, l = n.y, u = r.x + r.w - n.x, d = r.y + r.h - n.y;
		}
		c < a && (u -= a - c, c = a), l < o && (d -= o - l, l = o);
		let m = a + s.width, h = o + s.height;
		if (p > r && c < m && (u -= m - c, c = m), f > n && l < h && (d -= h - l, l = h), u <= 0 || d <= 0) return;
		let g = this.screenX(c, u), { border: _, background: v } = fo(this.opts.selectionColor ?? so), y = this.hostDocument.createElement("div");
		y.style.cssText = `position:absolute;left:${g}px;top:${l}px;width:${u}px;height:${d}px;box-sizing:border-box;border:${_};background:${v};pointer-events:none;`, this.overlayHost.appendSelection(y), this.maybeDrawValidationDropdown();
	}
	maybeDrawValidationDropdown() {
		if (this.validationArrowRect = null, this.selectionMode !== "cells") return;
		let e = this.currentWorksheet, t = this.activeCell;
		if (!e || !t || !Oa(e.dataValidations, t.row, t.col)) return;
		let n = this.getCellRect(t.row, t.col);
		if (!n) return;
		let r = this.viewport.scale, i = Math.round(50 * r), a = Math.round(22 * r), o = Math.max(14, Math.min(n.h, 22 * r)), s = n.x + n.w, c = n.y;
		if (s + o <= i || c + o <= a) return;
		let l = this.screenX(s, o), u = this.hostDocument.createElement("div");
		u.setAttribute("data-xlsx-validation-dropdown", ""), u.style.cssText = `position:absolute;left:${l}px;top:${c}px;width:${o}px;height:${o}px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:#f0f0f0;border:1px solid #7f7f7f;pointer-events:none;`;
		let d = Math.max(4, Math.round(o * .42));
		u.innerHTML = `<svg width="${d}" height="${d}" viewBox="0 0 10 6" aria-hidden="true"><path d="M0 0 L10 0 L5 6 Z" fill="#333"/></svg>`, this.overlayHost.appendSelection(u), this.validationArrowRect = {
			x: l,
			y: c,
			w: o,
			h: o
		}, this.validationPanel.style.display !== "none" && (this.validationPanelKey === `${t.row}:${t.col}` ? this.positionValidationPanel() : this.hideValidationPanel());
	}
	updateFindOverlay() {
		this.overlayHost.clearFind();
		let e = this.currentWorksheet;
		if (!e) return;
		let t = this.viewport.scale, n = (e) => Math.round(e * t), r = n(50), i = n(22), a = e.freezeRows ?? 0, o = e.freezeCols ?? 0, s = br(e).roundedFrozenExtent(t), c = r + s.width, l = i + s.height, u = ho(!1, this.opts.findHighlightColors), d = ho(!0, this.opts.findHighlightColors);
		for (let e of this._find.sheetHighlights(this.currentSheet)) {
			let t = this.getCellRect(e.row, e.col);
			if (!t) continue;
			let { x: n, y: s, w: f, h: p } = t;
			if (n < r && (f -= r - n, n = r), s < i && (p -= i - s, s = i), e.col > o && n < c && (f -= c - n, n = c), e.row > a && s < l && (p -= l - s, s = l), f <= 0 || p <= 0) continue;
			let m = this.screenX(n, f), { border: h, background: g } = e.active ? d : u, _ = this.hostDocument.createElement("div");
			_.style.cssText = `position:absolute;left:${m}px;top:${s}px;width:${f}px;height:${p}px;box-sizing:border-box;border:${h};background:${g};pointer-events:none;`, this.overlayHost.appendFind(_);
		}
	}
	async findText(e, t = {}) {
		if (!this.wb) return [];
		let n = await this._find.find(e, t);
		return this.updateFindOverlay(), n;
	}
	async findNext() {
		return this._activateMatch(this._find.next());
	}
	async findPrev() {
		return this._activateMatch(this._find.prev());
	}
	clearFind() {
		this._find.invalidate(), this.updateFindOverlay();
	}
	async _activateMatch(e) {
		if (!e) return this.updateFindOverlay(), null;
		let { sheet: t, row: n, col: r } = e.location;
		return t !== this.currentSheet && await this.goToSheet(t), this._scrollCellIntoView(n, r), this.updateFindOverlay(), e;
	}
	_scrollCellIntoView(e, t, n = "nearest") {
		let r = this.currentWorksheet;
		if (!r) return;
		let i = this.viewport.scale, a = br(r).scrollOffsetForCell(e, t, {
			scale: i,
			viewportWidth: this.canvasArea.clientWidth,
			viewportHeight: this.canvasArea.clientHeight,
			currentX: this.effectiveScrollLeft,
			currentY: this.viewportTop,
			headerWidth: 50,
			headerHeight: 22,
			align: n
		});
		this.viewportTop = a.y, this.setViewportLeft(a.x);
	}
	toggleValidationPanel() {
		let e = this.currentWorksheet, t = this.activeCell;
		if (!e || !t) return;
		let n = `${t.row}:${t.col}`;
		if (this.validationPanelKey === n) {
			this.hideValidationPanel();
			return;
		}
		let r = Oa(e.dataValidations, t.row, t.col);
		r && (this.hideValidationPanel(), this.validationPanelKey = n, this.openValidationPanel(t, r.formula1));
	}
	async openValidationPanel(e, t) {
		let n = ++this.validationRequestGeneration, r = this.wb, i = this.currentSheet;
		if (!r || this._destroyed) return;
		let a;
		try {
			a = await r.resolveValidationList(i, t);
		} catch {
			if (!this.isCurrentValidationRequest(n, r, i, e)) return;
			a = {
				kind: "formula",
				formula: t ?? ""
			};
		}
		this.isCurrentValidationRequest(n, r, i, e) && (this.renderValidationPanel(a), this.positionValidationPanel(), this.installValidationOutsideHandler());
	}
	isCurrentValidationRequest(e, t, n, r) {
		let i = this.activeCell;
		return !this._destroyed && e === this.validationRequestGeneration && this.wb === t && this.currentSheet === n && this.validationPanelKey === `${r.row}:${r.col}` && i?.row === r.row && i?.col === r.col;
	}
	renderValidationPanel(e) {
		let t = this.validationPanel;
		if (t.textContent = "", e.kind === "formula" || e.values.length === 0) {
			let n = this.hostDocument.createElement("div");
			n.style.cssText = "padding:4px 8px;color:#666;font-style:italic;white-space:pre-wrap;word-break:break-word;", n.textContent = e.kind === "formula" ? e.formula ? `= ${e.formula}` : "(no list)" : "(empty list)", t.appendChild(n);
			return;
		}
		for (let n of e.values) {
			let e = this.hostDocument.createElement("div");
			e.setAttribute("data-xlsx-validation-item", ""), e.style.cssText = "padding:3px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:default;", e.textContent = n, e.addEventListener("pointerenter", () => {
				e.style.background = "#cfe3ff";
			}), e.addEventListener("pointerleave", () => {
				e.style.background = "";
			}), t.appendChild(e);
		}
	}
	positionValidationPanel() {
		let e = this.activeCell;
		if (!e) return;
		let t = this.getCellRect(e.row, e.col);
		if (!t) return;
		let n = this.screenX(t.x, t.w);
		this.validationPanel.style.left = "-9999px", this.validationPanel.style.top = "-9999px", this.validationPanel.style.display = "block";
		let r = va({
			cell: {
				x: n,
				y: t.y,
				w: t.w,
				h: t.h
			},
			panel: {
				w: this.validationPanel.offsetWidth,
				h: this.validationPanel.offsetHeight
			},
			viewport: {
				w: this.canvasArea.clientWidth,
				h: this.canvasArea.clientHeight
			},
			rtl: this.isRtl
		});
		this.overlayHost.showValidation(r.left, r.top);
	}
	installValidationOutsideHandler() {
		this.validationOutsideHandler || (this.validationOutsideHandler = (e) => {
			let t = e.target;
			if (t && this.validationPanel.contains(t)) return;
			let { x: n, y: r } = this.surface.localPoint(e.clientX, e.clientY), i = this.validationArrowRect;
			i && n >= i.x && n <= i.x + i.w && r >= i.y && r <= i.y + i.h || this.hideValidationPanel();
		}, this.hostDocument.addEventListener("pointerdown", this.validationOutsideHandler, !0));
	}
	hideValidationPanel() {
		this.validationRequestGeneration++, this.overlayHost.hideValidation(), this.validationPanelKey = null, this.validationOutsideHandler &&= (this.hostDocument.removeEventListener("pointerdown", this.validationOutsideHandler, !0), null);
	}
	buildCommentMap(e) {
		this.commentMap = /* @__PURE__ */ new Map();
		for (let t of e.comments ?? []) {
			let e = Jn(t.cellRef);
			e && this.commentMap.set(`${e.row}:${e.col}`, t);
		}
	}
	buildHyperlinkMap(e) {
		this.hyperlinkMap = /* @__PURE__ */ new Map();
		for (let t of e.hyperlinks ?? []) this.hyperlinkMap.set(`${t.row}:${t.col}`, t);
	}
	hyperlinkAtCell(e) {
		return this.opts.enableHyperlinks === !1 ? null : this.hyperlinkMap.get(`${e.row}:${e.col}`) ?? null;
	}
	dispatchHyperlink(e) {
		let t = this.hyperlinkAtCell(e);
		if (!t) return !1;
		let n;
		if (t.url) n = {
			kind: "external",
			url: t.url
		};
		else if (t.location) n = {
			kind: "internal",
			ref: t.location
		};
		else return !1;
		let r = this.opts.onHyperlinkClick;
		return r ? (r(n), !0) : (n.kind === "external" ? E(n.url, void 0, this.hostWindow) : this.navigateInternalHyperlink(n.ref), !0);
	}
	navigateInternalHyperlink(e) {
		let t = e.lastIndexOf("!");
		if (t < 0) return;
		let n = e.slice(0, t);
		n.startsWith("'") && n.endsWith("'") && (n = n.slice(1, -1).replace(/''/g, "'"));
		let r = this.sheetNames.indexOf(n);
		r >= 0 && this.goToSheet(r);
	}
	scheduleCommentPopup(e) {
		let t = `${e.row}:${e.col}`, n = this.commentMap.get(t);
		if (!n) {
			this.hideCommentPopup();
			return;
		}
		this.commentPopupKey !== t && (this.hideCommentPopup(), this.commentPopupKey = t, this.commentPopupTimer = setTimeout(() => {
			this.commentPopupTimer = null, this.renderCommentPopup(e, n);
		}, Ja));
	}
	renderCommentPopup(e, t) {
		let n = this.getCellRect(e.row, e.col);
		if (!n) return;
		if (this.commentPopup.textContent = "", t.author) {
			let e = this.hostDocument.createElement("div");
			e.style.cssText = "font-weight:bold;margin-bottom:2px;", e.textContent = t.author, this.commentPopup.appendChild(e);
		}
		let r = this.hostDocument.createElement("div");
		r.textContent = t.text, this.commentPopup.appendChild(r);
		let i = this.screenX(n.x, n.w);
		this.commentPopup.style.left = "-9999px", this.commentPopup.style.top = "-9999px", this.commentPopup.style.display = "block";
		let a = Aa({
			cell: {
				x: i,
				y: n.y,
				w: n.w,
				h: n.h
			},
			popup: {
				w: this.commentPopup.offsetWidth,
				h: this.commentPopup.offsetHeight
			},
			viewport: {
				w: this.canvasArea.clientWidth,
				h: this.canvasArea.clientHeight
			},
			rtl: this.isRtl
		});
		this.overlayHost.showComment(a.left, a.top);
	}
	hideCommentPopup() {
		this.commentPopupTimer !== null && (clearTimeout(this.commentPopupTimer), this.commentPopupTimer = null), this.commentPopupKey = null, this.overlayHost.hideComment();
	}
	applyPointerSelection(e, t, n, r, i) {
		let a = this.getHeaderHit(e, t);
		if (a) {
			a.kind === "corner" ? (this.selectionMode = "all", this.anchorCell = {
				row: 1,
				col: 1
			}, this.activeCell = {
				row: 1,
				col: 1
			}, this.isSelecting = !1) : a.kind === "row" ? n && this.anchorCell && this.selectionMode === "rows" ? this.selectionController.extend({
				row: a.row,
				col: 1
			}) : (this.selectionMode = "rows", this.anchorCell = {
				row: a.row,
				col: 1
			}, this.activeCell = {
				row: a.row,
				col: 1
			}, i && (this.isSelecting = !0, this.scrollHost.setPointerCapture(r))) : n && this.anchorCell && this.selectionMode === "cols" ? this.selectionController.extend({
				row: 1,
				col: a.col
			}) : (this.selectionMode = "cols", this.anchorCell = {
				row: 1,
				col: a.col
			}, this.activeCell = {
				row: 1,
				col: a.col
			}, i && (this.isSelecting = !0, this.scrollHost.setPointerCapture(r))), this.updateSelectionOverlay(), this.renderCurrentSheet(), this.opts.onSelectionChange?.(this.selection);
			return;
		}
		let o = this.getCellAt(e, t);
		o && (n && this.anchorCell && this.selectionMode === "cells" ? this.selectionController.extend(o) : (this.selectionMode = "cells", this.anchorCell = o, this.activeCell = o), i && (this.isSelecting = !0, this.scrollHost.setPointerCapture(r)), this.updateSelectionOverlay(), this.wb && this.renderCurrentSheet().catch((e) => this._reportRenderError(e)), this.opts.onSelectionChange?.(this.selection));
	}
	setupSelectionEvents() {
		this.surface.on("pointerdown", (e) => {
			if (e.button !== 0) return;
			let t = this.opts.resizable ?? !0 ? this.getResizeTarget(e.clientX, e.clientY) : null;
			if (t) {
				e.preventDefault(), this.resizeDrag = {
					...t,
					pointerId: e.pointerId
				}, this.scrollHost.setPointerCapture(e.pointerId), this.hideCommentPopup();
				return;
			}
			let n = this.validationArrowRect;
			if (n) {
				let { x: t, y: r } = this.surface.localPoint(e.clientX, e.clientY);
				if (t >= n.x && t <= n.x + n.w && r >= n.y && r <= n.y + n.h) {
					e.preventDefault(), this.toggleValidationPanel();
					return;
				}
			}
			let r = this.scrollHost.getBoundingClientRect(), i = e.clientX - r.left - this.scrollHost.clientLeft, a = e.clientY - r.top - this.scrollHost.clientTop;
			if (i >= this.scrollHost.clientWidth || a >= this.scrollHost.clientHeight) return;
			let o = this._mountKind === "composite" && (this.scrollHost.scrollWidth > this.scrollHost.clientWidth && this.scrollHost.clientHeight - a <= 16 || this.scrollHost.scrollHeight > this.scrollHost.clientHeight && this.scrollHost.clientWidth - i <= 16);
			if (e.pointerType !== "mouse" || o) {
				this.pendingTap = {
					x: e.clientX,
					y: e.clientY,
					shiftKey: e.shiftKey,
					pointerId: e.pointerId
				};
				return;
			}
			let s = this.getCellAt(e.clientX, e.clientY);
			this.pendingClick = s ? {
				x: e.clientX,
				y: e.clientY,
				pointerId: e.pointerId,
				cell: s
			} : null, this.applyPointerSelection(e.clientX, e.clientY, e.shiftKey, e.pointerId, !0);
		}), this.surface.on("pointermove", (e) => {
			if (this.resizeDrag && this.resizeDrag.pointerId === e.pointerId) {
				e.preventDefault(), this.applyResize(e.clientX, e.clientY);
				return;
			}
			if (e.pointerType === "mouse" && !this.isSelecting && (this.opts.resizable ?? !0)) {
				let t = this.getResizeTarget(e.clientX, e.clientY);
				if (this.scrollHost.style.cursor = t ? t.kind === "col" ? "col-resize" : "row-resize" : "", t) {
					this.hideCommentPopup();
					return;
				}
			}
			if (this.pendingTap && this.pendingTap.pointerId === e.pointerId) {
				let t = e.clientX - this.pendingTap.x, n = e.clientY - this.pendingTap.y;
				t * t + n * n > 64 && (this.pendingTap = null);
			}
			if (this.pendingClick && this.pendingClick.pointerId === e.pointerId) {
				let t = e.clientX - this.pendingClick.x, n = e.clientY - this.pendingClick.y;
				t * t + n * n > 64 && (this.pendingClick = null);
			}
			if (e.pointerType === "mouse" && !this.isSelecting) {
				let t = this.getCellAt(e.clientX, e.clientY);
				t ? this.scheduleCommentPopup(t) : this.hideCommentPopup(), this.scrollHost.style.cursor = t && this.hyperlinkAtCell(t) ? "pointer" : "";
			}
			if (this.isSelecting) {
				if (this.selectionMode === "rows") {
					let t = this.getHeaderHit(e.clientX, e.clientY), n = t?.kind === "row" ? t.row : this.getCellAt(e.clientX, e.clientY)?.row;
					if (!n || n === this.activeCell?.row) return;
					this.selectionController.extend({
						row: n,
						col: 1
					});
				} else if (this.selectionMode === "cols") {
					let t = this.getHeaderHit(e.clientX, e.clientY), n = t?.kind === "col" ? t.col : this.getCellAt(e.clientX, e.clientY)?.col;
					if (!n || n === this.activeCell?.col) return;
					this.selectionController.extend({
						row: 1,
						col: n
					});
				} else {
					let t = this.getCellAt(e.clientX, e.clientY);
					if (!t || t.row === this.activeCell?.row && t.col === this.activeCell?.col) return;
					this.selectionController.extend(t);
				}
				this.updateSelectionOverlay(), this.scheduleRender(), this.opts.onSelectionChange?.(this.selection);
			}
		}), this.surface.on("pointerup", (e) => {
			if (this.resizeDrag && this.resizeDrag.pointerId === e.pointerId) {
				this.scrollHost.releasePointerCapture(e.pointerId), this.resizeDrag = null;
				return;
			}
			if (this.pendingTap && this.pendingTap.pointerId === e.pointerId) {
				let t = e.clientX - this.pendingTap.x, n = e.clientY - this.pendingTap.y;
				if (t * t + n * n <= 64) {
					if (this.applyPointerSelection(e.clientX, e.clientY, this.pendingTap.shiftKey, e.pointerId, !1), e.pointerType !== "mouse" && this.activeCell) {
						let e = `${this.activeCell.row}:${this.activeCell.col}`, t = this.commentMap.get(e);
						t ? (this.hideCommentPopup(), this.renderCommentPopup(this.activeCell, t)) : this.hideCommentPopup();
					}
					this.activeCell && this.dispatchHyperlink(this.activeCell);
				}
				this.pendingTap = null;
			}
			if (this.pendingClick && this.pendingClick.pointerId === e.pointerId) {
				let t = e.clientX - this.pendingClick.x, n = e.clientY - this.pendingClick.y, r = this.getCellAt(e.clientX, e.clientY);
				t * t + n * n <= 64 && r && r.row === this.pendingClick.cell.row && r.col === this.pendingClick.cell.col && this.dispatchHyperlink(this.pendingClick.cell), this.pendingClick = null;
			}
			this.isSelecting = !1;
		}), this.surface.on("pointercancel", (e) => {
			this.resizeDrag && this.resizeDrag.pointerId === e.pointerId && (this.resizeDrag = null), this.pendingTap && this.pendingTap.pointerId === e.pointerId && (this.pendingTap = null), this.pendingClick && this.pendingClick.pointerId === e.pointerId && (this.pendingClick = null), this.isSelecting = !1;
		}), this.surface.on("wheel", (e) => {
			if (!(e.ctrlKey || e.metaKey)) {
				if (this._mountKind === "sheet") {
					e.preventDefault();
					let t = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Math.max(1, this.scrollHost.clientHeight) : 1, n = (e.shiftKey ? e.deltaY : e.deltaX) * t, r = (e.shiftKey ? 0 : e.deltaY) * t;
					this.setViewportLeft(this.effectiveScrollLeft + n), this.viewportTop += r, this.scheduleRender(), this.updateSelectionOverlay(), this.updateFindOverlay(), this.emitViewportChange();
				}
				return;
			}
			if (e.preventDefault(), e.deltaY === 0) return;
			let { x: t, y: n } = this.surface.localPoint(e.clientX, e.clientY);
			this._pendingZoomAnchor = Number.isFinite(t) && Number.isFinite(n) ? {
				x: t,
				y: n
			} : null, this.setScale(ye(this.viewport.scale, e.deltaY));
		}, { passive: !1 }), this.surface.on("pointerleave", () => this.hideCommentPopup()), this.keydownHandler = (e) => {
			(e.ctrlKey || e.metaKey) && e.key === "c" ? this.copySelection() : e.key === "Escape" && this.validationPanel.style.display !== "none" && this.hideValidationPanel();
		}, this.surface.onDocumentKeydown(this.keydownHandler);
	}
	buildTabs() {
		this._mountKind !== "sheet" && (this.tabList.innerHTML = "", this.tabs = [], this.tabColors = this.workbook.tabColors, this.workbook.sheetNames.forEach((e, t) => {
			let n = this.hostDocument.createElement("button");
			n.textContent = e, n.title = e, n.style.cssText = this.tabCss(t, !1), n.addEventListener("click", () => this.showSheet(t)), this.tabList.appendChild(n), this.tabs.push(n);
		}), this.updateNavButtons());
	}
	makeNavButton(e, t, n) {
		let r = this.hostDocument.createElement("button");
		return r.textContent = e, r.setAttribute("aria-label", t), r.title = t, r.classList.add("xlsx-tab-nav"), r.style.cssText = this.navButtonStyle(!1), r.addEventListener("click", n), r;
	}
	navButtonStyle(e) {
		return e ? "flex:1;height:100%;padding:0;display:flex;align-items:center;justify-content:center;border:none;color:#666;font-size:9px;line-height:1;box-sizing:border-box;outline:none;opacity:0.3;cursor:default;pointer-events:none;" : "flex:1;height:100%;padding:0;display:flex;align-items:center;justify-content:center;border:none;color:#666;font-size:9px;line-height:1;box-sizing:border-box;outline:none;cursor:pointer;";
	}
	scrollTabs(e) {
		let t = this.tabStrip, n = t.scrollLeft, r = n + t.clientWidth, i = null;
		if (e === 1) {
			let e = Infinity;
			for (let t of this.tabs) {
				let n = t.offsetLeft + t.offsetWidth;
				n > r + 1 && (e = Math.min(e, n));
			}
			Number.isFinite(e) && (i = e - t.clientWidth);
		} else {
			let e = -Infinity;
			for (let t of this.tabs) {
				let r = t.offsetLeft;
				r < n - 1 && (e = Math.max(e, r));
			}
			Number.isFinite(e) && (i = e);
		}
		i !== null && (t.scrollLeft = Math.max(0, Math.min(i, t.scrollWidth - t.clientWidth))), this.updateNavButtons();
	}
	updateNavButtons() {
		if (this._mountKind === "sheet") return;
		let e = this.tabStrip, t = e.scrollLeft <= 0, n = e.scrollLeft + e.clientWidth >= e.scrollWidth - 1;
		this.navPrev.style.cssText = this.navButtonStyle(t), this.navNext.style.cssText = this.navButtonStyle(n);
	}
	updateTabActive(e) {
		this.tabs.forEach((t, n) => {
			t.style.cssText = this.tabCss(n, n === e);
		});
		let t = this.tabs[e];
		if (t && t.offsetParent !== null) {
			let e = this.tabStrip, n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
			n.left < r.left ? e.scrollLeft -= r.left - n.left : n.right > r.right && (e.scrollLeft += n.right - r.right);
		}
		this.updateNavButtons();
	}
	tabStyle(e, t) {
		let n = $a - 2, r = $a - 5, i = t ? `box-shadow:inset 0 -${e ? 2 : 3}px 0 0 ${t};` : "";
		return e ? `display:inline-block;flex:none;padding:0 14px;position:relative;border:1px solid #c8ccd0;border-bottom:none;border-radius:3px 3px 0 0;cursor:pointer;white-space:nowrap;max-width:160px;overflow:hidden;text-overflow:ellipsis;outline:none;box-sizing:border-box;height:${n}px;font-size:13px;background:#fff;color:#000;border-bottom:1px solid #fff;font-weight:600;top:1px;` + i : `display:inline-block;flex:none;padding:0 14px;position:relative;border:1px solid #c8ccd0;border-bottom:none;border-radius:3px 3px 0 0;cursor:pointer;white-space:nowrap;max-width:160px;overflow:hidden;text-overflow:ellipsis;outline:none;box-sizing:border-box;height:${r}px;font-size:11px;background:#e0e0e0;color:#555;` + i;
	}
	tabCss(e, t) {
		let n = this.tabStyle(t, this.tabColors[e]);
		return this._hiddenSheetMode !== "show" && this.wb?.isHidden(e) && (n += this._hiddenSheetMode === "skip" ? "display:none;" : `opacity:${ro};`), n;
	}
	buildZoomControl() {
		let e = this.opts.zoomMin ?? .1, t = this.opts.zoomMax ?? 4, n = this.viewport.scale, r = this.hostDocument.createElement("div");
		r.style.cssText = "display:flex;align-items:center;flex-shrink:0;gap:2px;padding:0 10px;height:100%;color:#555;font-size:12px;user-select:none;";
		let i = (e, t, n) => {
			let r = this.hostDocument.createElement("button");
			return r.type = "button", r.textContent = e, r.setAttribute("aria-label", t), r.title = t, r.style.cssText = "width:18px;height:18px;padding:0;border:none;background:transparent;color:#555;font-size:14px;line-height:1;cursor:pointer;border-radius:3px;", r.addEventListener("click", n), r;
		}, a = this.hostDocument.createElement("input");
		a.type = "range", a.min = "0", a.max = "100", a.step = "any", a.value = String(this.zoomScaleToPos(n, e, t)), a.setAttribute("aria-label", "Zoom"), a.title = "Zoom", a.classList.add("xlsx-zoom-slider"), a.style.cssText = "width:90px;cursor:pointer;", a.addEventListener("input", () => this.setScale(this.zoomPosToScale(Number(a.value), e, t)));
		let o = this.hostDocument.createElement("span");
		return o.textContent = `${Math.round(n * 100)}%`, o.style.cssText = "min-width:42px;margin-left:6px;text-align:right;font-variant-numeric:tabular-nums;", r.appendChild(i("−", "Zoom out", () => this.zoomOut())), r.appendChild(a), r.appendChild(i("+", "Zoom in", () => this.zoomIn())), r.appendChild(o), this.zoomSlider = a, this.zoomLabel = o, r;
	}
	zoomPosToScale(e, t, n) {
		return e <= 50 ? t + e / 50 * (1 - t) : 1 + (e - 50) / 50 * (n - 1);
	}
	zoomScaleToPos(e, t, n) {
		let r = Math.min(n, Math.max(t, e));
		return r <= 1 ? (r - t) / (1 - t) * 50 : 50 + (r - 1) / (n - 1) * 50;
	}
	setScale(e) {
		let t = this.opts.zoomMin ?? .1, n = this.opts.zoomMax ?? 4, r = Math.min(Math.round(n * 100), Math.max(Math.round(t * 100), Math.round(e * 100))), i = r / 100, a = this.viewport.scale, o = this._pendingZoomAnchor;
		if (this._pendingZoomAnchor = null, i !== a) {
			if (this.viewport.setScale(i), this.zoomSlider && (this.zoomSlider.value = String(this.zoomScaleToPos(i, t, n))), this.zoomLabel && (this.zoomLabel.textContent = `${r}%`), this.currentWorksheet) {
				let e = this.effectiveScrollLeft, t = this.viewportTop;
				if (this.layoutGutters(), this.updateSpacerSize(this.currentWorksheet), o) {
					this.viewportTop = be(t, o.y, a, i, { maxScroll: this.maxScrollTop });
					let n = this.screenX(o.x, 0), r = this.maxScrollLeft, s = be(e, n, a, i, { maxScroll: r });
					this.setViewportLeft(s);
				} else this.setViewportLeft(e);
			}
			this.renderCurrentSheet(), this.updateSelectionOverlay(), this.updateFindOverlay(), this.updateNavButtons(), this.opts.onScaleChange?.(i);
		}
	}
	getScale() {
		return this.viewport.scale;
	}
	zoomIn() {
		this.setScale(Te(this.getScale()));
	}
	zoomOut() {
		this.setScale(Ce(this.getScale()));
	}
	fitWidth() {
		this._fit("width");
	}
	fitPage() {
		this._fit("page");
	}
	_fit(e) {
		let t = this.currentWorksheet;
		if (!t) return;
		let { width: n, height: r } = this._naturalContentExtent(t), i = ve({
			contentWidth: n,
			contentHeight: r,
			containerWidth: this.canvasArea.clientWidth,
			containerHeight: this.canvasArea.clientHeight
		}, e);
		i <= 0 || this.setScale(i);
	}
	_naturalContentExtent(e) {
		let t = Math.max(50, e.freezeRows ?? 0), n = Math.max(26, e.freezeCols ?? 0);
		for (let r of e.rows) {
			r.index > t && (t = r.index);
			for (let e of r.cells) e.col > n && (n = e.col);
		}
		return br(e).logicalContentExtent(t, n, 50, 22);
	}
	updateSpacerSize(e) {
		let t = this.viewport.scale, n = e.freezeRows ?? 0, r = e.freezeCols ?? 0, i = Math.max(50, n), a = Math.max(26, r);
		for (let t of e.rows) {
			t.index > i && (i = t.index);
			for (let e of t.cells) e.col > a && (a = e.col);
		}
		i += 30, a += 10;
		let o = br(e).roundedContentExtent(i, a, t, 50, 22), s = o.width, c = o.height;
		this.spacer.style.width = `${s}px`, this.spacer.style.height = `${c}px`, this.viewport.setViewportSize(this.scrollHost.clientWidth, this.scrollHost.clientHeight), this.viewport.setExtent(s, c), this.setViewportLeft(this.viewport.x), this.viewportTop = this.viewport.y;
	}
	scheduleRender() {
		this.renderDispatcher.schedule(() => this.renderCurrentSheet().catch((e) => this._reportRenderError(e)));
	}
	async renderCurrentSheet() {
		let e = this.renderDispatcher.begin();
		try {
			await this._renderCurrentSheet(e);
		} catch (t) {
			this.renderDispatcher.isCurrent(e) && this._reportRenderError(t);
		}
	}
	_reportRenderError(e) {
		if (this._destroyed) return;
		let t = e instanceof Error ? e : Error(String(e));
		this.opts.onError ? this.opts.onError(t) : console.error("[ooxml] XlsxViewer render failed:", t);
	}
	async _renderCurrentSheet(e) {
		if (!this.currentWorksheet) return;
		let t = this.currentWorksheet, n = this.canvasArea.clientWidth, r = this.canvasArea.clientHeight;
		if (n <= 0 || r <= 0) return;
		let i = this.viewport.scale, a = this.surface.dpr, o = t.freezeRows ?? 0, s = t.freezeCols ?? 0, c = br(t).visibleRange({
			width: n,
			height: r,
			scale: i,
			scrollX: this.effectiveScrollLeft,
			scrollY: this.viewportTop,
			headerWidth: 50,
			headerHeight: 22,
			buffer: 2
		}), l = c.range, { offsetX: u, offsetY: d } = c, { selectedRowRange: f, selectedColRange: p } = this.computeHeaderHighlight(), m = {
			width: n,
			height: r,
			dpr: a,
			cellScale: i,
			scrollOffsetX: u,
			scrollOffsetY: d,
			freezeRows: o,
			freezeCols: s,
			selectedRowRange: f,
			selectedColRange: p
		}, h = this.wireSizeOverrides(), g = Sa(h ? {
			...m,
			sizeOverrides: h.overrides
		} : m, br(t).maximumDigitWidth, {
			worksheet: t,
			projection: h ? {
				id: this.projectionId,
				revision: h.revision
			} : void 0
		});
		if (this._mode === "worker") {
			let t = await this.workbook.renderViewportToBitmap(this.currentSheet, l, g);
			if (!this.renderDispatcher.commitBitmap(e, t, n, r)) return;
		} else if (await this.workbook.renderViewport(this.canvas, this.currentSheet, l, oa(g, () => !this._destroyed && this.renderDispatcher.isCurrent(e))), !this.renderDispatcher.isCurrent(e) || this._destroyed) return;
		this.renderGutters();
	}
	computeHeaderHighlight() {
		return this.selectionController.headerHighlight();
	}
	get sheetNames() {
		return this.wb?.sheetNames ?? [];
	}
	get canvasElement() {
		return this.canvas;
	}
	async getResourceMetrics() {
		if (!this.wb) throw Error("Workbook not loaded");
		return await this.wb.getResourceMetrics();
	}
	destroy() {
		if (this._destroyed) return;
		this._destroyed = !0, this.sheetRequestGeneration++, this.resizeObserver?.disconnect(), this.renderDispatcher.destroy(), this.surface.destroy(), this.hideCommentPopup(), this.hideValidationPanel(), this._find.invalidate(), this.releaseHostFonts();
		let e = this.wb?.[Ta];
		typeof e == "function" && e.call(this.wb, this.projectionId), this.acquisition.destroy(), this.wrapper.remove();
	}
	assertOpen() {
		if (this._destroyed) throw this.destroyedError();
	}
	destroyedError() {
		return /* @__PURE__ */ Error(this._mountKind === "sheet" ? "XlsxSheetViewer is destroyed" : "XlsxViewer is destroyed");
	}
}, _o = class e extends go {
	static fromWorkbook(t, n, r = {}) {
		return new e(t, {
			...r,
			[qa]: n
		});
	}
	constructor(e, t = {}) {
		super(e, t, { kind: "composite" });
	}
}, vo = class e {
	engine;
	canvasMount;
	destroyed = !1;
	snapshot;
	lastMetrics;
	static fromWorkbook(t, n, r = {}) {
		return new e(t, {
			...r,
			[qa]: n
		});
	}
	constructor(e, t = {}) {
		this.canvasElement = e;
		let n = t[qa], r = we("XlsxSheetViewer", t.mode, n), i = e.getBoundingClientRect();
		this.canvasMount = new De(e, {
			wrapperCssText: `position:relative;display:inline-block;vertical-align:top;overflow:hidden;width:${e.style.width || `${i.width || e.width}px`};height:${e.style.height || `${i.height || e.height}px`};`,
			restoreMode: "style-and-bitmap"
		}), this.engine = new go(this.canvasMount.wrapper, {
			...t,
			onResourceMetrics: (e) => {
				this.lastMetrics = e, t.onResourceMetrics?.(e);
			}
		}, {
			kind: "sheet",
			canvas: e,
			mode: r
		}), this.snapshot = {
			sheetIndex: 0,
			sheetCount: 0,
			sheetNames: [],
			viewport: {
				x: 0,
				y: 0
			},
			selection: null,
			scale: this.engine.getScale(),
			hiddenSheetMode: this.engine.hiddenSheetMode,
			visibleSheetCount: 0
		};
	}
	async load(e) {
		this.assertOpen();
		try {
			await this.engine.load(e);
		} finally {
			this.destroyed || this.captureSnapshot();
		}
		this.assertOpen();
	}
	get sheetIndex() {
		return this.destroyed ? this.snapshot.sheetIndex : this.engine.sheetIndex;
	}
	get sheetCount() {
		return this.destroyed ? this.snapshot.sheetCount : this.engine.sheetCount;
	}
	get sheetNames() {
		return this.destroyed ? [...this.snapshot.sheetNames] : [...this.engine.sheetNames];
	}
	async goToSheet(e) {
		this.assertOpen(), await this.engine.goToSheet(e), this.assertOpen(), this.captureSnapshot();
	}
	async nextSheet() {
		this.assertOpen(), await this.engine.nextSheet(), this.assertOpen(), this.captureSnapshot();
	}
	async prevSheet() {
		this.assertOpen(), await this.engine.prevSheet(), this.assertOpen(), this.captureSnapshot();
	}
	getViewportOffset() {
		return this.destroyed ? { ...this.snapshot.viewport } : this.engine.getViewportOffset();
	}
	async setViewportOffset(e) {
		this.assertOpen(), await this.engine.setViewportOffset(e), this.assertOpen(), this.captureSnapshot();
	}
	async scrollToCell(e, t) {
		this.assertOpen(), await this.engine.scrollToCell(e, t), this.assertOpen(), this.captureSnapshot();
	}
	async relayout() {
		this.assertOpen();
		let e = this.canvasElement.getBoundingClientRect();
		e.width > 0 && (this.canvasMount.wrapper.style.width = `${e.width}px`), e.height > 0 && (this.canvasMount.wrapper.style.height = `${e.height}px`), await this.engine.relayout(), this.assertOpen(), this.captureSnapshot();
	}
	getScale() {
		return this.destroyed ? this.snapshot.scale : this.engine.getScale();
	}
	setScale(e) {
		this.assertOpen(), this.engine.setScale(e), this.captureSnapshot();
	}
	zoomIn() {
		this.assertOpen(), this.engine.zoomIn(), this.captureSnapshot();
	}
	zoomOut() {
		this.assertOpen(), this.engine.zoomOut(), this.captureSnapshot();
	}
	fitWidth() {
		this.assertOpen(), this.engine.fitWidth(), this.captureSnapshot();
	}
	fitPage() {
		this.assertOpen(), this.engine.fitPage(), this.captureSnapshot();
	}
	getCellAt(e, t) {
		return this.destroyed ? null : this.engine.getCellAt(e, t);
	}
	get selection() {
		let e = this.destroyed ? this.snapshot.selection : this.engine.selection;
		return e ? structuredClone(e) : null;
	}
	select(e) {
		this.assertOpen(), this.engine.select(e), this.captureSnapshot();
	}
	setSelectionColor(e) {
		this.assertOpen(), this.engine.setSelectionColor(e);
	}
	async setHiddenSheetMode(e) {
		this.assertOpen(), await this.engine.setHiddenSheetMode(e), this.assertOpen(), this.captureSnapshot();
	}
	get hiddenSheetMode() {
		return this.destroyed ? this.snapshot.hiddenSheetMode : this.engine.hiddenSheetMode;
	}
	get visibleSheetCount() {
		return this.destroyed ? this.snapshot.visibleSheetCount : this.engine.visibleSheetCount;
	}
	async findText(e, t) {
		this.assertOpen();
		let n = await this.engine.findText(e, t);
		return this.assertOpen(), n;
	}
	async findNext() {
		this.assertOpen();
		let e = await this.engine.findNext();
		return this.assertOpen(), this.captureSnapshot(), e;
	}
	async findPrev() {
		this.assertOpen();
		let e = await this.engine.findPrev();
		return this.assertOpen(), this.captureSnapshot(), e;
	}
	clearFind() {
		this.assertOpen(), this.engine.clearFind();
	}
	async getResourceMetrics() {
		if (this.destroyed) {
			if (this.lastMetrics) return this.lastMetrics;
			throw this.destroyedError();
		}
		return this.lastMetrics = await this.engine.getResourceMetrics(), this.lastMetrics;
	}
	destroy() {
		this.destroyed || (this.captureSnapshot(), this.destroyed = !0, this.engine.destroy(), this.canvasMount.restore());
	}
	captureSnapshot() {
		let e = this.engine.selection;
		this.snapshot = {
			sheetIndex: this.engine.sheetIndex,
			sheetCount: this.engine.sheetCount,
			sheetNames: [...this.engine.sheetNames],
			viewport: { ...this.engine.getViewportOffset() },
			selection: e ? structuredClone(e) : null,
			scale: this.engine.getScale(),
			hiddenSheetMode: this.engine.hiddenSheetMode,
			visibleSheetCount: this.engine.visibleSheetCount
		};
	}
	assertOpen() {
		if (this.destroyed) throw this.destroyedError();
	}
	destroyedError() {
		return /* @__PURE__ */ Error("XlsxSheetViewer is destroyed");
	}
}, yo = /* @__PURE__ */ e({
	OoxmlDecodedImageLimitError: () => d,
	OoxmlError: () => re,
	OoxmlResourceLimitError: () => te,
	XlsxSheetViewer: () => vo,
	XlsxViewer: () => _o,
	XlsxWorkbook: () => Ea,
	autoResize: () => je,
	isOoxmlDecodedImageLimitError: () => m,
	openExternalHyperlink: () => E,
	resolveSharedStrings: () => Ue
});
//#endregion
export { Ea as i, vo as n, _o as r, yo as t };
