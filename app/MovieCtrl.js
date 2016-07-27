angular.module('moviesApp')
    .controller('MovieCtrl', ['$scope', '$localStorage', '$sessionStorage',
    function ($scope, $localStorage, $sessionStorage) {
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
            console.log($scope.$storage.movies);
        };

        $scope.reset = function() {
            $localStorage.$reset({ movies: [] });
        };

        init();
    }]);
