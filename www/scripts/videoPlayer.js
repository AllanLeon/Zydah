app.controller('videoPlayerController', function($scope, videos, $routeParams, currentUser, $sce){
	/*$scope.video = {
		'title': 'A Love Story.',
		'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
		'tags': ['comedy', 'romance'],
		'rating': 9001,
		'url': 'assets/videos/love.mp4'
	};*/
	//$scope.video = PlayVideoService.getVideo();
	$scope.video = {};
	videos.getById($routeParams.id)
	.then(function(res) {
		$scope.video = res.data;
	}, function(res) {
		console.log(res);
	});
	//$scope.video.url = 'assets/videos/love.mp4';
	$scope.video.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $routeParams.id + '?autoplay=1');

	/*$scope.video.comments = [
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
	];*/

	$scope.newComment = {}

	$scope.plus1 = plus1;
	$scope.minus1 = minus1;
	$scope.saveComment = saveComment;

	function plus1() {
		var rating = $scope.video.rating + 1;
		videos.updateRating($scope.video.id, rating)
		.then(function(res) {
			$scope.video.rating = rating;
		}, function(res) {
			console.log(res);
		});
	}

	function minus1() {
		var rating = $scope.video.rating - 1;
		videos.updateRating($scope.video.id, rating)
		.then(function(res) {
			$scope.video.rating = rating;
		}, function(res) {
			console.log(res);
		});
	}

	function saveComment() {
		if (currentUser.isUserLogged()) {
			if ($scope.newComment.text.trim() === '') {
				alert('Write a comment before posting!');
			} else {
				$scope.newComment.name = currentUser.getName();
				$scope.newComment.img = currentUser.getLoggedUser().photo;
				videos.saveComment($scope.video.id, $scope.newComment)
				.then(function(res) {
					$scope.video.comments.push($scope.newComment);
					$scope.newComment = {};
				}, function(res) {
					console.log(res);
				});
			}
		} else {
			alert('You must log in to comment!');
		}
	}

	/*$scope.$on("PlayVideo", function(event, video) {
		$scope.video = video;
		$scope.video.url = 'assets/videos/love.mp4';
		$scope.video.comments = comments;
	})*/
});