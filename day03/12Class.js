class SmartPhone{

    constructor(brand, model, price, year, features, specs){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.year = year;
        this.features = features;
        this.specs = specs;
    }
    getInfo(){
        return `The ${this.brand} and ${this.model} releases for ${this.year} and ${this.features} and ${this.specs.ram} is ${this.price}`
    }
}

let smartPhone1 = new SmartPhone(
    "Apple",
    "iPhone 12 Pro Max",
    120000,
    2021,
    ["A15 Bionic chip", "128GB storage", "12MP camera"],
    {
        processor: "Snapdragon",
        memory: "6GB",
        ram: "4GB"
    }
)

console.log(smartPhone1.getInfo())