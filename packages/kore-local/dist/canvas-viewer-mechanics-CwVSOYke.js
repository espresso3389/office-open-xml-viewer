import { mn as e } from "./line-metrics-BdCACYlq.js";
//#region packages/core/src/errors/cfb-sniff.ts
var t = [
	208,
	207,
	17,
	224,
	161,
	177,
	26,
	225
], n = 4294967290, r = 512, i = 128, a = 4096, o = 8192, s = new Set([
	"WordDocument",
	"Workbook",
	"Book",
	"PowerPoint Document"
]), c = "EncryptionInfo";
function l(e) {
	if (e.length < r) return null;
	for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return null;
	let n = new DataView(e.buffer, e.byteOffset, e.byteLength), i = n.getUint16(30, !0);
	if (i !== 9 && i !== 12) return "cfb-unknown";
	let a = 1 << i, o = n.getUint32(48, !0), l = u(n, e.length, a, o);
	if (l === null) return "cfb-unknown";
	if (l.has(c)) return "encrypted";
	for (let e of l) if (s.has(e)) return "legacy-binary-format";
	return "cfb-unknown";
}
function u(e, t, n, r) {
	if (!m(r)) return null;
	let s = /* @__PURE__ */ new Set(), c = Math.floor(n / i);
	if (c < 1) return null;
	let l = /* @__PURE__ */ new Set(), u = r, h = 0, g = 0;
	for (; m(u) && !(h++ > o || l.has(u));) {
		l.add(u);
		let r = p(u, n);
		if (r < 0 || r + n > t) return null;
		for (let t = 0; t < c; t++) {
			if (g++ > a) return s;
			let n = d(e, r + t * i);
			n && s.add(n);
		}
		let o = f(e, t, n, u);
		if (o === null) break;
		u = o;
	}
	return s;
}
function d(e, t) {
	let n = e.getUint16(t + 64, !0);
	if (n < 2 || n > 64) return "";
	let r = n / 2 - 1, i = "";
	for (let n = 0; n < r; n++) {
		let r = e.getUint16(t + n * 2, !0);
		if (r === 0) break;
		i += String.fromCharCode(r);
	}
	return i;
}
function f(e, t, n, r) {
	let i = Math.floor(n / 4);
	if (i < 1) return null;
	let a = Math.floor(r / i), o = r % i;
	if (a >= 109) return null;
	let s = 76 + a * 4;
	if (s + 4 > t) return null;
	let c = e.getUint32(s, !0);
	if (!m(c)) return null;
	let l = p(c, n), u = l + o * 4;
	return l < 0 || u + 4 > t ? null : e.getUint32(u, !0);
}
function p(e, t) {
	return (e + 1) * t;
}
function m(e) {
	return e >= 0 && e <= n;
}
//#endregion
//#region packages/core/src/errors/cfb-read.ts
var h = [
	208,
	207,
	17,
	224,
	161,
	177,
	26,
	225
], g = 4294967290, _ = 4294967294, ee = 512, v = 128, y = 4e6, te = 8e6, b = 65536, x = 1e6;
function S(e, t) {
	if (e.length < ee) return null;
	for (let t = 0; t < h.length; t++) if (e[t] !== h[t]) return null;
	let n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = ne(n);
	if (r === null) return null;
	let i = T(n, e.length, r);
	if (i === null) return null;
	let a = re(n, e.length, r, i, t);
	if (a === null || a.target === null) return null;
	let { target: o, root: s } = a;
	return o.size === 0 ? new Uint8Array() : o.size < r.miniStreamCutoff ? s === null ? null : O(n, e.length, r, i, s, o) : D(n, e.length, r, i, o.startSector, o.size);
}
function ne(e) {
	let t = e.getUint16(30, !0);
	if (t !== 9 && t !== 12) return null;
	let n = e.getUint16(32, !0);
	return n === 6 ? {
		sectorSize: 1 << t,
		miniSectorSize: 1 << n,
		miniStreamCutoff: e.getUint32(56, !0),
		firstDirSector: e.getUint32(48, !0),
		firstMiniFatSector: e.getUint32(60, !0),
		firstDifatSector: e.getUint32(68, !0),
		numDifatSectors: e.getUint32(72, !0)
	} : null;
}
function C(e, t) {
	return (e + 1) * t;
}
function w(e) {
	return e >= 0 && e <= g;
}
function T(e, t, n) {
	let { sectorSize: r } = n, i = [];
	for (let t = 0; t < 109; t++) {
		let n = e.getUint32(76 + t * 4, !0);
		w(n) && i.push(n);
	}
	let a = r / 4 - 1, o = n.firstDifatSector, s = /* @__PURE__ */ new Set(), c = 0;
	for (; w(o);) {
		if (c++ > x) return null;
		if (s.has(o)) break;
		s.add(o);
		let n = C(o, r);
		if (n < 0 || n + r > t) return null;
		for (let t = 0; t < a; t++) {
			let r = e.getUint32(n + t * 4, !0);
			w(r) && i.push(r);
		}
		o = e.getUint32(n + a * 4, !0);
	}
	return i;
}
function E(e, t, n, r, i) {
	let a = n / 4, o = Math.floor(i / a), s = i % a;
	if (o >= r.length) return null;
	let c = r[o];
	if (!w(c)) return null;
	let l = C(c, n) + s * 4;
	return l < 0 || l + 4 > t ? null : e.getUint32(l, !0);
}
function re(e, t, n, r, i) {
	let { sectorSize: a } = n, o = Math.floor(a / v);
	if (o < 1) return null;
	let s = null, c = null, l = /* @__PURE__ */ new Set(), u = n.firstDirSector, d = 0, f = 0;
	for (; w(u);) {
		if (d++ > y) return null;
		if (l.has(u)) break;
		l.add(u);
		let n = C(u, a);
		if (n < 0 || n + a > t) return null;
		for (let t = 0; t < o; t++) {
			if (f++ > b) return {
				target: s,
				root: c
			};
			let r = n + t * v, a = e.getUint8(r + 66);
			if (a === 0) continue;
			let o = e.getUint32(r + 116, !0), l = e.getUint32(r + 120, !0);
			if (a === 5) {
				c = {
					startSector: o,
					size: l
				};
				continue;
			}
			ie(e, r) === i && (s = {
				startSector: o,
				size: l
			});
		}
		let p = E(e, t, a, r, u);
		if (p === null) break;
		u = p;
	}
	return {
		target: s,
		root: c
	};
}
function ie(e, t) {
	let n = e.getUint16(t + 64, !0);
	if (n < 2 || n > 64) return "";
	let r = n / 2 - 1, i = "";
	for (let n = 0; n < r; n++) {
		let r = e.getUint16(t + n * 2, !0);
		if (r === 0) break;
		i += String.fromCharCode(r);
	}
	return i;
}
function D(e, t, n, r, i, a) {
	let { sectorSize: o } = n, s = new Uint8Array(a), c = 0, l = i, u = /* @__PURE__ */ new Set(), d = 0;
	for (; w(l) && c < a;) {
		if (d++ > y || u.has(l)) return null;
		u.add(l);
		let n = C(l, o);
		if (n < 0 || n + o > t) return null;
		let i = Math.min(o, a - c);
		s.set(new Uint8Array(e.buffer, e.byteOffset + n, i), c), c += i;
		let f = E(e, t, o, r, l);
		if (f === null) return null;
		l = f;
	}
	return c === a ? s : null;
}
function O(e, t, n, r, i, a) {
	let { sectorSize: o, miniSectorSize: s } = n, c = D(e, t, n, r, i.startSector, i.size);
	if (c === null) return null;
	let l = new Uint8Array(a.size), u = 0, d = a.startSector, f = /* @__PURE__ */ new Set(), p = 0, m = o / 4;
	for (; w(d) && u < a.size;) {
		if (p++ > te || f.has(d)) return null;
		f.add(d);
		let i = d * s;
		if (i < 0 || i + s > c.length) return null;
		let o = Math.min(s, a.size - u);
		l.set(c.subarray(i, i + o), u), u += o;
		let h = ae(e, t, n, r, m, d);
		if (h === null) return null;
		d = h;
	}
	return u === a.size ? l : null;
}
function ae(e, t, n, r, i, a) {
	let { sectorSize: o } = n, s = Math.floor(a / i), c = a % i, l = n.firstMiniFatSector, u = /* @__PURE__ */ new Set();
	for (let n = 0; n < s; n++) {
		if (!w(l) || u.has(l)) return null;
		u.add(l);
		let n = E(e, t, o, r, l);
		if (n === null) return null;
		l = n;
	}
	if (!w(l)) return null;
	let d = C(l, o) + c * 4;
	if (d < 0 || d + 4 > t) return null;
	let f = e.getUint32(d, !0);
	return f === _ ? _ : f;
}
//#endregion
//#region packages/core/src/crypto/encryption-info.ts
function k(e) {
	if (typeof atob == "function") {
		let t = atob(e), n = new Uint8Array(t.length);
		for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
		return n;
	}
	let t = globalThis.Buffer;
	if (t) return new Uint8Array(t.from(e, "base64"));
	throw Error("no base64 decoder available");
}
function A(e, t, n) {
	let r = RegExp(`<(?:[\\w]+:)?${t}\\b[^>]*>`).exec(e);
	if (!r) return null;
	let i = r[0], a = RegExp(`\\b${n}\\s*=\\s*"([^"]*)"`).exec(i);
	return a ? a[1] : null;
}
function j(e) {
	if (e === null) return null;
	let t = Number(e);
	return Number.isFinite(t) ? t : null;
}
function M(e, t) {
	let n = j(A(e, t, "saltSize")), r = j(A(e, t, "blockSize")), i = j(A(e, t, "keyBits")), a = j(A(e, t, "hashSize")), o = A(e, t, "cipherAlgorithm"), s = A(e, t, "cipherChaining"), c = A(e, t, "hashAlgorithm"), l = A(e, t, "saltValue");
	return n === null || r === null || i === null || a === null || !o || !s || !c || l === null ? null : {
		saltSize: n,
		blockSize: r,
		keyBits: i,
		hashSize: a,
		cipherAlgorithm: o,
		cipherChaining: s,
		hashAlgorithm: c,
		saltValue: k(l)
	};
}
function N(e) {
	if (e.length < 8) return { kind: "unknown" };
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength), n = t.getUint16(0, !0), r = t.getUint16(2, !0);
	if (n === 4 && r === 4) {
		let t = P(e.subarray(8));
		return t ? {
			kind: "agile",
			descriptor: t
		} : { kind: "unknown" };
	}
	return r === 16 && (n === 3 || n === 4) ? { kind: "extensible" } : r === 2 && (n === 2 || n === 3 || n === 4) ? { kind: "standard" } : { kind: "unknown" };
}
function P(e) {
	let t = new TextDecoder("utf-8").decode(e), n = M(t, "keyData"), r = M(t, "encryptedKey");
	if (!n || !r) return null;
	let i = j(A(t, "encryptedKey", "spinCount")), a = A(t, "encryptedKey", "encryptedVerifierHashInput"), o = A(t, "encryptedKey", "encryptedVerifierHashValue"), s = A(t, "encryptedKey", "encryptedKeyValue");
	if (i === null || a === null || o === null || s === null) return null;
	let c = {
		...r,
		spinCount: i,
		encryptedVerifierHashInput: k(a),
		encryptedVerifierHashValue: k(o),
		encryptedKeyValue: k(s)
	}, l = null, u = A(t, "dataIntegrity", "encryptedHmacKey"), d = A(t, "dataIntegrity", "encryptedHmacValue");
	return u !== null && d !== null && (l = {
		encryptedHmacKey: k(u),
		encryptedHmacValue: k(d)
	}), {
		keyData: n,
		passwordKeyEncryptor: c,
		dataIntegrity: l
	};
}
//#endregion
//#region packages/core/src/crypto/agile.ts
var F = {
	verifierHashInput: new Uint8Array([
		254,
		167,
		210,
		118,
		59,
		75,
		158,
		121
	]),
	verifierHashValue: new Uint8Array([
		215,
		170,
		15,
		109,
		48,
		97,
		52,
		78
	]),
	keyValue: new Uint8Array([
		20,
		110,
		11,
		231,
		171,
		172,
		208,
		214
	]),
	hmacKey: new Uint8Array([
		95,
		178,
		173,
		1,
		12,
		185,
		225,
		246
	]),
	hmacValue: new Uint8Array([
		160,
		103,
		127,
		2,
		178,
		44,
		132,
		51
	])
}, oe = 54, I = 4096, L = class extends Error {
	reason;
	constructor(e, t) {
		super(t), this.name = "AgileDecryptError", this.reason = e;
	}
};
function R() {
	let e = globalThis.crypto;
	if (!e || !e.subtle) throw new L("unsupported-encryption", "WebCrypto (globalThis.crypto.subtle) is unavailable; cannot decrypt.");
	return e.subtle;
}
function z(e) {
	switch (e.toUpperCase().replace(/[-_]/g, "")) {
		case "SHA512": return "SHA-512";
		case "SHA384": return "SHA-384";
		case "SHA256": return "SHA-256";
		case "SHA1": return "SHA-1";
		default: throw new L("unsupported-encryption", `Unsupported hashAlgorithm "${e}" (only SHA-1/256/384/512).`);
	}
}
function B(e) {
	if (e.cipherAlgorithm.toUpperCase() !== "AES") throw new L("unsupported-encryption", `Unsupported cipherAlgorithm "${e.cipherAlgorithm}" (only AES).`);
	if (e.cipherChaining.toLowerCase() !== "chainingmodecbc") throw new L("unsupported-encryption", `Unsupported cipherChaining "${e.cipherChaining}" (only ChainingModeCBC).`);
	if (e.keyBits !== 128 && e.keyBits !== 192 && e.keyBits !== 256) throw new L("unsupported-encryption", `Unsupported keyBits ${e.keyBits} (only 128/192/256).`);
}
function V(...e) {
	let t = e.reduce((e, t) => e + t.length, 0), n = new Uint8Array(t), r = 0;
	for (let t of e) n.set(t, r), r += t.length;
	return n;
}
function H(e) {
	let t = new Uint8Array(4);
	return new DataView(t.buffer).setUint32(0, e >>> 0, !0), t;
}
function U(e) {
	let t = new Uint8Array(e.length * 2), n = new DataView(t.buffer);
	for (let t = 0; t < e.length; t++) n.setUint16(t * 2, e.charCodeAt(t), !0);
	return t;
}
async function W(e, t) {
	return new Uint8Array(await R().digest(e, t));
}
function G(e, t) {
	if (e.length > t) return e.slice(0, t);
	let n = new Uint8Array(t);
	return n.set(e), e.length < t && n.fill(oe, e.length), n;
}
async function K(e, t, n, r) {
	let i = z(t.hashAlgorithm), a = await W(i, V(t.saltValue, U(e)));
	for (let e = 0; e < n; e++) a = await W(i, V(H(e), a));
	return G(await W(i, V(a, r)), t.keyBits / 8);
}
async function q(e, t, n) {
	return G(n ? await W(z(e.hashAlgorithm), V(t, n)) : t, e.blockSize);
}
async function J(e, t, n) {
	let r = t.length;
	if (n.length === 0) return new Uint8Array();
	if (n.length % r !== 0) throw new L("corrupt", "ciphertext length is not a multiple of the block size");
	let i = await R().importKey("raw", e, { name: "AES-CBC" }, !1, ["decrypt"]), a = await R().importKey("raw", e, { name: "AES-CBC" }, !1, ["encrypt"]), o = n.subarray(n.length - r), s = se(new Uint8Array(r).fill(r), o), c = V(n, new Uint8Array(await R().encrypt({
		name: "AES-CBC",
		iv: new Uint8Array(r)
	}, a, s)).subarray(0, r)), l = new Uint8Array(await R().decrypt({
		name: "AES-CBC",
		iv: t
	}, i, c));
	return l.length >= n.length ? l.subarray(0, n.length) : l;
}
function se(e, t) {
	let n = new Uint8Array(e.length);
	for (let r = 0; r < e.length; r++) n[r] = e[r] ^ t[r];
	return n;
}
async function ce(e, t) {
	B(t);
	let n = z(t.hashAlgorithm), r = await J(await K(e, t, t.spinCount, F.verifierHashInput), await q(t, t.saltValue, null), t.encryptedVerifierHashInput), i = await J(await K(e, t, t.spinCount, F.verifierHashValue), await q(t, t.saltValue, null), t.encryptedVerifierHashValue);
	return le((await W(n, r)).subarray(0, t.hashSize), i.subarray(0, t.hashSize));
}
function le(e, t) {
	if (e.length !== t.length) return !1;
	let n = 0;
	for (let r = 0; r < e.length; r++) n |= e[r] ^ t[r];
	return n === 0;
}
async function ue(e, t) {
	return await J(await K(e, t, t.spinCount, F.keyValue), await q(t, t.saltValue, null), t.encryptedKeyValue);
}
async function de(e, t, n) {
	if (B(t), e.length < 8) throw new L("corrupt", "EncryptedPackage is shorter than its size prefix");
	let r = new DataView(e.buffer, e.byteOffset, e.byteLength), i = Number(r.getBigUint64(0, !0)), a = e.subarray(8);
	if (i > a.length) throw new L("corrupt", "EncryptedPackage size prefix exceeds the ciphertext");
	let o = n.slice(0, t.keyBits / 8), s = new Uint8Array(i), c = 0, l = 0;
	for (let e = 0; e < a.length; e += I) {
		let n = a.subarray(e, e + I), r = await J(o, await q(t, t.saltValue, H(l)), n), u = Math.min(r.length, i - c);
		if (s.set(r.subarray(0, u), c), c += u, l++, c >= i) break;
	}
	if (c !== i) throw new L("corrupt", "decrypted output is shorter than the declared size");
	return s;
}
async function fe(e, t, n) {
	let { keyData: r, passwordKeyEncryptor: i } = e;
	if (B(r), B(i), !await ce(n, i)) throw new L("invalid-password", "The supplied password is incorrect.");
	return de(t, r, await ue(n, i));
}
//#endregion
//#region packages/core/src/crypto/decrypt-ooxml.ts
var Y = "EncryptionInfo", pe = "EncryptedPackage";
async function me(e, t) {
	let n = S(e, Y), r = S(e, pe);
	if (n === null || r === null) return {
		ok: !1,
		reason: "corrupt"
	};
	let i = N(n);
	if (i.kind !== "agile") return {
		ok: !1,
		reason: "unsupported-encryption"
	};
	try {
		return {
			ok: !0,
			data: await fe(i.descriptor, r, t)
		};
	} catch (e) {
		return e instanceof L ? {
			ok: !1,
			reason: e.reason
		} : {
			ok: !1,
			reason: "corrupt"
		};
	}
}
//#endregion
//#region packages/core/src/errors/cfb-guard.ts
function he(t) {
	let n = l(t instanceof Uint8Array ? t : new Uint8Array(t));
	if (n !== null) switch (n) {
		case "encrypted": throw new e("encrypted", "This file is password-protected (MS-OFFCRYPTO). Pass LoadOptions.password to decrypt it.");
		case "legacy-binary-format": throw new e("legacy-binary-format", "This is a legacy binary Office file (.doc/.xls/.ppt), not OOXML.");
		case "cfb-unknown": throw new e("not-ooxml", "This file is an OLE2/Compound File container, not an OOXML (ZIP) document.");
		default: throw new e("not-ooxml", "This file is an OLE2/Compound File container of an unrecognised kind, not an OOXML (ZIP) document.");
	}
}
async function ge(t, n) {
	let r = t instanceof Uint8Array ? t : new Uint8Array(t), i = l(r);
	if (i === null) return r;
	if (i === "encrypted") {
		if (n === void 0) throw new e("encrypted", "This file is password-protected (MS-OFFCRYPTO). Pass LoadOptions.password to decrypt it.");
		let t = await me(r, n);
		if (t.ok) return t.data;
		switch (t.reason) {
			case "invalid-password": throw new e("invalid-password", "The supplied password is incorrect.");
			case "unsupported-encryption": throw new e("unsupported-encryption", "This file uses an encryption scheme other than Agile ([MS-OFFCRYPTO]) that is not supported (Standard / Extensible / legacy binary encryption).");
			case "corrupt": throw new e("not-ooxml", "This file is an encrypted OLE2/Compound File container but its structure could not be read.");
			default: throw t.reason, new e("not-ooxml", "This encrypted file could not be decrypted.");
		}
	}
	return he(r), r;
}
function _e(e) {
	return e.byteOffset === 0 && e.byteLength === e.buffer.byteLength && e.buffer instanceof ArrayBuffer ? e.buffer : e.slice().buffer;
}
//#endregion
//#region packages/core/src/autoResize.ts
function ve(e, t, n = {}) {
	let r = n.pauseWhenHidden ?? !0, i = null, a = 0, o = 0, s = null, c = !1, l = !1, u = () => {
		if (!l && !(r && typeof document < "u" && document.hidden)) {
			if (s) {
				c = !0;
				return;
			}
			i === null && (i = requestAnimationFrame(d));
		}
	}, d = async () => {
		if (i = null, l) return;
		let t = a, n = o;
		try {
			let r = e(t, n);
			s = r instanceof Promise ? r : Promise.resolve(), await s;
		} catch (e) {
			console.error("[autoResize] render failed:", e);
		} finally {
			s = null, c && !l && (c = !1, u());
		}
	}, f = new ResizeObserver((e) => {
		for (let t of e) {
			let e = t.contentRect;
			a = e.width, o = e.height;
		}
		u();
	});
	f.observe(t);
	let p = () => {
		typeof document < "u" && !document.hidden && u();
	};
	return r && typeof document < "u" && document.addEventListener("visibilitychange", p), () => {
		l = !0, f.disconnect(), i !== null && (cancelAnimationFrame(i), i = null), r && typeof document < "u" && document.removeEventListener("visibilitychange", p);
	};
}
//#endregion
//#region packages/core/src/worker/bridge.ts
function X() {
	let e = /* @__PURE__ */ Error("worker request aborted");
	return e.name = "AbortError", e;
}
var ye = class {
	_worker;
	_opts;
	_pending = /* @__PURE__ */ new Map();
	_orphaned = /* @__PURE__ */ new Map();
	_nextId = 1;
	_terminated = !1;
	_failure;
	constructor(e, t) {
		this._worker = e, this._opts = t, this._worker.addEventListener("message", this._handle), this._worker.addEventListener("messageerror", this._handleWorkerError), this._worker.addEventListener("error", this._handleWorkerError);
	}
	_handle = (e) => {
		let t = e.data, n = this._opts.correlate(t);
		if (n === void 0) {
			this._opts.onUnsolicited?.(t);
			return;
		}
		let r = this._pending.get(n);
		if (!r) {
			try {
				let e = this._orphaned.get(n);
				e ? (this._orphaned.delete(n), e(t)) : this._opts.onOrphanedResponse?.(t);
			} catch {}
			return;
		}
		this._pending.delete(n), r.cleanup();
		let i = this._opts.toError?.(t);
		i === void 0 ? r.resolve(t) : r.reject(i instanceof Error ? i : Error(i));
	};
	_handleWorkerError = (e) => {
		let t = "message" in e && e.message ? `: ${e.message}` : "";
		this._failure ??= /* @__PURE__ */ Error(`Worker error${t}`), this._rejectAll(this._failure);
	};
	_rejectAll(e) {
		let t = [...this._pending.values()];
		this._pending.clear();
		for (let n of t) n.cleanup(), n.reject(e);
	}
	nextId() {
		return this._nextId++;
	}
	request(e, t, n) {
		let r = this._nextId++, i = n?.timeoutMs === !1 ? void 0 : n?.timeoutMs ?? this._opts.timeoutMs, a = n?.signal, o = (e) => {
			try {
				n?.onCancel?.(r, e);
			} catch {}
		};
		return new Promise((s, c) => {
			if (this._terminated) {
				c(/* @__PURE__ */ Error("Worker terminated"));
				return;
			}
			if (this._failure) {
				c(this._failure);
				return;
			}
			if (a?.aborted) {
				o("abort"), c(X());
				return;
			}
			let l, u;
			this._pending.set(r, {
				resolve: s,
				reject: c,
				cleanup: () => {
					l !== void 0 && (clearTimeout(l), l = void 0), u && a && (a.removeEventListener("abort", u), u = void 0);
				},
				onOrphanedResponse: n?.onOrphanedResponse
			}), i !== void 0 && (l = setTimeout(() => {
				let e = this._pending.get(r);
				e && (this._pending.delete(r), e.onOrphanedResponse && this._orphaned.set(r, e.onOrphanedResponse), e.cleanup(), o("timeout"), e.reject(/* @__PURE__ */ Error(`worker request timed out after ${i}ms`)));
			}, i)), a && (u = () => {
				let e = this._pending.get(r);
				e && (this._pending.delete(r), e.onOrphanedResponse && this._orphaned.set(r, e.onOrphanedResponse), e.cleanup(), o("abort"), e.reject(X()));
			}, a.addEventListener("abort", u));
			try {
				this._worker.postMessage(e(r), t);
			} catch (e) {
				let t = this._pending.get(r);
				if (!t) return;
				this._pending.delete(r), t.cleanup(), t.reject(e instanceof Error ? e : Error(String(e)));
			}
		});
	}
	transport(e) {
		return {
			request: (t, n, r) => this.request(t, n, {
				...r,
				onOrphanedResponse: r?.onOrphanedResponse ? (t) => {
					e(t) && r.onOrphanedResponse?.(t);
				} : void 0
			}).then((t) => {
				if (!e(t)) throw Error("worker response does not match the selected transport");
				return t;
			}),
			forgetOrphaned: (e) => this.forgetOrphaned(e),
			terminate: () => this.terminate()
		};
	}
	post(e, t) {
		this._worker.postMessage(e, t);
	}
	forgetOrphaned(e) {
		for (let t of e) this._orphaned.delete(t);
	}
	get orphanedRequestCount() {
		return this._orphaned.size;
	}
	terminate() {
		this._terminated || (this._terminated = !0, this._worker.removeEventListener("message", this._handle), this._worker.removeEventListener("messageerror", this._handleWorkerError), this._worker.removeEventListener("error", this._handleWorkerError), this._worker.terminate(), this._rejectAll(/* @__PURE__ */ Error("Worker terminated")), this._orphaned.clear());
	}
};
//#endregion
//#region packages/core/src/worker/rejected-load.ts
function be(e, t) {
	if (t) try {
		t();
		return;
	} catch {}
	try {
		e.terminate();
	} catch {}
}
//#endregion
//#region packages/core/src/interaction/zoom.ts
var xe = .01;
function Se(e, t) {
	return e * Math.exp(-t * xe);
}
function Ce(e, t, n, r, i) {
	let a = n > 0 ? r / n : 1, o = (e + t) * a - t, s = i.maxScroll > 0 ? i.maxScroll : 0;
	return o < 0 ? 0 : o > s ? s : o;
}
//#endregion
//#region packages/core/src/interaction/zoomable.ts
var Z = Object.freeze([
	.25,
	.33,
	.5,
	.67,
	.75,
	.9,
	1,
	1.1,
	1.25,
	1.5,
	1.75,
	2,
	2.5,
	3,
	4
]), Q = .005;
function we(e) {
	for (let t of Z) if (t > e + Q) return t;
	return Z[Z.length - 1];
}
function Te(e) {
	for (let t = Z.length - 1; t >= 0; t--) {
		let n = Z[t];
		if (n < e - Q) return n;
	}
	return Z[0];
}
function Ee(e, t, n) {
	return e < t ? t : e > n ? n : e;
}
function De(e, t) {
	let { contentWidth: n, contentHeight: r, containerWidth: i, containerHeight: a } = e;
	if (n <= 0 || i <= 0) return 0;
	let o = i / n;
	if (t === "width") return o;
	if (r <= 0 || a <= 0) return 0;
	let s = a / r;
	return Math.min(o, s);
}
//#endregion
//#region packages/core/src/search/text-index.ts
function $(e) {
	let t = e.toLowerCase();
	if (t.length === e.length) return t;
	let n = "";
	for (let t of e) {
		let e = t.toLowerCase();
		n += e.length === t.length ? e : t;
	}
	return n;
}
function Oe(e) {
	let t = Array(e.length), n = 0, r = "";
	for (let i = 0; i < e.length; i++) t[i] = n, r += e[i].text, n += e[i].text.length;
	return {
		text: r,
		folded: $(r),
		runStart: t,
		runCount: e.length
	};
}
function ke(e, t) {
	let { runStart: n } = e, r = 0, i = n.length - 1;
	for (; r < i;) {
		let e = r + i + 1 >> 1;
		n[e] <= t ? r = e : i = e - 1;
	}
	return r;
}
function Ae(e, t, n) {
	let { runStart: r, runCount: i, text: a } = e, o = [], s = ke(e, t), c = t;
	for (; c < n && s < i;) {
		let e = s + 1 < i ? r[s + 1] : a.length, t = Math.min(n, e), l = c - r[s], u = t - r[s];
		u > l && o.push({
			runIndex: s,
			start: l,
			end: u
		}), c = t, s++;
	}
	return o;
}
function je(e, t, n = {}) {
	if (t.length === 0) return [];
	let r = n.caseSensitive ?? !1, i = r ? e.text : e.folded, a = r ? t : $(t), o = [], s = 0, c = 0;
	for (;;) {
		let t = i.indexOf(a, s);
		if (t === -1) break;
		o.push({
			matchIndex: c,
			slices: Ae(e, t, t + a.length)
		}), c++, s = t + a.length;
	}
	return o;
}
//#endregion
//#region packages/core/src/search/find-cursor.ts
function Me(e, t) {
	return t <= 0 ? -1 : e < 0 ? 0 : (e + 1) % t;
}
function Ne(e, t) {
	return t <= 0 ? -1 : e < 0 ? t - 1 : (e - 1 + t) % t;
}
//#endregion
//#region packages/core/src/internal/canvas-viewer-mechanics.ts
var Pe = class {
	wrapper;
	originalParent;
	originalNextSibling;
	originalDisplay;
	originalStyle;
	originalWidth;
	originalHeight;
	restored = !1;
	constructor(e, t) {
		this.canvas = e, this.options = t, this.originalParent = e.parentNode, this.originalNextSibling = e.nextSibling, this.originalDisplay = e.style.display, this.originalStyle = t.restoreMode === "style-and-bitmap" ? e.getAttribute("style") : null, this.originalWidth = e.width, this.originalHeight = e.height, this.wrapper = (e.ownerDocument ?? document).createElement("div"), this.wrapper.style.cssText = t.wrapperCssText, t.forceDisplayBlock && !e.style.display && (e.style.display = "block"), this.originalParent && this.originalParent.insertBefore(this.wrapper, e), this.wrapper.appendChild(e);
	}
	restore() {
		if (!this.restored) {
			if (this.restored = !0, this.originalParent) {
				let e = this.originalNextSibling?.parentNode === this.originalParent ? this.originalNextSibling : null;
				this.originalParent.insertBefore(this.canvas, e);
			} else this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
			(this.options.restoreMode ?? "display") === "style-and-bitmap" ? (this.originalStyle === null ? this.canvas.removeAttribute("style") : this.canvas.setAttribute("style", this.originalStyle), this.canvas.width = this.originalWidth, this.canvas.height = this.originalHeight) : this.canvas.style.display = this.originalDisplay, this.wrapper.remove();
		}
	}
}, Fe = "position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;user-select:text;-webkit-user-select:text;", Ie = "position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;", Le = class {
	textLayer;
	highlightLayer;
	constructor(e, t) {
		let n = e.ownerDocument ?? document;
		this.textLayer = t ? n.createElement("div") : null, this.textLayer && (this.textLayer.style.cssText = Fe, e.appendChild(this.textLayer)), this.highlightLayer = n.createElement("div"), this.highlightLayer.style.cssText = Ie, e.appendChild(this.highlightLayer);
	}
};
function Re(e, t, n) {
	if (n && t !== void 0 && t !== n.mode) throw Error(`${e}: opts.mode='${t}' conflicts with the borrowed engine's mode='${n.mode}'. Omit opts.mode when borrowing an engine — the engine owns its render mode.`);
	return n?.mode ?? t ?? "main";
}
var ze = class {
	generation = 0;
	resource;
	ownsResource;
	closed = !1;
	constructor(e, t = null, n = !1) {
		this.ownerName = e, this.resource = t, this.ownsResource = t !== null && n;
	}
	get current() {
		return this.resource;
	}
	async replace(e, t) {
		this.assertOpen();
		let n = ++this.generation, r;
		try {
			r = await e();
		} catch (e) {
			if (this.closed) throw this.closedError();
			if (n !== this.generation) return null;
			throw e;
		}
		if (this.closed) throw this.dispose(r), this.closedError();
		if (n !== this.generation) return this.dispose(r), null;
		try {
			t?.(this.resource);
		} catch (e) {
			throw this.dispose(r), e;
		}
		return this.install(r, !0), r;
	}
	install(e, t = !0) {
		this.assertOpen(), this.generation++;
		let n = this.resource, r = this.ownsResource;
		this.resource = e, this.ownsResource = t, r && n && this.dispose(n);
	}
	close() {
		if (this.closed) return;
		this.closed = !0, this.generation++;
		let e = this.resource, t = this.ownsResource;
		this.resource = null, this.ownsResource = !1, t && e && this.dispose(e);
	}
	assertOpen() {
		if (this.closed) throw this.closedError();
	}
	closedError() {
		return /* @__PURE__ */ Error(`${this.ownerName} is closed`);
	}
	dispose(e) {
		try {
			e.destroy();
		} catch {}
	}
}, Be = class {
	generation = 0;
	destroyed = !1;
	bitmapContext;
	constructor(e, t) {
		this.canvas = e, this.bitmapContext = t ? e.getContext("bitmaprenderer") : null;
	}
	begin() {
		return ++this.generation;
	}
	isCurrent(e) {
		return !this.destroyed && e === this.generation;
	}
	commitBitmap(e, t, n = {}) {
		if (!this.isCurrent(e)) return t.close(), !1;
		if (!this.bitmapContext) throw t.close(), Error("bitmaprenderer context not available");
		this.canvas.width !== t.width && (this.canvas.width = t.width), this.canvas.height !== t.height && (this.canvas.height = t.height), n.cssWidth !== void 0 && (this.canvas.style.width = `${n.cssWidth}px`), n.cssHeight !== void 0 && (this.canvas.style.height = `${n.cssHeight}px`);
		try {
			this.bitmapContext.transferFromImageBitmap(t);
		} catch (e) {
			throw t.close(), e;
		}
		return !0;
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.generation++);
	}
}, Ve = class {
	closed = !1;
	constructor(e, t) {
		this.viewerName = e, this.onError = t;
	}
	report(e) {
		if (this.closed) return;
		let t = e instanceof Error ? e : Error(String(e));
		this.onError ? this.onError(t) : console.error(`[ooxml] ${this.viewerName} render failed:`, t);
	}
	close() {
		this.closed = !0;
	}
};
//#endregion
export { be as _, ze as a, ge as b, Ne as c, Ee as d, De as f, Se as g, Ce as h, Be as i, Oe as l, Te as m, Le as n, Re as o, we as p, Ve as r, Me as s, Pe as t, je as u, ye as v, _e as x, ve as y };
