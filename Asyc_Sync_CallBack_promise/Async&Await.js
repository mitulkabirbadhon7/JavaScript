//  function api(){

//     return new Promise((resolve,reject)=>{
      
//        setTimeout(()=>{

//           console.log("Weather Data");
//            resolve("Success")
        
//        },2000);
//     })
// }

// async function getWeatherData(){
//     await api(); //1st 
//     await api();//2nd
// }

// getWeatherData()

function getData(dataId){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        console.log("data",dataId);
        resolve("Success");
    },5000);
    })
    
}

//async await

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

//no need to create another function with ifee if we use 

(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();