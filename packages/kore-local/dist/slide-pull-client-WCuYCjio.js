import { $t as e, A as t, At as n, Bt as r, C as i, D as a, Dt as o, Ft as s, Gt as c, Ht as l, Jt as u, K as d, Kt as f, Lt as p, M as m, N as h, Nt as g, O as _, Ot as v, Rt as y, S as b, St as x, Tt as S, Ut as C, Vt as w, Wt as T, Yt as E, Zt as D, _ as O, _t as k, bt as A, c as j, cn as M, ct as N, d as P, dn as F, f as I, g as L, gt as R, h as z, ht as B, i as V, j as H, jt as U, ln as W, m as ee, mt as G, n as te, on as ne, p as re, pn as ie, pt as ae, r as oe, rn as K, s as se, sn as ce, u as le, un as ue, vt as de, w as fe, xt as pe, y as me } from "./line-metrics-BdCACYlq.js";
import { a as he, c as ge, i as _e, l as ve, n as ye, o as be, r as xe, s as Se, t as Ce } from "./line-distribute-C1r2zvji.js";
import { i as we } from "./resource-measurement-E_S_iau4.js";
import { t as Te } from "./mathjax-CMjda8Ip.js";
//#region packages/pptx/src/types.ts
function Ee(e) {
	return e;
}
var De = {
	textarchdown: {
		adj: [["adj", "val 0"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["nv1", "+- 0 0 v1"],
			["stAng", "?: nv1 v2 v1"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- adval 0 stAng"],
			["d2", "+- d1 0 21600000"],
			["v3", "+- 0 0 10800000"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["c0", "?: w1 d1 c1"],
			["swAng", "?: stAng c0 v3"],
			["wt1", "sin wd2 adj"],
			["ht1", "cos hd2 adj"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt2", "sin wd2 stAng"],
			["ht2", "cos hd2 stAng"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y2"
			], [
				"a",
				"wd2",
				"hd2",
				"stAng",
				"swAng"
			]]
		}]
	},
	textarchdownpour: {
		adj: [["adj1", "val 0"], ["adj2", "val 25000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["nv1", "+- 0 0 v1"],
			["stAng", "?: nv1 v2 v1"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- adval 0 stAng"],
			["d2", "+- d1 0 21600000"],
			["v3", "+- 0 0 10800000"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["c0", "?: w1 d1 c1"],
			["swAng", "?: stAng c0 v3"],
			["wt1", "sin wd2 stAng"],
			["ht1", "cos hd2 stAng"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["adval2", "pin 0 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 adval"],
			["ht2", "cos ihd2 adval"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["wt3", "sin iwd2 stAng"],
			["ht3", "cos ihd2 stAng"],
			["dx3", "cat2 iwd2 ht3 wt3"],
			["dy3", "sat2 ihd2 ht3 wt3"],
			["x3", "+- hc dx3 0"],
			["y3", "+- vc dy3 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x3",
				"y3"
			], [
				"a",
				"iwd2",
				"ihd2",
				"stAng",
				"swAng"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"a",
				"wd2",
				"hd2",
				"stAng",
				"swAng"
			]]
		}]
	},
	textarchup: {
		adj: [["adj", "val cd2"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["end", "?: v1 v1 v2"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- end 0 adval"],
			["d2", "+- 21600000 d1 0"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["swAng", "?: w1 d1 c1"],
			["wt1", "sin wd2 adj"],
			["ht1", "cos hd2 adj"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"a",
				"wd2",
				"hd2",
				"adval",
				"swAng"
			]]
		}]
	},
	textarchuppour: {
		adj: [["adj1", "val cd2"], ["adj2", "val 50000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["end", "?: v1 v1 v2"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- end 0 adval"],
			["d2", "+- 21600000 d1 0"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["swAng", "?: w1 d1 c1"],
			["wt1", "sin wd2 adval"],
			["ht1", "cos hd2 adval"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["adval2", "pin 0 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 adval"],
			["ht2", "cos ihd2 adval"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"a",
				"wd2",
				"hd2",
				"adval",
				"swAng"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y2"
			], [
				"a",
				"iwd2",
				"ihd2",
				"adval",
				"swAng"
			]]
		}]
	},
	textbutton: {
		adj: [["adj", "val 10800000"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["bot", "+- 5400000 0 adval"],
			["lef", "+- 10800000 0 adval"],
			["top", "+- 16200000 0 adval"],
			["rig", "+- 21600000 0 adval"],
			["c3", "?: top adval 0"],
			["c2", "?: lef 10800000 c3"],
			["c1", "?: bot rig c2"],
			["stAng", "?: adval c1 0"],
			["w1", "+- 21600000 0 stAng"],
			["stAngB", "?: stAng w1 0"],
			["td1", "*/ bot 2 1"],
			["td2", "*/ top 2 1"],
			["ntd2", "+- 0 0 td2"],
			["w2", "+- 0 0 10800000"],
			["c6", "?: top ntd2 w2"],
			["c5", "?: lef 10800000 c6"],
			["c4", "?: bot td1 c5"],
			["v1", "?: adval c4 10800000"],
			["swAngT", "+- 0 0 v1"],
			["stT", "?: lef stAngB stAng"],
			["stB", "?: lef stAng stAngB"],
			["swT", "?: lef v1 swAngT"],
			["swB", "?: lef swAngT v1"],
			["wt1", "sin wd2 stT"],
			["ht1", "cos hd2 stT"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt2", "sin wd2 stB"],
			["ht2", "cos hd2 stB"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["wt3", "sin wd2 adj"],
			["ht3", "cos hd2 adj"],
			["dx3", "cat2 wd2 ht3 wt3"],
			["dy3", "sat2 hd2 ht3 wt3"],
			["x3", "+- hc dx3 0"],
			["y3", "+- vc dy3 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x1",
					"y1"
				], [
					"a",
					"wd2",
					"hd2",
					"stT",
					"swT"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"vc"
				], [
					"l",
					"r",
					"vc"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x2",
					"y2"
				], [
					"a",
					"wd2",
					"hd2",
					"stB",
					"swB"
				]]
			}
		]
	},
	textbuttonpour: {
		adj: [["adj1", "val cd2"], ["adj2", "val 50000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["bot", "+- 5400000 0 adval"],
			["lef", "+- 10800000 0 adval"],
			["top", "+- 16200000 0 adval"],
			["rig", "+- 21600000 0 adval"],
			["c3", "?: top adval 0"],
			["c2", "?: lef 10800000 c3"],
			["c1", "?: bot rig c2"],
			["stAng", "?: adval c1 0"],
			["w1", "+- 21600000 0 stAng"],
			["stAngB", "?: stAng w1 0"],
			["td1", "*/ bot 2 1"],
			["td2", "*/ top 2 1"],
			["ntd2", "+- 0 0 td2"],
			["w2", "+- 0 0 10800000"],
			["c6", "?: top ntd2 w2"],
			["c5", "?: lef 10800000 c6"],
			["c4", "?: bot td1 c5"],
			["v1", "?: adval c4 10800000"],
			["swAngT", "+- 0 0 v1"],
			["stT", "?: lef stAngB stAng"],
			["stB", "?: lef stAng stAngB"],
			["swT", "?: lef v1 swAngT"],
			["swB", "?: lef swAngT v1"],
			["wt1", "sin wd2 stT"],
			["ht1", "cos hd2 stT"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt6", "sin wd2 stB"],
			["ht6", "cos hd2 stB"],
			["dx6", "cat2 wd2 ht6 wt6"],
			["dy6", "sat2 hd2 ht6 wt6"],
			["x6", "+- hc dx6 0"],
			["y6", "+- vc dy6 0"],
			["adval2", "pin 40000 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 stT"],
			["ht2", "cos ihd2 stT"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["wt5", "sin iwd2 stB"],
			["ht5", "cos ihd2 stB"],
			["dx5", "cat2 iwd2 ht5 wt5"],
			["dy5", "sat2 ihd2 ht5 wt5"],
			["x5", "+- hc dx5 0"],
			["y5", "+- vc dy5 0"],
			["d1", "+- hd2 0 ihd2"],
			["d12", "*/ d1 1 2"],
			["yu", "+- vc 0 d12"],
			["yd", "+- vc d12 0"],
			["v1", "*/ d12 d12 1"],
			["v2", "*/ ihd2 ihd2 1"],
			["v3", "*/ v1 1 v2"],
			["v4", "+- 1 0 v3"],
			["v5", "*/ iwd2 iwd2 1"],
			["v6", "*/ v4 v5 1"],
			["v7", "sqrt v6"],
			["xl", "+- hc 0 v7"],
			["xr", "+- hc v7 0"],
			["wtadj", "sin iwd2 adj1"],
			["htadj", "cos ihd2 adj1"],
			["dxadj", "cat2 iwd2 htadj wtadj"],
			["dyadj", "sat2 ihd2 htadj wtadj"],
			["xadj", "+- hc dxadj 0"],
			["yadj", "+- vc dyadj 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x1",
					"y1"
				], [
					"a",
					"wd2",
					"hd2",
					"stT",
					"swT"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x2",
					"y2"
				], [
					"a",
					"iwd2",
					"ihd2",
					"stT",
					"swT"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"xl",
					"yu"
				], [
					"l",
					"xr",
					"yu"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"xl",
					"yd"
				], [
					"l",
					"xr",
					"yd"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x5",
					"y5"
				], [
					"a",
					"iwd2",
					"ihd2",
					"stB",
					"swB"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x6",
					"y6"
				], [
					"a",
					"wd2",
					"hd2",
					"stB",
					"swB"
				]]
			}
		]
	},
	textcandown: {
		adj: [["adj", "val 14286"]],
		gd: [
			["a", "pin 0 adj 33333"],
			["dy", "*/ a h 100000"],
			["y0", "+- t dy 0"],
			["y1", "+- b 0 dy"],
			["ncd2", "*/ cd2 -1 1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"a",
				"wd2",
				"dy",
				"cd2",
				"ncd2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"dy",
				"cd2",
				"ncd2"
			]]
		}]
	},
	textcanup: {
		adj: [["adj", "val 85714"]],
		gd: [
			["a", "pin 66667 adj 100000"],
			["dy1", "*/ a h 100000"],
			["dy", "+- h 0 dy1"],
			["y0", "+- t dy1 0"],
			["y1", "+- t dy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"dy",
				"cd2",
				"cd2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"a",
				"wd2",
				"dy",
				"cd2",
				"cd2"
			]]
		}]
	},
	textcascadedown: {
		adj: [["adj", "val 44444"]],
		gd: [
			["a", "pin 28570 adj 100000"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["dy2", "+- h 0 dy"],
			["dy3", "*/ dy2 1 4"],
			["y2", "+- t dy3 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"y2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textcascadeup: {
		adj: [["adj", "val 44444"]],
		gd: [
			["a", "pin 28570 adj 100000"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["dy2", "+- h 0 dy"],
			["dy3", "*/ dy2 1 4"],
			["y2", "+- t dy3 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"y1"
			]]
		}]
	},
	textchevron: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["y", "*/ a h 100000"],
			["y1", "+- t b y"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"hc",
					"y1"
				],
				[
					"l",
					"r",
					"b"
				]
			]
		}]
	},
	textchevroninverted: {
		adj: [["adj", "val 75000"]],
		gd: [
			["a", "pin 50000 adj 100000"],
			["y", "*/ a h 100000"],
			["y1", "+- b 0 y"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"hc",
					"y1"
				],
				[
					"l",
					"r",
					"t"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}]
	},
	textcircle: {
		adj: [["adj", "val 10800000"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["d0", "+- adval 0 10800000"],
			["d1", "+- 10800000 0 adval"],
			["d2", "+- 21600000 0 adval"],
			["d3", "?: d1 d1 10799999"],
			["d4", "?: d0 d2 d3"],
			["swAng", "*/ d4 2 1"],
			["wt1", "sin wd2 adj"],
			["ht1", "cos hd2 adj"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"a",
				"wd2",
				"hd2",
				"adval",
				"swAng"
			]]
		}]
	},
	textcirclepour: {
		adj: [["adj1", "val cd2"], ["adj2", "val 50000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["d0", "+- adval 0 10800000"],
			["d1", "+- 10800000 0 adval"],
			["d2", "+- 21600000 0 adval"],
			["d3", "?: d1 d1 10799999"],
			["d4", "?: d0 d2 d3"],
			["swAng", "*/ d4 2 1"],
			["wt1", "sin wd2 adval"],
			["ht1", "cos hd2 adval"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["adval2", "pin 0 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 adval"],
			["ht2", "cos ihd2 adval"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"a",
				"wd2",
				"hd2",
				"adval",
				"swAng"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y2"
			], [
				"a",
				"iwd2",
				"ihd2",
				"adval",
				"swAng"
			]]
		}]
	},
	textcurvedown: {
		adj: [["adj", "val 45977"]],
		gd: [
			["a", "pin 0 adj 56338"],
			["dy", "*/ a h 100000"],
			["gd1", "*/ dy 3 4"],
			["gd2", "*/ dy 5 4"],
			["gd3", "*/ dy 3 8"],
			["gd4", "*/ dy 1 8"],
			["gd5", "+- h 0 gd3"],
			["gd6", "+- gd4 h 0"],
			["y0", "+- t dy 0"],
			["y1", "+- t gd1 0"],
			["y2", "+- t gd2 0"],
			["y3", "+- t gd3 0"],
			["y4", "+- t gd4 0"],
			["y5", "+- t gd5 0"],
			["y6", "+- t gd6 0"],
			["x1", "+- l wd3 0"],
			["x2", "+- r 0 wd3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"C",
				"x1",
				"y1",
				"x2",
				"y2",
				"r",
				"y0"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y5"
			], [
				"C",
				"x1",
				"y6",
				"x2",
				"y6",
				"r",
				"y5"
			]]
		}]
	},
	textcurveup: {
		adj: [["adj", "val 45977"]],
		gd: [
			["a", "pin 0 adj 56338"],
			["dy", "*/ a h 100000"],
			["gd1", "*/ dy 3 4"],
			["gd2", "*/ dy 5 4"],
			["gd3", "*/ dy 3 8"],
			["gd4", "*/ dy 1 8"],
			["gd5", "+- h 0 gd3"],
			["gd6", "+- gd4 h 0"],
			["y0", "+- t dy 0"],
			["y1", "+- t gd1 0"],
			["y2", "+- t gd2 0"],
			["y3", "+- t gd3 0"],
			["y4", "+- t gd4 0"],
			["y5", "+- t gd5 0"],
			["y6", "+- t gd6 0"],
			["x1", "+- l wd3 0"],
			["x2", "+- r 0 wd3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y0"
			], [
				"C",
				"x1",
				"y2",
				"x2",
				"y1",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y5"
			], [
				"C",
				"x1",
				"y6",
				"x2",
				"y6",
				"r",
				"y5"
			]]
		}]
	},
	textdeflate: {
		adj: [["adj", "val 18750"]],
		gd: [
			["a", "pin 0 adj 37500"],
			["dy", "*/ a ss 100000"],
			["gd0", "*/ dy 4 3"],
			["gd1", "+- h 0 gd0"],
			["adjY", "+- t dy 0"],
			["y0", "+- t gd0 0"],
			["y1", "+- t gd1 0"],
			["x0", "+- l wd3 0"],
			["x1", "+- r 0 wd3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"C",
				"x0",
				"y0",
				"x1",
				"y0",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"C",
				"x0",
				"y1",
				"x1",
				"y1",
				"r",
				"b"
			]]
		}]
	},
	textdeflatebottom: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 6250 adj 100000"],
			["dy", "*/ a ss 100000"],
			["dy2", "+- h 0 dy"],
			["y1", "+- t dy 0"],
			["cp", "+- y1 0 dy2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"Q",
				"hc",
				"cp",
				"r",
				"b"
			]]
		}]
	},
	textdeflateinflate: {
		adj: [["adj", "val 35000"]],
		gd: [
			["a", "pin 5000 adj 95000"],
			["dy", "*/ a h 100000"],
			["del", "*/ h 5 100"],
			["dh1", "*/ h 45 100"],
			["dh2", "*/ h 55 100"],
			["yh", "+- dy 0 del"],
			["yl", "+- dy del 0"],
			["y3", "+- yh yh dh1"],
			["y4", "+- yl yl dh2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"t"
				], [
					"l",
					"r",
					"t"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"dh1"
				], [
					"Q",
					"hc",
					"y3",
					"r",
					"dh1"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"dh2"
				], [
					"Q",
					"hc",
					"y4",
					"r",
					"dh2"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"b"
				], [
					"l",
					"r",
					"b"
				]]
			}
		]
	},
	textdeflateinflatedeflate: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 3000 adj 47000"],
			["dy", "*/ a h 100000"],
			["del", "*/ h 3 100"],
			["ey1", "*/ h 30 100"],
			["ey2", "*/ h 36 100"],
			["ey3", "*/ h 63 100"],
			["ey4", "*/ h 70 100"],
			["by", "+- b 0 dy"],
			["yh1", "+- dy 0 del"],
			["yl1", "+- dy del 0"],
			["yh2", "+- by 0 del"],
			["yl2", "+- by del 0"],
			["y1", "+- yh1 yh1 ey1"],
			["y2", "+- yl1 yl1 ey2"],
			["y3", "+- yh2 yh2 ey3"],
			["y4", "+- yl2 yl2 ey4"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"t"
				], [
					"l",
					"r",
					"t"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey1"
				], [
					"Q",
					"hc",
					"y1",
					"r",
					"ey1"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey2"
				], [
					"Q",
					"hc",
					"y2",
					"r",
					"ey2"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey3"
				], [
					"Q",
					"hc",
					"y3",
					"r",
					"ey3"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey4"
				], [
					"Q",
					"hc",
					"y4",
					"r",
					"ey4"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"b"
				], [
					"l",
					"r",
					"b"
				]]
			}
		]
	},
	textdeflatetop: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 0 adj 93750"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["cp", "+- y1 dy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"Q",
				"hc",
				"cp",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textdoublewave1: {
		adj: [["adj1", "val 6250"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 12500"],
			["a2", "pin -10000 adj2 10000"],
			["y1", "*/ h a1 100000"],
			["dy2", "*/ y1 10 3"],
			["y2", "+- y1 0 dy2"],
			["y3", "+- y1 dy2 0"],
			["y4", "+- b 0 y1"],
			["y5", "+- y4 0 dy2"],
			["y6", "+- y4 dy2 0"],
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
			["dx2", "?: of2 0 of2"],
			["x2", "+- l 0 dx2"],
			["dx8", "?: of2 of2 0"],
			["x8", "+- r 0 dx8"],
			["dx3", "+/ dx2 x8 6"],
			["x3", "+- x2 dx3 0"],
			["dx4", "+/ dx2 x8 3"],
			["x4", "+- x2 dx4 0"],
			["x5", "+/ x2 x8 2"],
			["x6", "+- x5 dx3 0"],
			["x7", "+/ x6 x8 2"],
			["x9", "+- l dx8 0"],
			["x15", "+- r dx2 0"],
			["x10", "+- x9 dx3 0"],
			["x11", "+- x9 dx4 0"],
			["x12", "+/ x9 x15 2"],
			["x13", "+- x12 dx3 0"],
			["x14", "+/ x13 x15 2"],
			["x16", "+- r 0 x1"],
			["xAdj", "+- hc of 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x2",
					"y1"
				],
				[
					"C",
					"x3",
					"y2",
					"x4",
					"y3",
					"x5",
					"y1"
				],
				[
					"C",
					"x6",
					"y2",
					"x7",
					"y3",
					"x8",
					"y1"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x9",
					"y4"
				],
				[
					"C",
					"x10",
					"y5",
					"x11",
					"y6",
					"x12",
					"y4"
				],
				[
					"C",
					"x13",
					"y5",
					"x14",
					"y6",
					"x15",
					"y4"
				]
			]
		}]
	},
	textfadedown: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dx", "*/ a w 100000"],
			["x1", "+- l dx 0"],
			["x2", "+- r 0 dx"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"b"
			], [
				"l",
				"x2",
				"b"
			]]
		}]
	},
	textfadeleft: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textfaderight: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"y1"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"y2"
			]]
		}]
	},
	textfadeup: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dx", "*/ a w 100000"],
			["x1", "+- l dx 0"],
			["x2", "+- r 0 dx"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"t"
			], [
				"l",
				"x2",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textinflate: {
		adj: [["adj", "val 18750"]],
		gd: [
			["a", "pin 0 adj 20000"],
			["dy", "*/ a h 100000"],
			["gd", "*/ dy 1 3"],
			["gd0", "+- 0 0 gd"],
			["gd1", "+- h 0 gd0"],
			["ty", "+- t dy 0"],
			["by", "+- b 0 dy"],
			["y0", "+- t gd0 0"],
			["y1", "+- t gd1 0"],
			["x0", "+- l wd3 0"],
			["x1", "+- r 0 wd3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"ty"
			], [
				"C",
				"x0",
				"y0",
				"x1",
				"y0",
				"r",
				"ty"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"by"
			], [
				"C",
				"x0",
				"y1",
				"x1",
				"y1",
				"r",
				"by"
			]]
		}]
	},
	textinflatebottom: {
		adj: [["adj", "val 60000"]],
		gd: [
			["a", "pin 60000 adj 100000"],
			["dy", "*/ a h 100000"],
			["ty", "+- t dy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"ty"
			], [
				"Q",
				"hc",
				"b",
				"r",
				"ty"
			]]
		}]
	},
	textinflatetop: {
		adj: [["adj", "val 40000"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dy", "*/ a h 100000"],
			["ty", "+- t dy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"ty"
			], [
				"Q",
				"hc",
				"t",
				"r",
				"ty"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textplain: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 30000 adj 70000"],
			["mid", "*/ a w 100000"],
			["midDir", "+- mid 0 hc"],
			["dl", "+- mid 0 l"],
			["dr", "+- r 0 mid"],
			["dl2", "*/ dl 2 1"],
			["dr2", "*/ dr 2 1"],
			["dx", "?: midDir dr2 dl2"],
			["xr", "+- l dx 0"],
			["xl", "+- r 0 dx"],
			["tlx", "?: midDir l xl"],
			["trx", "?: midDir xr r"],
			["blx", "?: midDir xl l"],
			["brx", "?: midDir r xr"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"tlx",
				"t"
			], [
				"l",
				"trx",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"blx",
				"b"
			], [
				"l",
				"brx",
				"b"
			]]
		}]
	},
	textringinside: {
		adj: [["adj", "val 60000"]],
		gd: [
			["a", "pin 50000 adj 99000"],
			["dy", "*/ a h 100000"],
			["y", "+- t dy 0"],
			["r", "*/ dy 1 2"],
			["y1", "+- t r 0"],
			["y2", "+- b 0 r"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"21599999"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"21599999"
			]]
		}]
	},
	textringoutside: {
		adj: [["adj", "val 60000"]],
		gd: [
			["a", "pin 50000 adj 99000"],
			["dy", "*/ a h 100000"],
			["y", "+- t dy 0"],
			["r", "*/ dy 1 2"],
			["y1", "+- t r 0"],
			["y2", "+- b 0 r"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"-21599999"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"-21599999"
			]]
		}]
	},
	textslantdown: {
		adj: [["adj", "val 44445"]],
		gd: [
			["a", "pin 28569 adj 100000"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"y2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textslantup: {
		adj: [["adj", "val 55555"]],
		gd: [
			["a", "pin 0 adj 71431"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"y2"
			]]
		}]
	},
	textstop: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 14286 adj 50000"],
			["dx", "*/ w 1 3"],
			["dy", "*/ a h 100000"],
			["x1", "+- l dx 0"],
			["x2", "+- r 0 dx"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y1"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"y1"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"r",
					"y2"
				]
			]
		}]
	},
	texttriangle: {
		adj: [["adj", "val 50000"]],
		gd: [["a", "pin 0 adj 100000"], ["y", "*/ a h 100000"]],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	texttriangleinverted: {
		adj: [["adj", "val 50000"]],
		gd: [["a", "pin 0 adj 100000"], ["y", "*/ a h 100000"]],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}]
	},
	textwave1: {
		adj: [["adj1", "val 12500"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 20000"],
			["a2", "pin -10000 adj2 10000"],
			["y1", "*/ h a1 100000"],
			["dy2", "*/ y1 10 3"],
			["y2", "+- y1 0 dy2"],
			["y3", "+- y1 dy2 0"],
			["y4", "+- b 0 y1"],
			["y5", "+- y4 0 dy2"],
			["y6", "+- y4 dy2 0"],
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
			["dx2", "?: of2 0 of2"],
			["x2", "+- l 0 dx2"],
			["dx5", "?: of2 of2 0"],
			["x5", "+- r 0 dx5"],
			["dx3", "+/ dx2 x5 3"],
			["x3", "+- x2 dx3 0"],
			["x4", "+/ x3 x5 2"],
			["x6", "+- l dx5 0"],
			["x10", "+- r dx2 0"],
			["x7", "+- x6 dx3 0"],
			["x8", "+/ x7 x10 2"],
			["x9", "+- r 0 x1"],
			["xAdj", "+- hc of 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y1"
			], [
				"C",
				"x3",
				"y2",
				"x4",
				"y3",
				"x5",
				"y1"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x6",
				"y4"
			], [
				"C",
				"x7",
				"y5",
				"x8",
				"y6",
				"x10",
				"y4"
			]]
		}]
	},
	textwave2: {
		adj: [["adj1", "val 12500"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 20000"],
			["a2", "pin -10000 adj2 10000"],
			["y1", "*/ h a1 100000"],
			["dy2", "*/ y1 10 3"],
			["y2", "+- y1 0 dy2"],
			["y3", "+- y1 dy2 0"],
			["y4", "+- b 0 y1"],
			["y5", "+- y4 0 dy2"],
			["y6", "+- y4 dy2 0"],
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
			["dx2", "?: of2 0 of2"],
			["x2", "+- l 0 dx2"],
			["dx5", "?: of2 of2 0"],
			["x5", "+- r 0 dx5"],
			["dx3", "+/ dx2 x5 3"],
			["x3", "+- x2 dx3 0"],
			["x4", "+/ x3 x5 2"],
			["x6", "+- l dx5 0"],
			["x10", "+- r dx2 0"],
			["x7", "+- x6 dx3 0"],
			["x8", "+/ x7 x10 2"],
			["x9", "+- r 0 x1"],
			["xAdj", "+- hc of 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y1"
			], [
				"C",
				"x3",
				"y3",
				"x4",
				"y2",
				"x5",
				"y1"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x6",
				"y4"
			], [
				"C",
				"x7",
				"y6",
				"x8",
				"y5",
				"x10",
				"y4"
			]]
		}]
	},
	textwave4: {
		adj: [["adj1", "val 6250"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 12500"],
			["a2", "pin -10000 adj2 10000"],
			["y1", "*/ h a1 100000"],
			["dy2", "*/ y1 10 3"],
			["y2", "+- y1 0 dy2"],
			["y3", "+- y1 dy2 0"],
			["y4", "+- b 0 y1"],
			["y5", "+- y4 0 dy2"],
			["y6", "+- y4 dy2 0"],
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
			["dx2", "?: of2 0 of2"],
			["x2", "+- l 0 dx2"],
			["dx8", "?: of2 of2 0"],
			["x8", "+- r 0 dx8"],
			["dx3", "+/ dx2 x8 6"],
			["x3", "+- x2 dx3 0"],
			["dx4", "+/ dx2 x8 3"],
			["x4", "+- x2 dx4 0"],
			["x5", "+/ x2 x8 2"],
			["x6", "+- x5 dx3 0"],
			["x7", "+/ x6 x8 2"],
			["x9", "+- l dx8 0"],
			["x15", "+- r dx2 0"],
			["x10", "+- x9 dx3 0"],
			["x11", "+- x9 dx4 0"],
			["x12", "+/ x9 x15 2"],
			["x13", "+- x12 dx3 0"],
			["x14", "+/ x13 x15 2"],
			["x16", "+- r 0 x1"],
			["xAdj", "+- hc of 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x2",
					"y1"
				],
				[
					"C",
					"x3",
					"y3",
					"x4",
					"y2",
					"x5",
					"y1"
				],
				[
					"C",
					"x6",
					"y3",
					"x7",
					"y2",
					"x8",
					"y1"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x9",
					"y4"
				],
				[
					"C",
					"x10",
					"y6",
					"x11",
					"y5",
					"x12",
					"y4"
				],
				[
					"C",
					"x13",
					"y6",
					"x14",
					"y5",
					"x15",
					"y4"
				]
			]
		}]
	}
}, Oe = Math.PI * 2 / 216e5, ke = De, Ae = /* @__PURE__ */ new Map();
function je(e) {
	return e.toLowerCase() in ke;
}
function Me(e) {
	let t = Ae.get(e);
	if (t) return t;
	let n = ke[e];
	return n ? (t = {
		adj: n.adj.map(([e, t]) => [e, C(t)]),
		gd: n.gd.map(([e, t]) => [e, C(t)]),
		paths: n.paths
	}, Ae.set(e, t), t) : null;
}
var Ne = 48;
function Pe(e, t, n, r) {
	let i = e.w == null ? 1 : n / e.w, a = e.h == null ? 1 : r / e.h, o = (e) => e * i, s = (e) => e * a, c = [], l = 0, u = 0;
	for (let n of e.cmds) switch (n[0]) {
		case "m":
			l = o(t.resolve(n[1])), u = s(t.resolve(n[2])), c.push({
				x: l,
				y: u
			});
			break;
		case "l":
			l = o(t.resolve(n[1])), u = s(t.resolve(n[2])), c.push({
				x: l,
				y: u
			});
			break;
		case "C": {
			let e = o(t.resolve(n[1])), r = s(t.resolve(n[2])), i = o(t.resolve(n[3])), a = s(t.resolve(n[4])), d = o(t.resolve(n[5])), f = s(t.resolve(n[6]));
			for (let t = 1; t <= Ne; t++) {
				let n = t / Ne, o = 1 - n, s = o * o * o * l + 3 * o * o * n * e + 3 * o * n * n * i + n * n * n * d, p = o * o * o * u + 3 * o * o * n * r + 3 * o * n * n * a + n * n * n * f;
				c.push({
					x: s,
					y: p
				});
			}
			l = d, u = f;
			break;
		}
		case "Q": {
			let e = o(t.resolve(n[1])), r = s(t.resolve(n[2])), i = o(t.resolve(n[3])), a = s(t.resolve(n[4]));
			for (let t = 1; t <= Ne; t++) {
				let n = t / Ne, o = 1 - n, s = o * o * l + 2 * o * n * e + n * n * i, d = o * o * u + 2 * o * n * r + n * n * a;
				c.push({
					x: s,
					y: d
				});
			}
			l = i, u = a;
			break;
		}
		case "a": {
			let e = t.resolve(n[1]), r = t.resolve(n[2]), o = e * i, s = r * a, d = t.resolve(n[3]) * Oe, f = t.resolve(n[4]) * Oe, p = (t) => Math.atan2(e * Math.sin(t), r * Math.cos(t)), m = Math.PI * 2, h = p(d), g = Math.trunc(f / m), _ = f - g * m, v = p(d + _) - h;
			_ > 0 && v < 0 ? v += m : _ < 0 && v > 0 && (v -= m);
			let y = v + g * m, b = l - o * Math.cos(h), x = u - s * Math.sin(h), S = Math.max(Ne, Math.ceil(Math.abs(y) / m * 96));
			for (let e = 1; e <= S; e++) {
				let t = h + y * e / S;
				c.push({
					x: b + o * Math.cos(t),
					y: x + s * Math.sin(t)
				});
			}
			l = b + o * Math.cos(h + y), u = x + s * Math.sin(h + y);
			break;
		}
		case "c": break;
	}
	return c;
}
function Fe(e) {
	let t = [0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n].x - e[n - 1].x, i = e[n].y - e[n - 1].y;
		t.push(t[n - 1] + Math.hypot(r, i));
	}
	return t;
}
function Ie(e, t, n, r) {
	let i = Me(e.toLowerCase());
	if (!i || i.paths.length === 0) return null;
	let a = T({
		w: n,
		h: r,
		adj: t
	}, i.adj, i.gd), o = i.paths.length === 1, s = Pe(i.paths[0], a, n, r), c = o ? s : Pe(i.paths[i.paths.length - 1], a, n, r);
	return {
		top: s,
		bottom: c,
		topLen: Fe(s),
		bottomLen: Fe(c),
		singleEdge: o
	};
}
function Le(e, t, n) {
	let r = t[t.length - 1];
	if (e.length === 1 || r === 0) return {
		x: e[0].x,
		y: e[0].y,
		tx: 1,
		ty: 0
	};
	let i = Math.max(0, Math.min(1, n)) * r, a = 0, o = t.length - 1;
	for (; a < o - 1;) {
		let e = a + o >> 1;
		t[e] <= i ? a = e : o = e;
	}
	let s = t[o] - t[a] || 1, c = (i - t[a]) / s, l = e[a], u = e[o], d = u.x - l.x, f = u.y - l.y, p = Math.hypot(d, f) || 1;
	return {
		x: l.x + d * c,
		y: l.y + f * c,
		tx: d / p,
		ty: f / p
	};
}
function Re(e) {
	return e.topLen[e.topLen.length - 1] ?? 0;
}
function ze(e, t) {
	if (!e.singleEdge) return 1;
	let n = Re(e);
	return n <= 0 ? 1 : Math.max(0, Math.min(1, t / n));
}
function Be(e, t, n, r) {
	if (e.singleEdge) {
		let i = Le(e.top, e.topLen, t), a = Math.atan2(i.ty, i.tx), o = i.ty, s = -i.tx, c = n * (1 - r);
		return {
			x: i.x - o * c,
			y: i.y - s * c,
			angle: a,
			vScale: 1,
			shear: 0
		};
	}
	let i = Le(e.top, e.topLen, t), a = Le(e.bottom, e.bottomLen, t), o = a.x - i.x, s = a.y - i.y, c = i.x + o * r, l = i.y + s * r, u = i.tx + a.tx, d = i.ty + a.ty, f = Math.atan2(d, u), p = Math.cos(f), m = Math.sin(f), h = (p * o + m * s) / (n > 0 ? n : 1), g = (-m * o + p * s) / (n > 0 ? n : 1);
	return {
		x: c,
		y: l,
		angle: f,
		vScale: g === 0 ? n > 0 ? Math.hypot(o, s) / n : 1 : g,
		shear: g === 0 ? 0 : h / g
	};
}
//#endregion
//#region packages/core/src/shape/effects.ts
function Ve(e, t) {
	return e * t;
}
function He(e) {
	return e.getContext("2d") ?? null;
}
function Ue(e, t, n, r) {
	let i = Math.max(0, Math.floor(e.x - t)), a = Math.max(0, Math.floor(e.y - t)), o = Math.min(n, Math.ceil(e.x + e.w + t)), s = Math.min(r, Math.ceil(e.y + e.h + t));
	return {
		x: i,
		y: a,
		w: Math.max(1, o - i),
		h: Math.max(1, s - a)
	};
}
function We(e, t) {
	if (t.x === 0 && t.y === 0) return e;
	let n = t.x, r = t.y;
	return new Proxy(e, {
		get(e, t) {
			if (t === "setTransform") return (t) => {
				e.setTransform(t.a, t.b, t.c, t.d, t.e - n, t.f - r);
			};
			let i = Reflect.get(e, t);
			return typeof i == "function" ? i.bind(e) : i;
		},
		set(e, t, n) {
			return e[t] = n, !0;
		}
	});
}
function Ge(t, n, r, i, a, o, s) {
	let c = Ve(i.blur, a), l = Ve(i.dist, a), d = i.dir * Math.PI / 180, f = Math.cos(d) * l, p = Math.sin(d) * l, m = Ue(r, Math.ceil(3 * c + Math.abs(l)) + 2, o, s), h = e(m.w, m.h);
	if (!h) return;
	let g = He(h);
	if (!g) return;
	let _ = We(g, m);
	_.save(), _.fillStyle = u(i.color, i.alpha), n(_), _.restore(), _.save(), _.globalCompositeOperation = "destination-out", _.filter = c > 0 ? `blur(${c}px)` : "none", _.translate(f, p), _.fillStyle = "#000", n(_), _.restore(), _.save(), _.globalCompositeOperation = "destination-in", _.filter = "none", _.fillStyle = "#000", n(_), _.restore(), t.save(), t.drawImage(h, m.x, m.y), t.restore();
}
function Ke(t, n, r, i, a, o, s, c) {
	let l = Ve(i.radius, a);
	if (l <= 0) {
		n(t);
		return;
	}
	let u = Ue(r, Math.ceil(l) + 2, o, s), d = r.x - u.x, f = r.y - u.y, p = e(u.w, u.h);
	if (!p) {
		n(t);
		return;
	}
	let m = He(p);
	if (!m) {
		n(t);
		return;
	}
	let h = We(m, u), g = c ?? n;
	n(h);
	let _ = e(u.w, u.h), v = e(u.w, u.h), y = _ ? He(_) : null, b = v ? He(v) : null;
	if (_ && y && v && b) {
		let e = We(y, u);
		e.fillStyle = "#000", g(e), b.drawImage(p, d, f, r.w, r.h, d - l, f - l, r.w + l * 2, r.h + l * 2), b.drawImage(p, 0, 0), b.globalCompositeOperation = "destination-in", b.filter = `blur(${l / 3}px)`, b.drawImage(_, 0, 0), b.filter = "none", b.globalCompositeOperation = "source-over", t.save(), t.drawImage(v, u.x, u.y), t.restore();
		return;
	}
	t.save(), t.drawImage(p, 0, 0), t.restore();
}
function qe(t, n, r, i, a, o, s) {
	let c = e(o, s);
	if (!c) return;
	let l = He(c);
	if (!l) return;
	let u = Ve(i.blur, a);
	l.save(), u > 0 && (l.filter = `blur(${u}px)`), n(l), l.restore(), l.save(), l.globalCompositeOperation = "destination-in";
	let d = r.y, f = r.y + r.h, p = l.createLinearGradient(0, f, 0, d), m = Je(i.stPos), h = Je(i.endPos);
	p.addColorStop(0, `rgba(0,0,0,${i.stA})`), m > 0 && p.addColorStop(m, `rgba(0,0,0,${i.stA})`), h < 1 && h > m && p.addColorStop(h, `rgba(0,0,0,${i.endA})`), p.addColorStop(1, `rgba(0,0,0,${i.endA})`), l.fillStyle = p, l.fillRect(0, 0, o, s), l.restore();
	let g = Ve(i.dist, a), _ = i.dir * Math.PI / 180, v = Math.cos(_) * g, y = Math.sin(_) * g;
	t.save(), t.translate(r.x + v, f + y), t.scale(i.sx, i.sy), t.translate(-r.x, -f), t.drawImage(c, 0, 0), t.restore();
}
function Je(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e;
}
//#endregion
//#region packages/core/src/shape/scene3d-camera.ts
var q = 26, Ye = {
	orthographicFront: {
		kind: "orthographic",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: 0
	},
	perspectiveFront: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: q
	},
	perspectiveRelaxed: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: q
	},
	perspectiveRelaxedModerately: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: q
	},
	perspectiveAbove: {
		kind: "perspective",
		baseLat: -20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: q
	},
	perspectiveBelow: {
		kind: "perspective",
		baseLat: 20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: q
	},
	perspectiveLeft: {
		kind: "perspective",
		baseLat: 0,
		baseLon: -20,
		baseRev: 0,
		fovDeg: q
	},
	perspectiveRight: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 20,
		baseRev: 0,
		fovDeg: q
	}
};
function Xe(e, t) {
	let n = Array(9).fill(0);
	for (let r = 0; r < 3; r++) for (let i = 0; i < 3; i++) {
		let a = 0;
		for (let n = 0; n < 3; n++) a += e[r * 3 + n] * t[n * 3 + i];
		n[r * 3 + i] = a;
	}
	return n;
}
function Ze(e) {
	let t = e * Math.PI / 180, n = Math.cos(t), r = Math.sin(t);
	return [
		1,
		0,
		0,
		0,
		n,
		-r,
		0,
		r,
		n
	];
}
function Qe(e) {
	let t = e * Math.PI / 180, n = Math.cos(t), r = Math.sin(t);
	return [
		n,
		0,
		r,
		0,
		1,
		0,
		-r,
		0,
		n
	];
}
function $e(e) {
	let t = e * Math.PI / 180, n = Math.cos(t), r = Math.sin(t);
	return [
		n,
		-r,
		0,
		r,
		n,
		0,
		0,
		0,
		1
	];
}
function et(e, t, n, r) {
	return [
		e[0] * t + e[1] * n + e[2] * r,
		e[3] * t + e[4] * n + e[5] * r,
		e[6] * t + e[7] * n + e[8] * r
	];
}
function tt(e, t) {
	let n = t ? t.lat : e.baseLat, r = t ? t.lon : e.baseLon;
	return Xe($e(-(t ? t.rev : e.baseRev)), Xe(Ze(-n), Qe(-r)));
}
function nt(e) {
	return Ye[e] || (e.startsWith("perspective") ? Ye.perspectiveFront : Ye.orthographicFront);
}
function rt(e, t, n) {
	let r = nt(e.prst), i = tt(r, e.rot);
	if (t <= 0 || n <= 0) return {
		corners: [
			{
				x: 0,
				y: 0
			},
			{
				x: t,
				y: 0
			},
			{
				x: t,
				y: n
			},
			{
				x: 0,
				y: n
			}
		],
		isAffine: !0,
		isIdentity: !0
	};
	let a = t / 2, o = n / 2, s = [
		[-a, -o],
		[a, -o],
		[a, o],
		[-a, o]
	], c = e.zoom ?? 1, l = Math.max(a, o), u;
	if (r.kind === "perspective") {
		let t = e.fov ?? r.fovDeg, n = Math.max(1, Math.min(179, t)) * Math.PI / 180, a = l / Math.tan(n / 2);
		u = s.map(([e, t]) => {
			let [n, r, o] = et(i, e, t, 0), s = a - o, c = a / (Math.abs(s) < 1e-6 ? 1e-6 * Math.sign(s || 1) : s);
			return [n * c, r * c];
		});
	} else u = s.map(([e, t]) => {
		let [n, r] = et(i, e, t, 0);
		return [n, r];
	});
	u = u.map(([e, t]) => [e * c, t * c]);
	let d = u.map(([e, r]) => ({
		x: t / 2 + e,
		y: n / 2 + r
	})), f = .001 * Math.max(t, n), p = d[0].x + d[2].x - (d[1].x + d[3].x), m = d[0].y + d[2].y - (d[1].y + d[3].y), h = Math.abs(p) < f && Math.abs(m) < f, g = [
		[0, 0],
		[t, 0],
		[t, n],
		[0, n]
	], _ = !0;
	for (let e = 0; e < 4; e++) if (Math.abs(d[e].x - g[e][0]) > f || Math.abs(d[e].y - g[e][1]) > f) {
		_ = !1;
		break;
	}
	return {
		corners: d,
		isAffine: h,
		isIdentity: _
	};
}
function it(e) {
	let { isIdentity: t } = rt(e, 1e3, 1e3);
	return !t;
}
function at(e, t, n, r) {
	let i = nt(e.prst), a = tt(i, e.rot);
	if (t <= 0 || n <= 0 || r === 0) return {
		x: 0,
		y: 0
	};
	let o = t / 2, s = n / 2, c = Math.max(o, s), l = e.zoom ?? 1, u = (t) => {
		let [n, r, o] = et(a, 0, 0, t);
		if (i.kind === "perspective") {
			let t = e.fov ?? i.fovDeg, a = Math.max(1, Math.min(179, t)) * Math.PI / 180, s = c / Math.tan(a / 2), u = s - o, d = s / (Math.abs(u) < 1e-6 ? 1e-6 * Math.sign(u || 1) : u);
			return [n * d * l, r * d * l];
		}
		return [n * l, r * l];
	}, [d, f] = u(0), [p, m] = u(-r);
	return {
		x: p - d,
		y: m - f
	};
}
//#endregion
//#region packages/core/src/shape/scene3d-draw.ts
function ot(e, t, n, r) {
	let i = e.x, a = e.y, o = t.x, s = t.y, c = n.x, l = n.y, u = r.x, d = r.y, f = o - c, p = u - c, m = i - o + c - u, h = s - l, g = d - l, _ = a - s + l - d, v, y;
	if (Math.abs(m) < 1e-12 && Math.abs(_) < 1e-12) v = 0, y = 0;
	else {
		let e = f * g - p * h;
		if (Math.abs(e) < 1e-12) return null;
		v = (m * g - p * _) / e, y = (f * _ - m * h) / e;
	}
	return [
		o - i + v * o,
		u - i + y * u,
		i,
		s - a + v * s,
		d - a + y * d,
		a,
		v,
		y,
		1
	];
}
function st(e, t, n) {
	let r = e[6] * t + e[7] * n + e[8];
	return {
		x: (e[0] * t + e[1] * n + e[2]) / r,
		y: (e[3] * t + e[4] * n + e[5]) / r
	};
}
var ct = 1;
function lt(e, t) {
	let [n, r, i, a, o, s] = e, [c, l, u, d, f, p] = t;
	return [
		n * c + i * l,
		r * c + a * l,
		n * u + i * d,
		r * u + a * d,
		n * f + i * p + o,
		r * f + a * p + s
	];
}
function ut(e, t, n, r, i, a, o, s, c, l, u, d, f) {
	let p = c - o, m = l - s;
	if (p <= 0 || m <= 0) return;
	let h = (d.x - u.x) / p, g = (d.y - u.y) / p, _ = (f.x - u.x) / m, v = (f.y - u.y) / m, y = (Math.hypot(d.x - u.x, d.y - u.y) || 1) * a, b = (Math.hypot(f.x - u.x, f.y - u.y) || 1) * a, x = ct * p / y, S = ct * m / b, C = Math.max(0, o - x), w = Math.max(0, s - S), T = Math.min(n, c + x), E = Math.min(r, l + S), D = T - C, O = E - w;
	if (D <= 0 || O <= 0) return;
	e.save();
	let [k, A, j, M, N, P] = lt(i, [
		h,
		g,
		_,
		v,
		u.x - o * h - s * _,
		u.y - o * g - s * v
	]);
	e.setTransform(k, A, j, M, N, P), e.drawImage(t, C, w, D, O, C, w, D, O), e.restore();
}
function dt(e, t, n, r, i, a, o, s, c, l, u, d, f) {
	let p = st(o, s, c), m = st(o, l, c), h = st(o, s, u), g = st(o, l, u), _ = (s + l) / 2, v = (c + u) / 2, y = st(o, _, v), b = {
		x: (p.x + m.x + h.x + g.x) / 4,
		y: (p.y + m.y + h.y + g.y) / 4
	}, x = pt(i), S = Math.hypot(y.x - b.x, y.y - b.y) * x;
	if (f <= 0 || S <= d) {
		ut(e, t, n, r, i, a, s * n, c * r, l * n, u * r, p, m, h);
		return;
	}
	l - s >= u - c ? (dt(e, t, n, r, i, a, o, s, c, _, u, d, f - 1), dt(e, t, n, r, i, a, o, _, c, l, u, d, f - 1)) : (dt(e, t, n, r, i, a, o, s, c, l, v, d, f - 1), dt(e, t, n, r, i, a, o, s, v, l, u, d, f - 1));
}
function ft(e, t, n, r, i, a = .5) {
	if (n <= 0 || r <= 0) return;
	let [o, s, c, l] = i;
	if (Math.abs(o.x * s.y - s.x * o.y + s.x * c.y - c.x * s.y + c.x * l.y - l.x * c.y + l.x * o.y - o.x * l.y) / 2 < 1e-6) return;
	let u = ot(i[0], i[1], i[2], i[3]);
	if (!u) return;
	let d = t.getTransform(), f = [
		d.a,
		d.b,
		d.c,
		d.d,
		d.e,
		d.f
	], p = pt(f);
	vt(e, t, n, r, i, f, p, u, a, 14) || (gt(), t.save(), t.beginPath(), t.moveTo(i[0].x, i[0].y), t.lineTo(i[1].x, i[1].y), t.lineTo(i[2].x, i[2].y), t.lineTo(i[3].x, i[3].y), t.closePath(), t.clip(), dt(t, e, n, r, f, p, u, 0, 0, 1, 1, a, 14), t.restore());
}
function pt(e) {
	return Math.sqrt(Math.abs(e[0] * e[3] - e[1] * e[2])) || 1;
}
function mt(e, t, n) {
	let r = ot(e[0], e[1], e[2], e[3]);
	if (!r) return null;
	let i = [
		[-t, -n],
		[1 + t, -n],
		[1 + t, 1 + n],
		[-t, 1 + n]
	], a = [];
	for (let [e, t] of i) {
		if (!(r[6] * e + r[7] * t + r[8] > 1e-9)) return null;
		a.push(st(r, e, t));
	}
	return a;
}
var ht = !1;
function gt() {
	ht || (ht = !0, typeof console < "u" && typeof console.warn == "function" && console.warn("[ooxml] scene3d: no offscreen canvas available — using the direct warp fallback (per-cell bleed only, no supersample). Textured-source seams may be faintly visible; the silhouette and geometry are unaffected."));
}
var _t = 2;
function vt(t, n, r, i, a, o, s, c, l, u) {
	let d = a.map((e) => ({
		x: o[0] * e.x + o[2] * e.y + o[4],
		y: o[1] * e.x + o[3] * e.y + o[5]
	})), f = Infinity, p = Infinity, m = -Infinity, h = -Infinity;
	for (let e of d) e.x < f && (f = e.x), e.y < p && (p = e.y), e.x > m && (m = e.x), e.y > h && (h = e.y);
	f = Math.floor(f) - 1, p = Math.floor(p) - 1, m = Math.ceil(m) + 1, h = Math.ceil(h) + 1;
	let g = m - f, _ = h - p;
	if (g <= 0 || _ <= 0) return !1;
	let v = Math.max(1, Math.ceil(g * _t)), y = Math.max(1, Math.ceil(_ * _t)), b = e(v, y);
	if (!b || b.width !== v || b.height !== y) return !1;
	let x = b.getContext("2d") ?? null;
	if (!x) return !1;
	let S = _t, C = [
		o[0] * S,
		o[1] * S,
		o[2] * S,
		o[3] * S,
		(o[4] - f) * S,
		(o[5] - p) * S
	];
	x.save(), x.setTransform(C[0], C[1], C[2], C[3], C[4], C[5]), x.beginPath(), x.moveTo(a[0].x, a[0].y), x.lineTo(a[1].x, a[1].y), x.lineTo(a[2].x, a[2].y), x.lineTo(a[3].x, a[3].y), x.closePath(), x.clip(), dt(x, t, r, i, C, s, c, 0, 0, 1, 1, l * S, u), x.restore(), n.save(), n.setTransform(1, 0, 0, 1, 0, 0);
	let w = n.imageSmoothingEnabled, T = n.imageSmoothingQuality;
	return n.imageSmoothingEnabled = !0, n.imageSmoothingQuality = "high", n.drawImage(b, 0, 0, g * S, _ * S, f, p, g, _), n.imageSmoothingEnabled = w, n.imageSmoothingQuality = T, n.restore(), !0;
}
//#endregion
//#region packages/core/src/shape/bevel-shading.ts
function yt(e, t) {
	if (t <= 0) return () => 1;
	let n = (e) => Math.max(0, Math.min(1, e / t));
	switch (e) {
		case "hardEdge": {
			let e = Dt;
			return (t) => {
				let r = Math.min(1, n(t) / e);
				return r * r * (3 - 2 * r);
			};
		}
		case "angle":
		case "slope": return (e) => n(e);
		case "circle":
		case "convex":
		case "softRound": return (e) => {
			let t = 1 - n(e);
			return Math.sqrt(Math.max(0, 1 - t * t));
		};
		default: return (e) => {
			let t = n(e);
			return t * t * (3 - 2 * t);
		};
	}
}
function bt(e) {
	let t = e.length, n = new Float64Array(t);
	if (t === 0) return n;
	let r = new Int32Array(t), i = new Float64Array(t + 1), a = 0;
	r[0] = 0, i[0] = -Infinity, i[1] = Infinity;
	for (let n = 1; n < t; n++) {
		let t = (e[n] + n * n - (e[r[a]] + r[a] * r[a])) / (2 * n - 2 * r[a]);
		for (; t <= i[a];) a--, t = (e[n] + n * n - (e[r[a]] + r[a] * r[a])) / (2 * n - 2 * r[a]);
		a++, r[a] = n, i[a] = t, i[a + 1] = Infinity;
	}
	a = 0;
	for (let o = 0; o < t; o++) {
		for (; i[a + 1] < o;) a++;
		let t = o - r[a];
		n[o] = t * t + e[r[a]];
	}
	return n;
}
function xt(e, t = 3) {
	if (e <= 0) return Array(t).fill(1);
	let n = Math.sqrt(12 * e * e / t + 1), r = Math.floor(n);
	r % 2 == 0 && r--;
	let i = r + 2, a = (12 * e * e - t * r * r - 4 * t * r - 3 * t) / (-4 * r - 4), o = Math.round(a), s = [];
	for (let e = 0; e < t; e++) s.push(e < o ? r : i);
	return s;
}
function St(e, t, n, r, i, a) {
	let o = 1 / (2 * i + 1);
	if (a) for (let a = 0; a < r; a++) {
		let r = a * n, s = 0;
		for (let t = 0; t <= i; t++) t < n && (s += e[r + t]);
		for (let a = 0; a < n; a++) {
			t[r + a] = s * o;
			let c = a + i + 1, l = a - i;
			c < n && (s += e[r + c]), l >= 0 && (s -= e[r + l]);
		}
	}
	else for (let a = 0; a < n; a++) {
		let s = 0;
		for (let t = 0; t <= i; t++) t < r && (s += e[t * n + a]);
		for (let c = 0; c < r; c++) {
			t[c * n + a] = s * o;
			let l = c + i + 1, u = c - i;
			l < r && (s += e[l * n + a]), u >= 0 && (s -= e[u * n + a]);
		}
	}
}
function Ct(e, t, n, r) {
	let i = Float64Array.from(e);
	if (r <= 0 || t <= 0 || n <= 0) return i;
	let a = new Float64Array(t * n);
	for (let e of xt(r, 3)) {
		let r = Math.max(1, (e - 1) / 2);
		St(i, a, t, n, r, !0), St(a, i, t, n, r, !1);
	}
	return i;
}
function wt(e, t, n, r = 128) {
	let i = new Float64Array(t * n);
	for (let a = 0; a < t * n; a++) i[a] = (e[a] ?? 0) >= r ? 0x56bc75e2d63100000 : 0;
	let a = new Float64Array(n);
	for (let e = 0; e < t; e++) {
		for (let r = 0; r < n; r++) a[r] = i[r * t + e];
		let r = bt(a);
		for (let a = 0; a < n; a++) i[a * t + e] = r[a];
	}
	let o = new Float64Array(t);
	for (let e = 0; e < n; e++) {
		for (let n = 0; n < t; n++) o[n] = i[e * t + n];
		let n = bt(o);
		for (let r = 0; r < t; r++) i[e * t + r] = n[r];
	}
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let a = e * t + r;
		if (i[a] === 0) continue;
		let o = (e + 1) * (e + 1), s = (n - e) * (n - e), c = (r + 1) * (r + 1), l = (t - r) * (t - r), u = Math.min(o, s, c, l);
		u < i[a] && (i[a] = u);
	}
	for (let e = 0; e < t * n; e++) i[e] = Math.sqrt(i[e]);
	return i;
}
var Tt = .25, Et = .35, Dt = .5;
function Ot(e, t, n, r, i, a) {
	let o = new Float32Array(t * n * 3), s = new Uint8Array(t * n), c = new Float32Array(t * n);
	if (t <= 0 || n <= 0) return {
		normals: o,
		bandMask: s,
		bandWeight: c
	};
	let l = wt(e, t, n), u = yt(i, r), d = (n, r) => (e[r * t + n] ?? 0) >= 128, f = (r > 0 ? a / r : 0) * r, p = Ct(l, t, n, Math.max(1, r * Tt)), m = (e) => {
		let t = u(Math.max(0, e - .5));
		return u(e + .5) - t;
	};
	for (let e = 0; e < n; e++) for (let i = 0; i < t; i++) {
		let a = e * t + i;
		if (!d(i, e)) {
			o[a * 3 + 2] = 1;
			continue;
		}
		let u = l[a], h = u > 0 && u < r;
		if (s[a] = +!!h, !h) {
			o[a * 3 + 2] = 1;
			continue;
		}
		let g = u / r, _ = 1 - Et, v = 1;
		if (g > _) {
			let e = Math.min(1, (g - _) / Et);
			v = 1 - e * e * (3 - 2 * e);
		}
		c[a] = v;
		let y = i > 0 ? i - 1 : i, b = i < t - 1 ? i + 1 : i, x = e > 0 ? e - 1 : e, S = e < n - 1 ? e + 1 : e, C = (p[e * t + b] - p[e * t + y]) / (b - y || 1), w = (p[S * t + i] - p[x * t + i]) / (S - x || 1), T = Math.hypot(C, w), E = 0, D = 0;
		T > 1e-9 && (E = -C / T, D = -w / T);
		let O = m(u) * f, k = O * E, A = O * D, j = 1, M = Math.hypot(k, A, j) || 1;
		k /= M, A /= M, j /= M, o[a * 3] = k, o[a * 3 + 1] = A, o[a * 3 + 2] = j;
	}
	return {
		normals: o,
		bandMask: s,
		bandWeight: c
	};
}
var kt = 35 * Math.PI / 180, At = 12 * Math.PI / 180, jt = {
	t: {
		x: 0,
		y: -1
	},
	b: {
		x: 0,
		y: 1
	},
	l: {
		x: -1,
		y: 0
	},
	r: {
		x: 1,
		y: 0
	},
	tl: {
		x: -1,
		y: -1
	},
	tr: {
		x: 1,
		y: -1
	},
	bl: {
		x: -1,
		y: 1
	},
	br: {
		x: 1,
		y: 1
	}
};
function Mt(e, t, n) {
	let r = n * Math.PI / 180, i = Math.cos(r), a = Math.sin(r);
	return {
		x: e * i - t * a,
		y: e * a + t * i
	};
}
function Nt(e, t, n) {
	let r = jt[t] ?? jt.t;
	return n && n.rev && (r = Mt(r.x, r.y, n.rev)), Ft(r.x, r.y, kt);
}
function Pt(e) {
	let t = Math.hypot(e.x, e.y) || 1;
	return Ft(-e.x / t, -e.y / t, At);
}
function Ft(e, t, n) {
	let r = Math.hypot(e, t) || 1, i = Math.cos(n), a = Math.sin(n), o = e / r * i, s = t / r * i, c = a, l = Math.hypot(o, s, c) || 1;
	return {
		x: o / l,
		y: s / l,
		z: c / l
	};
}
var It = 2, Lt = {
	matte: {
		ambient: .62,
		diffuse: .45,
		specular: 0,
		shininess: 8
	},
	plastic: {
		ambient: .55,
		diffuse: .5,
		specular: .35,
		shininess: 22
	}
}, Rt = .8;
function zt(e) {
	switch (e) {
		case "plastic":
		case "metal":
		case "clear":
		case "softEdge":
		case "shiny":
		case "softmetal": return "plastic";
		default: return "matte";
	}
}
function Bt(e, t, n = !0) {
	let r = Lt[e], i = {
		light: t,
		material: e,
		ambient: r.ambient,
		diffuse: r.diffuse,
		specular: r.specular,
		shininess: r.shininess
	};
	return n && (i.fillLight = Pt(t), i.fillDiffuse = i.diffuse * Rt), i;
}
function Vt(e, t) {
	let n = e.x * t.light.x + e.y * t.light.y + e.z * t.light.z, r = t.diffuse * Math.max(0, n), i = 0;
	if (t.fillLight && t.fillDiffuse) {
		let n = e.x * t.fillLight.x + e.y * t.fillLight.y + e.z * t.fillLight.z;
		i = t.fillDiffuse * Math.max(0, n);
	}
	let a = 0;
	if (t.specular > 0) {
		let n = t.light.x, r = t.light.y, i = t.light.z + 1, o = Math.hypot(n, r, i) || 1, s = (e.x * n + e.y * r + e.z * i) / o;
		a = t.specular * Math.max(0, s) ** +t.shininess;
	}
	return Math.max(0, t.ambient + r + i + a);
}
function Ht(e, t, n) {
	if (!e) return {
		x: 0,
		y: 0,
		w: t,
		h: n
	};
	let r = Math.max(0, Math.floor(e.x)), i = Math.max(0, Math.floor(e.y)), a = Math.min(t, Math.ceil(e.x + e.w)), o = Math.min(n, Math.ceil(e.y + e.h));
	return {
		x: r,
		y: i,
		w: Math.max(0, a - r),
		h: Math.max(0, o - i)
	};
}
function Ut(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.widthPx;
	if (a < .75) return;
	let { x: o, y: s, w: c, h: l } = Ht(n, r, i);
	if (c <= 0 || l <= 0) return;
	let u = e.getImageData(o, s, c, l), d = u.data, f = new Uint8ClampedArray(c * l);
	for (let e = 0; e < c * l; e++) f[e] = d[e * 4 + 3];
	let { bandMask: p, bandWeight: m, normals: h } = Ot(f, c, l, a, t.prst, t.heightPx), g = Bt(t.material, t.light), _ = Vt({
		x: 0,
		y: 0,
		z: 1
	}, g) || 1;
	for (let e = 0; e < c * l; e++) {
		if (p[e] === 0) continue;
		let n = m[e];
		if (n <= 0) continue;
		let r = h[e * 3], i = h[e * 3 + 1], a = h[e * 3 + 2];
		t.bottom && (r = -r, i = -i);
		let o = 1 + (Vt({
			x: r,
			y: i,
			z: a
		}, g) / _ - 1) * n, s = e * 4;
		if (o >= 1) {
			let e = Math.min(1, (o - 1) * It);
			for (let t = 0; t < 3; t++) {
				let n = Math.min(255, d[s + t] * o);
				d[s + t] = n + (255 - n) * e;
			}
		} else d[s] = Math.max(0, d[s] * o), d[s + 1] = Math.max(0, d[s + 1] * o), d[s + 2] = Math.max(0, d[s + 2] * o);
	}
	e.putImageData(u, o, s);
}
function Wt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.offsetX, o = t.offsetY, s = Math.hypot(a, o);
	if (s < .75) return;
	let { x: c, y: l, w: u, h: d } = Ht(n, r, i);
	if (u <= 0 || d <= 0) return;
	let f = e.getImageData(c, l, u, d), p = f.data, m = new Uint8ClampedArray(u * d);
	for (let e = 0; e < u * d; e++) m[e] = p[e * 4 + 3];
	let h = Math.max(1, Math.ceil(s)), [g, _, v] = t.rgb;
	for (let e = 0; e < d; e++) for (let t = 0; t < u; t++) {
		let n = e * u + t;
		if (m[n] >= 128) continue;
		let r = !1;
		for (let n = 1; n <= h; n++) {
			let i = n / h, s = Math.round(t - a * i), c = Math.round(e - o * i);
			if (!(s < 0 || c < 0 || s >= u || c >= d) && m[c * u + s] >= 128) {
				r = !0;
				break;
			}
		}
		if (!r) continue;
		let i = n * 4;
		p[i] = g, p[i + 1] = _, p[i + 2] = v, p[i + 3] = 255;
	}
	e.putImageData(f, c, l);
}
//#endregion
//#region packages/core/src/text/underline.ts
function Gt(e, t, n, r, i, a, o, s = 1) {
	let c = Math.max(1, i * .05), l = o === "heavy" || (o?.endsWith("Heavy") ?? !1) ? c * 1.8 : c, u = n + Math.max(2, l), d = G(u, l, s);
	if (e.strokeStyle = a, e.lineWidth = l, e.setLineDash([]), o && o.startsWith("wavy")) {
		let n = l, i = l * 6;
		e.beginPath(), e.moveTo(t, u);
		let a = Math.max(1, l * .5);
		for (let o = 0; o <= r; o += a) {
			let r = u + Math.sin(o / i * Math.PI * 2) * n;
			e.lineTo(t + o, r);
		}
		if (e.stroke(), o === "wavyDbl") {
			e.beginPath(), e.moveTo(t, u + n * 2.5);
			for (let o = 0; o <= r; o += a) {
				let r = u + n * 2.5 + Math.sin(o / i * Math.PI * 2) * n;
				e.lineTo(t + o, r);
			}
			e.stroke();
		}
		return;
	}
	if (o === "dbl") {
		let n = l * 1.4, i = u - n / 2, a = u + n / 2;
		e.beginPath(), e.moveTo(t, i + G(i, l, s)), e.lineTo(t + r, i + G(i, l, s)), e.moveTo(t, a + G(a, l, s)), e.lineTo(t + r, a + G(a, l, s)), e.stroke();
		return;
	}
	e.setLineDash(D(o ?? "sng", l)), e.beginPath(), e.moveTo(t, u + d), e.lineTo(t + r, u + d), e.stroke(), e.setLineDash([]);
}
//#endregion
//#region packages/core/src/text/highlight-box.ts
function Kt(e, t) {
	return {
		top: e - t * .85,
		height: t * 1.1
	};
}
//#endregion
//#region packages/core/src/text/justify-positions.ts
function qt(e, t, n, r, i = 0) {
	let a = [], o = 0, s = 0;
	for (let c of t) a.push({
		text: e.slice(o, c).join(""),
		dx: r(e.slice(0, o).join("")) + o * i + s * n
	}), o = c, s++;
	return a.push({
		text: e.slice(o).join(""),
		dx: r(e.slice(0, o).join("")) + o * i + s * n
	}), a;
}
//#endregion
//#region packages/pptx/src/hyperlink.ts
function Jt(e, t) {
	let n = e !== void 0 && e !== "" ? e : void 0, r = t !== void 0 && t !== "" ? t : void 0;
	if (n === void 0 && r === void 0) return;
	if (r !== void 0) return {
		kind: "internal",
		ref: n ?? r
	};
	let i = n, a = V(i);
	return a !== null && oe.includes(a) ? {
		kind: "external",
		url: i
	} : {
		kind: "internal",
		ref: i
	};
}
//#endregion
//#region packages/pptx/src/media-chrome.ts
function Yt(e, t, n, r, i, a) {
	let o = Math.max(18, Math.min(32, Math.min(r, i) * .25));
	if (e.save(), e.shadowColor = "rgba(0, 0, 0, 0.3)", e.shadowBlur = o * .35, e.fillStyle = "rgba(20, 20, 20, 0.7)", e.beginPath(), e.arc(t, n, o, 0, Math.PI * 2), e.fill(), e.shadowColor = "transparent", e.shadowBlur = 0, e.fillStyle = "#fff", a === "paused") {
		e.beginPath();
		let r = o * .48;
		e.moveTo(t - r * .4, n - r), e.lineTo(t - r * .4, n + r), e.lineTo(t + r * .75, n), e.closePath(), e.fill();
	} else {
		let r = o * .2, i = o * .8, a = o * .15;
		e.fillRect(t - a - r, n - i / 2, r, i), e.fillRect(t + a, n - i / 2, r, i);
	}
	e.restore();
}
//#endregion
//#region packages/pptx/src/bidi-line.ts
var Xt = (e) => {
	let t = e.text;
	return typeof t == "string" ? t : void 0;
}, Zt = (e) => "isTab" in e;
function Qt(e) {
	for (let t of e) {
		let e = Xt(t);
		if (e !== void 0 && H(e)) return !0;
	}
	return !1;
}
function $t(e, n) {
	let r = e.length;
	if (r === 0) return {
		order: [],
		rtl: []
	};
	let i = "", a = Array(r), o;
	for (let t = 0; t < r; t++) {
		a[t] = i.length;
		let n = Xt(e[t]) ?? "";
		if (i += n.length > 0 ? n : "￼", Zt(e[t])) {
			for (o ??= []; o.length < i.length;) o.push(null);
			o[a[t]] = "S";
		}
	}
	if (o) for (; o.length < i.length;) o.push(null);
	let { levels: s, paragraphLevel: c } = m().computeLevels(i, n ? "rtl" : "ltr", o), { order: l, segLevels: u } = t(s, c, a), d = Array(r);
	for (let e = 0; e < r; e++) d[e] = (u[e] & 1) == 1;
	return {
		order: l,
		rtl: d
	};
}
//#endregion
//#region packages/pptx/src/cjk-wrap.ts
function en(e, t, n, r) {
	if (e.length === 0) return 0;
	let i = t === 0, o = 0, s = t;
	for (let t of e) {
		if (s + t.w > n) {
			if (o > 0 || !i) break;
			s += t.w, o++;
			break;
		}
		s += t.w, o++;
	}
	return o === 0 ? 0 : o >= e.length ? e.length : a(e.map((e) => e.ch), o, r, +!!i);
}
//#endregion
//#region packages/pptx/src/text-justify.ts
var tn = (e) => /\s/.test(String.fromCodePoint(e));
function nn(e, t, n, r, i) {
	if (r === "just" && i) return null;
	let a = t - n;
	if (a <= .5) return null;
	let o = Ce(e, a, {
		firstContentSi: 0,
		lastDrawnSi: e.length,
		isGapChar: fe,
		isWhitespace: tn,
		seaClusterGaps: r === "thaiDist"
	});
	if (!o) return null;
	let { perGap: s, perSeg: c } = o, l = [];
	for (let t = 0; t < e.length; t++) {
		let n = e[t], r = c.get(t), i = r?.trailingGap ? s : 0, a = r?.splitBefore;
		a && a.length > 0 ? l.push({
			...n,
			jext: i,
			splitBefore: [...a],
			perGap: s
		}) : l.push({
			...n,
			jext: i
		});
	}
	return l;
}
//#endregion
//#region packages/pptx/src/table-border-conflict.ts
function rn(e) {
	if (!e) return {
		r: 0,
		g: 0,
		b: 0
	};
	let t = e.replace(/^#/, "");
	return t.length < 6 || /[^0-9a-fA-F]/.test(t.slice(0, 6)) ? {
		r: 0,
		g: 0,
		b: 0
	} : {
		r: parseInt(t.slice(0, 2), 16),
		g: parseInt(t.slice(2, 4), 16),
		b: parseInt(t.slice(4, 6), 16)
	};
}
function an(e) {
	let t = rn(e);
	return .299 * t.r + .587 * t.g + .114 * t.b;
}
function on(e, t) {
	if (!e && !t) return null;
	if (!e) return t;
	if (!t) return e;
	if (e.width !== t.width) return e.width > t.width ? e : t;
	let n = an(e.color), r = an(t.color);
	return n === r || n < r ? e : t;
}
//#endregion
//#region packages/pptx/src/smartart-fallback-contrast.ts
function sn(e) {
	let t = A(e.length === 8 ? e.slice(0, 6) : e);
	if (!t) return null;
	let n = pe(t[0], t[1], t[2]);
	if (e.length !== 8) return n;
	let r = Number.parseInt(e.slice(6, 8), 16);
	if (Number.isNaN(r)) return null;
	let i = r / 255;
	return i * n + (1 - i);
}
function cn(e) {
	if (!e) return null;
	if (e.fillType === "solid") return sn(e.color);
	if (e.fillType === "gradient") {
		let t = e.stops.map((e) => ({
			p: Math.min(1, Math.max(0, e.position)),
			l: sn(e.color)
		})).filter((e) => e.l !== null).sort((e, t) => e.p - t.p);
		if (t.length === 0) return null;
		let n = t[0], r = t[t.length - 1], i = n.l * n.p + r.l * (1 - r.p);
		for (let e = 0; e + 1 < t.length; e++) i += (t[e].l + t[e + 1].l) / 2 * (t[e + 1].p - t[e].p);
		return i;
	}
	return null;
}
function ln(e) {
	return e.name === "SmartArt" && e.id === void 0;
}
function un(e, t) {
	let n = cn(e);
	if (n === null || n >= .5) return null;
	let r = sn(t.replace(/^#/, ""));
	return r !== null && r >= .5 ? null : "#FFFFFF";
}
//#endregion
//#region packages/pptx/src/tab-layout.ts
function dn(e, t, n, r, i, a = 0) {
	let o = e.map((e) => e.width), s = (t) => {
		let n = 0;
		for (let r = t; r < e.length && !e[r].isTab; r++) n += o[r];
		return n;
	}, c = n;
	for (let n = 0; n < e.length; n++) {
		if (!e[n].isTab) {
			c += o[n];
			continue;
		}
		let l = null;
		for (let e of t) e.pos > c && (l === null || e.pos < l.pos) && (l = e);
		if (l === null) if (a > 0) l = {
			pos: (Math.floor(c / a) + 1) * a,
			algn: "l"
		};
		else {
			o[n] = i, c += i;
			continue;
		}
		let u = s(n + 1), d = l.algn === "ctr" ? .5 : +(l.algn === "r" || l.algn === "dec"), f = l.pos - u * d;
		f + u > r && (f = r - u), f < c && (f = c), o[n] = f - c, c = f;
	}
	return o;
}
//#endregion
//#region packages/pptx/src/vertical-text.ts
var fn = () => !1;
function pn(e, t, n) {
	let r = e.textBaseline;
	e.textBaseline = "alphabetic";
	let i = e.measureText(t);
	e.textBaseline = r;
	let a = i.fontBoundingBoxAscent, o = i.fontBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" && (a !== 0 || o !== 0) ? (a - o) / 2 : .38 * n;
}
function mn(e, t) {
	let n = e.textAlign, r = e.textBaseline;
	e.textAlign = "center", e.textBaseline = "middle";
	let i = e.measureText(t);
	e.textAlign = n, e.textBaseline = r;
	let a = i.actualBoundingBoxAscent, o = i.actualBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" ? (a - o) / 2 : 0;
}
function hn(e, t, n, r, i, a, o = "fill", s = fn) {
	let c = e.textAlign, l = e.textBaseline, u = o === "stroke" ? e.strokeText.bind(e) : e.fillText.bind(e), d = r - pn(e, t, i), f = 0;
	for (let o of t) {
		let t = o.codePointAt(0) ?? 0, l = I(t), p = e.measureText(o).width + a, m = l === "Tr" ? le(t) : null, h = l === "Tr" && m === null && ee(t), g = l === "U" || l === "Tu" || m !== null || h;
		if (re(t) && s(t)) {
			let t = n + f + p / 2;
			e.save(), e.translate(t, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", j(e, () => u(o, 0, 0)), e.restore();
		} else if (g) {
			let r = m === null && l === "Tu" ? P(t) : null, a = m === null ? r : m, s = a === null ? o : String.fromCodePoint(a), c = n + f + p / 2, h = r === null ? mn(e, s) / i : 0;
			e.save(), e.translate(c, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", u(s, 0, h * i), e.restore();
		} else if (l === "Tr") {
			let t = n + f + p / 2;
			e.textAlign = "center", e.textBaseline = "middle", u(o, t, d);
		} else e.textAlign = c, e.textBaseline = "alphabetic", u(o, n + f, r);
		f += p;
	}
	e.textAlign = c, e.textBaseline = l;
}
function gn(e, t, n, r, i, a, o = "fill") {
	hn(e, t, n, r, i, a, o, (t) => se(e, t));
}
//#endregion
//#region packages/pptx/src/renderer.ts
function J(e, t) {
	return e * t;
}
var Y = u;
function _n(e, t, n, r, i, a, o) {
	let { top: s, height: c } = Kt(n, i);
	e.fillStyle = a, e.fillRect(t, s, r, c), e.fillStyle = o;
}
function vn(e) {
	return !e || e.fillType === "none" ? null : e.fillType === "solid" ? Y(e.color) : e.fillType === "gradient" ? e.stops.length > 0 ? Y(e.stops[0].color) : null : e.fillType === "pattern" ? Y(e.fg) : null;
}
function yn(e, t, n, r, i, a) {
	return E(e, t, n, r, i, a);
}
var bn = /* @__PURE__ */ new WeakMap();
function xn(e, t) {
	let n = e.tinted.get(t);
	if (n) return n;
	let r = e.img.naturalWidth || 1, i = e.img.naturalHeight || 1, a = document.createElement("canvas");
	a.width = r, a.height = i;
	let o = a.getContext("2d");
	return o ? (o.drawImage(e.img, 0, 0, r, i), o.globalCompositeOperation = "source-in", o.fillStyle = t, o.fillRect(0, 0, r, i), e.tinted.set(t, a), a) : e.img;
}
function Sn(e) {
	let t = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, n = new Image();
	return new Promise((e, r) => {
		n.onload = () => e(n), n.onerror = r, n.src = t;
	});
}
var Cn = 256;
function wn(e, t, n) {
	let r = Math.max(1, Math.round(t * Cn)), i = Math.max(1, Math.round(n * Cn));
	return e.replace(/<svg([^>]*?)>/, (e, t) => `<svg${t.replace(/\s(?:width|height)="[^"]*"/g, "")} width="${r}" height="${i}">`);
}
function Tn(e) {
	let t = [], n = (e) => {
		if (e) for (let n of e.paragraphs) for (let e of n.runs) e.type === "math" && t.push({
			nodes: e.nodes,
			display: e.display
		});
	};
	for (let t of e.elements) if (t.type === "shape") n(t.textBody);
	else if (t.type === "table") for (let e of t.rows) for (let t of e.cells) n(t.textBody);
	return t;
}
async function En(e, t) {
	let n = Tn(e);
	if (n.length !== 0) {
		await t.loadMathJax();
		for (let e of n) if (!bn.has(e.nodes)) try {
			let n = await t.mathMLToSvg(k(e.nodes, e.display)), r = await Sn(wn(Te(n.svg, "#000000"), n.widthEm, n.ascentEm + n.descentEm));
			bn.set(e.nodes, {
				img: r,
				widthEm: n.widthEm,
				ascentEm: n.ascentEm,
				descentEm: n.descentEm,
				tinted: /* @__PURE__ */ new Map()
			});
		} catch {}
	}
}
function Dn(e, t) {
	return e ? e.startsWith("+") ? e === "+mj-lt" || e === "+mj-ea" || e === "+mj-cs" ? t.themeMajorFont ?? "sans-serif" : t.themeMinorFont ?? "sans-serif" : e.split(",")[0].trim() || (t.themeMinorFont ?? "sans-serif") : t.themeMinorFont ?? "sans-serif";
}
var On = new Set([
	"serif",
	"sans-serif",
	"monospace",
	"cursive",
	"fantasy",
	"system-ui"
]);
function kn(e) {
	let t = F(e);
	return t === "mono" ? "monospace" : t === "serif" ? "serif" : "sans-serif";
}
var An = {
	calibri: "Carlito",
	"calibri light": "Carlito",
	cambria: "Caladea",
	"cambria math": "Caladea",
	"sakkal majalla": "Noto Naskh Arabic",
	"traditional arabic": "Noto Naskh Arabic",
	"simplified arabic": "Noto Naskh Arabic",
	"arabic typesetting": "Noto Naskh Arabic",
	"univers next arabic": "Noto Sans Arabic"
}, jn = "\"Noto Naskh Arabic\", \"Noto Sans Arabic\"";
function Mn(e) {
	if (An[e.toLowerCase()]?.includes("Arabic")) return !0;
	let t = e.toLowerCase();
	return /arabic|naskh|kufi|nastaliq|amiri|scheherazade|lateef|aldhabi|urdu|farsi|العرب|[؀-ۿ]/.test(t);
}
function Nn(e) {
	return e.map((e) => `"${e}"`).join(", ");
}
function Pn(e) {
	let t = kn(e), n = An[e.toLowerCase()], r = n ? `"${n}", ` : "";
	if (Mn(e)) return `"${e}", ${r}${jn}, ${t}`;
	let i = t === "serif" ? "serif" : "sans", a = ue(e);
	return `"${e}", ${r}${a ? `${Nn(W(a, i))}, ` : ""}${`${Nn(i === "serif" ? ce : ne)}, `}${t}`;
}
function Fn(e) {
	return e ? e.kind === "external" ? `e:${e.url}` : `i:${e.ref}` : "";
}
function X(e, t, n, r, i) {
	let a = t ? "italic " : "", o = e ? "bold " : "", s = Dn(r, i);
	return On.has(s) ? `${a}${o}${n}px ${s}` : `${a}${o}${n}px ${Pn(s)}`;
}
function In(e) {
	return e.bullet.type === "char" || e.bullet.type === "autoNum" || Ee(e.bullet).type === "blip";
}
function Ln(e, t) {
	return e ? 0 : Math.max(0, t);
}
function Rn(e, t, n, r, i, a, o) {
	let s = (t.defaultFontSize ?? 18) * K * a;
	for (let c of t.paragraphs) {
		let l = J(c.marL, a), u = J(c.marR, a), d = J(c.indent, a), f = Ln(In(c), d), p = n - r - i - l - u - f, m = 0;
		for (let n of c.runs) {
			if (n.type !== "text") continue;
			let r = n.fontSize == null ? c.defFontSize == null ? s : c.defFontSize * K * a : n.fontSize * K * a, i = Dn(n.fontFamily ?? c.defFontFamily ?? null, o);
			if (e.font = X(n.bold ?? c.defBold ?? t.defaultBold ?? !1, n.italic ?? c.defItalic ?? t.defaultItalic ?? !1, r, i, o), m += e.measureText(n.text).width, m > p) return !0;
		}
	}
	return !1;
}
function zn(e) {
	for (let t of e) if (fe(t.codePointAt(0) ?? 0)) return !0;
	return !1;
}
function Z(e) {
	let t = 0;
	for (let n of e) t++;
	return t;
}
function Bn(e, t, n, r, a, o, s, c = !1, l = !1, u = 1, d, f = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, p = 0) {
	let m = [], h = () => n - (m.length === 0 ? p : 0), g = { segments: [] }, v = 0, y = !1, x = t.rtl === !0, S = J(t.marR, o), C = (t.tabStops ?? []).map((e) => ({
		pos: J(e.pos, o),
		algn: e.algn
	})), w = J(t.defTabSz ?? 914400, o), T = !1, E = [], D = 0, k = () => x ? S : s + (m.length === 0 ? p : 0), A = (e = 0) => {
		let t = dn(e > 0 ? [...E, {
			isTab: !1,
			width: e
		}] : E, C, k(), Infinity, D, w), n = 0;
		for (let e of t) n += e;
		return n;
	}, j = (e) => {
		let t = h();
		return Number.isFinite(t) ? T ? A(e) <= t : v + e <= t : !0;
	}, M = () => {
		let e = h();
		if (!T) return e - v;
		if (!Number.isFinite(e)) return Infinity;
		if (A(0) >= e) return 0;
		let t = 0, n = e;
		for (let r = 0; r < 40; r++) {
			let r = (t + n) / 2;
			A(r) <= e ? t = r : n = r;
		}
		return t;
	}, N = (e = !1) => {
		e && (g.endsWithBreak = !0), m.push(g), g = { segments: [] }, v = 0, T = !1, E = [], y = !1;
	}, P = (t, n, r, i, a, o, s, c) => {
		if (!t) return;
		e.font = n;
		let l = c?.letterSpacingPx ?? 0, u = e.measureText(t).width + l * Z(t), d = c?.strikeDouble, f = c?.underlineStyle, p = c?.underlineColor, m = c?.shadow, h = c?.outline, _ = c?.highlight, y = c?.fontFamily, b = c?.hyperlink, x = (e) => !e.math && !e.isTab && e.font === n && e.color === i && e.underline === a && (e.underlineStyle ?? "") === (f ?? "") && (e.underlineColor ?? "") === (p ?? "") && e.strikethrough === o && (e.strikeDouble ?? !1) === (d ?? !1) && (e.letterSpacingPx ?? 0) === l && e.baseline === s && e.shadow === m && e.outline === h && (e.highlight ?? "") === (_ ?? "") && (e.fontFamily ?? "") === (y ?? "") && Fn(e.hyperlink) === Fn(b);
		v += u, E.push({
			isTab: !1,
			width: u
		});
		let S = g.segments.at(-1);
		S && x(S) ? S.text += t : g.segments.push({
			text: t,
			font: n,
			fontFamily: y,
			sizePx: r,
			color: i,
			underline: a,
			underlineStyle: f,
			underlineColor: p,
			strikethrough: o,
			strikeDouble: d,
			letterSpacingPx: l || void 0,
			baseline: s,
			shadow: m,
			outline: h,
			highlight: _,
			hyperlink: b
		});
	}, F = () => {
		let e = g.segments.at(-1);
		if (!e || e.math) return !1;
		let t = /^(.*\s)(\S+)$/s.exec(e.text), n;
		if (t) e.text = t[1], n = t[2];
		else if (g.segments.length > 1) g.segments.pop(), n = e.text;
		else return !1;
		return N(), P(n, e.font, e.sizePx, e.color, e.underline, e.strikethrough, e.baseline, {
			strikeDouble: e.strikeDouble,
			letterSpacingPx: e.letterSpacingPx,
			underlineStyle: e.underlineStyle,
			underlineColor: e.underlineColor,
			shadow: e.shadow,
			outline: e.outline,
			highlight: e.highlight,
			fontFamily: e.fontFamily
		}), !0;
	};
	for (let n of t.runs) {
		if (n.type === "break") {
			N(!0);
			continue;
		}
		if (n.type === "math") {
			let e = bn.get(n.nodes), t = n.fontSize == null ? r : n.fontSize * K * o * u, i = e ? e.widthEm * t : 0, s = e ? e.ascentEm * t : 0, c = e ? e.descentEm * t : 0;
			(n.display && v > 0 || !j(i) && v > 0) && N(), E.push({
				isTab: !1,
				width: i
			}), g.segments.push({
				text: "",
				font: `${t}px sans-serif`,
				sizePx: t,
				color: n.color ? Y(n.color) : a,
				underline: !1,
				strikethrough: !1,
				math: {
					nodes: n.nodes,
					display: n.display,
					width: i,
					ascent: s,
					descent: c
				}
			}), v += i, n.display && N();
			continue;
		}
		let s = n.fontSize == null ? r : n.fontSize * K * o * u, p = Dn(n.fontFamily ?? t.defFontFamily ?? null, f), m = n.fontFamilyEa ? Dn(n.fontFamilyEa, f) : null, x = n.fontFamilySym ? Dn(n.fontFamilySym, f) : null, S;
		S = n.color ? Y(n.color) : n.hyperlink && f.themeHlinkColor ? Y(f.themeHlinkColor) : a;
		let C = n.bold ?? t.defBold ?? c, w = n.italic ?? t.defItalic ?? l, k = X(C, w, s, p, f), A = m ? X(C, w, s, m, f) : k;
		e.font = k;
		let I = n.caps, R = n.text;
		(I === "all" || I === "small") && (R = R.toUpperCase());
		let B = n.fieldType === "slidenum" && d !== void 0 ? String(d) : R, V = n.underline || n.hyperlink !== void 0, H = n.strikeDouble === !0, U = n.letterSpacing == null ? 0 : n.letterSpacing * K * o, W = {
			strikeDouble: H,
			letterSpacingPx: U,
			underlineStyle: n.underlineStyle,
			underlineColor: n.underlineColor ? Y(n.underlineColor) : void 0,
			shadow: n.shadow,
			outline: n.outline,
			fontFamily: p,
			highlight: n.highlight ? Y(n.highlight) : void 0,
			hyperlink: Jt(n.hyperlink)
		}, ee = B.split(/(\s+)/);
		for (let r of ee) {
			if (!r) continue;
			if (/^\t+$/.test(r)) {
				T || (e.font = k, D = e.measureText(" ").width);
				for (let e of r) g.segments.push({
					text: "",
					isTab: !0,
					font: k,
					fontFamily: p,
					sizePx: s,
					color: S,
					underline: !1,
					strikethrough: !1
				}), E.push({
					isTab: !0,
					width: 0
				});
				T = !0;
				continue;
			}
			e.font = k;
			let a = e.measureText(r).width, o = /^\s+$/.test(r), c = /[-]/;
			if (c.test(r) && (x != null || ge(p))) {
				let t = x ?? p;
				for (let i of r) {
					let r = i, a = k;
					if (c.test(i)) {
						let e = ve(i, t);
						e === i ? a = X(C, w, s, t, f) : (r = e, a = X(C, w, s, "sans-serif", f));
					}
					e.font = a;
					let o = e.measureText(r).width;
					!j(o) && v > 0 && N(), P(r, a, s, S, V, n.strikethrough, n.baseline ?? void 0, W);
				}
				continue;
			}
			if (zn(r) && (!z(r) || t.eaLnBrk === !1)) {
				let i = [];
				for (let t of r) {
					let n = fe(t.codePointAt(0) ?? 0) && m != null, r = n ? A : k, a = n ? m : p;
					e.font = r, i.push({
						ch: t,
						w: e.measureText(t).width,
						font: r,
						family: a
					});
				}
				if (t.eaLnBrk === !1) {
					let e = i.reduce((e, t) => e + t.w, 0);
					v > 0 && !j(e) && N();
					for (let e of i) P(e.ch, e.font, s, S, V, n.strikethrough, n.baseline ?? void 0, {
						...W,
						fontFamily: e.family
					});
					continue;
				}
				let a = i;
				for (; a.length > 0;) {
					let e = Number.isFinite(h()) ? h() - M() : v, t = en(a, e, h(), _);
					if (t === 0) {
						if (v > 0) {
							N();
							continue;
						}
						t = 1;
					}
					for (let e = 0; e < t; e++) {
						let t = a[e];
						P(t.ch, t.font, s, S, V, n.strikethrough, n.baseline ?? void 0, {
							...W,
							fontFamily: t.family
						});
					}
					a = a.slice(t), a.length > 0 && N();
				}
				continue;
			}
			if (z(r)) {
				let t = b(r, {
					cjk: !0,
					kinsoku: _
				}), i = m != null && A !== k, a = (e) => i && fe(e.codePointAt(0) ?? 0), o = (t) => {
					let n = U * Z(t), r = "", i = null, o = () => {
						r !== "" && (e.font = i ? A : k, n += e.measureText(r).width, r = "");
					};
					for (let e of t) {
						let t = a(e);
						i === null || t === i ? (r += e, i = t) : (o(), r = e, i = t);
					}
					return o(), n;
				}, c = (e) => {
					let t = "", r = null, i = () => {
						if (t === "") return;
						let e = r ? A : k, i = r ? m : p;
						P(t, e, s, S, V, n.strikethrough, n.baseline ?? void 0, {
							...W,
							fontFamily: i
						}), t = "";
					};
					for (let n of e) {
						let e = a(n);
						r === null || e === r ? (t += n, r = e) : (i(), t = n, r = e);
					}
					i();
				}, l = me(r), u = r.length, d = 0;
				for (; d < u;) {
					let e = M(), n = L(r, t, d, e, o, l);
					if (n <= d) {
						if (v > 0) {
							N();
							continue;
						}
						let i = t.find((e) => e > d) ?? u, a = r.slice(d, i), s = O(a), c = L(a, s, 0, e, o, l);
						c <= 0 && (c = s.length > 0 ? s[0] : a.length), n = d + c;
					}
					c(r.slice(d, n)), d = n, d < u && N();
				}
				continue;
			}
			if (j(a)) P(r, k, s, S, V, n.strikethrough, n.baseline ?? void 0, W), o && (y = !0);
			else if (o) v > 0 && N();
			else if (a > h()) {
				v > 0 && N();
				for (let t of r) {
					e.font = k;
					let r = e.measureText(t).width;
					!j(r) && v > 0 && N(), P(t, k, s, S, V, n.strikethrough, n.baseline ?? void 0, W);
				}
			} else if (!y) P(r, k, s, S, V, n.strikethrough, n.baseline ?? void 0, W);
			else {
				let e = g.segments.at(-1)?.text ?? "", t = r.codePointAt(0), a = [...e].at(-1)?.codePointAt(0), o = /\S$/u.test(e) && /^\S/u.test(r) && a !== 8203 && t !== 8203, c = t !== void 0 && _.lineStartForbidden.has(t) && o, l = a !== void 0 && t !== void 0 && o && !z(e) && !z(r) && i(a, t);
				(c || l) && F() || N(), P(r, k, s, S, V, n.strikethrough, n.baseline ?? void 0, W);
			}
		}
	}
	return m.push(g), m;
}
async function Vn(e, t, n, r, i, a, o) {
	if (t && t.fillType === "image") {
		if (e.fillStyle = "#FFFFFF", e.fillRect(0, 0, n, r), !t.imagePath || !t.mimeType || !o) return;
		try {
			let s = await we(t.imagePath, t.mimeType, t.duotone, o, {
				widthPt: n / i / K,
				heightPt: r / i / K
			});
			if (a() || !s) return;
			if (e.save(), e.beginPath(), e.rect(0, 0, n, r), e.clip(), t.alpha != null && (e.globalAlpha = t.alpha), t.tile) Wn(e, s, t.tile, n, r, i);
			else {
				let i = t.fillRect ?? {}, a = i.l ?? 0, o = i.t ?? 0, c = i.r ?? 0, l = i.b ?? 0, u = a * n, d = o * r, f = n * (1 - a - c), p = r * (1 - o - l);
				e.drawImage(s, u, d, f, p);
			}
			e.restore();
		} catch (e) {
			if (p(e)) throw e;
		}
		return;
	}
	e.fillStyle = yn(t, e, 0, 0, n, r) ?? "#FFFFFF", e.fillRect(0, 0, n, r);
}
var Hn = 9525;
function Un(e, t, n, r, i) {
	let a;
	a = e === "t" || e === "ctr" || e === "b" ? (t - r) / 2 : e === "tr" || e === "r" || e === "br" ? t - r : 0;
	let o;
	return o = e === "l" || e === "ctr" || e === "r" ? (n - i) / 2 : e === "bl" || e === "b" || e === "br" ? n - i : 0, {
		ax: a,
		ay: o
	};
}
function Wn(t, n, r, i, a, o) {
	let s = n.width * Hn * r.sx * o, c = n.height * Hn * r.sy * o;
	if (!(s > 0) || !(c > 0)) return;
	let l = r.flip === "x" || r.flip === "xy", u = r.flip === "y" || r.flip === "xy", d = e(s * (l ? 2 : 1), c * (u ? 2 : 1));
	if (!d) return;
	let f = d.getContext("2d");
	if (!f) return;
	let p = (e, t, r, i) => {
		f.save(), f.translate(e + (r ? s : 0), t + (i ? c : 0)), f.scale(r ? -1 : 1, i ? -1 : 1), f.drawImage(n, 0, 0, s, c), f.restore();
	};
	p(0, 0, !1, !1), l && p(s, 0, !0, !1), u && p(0, c, !1, !0), l && u && p(s, c, !0, !0);
	let m = t.createPattern(d, "repeat");
	if (!m) return;
	let { ax: h, ay: g } = Un(r.algn ?? "tl", i, a, s, c), _ = h + J(r.tx, o), v = g + J(r.ty, o);
	typeof m.setTransform == "function" && typeof DOMMatrix < "u" ? (m.setTransform(new DOMMatrix().translateSelf(_, v)), t.fillStyle = m, t.fillRect(0, 0, i, a)) : (t.save(), t.translate(_, v), t.fillStyle = m, t.fillRect(-_, -v, i, a), t.restore());
}
function Gn(e, t, n) {
	if (!t) return;
	let r = t.dir * Math.PI / 180, i = J(t.dist, n);
	e.shadowColor = Y(t.color, t.alpha), e.shadowBlur = J(t.blur, n), e.shadowOffsetX = Math.cos(r) * i, e.shadowOffsetY = Math.sin(r) * i;
}
function Kn(e, t, n) {
	t && (e.shadowColor = Y(t.color, t.alpha), e.shadowBlur = J(t.radius, n), e.shadowOffsetX = 0, e.shadowOffsetY = 0);
}
function qn(e) {
	e.shadowColor = "transparent", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
}
var Jn = 8, Yn = 1, Xn = 1, Zn = 256;
function Qn(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
	if (i <= 0) return;
	let g = t.measureText(n), _ = g.actualBoundingBoxAscent > 0 ? g.actualBoundingBoxAscent : i, v = g.actualBoundingBoxDescent > 0 ? g.actualBoundingBoxDescent : i * .25, y = g.actualBoundingBoxLeft > 0 ? g.actualBoundingBoxLeft : 0, b = g.actualBoundingBoxRight > 0 ? g.actualBoundingBoxRight : i, x = i * u * a, S = Math.min(Zn, Math.max(1, Math.round(x / Jn))), C = (e) => tr(e, o, i, s, c, l, d, f), w = C(S), T = rr(w, o, s, c, l, d, f, u, a, -_, v);
	for (; T > Xn && S < Zn;) {
		let e = Math.min(Zn, S * 2), t = C(e), n = rr(t, o, s, c, l, d, f, u, a, -_, v);
		if (n >= T * .75) {
			w = t;
			break;
		}
		S = e, w = t, T = n;
	}
	let E = 1e4, D = Yn / (u * a), O = w.length - 1, k = (e, t, n) => e === 0 ? -E : t - n - D, A = (e, t, n) => e === O ? E : t - n + D, j = (e, t) => {
		e.fillStyle = t;
		for (let t = 0; t <= O; t++) {
			let { s0: i, s1: a, g: o } = w[t], s = (i + a) / 2;
			e.save(), e.translate(p + o.x, m + o.y), e.rotate(o.angle), o.shear !== 0 && e.transform(1, 0, o.shear, 1, 0, 0), (u !== 1 || o.vScale !== 1) && e.scale(u, o.vScale), e.beginPath();
			let c = k(t, i, s), l = A(t, a, s);
			e.rect(c, -E, l - c, 2 * E), e.clip(), e.fillText(n, -s + r / 2, 0), e.restore();
		}
	}, M = $n(h), N = typeof t.globalAlpha == "number" ? t.globalAlpha : 1;
	if (M >= 1 && N >= 1) {
		j(t, h);
		return;
	}
	if (M <= 0 || N <= 0) return;
	let P = typeof t.getTransform == "function" ? t.getTransform() : null;
	if (!P) {
		j(t, h);
		return;
	}
	let F = Infinity, I = Infinity, L = -Infinity, R = -Infinity;
	for (let e = 0; e <= O; e++) {
		let { s0: t, s1: n, g: i } = w[e], a = (t + n) / 2, o = -a + r / 2, s = Math.max(k(e, t, a), o - y), c = Math.min(A(e, n, a), o + b);
		if (!(c <= s)) for (let [e, t] of [
			[s, -_],
			[c, -_],
			[s, v],
			[c, v]
		]) {
			let n = nr(i, u, e, t), r = p + n.x, a = m + n.y, o = P.a * r + P.c * a + P.e, s = P.b * r + P.d * a + P.f;
			o < F && (F = o), o > L && (L = o), s < I && (I = s), s > R && (R = s);
		}
	}
	if (!(L > F && R > I)) return;
	let z = Math.floor(F - 2), B = Math.floor(I - 2), V = e(Math.ceil(L + 2) - z, Math.ceil(R + 2) - B), H = V ? V.getContext("2d") : null;
	if (!V || !H) {
		j(t, h);
		return;
	}
	H.font = t.font, H.textAlign = "left", H.textBaseline = "alphabetic", H.setTransform(P.a, P.b, P.c, P.d, P.e - z, P.f - B), j(H, er(h)), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = N * M, t.drawImage(V, z, B), t.restore();
}
function $n(e) {
	let t = /^rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*([\d.]+)\s*\)$/i.exec(e);
	if (!t) return 1;
	let n = parseFloat(t[1]);
	return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 1;
}
function er(e) {
	let t = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(e);
	return t ? `rgb(${t[1]}, ${t[2]}, ${t[3]})` : e;
}
function tr(e, t, n, r, i, a, o, s) {
	let c = Array(e);
	for (let l = 0; l < e; l++) {
		let u = l / e * n, d = (l + 1) / e * n;
		c[l] = {
			s0: u,
			s1: d,
			g: Be(t, (r + (u + d) / 2) / i * a, o, s)
		};
	}
	return c;
}
function nr(e, t, n, r) {
	let i = n * t, a = r * e.vScale, o = i + e.shear * a, s = Math.cos(e.angle), c = Math.sin(e.angle);
	return {
		x: e.x + s * o - c * a,
		y: e.y + c * o + s * a
	};
}
function rr(e, t, n, r, i, a, o, s, c, l, u) {
	let d = 0;
	for (let f of e) {
		let e = (f.s0 + f.s1) / 2;
		for (let p of [f.s0, f.s1]) {
			let m = Be(t, (n + p) / r * i, a, o);
			for (let t of [l, u]) {
				let n = nr(m, s, 0, t), r = nr(f.g, s, p - e, t), i = Math.hypot(r.x - n.x, r.y - n.y) * c;
				i > d && (d = i);
			}
		}
	}
	return d;
}
function ir(e, t, n, r, i, a, o, s, c, l, u) {
	let d = i, f = a, p = Math.max(1, o), m = Math.max(1, s), h = Ie(n, r, p, m);
	if (!h) return;
	let g = t.defaultBold ?? !1, _ = t.defaultItalic ?? !1, v = (t.defaultFontSize ?? 18) * K * c, y = [];
	for (let n of t.paragraphs) {
		let t = Bn(e, n, Infinity, n.defFontSize == null ? v : n.defFontSize * K * c, n.defColor ? Y(n.defColor) : l, c, 0, g, _, 1, void 0, u, 0);
		for (let e of t) y.push(e);
	}
	if (y.length === 0) return;
	e.save(), e.textAlign = "left", e.textBaseline = "alphabetic";
	let b = -1, x = () => {
		if (b >= 0) return b;
		let t = typeof e.getTransform == "function" ? e.getTransform() : null, n = t ? Math.abs(t.a * t.d - t.b * t.c) : 1;
		return b = n > 0 ? Math.sqrt(n) : 1, b;
	}, S = y.length;
	for (let t = 0; t < S; t++) {
		let n = y[t], r = t / S, i = (t + 1) / S, a = 0, o = 0, s = 0, c = 0;
		for (let t of n.segments) {
			if (t.math) {
				a += t.math.width, o = Math.max(o, t.sizePx), s = Math.max(s, t.math.ascent), c = Math.max(c, t.math.descent);
				continue;
			}
			e.font = t.font;
			let n = t.letterSpacingPx ?? 0, r = e.measureText(t.text);
			a += r.width + n * Z(t.text), o = Math.max(o, t.sizePx), r.actualBoundingBoxAscent > 0 && (s = Math.max(s, r.actualBoundingBoxAscent)), r.actualBoundingBoxDescent > 0 && (c = Math.max(c, r.actualBoundingBoxDescent));
		}
		if (a <= 0) continue;
		let l = s + c > 0 ? s + c : o, u = h.singleEdge ? .8 : l > 0 ? s / l : .8, g = h.singleEdge ? 1 : p / a, _ = h.singleEdge ? m : l / (i - r), v = ze(h, a), b = 0;
		for (let t of n.segments) {
			if (t.math) {
				b += t.math.width;
				continue;
			}
			e.font = t.font, e.fillStyle = t.color;
			let n = t.letterSpacingPx ?? 0, o = [...t.text];
			for (let s of o) {
				let o = e.measureText(s).width + n, c = r + u * (i - r);
				if (!h.singleEdge && o > 0) {
					Qn(e, s, n, o, x(), h, b, a, v, g, _, c, d, f, t.color), b += o;
					continue;
				}
				let l = Be(h, (b + o / 2) / a * v, _, c);
				e.save(), e.translate(d + l.x, f + l.y), e.rotate(l.angle), l.shear !== 0 && e.transform(1, 0, l.shear, 1, 0, 0), (g !== 1 || l.vScale !== 1) && e.scale(g, l.vScale), e.fillText(s, -o / 2 + n / 2, 0), e.restore(), b += o;
			}
		}
	}
	e.restore();
}
function ar(e, t, n, r, i, a, o) {
	let s = Math.min(r, i);
	switch (e) {
		case "rightarrow":
		case "leftarrow": {
			let c = Math.min(Math.max(a ?? 5e4, 0), 1e5), l = s * Math.min(Math.max(o ?? 5e4, 0), 1e5) / 1e5, u = i * c / 2e5, d = n + i / 2 - u, f = 2 * u, p = Math.max(0, r - l);
			return e === "rightarrow" ? {
				tx: t,
				ty: d,
				tw: p,
				th: f
			} : {
				tx: t + l,
				ty: d,
				tw: p,
				th: f
			};
		}
		case "roundrect": {
			let e = s * Math.min(Math.max(a ?? 16667, 0), 1e5) / 1e5 * (1 - 1 / Math.SQRT2);
			return {
				tx: t + e,
				ty: n + e,
				tw: Math.max(0, r - 2 * e),
				th: Math.max(0, i - 2 * e)
			};
		}
		default: return null;
	}
}
function or(e, t) {
	return e.defaultTextColor ? Y(e.defaultTextColor) : t.smartArtFallbackTextColor != null && ln(e) ? t.smartArtFallbackTextColor : null;
}
function sr(e, t, n) {
	return {
		outerRotation: e,
		localFlipH: t,
		localFlipV: n
	};
}
function cr(e, t, n, i = "#000000", a, o = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, s, c) {
	let u = J(t.x, n), d = J(t.y, n), f = J(t.width, n), p = J(t.height, n), m = s && t.id !== void 0 ? (e) => s({
		...e,
		shapeId: t.id
	}) : s;
	if (p === 0 && t.textBody?.verticalAnchor === "b") {
		if (t.stroke && (e.save(), Q(e, t.stroke, n), e.beginPath(), e.moveTo(u, d), e.lineTo(u + f, d), e.stroke(), e.restore()), t.textBody) {
			let r = or(t, o);
			mr(e, t.textBody, u, d, f, p, n, r, t.rotation, t.flipH, t.flipV, i, a, o, m, !1, c);
		}
		return;
	}
	let h = t.scene3d && it(t.scene3d.camera) ? t.scene3d : null;
	if (h && f > 0 && p > 0) {
		let r = e.getTransform(), s = Math.abs(r.a * r.d - r.b * r.c), c = s > 0 ? Math.sqrt(s) : 1, l = hr(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, n, c), m = gr(t.sp3d, h.camera, f, p, n, c), g = sr(t.rotation, t.flipH, t.flipV);
		e.save(), g.outerRotation !== 0 && (e.translate(u + f / 2, d + p / 2), e.rotate(g.outerRotation * Math.PI / 180), e.translate(-(u + f / 2), -(d + p / 2)));
		let _ = {
			...t,
			x: 0,
			y: 0,
			rotation: 0,
			flipH: g.localFlipH,
			flipV: g.localFlipV,
			scene3d: void 0
		};
		if (_r(e, h.camera, u, d, f, p, (e) => {
			cr(e, _, n, i, a, o, void 0);
		}, {
			bevels: l,
			extrusion: m ?? void 0,
			edgePadCss: (t.stroke ? t.stroke.width * n / 2 : 0) + (t.sp3d?.contourW ? t.sp3d.contourW * n : 0) + (m ? Math.hypot(m.offsetX, m.offsetY) / c : 0) + 2
		})) {
			e.restore();
			return;
		}
		e.restore();
	}
	e.save(), (t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(u + f / 2, d + p / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(u + f / 2), -(d + p / 2)));
	let g = t.geometry.toLowerCase(), _ = yn(t.fill, e, u, d, f, p);
	Gn(e, t.shadow ?? null, n), t.shadow || Kn(e, t.glow ?? null, n);
	let v = new Set([
		"line",
		"straightconnector1",
		"bentconnector2",
		"bentconnector3",
		"bentconnector4",
		"bentconnector5",
		"curvedconnector2",
		"curvedconnector3",
		"curvedconnector4",
		"curvedconnector5"
	]), y = new Set([
		"callout1",
		"callout2",
		"callout3",
		"bordercallout1",
		"bordercallout2",
		"bordercallout3",
		"accentcallout1",
		"accentcallout2",
		"accentcallout3",
		"accentbordercallout1",
		"accentbordercallout2",
		"accentbordercallout3"
	]), b = (e) => y.has(e) || e === "line" || e === "straightconnector1" || e.startsWith("bentconnector"), x = !t.custGeom && w(g), S = (e, r) => {
		let i = r ?? _, a = r ? null : t.stroke ? () => {
			Q(e, t.stroke, n), e.stroke();
		} : null, o = () => qn(e);
		if (x && !r) {
			l(e, g, u, d, f, p, [
				t.adj,
				t.adj2,
				t.adj3,
				t.adj4,
				t.adj5,
				t.adj6,
				t.adj7,
				t.adj8
			], i, a, o, b(g) ? { skipTrailingStroke: !0 } : void 0);
			return;
		}
		e.beginPath(), t.custGeom && t.custGeom.length > 0 ? lr(e, t.custGeom, u, d, f, p) : he(e, g, u, d, f, p, t.adj, t.adj2, t.adj3, t.adj4), i && g !== "arc" && (e.fillStyle = i, g === "donut" || g === "smileyface" || g === "frame" ? e.fill("evenodd") : e.fill(), r || o()), a && a();
	}, C = e.canvas.width || 0, T = e.canvas.height || 0, E = e.getTransform(), D = Math.abs(E.a * E.d - E.b * E.c), O = D > 0 ? Math.sqrt(D) : 1, k = {
		x: u * O,
		y: d * O,
		w: f * O,
		h: p * O
	}, A = n * O, j = (e) => {
		e.setTransform(E);
	};
	if (t.reflection && C > 0 && T > 0 && (e.save(), e.setTransform(new DOMMatrix()), qe(e, (e) => {
		j(e), S(e);
	}, k, t.reflection, A, C, T), e.restore()), t.softEdge && C > 0 && T > 0 ? (e.save(), e.setTransform(new DOMMatrix()), Ke(e, (e) => {
		j(e), S(e);
	}, k, t.softEdge, A, C, T, (e) => {
		j(e), S(e, "#000");
	}), e.restore()) : S(e), t.innerShadow && C > 0 && T > 0 && (e.save(), e.setTransform(new DOMMatrix()), Ge(e, (e) => {
		j(e), S(e, "#000");
	}, k, t.innerShadow, A, C, T), e.restore()), t.stroke && (v.has(g) || y.has(g))) {
		let i = r(g, u, d, f, p, [
			t.adj,
			t.adj2,
			t.adj3,
			t.adj4,
			t.adj5,
			t.adj6,
			t.adj7,
			t.adj8
		]);
		if (i) {
			let r = t.stroke.cmpd, a = g === "line" || g === "straightconnector1";
			if (b(g) && i.vertices.length >= 2 && !(r && a)) {
				let r = i.vertices.map((e) => ({
					x: e.x,
					y: e.y
				}));
				if (t.stroke.tailEnd) {
					let e = xe(t.stroke.tailEnd, t.stroke, n);
					r[r.length - 1] = _e(r[r.length - 1], r[r.length - 2], e);
				}
				if (t.stroke.headEnd) {
					let e = xe(t.stroke.headEnd, t.stroke, n);
					r[0] = _e(r[0], r[1], e);
				}
				Q(e, t.stroke, n), e.beginPath(), e.moveTo(r[0].x, r[0].y);
				for (let t = 1; t < r.length; t++) e.lineTo(r[t].x, r[t].y);
				e.stroke();
			}
			r && a && wr(e, i.start, i.end, t.stroke, r, n), t.stroke.tailEnd && ye(e, i.end.x, i.end.y, i.end.angle, t.stroke.tailEnd, t.stroke, n), t.stroke.headEnd && ye(e, i.start.x, i.start.y, i.start.angle, t.stroke.headEnd, t.stroke, n);
		}
	} else if (t.stroke && t.custGeom && t.custGeom.length > 0 && (t.stroke.headEnd && t.stroke.headEnd.type !== "none" || t.stroke.tailEnd && t.stroke.tailEnd.type !== "none")) {
		let { start: r, end: i } = be(t.custGeom);
		r && t.stroke.headEnd && t.stroke.headEnd.type !== "none" && ye(e, u + r.x * f, d + r.y * p, Math.atan2(r.dy * p, r.dx * f), t.stroke.headEnd, t.stroke, n), i && t.stroke.tailEnd && t.stroke.tailEnd.type !== "none" && ye(e, u + i.x * f, d + i.y * p, Math.atan2(i.dy * p, i.dx * f), t.stroke.tailEnd, t.stroke, n);
	}
	if (t.textBody) {
		let r = or(t, o);
		if (e.save(), t.flipH || t.flipV) {
			let n = u + f / 2, r = d + p / 2;
			e.translate(n, r), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-n, -r);
		}
		let s = u, l = d, h = f, _ = p;
		if (t.textRect) s = J(t.textRect.x, n), l = J(t.textRect.y, n), h = J(t.textRect.width, n), _ = J(t.textRect.height, n);
		else if (g === "ellipse") {
			let e = f * (1 - 1 / Math.SQRT2) / 2, t = p * (1 - 1 / Math.SQRT2) / 2;
			s = u + e, l = d + t, h = f / Math.SQRT2, _ = p / Math.SQRT2;
		} else {
			let e = ar(g, u, d, f, p, t.adj, t.adj2);
			e && (s = e.tx, l = e.ty, h = e.tw, _ = e.th);
		}
		mr(e, t.textBody, s, l, h, _, n, r, t.rotation, !1, !1, i, a, o, m, !1, c), e.restore();
	}
	e.restore();
}
var lr = Se;
function ur(e, t) {
	let n = `${e}`, r = e >= 1 && e <= 26 ? String.fromCharCode(96 + e) : n, i = e >= 1 && e <= 26 ? String.fromCharCode(64 + e) : n, a = dr(e).toLowerCase(), o = dr(e), s = n.replace(/[0-9]/g, (e) => String.fromCharCode(65296 + (e.charCodeAt(0) - 48)));
	switch (t) {
		case "arabicPlain": return n;
		case "arabicPeriod": return `${n}.`;
		case "arabicParenR": return `${n})`;
		case "arabicParenBoth": return `(${n})`;
		case "arabicDbPlain": return s;
		case "arabicDbPeriod": return `${s}.`;
		case "alphaLcPlain": return r;
		case "alphaLcPeriod": return `${r}.`;
		case "alphaLcParenR": return `${r})`;
		case "alphaLcParenBoth": return `(${r})`;
		case "alphaUcPlain": return i;
		case "alphaUcPeriod": return `${i}.`;
		case "alphaUcParenR": return `${i})`;
		case "alphaUcParenBoth": return `(${i})`;
		case "romanLcPlain": return a;
		case "romanLcPeriod": return `${a}.`;
		case "romanLcParenR": return `${a})`;
		case "romanLcParenBoth": return `(${a})`;
		case "romanUcPlain": return o;
		case "romanUcPeriod": return `${o}.`;
		case "romanUcParenR": return `${o})`;
		case "romanUcParenBoth": return `(${o})`;
		default: return `${n}.`;
	}
}
function dr(e) {
	let t = [
		1e3,
		900,
		500,
		400,
		100,
		90,
		50,
		40,
		10,
		9,
		5,
		4,
		1
	], n = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I"
	], r = "";
	for (let i = 0; i < t.length; i++) for (; e >= t[i];) r += n[i], e -= t[i];
	return r;
}
function fr(e) {
	for (let t of e.runs) if (t.type === "text" && t.text !== "" || t.type === "math") return !0;
	return !1;
}
function pr(e, t) {
	let n = fr(e);
	if (e.bullet.type === "char") return t.clear(), n ? ve(e.bullet.char, e.bullet.fontFamily ?? null) : "";
	if (e.bullet.type === "autoNum") {
		if (!n) return "";
		let r = e.lvl;
		return t.has(r) ? t.set(r, t.get(r) + 1) : t.set(r, e.bullet.startAt ?? 1), ur(t.get(r), e.bullet.numType);
	}
	return t.clear(), "";
}
function mr(e, t, n, r, i, a, o, s = null, c = 0, l = !1, u = !1, d = "#000000", f, p = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, m, h = !1, _, v = !1) {
	let y = t.vert === "vert" || t.vert === "eaVert", b = t.vert === "vert270";
	if (y || b) {
		let l = n + i / 2, u = r + a / 2, g = y ? 90 : -90, v = m ? (e) => m({
			...e,
			inShapeX: e.inShapeX - a / 2 + i / 2,
			inShapeY: e.inShapeY - i / 2 + a / 2,
			shapeX: n,
			shapeY: r,
			shapeW: i,
			shapeH: a,
			rotation: c,
			textBodyRotation: g
		}) : void 0;
		if (h) return i;
		e.save(), e.translate(l, u), e.rotate(b ? -Math.PI / 2 : Math.PI / 2), mr(e, {
			...t,
			vert: "horz"
		}, -a / 2, -i / 2, a, i, o, s, 0, !1, !1, d, f, p, v, !1, _, t.vert === "eaVert"), e.restore();
		return;
	}
	let x = t.textWarp;
	if (!h && x && je(x.preset)) {
		ir(e, t, x.preset, x.adj ?? [], n, r, i, a, o, s ?? d, p);
		return;
	}
	let S = J(t.lIns, o), C = J(t.rIns, o), w = J(t.tIns, o), T = J(t.bIns, o), E = t.wrap !== "none", D = t.autoFit === "sp" ? E && Rn(e, t, i, S, C, o, p) : E, O = Math.max(1, t.numCol ?? 1), k = J(t.spcCol ?? 0, o), A = t.defaultBold ?? !1, j = t.defaultItalic ?? !1, M = s ?? d, N = (r) => {
		let a = (t.defaultFontSize ?? 18) * K * o * r, s = [], c = 0, l = /* @__PURE__ */ new Map();
		for (let u = 0; u < t.paragraphs.length; u++) {
			let d = t.paragraphs[u], m = J(d.marL, o), h = J(d.marR, o), g = J(d.indent, o), _ = d.defFontSize == null ? a : d.defFontSize * K * o * r, v = d.defColor ? Y(d.defColor) : M, y = In(d), b = (() => {
				for (let e of d.runs) if (e.type === "text" && e.fontSize != null) return e.fontSize;
				return null;
			})(), x = b == null ? _ : b * K * o * r, w = (() => {
				for (let e of d.runs) if (e.type === "text" && e.color) return e.color;
				return null;
			})(), T = w ? Y(w) : v, E = "", N = X(!1, !1, x, "sans-serif", p), P = T, F = null;
			E = pr(d, l);
			let I = Ee(d.bullet);
			if (I.type === "char") {
				let e = I;
				N = X(!1, !1, e.sizePts == null ? e.sizePct == null ? x : x * (e.sizePct / 100) : e.sizePts * K * o * r, E === e.char ? Dn(e.fontFamily ?? null, p) : "sans-serif", p), P = e.color ? Y(e.color) : T;
			} else if (I.type === "autoNum") N = X(!1, !1, x, "sans-serif", p), P = I.color ? Y(I.color) : T;
			else if (I.type === "blip") {
				let e = I, t = e.sizePts == null ? e.sizePct == null ? x : x * (e.sizePct / 100) : e.sizePts * K * o * r;
				F = {
					imagePath: e.imagePath,
					mimeType: e.mimeType,
					sizePx: t
				};
			}
			let L = O > 1 ? (i - S - C - (O - 1) * k) / O : i - S - C, R = n + S + m, z = n + S + m + g, B = L - m - h, V = Bn(e, d, D ? B : Infinity, _, v, o, m, A, j, r, f, p, Ln(y, g)), H = d.spaceBefore == null ? 0 : d.spaceBefore / 100 * K * o * r, U = d.spaceAfter == null ? 0 : d.spaceAfter / 100 * K * o * r;
			for (let n = 0; n < V.length; n++) {
				let r = V[n], i = n === 0, a = n === V.length - 1, l = 0, f = 0;
				for (let e of r.segments) {
					let t = e.math ? Math.max(e.sizePx, (e.math.ascent + e.math.descent) / 1.2) : e.sizePx;
					if (t > l && (l = t), !e.math) {
						let t = te(e.fontFamily, e.sizePx);
						t > f && (f = t);
					}
				}
				if (l === 0 && (l = _), i && E) {
					e.font = N;
					let t = e.measureText("M"), n = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
					n > l && (l = n);
				}
				i && F && F.sizePx > l && (l = F.sizePx);
				let p = l * 1.2, m = Math.max(p, f), h;
				h = d.spaceLine ? d.spaceLine.type === "pct" ? p * (d.spaceLine.val / 1e5) : d.spaceLine.val * K * o : m, t.autoFit === "norm" && t.lnSpcReduction != null && d.spaceLine?.type !== "pts" && (h *= 1 - t.lnSpcReduction);
				let v = h + (a ? U : 0), b = i && u > 0 ? H : 0, x = i ? Ln(y, g) : 0, S = r.segments.some((e) => e.text && e.text.length > 0 || e.math != null), C = i && S ? F : null;
				s.push({
					line: r,
					linePx: v,
					lineHeight: h,
					topGapPx: b,
					textXOffset: x,
					bulletLabel: i ? E : "",
					bulletFont: N,
					bulletColor: P,
					bulletX: z,
					bulletImage: C,
					textX: R,
					textMaxW: B,
					alignment: d.alignment,
					isLastLine: a,
					para: d
				}), c += v + b;
			}
		}
		return {
			allLines: s,
			totalHeight: c
		};
	}, { allLines: P, totalHeight: F } = N(1);
	if (t.autoFit === "norm") if (t.fontScale != null && t.fontScale > 0) t.fontScale < 1 && ({allLines: P, totalHeight: F} = N(t.fontScale));
	else {
		let e = a - w - T;
		if (F > e && e > 0) {
			let t = .1, n = 1;
			for (let r = 0; r < 6; r++) {
				let r = (t + n) / 2;
				N(r).totalHeight <= e ? t = r : n = r;
			}
			({allLines: P, totalHeight: F} = N(t));
		}
	}
	if (h) return w + F + T;
	let I = t.verticalAnchor ?? "t", L = r, R;
	a === 0 && I === "b" ? (R = w + F + T, L = r - R) : R = t.autoFit === "sp" ? Math.max(a, w + F + T) : a;
	let z, B = Math.max(0, R - w - T);
	z = I === "ctr" ? L + w + (B - F) / 2 : I === "b" ? L + R - T - F : L + w, e.save(), e.textAlign = "left", e.textBaseline = "alphabetic";
	let V = z, H = O > 1 ? (i - S - C - (O - 1) * k) / O + k : 0, U = Math.max(0, R - w - T), W = P[P.length - 1], ee = W ? Math.max(0, W.linePx - W.lineHeight) : 0, ne = F - ee, re = a === 0 || ne <= U + .5, ie = O > 1 && !re ? Math.ceil(P.length / O) : P.length, ae = 0, oe = 0;
	for (let s of P) {
		let { line: l, linePx: u, lineHeight: d, topGapPx: f, textXOffset: h, bulletLabel: y, bulletFont: b, bulletColor: x, bulletImage: S, alignment: C, isLastLine: w } = s;
		O > 1 && ae < O - 1 && oe >= ie && (ae++, oe = 0, z = V), z += f, oe++;
		let T = (t.rtlCol ? O - 1 - ae : ae) * H, E = s.textX + T, D = s.bulletX + T, k = s.textMaxW, A = s.para.rtl === !0, j = A || Qt(l.segments), M = l.segments.some((e) => e.isTab);
		if (M) {
			let t = J(s.para.marL, o), n = J(s.para.marR, o), r = A ? n : t + h, i = k + t + n;
			e.font = l.segments.find((e) => e.isTab).font;
			let a = e.measureText(" ").width, c = dn(l.segments.map((t) => {
				if (t.isTab) return {
					isTab: !0,
					width: 0
				};
				if (t.math) return {
					isTab: !1,
					width: t.math.width
				};
				e.font = t.font;
				let n = t.letterSpacingPx ?? 0;
				return {
					isTab: !1,
					width: t.text ? e.measureText(t.text).width + n * Z(t.text) : 0
				};
			}), (s.para.tabStops ?? []).map((e) => ({
				pos: J(e.pos, o),
				algn: e.algn
			})), r, i, a, J(s.para.defTabSz ?? 914400, o));
			for (let e = 0; e < l.segments.length; e++) l.segments[e].isTab && (l.segments[e].tabWidthPx = c[e]);
		}
		let N = 0, P = d * .8;
		for (let t of l.segments) {
			if (t.isTab) {
				N += t.tabWidthPx ?? 0;
				continue;
			}
			if (t.math) {
				N += t.math.width, P = Math.max(P, t.math.ascent);
				continue;
			}
			e.font = t.font;
			let n = e.measureText(t.text || "M"), r = t.letterSpacingPx ?? 0;
			N += t.text ? n.width + r * Z(t.text) : 0, n.actualBoundingBoxAscent > 0 && (P = Math.max(P, n.actualBoundingBoxAscent));
		}
		let F = z + P, I = E + k, L = 0, R = null;
		if (j && A) {
			if (y) e.font = b, L = e.measureText(y).width;
			else if (S && _ && (R = g(S.imagePath, _), R)) {
				let e = S.sizePx;
				L = R.height > 0 ? e * (R.width / R.height) : e;
			}
		}
		if (y) if (e.font = b, e.fillStyle = x, j && A) {
			let t = e.direction;
			e.direction = "rtl", e.fillText(y, I - L, F), e.direction = t;
		} else e.fillText(y, D, F);
		if (S && _) {
			let t = g(S.imagePath, _);
			if (t) {
				let n = S.sizePx, r = t.height > 0 ? n * (t.width / t.height) : n, i = F - n;
				j && A ? e.drawImage(t, I - r, i, r, n) : e.drawImage(t, D, i, r, n);
			}
		}
		let B = E + h, U;
		U = M ? A ? E + k - L - N : B : C === "ctr" ? B + (k - h - N) / 2 : C === "r" ? E + k - L - N : B;
		let W = C === "just" || C === "justLow" ? "just" : C === "thaiDist" ? "thaiDist" : C === "dist" ? "dist" : null, ee = w || (l.endsWithBreak ?? !1), te = (W && !j && !M ? nn(l.segments, k - h, N, W, ee) : null) ?? l.segments, ne = j ? $t(l.segments, A) : null, re = te.length;
		for (let t = 0; t < re; t++) {
			let s = ne ? ne.order[t] : t, l = te[s], u = ne ? ne.rtl[s] : !1;
			if (j && (e.direction = u ? "rtl" : "ltr"), l.isTab) {
				U += l.tabWidthPx ?? 0;
				continue;
			}
			let f = l.jext ?? 0, h = l.splitBefore, g = l.perGap ?? 0, _ = h && h.length > 0 ? h.length * g : 0;
			if (l.math) {
				let t = bn.get(l.math.nodes), n = l.math.width, r = l.math.ascent + l.math.descent;
				if (t && n > 0 && r > 0) {
					let i = F - l.math.ascent, a = xn(t, l.color);
					e.drawImage(a, U, i, n, r);
				}
				U += n, U += f;
				continue;
			}
			e.font = l.font, e.fillStyle = l.color;
			let y = F + (l.baseline ? -(l.baseline / 1e5) * l.sizePx : 0), b = l.letterSpacingPx ?? 0;
			if (l.highlight && l.text) {
				let t = e.measureText(l.text).width + (b > 0 ? b * Z(l.text) : 0) + _ + f;
				_n(e, U, y, t, l.sizePx, l.highlight, l.color);
			}
			let x = l.shadow;
			if (x) {
				let t = x.dir * Math.PI / 180, n = J(x.dist, o);
				e.save(), e.shadowColor = Y(x.color, x.alpha), e.shadowBlur = J(x.blur, o), e.shadowOffsetX = Math.cos(t) * n, e.shadowOffsetY = Math.sin(t) * n;
			}
			let S = (t, n, r) => {
				let i = r === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e);
				if (b > 0 && t.length > 1) {
					let r = e, a = r.letterSpacing;
					try {
						r.letterSpacing = `${b}px`;
					} catch {}
					i(t, n, y);
					try {
						r.letterSpacing = a;
					} catch {}
				} else i(t, n, y);
			}, C = (t) => e.measureText(t).width, w = h && h.length > 0 ? qt([...l.text], h, g, C, b) : null, T = [...l.text], E = !!h && h.length === T.length - 1 && T.length > 1, D = (t) => {
				if (v) {
					let n = E ? b + g : b;
					gn(e, l.text, U, y, l.sizePx, n, t);
					return;
				}
				if (E) {
					let n = e, r = n.letterSpacing;
					try {
						n.letterSpacing = `${b + g}px`;
					} catch {}
					(t === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e))(l.text, U, y);
					try {
						n.letterSpacing = r;
					} catch {}
				} else if (w) for (let { text: e, dx: n } of w) S(e, U + n, t);
				else S(l.text, U, t);
			};
			D("fill"), x && e.restore();
			let O = l.outline;
			O && O.width > 0 && (e.save(), e.lineWidth = Math.max(.5, J(O.width, o)), e.strokeStyle = O.color ? `#${O.color}` : l.color, e.lineJoin = "round", D("stroke"), e.restore()), e.font = l.font;
			let k = e.measureText(l.text).width + (b > 0 ? b * Z(l.text) : 0) + _;
			if (m && l.text && m({
				text: l.text,
				inShapeX: U - n,
				inShapeY: z - r,
				w: k + f,
				h: d,
				fontSize: l.sizePx,
				font: l.font,
				shapeX: n,
				shapeY: r,
				shapeW: i,
				shapeH: a,
				rotation: c,
				hyperlink: l.hyperlink
			}), l.underline && Gt(e, U, y, k + f, l.sizePx, l.underlineColor ?? l.color, l.underlineStyle, p.dpr), l.strikethrough) {
				let t = Math.max(1, l.sizePx * .05);
				e.strokeStyle = l.color, e.lineWidth = t, e.setLineDash([]);
				let n = y - l.sizePx * .32;
				if (l.strikeDouble) {
					let r = t * .9, i = n - r, a = n + r;
					e.beginPath(), e.moveTo(U, i + G(i, t, p.dpr)), e.lineTo(U + k + f, i + G(i, t, p.dpr)), e.moveTo(U, a + G(a, t, p.dpr)), e.lineTo(U + k + f, a + G(a, t, p.dpr)), e.stroke();
				} else {
					let r = n + G(n, t, p.dpr);
					e.beginPath(), e.moveTo(U, r), e.lineTo(U + k + f, r), e.stroke();
				}
			}
			U += k, U += f;
		}
		j && (e.direction = "ltr"), z += u;
	}
	e.restore();
}
function hr(e, t, n, r, i) {
	if (!e) return [];
	let a = Nt(t?.rig ?? "threePt", t?.dir ?? "t", t?.rot), o = zt(n), s = r * i, c = [];
	return e.bevelT && e.bevelT.w > 0 && e.bevelT.h > 0 && c.push({
		widthPx: e.bevelT.w * s,
		heightPx: e.bevelT.h * s,
		prst: e.bevelT.prst || "circle",
		material: o,
		light: a
	}), e.bevelB && e.bevelB.w > 0 && e.bevelB.h > 0 && c.push({
		widthPx: e.bevelB.w * s,
		heightPx: e.bevelB.h * s,
		prst: e.bevelB.prst || "circle",
		material: o,
		light: a,
		bottom: !0
	}), c;
}
function gr(e, t, n, r, i, a) {
	if (!e || !e.extrusionH || e.extrusionH <= 0) return null;
	let o = e.extrusionH * i * a, s = at(t, n * a, r * a, o);
	if (Math.hypot(s.x, s.y) < .75) return null;
	let c = [
		64,
		64,
		64
	];
	if (e.extrusionClr) {
		let t = e.extrusionClr.replace("#", "");
		t.length >= 6 && (c = [
			parseInt(t.slice(0, 2), 16),
			parseInt(t.slice(2, 4), 16),
			parseInt(t.slice(4, 6), 16)
		]);
	}
	return {
		offsetX: s.x,
		offsetY: s.y,
		rgb: c
	};
}
function _r(t, n, r, i, a, o, s, c = {}) {
	if (a <= 0 || o <= 0) return !1;
	let l = t.getTransform(), u = Math.abs(l.a * l.d - l.b * l.c), d = u > 0 ? Math.sqrt(u) : 1, f = Math.max(0, Math.ceil((c.edgePadCss ?? 0) * d)), p = rt(n, a, o), m = p.corners;
	if (f > 0) {
		let e = f / d, t = mt(p.corners, e / a, e / o);
		t ? m = t : f = 0;
	}
	let h = f / d, g = Math.max(1, Math.ceil(a * d) + 2 * f), _ = Math.max(1, Math.ceil(o * d) + 2 * f), v = e(g, _);
	if (!v) return !1;
	let y = v.getContext("2d");
	if (!y) return !1;
	y.save(), y.scale(d, d), y.translate(h, h), s(y, 0, 0, a, o), y.restore();
	let b = Math.ceil(a * d), x = Math.ceil(o * d), S = (e) => ({
		x: f - e,
		y: f - e,
		w: b + 2 * e,
		h: x + 2 * e
	});
	if (c.extrusion) {
		let e = Math.ceil(Math.hypot(c.extrusion.offsetX, c.extrusion.offsetY)) + 2;
		Wt(y, c.extrusion, S(e));
	}
	if (c.bevels && c.bevels.length > 0) for (let e of c.bevels) Ut(y, e, S(Math.ceil(e.widthPx) + 2));
	return c.paintEdges && (y.save(), y.scale(d, d), y.translate(h, h), c.paintEdges(y, 0, 0, a, o), y.restore()), ft(v, t, g, _, m.map((e) => ({
		x: r + e.x,
		y: i + e.y
	}))), !0;
}
function vr(t, n, r, i, a, o, s, c, l = 0) {
	if (i <= 0 || a <= 0 || o.length === 0) return !1;
	let u = t.getTransform(), d = Math.abs(u.a * u.d - u.b * u.c), f = d > 0 ? Math.sqrt(d) : 1, p = Math.max(0, Math.ceil(l * f)), m = p / f, h = Math.max(1, Math.ceil(i * f) + 2 * p), g = Math.max(1, Math.ceil(a * f) + 2 * p), _ = e(h, g);
	if (!_) return !1;
	let v = _.getContext("2d");
	if (!v) return !1;
	v.save(), v.scale(f, f), v.translate(m, m), s(v, 0, 0, i, a), v.restore();
	let y = Math.ceil(i * f), b = Math.ceil(a * f);
	for (let e of o) {
		let t = Math.ceil(e.widthPx) + 2;
		Ut(v, e, {
			x: p - t,
			y: p - t,
			w: y + 2 * t,
			h: b + 2 * t
		});
	}
	return c && (v.save(), v.scale(f, f), v.translate(m, m), c(v, 0, 0, i, a), v.restore()), t.drawImage(_, n - m, r - m, h / f, g / f), !0;
}
var yr = /* @__PURE__ */ new WeakMap();
function br(e) {
	let t = yr.get(e);
	return t || (t = async (t, n) => {
		let r = await e(t);
		return r.type === n ? r : new Blob([r], { type: n });
	}, yr.set(e, t)), t;
}
function xr(e, t, n = br(t)) {
	return U("base", e.posterPath, n, async () => {
		let n = await t(e.posterPath), r = e.posterMimeType || n.type || "application/octet-stream";
		return {
			bitmap: await s(n.type === r ? n : new Blob([n], { type: r })),
			owned: !0
		};
	}).then((e) => {
		if (!e) throw Error("Media poster could not be decoded");
		return e;
	});
}
async function Sr(e, t, n, r, i) {
	if (i) try {
		let a = t.mimeType === "image/svg+xml", { widthPt: s, heightPt: c } = S(t.mimeType, t.srcRect, t.width / K, t.height / K), l;
		if (de(t)) try {
			l = await o(t.svgImagePath, i);
		} catch {
			l = a ? await o(t.imagePath, i) : await we(t.imagePath, t.mimeType, t.duotone, i, {
				widthPt: s,
				heightPt: c
			});
		}
		else l = a ? await o(t.imagePath, i) : await we(t.imagePath, t.mimeType, t.duotone, i, {
			widthPt: s,
			heightPt: c
		});
		if (!l || r()) return;
		e.save(), t.alpha != null && (e.globalAlpha *= t.alpha);
		let u = J(t.x, n), d = J(t.y, n), f = J(t.width, n), p = J(t.height, n);
		(t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(u + f / 2, d + p / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(u + f / 2), -(d + p / 2)));
		let m = x(l, t.srcRect), h = (e, n, r, i, a) => {
			t.custGeom && t.custGeom.length > 0 ? lr(e, t.custGeom, n, r, i, a) : t.prstGeom && y(e, t.prstGeom, n, r, i, a, t.prstAdjust ?? []) || e.rect(n, r, i, a);
		}, g = (e, t, n, r, i) => {
			e.beginPath(), h(e, t, n, r, i);
		}, _ = (e, n, r, i, a) => {
			(t.prstGeom || t.custGeom && t.custGeom.length > 0) && (g(e, n, r, i, a), e.clip());
		}, v = (e, r, i, a, o) => {
			t.stroke && (e.save(), Q(e, t.stroke, n), g(e, r, i, a, o), e.stroke(), e.restore());
		}, b = (e, r, i, a, o) => {
			let s = t.sp3d;
			if (s && (s.contourW ?? 0) > 0 && s.contourClr) {
				let t = Math.max(.5, s.contourW * n);
				e.save(), e.beginPath();
				let c = t * 2 + Math.max(a, o);
				e.rect(r - c, i - c, a + 2 * c, o + 2 * c), h(e, r, i, a, o), e.clip("evenodd"), e.beginPath(), g(e, r, i, a, o), e.strokeStyle = Y(s.contourClr), e.lineWidth = t * 2, e.setLineDash([]), e.stroke(), e.restore();
			}
		}, C = t.scene3d && it(t.scene3d.camera) ? t.scene3d : null, w = (e, t, n, r, i) => {
			e.save(), _(e, t, n, r, i), m ? e.drawImage(l, m.sx, m.sy, m.sw, m.sh, t, n, r, i) : e.drawImage(l, t, n, r, i), e.restore();
		}, T = (e, t, n, r, i) => {
			w(e, t, n, r, i), v(e, t, n, r, i), b(e, t, n, r, i);
		}, E = (e, t, n, r, i) => {
			w(e, t, n, r, i), v(e, t, n, r, i);
		}, D = e.getTransform(), O = Math.abs(D.a * D.d - D.b * D.c), k = O > 0 ? Math.sqrt(O) : 1, A = hr(t.sp3d, t.scene3d?.lightRig, t.sp3d ? t.sp3d.prstMaterial : void 0, n, k), j = C ? gr(t.sp3d, C.camera, f, p, n, k) : null, M = t.stroke ? t.stroke.width * n / 2 : 0, N = t.sp3d?.contourW ? t.sp3d.contourW * n : 0, P = j ? Math.hypot(j.offsetX, j.offsetY) / k : 0, F = M + N + P + 2, I = (e) => {
			if (C) {
				if (_r(e, C.camera, u, d, f, p, E, {
					bevels: A,
					extrusion: j ?? void 0,
					paintEdges: b,
					edgePadCss: F
				})) return;
			} else if (A.length > 0 && vr(e, u, d, f, p, A, E, b, F)) return;
			T(e, u, d, f, p);
		}, L = (e, t, n, r, i, a) => {
			e.save(), _(e, n, r, i, a), e.fillStyle = t, e.fillRect(n, r, i, a), e.restore();
		}, R = (e, t) => {
			C && _r(e, C.camera, u, d, f, p, (e, n, r, i, a) => L(e, t, n, r, i, a)) || L(e, t, u, d, f, p);
		}, z = e.canvas.width || 0, B = e.canvas.height || 0, V = e.getTransform(), H = Math.abs(V.a * V.d - V.b * V.c), U = H > 0 ? Math.sqrt(H) : 1, W = {
			x: u * U,
			y: d * U,
			w: f * U,
			h: p * U
		}, ee = n * U, G = (e) => e.setTransform(V), te = z > 0 && B > 0;
		t.reflection && te && (e.save(), e.setTransform(new DOMMatrix()), qe(e, (e) => {
			G(e), I(e);
		}, W, t.reflection, ee, z, B), e.restore()), t.shadow ? Gn(e, t.shadow, n) : t.glow && Kn(e, t.glow, n), t.softEdge && te ? (e.save(), e.setTransform(new DOMMatrix()), Ke(e, (e) => {
			G(e), I(e);
		}, W, t.softEdge, ee, z, B, (e) => {
			G(e), R(e, "#000");
		}), e.restore()) : I(e), (t.shadow || t.glow) && qn(e), t.innerShadow && te && (e.save(), e.setTransform(new DOMMatrix()), Ge(e, (e) => {
			G(e), R(e, "#000");
		}, W, t.innerShadow, ee, z, B), e.restore()), e.restore();
	} catch (e) {
		if (p(e)) throw e;
	}
}
async function Cr(e, t, n, r, i, a, o) {
	let s = J(t.x, n), c = J(t.y, n), l = J(t.width, n), u = J(t.height, n), d;
	if (t.posterPath && i) try {
		d = await xr(t, i, o);
	} catch (e) {
		if (p(e)) throw e;
	}
	r() || (e.save(), Tr(e, t, n), d ? e.drawImage(d, s, c, l, u) : (e.fillStyle = t.mediaKind === "video" ? "#111" : "#f0f0f0", e.fillRect(s, c, l, u)), a || Yt(e, s + l / 2, c + u / 2, l, u, "paused"), e.restore());
}
function wr(e, t, n, r, i, a) {
	let o = Math.max(.5, J(r.width, a)), s = n.x - t.x, c = n.y - t.y, l = Math.hypot(s, c);
	if (l === 0) return;
	let u = -c / l, d = s / l, f;
	switch (i) {
		case "dbl":
			f = [{
				offset: -1 / 3,
				widthFrac: 1 / 3
			}, {
				offset: 1 / 3,
				widthFrac: 1 / 3
			}];
			break;
		case "thinThick":
			f = [{
				offset: -3 / 8,
				widthFrac: 1 / 4
			}, {
				offset: 1 / 4,
				widthFrac: 1 / 2
			}];
			break;
		case "thickThin":
			f = [{
				offset: -1 / 4,
				widthFrac: 1 / 2
			}, {
				offset: 3 / 8,
				widthFrac: 1 / 4
			}];
			break;
		case "tri":
			f = [
				{
					offset: -2 / 5,
					widthFrac: 1 / 5
				},
				{
					offset: 0,
					widthFrac: 3 / 5
				},
				{
					offset: 2 / 5,
					widthFrac: 1 / 5
				}
			];
			break;
		default: return;
	}
	e.save(), e.globalCompositeOperation = "destination-out", e.strokeStyle = "#000", e.lineWidth = o + .5, e.setLineDash([]), e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.stroke(), e.globalCompositeOperation = "source-over", e.strokeStyle = Y(r.color);
	for (let r of f) {
		let i = u * (o * r.offset), a = d * (o * r.offset);
		e.lineWidth = Math.max(.5, o * r.widthFrac), e.beginPath(), e.moveTo(t.x + i, t.y + a), e.lineTo(n.x + i, n.y + a), e.stroke();
	}
	e.restore();
}
function Q(e, t, n) {
	f(e, t, n);
}
function Tr(e, t, n) {
	if (t.rotation === 0 && !t.flipH && !t.flipV) return;
	let r = J(t.x, n), i = J(t.y, n), a = J(t.width, n), o = J(t.height, n);
	e.translate(r + a / 2, i + o / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(r + a / 2), -(i + o / 2));
}
function Er(e, t, n, r, i = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}) {
	e.save(), Tr(e, t, n);
	let a = J(t.x, n), o = J(t.y, n), s = t.cols.map((e) => J(e, n)), c = s.length, l = (e, t) => {
		let n = 0;
		for (let r = 0; r < t; r++) n += s[e + r] ?? 0;
		return n;
	}, u = t.rows.map((e) => J(e.height, n));
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let t = 0; t < o.cells.length; t++) {
			let s = o.cells[t];
			if (s.hMerge || s.vMerge || (s.rowSpan || 1) > 1 || !s.textBody) continue;
			let c = l(t, s.gridSpan || 1), d = mr(e, s.textBody, 0, 0, c, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0) || 0;
			d > u[a] && (u[a] = d);
		}
	}
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let t = 0; t < o.cells.length; t++) {
			let s = o.cells[t];
			if (s.hMerge || s.vMerge) continue;
			let c = s.rowSpan || 1;
			if (c <= 1 || !s.textBody) continue;
			let d = l(t, s.gridSpan || 1), f = mr(e, s.textBody, 0, 0, d, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0) || 0, p = 0;
			for (let e = 0; e < c && a + e < u.length; e++) p += u[a + e];
			if (f > p) {
				let e = (f - p) / c;
				for (let t = 0; t < c && a + t < u.length; t++) u[a + t] += e;
			}
		}
	}
	let d = s.reduce((e, t) => e + t, 0), f = Array(c);
	if (t.rtl) {
		let e = a + d;
		for (let t = 0; t < c; t++) e -= s[t], f[t] = e;
	} else {
		let e = a;
		for (let t = 0; t < c; t++) f[t] = e, e += s[t];
	}
	let p = (e, n) => t.rtl ? f[e + n - 1] : f[e], m = Array(t.rows.length);
	{
		let e = o;
		for (let n = 0; n < t.rows.length; n++) m[n] = e, e += u[n];
	}
	let h = [], g = t.rows.map(() => Array(c).fill(-1));
	for (let e = 0; e < t.rows.length; e++) {
		let n = t.rows[e], r = m[e];
		for (let i = 0; i < n.cells.length; i++) {
			let a = n.cells[i];
			if (a.hMerge || a.vMerge) continue;
			let o = a.gridSpan || 1, s = a.rowSpan || 1, d = l(i, o), f = 0;
			for (let t = 0; t < s; t++) f += u[e + t] ?? 0;
			let m = p(i, o), _ = Math.min(e + s - 1, t.rows.length - 1), v = h.length;
			h.push({
				cell: a,
				colX: m,
				rowY: r,
				cellW: d,
				cellH: f,
				ci: i,
				ri: e,
				span: o,
				lastRi: _
			});
			for (let t = e; t <= _; t++) for (let e = i; e < i + o && e < c; e++) g[t][e] = v;
		}
	}
	for (let { cell: t, colX: a, rowY: o, cellW: s, cellH: c } of h) {
		let l = vn(t.fill);
		if (l && (e.fillStyle = l, e.fillRect(a, o, s, c)), t.textBody) {
			let l = t.textColor ? Y(t.textColor) : null;
			mr(e, t.textBody, a, o, s, c, n, l, 0, !1, !1, "#000000", r, i);
		}
	}
	let _ = i.dpr, v = (e, t) => {
		if (e < 0 || e >= g.length || t < 0 || t >= c) return null;
		let n = g[e][t];
		return n < 0 ? null : h[n];
	}, y = (t, r, i, a, o) => {
		Q(e, t, n);
		let s = r === a ? G(r, e.lineWidth, _) : 0, c = i === o ? G(i, e.lineWidth, _) : 0;
		e.beginPath(), e.moveTo(r + s, i + c), e.lineTo(a + s, o + c), e.stroke();
	};
	for (let r of h) {
		let { cell: i, colX: a, rowY: o, cellW: s, cellH: d } = r;
		e.save();
		let f = t.rtl ? i.borderR : i.borderL, h = t.rtl ? i.borderL : i.borderR, _ = t.rtl ? r.ci + r.span === c : r.ci === 0, b = t.rtl ? r.ci === 0 : r.ci + r.span === c, x = t.rtl ? r.ci - 1 : r.ci + r.span, S = (e) => t.rtl ? e.borderR : e.borderL;
		if (r.ri === 0 && i.borderT && y(i.borderT, a, o, a + s, o), _ && f && y(f, a, o, a, o + d), r.lastRi === t.rows.length - 1) {
			let e = i.borderB;
			e && y(e, a, o + d, a + s, o + d);
		} else {
			let e = r.lastRi + 1, t = o + d, n = Math.min(r.ci + r.span, c), a = r.ci;
			for (; a < n;) {
				let r = g[e][a], o = a + 1;
				for (; o < n && g[e][o] === r;) o++;
				let s = v(e, a), c = on(i.borderB, s ? s.cell.borderT : null);
				if (c) {
					let e = p(a, o - a);
					y(c, e, t, e + l(a, o - a), t);
				}
				a = o;
			}
		}
		if (b) {
			let e = h;
			e && y(e, a + s, o, a + s, o + d);
		} else {
			let e = a + s, t = r.ri;
			for (; t <= r.lastRi;) {
				let n = g[t][x], i = t;
				for (; i + 1 <= r.lastRi && g[i + 1][x] === n;) i++;
				let a = v(t, x), o = on(h, a ? S(a.cell) : null);
				o && y(o, e, m[t], e, m[i] + u[i]), t = i + 1;
			}
		}
		i.diagonalTL && (Q(e, i.diagonalTL, n), e.beginPath(), e.moveTo(a, o), e.lineTo(a + s, o + d), e.stroke()), i.diagonalTR && (Q(e, i.diagonalTR, n), e.beginPath(), e.moveTo(a + s, o), e.lineTo(a, o + d), e.stroke()), e.restore();
	}
	e.restore();
}
function Dr(e, t, n, r) {
	e.save(), e.globalAlpha = t.opacity, e.fillStyle = t.color, e.fillRect(0, 0, n, r), e.restore();
}
var Or = /* @__PURE__ */ new WeakMap();
function kr(e) {
	Or.set(e, (Or.get(e) ?? 0) + 1);
}
function Ar(e, t, n, r, i) {
	e.save(), e.fillStyle = "#f7f7f8", e.fillRect(0, 0, t, n);
	let a = Math.max(12, Math.min(t, n) * .04);
	e.strokeStyle = "#c8ccd2", e.lineWidth = Math.max(1, Math.min(t, n) * .004), e.setLineDash([e.lineWidth * 6, e.lineWidth * 5]), e.strokeRect(a, a, t - a * 2, n - a * 2), e.setLineDash([]);
	let o = t / 2, s = Math.max(18, Math.min(t, n) * .14);
	e.fillStyle = "#b23b3b", e.textAlign = "center", e.textBaseline = "middle", e.font = `${s}px sans-serif`, e.fillText("⚠", o, n * .34);
	let c = Math.max(11, Math.min(t, n) * .045);
	e.fillStyle = "#333333", e.font = `600 ${c}px sans-serif`, e.fillText(`Slide ${r} could not be displayed`, o, n * .52);
	let l = Math.max(9, Math.min(t, n) * .028);
	e.fillStyle = "#666666", e.font = `${l}px sans-serif`;
	let u = t - a * 4, d = i.split(/\s+/), f = [], p = "";
	for (let t of d) {
		let n = p ? `${p} ${t}` : t;
		if (e.measureText(n).width > u && p ? (f.push(p), p = t) : p = n, f.length >= 4) break;
	}
	p && f.length < 4 && f.push(p);
	let m = l * 1.35, h = n * .6 + m;
	for (let t of f.slice(0, 4)) e.fillText(t, o, h), h += m;
	e.restore();
}
async function jr(e, t, n, r, i = {}, a) {
	let o = i.fetchImage ?? (i.fetchMedia ? br(i.fetchMedia) : void 0), s = o ? v(o) : void 0;
	try {
		return await Mr(e, t, n, r, i, a, o);
	} finally {
		s?.();
	}
}
async function Mr(e, t, r, i, a = {}, s, l) {
	let u = (Or.get(e) ?? 0) + 1;
	Or.set(e, u);
	let d = () => Or.get(e) !== u, f = a.width ?? ((R(e) ? e.offsetWidth : 0) || 960), m = f / r, h = Math.round(f), g = Math.round(i * m), _ = a.dpr ?? B(), v = ae(h * _, g * _), y = v.clamped ? _ * v.scale : _;
	e.width = v.width, e.height = v.height, R(e) && (e.style.width = `${h}px`, e.style.display || (e.style.display = "block"));
	let b = e.getContext("2d");
	if (!b) throw Error("Could not get 2D context");
	if (b.scale(y, y), t.parseError) return Ar(b, h, g, t.slideNumber, t.parseError), e;
	let x = a.defaultTextColor ? `#${a.defaultTextColor}` : "#000000", C = {
		themeMajorFont: a.majorFont ?? null,
		themeMinorFont: a.minorFont ?? null,
		themeHlinkColor: a.hlinkColor ?? null,
		dpr: y,
		smartArtFallbackTextColor: un(t.background, x)
	};
	if (await Vn(b, t.background, h, g, m, d, a.fetchImage), d() || (a.math && await En(t, a.math), d())) return e;
	let w = t.slideNumber;
	for (let e of t.elements) if (e.type === "picture" && a.fetchImage) {
		let t = e, n = t.mimeType === "image/svg+xml";
		if (de(t)) o(t.svgImagePath, a.fetchImage).catch(() => void 0);
		else if (n) o(t.imagePath, a.fetchImage).catch(() => void 0);
		else {
			let e = S(t.mimeType, t.srcRect, t.width / K, t.height / K);
			we(t.imagePath, t.mimeType, t.duotone, a.fetchImage, {
				widthPt: e.widthPt,
				heightPt: e.heightPt
			}).catch(() => void 0);
		}
	} else if (e.type === "media") {
		let t = e;
		t.posterPath && a.fetchMedia && xr(t, a.fetchMedia, l).catch(() => void 0);
	}
	if (a.fetchImage) {
		let r = a.fetchImage, i = /* @__PURE__ */ new Set();
		for (let e of t.elements) if (!(e.type !== "shape" || !e.textBody)) for (let t of e.textBody.paragraphs) {
			let e = Ee(t.bullet);
			e.type === "blip" && i.add(`${e.imagePath} ${e.mimeType}`);
		}
		if (i.size > 0 && (await Promise.all([...i].map((e) => {
			let [t, i] = e.split(" ");
			return n(t, i, r).catch((e) => {
				if (p(e)) throw e;
			});
		})), d())) return e;
	}
	for (let n of t.elements) {
		if (d()) return e;
		if (n.type === "shape") cr(b, n, m, x, w, C, s, a.fetchImage);
		else if (n.type === "picture") await Sr(b, n, m, d, a.fetchImage);
		else if (n.type === "table") Er(b, n, m, w, C);
		else if (n.type === "media") await Cr(b, n, m, d, a.fetchMedia, a.skipMediaControls, a.fetchImage);
		else if (n.type === "chart") {
			let e = K * m;
			b.save(), Tr(b, n, m), c(b, n.chart, {
				x: J(n.x, m),
				y: J(n.y, m),
				w: J(n.width, m),
				h: J(n.height, m)
			}, e), b.restore();
		}
	}
	return d() || a.dim && Dr(b, a.dim, h, g), e;
}
//#endregion
//#region packages/pptx/src/google-fonts.ts
var Nr = {
	...ie,
	...M
};
Object.freeze({
	archiveEntryCount: 0,
	declaredInflatedBytes: 0,
	distinctInflatedBytes: 0,
	operationInflatedBytes: 0
});
function $(e, t) {
	if (e !== null && typeof e != "string") throw Error(`invalid PPTX presentation bootstrap ${t}`);
}
function Pr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation bootstrap slide at ${t}`);
	let n = e;
	if (n.index !== t) throw Error(`invalid PPTX presentation bootstrap slide index ${n.index}`);
	if (n.partName !== void 0 && typeof n.partName != "string") throw Error(`invalid PPTX presentation bootstrap slide partName at ${t}`);
	return Object.freeze({
		index: n.index,
		...n.partName === void 0 ? {} : { partName: n.partName }
	});
}
function Fr(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation bootstrap payload");
	let t = e;
	if (!Number.isSafeInteger(t.slideCount) || (t.slideCount ?? -1) < 0 || !Number.isSafeInteger(t.slideWidth) || (t.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(t.slideHeight) || (t.slideHeight ?? 0) <= 0 || !Array.isArray(t.slides) || t.slides.length !== t.slideCount) throw Error("invalid PPTX presentation bootstrap dimensions or slide count");
	return $(t.defaultTextColor, "defaultTextColor"), $(t.majorFont, "majorFont"), $(t.minorFont, "minorFont"), $(t.hlinkColor, "hlinkColor"), $(t.folHlinkColor, "folHlinkColor"), Object.freeze({
		slideCount: t.slideCount,
		slideWidth: t.slideWidth,
		slideHeight: t.slideHeight,
		defaultTextColor: t.defaultTextColor,
		majorFont: t.majorFont,
		minorFont: t.minorFont,
		hlinkColor: t.hlinkColor,
		folHlinkColor: t.folHlinkColor,
		slides: Object.freeze(t.slides.map(Pr))
	});
}
function Ir(e) {
	return Object.freeze({
		type: "media",
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		rotation: e.rotation,
		flipH: e.flipH,
		flipV: e.flipV,
		mediaKind: e.mediaKind,
		posterPath: e.posterPath,
		posterMimeType: e.posterMimeType,
		mediaPath: e.mediaPath,
		mimeType: e.mimeType
	});
}
function Lr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight media at slide ${t}`);
	let n = e;
	for (let e of [
		"x",
		"y",
		"width",
		"height",
		"rotation"
	]) if (typeof n[e] != "number" || !Number.isFinite(n[e])) throw Error(`invalid PPTX presentation preflight media ${e} at slide ${t}`);
	if (n.type !== "media" || typeof n.flipH != "boolean" || typeof n.flipV != "boolean" || n.mediaKind !== "audio" && n.mediaKind !== "video" || typeof n.posterPath != "string" || typeof n.posterMimeType != "string" || typeof n.mediaPath != "string" || typeof n.mimeType != "string") throw Error(`invalid PPTX presentation preflight media fields at slide ${t}`);
	return Ir(n);
}
function Rr(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation preflight payload");
	let t = e;
	if (!Number.isSafeInteger(t.slideCount) || (t.slideCount ?? -1) < 0 || !Number.isSafeInteger(t.slideWidth) || (t.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(t.slideHeight) || (t.slideHeight ?? 0) <= 0 || !Array.isArray(t.slides) || t.slides.length !== t.slideCount || !Array.isArray(t.fontPreloadNames)) throw Error("invalid PPTX presentation preflight dimensions or slide count");
	$(t.defaultTextColor, "defaultTextColor"), $(t.majorFont, "majorFont"), $(t.minorFont, "minorFont"), $(t.hlinkColor, "hlinkColor"), $(t.folHlinkColor, "folHlinkColor");
	let n = t.slides.map((e, t) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight slide at ${t}`);
		let n = e;
		if (n.index !== t || n.partName !== void 0 && typeof n.partName != "string" || n.notes !== null && typeof n.notes != "string" || typeof n.hidden != "boolean" || !Array.isArray(n.mediaElements)) throw Error(`invalid PPTX presentation preflight slide fields at ${t}`);
		return Object.freeze({
			index: t,
			...n.partName === void 0 ? {} : { partName: n.partName },
			notes: n.notes,
			hidden: n.hidden,
			mediaElements: Object.freeze(n.mediaElements.map((e) => Lr(e, t)))
		});
	}), r = t.fontPreloadNames.map((e, t) => {
		if (e !== null && typeof e != "string") throw Error(`invalid PPTX presentation preflight font at ${t}`);
		return e;
	});
	return Object.freeze({
		slideCount: t.slideCount,
		slideWidth: t.slideWidth,
		slideHeight: t.slideHeight,
		defaultTextColor: t.defaultTextColor,
		majorFont: t.majorFont,
		minorFont: t.minorFont,
		hlinkColor: t.hlinkColor,
		folHlinkColor: t.folHlinkColor,
		slides: Object.freeze(n),
		fontPreloadNames: Object.freeze(r)
	});
}
function zr(e, t) {
	for (let n of e.slides) for (let e of n.mediaElements) {
		if (e.mediaPath === t) return e.mimeType;
		if (e.posterPath === t) return e.posterMimeType;
	}
	return "";
}
//#endregion
//#region packages/pptx/src/slide-pull-client.ts
var Br = 1024 * 1024, Vr = class {
	active = /* @__PURE__ */ new Set();
	nextSessionId = 1;
	constructor(e) {
		if (this.options = e, !Number.isSafeInteger(e.slideCount) || e.slideCount < 0) throw TypeError("slideCount must be a non-negative safe integer");
		if (e.generation !== void 0 && (!Number.isSafeInteger(e.generation) || e.generation <= 0)) throw TypeError("generation must be a positive safe integer");
	}
	async load(e, t = !0, n) {
		this.assertSlideIndex(e);
		let r = this.nextSessionId++, i = {
			sessionId: r,
			operationId: r,
			generation: this.options.generation ?? 1
		}, a = new h(this.options.transport, {
			...i,
			maxByteCredit: d,
			timeoutMs: n
		});
		this.active.add(a);
		try {
			await this.options.open(e, i, n);
			let r = await Ur(a);
			try {
				let e = r.usage ?? a.usageCheckpoint;
				e && this.options.onUsage?.(e);
				let n = t ? JSON.parse(new TextDecoder().decode(new Uint8Array(r.payload))) : void 0;
				return await r.ack(), n;
			} finally {
				r.disposeTransferred();
			}
		} catch (e) {
			throw await a.cancel("request-error").catch(() => void 0), e;
		} finally {
			this.active.delete(a);
		}
	}
	cancelAll() {
		for (let e of this.active) e.cancel("closed").catch(() => void 0);
		this.active.clear();
	}
	assertSlideIndex(e) {
		if (!Number.isSafeInteger(e) || e < 0 || e >= this.options.slideCount) throw RangeError(`Slide index ${e} out of range (count: ${this.options.slideCount})`);
	}
};
function Hr(e) {
	return !!e && typeof e == "object" && e.protocol === "ooxml-pull-v1";
}
async function Ur(e) {
	try {
		return await e.pull(Br);
	} catch (t) {
		let n = Wr(t);
		if (n === void 0) throw t;
		return e.pull(n);
	}
}
function Wr(e) {
	return N(e, Br, d);
}
//#endregion
export { Rr as a, jr as c, Fr as i, Yt as l, Hr as n, Nr as o, zr as r, kr as s, Vr as t };
