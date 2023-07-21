const e = ["nick", "mail", "link"],
	t = t => t.filter((t => e.includes(t))),
	n = ["//unpkg.com/@waline/emojis@1.1.0/weibo"],
	r = "en-US",
	l = ["//unpkg.com/@waline/emojis/tieba/tieba_agree.png", "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png", "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png", "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png", "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png", "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"],
	i = e => new Promise(((t, n) => {
		if (e.size > 128e3) return n(new Error("File too large! File size limit 128KB"));
		const r = new FileReader;
		r.readAsDataURL(e), r.onload = () => t(r.result ? .toString() || ""), r.onerror = n
	})),
	s = e => !0 === e ? '<p class="wl-tex">Tex is not available in preview</p>' : '<span class="wl-tex">Tex is not available in preview</span>',
	o = e => {
		const t = async (t, n = {}) => fetch(`https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({lang:e,limit:"20",rating:"g",api_key:"6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",...n}).toString()}`)
			.then((e => e.json()))
			.then((({
				data: e
			}) => e.map((e => ({
				title: e.title,
				src: e.images.downsized_medium.url
			})))));
		return {
			search: e => t("search", {
				q: e,
				offset: "0"
			}),
			default: () => t("trending", {}),
			more: (e, n = 0) => t("search", {
				q: e,
				offset: n.toString()
			})
		}
	},
	a = new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`, "gmi"),
	c = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"],
	u = {},
	p = e => {
		let t = 0;
		return e.replace(a, ((e, n, r) => {
			if (r) return `<span style="color: slategray">${r}</span>`;
			if ("<" === n) return "&lt;";
			let l;
			u[n] ? l = u[n] : (l = c[t], u[n] = l);
			const i = `<span style="color: #${l}">${n}</span>`;
			return t = ++t % c.length, i
		}))
	},
	d = ["nick", "nickError", "mail", "mailError", "link", "optional", "placeholder", "sofa", "submit", "like", "cancelLike", "reply", "cancelReply", "comment", "refresh", "more", "preview", "emoji", "uploadImage", "seconds", "minutes", "hours", "days", "now", "uploading", "login", "logout", "admin", "sticky", "word", "wordHint", "anonymous", "level0", "level1", "level2", "level3", "level4", "level5", "gif", "gifSearchPlaceholder", "profile", "approved", "waiting", "spam", "unsticky", "oldest", "latest", "hottest", "reactionTitle"],
	h = e => Object.fromEntries(e.map(((e, t) => [d[t], e])));
var f = h(["NickName", "NickName cannot be less than 3 bytes.", "E-Mail", "Please confirm your email address.", "Website", "Optional", "Comment here...", "No comment yet.", "Submit", "Like", "Cancel like", "Reply", "Cancel reply", "Comments", "Refresh", "Load More...", "Preview", "Emoji", "Upload Image", "seconds ago", "minutes ago", "hours ago", "days ago", "just now", "Uploading", "Login", "logout", "Admin", "Sticky", "Words", "Please input comments between $0 and $1 words!\n Current word number: $2", "Anonymous", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Search GIF", "Profile", "Approved", "Waiting", "Spam", "Unsticky", "Oldest", "Latest", "Hottest", "What do you think?"]),
	g = h(["ニックネーム", "3バイト以上のニックネームをご入力ください.", "メールアドレス", "メールアドレスをご確認ください.", "サイト", "オプション", "ここにコメント", "コメントしましょう~", "提出する", "Like", "Cancel like", "返信する", "キャンセル", "コメント", "更新", "さらに読み込む", "プレビュー", "絵文字", "画像をアップロード", "秒前", "分前", "時間前", "日前", "たっだ今", "アップロード", "ログインする", "ログアウト", "管理者", "トップに置く", "ワード", "コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2", "匿名", "うえにん", "なかにん", "しもおし", "特にしもおし", "かげ", "なぬし", "GIF", "探す GIF", "個人情報", "承認済み", "待っている", "スパム", "べたつかない", "逆順", "正順", "人気順", "どう思いますか？"]),
	m = h(["Apelido", "Apelido não pode ser menor que 3 bytes.", "E-Mail", "Por favor, confirme seu endereço de e-mail.", "Website", "Opcional", "Comente aqui...", "Nenhum comentário, ainda.", "Enviar", "Like", "Cancel like", "Responder", "Cancelar resposta", "Comentários", "Refrescar", "Carregar Mais...", "Visualizar", "Emoji", "Enviar Imagem", "segundos atrás", "minutos atrás", "horas atrás", "dias atrás", "agora mesmo", "Enviando", "Entrar", "Sair", "Admin", "Sticky", "Palavras", "Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2", "Anônimo", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Pesquisar GIF", "informação pessoal", "Aprovado", "Espera", "Spam", "Unsticky", "Mais velho", "Mais recentes", "Mais quente", "O que você acha?"]),
	v = h(["Псевдоним", "Никнейм не может быть меньше 3 байт.", "Эл. адрес", "Пожалуйста, подтвердите адрес вашей электронной почты.", "Веб-сайт", "Необязательный", "Комментарий здесь...", "Пока нет комментариев.", "Отправить", "Like", "Cancel like", "Отвечать", "Отменить ответ", "Комментарии", "Обновить", "Загрузи больше...", "Превью", "эмодзи", "Загрузить изображение", "секунд назад", "несколько минут назад", "несколько часов назад", "дней назад", "прямо сейчас", "Загрузка", "Авторизоваться", "Выход из системы", "Админ", "Липкий", "Слова", "Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2", "Анонимный", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Поиск GIF", "Персональные данные", "Одобренный", "Ожидающий", "Спам", "Нелипкий", "самый старый", "последний", "самый горячий", "Что вы думаете?"]),
	y = h(["昵称", "昵称不能少于3个字符", "邮箱", "请填写正确的邮件地址", "网址", "可选", "欢迎评论", "来发评论吧~", "提交", "喜欢", "取消喜欢", "回复", "取消回复", "评论", "刷新", "加载更多...", "预览", "表情", "上传图片", "秒前", "分钟前", "小时前", "天前", "刚刚", "正在上传", "登录", "退出", "博主", "置顶", "字", "评论字数应在 $0 到 $1 字之间！\n当前字数：$2", "匿名", "潜水", "冒泡", "吐槽", "活跃", "话痨", "传说", "表情包", "搜索表情包", "个人资料", "通过", "待审核", "垃圾", "取消置顶", "按倒序", "按正序", "按热度", "你认为这篇文章怎么样？"]),
	b = h(["暱稱", "暱稱不能少於3個字元", "郵箱", "請填寫正確的郵件地址", "網址", "可選", "歡迎留言", "來發留言吧~", "送出", "喜歡", "取消喜歡", "回覆", "取消回覆", "留言", "重整", "載入更多...", "預覽", "表情", "上傳圖片", "秒前", "分鐘前", "小時前", "天前", "剛剛", "正在上傳", "登入", "登出", "管理者", "置頂", "字", "留言字數應在 $0 到 $1 字之間！\n目前字數：$2", "匿名", "潛水", "冒泡", "吐槽", "活躍", "多話", "傳說", "表情包", "搜尋表情包", "個人資料", "通過", "待審核", "垃圾", "取消置頂", "最早", "最新", "熱門", "你認為這篇文章怎麼樣？"]);
const w = {
		zh: y,
		"zh-cn": y,
		"zh-CN": y,
		"zh-tw": b,
		"zh-TW": b,
		en: f,
		"en-US": f,
		"en-us": f,
		jp: g,
		ja: g,
		"jp-jp": g,
		"jp-JP": g,
		"pt-br": m,
		"pt-BR": m,
		ru: v,
		"ru-ru": v,
		"ru-RU": v
	},
	k = {
		"Content-Type": "application/json"
	},
	x = (e, t = "") => {
		if ("object" == typeof e && e.errno) throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);
		return e
	},
	_ = ({
		serverURL: e,
		lang: t,
		paths: n,
		type: r,
		signal: l
	}) => fetch(`${e}/article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(r.join(","))}&lang=${t}`, {
		signal: l
	})
	.then((e => e.json())),
	$ = ({
		serverURL: e,
		lang: t,
		path: n,
		type: r,
		action: l
	}) => fetch(`${e}/article?lang=${t}`, {
		method: "POST",
		headers: k,
		body: JSON.stringify({
			path: n,
			type: r,
			action: l
		})
	})
	.then((e => e.json())),
	C = ({
		serverURL: e,
		lang: t,
		token: n,
		objectId: r,
		comment: l
	}) => fetch(`${e}/comment/${r}?lang=${t}`, {
		method: "PUT",
		headers: {
			...k,
			Authorization: `Bearer ${n}`
		},
		body: JSON.stringify(l)
	})
	.then((e => e.json()))
	.then((e => x(e, "Update comment"))),
	S = e => {
		try {
			e = decodeURI(e)
		} catch (e) {}
		return e
	},
	A = (e = "") => e.replace(/\/$/u, ""),
	R = e => /^(https?:)?\/\//.test(e),
	E = e => {
		const t = A(e);
		return R(t) ? t : `https://${t}`
	},
	z = e => Array.isArray(e) ? e : !!e && [0, e],
	L = (e, t) => "function" == typeof e ? e : !1 !== e && t,
	I = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",
	j = (e, t) => {
		let n = e.toString();
		for (; n.length < t;) n = "0" + n;
		return n
	},
	O = (e, t, n) => {
		if (!e) return "";
		const r = "string" == typeof e ? new Date(-1 !== e.indexOf(" ") ? e.replace(/-/g, "/") : e) : e,
			l = t.getTime() - r.getTime(),
			i = Math.floor(l / 864e5);
		if (0 === i) {
			const e = l % 864e5,
				t = Math.floor(e / 36e5);
			if (0 === t) {
				const t = e % 36e5,
					r = Math.floor(t / 6e4);
				if (0 === r) {
					const e = t % 6e4;
					return `${Math.round(e/1e3)} ${n.seconds}`
				}
				return `${r} ${n.minutes}`
			}
			return `${t} ${n.hours}`
		}
		return i < 0 ? n.now : i < 8 ? `${i} ${n.days}` : (e => {
			const t = j(e.getDate(), 2),
				n = j(e.getMonth() + 1, 2);
			return `${j(e.getFullYear(),2)}-${n}-${t}`
		})(r)
	},
	T = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function U(e, t) {
	const n = Object.create(null),
		r = e.split(",");
	for (let e = 0; e < r.length; e++) n[r[e]] = !0;
	return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
}
const P = {},
	M = [],
	F = () => {},
	V = () => !1,
	N = /^on[^a-z]/,
	D = e => N.test(e),
	H = e => e.startsWith("onUpdate:"),
	B = Object.assign,
	W = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1)
	},
	q = Object.prototype.hasOwnProperty,
	Z = (e, t) => q.call(e, t),
	K = Array.isArray,
	G = e => "[object Map]" === le(e),
	Q = e => "[object Set]" === le(e),
	J = e => "[object Date]" === le(e),
	X = e => "function" == typeof e,
	Y = e => "string" == typeof e,
	ee = e => "symbol" == typeof e,
	te = e => null !== e && "object" == typeof e,
	ne = e => te(e) && X(e.then) && X(e.catch),
	re = Object.prototype.toString,
	le = e => re.call(e),
	ie = e => le(e)
	.slice(8, -1),
	se = e => "[object Object]" === le(e),
	oe = e => Y(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
	ae = U(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
	ce = e => {
		const t = Object.create(null);
		return n => t[n] || (t[n] = e(n))
	},
	ue = /-(\w)/g,
	pe = ce((e => e.replace(ue, ((e, t) => t ? t.toUpperCase() : "")))),
	de = /\B([A-Z])/g,
	he = ce((e => e.replace(de, "-$1")
		.toLowerCase())),
	fe = ce((e => e.charAt(0)
		.toUpperCase() + e.slice(1))),
	ge = ce((e => e ? `on${fe(e)}` : "")),
	me = (e, t) => !Object.is(e, t),
	ve = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t)
	},
	ye = (e, t, n) => {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			value: n
		})
	},
	be = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t
	};
let we;
const ke = () => we || (we = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});

function xe(e) {
	if (K(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const r = e[n],
				l = Y(r) ? Se(r) : xe(r);
			if (l)
				for (const e in l) t[e] = l[e]
		}
		return t
	}
	return Y(e) || te(e) ? e : void 0
}
const _e = /;(?![^(]*\))/g,
	$e = /:([^]+)/,
	Ce = new RegExp("\\/\\*.*?\\*\\/", "gs");

function Se(e) {
	const t = {};
	return e.replace(Ce, "")
		.split(_e)
		.forEach((e => {
			if (e) {
				const n = e.split($e);
				n.length > 1 && (t[n[0].trim()] = n[1].trim())
			}
		})), t
}

function Ae(e) {
	let t = "";
	if (Y(e)) t = e;
	else if (K(e))
		for (let n = 0; n < e.length; n++) {
			const r = Ae(e[n]);
			r && (t += r + " ")
		} else if (te(e))
			for (const n in e) e[n] && (t += n + " ");
	return t.trim()
}
const Re = U("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");

function Ee(e) {
	return !!e || "" === e
}

function ze(e, t) {
	if (e === t) return !0;
	let n = J(e),
		r = J(t);
	if (n || r) return !(!n || !r) && e.getTime() === t.getTime();
	if (n = ee(e), r = ee(t), n || r) return e === t;
	if (n = K(e), r = K(t), n || r) return !(!n || !r) && function(e, t) {
		if (e.length !== t.length) return !1;
		let n = !0;
		for (let r = 0; n && r < e.length; r++) n = ze(e[r], t[r]);
		return n
	}(e, t);
	if (n = te(e), r = te(t), n || r) {
		if (!n || !r) return !1;
		if (Object.keys(e)
			.length !== Object.keys(t)
			.length) return !1;
		for (const n in e) {
			const r = e.hasOwnProperty(n),
				l = t.hasOwnProperty(n);
			if (r && !l || !r && l || !ze(e[n], t[n])) return !1
		}
	}
	return String(e) === String(t)
}

function Le(e, t) {
	return e.findIndex((e => ze(e, t)))
}
const Ie = e => Y(e) ? e : null == e ? "" : K(e) || te(e) && (e.toString === re || !X(e.toString)) ? JSON.stringify(e, je, 2) : String(e),
	je = (e, t) => t && t.__v_isRef ? je(e, t.value) : G(t) ? {
		[`Map(${t.size})`]: [...t.entries()].reduce(((e, [t, n]) => (e[`${t} =>`] = n, e)), {})
	} : Q(t) ? {
		[`Set(${t.size})`]: [...t.values()]
	} : !te(t) || K(t) || se(t) ? t : String(t);
let Oe;
class Te {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Oe, !e && Oe && (this.index = (Oe.scopes || (Oe.scopes = []))
			.push(this) - 1)
	}
	get active() {
		return this._active
	}
	run(e) {
		if (this._active) {
			const t = Oe;
			try {
				return Oe = this, e()
			} finally {
				Oe = t
			}
		}
	}
	on() {
		Oe = this
	}
	off() {
		Oe = this.parent
	}
	stop(e) {
		if (this._active) {
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.scopes)
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
			if (!this.detached && this.parent && !e) {
				const e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index)
			}
			this.parent = void 0, this._active = !1
		}
	}
}

function Ue() {
	return Oe
}
const Pe = e => {
		const t = new Set(e);
		return t.w = 0, t.n = 0, t
	},
	Me = e => (e.w & De) > 0,
	Fe = e => (e.n & De) > 0,
	Ve = new WeakMap;
let Ne = 0,
	De = 1;
const He = 30;
let Be;
const We = Symbol(""),
	qe = Symbol("");
class Ze {
	constructor(e, t = null, n) {
		this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0,
			function(e, t = Oe) {
				t && t.active && t.effects.push(e)
			}(this, n)
	}
	run() {
		if (!this.active) return this.fn();
		let e = Be,
			t = Ge;
		for (; e;) {
			if (e === this) return;
			e = e.parent
		}
		try {
			return this.parent = Be, Be = this, Ge = !0, De = 1 << ++Ne, Ne <= He ? (({
				deps: e
			}) => {
				if (e.length)
					for (let t = 0; t < e.length; t++) e[t].w |= De
			})(this) : Ke(this), this.fn()
		} finally {
			Ne <= He && (e => {
				const {
					deps: t
				} = e;
				if (t.length) {
					let n = 0;
					for (let r = 0; r < t.length; r++) {
						const l = t[r];
						Me(l) && !Fe(l) ? l.delete(e) : t[n++] = l, l.w &= ~De, l.n &= ~De
					}
					t.length = n
				}
			})(this), De = 1 << --Ne, Be = this.parent, Ge = t, this.parent = void 0, this.deferStop && this.stop()
		}
	}
	stop() {
		Be === this ? this.deferStop = !0 : this.active && (Ke(this), this.onStop && this.onStop(), this.active = !1)
	}
}

function Ke(e) {
	const {
		deps: t
	} = e;
	if (t.length) {
		for (let n = 0; n < t.length; n++) t[n].delete(e);
		t.length = 0
	}
}
let Ge = !0;
const Qe = [];

function Je() {
	Qe.push(Ge), Ge = !1
}

function Xe() {
	const e = Qe.pop();
	Ge = void 0 === e || e
}

function Ye(e, t, n) {
	if (Ge && Be) {
		let t = Ve.get(e);
		t || Ve.set(e, t = new Map);
		let r = t.get(n);
		r || t.set(n, r = Pe()), et(r)
	}
}

function et(e, t) {
	let n = !1;
	Ne <= He ? Fe(e) || (e.n |= De, n = !Me(e)) : n = !e.has(Be), n && (e.add(Be), Be.deps.push(e))
}

function tt(e, t, n, r, l, i) {
	const s = Ve.get(e);
	if (!s) return;
	let o = [];
	if ("clear" === t) o = [...s.values()];
	else if ("length" === n && K(e)) {
		const e = Number(r);
		s.forEach(((t, n) => {
			("length" === n || n >= e) && o.push(t)
		}))
	} else switch (void 0 !== n && o.push(s.get(n)), t) {
		case "add":
			K(e) ? oe(n) && o.push(s.get("length")) : (o.push(s.get(We)), G(e) && o.push(s.get(qe)));
			break;
		case "delete":
			K(e) || (o.push(s.get(We)), G(e) && o.push(s.get(qe)));
			break;
		case "set":
			G(e) && o.push(s.get(We))
	}
	if (1 === o.length) o[0] && nt(o[0]);
	else {
		const e = [];
		for (const t of o) t && e.push(...t);
		nt(Pe(e))
	}
}

function nt(e, t) {
	const n = K(e) ? e : [...e];
	for (const e of n) e.computed && rt(e);
	for (const e of n) e.computed || rt(e)
}

function rt(e, t) {
	(e !== Be || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const lt = U("__proto__,__v_isRef,__isVue"),
	it = new Set(Object.getOwnPropertyNames(Symbol)
		.filter((e => "arguments" !== e && "caller" !== e))
		.map((e => Symbol[e]))
		.filter(ee)),
	st = dt(),
	ot = dt(!1, !0),
	at = dt(!0),
	ct = ut();

function ut() {
	const e = {};
	return ["includes", "indexOf", "lastIndexOf"].forEach((t => {
		e[t] = function(...e) {
			const n = Gt(this);
			for (let e = 0, t = this.length; e < t; e++) Ye(n, 0, e + "");
			const r = n[t](...e);
			return -1 === r || !1 === r ? n[t](...e.map(Gt)) : r
		}
	})), ["push", "pop", "shift", "unshift", "splice"].forEach((t => {
		e[t] = function(...e) {
			Je();
			const n = Gt(this)[t].apply(this, e);
			return Xe(), n
		}
	})), e
}

function pt(e) {
	const t = Gt(this);
	return Ye(t, 0, e), t.hasOwnProperty(e)
}

function dt(e = !1, t = !1) {
	return function(n, r, l) {
		if ("__v_isReactive" === r) return !e;
		if ("__v_isReadonly" === r) return e;
		if ("__v_isShallow" === r) return t;
		if ("__v_raw" === r && l === (e ? t ? Nt : Vt : t ? Ft : Mt)
			.get(n)) return n;
		const i = K(n);
		if (!e) {
			if (i && Z(ct, r)) return Reflect.get(ct, r, l);
			if ("hasOwnProperty" === r) return pt
		}
		const s = Reflect.get(n, r, l);
		return (ee(r) ? it.has(r) : lt(r)) ? s : (e || Ye(n, 0, r), t ? s : tn(s) ? i && oe(r) ? s : s.value : te(s) ? e ? Ht(s) : Dt(s) : s)
	}
}

function ht(e = !1) {
	return function(t, n, r, l) {
		let i = t[n];
		if (qt(i) && tn(i) && !tn(r)) return !1;
		if (!e && (Zt(r) || qt(r) || (i = Gt(i), r = Gt(r)), !K(t) && tn(i) && !tn(r))) return i.value = r, !0;
		const s = K(t) && oe(n) ? Number(n) < t.length : Z(t, n),
			o = Reflect.set(t, n, r, l);
		return t === Gt(l) && (s ? me(r, i) && tt(t, "set", n, r) : tt(t, "add", n, r)), o
	}
}
const ft = {
		get: st,
		set: ht(),
		deleteProperty: function(e, t) {
			const n = Z(e, t),
				r = Reflect.deleteProperty(e, t);
			return r && n && tt(e, "delete", t, void 0), r
		},
		has: function(e, t) {
			const n = Reflect.has(e, t);
			return ee(t) && it.has(t) || Ye(e, 0, t), n
		},
		ownKeys: function(e) {
			return Ye(e, 0, K(e) ? "length" : We), Reflect.ownKeys(e)
		}
	},
	gt = {
		get: at,
		set: (e, t) => !0,
		deleteProperty: (e, t) => !0
	},
	mt = B({}, ft, {
		get: ot,
		set: ht(!0)
	}),
	vt = e => e,
	yt = e => Reflect.getPrototypeOf(e);

function bt(e, t, n = !1, r = !1) {
	const l = Gt(e = e.__v_raw),
		i = Gt(t);
	n || (t !== i && Ye(l, 0, t), Ye(l, 0, i));
	const {
		has: s
	} = yt(l), o = r ? vt : n ? Xt : Jt;
	return s.call(l, t) ? o(e.get(t)) : s.call(l, i) ? o(e.get(i)) : void(e !== l && e.get(t))
}

function wt(e, t = !1) {
	const n = this.__v_raw,
		r = Gt(n),
		l = Gt(e);
	return t || (e !== l && Ye(r, 0, e), Ye(r, 0, l)), e === l ? n.has(e) : n.has(e) || n.has(l)
}

function kt(e, t = !1) {
	return e = e.__v_raw, !t && Ye(Gt(e), 0, We), Reflect.get(e, "size", e)
}

function xt(e) {
	e = Gt(e);
	const t = Gt(this);
	return yt(t)
		.has.call(t, e) || (t.add(e), tt(t, "add", e, e)), this
}

function _t(e, t) {
	t = Gt(t);
	const n = Gt(this),
		{
			has: r,
			get: l
		} = yt(n);
	let i = r.call(n, e);
	i || (e = Gt(e), i = r.call(n, e));
	const s = l.call(n, e);
	return n.set(e, t), i ? me(t, s) && tt(n, "set", e, t) : tt(n, "add", e, t), this
}

function $t(e) {
	const t = Gt(this),
		{
			has: n,
			get: r
		} = yt(t);
	let l = n.call(t, e);
	l || (e = Gt(e), l = n.call(t, e)), r && r.call(t, e);
	const i = t.delete(e);
	return l && tt(t, "delete", e, void 0), i
}

function Ct() {
	const e = Gt(this),
		t = 0 !== e.size,
		n = e.clear();
	return t && tt(e, "clear", void 0, void 0), n
}

function St(e, t) {
	return function(n, r) {
		const l = this,
			i = l.__v_raw,
			s = Gt(i),
			o = t ? vt : e ? Xt : Jt;
		return !e && Ye(s, 0, We), i.forEach(((e, t) => n.call(r, o(e), o(t), l)))
	}
}

function At(e, t, n) {
	return function(...r) {
		const l = this.__v_raw,
			i = Gt(l),
			s = G(i),
			o = "entries" === e || e === Symbol.iterator && s,
			a = "keys" === e && s,
			c = l[e](...r),
			u = n ? vt : t ? Xt : Jt;
		return !t && Ye(i, 0, a ? qe : We), {
			next() {
				const {
					value: e,
					done: t
				} = c.next();
				return t ? {
					value: e,
					done: t
				} : {
					value: o ? [u(e[0]), u(e[1])] : u(e),
					done: t
				}
			},
			[Symbol.iterator]() {
				return this
			}
		}
	}
}

function Rt(e) {
	return function(...t) {
		return "delete" !== e && this
	}
}

function Et() {
	const e = {
			get(e) {
				return bt(this, e)
			},
			get size() {
				return kt(this)
			},
			has: wt,
			add: xt,
			set: _t,
			delete: $t,
			clear: Ct,
			forEach: St(!1, !1)
		},
		t = {
			get(e) {
				return bt(this, e, !1, !0)
			},
			get size() {
				return kt(this)
			},
			has: wt,
			add: xt,
			set: _t,
			delete: $t,
			clear: Ct,
			forEach: St(!1, !0)
		},
		n = {
			get(e) {
				return bt(this, e, !0)
			},
			get size() {
				return kt(this, !0)
			},
			has(e) {
				return wt.call(this, e, !0)
			},
			add: Rt("add"),
			set: Rt("set"),
			delete: Rt("delete"),
			clear: Rt("clear"),
			forEach: St(!0, !1)
		},
		r = {
			get(e) {
				return bt(this, e, !0, !0)
			},
			get size() {
				return kt(this, !0)
			},
			has(e) {
				return wt.call(this, e, !0)
			},
			add: Rt("add"),
			set: Rt("set"),
			delete: Rt("delete"),
			clear: Rt("clear"),
			forEach: St(!0, !0)
		};
	return ["keys", "values", "entries", Symbol.iterator].forEach((l => {
		e[l] = At(l, !1, !1), n[l] = At(l, !0, !1), t[l] = At(l, !1, !0), r[l] = At(l, !0, !0)
	})), [e, n, t, r]
}
const [zt, Lt, It, jt] = Et();

function Ot(e, t) {
	const n = t ? e ? jt : It : e ? Lt : zt;
	return (t, r, l) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(Z(n, r) && r in t ? n : t, r, l)
}
const Tt = {
		get: Ot(!1, !1)
	},
	Ut = {
		get: Ot(!1, !0)
	},
	Pt = {
		get: Ot(!0, !1)
	},
	Mt = new WeakMap,
	Ft = new WeakMap,
	Vt = new WeakMap,
	Nt = new WeakMap;

function Dt(e) {
	return qt(e) ? e : Bt(e, !1, ft, Tt, Mt)
}

function Ht(e) {
	return Bt(e, !0, gt, Pt, Vt)
}

function Bt(e, t, n, r, l) {
	if (!te(e)) return e;
	if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
	const i = l.get(e);
	if (i) return i;
	const s = (o = e)
		.__v_skip || !Object.isExtensible(o) ? 0 : function(e) {
			switch (e) {
				case "Object":
				case "Array":
					return 1;
				case "Map":
				case "Set":
				case "WeakMap":
				case "WeakSet":
					return 2;
				default:
					return 0
			}
		}(ie(o));
	var o;
	if (0 === s) return e;
	const a = new Proxy(e, 2 === s ? r : n);
	return l.set(e, a), a
}

function Wt(e) {
	return qt(e) ? Wt(e.__v_raw) : !(!e || !e.__v_isReactive)
}

function qt(e) {
	return !(!e || !e.__v_isReadonly)
}

function Zt(e) {
	return !(!e || !e.__v_isShallow)
}

function Kt(e) {
	return Wt(e) || qt(e)
}

function Gt(e) {
	const t = e && e.__v_raw;
	return t ? Gt(t) : e
}

function Qt(e) {
	return ye(e, "__v_skip", !0), e
}
const Jt = e => te(e) ? Dt(e) : e,
	Xt = e => te(e) ? Ht(e) : e;

function Yt(e) {
	Ge && Be && et((e = Gt(e))
		.dep || (e.dep = Pe()))
}

function en(e, t) {
	const n = (e = Gt(e))
		.dep;
	n && nt(n)
}

function tn(e) {
	return !(!e || !0 !== e.__v_isRef)
}

function nn(e) {
	return ln(e, !1)
}

function rn(e) {
	return ln(e, !0)
}

function ln(e, t) {
	return tn(e) ? e : new sn(e, t)
}
class sn {
	constructor(e, t) {
		this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : Gt(e), this._value = t ? e : Jt(e)
	}
	get value() {
		return Yt(this), this._value
	}
	set value(e) {
		const t = this.__v_isShallow || Zt(e) || qt(e);
		e = t ? e : Gt(e), me(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : Jt(e), en(this))
	}
}

function on(e) {
	return tn(e) ? e.value : e
}
const an = {
	get: (e, t, n) => on(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		const l = e[t];
		return tn(l) && !tn(n) ? (l.value = n, !0) : Reflect.set(e, t, n, r)
	}
};

function cn(e) {
	return Wt(e) ? e : new Proxy(e, an)
}
class un {
	constructor(e, t, n, r) {
		this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ze(e, (() => {
			this._dirty || (this._dirty = !0, en(this))
		})), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n
	}
	get value() {
		const e = Gt(this);
		return Yt(e), !e._dirty && e._cacheable || (e._dirty = !1, e._value = e.effect.run()), e._value
	}
	set value(e) {
		this._setter(e)
	}
}

function pn(e, t, n, r) {
	let l;
	try {
		l = r ? e(...r) : e()
	} catch (e) {
		hn(e, t, n)
	}
	return l
}

function dn(e, t, n, r) {
	if (X(e)) {
		const l = pn(e, t, n, r);
		return l && ne(l) && l.catch((e => {
			hn(e, t, n)
		})), l
	}
	const l = [];
	for (let i = 0; i < e.length; i++) l.push(dn(e[i], t, n, r));
	return l
}

function hn(e, t, n, r = !0) {
	t && t.vnode;
	if (t) {
		let r = t.parent;
		const l = t.proxy,
			i = n;
		for (; r;) {
			const t = r.ec;
			if (t)
				for (let n = 0; n < t.length; n++)
					if (!1 === t[n](e, l, i)) return;
			r = r.parent
		}
		const s = t.appContext.config.errorHandler;
		if (s) return void pn(s, null, 10, [e, l, i])
	}! function(e, t, n, r = !0) {
		console.error(e)
	}(e, 0, 0, r)
}
let fn = !1,
	gn = !1;
const mn = [];
let vn = 0;
const yn = [];
let bn = null,
	wn = 0;
const kn = Promise.resolve();
let xn = null;

function _n(e) {
	const t = xn || kn;
	return e ? t.then(this ? e.bind(this) : e) : t
}

function $n(e) {
	mn.length && mn.includes(e, fn && e.allowRecurse ? vn + 1 : vn) || (null == e.id ? mn.push(e) : mn.splice(function(e) {
		let t = vn + 1,
			n = mn.length;
		for (; t < n;) {
			const r = t + n >>> 1;
			Rn(mn[r]) < e ? t = r + 1 : n = r
		}
		return t
	}(e.id), 0, e), Cn())
}

function Cn() {
	fn || gn || (gn = !0, xn = kn.then(zn))
}

function Sn(e, t = (fn ? vn + 1 : 0)) {
	for (; t < mn.length; t++) {
		const e = mn[t];
		e && e.pre && (mn.splice(t, 1), t--, e())
	}
}

function An(e) {
	if (yn.length) {
		const e = [...new Set(yn)];
		if (yn.length = 0, bn) return void bn.push(...e);
		for (bn = e, bn.sort(((e, t) => Rn(e) - Rn(t))), wn = 0; wn < bn.length; wn++) bn[wn]();
		bn = null, wn = 0
	}
}
const Rn = e => null == e.id ? 1 / 0 : e.id,
	En = (e, t) => {
		const n = Rn(e) - Rn(t);
		if (0 === n) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1
		}
		return n
	};

function zn(e) {
	gn = !1, fn = !0, mn.sort(En);
	try {
		for (vn = 0; vn < mn.length; vn++) {
			const e = mn[vn];
			e && !1 !== e.active && pn(e, null, 14)
		}
	} finally {
		vn = 0, mn.length = 0, An(), fn = !1, xn = null, (mn.length || yn.length) && zn()
	}
}

function Ln(e, t, ...n) {
	if (e.isUnmounted) return;
	const r = e.vnode.props || P;
	let l = n;
	const i = t.startsWith("update:"),
		s = i && t.slice(7);
	if (s && s in r) {
		const e = `${"modelValue"===s?"model":s}Modifiers`,
			{
				number: t,
				trim: i
			} = r[e] || P;
		i && (l = n.map((e => Y(e) ? e.trim() : e))), t && (l = n.map(be))
	}
	let o, a = r[o = ge(t)] || r[o = ge(pe(t))];
	!a && i && (a = r[o = ge(he(t))]), a && dn(a, e, 6, l);
	const c = r[o + "Once"];
	if (c) {
		if (e.emitted) {
			if (e.emitted[o]) return
		} else e.emitted = {};
		e.emitted[o] = !0, dn(c, e, 6, l)
	}
}

function In(e, t, n = !1) {
	const r = t.emitsCache,
		l = r.get(e);
	if (void 0 !== l) return l;
	const i = e.emits;
	let s = {};
	return i ? (K(i) ? i.forEach((e => s[e] = null)) : B(s, i), te(e) && r.set(e, s), s) : (te(e) && r.set(e, null), null)
}

function jn(e, t) {
	return !(!e || !D(t)) && (t = t.slice(2)
		.replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, he(t)) || Z(e, t))
}
let On = null,
	Tn = null;

