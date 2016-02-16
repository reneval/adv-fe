var gulp = require('gulp'),
  browserSync = require('browser-sync');

// browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});
// define tasks here
gulp.task('default',  ['browser-sync'], function(){

  gulp.watch(['*.html','/*.html'],['bs-reload']);
  // run tasks here
  // set up watch handlers here
});