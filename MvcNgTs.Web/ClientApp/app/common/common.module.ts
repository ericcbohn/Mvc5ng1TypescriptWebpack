import * as angular from 'angular';
import { LoggerModule } from './logging/logger.module';
import { ExceptionModule } from './exception/exception.module';

export const CommonModule = angular.module('app.common', [LoggerModule, ExceptionModule]).name;