
'use strict';

var gulp = require('gulp'),
 connect = require('gulp-connect');

var sass = require('gulp-sass');
var gutil = require('gulp-util');
var gclean = require('gulp-clean');

// Directory structures
var DIRECTORIES = {
    src: '/',
    publicStyles: 'Styles',
    privateStyles: 'Scss'
};

var changeEvent = function (evt) {
    gutil.log('File', gutil.colors.yellow(evt.path.replace(new RegExp('/.*(?=/' + DIRECTORIES.src + ')/'), '')), 'was', gutil.colors.green(evt.type));
};

gulp.task('connect', function () {
    connect.server();
});

// gulp.task('default', ['connect']);

// Clean public directories for styles/scripts
gulp.task('clean-styles', function () {
    return gulp.src(DIRECTORIES.publicStyles, { read: false })
        .pipe(gclean());
});

gulp.task('sass', ['clean-styles'], function () {
    gulp.src(DIRECTORIES.privateStyles + '/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(DIRECTORIES.publicStyles));
});

gulp.task('watch', function () {
    gulp.watch([DIRECTORIES.privateStyles + '*.scss', DIRECTORIES.privateStyles + '**/*.scss'], ['sass']).on('change', function (event) {
        changeEvent(event);
    });

});

// Default Task
gulp.task('default', ['connect', 'sass', 'watch']);