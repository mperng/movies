angular.module('moviesApp')
    .controller('MovieEditFormCtrl', ['$scope', '$routeParams', '$location', 'MovieSvc',
    function ($scope, $routeParams, $location, MovieSvc) {
        var id;
        var init = function() {
            id = parseInt($routeParams.movieId);
            $scope.editMovie = MovieSvc.getMovie(id);
            $scope.years = getYears();
            $scope.ratings = getRatings();
        };

        var getYears = function() {
            return _.range(2016, 1899, -1);
        };

        var getRatings = function() {
            return _.range(1,11);
        };

        $scope.updateMovie = function () {
            // add to movies data structure
            MovieSvc.updateMovie(id, $scope.editMovie);
            $location.path('/');
        };

        $scope.deleteMovie = function () {
            MovieSvc.deleteMovie(id);
            $location.path('/');
        };

        init();
    }]);
