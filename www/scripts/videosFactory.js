app.factory('videos', function($http) {
	var myVideo = {
		getAll: function() {
			return $http.get('http://localhost:8080/api/videos');
		},
		getFiltered: function(filters) {
			return $http.get('http://localhost:8080/api/videos/filter', {
				'params': filters
			});
		},
		getAllTags: function() {
			return $http.get('http://localhost:8080/api/tags');
		},
		getById: function(id) {
			return $http.get('http://localhost:8080/api/video', {
				'params': {
					'id': id
				}
			});
		},
		updateRating: function(id, rating) {
			return $http.post('http://localhost:8080/api/video/rating', {
				'id': id,
				'rating': rating
			});
		},
		saveComment: function(id, newComment) {
			return $http.post('http://localhost:8080/api/video/newComment', {
				'id': id,
				'newComment': newComment
			});
		}
	}

	return myVideo;
});