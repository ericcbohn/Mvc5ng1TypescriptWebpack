// Karma configuration file, see link for more information
// http://karma-runner.github.io/2.0/config/configuration-file.html
'use strict';

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'chai', 'sinon', 'karma-typescript'],
        files: ['ClientApp/**/*.ts'],
        preprocessors: {'ClientApp/**/*.ts': 'karma-typescript'},
        reporters: ['progress', 'karma-typescript'],
        browsers: ['ChromeHeadless']//'Chrome', 'Firefox', 'IE']
    });
};