import * as toastr from 'toastr';

export enum LogType { Error, Info, Success, Warning };

export interface ILogModel {
    message: string,
    data: string,
    type: LogType
}

export class LogModel implements ILogModel {
    constructor(
        public message: string,
        public data: string,
        public type: LogType) { }
}

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
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Error));
    }

    info(message: string, data: string): void {
        toastr.info(message, 'Info');
        this.$log.info('Info: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Info));
    }

    success(message: string, data: string): void {
        toastr.success(message, 'Success');
        this.$log.info('Success: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Success));
    }

    warning(message: string, data: string): void {
        toastr.warning(message, 'Warning');
        this.$log.warn('Warning: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Warning));
    }

    private configureToastr(): void {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }
}