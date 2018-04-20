import * as toastr from 'toastr';
var LoggerService = /** @class */ (function () {
    function LoggerService($log, $http) {
        this.$log = $log;
        this.$http = $http;
        this.configureToastr();
    }
    LoggerService.prototype.error = function (message, title, data) {
        toastr.error(message, title);
        this.$log.error('Error: ' + message, data);
        this.$http.post('/Error/LogException', message);
    };
    LoggerService.prototype.info = function (message, title, data) {
        toastr.info(message, title);
        this.$log.info('Info: ' + message, data);
    };
    LoggerService.prototype.success = function (message, title, data) {
        toastr.success(message, title);
        this.$log.info('Success: ' + message, data);
    };
    LoggerService.prototype.warning = function (message, title, data) {
        toastr.warning(message, title);
        this.$log.warn('Warning: ' + message, data);
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