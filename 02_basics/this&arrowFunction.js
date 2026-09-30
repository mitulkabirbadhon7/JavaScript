// const mkb=(name,greetings)=>{
//     console.log(greetings + " " + name);
    
// }

// mkb("Badhon","Good Afternoon")

const x={
    name : "Badhon",
    role : "Backend Dev",
    exp  : 5,
    show: function(){
        
        setTimeout(()=>{
             console.log(`The name is ${this.name}`);
        },2000)
       
    }
    }

x.show()
