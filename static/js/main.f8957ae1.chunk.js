(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),r=n.n(i),o=(n(28),n(29),n(4)),s=n.n(o),l=n(6),u=n(5),d=(n(31),"6dd64b93873219770904835b696ec2ec"),h={fetchTreding:"/trending/all/week?api_key=".concat(d,"&language=en-US"),fetchNetFlixOriginals:"/discover/tv?api_key=".concat(d,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(d,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(d,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(d,"&with_genres=35"),fetchHorroMovies:"/discover/movie?api_key=".concat(d,"&with_genres=27"),fetchRomanticMovies:"/discover/movie?api_key=".concat(d,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(d,"&with_genres=99")},b=n(19),f=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),v=n(0);var j=function(){var e,t,n=Object(c.useState)([]),a=Object(u.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(h.fetchNetFlixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(v.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(v.jsxs)("div",{className:"banner_contents",children:[Object(v.jsx)("h1",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(v.jsxs)("div",{className:"banner_buttons",children:[Object(v.jsx)("button",{className:"banner_button",children:"Play"}),Object(v.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(v.jsx)("h1",{className:"banner_description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(v.jsx)("div",{className:"banner_fadeBottom"})]})};n(50);var p=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(v.jsxs)("div",{className:"header ".concat(n&&"header_black"),children:[Object(v.jsx)("img",{className:"header_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png",alt:""}),Object(v.jsx)("img",{className:"header_userIcon",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:""})]})},m=(n(51),n(20)),g=n(23),O=n.n(g);var x=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(u.a)(i,2),o=r[0],d=r[1],h=Object(c.useState)(""),b=Object(u.a)(h,2),j=b[0],p=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,d(t.data.results),console.log(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(v.jsxs)("div",{className:"row",children:[t,Object(v.jsx)("div",{className:"row_posters",children:o.map((function(e){return Object(v.jsx)("img",{onClick:function(){return function(e){j?p(""):O()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);p(t.get("v"))})).catch((function(){return console.log("Temporaily Unavailable")}))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),j&&Object(v.jsx)(m.a,{videoId:j,opts:{height:"390",width:"100%",playerVar:{autoplay:1}}})]})};var _=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(p,{}),Object(v.jsx)(j,{}),Object(v.jsx)(x,{isLargeRow:!0,title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetFlixOriginals}),Object(v.jsx)(x,{title:"Trending Now",fetchUrl:h.fetchTreding}),Object(v.jsx)(x,{title:"Top Rated",fetchUrl:h.fetchTopRated}),Object(v.jsx)(x,{title:"Action Movie",fetchUrl:h.fetchActionMovies}),Object(v.jsx)(x,{title:"Horrer Movie",fetchUrl:h.fetchHorroMovies}),Object(v.jsx)(x,{title:"Comedy Movie",fetchUrl:h.fetchComedyMovies}),Object(v.jsx)(x,{title:"Romance Movie",fetchUrl:h.fetchRomanticMovies}),Object(v.jsx)(x,{title:"Documentaries",fetchUrl:h.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.f8957ae1.chunk.js.map