var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var jade = require('gulp-jade');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var path = require('path');

// Компиляция .less в .css
gulp.task('less', function() {
    return gulp.src('./less/style.less') // only compile the entry file
        .pipe(plumber()).pipe(less({
            paths: ['./css/', './overrides/']
        })).pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {
            cascade: true
        }).pipe(gulp.dest('./css/')).pipe(livereload());
});

// Миникация css
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('./css/'));
});

// Автопрефиксер
gulp.task('autoprefixer', function () {
  return gulp.src('./css/style.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/style.css'));
});

// Компиляция .jade в .html
// gulp.task('jade', function() {
//     gulp.src('./jade/*.jade').pipe(jade({
//         pretty: true
//     })).pipe(gulp.dest('./dist/')).pipe(livereload());
// });

// Watch
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./less/*.less', ['less']); // Watch all the .less files, then run the less task
    gulp.watch('./jade/*.jade', ['jade']);
    gulp.watch('./jade/*/*.jade', ['jade']);
    gulp.watch('./css/style.css', ['minify-css']);
    gulp.watch('./css/style.css', ['autoprefixer']);
});

// Локальный сервер для разработки
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
gulp.task('default', ['watch', 'connect']); // Default will run the 'entry' watch task