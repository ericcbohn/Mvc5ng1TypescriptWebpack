import * as angular from 'angular';
import 'angular-mocks';
import { expect } from 'chai';
import { ILoggerService, LoggerService } from './logger.service';

describe('LoggerService', function () {
    //let $httpBackend: ng.IHttpBackendService;
    let loggerService: ILoggerService;
    //let logUrl: string = '/api/log';
    
    beforeEach(angular.mock.module('app.common.logging'));
    
    beforeEach(angular.mock.inject(function (/*_$httpBackend_: ng.IHttpBackendService, */_ILoggerService_: ILoggerService) {
        //$httpBackend = _$httpBackend_;
        loggerService = _ILoggerService_;
    }));

    it('should have a dummy test', function () {
        expect(true).to.equal(true);
    });

    it('should be of type LoggerService', function () {
        expect(loggerService).to.be.an.instanceof(LoggerService);
    });

    //it('should set response variable as 200', function () {
    //    $httpBackend.expect('POST', logUrl).respond(200);
    //    loggerService.error('', '');
    //    $httpBackend.flush();
    //});
});