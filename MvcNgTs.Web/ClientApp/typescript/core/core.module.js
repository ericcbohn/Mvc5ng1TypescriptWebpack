var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'angular-animate';
import 'angular-sanitize';
import { NgModule } from 'angular-ts-decorators';
import { LoggerModule } from '../blocks/logging/logger.module';
import { ExceptionModule } from '../blocks/exception/exception.module';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        NgModule({
            id: 'CoreModule',
            imports: [
                'ngAnimate',
                'ngSanitize',
                LoggerModule,
                ExceptionModule
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map