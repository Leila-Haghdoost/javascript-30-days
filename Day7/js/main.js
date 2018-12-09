//write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

// version 1

// function isEven(num){
//   if(num % 2 === 0){
//     return 'true';
//   } else {
//     return 'false';
//   }
//   // console.log();
// }
// isEven(4); //true
// isEven(21);//false
// isEven(68);//true
// isEven(333);//false
// // console.log(isEven(21));
///////////////////////////////////////////

// function isEven(num){
//   return if(num % 2 === 0); //just returns the value
// }

/// version 3 ///////////////////////////////
// var numbers = [4, 21, 68, 333]
//
// const isEven = function(num){
//   for (var i = 0; i < num.length; i++) {
//     if(num[i] % 2 === 0){
//       console.log('true ' + num[i] );
//     } else if(num[i] % 2 !== 0){
//         console.log('false ' + num[i]  );
//     } else{
//       console.log('empthy');
//     }
//   }
// }
// isEven(numbers);
//

////////////////////////////////////

// write a function factorial() which tackes a single numeric arqument and returns the factorial of that number
////version 0

// function factorial(num){
//   //define a result variable
//   var result = 1;
//   //calculate factorial and store value in result
//   for(var i = 1; i <= num; i++){
//     // result = result * i;
//     result  *= i;
//   }
//   //return the result variable
//   return result;
// }
// //factorial(4) 4 x 3 x 2 x 1

////////////////////////////////////

// function factorial(num){
//   if(num == 0 ){
//   return 1;
//   }
//   //define a result variable
//   var result = num;
//   //calculate factorial and store value in result
//   for(var i = num - 1; i >= 1; i--){
//     // result = result * i;
//     result  *= i;
//   }
//   //return the result variable
//   return result;
// }
// //factorial(4) 4 x 3 x 2 x 1



/////////////////////////////////////////////

////version 3

// function factorialize(num) {
//   var result = num
//   if(num == 0 || num == 1)
//   return 1;
//   while(num > 1){
//     num--;
//     result *= num
//   }
//   console.log('factorial: '+ result);
// }
// factorialize(5); //120
// factorialize(2); //2
// factorialize(10); //3628800
// factorialize(0); //1
//



// /////////////////////////////////////
// //Circular dependencies
// // function chicken() {
// //   console.log('This is chicken function');
// / //    egg();
// //   }
// //
// //   function egg() {
// //    console.log('This is egg function');
// //    chicken();
// //  }
// //  egg();


//////////////////////////////////
// function addNumbers(num1, num2) {
//    var result = num1 + num2;
//    console.log(result);
//    return result; // Anything after this line won't be executed
//  }
//
//  var sum = addNumbers(5, 2);
//  var biggerSum = addNumbers(2, 5) + addNumbers(3, 2);
// console.log('biggerSum: ' + biggerSum);
// var hugeSum = addNumbers(addNumbers(5, 2), addNumbers(3, 7));
// console.log('hugeSum: ' + biggerSum);


//////////////////////////////////////////////

//// write a function kebabToSnake() which tackes a single kebab-cased string argument and returns the snake_cased version.

function kebabToSnake(str){

  //replace all '-' with "_"s
  var newStr = str.replace(/-/g, '_');
  // console.log( newStr );
  //return str
  return newStr;
}
kebabToSnake("hello-world");//"hello_world"
kebabToSnake("dogs-are-awesome"); //"dogs_are_awesome"
kebabToSnake("balah"); //"balah"