function Un(e) {
	const t = On;
	return On = e, Tn = e && e.type.__scopeId || null, t
}

function Pn(e) {
	const {
		type: t,
		vnode: n,
		proxy: r,
		withProxy: l,
		props: i,
		propsOptions: [s],
		slots: o,
		attrs: a,
		emit: c,
		render: u,
		renderCache: p,
		data: d,
		setupState: h,
		ctx: f,
		inheritAttrs: g
	} = e;
	let m, v;
	const y = Un(e);
	try {
		if (4 & n.shapeFlag) {
			const e = l || r;
			m = pl(u.call(e, e, p, i, h, d, f)), v = a
		} else {
			const e = t;
			m = pl(e.length > 1 ? e(i, {
				attrs: a,
				slots: o,
				emit: c
			}) : e(i, null)), v = t.props ? a : Mn(a)
		}
	} catch (t) {
		Zr.length = 0, hn(t, e, 1), m = ol(Wr)
	}
	let b = m;
	if (v && !1 !== g) {
		const e = Object.keys(v),
			{
				shapeFlag: t
			} = b;
		e.length && 7 & t && (s && e.some(H) && (v = Fn(v, s)), b = al(b, v))
	}
	return n.dirs && (b = al(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (b.transition = n.transition), m = b, Un(y), m
}
const Mn = e => {
		let t;
		for (const n in e)("class" === n || "style" === n || D(n)) && ((t || (t = {}))[n] = e[n]);
		return t
	},
	Fn = (e, t) => {
		const n = {};
		for (const r in e) H(r) && r.slice(9) in t || (n[r] = e[r]);
		return n
	};

function Vn(e, t, n) {
	const r = Object.keys(t);
	if (r.length !== Object.keys(e)
		.length) return !0;
	for (let l = 0; l < r.length; l++) {
		const i = r[l];
		if (t[i] !== e[i] && !jn(n, i)) return !0
	}
	return !1
}

function Nn(e, t) {
	return Bn(e, null, t)
}
const Dn = {};

function Hn(e, t, n) {
	return Bn(e, t, n)
}

function Bn(e, t, {
	immediate: n,
	deep: r,
	flush: l,
	onTrack: i,
	onTrigger: s
} = P) {
	var o;
	const a = Ue() === (null == (o = vl) ? void 0 : o.scope) ? vl : null;
	let c, u, p = !1,
		d = !1;
	if (tn(e) ? (c = () => e.value, p = Zt(e)) : Wt(e) ? (c = () => e, r = !0) : K(e) ? (d = !0, p = e.some((e => Wt(e) || Zt(e))), c = () => e.map((e => tn(e) ? e.value : Wt(e) ? Wn(e) : X(e) ? pn(e, a, 2) : void 0))) : c = X(e) ? t ? () => pn(e, a, 2) : () => {
		if (!a || !a.isUnmounted) return u && u(), dn(e, a, 3, [f])
	} : F, t && r) {
		const e = c;
		c = () => Wn(e())
	}
	let h, f = e => {
		u = y.onStop = () => {
			pn(e, a, 4)
		}
	};
	if (Sl) {
		if (f = F, t ? n && dn(t, a, 3, [c(), d ? [] : void 0, f]) : c(), "sync" !== l) return F; {
			const e = jl();
			h = e.__watcherHandles || (e.__watcherHandles = [])
		}
	}
	let g = d ? new Array(e.length)
		.fill(Dn) : Dn;
	const m = () => {
		if (y.active)
			if (t) {
				const e = y.run();
				(r || p || (d ? e.some(((e, t) => me(e, g[t]))) : me(e, g))) && (u && u(), dn(t, a, 3, [e, g === Dn ? void 0 : d && g[0] === Dn ? [] : g, f]), g = e)
			} else y.run()
	};
	let v;
	m.allowRecurse = !!t, "sync" === l ? v = m : "post" === l ? v = () => Fr(m, a && a.suspense) : (m.pre = !0, a && (m.id = a.uid), v = () => $n(m));
	const y = new Ze(c, v);
	t ? n ? m() : g = y.run() : "post" === l ? Fr(y.run.bind(y), a && a.suspense) : y.run();
	const b = () => {
		y.stop(), a && a.scope && W(a.scope.effects, y)
	};
	return h && h.push(b), b
}

function Wn(e, t) {
	if (!te(e) || e.__v_skip) return e;
	if ((t = t || new Set)
		.has(e)) return e;
	if (t.add(e), tn(e)) Wn(e.value, t);
	else if (K(e))
		for (let n = 0; n < e.length; n++) Wn(e[n], t);
	else if (Q(e) || G(e)) e.forEach((e => {
		Wn(e, t)
	}));
	else if (se(e))
		for (const n in e) Wn(e[n], t);
	return e
}

function qn(e, t) {
	const n = On;
	if (null === n) return e;
	const r = El(n) || n.proxy,
		l = e.dirs || (e.dirs = []);
	for (let e = 0; e < t.length; e++) {
		let [n, i, s, o = P] = t[e];
		n && (X(n) && (n = {
			mounted: n,
			updated: n
		}), n.deep && Wn(i), l.push({
			dir: n,
			instance: r,
			value: i,
			oldValue: void 0,
			arg: s,
			modifiers: o
		}))
	}
	return e
}

function Zn(e, t, n, r) {
	const l = e.dirs,
		i = t && t.dirs;
	for (let s = 0; s < l.length; s++) {
		const o = l[s];
		i && (o.oldValue = i[s].value);
		let a = o.dir[r];
		a && (Je(), dn(a, n, 8, [e.el, o, e, t]), Xe())
	}
}

function Kn(e, t) {
	return X(e) ? (() => B({
		name: e.name
	}, t, {
		setup: e
	}))() : e
}
const Gn = e => !!e.type.__asyncLoader,
	Qn = e => e.type.__isKeepAlive;
const Jn = e => (t, n = vl) => (!Sl || "sp" === e) && function(e, t, n = vl, r = !1) {
		if (n) {
			const l = n[e] || (n[e] = []),
				i = t.__weh || (t.__weh = (...r) => {
					if (n.isUnmounted) return;
					Je(), xl(n);
					const l = dn(t, n, e, r);
					return _l(), Xe(), l
				});
			return r ? l.unshift(i) : l.push(i), i
		}
	}(e, ((...e) => t(...e)), n),
	Xn = Jn("m"),
	Yn = Jn("bum"),
	er = Jn("um"),
	tr = "components";

function nr(e, t) {
	return function(e, t, n = !0, r = !1) {
		const l = On || vl;
		if (l) {
			const n = l.type;
			if (e === tr) {
				const e = function(e, t = !0) {
					return X(e) ? e.displayName || e.name : e.name || t && e.__name
				}(n, !1);
				if (e && (e === t || e === pe(t) || e === fe(pe(t)))) return n
			}
			const i = lr(l[e] || n[e], t) || lr(l.appContext[e], t);
			return !i && r ? n : i
		}
	}(tr, e, !0, t) || e
}
const rr = Symbol.for("v-ndc");

function lr(e, t) {
	return e && (e[t] || e[pe(t)] || e[fe(pe(t))])
}

function ir(e, t, n, r) {
	let l;
	const i = n && n[r];
	if (K(e) || Y(e)) {
		l = new Array(e.length);
		for (let n = 0, r = e.length; n < r; n++) l[n] = t(e[n], n, void 0, i && i[n])
	} else if ("number" == typeof e) {
		l = new Array(e);
		for (let n = 0; n < e; n++) l[n] = t(n + 1, n, void 0, i && i[n])
	} else if (te(e))
		if (e[Symbol.iterator]) l = Array.from(e, ((e, n) => t(e, n, void 0, i && i[n])));
		else {
			const n = Object.keys(e);
			l = new Array(n.length);
			for (let r = 0, s = n.length; r < s; r++) {
				const s = n[r];
				l[r] = t(e[s], s, r, i && i[r])
			}
		}
	else l = [];
	return n && (n[r] = l), l
}
const sr = e => e ? $l(e) ? El(e) || e.proxy : sr(e.parent) : null,
	or = B(Object.create(null), {
		$: e => e,
		$el: e => e.vnode.el,
		$data: e => e.data,
		$props: e => e.props,
		$attrs: e => e.attrs,
		$slots: e => e.slots,
		$refs: e => e.refs,
		$parent: e => sr(e.parent),
		$root: e => sr(e.root),
		$emit: e => e.emit,
		$options: e => e.type,
		$forceUpdate: e => e.f || (e.f = () => $n(e.update)),
		$nextTick: e => e.n || (e.n = _n.bind(e.proxy)),
		$watch: e => F
	}),
	ar = (e, t) => e !== P && !e.__isScriptSetup && Z(e, t),
	cr = {
		get({
			_: e
		}, t) {
			const {
				ctx: n,
				setupState: r,
				data: l,
				props: i,
				accessCache: s,
				type: o,
				appContext: a
			} = e;
			let c;
			if ("$" !== t[0]) {
				const o = s[t];
				if (void 0 !== o) switch (o) {
					case 1:
						return r[t];
					case 2:
						return l[t];
					case 4:
						return n[t];
					case 3:
						return i[t]
				} else {
					if (ar(r, t)) return s[t] = 1, r[t];
					if (l !== P && Z(l, t)) return s[t] = 2, l[t];
					if ((c = e.propsOptions[0]) && Z(c, t)) return s[t] = 3, i[t];
					if (n !== P && Z(n, t)) return s[t] = 4, n[t];
					s[t] = 0
				}
			}
			const u = or[t];
			let p, d;
			return u ? ("$attrs" === t && Ye(e, 0, t), u(e)) : (p = o.__cssModules) && (p = p[t]) ? p : n !== P && Z(n, t) ? (s[t] = 4, n[t]) : (d = a.config.globalProperties, Z(d, t) ? d[t] : void 0)
		},
		set({
			_: e
		}, t, n) {
			const {
				data: r,
				setupState: l,
				ctx: i
			} = e;
			return ar(l, t) ? (l[t] = n, !0) : r !== P && Z(r, t) ? (r[t] = n, !0) : !Z(e.props, t) && (("$" !== t[0] || !(t.slice(1) in e)) && (i[t] = n, !0))
		},
		has({
			_: {
				data: e,
				setupState: t,
				accessCache: n,
				ctx: r,
				appContext: l,
				propsOptions: i
			}
		}, s) {
			let o;
			return !!n[s] || e !== P && Z(e, s) || ar(t, s) || (o = i[0]) && Z(o, s) || Z(r, s) || Z(or, s) || Z(l.config.globalProperties, s)
		},
		defineProperty(e, t, n) {
			return null != n.get ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
		}
	};

function ur(e) {
	return K(e) ? e.reduce(((e, t) => (e[t] = null, e)), {}) : e
}

function pr(e, t, n, r = !1) {
	const {
		mixins: l,
		extends: i
	} = t;
	i && pr(e, i, n, !0), l && l.forEach((t => pr(e, t, n, !0)));
	for (const l in t)
		if (r && "expose" === l);
		else {
			const r = dr[l] || n && n[l];
			e[l] = r ? r(e[l], t[l]) : t[l]
		} return e
}
const dr = {
	data: hr,
	props: vr,
	emits: vr,
	methods: mr,
	computed: mr,
	beforeCreate: gr,
	created: gr,
	beforeMount: gr,
	mounted: gr,
	beforeUpdate: gr,
	updated: gr,
	beforeDestroy: gr,
	beforeUnmount: gr,
	destroyed: gr,
	unmounted: gr,
	activated: gr,
	deactivated: gr,
	errorCaptured: gr,
	serverPrefetch: gr,
	components: mr,
	directives: mr,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		const n = B(Object.create(null), e);
		for (const r in t) n[r] = gr(e[r], t[r]);
		return n
	},
	provide: hr,
	inject: function(e, t) {
		return mr(fr(e), fr(t))
	}
};

function hr(e, t) {
	return t ? e ? function() {
		return B(X(e) ? e.call(this, this) : e, X(t) ? t.call(this, this) : t)
	} : t : e
}

function fr(e) {
	if (K(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t
	}
	return e
}

function gr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t
}

function mr(e, t) {
	return e ? B(Object.create(null), e, t) : t
}

function vr(e, t) {
	return e ? K(e) && K(t) ? [...new Set([...e, ...t])] : B(Object.create(null), ur(e), ur(null != t ? t : {})) : t
}

function yr() {
	return {
		app: null,
		config: {
			isNativeTag: V,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap,
		propsCache: new WeakMap,
		emitsCache: new WeakMap
	}
}
let br = 0;

function wr(e, t) {
	return function(n, r = null) {
		X(n) || (n = B({}, n)), null == r || te(r) || (r = null);
		const l = yr(),
			i = new Set;
		let s = !1;
		const o = l.app = {
			_uid: br++,
			_component: n,
			_props: r,
			_container: null,
			_context: l,
			_instance: null,
			version: Ol,
			get config() {
				return l.config
			},
			set config(e) {},
			use: (e, ...t) => (i.has(e) || (e && X(e.install) ? (i.add(e), e.install(o, ...t)) : X(e) && (i.add(e), e(o, ...t))), o),
			mixin: e => o,
			component: (e, t) => t ? (l.components[e] = t, o) : l.components[e],
			directive: (e, t) => t ? (l.directives[e] = t, o) : l.directives[e],
			mount(i, a, c) {
				if (!s) {
					const u = ol(n, r);
					return u.appContext = l, a && t ? t(u, i) : e(u, i, c), s = !0, o._container = i, i.__vue_app__ = o, El(u.component) || u.component.proxy
				}
			},
			unmount() {
				s && (e(null, o._container), delete o._container.__vue_app__)
			},
			provide: (e, t) => (l.provides[e] = t, o),
			runWithContext(e) {
				kr = o;
				try {
					return e()
				} finally {
					kr = null
				}
			}
		};
		return o
	}
}
let kr = null;

function xr(e, t, n = !1) {
	const r = vl || On;
	if (r || kr) {
		const l = r ? null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : kr._context.provides;
		if (l && e in l) return l[e];
		if (arguments.length > 1) return n && X(t) ? t.call(r && r.proxy) : t
	}
}

function _r(e, t, n, r = !1) {
	const l = {},
		i = {};
	ye(i, rl, 1), e.propsDefaults = Object.create(null), $r(e, t, l, i);
	for (const t in e.propsOptions[0]) t in l || (l[t] = void 0);
	n ? e.props = r ? l : Bt(l, !1, mt, Ut, Ft) : e.type.props ? e.props = l : e.props = i, e.attrs = i
}

function $r(e, t, n, r) {
	const [l, i] = e.propsOptions;
	let s, o = !1;
	if (t)
		for (let a in t) {
			if (ae(a)) continue;
			const c = t[a];
			let u;
			l && Z(l, u = pe(a)) ? i && i.includes(u) ? (s || (s = {}))[u] = c : n[u] = c : jn(e.emitsOptions, a) || a in r && c === r[a] || (r[a] = c, o = !0)
		}
	if (i) {
		const t = Gt(n),
			r = s || P;
		for (let s = 0; s < i.length; s++) {
			const o = i[s];
			n[o] = Cr(l, t, o, r[o], e, !Z(r, o))
		}
	}
	return o
}

function Cr(e, t, n, r, l, i) {
	const s = e[n];
	if (null != s) {
		const e = Z(s, "default");
		if (e && void 0 === r) {
			const e = s.default;
			if (s.type !== Function && !s.skipFactory && X(e)) {
				const {
					propsDefaults: i
				} = l;
				n in i ? r = i[n] : (xl(l), r = i[n] = e.call(null, t), _l())
			} else r = e
		}
		s[0] && (i && !e ? r = !1 : !s[1] || "" !== r && r !== he(n) || (r = !0))
	}
	return r
}

function Sr(e, t, n = !1) {
	const r = t.propsCache,
		l = r.get(e);
	if (l) return l;
	const i = e.props,
		s = {},
		o = [];
	if (!i) return te(e) && r.set(e, M), M;
	if (K(i))
		for (let e = 0; e < i.length; e++) {
			const t = pe(i[e]);
			Ar(t) && (s[t] = P)
		} else if (i)
			for (const e in i) {
				const t = pe(e);
				if (Ar(t)) {
					const n = i[e],
						r = s[t] = K(n) || X(n) ? {
							type: n
						} : B({}, n);
					if (r) {
						const e = zr(Boolean, r.type),
							n = zr(String, r.type);
						r[0] = e > -1, r[1] = n < 0 || e < n, (e > -1 || Z(r, "default")) && o.push(t)
					}
				}
			}
	const a = [s, o];
	return te(e) && r.set(e, a), a
}

function Ar(e) {
	return "$" !== e[0]
}

function Rr(e) {
	const t = e && e.toString()
		.match(/^\s*(function|class) (\w+)/);
	return t ? t[2] : null === e ? "null" : ""
}

function Er(e, t) {
	return Rr(e) === Rr(t)
}

function zr(e, t) {
	return K(t) ? t.findIndex((t => Er(t, e))) : X(t) && Er(t, e) ? 0 : -1
}
const Lr = e => "_" === e[0] || "$stable" === e,
	Ir = e => K(e) ? e.map(pl) : [pl(e)],
	jr = (e, t, n) => {
		if (t._n) return t;
		const r = function(e, t = On, n) {
			if (!t) return e;
			if (e._n) return e;
			const r = (...n) => {
				r._d && Jr(-1);
				const l = Un(t);
				let i;
				try {
					i = e(...n)
				} finally {
					Un(l), r._d && Jr(1)
				}
				return i
			};
			return r._n = !0, r._c = !0, r._d = !0, r
		}(((...e) => Ir(t(...e))), n);
		return r._c = !1, r
	},
	Or = (e, t, n) => {
		const r = e._ctx;
		for (const n in e) {
			if (Lr(n)) continue;
			const l = e[n];
			if (X(l)) t[n] = jr(0, l, r);
			else if (null != l) {
				const e = Ir(l);
				t[n] = () => e
			}
		}
	},
	Tr = (e, t) => {
		const n = Ir(t);
		e.slots.default = () => n
	},
	Ur = (e, t) => {
		if (32 & e.vnode.shapeFlag) {
			const n = t._;
			n ? (e.slots = Gt(t), ye(t, "_", n)) : Or(t, e.slots = {})
		} else e.slots = {}, t && Tr(e, t);
		ye(e.slots, rl, 1)
	},
	Pr = (e, t, n) => {
		const {
			vnode: r,
			slots: l
		} = e;
		let i = !0,
			s = P;
		if (32 & r.shapeFlag) {
			const e = t._;
			e ? n && 1 === e ? i = !1 : (B(l, t), n || 1 !== e || delete l._) : (i = !t.$stable, Or(t, l)), s = t
		} else t && (Tr(e, t), s = {
			default: 1
		});
		if (i)
			for (const e in l) Lr(e) || e in s || delete l[e]
	};

function Mr(e, t, n, r, l = !1) {
	if (K(e)) return void e.forEach(((e, i) => Mr(e, t && (K(t) ? t[i] : t), n, r, l)));
	if (Gn(r) && !l) return;
	const i = 4 & r.shapeFlag ? El(r.component) || r.component.proxy : r.el,
		s = l ? null : i,
		{
			i: o,
			r: a
		} = e,
		c = t && t.r,
		u = o.refs === P ? o.refs = {} : o.refs,
		p = o.setupState;
	if (null != c && c !== a && (Y(c) ? (u[c] = null, Z(p, c) && (p[c] = null)) : tn(c) && (c.value = null)), X(a)) pn(a, o, 12, [s, u]);
	else {
		const t = Y(a),
			r = tn(a);
		if (t || r) {
			const o = () => {
				if (e.f) {
					const n = t ? Z(p, a) ? p[a] : u[a] : a.value;
					l ? K(n) && W(n, i) : K(n) ? n.includes(i) || n.push(i) : t ? (u[a] = [i], Z(p, a) && (p[a] = u[a])) : (a.value = [i], e.k && (u[e.k] = a.value))
				} else t ? (u[a] = s, Z(p, a) && (p[a] = s)) : r && (a.value = s, e.k && (u[e.k] = s))
			};
			s ? (o.id = -1, Fr(o, n)) : o()
		}
	}
}
const Fr = function(e, t) {
	var n;
	t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : (K(n = e) ? yn.push(...n) : bn && bn.includes(n, n.allowRecurse ? wn + 1 : wn) || yn.push(n), Cn())
};

function Vr(e) {
	return function(e, t) {
		ke()
			.__VUE__ = !0;
		const {
			insert: n,
			remove: r,
			patchProp: l,
			createElement: i,
			createText: s,
			createComment: o,
			setText: a,
			setElementText: c,
			parentNode: u,
			nextSibling: p,
			setScopeId: d = F,
			insertStaticContent: h
		} = e, f = (e, t, n, r = null, l = null, i = null, s = !1, o = null, a = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !nl(e, t) && (r = W(e), V(e, l, i, !0), e = null), -2 === t.patchFlag && (a = !1, t.dynamicChildren = null);
			const {
				type: c,
				ref: u,
				shapeFlag: p
			} = t;
			switch (c) {
				case Br:
					g(e, t, n, r);
					break;
				case Wr:
					m(e, t, n, r);
					break;
				case qr:
					null == e && v(t, n, r, s);
					break;
				case Hr:
					A(e, t, n, r, l, i, s, o, a);
					break;
				default:
					1 & p ? w(e, t, n, r, l, i, s, o, a) : 6 & p ? R(e, t, n, r, l, i, s, o, a) : (64 & p || 128 & p) && c.process(e, t, n, r, l, i, s, o, a, K)
			}
			null != u && l && Mr(u, e && e.ref, i, t || e, !t)
		}, g = (e, t, r, l) => {
			if (null == e) n(t.el = s(t.children), r, l);
			else {
				const n = t.el = e.el;
				t.children !== e.children && a(n, t.children)
			}
		}, m = (e, t, r, l) => {
			null == e ? n(t.el = o(t.children || ""), r, l) : t.el = e.el
		}, v = (e, t, n, r) => {
			[e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor)
		}, y = ({
			el: e,
			anchor: t
		}, r, l) => {
			let i;
			for (; e && e !== t;) i = p(e), n(e, r, l), e = i;
			n(t, r, l)
		}, b = ({
			el: e,
			anchor: t
		}) => {
			let n;
			for (; e && e !== t;) n = p(e), r(e), e = n;
			r(t)
		}, w = (e, t, n, r, l, i, s, o, a) => {
			s = s || "svg" === t.type, null == e ? k(t, n, r, l, i, s, o, a) : $(e, t, l, i, s, o, a)
		}, k = (e, t, r, s, o, a, u, p) => {
			let d, h;
			const {
				type: f,
				props: g,
				shapeFlag: m,
				transition: v,
				dirs: y
			} = e;
			if (d = e.el = i(e.type, a, g && g.is, g), 8 & m ? c(d, e.children) : 16 & m && _(e.children, d, null, s, o, a && "foreignObject" !== f, u, p), y && Zn(e, null, s, "created"), x(d, e, e.scopeId, u, s), g) {
				for (const t in g) "value" === t || ae(t) || l(d, t, null, g[t], a, e.children, s, o, B);
				"value" in g && l(d, "value", null, g.value), (h = g.onVnodeBeforeMount) && fl(h, s, e)
			}
			y && Zn(e, null, s, "beforeMount");
			const b = (!o || o && !o.pendingBranch) && v && !v.persisted;
			b && v.beforeEnter(d), n(d, t, r), ((h = g && g.onVnodeMounted) || b || y) && Fr((() => {
				h && fl(h, s, e), b && v.enter(d), y && Zn(e, null, s, "mounted")
			}), o)
		}, x = (e, t, n, r, l) => {
			if (n && d(e, n), r)
				for (let t = 0; t < r.length; t++) d(e, r[t]);
			if (l) {
				if (t === l.subTree) {
					const t = l.vnode;
					x(e, t, t.scopeId, t.slotScopeIds, l.parent)
				}
			}
		}, _ = (e, t, n, r, l, i, s, o, a = 0) => {
			for (let c = a; c < e.length; c++) {
				const a = e[c] = o ? dl(e[c]) : pl(e[c]);
				f(null, a, t, n, r, l, i, s, o)
			}
		}, $ = (e, t, n, r, i, s, o) => {
			const a = t.el = e.el;
			let {
				patchFlag: u,
				dynamicChildren: p,
				dirs: d
			} = t;
			u |= 16 & e.patchFlag;
			const h = e.props || P,
				f = t.props || P;
			let g;
			n && Nr(n, !1), (g = f.onVnodeBeforeUpdate) && fl(g, n, t, e), d && Zn(t, e, n, "beforeUpdate"), n && Nr(n, !0);
			const m = i && "foreignObject" !== t.type;
			if (p ? C(e.dynamicChildren, p, a, n, r, m, s) : o || j(e, t, a, null, n, r, m, s, !1), u > 0) {
				if (16 & u) S(a, t, h, f, n, r, i);
				else if (2 & u && h.class !== f.class && l(a, "class", null, f.class, i), 4 & u && l(a, "style", h.style, f.style, i), 8 & u) {
					const s = t.dynamicProps;
					for (let t = 0; t < s.length; t++) {
						const o = s[t],
							c = h[o],
							u = f[o];
						u === c && "value" !== o || l(a, o, c, u, i, e.children, n, r, B)
					}
				}
				1 & u && e.children !== t.children && c(a, t.children)
			} else o || null != p || S(a, t, h, f, n, r, i);
			((g = f.onVnodeUpdated) || d) && Fr((() => {
				g && fl(g, n, t, e), d && Zn(t, e, n, "updated")
			}), r)
		}, C = (e, t, n, r, l, i, s) => {
			for (let o = 0; o < t.length; o++) {
				const a = e[o],
					c = t[o],
					p = a.el && (a.type === Hr || !nl(a, c) || 70 & a.shapeFlag) ? u(a.el) : n;
				f(a, c, p, null, r, l, i, s, !0)
			}
		}, S = (e, t, n, r, i, s, o) => {
			if (n !== r) {
				if (n !== P)
					for (const a in n) ae(a) || a in r || l(e, a, n[a], null, o, t.children, i, s, B);
				for (const a in r) {
					if (ae(a)) continue;
					const c = r[a],
						u = n[a];
					c !== u && "value" !== a && l(e, a, u, c, o, t.children, i, s, B)
				}
				"value" in r && l(e, "value", n.value, r.value)
			}
		}, A = (e, t, r, l, i, o, a, c, u) => {
			const p = t.el = e ? e.el : s(""),
				d = t.anchor = e ? e.anchor : s("");
			let {
				patchFlag: h,
				dynamicChildren: f,
				slotScopeIds: g
			} = t;
			g && (c = c ? c.concat(g) : g), null == e ? (n(p, r, l), n(d, r, l), _(t.children, r, d, i, o, a, c, u)) : h > 0 && 64 & h && f && e.dynamicChildren ? (C(e.dynamicChildren, f, r, i, o, a, c), (null != t.key || i && t === i.subTree) && Dr(e, t, !0)) : j(e, t, r, d, i, o, a, c, u)
		}, R = (e, t, n, r, l, i, s, o, a) => {
			t.slotScopeIds = o, null == e ? 512 & t.shapeFlag ? l.ctx.activate(t, n, r, s, a) : E(t, n, r, l, i, s, a) : z(e, t, a)
		}, E = (e, t, n, r, l, i, s) => {
			const o = e.component = function(e, t, n) {
				const r = e.type,
					l = (t ? t.appContext : e.appContext) || gl,
					i = {
						uid: ml++,
						vnode: e,
						type: r,
						parent: t,
						appContext: l,
						root: null,
						next: null,
						subTree: null,
						effect: null,
						update: null,
						scope: new Te(!0),
						render: null,
						proxy: null,
						exposed: null,
						exposeProxy: null,
						withProxy: null,
						provides: t ? t.provides : Object.create(l.provides),
						accessCache: null,
						renderCache: [],
						components: null,
						directives: null,
						propsOptions: Sr(r, l),
						emitsOptions: In(r, l),
						emit: null,
						emitted: null,
						propsDefaults: P,
						inheritAttrs: r.inheritAttrs,
						ctx: P,
						data: P,
						props: P,
						attrs: P,
						slots: P,
						refs: P,
						setupState: P,
						setupContext: null,
						attrsProxy: null,
						slotsProxy: null,
						suspense: n,
						suspenseId: n ? n.pendingId : 0,
						asyncDep: null,
						asyncResolved: !1,
						isMounted: !1,
						isUnmounted: !1,
						isDeactivated: !1,
						bc: null,
						c: null,
						bm: null,
						m: null,
						bu: null,
						u: null,
						um: null,
						bum: null,
						da: null,
						a: null,
						rtg: null,
						rtc: null,
						ec: null,
						sp: null
					};
				i.ctx = {
					_: i
				}, i.root = t ? t.root : i, i.emit = Ln.bind(null, i), e.ce && e.ce(i);
				return i
			}(e, r, l);
			if (Qn(e) && (o.ctx.renderer = K), function(e, t = !1) {
				Sl = t;
				const {
					props: n,
					children: r
				} = e.vnode, l = $l(e);
				_r(e, n, l, t), Ur(e, r);
				const i = l ? function(e, t) {
					const n = e.type;
					e.accessCache = Object.create(null), e.proxy = Qt(new Proxy(e.ctx, cr));
					const {
						setup: r
					} = n;
					if (r) {
						const n = e.setupContext = r.length > 1 ? function(e) {
							const t = t => {
								e.exposed = t || {}
							};
							return {
								get attrs() {
									return function(e) {
										return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
											get: (t, n) => (Ye(e, 0, "$attrs"), t[n])
										}))
									}(e)
								},
								slots: e.slots,
								emit: e.emit,
								expose: t
							}
						}(e) : null;
						xl(e), Je();
						const l = pn(r, e, 0, [e.props, n]);
						if (Xe(), _l(), ne(l)) {
							if (l.then(_l, _l), t) return l.then((n => {
									Al(e, n, t)
								}))
								.catch((t => {
									hn(t, e, 0)
								}));
							e.asyncDep = l
						} else Al(e, l, t)
					} else Rl(e, t)
				}(e, t) : void 0;
				Sl = !1
			}(o), o.asyncDep) {
				if (l && l.registerDep(o, L), !e.el) {
					const e = o.subTree = ol(Wr);
					m(null, e, t, n)
				}
			} else L(o, e, t, n, l, i, s)
		}, z = (e, t, n) => {
			const r = t.component = e.component;
			if (function(e, t, n) {
				const {
					props: r,
					children: l,
					component: i
				} = e, {
					props: s,
					children: o,
					patchFlag: a
				} = t, c = i.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!(n && a >= 0)) return !(!l && !o || o && o.$stable) || r !== s && (r ? !s || Vn(r, s, c) : !!s);
				if (1024 & a) return !0;
				if (16 & a) return r ? Vn(r, s, c) : !!s;
				if (8 & a) {
					const e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						const n = e[t];
						if (s[n] !== r[n] && !jn(c, n)) return !0
					}
				}
				return !1
			}(e, t, n)) {
				if (r.asyncDep && !r.asyncResolved) return void I(r, t, n);
				r.next = t,
					function(e) {
						const t = mn.indexOf(e);
						t > vn && mn.splice(t, 1)
					}(r.update), r.update()
			} else t.el = e.el, r.vnode = t
		}, L = (e, t, n, r, l, i, s) => {
			const o = () => {
					if (e.isMounted) {
						let t, {
								next: n,
								bu: r,
								u: o,
								parent: a,
								vnode: c
							} = e,
							p = n;
						Nr(e, !1), n ? (n.el = c.el, I(e, n, s)) : n = c, r && ve(r), (t = n.props && n.props.onVnodeBeforeUpdate) && fl(t, a, n, c), Nr(e, !0);
						const d = Pn(e),
							h = e.subTree;
						e.subTree = d, f(h, d, u(h.el), W(h), e, l, i), n.el = d.el, null === p && function({
							vnode: e,
							parent: t
						}, n) {
							for (; t && t.subTree === e;)(e = t.vnode)
								.el = n, t = t.parent
						}(e, d.el), o && Fr(o, l), (t = n.props && n.props.onVnodeUpdated) && Fr((() => fl(t, a, n, c)), l)
					} else {
						let s;
						const {
							el: o,
							props: a
						} = t, {
							bm: c,
							m: u,
							parent: p
						} = e, d = Gn(t);
						if (Nr(e, !1), c && ve(c), !d && (s = a && a.onVnodeBeforeMount) && fl(s, p, t), Nr(e, !0), o && Q) {
							const n = () => {
								e.subTree = Pn(e), Q(o, e.subTree, e, l, null)
							};
							d ? t.type.__asyncLoader()
								.then((() => !e.isUnmounted && n())) : n()
						} else {
							const s = e.subTree = Pn(e);
							f(null, s, n, r, e, l, i), t.el = s.el
						}
						if (u && Fr(u, l), !d && (s = a && a.onVnodeMounted)) {
							const e = t;
							Fr((() => fl(s, p, e)), l)
						}(256 & t.shapeFlag || p && Gn(p.vnode) && 256 & p.vnode.shapeFlag) && e.a && Fr(e.a, l), e.isMounted = !0, t = n = r = null
					}
				},
				a = e.effect = new Ze(o, (() => $n(c)), e.scope),
				c = e.update = () => a.run();
			c.id = e.uid, Nr(e, !0), c()
		}, I = (e, t, n) => {
			t.component = e;
			const r = e.vnode.props;
			e.vnode = t, e.next = null,
				function(e, t, n, r) {
					const {
						props: l,
						attrs: i,
						vnode: {
							patchFlag: s
						}
					} = e, o = Gt(l), [a] = e.propsOptions;
					let c = !1;
					if (!(r || s > 0) || 16 & s) {
						let r;
						$r(e, t, l, i) && (c = !0);
						for (const i in o) t && (Z(t, i) || (r = he(i)) !== i && Z(t, r)) || (a ? !n || void 0 === n[i] && void 0 === n[r] || (l[i] = Cr(a, o, i, void 0, e, !0)) : delete l[i]);
						if (i !== o)
							for (const e in i) t && Z(t, e) || (delete i[e], c = !0)
					} else if (8 & s) {
						const n = e.vnode.dynamicProps;
						for (let r = 0; r < n.length; r++) {
							let s = n[r];
							if (jn(e.emitsOptions, s)) continue;
							const u = t[s];
							if (a)
								if (Z(i, s)) u !== i[s] && (i[s] = u, c = !0);
								else {
									const t = pe(s);
									l[t] = Cr(a, o, t, u, e, !1)
								}
							else u !== i[s] && (i[s] = u, c = !0)
						}
					}
					c && tt(e, "set", "$attrs")
				}(e, t.props, r, n), Pr(e, t.children, n), Je(), Sn(), Xe()
		}, j = (e, t, n, r, l, i, s, o, a = !1) => {
			const u = e && e.children,
				p = e ? e.shapeFlag : 0,
				d = t.children,
				{
					patchFlag: h,
					shapeFlag: f
				} = t;
			if (h > 0) {
				if (128 & h) return void T(u, d, n, r, l, i, s, o, a);
				if (256 & h) return void O(u, d, n, r, l, i, s, o, a)
			}
			8 & f ? (16 & p && B(u, l, i), d !== u && c(n, d)) : 16 & p ? 16 & f ? T(u, d, n, r, l, i, s, o, a) : B(u, l, i, !0) : (8 & p && c(n, ""), 16 & f && _(d, n, r, l, i, s, o, a))
		}, O = (e, t, n, r, l, i, s, o, a) => {
			t = t || M;
			const c = (e = e || M)
				.length,
				u = t.length,
				p = Math.min(c, u);
			let d;
			for (d = 0; d < p; d++) {
				const r = t[d] = a ? dl(t[d]) : pl(t[d]);
				f(e[d], r, n, null, l, i, s, o, a)
			}
			c > u ? B(e, l, i, !0, !1, p) : _(t, n, r, l, i, s, o, a, p)
		}, T = (e, t, n, r, l, i, s, o, a) => {
			let c = 0;
			const u = t.length;
			let p = e.length - 1,
				d = u - 1;
			for (; c <= p && c <= d;) {
				const r = e[c],
					u = t[c] = a ? dl(t[c]) : pl(t[c]);
				if (!nl(r, u)) break;
				f(r, u, n, null, l, i, s, o, a), c++
			}
			for (; c <= p && c <= d;) {
				const r = e[p],
					c = t[d] = a ? dl(t[d]) : pl(t[d]);
				if (!nl(r, c)) break;
				f(r, c, n, null, l, i, s, o, a), p--, d--
			}
			if (c > p) {
				if (c <= d) {
					const e = d + 1,
						p = e < u ? t[e].el : r;
					for (; c <= d;) f(null, t[c] = a ? dl(t[c]) : pl(t[c]), n, p, l, i, s, o, a), c++
				}
			} else if (c > d)
				for (; c <= p;) V(e[c], l, i, !0), c++;
			else {
				const h = c,
					g = c,
					m = new Map;
				for (c = g; c <= d; c++) {
					const e = t[c] = a ? dl(t[c]) : pl(t[c]);
					null != e.key && m.set(e.key, c)
				}
				let v, y = 0;
				const b = d - g + 1;
				let w = !1,
					k = 0;
				const x = new Array(b);
				for (c = 0; c < b; c++) x[c] = 0;
				for (c = h; c <= p; c++) {
					const r = e[c];
					if (y >= b) {
						V(r, l, i, !0);
						continue
					}
					let u;
					if (null != r.key) u = m.get(r.key);
					else
						for (v = g; v <= d; v++)
							if (0 === x[v - g] && nl(r, t[v])) {
								u = v;
								break
							} void 0 === u ? V(r, l, i, !0) : (x[u - g] = c + 1, u >= k ? k = u : w = !0, f(r, t[u], n, null, l, i, s, o, a), y++)
				}
				const _ = w ? function(e) {
					const t = e.slice(),
						n = [0];
					let r, l, i, s, o;
					const a = e.length;
					for (r = 0; r < a; r++) {
						const a = e[r];
						if (0 !== a) {
							if (l = n[n.length - 1], e[l] < a) {
								t[r] = l, n.push(r);
								continue
							}
							for (i = 0, s = n.length - 1; i < s;) o = i + s >> 1, e[n[o]] < a ? i = o + 1 : s = o;
							a < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
						}
					}
					i = n.length, s = n[i - 1];
					for (; i-- > 0;) n[i] = s, s = t[s];
					return n
				}(x) : M;
				for (v = _.length - 1, c = b - 1; c >= 0; c--) {
					const e = g + c,
						p = t[e],
						d = e + 1 < u ? t[e + 1].el : r;
					0 === x[c] ? f(null, p, n, d, l, i, s, o, a) : w && (v < 0 || c !== _[v] ? U(p, n, d, 2) : v--)
				}
			}
		}, U = (e, t, r, l, i = null) => {
			const {
				el: s,
				type: o,
				transition: a,
				children: c,
				shapeFlag: u
			} = e;
			if (6 & u) return void U(e.component.subTree, t, r, l);
			if (128 & u) return void e.suspense.move(t, r, l);
			if (64 & u) return void o.move(e, t, r, K);
			if (o === Hr) {
				n(s, t, r);
				for (let e = 0; e < c.length; e++) U(c[e], t, r, l);
				return void n(e.anchor, t, r)
			}
			if (o === qr) return void y(e, t, r);
			if (2 !== l && 1 & u && a)
				if (0 === l) a.beforeEnter(s), n(s, t, r), Fr((() => a.enter(s)), i);
				else {
					const {
						leave: e,
						delayLeave: l,
						afterLeave: i
					} = a, o = () => n(s, t, r), c = () => {
						e(s, (() => {
							o(), i && i()
						}))
					};
					l ? l(s, o, c) : c()
				}
			else n(s, t, r)
		}, V = (e, t, n, r = !1, l = !1) => {
			const {
				type: i,
				props: s,
				ref: o,
				children: a,
				dynamicChildren: c,
				shapeFlag: u,
				patchFlag: p,
				dirs: d
			} = e;
			if (null != o && Mr(o, null, n, e, !0), 256 & u) return void t.ctx.deactivate(e);
			const h = 1 & u && d,
				f = !Gn(e);
			let g;
			if (f && (g = s && s.onVnodeBeforeUnmount) && fl(g, t, e), 6 & u) H(e.component, n, r);
			else {
				if (128 & u) return void e.suspense.unmount(n, r);
				h && Zn(e, null, t, "beforeUnmount"), 64 & u ? e.type.remove(e, t, n, l, K, r) : c && (i !== Hr || p > 0 && 64 & p) ? B(c, t, n, !1, !0) : (i === Hr && 384 & p || !l && 16 & u) && B(a, t, n), r && N(e)
			}(f && (g = s && s.onVnodeUnmounted) || h) && Fr((() => {
				g && fl(g, t, e), h && Zn(e, null, t, "unmounted")
			}), n)
		}, N = e => {
			const {
				type: t,
				el: n,
				anchor: l,
				transition: i
			} = e;
			if (t === Hr) return void D(n, l);
			if (t === qr) return void b(e);
			const s = () => {
				r(n), i && !i.persisted && i.afterLeave && i.afterLeave()
			};
			if (1 & e.shapeFlag && i && !i.persisted) {
				const {
					leave: t,
					delayLeave: r
				} = i, l = () => t(n, s);
				r ? r(e.el, s, l) : l()
			} else s()
		}, D = (e, t) => {
			let n;
			for (; e !== t;) n = p(e), r(e), e = n;
			r(t)
		}, H = (e, t, n) => {
			const {
				bum: r,
				scope: l,
				update: i,
				subTree: s,
				um: o
			} = e;
			r && ve(r), l.stop(), i && (i.active = !1, V(s, e, t, n)), o && Fr(o, t), Fr((() => {
				e.isUnmounted = !0
			}), t), t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve())
		}, B = (e, t, n, r = !1, l = !1, i = 0) => {
			for (let s = i; s < e.length; s++) V(e[s], t, n, r, l)
		}, W = e => 6 & e.shapeFlag ? W(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : p(e.anchor || e.el), q = (e, t, n) => {
			null == e ? t._vnode && V(t._vnode, null, null, !0) : f(t._vnode || null, e, t, null, null, null, n), Sn(), An(), t._vnode = e
		}, K = {
			p: f,
			um: V,
			m: U,
			r: N,
			mt: E,
			mc: _,
			pc: j,
			pbc: C,
			n: W,
			o: e
		};
		let G, Q;
		t && ([G, Q] = t(K));
		return {
			render: q,
			hydrate: G,
			createApp: wr(q, G)
		}
	}(e)
}

