// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(cb) {
  gulp
    .src('assets/css/scss/site.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
  cb();
});


gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('Assets/css/scss/style.scss', gulp.series('sass'));
    cb();
  })
);