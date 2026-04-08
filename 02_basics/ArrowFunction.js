// sum function 

function sum(a,b){

    return a + b;

}

function multiply(a,b){

    return a * b;
}

// Arrow Function => short way to write functions in modern JavaScript (ES6 and later)

const ArrowSum = (a,b) => { 
    return a + b;
}

const ArrowMultiply = (a,b) => {
    return a * b;
}
console.log(ArrowSum(5,0))
console.log(ArrowMultiply(5,0))

const nameprint = (name) =>{
    console.log(name);
}
nameprint("Mitul Kabir Badhon")

const printHello = () => {
    console.log("Hello World");
}
printHello()