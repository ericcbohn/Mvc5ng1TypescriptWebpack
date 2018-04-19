import * as angular from 'angular';
import { ExceptionService } from './exception.service';
export var ExtendExceptionHandler = function ($delegate, logger) {
    'ngInject';
    return function (exception, cause) {
        $delegate(exception, cause);
        logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
    };
};
export var ExceptionModule = angular.module('app.common.exception', [])
    .service('ExceptionService', ExceptionService)
    .config(function ($provide) {
    'ngInject';
    $provide.decorator('$exceptionHandler', ExtendExceptionHandler);
})
    .name;
//# sourceMappingURL=exception.module.js.map