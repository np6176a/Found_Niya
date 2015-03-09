/**
 * Created by niya on 15-01-30.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var haml = require('gulp-haml');
var notify = require("gulp-notify") ;
var bower = require('gulp-bower');
var watch = require('gulp-watch');

gulp.task('default', function() {
    gulp.task('scss', function() {
        return sass('./src/styles/')
            .on('error', function (err) {
                console.error('Error!', err.message);
            })
            .pipe(gulp.dest('./dist/styles'));
    });
    gulp.task('haml', function() {
        gulp.src('./src/**/*.haml')
            .pipe(haml())
            .pipe(gulp.dest('./dist'))
    });

    gulp.task('bower', function() {
        return bower()
        .pipe(gulp.dest(config.bower_components))
    });

    gulp.task('css', function() {
    return gulp.src(config.sassPath + './style.scss')
        .pipe(sass({
             style: 'compressed',
             loadPath: [
                 './resources/sass',
                 config.bower_components + '/bootstrap-sass/assets/stylesheets',
        ]
                 }) 
    .on("error", notify.onError(function (error) {
                         return "Error: " + error.message;
             }))) 
             .pipe(gulp.dest('./dist/styles/css')); 
    });
      gulp.task('default', ['bower', 'icons', 'css']);

    gulp.task('default', function() {
    gulp.run('haml', 'scss');
    gulp.watch('./src/**/*.haml', ['haml']);
    gulp.watch('./src/styles/*.scss', ['scss']);
    gulp.watch(config.sassPath + './bootstrap-sass/assets/stylesheets/*.scss', ['css']); 
});
});