function doSomething(){
  console.log('Hello World!');
}
doSomething();

/////////////////////////////////////

function square(num){
  //num is ging to hold the value of 10 temporary
  console.log(num * num); //num times num
  //it console.log the square of that number
}
square(10);// call the function we need to pass in a value
square(3);
square(5);

////////////////////////////////////////////


function sayHello(name){
  console.log("hello dear " + name + "!");
}
sayHello('Leila');
sayHello('Behnam');

////////////////////////////


function area(length, width){
  console.log('area is :' + length * width);
}
area(9, 2);

///////////////////////////////


const name = ['Ben', 'Leila', 'Mary'];

function greating(input){
  for(let i = 0; i < name.length; i++)
  console.log('Hi ' + input[i]);
}
greating(name);

///////////////////////////////

//this function capitalizes the first char in a string:

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris";
var capital = capitalize(city);
console.log(capital);

//////////////////////////////////////////


function capitalize(str){
  if(typeof(str) === "number"){
    return "that's not a string!"
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris";
var capital = capitalize(city);
var num = 37;
var capital = capitalize(num);
console.log(capital);

//////////////////////////////////////////

const sayHi = function(){
  console.log("Hello");
}
sayHi();

//////////////////////////////////////////


// function test(x, y){
// return y - x;
// }
// test(10, 40);
// console.log(test(10, 40));

///////////////////////////////////////

// function test(x) {
//   return x*2;
//   console.log(x);
//   return x/2; ///never run this return 
// }
// test(40);


///////////////////////////////////////
