angular.module('moviesApp')
    .controller('MovieCtrl', ['$scope', '$location', '$route', 'MovieSvc',
    function ($scope, $location, $route, MovieSvc) {
        var init = function() {
            $scope.movies = MovieSvc.getMovies();
        };

        $scope.reset = function() {
            MovieSvc.deleteAllMovies();
            $route.reload();
        };

        $scope.deleteMovie = function (id) {
            MovieSvc.deleteMovie(id);
        };

        init();
    }]);
