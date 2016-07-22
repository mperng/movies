module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '../assets/libs/angular.js',
      '../assets/libs/angular-route.js',
      '../assets/libs/angular-mocks.js',
      '../assets/libs/Bacon.js',
      '../assets/libs/lodash.min.js',
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
