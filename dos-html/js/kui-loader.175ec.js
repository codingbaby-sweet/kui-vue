/*! kui-vue v1.7.2 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([35],{"/Y+3":function(e,n,t){"use strict";e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var o=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},"/n6Q":function(e,n,t){t("zQR9"),t("+tPU"),e.exports=t("Kh4W").f("iterator")},"06OY":function(e,n,t){var r=t("3Eo+")("meta"),a=t("EqjI"),i=t("D2L2"),o=t("evD5").f,s=0,l=Object.isExtensible||function(){return!0},u=!t("S82l")(function(){return l(Object.preventExtensions({}))}),c=function(e){o(e,r,{value:{i:"O"+ ++s,w:{}}})},f=function(e,n){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!l(e))return"F";if(!n)return"E";c(e)}return e[r].i},d=function(e,n){if(!i(e,r)){if(!l(e))return!0;if(!n)return!1;c(e)}return e[r].w},g=function(e){return u&&p.NEED&&l(e)&&!i(e,r)&&c(e),e},p=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:g}},"5QVw":function(e,n,t){e.exports={default:t("BwfY"),__esModule:!0}},"7UMu":function(e,n,t){var r=t("R9M2");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"8PHr":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("dgvu"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);var o=t("z75t"),s=t("XyMi"),l=Object(s.a)(a.a,o.a,o.b,!1,null,null,null);n.default=l.exports},"9Q6j":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("crQ5"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t("TgM+"),a.default.registerLanguage("xml",t("UNuV")),a.default.registerLanguage("javascript",t("/Y+3")),n.default={name:"Code",props:{lang:{type:String,default:"xml html"}},mounted:function(){var e=this.$refs.code.innerHTML.trim();this.$refs.code.innerHTML=e,a.default.highlightBlock(this.$refs.code)}}},BwfY:function(e,n,t){t("fWfb"),t("M6a0"),t("OYls"),t("QWe/"),e.exports=t("FeBl").Symbol},KV5x:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#a626a4}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#986801}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}",""])},Kh4W:function(e,n,t){n.f=t("dSzd")},LKZe:function(e,n,t){var r=t("NpIQ"),a=t("X8DO"),i=t("TcQ7"),o=t("MmMw"),s=t("D2L2"),l=t("SfB7"),u=Object.getOwnPropertyDescriptor;n.f=t("+E39")?u:function(e,n){if(e=i(e),n=o(n,!0),l)try{return u(e,n)}catch(e){}if(s(e,n))return a(!r.f.call(e,n),e[n])}},LzR5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={};r.install="npm i kui-loader --save-dev",r.webconfig="module: {\n    rules: [\n        {\n            test: /.vue$/,\n            use: [\n                {\n                    loader: 'vue-loader',\n                    options: {\n                        \n                    }\n                },\n                {\n                    loader: 'kui-loader',\n                    options: {\n                        prefix: false\n                    }\n                }\n            ]\n        }\n    ]\n}",n.default=r},M6a0:function(e,n){},OYls:function(e,n,t){t("crlp")("asyncIterator")},OvRC:function(e,n,t){e.exports={default:t("oM7Q"),__esModule:!0}},"QWe/":function(e,n,t){t("crlp")("observable")},Rrel:function(e,n,t){var r=t("TcQ7"),a=t("n0T6").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(e){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):a(r(e))}},"TgM+":function(e,n,t){var r=t("KV5x");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0,a.insertInto=void 0;t("MTIv")(r,a);r.locals&&(e.exports=r.locals)},UNuV:function(e,n,t){"use strict";e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},Xc4G:function(e,n,t){var r=t("lktj"),a=t("1kS7"),i=t("NpIQ");e.exports=function(e){var n=r(e),t=a.f;if(t)for(var o,s=t(e),l=i.f,u=0;s.length>u;)l.call(e,o=s[u++])&&n.push(o);return n}},Zzip:function(e,n,t){e.exports={default:t("/n6Q"),__esModule:!0}},cBrd:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"k-code"},[t("pre",[e._v("  "),t("code",{ref:"code",class:e.lang},[e._v("\n    "),e._t("default"),e._v("\n  ")],2),e._v("\n  ")])])},a=[]},crQ5:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=t("OvRC"),i=r(a),o=t("fZjL"),s=r(o),l=t("pFYg"),u=r(l);!function(e){"object"===("undefined"==typeof window?"undefined":(0,u.default)(window))&&window||"object"===("undefined"==typeof self?"undefined":(0,u.default)(self))&&self;e(n)}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return S.test(e)}function o(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=j.exec(o))return O(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;n<r;n++)if(i=o[n],a(i)||O(i))return i}function l(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function u(e){var n=[];return function e(r,a){for(var i=r.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=e(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}c+="<"+t(e)+M.map.call(e.attributes,r).join("")+">"}function s(e){c+="</"+t(e)+">"}function l(e){("start"===e.event?o:s)(e.node)}for(var u=0,c="",f=[];e.length||r.length;){var d=i();if(c+=n(a.substring(u,d[0].offset)),u=d[0].offset,d===e){f.reverse().forEach(s);do{l(d.splice(0,1)[0]),d=i()}while(d===e&&d.length&&d[0].offset===u);f.reverse().forEach(o)}else"start"===d[0].event?f.push(d[0].node):f.pop(),l(d.splice(0,1)[0])}return c+n(a.substr(u))}function f(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return l(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[l(e)]||[e]}function d(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var o={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?s("keyword",a.keywords):w(a.keywords).forEach(function(e){s(e,a.keywords[e])}),a.keywords=o}a.lexemesRe=t(a.lexemes||/\w+/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return f("self"===e?a:e)})),a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function g(e,t,a,o){function s(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function l(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return l(e.parent,n)}function u(e,n){return!a&&r(n.illegalRe,e)}function c(e,n){var t=E.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function f(e,n,t,r){var a=r?"":D.classPrefix,i='<span class="'+a,o=t?"":T;return(i+=e+'">')+n+o}function v(){var e,t,r,a;if(!N.keywords)return n(x);for(a="",t=0,N.lexemesRe.lastIndex=0,r=N.lexemesRe.exec(x);r;)a+=n(x.substring(t,r.index)),e=c(N,r),e?(S+=e[1],a+=f(e[0],n(r[0]))):a+=n(r[0]),t=N.lexemesRe.lastIndex,r=N.lexemesRe.exec(x);return a+n(x.substr(t))}function b(){var e="string"==typeof N.subLanguage;if(e&&!R[N.subLanguage])return n(x);var t=e?g(N.subLanguage,x,!0,M[N.subLanguage]):p(x,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(S+=t.relevance),e&&(M[N.subLanguage]=t.top),f(t.language,t.value,!1,!0)}function h(){w+=null!=N.subLanguage?b():v(),x=""}function m(e){w+=e.className?f(e.className,"",!0):"",N=(0,i.default)(e,{parent:{value:N}})}function _(e,n){if(x+=e,null==n)return h(),0;var t=s(n,N);if(t)return t.skip?x+=n:(t.excludeBegin&&(x+=n),h(),t.returnBegin||t.excludeBegin||(x=n)),m(t,n),t.returnBegin?0:n.length;var r=l(N,n);if(r){var a=N;a.skip?x+=n:(a.returnEnd||a.excludeEnd||(x+=n),h(),a.excludeEnd&&(x=n));do{N.className&&(w+=T),N.skip||(S+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&m(r.starts,""),a.returnEnd?0:n.length}if(u(n,N))throw new Error('Illegal lexeme "'+n+'" for mode "'+(N.className||"<unnamed>")+'"');return x+=n,n.length||1}var E=O(e);if(!E)throw new Error('Unknown language: "'+e+'"');d(E);var y,N=o||E,M={},w="";for(y=N;y!==E;y=y.parent)y.className&&(w=f(y.className,"",!0)+w);var x="",S=0;try{for(var j,C,k=0;;){if(N.terminators.lastIndex=k,!(j=N.terminators.exec(t)))break;C=_(t.substring(k,j.index),j[0]),k=j.index+C}for(_(t.substr(k)),y=N;y.parent;y=y.parent)y.className&&(w+=T);return{relevance:S,value:w,language:e,top:N}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw e}}function p(e,t){t=t||D.languages||w(R);var r={relevance:0,value:n(e)},a=r;return t.filter(O).forEach(function(n){var t=g(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function v(e){return D.tabReplace||D.useBR?e.replace(C,function(e,n){return D.useBR&&"\n"===e?"<br>":D.tabReplace?n.replace(/\t/g,D.tabReplace):""}):e}function b(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function h(e){var n,t,r,i,s,l=o(e);a(l)||(D.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,s=n.textContent,r=l?g(l,s,!0):p(s),t=u(n),t.length&&(i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),i.innerHTML=r.value,r.value=c(t,u(i),s)),r.value=v(r.value),e.innerHTML=r.value,e.className=b(e.className,l,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function m(e){D=l(D,e)}function _(){if(!_.called){_.called=!0;var e=document.querySelectorAll("pre code");M.forEach.call(e,h)}}function E(){addEventListener("DOMContentLoaded",_,!1),addEventListener("load",_,!1)}function y(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function N(){return w(R)}function O(e){return e=(e||"").toLowerCase(),R[e]||R[x[e]]}var M=[],w=s.default,R={},x={},S=/^(no-?highlight|plain|text)$/i,j=/\blang(?:uage)?-([\w-]+)\b/i,C=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,T="</span>",D={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=g,e.highlightAuto=p,e.fixMarkup=v,e.highlightBlock=h,e.configure=m,e.initHighlighting=_,e.initHighlightingOnLoad=E,e.registerLanguage=y,e.listLanguages=N,e.getLanguage=O,e.inherit=l,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},crlp:function(e,n,t){var r=t("7KvD"),a=t("FeBl"),i=t("O4g8"),o=t("Kh4W"),s=t("evD5").f;e.exports=function(e){var n=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in n||s(n,e,{value:o.f(e)})}},dgvu:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t("LzR5"),i=r(a),o=t("nOWh"),s=r(o);n.default={components:{Code:s.default},data:function(){return{code:i.default}}}},fWfb:function(e,n,t){"use strict";var r=t("7KvD"),a=t("D2L2"),i=t("+E39"),o=t("kM2E"),s=t("880/"),l=t("06OY").KEY,u=t("S82l"),c=t("e8AB"),f=t("e6n0"),d=t("3Eo+"),g=t("dSzd"),p=t("Kh4W"),v=t("crlp"),b=t("Xc4G"),h=t("7UMu"),m=t("77Pl"),_=t("EqjI"),E=t("TcQ7"),y=t("MmMw"),N=t("X8DO"),O=t("Yobk"),M=t("Rrel"),w=t("LKZe"),R=t("evD5"),x=t("lktj"),S=w.f,j=R.f,C=M.f,T=r.Symbol,D=r.JSON,k=D&&D.stringify,A=g("_hidden"),L=g("toPrimitive"),B={}.propertyIsEnumerable,I=c("symbol-registry"),P=c("symbols"),U=c("op-symbols"),K=Object.prototype,H="function"==typeof T,Q=r.QObject,F=!Q||!Q.prototype||!Q.prototype.findChild,W=i&&u(function(){return 7!=O(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,n,t){var r=S(K,n);r&&delete K[n],j(e,n,t),r&&e!==K&&j(K,n,r)}:j,z=function(e){var n=P[e]=O(T.prototype);return n._k=e,n},Y=H&&"symbol"==typeof T.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof T},$=function(e,n,t){return e===K&&$(U,n,t),m(e),n=y(n,!0),m(t),a(P,n)?(t.enumerable?(a(e,A)&&e[A][n]&&(e[A][n]=!1),t=O(t,{enumerable:N(0,!1)})):(a(e,A)||j(e,A,N(1,{})),e[A][n]=!0),W(e,n,t)):j(e,n,t)},G=function(e,n){m(e);for(var t,r=b(n=E(n)),a=0,i=r.length;i>a;)$(e,t=r[a++],n[t]);return e},X=function(e,n){return void 0===n?O(e):G(O(e),n)},Z=function(e){var n=B.call(this,e=y(e,!0));return!(this===K&&a(P,e)&&!a(U,e))&&(!(n||!a(this,e)||!a(P,e)||a(this,A)&&this[A][e])||n)},V=function(e,n){if(e=E(e),n=y(n,!0),e!==K||!a(P,n)||a(U,n)){var t=S(e,n);return!t||!a(P,n)||a(e,A)&&e[A][n]||(t.enumerable=!0),t}},q=function(e){for(var n,t=C(E(e)),r=[],i=0;t.length>i;)a(P,n=t[i++])||n==A||n==l||r.push(n);return r},J=function(e){for(var n,t=e===K,r=C(t?U:E(e)),i=[],o=0;r.length>o;)!a(P,n=r[o++])||t&&!a(K,n)||i.push(P[n]);return i};H||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),n=function(t){this===K&&n.call(U,t),a(this,A)&&a(this[A],e)&&(this[A][e]=!1),W(this,e,N(1,t))};return i&&F&&W(K,e,{configurable:!0,set:n}),z(e)},s(T.prototype,"toString",function(){return this._k}),w.f=V,R.f=$,t("n0T6").f=M.f=q,t("NpIQ").f=Z,t("1kS7").f=J,i&&!t("O4g8")&&s(K,"propertyIsEnumerable",Z,!0),p.f=function(e){return z(g(e))}),o(o.G+o.W+o.F*!H,{Symbol:T});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;ee.length>ne;)g(ee[ne++]);for(var te=x(g.store),re=0;te.length>re;)v(te[re++]);o(o.S+o.F*!H,"Symbol",{for:function(e){return a(I,e+="")?I[e]:I[e]=T(e)},keyFor:function(e){if(!Y(e))throw TypeError(e+" is not a symbol!");for(var n in I)if(I[n]===e)return n},useSetter:function(){F=!0},useSimple:function(){F=!1}}),o(o.S+o.F*!H,"Object",{create:X,defineProperty:$,defineProperties:G,getOwnPropertyDescriptor:V,getOwnPropertyNames:q,getOwnPropertySymbols:J}),D&&o(o.S+o.F*(!H||u(function(){var e=T();return"[null]"!=k([e])||"{}"!=k({a:e})||"{}"!=k(Object(e))})),"JSON",{stringify:function(e){for(var n,t,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(t=n=r[1],(_(n)||void 0!==e)&&!Y(e))return h(n)||(n=function(e,n){if("function"==typeof t&&(n=t.call(this,e,n)),!Y(n))return n}),r[1]=n,k.apply(D,r)}}),T.prototype[L]||t("hJx8")(T.prototype,L,T.prototype.valueOf),f(T,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},n0T6:function(e,n,t){var r=t("Ibhu"),a=t("xnc9").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},nOWh:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("qTzf"),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default=a.default},oM7Q:function(e,n,t){t("sF+V");var r=t("FeBl").Object;e.exports=function(e,n){return r.create(e,n)}},pFYg:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var a=t("Zzip"),i=r(a),o=t("5QVw"),s=r(o),l="function"==typeof s.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};n.default="function"==typeof s.default&&"symbol"===l(i.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":l(e)}},qTzf:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("9Q6j"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);var o=t("cBrd"),s=t("XyMi"),l=Object(s.a)(a.a,o.a,o.b,!1,null,null,null);n.default=l.exports},"sF+V":function(e,n,t){var r=t("kM2E");r(r.S,"Object",{create:t("Yobk")})},z75t:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("KUI-Loader")]),e._v(" "),t("h3",[e._v("用途")]),e._v(" "),t("p",[e._v("在vue 里面，自定义组件名称是无法和 原生的html组件 重名的， 在vue1.x 版本有这个限制，但是在vue2.x 以后，有虚拟DOM ，所以可以使用原生组件来命名自定义组件，但是有大小写区分(template/render模式)")]),e._v(" "),t("h3",[e._v("使用方法")]),e._v(" "),t("h4",[e._v("安装")]),e._v(" "),t("p",[e._v("通过 npm 安装 kui-loader")]),e._v(" "),t("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.install))]),e._v(" "),t("h4",[e._v("配置")]),e._v(" "),t("p",[e._v("配置 webpack，修改 vue-loader 的配置，如下：")]),e._v(" "),t("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.webconfig))]),e._v(" "),t("h4",[e._v("说明")]),e._v(" "),t("p",[e._v("可以直接写 <Switch> 标签；")]),e._v(" "),t("p",[e._v("参数 prefix 设置为 true 后，所有 kui 组件标签名都可以使用前缀 k-")])],1)},a=[]}});