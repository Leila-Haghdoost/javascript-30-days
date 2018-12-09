// var num = 8;
// function doMath(){
//   num +=1;
//   if(num % 5 == 0){
//     return true;
//   } else {
//     return false;
//   }
// }
// num += 1; // it is important wher you put ur variables
// doMath()


//Higher Order Functions Code Along


// we ca pass functions to other functions


// function sing(){
//   console.log("twinkle twinkle...");
//   console.log("how i wonder...");
// }
// sing()


// setInterval(function(){
//   console.log("I am an anonymous function!");
//   console.log("THIS IS AWESOME!");
// }, 2000); //every 2 second



///////////////////////////
// function factorial(num){
//   var result = num
//   for (let i=1; i<num; i++){
//      // result *= num;
//      result = result * i;
//      }
//      console.log(result);
// }
// factorial(5);


//////////////////////////////////

var colors = ["red", "orange", "yellow"]
colors[3]="green"
colors.push("indigo") //push to end of array
colors.push("violet") //push to end of array
colors.pop()//remove the last argument of an array
colors.unshift("pink")
colors.shift()
//////////////////////////////////////

var numbers = [22, 67, 33, 96, 88];
console.log(numbers[numbers.lenght]);///undefined


////////////////////////////////
////nested Array


var friendGroups = [
  ["Harry", "Ron", "Herminone"],
  ["Malfoy", "Crabbe", "Goyle"],
  ["Mooney", "Wormtail", "Prongs"],
];
console.log(friendGroups[2][0]);
///[2] reffers to the index of arrays, [0] reffers to index of items in each array
