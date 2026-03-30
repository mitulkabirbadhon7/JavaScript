const marvel_heros = ["badhon","mkb"];
const dc_heros = ["kbm"];
const hero_of_dhaka = ["Mitul Kabir Badhon"]

const all_new_heros = [...marvel_heros, ...dc_heros,...hero_of_dhaka]

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray = another_array.flat(Infinity);

console.log(realanotherarray);

// usefull 


console.log(Array.from("Badhon")); // make text to array
console.log(Array.from({name:"Badhon",age:22})); // interesting for interview


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3)); // make array from variables    
