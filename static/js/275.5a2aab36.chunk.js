"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{362:function(e,t,n){n.d(t,{A1:function(){return d},DU:function(){return h},bY:function(){return m},kK:function(){return f},o2:function(){return _},yA:function(){return o}});var r=n(861),c=n(757),a=n.n(c),i="https://api.themoviedb.org/3",s="61d280fbc4e0ab3fee827783c53f7600",o="https://image.tmdb.org/t/p/w500";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function e(){var t,n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function m(){return u("".concat(i,"/trending/all/day?api_key=").concat(s))}function _(e){return u("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1&include_adult=false"))}function f(e){return u("".concat(i,"/movie/").concat(e,"?api_key=").concat(s))}function d(e){return u("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s))}function h(e){return u("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s))}},190:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n.p+"static/media/404.add0532923ae2b429790.jpeg",c="ErrorView_title__ym9Ef",a="ErrorView_subtitle__1+WSk",i="ErrorView_box__Xk5wP",s=n(184);function o(e){var t=e.message;return(0,s.jsxs)("div",{className:i,role:"alert",children:[(0,s.jsx)("p",{className:c,children:"Sorry, something went wrong."}),(0,s.jsxs)("p",{className:a,children:["Error : ",t]}),(0,s.jsx)("img",{src:r,alt:t})]})}},325:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(885),c=n(791),a=n(504),i=n(362),s=n(190),o=n(520),u="HomeView_image__X7QLn",l="HomeView_list__fBQmW",m="HomeView_list__item__uyJAT",_="HomeView_decsr__keAtP",f="HomeView_title__GXw8J",d="HomeView_subtitle__+t3l8",h=n(184),p="pending",v="resolved",w="rejected";function g(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],g=t[1],x=(0,c.useState)({}),j=(0,r.Z)(x,2),k=j[0],b=j[1],y=(0,c.useState)(p),N=(0,r.Z)(y,2),V=N[0],E=N[1];return(0,c.useEffect)((function(){E(p),(0,i.bY)().then((function(e){return g(e.results)})).then(E(v)).catch((function(e){b(e),E(w)}))}),[]),V===p?(0,h.jsx)(o.Z,{}):V===w?(0,h.jsx)(s.Z,{message:k.message}):V===v?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:f,children:"Most Populars films for today"}),(0,h.jsx)("ul",{className:l,children:n.map((function(e){return(0,h.jsx)("li",{className:m,children:(0,h.jsxs)(a.rU,{className:f,to:"movies/".concat(e.id),children:[(0,h.jsx)("img",{className:u,src:"".concat(i.yA).concat(e.poster_path),alt:e.title||e.name}),(0,h.jsx)("div",{className:_,children:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("h3",{className:d,children:e.title||e.name})})})]})},e.id)}))})]}):void 0}}}]);
//# sourceMappingURL=275.5a2aab36.chunk.js.map