"use strict";(self.webpackChunkmy_web_page=self.webpackChunkmy_web_page||[]).push([[792],{89:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},963:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},890:(e,t,n)=>{var r=n(72),a=n.n(r),o=n(825),s=n.n(o),c=n(659),i=n.n(c),p=n(56),u=n.n(p),l=n(540),d=n.n(l),f=n(113),m=n.n(f),b=n(77),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=d(),a()(b.A,v),b.A&&b.A.locals&&b.A.locals;var g=n(897),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=d(),a()(g.A,h),g.A&&g.A.locals&&g.A.locals,n(330),new class{constructor(){console.log("Hello!")}}},77:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(963),a=n.n(r),o=n(89),s=n.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=s},897:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(963),a=n.n(r),o=n(89),s=n.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=s},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],p=r.base?i[0]+r.base:i[0],u=o[p]||0,l="".concat(p," ").concat(u);o[p]=u+1;var d=n(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var i=r(e,a),p=0;p<o.length;p++){var u=n(o[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=i}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},330:e=>{e.exports=JSON.parse('{"name":"my-web-page","prettyName":"My Single Web Page","version":"0.0.1","description":"Lorem ipsum dolor sit amet","homepage":"https://github.com/phucbm/single-web-page-boilerplate","repository":{"type":"git","url":"git@github.com:phucbm/single-web-page-boilerplate"},"author":{"name":"phucbm","url":"https://github.com/phucbm"},"keywords":["phucbm","javascript","es6"],"main":"./src/_index.js","license":"MIT","scripts":{"dev":"webpack serve --config config/webpack.dev.js","build":"webpack --config config/webpack.build.js","ghp-build":"cross-env BASE=/single-web-page-boilerplate/ webpack --config config/webpack.build.js"},"devDependencies":{"@viivue/atomic-css":"^1.1.7","babel-loader":"^8.2.2","babel-preset-es2015":"^6.24.1","clean-webpack-plugin":"^4.0.0","copy-webpack-plugin":"^9.1.0","cross-env":"^7.0.3","css-loader":"^6.4.0","css-minimizer-webpack-plugin":"^3.1.1","html-loader":"^3.1.0","html-webpack-plugin":"^5.3.2","mini-css-extract-plugin":"^2.4.2","postcss-loader":"^6.2.0","postcss-preset-env":"^6.7.0","sass":"^1.43.5","sass-loader":"^12.2.0","style-loader":"^3.3.0","terser-webpack-plugin":"^5.3.1","webpack":"^5.58.2","webpack-cli":"^4.9.0","webpack-dev-server":"^4.3.1","webpack-merge":"^5.8.0"}}')}},e=>{e(e.s=890)}]);