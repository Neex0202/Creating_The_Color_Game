console.log("connected")

// var colors = [
// "rgb(255, 0, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 0, 255)",
// "rgb(255, 255, 0)",
// "rgb(255, 0, 255)",
// "rgb(0, 255, 255)"
// ]

var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);


// Declare Variables
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

// easy event listener
easy.addEventListener("click", function(){
	console.log("easy clicked")
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display ="none";
		}

	}
})

// hard Event Listner
hard.addEventListener("click", function(){
	console.log("hard clicked");
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numOfSquares = 6
		colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){		
			squares[i].style.background = colors[i];		
			squares[i].style.display ="block";
		

	}
})

reset.addEventListener("click", function(){
	console.log("reset clicked");
	// generate all new colors;
	colors = generateRandomColors(numOfSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares;
	for(var i = 0; i <squares.length; i++){
	// change each color to match given color
	squares[i].style.background = colors[i];
	}
	// changeColors();
	// reset background to black
	h1.style.background = "#232323";

})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// Square Color Assigner
	squares[i].style.background = colors[i];

// Square Event listener

	squares[i].addEventListener("click", function() {
		console.log("square clicked");

		// grab color of picked square
		console.log(this.style.background);

		// decalre variabled for color clicked
		var clickedColor = this.style.background;
		// compare color to pickedColor
			if(clickedColor === pickedColor){
				console.log("Correct!");
				reset.textContent = "Play Again?"
				messageDisplay.textContent = "Correct";
				h1.style.background = pickedColor;

				// change squares to correct color;
				changeColors(clickedColor);

			}else{
				console.log("WRONG!!!")
				// change background of wrong square to match .container background
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
	});

}


// function to change all square colors to correct color. Called when correct square chosen
function changeColors(color){
	// loop through all squares
	for(var i = 0; i <squares.length; i++){
	// change each color to match given color
		squares[i].style.background = color;
	}
}



// RNG function to pick color
function pickColor() {
	var rng = Math.floor(Math.random() * colors.length);
	return colors[rng];
}

// function to generate random color
function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeate num times
	for(var i = 0; i < num; i++){;
		// get random color and push into array
		arr.push(randomColor());
}
	// return array
	return arr
}


// function to generate a Random Color
function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	// return string in "rgb(x, y, z)"
	return "rgb(" + r + ", " + g + ", " + b + ")"
}