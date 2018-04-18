import 'angular-animate';
import 'angular-sanitize';
import { NgModule } from 'angular-ts-decorators';
import { LoggerModule } from '../blocks/logging/logger.module';
import { ExceptionModule } from '../blocks/exception/exception.module';

@NgModule({
    id: 'CoreModule',
    imports: [
        'ngAnimate',
        'ngSanitize',
        LoggerModule,
        ExceptionModule
    ]
})
export class CoreModule { }