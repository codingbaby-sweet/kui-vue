/*! kui-vue v1.7.2 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([20],{"/3B0":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("q5tg"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);var a=t("a7E5"),s=t("XyMi"),l=Object(s.a)(i.a,a.a,a.b,!1,null,null,null);n.default=l.exports},"/Y+3":function(e,n,t){"use strict";e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,r,e.REGEXP_MODE];var a=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:a}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:a}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},"/n6Q":function(e,n,t){t("zQR9"),t("+tPU"),e.exports=t("Kh4W").f("iterator")},"06OY":function(e,n,t){var r=t("3Eo+")("meta"),i=t("EqjI"),o=t("D2L2"),a=t("evD5").f,s=0,l=Object.isExtensible||function(){return!0},c=!t("S82l")(function(){return l(Object.preventExtensions({}))}),u=function(e){a(e,r,{value:{i:"O"+ ++s,w:{}}})},d=function(e,n){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!l(e))return"F";if(!n)return"E";u(e)}return e[r].i},f=function(e,n){if(!o(e,r)){if(!l(e))return!0;if(!n)return!1;u(e)}return e[r].w},v=function(e){return c&&g.NEED&&l(e)&&!o(e,r)&&u(e),e},g=e.exports={KEY:r,NEED:!1,fastKey:d,getWeak:f,onFreeze:v}},"5QVw":function(e,n,t){e.exports={default:t("BwfY"),__esModule:!0}},"7UMu":function(e,n,t){var r=t("R9M2");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"9Q6j":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("crQ5"),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t("TgM+"),i.default.registerLanguage("xml",t("UNuV")),i.default.registerLanguage("javascript",t("/Y+3")),n.default={name:"Code",props:{lang:{type:String,default:"xml html"}},mounted:function(){var e=this.$refs.code.innerHTML.trim();this.$refs.code.innerHTML=e,i.default.highlightBlock(this.$refs.code)}}},BwfY:function(e,n,t){t("fWfb"),t("M6a0"),t("OYls"),t("QWe/"),e.exports=t("FeBl").Symbol},KKK2:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("LoadingBar 加载进度")]),e._v(" "),t("h3",[e._v("用处")]),e._v(" "),t("p",[e._v("全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条")]),e._v(" "),t("h3",[e._v("在路由中使用")]),e._v(" "),t("Code",{attrs:{lang:"javascript"}},[e._v(e._s(e.code.useInRouter))]),e._v(" "),t("h3",[e._v("在异步请求中使用")]),e._v(" "),t("Code",{attrs:{lang:"javascript"}},[e._v(e._s(e.code.useInAjax))]),e._v(" "),t("Demo",{attrs:{title:"模拟请求"}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("Button",{on:{click:function(n){e.start("line")}}},[e._v("start")]),e._v(" "),t("Button",{on:{click:e.finish}},[e._v("finish")]),e._v(" "),t("Button",{on:{click:e.error}},[e._v("error")]),e._v(" "),t("Button",{on:{click:e.config}},[e._v("config")]),e._v(" "),t("Button",{on:{click:function(n){e.upload(30)}}},[e._v("upload 30")]),e._v(" "),t("Button",{on:{click:function(n){e.upload(80)}}},[e._v("upload 80")])],1),e._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("code",[e._v("start")]),e._v("触发开始，\n                "),t("code",[e._v("finish")]),e._v("结束，\n                "),t("code",[e._v("upload")]),e._v("可以手动更新进度\n            ")]),e._v(" "),t("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.test))])]),e._v(" "),t("Demo",{attrs:{title:"主题"}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("Button",{on:{click:function(n){e.loading("flip")}}},[e._v("flip")]),e._v(" "),t("Button",{on:{click:function(n){e.loading("bounce")}}},[e._v("bounce")]),e._v(" "),t("Button",{on:{click:function(n){e.loading("zoom")}}},[e._v("zoom")]),e._v(" "),t("Button",{on:{click:function(n){e.loading("rotate")}}},[e._v("rotate")])],1),e._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("用\n                "),t("code",[e._v("Loading")]),e._v("来 表示异步加载，不只是单纯的加载进度，很多种情况下，在异步加载的时候，不允许用户再一次进行操作，所以这种情况，建议使用以下几种方式进行模拟，在此种模拟方式的时候，默认会弹出透明浮层，直到\n                "),t("code",[e._v("finish")]),e._v(" 才可以进行第二操作。")]),e._v(" "),t("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.theme))])]),e._v(" "),t("h3",[e._v("API")]),e._v(" "),t("p",[e._v("通过直接调用以下方法来使用组件：")]),e._v(" "),t("Code",{attrs:{lang:"js"}},[e._v("\nthis.$Loading.start()\nthis.$Loading.finish()\nthis.$Loading.error()\nthis.$Loading.update(percent)\n        ")]),e._v(" "),t("p",[e._v("另外提供了全局配置和全局销毁的方法：")]),e._v(" "),t("Code",{attrs:{lang:"js"}},[e._v("\nthis.$Loading.config(options)\nthis.$Loading.destroy()\n        ")]),e._v(" "),e._m(0)],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"table-border"},[t("table",[t("tr",[t("th",[e._v("属性")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")])]),e._v(" "),t("tr",[t("td",[e._v("type")]),e._v(" "),t("td",[e._v("进度的主题，可取值为 line，zoom，flip，bounce，rotate")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("line")])]),e._v(" "),t("tr",[t("td",[e._v("loading-text")]),e._v(" "),t("td",[e._v("加载中的文字提示，type为line无效")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("空")])]),e._v(" "),t("tr",[t("td",[e._v("color")]),e._v(" "),t("td",[e._v("进度条的颜色，type为line 有效")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("默认为主题颜色")])]),e._v(" "),t("tr",[t("td",[e._v("height")]),e._v(" "),t("td",[e._v("进度条的高度，type为line 有效 ")]),e._v(" "),t("td",[e._v("String，Number")]),e._v(" "),t("td",[e._v("2")])]),e._v(" "),t("tr",[t("td",[e._v("start")]),e._v(" "),t("td",[e._v("开始从 0 显示进度条，并自动加载进度，type为line有效，可传参[type,loading-text] ")]),e._v(" "),t("td",[e._v("Function")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("finish")]),e._v(" "),t("td",[e._v("结束进度条，自动补全剩余进度，type为line有效")]),e._v(" "),t("td",[e._v("Function")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("error")]),e._v(" "),t("td",[e._v("以错误的类型结束进度条，自动补全剩余进度 ，type为line有效")]),e._v(" "),t("td",[e._v("Function")]),e._v(" "),t("td",[e._v("-")])]),e._v(" "),t("tr",[t("td",[e._v("update")]),e._v(" "),t("td",[e._v("精确加载到指定的进度，type为line有效")]),e._v(" "),t("td",[e._v("Function")]),e._v(" "),t("td",[e._v("-")])])])])}]},KV5x:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#a626a4}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#986801}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}",""])},Kh4W:function(e,n,t){n.f=t("dSzd")},LKZe:function(e,n,t){var r=t("NpIQ"),i=t("X8DO"),o=t("TcQ7"),a=t("MmMw"),s=t("D2L2"),l=t("SfB7"),c=Object.getOwnPropertyDescriptor;n.f=t("+E39")?c:function(e,n){if(e=o(e),n=a(n,!0),l)try{return c(e,n)}catch(e){}if(s(e,n))return i(!r.f.call(e,n),e[n])}},"M/SF":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={};r.useInRouter="import kui from 'kui-vue';\nVue.use(kui);\n\nrouter.beforeEach((to, from, next) => {\n    kui.Loading.start();\n    next();\n});\n\nrouter.afterEach(route => {\n    kui.Loading.finish();\n});",r.useInAjax="<script>\n// 以jQuery的Ajax为例，部分代码省略\nimport $ from 'jquery';\nexport default {\n    methods: {\n        getData () {\n            this.$Loading.start();\n            $.ajax({\n                url: '/api/someurl',\n                type: 'get',\n                success: () => {\n                    this.$Loading.finish();\n                }\n                error: () => {\n                    this.$Loading.error();\n                }\n            });\n        }\n    }\n}\n<\/script>",r.test='<Button @click="start()">start</Button>\n<Button @click="finish">finish</Button>\n<Button @click="error">error</Button>\n<Button @click="config">config</Button>\n<Button @click="upload(30)">upload 30</Button>\n<Button @click="upload(80)">upload 80</Button>\n<script>\n  methods: {\n    config() {\n      this.$Loading.config({\n        type: "line",\n        color: "orange",\n        height: 10\n      });\n    },\n    upload(percent){\n        this.$Loading.upload(percent);\n    },\n    start() {\n      this.$Loading.start();\n    },\n    finish() {\n      this.$Loading.finish();\n    },\n    error() {\n      this.$Loading.error();\n    }\n  }\n<\/script>',r.theme="<Button @click=\"loading('flip')\">flip</Button>\n<Button @click=\"loading('bounce')\">bounce</Button>\n<Button @click=\"loading('zoom')\">zoom</Button>\n<Button @click=\"loading('rotate')\">rotate</Button>\n<script>\n...\nmethods: {\n    loading(type) {\n        this.$Loading.start(type);\n        setTimeout(() => {\n            this.finish();\n        }, 3000);\n    },\n}\n...\n<\/script>",n.default=r},M6a0:function(e,n){},OYls:function(e,n,t){t("crlp")("asyncIterator")},OvRC:function(e,n,t){e.exports={default:t("oM7Q"),__esModule:!0}},"QWe/":function(e,n,t){t("crlp")("observable")},Rrel:function(e,n,t){var r=t("TcQ7"),i=t("n0T6").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},"TgM+":function(e,n,t){var r=t("KV5x");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;t("MTIv")(r,i);r.locals&&(e.exports=r.locals)},UNuV:function(e,n,t){"use strict";e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},Xc4G:function(e,n,t){var r=t("lktj"),i=t("1kS7"),o=t("NpIQ");e.exports=function(e){var n=r(e),t=i.f;if(t)for(var a,s=t(e),l=o.f,c=0;s.length>c;)l.call(e,a=s[c++])&&n.push(a);return n}},Zzip:function(e,n,t){e.exports={default:t("/n6Q"),__esModule:!0}},a7E5:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[t("div",{ref:"demo",staticClass:"k-demo-main"},[t("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),t("div",{staticClass:"k-desc"},[t("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),t("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[t("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),t("div",{staticClass:"k-demo-line"}),e._v(" "),t("Code",{ref:"code",style:e.codeStyles,attrs:{lang:e.lang}},[e._t("code")],2)],1)},i=[]},cBrd:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"k-code"},[t("pre",[e._v("  "),t("code",{ref:"code",class:e.lang},[e._v("\n    "),e._t("default"),e._v("\n  ")],2),e._v("\n  ")])])},i=[]},crQ5:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=t("OvRC"),o=r(i),a=t("fZjL"),s=r(a),l=t("pFYg"),c=r(l);!function(e){"object"===("undefined"==typeof window?"undefined":(0,c.default)(window))&&window||"object"===("undefined"==typeof self?"undefined":(0,c.default)(self))&&self;e(n)}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function i(e){return R.test(e)}function a(e){var n,t,r,o,a=e.className+" ";if(a+=e.parentNode?e.parentNode.className:"",t=j.exec(a))return O(t[1])?t[1]:"no-highlight";for(a=a.split(/\s+/),n=0,r=a.length;n<r;n++)if(o=a[n],i(o)||O(o))return o}function l(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function c(e){var n=[];return function e(r,i){for(var o=r.firstChild;o;o=o.nextSibling)3===o.nodeType?i+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:i,node:o}),i=e(o,i),t(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:o}));return i}(e,0),n}function u(e,r,i){function o(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function a(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}u+="<"+t(e)+N.map.call(e.attributes,r).join("")+">"}function s(e){u+="</"+t(e)+">"}function l(e){("start"===e.event?a:s)(e.node)}for(var c=0,u="",d=[];e.length||r.length;){var f=o();if(u+=n(i.substring(c,f[0].offset)),c=f[0].offset,f===e){d.reverse().forEach(s);do{l(f.splice(0,1)[0]),f=o()}while(f===e&&f.length&&f[0].offset===c);d.reverse().forEach(a)}else"start"===f[0].event?d.push(f[0].node):d.pop(),l(f.splice(0,1)[0])}return u+n(i.substr(c))}function d(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return l(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[l(e)]||[e]}function f(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(i,o){if(!i.compiled){if(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords){var a={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");a[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.keywords?s("keyword",i.keywords):w(i.keywords).forEach(function(e){s(e,i.keywords[e])}),i.keywords=a}i.lexemesRe=t(i.lexemes||/\w+/,!0),o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=t(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=t(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&o.terminator_end&&(i.terminator_end+=(i.end?"|":"")+o.terminator_end)),i.illegal&&(i.illegalRe=t(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return d("self"===e?i:e)})),i.contains.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,o);var l=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function v(e,t,i,a){function s(e,n){var t,i;for(t=0,i=n.contains.length;t<i;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function l(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return l(e.parent,n)}function c(e,n){return!i&&r(n.illegalRe,e)}function u(e,n){var t=y.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function d(e,n,t,r){var i=r?"":L.classPrefix,o='<span class="'+i,a=t?"":B;return(o+=e+'">')+n+a}function _(){var e,t,r,i;if(!M.keywords)return n(S);for(i="",t=0,M.lexemesRe.lastIndex=0,r=M.lexemesRe.exec(S);r;)i+=n(S.substring(t,r.index)),e=u(M,r),e?(R+=e[1],i+=d(e[0],n(r[0]))):i+=n(r[0]),t=M.lexemesRe.lastIndex,r=M.lexemesRe.exec(S);return i+n(S.substr(t))}function h(){var e="string"==typeof M.subLanguage;if(e&&!x[M.subLanguage])return n(S);var t=e?v(M.subLanguage,S,!0,N[M.subLanguage]):g(S,M.subLanguage.length?M.subLanguage:void 0);return M.relevance>0&&(R+=t.relevance),e&&(N[M.subLanguage]=t.top),d(t.language,t.value,!1,!0)}function p(){w+=null!=M.subLanguage?h():_(),S=""}function m(e){w+=e.className?d(e.className,"",!0):"",M=(0,o.default)(e,{parent:{value:M}})}function b(e,n){if(S+=e,null==n)return p(),0;var t=s(n,M);if(t)return t.skip?S+=n:(t.excludeBegin&&(S+=n),p(),t.returnBegin||t.excludeBegin||(S=n)),m(t,n),t.returnBegin?0:n.length;var r=l(M,n);if(r){var i=M;i.skip?S+=n:(i.returnEnd||i.excludeEnd||(S+=n),p(),i.excludeEnd&&(S=n));do{M.className&&(w+=B),M.skip||(R+=M.relevance),M=M.parent}while(M!==r.parent);return r.starts&&m(r.starts,""),i.returnEnd?0:n.length}if(c(n,M))throw new Error('Illegal lexeme "'+n+'" for mode "'+(M.className||"<unnamed>")+'"');return S+=n,n.length||1}var y=O(e);if(!y)throw new Error('Unknown language: "'+e+'"');f(y);var E,M=a||y,N={},w="";for(E=M;E!==y;E=E.parent)E.className&&(w=d(E.className,"",!0)+w);var S="",R=0;try{for(var j,k,C=0;;){if(M.terminators.lastIndex=C,!(j=M.terminators.exec(t)))break;k=b(t.substring(C,j.index),j[0]),C=j.index+k}for(b(t.substr(C)),E=M;E.parent;E=E.parent)E.className&&(w+=B);return{relevance:R,value:w,language:e,top:M}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw e}}function g(e,t){t=t||L.languages||w(x);var r={relevance:0,value:n(e)},i=r;return t.filter(O).forEach(function(n){var t=v(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>r.relevance&&(i=r,r=t)}),i.language&&(r.second_best=i),r}function _(e){return L.tabReplace||L.useBR?e.replace(k,function(e,n){return L.useBR&&"\n"===e?"<br>":L.tabReplace?n.replace(/\t/g,L.tabReplace):""}):e}function h(e,n,t){var r=n?S[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}function p(e){var n,t,r,o,s,l=a(e);i(l)||(L.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,s=n.textContent,r=l?v(l,s,!0):g(s),t=c(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=u(t,c(o),s)),r.value=_(r.value),e.innerHTML=r.value,e.className=h(e.className,l,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function m(e){L=l(L,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");N.forEach.call(e,p)}}function y(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function E(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){S[e]=n})}function M(){return w(x)}function O(e){return e=(e||"").toLowerCase(),x[e]||x[S[e]]}var N=[],w=s.default,x={},S={},R=/^(no-?highlight|plain|text)$/i,j=/\blang(?:uage)?-([\w-]+)\b/i,k=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,B="</span>",L={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=v,e.highlightAuto=g,e.fixMarkup=_,e.highlightBlock=p,e.configure=m,e.initHighlighting=b,e.initHighlightingOnLoad=y,e.registerLanguage=E,e.listLanguages=M,e.getLanguage=O,e.inherit=l,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var i=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},crlp:function(e,n,t){var r=t("7KvD"),i=t("FeBl"),o=t("O4g8"),a=t("Kh4W"),s=t("evD5").f;e.exports=function(e){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in n||s(n,e,{value:a.f(e)})}},fWfb:function(e,n,t){"use strict";var r=t("7KvD"),i=t("D2L2"),o=t("+E39"),a=t("kM2E"),s=t("880/"),l=t("06OY").KEY,c=t("S82l"),u=t("e8AB"),d=t("e6n0"),f=t("3Eo+"),v=t("dSzd"),g=t("Kh4W"),_=t("crlp"),h=t("Xc4G"),p=t("7UMu"),m=t("77Pl"),b=t("EqjI"),y=t("TcQ7"),E=t("MmMw"),M=t("X8DO"),O=t("Yobk"),N=t("Rrel"),w=t("LKZe"),x=t("evD5"),S=t("lktj"),R=w.f,j=x.f,k=N.f,B=r.Symbol,L=r.JSON,C=L&&L.stringify,T=v("_hidden"),D=v("toPrimitive"),A={}.propertyIsEnumerable,I=u("symbol-registry"),P=u("symbols"),$=u("op-symbols"),K=Object.prototype,U="function"==typeof B,H=r.QObject,F=!H||!H.prototype||!H.prototype.findChild,z=o&&c(function(){return 7!=O(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,n,t){var r=R(K,n);r&&delete K[n],j(e,n,t),r&&e!==K&&j(K,n,r)}:j,Q=function(e){var n=P[e]=O(B.prototype);return n._k=e,n},W=U&&"symbol"==typeof B.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof B},Y=function(e,n,t){return e===K&&Y($,n,t),m(e),n=E(n,!0),m(t),i(P,n)?(t.enumerable?(i(e,T)&&e[T][n]&&(e[T][n]=!1),t=O(t,{enumerable:M(0,!1)})):(i(e,T)||j(e,T,M(1,{})),e[T][n]=!0),z(e,n,t)):j(e,n,t)},G=function(e,n){m(e);for(var t,r=h(n=y(n)),i=0,o=r.length;o>i;)Y(e,t=r[i++],n[t]);return e},X=function(e,n){return void 0===n?O(e):G(O(e),n)},q=function(e){var n=A.call(this,e=E(e,!0));return!(this===K&&i(P,e)&&!i($,e))&&(!(n||!i(this,e)||!i(P,e)||i(this,T)&&this[T][e])||n)},V=function(e,n){if(e=y(e),n=E(n,!0),e!==K||!i(P,n)||i($,n)){var t=R(e,n);return!t||!i(P,n)||i(e,T)&&e[T][n]||(t.enumerable=!0),t}},Z=function(e){for(var n,t=k(y(e)),r=[],o=0;t.length>o;)i(P,n=t[o++])||n==T||n==l||r.push(n);return r},J=function(e){for(var n,t=e===K,r=k(t?$:y(e)),o=[],a=0;r.length>a;)!i(P,n=r[a++])||t&&!i(K,n)||o.push(P[n]);return o};U||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),n=function(t){this===K&&n.call($,t),i(this,T)&&i(this[T],e)&&(this[T][e]=!1),z(this,e,M(1,t))};return o&&F&&z(K,e,{configurable:!0,set:n}),Q(e)},s(B.prototype,"toString",function(){return this._k}),w.f=V,x.f=Y,t("n0T6").f=N.f=Z,t("NpIQ").f=q,t("1kS7").f=J,o&&!t("O4g8")&&s(K,"propertyIsEnumerable",q,!0),g.f=function(e){return Q(v(e))}),a(a.G+a.W+a.F*!U,{Symbol:B});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;ee.length>ne;)v(ee[ne++]);for(var te=S(v.store),re=0;te.length>re;)_(te[re++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return i(I,e+="")?I[e]:I[e]=B(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var n in I)if(I[n]===e)return n},useSetter:function(){F=!0},useSimple:function(){F=!1}}),a(a.S+a.F*!U,"Object",{create:X,defineProperty:Y,defineProperties:G,getOwnPropertyDescriptor:V,getOwnPropertyNames:Z,getOwnPropertySymbols:J}),L&&a(a.S+a.F*(!U||c(function(){var e=B();return"[null]"!=C([e])||"{}"!=C({a:e})||"{}"!=C(Object(e))})),"JSON",{stringify:function(e){for(var n,t,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(t=n=r[1],(b(n)||void 0!==e)&&!W(e))return p(n)||(n=function(e,n){if("function"==typeof t&&(n=t.call(this,e,n)),!W(n))return n}),r[1]=n,C.apply(L,r)}}),B.prototype[D]||t("hJx8")(B.prototype,D,B.prototype.valueOf),d(B,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},iyk7:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("M/SF"),o=r(i),a=t("m7h3"),s=r(a),l=t("nOWh"),c=r(l);n.default={components:{Demo:s.default,Code:c.default},data:function(){return{code:o.default}},methods:{config:function(){this.$Loading.config({type:"line",color:"orange",height:10})},upload:function(e){this.$Loading.upload(e)},start:function(e){this.$Loading.start(e)},loading:function(e){var n=this;this.$Loading.start(e),setTimeout(function(){n.finish()},3e3)},finish:function(){this.$Loading.finish()},error:function(){this.$Loading.error()}}}},m7h3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("/3B0"),i=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default=i.default},n0T6:function(e,n,t){var r=t("Ibhu"),i=t("xnc9").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},nOWh:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("qTzf"),i=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default=i.default},oM7Q:function(e,n,t){t("sF+V");var r=t("FeBl").Object;e.exports=function(e,n){return r.create(e,n)}},pFYg:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=t("Zzip"),o=r(i),a=t("5QVw"),s=r(a),l="function"==typeof s.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};n.default="function"==typeof s.default&&"symbol"===l(o.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":l(e)}},q5tg:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("bOdI"),o=r(i),a=t("nOWh"),s=r(a),l=t("hpE5"),c=r(l);n.default={directives:{resize:c.default},components:{Code:s.default},name:"Demo",props:{layout:{type:String,default:"horizontal"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},qTzf:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("9Q6j"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);var a=t("cBrd"),s=t("XyMi"),l=Object(s.a)(i.a,a.a,a.b,!1,null,null,null);n.default=l.exports},rBEK:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("iyk7"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);var a=t("KKK2"),s=t("XyMi"),l=Object(s.a)(i.a,a.a,a.b,!1,null,null,null);n.default=l.exports},"sF+V":function(e,n,t){var r=t("kM2E");r(r.S,"Object",{create:t("Yobk")})}});