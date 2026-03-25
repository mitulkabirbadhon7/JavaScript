const prompt = require('prompt-sync')();

const myArray = [1,2,3,4,5,true,'hello',null]

// for (let i = 0 ; i <myArray.length; i++){

//     if(typeof myArray[i] === 'number'){
//     console.log(myArray[i]);
//     }
//     else break;
// }

// myArray.push('Badhon')
// console.log(myArray[myArray.length-1]);
// myArray.pop();
// console.log(myArray[myArray.length-1]);

// const myArray2 = new Array(10)

// let n = Number(prompt("Enter size:"));

// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt(`Enter element ${i}:`));
// }
// arr.unshift(4); // insert 4 at the beginning
// arr.shift(); // remove the first element
// console.log(arr);
// console.log(arr.includes(4));
// const newArray = myArray.join()
// console.log(newArray);
// console.log(myArray);
// console.log(typeof newArray);


// //slice vs splice important for interview

// const arr1 = [1,2,3,4,5,6];
// console.log("A",arr1);
// console.log("\n");

// const newArr1 = arr1.slice(1,3)


// console.log("B",newArr1);
// console.log("A",arr1);

// const newArr2 = arr1.splice(1,3) // splice will change the original array
// console.log("C",newArr2);
// console.log("A",arr1);

const array1 = [1,2,3,4,5,6]
const array2 = [7,8,9,10]
// array1.push(array2)
// console.log(array1);

console.log()
const mmargedaaaray=array1.concat(array2)
console.log(mmargedaaaray);

