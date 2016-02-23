var gulp = require('gulp');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var bower = require('gulp-bower');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var del = require('del');
var argv = require('yargs').argv;
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var jscs = require('gulp-jscs');
var htmlhint = require("gulp-htmlhint");
var htmlmin = require('gulp-htmlmin');

gulp.task('bower', function () {
  return bower();
});

gulp.task('libs', function () {
  return gulp.src('./libs/**/*.min.js')
    .pipe(gulp.dest('./client_build/libs/'))
});

gulp.task('clean', function (cb) {
  del([
    './client_build/'
  ], cb);
});

gulp.task('css', function () {
  return gulp.src('./styles/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('styles.css'))
    .pipe(gulpif(argv.prod, minifyCss()))
    .pipe((gulp.dest('./client_build/static/')));
});

gulp.task('build', ['copy-static','css'], function () {
  gulp.src('./**/*.html')
    .pipe(gulpif(argv.prod, htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('client_build'));
});

gulp.task('js', function () {
  return gulp.src('./js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe((gulp.dest('./client_build/js/')));
});

gulp.task('jscs', function () {
    return gulp.src('./js/**/*.js')
      .pipe(jscs({fix: true}))
      .pipe(jscs.reporter())
      .pipe(jscs.reporter('fail'))
      .pipe(gulp.dest('./js/'));
});


gulp.task('jshint', function () {
  return gulp.src('./js/**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('htmlhint', function () {
  return gulp.src("./**/*.html")
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('copy-static', function () {
  return  gulp.src('./client_src/**/*.{png,jpg,svg,html}')
  .pipe(gulp.dest('./copy-static/'))
});


gulp.task('watch', function () {
  gulp.watch(['./client_src/**/*.{png,jpg,svg,html}', './pages/*.html'], ['copy-static']);
  gulp.watch(['./styles/*.less', './pages/*.html'], ['css']);

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


gulp.task('default', ['libs','build', 'watch','index','browser-sync'], function () {
  gulp.watch(['*.html', 'pages/*.html'], ['bs-reload']);
  gulp.watch(['*.js', 'js/**/*.js'], ['index', 'bs-reload']);
  gulp.watch(['*.css', 'styles/**/*.css'], ['bs-reload']);
});