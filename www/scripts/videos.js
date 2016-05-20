app.controller('videosController', function($scope, $location, $routeParams, filterFilter, PlayVideoService, $http) {
    $scope.videos = [];
    $http.get('http://localhost:8080/api/videos')
    .then(function(res) {
        $scope.videos = res.data;
    });

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

	function showVideo(video) {
        PlayVideoService.setVideo(video);
		$location.path('/video/' + video.id);
        //$rootScope.$broadcast("PlayVideo", video);
	}
});