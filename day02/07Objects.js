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

let calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    }
}

console.log(calculator.add(5, 3)); // Output: 8

// complex object

let university = {
    name: "Harward",
    location: "Cambridge, Massachusetts, USA",
    established: 1636,
    departments: ["Computer Science", "Mathematics", "Physics"],
    ranking: {
        world: 1,
        national: 1
    },
    getInfo: function(){
        return "The University of " + this.name + " is located in " + this.location + "and was established in " + this.established + ".";
    }
}

console.log(university.getInfo()); // Output: "The University of Harvard is located in Cambridge, Massachusetts, USA

delete laptop.model

console.log("model" in laptop); // Output: false
console.log("brand" in laptop); // Output: true

