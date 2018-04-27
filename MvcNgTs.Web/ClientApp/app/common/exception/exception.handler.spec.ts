import * as angular from 'angular';
import 'angular-mocks';
import { expect } from 'chai';

describe('ExceptionModule', function () {
    var mocks = { errorMessage: 'fake error' };

    beforeEach(angular.mock.module('app.common.exception'));

    it('should have a dummy test', function () {
        expect(true).to.equal(true);
    });

    describe('$exceptionHandler', function () {
        let $exceptionHandler: ng.IExceptionHandlerService;
        let $rootScope: ng.IRootScopeService;

        beforeEach(angular.mock.inject(function (_$exceptionHandler_:ng.IExceptionHandlerService, _$rootScope_: ng.IRootScopeService) {
            $exceptionHandler = _$exceptionHandler_;
            $rootScope = _$rootScope_;
        }));

        it('should have a dummy test', function () {
            expect(true).to.equal(true);
        });

        it('should be defined', function () {
            expect($exceptionHandler).to.exist;
        });

        it('should throw an error when forced', inject(function () {
            expect(functionThatWillThrow).to.throw;
        }));

        it('manual error is handled by decorator', function () {
            try {
                $rootScope.$apply(functionThatWillThrow);
            }
            catch (ex) {
                expect(ex.message).to.equal(mocks.errorMessage);
            }
        });
    });

    function functionThatWillThrow() {
        throw new Error(mocks.errorMessage);
    }
});