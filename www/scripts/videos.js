app.controller('videosController', function($scope, $location, $http, videos, filters) {
    $scope.videos = [];
    videos.getAll()
    .then(function(res) {
        $scope.videos = res.data;
    }, function(res) {
    	console.log(res);
    });

    /*$scope.filterTags = filterTags;

    function filterTags(vid) {
    	if (filters.getFilters().tags.length > 0) {
    		return vid.tags.includes(filters.getFilters().tags);
    	} else {
    		return true;
    	}
    }

    $scope.filterTitle = filters.getFilters().title;*/

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

	$scope.$on('filterVideos', function(event, args) {
		videos.getFiltered(filters.getFilters())
	    .then(function(res) {
	    	$scope.videos = res.data;
	    }, function(res) {
	    	console.log(res);
	    });
	})
});