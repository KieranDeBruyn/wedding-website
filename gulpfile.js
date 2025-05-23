'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// // compile scss to css
// gulp.task('sass', function () {
//     return gulp.src('./sass/styles.scss')
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(rename({basename: 'styles.min'}))
//         .pipe(gulp.dest('./css'));
// });

// // watch changes in scss files and run sass task
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });

// minify css
gulp.task('minify-css', () => {
    return gulp.src('./css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({basename: 'styles.min'}))
      .pipe(gulp.dest('./css'));
  });

// minify js
gulp.task('minify-js', function () {
    return gulp.src('./js/scripts.js')
        .pipe(uglify())
        .pipe(rename({basename: 'scripts.min'}))
        .pipe(gulp.dest('./js'));
});

// default task
gulp.task('default', gulp.series('minify-css', 'minify-js'));