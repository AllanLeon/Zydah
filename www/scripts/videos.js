app.controller('videosController', function($scope, $location, $routeParams, filterFilter) {
	$scope.videos = [
        {
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 90,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 90,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        },
        {
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 90,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 90,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        },
        {
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 90,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 90,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        },
        {
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 90,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 90,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        },
        {
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 90,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 90,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        },
        {
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 90,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 90,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        },{
            'title': 'I QUIT FOR A NEW JOB! - HTC Vive 04',
            'description': 'HTC VIve once again!',
            'duration': 90,
            'tags': ['simulator', 'VR', 'cooking'],
            'rating': 222864,
            'id': 'e7Ru2x4qHlI'
        },
        {
            'title': 'BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator',
            'description': 'Bear Simulator, such a beautiful game...',
            'duration': 123,
            'tags': ['simulator', 'bear', '2016'],
            'rating': 136928,
            'id': 'hbVUF5b307s'
        },
        {
            'title': 'NASA HIRE ME!!! (Scrap Mechanic)',
            'description': 'Scrap Mechanic=Better then minecraft?',
            'duration': 564,
            'tags': ['nasa', 'scrap', 'mechanic'],
            'rating': 168482,
            'id': 'NrvfFmpdcG0'
        },
        {
            'title': 'MAKING FLAWLESS BRIDGES! // Bridge Constructor',
            'description': 'Making bridges is my life. Its what I do, its what I breathe. Its what I eat.',
            'duration': 321,
            'tags': ['bridge', 'constructor', 'builder'],
            'rating': 159131,
            'id': 'prt1bk2B-gs'
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'duration': 45,
            'tags': ['comedy', 'romance'],
            'rating': 9001,
            'id': '../assets/videos/love.mp4'
        }
    ]
	/*$scope.videos = [
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
		},
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
		},
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
		},
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
		},
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
		},
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
		},
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
	];*/

	if ($routeParams.query != "") {
		$scope.videos = filterFilter($scope.videos, {'title': $routeParams.query})
	}

	$scope.secondsToMinSec = secondsToMinSec;
	$scope.showVideo = showVideo;

	function secondsToMinSec(x) {
		var minutes = Math.floor(x / 60);
		var seconds = x % 60;
		return minutes + ':' + ((seconds < 10) ? '0' + seconds : seconds);
	}

	function showVideo(id) {
		$location.path('/video/' + id);
	}
});