"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3678],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=i,h=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(665),i=(a(9496),a(9613));const l={id:"LiveVideo",title:"Class: LiveVideo",sidebar_label:"LiveVideo",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"youtube/classes/LiveVideo",id:"youtube/classes/LiveVideo",title:"Class: LiveVideo",description:"Represents a video that's currently live, usually returned from client.getVideo()",source:"@site/docs/youtube/classes/LiveVideo.md",sourceDirName:"youtube/classes",slug:"/youtube/classes/LiveVideo",permalink:"/youtubei/docs/youtube/classes/LiveVideo",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LiveVideo",title:"Class: LiveVideo",sidebar_label:"LiveVideo",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"Continuable",permalink:"/youtubei/docs/youtube/classes/Continuable"},next:{title:"MixPlaylist",permalink:"/youtubei/docs/youtube/classes/MixPlaylist"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"channel",id:"channel",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"chatContinuation",id:"chatcontinuation",level:3},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"isLiveContent",id:"islivecontent",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"likeCount",id:"likecount",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"related",id:"related",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"tags",id:"tags",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"thumbnails",id:"thumbnails",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"title",id:"title",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"uploadDate",id:"uploaddate",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"viewCount",id:"viewcount",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"watchingCount",id:"watchingcount",level:3},{value:"Accessors",id:"accessors",level:2},{value:"upNext",id:"upnext",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"emit",id:"emit",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"on",id:"on",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"playChat",id:"playchat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"stopChat",id:"stopchat",level:3},{value:"Returns",id:"returns-4",level:4}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a video that's currently live, usually returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"client.getVideo()")),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseVideo"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"LiveVideo"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LiveVideoProperties"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"channel"},"channel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"channel"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseChannel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChannel"))),(0,i.kt)("p",null,"The channel that uploaded this video"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#channel"},"channel")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chatcontinuation"},"chatContinuation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"chatContinuation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Current continuation token to load next chat"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"client"},"client"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"client"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},(0,i.kt)("inlineCode",{parentName:"a"},"Client"))),(0,i.kt)("p",null,"An instance of ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Client"},"Client")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#client"},"client")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"description"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The description of this video"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#description"},"description")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#id"},"id")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"islivecontent"},"isLiveContent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isLiveContent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether this video is a live content or not"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#islivecontent"},"isLiveContent")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"likecount"},"likeCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"likeCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"How many like does this video have, null if the like count is hidden"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#likecount"},"likeCount")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related"},"related"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"related"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoRelated"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoRelated"))),(0,i.kt)("p",null,"Continuable of videos / playlists related to this video"),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#related"},"related")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tags"},"tags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tags"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"The tags of this video"),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#tags"},"tags")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"thumbnails"},"thumbnails"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"thumbnails"),": ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/Thumbnails"},(0,i.kt)("inlineCode",{parentName:"a"},"Thumbnails"))),(0,i.kt)("p",null,"Thumbnails of the video with different sizes"),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#thumbnails"},"thumbnails")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"title"},"title"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The title of this video"),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#title"},"title")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uploaddate"},"uploadDate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uploadDate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The date this video is uploaded at"),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#uploaddate"},"uploadDate")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"viewcount"},"viewCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"viewCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"How many view does this video have, null if the view count is hidden"),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo"},"BaseVideo"),".",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/BaseVideo#viewcount"},"viewCount")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"watchingcount"},"watchingCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"watchingCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Number of people who's watching the live stream right now"),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"upnext"},"upNext"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"upNext"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/PlaylistCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"PlaylistCompact"))),(0,i.kt)("p",null,"Video / playlist to play next after this video, alias to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"video.related.items[0]\n")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/youtubei/docs/youtube/classes/PlaylistCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"PlaylistCompact"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"emit"},"emit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"emit"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", ...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},'"chat"'))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parameters"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"LiveVideoEvents"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"]",">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"on"},"on"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"on"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterableIterator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},'"chat"'))))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"listener")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LiveVideoEvents"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"]")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterableIterator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"playchat"},"playChat"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"playChat"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"delay?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Start polling for get live chat request"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delay")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"chat delay in millisecond")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stopchat"},"stopChat"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stopChat"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Stop request polling for live chat"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0}}]);