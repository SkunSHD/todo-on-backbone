const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean', function() {
  return del([ 'assets' ]);
});

gulp.task('watch', function(){
    gulp.watch('src/scripts/app/*.js', ['scripts']);
});

gulp.task('scripts', function() {
    return gulp.src('./src/scripts/app/main.js')
        .pipe(sourcemaps.init())
        .pipe(browserify())
        .pipe(babel({ 
            presets: ['es2015'] 
        }))
        .pipe(uglify())
        .pipe(rename('bundle.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/scripts/'));
});

gulp.task('default', ['clean', 'watch', 'scripts']);