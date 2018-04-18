var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from 'angular-ts-decorators';
import * as toastr from 'toastr';
var LoggerService = /** @class */ (function () {
    /* @ngInject */
    function LoggerService($log) {
        this.$log = $log;
        this.configureToastr();
    }
    LoggerService.prototype.error = function (message, title, data) {
        toastr.error(message, title);
        this.$log.error('Error: ' + message, data);
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
    LoggerService = __decorate([
        Injectable('ILoggerService'),
        __metadata("design:paramtypes", [Object])
    ], LoggerService);
    return LoggerService;
}());
export { LoggerService };
//# sourceMappingURL=logger.service.js.map