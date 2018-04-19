import * as angular from 'angular';
import { PhoneComponent } from './phone.component';

export const PhoneModule = angular.module('app.phone', []).component('phone', PhoneComponent).name;