function Nr({
	effect: e,
	update: t
}, n) {
	e.allowRecurse = t.allowRecurse = n
}

function Dr(e, t, n = !1) {
	const r = e.children,
		l = t.children;
	if (K(r) && K(l))
		for (let e = 0; e < r.length; e++) {
			const t = r[e];
			let i = l[e];
			1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || 32 === i.patchFlag) && (i = l[e] = dl(l[e]), i.el = t.el), n || Dr(t, i)), i.type === Br && (i.el = t.el)
		}
}
const Hr = Symbol.for("v-fgt"),
	Br = Symbol.for("v-txt"),
	Wr = Symbol.for("v-cmt"),
	qr = Symbol.for("v-stc"),
	Zr = [];
let Kr = null;

function Gr(e = !1) {
	Zr.push(Kr = e ? null : [])
}
let Qr = 1;

function Jr(e) {
	Qr += e
}

function Xr(e) {
	return e.dynamicChildren = Qr > 0 ? Kr || M : null, Zr.pop(), Kr = Zr[Zr.length - 1] || null, Qr > 0 && Kr && Kr.push(e), e
}

function Yr(e, t, n, r, l, i) {
	return Xr(sl(e, t, n, r, l, i, !0))
}

function el(e, t, n, r, l) {
	return Xr(ol(e, t, n, r, l, !0))
}

function tl(e) {
	return !!e && !0 === e.__v_isVNode
}

function nl(e, t) {
	return e.type === t.type && e.key === t.key
}
const rl = "__vInternal",
	ll = ({
		key: e
	}) => null != e ? e : null,
	il = ({
		ref: e,
		ref_key: t,
		ref_for: n
	}) => ("number" == typeof e && (e = "" + e), null != e ? Y(e) || tn(e) || X(e) ? {
		i: On,
		r: e,
		k: t,
		f: !!n
	} : e : null);

function sl(e, t = null, n = null, r = 0, l = null, i = (e === Hr ? 0 : 1), s = !1, o = !1) {
	const a = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ll(t),
		ref: t && il(t),
		scopeId: Tn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: i,
		patchFlag: r,
		dynamicProps: l,
		dynamicChildren: null,
		appContext: null,
		ctx: On
	};
	return o ? (hl(a, n), 128 & i && e.normalize(a)) : n && (a.shapeFlag |= Y(n) ? 8 : 16), Qr > 0 && !s && Kr && (a.patchFlag > 0 || 6 & i) && 32 !== a.patchFlag && Kr.push(a), a
}
const ol = function(e, t = null, n = null, r = 0, l = null, i = !1) {
	e && e !== rr || (e = Wr);
	if (tl(e)) {
		const r = al(e, t, !0);
		return n && hl(r, n), Qr > 0 && !i && Kr && (6 & r.shapeFlag ? Kr[Kr.indexOf(e)] = r : Kr.push(r)), r.patchFlag |= -2, r
	}
	s = e, X(s) && "__vccOpts" in s && (e = e.__vccOpts);
	var s;
	if (t) {
		t = function(e) {
			return e ? Kt(e) || rl in e ? B({}, e) : e : null
		}(t);
		let {
			class: e,
			style: n
		} = t;
		e && !Y(e) && (t.class = Ae(e)), te(n) && (Kt(n) && !K(n) && (n = B({}, n)), t.style = xe(n))
	}
	const o = Y(e) ? 1 : (e => e.__isSuspense)(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : te(e) ? 4 : X(e) ? 2 : 0;
	return sl(e, t, n, r, l, o, i, !0)
};

function al(e, t, n = !1) {
	const {
		props: r,
		ref: l,
		patchFlag: i,
		children: s
	} = e, o = t ? function(...e) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const r = e[n];
			for (const e in r)
				if ("class" === e) t.class !== r.class && (t.class = Ae([t.class, r.class]));
				else if ("style" === e) t.style = xe([t.style, r.style]);
			else if (D(e)) {
				const n = t[e],
					l = r[e];
				!l || n === l || K(n) && n.includes(l) || (t[e] = n ? [].concat(n, l) : l)
			} else "" !== e && (t[e] = r[e])
		}
		return t
	}(r || {}, t) : r;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: o,
		key: o && ll(o),
		ref: t && t.ref ? n && l ? K(l) ? l.concat(il(t)) : [l, il(t)] : il(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Hr ? -1 === i ? 16 : 16 | i : i,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && al(e.ssContent),
		ssFallback: e.ssFallback && al(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	}
}

function cl(e = " ", t = 0) {
	return ol(Br, null, e, t)
}

function ul(e = "", t = !1) {
	return t ? (Gr(), el(Wr, null, e)) : ol(Wr, null, e)
}

function pl(e) {
	return null == e || "boolean" == typeof e ? ol(Wr) : K(e) ? ol(Hr, null, e.slice()) : "object" == typeof e ? dl(e) : ol(Br, null, String(e))
}

function dl(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : al(e)
}

