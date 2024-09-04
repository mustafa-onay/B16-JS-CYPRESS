let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

console.log(person.name); // Output: "John Doe"

//nested object

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2015,
    owner: {
        firstName: "Mustafa",
        lastName: "Onay",

    }
}

console.log(car.owner.firstName); // Output: "Mustafa"

let laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    specs: [
        "16GB RAM",
        "512GB SSD",
        "Intel Core i7 processor"
    ]
}

console.log(laptop.specs[0]); // Output: "16GB RAM"