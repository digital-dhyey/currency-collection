if(!self.define){let e,c={};const n=(n,i)=>(n=new URL(n+".js",i).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let s={};const l=e=>n(e,r),a={module:{uri:r},exports:s,require:l};c[r]=Promise.all(i.map((e=>a[e]||l(e)))).then((e=>(o(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"echeck-plugin"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/currency-collection/assets/css/app.b8ead76b.css",revision:null},{url:"/currency-collection/assets/js/app.7ebbd173.js",revision:null},{url:"/currency-collection/assets/js/chunk-vendors.6cb97825.js",revision:null},{url:"/currency-collection/data/currencyCollection.json",revision:"40e2a54a83794eef2ae1d5bcb940d3af"},{url:"/currency-collection/images/dg-icons/android-chrome-192x192.png",revision:"57e74dadb4063a09ebb0e8adee193904"},{url:"/currency-collection/images/dg-icons/android-chrome-512x512.png",revision:"cfb4d3c092f8aec4312ccf1e29dd214d"},{url:"/currency-collection/images/dg-icons/apple-touch-icon.png",revision:"cfedc0224b806d8db26beb6fbce287a1"},{url:"/currency-collection/images/dg-icons/favicon-16x16.png",revision:"767803a7f13b13de8bc50e5645288bc6"},{url:"/currency-collection/images/dg-icons/favicon-32x32.png",revision:"c9df8036305e0002474b9d0d68435b81"},{url:"/currency-collection/images/dg-icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/currency-collection/images/favicons/android-chrome-192x192.png",revision:"0391a45c9d0c8fc449dc1b59a3928a75"},{url:"/currency-collection/images/favicons/android-chrome-512x512.png",revision:"3e47537772ee79ba51ae28177809cc03"},{url:"/currency-collection/images/favicons/apple-touch-icon.png",revision:"42aa75260457cc1abd78c4d5db1a8d71"},{url:"/currency-collection/images/favicons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/currency-collection/images/favicons/favicon-16x16.png",revision:"8fbf539f33bea222496f1a6f1c179303"},{url:"/currency-collection/images/favicons/favicon-32x32.png",revision:"d6a174c7cd287902dc37a49e8c4bd03b"},{url:"/currency-collection/images/favicons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/currency-collection/index.html",revision:"806ab7dd3433b563b163f1b5345be46e"},{url:"/currency-collection/manifest.json",revision:"ddc407cc7c0b5c41a55ad3e02502aaae"},{url:"/currency-collection/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
