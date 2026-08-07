import { t as e } from "./chunk-DmhlhrBa.js";
import { B as t, Et as n, It as r, Lt as i, R as a, a as o, an as s, hn as c, ht as l, it as u, kt as d, mn as f, q as p, z as m } from "./line-metrics-BdCACYlq.js";
import { _ as h, a as g, b as _, c as v, d as y, f as b, g as x, h as ee, i as S, l as te, m as C, n as ne, o as w, p as T, r as re, s as ie, t as ae, u as oe, v as E, x as se, y as ce } from "./canvas-viewer-mechanics-CwVSOYke.js";
import { a as le, c as ue, i as de, o as fe, r as pe, s as me, t as he } from "./bounded-raw-part-cache-C6ro6Ezf.js";
import { _ as D, a as ge, c as O, d as k, f as A, g as j, h as M, l as N, m as P, n as F, o as I, p as L, s as _e, t as R, v as ve, y as z } from "./document-pull-client-AAnwzlig.js";
import { n as ye, r as B, t as V } from "./highlight-rect-CAkCWJ37.js";
//#region packages/core/src/fonts/embedded.ts
function be(e, t) {
	let n = xe(t), r = e.slice(), i = Math.min(32, r.length);
	for (let e = 0; e < i; e++) r[e] ^= n[e % 16];
	return r;
}
function xe(e) {
	let t = e.replace(/[{}\-\s]/g, "");
	if (t.length !== 32 || /[^0-9a-fA-F]/.test(t)) throw Error(`invalid fontKey GUID: ${e}`);
	let n = new Uint8Array(16);
	for (let e = 0; e < 16; e++) n[e] = parseInt(t.slice(e * 2, e * 2 + 2), 16);
	return n.reverse();
}
function Se(e, t, n, r) {
	let i = 2166136261;
	for (let e = 0; e < r.length; e++) i ^= r[e], i = Math.imul(i, 16777619);
	return `${e}|${t}|${n}|${r.length}|${(i >>> 0).toString(16)}`;
}
async function Ce(e, t = 30 * 1024 * 1024) {
	let n = pe();
	if (!n || typeof FontFace > "u") return [];
	let r = [], i = [], a = [];
	for (let o of e) try {
		if (o.bytes.length === 0 || o.bytes.length > t) {
			a.push(o.family);
			continue;
		}
		let e = o.odttf ? be(o.bytes, o.fontKey ?? "") : o.bytes, { face: s, isNew: c } = ue(`embedded:${Se(o.family, o.weight, o.style, e)}`, n, () => {
			let t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength), r = new FontFace(o.family, t, {
				weight: o.weight,
				style: o.style
			});
			return n.add(r), r;
		});
		r.push(s), c && i.push(s);
	} catch {
		a.push(o.family);
	}
	return i.length > 0 && await fe(Promise.allSettled(i.map((e) => e.load())).then((e) => (e.forEach((e, t) => {
		e.status === "rejected" && a.push(i[t].family);
	}), n.ready))), a.length > 0 && console.warn(`[ooxml] failed to register embedded font(s): ${[...new Set(a)].join(", ")}; falling back to substitute fonts (text may shift or differ).`), r;
}
function we(e) {
	me(e);
}
//#endregion
//#region packages/docx/src/worker.ts?worker&inline
var H = "var e=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,n.unregister(this),e}free(){let e=this.__destroy_into_raw();g.__wbg_docxarchive_free(e,0)}acknowledge_document_chunk(e,t,n){let r=g.docxarchive_acknowledge_document_chunk(this.__wbg_ptr,e,t,n);if(r[1])throw d(r[0])}assert_healthy(){let e=g.docxarchive_assert_healthy(this.__wbg_ptr);if(e[1])throw d(e[0])}cancel_document_cursor(){g.docxarchive_cancel_document_cursor(this.__wbg_ptr)}close_document_session(){g.docxarchive_close_document_session(this.__wbg_ptr)}document_chunk_done(){let e=g.docxarchive_document_chunk_done(this.__wbg_ptr);if(e[2])throw d(e[1]);return e[0]!==0}document_cursor_resource_usage(){let e=g.docxarchive_document_cursor_resource_usage(this.__wbg_ptr);if(e[3])throw d(e[2]);var t=r(e[0],e[1]).slice();return g.__wbindgen_free(e[0],e[1]*1,1),t}extract_image(e){let t=u(e,g.__wbindgen_malloc,g.__wbindgen_realloc),n=h,i=g.docxarchive_extract_image(this.__wbg_ptr,t,n);if(i[3])throw d(i[2]);var a=r(i[0],i[1]).slice();return g.__wbindgen_free(i[0],i[1]*1,1),a}constructor(e,t,r,i){let a=ee(e,g.__wbindgen_malloc),o=h,s=g.docxarchive_new(a,o,!l(t),l(t)?BigInt(0):t,!l(r),l(r)?BigInt(0):r,!l(i),l(i)?BigInt(0):i);if(s[2])throw d(s[1]);return this.__wbg_ptr=s[0]>>>0,n.register(this,this.__wbg_ptr,this),this}open_document_cursor(e,t){let n=g.docxarchive_open_document_cursor(this.__wbg_ptr,e,t);if(n[1])throw d(n[0])}parse(){let e=g.docxarchive_parse(this.__wbg_ptr);if(e[3])throw d(e[2]);var t=r(e[0],e[1]).slice();return g.__wbindgen_free(e[0],e[1]*1,1),t}pull_document_chunk(e,t,n,i){let a=g.docxarchive_pull_document_chunk(this.__wbg_ptr,e,t,n,i);if(a[3])throw d(a[2]);var o=r(a[0],a[1]).slice();return g.__wbindgen_free(a[0],a[1]*1,1),o}resource_usage(){let e=g.docxarchive_resource_usage(this.__wbg_ptr);if(e[3])throw d(e[2]);var t=r(e[0],e[1]).slice();return g.__wbindgen_free(e[0],e[1]*1,1),t}to_markdown(){let e,t;try{let i=g.docxarchive_to_markdown(this.__wbg_ptr);var n=i[0],r=i[1];if(i[3])throw n=0,r=0,d(i[2]);return e=n,t=r,o(n,r)}finally{g.__wbindgen_free(e,t,1)}}};Symbol.dispose&&(e.prototype[Symbol.dispose]=e.prototype.free);function t(){return{__proto__:null,\"./docx_parser_bg.js\":{__proto__:null,__wbg___wbindgen_throw_6b64449b9b9ed33c:function(e,t){throw Error(o(e,t))},__wbg_error_a6fa202b58aa1cd3:function(e,t){let n,r;try{n=e,r=t,console.error(o(e,t))}finally{g.__wbindgen_free(n,r,1)}},__wbg_new_227d7c05414eb861:function(){return Error()},__wbg_stack_3b0d974bbf31e44f:function(e,t){let n=t.stack,r=u(n,g.__wbindgen_malloc,g.__wbindgen_realloc),i=h;a().setInt32(e+4,i,!0),a().setInt32(e+0,r,!0)},__wbindgen_cast_0000000000000001:function(e,t){return o(e,t)},__wbindgen_init_externref_table:function(){let e=g.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const n=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>g.__wbg_docxarchive_free(e>>>0,1));function r(e,t){return e>>>=0,c().subarray(e/1,e/1+t)}let i=null;function a(){return(i===null||i.buffer.detached===!0||i.buffer.detached===void 0&&i.buffer!==g.memory.buffer)&&(i=new DataView(g.memory.buffer)),i}function o(e,t){return e>>>=0,te(e,t)}let s=null;function c(){return(s===null||s.byteLength===0)&&(s=new Uint8Array(g.memory.buffer)),s}function l(e){return e==null}function ee(e,t){let n=t(e.length*1,1)>>>0;return c().set(e,n/1),h=e.length,n}function u(e,t,n){if(n===void 0){let n=m.encode(e),r=t(n.length,1)>>>0;return c().subarray(r,r+n.length).set(n),h=n.length,r}let r=e.length,i=t(r,1)>>>0,a=c(),o=0;for(;o<r;o++){let t=e.charCodeAt(o);if(t>127)break;a[i+o]=t}if(o!==r){o!==0&&(e=e.slice(o)),i=n(i,r,r=o+e.length*3,1)>>>0;let t=c().subarray(i+o,i+r),a=m.encodeInto(e,t);o+=a.written,i=n(i,r,o,1)>>>0}return h=o,i}function d(e){let t=g.__wbindgen_externrefs.get(e);return g.__externref_table_dealloc(e),t}let f=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0});f.decode();let p=0;function te(e,t){return p+=t,p>=2146435072&&(f=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0}),f.decode(),p=t),f.decode(c().subarray(e,e+t))}const m=new TextEncoder;`encodeInto`in m||(m.encodeInto=function(e,t){let n=m.encode(e);return t.set(n),{read:e.length,written:n.length}});let h=0,g;function _(e,t){return g=e.exports,i=null,s=null,g.__wbindgen_start(),g}async function v(e,t){if(typeof Response==`function`&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming==`function`)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if(e.ok&&n(e.type)&&e.headers.get(`Content-Type`)!==`application/wasm`)console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\",t);else throw t}let r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{let n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}function n(e){switch(e){case`basic`:case`cors`:case`default`:return!0}return!1}}async function y(e){if(g!==void 0)return g;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn(`using deprecated parameters for the initialization function; pass a single object instead`));let n=t();(typeof e==`string`||typeof Request==`function`&&e instanceof Request||typeof URL==`function`&&e instanceof URL)&&(e=fetch(e));let{instance:r,module:i}=await v(await e,n);return _(r,i)}async function b(e){return g=void 0,i=null,s=null,y(e)}var x=class e extends Error{code;constructor(t,n){super(n),this.name=`OoxmlError`,this.code=t,Object.setPrototypeOf(this,e.prototype)}},S=class e extends Error{code=`ooxml-resource-limit`;details;constructor(t,n){super(t),this.name=`OoxmlResourceLimitError`;let r=n.violation,i=Object.freeze({format:r.format,operation:r.operation,resource:r.resource,metric:r.metric,...r.part===void 0?{}:{part:r.part},limit:r.limit,observed:r.observed,configurable:r.configurable,usage:Object.freeze({archiveEntryCount:r.usage.archiveEntryCount,declaredInflatedBytes:r.usage.declaredInflatedBytes,...r.usage.largestInflatedEntryBytes===void 0?{}:{largestInflatedEntryBytes:r.usage.largestInflatedEntryBytes},distinctInflatedBytes:r.usage.distinctInflatedBytes,operationInflatedBytes:r.usage.operationInflatedBytes})});this.details=Object.freeze({stage:n.stage,violation:i}),Object.setPrototypeOf(this,e.prototype)}},ne=class e extends RangeError{code=`ooxml-decoded-image-limit`;constructor(t,n,r){super(`OOXML decoded image limit exceeded: ${t} ${r} > ${n}`),this.metric=t,this.limit=n,this.observed=r,this.name=`OoxmlDecodedImageLimitError`,Object.setPrototypeOf(this,e.prototype)}};function re(e){if(!e.startsWith(`data:`))return null;let t=e.indexOf(`,`);if(t===-1)return null;let n=atob(e.slice(t+1)),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var ie=class{state=`uninitialized`;generationValue=0;readiness;poisonListeners=new Set;constructor(e,t,n){this.initialize=e,this.reinitialize=t,this.normalizeFailure=n}get generation(){return this.generationValue}get poisoned(){return this.state===`poisoned`}onPoison(e){return this.poisonListeners.add(e),()=>this.poisonListeners.delete(e)}async ensureReady(){if(this.state!==`ready`){if(!this.readiness){let e=this.state===`uninitialized`?this.initialize:this.reinitialize;this.readiness=Promise.resolve().then(e).then(()=>{this.generationValue+=1,this.state=`ready`,this.readiness=void 0},e=>{throw this.readiness=void 0,e})}await this.readiness}}run(e){try{return e()}catch(e){let t=this.normalizeFailure(e);throw t?(this.poison(t),t):e}}tryRunReady(e){if(this.state!==`ready`)return{current:!1};let t=this.generationValue,n=this.run(e);return this.state!==`ready`||t!==this.generationValue?{current:!1}:{current:!0,generation:t,value:n}}poison(e){this.state=`poisoned`,this.readiness=void 0;for(let t of this.poisonListeners)t(e)}assertCurrent(e){if(this.state!==`ready`||e!==this.generationValue)throw Error(`WASM archive session belongs to a discarded runtime generation`)}},C=class e extends Error{code=`parser-crashed`;constructor(t){super(t),this.name=`WasmTrapError`,Object.setPrototypeOf(this,e.prototype)}};function ae(e){let t=globalThis.WebAssembly?.RuntimeError;return t&&e instanceof t||e instanceof RangeError?!0:e instanceof Error?e.name===`RuntimeError`||e.name===`CompileError`||e.name===`LinkError`||e.name===`InternalError`||e.name===`OOMError`:!1}function w(e){try{if((typeof e!=`object`||!e)&&typeof e!=`function`)return;let t=Reflect.get(e,`__destroy_into_raw`);typeof t==`function`&&Reflect.apply(t,e,[])}catch{}}function T(e,t){return e({module_or_path:t})}var oe=class{runtime;wasmInput=null;currentArchive=null;constructor(e,t={}){this.init=e,this.options=t,this.runtime=new ie(()=>this.invokeConfigured(this.init),()=>this.invokeConfigured(this.options.reinit??this.init),E),this.runtime.onPoison(()=>this.dropPoisonedArchive())}setWasmInput(e){this.wasmInput=e,this.runtime.ensureReady().catch(()=>void 0)}setWasmUrl(e){this.setWasmInput(e)}get archive(){return this.currentArchive}setArchive(e){this.freeArchive(),this.currentArchive=e}disposeArchive(){this.freeArchive()}get poisoned(){return this.runtime.poisoned}async ensureReady(){await this.runtime.ensureReady()}run(e){return this.runtime.run(e)}poison(){this.runtime.poison(new C(`WASM parser was recycled`))}invokeConfigured(e){return this.wasmInput===null?Promise.reject(Error(`WasmParserHost: setWasmInput was never called`)):T(e,this.wasmInput)}freeArchive(){this.currentArchive!==null&&this.options.freeArchive&&this.options.freeArchive(this.currentArchive),this.currentArchive=null}dropPoisonedArchive(){let e=this.currentArchive;this.currentArchive=null,w(e)}};function E(e){return ae(e)?new C(`WASM parser trapped and was recycled: ${e instanceof Error?e.message:String(e)}`):null}function D(e){return typeof e==`number`&&Number.isSafeInteger(e)&&e>0}function se(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return D(t.requiredBytes)&&D(t.offeredBytes)&&t.requiredBytes>t.offeredBytes}var O=class e extends RangeError{code=`ooxml-insufficient-credit`;requiredBytes;offeredBytes;constructor(t){super(`Pull unit requires ${t.requiredBytes} bytes but credit is ${t.offeredBytes}`),this.name=`PullSessionInsufficientCreditError`,this.requiredBytes=t.requiredBytes,this.offeredBytes=t.offeredBytes,Object.setPrototypeOf(this,e.prototype)}};function k(e){if(e instanceof O)return e;let t=e instanceof Error?e.message:String(e);if(!t.startsWith(`OOXML_INSUFFICIENT_CREDIT:`))return;let n;try{n=JSON.parse(t.slice(26))}catch{return}if(!n||typeof n!=`object`||Array.isArray(n))return;let r=n;if(!(r.code!==`ooxml-insufficient-credit`||!se(r)))return new O(r)}function ce(e,t,n){let r=k(e);if(!(!r||r.offeredBytes!==t||r.requiredBytes>n))return r}const A=`OOXML_RESOURCE_LIMIT:`;function j(e){return typeof e==`number`&&Number.isSafeInteger(e)&&e>=0}function M(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return j(t.archiveEntryCount)&&j(t.declaredInflatedBytes)&&(t.largestInflatedEntryBytes===void 0||j(t.largestInflatedEntryBytes))&&j(t.distinctInflatedBytes)&&j(t.operationInflatedBytes)}function N(e){let t;try{t=JSON.parse(new TextDecoder().decode(e))}catch{throw TypeError(`OOXML resource usage checkpoint is not valid JSON`)}if(!M(t))throw TypeError(`OOXML resource usage checkpoint is invalid`);return t}function le(e){return e===`docx`||e===`xlsx`||e===`pptx`}function P(e){return e===`container`||e===`decompression`||e===`parsing`||e===`serialization`||e===`layout`||e===`rendering`||e===`worker`}function F(e,t){return typeof e==`string`&&e.length>0&&e.length<=t&&!/[\\u0000-\\u001f\\u007f]/u.test(e)}function I(e){return F(e,128)&&/^[a-z0-9][a-z0-9-]*$/u.test(e)}function L(e){return!F(e,4096)||e.startsWith(`/`)||e.startsWith(`\\\\`)||e.includes(`\\\\`)||e.includes(`?`)||e.includes(`#`)||e.includes(`://`)||/^[a-z]:/iu.test(e)?!1:e.split(`/`).every(e=>e!==``&&e!==`.`&&e!==`..`)}const R=new Map([[`archive-entry:declared-inflated-bytes`,{stage:`container`,part:`required`}],[`archive-entry:actual-inflated-bytes`,{stage:`decompression`,part:`required`}],[`archive:entry-count`,{stage:`container`,part:`forbidden`}],[`archive:central-directory-bytes`,{stage:`container`,part:`forbidden`,configurable:!1}],[`archive:distinct-inflated-bytes`,{stage:`decompression`,part:`required`}],[`xml-event:bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`xml-context:bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`xml-tree:depth`,{stage:`parsing`,part:`optional`,configurable:!1}],[`worksheet-row:projected-bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`worksheet-shell:projected-bytes`,{stage:`parsing`,part:`optional`,configurable:!1}]]),z=new Set([...R.keys()].map(e=>e.slice(0,e.indexOf(`:`)))),B=new Set([...R.keys()].map(e=>e.slice(e.indexOf(`:`)+1)));function V(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return!le(t.format)||!F(t.operation,256)||!I(t.resource)||!I(t.metric)||!j(t.limit)||!j(t.observed)||typeof t.configurable!=`boolean`||!M(t.usage)?!1:!(`part`in t)||L(t.part)}function H(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;if(!P(t.stage)||!V(t.violation))return!1;let n=t.violation,r=R.get(`${n.resource}:${n.metric}`);return r?t.stage!==r.stage||r.configurable===!1&&n.configurable!==!1?!1:r.part===`required`?n.part!==void 0:r.part===`forbidden`?n.part===void 0:!0:!(z.has(n.resource)&&B.has(n.metric))}function U(e){return{archiveEntryCount:e.archiveEntryCount,declaredInflatedBytes:e.declaredInflatedBytes,...e.largestInflatedEntryBytes===void 0?{}:{largestInflatedEntryBytes:e.largestInflatedEntryBytes},distinctInflatedBytes:e.distinctInflatedBytes,operationInflatedBytes:e.operationInflatedBytes}}function ue(e){if(!H(e))return;let t=e.violation,n={stage:e.stage,violation:{format:t.format,operation:t.operation,resource:t.resource,metric:t.metric,...t.part===void 0?{}:{part:t.part},limit:t.limit,observed:t.observed,configurable:t.configurable,usage:U(t.usage)}};return H(n)?n:void 0}function W(e){let t=e.violation;return`OOXML resource limit exceeded${t.part?` for ${t.part}`:``}: ${t.metric} ${t.observed} > ${t.limit}`}function de(e){let t=e instanceof Error?e.message:String(e);if(!t.startsWith(A))return;let n;try{n=JSON.parse(t.slice(21))}catch{return}if(!n||typeof n!=`object`)return;let r=n;if(!(r.code!==`ooxml-resource-limit`||!H(r.details)))return new S(W(r.details),r.details)}function fe(e){if(e instanceof ne)return{message:e.message,errorName:e.name,code:e.code,decodedImage:{metric:e.metric,limit:e.limit,observed:e.observed}};let t=k(e);if(t)return{message:t.message,errorName:t.name,code:t.code,insufficientCredit:{requiredBytes:t.requiredBytes,offeredBytes:t.offeredBytes}};let n=e instanceof x||e instanceof S?e:de(e);if(n instanceof S){let e=ue(n.details);return e?{message:typeof n.message==`string`?n.message:W(e),errorName:`OoxmlResourceLimitError`,code:`ooxml-resource-limit`,resourceLimit:e}:{message:`Invalid OOXML resource-limit error payload`,errorName:`Error`}}if(n instanceof x)return{message:typeof n.message==`string`?n.message:String(n.message),errorName:F(n.name,128)?n.name:`OoxmlError`,...I(n.code)?{code:n.code}:{}};let r=e instanceof Error?e.message:String(e);if(typeof r==`string`&&r.startsWith(A))return{message:`Invalid OOXML resource-limit payload`,errorName:`Error`};let i=e instanceof Error?e:Error(r),a=i;return{message:typeof i.message==`string`?i.message:String(i.message),errorName:F(i.name,128)?i.name:`Error`,...typeof a.code==`string`?{code:a.code}:{}}}function G(e){try{return fe(e)}catch{return{message:`Worker operation failed with an unreadable error`,errorName:`Error`}}}function pe(e){return e.byteOffset===0&&e.byteLength===e.buffer.byteLength&&e.buffer instanceof ArrayBuffer?e.buffer:e.slice().buffer}Object.freeze({maxArchiveEntryBytes:134217728,maxTotalInflatedBytes:268435456,maxArchiveEntries:4096});function me(e){return[e.maxArchiveEntryBytes===null?0n:BigInt(e.maxArchiveEntryBytes),e.maxTotalInflatedBytes===null?0n:BigInt(e.maxTotalInflatedBytes),e.maxArchiveEntries===null?0n:BigInt(e.maxArchiveEntries)]}const K=`ooxml-pull-v1`;function q(e,t){if(!Number.isSafeInteger(e)||e<=0)throw RangeError(`${t} must be a positive safe integer`)}function he(e){if(!(typeof e==`string`&&e.length>0||typeof e==`number`&&Number.isSafeInteger(e)&&e>0))throw RangeError(`session id must be a non-empty string or positive safe integer`)}var J=class{owner;queue=Promise.resolve();leases=new Map;retainedBytes=0;retainedCount=0;maxRetainedBytes;maxRetainedCount;cleanups=new Set;pendingFatalCleanups=[];poisonRunning=!1;fatal;constructor(e){this.maxRetainedBytes=e?.maxRetainedBytes??64*1024*1024,this.maxRetainedCount=e?.maxRetainedCount??256,q(this.maxRetainedBytes,`max retained lease bytes`),q(this.maxRetainedCount,`max retained lease count`)}enqueue(e){let t=this.queue.then(e,e);return this.queue=t.then(()=>void 0,()=>void 0),t}acquire(e){return this.owner===void 0?(this.owner=e,!0):this.owner===e}release(e){this.owner===e&&(this.owner=void 0)}retainLease(e,t,n){if(!Number.isSafeInteger(n)||n<0)throw RangeError(`retained lease bytes are invalid`);let r=this.leases.get(e)??new Map;if(r.has(t))throw Error(`driver returned a duplicate lease id`);if(this.retainedCount+1>this.maxRetainedCount)throw RangeError(`retained lease count exceeds limit`);if(this.retainedBytes+n>this.maxRetainedBytes)throw RangeError(`retained lease bytes exceed limit`);r.set(t,n),this.leases.set(e,r),this.retainedCount++,this.retainedBytes+=n}releaseLease(e,t){let n=this.leases.get(e),r=n?.get(t);r!==void 0&&(n?.delete(t),n?.size===0&&this.leases.delete(e),this.retainedCount--,this.retainedBytes-=r)}registerCleanup(e){return this.fatal?(this.poisonRunning?this.pendingFatalCleanups.push(e):this.enqueue(e).catch(()=>void 0),()=>void 0):(this.cleanups.add(e),()=>this.cleanups.delete(e))}get fatalError(){return this.fatal}get registeredHostCount(){return this.cleanups.size}async poison(e){if(this.fatal??=e,this.poisonRunning)return this.fatal;this.poisonRunning=!0,this.pendingFatalCleanups.push(...this.cleanups);try{let e;for(;(e=this.pendingFatalCleanups.shift())!==void 0;)await e().catch(()=>void 0)}finally{this.poisonRunning=!1}return this.fatal}},ge=class{options;coordinator;coordinatorOwner=Symbol(`pull-session-host`);unregisterCleanup;sequence=0;unacked;leases=new Map;activeDriverLeases=new Set;nextWireLeaseId;cancelRequested=!1;cancelComplete=!1;closeRequested=!1;closeComplete=!1;driverCancelComplete=!1;driverCloseComplete=!1;completed=!1;constructor(e){he(e.sessionId),q(e.operationId,`operation id`),q(e.generation,`generation`),q(e.maxByteCredit,`max byte credit`),e.wireLeaseIdStart!==void 0&&q(e.wireLeaseIdStart,`wire lease id start`),this.options=e,this.coordinator=e.coordinator,this.nextWireLeaseId=e.wireLeaseIdStart??1,this.unregisterCleanup=this.coordinator.registerCleanup(()=>this.forceFatalCleanup())}dispatch(e,t){return this.coordinator.enqueue(async()=>{let n=await this.execute(e);try{t(n.response,n.transfer)}catch(e){throw await this.rollbackFailedPost(n),e}})}async rollbackFailedPost(e){let t=e.response;if(t.kind===`chunk`){let n=t.leaseId===void 0?void 0:this.leases.get(t.leaseId);try{await this.options.driver.disposeInvalidChunk?.({payload:t.payload,byteLength:t.byteLength,done:t.done,leaseId:n?.driverLeaseId,retainedBytes:n?.retainedBytes,transfer:e.transfer})}catch{}}this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);for(let[e,t]of[...this.leases])try{await this.options.driver.releaseLease?.(t.driverLeaseId)}catch{}finally{this.leases.delete(e),this.activeDriverLeases.delete(t.driverLeaseId),this.coordinator.releaseLease(this.coordinatorOwner,e)}if(this.cancelRequested=!0,!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch{}this.unregisterCleanup()}async execute(e){try{if(this.isStaleLifecycle(e)){let t=e.kind===`cancel`?`cancel`:`close`;return this.sameOperationIdentity(e)?{response:this.accepted(e,t,!0)}:{response:this.errorResponse(e,{message:`stale lifecycle targets another session or operation`,errorName:`PullSessionProtocolError`,code:`ooxml-stale-lifecycle`})}}this.validateCommandIdentity(e);let t=this.coordinator.fatalError;if(t)return e.kind===`pull`?{response:this.errorResponse(e,t)}:(e.kind===`cancel`?await this.cancel():e.kind===`close`?await this.close():e.kind===`release`&&await this.release(e.leaseId),{response:this.accepted(e,e.kind)});switch(e.kind){case`pull`:return await this.pull(e);case`ack`:return await this.ack(e.sequence),{response:this.accepted(e,`ack`)};case`release`:return await this.release(e.leaseId),{response:this.accepted(e,`release`)};case`cancel`:return await this.cancel(),{response:this.accepted(e,`cancel`)};case`close`:return await this.close(),{response:this.accepted(e,`close`)}}}catch(t){let n=G(t);return n.code===`ooxml-resource-limit`&&(n=await this.coordinator.poison(n)),{response:this.errorResponse(e,n)}}}async pull(e){if(this.closeRequested||this.cancelRequested||this.completed)throw Error(`pull session is closed`);if(this.unacked)throw Error(`previous chunk is not acknowledged`);if(!Number.isSafeInteger(e.sequence)||e.sequence<0||e.sequence!==this.sequence)throw Error(`pull command sequence mismatch`);if(this.validateHostCredit(e.byteCredit),!this.coordinator.acquire(this.coordinatorOwner))throw Error(`another operation has an unacknowledged package chunk`);let t;try{t=await this.options.driver.pull(e.byteCredit)}catch(e){throw this.coordinator.release(this.coordinatorOwner),e}let n=!1,r=!1,i,a;try{let o=this.options.driver.measureChunk(t),s=this.arrayBufferTransferBytes(t.transfer);if(o<s)throw RangeError(`measured chunk bytes are below ArrayBuffer transfer bytes`);if(a=Math.max(o,s),t.leaseId!==void 0){if(q(t.leaseId,`lease id`),t.retainedBytes===void 0)throw Error(`retained lease bytes are required`);if(this.activeDriverLeases.has(t.leaseId))throw r=!0,Error(`driver returned an active duplicate lease id`);i=this.allocateWireLeaseId(),this.coordinator.retainLease(this.coordinatorOwner,i,t.retainedBytes),this.leases.set(i,{driverLeaseId:t.leaseId,retainedBytes:t.retainedBytes}),this.activeDriverLeases.add(t.leaseId),n=!0}else if(t.retainedBytes!==void 0)throw Error(`retained lease bytes require a lease id`);if(!Number.isSafeInteger(a)||a<0)throw RangeError(`host chunk byte length must be a non-negative safe integer`);if(a>e.byteCredit)throw RangeError(`host chunk exceeds byte credit`)}catch(e){let a;try{await this.options.driver.disposeInvalidChunk?.(t)}catch(e){a=e}if(n&&i!==void 0)try{await this.release(i)}catch(e){a??=e}else if(t.leaseId!==void 0&&!r)try{await this.options.driver.releaseLease?.(t.leaseId)}catch(e){a??=e}if(r)try{await this.cancel()}catch(e){a??=e}throw this.coordinator.release(this.coordinatorOwner),a||e}return this.unacked={sequence:this.sequence,done:t.done},{response:{kind:`chunk`,protocol:K,...this.identity(),requestId:e.requestId,sequence:this.sequence,byteLength:a,done:t.done,payload:t.payload,leaseId:i,usage:this.resourceUsage()},transfer:t.transfer}}async ack(e){if(!Number.isSafeInteger(e)||e<0)throw RangeError(`invalid ack sequence`);if(e<this.sequence)return;if(!this.unacked||e!==this.sequence)throw Error(`ack sequence mismatch`);let t=this.unacked.done;await this.options.driver.acknowledge?.(e),this.unacked=void 0,this.coordinator.release(this.coordinatorOwner),this.sequence++,t&&(this.completed=!0,this.maybeUnregisterCompleted())}async release(e){q(e,`wire lease id`);let t=this.leases.get(e);t&&(await this.options.driver.releaseLease?.(t.driverLeaseId),this.leases.delete(e),this.activeDriverLeases.delete(t.driverLeaseId),this.coordinator.releaseLease(this.coordinatorOwner,e),this.maybeUnregisterCompleted())}async cancel(){if(this.cancelComplete)return;this.cancelRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;try{await this.releaseAllLeases()}catch(t){e=t}if(!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch(t){e??=t}if(e)throw e;this.cancelComplete=!0,this.unregisterCleanup()}async close(){if(this.closeComplete)return;this.closeRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;try{await this.releaseAllLeases()}catch(t){e=t}if(!this.driverCloseComplete)try{await this.options.driver.close?.(),this.driverCloseComplete=!0}catch(t){e??=t}if(e)throw e;this.closeComplete=!0,this.unregisterCleanup()}async releaseAllLeases(){let e;for(let t of[...this.leases.keys()])try{await this.release(t)}catch(t){e??=t}if(e)throw e}validateCommandIdentity(e){if(e.protocol!==`ooxml-pull-v1`||e.sessionId!==this.options.sessionId||e.operationId!==this.options.operationId||e.generation!==this.options.generation||!Number.isSafeInteger(e.requestId)||e.requestId<=0)throw Error(`stale or mismatched pull session command`)}validateHostCredit(e){if(q(e,`byte credit`),e>this.options.maxByteCredit)throw RangeError(`byte credit exceeds host maximum`)}accepted(e,t,n=!1){return{kind:`accepted`,protocol:K,...n?{sessionId:e.sessionId,operationId:e.operationId,generation:e.generation}:this.identity(),requestId:e.requestId,command:t,usage:this.resourceUsage()}}identity(){return{sessionId:this.options.sessionId,operationId:this.options.operationId,generation:this.options.generation}}isStaleLifecycle(e){return(e.kind===`cancel`||e.kind===`close`)&&e.protocol===`ooxml-pull-v1`&&Number.isSafeInteger(e.requestId)&&e.requestId>0&&Number.isSafeInteger(e.generation)&&e.generation>0&&e.generation<this.options.generation}sameOperationIdentity(e){return e.sessionId===this.options.sessionId&&e.operationId===this.options.operationId}errorResponse(e,t){return{kind:`error`,protocol:K,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:t,usage:this.errorResourceUsage()}}async forceFatalCleanup(){this.cancelRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;for(let t of[...this.leases.keys()])try{await this.release(t)}catch(t){e??=t}if(!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch(t){e??=t}if(e)throw e;this.unregisterCleanup()}allocateWireLeaseId(){if(!Number.isSafeInteger(this.nextWireLeaseId)||this.nextWireLeaseId<=0)throw RangeError(`wire lease id space exhausted`);return this.nextWireLeaseId++}arrayBufferTransferBytes(e){let t=0;for(let n of e??[])if(n instanceof ArrayBuffer&&(t+=n.byteLength,!Number.isSafeInteger(t)))throw RangeError(`ArrayBuffer transfer bytes overflow`);return t}maybeUnregisterCompleted(){this.completed&&this.leases.size===0&&this.unregisterCleanup()}resourceUsage(){return this.options.driver.resourceUsage?.()}errorResourceUsage(){try{return this.resourceUsage()}catch{return}}};const Y=67108864;var _e=class{coordinator=new J;host=null;identity=null;constructor(e,t=e=>e(this.requireArchive())){this.archive=e,this.executeArchive=t}open(e){if(this.host)throw Error(`a DOCX document pull session is already active`);this.executeArchive(t=>{t.open_document_cursor(e.operationId,e.generation)});let t=0;this.identity=e,this.host=new ge({...e,maxByteCredit:Y,coordinator:this.coordinator,driver:{pull:n=>{let r;try{r=this.executeArchive(r=>r.pull_document_chunk(t,e.operationId,e.generation,n))}catch(e){throw ce(e,n,Y)||e}let i=pe(r);return{payload:i,byteLength:i.byteLength,done:this.executeArchive(e=>e.document_chunk_done()),transfer:[i]}},measureChunk:({payload:e})=>e.byteLength,acknowledge:n=>{if(n!==t)throw Error(`DOCX document acknowledgement sequence mismatch`);this.executeArchive(n=>n.acknowledge_document_chunk(t,e.operationId,e.generation)),t+=1},cancel:()=>this.executeArchive(e=>e.cancel_document_cursor()),close:()=>this.executeArchive(e=>e.close_document_session()),resourceUsage:()=>{let e=this.executeArchive(e=>e.document_cursor_resource_usage?.());return e?N(e):void 0}}})}dispatch(e,t){return!this.host||!this.identity?(t({protocol:K,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:G(Error(`DOCX document pull session is not open`))}),Promise.resolve()):this.host.dispatch(e,t)}async reset(){if(this.host)try{this.archive()&&this.executeArchive(e=>e.close_document_session())}finally{this.host=null,this.identity=null,this.coordinator=new J}}requireArchive(){let e=this.archive();if(!e)throw Error(`No docx loaded`);return e}};function ve(e){return!!e&&typeof e==`object`&&e.protocol===`ooxml-pull-v1`}const X=new oe(y,{freeArchive:e=>e.free(),reinit:b}),Z=new _e(()=>X.archive,e=>X.run(()=>{let t=X.archive;if(!t)throw Error(`No docx loaded`);return e(t)}));let Q=0;const $=(e,t)=>self.postMessage(e,t);self.onmessage=async t=>{let n=t.data;if(ve(n)){try{await Z.dispatch(n,$)}catch(e){$({protocol:K,kind:`error`,sessionId:n.sessionId,operationId:n.operationId,generation:n.generation,requestId:n.requestId,error:G(e)})}return}if(n.type===`init`){X.setWasmInput(re(n.wasmUrl)??n.wasmUrl);return}let r=n.id;try{if(await X.ensureReady(),n.type!==`parse`&&X.archive){let e=X.archive;X.run(()=>e.assert_healthy())}if(n.type===`parse`){await Z.reset();let[t,i,a]=me(n.resourcePolicy),o=new Uint8Array(n.data);X.run(()=>{let n=new e(o,t,i,a);X.setArchive(n)}),Q+=1;let s={sessionId:Q,operationId:Q,generation:Q};Z.open(s),$({type:`documentSessionOpened`,id:r,...s});return}let t=X.archive;if(n.type===`extractImage`){if(!t)throw Error(`No docx loaded`);let e=X.run(()=>t.extract_image(n.path).buffer),i={type:`imageExtracted`,id:r,bytes:e};self.postMessage(i,[e]);return}if(n.type===`resourceUsage`){if(!t)throw Error(`No docx loaded`);$({type:`resourceUsage`,id:r,usage:N(X.run(()=>t.resource_usage()))});return}if(n.type===`toMarkdown`){if(!t)throw Error(`No docx loaded`);$({type:`markdownRendered`,id:r,markdown:X.run(()=>t.to_markdown())});return}}catch(e){$({type:`error`,id:r,...G(e)})}};", U = typeof self < "u" && self.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", H], { type: "text/javascript;charset=utf-8" });
function Te(e) {
	let t;
	try {
		if (t = U && (self.URL || self.webkitURL).createObjectURL(U), !t) throw "";
		let n = new Worker(t, {
			type: "module",
			name: e?.name
		});
		return n.addEventListener("error", () => {
			(self.URL || self.webkitURL).revokeObjectURL(t);
		}), n;
	} catch {
		return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(H), {
			type: "module",
			name: e?.name
		});
	}
}
//#endregion
//#region packages/docx/src/wasm/docx_parser_bg.wasm?url
var Ee = new URL("docx_parser_bg.wasm", import.meta.url).href;
//#endregion
//#region packages/docx/src/bookmark-nav.ts
function De(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.pages) for (let e of n.bookmarkStarts) e.name !== "" && !t.has(e.name) && t.set(e.name, n.pageIndex);
	return t;
}
//#endregion
//#region packages/docx/src/embedded-fonts.ts
async function Oe(e, t) {
	let n = e.embeddedFonts;
	if (!n || n.length === 0) return [];
	let r = (await Promise.all(n.map(async (e) => {
		try {
			let n = await t(e.partPath);
			return {
				family: e.fontName,
				bytes: n,
				odttf: e.partPath.toLowerCase().endsWith(".odttf"),
				fontKey: e.fontKey,
				weight: ke(e.style),
				style: Ae(e.style)
			};
		} catch {
			return null;
		}
	}))).filter((e) => e !== null);
	return r.length === 0 ? [] : Ce(r);
}
function ke(e) {
	return e === "bold" || e === "boldItalic" ? "bold" : "normal";
}
function Ae(e) {
	return e === "italic" || e === "boldItalic" ? "italic" : "normal";
}
//#endregion
//#region packages/docx/src/document.ts
var W = class e {
	_metrics = null;
	_document = null;
	_source = null;
	_meta = null;
	_bookmarkPages = null;
	_mode = "main";
	_worker;
	_bridge;
	_rawParts = new he({
		maxEntries: 64,
		maxBytes: p
	});
	_embeddedFontFaces = [];
	_googleFontFaces = [];
	_localMetricFontFaces = [];
	_fetchImage = (e, t) => this.getImage(e, t);
	constructor(e, t, n, r) {
		this._worker = e, this._mode = t, j(this, n), this._bridge = new E(this._worker, {
			correlate: (e) => "protocol" in e && e.protocol === "ooxml-pull-v1" ? e.requestId : "id" in e ? e.id : void 0,
			toError: (e) => {
				if (!("protocol" in e || e.type !== "error")) return Object.assign(u(e), {
					...e.reason === void 0 ? {} : { reason: e.reason },
					...e.outgoingColumnIndex === void 0 ? {} : { outgoingColumnIndex: e.outgoingColumnIndex },
					...e.outgoingColumnCount === void 0 ? {} : { outgoingColumnCount: e.outgoingColumnCount },
					...e.incomingColumnCount === void 0 ? {} : { incomingColumnCount: e.incomingColumnCount }
				});
			}
		});
		let i = new URL(r ?? Ee, location.href).href;
		this._bridge.post({
			type: "init",
			wasmUrl: i
		});
	}
	static async load(n, r = {}) {
		let i = t(r), o = Date.now(), s = r.mode ?? "main", c = new a({
			enabled: !0,
			format: "docx",
			mode: s,
			policy: i.policy,
			onMetrics: i.onResourceMetrics,
			emitToConsole: i.debug
		});
		try {
			if (s === "worker" && (typeof Worker > "u" || typeof OffscreenCanvas > "u")) throw Error("mode: 'worker' requires Worker and OffscreenCanvas support");
			let t;
			if (typeof n == "string") {
				let e = await fetch(n);
				if (!e.ok) throw Error(`Failed to fetch: ${e.status} ${e.statusText}`);
				t = await e.arrayBuffer();
			} else t = n;
			t = se(await _(t, r.password)), c.setSourceBytes(t.byteLength), c.checkpoint("container ready");
			let a = s === "worker" ? (await import("./render-worker-host-B8HAb_sK.js")).createRenderWorker() : new Te(), l;
			try {
				if (l = new e(a, s, o, r.wasmUrl), l._metrics = c, await l._parse(t, i.policy, s === "worker" ? !!r.useGoogleFonts : !1, r.workerTimeoutMs, (e) => c.observeUsage(e)), s === "worker" && l._mode === "main" && (c.setMode("main"), console.warn("[ooxml] mode: 'worker' fell back to main-thread rendering because this document requires DOM OpenType vertical glyph selection.")), r.math && l._mode === "worker" && console.warn("[ooxml] the math engine is unavailable in mode: 'worker'; equations will be skipped. Use mode: 'main' for documents with equations."), l._mode === "main" && r.useGoogleFonts && l._document && (l._googleFontFaces = await de(L(l._document), A)), l._mode === "main" && l._document?.embeddedFonts?.length) {
					let e = l;
					l._embeddedFontFaces = await Oe(l._document, (t) => e.getFontBytes(t));
				}
				let n;
				l._mode === "main" && l._document && (n = await k(l._document), l._localMetricFontFaces = n.faces);
				let u;
				if (l._mode === "main" && r.math && l._document && I(l._document) && (u = await _e(l._document, r.math)), l._mode === "main" && l._document && l._source) {
					let e = D(l);
					e.services = N(l._source, {
						localMetrics: n?.metrics,
						useGoogleFonts: !!r.useGoogleFonts,
						embeddedFaces: l._embeddedFontFaces,
						googleFaces: l._googleFontFaces,
						mathResources: u?.records,
						mathDrawables: u?.drawables
					});
					let t = e.services;
					ge(l._source, t, e.defaultCurrentDateMs).layoutVariants.defaultLayout;
				}
				return await l._resourceUsage(r.workerTimeoutMs ?? 1e3).then((e) => c.observeUsage(e), () => void 0), c.checkpoint("model and layout ready"), c.succeed({ pages: l.pageCount }), l;
			} catch (e) {
				let t = l;
				throw h(a, t ? () => t.destroy() : void 0), e;
			}
		} catch (e) {
			throw c.fail(e), e;
		}
	}
	async _parse(e, t, n = !1, r, i) {
		let a = await this._bridge.request((r) => this._mode === "worker" ? {
			type: "parse",
			id: r,
			data: e,
			resourcePolicy: t,
			useGoogleFonts: n,
			defaultCurrentDateMs: D(this).defaultCurrentDateMs
		} : {
			type: "parse",
			id: r,
			data: e,
			resourcePolicy: t
		}, [e], { timeoutMs: r });
		if ("protocol" in a) throw Error("DOCX parse open returned a pull-protocol response");
		if (this._mode === "worker") if ("usage" in a && a.usage && i?.(a.usage), a.type === "mainThreadVerticalFallback") {
			let e = await F(this._bridge.transport(R), a, {
				timeoutMs: r,
				onUsage: i
			});
			this._source = e.source, this._document = e.document, this._meta = null, this._mode = "main";
		} else this._meta = a.meta;
		else {
			let e = a, t = await F(this._bridge.transport(R), e, {
				timeoutMs: r,
				onUsage: i
			});
			this._source = t.source, this._document = t.document;
		}
	}
	destroy() {
		this._bridge.terminate(), this._document = null, this._source = null, this._meta = null, D(this).services = null, this._bookmarkPages = null, this._rawParts.clear(), this._embeddedFontFaces.length > 0 && (we(this._embeddedFontFaces), this._embeddedFontFaces = []), this._googleFontFaces.length > 0 && (le(this._googleFontFaces), this._googleFontFaces = []), this._localMetricFontFaces.length > 0 && (z(this._localMetricFontFaces), this._localMetricFontFaces = []), d(this._fetchImage), n(this._fetchImage);
	}
	async getImage(e, t) {
		return this._rawParts.get(e, t, () => this._bridge.request((t) => ({
			type: "extractImage",
			id: t,
			path: e
		})).then((e) => {
			let n = e.bytes;
			return new Blob([n], { type: t });
		}));
	}
	async getFontBytes(e) {
		let t = (await this._bridge.request((t) => ({
			type: "extractImage",
			id: t,
			path: e
		}))).bytes;
		return new Uint8Array(t);
	}
	async _resourceUsage(e) {
		return (await this._bridge.request((e) => ({
			type: "resourceUsage",
			id: e
		}), void 0, { timeoutMs: e })).usage;
	}
	async getResourceMetrics() {
		let e = this._metrics;
		if (!e) throw Error("Document not loaded");
		return m(e, (e) => this._resourceUsage(e));
	}
	async toMarkdown() {
		return (await this._bridge.request((e) => ({
			type: "toMarkdown",
			id: e
		}))).markdown;
	}
	get pageCount() {
		return this._meta ? this._meta.pageCount : this._document ? this._getLayout()?.pages.length ?? 0 : 0;
	}
	get mode() {
		return this._mode;
	}
	get document() {
		if (this._meta && !this._document) throw Error("the raw document model stays in the worker in mode: 'worker'; use mode: 'main' if you need direct model access");
		if (!this._document) throw Error("Document not loaded");
		return this._document;
	}
	get comments() {
		return this._meta?.comments ?? this._document?.comments ?? [];
	}
	get footnotes() {
		return this._meta?.footnotes ?? this._document?.footnotes ?? [];
	}
	get endnotes() {
		return this._meta?.endnotes ?? this._document?.endnotes ?? [];
	}
	_getLayout() {
		if (!this._document) return null;
		let e = D(this).services;
		if (!e) throw Error("Document layout services are not initialized");
		let t = ve(e);
		if (!t) throw Error("Document layout variant store is not initialized");
		return t.defaultLayout;
	}
	_getBookmarkPages() {
		if (this._bookmarkPages) return this._bookmarkPages;
		if (this._meta) return this._bookmarkPages = new Map(this._meta.bookmarkPages), this._bookmarkPages;
		let e = this._getLayout();
		return e ? (this._bookmarkPages = De(e), this._bookmarkPages) : null;
	}
	getBookmarkPage(e) {
		return this._getBookmarkPages()?.get(e);
	}
	pageSize(e) {
		if (this._meta) {
			let t = this._meta.pageSizes, n = t[Math.max(0, Math.min(e, t.length - 1))];
			return n ? {
				widthPt: n.widthPt,
				heightPt: n.heightPt
			} : {
				widthPt: 0,
				heightPt: 0
			};
		}
		if (!this._document) return {
			widthPt: 0,
			heightPt: 0
		};
		let t = this._getLayout();
		if (!t || t.pages.length === 0) return {
			widthPt: 0,
			heightPt: 0
		};
		let n = Math.max(0, Math.min(e, t.pages.length - 1)), r = t.pages[n].geometry;
		return {
			widthPt: r.widthPt,
			heightPt: r.heightPt
		};
	}
	renderPage(e, t, n = {}) {
		if (this._mode === "worker") throw Error("renderPage(canvas) is unavailable in mode: 'worker'; use renderPageToBitmap() and paint it via an ImageBitmapRenderingContext");
		if (!this._source) throw Error("Document not loaded");
		return O(this._source, e, t, {
			...n,
			fetchImage: this._fetchImage,
			layoutServices: D(this).services ?? void 0,
			defaultCurrentDateMs: D(this).defaultCurrentDateMs
		});
	}
	async renderPageToBitmap(e, t = {}) {
		let { onTextRun: n, ...r } = t, i = {
			...r,
			dpr: r.dpr ?? l()
		};
		if (this._mode === "worker") {
			let t = await this._bridge.request((t) => ({
				type: "renderPage",
				id: t,
				pageIndex: e,
				opts: i
			}));
			if (n) for (let e of t.runs) n(e);
			return t.bitmap;
		}
		let a = new OffscreenCanvas(1, 1);
		return await this.renderPage(a, e, {
			...i,
			onTextRun: n
		}), a.transferToImageBitmap();
	}
	async collectPageRuns(e, t = {}) {
		let n = {
			...t,
			dpr: t.dpr ?? l()
		};
		if (this._mode === "worker") return (await this._bridge.request((t) => ({
			type: "collectRuns",
			id: t,
			pageIndex: e,
			opts: n
		}))).runs;
		let r = D(this), i = r.services;
		if (!i) throw Error("Document layout services are not initialized");
		return M(i, e, {
			currentDate: n.currentDate,
			defaultCurrentDateMs: r.defaultCurrentDateMs,
			width: n.width
		});
	}
};
//#endregion
//#region packages/docx/src/tate-chu-yoko-overlay.ts
function G(e, t) {
	if (!e.eastAsianVert) return 1;
	let n = t(e.text);
	return !(n > 0) || e.w >= n ? 1 : e.w / n;
}
//#endregion
//#region packages/docx/src/text-layer.ts
function K(e, t, n, r, i, a) {
	e.innerHTML = "";
	for (let o of t) {
		let t = document.createElement("span");
		t.textContent = o.text;
		let s = o.transform ?? "";
		if (a && o.eastAsianVert) {
			let e = G(o, a(o.font));
			e !== 1 && (s = `${s ? `${s} ` : ""}scaleX(${e})`);
		}
		let c = s ? `transform:${s};transform-origin:top left;` : "", l = i ? o.hyperlink : void 0, u = l ? "pointer" : "text", d = o.letterSpacingPx === void 0 ? "0" : `${o.letterSpacingPx}px`;
		t.style.cssText = `position:absolute;left:${V(o.x, n)};top:${V(o.y, r)};font:${o.font};line-height:${o.h}px;letter-spacing:${d};` + c + `white-space:pre;color:transparent;cursor:${u};pointer-events:all;`, l && i && (t.title = l.kind === "external" ? l.url : l.ref, t.addEventListener("click", () => i(l))), e.appendChild(t);
	}
}
function q(e, t, n, r, i, a, o = {}) {
	e.innerHTML = "";
	let s = o.match ?? "rgba(255, 214, 0, 0.42)", c = o.active ?? "rgba(255, 140, 0, 0.55)";
	for (let o of n) {
		let n = o.active ? c : s;
		for (let s of o.slices) {
			let o = t[s.runIndex];
			if (!o) continue;
			let c = a(o.font), l = ye(o.text, s.start, s.end, c), u = o.letterSpacingPx ?? 0, d = Math.max(0, Math.min(s.start, o.text.length)), f = Math.max(d, Math.min(s.end, o.text.length)), p = [...o.text.slice(0, d)].length, m = [...o.text.slice(d, f)].length, h = l.x + p * u, g = l.width + Math.max(0, m - 1) * u, _ = G(o, c), v = h * _, y = g * _;
			if (y <= 0) continue;
			let b = document.createElement("div"), x = o.transform ? `transform:${o.transform};transform-origin:top left;` : "";
			b.style.cssText = `position:absolute;left:${V(o.x + v, r)};top:${V(o.y, i)};width:${V(y, r)};height:${V(o.h, i)};` + x + `background:${n};pointer-events:none;`, e.appendChild(b);
		}
	}
}
//#endregion
//#region packages/docx/src/find.ts
var J = class {
	_pageRuns = /* @__PURE__ */ new Map();
	_matches = [];
	_active = -1;
	_generation = 0;
	_runsRevision = 0;
	constructor(e, t) {
		this._pageCount = e, this._collectPageRuns = t;
	}
	invalidate() {
		this._generation++, this._runsRevision++, this._pageRuns.clear(), this._matches = [], this._active = -1;
	}
	pageRuns(e) {
		return this._pageRuns.get(e);
	}
	setPageRuns(e, t) {
		this._runsRevision++, this._pageRuns.set(e, t);
	}
	_matchAt(e) {
		return this._matches[e];
	}
	pageHighlights(e) {
		let t = [];
		for (let n = 0; n < this._matches.length; n++) {
			let r = this._matches[n];
			r.page === e && t.push({
				slices: r.slices,
				active: n === this._active
			});
		}
		return t;
	}
	activePage() {
		let e = this._matchAt(this._active);
		return e ? e.page : null;
	}
	matches() {
		return this._matches.map((e, t) => ({
			matchIndex: t,
			text: e.text,
			location: { page: e.page }
		}));
	}
	async find(e, t = {}) {
		let n = ++this._generation;
		if (e.length === 0) return this._runsRevision++, this._pageRuns.clear(), this._matches = [], this._active = -1, [];
		let r = this._runsRevision, i = new Map(this._pageRuns), a = this._pageCount();
		for (let e = 0; e < a; e++) {
			let t = i.get(e);
			if (!t) {
				try {
					t = await this._collectPageRuns(e);
				} catch (e) {
					if (n !== this._generation) return [];
					throw e;
				}
				if (n !== this._generation) return [];
				i.set(e, t);
			}
		}
		if (n !== this._generation) return [];
		let o = r === this._runsRevision ? i : new Map([...i, ...this._pageRuns]), s = [];
		for (let n = 0; n < a; n++) {
			let r = o.get(n) ?? [], i = te(r);
			for (let a of oe(i, e, t)) {
				let e = a.slices.map((e) => r[e.runIndex].text.slice(e.start, e.end)).join("");
				s.push({
					page: n,
					text: e,
					slices: a.slices
				});
			}
		}
		return this._runsRevision++, this._pageRuns = o, this._matches = s, this._active = -1, this.matches();
	}
	next() {
		return this._active = ie(this._active, this._matches.length), this._activePublic();
	}
	prev() {
		return this._active = v(this._active, this._matches.length), this._activePublic();
	}
	_activePublic() {
		let e = this._matchAt(this._active);
		return e ? {
			matchIndex: this._active,
			text: e.text,
			location: { page: e.page }
		} : null;
	}
}, Y = Symbol("DocxViewer.borrowedDocument"), X = class e {
	_documentOwner;
	get _doc() {
		return this._documentOwner.current;
	}
	_borrowed;
	_hostWindow;
	_currentPage = 0;
	_scale = null;
	_canvas;
	_wrapper;
	_canvasMount;
	_textLayer = null;
	_highlightLayer = null;
	_find;
	_measureCtx = null;
	_opts;
	_mode;
	_renderDispatcher;
	_errorRouter;
	_destroyed = !1;
	static fromDocument(t, n, r = {}) {
		return new e(t, {
			...r,
			[Y]: n
		});
	}
	constructor(e, t = {}) {
		this._canvas = e, this._opts = t;
		let n = t[Y];
		this._borrowed = n !== void 0, this._mode = w("DocxViewer", t.mode, n), this._documentOwner = new g("DocxViewer", n ?? null, !1);
		let r = e.ownerDocument?.defaultView ?? (typeof window < "u" ? window : null);
		if (!r) throw Error("DocxViewer requires a canvas with an active Window");
		this._hostWindow = r, this._canvasMount = new ae(e, {
			wrapperCssText: "position:relative;display:inline-block;vertical-align:top;",
			forceDisplayBlock: !0
		}), this._wrapper = this._canvasMount.wrapper, this._renderDispatcher = new S(e, this._mode === "worker"), this._errorRouter = new re("DocxViewer", t.onError);
		let i = new ne(this._wrapper, t.enableTextSelection === !0);
		this._textLayer = i.textLayer, this._highlightLayer = i.highlightLayer, this._find = new J(() => this.pageCount, (e) => this._collectPageRuns(e));
	}
	async load(e) {
		if (this._destroyed) throw Error("DocxViewer is destroyed");
		if (this._borrowed) throw Error("DocxViewer.load() is unsupported on a Viewer created by fromDocument(); the borrowed document is already loaded.");
		try {
			if (!await this._documentOwner.replace(() => W.load(e, {
				useGoogleFonts: this._opts.useGoogleFonts,
				maxZipEntryBytes: this._opts.maxZipEntryBytes,
				resourceLimits: this._opts.resourceLimits,
				debug: this._opts.debug,
				onResourceMetrics: this._opts.onResourceMetrics,
				workerTimeoutMs: this._opts.workerTimeoutMs,
				wasmUrl: this._opts.wasmUrl,
				math: this._opts.math,
				mode: this._mode
			}), () => {
				this._renderDispatcher.begin(), this._find.invalidate();
			})) return;
			if (this._destroyed) throw Error("DocxViewer is destroyed");
			this._currentPage = 0, this._find.invalidate(), await this._render();
		} catch (e) {
			if (this._destroyed) throw Error("DocxViewer is destroyed");
			let t = e instanceof Error ? e : Error(String(e));
			if (this._opts.onError) {
				this._opts.onError(t);
				return;
			}
			throw t;
		}
	}
	get pageCount() {
		return this._doc?.pageCount ?? 0;
	}
	get currentPage() {
		return this._currentPage;
	}
	get canvasElement() {
		return this._canvas;
	}
	async goToPage(e) {
		this._doc && (this._currentPage = Math.max(0, Math.min(e, this.pageCount - 1)), await this._render());
	}
	async nextPage() {
		await this.goToPage(this._currentPage + 1);
	}
	async prevPage() {
		await this.goToPage(this._currentPage - 1);
	}
	_naturalWidthPx() {
		return !this._doc || this._doc.pageCount === 0 ? 0 : this._doc.pageSize(this._currentPage).widthPt * s;
	}
	_renderWidth() {
		if (this._scale === null) return this._opts.width;
		let e = this._naturalWidthPx();
		return e <= 0 ? this._opts.width : Math.round(e * this._scale);
	}
	getScale() {
		if (this._scale !== null) return this._scale;
		let e = this._naturalWidthPx();
		return e <= 0 ? 1 : this._opts.width && this._opts.width > 0 ? this._opts.width / e : 1;
	}
	_zoomMin() {
		return this._opts.zoomMin ?? .1;
	}
	_zoomMax() {
		return this._opts.zoomMax ?? 4;
	}
	async setScale(e) {
		let t = y(e, this._zoomMin(), this._zoomMax()), n = t !== this.getScale();
		this._scale = t, await this._render(), n && this._opts.onScaleChange?.(t);
	}
	async zoomIn() {
		await this.setScale(T(this.getScale()));
	}
	async zoomOut() {
		await this.setScale(C(this.getScale()));
	}
	async fitWidth() {
		await this._fit("width");
	}
	async fitPage() {
		await this._fit("page");
	}
	async _fit(e) {
		if (!this._doc || this._doc.pageCount === 0) return;
		let t = this._doc.pageSize(this._currentPage), n = this._fitContainer();
		if (!n) return;
		let r = b({
			contentWidth: t.widthPt * s,
			contentHeight: t.heightPt * s,
			containerWidth: n.clientWidth,
			containerHeight: n.clientHeight
		}, e);
		r <= 0 || await this.setScale(r);
	}
	_fitContainer() {
		return this._opts.container ?? this._wrapper.parentElement ?? null;
	}
	async findText(e, t = {}) {
		if (!this._doc) return [];
		let n = await this._find.find(e, t);
		return this._redrawHighlights(), n;
	}
	async findNext() {
		return this._activateMatch(this._find.next());
	}
	async findPrev() {
		return this._activateMatch(this._find.prev());
	}
	clearFind() {
		this._find.invalidate(), this._redrawHighlights();
	}
	async _activateMatch(e) {
		return e ? (e.location.page === this._currentPage ? this._redrawHighlights() : await this.goToPage(e.location.page), e) : (this._redrawHighlights(), null);
	}
	_redrawHighlights() {
		let e = this._find.pageRuns(this._currentPage) ?? [];
		this._buildHighlightLayer(e);
	}
	async getResourceMetrics() {
		if (!this._doc) throw Error("Document not loaded");
		return await this._doc.getResourceMetrics();
	}
	destroy() {
		this._destroyed || (this._destroyed = !0, this._errorRouter.close(), this._renderDispatcher.destroy(), P(this._canvas), this._documentOwner.close(), this._find.invalidate(), this._canvasMount.restore());
	}
	async _render() {
		let e = this._renderDispatcher.begin();
		try {
			await this._renderPage(e);
		} catch (t) {
			this._renderDispatcher.isCurrent(e) && this._reportRenderError(t);
		}
	}
	_reportRenderError(e) {
		this._errorRouter.report(e);
	}
	async _renderPage(e) {
		if (!this._doc) return;
		let t = this._mode === "worker", n = this._renderWidth(), r = [], i = (e) => r.push(e);
		if (t) {
			let t = this._opts.dpr ?? (typeof window < "u" && window.devicePixelRatio || 1), r = await this._doc.renderPageToBitmap(this._currentPage, {
				width: n,
				dpr: this._opts.dpr,
				defaultTextColor: this._opts.defaultTextColor,
				showTrackChanges: this._opts.showTrackChanges,
				currentDate: this._opts.currentDate,
				onTextRun: i
			});
			if (!this._renderDispatcher.commitBitmap(e, r, {
				cssWidth: Math.round(r.width / t),
				cssHeight: Math.round(r.height / t)
			})) return;
		} else if (await this._doc.renderPage(this._canvas, this._currentPage, {
			...this._opts,
			width: n,
			onTextRun: i
		}), !this._renderDispatcher.isCurrent(e)) return;
		this._textLayer && this._buildTextLayer(this._textLayer, r), this._find.setPageRuns(this._currentPage, r), this._buildHighlightLayer(r), this._opts.onPageChange?.(this._currentPage, this.pageCount);
	}
	_buildHighlightLayer(e) {
		let t = this._highlightLayer;
		if (!t) return;
		let { width: n, height: r } = this._canvasCssPx();
		q(t, e, this._find.pageHighlights(this._currentPage), n, r, (e) => this._measureForFont(e), this._opts.findHighlightColors);
	}
	_canvasCssPx() {
		return {
			width: parseFloat(this._canvas.style.width) || this._canvas.width,
			height: parseFloat(this._canvas.style.height) || this._canvas.height
		};
	}
	_measureForFont(e) {
		this._measureCtx ||= document.createElement("canvas").getContext("2d");
		let t = this._measureCtx;
		return t ? (t.font = e, (e) => t.measureText(e).width) : (e) => e.length;
	}
	async _collectPageRuns(e) {
		return this._doc ? this._doc.collectPageRuns(e, {
			width: this._renderWidth(),
			dpr: this._opts.dpr,
			defaultTextColor: this._opts.defaultTextColor,
			showTrackChanges: this._opts.showTrackChanges,
			currentDate: this._opts.currentDate
		}) : [];
	}
	_buildTextLayer(e, t) {
		let { width: n, height: r } = this._canvasCssPx();
		K(e, t, n, r, this._hyperlinkHandler(), (e) => this._measureForFont(e));
	}
	_hyperlinkHandler() {
		return this._opts.enableHyperlinks === !1 ? void 0 : this._opts.onHyperlinkClick || ((e) => {
			if (e.kind === "external") {
				o(e.url, void 0, this._hostWindow);
				return;
			}
			let t = this._doc?.getBookmarkPage(e.ref);
			t !== void 0 && this.goToPage(t);
		});
	}
}, je = 150, Me = "0 1px 3px rgba(0,0,0,0.2)", Z = Symbol("DocxScrollViewer.borrowedDocument"), Q = class e {
	_documentOwner;
	get _doc() {
		return this._documentOwner.current;
	}
	_borrowed;
	_opts;
	_container;
	_wrapper;
	_scrollHost;
	_spacer;
	_mode;
	_scale = 1;
	_scaleEstablished = !1;
	_pendingScale = null;
	_slots = /* @__PURE__ */ new Map();
	_free = [];
	_heights = [];
	_lastRange = null;
	_lastTopIndex = -1;
	_scrollListener = null;
	_destroyed = !1;
	_measureCtx;
	_bitmapInFlight = /* @__PURE__ */ new Set();
	_renderEpoch = 0;
	_settleTimer = null;
	_wheelListener = null;
	_pendingZoomAnchor = null;
	_resizeObserver = null;
	_prevBase = 0;
	_lastFitWidth = 0;
	_pageShadow;
	_find = new J(() => this.pageCount, (e) => this._collectPageRuns(e));
	_findActive = !1;
	static fromDocument(t, n, r = {}) {
		return new e(t, {
			...r,
			[Z]: n
		});
	}
	constructor(e, t = {}) {
		if (e.tagName === "CANVAS") throw Error("DocxScrollViewer takes a container element (e.g. a <div>), not a <canvas> — the viewer creates and manages its own canvases. Pass a block container; for the single-page canvas API use DocxViewer.");
		this._container = e, this._opts = t, this._pageShadow = t.pageShadow ?? Me;
		let n = t[Z];
		this._borrowed = n !== void 0, n ? (this._documentOwner = new g("DocxScrollViewer", n, !1), this._mode = w("DocxScrollViewer", t.mode, n)) : (this._documentOwner = new g("DocxScrollViewer"), this._mode = w("DocxScrollViewer", t.mode, void 0)), this._wrapper = document.createElement("div"), this._wrapper.style.cssText = "position:relative;width:100%;height:100%;overflow:hidden;", this._scrollHost = document.createElement("div"), this._scrollHost.style.cssText = "position:absolute;inset:0;overflow:auto;", this._scrollHost.style.scrollbarGutter = "stable", t.background && (this._scrollHost.style.background = t.background), this._spacer = document.createElement("div"), this._spacer.style.cssText = "position:absolute;top:0;left:0;width:1px;height:0;pointer-events:none;", this._scrollHost.appendChild(this._spacer), this._wrapper.appendChild(this._scrollHost), this._container.appendChild(this._wrapper), this._scrollListener = () => this._onScroll(), this._scrollHost.addEventListener("scroll", this._scrollListener), this._opts.enableZoom !== !1 && (this._wheelListener = (e) => {
			if (!(e.ctrlKey || e.metaKey) || (e.preventDefault(), e.deltaY === 0)) return;
			let t = this._scrollHost.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			this._pendingZoomAnchor = Number.isFinite(n) && Number.isFinite(r) ? {
				x: n,
				y: r
			} : null, this.setScale(x(this._scale, e.deltaY));
		}, this._scrollHost.addEventListener("wheel", this._wheelListener, { passive: !1 })), typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver(() => this._onResize()), this._resizeObserver.observe(this._container)), this._borrowed && this.relayout();
	}
	async load(e) {
		if (this._destroyed) throw Error("DocxScrollViewer is destroyed");
		if (this._borrowed) throw Error("DocxScrollViewer.load() is unsupported on a Viewer created by fromDocument(); the borrowed document is already loaded.");
		try {
			if (!await this._documentOwner.replace(() => W.load(e, {
				useGoogleFonts: this._opts.useGoogleFonts,
				maxZipEntryBytes: this._opts.maxZipEntryBytes,
				resourceLimits: this._opts.resourceLimits,
				debug: this._opts.debug,
				onResourceMetrics: this._opts.onResourceMetrics,
				workerTimeoutMs: this._opts.workerTimeoutMs,
				wasmUrl: this._opts.wasmUrl,
				math: this._opts.math,
				mode: this._mode
			}), (e) => {
				if (this._find.invalidate(), this._findActive = !1, e) {
					for (let [e, t] of [...this._slots]) this._recycleSlot(e, t);
					this._lastTopIndex = -1;
				}
			})) return;
			if (this._destroyed) throw Error("DocxScrollViewer is destroyed");
			this._find.invalidate(), this._findActive = !1, this.relayout();
		} catch (e) {
			if (this._destroyed) throw Error("DocxScrollViewer is destroyed");
			let t = e instanceof Error ? e : Error(String(e));
			if (this._opts.onError) {
				this._opts.onError(t);
				return;
			}
			throw t;
		}
	}
	get pageCount() {
		return this._doc?.pageCount ?? 0;
	}
	_pageWidthPx(e) {
		return this._doc.pageSize(e).widthPt * s * this._scale;
	}
	_pageHeightPx(e) {
		return this._doc.pageSize(e).heightPt * s * this._scale;
	}
	_fitWidthPx() {
		if (this._opts.width && this._opts.width > 0) return this._opts.width;
		let e = this._scrollHost.clientWidth || this._container.clientWidth;
		if (e <= 0) return 0;
		let { left: t, right: n } = this._padH(), r = e - t - n;
		return r > 0 ? r : 0;
	}
	_baseScale() {
		if (!this._doc || this._doc.pageCount === 0) return 0;
		let e = this._fitWidthPx();
		if (e <= 0) return 0;
		let t = this._doc.pageSize(0).widthPt;
		return t <= 0 ? 0 : e / (t * s);
	}
	relayout() {
		if (this._doc) {
			if (!this._scaleEstablished) {
				let e = this._baseScale();
				if (e > 0) {
					if (this._scale = e, this._prevBase = e, this._lastFitWidth = this._fitWidthPx(), this._scaleEstablished = !0, this._pendingScale !== null) {
						let e = this._pendingScale;
						this._pendingScale = null, e !== this._scale && (this._scale = e, this._opts.onScaleChange?.(e));
					}
				} else return;
			}
			this._recomputeHeights(), this._syncSpacer(), this._mountVisible();
		}
	}
	_recomputeHeights() {
		let e = this._doc.pageCount, t = Array(e);
		for (let n = 0; n < e; n++) t[n] = this._pageHeightPx(n);
		this._heights = t;
	}
	_gap() {
		return this._opts.gap ?? 16;
	}
	_overscan() {
		return this._opts.overscan ?? 1;
	}
	_pad() {
		let e = this._gap();
		return {
			leading: this._opts.paddingTop ?? e,
			trailing: this._opts.paddingBottom ?? e
		};
	}
	_padH() {
		let e = this._gap();
		return {
			left: this._opts.paddingLeft ?? e,
			right: this._opts.paddingRight ?? e
		};
	}
	_pageIndexAtOffset(e, t) {
		let { offsets: n } = e, r = 0, i = n.length - 1, a = 0;
		for (; r <= i;) {
			let e = r + i >> 1;
			n[e] <= t ? (a = e, r = e + 1) : i = e - 1;
		}
		return a;
	}
	_range() {
		return B(this._heights, this._gap(), this._scrollHost.scrollTop, this._scrollHost.clientHeight, this._overscan(), this._pad());
	}
	_syncSpacer() {
		let e = this._range();
		this._lastRange = e, this._spacer.style.height = `${e.totalHeight}px`, this._syncSpacerWidth();
	}
	_syncSpacerWidth() {
		let { left: e, right: t } = this._padH(), n = 0;
		for (let e = 0; e < this._heights.length; e++) {
			let t = this._pageWidthPx(e);
			t > n && (n = t);
		}
		this._spacer.style.width = `${n + e + t}px`;
	}
	_onScroll() {
		!this._doc || !this._scaleEstablished || this._mountVisible();
	}
	_mountVisible() {
		if (!this._doc || this._doc.pageCount === 0) return;
		let e = this._range();
		this._lastRange = e;
		for (let [t, n] of [...this._slots]) (t < e.start || t > e.end) && this._recycleSlot(t, n);
		for (let t = e.start; t <= e.end; t++) if (this._slots.has(t)) this._positionSlot(this._slots.get(t), t, e);
		else {
			let n = this._acquireSlot();
			this._positionSlot(n, t, e), this._slots.set(t, n), this._renderSlot(t, n);
		}
		e.topIndex !== this._lastTopIndex && (this._lastTopIndex = e.topIndex, this._opts.onVisiblePageChange?.(e.topIndex, this._doc.pageCount));
	}
	_applyPageShadow(e) {
		this._pageShadow !== !1 && (e.style.boxShadow = this._pageShadow);
	}
	_acquireSlot() {
		let e = this._free.pop();
		if (e) return this._scrollHost.appendChild(e.wrapper), e;
		let t = document.createElement("div");
		t.style.cssText = "position:absolute;";
		let n = document.createElement("canvas");
		n.style.cssText = "display:block;background:#fff;", this._applyPageShadow(n), t.appendChild(n);
		let r = null;
		this._opts.enableTextSelection && (r = document.createElement("div"), r.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;user-select:text;-webkit-user-select:text;", t.appendChild(r));
		let i = document.createElement("div");
		return i.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;", t.appendChild(i), this._scrollHost.appendChild(t), {
			wrapper: t,
			canvas: n,
			textLayer: r,
			highlightLayer: i,
			renderedPage: -1,
			renderedScale: -1,
			dispatcher: new S(n, this._mode === "worker")
		};
	}
	_recycleSlot(e, t) {
		this._slots.delete(e), t.dispatcher.destroy(), this._destroyed || (t.dispatcher = new S(t.canvas, this._mode === "worker")), t.textLayer && (t.textLayer.innerHTML = "", t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = ""), t.highlightLayer.innerHTML = "", t.highlightLayer.style.transform = "", t.highlightLayer.style.transformOrigin = "", t.renderedPage = -1, t.renderedScale = -1, t.wrapper.remove(), this._free.push(t);
	}
	_positionSlot(e, t, n) {
		e.wrapper.style.top = `${n.offsets[t]}px`;
		let r = this._pageWidthPx(t), i = this._pageHeightPx(t);
		e.wrapper.style.width = `${r}px`, e.wrapper.style.height = `${i}px`;
		let { left: a } = this._padH(), o = this._scrollHost.clientWidth;
		e.wrapper.style.left = `${Math.max(a, (o - r) / 2)}px`;
	}
	_dpr() {
		return this._opts.dpr ?? (typeof window < "u" && window.devicePixelRatio || 1);
	}
	_renderSlot(e, t) {
		if (!this._doc || t.renderedPage === e) return;
		t.renderedPage = e;
		let n = this._dpr(), r = this._pageWidthPx(e), i = this._renderEpoch, a = this._scale, o = t.dispatcher, s = o.begin();
		if (this._mode === "worker") {
			this._renderSlotBitmap(e, t, r, n, a, o, s);
			return;
		}
		let c = [], l = !!this._opts.enableTextSelection && !!t.textLayer, u = l || this._findActive, d = u ? (e) => c.push(e) : void 0;
		this._doc.renderPage(t.canvas, e, {
			width: r,
			dpr: n,
			defaultTextColor: this._opts.defaultTextColor,
			showTrackChanges: this._opts.showTrackChanges,
			onTextRun: d
		}).then(() => {
			if (!(!o.isCurrent(s) || i !== this._renderEpoch || this._slots.get(e) !== t || t.renderedPage !== e)) {
				if (t.renderedScale = a, l && t.textLayer) {
					let { width: e, height: n } = this._canvasCssPx(t.canvas);
					K(t.textLayer, c, e, n, this._hyperlinkHandler(), (e) => this._measureForFont(e));
				}
				u && this._refreshFindRuns(e, c), this._redrawSlotHighlights(e, t);
			}
		}).catch((n) => {
			o.isCurrent(s) && i === this._renderEpoch && this._slots.get(e) === t && t.renderedPage === e && this._reportRenderError(n);
		});
	}
	_hyperlinkHandler() {
		return this._opts.enableHyperlinks === !1 ? void 0 : this._opts.onHyperlinkClick || ((e) => {
			if (e.kind === "external") {
				o(e.url);
				return;
			}
			let t = this._doc?.getBookmarkPage(e.ref);
			t !== void 0 && this.scrollToPage(t);
		});
	}
	_measureForFont(e) {
		this._measureCtx === void 0 && (this._measureCtx = document.createElement("canvas").getContext("2d"));
		let t = this._measureCtx;
		return !t || typeof t.measureText != "function" ? (e) => e.length : (t.font = e, (e) => t.measureText(e).width);
	}
	_canvasCssPx(e) {
		return {
			width: parseFloat(e.style.width) || e.width,
			height: parseFloat(e.style.height) || e.height
		};
	}
	_reportRenderError(e) {
		if (this._destroyed) return;
		let t = e instanceof Error ? e : Error(String(e));
		this._opts.onError ? this._opts.onError(t) : console.error("[ooxml] DocxScrollViewer render failed:", t);
	}
	async _renderSlotBitmap(e, t, n, r, i, a = t.dispatcher, o = a.begin()) {
		if (this._bitmapInFlight.has(e) || this._slots.get(e) !== t) return;
		let s = this._renderEpoch;
		this._bitmapInFlight.add(e);
		let c = !1, l = !!this._opts.enableTextSelection && !!t.textLayer, u = l || this._findActive, d = [];
		try {
			let f = await this._doc.renderPageToBitmap(e, {
				width: n,
				dpr: r,
				defaultTextColor: this._opts.defaultTextColor,
				showTrackChanges: this._opts.showTrackChanges,
				onTextRun: u ? (e) => d.push(e) : void 0
			});
			if (!a.isCurrent(o) || s !== this._renderEpoch || this._slots.get(e) !== t || t.renderedPage !== e) {
				f.close();
				return;
			}
			if (!a.commitBitmap(o, f, {
				cssWidth: Math.round(f.width / r),
				cssHeight: Math.round(f.height / r)
			})) return;
			if (t.renderedScale = i, t.textLayer && (t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = "", l)) {
				let { width: e, height: n } = this._canvasCssPx(t.canvas);
				K(t.textLayer, d, e, n, this._hyperlinkHandler(), (e) => this._measureForFont(e));
			}
			u && this._refreshFindRuns(e, d), this._redrawSlotHighlights(e, t), c = !0;
		} catch (n) {
			a.isCurrent(o) && s === this._renderEpoch && this._slots.get(e) === t && t.renderedPage === e && this._reportRenderError(n);
		} finally {
			this._bitmapInFlight.delete(e);
			let n = this._slots.get(e);
			!c && n && (n !== t || s !== this._renderEpoch || !a.isCurrent(o)) && !this._bitmapInFlight.has(e) && !this._destroyed && this._renderSlotBitmap(e, n, this._pageWidthPx(e), this._dpr(), this._scale);
		}
	}
	setScale(e) {
		let t = this._opts.zoomMin ?? .1, n = this._opts.zoomMax ?? 4, r = Math.min(n, Math.max(t, e)), i = this._pendingZoomAnchor;
		if (this._pendingZoomAnchor = null, !this._doc || this._doc.pageCount === 0 || !this._scaleEstablished) {
			this._pendingScale = r;
			return;
		}
		if (r === this._scale) return;
		let a = this._scale, o = i ? i.y : 0, s = this._range(), c = this._scrollHost.scrollTop, l = c + o, u = this._pageIndexAtOffset(s, l), d = this._heights[u] || 0, f = d > 0 ? (l - s.offsets[u]) / d : 0;
		f = Math.min(1, Math.max(0, f));
		let p = this._padH().left, m = this._scrollHost.scrollLeft || 0;
		this._renderEpoch++, this._scale = r, this._recomputeHeights();
		let h = B(this._heights, this._gap(), 0, this._scrollHost.clientHeight, this._overscan(), this._pad());
		this._spacer.style.height = `${h.totalHeight}px`, this._syncSpacerWidth();
		let g = Math.max(0, h.totalHeight - this._scrollHost.clientHeight), _ = (h.offsets[u] ?? 0) + f * (this._heights[u] || 0), v = l < (s.offsets[0] ?? 0) ? c : _ - o;
		if (this._scrollHost.scrollTop = Math.min(g, Math.max(0, v)), i) {
			let e = Math.max(0, (this._spacer.offsetWidth || 0) - this._scrollHost.clientWidth);
			this._scrollHost.scrollLeft = ee(m, i.x - p, a, r, { maxScroll: e });
		}
		this._previewVisible(), this._scheduleSettle(), this._opts.onScaleChange?.(r);
	}
	getScale() {
		return this._scaleEstablished ? this._scale : this._pendingScale ?? 1;
	}
	zoomIn() {
		this.setScale(T(this.getScale()));
	}
	zoomOut() {
		this.setScale(C(this.getScale()));
	}
	fitWidth() {
		this._fit("width");
	}
	fitPage() {
		this._fit("page");
	}
	_fit(e) {
		if (!this._doc || this._doc.pageCount === 0) return;
		let t = this._doc.pageSize(0), n = b({
			contentWidth: t.widthPt * s,
			contentHeight: t.heightPt * s,
			containerWidth: this._fitWidthPx(),
			containerHeight: this._scrollHost.clientHeight
		}, e);
		n <= 0 || this.setScale(n);
	}
	_previewVisible() {
		if (!this._doc || this._doc.pageCount === 0) return;
		let e = this._range();
		this._lastRange = e;
		for (let [t, n] of [...this._slots]) (t < e.start || t > e.end) && this._recycleSlot(t, n);
		for (let t = e.start; t <= e.end; t++) {
			let n = this._slots.get(t);
			if (n) this._previewSlot(n, t, e);
			else {
				let n = this._acquireSlot();
				this._positionSlot(n, t, e), this._slots.set(t, n), this._renderSlot(t, n);
			}
		}
		e.topIndex !== this._lastTopIndex && (this._lastTopIndex = e.topIndex, this._opts.onVisiblePageChange?.(e.topIndex, this._doc.pageCount));
	}
	_previewSlot(e, t, n) {
		if (this._positionSlot(e, t, n), e.canvas.style.width = `${this._pageWidthPx(t)}px`, e.canvas.style.height = `${this._pageHeightPx(t)}px`, e.textLayer && e.renderedScale > 0) {
			let t = this._scale / e.renderedScale;
			e.textLayer.style.transformOrigin = "0 0", e.textLayer.style.transform = `scale(${t})`;
		}
	}
	_scheduleSettle() {
		this._settleTimer !== null && clearTimeout(this._settleTimer), this._settleTimer = setTimeout(() => {
			this._settleTimer = null, this._settleRender();
		}, je);
	}
	_settleRender() {
		if (!(this._destroyed || !this._doc || this._doc.pageCount === 0)) for (let [e, t] of [...this._slots]) t.renderedScale !== this._scale && this._settleSlot(e, t);
	}
	_settleSlot(e, t) {
		if (!this._doc) return;
		let n = this._dpr(), r = this._pageWidthPx(e), i = this._scale, a = this._renderEpoch;
		if (this._mode === "worker") {
			this._renderSlotBitmap(e, t, r, n, i);
			return;
		}
		let o = document.createElement("canvas");
		o.style.cssText = "display:block;background:#fff;", this._applyPageShadow(o);
		let s = new S(o, !1), c = s.begin(), l = [], u = !!this._opts.enableTextSelection && !!t.textLayer, d = u || this._findActive, f = d ? (e) => l.push(e) : void 0;
		this._doc.renderPage(o, e, {
			width: r,
			dpr: n,
			defaultTextColor: this._opts.defaultTextColor,
			showTrackChanges: this._opts.showTrackChanges,
			onTextRun: f
		}).then(() => {
			if (!s.isCurrent(c) || a !== this._renderEpoch || this._slots.get(e) !== t || t.renderedPage !== e) {
				s.destroy();
				return;
			}
			let n = t.canvas;
			if (t.dispatcher.destroy(), t.wrapper.insertBefore(o, n), n.remove(), t.canvas = o, t.dispatcher = s, t.renderedScale = i, t.textLayer && (t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = "", u)) {
				let { width: e, height: n } = this._canvasCssPx(o);
				K(t.textLayer, l, e, n, this._hyperlinkHandler(), (e) => this._measureForFont(e));
			}
			d && this._refreshFindRuns(e, l), this._redrawSlotHighlights(e, t);
		}).catch((n) => {
			s.isCurrent(c) && a === this._renderEpoch && this._slots.get(e) === t && t.renderedPage === e && this._reportRenderError(n), s.destroy();
		});
	}
	scrollToPage(e, t) {
		if (!this._doc || this._doc.pageCount === 0 || !this._scaleEstablished) return;
		let n = Math.max(0, Math.min(e, this._doc.pageCount - 1)), r = B(this._heights, this._gap(), 0, this._scrollHost.clientHeight, this._overscan(), this._pad()), i = r.offsets[n] ?? 0, a = Math.max(0, r.totalHeight - this._scrollHost.clientHeight), o = Math.min(a, Math.max(0, i)), s = this._scrollHost;
		typeof s.scrollTo == "function" ? s.scrollTo({
			top: o,
			behavior: t?.behavior ?? "auto"
		}) : this._scrollHost.scrollTop = o, this._mountVisible();
	}
	async findText(e, t = {}) {
		if (!this._doc) return [];
		this._findActive = e.length > 0;
		let n = await this._find.find(e, t);
		return this._redrawHighlights(), n;
	}
	async findNext() {
		return this._activateMatch(this._find.next());
	}
	async findPrev() {
		return this._activateMatch(this._find.prev());
	}
	clearFind() {
		this._findActive = !1, this._find.invalidate(), this._redrawHighlights();
	}
	async _activateMatch(e) {
		return e && this.scrollToPage(e.location.page), this._redrawHighlights(), e;
	}
	async _collectPageRuns(e) {
		return this._doc ? this._doc.collectPageRuns(e, {
			width: this._pageWidthPx(e),
			defaultTextColor: this._opts.defaultTextColor,
			showTrackChanges: this._opts.showTrackChanges
		}) : [];
	}
	_redrawHighlights() {
		for (let [e, t] of this._slots) this._redrawSlotHighlights(e, t);
	}
	_refreshFindRuns(e, t) {
		this._findActive && this._find.setPageRuns(e, t);
	}
	_redrawSlotHighlights(e, t) {
		if (!this._findActive) {
			t.highlightLayer.innerHTML = "";
			return;
		}
		let n = this._find.pageRuns(e);
		if (!n) {
			t.highlightLayer.innerHTML = "";
			return;
		}
		q(t.highlightLayer, n, this._find.pageHighlights(e), this._pageWidthPx(e), this._pageHeightPx(e), (e) => this._measureForFont(e), this._opts.findHighlightColors);
	}
	_onResize() {
		if (!this._doc || this._doc.pageCount === 0) return;
		if (!this._scaleEstablished) {
			this.relayout();
			return;
		}
		if (this._opts.refitOnResize === !1) {
			this._lastFitWidth = this._fitWidthPx(), this._mountVisible();
			return;
		}
		let e = this._baseScale();
		if (e <= 0) return;
		let t = this._fitWidthPx();
		if (t === this._lastFitWidth) {
			this._mountVisible();
			return;
		}
		this._lastFitWidth = t;
		let n = this._prevBase > 0 ? this._scale / this._prevBase : 1;
		this._prevBase = e, this.setScale(e * n), this._mountVisible();
	}
	get topVisiblePage() {
		return this._lastRange?.topIndex ?? 0;
	}
	mountedPageIndicesForTest() {
		return [...this._slots.keys()];
	}
	scaleForTest() {
		return this._scale;
	}
	baseScaleForTest() {
		return this._baseScale();
	}
	renderEpochForTest() {
		return this._renderEpoch;
	}
	resizeForTest() {
		this._onResize();
	}
	contentAtViewportYForTest(e) {
		let t = this._range(), n = this._scrollHost.scrollTop + e, r = this._pageIndexAtOffset(t, n), i = this._heights[r] || 0;
		return {
			page: r,
			frac: i > 0 ? Math.min(1, Math.max(0, (n - t.offsets[r]) / i)) : 0
		};
	}
	viewportYOfForTest(e, t) {
		return (this._range().offsets[e] ?? 0) + t * (this._heights[e] || 0) - this._scrollHost.scrollTop;
	}
	async getResourceMetrics() {
		if (!this._doc) throw Error("Document not loaded");
		return await this._doc.getResourceMetrics();
	}
	destroy() {
		if (!this._destroyed) {
			this._destroyed = !0, this._find.invalidate(), this._findActive = !1, this._scrollListener &&= (this._scrollHost.removeEventListener("scroll", this._scrollListener), null), this._wheelListener &&= (this._scrollHost.removeEventListener("wheel", this._wheelListener), null), this._resizeObserver?.disconnect(), this._resizeObserver = null, this._settleTimer !== null && (clearTimeout(this._settleTimer), this._settleTimer = null);
			for (let [e, t] of [...this._slots]) this._recycleSlot(e, t);
			this._free.length = 0, this._documentOwner.close(), this._wrapper.remove();
		}
	}
};
//#endregion
//#region packages/docx/src/types.ts
function $(e) {
	let t = [];
	for (let n of e.content) {
		if (n.type !== "paragraph") continue;
		let e = "";
		for (let t of n.runs) t.type === "text" && !t.noteRef && (e += t.text);
		e = e.trim(), e && t.push(e);
	}
	return t.join(" ");
}
//#endregion
//#region src/docx.ts
var Ne = /* @__PURE__ */ e({
	DocxDocument: () => W,
	DocxScrollViewer: () => Q,
	DocxViewer: () => X,
	OoxmlDecodedImageLimitError: () => r,
	OoxmlError: () => f,
	OoxmlResourceLimitError: () => c,
	autoResize: () => ce,
	buildDocxHighlightLayer: () => q,
	buildDocxTextLayer: () => K,
	isOoxmlDecodedImageLimitError: () => i,
	noteText: () => $,
	openExternalHyperlink: () => o
});
//#endregion
export { q as a, X as i, $ as n, K as o, Q as r, W as s, Ne as t };
