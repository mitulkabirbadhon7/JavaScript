 let DATA = "Hello Im Mitul Kabir Badhon"

class User{

    constructor(name, email){
        this.name = name 
        this.email = email
    }
    viewData(){
        console.log("Website Data = ", DATA);
        
    }
}

class Admin extends User{

    editData(){
        console.log("You can Now Edit the data");
        DATA = "hello"
        
    }
}

let student1 = new User("Badhon", "Mitulkabirbadhon7@gmail.com");
let student2 = new User("mkb", "abc@gmail.com");
let teacher1 = new User("fahad Faisal", "fahad@gmail.com");

let admin = new Admin("Mitul","mkb@admin.com");
