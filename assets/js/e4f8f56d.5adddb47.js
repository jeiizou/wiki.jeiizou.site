"use strict";(self.webpackChunkwiki_site=self.webpackChunkwiki_site||[]).push([[9214],{50158:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},60442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(39421),o=(t(46393),t(50158));const a={slug:"/DataStructureAndAlgorithm/FourierTransform"},i="\u5085\u91cc\u53f6\u53d8\u6362",c={unversionedId:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u5085\u91cc\u53f6\u53d8\u6362",id:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u5085\u91cc\u53f6\u53d8\u6362",title:"\u5085\u91cc\u53f6\u53d8\u6362",description:"\u7b80\u5355\u6765\u8bf4, \u5085\u91cc\u53f6\u53d8\u6362\u5c31\u662f\u628a\u4e00\u4e2a\u8f93\u5165\u4fe1\u53f7\u5206\u89e3\u6210\u4e00\u5806\u6b63\u5f26\u6ce2\u7684\u53e0\u52a0.",source:"@site/docs/04-\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u5085\u91cc\u53f6\u53d8\u6362.md",sourceDirName:"04-\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",slug:"/DataStructureAndAlgorithm/FourierTransform",permalink:"/docs/DataStructureAndAlgorithm/FourierTransform",draft:!1,tags:[],version:"current",frontMatter:{slug:"/DataStructureAndAlgorithm/FourierTransform"},sidebar:"tutorialSidebar",previous:{title:"DFS&BFS",permalink:"/docs/DataStructureAndAlgorithm/DFS&BFS"},next:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/docs/DataStructureAndAlgorithm/DynamicPlanning"}},u={},l=[],p={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5085\u91cc\u53f6\u53d8\u6362"},"\u5085\u91cc\u53f6\u53d8\u6362"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b80\u5355\u6765\u8bf4, \u5085\u91cc\u53f6\u53d8\u6362\u5c31\u662f\u628a\u4e00\u4e2a\u8f93\u5165\u4fe1\u53f7\u5206\u89e3\u6210\u4e00\u5806\u6b63\u5f26\u6ce2\u7684\u53e0\u52a0.")),(0,o.kt)("p",null,"\u5229\u7528\u5085\u91cc\u53f6\u53d8\u5316, \u6211\u4eec\u53ef\u4ee5\u628a\u97f3\u9891\u4e2d\u6700\u91cd\u8981\u7684\u6210\u5206\u8868\u8fbe\u51fa\u6765, \u5e76\u4e14\u5f97\u5230\u548c\u539f\u59cb\u58f0\u97f3\u975e\u5e38\u63a5\u8fd1\u7684\u6ce2\u5f62. \u5728\u8ba1\u7b97\u673a\u4e2d, \u7528\u4e00\u7cfb\u5217\u6570\u636e\u70b9\u7684\u5f62\u5f0f\u6765\u5b58\u50a8."))}s.isMDXComponent=!0}}]);