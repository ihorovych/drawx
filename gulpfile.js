var gulp = require('gulp')
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var browserSync = require('browser-sync').create()

function browserSyncInit(done) {
  browserSync.init({
    server: {
      baseDir: "dist/"
    },
    port: 3000
  });
  done()
}

function reload(done) {
  browserSync.reload()
  done()
}

function copyHtml() {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist/'))
}

function copyScript() {
  return gulp.src('src/**/*.js')
  .pipe(gulp.dest('dist/'))
}

function compileSass() {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
}

function minifyCss() {
  return gulp.src('dist/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/'))
}

function watcher() {
  gulp.watch('src/**/*.scss', gulp.series(compileSass, reload))
  gulp.watch('src/**/*.html', gulp.series(copyHtml, reload))
  gulp.watch('src/**/*.js', gulp.series(copyScript, reload))
}

gulp.task('start', gulp.series(compileSass, copyHtml, copyScript, browserSyncInit, watcher))

gulp.task('build', gulp.series(compileSass, minifyCss, copyHtml, copyScript))
