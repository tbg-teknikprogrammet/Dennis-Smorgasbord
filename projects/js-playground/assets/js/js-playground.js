/* Ruta 1 - Lightbox */
document.body.addEventListener('keypress', function(e) {
	if (e.keyCode == 27) {
		overlay.classList.toggle('overlay-toggle');
		loginWindow.classList.toggle('loginWindow-toggle');
	}
});
var overlay = document.getElementsByClassName('overlay')[0];
var btnLogin = document.getElementById('btnLogin');
var loginWindow = document.getElementsByClassName('loginWindow')[0];
btnLogin.addEventListener('click', function() {
	overlay.classList.toggle('overlay-toggle');
	loginWindow.classList.toggle('loginWindow-toggle');
});

overlay.addEventListener('click', function() {
	overlay.classList.toggle('overlay-toggle');
	loginWindow.classList.toggle('loginWindow-toggle');
});

/* Ruta 2 - Dark mode */
var moon = document.getElementsByClassName('fa-moon')[0];
var gridItems = document.querySelectorAll('.grid-item');
moon.addEventListener('click', function() {
	moon.classList.toggle('darkMoon');
	for (var i = 0; i < gridItems.length; i++) {
		gridItems[i].classList.toggle('dark');
	}
});
