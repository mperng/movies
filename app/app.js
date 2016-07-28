var app = angular.module('moviesApp', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl : 'app/views/home.html',
        controller  : 'MovieCtrl'
      })
      .when('/create', {
        templateUrl : 'app/views/create.html',
        controller  : 'MovieFormCtrl'
      })
      .when('/edit/:movieId', {
          templateUrl : 'app/views/edit.html',
          controller : 'MovieEditFormCtrl'
      })
      .otherwise({redirectTo: '/'});
    }]);
