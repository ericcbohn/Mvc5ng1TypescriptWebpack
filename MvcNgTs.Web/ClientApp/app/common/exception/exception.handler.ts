import { ILoggerService } from '../logging/logger.service';

export namespace ExceptionExtension {
    export const ExtendExceptionHandler = ($delegate: ng.IExceptionHandlerService, $injector: ng.auto.IInjectorService) => {
        return function (exception: Error, cause?: string): void {
            $delegate(exception, cause);
            let logger: ILoggerService = $injector.get<ILoggerService>('ILoggerService');
            logger.error(exception.message, cause ? cause : "No data available");
        }
    };
    ExtendExceptionHandler.$inject = ['$delegate', '$injector'];

    export const Configure = ($provide: ng.auto.IProvideService) => {
        $provide.decorator('$exceptionHandler', ExtendExceptionHandler);
    };
    Configure.$inject = ['$provide'];
}