import { t as e } from "./chunk-DmhlhrBa.js";
import { a as t, c as n, i as r, l as i, n as a, o, r as s, s as c, t as l } from "./slide-pull-client-WCuYCjio.js";
import { B as u, Et as d, G as f, It as p, Lt as m, R as h, a as g, at as _, gt as v, hn as y, ht as b, in as x, it as S, kt as C, mn as w, q as T, z as ee } from "./line-metrics-BdCACYlq.js";
import { _ as te, a as E, b as ne, c as re, d as ie, f as D, g as ae, h as oe, i as O, l as se, m as ce, n as le, o as k, p as A, r as ue, s as de, t as fe, u as pe, v as me, x as he, y as ge } from "./canvas-viewer-mechanics-CwVSOYke.js";
import { a as _e, i as ve, n as ye, t as be } from "./bounded-raw-part-cache-C6ro6Ezf.js";
import { n as xe } from "./resource-measurement-E_S_iau4.js";
import { n as Se, r as j, t as Ce } from "./visible-index-CgyJLAS_.js";
import { n as we, r as M, t as N } from "./highlight-rect-CAkCWJ37.js";
//#region packages/core/src/nav/internal-target.ts
function Te(e, t) {
	let n = t.startsWith("/") ? [] : e.split("/").filter((e) => e !== "");
	for (let e of t.split("/")) if (e === "..") n.pop();
	else if (e === "." || e === "") continue;
	else n.push(e);
	return n.join("/");
}
function Ee(e) {
	let t = /[?&]jump=([a-zA-Z]+)/.exec(e);
	if (!t) return null;
	let n = t[1].toLowerCase();
	return n === "firstslide" || n === "lastslide" || n === "nextslide" || n === "previousslide" ? n : null;
}
function De(e, t, n) {
	if (!(n <= 0)) switch (e) {
		case "firstslide": return 0;
		case "lastslide": return n - 1;
		case "nextslide": return Math.min(t + 1, n - 1);
		case "previousslide": return Math.max(t - 1, 0);
	}
}
//#endregion
//#region packages/pptx/src/text-layer.ts
function P(e, t, n, r, i) {
	e.innerHTML = "";
	let a = /* @__PURE__ */ new Map();
	for (let o of t) {
		let t = o.rotation + (o.textBodyRotation ?? 0), s = `${o.shapeX},${o.shapeY},${o.shapeW},${o.shapeH},${t}`;
		if (!a.has(s)) {
			let i = document.createElement("div");
			i.style.cssText = `position:absolute;left:${N(o.shapeX, n)};top:${N(o.shapeY, r)};width:${N(o.shapeW, n)};height:${N(o.shapeH, r)};pointer-events:all;overflow:hidden;`, t !== 0 && (i.style.transformOrigin = "center center", i.style.transform = `rotate(${t}deg)`), a.set(s, {
				div: i,
				x: o.shapeX,
				y: o.shapeY,
				w: o.shapeW,
				h: o.shapeH,
				rot: t
			}), e.appendChild(i);
		}
		let c = a.get(s), l = document.createElement("span");
		l.textContent = o.text;
		let u = i ? o.hyperlink : void 0;
		l.style.cssText = `position:absolute;left:${N(o.inShapeX, c.w)};top:${N(o.inShapeY, c.h)};font:${o.font};line-height:${o.h}px;letter-spacing:0;white-space:pre;color:transparent;cursor:${u ? "pointer" : "text"};`, u && i && (l.title = u.kind === "external" ? u.url : u.ref, l.addEventListener("click", (e) => {
			e.preventDefault(), i(u);
		})), c.div.appendChild(l);
	}
}
function F(e, t, n, r, i, a, o = {}) {
	e.innerHTML = "";
	let s = o.match ?? "rgba(255, 214, 0, 0.42)", c = o.active ?? "rgba(255, 140, 0, 0.55)", l = /* @__PURE__ */ new Map(), u = (t) => {
		let n = t.rotation + (t.textBodyRotation ?? 0), a = `${t.shapeX},${t.shapeY},${t.shapeW},${t.shapeH},${n}`, o = l.get(a);
		if (!o) {
			let s = document.createElement("div");
			s.style.cssText = `position:absolute;left:${N(t.shapeX, r)};top:${N(t.shapeY, i)};width:${N(t.shapeW, r)};height:${N(t.shapeH, i)};pointer-events:none;overflow:hidden;`, n !== 0 && (s.style.transformOrigin = "center center", s.style.transform = `rotate(${n}deg)`), o = {
				div: s,
				w: t.shapeW,
				h: t.shapeH
			}, l.set(a, o), e.appendChild(s);
		}
		return o;
	};
	for (let e of n) {
		let n = e.active ? c : s;
		for (let r of e.slices) {
			let e = t[r.runIndex];
			if (!e) continue;
			let i = a(e.font), { x: o, width: s } = we(e.text, r.start, r.end, i);
			if (s <= 0) continue;
			let c = u(e), l = document.createElement("div");
			l.style.cssText = `position:absolute;left:${N(e.inShapeX + o, c.w)};top:${N(e.inShapeY, c.h)};width:${N(s, c.w)};height:${N(e.h, c.h)};background:${n};pointer-events:none;`, c.div.appendChild(l);
		}
	}
}
//#endregion
//#region packages/pptx/src/find.ts
var I = class {
	_slideRuns = /* @__PURE__ */ new Map();
	_matches = [];
	_active = -1;
	_generation = 0;
	_runsRevision = 0;
	constructor(e, t) {
		this._slideCount = e, this._collectSlideRuns = t;
	}
	invalidate() {
		this._generation++, this._runsRevision++, this._slideRuns.clear(), this._matches = [], this._active = -1;
	}
	slideRuns(e) {
		return this._slideRuns.get(e);
	}
	setSlideRuns(e, t) {
		this._runsRevision++, this._slideRuns.set(e, t);
	}
	slideHighlights(e) {
		let t = [];
		for (let n = 0; n < this._matches.length; n++) {
			let r = this._matches[n];
			r.slide === e && t.push({
				slices: r.slices,
				active: n === this._active
			});
		}
		return t;
	}
	activeSlide() {
		let e = this._matches[this._active];
		return e ? e.slide : null;
	}
	matches() {
		return this._matches.map((e, t) => ({
			matchIndex: t,
			text: e.text,
			location: { slide: e.slide }
		}));
	}
	async find(e, t = {}) {
		let n = ++this._generation;
		if (e.length === 0) return this._runsRevision++, this._slideRuns.clear(), this._matches = [], this._active = -1, [];
		let r = this._runsRevision, i = new Map(this._slideRuns), a = this._slideCount();
		for (let e = 0; e < a; e++) {
			let t = i.get(e);
			if (!t) {
				try {
					t = await this._collectSlideRuns(e);
				} catch (e) {
					if (n !== this._generation) return [];
					throw e;
				}
				if (n !== this._generation) return [];
				i.set(e, t);
			}
		}
		if (n !== this._generation) return [];
		let o = r === this._runsRevision ? i : new Map([...i, ...this._slideRuns]), s = [];
		for (let n = 0; n < a; n++) {
			let r = o.get(n) ?? [], i = se(r);
			for (let a of pe(i, e, t)) {
				let e = a.slices.map((e) => r[e.runIndex].text.slice(e.start, e.end)).join("");
				s.push({
					slide: n,
					text: e,
					slices: a.slices
				});
			}
		}
		return this._runsRevision++, this._slideRuns = o, this._matches = s, this._active = -1, this.matches();
	}
	next() {
		return this._active = de(this._active, this._matches.length), this._activePublic();
	}
	prev() {
		return this._active = re(this._active, this._matches.length), this._activePublic();
	}
	_activePublic() {
		let e = this._matches[this._active];
		return e ? {
			matchIndex: this._active,
			text: e.text,
			location: { slide: e.slide }
		} : null;
	}
}, L = (e) => e >= "0" && e <= "9";
function Oe(e) {
	let t = 0;
	for (let n = 0; n < 10; n++) t = Math.max(t, e.measureText(String(n)).width);
	return t;
}
function ke(e, t, n) {
	let r = 0;
	for (let i of t) r += L(i) ? n : e.measureText(i).width;
	return r;
}
function Ae(e, t, n, r, i) {
	let a = e.textAlign;
	e.textAlign = "left";
	let o = n;
	for (let n of t) if (L(n)) {
		let t = e.measureText(n).width;
		e.fillText(n, o + (i - t) / 2, r), o += i;
	} else e.fillText(n, o, r), o += e.measureText(n).width;
	e.textAlign = a;
}
//#endregion
//#region packages/pptx/src/presentation-handle.ts
var R = (e, t) => e / x * t;
async function je(e, t, n) {
	let r = e.getContext("2d");
	if (!r) throw Error("2D context not available");
	let a = n.width / (n.slideWidthEmu / x);
	await n.drawBase();
	let o = document.createElement("canvas");
	o.width = e.width, o.height = e.height;
	let s = o.getContext("2d");
	if (!s) throw Error("base 2D context not available");
	s.drawImage(e, 0, 0);
	let c = [], l = [], u = !1, d = (e) => {
		u || (n.onError ? n.onError(e) : console.error("[ooxml] PPTX embedded media failed:", e));
	};
	for (let e of t) {
		let t;
		try {
			t = await n.fetchMedia(e.mediaPath);
		} catch (t) {
			d(Me(e, t)), l.push(z(e, a));
			continue;
		}
		let r = e.mimeType || t.type, i = t.type === r ? t : new Blob([t], { type: r }), o = URL.createObjectURL(i), s = e.mediaKind === "video" ? document.createElement("video") : document.createElement("audio");
		s.src = o, s.preload = "metadata", e.mediaKind === "video" && (s.playsInline = !0);
		let f = z(e, a), p = {
			el: e,
			rect: e.mediaKind === "audio" ? {
				x: f.x + f.w / 2 - Math.max(f.w, 260) / 2,
				y: f.y,
				w: Math.max(f.w, 260),
				h: f.h + 36
			} : f,
			posterRect: f,
			media: s,
			objectUrl: o,
			loadState: "loading",
			detachListeners: () => {}
		}, m = () => {
			u || (p.loadState = "metadata");
		}, h = () => {
			u || (p.loadState = "ready");
		}, g = () => {
			u || (p.loadState = "error", d(V(e, s, "decode")));
		};
		s.addEventListener("loadedmetadata", m), s.addEventListener("canplay", h), s.addEventListener("error", g), p.detachListeners = () => {
			s.removeEventListener("loadedmetadata", m), s.removeEventListener("canplay", h), s.removeEventListener("error", g);
		}, c.push(p);
		try {
			s.load();
		} catch (t) {
			p.loadState = "error", d(V(e, s, "load", t));
		}
	}
	let f = null, p = null, m = () => {
		r.setTransform(n.dpr, 0, 0, n.dpr, 0, 0);
		let t = e.width / n.dpr, a = e.height / n.dpr;
		r.drawImage(o, 0, 0, e.width, e.height, 0, 0, t, a);
		for (let e of l) B(r, e, "Media unavailable");
		for (let e of c) {
			let t = e.media;
			if (e.loadState !== "loading") {
				if (e.loadState === "error") {
					B(r, e.posterRect, "Media unavailable");
					continue;
				}
				if (e.el.mediaKind === "video" && t.readyState >= 2) {
					let { x: n, y: i, w: a, h: o } = e.posterRect;
					r.drawImage(t, n, i, a, o);
				}
				if (e === p || v?.state === e) Fe(r, e, t);
				else if (t.paused) {
					let { x: t, y: n, w: a, h: o } = e.posterRect;
					i(r, t + a / 2, n + o / 2, a, o, "paused");
				}
			}
		}
	}, h = () => {
		u || (m(), f = requestAnimationFrame(h));
	}, g = (t, r) => {
		let i = e.getBoundingClientRect(), a = e.width / n.dpr, o = e.height / n.dpr;
		return {
			x: (t - i.left) / i.width * a,
			y: (r - i.top) / i.height * o
		};
	}, _ = (e, t) => {
		for (let n of c) {
			let { x: r, y: i, w: a, h: o } = n.rect;
			if (e < r || e > r + a || t < i || t > i + o) continue;
			let s = Y(n), c = s.y - 12, l = s.y + s.h + 8;
			return (Number.isFinite(n.media.duration) ? n.media.duration : 0) > 0 && e >= s.x && e <= s.x + s.w && t >= c && t <= l ? {
				kind: "seek",
				state: n,
				fraction: Math.max(0, Math.min(1, (e - s.x) / s.w))
			} : {
				kind: "toggle",
				state: n
			};
		}
		return null;
	}, v = null, y = (e, t) => {
		let n = Number.isFinite(e.media.duration) ? e.media.duration : 0;
		n <= 0 || (e.media.currentTime = n * t);
	}, b = (e) => {
		try {
			e.media.play().catch((t) => {
				d(V(e.el, e.media, "play", t));
			});
		} catch (t) {
			d(V(e.el, e.media, "play", t));
		}
	}, S = (t) => {
		let { x: n, y: r } = g(t.clientX, t.clientY), i = _(n, r);
		i && (i.kind === "seek" ? (v = {
			state: i.state,
			wasPlaying: !i.state.media.paused
		}, i.state.media.pause(), y(i.state, i.fraction), e.setPointerCapture(t.pointerId), t.preventDefault()) : i.state.media.paused ? b(i.state) : i.state.media.pause());
	}, C = (e) => {
		let { x: t, y: n } = g(e.clientX, e.clientY);
		p = null;
		for (let e of c) {
			let { x: r, y: i, w: a, h: o } = e.rect;
			if (t >= r && t <= r + a && n >= i && n <= i + o) {
				p = e;
				break;
			}
		}
		if (v) {
			let e = Y(v.state), n = Math.max(0, Math.min(1, (t - e.x) / e.w));
			y(v.state, n);
		}
	}, w = () => {
		p = null;
	}, T = (t) => {
		if (!v) return;
		let { wasPlaying: n, state: r } = v;
		v = null, e.releasePointerCapture(t.pointerId), n && b(r);
	};
	return c.length > 0 ? (e.addEventListener("pointerdown", S), e.addEventListener("pointermove", C), e.addEventListener("pointerleave", w), e.addEventListener("pointerup", T), e.addEventListener("pointercancel", T), e.style.cursor = "pointer", h()) : l.length > 0 && m(), {
		play(e) {
			for (let t of c) (!e || t.el.mediaPath === e) && b(t);
		},
		pause(e) {
			for (let t of c) (!e || t.el.mediaPath === e) && t.media.pause();
		},
		destroy() {
			if (!u) {
				u = !0, f !== null && cancelAnimationFrame(f), e.removeEventListener("pointerdown", S), e.removeEventListener("pointermove", C), e.removeEventListener("pointerleave", w), e.removeEventListener("pointerup", T), e.removeEventListener("pointercancel", T), e.style.cursor = "";
				for (let e of c) e.detachListeners(), e.media.pause(), e.media.removeAttribute("src"), e.media.load(), URL.revokeObjectURL(e.objectUrl);
			}
		}
	};
}
function z(e, t) {
	return {
		x: R(e.x, t),
		y: R(e.y, t),
		w: R(e.width, t),
		h: R(e.height, t)
	};
}
function B(e, t, n) {
	let r = Math.max(10, Math.min(14, t.h * .12));
	e.save(), e.font = `500 ${r}px system-ui, -apple-system, sans-serif`, e.textAlign = "center", e.textBaseline = "middle";
	let i = r + 12, a = Math.min(t.w, Math.max(100, e.measureText(n).width + 24));
	X(e, t.x + (t.w - a) / 2, t.y + (t.h - i) / 2, a, i, i / 2), e.fillStyle = "rgba(20, 20, 20, 0.72)", e.fill(), e.fillStyle = "rgba(255, 255, 255, 0.95)", e.fillText(n, t.x + t.w / 2, t.y + t.h / 2), e.restore();
}
function Me(e, t) {
	return /* @__PURE__ */ Error(`Embedded ${e.mediaKind} fetch failed for "${e.mediaPath}" (mime=${e.mimeType || "unknown"}): ${H(t)}`);
}
function V(e, t, n, r) {
	let i = "";
	try {
		i = e.mimeType ? t.canPlayType(e.mimeType) : "";
	} catch {}
	let a = t.error, o = [
		`mime=${e.mimeType || "unknown"}`,
		`canPlayType=${i || "no"}`,
		`readyState=${t.readyState}`,
		`networkState=${t.networkState}`
	];
	a && o.push(`mediaError=${a.code}${a.message ? ` ${a.message}` : ""}`);
	let s = r === void 0 ? "" : `: ${H(r)}`;
	return /* @__PURE__ */ Error(`Embedded ${e.mediaKind} ${n} failed for "${e.mediaPath}" (${o.join("; ")})${s}`);
}
function H(e) {
	return e instanceof Error ? `${e.name || "Error"}${e.message ? `: ${e.message}` : ""}` : String(e);
}
var U = 28, W = 14, Ne = 72, Pe = 10, G = 3;
function Fe(e, t, n) {
	let r = Number.isFinite(n.duration) ? n.duration : 0, a = r > 0 ? Math.min(1, n.currentTime / r) : 0, o = t.posterRect;
	i(e, o.x + o.w / 2, o.y + o.h / 2, o.w, o.h, n.paused ? "paused" : "playing"), t.el.mediaKind === "audio" ? Le(e, t, n, r, a) : Ie(e, t, n, r, a);
}
function Ie(e, t, n, r, i) {
	let { x: a, y: o, w: s, h: c } = t.rect, l = Math.max(28, Math.min(56, c * .22)), u = o + c - l;
	e.save();
	let d = e.createLinearGradient(0, u, 0, o + c);
	d.addColorStop(0, "rgba(0, 0, 0, 0)"), d.addColorStop(1, "rgba(0, 0, 0, 0.55)"), e.fillStyle = d, e.fillRect(a, u, s, l), e.restore();
	let f = Y(t);
	q(e, f, i, r > 0), e.save(), e.font = "500 11px system-ui, -apple-system, sans-serif", e.textBaseline = "middle", e.shadowColor = "rgba(0, 0, 0, 0.75)", e.shadowBlur = 3, e.fillStyle = "rgba(255, 255, 255, 0.95)", K(e, n.currentTime, r, f.x, f.y - 10, "bottom"), e.restore();
}
function Le(e, t, n, r, i) {
	let a = J(t.rect);
	e.save(), X(e, a.x, a.y, a.w, a.h, a.h / 2), e.fillStyle = "rgba(20, 20, 20, 0.72)", e.fill(), e.font = "500 11px system-ui, -apple-system, sans-serif", e.textBaseline = "middle", e.fillStyle = "rgba(255, 255, 255, 0.95)", K(e, n.currentTime, r, a.x + W, a.y + a.h / 2, "middle"), e.restore(), q(e, Y(t), i, r > 0);
}
function K(e, t, n, r, i, a) {
	let o = Z(t), s = Z(n), c = Oe(e), l = ke(e, o, c), u = ke(e, s, c), d = e.measureText(" / ").width, f = Math.max(l, u);
	Ae(e, o, r + f - l, i, c);
	let p = e.textAlign;
	e.textAlign = "left", e.fillText(" / ", r + f, i), e.textAlign = p, Ae(e, s, r + f + d, i, c);
}
function q(e, t, n, r) {
	let i = t.h / 2;
	if (e.save(), X(e, t.x, t.y, t.w, t.h, i), e.fillStyle = "rgba(255, 255, 255, 0.35)", e.fill(), n > 0 && (X(e, t.x, t.y, t.w * n, t.h, i), e.fillStyle = "#fff", e.fill()), r) {
		let r = Math.max(t.x + 5, Math.min(t.x + t.w - 5, t.x + t.w * n));
		e.shadowColor = "rgba(0, 0, 0, 0.3)", e.shadowBlur = 3, e.fillStyle = "#fff", e.beginPath(), e.arc(r, t.y + t.h / 2, 5, 0, Math.PI * 2), e.fill();
	}
	e.restore();
}
function J(e) {
	let t = Math.max(220, e.w - 24);
	return {
		x: e.x + e.w / 2 - t / 2,
		y: e.y + e.h - U - 4,
		w: t,
		h: U
	};
}
function Y(e) {
	if (e.el.mediaKind === "audio") {
		let t = J(e.rect), n = t.x + W + Ne + Pe, r = Math.max(40, t.x + t.w - W - n);
		return {
			x: n,
			y: t.y + (t.h - G) / 2,
			w: r,
			h: G
		};
	}
	let t = e.rect, n = Math.max(12, t.w * .025), r = Math.max(12, Math.min(18, t.h * .05));
	return {
		x: t.x + n,
		y: t.y + t.h - G - r,
		w: t.w - n * 2,
		h: G
	};
}
function X(e, t, n, r, i, a) {
	let o = Math.min(a, i / 2, r / 2);
	e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.quadraticCurveTo(t + r, n, t + r, n + o), e.lineTo(t + r, n + i - o), e.quadraticCurveTo(t + r, n + i, t + r - o, n + i), e.lineTo(t + o, n + i), e.quadraticCurveTo(t, n + i, t, n + i - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath();
}
function Z(e) {
	if (!Number.isFinite(e) || e < 0) return "0:00";
	let t = Math.floor(e);
	return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`;
}
//#endregion
//#region packages/pptx/src/slide-nav.ts
function Re(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		r !== void 0 && r !== "" && !t.has(r) && t.set(r, n);
	}
	return t;
}
function ze(e, t) {
	if (e === "") return;
	let n = Te("ppt/slides", e);
	return t.get(n);
}
function Be(e, t, n) {
	let r = Ee(e);
	return r === null ? ze(e, t) : De(r, n, t.size);
}
//#endregion
//#region packages/pptx/src/slide-repository.ts
var Ve = class {
	#e;
	#t;
	#n;
	#r = 0;
	#i = Promise.resolve();
	#a;
	#o;
	constructor(e) {
		if (!Number.isSafeInteger(e.slideCount) || e.slideCount < 0) throw TypeError("slideCount must be a non-negative safe integer");
		this.#e = e.slideCount, this.#t = e.loadSlide, this.#n = new ye({
			maxEntries: e.maxCachedSlides,
			maxWeight: e.maxCachedStructuralBytes,
			measure: (e) => xe(e).jsonBytes
		});
	}
	get slideCount() {
		return this.#e;
	}
	get usage() {
		return this.#n.usage;
	}
	withSlide(e, t) {
		this.#c(e);
		let n = this.#r, r = this.#i.then(async () => {
			if (n !== this.#r) throw this.#a ? this.#a : Error("PPTX slide repository generation is stale");
			if (this.#a) throw this.#a;
			let r = await this.#s(e, n);
			try {
				return await t(r);
			} catch (e) {
				let t = He(e);
				throw t ? (this.#l(t, n), this.#o === n ? this.#a ?? t : t) : e;
			}
		});
		return this.#i = r.then(() => void 0, () => void 0), r;
	}
	async #s(e, t) {
		return this.#n.getOrLoad(e, async () => {
			let n;
			try {
				n = await this.#t(e);
			} catch (e) {
				let n = He(e);
				throw n ? (this.#l(n, t), this.#o === t ? this.#a ?? n : n) : e;
			}
			if (this.#o === t && this.#a) throw this.#a;
			return n;
		});
	}
	clear() {
		this.#r += 1, this.#a = void 0, this.#o = void 0, this.#n.clear();
	}
	#c(e) {
		if (!Number.isSafeInteger(e) || e < 0 || e >= this.#e) throw RangeError(`Slide index ${e} out of range (count: ${this.#e})`);
	}
	#l(e, t) {
		t !== this.#r || this.#a || (this.#a = e, this.#o = t, this.#r += 1, this.#n.clear());
	}
};
function He(e) {
	return e instanceof y ? e : _(e);
}
//#endregion
//#region packages/pptx/src/worker.ts?worker&inline
var Ue = "var e=class e extends Error{code;constructor(t,n){super(n),this.name=`OoxmlError`,this.code=t,Object.setPrototypeOf(this,e.prototype)}},t=class e extends Error{code=`ooxml-resource-limit`;details;constructor(t,n){super(t),this.name=`OoxmlResourceLimitError`;let r=n.violation,i=Object.freeze({format:r.format,operation:r.operation,resource:r.resource,metric:r.metric,...r.part===void 0?{}:{part:r.part},limit:r.limit,observed:r.observed,configurable:r.configurable,usage:Object.freeze({archiveEntryCount:r.usage.archiveEntryCount,declaredInflatedBytes:r.usage.declaredInflatedBytes,...r.usage.largestInflatedEntryBytes===void 0?{}:{largestInflatedEntryBytes:r.usage.largestInflatedEntryBytes},distinctInflatedBytes:r.usage.distinctInflatedBytes,operationInflatedBytes:r.usage.operationInflatedBytes})});this.details=Object.freeze({stage:n.stage,violation:i}),Object.setPrototypeOf(this,e.prototype)}};const n=`https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap`,r=`https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap`,i={calibri:{url:`https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap`,loadFamily:`Carlito`},\"calibri light\":{url:`https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap`,loadFamily:`Carlito`},cambria:{url:`https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap`,loadFamily:`Caladea`},\"cambria math\":{url:`https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap`,loadFamily:`Caladea`},\"nunito sans\":{url:`https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap`},nunito:{url:`https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap`},\"open sans\":{url:`https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap`},roboto:{url:`https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap`},lato:{url:`https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap`},montserrat:{url:`https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap`},poppins:{url:`https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap`},raleway:{url:`https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap`},\"playfair display\":{url:`https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap`},ubuntu:{url:`https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap`},\"sakkal majalla\":{url:n,loadFamily:`Noto Naskh Arabic`},\"traditional arabic\":{url:n,loadFamily:`Noto Naskh Arabic`},\"simplified arabic\":{url:n,loadFamily:`Noto Naskh Arabic`},\"arabic typesetting\":{url:n,loadFamily:`Noto Naskh Arabic`},\"univers next arabic\":{url:r,loadFamily:`Noto Sans Arabic`},\"noto naskh arabic\":{url:n,loadFamily:`Noto Naskh Arabic`},\"noto sans arabic\":{url:r,loadFamily:`Noto Sans Arabic`}};function a(e){if(!e)return null;let t=e.toLowerCase();return/[ᄀ-ᇿ㄰-㆏가-힯]/.test(e)?`kr`:/[぀-ヿ]/.test(e)?`jp`:/jhenghei|微軟正黑|新細明|細明|pmingliu|mingliu|dfkai|標楷|華康|cns11643|kaiti tc|ming\\s*liu/.test(t)||/新細明體|細明體|標楷體|微軟正黑體|華康/.test(e)?`tc`:/simsun|nsimsun|simhei|simkai|simfang|yahei|dengxian|fangsong|kaiti|youyuan|lisu|stsong|stkaiti|stfangsong|stheiti|stxihei|stzhongsong|songti sc|heiti sc|微软雅黑/.test(t)||/宋体|黑体|楷体|仿宋|等线|微软雅黑|隶书|幼圆/.test(e)?`sc`:/malgun|batang|gulim|dotum|gungsuh|nanum|new gulim|hancom|hy(gothic|graphic|namu)?/.test(t)?`kr`:/\\bmeiryo\\b|\\byu\\s*(gothic|mincho)\\b|yugothic|yumincho|hiragino|\\bms\\s*(gothic|mincho|pgothic|pmincho|ui\\s*gothic)\\b|\\bms[pg]?(gothic|mincho)\\b|ipa(ex)?(gothic|mincho)|noto\\s+(sans|serif)\\s+jp|游ゴシック|游明朝|ＭＳ|メイリオ|ヒラギノ/.test(t)||/游ゴシック|游明朝|ＭＳ ゴシック|ＭＳ 明朝|ＭＳ Ｐゴシック|メイリオ|ヒラギノ/.test(e)?`jp`:null}const o=e=>`https://fonts.googleapis.com/css2?family=${e}:wght@400;700&display=swap`,s={\"noto sans kr\":{url:o(`Noto+Sans+KR`)},\"noto sans sc\":{url:o(`Noto+Sans+SC`)},\"noto sans tc\":{url:o(`Noto+Sans+TC`)},\"noto sans jp\":{url:o(`Noto+Sans+JP`)},\"noto serif kr\":{url:o(`Noto+Serif+KR`)},\"noto serif sc\":{url:o(`Noto+Serif+SC`)},\"noto serif tc\":{url:o(`Noto+Serif+TC`)},\"noto serif jp\":{url:o(`Noto+Serif+JP`)},\"noto sans\":{url:o(`Noto+Sans`)},\"noto serif\":{url:o(`Noto+Serif`)},\"noto sans devanagari\":{url:o(`Noto+Sans+Devanagari`)},\"noto sans thai\":{url:o(`Noto+Sans+Thai`)},\"noto sans hebrew\":{url:o(`Noto+Sans+Hebrew`)},\"noto serif hebrew\":{url:o(`Noto+Serif+Hebrew`)}};var ee=class e{hasHan=!1;hasHangul=!1;hasKana=!1;hasArabic=!1;hasThai=!1;hasHebrew=!1;hasDevanagari=!1;hasCyrGreek=!1;constructor(e){this.cjkLang=e}clone(){let t=new e(this.cjkLang);return t.hasHan=this.hasHan,t.hasHangul=this.hasHangul,t.hasKana=this.hasKana,t.hasArabic=this.hasArabic,t.hasThai=this.hasThai,t.hasHebrew=this.hasHebrew,t.hasDevanagari=this.hasDevanagari,t.hasCyrGreek=this.hasCyrGreek,t}addText(e){let t=()=>this.hasHan&&this.hasHangul&&this.hasKana&&this.hasArabic&&this.hasThai&&this.hasHebrew&&this.hasDevanagari&&this.hasCyrGreek;outer:for(let n of e)if(n)for(let e of n){let n=e.codePointAt(0);if(n!==void 0&&!(n<=591)&&(n>=4352&&n<=4607||n>=12592&&n<=12687||n>=44032&&n<=55215?this.hasHangul=!0:n>=12352&&n<=12543?this.hasKana=!0:n>=13312&&n<=19903||n>=19968&&n<=40959||n>=63744&&n<=64255||n>=131072&&n<=195103?this.hasHan=!0:n>=1536&&n<=1791||n>=1872&&n<=1919||n>=2208&&n<=2303||n>=64336&&n<=65023||n>=65136&&n<=65279?this.hasArabic=!0:n>=3584&&n<=3711?this.hasThai=!0:n>=1424&&n<=1535||n>=64285&&n<=64335?this.hasHebrew=!0:n>=2304&&n<=2431?this.hasDevanagari=!0:(n>=1024&&n<=1279||n>=880&&n<=1023)&&(this.hasCyrGreek=!0),t()))break outer}}names(){let e=[],t=new Set;this.hasHangul&&t.add(`kr`),this.hasKana&&t.add(`jp`),this.hasHan&&t.size===0&&t.add(this.cjkLang??`jp`);for(let n of[`kr`,`sc`,`tc`,`jp`])if(t.has(n)){let t={kr:`KR`,sc:`SC`,tc:`TC`,jp:`JP`}[n];e.push(`Noto Sans ${t}`,`Noto Serif ${t}`)}return this.hasCyrGreek&&e.push(`Noto Sans`,`Noto Serif`),this.hasArabic&&e.push(`Noto Naskh Arabic`,`Noto Sans Arabic`),this.hasThai&&e.push(`Noto Sans Thai`),this.hasHebrew&&e.push(`Noto Sans Hebrew`,`Noto Serif Hebrew`),this.hasDevanagari&&e.push(`Noto Sans Devanagari`),e}},c=class e extends RangeError{code=`ooxml-decoded-image-limit`;constructor(t,n,r){super(`OOXML decoded image limit exceeded: ${t} ${r} > ${n}`),this.metric=t,this.limit=n,this.observed=r,this.name=`OoxmlDecodedImageLimitError`,Object.setPrototypeOf(this,e.prototype)}};function te(e){if(!e.startsWith(`data:`))return null;let t=e.indexOf(`,`);if(t===-1)return null;let n=atob(e.slice(t+1)),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var l=class{state=`uninitialized`;generationValue=0;readiness;poisonListeners=new Set;constructor(e,t,n){this.initialize=e,this.reinitialize=t,this.normalizeFailure=n}get generation(){return this.generationValue}get poisoned(){return this.state===`poisoned`}onPoison(e){return this.poisonListeners.add(e),()=>this.poisonListeners.delete(e)}async ensureReady(){if(this.state!==`ready`){if(!this.readiness){let e=this.state===`uninitialized`?this.initialize:this.reinitialize;this.readiness=Promise.resolve().then(e).then(()=>{this.generationValue+=1,this.state=`ready`,this.readiness=void 0},e=>{throw this.readiness=void 0,e})}await this.readiness}}run(e){try{return e()}catch(e){let t=this.normalizeFailure(e);throw t?(this.poison(t),t):e}}tryRunReady(e){if(this.state!==`ready`)return{current:!1};let t=this.generationValue,n=this.run(e);return this.state!==`ready`||t!==this.generationValue?{current:!1}:{current:!0,generation:t,value:n}}poison(e){this.state=`poisoned`,this.readiness=void 0;for(let t of this.poisonListeners)t(e)}assertCurrent(e){if(this.state!==`ready`||e!==this.generationValue)throw Error(`WASM archive session belongs to a discarded runtime generation`)}},u=class e extends Error{code=`parser-crashed`;constructor(t){super(t),this.name=`WasmTrapError`,Object.setPrototypeOf(this,e.prototype)}};function ne(e){let t=globalThis.WebAssembly?.RuntimeError;return t&&e instanceof t||e instanceof RangeError?!0:e instanceof Error?e.name===`RuntimeError`||e.name===`CompileError`||e.name===`LinkError`||e.name===`InternalError`||e.name===`OOMError`:!1}function re(e){try{if((typeof e!=`object`||!e)&&typeof e!=`function`)return;let t=Reflect.get(e,`__destroy_into_raw`);typeof t==`function`&&Reflect.apply(t,e,[])}catch{}}function ie(e,t){return e({module_or_path:t})}var ae=class{runtime;wasmInput=null;currentArchive=null;constructor(e,t={}){this.init=e,this.options=t,this.runtime=new l(()=>this.invokeConfigured(this.init),()=>this.invokeConfigured(this.options.reinit??this.init),oe),this.runtime.onPoison(()=>this.dropPoisonedArchive())}setWasmInput(e){this.wasmInput=e,this.runtime.ensureReady().catch(()=>void 0)}setWasmUrl(e){this.setWasmInput(e)}get archive(){return this.currentArchive}setArchive(e){this.freeArchive(),this.currentArchive=e}disposeArchive(){this.freeArchive()}get poisoned(){return this.runtime.poisoned}async ensureReady(){await this.runtime.ensureReady()}run(e){return this.runtime.run(e)}poison(){this.runtime.poison(new u(`WASM parser was recycled`))}invokeConfigured(e){return this.wasmInput===null?Promise.reject(Error(`WasmParserHost: setWasmInput was never called`)):ie(e,this.wasmInput)}freeArchive(){this.currentArchive!==null&&this.options.freeArchive&&this.options.freeArchive(this.currentArchive),this.currentArchive=null}dropPoisonedArchive(){let e=this.currentArchive;this.currentArchive=null,re(e)}};function oe(e){return ne(e)?new u(`WASM parser trapped and was recycled: ${e instanceof Error?e.message:String(e)}`):null}function d(e){return typeof e==`number`&&Number.isSafeInteger(e)&&e>0}function f(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return d(t.requiredBytes)&&d(t.offeredBytes)&&t.requiredBytes>t.offeredBytes}var p=class e extends RangeError{code=`ooxml-insufficient-credit`;requiredBytes;offeredBytes;constructor(t){super(`Pull unit requires ${t.requiredBytes} bytes but credit is ${t.offeredBytes}`),this.name=`PullSessionInsufficientCreditError`,this.requiredBytes=t.requiredBytes,this.offeredBytes=t.offeredBytes,Object.setPrototypeOf(this,e.prototype)}};function se(e){if(e instanceof p)return e;let t=e instanceof Error?e.message:String(e);if(!t.startsWith(`OOXML_INSUFFICIENT_CREDIT:`))return;let n;try{n=JSON.parse(t.slice(26))}catch{return}if(!n||typeof n!=`object`||Array.isArray(n))return;let r=n;if(!(r.code!==`ooxml-insufficient-credit`||!f(r)))return new p(r)}function ce(e,t,n){let r=se(e);if(!(!r||r.offeredBytes!==t||r.requiredBytes>n))return r}const le=`OOXML_RESOURCE_LIMIT:`;function m(e){return typeof e==`number`&&Number.isSafeInteger(e)&&e>=0}function ue(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return m(t.archiveEntryCount)&&m(t.declaredInflatedBytes)&&(t.largestInflatedEntryBytes===void 0||m(t.largestInflatedEntryBytes))&&m(t.distinctInflatedBytes)&&m(t.operationInflatedBytes)}function de(e){let t;try{t=JSON.parse(new TextDecoder().decode(e))}catch{throw TypeError(`OOXML resource usage checkpoint is not valid JSON`)}if(!ue(t))throw TypeError(`OOXML resource usage checkpoint is invalid`);return t}function fe(e){return e===`docx`||e===`xlsx`||e===`pptx`}function pe(e){return e===`container`||e===`decompression`||e===`parsing`||e===`serialization`||e===`layout`||e===`rendering`||e===`worker`}function h(e,t){return typeof e==`string`&&e.length>0&&e.length<=t&&!/[\\u0000-\\u001f\\u007f]/u.test(e)}function g(e){return h(e,128)&&/^[a-z0-9][a-z0-9-]*$/u.test(e)}function me(e){return!h(e,4096)||e.startsWith(`/`)||e.startsWith(`\\\\`)||e.includes(`\\\\`)||e.includes(`?`)||e.includes(`#`)||e.includes(`://`)||/^[a-z]:/iu.test(e)?!1:e.split(`/`).every(e=>e!==``&&e!==`.`&&e!==`..`)}const _=new Map([[`archive-entry:declared-inflated-bytes`,{stage:`container`,part:`required`}],[`archive-entry:actual-inflated-bytes`,{stage:`decompression`,part:`required`}],[`archive:entry-count`,{stage:`container`,part:`forbidden`}],[`archive:central-directory-bytes`,{stage:`container`,part:`forbidden`,configurable:!1}],[`archive:distinct-inflated-bytes`,{stage:`decompression`,part:`required`}],[`xml-event:bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`xml-context:bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`xml-tree:depth`,{stage:`parsing`,part:`optional`,configurable:!1}],[`worksheet-row:projected-bytes`,{stage:`parsing`,part:`optional`,configurable:!1}],[`worksheet-shell:projected-bytes`,{stage:`parsing`,part:`optional`,configurable:!1}]]),he=new Set([..._.keys()].map(e=>e.slice(0,e.indexOf(`:`)))),ge=new Set([..._.keys()].map(e=>e.slice(e.indexOf(`:`)+1)));function _e(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return!fe(t.format)||!h(t.operation,256)||!g(t.resource)||!g(t.metric)||!m(t.limit)||!m(t.observed)||typeof t.configurable!=`boolean`||!ue(t.usage)?!1:!(`part`in t)||me(t.part)}function v(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;if(!pe(t.stage)||!_e(t.violation))return!1;let n=t.violation,r=_.get(`${n.resource}:${n.metric}`);return r?t.stage!==r.stage||r.configurable===!1&&n.configurable!==!1?!1:r.part===`required`?n.part!==void 0:r.part===`forbidden`?n.part===void 0:!0:!(he.has(n.resource)&&ge.has(n.metric))}function ve(e){return{archiveEntryCount:e.archiveEntryCount,declaredInflatedBytes:e.declaredInflatedBytes,...e.largestInflatedEntryBytes===void 0?{}:{largestInflatedEntryBytes:e.largestInflatedEntryBytes},distinctInflatedBytes:e.distinctInflatedBytes,operationInflatedBytes:e.operationInflatedBytes}}function ye(e){if(!v(e))return;let t=e.violation,n={stage:e.stage,violation:{format:t.format,operation:t.operation,resource:t.resource,metric:t.metric,...t.part===void 0?{}:{part:t.part},limit:t.limit,observed:t.observed,configurable:t.configurable,usage:ve(t.usage)}};return v(n)?n:void 0}function be(e){let t=e.violation;return`OOXML resource limit exceeded${t.part?` for ${t.part}`:``}: ${t.metric} ${t.observed} > ${t.limit}`}function y(e){let n=e instanceof Error?e.message:String(e);if(!n.startsWith(le))return;let r;try{r=JSON.parse(n.slice(21))}catch{return}if(!r||typeof r!=`object`)return;let i=r;if(!(i.code!==`ooxml-resource-limit`||!v(i.details)))return new t(be(i.details),i.details)}function xe(n){if(n instanceof c)return{message:n.message,errorName:n.name,code:n.code,decodedImage:{metric:n.metric,limit:n.limit,observed:n.observed}};let r=se(n);if(r)return{message:r.message,errorName:r.name,code:r.code,insufficientCredit:{requiredBytes:r.requiredBytes,offeredBytes:r.offeredBytes}};let i=n instanceof e||n instanceof t?n:y(n);if(i instanceof t){let e=ye(i.details);return e?{message:typeof i.message==`string`?i.message:be(e),errorName:`OoxmlResourceLimitError`,code:`ooxml-resource-limit`,resourceLimit:e}:{message:`Invalid OOXML resource-limit error payload`,errorName:`Error`}}if(i instanceof e)return{message:typeof i.message==`string`?i.message:String(i.message),errorName:h(i.name,128)?i.name:`OoxmlError`,...g(i.code)?{code:i.code}:{}};let a=n instanceof Error?n.message:String(n);if(typeof a==`string`&&a.startsWith(le))return{message:`Invalid OOXML resource-limit payload`,errorName:`Error`};let o=n instanceof Error?n:Error(a),s=o;return{message:typeof o.message==`string`?o.message:String(o.message),errorName:h(o.name,128)?o.name:`Error`,...typeof s.code==`string`?{code:s.code}:{}}}function b(e){try{return xe(e)}catch{return{message:`Worker operation failed with an unreadable error`,errorName:`Error`}}}const Se=new Set([`encrypted`,`invalid-password`,`unsupported-encryption`,`legacy-binary-format`,`not-ooxml`]);function Ce(n){if(n.code===`ooxml-decoded-image-limit`&&n.decodedImage&&(n.decodedImage.metric===`image-pixels`||n.decodedImage.metric===`active-decoded-bytes`)&&m(n.decodedImage.limit)&&m(n.decodedImage.observed)&&n.decodedImage.observed>n.decodedImage.limit)return new c(n.decodedImage.metric,n.decodedImage.limit,n.decodedImage.observed);if(n.code===`ooxml-insufficient-credit`&&f(n.insufficientCredit))return new p(n.insufficientCredit);if(n.code===`ooxml-resource-limit`&&v(n.resourceLimit))return new t(n.message,n.resourceLimit);if(n.code&&Se.has(n.code))return new e(n.code,n.message);let r=n.errorName===`TypeError`?TypeError(n.message):n.errorName===`RangeError`?RangeError(n.message):Error(n.message);return n.errorName&&(r.name=n.errorName),n.code!==void 0&&Object.assign(r,{code:n.code}),r}function we(e){return e.byteOffset===0&&e.byteLength===e.buffer.byteLength&&e.buffer instanceof ArrayBuffer?e.buffer:e.slice().buffer}const x=67108864;Object.freeze({maxArchiveEntryBytes:134217728,maxTotalInflatedBytes:268435456,maxArchiveEntries:4096});function Te(e){return[e.maxArchiveEntryBytes===null?0n:BigInt(e.maxArchiveEntryBytes),e.maxTotalInflatedBytes===null?0n:BigInt(e.maxTotalInflatedBytes),e.maxArchiveEntries===null?0n:BigInt(e.maxArchiveEntries)]}const S=`ooxml-pull-v1`;function C(e,t){if(!Number.isSafeInteger(e)||e<=0)throw RangeError(`${t} must be a positive safe integer`)}function Ee(e){if(!(typeof e==`string`&&e.length>0||typeof e==`number`&&Number.isSafeInteger(e)&&e>0))throw RangeError(`session id must be a non-empty string or positive safe integer`)}var w=class{owner;queue=Promise.resolve();leases=new Map;retainedBytes=0;retainedCount=0;maxRetainedBytes;maxRetainedCount;cleanups=new Set;pendingFatalCleanups=[];poisonRunning=!1;fatal;constructor(e){this.maxRetainedBytes=e?.maxRetainedBytes??64*1024*1024,this.maxRetainedCount=e?.maxRetainedCount??256,C(this.maxRetainedBytes,`max retained lease bytes`),C(this.maxRetainedCount,`max retained lease count`)}enqueue(e){let t=this.queue.then(e,e);return this.queue=t.then(()=>void 0,()=>void 0),t}acquire(e){return this.owner===void 0?(this.owner=e,!0):this.owner===e}release(e){this.owner===e&&(this.owner=void 0)}retainLease(e,t,n){if(!Number.isSafeInteger(n)||n<0)throw RangeError(`retained lease bytes are invalid`);let r=this.leases.get(e)??new Map;if(r.has(t))throw Error(`driver returned a duplicate lease id`);if(this.retainedCount+1>this.maxRetainedCount)throw RangeError(`retained lease count exceeds limit`);if(this.retainedBytes+n>this.maxRetainedBytes)throw RangeError(`retained lease bytes exceed limit`);r.set(t,n),this.leases.set(e,r),this.retainedCount++,this.retainedBytes+=n}releaseLease(e,t){let n=this.leases.get(e),r=n?.get(t);r!==void 0&&(n?.delete(t),n?.size===0&&this.leases.delete(e),this.retainedCount--,this.retainedBytes-=r)}registerCleanup(e){return this.fatal?(this.poisonRunning?this.pendingFatalCleanups.push(e):this.enqueue(e).catch(()=>void 0),()=>void 0):(this.cleanups.add(e),()=>this.cleanups.delete(e))}get fatalError(){return this.fatal}get registeredHostCount(){return this.cleanups.size}async poison(e){if(this.fatal??=e,this.poisonRunning)return this.fatal;this.poisonRunning=!0,this.pendingFatalCleanups.push(...this.cleanups);try{let e;for(;(e=this.pendingFatalCleanups.shift())!==void 0;)await e().catch(()=>void 0)}finally{this.poisonRunning=!1}return this.fatal}},De=class{options;coordinator;coordinatorOwner=Symbol(`pull-session-host`);unregisterCleanup;sequence=0;unacked;leases=new Map;activeDriverLeases=new Set;nextWireLeaseId;cancelRequested=!1;cancelComplete=!1;closeRequested=!1;closeComplete=!1;driverCancelComplete=!1;driverCloseComplete=!1;completed=!1;constructor(e){Ee(e.sessionId),C(e.operationId,`operation id`),C(e.generation,`generation`),C(e.maxByteCredit,`max byte credit`),e.wireLeaseIdStart!==void 0&&C(e.wireLeaseIdStart,`wire lease id start`),this.options=e,this.coordinator=e.coordinator,this.nextWireLeaseId=e.wireLeaseIdStart??1,this.unregisterCleanup=this.coordinator.registerCleanup(()=>this.forceFatalCleanup())}dispatch(e,t){return this.coordinator.enqueue(async()=>{let n=await this.execute(e);try{t(n.response,n.transfer)}catch(e){throw await this.rollbackFailedPost(n),e}})}async rollbackFailedPost(e){let t=e.response;if(t.kind===`chunk`){let n=t.leaseId===void 0?void 0:this.leases.get(t.leaseId);try{await this.options.driver.disposeInvalidChunk?.({payload:t.payload,byteLength:t.byteLength,done:t.done,leaseId:n?.driverLeaseId,retainedBytes:n?.retainedBytes,transfer:e.transfer})}catch{}}this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);for(let[e,t]of[...this.leases])try{await this.options.driver.releaseLease?.(t.driverLeaseId)}catch{}finally{this.leases.delete(e),this.activeDriverLeases.delete(t.driverLeaseId),this.coordinator.releaseLease(this.coordinatorOwner,e)}if(this.cancelRequested=!0,!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch{}this.unregisterCleanup()}async execute(e){try{if(this.isStaleLifecycle(e)){let t=e.kind===`cancel`?`cancel`:`close`;return this.sameOperationIdentity(e)?{response:this.accepted(e,t,!0)}:{response:this.errorResponse(e,{message:`stale lifecycle targets another session or operation`,errorName:`PullSessionProtocolError`,code:`ooxml-stale-lifecycle`})}}this.validateCommandIdentity(e);let t=this.coordinator.fatalError;if(t)return e.kind===`pull`?{response:this.errorResponse(e,t)}:(e.kind===`cancel`?await this.cancel():e.kind===`close`?await this.close():e.kind===`release`&&await this.release(e.leaseId),{response:this.accepted(e,e.kind)});switch(e.kind){case`pull`:return await this.pull(e);case`ack`:return await this.ack(e.sequence),{response:this.accepted(e,`ack`)};case`release`:return await this.release(e.leaseId),{response:this.accepted(e,`release`)};case`cancel`:return await this.cancel(),{response:this.accepted(e,`cancel`)};case`close`:return await this.close(),{response:this.accepted(e,`close`)}}}catch(t){let n=b(t);return n.code===`ooxml-resource-limit`&&(n=await this.coordinator.poison(n)),{response:this.errorResponse(e,n)}}}async pull(e){if(this.closeRequested||this.cancelRequested||this.completed)throw Error(`pull session is closed`);if(this.unacked)throw Error(`previous chunk is not acknowledged`);if(!Number.isSafeInteger(e.sequence)||e.sequence<0||e.sequence!==this.sequence)throw Error(`pull command sequence mismatch`);if(this.validateHostCredit(e.byteCredit),!this.coordinator.acquire(this.coordinatorOwner))throw Error(`another operation has an unacknowledged package chunk`);let t;try{t=await this.options.driver.pull(e.byteCredit)}catch(e){throw this.coordinator.release(this.coordinatorOwner),e}let n=!1,r=!1,i,a;try{let o=this.options.driver.measureChunk(t),s=this.arrayBufferTransferBytes(t.transfer);if(o<s)throw RangeError(`measured chunk bytes are below ArrayBuffer transfer bytes`);if(a=Math.max(o,s),t.leaseId!==void 0){if(C(t.leaseId,`lease id`),t.retainedBytes===void 0)throw Error(`retained lease bytes are required`);if(this.activeDriverLeases.has(t.leaseId))throw r=!0,Error(`driver returned an active duplicate lease id`);i=this.allocateWireLeaseId(),this.coordinator.retainLease(this.coordinatorOwner,i,t.retainedBytes),this.leases.set(i,{driverLeaseId:t.leaseId,retainedBytes:t.retainedBytes}),this.activeDriverLeases.add(t.leaseId),n=!0}else if(t.retainedBytes!==void 0)throw Error(`retained lease bytes require a lease id`);if(!Number.isSafeInteger(a)||a<0)throw RangeError(`host chunk byte length must be a non-negative safe integer`);if(a>e.byteCredit)throw RangeError(`host chunk exceeds byte credit`)}catch(e){let a;try{await this.options.driver.disposeInvalidChunk?.(t)}catch(e){a=e}if(n&&i!==void 0)try{await this.release(i)}catch(e){a??=e}else if(t.leaseId!==void 0&&!r)try{await this.options.driver.releaseLease?.(t.leaseId)}catch(e){a??=e}if(r)try{await this.cancel()}catch(e){a??=e}throw this.coordinator.release(this.coordinatorOwner),a||e}return this.unacked={sequence:this.sequence,done:t.done},{response:{kind:`chunk`,protocol:S,...this.identity(),requestId:e.requestId,sequence:this.sequence,byteLength:a,done:t.done,payload:t.payload,leaseId:i,usage:this.resourceUsage()},transfer:t.transfer}}async ack(e){if(!Number.isSafeInteger(e)||e<0)throw RangeError(`invalid ack sequence`);if(e<this.sequence)return;if(!this.unacked||e!==this.sequence)throw Error(`ack sequence mismatch`);let t=this.unacked.done;await this.options.driver.acknowledge?.(e),this.unacked=void 0,this.coordinator.release(this.coordinatorOwner),this.sequence++,t&&(this.completed=!0,this.maybeUnregisterCompleted())}async release(e){C(e,`wire lease id`);let t=this.leases.get(e);t&&(await this.options.driver.releaseLease?.(t.driverLeaseId),this.leases.delete(e),this.activeDriverLeases.delete(t.driverLeaseId),this.coordinator.releaseLease(this.coordinatorOwner,e),this.maybeUnregisterCompleted())}async cancel(){if(this.cancelComplete)return;this.cancelRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;try{await this.releaseAllLeases()}catch(t){e=t}if(!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch(t){e??=t}if(e)throw e;this.cancelComplete=!0,this.unregisterCleanup()}async close(){if(this.closeComplete)return;this.closeRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;try{await this.releaseAllLeases()}catch(t){e=t}if(!this.driverCloseComplete)try{await this.options.driver.close?.(),this.driverCloseComplete=!0}catch(t){e??=t}if(e)throw e;this.closeComplete=!0,this.unregisterCleanup()}async releaseAllLeases(){let e;for(let t of[...this.leases.keys()])try{await this.release(t)}catch(t){e??=t}if(e)throw e}validateCommandIdentity(e){if(e.protocol!==`ooxml-pull-v1`||e.sessionId!==this.options.sessionId||e.operationId!==this.options.operationId||e.generation!==this.options.generation||!Number.isSafeInteger(e.requestId)||e.requestId<=0)throw Error(`stale or mismatched pull session command`)}validateHostCredit(e){if(C(e,`byte credit`),e>this.options.maxByteCredit)throw RangeError(`byte credit exceeds host maximum`)}accepted(e,t,n=!1){return{kind:`accepted`,protocol:S,...n?{sessionId:e.sessionId,operationId:e.operationId,generation:e.generation}:this.identity(),requestId:e.requestId,command:t,usage:this.resourceUsage()}}identity(){return{sessionId:this.options.sessionId,operationId:this.options.operationId,generation:this.options.generation}}isStaleLifecycle(e){return(e.kind===`cancel`||e.kind===`close`)&&e.protocol===`ooxml-pull-v1`&&Number.isSafeInteger(e.requestId)&&e.requestId>0&&Number.isSafeInteger(e.generation)&&e.generation>0&&e.generation<this.options.generation}sameOperationIdentity(e){return e.sessionId===this.options.sessionId&&e.operationId===this.options.operationId}errorResponse(e,t){return{kind:`error`,protocol:S,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:t,usage:this.errorResourceUsage()}}async forceFatalCleanup(){this.cancelRequested=!0,this.unacked=void 0,this.coordinator.release(this.coordinatorOwner);let e;for(let t of[...this.leases.keys()])try{await this.release(t)}catch(t){e??=t}if(!this.driverCancelComplete)try{await this.options.driver.cancel?.(),this.driverCancelComplete=!0}catch(t){e??=t}if(e)throw e;this.unregisterCleanup()}allocateWireLeaseId(){if(!Number.isSafeInteger(this.nextWireLeaseId)||this.nextWireLeaseId<=0)throw RangeError(`wire lease id space exhausted`);return this.nextWireLeaseId++}arrayBufferTransferBytes(e){let t=0;for(let n of e??[])if(n instanceof ArrayBuffer&&(t+=n.byteLength,!Number.isSafeInteger(t)))throw RangeError(`ArrayBuffer transfer bytes overflow`);return t}maybeUnregisterCompleted(){this.completed&&this.leases.size===0&&this.unregisterCleanup()}resourceUsage(){return this.options.driver.resourceUsage?.()}errorResourceUsage(){try{return this.resourceUsage()}catch{return}}};function T(e,t){if(!Number.isSafeInteger(e)||e<0)throw Error(`${t} must be a non-negative safe integer`)}function E(e,t,n){return T(e,`resource measurement`),T(t,`resource measurement`),T(n,`resource measurement limit`),e>n||t>n||t>n-e?n===2**53-1?n:n+1:e+t}function Oe(e,t=2**53-1){T(t,`resource measurement limit`);let n=0;for(let r=0;r<e.length;r+=1){let i=e.charCodeAt(r),a;if(i<=127)a=1;else if(i<=2047)a=2;else if(i>=55296&&i<=56319&&r+1<e.length){let t=e.charCodeAt(r+1);t>=56320&&t<=57343?(a=4,r+=1):a=3}else a=3;if(n=E(n,a,t),n>t)return n}return n}function D(e,t=2**53-1){T(t,`resource measurement limit`);let n=E(0,2,t);if(n>t)return n;for(let r=0;r<e.length;r+=1){let i=e.charCodeAt(r),a;if(i===34||i===92||i===8||i===9||i===10||i===12||i===13)a=2;else if(i<=31)a=6;else if(i<=127)a=1;else if(i<=2047)a=2;else if(i>=55296&&i<=56319&&r+1<e.length){let t=e.charCodeAt(r+1);t>=56320&&t<=57343?(a=4,r+=1):a=6}else a=i>=55296&&i<=57343?6:3;if(n=E(n,a,t),n>t)return n}return n}function O(e,t){return E(0,e,t)}function k(e,t=2**53-1,n=!1){if(T(t,`resource measurement limit`),e===null)return{jsonBytes:O(4,t),stringValueUtf8Bytes:0};if(typeof e==`string`)return{jsonBytes:D(e,t),stringValueUtf8Bytes:Oe(e,t)};if(typeof e==`boolean`)return{jsonBytes:O(e?4:5,t),stringValueUtf8Bytes:0};if(typeof e==`number`)return{jsonBytes:O((Number.isFinite(e)?String(Object.is(e,-0)?0:e):`null`).length,t),stringValueUtf8Bytes:0};if(typeof e==`bigint`)throw TypeError(`BigInt values cannot be serialized to JSON`);if(Array.isArray(e)){let n=O(2,t),r=0;for(let i=0;i<e.length;i+=1){i!==0&&(n=E(n,1,t));let a=k(e[i],t,!0);n=E(n,a.jsonBytes,t),r=E(r,a.stringValueUtf8Bytes,t)}return{jsonBytes:n,stringValueUtf8Bytes:r}}if(typeof e==`object`){let n=O(2,t),r=0,i=0;for(let[a,o]of Object.entries(e)){if(o===void 0||typeof o==`function`||typeof o==`symbol`)continue;i++!==0&&(n=E(n,1,t)),n=E(n,D(a,t),t),n=E(n,1,t);let e=k(o,t);n=E(n,e.jsonBytes,t),r=E(r,e.stringValueUtf8Bytes,t)}return{jsonBytes:n,stringValueUtf8Bytes:r}}return{jsonBytes:n?O(4,t):0,stringValueUtf8Bytes:0}}({...i,...s});function*A(e){for(let t of e?.paragraphs??[])for(let e of t.runs)e.type===`text`&&(yield e.text)}function*ke(e){for(let t of e.elements)if(t.type===`shape`)yield*A(t.textBody);else if(t.type===`table`)for(let e of t.rows)for(let t of e.cells)yield*A(t.textBody);else if(t.type===`chart`){t.chart.title&&(yield t.chart.title);for(let e of t.chart.categories)yield e;for(let e of t.chart.series)e.name&&(yield e.name)}}var Ae=class e{scripts;constructor(e,t,n){this.majorFont=e,this.minorFont=t;let r=a(e)??a(t)??null;this.scripts=n??new ee(r)}addSlide(e){this.scripts.addText(ke(e))}names(){return[this.majorFont,this.minorFont,...this.scripts.names()]}withSlide(t){let n=new e(this.majorFont,this.minorFont,this.scripts.clone());return n.addSlide(t),n}};const j=Object.freeze({archiveEntryCount:0,declaredInflatedBytes:0,distinctInflatedBytes:0,operationInflatedBytes:0}),M=67108864;function N(e,t){if(e!==null&&typeof e!=`string`)throw Error(`invalid PPTX presentation bootstrap ${t}`)}function je(e,t){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`invalid PPTX presentation bootstrap slide at ${t}`);let n=e;if(n.index!==t)throw Error(`invalid PPTX presentation bootstrap slide index ${n.index}`);if(n.partName!==void 0&&typeof n.partName!=`string`)throw Error(`invalid PPTX presentation bootstrap slide partName at ${t}`);return Object.freeze({index:n.index,...n.partName===void 0?{}:{partName:n.partName}})}function Me(e){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`invalid PPTX presentation bootstrap payload`);let t=e;if(!Number.isSafeInteger(t.slideCount)||(t.slideCount??-1)<0||!Number.isSafeInteger(t.slideWidth)||(t.slideWidth??0)<=0||!Number.isSafeInteger(t.slideHeight)||(t.slideHeight??0)<=0||!Array.isArray(t.slides)||t.slides.length!==t.slideCount)throw Error(`invalid PPTX presentation bootstrap dimensions or slide count`);return N(t.defaultTextColor,`defaultTextColor`),N(t.majorFont,`majorFont`),N(t.minorFont,`minorFont`),N(t.hlinkColor,`hlinkColor`),N(t.folHlinkColor,`folHlinkColor`),Object.freeze({slideCount:t.slideCount,slideWidth:t.slideWidth,slideHeight:t.slideHeight,defaultTextColor:t.defaultTextColor,majorFont:t.majorFont,minorFont:t.minorFont,hlinkColor:t.hlinkColor,folHlinkColor:t.folHlinkColor,slides:Object.freeze(t.slides.map(je))})}function Ne(e){return Object.freeze({type:`media`,x:e.x,y:e.y,width:e.width,height:e.height,rotation:e.rotation,flipH:e.flipH,flipV:e.flipV,mediaKind:e.mediaKind,posterPath:e.posterPath,posterMimeType:e.posterMimeType,mediaPath:e.mediaPath,mimeType:e.mimeType})}function Pe(e,t){if(e.index!==t.index||e.partName!==t.partName)throw Error(`PPTX pulled slide identity does not match bootstrap index ${t.index}`);return Object.freeze({index:t.index,...t.partName===void 0?{}:{partName:t.partName},notes:e.notes??null,hidden:e.hidden??!1,mediaElements:Object.freeze(e.elements.filter(e=>e.type===`media`).map(Ne))})}function Fe(e,n,r){if(!(e<=n))throw new t(`PPTX presentation preflight exceeded its hard limit of ${n} projected bytes`,{stage:`parsing`,violation:{format:`pptx`,operation:`presentation-preflight`,resource:`presentation-preflight`,metric:`projected-bytes`,limit:n,observed:Math.min(e,n+1),configurable:!1,usage:r}})}var Ie=class{slideCountValue;slideWidthValue;slideHeightValue;defaultTextColorValue;majorFontValue;minorFontValue;hlinkColorValue;folHlinkColorValue;descriptors;slides=[];fonts;fontPreloadNames;fontProjectionBytes;projectionBytesValue;limit;pending=null;finished=null;constructor(e,t={}){let n=Me(e),r=t.hardLimitForTesting??M;if(!Number.isSafeInteger(r)||r<=0||r>M)throw Error(`invalid PPTX presentation preflight test limit`);this.limit=r,this.slideCountValue=n.slideCount,this.slideWidthValue=n.slideWidth,this.slideHeightValue=n.slideHeight,this.defaultTextColorValue=n.defaultTextColor,this.majorFontValue=n.majorFont,this.minorFontValue=n.minorFont,this.hlinkColorValue=n.hlinkColor,this.folHlinkColorValue=n.folHlinkColor,this.descriptors=[...n.slides],this.fonts=new Ae(this.majorFontValue,this.minorFontValue),this.fontPreloadNames=Object.freeze(this.fonts.names()),this.fontProjectionBytes=k(this.fontPreloadNames,this.limit).jsonBytes,this.projectionBytesValue=k({slideCount:this.slideCountValue,slideWidth:this.slideWidthValue,slideHeight:this.slideHeightValue,defaultTextColor:this.defaultTextColorValue,majorFont:this.majorFontValue,minorFont:this.minorFontValue,hlinkColor:this.hlinkColorValue,folHlinkColor:this.folHlinkColorValue,remainingSlides:this.descriptors,slides:[],fontPreloadNames:this.fontPreloadNames},this.limit).jsonBytes,Fe(this.projectionBytesValue,this.limit,j)}get acceptedSlideCount(){return this.finished?.slideCount??this.slides.length}get projectedBytes(){return this.projectionBytesValue}get remainingDescriptorCount(){return this.descriptors.reduce((e,t)=>e+Number(t!==void 0),0)}addSlide(e,t=j){this.prepareSlide(e,t).commit()}prepareSlide(e,t=j){if(this.finished)throw Error(`PPTX presentation preflight is already finished`);if(this.pending)throw Error(`PPTX presentation preflight already has a prepared slide`);let n=this.slides.length,r=this.descriptors[n];if(!r)throw Error(`PPTX presentation preflight received an extra slide`);let i=Pe(e,r),a=this.fonts.withSlide(e),o=Object.freeze(a.names()),s=k(o,this.limit).jsonBytes,ee=k(i,this.limit).jsonBytes,c=this.projectionBytesValue-this.fontProjectionBytes-k(r,this.limit).jsonBytes+4;c=E(c,s,this.limit),c=E(c,ee,this.limit),this.slides.length!==0&&(c=E(c,1,this.limit));let te=k({slide:i,fontPreloadNames:o},this.limit).jsonBytes,l=E(this.projectionBytesValue,te,this.limit);Fe(Math.max(l,c),this.limit,t);let u={state:`prepared`,fact:i,fonts:a,fontNames:o,fontBytes:s,committedBytes:c};return this.pending=u,{projectedBytes:l,commit:()=>{if(u.state!==`committed`){if(u.state===`rolled-back`)throw Error(`PPTX presentation preflight cannot commit a rolled-back slide`);if(this.pending!==u)throw Error(`PPTX presentation preflight prepared slide is stale`);this.descriptors[n]=void 0,this.slides.push(u.fact),this.fonts=u.fonts,this.fontPreloadNames=u.fontNames,this.fontProjectionBytes=u.fontBytes,this.projectionBytesValue=u.committedBytes,u.state=`committed`,this.pending=null}},rollback:()=>{if(u.state!==`rolled-back`){if(u.state===`committed`)throw Error(`PPTX presentation preflight cannot roll back a committed slide`);if(this.pending!==u)throw Error(`PPTX presentation preflight prepared slide is stale`);u.state=`rolled-back`,this.pending=null}}}}finish(){if(this.finished)return this.finished;if(this.pending)throw Error(`PPTX presentation preflight has an uncommitted slide`);if(this.slides.length!==this.slideCountValue)throw Error(`PPTX presentation preflight is incomplete: ${this.slides.length}/${this.slideCountValue} slides`);return this.finished=Object.freeze({slideCount:this.slideCountValue,slideWidth:this.slideWidthValue,slideHeight:this.slideHeightValue,defaultTextColor:this.defaultTextColorValue,majorFont:this.majorFontValue,minorFont:this.minorFontValue,hlinkColor:this.hlinkColorValue,folHlinkColor:this.folHlinkColorValue,slides:Object.freeze([...this.slides]),fontPreloadNames:this.fontPreloadNames}),this.descriptors=[],this.slides=[],this.projectionBytesValue=k(this.finished,this.limit).jsonBytes,this.finished}};function Le(e){try{return de(e(e=>e.slide_cursor_resource_usage()))}catch(e){if(String(e).includes(`slide cursor usage is unavailable`))return;throw e}}function Re(e,t,n,r,i){let a,o;try{if(i){if(!r)throw Error(`slide payload is missing before acknowledgement`);let t=i(n,r,Le(e));typeof t==`function`?a=t:t&&({rollback:a,commit:o}=t)}e(e=>e.acknowledge_slide(t.operationId,t.generation)),o?.()}catch(e){try{a?.()}catch{}throw e}}var ze=class{coordinatorGeneration=new w;sessions=new Map;pendingOpens=new Map;operationTail=Promise.resolve();resourceFailure;lifecycleState=`ready`;resetBarrier;resetIdentities=new Map;constructor(e,t,n=e=>e(this.requireArchive())){this.archive=e,this.acceptSlide=t,this.executeArchive=n}get coordinator(){return this.coordinatorGeneration}reserveOpen(e){if(this.assertReady(),Ve(e),this.pendingOpens.has(e.sessionId)||this.sessions.has(e.sessionId))throw Error(`slide pull session id is already reserved`);this.pendingOpens.set(e.sessionId,{identity:e,canceled:!1})}abandonOpen(e){this.pendingOpens.delete(e)}get pendingOpenCount(){return this.pendingOpens.size}async open(e,t){if(this.assertReady(),this.resourceFailure)throw this.resourceFailure;if(!Number.isSafeInteger(e)||e<0)throw RangeError(`slide index must be a non-negative safe integer`);let n=this.pendingOpens.get(t.sessionId);if(!n||!P(n.identity,t))throw Error(`slide pull session open reservation is stale or missing`);let r,i=new Promise(e=>{r=e}),a=this.operationTail.then(()=>this.coordinator.enqueue(async()=>{if(n.canceled)throw Error(`slide pull session open was canceled`);let i,a=!1,o=new De({...t,maxByteCredit:x,coordinator:this.coordinator,driver:{pull:n=>{let r;try{r=this.executeArchive(r=>r.pull_slide(e,t.operationId,t.generation,n))}catch(e){throw ce(e,n,x)||(this.latchResourceFailure(e),e)}let o=we(r);return this.acceptSlide&&(i=JSON.parse(new TextDecoder().decode(new Uint8Array(o)))),a=!0,{payload:o,byteLength:o.byteLength,done:!0,transfer:[o]}},measureChunk:({payload:e})=>e.byteLength,acknowledge:()=>{if(!a)throw Error(`slide unit is not awaiting acknowledgement`);try{Re(this.executeArchive,t,e,i,this.acceptSlide)}catch(e){throw this.latchResourceFailure(e),e}a=!1,i=void 0,this.sessions.delete(t.sessionId),r()},cancel:async()=>{try{this.archive()&&await this.executeArchive(e=>e.cancel_slide())}finally{i=void 0,a=!1,this.sessions.delete(t.sessionId),r()}},close:async()=>{try{this.archive()&&await this.executeArchive(e=>e.cancel_slide())}finally{i=void 0,a=!1,this.sessions.delete(t.sessionId),r()}},resourceUsage:()=>{try{return this.readResourceUsage()}catch(e){throw this.latchResourceFailure(e),e}}}});this.sessions.set(t.sessionId,{host:o,identity:t}),this.pendingOpens.delete(t.sessionId)}));this.operationTail=a.then(()=>i,()=>void 0);try{await a}catch(e){throw this.pendingOpens.delete(t.sessionId),r(),e}}async postOpenedSafely(e,t,n){if(this.lifecycleState!==`ready`){try{n(this.lifecycleError())}catch{}return}try{t()}catch(t){await this.closeIdentity(e);try{n(t)}catch{}}}dispatch(e,t){if(this.lifecycleState!==`ready`)return t(this.responseDuringReset(e)),Promise.resolve();let n=this.sessions.get(e.sessionId);if(n)return n.host.dispatch(e,t);let r=this.pendingOpens.get(e.sessionId);if(r&&(e.kind===`cancel`||e.kind===`close`)){let n=P(r.identity,e);return n&&(r.canceled=!0),t(n?{protocol:S,kind:`accepted`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,command:e.kind}:this.staleLifecycleResponse(e)),Promise.resolve()}return e.kind===`cancel`||e.kind===`close`?(t({protocol:S,kind:`accepted`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,command:e.kind}),Promise.resolve()):(t({protocol:S,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:b(Error(`slide pull session is not open`))}),Promise.resolve())}async dispatchSafely(e,t){try{await this.dispatch(e,t)}catch(n){try{t({protocol:S,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:b(n)})}catch{}}}run(e){if(this.lifecycleState!==`ready`)return Promise.reject(this.lifecycleError());let t=this.operationTail.then(()=>this.coordinator.enqueue(async()=>{if(this.resourceFailure)throw this.resourceFailure;return e()})).catch(e=>{throw this.latchResourceFailure(e),e});return this.operationTail=t.then(()=>void 0,()=>void 0),t}reset(){if(this.resetBarrier)return this.resetBarrier;this.lifecycleState=`resetting`,this.captureResetIdentities();let e=this.performReset().then(()=>{this.resetIdentities.clear(),this.lifecycleState=`ready`},e=>{throw this.lifecycleState=`reset-failed`,e}).finally(()=>{this.resetBarrier===e&&(this.resetBarrier=void 0)});return this.resetBarrier=e,e}async performReset(){for(let e of this.pendingOpens.values())e.canceled=!0;let e=1;for(let{host:t,identity:n}of[...this.sessions.values()]){let r;if(await t.dispatch({protocol:S,kind:`close`,...n,requestId:e++},e=>{e.kind===`error`&&(r=Ce(e.error))}),r)throw r}this.sessions.clear(),await this.operationTail,this.pendingOpens.clear(),this.archive()&&await this.executeArchive(e=>e.close_presentation_session()),this.coordinatorGeneration=new w,this.resourceFailure=void 0}assertReady(){if(this.lifecycleState!==`ready`)throw this.lifecycleError()}lifecycleError(){let e=this.lifecycleState===`reset-failed`,t=Error(e?`slide pull worker reset failed; retry reset before new work`:`slide pull worker reset is in progress`);return t.name=`PullSessionLifecycleError`,Object.assign(t,{code:e?`ooxml-pull-reset-failed`:`ooxml-pull-resetting`})}captureResetIdentities(){for(let{identity:e}of this.sessions.values())this.resetIdentities.set(e.sessionId,e);for(let{identity:e}of this.pendingOpens.values())this.resetIdentities.set(e.sessionId,e)}responseDuringReset(e){if(e.kind===`cancel`||e.kind===`close`){let t=this.resetIdentities.get(e.sessionId);return t&&!P(t,e)?this.staleLifecycleResponse(e):{protocol:S,kind:`accepted`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,command:e.kind}}return{protocol:S,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:b(this.lifecycleError())}}requireArchive(){let e=this.archive();if(!e)throw Error(`Presentation not loaded`);return e}async closeIdentity(e){if(this.lifecycleState!==`ready`)return;let t=this.sessions.get(e.sessionId);if(t){await t.host.dispatch({protocol:S,kind:`close`,...e,requestId:1},()=>void 0);return}let n=this.pendingOpens.get(e.sessionId);n&&P(n.identity,e)&&(n.canceled=!0)}readResourceUsage(){return Le(this.executeArchive)}latchResourceFailure(e){let n=e instanceof t?e:y(e);n&&(this.resourceFailure??=n)}staleLifecycleResponse(e){return{protocol:S,kind:`error`,sessionId:e.sessionId,operationId:e.operationId,generation:e.generation,requestId:e.requestId,error:{message:`stale lifecycle targets another slide operation`,errorName:`PullSessionProtocolError`,code:`ooxml-stale-lifecycle`}}}};function Be(e){return!!e&&typeof e==`object`&&e.protocol===`ooxml-pull-v1`}function Ve(e){if(!Number.isSafeInteger(e.sessionId)||e.sessionId<=0)throw RangeError(`session id must be a positive safe integer`);if(!Number.isSafeInteger(e.operationId)||e.operationId<=0)throw RangeError(`operation id must be a positive safe integer`);if(!Number.isSafeInteger(e.generation)||e.generation<=0)throw RangeError(`generation must be a positive safe integer`)}function P(e,t){return e.sessionId===t.sessionId&&e.operationId===t.operationId&&e.generation===t.generation}var F=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ue.unregister(this),e}free(){let e=this.__destroy_into_raw();J.__wbg_pptxarchive_free(e,0)}acknowledge_slide(e,t){let n=J.pptxarchive_acknowledge_slide(this.__wbg_ptr,e,t);if(n[1])throw U(n[0])}assert_healthy(){let e=J.pptxarchive_assert_healthy(this.__wbg_ptr);if(e[1])throw U(e[0])}cancel_slide(){J.pptxarchive_cancel_slide(this.__wbg_ptr)}close_presentation_session(){J.pptxarchive_close_presentation_session(this.__wbg_ptr)}extract_image(e){let t=H(e,J.__wbindgen_malloc,J.__wbindgen_realloc),n=q,r=J.pptxarchive_extract_image(this.__wbg_ptr,t,n);if(r[3])throw U(r[2]);var i=I(r[0],r[1]).slice();return J.__wbindgen_free(r[0],r[1]*1,1),i}extract_media(e){let t=H(e,J.__wbindgen_malloc,J.__wbindgen_realloc),n=q,r=J.pptxarchive_extract_media(this.__wbg_ptr,t,n);if(r[3])throw U(r[2]);var i=I(r[0],r[1]).slice();return J.__wbindgen_free(r[0],r[1]*1,1),i}constructor(e,t,n,r){let i=Ge(e,J.__wbindgen_malloc),a=q,o=J.pptxarchive_new(i,a,!V(t),V(t)?BigInt(0):t,!V(n),V(n)?BigInt(0):n,!V(r),V(r)?BigInt(0):r);if(o[2])throw U(o[1]);return this.__wbg_ptr=o[0]>>>0,Ue.register(this,this.__wbg_ptr,this),this}parse(){let e=J.pptxarchive_parse(this.__wbg_ptr);if(e[3])throw U(e[2]);var t=I(e[0],e[1]).slice();return J.__wbindgen_free(e[0],e[1]*1,1),t}presentation_bootstrap(){let e=J.pptxarchive_presentation_bootstrap(this.__wbg_ptr);if(e[3])throw U(e[2]);var t=I(e[0],e[1]).slice();return J.__wbindgen_free(e[0],e[1]*1,1),t}pull_slide(e,t,n,r){let i=J.pptxarchive_pull_slide(this.__wbg_ptr,e,t,n,r);if(i[3])throw U(i[2]);var a=I(i[0],i[1]).slice();return J.__wbindgen_free(i[0],i[1]*1,1),a}resource_usage(){let e=J.pptxarchive_resource_usage(this.__wbg_ptr);if(e[3])throw U(e[2]);var t=I(e[0],e[1]).slice();return J.__wbindgen_free(e[0],e[1]*1,1),t}slide_cursor_resource_usage(){let e=J.pptxarchive_slide_cursor_resource_usage(this.__wbg_ptr);if(e[3])throw U(e[2]);var t=I(e[0],e[1]).slice();return J.__wbindgen_free(e[0],e[1]*1,1),t}to_markdown(){let e,t;try{let i=J.pptxarchive_to_markdown(this.__wbg_ptr);var n=i[0],r=i[1];if(i[3])throw n=0,r=0,U(i[2]);return e=n,t=r,R(n,r)}finally{J.__wbindgen_free(e,t,1)}}};Symbol.dispose&&(F.prototype[Symbol.dispose]=F.prototype.free);function He(){return{__proto__:null,\"./pptx_parser_bg.js\":{__proto__:null,__wbg___wbindgen_throw_6b64449b9b9ed33c:function(e,t){throw Error(R(e,t))},__wbg_error_a6fa202b58aa1cd3:function(e,t){let n,r;try{n=e,r=t,console.error(R(e,t))}finally{J.__wbindgen_free(n,r,1)}},__wbg_new_227d7c05414eb861:function(){return Error()},__wbg_stack_3b0d974bbf31e44f:function(e,t){let n=t.stack,r=H(n,J.__wbindgen_malloc,J.__wbindgen_realloc),i=q;We().setInt32(e+4,i,!0),We().setInt32(e+0,r,!0)},__wbindgen_cast_0000000000000001:function(e,t){return R(e,t)},__wbindgen_init_externref_table:function(){let e=J.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}const Ue=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>J.__wbg_pptxarchive_free(e>>>0,1));function I(e,t){return e>>>=0,B().subarray(e/1,e/1+t)}let L=null;function We(){return(L===null||L.buffer.detached===!0||L.buffer.detached===void 0&&L.buffer!==J.memory.buffer)&&(L=new DataView(J.memory.buffer)),L}function R(e,t){return e>>>=0,Ke(e,t)}let z=null;function B(){return(z===null||z.byteLength===0)&&(z=new Uint8Array(J.memory.buffer)),z}function V(e){return e==null}function Ge(e,t){let n=t(e.length*1,1)>>>0;return B().set(e,n/1),q=e.length,n}function H(e,t,n){if(n===void 0){let n=K.encode(e),r=t(n.length,1)>>>0;return B().subarray(r,r+n.length).set(n),q=n.length,r}let r=e.length,i=t(r,1)>>>0,a=B(),o=0;for(;o<r;o++){let t=e.charCodeAt(o);if(t>127)break;a[i+o]=t}if(o!==r){o!==0&&(e=e.slice(o)),i=n(i,r,r=o+e.length*3,1)>>>0;let t=B().subarray(i+o,i+r),a=K.encodeInto(e,t);o+=a.written,i=n(i,r,o,1)>>>0}return q=o,i}function U(e){let t=J.__wbindgen_externrefs.get(e);return J.__externref_table_dealloc(e),t}let W=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0});W.decode();let G=0;function Ke(e,t){return G+=t,G>=2146435072&&(W=new TextDecoder(`utf-8`,{ignoreBOM:!0,fatal:!0}),W.decode(),G=t),W.decode(B().subarray(e,e+t))}const K=new TextEncoder;`encodeInto`in K||(K.encodeInto=function(e,t){let n=K.encode(e);return t.set(n),{read:e.length,written:n.length}});let q=0,J;function qe(e,t){return J=e.exports,L=null,z=null,J.__wbindgen_start(),J}async function Je(e,t){if(typeof Response==`function`&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming==`function`)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if(e.ok&&n(e.type)&&e.headers.get(`Content-Type`)!==`application/wasm`)console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\",t);else throw t}let r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{let n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}function n(e){switch(e){case`basic`:case`cors`:case`default`:return!0}return!1}}async function Ye(e){if(J!==void 0)return J;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn(`using deprecated parameters for the initialization function; pass a single object instead`));let t=He();(typeof e==`string`||typeof Request==`function`&&e instanceof Request||typeof URL==`function`&&e instanceof URL)&&(e=fetch(e));let{instance:n,module:r}=await Je(await e,t);return qe(n,r)}async function Xe(e){return J=void 0,L=null,z=null,Ye(e)}const Y=new ae(Ye,{freeArchive:e=>e.free(),reinit:Xe});let X=null,Z=`empty`;function Ze(){if(Z!==`empty`){let e=Error(`this PPTX worker already owns a presentation parse`);throw e.name=`PptxWorkerStateError`,Object.assign(e,{code:`ooxml-pptx-parse-already-started`})}Z=`opening`}const Q=new ze(()=>Y.archive,(e,t,n)=>{if(X){if(e!==X.acceptedSlideCount)throw Error(`PPTX preflight expected slide ${X.acceptedSlideCount}, received ${e}`);return X.prepareSlide(t,n)}},e=>{let t=Y.archive;if(!t)throw Error(`Presentation not loaded`);return Y.run(()=>e(t))}),$=(e,t)=>self.postMessage(e,t);self.onmessage=async e=>{let t=e.data;if(Be(t)){await Q.dispatchSafely(t,$);return}if(t.kind===`init`){Y.setWasmInput(te(t.wasmUrl)??t.wasmUrl);return}let n=t.id,r=!1;try{if(t.kind===`openSlideSession`&&Q.reserveOpen(t),t.kind===`parse`&&(Ze(),r=!0),t.kind===`openSlideSession`){await Y.ensureReady(),await Q.open(t.slideIndex,t),await Q.postOpenedSafely(t,()=>$({kind:`slideSessionOpened`,id:n,sessionId:t.sessionId,operationId:t.operationId,generation:t.generation}),e=>$({kind:`error`,id:n,...b(e)}));return}t.kind===`parse`&&await Q.reset(),await Q.run(async()=>{if(await Y.ensureReady(),t.kind!==`parse`&&Y.archive){let e=Y.archive;Y.run(()=>e.assert_healthy())}if(t.kind===`parse`){X=null;let[e,r,i]=Te(t.resourcePolicy),a=Y.run(()=>{let n=new F(new Uint8Array(t.buffer),e,r,i);return Y.setArchive(n),JSON.parse(new TextDecoder().decode(n.presentation_bootstrap()))});X=new Ie(a),$({kind:`presentationOpened`,id:n,bootstrap:a}),Z=`ready`;return}let e=Y.archive;if(!e)throw Error(`No pptx loaded`);if(t.kind===`finishPresentationPreflight`){if(!X)throw Error(`PPTX presentation preflight is not active`);let e=X.finish();X=null,$({kind:`presentationPreflightReady`,id:n,preflight:e});return}if(t.kind===`extractMedia`){let r=Y.run(()=>e.extract_media(t.path).buffer);$({kind:`mediaExtracted`,id:n,bytes:r},[r]);return}if(t.kind===`extractImage`){let r=Y.run(()=>e.extract_image(t.path).buffer);$({kind:`imageExtracted`,id:n,bytes:r},[r]);return}if(t.kind===`resourceUsage`){$({kind:`resourceUsage`,id:n,usage:de(Y.run(()=>e.resource_usage()))});return}t.kind===`toMarkdown`&&$({kind:`markdownRendered`,id:n,markdown:Y.run(()=>e.to_markdown())})})}catch(e){r&&(Z=`failed`),t.kind===`openSlideSession`&&Q.abandonOpen(t.sessionId);try{$({kind:`error`,id:n,...b(e)})}catch{}}};", We = typeof self < "u" && self.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", Ue], { type: "text/javascript;charset=utf-8" });
function Ge(e) {
	let t;
	try {
		if (t = We && (self.URL || self.webkitURL).createObjectURL(We), !t) throw "";
		let n = new Worker(t, {
			type: "module",
			name: e?.name
		});
		return n.addEventListener("error", () => {
			(self.URL || self.webkitURL).revokeObjectURL(t);
		}), n;
	} catch {
		return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Ue), {
			type: "module",
			name: e?.name
		});
	}
}
//#endregion
//#region packages/pptx/src/wasm/pptx_parser_bg.wasm?url
var Ke = new URL("pptx_parser_bg.wasm", import.meta.url).href, Q = class e {
	_metrics = null;
	_worker;
	_bridge;
	_mode = "main";
	_preflight = null;
	_slides = null;
	_slidePullClient = null;
	_resourceFailure = null;
	_slidePartIndex = null;
	_rawParts = new be({
		maxEntries: 64,
		maxBytes: T
	});
	_googleFontFaces = [];
	_fetchImage = (e, t) => this.getImage(e, t);
	_fetchMedia = (e) => this.getMedia(e);
	_math;
	constructor(e, t, n) {
		this._worker = e, this._mode = t, this._bridge = new me(this._worker, {
			correlate: (e) => "protocol" in e && e.protocol === "ooxml-pull-v1" ? e.requestId : "id" in e ? e.id : void 0,
			toError: (e) => !("protocol" in e) && e.kind === "error" ? S(e) : void 0
		});
		let r = new URL(n ?? Ke, location.href).href;
		this._bridge.post({
			kind: "init",
			wasmUrl: r
		});
	}
	_assertResourceHealthy() {
		if (this._resourceFailure) throw this._resourceFailure;
	}
	_rethrowWithResourceFailure(e) {
		let t = e instanceof y ? e : _(e);
		throw t ? (this._resourceFailure ??= t, this._resourceFailure) : e;
	}
	static async load(t, n = {}) {
		let r = u(n), i = n.mode ?? "main", a = new h({
			enabled: !0,
			format: "pptx",
			mode: i,
			policy: r.policy,
			onMetrics: r.onResourceMetrics,
			emitToConsole: r.debug
		});
		try {
			if (i === "worker" && (typeof Worker > "u" || typeof OffscreenCanvas > "u")) throw Error("mode: 'worker' requires Worker and OffscreenCanvas support");
			let s;
			if (typeof t == "string") {
				let e = await fetch(t);
				if (!e.ok) throw Error(`Failed to fetch: ${e.status} ${e.statusText}`);
				s = await e.arrayBuffer();
			} else s = t;
			s = he(await ne(s, n.password)), a.setSourceBytes(s.byteLength), a.checkpoint("container ready");
			let c = i === "worker" ? (await import("./render-worker-host-CKOmXdyr.js")).createRenderWorker() : new Ge(), l;
			try {
				return l = new e(c, i, n.wasmUrl), l._metrics = a, n.math && i === "worker" && console.warn("[ooxml] the math engine is unavailable in mode: 'worker'; equations will be skipped. Use mode: 'main' for documents with equations."), l._math = i === "worker" ? void 0 : n.math, await l._parse(s, r.policy, i === "worker" ? !!n.useGoogleFonts : !1, n.workerTimeoutMs, (e) => a.observeUsage(e)), a.checkpoint("presentation preflight ready"), i === "main" && n.useGoogleFonts && l._preflight && (l._googleFontFaces = await ve(l._preflight.fontPreloadNames, o)), a.succeed({ slides: l.slideCount }), l;
			} catch (e) {
				let t = l;
				throw te(c, t ? () => t.destroy() : void 0), e;
			}
		} catch (e) {
			throw a.fail(e), e;
		}
	}
	async _parse(e, n, i = !1, o, s) {
		let c = await this._bridge.request((t) => this._mode === "worker" ? {
			kind: "parse",
			id: t,
			buffer: e,
			resourcePolicy: n,
			useGoogleFonts: i
		} : {
			kind: "parse",
			id: t,
			buffer: e,
			resourcePolicy: n
		}, [e], { timeoutMs: o });
		if (this._mode === "worker") {
			let e = c;
			e.usage && s?.(e.usage), this._preflight = t(c.preflight);
			return;
		}
		let u = r(c.bootstrap);
		this._slidePullClient = new l({
			slideCount: u.slideCount,
			transport: this._bridge.transport(a),
			open: async (e, t, n) => {
				await this._bridge.request((n) => ({
					kind: "openSlideSession",
					id: n,
					slideIndex: e,
					...t
				}), void 0, { timeoutMs: n });
			},
			onUsage: s
		});
		for (let e = 0; e < u.slideCount; e += 1) await this._slidePullClient.load(e, !1, o);
		this._preflight = t((await this._bridge.request((e) => ({
			kind: "finishPresentationPreflight",
			id: e
		}), void 0, { timeoutMs: o })).preflight), this._slides = new Ve({
			slideCount: this._preflight.slideCount,
			maxCachedSlides: 8,
			maxCachedStructuralBytes: f,
			loadSlide: async (e) => {
				let t = await this._slidePullClient?.load(e, !0);
				if (!t) throw Error("PPTX slide pull client is unavailable");
				return t;
			}
		});
	}
	get slideCount() {
		return this._preflight?.slideCount ?? 0;
	}
	get slideWidth() {
		return this._preflight?.slideWidth ?? 0;
	}
	get slideHeight() {
		return this._preflight?.slideHeight ?? 0;
	}
	get mode() {
		return this._mode;
	}
	getNotes(e) {
		return Number.isInteger(e) ? this._preflight?.slides[e]?.notes ?? null : null;
	}
	isHidden(e) {
		return Number.isInteger(e) ? this._preflight?.slides[e]?.hidden ?? !1 : !1;
	}
	_partNames() {
		return (this._preflight?.slides ?? []).map((e) => e.partName);
	}
	_partIndex() {
		return this._slidePartIndex ||= Re(this._partNames()), this._slidePartIndex;
	}
	getSlideIndexByPartName(e) {
		return this._partIndex().get(e);
	}
	resolveInternalTarget(e, t = 0) {
		return Be(e, this._partIndex(), t);
	}
	async renderSlide(e, t, r = {}) {
		this._assertResourceHealthy();
		try {
			if (this._mode === "worker") throw Error("renderSlide(canvas) is unavailable in mode: 'worker'; use renderSlideToBitmap() and paint it via an ImageBitmapRenderingContext");
			let i = this._preflight, a = this._slides;
			if (!i || !a) throw Error("Presentation not loaded");
			let o = r.dpr ?? b(), s = r.width ?? ((v(e) ? e.offsetWidth : 0) || 960);
			await a.withSlide(t, (t) => (this._assertResourceHealthy(), n(e, t, i.slideWidth, i.slideHeight, {
				width: s,
				dpr: o,
				defaultTextColor: i.defaultTextColor,
				majorFont: i.majorFont,
				minorFont: i.minorFont,
				hlinkColor: i.hlinkColor,
				fetchMedia: this._fetchMedia,
				fetchImage: this._fetchImage,
				skipMediaControls: r.skipMediaControls,
				dim: r.dim,
				math: this._math
			}, r.onTextRun)));
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	async renderSlideToBitmap(e, t = {}) {
		this._assertResourceHealthy();
		try {
			let n = t.width ?? 960, r = t.dpr ?? b();
			if (this._mode === "worker") {
				if (!Number.isInteger(e) || e < 0 || e >= this.slideCount) throw Error(`Slide index ${e} out of range (count: ${this.slideCount})`);
				let i = await this._bridge.request((i) => ({
					kind: "renderSlide",
					id: i,
					slideIndex: e,
					width: n,
					dpr: r,
					skipMediaControls: t.skipMediaControls,
					dim: t.dim
				}));
				if (t.onTextRun) for (let e of i.runs) t.onTextRun(e);
				return i.bitmap;
			}
			let i = new OffscreenCanvas(1, 1);
			return await this.renderSlide(i, e, {
				width: n,
				dpr: r,
				skipMediaControls: t.skipMediaControls,
				dim: t.dim,
				onTextRun: t.onTextRun
			}), i.transferToImageBitmap();
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	async collectSlideRuns(e, t = 960) {
		this._assertResourceHealthy();
		try {
			if (this._mode === "worker") {
				if (!Number.isInteger(e) || e < 0 || e >= this.slideCount) throw Error(`Slide index ${e} out of range (count: ${this.slideCount})`);
				return (await this._bridge.request((n) => ({
					kind: "collectRuns",
					id: n,
					slideIndex: e,
					width: t
				}))).runs;
			}
			let n = [], r = new OffscreenCanvas(1, 1);
			return await this.renderSlide(r, e, {
				width: t,
				onTextRun: (e) => n.push(e)
			}), n;
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	async getMedia(e) {
		this._assertResourceHealthy();
		try {
			let t = this._findMimeTypeForPath(e);
			return await this._rawParts.get(e, t, async () => {
				let n = (await this._bridge.request((t) => ({
					kind: "extractMedia",
					id: t,
					path: e
				}))).bytes;
				return new Blob([n], { type: t });
			});
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	_findMimeTypeForPath(e) {
		return this._preflight ? s(this._preflight, e) : "";
	}
	async getImage(e, t) {
		this._assertResourceHealthy();
		try {
			return await this._rawParts.get(e, t, async () => {
				let n = (await this._bridge.request((t) => ({
					kind: "extractImage",
					id: t,
					path: e
				}))).bytes;
				return new Blob([n], { type: t });
			});
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	async getResourceMetrics() {
		let e = this._metrics;
		if (!e) throw Error("Presentation not loaded");
		return ee(e, async (e) => (await this._bridge.request((e) => ({
			kind: "resourceUsage",
			id: e
		}), void 0, { timeoutMs: e })).usage);
	}
	async toMarkdown() {
		this._assertResourceHealthy();
		try {
			return (await this._bridge.request((e) => ({
				kind: "toMarkdown",
				id: e
			}))).markdown;
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	async presentSlide(e, t, n = {}) {
		this._assertResourceHealthy();
		try {
			if (!this._preflight) throw Error("Presentation not loaded");
			if (!Number.isInteger(t) || t < 0 || t >= this.slideCount) throw Error(`Slide index ${t} out of range (count: ${this.slideCount})`);
			let r = n.dpr ?? b(), i = n.width ?? (e.offsetWidth || 960), a = this._mode === "worker" ? async () => {
				let a = await this.renderSlideToBitmap(t, {
					width: i,
					dpr: r,
					skipMediaControls: !0,
					dim: n.dim,
					onTextRun: n.onTextRun
				});
				e.width = a.width, e.height = a.height, e.style.width = `${Math.round(a.width / r)}px`, e.style.display || (e.style.display = "block");
				let o = e.getContext("2d");
				if (!o) throw Error("2D context not available");
				o.drawImage(a, 0, 0), a.close();
			} : () => this.renderSlide(e, t, {
				width: i,
				dpr: r,
				skipMediaControls: !0,
				dim: n.dim,
				onTextRun: n.onTextRun
			});
			return await je(e, this._preflight.slides[t]?.mediaElements ?? [], {
				width: i,
				dpr: r,
				slideWidthEmu: this.slideWidth,
				fetchMedia: this._fetchMedia,
				fetchImage: this._fetchImage,
				drawBase: a,
				onError: n.onError
			});
		} catch (e) {
			this._rethrowWithResourceFailure(e);
		}
	}
	destroy() {
		this._slidePullClient?.cancelAll(), this._bridge.terminate(), this._slides?.clear(), this._slides = null, this._slidePullClient = null, this._preflight = null, this._resourceFailure = null, this._slidePartIndex = null, this._rawParts.clear(), this._googleFontFaces.length > 0 && (_e(this._googleFontFaces), this._googleFontFaces = []), C(this._fetchImage), d(this._fetchImage);
	}
}, qe = Symbol("PptxViewer.borrowedPresentation"), $ = {
	color: "#ffffff",
	opacity: .6
}, Je = class e {
	canvas;
	wrapper;
	canvasMount;
	_scale = null;
	textLayer = null;
	highlightLayer = null;
	_find;
	_measureCtx = null;
	presentationOwner;
	get engine() {
		return this.presentationOwner.current;
	}
	borrowed;
	hostWindow;
	opts;
	currentSlide = 0;
	_hiddenMode;
	handle = null;
	_mode;
	renderDispatcher;
	errorRouter;
	destroyed = !1;
	static fromPresentation(t, n, r = {}) {
		return new e(t, {
			...r,
			[qe]: n
		});
	}
	constructor(e, t = {}) {
		this.opts = t, this.canvas = e;
		let n = t[qe];
		this.borrowed = n !== void 0, this._mode = k("PptxViewer", t.mode, n), this.presentationOwner = new E("PptxViewer", n ?? null, !1);
		let r = e.ownerDocument?.defaultView ?? (typeof window < "u" ? window : null);
		if (!r) throw Error("PptxViewer requires a canvas with an active Window");
		this.hostWindow = r, this._hiddenMode = t.hiddenSlideMode ?? "show", this.canvasMount = new fe(e, {
			wrapperCssText: "position:relative;display:inline-block;vertical-align:top;",
			forceDisplayBlock: !0
		}), this.wrapper = this.canvasMount.wrapper, this.renderDispatcher = new O(e, this._mode === "worker" && !t.enableMediaPlayback), this.errorRouter = new ue("PptxViewer", t.onError);
		let i = new le(this.wrapper, t.enableTextSelection === !0);
		this.textLayer = i.textLayer, this.highlightLayer = i.highlightLayer, this._find = new I(() => this.slideCount, (e) => this._collectSlideRuns(e));
	}
	async load(e) {
		if (this.destroyed) throw Error("PptxViewer is destroyed");
		if (this.borrowed) throw Error("PptxViewer.load() is unsupported on a Viewer created by fromPresentation(); the borrowed presentation is already loaded.");
		try {
			if (!await this.presentationOwner.replace(() => Q.load(e, {
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
				this.renderDispatcher.begin(), this._find.invalidate(), this.handle?.destroy(), this.handle = null;
			})) return;
			if (this.destroyed) throw Error("PptxViewer is destroyed");
			this.currentSlide = this._initialSlide(), this._find.invalidate(), await this.renderCurrentSlide();
		} catch (e) {
			if (this.destroyed) throw Error("PptxViewer is destroyed");
			let t = e instanceof Error ? e : Error(String(e));
			if (this.opts.onError) {
				this.opts.onError(t);
				return;
			}
			throw t;
		}
	}
	async goToSlide(e) {
		!this.engine || this.slideCount === 0 || (this.currentSlide = Math.max(0, Math.min(e, this.slideCount - 1)), await this.renderCurrentSlide());
	}
	async nextSlide() {
		await this.goToSlide(this._step(1));
	}
	async prevSlide() {
		await this.goToSlide(this._step(-1));
	}
	_step(e) {
		return this._hiddenMode === "skip" && this.engine ? Se(this.currentSlide, e, (e) => this.engine.isHidden(e), this.slideCount) : this.currentSlide + e;
	}
	_initialSlide() {
		return this._hiddenMode === "skip" && this.engine ? j(0, (e) => this.engine.isHidden(e), this.slideCount) : 0;
	}
	_dim() {
		return {
			color: this.opts.hiddenSlideDim?.color ?? $.color,
			opacity: this.opts.hiddenSlideDim?.opacity ?? $.opacity
		};
	}
	async setHiddenSlideMode(e) {
		this._hiddenMode = e, e === "skip" && this.engine && (this.currentSlide = j(this.currentSlide, (e) => this.engine.isHidden(e), this.slideCount)), await this.renderCurrentSlide();
	}
	get hiddenSlideMode() {
		return this._hiddenMode;
	}
	get visibleSlideCount() {
		if (!this.engine) return 0;
		let e = this.engine;
		return Ce((t) => e.isHidden(t), this.slideCount);
	}
	get slideIndex() {
		return this.currentSlide;
	}
	get slideCount() {
		return this.engine?.slideCount ?? 0;
	}
	getNotes(e) {
		return this.engine?.getNotes(e) ?? null;
	}
	get canvasElement() {
		return this.canvas;
	}
	_naturalWidthPx() {
		let e = this.engine?.slideWidth ?? 0;
		return e > 0 ? e / x : 0;
	}
	_targetWidth() {
		if (this._scale === null) return this.opts.width ?? (this.canvas.offsetWidth || 960);
		let e = this._naturalWidthPx();
		return e <= 0 ? this.opts.width ?? (this.canvas.offsetWidth || 960) : Math.round(e * this._scale);
	}
	getScale() {
		if (this._scale !== null) return this._scale;
		let e = this._naturalWidthPx();
		return e <= 0 ? 1 : this._targetWidth() / e;
	}
	_zoomMin() {
		return this.opts.zoomMin ?? .1;
	}
	_zoomMax() {
		return this.opts.zoomMax ?? 4;
	}
	async setScale(e) {
		let t = ie(e, this._zoomMin(), this._zoomMax()), n = t !== this.getScale();
		this._scale = t, await this.renderCurrentSlide(), n && this.opts.onScaleChange?.(t);
	}
	async zoomIn() {
		await this.setScale(A(this.getScale()));
	}
	async zoomOut() {
		await this.setScale(ce(this.getScale()));
	}
	async fitWidth() {
		await this._fit("width");
	}
	async fitPage() {
		await this._fit("page");
	}
	async _fit(e) {
		if (!this.engine) return;
		let t = this.wrapper.parentElement;
		if (!t) return;
		let n = D({
			contentWidth: this.engine.slideWidth / x,
			contentHeight: this.engine.slideHeight / x,
			containerWidth: t.clientWidth,
			containerHeight: t.clientHeight
		}, e);
		n <= 0 || await this.setScale(n);
	}
	async renderCurrentSlide() {
		if (!this.engine) return;
		let e = this.renderDispatcher.begin(), t = this._hiddenMode === "dim" && this.engine.isHidden(this.currentSlide) ? this._dim() : void 0, n = this._targetWidth(), r = this.opts.dpr ?? (window.devicePixelRatio || 1), i = n / this.engine.slideWidth, a = Math.round(this.engine.slideHeight * i);
		this.canvas.style.width = `${n}px`, this.canvas.style.height = `${a}px`, this.handle?.destroy(), this.handle = null;
		let o = this._mode === "worker", s = [], c = (e) => s.push(e);
		try {
			if (this.opts.enableMediaPlayback) {
				let i = await this.engine.presentSlide(this.canvas, this.currentSlide, {
					width: n,
					dpr: r,
					dim: t,
					onTextRun: c,
					onError: (t) => {
						this.renderDispatcher.isCurrent(e) && this._reportRenderError(t);
					}
				});
				if (!this.renderDispatcher.isCurrent(e)) {
					i.destroy();
					return;
				}
				this.handle = i;
			} else if (o) {
				let i = await this.engine.renderSlideToBitmap(this.currentSlide, {
					width: n,
					dpr: r,
					dim: t,
					onTextRun: c
				});
				if (!this.renderDispatcher.commitBitmap(e, i)) return;
			} else if (await this.engine.renderSlide(this.canvas, this.currentSlide, {
				width: n,
				dpr: r,
				onTextRun: c,
				dim: t
			}), !this.renderDispatcher.isCurrent(e)) return;
			this.opts.onSlideChange?.(this.currentSlide, this.slideCount);
		} catch (t) {
			this.renderDispatcher.isCurrent(e) && this._reportRenderError(t);
			return;
		}
		this.textLayer && this._buildTextLayer(this.textLayer, s, n, a), this._find.setSlideRuns(this.currentSlide, s), this._buildHighlightLayer(s, n, a);
	}
	_buildHighlightLayer(e, t, n) {
		let r = this.highlightLayer;
		r && F(r, e, this._find.slideHighlights(this.currentSlide), t, n, (e) => this._measureForFont(e), this.opts.findHighlightColors);
	}
	_measureForFont(e) {
		this._measureCtx ||= document.createElement("canvas").getContext("2d");
		let t = this._measureCtx;
		return t ? (t.font = e, (e) => t.measureText(e).width) : (e) => e.length;
	}
	async _collectSlideRuns(e) {
		return this.engine ? this.engine.collectSlideRuns(e, this._targetWidth()) : [];
	}
	async findText(e, t = {}) {
		if (!this.engine) return [];
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
		return e ? (e.location.slide === this.currentSlide ? this._redrawHighlights() : await this.goToSlide(e.location.slide), e) : (this._redrawHighlights(), null);
	}
	_redrawHighlights() {
		let e = this._find.slideRuns(this.currentSlide) ?? [], t = this._targetWidth(), n = this.engine ? Math.round(this.engine.slideHeight * (t / this.engine.slideWidth)) : 0;
		this._buildHighlightLayer(e, t, n);
	}
	_buildTextLayer(e, t, n, r) {
		P(e, t, n, r, this._hyperlinkHandler());
	}
	_hyperlinkHandler() {
		if (this.opts.enableHyperlinks !== !1) return (e) => this._onHyperlinkClick(e);
	}
	_onHyperlinkClick(e) {
		let t = this._resolveInternalSlideIndex(e);
		if (this.opts.onHyperlinkClick) {
			this.opts.onHyperlinkClick(t);
			return;
		}
		if (t.kind === "external") {
			g(t.url, void 0, this.hostWindow);
			return;
		}
		t.slideIndex !== void 0 && this.goToSlide(t.slideIndex);
	}
	_resolveInternalSlideIndex(e) {
		if (e.kind !== "internal" || e.slideIndex !== void 0) return e;
		let t = this.engine?.resolveInternalTarget(e.ref, this.currentSlide);
		return t === void 0 ? e : {
			...e,
			slideIndex: t
		};
	}
	_reportRenderError(e) {
		this.errorRouter.report(e);
	}
	async getResourceMetrics() {
		if (!this.engine) throw Error("Presentation not loaded");
		return await this.engine.getResourceMetrics();
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.errorRouter.close(), this.renderDispatcher.destroy(), c(this.canvas), this.handle?.destroy(), this.handle = null, this.presentationOwner.close(), this._find.invalidate(), this.canvasMount.restore());
	}
}, Ye = 150, Xe = "0 1px 3px rgba(0,0,0,0.2)", Ze = Symbol("PptxScrollViewer.borrowedPresentation"), Qe = class e {
	_presentationOwner;
	get _pres() {
		return this._presentationOwner.current;
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
	_slideInFlight = /* @__PURE__ */ new Set();
	_renderEpoch = 0;
	_settleTimer = null;
	_wheelListener = null;
	_pendingZoomAnchor = null;
	_resizeObserver = null;
	_prevBase = 0;
	_lastFitWidth = 0;
	_pageShadow;
	_find = new I(() => this.slideCount, (e) => this._collectSlideRuns(e));
	_findActive = !1;
	_findMeasureCtx;
	static fromPresentation(t, n, r = {}) {
		return new e(t, {
			...r,
			[Ze]: n
		});
	}
	constructor(e, t = {}) {
		if (e.tagName === "CANVAS") throw Error("PptxScrollViewer takes a container element (e.g. a <div>), not a <canvas> — the viewer creates and manages its own canvases. Pass a block container; for the single-slide canvas API use PptxViewer.");
		this._container = e, this._opts = t, this._pageShadow = t.pageShadow ?? Xe;
		let n = t[Ze];
		this._borrowed = n !== void 0, n ? (this._presentationOwner = new E("PptxScrollViewer", n, !1), this._mode = k("PptxScrollViewer", t.mode, n)) : (this._presentationOwner = new E("PptxScrollViewer"), this._mode = k("PptxScrollViewer", t.mode, void 0)), this._wrapper = document.createElement("div"), this._wrapper.style.cssText = "position:relative;width:100%;height:100%;overflow:hidden;", this._scrollHost = document.createElement("div"), this._scrollHost.style.cssText = "position:absolute;inset:0;overflow:auto;", this._scrollHost.style.scrollbarGutter = "stable", t.background && (this._scrollHost.style.background = t.background), this._spacer = document.createElement("div"), this._spacer.style.cssText = "position:absolute;top:0;left:0;width:1px;height:0;pointer-events:none;", this._scrollHost.appendChild(this._spacer), this._wrapper.appendChild(this._scrollHost), this._container.appendChild(this._wrapper), this._scrollListener = () => this._onScroll(), this._scrollHost.addEventListener("scroll", this._scrollListener), this._opts.enableZoom !== !1 && (this._wheelListener = (e) => {
			if (!(e.ctrlKey || e.metaKey) || (e.preventDefault(), e.deltaY === 0)) return;
			let t = this._scrollHost.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			this._pendingZoomAnchor = Number.isFinite(n) && Number.isFinite(r) ? {
				x: n,
				y: r
			} : null, this.setScale(ae(this._scale, e.deltaY));
		}, this._scrollHost.addEventListener("wheel", this._wheelListener, { passive: !1 })), typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver(() => this._onResize()), this._resizeObserver.observe(this._container)), this._borrowed && this.relayout();
	}
	async load(e) {
		if (this._destroyed) throw Error("PptxScrollViewer is destroyed");
		if (this._borrowed) throw Error("PptxScrollViewer.load() is unsupported on a Viewer created by fromPresentation(); the borrowed presentation is already loaded.");
		try {
			if (!await this._presentationOwner.replace(() => Q.load(e, {
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
			if (this._destroyed) throw Error("PptxScrollViewer is destroyed");
			this._find.invalidate(), this._findActive = !1, this.relayout();
		} catch (e) {
			if (this._destroyed) throw Error("PptxScrollViewer is destroyed");
			let t = e instanceof Error ? e : Error(String(e));
			if (this._opts.onError) {
				this._opts.onError(t);
				return;
			}
			throw t;
		}
	}
	get slideCount() {
		return this._pres?.slideCount ?? 0;
	}
	_slideWidthPx() {
		return this._pres.slideWidth / x * this._scale;
	}
	_slideHeightPx() {
		return this._pres.slideHeight / x * this._scale;
	}
	_fitWidthPx() {
		if (this._opts.width && this._opts.width > 0) return this._opts.width;
		let e = this._scrollHost.clientWidth || this._container.clientWidth;
		if (e <= 0) return 0;
		let { left: t, right: n } = this._padH(), r = e - t - n;
		return r > 0 ? r : 0;
	}
	_baseScale() {
		if (!this._pres || this._pres.slideCount === 0) return 0;
		let e = this._fitWidthPx(), t = this._pres.slideWidth / x;
		return e <= 0 || t <= 0 ? 0 : e / t;
	}
	relayout() {
		if (this._pres) {
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
		let e = this._pres.slideCount, t = this._slideHeightPx();
		this._heights = Array(e).fill(t);
	}
	_gap() {
		return this._opts.gap ?? 16;
	}
	_overscan() {
		return this._opts.overscan ?? 1;
	}
	_mediaOverscan() {
		return this._opts.mediaOverscan ?? 1;
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
	_slideIndexAtOffset(e, t) {
		let { offsets: n } = e, r = 0, i = n.length - 1, a = 0;
		for (; r <= i;) {
			let e = r + i >> 1;
			n[e] <= t ? (a = e, r = e + 1) : i = e - 1;
		}
		return a;
	}
	_range() {
		return M(this._heights, this._gap(), this._scrollHost.scrollTop, this._scrollHost.clientHeight, this._overscan(), this._pad());
	}
	_mediaRange() {
		return M(this._heights, this._gap(), this._scrollHost.scrollTop, this._scrollHost.clientHeight, this._mediaOverscan(), this._pad());
	}
	_rangeContains(e, t) {
		return t >= e.start && t <= e.end;
	}
	_syncSpacer() {
		let e = this._range();
		this._lastRange = e, this._spacer.style.height = `${e.totalHeight}px`, this._syncSpacerWidth();
	}
	_syncSpacerWidth() {
		let { left: e, right: t } = this._padH();
		this._spacer.style.width = `${this._slideWidthPx() + e + t}px`;
	}
	_onScroll() {
		!this._pres || !this._scaleEstablished || this._mountVisible();
	}
	_mountVisible() {
		if (!this._pres || this._pres.slideCount === 0) return;
		let e = this._range(), t = this._opts.enableMediaPlayback ? this._mediaRange() : null;
		this._lastRange = e;
		for (let [t, n] of [...this._slots]) (t < e.start || t > e.end) && this._recycleSlot(t, n);
		for (let n = e.start; n <= e.end; n++) if (this._slots.has(n)) this._positionSlot(this._slots.get(n), n, e);
		else {
			let r = this._acquireSlot();
			this._positionSlot(r, n, e), this._slots.set(n, r), this._renderSlot(n, r, !!t && this._rangeContains(t, n));
		}
		t && this._syncMediaPlayback(t), e.topIndex !== this._lastTopIndex && (this._lastTopIndex = e.topIndex, this._opts.onVisibleSlideChange?.(e.topIndex, this._pres.slideCount));
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
			renderedSlide: -1,
			renderedScale: -1,
			dispatcher: new O(n, this._mode === "worker"),
			presentationHandle: null,
			mediaInteractive: !1,
			renderGeneration: 0,
			presentationGeneration: 0
		};
	}
	_recycleSlot(e, t) {
		this._slots.delete(e), t.renderGeneration++, t.presentationGeneration++, t.presentationHandle?.destroy(), t.presentationHandle = null, t.mediaInteractive = !1, t.dispatcher.destroy(), this._destroyed || (t.dispatcher = new O(t.canvas, this._mode === "worker")), t.textLayer && (t.textLayer.innerHTML = "", t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = ""), t.highlightLayer.innerHTML = "", t.highlightLayer.style.transform = "", t.highlightLayer.style.transformOrigin = "", t.canvas.style.height = "", t.renderedSlide = -1, t.renderedScale = -1, t.wrapper.remove(), this._free.push(t);
	}
	_positionSlot(e, t, n) {
		e.wrapper.style.top = `${n.offsets[t]}px`;
		let r = this._slideWidthPx();
		e.wrapper.style.width = `${r}px`, e.wrapper.style.height = `${this._slideHeightPx()}px`;
		let { left: i } = this._padH(), a = this._scrollHost.clientWidth;
		e.wrapper.style.left = `${Math.max(i, (a - r) / 2)}px`;
	}
	_dpr() {
		return this._opts.dpr ?? (typeof window < "u" && window.devicePixelRatio || 1);
	}
	_renderSlot(e, t, n = !1) {
		if (!this._pres || t.renderedSlide === e) return;
		t.renderedSlide = e;
		let r = ++t.renderGeneration, i = this._dpr(), a = this._slideWidthPx(), o = this._renderEpoch, s = this._scale, c = t.dispatcher, l = c.begin();
		if (this._opts.enableMediaPlayback && n) {
			t.mediaInteractive = !0, this._renderInteractiveSlot(e, t, a, i, s, o);
			return;
		}
		if (t.mediaInteractive = !1, this._mode === "worker") {
			this._renderSlotBitmap(e, t, a, i, s, r, c, l);
			return;
		}
		let u = [], d = !!this._opts.enableTextSelection && !!t.textLayer, f = d || this._findActive, p = f ? (e) => u.push(e) : void 0, m = t.canvas;
		this._pres.renderSlide(m, e, {
			width: a,
			dpr: i,
			onTextRun: p
		}).then(() => {
			r !== t.renderGeneration || !c.isCurrent(l) || m !== t.canvas || o !== this._renderEpoch || this._slots.get(e) !== t || t.renderedSlide !== e || (t.renderedScale = s, d && t.textLayer && P(t.textLayer, u, Math.round(a), Math.round(this._slideHeightPx()), this._hyperlinkHandler()), f && this._refreshFindRuns(e, u), this._redrawSlotHighlights(e, t));
		}).catch((n) => {
			r === t.renderGeneration && c.isCurrent(l) && m === t.canvas && o === this._renderEpoch && this._slots.get(e) === t && t.renderedSlide === e && this._reportRenderError(n);
		});
	}
	_renderInteractiveSlot(e, t, n, r, i, a) {
		if (!this._pres) return;
		let o = ++t.presentationGeneration;
		t.presentationHandle?.destroy(), t.presentationHandle = null;
		let s = [], c = !!this._opts.enableTextSelection && !!t.textLayer, l = c || this._findActive, u = l ? (e) => s.push(e) : void 0;
		this._pres.presentSlide(t.canvas, e, {
			width: n,
			dpr: r,
			onTextRun: u,
			onError: (e) => {
				o === t.presentationGeneration && this._reportRenderError(e);
			}
		}).then((r) => {
			if (o !== t.presentationGeneration || !t.mediaInteractive || a !== this._renderEpoch || this._slots.get(e) !== t || t.renderedSlide !== e) {
				r.destroy();
				return;
			}
			t.presentationHandle = r, t.renderedScale = i, c && t.textLayer && P(t.textLayer, s, Math.round(n), Math.round(this._slideHeightPx()), this._hyperlinkHandler()), l && this._refreshFindRuns(e, s), this._redrawSlotHighlights(e, t);
		}).catch((e) => {
			o === t.presentationGeneration && this._reportRenderError(e);
		});
	}
	_syncMediaPlayback(e = this._mediaRange()) {
		if (this._opts.enableMediaPlayback) for (let [t, n] of this._slots) {
			let r = this._rangeContains(e, t);
			r !== n.mediaInteractive && (r ? (n.mediaInteractive = !0, this._settleInteractiveSlot(t, n, this._slideWidthPx(), this._dpr(), this._scale, this._renderEpoch)) : (n.mediaInteractive = !1, n.presentationGeneration++, n.presentationHandle?.destroy(), n.presentationHandle = null));
		}
	}
	_reportRenderError(e) {
		if (this._destroyed) return;
		let t = e instanceof Error ? e : Error(String(e));
		this._opts.onError ? this._opts.onError(t) : console.error("[ooxml] PptxScrollViewer render failed:", t);
	}
	async _renderSlotBitmap(e, t, n, r, i, a = ++t.renderGeneration, o = t.dispatcher, s = o.begin()) {
		if (this._slideInFlight.has(e) || this._slots.get(e) !== t) return;
		let c = this._renderEpoch;
		this._slideInFlight.add(e);
		let l = t.canvas, u = !1, d = !!this._opts.enableTextSelection && !!t.textLayer, f = d || this._findActive, p = [];
		try {
			let m = await this._pres.renderSlideToBitmap(e, {
				width: n,
				dpr: r,
				onTextRun: f ? (e) => p.push(e) : void 0
			});
			if (a !== t.renderGeneration || !o.isCurrent(s) || l !== t.canvas || c !== this._renderEpoch || this._slots.get(e) !== t || t.renderedSlide !== e) {
				m.close();
				return;
			}
			if (!o.commitBitmap(s, m, {
				cssWidth: Math.round(m.width / r),
				cssHeight: Math.round(m.height / r)
			})) return;
			t.renderedScale = i, t.textLayer && (t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = "", d && P(t.textLayer, p, Math.round(n), Math.round(this._slideHeightPx()), this._hyperlinkHandler())), f && this._refreshFindRuns(e, p), this._redrawSlotHighlights(e, t), u = !0;
		} catch (n) {
			a === t.renderGeneration && o.isCurrent(s) && l === t.canvas && c === this._renderEpoch && this._slots.get(e) === t && t.renderedSlide === e && this._reportRenderError(n);
		} finally {
			this._slideInFlight.delete(e);
			let n = this._slots.get(e);
			!u && n && (n !== t || c !== this._renderEpoch || a !== n.renderGeneration || !o.isCurrent(s)) && !this._slideInFlight.has(e) && !this._destroyed && !(this._opts.enableMediaPlayback && n.mediaInteractive) && this._renderSlotBitmap(e, n, this._slideWidthPx(), this._dpr(), this._scale);
		}
	}
	setScale(e) {
		let t = this._opts.zoomMin ?? .1, n = this._opts.zoomMax ?? 4, r = Math.min(n, Math.max(t, e)), i = this._pendingZoomAnchor;
		if (this._pendingZoomAnchor = null, !this._pres || this._pres.slideCount === 0 || !this._scaleEstablished) {
			this._pendingScale = r;
			return;
		}
		if (r === this._scale) return;
		let a = this._scale, o = i ? i.y : 0, s = this._range(), c = this._scrollHost.scrollTop, l = c + o, u = this._slideIndexAtOffset(s, l), d = this._heights[u] || 0, f = d > 0 ? (l - s.offsets[u]) / d : 0;
		f = Math.min(1, Math.max(0, f));
		let p = this._padH().left, m = this._scrollHost.scrollLeft || 0;
		this._renderEpoch++, this._scale = r, this._recomputeHeights();
		let h = M(this._heights, this._gap(), 0, this._scrollHost.clientHeight, this._overscan(), this._pad());
		this._spacer.style.height = `${h.totalHeight}px`, this._syncSpacerWidth();
		let g = Math.max(0, h.totalHeight - this._scrollHost.clientHeight), _ = (h.offsets[u] ?? 0) + f * (this._heights[u] || 0), v = l < (s.offsets[0] ?? 0) ? c : _ - o;
		if (this._scrollHost.scrollTop = Math.min(g, Math.max(0, v)), i) {
			let e = Math.max(0, (this._spacer.offsetWidth || 0) - this._scrollHost.clientWidth);
			this._scrollHost.scrollLeft = oe(m, i.x - p, a, r, { maxScroll: e });
		}
		this._previewVisible(), this._scheduleSettle(), this._opts.onScaleChange?.(r);
	}
	getScale() {
		return this._scaleEstablished ? this._scale : this._pendingScale ?? 1;
	}
	zoomIn() {
		this.setScale(A(this.getScale()));
	}
	zoomOut() {
		this.setScale(ce(this.getScale()));
	}
	fitWidth() {
		this._fit("width");
	}
	fitPage() {
		this._fit("page");
	}
	_fit(e) {
		if (!this._pres || this._pres.slideCount === 0) return;
		let t = D({
			contentWidth: this._pres.slideWidth / x,
			contentHeight: this._pres.slideHeight / x,
			containerWidth: this._fitWidthPx(),
			containerHeight: this._scrollHost.clientHeight
		}, e);
		t <= 0 || this.setScale(t);
	}
	_previewVisible() {
		if (!this._pres || this._pres.slideCount === 0) return;
		let e = this._range(), t = this._opts.enableMediaPlayback ? this._mediaRange() : null;
		this._lastRange = e;
		for (let [t, n] of [...this._slots]) (t < e.start || t > e.end) && this._recycleSlot(t, n);
		for (let n = e.start; n <= e.end; n++) {
			let r = this._slots.get(n);
			if (r) this._previewSlot(r, n, e);
			else {
				let r = this._acquireSlot();
				this._positionSlot(r, n, e), this._slots.set(n, r), this._renderSlot(n, r, !!t && this._rangeContains(t, n));
			}
		}
		t && this._syncMediaPlayback(t), e.topIndex !== this._lastTopIndex && (this._lastTopIndex = e.topIndex, this._opts.onVisibleSlideChange?.(e.topIndex, this._pres.slideCount));
	}
	_previewSlot(e, t, n) {
		if (this._positionSlot(e, t, n), e.canvas.style.width = `${this._slideWidthPx()}px`, e.canvas.style.height = `${this._slideHeightPx()}px`, e.textLayer && e.renderedScale > 0) {
			let t = this._scale / e.renderedScale;
			e.textLayer.style.transformOrigin = "0 0", e.textLayer.style.transform = `scale(${t})`;
		}
	}
	_scheduleSettle() {
		this._settleTimer !== null && clearTimeout(this._settleTimer), this._settleTimer = setTimeout(() => {
			this._settleTimer = null, this._settleRender();
		}, Ye);
	}
	_settleRender() {
		if (this._destroyed || !this._pres || this._pres.slideCount === 0) return;
		let e = this._opts.enableMediaPlayback ? this._mediaRange() : null;
		for (let [t, n] of [...this._slots]) e && !this._rangeContains(e, t) || n.renderedScale !== this._scale && this._settleSlot(t, n);
	}
	_settleSlot(e, t) {
		if (!this._pres) return;
		let n = this._dpr(), r = this._slideWidthPx(), i = this._scale, a = this._renderEpoch;
		if (this._opts.enableMediaPlayback && t.mediaInteractive) {
			this._settleInteractiveSlot(e, t, r, n, i, a);
			return;
		}
		if (this._opts.enableMediaPlayback) return;
		if (this._mode === "worker") {
			this._renderSlotBitmap(e, t, r, n, i);
			return;
		}
		let o = document.createElement("canvas"), s = ++t.renderGeneration;
		o.style.cssText = "display:block;background:#fff;", this._applyPageShadow(o);
		let c = new O(o, !1), l = c.begin(), u = [], d = !!this._opts.enableTextSelection && !!t.textLayer, f = d || this._findActive, p = f ? (e) => u.push(e) : void 0;
		this._pres.renderSlide(o, e, {
			width: r,
			dpr: n,
			onTextRun: p
		}).then(() => {
			if (s !== t.renderGeneration || !c.isCurrent(l) || a !== this._renderEpoch || this._slots.get(e) !== t || t.renderedSlide !== e) {
				c.destroy();
				return;
			}
			let n = t.canvas;
			t.dispatcher.destroy(), t.wrapper.insertBefore(o, n), n.remove(), t.canvas = o, t.dispatcher = c, t.renderedScale = i, t.textLayer && (t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = "", d && P(t.textLayer, u, Math.round(r), Math.round(this._slideHeightPx()), this._hyperlinkHandler())), f && this._refreshFindRuns(e, u), this._redrawSlotHighlights(e, t);
		}).catch((n) => {
			s === t.renderGeneration && c.isCurrent(l) && a === this._renderEpoch && this._slots.get(e) === t && t.renderedSlide === e && this._reportRenderError(n), c.destroy();
		});
	}
	_settleInteractiveSlot(e, t, n, r, i, a) {
		if (!this._pres) return;
		let o = ++t.presentationGeneration, s = document.createElement("canvas");
		s.style.cssText = "display:block;background:#fff;", this._applyPageShadow(s);
		let c = [], l = !!this._opts.enableTextSelection && !!t.textLayer, u = l || this._findActive, d = u ? (e) => c.push(e) : void 0;
		this._pres.presentSlide(s, e, {
			width: n,
			dpr: r,
			onTextRun: d,
			onError: (e) => {
				o === t.presentationGeneration && this._reportRenderError(e);
			}
		}).then((r) => {
			if (o !== t.presentationGeneration || !t.mediaInteractive || a !== this._renderEpoch || this._slots.get(e) !== t || t.renderedSlide !== e) {
				r.destroy();
				return;
			}
			let d = t.canvas, f = t.presentationHandle;
			t.dispatcher.destroy(), t.wrapper.insertBefore(s, d), d.remove(), t.canvas = s, t.dispatcher = new O(s, !1), t.presentationHandle = r, t.renderedScale = i, f?.destroy(), t.textLayer && (t.textLayer.style.transform = "", t.textLayer.style.transformOrigin = "", l && P(t.textLayer, c, Math.round(n), Math.round(this._slideHeightPx()), this._hyperlinkHandler())), u && this._refreshFindRuns(e, c), this._redrawSlotHighlights(e, t);
		}).catch((e) => {
			o === t.presentationGeneration && this._reportRenderError(e);
		});
	}
	scrollToSlide(e, t) {
		if (!this._pres || this._pres.slideCount === 0 || !this._scaleEstablished) return;
		let n = Math.max(0, Math.min(e, this._pres.slideCount - 1)), r = M(this._heights, this._gap(), 0, this._scrollHost.clientHeight, this._overscan(), this._pad()), i = r.offsets[n] ?? 0, a = Math.max(0, r.totalHeight - this._scrollHost.clientHeight), o = Math.min(a, Math.max(0, i)), s = this._scrollHost;
		typeof s.scrollTo == "function" ? s.scrollTo({
			top: o,
			behavior: t?.behavior ?? "auto"
		}) : this._scrollHost.scrollTop = o, this._mountVisible();
	}
	async findText(e, t = {}) {
		if (!this._pres) return [];
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
		return e && this.scrollToSlide(e.location.slide), this._redrawHighlights(), e;
	}
	async _collectSlideRuns(e) {
		return this._pres ? this._pres.collectSlideRuns(e, this._slideWidthPx()) : [];
	}
	_redrawHighlights() {
		for (let [e, t] of this._slots) this._redrawSlotHighlights(e, t);
	}
	_refreshFindRuns(e, t) {
		this._findActive && this._find.setSlideRuns(e, t);
	}
	_redrawSlotHighlights(e, t) {
		if (!this._findActive) {
			t.highlightLayer.innerHTML = "";
			return;
		}
		let n = this._find.slideRuns(e);
		if (!n) {
			t.highlightLayer.innerHTML = "";
			return;
		}
		F(t.highlightLayer, n, this._find.slideHighlights(e), this._slideWidthPx(), this._slideHeightPx(), (e) => this._measureForFind(e), this._opts.findHighlightColors);
	}
	_measureForFind(e) {
		this._findMeasureCtx === void 0 && (this._findMeasureCtx = document.createElement("canvas").getContext("2d"));
		let t = this._findMeasureCtx;
		return !t || typeof t.measureText != "function" ? (e) => e.length : (t.font = e, (e) => t.measureText(e).width);
	}
	_hyperlinkHandler() {
		if (this._opts.enableHyperlinks !== !1) return (e) => this._onHyperlinkClick(e);
	}
	_onHyperlinkClick(e) {
		let t = this._resolveInternalSlideIndex(e);
		if (this._opts.onHyperlinkClick) {
			this._opts.onHyperlinkClick(t);
			return;
		}
		if (t.kind === "external") {
			g(t.url);
			return;
		}
		t.slideIndex !== void 0 && this.scrollToSlide(t.slideIndex);
	}
	_resolveInternalSlideIndex(e) {
		if (e.kind !== "internal" || e.slideIndex !== void 0) return e;
		let t = this._pres?.resolveInternalTarget(e.ref, this._range().topIndex);
		return t === void 0 ? e : {
			...e,
			slideIndex: t
		};
	}
	_onResize() {
		if (!this._pres || this._pres.slideCount === 0) return;
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
	get topVisibleSlide() {
		return this._lastRange?.topIndex ?? 0;
	}
	mountedSlideIndicesForTest() {
		return [...this._slots.keys()];
	}
	interactiveSlideIndicesForTest() {
		return [...this._slots].filter(([, e]) => e.mediaInteractive).map(([e]) => e);
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
		let t = this._range(), n = this._scrollHost.scrollTop + e, r = this._slideIndexAtOffset(t, n), i = this._heights[r] || 0;
		return {
			slide: r,
			frac: i > 0 ? Math.min(1, Math.max(0, (n - t.offsets[r]) / i)) : 0
		};
	}
	viewportYOfForTest(e, t) {
		return (this._range().offsets[e] ?? 0) + t * (this._heights[e] || 0) - this._scrollHost.scrollTop;
	}
	async getResourceMetrics() {
		if (!this._pres) throw Error("Presentation not loaded");
		return await this._pres.getResourceMetrics();
	}
	destroy() {
		if (!this._destroyed) {
			this._destroyed = !0, this._find.invalidate(), this._findActive = !1, this._scrollListener &&= (this._scrollHost.removeEventListener("scroll", this._scrollListener), null), this._wheelListener &&= (this._scrollHost.removeEventListener("wheel", this._wheelListener), null), this._resizeObserver?.disconnect(), this._resizeObserver = null, this._settleTimer !== null && (clearTimeout(this._settleTimer), this._settleTimer = null);
			for (let [e, t] of [...this._slots]) this._recycleSlot(e, t);
			this._free.length = 0, this._presentationOwner.close(), this._wrapper.remove();
		}
	}
}, $e = /* @__PURE__ */ e({
	OoxmlDecodedImageLimitError: () => p,
	OoxmlError: () => w,
	OoxmlResourceLimitError: () => y,
	PptxPresentation: () => Q,
	PptxScrollViewer: () => Qe,
	PptxViewer: () => Je,
	autoResize: () => ge,
	buildPptxHighlightLayer: () => F,
	buildPptxTextLayer: () => P,
	isOoxmlDecodedImageLimitError: () => m,
	openExternalHyperlink: () => g,
	renderSlide: () => n
});
//#endregion
export { F as a, Q as i, Qe as n, P as o, Je as r, $e as t };
