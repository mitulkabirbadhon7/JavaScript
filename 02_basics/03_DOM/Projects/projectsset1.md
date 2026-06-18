# Project related to Dom

## project link 

[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1: Change Background Color based on Box click 

``` Javascript 

const buttons =document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  //console.log(button)
  button.addEventListener('click',function(e){

    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id
    }

  })
});



```


# solution code

## project 2 : Dsiplay BMI Info

``` Javascript 
const form = document.querySelector('form');
/* this usecase will give empty form
const height = parseInt(document.querySelector('#height').value)
*/

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid Height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid Height ${weight}`;
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the results 

    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi}<br> Under Weight</span>`
    }
    else if(bmi >= 18.6 && bmi < 24.9){
      results.innerHTML = `<span>${bmi}<br> Normal Range</span>`
    }
    else {
      results.innerHTML = `<span>${bmi}<br> OverWeight</span>`
    }
  }

});


```

# Solution Code 
## Project 3 : Local Clock Display

```JavaScript

const clock =document.getElementById('clock')
//const clock=document.querySelector('#clock') Select Any of these result will be same 

/*
writting Structure will be 

setInterval(function(){},1000) then unfold {} --> here 1000 for 1 sec , 2000 for 2 sec 
*/
setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Project 3 solution code : Guess the number 

```Javascript

const randomNumber = (parseInt(Math.random()*100+1))

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let NumGuess = 1 ;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
 
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)

  })
}

function validateGuess(guess){
 //  
 if(isNaN(guess)){
   alert('Please Enter a Valid Number')
 }
 else if(guess < 1 ){
  alert('Please Enter a  Number more than 1')
 }
 else if(guess >100){
  alert('Please Enter a  Number Less than 100')
 }
 else {
   prevGuess.push(guess)
   if(NumGuess === 11){
     displayGuess(guess)
     displayMessage(`Game Over.Random Number was ${randomNumber}`)
     endGame()
   }
   else {
     displayGuess(guess)
     checkGuess(guess)
   }
 }
 
}

function checkGuess(guess){

  if(guess === randomNumber){
    displayMessage('You Guessed it Right')
    endGame()
  }
  if(guess < randomNumber){
    displayMessage("Number is too low ")
  }
  if(guess > randomNumber){
    displayMessage("Number is too High ")
  }
}

function displayGuess(guess){
 
  userInput.value = ''
  guessSlot.innerHTML

}

function displayMessage(message){
  //
}



function endGame(){

//

}

function newGame(){
  //

 }








```