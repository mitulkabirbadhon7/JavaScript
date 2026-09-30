//Call back hell

function getData(dataId){

    setTimeout(()=>{
        console.log("data",dataId);
    },2000);
    
}

getData(1)//2s
getData(2)//2s
getData(3)//2s


//problem is we want 1 first then 2 then 3 not all at a time but here it comes in same time all 
//now Solution is use callback 

function getData(dataId,getnextData){

    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextData){ // if the function exist then execute 
           getnextData()
        }    
    },2000);
    
}

getData(1,()=>{
    getData(2);
})//2s

//now i want to get data 1 , data 2 , data 3 just repeat same thing

function getData(dataId,getnextData){

    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextData){ // if the function exist then execute 
           getnextData()
        }    
    },2000);
    
}

getData(1,()=>{
    console.log("Getting data 2...");
    
    getData(2,()=>{
            console.log("Getting data 3...");

        getData(3,()=>{
                console.log("Getting data 4...");

            getData(4);
        });
    }
    );
})//2s   // this looks soo terrible , nested callback not understandable ---> this is Callback Hell 