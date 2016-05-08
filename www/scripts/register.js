app.controller("registerController", function($scope, $rootScope) {
	$scope.registerIsShowing = true;

	$scope.showRegister = showRegister;
	$scope.hideRegister = hideRegister;

	function showRegister() {
		$scope.registerIsShowing = true;
	}

	function hideRegister() {
		$scope.registerIsShowing = false;
	}

	$scope.registerUser = function() {
		/*var firstName = document.forms["register"]["usr_first_name"].value;
	    var lastName = document.forms["register"]["usr_last_name"].value;
	    var email = document.forms["register"]["usr_email"].value;
	    var password = document.forms["register"]["usr_password"].value;
	    var password_rep = document.forms["register"]["usr_password_rep"].value;
	    var photo = document.forms["register"]["usr_img"].value;

	    if (password === password_rep) {
	    	$scope.user.firstName = firstName;
		    $scope.user.lastName = lastName;
		    $scope.user.email = email;
		    $scope.user.password = password;
		    $scope.user.photo = "https://www.lapatilla.com/site/wp-content/uploads/2016/03-04/donald.jpg";
		    alert("User successfully registered!");
		    document.getElementById('register_modal').style.display = 'none';
	    } else {
	    	alert("Mismatched passwords!");
	    }    
	    console.log($scope.user);
	    $scope.loadUserData();*/
	    
	    if ($scope.newUser.password === $scope.newUser.password_rep) {
		    $scope.newUser.photo = "https://www.lapatilla.com/site/wp-content/uploads/2016/03-04/donald.jpg";
			alert("User successfully registered!");
			$scope.hideRegister();
	     	$rootScope.$emit("loginRegisteredUser", $scope.newUser);
	    } else {
	    	alert("Mismatched passwords!");
	    }    
	    //console.log($scope.user);
	    //$scope.loadUserData();
	}
});