const { src, dest, task } = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

task('sass', function () {
  return src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
});

task('sass:watch', function () {
  watch('sass/**/*.scss', ['sass']);
});

task('clean', () => {
  return src('dist/**/*', {read: false}).pipe(clean());
});

function copy() {
  return src('src/styles/main.scss').pipe(dest('dist'));
}

exports.copy = copy