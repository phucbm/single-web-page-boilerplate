
/**!
 * MyInstance - Webpack Library Boilerplate v0.0.3
 * @author phucbm
 * @homepage https://github.com/phucbm/js-webpack-boilerplate
 * @license MIT 2024
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./src/utils.js
/**
 * Debounce (ignore all, run the last)
 * https://www.freecodecamp.org/news/javascript-debounce-example/
 * @param func
 * @param timeout
 * @returns {(function(...[*]): void)|*}
 */
function debounce(func, timeout = 150){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}


/**
 * Debounce leading (run the first, ignore the rest)
 * https://www.freecodecamp.org/news/javascript-debounce-example/
 * @param func
 * @param timeout
 * @returns {(function(...[*]): void)|*}
 */
function debounceLeading(func, timeout = 150){
    let timer;
    return (...args) => {
        if(!timer){
            func.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = undefined;
        }, timeout);
    };
}


/**
 * Get array with unique values
 * https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
 * @param array
 * @returns {*}
 */
function arrayUnique(array){
    function onlyUnique(value, index, self){
        return self.indexOf(value) === index;
    }

    return array.filter(onlyUnique);
}


/**
 * Sort array of integers
 * @param array
 * @param asc
 * @returns {*}
 */
function arraySortInteger(array, asc = true){
    return array.sort(function(a, b){
        return asc ? a - b : b - a;
    });
}


/**
 * Set CSS v2
 * @param el
 * @param props
 */
function setCSS(el, props){
    (el.length ? el : [el]).forEach(item => item && item.style ? Object.assign(item.style, props) : '');
}

function hasClass(el, className){
    el.classList.contains(className);
}

function addClass(el, className){
    (el.length ? el : [el]).forEach(item => item?.classList.add(className));
}

function removeClass(el, className){
    (el.length ? el : [el]).forEach(item => item?.classList.remove(className));
}

/**
 * Console log
 * @param context
 * @param status
 * @param message
 */
function log(context, status, ...message){
    if(context.options.dev){
        console?.[status](...message);
    }
}


/**
 * Generate unique ID
 */
function uniqueId(prefix = ''){
    return prefix + (+new Date()).toString(16) +
        (Math.random() * 100000000 | 0).toString(16);
}
;// CONCATENATED MODULE: ./src/_index.js



/**
 * Private class
 */
class MyInstance{
    constructor(options){
        this.id = uniqueId();
        this.options = {
            el: undefined,
            ...options
        };

        this.options.el.innerHTML = 'Hello!';
    }
}


/**
 * Private class Controller
 * This class will hold instances of the library's objects
 */
class Controller{
    constructor(){
        this.instances = [];
    }

    add(instance){
        this.instances.push(instance);
    }

    get(id){
        return this.instances.filter(instance => instance.id === id)[0];
    }
}


/**
 * Public library data
 * access via window.MyInstanceController
 */
window.MyInstanceController = new Controller();


/**
 * Public library object
 * access via window.MyInstance
 */
window.MyInstance = {
    // init new instances
    init: (options = {}) => {
        const selector = options.selector;

        // init with selector
        document.querySelectorAll(selector).forEach(el => {
            window.MyInstanceController.add(new MyInstance({el, ...options}));
        });
    },
    // Get instance object by ID
    get: id => window.MyInstanceController.get(id)
};

window.MyInstance.init();
/******/ 	return __webpack_exports__;
/******/ })()
;
});