var app = angular.module('moviesApp', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl : 'app/pages/home.html',
        controller  : 'MovieCtrl'
      })
      .when('/create', {
        templateUrl : 'app/pages/create.html',
        controller  : 'MovieFormCtrl'
      })
      .when('/edit/:movieId', {
          templateUrl : 'app/pages/edit.html',
          controller : 'MovieEditFormCtrl'
      })
      .otherwise({redirectTo: '/'});
    }]);
