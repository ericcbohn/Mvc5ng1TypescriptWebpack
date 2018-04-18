import { NgModule } from 'angular-ts-decorators';
import { GlobalExceptionProvider } from './exception.provider';
import { LoggerModule } from '../logging/logger.module';

@NgModule({
    id: 'ExceptionModule',
    imports: [LoggerModule],
    providers: [GlobalExceptionProvider]
})
export class ExceptionModule { }