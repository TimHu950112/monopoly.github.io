! function (e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(o, i, function (n) {
                return e[n]
            }.bind(null, i));
        return o
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function (e, n) {
    var t = document.querySelector(".map"),
        o = document.querySelector(".dice"),
        i = document.querySelector(".choosebox"),
        r = document.querySelector(".choosechr"),
        l = document.querySelector(".title"),
        s = document.querySelector(".info"),
        a = document.querySelector(".dialog"),
        c = document.querySelector(".infobox"),
        u = document.querySelector(".msgbox");
    for (let e = 0; e < 30; e++) {
        let e = document.createElement("div"),
            n = document.createElement("h3");
        e.className = "box", e.append(n), t.prepend(e)
    }

    function d(e, n, t) {
        i.firstElementChild.innerHTML = e, Array.from(i.lastElementChild.children).forEach((e, o) => {
            switch (e.innerHTML = n + o, t) {
                case 3:
                    m();
                    break;
                case 2:
                    o > 1 && p(e);
                    break;
                case 1:
                    o > 2 && p(e);
                    break;
                case 0:
                    o < 1 && p(e)
            }
        })
    }

    function p(e) {
        e.style.pointerEvents = "none", e.style.background = "grey"
    }

    function m() {
        i.style.display = "none", r.style.display = "block"
    }
    Array.from(document.querySelectorAll(".choosebox li")).forEach((e, n) => {
        e.addEventListener("click", () => {
            var e;
            e = n, O ? q ? (A = +e, m()) : (d("電腦人數", 0, e), q = +e + 1) : (d("玩家人數", 1), O = 5000 * e + 1e4)
        })
    });
    let f = document.createElement("div");
    f.className = "arrow";
    let h = document.createElement("img");

    function g(e) {
        let n = F(1, 2);
        o.style.background = `url(img/s${n}.jpg)`, setTimeout((function () {
            o.style.background = `url(img/${e}.jpg)`
        }), 300), y(!1)
    }

    function y(e) {
        o.style.pointerEvents = e ? "auto" : "none"
    }

    function w(e) {
        l.innerHTML = e, l.style.background = P[e]
    }

    function v() {
        let e = q + A;
        for (let n = 0; n < e; n++) s.children[n].firstElementChild.innerHTML = "$" + T[n].money
    }

    function $(e, n) {
        let t = function () {
            let e = document.createElement("div");
            e.className = "construct";
            for (let n = 0; n < 5; n++) {
                const t = document.createElement("img");
                t.src = `img/c${n + 1}.png`, e.append(t)
            }
            return e
        }();
        e.prepend(t), setTimeout(() => {
            e.removeChild(t), e.append(function (e) {
                let n = document.createElement("img");
                return n.src = `img/l${e + 1}.png`, n.className = "house", n
            }(n)), _(C)
        }, 2000)
    }

    function E(e) {
        u.style.display = "block", u.innerHTML = e, setTimeout(() => {
            u.style.display = "none"
        }, 1.6 * N)
    }

    function b(e, n) {
        let t, o;
        a.style.display = "block";
        let {
            name: i,
            value: r,
            state: l
        } = M[j.position];
        "purchase" === e ? (t = "購買地產", o = `請問你要花費$${r * (l + 1)}來購買${i}嗎？`) : (t = "升級地產", o = `請問你要花費$${r / 2}來升級${i}嗎？`), a.children[1].innerHTML = t, a.firstElementChild.innerHTML = o, n ? (a.children[2].style.pointerEvents = "auto", a.children[2].style.background = "#f2f2f2") : (a.children[2].style.pointerEvents = "none", a.children[2].style.background = "#454545"), a.children[2].onclick = () => {
            I(e, !0)
        }
    }

    function x() {
        a.style.display = "none"
    }
    h.src = "img/arrow.png", f.append(h), Array.from(r.lastElementChild.children).forEach(e => {
        e.firstElementChild.addEventListener("mouseover", (function () {
            e.appendChild(f)
        })), e.firstElementChild.addEventListener("click", () => {
            e.firstElementChild.style.border = "1px solid #666";
            let n = document.createElement("div");
            n.innerHTML = "" + (T.length + 1), n.className = "index", e.appendChild(n), e.removeChild(f), e.style.pointerEvents = "none";
            let t = e.children[1].innerHTML,
                o = document.createElement("img");
            o.className = "chr", o.src = `img/${t}.png`, M[0].node.append(o),
                function (e, n) {
                    let t = T.length < q ? 1 : 0;
                    new L(n, T.length, O, "active", 0, t, e), T.length == q + A && (r.parentElement.style.display = "none", l.style.visibility = "visible", w(T[C].name), function () {
                        let e = q + A;
                        for (let n = 0; n < e; n++) {
                            let e = document.createElement("div"),
                                t = document.createElement("h2"),
                                o = document.createElement("h3");
                            o.innerHTML = "$" + T[n].money, t.innerHTML = T[n].name, t.style.background = P[T[n].name], e.append(o), e.append(t), s.append(e)
                        }
                    }(), M.forEach(e => {
                        e.node.addEventListener("mouseover", () => {
                            if (e.state >= 0)
                                if (c.style.display = "block", c.firstElementChild.innerHTML = e.name, c.lastElementChild.children[0].innerHTML = "地主：" + e.owner, c.lastElementChild.children[1].innerHTML = "價格：" + e.value, e.owner) {
                                    let n = 5 / (3 * e.state + 1),
                                        t = e.value / (n > .5 ? Math.ceil(n) : n);
                                    c.lastElementChild.children[2].innerHTML = "住宿：" + t
                                } else c.lastElementChild.children[2].innerHTML = ""
                        }), e.node.addEventListener("mouseout", () => {
                            c.style.display = "none"
                        })
                    }), j = T[0])
                }(o, t)
        })
    }), o.addEventListener("click", () => {
        B()
    }), a.children[3].addEventListener("click", () => {
        I("", !1)
    }), document.querySelectorAll(".big-box button")[0].addEventListener("click", (function () {
        "規則介紹" === this.innerHTML ? (this.innerHTML = "返回", document.querySelector(".instruction").style.height = "100%") : (this.innerHTML = "規則介紹", document.querySelector(".instruction").style.height = "0")
    })), document.querySelectorAll(".big-box button")[1].addEventListener("click", (function () {
        let e = N > 600 ? "正常" : "加快";
        this.innerHTML = e + "速度", N = 1300 - N
    })), document.querySelectorAll(".big-box button")[2].addEventListener("click", (function () {
        "開啓託管" === this.innerHTML ? (this.innerHTML = "取消託管", T.forEach(e => {
            e.control && (e.control = "")
        })) : (this.innerHTML = "開啓託管", T.forEach(e => {
            "" === e.control && (e.control = 1)
        }))
    })), window.addEventListener("load", () => {
        let e = [];
        ["img/arrow.png", "img/batman.png", "img/superman.png", "img/green lantern.png", "img/robin.png", "img/catwoman.png", "img/harley quinn.png", "img/joker.png", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/s1.jpg", "img/s2.jpg", "img/c1.png", "img/c2.png", "img/c3.png", "img/c4.png", "img/c5.png", "img/l1.png", "img/l2.png", "img/l3.png"].forEach((n, t) => {
            e[t] = new Image, e[t].src = n
        })
    });
    var T = [];

    function L(e, n, t, o, i, r, l) {
        this.name = e, this.index = n, this.money = t, this.state = o, this.stop = i, this.control = r, this.node = l, this.position = 0, T.push(this)
    }
    var M = [];

    function k(e, n, t, o, i) {
        this.name = e, this.value = n, this.state = t, this.owner = o, this.node = document.querySelectorAll(".map>div")[i], this.node.firstElementChild.append(e), M.push(this)
    }
    new k("起點", 2000, "goodEvent", "sean", 18), new k("中國", 5000, 0, "", 19), new k("越南", 1000, 0, "", 20), new k("韓國", 1300, 0, "", 21), new k("機會", 1000, "surprise", "sean", 22), new k("日本", 3000, 0, "", 23), new k("俄羅斯", 4000, 0, "", 24), new k("白雲機場", 1000, "airport", "sean", 25), new k("交所得稅", 1000, "badEvent", "sean", 26), new k("命運", 1000, "surprise", "sean", 27), new k("埃及", 1600, 0, "", 28), new k("監獄", 0, "jail", "sean", 29), new k("澳大利亞", 2400, 0, "", 17), new k("新西蘭", 1800, 0, "", 15), new k("南極洲", 2e4, 0, "", 13), new k("賭場", 1000, "casino", "sean", 11), new k("機會", 1000, "surprise", "sean", 10), new k("撿到錢", 1000, "goodEvent", "sean", 9), new k("巴西", 2000, 0, "", 8), new k("阿根廷", 2200, 0, "", 7), new k("墨西哥", 2400, 0, "", 6), new k("美國", 4500, 0, "", 5), new k("意大利", 3000, 0, "", 4), new k("倫敦機場", 1000, "airport", "sean", 3), new k("英國", 3600, 0, "", 2), new k("命運", 1000, "surprise", "sean", 1), new k("阿爾卑斯山", 1000, "trip", "sean", 0), new k("德國", 3400, 0, "", 12), new k("法國", 3200, 0, "", 14), new k("西班牙", 2800, 0, "", 16);
    var H = [];

    function S(e, n, t) {
        this.text = e, this.value = n, this.stop = t, H.push(this)
    }
    new S("扶老奶奶過馬路的事蹟被大家知道了，村委會頒發$1000獎金", 1000, 0), new S("中了彩票，獲得頭獎$5000", 5000, 0), new S("在街邊被劫匪搶劫，爲了保住性命，失去$3000", -3000, 0), new S("喝了一杯一點點，花費$30", -30, 0), new S("路邊撿到$500", 500, 0), new S("喫魚卡到魚刺，去醫院花了$800", -800, 0), new S("錢包落在出租車裏，丟失$1000", -1000, 0), new S("空閒時間去兼職家教，收穫$2000", 2000, 0), new S("扶老奶奶過馬路摔了一跤，買藥花了$100", -100, 0), new S("手機突然壞了，換了部最新款iPhone，花費$1300", -1300, 0), new S("喫羊肉火鍋，花費$500", -500, 0), new S("去日本看櫻花，花費$2000", -2000, 0), new S("什麼也沒有發生，除了錢包少了$800", -800, 0), new S("什麼也沒有發生, 除了錢包多了$1000", 1000, 0), new S("在廣交會做翻譯，獲得$1000", 1000, 0), new S("在校門口發傳單，得到$100", 100, 0), new S("獲得三好學生獎學金，獎金$3000", 3000, 0), new S("搶了個微信紅包，獲得$1", 1, 0), new S("夢見得到$3000獎金，醒來決定花$50去拜神", -50, 0), new S("獲得了$3000獎金！趕緊花$500去還願", 2500, 0), new S("賣閒置賺了$100", 100, 0), new S("什麼也沒有發生", 0, 0), new S("看電影花費了$100", -100, 0), new S("還花唄欠款$999", -999, 0), new S("一年一度的雙十一到了，剁手花了$2000", -2000, 0), new S("突然很渴想買瓶礦泉水，花費$5", -5, 0), new S("去工地搬磚賺了$500", 500, 0), new S("偷稅漏稅罰款$1000，拘留1日", -1000, 1), new S("超速行駛被罰款$2000，拘留2天", -2000, 2), new S("被查水錶發現有違建，罰款$1000並拘留3日", -1000, 3), new S("考試作弊被拘留5日", 0, 5);
    var j, C = 0,
        q = 0,
        A = 0,
        O = 0,
        N = 800,
        P = {
            Joker: "#5E45AB",
            Batman: "#121212",
            Superman: "#274D7A",
            Catwoman: "#B04E58",
            "Harley Quinn": "pink",
            Robin: "#FA2A14",
            "Green Lantern": "#5FAE2E"
        };

    function _(e) {
        e === q + A - 1 ? (e = 0, function () {
            let e = +document.querySelector(".big-box span b").innerHTML + 1;
            document.querySelector(".big-box span b").innerHTML = e
        }()) : e++, setTimeout(() => {
            (function (e) {
                let n = T[e];
                return n.stop ? (11 === n.position ? E(`${n.name}還有${n.stop}天可以出獄`) : E(`${n.name}離難得的假期結束還有${n.stop}天`), n.stop--, !1) : "bankrupt" !== n.state && (n.control ? y(!0) : setTimeout(() => {
                    B()
                }, 2 * N), C = e, w(n.name), !0)
            })(e) || _(e)
        }, N)
    }

    function B() {
        let e = F(1, 6);
        g(e), j = T[C];
        let n = setInterval(() => {
            var e;
            e = C, 29 === j.position && (j.position = -1, M[0].node.append(T[e].node), v(), T[e].money += 1000), j.position++, M[j.position].node.append(T[e].node)
        }, N);
        setTimeout(() => {
            clearInterval(n);
            let e = M[j.position];
            if (e.owner)
                if (e.owner && e.owner !== j.name && "sean" != e.owner) {
                    let n = T.find(n => n.name === e.owner);
                    if (n.stop) E("房子主人不在，免費過夜1晚！");
                    else {
                        let t = 5 / (3 * e.state + 1),
                            o = e.value / (t > .5 ? Math.ceil(t) : t);
                        j.money -= o, n.money += o, E(`${n.name}感謝${j.name}在${e.name}消費$${o}`), D()
                    }
                    _(C)
                } else if (e.owner === j.name) 3 === e.state ? _(C) : j.control ? b("upgrade", j.money > .5 * e.value) : I("upgrade", j.money - e.value / 2 > 2000);
                else if ("goodEvent" === e.state) {
                    let e = 500 * F(0, 7);
                    j.money += e, E("恭喜你撿到了$" + e), _(C)
                } else if ("badEvent" === e.state) {
                    let e = 300 * F(0, 7);
                    j.money -= e, E("你需要向稅務局繳納稅收$" + e), D(), _(C)
                } else if ("jail" === e.state) j.stop = F(1, 3), E(`偷稅漏稅被抓，關押${j.stop}天`), _(C);
                else if ("casino" === e.state) {
                    let e = F(1, 6);
                    g(e), setTimeout(() => {
                        let n = 500 * e;
                        j.money += n, E("恭喜你獲得了$" + n), v(), _(C)
                    }, 2 * N)
                } else if ("surprise" === e.state) {
                    var t = F(0, 31);
                    j.money += H[t].value, H[t].stop ? setTimeout((function () {
                        j.position = 11, j.stop = H[t].stop, M[11].node.append(j.node), D(), _(C)
                    }), 1.5 * N) : (D(), _(C)), E(H[t].text)
                } else if ("airport" === e.state) {
                    E("你花費$800搭乘飛機前往" + ("白雲機場" === e.name ? "英國" : "中國")), setTimeout(() => {
                        j.position = 30 - j.position, M[j.position].node.append(j.node), D(), _(C)
                    }, 1.5 * N), j.money -= 800
                } else "trip" === e.state && (j.stop = F(1, 3), j.money -= 1000 * j.stop, E(`${j.name}花費${1000 * j.stop}享受旅遊度假${j.stop}天`), D(), _(C));
            else j.control ? b("purchase", j.money > e.value) : setTimeout(() => I("purchase", j.money - e.value > 3000), N / 3);
            v()
        }, N * (e + .9))
    }

    function I(e, n) {
        let t = M[j.position];
        if (!n) return x(), void _(C);
        if ("purchase" === e) {
            t.owner = j.name, j.money -= t.value;
            let e = P[j.name];
            ! function (e, n) {
                e.style.boxShadow = `3px 3px 3px inset ${n},3px -3px 3px inset ${n},-3px 3px 3px inset ${n}, -3px -3px 3px inset ${n}`
            }(t.node, e), E("恭喜你獲得了" + t.name), _(C)
        } else {
            let e = ["一座小房子", "一套大別墅", "一棟大酒店"];
            j.money -= t.value / 2, t.state++, E(`恭喜你在${t.name}建了${e[t.state - 1]}`), $(t.node, t.state - 1)
        }
        x(), v()
    }

    function F(e, n) {
        return Math.floor(Math.random() * (n - e)) + e
    }

    function D() {
        j.money < 0 && setTimeout(() => {
            var e, n;
            j.stop = 0, j.state = "bankrupt", alert(`很遺憾，${j.name}破產了，所有地產將充公處理。`), e = j.node, n = T.indexOf(j), s.children[n].firstElementChild.style.display = "none", s.children[n].append(e), M.forEach(e => {
                e.owner === j.name && (e.owner = "", e.node.style.boxShadow = "1px 1px 1px inset #454545, 1px -1px 1px inset #454545, -1px 1px 1px inset #454545, -1px -1px 1px inset #454545")
            }),
                function () {
                    let e, n = 0;
                    T.forEach(t => {
                        "active" === t.state && (n++, e = t)
                    }), 1 === n && setTimeout(() => {
                        alert(e.name + "贏啦！恭喜你成爲最有錢的人！"), location.reload()
                    }, 2 * N)
                }()
        }, N / 2)
    }
}]);