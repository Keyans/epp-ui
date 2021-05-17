const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function buildCss(cb) {
  gulp.src('../styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('epp-ui.css'))
    .pipe(gulp.dest('../lib/styles'));
  cb();
}

exports.default = gulp.series(buildCss);
