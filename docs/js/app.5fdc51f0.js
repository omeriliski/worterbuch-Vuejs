(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b3289":"a386b945","chunk-2d0d338e":"fdebeee9","chunk-2d2086b7":"a262abba","chunk-5c4e86dd":"36a856d3","chunk-4322e908":"400294e8","chunk-476b39e5":"9e58fb73","chunk-55d9df16":"abc90f71","chunk-716542de":"acba217c","chunk-82fa0c6a":"ece45fe5"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4322e908":1,"chunk-476b39e5":1,"chunk-55d9df16":1,"chunk-716542de":1,"chunk-82fa0c6a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b3289":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-5c4e86dd":"31d6cfe0","chunk-4322e908":"560ea941","chunk-476b39e5":"15e1db8d","chunk-55d9df16":"93a08fa1","chunk-716542de":"cef23989","chunk-82fa0c6a":"d985fcb4"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],b.parentNode.removeChild(b),n(u)},b.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(b)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["D"])("router-view");return Object(r["y"])(),Object(r["f"])(n)}var c=n("6b0d"),u=n.n(c);const o={},i=u()(o,[["render",a]]);var s=i,d=n("1da1"),f=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=n("dc59"),l=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-5c4e86dd"),n.e("chunk-55d9df16")]).then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/wordList",name:"WordList",component:function(){return Promise.all([n.e("chunk-5c4e86dd"),n.e("chunk-476b39e5")]).then(n.bind(null,"7440"))},meta:{requiresAuth:!0}},{path:"/cards",name:"Cards",component:function(){return Promise.all([n.e("chunk-5c4e86dd"),n.e("chunk-716542de")]).then(n.bind(null,"cdff"))},meta:{requiresAuth:!0}},{path:"/pool",name:"Pool",component:function(){return Promise.all([n.e("chunk-5c4e86dd"),n.e("chunk-82fa0c6a")]).then(n.bind(null,"7eb0"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))},meta:{requiresUnauth:!0}},{path:"/signup",name:"SignUp",component:function(){return n.e("chunk-2d0d338e").then(n.bind(null,"5c9c"))},meta:{requiresUnauth:!0}},{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-5c4e86dd"),n.e("chunk-4322e908")]).then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}}],h=Object(f["a"])({history:Object(f["b"])("/"),routes:l});h.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.matched.some((function(e){return e.meta.requiresAuth})),c=t.matched.some((function(e){return e.meta.requiresUnauth})),e.next=4,Object(b["a"])();case 4:u=e.sent,a&&!u?r("/login"):c&&u?r("/home"):r();case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var m=h,p=(n("f0b7"),n("0ff2")),g=n("2909"),v=(n("159b"),n("4e82"),n("5502")),j=n("e71f"),O=n("ea7b"),w=Object(j["e"])();function k(e){return function(t,n){return t[e]>n[e]?1:t[e]<n[e]?-1:0}}var L=Object(v["a"])({state:{generalWordList:Object(r["B"])([]),organizedWordList:Object(r["B"])([]),wordList:Object(r["B"])([]),tempCardList:Object(r["B"])([]),userSettings:{},user:null,targetLanguage:Object(r["B"])(""),firstLanguage:Object(r["B"])(""),sentence:Object(r["B"])(""),isDisabled:Object(r["B"])(""),isEditEnable:Object(r["B"])(!0),showAnswer:Object(r["B"])(!1),correct:Object(r["B"])(!1),wrong:Object(r["B"])(!1),answer:Object(r["B"])(""),animatedStar:Object(r["B"])(!1),navigation:[{name:"HomePage",href:"/",current:!0},{name:"Word List",href:"/wordList",current:!1},{name:"Cards",href:"/cards",current:!1},{name:"Word Pool",href:"/pool",current:!1}]},getters:{wordList:function(e){return e.wordList},tempCardList:function(e){return e.tempCardList},generalWordList:function(e){return e.generalWordList},navigation:function(e){return e.navigation}},mutations:{getAllData:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.generalWordList=[],e.organizedWordList=[],n=Object(O["b"])(),r=Object(j["b"])(w,"words",n.currentUser.uid),t.next=6,Object(j["c"])(r);case 6:return a=t.sent,a.exists()?e.userSettings=a.data().userSettings:console.log("No such document!"),t.next=10,Object(j["d"])(Object(j["a"])(w,"words"));case 10:c=t.sent,c.forEach((function(t){e.generalWordList.push(t.data())}));case 12:case"end":return t.stop()}}),t)})))()},getData:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(O["b"])(),r=Object(j["b"])(w,"words",n.currentUser.uid),t.next=4,Object(j["c"])(r);case 4:a=t.sent,a.exists()?(e.wordList=a.data().wordList,e.tempCardList=Object(g["a"])(e.wordList),//!!!!added wordlist to tempCardList
e.userSettings=a.data().userSettings):console.log("No such document!"),e.wordList.sort(k("targetLanguage"));case 7:case"end":return t.stop()}}),t)})))()},saveWordData:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(j["a"])(w,"words"),e.isDisabled="",r=Object(O["b"])(),a={userSettings:e.userSettings,wordList:e.wordList},t.next=6,Object(j["f"])(Object(j["b"])(n,"".concat(r.currentUser.uid)),a);case 6:e.isEditEnable=!0;case 7:case"end":return t.stop()}}),t)})))()},addWordFromGeneralWordListToWordList:function(e,t){t.id=Date.now(),e.wordList.push(t),L.commit("saveWordData"),L.commit("getData")},sortWords:function(e,t){e.wordList.sort(k(t))},activateMenu:function(e,t){e.navigation.forEach((function(e){return e.current=!1})),e.navigation[t].current=!0}}}),y=L,S=Object(r["e"])(s);S.use(p["default"]),S.use(y),S.use(m),S.mount("#app")},dc59:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));n("d3b7");var r=n("ea7b"),a=n("7a23"),c=n("260b"),u=(Object(c["a"])({apiKey:"AIzaSyC-hmHvg3ei-nqf2-tUmG9UmbX04Raiwmk",authDomain:"mein-worterbuch-2a463.firebaseapp.com",databaseURL:"https://mein-worterbuch-2a463-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mein-worterbuch-2a463",storageBucket:"mein-worterbuch-2a463.appspot.com",messagingSenderId:"377846506913",appId:"1:377846506913:web:049e48cdc76b69f50757e0"}),function(){return new Promise((function(e,t){return Object(r["c"])(Object(r["b"])(),e,t)}))}),o=function(){var e,t=Object(a["B"])(null),n=Object(a["B"])(null),c=Object(r["b"])();Object(a["v"])((function(){e=Object(r["c"])(c,(function(e){return t.value=e}),(function(e){return n.value=e}))})),Object(a["w"])((function(){return e()}));var u=Object(a["d"])((function(){return null!=t.value}));return{user:t,error:n,isAuthenticated:u}}},f0b7:function(e,t,n){}});
//# sourceMappingURL=app.5fdc51f0.js.map