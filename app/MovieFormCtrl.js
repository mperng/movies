angular.module('moviesApp')
    .controller('MovieFormCtrl', ['$scope', '$localStorage', '$sessionStorage', '$location',
    function ($scope, $localStorage, $sessionStorage, $location) {
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
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

        var save = function() {
            $localStorage.$save();
            $location.path('/');
        };

        $scope.createMovie = function () {
            // add to movies data structure
            $scope.$storage.movies.push({
                id: $scope.$id,
                title: $scope.newMovie.title,
                genre: $scope.newMovie.genre,
                actors: $scope.newMovie.actors,
                year: $scope.newMovie.year,
                rating: $scope.newMovie.rating
            });
            // clear the fields
            $scope.newMovie.title = '';
            $scope.newMovie.genre = '';
            $scope.newMovie.actors = '';
            $scope.newMovie.year = '';
            $scope.newMovie.rating = '';
            save();
        };

        init();
    }]);
