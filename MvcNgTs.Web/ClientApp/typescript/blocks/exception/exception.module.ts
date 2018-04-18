import { NgModule } from 'angular-ts-decorators';
//import { LoggerModule } from '../logging/logger.module';
import { GlobalExceptionProvider } from './exception.provider';

@NgModule({
    id: 'ExceptionModule',
    //imports: [LoggerModule],
    providers: [GlobalExceptionProvider]
})
export class ExceptionModule {
    /* @ngInject */
    static config($provide: ng.auto.IProvideService) {
        $provide.decorator('$exceptionHandler', GlobalExceptionProvider.extendExceptionHandler);
    }

    ///* @ngInject */
    //static run($provide: ng.auto.IProvideService) {
    //    $provide.decorator('$exceptionHandler', GlobalExceptionProvider.extendExceptionHandler);
    //}

    ///* @ngInject */
    //static extendExceptionHandler($delegate: ng.IExceptionHandlerService/*, @Inject('ILoggerService')logger: ILoggerService*/): Function {
    //    return function (exception: Error, cause?: string): void {
    //        $delegate(exception, cause);
    //        //logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
    //        console.log('$exceptionHandler decorator works!');
    //    }
    //}
}