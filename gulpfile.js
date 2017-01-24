var config = require('./gulp/config.json'),
    files = require('./gulp/files'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    atImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    conditionals = require('postcss-conditionals'),
    postcssfor = require('postcss-for'),
    postcsseach = require('postcss-each'),
    compactmq = require('postcss-compact-mq'),
    calc = require('postcss-calc'),
    simpleVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    map = require('postcss-map'),
    stylelint = require('gulp-stylelint'),
    cssstats = require('cssstats'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sizereport = require('gulp-sizereport'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel');

var postcss_processors = [
  atImport(),
  conditionals(),
  postcssfor(),
  postcsseach(),
  mixins(),
  compactmq(),
  nested(),
  calc(),
  simpleVars(),
  autoprefixer(config.autoprefixer),
  cssnano()
];

gulp.task('default', ['tooltips', 'tabs', 'utilities'], function() {
  return;
});

gulp.task('tooltips', function () {
  return gulp.src(files.globs.tooltips.css)
    .pipe(postcss(postcss_processors))
    .pipe(gulp.dest(files.paths.dist + files.globs.tooltips.path))
    .pipe(sizereport());
});

gulp.task('tabs', function () {
  return gulp.src(files.globs.tabs.src)
    .pipe(postcss(postcss_processors))
    .pipe(gulp.dest(files.paths.dist))
    .pipe(sizereport());
});

gulp.task('utilities', function () {
  return gulp.src(files.globs.utilities.css)
    .pipe(postcss(postcss_processors))
    .pipe(gulp.dest(files.paths.dist + files.globs.utilities.path))
    .pipe(sizereport());
});
