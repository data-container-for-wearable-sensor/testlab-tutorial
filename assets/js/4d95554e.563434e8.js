"use strict";(self.webpackChunktestlab_tutoriala=self.webpackChunktestlab_tutoriala||[]).push([[725],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=k(a),N=r,g=o["".concat(d,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3641:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=a(7462),r=(a(7294),a(3905));const l={},i="Handling Container",p={unversionedId:"expansion_guide/index",id:"expansion_guide/index",title:"Handling Container",description:"\u76ee\u7684",source:"@site/docs/expansion_guide/index.md",sourceDirName:"expansion_guide",slug:"/expansion_guide/",permalink:"/testlab-tutorial/docs/expansion_guide/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9f\u884c\u624b\u9806",permalink:"/testlab-tutorial/docs/firststep/"},next:{title:"License",permalink:"/testlab-tutorial/docs/etc/license"}},d={},k=[{value:"\u76ee\u7684",id:"\u76ee\u7684",level:2},{value:"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5bfe\u5fdc\u306e\u5b9a\u7fa9",id:"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5bfe\u5fdc\u306e\u5b9a\u7fa9",level:2},{value:"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0",id:"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0",level:3},{value:"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0",id:"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0",level:3},{value:"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3067\u306e\u691c\u8a3c\u30ac\u30a4\u30c9",id:"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3067\u306e\u691c\u8a3c\u30ac\u30a4\u30c9",level:2},{value:"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210",id:"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210",level:3},{value:"\u30b3\u30f3\u30c6\u30ca\u3092\u51fa\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b",id:"\u30b3\u30f3\u30c6\u30ca\u3092\u51fa\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b",level:3},{value:"Container Type",id:"container-type",level:4},{value:"Extended Header",id:"extended-header",level:4},{value:"\u51fa\u529b\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306e\u4e8b\u4f8b",id:"\u51fa\u529b\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306e\u4e8b\u4f8b",level:4},{value:"\u30b3\u30f3\u30c6\u30ca\u3092\u5165\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b",id:"\u30b3\u30f3\u30c6\u30ca\u3092\u5165\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b",level:3},{value:"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306e\u30a8\u30c7\u30a3\u30bf \u517c \u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea",id:"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306e\u30a8\u30c7\u30a3\u30bf-\u517c-\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],m={toc:k},o="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(o,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handling-container"},"Handling Container"),(0,r.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3092\u6d3b\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5bfe\u5fdc\u3092\u884c\u3046\u65b9\u6cd5\u53ca\u3073\u305d\u306e\u691c\u8a3c\u306b\u3064\u3044\u3066\u30ac\u30a4\u30c9\u3092\u793a\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5bfe\u5fdc\u306e\u5b9a\u7fa9"},"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5bfe\u5fdc\u306e\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u51e6\u7406\u3059\u308b\u89b3\u70b9\u306b\u306f\u4ee5\u4e0b\u304c\u8003\u3048\u3089\u308c\u308b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0"),(0,r.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0")),(0,r.kt)("p",null,"\u3042\u308b\u3044\u306f\u3001\u4e0a\u8a18\u306e\u4e21\u65b9\u3092\u884c\u3046\u3002"),(0,r.kt)("p",null,"\u305d\u308c\u305e\u308c\u306b\u3064\u3044\u3066\u306e\u8981\u4ef6\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u3002"),(0,r.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0\u306f\u4ee5\u4e0b\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e8b\u524d\u306b\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306b\u5bfe\u5fdc\u3059\u308b\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u767b\u9332\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5f93\u3063\u3066\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3068\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\uff08\u9001\u4fe1\uff09\u3059\u308b")),(0,r.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30b7\u30b9\u30c6\u30e0\u3068\u306f\u4ee5\u4e0b\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u304b\u3089\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4ed5\u69d8\u306b\u5f93\u3044\u5024\u3092\u53d6\u308a\u51fa\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53d6\u308a\u51fa\u3057\u305f\u5024\u306b\u5f93\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u5229\u7528\u3057\u3066\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u51e6\u7406\u3059\u308b\u3002")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\uff13\u6a5f\u80fd\u3092\u5b9f\u73fe\u3067\u304d\u308c\u3070\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5165\u529b\u5bfe\u5fdc\u3057\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30b7\u30b9\u30c6\u30e0\u3067\u3042\u308b\u3002"),(0,r.kt)("h2",{id:"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3067\u306e\u691c\u8a3c\u30ac\u30a4\u30c9"},"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3067\u306e\u691c\u8a3c\u30ac\u30a4\u30c9"),(0,r.kt)("h3",{id:"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210"},"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u6210"),(0,r.kt)("p",null,"\u74b0\u5883\u69cb\u7bc9\u3067\u793a\u3057\u305f\u3088\u3046\u306b\u3001\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u69cb\u6210\u3068\u306a\u3063\u3066\u3044\u308b\u3002\n",(0,r.kt)("img",{src:a(7435).Z,width:"491",height:"362"})),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306f\u691c\u8a3c\u306e\u76ee\u7684\u306e\u305f\u3081\u4ee5\u4e0b\u306e\u6a5f\u80fd\u3092\u6709\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\u306b\u7528\u3044\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2"),(0,r.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u306b\u7528\u3044\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2"),(0,r.kt)("li",{parentName:"ul"},"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306e\u30a8\u30c7\u30a3\u30bf \u517c \u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,r.kt)("p",null,"\u305d\u308c\u305e\u308c\u306b\u3064\u3044\u3066\u89e3\u8aac\u3092\u884c\u3044\u3001\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5bfe\u5fdc\u3092\u884c\u3046\u305f\u3081\u306e\u30ac\u30a4\u30c9\u3092\u793a\u3059\u3002"),(0,r.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30ca\u3092\u51fa\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b"},"\u30b3\u30f3\u30c6\u30ca\u3092\u51fa\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b"),(0,r.kt)("p",null,"\u3059\u3067\u306b\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001\u30b3\u30f3\u30c6\u30ca\u3092\u51fa\u529b\u306b\u4f7f\u3046\u30b7\u30b9\u30c6\u30e0\u306f\u4ee5\u4e0b\u306e\uff13\u3064\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e8b\u524d\u306b\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306b\u5bfe\u5fdc\u3059\u308b\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u767b\u9332\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5f93\u3063\u3066\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3068\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51fa\u529b\uff08\u9001\u4fe1\uff09\u3059\u308b")),(0,r.kt)("p",null,"\u904b\u3073\u305f\u3044\u30c7\u30fc\u30bf(Payload)\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u4e57\u305b\u308b\u305f\u3081\u306b\u306f\u3001\u30d8\u30c3\u30c0\u3092\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u3067\u3042\u308b\u3002\n\u30d8\u30c3\u30c0\u306f\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5f93\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u308b\u3002\n\u30d8\u30c3\u30c0\u306f\u4ee5\u4e0b\u3067\u3042\u308b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"header field name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"length"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container Type"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"8\u7a2e\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u6301\u3061\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0or\u975e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0/\u62e1\u5f35\u30d8\u30c3\u30c0\u6709\u7121/\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u6709\u7121 \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3044\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container Length"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b3\u30f3\u30c6\u30ca\u306e\u30d8\u30c3\u30c0\u304b\u3089\u30da\u30a4\u30ed\u30fc\u30c9\u3059\u3079\u3066\u3092\u542b\u3081\u305f\u9577\u3055")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Index"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Data ID\u306e\u7a2e\u985e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Id"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Nbyte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u30c7\u30fc\u30bf\u578b\u306b\u5bfe\u5fdc\u3059\u308b\u8b58\u5225\u5b50")))),(0,r.kt)("h4",{id:"container-type"},"Container Type"),(0,r.kt)("p",null,"Container Type\u306f\u4ee5\u4e0b\u306e\uff18\u30d1\u30bf\u30fc\u30f3\u306e\u3044\u305a\u308c\u304b\u3067\u3042\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u308c\u305e\u308c\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u51e6\u7406\u3001\u62e1\u5f35\u30d8\u30c3\u30c0\u306e\u6709\u7121\u3001\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u6709\u7121\u3092\u793a\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"0x0000")," \u3067\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("h4",{id:"extended-header"},"Extended Header"),(0,r.kt)("p",null,"\u30d8\u30c3\u30c0\u306b\u7d99\u7d9a\u3059\u308b\u62e1\u5f35\u30d8\u30c3\u30c0\u304c\u3042\u308b\u5834\u5408\u3082\u3042\u308b\u3002\n\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u3067\u306f\u62e1\u5f35\u30d8\u30c3\u30c0\u90e8\u5206\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u3066\u3044\u306a\u3044\u306e\u3067\u6982\u8981\u3060\u3051\u793a\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"header field name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"length"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extended Header Length"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62e1\u5f35\u30d8\u30c3\u30c0\u5168\u4f53\u306e\u30d0\u30a4\u30c8\u9577")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribute Type"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u306e\u7a2e\u985e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribute Length"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u306e\u9577\u3055")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribute Value"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Nbyte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u30c7\u30fc\u30bf\u3002{Attribute Length}\u306e\u9577\u3055\u3002")))),(0,r.kt)("h4",{id:"\u51fa\u529b\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306e\u4e8b\u4f8b"},"\u51fa\u529b\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306e\u4e8b\u4f8b"),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u306a\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306e\u4f5c\u6210\u4f8b\u306f\u4ee5\u4e0b\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(4839).Z},"Download(ExampleContainer)"),"  "),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"header field name"),(0,r.kt)("th",{parentName:"tr",align:null},"hex value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container Length"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 4D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 11 22 33 44 55 66 77 88 99 AA BB CC DD EE FF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payload"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 00 01 83 AC 9B 68 82 C0 0C FE 19 BE 8D 35 A8 C0 10 8E 4F 9A 4F 34 D6 C0 16 A0 0D 7A E1 47 AE 40 1C C2 A8 77 EC 15 97 40 40 5A 19 88 95 BC 73 C0 3D D8 31 5C FF D6 1B"))))),(0,r.kt)("p",null,"DataIndex\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"00")," \u3068 DataID\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"00 11 22 33 44 55 66 77 88 99 AA BB CC DD EE FF")," \u306f\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u3067\u4e00\u610f\u306b\u306a\u308b\u3088\u3046\u306b\u4efb\u610f\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30ca\u3092\u5165\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b"},"\u30b3\u30f3\u30c6\u30ca\u3092\u5165\u529b\u306b\u4f7f\u3046\u4e8b\u4f8b"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u3092\u5165\u529b\u306b\u4f7f\u3046\u5834\u5408\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4ed5\u69d8\u306b\u5f93\u3044\u5024\u3092\u53d6\u308a\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3068\u3059\u308b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00 00 00 4D 00 00 11 22 33 44 55 66 77 88 99 AA BB CC DD EE FF 00 00 01 83 AC 9B 68 82 C0 0C FE 19 BE 8D 35 A8 C0 10 8E 4F 9A 4F 34 D6 C0 16 A0 0D 7A E1 47 AE 40 1C C2 A8 77 EC 15 97 40 40 5A 19 88 95 BC 73 C0 3D D8 31 5C FF D6 1B")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u304b\u3089\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4ed5\u69d8\u306b\u5f93\u3044\u5024\u3092\u53d6\u308a\u51fa\u3059\u3002")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u5165\u529b\u306b\u5bfe\u3057\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4ed5\u69d8\u306b\u5f93\u3044\u3001\u30d8\u30c3\u30c0\u90e8\u5206\u306e\u5024\u3092\u53d6\u308a\u51fa\u3059\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"header field name"),(0,r.kt)("th",{parentName:"tr",align:null},"hex value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container Length"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 4D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 11 22 33 44 55 66 77 88 99 AA BB CC DD EE FF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payload"),(0,r.kt)("td",{parentName:"tr",align:null},"...(\u7565)")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u53d6\u308a\u51fa\u3057\u305f\u5024\u306b\u5f93\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u3002")),(0,r.kt)("p",null,"Data Index "," \u3068 Data ID \u306b\u3088\u3063\u3066\u3001\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u3002\n\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3064\u3044\u3066\u306f\u5f8c\u8ff0\u3059\u308b\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u5229\u7528\u3057\u3066\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u51e6\u7406\u3059\u308b\u3002")),(0,r.kt)("p",null,"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306b\u5f93\u3044\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u51e6\u7406\u3059\u308b\u3002\n\u672c\u9805\u3067\u306f\u30c6\u30fc\u30d6\u30eb\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"field name"),",",(0,r.kt)("inlineCode",{parentName:"p"},"type"),",",(0,r.kt)("inlineCode",{parentName:"p"},"position"),",",(0,r.kt)("inlineCode",{parentName:"p"},"length"),"\u304c\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u7531\u6765\u306e\u5024\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u306e\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u4ee5\u4e0b\u3067\u3042\u3063\u305f\u5834\u5408\u3001\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306b\u5f93\u3063\u3066\u51e6\u7406\u3092\u3059\u308b\u3068\u306f\u4ee5\u4e0b\u306e\uff13\u5de5\u7a0b\u3067\u3042\u308b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"position"),"\u3068",(0,r.kt)("inlineCode",{parentName:"li"},"length")," \u3067\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u5c0f\u3055\u3044\u30d0\u30a4\u30c8\u5217\u306b\u5206\u5272"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\u306b\u5f93\u3044\u5024\u3092\u89e3\u91c8"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),"\u306b\u5f93\u3063\u3066\u540d\u524d\u3092\u4ed8\u3051\u308b")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u5de5\u7a0b\u3092\u4ee5\u4e0b\u306e\u30da\u30a4\u30ed\u30fc\u30c9\u306b\u9069\u7528\u3057\u305f\u7d50\u679c\u304c\u4ee5\u4e0b\u306e\u30c6\u30fc\u30d6\u30eb\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00 00 01 83 AC 9B 68 82 C0 0C FE 19 BE 8D 35 A8 C0 10 8E 4F 9A 4F 34 D6 C0 16 A0 0D 7A E1 47 AE 40 1C C2 A8 77 EC 15 97 40 40 5A 19 88 95 BC 73 C0 3D D8 31 5C FF D6 1B"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field name"),(0,r.kt)("th",{parentName:"tr",align:null},"hex value(raw)"),(0,r.kt)("th",{parentName:"tr",align:"right"},"type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"postion"),(0,r.kt)("th",{parentName:"tr",align:"right"},"length"),(0,r.kt)("th",{parentName:"tr",align:"right"},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00 00 01 83 ac 9b 68 82")),(0,r.kt)("td",{parentName:"tr",align:"right"},"int"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1665048209538")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c0 0c fe 19 be 8d 35 a8")),(0,r.kt)("td",{parentName:"tr",align:"right"},"float"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-3.624072540935874")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c0 10 8e 4f 9a 4f 34 d6")),(0,r.kt)("td",{parentName:"tr",align:"right"},"float"),(0,r.kt)("td",{parentName:"tr",align:"right"},"16"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-4.138975535473227")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c0 16 a0 0d 7a e1 47 ae")),(0,r.kt)("td",{parentName:"tr",align:"right"},"float"),(0,r.kt)("td",{parentName:"tr",align:"right"},"24"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-5.6563014221191406")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"40 1c c2 a8 77 ec 15 97")),(0,r.kt)("td",{parentName:"tr",align:"right"},"float"),(0,r.kt)("td",{parentName:"tr",align:"right"},"32"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.190095781120724")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"40 40 5a 19 88 95 bc 73")),(0,r.kt)("td",{parentName:"tr",align:"right"},"float"),(0,r.kt)("td",{parentName:"tr",align:"right"},"40"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"32.70390422164282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gamma"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c0 3d d8 31 5c ff d6 1b")),(0,r.kt)("td",{parentName:"tr",align:"right"},"float"),(0,r.kt)("td",{parentName:"tr",align:"right"},"48"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-29.844503223857924")))),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306b\u5f93\u3063\u3066\u51e6\u7406\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5143\u306b\u4f55\u3089\u304b\u306e\u51e6\u7406\u3092\u5b9f\u73fe\u3059\u308b\u3002\n\u30c6\u30b9\u30c8\u30e9\u30dc\u30b7\u30b9\u30c6\u30e0\u306b\u304a\u3044\u3066\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u53ef\u8996\u5316\u3059\u308b\u30b7\u30b9\u30c6\u30e0\u3067\u7528\u3044\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("h3",{id:"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306e\u30a8\u30c7\u30a3\u30bf-\u517c-\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea"},"\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306e\u30a8\u30c7\u30a3\u30bf \u517c \u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea"),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u30e9\u30dc\u306b\u304a\u3044\u3066\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306f\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea\u4e0a\u3067\u7de8\u96c6\u3067\u304d\u308b\u3002"),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u30e9\u30dc\u3067\u306f\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306bJSON\u3067\u8868\u73fe\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "fields": [\n    {\n      "name": "dt",\n      "type": "u64",\n      "pos": 0,\n      "length": 8,\n      "tags": {\n        \n      }\n    },\n    {\n      "name": "x",\n      "type": "f64",\n      "pos": 8,\n      "length": 8,\n      "tags": {\n        \n      }\n    },\n    ...\n  ]\n')),(0,r.kt)("p",null,"\u307e\u305f\u3001\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea\u3054\u3068\u306bDataIndex","\u3068DataId\u306e\u7d44\u306b\u5bfe\u3057\u3066\u4e00\u610f\u306b\u306a\u308b\u3088\u3046\u306b\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u3002"),(0,r.kt)("p",null,"DataIndex\u3068DataId\u306e\u7d44\u3092\u542b\u3080\u8981\u6c42\u306b\u5bfe\u3057\u3066\u3001\u30b9\u30ad\u30fc\u30de\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u5bfe\u5fdc\u3059\u308b\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u5e03\u3057\u30b3\u30f3\u30c6\u30ca\u30c7\u30fc\u30bf\u3092\u51e6\u7406\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,r.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,r.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u3092\u3069\u306e\u3088\u3046\u306b\u89e3\u91c8\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5229\u7528\u3059\u308b\u304b\u3092\u793a\u3057\u305f\u3002\n\u3053\u3053\u3092\u53c2\u8003\u306b\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5165\u51fa\u529b\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u30b3\u30f3\u30c6\u30ca\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3078\u306e\u5bfe\u5fdc\u306e\u7b2c\u4e00\u6b69\u3068\u306a\u308b\u3002"))}u.isMDXComponent=!0},4839:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/mobile_acce-1b79e768f5644e05b070b1189678af65.bin"},7435:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/overview.drawio-18230e79bf9cbccfcf8d38cb7082b524.png"}}]);