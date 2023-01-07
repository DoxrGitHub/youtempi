"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8259],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=i,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(665),i=(n(9496),n(9613));const r={id:"index",title:"youtubei",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},a="Youtubei",l={unversionedId:"music/index",id:"music/index",title:"youtubei",description:"Youtubei is made to replace my other library scrape-yt. Instead of scrapping data from Youtube page, youtubei fetches data by sending a request directly to https://www.youtube.com/youtubei/v1, which should be faster and provide more reliable result.",source:"@site/docs/music/index.md",sourceDirName:"music",slug:"/music/",permalink:"/youtubei/docs/music/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"youtubei",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null}},s={},u=[{value:"Documentation",id:"documentation",level:4},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"youtubei"},"Youtubei"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Youtubei")," is made to replace my other library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SuspiciousLookingOwl/scrape-yt/"},"scrape-yt"),". Instead of scrapping data from Youtube page, ",(0,i.kt)("inlineCode",{parentName:"p"},"youtubei")," fetches data by sending a request directly to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.youtube.com/youtubei/v1"),", which should be faster and provide more reliable result."),(0,i.kt)("b",null,"Requires Node >= 16"),(0,i.kt)("h4",{id:"documentation"},(0,i.kt)("a",{parentName:"h4",href:"https://suspiciouslookingowl.github.io/youtubei"},"Documentation")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i youtubei\n")),(0,i.kt)("p",null,"or use the dev build directly from GitHub:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i git://github.com/suspiciouslookingowl/youtubei.git#dist\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const { Client, MusicClient } = require("youtubei");\n// or for TS / ES6\nimport { Client, MusicClient } from "youtubei";\n\nconst youtube = new Client();\nconst music = new MusicClient();\n\nconst run = async () => {\n    const videos = await youtube.search("Never gonna give you up", {\n        type: "video", // video | playlist | channel | all\n    });\n\n    console.log(videos.items.length); // 20\n    const nextVideos = await videos.next(); // load next page\n    console.log(nextVideos.length); // 18-20, inconsistent next videos count from youtube\n    console.log(videos.items.length); // 38 - 40\n\n    // you can also pass the video URL\n    const video = await youtube.getVideo("dQw4w9WgXcQ");\n\n    const channelVideos = await video.channel.videos.next();\n    const channelPlaylists = await video.channel.playlists.next();\n\n    // you can also pass the playlist URL\n    const playlist = await youtube.getPlaylist("UUHnyfMqiRRG1u-2MsSQLbXA");\n    console.log(playlist.videos.items.length); // first 100 videos;\n    let newVideos = await playlist.videos.next(); // load next 100 videos\n    console.log(playlist.videos.items.length); // 200 videos;\n    await playlist.videos.next(0); // load the rest videos in the playlist\n\n    // search using music client\n    const shelves = await music.search("Never gonna give you up");\n    console.log(shelves);\n};\n\nrun();\n')))}p.isMDXComponent=!0}}]);