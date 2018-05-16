/*! kui-vue v1.7.2 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([31],{"/3B0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q5tg"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var i=n("a7E5"),s=n("XyMi"),l=Object(s.a)(a.a,i.a,i.b,!1,null,null,null);t.default=l.exports},"/Y+3":function(e,t,n){"use strict";e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,r,e.REGEXP_MODE];var i=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:i}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:i}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},"/n6Q":function(e,t,n){n("zQR9"),n("+tPU"),e.exports=n("Kh4W").f("iterator")},"06OY":function(e,t,n){var r=n("3Eo+")("meta"),a=n("EqjI"),o=n("D2L2"),i=n("evD5").f,s=0,l=Object.isExtensible||function(){return!0},c=!n("S82l")(function(){return l(Object.preventExtensions({}))}),u=function(e){i(e,r,{value:{i:"O"+ ++s,w:{}}})},d=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!l(e))return"F";if(!t)return"E";u(e)}return e[r].i},f=function(e,t){if(!o(e,r)){if(!l(e))return!0;if(!t)return!1;u(e)}return e[r].w},g=function(e){return c&&v.NEED&&l(e)&&!o(e,r)&&u(e),e},v=e.exports={KEY:r,NEED:!1,fastKey:d,getWeak:f,onFreeze:g}},"5QVw":function(e,t,n){e.exports={default:n("BwfY"),__esModule:!0}},"7UMu":function(e,t,n){var r=n("R9M2");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"9Q6j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("crQ5"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n("TgM+"),a.default.registerLanguage("xml",n("UNuV")),a.default.registerLanguage("javascript",n("/Y+3")),t.default={name:"Code",props:{lang:{type:String,default:"xml html"}},mounted:function(){var e=this.$refs.code.innerHTML.trim();this.$refs.code.innerHTML=e,a.default.highlightBlock(this.$refs.code)}}},BwfY:function(e,t,n){n("fWfb"),n("M6a0"),n("OYls"),n("QWe/"),e.exports=n("FeBl").Symbol},CZOF:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("m7h3"),o=r(a),i=n("xfne"),s=r(i);t.default={components:{Demo:o.default},data:function(){return{m:1,code:s.default}}}},HbyT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("CZOF"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var i=n("SIR8"),s=n("XyMi"),l=Object(s.a)(a.a,i.a,i.b,!1,null,null,null);t.default=l.exports},KV5x:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#a626a4}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#986801}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}",""])},Kh4W:function(e,t,n){t.f=n("dSzd")},LKZe:function(e,t,n){var r=n("NpIQ"),a=n("X8DO"),o=n("TcQ7"),i=n("MmMw"),s=n("D2L2"),l=n("SfB7"),c=Object.getOwnPropertyDescriptor;t.f=n("+E39")?c:function(e,t){if(e=o(e),t=i(t,!0),l)try{return c(e,t)}catch(e){}if(s(e,t))return a(!r.f.call(e,t),e[t])}},M6a0:function(e,t){},OYls:function(e,t,n){n("crlp")("asyncIterator")},OvRC:function(e,t,n){e.exports={default:n("oM7Q"),__esModule:!0}},"QWe/":function(e,t,n){n("crlp")("observable")},Rrel:function(e,t,n){var r=n("TcQ7"),a=n("n0T6").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(e){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?s(e):a(r(e))}},SIR8:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Badge 徽标")]),e._v(" "),n("h3",[e._v("代码示例")]),e._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"基础"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{count:"3"}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[e._v("Badge")]),e._v("基础使用")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"点"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{dot:""}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),e._v(" "),n("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[n("Icon",{attrs:{type:"ios-calendar-outline",size:"50",color:"orange"}})],1),e._v(" "),n("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[n("a",{attrs:{href:"#"}},[e._v("我是一个连接")])])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("设置\n        "),n("code",[e._v("dot")]),e._v("来展示一个点")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.dot))])])],1)],1),e._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"数字隐藏"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{count:"100","max-count":"99"}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),e._v(" "),n("Badge",{staticStyle:{"margin-left":"60px"},attrs:{count:"10055","max-count":"999"}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("数字模式超出隐藏，设置\n        "),n("code",[e._v("max-count")]),e._v("配合\n        "),n("code",[e._v("count")])]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.maxCount))])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"颜色"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{count:"100","max-count":"99",color:"orange"}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),e._v(" "),n("Badge",{staticStyle:{"margin-left":"60px"},attrs:{dot:"",color:"green"}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[e._v("color")]),e._v("属性可以自定义颜色")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.color))])])],1)],1),e._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"单独使用"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{staticStyle:{"margin-left":"20px"},attrs:{count:"10"}}),e._v(" "),n("Badge",{staticStyle:{"margin-left":"40px"},attrs:{count:"20",color:"blue"}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.badge))])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"组合使用"}},[n("div",{attrs:{slot:"content"},slot:"content"},e._l(e.m,function(t){return n("div",{key:t,staticStyle:{margin:"15px 0"}},[n("Badge",{attrs:{count:"+"},on:{onClick:function(){e.m++}}},[n("Button",[e._v("增加")])],1),e._v(" "),n("Badge",{staticStyle:{"margin-left":"20px"},attrs:{count:"-"},on:{onClick:function(){1!=e.m&&e.m--}}},[n("Input",{attrs:{width:"200"}})],1)],1)})),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("Badge的使用场景不光是数字或者是提醒的展示，在很多场合可以当按钮使用")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.other))])])],1)],1),e._v(" "),n("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("count")]),e._v(" "),n("td",[e._v("显示的文字")]),e._v(" "),n("td",[e._v("String，Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("max-count")]),e._v(" "),n("td",[e._v("展示封顶的数字值，高于的部分会以+号显示")]),e._v(" "),n("td",[e._v("String，Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("dot")]),e._v(" "),n("td",[e._v("不展示数字，只有一个小红点")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("onClick")]),e._v(" "),n("td",[e._v("点击事件的回调")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])}]},"TgM+":function(e,t,n){var r=n("KV5x");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0,a.insertInto=void 0;n("MTIv")(r,a);r.locals&&(e.exports=r.locals)},UNuV:function(e,t,n){"use strict";e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},Xc4G:function(e,t,n){var r=n("lktj"),a=n("1kS7"),o=n("NpIQ");e.exports=function(e){var t=r(e),n=a.f;if(n)for(var i,s=n(e),l=o.f,c=0;s.length>c;)l.call(e,i=s[c++])&&t.push(i);return t}},Zzip:function(e,t,n){e.exports={default:n("/n6Q"),__esModule:!0}},a7E5:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),n("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[n("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),n("div",{staticClass:"k-demo-line"}),e._v(" "),n("Code",{ref:"code",style:e.codeStyles,attrs:{lang:e.lang}},[e._t("code")],2)],1)},a=[]},cBrd:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"k-code"},[n("pre",[e._v("  "),n("code",{ref:"code",class:e.lang},[e._v("\n    "),e._t("default"),e._v("\n  ")],2),e._v("\n  ")])])},a=[]},crQ5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n("OvRC"),o=r(a),i=n("fZjL"),s=r(i),l=n("pFYg"),c=r(l);!function(e){"object"===("undefined"==typeof window?"undefined":(0,c.default)(window))&&window||"object"===("undefined"==typeof self?"undefined":(0,c.default)(self))&&self;e(t)}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0===n.index}function a(e){return R.test(e)}function i(e){var t,n,r,o,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",n=B.exec(i))return w(n[1])?n[1]:"no-highlight";for(i=i.split(/\s+/),t=0,r=i.length;t<r;t++)if(o=i[t],a(o)||w(o))return o}function l(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach(function(e){for(t in e)n[t]=e[t]}),n}function c(e){var t=[];return function e(r,a){for(var o=r.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:a,node:o}),a=e(o,a),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:o}));return a}(e,0),t}function u(e,r,a){function o(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}u+="<"+n(e)+O.map.call(e.attributes,r).join("")+">"}function s(e){u+="</"+n(e)+">"}function l(e){("start"===e.event?i:s)(e.node)}for(var c=0,u="",d=[];e.length||r.length;){var f=o();if(u+=t(a.substring(c,f[0].offset)),c=f[0].offset,f===e){d.reverse().forEach(s);do{l(f.splice(0,1)[0]),f=o()}while(f===e&&f.length&&f[0].offset===c);d.reverse().forEach(i)}else"start"===f[0].event?d.push(f[0].node):d.pop(),l(f.splice(0,1)[0])}return u+t(a.substr(c))}function d(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return l(e,{variants:null},t)})),e.cached_variants||e.endsWithParent&&[l(e)]||[e]}function f(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,o){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var i={},s=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");i[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.keywords?s("keyword",a.keywords):M(a.keywords).forEach(function(e){s(e,a.keywords[e])}),a.keywords=i}a.lexemesRe=n(a.lexemes||/\w+/,!0),o&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=n(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=n(a.end)),a.terminator_end=t(a.end)||"",a.endsWithParent&&o.terminator_end&&(a.terminator_end+=(a.end?"|":"")+o.terminator_end)),a.illegal&&(a.illegalRe=n(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return d("self"===e?a:e)})),a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,o);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(t).filter(Boolean);a.terminators=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function g(e,n,a,i){function s(e,t){var n,a;for(n=0,a=t.contains.length;n<a;n++)if(r(t.contains[n].beginRe,e))return t.contains[n]}function l(e,t){if(r(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return l(e.parent,t)}function c(e,t){return!a&&r(t.illegalRe,e)}function u(e,t){var n=y.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function d(e,t,n,r){var a=r?"":k.classPrefix,o='<span class="'+a,i=n?"":j;return(o+=e+'">')+t+i}function p(){var e,n,r,a;if(!x.keywords)return t(S);for(a="",n=0,x.lexemesRe.lastIndex=0,r=x.lexemesRe.exec(S);r;)a+=t(S.substring(n,r.index)),e=u(x,r),e?(R+=e[1],a+=d(e[0],t(r[0]))):a+=t(r[0]),n=x.lexemesRe.lastIndex,r=x.lexemesRe.exec(S);return a+t(S.substr(n))}function h(){var e="string"==typeof x.subLanguage;if(e&&!N[x.subLanguage])return t(S);var n=e?g(x.subLanguage,S,!0,O[x.subLanguage]):v(S,x.subLanguage.length?x.subLanguage:void 0);return x.relevance>0&&(R+=n.relevance),e&&(O[x.subLanguage]=n.top),d(n.language,n.value,!1,!0)}function _(){M+=null!=x.subLanguage?h():p(),S=""}function m(e){M+=e.className?d(e.className,"",!0):"",x=(0,o.default)(e,{parent:{value:x}})}function b(e,t){if(S+=e,null==t)return _(),0;var n=s(t,x);if(n)return n.skip?S+=t:(n.excludeBegin&&(S+=t),_(),n.returnBegin||n.excludeBegin||(S=t)),m(n,t),n.returnBegin?0:t.length;var r=l(x,t);if(r){var a=x;a.skip?S+=t:(a.returnEnd||a.excludeEnd||(S+=t),_(),a.excludeEnd&&(S=t));do{x.className&&(M+=j),x.skip||(R+=x.relevance),x=x.parent}while(x!==r.parent);return r.starts&&m(r.starts,""),a.returnEnd?0:t.length}if(c(t,x))throw new Error('Illegal lexeme "'+t+'" for mode "'+(x.className||"<unnamed>")+'"');return S+=t,t.length||1}var y=w(e);if(!y)throw new Error('Unknown language: "'+e+'"');f(y);var E,x=i||y,O={},M="";for(E=x;E!==y;E=E.parent)E.className&&(M=d(E.className,"",!0)+M);var S="",R=0;try{for(var B,C,D=0;;){if(x.terminators.lastIndex=D,!(B=x.terminators.exec(n)))break;C=b(n.substring(D,B.index),B[0]),D=B.index+C}for(b(n.substr(D)),E=x;E.parent;E=E.parent)E.className&&(M+=j);return{relevance:R,value:M,language:e,top:x}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:t(n)};throw e}}function v(e,n){n=n||k.languages||M(N);var r={relevance:0,value:t(e)},a=r;return n.filter(w).forEach(function(t){var n=g(t,e,!1);n.language=t,n.relevance>a.relevance&&(a=n),n.relevance>r.relevance&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function p(e){return k.tabReplace||k.useBR?e.replace(C,function(e,t){return k.useBR&&"\n"===e?"<br>":k.tabReplace?t.replace(/\t/g,k.tabReplace):""}):e}function h(e,t,n){var r=t?S[t]:n,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function _(e){var t,n,r,o,s,l=i(e);a(l)||(k.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,s=t.textContent,r=l?g(l,s,!0):v(s),n=c(t),n.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=u(n,c(o),s)),r.value=p(r.value),e.innerHTML=r.value,e.className=h(e.className,l,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function m(e){k=l(k,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");O.forEach.call(e,_)}}function y(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function E(t,n){var r=N[t]=n(e);r.aliases&&r.aliases.forEach(function(e){S[e]=t})}function x(){return M(N)}function w(e){return e=(e||"").toLowerCase(),N[e]||N[S[e]]}var O=[],M=s.default,N={},S={},R=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,C=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,j="</span>",k={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=g,e.highlightAuto=v,e.fixMarkup=p,e.highlightBlock=_,e.configure=m,e.initHighlighting=b,e.initHighlightingOnLoad=y,e.registerLanguage=E,e.listLanguages=x,e.getLanguage=w,e.inherit=l,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,r){var a=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},crlp:function(e,t,n){var r=n("7KvD"),a=n("FeBl"),o=n("O4g8"),i=n("Kh4W"),s=n("evD5").f;e.exports=function(e){var t=a.Symbol||(a.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:i.f(e)})}},fWfb:function(e,t,n){"use strict";var r=n("7KvD"),a=n("D2L2"),o=n("+E39"),i=n("kM2E"),s=n("880/"),l=n("06OY").KEY,c=n("S82l"),u=n("e8AB"),d=n("e6n0"),f=n("3Eo+"),g=n("dSzd"),v=n("Kh4W"),p=n("crlp"),h=n("Xc4G"),_=n("7UMu"),m=n("77Pl"),b=n("EqjI"),y=n("TcQ7"),E=n("MmMw"),x=n("X8DO"),w=n("Yobk"),O=n("Rrel"),M=n("LKZe"),N=n("evD5"),S=n("lktj"),R=M.f,B=N.f,C=O.f,j=r.Symbol,k=r.JSON,D=k&&k.stringify,T=g("_hidden"),I=g("toPrimitive"),A={}.propertyIsEnumerable,L=u("symbol-registry"),P=u("symbols"),H=u("op-symbols"),U=Object.prototype,K="function"==typeof j,F=r.QObject,z=!F||!F.prototype||!F.prototype.findChild,Q=o&&c(function(){return 7!=w(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=R(U,t);r&&delete U[t],B(e,t,n),r&&e!==U&&B(U,t,r)}:B,W=function(e){var t=P[e]=w(j.prototype);return t._k=e,t},$=K&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof j},Y=function(e,t,n){return e===U&&Y(H,t,n),m(e),t=E(t,!0),m(n),a(P,t)?(n.enumerable?(a(e,T)&&e[T][t]&&(e[T][t]=!1),n=w(n,{enumerable:x(0,!1)})):(a(e,T)||B(e,T,x(1,{})),e[T][t]=!0),Q(e,t,n)):B(e,t,n)},G=function(e,t){m(e);for(var n,r=h(t=y(t)),a=0,o=r.length;o>a;)Y(e,n=r[a++],t[n]);return e},X=function(e,t){return void 0===t?w(e):G(w(e),t)},Z=function(e){var t=A.call(this,e=E(e,!0));return!(this===U&&a(P,e)&&!a(H,e))&&(!(t||!a(this,e)||!a(P,e)||a(this,T)&&this[T][e])||t)},q=function(e,t){if(e=y(e),t=E(t,!0),e!==U||!a(P,t)||a(H,t)){var n=R(e,t);return!n||!a(P,t)||a(e,T)&&e[T][t]||(n.enumerable=!0),n}},V=function(e){for(var t,n=C(y(e)),r=[],o=0;n.length>o;)a(P,t=n[o++])||t==T||t==l||r.push(t);return r},J=function(e){for(var t,n=e===U,r=C(n?H:y(e)),o=[],i=0;r.length>i;)!a(P,t=r[i++])||n&&!a(U,t)||o.push(P[t]);return o};K||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===U&&t.call(H,n),a(this,T)&&a(this[T],e)&&(this[T][e]=!1),Q(this,e,x(1,n))};return o&&z&&Q(U,e,{configurable:!0,set:t}),W(e)},s(j.prototype,"toString",function(){return this._k}),M.f=q,N.f=Y,n("n0T6").f=O.f=V,n("NpIQ").f=Z,n("1kS7").f=J,o&&!n("O4g8")&&s(U,"propertyIsEnumerable",Z,!0),v.f=function(e){return W(g(e))}),i(i.G+i.W+i.F*!K,{Symbol:j});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)g(ee[te++]);for(var ne=S(g.store),re=0;ne.length>re;)p(ne[re++]);i(i.S+i.F*!K,"Symbol",{for:function(e){return a(L,e+="")?L[e]:L[e]=j(e)},keyFor:function(e){if(!$(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){z=!0},useSimple:function(){z=!1}}),i(i.S+i.F*!K,"Object",{create:X,defineProperty:Y,defineProperties:G,getOwnPropertyDescriptor:q,getOwnPropertyNames:V,getOwnPropertySymbols:J}),k&&i(i.S+i.F*(!K||c(function(){var e=j();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(b(t)||void 0!==e)&&!$(e))return _(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!$(t))return t}),r[1]=t,D.apply(k,r)}}),j.prototype[I]||n("hJx8")(j.prototype,I,j.prototype.valueOf),d(j,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},m7h3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/3B0"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=a.default},n0T6:function(e,t,n){var r=n("Ibhu"),a=n("xnc9").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},nOWh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("qTzf"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=a.default},oM7Q:function(e,t,n){n("sF+V");var r=n("FeBl").Object;e.exports=function(e,t){return r.create(e,t)}},pFYg:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("Zzip"),o=r(a),i=n("5QVw"),s=r(i),l="function"==typeof s.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===l(o.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":l(e)}},q5tg:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("bOdI"),o=r(a),i=n("nOWh"),s=r(i),l=n("hpE5"),c=r(l);t.default={directives:{resize:c.default},components:{Code:s.default},name:"Demo",props:{layout:{type:String,default:"horizontal"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},qTzf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("9Q6j"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var i=n("cBrd"),s=n("XyMi"),l=Object(s.a)(a.a,i.a,i.b,!1,null,null,null);t.default=l.exports},"sF+V":function(e,t,n){var r=n("kM2E");r(r.S,"Object",{create:n("Yobk")})},xfne:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};r.base='<Badge count="3">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',r.dot='<Badge dot>\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot style="margin-left:20px;">\n    <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>\n</Badge>\n<Badge dot style="margin-left:20px;">\n    <a href="#">我是一个连接</a>\n</Badge>',r.maxCount='<Badge count="100" max-count="99">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge count="10055" max-count="999" style="margin-left:60px;">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',r.color='<Badge count="100" max-count="99" color="orange">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot color="green" style="margin-left:60px;">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',r.badge='<Badge count="10" style="margin-left:20px;"></Badge>\n<Badge count="20" color="blue" style="margin-left:40px;"></Badge>',r.other='<div v-for="i in m" style="margin:15px 0;" :key="i">\n<Badge count="+" @onClick="add">\n   <Button>增加</Button>\n</Badge>\n<Badge count="-" @onClick="del" style="margin-left:20px;">\n   <Input width="200"></Input>\n</Badge>\n</div>\ndata() {\n    return {\n      m: 1,\n      code: code\n    }\n}',t.default=r}});