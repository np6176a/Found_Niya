/**
 * Created by niya on 15-01-30.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var haml = require('gulp-haml');
var watch = require('gulp-watch');

gulp.task('default', function() {
    gulp.task('scss', function() {
        return sass('src/scss/')
            .on('error', function (err) {
                console.error('Error!', err.message);
            })
            .pipe(gulp.dest('dist/css'));
    });
    gulp.task('haml', function() {
        gulp.src('./src/**/*.haml')
            .pipe(haml())
            .pipe(gulp.dest('./dist'))
    });

    gulp.task('default', function() {
        gulp.run('haml', 'scss');
        gulp.watch('./src/**/*.haml', ['haml']);
        gulp.watch('./src/scss/*.scss', ['scss']);
    });
});