const score = 100
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

const num1 = 123.8966


// console.log(num1.toPrecision(4));


const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-US'));


// -------------------------------------maths ----------------------------------------------------

// console.log(Math.PI)

// console.log(Math.abs(6-8));

// console.log(Math.round(3.6));

// console.log(Math.floor(3.6));

// console.log(Math.ceil(3.2));

// console.log(Math.sqrt(16));

// console.log(Math.pow(2, 4));

// console.log(Math.min(3, 5, 1, 8));

// console.log(Math.max(3, 5, 1, 8));


console.log(Math.random()); // gives random value from 0 to 1 

console.log((Math.random() * 10) + 1); // random number between 1 and 10 shifting by multiply with 10

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) )+min); // multiply with max - min gives the range .. and + min mean that i need minimum of min value and + 1 for avoiding 0 
