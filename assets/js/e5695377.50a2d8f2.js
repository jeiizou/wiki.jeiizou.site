"use strict";(self.webpackChunkwiki_site=self.webpackChunkwiki_site||[]).push([[7181],{50158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(39421),a=(n(46393),n(50158));const l={slug:"/FrontendBase/JavaScript/AutomationObserver"},i="\u8bed\u6cd5\u7279\u6027-MutationObserver",o={unversionedId:"\u524d\u7aef\u57fa\u7840/JavsScript/1-7-\u8bed\u6cd5\u7279\u6027-MutationObserver",id:"\u524d\u7aef\u57fa\u7840/JavsScript/1-7-\u8bed\u6cd5\u7279\u6027-MutationObserver",title:"\u8bed\u6cd5\u7279\u6027-MutationObserver",description:"http://javascript.ruanyifeng.com/dom/mutationobserver.html",source:"@site/docs/01-\u524d\u7aef\u57fa\u7840/01-JavsScript/1-7-\u8bed\u6cd5\u7279\u6027-MutationObserver.md",sourceDirName:"01-\u524d\u7aef\u57fa\u7840/01-JavsScript",slug:"/FrontendBase/JavaScript/AutomationObserver",permalink:"/docs/FrontendBase/JavaScript/AutomationObserver",draft:!1,tags:[],version:"current",frontMatter:{slug:"/FrontendBase/JavaScript/AutomationObserver"},sidebar:"tutorialSidebar",previous:{title:"\u8bed\u6cd5\u7279\u6027-ServiceWorker",permalink:"/docs/FrontendBase/JavaScript/ServiceWorker"},next:{title:"\u8bed\u6cd5\u7279\u6027-Decorators",permalink:"/docs/FrontendFoundation/JavaScript/SyntaxFeaturesDecorator"}},u={},s=[{value:"\u6784\u9020",id:"\u6784\u9020",level:2},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"observe()",id:"observe",level:3},{value:"disconnect(), takeRecords()",id:"disconnect-takerecords",level:3},{value:"MutationRecord \u5bf9\u8c61",id:"mutationrecord-\u5bf9\u8c61",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u76d1\u542c\u5b50\u5143\u7d20\u53d8\u52a8",id:"\u76d1\u542c\u5b50\u5143\u7d20\u53d8\u52a8",level:3},{value:"\u76d1\u542c\u5c5e\u6027\u7684\u53d8\u52a8",id:"\u76d1\u542c\u5c5e\u6027\u7684\u53d8\u52a8",level:3},{value:"\u53d6\u4ee3<code>DOMContentLoaded</code>\u4e8b\u4ef6",id:"\u53d6\u4ee3domcontentloaded\u4e8b\u4ef6",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bed\u6cd5\u7279\u6027-mutationobserver"},"\u8bed\u6cd5\u7279\u6027-MutationObserver"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"http://javascript.ruanyifeng.com/dom/mutationobserver.html"},"http://javascript.ruanyifeng.com/dom/mutationobserver.html"))),(0,a.kt)("p",null,"Mutation Observer API \u7528\u6765\u76d1\u542cDOM\u7684\u53d8\u52a8\u4e8b\u4ef6, \u5305\u542b\u4e86\u8282\u70b9, \u5c5e\u6027, \u6587\u672c\u5185\u5bb9\u7684\u53d8\u5316, \u8fd9\u4e2aAPI\u90fd\u53ef\u4ee5\u5f97\u5230\u901a\u77e5. "),(0,a.kt)("p",null,"\u5b83\u7c7b\u4f3c\u4e8e\u4e8b\u4ef6, \u4f46\u662f\u4e0e\u4e8b\u4ef6\u6709\u4e2a\u672c\u8d28\u7684\u533a\u522b: \u4e8b\u4ef6\u662f\u540c\u6b65\u89e6\u53d1, \u4e5f\u5c31\u662f\u8bf4DOM\u7684\u53d8\u52a8\u4f1a\u7acb\u5373\u89e6\u53d1\u5bf9\u5e94\u7684\u4e8b\u4ef6; Mutation Observer\u5219\u662f\u5f02\u6b65\u89e6\u53d1\u7684. \u9700\u8981\u7b49\u5230\u5f53\u524d\u6240\u6709\u7684DOM\u64cd\u4f5c\u7ed3\u675f\u624d\u4f1a\u89e6\u53d1. "),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u8bbe\u8ba1\u5e08\u4e3a\u4e86\u5e94\u5bf9DOM\u53d8\u52a8\u9891\u7e41\u7684\u7279\u70b9. \u4f8b\u5982\u6587\u6863\u4e2d\u8fde\u7eed\u63d2\u5165\u5143\u7d20\u8fd9\u6837\u7684\u60c5\u51b5\u4e0b, Mutation Observer\u4f1a\u7b49\u5230\u6240\u6709\u63d2\u5165\u90fd\u7ed3\u675f\u4e4b\u540e\u624d\u89e6\u53d1, \u5e76\u4e14\u53ea\u89e6\u53d1\u4e00\u6b21. "),(0,a.kt)("p",null,"Mutation Observe\u6709\u4ee5\u4e0b\u7279\u70b9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u89e6\u53d1"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u53d8\u52a8\u8bb0\u5f55\u5c01\u88c5\u4e3a\u6570\u7ec4\u8fdb\u884c\u5904\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u89c2\u5bdfDOM\u7684\u6240\u6709\u53d8\u52a8\u7c7b\u578b, \u4e5f\u53ef\u4ee5\u53ea\u89c2\u5bdf\u67d0\u4e00\u7c7b\u53d8\u52a8")),(0,a.kt)("h2",{id:"\u6784\u9020"},"\u6784\u9020"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u6784\u9020\u51fd\u6570\nlet observer = new MutationObserver(callback);\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u56de\u8c03\u51fd\u6570\u4f1a\u5728\u6bcf\u6b21DOM\u53d8\u52a8\u540e\u8c03\u7528. \u8be5\u56de\u8c03\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570, \u7b2c\u4e00\u4e2a\u662f\u53d8\u52a8\u6570\u7ec4, \u7b2c\u4e8c\u4e2a\u662f\u89c2\u5bdf\u5668\u5b9e\u4f8b. \u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let observer = new MutationObserver(function (mutations, observer) {\n    mutations.forEach(function(mutation){\n        console.log(mutation);\n    });\n});\n")),(0,a.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("h3",{id:"observe"},"observe()"),(0,a.kt)("p",null,"\u542f\u52a8\u76d1\u542c, \u63a5\u53d7\u4e24\u4e2a\u53c2\u6570:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u8981\u89c2\u5bdf\u7684DOM\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u914d\u7f6e\u5bf9\u8c61, \u6307\u5b9a\u8981\u89c2\u5bdf\u7684\u7279\u5b9a\u53d8\u52a8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let article = document.querySelector('article');\n\nlet optiosn = {\n    'childList': true,\n    'attributes':true\n};\n\nobserver.observe(article, options);\n")),(0,a.kt)("p",null,"\u89c2\u5bdf\u5668\u80fd\u89c2\u5bdf\u7684DOM\u53d8\u52a8\u7c7b\u578b, \u6709\u4ee5\u4e0b\u51e0\u79cd:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"childList"),": \u5b50\u8282\u70b9\u7684\u53d8\u52a8(\u65b0\u589e, \u5220\u9664, \u4fee\u6539)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributes"),": \u5c5e\u6027\u7684\u53d8\u52a8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"characterData"),": \u8282\u70b9\u5185\u5bb9\u6216\u8282\u70b9\u6587\u672c\u7684\u53d8\u52a8")),(0,a.kt)("p",null,"\u60f3\u8981\u89c2\u5bdf\u54ea\u4e00\u79cd\u53d8\u52a8\u7c7b\u578b, \u5c31\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"option"),"\u5bf9\u8c61\u4e2d\u6307\u5b9a\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", \u9700\u8981\u6ce8\u610f, \u5fc5\u987b\u6307\u5b9a\u81f3\u5c11\u4e00\u79cd, \u5426\u5219\u4f1a\u62a5\u9519. "),(0,a.kt)("p",null,"\u9664\u4e86\u53d8\u52a8\u7c7b\u578b, ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u5bf9\u8c61\u8fd8\u53ef\u4ee5\u8bbe\u5b9a\u4e00\u4e0b\u5c5e\u6027:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subtree"),": \u5e03\u5c14\u503c, \u8868\u793a\u662f\u5426\u5c06\u8be5\u89c2\u5bdf\u5668\u5e94\u7528\u4e8e\u8be5\u8282\u70b9\u7684\u6240\u6709\u540e\u4ee3\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributeOldValue"),": \u5e03\u5c14\u503c, \u8868\u793a\u89c2\u5bdf",(0,a.kt)("inlineCode",{parentName:"li"},"attributes"),"\u53d8\u52a8\u65f6, \u662f\u5426\u9700\u8981\u8bb0\u5f55\u53d8\u52a8\u524d\u7684\u503c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"characterDataOldValue"),": \u5e03\u5c14\u503c, \u8868\u793a\u89c2\u5bdf",(0,a.kt)("inlineCode",{parentName:"li"},"characterData"),"\u53d8\u52a8\u65f6, \u662f\u5426\u9700\u8981\u8bb0\u5f55\u53d8\u52a8\u524d\u7684\u503c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arrtibuteFilter"),": \u6570\u7ec4, \u8868\u793a\u9700\u8981\u89c2\u5bdf\u7684\u7279\u5b9a\u5c5e\u6027, \u4f8b\u5982: ",(0,a.kt)("inlineCode",{parentName:"li"},"['class', 'src']"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f00\u59cb\u76d1\u542c\u6587\u6863\u6839\u8282\u70b9\uff08\u5373<html>\u6807\u7b7e\uff09\u7684\u53d8\u52a8\nmutationObserver.observe(document.documentElement, {\n  attributes: true,\n  characterData: true,\n  childList: true,\n  subtree: true,\n  attributeOldValue: true,\n  characterDataOldValue: true\n});\n")),(0,a.kt)("p",null,"\u5bf9\u4e00\u4e2a\u8282\u70b9\u6dfb\u52a0\u89c2\u5bdf\u5668, \u5c31\u50cf\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u4e00\u6837, \u591a\u6b21\u6dfb\u52a0\u540c\u4e00\u4e2a\u89c2\u5bdf\u5668\u662f\u65e0\u6548\u7684, \u56de\u8c03\u51fd\u6570\u4f9d\u7136\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21, \u4f46\u662f\u5982\u679c\u81ea\u5b9a\u4e0d\u540c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u5bf9\u8c61, \u5c31\u4f1a\u88ab\u5f53\u505a\u4e24\u4e2a\u4e0d\u540c\u7684\u89c2\u5bdf\u5668. "),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u89c2\u5bdf\u65b0\u589e\u5b50\u8282\u70b9\u7684\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let insertedNodes = [];\nlet observer = new MutationObserver(function (mutations) {\n    mutations.forEach(function(mutation) {\n        for (let i = 0;i < mutation.addedNodes.length; i++){\n            insertedNodes.push(mutation.addedNodes[i]);\n        }\n    });\n    observer.observe(document, { childList: true });\n    console.log(insertedNodes);\n});\n")),(0,a.kt)("h3",{id:"disconnect-takerecords"},"disconnect(), takeRecords()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"disconnect"),"\u65b9\u6cd5\u7528\u6765\u505c\u6b62\u89c2\u5bdf, \u8c03\u7528\u8be5\u65b9\u6cd5\u540e, DOM\u518d\u53d1\u751f\u53d8\u52a8, \u4e5f\u4e0d\u4f1a\u89e6\u53d1\u89c2\u5bdf\u5668. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"observer.disconnect();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"takeRecords"),"\u65b9\u6cd5\u7528\u6765\u6e05\u9664\u53d8\u52a8\u8bb0\u5f55, \u5373\u4e0d\u518d\u5904\u7406\u672a\u5904\u7406\u7684\u53d8\u52a8. \u8be5\u65b9\u6cd5\u8fd4\u56de\u53d8\u52a8\u8bb0\u5f55\u7684\u6570\u7ec4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"observer.takeRecords();\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7ed3\u5408\u4f7f\u7528\u7684\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4fdd\u5b58\u6240\u6709\u6ca1\u6709\u88ab\u89c2\u5bdf\u5668\u5904\u7406\u7684\u53d8\u52a8\nlet changes = mutationObserver.takeRecords();\n\n// \u505c\u6b62\u89c2\u5bdf\nmutationObserver.disconnect();\n")),(0,a.kt)("h2",{id:"mutationrecord-\u5bf9\u8c61"},"MutationRecord \u5bf9\u8c61"),(0,a.kt)("p",null,"DOM\u6bcf\u6b21\u53d8\u5316, \u5c31\u4f1a\u751f\u6210\u4e00\u6761\u53d8\u52a8\u8bb0\u5f55(Mutation Record \u5b9e\u4f8b). \u8be5\u5b9e\u4f8b\u5305\u542b\u4e86\u4e0e\u53d8\u5316\u76f8\u5173\u7684\u6240\u6709\u4fe1\u606f. Mutation Observer \u5904\u7406\u7684\u5c31\u662f\u4e00\u4e2a\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"MutationRecord"),"\u5b9e\u4f8b\u6240\u7ec4\u6210\u7684\u6570\u7ec4. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MutationRecord"),"\u5bf9\u8c61\u5305\u542b\u4e86DOM\u7684\u76f8\u5173\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": \u89c2\u5bdf\u7684\u53d8\u52a8\u7c7b\u578b(",(0,a.kt)("inlineCode",{parentName:"li"},"arrtibute"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"characterData"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"childList"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target"),": \u53d1\u751f\u53d8\u52a8\u7684DOM\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addedNodes"),": \u65b0\u589e\u7684DOM\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removedNodes"),": \u5220\u9664\u7684\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"previousSibling"),": \u524d\u4e00\u4e2a\u540c\u7ea7\u8282\u70b9, \u5982\u679c\u6ca1\u6709\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nextSibling"),": \u4e0b\u4e00\u4e2a\u540c\u7ea7\u8282\u70b9, \u5982\u679c\u6ca1\u6709\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributeName"),": \u53d1\u751f\u53d8\u52a8\u7684\u5c5e\u6027, \u5982\u679c\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"attributeFilter"),", \u5219\u53ea\u8fd4\u56de\u9884\u5148\u6307\u5b9a\u7684\u5c5e\u6027. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oldValue"),": \u53d8\u52a8\u524d\u7684\u503c. \u8fd9\u4e2a\u5c5e\u6027\u53ea\u5bf9",(0,a.kt)("inlineCode",{parentName:"li"},"attribute"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"characterData"),"\u53d8\u52a8\u6709\u6548, \u5982\u679c\u53d1\u751f",(0,a.kt)("inlineCode",{parentName:"li"},"childList"),"\u53d8\u52a8, \u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("h3",{id:"\u76d1\u542c\u5b50\u5143\u7d20\u53d8\u52a8"},"\u76d1\u542c\u5b50\u5143\u7d20\u53d8\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let callback = function (records){\n  records.map(function(record){\n    console.log('Mutation type: ' + record.type);\n    console.log('Mutation target: ' + record.target);\n  });\n};\n\nlet mo = new MutationObserver(callback);\n\nlet option = {\n  'childList': true,\n  'subtree': true\n};\n\nmo.observe(document.body, option);\n")),(0,a.kt)("p",null,"\u8be5\u4f8b\u5b50\u4e2d\u7684\u89c2\u5bdf\u5668, \u89c2\u5bdf",(0,a.kt)("inlineCode",{parentName:"p"},"body"),"\u7684\u6240\u6709\u4e0b\u7ea7\u8282\u70b9(",(0,a.kt)("inlineCode",{parentName:"p"},"childList"),"\u8868\u793a\u89c2\u5bdf\u5b50\u8282\u70b9, ",(0,a.kt)("inlineCode",{parentName:"p"},"subtree"),"\u8868\u793a\u89c2\u5bdf\u540e\u4ee3\u8282\u70b9)\u7684\u53d8\u52a8. \u56de\u8c03\u51fd\u6570\u4f1a\u5728\u63a7\u5236\u53f0\u663e\u793a\u6240\u6709\u53d8\u52a8\u7684\u7c7b\u578b\u548c\u76ee\u6807\u8282\u70b9. "),(0,a.kt)("h3",{id:"\u76d1\u542c\u5c5e\u6027\u7684\u53d8\u52a8"},"\u76d1\u542c\u5c5e\u6027\u7684\u53d8\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let callback = function (records) {\n  records.map(function (record) {\n    console.log('Previous attribute value: ' + record.oldValue);\n  });\n};\n\nlet mo = new MutationObserver(callback);\n\nlet element = document.getElementById('#my_element');\n\nlet options = {\n  'attributes': true,\n  'attributeOldValue': true\n}\n\nmo.observe(element, options);\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u5148\u8bbe\u5b9a\u8ffd\u8e2a\u5c5e\u6027\u53d8\u52a8(",(0,a.kt)("inlineCode",{parentName:"p"},"'attribute':true"),"), \u7136\u540e\u8bbe\u5b9a\u8bb0\u5f55\u53d8\u52a8\u524d\u7684\u503c. \u5b9e\u9645\u53d1\u751f\u53d8\u52a8\u65f6, \u4f1a\u5c06\u53d8\u52a8\u524d\u7684\u503c\u663e\u793a\u5728\u63a7\u5236\u53f0. "),(0,a.kt)("h3",{id:"\u53d6\u4ee3domcontentloaded\u4e8b\u4ef6"},"\u53d6\u4ee3",(0,a.kt)("inlineCode",{parentName:"h3"},"DOMContentLoaded"),"\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u7f51\u9875\u52a0\u8f7d\u7684\u65f6\u5019, DOM\u8282\u70b9\u7684\u751f\u6210\u4f1a\u4ea7\u751f\u53d8\u52a8\u8bb0\u5f55, \u56e0\u6b64\u53ea\u8981\u89c2\u5bdfDOM\u7684\u53d8\u52a8, \u5c31\u80fd\u5728\u7b2c\u4e00\u4e8b\u4ef6\u89e6\u53d1\u76f8\u5173\u7684\u4e8b\u4ef6, \u53ef\u4ee5\u7528\u6765\u53d6\u4ee3",(0,a.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded"),"\u4e8b\u4ef6."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var observer = new MutationObserver(callback);\nobserver.observe(document.documentElement, {\n  childList: true,\n  subtree: true\n});\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d, \u76d1\u542c",(0,a.kt)("inlineCode",{parentName:"p"},"document.documentELement"),"\u7684\u5b50\u8282\u70b9\u7684\u53d8\u52a8, ",(0,a.kt)("inlineCode",{parentName:"p"},"subtree"),"\u5c5e\u6027\u6307\u5b9a\u76d1\u542c\u8fd8\u5305\u62ec\u540e\u4ee3\u8282\u70b9. \u56e0\u6b64, \u4efb\u610f\u4e00\u4e2a\u7f51\u9875\u5143\u7d20\u4e00\u65e6\u751f\u6210, \u5c31\u7acb\u523b\u88ab\u76d1\u542c\u5230. "),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5c01\u88c5\u4e86\u76d1\u542cDOM\u751f\u6210\u7684\u51fd\u6570:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"(function(win){\n  'use strict';\n\n  var listeners = [];\n  var doc = win.document;\n  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;\n  var observer;\n\n  function ready(selector, fn){\n    // \u50a8\u5b58\u9009\u62e9\u5668\u548c\u56de\u8c03\u51fd\u6570\n    listeners.push({\n      selector: selector,\n      fn: fn\n    });\n    if(!observer){\n      // \u76d1\u542cdocument\u53d8\u5316\n      observer = new MutationObserver(check);\n      observer.observe(doc.documentElement, {\n        childList: true,\n        subtree: true\n      });\n    }\n    // \u68c0\u67e5\u8be5\u8282\u70b9\u662f\u5426\u5df2\u7ecf\u5728DOM\u4e2d\n    check();\n  }\n\n  function check(){\n  // \u68c0\u67e5\u662f\u5426\u5339\u914d\u5df2\u50a8\u5b58\u7684\u8282\u70b9\n    for(var i = 0; i < listeners.length; i++){\n      var listener = listeners[i];\n      // \u68c0\u67e5\u6307\u5b9a\u8282\u70b9\u662f\u5426\u6709\u5339\u914d\n      var elements = doc.querySelectorAll(listener.selector);\n      for(var j = 0; j < elements.length; j++){\n        var element = elements[j];\n        // \u786e\u4fdd\u56de\u8c03\u51fd\u6570\u53ea\u4f1a\u5bf9\u8be5\u5143\u7d20\u8c03\u7528\u4e00\u6b21\n        if(!element.ready){\n          element.ready = true;\n          // \u5bf9\u8be5\u8282\u70b9\u8c03\u7528\u56de\u8c03\u51fd\u6570\n          listener.fn.call(element, element);\n        }\n      }\n    }\n  }\n\n  // \u5bf9\u5916\u66b4\u9732ready\n  win.ready = ready;\n\n})(this);\n\nready('.foo', function(element){\n  // ...\n});\n")))}p.isMDXComponent=!0}}]);