function addPassenger(name, list){
  if (list.length == 0){
    list.push(name);
    return list;
  } else {
    for (var i = 0; i < list.length; i++){
      if (list[i] == undefined){
        list[i] = name;
        alert("It is undefined");
        return list;
      } else if (i == list.length - 1){
        list.push(name);
        return list;
      }
    }
  }
}
