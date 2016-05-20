app.controller('searchController', function($scope, $location, $http){
	$scope.zydahSmall = '../assets/images/zydah_small.png';
	$scope.filtersAreShowing = false;
	$scope.searchQuery = '';
	$scope.searchFilters = [];
	$http.get('http://localhost:8080/api/tags')
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
		$location.path('/search/' + $scope.searchQuery);
	}

	/*funtion getAllFilters() {
		$http.get('http://localhost:8080/api/tags')
			.then(function(res) {
				for (i = 0; i < res.length; i++) {
					$scope.searchFilters.push({
						'name': res[i],
						'value': false
					});
				}
			});
	}*/
});