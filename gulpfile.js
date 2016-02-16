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
// define tasks here
gulp.task('default',  ['browser-sync'], function(){
  // run tasks here
  // set up watch handlers here
});