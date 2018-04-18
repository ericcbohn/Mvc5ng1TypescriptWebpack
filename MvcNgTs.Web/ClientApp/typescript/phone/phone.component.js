var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { /*Inject, */ Component } from 'angular-ts-decorators';
import { PHONES } from './phone.model';
//import { ILoggerService } from '../blocks/logging/logger.service';
var phoneTemplate = require('./phone.component.html');
var PhoneComponent = /** @class */ (function () {
    //private logger: ILoggerService;
    function PhoneComponent() {
        this.phones = PHONES;
        //this.logger = logger;
    }
    PhoneComponent.prototype.throwException = function () {
        //this.logger.error('toastr works!', 'test data', 'the title');
        throw new Error('transport.component.js throwException() test error');
    };
    PhoneComponent.prototype.ngOnChanges = function () { };
    PhoneComponent = __decorate([
        Component({
            selector: 'app.phone',
            template: phoneTemplate
        }),
        __metadata("design:paramtypes", [])
    ], PhoneComponent);
    return PhoneComponent;
}());
export { PhoneComponent };
//# sourceMappingURL=phone.component.js.map