"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5267],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(665),r=(n(9496),n(9613));const i={id:"VideoCaptions",title:"Class: VideoCaptions",sidebar_label:"VideoCaptions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"youtube/classes/VideoCaptions",id:"youtube/classes/VideoCaptions",title:"Class: VideoCaptions",description:"Captions of a video",source:"@site/docs/youtube/classes/VideoCaptions.md",sourceDirName:"youtube/classes",slug:"/youtube/classes/VideoCaptions",permalink:"/youtubei/docs/youtube/classes/VideoCaptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"VideoCaptions",title:"Class: VideoCaptions",sidebar_label:"VideoCaptions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"Video",permalink:"/youtubei/docs/youtube/classes/Video"},next:{title:"VideoComments",permalink:"/youtubei/docs/youtube/classes/VideoComments"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"languages",id:"languages",level:3},{value:"video",id:"video",level:3},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Captions of a video"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nconsole.log(result.captions.languages.map((l) => `${l.code} - ${l.name}`)); // printing out available languages for captions\n\nconsole.log(await result.captions.get("en")); // printing out captions of a specific language using language code\n')),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Base"},(0,r.kt)("inlineCode",{parentName:"a"},"Base"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"VideoCaptions"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"client"},"client"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"client"),": ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client"))),(0,r.kt)("p",null,"An instance of ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},"Client")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Base"},"Base"),".",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Base#client"},"client")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"languages"},"languages"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"languages"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"CaptionLanguage"),"[]"),(0,r.kt)("p",null,"List of available languages for this video"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"video"},"video"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"video"),": ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseVideo"))),(0,r.kt)("p",null,"The video this captions belongs to"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"languageCode?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"translationLanguageCode?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Caption"),"[]",">"),(0,r.kt)("p",null,"Get captions of a specific language or a translation of a specific language"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"languageCode?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"translationLanguageCode?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Caption"),"[]",">"))}d.isMDXComponent=!0}}]);