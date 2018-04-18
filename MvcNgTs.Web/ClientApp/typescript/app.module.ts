import './Site.scss';
import 'bootstrap';
import { NgModule } from 'angular-ts-decorators';
import { PhoneModule } from './phone/phone.module';
import { CoreModule } from './core/core.module';

@NgModule({
    id: 'PhoneApp',
    imports: [PhoneModule, CoreModule]
})
export class PhoneApp { }