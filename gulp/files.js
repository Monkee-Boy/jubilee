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

  tabs: {
    path: 'tabs/',
    css: [
      paths.src + 'components/tabs/tabs.css'
    ],
    js: [
      paths.src + 'components/tabs/tabs.js'
    ],
    js_compiled: 'tabs.compiled.js'
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
