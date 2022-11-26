"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[7152],{158:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(6393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),v=p(n),s=i,k=v["".concat(c,".").concat(s)]||v[s]||u[s]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(9421),i=(n(6393),n(158));const l={},r="JSBridge\u6982\u8ff0",o={unversionedId:"\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef/JSBridge\u6982\u8ff0",id:"\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef/JSBridge\u6982\u8ff0",title:"JSBridge\u6982\u8ff0",description:"JSBridge\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0Native\u7aef\u548cWeb\u7aef\u7684\u53cc\u5411\u901a\u4fe1: \u4ee5JavaScript\u5f15\u64ce\u6216\u8005Webview\u5bb9\u5668\u4f5c\u4e3a\u5a92\u4ecb, \u901a\u8fc7\u534f\u5b9a\u534f\u8bae\u8fdb\u884c\u901a\u4fe1.",source:"@site/docs/\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef/JSBridge\u6982\u8ff0.md",sourceDirName:"\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef",slug:"/\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef/JSBridge\u6982\u8ff0",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef/JSBridge\u6982\u8ff0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u5668-\u8de8\u9875\u9762\u901a\u4fe1",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u6d4f\u89c8\u5668/\u6d4f\u89c8\u5668-\u8de8\u9875\u9762\u901a\u4fe1"},next:{title:"\u79fb\u52a8\u7aef\u524d\u7aef\u6280\u5de7\u6307\u5357",permalink:"/docs/\u524d\u7aef\u751f\u6001/\u79fb\u52a8\u7aef/\u79fb\u52a8\u7aef\u524d\u7aef\u6280\u5de7\u6307\u5357"}},c={},p=[{value:"WebView",id:"webview",level:2},{value:"JSBridge\u7684\u5b9e\u73b0\u539f\u7406",id:"jsbridge\u7684\u5b9e\u73b0\u539f\u7406",level:2},{value:"Native -&gt; Web",id:"native---web",level:3},{value:"Web -&gt; Native",id:"web---native",level:3},{value:"1. \u62e6\u622aWebView\u8bf7\u6c42\u7684<code>URL Schema</code>",id:"1-\u62e6\u622awebview\u8bf7\u6c42\u7684url-schema",level:4},{value:"2. \u5411wenview\u4e2d\u6ce8\u5165JS API",id:"2-\u5411wenview\u4e2d\u6ce8\u5165js-api",level:4},{value:"\u5e26\u56de\u8c03\u7684\u8c03\u7528",id:"\u5e26\u56de\u8c03\u7684\u8c03\u7528",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jsbridge\u6982\u8ff0"},"JSBridge\u6982\u8ff0"),(0,i.kt)("p",null,"JSBridge\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0Native\u7aef\u548cWeb\u7aef\u7684\u53cc\u5411\u901a\u4fe1: \u4ee5JavaScript\u5f15\u64ce\u6216\u8005Webview\u5bb9\u5668\u4f5c\u4e3a\u5a92\u4ecb, \u901a\u8fc7\u534f\u5b9a\u534f\u8bae\u8fdb\u884c\u901a\u4fe1."),(0,i.kt)("p",null,"\u901a\u8fc7HSBridge, Web\u7aef\u53ef\u4ee5\u8c03\u7528Native\u7aef\u7684Java\u63a5\u53e3, \u540c\u6837Native\u7aef\u4e5f\u53ef\u4ee5\u901a\u8fc7JSBridge\u8c03\u7528Web\u7aef\u7684JavaScript\u63a5\u53e3, \u5b9e\u73b0\u5f7c\u6b64\u7684\u53cc\u5411\u901a\u4fe1."),(0,i.kt)("h2",{id:"webview"},"WebView"),(0,i.kt)("p",null,"webView\u662f\u79fb\u52a8\u7aef\u63d0\u4f9b\u7684\u8fd0\u884cjs\u7684\u73af\u5883, \u662f\u7cfb\u7edf\u6e32\u67d3Web\u7f51\u9875\u7684\u4e00\u4e2a\u63a7\u4ef6, \u53ef\u4ee5\u4e0e\u9875\u9762js\u4ea4\u4e92, \u5b9e\u73b0\u6df7\u5408\u5f00\u53d1, \u5176\u4e2dAndroid\u548ciOS\u6709\u4e9b\u4e0d\u540c"),(0,i.kt)("p",null,"android\u7684webview\u5728\u4f4e\u7248\u672c\u548c\u9ad8\u7248\u672c\u91c7\u7528\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"webkit"),"\u5185\u6838\u662f\u4e0d\u540c\u7684, 4.4\u4e4b\u540e\u76f4\u63a5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Chrome"),"."),(0,i.kt)("p",null,"iOS\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"UIWebView"),"\u7b97\u662f\u81eaIOS2\u5c31\u6709\u7684, \u7279\u6027\u652f\u6301\u6bd4\u8f83\u5dee, ",(0,i.kt)("inlineCode",{parentName:"p"},"WKWebView"),"\u5219\u662f\u5728iOS8\u4e4b\u540e\u7684\u5347\u7ea7\u7248\u672c."),(0,i.kt)("h2",{id:"jsbridge\u7684\u5b9e\u73b0\u539f\u7406"},"JSBridge\u7684\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("p",null,"Web\u7aef\u548cNative\u53ef\u4ee5\u7c7b\u4f3c\u4e8eClient/Server\u6a21\u5f0f, Web\u7aef\u8c03\u7528\u539f\u751f\u63a5\u53e3\u65f6\u5c31\u50cfClient\u5411Server\u7aef\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u7c7b\u4f3c, JSBridge\u5728\u6b64\u5145\u5f53\u7c7b\u4f3cHTTP\u534f\u8bae\u7684\u89d2\u8272, \u5b9e\u73b0JSBridge\u4e3b\u8981\u9700\u8981\u4e24\u70b9:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06Native\u7aef\u539f\u751f\u63a5\u53e3\u5c01\u88c5\u4e3aJS\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u5c06web\u7aef\u7684js\u63a5\u53e3\u5c01\u88c5\u4e3a\u539f\u751f\u63a5\u53e3")),(0,i.kt)("h3",{id:"native---web"},"Native -> Web"),(0,i.kt)("p",null,"JS\u4f5c\u4e3a\u4e00\u79cd\u89e3\u91ca\u6027\u7684\u8bed\u8a00, \u6700\u5927\u7684\u7279\u70b9\u5c31\u662f\u53ef\u4ee5\u968f\u65f6\u968f\u5730\u7684\u901a\u8fc7\u89e3\u91ca\u5668\u6267\u884c\u4e00\u6bb5JS\u4ee3\u7801, \u6240\u4ee5\u53ef\u4ee5\u5c06\u62fc\u63a5\u7684js\u4ee3\u7801\u5b57\u7b26\u4e32, \u4f20\u5165js\u89e3\u6790\u5668\u6267\u884c, js\u89e3\u91ca\u5668\u5c31\u662f\u6307webview"),(0,i.kt)("p",null,"\u5728\u5b89\u53534.4\u4e4b\u524d\u53ea\u80fd\u4f7f\u7528loadURL\u6765\u5b9e\u73b0, \u5e76\u4e14\u65e0\u6cd5\u6267\u884c\u56de\u8c03:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String jsCode = String.format("window.showWebDialog(\'%s\')", text);\nwebView.loadUrl("javascript: " + jsCode);\n')),(0,i.kt)("p",null,"\u5728\u5b89\u53534.4\u4e4b\u540e\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"evaluateJavascript"),"\u6765\u6267\u884cJS\u4ee3\u7801, \u5e76\u4e14\u53ef\u4ee5\u83b7\u53d6\u8fd4\u56de\u503c\u6267\u884c\u56de\u8c03:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"String jsCode = String.format(\"window.showWebDialog('%s')\", text);\nwebView.evaluateJavascript(jsCode, new ValueCallback<String>() {\n  @Override\n  public void onReceiveValue(String value) {\n\n  }\n});\n")),(0,i.kt)("p",null,"IOS\u7684UIWebView\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"stringByEvalutingJavaScriptFromString"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'NSString *jsStr = @"\u6267\u884c\u7684JS\u4ee3\u7801";\n[webView stringByEvaluatingJavaScriptFromString:jsStr];\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"iOS"),"\u7684WKWebView\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"evaluateJavaScript"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'[webView evaluateJavaScript:@"\u6267\u884c\u7684JS\u4ee3\u7801" completionHandler:^(id _Nullable response, NSError * _Nullable error) {\n  \n}];\n')),(0,i.kt)("h3",{id:"web---native"},"Web -> Native"),(0,i.kt)("p",null,"web\u8c03\u7528Native\u7aef\u4e3b\u8981\u6709\u4e24\u79cd\u65b9\u5f0f"),(0,i.kt)("h4",{id:"1-\u62e6\u622awebview\u8bf7\u6c42\u7684url-schema"},"1. \u62e6\u622aWebView\u8bf7\u6c42\u7684",(0,i.kt)("inlineCode",{parentName:"h4"},"URL Schema")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"URL Schema"),"\u662f\u7c7b\u4f3cURL\u7684\u4e00\u79cd\u8bf7\u6c42\u683c\u5f0f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<protocol>://<host>/<path>?<qeury>#fragment\n")),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49JSBridge\u7684URL Schema, \u6bd4\u5982: ",(0,i.kt)("inlineCode",{parentName:"p"},"jsbridge://showToast?text=hello")),(0,i.kt)("p",null,"Native\u52a0\u8f7dWebview\u4e4b\u540e, web\u53d1\u9001\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u4f1a\u7ecf\u8fc7webview\u7ec4\u4ef6, \u6240\u4ee5native\u53ef\u4ee5\u91cd\u5199webview\u91cc\u7684\u65b9\u6cd5, \u62e6\u622aweb\u53d1\u8d77\u7684\u8bf7\u6c42, \u6211\u4eec\u5bf9\u8bf7\u6c42\u7684\u683c\u5f0f\u8fdb\u884c\u5224\u65ad:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u7b26\u5408\u6211\u4eec\u81ea\u5b9a\u4e49\u7684URL Schema, \u5bf9URL\u8fdb\u884c\u89e3\u6790, \u62ff\u5230\u76f8\u5173\u64cd\u4f5c, \u8fdb\u800c\u8c03\u7528\u539f\u751f\u7684Native\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u7b26\u5408\u6211\u4eec\u81ea\u5b9a\u4e49\u7684URL Schema, \u5219\u76f4\u63a5\u8f6c\u53d1, \u8bf7\u6c42\u771f\u6b63\u7684\u670d\u52a1")),(0,i.kt)("p",null,"\u5bf9\u4e8eWeb, \u53d1\u9001URL\u8bf7\u6c42\u7684\u65b9\u6cd5\u6709\u8fd9\u4e48\u51e0\u79cd:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a\u6807\u7b7e"),(0,i.kt)("li",{parentName:"ol"},"location.href"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528iframe.src"),(0,i.kt)("li",{parentName:"ol"},"\u53d1\u9001ajax\u8bf7\u6c42")),(0,i.kt)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u4e2d, a\u6807\u7b7e\u9700\u8981\u7528\u6237\u64cd\u4f5c, href\u53ef\u80fd\u4f1a\u5f15\u8d77\u9875\u9762\u7684\u4e22\u5931, ajax\u8bf7\u6c42\u5728\u5b89\u5353\u4e2d\u6ca1\u6709\u76f8\u5e94\u7684\u62e6\u622a\u65b9\u6cd5, \u6240\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"iframe.src"),"\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u65b9\u6848:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5353\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"shouldOverrideUrlLoading"),"\u65b9\u6cd5\u62e6\u622a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UIWebView"),"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"shouldStartLoadWithRequest"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WKWebView"),"\u5219\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"decidePolicyForNavigationAction"))),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u4ece\u65e9\u671f\u5c31\u5b58\u5728\u4e86, \u517c\u5bb9\u6027\u597d. \u7f3a\u70b9\u662f\u57fa\u4e8eURL, \u957f\u5ea6\u53d7\u9650, \u5e76\u4e14\u4e0d\u592a\u76f4\u89c2."),(0,i.kt)("h4",{id:"2-\u5411wenview\u4e2d\u6ce8\u5165js-api"},"2. \u5411wenview\u4e2d\u6ce8\u5165JS API"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u901a\u8fc7webView\u63d0\u4f9b\u7684\u63a5\u53e3, App\u5c06Native\u7684\u76f8\u5173\u63a5\u53e3\u6ce8\u5165\u5230JS\u7684Context(window)\u7684\u5bf9\u8c61\u4e2d, \u4e00\u822c\u6765\u8bf4\u8fd9\u4e2a\u5bf9\u8c61\u5185\u7684\u65b9\u6cd5\u540d\u4f1a\u4e0eNative\u76f8\u5173\u65b9\u6cd5\u540d\u662f\u76f8\u540c\u7684, Web\u7aef\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u5168\u5c40window\u4e0b\u4f7f\u7528\u8fd9\u4e2a\u66b4\u9732\u7684JS\u5bf9\u8c61, \u8fdb\u800c\u8c03\u7528\u539f\u751f\u7aef\u7684\u65b9\u6cd5."),(0,i.kt)("p",null,"\u8fd9\u4e2a\u8fc7\u7a0b\u66f4\u52a0\u7684\u7b80\u5355\u76f4\u89c2, \u4e0d\u8fc7\u6709\u517c\u5bb9\u6027\u7684\u95ee\u9898, \u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \u6ce8\u5165\u5168\u5c40JS\u5bf9\u8c61\nwebView.addJavascriptInterface(new NativeBridge(this), "NativeBridge");\n\nclass NativeBridge {\n  private Context ctx;\n  NativeBridge(Context ctx) {\n    this.ctx = ctx;\n  }\n\n  // \u589e\u52a0JS\u8c03\u7528\u63a5\u53e3\n  @JavascriptInterface\n  public void showNativeDialog(String text) {\n    new AlertDialog.Builder(ctx).setMessage(text).create().show();\n  }\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u5728web\u7aef\u8c03\u7528:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.NativeBridge.showNativeDialog('hello');\n")),(0,i.kt)("p",null,"iOS\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"UIWebView"),"\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSciptCore")),(0,i.kt)("p",null,"iOS\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"WKWebView"),"\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"WKScriptMessageHandler")),(0,i.kt)("h3",{id:"\u5e26\u56de\u8c03\u7684\u8c03\u7528"},"\u5e26\u56de\u8c03\u7684\u8c03\u7528"),(0,i.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62, \u6211\u4eec\u73b0\u5728\u8fd8\u662f\u4e00\u4e2a\u5355\u5411\u901a\u4fe1\u7684\u8fc7\u7a0b. "),(0,i.kt)("p",null,"\u6240\u4ee5\u5728\u5bf9\u7aef\u64cd\u4f5c\u5e76\u8fd4\u56de\u7ed3\u679c, \u6709\u8f93\u5165\u6709\u8f93\u51fa\u624d\u662f\u5b8c\u6574\u7684\u8c03\u7528."),(0,i.kt)("p",null,"\u57fa\u4e8e\u5355\u5411\u901a\u4fe1\u5c31\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u79cd\u529f\u80fd, \u6211\u4eec\u5728\u4e00\u7aef\u8c03\u7528\u7684\u65f6\u5019\u518d\u53c2\u6570\u4e2d\u52a0\u4e00\u4e2acallbackId\u6807\u8bb0\u5bf9\u5e94\u7684\u56de\u8c03, \u5bf9\u7aef\u63a5\u6536\u5230\u8c03\u7528\u8bf7\u6c42\u4ee5\u540e, \u8fdb\u884c\u5b9e\u9645\u64cd\u4f5c, \u5982\u679c\u5e26\u6709callbackId, \u5bf9\u7aef\u5728\u8fdb\u884c\u4e00\u6b21\u8c03\u7528, \u5c06\u7ed3\u679c, callbackId\u56de\u4f20\u56de\u6765, \u8fd9\u7aef\u6839\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"callbackId"),"\u5339\u914d\u54cd\u5e94\u7684\u56de\u8c03, \u5c06\u7ed3\u679c\u4f20\u5165\u6267\u884c\u5373\u53ef."),(0,i.kt)("p",null,"\u4ee5\u5b89\u5353, \u5728web\u7aef\u5b9e\u73b0\u5e26\u6709\u56de\u8c03\u7684jsb\u4e3a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"// Web\u7aef\u4ee3\u7801\uff1a\n<body>\n  <div>\n    <button id=\"showBtn\">\u83b7\u53d6Native\u8f93\u5165\uff0c\u4ee5Web\u5f39\u7a97\u5c55\u73b0</button>\n  </div>\n</body>\n<script>\n  let id = 1;\n  // \u6839\u636eid\u4fdd\u5b58callback\n  const callbackMap = {};\n  // \u4f7f\u7528JSSDK\u5c01\u88c5\u8c03\u7528\u4e0eNative\u901a\u4fe1\u7684\u4e8b\u4ef6\uff0c\u907f\u514d\u8fc7\u591a\u7684\u6c61\u67d3\u5168\u5c40\u73af\u5883\n  window.JSSDK = {\n    // \u83b7\u53d6Native\u7aef\u8f93\u5165\u6846value\uff0c\u5e26\u6709\u56de\u8c03\n    getNativeEditTextValue(callback) {\n      const callbackId = id++;\n      callbackMap[callbackId] = callback;\n      // \u8c03\u7528JSB\u65b9\u6cd5\uff0c\u5e76\u5c06callbackId\u4f20\u5165\n      window.NativeBridge.getNativeEditTextValue(callbackId);\n    },\n    // \u63a5\u6536Native\u7aef\u4f20\u6765\u7684callbackId\n    receiveMessage(callbackId, value) {\n      if (callbackMap[callbackId]) {\n        // \u6839\u636eID\u5339\u914dcallback\uff0c\u5e76\u6267\u884c\n        callbackMap[callbackId](value);\n      }\n    }\n  };\n\n  const showBtn = document.querySelector('#showBtn');\n  // \u7ed1\u5b9a\u6309\u94ae\u4e8b\u4ef6\n  showBtn.addEventListener('click', e => {\n    // \u901a\u8fc7JSSDK\u8c03\u7528\uff0c\u5c06\u56de\u8c03\u51fd\u6570\u4f20\u5165\n    window.JSSDK.getNativeEditTextValue(value => window.alert('Natvie\u8f93\u5165\u503c\uff1a' + value));\n  });\n<\/script>\n")),(0,i.kt)("p",null,"\u7136\u540e\u5728\u5b89\u5353\u7aef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Android\u7aef\u4ee3\u7801\nwebView.addJavascriptInterface(new NativeBridge(this), "NativeBridge");\n\nclass NativeBridge {\n  private Context ctx;\n  NativeBridge(Context ctx) {\n    this.ctx = ctx;\n  }\n\n  // \u83b7\u53d6Native\u7aef\u8f93\u5165\u503c\n  @JavascriptInterface\n  public void getNativeEditTextValue(int callbackId) {\n    MainActivity mainActivity = (MainActivity)ctx;\n    // \u83b7\u53d6Native\u7aef\u8f93\u5165\u6846\u7684value\n    String value = mainActivity.editText.getText().toString();\n    // \u9700\u8981\u6ce8\u5165\u5728Web\u6267\u884c\u7684JS\u4ee3\u7801\n    String jsCode = String.format("window.JSSDK.receiveMessage(%s, \'%s\')", callbackId, value);\n    // \u5728UI\u7ebf\u7a0b\u4e2d\u6267\u884c\n    mainActivity.runOnUiThread(new Runnable() {\n      @Override\n      public void run() {\n        mainActivity.webView.evaluateJavascript(jsCode, null);\n      }\n    });\n  }\n}\n')),(0,i.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6936814903021797389?utm_source=gold_browser_extension"},"\u6df1\u5165\u6d45\u51faJSBridge\uff1a\u4ece\u539f\u7406\u5230\u4f7f\u7528"))))}u.isMDXComponent=!0}}]);