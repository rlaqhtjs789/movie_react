(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(16),s=n.n(r),i=n(10),a=n(2),j=n(8),o=n(11),u=n(1);var b=function(){var e=Object(a.f)().id,t=function(){var t=Object(o.a)(Object(j.a)().mark((function t(){var n;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(u.jsx)("h1",{children:"Detail"})},d=n(15);var h=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.summary,s=e.genres;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:n,alt:c}),Object(u.jsx)("h2",{children:Object(u.jsx)(i.b,{to:"/movie/".concat(t),children:c})}),Object(u.jsx)("p",{children:r}),Object(u.jsx)("ul",{children:s.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]})};var l=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(d.a)(s,2),a=i[0],b=i[1],l=function(){var e=Object(o.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,b(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(u.jsx)("div",{children:n?Object(u.jsx)("h1",{children:"Loading..."}):Object(u.jsx)("div",{children:a.map((function(e){return Object(u.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var O=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/hello",children:Object(u.jsx)("h1",{children:"Hello"})}),Object(u.jsx)(a.a,{path:"/movie/:id",children:Object(u.jsx)(b,{})}),Object(u.jsx)(a.a,{path:"/",children:Object(u.jsx)(l,{})})]})})};s.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(O,{}))}},[[35,1,2]]]);
//# sourceMappingURL=main.ebb8bfdf.chunk.js.map