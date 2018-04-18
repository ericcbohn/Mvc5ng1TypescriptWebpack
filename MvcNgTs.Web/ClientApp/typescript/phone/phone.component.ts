import { /*Inject, */Component, OnChanges } from 'angular-ts-decorators';
import { IPhone, PHONES } from './phone.model';
//import { ILoggerService } from '../blocks/logging/logger.service';

const phoneTemplate = require('./phone.component.html');

@Component({
    selector: 'app.phone',
    template: phoneTemplate
})
export class PhoneComponent implements OnChanges {
    public phones: IPhone[];
    //private logger: ILoggerService;
    
    constructor() {//@Inject('ILoggerService')logger: ILoggerService) {
        this.phones = PHONES;
        //this.logger = logger;
    }

    throwException() {
        //this.logger.error('toastr works!', 'test data', 'the title');
        throw new Error('transport.component.js throwException() test error');
    }

    ngOnChanges() { }
}