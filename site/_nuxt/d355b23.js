(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5],{314:function(t,e,r){"use strict";var n=r(1),o=r(317);n({target:"String",proto:!0,forced:r(318)("link")},{link:function(t){return o(this,"a","href",t)}})},315:function(t,e,r){"use strict";r.r(e);r(314);var n={props:["link"]},o=r(30),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"inline-block sm:text-sm border border-gray-300 bg-white px-2 py-1 shadow-sm rounded text-gray-700 text-center hover:bg-gray-50 active:bg-gray-100 min-h-[30px] whitespace-nowrap",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"inline-block bg-white sm:text-sm border border-gray-300 px-2 py-1 shadow-sm rounded text-gray-700 text-center hover:bg-gray-50 active:bg-gray-100 min-h-[30px] whitespace-nowrap"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(315).default})},316:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("3f838bf8",content,!0,{sourceMap:!1})},317:function(t,e,r){var n=r(4),o=r(34),l=r(16),c=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var m=l(o(t)),f="<"+e;return""!==r&&(f+=" "+r+'="'+d(l(n),c,"&quot;")+'"'),f+">"+m+"</"+e+">"}},318:function(t,e,r){var n=r(3);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},320:function(t,e,r){"use strict";r(316)},321:function(t,e,r){var n=r(60)((function(i){return i[1]}));n.push([t.i,".btn-group>:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.btn-group>:nth-child(n+1){border-radius:0;border-right:0}.btn-group>:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;border-right:1px solid #d1d5db}",""]),n.locals={},t.exports=n},322:function(t,e,r){"use strict";r.r(e);var n={},o=(r(320),r(30)),component=Object(o.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"btn-group flex items-center flex-nowrap"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";e.a={methods:{copyDivToClipboard:function(t){if(document.selection)(e=document.body.createTextRange()).moveToElementText(document.getElementById(t)),e.select().createTextRange(),document.execCommand("copy");else if(window.getSelection){var e;(e=document.createRange()).selectNode(document.getElementById(t)),window.getSelection().addRange(e),document.execCommand("copy")}}}}},336:function(t,e,r){"use strict";r.r(e);var n={name:"ReplicateSection",mixins:[r(323).a]},o=r(30),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg bg-red-100 border border-primary grid grid-cols-12 p-8 gap-6"},[e("div",{staticClass:"col-span-12 lg:col-span-4 flex items-start"},[e("img",{staticClass:"mr-3 w-10",attrs:{src:"/icons/clone.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.$t("alert.title")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-4"},[e("p",{staticClass:"text-sm"},[t._v(t._s(t.$t("alert.descr")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-4 flex"},[e("div",[e("div",{staticClass:"mb-1 text-sm sm:min-w-[90px] min-w-[80px]"},[t._v("\n        "+t._s(t.$t("alert.buttons.servers"))+"\n      ")]),t._v(" "),e("ButtonGroups",[e("div",{staticClass:"px-1 min-h-[30px] inline-block text-xs border border-gray-300 bg-white py-1 shadow-sm rounded text-primary underline text-center focus:outline-none",attrs:{id:"linkMatrix"}},[t._v("\n          #dcommsp2p:matrix.kyiv.dcomms.net.ua\n        ")]),t._v(" "),e("Button",{nativeOn:{click:function(e){return t.copyDivToClipboard("linkMatrix")}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1),t._v(" "),e("Button",{staticClass:"mt-2",attrs:{link:"https://github.com/censorship-no/dcomms"}},[t._v(t._s(t.$t("alert.buttons.repo")))])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(315).default,ButtonGroups:r(322).default})}}]);