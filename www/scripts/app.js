var app = angular.module('zydah', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		'templateUrl': 'views/main.html',
		'controller': 'mainController'
	})
	.when('/search/:query', {
		'templateUrl': 'views/search.html',
		'controller': 'searchController'
	})
	.when('/video/:id', {
		'templateUrl': 'views/video_player.html',
		'controller': 'videoplayerController'
	})
});