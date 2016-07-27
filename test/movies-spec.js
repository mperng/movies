describe('MovieFormCtrl', function() {
    var scope, $location, createController;
    beforeEach(function() {
        localStorage.clear();
    });

    beforeEach(module('moviesApp'));

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('MovieFormCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should create a movie', function() {
    	var controller = createController();
        scope.$storage.movies=[];
        scope.newMovie = {};
    	scope.newMovie.title = 'Test Movie';
        scope.newMovie.genre = 'Test Genre';
        scope.newMovie.actors = ['Test Actor1', 'Test Actor2'];
        scope.newMovie.year = 1900;
        scope.newMovie.rating = 10;
        scope.createMovie();
        expect(scope.$storage.movies !== null);
    	expect(scope.$storage.movies[0] !== null);
    	test_movie = scope.$storage.movies[0];
    	expect(test_movie.title).toEqual('Test Movie');
    	expect(test_movie.genre).toEqual('Test Genre');
    	expect(test_movie.actors).toEqual(['Test Actor1', 'Test Actor2']);
    	expect(test_movie.year).toEqual(1900);
    	expect(test_movie.rating).toEqual(10);
    });

    it('should create multiple movies', function() {
        var controller = createController();
        scope.$storage.movies=[];
        scope.newMovie = {};
        scope.newMovie.title = 'Test Movie 1';
        scope.newMovie.genre = 'Test Genre 1';
        scope.newMovie.actors = ['Test Actor1', 'Test Actor1'];
        scope.newMovie.year = 1900;
        scope.newMovie.rating = 10;
        scope.createMovie();
        scope.newMovie.title = 'Test Movie 2';
        scope.newMovie.genre = 'Test Genre 2';
        scope.newMovie.actors = ['Test Actor2', 'Test Actor2'];
        scope.newMovie.year = 1880;
        scope.newMovie.rating = 0;
        scope.createMovie();
        expect(scope.$storage.movies);
        expect(scope.$storage.movies[0]);
        expect(scope.$storage.movies[1]);
        test_movie1 = scope.$storage.movies[0];
        test_movie2 = scope.$storage.movies[1];
        expect(test_movie1.title).toEqual('Test Movie 1');
        expect(test_movie1.genre).toEqual('Test Genre 1');
        expect(test_movie1.actors).toEqual(['Test Actor1', 'Test Actor1']);
        expect(test_movie1.year).toEqual(1900);
        expect(test_movie1.rating).toEqual(10);
        expect(test_movie2.title).toEqual('Test Movie 2');
        expect(test_movie2.genre).toEqual('Test Genre 2');
        expect(test_movie2.actors).toEqual(['Test Actor2', 'Test Actor2']);
        expect(test_movie2.year).toEqual(1880);
        expect(test_movie2.rating).toEqual(0);
    });
});

describe('MovieEditFormCtrl', function() {
    var scope, $location, createController, routeParams;
    beforeEach(function() {
        localStorage.clear();
    });

    beforeEach(module('moviesApp'));

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('MovieEditFormCtrl', {
                '$scope': scope,
                '$routeParams': routeParams
            });
        };
    }));

    it('should edit a movie', function() {
        routeParams = {movieId: 0};
        var controller = createController();
        scope.$storage.movies = [
            {
                id: 0,
                title: 'Test Movie',
                genre: 'Test Genre',
                actors: ['Test Actor1', 'Test Actor2'],
                year: 1900,
                rating: 10
            }
        ];
        scope.editMovie = {
            title: 'Test Movie2'
        };
        scope.updateMovie(false);
        expect(scope.$storage.movies[0]);
        expect(scope.$storage.movies[0].title).toEqual('Test Movie2');
        expect(scope.$storage.movies[0].genre).toEqual('Test Genre');
        expect(scope.$storage.movies[0].actors).toEqual(['Test Actor1', 'Test Actor2']);
        expect(scope.$storage.movies[0].year).toEqual(1900);
        expect(scope.$storage.movies[0].rating).toEqual(10);
    });

    it('should edit one movie out of multiple movies', function() {
        routeParams = {movieId: 1};
        var controller = createController();
        scope.$storage.movies = [
            {
                id: 0,
                title: 'Test Movie',
                genre: 'Test Genre',
                actors: ['Test Actor1', 'Test Actor2'],
                year: 1900,
                rating: 10
            },
            {
                id: 1,
                title: 'Test Movie 1',
                genre: 'Test Genre 1',
                actors: ['Test Actor1', 'Test Actor2'],
                year: 1888,
                rating: 0
            }
        ];
        scope.editMovie = {
            title: 'Test Movie2'
        };
        scope.updateMovie(false);
        expect(scope.$storage.movies[1]);
        expect(scope.$storage.movies[1].title).toEqual('Test Movie2');
        expect(scope.$storage.movies[1].genre).toEqual('Test Genre 1');
        expect(scope.$storage.movies[1].actors).toEqual(['Test Actor1', 'Test Actor2']);
        expect(scope.$storage.movies[1].year).toEqual(1888);
        expect(scope.$storage.movies[1].rating).toEqual(0);
    });

    it('should edit multiple movie attributes', function() {
        routeParams = {movieId: 0};
        var controller = createController();
        scope.$storage.movies = [
            {
                id: 0,
                title: 'Test Movie',
                genre: 'Test Genre',
                actors: ['Test Actor1', 'Test Actor2'],
                year: 1900,
                rating: 10
            }
        ];
        scope.editMovie = {
            title: 'Test Movie2',
            genre: 'Action'
        };
        scope.updateMovie(false);
        expect(scope.$storage.movies[0]);
        expect(scope.$storage.movies[0].title).toEqual('Test Movie2');
        expect(scope.$storage.movies[0].genre).toEqual('Action');
        expect(scope.$storage.movies[0].actors).toEqual(['Test Actor1', 'Test Actor2']);
        expect(scope.$storage.movies[0].year).toEqual(1900);
        expect(scope.$storage.movies[0].rating).toEqual(10);
    });


    it('should delete a movie', function() {
        routeParams = {movieId: 0};
        var controller = createController();
        scope.$storage.movies = [
            {
                id: 0,
                title: 'Test Movie',
                genre: 'Test Genre',
                actors: ['Test Actor1', 'Test Actor2'],
                year: 1900,
                rating: 10
            }
        ];
        scope.deleteMovie();
        expect(scope.$storage.movies[0]).toEqual(undefined);
        expect(scope.$storage.movies.length).toEqual(0);
    });

    it('should delete one movie out of multiple movies', function() {
        routeParams = {movieId: 1};
        var controller = createController();
        scope.$storage.movies = [
            {
                id: 0,
                title: 'Test Movie',
                genre: 'Test Genre',
                actors: ['Test Actor1', 'Test Actor2'],
                year: 1900,
                rating: 10
            },
            {
                id: 1,
                title: 'Test Movie 1',
                genre: 'Test Genre 1',
                actors: ['Test Actor3', 'Test Actor4'],
                year: 1880,
                rating: 5
            }
        ];
        scope.deleteMovie();
        expect(scope.$storage.movies[0]);
        expect(scope.$storage.movies[1]).toEqual(undefined);
        expect(scope.$storage.movies.length).toEqual(1);
    })
});
