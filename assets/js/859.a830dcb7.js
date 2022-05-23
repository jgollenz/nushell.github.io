(window.webpackJsonp=window.webpackJsonp||[]).push([[859],{1374:function(a,s,t){"use strict";t.r(s);var e=t(35),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[a._v("#")]),a._v(" 别名")]),a._v(" "),t("p",[a._v("Nushell 中的别名提供了一种简单的文本替换方式，这允许你为一个较长的命令创建一个简写名称，包括其默认参数。")]),a._v(" "),t("p",[a._v("例如，让我们创建一个名为 "),t("code",[a._v("ll")]),a._v(" 的别名，它将展开为 "),t("code",[a._v("ls -l")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" ll "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l\n")])])]),t("p",[a._v("我们可以通过别名来调用它：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ll\n")])])]),t("p",[a._v("一旦我们这样做了，就如同我们输入了 "),t("code",[a._v("ls -l")]),a._v(" 一样。这也允许我们传入标志或位置参数。例如，我们现在也可以这样写：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> ll -a\n")])])]),t("p",[a._v("可得到与输入了"),t("code",[a._v("ls -l -a")]),a._v("一样的结果。")]),a._v(" "),t("h2",{attrs:{id:"编写带有管道的别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写带有管道的别名"}},[a._v("#")]),a._v(" 编写带有管道的别名")]),a._v(" "),t("p",[a._v("如果你想在别名中添加管道，你必须用小括号把它括起来，小括号是一对圆括号"),t("code",[a._v("()")]),a._v("，用来标记你的一组带有管道命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" lsname "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("下面是一个带有多个管道的别名：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" lt "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by modified -r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h2",{attrs:{id:"持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[a._v("#")]),a._v(" 持久化")]),a._v(" "),t("p",[a._v("为了使你的别名持久化，它必须被添加到你的 "),t("em",[a._v("config.nu")]),a._v(" 文件中。\n关于如何持久化别名，以便在你启动 Nushell 时它们是可用的，请参考 "),t("RouterLink",{attrs:{to:"/zh-CN/book/configuration.html"}},[a._v("配置")]),a._v(" 部分。")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);