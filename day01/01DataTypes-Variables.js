console.log("i learn javascript");

/**
 * primitive data types
 * number, string, boolean, undefined null
 *
 * non-primitive types
 * object, array, function
 *
 * javascript is a dynamic typing language
 *
 * 3 different types of data types
 *
 * var  : global scope variable
 *      : can change the value later
 *      : can define again same variable
 *
 * let  : its block scope variable
 *      : can change the value later
 *      : cannot define same variable later
 *
 * const :constant variable
 *
 * */

let a;

console.log(a)
console.log(typeof a)

a = 10;

console.log(a)
console.log(typeof a)

a = "batch 16"

console.log(a)
console.log(typeof a)

a = true

console.log(a)
console.log(typeof a)

//let a = false - cannot define same variable later

a = false

console.log(a)
console.log(typeof a)

let b = 7, c = 'Cypress'

console.log(b + c)
console.log(b,c)
// console.log(b*c)

let d = "I am learning "

a = "Javascript"

console.log(d + a + " and " + c)
console.log(`${d}${a} and ${c}`)

var name = "mustafa"
var age = 33
var nameObject = {firstName:"mustafa", lastName:"onay"}
var isActive = false
var skills = ["javascript", "Cypress", "java"]

console.log(`My name is ${nameObject.firstName} ${nameObject.lastName} and I am ${age} years old.`)

console.log(name) //mustafa

var name = "Orhan"  // Orhan

console.log(name)

//object

var student={
    firstName:"Jack",
    lastName:"Sparrow",
    age:68,
    height: 180,
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}

const ageValue = student.age
console.log(ageValue)

const fullNameValue = student.fullName()

console.log(fullNameValue)