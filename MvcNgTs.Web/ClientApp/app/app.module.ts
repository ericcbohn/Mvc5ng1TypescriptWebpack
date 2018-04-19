import './Site.scss';
import 'bootstrap';
import * as angular from 'angular'
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';

const root = angular.module('app', [ComponentsModule, CommonModule]).name;
export default root;