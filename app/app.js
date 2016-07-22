var app = angular.module('moviesApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl : 'app/pages/home.html',
        controller  : 'MoviesCtrl'
      })
      .when('/create', {
        templateUrl : 'app/pages/create.html',
        controller  : 'MoviesCtrl'
      })
      .when('/edit', {
          templateUrl : 'app/pages/edit.html',
          controller : 'MoviesCtrl'
      })
      .otherwise({redirectTo: '/'});
    }]);
