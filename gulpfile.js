var gulp = require('gulp');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var bower = require('gulp-bower');


gulp.task('bower', function () {
  return bower();
});


gulp.task('libs', function () {
  return gulp.src('libs/**/*.min.js')
    .pipe(gulp.dest('client_build/libs/'))

});

gulp.task('clean', function () {
});

gulp.task('css', function () {
});



gulp.task('build', ['copy-static','css'], function () {
});

gulp.task('copy-static', function () {
  return  gulp.src('client_src/**/*.{png,jpg,svg,html}')
  .pipe(gulp.dest('copy-static/'))
});




gulp.task('watch', function () {
  gulp.watch(['*.html', 'pages/*.html'], ['bs-reload']);

});

// browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('index', function () {

  gulp.src('./index.html')
    .pipe(inject(gulp.src('./js/**/*.js', {read: false}), {relative: true}))
    .pipe(gulp.dest('./'));
});




gulp.task('bs-reload', function () {
  browserSync.reload();
});


gulp.task('default', ['libs','build', 'index','browser-sync'], function () {
  gulp.watch(['*.html', 'pages/*.html'], ['bs-reload']);
  gulp.watch(['*.js', 'js/**/*.js'], ['index', 'bs-reload']);
  gulp.watch(['*.css', 'css/**/*.css'], ['bs-reload']);
});