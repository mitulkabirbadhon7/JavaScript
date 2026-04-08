// For each is a method 
// that is used to iterate over an array

const numbers = [1, 2, 3, 4, 5];


// in js Function can be passed as an argument to another function and the argument is called callback function
    
numbers.forEach(function printvalue(value){ //value at each index


   // console.log(value);
});
numbers.forEach((value, index, array) => console.log(value, index, array)); // using arrow function

//Interview Qn---- What is a Higher Order Function/methods?
// Higher Order function takes another function as an parameter or returns a function as a result 


// Q. For Given array of numbers, print the square of each number using forEach method

const numbers2 = [10, 29, 32, 41, 55];
numbers2.forEach((value) => console.log(value * value));

