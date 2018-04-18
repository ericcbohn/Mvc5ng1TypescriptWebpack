var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './Site.scss';
import 'bootstrap';
import { NgModule } from 'angular-ts-decorators';
import { PhoneModule } from './phone/phone.module';
import { CoreModule } from './core/core.module';
var PhoneApp = /** @class */ (function () {
    function PhoneApp() {
    }
    PhoneApp = __decorate([
        NgModule({
            id: 'PhoneApp',
            imports: [PhoneModule, CoreModule]
        })
    ], PhoneApp);
    return PhoneApp;
}());
export { PhoneApp };
//# sourceMappingURL=app.module.js.map