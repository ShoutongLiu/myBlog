(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{497:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAABbCAYAAAB9J063AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAALSSURBVHic7dwvclNhFMbhc5guoTauQeBqyQqKQmGRkalhBzgMkcVhUbisIF0EyQ66iIsImWHSP7TMQNI3zzMT09uTuerXb850vr65uRkKgBjn5+fV3VVV1d31Ys/vA8A/JvQA4YQeIJzQA4QTeoBwQg8QTugBwgk9QDihBwgn9ADhhB4gnNADhBN6gHBCDxBO6AHCCT1AOKEHCCf0AOGEHiCc0AOEE3qAcEIPEE7oAcIJPUA4oQcIJ/QA4YQeIJzQA4QTeoBwQg8QTugBwgk9QDihBwgn9ADhhB4gnNADhBN6gHBCDxBO6AHCCT1AOKEHCCf0AOGEHiCc0AOEE3qAcEIPEE7oAcIJPUA4oQcIJ/QA4YQeIJzQA4QTeoBwJ6enp/t+BwD+ISd6gHBCDxBO6AHCCT1AOKEHCCf0AOGEHiCc0B+lRU27a7p44tS0q586BOxdD8Mw7Psl+P/W80mNv72r1XJWZ4+aWNS0P9ar1bJmjxsA9mQ0GlV3V1VVdzvRx1vPa9JdvfMZX15XXV/W+NazSc3Xm9HF9Pefv6kvdV2X49vf1d012Q4BB0foj8Hrz7Uahhr++FnV59e7o6s/zq12h4CDIvRHZj2fVPe0Npv2dc0nXT2Zl/M45BL6dGezWi5ntfq1hnlfX2sYrupi87Bmy6GGr1Xvu6v7U71c2sFDGqEPt92zf3+7WbMs76r42ayWw1DD8La+7+zbry/Hd+7kb+37gYMl9OEurja791cfH451d1dPftSHnT8GdvTw/An9Ufi1otmJ862IP/pfLYHnROgBwgk9D7Kjh+dP6NMtpvfG+b6I/37LgR09PH+uQAAI4woEgCMj9ADhhB4gnNADhBN6gHBCDxBO6AHCCT1AOKEHCCf0AOGEHiDM9vqDLaEHCCf0AKG2J/uT0Wh05y+41BLgcO2uZx56dvI3XwLAYbqr3Sf3Bd2JHuBwPeUw/hP1BfFHjFLuMgAAAABJRU5ErkJggg=="},521:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("最近在做微信小程序的时候要做一个loading蒙版，高度给了100%，简单调试了一下，嗯，还是不错的，但是切到iPhone X的时候发现底部有一块空白，没有到底。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(497),alt:"空白"}})]),t._v(" "),n("p",[t._v("在手机上调试也可以看到这块空白。接下来就介绍一种解决的方式。")]),t._v(" "),n("h2",{attrs:{id:"编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编码","aria-hidden":"true"}},[t._v("#")]),t._v(" 编码")]),t._v(" "),n("p",[t._v("首先我们先判断手机的型号，如果是iPhone X 或者是iPhone XS之类的手机就做处理。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义全局data")]),t._v("\n    globalData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        isIpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLaunch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取手机型号")]),t._v("\n        wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone X'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone XS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    that"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isIpx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("然后我们给iPhone X加上和正常的手机各一套css样式")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* app.wxss */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fix-iphonex-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1448rpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fix-iphonex-button::after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1206rpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("最后在需要的view盒子通过动态class来加上样式")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container {{isIpx?'fix-iphonex-button':'fix-iphonex-button::after'}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    .....内容\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("底部空白完美解决，手机预览一下，空白没有，切换到其他型号的手机，也没问题。")]),t._v(" "),n("Vssue",{attrs:{title:"Vssue wx_iPhone"}})],1)},[],!1,null,null,null);s.default=e.exports}}]);