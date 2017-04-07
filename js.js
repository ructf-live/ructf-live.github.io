(function() {
    ! function() {
        var e = function(e) {
            "use strict";

            function t(e) {
                if (e.paused || e.ended || g) return !1;
                try {
                    f.clearRect(0, 0, s, l), f.drawImage(e, 0, 0, s, l)
                } catch (o) {}
                p = setTimeout(function() {
                    t(e)
                }, S.duration), O.setIcon(h)
            }

            function o(e) {
                var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                e = e.replace(t, function(e, t, o, n) {
                    return t + t + o + o + n + n
                });
                var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return o ? {
                    r: parseInt(o[1], 16),
                    g: parseInt(o[2], 16),
                    b: parseInt(o[3], 16)
                } : !1
            }

            function n(e, t) {
                var o, n = {};
                for (o in e) n[o] = e[o];
                for (o in t) n[o] = t[o];
                return n
            }

            function r() {
                return b.hidden || b.msHidden || b.webkitHidden || b.mozHidden
            }
            e = e ? e : {};
            var i, a, l, s, h, f, c, d, u, y, w, g, x, m, p, b, v = {
                bgColor: "#d00",
                textColor: "#fff",
                fontFamily: "sans-serif",
                fontStyle: "bold",
                type: "circle",
                position: "down",
                animation: "slide",
                elementId: !1,
                dataUrl: !1,
                win: window
            };
            x = {}, x.ff = "undefined" != typeof InstallTrigger, x.chrome = !!window.chrome, x.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, x.ie = /*@cc_on!@*/ !1, x.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, x.supported = x.chrome || x.ff || x.opera;
            var C = [];
            w = function() {}, d = g = !1;
            var E = function() {
                    i = n(v, e), i.bgColor = o(i.bgColor), i.textColor = o(i.textColor), i.position = i.position.toLowerCase(), i.animation = S.types["" + i.animation] ? i.animation : v.animation, b = i.win.document;
                    var t = i.position.indexOf("up") > -1,
                        r = i.position.indexOf("left") > -1;
                    if (t || r)
                        for (var d = 0; d < S.types["" + i.animation].length; d++) {
                            var u = S.types["" + i.animation][d];
                            t && (u.y = u.y < .6 ? u.y - .4 : u.y - 2 * u.y + (1 - u.w)), r && (u.x = u.x < .6 ? u.x - .4 : u.x - 2 * u.x + (1 - u.h)), S.types["" + i.animation][d] = u
                        }
                    i.type = A["" + i.type] ? i.type : v.type, a = O.getIcon(), h = document.createElement("canvas"), c = document.createElement("img"), a.hasAttribute("href") ? (c.setAttribute("crossOrigin", "anonymous"), c.onload = function() {
                        l = c.height > 0 ? c.height : 32, s = c.width > 0 ? c.width : 32, h.height = l, h.width = s, f = h.getContext("2d"), M.ready()
                    }, c.setAttribute("src", a.getAttribute("href"))) : (c.onload = function() {
                        l = 32, s = 32, c.height = l, c.width = s, h.height = l, h.width = s, f = h.getContext("2d"), M.ready()
                    }, c.setAttribute("src", ""))
                },
                M = {};
            M.ready = function() {
                d = !0, M.reset(), w()
            }, M.reset = function() {
                d && (C = [], u = !1, y = !1, f.clearRect(0, 0, s, l), f.drawImage(c, 0, 0, s, l), O.setIcon(h), window.clearTimeout(m), window.clearTimeout(p))
            }, M.start = function() {
                if (d && !y) {
                    var e = function() {
                        u = C[0], y = !1, C.length > 0 && (C.shift(), M.start())
                    };
                    if (C.length > 0) {
                        y = !0;
                        var t = function() {
                            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(e) {
                                e in C[0].options && (i[e] = C[0].options[e])
                            }), S.run(C[0].options, function() {
                                e()
                            }, !1)
                        };
                        u ? S.run(u.options, function() {
                            t()
                        }, !0) : t()
                    }
                }
            };
            var A = {},
                I = function(e) {
                    return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = s * e.x, e.y = l * e.y, e.w = s * e.w, e.h = l * e.h, e.len = ("" + e.n).length, e
                };
            A.circle = function(e) {
                e = I(e);
                var t = !1;
                2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, t = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, t = !0), f.clearRect(0, 0, s, l), f.drawImage(c, 0, 0, s, l), f.beginPath(), f.font = i.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + i.fontFamily, f.textAlign = "center", t ? (f.moveTo(e.x + e.w / 2, e.y), f.lineTo(e.x + e.w - e.h / 2, e.y), f.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), f.lineTo(e.x + e.w, e.y + e.h - e.h / 2), f.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), f.lineTo(e.x + e.h / 2, e.y + e.h), f.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), f.lineTo(e.x, e.y + e.h / 2), f.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : f.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), f.fillStyle = "rgba(" + i.bgColor.r + "," + i.bgColor.g + "," + i.bgColor.b + "," + e.o + ")", f.fill(), f.closePath(), f.beginPath(), f.stroke(), f.fillStyle = "rgba(" + i.textColor.r + "," + i.textColor.g + "," + i.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? f.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : f.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), f.closePath()
            }, A.rectangle = function(e) {
                e = I(e);
                var t = !1;
                2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, t = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, t = !0), f.clearRect(0, 0, s, l), f.drawImage(c, 0, 0, s, l), f.beginPath(), f.font = i.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + i.fontFamily, f.textAlign = "center", f.fillStyle = "rgba(" + i.bgColor.r + "," + i.bgColor.g + "," + i.bgColor.b + "," + e.o + ")", f.fillRect(e.x, e.y, e.w, e.h), f.fillStyle = "rgba(" + i.textColor.r + "," + i.textColor.g + "," + i.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? f.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : f.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), f.closePath()
            };
            var T = function(e, t) {
                    t = ("string" == typeof t ? {
                        animation: t
                    } : t) || {}, w = function() {
                        try {
                            if ("number" == typeof e ? e > 0 : "" !== e) {
                                var n = {
                                    type: "badge",
                                    options: {
                                        n: e
                                    }
                                };
                                if ("animation" in t && S.types["" + t.animation] && (n.options.animation = "" + t.animation), "type" in t && A["" + t.type] && (n.options.type = "" + t.type), ["bgColor", "textColor"].forEach(function(e) {
                                        e in t && (n.options[e] = o(t[e]))
                                    }), ["fontStyle", "fontFamily"].forEach(function(e) {
                                        e in t && (n.options[e] = t[e])
                                    }), C.push(n), C.length > 100) throw new Error("Too many badges requests in queue.");
                                M.start()
                            } else M.reset()
                        } catch (r) {
                            throw new Error("Error setting badge. Message: " + r.message)
                        }
                    }, d && w()
                },
                U = function(e) {
                    w = function() {
                        try {
                            var t = e.width,
                                o = e.height,
                                n = document.createElement("img"),
                                r = o / l > t / s ? t / s : o / l;
                            n.setAttribute("crossOrigin", "anonymous"), n.onload = function() {
                                f.clearRect(0, 0, s, l), f.drawImage(n, 0, 0, s, l), O.setIcon(h)
                            }, n.setAttribute("src", e.getAttribute("src")), n.height = o / r, n.width = t / r
                        } catch (i) {
                            throw new Error("Error setting image. Message: " + i.message)
                        }
                    }, d && w()
                },
                R = function(e) {
                    w = function() {
                        try {
                            if ("stop" === e) return g = !0, M.reset(), void(g = !1);
                            e.addEventListener("play", function() {
                                t(this)
                            }, !1)
                        } catch (o) {
                            throw new Error("Error setting video. Message: " + o.message)
                        }
                    }, d && w()
                },
                L = function(e) {
                    if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(e) {
                            return e
                        }), x.supported) {
                        var o = !1;
                        navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, w = function() {
                            try {
                                if ("stop" === e) return g = !0, M.reset(), void(g = !1);
                                o = document.createElement("video"), o.width = s, o.height = l, navigator.getUserMedia({
                                    video: !0,
                                    audio: !1
                                }, function(e) {
                                    o.src = URL.createObjectURL(e), o.play(), t(o)
                                }, function() {})
                            } catch (n) {
                                throw new Error("Error setting webcam. Message: " + n.message)
                            }
                        }, d && w()
                    }
                },
                O = {};
            O.getIcon = function() {
                var e = !1,
                    t = function() {
                        for (var e = b.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length, o = t - 1; o >= 0; o--)
                            if (/(^|\s)icon(\s|$)/i.test(e[o].getAttribute("rel"))) return e[o];
                        return !1
                    };
                return i.element ? e = i.element : i.elementId ? (e = b.getElementById(i.elementId), e.setAttribute("href", e.getAttribute("src"))) : (e = t(), e === !1 && (e = b.createElement("link"), e.setAttribute("rel", "icon"), b.getElementsByTagName("head")[0].appendChild(e))), e.setAttribute("type", "image/png"), e
            }, O.setIcon = function(e) {
                var t = e.toDataURL("image/png");
                if (i.dataUrl && i.dataUrl(t), i.element) i.element.setAttribute("href", t), i.element.setAttribute("src", t);
                else if (i.elementId) {
                    var o = b.getElementById(i.elementId);
                    o.setAttribute("href", t), o.setAttribute("src", t)
                } else if (x.ff || x.opera) {
                    var n = a;
                    a = b.createElement("link"), x.opera && a.setAttribute("rel", "icon"), a.setAttribute("rel", "icon"), a.setAttribute("type", "image/png"), b.getElementsByTagName("head")[0].appendChild(a), a.setAttribute("href", t), n.parentNode && n.parentNode.removeChild(n)
                } else a.setAttribute("href", t)
            };
            var S = {};
            return S.duration = 40, S.types = {}, S.types.fade = [{
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: 0
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .1
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .2
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .3
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .4
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .5
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .6
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .7
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .8
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: .9
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: 1
            }], S.types.none = [{
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: 1
            }], S.types.pop = [{
                x: 1,
                y: 1,
                w: 0,
                h: 0,
                o: 1
            }, {
                x: .9,
                y: .9,
                w: .1,
                h: .1,
                o: 1
            }, {
                x: .8,
                y: .8,
                w: .2,
                h: .2,
                o: 1
            }, {
                x: .7,
                y: .7,
                w: .3,
                h: .3,
                o: 1
            }, {
                x: .6,
                y: .6,
                w: .4,
                h: .4,
                o: 1
            }, {
                x: .5,
                y: .5,
                w: .5,
                h: .5,
                o: 1
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: 1
            }], S.types.popFade = [{
                x: .75,
                y: .75,
                w: 0,
                h: 0,
                o: 0
            }, {
                x: .65,
                y: .65,
                w: .1,
                h: .1,
                o: .2
            }, {
                x: .6,
                y: .6,
                w: .2,
                h: .2,
                o: .4
            }, {
                x: .55,
                y: .55,
                w: .3,
                h: .3,
                o: .6
            }, {
                x: .5,
                y: .5,
                w: .4,
                h: .4,
                o: .8
            }, {
                x: .45,
                y: .45,
                w: .5,
                h: .5,
                o: .9
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: 1
            }], S.types.slide = [{
                x: .4,
                y: 1,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .9,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .9,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .8,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .7,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .6,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .5,
                w: .6,
                h: .6,
                o: 1
            }, {
                x: .4,
                y: .4,
                w: .6,
                h: .6,
                o: 1
            }], S.run = function(e, t, o, a) {
                var l = S.types[r() ? "none" : i.animation];
                return a = o === !0 ? "undefined" != typeof a ? a : l.length - 1 : "undefined" != typeof a ? a : 0, t = t ? t : function() {}, a < l.length && a >= 0 ? (A[i.type](n(e, l[a])), m = setTimeout(function() {
                    o ? a -= 1 : a += 1, S.run(e, t, o, a)
                }, S.duration), O.setIcon(h), void 0) : void t()
            }, E(), {
                badge: T,
                video: R,
                image: U,
                webcam: L,
                reset: M.reset,
                browser: {
                    supported: x.supported
                }
            }
        };
        "undefined" != typeof define && define.amd ? define([], function() {
            return e
        }) : "undefined" != typeof module && module.exports ? module.exports = e : this.Favico = e
    }();

    function journalist(e, t, a, n, o, r, i, l, s, c, d, u, g) {
        function m(e, t, a) {
            a || (a = 864e5);
            var n = Date.now(),
                o = new Date(n + a),
                r = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";expires=" + o.toGMTString() + ";path=/";
            document.cookie = r
        }

        function v(e) {
            var t = document.createElement("div"),
                a = document.createDocumentFragment();
            t.innerHTML = e;
            for (var n = t.getElementsByTagName("script"), o = 0; o < n.length; o++) {
                for (var r = document.createElement("script"), i = 0; i < n[o].attributes.length; i++) r.setAttribute(n[o].attributes[i].name, n[o].attributes[i].value);
                try {
                    r.appendChild(document.createTextNode(n[o].text))
                } catch (e) {
                    r.text = n[o].text
                }
                n[o].parentNode.replaceChild(r, n[o])
            }
            for (var l = t.getElementsByTagName("a"), o = 0; o < l.length; o++) l[o].classList.contains("journalist-broadcast-post-info-time") ? u && l[o].removeAttribute("href") : (l[o].setAttribute("rel", "noopener"), l[o].setAttribute("target", "_blank"));
            for (var s; s = t.firstChild;) a.appendChild(s);
            return a
        }

        function h() {
            for (var e = ce.querySelectorAll("." + be + "-selected"), t = 0; t < e.length; t++) e[t].classList.remove(be + "-selected")
        }

        function f(e) {
            h();
            var t = ce.querySelector("#" + e);
            t && (t.classList.contains(be + "-selected") || t.classList.add(be + "-selected"))
        }

        function p(e) {
            Q && (clearTimeout(Q), Q = null)
        }

        function b(e) {
            Q = setTimeout(function() {
                K && (K.onclose = function() {}, K.close())
            }, 3e5)
        }

        function y(e) {
            fe.innerHTML = e[2]
        }

        function w(e) {
            var t = ce.getElementsByClassName("journalist-broadcast-description")[0];
            e[2] && e[2].length ? t ? t.innerHTML = e[2] : ve.appendChild(v('<div class="journalist-broadcast-description">' + e[2] + "</div>")) : t && t.remove()
        }

        function C(e) {
            e[2] && !u ? me.style.backgroundImage = "url('" + e[2] + "')" : me.style.backgroundImage = "none"
        }

        function j(e) {
            var t = be + "-" + e[2],
                a = ce.querySelector("#" + t);
            if (a) a.parentNode.replaceChild(v(e[3]), a);
            else {
                var n = v(e[3]),
                    a = n.firstChild;
                if (a.style.opacity = 0, a.style.maxHeight = "0", he.insertBefore(n, he.firstChild), d && he.childNodes.length > d && ae) {
                    var o = ae.previousSibling || null;
                    ae.remove(), ae = o
                }
                window.getComputedStyle && (window.getComputedStyle(a).opacity, window.getComputedStyle(a).maxHeight), a.style.opacity = 1, a.style.maxHeight = "1000px", window.getComputedStyle && window.getComputedStyle(a).maxHeight, setTimeout(function() {
                    a.style.transition = "initial", a.style.removeProperty("opacity"), a.style.removeProperty("max-height")
                }, 500), Y || (Z++, ee.badge(Z))
            }
        }

        function S(e) {
            var t = be + "-" + e[2],
                a = ce.querySelector("#" + t);
            a ? a.parentNode.replaceChild(v(e[3]), a) : he.insertBefore(v(e[3]), he.firstChild)
        }

        function N(e) {
            for (var t, a = ce.getElementsByClassName(be + "-info-author"); t = a[0];) t.remove();
            t = null, a = null
        }

        function k(e) {
            for (var t in e[3]) {
                for (var a = [], n = 0; n < e[3][t].length; n++) a.push("#" + be + "-" + e[3][t][n] + " ." + be + "-info-time");
                for (var o = ce.querySelectorAll(a.join(",")), n = 0; n < o.length; n++) o[n].parentNode.insertBefore(v(t), o[n])
            }
        }

        function E(e) {
            e[2] ? (N(e), k(e)) : N(e)
        }

        function B(e) {
            var t = be + "-message-" + e[2],
                a = ce.querySelector("#" + t);
            a && a.remove(), a = null, t = null
        }

        function L(e) {
            var t = be + "-" + e[2],
                a = ce.querySelector("#" + t);
            a && a.remove(), a = null, t = null, Y || (Z--, Z <= 0 ? (Z = 0, ee.reset()) : ee.badge(Z))
        }

        function x(e) {
            var t = be + "-message-" + e[2],
                a = ce.querySelector("#" + t);
            a && a.parentNode.replaceChild(v(e[3]), a), a = null, t = null
        }

        function T(e) {
            var t = be + "-" + e[2],
                a = ce.querySelector("#" + t);
            if (a) {
                var n = be + "-message-" + e[3],
                    o = ce.querySelector("#" + n);
                o ? o.parentNode.replaceChild(v(e[4]), o) : a.appendChild(v(e[4]))
            }
            a = null, t = null
        }

        function q(e) {
            var t = be + "-" + e[2],
                a = ce.querySelector("#" + t);
            a && (e[3].hot ? a.classList.add(be + "-hot") : a.classList.remove(be + "-hot")), a = null, t = null
        }

        function H(e) {
            try {
                var t = JSON.parse(e.data);
                switch (o = t[0], t[1]) {
                    case z:
                        y(t);
                        break;
                    case J:
                        w(t);
                        break;
                    case O:
                        C(t);
                        break;
                    case _:
                        j(t);
                        break;
                    case R:
                        S(t);
                        break;
                    case P:
                        E(t);
                        break;
                    case G:
                        B(t);
                        break;
                    case F:
                        L(t);
                        break;
                    case W:
                        x(t);
                        break;
                    case $:
                        T(t);
                        break;
                    case U:
                        q(t);
                        break;
                    case A:
                        p(t);
                        break;
                    case D:
                        b(t)
                }
            } catch (t) {
                console.log(t), console.log(e.data)
            }
        }

        function I(e) {
            3e3 !== e.code && setTimeout(function() {
                M()
            }, 1e3)
        }

        function M() {
            K = new WebSocket(t), K.onopen = function(e) {
                K.send(JSON.stringify([0, [a, o, X, navigator ? navigator.language : null, s]]))
            }, K.onmessage = H, K.onclose = I, setInterval(function() {
                console.log(K.readyState)
            }, 3e4)
        }
        var A = 0,
            D = 1,
            z = 2,
            J = 3,
            O = 4,
            P = 5,
            R = 6,
            _ = 7,
            F = 8,
            U = 9,
            $ = 10,
            G = 11,
            W = 12,
            K = null,
            Q = null,
            V = new Date,
            X = V.getTimezoneOffset() * -1,
            Y = !0,
            Z = 0,
            ee = new Favico({
                animation: "slide"
            }),
            te = !1,
            ae = null,
            ne = Math.max(20, d || 0),
            oe = 10,
            re = 0,
            ie = window.innerHeight,
            le = Math.floor(ie / 2);
        window.addEventListener("focus", function() {
            Y = !0, setTimeout(function() {
                Z > 0 && (Z = 0, ee.reset())
            }, 1e3)
        }), window.addEventListener("blur", function() {
            Y = !1
        }), m("tz", X, 31536e7), navigator && navigator.language && m("locale", navigator.language, 31536e7);
        var se = document.getElementById("journalist-broadcast-" + a);
        if (se) {
            var ce = document.createElement("div");
            ce.className = "journalist-broadcast" + (u ? " journalist-broadcast-widget" : ""), se.parentNode.insertBefore(ce, se.nextSibling);
            var de = "";
            de += '<div class="journalist-broadcast-header" style="background-image: ' + (l && !u ? "url('" + l + "')" : "none") + ';"><div class="journalist-broadcast-header-shadow">', de += '<div class="journalist-broadcast-title">' + r + "</div>", i && (de += '<div class="journalist-broadcast-description">' + i + "</div>"), g && (de += '<div class="journalist-broadcast-telegram-channel"><a href="https://t.me/' + g + '" target="_blank" rel="noopener">@' + g + "</a></div>");
            var ue = navigator && navigator.language && navigator.language.match(/ru/) ? "Создано в" : "Powered by";
            de += '<div class="journalist-broadcast-powered-by"><span>' + ue + ' <a href="https://journali.st" target="_blank" rel="noopener">Journalist</a></span></div>', de += "</div></div>";
            var ge = c.slice(0, ne);
            de += '<div class="journalist-broadcast-posts">' + ge.join("") + "</div>", ce.appendChild(v(e + de)), re = ge.length;
            var me = ce.getElementsByClassName("journalist-broadcast-header")[0],
                ve = ce.getElementsByClassName("journalist-broadcast-header-shadow")[0],
                he = ce.getElementsByClassName("journalist-broadcast-posts")[0],
                fe = ce.getElementsByClassName("journalist-broadcast-title")[0],
                pe = ce.getElementsByClassName("journalist-broadcast-post");
            pe.length && (ae = pe[pe.length - 1]);
            var be = "journalist-broadcast-post";
            u || document.location.hash && document.location.hash.match(/journalist\-broadcast\-post\-\d+$/) && (document.location = document.location, f(document.location.hash.replace("#", ""))), setInterval(function() {
                if (te) {
                    if (!ae) return void(te = !1);
                    if (re >= c.length) return void(te = !1);
                    var e = ae.getBoundingClientRect();
                    if (e.top > window.innerHeight + le) return void(te = !1);
                    var t = c.slice(re, re + oe);
                    if (!t.length) return void(te = !1);
                    re += t.length, he.appendChild(v(t.join("")));
                    var a = ce.getElementsByClassName("journalist-broadcast-post");
                    a.length && (ae = a[a.length - 1]), te = !1
                }
            }, 50), window.addEventListener("scroll", function() {
                te = !0
            }), window.addEventListener("resize", function() {
                te = !0, ie = window.innerHeight, le = Math.floor(ie / 2)
            }), u || window.addEventListener("hashchange", function() {
                h(), document.location.hash && document.location.hash.match(/journalist\-broadcast\-post\-\d+$/) && f(document.location.hash.replace("#", ""))
            }), n && M()
        }
    };
    journalist("<style>.journalist-broadcast{color:#222;font-size:16px;font-family:\"Helvetica Neue\",\"Trebuchet MS\",sans-serif;font-family:-apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,sans-serif;margin:0 auto;width:636px;-webkit-text-size-adjust:100%}.journalist-broadcast-header{background-size:cover;background-position:center center;border-radius:2px}.journalist-broadcast-header-shadow{background-color:rgba(0,0,0,0.3);border-radius:2px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:48px 0;position:relative;min-height:320px;width:100%;height:100%}.journalist-broadcast-title{align-self:center;color:#fff;font-size:36px;line-height:1.2;font-weight:normal;font-family:Houschka,serif;text-align:center;max-width:80%}.journalist-broadcast-description{color:#ccc;align-self:center;max-width:80%;margin-top:16px;font-size:14.4px;line-height:1.5;font-weight:300;text-align:center}.journalist-broadcast-description p{margin:0}.journalist-broadcast-description a{color:#ccc;text-decoration:underline;border:0}.journalist-broadcast-description a:hover{color:#ccc;text-decoration:none;border:0}.journalist-broadcast-powered-by{position:absolute;right:7px;bottom:6px;color:#aaa;font-size:9.6px}.journalist-broadcast-powered-by a{color:#bbb;font-weight:bold;text-decoration:underline;border:0}.journalist-broadcast-powered-by a:hover{text-decoration:none}.journalist-broadcast-post{padding:16px 16px 16px 14px;border-radius:2px;border:0;border-left:2px solid transparent;box-shadow:0 1px 0 0 #d7d8db,0 0 0 1px #e3e4e8;margin:16px 0;font-size:14.4px;background-color:#fff;overflow:hidden;-webkit-transition:opacity 300ms,max-height 300ms;-moz-transition:opacity 300ms,max-height 300ms;-ms-transition:opacity 300ms,max-height 300ms;-o-transition:opacity 300ms,max-height 300ms;transition:opacity 300ms,max-height 300ms}.journalist-broadcast-post-selected{border-left:2px solid #0069be}.journalist-broadcast-post-hot{background-color:#f3f2ee;box-shadow:0 1px 0 0 #a98,0 0 0 1px #ba9}.journalist-broadcast-post-unpublished{opacity:.5}.journalist-broadcast-post-info{font-size:12.8px;font-weight:normal;margin-bottom:10px;text-align:left}.journalist-broadcast-post-info-author{color:#606070;margin-right:4px}.journalist-broadcast-post-info-author-avatar{display:inline-block;width:24px;height:24px;background-size:cover;position:relative;top:-5px;border-radius:12px;margin-right:6.4px;float:left}.journalist-broadcast-post-info-time{color:#606070}.journalist-broadcast-post-info-author+.journalist-broadcast-post-info-time{color:#9090a0;text-transform:lowercase}a.journalist-broadcast-post-info-time{color:#606070;text-decoration:none;border:0}a.journalist-broadcast-post-info-time:hover{text-decoration:underline;border:0}.journalist-broadcast-post-info-author+a.journalist-broadcast-post-info-time{color:#9090a0;text-transform:lowercase}.journalist-broadcast-post-info-author+a.journalist-broadcast-post-info-time:hover{text-decoration:underline;border:0}.journalist-broadcast-post-message-text{margin-bottom:9.6px;line-height:1.5;color:#223}.journalist-broadcast-post-message-text p{margin-top:0;margin-bottom:9.6px;text-align:left}.journalist-broadcast-post-message-text blockquote{border-left:4px solid #e0e0e0;margin:0;padding-left:12.8px}.journalist-broadcast-post-message-text code{background-color:#eee;border:1px solid #e0e0e0;padding:0 2px}.journalist-broadcast-post h1,.journalist-broadcast-post h2,.journalist-broadcast-post h3,.journalist-broadcast-post h4,.journalist-broadcast-post h5,.journalist-broadcast-post h6{margin-top:0;font-weight:lighter;line-height:1.2}.journalist-broadcast-post h1{font-size:29px}.journalist-broadcast-post h2{font-size:22px}.journalist-broadcast-post h3{font-size:17px}.journalist-broadcast-post h4{font-size:14.4px}.journalist-broadcast-post h5{font-size:12px}.journalist-broadcast-post h6{font-size:10px}.journalist-broadcast-post-message-text>*:last-child{margin-bottom:0}.journalist-broadcast-post-message-text a{color:#0074d9;text-decoration:underline;border:0}.journalist-broadcast-post-message-text a:hover{text-decoration:none}.journalist-broadcast-post-message-text a:visited{color:#6999d9}.journalist-broadcast-post-message-text:last-child{margin-bottom:0}.journalist-broadcast-post-message-image{text-align:center;margin-bottom:9.6px;padding:6px 0}.journalist-broadcast-post-message-image:last-child{margin-bottom:0}.journalist-broadcast-post-message-image img{display:block;margin:0 auto;padding:0;max-width:100%}.journalist-broadcast-post-message-image p{margin:4px 0 0;color:#606070;font-size:12.8px}.journalist-broadcast-post-message-image p a{color:#808090;text-decoration:underline;border:0}.journalist-broadcast-post-message-image p a:hover{text-decoration:none}.journalist-broadcast-post-message-video{text-align:center;margin-bottom:9.6px;padding:6px 0}.journalist-broadcast-post-message-video:last-child{margin-bottom:0}.journalist-broadcast-post-message-video p{margin:4px 0 0;color:#606070;font-size:12.8px}.journalist-broadcast-post-message-video p a{color:#808090;text-decoration:underline;border:0}.journalist-broadcast-post-message-video p a:hover{text-decoration:none}.journalist-broadcast-post-message-video video{max-width:100%}.journalist-broadcast-post-message-audio{text-align:center;margin-bottom:9.6px;padding:6px 0}.journalist-broadcast-post-message-audio:last-child{margin-bottom:0}.journalist-broadcast-post-message-audio audio{width:100%}.journalist-broadcast-post-message-embed{padding:6px 0;margin-bottom:9.6px}.journalist-broadcast-post-message-embed:last-child{margin-bottom:0}.journalist-broadcast-post-message-embed twitterwidget{margin-left:auto;margin-right:auto}.journalist-broadcast-post-message-embed iframe{display:block;margin-left:auto !important;margin-right:auto !important}.journalist-broadcast-post-message-link{margin-bottom:9.6px;padding:6px 0;display:flex;flex-direction:column;box-sizing:border-box;overflow:hidden}.journalist-broadcast-post-message-link a{text-decoration:none;border:0;color:#222}.journalist-broadcast-post-message-link:last-child{margin-bottom:0}.journalist-broadcast-post-message-link div:first-child{width:100%;height:300px;background-color:#e0e0e0;background-position:center center;background-size:cover;border-radius:0;box-sizing:border-box;margin:0}.journalist-broadcast-post-message-link div:last-child{width:100%;height:auto;background:0;border-radius:0;padding:12.8px 9.6px;box-sizing:border-box;background-color:#fafafa;border:1px solid #e0e0e0;border-top:0}.journalist-broadcast-post-message-link div:first-child:last-child{border:1px solid #e0e0e0}.journalist-broadcast-post-message-link-title{font-weight:bold;color:#222}.journalist-broadcast-post-message-link-description{margin:9.6px 0 9.6px 0;color:#606070;font-size:12.8px}.journalist-broadcast-post-message-link-host{color:#333;font-size:12.8px;background-position:left center;background-size:15px 15px;background-repeat:no-repeat;padding:0 0 0 19.2px}@media only screen and (max-width:667px){.journalist-broadcast{width:100%;margin:0 auto}.journalist-broadcast-header{border-radius:0}.journalist-broadcast-header-shadow{border-radius:0}.journalist-broadcast-title{font-size:26px;max-width:94%}.journalist-broadcast-description{max-width:94%}.journalist-broadcast-post{border-top:1px solid #e3e4e8;box-shadow:none;/*!*linear-gradient(90deg,  black, black 50%, transparent 50%) top    right / 1px 100% no-repeat,*!*//*!*linear-gradient(0,      black, black 50%, transparent 50%) bottom right / 100% 1px no-repeat,*!*//*!*linear-gradient(-90deg, black, black 50%, transparent 50%) bottom left  / 1px 100% no-repeat;*!*/border-radius:0;margin-top:0;margin-bottom:0}.journalist-broadcast-post:first-child{border-top:0}.journalist-broadcast-post-hot{border-top:1px solid #a98;border-bottom:1px solid #a98}.journalist-broadcast-post-hot+.journalist-broadcast-post{border-top:0}}.journalist-broadcast.journalist-broadcast-widget{width:100%;max-width:600px;margin:0 auto;border:2px solid #0069be}.journalist-broadcast-widget .journalist-broadcast-header{border-radius:0;background:#0069be}.journalist-broadcast-widget .journalist-broadcast-header-shadow{background-color:transparent;border-radius:0;border-radius:2px;padding:6px 10px 8px;min-height:0;width:100%;height:100%;flex-direction:row;justify-content:space-between}.journalist-broadcast-widget .journalist-broadcast-telegram-channel{font-size:14px;color:#eee;display:flex;justify-content:center;flex-direction:column}.journalist-broadcast-widget .journalist-broadcast-telegram-channel a{color:#eee;text-decoration:none}.journalist-broadcast-widget .journalist-broadcast-powered-by{color:#ddd;display:flex;justify-content:center;flex-direction:column;position:static;right:auto;bottom:auto}.journalist-broadcast-widget .journalist-broadcast-powered-by a{color:#eee}.journalist-broadcast-widget .journalist-broadcast-title{font-size:16px;max-width:100%;display:none}.journalist-broadcast-widget .journalist-broadcast-description{display:none}.journalist-broadcast-widget .journalist-broadcast-post{border-top:1px solid #e3e4e8;box-shadow:none;border-radius:0;margin-top:0;margin-bottom:0}.journalist-broadcast-widget .journalist-broadcast-post:first-child{border-top:0}.journalist-broadcast-widget .journalist-broadcast-post-hot{border-top:1px solid #a98;border-bottom:1px solid #a98}.journalist-broadcast-widget .journalist-broadcast-post-hot+.journalist-broadcast-post{border-top:0}.journalist-broadcast-widget a.journalist-broadcast-post-info-time:hover{text-decoration:none;border:0;cursor:default}.journalist-broadcast-widget .journalist-broadcast-post{padding:10px 10px 10px 8px}.journalist-broadcast-widget .journalist-broadcast-post-info{margin-bottom:4px;font-size:12px}</style>", "wss://b-2.journali.st", 500109206, true, 775948021, "RuCTF 2017 Live", null, "https://s-4.journalist.im/b500109206/F7W1-KFTv.jpg", null, [], 0, false, null);
})();
