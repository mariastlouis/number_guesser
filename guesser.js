// var randomNumber =
// Math.floor(Math.random()*100 +1);
// console.log(randomNumber);
// User guess
var guess = document.getElementById('guessField');
// Tells whether user is low or high and for out of range messages
var guessMessage = document.getElementById('lowHi');
// Displays big guessed number
var guessedNumber = document.getElementById('bigNumber');
// clear button
var clear = document.getElementById('guessClear');
// reset button
var reset = document.getElementById('guessReset');
// creates message 'your last guess was'
var lastGuest = document.getElementById('lastGuess');
// range button 
var submitRange = document.getElementById('rangeButton');
// set minimum number to 0 initially
var minNum = 0;
// gets the value min input
var boxMin = document.getElementById('guessMin');
// sets maxium number to 100 initially
var maxNum = 100; 
// gets value of max input
var boxMax = document.getElementById('guessMax');
// Area to put text to challenge user to increase range
var challengeMessage = document.getElementById('challenge_message');
// Button to increase range

// Set Default values 
function defaultValues(){
  boxMin.value=1;
  boxMax.value = 100;
  ranNumber = randomNumber();
};

// load default values
window.onload = function() {
  defaultValues();
};

//  Pull in the numbers from the range
function changeRange () {
// event.preventDefault();
checkRange();
minNum = boxMin.value;
maxNum = boxMax.value;
ranNum = randomNumber();
console.log(ranNum);
submitRange.setAttribute("disabled","true")
};

// submitRange.addEventListener('click', function(){
//   event.preventDefault();
//   checkRange();
// // check range here later
// minNum = boxMin.value;
// maxNum = boxMax.value;
// ranNum = randomNumber();
// console.log(ranNum);
// submitRange.setAttribute("disabled", "true");

// // enable set range button
// // add text here
// });

 // Generate Random number
 function randomNumber() {
  return Math.floor((Math.random() * (parseInt(maxNum) - parseInt(minNum) + 1)) + parseInt(minNum));
};

// Check to see if max number is bigger than min number


function checkRange (){
  if (boxMax.value <= boxMin.value){
    lastGuess.innerHTML= 'The max range number has to be bigger than the minimum. Try again.';
    guessMessage.innerHTML="";
    guessedNumber.innerHTML="";
  }; 
};

// check to see if guess matches random number. 
var userGuess; 

function checkGuess (event) {
  event.preventDefault();
  // First see if number entered is a number
  userGuess = parseInt(guess.value);
  if (isNaN(userGuess)) {
    lastGuess.innerHTML= 'That value is not a number. Try again.';
    guessMessage.innerHTML="";
    guessedNumber.innerHTML="";
  } 
  else if (parseInt(guess.value) < minNum || parseInt(guess.value) > maxNum) {
    lastGuess.innerHTML='Number is out of range, your number needs to be between ' + minNum + ' and ' + maxNum + '.';
    guessMessage.innerHTML="";
    guessedNumber.innerHTML="";
  } else if (userGuess === ranNum) {
    guessMessage.innerHTML = 'Boom';
    guessedNumber.innerHTML = 'Way to go!';
    challengeMessage.innerHTML ="Think you're so smart? Your range has been increased. Try again."
    boxMin.value = parseInt(minNum) -10;
    boxMax.value = parseInt(maxNum) +10;
    guess.value = "";
    lastGuess.innerHTML='';
    changeRange();
    checkInfo();
    
  } else if (userGuess < ranNum && userGuess >= minNum) {
    guessMessage.innerHTML = 'That is too low';
  // lastGuess.innerHTML = 'Your last guess was'
  guessedNumber.innerHTML = userGuess;
} else if (userGuess > ranNum){
  guessMessage.innerHTML  = 'That is too high';
  guessedNumber.innerHTML = userGuess;
  lastGuess.innerHTML = 'Your last guess was'
}
  // else if (valueIsNan = true){
  //   guessMessage.innerHTML = 'Um that is not a number. Guess again.';
  // guessedNumber.innerHTML = '';
  //  lastGuess.innerHTML = '';
  // }
  else {
   lastGuess.innerHTML='Try guessing again';
   guessMessage.innerHTML="";
   guessedNumber.innerHTML="";

 }
}

// Increase range when you click a button 
// challengeButton.addEventListener('click', function() {
//   boxMin.value = parseInt(minNum) -10;
//   boxMax.value = parseInt(maxNum) +10;
//   submitRange.removeAttribute("disabled");
//   challengeMessage.innerHTML = "";
//   challengeButton.setAttribute("disabled", "true");
//   guess.value = "";
//   changeRange();
//   checkInfo ();
// });
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

// check to see if anything is input in the number field
function checkInfo (){
  //first check for info 
  if (guess.value === "") {
    // If no info disable button 
    guessSubmit.setAttribute("disabled", "true");
    reset.removeAttribute("disabled");
    clear.removeAttribute("disabled");
  }
  //If info then enable button
  else {
    guessSubmit.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    clear.removeAttribute("disabled");
  }

};


clear.addEventListener('click', clearFields);

guess.addEventListener('input', checkInfo);
reset.addEventListener('click', resetButton);
guessSubmit.addEventListener('click', checkGuess);
submitRange.addEventListener('click', changeRange);
// still need- update UI
// when you level up - I'd like the range to be automatically submitted and a random number generated
