import * as angular from 'angular';
import { LoggerModule } from '../logging/logger.module';
import { ExceptionExtension } from './exception.handler';
export var ExceptionModule = angular.module('app.common.exception', [LoggerModule])
    .config(ExceptionExtension.Configure)
    .name;
//# sourceMappingURL=exception.module.js.map