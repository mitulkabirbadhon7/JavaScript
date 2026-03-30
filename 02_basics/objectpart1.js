// singleton 
// object literal

//object.create() // object constructor

const JsUser = {   // keys and values 
    name: "Badhon",
    "Full Name": "Badhon Kabir", // name is key and badhon is value
    age: 22,
    loation : "Dhaka",
    email: "badhon@example.com",
    islogin : true,
    lastLogin: ["Monday","Tuesday","Wednesday"]
}
// console.log(JsUser.email); // usually use this
// console.log(JsUser["email"]); // for interview and for keys with space
// console.log(JsUser["Full Name"]); // full name cannot access by dot



// interview Qn : Symbol add in objects keys and print 

// const id = Symbol("id");

// console.log(id); // symbol

// const user = {
//     name : "Mkb",
//     [id] : 12345
// }

// console.log(user); // symbol is not print in object
// console.log(user[id]); // symbol is not print in object

// JsUser.email = "mitulkabirbadhon7@gmail.com";
// console.log(JsUser.email); // update email
// Object.freeze(JsUser); // freeze object so that we cannot update or add new property in object

// JsUser.email = "badhon2305101635@diu.edu.bd";
// console.log(JsUser.email); // email is not updated because object is frozen




JsUser.greeting = function(){
     console.log("Hello, I am " + this.name);
}
JsUser.greetingtwo = function(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());