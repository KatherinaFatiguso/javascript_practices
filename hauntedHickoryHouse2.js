// Counts the rate of fear in amusement park.
// How to run this code?
// Load the name hauntedHickoryHouse.js in index.html and then from the browser open index.html
// Open the console log and enter some value, e.g. fearGenerated(5,5,7);
// An alert window will pop open and returns 368 for the value above.

// var people = 5;
// var rain = 5;
// var sharks = 7;
//
// var fearGenerated = function(numPeeps, rainInInches, numSharks){
//   var rainFear = numPeeps * rainInInches;
//   var sharkFear = numSharks * numSharks * numSharks;
//   var totalFear = sharkFear + rainFear;
// };
// var fear = fearGenerated(people, rain, sharks);
var fear = 100;

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear level: LOW\nStill wanna ride?");
  } else if ((fear >= 200) && (fear <= 300)) {
    return confirm("Fear level: MEDIUM\nThink you'll make it?");
  } else if ((fear > 300)) {
    return confirm("Fear level: HIGH\nThink again!");
  }
};

// This is a FUNCTION DECLARATION, the function is loaded when the script is running.
// However, it ONLY loads a variable "confirmToGo" not loading the full "fearMessage" function.
// "fearMessage" is a FUNCTION EXPRESSION, which is loaded ONLY when confirmRide() function is called.
function confirmRide(confirmToGo){
 	return confirmToGo();
 }
// call confirmRide here
var startRide = confirmRide(fearMessage);
