'use strict';

angular.module('blocks.exception')
    .config(config); // extend default $exceptionHandler with custom exception handler for logging.

/**
    * extend default $exceptionHandler for database logging of exceptions
    * @param {[type]} $provide
    * @ngInject
    */
function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

/**
    * Extend the $exceptionHandler service to also display a toast.
    * @param {Object} $delegate (the instantiated service/directive/filter, prior to being passed to the service that required it)
    * @param {Object} logger
    * @return {Function} the decorated $exceptionHandler service
    */
function extendExceptionHandler($delegate, logger) {
    return function (exception, cause) {
        var errorData = { exception: exception, cause: cause };
        $delegate(exception, cause);

        logger.error(exception.message, errorData);
    };
}