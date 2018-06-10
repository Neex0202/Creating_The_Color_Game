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
var pickedColor = colors[5];
var colorDisplay = document.getElementById("colorDisplay");

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
			}else{
				console.log("WRONG!!!")
				this.style.background = "#232323";
			}
	});

}

