(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{271:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("314cfa7c",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n.r(e);n(41),n(12);var l={nuxtI18n:{locales:["ua","ru","en"]},name:"Header",computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},r=n(62),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header m-auto flex flex-col items-center my-5"},[n("img",{staticClass:"w-20",attrs:{src:"/bridge-icon.png",alt:""}}),t._v(" "),n("div",{staticClass:"block text-center"},[n("h1",{staticClass:"text-3xl mb-3"},[t._v(t._s(t.$t("title")))]),t._v(" "),t._l(t.availableLocales,(function(e,l){return n("nuxt-link",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name+(l===t.availableLocales.length-1?"":" /"))+"\n    ")])})),t._v(" "),n("h2",{staticClass:"text-2xl mt-4"},[t._v("\n      "+t._s(t.$t("subtitle"))+"\n    ")])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(272).default})},273:function(t,e,n){"use strict";n.r(e);var l=n(62),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"container text-center pb-6"},[n("div",{staticClass:"flex flex-col xm:flex-row items-center justify-center mb-3"},[n("img",{staticClass:"logo mr-3",attrs:{width:"100",src:"/logo_ceno.png",alt:t.$t("org")}}),t._v(" "),n("span",{staticClass:"pt-3 sm:pt-0"},[t._v("\n  "+t._s(t.$t("footer.initiative"))+"\n  "),n("a",{attrs:{target:"_blank",href:"https://censorship.no"}},[t._v("\n    "+t._s(t.$t("footer.org")))])])]),t._v(" "),n("a",{attrs:{href:"https://github.com/censorship-no/dcomms"}},[t._v("GNU General Public License v3.0 ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(273).default})},274:function(t,e,n){"use strict";n(271)},275:function(t,e,n){var l=n(87)((function(i){return i[1]}));l.push([t.i,"p{margin-bottom:10px}",""]),l.locals={},t.exports=l},276:function(t,e,n){"use strict";n.r(e);var l={name:"AppItem",props:["data"]},r=(n(274),n(62)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-8 bg-white rounded-xl p-8"},[n("div",{staticClass:"sm:flex mb-4"},[n("img",{staticClass:"mb-6 sm:mb-0 mx-auto h-[100px] w-[100px] object-contain sm:mr-10",attrs:{src:t.data.logo,alt:""}}),t._v(" "),n("div",{staticClass:"mb-6 sm:mb-0 sm:text-xl",domProps:{innerHTML:t._s(t.data.descr[t.$i18n.locale])}})]),t._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-8 mt-8"},[t.data.desktopApp?n("div",{staticClass:"sm:rounded-lg mb-6 -mx-3 sm:mx-0"},[n("div",{staticClass:"mb-3 font-bold"},[t._v(t._s(t.$t("items.desktopApp")))]),t._v(" "),t.data.desktopApp.name[t.$i18n.locale]?n("div",{staticClass:"mb-3"},[n("img",{staticClass:"inline w-5",attrs:{src:t.data.mobileApp.logo,alt:t.data.mobileApp.name[t.$i18n.locale]}}),t._v(" "),t.data.desktopApp.link?n("a",{staticClass:"text-lg",attrs:{href:t.data.desktopApp.link}},[t._v("\n          "+t._s(t.data.desktopApp.name[t.$i18n.locale]))]):n("span",[t._v(" "+t._s(t.data.desktopApp.name[t.$i18n.locale]))]),t._v(" "),t.data.desktopApp.localLink?n("a",{staticClass:"my-1 text-gray-600 whitespace-nowrap block",attrs:{href:t.data.desktopApp.localLink}},[n("img",{staticClass:"inline w-3",attrs:{src:"/download.svg",alt:""}}),t._v(" "),n("span",{staticClass:"mr-1"},[t._v(" "+t._s(t.$t("items.localDownload")))])]):t._e(),t._v("\n        ("),t._l(t.data.desktopApp.platforms,(function(e,l){return n("span",{key:e.name},[e.link?n("a",{attrs:{href:e.link}},[t._v(t._s(e.name+(l===t.data.desktopApp.platforms.length-1?"":", ")))]):n("span",[t._v(t._s(e.name+(l===t.data.desktopApp.platforms.length-1?"":", ")))])])})),t._v(")\n      ")],2):t._e(),t._v(" "),n("div",t._l(t.data.desktopApp.servers,(function(e){return n("div",{key:e.name[t.$i18n.locale],staticClass:"mb-3 sm:pr-6"},[e.link?n("a",{attrs:{href:e.link}},[t._v(t._s(e.name[t.$i18n.locale]))]):n("span",[t._v(t._s(e.name[t.$i18n.locale]))]),t._v(" "),e.docs?n("span",[t._v("\n            (\n            "+t._s(t.$t("items.instruction"))+"\n            "),t._l(e.docs,(function(l,r){return n("a",{key:l.link[t.$i18n.locale],attrs:{href:l.link[t.$i18n.locale]}},[t._v(t._s(l.name+(r===e.docs.length-1?"":", "))+" ")])})),t._v(")\n          ")],2):t._e()])})),0)]):t._e(),t._v(" "),t.data.mobileApp?n("div",{staticClass:"sm:rounded-lg -mx-3 sm:mx-0"},[n("div",{staticClass:"mb-3 font-bold"},[t._v(t._s(t.$t("items.mobileApp")))]),t._v(" "),t.data.mobileApp.name[t.$i18n.locale]?n("div",{staticClass:"mb-3"},[n("img",{staticClass:"inline w-5",attrs:{src:t.data.mobileApp.logo,alt:t.data.mobileApp.name[t.$i18n.locale]}}),t._v(" "),t.data.mobileApp.link?n("a",{staticClass:"text-lg",attrs:{href:t.data.mobileApp.link}},[t._v("\n          "+t._s(t.data.mobileApp.name[t.$i18n.locale]))]):n("span",[t._v(" "+t._s(t.data.mobileApp.name[t.$i18n.locale]))]),t._v("\n        ("),t._l(t.data.mobileApp.platforms,(function(e,l){return n("span",{key:e.name},[e.link?n("a",{attrs:{href:e.link}},[t._v(t._s(e.name+(l===t.data.mobileApp.platforms.length-1?"":", ")))]):n("span",[t._v(t._s(e.name+(l===t.data.mobileApp.platforms.length-1?"":", ")))])])})),t._v(")\n        "),t.data.mobileApp.localLink?n("a",{staticClass:"my-1 text-gray-600 whitespace-nowrap block",attrs:{href:t.data.mobileApp.localLink}},[n("img",{staticClass:"inline w-3",attrs:{src:"/download.svg",alt:""}}),t._v(" "),n("span",{staticClass:"mr-1"},[t._v(" "+t._s(t.$t("items.localDownload")))])]):t._e(),t._v(" "),t.data.mobileApp.docs?n("div",[t._v("\n          "+t._s(t.$t("items.instruction"))+"\n          "),t._l(t.data.mobileApp.docs,(function(e,l){return n("span",{key:e.name},[n("a",{attrs:{href:e.link[t.$i18n.locale]}},[t._v(t._s(e.name+(l===t.data.mobileApp.docs.length-1?"":", ")))])])}))],2):t._e()],2):t._e(),t._v(" "),t._l(t.data.mobileApp.servers,(function(e){return n("div",{key:e.name[t.$i18n.locale],staticClass:"mb-3"},[e.link?n("a",{attrs:{href:e.link}},[t._v(t._s(e.name[t.$i18n.locale]))]):n("span",[t._v(t._s(e.name[t.$i18n.locale]))]),t._v(" "),e.docs?n("span",[t._v("\n          ("+t._s(t.$t("items.instruction"))+"\n          "),t._l(e.docs,(function(e){return n("a",{key:e.link[t.$i18n.locale],attrs:{href:e.link[t.$i18n.locale]}},[t._v(t._s(e.name)+" ")])})),t._v(")\n        ")],2):t._e()])}))],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);n(41),n(12);var l={nuxtI18n:{locales:["ua","ru","en"]},name:"IndexPage",computed:{messaging:function(){return this.$store.state.items.messaging.filter((function(t){return!0===t.show}))},browsing:function(){return this.$store.state.items.browsing.filter((function(t){return!0===t.show}))},filesharing:function(){return this.$store.state.items.filesharing.filter((function(t){return!0===t.show}))}}},r=n(62),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"bg-white py-8 sm:py-20"},[n("div",{staticClass:"container px-3 sm:px-0"},[n("p",{staticClass:"text-lg"},[t._v(t._s(t.$t("about.info")))]),t._v(" "),n("p",{staticClass:"text-lg"},[t._v(t._s(t.$t("about.sites")))]),t._v(" "),n("p",{staticClass:"\n          grid grid-cols-1\n          sm:grid-cols-4\n          gap-3\n          sm:gap-8\n          text-center\n          justify-around\n          my-8\n        "},[n("a",{staticClass:"\n            sm:text-xl\n            border-2 border-gray-600\n            p-3\n            sm:p-6\n            rounded-lg\n            text-gray-600\n            hover:border-[#e53323] hover:text-[#e53323]\n          ",attrs:{href:"https://kyiv.dcomm.net.ua/"}},[t._v(t._s(t.$t("cities.kyiv")))]),t._v(" "),n("a",{staticClass:"\n            sm:text-xl\n            border-2 border-gray-600\n            p-3\n            sm:p-6\n            rounded-lg\n            text-gray-600\n            hover:border-[#e53323] hover:text-[#e53323]\n          ",attrs:{href:"https://odessa.dcomm.net.ua"}},[t._v(t._s(t.$t("cities.odessa")))]),t._v(" "),n("a",{staticClass:"\n            sm:text-xl\n            border-2 border-gray-600\n            p-3\n            sm:p-6\n            rounded-lg\n            text-gray-600\n            hover:border-[#e53323] hover:text-[#e53323]\n          ",attrs:{href:"https://kharkiv.dcomm.net.ua"}},[t._v(t._s(t.$t("cities.kharkiv")))]),t._v(" "),n("a",{staticClass:"\n            sm:text-xl\n            border-2 border-gray-600\n            p-3\n            sm:p-6\n            rounded-lg\n            text-gray-600\n            hover:border-[#e53323] hover:text-[#e53323]\n          ",attrs:{href:"https://lviv.dcomm.net.ua"}},[t._v(t._s(t.$t("cities.lviv")))])]),t._v(" "),n("p",{staticClass:"text-gray-400 text-center"},[t._v(t._s(t.$t("about.local")))])])]),t._v(" "),n("main",{staticClass:"container px-3 sm:px-0"},[n("div",[n("h3",{staticClass:"text-3xl font-bold my-8 sm:my-20"},[t._v("\n        "+t._s(t.$t("rubric.messaging"))+"\n      ")]),t._v(" "),t._l(t.messaging,(function(t){return n("div",{key:t.id},[n("AppItem",{attrs:{data:t}})],1)})),t._v(" "),n("h3",{staticClass:"text-3xl font-bold my-8 sm:my-20"},[t._v("\n        "+t._s(t.$t("rubric.browsing"))+"\n      ")]),t._v(" "),t._l(t.browsing,(function(t){return n("div",{key:t.id},[n("AppItem",{attrs:{data:t}})],1)})),t._v(" "),n("h3",{staticClass:"text-3xl font-bold my-8 sm:my-20"},[t._v("\n        "+t._s(t.$t("rubric.filesharing"))+"\n      ")]),t._v(" "),t._l(t.filesharing,(function(t){return n("div",{key:t.id},[n("AppItem",{attrs:{data:t}})],1)}))],2)]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(272).default,AppItem:n(276).default,Footer:n(273).default})}}]);