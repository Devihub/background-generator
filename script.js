var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomize() {
	color1.value = randomColors(),
	color2.value = randomColors();

	css.textContent = randomize.style.background + ";";
}

function randomColors() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

button.addEventListener("click", randomize);


document.addEventListener('DOMContentLoaded', function() {
    css.textContent = body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
})