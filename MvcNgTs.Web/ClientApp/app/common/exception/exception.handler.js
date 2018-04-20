export var ExceptionExtension;
(function (ExceptionExtension) {
    ExceptionExtension.ExtendExceptionHandler = function ($delegate, logger) {
        return function (exception, cause) {
            $delegate(exception, cause);
            logger.error(exception.message, "There was an error.", cause ? cause : "");
        };
    };
    ExceptionExtension.ExtendExceptionHandler.$inject = ['$delegate', 'ILoggerService'];
    ExceptionExtension.Configure = function ($provide) {
        $provide.decorator('$exceptionHandler', ExceptionExtension.ExtendExceptionHandler);
    };
    ExceptionExtension.Configure.$inject = ['$provide'];
})(ExceptionExtension || (ExceptionExtension = {}));
//# sourceMappingURL=exception.handler.js.map