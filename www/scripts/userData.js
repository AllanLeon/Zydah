app.controller("userDataController", function($scope, $rootScope) {
	$scope.userIsLogged = true;
	$scope.user = {
		"firstName": "Yoshisaur",
		"lastName": "Munchakoopas",
		"email": "yoshi@saur.com",
		"password": "123abc",
		"photo": "../assets/images/yoshi.jpg"
	};

	$scope.logout = function() {
		$scope.user = {};
		var usr_data = document.getElementById("usr_data");
		usr_data.style.display = "none";
		var loginBar = document.getElementById("login");
		loginBar.style.display = "block";
	}

	$rootScope.$on("loginRegisteredUser", function(event, newUser) {
		$scope.user = newUser;
		$scope.userIsLogged = true;
	});

	/*$scope.loadUserData = function() {
		var usr_data = document.getElementById("usr_data");
		var loginBar = document.getElementById("login");
		if ($scope.user === {}) {
			usr_data.style.display = "none";
			loginBar.style.display = "block";
		} else {
			usr_data.style.display = "block";
			loginBar.style.display = "none";
			var usrImg = document.getElementById("usr_data_img");
			usrImg.src = $scope.user.photo;
			var usrName = document.getElementById("usr_data_name");
			usrName.innerHTML = $scope.user.firstName + " " + $scope.user.lastName;
		}
	}

	$scope.loadUserData();*/
});