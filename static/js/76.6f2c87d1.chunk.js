"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{362:function(e,n,i){i.d(n,{A1:function(){return h},DU:function(){return f},bY:function(){return m},kK:function(){return _},o2:function(){return d},yA:function(){return l}});var t=i(861),r=i(757),a=i.n(r),c="https://api.themoviedb.org/3",s="61d280fbc4e0ab3fee827783c53f7600",l="https://image.tmdb.org/t/p/w500";function u(){return o.apply(this,arguments)}function o(){return o=(0,t.Z)(a().mark((function e(){var n,i,t,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",i=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(n,i);case 4:if(!(t=e.sent).ok){e.next=11;break}return e.next=8,t.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function m(){return u("".concat(c,"/trending/all/day?api_key=").concat(s))}function d(e){return u("".concat(c,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1&include_adult=false"))}function _(e){return u("".concat(c,"/movie/").concat(e,"?api_key=").concat(s))}function h(e){return u("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(s))}function f(e){return u("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(s))}},996:function(e,n,i){i.r(n),i.d(n,{default:function(){return _}});var t=i(885),r=i(791),a=i(504),c=i(871),s=i(362),l={wrapper:"SingleFilmView_wrapper__Exykd",image:"SingleFilmView_image__FQJyk",rating:"SingleFilmView_rating__OG3Se",title:"SingleFilmView_title__36ryd",subtitle:"SingleFilmView_subtitle__JP2uh",descr:"SingleFilmView_descr__TLb9O",genres:"SingleFilmView_genres__b7h7y",release:"SingleFilmView_release__P-KGI",link:"SingleFilmView_link__mY1T-",activeLink:"SingleFilmView_activeLink__TjPLN SingleFilmView_link__mY1T-"},u=i(520),o=i(184),m=(0,r.lazy)((function(){return i.e(145).then(i.bind(i,145))})),d=(0,r.lazy)((function(){return i.e(833).then(i.bind(i,833))}));function _(){var e=(0,c.UO)().moviesId,n=(0,r.useState)(null),i=(0,t.Z)(n,2),_=i[0],h=i[1];return(0,r.useEffect)((function(){(0,s.kK)(e).then(h)}),[e]),(0,o.jsx)(o.Fragment,{children:_&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:l.wrapper,children:[(0,o.jsx)("div",{className:l.image__wrapper,children:(0,o.jsx)("img",{className:l.image,src:"".concat(s.yA).concat(_.poster_path),alt:_.title||_.name})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:l.title,children:_.title||_.name}),(0,o.jsx)("h3",{className:l.subtitle,children:"Rating: "}),(0,o.jsx)("p",{className:l.rating,children:_.vote_average}),(0,o.jsx)("h3",{className:l.subtitle,children:"Overview"}),(0,o.jsx)("p",{className:l.descr,children:_.overview}),(0,o.jsx)("h3",{className:l.subtitle,children:"Release date : "}),(0,o.jsx)("p",{className:l.release,children:_.release_date}),_.genres&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{className:l.subtitle,children:"Genres"}),(0,o.jsx)("ul",{className:l.genres,children:_.genres.map((function(e,n){return(0,o.jsx)("li",{className:l.item,children:e.name},n)}))})]})]})]}),(0,o.jsxs)("nav",{children:[(0,o.jsx)(a.OL,{to:"cast",className:function(e){return e.isActive?l.activeLink:l.link},children:"Cast"}),(0,o.jsx)(a.OL,{to:"review",className:function(e){return e.isActive?l.activeLink:l.link},children:"Review"})]}),(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(u.Z,{}),children:(0,o.jsxs)(c.Z5,{children:[(0,o.jsx)(c.AW,{path:"cast",element:(0,o.jsx)(m,{moviesId:e})}),(0,o.jsx)(c.AW,{path:"review",element:(0,o.jsx)(d,{movieId:e})})]})})]})})})}}}]);
//# sourceMappingURL=76.6f2c87d1.chunk.js.map