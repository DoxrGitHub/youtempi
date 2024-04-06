"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9416],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return n?o.createElement(k,r(r({ref:t},m),{},{components:n})):o.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(665),a=(n(9496),n(9613));const i={id:"VideoComments",title:"Class: VideoComments",sidebar_label:"VideoComments",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"youtube/classes/VideoComments",id:"youtube/classes/VideoComments",title:"Class: VideoComments",description:"Continuable of videos inside a Video",source:"@site/docs/youtube/classes/VideoComments.md",sourceDirName:"youtube/classes",slug:"/youtube/classes/VideoComments",permalink:"/youtubei/docs/youtube/classes/VideoComments",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"VideoComments",title:"Class: VideoComments",sidebar_label:"VideoComments",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"VideoCaptions",permalink:"/youtubei/docs/youtube/classes/VideoCaptions"},next:{title:"VideoCompact",permalink:"/youtubei/docs/youtube/classes/VideoCompact"}},s={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"continuation",id:"continuation",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"items",id:"items",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"video",id:"video",level:3},{value:"Methods",id:"methods",level:2},{value:"next",id:"next",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable")," of videos inside a ",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Video"},"Video")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const video = await youtube.getVideo(VIDEO_ID);\nawait video.comments.next();\nconsole.log(video.comments) // first 20 comments\n\nlet newComments = await video.comments.next();\nconsole.log(newComments) // 20 loaded comments\nconsole.log(video.comments) // first 40 comments\n\nawait video.comments.next(0); // load the rest of the comments in the video\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"How many times to load the next comments. Set 0 to load all comments (might take a while on a video with many  comments!)"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},(0,a.kt)("inlineCode",{parentName:"a"},"Continuable")),"<",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Comment"},(0,a.kt)("inlineCode",{parentName:"a"},"Comment")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"VideoComments"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"client"},"client"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"client"),": ",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},(0,a.kt)("inlineCode",{parentName:"a"},"Client"))),(0,a.kt)("p",null,"An instance of ",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},"Client")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#client"},"client")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"continuation"},"continuation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"continuation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#continuation"},"continuation")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"items"},"items"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"items"),": ",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Comment"},(0,a.kt)("inlineCode",{parentName:"a"},"Comment")),"[] = ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#items"},"items")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"video"},"video"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"video"),": ",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Video"},(0,a.kt)("inlineCode",{parentName:"a"},"Video"))),(0,a.kt)("p",null,"The playlist this videos belongs to"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"next"},"next"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"next"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"count?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Comment"},(0,a.kt)("inlineCode",{parentName:"a"},"Comment")),"[]",">"),(0,a.kt)("p",null,"Fetch next items using continuation token"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"count")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"1"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Comment"},(0,a.kt)("inlineCode",{parentName:"a"},"Comment")),"[]",">"),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,a.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#next"},"next")))}p.isMDXComponent=!0}}]);