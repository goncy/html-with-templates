var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');

gulp.task('nunjucks', function () {
  gulp.src('src/**/*.html')
    .pipe(nunjucks({path: './src'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', function () {
  gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', ['default'], function () {
  gulp.watch(['src/**/*.tpl', 'src/**/*.html'], ['default']);
});

gulp.task('default', ['nunjucks', 'assets']);
