const gulp = require('gulp');
const { watch, series } = require('gulp');

gulp.task('autoprefixer', () => {
    const autoprefixer = require('gulp-autoprefixer')
    return gulp.src('./source/css/**/*.css') 
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/css/'))
  })
exports.default = function() {
    watch('./source/css/**/*.css', series('autoprefixer'));
    watch('./app/css/**/*.css', series('concat-css'));
};
gulp.task('concat-css', () => {
    const concat = require('gulp-concat')
    return gulp.src([
        './app/css/fonts/*.css',
        './app/css/reset/*.css',
        './app/css/components/*.css',
        './app/css/pages/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./app'))
});
