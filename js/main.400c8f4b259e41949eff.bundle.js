"use strict";(self.webpackChunkmy_web_page=self.webpackChunkmy_web_page||[]).push([[792],{588:(e,t,n)=>{var r=n(72),o=n.n(r),a=n(825),i=n.n(a),s=n(659),c=n.n(s),u=n(56),p=n.n(u),l=n(540),f=n.n(l),d=n(113),m=n.n(d),b=n(77),v={};v.styleTagTransform=m(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),o()(b.A,v),b.A&&b.A.locals&&b.A.locals;var y=n(696),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),o()(y.A,g),y.A&&y.A.locals&&y.A.locals;var h=n(609),w={};function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}function S(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function T(e){var t=function(e,t){if("object"!=A(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==A(t)?t:t+""}w.styleTagTransform=m(),w.setAttributes=p(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),o()(h.A,w),h.A&&h.A.locals&&h.A.locals;var x=S((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Hello!")}));n(330),new x},89:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},963:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},609:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(963),o=n.n(r),a=n(89),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=i},77:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(963),o=n.n(r),a=n(89),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=i},696:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(963),o=n.n(r),a=n(89),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=i},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var f=n(l),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},330:e=>{e.exports=JSON.parse('{"name":"my-web-page","outputFilename":"my-web-page","prettyName":"My Single Web Page","codeName":"MySingleWebPage","version":"0.0.1","description":"Lorem ipsum dolor sit amet","homepage":"https://github.com/phucbm/single-web-page-boilerplate","repository":{"type":"git","url":"git@github.com:phucbm/single-web-page-boilerplate"},"author":{"name":"phucbm","url":"https://github.com/phucbm"},"keywords":["phucbm","javascript","es6"],"main":"./src/_index.js","license":"MIT","scripts":{"dev":"webpack serve --config config/webpack.dev.js","build":"webpack --config config/webpack.build.js"},"devDependencies":{"@babel/core":"^7.15.8","@babel/plugin-proposal-class-properties":"^7.14.5","@babel/preset-env":"^7.15.8","@viivue/atomic-css":"^1.1.7","babel-loader":"^8.2.2","babel-preset-es2015":"^6.24.1","clean-webpack-plugin":"^4.0.0","copy-webpack-plugin":"^9.1.0","cross-env":"^7.0.3","css-loader":"^6.4.0","css-minimizer-webpack-plugin":"^3.1.1","honcau":"^0.0.2","html-loader":"^3.1.0","html-webpack-plugin":"^5.3.2","mini-css-extract-plugin":"^2.4.2","postcss-loader":"^6.2.0","postcss-preset-env":"^6.7.0","sass":"^1.43.5","sass-loader":"^12.2.0","style-loader":"^3.3.0","terser-webpack-plugin":"^5.3.1","webpack":"^5.58.2","webpack-cli":"^4.9.0","webpack-dev-server":"^4.3.1","webpack-merge":"^5.8.0"}}')}},e=>{e(e.s=588)}]);