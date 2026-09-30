//callback 


function sum(a,b){
    console.log(a+b);
    console.log("Im inside sum");
    
    
}
function calculator(a,b,sumCallback){
    console.log("im inside calculator");
    
    sum(a,b);
}
calculator(1,2,sum)




const hello = () =>{
    console.log("Hello");
    
}
setTimeout(hello,3000)



