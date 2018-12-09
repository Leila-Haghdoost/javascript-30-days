////////// While Loops Problem Set /////////


console.log('Print all numbers between -10 and 19');
let number = -10
while(number <= 19){
  console.log(number);
  number ++;
}



console.log('Print all even numbers between 10 and 40');

let counter = 10
while(counter <= 40){
  if(counter % 2 === 0 ){
  console.log(counter);
  }
  counter ++;
}
///Version 2
// while(counter <= 40){
//   console.log(counter);
//   counter +=2;
// }


console.log('Print all odd numbers between 300 and 333');

let n = 300
while(n <= 333){
  // if(n % 2 !== 0){
  if(n % 2 === 1){
  console.log(n);
  }
  n ++;
}
///Version 2
// while(n <= 333){
//   console.log(n);
//   n += 1;
// }


console.log('Print all numbers divisible by 5 And 3 between 5 and 50');

let num = 5
while( num <= 50){
  if((num % 5 === 0) && (num % 3 === 0)){
  console.log(num);
  }
  num ++;
}
