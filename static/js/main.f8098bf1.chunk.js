(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(26),a=n(5),s="SEND-MESSAGE",i={messages:[{id:1,text:"Hey"},{id:2,text:"Hello"},{id:3,text:"Yo yo"}],dialogs:[{id:1,name:"Vano"},{id:2,name:"Maksim"},{id:3,name:"Olga"},{id:4,name:"Andry"},{id:5,name:"Dane"},{id:6,name:"Kate"}]},c=function(e){return{type:s,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,text:n}])});default:return e}}},135:function(e,t,n){e.exports={content:"Login_content__3MrhL"}},136:function(e,t,n){e.exports={music:"Music_music__QthHL"}},137:function(e,t,n){e.exports={news:"News_news__2_DPd"}},138:function(e,t,n){e.exports={settings:"Settings_settings__3XJ6_"}},139:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__5rgby"}},140:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__1VkAm"}},142:function(e,t,n){e.exports={imageContainer:"Preloader_imageContainer__2U-zh"}},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(90),a=n.n(r),s=a.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d208ae23-b630-4cf0-abb9-16089b6de9c2"}}),i=a.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getProfile:function(e){return i.get("profile/".concat(e))},getStatus:function(e){return i.get("profile/status/".concat(e))},updateStatus:function(e){return s.put("profile/status",{status:e})}},o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return s.delete("follow/".concat(e))},follow:function(e){return s.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),c.getProfile(e)}},u={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return s.delete("auth/login")}}},17:function(e,t,n){e.exports={nav:"Navbar_nav__3ZjBc",item:"Navbar_item__GPnLw",activeLink:"Navbar_activeLink__3X0G5"}},173:function(e,t,n){},253:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(64),i=n.n(s),c=(n(173),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,312)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))}),o=n(97),u=n(106),l={friends:[{id:1,name:"Vano"},{id:2,name:"Maksim"},{id:3,name:"Olga"},{id:4,name:"Andry"},{id:5,name:"Dane"},{id:6,name:"Kate"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return e},b=n(9),j=n(10),f=n.n(j),p=n(19),h=n(26),O=n(5),m=n(16),g=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(O.a)(Object(O.a)({},e),r):e}))},v="FOLLOW",x="UNFOLLOW",_="SET-USERS",w="SET-CURRENT-PAGE",N="SET-TOTAL-USERS-COUNT",C="TOGGLE-IS-FETCHING",P="FOLLOWING-IN-PROGRESS",S={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},y=function(e){return{type:v,userId:e}},k=function(e){return{type:x,userId:e}},I=function(e){return{type:C,isFetching:e}},L=function(e,t){return{type:P,isFetching:e,userId:t}},E=function(){var e=Object(p.a)(f.a.mark((function e(t,n,r,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(O.a)(Object(O.a)({},e),{},{users:g(e.users,t.userId,"id",{followed:!0})});case x:return Object(O.a)(Object(O.a)({},e),{},{users:g(e.users,t.userId,"id",{followed:!1})});case _:return Object(O.a)(Object(O.a)({},e),{},{users:Object(h.a)(t.users)});case w:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.pageNumber});case N:return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.totalUsersCount});case C:return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case P:return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},F=n(45),T="auth/SET-USER-DATA",A={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},z=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{type:T,payload:{userId:e,email:t,login:n,isAuth:r}}},M=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,a,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:if(0===(n=e.sent).data.resultCode){e.next=5;break}return e.abrupt("return");case 5:r=n.data.data,a=r.id,s=r.login,i=r.email,t(z(a,i,s,!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},B=n(131),R=n(130),G="INITIALIZATION-SUCCESSFUL",q={initialized:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},J=Object(b.c)({profilePage:o.b,dialogsPage:u.a,usersPage:U,sidebar:d,auth:D,form:R.a,app:H}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,X=Object(b.e)(J,V(Object(b.a)(B.a)));window.__store__=X;var K=X,W=n(38),Y=n(39),Z=n(41),Q=n(40),$=n(11),ee=n(14),te=(n(253),n(12)),ne=n(128),re=n(86),ae=n(35),se=n(135),ie=n.n(se),ce=n(36),oe=n.n(ce),ue=n(1),le=Object(ne.a)({form:"user-login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(ue.jsxs)("form",{onSubmit:t,children:[Object(ue.jsx)("div",{className:"",children:Object(ae.c)("Email","email",[re.b],ae.a)}),Object(ue.jsx)("div",{className:"",children:Object(ae.c)("Password","password",[re.b],ae.a,{type:"password"})}),Object(ue.jsxs)("div",{className:"",children:[Object(ae.c)(null,"rememberMe",null,ae.a,{type:"checkbox"}),Object(ue.jsx)("span",{children:"Remember me"})]}),n&&Object(ue.jsx)("div",{className:oe.a.formSummaryError,children:n}),Object(ue.jsx)("div",{children:Object(ue.jsx)("button",{children:"Login"})})]})})),de=Object(te.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(p.a)(f.a.mark((function r(a){var s,i;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.login(e,t,n);case 2:if(0===(s=r.sent).data.resultCode){r.next=7;break}return i=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(F.a)("user-login",{_error:i})),r.abrupt("return");case 7:a(M());case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ue.jsx)($.a,{to:"/profile"}):Object(ue.jsxs)("div",{className:ie.a.content,children:[Object(ue.jsx)("h1",{children:"Login"}),Object(ue.jsx)(le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),be=n(136),je=n.n(be),fe=function(e){return Object(ue.jsx)("div",{className:je.a.music,children:"Music"})},pe=n(17),he=n.n(pe),Oe=function(){return Object(ue.jsxs)("nav",{className:he.a.nav,children:[Object(ue.jsx)("div",{className:he.a.item,children:Object(ue.jsx)(ee.b,{to:"/profile",activeClassName:he.a.activeLink,children:"Profile"})}),Object(ue.jsx)("div",{className:he.a.item,children:Object(ue.jsx)(ee.b,{to:"/dialogs",activeClassName:he.a.activeLink,children:"Messages"})}),Object(ue.jsx)("div",{className:he.a.item,children:Object(ue.jsx)(ee.b,{to:"/news",activeClassName:he.a.activeLink,children:"News"})}),Object(ue.jsx)("div",{className:he.a.item,children:Object(ue.jsx)(ee.b,{to:"/music",activeClassName:he.a.activeLink,children:"Music"})}),Object(ue.jsx)("div",{className:he.a.item,children:Object(ue.jsx)(ee.b,{to:"/users",activeClassName:he.a.activeLink,children:"Users"})}),Object(ue.jsx)("div",{className:he.a.item,children:Object(ue.jsx)(ee.b,{to:"/settings",activeClassName:he.a.activeLink,children:"Settings"})})]})},me=n(137),ge=n.n(me),ve=function(e){return Object(ue.jsx)("div",{className:ge.a.news,children:"News"})},xe=n(138),_e=n.n(xe),we=function(e){return Object(ue.jsx)("div",{className:_e.a.settings,children:"Settings"})},Ne=n(139),Ce=n.n(Ne),Pe=n(95),Se=n.n(Pe),ye=function(e){var t=e.name;return Object(ue.jsxs)("div",{className:Se.a.sidebarItem,children:[Object(ue.jsx)("div",{className:Se.a.avatar,children:Object(ue.jsx)("img",{src:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg",alt:"user avatar"})}),Object(ue.jsx)("div",{children:t})]})},ke=function(e){var t=e.friends.map((function(e){return Object(ue.jsx)(ye,{id:e.id,name:e.name},e.id)}));return Object(ue.jsx)("div",{className:Ce.a.sidebar,children:t})},Ie=Object(te.b)((function(e){return{friends:e.sidebar.friends}}))(ke),Le=n(140),Ee=n.n(Le),Ue=n.p+"static/media/user-no-photo.5960cf65.png",Fe=n(68),Te=n(129),Ae=n(71),ze=n.n(Ae),Me=n(141),De=n.n(Me),Be=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageNumberChanged,i=e.portionSize,c=void 0===i?10:i,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u=[].concat(Object(h.a)(u),[l]);var d=Math.ceil(o/c),b=Object(r.useState)(1),j=Object(Te.a)(b,2),f=j[0],p=j[1],O=(f-1)*c+1,m=f*c;return Object(ue.jsxs)("div",{className:ze.a.paginationButtonsContainer,children:[f>1&&Object(ue.jsx)("button",{onClick:function(){p(f-1)},children:"prev"}),u.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(ue.jsx)("span",{className:De()(Object(Fe.a)({},ze.a.selectedPageNumberBtn,a===e),ze.a.pageNumberBtn),onClick:function(t){return s(e)},children:e},e)})),d>f&&Object(ue.jsx)("button",{onClick:function(){return p(f+1)},children:"next"})]})},Re=a.a.memo(Be),Ge=n(31),qe=n.n(Ge),He=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow,s=e.userPhoto;return Object(ue.jsxs)("div",{className:qe.a.item,children:[Object(ue.jsx)(ee.b,{to:"/profile/"+t.id,children:Object(ue.jsx)("div",{className:qe.a.userPhoto,children:Object(ue.jsx)("img",{src:null!=t.photos.small?t.photos.small:s,alt:"user avatar"})})}),Object(ue.jsxs)("div",{className:qe.a.userDescription,children:[Object(ue.jsx)("div",{children:t.name}),Object(ue.jsx)("div",{children:t.status})]}),Object(ue.jsxs)("div",{className:qe.a.userLocation,children:[Object(ue.jsx)("div",{children:"u.location.country"}),Object(ue.jsx)("div",{children:"u.location.city"})]}),Object(ue.jsx)("div",{className:qe.a.buttonContainer,children:t.followed?Object(ue.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:qe.a.button,onClick:function(){a(t.id)},children:"Unfollow"}):Object(ue.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:qe.a.button,onClick:function(){r(t.id)},children:"Follow"})})]},t.id)},Je=function(e){return Object(ue.jsxs)("div",{className:Ee.a.usersContainer,children:[Object(ue.jsx)(Re,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageNumberChanged:e.onPageNumberChanged}),Object(ue.jsx)("div",{children:e.users.map((function(t){return Object(ue.jsx)(He,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow,userPhoto:Ue},t.id)}))})]})},Ve=n(66),Xe=n(143),Ke=Object(Xe.a)([function(e){return e.usersPage.users}],(function(e){return e.filter((function(e){return!0}))})),We=function(e){return e.usersPage.pageSize},Ye=function(e){return e.usersPage.totalUsersCount},Ze=function(e){return e.usersPage.currentPage},Qe=function(e){return e.usersPage.isFetching},$e=function(e){return e.usersPage.followingInProgress},et=function(e){Object(Z.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(W.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageNumberChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n),e.props.setCurrentPage(t)},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(ue.jsxs)(ue.Fragment,{children:[this.props.isFetching?Object(ue.jsx)(Ve.a,{}):null,Object(ue.jsx)(Je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageNumberChanged:this.onPageNumberChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),tt=Object(b.d)(Object(te.b)((function(e){return{users:Ke(e),pageSize:We(e),totalUsersCount:Ye(e),currentPage:Ze(e),isFetching:Qe(e),followingInProgress:$e(e)}}),{follow:function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,m.c.follow.bind(m.c),y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,m.c.unfollow.bind(m.c),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:w,pageNumber:e}},toggleFollowingProgress:L,requestUsers:function(e,t){return function(){var n=Object(p.a)(f.a.mark((function n(r){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),n.next=3,m.c.getUsers(e,t);case 3:a=n.sent,r((i=a.items,{type:_,users:i})),r((s=a.totalCount,{type:N,totalUsersCount:s})),r(I(!1));case 7:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(et),nt=n(55),rt=n.n(nt),at=n.p+"static/media/tLogo512.bbabf306.png",st=function(e){return Object(ue.jsx)("div",{className:rt.a.headerContainer,children:Object(ue.jsxs)("header",{className:rt.a.header,children:[Object(ue.jsx)("div",{className:rt.a.logo,children:Object(ue.jsx)("img",{src:at,alt:"logo of company"})}),Object(ue.jsx)("div",{className:rt.a.loginBlock,children:e.isAuth?Object(ue.jsxs)("div",{children:[e.login," ",Object(ue.jsx)("button",{onClick:e.logout,children:"Log Out"})]}):Object(ue.jsx)(ee.b,{to:"/login",children:"Login"})})]})})},it=function(e){Object(Z.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"render",value:function(){return Object(ue.jsx)(st,Object(O.a)({},this.props))}}]),n}(a.a.Component),ct=Object(te.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:if(0===e.sent.data.resultCode){e.next=5;break}return e.abrupt("return");case 5:t(z(null,null,null,!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(it),ot=a.a.lazy((function(){return n.e(3).then(n.bind(null,314))})),ut=a.a.lazy((function(){return n.e(4).then(n.bind(null,313))})),lt=function(e){Object(Z.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ue.jsxs)("div",{className:"app-wrapper",children:[Object(ue.jsx)("div",{className:"header",children:Object(ue.jsx)(ct,{})}),Object(ue.jsxs)("div",{className:"app-wrapper-content",children:[Object(ue.jsx)(Oe,{}),Object(ue.jsx)(Ie,{store:this.props.store}),Object(ue.jsx)($.b,{path:"/profile/:userId?",render:function(){return e=ut,function(t){return Object(ue.jsx)(a.a.Suspense,{fallback:Object(ue.jsx)("div",{className:"content-area",children:"Loading..."}),children:Object(ue.jsx)(e,Object(O.a)({},t))})};var e}}),Object(ue.jsx)($.b,{path:"/dialogs",render:function(){return Object(ue.jsx)(a.a.Suspense,{fallback:Object(ue.jsx)("div",{className:"content-area",children:"Loading..."}),children:Object(ue.jsx)(ot,{})})}}),Object(ue.jsx)($.b,{path:"/news",render:function(){return Object(ue.jsx)(ve,{})}}),Object(ue.jsx)($.b,{path:"/music",render:function(){return Object(ue.jsx)(fe,{})}}),Object(ue.jsx)($.b,{path:"/users",render:function(){return Object(ue.jsx)(tt,{})}}),Object(ue.jsx)($.b,{path:"/settings",render:function(){return Object(ue.jsx)(we,{})}}),Object(ue.jsx)($.b,{path:"/login",render:function(){return Object(ue.jsx)(de,{})}})]})]}):Object(ue.jsx)(Ve.a,{})}}]),n}(a.a.Component),dt=Object(b.d)($.f,Object(te.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){Promise.all([e(M())]).then((function(){e({type:G})}))}}}))(lt),bt=function(e){return Object(ue.jsx)(ee.a,{children:Object(ue.jsx)(te.a,{store:K,children:Object(ue.jsx)(dt,{})})})};i.a.render(Object(ue.jsx)(bt,{}),document.getElementById("root")),c()},31:function(e,t,n){e.exports={item:"User_item__3v9E9",userPhoto:"User_userPhoto__1apLD",userLocation:"User_userLocation__1wbXN",userDescription:"User_userDescription__ZSxs1",buttonContainer:"User_buttonContainer__1n2Eu",button:"User_button__SxdE2"}},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j}));var r=n(5),a=n(96),s=(n(0),n(89)),i=n(36),c=n.n(i),o=n(1),u=["input","meta"],l=["input","meta"],d=function(e){var t=e.input,n=e.meta,s=n.touched,i=n.error,l=Object(a.a)(e,u),d=s&&i;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(d&&c.a.error),children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),l))}),d&&Object(o.jsx)("span",{children:i})]})},b=function(e){var t=e.input,n=e.meta,s=n.touched,i=n.error,u=Object(a.a)(e,l),d=s&&i;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(d&&c.a.error),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),u))}),d&&Object(o.jsx)("span",{children:i})]})},j=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},i))}},36:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2YNns",error:"FormsControls_error__2GLji",formSummaryError:"FormsControls_formSummaryError__2OvSW"}},55:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__7JGlq",header:"Header_header__2jgrK",logo:"Header_logo__29bzA",loginBlock:"Header_loginBlock__3ZJVx"}},66:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.fc0a675f.svg",a=n(142),s=n.n(a),i=n(1);t.a=function(e){return Object(i.jsx)("div",{className:s.a.imageContainer,children:Object(i.jsx)("img",{src:r,alt:"loader icon"})})}},71:function(e,t,n){e.exports={paginationButtonsContainer:"Paginator_paginationButtonsContainer__3tJq7",pageNumberBtn:"Paginator_pageNumberBtn__1lFL6",selectedPageNumberBtn:"Paginator_selectedPageNumberBtn__16Q8F"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(!(t.length<e))return"Max length is ".concat(e," symbols  ")}}},95:function(e,t,n){e.exports={sidebarItem:"SidebarItem_sidebarItem__3z7Mp",avatar:"SidebarItem_avatar__2_kQY"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return m}));var r=n(10),a=n.n(r),s=n(19),i=n(26),c=n(5),o=n(16),u="ADD-POST",l="SET-USER-PROFILE",d="SET-USER-STATUS",b="DELETE-POST",j={posts:[{id:1,message:"My first post",likesCount:0},{id:2,message:"Second post",likesCount:2},{id:3,message:"My third post",likesCount:5}],profile:null,status:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:5,message:t.newPostText,likesCount:0}])});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case b:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}};var f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:(r=t.sent).data&&n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[303,1,2]]]);
//# sourceMappingURL=main.f8098bf1.chunk.js.map