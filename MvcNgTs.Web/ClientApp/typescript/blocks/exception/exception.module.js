var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from 'angular-ts-decorators';
//import { LoggerModule } from '../logging/logger.module';
import { GlobalExceptionProvider } from './exception.provider';
var ExceptionModule = /** @class */ (function () {
    function ExceptionModule() {
    }
    /* @ngInject */
    ExceptionModule.config = function ($provide) {
        $provide.decorator('$exceptionHandler', GlobalExceptionProvider.extendExceptionHandler);
    };
    ExceptionModule = __decorate([
        NgModule({
            id: 'ExceptionModule',
            //imports: [LoggerModule],
            providers: [GlobalExceptionProvider]
        })
    ], ExceptionModule);
    return ExceptionModule;
}());
export { ExceptionModule };
//# sourceMappingURL=exception.module.js.map