import * as angular from 'angular';
import { IPhone, PHONES } from './phone.model';

const phoneTemplate = require('./phone.component.html');

// don't override the default $ctrl refernce (aka don't use controllerAs)
export class PhoneController {
    //static $inject: string[] = [];
    phones: IPhone[];

    constructor() {
        this.phones = PHONES;
    }

    throwException() {
        //this.logger.error('toastr works!', 'test data', 'the title');
        throw new Error('phone.component.js throwException() test error');
    }

    // https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript#resources
    // controller only
    $onInit() { } // use require alongside $onInit to reference any inherited logic
    $onChanges() { } // called before $onInit
    $postLink() { }
    $onDestroy() { }
}

export const PhoneComponent: angular.IComponentOptions = {
    controller: PhoneController,
    template: phoneTemplate
};