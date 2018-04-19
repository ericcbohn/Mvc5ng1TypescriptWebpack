/// <binding />
var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');

// Run test once and exit
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/ClientApp/test/karma.conf.js',
        singleRun: true
    }, done).start();
});