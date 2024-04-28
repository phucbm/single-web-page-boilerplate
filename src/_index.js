import {uniqueId} from "./utils";


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