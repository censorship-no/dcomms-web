(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{284:function(t,n,e){"use strict";e.r(n);var r={props:["link"]},l=e(29),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.link?e("a",{staticClass:"\n    inline-block\n    sm:text-sm\n    border border-gray-300\n    bg-white\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-300\n    min-h-[30px]\n    whitespace-nowrap\n  ",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"\n    inline-block\n    bg-white\n    sm:text-sm\n    border border-gray-300\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-300\n    min-h-[30px]\n    whitespace-nowrap\n  "},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(284).default})},285:function(t,n,e){var content=e(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("4746adbc",content,!0,{sourceMap:!1})},286:function(t,n,e){"use strict";e(285)},287:function(t,n,e){var r=e(57)((function(i){return i[1]}));r.push([t.i,".btn-group>:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.btn-group>:nth-child(n+1){border-radius:0;border-right:0}.btn-group>:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;border-right:1px solid #d1d5db}",""]),r.locals={},t.exports=r},288:function(t,n,e){"use strict";e.r(n);var r={},l=(e(286),e(29)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"btn-group flex items-center flex-nowrap"},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},289:function(t,n,e){var content=e(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("20b90108",content,!0,{sourceMap:!1})},290:function(t,n,e){var content=e(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("314cfa7c",content,!0,{sourceMap:!1})},291:function(t,n,e){"use strict";e(289)},292:function(t,n,e){var r=e(57)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},293:function(t,n,e){"use strict";e.r(n);e(19),e(73),e(32),e(12);var r={nuxtI18n:{locales:["ua","ru","en"]},name:"AppItemPlatformItem",props:{data:Object,desktop:Boolean},methods:{doCopy:function(){var t=document.getElementById("text");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value)}},computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"kyiv"},item:function(){var t=this;return!!this.data.servers&&this.data.servers.filter((function(n){return n.label===t.server||"all"===n.label}))}}},l=(e(291),e(29)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.data?e("div",{staticClass:"sm:mx-0"},[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),t._l(t.item,(function(n){return e("div",{key:n.label,staticClass:"sm:pr-6"},[e("div",{staticClass:"mb-3 sm:flex items-center"},[t.data.serversLabel?e("span",{staticClass:"\n          block\n          sm:inline\n          mb-3\n          sm:mb-0\n          mr-3\n          text-sm\n          sm:min-w-[90px]\n          min-w-[80px]\n          sm:text-right\n        "},[t._v(t._s(t.data.serversLabel[t.$i18n.locale]))]):t._e(),t._v(" "),n.name&&n.link?e("Button",{attrs:{link:n.link}},[t._v(t._s(n.name[t.$i18n.locale]))]):t._e(),t._v(" "),"copy"===n.type?e("span",{staticClass:"text-sm text-gray-600 flex"},[e("ButtonGroups",[e("input",{staticClass:"\n              max-w-[70%]\n              min-h-[30px]\n              inline-block\n              text-xs\n              border border-gray-300\n              bg-white\n              py-1\n              shadow-sm\n              rounded\n              text-primary\n              underline\n              text-center\n              focus:outline-none\n            ",attrs:{id:"text",readonly:"",type:"text"},domProps:{value:n.name[t.$i18n.locale]}}),t._v(" "),e("Button",{nativeOn:{click:function(n){return t.doCopy()}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1)],1):t._e()],1),t._v(" "),n.docs?e("div",{staticClass:"sm:flex items-center mb-3"},[e("span",{staticClass:"\n          block\n          sm:inline\n          mb-3\n          sm:mb-0\n          mr-3\n          text-sm\n          sm:min-w-[90px]\n          min-w-[80px]\n          sm:text-right\n        "},[t._v(t._s(t.$t("items.instruction"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(n.docs,(function(n){return e("Button",{key:n.link[t.$i18n.locale],attrs:{link:n.link[t.$i18n.locale]}},[t._v(t._s(n.name)+"\n        ")])})),1)],1):t._e()])})),t._v(" "),t.data.downloads?e("div",{staticClass:"mb-3 items-center"},[e("div",{staticClass:"sm:flex items-center"},[e("span",{staticClass:"\n          block\n          sm:inline\n          mb-3\n          sm:mb-0\n          mr-3\n          text-sm\n          sm:min-w-[90px]\n          min-w-[80px]\n          sm:text-right\n        "},[t._v(t._s(t.$t("items.downloads"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(t.data.downloads.mirrors,(function(n){return e("Button",{key:n.name[t.$i18n.locale],attrs:{link:n.link}},[t._v(t._s(n.name[t.$i18n.locale])+"\n        ")])})),1)],1),t._v(" "),t.data.platforms.length?e("div",{staticClass:"italic text-sm sm:ml-[110px] pt-3"},[t._v("\n      ("),t._l(t.data.platforms,(function(n,r){return e("span",{key:n.name},[n.link?e("a",{staticClass:"text-sm",attrs:{href:n.link}},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))]):e("span",{staticClass:"text-sm"},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))])])})),t._v(")\n    ")],2):t._e()]):t._e()],2):e("div",[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),e("span",{staticClass:"\n      inline-block\n      bg-gray-50\n      border border-gray-300\n      rounded-lg\n      py-3\n      px-5\n    "},[e("img",{staticClass:"w-8 inline mr-2",attrs:{src:"/icons/fail.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-gray-700 text-lg"},[t._v(t._s(t.$t("items.notAvail")))])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(284).default,ButtonGroups:e(288).default})},294:function(t,n,e){"use strict";e(290)},295:function(t,n,e){var r=e(57)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},296:function(t,n,e){"use strict";e.r(n);e(19),e(73);var r={nuxtI18n:{locales:["ua","ru","en"]},name:"Hero",computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"kyiv"}}},l=e(29),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"py-6 sm:py-20"},[e("div",{staticClass:"container px-3 sm:px-0 sm:text-center"},[e("h1",{staticClass:"text-4xl sm:text-5xl font-bold md:mx-[100px]"},[t._v("\n      "+t._s(t.$t("title.first"))+"\n      "),e("span",{staticClass:"text-primary"},[t._v(t._s(t.$t("title.second")))])]),t._v(" "),e("p",{staticClass:"text-xl my-8 text-gray-500 md:mx-[120px]"},[t._v("\n      "+t._s(t.$t("subtitle"))+"\n    ")]),t._v(" "),e("span",{staticClass:"\n        border border-green-500\n        rounded-lg\n        px-4\n        py-2\n        inline-flex\n        bg-green-50\n      "},[e("img",{staticClass:"mr-2",attrs:{src:"/icons/success.svg",alt:""}}),e("span",{domProps:{innerHTML:t._s(t.$t("connected",{name:t.$t("cities['"+t.server+"']")}))}})]),t._v(" "),e("div",{staticClass:"\n        flex flex-wrap\n        gap-2\n        sm:gap-3 sm:text-center\n        items-center\n        sm:justify-center\n        my-8\n      "},[e("div",{staticClass:"\n          w-full\n          sm:w-auto\n          text-gray-500\n          font-bold\n          text-sm\n          uppercase\n          basis-full\n        "},[t._v("\n        "+t._s(t.$t("server"))+"\n      ")]),t._v(" "),t._l(t.$store.state.servers,(function(n){return e("Button",{key:n.name,staticClass:"min-w-[109px]",attrs:{link:n.link}},[t._v(t._s(t.$t(n.name)))])}))],2)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(284).default})},297:function(t,n,e){"use strict";e.r(n);var r={},l=e(29),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{staticClass:"flex items-center py-8"},[e("div",{staticClass:"h-[1px] mr-3 w-full bg-gray-200"}),t._v(" "),e("span",{staticClass:"mr-2"},[t._t("icon")],2),t._v(" "),e("span",{staticClass:"uppercase gray-700 text-lg whitespace-nowrap"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"h-[1px] ml-3 w-full bg-gray-200"})])}),[],!1,null,null,null);n.default=component.exports},298:function(t,n,e){"use strict";e.r(n);var r={name:"AppItem",props:["data"]},l=(e(294),e(29)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-8 shadow bg-white rounded-xl p-4 sm:p-8"},[e("div",{staticClass:"md:flex mb-4"},[e("img",{staticClass:"\n        mb-6\n        md:mb-0 md:mx-auto\n        h-[48px]\n        w-[48px]\n        object-contain\n        md:mr-10\n      ",attrs:{src:t.data.logo,alt:""}}),t._v(" "),e("div",{staticClass:"mb-6 md:mb-0"},[t.data.explain?e("div",{staticClass:"text-sm font-semibold uppercase text-primary mb-3"},[t._v("\n        "+t._s(t.data.explain[t.$i18n.locale])+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-2xl font-bold mb-3"},[t._v("\n        "+t._s(t.data.name[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.data.descr[t.$i18n.locale])}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 lg:gap-8 mt-8"},[e("AppItemPlatformItem",{staticClass:"lg:border-r lg:border-gray-300",attrs:{data:t.data.mobileApp}}),t._v(" "),e("AppItemPlatformItem",{staticClass:"border-t lg:border-0 pt-6 mt-6 lg:pt-0 lg:mt-0",attrs:{desktop:"",data:t.data.desktopApp}})],1)])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AppItemPlatformItem:e(293).default})},299:function(t,n,e){"use strict";e.r(n);var r={name:"ReplicateSection",methods:{doCopy:function(){var t=document.getElementById("linkMatrix");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value)}}},l=e(29),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n    rounded-lg\n    bg-red-100\n    border border-primary\n    grid grid-cols-12\n    p-8\n    gap-6\n  "},[e("div",{staticClass:"col-span-12 lg:col-span-4 flex items-start"},[e("img",{staticClass:"mr-3 w-10",attrs:{src:"/icons/clone.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.$t("alert.title")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-3"},[e("p",{staticClass:"text-sm"},[t._v(t._s(t.$t("alert.descr")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-5 flex lg:justify-end"},[e("div",[e("div",{staticClass:"mb-1 text-sm sm:min-w-[90px] min-w-[80px]"},[t._v("\n        "+t._s(t.$t("alert.buttons.servers"))+"\n      ")]),t._v(" "),e("ButtonGroups",[e("input",{staticClass:"\n            w-[260px]\n            min-h-[30px]\n            inline-block\n            text-xs\n            border border-gray-300\n            bg-white\n            py-1\n            shadow-sm\n            rounded\n            text-primary\n            underline\n            text-center\n            focus:outline-none\n          ",attrs:{id:"linkMatrix",value:"#dcommsp2p:matrix.kyiv.dcomms.net.ua",readonly:"",type:"text"}}),t._v(" "),e("Button",{nativeOn:{click:function(n){return t.doCopy()}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1),t._v(" "),e("Button",{staticClass:"mt-2",attrs:{link:"https://github.com/censorship-no/dcomms"}},[t._v(t._s(t.$t("alert.buttons.repo")))])],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(284).default,ButtonGroups:e(288).default})},301:function(t,n,e){"use strict";e.r(n);e(32),e(12);var r={layout:"default",nuxtI18n:{locales:["ua","ru","en"]},name:"IndexPage",head:function(){return{meta:[]}},computed:{messaging:function(){return this.$store.state.items.messaging.filter((function(t){return!0===t.show}))},browsing:function(){return this.$store.state.items.browsing.filter((function(t){return!0===t.show}))}}},l=e(29),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"container px-3 sm:px-0"},[e("Hero"),t._v(" "),e("div",[e("SectionTitle",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"w-16",attrs:{src:"/icons/chating.svg",alt:""}})]},proxy:!0}])},[t._v(" "),[t._v("\n        "+t._s(t.$t("rubric.messaging"))+"\n      ")]],2),t._v(" "),t._l(t.messaging,(function(t){return e("div",{key:t.id},[e("AppItem",{attrs:{data:t}})],1)})),t._v(" "),e("SectionTitle",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"w-16",attrs:{src:"/icons/browsing.svg",alt:""}})]},proxy:!0}])},[t._v(" "),[t._v("\n        "+t._s(t.$t("rubric.browsing"))+"\n      ")]],2),t._v(" "),t._l(t.browsing,(function(t){return e("div",{key:t.id},[e("AppItem",{attrs:{data:t}})],1)}))],2),t._v(" "),e("ReplicateSection")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Hero:e(296).default,SectionTitle:e(297).default,AppItem:e(298).default,ReplicateSection:e(299).default})}}]);