///// <binding />
//var gulp = require('gulp');
//var Server = require('karma').Server;
//var path = require('path');
//var webpackConfig = require('./webpack.config.js');
//var webpack = require('webpack');
//var gulpWebpack = require('webpack-stream');

//webpack({ env: 'dev', mode: 'development' }, );

//// Run test once and exit
//gulp.task('test', function (done) {
//    new Server({
//        configFile: __dirname + '/karma.conf.js',
//        singleRun: true
//    }, done).start();
//});

//// Webpack build
//gulp.task('build', function () {
//    return gulp.src('ClientApp/app/app.module.ts')
//        .pipe(gulpWebpack(webpackConfig, webpack));
//        //.pipe(gulp.dest('ClientApp/dist/'));
//});