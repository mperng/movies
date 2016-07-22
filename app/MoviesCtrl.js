angular.module('moviesApp')
    .controller('MoviesCtrl', ['$scope', function ($scope) {
        var next_id = 0;
        $scope.movies = [];
        $scope.createMovie = function () {
            // capture movie data from fields
            var title = $scope.newMovie.title;
            var genre = $scope.newMovie.genre;
            var actors = $scope.newMovie.actors;
            var year = $scope.newMovie.year;
            var rating = $scope.newMovie.rating;
            // add to movies data structure
            $scope.movies.push({
                id: next_id++,
                title: title,
                genre: genre,
                actors: actors,
                year: year,
                rating: rating
            });
            // clear the fields
            $scope.newMovie.title = '';
            $scope.newMovie.genre = '';
            $scope.newMovie.actors = '';
            $scope.newMovie.year = '';
            $scope.newMovie.rating = '';
        };

        $scope.deleteMovie = function (id) {
            _.remove($scope.movies, function(movie) {
                return movie.id === id;
            });
        };
    }]);
