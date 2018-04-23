import * as angular from 'angular';
import { ExceptionExtension } from './exception.handler';
import { LoggerModule } from '../logging/logger.module';

export const ExceptionModule = angular.module('app.common.exception', [LoggerModule])
    .config(ExceptionExtension.Configure)
    .name;