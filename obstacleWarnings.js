//obstacleWarnings.js
/*The Dev Girls need you to store each location so that a list of danger zones for each obstacle can be reported with every new warning.

Inside the warningMaker function:

Store each location in an array called zones.
Add each zone to the list string.
Report the list of danger zones with the alert message in this format:
Beware! There have been <obstacle> sightings in the Cove today!
<number> have been spotted at the <location>!
This is alert #<count> today for <obstacle> danger.
Current danger zones are:
<zone1>
<zone2>
<zone3>
...
*/
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // add each location to the zones array
    zones.push(location);
    // add each zone to the list string
    list = zones.join("\n");
    
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          "Current danger zones are:\n" + list
    );
  };
}