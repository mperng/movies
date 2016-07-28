angular.module('moviesApp')
    .controller('MovieFormCtrl', ['$scope', '$location', 'MovieSvc',
    function ($scope, $location, MovieSvc) {
        var init = function() {
            $scope.years = getYears();
            $scope.ratings = getRatings();
            $scope.newMovie = {};
        };

        var getYears = function() {
            return _.range(2016, 1899, -1);
        };

        var getRatings = function() {
            return _.range(1,11);
        };

        $scope.createMovie = function () {
            $scope.newMovie.id = $scope.$id;
            MovieSvc.createMovie($scope.newMovie);
            $scope.newMovie.id = '';
            $scope.newMovie.title = '';
            $scope.newMovie.genre = '';
            $scope.newMovie.actors = '';
            $scope.newMovie.year = '';
            $scope.newMovie.rating = '';
            $location.path('/');
        };

        init();
    }]);
