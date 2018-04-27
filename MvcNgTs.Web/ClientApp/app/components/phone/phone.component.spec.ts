import * as angular from 'angular';
import 'angular-mocks';
import { expect } from 'chai';
import { PhoneController } from './phone.component';

describe('PhoneModule', function () {
    beforeEach(angular.mock.module('app.phone'));

    describe('PhoneController', function () {
        let phoneController: PhoneController;
        let $componentController: ng.IComponentControllerService;
        let $rootScope: ng.IRootScopeService;
        let $scope: ng.IScope;

        beforeEach(angular.mock.inject(function (_$componentController_: ng.IComponentControllerService, _$rootScope_: ng.IRootScopeService) {
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            phoneController = $componentController('phone', { $scope: $scope });
        }));

        it('should have a dummy test', function () {
            expect(true).to.equal(true);
        });

        it('should be of type PhoneController', function () {
            expect(phoneController).to.be.an.instanceof(PhoneController);
        });

        it('should throw an error when throwException() called', function () {
                expect(phoneController.throwException).to.throw();
        });

        it('should have a collection of IPhones', function () {
            expect(phoneController.phones).to.exist;
        });
    });
});