function hl(e, t) {
	let n = 0;
	const {
		shapeFlag: r
	} = e;
	if (null == t) t = null;
	else if (K(t)) n = 16;
	else if ("object" == typeof t) {
		if (65 & r) {
			const n = t.default;
			return void(n && (n._c && (n._d = !1), hl(e, n()), n._c && (n._d = !0)))
		} {
			n = 32;
			const r = t._;
			r || rl in t ? 3 === r && On && (1 === On.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = On
		}
	} else X(t) ? (t = {
		default: t,
		_ctx: On
	}, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [cl(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n
}

function fl(e, t, n, r = null) {
	dn(e, t, 7, [n, r])
}
const gl = yr();
let ml = 0;
let vl = null;
const yl = () => vl || On;
let bl, wl, kl = "__VUE_INSTANCE_SETTERS__";
(wl = ke()[kl]) || (wl = ke()[kl] = []), wl.push((e => vl = e)), bl = e => {
	wl.length > 1 ? wl.forEach((t => t(e))) : wl[0](e)
};
const xl = e => {
		bl(e), e.scope.on()
	},
	_l = () => {
		vl && vl.scope.off(), bl(null)
	};

function $l(e) {
	return 4 & e.vnode.shapeFlag
}
let Cl, Sl = !1;

function Al(e, t, n) {
	X(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = cn(t)), Rl(e, n)
}

function Rl(e, t, n) {
	const r = e.type;
	if (!e.render) {
		if (!t && Cl && !r.render) {
			const t = r.template || function(e) {
					const t = e.type,
						{
							mixins: n,
							extends: r
						} = t,
						{
							mixins: l,
							optionsCache: i,
							config: {
								optionMergeStrategies: s
							}
						} = e.appContext,
						o = i.get(t);
					let a;
					return o ? a = o : l.length || n || r ? (a = {}, l.length && l.forEach((e => pr(a, e, s, !0))), pr(a, t, s)) : a = t, te(t) && i.set(t, a), a
				}(e)
				.template;
			if (t) {
				const {
					isCustomElement: n,
					compilerOptions: l
				} = e.appContext.config, {
					delimiters: i,
					compilerOptions: s
				} = r, o = B(B({
					isCustomElement: n,
					delimiters: i
				}, l), s);
				r.render = Cl(t, o)
			}
		}
		e.render = r.render || F
	}
}

function El(e) {
	if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(cn(Qt(e.exposed)), {
		get: (t, n) => n in t ? t[n] : n in or ? or[n](e) : void 0,
		has: (e, t) => t in e || t in or
	}))
}
const zl = (e, t) => function(e, t, n = !1) {
	let r, l;
	const i = X(e);
	return i ? (r = e, l = F) : (r = e.get, l = e.set), new un(r, l, i || !l, n)
}(e, 0, Sl);

function Ll(e, t, n) {
	const r = arguments.length;
	return 2 === r ? te(t) && !K(t) ? tl(t) ? ol(e, null, [t]) : ol(e, t) : ol(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === r && tl(n) && (n = [n]), ol(e, t, n))
}
const Il = Symbol.for("v-scx"),
	jl = () => xr(Il),
	Ol = "3.3.2",
	Tl = "undefined" != typeof document ? document : null,
	Ul = Tl && Tl.createElement("template"),
	Pl = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null)
		},
		remove: e => {
			const t = e.parentNode;
			t && t.removeChild(e)
		},
		createElement: (e, t, n, r) => {
			const l = t ? Tl.createElementNS("http://www.w3.org/2000/svg", e) : Tl.createElement(e, n ? {
				is: n
			} : void 0);
			return "select" === e && r && null != r.multiple && l.setAttribute("multiple", r.multiple), l
		},
		createText: e => Tl.createTextNode(e),
		createComment: e => Tl.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t
		},
		setElementText: (e, t) => {
			e.textContent = t
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => Tl.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "")
		},
		insertStaticContent(e, t, n, r, l, i) {
			const s = n ? n.previousSibling : t.lastChild;
			if (l && (l === i || l.nextSibling))
				for (; t.insertBefore(l.cloneNode(!0), n), l !== i && (l = l.nextSibling););
			else {
				Ul.innerHTML = r ? `<svg>${e}</svg>` : e;
				const l = Ul.content;
				if (r) {
					const e = l.firstChild;
					for (; e.firstChild;) l.appendChild(e.firstChild);
					l.removeChild(e)
				}
				t.insertBefore(l, n)
			}
			return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
		}
	};
const Ml = /\s*!important$/;

function Fl(e, t, n) {
	if (K(n)) n.forEach((n => Fl(e, t, n)));
	else if (null == n && (n = ""), t.startsWith("--")) e.setProperty(t, n);
	else {
		const r = function(e, t) {
			const n = Nl[t];
			if (n) return n;
			let r = pe(t);
			if ("filter" !== r && r in e) return Nl[t] = r;
			r = fe(r);
			for (let n = 0; n < Vl.length; n++) {
				const l = Vl[n] + r;
				if (l in e) return Nl[t] = l
			}
			return t
		}(e, t);
		Ml.test(n) ? e.setProperty(he(r), n.replace(Ml, ""), "important") : e[r] = n
	}
}
const Vl = ["Webkit", "Moz", "ms"],
	Nl = {};
const Dl = "http://www.w3.org/1999/xlink";

function Hl(e, t, n, r) {
	e.addEventListener(t, n, r)
}

function Bl(e, t, n, r, l = null) {
	const i = e._vei || (e._vei = {}),
		s = i[t];
	if (r && s) s.value = r;
	else {
		const [n, o] = function(e) {
			let t;
			if (Wl.test(e)) {
				let n;
				for (t = {}; n = e.match(Wl);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
			}
			const n = ":" === e[2] ? e.slice(3) : he(e.slice(2));
			return [n, t]
		}(t);
		if (r) {
			const s = i[t] = function(e, t) {
				const n = e => {
					if (e._vts) {
						if (e._vts <= n.attached) return
					} else e._vts = Date.now();
					dn(function(e, t) {
						if (K(t)) {
							const n = e.stopImmediatePropagation;
							return e.stopImmediatePropagation = () => {
								n.call(e), e._stopped = !0
							}, t.map((e => t => !t._stopped && e && e(t)))
						}
						return t
					}(e, n.value), t, 5, [e])
				};
				return n.value = e, n.attached = Kl(), n
			}(r, l);
			Hl(e, n, s, o)
		} else s && (! function(e, t, n, r) {
			e.removeEventListener(t, n, r)
		}(e, n, s, o), i[t] = void 0)
	}
}
const Wl = /(?:Once|Passive|Capture)$/;
let ql = 0;
const Zl = Promise.resolve(),
	Kl = () => ql || (Zl.then((() => ql = 0)), ql = Date.now());
const Gl = /^on[a-z]/;
const Ql = e => {
	const t = e.props["onUpdate:modelValue"] || !1;
	return K(t) ? e => ve(t, e) : t
};

function Jl(e) {
	e.target.composing = !0
}

function Xl(e) {
	const t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Yl = {
		created(e, {
			modifiers: {
				lazy: t,
				trim: n,
				number: r
			}
		}, l) {
			e._assign = Ql(l);
			const i = r || l.props && "number" === l.props.type;
			Hl(e, t ? "change" : "input", (t => {
				if (t.target.composing) return;
				let r = e.value;
				n && (r = r.trim()), i && (r = be(r)), e._assign(r)
			})), n && Hl(e, "change", (() => {
				e.value = e.value.trim()
			})), t || (Hl(e, "compositionstart", Jl), Hl(e, "compositionend", Xl), Hl(e, "change", Xl))
		},
		mounted(e, {
			value: t
		}) {
			e.value = null == t ? "" : t
		},
		beforeUpdate(e, {
			value: t,
			modifiers: {
				lazy: n,
				trim: r,
				number: l
			}
		}, i) {
			if (e._assign = Ql(i), e.composing) return;
			if (document.activeElement === e && "range" !== e.type) {
				if (n) return;
				if (r && e.value.trim() === t) return;
				if ((l || "number" === e.type) && be(e.value) === t) return
			}
			const s = null == t ? "" : t;
			e.value !== s && (e.value = s)
		}
	},
	ei = {
		deep: !0,
		created(e, t, n) {
			e._assign = Ql(n), Hl(e, "change", (() => {
				const t = e._modelValue,
					n = ii(e),
					r = e.checked,
					l = e._assign;
				if (K(t)) {
					const e = Le(t, n),
						i = -1 !== e;
					if (r && !i) l(t.concat(n));
					else if (!r && i) {
						const n = [...t];
						n.splice(e, 1), l(n)
					}
				} else if (Q(t)) {
					const e = new Set(t);
					r ? e.add(n) : e.delete(n), l(e)
				} else l(si(e, r))
			}))
		},
		mounted: ti,
		beforeUpdate(e, t, n) {
			e._assign = Ql(n), ti(e, t, n)
		}
	};

function ti(e, {
	value: t,
	oldValue: n
}, r) {
	e._modelValue = t, K(t) ? e.checked = Le(t, r.props.value) > -1 : Q(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = ze(t, si(e, !0)))
}
const ni = {
		created(e, {
			value: t
		}, n) {
			e.checked = ze(t, n.props.value), e._assign = Ql(n), Hl(e, "change", (() => {
				e._assign(ii(e))
			}))
		},
		beforeUpdate(e, {
			value: t,
			oldValue: n
		}, r) {
			e._assign = Ql(r), t !== n && (e.checked = ze(t, r.props.value))
		}
	},
	ri = {
		deep: !0,
		created(e, {
			value: t,
			modifiers: {
				number: n
			}
		}, r) {
			const l = Q(t);
			Hl(e, "change", (() => {
				const t = Array.prototype.filter.call(e.options, (e => e.selected))
					.map((e => n ? be(ii(e)) : ii(e)));
				e._assign(e.multiple ? l ? new Set(t) : t : t[0])
			})), e._assign = Ql(r)
		},
		mounted(e, {
			value: t
		}) {
			li(e, t)
		},
		beforeUpdate(e, t, n) {
			e._assign = Ql(n)
		},
		updated(e, {
			value: t
		}) {
			li(e, t)
		}
	};

function li(e, t) {
	const n = e.multiple;
	if (!n || K(t) || Q(t)) {
		for (let r = 0, l = e.options.length; r < l; r++) {
			const l = e.options[r],
				i = ii(l);
			if (n) K(t) ? l.selected = Le(t, i) > -1 : l.selected = t.has(i);
			else if (ze(ii(l), t)) return void(e.selectedIndex !== r && (e.selectedIndex = r))
		}
		n || -1 === e.selectedIndex || (e.selectedIndex = -1)
	}
}

function ii(e) {
	return "_value" in e ? e._value : e.value
}

function si(e, t) {
	const n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t
}
const oi = {
	created(e, t, n) {
		ai(e, t, n, null, "created")
	},
	mounted(e, t, n) {
		ai(e, t, n, null, "mounted")
	},
	beforeUpdate(e, t, n, r) {
		ai(e, t, n, r, "beforeUpdate")
	},
	updated(e, t, n, r) {
		ai(e, t, n, r, "updated")
	}
};

function ai(e, t, n, r, l) {
	const i = function(e, t) {
		switch (e) {
			case "SELECT":
				return ri;
			case "TEXTAREA":
				return Yl;
			default:
				switch (t) {
					case "checkbox":
						return ei;
					case "radio":
						return ni;
					default:
						return Yl
				}
		}
	}(e.tagName, n.props && n.props.type)[l];
	i && i(e, t, n, r)
}
const ci = {
	beforeMount(e, {
		value: t
	}, {
		transition: n
	}) {
		e._vod = "none" === e.style.display ? "" : e.style.display, n && t ? n.beforeEnter(e) : ui(e, t)
	},
	mounted(e, {
		value: t
	}, {
		transition: n
	}) {
		n && t && n.enter(e)
	},
	updated(e, {
		value: t,
		oldValue: n
	}, {
		transition: r
	}) {
		!t != !n && (r ? t ? (r.beforeEnter(e), ui(e, !0), r.enter(e)) : r.leave(e, (() => {
			ui(e, !1)
		})) : ui(e, t))
	},
	beforeUnmount(e, {
		value: t
	}) {
		ui(e, t)
	}
};

function ui(e, t) {
	e.style.display = t ? e._vod : "none"
}
const pi = B({
	patchProp: (e, t, n, r, l = !1, i, s, o, a) => {
		"class" === t ? function(e, t, n) {
			const r = e._vtc;
			r && (t = (t ? [t, ...r] : [...r])
				.join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
		}(e, r, l) : "style" === t ? function(e, t, n) {
			const r = e.style,
				l = Y(n);
			if (n && !l) {
				if (t && !Y(t))
					for (const e in t) null == n[e] && Fl(r, e, "");
				for (const e in n) Fl(r, e, n[e])
			} else {
				const i = r.display;
				l ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i)
			}
		}(e, n, r) : D(t) ? H(t) || Bl(e, t, 0, r, s) : ("." === t[0] ? (t = t.slice(1), 1) : "^" === t[0] ? (t = t.slice(1), 0) : function(e, t, n, r) {
			if (r) return "innerHTML" === t || "textContent" === t || !!(t in e && Gl.test(t) && X(n));
			if ("spellcheck" === t || "draggable" === t || "translate" === t) return !1;
			if ("form" === t) return !1;
			if ("list" === t && "INPUT" === e.tagName) return !1;
			if ("type" === t && "TEXTAREA" === e.tagName) return !1;
			if (Gl.test(t) && Y(n)) return !1;
			return t in e
		}(e, t, r, l)) ? function(e, t, n, r, l, i, s) {
			if ("innerHTML" === t || "textContent" === t) return r && s(r, l, i), void(e[t] = null == n ? "" : n);
			const o = e.tagName;
			if ("value" === t && "PROGRESS" !== o && !o.includes("-")) {
				e._value = n;
				const r = null == n ? "" : n;
				return ("OPTION" === o ? e.getAttribute("value") : e.value) !== r && (e.value = r), void(null == n && e.removeAttribute(t))
			}
			let a = !1;
			if ("" === n || null == n) {
				const r = typeof e[t];
				"boolean" === r ? n = Ee(n) : null == n && "string" === r ? (n = "", a = !0) : "number" === r && (n = 0, a = !0)
			}
			try {
				e[t] = n
			} catch (e) {}
			a && e.removeAttribute(t)
		}(e, t, r, i, s, o, a) : ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), function(e, t, n, r, l) {
			if (r && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(Dl, t.slice(6, t.length)) : e.setAttributeNS(Dl, t, n);
			else {
				const r = Re(t);
				null == n || r && !Ee(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
			}
		}(e, t, r, l))
	}
}, Pl);
let di;
const hi = (...e) => {
	const t = (di || (di = Vr(pi)))
		.createApp(...e),
		{
			mount: n
		} = t;
	return t.mount = e => {
		const r = function(e) {
			if (Y(e)) {
				return document.querySelector(e)
			}
			return e
		}(e);
		if (!r) return;
		const l = t._component;
		X(l) || l.render || l.template || (l.template = r.innerHTML), r.innerHTML = "";
		const i = n(r, !1, r instanceof SVGElement);
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i
	}, t
};

function fi(e) {
	return !!Ue() && (function(e) {
		Oe && Oe.cleanups.push(e)
	}(e), !0)
}

function gi(e) {
	return "function" == typeof e ? e() : on(e)
}
const mi = "undefined" != typeof window,
	vi = () => {};

function yi(e, t) {
	return function(...n) {
		return new Promise(((r, l) => {
			Promise.resolve(e((() => t.apply(this, n)), {
					fn: t,
					thisArg: this,
					args: n
				}))
				.then(r)
				.catch(l)
		}))
	}
}
const bi = e => e();

function wi(e, t = 200, n = {}) {
	return yi(function(e, t = {}) {
		let n, r, l = vi;
		const i = e => {
			clearTimeout(e), l(), l = vi
		};
		return s => {
			const o = gi(e),
				a = gi(t.maxWait);
			return n && i(n), o <= 0 || void 0 !== a && a <= 0 ? (r && (i(r), r = null), Promise.resolve(s())) : new Promise(((e, c) => {
				l = t.rejectOnCancel ? c : e, a && !r && (r = setTimeout((() => {
					n && i(n), r = null, e(s())
				}), a)), n = setTimeout((() => {
					r && i(r), r = null, e(s())
				}), o)
			}))
		}
	}(t, n), e)
}

function ki(e, t = !0) {
	yl() ? Xn(e) : t ? e() : _n(e)
}
var xi = Object.getOwnPropertySymbols,
	_i = Object.prototype.hasOwnProperty,
	$i = Object.prototype.propertyIsEnumerable,
	Ci = (e, t) => {
		var n = {};
		for (var r in e) _i.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (null != e && xi)
			for (var r of xi(e)) t.indexOf(r) < 0 && $i.call(e, r) && (n[r] = e[r]);
		return n
	};
var Si = Object.defineProperty,
	Ai = Object.defineProperties,
	Ri = Object.getOwnPropertyDescriptors,
	Ei = Object.getOwnPropertySymbols,
	zi = Object.prototype.hasOwnProperty,
	Li = Object.prototype.propertyIsEnumerable,
	Ii = (e, t, n) => t in e ? Si(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	ji = (e, t) => {
		for (var n in t || (t = {})) zi.call(t, n) && Ii(e, n, t[n]);
		if (Ei)
			for (var n of Ei(t)) Li.call(t, n) && Ii(e, n, t[n]);
		return e
	},
	Oi = (e, t) => Ai(e, Ri(t)),
	Ti = (e, t) => {
		var n = {};
		for (var r in e) zi.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (null != e && Ei)
			for (var r of Ei(e)) t.indexOf(r) < 0 && Li.call(e, r) && (n[r] = e[r]);
		return n
	};

function Ui(e, t, n = {}) {
	const r = n,
		{
			eventFilter: l
		} = r,
		i = Ti(r, ["eventFilter"]),
		{
			eventFilter: s,
			pause: o,
			resume: a,
			isActive: c
		} = function(e = bi) {
			const t = nn(!0);
			return {
				isActive: Ht(t),
				pause: function() {
					t.value = !1
				},
				resume: function() {
					t.value = !0
				},
				eventFilter: (...n) => {
					t.value && e(...n)
				}
			}
		}(l),
		u = function(e, t, n = {}) {
			const r = n,
				{
					eventFilter: l = bi
				} = r,
				i = Ci(r, ["eventFilter"]);
			return Hn(e, yi(l, t), i)
		}(e, t, Oi(ji({}, i), {
			eventFilter: s
		}));
	return {
		stop: u,
		pause: o,
		resume: a,
		isActive: c
	}
}

function Pi(e) {
	var t;
	const n = gi(e);
	return null != (t = null == n ? void 0 : n.$el) ? t : n
}
const Mi = mi ? window : void 0,
	Fi = mi ? window.document : void 0;

function Vi(...e) {
	let t, n, r, l;
	if ("string" == typeof e[0] || Array.isArray(e[0]) ? ([n, r, l] = e, t = Mi) : [t, n, r, l] = e, !t) return vi;
	Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
	const i = [],
		s = () => {
			i.forEach((e => e())), i.length = 0
		},
		o = Hn((() => [Pi(t), gi(l)]), (([e, t]) => {
			s(), e && i.push(...n.flatMap((n => r.map((r => ((e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)))(e, n, r, t))))))
		}), {
			immediate: !0,
			flush: "post"
		}),
		a = () => {
			o(), s()
		};
	return fi(a), a
}
const Ni = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
	Di = "__vueuse_ssr_handlers__",
	Hi = Bi();

function Bi() {
	return Di in Ni || (Ni[Di] = Ni[Di] || {}), Ni[Di]
}
var Wi = Object.defineProperty,
	qi = Object.getOwnPropertySymbols,
	Zi = Object.prototype.hasOwnProperty,
	Ki = Object.prototype.propertyIsEnumerable,
	Gi = (e, t, n) => t in e ? Wi(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	Qi = (e, t) => {
		for (var n in t || (t = {})) Zi.call(t, n) && Gi(e, n, t[n]);
		if (qi)
			for (var n of qi(t)) Ki.call(t, n) && Gi(e, n, t[n]);
		return e
	};
const Ji = {
		boolean: {
			read: e => "true" === e,
			write: e => String(e)
		},
		object: {
			read: e => JSON.parse(e),
			write: e => JSON.stringify(e)
		},
		number: {
			read: e => Number.parseFloat(e),
			write: e => String(e)
		},
		any: {
			read: e => e,
			write: e => String(e)
		},
		string: {
			read: e => e,
			write: e => String(e)
		},
		map: {
			read: e => new Map(JSON.parse(e)),
			write: e => JSON.stringify(Array.from(e.entries()))
		},
		set: {
			read: e => new Set(JSON.parse(e)),
			write: e => JSON.stringify(Array.from(e))
		},
		date: {
			read: e => new Date(e),
			write: e => e.toISOString()
		}
	},
	Xi = "vueuse-storage";

function Yi(e, t, n, r = {}) {
	var l;
	const {
		flush: i = "pre",
		deep: s = !0,
		listenToStorageChanges: o = !0,
		writeDefaults: a = !0,
		mergeDefaults: c = !1,
		shallow: u,
		window: p = Mi,
		eventFilter: d,
		onError: h = (e => {
			console.error(e)
		})
	} = r, f = (u ? rn : nn)(t);
	if (!n) try {
		n = function(e, t) {
			return Hi[e] || t
		}("getDefaultStorage", (() => {
			var e;
			return null == (e = Mi) ? void 0 : e.localStorage
		}))()
	} catch (e) {
		h(e)
	}
	if (!n) return f;
	const g = gi(t),
		m = function(e) {
			return null == e ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : "boolean" == typeof e ? "boolean" : "string" == typeof e ? "string" : "object" == typeof e ? "object" : Number.isNaN(e) ? "any" : "number"
		}(g),
		v = null != (l = r.serializer) ? l : Ji[m],
		{
			pause: y,
			resume: b
		} = Ui(f, (() => function(t) {
			try {
				if (null == t) n.removeItem(e);
				else {
					const r = v.write(t),
						l = n.getItem(e);
					l !== r && (n.setItem(e, r), p && p.dispatchEvent(new CustomEvent(Xi, {
						detail: {
							key: e,
							oldValue: l,
							newValue: r,
							storageArea: n
						}
					})))
				}
			} catch (e) {
				h(e)
			}
		}(f.value)), {
			flush: i,
			deep: s,
			eventFilter: d
		});
	return p && o && (Vi(p, "storage", w), Vi(p, Xi, (function(e) {
		w(e.detail)
	}))), w(), f;

	function w(t) {
		if (!t || t.storageArea === n)
			if (t && null == t.key) f.value = g;
			else if (!t || t.key === e) {
			y();
			try {
				f.value = function(t) {
					const r = t ? t.newValue : n.getItem(e);
					if (null == r) return a && null !== g && n.setItem(e, v.write(g)), g;
					if (!t && c) {
						const e = v.read(r);
						return "function" == typeof c ? c(e, g) : "object" !== m || Array.isArray(e) ? e : Qi(Qi({}, g), e)
					}
					return "string" != typeof r ? r : v.read(r)
				}(t)
			} catch (e) {
				h(e)
			} finally {
				t ? _n(b) : b()
			}
		}
	}
}
var es = Object.defineProperty,
	ts = Object.getOwnPropertySymbols,
	ns = Object.prototype.hasOwnProperty,
	rs = Object.prototype.propertyIsEnumerable,
	ls = (e, t, n) => t in e ? es(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n;

function is(e = {}) {
	const {
		controls: t = !1,
		interval: n = "requestAnimationFrame"
	} = e, r = nn(new Date), l = () => r.value = new Date, i = "requestAnimationFrame" === n ? function(e, t = {}) {
		const {
			immediate: n = !0,
			window: r = Mi
		} = t, l = nn(!1);
		let i = 0,
			s = null;

		function o(t) {
			l.value && r && (e({
				delta: t - i,
				timestamp: t
			}), i = t, s = r.requestAnimationFrame(o))
		}

		function a() {
			!l.value && r && (l.value = !0, s = r.requestAnimationFrame(o))
		}

		function c() {
			l.value = !1, null != s && r && (r.cancelAnimationFrame(s), s = null)
		}
		return n && a(), fi(c), {
			isActive: Ht(l),
			pause: c,
			resume: a
		}
	}(l, {
		immediate: !0
	}) : function(e, t = 1e3, n = {}) {
		const {
			immediate: r = !0,
			immediateCallback: l = !1
		} = n;
		let i = null;
		const s = nn(!1);

		function o() {
			i && (clearInterval(i), i = null)
		}

		function a() {
			s.value = !1, o()
		}

		function c() {
			const n = gi(t);
			n <= 0 || (s.value = !0, l && e(), o(), i = setInterval(e, n))
		}
		r && mi && c(), (tn(t) || "function" == typeof t) && fi(Hn(t, (() => {
			s.value && mi && c()
		})));
		return fi(a), {
			isActive: s,
			pause: a,
			resume: c
		}
	}(l, n, {
		immediate: !0
	});
	return t ? ((e, t) => {
		for (var n in t || (t = {})) ns.call(t, n) && ls(e, n, t[n]);
		if (ts)
			for (var n of ts(t)) rs.call(t, n) && ls(e, n, t[n]);
		return e
	})({
		now: r
	}, i) : r
}

function ss(e, t = vi, n = {}) {
	const {
		immediate: r = !0,
		manual: l = !1,
		type: i = "text/javascript",
		async: s = !0,
		crossOrigin: o,
		referrerPolicy: a,
		noModule: c,
		defer: u,
		document: p = Fi,
		attrs: d = {}
	} = n, h = nn(null);
	let f = null;
	const g = (n = !0) => (f || (f = (n => new Promise(((r, l) => {
			const f = e => (h.value = e, r(e), e);
			if (!p) return void r(!1);
			let g = !1,
				m = p.querySelector(`script[src="${gi(e)}"]`);
			m ? m.hasAttribute("data-loaded") && f(m) : (m = p.createElement("script"), m.type = i, m.async = s, m.src = gi(e), u && (m.defer = u), o && (m.crossOrigin = o), c && (m.noModule = c), a && (m.referrerPolicy = a), Object.entries(d)
				.forEach((([e, t]) => null == m ? void 0 : m.setAttribute(e, t))), g = !0), m.addEventListener("error", (e => l(e))), m.addEventListener("abort", (e => l(e))), m.addEventListener("load", (() => {
				m.setAttribute("data-loaded", "true"), t(m), f(m)
			})), g && (m = p.head.appendChild(m)), n || f(m)
		})))(n)), f),
		m = () => {
			if (!p) return;
			f = null, h.value && (h.value = null);
			const t = p.querySelector(`script[src="${gi(e)}"]`);
			t && p.head.removeChild(t)
		};
	var v;
	return r && !l && ki(g), l || (v = m, yl() && er(v)), {
		scriptTag: h,
		load: g,
		unload: m
	}
}
let os = 0;
const as = e => {
		const t = Yi("WALINE_EMOJI", {}),
			n = Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e));
		if (n) {
			const n = t.value[e];
			if (n) return Promise.resolve(n)
		}
		return fetch(`${e}/info.json`)
			.then((e => e.json()))
			.then((r => {
				const l = {
					folder: e,
					...r
				};
				return n && (t.value[e] = l), l
			}))
	},
	cs = (e, t = "", n = "", r = "") => `${t?`${t}/`:""}${n}${e}${r?`.${r}`:""}`,
	us = e => {
		"AbortError" !== e.name && console.error(e.message)
	},
	ps = e => e instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : null,
	ds = e => e.type.includes("image"),
	hs = e => {
		const t = Array.from(e)
			.find(ds);
		return t ? t.getAsFile() : null
	};

function fs() {
	return {
		async: !1,
		baseUrl: null,
		breaks: !1,
		extensions: null,
		gfm: !0,
		headerIds: !0,
		headerPrefix: "",
		highlight: null,
		hooks: null,
		langPrefix: "language-",
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartypants: !1,
		tokenizer: null,
		walkTokens: null,
		xhtml: !1
	}
}
let gs = {
	async: !1,
	baseUrl: null,
	breaks: !1,
	extensions: null,
	gfm: !0,
	headerIds: !0,
	headerPrefix: "",
	highlight: null,
	hooks: null,
	langPrefix: "language-",
	mangle: !0,
	pedantic: !1,
	renderer: null,
	sanitize: !1,
	sanitizer: null,
	silent: !1,
	smartypants: !1,
	tokenizer: null,
	walkTokens: null,
	xhtml: !1
};
const ms = /[&<>"']/,
	vs = new RegExp(ms.source, "g"),
	ys = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	bs = new RegExp(ys.source, "g"),
	ws = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;"
	},
	ks = e => ws[e];

function xs(e, t) {
	if (t) {
		if (ms.test(e)) return e.replace(vs, ks)
	} else if (ys.test(e)) return e.replace(bs, ks);
	return e
}
const _s = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

function $s(e) {
	return e.replace(_s, ((e, t) => "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""))
}
const Cs = /(^|[^\[])\^/g;

function Ss(e, t) {
	e = "string" == typeof e ? e : e.source, t = t || "";
	const n = {
		replace: (t, r) => (r = (r = r.source || r)
			.replace(Cs, "$1"), e = e.replace(t, r), n),
		getRegex: () => new RegExp(e, t)
	};
	return n
}
const As = /[^\w:]/g,
	Rs = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function Es(e, t, n) {
	if (e) {
		let e;
		try {
			e = decodeURIComponent($s(n))
				.replace(As, "")
				.toLowerCase()
		} catch (e) {
			return null
		}
		if (0 === e.indexOf("javascript:") || 0 === e.indexOf("vbscript:") || 0 === e.indexOf("data:")) return null
	}
	t && !Rs.test(n) && (n = function(e, t) {
		zs[" " + e] || (Ls.test(e) ? zs[" " + e] = e + "/" : zs[" " + e] = Us(e, "/", !0));
		e = zs[" " + e];
		const n = -1 === e.indexOf(":");
		return "//" === t.substring(0, 2) ? n ? t : e.replace(Is, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(js, "$1") + t : e + t
	}(t, n));
	try {
		n = encodeURI(n)
			.replace(/%25/g, "%")
	} catch (e) {
		return null
	}
	return n
}
const zs = {},
	Ls = /^[^:]+:\/*[^/]*$/,
	Is = /^([^:]+:)[\s\S]*$/,
	js = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const Os = {
	exec: function() {}
};

function Ts(e, t) {
	const n = e.replace(/\|/g, ((e, t, n) => {
			let r = !1,
				l = t;
			for (; --l >= 0 && "\\" === n[l];) r = !r;
			return r ? "|" : " |"
		}))
		.split(/ \|/);
	let r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), n.length > t) n.splice(t);
	else
		for (; n.length < t;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim()
		.replace(/\\\|/g, "|");
	return n
}

function Us(e, t, n) {
	const r = e.length;
	if (0 === r) return "";
	let l = 0;
	for (; l < r;) {
		const i = e.charAt(r - l - 1);
		if (i !== t || n) {
			if (i === t || !n) break;
			l++
		} else l++
	}
	return e.slice(0, r - l)
}

function Ps(e, t) {
	if (t < 1) return "";
	let n = "";
	for (; t > 1;) 1 & t && (n += e), t >>= 1, e += e;
	return n + e
}

function Ms(e, t, n, r) {
	const l = t.href,
		i = t.title ? xs(t.title) : null,
		s = e[1].replace(/\\([\[\]])/g, "$1");
	if ("!" !== e[0].charAt(0)) {
		r.state.inLink = !0;
		const e = {
			type: "link",
			raw: n,
			href: l,
			title: i,
			text: s,
			tokens: r.inlineTokens(s)
		};
		return r.state.inLink = !1, e
	}
	return {
		type: "image",
		raw: n,
		href: l,
		title: i,
		text: xs(s)
	}
}
class Fs {
	constructor(e) {
		this.options = e || gs
	}
	space(e) {
		const t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		}
	}
	code(e) {
		const t = this.rules.block.code.exec(e);
		if (t) {
			const e = t[0].replace(/^ {1,4}/gm, "");
			return {
				type: "code",
				raw: t[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : Us(e, "\n")
			}
		}
	}
	fences(e) {
		const t = this.rules.block.fences.exec(e);
		if (t) {
			const e = t[0],
				n = function(e, t) {
					const n = e.match(/^(\s+)(?:```)/);
					if (null === n) return t;
					const r = n[1];
					return t.split("\n")
						.map((e => {
							const t = e.match(/^\s+/);
							if (null === t) return e;
							const [n] = t;
							return n.length >= r.length ? e.slice(r.length) : e
						}))
						.join("\n")
				}(e, t[3] || "");
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim()
					.replace(this.rules.inline._escapes, "$1") : t[2],
				text: n
			}
		}
	}
	heading(e) {
		const t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (/#$/.test(e)) {
				const t = Us(e, "#");
				this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
			}
			return {
				type: "heading",
				raw: t[0],
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			}
		}
	}
	hr(e) {
		const t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: t[0]
		}
	}
	blockquote(e) {
		const t = this.rules.block.blockquote.exec(e);
		if (t) {
			const e = t[0].replace(/^ *>[ \t]?/gm, ""),
				n = this.lexer.state.top;
			this.lexer.state.top = !0;
			const r = this.lexer.blockTokens(e);
			return this.lexer.state.top = n, {
				type: "blockquote",
				raw: t[0],
				tokens: r,
				text: e
			}
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n, r, l, i, s, o, a, c, u, p, d, h, f = t[1].trim();
			const g = f.length > 1,
				m = {
					type: "list",
					raw: "",
					ordered: g,
					start: g ? +f.slice(0, -1) : "",
					loose: !1,
					items: []
				};
			f = g ? `\\d{1,9}\\${f.slice(-1)}` : `\\${f}`, this.options.pedantic && (f = g ? f : "[*+-]");
			const v = new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);
			for (; e && (h = !1, t = v.exec(e)) && !this.rules.block.hr.test(e);) {
				if (n = t[0], e = e.substring(n.length), c = t[2].split("\n", 1)[0].replace(/^\t+/, (e => " ".repeat(3 * e.length))), u = e.split("\n", 1)[0], this.options.pedantic ? (i = 2, d = c.trimLeft()) : (i = t[2].search(/[^ ]/), i = i > 4 ? 1 : i, d = c.slice(i), i += t[1].length), o = !1, !c && /^ *$/.test(u) && (n += u + "\n", e = e.substring(u.length + 1), h = !0), !h) {
					const t = new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
						r = new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
						l = new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),
						s = new RegExp(`^ {0,${Math.min(3,i-1)}}#`);
					for (; e && (p = e.split("\n", 1)[0], u = p, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !l.test(u)) && !s.test(u) && !t.test(u) && !r.test(e);) {
						if (u.search(/[^ ]/) >= i || !u.trim()) d += "\n" + u.slice(i);
						else {
							if (o) break;
							if (c.search(/[^ ]/) >= 4) break;
							if (l.test(c)) break;
							if (s.test(c)) break;
							if (r.test(c)) break;
							d += "\n" + u
						}
						o || u.trim() || (o = !0), n += p + "\n", e = e.substring(p.length + 1), c = u.slice(i)
					}
				}
				m.loose || (a ? m.loose = !0 : /\n *\n *$/.test(n) && (a = !0)), this.options.gfm && (r = /^\[[ xX]\] /.exec(d), r && (l = "[ ] " !== r[0], d = d.replace(/^\[[ xX]\] +/, ""))), m.items.push({
					type: "list_item",
					raw: n,
					task: !!r,
					checked: l,
					loose: !1,
					text: d
				}), m.raw += n
			}
			m.items[m.items.length - 1].raw = n.trimRight(), m.items[m.items.length - 1].text = d.trimRight(), m.raw = m.raw.trimRight();
			const y = m.items.length;
			for (s = 0; s < y; s++)
				if (this.lexer.state.top = !1, m.items[s].tokens = this.lexer.blockTokens(m.items[s].text, []), !m.loose) {
					const e = m.items[s].tokens.filter((e => "space" === e.type)),
						t = e.length > 0 && e.some((e => /\n.*\n/.test(e.raw)));
					m.loose = t
				} if (m.loose)
				for (s = 0; s < y; s++) m.items[s].loose = !0;
			return m
		}
	}
	html(e) {
		const t = this.rules.block.html.exec(e);
		if (t) {
			const e = {
				type: "html",
				raw: t[0],
				pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
				text: t[0]
			};
			if (this.options.sanitize) {
				const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : xs(t[0]);
				e.type = "paragraph", e.text = n, e.tokens = this.lexer.inline(n)
			}
			return e
		}
	}
	def(e) {
		const t = this.rules.block.def.exec(e);
		if (t) {
			const e = t[1].toLowerCase()
				.replace(/\s+/g, " "),
				n = t[2] ? t[2].replace(/^<(.*)>$/, "$1")
				.replace(this.rules.inline._escapes, "$1") : "",
				r = t[3] ? t[3].substring(1, t[3].length - 1)
				.replace(this.rules.inline._escapes, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: t[0],
				href: n,
				title: r
			}
		}
	}
	table(e) {
		const t = this.rules.block.table.exec(e);
		if (t) {
			const e = {
				type: "table",
				header: Ts(t[1])
					.map((e => ({
						text: e
					}))),
				align: t[2].replace(/^ *|\| *$/g, "")
					.split(/ *\| */),
				rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "")
					.split("\n") : []
			};
			if (e.header.length === e.align.length) {
				e.raw = t[0];
				let n, r, l, i, s = e.align.length;
				for (n = 0; n < s; n++) /^ *-+: *$/.test(e.align[n]) ? e.align[n] = "right" : /^ *:-+: *$/.test(e.align[n]) ? e.align[n] = "center" : /^ *:-+ *$/.test(e.align[n]) ? e.align[n] = "left" : e.align[n] = null;
				for (s = e.rows.length, n = 0; n < s; n++) e.rows[n] = Ts(e.rows[n], e.header.length)
					.map((e => ({
						text: e
					})));
				for (s = e.header.length, r = 0; r < s; r++) e.header[r].tokens = this.lexer.inline(e.header[r].text);
				for (s = e.rows.length, r = 0; r < s; r++)
					for (i = e.rows[r], l = 0; l < i.length; l++) i[l].tokens = this.lexer.inline(i[l].text);
				return e
			}
		}
	}
	lheading(e) {
		const t = this.rules.block.lheading.exec(e);
		if (t) return {
			type: "heading",
			raw: t[0],
			depth: "=" === t[2].charAt(0) ? 1 : 2,
			text: t[1],
			tokens: this.lexer.inline(t[1])
		}
	}
	paragraph(e) {
		const t = this.rules.block.paragraph.exec(e);
		if (t) {
			const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			}
		}
	}
	text(e) {
		const t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		}
	}
	escape(e) {
		const t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: xs(t[1])
		}
	}
	tag(e) {
		const t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: this.options.sanitize ? "text" : "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : xs(t[0]) : t[0]
		}
	}
	link(e) {
		const t = this.rules.inline.link.exec(e);
		if (t) {
			const e = t[2].trim();
			if (!this.options.pedantic && /^</.test(e)) {
				if (!/>$/.test(e)) return;
				const t = Us(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return
			} else {
				const e = function(e, t) {
					if (-1 === e.indexOf(t[1])) return -1;
					const n = e.length;
					let r = 0,
						l = 0;
					for (; l < n; l++)
						if ("\\" === e[l]) l++;
						else if (e[l] === t[0]) r++;
					else if (e[l] === t[1] && (r--, r < 0)) return l;
					return -1
				}(t[2], "()");
				if (e > -1) {
					const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n)
						.trim(), t[3] = ""
				}
			}
			let n = t[2],
				r = "";
			if (this.options.pedantic) {
				const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
				e && (n = e[1], r = e[3])
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), Ms(t, {
				href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
				title: r ? r.replace(this.rules.inline._escapes, "$1") : r
			}, t[0], this.lexer)
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = (n[2] || n[1])
				.replace(/\s+/g, " ");
			if (e = t[e.toLowerCase()], !e) {
				const e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				}
			}
			return Ms(n, e, n[0], this.lexer)
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrong.lDelim.exec(e);
		if (!r) return;
		if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
		const l = r[1] || r[2] || "";
		if (!l || l && ("" === n || this.rules.inline.punctuation.exec(n))) {
			const n = r[0].length - 1;
			let l, i, s = n,
				o = 0;
			const a = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
			for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = a.exec(t));) {
				if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l) continue;
				if (i = l.length, r[3] || r[4]) {
					s += i;
					continue
				}
				if ((r[5] || r[6]) && n % 3 && !((n + i) % 3)) {
					o += i;
					continue
				}
				if (s -= i, s > 0) continue;
				i = Math.min(i, i + s + o);
				const t = e.slice(0, n + r.index + (r[0].length - l.length) + i);
				if (Math.min(n, i) % 2) {
					const e = t.slice(1, -1);
					return {
						type: "em",
						raw: t,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					}
				}
				const a = t.slice(2, -2);
				return {
					type: "strong",
					raw: t,
					text: a,
					tokens: this.lexer.inlineTokens(a)
				}
			}
		}
	}
	codespan(e) {
		const t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(/\n/g, " ");
			const n = /[^ ]/.test(e),
				r = /^ /.test(e) && / $/.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), e = xs(e, !0), {
				type: "codespan",
				raw: t[0],
				text: e
			}
		}
	}
	br(e) {
		const t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		}
	}
	del(e) {
		const t = this.rules.inline.del.exec(e);
		if (t) return {
			type: "del",
			raw: t[0],
			text: t[2],
			tokens: this.lexer.inlineTokens(t[2])
		}
	}
	autolink(e, t) {
		const n = this.rules.inline.autolink.exec(e);
		if (n) {
			let e, r;
			return "@" === n[2] ? (e = xs(this.options.mangle ? t(n[1]) : n[1]), r = "mailto:" + e) : (e = xs(n[1]), r = e), {
				type: "link",
				raw: n[0],
				text: e,
				href: r,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			}
		}
	}
	url(e, t) {
		let n;
		if (n = this.rules.inline.url.exec(e)) {
			let e, r;
			if ("@" === n[2]) e = xs(this.options.mangle ? t(n[0]) : n[0]), r = "mailto:" + e;
			else {
				let t;
				do {
					t = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0]
				} while (t !== n[0]);
				e = xs(n[0]), r = "www." === n[1] ? "http://" + n[0] : n[0]
			}
			return {
				type: "link",
				raw: n[0],
				text: e,
				href: r,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			}
		}
	}
	inlineText(e, t) {
		const n = this.rules.inline.text.exec(e);
		if (n) {
			let e;
			return e = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : xs(n[0]) : n[0] : xs(this.options.smartypants ? t(n[0]) : n[0]), {
				type: "text",
				raw: n[0],
				text: e
			}
		}
	}
}
const Vs = {
	newline: /^(?: *(?:\n|$))+/,
	code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
	fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
	hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
	heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
	blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
	html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
	def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
	table: Os,
	lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	_paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
	text: /^[^\n]+/,
	_label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
	_title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
};
Vs.def = Ss(Vs.def)
	.replace("label", Vs._label)
	.replace("title", Vs._title)
	.getRegex(), Vs.bullet = /(?:[*+-]|\d{1,9}[.)])/, Vs.listItemStart = Ss(/^( *)(bull) */)
	.replace("bull", Vs.bullet)
	.getRegex(), Vs.list = Ss(Vs.list)
	.replace(/bull/g, Vs.bullet)
	.replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")
	.replace("def", "\\n+(?=" + Vs.def.source + ")")
	.getRegex(), Vs._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Vs._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, Vs.html = Ss(Vs.html, "i")
	.replace("comment", Vs._comment)
	.replace("tag", Vs._tag)
	.replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
	.getRegex(), Vs.paragraph = Ss(Vs._paragraph)
	.replace("hr", Vs.hr)
	.replace("heading", " {0,3}#{1,6} ")
	.replace("|lheading", "")
	.replace("|table", "")
	.replace("blockquote", " {0,3}>")
	.replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
	.replace("list", " {0,3}(?:[*+-]|1[.)]) ")
	.replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
	.replace("tag", Vs._tag)
	.getRegex(), Vs.blockquote = Ss(Vs.blockquote)
	.replace("paragraph", Vs.paragraph)
	.getRegex(), Vs.normal = {
		...Vs
	}, Vs.gfm = {
		...Vs.normal,
		table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
	}, Vs.gfm.table = Ss(Vs.gfm.table)
	.replace("hr", Vs.hr)
	.replace("heading", " {0,3}#{1,6} ")
	.replace("blockquote", " {0,3}>")
	.replace("code", " {4}[^\\n]")
	.replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
	.replace("list", " {0,3}(?:[*+-]|1[.)]) ")
	.replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
	.replace("tag", Vs._tag)
	.getRegex(), Vs.gfm.paragraph = Ss(Vs._paragraph)
	.replace("hr", Vs.hr)
	.replace("heading", " {0,3}#{1,6} ")
	.replace("|lheading", "")
	.replace("table", Vs.gfm.table)
	.replace("blockquote", " {0,3}>")
	.replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
	.replace("list", " {0,3}(?:[*+-]|1[.)]) ")
	.replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
	.replace("tag", Vs._tag)
	.getRegex(), Vs.pedantic = {
		...Vs.normal,
		html: Ss("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))")
			.replace("comment", Vs._comment)
			.replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b")
			.getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: Os,
		lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		paragraph: Ss(Vs.normal._paragraph)
			.replace("hr", Vs.hr)
			.replace("heading", " *#{1,6} *[^\n]")
			.replace("lheading", Vs.lheading)
			.replace("blockquote", " {0,3}>")
			.replace("|fences", "")
			.replace("|list", "")
			.replace("|html", "")
			.getRegex()
	};
