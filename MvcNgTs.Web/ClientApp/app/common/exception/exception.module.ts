import * as angular from 'angular';
import { LoggerModule } from '../logging/logger.module';
import { ILoggerService } from '../logging/logger.service';

export const Configure = ($provide: ng.auto.IProvideService) => {
    $provide.decorator('$exceptionHandler', ExtendExceptionHandler);
};

Configure.$inject = ['$provide'];

export const ExtendExceptionHandler = ($delegate: ng.IExceptionHandlerService, logger: ILoggerService) => {
    return function (exception: Error, cause?: string): void {
        $delegate(exception, cause);
        logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
    }
};

ExtendExceptionHandler.$inject = ['$delegate', 'ILoggerService'];

export const ExceptionModule = angular.module('app.common.exception', [LoggerModule])
    .config(Configure)
    .name;