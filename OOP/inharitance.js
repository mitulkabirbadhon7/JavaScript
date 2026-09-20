/*class Parent{

    hello(){
        console.log("Im in the parent class")
    }
}

class Child extends Parent{

}

let childobj = new Child();
*/

class Person{

    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
        
    }
}

class Engineer extends Person{
    work(){
        console.log("Build And Solve Problem");
    }
    
        
}
let engObj = new Engineer()