const Ns = {
	escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
	autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	url: Os,
	tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
	link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
	reflink: /^!?\[(label)\]\[(ref)\]/,
	nolink: /^!?\[(ref)\](?:\[\])?/,
	reflinkSearch: "reflink|nolink(?!\\()",
	emStrong: {
		lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
		rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
		rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
	},
	code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
	br: /^( {2,}|\\)\n(?!\s*$)/,
	del: Os,
	text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
	punctuation: /^([\spunctuation])/
};

function Ds(e) {
	return e.replace(/---/g, "—")
		.replace(/--/g, "–")
		.replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
		.replace(/'/g, "’")
		.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
		.replace(/"/g, "”")
		.replace(/\.{3}/g, "…")
}

function Hs(e) {
	let t, n, r = "";
	const l = e.length;
	for (t = 0; t < l; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), r += "&#" + n + ";";
	return r
}
Ns._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", Ns.punctuation = Ss(Ns.punctuation)
	.replace(/punctuation/g, Ns._punctuation)
	.getRegex(), Ns.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, Ns.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, Ns._comment = Ss(Vs._comment)
	.replace("(?:--\x3e|$)", "--\x3e")
	.getRegex(), Ns.emStrong.lDelim = Ss(Ns.emStrong.lDelim)
	.replace(/punct/g, Ns._punctuation)
	.getRegex(), Ns.emStrong.rDelimAst = Ss(Ns.emStrong.rDelimAst, "g")
	.replace(/punct/g, Ns._punctuation)
	.getRegex(), Ns.emStrong.rDelimUnd = Ss(Ns.emStrong.rDelimUnd, "g")
	.replace(/punct/g, Ns._punctuation)
	.getRegex(), Ns._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Ns._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Ns._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Ns.autolink = Ss(Ns.autolink)
	.replace("scheme", Ns._scheme)
	.replace("email", Ns._email)
	.getRegex(), Ns._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Ns.tag = Ss(Ns.tag)
	.replace("comment", Ns._comment)
	.replace("attribute", Ns._attribute)
	.getRegex(), Ns._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ns._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Ns._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Ns.link = Ss(Ns.link)
	.replace("label", Ns._label)
	.replace("href", Ns._href)
	.replace("title", Ns._title)
	.getRegex(), Ns.reflink = Ss(Ns.reflink)
	.replace("label", Ns._label)
	.replace("ref", Vs._label)
	.getRegex(), Ns.nolink = Ss(Ns.nolink)
	.replace("ref", Vs._label)
	.getRegex(), Ns.reflinkSearch = Ss(Ns.reflinkSearch, "g")
	.replace("reflink", Ns.reflink)
	.replace("nolink", Ns.nolink)
	.getRegex(), Ns.normal = {
		...Ns
	}, Ns.pedantic = {
		...Ns.normal,
		strong: {
			start: /^__|\*\*/,
			middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
			endAst: /\*\*(?!\*)/g,
			endUnd: /__(?!_)/g
		},
		em: {
			start: /^_|\*/,
			middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
			endAst: /\*(?!\*)/g,
			endUnd: /_(?!_)/g
		},
		link: Ss(/^!?\[(label)\]\((.*?)\)/)
			.replace("label", Ns._label)
			.getRegex(),
		reflink: Ss(/^!?\[(label)\]\s*\[([^\]]*)\]/)
			.replace("label", Ns._label)
			.getRegex()
	}, Ns.gfm = {
		...Ns.normal,
		escape: Ss(Ns.escape)
			.replace("])", "~|])")
			.getRegex(),
		_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
		url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
		_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
		text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
	}, Ns.gfm.url = Ss(Ns.gfm.url, "i")
	.replace("email", Ns.gfm._extended_email)
	.getRegex(), Ns.breaks = {
		...Ns.gfm,
		br: Ss(Ns.br)
			.replace("{2,}", "*")
			.getRegex(),
		text: Ss(Ns.gfm.text)
			.replace("\\b_", "\\b_| {2,}\\n")
			.replace(/\{2,\}/g, "*")
			.getRegex()
	};
class Bs {
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || gs, this.options.tokenizer = this.options.tokenizer || new Fs, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		const t = {
			block: Vs.normal,
			inline: Ns.normal
		};
		this.options.pedantic ? (t.block = Vs.pedantic, t.inline = Ns.pedantic) : this.options.gfm && (t.block = Vs.gfm, this.options.breaks ? t.inline = Ns.breaks : t.inline = Ns.gfm), this.tokenizer.rules = t
	}
	static get rules() {
		return {
			block: Vs,
			inline: Ns
		}
	}
	static lex(e, t) {
		return new Bs(t)
			.lex(e)
	}
	static lexInline(e, t) {
		return new Bs(t)
			.inlineTokens(e)
	}
	lex(e) {
		let t;
		for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();) this.inlineTokens(t.src, t.tokens);
		return this.tokens
	}
	blockTokens(e, t = []) {
		let n, r, l, i;
		for (e = this.options.pedantic ? e.replace(/\t/g, "    ")
			.replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, ((e, t, n) => t + "    ".repeat(n.length))); e;)
			if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((r => !!(n = r.call({
				lexer: this
			}, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))))
				if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), 1 === n.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(n);
				else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), r = t[t.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? t.push(n) : (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
		else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.list(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.def(e)) e = e.substring(n.raw.length), r = t[t.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
			href: n.href,
			title: n.title
		}) : (r.raw += "\n" + n.raw, r.text += "\n" + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
		else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), t.push(n);
		else {
			if (l = e, this.options.extensions && this.options.extensions.startBlock) {
				let t = 1 / 0;
				const n = e.slice(1);
				let r;
				this.options.extensions.startBlock.forEach((function(e) {
					r = e.call({
						lexer: this
					}, n), "number" == typeof r && r >= 0 && (t = Math.min(t, r))
				})), t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1))
			}
			if (this.state.top && (n = this.tokenizer.paragraph(l))) r = t[t.length - 1], i && "paragraph" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n), i = l.length !== e.length, e = e.substring(n.raw.length);
			else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), r = t[t.length - 1], r && "text" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
			else if (e) {
				const t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break
				}
				throw new Error(t)
			}
		}
		return this.state.top = !0, t
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t
	}
	inlineTokens(e, t = []) {
		let n, r, l, i, s, o, a = e;
		if (this.tokens.links) {
			const e = Object.keys(this.tokens.links);
			if (e.length > 0)
				for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(a));) e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, i.index) + "[" + Ps("a", i[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
		}
		for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(a));) a = a.slice(0, i.index) + "[" + Ps("a", i[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		for (; null != (i = this.tokenizer.rules.inline.escapedEmSt.exec(a));) a = a.slice(0, i.index + i[0].length - 2) + "++" + a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
		for (; e;)
			if (s || (o = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((r => !!(n = r.call({
				lexer: this
			}, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))))
				if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
				else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), r = t[t.length - 1], r && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
		else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), r = t[t.length - 1], r && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
		else if (n = this.tokenizer.emStrong(e, a, o)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
		else if (n = this.tokenizer.autolink(e, Hs)) e = e.substring(n.raw.length), t.push(n);
		else if (this.state.inLink || !(n = this.tokenizer.url(e, Hs))) {
			if (l = e, this.options.extensions && this.options.extensions.startInline) {
				let t = 1 / 0;
				const n = e.slice(1);
				let r;
				this.options.extensions.startInline.forEach((function(e) {
					r = e.call({
						lexer: this
					}, n), "number" == typeof r && r >= 0 && (t = Math.min(t, r))
				})), t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1))
			}
			if (n = this.tokenizer.inlineText(l, Ds)) e = e.substring(n.raw.length), "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)), s = !0, r = t[t.length - 1], r && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
			else if (e) {
				const t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break
				}
				throw new Error(t)
			}
		} else e = e.substring(n.raw.length), t.push(n);
		return t
	}
}
class Ws {
	constructor(e) {
		this.options = e || gs
	}
	code(e, t, n) {
		const r = (t || "")
			.match(/\S*/)[0];
		if (this.options.highlight) {
			const t = this.options.highlight(e, r);
			null != t && t !== e && (n = !0, e = t)
		}
		return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + xs(r) + '">' + (n ? e : xs(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : xs(e, !0)) + "</code></pre>\n"
	}
	blockquote(e) {
		return `<blockquote>\n${e}</blockquote>\n`
	}
	html(e) {
		return e
	}
	heading(e, t, n, r) {
		if (this.options.headerIds) {
			return `<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`
		}
		return `<h${t}>${e}</h${t}>\n`
	}
	hr() {
		return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
	}
	list(e, t, n) {
		const r = t ? "ol" : "ul";
		return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
	}
	listitem(e) {
		return `<li>${e}</li>\n`
	}
	checkbox(e) {
		return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
	}
	paragraph(e) {
		return `<p>${e}</p>\n`
	}
	table(e, t) {
		return t && (t = `<tbody>${t}</tbody>`), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
	}
	tablerow(e) {
		return `<tr>\n${e}</tr>\n`
	}
	tablecell(e, t) {
		const n = t.header ? "th" : "td";
		return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`
	}
	strong(e) {
		return `<strong>${e}</strong>`
	}
	em(e) {
		return `<em>${e}</em>`
	}
	codespan(e) {
		return `<code>${e}</code>`
	}
	br() {
		return this.options.xhtml ? "<br/>" : "<br>"
	}
	del(e) {
		return `<del>${e}</del>`
	}
	link(e, t, n) {
		if (null === (e = Es(this.options.sanitize, this.options.baseUrl, e))) return n;
		let r = '<a href="' + e + '"';
		return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>", r
	}
	image(e, t, n) {
		if (null === (e = Es(this.options.sanitize, this.options.baseUrl, e))) return n;
		let r = `<img src="${e}" alt="${n}"`;
		return t && (r += ` title="${t}"`), r += this.options.xhtml ? "/>" : ">", r
	}
	text(e) {
		return e
	}
}
class qs {
	strong(e) {
		return e
	}
	em(e) {
		return e
	}
	codespan(e) {
		return e
	}
	del(e) {
		return e
	}
	html(e) {
		return e
	}
	text(e) {
		return e
	}
	link(e, t, n) {
		return "" + n
	}
	image(e, t, n) {
		return "" + n
	}
	br() {
		return ""
	}
}
class Zs {
	constructor() {
		this.seen = {}
	}
	serialize(e) {
		return e.toLowerCase()
			.trim()
			.replace(/<[!\/a-z].*?>/gi, "")
			.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
			.replace(/\s/g, "-")
	}
	getNextSafeSlug(e, t) {
		let n = e,
			r = 0;
		if (this.seen.hasOwnProperty(n)) {
			r = this.seen[e];
			do {
				r++, n = e + "-" + r
			} while (this.seen.hasOwnProperty(n))
		}
		return t || (this.seen[e] = r, this.seen[n] = 0), n
	}
	slug(e, t = {}) {
		const n = this.serialize(e);
		return this.getNextSafeSlug(n, t.dryrun)
	}
}
class Ks {
	constructor(e) {
		this.options = e || gs, this.options.renderer = this.options.renderer || new Ws, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new qs, this.slugger = new Zs
	}
	static parse(e, t) {
		return new Ks(t)
			.parse(e)
	}
	static parseInline(e, t) {
		return new Ks(t)
			.parseInline(e)
	}
	parse(e, t = !0) {
		let n, r, l, i, s, o, a, c, u, p, d, h, f, g, m, v, y, b, w, k = "";
		const x = e.length;
		for (n = 0; n < x; n++)
			if (p = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type] && (w = this.options.extensions.renderers[p.type].call({
				parser: this
			}, p), !1 !== w || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(p.type))) k += w || "";
			else switch (p.type) {
				case "space":
					continue;
				case "hr":
					k += this.renderer.hr();
					continue;
				case "heading":
					k += this.renderer.heading(this.parseInline(p.tokens), p.depth, $s(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
					continue;
				case "code":
					k += this.renderer.code(p.text, p.lang, p.escaped);
					continue;
				case "table":
					for (c = "", a = "", i = p.header.length, r = 0; r < i; r++) a += this.renderer.tablecell(this.parseInline(p.header[r].tokens), {
						header: !0,
						align: p.align[r]
					});
					for (c += this.renderer.tablerow(a), u = "", i = p.rows.length, r = 0; r < i; r++) {
						for (o = p.rows[r], a = "", s = o.length, l = 0; l < s; l++) a += this.renderer.tablecell(this.parseInline(o[l].tokens), {
							header: !1,
							align: p.align[l]
						});
						u += this.renderer.tablerow(a)
					}
					k += this.renderer.table(c, u);
					continue;
				case "blockquote":
					u = this.parse(p.tokens), k += this.renderer.blockquote(u);
					continue;
				case "list":
					for (d = p.ordered, h = p.start, f = p.loose, i = p.items.length, u = "", r = 0; r < i; r++) m = p.items[r], v = m.checked, y = m.task, g = "", m.task && (b = this.renderer.checkbox(v), f ? m.tokens.length > 0 && "paragraph" === m.tokens[0].type ? (m.tokens[0].text = b + " " + m.tokens[0].text, m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && "text" === m.tokens[0].tokens[0].type && (m.tokens[0].tokens[0].text = b + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({
						type: "text",
						text: b
					}) : g += b), g += this.parse(m.tokens, f), u += this.renderer.listitem(g, y, v);
					k += this.renderer.list(u, d, h);
					continue;
				case "html":
					k += this.renderer.html(p.text);
					continue;
				case "paragraph":
					k += this.renderer.paragraph(this.parseInline(p.tokens));
					continue;
				case "text":
					for (u = p.tokens ? this.parseInline(p.tokens) : p.text; n + 1 < x && "text" === e[n + 1].type;) p = e[++n], u += "\n" + (p.tokens ? this.parseInline(p.tokens) : p.text);
					k += t ? this.renderer.paragraph(u) : u;
					continue;
				default:
					{
						const e = 'Token with "' + p.type + '" type was not found.';
						if (this.options.silent) return void console.error(e);
						throw new Error(e)
					}
			}
		return k
	}
	parseInline(e, t) {
		t = t || this.renderer;
		let n, r, l, i = "";
		const s = e.length;
		for (n = 0; n < s; n++)
			if (r = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type] && (l = this.options.extensions.renderers[r.type].call({
				parser: this
			}, r), !1 !== l || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type))) i += l || "";
			else switch (r.type) {
				case "escape":
				case "text":
					i += t.text(r.text);
					break;
				case "html":
					i += t.html(r.text);
					break;
				case "link":
					i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
					break;
				case "image":
					i += t.image(r.href, r.title, r.text);
					break;
				case "strong":
					i += t.strong(this.parseInline(r.tokens, t));
					break;
				case "em":
					i += t.em(this.parseInline(r.tokens, t));
					break;
				case "codespan":
					i += t.codespan(r.text);
					break;
				case "br":
					i += t.br();
					break;
				case "del":
					i += t.del(this.parseInline(r.tokens, t));
					break;
				default:
					{
						const e = 'Token with "' + r.type + '" type was not found.';
						if (this.options.silent) return void console.error(e);
						throw new Error(e)
					}
			}
		return i
	}
}
class Gs {
	constructor(e) {
		this.options = e || gs
	}
	static passThroughHooks = new Set(["preprocess", "postprocess"]);
	preprocess(e) {
		return e
	}
	postprocess(e) {
		return e
	}
}

function Qs(e, t) {
	return (n, r, l) => {
		"function" == typeof r && (l = r, r = null);
		const i = {
				...r
			},
			s = function(e, t, n) {
				return r => {
					if (r.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
						const e = "<p>An error occurred:</p><pre>" + xs(r.message + "", !0) + "</pre>";
						return t ? Promise.resolve(e) : n ? void n(null, e) : e
					}
					if (t) return Promise.reject(r);
					if (!n) throw r;
					n(r)
				}
			}((r = {
					...Js.defaults,
					...i
				})
				.silent, r.async, l);
		if (null == n) return s(new Error("marked(): input parameter is undefined or null"));
		if ("string" != typeof n) return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
		if (function(e) {
			e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
		}(r), r.hooks && (r.hooks.options = r), l) {
			const i = r.highlight;
			let o;
			try {
				r.hooks && (n = r.hooks.preprocess(n)), o = e(n, r)
			} catch (e) {
				return s(e)
			}
			const a = function(e) {
				let n;
				if (!e) try {
					r.walkTokens && Js.walkTokens(o, r.walkTokens), n = t(o, r), r.hooks && (n = r.hooks.postprocess(n))
				} catch (t) {
					e = t
				}
				return r.highlight = i, e ? s(e) : l(null, n)
			};
			if (!i || i.length < 3) return a();
			if (delete r.highlight, !o.length) return a();
			let c = 0;
			return Js.walkTokens(o, (function(e) {
				"code" === e.type && (c++, setTimeout((() => {
					i(e.text, e.lang, (function(t, n) {
						if (t) return a(t);
						null != n && n !== e.text && (e.text = n, e.escaped = !0), c--, 0 === c && a()
					}))
				}), 0))
			})), void(0 === c && a())
		}
		if (r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(n) : n)
			.then((t => e(t, r)))
			.then((e => r.walkTokens ? Promise.all(Js.walkTokens(e, r.walkTokens))
				.then((() => e)) : e))
			.then((e => t(e, r)))
			.then((e => r.hooks ? r.hooks.postprocess(e) : e))
			.catch(s);
		try {
			r.hooks && (n = r.hooks.preprocess(n));
			const l = e(n, r);
			r.walkTokens && Js.walkTokens(l, r.walkTokens);
			let i = t(l, r);
			return r.hooks && (i = r.hooks.postprocess(i)), i
		} catch (e) {
			return s(e)
		}
	}
}

function Js(e, t, n) {
	return Qs(Bs.lex, Ks.parse)(e, t, n)
}
Js.options = Js.setOptions = function(e) {
	var t;
	return Js.defaults = {
		...Js.defaults,
		...e
	}, t = Js.defaults, gs = t, Js
}, Js.getDefaults = fs, Js.defaults = gs, Js.use = function(...e) {
	const t = Js.defaults.extensions || {
		renderers: {},
		childTokens: {}
	};
	e.forEach((e => {
		const n = {
			...e
		};
		if (n.async = Js.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e => {
			if (!e.name) throw new Error("extension name required");
			if (e.renderer) {
				const n = t.renderers[e.name];
				t.renderers[e.name] = n ? function(...t) {
					let r = e.renderer.apply(this, t);
					return !1 === r && (r = n.apply(this, t)), r
				} : e.renderer
			}
			if (e.tokenizer) {
				if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
				t[e.level] ? t[e.level].unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
			}
			e.childTokens && (t.childTokens[e.name] = e.childTokens)
		})), n.extensions = t), e.renderer) {
			const t = Js.defaults.renderer || new Ws;
			for (const n in e.renderer) {
				const r = t[n];
				t[n] = (...l) => {
					let i = e.renderer[n].apply(t, l);
					return !1 === i && (i = r.apply(t, l)), i
				}
			}
			n.renderer = t
		}
		if (e.tokenizer) {
			const t = Js.defaults.tokenizer || new Fs;
			for (const n in e.tokenizer) {
				const r = t[n];
				t[n] = (...l) => {
					let i = e.tokenizer[n].apply(t, l);
					return !1 === i && (i = r.apply(t, l)), i
				}
			}
			n.tokenizer = t
		}
		if (e.hooks) {
			const t = Js.defaults.hooks || new Gs;
			for (const n in e.hooks) {
				const r = t[n];
				Gs.passThroughHooks.has(n) ? t[n] = l => {
					if (Js.defaults.async) return Promise.resolve(e.hooks[n].call(t, l))
						.then((e => r.call(t, e)));
					const i = e.hooks[n].call(t, l);
					return r.call(t, i)
				} : t[n] = (...l) => {
					let i = e.hooks[n].apply(t, l);
					return !1 === i && (i = r.apply(t, l)), i
				}
			}
			n.hooks = t
		}
		if (e.walkTokens) {
			const t = Js.defaults.walkTokens;
			n.walkTokens = function(n) {
				let r = [];
				return r.push(e.walkTokens.call(this, n)), t && (r = r.concat(t.call(this, n))), r
			}
		}
		Js.setOptions(n)
	}))
}, Js.walkTokens = function(e, t) {
	let n = [];
	for (const r of e) switch (n = n.concat(t.call(Js, r)), r.type) {
		case "table":
			for (const e of r.header) n = n.concat(Js.walkTokens(e.tokens, t));
			for (const e of r.rows)
				for (const r of e) n = n.concat(Js.walkTokens(r.tokens, t));
			break;
		case "list":
			n = n.concat(Js.walkTokens(r.items, t));
			break;
		default:
			Js.defaults.extensions && Js.defaults.extensions.childTokens && Js.defaults.extensions.childTokens[r.type] ? Js.defaults.extensions.childTokens[r.type].forEach((function(e) {
				n = n.concat(Js.walkTokens(r[e], t))
			})) : r.tokens && (n = n.concat(Js.walkTokens(r.tokens, t)))
	}
	return n
}, Js.parseInline = Qs(Bs.lexInline, Ks.parseInline), Js.Parser = Ks, Js.parser = Ks.parse, Js.Renderer = Ws, Js.TextRenderer = qs, Js.Lexer = Bs, Js.lexer = Bs.lex, Js.Tokenizer = Fs, Js.Slugger = Zs, Js.Hooks = Gs, Js.parse = Js;
const Xs = /\$.*?\$/,
	Ys = /^\$(.*?)\$/,
	eo = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
	to = (e = "", t = {}) => e.replace(/:(.+?):/g, ((e, n) => t[n] ? `<img class="wl-emoji" src="${t[n]}" alt="${n}">` : e)),
	no = (e, {
		emojiMap: t,
		highlighter: n,
		texRenderer: r
	}) => {
		if (Js.setOptions({
			highlight: n || void 0,
			breaks: !0,
			smartLists: !0,
			smartypants: !0
		}), r) {
			const e = (e => [{
				name: "blockMath",
				level: "block",
				tokenizer(t) {
					const n = eo.exec(t);
					if (null !== n) return {
						type: "html",
						raw: n[0],
						text: e(!0, n[1])
					}
				}
			}, {
				name: "inlineMath",
				level: "inline",
				start(e) {
					const t = e.search(Xs);
					return -1 !== t ? t : e.length
				},
				tokenizer(t) {
					const n = Ys.exec(t);
					if (null !== n) return {
						type: "html",
						raw: n[0],
						text: e(!1, n[1])
					}
				}
			}])(r);
			Js.use({
				extensions: e
			})
		}
		return Js.parse(to(e, t))
	},
	ro = e => e.dataset.path || e.getAttribute("id"),
	lo = ({
		serverURL: e,
		path: t = window.location.pathname,
		selector: n = ".waline-comment-count",
		lang: r = navigator.language
	}) => {
		const l = new AbortController,
			i = document.querySelectorAll(n);
		return i.length && (({
					serverURL: e,
					lang: t,
					paths: n,
					signal: r
				}) => fetch(`${e}/comment?type=count&url=${encodeURIComponent(n.join(","))}&lang=${t}`, {
					signal: r
				})
				.then((e => e.json()))
				.then((e => Array.isArray(e) ? e : [e])))({
				serverURL: E(e),
				paths: Array.from(i)
					.map((e => S(e.dataset.path || e.getAttribute("id") || t))),
				lang: r,
				signal: l.signal
			})
			.then((e => {
				i.forEach(((t, n) => {
					t.innerText = e[n].toString()
				}))
			}))
			.catch(us), l.abort.bind(l)
	},
	io = ({
		size: e
	}) => Ll("svg", {
		class: "wl-close-icon",
		viewBox: "0 0 1024 1024",
		width: e,
		height: e
	}, [Ll("path", {
		d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
		fill: "currentColor"
	}), Ll("path", {
		d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
		fill: "#888"
	})]),
	so = () => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, Ll("path", {
		d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
		fill: "red"
	})),
	oo = () => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, Ll("path", {
		d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
		fill: "currentColor"
	})),
	ao = () => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, [Ll("path", {
		d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
		fill: "currentColor"
	}), Ll("path", {
		d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
		fill: "currentColor"
	})]),
	co = ({
		active: e = !1
	}) => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, [Ll("path", {
		d: "M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z" + (e ? "" : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),
		fill: e ? "red" : "currentColor"
	})]),
	uo = () => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, [Ll("path", {
		d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
		fill: "currentColor"
	}), Ll("path", {
		d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
		fill: "currentColor"
	})]),
	po = () => Ll("svg", {
		width: "16",
		height: "16",
		ariaHidden: "true"
	}, Ll("path", {
		d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
		fill: "currentColor"
	})),
	ho = () => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, Ll("path", {
		d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
		fill: "currentColor"
	})),
	fo = () => Ll("svg", {
		viewBox: "0 0 1024 1024",
		width: "24",
		height: "24"
	}, Ll("path", {
		d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
		fill: "currentColor"
	})),
	go = () => Ll("svg", {
		class: "verified-icon",
		viewBox: "0 0 1024 1024",
		width: "14",
		height: "14"
	}, Ll("path", {
		d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
		fill: "#27ae60"
	})),
	mo = ({
		size: e = 100
	}) => Ll("svg", {
		width: e,
		height: e,
		viewBox: "0 0 100 100",
		preserveAspectRatio: "xMidYMid"
	}, Ll("circle", {
		cx: 50,
		cy: 50,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "4",
		r: "40",
		"stroke-dasharray": "85 30"
	}, Ll("animateTransform", {
		attributeName: "transform",
		type: "rotate",
		repeatCount: "indefinite",
		dur: "1s",
		values: "0 50 50;360 50 50",
		keyTimes: "0;1"
	}))),
	vo = () => Ll("svg", {
		width: 24,
		height: 24,
		fill: "currentcolor",
		viewBox: "0 0 24 24"
	}, [Ll("path", {
		style: "transform: translateY(0.5px)",
		d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"
	}), Ll("path", {
		d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"
	})]);
let yo = null;
const bo = () => yo || (yo = Yi("WALINE_LIKE", []));
let wo = null;
const ko = () => wo ? ? (wo = Yi("WALINE_REACTION", {}));
var xo = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
	_o = {},
	$o = {},
	Co = {},
	So = xo && xo.__awaiter || function(e, t, n, r) {
		return new(n || (n = Promise))((function(l, i) {
			function s(e) {
				try {
					a(r.next(e))
				} catch (e) {
					i(e)
				}
			}

			function o(e) {
				try {
					a(r.throw(e))
				} catch (e) {
					i(e)
				}
			}

			function a(e) {
				var t;
				e.done ? l(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					})))
					.then(s, o)
			}
			a((r = r.apply(e, t || []))
				.next())
		}))
	},
	Ao = xo && xo.__generator || function(e, t) {
		var n, r, l, i, s = {
			label: 0,
			sent: function() {
				if (1 & l[0]) throw l[1];
				return l[1]
			},
			trys: [],
			ops: []
		};
		return i = {
			next: o(0),
			throw: o(1),
			return: o(2)
		}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
			return this
		}), i;

		function o(i) {
			return function(o) {
				return function(i) {
					if (n) throw new TypeError("Generator is already executing.");
					for (; s;) try {
						if (n = 1, r && (l = 2 & i[0] ? r.return : i[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, i[1]))
							.done) return l;
						switch (r = 0, l && (i = [2 & i[0], l.value]), i[0]) {
							case 0:
							case 1:
								l = i;
								break;
							case 4:
								return s.label++, {
									value: i[1],
									done: !1
								};
							case 5:
								s.label++, r = i[1], i = [0];
								continue;
							case 7:
								i = s.ops.pop(), s.trys.pop();
								continue;
							default:
								if (!(l = s.trys, (l = l.length > 0 && l[l.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
									s = 0;
									continue
								}
								if (3 === i[0] && (!l || i[1] > l[0] && i[1] < l[3])) {
									s.label = i[1];
									break
								}
								if (6 === i[0] && s.label < l[1]) {
									s.label = l[1], l = i;
									break
								}
								if (l && s.label < l[2]) {
									s.label = l[2], s.ops.push(i);
									break
								}
								l[2] && s.ops.pop(), s.trys.pop();
								continue
						}
						i = t.call(e, s)
					} catch (e) {
						i = [6, e], r = 0
					} finally {
						n = l = 0
					}
					if (5 & i[0]) throw i[1];
					return {
						value: i[0] ? i[1] : void 0,
						done: !0
					}
				}([i, o])
			}
		}
	};
Object.defineProperty(Co, "__esModule", {
	value: !0
}), Co.ReCaptchaInstance = void 0;
var Ro = function() {
	function e(e, t, n) {
		this.siteKey = e, this.recaptchaID = t, this.recaptcha = n, this.styleContainer = null
	}
	return e.prototype.execute = function(e) {
		return So(this, void 0, void 0, (function() {
			return Ao(this, (function(t) {
				return [2, this.recaptcha.enterprise ? this.recaptcha.enterprise.execute(this.recaptchaID, {
					action: e
				}) : this.recaptcha.execute(this.recaptchaID, {
					action: e
				})]
			}))
		}))
	}, e.prototype.getSiteKey = function() {
		return this.siteKey
	}, e.prototype.hideBadge = function() {
		null === this.styleContainer && (this.styleContainer = document.createElement("style"), this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}", document.head.appendChild(this.styleContainer))
	}, e.prototype.showBadge = function() {
		null !== this.styleContainer && (document.head.removeChild(this.styleContainer), this.styleContainer = null)
	}, e
}();
Co.ReCaptchaInstance = Ro, Object.defineProperty($o, "__esModule", {
	value: !0
}), $o.getInstance = $o.load = void 0;
var Eo, zo = Co;
! function(e) {
	e[e.NOT_LOADED = 0] = "NOT_LOADED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED"
}(Eo || (Eo = {}));
var Lo = function() {
	function e() {}
	return e.load = function(t, n) {
		if (void 0 === n && (n = {}), "undefined" == typeof document) return Promise.reject(new Error("This is a library for the browser!"));
		if (e.getLoadingState() === Eo.LOADED) return e.instance.getSiteKey() === t ? Promise.resolve(e.instance) : Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
		if (e.getLoadingState() === Eo.LOADING) return t !== e.instanceSiteKey ? Promise.reject(new Error("reCAPTCHA already loaded with different site key!")) : new Promise((function(t, n) {
			e.successfulLoadingConsumers.push((function(e) {
				return t(e)
			})), e.errorLoadingRunnable.push((function(e) {
				return n(e)
			}))
		}));
		e.instanceSiteKey = t, e.setLoadingState(Eo.LOADING);
		var r = new e;
		return new Promise((function(l, i) {
			r.loadScript(t, n.useRecaptchaNet || !1, n.useEnterprise || !1, n.renderParameters ? n.renderParameters : {}, n.customUrl)
				.then((function() {
					e.setLoadingState(Eo.LOADED);
					var i = r.doExplicitRender(grecaptcha, t, n.explicitRenderParameters ? n.explicitRenderParameters : {}, n.useEnterprise || !1),
						s = new zo.ReCaptchaInstance(t, i, grecaptcha);
					e.successfulLoadingConsumers.forEach((function(e) {
						return e(s)
					})), e.successfulLoadingConsumers = [], n.autoHideBadge && s.hideBadge(), e.instance = s, l(s)
				}))
				.catch((function(t) {
					e.errorLoadingRunnable.forEach((function(e) {
						return e(t)
					})), e.errorLoadingRunnable = [], i(t)
				}))
		}))
	}, e.getInstance = function() {
		return e.instance
	}, e.setLoadingState = function(t) {
		e.loadingState = t
	}, e.getLoadingState = function() {
		return null === e.loadingState ? Eo.NOT_LOADED : e.loadingState
	}, e.prototype.loadScript = function(t, n, r, l, i) {
		var s = this;
		void 0 === n && (n = !1), void 0 === r && (r = !1), void 0 === l && (l = {}), void 0 === i && (i = "");
		var o = document.createElement("script");
		o.setAttribute("recaptcha-v3-script", "");
		var a = "https://www.google.com/recaptcha/api.js";
		n && (a = r ? "https://recaptcha.net/recaptcha/enterprise.js" : "https://recaptcha.net/recaptcha/api.js"), r && (a = "https://www.google.com/recaptcha/enterprise.js"), i && (a = i), l.render && (l.render = void 0);
		var c = this.buildQueryString(l);
		return o.src = a + "?render=explicit" + c, new Promise((function(t, n) {
			o.addEventListener("load", s.waitForScriptToLoad((function() {
				t(o)
			}), r), !1), o.onerror = function(t) {
				e.setLoadingState(Eo.NOT_LOADED), n(t)
			}, document.head.appendChild(o)
		}))
	}, e.prototype.buildQueryString = function(e) {
		return Object.keys(e)
			.length < 1 ? "" : "&" + Object.keys(e)
			.filter((function(t) {
				return !!e[t]
			}))
			.map((function(t) {
				return t + "=" + e[t]
			}))
			.join("&")
	}, e.prototype.waitForScriptToLoad = function(t, n) {
		var r = this;
		return function() {
			void 0 === window.grecaptcha ? setTimeout((function() {
				r.waitForScriptToLoad(t, n)
			}), e.SCRIPT_LOAD_DELAY) : n ? window.grecaptcha.enterprise.ready((function() {
				t()
			})) : window.grecaptcha.ready((function() {
				t()
			}))
		}
	}, e.prototype.doExplicitRender = function(e, t, n, r) {
		var l = {
			sitekey: t,
			badge: n.badge,
			size: n.size,
			tabindex: n.tabindex
		};
		return n.container ? r ? e.enterprise.render(n.container, l) : e.render(n.container, l) : r ? e.enterprise.render(l) : e.render(l)
	}, e.loadingState = null, e.instance = null, e.instanceSiteKey = null, e.successfulLoadingConsumers = [], e.errorLoadingRunnable = [], e.SCRIPT_LOAD_DELAY = 25, e
}();
$o.load = Lo.load, $o.getInstance = Lo.getInstance,
	function(e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.ReCaptchaInstance = e.getInstance = e.load = void 0;
		var t = $o;
		Object.defineProperty(e, "load", {
			enumerable: !0,
			get: function() {
				return t.load
			}
		}), Object.defineProperty(e, "getInstance", {
			enumerable: !0,
			get: function() {
				return t.getInstance
			}
		});
		var n = Co;
		Object.defineProperty(e, "ReCaptchaInstance", {
			enumerable: !0,
			get: function() {
				return n.ReCaptchaInstance
			}
		})
	}(_o);
const Io = {};
let jo = null;
const Oo = () => jo ? ? (jo = Yi("WALINE_USER", {})),
	To = {
		key: 0,
		class: "wl-reaction"
	},
	Uo = ["textContent"],
	Po = {
		class: "wl-reaction-list"
	},
	Mo = ["onClick"],
	Fo = {
		class: "wl-reaction-img"
	},
	Vo = ["src", "alt"],
	No = ["textContent"],
	Do = ["textContent"];
var Ho = Kn({
		__name: "ArticleReaction",
		setup(e, {
			expose: t
		}) {
			t();
			const n = ko(),
				r = xr("config"),
				l = nn(-1),
				i = nn([]),
				s = zl((() => r.value.locale)),
				o = zl((() => r.value.reaction.length > 0)),
				a = zl((() => {
					const {
						reaction: e,
						path: t
					} = r.value;
					return e.map(((e, r) => ({
						icon: e,
						desc: s.value[`reaction${r}`],
						active: n.value[t] === r
					})))
				}));
			let c;
			return Xn((() => {
				Hn((() => [r.value.serverURL, r.value.path]), (() => {
					(async () => {
						if (o.value) {
							const {
								serverURL: e,
								lang: t,
								path: n,
								reaction: l
							} = r.value, s = new AbortController;
							c = s.abort.bind(s);
							const o = await _({
								serverURL: e,
								lang: t,
								paths: [n],
								type: l.map(((e, t) => `reaction${t}`)),
								signal: s.signal
							});
							if (Array.isArray(o) || "number" == typeof o) return;
							i.value = l.map(((e, t) => o[`reaction${t}`]))
						}
					})()
				}), {
					immediate: !0
				})
			})), er((() => c ? .())), (e, t) => a.value.length ? (Gr(), Yr("div", To, [sl("div", {
				class: "wl-reaction-title",
				textContent: Ie(s.value.reactionTitle)
			}, null, 8, Uo), sl("ul", Po, [(Gr(!0), Yr(Hr, null, ir(a.value, (({
				active: e,
				icon: t,
				desc: s
			}, o) => (Gr(), Yr("li", {
				key: o,
				class: Ae(["wl-reaction-item", {
					active: e
				}]),
				onClick: e => (async e => {
					if (-1 === l.value) {
						const {
							serverURL: t,
							lang: s,
							path: o
						} = r.value, a = n.value[o];
						l.value = e, void 0 !== a && (await $({
							serverURL: t,
							lang: s,
							path: o,
							type: `reaction${a}`,
							action: "desc"
						}), i.value[a] = Math.max(i.value[a] - 1, 0)), a !== e && (await $({
							serverURL: t,
							lang: s,
							path: o,
							type: `reaction${e}`
						}), i.value[e] = (i.value[e] || 0) + 1), a === e ? delete n.value[o] : n.value[o] = e, l.value = -1
					}
				})(o)
			}, [sl("div", Fo, [sl("img", {
				src: t,
				alt: s
			}, null, 8, Vo), l.value === o ? (Gr(), el(on(mo), {
				key: 0,
				class: "wl-reaction-loading"
			})) : (Gr(), Yr("div", {
				key: 1,
				class: "wl-reaction-votes",
				textContent: Ie(i.value[o] || 0)
			}, null, 8, No))]), sl("div", {
				class: "wl-reaction-text",
				textContent: Ie(s)
			}, null, 8, Do)], 10, Mo)))), 128))])])) : ul("v-if", !0)
		}
	}),
	Bo = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [e, r] of t) n[e] = r;
		return n
	},
	Wo = Bo(Ho, [
		["__file", "ArticleReaction.vue"]
	]),
	qo = new Map;

function Zo(e) {
	var t = qo.get(e);
	t && t.destroy()
}

function Ko(e) {
	var t = qo.get(e);
	t && t.update()
}
var Go = null;
"undefined" == typeof window ? ((Go = function(e) {
		return e
	})
	.destroy = function(e) {
		return e
	}, Go.update = function(e) {
		return e
	}) : ((Go = function(e, t) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
			return function(e) {
				if (e && e.nodeName && "TEXTAREA" === e.nodeName && !qo.has(e)) {
					var t, n = null,
						r = window.getComputedStyle(e),
						l = (t = e.value, function() {
							s({
								testForHeightReduction: "" === t || !e.value.startsWith(t),
								restoreTextAlign: null
							}), t = e.value
						}),
						i = function(t) {
							e.removeEventListener("autosize:destroy", i), e.removeEventListener("autosize:update", o), e.removeEventListener("input", l), window.removeEventListener("resize", o), Object.keys(t)
								.forEach((function(n) {
									return e.style[n] = t[n]
								})), qo.delete(e)
						}.bind(e, {
							height: e.style.height,
							resize: e.style.resize,
							textAlign: e.style.textAlign,
							overflowY: e.style.overflowY,
							overflowX: e.style.overflowX,
							wordWrap: e.style.wordWrap
						});
					e.addEventListener("autosize:destroy", i), e.addEventListener("autosize:update", o), e.addEventListener("input", l), window.addEventListener("resize", o), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", qo.set(e, {
						destroy: i,
						update: o
					}), o()
				}

				function s(t) {
					var l, i, o = t.restoreTextAlign,
						a = void 0 === o ? null : o,
						c = t.testForHeightReduction,
						u = void 0 === c || c,
						p = r.overflowY;
					if (0 !== e.scrollHeight && ("vertical" === r.resize ? e.style.resize = "none" : "both" === r.resize && (e.style.resize = "horizontal"), u && (l = function(e) {
						for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push([e.parentNode, e.parentNode.scrollTop]), e = e.parentNode;
						return function() {
							return t.forEach((function(e) {
								var t = e[0],
									n = e[1];
								t.style.scrollBehavior = "auto", t.scrollTop = n, t.style.scrollBehavior = null
							}))
						}
					}(e), e.style.height = ""), i = "content-box" === r.boxSizing ? e.scrollHeight - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)) : e.scrollHeight + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), "none" !== r.maxHeight && i > parseFloat(r.maxHeight) ? ("hidden" === r.overflowY && (e.style.overflow = "scroll"), i = parseFloat(r.maxHeight)) : "hidden" !== r.overflowY && (e.style.overflow = "hidden"), e.style.height = i + "px", a && (e.style.textAlign = a), l && l(), n !== i && (e.dispatchEvent(new Event("autosize:resized", {
						bubbles: !0
					})), n = i), p !== r.overflow && !a)) {
						var d = r.textAlign;
						"hidden" === r.overflow && (e.style.textAlign = "start" === d ? "end" : "start"), s({
							restoreTextAlign: d,
							testForHeightReduction: !0
						})
					}
				}

				function o() {
					s({
						testForHeightReduction: !0,
						restoreTextAlign: null
					})
				}
			}(e)
		})), e
	})
	.destroy = function(e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], Zo), e
	}, Go.update = function(e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], Ko), e
	});
var Qo = Go;
const Jo = ["data-index"],
	Xo = ["src", "title", "onClick"];
var Yo = Kn({
		__name: "ImageWall",
		props: {
			items: {
				default: () => []
			},
			columnWidth: {
				default: 300
			},
			gap: {
				default: 0
			}
		},
		emits: ["insert"],
		setup(e, {
			expose: t
		}) {
			const n = e;
			t();
			let r = null;
			const l = nn(null),
				i = nn({}),
				s = nn([]),
				o = () => {
					const e = Math.floor((l.value.getBoundingClientRect()
						.width + n.gap) / (n.columnWidth + n.gap));
					return e > 0 ? e : 1
				},
				a = async e => {
					if (e >= n.items.length) return;
					await _n();
					const t = Array.from(l.value ? .children || [])
						.reduce(((e, t) => t.getBoundingClientRect()
							.height < e.getBoundingClientRect()
							.height ? t : e));
					s.value[Number(t.dataset.index)].push(e), await a(e + 1)
				}, c = async (e = !1) => {
					if (s.value.length === o() && !e) return;
					var t;
					s.value = (t = o(), new Array(t)
						.fill(null)
						.map((() => [])));
					const n = window.scrollY;
					await a(0), window.scrollTo({
						top: n
					})
				}, u = e => {
					i.value[e.target.src] = !0
				};
			return Xn((() => {
				c(!0), r = new ResizeObserver((() => {
					c()
				})), r.observe(l.value), Hn((() => [n.items]), (() => {
					i.value = {}, c(!0)
				})), Hn((() => [n.columnWidth, n.gap]), (() => {
					c()
				}))
			})), Yn((() => r.unobserve(l.value))), (e, t) => (Gr(), Yr("div", {
				ref_key: "wall",
				ref: l,
				class: "wl-gallery",
				style: xe({
					gap: `${e.gap}px`
				})
			}, [(Gr(!0), Yr(Hr, null, ir(s.value, ((t, n) => (Gr(), Yr("div", {
				key: n,
				class: "wl-gallery-column",
				"data-index": n,
				style: xe({
					gap: `${e.gap}px`
				})
			}, [(Gr(!0), Yr(Hr, null, ir(t, (t => (Gr(), Yr(Hr, {
				key: t
			}, [i.value[e.items[t].src] ? ul("v-if", !0) : (Gr(), el(on(mo), {
				key: 0,
				size: 36,
				style: {
					margin: "20px auto"
				}
			})), sl("img", {
				class: "wl-gallery-item",
				src: e.items[t].src,
				title: e.items[t].title,
				loading: "lazy",
				onLoad: u,
				onClick: n => e.$emit("insert", `![](${e.items[t].src})`)
			}, null, 40, Xo)], 64)))), 128))], 12, Jo)))), 128))], 4))
		}
	}),
	ea = Bo(Yo, [
		["__file", "ImageWall.vue"]
	]);
const ta = {
		class: "wl-comment"
	},
	na = {
		key: 0,
		class: "wl-login-info"
	},
	ra = {
		class: "wl-avatar"
	},
	la = ["title"],
	ia = ["title"],
	sa = ["src"],
	oa = ["title", "textContent"],
	aa = {
		class: "wl-panel"
	},
	ca = ["for", "textContent"],
	ua = ["id", "onUpdate:modelValue", "name", "type"],
	pa = ["placeholder"],
	da = {
		class: "wl-preview"
	},
	ha = sl("hr", null, null, -1),
	fa = ["innerHTML"],
	ga = {
		class: "wl-footer"
	},
	ma = {
		class: "wl-actions"
	},
	va = {
		href: "https://guides.github.com/features/mastering-markdown/",
		title: "Markdown Guide",
		"aria-label": "Markdown is supported",
		class: "wl-action",
		target: "_blank",
		rel: "noopener noreferrer"
	},
	ya = ["title"],
	ba = ["title"],
	wa = ["title"],
	ka = ["title"],
	xa = {
		class: "wl-info"
	},
	_a = sl("div", {
		class: "wl-captcha-container"
	}, null, -1),
	$a = {
		class: "wl-text-number"
	},
	Ca = {
		key: 0
	},
	Sa = ["textContent"],
	Aa = ["textContent"],
	Ra = ["disabled"],
	Ea = ["placeholder"],
	za = {
		key: 1,
		class: "wl-loading"
	},
	La = {
		key: 0,
		class: "wl-tab-wrapper"
	},
	Ia = ["title", "onClick"],
	ja = ["src", "alt"],
	Oa = {
		key: 0,
		class: "wl-tabs"
	},
	Ta = ["onClick"],
	Ua = ["src", "alt", "title"],
	Pa = ["title"];
var Ma = Kn({
		__name: "CommentBox",
		props: {
			edit: {
				default: null
			},
			rootId: {
				default: ""
			},
			replyId: {
				default: ""
			},
			replyUser: {
				default: ""
			}
		},
		emits: ["log", "cancelEdit", "cancelReply", "submit"],
		setup(e, {
			expose: t,
			emit: n
		}) {
			const r = e;
			t();
			const l = xr("config"),
				i = Yi("WALINE_COMMENT_BOX_EDITOR", ""),
				s = Yi("WALINE_USER_META", {
					nick: "",
					mail: "",
					link: ""
				}),
				o = Oo(),
				a = nn({}),
				c = nn(null),
				u = nn(null),
				p = nn(null),
				d = nn(null),
				h = nn(null),
				f = nn(null),
				g = nn(null),
				m = nn({
					tabs: [],
					map: {}
				}),
				v = nn(0),
				y = nn(!1),
				b = nn(!1),
				w = nn(!1),
				k = nn(""),
				x = nn(0),
				_ = Dt({
					loading: !0,
					list: []
				}),
				$ = nn(0),
				S = nn(!1),
				R = nn(""),
				E = nn(!1),
				z = nn(!1),
				L = zl((() => l.value.locale)),
				I = zl((() => Boolean(o.value ? .token))),
				j = zl((() => !1 !== l.value.imageUploader)),
				O = e => {
					const t = c.value,
						n = t.selectionStart,
						r = t.selectionEnd || 0,
						l = t.scrollTop;
					i.value = t.value.substring(0, n) + e + t.value.substring(r, t.value.length), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = l
				},
				U = e => {
					const t = e.key;
					(e.ctrlKey || e.metaKey) && "Enter" === t && N()
				},
				P = e => {
					const t = `![${l.value.locale.uploading} ${e.name}]()`;
					return O(t), Promise.resolve()
						.then((() => l.value.imageUploader(e)))
						.then((n => {
							i.value = i.value.replace(t, `\r\n![${e.name}](${n})`)
						}))
						.catch((e => {
							alert(e.message), i.value = i.value.replace(t, "")
						}))
				},
				M = e => {
					if (e.dataTransfer ? .items) {
						const t = hs(e.dataTransfer.items);
						t && j.value && (P(t), e.preventDefault())
					}
				},
				F = e => {
					if (e.clipboardData) {
						const t = hs(e.clipboardData.items);
						t && j.value && P(t)
					}
				},
				V = () => {
					const e = u.value;
					e.files && j.value && P(e.files[0])
						.then((() => {
							e.value = ""
						}))
				},
				N = async () => {
					const {
						serverURL: e,
						lang: t,
						login: u,
						wordLimit: p,
						requiredMeta: d,
						recaptchaV3Key: h,
						turnstileKey: f
					} = l.value, g = await (async () => {
						if (!navigator) return "";
						const {
							userAgentData: e
						} = navigator;
						let t = navigator.userAgent;
						if (!e || "Windows" !== e.platform) return t;
						const {
							platformVersion: n
						} = await e.getHighEntropyValues(["platformVersion"]);
						return n ? (parseInt(n.split(".")[0]) >= 13 && (t = t.replace("Windows NT 10.0", "Windows NT 11.0")), t) : t
					})(), v = {
						comment: R.value,
						nick: s.value.nick,
						mail: s.value.mail,
						link: s.value.link,
						url: l.value.path,
						ua: g
					};
					if (o.value ? .token) v.nick = o.value.display_name, v.mail = o.value.email, v.link = o.value.url;
					else {
						if ("force" === u) return;
						if (d.indexOf("nick") > -1 && !v.nick) return a.value.nick ? .focus(), alert(L.value.nickError);
						if (d.indexOf("mail") > -1 && !v.mail || v.mail && (y = v.mail, !T.test(y))) return a.value.mail ? .focus(), alert(L.value.mailError);
						v.nick || (v.nick = L.value.anonymous)
					}
					var y;
					if (v.comment) {
						if (!S.value) return alert(L.value.wordHint.replace("$0", p[0].toString())
							.replace("$1", p[1].toString())
							.replace("$2", x.value.toString()));
						v.comment = to(v.comment, m.value.map), r.replyId && r.rootId && (v.pid = r.replyId, v.rid = r.rootId, v.at = r.replyUser), E.value = !0;
						try {
							h && (v.recaptchaV3 = await (e => {
									const t = Io[e] ? ? (Io[e] = _o.load(e, {
										useRecaptchaNet: !0,
										autoHideBadge: !0
									}));
									return {
										execute: e => t.then((t => t.execute(e)))
									}
								})(h)
								.execute("social")), f && (v.turnstile = await (b = f, {
									execute: e => new Promise((t => {
										ss("https://challenges.cloudflare.com/turnstile/v0/api.js", (() => {
											const n = window ? .turnstile,
												r = {
													sitekey: b,
													action: e,
													size: "compact",
													callback(e) {
														t(e)
													}
												};
											n ? .ready((() => n ? .render(".wl-captcha-container", r)))
										}), {
											async: !1
										})
									}))
								})
								.execute("social"));
							const l = {
									serverURL: e,
									lang: t,
									token: o.value ? .token,
									comment: v
								},
								s = await (r.edit ? C({
									objectId: r.edit.objectId,
									...l
								}) : (({
									serverURL: e,
									lang: t,
									token: n,
									comment: r
								}) => {
									const l = {
										"Content-Type": "application/json"
									};
									return n && (l.Authorization = `Bearer ${n}`), fetch(`${e}/comment?lang=${t}`, {
											method: "POST",
											headers: l,
											body: JSON.stringify(r)
										})
										.then((e => e.json()))
								})(l));
							if (E.value = !1, s.errmsg) return alert(s.errmsg);
							n("submit", s.data), i.value = "", k.value = "", r.replyId && n("cancelReply"), r.edit ? .objectId && n("cancelEdit")
						} catch (e) {
							E.value = !1, alert(e.message)
						}
						var b
					} else c.value ? .focus()
				}, D = e => {
					e.preventDefault();
					const {
						lang: t,
						serverURL: r
					} = l.value;
					(({
						lang: e,
						serverURL: t
					}) => {
						const n = (window.innerWidth - 450) / 2,
							r = (window.innerHeight - 450) / 2,
							l = window.open(`${t}/ui/login?lng=${encodeURIComponent(e)}`, "_blank", `width=450,height=450,left=${n},top=${r},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
						return l ? .postMessage({
							type: "TOKEN",
							data: null
						}, "*"), new Promise((e => {
							const t = ({
								data: n
							}) => {
								n && "object" == typeof n && "userInfo" === n.type && n.data.token && (l ? .close(), window.removeEventListener("message", t), e(n.data))
							};
							window.addEventListener("message", t)
						}))
					})({
						serverURL: r,
						lang: t
					})
					.then((e => {
						o.value = e, (e.remember ? localStorage : sessionStorage)
							.setItem("WALINE_USER", JSON.stringify(e)), n("log")
					}))
				}, H = () => {
					o.value = {}, localStorage.setItem("WALINE_USER", "null"), sessionStorage.setItem("WALINE_USER", "null"), n("log")
				}, B = e => {
					e.preventDefault();
					const {
						lang: t,
						serverURL: n
					} = l.value, r = (window.innerWidth - 800) / 2, i = (window.innerHeight - 800) / 2, s = new URLSearchParams({
						lng: t,
						token: o.value.token
					}), a = window.open(`${n}/ui/profile?${s.toString()}`, "_blank", `width=800,height=800,left=${r},top=${i},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
					a ? .postMessage({
						type: "TOKEN",
						data: o.value.token
					}, "*")
				}, W = e => {
					p.value ? .contains(e.target) || d.value ? .contains(e.target) || (y.value = !1), h.value ? .contains(e.target) || f.value ? .contains(e.target) || (b.value = !1)
				}, q = async e => {
					const {
						scrollTop: t,
						clientHeight: n,
						scrollHeight: r
					} = e.target, i = (n + t) / r, s = l.value.search, o = g.value ? .value || "";
					if (i < .9 || _.loading || z.value) return;
					_.loading = !0;
					(s.more && _.list.length ? await s.more(o, _.list.length) : await s.search(o))
					.length ? _.list = [..._.list, ...s.more && _.list.length ? await s.more(o, _.list.length) : await s.search(o)] : z.value = !0, _.loading = !1, setTimeout((() => {
						e.target.scrollTop = t
					}), 50)
				}, Z = wi((e => {
					_.list = [], z.value = !1, q(e)
				}), 300);
			Hn([l, x], (([e, t]) => {
				const {
					wordLimit: n
				} = e;
				n ? t < n[0] && 0 !== n[0] ? ($.value = n[0], S.value = !1) : t > n[1] ? ($.value = n[1], S.value = !1) : ($.value = n[1], S.value = !0) : ($.value = 0, S.value = !0)
			}), {
				immediate: !0
			});
			const K = ({
				data: e
			}) => {
				e && "profile" === e.type && (o.value = {
						...o.value,
						...e.data
					}, [localStorage, sessionStorage].filter((e => e.getItem("WALINE_USER")))
					.forEach((e => e.setItem("WALINE_USER", JSON.stringify(o)))))
			};
			return Xn((() => {
				document.body.addEventListener("click", W), window.addEventListener("message", K), r.edit ? .objectId && (i.value = r.edit.orig), Hn(b, (async e => {
					if (!e) return;
					const t = l.value.search;
					g.value && (g.value.value = ""), _.loading = !0, _.list = t.default ? await t.default() : await t.search(""), _.loading = !1
				})), Hn((() => i.value), (e => {
					const {
						highlighter: t,
						texRenderer: n
					} = l.value;
					R.value = e, k.value = no(e, {
						emojiMap: m.value.map,
						highlighter: t,
						texRenderer: n
					}), x.value = (e => ((e => e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu))(e) ? .reduce(((e, t) => e + ("" === t.trim() ? 0 : t.trim()
						.split(/\s+/u)
						.length)), 0) || 0) + ((e => e.match(/[\u4E00-\u9FD5]/gu))(e) ? .length || 0))(e), e ? Qo(c.value) : Qo.destroy(c.value)
				}), {
					immediate: !0
				}), Hn((() => l.value.emoji), (e => {
					return (t = e, Promise.all(t.map((e => "string" == typeof e ? as(A(e)) : Promise.resolve(e))))
							.then((e => {
								const t = {
									tabs: [],
									map: {}
								};
								return e.forEach((e => {
									const {
										name: n,
										folder: r,
										icon: l,
										prefix: i,
										type: s,
										items: o
									} = e;
									t.tabs.push({
										name: n,
										icon: cs(l, r, i, s),
										items: o.map((e => {
											const n = `${i||""}${e}`;
											return t.map[n] = cs(e, r, i, s), n
										}))
									})
								})), t
							})))
						.then((e => {
							m.value = e
						}));
					var t
				}), {
					immediate: !0
				})
			})), er((() => {
				document.body.removeEventListener("click", W), window.removeEventListener("message", K)
			})), (e, t) => (Gr(), Yr("div", ta, ["disable" !== on(l)
				.login && I.value && !e.edit ? .objectId ? (Gr(), Yr("div", na, [sl("div", ra, [sl("button", {
					type: "submit",
					class: "wl-logout-btn",
					title: L.value.logout,
					onClick: H
				}, [ol(on(io), {
					size: 14
				})], 8, la), sl("a", {
					href: "#",
					class: "wl-login-nick",
					"aria-label": "Profile",
					title: L.value.profile,
					onClick: B
				}, [sl("img", {
					src: on(o)
						.avatar,
					alt: "avatar"
				}, null, 8, sa)], 8, ia)]), sl("a", {
					href: "#",
					class: "wl-login-nick",
					"aria-label": "Profile",
					title: L.value.profile,
					onClick: B,
					textContent: Ie(on(o)
						.display_name)
				}, null, 8, oa)])) : ul("v-if", !0), sl("div", aa, ["force" !== on(l)
					.login && on(l)
					.meta.length && !I.value ? (Gr(), Yr("div", {
						key: 0,
						class: Ae(["wl-header", `item${on(l).meta.length}`])
					}, [(Gr(!0), Yr(Hr, null, ir(on(l)
						.meta, (e => (Gr(), Yr("div", {
							key: e,
							class: "wl-header-item"
						}, [sl("label", {
							for: `wl-${e}`,
							textContent: Ie(L.value[e] + (on(l)
								.requiredMeta.includes(e) || !on(l)
								.requiredMeta.length ? "" : `(${L.value.optional})`))
						}, null, 8, ca), qn(sl("input", {
							id: `wl-${e}`,
							ref_for: !0,
							ref: t => {
								t && (a.value[e] = t)
							},
							"onUpdate:modelValue": t => on(s)[e] = t,
							class: Ae(["wl-input", `wl-${e}`]),
							name: e,
							type: "mail" === e ? "email" : "text"
						}, null, 10, ua), [
							[oi, on(s)[e]]
						])])))), 128))], 2)) : ul("v-if", !0), qn(sl("textarea", {
						id: "wl-edit",
						ref_key: "editorRef",
						ref: c,
						"onUpdate:modelValue": t[0] || (t[0] = e => tn(i) ? i.value = e : null),
						class: "wl-editor",
						placeholder: e.replyUser ? `@${e.replyUser}` : L.value.placeholder,
						onKeydown: U,
						onDrop: M,
						onPaste: F
					}, null, 40, pa), [
						[Yl, on(i)]
					]), qn(sl("div", da, [ha, sl("h4", null, Ie(L.value.preview) + ":", 1), sl("div", {
						class: "wl-content",
						innerHTML: k.value
					}, null, 8, fa)], 512), [
						[ci, w.value]
					]), sl("div", ga, [sl("div", ma, [sl("a", va, [ol(on(po))]), qn(sl("button", {
							ref_key: "emojiButtonRef",
							ref: p,
							type: "button",
							class: Ae(["wl-action", {
								active: y.value
							}]),
							title: L.value.emoji,
							onClick: t[1] || (t[1] = e => y.value = !y.value)
						}, [ol(on(oo))], 10, ya), [
							[ci, m.value.tabs.length]
						]), on(l)
						.search ? (Gr(), Yr("button", {
							key: 0,
							ref_key: "gifButtonRef",
							ref: h,
							type: "button",
							class: Ae(["wl-action", {
								active: b.value
							}]),
							title: L.value.gif,
							onClick: t[2] || (t[2] = e => b.value = !b.value)
						}, [ol(on(vo))], 10, ba)) : ul("v-if", !0), sl("input", {
							id: "wl-image-upload",
							ref_key: "imageUploadRef",
							ref: u,
							class: "upload",
							type: "file",
							accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
							onChange: V
						}, null, 544), j.value ? (Gr(), Yr("label", {
							key: 1,
							for: "wl-image-upload",
							class: "wl-action",
							title: L.value.uploadImage
						}, [ol(on(ao))], 8, wa)) : ul("v-if", !0), sl("button", {
							type: "button",
							class: Ae(["wl-action", {
								active: w.value
							}]),
							title: L.value.preview,
							onClick: t[3] || (t[3] = e => w.value = !w.value)
						}, [ol(on(uo))], 10, ka)
					]), sl("div", xa, [_a, sl("div", $a, [cl(Ie(x.value) + " ", 1), on(l)
							.wordLimit ? (Gr(), Yr("span", Ca, [cl("  /  "), sl("span", {
								class: Ae({
									illegal: !S.value
								}),
								textContent: Ie($.value)
							}, null, 10, Sa)])) : ul("v-if", !0), cl("  " + Ie(L.value.word), 1)
						]), "disable" === on(l)
						.login || I.value ? ul("v-if", !0) : (Gr(), Yr("button", {
							key: 0,
							type: "button",
							class: "wl-btn",
							onClick: D,
							textContent: Ie(L.value.login)
						}, null, 8, Aa)), "force" !== on(l)
						.login || I.value ? (Gr(), Yr("button", {
							key: 1,
							type: "submit",
							class: "primary wl-btn",
							title: "Cmd|Ctrl + Enter",
							disabled: E.value,
							onClick: N
						}, [E.value ? (Gr(), el(on(mo), {
							key: 0,
							size: 16
						})) : (Gr(), Yr(Hr, {
							key: 1
						}, [cl(Ie(L.value.submit), 1)], 64))], 8, Ra)) : ul("v-if", !0)
					]), sl("div", {
						ref_key: "gifPopupRef",
						ref: f,
						class: Ae(["wl-gif-popup", {
							display: b.value
						}])
					}, [sl("input", {
						ref_key: "gifSearchInputRef",
						ref: g,
						type: "text",
						placeholder: L.value.gifSearchPlaceholder,
						onInput: t[4] || (t[4] = (...e) => on(Z) && on(Z)(...e))
					}, null, 40, Ea), _.list.length ? (Gr(), el(ea, {
						key: 0,
						items: _.list,
						"column-width": 200,
						gap: 6,
						onInsert: t[5] || (t[5] = e => O(e)),
						onScroll: q
					}, null, 8, ["items"])) : ul("v-if", !0), _.loading ? (Gr(), Yr("div", za, [ol(on(mo), {
						size: 30
					})])) : ul("v-if", !0)], 2), sl("div", {
						ref_key: "emojiPopupRef",
						ref: d,
						class: Ae(["wl-emoji-popup", {
							display: y.value
						}])
					}, [(Gr(!0), Yr(Hr, null, ir(m.value.tabs, ((e, t) => (Gr(), Yr(Hr, {
						key: e.name
					}, [t === v.value ? (Gr(), Yr("div", La, [(Gr(!0), Yr(Hr, null, ir(e.items, (e => (Gr(), Yr("button", {
						key: e,
						type: "button",
						title: e,
						onClick: t => O(`:${e}:`)
					}, [y.value ? (Gr(), Yr("img", {
						key: 0,
						class: "wl-emoji",
						src: m.value.map[e],
						alt: e,
						loading: "lazy",
						referrerPolicy: "no-referrer"
					}, null, 8, ja)) : ul("v-if", !0)], 8, Ia)))), 128))])) : ul("v-if", !0)], 64)))), 128)), m.value.tabs.length > 1 ? (Gr(), Yr("div", Oa, [(Gr(!0), Yr(Hr, null, ir(m.value.tabs, ((e, t) => (Gr(), Yr("button", {
						key: e.name,
						type: "button",
						class: Ae(["wl-tab", {
							active: v.value === t
						}]),
						onClick: e => v.value = t
					}, [sl("img", {
						class: "wl-emoji",
						src: e.icon,
						alt: e.name,
						title: e.name,
						loading: "lazy",
						referrerPolicy: "no-referrer"
					}, null, 8, Ua)], 10, Ta)))), 128))])) : ul("v-if", !0)], 2)])
				]), e.replyId || e.edit ? .objectId ? (Gr(), Yr("button", {
					key: 1,
					type: "button",
					class: "wl-close",
					title: L.value.cancelReply,
					onClick: t[6] || (t[6] = t => e.$emit(e.replyId ? "cancelReply" : "cancelEdit"))
				}, [ol(on(io), {
					size: 24
				})], 8, Pa)) : ul("v-if", !0)
			]))
		}
	}),
	Fa = Bo(Ma, [
		["__file", "CommentBox.vue"]
	]);
const Va = ["id"],
	Na = {
		class: "wl-user",
		"aria-hidden": "true"
	},
	Da = ["src"],
	Ha = {
		class: "wl-card"
	},
	Ba = {
		class: "wl-head"
	},
	Wa = ["href"],
	qa = {
		key: 1,
		class: "wl-nick"
	},
	Za = ["textContent"],
	Ka = ["textContent"],
	Ga = ["textContent"],
	Qa = ["textContent"],
	Ja = ["textContent"],
	Xa = {
		class: "wl-comment-actions"
	},
	Ya = ["title"],
	ec = ["textContent"],
	tc = ["title"],
	nc = {
		class: "wl-meta",
		"aria-hidden": "true"
	},
	rc = ["data-value", "textContent"],
	lc = ["data-value", "textContent"],
	ic = ["data-value", "textContent"],
	sc = ["innerHTML"],
	oc = {
		key: 1,
		class: "wl-admin-actions"
	},
	ac = {
		class: "wl-comment-status"
	},
	cc = ["disabled", "onClick", "textContent"],
	uc = {
		key: 3,
		class: "wl-quote"
	};
var pc = Bo(Kn({
	__name: "CommentCard",
	props: {
		comment: {},
		edit: {
			default: null
		},
		rootId: {},
		reply: {
			default: null
		}
	},
	emits: ["log", "submit", "delete", "edit", "like", "status", "sticky", "reply"],
	setup(e) {
		const t = e,
			n = ["approved", "waiting", "spam"],
			r = xr("config"),
			l = bo(),
			i = is(),
			s = Oo(),
			o = zl((() => r.value.locale)),
			a = zl((() => {
				const {
					link: e
				} = t.comment;
				return e ? R(e) ? e : `https://${e}` : ""
			})),
			c = zl((() => l.value.includes(t.comment.objectId))),
			u = zl((() => O(t.comment.insertedAt, i.value, o.value))),
			p = zl((() => "administrator" === s.value.type)),
			d = zl((() => t.comment.user_id && s.value.objectId === t.comment.user_id)),
			h = zl((() => t.comment.objectId === t.reply ? .objectId)),
			f = zl((() => t.comment.objectId === t.edit ? .objectId));
		return (e, t) => {
			const r = nr("CommentCard", !0);
			return Gr(), Yr("div", {
				id: e.comment.objectId,
				class: "wl-card-item"
			}, [sl("div", Na, [e.comment.avatar ? (Gr(), Yr("img", {
				key: 0,
				src: e.comment.avatar
			}, null, 8, Da)) : ul("v-if", !0), e.comment.type ? (Gr(), el(on(go), {
				key: 1
			})) : ul("v-if", !0)]), sl("div", Ha, [sl("div", Ba, [a.value ? (Gr(), Yr("a", {
				key: 0,
				class: "wl-nick",
				href: a.value,
				target: "_blank",
				rel: "nofollow noopener noreferrer"
			}, Ie(e.comment.nick), 9, Wa)) : (Gr(), Yr("span", qa, Ie(e.comment.nick), 1)), "administrator" === e.comment.type ? (Gr(), Yr("span", {
				key: 2,
				class: "wl-badge",
				textContent: Ie(o.value.admin)
			}, null, 8, Za)) : ul("v-if", !0), e.comment.label ? (Gr(), Yr("span", {
				key: 3,
				class: "wl-badge",
				textContent: Ie(e.comment.label)
			}, null, 8, Ka)) : ul("v-if", !0), e.comment.sticky ? (Gr(), Yr("span", {
				key: 4,
				class: "wl-badge",
				textContent: Ie(o.value.sticky)
			}, null, 8, Ga)) : ul("v-if", !0), void 0 !== e.comment.level && e.comment.level >= 0 ? (Gr(), Yr("span", {
				key: 5,
				class: Ae(`wl-badge level${e.comment.level}`),
				textContent: Ie(o.value[`level${e.comment.level}`] || `Level ${e.comment.level}`)
			}, null, 10, Qa)) : ul("v-if", !0), sl("span", {
				class: "wl-time",
				textContent: Ie(u.value)
			}, null, 8, Ja), sl("div", Xa, [p.value || d.value ? (Gr(), Yr("button", {
				key: 0,
				type: "button",
				class: "wl-edit",
				onClick: t[0] || (t[0] = () => e.$emit("edit", e.comment))
			}, [ol(on(fo))])) : ul("v-if", !0), p.value || d.value ? (Gr(), Yr("button", {
				key: 1,
				type: "button",
				class: "wl-delete",
				onClick: t[1] || (t[1] = t => e.$emit("delete", e.comment))
			}, [ol(on(so))])) : ul("v-if", !0), sl("button", {
				type: "button",
				class: "wl-like",
				title: c.value ? o.value.cancelLike : o.value.like,
				onClick: t[2] || (t[2] = t => e.$emit("like", e.comment))
			}, [ol(on(co), {
				active: c.value
			}, null, 8, ["active"]), "like" in e.comment ? (Gr(), Yr("span", {
				key: 0,
				textContent: Ie(e.comment.like)
			}, null, 8, ec)) : ul("v-if", !0)], 8, Ya), sl("button", {
				type: "button",
				class: Ae(["wl-reply", {
					active: h.value
				}]),
				title: h.value ? o.value.cancelReply : o.value.reply,
				onClick: t[3] || (t[3] = t => e.$emit("reply", h.value ? null : e.comment))
			}, [ol(on(ho))], 10, tc)])]), sl("div", nc, [e.comment.addr ? (Gr(), Yr("span", {
				key: 0,
				class: "wl-addr",
				"data-value": e.comment.addr,
				textContent: Ie(e.comment.addr)
			}, null, 8, rc)) : ul("v-if", !0), e.comment.browser ? (Gr(), Yr("span", {
				key: 1,
				class: "wl-browser",
				"data-value": e.comment.browser,
				textContent: Ie(e.comment.browser)
			}, null, 8, lc)) : ul("v-if", !0), e.comment.os ? (Gr(), Yr("span", {
				key: 2,
				class: "wl-os",
				"data-value": e.comment.os,
				textContent: Ie(e.comment.os)
			}, null, 8, ic)) : ul("v-if", !0)]), f.value ? ul("v-if", !0) : (Gr(), Yr("div", {
				key: 0,
				class: "wl-content",
				innerHTML: e.comment.comment
			}, null, 8, sc)), p.value && !f.value ? (Gr(), Yr("div", oc, [sl("span", ac, [(Gr(), Yr(Hr, null, ir(n, (t => sl("button", {
				key: t,
				type: "submit",
				class: Ae(`wl-btn wl-${t}`),
				disabled: e.comment.status === t,
				onClick: n => e.$emit("status", {
					status: t,
					comment: e.comment
				}),
				textContent: Ie(o.value[t])
			}, null, 10, cc))), 64))]), p.value && !e.comment.rid ? (Gr(), Yr("button", {
				key: 0,
				type: "submit",
				class: "wl-btn wl-sticky",
				onClick: t[4] || (t[4] = t => e.$emit("sticky", e.comment))
			}, Ie(e.comment.sticky ? o.value.unsticky : o.value.sticky), 1)) : ul("v-if", !0)])) : ul("v-if", !0), h.value || f.value ? (Gr(), Yr("div", {
				key: 2,
				class: Ae({
					"wl-reply-wrapper": h.value,
					"wl-edit-wrapper": f.value
				})
			}, [ol(Fa, {
				edit: e.edit,
				"reply-id": e.reply ? .objectId,
				"reply-user": e.comment.nick,
				"root-id": e.rootId,
				onLog: t[5] || (t[5] = t => e.$emit("log")),
				onCancelReply: t[6] || (t[6] = t => e.$emit("reply", null)),
				onCancelEdit: t[7] || (t[7] = t => e.$emit("edit", null)),
				onSubmit: t[8] || (t[8] = t => e.$emit("submit", t))
			}, null, 8, ["edit", "reply-id", "reply-user", "root-id"])], 2)) : ul("v-if", !0), e.comment.children ? (Gr(), Yr("div", uc, [(Gr(!0), Yr(Hr, null, ir(e.comment.children, (n => (Gr(), el(r, {
				key: n.objectId,
				comment: n,
				reply: e.reply,
				edit: e.edit,
				"root-id": e.rootId,
				onLog: t[9] || (t[9] = t => e.$emit("log")),
				onDelete: t[10] || (t[10] = t => e.$emit("delete", t)),
				onEdit: t[11] || (t[11] = t => e.$emit("edit", t)),
				onLike: t[12] || (t[12] = t => e.$emit("like", t)),
				onReply: t[13] || (t[13] = t => e.$emit("reply", t)),
				onStatus: t[14] || (t[14] = t => e.$emit("status", t)),
				onSticky: t[15] || (t[15] = t => e.$emit("sticky", t)),
				onSubmit: t[16] || (t[16] = t => e.$emit("submit", t))
			}, null, 8, ["comment", "reply", "edit", "root-id"])))), 128))])) : ul("v-if", !0)])], 8, Va)
		}
	}
}), [
	["__file", "CommentCard.vue"]
]);
const dc = "2.15.5",
	hc = {
		"data-waline": ""
	},
	fc = {
		class: "wl-meta-head"
	},
	gc = {
		class: "wl-count"
	},
	mc = ["textContent"],
	vc = {
		class: "wl-sort"
	},
	yc = ["onClick"],
	bc = {
		class: "wl-cards"
	},
	wc = {
		key: 1,
		class: "wl-operation"
	},
	kc = ["textContent"],
	xc = {
		key: 0,
		class: "wl-loading"
	},
	_c = ["textContent"],
	$c = {
		key: 2,
		class: "wl-operation"
	},
	Cc = ["textContent"],
	Sc = {
		key: 3,
		class: "wl-power"
	},
	Ac = sl("a", {
		href: "https://github.com/walinejs/waline",
		target: "_blank",
		rel: "noopener noreferrer"
	}, " Waline ", -1);
