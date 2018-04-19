var ExceptionService = /** @class */ (function () {
    function ExceptionService() {
    }
    ExceptionService.prototype.config = function ($provide) {
        console.log('$exceptionHandler is decorated');
        $provide.decorator('$exceptionHandler', this.extendExceptionHandler);
    };
    ExceptionService.prototype.extendExceptionHandler = function ($delegate, logger) {
        return function (exception, cause) {
            $delegate(exception, cause);
            logger.error(exception.message, "Uncaught Exception", cause ? cause : "");
        };
    };
    ExceptionService.$inject = ['$provide', '$delegate', 'ILoggerService'];
    return ExceptionService;
}());
export { ExceptionService };
//# sourceMappingURL=exception.service.js.map