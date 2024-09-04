const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3,5))

const multiply = (num1, num2) => num1 * num2

console.log(multiply(4,7))

let square = num => num * num

console.log(square(5))

const createPerson = (name, age) => ({
    name: name,
    age: age
})

let mustafa = createPerson("Mustafa", 33)

console.log(mustafa)

var numbers = [1,2,3,4,5]
const squareNumbers = numbers.map((num) => num * num)

console.log(squareNumbers)

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

let mergedArr = [...arr1, ...arr2]

console.log(mergedArr)

let maxNumber = Math.max(...arr2)

console.log(maxNumber)

let sum = (...nums) => {
    let total = 0
    for(const num of nums){
        total+=num
    }
    return total
}

console.log(sum(1,2,3,3,4,5))

let lastArray = [...arr1,...arr2, 11,12]

console.log(lastArray)

let str = "hello"

let charArray = [...str]

console.log(charArray)