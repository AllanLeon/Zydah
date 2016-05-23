var app = angular.module('zydah', ['ngRoute', 'clickOut']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		'templateUrl': 'views/videos.html',
		'controller': 'videosController'
	})
	/*.when('/search/:query', {
		'templateUrl': 'views/videos.html',
		'controller': 'videosController'
	})*/
	.when('/video/:id', {
		'templateUrl': 'views/video_player.html',
		'controller': 'videoPlayerController'
	})
	.otherwise({
		redirectTo: '/'
	});
});