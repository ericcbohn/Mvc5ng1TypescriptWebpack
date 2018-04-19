//'use strict';

//describe('blocks.exception', function () {
//    var exceptionHandlerProvider;
//    var mocks = {
//        errorMessage: 'fake error',
//        prefix: '[TEST]: '
//    };

//    beforeEach(function () {
//        module('blocks.exception', function ($provide) {
//            specHelper.fakeLogger($provide);
//        });
//        specHelper.injector(function ($rootScope) { });
//    });

//    describe('$exceptionHandler', function () {
//        var $exceptionHandler;

//        beforeEach(inject(function (_$exceptionHandler_) {
//            $exceptionHandler = _$exceptionHandler_;
//        }));

//        it('should have a dummy test', function () {
//            expect(true).toEqual(true);
//        });

//        it('should be defined', function () {
//            expect($exceptionHandler).toBeDefined();
//        });

//        it('should throw an error when forced', inject(function () {
//            expect(functionThatWillThrow).toThrow();
//        }));

//        it('manual error is handled by decorator', function () {
//            var exception;
//            try {
//                $rootScope.$apply(functionThatWillThrow);
//            }
//            catch (ex) {
//                exception = ex;
//                expect(ex.message).toEqual(mocks.errorMessage);
//            }
//        });
//    });

//    function functionThatWillThrow() {
//        throw new Error(mocks.errorMessage);
//    }
//});