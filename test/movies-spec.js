describe('MoviesCtrl', function() {
    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.newMovie', function() {
        it('should create a movie', function() {
            var $scope = {};
            var controller = $controller('MoviesCtrl', {
                $scope: $scope
            });
            $scope.newMovie.title = 'Test Movie';
            $scope.newMovie.genre = 'Test Genre';
            $scope.newMovie.actors = ['Test Actor1', 'Test Actor2'];
            $scope.newMovie.year = 1900;
            $scope.newMovie.rating = 10.0;
            $scope.createMovie();
            expect($scope.movies[0] !== null);
            test_movie = $scope.movies[0];
            expect(test_movie.title).toEqual('Test Movie');
            expect(test_movie.genre).toEqual('Test Genre');
            expect(test_movie.actors).toEqual(['Test Actor1', 'Test Actor2']);
            expect(test_movie.year).toEqual(1900);
            expect(test_movie.rating).toEqual(10.0);
        });
    });
});
