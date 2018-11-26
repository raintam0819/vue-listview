(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(t,s,a){t.exports=a.p+"assets/img/preview.446b3b19.png"},323:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-listview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-listview","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Listview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(315),alt:"预览"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i -S @laomao800/vue-listview\n\n"),s("span",{attrs:{class:"token comment"}},[this._v("# OR")]),this._v("\n\nyarn add @laomao800/vue-listview\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"全局注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局注册","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局注册")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("直接 import 的文件为不包含 Element-UI 的 "),s("code",[this._v("listview-component")]),this._v(" 文件，需确保项目内已有 Element-UI。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("并且可以传入一个配置对象，用于全局配置 listview 。一般可用于项目接口与默认结构不同的场景，通过全局配置可不用在每个页面内重复写诸如 "),s("code",[this._v("validateResponse")]),this._v(" 等“项目内通用”的配置。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("validateResponse")])]),t._v(" "),a("li",[a("code",[t._v("resolveResponseErrorMessage")])]),t._v(" "),a("li",[a("code",[t._v("transformRequestData")])]),t._v(" "),a("li",[a("code",[t._v("transformResponseData")])]),t._v(" "),a("li",[a("code",[t._v("contentDataMap")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'element-ui/lib/theme-chalk/index.css'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Listview "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@laomao800/vue-listview'")]),t._v("\n\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Listview"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*\nVue.use(Listview, {\n  validateResponse: response => response.different_success_status,\n  resolveResponseErrorMessage: () => 'global config error',\n  transformRequestData: requestData => {\n    requestData.addon = 'requestAddon'\n    return requestData\n  },\n  transformResponseData: response => {\n    response.addon = 'responseAddon'\n    return response\n  },\n  contentDataMap: {\n    addon: 'addon',\n    items: 'result.items',\n    total: 'result.total_count'\n  }\n})\n*/")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"局部注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部注册","aria-hidden":"true"}},[this._v("#")]),this._v(" 局部注册")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listview")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// import Vue from 'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Listview "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@laomao800/vue-listview'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*\nVue.prototype.$LISTVIEW = {\n  contentDataMap: {\n    addon: 'addon',\n    items: 'result.items',\n    total: 'result.total_count'\n  },\n  // ...\n}\n*/")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Listview\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"umd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umd","aria-hidden":"true"}},[this._v("#")]),this._v(" UMD")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listview")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//unpkg.com/vue/dist/vue.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//unpkg.com/@laomao800/vue-listview/dist/listview.umd.min.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dist-文件说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dist-文件说明","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("/dist")]),this._v(" 文件说明")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("code",[t._v("listview-component.common.js")])]),t._v(" "),a("p",[a("strong",[t._v("默认文件")]),t._v("，只包含 listview 自身功能")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("listview-component.umd.js")])]),t._v(" "),a("p",[t._v("同上的 UMD 版本")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("listview-component.umd.min.js")])]),t._v(" "),a("p",[t._v("同上的 UMD 压缩版本")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("listview.common.js")])]),t._v(" "),a("p",[t._v("包含 listview 功能和 Element-UI + css 完整库")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("listview.umd.js")])]),t._v(" "),a("p",[t._v("同上的 UMD 版本")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("listview.umd.min.js")])]),t._v(" "),a("p",[t._v("同上的 UMD 压缩版本")])])])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Vue Listview 是一个基于 "),a("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"http://element.eleme.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element-UI"),a("OutboundLink")],1),t._v(" ，可用于生成列表类的页面布局组件。")]),t._v(" "),a("p",[t._v("界面预览：")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("默认为表格类列表页，也可通过 "),a("router-link",{attrs:{to:"/dev/slots.html"}},[t._v("Slot")]),t._v(" 实现自定义列表布局。")],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("支持全局配置：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("演示： "),a("a",{attrs:{href:"https://jsfiddle.net/laomao800/92Lvg1rn/4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsfiddle"),a("OutboundLink")],1)]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("ul",[a("li",[t._v("搜索栏\n"),a("ul",[a("li",[t._v("操作按钮 "),a("router-link",{attrs:{to:"/dev/prop-filter-buttons.html"}},[t._v("《Prop: filterButtons》")])],1),t._v(" "),a("li",[t._v("搜索字段 "),a("router-link",{attrs:{to:"/dev/prop-filter-fields.html"}},[t._v("《Prop: filterFields》")])],1)])]),t._v(" "),a("li",[t._v("表格布局 "),a("router-link",{attrs:{to:"/dev/prop-table-columns.html"}},[t._v("《Prop: tableColumns》")])],1),t._v(" "),a("li",[t._v("自定义布局 "),a("router-link",{attrs:{to:"/dev/slots.html"}},[t._v("《Slot》")])],1)]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("由于 Listview 内部所有基础视图组件都来自 "),a("a",{attrs:{href:"http://element.eleme.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element-UI"),a("OutboundLink")],1),t._v(" ，因此打包文件分别有两个版本，以下为 "),a("code",[t._v("dist")]),t._v(" 目录下文件的对比说明：")]),t._v(" "),t._m(16)])},n,!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);