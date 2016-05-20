app.factory('users', function($http) {
	var myUser = {
		loginUser: function(user) {
			return $http.get('http://localhost:8080/api/user', {
				'params': {
					'email': user.email,
					'password': user.password
				}
			});
		},
		createUser: function(user) {
			return $http.post('http://localhost:8080/api/user', user);
		}
	}

	return myUser;
});