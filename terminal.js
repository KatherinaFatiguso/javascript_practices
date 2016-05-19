// Anonymous function expression

var greeting = function(){
	alert("Thanks for visiting the Badlands!\n" +
  			"We hope your stay is ... better than most!");
};

closeTerminal(greeting);

function closeTerminal(message){
	message();
}
