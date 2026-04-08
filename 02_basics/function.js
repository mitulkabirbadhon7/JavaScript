// console.log("Hello World");

"abc".toUpperCase();

[1,2,3].push(4)


function add(x,y){

    // x and y local variables or parameters it is only accessible inside the function
    addition = x+y;
    return addition; // single return statement is recommended for better readability and maintainability
    console.log("This will not be executed"); // code after return statement will not be executed

}

let a = 5;
let b = 10;

let sum = add(a,b);
// console.log(sum);

function printName(){

    console.log("Mitul Kabir Badhon");
    console.log("I am a software engineer");
    console.log("I am learning JavaScript");
}

// printName(); 
// printName();// reuse of code  redundancy optimization

function printNameWithParameter(name){

    // name = parameter
    console.log(name);
}

let ab = "Mitul Kabir Badhon";
printNameWithParameter(ab); // ab is argument


