//change color by mouseover

const box = document.querySelector('#box')

box.addEventListener("mouseover",(e)=>{
    console.log(e.type)
    console.log("you are in the box")
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("div").style.backgroundColor = "white"
    document.querySelector("div").style.color = "black"
    
})
box.addEventListener("mouseout",()=>{
    console.log("you are outside in the box");
    
document.querySelector("body").style.backgroundColor = "white"
document.querySelector("div").style.backgroundColor = "black"
document.querySelector("div").style.color = "white"
})
