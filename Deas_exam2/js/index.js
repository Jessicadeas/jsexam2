function checkLogin(){
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');
var elMessage = document.getElementById('message');
   

	if (elUsername.value == "username" && elPassword.value == "pw"){
	location = "options.html";
	}else {
		elMessage.textContent= 'Incorrect Login. Please try again.';
		event.preventDefault();
}
}

var elForm = document.getElementById('submit');
elForm.addEventListener('click', checkLogin, false);