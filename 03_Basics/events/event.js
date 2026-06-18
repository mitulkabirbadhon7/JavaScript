
let btn1 = document.querySelector("#btn1")

/*btn1.onclick = () =>{
    console.log('Btn1 was clicked ');
    let a = 25;
    a++;
    console.log(a);
    
    
}
    */
let btn2 = document.querySelector('#btn2')

// btn2.ondblclick =(e) =>{
//     console.log(e);
    
//     console.log('button two was clicked');
    
    
// }

let box = document.querySelector("div");
box.onmouseover=(e) =>{
    console.log(e);
    
    console.log(e.type);
    console.log(e.target);
    
    
    console.log("you are inside the div");
    
};
btn1.addEventListener("click" , () => {
  console.log("button 1 was clicked--handler 1")
  alert("Hello!");
});
const handl2 = () => {
  console.log("button 1 was clicked--handler 2")
  alert("Hello!");
};
btn1.addEventListener("click" , () => {
  console.log("button 1 was clicked--handler 3")
  alert("Hello!");
});
btn2.addEventListener("dblclick",(e)=>{
    console.log('Button two was clicked');
    alert("Are you fucking kidding me!")
    console.log(e.type);
    
    
})
btn1.removeEventListener("click",handl2)