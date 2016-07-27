angular.module('moviesApp')
    .controller('MovieEditFormCtrl', ['$scope', '$localStorage', '$sessionStorage', '$routeParams', '$location',
    function ($scope, $localStorage, $sessionStorage, $routeParams, $location) {
        var id = parseInt($routeParams.movieId);
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
            $scope.editMovie = findMovie(id);
            $scope.years = getYears();
            $scope.ratings = getRatings();
        };

        var getYears = function() {
            return _.range(2016, 1899, -1);
        };

        var getRatings = function() {
            return _.range(1,11);
        };

        var findMovie = function (id) {
            return _.find($scope.$storage.movies, {'id':id});
        };

        var save = function() {
            $localStorage.$save();
            $location.path('/');
        };

        $scope.updateMovie = function () {
            // add to movies data structure
            _.merge(findMovie(id), $scope.editMovie);
            save();
        };

        $scope.deleteMovie = function () {
            _.remove($scope.$storage.movies, {'id':id});
            save();
        };

        init();
    }]);
