var css = document.querySelector("h3");
var color1  = document.querySelector(".color1");
var color2  = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randomButton = document.querySelector('.random');



function randomHex() {
    var letters = "0123456789ABCDEF";
	var color = "#";
	while(color.length <= 6) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
	console.log(randomHex);
}


function setRandomGradient() {
    color1.value = randomHex();
    color2.value = randomHex();
    setGradient();
}


function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = body.style.background + ';';
}



window.addEventListener('load', setGradient);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomButton.addEventListener('click', setRandomGradient);
