var config = require('./gulp/config.json'),
    files = require('./gulp/files'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
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

gulp.task('default', ['css']);

gulp.task('css', function () {
  var processors = [
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

  return gulp.src(files.globs.css.src)
    .pipe(postcss(processors))
    .pipe(gulp.dest(files.paths.dist))
    .pipe(sizereport());
});
