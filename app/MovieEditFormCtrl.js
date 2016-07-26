angular.module('moviesApp')
    .controller('MovieEditFormCtrl', ['$scope', '$localStorage', '$sessionStorage', '$routeParams',
    function ($scope, $localStorage, $sessionStorage, $routeParams) {
        var id = parseInt($routeParams.movieId);
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
            $scope.editMovie = findMovie(id);
        }

        var findMovie = function (id) {
            return _.find($scope.$storage.movies, {'id':id});
        }

        $scope.updateMovie = function (invalid) {
            // add to movies data structure
            if(!invalid) {
                _.merge(findMovie(id), $scope.editMovie);
            }
        };

        init();
    }]);
