module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '../assets/libs/angular.js',
      '../assets/libs/angular-route.js',
      '../assets/libs/angular-mocks.js',
      '../assets/libs/ngStorage.js',
      '../assets/libs/Bacon.js',
      '../assets/libs/lodash.min.js',
      'app.js',
      'MovieCtrl.js',
      'MovieFormCtrl.js',
      'MovieEditFormCtrl.js',
      'MovieSvc.js',
      '../test/*spec.js'
    ],
    logLevel: config.LOG_INFO,
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
