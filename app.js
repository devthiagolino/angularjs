//Aqui eu chamo de coração da aplicação

var app = angular.module('app', ['ngRoute', 'PessoasController', 'HomeController']);


app.config([
	'$routeProvider',  function($routeProvider, $locationProvider){
		$routeProvider

		.when('/', {
			templateUrl: 'app/partials/home.html',
			controller: 'Home'
		})

		.when('/pessoas', {
			templateUrl: 'app/partials/pessoas.html',
			controller: 'PessoasListar'
		})
		
		.when('/pessoa/:id', {
			templateUrl: 'app/partials/pessoa.html',
			controller: 'PessoasExibir'
		})

		.otherwise({
			redirectTo: '/'
		});

	}	
]);