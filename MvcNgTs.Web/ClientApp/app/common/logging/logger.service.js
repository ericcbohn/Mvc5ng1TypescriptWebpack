import * as toastr from 'toastr';
export var LogType;
(function (LogType) {
    LogType[LogType["Error"] = 0] = "Error";
    LogType[LogType["Info"] = 1] = "Info";
    LogType[LogType["Success"] = 2] = "Success";
    LogType[LogType["Warning"] = 3] = "Warning";
})(LogType || (LogType = {}));
;
var LogModel = /** @class */ (function () {
    function LogModel(message, data, type) {
        this.message = message;
        this.data = data;
        this.type = type;
    }
    return LogModel;
}());
export { LogModel };
var LoggerService = /** @class */ (function () {
    function LoggerService($log, $http) {
        this.$log = $log;
        this.$http = $http;
        this.logUrl = '/api/log';
        this.configureToastr();
    }
    LoggerService.prototype.error = function (message, data) {
        toastr.error(message, 'Error');
        this.$log.error('Error: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Error));
    };
    LoggerService.prototype.info = function (message, data) {
        toastr.info(message, 'Info');
        this.$log.info('Info: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Info));
    };
    LoggerService.prototype.success = function (message, data) {
        toastr.success(message, 'Success');
        this.$log.info('Success: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Success));
    };
    LoggerService.prototype.warning = function (message, data) {
        toastr.warning(message, 'Warning');
        this.$log.warn('Warning: ' + message, data);
        this.$http.post(this.logUrl, new LogModel(message, data, LogType.Warning));
    };
    LoggerService.prototype.configureToastr = function () {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    };
    LoggerService.$inject = ['$log', '$http'];
    return LoggerService;
}());
export { LoggerService };
//# sourceMappingURL=logger.service.js.map