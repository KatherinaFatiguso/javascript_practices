
///////////////////////////////////////////////
//Since functions can be treated as expression, they can also be returned like value
var parkRides = [['Birch Bumpers', 40],['Pines Plunge', 50],['Cedar Coaster', 20],['Ferris Wheel', 90]];
var fastPassQueue = ['Cedar Coaster','Pines Plunge','Birch Bumpers','Pines Plunge'];

var wantsRide = 'Birch Bumpers';
//This is if you want to pass the function into a variable
// var ticket = buildTiket(parkRides, fastPassQueue, wantsRide);
// ticket();//to call the function contained in the ticket variable, we need a set of parentheses and a semicolon.

// This is the cool js function to invoke the function immediately without assigning it into a variable
buildTiket(parkRides, fastPassQueue, wantsRide)();

// allRides = the array of rides and their wait time
// passRides = this will be the array of the next available Fast Pass rides.
// pick = the actual ride for which our customer would like a ticket.
function buildTiket(allRides, passRides, pick){
  if (passRides[0] == pick){
    var pass = passRides.shift();
    return function(){
      alert("Quick! You've got a Fast Pass to " + pass + "!");
    }; //this will return the function as the result (previously you knew it only returns variable)
  } else {
    for(var i = 0; i < allRides.length; i++){
      if(allRides[i][0] == pick){
        return function(){
          alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + allRides[i][1] + " minutes.");
        };
      }
    }
  }
}
