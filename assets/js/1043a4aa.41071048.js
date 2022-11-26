"use strict";(self.webpackChunk_jeiiz_wiki_site=self.webpackChunk_jeiiz_wiki_site||[]).push([[220],{158:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||p;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=t(9421),a=(t(6393),t(158));const p={},o="\u7ec4\u4ef6\u590d\u7528",l={unversionedId:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u7ec4\u4ef6\u590d\u7528",id:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u7ec4\u4ef6\u590d\u7528",title:"\u7ec4\u4ef6\u590d\u7528",description:"\u9ad8\u9636\u7ec4\u4ef6(HOC)",source:"@site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u7ec4\u4ef6\u590d\u7528.md",sourceDirName:"\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React",slug:"/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u7ec4\u4ef6\u590d\u7528",permalink:"/static-site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u7ec4\u4ef6\u590d\u7528",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/static-site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/React/\u6027\u80fd\u4f18\u5316"},next:{title:"Svelte\u5feb\u901f\u5165\u95e8",permalink:"/static-site/docs/\u524d\u7aef\u751f\u6001/\u524d\u7aef\u6846\u67b6/Svelte\u5feb\u901f\u5165\u95e8"}},s={},i=[{value:"\u9ad8\u9636\u7ec4\u4ef6(HOC)",id:"\u9ad8\u9636\u7ec4\u4ef6hoc",level:2},{value:"\u7ea6\u5b9a\u548c\u539f\u5219",id:"\u7ea6\u5b9a\u548c\u539f\u5219",level:3},{value:"\u5c5e\u6027\u4ee3\u7406",id:"\u5c5e\u6027\u4ee3\u7406",level:3},{value:"\u64cd\u4f5c Props",id:"\u64cd\u4f5c-props",level:4},{value:"\u901a\u8fc7 Refs \u8bbf\u95ee\u5230\u7ec4\u4ef6\u5b9e\u4f8b",id:"\u901a\u8fc7-refs-\u8bbf\u95ee\u5230\u7ec4\u4ef6\u5b9e\u4f8b",level:4},{value:"\u63d0\u53d6 state",id:"\u63d0\u53d6-state",level:4},{value:"\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9 WrappedComponent",id:"\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9-wrappedcomponent",level:4},{value:"\u53cd\u5411\u7ee7\u627f",id:"\u53cd\u5411\u7ee7\u627f",level:3},{value:"\u4e00\u81f4\u5316\u5904\u7406(Reconciliation process)",id:"\u4e00\u81f4\u5316\u5904\u7406reconciliation-process",level:4},{value:"\u6e32\u67d3\u52ab\u6301",id:"\u6e32\u67d3\u52ab\u6301",level:4},{value:"\u6e32\u67d3\u5c5e\u6027(Render Props)",id:"\u6e32\u67d3\u5c5e\u6027render-props",level:2},{value:"React Hook",id:"react-hook",level:2},{value:"Mixin",id:"mixin",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"mixin",id:"mixin-1",level:3},{value:"HOC",id:"hoc",level:3},{value:"Render Props",id:"render-props",level:3},{value:"React Hook",id:"react-hook-1",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:i};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ec4\u4ef6\u590d\u7528"},"\u7ec4\u4ef6\u590d\u7528"),(0,a.kt)("h2",{id:"\u9ad8\u9636\u7ec4\u4ef6hoc"},"\u9ad8\u9636\u7ec4\u4ef6(HOC)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9ad8\u9636\u7ec4\u4ef6\u662f React \u4e2d\u7528\u4e8e\u590d\u7528\u7ec4\u4ef6\u903b\u8f91\u7684\u4e00\u79cd\u9ad8\u7ea7\u6280\u5de7. HOC \u81ea\u8eab\u4e0d\u662f React API \u7684\u4e00\u90e8\u5206, \u5b83\u662f\u57fa\u4e8e React \u7279\u6027\u7684\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f.")),(0,a.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u662f\u53c2\u6570\u4e3a\u7ec4\u4ef6, \u8fd4\u56de\u503c\u4e3a\u65b0\u7ec4\u4ef6\u7684\u51fd\u6570:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const EnhancedComponent = higherOrderComponent(WrappedComponent);\n")),(0,a.kt)("p",null,"\u5178\u578b\u7684\u4f8b\u5b50: Redux \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"connect")),(0,a.kt)("p",null,"\u5b9e\u73b0\u9ad8\u9636\u7ec4\u4ef6\u6709\u4e24\u79cd\u65b9\u5f0f:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u4ee3\u7406(Props Proxy): HOC \u5bf9\u4f20\u7ed9 WrappedComponent \u7684 props \u8fdb\u884c\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ol"},"\u53cd\u5411\u7ee7\u627f(Ingeritance Inversion): HOC \u7ee7\u627f WrappedComponent")),(0,a.kt)("p",null,"\u5728\u8ba8\u8bba\u5b9e\u73b0\u4e4b\u524d, \u6709\u4e9b\u8bbe\u8ba1\u4e0a\u7684\u7ea6\u5b9a\u6765\u5e2e\u52a9\u6211\u4eec\u5199\u51fa\u5408\u7406\u7684 HOC"),(0,a.kt)("h3",{id:"\u7ea6\u5b9a\u548c\u539f\u5219"},"\u7ea6\u5b9a\u548c\u539f\u5219"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6539\u53d8\u539f\u59cb\u7ec4\u4ef6, \u4f7f\u7528\u7ec4\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5c06\u4e0d\u76f8\u5173\u7684 props \u4f20\u9012\u7ed9\u88ab\u5305\u88f9\u7684\u7ec4\u4ef6:"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u5927\u5316\u53ef\u7ec4\u5408\u578b: \u51fd\u6570\u67ef\u91cc\u5316\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u5305\u88c5\u663e\u793a\u540d\u79f0\u4ee5\u4fbf\u8f7b\u677e\u8c03\u8bd5: \u4e00\u822c\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"with"),"\u5f00\u5934\u7684\u51fd\u6570\u540d\u79f0\u6765\u547d\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u518d render \u65b9\u6cd5\u4e2d\u4f7f\u7528 hoc"),(0,a.kt)("li",{parentName:"ul"},"\u52a1\u5fc5\u590d\u5236\u9759\u6001\u65b9\u6cd5")),(0,a.kt)("h3",{id:"\u5c5e\u6027\u4ee3\u7406"},"\u5c5e\u6027\u4ee3\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ppHOC(WrappedComponent) {\n    return class PP extends React.Component {\n        render() {\n            return <WrappedComponent {...this.props} />;\n        }\n    };\n}\n")),(0,a.kt)("p",null,"HOC \u5728 render \u65b9\u6cd5\u4e2d\u8fd4\u56de\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedComponent"),"\u7c7b\u578b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"React Element"),", \u6211\u4eec\u8fd8\u4f20\u5165\u4f8b\u5982 HOC \u63a5\u6536\u5230\u7684 props, \u8fd9\u5c31\u662f\u540d\u5b57 Props Proxy \u7684\u7531\u6765."),(0,a.kt)("p",null,"Props Proxy \u53ef\u4ee5\u505a\u4ec0\u4e48:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c props"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Refs \u8bbf\u95ee\u5230\u7ec4\u4ef6\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u53d6 state"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9 WrappedComponent")),(0,a.kt)("h4",{id:"\u64cd\u4f5c-props"},"\u64cd\u4f5c Props"),(0,a.kt)("p",null,"\u8bfb\u53d6, \u6dfb\u52a0, \u7f16\u8f91, \u5220\u9664\u4f20\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedComponent"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"props"),", \u5f53\u5220\u9664\u6216\u8005\u7f16\u8f91\u91cd\u8981\u7684 props \u65f6\u8981\u5c0f\u5fc3, \u8981\u786e\u4fdd\u9ad8\u9636\u7ec4\u4ef6\u7684 props \u4e0d\u4f1a\u7834\u574f",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedComponent"),"(\u7528\u547d\u540d\u7a7a\u95f4)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ppHOC(WrappedComponent) {\n    return class PP extends React.Component {\n        newProps = {\n            user: currentLoggedInUser\n        };\n        render() {\n            return <WrappedComponent {...this.props} {...this.newProps} />;\n        }\n    };\n}\n")),(0,a.kt)("h4",{id:"\u901a\u8fc7-refs-\u8bbf\u95ee\u5230\u7ec4\u4ef6\u5b9e\u4f8b"},"\u901a\u8fc7 Refs \u8bbf\u95ee\u5230\u7ec4\u4ef6\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function refsHOC(WrappedComponent) {\n    return class RefsHOC extends React.Component {\n        proc(wrappedComponentInstance) {\n            wrappedComponentInstance.method();\n        }\n        render() {\n            const props = Object.assign({}, this.props, { ref: this.proc.bind(this) });\n            return <WrappedComponent {...props} />;\n        }\n    };\n}\n")),(0,a.kt)("h4",{id:"\u63d0\u53d6-state"},"\u63d0\u53d6 state"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165 props \u548c\u56de\u8c03\u51fd\u6570\u628a state \u63d0\u53d6\u51fa\u6765\uff0c\u7c7b\u4f3c\u4e8e smart component \u4e0e dumb component\u3002"),(0,a.kt)("p",null,"\u63d0\u53d6 state \u7684\u4f8b\u5b50\uff1a\u63d0\u53d6\u4e86 input \u7684 value \u548c onChange \u65b9\u6cd5\u3002\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u4e0d\u662f\u5f88\u5e38\u89c4\uff0c\u4f46\u8db3\u591f\u8bf4\u660e\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ppHOC(WrappedComponent) {\n    return class PP extends React.Component {\n        constructor(props) {\n            super(props);\n            this.state = {\n                name: ''\n            };\n            this.onNameChange = this.onNameChange.bind(this);\n        }\n        onNameChange(event) {\n            this.setState({\n                name: event.target.value\n            });\n        }\n        render() {\n            const newProps = {\n                name: {\n                    value: this.state.name,\n                    onChange: this.onNameChange\n                }\n            };\n            return <WrappedComponent {...this.props} {...newProps} />;\n        }\n    };\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'@ppHOC\nclass Example extends React.Component {\n    render() {\n        return <input name="name" {...this.props.name} />;\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6837, \u8fd9\u4e2a input \u5c31\u4f1a\u81ea\u52a8\u79f0\u4e3a\u53d7\u63a7\u7ec4\u4ef6"),(0,a.kt)("h4",{id:"\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9-wrappedcomponent"},"\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9 WrappedComponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ppHOC(WrappedComponent) {\n    return class PP extends React.Component {\n        render() {\n            return (\n                <div style={{ display: 'block' }}>\n                    <WrappedComponent {...this.props} />\n                </div>\n            );\n        }\n    };\n}\n")),(0,a.kt)("h3",{id:"\u53cd\u5411\u7ee7\u627f"},"\u53cd\u5411\u7ee7\u627f"),(0,a.kt)("p",null,"Inheritance Inversion (II) \u7684\u6700\u7b80\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function iiHOC(WrappedComponent) {\n    return class Enhancer extends WrappedComponent {\n        render() {\n            return super.render();\n        }\n    };\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u7684\u4ee3\u7801\u4e2d, HOC \u7c7b\u7ee7\u627f\u4e86 WrappedComponent, \u4e4b\u6240\u4ee5\u88ab\u79f0\u4e3a Ingeritance Inversion, \u662f\u56e0\u4e3a WrappedComponent \u88ab Enhancer \u7ee7\u627f\u4e86, \u800c\u4e0d\u662f WrappedComponent \u7ee7\u627f\u4e86 Enhancer"),(0,a.kt)("p",null,"\u53cd\u5411\u7ee7\u627f\u5141\u8bb8 HOC \u901a\u8fc7 this \u8bbf\u95ee\u5230 WrappedComponent, \u610f\u5473\u7740\u5b83\u53ef\u4ee5\u8bbf\u95ee\u5230 state, props, \u7ec4\u4ef6\u751f\u547d\u5468\u671f\u65b9\u6cd5\u548c render \u65b9\u6cd5."),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5, \u4e3a\u4e86\u4e0d\u7834\u574f WrappedComponent, \u8bf7\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"super.[lifecycleHook]")),(0,a.kt)("h4",{id:"\u4e00\u81f4\u5316\u5904\u7406reconciliation-process"},"\u4e00\u81f4\u5316\u5904\u7406(Reconciliation process)"),(0,a.kt)("p",null,"React \u5728\u5904\u7406\u5b57\u7b26\u4e32\u7c7b\u578b\u7684 React \u5143\u7d20, \u51fd\u6570\u7c7b\u578b\u7684 React \u5143\u7d20\u662f, \u4f1a\u8fdb\u884c\u4e00\u81f4\u5316\u5904\u7406, \u89e3\u6790\u6210\u4e00\u4e2a\u5b8c\u5168\u6709\u5b57\u7b26\u4e32\u7c7b\u578b React \u7ec4\u4ef6\u7ec4\u6210\u7684\u6811, \u518d\u8f6c\u6362\u4e3a DOM \u5143\u7d20, \u8fd9\u610f\u5473\u7740 Inheritance Inversion \u7684\u9ad8\u9636\u7ec4\u4ef6\u4e0d\u4e00\u5b9a\u4f1a\u89e3\u6790\u5b8c\u6574\u5b50\u6811."),(0,a.kt)("h4",{id:"\u6e32\u67d3\u52ab\u6301"},"\u6e32\u67d3\u52ab\u6301"),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u88ab\u79f0\u4e3a\u6e32\u67d3\u52ab\u6301, \u662f\u56e0\u4e3a HOC \u63a7\u5236\u4e86 WrappedComponent \u7684\u6e32\u67d3\u8f93\u51fa, \u53ef\u4ee5\u4f7f\u7528\u5b83:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7531 render \u8f93\u51fa\u7684\u4efb\u4f55 React \u5143\u7d20\u4e2d\u8bfb\u53d6\u3001\u6dfb\u52a0\u3001\u7f16\u8f91\u3001\u5220\u9664 props"),(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u548c\u4fee\u6539\u7531 render \u8f93\u51fa\u7684 React \u5143\u7d20\u6811"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u6761\u4ef6\u5730\u6e32\u67d3\u5143\u7d20\u6811"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u6837\u5f0f\u5305\u88f9\u8fdb\u5143\u7d20\u6811\uff08\u5c31\u50cf\u5728 Props Proxy \u4e2d\u7684\u90a3\u6837\uff09")),(0,a.kt)("p",null,"\u4f8b\u5982: \u6761\u4ef6\u6e32\u67d3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function iiHOC(WrappedComponent) {\n    return class Enhancer extends WrappedComponent {\n        render() {\n            if (this.props.loggedIn) {\n                return super.render();\n            } else {\n                return null;\n            }\n        }\n    };\n}\n")),(0,a.kt)("p",null,"\u4fee\u6539\u7531 render \u65b9\u6cd5\u8f93\u51fa\u7684 React \u7ec4\u4ef6\u6811:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function iiHOC(WrappedComponent) {\n    return class Enhancer extends WrappedComponent {\n        render() {\n            const elementsTree = super.render();\n            let newProps = {};\n            if (elementsTree && elementsTree.type === 'input') {\n                newProps = { value: 'may the force be with you' };\n            }\n            const props = Object.assign({}, elementsTree.props, newProps);\n            const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);\n            return newElementsTree;\n        }\n    };\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5982\u679c WrappedComponent \u7684\u8f93\u51fa\u5728\u6700\u9876\u5c42\u6709\u4e00\u4e2a input\uff0c\u90a3\u4e48\u5c31\u628a\u5b83\u7684 value \u8bbe\u4e3a \u201cmay the force be with you\u201d\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u5404\u79cd\u5404\u6837\u7684\u4e8b\uff0c\u4f60\u53ef\u4ee5\u904d\u5386\u6574\u4e2a\u5143\u7d20\u6811\uff0c\u7136\u540e\u4fee\u6539\u5143\u7d20\u6811\u4e2d\u4efb\u4f55\u5143\u7d20\u7684 props\u3002\u8fd9\u4e5f\u6b63\u662f\u6837\u5f0f\u5904\u7406\u5e93 Radium \u6240\u7528\u7684\u65b9\u6cd5\uff08\u6848\u4f8b\u5206\u6790\u4e00\u8282\u4e2d\u6709\u66f4\u591a\u5173\u4e8e Radium \u7684\u4fe1\u606f\uff09\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a\u901a\u8fc7\u8bbf\u95ee WrappedComponent \u7684 props \u548c state \u6765\u505a\u8c03\u8bd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function IIHOCDEBUGGER(WrappedComponent) {\n    return class II extends WrappedComponent {\n        render() {\n            return (\n                <div>\n                    <h2>HOC Debugger Component</h2>\n                    <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>\n                    <p>State</p>\n                    <pre>{JSON.stringify(this.state, null, 2)}</pre>\n                    {super.render()}\n                </div>\n            );\n        }\n    };\n}\n")),(0,a.kt)("p",null,"\u7528 HOC \u5305\u88f9\u4e00\u4e2a\u7ec4\u4ef6\u4f1a\u4f7f\u5176\u5931\u53bb\u539f\u672c\u7684\u7ec4\u4ef6\u540d\u79f0, \u53ef\u4ee5\u8fd9\u6837:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"HOC.displayName = `HOC(${getDisplayName(WrappedComponent)})`\n//\u6216\nclass HOC extends ... {\n  static displayName = `HOC(${getDisplayName(WrappedComponent)})`\n  ...\n}\n\nfunction getDisplayName(WrappedComponent) {\n  return WrappedComponent.displayName ||\n         WrappedComponent.name ||\n         \u2018Component\u2019\n}\n")),(0,a.kt)("h2",{id:"\u6e32\u67d3\u5c5e\u6027render-props"},"\u6e32\u67d3\u5c5e\u6027(Render Props)"),(0,a.kt)("p",null,"\u5177\u6709 render prop \u7684\u7ec4\u4ef6\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a React \u5143\u7d20\u5e76\u8c03\u7528\u5b83\u800c\u4e0d\u662f\u5b9e\u73b0\u81ea\u5df1\u7684\u6e32\u67d3\u903b\u8f91\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<DataProvider render={data => <h1>Hello {data.target}</h1>} />\n")),(0,a.kt)("p",null,"\u4ee5\u590d\u7528\u4e00\u4e2a\u9f20\u6807\u4e8b\u4ef6\u4e3a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MouseTracker extends React.Component {\n    constructor(props) {\n        super(props);\n        this.handleMouseMove = this.handleMouseMove.bind(this);\n        this.state = { x: 0, y: 0 };\n    }\n\n    handleMouseMove(event) {\n        this.setState({\n            x: event.clientX,\n            y: event.clientY\n        });\n    }\n\n    render() {\n        return (\n            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>\n                <h1>\u79fb\u52a8\u9f20\u6807!</h1>\n                <p>\n                    \u5f53\u524d\u7684\u9f20\u6807\u4f4d\u7f6e\u662f ({this.state.x}, {this.state.y})\n                </p>\n            </div>\n        );\n    }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u590d\u7528\u548c\u6dfb\u52a0\u4e00\u4e9b\u903b\u8f91:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Cat extends React.Component {\n    render() {\n        const mouse = this.props.mouse;\n        return <img src=\"/cat.jpg\" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;\n    }\n}\n\nclass Mouse extends React.Component {\n    constructor(props) {\n        super(props);\n        this.handleMouseMove = this.handleMouseMove.bind(this);\n        this.state = { x: 0, y: 0 };\n    }\n\n    handleMouseMove(event) {\n        this.setState({\n            x: event.clientX,\n            y: event.clientY\n        });\n    }\n\n    render() {\n        return (\n            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>\n                {/*\n          Instead of providing a static representation of what <Mouse> renders,\n          use the `render` prop to dynamically determine what to render.\n        */}\n                {this.props.render(this.state)}\n            </div>\n        );\n    }\n}\n\nclass MouseTracker extends React.Component {\n    render() {\n        return (\n            <div>\n                <h1>\u79fb\u52a8\u9f20\u6807!</h1>\n                <Mouse render={mouse => <Cat mouse={mouse} />} />\n            </div>\n        );\n    }\n}\n")),(0,a.kt)("p",null,"\u4e0d\u540c\u4e8e HOC \u4e2d\u7684\u9759\u6001\u7ec4\u5408, render props \u7684\u7ec4\u5408\u662f\u52a8\u6001\u7684, \u6bcf\u6b21\u7ec4\u5408\u90fd\u53d1\u751f\u5728 render \u5185\u90e8. \u5e76\u4e14\u4efb\u4f55 HOC \u90fd\u80fd\u4f7f\u7528 render props \u66ff\u4ee3."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const withMouse = Component => {\n    return class extends React.Component {\n        render() {\n            return <Mouse render={mouse => <Component {...this.props} mouse={mouse} />} />;\n        }\n    };\n};\n")),(0,a.kt)("h2",{id:"react-hook"},"React Hook"),(0,a.kt)("p",null,"React Hook \u4e5f\u80fd\u5f88\u597d\u7684\u8fdb\u884c\u7ec4\u4ef6\u7684\u903b\u8f91\u590d\u7528, \u8fd9\u91cc\u7b80\u5355\u7684\u4e3e\u4e00\u4e2a\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction useFriendStatus(friendID) {\n    const [isOnline, setIsOnline] = useState(null);\n\n    function handleStatusChange(status) {\n        setIsOnline(status.isOnline);\n    }\n\n    useEffect(() => {\n        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);\n        return () => {\n            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);\n        };\n    });\n\n    return isOnline;\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5c01\u88c5\u7684\u903b\u8f91, \u53ef\u4ee5\u7684\u591a\u4e2a\u7ec4\u4ef6\u5185\u91cd\u590d\u7684\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function FriendStatus(props) {\n    const isOnline = useFriendStatus(props.friend.id);\n\n    if (isOnline === null) {\n        return 'Loading...';\n    }\n    return isOnline ? 'Online' : 'Offline';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function FriendListItem(props) {\n    const isOnline = useFriendStatus(props.friend.id);\n\n    return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>;\n}\n")),(0,a.kt)("p",null,"\u5e76\u4e14\u8fd9\u4e24\u4e2a state \u662f\u5b8c\u5168\u72ec\u7acb\u7684, \u56e0\u4e3a Hook \u662f\u4e00\u79cd\u72b6\u6001\u903b\u8f91\u7684\u65b9\u5f0f, \u5e76\u4e0d\u662f\u5bf9\u6570\u636e\u672c\u8eab\u7684\u590d\u7528"),(0,a.kt)("h2",{id:"mixin"},"Mixin"),(0,a.kt)("p",null,"\u6700\u540e\u63d0\u4e00\u4e0b\u5df2\u7ecf\u4e0d\u5efa\u8bae\u4f7f\u7528 Mixin \u65b9\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom';\n// mixin \u4e2d\u542b\u6709\u4e86\u4f60\u9700\u8981\u5728\u4efb\u4f55\u5e94\u7528\u4e2d\u8ffd\u8e2a\u9f20\u6807\u4f4d\u7f6e\u7684\u6837\u677f\u4ee3\u7801\u3002\n// \u6211\u4eec\u53ef\u4ee5\u5c06\u6837\u677f\u4ee3\u7801\u653e\u5165\u5230\u4e00\u4e2a mixin \u4e2d\uff0c\u8fd9\u6837\u5176\u4ed6\u7ec4\u4ef6\u5c31\u80fd\u5171\u4eab\u8fd9\u4e9b\u4ee3\u7801\nconst MouseMixin = {\n    getInitialState() {\n        return { x: 0, y: 0 };\n    },\n    handleMouseMove(event) {\n        this.setState({\n            x: event.clientX,\n            y: event.clientY\n        });\n    }\n};\nconst App = React.createClass({\n    // \u4f7f\u7528 mixin\uff01\n    mixins: [MouseMixin],\n\n    render() {\n        const { x, y } = this.state;\n        return (\n            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>\n                <h1>\n                    The mouse position is ({x}, {y})\n                </h1>\n            </div>\n        );\n    }\n});\nReactDOM.render(<App />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"mixin \u4e0d\u5efa\u8bae\u88ab\u4f7f\u7528\u4e00\u65b9\u9762\u662f\u56e0\u4e3a\u5b98\u65b9\u4f7f\u7528 class \u4f5c\u4e3a\u521b\u5efa\u7ec4\u4ef6\u7684\u65b9\u6cd5\u540e, ES6 class \u4e0d\u652f\u6301 mixins, \u5e76\u4e14 mixin \u6539\u53d8\u4e86 state, \u6b64\u5916\u8fd8\u53ef\u80fd\u5b58\u5728\u540d\u5b57\u51b2\u7a81\u7b49\u95ee\u9898."),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("h3",{id:"mixin-1"},"mixin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u4e0e mixin \u4e4b\u95f4\u662f\u9690\u5f0f\u4f9d\u8d56: \u5bfc\u81f4\u96be\u4ee5\u5feb\u901f\u7406\u89e3\u7ec4\u4ef6\u884c\u4e3a, \u7ec4\u4ef6\u81ea\u8eab\u7684 state \u4e0d\u80fd\u8f7b\u6613\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2a mixin \u53ef\u80fd\u4f1a\u51b2\u7a81"),(0,a.kt)("li",{parentName:"ul"},"mixin \u503e\u5411\u4e8e\u589e\u52a0\u66f4\u591a\u72b6\u6001, \u589e\u52a0\u590d\u6742\u5ea6, \u964d\u4f4e\u53ef\u9884\u6d4b\u6027")),(0,a.kt)("h3",{id:"hoc"},"HOC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HOC \u901a\u8fc7 props \u5f71\u54cd\u5185\u90e8\u7ec4\u4ef6\u72b6\u6001, \u964d\u4f4e\u4e86\u8026\u5408\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u5177\u6709\u5929\u7136\u7684\u5c42\u7ea7\u7ed3\u6784, \u964d\u4f4e\u4e86\u590d\u6742\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4ece\u5916\u90e8\u8bbf\u95ee\u5b50\u7ec4\u4ef6\u7684 state, \u56e0\u4e3a\u65e0\u6cd5\u901a\u8fc7 shouldComponentUpdate \u8fc7\u6ee4\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0(PureComponent)"),(0,a.kt)("li",{parentName:"ul"},"Ref \u88ab\u9694\u65ad(forwardRef)"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u5c42\u5305\u88c5\u7ec4\u4ef6\u662f\u4e0d\u53ef\u89c1\u7684")),(0,a.kt)("h3",{id:"render-props"},"Render Props"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u7684 HOC \u7684\u4e00\u4e9b\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u7ec4\u4ef6\u5d4c\u5957\u8f6c\u6362\u4e3a\u4e86\u51fd\u6570\u56de\u8c03\u7684\u5d4c\u5957")),(0,a.kt)("h3",{id:"react-hook-1"},"React Hook"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u5d4c\u5957\u95ee\u9898, \u4f7f\u7528\u66f4\u52a0\u7b80\u6d01"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b9\u4fbf\u7684\u5c06\u903b\u8f91\u4e0e UI \u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 Hook \u7ec4\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u7528\u6210\u672c\u4f4e"),(0,a.kt)("li",{parentName:"ul"},"\u989d\u5916\u7684\u5b66\u4e60\u6210\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u7834\u574f\u4e86 PureComponent,React.memo \u7684\u6d45\u6bd4\u8f83\u7684\u6027\u80fd\u4f18\u5316\u6548\u679c(\u4e3a\u4e86\u53d6\u6700\u65b0\u7684 props \u548c state\uff0c\u6bcf\u6b21 render()\u90fd\u8981\u91cd\u65b0\u521b\u5efa\u4e8b\u4ef6\u5904\u51fd\u6570)"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u95ed\u5305\u573a\u666f\u53ef\u80fd\u4f1a\u5f15\u7528\u5230\u65e7\u7684 state\u3001props \u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u5b9e\u73b0\u4e0a\u4e0d\u76f4\u89c2\uff08\u4f9d\u8d56\u4e00\u4efd\u53ef\u53d8\u7684\u5168\u5c40\u72b6\u6001\uff0c\u4e0d\u518d\u90a3\u4e48\u201c\u7eaf\u201d\uff09"),(0,a.kt)("li",{parentName:"ul"},"React.memo \u5e76\u4e0d\u80fd\u5b8c\u5168\u66ff\u4ee3 shouldComponentUpdate\uff08\u56e0\u4e3a\u62ff\u4e0d\u5230 state change\uff0c\u53ea\u9488\u5bf9 props change\uff09")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.docschina.org/docs/higher-order-components.html"},"React \u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.cxymsg.com/guide/abstract.html#%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6-hoc"},"React \u7ec4\u4ef6\u590d\u7528\u6307\u5357"))))}c.isMDXComponent=!0}}]);