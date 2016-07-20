var app = angular.module('moviesApp', [
    'moviesApp.MoviesCtrl'
]);

angular.module('moviesApp.MoviesCtrl', [])
    .controller('MoviesCtrl', ['$scope', function ($scope) {
        var next_id = 0;
        var test_movies = [
            {
                title: 'Saving Private Ryan',
                genre: 'Action, Drama, War',
                actors: ['Matt Damon', 'Tom Hanks'],
                year: 1998,
                rating: 8.6
            },
            {
                title: 'The Social Network',
                genre: 'Biography, Drama',
                actors: ['Jesse Eisenberg', 'Andrew Garfield'],
                year: 2010,
                rating: 7.7
            },
            {
                title: 'Steve Jobs',
                genre: 'Biography, Drama',
                actors: ['Michael Fassbender', 'Kate Winslet', 'Seth Rogen'],
                year: 2015,
                rating: 7.2
            }
        ];

        $scope.movies = test_movies;
        $scope.createMovie = function () {
            // capture movie data from fields
            var title = $scope.newMovie.title;
            var genre = $scope.newMovie.genre;
            var actors = $scope.newMovie.actors;
            var year = $scope.newMovie.year;
            var rating = $scope.newMovie.rating;
            // add to movies data structure
            movies[next_id++] = {
                title: title,
                genre: genre,
                actors: actors,
                year: year,
                rating: rating
            };
            // clear the fields
            $scope.newMovie.title = '';
            $scope.newMovie.genre = '';
            $scope.newMovie.actors = '';
            $scope.newMovie.year = '';
            $scope.newMovie.rating = '';
        };

        $scope.deleteMovie = function (id) {
            delete movie[id];
        };
    }]);
