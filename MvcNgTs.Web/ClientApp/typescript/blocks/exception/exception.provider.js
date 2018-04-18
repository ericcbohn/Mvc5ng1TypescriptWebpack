var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { /*Inject, */ Injectable } from 'angular-ts-decorators';
//import { ILoggerService } from '../logging/logger.service';
var GlobalExceptionProvider = /** @class */ (function () {
    function GlobalExceptionProvider() {
    }
    ///* @ngInject */
    //static config($provide: ng.auto.IProvideService) {
    //    console.log('$exceptionHandler is decorated');
    //    $provide.decorator('$exceptionHandler', GlobalExceptionProvider.extendExceptionHandler);
    //}
    /* @ngInject */
    GlobalExceptionProvider.extendExceptionHandler = function ($delegate /*, @Inject('ILoggerService')logger: ILoggerService*/) {
        return function (exception, cause) {
            $delegate(exception, cause);
            //logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
            console.log('$exceptionHandler decorator works!');
        };
    };
    GlobalExceptionProvider = __decorate([
        Injectable('GlobalExceptionProvider')
    ], GlobalExceptionProvider);
    return GlobalExceptionProvider;
}());
export { GlobalExceptionProvider };
///* @ngInject */
//static config($provide: ng.auto.IProvideService) {
//    $provide.decorator('$exceptionHandler', this.extendExceptionHandler);
//}
///* @ngInject */
//static extendExceptionHandler($delegate: ng.IExceptionHandlerService/*, @Inject('ILoggerService')logger: ILoggerService*/): Function {
//    return function(exception: Error, cause?: string): void {
//        $delegate(exception, cause);
//        //logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
//        console.log('$exceptionHandler decorator works!');
//    }
//} 
//# sourceMappingURL=exception.provider.js.map