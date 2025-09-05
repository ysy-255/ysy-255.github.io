"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  ["3870"],
  {
    161: function (n, e, s) {
      s.r(e), s.d(e, { default: () => b });
      var i = s(3682);
      let l = "svg/1.svg",
        a = "svg/2.svg",
        t = "svg/3.svg",
        r = "svg/4.svg",
        d = "svg/5.svg",
        o = "svg/6.svg";
      var f = s(702),
        c = s(3482),
        v = s(5305);
      s(2356), s(7593);
      var h = s(7776),
        p = s.n(h),
        w = s(8544),
        m = s(4909),
        g = s(1728),
        u = s(9052),
        y = s(7047),
        k = s(5473);
      function x(n) {
        let {
            src: e,
            raw: s,
            picSize: l,
            paddings: a,
            zoomRatio: t,
            onRoomClick: r,
            openId: d,
          } = n,
          o = (0, m.Sx)(),
          c = new w.qN(s).getElementsByTagName("path");
        return (0, i.jsxs)(g.e, {
          children: [
            (0, i.jsx)(u.v, { url: e, bounds: new f.LatLngBounds([0, 0], l) }),
            c.map((n) => {
              let e = n.properties.id.split(","),
                s = (0, w.ST)(n.properties.d, t, a, (n) =>
                  o.layerPointToLatLng(n)
                ),
                l = e.includes(d);
              return (0, i.jsx)(
                g.e,
                {
                  children: (0, i.jsx)(y.m, {
                    eventHandlers: r
                      ? {
                          click: (n) => {
                            r(e, n.target);
                          },
                        }
                      : {},
                    pathOptions: {
                      fillColor: "#ffd080",
                      fillOpacity: +!!l,
                      color: "#1c5cff",
                      stroke: !!l,
                    },
                    positions: s,
                    children:
                      !r &&
                      (0, i.jsx)(k.G, {
                        children: e.map((n) =>
                          (0, i.jsx)("div", { children: n }, n)
                        ),
                      }),
                  }),
                },
                e[0]
              );
            }),
          ],
        });
      }
      let z = [
        {
          floor: "屋上",
          url: o,
          raw: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   width="1750"\n   height="1750"\n   version="1.1"\n   id="YSFmap_svg"\n   viewBox="0 0 1750 1750"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <defs\n     id="_defs" />\n  <style\n     id="_style">\n    .backyard {\n      fill:url(#backyard_pattern);\n    }\n    .adjuster {\n      fill:none;\n    }\n    .main_base {\n      fill:#ffffe0;\n    }\n    .annex_base {\n      fill:#e0ffff;\n    }\n    .normal, .unuse, .veranda, .wc, .ev {\n      fill:#cccccc;\n      stroke:#000000;\n    }\n    .white {\n      fill:#ffffff;\n    }\n    .program {\n      fill:#1c9dff;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .frame {\n      fill:none;\n      stroke:#000000;\n    }\n    .pframe {\n      fill:none;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .preview {\n       fill:none;\n       stroke:#80ff80;\n    }\n  </style>\n  <g\n     id="floor6"\n     style="display:inline">\n    <g\n       id="programs6">\n      <path\n         id="astronomy-club_6"\n         class="preview"\n         d="m 512,872 h -10 l -13,-13 h -27 l -20,20 v 27 l 20,20 h 27 l 12,-12 h 11 z" />\n    </g>\n  </g>\n</svg>\n',
          cssid: "radioRoof",
        },
        {
          floor: "5F",
          url: d,
          raw: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   width="1750"\n   height="1750"\n   version="1.1"\n   id="svg282"\n   viewBox="0 0 1750 1750"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <defs\n     id="_defs" />\n  <style\n     id="_style">\n    .backyard {\n      fill:url(#backyard_pattern);\n    }\n    .adjuster {\n      fill:none;\n    }\n    .main_base {\n      fill:#ffffe0;\n    }\n    .annex_base {\n      fill:#e0ffff;\n    }\n    .normal, .unuse, .veranda, .wc, .ev {\n      fill:#cccccc;\n      stroke:#000000;\n    }\n    .white {\n      fill:#ffffff;\n    }\n    .program {\n      fill:#1c9dff;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .frame {\n      fill:none;\n      stroke:#000000;\n    }\n    .pframe {\n      fill:none;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .preview {\n       fill:none;\n       stroke:#80ff80;\n    }\n  </style>\n  <g\n     id="floor5"\n     style="display:inline">\n    <g\n       id="programs5"\n       style="display:inline">\n      <path\n         id="grade-j-1"\n         class="preview"\n         d="m 993,916 v 74 h 179 v -74 z" />\n      <path\n         id="class-h-11"\n         class="preview"\n         d="m 903,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-12"\n         class="preview"\n         d="m 813,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-13"\n         class="preview"\n         d="m 723,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-14"\n         class="preview"\n         d="m 633,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-15"\n         class="preview"\n         d="m 543,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-16"\n         class="preview"\n         d="m 454,916 v 74 h 89 v -74 z" />\n    </g>\n  </g>\n</svg>\n',
          cssid: "radio5F",
        },
        {
          floor: "4F",
          url: r,
          raw: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   width="1750"\n   height="1750"\n   version="1.1"\n   id="svg282"\n   viewBox="0 0 1750 1750"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <defs\n     id="_defs" />\n  <style\n     id="_style">\n    .backyard {\n      fill:url(#backyard_pattern);\n    }\n    .adjuster {\n      fill:none;\n    }\n    .main_base {\n      fill:#ffffe0;\n    }\n    .annex_base {\n      fill:#e0ffff;\n    }\n    .normal, .unuse, .veranda, .wc, .ev {\n      fill:#cccccc;\n      stroke:#000000;\n    }\n    .white {\n      fill:#ffffff;\n    }\n    .program {\n      fill:#1c9dff;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .frame {\n      fill:none;\n      stroke:#000000;\n    }\n    .pframe {\n      fill:none;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .preview {\n       fill:none;\n       stroke:#80ff80;\n    }\n  </style>\n  <g\n     id="floor4"\n     style="display:inline">\n    <g\n       id="programs4"\n       style="display:inline">\n      <path\n         id="grade-j-2"\n         class="preview"\n         d="m 993,916 v 74 h 179 v -74 z" />\n      <path\n         id="class-h-21"\n         class="preview"\n         d="m 903,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-22"\n         class="preview"\n         d="m 813,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-23"\n         class="preview"\n         d="m 723,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-24"\n         class="preview"\n         d="m 633,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-25"\n         class="preview"\n         d="m 543,916 v 74 h 90 v -74 z" />\n      <path\n         id="class-h-26"\n         class="preview"\n         d="m 454,916 v 74 h 89 v -74 z" />\n    </g>\n  </g>\n</svg>\n',
          cssid: "radio4F",
        },
        {
          floor: "3F",
          url: t,
          raw: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   width="1750"\n   height="1750"\n   version="1.1"\n   id="YSFmap_svg"\n   viewBox="0 0 1750 1750"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <defs\n     id="_defs" />\n  <style\n     id="_style">\n    .backyard {\n      fill:url(#backyard_pattern);\n    }\n    .adjuster {\n      fill:none;\n    }\n    .main_base {\n      fill:#ffffe0;\n    }\n    .annex_base {\n      fill:#e0ffff;\n    }\n    .normal, .unuse, .veranda, .wc, .ev {\n      fill:#cccccc;\n      stroke:#000000;\n    }\n    .white {\n      fill:#ffffff;\n    }\n    .program {\n      fill:#1c9dff;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .frame {\n      fill:none;\n      stroke:#000000;\n    }\n    .pframe {\n      fill:none;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .preview {\n       fill:none;\n       stroke:#80ff80;\n    }\n  </style>\n  <g\n     id="floor3"\n     style="display:inline">\n    <g\n       id="programs3"\n       style="display:inline">\n      <path\n         id="grade-j-3"\n         class="preview"\n         d="m 993,916 v 74 h 179 v -74 z" />\n      <path\n         id="astronomy-club_4"\n         class="preview"\n         d="m 903,916 v 74 h 90 v -74 z" />\n      <path\n         id="international-exchange-com"\n         class="preview"\n         d="m 813,916 v 74 h 90 v -74 z" />\n      <path\n         id="quiz-club"\n         class="preview"\n         d="m 633,916 v 74 h 180 v -74 z" />\n      <path\n         id="sky-flower"\n         class="preview"\n         d="m 726,806 v 74 h 180 v -74 z" />\n      <path\n         id="astronomy-club_3"\n         class="preview"\n         d="m 1126,627 v 74 h 46 v -74 z" />\n      <path\n         id="astronomy-club"\n         class="preview"\n         d="m 945,627 v 74 h 137 v -74 z" />\n      <path\n         id="nature-science-club_2"\n         class="preview"\n         d="m 454,627 v 74 h 89 v -74 z" />\n      <path\n         id="astronomy-club_2"\n         class="preview"\n         d="m 990,517 v 74 h 136 v -74 z" />\n      <path\n         id="nature-science-club"\n         class="preview"\n         d="m 768,517 v 74 h 138 v -74 z" />\n      <path\n         id="math-physics-club"\n         class="preview"\n         d="m 588,517 v 74 h 135 v -74 z" />\n    </g>\n  </g>\n</svg>\n',
          cssid: "radio3F",
        },
        {
          floor: "2F",
          url: a,
          raw: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   width="1750"\n   height="1750"\n   version="1.1"\n   id="YSFmap_svg"\n   viewBox="0 0 1750 1750"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <defs\n     id="_defs" />\n  <style\n     id="_style">\n    .backyard {\n      fill:url(#backyard_pattern);\n    }\n    .adjuster {\n      fill:none;\n    }\n    .main_base {\n      fill:#ffffe0;\n    }\n    .annex_base {\n      fill:#e0ffff;\n    }\n    .normal, .unuse, .veranda, .wc, .ev {\n      fill:#cccccc;\n      stroke:#000000;\n    }\n    .white {\n      fill:#ffffff;\n    }\n    .program {\n      fill:#1c9dff;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .frame {\n      fill:none;\n      stroke:#000000;\n    }\n    .pframe {\n      fill:none;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .preview {\n       fill:none;\n       stroke:#80ff80;\n    }\n  </style>\n  <g\n     id="floor2"\n     style="display:inline">\n    <g\n       id="programs2"\n       style="display:inline">\n      <path\n         id="choral-fest,shogi-club_2,light-music-club"\n         class="preview"\n         d="m 723,1205 v 302 h 357 v -71 h 6 v -231 z" />\n      <path\n         id="picture-club"\n         class="preview"\n         d="m 1223,1205 v 71 h 158 v -71 z" />\n      <path\n         id="tosho-com"\n         class="preview"\n         d="m 454,916 v 92 h 272 v -92 z" />\n      <path\n         id="literary-club"\n         class="preview"\n         d="m 957,817 v 45 h 75 v -45 z" />\n      <path\n         id="tosho-com_2"\n         class="preview"\n         d="m 720,806 v 74 h 93 v -74 z" />\n      <path\n         id="robot-club"\n         class="preview"\n         d="m 723,627 v 74 h 183 v -74 z" />\n      <path\n         id="math-physics-club_2"\n         class="preview"\n         d="m 543,627 v 74 h 180 v -74 z" />\n      <path\n         id="shogi-club"\n         class="preview"\n         d="m 454,627 v 74 h 89 v -74 z" />\n      <path\n         id="astronomy-club_5"\n         class="preview"\n         d="m 723,517 v 74 h 90 v -74 z" />\n      <path\n         id="jk-club"\n         class="preview"\n         d="m 454,517 v 74 h 179 v -74 z" />\n    </g>\n  </g>\n</svg>\n',
          cssid: "radio2F",
        },
        {
          floor: "1F",
          url: l,
          raw: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   width="1750"\n   height="1750"\n   version="1.1"\n   id="YSFmap_svg"\n   viewBox="0 0 1750 1750"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <defs\n     id="_defs" />\n  <style\n     id="_style">\n    .backyard {\n      fill:url(#backyard_pattern);\n    }\n    .adjuster {\n      fill:none;\n    }\n    .main_base {\n      fill:#ffffe0;\n    }\n    .annex_base {\n      fill:#e0ffff;\n    }\n    .normal, .unuse, .veranda, .wc, .ev {\n      fill:#cccccc;\n      stroke:#000000;\n    }\n    .white {\n      fill:#ffffff;\n    }\n    .program {\n      fill:#1c9dff;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .frame {\n      fill:none;\n      stroke:#000000;\n    }\n    .pframe {\n      fill:none;\n      stroke:#1c51ff;\n      stroke-width:3px;\n    }\n    .preview {\n       fill:none;\n       stroke:#80ff80;\n    }\n  </style>\n  <g\n     id="floor1"\n     style="display:inline">\n    <g\n       id="programs1"\n       style="display:inline">\n      <path\n         id="sl2-presentation,dance-club,drama-club,music-club"\n         class="preview"\n         d="m 1295,1271 h -104 v 165 h 104 v 22 h 80 v 49 h 91 v -302 h -91 v 44 h -80 z" />\n      <path\n         id="karuta-club"\n         class="preview"\n         d="m 810,1356 v 151 h 276 v -151 z" />\n      <path\n         id="company-exhibitation"\n         class="preview"\n         d="m 995,1356 h 91 V 1205 H 810 v 151 h 95 v -30 h 90 z" />\n      <path\n         id="cafe"\n         class="preview"\n         d="m 399,1205 16,151 h 311 v -151 z" />\n      <path\n         id="hokan-com"\n         class="preview"\n         d="m 864.5,845 v 39 h 109 v -39 z" />\n      <path\n         id="science-com"\n         class="preview"\n         d="m 588,806 v 74 h 135 v -74 z" />\n      <path\n         id="oshikatsu-shop"\n         class="preview"\n         d="m 404,816 h 28 v 96 h -28 z" />\n      <path\n         id="chado-club"\n         class="preview"\n         d="m 990,517 h 23 v -10 h 50 v 10 h 20 v 65 h 16 v 9 H 990 Z" />\n      <path\n         id="original-goods"\n         class="preview"\n         d="M 432,534 V 668 H 404 V 534 Z" />\n      <path\n         id="art-club"\n         class="preview"\n         d="m 768,228 h 137 v 74 H 799 v -39 h -31 z" />\n      <path\n         id="class-h-31"\n         class="preview"\n         d="m 810,1135 v 60.0001 h 87 v -60 z" />\n      <path\n         id="class-h-33"\n         class="preview"\n         d="m 1089,1000 v 60.0001 h 87 v -60 z" />\n      <path\n         id="class-h-34"\n         class="preview"\n         d="M 990,999.9999 V 1060 h 87 v -60 z" />\n      <path\n         id="class-h-36"\n         class="preview"\n         d="m 729,1000 v 60.0001 h 87 v -60 z" />\n      <path\n         id="class-h-32"\n         class="preview"\n         d="m 632,1000 v 60.0001 h 87 v -60 z" />\n      <path\n         id="class-h-35"\n         class="preview"\n         d="m 458,1000 v 60.0001 h 87 v -60 z" />\n    </g>\n  </g>\n</svg>\n',
          cssid: "radio1F",
        },
      ];
      function b(n) {
        let {
          picHeight: e,
          picWidth: s,
          initialFloor: l = 1,
          id: a,
          onRoomClick: t,
        } = n;
        e || (e = window.innerHeight), s || (s = window.innerWidth);
        let r = new w.qN(z[6 - l].raw),
          d = r.getSVGSize(),
          [o, h] = (0, w.Gk)([e, s], d),
          m = 0.5,
          g = [e / 2, s / 2],
          u = [
            e / 2 - (e / 2 - h[0]) * Math.pow(2, m),
            s / 2 - (s / 2 - h[1]) * Math.pow(2, m),
          ];
        if (a) {
          let n = r.matchedTagAndProperty("path", "id", (n) =>
            n.split(",").includes(a)
          )[0];
          if (n) {
            m = 1.5;
            let [i, l] = (function (n) {
              let e = 0,
                s = 0;
              for (let i of n) (e += i[0]), (s += i[1]);
              let i = n.length;
              return (e /= i), [(s /= i), e];
            })((0, w.an)(n.properties.d));
            (g = [e - (i * o + h[0]), l * o + h[1]]),
              (u[0] = e / 2 - i * o * Math.pow(2, m)),
              (u[1] = s / 2 - l * o * Math.pow(2, m));
          }
        }
        return (0, i.jsx)("div", {
          className: p().leafletMap,
          children: (0, i.jsx)(c.h, {
            crs: f.CRS.Simple,
            center: new f.LatLng(g[0], g[1]),
            zoom: m,
            minZoom: 0,
            maxZoom: 2,
            zoomSnap: 0.5,
            zoomDelta: 0.5,
            style: { height: e, width: s },
            maxBounds: [
              [-(0.5 * e), -(0.5 * s)],
              [1.5 * e, 1.5 * s],
            ],
            children: (0, i.jsx)(v.et, {
              position: "topright",
              collapsed: !1,
              children: z.map((n) =>
                (0, i.jsx)(
                  v.et.BaseLayer,
                  {
                    checked: n.floor === z[6 - l].floor,
                    name: n.floor,
                    children: (0, i.jsx)(x, {
                      src: n.url,
                      raw: n.raw,
                      picSize: [e, s],
                      paddings: u,
                      zoomRatio: o * Math.pow(2, m),
                      onRoomClick: t,
                      openId: a,
                    }),
                  },
                  n.floor
                )
              ),
            }),
          }),
        });
      }
    },
    7593: function () {},
    2356: function () {},
    7776: function (n) {
      n.exports = { leafletMap: "ysfmap_leafletMap__6O0YE" };
    },
  },
]);
