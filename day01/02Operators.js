// Operators are same wit Java
/**
 * comments are same with Java 
 * /
/*
*/

console.log(5 + 5 * (-2 + 4) -10 / 5);

//prefix and postfix

let x = 10;
console.log(x++);   //10
console.log(x);     //11

console.log(--x);   //10

console.log(x += 5);

console.log(5>3)

let num = 2
let num_str = "2"
let number = 2
let number_str = "2"

console.log(num == number)  //true
console.log(num_str == number_str)  //true
console.log(num == number_str) //true

console.log(num === number_str) // kontrolliert inhalt und datatypen // false
// == kontrolliert nur den Inhalt

console.log(true && true)   // true

console.log(true && false)  // false

console.log(true || false)  // true

// if, else, switch, break, continue

let num1 = 10
let num2 = 100

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
} else {
    console.log(`${num2} is greater than ${num1}`)
}

let month;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4: case 6: case 9: case 11:
    dayCount = 30;
    break;
  case 2:
    dayCount = 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(`Month ${month} has ${dayCount} days.`);