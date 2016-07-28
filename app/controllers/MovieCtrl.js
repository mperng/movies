angular.module('moviesApp')
    .controller('MovieCtrl', ['$scope', '$location', '$route', 'MovieSvc', 'rx', '$http',
    function ($scope, $location, $route, MovieSvc, rx, $http) {
        var init = function() {
            $scope.movies = MovieSvc.getMovies();
        };

        $scope.reset = function() {
            MovieSvc.deleteAllMovies();
            $route.reload();
        };

        function searchWikipedia (term) {
          return rx.Observable
            .fromPromise($http({
              url: "http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK",
              method: "jsonp",
              params: {
                action: "opensearch",
                search: term,
                format: "json"
              }
            }))
            .map(function(response){ return response.data[1]; });
        }

        $scope.search = '';
        $scope.results = [];

        /*
          Creates a "click" function which is an observable sequence instead of just a function.
        */
        $scope.$createObservableFunction('click')
          .map(function () { return $scope.search; })
          .flatMapLatest(searchWikipedia)
          .subscribe(function(results) {
            $scope.results = results;
          });

        init();
    }]);