var Rc = Kn({
		__name: "WalineComment",
		props: ["serverURL", "path", "meta", "requiredMeta", "dark", "commentSorting", "lang", "locale", "pageSize", "wordLimit", "emoji", "login", "highlighter", "texRenderer", "imageUploader", "search", "copyright", "recaptchaV3Key", "turnstileKey", "reaction"],
		setup(e) {
			const a = e,
				c = {
					latest: "insertedAt_desc",
					oldest: "insertedAt_asc",
					hottest: "like_desc"
				},
				u = Object.keys(c),
				d = Oo(),
				h = bo(),
				f = nn("loading"),
				g = nn(0),
				m = nn(1),
				v = nn(0),
				y = zl((() => (({
					serverURL: e,
					path: a = location.pathname,
					lang: c = ("undefined" == typeof navigator ? "en-US" : navigator.language),
					locale: u,
					emoji: d = n,
					meta: h = ["nick", "mail", "link"],
					requiredMeta: f = [],
					dark: g = !1,
					pageSize: m = 10,
					wordLimit: v,
					imageUploader: y,
					highlighter: b,
					texRenderer: k,
					copyright: x = !0,
					login: _ = "enable",
					search: $,
					reaction: C,
					recaptchaV3Key: A = "",
					turnstileKey: R = "",
					commentSorting: I = "latest",
					...j
				}) => ({
					serverURL: E(e),
					path: S(a),
					locale: {
						...w[c] || w[r],
						..."object" == typeof u ? u : {}
					},
					wordLimit: z(v),
					meta: t(h),
					requiredMeta: t(f),
					imageUploader: L(y, i),
					highlighter: L(b, p),
					texRenderer: L(k, s),
					lang: Object.keys(w)
						.includes(c) ? c : "en-US",
					dark: g,
					emoji: "boolean" == typeof d ? d ? n : [] : d,
					pageSize: m,
					login: _,
					copyright: x,
					search: !1 !== $ && ("object" == typeof $ ? $ : o(c)),
					recaptchaV3Key: A,
					turnstileKey: R,
					reaction: Array.isArray(C) ? C : !0 === C ? l : [],
					commentSorting: I,
					...j
				}))(a))),
				b = nn(y.value.commentSorting),
				k = nn([]),
				_ = nn(null),
				$ = nn(null),
				A = zl((() => {
					return "string" == typeof(e = y.value.dark) ? "auto" === e ? `@media(prefers-color-scheme:dark){body${I}}` : `${e}${I}` : !0 === e ? `:root${I}` : "";
					var e
				})),
				R = zl((() => y.value.locale));
			let j;
			! function(e, t = {}) {
				const n = nn(!1),
					{
						document: r = Fi,
						immediate: l = !0,
						manual: i = !1,
						id: s = "vueuse_styletag_" + ++os
					} = t,
					o = nn(e);
				let a = () => {};
				const c = () => {
						if (!r) return;
						const e = r.getElementById(s) || r.createElement("style");
						e.isConnected || (e.type = "text/css", e.id = s, t.media && (e.media = t.media), r.head.appendChild(e)), n.value || (a = Hn(o, (t => {
							e.textContent = t
						}), {
							immediate: !0
						}), n.value = !0)
					},
					u = () => {
						r && n.value && (a(), r.head.removeChild(r.getElementById(s)), n.value = !1)
					};
				l && !i && ki(c), i || fi(u), Ht(n)
			}(A, {
				id: "waline-darkmode"
			});
			const O = e => {
					const {
						serverURL: t,
						path: n,
						pageSize: r
					} = y.value, l = new AbortController;
					f.value = "loading", j ? .(), (({
							serverURL: e,
							lang: t,
							path: n,
							page: r,
							pageSize: l,
							sortBy: i,
							signal: s,
							token: o
						}) => {
							const a = {};
							return o && (a.Authorization = `Bearer ${o}`), fetch(`${e}/comment?path=${encodeURIComponent(n)}&pageSize=${l}&page=${r}&lang=${t}&sortBy=${i}`, {
									signal: s,
									headers: a
								})
								.then((e => e.json()))
								.then((e => x(e, "Get comment data")))
						})({
							serverURL: t,
							lang: y.value.lang,
							path: n,
							pageSize: r,
							sortBy: c[b.value],
							page: e,
							signal: l.signal,
							token: d.value ? .token
						})
						.then((t => {
							f.value = "success", g.value = t.count, k.value.push(...t.data), m.value = e, v.value = t.totalPages
						}))
						.catch((e => {
							"AbortError" !== e.name && (console.error(e.message), f.value = "error")
						})), j = l.abort.bind(l)
				},
				T = () => O(m.value + 1),
				U = () => {
					g.value = 0, k.value = [], O(1)
				},
				P = e => {
					_.value = e
				},
				M = e => {
					$.value = e
				},
				F = e => {
					if ($.value) $.value.comment = e.comment, $.value.orig = e.orig;
					else if (e.rid) {
						const t = k.value.find((({
							objectId: t
						}) => t === e.rid));
						if (!t) return;
						Array.isArray(t.children) || (t.children = []), t.children.push(e)
					} else k.value.unshift(e), g.value += 1
				},
				V = async ({
					comment: e,
					status: t
				}) => {
					if (e.status === t) return;
					const {
						serverURL: n,
						lang: r
					} = y.value;
					await C({
						serverURL: n,
						lang: r,
						token: d.value ? .token,
						objectId: e.objectId,
						comment: {
							status: t
						}
					}), e.status = t
				}, N = async e => {
					if (e.rid) return;
					const {
						serverURL: t,
						lang: n
					} = y.value;
					await C({
						serverURL: t,
						lang: n,
						token: d.value ? .token,
						objectId: e.objectId,
						comment: {
							sticky: e.sticky ? 0 : 1
						}
					}), e.sticky = !e.sticky
				}, D = async ({
					objectId: e
				}) => {
					if (!confirm("Are you sure you want to delete this comment?")) return;
					const {
						serverURL: t,
						lang: n
					} = y.value;
					await (({
							serverURL: e,
							lang: t,
							token: n,
							objectId: r
						}) => fetch(`${e}/comment/${r}?lang=${t}`, {
							method: "DELETE",
							headers: {
								Authorization: `Bearer ${n}`
							}
						})
						.then((e => e.json()))
						.then((e => x(e, "Delete comment"))))({
						serverURL: t,
						lang: n,
						token: d.value ? .token,
						objectId: e
					}), k.value.some(((t, n) => t.objectId === e ? (k.value = k.value.filter(((e, t) => t !== n)), !0) : t.children.some(((r, l) => r.objectId === e && (k.value[n].children = t.children.filter(((e, t) => t !== l)), !0)))))
				}, H = async e => {
					const {
						serverURL: t,
						lang: n
					} = y.value, {
						objectId: r
					} = e, l = h.value.includes(r);
					await C({
						serverURL: t,
						lang: n,
						objectId: r,
						token: d.value ? .token,
						comment: {
							like: !l
						}
					}), l ? h.value = h.value.filter((e => e !== r)) : (h.value = [...h.value, r], h.value.length > 50 && (h.value = h.value.slice(-50))), e.like = (e.like || 0) + (l ? -1 : 1)
				};
			return function(e, t) {
				if (vl) {
					let n = vl.provides;
					const r = vl.parent && vl.parent.provides;
					r === n && (n = vl.provides = Object.create(r)), n[e] = t
				}
			}("config", y), Xn((() => {
				Hn((() => [a.serverURL, a.path]), (() => U()), {
					immediate: !0
				})
			})), er((() => j ? .())), (e, t) => (Gr(), Yr("div", hc, [ol(Wo), _.value ? ul("v-if", !0) : (Gr(), el(Fa, {
				key: 0,
				onLog: U,
				onSubmit: F
			})), sl("div", fc, [sl("div", gc, [g.value ? (Gr(), Yr("span", {
				key: 0,
				class: "wl-num",
				textContent: Ie(g.value)
			}, null, 8, mc)) : ul("v-if", !0), cl(" " + Ie(R.value.comment), 1)]), sl("ul", vc, [(Gr(!0), Yr(Hr, null, ir(on(u), (e => (Gr(), Yr("li", {
				key: e,
				class: Ae([e === b.value ? "active" : ""]),
				onClick: t => (e => {
					b.value !== e && (b.value = e, U())
				})(e)
			}, Ie(R.value[e]), 11, yc)))), 128))])]), sl("div", bc, [(Gr(!0), Yr(Hr, null, ir(k.value, (e => (Gr(), el(pc, {
				key: e.objectId,
				"root-id": e.objectId,
				comment: e,
				reply: _.value,
				edit: $.value,
				onLog: U,
				onReply: P,
				onEdit: M,
				onSubmit: F,
				onStatus: V,
				onDelete: D,
				onSticky: N,
				onLike: H
			}, null, 8, ["root-id", "comment", "reply", "edit"])))), 128))]), "error" === f.value ? (Gr(), Yr("div", wc, [sl("button", {
				type: "button",
				class: "wl-btn",
				onClick: U,
				textContent: Ie(R.value.refresh)
			}, null, 8, kc)])) : (Gr(), Yr(Hr, {
				key: 2
			}, ["loading" === f.value ? (Gr(), Yr("div", xc, [ol(on(mo), {
				size: 30
			})])) : k.value.length ? m.value < v.value ? (Gr(), Yr("div", $c, [sl("button", {
				type: "button",
				class: "wl-btn",
				onClick: T,
				textContent: Ie(R.value.more)
			}, null, 8, Cc)])) : ul("v-if", !0) : (Gr(), Yr("div", {
				key: 1,
				class: "wl-empty",
				textContent: Ie(R.value.sofa)
			}, null, 8, _c))], 64)), y.value.copyright ? (Gr(), Yr("div", Sc, [cl(" Powered by "), Ac, cl(" v" + Ie(on(dc)), 1)])) : ul("v-if", !0)]))
		}
	}),
	Ec = Bo(Rc, [
		["__file", "WalineComment.vue"]
	]);
