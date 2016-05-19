///////////////////////////////////////////////
// This is  function expression, assign them to variable and then call the new variable.
var sweetAnnouncement = function(){
  alert("Attention!\nCupcakes");
}
sweetAnnouncement();

///////////////////////////////////////////////
// This is assigning function into map function
var fruits = ['apple', 'carrot', 'pineapple'];
var fruitJuice = fruits.map(function(fruit){return '\n' + fruit + "juice";});
alert(fruitJuice);
