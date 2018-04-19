import * as angular from 'angular';
import { PhoneModule } from "./phone/phone.module";

export const ComponentsModule = angular.module('app.components', [PhoneModule]).name;