import { NgModule } from 'angular-ts-decorators';
import { LoggerService } from './logger.service';

@NgModule({
    id: 'LoggerModule',
    providers: [LoggerService]
})
export class LoggerModule { }