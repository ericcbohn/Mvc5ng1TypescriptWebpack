import * as angular from 'angular';
import { LoggerModule } from './logging/logger.module';
import { ExceptionModule } from './exception/exception.module';
export var CommonModule = angular.module('app.common', [LoggerModule, ExceptionModule]).name;
//# sourceMappingURL=common.module.js.map