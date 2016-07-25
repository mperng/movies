angular.module('moviesApp')
    .controller('MovieCtrl', ['$scope', '$localStorage', '$sessionStorage',
    function ($scope, $localStorage, $sessionStorage) {
        var next_id = 0;
        var init = function() {
            $scope.$storage = $localStorage.$default({ movies: [] });
            $scope.movies =
            $scope.years = getYears();
            $scope.ratings = getRatings();
            $scope.newMovie = {};
        }

        $scope.reset = function() {
            $localStorage.$reset({ movies: [] });
        }

        var getYears = function() {
            var years = [];
            for (var i = 2016; i >= 1900; --i){
                years.push(i);
            }
            return years;
        }

        var getRatings = function() {
            return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }

        $scope.createMovie = function () {
            // capture movie data from fields
            var title = $scope.newMovie.title;
            var genre = $scope.newMovie.genre;
            var actors = $scope.newMovie.actors;
            var year = $scope.newMovie.year;
            var rating = $scope.newMovie.rating;
            // add to movies data structure
            $scope.$storage.movies.push({
                id: next_id++,
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
        };

        $scope.deleteMovie = function (id) {
            _.remove($scope.$storage.movies, function(movie) {
                return movie.id === id;
            });
        };

        init();
    }]);
