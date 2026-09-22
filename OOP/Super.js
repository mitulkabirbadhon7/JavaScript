
class Person{
    constructor(){
        console.log("Enter in the  parent constructor ");
        this.type = "homo sepiens";
    }
    work(){
        console.log("Do Nothing");
        
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
        
    }
}

class Engineer extends Person{

    constructor(branch){
        console.log("Enter in the  child constructor ");
        
        super();
        this.subject = branch
            console.log("Exit from child constructor ");
    }
     
    work(){
        super.eat();
        console.log("Build And Solve Problem");
    }
    
        
}


let engObj = new Engineer("Cse eng")


