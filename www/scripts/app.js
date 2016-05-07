var app = angular.module('zydah', []);

app.controller("registerController", function($scope) {
	$scope.user = {
		"firstName": "Yoshisaur",
		"lastName": "Munchakoopas",
		"email": "yoshi@saur.com",
		"password": "123abc",
		"photo": "../assets/images/yoshi.jpg"
	}

	$scope.registerUser = function() {
		var firstName = document.forms["register"]["usr_first_name"].value;
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
	    $scope.loadUserData();
	}

	$scope.logout = function() {
		$scope.user = {};
		var usr_data = document.getElementById("usr_data");
		usr_data.style.display = "none";
		var loginBar = document.getElementById("login");
		loginBar.style.display = "block";
	}

	$scope.loadUserData = function() {
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

	$scope.loadUserData();
});