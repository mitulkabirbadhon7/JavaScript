function getData(dataId,getnextData){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        console.log("data",dataId);
        resolve("Success");
        if(getnextData){ // if the function exist then execute 
           getnextData()
        }    
    },5000);
    })
    
}

//promise chain 
console.log("Getting data-1....");

let p1 = getData(1);
p1.then((res)=>{
//console.log(res);

console.log("getting data-2....");
let p2 = getData(2);
p2.then((res)=>{
    //console.log(res);
    console.log("getting data-3....");
    let p3 = getData(3);
    p3.then((res)=>{
        console.log(res);
        
    })
    
    
})


})