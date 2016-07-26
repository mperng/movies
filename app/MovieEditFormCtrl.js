angular.module('moviesApp')
    .controller('MovieEditFormCtrl', ['$scope', '$localStorage', '$sessionStorage', '$routeParams',
    function ($scope, $localStorage, $sessionStorage, $routeParams) {
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
            $scope.editMovie = findMovie();
        }

        var findMovie = function () {
            return _.chain($scope.$storage.movies)
                    .find({id:$routeParams.movieId});
        }

        $scope.editMovie = function (invalid) {
            // add to movies data structure
            if(!invalid) {
                findMovie().merge($scope.editMovie);
            }
        };

        init();
    }]);
