import * as angular from 'angular';
import { LoggerService } from './logger.service';
export var LoggerModule = angular.module('app.common.logging', [])
    .service('ILoggerService', LoggerService).name;
//# sourceMappingURL=logger.module.js.map