var paths = {
  src: './src/',
  dist: './dist/',
  jshint: './'
}

var globs = {
  css: {
    src: [
      paths.src + '**/*.css'
    ]
  }
};

module.exports = {
  paths: paths,
  globs: globs
};
