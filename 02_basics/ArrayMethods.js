//Map -- return a new array with the results

let arr = [1, 2, 3, 4, 5];

//arr.map((value) => console.log(value * value)); // using arrow function
arr.map(function(value){ // using normal function
   // console.log(value * value);
});


const sqnumbers = arr.map(val =>{

    return val * val;
});

sqnumbers.forEach(value => console.log(value));

//Interview Qn--- What is the difference between forEach and map method?
// forEach method does not return a new array and it is used for side effects like printing values or modifying the original array
// map method returns a new array with the results of calling a provided function on every element in the calling array and it does not modify the original array


// Filter -- return a new array with the elements that pass the test implemented by the provided function

let array = [2,3,4,5,6,7,8,9,10];

let newArr = array.filter(value => {
    return value %2 === 0;
})
newArr.forEach(value => console.log(value));

// Interview Qn--- What is the difference between filter and map method?
// filter method returns a new array with the elements that pass the test implemented by the provided function and it does not modify the original array
// map method returns a new array with the results of calling a provided function on every element in the calling array and it does not modify the original array


// reduce method -- it executes a reducer function on each element of the array, resulting in a single output value

let array2 = [1,2,3,4,5];

const output = array2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log(output);

//Q find largest 
const arra= [10, 20, 5, 15, 30];

const largest = arra.reduce((previousValue, currentValue) => {
    if (previousValue > currentValue){
        return previousValue;;
    }
    else{
        return currentValue;
    }
});
console.log(largest);