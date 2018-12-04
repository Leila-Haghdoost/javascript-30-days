// let userName = prompt("What is your name?")
// alert("Nice to meet you," + userName)
// console.log("Also great to meat you; " + userName)
//
// let city = prompt("where are you from")
// alert (userName + " from " + city + " come Here!")

/////////////////////////////////////////////


// let firstName = prompt("What is your first name?")
// let lastName = prompt("What is your last name?")
// alert("Nice to meat you " + firstName + "" + lastName)
// let age = prompt("How old are you?")
// alert("You are " + age +" years old!" )
// alert("We are happy to have you here 😊" )


///////////////AGE CALCULATOR/////////////////////

// alert('loaded!')
//
// let age = prompt("how old are you?")
// // let currentYear = prompt("What is the current year?")
// let year = 365
// let daysAlive = year * age
// alert("You've been alive for " + daysAlive + "days" )


///////////////AGE CALCULATOR/////////////////////

// alert('loaded!')
//
// let age = prompt("how old are you?")
// let currentYear = prompt("What is the current year?")
// let birthYear = currentYear - age
// alert("You've burn in " + birthYear)
// let daysAlive = 365 * age
// alert("You've been alive for " + daysAlive + "days" )


/////////////////////////////////


// let age = prompt('How old are you?')
// if(age < 18){
//   alert('you cannot enter the venue');
//
// } else if(age < 21 ){
//   alert('you can enter but cannot drink');
//
// } else {
//   alert('you can enter and drink');
// }

/////////////////////////////////////


// Get age and convert it to a Number (prompt always returns a String)

var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}

// If age is 21
if(age === 21) {
 console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
