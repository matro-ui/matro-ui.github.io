(()=>{"use strict";var e,a,c,d,t,f={},r={};function b(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=f,b.c=r,e=[],b.O=(a,c,d,t)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],t=e[i][2];for(var r=!0,o=0;o<c.length;o++)(!1&t||f>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(r=!1,t<f&&(f=t));if(r){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,d,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var f={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(t,f),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({23:"7afca92e",212:"0233ec7f",497:"a80da1cf",893:"c1f704fa",954:"8238a2f9",1249:"a7032dcf",1497:"e16015ca",1618:"da6c7707",1800:"bd59397f",1840:"9f7ab022",1878:"6e0e8678",1991:"b2b675dd",2138:"1a4e3797",2161:"4c9e35b1",2583:"3de4d16a",2634:"c4f5d8e4",2711:"9e4087bc",2778:"62104af9",3249:"ccc49370",3302:"c8ca56da",3549:"62701ccf",4077:"579e4cbe",4134:"393be207",4651:"e587f797",4722:"608ae6a4",4813:"6875c492",5092:"63163d77",5097:"b3e64b2f",5222:"44d895ad",5894:"b2f554cd",6033:"91c85a50",6061:"1f391b9e",6127:"43694170",6365:"abd2d863",6371:"d2252069",6903:"f8409a7e",7098:"a7bd4aaa",7122:"001bbe4c",7472:"814f3328",7643:"a6aa9e1f",7843:"9989919b",7868:"e2e31f2e",8209:"01a85c17",8326:"d126cf5d",8401:"17896441",8573:"ca31a9b5",8581:"935f2afb",8609:"925b3f96",8619:"519ce1ec",8745:"5e6e110a",9048:"a94703ab",9267:"a7023ddc",9328:"e273c56f",9379:"3e8067da",9413:"4d2f7e20",9551:"b65cac1c",9647:"5e95c892",9829:"1d2c3c7c"}[e]||e)+"."+{23:"6f79629c",212:"87074510",489:"1312c2bc",497:"369e8930",893:"abd3f79d",954:"60a4c5c9",1249:"2432f7f5",1497:"84d0cad6",1618:"4085a22c",1800:"c874631d",1823:"d9327700",1840:"257b9074",1878:"52a03587",1991:"8861d9a4",2138:"da2b1103",2161:"56dea096",2237:"a527828a",2583:"cc296a88",2634:"9c155b8e",2711:"bf6e56a0",2778:"6ff4f2f3",3249:"6df88db8",3302:"ceeb52e6",3549:"ae36e826",4077:"7907661c",4134:"1924aea2",4306:"c31def80",4651:"89b6a319",4722:"9e95a866",4813:"295f4b1d",5022:"8e50e4b6",5092:"fb9be781",5097:"867fbfd8",5222:"f1f662e7",5741:"0f218bc5",5894:"70653431",6033:"4d057da7",6061:"7eea7a3d",6127:"7dd99c3a",6365:"bce3c70e",6371:"31140a4d",6903:"e40c12f9",7098:"b3810bc2",7122:"a7b2628d",7472:"1a38d26d",7643:"d21acd1e",7843:"d6f29ca2",7868:"32a17917",8209:"5e3c9ca8",8326:"2ee5c2c6",8401:"bc07005b",8573:"3e513f45",8581:"dcc811b4",8609:"8386cd19",8619:"b60224c6",8745:"0a0843dc",8747:"8fdfe21a",9048:"fc6834d5",9214:"285be325",9267:"04ff52e5",9328:"5bd14816",9379:"47f472fc",9413:"9760d4e3",9551:"4565a190",9647:"3b1e4d71",9829:"10c02adc"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="matro-docs:",b.l=(e,a,c,f)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+c){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,b.nc&&r.setAttribute("nonce",b.nc),r.setAttribute("data-webpack",t+c),r.src=e),d[e]=[a];var l=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"8401",43694170:"6127","7afca92e":"23","0233ec7f":"212",a80da1cf:"497",c1f704fa:"893","8238a2f9":"954",a7032dcf:"1249",e16015ca:"1497",da6c7707:"1618",bd59397f:"1800","9f7ab022":"1840","6e0e8678":"1878",b2b675dd:"1991","1a4e3797":"2138","4c9e35b1":"2161","3de4d16a":"2583",c4f5d8e4:"2634","9e4087bc":"2711","62104af9":"2778",ccc49370:"3249",c8ca56da:"3302","62701ccf":"3549","579e4cbe":"4077","393be207":"4134",e587f797:"4651","608ae6a4":"4722","6875c492":"4813","63163d77":"5092",b3e64b2f:"5097","44d895ad":"5222",b2f554cd:"5894","91c85a50":"6033","1f391b9e":"6061",abd2d863:"6365",d2252069:"6371",f8409a7e:"6903",a7bd4aaa:"7098","001bbe4c":"7122","814f3328":"7472",a6aa9e1f:"7643","9989919b":"7843",e2e31f2e:"7868","01a85c17":"8209",d126cf5d:"8326",ca31a9b5:"8573","935f2afb":"8581","925b3f96":"8609","519ce1ec":"8619","5e6e110a":"8745",a94703ab:"9048",a7023ddc:"9267",e273c56f:"9328","3e8067da":"9379","4d2f7e20":"9413",b65cac1c:"9551","5e95c892":"9647","1d2c3c7c":"9829"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>d=e[a]=[c,t]));c.push(d[2]=t);var f=b.p+b.u(a),r=new Error;b.l(f,(c=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+t+": "+f+")",r.name="ChunkLoadError",r.type=t,r.request=f,d[1](r)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var d,t,f=c[0],r=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(d in r)b.o(r,d)&&(b.m[d]=r[d]);if(o)var i=o(b)}for(a&&a(c);n<f.length;n++)t=f[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();