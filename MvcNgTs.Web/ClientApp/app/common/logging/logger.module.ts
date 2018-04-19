import * as angular from 'angular';
import { LoggerService } from './logger.service';

export const LoggerModule = angular.module('app.common.logging', [])
    .service('ILoggerService', LoggerService).name;