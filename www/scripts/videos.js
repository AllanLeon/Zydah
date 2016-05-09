app.controller('videosController', function($scope){
	$scope.videos = [
		{
			'title': 'Video 1',
			'duration': 90,
			'rating': 150,
			'tags': ['2','3','4'],
			'img': '',
			'url': '/views/video_player.html'
		},
		{
			'title': 'Video 2',
			'duration': 489,
			'rating': 10,
			'tags': ['1'],
			'img': '',
			'url': '/views/video_player.html'
		},
		{
			'title': 'Video 3',
			'duration': 519,
			'rating': 12,
			'tags': ['1','6'],
			'img': '',
			'url': '/views/video_player.html'
		},
		{
			'title': '',
			'duration': 0,
			'rating': 0,
			'tags': [],
			'img': '',
			'url': '/views/video_player.html'
		}
	];

	$scope.secondsToMinSec = secondsToMinSec;
	$scope.showVideo = showVideo;

	function secondsToMinSec(x) {
		var minutes = Math.floor(x / 60);
		var seconds = x % 60;
		return minutes + ':' + ((seconds < 10) ? '0' + seconds : seconds);
	}

	function showVideo(url) {
		location.href = url;
	}
});