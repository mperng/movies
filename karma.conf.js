// Karma configuration
// Generated on Thu Jul 21 2016 15:06:19 GMT-0500 (CDT)
/*
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './app',

    // list of files / patterns to load in the browser
    files: [
      '../assets/libs/angular.min.js',
      '../assets/libs/angular-route.min.js',
      '../assets/libs/angular-mocks.js',
      '../test/*spec.js'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
*/
//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '../assets/libs/angular.js',
      '../assets/libs/angular-route.js',
      '../assets/libs/angular-mocks.js',
      'app.js',
      'MoviesCtrl.js',
      '../test/*spec.js'
    ],
    logLevel: config.LOG_DEBUG,
    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    singleRun: true
  });
};
