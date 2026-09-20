class Car{

    constructor(brand,milage,price){ //setting value with constructor
        console.log("Creating Object")
        this.brand = brand
        this.milage = milage
        this.price = price
    }
}

let civic = new Car("Honda","10km",100000);
let corolla = new Car ("Toyota","7.5Km",20000)