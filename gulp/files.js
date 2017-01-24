var paths = {
  src: './src/',
  dist: './dist/',
  jshint: './'
}

var globs = {
  jshint: '.jshintrc',
  tooltips: {
    path: 'tooltips/',
    css: [
      paths.src + 'components/tooltips/tooltips.css'
    ]
  },

  utilities: {
    path: 'utilities/',
    css: [
      paths.src + 'utilities/utilities.css'
    ]
  },
};

module.exports = {
  paths: paths,
  globs: globs
};
