// console.log('loaded');
//Ask the user"Are we there yet"
//Keep asking again and again unti, they ener "yes" Or "yeah"
//Then, alert "Yay, we finally made it!"

///version 1

var answer = prompt('Are we there yet?');
while (answer !== "yes" && answer !== "yeah"){
var answer = prompt('Are we there yet?');
}
alert("YAY, WE MADE IT!!!");



///version 2
var answer = prompt('Are we there yet?');
while (answer.indexOf("yes") === -1 ){//that means the word of yes it is not exist inside the answer
var answer = prompt('Are we there yet?');
}
alert("YAY, WE MADE IT!!!");
