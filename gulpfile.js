const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const { default: postcss } = require('postcss');
const browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}

function html() {
  return gulp.src('src/**/*.html')
        .pipe(plumber())
				.pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function fonts() {
    return gulp.src('src/fonts/*.{woff,otf,ttf}')
          .pipe(plumber())
                  .pipe(gulp.dest('dist/fonts'))
          .pipe(browserSync.reload({stream: true}));
  }

function css() {
    // const plugins = []
  return gulp.src('src/css/*.css')
        .pipe(plumber())
            .pipe(concat('bundle.css'))
                // .pipe(postcss(plugins))
		    .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function js () {
    return gulp.src('src/**/*.js')
          .pipe(plumber())
                .pipe(gulp.dest('dist/'))
          .pipe(browserSync.reload({stream: true}));
}

function images() {
  return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({stream: true}));
}

function clean() {
  return del('dist');
}

function watchFiles() {
  gulp.watch(['src/**/*.html'], html);
  gulp.watch(['src/blocks/**/*.css'], css);
  gulp.watch(['src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
  gulp.watch(['src/js/**/*.js'], js);
  gulp.watch(['src/fonts/**/*.{woff,otf,ttf}'], fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watchapp = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.js = js,
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;

exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp;