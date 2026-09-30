//promise 


// let promise = new Promise((resolve, reject)=>{
//     console.log("im a promise");
//     //resolve("Success")
//     reject("Failed")
    
// })

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