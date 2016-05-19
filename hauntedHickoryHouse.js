// Counts the rate of fear in amusement park.
// How to run this code?
// Load the name hauntedHickoryHouse.js in index.html and then from the browser open index.html
// Open the console log and enter some value, e.g. fearGenerated(5,5,7);
// An alert window will pop open and returns 368 for the value above.

var people = 5;
var rain = 5;
var sharks = 7;

var fearGenerated = function(numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  if (totalFear < 100) {
    alert("What a boring ride, score: " + totalFear);
  } else if ((totalFear >= 100) && (totalFear < 400)) {
    alert("So much fun, score: " + totalFear);
  } else if (totalFear >= 400) {
    alert("Too scarrryyy, score: " + totalFear);
  }
  return totalFear;
};
var fear = fearGenerated(people, rain, sharks);

closeTerminal(fear);

function closeTerminal(message){
 	message(people, rain, sharks);
 }
