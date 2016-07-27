angular.module('moviesApp')
    .service('MovieSvc', ['$localStorage', function ($localStorage) {
        this.getMovies = function () {
            return $localStorage.$default({ movies: [] }).movies;
        };

        this.getMovie = function(id) {
            return _.find($localStorage.movies, {'id':id});
        }

        this.createMovie = function (newMovie) {
            $localStorage.movies.push({
                id: newMovie.id,
                title: newMovie.title,
                genre: newMovie.genre,
                actors: newMovie.actors,
                year: newMovie.year,
                rating: newMovie.rating
            });
            this.save();
        };

        this.updateMovie = function (id, editMovie) {
            // add to movies data structure
            _.merge(this.getMovie(id), editMovie);
            this.save();
        };

        this.deleteMovie = function (id) {
            _.remove($localStorage.movies, {'id':id});
            this.save();
        };

        this.deleteAllMovies = function() {
            $localStorage.$reset({ movies: [] });
            this.save();
        };

        this.save = function() {
            $localStorage.$save();
        };
    }]);
