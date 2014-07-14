var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browserify', function() {
    gulp.src('app/js/main.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['default']);
});
