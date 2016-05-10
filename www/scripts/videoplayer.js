app.controller('videoplayerController', function($scope){
	$scope.demoVideoURL = '../assets/videos/love.mp4';
	$scope.rating = 0;
	$scope.plus1 = plus1;
	$scope.minus1 = minus1;

	function plus1() {
		$scope.rating++;
	}

	function minus1() {
		if ($scope.rating != 0) {
			$scope.rating--;
		}
	}
});