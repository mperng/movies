module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-mocks.js',
      '../assets/libs/ngStorage.js',
      'https://cdn.jsdelivr.net/lodash/4.13.1/lodash.min.js',
      'app.js',
      'controllers/MovieCtrl.js',
      'controllers/MovieFormCtrl.js',
      'controllers/MovieEditFormCtrl.js',
      'services/MovieSvc.js',
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
