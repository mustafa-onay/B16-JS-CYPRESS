function addVoid(num1, num2){
    console.log(num1 + num2)
}

addVoid (2,3);

function addReturn(num1, num2){
    return num1 + num2;
}

console.log(addReturn(4,5));

/** 
    * They call functions as "First Class Citizens of JavaScript"
    * JavaScript is a function oriented language
    * What we can do with functions;
        1. We can pass a function as an argument to other functions
        2. We can return a function from a function
        3. We can store a function into a variable
    * 
*/

let devide = function(num1, num2){
    return num1 / num2;
}

console.log(devide(20,4))

let sameDevide = devide

console.log(sameDevide(50,5))

function average(num1, num2, fn) {
    return fn(num1, num2) / 2
}

let resultAverage = average(40,20, addReturn)

console.log(resultAverage)