(this.webpackJsonpwe_chat_room=this.webpackJsonpwe_chat_room||[]).push([[0],{10:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var r="WeChatRoom",n="http://localhost:4000",s=400},13:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r),s=a(4),c=a(28),o=a(156),u=a.n(o),i=a(10),l={token:Object(c.a)(),userInfo:{userId:"",nickname:"",avatar:""},allUserList:[]};function m(){return{user:l,socket:u()(i.a),logout:function(){Object(c.b)(),this.user.token=""}}}var d=n.a.createContext({}),f=function(e){var t=e.children,a=Object(s.c)(m);return n.a.createElement(d.Provider,{value:a}," ",t)},p=function(){var e=n.a.useContext(d);if(!e)throw new Error("useStore must be used within a StoreProvider");return e}},170:function(e,t,a){e.exports=a(375)},175:function(e,t,a){},176:function(e,t,a){},179:function(e,t,a){},184:function(e,t,a){},215:function(e,t){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return s}));function r(){return localStorage.getItem("authorization")}function n(e){return localStorage.setItem("authorization",e)}function s(){return localStorage.removeItem("authorization")}},297:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(14),c=a.n(s),o=(a(175),a(2)),u=(a(176),a(10)),i=a(3),l=a.n(i),m=a(17),d=a(68),f=(a(177),a(54)),p=(a(179),a(4)),v=a(153),h=a(154),g=a(166),b=a(167),E=a(155),x=a.n(E),I=a(94),O=a.n(I),j=(a(182),function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(v.a)(this,a),r=t.call(this,e),O.a.start(),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){O.a.done()}},{key:"render",value:function(){return n.a.createElement("div",null)}}]),a}(r.Component)),w=[{path:"/",exact:!0,auth:!0,component:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return x()({loader:e,loading:t})}((function(){return a.e(3).then(a.bind(null,382))}))}],k=(a(55),a(24)),N=(a(184),a(13));var M=function(){var e=Object(N.b)(),t=Object(o.g)();return n.a.createElement(p.a,null,(function(){return n.a.createElement("div",{className:"chat-header-wrapper"},n.a.createElement("div",{className:"user-info-show"},n.a.createElement("div",{className:"user-info"},n.a.createElement("img",{className:"user-avatar",src:e.user.userInfo.avatar,alt:""}),n.a.createElement("span",{className:"nickname"},e.user.userInfo.nickname)),n.a.createElement("div",{className:"user-operator"},n.a.createElement("ul",{className:"operator-list"},n.a.createElement("li",{className:"operator-item",onClick:Object(m.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.logout(),t.push("/"),k.a.success("\u9000\u51fa\u6210\u529f");case 3:case"end":return a.stop()}}),a)})))},"\u9000\u51fa\u767b\u5f55")))))}))},y=(a(240),a(241),a(41));a(242);var L=function(e){return n.a.createElement("div",{className:"my-badge"},e.children)},U=a(100),C=a(152),P=a(52),R=a.n(P),S=a(28);R.a.create({timeout:3e3}).defaults.headers.post["Content-Type"]="application/json";var q={400:"\u8bf7\u6c42\u53c2\u6570\u9519\u8bef",401:"\u6743\u9650\u4e0d\u8db3, \u8bf7\u91cd\u65b0\u767b\u5f55",403:"\u670d\u52a1\u5668\u62d2\u7edd\u672c\u6b21\u8bbf\u95ee",404:"\u8bf7\u6c42\u8d44\u6e90\u672a\u627e\u5230",500:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",501:"\u670d\u52a1\u5668\u4e0d\u652f\u6301\u8be5\u8bf7\u6c42\u4e2d\u4f7f\u7528\u7684\u65b9\u6cd5",502:"\u7f51\u5173\u9519\u8bef",504:"\u7f51\u5173\u8d85\u65f6"},A=function(e,t){var a=Object(r.useState)(!1),n=Object(C.a)(a,2),s=n[0],c=n[1],u=Object(N.b)(),i=Object(o.g)();return{request:Object(r.useCallback)(function(){var a=Object(m.a)(l.a.mark((function a(r,n){var s,o,m,d;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=n?"".concat(e,"/").concat(n):e,(o=Object(S.a)())?R.a.defaults.headers.Authorization=o:delete R.a.defaults.headers.Authorization,c(!0),a.prev=4,"get"!==t.method){a.next=11;break}return a.next=8,R()(Object(U.a)({url:s,params:r},t));case 8:m=a.sent,a.next=14;break;case 11:return a.next=13,R()(Object(U.a)({url:s,data:r},t));case 13:m=a.sent;case 14:return a.abrupt("return",m);case 17:if(a.prev=17,a.t0=a.catch(4),!a.t0.response){a.next=26;break}return d=a.t0.response.status in q?q[a.t0.response.status]:a.t0.response.data.message,k.a.error(d),401===a.t0.response.status&&(u.logout(),i.push("/login")),a.abrupt("return",Promise.reject(d));case 26:return k.a.error("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5"),a.abrupt("return",Promise.reject("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5"));case 28:return a.prev=28,c(!1),a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[4,17,28,31]])})));return function(e,t){return a.apply(this,arguments)}}(),[e,t]),loading:s}},z=Object(p.b)((function(e){var t=Object(y.b)(),a=Object(N.b)(),r=A("".concat(u.a,"/api/getRoomRecords"),{method:"get"}).request,s=A("".concat(u.a,"/api/getPrivateRecords"),{method:"get"}).request,c=function(){var n=Object(m.a)(l.a.mark((function n(){var c,o,u,i,m,f;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=e.userId,o=e.nickname,u=e.avatar,t.chat.userId=c,t.chat.nickname=o,t.chat.avatar=u,!c.includes("group")){n.next=12;break}return a.socket.emit("clearGroupUnreadMessage",{userId:a.user.userInfo.userId}),a.user.allUserList[0].unreadMessage=0,n.next=9,r();case 9:t.chat.currentRecords=n.sent.data.data.allRoomRecords,n.next=18;break;case 12:a.socket.emit("clearPrivateUnreadMessage",{userId:a.user.userInfo.userId,fromId:c}),i=Object(d.a)(a.user.allUserList);try{for(i.s();!(m=i.n()).done;)(f=m.value).userId===c&&(f.unreadMessage=0)}catch(l){i.e(l)}finally{i.f()}return n.next=17,s({fromId:c});case 17:t.chat.currentRecords=n.sent.data.data.privateRecords;case 18:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n.a.createElement("li",{className:"user-list-item".concat(e.userId===t.chat.userId?" active":""),onClick:c},n.a.createElement("div",{className:"avatar avatar-".concat(e.isOnline?"online":"offline")},n.a.createElement("img",{src:e.avatar,alt:""})),n.a.createElement("div",{className:"contacts-content"},n.a.createElement("div",{className:"contacts-info"},n.a.createElement("span",{className:"chat-name"},e.nickname),n.a.createElement("div",{className:"chat-time"},e.latestMessage.time)),n.a.createElement("div",{className:"contacts-texts"},n.a.createElement("p",{className:"text-truncate"},e.latestMessage.message),0!==e.unreadMessage?n.a.createElement(L,null,e.unreadMessage):null)))})),T=Object(p.b)((function(e){return Object(r.useEffect)((function(){})),n.a.createElement("ul",{className:"all-user-list hidden-scrollbar"},e.allUserList.map((function(e){return n.a.createElement(z,Object.assign({key:e.userId},e))})))}));function _(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?a:7&a|8).toString(16)}))}var D=f.a.Sider,B=f.a.Content;var F=function(){var e=Object(N.b)(),t=Object(y.b)(),a=A("".concat(u.a,"/api/getUserInfo"),{method:"get"}).request,s=A("".concat(u.a,"/api/getAllUser"),{method:"get"}).request;return Object(r.useEffect)((function(){var r=e.socket;r.on("allMessage",(function(a){var r=e.user.allUserList[0],n=a.userId,s=a.avatar,c=a.nickname,o=a.message,u=a.time;r.latestMessage.time=u,r.latestMessage.message=o,n!==e.user.userInfo.userId&&(r.latestMessage.message="".concat(c,":").concat(o)),t.chat.userId.includes("group")?(e.socket.emit("clearGroupUnreadMessage",e.user.userInfo.userId),t.chat.currentRecords.push({_id:_(),fromId:n,nickname:c,avatar:s,message:o,time:u})):r.unreadMessage++})),r.on("privateMessage",(function(a){var r,n,s=a.userId,c=a.toId,o=a.avatar,u=a.nickname,i=a.message,l=a.time,m=Object(d.a)(e.user.allUserList);try{for(m.s();!(n=m.n()).done;){var f=n.value;f.userId!==s&&f.userId!==c||(r=f)}}catch(p){m.e(p)}finally{m.f()}r.latestMessage.time=l,r.latestMessage.message=i,t.chat.userId!==s&&t.chat.userId!==c?r.unreadMessage++:(e.socket.emit("clearPrivateUnreadMessage",{userId:e.user.userInfo.userId,fromId:t.chat.userId===s?s:c}),t.chat.currentRecords.push({_id:_(),fromId:s,nickname:u,avatar:o,message:i,time:l}))})),r.on("addNewUser",(function(t){e.user.allUserList.push(t)})),r.on("userLogin",(function(t){e.user.allUserList.forEach((function(e){e.userId===t.userId&&(e.isOnline=!0)}))})),r.on("userLogout",(function(t){e.user.allUserList.forEach((function(e){e.userId===t.userId&&(e.isOnline=!1)}))})),Object(m.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:return e.user.userInfo=t.sent.data.data,r.emit("login",{userId:e.user.userInfo.userId}),t.next=6,s();case 6:e.user.allUserList=t.sent.data.data.allUserList,(n=e.user.allUserList[0]).latestMessage.fromId&&n.latestMessage.fromId!==e.user.userInfo.userId&&(c=n.latestMessage.nickname,n.latestMessage.message="".concat(c,":").concat(n.latestMessage.message));case 9:case"end":return t.stop()}}),t)})))();var n=navigator.userAgent,c=n.indexOf("Opera")>-1,o=n.indexOf("compatible")>-1&&n.indexOf("MSIE")>-1&&!c,u=n.indexOf("rv:11.0")>-1,i=n.indexOf("Edge")>-1&&!o;if(!o&&!i&&!u){var f=0;navigator.userAgent.indexOf("Firefox");window.onunload=function(){(new Date).getTime()-f,r.emit("disconnection",{userId:e.user.userInfo.userId})},window.onbeforeunload=function(){f=(new Date).getTime(),r.emit("disconnection",{userId:e.user.userInfo.userId})}}return function(){r.emit("disconnection",{userId:e.user.userInfo.userId})}}),[]),n.a.createElement(f.a,{className:"back-layout-wrapper"},n.a.createElement(D,{className:"chatSider",width:u.b},n.a.createElement(M,null),n.a.createElement(p.a,null,(function(){return n.a.createElement(T,{allUserList:e.user.allUserList})}))),n.a.createElement(f.a,{style:{marginLeft:u.b,backgroundColor:"#fff"}},n.a.createElement(B,{style:{display:"flex",height:"100vh"}},n.a.createElement(p.a,null,(function(){return n.a.createElement(o.d,null,w.map((function(e){return n.a.createElement(o.b,{key:e.path,path:e.path,exact:e.exact,render:function(t){return n.a.createElement(e.component,t)}})})))})))))},W=(a(90),a(39)),$=(a(104),a(25)),G=(a(102),a(38)),J=(a(297),a(72)),Z=a.n(J),H=Object(p.b)((function(e){var t=Object(N.b)(),a=(t.socket,Object(o.g)()),r=A("".concat(u.a,"/api/login"),{method:"post"}),s=r.request,c=r.loading,i=function(){var e=Object(m.a)(l.a.mark((function e(r){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.password=Z()(r.password),e.next=3,s(r);case 3:n=e.sent,"1"!==(c=n.data).code?k.a.error(c.message):(Object(S.c)("Bearer ".concat(c.token)),t.user.token=c.token,a.push("/"),k.a.success("\u767b\u5f55\u6210\u529f"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"login-wrapper"},n.a.createElement("div",{className:"login-box"},n.a.createElement("h1",{className:"welcome"},"\u6b22\u8fce\u767b\u5f55"),n.a.createElement($.a,{onFinish:i},n.a.createElement($.a.Item,{name:"username",rules:[{required:!0,message:"\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01"}]},n.a.createElement(G.a,{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),n.a.createElement($.a.Item,{name:"password",rules:[{validator:function(e,t){return t?/^[a-zA-Z0-9]{6,20}$/.test(t)?Promise.resolve():Promise.reject("\u5bc6\u7801\u4e3a 6-20 \u4f4d\u6570\u5b57\u548c\u5b57\u6bcd\uff01"):Promise.reject("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01")}}]},n.a.createElement(G.a.Password,{placeholder:"\u8bf7\u8f93\u5165 6-20 \u4f4d\u6570\u5b57\u548c\u5b57\u6bcd",autoComplete:"off"})),n.a.createElement($.a.Item,null,n.a.createElement(W.a,{loading:c,className:"login-btn",type:"primary",htmlType:"submit"},"\u767b\u5f55"))),n.a.createElement("div",{className:"to-register"},n.a.createElement("span",{onClick:function(){a.push("/register")}},"\u53bb\u6ce8\u518c"))))})),K=(a(374),Object(p.b)((function(e){var t=Object(N.b)().socket,a=Object(o.g)(),s=A("".concat(u.a,"/api/register"),{method:"post"}),c=s.request,i=s.loading,d=A("".concat(u.a,"/api/getAvatar"),{method:"get"}).request,f=Object(p.c)((function(){return{avatarList:[]}}));Object(r.useEffect)((function(){Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:f.avatarList=e.sent.data.data.avatarList;case 3:case"end":return e.stop()}}),e)})))()}),[]);var v=function(){var e=Object(m.a)(l.a.mark((function e(r){var n,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(Math.random()*f.avatarList.length),r.password=Z()(r.password),r.avatar=f.avatarList[n],e.next=5,c(r);case 5:s=e.sent,"1"!==(o=s.data).code?k.a.error(o.message):(a.push("/login"),k.a.success("\u6ce8\u518c\u6210\u529f"),t.emit("register"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"login-wrapper"},n.a.createElement("div",{className:"login-box"},n.a.createElement("h1",{className:"welcome"},"\u6b22\u8fce\u6ce8\u518c"),n.a.createElement($.a,{onFinish:v},n.a.createElement($.a.Item,{name:"username",rules:[{required:!0,message:"\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01"}]},n.a.createElement(G.a,{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),n.a.createElement($.a.Item,{name:"nickname",rules:[{required:!0,message:"\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01"}]},n.a.createElement(G.a,{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0"})),n.a.createElement($.a.Item,{name:"password",rules:[{validator:function(e,t){return t?/^[a-zA-Z0-9]{6,20}$/.test(t)?Promise.resolve():Promise.reject("\u5bc6\u7801\u4e3a 6-20 \u4f4d\u6570\u5b57\u548c\u5b57\u6bcd\uff01"):Promise.reject("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01")}}]},n.a.createElement(G.a.Password,{placeholder:"\u8bf7\u8f93\u5165 6-20 \u4f4d\u6570\u5b57\u548c\u5b57\u6bcd",autoComplete:"off"})),n.a.createElement($.a.Item,null,n.a.createElement(W.a,{loading:i,className:"login-btn",type:"primary",htmlType:"submit"},"\u6ce8\u518c"))),n.a.createElement("div",{className:"to-register"},n.a.createElement("span",{onClick:function(){a.push("/login")}},"\u53bb\u767b\u9646"))))})));var Q=Object(o.h)((function(e){return Object(r.useEffect)((function(){window.addEventListener("unhandledrejection",(function(e){e.preventDefault()}))}),[]),n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/login",render:function(){return document.title="\u767b\u5f55-".concat(u.c),Object(S.a)()?n.a.createElement(o.a,{to:"/"}):n.a.createElement(H,null)}}),n.a.createElement(o.b,{path:"/register",render:function(){return document.title="\u6ce8\u518c-".concat(u.c),n.a.createElement(K,null)}}),n.a.createElement(o.b,{path:"/",render:function(){return document.title="\u804a\u5929-".concat(u.c),Object(S.a)()?n.a.createElement(y.a,null,n.a.createElement(F,null)):n.a.createElement(o.a,{to:"/login"})}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(37);c.a.render(n.a.createElement(V.a,null,n.a.createElement(N.a,null,n.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var r=a(0),n=a.n(r),s=a(4),c={userId:"",nickname:"",avatar:"",currentRecords:[],recordsListRef:n.a.createRef()};function o(){return{chat:c}}var u=n.a.createContext({}),i=function(e){var t=e.children,a=Object(s.c)(o);return n.a.createElement(u.Provider,{value:a}," ",t)},l=function(){var e=n.a.useContext(u);if(!e)throw new Error("useStore must be used within a StoreProvider");return e}}},[[170,1,2]]]);
//# sourceMappingURL=main.6194e8d7.chunk.js.map