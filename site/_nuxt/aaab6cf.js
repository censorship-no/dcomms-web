(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3,4,5],{315:function(t,e,n){"use strict";var r=n(2),o=n(318);r({target:"String",proto:!0,forced:n(319)("link")},{link:function(t){return o(this,"a","href",t)}})},316:function(t,e,n){"use strict";n.r(e);n(315);var r={props:["link"]},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"inline-block sm:text-sm border border-gray-300 bg-white px-2 py-1 shadow-sm rounded text-gray-700 text-center hover:bg-gray-50 active:bg-gray-100 min-h-[30px] whitespace-nowrap",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"inline-block bg-white sm:text-sm border border-gray-300 px-2 py-1 shadow-sm rounded text-gray-700 text-center hover:bg-gray-50 active:bg-gray-100 min-h-[30px] whitespace-nowrap"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(316).default})},317:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("3f838bf8",content,!0,{sourceMap:!1})},318:function(t,e,n){var r=n(4),o=n(34),l=n(15),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=l(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(l(r),c,"&quot;")+'"'),f+">"+m+"</"+e+">"}},319:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},320:function(t,e,n){"use strict";n(317)},321:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,".btn-group>:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.btn-group>:nth-child(n+1){border-radius:0;border-right:0}.btn-group>:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;border-right:1px solid #d1d5db}",""]),r.locals={},t.exports=r},322:function(t,e,n){"use strict";n.r(e);var r={},o=(n(320),n(30)),component=Object(o.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"btn-group flex items-center flex-nowrap"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";e.a={methods:{copyDivToClipboard:function(t){if(document.selection)(e=document.body.createTextRange()).moveToElementText(document.getElementById(t)),e.select().createTextRange(),document.execCommand("copy");else if(window.getSelection){var e;(e=document.createRange()).selectNode(document.getElementById(t)),window.getSelection().addRange(e),document.execCommand("copy")}}}}},324:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("4e689f4d",content,!0,{sourceMap:!1})},326:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("4fcec96b",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(324)},328:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},329:function(t,e,n){"use strict";n.r(e);n(50),n(315),n(31),n(23),n(78),n(32),n(12);var r=n(323),o={nuxtI18n:{locales:["ua","ru","en"]},name:"AppItemPlatformItem",props:{data:Object,desktop:Boolean},mixins:[r.a],data:function(){return{domain:this.$store.state.rootDomain}},computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"kyiv"},item:function(){var t=this;return!!this.data.servers&&this.data.servers.filter((function(e){return e.label===t.server||"all"===e.label}))}}},l=(n(327),n(30)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"sm:mx-0"},[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),e("div",{staticClass:"sm:pr-6"},[e("div",{staticClass:"mb-3 flex items-center"},[t.data.serversLabel?e("span",{staticClass:"block sm:inline mr-3 text-sm min-w-[90px] text-right"},[t._v(t._s(t.data.serversLabel[t.$i18n.locale]))]):t._e(),t._v(" "),t.data.serversLabel&&t.data.linkSubdomain&&"copy"!==t.data.btnType?e("Button",{attrs:{link:"https://".concat(t.data.linkSubdomain,".").concat(t.server,".").concat(t.domain)}},[t._v(t._s(t.data.serversLabel[t.$i18n.locale]+" "+t.$t("cities."+t.server)))]):t._e(),t._v(" "),"copy"===t.data.btnType?e("span",{staticClass:"text-sm text-gray-600 flex"},[e("ButtonGroups",[e("div",{staticClass:"px-1 min-h-[30px] inline-block text-xs border border-gray-300 bg-white py-1 shadow-sm rounded text-primary underline text-center focus:outline-none",attrs:{id:"adresServer"}},[t._v("\n            "+t._s("".concat(t.data.linkSubdomain,".").concat(t.server,".").concat(t.domain))+"\n          ")]),t._v(" "),e("Button",{nativeOn:{click:function(e){return t.copyDivToClipboard("adresServer")}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1)],1):t._e()],1)]),t._v(" "),t.data.docs?e("div",{staticClass:"flex items-center mb-3"},[e("span",{staticClass:"block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"},[t._v(t._s(t.$t("items.instruction"))+"\n    ")]),t._v(" "),e("ButtonGroups",t._l(t.data.docs,(function(n){return e("Button",{key:n.link[t.$i18n.locale]},["doc"==n.type?e("a",{staticClass:"text-gray-700",attrs:{href:n.link[t.$i18n.locale],target:"_blank"}},[t._v("\n          "+t._s(n.name)+"\n        ")]):e("NuxtLink",{staticClass:"text-gray-700",attrs:{to:t.localePath(n.link)}},[t._v("\n          "+t._s(n.name)+"\n        ")])],1)})),1)],1):t._e(),t._v(" "),t.data.downloads?e("div",{staticClass:"mb-3 items-center"},[e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"},[t._v(t._s(t.$t("items.downloads"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(t.data.downloads.mirrors,(function(n){return e("Button",{key:n.label?n.label:n.name,attrs:{link:n.link}},[t._v(t._s(n.label?t.$t("labels."+n.label):n.name)+"\n        ")])})),1)],1),t._v(" "),t.data.platforms.length?e("div",{staticClass:"italic text-sm sm:ml-[110px] pt-3"},[t._v("\n      ("),t._l(t.data.platforms,(function(n,r){return e("span",{key:n.name},[n.link?e("a",{staticClass:"text-sm",attrs:{href:n.link}},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))]):e("span",{staticClass:"text-sm"},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))])])})),t._v(")\n    ")],2):t._e()]):t._e()]):e("div",{staticClass:"flex flex-col"},[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),e("div",{staticClass:"bg-gray-50 rounded-lg py-8 px-5 w-full flex items-center justify-center",staticStyle:{"flex-basis":"100%"}},[e("img",{staticClass:"mr-2 max-w-[30px] max-h-[30px]",attrs:{src:"/icons/fail.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-gray-700 text-lg"},[t._v(t._s(t.$t("items.notAvail")))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(316).default,ButtonGroups:n(322).default})},330:function(t,e,n){"use strict";n(326)},331:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},340:function(t,e,n){"use strict";n.r(e);n(31);var r={name:"AppItem",props:["data"]},o=(n(330),n(30)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 shadow bg-white rounded-xl p-4 sm:p-8"},[e("div",{staticClass:"md:flex mb-4"},[e("img",{staticClass:"mb-6 md:mb-0 md:mx-auto h-[48px] w-[48px] object-contain md:mr-10",attrs:{src:t.data.logo,alt:""}}),t._v(" "),e("div",{staticClass:"mb-6 md:mb-0"},[t.data.explain?e("div",{staticClass:"text-sm font-semibold uppercase text-primary mb-3"},[t._v("\n        "+t._s(t.data.explain[t.$i18n.locale])+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-2xl font-bold mb-3"},[t._v("\n        "+t._s(t.data.name[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.data.descr[t.$i18n.locale])}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 mt-8"},[e("AppItemPlatformItem",{staticClass:"lg:border-r lg:border-gray-300 lg:pr-8",attrs:{data:t.data.mobileApp}}),t._v(" "),e("hr",{staticClass:"lg:hidden mt-6 mr-20"}),t._v(" "),e("AppItemPlatformItem",{staticClass:"pt-6 lg:pt-0 lg:mt-0 lg:pl-8",attrs:{desktop:"",data:t.data.desktopApp}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppItemPlatformItem:n(329).default})}}]);