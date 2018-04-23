export var ExceptionExtension;
(function (ExceptionExtension) {
    ExceptionExtension.ExtendExceptionHandler = function ($delegate, $injector) {
        return function (exception, cause) {
            $delegate(exception, cause);
            var logger = $injector.get('ILoggerService');
            logger.error(exception.message, cause ? cause : "No data available");
        };
    };
    ExceptionExtension.ExtendExceptionHandler.$inject = ['$delegate', '$injector'];
    ExceptionExtension.Configure = function ($provide) {
        $provide.decorator('$exceptionHandler', ExceptionExtension.ExtendExceptionHandler);
    };
    ExceptionExtension.Configure.$inject = ['$provide'];
})(ExceptionExtension || (ExceptionExtension = {}));
//# sourceMappingURL=exception.handler.js.map