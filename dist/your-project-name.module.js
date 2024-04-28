/**!
 * MyInstance - Webpack Library Boilerplate v0.0.3
 * @author phucbm
 * @homepage https://github.com/phucbm/js-webpack-boilerplate
 * @license MIT 2024
 */
class n{constructor(n){this.id=function(n=""){return n+(+new Date).toString(16)+(1e8*Math.random()|0).toString(16)}(),this.options={el:void 0,...n},this.options.el.innerHTML="Hello!"}}window.MyInstanceController=new class{constructor(){this.instances=[]}add(n){this.instances.push(n)}get(n){return this.instances.filter((t=>t.id===n))[0]}},window.MyInstance={init:(t={})=>{const e=t.selector;document.querySelectorAll(e).forEach((e=>{window.MyInstanceController.add(new n({el:e,...t}))}))},get:n=>window.MyInstanceController.get(n)},window.MyInstance.init();