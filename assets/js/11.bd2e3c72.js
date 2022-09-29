(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{411:function(a,s,t){a.exports=t.p+"assets/img/img202111231918334.c3703b94.png"},451:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-下载软件-解压安装并授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载软件-解压安装并授权"}},[a._v("#")]),a._v(" 1.下载软件 解压安装并授权")]),a._v(" "),s("p",[a._v("仓库地址如下")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("https://github.com/Dreamacro/clash\n")])])]),s("p",[a._v("也可以用wget")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/Dreamacro/clash/releases/download/v0.15.0/clash-linux-amd64-v0.15.0.gz\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" clash-linux-amd64-v0.15.0.gz "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#解压")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" clash-linux-amd64-v0.15.0 /usr/local/bin/clash "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#移动到bin")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x /usr/local/bin/clash "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加执行权限")]),a._v("\n")])])]),s("h2",{attrs:{id:"_2-设置成服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置成服务"}},[a._v("#")]),a._v(" 2.设置成服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/systemd/system/clash.service\n")])])]),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Unit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("clash service")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("After")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("network.target")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("simple")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("root")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/usr/local/bin/clash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("on-failure # or always, on-abort, etc")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("multi-user.target")]),a._v("\n")])])]),s("p",[a._v("然后设置clash开机启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl daemon-reload\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" clash\n")])])]),s("h2",{attrs:{id:"_3-配置clash-以及面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置clash-以及面板"}},[a._v("#")]),a._v(" 3.配置clash 以及面板")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" clash start\n")])])]),s("p",[a._v("第一次启动会在 ~/.config/clash 初始化配置文件")]),a._v(" "),s("p",[a._v("然后下载面板文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/.config/clash\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/haishanh/yacd/archive/gh-pages.zip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" gh-pages.zip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" yacd-gh-pages/ dashboard/\n")])])]),s("p",[a._v("然后修改我们自己的配置")]),a._v(" "),s("p",[s("img",{attrs:{src:t(411),alt:"image-20211123191742198"}})]),a._v(" "),s("p",[a._v("可以直接复制windows版本的clash里面的配置文件 然后修改少量的地方")]),a._v(" "),s("p",[a._v("在配置文件中加上/修改如下")]),a._v(" "),s("p",[a._v("secret就是api的访问秘钥 如果没有的话任何人都可以访问你的clash面板的api 不安全")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("secret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxxx\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("external-controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9090")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#别忘记在服务器厂商开放端口号")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("external-ui")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#打开面板")]),a._v("\n")])])]),s("p",[a._v("修改后记得重启服务")]),a._v(" "),s("p",[a._v("然后就可以访问")]),a._v(" "),s("p",[a._v("http://serverip:9090/ui/")])])}),[],!1,null,null,null);s.default=n.exports}}]);