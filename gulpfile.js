  var gulp = require('gulp'),
    serve = require('gulp-live-server'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

  gulp.task('serve', function() {
    //2. serve at custom port 
    var server = serve.static('app', 3000);
    server.start();
    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['app/**/*.css', 'app/*.html', 'app/**/*.js'], function (file) {
      server.notify.apply(server, [file]);
    });
  });//end serve

  // gulp.task('sass', function () {
  //   return gulp.src('./sass/**/*.scss')
  //     .pipe(sass().on('error', sass.logError))
  //     .pipe(gulp.dest('./app/css'));
  // });
 
  // gulp.task('sass:watch', function () {
  //   gulp.watch('./sass/**/*.scss', ['sass']);
  // });//end sass

  gulp.task('default', ['sass'], function() {
    //other stuff
  });