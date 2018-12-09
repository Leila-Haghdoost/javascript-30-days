//console.log('For Loop ');
// var str = "hello"
// for (var i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
//
//
// //console.log('While Loop ');
// var str = "hello"
// var count = 0
//
// while(count < str.length){
//   console.log(str[count]);
//   count ++;
// }




console.log('Print all numbers between -10 and 19');
for( var i = -10; i<= 19; i++){
  console.log(i);
}

console.log('Print all even numbers between 10 and 40');
for( var i = 10; i<= 40; i+=2){
  if(i % 2 === 0){
    console.log(i);
  }
}
//version2
// for( var i = 10; i<= 40; i+=2){
//   console.log(i);
// }

console.log('Print all odd numbers between 300 and 333');

for( var i = 300; i<= 333; i++){
  if(i % 2 !== 0){
  console.log(i);
  }
}
//version2
// for( var i = 300; i<= 333; i++){
//   console.log(i+= 1);
// }


console.log('Print all numbers divisible by 5 And 3 between 5 and 50');

for (var i = 5; i < 50; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log(i);
  }
}



//
// console.log('Exercise 1');
//
// for(var i = 0; i <= 16; i+=8){
//   console.log(i);
// }
//
// var str = "ahceclwlxo";
// for(var i = 0; i < str.length; i++){
//   console.log(str[i]);
// }
// var str = "ahceclwlxo";
// for(var i = 1; i < str.length; i+=2){
//   console.log(str[i]);// result would be "hello"
// }
//
