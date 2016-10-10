// const gulp = require('gulp');
// const babel = require('gulp-babel');
// const browserify = require('gulp-browserify');
// const sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var del = require('del');

// gulp.task('clean', function() {
//   return del([ 'assets' ]);
// });

// gulp.task('watch', function(){
//     gulp.watch('src/scripts/app/*.js', ['scripts']);
// });

// gulp.task('scripts', function() {
//     return gulp.src('src/scripts/app/main.js')
//         .pipe(sourcemaps.init())
//         .pipe(browserify())
//         // .pipe(babel({ 
//         //     presets: ['es2015'] 
//         // }))
//         .pipe(uglify())
//         .pipe(rename('bundle.js'))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('./assets/scripts/'));
// });

// gulp.task('default', ['clean', 'watch', 'scripts']);
////////////////////////////////////////////////////////////////////////////////////////////
var path        = require('path');
var gulp        = require('gulp');
var watchify    = require('watchify');
var streamify   = require('gulp-streamify');
var hbsfy       = require('hbsfy');
var source      = require('vinyl-source-stream');
var sourcemaps  = require('gulp-sourcemaps');
var browserify  = require('browserify');
var buffer      = require('vinyl-buffer');
var handlebars  = require('gulp-compile-handlebars');
var rename      = require('gulp-rename');
var fs          = require('fs');
var gutil       = require('gulp-util');
// var rev         = require('gulp-rev');
// var del         = require('del');
// var addsrc      = require('gulp-add-src');
// var concat      = require('gulp-concat');
// var compass     = require('gulp-compass');
// var filter      = require('gulp-filter');
// var uglify      = require('gulp-uglify');
// var cssnano     = require('gulp-cssnano');
// var size        = require('gulp-size');
// var modernizr   = require('gulp-modernizr');
// var util        = require('util');

// var cached      = require('gulp-cached');
// var jshint      = require('gulp-jshint');
// var stylish     = require('jshint-stylish');

// var Server      = require('karma').Server;
// var browserSync = require('browser-sync').create();


// var injectStr   = require('gulp-inject-string');

var prod        = gutil.env.prod;
var testEnv     = gutil.env.testEnv;
var ENV         = gutil.env.prod || 'develop';

gulp.task('compile:watch:js', function () {
    var bundler = watchify(browserify({
        cache: {},
        packageCache: {},
        entries: [path.join(__dirname, './app/js/app.js')],
        paths: ['./app/js'],
        noparse: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/jquery/dist/jquery.js',
            './node_modules/underscore/underscore-min.js',
            './node_modules/underscore/underscore.js'
        ],
        transform: ['hbsfy'],
        fast: true
    }).transform('babelify', { presets: ['es2015'], sourceMaps: false }));

    function rebundle() {
        return bundler.bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(prod ? streamify(uglify()) : gutil.noop())
            .pipe(sourcemaps.write()) // sourcemaps will be added to the bundle.js
            .pipe(gulp.dest('./public/js/'));
    }

    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('default', ['compile:watch:js']);