// singletone 

//const mkbUser = new Object();



const mkbUser = {} //not singleton 

mkbUser.name = "Mitul Kabir Badhon"
mkbUser.age = 22
mkbUser.email = "mitulkabirbadhon@gmail.com"

// console.log(mkbUser);

const regularUser = {

    email : "some@example.com",
    name : "Regular User",
    fullname :{
        userfullname :{
                firstName : "mkb",
                lastName : "User"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.firstName); // access nested object

// marge objects 

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const margeObj = {...obj1,...obj2}; // spread operator to marge objects

// console.log(margeObj);
const margeObj2 = Object.assign({},obj1,obj2); // another way to marge objects

// console.log(margeObj2);

const users = [{

    id : 1,
    name : "Badhon",
    email : "badhon@example.com"
},
{
    id : 2,
    name : "Mitul Kabir Badhon",
    email : "mkb@example.com"
},

]
console.log(users[0].name);


console.log(mkbUser);

console.log(Object.keys(mkbUser));// get all keys of object data type is array
console.log(Object.values(mkbUser)); // get all values of object data type is array
console.log(Object.entries(mkbUser)); // get all keys and values of object data type is array of arrays

console.log(mkbUser.hasOwnProperty("name")); // check if object has property or not





