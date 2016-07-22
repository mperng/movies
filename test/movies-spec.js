describe('MoviesCtrl', function() {
    var scope, $location, createController;
    beforeEach(function() {
        localStorage.clear();
    });

    beforeEach(module('moviesApp'));

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        console.log('creating controller function');
        createController = function() {
            return $controller('MoviesCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should create a movie', function() {
    	var controller = createController();
        $location.path('/');
        scope.newMovie = {};
    	scope.newMovie.title = 'Test Movie';
        scope.newMovie.genre = 'Test Genre';
        scope.newMovie.actors = ['Test Actor1', 'Test Actor2'];
        scope.newMovie.year = 1900;
        scope.newMovie.rating = 10.0;
        scope.createMovie();
        expect(scope.movies !== null);
    	expect(scope.movies[0] !== null);
    	test_movie = scope.movies[0];
    	expect(test_movie.title).toEqual('Test Movie');
    	expect(test_movie.genre).toEqual('Test Genre');
    	expect(test_movie.actors).toEqual(['Test Actor1', 'Test Actor2']);
    	expect(test_movie.year).toEqual(1900);
    	expect(test_movie.rating).toEqual(10.0);
    });
});
