import * as toastr from 'toastr';

export interface ILoggerService {
    error(message: string, data: string): void;
    info(message: string, data: string): void;
    success(message: string, data: string): void;
    warning(message: string, data: string): void;
}

export class LoggerService implements ILoggerService {
    static $inject: string[] = ['$log', '$http'];
    private readonly logUrl: string = '/api/log';

    constructor(private $log: ng.ILogService, private $http: angular.IHttpService) {
        this.configureToastr();
    }

    error(message: string, data: string): void {
        toastr.error(message, 'Error');
        this.$log.error('Error: ' + message, data);
        this.$http.post(this.logUrl, { message: message });
    }

    info(message: string, data: string): void {
        toastr.info(message, 'Info');
        this.$log.info('Info: ' + message, data);
        this.$http.post(this.logUrl, { message: message });
    }

    success(message: string, data: string): void {
        toastr.success(message, 'Success');
        this.$log.info('Success: ' + message, data);
        this.$http.post(this.logUrl, { message: message });
    }

    warning(message: string, data: string): void {
        toastr.warning(message, 'Warning');
        this.$log.warn('Warning: ' + message, data);
        this.$http.post(this.logUrl, { message: message });
    }

    private configureToastr(): void {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }
}