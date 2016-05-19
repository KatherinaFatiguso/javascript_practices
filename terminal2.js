// Anonymous function expression that is called depending on the situation (multiple greetings)

var greeting;
var newCustomer = true;

if (newCustomer){
  greeting = function(){
    alert("Thanks for visiting the Badlands, yeah!");
  };
} else {
  greeting = function(){
    alert("Welcome back to the Badlands, yeah!");
  }
}
closeTerminal(greeting);

function closeTerminal(message){
  message();
}
