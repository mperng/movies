describe('MovieSvc', function(){
    var MovieSvc, $localStorage;

    beforeEach(module('moviesApp'));

    beforeEach(inject(function(_MovieSvc_, _$localStorage_){
        MovieSvc = _MovieSvc_;
        $localStorage = _$localStorage_;
    }));

    it('should get movies', function() {
        var movies = MovieSvc.getMovies();
        expect(movies).toEqual([]);
    });

    it('should get a movie', function() {
        $localStorage.movies = [{
            id: 12,
            title: 'Test Title',
            genre: 'Test Genre',
            actors: 'Test Actors',
            year: 1900,
            rating: 10
        }];
        var movie = MovieSvc.getMovie(12);
        expect(movie !== undefined);
        expect(movie.title).toEqual('Test Title');
        expect(movie.genre).toEqual('Test Genre');
        expect(movie.actors).toEqual('Test Actors');
        expect(movie.year).toEqual(1900);
        expect(movie.rating).toEqual(10);
    });

    it('should create a movie', function() {
        $localStorage.movies = [];
        var test_movie = {
            id: 12,
            title: 'Test Title',
            genre: 'Test Genre',
            actors: 'Test Actors',
            year: 1900,
            rating: 10
        };
        MovieSvc.createMovie(test_movie);
        expect($localStorage.movies[0] !== undefined);
        var movie = $localStorage.movies[0];
        expect(movie.id).toEqual(12);
        expect(movie.title).toEqual('Test Title');
        expect(movie.genre).toEqual('Test Genre');
        expect(movie.actors).toEqual('Test Actors');
        expect(movie.year).toEqual(1900);
        expect(movie.rating).toEqual(10);
    });

    it('should create a movie in non-empty movies list', function() {
        $localStorage.movies = [{
            id: 12,
            title: 'Test Title 1',
            genre: 'Test Genre 1',
            actors: 'Test Actors 1',
            year: 1900,
            rating: 10
        }];
        var test_movie = {
            id: 25,
            title: 'Test Title 2',
            genre: 'Test Genre 2',
            actors: 'Test Actors 2',
            year: 2001,
            rating: 1
        };
        MovieSvc.createMovie(test_movie);
        expect($localStorage.movies[1] !== undefined);
        expect($localStorage.movies.length > 1);
        var movie = $localStorage.movies[1];
        expect(movie.id).toEqual(25);
        expect(movie.title).toEqual('Test Title 2');
        expect(movie.genre).toEqual('Test Genre 2');
        expect(movie.actors).toEqual('Test Actors 2');
        expect(movie.year).toEqual(2001);
        expect(movie.rating).toEqual(1);
    });

    it('should delete a movie', function() {
        $localStorage.movies = [{
            id: 12,
            title: 'Test Title',
            genre: 'Test Genre',
            actors: 'Test Actors',
            year: 1900,
            rating: 10
        }];
        MovieSvc.deleteMovie(12);
        expect($localStorage.movies[0] === undefined);
        expect($localStorage.movies.length === 0);
    });

    it('should delete a movie in a non-empty movies list', function() {
        $localStorage.movies = [{
                id: 12,
                title: 'Test Title',
                genre: 'Test Genre',
                actors: 'Test Actors',
                year: 1900,
                rating: 10
            },
            {
                id: 25,
                title: 'Test Title 2',
                genre: 'Test Genre 2',
                actors: 'Test Actors 2',
                year: 2001,
                rating: 1
            }];
        MovieSvc.deleteMovie(12);
        expect($localStorage.movies.length === 1);
        var movie = $localStorage.movies[0];
        expect(movie !== undefined);
        expect(movie.id).toEqual(25);
        expect(movie.title).toEqual('Test Title 2');
        expect(movie.genre).toEqual('Test Genre 2');
        expect(movie.actors).toEqual('Test Actors 2');
        expect(movie.year).toEqual(2001);
        expect(movie.rating).toEqual(1);
    });

    it('should update a movie', function() {
        $localStorage.movies = [{
            id: 12,
            title: 'Test Title',
            genre: 'Test Genre',
            actors: 'Test Actors',
            year: 1900,
            rating: 10
        }];
        var editMovie = {
            title: 'New Title'
        }
        MovieSvc.updateMovie(12, editMovie);
        expect($localStorage.movies.length === 1);
        var movie = $localStorage.movies[0];
        expect(movie.id).toEqual(12);
        expect(movie.title).toEqual('New Title');
        expect(movie.genre).toEqual('Test Genre');
        expect(movie.actors).toEqual('Test Actors');
        expect(movie.year).toEqual(1900);
        expect(movie.rating).toEqual(10);
    });

    it('should update multiple attributes for a movie', function() {
        $localStorage.movies = [{
            id: 12,
            title: 'Test Title',
            genre: 'Test Genre',
            actors: 'Test Actors',
            year: 1900,
            rating: 10
        }];
        var editMovie = {
            title: 'New Title',
            genre: 'New Genre',
            rating: 6
        }
        MovieSvc.updateMovie(12, editMovie);
        expect($localStorage.movies.length === 1);
        var movie = $localStorage.movies[0];
        expect(movie.id).toEqual(12);
        expect(movie.title).toEqual('New Title');
        expect(movie.genre).toEqual('New Genre');
        expect(movie.actors).toEqual('Test Actors');
        expect(movie.year).toEqual(1900);
        expect(movie.rating).toEqual(6);
    });
});
