var gulp = require('gulp');
var react = require('gulp-react');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
 
gulp.task('build', function() {
  gulp.src('./webapp/build/js/app.jsx')
    .pipe(react())
    .pipe(browserify({
      transform: ['reactify'], // implies that the module 'reactify' is installed
      extensions: ['.jsx'] //  you can omit the extension when requiring
    }))
    .on('error', gutil.log)
    .on('error', gutil.beep)
    .pipe(gulp.dest('./webapp/dist'));
  gulp.src('./webapp/build/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./webapp/dist'));
});

gulp.task('lint', function() {
  return gulp.src('./webapp/build/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
 
gulp.task('watch', function() {
  gulp.watch('./webapp/build/**/*', ['build', 'lint']);
});
 
 
gulp.task('default', ['build', 'lint', 'watch']);