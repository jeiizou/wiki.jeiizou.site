"use strict";(self.webpackChunkwiki_site=self.webpackChunkwiki_site||[]).push([[214],{50158:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var l=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),p=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return l.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return t?l.createElement(k,r(r({ref:n},d),{},{components:t})):l.createElement(k,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=t(39421),a=(t(46393),t(50158));const o={slug:"/FrontendFoundation/Node/NodeProcess"},r="Node-\u8fdb\u7a0b",s={unversionedId:"\u524d\u7aef\u57fa\u7840/Node/Node-\u8fdb\u7a0b",id:"\u524d\u7aef\u57fa\u7840/Node/Node-\u8fdb\u7a0b",title:"Node-\u8fdb\u7a0b",description:"\u6982\u8ff0",source:"@site/docs/01-\u524d\u7aef\u57fa\u7840/05-Node/03-Node-\u8fdb\u7a0b.md",sourceDirName:"01-\u524d\u7aef\u57fa\u7840/05-Node",slug:"/FrontendFoundation/Node/NodeProcess",permalink:"/docs/FrontendFoundation/Node/NodeProcess",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/FrontendFoundation/Node/NodeProcess"},sidebar:"tutorialSidebar",previous:{title:"Node-\u6a21\u5757\u673a\u5236",permalink:"/docs/FrontendFoundation/Node/NodeModuleMechanism"},next:{title:"Node-\u6d41",permalink:"/docs/FrontendFoundation/Node/NodeFlow"}},i={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u521b\u5efa\u8fdb\u7a0b",id:"\u521b\u5efa\u8fdb\u7a0b",level:2},{value:"spawn",id:"spawn",level:3},{value:"IPC",id:"ipc",level:4},{value:"exec",id:"exec",level:3},{value:"env",id:"env",level:4},{value:"detached",id:"detached",level:4},{value:"execFile",id:"execfile",level:3},{value:"xxxSync",id:"xxxsync",level:4},{value:"fork",id:"fork",level:3},{value:"\u8fdb\u7a0b\u901a\u4fe1",id:"\u8fdb\u7a0b\u901a\u4fe1",level:2},{value:"1. \u901a\u8fc7<code>stdin/stdout</code>\u4f20\u9012json",id:"1-\u901a\u8fc7stdinstdout\u4f20\u9012json",level:3},{value:"2. \u539f\u751fIPC\u652f\u6301",id:"2-\u539f\u751fipc\u652f\u6301",level:3},{value:"3. sockets",id:"3-sockets",level:3},{value:"4. message queue",id:"4-message-queue",level:3},{value:"\u5b88\u62a4\u8fdb\u7a0b",id:"\u5b88\u62a4\u8fdb\u7a0b",level:2},{value:"setsid",id:"setsid",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-\u8fdb\u7a0b"},"Node-\u8fdb\u7a0b"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"Node\u8fd0\u884c\u5728\u5355\u7ebf\u7a0b\u4e0b, \u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u65e0\u6cd5\u5229\u7528\u591a\u8fdb\u7a0b\u673a\u5668\u7684\u6027\u80fd\u4f18\u52bf."),(0,a.kt)("h2",{id:"\u521b\u5efa\u8fdb\u7a0b"},"\u521b\u5efa\u8fdb\u7a0b"),(0,a.kt)("p",null,"Node\u6709\u56db\u79cd\u521b\u5efa\u8fdb\u7a0b\u7684\u65b9\u5f0f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"spawn()"),(0,a.kt)("li",{parentName:"ul"},"exec()"),(0,a.kt)("li",{parentName:"ul"},"execFile()"),(0,a.kt)("li",{parentName:"ul"},"fork()")),(0,a.kt)("p",null,"\u4e0b\u9762\u6765\u7b80\u5355\u7684\u4ecb\u7ecd\u8fd9\u56db\u79cd\u65b9\u6cd5:"),(0,a.kt)("h3",{id:"spawn"},"spawn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\nconst child = spawn('pwd');\n// \u5e26\u53c2\u6570\u7684\u5f62\u5f0f\n// const child = spawn('find', ['.', '-type', 'f']);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spawn()"),"\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"ChildProcess"),"\u7684\u5b9e\u4f8b, ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildProcess"),"\u540c\u6837\u57fa\u4e8e\u4e8b\u4ef6\u673a\u5236(EventEmitter), \u63d0\u4f9b\u4e86\u4e00\u4e9b\u4e8b\u4ef6:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"exit: \u5b50\u8fdb\u7a0b\u9000\u51fa\u65f6\u89e6\u53d1, \u53ef\u4ee5\u5f97\u77e5\u8fdb\u7a0b\u9000\u51fa\u72b6\u6001(code\u548csignal)"),(0,a.kt)("li",{parentName:"ul"},"disconnect: \u7236\u8fdb\u7a0b\u8c03\u7528child.disconnect()\u65f6\u89e6\u53d1"),(0,a.kt)("li",{parentName:"ul"},"error: \u5b50\u8fdb\u7a0b\u521b\u5efa\u5931\u8d25, \u6216\u8005\u88abkill\u65f6\u89e6\u53d1"),(0,a.kt)("li",{parentName:"ul"},"close: \u5b50\u8fdb\u7a0b\u7684stdio\u6d41\u5173\u95ed\u662f\u89e6\u53d1"),(0,a.kt)("li",{parentName:"ul"},"message: \u5b50\u8fdb\u7a0b\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"process.send()"),"\u53d1\u9001\u6d88\u606f\u65f6\u89e6\u53d1, \u7236\u5b50\u8fdb\u7a0b\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u5185\u7f6e\u7684\u6d88\u606f\u673a\u5236\u901a\u4fe1. ")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"child.stdin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"child.stdout"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"child.stderr"),"\u8bbf\u95ee\u5b50\u8fdb\u7a0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"stdio"),"\u6d41, \u8fd9\u4e9b\u6d41\u88ab\u5173\u95ed\u7684\u65f6\u5019, \u5b50\u8fdb\u7a0b\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"close"),"\u4e8b\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"close"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),"\u7684\u533a\u522b\u4e3b\u8981\u4f53\u73b0\u5728\u591a\u8fdb\u7a0b\u5171\u4eab\u540c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"stdio"),"\u6d41\u7684\u573a\u666f, \u67d0\u4e2a\u8fdb\u7a0b\u9000\u51fa\u4e86\u4e0d\u610f\u5473\u7740",(0,a.kt)("inlineCode",{parentName:"p"},"stdio"),"\u6d41\u88ab\u5173\u95ed\u4e86. "),(0,a.kt)("p",null,"\u5728\u5b50\u8fdb\u7a0b\u4e2d, ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout/stderr"),"\u5177\u6709Readable\u7279\u6027, \u800c",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),"\u5177\u6709Writable\u7279\u6027, \u4e0e\u4e3b\u8fdb\u7a0b\u7684\u60c5\u51b5\u6b63\u597d\u662f\u76f8\u53cd\u7684. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"child.stdout.on('data', (data) => {\n  console.log(`child stdout:\\n${data}`);\n});\n\nchild.stderr.on('data', (data) => {\n  console.error(`child stderr:\\n${data}`);\n});\n")),(0,a.kt)("p",null,"\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"stdio"),"\u6d41\u7684\u7ba1\u9053\u7279\u6027\u5c31\u53ef\u4ee5\u5b8c\u6210\u4e00\u4e9b\u590d\u6742\u7684\u5de5\u4f5c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\n\nconst find = spawn('find', ['.', '-type', 'f']);\nconst wc = spawn('wc', ['-l']);\n\nfind.stdout.pipe(wc.stdin);\n\nwc.stdout.on('data', (data) => {\n  console.log(`Number of files ${data}`);\n});\n")),(0,a.kt)("h4",{id:"ipc"},"IPC"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"spawn"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"stdio"),"\u9009\u9879\u5efa\u7acbIPC\u673a\u5236:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\n\nconst child = spawn('node', ['./ipc-child.js'], { stdio: [null, null, null, 'ipc'] });\nchild.on('message', (m) => {\n  console.log(m);\n});\nchild.send('Here Here');\n\n// ./ipc-child.js\nprocess.on('message', (m) => {\n  process.send(`< ${m}`);\n  process.send('> \u4e0d\u8981\u56de\u7b54x3');\n});\n")),(0,a.kt)("h3",{id:"exec"},"exec"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spawn"),"\u65b9\u6cd5\u9ed8\u8ba4\u4e0d\u4f1a\u521b\u5efashell\u53bb\u6267\u884c\u4f20\u5165\u7684\u547d\u4ee4, \u800c",(0,a.kt)("inlineCode",{parentName:"p"},"exec()"),"\u65b9\u6cd5\u4f1a\u521b\u5efa\u4e00\u4e2ashell, "),(0,a.kt)("p",null,"\u53e6\u5916",(0,a.kt)("inlineCode",{parentName:"p"},"exec()"),"\u4e0d\u662f\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"stream"),"\u7684, \u800c\u662f\u628a\u4f20\u5165\u547d\u4ee4\u7684\u6267\u884c\u7ed3\u679c\u6682\u5b58\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"buffer"),"\u4e2d, \u518d\u6574\u4e2a\u4f20\u9012\u7ed9\u56de\u8c03\u51fd\u6570. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exec()"),"\u65b9\u6cd5\u7684\u7279\u70b9\u662f\u5b8c\u5168\u652f\u6301shell\u8bed\u6cd5, \u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u4efb\u610fshell\u811a\u672c, \u6bd4\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { exec } = require('child_process');\n\nexec('find . -type f | wc -l', (err, stdout, stderr) => {\n  if (err) {\n    console.error(`exec error: ${err}`);\n    return;\n  }\n\n  console.log(`Number of files ${stdout}`);\n});\n")),(0,a.kt)("p",null,"\u4f46\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"exec()"),"\u56e0\u6b64\u4e5f\u5b58\u5728\u547d\u4ee4\u6ce8\u5165\u7684\u5b89\u5168\u98ce\u9669, \u5728\u542b\u6709\u7528\u6237\u8f93\u5165\u7b49\u52a8\u6001\u5185\u5bb9\u7684\u573a\u666f\u8981\u7279\u522b\u6ce8\u610f. \u6240\u4ee5\u6bd4\u8f83\u9002\u7528\u7684\u573a\u666f\u662f: \u5e0c\u671b\u76f4\u63a5\u4f7f\u7528shell\u8bed\u6cd5, \u5e76\u4e14\u9884\u671f\u8f93\u51fa\u6570\u636e\u91cf\u4e0d\u5927.(\u4e0d\u5b58\u5728\u5185\u5b58\u538b\u529b)"),(0,a.kt)("p",null,"\u90a3\u4e48\u6709\u6ca1\u6709\u53c8\u652f\u6301shell, \u4e5f\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"stream IO"),"\u7684\u65b9\u6cd5, \u7b54\u6848\u662f\u6709\u7684:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\nconst child = spawn('find . -type f | wc -l', {\n  shell: true\n});\nchild.stdout.pipe(process.stdout);\n")),(0,a.kt)("p",null,"\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"shell"),"\u9009\u9879, \u5e76\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"pipe()"),"\u65b9\u6cd5\u628a\u5b50\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u51fa\u7b80\u5355\u5730\u63a5\u5230\u5f53\u524d\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u4e0a, \u4ee5\u4fbf\u770b\u5230\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c. \u5b9e\u9645\u4e0a\u8fd8\u6709\u66f4\u5bb9\u6613\u7684\u65b9\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\nprocess.stdout.on('data', (data) => {\n  console.log(data);\n});\nconst child = spawn('find . -type f | wc -l', {\n  shell: true,\n  stdio: 'inherit'\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stdio: 'inherit'"),"\u5141\u8bb8\u5b50\u8fdb\u7a0b\u7ee7\u627f\u5f53\u524d\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u8f93\u51fa\uff08\u5171\u4eab",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"stdou"),"t\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"stderr"),"\uff09\uff0c\u6240\u4ee5\u4e0a\u4f8b\u80fd\u591f\u901a\u8fc7\u76d1\u542c\u5f53\u524d\u8fdb\u7a0b",(0,a.kt)("inlineCode",{parentName:"p"},"process.stdout"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u4e8b\u4ef6\u62ff\u5230\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u7ed3\u679c."),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916, ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn"),"\u8fd8\u652f\u6301\u4e00\u4e9b\u5176\u4ed6\u7684\u9009\u9879:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const child = spawn('find . -type f | wc -l', {\n  stdio: 'inherit',\n  shell: true,\n  // \u4fee\u6539\u73af\u5883\u53d8\u91cf\uff0c\u9ed8\u8ba4process.env\n  env: { HOME: '/tmp/xxx' },\n  // \u6539\u53d8\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\n  cwd: '/tmp',\n  // \u4f5c\u4e3a\u72ec\u7acb\u8fdb\u7a0b\u5b58\u5728\n  detached: true\n});\n")),(0,a.kt)("h4",{id:"env"},"env"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"env"),"\u9009\u9879\u9664\u4e86\u4ee5\u73af\u5883\u53d8\u91cf\u5f62\u5f0f\u5411\u5b50\u8fdb\u7a0b\u4f20\u9012\u6570\u636e\u610f\u5916, \u8fd8\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u6c99\u7bb1\u5f0f\u7684\u73af\u5883\u53d8\u91cf\u9694\u79bb. \u9ed8\u8ba4\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),"\u4f5c\u4e3a\u5b50\u8fdb\u7a0b\u7684\u73af\u5883\u53d8\u91cf\u96c6, \u5b50\u8fdb\u7a0b\u4e0e\u5f53\u524d\u8fdb\u7a0b\u4e00\u6837\u80fd\u591f\u8bbf\u95ee\u6240\u6709\u73af\u5883\u53d8\u91cf, \u5982\u679c\u50cf\u4e0a\u4f8b\u4e2d\u6307\u5b9a\u81ea\u5b9a\u4e49\u5bf9\u8c61\u4f5c\u4e3a\u5b50\u8fdb\u7a0b\u7684\u73af\u5883\u53d8\u91cf\u96c6, \u5b50\u8fdb\u7a0b\u5c31\u65e0\u6cd5\u8bbf\u95ee\u5176\u4ed6\u7684\u73af\u5883\u53d8\u91cf. "),(0,a.kt)("p",null,"\u6240\u4ee5, \u5982\u679c\u60f3\u8981\u589e\u5220\u73af\u5883\u53d8\u91cf, \u53ef\u4ee5\u8fd9\u4e48\u505a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var spawn_env = JSON.parse(JSON.stringify(process.env));\n\n// remove those env vars\ndelete spawn_env.ATOM_SHELL_INTERNAL_RUN_AS_NODE;\ndelete spawn_env.ELECTRON_RUN_AS_NODE;\n\nvar sp = spawn(command, ['.'], {cwd: cwd, env: spawn_env});\n")),(0,a.kt)("h4",{id:"detached"},"detached"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\n\nconst child = spawn('node', ['stuff.js'], {\n  detached: true,\n  stdio: 'ignore'\n});\n\nchild.unref();\n")),(0,a.kt)("p",null,"\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684\u72ec\u7acb\u8fdb\u7a0b\u884c\u4e3a\u53d6\u51b3\u4e8e\u64cd\u4f5c\u7cfb\u7edf, window\u4e0a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"detached"),"\u5b50\u8fdb\u7a0b\u5c06\u62e5\u6709\u81ea\u5df1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"console"),"\u7a97\u53e3, \u800clinux\u4e0a\u7684\u8be5\u8fdb\u7a0b\u4f1a\u521b\u5efa\u65b0\u7684",(0,a.kt)("strong",{parentName:"p"},"process group"),"(\u53ef\u4ee5\u7528\u6765\u7ba1\u7406\u5b50\u8fdb\u7a0b, \u5b9e\u73b0\u7c7b\u4f3c\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"tree-kill"),"\u7684\u7279\u6027)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unref()"),"\u65b9\u6cd5\u7528\u6765\u65ad\u7edd\u5173\u7cfb, \u8fd9\u6837\u7236\u8fdb\u7a0b\u53ef\u4ee5\u72ec\u7acb\u9000\u51fa, \u4e0d\u4f1a\u5bfc\u81f4\u5b50\u8fdb\u7a0b\u8ddf\u7740\u9000\u51fa, \u4f46\u662f\u8981\u6ce8\u610f\u5b50\u8fdb\u7a0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"sydio"),"\u4e5f\u5e94\u8be5\u72ec\u7acb\u4e8e\u7236\u8fdb\u7a0b, \u5426\u5219\u7236\u8fdb\u7a0b\u9000\u51fa\u4e4b\u540e\u5b50\u8fdb\u7a0b\u4ecd\u7136\u4f1a\u88ab\u5f71\u54cd."),(0,a.kt)("h3",{id:"execfile"},"execFile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { execFile } = require('child_process');\nconst child = execFile('node', ['--version'], (error, stdout, stderr) => {\n  if (error) {\n    throw error;\n  }\n  console.log(stdout);\n});\n")),(0,a.kt)("p",null,"\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"exec()"),", \u4f46\u4e0d\u901a\u8fc7shell\u6765\u6267\u884c, \u6240\u4ee5\u8981\u6c42\u4f20\u5165\u53ef\u6267\u884c\u6587\u4ef6. windows\u4e0b\u9762\u67d0\u4e9b\u6587\u4ef6\u65e0\u6cd5\u76f4\u63a5\u6267\u884c, \u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},".bat"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},".cmd"),", \u8fd9\u4e9b\u6587\u4ef6\u5c31\u4e0d\u80fd\u7528\u8fd9\u4e2a\u65b9\u6cd5, \u53ea\u80fd\u501f\u52a9\u4e0a\u9762\u7684\u4e24\u79cd\u65b9\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"exec()"),"\u4e00\u6837\u4e5f\u4e0d\u662f\u57fa\u4e8estream\u7684\uff0c\u540c\u6837\u5b58\u5728\u8f93\u51fa\u6570\u636e\u91cf\u98ce\u9669")),(0,a.kt)("h4",{id:"xxxsync"},"xxxSync"),(0,a.kt)("p",null,"\u4e09\u4e2a\u65b9\u6cd5\u90fd\u6709\u5bf9\u5e94\u7684\u540c\u6b65\u963b\u585e\u7248\u672c, \u4e00\u76f4\u5230\u5b50\u8fdb\u7a0b\u9000\u51fa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { \n  spawnSync, \n  execSync, \n  execFileSync,\n} = require('child_process');\n")),(0,a.kt)("h3",{id:"fork"},"fork"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fork()"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"spawn()"),"\u7684\u53d8\u4f53\uff0c\u7528\u6765\u521b\u5efaNode\u8fdb\u7a0b\uff0c\u6700\u5927\u7684\u7279\u70b9\u662f\u7236\u5b50\u8fdb\u7a0b\u81ea\u5e26\u901a\u4fe1\u673a\u5236(IPC\u7ba1\u9053):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var n = child_process.fork('./child.js');\nn.on('message', function(m) {\n  console.log('PARENT got message:', m);\n});\nn.send({ hello: 'world' });\n\n// ./child.js\nprocess.on('message', function(m) {\n  console.log('CHILD got message:', m);\n});\nprocess.send({ foo: 'bar' });\n")),(0,a.kt)("p",null,"\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"fork()"),"\u81ea\u5e26\u901a\u4fe1\u673a\u5236\u7684\u4f18\u52bf\uff0c\u5c24\u5176\u9002\u5408\u7528\u6765\u62c6\u5206\u8017\u65f6\u903b\u8f91\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\nconst longComputation = () => {\n  let sum = 0;\n  for (let i = 0; i < 1e9; i++) {\n    sum += i;\n  };\n  return sum;\n};\nconst server = http.createServer();\nserver.on('request', (req, res) => {\n  if (req.url === '/compute') {\n    const sum = longComputation();\n    return res.end(`Sum is ${sum}`);\n  } else {\n    res.end('Ok')\n  }\n});\n\nserver.listen(3000);\n")),(0,a.kt)("p",null,"\u8fd9\u4e48\u505a\u7684\u95ee\u9898\u5728\u4e8e\u5982\u679c\u6709\u4eba\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"/compute"),", \u540e\u7eed\u7684\u8bf7\u6c42\u90fd\u65e0\u6cd5\u53ca\u65f6\u7684\u5904\u7406, \u56e0\u4e3a\u4e8b\u4ef6\u5faa\u73af\u8fd8\u88ab",(0,a.kt)("inlineCode",{parentName:"p"},"longComputation"),"\u963b\u585e\u7740. \u4e3a\u4e86\u907f\u514d\u8017\u65f6\u64cd\u4f5c\u963b\u585e\u4e3b\u8fdb\u7a0b\u7684\u4e8b\u4ef6\u5faa\u73af, \u53ef\u4ee5\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"longComputation"),"\u62c6\u5206\u5230\u5b50\u8fdb\u7a0b\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// compute.js\nconst longComputation = () => {\n  let sum = 0;\n  for (let i = 0; i < 1e9; i++) {\n    sum += i;\n  };\n  return sum;\n};\n\n// \u5f00\u5173\uff0c\u6536\u5230\u6d88\u606f\u624d\u5f00\u59cb\u505a\nprocess.on('message', (msg) => {\n  const sum = longComputation();\n  process.send(sum);\n});\n")),(0,a.kt)("p",null,"\u4e3b\u8fdb\u7a0b\u5f00\u542f\u5b50\u8fdb\u7a0b",(0,a.kt)("inlineCode",{parentName:"p"},"longComputation"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\nconst { fork } = require('child_process');\n\nconst server = http.createServer();\n\nserver.on('request', (req, res) => {\n  if (req.url === '/compute') {\n    const compute = fork('compute.js');\n    compute.send('start');\n    compute.on('message', sum => {\n      res.end(`Sum is ${sum}`);\n    });\n  } else {\n    res.end('Ok')\n  }\n});\n\nserver.listen(3000);\n")),(0,a.kt)("h2",{id:"\u8fdb\u7a0b\u901a\u4fe1"},"\u8fdb\u7a0b\u901a\u4fe1"),(0,a.kt)("h3",{id:"1-\u901a\u8fc7stdinstdout\u4f20\u9012json"},"1. \u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"h3"},"stdin/stdout"),"\u4f20\u9012json"),(0,a.kt)("p",null,"\u6700\u76f4\u63a5\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u62ff\u5230\u5b50\u8fdb\u7a0b\u7684handle\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5176stdio\u6d41\uff0c\u7136\u540e\u7ea6\u5b9a\u4e00\u79cdmessage\u683c\u5f0f\u5f00\u59cb\u6109\u5feb\u5730\u901a\u4fe1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\n\nchild = spawn('node', ['./stdio-child.js']);\nchild.stdout.setEncoding('utf8');\n\n// \u7236\u8fdb\u7a0b-\u53d1\nchild.stdin.write(JSON.stringify({\n  type: 'handshake',\n  payload: '\u4f60\u597d\u5416'\n}));\n\n// \u7236\u8fdb\u7a0b-\u6536\nchild.stdout.on('data', function (chunk) {\n  let data = chunk.toString();\n  let message = JSON.parse(data);\n  console.log(`${message.type} ${message.payload}`);\n});\n")),(0,a.kt)("p",null,"\u5b50\u8fdb\u7a0b\u4e8e\u4e4b\u7c7b\u4f3c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// ./stdio-child.js\n// \u5b50\u8fdb\u7a0b-\u6536\nprocess.stdin.on('data', (chunk) => {\n  let data = chunk.toString();\n  let message = JSON.parse(data);\n  switch (message.type) {\n    case 'handshake':\n      // \u5b50\u8fdb\u7a0b-\u53d1\n      process.stdout.write(JSON.stringify({\n        type: 'message',\n        payload: message.payload + ' : hoho'\n      }));\n      break;\n    default:\n      break;\n  }\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"VS code \u8fdb\u7a0b\u95f4\u901a\u4fe1\u5c31\u91c7\u7528\u4e86\u8fd9\u79cd\u65b9\u5f0f.")),(0,a.kt)("p",null,"\u660e\u663e\u7684\u9650\u5236\u662f\u9700\u8981\u62ff\u5230\u201c\u5b50\u201d\u8fdb\u7a0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"handle"),"\uff0c\u4e24\u4e2a\u5b8c\u5168\u72ec\u7acb\u7684\u8fdb\u7a0b\u4e4b\u95f4\u65e0\u6cd5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6765\u901a\u4fe1\uff08\u6bd4\u5982\u8de8\u5e94\u7528\uff0c\u751a\u81f3\u8de8\u673a\u5668\u7684\u573a\u666f\uff09"),(0,a.kt)("h3",{id:"2-\u539f\u751fipc\u652f\u6301"},"2. \u539f\u751fIPC\u652f\u6301"),(0,a.kt)("p",null,"\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"spawn()"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"fork()"),", \u8fdb\u7a0b\u4e4b\u95f4\u662f\u53ef\u4ee5\u901a\u8fc7\u5185\u7f6e\u7684IPC\u673a\u5236\u8fdb\u884c\u901a\u4fe1\u7684"),(0,a.kt)("p",null,"\u7236\u8fdb\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"process.on('message')"),"\u6536"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"child.send()"),"\u53d1")),(0,a.kt)("p",null,"\u5b50\u8fdb\u7a0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"process.on('message')"),"\u6536"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"process.send"),"\u53d1")),(0,a.kt)("p",null,"\u9650\u5236\u662f\u4e00\u6837\u7684, \u9700\u8981\u4e00\u65b9\u62ff\u5230\u53e6\u5916\u4e00\u65b9\u7684handle"),(0,a.kt)("h3",{id:"3-sockets"},"3. sockets"),(0,a.kt)("p",null,"\u501f\u52a9\u7f51\u7edc\u6765\u5b8c\u6210\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u4e0d\u4ec5\u80fd\u8de8\u8fdb\u7a0b\uff0c\u8fd8\u80fd\u8de8\u673a\u5668. \u8fd9\u91cc\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"node-ipc"),"\u6846\u67b6\u6765\u6f14\u793a\u5982\u4f55\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// server\nconst ipc=require('../../../node-ipc');\n\nipc.config.id = 'world';\nipc.config.retry= 1500;\nipc.config.maxConnections=1;\n\nipc.serveNet(\n    function(){\n        ipc.server.on(\n            'message',\n            function(data,socket){\n                ipc.log('got a message : ', data);\n                ipc.server.emit(\n                    socket,\n                    'message',\n                    data+' world!'\n                );\n            }\n        );\n\n        ipc.server.on(\n            'socket.disconnected',\n            function(data,socket){\n                console.log('DISCONNECTED\\n\\n',arguments);\n            }\n        );\n    }\n);\nipc.server.on(\n    'error',\n    function(err){\n        ipc.log('Got an ERROR!',err);\n    }\n);\nipc.server.start();\n\n// client\nconst ipc=require('node-ipc');\n\nipc.config.id = 'hello';\nipc.config.retry= 1500;\n\nipc.connectToNet(\n    'world',\n    function(){\n        ipc.of.world.on(\n            'connect',\n            function(){\n                ipc.log('## connected to world ##', ipc.config.delay);\n                ipc.of.world.emit(\n                    'message',\n                    'hello'\n                );\n            }\n        );\n        ipc.of.world.on(\n            'disconnect',\n            function(){\n                ipc.log('disconnected from world');\n            }\n        );\n        ipc.of.world.on(\n            'message',\n            function(data){\n                ipc.log('got a message from world : ', data);\n            }\n        );\n    }\n);\n")),(0,a.kt)("h3",{id:"4-message-queue"},"4. message queue"),(0,a.kt)("p",null,"\u7236\u5b50\u8fdb\u7a0b\u90fd\u901a\u8fc7\u5916\u90e8\u7684\u6d88\u606f\u673a\u5236\u6765\u901a\u4fe1, \u8de8\u8fdb\u7a0b\u7684\u80fd\u529b\u53d6\u51b3\u4e8eMQ\u7684\u652f\u6301."),(0,a.kt)("p",null,"\u5373\u8fdb\u7a0b\u95f4\u4e0d\u76f4\u63a5\u901a\u4fe1, \u800c\u662f\u901a\u8fc7\u4e2d\u95f4\u5c42(MQ), \u52a0\u4e00\u4e2a\u63a7\u5236\u5c42\u6765\u83b7\u5f97\u66f4\u591a\u7075\u6d3b\u6027\u548c\u4f18\u52bf:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7a33\u5b9a\u6027: \u6d88\u606f\u673a\u5236\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7a33\u5b9a\u6027\u4fdd\u8bc1, \u6bd4\u5982\u786e\u8ba4\u9001\u8fbe, \u5931\u8d25\u91cd\u53d1, \u9632\u6b62\u591a\u53d1\u7b49\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u63a7\u5236: \u5141\u8bb8\u8c03\u6574\u6d88\u606f\u54cd\u5e94\u6b21\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u79bb\u7ebf\u80fd\u529b: \u6d88\u606f\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u6027\u6d88\u606f\u5904\u7406: \u628a\u5173\u8054\u6d88\u606f\u7ec4\u5408\u6210\u4e8b\u52a1, \u4fdd\u8bc1\u9001\u8fbe\u987a\u5e8f\u4ee5\u53ca\u5b8c\u6210\u6027")),(0,a.kt)("p",null,"\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"smrchy/rsmq"),", \u6d88\u606f\u7684\u6536/\u53d1/\u7f13\u5b58/\u6301\u4e45\u5316\u4f9d\u9760Redis\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u5b9e\u73b0\u5b8c\u6574\u7684\u961f\u5217\u673a\u5236"),(0,a.kt)("p",null,"\u540c\u6837, Redis\u81ea\u5e26",(0,a.kt)("inlineCode",{parentName:"p"},"pub/sub"),"\u673a\u5236, \u9002\u7528\u4e8e\u7b80\u5355\u7684\u901a\u4fe1\u573a\u666f, \u6bd4\u5982\u4e00\u5bf9\u4e00\u6216\u8005\u4e00\u5bf9\u591a, \u5e76\u4e14\u4e0d\u5173\u6ce8\u6d88\u606f\u53ef\u9760\u6027\u7684\u573a\u666f. "),(0,a.kt)("p",null,"\u53e6\u5916, Redis\u6709list\u7ed3\u6784, \u53ef\u4ee5\u7528\u4f5c\u6d88\u606f\u961f\u5217, \u4ee5\u6b64\u63d0\u9ad8\u6d88\u606f\u53ef\u9760\u6027. "),(0,a.kt)("h2",{id:"\u5b88\u62a4\u8fdb\u7a0b"},"\u5b88\u62a4\u8fdb\u7a0b"),(0,a.kt)("p",null,"\u5b88\u62a4\u8fdb\u7a0b\u662f\u4e00\u4e2a\u5728\u540e\u53f0\u8fd0\u884c\u5e76\u4e14\u4e0d\u53d7\u4efb\u4f55\u7ec8\u7aef\u63a7\u5236\u7684\u8fdb\u7a0b. "),(0,a.kt)("p",null,"\u4f7f\u7528Node\u521b\u5efa\u5b88\u62a4\u8fdb\u7a0b\u4e5f\u4e0d\u96be, \u5927\u6982\u7684\u8fc7\u7a0b\u5982\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u8fdb\u7a0bA"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u8fdb\u7a0bA\u4e2d\u521b\u5efa\u8fdb\u7a0bB"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u8fdb\u7a0bB\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"setside"),"\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u7a0bA\u9000\u51fa, \u8fdb\u7a0bB\u7531",(0,a.kt)("inlineCode",{parentName:"li"},"init"),"\u8fdb\u7a0b\u63a5\u7ba1, \u6b64\u65f6\u8fdb\u7a0bB\u4e3a\u5b88\u62a4\u8fdb\u7a0b")),(0,a.kt)("h3",{id:"setsid"},"setsid"),(0,a.kt)("p",null,"setsid\u4e3b\u8981\u5b8c\u6210\u4e09\u4ef6\u4e8b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8be5\u8fdb\u7a0b\u53d8\u4e3a\u4e00\u4e2a\u65b0\u4f1a\u8bdd\u7684\u4f1a\u8bdd\u9886\u5bfc"),(0,a.kt)("li",{parentName:"ol"},"\u8be5\u8fdb\u7a0b\u53d8\u4e3a\u4e00\u4e2a\u65b0\u8fdb\u7a0b\u7ec4\u7684\u7ec4\u957f"),(0,a.kt)("li",{parentName:"ol"},"\u8be5\u8fdb\u7a0b\u6ca1\u6709\u63a7\u5236\u7ec8\u7aef")),(0,a.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var spawn = require('child_process').spawn;\nvar process = require('process');\n\nvar p = spawn('node',['b.js'], {\n    detached : true\n});\nconsole.log(process.pid, p.pid);\nprocess.exit(0);\n")),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"b.js"),"\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var fs = require('fs');\nvar process = require('process');\n\nfs.open(\"/Users/mebius/Desktop/log.txt\",'w',function(err, fd){\n    console.log(fd);\n    while(true)\n    {\n        fs.write(fd,process.pid+\"\\n\",function(){});\n    }\n});\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ayqy.net/blog/nodejs%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1/#articleHeader7"},"Nodejs\u8fdb\u7a0b\u95f4\u901a\u4fe1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903444839399438"},"Nodejs \u7f16\u5199\u5b88\u62a4\u8fdb\u7a0b"))))}c.isMDXComponent=!0}}]);