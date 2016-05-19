function changePowerTotal(totalPower, genID, genStatus, amountOfPower){
  if (genStatus == "on"){
    alert("Generator #" + genID + " is on now, adding " + amountOfPower + " MW, for a total of " + (totalPower += amountOfPower) + " MW!");
  } else if (genStatus == "off") {
    alert("Generator #" + genID + " is now off, removing " + amountOfPower + " MW, for a total of " + (totalPower -= amountOfPower) + " MW!");
  }
  return totalPower;
}
