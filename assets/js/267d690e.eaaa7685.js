"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[318],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(665),l=(n(9496),n(9613));const a={id:"MusicPlaylistCompact",title:"Class: MusicPlaylistCompact",sidebar_label:"MusicPlaylistCompact",sidebar_position:0,custom_edit_url:null},r=void 0,s={unversionedId:"music/classes/MusicPlaylistCompact",id:"music/classes/MusicPlaylistCompact",title:"Class: MusicPlaylistCompact",description:"Hierarchy",source:"@site/docs/music/classes/MusicPlaylistCompact.md",sourceDirName:"music/classes",slug:"/music/classes/MusicPlaylistCompact",permalink:"/youtubei/docs/music/classes/MusicPlaylistCompact",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MusicPlaylistCompact",title:"Class: MusicPlaylistCompact",sidebar_label:"MusicPlaylistCompact",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"MusicLyrics",permalink:"/youtubei/docs/music/classes/MusicLyrics"},next:{title:"MusicSongCompact",permalink:"/youtubei/docs/music/classes/MusicSongCompact"}},o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"channel",id:"channel",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"client",id:"client",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"id",id:"id",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"songCount",id:"songcount",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"thumbnails",id:"thumbnails",level:3},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"title",id:"title",level:3},{value:"Implementation of",id:"implementation-of-5",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/MusicBase"},(0,l.kt)("inlineCode",{parentName:"a"},"MusicBase"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"MusicPlaylistCompact"))))),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MusicPlaylistCompactProperties"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"channel"},"channel"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"channel"),": ",(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/MusicBaseChannel"},(0,l.kt)("inlineCode",{parentName:"a"},"MusicBaseChannel"))),(0,l.kt)("p",null,"The channel that made this playlist"),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,"MusicPlaylistCompactProperties.channel"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"client"},"client"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"client"),": ",(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/MusicClient"},(0,l.kt)("inlineCode",{parentName:"a"},"MusicClient"))),(0,l.kt)("p",null,"An instance of ",(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/MusicClient"},"MusicClient")),(0,l.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,l.kt)("p",null,"MusicPlaylistCompactProperties.client"),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/MusicBase"},"MusicBase"),".",(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/MusicBase#client"},"client")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,l.kt)("p",null,"MusicPlaylistCompactProperties.id"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"songcount"},"songCount"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"songCount"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The number of videos in this playlist"),(0,l.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,l.kt)("p",null,"MusicPlaylistCompactProperties.songCount"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbnails"},"thumbnails"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"thumbnails"),": ",(0,l.kt)("a",{parentName:"p",href:"/youtubei/docs/music/classes/Thumbnails"},(0,l.kt)("inlineCode",{parentName:"a"},"Thumbnails"))),(0,l.kt)("p",null,"The playlist's thumbnails"),(0,l.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,l.kt)("p",null,"MusicPlaylistCompactProperties.thumbnails"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},"title"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"title"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The title's name"),(0,l.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,l.kt)("p",null,"MusicPlaylistCompactProperties.title"))}u.isMDXComponent=!0}}]);