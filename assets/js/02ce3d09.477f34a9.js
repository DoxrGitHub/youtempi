"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7587],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(665),i=(n(9496),n(9613));const o={id:"ChannelVideos",title:"Class: ChannelVideos",sidebar_label:"ChannelVideos",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"youtube/classes/ChannelVideos",id:"youtube/classes/ChannelVideos",title:"Class: ChannelVideos",description:"Continuable of videos inside a BaseChannel",source:"@site/docs/youtube/classes/ChannelVideos.md",sourceDirName:"youtube/classes",slug:"/youtube/classes/ChannelVideos",permalink:"/youtubei/docs/youtube/classes/ChannelVideos",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChannelVideos",title:"Class: ChannelVideos",sidebar_label:"ChannelVideos",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"ChannelPlaylists",permalink:"/youtubei/docs/youtube/classes/ChannelPlaylists"},next:{title:"Chat",permalink:"/youtubei/docs/youtube/classes/Chat"}},s={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"channel",id:"channel",level:3},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"continuation",id:"continuation",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"items",id:"items",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Methods",id:"methods",level:2},{value:"next",id:"next",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable")," of videos inside a ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseChannel"},"BaseChannel")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const channel = await youtube.findOne(CHANNEL_NAME, {type: "channel"});\nawait channel.videos.next();\nconsole.log(channel.videos.items) // first 30 videos\n\nlet newVideos = await channel.videos.next();\nconsole.log(newVideos) // 30 loaded videos\nconsole.log(channel.videos.items) // first 60 videos\n\nawait channel.videos.next(0); // load the rest of the videos in the channel\n')),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},(0,i.kt)("inlineCode",{parentName:"a"},"Continuable")),"<",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ChannelVideos"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"channel"},"channel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"channel"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseChannel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChannel"))),(0,i.kt)("p",null,"The channel this videos belongs to"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"client"},"client"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"client"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},(0,i.kt)("inlineCode",{parentName:"a"},"Client"))),(0,i.kt)("p",null,"An instance of ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},"Client")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#client"},"client")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"continuation"},"continuation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"continuation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#continuation"},"continuation")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"items"},"items"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"items"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[] = ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#items"},"items")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"next"},"next"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"next"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"count?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[]",">"),(0,i.kt)("p",null,"Fetch next items using continuation token"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[]",">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Continuable#next"},"next")))}d.isMDXComponent=!0}}]);