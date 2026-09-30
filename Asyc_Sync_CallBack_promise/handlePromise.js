// //how to use promise when it comes

// const getPromise = ()=>{

//     return new Promise((resolve,reject)=>{
//         console.log("Im a promise");
//         //resolve("Success");
//         reject("error");
        
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfill",res);
    
// });

// promise.catch((err)=>{
//     console.log("Not fullfilled",err);
    
// })





function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data-1");
            resolve("Success");
            
        },4000)

    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data-2");
            resolve("Success");
            
        },4000)

    })
}


// console.log("Fetching Data-1....");
// let p1 = asyncFunc1()
// p1.then((res)=>{
//     console.log(res);
    
// })
// console.log("Fetching Data-2....");
// let p2 = asyncFunc2()
// p2.then((res)=>{
//     console.log(res);
    
// })

//we need data 1 then wait then data 2 

// solution --> promise chain

console.log("Fetching Data-1....");
let p1 = asyncFunc1()
p1.then((res)=>{
    console.log(res);
    console.log("Fecthing Data-2....");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
        
    })
    
    
})