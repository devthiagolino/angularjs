var HomeController = angular.module('HomeController', []);

HomeController.controller('Home', ['$scope', '$http', function($scope, $http){
	$scope.bem_vindo = 'Seja bem vindo ao curso de AngularJs';

	$http.get('dados.json').success(function(data){
		$scope.pessoas = data;
	});
	
	$http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=982cb6a5aee79fe2e2b2dbc195898209&tags=alagoas&extras=url_t,url_m&per_page=3&format=json&nojsoncallback=1').success(function(data){
		$scope.imagens = data.photos.photo;
	});

}]);