(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(t,e,n){"use strict";e.a=n.p+"static/media/user.4683af8a.jpg"},129:function(t,e,n){"use strict";n.d(e,"b",(function(){return c}));var s=n(44),r=n(3),a="SEND-NEW-MESSAGE",i={users:[{id:1,username:"Cursed"},{id:2,username:"Akuma"},{id:3,username:"Shadowraze"}],messages:[{id:1,message:"\u041a\u0443\u0440\u0441\u0435\u0434? \u0410 \u044f \u0434\u0443\u043c\u0430\u043b \u0414\u0435\u043d\u0434\u0438"},{id:2,message:"\u0417\u0434\u0430\u0440\u043e\u0432\u0430, \u044d\u0442\u043e \u0442\u044b \u043d\u0430 \u0421\u0424\u0415 0-10?"}]},c=function(t){return{type:a,newMessage:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;return e.type===a?Object(r.a)(Object(r.a)({},t),{},{messages:[].concat(Object(s.a)(t.messages),[{id:t.messages.length+1,message:e.newMessage}])}):t}},130:function(t,e,n){"use strict";n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return w})),n.d(e,"b",(function(){return I})),n.d(e,"e",(function(){return k}));var s=n(11),r=n.n(s),a=n(17),i=n(44),c=n(3),o=n(15),u="usersReducer/FOLLOW-USER",l="usersReducer/UNFOLLOW-USER",j="usersReducer/SET-USERS",f="usersReducer/SET-CURRENT-PAGE",b="usersReducer/SET-TOTAL-USERS-COUNT",d="usersReducer/TOGGLE_IS_FETCHING",p="usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS",A={users:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},O=function(t){return{type:u,id:t}},h=function(t){return{type:l,id:t}},g=function(t){return{type:f,currentPage:t}},m=function(t){return{type:d,isFetching:t}},x=function(t,e){return{type:p,followingInProgress:t,userId:e}},w=function(t,e){return function(){var n=Object(a.a)(r.a.mark((function n(s){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(m(!0)),n.next=3,o.c.getUsers(t,e);case 3:a=n.sent,s((i=a.items,{type:j,users:i})),s((r=a.totalCount,{type:b,totalUsersCount:r})),s(m(!1));case 7:case"end":return n.stop()}var r,i}),n)})));return function(t){return n.apply(this,arguments)}}()},v=function(){var t=Object(a.a)(r.a.mark((function t(e,n,s,a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x(!0,n)),t.next=3,s(n);case 3:0===t.sent.data.resultCode&&e(a(n)),e(x(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,s,r){return t.apply(this,arguments)}}(),I=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(n,t,o.c.followUserReq.bind(o.c),O);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(n,t,o.c.unfollowUserReq.bind(o.c),h);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(c.a)(Object(c.a)({},t),{},{users:t.users.map((function(t){return t.id===e.id?Object(c.a)(Object(c.a)({},t),{},{followed:!0}):t}))});case l:return Object(c.a)(Object(c.a)({},t),{},{users:t.users.map((function(t){return t.id===e.id?Object(c.a)(Object(c.a)({},t),{},{followed:!1}):t}))});case j:return Object(c.a)(Object(c.a)({},t),{},{users:e.users});case f:return Object(c.a)(Object(c.a)({},t),{},{currentPage:e.currentPage});case b:return Object(c.a)(Object(c.a)({},t),{},{totalUsersCount:e.totalUsersCount});case d:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.isFetching});case p:return Object(c.a)(Object(c.a)({},t),{},{followingInProgress:e.followingInProgress?[].concat(Object(i.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}}},134:function(t,e,n){t.exports={content:"Sidebar_content__1l_oC"}},139:function(t,e,n){t.exports={settingsContent:"Settings_settingsContent__2Ed5H"}},15:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c}));var s=n(138),r=s.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"70b66c8a-0e05-4c0b-bbb3-e941cc312d1f","Access-Control-Allow-Origin":"https://https://rutakata.github.io"}}),a={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return r.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},followUserReq:function(t){return r.post("follow/".concat(t))},unfollowUserReq:function(t){return r.delete("follow/".concat(t))}},i={getUserById:function(t){return r.get("profile/".concat(t))},getUserStatus:function(t){return r.get("profile/status/".concat(t))},updateStatus:function(t){return r.put("profile/status",{status:t})}},c={authUser:function(){return r.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},167:function(t,e,n){},171:function(t,e,n){},22:function(t,e,n){t.exports={headerMenu:"Header_headerMenu__11vAO",activeLink:"Header_activeLink__18I_u"}},26:function(t,e,n){t.exports={loginPageBody:"Login_loginPageBody__1a-Pr",field:"Login_field__3Ogt7",fieldContainer:"Login_fieldContainer__3-ZRQ",signIn:"Login_signIn__2BFLp",formError:"Login_formError__3YGuk"}},299:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),a=(n(167),function(t){t&&t instanceof Function&&n.e(5).then(n.bind(null,305)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),s(t),r(t),a(t),i(t)}))}),i=n(69),c=n.n(i),o=n(29),u=n(30),l=n(32),j=n(31),f=(n(171),n(10)),b=n(20),d=n(74),p=n.n(d),A=n(1),O=function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{className:p.a.avatar,src:"data:image/jpeg;base64,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",alt:"avatar"}),Object(A.jsx)("span",{className:p.a.username,children:"Friend name"}),Object(A.jsx)("br",{}),Object(A.jsx)("span",{className:p.a.status,children:"Online/Offline"})]})},h=n(134),g=n.n(h),m=n(12),x=Object(m.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(t){return!0===t.isAuth?Object(A.jsxs)("aside",{className:g.a.content,children:[Object(A.jsx)("h1",{children:"\u041c\u043e\u0457 \u0434\u0440\u0443\u0437\u0456"}),Object(A.jsx)(O,{}),Object(A.jsx)(O,{}),Object(A.jsx)(O,{})]}):null})),w=n(3),v=n(53),I=n.n(v),k=function(t){return Object(A.jsxs)("div",{className:I.a.comment,children:["Me ",Object(A.jsx)("br",{}),t.message]})},P=n(131),S=n(132),y=n(40),C=n(49),F=Object(y.a)(200),M=Object(S.a)({form:"post"})((function(t){return Object(A.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(A.jsx)(P.a,{component:C.b,name:"postText",placeholder:"Your post",className:I.a.enterPost,validate:[y.b,F]}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{className:I.a.sendPost,children:"Send"})})]})})),E=r.a.memo((function(t){var e=t.postMessages.map((function(t){return Object(A.jsx)(k,{message:t.message})}));return Object(A.jsxs)("div",{children:[Object(A.jsx)("p",{children:Object(A.jsx)("b",{children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456"})}),t.showPostForm?Object(A.jsx)(M,{onSubmit:function(e){t.addNewPost(e.postText)}}):null,e]})})),R=n(11),G=n.n(R),K=n(17),L=n(44),N=n(15),U="profileReducer/ADD-NEW-POST",H="profileReducer/SET_USER_PROFILE",Z="profileReducer/SET_STATUS",q="profileReducer/DELETE_POST",W={postMessages:[{id:1,message:"\u041e\u0431\u043e\u0436\u043d\u044e\u044e \u041c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442",likes:0},{id:2,message:"\u041b\u0430\u0431\u0438 \u0428\u043e\u043b\u043e\u0445\u043e\u0432\u0430 - \u043f\u0435\u043a\u043b\u043e",likes:0},{id:3,message:"\u0412\u0438\u0432\u0447\u0430\u044e React",likes:0}],profileInfo:null,status:""},D=function(t){return{type:Z,status:t}},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:var n={id:t.postMessages.length+1,message:e.postText,likes:0};return Object(w.a)(Object(w.a)({},t),{},{newPostMessage:"",postMessages:[].concat(Object(L.a)(t.postMessages),[n])});case q:return Object(w.a)(Object(w.a)({},t),{},{postMessages:t.postMessages.filter((function(t){return t.id!==e.postID}))});case H:return Object(w.a)(Object(w.a)({},t),{},{profileInfo:e.profileInfo});case Z:return Object(w.a)(Object(w.a)({},t),{},{status:e.status});default:return t}},Y=Object(m.b)((function(t){return{postMessages:t.profilePage.postMessages,newPostMessage:t.profilePage.newPostMessage}}),{addNewPost:function(t){return{type:U,postText:t}}})(E),V=n(57),Q=n.n(V),X=n(128),J=n(92),T=n(96),z=n.n(T),_=function(t){var e=Object(s.useState)(!1),n=Object(J.a)(e,2),r=n[0],a=n[1],i=Object(s.useState)(t.status),c=Object(J.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(t.status)}),[t.status]);return Object(A.jsxs)("div",{className:z.a.status,children:[!r&&Object(A.jsx)("div",{children:Object(A.jsxs)("span",{onClick:function(){a(!0)},children:[" ",t.status||"No status"," "]})}),r&&Object(A.jsxs)("div",{className:z.a.statusEdit,children:[Object(A.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},value:o}),Object(A.jsx)("br",{}),Object(A.jsx)("button",{onClick:function(){a(!1),t.updateStatus(o)},children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"})]})]})},$=function(t){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:t.profileInfo.fullName}),Object(A.jsx)("img",{src:t.profileInfo.photos.large?t.profileInfo.photos.large:X.a,className:Q.a.avatar,alt:""}),Object(A.jsx)("p",{children:t.profileInfo.aboutMe?t.profileInfo.aboutMe:"i am empty"}),Object(A.jsx)(_,{status:t.status,updateStatus:t.updateStatus})]})},tt=n(39),et=function(t){return t.profileInfo?Object(A.jsxs)("div",{className:Q.a.content,children:[Object(A.jsx)($,{profileInfo:t.profileInfo,status:t.status,updateStatus:t.updateStatus}),Object(A.jsx)("div",{className:Q.a.commentsBlock,children:Object(A.jsx)(Y,{showPostForm:t.showPostForm})})]}):Object(A.jsx)(tt.a,{})},nt=n(71),st=n(9),rt=function(t){return t.profilePage.profileInfo},at=function(t){return t.profilePage.status},it=function(t){return t.auth.userId},ct=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).showPostForm=!1,t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.loggedUserId,this.showPostForm=!0),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(A.jsx)("div",{children:Object(A.jsx)(et,Object(w.a)(Object(w.a)({},this.props),{},{profileInfo:this.props.profileInfo,status:this.props.status,updateStatus:this.props.updateStatus,showPostForm:this.showPostForm}))})}}]),n}(r.a.Component),ot=Object(st.d)(nt.a,f.f,Object(m.b)((function(t){return{profileInfo:rt(t),status:at(t),loggedUserId:it(t)}}),{getUserProfile:function(t){return function(){var e=Object(K.a)(G.a.mark((function e(n){var s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.b.getUserById(t);case 2:s=e.sent,n((r=s.data,{type:H,profileInfo:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},getStatus:function(t){return function(){var e=Object(K.a)(G.a.mark((function e(n){var s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.b.getUserStatus(t);case 2:s=e.sent,n(D(s.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateStatus:function(t){return function(){var e=Object(K.a)(G.a.mark((function e(n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(D(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ct),ut=n(22),lt=n.n(ut),jt=function(t){return Object(A.jsxs)("header",{children:[Object(A.jsx)("img",{src:"https://www.pngkit.com/png/full/634-6347611_image-bleach-logo.png",alt:"logo"}),Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:Object(A.jsx)(b.b,{to:"/profile",className:lt.a.headerMenu,activeClassName:lt.a.activeLink,children:"\u041c\u043e\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"})}),Object(A.jsx)("li",{children:Object(A.jsx)(b.b,{to:"/messages",className:lt.a.headerMenu,activeClassName:lt.a.activeLink,children:"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"})}),Object(A.jsx)("li",{children:Object(A.jsx)(b.b,{to:"/users",className:lt.a.headerMenu,activeClassName:lt.a.activeLink,children:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"})}),Object(A.jsx)("li",{children:Object(A.jsx)(b.b,{to:"/settings",className:lt.a.headerMenu,activeClassName:lt.a.activeLink,children:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f"})}),t.isAuth?Object(A.jsx)("li",{className:lt.a.headerMenu,children:t.login}):Object(A.jsx)("li",{children:Object(A.jsx)(b.b,{to:"/login",className:lt.a.headerMenu,activeClassName:lt.a.activeLink,children:"Login"})})]})]})},ft=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(A.jsx)(jt,Object(w.a)({},this.props))}}]),n}(r.a.Component),bt=Object(m.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth}}))(ft),dt=n(26),pt=n.n(dt),At=Object(S.a)({form:"login"})((function(t){return Object(A.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(A.jsx)("div",{className:pt.a.fieldContainer,children:Object(A.jsx)(P.a,{placeholder:"Login",name:"email",component:C.a,className:pt.a.field,validate:[y.b]})}),Object(A.jsx)("div",{className:pt.a.fieldContainer,children:Object(A.jsx)(P.a,{placeholder:"Password",name:"password",component:C.a,type:"password",className:pt.a.field,validate:[y.b]})}),Object(A.jsxs)("div",{className:pt.a.fieldContainer,children:[Object(A.jsx)(P.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"]}),t.error&&Object(A.jsx)("div",{className:pt.a.formError,children:t.error}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{className:pt.a.signIn,children:"Sign in"})})]})})),Ot=n(47),ht="authReducer/SET_USER_DATA",gt={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},mt=function(t,e,n,s){return{type:ht,payload:{userId:t,email:e,login:n,isAuth:s}}},xt=function(){return function(){var t=Object(K.a)(G.a.mark((function t(e){var n,s,r,a,i;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.authUser();case 2:0===(n=t.sent).data.resultCode&&(s=n.data.data,r=s.id,a=s.email,i=s.login,e(mt(r,a,i,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,e=arguments.length>1?arguments[1]:void 0;return e.type===ht?Object(w.a)(Object(w.a)({},t),e.payload):t},vt=Object(m.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:function(t,e,n){return function(){var s=Object(K.a)(G.a.mark((function s(r){var a,i;return G.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N.a.login(t,e,n);case 2:0===(a=s.sent).data.resultCode?r(xt()):(i=a.data.messages.length>0?a.data.messages[0]:"Error",r(Object(Ot.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}()}})((function(t){return t.isAuth?Object(A.jsx)(f.a,{to:"/profile"}):Object(A.jsxs)("div",{className:pt.a.loginPageBody,children:[Object(A.jsx)("h1",{children:"Login"}),Object(A.jsx)(At,{onSubmit:function(e){t.login(e.email,e.password,e.rememberMe)}})]})})),It=n(139),kt=n.n(It),Pt=Object(st.d)(nt.a,Object(m.b)((function(t){return{isAuth:t.auth.isAuth}}),{logout:function(){return function(){var t=Object(K.a)(G.a.mark((function t(e){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.logout();case 2:0===t.sent.data.resultCode&&e(mt(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(t){return!1===t.isAuth?Object(A.jsx)(f.a,{to:"/login"}):Object(A.jsxs)("div",{className:kt.a.settingsContent,children:[Object(A.jsx)("h1",{children:"Settings"}),Object(A.jsx)("button",{onClick:t.logout,children:"Log out"})]})})),St="appReducer/SET_INITIALIZED",yt={initialized:!1},Ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,e=arguments.length>1?arguments[1]:void 0;return e.type===St?Object(w.a)(Object(w.a)({},t),{},{initialized:!0}):Object(w.a)({},t)},Ft=n(129),Mt={},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt;return t},Rt=n(130),Gt=n(140),Kt=n(133),Lt=Object(st.c)({profilePage:B,chatsPage:Ft.a,sidebar:Et,usersPage:Rt.a,auth:wt,form:Kt.a,app:Ct}),Nt=Object(st.e)(Lt,Object(st.a)(Gt.a));window.store=Nt;var Ut=Nt,Ht=function(t){return Object(A.jsx)(r.a.Suspense,{fallback:Object(A.jsx)(tt.a,{}),children:Object(A.jsx)(t,{})})},Zt=r.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),qt=r.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),Wt=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(A.jsxs)("div",{className:"app",children:[Object(A.jsx)(bt,{}),Object(A.jsx)(x,{}),Object(A.jsxs)("div",{className:"appContent",children:[Object(A.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(A.jsx)(ot,{})}}),Object(A.jsx)(f.b,{path:"/messages",render:function(){return Ht(Zt)}}),Object(A.jsx)(f.b,{path:"/users",render:function(){return Ht(qt)}}),Object(A.jsx)(f.b,{path:"/login",render:function(){return Object(A.jsx)(vt,{})}}),Object(A.jsx)(f.b,{path:"/settings",render:function(){return Object(A.jsx)(Pt,{})}})]})]}):Object(A.jsx)(tt.a,{})}}]),n}(r.a.Component),Dt=Object(st.d)(f.f,Object(m.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(xt());Promise.all([e]).then((function(){t({type:St})}))}}}))(Wt),Bt=function(){return Object(A.jsx)(b.a,{basename:"/social-network",children:Object(A.jsx)(m.a,{store:Ut,children:Object(A.jsx)(Dt,{})})})};c.a.render(Object(A.jsx)(Bt,{}),document.getElementById("root")),a()},39:function(t,e,n){"use strict";var s=n.p+"static/media/loader.e9202c75.gif",r=(n(0),n(1)),a={gridArea:"c",display:"block",margin:"0 auto"};e.a=function(){return Object(r.jsx)("img",{src:s,style:a,alt:""})}},40:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var s=function(t){return t?void 0:"Field is required"},r=function(t){return function(e){return e&&e.length>t?"Must be above ".concat(t," symbols"):void 0}}},49:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return j}));var s=n(3),r=n(93),a=(n(0),n(58)),i=n.n(a),c=n(1),o=["input","meta"],u=["input","meta"],l=function(t){var e=t.input,n=t.meta,a=Object(r.a)(t,o),u=n.touched&&n.error;return Object(c.jsxs)("div",{className:i.a.formControls+" "+(u?i.a.error:""),children:[Object(c.jsx)("div",{children:Object(c.jsx)("textarea",Object(s.a)(Object(s.a)({},e),a))}),u&&Object(c.jsx)("span",{children:n.error})]})},j=function(t){var e=t.input,n=t.meta,a=Object(r.a)(t,u),o=n.touched&&n.error;return Object(c.jsxs)("div",{className:i.a.formControls+" "+(o?i.a.error:""),children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",Object(s.a)(Object(s.a)({},e),a))}),o&&Object(c.jsx)("span",{children:n.error})]})}},53:function(t,e,n){t.exports={comment:"PostsBlock_comment__2ydD_",sendPost:"PostsBlock_sendPost__H9Ua1",enterPost:"PostsBlock_enterPost__1Z-8s"}},57:function(t,e,n){t.exports={content:"Profile_content__2UkKf",avatar:"Profile_avatar__32fCD"}},58:function(t,e,n){t.exports={formControls:"FormControls_formControls__3OMAh",error:"FormControls_error__298Or"}},71:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=n(3),r=n(29),a=n(30),i=n(32),c=n(31),o=n(0),u=n.n(o),l=n(10),j=n(12),f=n(1),b=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){Object(i.a)(o,e);var n=Object(c.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(t,Object(s.a)({},this.props)):Object(f.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(b)(e)}},74:function(t,e,n){t.exports={avatar:"Friend_avatar__E1LaN",username:"Friend_username__2QczE",status:"Friend_status__2zHev"}},96:function(t,e,n){t.exports={status:"ProfileStatus_status__WTH8g",statusEdit:"ProfileStatus_statusEdit__1einx"}}},[[299,1,2]]]);
//# sourceMappingURL=main.03f5c95b.chunk.js.map