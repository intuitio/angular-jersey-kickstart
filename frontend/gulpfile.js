var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    stylish = require('jshint-stylish'),
    jshint = require('gulp-jshint'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    minHtml = require('gulp-minify-html'),
    minCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    connect = require('gulp-connect');

var paths = {
    appcode: [
        './app/**/*.js'
    ],
    main: './app/index.html',
    static: [
        './app/index.html'
    ],
    styles: [
        './app/**/*.css'
    ],
    partials: [
        './app/**/*.html',
        '!./app/bower_components/**'
    ],
    fonts: [
        './app/bower_components/fontawesome/fonts/fontawesome-webfont.*'
    ]
};

gulp.task('clean', function () {
    return del.sync(['./dist']);
});

gulp.task('build', ['clean', 'jshint', 'copy'], function () {
    return gulp.src(paths.main)
        .pipe(plumber())
        .pipe(usemin({
            css: ['concat'],
            js: [uglify(), rev(), 'concat'],
            vendorjs: [rev(), 'concat']
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('copy', function () {
    gulp.src(paths.partials)
        .pipe(gulp.dest('./dist'));
    gulp.src(paths.fonts)
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('jshint', function () {
    return gulp.src(paths.appcode)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(plumber.stop());
});

gulp.task('reload', function () {
    return gulp.src(paths.main)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(paths.appcode, ['jshint', 'reload']);
    gulp.watch(paths.styles, ['reload']);
    gulp.watch(paths.partials, ['reload']);
});

gulp.task('server', function () {
    connect.server({
        port: 8000,
        root: './app/',
        livereload: true
    });
});

gulp.task('dist', ['build']);
gulp.task('default', ['server', 'watch']);
