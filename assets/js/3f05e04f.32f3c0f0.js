"use strict";(self.webpackChunkwiki_site=self.webpackChunkwiki_site||[]).push([[2927],{50158:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(46393);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(t),s=l,d=c["".concat(o,".").concat(s)]||c[s]||k[s]||r;return t?a.createElement(d,p(p({ref:n},m),{},{components:t})):a.createElement(d,p({ref:n},m))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var u=2;u<r;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},23383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(39421),l=(t(46393),t(50158));const r={slug:"/FrontendAdvanced/FrontendEngineering/PrincipleSourceMap"},p="\u539f\u7406-SourceMap",i={unversionedId:"\u524d\u7aef\u8fdb\u9636/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-SourceMap",id:"\u524d\u7aef\u8fdb\u9636/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-SourceMap",title:"\u539f\u7406-SourceMap",description:"\u7b80\u5355\u7684\u6765\u8bf4, Source Map\u5c31\u662f\u4e00\u4e2a\u4fe1\u606f\u6587\u4ef6, \u91cc\u9762\u5b58\u50a8\u4e86\u4f4d\u7f6e\u4fe1\u606f. \u4e5f\u5c31\u662f\u8bf4, \u8f6c\u6362\u540e\u7684\u4ee3\u7801\u7684\u6bcf\u4e00\u4e2a\u4f4d\u7f6e, \u6240\u5bf9\u5e94\u7684\u8f6c\u6362\u524d\u7684\u4f4d\u7f6e. \u8fd9\u6837\u4e00\u6765, \u5728\u6d4f\u89c8\u5668\u4e2d\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\u7684\u65f6\u5019, \u5c31\u80fd\u76f4\u63a5\u663e\u793a\u539f\u59cb\u4ee3\u7801, \u800c\u4e0d\u662f\u8f6c\u6362\u540e\u7684\u4ee3\u7801.",source:"@site/docs/02-\u524d\u7aef\u8fdb\u9636/\u524d\u7aef\u5de5\u7a0b/\u539f\u7406-SourceMap.md",sourceDirName:"02-\u524d\u7aef\u8fdb\u9636/\u524d\u7aef\u5de5\u7a0b",slug:"/FrontendAdvanced/FrontendEngineering/PrincipleSourceMap",permalink:"/docs/FrontendAdvanced/FrontendEngineering/PrincipleSourceMap",draft:!1,tags:[],version:"current",frontMatter:{slug:"/FrontendAdvanced/FrontendEngineering/PrincipleSourceMap"},sidebar:"tutorialSidebar",previous:{title:"Webpack-\u7684\u65b0\u7279\u6027",permalink:"/docs/FrontendAdvanced/FrontendEngineering/Webpack/WebpackNewFeatures"},next:{title:"\u539f\u7406-TreeShaking",permalink:"/docs/FrontendAdvanced/FrontendEngineering/PrincipleTreeShaking"}},o={},u=[{value:"\u4e3a\u4ec0\u4e48\u8981\u7528 srouce Map\u5c31\u662f\u4e00\u4e2a\u4fe1\u606f\u6587\u4ef6",id:"\u4e3a\u4ec0\u4e48\u8981\u7528-srouce-map\u5c31\u662f\u4e00\u4e2a\u4fe1\u606f\u6587\u4ef6",level:2},{value:"\u542f\u7528 source map",id:"\u542f\u7528-source-map",level:2},{value:"Source Map \u6587\u4ef6\u89e3\u6790",id:"source-map-\u6587\u4ef6\u89e3\u6790",level:2},{value:"mappings",id:"mappings",level:3},{value:"\u4f4d\u7f6e\u5173\u7cfb\u7684\u5bf9\u5e94",id:"\u4f4d\u7f6e\u5173\u7cfb\u7684\u5bf9\u5e94",level:3},{value:"\u6620\u5c04\u5173\u7cfb\u5b9e\u4f8b",id:"\u6620\u5c04\u5173\u7cfb\u5b9e\u4f8b",level:3},{value:"VLQ\u7f16\u7801",id:"vlq\u7f16\u7801",level:2},{value:"VLQ \u7f16\u7801\u5b9e\u4f8b",id:"vlq-\u7f16\u7801\u5b9e\u4f8b",level:3},{value:"Base64 VLQ",id:"base64-vlq",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u};function k(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u539f\u7406-sourcemap"},"\u539f\u7406-SourceMap"),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u6765\u8bf4, Source Map\u5c31\u662f\u4e00\u4e2a\u4fe1\u606f\u6587\u4ef6, \u91cc\u9762\u5b58\u50a8\u4e86\u4f4d\u7f6e\u4fe1\u606f. \u4e5f\u5c31\u662f\u8bf4, \u8f6c\u6362\u540e\u7684\u4ee3\u7801\u7684\u6bcf\u4e00\u4e2a\u4f4d\u7f6e, \u6240\u5bf9\u5e94\u7684\u8f6c\u6362\u524d\u7684\u4f4d\u7f6e. \u8fd9\u6837\u4e00\u6765, \u5728\u6d4f\u89c8\u5668\u4e2d\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\u7684\u65f6\u5019, \u5c31\u80fd\u76f4\u63a5\u663e\u793a\u539f\u59cb\u4ee3\u7801, \u800c\u4e0d\u662f\u8f6c\u6362\u540e\u7684\u4ee3\u7801."),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u7528-srouce-map\u5c31\u662f\u4e00\u4e2a\u4fe1\u606f\u6587\u4ef6"},"\u4e3a\u4ec0\u4e48\u8981\u7528 srouce Map\u5c31\u662f\u4e00\u4e2a\u4fe1\u606f\u6587\u4ef6"),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4, \u6211\u4eec\u53d1\u5e03\u5230\u751f\u4ea7\u73af\u5883\u7684\u4ee3\u7801\u90fd\u8fdb\u884c\u4e86\u5982\u4e0b\u7684\u64cd\u4f5c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7f16\u8bd1\u548c\u8f6c\u8bd1, \u5c06\u5176\u4ed6\u8bed\u8a00\u7684\u4ee3\u7801(typescript)\u7f16\u8bd1\u6210javascript"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u6587\u4ef6\u5408\u5e76, \u51cf\u5c11HTTP\u8bf7\u6c42\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u6df7\u6dc6, \u51cf\u5c0f\u4ee3\u7801\u4f53\u79ef")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7ebf\u4e0a\u4ee3\u7801\u62a5\u9519, \u76f4\u63a5\u901a\u8fc7\u6e90\u7801\u6765\u6355\u83b7\u548c\u8c03\u8bd5\u90fd\u662f\u975e\u5e38\u56f0\u96be\u7684."),(0,l.kt)("p",null,"\u6709\u4e86Source Map, \u51fa\u9519\u7684\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4f4d\u5230\u539f\u59cb\u4ee3\u7801, \u800c\u4e0d\u662f\u8f6c\u6362\u540e\u7684\u4ee3\u7801. "),(0,l.kt)("h2",{id:"\u542f\u7528-source-map"},"\u542f\u7528 source map"),(0,l.kt)("p",null,"source map \u4e3b\u8981\u8981\u6c42\u6d4f\u89c8\u5668\u652f\u6301, \u76ee\u524d\u4e3b\u6d41PC\u7aef\u6d4f\u89c8\u5668\u652f\u6301SourceMap\u7684\u60c5\u51b5\u5982\u4e0b: "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:t(93639).Z,width:"2506",height:"780"})),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"app.js"),"\u6587\u4ef6, \u5219\u4f1a\u6709\u4e00\u4e2a\u540c\u540d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\u6587\u4ef6\u5728\u540c\u4e00\u4e2a\u8def\u5f84\u4e0b\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- app.js\n- app.js.map\n")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"app.js"),"\u7684\u6587\u4ef6\u672b\u5c3e, \u4f1a\u6709\u4e00\u884c\u6307\u5411map\u6587\u4ef6\u7684\u5f15\u7528:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//# sourceMappingURL=app.js.map\n")),(0,l.kt)("p",null,"\u5176\u5b9e\u8fd8\u53ef\u4ee5\u751f\u6210\u5185\u5d4c\u7684sourcemap:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'//# sourceMappingURL=data:application/json;charset=utf8;base64,' + base64Map;\n")),(0,l.kt)("h2",{id:"source-map-\u6587\u4ef6\u89e3\u6790"},"Source Map \u6587\u4ef6\u89e3\u6790"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\u6587\u4ef6\u7684\u683c\u5f0f\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n    version : 3, //SourceMap\u7684\u7248\u672c\uff0c\u76ee\u524d\u4e3a3\n    sources: ["foo.js", "bar.js"], //\u8f6c\u6362\u524d\u7684\u6587\u4ef6\uff0c\u8be5\u9879\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u8868\u793a\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u6587\u4ef6\u5408\u5e76\n    names: ["src", "maps", "are", "fun"], //\u8f6c\u6362\u524d\u7684\u6240\u6709\u53d8\u91cf\u540d\u548c\u5c5e\u6027\u540d\n    mappings: "AACvB,gBAAgB,EAAE;AAClB;", //\u8bb0\u5f55\u4f4d\u7f6e\u4fe1\u606f\u7684\u5b57\u7b26\u4e32\n    file: "out.js", //\u8f6c\u6362\u540e\u7684\u6587\u4ef6\u540d\n    sourcesContent: ["\\t// The module cache\\n", "xxx"], //\u8f6c\u6362\u524d\u7684\u6587\u4ef6\u5185\u5bb9\u5217\u8868\uff0c\u4e0esources\u5217\u8868\u4f9d\u6b21\u5bf9\u5e94\n    sourceRoot : "" //\u8f6c\u6362\u524d\u7684\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\u3002\u5982\u679c\u4e0e\u8f6c\u6362\u524d\u7684\u6587\u4ef6\u5728\u540c\u4e00\u76ee\u5f55\uff0c\u8be5\u9879\u4e3a\u7a7a\n}\n')),(0,l.kt)("h3",{id:"mappings"},"mappings"),(0,l.kt)("p",null,"\u90a3\u4e48, \u538b\u7f29\u8fc7\u7684\u6587\u4ef6\u548c\u539f\u59cb\u6587\u4ef6\u662f\u5982\u4f55\u4e00\u4e00\u5bf9\u5e94\u7684\u5462?"),(0,l.kt)("p",null,"\u5173\u952e\u5c31\u5728\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\u6587\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"mappings"),"\u5c5e\u6027. \u8fd9\u662f\u4e00\u4e2a\u5f88\u957f\u7684\u5b57\u7b26\u4e32, \u5b83\u5206\u6210\u4e09\u5c42."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5c42: \u884c\u5bf9\u5e94, \u4ee5\u5206\u53f7",(0,l.kt)("inlineCode",{parentName:"li"},";"),"\u8868\u793a, \u6bcf\u4e2a\u5206\u53f7\u5bf9\u5e94\u8f6c\u6362\u540e\u6e90\u7801\u7684\u4e00\u884c. \u6240\u4ee5, \u7b2c\u4e00\u4e2a\u5206\u53f7\u524d\u7684\u5185\u5bb9, \u5c31\u5bf9\u5e94\u6e90\u7801\u7684\u7b2c\u4e00\u884c, \u4ee5\u6b64\u7c7b\u63a8."),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5c42: \u4f4d\u7f6e\u5bf9\u5e94, \u4ee5\u9017\u53f7",(0,l.kt)("inlineCode",{parentName:"li"},","),"\u8868\u793a, \u6bcf\u4e2a\u9017\u53f7\u5bf9\u5e94\u8f6c\u6362\u540e\u6e90\u7801\u7684\u4e00\u4e2a\u4f4d\u7f6e. \u6240\u4ee5, \u7b2c\u4e00\u4e2a\u9017\u53f7\u524d\u7684\u5185\u5bb9, \u5c31\u5bf9\u5e94\u8be5\u884c\u6e90\u7801\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e, \u4ee5\u6b64\u7c7b\u63a8."),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u5c42: \u4f4d\u7f6e\u8f6c\u6362, \u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"VLQ\u7f16\u7801"),"\u8868\u793a, \u4ee3\u8868\u8be5\u4f4d\u7f6e\u5bf9\u5e94\u7684\u8f6c\u6362\u524d\u7684\u6e90\u7801\u4f4d\u7f6e.")),(0,l.kt)("h3",{id:"\u4f4d\u7f6e\u5173\u7cfb\u7684\u5bf9\u5e94"},"\u4f4d\u7f6e\u5173\u7cfb\u7684\u5bf9\u5e94"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4f4d\u7f6e\u4f7f\u75285\u4f4d, \u8868\u793a5\u4e2a\u5b57\u6bb5, \u4ece\u5de6\u8fb9\u5f00\u59cb:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4f4d: \u8868\u793a\u8fd9\u4e2a\u4f4d\u7f6e\u5728\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u7684\u7b2c\u51e0\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4f4d: \u8868\u793a\u8fd9\u4e2a\u4f4d\u7f6e\u5c5e\u4e8esource\u5c5e\u6027\u4e2d\u7684\u54ea\u4e00\u4e2a\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4f4d: \u8868\u793a\u8fd9\u4e2a\u4f4d\u7f6e\u5c5e\u4e8e\u8f6c\u6362\u524d\u4ee3\u7801\u7684\u7b2c\u51e0\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u4f4d: \u8868\u793a\u8fd9\u4e2a\u4f4d\u7f6e\u5c5e\u4e8e\u8f6c\u6362\u524d\u4ee3\u7801\u7684\u7b2c\u51e0\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e94\u4f4d: \u8868\u793a\u8fd9\u4e2a\u4f4d\u7f6e\u5c5e\u4e8enames\u5c5e\u6027\u4e2d\u7684\u54ea\u4e00\u4e2a\u53d8\u91cf")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e9b\u6982\u5ff5\u9700\u8981\u8bf4\u660e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u503c\u90fd\u662f\u4ee50\u4f5c\u4e3a\u57fa\u6570\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e94\u4f4d\u4e0d\u662f\u5fc5\u987b\u7684, \u5982\u679c\u8be5\u4f4d\u7f6e\u6ca1\u6709\u5bf9\u5e94names\u5c5e\u6027\u4e2d\u7684\u53d8\u91cf, \u53ef\u4ee5\u7701\u7565\u7b2c5\u4f4d. "),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4f4d\u90fd\u91c7\u7528\u4e86VLQ\u7f16\u7801\u8868\u793a, \u7531\u4e8eVLQ\u7f16\u7801\u662f\u53d8\u957f\u7684, \u6240\u4ee5\u6bcf\u4e00\u4f4d\u53ef\u4ee5\u7531\u591a\u4e2a\u5b57\u7b26\u6784\u6210")),(0,l.kt)("h3",{id:"\u6620\u5c04\u5173\u7cfb\u5b9e\u4f8b"},"\u6620\u5c04\u5173\u7cfb\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u73b0\u5728\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6587\u4ef6, \u5185\u5bb9\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"feel the force\n")),(0,l.kt)("p",null,"\u5904\u7406\u4e4b\u540e\u53d8\u6210\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"the force feel\n")),(0,l.kt)("p",null,"\u4ee5\u5b57\u7b26h\u4e3a\u4f8b, \u5b83\u5728\u8f93\u5165\u4e2d\u7684\u4f4d\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"(0, 6)"),", \u5728\u8f93\u51fa\u4e2d\u7684\u4f4d\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"(0, 1)"),", \u90a3\u4e48\u6620\u5c04\u5173\u7cfb\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1 | 0 | 0 | 5 | 1\n// \u8f93\u51fa\u5217 | \u8f93\u5165\u6587\u4ef6\u4e0b\u6807 | \u8f93\u5165\u884c | \u8f93\u5165\u5217 | \u53d8\u91cf\u4e0b\u6807\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6587\u4ef6\u53ef\u4ee5\u62bd\u79bb\u51fa\u6765\u653e\u5728\u6570\u7ec4\u4e2d, \u51cf\u5c11mapping\u6587\u4ef6\u7684\u5927\u5c0f, names\u540c\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5f88\u591a\u65f6\u5019, \u6211\u4eec\u8f93\u51fa\u7684\u6587\u4ef6\u90fd\u662f\u540c\u4e00\u884c\u7684, \u8fd9\u6837\u8f93\u51fa\u7684\u884c\u53f7\u5c31\u53ef\u4ee5\u7701\u7565")),(0,l.kt)("p",null,"\u4ee5\u8fd9\u91cc\u7684\u4f8b\u5b50:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"source: ",(0,l.kt)("inlineCode",{parentName:"li"},"['a.js']")),(0,l.kt)("li",{parentName:"ul"},"names: ",(0,l.kt)("inlineCode",{parentName:"li"},"['feel', 'the', 'force']"))),(0,l.kt)("p",null,"mapping\u4e2d\u7684\u4f4d\u7f6e\u4e00\u76f4\u7528\u7684\u662f\u7edd\u5bf9\u5b9a\u4f4d, \u5982\u679c\u6587\u4ef6\u7279\u522b\u5927\u7684\u8bdd, \u884c\u5217\u5c31\u4f1a\u5f88\u5927, \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u7528\u76f8\u5bf9\u4f4d\u7f6e\u8fdb\u884c\u8bb0\u5f55."),(0,l.kt)("p",null,"\u5176\u4e2d\u7b2c\u4e00\u6b21\u8f93\u5165\u7684\u4f4d\u7f6e\u548c\u8f93\u51fa\u4f4d\u7f6e\u662f\u7edd\u5bf9\u7684, \u5f80\u540e\u7684\u8f93\u5165\u4f4d\u7f6e\u548c\u8f93\u51fa\u4f4d\u7f6e\u90fd\u662f\u76f8\u5bf9\u4e8e\u4e0a\u4e00\u6b21\u7684\u4f4d\u7f6e\u79fb\u52a8\u4e86\u591a\u5c11. \u4f8b\u5982: ",(0,l.kt)("inlineCode",{parentName:"p"},"the"),"\u7684\u8f93\u51fa\u4f4d\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"(0, -10)"),", \u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"the"),"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"feel"),"\u7684\u5de6\u8fb9\u657010\u4e0b\u624d\u80fd\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"the"),"\u7684\u4f4d\u7f6e, \u8fd9\u6837\u6211\u4eec\u5c31\u5f97\u5230\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"mapping"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sources:['a.js']\nnames:['feel','the','force']\nmappings:[10|0|0|0|0,-10|0|0|5|1,4|0|0|4|2]\n")),(0,l.kt)("p",null,"\u7136\u540e, \u5bf9\u8fd9\u4e9b\u7ad6\u7ebf\u5206\u5272\u7684\u6570\u5b57\u8fdb\u884cVLQ\u7f16\u7801."),(0,l.kt)("h2",{id:"vlq\u7f16\u7801"},"VLQ\u7f16\u7801"),(0,l.kt)("p",null,"VLQ\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Variable-length quantity"),"\u7684\u7f29\u5199, \u662f\u4e00\u79cd\u901a\u7528\u7684, \u4f7f\u7528\u4efb\u610f\u4f4d\u6570\u7684\u4e8c\u8fdb\u5236\u6765\u8868\u793a\u4e00\u4e2a\u4efb\u610f\u5927\u7684\u6570\u5b57\u7684\u4e00\u79cd\u7f16\u7801\u65b9\u5f0f"),(0,l.kt)("p",null,"\u8fd9\u79cd\u7f16\u7801\u6700\u65e9\u7528\u4e8eMIDI\u6587\u4ef6, \u540e\u6765\u88ab\u591a\u79cd\u683c\u5f0f\u91c7\u7528. \u7279\u70b9\u662f\u53ef\u4ee5\u975e\u5e38\u7cbe\u786e\u7684\u8868\u793a\u5f88\u5927\u7684\u6570\u503c."),(0,l.kt)("p",null,"VLQ\u7f16\u7801\u662f\u53d8\u957f\u7684. \u6bcf7\u4f4d\u8868\u793a\u4e00\u4e2a\u6570\u5b57. \u5f00\u5934\u7684\u7b2c\u4e00\u4f4d\u8868\u793a\u662f\u5426\u8fde\u7eed(continuation), \u5982\u679c\u662f1, \u8868\u793a\u4e0b\u97627\u4f4d\u4e5f\u662f\u540c\u4e00\u4e2a\u6570, \u5982\u679c\u662f0, \u8868\u793a\u6570\u636e\u5230\u6b64\u7ed3\u675f"),(0,l.kt)("h3",{id:"vlq-\u7f16\u7801\u5b9e\u4f8b"},"VLQ \u7f16\u7801\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u6bd4\u5982\u5c06\u4e00\u4e2a137\u8fdb\u884cVLQ\u7f16\u7801:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06137\u6539\u5199\u4e3a\u4e8c\u8fdb\u5236: 10001001"),(0,l.kt)("li",{parentName:"ol"},"7\u4f4d\u4e00\u7ec4\u5206\u7ec4, \u4e0d\u8db3\u7684\u88650: 0000001 0001001"),(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\u4e00\u7ec4\u5f00\u5934\u88650, \u5176\u4f59\u88651: 10000001 00001001")),(0,l.kt)("h3",{id:"base64-vlq"},"Base64 VLQ"),(0,l.kt)("p",null,"\u5982\u679c\u6574\u6570\u503c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"-15"),"\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"+15"),"\u4e4b\u95f4(\u5305\u542b\u7aef\u70b9), \u7528\u4e00\u4e2a\u5b57\u7b26\u8868\u793a. \u8d85\u51fa\u8fd9\u4e2a\u8303\u56f4\u5c31\u9700\u8981\u7528\u591a\u4e2a\u5b57\u7b26\u8868\u793a. "),(0,l.kt)("p",null,"\u4e0e\u4e00\u822c\u7684VLQ\u7684\u533a\u522b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2aBase64\u5b57\u7b26\u53ea\u80fd\u8868\u793a6bit(2^6)\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"Base64 VLQ\u9700\u8981\u80fd\u591f\u8868\u793a\u8d1f\u6570, \u56e0\u6b64\u6700\u540e\u4e00\u4f4d\u4f5c\u4e3a\u7b26\u53f7\u4f4d, 0\u8868\u793a\u6b63\u6570, 1\u8868\u793a\u8d1f\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u75286\u4f4d\u8fdb\u884c\u5b58\u50a8, \u6240\u4ee5\u4e00\u4e2a\u5355\u5143\u8868\u793a\u7684\u8303\u56f4\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"[-15, 15]"),", \u5982\u679c\u8d85\u8fc7\u4e86\u5c31\u8981\u4f7f\u7528\u8fde\u7eed\u6807\u5fd7\u4f4d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Continuation\n\u3000\u3000|\u3000\u3000\u3000\u3000\u3000Sign\n\u3000\u3000|\u3000\u3000\u3000\u3000\u3000|\n\u3000\u3000V\u3000\u3000\u3000\u3000\u3000V\n\u3000\u3000\uff11\uff10\uff11\uff10\uff11\uff11\n")),(0,l.kt)("p",null,"\u800c6\u4e2a\u4f4d\u4e2d\u7684\u53f3\u8fb9\u6700\u540e\u4e00\u4f4d, \u53d6\u51b3\u4e8e\u8fd96\u4e2a\u4f4d\u662f\u5426\u662f\u67d0\u4e2a\u6570\u503c\u7684VLQ\u7f16\u7801\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f: \u8fd9\u4e00\u4e2a\u4e3a\u8868\u793a\u7b26\u53f7(sign), 0\u4e3a\u6b63, 1\u4f4d\u8d1f(Source map\u7684\u7b26\u53f7\u56fa\u5b9a\u4e3a0);"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u662f: \u8fd9\u4e2a\u4f4d\u6ca1\u6709\u7279\u6b8a\u542b\u4e49, \u7b97\u4f5c\u6570\u503c\u7684\u4e00\u90e8\u5206;")),(0,l.kt)("p",null,"6\u4f4d\u7684\u8bbe\u8ba1\u4e3b\u8981\u662f\u4e3a\u4e86\u53ef\u4ee5\u501f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"base 64"),"\u7f16\u7801\u7684\u5b57\u7b26\u8868."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:t(66204).Z,width:"381",height:"407"})),(0,l.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50, \u5982\u4f55\u5bf9\u6570\u503c16\u8fdb\u884cVLQ\u7f16\u7801:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c0616\u6539\u5199\u4e3a\u4e8c\u8fdb\u5236: ",(0,l.kt)("inlineCode",{parentName:"li"},"10000")),(0,l.kt)("li",{parentName:"ol"},"\u5728\u6700\u53f3\u8fb9\u8865\u5145\u7b26\u53f7\u4f4d, \u56e0\u4e3a16\u5927\u4e8e0, \u6240\u4ee5\u7b26\u53f7\u4f4d\u4e3a0, \u6574\u4e2a\u6570\u5b57\u4e3a: ",(0,l.kt)("inlineCode",{parentName:"li"},"10000 0")),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u53f3\u8fb9\u7684\u6700\u4f4e\u4f4d\u5f00\u59cb, \u5c06\u6574\u4e2a\u6811\u6bcf\u96945\u4f4d, \u8fdb\u884c\u5206\u6bb5, \u5373\u53d8\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"00000"),"\u4e24\u6bb5. \u5982\u679c\u6700\u9ad8\u4f4d\u6240\u5728\u7684\u6bb5\u4e0d\u8db35\u4f4d, \u5219\u524d\u9762\u88650, \u4e5f\u5c31\u662f\u53d8\u6210\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"00001"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"00000")),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u4e24\u6bb5\u7684\u987a\u5e8f\u98a0\u5012, \u5373",(0,l.kt)("inlineCode",{parentName:"li"},"00000"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"00001")),(0,l.kt)("li",{parentName:"ol"},"\u5728\u6bcf\u4e00\u6bb5\u7684\u6700\u524d\u9762\u6dfb\u52a0\u4e00\u4e2a'\u8fde\u7eed\u4f4d', \u9664\u4e86\u6700\u540e\u4e00\u6bb5\u4e3a0, \u5176\u4ed6\u90fd\u4e3a1, \u5373",(0,l.kt)("inlineCode",{parentName:"li"},"100000"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"000001")),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6bcf\u4e00\u6bb5\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"Base 64"),"\u7f16\u7801, \u67e5\u8868\u53ef\u77e5",(0,l.kt)("inlineCode",{parentName:"li"},"100000"),"\u4e3ag, ",(0,l.kt)("inlineCode",{parentName:"li"},"000001"),"\u4e3aB")),(0,l.kt)("p",null,"\u6700\u7ec8, \u6570\u503c16\u88ab\u7f16\u7801\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"gB"),"."),(0,l.kt)("h3",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"Base64 VLQ"),"\u4e2d, \u7f16\u7801\u987a\u5e8f\u662f\u4ece\u4f4e\u4f4d\u5230\u9ad8\u4f4d"),(0,l.kt)("li",{parentName:"ul"},"\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"VLQ"),"\u4e2d, \u7f16\u7801\u987a\u5e8f\u662f\u4ece\u9ad8\u4f4d\u5230\u4f4e\u4f4d")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000020213957"},"\u3010JS\u57fa\u7840\u3011sourceMap\u662f\u4e2a\u5565")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html"},"JavaScript Source Map \u8be6\u89e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.qiutianaimeili.com/html/page/2019/05/89jrubx1soc.html"},"source map\u539f\u7406\u5206\u6790&vlq"))))}k.isMDXComponent=!0},93639:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/20210301151540-dde8f4ae7c2fba3a82895753df77073a.jpg"},66204:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/bg2013012202-656e7038f6acdaed7e9f73aadc7232fc.png"}}]);