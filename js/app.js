const app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('datasets', {
		url: '/world',
		templateUrl: 'templates/world.tmpl.html',
		controller: 'worldController',
	});

	$urlRouterProvider.otherwise('/world');
});

app.controller('rootController', function($scope) {
})
