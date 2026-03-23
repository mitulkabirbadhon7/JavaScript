// let myDate = new Date()

// // console.log(myDate.toString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toLocaleString());   
// // console.log(myDate.getFullYear());
// // console.log(myDate.getMonth());
// // console.log(myDate.getDate());

// console.log(typeof myDate); // object //**** for interview 

//             // let myCreatedDate = new Date(2026,3,5) // month start with 0, so 3 means April
// let myCreatedDate = new Date('2026-04-05') // this is the best way to create date
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = Date.now()
// console.log(myTimestamp.toLocaleString());
// console.log(typeof myTimestamp); // number
// console.log(Math.floor(myTimestamp / 1000)); // convert to seconds for interview


let newDate = new Date()

// console.log(newDate.getFullYear());

console.log(` Day is ${newDate.getDay()} month is ${newDate.getMonth() + 1} and date is ${newDate.getDate()}`);
console.log(newDate.toLocaleString('default', {
     weekday: 'long'
     }));// for day name
