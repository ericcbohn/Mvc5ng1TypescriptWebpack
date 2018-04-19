import * as angular from 'angular';
import { LoggerService } from '../../../typescript/blocks/logging/logger.service';
export var LoggerModule = angular.module('app.common.logging', [])
    .service('ILoggerService', LoggerService).name;
//# sourceMappingURL=logger.module.js.map