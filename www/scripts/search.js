app.controller('searchController', function($scope, $location, $http, filters, $rootScope, videos){
	$scope.zydahSmall = '../assets/images/zydah_small.png';
	$scope.filtersAreShowing = false;
	$scope.searchQuery = '';
	$scope.searchFilters = [];
	videos.getAllTags()
	.then(function(res) {
		for (i = 0; i < res.data.length; i++) {
			$scope.searchFilters.push({
				'name': res.data[i],
				'value': false
			});
		}
	});
	/*$scope.searchFilters = {
		'genres': [
			{ 'name': 'Action', 'value': false },
			{ 'name': 'Comedy', 'value': false },
			{ 'name': 'Drama', 'value': false },
			{ 'name': 'Fantasy', 'value': false },
			{ 'name': 'Horror', 'value': false },
			{ 'name': 'Romance', 'value': false }
		]
	};*/

	$scope.toggleFilters = toggleFilters;
	$scope.search = search;

	function toggleFilters() {
		$scope.filtersAreShowing = !$scope.filtersAreShowing;
	}

	function search() {
		filters.setFilters($scope.searchQuery, $scope.searchFilters);
		//$location.path('/search/' + $scope.searchQuery);
		$rootScope.$broadcast('filterVideos');
	}
});