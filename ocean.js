//CHALLENGE 1: Now the ranger-devs have asked you to build a findVehicle function that will accept a vehicle name and list of vehicle objects, and return the current storage location of the requested vehicle.

//Put all the vehicle objects in a vehicles array. Use the array literal syntax and pass in each of the vehicle variable names.
//Build a function expression assigned to a findVehicle variable, which accepts name and list parameters for the name of the individual vehicle sought and the full array of vehicles.
//Inside the findVehicle function, use a for loop to loop through all of the vehicles.
//if the type of the current object in the list matches the name parameter, then return the current object’s storedAt location.
//Call the findVehicle function and pass in the correct arguments to find the storage location of the "Submarine".

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array
var vehicles = [vehicle1, vehicle2, vehicle3];

// build findVehicle function expression
var findVehicle = function(name, list){
  for(var i = 0; i < list.length; i++){
    if (list[i].type == name) {
      return list[i].storedAt;
    }
  } 
};

// call findVehicle
findVehicle("Submarine", vehicles);



//CHALLENGE 2: From the reports of the pirates near Lighthouse Rock, the ranger-devs have determined that the opposition has seriously stepped up their game.
//They need to add some important information and power upgrades to their existing vehicles. New properties will be added for weapon (which gets a String) and submersible (which gets a Boolean).
//Use dot notation to make the following changes and additions, in order, to the vehicle objects:

//The Motorboat will have 4 seats added to its capacity.
//The Jet Ski is not submersible.
//The Submarine will acquire "Torpedoes".
//The Motorboat is not submersible.
//The Jet Ski will acquire "Lasers".
//The Submarine will add bunk beds, doubling its capacity.
//The Motorboat will acquire a "Rear-Mounted Slingshot".
//The Submarine is submersible.

vehicle1.capacity = vehicle1.capacity + 4;
vehicle2.submersible = false;
vehicle3.weapon = 'Torpedoes';
vehicle1.submersible = false;
vehicle2.weapon = 'Lasers';
vehicle3.capacity = vehicle3.capacity * 2;
vehicle1.weapon = 'Rear-Mounted Slingshot';
vehicle3.submersible = true;


//CHALLENGE 3: The ranger-devs are happy with the modifications to the vehicles. They need one last modification, though, so that they can know what sort of firepower they are able to use on each vehicle.
//Add a property called # of weapons to each vehicle using bracket notation. Then, consult the current objects and properties to assign the following values to the correct objects:
//There are 8 "Torpedoes".
//There are 4 "Lasers".
//There is 1 "Rear-Mounted Slingshot".

vehicle3["# of weapons"] = 8;
vehicle2["# of weapons"] = 4;
vehicle1["# of weapons"] = 1;


//CHALLENGE 4:The ranger-devs want to upgrade Lighthouse Rock with new super-blinding light bulbs and remove the old existing bulbs.
//The new superBlinders array and lighthouseRock object are provided. Each index of the superBlinders array contains a bulb name and its wattage within a sub-array.
//Completely remove the existing bulbs property from the lighthouseRock object.
//Add a weaponBulbs property to lighthouseRock and assign the superBlinders array as a value.
//Log the name value of the bulb with the highest wattage to the console. Use the correct index from the weaponBulbs property of the lighthouseRock object to access the correct name value.
//Note: You do not need to change the provided code for the superBlinders array or the lighthouseRock object.
var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
var name;
var wattage;
for (var i = 0; i < lighthouseRock.weaponBulbs.length - 1; i++){
	if (lighthouseRock.weaponBulbs[i + 1][1] > lighthouseRock.weaponBulbs[i][1]) {
  	name = lighthouseRock.weaponBulbs[i + 1][0];
 		wattage = lighthouseRock.weaponBulbs[i + 1][1];
  } else if (lighthouseRock.weaponBulbs[i + 1][1] <= lighthouseRock.weaponBulbs[i][1]) {
    name = lighthouseRock.weaponBulbs[i][0];
 		wattage = lighthouseRock.weaponBulbs[i][1];
  }
}
console.log(name);
console.log(wattage);

//CHALLENGE 5: PIRATES AHOY! It’s time for the ranger-devs to get over to the Lighthouse and throw down! Our lighthouseRock object now has a new numRangers property to track how many rangers are fighting at the Lighthouse.
//Your goal is to complete the addRanger function that takes in location, name, skillz, and station as parameters. Then we can pass in our lighthouseRock object as the location and start to add rangers.
//As rangers are added, increment the number of rangers at the location using its numRangers property.
//Add a property to the location using bracket notation that will be used to hold a ranger object. Specifically, each property will be named ranger1, ranger2, ranger3, etc. This will require string concatenation and the current value of the numRangers property.
//Now that you have your ranger<number> property, assign an object literal to it that contains properties for name, skillz, and station. Then assign values to those properties using the parameters that we pass in.
//Call your addRanger function three times with the appropriate arguments to add the following rangers, in order, to the location:
//name: "Nick Walsh", skillz: "magnification burn", station: 2
//name: "Drew Barontini", skillz: "uppercut launch", station: 3
//name: "Christine Wong", skillz: "bomb defusing", station: 1
//PURPOSE: learn how to change contents into individual objects

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  location.numRangers++;
  // add the ranger<number> property and assign a ranger object
  location["ranger" + location.numRangers] = {
    name: name, skillz: skillz, station: station
  };
}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

//CHALLENGE 6: We need to assign each of the ranger-devs to a super-blinding light bulb based on their station number. So we’re building a function that creates an alert message for the ranger-devs in the following format:

//Avast, me hearties!
//There be Pirates nearby! Stations!
//<name>, man the <superblinder>!
//<name>, man the <superblinder>!
//<name>, man the <superblinder>!
//We’ve created a dontPanic function for you that already contains the alert message. Your job is to finish building the list string:

//Create a for loop to loop through all of the rangers at the location, using the numRangers property to keep track.
//Inside the loop, begin by using the correct property to append the name of the current ranger to the list.
//Also, concatenate the text between the ranger name and the superblinder so that it matches the format above.
//Lastly, add the name of the correct super-blinding light bulb from the weaponBulbs array to the list. In order to retrieve the name of the correct bulb, you’ll need to use the ranger’s station number.
//This is the complete code for CHALLENGE 6:
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  for (var i = 1; i <= location.numRangers; i++){
    list = list + location["ranger" + i].name + ", man the " + location.weaponBulbs[location["ranger" + i ].station - 1][0] + "!\n";
  }

  alert(list);
}

dontPanic(lighthouseRock);

