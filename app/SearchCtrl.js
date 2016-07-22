angular.module('moviesApp')
    .controller('SearchCtrl', ['$scope', function ($scope) {
        var search_text = $('#input')
            .asEventStream('keydown')
            .debounce(300)
            .map(function(event) {
                return event.target.value;
            })
            .skipDuplicates();
        function queryMovie(query) {
          return _.where($scope.movies, query);
        }
        $scope.searchMovie = function (query) {
            return Bacon.fromPromise(queryMovie(query));
        }
    }]);
