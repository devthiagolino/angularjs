var PessoasController = angular.module('PessoasController', []);

PessoasController.controller('PessoasListar', ['$scope', '$http', function($scope, $http){

	$http.get('dados.json').success(function(data){		
		$scope.pessoas = data;
	});

}]);

PessoasController.controller('PessoasExibir', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$http.get('dados.json').success(function(data){		
		$scope.pessoa = data[$routeParams.id];
	});

}]);