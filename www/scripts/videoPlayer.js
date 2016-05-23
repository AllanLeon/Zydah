app.controller('videoPlayerController', function($scope, videos, $routeParams, currentUser, $sce){
	$scope.video = {};
	$scope.video.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $routeParams.id + '?autoplay=1');
	$scope.newComment = {};	

	$scope.plus1 = plus1;
	$scope.minus1 = minus1;
	$scope.saveComment = saveComment;

	videos.getById($routeParams.id)
	.then(function(res) {
		$scope.video = res.data;
	}, function(res) {
		console.log(res);
	});

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
});