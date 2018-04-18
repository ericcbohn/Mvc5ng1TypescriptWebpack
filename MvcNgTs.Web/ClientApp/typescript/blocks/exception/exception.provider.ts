import { /*Inject, */Injectable } from 'angular-ts-decorators';
//import { ILoggerService } from '../logging/logger.service';

@Injectable('GlobalExceptionProvider')
export class GlobalExceptionProvider {
    ///* @ngInject */
    //static config($provide: ng.auto.IProvideService) {
    //    console.log('$exceptionHandler is decorated');
    //    $provide.decorator('$exceptionHandler', GlobalExceptionProvider.extendExceptionHandler);
    //}

    /* @ngInject */
    static extendExceptionHandler($delegate: ng.IExceptionHandlerService/*, @Inject('ILoggerService')logger: ILoggerService*/): Function {
        return function (exception: Error, cause?: string): void {
            $delegate(exception, cause);
            //logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
            console.log('$exceptionHandler decorator works!');
        }
    }
} 

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