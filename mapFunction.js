var numbers = [12, 4, 3, 9, 8, 6];

var results = numbers.map(function(arrayCell){return arrayCell * 2;});

// To check out the results array:
// 1. Copy and paste the two lines above in browser console.
// 2. In the console log, type: console.log(results)
// 3. [24, 8, 6, 18, 6, 12]


var passengers = [  ["Thomas", "Meeks"], ["Emma", "Thomas"], ["Joe", "Park"]];
var modifiedNames = passengers.map(function(arrayCell){ return arrayCell[0] + " " + arrayCell[1];});
// If you copy and paste the two lines above and type: console.log(modifiedNames)
// Result:  ["Thomas Meeks", "Emma Thomas", "Joe Park"]

modifiedNames.map(function(arrayCell){alert("Yo, " + arrayCell + " !");});
// If you paste the line above to browser console, you will get three pop up windows with that three names in the modifiedNames array
