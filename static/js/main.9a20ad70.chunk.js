(this.webpackJsonpitunes=this.webpackJsonpitunes||[]).push([[0],{53:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(15),c=n.n(r),s=(n(53),n(8)),l=(n.p,n(57),n(7)),o=n(29),d=n.n(o),u=n(30),b=n.n(u),f=n(74),j=Object(f.a)((function(){return{container:{display:"flex",flexDirection:"row"},card:{width:170,height:200,margin:20,padding:10,cursor:"pointer",transition:".5s ease"},cardImage:{boxShadow:"0 4px 14px rgb(0 0 0 / 10%)",borderRadius:5},cardContainer:{display:"flex",flexWrap:"wrap",position:"relative",width:"90%",justifyContent:"center",alignContent:"flex-start"},button:{border:"none",background:"#ffffff",cursor:"pointer"},overlay:{position:"fixed",height:"100vh",left:0,width:"100vw",background:"grey",opacity:.8,zIndex:1,top:0},cardTitle:{fontSize:12,textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap",width:170,overflow:"hidden",color:"#1E1E1E",fontWeight:"bold"},searchBox:{alignSelf:"center"},noResultContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}})),h="FETCH_TOP_ALBUMS",g=n(11),x=n(38),m=n.n(x),p=n(37),O=n.n(p),v=Object(f.a)((function(){return{filterContainer:{width:200,borderRightWidth:1,borderRightColor:"#efefef",borderRightStyle:"solid"},showFilterItem:{display:"flex",justifyContent:"flex-start",padding:10,fontSize:12},hideFilterItem:{display:"none"},input:{marginRight:15},title:{fontWeight:"bold",fontSize:18,textAlign:"left",margin:20},subTitle:{fontWeight:500,fontSize:16,textAlign:"left",margin:20,alignItems:"center",justifyContent:"flex-start",display:"flex",cursor:"pointer"},button:{background:"none",border:"none",cursor:"pointer"}}})),y=n(45),w=n(16),C=n(46),S=n(13),N=n.n(S),F=n(17),D=n(43),k=function(){var e=Object(D.a)(N.a.mark((function e(t){var n,i,a,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,i=t.method,a=t.body,r=t.headers,e.next=3,fetch(n,{method:i,body:a,headers:r});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I="https://itunes.apple.com/us/rss/topalbums/limit=100/json",T=N.a.mark(R);function R(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(F.a)((function(){return k({url:"".concat(I),method:"get",body:null})}));case 3:return e=t.sent,t.next=6,Object(F.b)(z(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(F.b)({type:"FETCH_TOP_ALBUMS_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),T,null,[[0,8]])}var E=N.a.mark(A);function A(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.c)(h,R);case 2:case"end":return e.stop()}}),E)}var B=Object(w.b)({name:"topAlbums",initialState:{albums:[],loading:!1},reducers:{fetchTopAlbums:function(e,t){return Object(g.a)(Object(g.a)({},t.payload),{},{loading:!1})}}}),W=Object(w.b)({name:"Filter",initialState:{categories:[],releaseDate:[]},reducers:{addCategory:function(e,t){return e.categories.push(t.payload),e},removeCategory:function(e,t){return Object(g.a)(Object(g.a)({},e),{},{categories:e.categories.filter((function(e){return e!==t.payload.id}))})},addReleaseDateFilter:function(e,t){return e.releaseDate.push(t.payload),e},removeReleaseDateFilter:function(e,t){return Object(g.a)(Object(g.a)({},e),{},{releaseDate:e.releaseDate.filter((function(e){return e!==t.payload.date}))})}}}),z=B.actions.fetchTopAlbums,L=W.actions,H=L.addCategory,P=L.removeCategory,J=L.addReleaseDateFilter,_=L.removeReleaseDateFilter,M=Object(C.a)(),U=[].concat(Object(y.a)(Object(w.c)({thunk:!1})),[M]),V=Object(w.a)({reducer:{topAlbums:B.reducer,Filter:W.reducer},middleware:U});M.run(A);var q=V,G=n(2),K=function(e){var t=e.onFavFilterBtnPress,n=Object(s.c)((function(e){var t,n;return null===(t=e.topAlbums)||void 0===t||null===(n=t.feed)||void 0===n?void 0:n.entry})),a=Object(s.b)(),r=Object(i.useState)([]),c=Object(l.a)(r,2),o=c[0],u=c[1],f=Object(i.useState)([]),j=Object(l.a)(f,2),h=j[0],x=j[1],p=Object(s.c)((function(e){return e.Filter.categories})),y=Object(s.c)((function(e){return e.Filter.releaseDate})),w=Object(i.useState)(!1),C=Object(l.a)(w,2),S=C[0],N=C[1],F=Object(i.useState)({category:!1,releaseDate:!1,favourite:!1}),D=Object(l.a)(F,2),k=D[0],I=D[1],T=v();return Object(i.useEffect)((function(){if(n&&n.length){var e=[],t=[];n.forEach((function(n){var i=e.length>0&&e.filter((function(e){return e["im:id"]===n.category.attributes["im:id"]})).length>0,a=t.length>0&&t.filter((function(e){return e.attributes.label===n["im:releaseDate"].attributes.label})).length>0;i||e.push(n.category.attributes),a||t.push(n["im:releaseDate"])})),x(t),u(e)}}),[n]),Object(G.jsxs)("div",{className:T.filterContainer,children:[Object(G.jsx)("div",{className:T.title,children:"Filter by"}),Object(G.jsxs)("div",{className:T.subTitle,onClick:function(){return I((function(e){return Object(g.a)(Object(g.a)({},e),{},{category:!e.category})}))},children:[Object(G.jsx)("span",{children:"Categories"}),Object(G.jsx)("span",{children:k.category?Object(G.jsx)(O.a,{}):Object(G.jsx)(m.a,{})})]}),o.length>0?o.map((function(e){return Object(G.jsxs)("div",{className:[k.category?T.showFilterItem:T.hideFilterItem],children:[Object(G.jsx)("input",{onChange:function(t){t.target.checked?a(H(e["im:id"])):a(P({id:e["im:id"]}))},className:T.input,disabled:p.length>0&&!p.includes(e["im:id"]),type:"checkbox",id:"CategoryFilterItem",name:"CategoryFilterItem"}),Object(G.jsx)("label",{for:"CategoryFilterItem",children:e.label})]})})):null,Object(G.jsxs)("div",{className:T.subTitle,onClick:function(){return I((function(e){return Object(g.a)(Object(g.a)({},e),{},{releaseDate:!e.releaseDate})}))},children:[Object(G.jsx)("span",{children:"Release Date"}),Object(G.jsx)("span",{children:k.releaseDate?Object(G.jsx)(O.a,{}):Object(G.jsx)(m.a,{})})]}),h.length>0?h.map((function(e){return Object(G.jsxs)("div",{className:[k.releaseDate?T.showFilterItem:T.hideFilterItem],children:[Object(G.jsx)("input",{onChange:function(t){t.target.checked?a(J(e.attributes.label)):a(_({date:e.attributes.label}))},className:T.input,disabled:y.length>0&&!y.includes(e.attributes.label),type:"checkbox",id:"DateFilterItem",name:"DateFilterItem"}),Object(G.jsx)("label",{for:"DateFilterItem",children:e.attributes.label})]})})):null,Object(G.jsxs)("div",{className:T.subTitle,children:["Favourites",Object(G.jsx)("button",{onClick:function(){N((function(e){return!e})),t(!S)},className:T.button,children:S?Object(G.jsx)(d.a,{style:{color:"red"}}):Object(G.jsx)(b.a,{})})]})]})},Q=n.p+"static/media/noResultFound.64ebb83e.png",X=n(44),Y=n.n(X),Z=Object(f.a)((function(){return{container:{display:"flex",flexDirection:"row"},cardDetails:{position:"fixed",display:"flex",flexDirection:"row",justifyContent:"center",left:"35%",top:"40%",width:500,zIndex:10,background:"#ffffff",borderRadius:10,padding:30},details:{paddingLeft:40,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},subHeading:{fontWeight:"bold",textAlign:"left"},cardContent:{paddingTop:20,fontWeight:"normal",fontSize:12},card:{width:170,height:200,margin:20,padding:10,cursor:"pointer",transition:".5s ease"},cardImage:{boxShadow:"0 4px 14px rgb(0 0 0 / 10%)",borderRadius:5,width:200,height:200},cardContainer:{display:"flex",flexWrap:"wrap",width:"90%",alignContent:"flex-start"},cardTitle:{fontSize:12,textAlign:"left",width:170,overflow:"hidden",color:"#1E1E1E",fontWeight:"bold"},searchBox:{alignSelf:"center"},closeBtn:{position:"absolute",right:5,top:8,border:"none",background:"#fff",cursor:"pointer"},noResultContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},actionButton:{border:"none",background:"#2F888C",padding:10,color:"#ffffff",borderRadius:5,textDecoration:"none",marginTop:12}}})),$=function(e){var t=e.imageSrc,n=e.title,i=e.price,a=e.category,r=e.artist,c=e.releaseDate,s=e.websiteLink,l=e.setShowDetails,o=Z();return Object(G.jsxs)("div",{className:o.cardDetails,children:[Object(G.jsx)("button",{className:o.closeBtn,onClick:function(){return l(!1)},children:Object(G.jsx)(Y.a,{})}),Object(G.jsx)("img",{src:t,className:o.cardImage}),Object(G.jsxs)("div",{className:o.details,children:[Object(G.jsx)("div",{className:o.cardTitle,children:n}),Object(G.jsxs)("div",{className:o.cardContent,children:[Object(G.jsx)("span",{className:o.subHeading,children:"Price: "}),i]}),Object(G.jsxs)("div",{className:o.cardContent,children:[Object(G.jsx)("span",{className:o.subHeading,children:"Categoty: "}),a]}),Object(G.jsxs)("div",{className:o.cardContent,children:[Object(G.jsx)("span",{className:o.subHeading,children:"Artist: "}),r]}),Object(G.jsxs)("div",{className:o.cardContent,children:[Object(G.jsx)("span",{className:o.subHeading,children:"Release Date: "}),c]}),Object(G.jsx)("a",{href:s,className:o.actionButton,children:"Visit Website"})]})]})},ee=function(){var e=j(),t=Object(s.b)(),n=Object(s.c)((function(e){var t,n;return null===(t=e.topAlbums)||void 0===t||null===(n=t.feed)||void 0===n?void 0:n.entry})),a=Object(s.c)((function(e){return e.Filter.categories})),r=Object(s.c)((function(e){return e.Filter.releaseDate})),c=Object(i.useState)([]),o=Object(l.a)(c,2),u=o[0],f=o[1],g=localStorage.getItem("fav")||[],x=Object(i.useState)(!1),m=Object(l.a)(x,2),p=m[0],O=m[1],v=Object(i.useState)(),y=Object(l.a)(v,2),w=y[0],C=y[1],S=Object(i.useState)(null),N=Object(l.a)(S,2),F=N[0],D=N[1],k=Object(i.useState)(),I=Object(l.a)(k,2),T=I[0],R=I[1];Object(i.useEffect)((function(){t({type:h})}),[]),Object(i.useEffect)((function(){f(n)}),[n]),Object(i.useEffect)((function(){var e=[],t=g.length&&JSON.parse(g),i={categoryFilter:a,releaseDateFilter:r,favouriteFilter:p?t:[]};if(a.length||r.length||p){var c=Object.keys(i);e=n.filter((function(e){return c.every((function(t){if(!i[t].length)return!0;var n="";return"categoryFilter"===t?n=e.category.attributes["im:id"]:"releaseDateFilter"===t?n=e["im:releaseDate"].attributes.label:"favouriteFilter"===t&&(n=e.id.attributes["im:id"]),i[t].includes(n)}))})),f(e)}else f(n)}),[a,r,p]),Object(i.useEffect)((function(){g&&g.length&&R(JSON.parse(g))}),[g]);return Object(G.jsxs)("div",{className:e.container,children:[Object(G.jsx)(K,{onFavFilterBtnPress:function(e){O(e)}}),Object(G.jsxs)("div",{className:e.cardContainer,children:[w&&F?Object(G.jsx)($,{imageSrc:F["im:image"][2].label,title:F.title.label,price:F["im:price"].label,category:F.category.attributes.label,artist:F["im:artist"].label,releaseDate:F["im:releaseDate"].attributes.label,websiteLink:F.link.attributes.href,setShowDetails:C}):null,u&&u.length?u.map((function(t){return Object(G.jsxs)("div",{className:e.card,children:[Object(G.jsx)("img",{src:t["im:image"][2].label,className:e.cardImage,onClick:function(){!function(e){C(!0),D(e)}(t)}}),Object(G.jsx)("div",{className:e.cardTitle,children:t.title.label}),Object(G.jsx)("button",{className:e.button,onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("fav"))||[];t&&t.length&&t.includes(e.id.attributes["im:id"])?t=t.filter((function(t){return t!==e.id.attributes["im:id"]})):t.push(e.id.attributes["im:id"]),R(t),localStorage.setItem("fav",JSON.stringify(t))}(t)},children:T&&T.length&&T.includes(t.id.attributes["im:id"])?Object(G.jsx)(d.a,{style:{color:"red"}}):Object(G.jsx)(b.a,{})})]})})):Object(G.jsx)("div",{className:e.noResultContainer,children:Object(G.jsx)("img",{src:Q})})]}),w&&F?Object(G.jsx)("div",{className:e.overlay}):null]})},te=Object(f.a)((function(){return{header:{display:"flex",width:"100%",justifyContent:"center","& .search":{display:"flex",flexDirection:"column",maxWidth:600,width:"90%",position:"absolute",top:"30%"},"& .search.sticky":{position:"fixed",top:0,background:"#333333",width:"100%",padding:12,maxWidth:"100%",alignItems:"center",zIndex:100}},stickyDiv:{position:"absolute",top:"30%"},list:{maxHeight:200,position:"absolute",marginTop:50,background:"#fff",maxWidth:600,overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"flex-start",boxShadow:"2px 0px 20px -2px rgb(0 0 0 / 75%)",padding:10,boxSizing:"border-box",borderRadius:20},searchBox:{height:20,boxShadow:"2px 0px 20px -2px rgb(0 0 0 / 75%)",boxSizing:"border-box",padding:20,borderRadius:20,outline:"none",border:0,width:"100%",maxWidth:600},listItem:{display:"flex",flexDirection:"row",fontSize:10,marginBottom:10,width:"100%",padding:10,"&:hover":{background:"#F3F3F3",cursor:"pointer"}},centerText:{margin:"0 auto"},cardTitle:{alignSelf:"center",textAlign:"left",marginLeft:15,fontWeight:500}}})),ne=n.p+"static/media/background.9cfc0783.jpg",ie=function(){var e=te(),t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)([]),o=Object(l.a)(c,2),d=o[0],u=o[1],b=Object(s.c)((function(e){var t,n;return null===(t=e.topAlbums)||void 0===t||null===(n=t.feed)||void 0===n?void 0:n.entry})),f=Object(i.useState)(!1),j=Object(l.a)(f,2),h=j[0],g=j[1],x=Object(i.useRef)(null),m=function(){x.current&&g(x.current.getBoundingClientRect().top<=0)};Object(i.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",(function(){return m}))}}),[]);return Object(G.jsxs)("div",{className:e.header,children:[Object(G.jsx)("div",{style:{background:"url(".concat(ne,")"),backgroundSize:"cover",width:"100%",height:"100vh",top:0,opacity:.9}}),Object(G.jsx)("div",{className:e.stickyDiv,ref:x}),Object(G.jsxs)("div",{className:"search".concat(h?" sticky":""),children:[Object(G.jsx)("input",{className:e.searchBox,type:"text",placeholder:"Search",onChange:function(e){if(r(e.target.value),e.target.value){var t=b.filter((function(t){return t.title.label.toLowerCase().includes(e.target.value.toLowerCase())}));u(t)}else u([])}}),d.length>0?Object(G.jsx)("div",{className:e.list,children:d.map((function(t){return Object(G.jsxs)("div",{className:e.listItem,children:[Object(G.jsx)("a",{href:t.link.attributes.href,alt:"h",children:Object(G.jsx)("img",{src:t["im:image"][0].label,className:e.cardImage})}),Object(G.jsx)("div",{className:e.cardTitle,children:t.title.label})]})}))}):null,a&&!d.length?Object(G.jsx)("div",{className:e.list,children:Object(G.jsx)("div",{className:e.centerText,children:"No result found"})}):null]})]})};var ae=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(s.a,{store:q,children:[Object(G.jsx)(ie,{}),Object(G.jsx)(ee,{})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(ae,{})}),document.getElementById("root")),re()}},[[62,1,2]]]);
//# sourceMappingURL=main.9a20ad70.chunk.js.map