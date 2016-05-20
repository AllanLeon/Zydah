app.controller('videoPlayerController', function($scope, PlayVideoService, $sce, $routeParams){
	/*$scope.video = {
		'title': 'A Love Story.',
		'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
		'tags': ['comedy', 'romance'],
		'rating': 9001,
		'url': 'assets/videos/love.mp4'
	};*/
	$scope.video = PlayVideoService.getVideo();
	$scope.video.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $routeParams.id + '?autoplay=1');

	$scope.video.comments = [
		{
			'name': 'A',
			'img': 'assets/images/user_circle.png',
			'text': 'first comment'
		},
		{
			'name': 'b',
			'img': 'assets/images/user_circle.png',
			'text': 'wqert'
		},
		{
			'name': 'wqertyujh',
			'img': 'assets/images/user_circle.png',
			'text': 'qwertghjhgvcxz'
		},
		{
			'name': 'qqwq',
			'img': 'assets/images/user_circle.png',
			'text': 'rtyuiolkmnbv'
		},
		{
			'name': 'poqe',
			'img': 'assets/images/user_circle.png',
			'text': 'wqerghfdsa'
		},
		{
			'name': 'qwertyn',
			'img': 'assets/images/user_circle.png',
			'text': 'qwertglklm'
		}
	];

	$scope.newComment = {}

	$scope.plus1 = plus1;
	$scope.minus1 = minus1;
	$scope.saveComment = saveComment;

	function plus1() {
		$scope.video.rating++;
	}

	function minus1() {
		if ($scope.rating != 0) {
			$scope.video.rating--;
		}
	}

	function saveComment() {
		$scope.newComment.name = "Yoshisaur Munchakoopas";
		$scope.newComment.img = "assets/images/yoshi.jpg";
		$scope.video.comments.push($scope.newComment);
		$scope.newComment = {};
	}

	/*$scope.$on("PlayVideo", function(event, video) {
		$scope.video = video;
		$scope.video.url = 'assets/videos/love.mp4';
		$scope.video.comments = comments;
	})*/
});