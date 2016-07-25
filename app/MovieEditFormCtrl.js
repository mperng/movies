angular.module('moviesApp')
    .controller('MovieEditFormCtrl', ['$scope', '$localStorage', '$sessionStorage',
    function ($scope, $localStorage, $sessionStorage) {
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
        }

        $scope.populateEditForm = function(movie) {
            $scope.editMovie = movie;
        }

        /*
        $scope.editMovie = function(valid) {
            if(valid) {
                var movie = _.find(objects, _.matchesProperty('id', $scope.editMovie.id));
                if(movie) {

                }
            }
        }
        */

        init();
    }]);
