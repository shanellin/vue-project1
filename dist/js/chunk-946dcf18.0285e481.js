(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-946dcf18"],{"014b":function(t,e,n){"use strict";var i=n("e53d"),o=n("07e3"),r=n("8e60"),a=n("63b6"),c=n("9138"),s=n("ebfd").KEY,l=n("294c"),f=n("dbdb"),u=n("45f2"),b=n("62a0"),p=n("5168"),d=n("ccb9"),g=n("6718"),h=n("47ee"),m=n("9003"),v=n("e4ae"),y=n("f772"),G=n("36c3"),A=n("1bc3"),N=n("aebd"),O=n("a159"),w=n("0395"),x=n("bf0b"),j=n("d9f6"),k=n("c3a1"),S=x.f,E=j.f,Y=w.f,C=i.Symbol,R=i.JSON,I=R&&R.stringify,W="prototype",D=p("_hidden"),V=p("toPrimitive"),q={}.propertyIsEnumerable,B=f("symbol-registry"),P=f("symbols"),U=f("op-symbols"),M=Object[W],Z="function"==typeof C,F=i.QObject,K=!F||!F[W]||!F[W].findChild,Q=r&&l(function(){return 7!=O(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=S(M,e);i&&delete M[e],E(t,e,n),i&&t!==M&&E(M,e,i)}:E,H=function(t){var e=P[t]=O(C[W]);return e._k=t,e},J=Z&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},z=function(t,e,n){return t===M&&z(U,e,n),v(t),e=A(e,!0),v(n),o(P,e)?(n.enumerable?(o(t,D)&&t[D][e]&&(t[D][e]=!1),n=O(n,{enumerable:N(0,!1)})):(o(t,D)||E(t,D,N(1,{})),t[D][e]=!0),Q(t,e,n)):E(t,e,n)},L=function(t,e){v(t);var n,i=h(e=G(e)),o=0,r=i.length;while(r>o)z(t,n=i[o++],e[n]);return t},T=function(t,e){return void 0===e?O(t):L(O(t),e)},X=function(t){var e=q.call(this,t=A(t,!0));return!(this===M&&o(P,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(P,t)||o(this,D)&&this[D][t])||e)},_=function(t,e){if(t=G(t),e=A(e,!0),t!==M||!o(P,e)||o(U,e)){var n=S(t,e);return!n||!o(P,e)||o(t,D)&&t[D][e]||(n.enumerable=!0),n}},$=function(t){var e,n=Y(G(t)),i=[],r=0;while(n.length>r)o(P,e=n[r++])||e==D||e==s||i.push(e);return i},tt=function(t){var e,n=t===M,i=Y(n?U:G(t)),r=[],a=0;while(i.length>a)!o(P,e=i[a++])||n&&!o(M,e)||r.push(P[e]);return r};Z||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=b(arguments.length>0?arguments[0]:void 0),e=function(n){this===M&&e.call(U,n),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),Q(this,t,N(1,n))};return r&&K&&Q(M,t,{configurable:!0,set:e}),H(t)},c(C[W],"toString",function(){return this._k}),x.f=_,j.f=z,n("6abf").f=w.f=$,n("355d").f=X,n("9aa9").f=tt,r&&!n("b8e3")&&c(M,"propertyIsEnumerable",X,!0),d.f=function(t){return H(p(t))}),a(a.G+a.W+a.F*!Z,{Symbol:C});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var it=k(p.store),ot=0;it.length>ot;)g(it[ot++]);a(a.S+a.F*!Z,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=C(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!Z,"Object",{create:T,defineProperty:z,defineProperties:L,getOwnPropertyDescriptor:_,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),R&&a(a.S+a.F*(!Z||l(function(){var t=C();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){var e,n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e=i[1],(y(e)||void 0!==t)&&!J(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),i[1]=e,I.apply(R,i)}}),C[W][V]||n("35e8")(C[W],V,C[W].valueOf),u(C,"Symbol"),u(Math,"Math",!0),u(i.JSON,"JSON",!0)},"0395":function(t,e,n){var i=n("36c3"),o=n("6abf").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?c(t):o(i(t))}},1621:function(t,e,n){},"268f":function(t,e,n){t.exports=n("fde4")},"288b":function(t,e,n){t.exports=n.p+"img/mix.47b80ed1.png"},"2d74":function(t,e,n){t.exports=n.p+"img/gmail.1f1b6ef7.jpg"},"32a6":function(t,e,n){var i=n("241e"),o=n("c3a1");n("ce7e")("keys",function(){return function(t){return o(i(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var i=n("c3a1"),o=n("9aa9"),r=n("355d");t.exports=function(t){var e=i(t),n=o.f;if(n){var a,c=n(t),s=r.f,l=0;while(c.length>l)s.call(t,a=c[l++])&&e.push(a)}return e}},"526b":function(t,e,n){"use strict";var i=n("1621"),o=n.n(i);o.a},6718:function(t,e,n){var i=n("e53d"),o=n("584a"),r=n("b8e3"),a=n("ccb9"),c=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=r?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"6abf":function(t,e,n){var i=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},7327:function(t,e,n){"use strict";var i=n("8792"),o=n.n(i);o.a},7623:function(t,e,n){t.exports=n.p+"img/linebtn.b0362529.png"},"7c1a":function(t,e){t.exports="data:image/png;base64,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"},"84ba":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content",attrs:{id:"introduce"}},[t._m(0),t._m(1),t._m(2),n("section",{staticClass:"sec4"},[t._m(3),n("div",{staticClass:"sec4-pic col-12 col-sm-12"},t._l(t.sec4_data,function(e,i){return n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"inner_pic",style:{"background-image":"url("+e.pic+")"}}),n("div",{staticClass:"inner_title m-1"},[t._v(t._s(e.title))]),n("div",{staticClass:"inner_text w-100"},t._l(e.skill,function(e,i){return n("span",{staticClass:"badge badge-primary p-2 px-3 m-1"},[t._v(t._s(e))])}),0)])}),0)]),n("socialLink")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-self w-100"},[n("div",{staticClass:"self-pic"}),n("div",{staticClass:"self-word"},[t._v("If you find that your ability is not enough to handle something,"),n("br"),t._v(" just slow down and learn more.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sec2 px-lg-5"},[i("div",{staticClass:"sec2-pic col-12 col-sm-12 col-lg-4"},[i("div",{})]),i("div",{staticClass:"sec2-describe col-12 col-sm-12 col-lg-8 p-4 py-lg-5 px-lg-3"},[i("div",{staticClass:"describe-box"},[i("div",{staticClass:"describe-head p-2 w-100"},[i("h3",[t._v("熱血的大學時期")])]),i("div",{staticClass:"describe-body p-2 w-100",staticStyle:{color:"rgb(153, 153, 153)"}},[t._v("\n          專題題目是全方位吃藥提醒與紀錄app，當時熱衷於android使持裝置開發，當中的樂趣與成果令我沉迷其中，並於2016年榮獲台大醫院雲林分院app競賽-金獎。\n          "),i("br"),i("br"),i("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.biovlsi.shane.drugs_new"}},[i("img",{attrs:{src:n("7c1a"),alt:""}})])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sec3 px-lg-5"},[i("div",{staticClass:"sec3-describe col-12 col-sm-12 col-lg-8 p-4 py-lg-5 px-lg-4"},[i("div",{staticClass:"describe-box"},[i("div",{staticClass:"describe-head p-2 w-100",staticStyle:{color:"white"}},[i("h3",[t._v("扎實的研究所歷練")])]),i("div",{staticClass:"describe-body p-2 w-100",staticStyle:{color:"white"}},[t._v("\n          目前研究的方向是基於linebot運用，理念為line是目前台灣地區通訊軟體首屈一指的app，若是能在其上打造出智能、多功且跨平台的行動小秘書，必定能造福社會大眾。主要包含功能有  :\n          "),i("br"),i("br"),t._v("\n          1.  交通工具頁面--各大交通運具(計程車、捷運、公車、腳踏車、火車/高鐵、mix運具)。\n          "),i("br"),t._v("\n          2.  安排行程頁面--行事曆(搭配google  calendar、各運具、line提醒訊息)、記事本。\n          "),i("br"),t._v("\n          3.  資訊服務頁面--新聞、美食、景點、住宿、電視台(搭配爬蟲技術、google  api)。\n          "),i("br"),i("br"),i("a",{attrs:{href:"https://line.me/R/ti/p/%40rqz0882f"}},[i("img",{attrs:{src:n("7623"),alt:""}})])])])]),i("div",{staticClass:"sec3-pic col-12 col-sm-12 col-lg-4"},[i("div",{})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sec4-describe col-12 col-sm-12"},[n("div",{staticClass:"describe-title"},[n("h1",[t._v("What skills I have?")])]),n("div",{staticClass:"describe-content"},[t._v("前端之路，我期許自己能保持著學習的熱忱持續邁進。在這時代洪流裡，學如逆水行舟，不進則退。")])])}],r=n("cebc"),a=n("2f62"),c=n("94a3"),s={components:{socialLink:c["a"]},data:function(){return{sec4_data:[{pic:n("c6eb"),skill:["vue.js","vue-cli","vue-router","vuex"],title:"Vue框架"},{pic:n("288b"),skill:["ejs","html5","css3","js-es6","jquery","sass","vue","bootstrap"],title:"前端框架&模板"},{pic:n("a211"),skill:["Restful-API","router","gulp","爬蟲"],title:"Node.js"}]}},created:function(){DocStyle("nav").backgroundColor="rgba(".concat(0,", ",0,", ",0,", ",.82,")")},watch:{},methods:{},computed:Object(r["a"])({},Object(a["b"])(["introduce"])),mounted:function(){}},l=s,f=(n("526b"),n("2877")),u=Object(f["a"])(l,i,o,!1,null,null,null);u.options.__file="About.vue";e["default"]=u.exports},"85f2":function(t,e,n){t.exports=n("454f")},8792:function(t,e,n){},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var i=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"94a3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"social_link_box d-flex"},[n("div",{staticClass:"social_link"},[n("hr"),t._l(t.introduce_link,function(t,e){return n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{staticClass:"single_link pointer mx-3",attrs:{title:t.text,src:t.pic}})])})],2)])},o=[],r={data:function(){return{introduce_link:[{text:"查看BlueNet LineBot",pic:n("aa06"),link:"https://line.me/R/ti/p/%40rqz0882f"},{text:"前往LinkedIn",pic:n("dd32"),link:"https://www.linkedin.com/in/%E8%A3%95%E8%BB%92-%E6%9E%97-a2b32215a/"},{text:"前往github",pic:n("caf4"),link:"https://github.com/shanellin/vue-project1"},{text:"前往gmail",pic:n("2d74"),link:"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shane.sandy123@gmail.com"}]}}},a=r,c=(n("7327"),n("2877")),s=Object(c["a"])(a,i,o,!1,null,null,null);s.options.__file="link.vue";e["a"]=s.exports},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a211:function(t,e,n){t.exports=n.p+"img/node-js-icon.6217b547.png"},a4bb:function(t,e,n){t.exports=n("8aae")},aa06:function(t,e,n){t.exports=n.p+"img/line.2733db06.png"},bf0b:function(t,e,n){var i=n("355d"),o=n("aebd"),r=n("36c3"),a=n("1bc3"),c=n("07e3"),s=n("794b"),l=Object.getOwnPropertyDescriptor;e.f=n("8e60")?l:function(t,e){if(t=r(t),e=a(e,!0),s)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},bf90:function(t,e,n){var i=n("36c3"),o=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(i(t),e)}})},c6eb:function(t,e,n){t.exports=n.p+"img/vue.1edf13fa.png"},caf4:function(t,e,n){t.exports=n.p+"img/git.c9f15372.jpg"},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var i=n("63b6"),o=n("584a"),r=n("294c");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*r(function(){n(1)}),"Object",a)}},cebc:function(t,e,n){"use strict";var i=n("268f"),o=n.n(i),r=n("e265"),a=n.n(r),c=n("a4bb"),s=n.n(c),l=n("85f2"),f=n.n(l);function u(t,e,n){return e in t?f()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=s()(n);"function"===typeof a.a&&(i=i.concat(a()(n).filter(function(t){return o()(n,t).enumerable}))),i.forEach(function(e){u(t,e,n[e])})}return t}n.d(e,"a",function(){return b})},dd32:function(t,e,n){t.exports=n.p+"img/linkedin.16b13606.png"},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var i=n("62a0")("meta"),o=n("f772"),r=n("07e3"),a=n("d9f6").f,c=0,s=Object.isExtensible||function(){return!0},l=!n("294c")(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,i,{value:{i:"O"+ ++c,w:{}}})},u=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,i)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[i].i},b=function(t,e){if(!r(t,i)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[i].w},p=function(t){return l&&d.NEED&&s(t)&&!r(t,i)&&f(t),t},d=t.exports={KEY:i,NEED:!1,fastKey:u,getWeak:b,onFreeze:p}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var i=n("584a").Object;t.exports=function(t,e){return i.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-946dcf18.0285e481.js.map