// Get the modal
var modal = document.getElementById('register_modal');

// Get the button that opens the modal
var regBtn = document.getElementById("register_button");

var save = document.getElementById("save_usr_data");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var user = {
	name: "",
	lastName: "",
	email: "",
	password: "",
	photo: ""
}

// When the user clicks on the button, open the modal
regBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}