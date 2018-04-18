// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
'use strict';

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'sinon'],
        files: [
            'Scripts/angular.js',
            'Scripts/angular-mocks.js',
            'Scripts/angular-animate.min.js',
            'Scripts/toastr.js',
            'Scripts/ClientApp/app/app.module.js',
            'Scripts/ClientApp/app/blocks/exception/exception.module.js',
            'Scripts/ClientApp/app/blocks/exception/exception.handler.config.js',
            'Scripts/ClientApp/app/blocks/exception/exception.factory.js',
            'Scripts/ClientApp/app/blocks/logging/logger.module.js',
            'Scripts/ClientApp/app/blocks/logging/logger.factory.js',
            'Scripts/ClientApp/app/core/core.module.js',
            'Scripts/ClientApp/app/core/core.constant.js',
            'Scripts/ClientApp/app/core/core.config.js',
            'Scripts/ClientApp/app/transport/transport.module.js',
            'Scripts/ClientApp/app/transport/transport.component.js',
            'Scripts/ClientApp/test/specHelper.js',
            'Scripts/ClientApp/app/**/*.spec.js'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome', 'Firefox', 'IE'],
        plugins: ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-ie-launcher', 'karma-jasmine', 'karma-sinon'],
        mime: { 'application/javascript': ['js'] }
    });
};