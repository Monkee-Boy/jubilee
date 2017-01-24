var paths = {
  src: './src/',
  dist: './dist/',
  jshint: './'
}

var globs = {
  tooltips: {
    src: [
      paths.src + 'components/tooltips/tooltips.css'
    ]
  },
  tabs: {
    src: [
      paths.src + 'components/tabs/tabs.css'
    ]
  },
  utilities: {
    src: [
      paths.src + 'utilities/utilities.css'
    ]
  }
};

module.exports = {
  paths: paths,
  globs: globs
};
