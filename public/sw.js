if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"452046dc507f6d7998604d0df74ac328"},{url:"/_next/static/IO8ZYm1FanpwALCdQb5Zq/_buildManifest.js",revision:"20bf96e543f99130248f6cd86ace9cc1"},{url:"/_next/static/IO8ZYm1FanpwALCdQb5Zq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/133-d2b6011a04b1bc1f.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/173-89a340d3732e1e50.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.d8ec56f1948566fd.js",revision:"d8ec56f1948566fd"},{url:"/_next/static/chunks/41ade5dc-c1b42621d3bb3041.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/4bd1b696-311a895114e7c813.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/517-aa5e740f7171014e.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/734-5cb40d030bf5c84b.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/767-b3b58f83427d4266.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/894-95ab13eb088f8450.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/_not-found/page-084d77a0be1a5b84.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/layout-79b48ce9bcae464e.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/not-found-5ab4038a98c00956.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/page-ab101767f5ed0d78.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/planets/%5Bplanet%5D/page-ef39a0af9d6ccdb7.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/planets/page-8cfe7db91fca42dd.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/profile/page-28039bdb4504a081.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/app/team/page-c51ed069f0b74287.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/framework-d29117d969504448.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/main-69df33a4cf26cd4c.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/main-app-7b56253791b72b50.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/pages/_app-212dac839c3d84e1.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/pages/_error-dd539ddcc11d9755.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-1b788b7b4a777d10.js",revision:"IO8ZYm1FanpwALCdQb5Zq"},{url:"/_next/static/css/33a70b69cb5bb8aa.css",revision:"33a70b69cb5bb8aa"},{url:"/_next/static/css/57feac647f55442e.css",revision:"57feac647f55442e"},{url:"/_next/static/css/5a9cd8200949b472.css",revision:"5a9cd8200949b472"},{url:"/_next/static/css/87394f20b43427b5.css",revision:"87394f20b43427b5"},{url:"/_next/static/css/b27455bffc73d02d.css",revision:"b27455bffc73d02d"},{url:"/_next/static/css/ba1a833dd0f479b4.css",revision:"ba1a833dd0f479b4"},{url:"/_next/static/css/e794ef154d952330.css",revision:"e794ef154d952330"},{url:"/_next/static/media/15e555873b2c38f2-s.woff2",revision:"378deccce04e8b4bb10df0d68116fe7b"},{url:"/_next/static/media/3f552249f03de128-s.woff2",revision:"f13e27df67f3cd8ec7f1ebef1d3c22bd"},{url:"/_next/static/media/c8db6d45c695a7ab-s.woff2",revision:"184b7cb71a92503167ac9019d5ad0cc6"},{url:"/_next/static/media/card.534132f3.png",revision:"5de308fd90a7ebb81ce37ab701a005ce"},{url:"/_next/static/media/cd5bec9268da5b8d-s.p.woff2",revision:"aad916909583a6c3b1556203237cf97b"},{url:"/_next/static/media/cd5bec9268da5b8d-s.woff2",revision:"aad916909583a6c3b1556203237cf97b"},{url:"/_next/static/media/e967e3e11e121e1e-s.p.woff2",revision:"4465bb12f10d6f67ba3ff5e91a04741b"},{url:"/_next/static/media/e967e3e11e121e1e-s.woff2",revision:"4465bb12f10d6f67ba3ff5e91a04741b"},{url:"/_next/static/media/f6ffe4459c1daa33-s.woff2",revision:"1d39e32df99ce4e3b86fe6f63dc00105"},{url:"/_next/static/media/f769c49a4b8c1350-s.p.woff2",revision:"b6b23332a828909942c545fe2d987946"},{url:"/cursors/Install.inf",revision:"31a20de24c130ad67024ab0e2bf8241c"},{url:"/cursors/alternate.cur",revision:"e1f8869f6d239f2ee8aea5604d8c58ec"},{url:"/cursors/beam.cur",revision:"789a74acc9e355839a05b6d8dd088491"},{url:"/cursors/busy.ani",revision:"897dca0254205d226092826e8053d7d9"},{url:"/cursors/dgn1.cur",revision:"4cc2ca23a77e4d11c09e95558161db39"},{url:"/cursors/dgn2.cur",revision:"9df7255b2f98d3c60940ce3d692e4c9b"},{url:"/cursors/handwriting.cur",revision:"04be387a413088d6c3bbcacbb4314338"},{url:"/cursors/help.cur",revision:"e44192565ccc8496728207d80c95d6ab"},{url:"/cursors/horz.cur",revision:"2fb768ca508bf22104cb2a13d7287251"},{url:"/cursors/link.cur",revision:"c83a3f6bc33b1a1f607e9d025bb4b447"},{url:"/cursors/move.cur",revision:"d44f919e360a72f6d529973cc046a022"},{url:"/cursors/person.cur",revision:"8a46d16cf1d25ae6114c6e40ad12e7cb"},{url:"/cursors/pin.cur",revision:"fac1a7196e82d9daa9aaf016da79fcfc"},{url:"/cursors/pointer.cur",revision:"bc4f1274ffe7a8918adc771baf021752"},{url:"/cursors/precision.cur",revision:"6be380c6e18e8fd91e5531bc90de0754"},{url:"/cursors/unavailable.cur",revision:"b5c9d92801b5980d8375894d278b7569"},{url:"/cursors/vert.cur",revision:"8f815e1fa2c4d9693e9c184ae1ee1fe6"},{url:"/cursors/working.ani",revision:"c629c23904a37a13e965bbd78ef01050"},{url:"/favicons/app-icon-192.png",revision:"63fbc43b409ce526dd86a829502d0d11"},{url:"/favicons/app-icon-512.png",revision:"d1b872e37f4d14c89ca360a7b4900391"},{url:"/favicons/app-icon.svg",revision:"9044ecb1cd7224a1ec3f3233c7b454c6"},{url:"/favicons/card.png",revision:"5de308fd90a7ebb81ce37ab701a005ce"},{url:"/favicons/favicon.png",revision:"76b0fc07014120e626f9d9c97b7297d6"},{url:"/favicons/manifest.json",revision:"e3f3024dcc17e26f10b973b52a00bd61"},{url:"/img/background/smoke.png",revision:"3291a1d8bd571fbf08e1a6274fc55679"},{url:"/img/background/stars.png",revision:"7385313b29f14429efcc143c8655e3db"},{url:"/img/header/logo.png",revision:"c219785a3deecdf4449ff6406fabf61d"},{url:"/img/home/meeting-icon.svg",revision:"72c323f5829a61a7e09608321c82a2f0"},{url:"/img/home/planet-icon.svg",revision:"01585c91e3a4a4d0dd9c1e9e60735949"},{url:"/img/home/profile-icon.svg",revision:"328c8b87b12d88c747d64c494387add4"},{url:"/img/home/rocket.png",revision:"5011c9e9ab59ab4b661649d8b15f52a3"},{url:"/img/home/sync-icon.svg",revision:"30e4d29860cc9f89e80ad2a7f3ec1d2e"},{url:"/img/icons/close-menu.svg",revision:"934006ae8bfe96f84adbb3156df35a15"},{url:"/img/icons/falcon.svg",revision:"99cda232a71b3a14ccf605d0f7c26b17"},{url:"/img/icons/home.svg",revision:"8b2b01e491b71ed0a8557aa7955ed08e"},{url:"/img/icons/menu.svg",revision:"07d14f7168b334884e558138fa973046"},{url:"/img/icons/mini-falcon.svg",revision:"8ddf155990dfa6aefcfd774fc5fc9749"},{url:"/img/icons/next.svg",revision:"ef521325e546b8f879356dd78a78f102"},{url:"/img/icons/pencil.svg",revision:"6f74d5d10716c1c231fde8e9a8813348"},{url:"/img/icons/previous.svg",revision:"e84cd4255cecf1da7cab410b72c34b17"},{url:"/img/loader/background.jpg",revision:"012a682830612269e746cd6a6fc8cfc0"},{url:"/img/loader/earth-icon.png",revision:"b414a427f2581ff65b9a259234512901"},{url:"/img/loader/stars.png",revision:"ddce01829260fdddcfe70e0a74e16a51"},{url:"/img/objects/10 hygiea.png",revision:"17a79d1e63af7fc04109d7fc118211f0"},{url:"/img/objects/2 pallas.png",revision:"6be2b22553ef570a29069e683b883951"},{url:"/img/objects/4 vesta.png",revision:"27c53fadcd2260219dc6c16710306392"},{url:"/img/objects/52 europa.png",revision:"10516170393d6bdc0bffa9465e78f5bc"},{url:"/img/objects/704 interamnia.png",revision:"ea5c7d4b26df996a817d93cb487169e4"},{url:"/img/objects/earth.png",revision:"b2b4ccd0b64a5efb9f1c8478d49f20b8"},{url:"/img/objects/enceladus.png",revision:"37613d0c342f1e6d3b3e68340c3c3cfa"},{url:"/img/objects/europa.png",revision:"fa2f04cc1b9e0e1072a022105093b483"},{url:"/img/objects/jupiter.png",revision:"5694dca60a7db3bd34b9379191995833"},{url:"/img/objects/mars.png",revision:"eb426eb79dc45a16ae649881ac6e398c"},{url:"/img/objects/mercury.png",revision:"93a3d5cfc6b79f6dbee6c0bf1c758cff"},{url:"/img/objects/moon.png",revision:"2aee305cbc0e4c314f58e3c635db9755"},{url:"/img/objects/neptune.png",revision:"3446e786c35da2177456114e872e8aea"},{url:"/img/objects/phobos.png",revision:"4454b80b4bfed2bd9aca35439f5e8863"},{url:"/img/objects/saturn.png",revision:"8c73891fcbd6bae34a748c44eada0ca5"},{url:"/img/objects/titan.png",revision:"981d497b6b13fe98c0b5892b873c1caa"},{url:"/img/objects/triton.png",revision:"1ed0e9e78d9b5ef5e0384d1d6e1c7cf3"},{url:"/img/objects/uranus.png",revision:"26c9fccf73e6f708eb27f661c3f5cc96"},{url:"/img/objects/venus.png",revision:"77663f1572cf715f5414312e58838fc3"},{url:"/img/select/arrow.svg",revision:"bd93069df40a38313ab5685432a60b99"},{url:"/img/survey/astronaut.png",revision:"2684ea41cc9bc1271bf5f7b6e9d3a417"},{url:"/img/survey/scientist.png",revision:"75f1ba983a2fb04ffc92fd9555c6c7a1"},{url:"/img/team/logo.jpg",revision:"1a35a6df15328c2a648119f1fd3396d7"},{url:"/img/team/maksym.jpg",revision:"26533317b18a0ab233ae3f370f0e1723"},{url:"/img/team/nick.jpg",revision:"4519e1ca0aec0eca00717581d113ada4"},{url:"/img/team/photo.jpg",revision:"aa094d529012be25a9e174ccc72eb3e3"},{url:"/img/team/sebas.jpg",revision:"98eb49c01d704b9658fdc48c51f694ed"},{url:"/img/team/vance.jpg",revision:"c5cad23b66929771d05f03e80cb96f20"},{url:"/ping.txt",revision:"490396857f567c50b6d1d88c7600232c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
