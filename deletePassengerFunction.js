function deletePassenger(name, list){
  if (list.length == 0){
    console.log("List is empty!");
  } else {
    for(var i = 0; i < list.length; i++){
      if (list[i] == name){
        list[i] = undefined;
        return list;
      } else if (i == list.length - 1){
        console.log("Passenger not found!");
        return list;
      }
    }
  }
  return list;
}
