console.log("connected")

var colors = [
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)"
]
// Declare Variables
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
				messageDisplay.textContent = "Correct";

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