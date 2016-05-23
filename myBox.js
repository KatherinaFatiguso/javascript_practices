// Practice creating Javascript Objects

var booksArray = ['Great Expectation', 'The Remains of the day', 'Peter Pan'];
// Curly brackets are to instruct creating a new object in Javascript.
var myBox = { height: 6, width: 8, length: 10, volume: 480, material: 'cardboard', contents: booksArray
  };

alert('Box height ' + myBox.height);
alert('Box width ' + myBox.width);
alert('Box length ' + myBox.length);
alert('Box material ' + myBox.material);
alert(myBox.contents);
