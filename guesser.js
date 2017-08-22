var randomNumber =
Math.floor(Math.random()*100 +1);
console.log(randomNumber);

var guess = document.getElementById('guessField');
var guessMessage = document.getElementById('lowHi');
var guessedNumber = document.getElementById('bigNumber');
var clear = document.getElementById('guessClear');
var reset = document.getElementById('guessReset');
var lastGuest = document.getElementById('lastGuess');
var minNum = document.getElementById('guessMin');
var maxNum = document.getElementById('guessMax');

function checkGuess (event) {
  event.preventDefault();
  var valueIsNan =  isNaN(guess.value);
  console.log(valueIsNan);
  var userGuess = parseInt(guess.value);
  if (userGuess === randomNumber) {
    guessMessage.innerHTML = 'Boom';
    guessedNumber.innerHTML = 'Way to go!';
  } else if (userGuess < randomNumber){
  guessMessage.innerHTML = 'That is too low';
  lastGuess.innerHTML = 'Your last guess was'
  guessedNumber.innerHTML = userGuess;

  } else if (userGuess > randomNumber){
  guessMessage.innerHTML  = 'That is too high';
   guessedNumber.innerHTML = userGuess;
   lastGuess.innerHTML = 'Your last guess was'
  }
  else if (valueIsNan = true){
    guessMessage.innerHTML = 'Um that is not a number. Guess again.';
  guessedNumber.innerHTML = '';
   lastGuess.innerHTML = '';
  }
  else {
    guessMessage.innerHTML = 'Brain fart. Try again.';
  }
}

/* Clear the text field */

function clearFields(event) {
  event.preventDefault();
  //reset guess value
  guess.value = "";
  guessMessage.innerHTML = "";
}

/* Enable reset button  */
function resetButton() {
  window.location.reload();
}

function checkInfo (){
  console.log("checkInfo")
  //first check for info 
  if (guess.value === "") {
    // If no info disable button 
    guessSubmit.setAttribute("disabled", "true");
  }
  //If info then enable button
  else {
    guessSubmit.removeAttribute("disabled");
     reset.removeAttribute("disabled");
  clear.removeAttribute("disabled");
  }
 
};


clear.addEventListener('click', clearFields);
guessSubmit.addEventListener('click', checkGuess);
guess.addEventListener('input', checkInfo);
reset.addEventListener('click', resetButton);
