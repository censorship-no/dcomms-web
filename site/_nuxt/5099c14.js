(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,4,5,6,7,8,9,10],{314:function(t,e,n){"use strict";var r=n(1),l=n(317);r({target:"String",proto:!0,forced:n(318)("link")},{link:function(t){return l(this,"a","href",t)}})},315:function(t,e,n){"use strict";n.r(e);n(314);var r={props:["link"]},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"inline-block sm:text-sm border border-gray-300 bg-white px-2 py-1 shadow-sm rounded text-gray-700 text-center hover:bg-gray-50 active:bg-gray-100 min-h-[30px] whitespace-nowrap",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"inline-block bg-white sm:text-sm border border-gray-300 px-2 py-1 shadow-sm rounded text-gray-700 text-center hover:bg-gray-50 active:bg-gray-100 min-h-[30px] whitespace-nowrap"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(315).default})},316:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("3f838bf8",content,!0,{sourceMap:!1})},317:function(t,e,n){var r=n(4),l=n(34),o=n(16),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=o(l(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(o(r),c,"&quot;")+'"'),f+">"+m+"</"+e+">"}},318:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},319:function(t,e,n){"use strict";n.r(e);var r={},l=n(30),component=Object(l.a)(r,(function(){return(0,this._self._c)("h1",{staticClass:"text-4xl sm:text-5xl font-bold md:mb-[60px]"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{H1:n(319).default})},320:function(t,e,n){"use strict";n(316)},321:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,".btn-group>:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.btn-group>:nth-child(n+1){border-radius:0;border-right:0}.btn-group>:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;border-right:1px solid #d1d5db}",""]),r.locals={},t.exports=r},322:function(t,e,n){"use strict";n.r(e);var r={},l=(n(320),n(30)),component=Object(l.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"btn-group flex items-center flex-nowrap"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";e.a={methods:{copyDivToClipboard:function(t){if(document.selection)(e=document.body.createTextRange()).moveToElementText(document.getElementById(t)),e.select().createTextRange(),document.execCommand("copy");else if(window.getSelection){var e;(e=document.createRange()).selectNode(document.getElementById(t)),window.getSelection().addRange(e),document.execCommand("copy")}}}}},324:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("30a85542",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n.r(e);var r={},l=n(30),component=Object(l.a)(r,(function(){return(0,this._self._c)("h2",{staticClass:"uppercase gray-700 text-lg whitespace-nowrap mb-3"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{H2:n(325).default})},326:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("4fcec96b",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(324)},328:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},329:function(t,e,n){"use strict";n.r(e);n(31),n(314),n(23),n(78),n(32),n(12);var r=n(323),l={nuxtI18n:{locales:["ua","ru","en"]},name:"AppItemPlatformItem",props:{data:Object,desktop:Boolean},mixins:[r.a],computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"kyiv"},item:function(){var t=this;return!!this.data.servers&&this.data.servers.filter((function(e){return e.label===t.server||"all"===e.label}))}}},o=(n(327),n(30)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"sm:mx-0"},[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),t._l(t.item,(function(n){return e("div",{key:n.label,staticClass:"sm:pr-6"},[e("div",{staticClass:"mb-3 flex items-center"},[t.data.serversLabel?e("span",{staticClass:"block sm:inline mr-3 text-sm min-w-[90px] text-right"},[t._v(t._s(t.data.serversLabel[t.$i18n.locale]))]):t._e(),t._v(" "),n.name&&n.link?e("Button",{attrs:{link:n.link}},[t._v(t._s(n.name[t.$i18n.locale]))]):t._e(),t._v(" "),"copy"===n.type?e("span",{staticClass:"text-sm text-gray-600 flex"},[e("ButtonGroups",[e("div",{staticClass:"px-1 min-h-[30px] inline-block text-xs border border-gray-300 bg-white py-1 shadow-sm rounded text-primary underline text-center focus:outline-none",attrs:{id:"adresServer"}},[t._v("\n            "+t._s(n.name[t.$i18n.locale])+"\n          ")]),t._v(" "),e("Button",{nativeOn:{click:function(e){return t.copyDivToClipboard("adresServer")}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1)],1):t._e()],1),t._v(" "),n.docs?e("div",{staticClass:"flex items-center mb-3"},[e("span",{staticClass:"block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"},[t._v(t._s(t.$t("items.instruction"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(n.docs,(function(n){return e("Button",{key:n.link[t.$i18n.locale],attrs:{link:n.link[t.$i18n.locale]}},[t._v(t._s(n.name)+"\n        ")])})),1)],1):t._e()])})),t._v(" "),t.data.downloads?e("div",{staticClass:"mb-3 items-center"},[e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"block sm:inline mr-3 text-sm min-w-[90px] sm:text-right"},[t._v(t._s(t.$t("items.downloads"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(t.data.downloads.mirrors,(function(n){return e("Button",{key:n.name[t.$i18n.locale],attrs:{link:n.link}},[t._v(t._s(n.name[t.$i18n.locale])+"\n        ")])})),1)],1),t._v(" "),t.data.platforms.length?e("div",{staticClass:"italic text-sm sm:ml-[110px] pt-3"},[t._v("\n      ("),t._l(t.data.platforms,(function(n,r){return e("span",{key:n.name},[n.link?e("a",{staticClass:"text-sm",attrs:{href:n.link}},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))]):e("span",{staticClass:"text-sm"},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))])])})),t._v(")\n    ")],2):t._e()]):t._e()],2):e("div",{staticClass:"flex flex-col"},[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),e("div",{staticClass:"bg-gray-50 rounded-lg py-8 px-5 w-full flex items-center justify-center",staticStyle:{"flex-basis":"100%"}},[e("img",{staticClass:"mr-2 max-w-[30px] max-h-[30px]",attrs:{src:"/icons/fail.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-gray-700 text-lg"},[t._v(t._s(t.$t("items.notAvail")))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(315).default,ButtonGroups:n(322).default})},330:function(t,e,n){"use strict";n(326)},331:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},333:function(t,e,n){"use strict";n.r(e);n(31),n(314),n(23),n(78),n(32),n(12);var r={nuxtI18n:{locales:["ua","ru","en"]},name:"Hero",computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"kyiv"},servers:function(){return this.$store.state.servers.filter((function(t){return t.link!=window.location.href}))}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-6 sm:py-20"},[e("div",{staticClass:"container px-3 sm:px-0 sm:text-center"},[e("h1",{staticClass:"text-4xl sm:text-5xl font-bold md:mx-[100px]"},[t._v("\n      "+t._s(t.$t("title.first"))+"\n      "),e("span",{staticClass:"text-primary"},[t._v(t._s(t.$t("title.second")))])]),t._v(" "),e("p",{staticClass:"text-xl my-8 text-gray-500 md:mx-[120px]"},[t._v("\n      "+t._s(t.$t("subtitle"))+"\n    ")]),t._v(" "),e("span",{staticClass:"border border-green-500 rounded-lg px-4 py-2 inline-flex bg-green-50"},[e("img",{staticClass:"mr-2",attrs:{src:"/icons/success.svg",alt:""}}),e("span",{domProps:{innerHTML:t._s(t.$t("connected",{name:t.$t("cities['".concat(t.server,"']"))}))}})]),t._v(" "),e("div",{staticClass:"flex flex-wrap gap-2 sm:gap-3 sm:text-center items-center sm:justify-center my-8"},[e("div",{staticClass:"w-full sm:w-auto text-gray-500 font-bold text-sm uppercase basis-full"},[t._v("\n        "+t._s(t.$t("server"))+"\n      ")]),t._v(" "),t._l(t.servers,(function(n){return e("Button",{key:n.name,staticClass:"min-w-[109px]",attrs:{link:n.link}},[t._v(t._s(t.$t(n.name)))])}))],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{H1:n(319).default,Button:n(315).default})},334:function(t,e,n){"use strict";n.r(e);var r={},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("h2",{staticClass:"flex items-center py-8"},[e("div",{staticClass:"h-[1px] mr-3 w-full bg-gray-200"}),t._v(" "),e("span",{staticClass:"mr-2"},[t._t("icon")],2),t._v(" "),e("span",{staticClass:"uppercase gray-700 text-lg whitespace-nowrap"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"h-[1px] ml-3 w-full bg-gray-200"})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{H2:n(325).default})},335:function(t,e,n){"use strict";n.r(e);n(31);var r={name:"AppItem",props:["data"]},l=(n(330),n(30)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 shadow bg-white rounded-xl p-4 sm:p-8"},[e("div",{staticClass:"md:flex mb-4"},[e("img",{staticClass:"mb-6 md:mb-0 md:mx-auto h-[48px] w-[48px] object-contain md:mr-10",attrs:{src:t.data.logo,alt:""}}),t._v(" "),e("div",{staticClass:"mb-6 md:mb-0"},[t.data.explain?e("div",{staticClass:"text-sm font-semibold uppercase text-primary mb-3"},[t._v("\n        "+t._s(t.data.explain[t.$i18n.locale])+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-2xl font-bold mb-3"},[t._v("\n        "+t._s(t.data.name[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.data.descr[t.$i18n.locale])}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 mt-8"},[e("AppItemPlatformItem",{staticClass:"lg:border-r lg:border-gray-300 lg:pr-8",attrs:{data:t.data.mobileApp}}),t._v(" "),e("hr",{staticClass:"lg:hidden mt-6 mr-20"}),t._v(" "),e("AppItemPlatformItem",{staticClass:"pt-6 lg:pt-0 lg:mt-0 lg:pl-8",attrs:{desktop:"",data:t.data.desktopApp}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppItemPlatformItem:n(329).default})},336:function(t,e,n){"use strict";n.r(e);var r={name:"ReplicateSection",mixins:[n(323).a]},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg bg-red-100 border border-primary grid grid-cols-12 p-8 gap-6"},[e("div",{staticClass:"col-span-12 lg:col-span-4 flex items-start"},[e("img",{staticClass:"mr-3 w-10",attrs:{src:"/icons/clone.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.$t("alert.title")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-4"},[e("p",{staticClass:"text-sm"},[t._v(t._s(t.$t("alert.descr")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-4 flex"},[e("div",[e("div",{staticClass:"mb-1 text-sm sm:min-w-[90px] min-w-[80px]"},[t._v("\n        "+t._s(t.$t("alert.buttons.servers"))+"\n      ")]),t._v(" "),e("ButtonGroups",[e("div",{staticClass:"px-1 min-h-[30px] inline-block text-xs border border-gray-300 bg-white py-1 shadow-sm rounded text-primary underline text-center focus:outline-none",attrs:{id:"linkMatrix"}},[t._v("\n          #dcommsp2p:matrix.kyiv.dcomms.net.ua\n        ")]),t._v(" "),e("Button",{nativeOn:{click:function(e){return t.copyDivToClipboard("linkMatrix")}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1),t._v(" "),e("Button",{staticClass:"mt-2",attrs:{link:"https://github.com/censorship-no/dcomms"}},[t._v(t._s(t.$t("alert.buttons.repo")))])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(315).default,ButtonGroups:n(322).default})},341:function(t,e,n){"use strict";n.r(e);n(32),n(12);var r={layout:"default",nuxtI18n:{locales:["ua","ru","en"]},name:"IndexPage",head:function(){return{meta:[]}},computed:{messaging:function(){return this.$store.state.items.messaging.filter((function(t){return!0===t.show}))},browsing:function(){return this.$store.state.items.browsing.filter((function(t){return!0===t.show}))},social:function(){return this.$store.state.items.social.filter((function(t){return!0===t.show}))}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"container px-3 sm:px-0"},[e("Hero"),t._v(" "),e("div",[e("SectionTitle",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"w-16",attrs:{src:"/icons/chating.svg",alt:""}})]},proxy:!0}])},[t._v(" "),[t._v("\n        "+t._s(t.$t("rubric.messaging"))+"\n      ")]],2),t._v(" "),t._l(t.messaging,(function(t){return e("div",{key:t.id},[e("AppItem",{attrs:{data:t}})],1)})),t._v(" "),e("SectionTitle",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"w-16",attrs:{src:"/icons/browsing.svg",alt:""}})]},proxy:!0}])},[t._v(" "),[t._v("\n        "+t._s(t.$t("rubric.browsing"))+"\n      ")]],2),t._v(" "),t._l(t.browsing,(function(t){return e("div",{key:t.id},[e("AppItem",{attrs:{data:t}})],1)})),t._v(" "),e("SectionTitle",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"w-16",attrs:{src:"/icons/social.svg",alt:""}})]},proxy:!0}])},[t._v(" "),[t._v("\n        "+t._s(t.$t("rubric.social"))+"\n      ")]],2),t._v(" "),t._l(t.social,(function(t){return e("div",{key:t.id},[e("AppItem",{attrs:{data:t}})],1)}))],2),t._v(" "),e("ReplicateSection")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(333).default,SectionTitle:n(334).default,AppItem:n(335).default,ReplicateSection:n(336).default})}}]);