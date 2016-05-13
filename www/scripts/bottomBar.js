app.controller("bottomBarController", function($scope) {
	$scope.userIsLogged = false;
	$scope.user = {};
	$scope.newUser = {};
	$scope.registerIsShowing = false;

	$scope.showRegister = showRegister;
	$scope.hideRegister = hideRegister;
	$scope.logout = logout;
	$scope.login = login;
	$scope.registerUser = registerUser;

	function showRegister() {
		$scope.registerIsShowing = true;
	}

	function hideRegister() {
		$scope.registerIsShowing = false;
	}

	function logout() {
		$scope.user = {};
		$scope.userIsLogged = false;
	}

	function login() {
		$scope.user = {
			"firstName": "Yoshisaur",
			"lastName": "Munchakoopas",
			"email": $scope.login.email,
			"password": $scope.login.password,
			"photo": "assets/images/yoshi.jpg"
		}
		$scope.userIsLogged = true;
		$scope.login = {};
	}

	function registerUser() {    
	    if ($scope.newUser.password === $scope.newUser.password_rep) {
		    $scope.newUser.photo = "https://www.lapatilla.com/site/wp-content/uploads/2016/03-04/donald.jpg";
	     	$scope.user = $scope.newUser;
			$scope.userIsLogged = true;
			$scope.newUser = {};
			$scope.hideRegister();
	    } else {
	    	alert("Mismatched passwords!");
	    }
	}



	var modal = document.getElementById('register_modal');
	window.onclick = function(event) {
	    if (event.target == modal) {
	        $scope.hideRegister();
	    }
	}
});