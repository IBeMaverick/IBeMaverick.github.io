function onSignIn(googleUser) {
	var id_token = googleUser.getAuthResponse().id_token;
	document.getElementById("smol2").innerHTML = id_token;
}