import * as toastr from 'toastr';

export interface ILoggerService {
    error(message: string, title: string, data: string): void;
    info(message: string, title: string, data: string): void;
    success(message: string, title: string, data: string): void;
    warning(message: string, title: string, data: string): void;
}

export class LoggerService implements ILoggerService {
    static $inject: string[] = ['$log'];

    constructor(private $log: ng.ILogService) {
        this.configureToastr();
    }

    error(message: string, title: string, data: string): void {
        toastr.error(message, title);
        this.$log.error('Error: ' + message, data);
    }

    info(message: string, title: string, data: string): void {
        toastr.info(message, title);
        this.$log.info('Info: ' + message, data);
    }

    success(message: string, title: string, data: string): void {
        toastr.success(message, title);
        this.$log.info('Success: ' + message, data);
    }

    warning(message: string, title: string, data: string): void {
        toastr.warning(message, title);
        this.$log.warn('Warning: ' + message, data);
    }

    private configureToastr(): void {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }
}