import { ILoggerService } from '../logging/logger.service';

export namespace ExceptionExtension {
    export const ExtendExceptionHandler = ($delegate: ng.IExceptionHandlerService, logger: ILoggerService) => {
        return function (exception: Error, cause?: string): void {
            $delegate(exception, cause);
            logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
        }
    };
    ExtendExceptionHandler.$inject = ['$delegate', 'ILoggerService'];

    export const Configure = ($provide: ng.auto.IProvideService) => {
        $provide.decorator('$exceptionHandler', ExtendExceptionHandler);
    };
    Configure.$inject = ['$provide'];
}