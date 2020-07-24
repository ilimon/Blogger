var cm_config_defaults = {
        home_page: "//" + window.location.hostname,
        max_result: 7,
        t_w: 40,
        t_h: 40,
        summary: 9999,
        new_tab_link: !0,
        ct_id: "comments-container",
        new_cm: " Komentar Baru!",
        interval: 3e4,
        alert: !0
    },
    _cookie = {
        set: function(t, e, a) {
            var o, s;
            a ? ((o = new Date).setTime(o.getTime() + 24 * a * 60 * 60 * 1e3), s = "; expires=" + o.toGMTString()) : s = "", document.cookie = t + "=" + e + s + "; path=/"
        },
        get: function(t) {
            for (var e, a = t + "=", o = document.cookie.split(";"), s = 0; s < o.length; s++) {
                for (e = o[s];
                    " " == e.charAt(0);) e = e.substring(1, e.length);
                if (0 == e.indexOf(a)) return e.substring(a.length, e.length)
            }
            return null
        },
        del: function(t) {
            this.set(t, "", -1)
        }
    },
    tt_cm = _cookie.get("tt_cm") ? _cookie.get("tt_cm") : 0,
    doc_title = document.title;
for (var i in cm_config_defaults) cm_config_defaults[i] = void 0 === cm_config[i] ? cm_config_defaults[i] : cm_config[i];

function showRecentComments(t) {
    var e, a, o, s, i, n, l, c, r = t.feed.entry,
        p = parseInt(t.feed.openSearch$totalResults.$t, 10),
        h = "",
        d = tt_cm,
        m = cm_config_defaults;
    d < p && (!0 === m.alert ? alert(p - d + m.new_cm) : !1 === m.alert ? document.title = "(" + (p - d) + m.new_cm + ") " + doc_title : m.alert(p - d, m.new_cm)), h = '<ul class="rCommOuter">';
    for (var u = 0; u < r.length; u++) {
        for (var g = 0; g < r[u].link.length; g++)
            if ("alternate" == r[u].link[g].rel) {
                link = r[u].link[g].href;
                break
            } link.split("#")[1];
        var w = link.lastIndexOf("/") + 1,
            f = link.lastIndexOf("."),
            v = link.split("-").join(" ").substring(w, f) + "&hellip;";
        author = r[u].author[0], name = author.name.$t, avatar = author.gd$image.src.replace(/\/s[0-9]+(\-c|\/)/, "/s" + m.t_w + "-c$1").replace(/http\:\/\/www.google.com\/url\?source\=imglanding(.*?)q\=/i, "").replace(/\.(jpg|jpeg|png|bmp|gif)(.*?)$/i, ".$1"), profile = author.uri ? author.uri.$t : "#nope", date = r[u].gd$extendedProperty[1].value, content = "content" in r[u] ? r[u].content.$t.replace(/<br ?\/?>/gi, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "", nt = m.new_tab_link ? ' target="_blank"' : "", content = content.length > m.summary ? content.substring(0, m.summary) + "&hellip;" : content, h += "<li>", h += '<a class="item1" href="' + profile + '" target="_blank" title="' + name + '"><img alt="avatar" src="' + avatar + '"></a>', h += '<a class="item2" href=' + link + ">", h += '<span class="rCommHeader"><b>' + name + "</b> mengomentari <b>" + v + "</b></span>", h += '<span class="rCommText">"' + content + '"<small style="opacity:.8;white-space:nowrap;display:block;margin-top:10px;">' + (e = date, a = void 0, o = void 0, s = void 0, i = void 0, n = void 0, l = void 0, c = void 0, a = new Date(e), i = 30 * (s = 24 * (o = 36e5)), n = 365 * s, l = "yang lalu", (c = new Date - a) < 6e4 ? Math.round(c / 1e3) + " detik " + l : c < o ? Math.round(c / 6e4) + " menit " + l : c < s ? Math.round(c / o) + " jam " + l : c < i ? Math.round(c / s) + " hari " + l : c < n ? Math.round(c / i) + " bulan " + l : Math.round(c / n) + " tahun " + l) + "</small></span>", h += "</a>", h += "</li>"
    }
    h += "</ul>", document.getElementById(m.ct_id).innerHTML = h, _cookie.set("tt_cm", p, 7e3), tt_cm = p, $('img[src="https://img1.blogblog.com/img/b16-rounded.gif"]').remove()
}

function lazyLoad() {
    var t;
    (t = jQuery)(window).ready(function() {
        var e = t(window).height();
        t("[data-src]").each(function() {
            if ("IMG" == t(this).prop("tagName")) {
                if (t(this).css("display", "none"), t('<div class="lazyLoad_img"></div>').insertBefore(this), t(this).hasClass("img_onload")) {
                    var e = t(this).attr("data-src");
                    t(this).attr("src", e), t(this).prev(".lazyLoad_img").remove(), t(this).show(), t(this).removeAttr("style"), t(this).removeAttr("data-src")
                }
            } else t(this).prepend('<img alt="loading" style="display:none!important;" class="lazyLoad_bg_img"/>'), t(this).hasClass("img_onload") && (e = t(this).attr("data-src"), t(this).addClass("lazyLoad_bg"), t("img.lazyLoad_bg_img", this).attr("src", e), t("img.lazyLoad_bg_img", this).on("load", function() {
                t(this).closest("[data-src]").removeClass("lazyLoad_bg"), t(this).closest("[data-src]").css("background-image", "url(" + e + ")"), t(this).closest("[data-src]").removeAttr("data-src"), t(this).remove()
            }))
        }), t(window).on("scroll", function() {
            var a = t(this).scrollTop();
            t("[data-src]").each(function() {
                var o = t(this).attr("data-src");
                "IMG" == t(this).prop("tagName") ? t(this).offset().top < a + e && (t(this).attr("src", o), t(this).on("load", function() {
                    t(this).prev(".lazyLoad_img").remove(), t(this).show(), t(this).removeAttr("style"), t(this).removeAttr("data-src")
                })) : t(this).offset().top < a + e && (t(this).addClass("lazyLoad_bg"), t("img.lazyLoad_bg_img", this).attr("src", o), t("img.lazyLoad_bg_img", this).on("load", function() {
                    t(this).closest("[data-src]").removeClass("lazyLoad_bg"), t(this).closest("[data-src]").css("background-image", "url(" + o + ")"), t(this).closest("[data-src]").removeAttr("data-src"), t(this).remove()
                }))
            })
        })
    })
}
$(window).on("load", function() {
        var t = document.getElementsByTagName("head")[0],
            e = document.createElement("script"),
            a = cm_config_defaults;
        e.type = "text/javascript", e.id = "rCommFeed-script", e.src = a.home_page + "/feeds/comments/default?alt=json-in-script&redirect=false&max-results=" + a.max_result + "&callback=showRecentComments", t.appendChild(e), setInterval(function() {
            var e = document.createElement("script");
            e.type = "text/javascript", e.id = "rCommFeed-script", e.src = a.home_page + "/feeds/comments/default?alt=json-in-script&redirect=false&max-results=" + a.max_result + "&callback=showRecentComments";
            var o = document.getElementById("rCommFeed-script");
            o.parentNode.removeChild(o), t.appendChild(e)
        }, a.interval)
    }),