const zc = (e, t) => {
		t.forEach(((t, n) => {
			t.innerText = e[n].toString()
		}))
	},
	Lc = ({
		serverURL: e,
		path: t = window.location.pathname,
		selector: n = ".waline-pageview-count",
		update: r = !0,
		lang: l = navigator.language
	}) => {
		const i = new AbortController,
			s = Array.from(document.querySelectorAll(n)),
			o = e => {
				const n = ro(e);
				return null !== n && t !== n
			},
			a = n => (({
					serverURL: e,
					lang: t,
					paths: n,
					signal: r
				}) => _({
					serverURL: e,
					lang: t,
					paths: n,
					type: ["time"],
					signal: r
				})
				.then((e => Array.isArray(e) ? e : [e])))({
				serverURL: E(e),
				paths: n.map((e => ro(e) || t)),
				lang: l,
				signal: i.signal
			})
			.then((e => zc(e, n)))
			.catch(us);
		if (r) {
			const n = s.filter((e => !o(e))),
				r = s.filter(o);
			(c = {
				serverURL: E(e),
				path: t,
				lang: l
			}, $({
				...c,
				type: "time",
				action: "inc"
			}))
			.then((e => zc(new Array(n.length)
				.fill(e), n))), r.length && a(r)
		} else a(s);
		var c;
		return i.abort.bind(i)
	},
	Ic = ({
		el: e = "#waline",
		path: t = window.location.pathname,
		comment: n = !1,
		pageview: r = !1,
		...l
	}) => {
		const i = e ? ps(e) : null;
		if (e && !i) throw new Error("Option 'el' do not match any domElement!");
		if (!l.serverURL) throw new Error("Option 'serverURL' is missing!");
		const s = Dt({
				...l
			}),
			o = Dt({
				comment: n,
				pageview: r,
				path: t
			}),
			a = i ? hi((() => Ll(Ec, {
				path: o.path,
				...s
			}))) : null;
		a && a.mount(i);
		const c = Nn((() => {
				o.comment && lo({
					serverURL: s.serverURL,
					path: o.path,
					selector: "string" == typeof o.comment ? o.comment : void 0
				})
			})),
			u = Nn((() => {
				o.pageview && Lc({
					serverURL: s.serverURL,
					path: o.path,
					selector: "string" == typeof o.pageview ? o.pageview : void 0
				})
			}));
		return {
			el: i,
			update: ({
				comment: e,
				pageview: t,
				path: n = window.location.pathname,
				...r
			} = {}) => {
				Object.entries(r)
					.forEach((([e, t]) => {
						s[e] = t
					})), o.path = n, void 0 !== e && (o.comment = e), void 0 !== t && (o.pageview = t)
			},
			destroy: () => {
				a ? .unmount(), c(), u()
			}
		}
	},
	jc = ({
		el: e,
		serverURL: t,
		count: n,
		lang: r = navigator.language
	}) => {
		const l = Oo(),
			i = ps(e),
			s = new AbortController;
		return (({
				serverURL: e,
				lang: t,
				count: n,
				signal: r,
				token: l
			}) => {
				const i = {};
				return l && (i.Authorization = `Bearer ${l}`), fetch(`${e}/comment?type=recent&count=${n}&lang=${t}`, {
						signal: r,
						headers: i
					})
					.then((e => e.json()))
			})({
				serverURL: t,
				count: n,
				lang: r,
				signal: s.signal,
				token: l.value ? .token
			})
			.then((e => i && e.length ? (i.innerHTML = `<ul class="wl-recent-list">${e.map((e=>`<li class="wl-recent-item"><a href="${e.url}">${e.nick}</a>：${e.comment}</li>`)).join("")}</ul>`, {
				comments: e,
				destroy: () => {
					s.abort(), i.innerHTML = ""
				}
			}) : {
				comments: e,
				destroy: () => s.abort()
			}))
	},
	Oc = ({
		el: e,
		serverURL: t,
		count: n,
		locale: l,
		lang: i = navigator.language,
		mode: s = "list"
	}) => {
		const o = ps(e),
			a = new AbortController;
		return (({
					serverURL: e,
					signal: t,
					pageSize: n,
					lang: r
				}) => fetch(`${e}/user?pageSize=${n}&lang=${r}`, {
					signal: t
				})
				.then((e => e.json()))
				.then((e => x(e, "user list")))
				.then((e => e.data)))({
				serverURL: t,
				pageSize: n,
				lang: i,
				signal: a.signal
			})
			.then((e => o && e.length ? (l = {
				...w[i] || w[r],
				..."object" == typeof l ? l : {}
			}, o.innerHTML = `<ul class="wl-user-${s}">${e.map(((e,t)=>[`<li class="wl-user-item" aria-label="${e.nick}">`,e.link&&`<a href="${e.link}" target="_blank">`,'<div class="wl-user-avatar">',`<img src="${e.avatar}" alt="${e.nick}">`,`<span class="wl-user-badge">${t+1}</span>`,"</div>",'<div class="wl-user-meta">','<div class="wl-user-name">',e.nick,e.level&&`<span class="wl-badge">${l?l[`level${e.level}`]:`Level ${e.level}`}</span>`,e.label&&`<span class="wl-badge">${e.label}</span>`,"</div>",e.link&&e.link,"</div>",e.link&&"</a>","</li>"].filter((e=>e)).join(""))).join("")}</ul>`, {
				users: e,
				destroy: () => {
					a.abort(), o.innerHTML = ""
				}
			}) : {
				users: e,
				destroy: () => a.abort()
			}))
	};
export {
	jc as RecentComments, Oc as UserList, lo as commentCount, w as defaultLocales, Ic as init, Lc as pageviewCount, dc as version
};
//# sourceMappingURL=waline.mjs.map
