// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('assets-dev/js/**/*')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets-build/js'));
});

// Sass Functions
gulp.task('sass', function() {
    return gulp.src('assets-dev/scss/style.scss')
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('assets-build/css'));
});

// Default Task
gulp.task('default', ['scripts', 'sass']);

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('assets-dev/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('assets-dev/scss/*.scss', ['sass']);
 });