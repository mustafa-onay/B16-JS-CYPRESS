/**
There is no Collection in JS. In JS we have only Arrays and Map
Array in JS is NOT fixed size.
There are two important Brackets in JS
    1st= [] --> creates an Array
    2nd= {} --> creates an Object
*/

let arr = new Array();
let arr2 = new Array(10);
let arr3 = new Array(1,2,3,4,5)

let color = new Array ("black")

let emptyArray = []
let colors = ["red", "green", "blue", "black"]

console.log(arr)

console.log(arr2)

console.log(arr3)

console.log(color)

console.log(emptyArray)

console.log(colors)

console.log(colors.toString())

console.log(colors[1])

let join = colors.join(" * ")

console.log(join)

const pop = colors.pop()

console.log(pop)
console.log(colors)

const push = colors.push("pink")

console.log(push)
console.log(colors)

const shift = colors.shift()

console.log(shift)
console.log(colors)

const unshift = colors.unshift("yellow")

console.log(unshift)
console.log(colors)

const sort = colors.sort()

console.log(sort)

const reverse = colors.reverse()

console.log(reverse)

console.log(colors.length)

for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    console.log(element)
}

console.log("*********************************")
for (const element of colors) {
    console.log(element)
}

console.log("*********************************")
colors.forEach(element => {
    console.log(element)
});

console.log("*********************************")

let multipleData = [11, "javascript", true, undefined]

multipleData.forEach(element => {
    console.log(typeof element, element)
});
