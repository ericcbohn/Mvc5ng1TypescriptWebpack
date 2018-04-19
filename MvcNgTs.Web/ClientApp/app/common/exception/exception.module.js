import * as angular from 'angular';
import { LoggerModule } from '../logging/logger.module';
export var ExtendExceptionHandler = function ($delegate, logger) {
    return function (exception, cause) {
        $delegate(exception, cause);
        logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
    };
};
ExtendExceptionHandler.$inject = ['$delegate', 'ILoggerService'];
export var Configure = function ($provide) {
    $provide.decorator('$exceptionHandler', ExtendExceptionHandler);
};
Configure.$inject = ['$provide'];
export var ExceptionModule = angular.module('app.common.exception', [LoggerModule])
    .config(Configure)
    .name;
//# sourceMappingURL=exception.module.js.map