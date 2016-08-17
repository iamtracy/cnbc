  var gulp = require('gulp'),
    serve = require('gulp-live-server');

  gulp.task('serve', function() {
    //2. serve at custom port 
    var server = serve.static('app', 3000);
    server.start();
    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['app/**/*.css', 'app/*.html', 'app/**/*.js'], function (file) {
      server.notify.apply(server, [file]);
    });
  });//end serve

  gulp.task('default', function() {
    //other stuff
  });