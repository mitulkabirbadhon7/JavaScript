class Car{
    constructor(){
        console.log("Creating new Object");
        
    }
    start(){
        console.log("Start function");
    }

    stop(){
        console.log("Stop function");
    }

    setBrand(brand){
        this.brandName = brand;
    }
    setColor(color){
        this.carColor = color;
    }
}
let civic = new Car(); //constructor invoke
let corolla = new Car(); //constructor  invoke
corolla.setBrand("Toyota");
corolla.setColor("Black");
civic.setBrand("Honda");
civic.setColor("Blue");