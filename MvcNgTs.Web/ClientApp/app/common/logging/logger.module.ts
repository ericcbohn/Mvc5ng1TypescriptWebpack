import * as angular from 'angular';
import { LoggerService } from '../../../typescript/blocks/logging/logger.service';

export const LoggerModule = angular.module('app.common.logging', [])
    .service('ILoggerService', LoggerService).name;