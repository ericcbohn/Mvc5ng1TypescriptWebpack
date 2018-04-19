import { PHONES } from './phone.model';
var phoneTemplate = require('./phone.component.html');
// don't override the default $ctrl refernce (aka don't use controllerAs)
var PhoneController = /** @class */ (function () {
    function PhoneController() {
        this.phones = PHONES;
    }
    PhoneController.prototype.throwException = function () {
        throw new Error('phone.component.js throwException() test error');
    };
    // https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript#resources
    // controller only
    PhoneController.prototype.$onInit = function () { }; // use require alongside $onInit to reference any inherited logic
    PhoneController.prototype.$onChanges = function () { }; // called before $onInit
    PhoneController.prototype.$postLink = function () { };
    PhoneController.prototype.$onDestroy = function () { };
    return PhoneController;
}());
export { PhoneController };
export var PhoneComponent = {
    controller: PhoneController,
    template: phoneTemplate
};
//# sourceMappingURL=phone.component.js.map